"use strict";
var SCRIPT_CLASSES = (function ( self ) {
    self.getAllDOM            = function () {
        return document.querySelectorAll( ".mat-mdc-row.mdc-data-table__row.cdk-row.element-row" );
    };
    self.getAll               = function () {
        let doms       = self.getAllDOM();
        self.to_return = [];
        let timeout    = 1000;
        for ( let i = 0, _size_i = doms.length; i < 1; i++ ) {
            //for ( let i = 0, _size_i = doms.length; i < _size_i; i++ ) {
            setTimeout( function () {
                self.parseDom( doms[ i ] );
            }, timeout );
            timeout += 400;
        }
    };
    self.parseDom             = function ( dom_element, array_to_push_in ) {
        let to_return       = {};
        to_return[ "name" ] = dom_element.querySelector( ".cdk-column-name_trans" ).innerText;
        console.log( to_return[ "name" ] );
        self.to_return.push( to_return );
        dom_element.querySelector( ".cdk-column-name_trans" ).click();
        setTimeout( () => {
            let dom_sibling = dom_element.nextElementSibling;
            let children    = dom_sibling.querySelector( ".description" ).children;
            self.parseChildrenByClass( children, to_return );
            // self.parseChildrenPart( children, to_return );
        }, 200 );
    };
    self.parseChildrenByClass = function ( children, object_to_complete ) {
        let current_child;
        for ( let i = 0, _size_i = children.length; i < _size_i; i++ ) {
            self.parseChildByClass( children[ i ], object_to_complete );
        }
    };
    self.parseChildByClass    = function ( current_child, object_to_complete ) {
        switch ( current_child.className ) {
            case "fluff":
                object_to_complete[ "general_desc" ] = current_child.innerText;
                break;
            case "basics-title":
                if ( SERVICE.STRING.contains( current_child.innerText, "Attribut essentiel" ) ) {
                    object_to_complete[ "prime_attribute" ] = SERVICE.STRING.splitAndTrim( current_child.innerText, ":", 1 );
                }
                if ( SERVICE.STRING.contains( current_child.innerText, "Points de vie" ) ) {
                    object_to_complete[ "life_point_by_level" ] = SERVICE.STRING.parseStringToPositiveInteger( current_child.innerText );
                }
                break;
            case "basics-content":
                break;
            case "basics-container":
            case "starting-info-container":
                self.parseChildrenByClass( current_child.children, object_to_complete );
                break;
            case "roleplaying-container":
                self.parseChildrenByPart( current_child.children, object_to_complete );
                break;
            case "pf2e remaster":
                self.parseTableCapacity( current_child, object_to_complete );
                break;
            case "":
                break;
            default:
                console.log( "GSOU", "[SCRIPT_CLASSES - parseChildByClass]", "[NOT MANAGED]", current_child.className, current_child );
                break;
        }
    };
    self.parseChildrenByPart = function ( children, object_to_complete ) {
        let previous_title = "";
        for ( let i = 0, _size_i = children.length; i < _size_i; i++ ) {
            self.parseChildByPart( children[ i ], object_to_complete );
        }
    };
    self.parseChildByPart    = function ( current_child, object_to_complete ) {
        switch ( current_child.className ) {
            case "fluff":
                object_to_complete[ "general_desc" ] = current_child.innerText;
                break;
            case "basics-title":
                if ( SERVICE.STRING.contains( current_child.innerText, "Attribut essentiel" ) ) {
                    object_to_complete[ "prime_attribute" ] = SERVICE.STRING.splitAndTrim( current_child.innerText, ":", 1 );
                }
                if ( SERVICE.STRING.contains( current_child.innerText, "Points de vie" ) ) {
                    object_to_complete[ "life_point_by_level" ] = SERVICE.STRING.parseStringToPositiveInteger( current_child.innerText );
                }
                break;
            case "basics-content":
                break;
            case "basics-container":
            case "starting-info-container":
                self.parseChildrenByClass( current_child.children, object_to_complete );
                break;
            case "roleplaying-container":
                self.parseChildrenByPart( current_child.children, object_to_complete );
                break;
            case "pf2e remaster":
                self.parseTableCapacity( current_child, object_to_complete );
                break;
            case "":
                break;
            default:
                console.log( "GSOU", "[SCRIPT_CLASSES - parseChildByClass]", "[NOT MANAGED]", current_child.className, current_child );
                break;
        }
    };    
    self.parseTableCapacity    = function ( current_child, object_to_complete ) {
        object_to_complete["capacity_by_level"] = [];
        let dom_lines_td = current_child.querySelectorAll("td");
        for ( let i = 1, _size_i = dom_lines_td.length; i < _size_i; i++ ) {
            object_to_complete["capacity_by_level"].push(dom_lines_td[i].innerText);
            i++
        }
    };
    self.parseTitleToParam    = function ( dom_element ) {
        let text = dom_element.innerText;
        switch ( text ) {
            case "Vous...":
                return "Vous";
            case "Probablement que les autres...":
                return "Les autres";
            case "Vous pourriez...":
                return "Vous pourriez...";
            case "Les autres pourraient…":
                return "Les autres pourraient…";
            case "Description physique":
            case "Description Physique":
                return "physical_desc";
            case "Société":
                return "society_desc";
            case "Croyances":
                return "believe_desc";
            case "Mécaniques de l'elfe":
                return "mecanic";
            case "Noms":
                return "noms";
            default :
                console.warn( "GSOU", "[SCRIPT_CLASSES - parseTitleToParam]", "NOT MANAGED", dom_element.innerText );
            
        }
    };
    
    self.replaceAll = function ( string, target, replacement ) {
        return string.split( target ).join( replacement || '' );
    };
    
    return self;
})( SCRIPT_CLASSES || {} );

let SERVICE = {};
SERVICE.STRING = (function ( self ) {
    self.replaceAll   = function ( string, target, replacement ) {
        return string.split( target ).join( replacement || '' );
    };
    self.contains     = function ( string, to_find ) {
        if ( !string || !to_find ) {
            return false;
        }
        return string.indexOf( to_find ) !== -1;
    };
    self.splitAndTrim = function ( string_to_split, separator, index_to_return ) {
        let to_return = string_to_split.split( separator );
        return to_return[ index_to_return ].trim();
    };
    self.parseStringToPositiveInteger = function ( value ) {
        return parseInt( value.replace( /[^\d]/g, '' ) );
    };    
    return self;
})( SERVICE.STRING || {} );


SCRIPT_CLASSES.getAll();
setTimeout( function () {
    console.log( "GSOU", "[ - ]", SCRIPT_CLASSES.to_return );
}, 3000 );
