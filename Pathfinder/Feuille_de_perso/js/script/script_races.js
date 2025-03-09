"use strict";
var SCRIPT_RACES = (function ( self ) {
    self.getAllRacesDOM = function ( race_name ) {
        return document.querySelectorAll( ".mdc-data-table__content .mat-mdc-row.element-row" );
    };
    self.getAllRaces    = function ( race_name ) {
        let doms      = self.getAllRacesDOM();
        self.to_return = [];
        let timeout   = 0;
        for ( let i = 0, _size_i = doms.length; i < _size_i; i++ ) {
            setTimeout( () => {
                self.parseRaceDom( doms[ i ], self.to_return );
            }, timeout );
            timeout += 400;
        }
    };
    self.parseRaceDom   = function ( dom_element, array_to_push_in ) {
        let to_return       = {};
        to_return[ "name" ] = dom_element.querySelector( ".cdk-column-name_trans" ).innerText;
        array_to_push_in.push( to_return );
        dom_element.querySelector( ".cdk-column-name_trans" ).click();
        setTimeout( () => {
            let dom_sibling = dom_element.nextElementSibling;
            let traits_dom = dom_sibling.querySelectorAll( ".trait" );
            to_return[ "trait" ] = [];
            for ( let i = 0, _size_i = traits_dom.length; i < _size_i; i++ ) {
                to_return[ "trait" ].push(traits_dom[i].innerText);
            }
        }, 200 );
    };
    
    return self;
})( SCRIPT_RACES || {} );

SCRIPT_RACES.getAllRaces();
