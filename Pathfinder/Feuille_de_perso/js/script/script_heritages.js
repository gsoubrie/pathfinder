"use strict";
var SCRIPT_HERITAGES = (function ( self ) {
    self.getAllDOM    = function ( race_name ) {
        return document.querySelectorAll( ".mat-mdc-row.mdc-data-table__row.cdk-row.element-row" );
    };
    self.getAll       = function ( race_name ) {
        let doms       = self.getAllDOM();
        console.log(doms)
        self.to_return = [];
        let timeout    = 0;
        //for ( let i = 0, _size_i = doms.length; i < 1; i++ ) {
        for ( let i = 0, _size_i = doms.length; i < _size_i; i++ ) {
            setTimeout( () => {
                self.parseDom( doms[ i ], self.to_return );
            }, timeout );
            timeout += 400;
        }
    };
    self.parseDom      = function ( dom_element, array_to_push_in ) {
        let to_return       = {};
        to_return[ "name" ] = dom_element.querySelector( ".cdk-column-name_trans" ).innerText;
        console.log(to_return[ "name" ]);
        array_to_push_in.push( to_return );
        dom_element.querySelector( ".cdk-column-name_trans" ).click();
        setTimeout( () => {
            let dom_sibling      = dom_element.nextElementSibling;        
            let dom_descriptions       = dom_sibling.querySelector( ".description" ).children;
            let current_param          = "general_desc";
            to_return[ current_param ] = [];
            for ( let i = 0, _size_i = dom_descriptions.length; i < _size_i; i++ ) {
                to_return[ current_param ].push( dom_descriptions[ i ].innerText );
            }
        }, 200 );
    };
    
    
    self.replaceAll = function ( string, target, replacement ) {
        return string.split( target ).join( replacement || '' );
    };
    
    return self;
})( SCRIPT_HERITAGES || {} );

SCRIPT_HERITAGES.getAll();
setTimeout( function () {
    console.log( "GSOU", "[ - ]", SCRIPT_HERITAGES.to_return );
}, 70000 );
