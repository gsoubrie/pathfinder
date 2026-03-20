"use strict";

const PF2_ARCHETYPES = (function () {
    
    const self = {};
    
    /*
    -------------------------
    UTILS
    -------------------------
    */
    
    self.wait = ( ms ) => new Promise( r => setTimeout( r, ms ) );
    
    self.waitFor = async( selector ) => {
        while ( !document.querySelector( selector ) ) {
            await self.wait( 100 );
        }
    };
    
    /*
    -------------------------
    ROWS
    -------------------------
    */
    
    self.getRows = () => {
        return document.querySelectorAll( ".mdc-data-table__content .element-row" );
    };
    
    /*
    -------------------------
    BASE DATA
    -------------------------
    */
    
    self.parseRow = ( row ) => {
        return {
            name   : row.querySelector( ".cdk-column-name_trans" )?.innerText.trim(),
            name_en: row.querySelector( ".cdk-column-name" )?.innerText.trim(),
            level  : parseInt( row.querySelector( ".cdk-column-level" )?.innerText || 0 )
        };
    };
    
    /*
    -------------------------
    TITLE PARSER (FIX)
    -------------------------
    */
    
    self.parseTitle = ( node ) => {
        
        // Clone pour ne pas modifier le DOM
        const clone = node.cloneNode( true );
        
        // 🔥 Supprime toutes les icônes
        clone.querySelectorAll( "mat-icon" ).forEach( el => el.remove() );
        
        let raw = clone.innerText
                       .replace( /\n/g, " " )
                       .replace( /\s+/g, " " )
                       .trim();
        
        let levelMatch = raw.match( /Don\s*(\d+)/i );
        let level      = levelMatch ? parseInt( levelMatch[ 1 ] ) : null;
        
        let name = raw.replace( /Don\s*\d+/i, "" ).trim();
        
        let id = name
        .toLowerCase()
        .normalize( "NFD" ).replace( /[\u0300-\u036f]/g, "" )
        .replace( /[^a-z0-9]+/g, "_" )
        .replace( /^_|_$/g, "" );
        
        return { id, name, level };
    };
    
    /*
    -------------------------
    DETAILS PARSER
    -------------------------
    */
    
    self.parseDetails = ( details ) => {
        
        const data = {
            traits     : [],
            description: [],
            feats      : []
        };
        
        /*
        TRAITS
        */
        
        details.querySelectorAll( ".trait" ).forEach( t => {
            data.traits.push( t.innerText.trim() );
        } );
        
        /*
        DESCRIPTION + FEATS
        */
        
        const descContainer = details.querySelector( ".description" );
        
        if ( !descContainer ) {
            return data;
        }
        
        let currentFeat = null;
        
        descContainer.childNodes.forEach( node => {
            
            /*
            FEAT TITLE
            */
            if ( node.tagName === "H2" ) {
                
                const parsed = self.parseTitle( node );
                
                currentFeat = {
                    id         : parsed.id,
                    name       : parsed.name,
                    level      : parsed.level,
                    description: []
                };
                
                data.feats.push( currentFeat );
                return;
            }
            
            /*
            PARAGRAPH
            */
            if ( node.tagName === "P" ) {
                
                const text = node.innerText.trim();
                
                if ( !text ) {
                    return;
                }
                
                if ( currentFeat ) {
                    currentFeat.description.push( text );
                }
                else {
                    data.description.push( text );
                }
            }
            
            /*
            LIST (rare but useful)
            */
            if ( node.tagName === "UL" ) {
                
                const items = [];
                
                node.querySelectorAll( "li" ).forEach( li => {
                    const text = li.innerText.trim();
                    if ( text ) {
                        items.push( text );
                    }
                } );
                
                if ( currentFeat ) {
                    currentFeat.description.push( ...items );
                }
                else {
                    data.description.push( ...items );
                }
            }
            
        } );
        
        return data;
    };
    
    /*
    -------------------------
    SCRAPE
    -------------------------
    */
    
    self.scrape = async() => {
        
        await self.waitFor( ".element-row" );
        
        const rows    = self.getRows();
        const results = [];
        
        for ( const row of rows ) {
            
            const base = self.parseRow( row );
            
            row.querySelector( ".cdk-column-name_trans" ).click();
            
            await self.wait( 150 );
            
            const details = row.nextElementSibling;
            
            const fullData = {
                ...base,
                ...self.parseDetails( details )
            };
            
            console.log( "✔", fullData.name );
            
            results.push( fullData );
        }
        
        return results;
    };
    
    /*
    -------------------------
    DOWNLOAD
    -------------------------
    */
    
    self.download = ( data, filename = "archetypes.json" ) => {
        
        const blob = new Blob(
            [JSON.stringify( data, null, 2 )],
            { type: "application/json" }
        );
        
        const url = URL.createObjectURL( blob );
        
        const a    = document.createElement( "a" );
        a.href     = url;
        a.download = filename;
        a.click();
        
        URL.revokeObjectURL( url );
    };
    
    return self;
    
})();

(async() => {
    
    const data = await PF2_ARCHETYPES.scrape();
    
    console.log( data );
    
    PF2_ARCHETYPES.download( data );
    
})();