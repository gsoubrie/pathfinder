"use strict";

const PF2_SCRAPER = (function () {
    
    const self = {};
    
    /*
    -------------------------
    WAIT UTILS
    -------------------------
    */
    
    self.wait = ( ms ) => new Promise( resolve => setTimeout( resolve, ms ) );
    
    self.waitForElement = async( selector, timeout = 10000 ) => {
        
        const start = Date.now();
        
        while ( Date.now() - start < timeout ) {
            
            const el = document.querySelector( selector );
            
            if ( el ) {
                return el;
            }
            
            await self.wait( 100 );
        }
        
        throw "Element not found : " + selector;
    };
    
    /*
    -------------------------
    GET TABLE ROWS
    -------------------------
    */
    
    self.getRows = () => {
        return document.querySelectorAll( ".mdc-data-table__content .element-row" );
    };
    
    /*
    -------------------------
    PARSE BASIC ROW
    -------------------------
    */
    
    self.parseRow = ( row ) => {
        
        return {
            
            name: row.querySelector( ".cdk-column-name_trans" )?.innerText.trim(),
            
            name_en: row.querySelector( ".cdk-column-name" )?.innerText.trim(),
            
            level: parseInt(
                row.querySelector( ".cdk-column-level" )?.innerText || 0
            ),
            
            price: row.querySelector( ".cdk-column-price" )?.innerText.trim()
        };
    };
    
    /*
    -------------------------
    PARSE DETAILS
    -------------------------
    */
    
    self.parseDetails = ( details ) => {
        
        const data = {};
        
        /*
        TRAITS
        */
        
        data.traits = [];
        
        details.querySelectorAll( ".trait" ).forEach( t => {
            data.traits.push( t.innerText.trim() );
        } );
        
        /*
        METADATA
        */
        
        details.querySelectorAll( ".metadata div" ).forEach( div => {
            
            const strong = div.querySelector( "strong" );
            
            if ( !strong ) {
                return;
            }
            
            const key = strong.innerText.trim();
            
            const value = div.innerText.replace( key, "" ).trim();
            
            switch ( key ) {
                
                case "Prix":
                    data.price = value;
                    break;
                
                case "Encombrement":
                    data.bulk = value;
                    break;
                
                default:
                    data[ key ] = value;
            }
            
        } );
        
        /*
        DESCRIPTION
        */
        
        const desc = details.querySelector( ".description" );
        
        if ( desc ) {
            data.description = desc.innerText.trim();
        }
        
        return data;
    };
    
    /*
    -------------------------
    SCRAPE PAGE
    -------------------------
    */
    
    self.scrape = async() => {
        
        await self.waitForElement( ".element-row" );
        
        const rows = self.getRows();
        
        const results = [];
        
        for ( const row of rows ) {
            
            const data = self.parseRow( row );
            
            row.querySelector( ".cdk-column-name_trans" ).click();
            
            await self.wait( 150 );
            
            const details = row.nextElementSibling;
            
            Object.assign( data, self.parseDetails( details ) );
            
            results.push( data );
        }
        
        return results;
    };
    
    /*
    -------------------------
    EXPORT JSON
    -------------------------
    */
    
    self.download = ( data, filename = "pf2_data.json" ) => {
        
        const blob = new Blob(
            [JSON.stringify( data, null, 2 )],
            { type: "application/json" }
        );
        
        const url = URL.createObjectURL( blob );
        
        const a = document.createElement( "a" );
        
        a.href = url;
        
        a.download = filename;
        
        a.click();
        
        URL.revokeObjectURL( url );
    };
    
    return self;
    
})();

const actionsData = await PF2_SCRAPER.scrape();

console.log( actionsData )

PF2_SCRAPER.download( actionsData, "actions.json" )