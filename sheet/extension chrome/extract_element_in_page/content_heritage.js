"use strict";
/* global SCRAPPER */

var SCRAPPER = SCRAPPER || {};

SCRAPPER.Heritage = (function ( self ) {
    
    //********************************************  PRIVATE  **************************************************//
    
    function _replaceAnnotationLinks ( block ) {
        var clone = block.cloneNode( true );
        
        clone.querySelectorAll( "elt-foundry-annotation" ).forEach( function ( annotation ) {
            var a = annotation.querySelector( "a[href]" );
            if ( !a ) {
                return;
            }
            
            var href   = a.getAttribute( "href" );
            var parts  = href.split( "/" ).filter( Boolean );
            var linkId = parts[ 1 ];
            var name   = SCRAPPER.Shared.cleanText( a );
            
            var div       = document.createElement( "div" );
            div.className = "gs-link-information";
            div.setAttribute( "onclick", "CONTROLLER.Main.doActionAfter('event__show_information', {'param__object__uuid': '" + linkId + "'})" );
            div.textContent = name;
            
            annotation.replaceWith( div );
        } );
        
        return clone;
    }
    
    //********************************************  MAPPINGS  **************************************************//
    
    var FR_TO_ATTACK = {
        "griffe"    : "ATTACK.CLAW",
        "serre"     : "ATTACK.TALON",
        "croc"      : "ATTACK.FANG",
        "crocs"     : "ATTACK.FANG",
        "machoire"  : "ATTACK.JAW",
        "morsure"   : "ATTACK.BITE",
        "bec"       : "ATTACK.BEAK",
        "corne"     : "ATTACK.HORN",
        "cornes"    : "ATTACK.HORN",
        "defenses"  : "ATTACK.TUSK",
        "epine"     : "ATTACK.SPINE",
        "queue"     : "ATTACK.TAIL",
        "sabot"     : "ATTACK.HOOF",
        "sabots"    : "ATTACK.HOOF",
        "poing"     : "ATTACK.FIST",
        "coup"      : "ATTACK.SLAM",
        "tentacule" : "ATTACK.TENTACLE",
        "tentacules": "ATTACK.TENTACLE",
        "aile"      : "ATTACK.WING",
        "ailes"     : "ATTACK.WING",
        "dard"      : "ATTACK.STING",
        "pince"     : "ATTACK.PINCER",
        "pinces"    : "ATTACK.PINCER"
    };
    
    var FR_TO_TRADITION = {
        "primordial" : "TRADITION.PRIMAL",
        "primordiaux": "TRADITION.PRIMAL",
        "primordiale": "TRADITION.PRIMAL",
        "arcanique"  : "TRADITION.ARCANE",
        "arcaniques" : "TRADITION.ARCANE",
        "divin"      : "TRADITION.DIVINE",
        "divins"     : "TRADITION.DIVINE",
        "divine"     : "TRADITION.DIVINE",
        "occulte"    : "TRADITION.OCCULT",
        "occultes"   : "TRADITION.OCCULT"
    };
    
    function _normalize ( str ) {
        return str.toLowerCase()
                  .replace( /[àâä]/g, "a" )
                  .replace( /[éèêë]/g, "e" )
                  .replace( /[îï]/g, "i" )
                  .replace( /[ôö]/g, "o" )
                  .replace( /[ùûü]/g, "u" )
                  .replace( /ç/g, "c" );
    }
    
    function _frToAttackKey ( fr ) {
        return FR_TO_ATTACK[ _normalize( fr ) ] || null;
    }
    
    function _frToTraditionKey ( fr ) {
        return FR_TO_TRADITION[ fr.toLowerCase() ] || null;
    }
    
    //********************************************  PATTERNS  **************************************************//
    
    // Chaque pattern travaille sur le texte brut de general_desc (HTML strippé),
    // sans modifier le champ d'origine.
    // - field    : chemin dans result (notation pointée)
    // - regex    : expression à appliquer sur le texte complet
    // - extract  : transforme le(s) match(es) en valeur(s) à stocker
    // - multiple : si true, accumule tous les matches dans un tableau
    
    var PATTERNS = [
        {
            // "Vous obtenez le trait elfe, le trait aiuvarin et la capacité X"
            field   : "bonus.traits",
            regex   : /Vous obtenez ([^.]+)/,
            extract : function ( match ) {
                var segment = match[ 1 ];
                var found   = [];
                var re      = /le trait ([^,. ]+(?:\s[^,. ]+)*?)(?=\s*(,|et\s+le|et\s+la|$))/g;
                var m;
                while ( (m = re.exec( segment )) !== null ) {
                    found.push( m[ 1 ].trim() );
                }
                return found;
            },
            multiple: false
        },
        {
            // "la capacité vision nocturne"
            field   : "bonus.sens",
            regex   : /la capacité ([^,.<]+?)(?=\s*[,.]|\s+et\s+(?:la|le)\s+|\s+Lorsque|$)/g,
            extract : function ( match ) {
                return match[ 1 ].trim();
            },
            multiple: true
        },
        {
            // "et la vision nocturne" (sans "capacité", ex: Dromaar)
            field   : "bonus.sens",
            regex   : /et la (?!capacité)([^,.<]+?)(?=\s*[,.]|\s+et\s+(?:la|le)\s+|\s+Lorsque|$)/g,
            extract : function ( match ) {
                var val = match[ 1 ].trim();
                if ( /^le trait/i.test( val ) ) {
                    return null;
                }
                return val;
            },
            multiple: true
        },
        {
            // "Vous obtenez vision dans le noir" (ex: Elfe des cavernes)
            field   : "bonus.sens",
            regex   : /Vous obtenez ((?!le trait|le don|la capacité)[^,.<]+?)(?=\s*[,.]|\s+et\s+|\s+Lorsque|$)/g,
            extract : function ( match ) {
                var val = match[ 1 ].trim();
                if ( /^le trait|^le don|^la capacité/i.test( val ) ) {
                    return null;
                }
                return val;
            },
            multiple: true
        },
        {
            // "la liste des dons des elfes, des aiuvarins…"
            // "la liste de dons des orcs, des dromaars…"
            field   : "bonus.dons.ancestraux",
            regex   : /la liste d(?:es|e) dons des ([^.]+)/,
            extract : function ( match ) {
                return match[ 1 ]
                .split( /,?\s*(?:des|et des)\s+/ )
                .map( function ( s ) {
                    return s.replace( /\s*et (?:d[eo] (?:votre|leur)|celle d[eo]).*$/i, "" ).trim();
                } )
                .filter( Boolean );
            },
            multiple: false
        },
        {
            // "âgé d'au moins 100 ans mais peut être plus jeune à la discrétion du MJ"
            field   : "required.age",
            regex   : /âgé d'au moins (\d+) ans(?:[^.]*discrétion)?/i,
            extract : function ( match ) {
                return {
                    min     : parseInt( match[ 1 ], 10 ),
                    flexible: /discrétion/i.test( match[ 0 ] )
                };
            },
            multiple: false
        },
        {
            // "Vous obtenez le don de dévouement multiclasse de cette classe"
            field   : "bonus.dons.multiclasse",
            regex   : /don de dévouement multiclasse/i,
            extract : function () {
                return { type: "dévouement" };
            },
            multiple: false
        },
        {
            // "résistance au froid égale à la moitié de votre niveau (minimum 1)"
            field   : "bonus.resistances",
            regex   : /résistance (?:à la?|au|aux) (\w+) égale à (?:la moitié de votre niveau|votre niveau)(?:[^.]*minimum d?e? ?(\d+))?/gi,
            extract : function ( match ) {
                var isHalf = /moitié/i.test( match[ 0 ] );
                var entry  = {
                    type : match[ 1 ].toLowerCase(),
                    value: isHalf ? "level/2" : "level"
                };
                if ( match[ 2 ] ) {
                    entry.min = parseInt( match[ 2 ], 10 );
                }
                return entry;
            },
            multiple: true
        },
        {
            // "effets environnementaux liés au froid … réduite d'un rang"
            field   : "bonus.capacites",
            regex   : /effets environnementaux liés au (\w+)[^.]*réduite? d'un rang/gi,
            extract : function ( match ) {
                return "effets environnementaux " + match[ 1 ].toLowerCase() + " réduits d'un rang";
            },
            multiple: true
        },
        {
            // "sort inné primordial à volonté" / "sort inné divin une fois par jour"
            // Gnome source : "entre les traditions arcanique, divine ou occulte"
            field   : "bonus.spells",
            regex   : /sort inné (\w+)(?: à volonté| une fois par jour| deux fois par jour| trois fois par jour)?/gi,
            extract : function ( match ) {
                var tradition = _frToTraditionKey( match[ 1 ] );
                var freqText  = match[ 0 ].toLowerCase();
                var frequency;
                if ( freqText.indexOf( "trois fois par jour" ) !== -1 ) {
                    frequency = "FREQUENCY.DAILY_3";
                }
                else if ( freqText.indexOf( "deux fois par jour" ) !== -1 ) {
                    frequency = "FREQUENCY.DAILY_2";
                }
                else if ( freqText.indexOf( "une fois par jour" ) !== -1 ) {
                    frequency = "FREQUENCY.DAILY_1";
                }
                else {
                    frequency = "FREQUENCY.AT_WILL";
                }
                
                // Gnome source : tradition libre parmi arcanique/divine/occulte
                var isFreeChoice = /entre les traditions/i.test( match.input );
                var entry        = {
                    type     : "innate",
                    tradition: isFreeChoice ? "FREE" : tradition,
                    frequency: frequency,
                    free     : true
                };
                if ( isFreeChoice ) {
                    entry.tradition_choices = ["TRADITION.ARCANE", "TRADITION.DIVINE", "TRADITION.OCCULT"];
                }
                if ( /tour de magie/i.test( match.input ) ) {
                    entry.level = "level/2";
                }
                return entry;
            },
            multiple: true
        },
        {
            // "le don général <gs-link-information … uuid>Nom</gs-link-information>"
            // Travaille sur le HTML brut de general_desc (useHtml: true)
            field   : "bonus.dons.general",
            regex   : /don général\s+<div[^>]*onclick="[^"]*'([A-Za-z0-9]+)'[^"]*"[^>]*>([^<]+)<\/div>/gi,
            extract : function ( match ) {
                return { name: match[ 2 ].trim(), id: match[ 1 ] };
            },
            multiple: true,
            useHtml : true
        },
        {
            // "vitesse au sol de 9 mètres"
            field   : "bonus.speed.ground",
            regex   : /vitesse au sol de (\d+) mètres?/i,
            extract : function ( match ) {
                return parseInt( match[ 1 ], 10 );
            },
            multiple: false
        },
        {
            // "une attaque animale de votre choix (typiquement griffe, queue ou mâchoire)"
            field   : "bonus.attacks",
            regex   : /(\w+) attaque(?:s)? animale(?:s)? de votre choix(?:\s*\(typiquement ([^)]+)\))?/i,
            extract : function ( match ) {
                var countWord = match[ 1 ].toLowerCase();
                var count     = countWord === "une" ? 1 : countWord === "deux" ? 2 : parseInt( countWord, 10 ) || 1;
                var examples  = [];
                if ( match[ 2 ] ) {
                    var parts = match[ 2 ].split( /,\s*|\s+ou\s+/ );
                    for ( var i = 0; i < parts.length; i++ ) {
                        var key = _frToAttackKey( parts[ i ].trim() );
                        if ( key ) {
                            examples.push( key );
                        }
                    }
                }
                return [{ type: "FREE", count: count, examples: examples }];
            },
            multiple: false
        },
        {
            // "le don général <gs-link-information … uuid>Nom</gs-link-information>"
            field   : "bonus.dons.general",
            regex   : /don général\s+<div[^>]*onclick="[^"]*'([A-Za-z0-9]+)'[^"]*"[^>]*>([^<]+)<\/div>/gi,
            extract : function ( match ) {
                return { name: match[ 2 ].trim(), id: match[ 1 ] };
            },
            multiple: true,
            useHtml : true
        },
        {
            // "la réaction <gs-link-information>Nom</gs-link-information>"
            // "l'action <gs-link-information>Nom</gs-link-information>"
            // "l'activité libre <gs-link-information>Nom</gs-link-information>"
            field   : "bonus.actions",
            regex   : /(la réaction|l'action|les deux actions|l'activité libre)\s+<div[^>]*onclick="[^"]*'([A-Za-z0-9]+)'[^"]*"[^>]*>([^<]+)<\/div>/gi,
            extract : function ( match ) {
                var typeText = match[ 1 ].toLowerCase();
                var type;
                if ( typeText === "la réaction" ) {
                    type = "ACTION_TYPE.REACTION";
                }
                else if ( typeText === "les deux actions" ) {
                    type = "ACTION_TYPE.ACTION_2";
                }
                else if ( typeText === "l'activité libre" ) {
                    type = "ACTION_TYPE.FREE";
                }
                else {
                    type = "ACTION_TYPE.ACTION_1";
                }
                return { type: type, name: match[ 3 ].trim(), id: match[ 2 ] };
            },
            multiple: true,
            useHtml : true
        }
    ];
    
    //********************************************  HELPERS  **************************************************//
    
    function _setPath ( obj, path, value ) {
        var keys = path.split( "." );
        var cur  = obj;
        var i;
        for ( i = 0; i < keys.length - 1; i++ ) {
            if ( !cur[ keys[ i ] ] ) {
                cur[ keys[ i ] ] = {};
            }
            cur = cur[ keys[ i ] ];
        }
        cur[ keys[ keys.length - 1 ] ] = value;
    }
    
    function _getPath ( obj, path ) {
        var keys = path.split( "." );
        var cur  = obj;
        var i;
        for ( i = 0; i < keys.length; i++ ) {
            if ( cur === undefined || cur === null ) {
                return undefined;
            }
            cur = cur[ keys[ i ] ];
        }
        return cur;
    }
    
    function _descToText ( general_desc ) {
        return general_desc
        .map( function ( html ) {
            return html.replace( /<[^>]+>/g, " " ).replace( /\s+/g, " " ).trim();
        } )
        .join( " " );
    }
    
    function _parseHeritageBonuses ( result ) {
        if ( !result.general_desc || result.general_desc.length === 0 ) {
            return;
        }
        
        var text     = _descToText( result.general_desc );
        var htmlText = result.general_desc.join( " " );
        var i,
            pattern,
            source,
            values,
            match,
            re,
            v,
            existing;
        
        for ( i = 0; i < PATTERNS.length; i++ ) {
            pattern = PATTERNS[ i ];
            source  = pattern.useHtml ? htmlText : text;
            
            if ( pattern.multiple ) {
                values = [];
                re     = new RegExp( pattern.regex.source, pattern.regex.flags );
                match  = re.exec( source );
                
                while ( match !== null ) {
                    v = pattern.extract( match );
                    if ( v !== null && v !== undefined ) {
                        values.push( v );
                    }
                    match = re.exec( source );
                }
                
                if ( values.length > 0 ) {
                    existing = _getPath( result, pattern.field ) || [];
                    _setPath( result, pattern.field, existing.concat( values ) );
                }
            }
            else {
                match = source.match( pattern.regex );
                if ( match ) {
                    _setPath( result, pattern.field, pattern.extract( match ) );
                }
            }
        }
    }
    
    //********************************************  ACTIONS  **************************************************//
    
    self.extract = function () {
        var cleanText = SCRAPPER.Shared.cleanText;
        var result    = {};
        var title,
            traits,
            detailBlock,
            processedBlock;
        
        title       = document.querySelector( ".content .header .title" );
        result.name = cleanText( title );
        
        traits        = document.querySelectorAll( ".trait" );
        result.traits = Array.from( traits ).map( function ( t ) {
            return cleanText( t );
        } );
        
        detailBlock = document.querySelector( ".description, [class*='description'], .detail-content" );
        
        if ( !detailBlock ) {
            result._fallback = true;
            return result;
        }
        
        processedBlock = _replaceAnnotationLinks( detailBlock );
        
        result.general_desc = Array.from( processedBlock.children )
                                   .map( function ( el ) {
                                       return el.innerHTML.trim();
                                   } )
                                   .filter( function ( html ) {
                                       return html.length > 0;
                                   } );
        
        _parseHeritageBonuses( result );
        
        return result;
    };
    
    return self;
    
})( SCRAPPER.Heritage || {} );