const CATEGORY_LABELS = {
    spell     : 'sort',
    ancestry  : 'race',
    'class'   : 'classe',
    feat      : 'don',
    item      : 'objet',
    monster   : 'monstre',
    condition : 'condition',
    background: 'historique',
    deity     : 'divinité',
    domain    : 'domaine',
    trait     : 'trait'
};

function getCategoryLabel ( cat ) {
    return CATEGORY_LABELS[ cat ] || cat || 'entrée';
}

// popup.js

let scrapedData = null;

const statusBar  = document.getElementById( "status" );
const statusDot  = statusBar.querySelector( ".dot" );
const statusText = document.getElementById( "status-text" );
const btnScrape  = document.getElementById( "btn-scrape" );
const results    = document.getElementById( "results" );
const statCount  = document.getElementById( "stat-count" );
const statErrors = document.getElementById( "stat-errors" );
const preview    = document.getElementById( "preview" );
const btnDl      = document.getElementById( "btn-download" );
const btnCopy    = document.getElementById( "btn-copy" );
const warnMsg    = document.getElementById( "warn-msg" );

let currentCategory = "unknown";

function setStatus ( type, text ) {
    statusBar.className    = "status-bar " + type;
    statusText.textContent = text;
}

async function checkPage () {
    try {
        const [tab] = await chrome.tabs.query( { active: true, currentWindow: true } );
        
        if ( !tab || !tab.url ) {
            setStatus( "error", "Impossible de lire l'onglet actif." );
            return;
        }
        
        if ( !tab.url.includes( "pf2e.pathfinder-fr.org/" ) ) {
            setStatus( "error", "Ouvrez une page de pf2e.pathfinder-fr.org" );
            warnMsg.innerHTML = '→ <a href="https://pf2e.pathfinder-fr.org/spells" target="_blank">Ouvrir les sorts</a>';
            return;
        }
        
        const response = await chrome.tabs.sendMessage( tab.id, { action: "get_page_info" } ).catch( () => null );
        
        if ( !response ) {
            setStatus( "error", "Content script non chargé. Rechargez la page." );
            return;
        }
        
        if ( !response.ready ) {
            setStatus( "info", "Page en chargement… attendez quelques secondes." );
            setTimeout( checkPage, 1500 );
            return;
        }
        
        currentCategory = response.category || "unknown";
        const lbl       = getCategoryLabel( currentCategory );
        setStatus( "ok", `Page prête — catégorie : « ${currentCategory} »` );
        btnScrape.textContent                               = `⚔ Extraire les ${lbl}s`;
        document.getElementById( "stat-label" ).textContent = lbl.charAt( 0 ).toUpperCase() + lbl.slice( 1 ) + "s";
        btnScrape.disabled                                  = false;
        
    }
    catch ( e ) {
        setStatus( "error", "Erreur : " + e.message );
    }
}

btnScrape.addEventListener( "click", async() => {
    btnScrape.disabled = true;
    setStatus( "info", "Extraction en cours…" );
    results.classList.remove( "visible" );
    scrapedData         = null;
    warnMsg.textContent = "";
    
    try {
        const [tab]    = await chrome.tabs.query( { active: true, currentWindow: true } );
        const response = await chrome.tabs.sendMessage( tab.id, { action: "scrape" } );
        
        if ( !response.success ) {
            setStatus( "error", response.error || "Échec de l'extraction." );
            if ( response.errors && response.errors.length > 0 ) {
                warnMsg.textContent = response.errors.slice( 0, 3 ).join( " | " );
            }
            btnScrape.disabled = false;
            return;
        }
        
        scrapedData  = response.entries;
        const count  = response.count;
        const cat    = response.category || currentCategory;
        const errLen = (response.errors || []).length;
        
        setStatus( "ok", `${count} entrée${count > 1 ? "s" : ""} (${cat}) extraite${count > 1 ? "s" : ""}.` );
        
        statCount.textContent  = count;
        statErrors.textContent = errLen;
        
        // Aperçu des 3 premières entrées
        const entries   = Object.entries( scrapedData ).slice( 0, 3 );
        let previewText = "{\n";
        entries.forEach( ( [id, entry] ) => {
            previewText += `  "${id}": {\n`;
            previewText += `    "category": "${entry.category}",\n`;
            previewText += `    "href": "${entry.href}",\n`;
            previewText += `    "id": "${entry.id}",\n`;
            previewText += `    "text": "${entry.text}"\n`;
            previewText += `  },\n`;
        } );
        if ( count > 3 ) {
            previewText += `  … (${count - 3} autres)\n`;
        }
        previewText += "}";
        preview.textContent = previewText;
        
        results.classList.add( "visible" );
        btnDl.disabled   = false;
        btnCopy.disabled = false;
        
        if ( errLen > 0 ) {
            warnMsg.textContent = `⚠ ${errLen} ligne(s) ignorée(s) (structure inattendue).`;
        }
        
    }
    catch ( e ) {
        setStatus( "error", "Erreur JS : " + e.message );
        btnScrape.disabled = false;
    }
} );

btnDl.addEventListener( "click", () => {
    if ( !scrapedData ) {
        return;
    }
    const json = JSON.stringify( scrapedData, null, 2 );
    const blob = new Blob( [json], { type: "application/json" } );
    const url  = URL.createObjectURL( blob );
    chrome.downloads.download( {
        url,
        filename: `pf2e_${currentCategory}_uuid.json`,
        saveAs  : false
    } );
    btnDl.textContent = "✓ Téléchargé !";
    setTimeout( () => {
        btnDl.textContent = "↓ Télécharger JSON";
    }, 2000 );
} );

btnCopy.addEventListener( "click", async() => {
    if ( !scrapedData ) {
        return;
    }
    const json = JSON.stringify( scrapedData, null, 2 );
    await navigator.clipboard.writeText( json );
    btnCopy.textContent = "✓ Copié !";
    setTimeout( () => {
        btnCopy.textContent = "⎘ Copier dans le presse-papier";
    }, 2000 );
} );

checkPage();