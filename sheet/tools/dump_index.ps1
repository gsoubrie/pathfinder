<#
    One-shot diagnostic : dump index.html (with a real save id) the same way
    run_headless_tests.ps1 dumps tests.html, so runtime errors of the real
    boot surface in the dump files. -LogLevel adds --enable-logging=stderr
    (the console messages land in the err file).
#>
param(
    [string] $ProjectDir = "C:\dev\workspace\Perso\Pathfinder",
    [string] $PageUrl    = "",
    [string] $WindowSize = "1400,2400",
    [switch]  $LogLevel,
    [int]    $BudgetMs   = 20000
)
$ErrorActionPreference = "Stop"
$edgeExe    = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$dumpFile   = Join-Path $ProjectDir ".tests_dom_dump_index.html"
$errFile    = Join-Path $ProjectDir ".tests_dom_err_index.txt"
$profileDir = Join-Path $ProjectDir ".tests_edge_profile"

$testProcesses = Get-CimInstance Win32_Process | Where-Object {
    $null -ne $_.CommandLine -and $_.CommandLine.Contains( $profileDir ) -and
    ( $_.Name -eq "msedge.exe" -or $_.Name -eq "cmd.exe" )
}
foreach ( $testProcess in $testProcesses ) {
    cmd /c "taskkill /PID $($testProcess.ProcessId) /T /F > nul 2>&1"
}
if ( Test-Path $dumpFile ) { Remove-Item $dumpFile -Force -ErrorAction SilentlyContinue }
if ( Test-Path $errFile )  { Remove-Item $errFile  -Force -ErrorAction SilentlyContinue }

$loggingArguments = ""
if ( $LogLevel ) { $loggingArguments = " --enable-logging=stderr --v=0" }
$edgeArguments = "--headless=new --disable-gpu --window-size=$WindowSize --user-data-dir=`"$profileDir`" --virtual-time-budget=$BudgetMs$loggingArguments --dump-dom `"$PageUrl`""
$cmdArguments  = "/c start `"`" /b `"$edgeExe`" $edgeArguments > `"$dumpFile`" 2> `"$errFile`""
Start-Process -FilePath "cmd.exe" -ArgumentList $cmdArguments -WindowStyle Hidden

$deadline = [DateTime]::UtcNow.AddSeconds( 90 )
while ( [DateTime]::UtcNow -lt $deadline ) {
    $tail = ""
    if ( Test-Path $dumpFile ) {
        $item = Get-Item $dumpFile
        if ( $item.Length -gt 200 ) {
            $stream = New-Object System.IO.FileStream( $dumpFile, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite )
            try {
                $to_read = [Math]::Min( 64, $item.Length )
                $stream.Seek( -$to_read, [System.IO.SeekOrigin]::End ) | Out-Null
                $buffer  = New-Object byte[] $to_read
                $read    = $stream.Read( $buffer, 0, $to_read )
                $tail    = [System.Text.Encoding]::UTF8.GetString( $buffer, 0, $read )
            }
            finally { $stream.Close() }
            if ( $tail -match "</html>" ) {
                Start-Sleep -Milliseconds 500
                break
            }
        }
    }
    Start-Sleep -Milliseconds 1000
}

$testProcesses = Get-CimInstance Win32_Process | Where-Object {
    $null -ne $_.CommandLine -and $_.CommandLine.Contains( $profileDir ) -and
    ( $_.Name -eq "msedge.exe" -or $_.Name -eq "cmd.exe" )
}
foreach ( $testProcess in $testProcesses ) {
    cmd /c "taskkill /PID $($testProcess.ProcessId) /T /F > nul 2>&1"
}
Write-Output "DUMP: $dumpFile"
