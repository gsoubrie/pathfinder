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
    
    self.cleanNodeText = ( node ) => {
        const clone = node.cloneNode( true );
        clone.querySelectorAll( "mat-icon" ).forEach( el => el.remove() );
        
        return clone.innerText
                    .replace( /\n/g, " " )
                    .replace( /\s+/g, " " )
                    .trim();
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
    TITLE PARSER
    -------------------------
    */
    
    self.parseTitle = ( node ) => {
        
        let raw = self.cleanNodeText( node );
        
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
    PREREQUISITES PARSER
    -------------------------
    */
    
    self.parsePrerequisites = ( text ) => {
        
        if ( !text.toLowerCase().startsWith( "prérequis" ) ) {
            return null;
        }
        
        const result = {};
        
        /*
        -------------------------
        SKILLS
        -------------------------
        */
        
        const skillMapping = {
            arcanes   : "arcane",
            nature    : "nature",
            occultisme: "occultism",
            religion  : "religion"
        };
        
        if ( text.match( /arcanes|nature|occultisme|religion/i ) ) {
            
            const skills = [];
            
            Object.keys( skillMapping ).forEach( fr => {
                if ( text.toLowerCase().includes( fr ) ) {
                    skills.push( {
                        level: "trained",
                        type : skillMapping[ fr ]
                    } );
                }
            } );
            
            result.skills = {
                choices: 1,
                list   : skills
            };
        }
        
        /*
        -------------------------
        ARCHETYPES / DEDICATIONS
        -------------------------
        */
        
        const archetypes = [];
        
        // match "Dévouement : XXX"
        const matches = text.match( /dévouement\s*:\s*([^,]+)/gi );
        
        if ( matches ) {
            matches.forEach( m => {
                let name = m.split( ":" )[ 1 ].trim();
                
                const id = name
                .toLowerCase()
                .normalize( "NFD" ).replace( /[\u0300-\u036f]/g, "" )
                .replace( /[^a-z0-9]+/g, "_" )
                .replace( /^_|_$/g, "" );
                
                archetypes.push( {
                    id,
                    name
                } );
            } );
        }
        
        if ( archetypes.length ) {
            result.archetypes = archetypes;
        }
        
        return Object.keys( result ).length ? result : null;
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
            skills      : []
        };
        
        /*
        TRAITS (DEDUP)
        */
        
        const traitSet = new Set();
        
        details.querySelectorAll( ".trait" ).forEach( t => {
            const val = t.innerText.trim();
            if ( val ) {
                traitSet.add( val );
            }
        } );
        
        data.traits = Array.from( traitSet );
        
        
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
                
                data.skills.push( currentFeat );
                return;
            }
            
            /*
            PARAGRAPH
            */
            if ( node.tagName === "P" ) {
                
                const text = self.cleanNodeText( node );
                
                if ( !text ) {
                    return;
                }
                
                const prereq = self.parsePrerequisites( text );
                
                if ( prereq ) {
                    if ( currentFeat ) {
                        currentFeat.required = prereq;
                    }
                    else {
                        data.required = prereq;
                    }
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
            LIST
            */
            if ( node.tagName === "UL" ) {
                
                node.querySelectorAll( "li" ).forEach( li => {
                    
                    const text = self.cleanNodeText( li );
                    
                    if ( !text ) {
                        return;
                    }
                    
                    const prereq = self.parsePrerequisites( text );
                    
                    if ( prereq ) {
                        if ( currentFeat ) {
                            currentFeat.required = prereq;
                        }
                        else {
                            data.required = prereq;
                        }
                        return;
                    }
                    
                    if ( currentFeat ) {
                        currentFeat.description.push( text );
                    }
                    else {
                        data.description.push( text );
                    }
                } );
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