<#
    Runs tests.html in a headless Edge ISOLATED from the user's browser.

    History : the previous procedure launched msedge then cleaned up with
    "taskkill /IM msedge.exe /F", which killed EVERY Edge process on the
    machine - including the user's own browser windows (Round 76). Two
    traps drive the design below :
      - "Start-Process -RedirectStandardOutput" BLOCKS until the child
        exits, and headless Edge never exits on its own after --dump-dom ;
      - cleanup must never go by image name: only the process tree carrying
        the dedicated --user-data-dir profile of this run gets killed.

    Usage : powershell -NoProfile -ExecutionPolicy Bypass -File run_headless_tests.ps1
    The parsed report title is written to the standard output, the raw dump
    stays in .tests_dom_dump.html (removed at the start of the next run).
#>
param(
    [string] $ProjectDir    = "C:\dev\workspace\Perso\Pathfinder",
    [int]    $MaxWaitSeconds = 220,
    [int]    $PollMs         = 1000
)

$ErrorActionPreference = "Stop"

$edgeExe    = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$dumpFile   = Join-Path $ProjectDir ".tests_dom_dump.html"
$errFile    = Join-Path $ProjectDir ".tests_dom_err.txt"
$profileDir = Join-Path $ProjectDir ".tests_edge_profile"
$testsUrl   = "file:///" + $ProjectDir.Replace( "\", "/" ) + "/tests.html"

# Kill a leftover tree of a previous run FIRST : it still holds the dump
# file open, and a fresh run on the same profile would conflict with it.
# The filter matches the dedicated profile only (Round 76 : never by
# image name, the user's own browser must survive every test run).
# taskkill goes through cmd : a dead child (its parent's /T already took
# the tree) writes to stderr and $ErrorActionPreference would abort the
# script on a NativeCommandError otherwise
$testProcesses = Get-CimInstance Win32_Process | Where-Object {
    $null -ne $_.CommandLine -and $_.CommandLine.Contains( $profileDir ) -and
    ( $_.Name -eq "msedge.exe" -or $_.Name -eq "cmd.exe" )
}
foreach ( $testProcess in $testProcesses ) {
    cmd /c "taskkill /PID $($testProcess.ProcessId) /T /F > nul 2>&1"
}

if ( Test-Path $dumpFile ) { Remove-Item $dumpFile -Force -ErrorAction SilentlyContinue }
if ( Test-Path $errFile )  { Remove-Item $errFile -Force -ErrorAction SilentlyContinue }

# Launch DETACHED : cmd owns the redirections and returns at once (start /b),
# the dump handles belong to the headless Edge tree - Start-Process with
# redirect blocks until the child exits and must not carry this launch
# --window-size pins a desktop viewport : the responsive breakpoints of style.css
# must NOT apply during the scenario run (the default headless viewport is narrower
# than the sheet, 1240px)
$edgeArguments = "--headless=new --disable-gpu --window-size=1400,2400 --user-data-dir=`"$profileDir`" --virtual-time-budget=180000 --timeout=240000 --dump-dom $testsUrl"
$cmdArguments  = "/c start `"`" /b `"$edgeExe`" $edgeArguments > `"$dumpFile`" 2> `"$errFile`""
Start-Process -FilePath "cmd.exe" -ArgumentList $cmdArguments -WindowStyle Hidden

function Read-DumpTail ( [string] $file_path, [int] $bytes ) {
    if ( ! ( Test-Path $file_path ) ) { return "" }
    $item = Get-Item $file_path
    if ( $item.Length -lt 1 ) { return "" }
    $to_read = [Math]::Min( $bytes, $item.Length )
    # ReadWrite sharing : Edge writes the dump while this polls its tail,
    # an exclusive open (plain OpenRead) crashes on the writer's lock
    $stream = New-Object System.IO.FileStream( $file_path, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite )
    try {
        $stream.Seek( -$to_read, [System.IO.SeekOrigin]::End ) | Out-Null
        $buffer = New-Object byte[] $to_read
        $read = $stream.Read( $buffer, 0, $to_read )
        return [System.Text.Encoding]::UTF8.GetString( $buffer, 0, $read )
    }
    finally {
        $stream.Close()
    }
}

$deadline = [DateTime]::UtcNow.AddSeconds( $MaxWaitSeconds )
while ( [DateTime]::UtcNow -lt $deadline ) {
    $tail = Read-DumpTail -file_path $dumpFile -bytes 64
    if ( $tail -match "</html>" ) {
        Start-Sleep -Milliseconds 500
        break
    }
    Start-Sleep -Milliseconds $PollMs
}

# Kill ONLY this run's process tree, recognized by ITS dedicated profile :
# the user's own browser windows carry no trace of this path and survive
$testProcesses = Get-CimInstance Win32_Process | Where-Object {
    $null -ne $_.CommandLine -and $_.CommandLine.Contains( $profileDir ) -and
    ( $_.Name -eq "msedge.exe" -or $_.Name -eq "cmd.exe" )
}
foreach ( $testProcess in $testProcesses ) {
    cmd /c "taskkill /PID $($testProcess.ProcessId) /T /F > nul 2>&1"
}

$title = ""
if ( Test-Path $dumpFile ) {
    $html = Get-Content $dumpFile -Raw
    if ( $html -match 'class="test-report-title">([^<]*)<' ) {
        $title = $Matches[ 1 ]
    }
}
Write-Output "REPORT: $title"
