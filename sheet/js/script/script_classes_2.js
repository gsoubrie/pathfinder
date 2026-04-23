"use strict";
//https://claude.ai/chat/c4380309-0396-4719-8d82-038e67737967
const PF2_CLASS = (function () {

    const self = {};

    /*
    =========================================================
    UTILS
    =========================================================
    */

    self.wait = ( ms ) => new Promise( r => setTimeout( r, ms ) );

    self.waitFor = async ( selector ) => {
        while ( !document.querySelector( selector ) ) {
            await self.wait( 100 );
        }
    };

    self.cleanText = ( node ) => {
        const clone = node.cloneNode( true );
        clone.querySelectorAll( "mat-icon" ).forEach( el => el.remove() );
        return clone.innerText.replace( /\n/g, " " ).replace( /\s+/g, " " ).trim();
    };

    self.toId = ( name ) =>
        name
            .toLowerCase()
            .normalize( "NFD" ).replace( /[\u0300-\u036f]/g, "" )
            .replace( /[^a-z0-9]+/g, "_" )
            .replace( /^_|_$/g, "" );

    /*
    =========================================================
    MAÎTRISES
    Clé courte uniquement : "Q" | "E" | "M" | "L" | "I"
    =========================================================
    */

    self.detectMasteryKey = ( text ) => {
        const t = text.toLowerCase();
        if ( t.includes( "légendaire" ) || t.includes( "légende" ) ) return "L";
        if ( t.includes( "maître" )     || t.includes( "maîtrise" ) ) return "M";
        if ( t.includes( "expert" ) )                                  return "E";
        if ( t.includes( "qualifié" ) )                                return "Q";
        return "I";
    };

    /*
    =========================================================
    NAVIGATION
    =========================================================
    */

    self.goToClass = async ( className ) => {

        await self.waitFor( ".element-row" );

        const rows = document.querySelectorAll( ".mat-mdc-row.mdc-data-table__row.cdk-row.element-row" );

        for ( const row of rows ) {
            const nameCell = row.querySelector( ".cdk-column-name_trans" );
            if ( nameCell && nameCell.innerText.trim().toLowerCase() === className.toLowerCase() ) {
                nameCell.click();
                await self.wait( 400 );
                return row;
            }
        }

        throw new Error( `Classe "${className}" introuvable.` );
    };

    /*
    =========================================================
    MAPPING TITRES → CLÉS
    Repris exactement depuis l'ancien script pour couvrir
    toutes les variantes de libellés du site.
    =========================================================
    */

    self.parseTitleToKey = ( text ) => {
        switch ( text.trim() ) {
            // --- Roleplay ---
            case "Lors des rencontres de combat...":
            case "Durant les rencontres de combat...":   return "desc_fight";
            case "Lors des rencontres sociales...":
            case "Durant les rencontres sociales...":    return "desc_socially";
            case "En exploration...":
            case "En Exploration...":                    return "desc_exploration";
            case "Durant les intermèdes...":
            case "Pendant un intermède...":
            case "Durant les intermèdes":                return "desc_interlude";
            case "Vous pourriez...":
            case "Vous...":                              return "desc_you_could";
            case "Probablement que les autres...":       return "desc_probably_others";

            // --- Maîtrises ---
            case "Maîtrises initiales":
            case "Maitrises initiales":
            case "Compétences initiales":                return "mastery_initial";
            case "Perception":                           return "mastery_perception";
            case "Jets de sauvegarde":
            case "Jet de sauvegarde":                    return "mastery_js";
            case "Compétences":                          return "mastery_skill";
            case "Attaques":                             return "mastery_attack";
            case "Défenses":
            case "Défense":
            case "Defenses":                             return "mastery_defense";
            case "Sorts":                                return "mastery_spell";
            case "Rareté":                               return "mastery_rarity";
            case "DD de Classe":
            case "DD de classe":                         return "mastery_dd";

            default:
                console.warn( "[PF2_CLASS] titre non géré :", text );
                return null;
        }
    };

    /*
    =========================================================
    PARSE PRINCIPAL DU DOM DE LA CLASSE
    Reproduit la logique de l'ancien script mais en structuré.
    =========================================================
    */

    self.parseClassDom = ( row ) => {

        const result = {
            // intro
            general_desc          : null,
            characteristics_bonus : null,
            life_point_by_level   : null,
            desc_fight            : null,
            desc_socially         : null,
            desc_exploration      : null,
            desc_interlude        : null,
            desc_you_could        : [],
            desc_probably_others  : [],

            // maîtrises
            mastery_initial    : null,
            mastery_perception : null,
            mastery_js         : null,
            mastery_skill      : null,
            mastery_attack     : null,
            mastery_defense    : null,
            mastery_spell      : null,
            mastery_dd         : null,
            mastery_rarity     : null,

            // progression
            capacity_by_level : [],

            // capacités détaillées
            abilities         : {}
        };

        const sibling  = row.nextElementSibling;
        const descRoot = sibling.querySelector( ".description" );

        if ( !descRoot ) {
            console.error( "[PF2_CLASS] .description introuvable" );
            return result;
        }

        let capacityMode = false; // true une fois qu'on a passé le tableau de niveaux
        let previousKey  = null;  // clé de section en cours (pour roleplay + maîtrises)
        let currentAbility = null; // capacité détaillée en cours

        const children = Array.from( descRoot.children );

        for ( const child of children ) {

            const cls = child.className || "";
            const tag = child.tagName;

            /*
            ---- Avant le tableau de niveaux ----
            */
            if ( !capacityMode ) {

                // Description générale (chapeau)
                if ( cls === "fluff" ) {
                    result.general_desc = child.innerText.trim();
                    continue;
                }

                // Basics : PV et attribut essentiel
                if ( cls === "basics-title" ) {
                    const txt = child.innerText;
                    if ( txt.includes( "Attribut essentiel" ) ) {
                        // ex: "Attribut essentiel : Force ou Dextérité"
                        const raw   = txt.split( ":" )[ 1 ]?.trim() || "";
                        const attrs = raw.split( /\s+ou\s+/i ).map( a => self.attrToCode( a.trim() ) );
                        result.characteristics_bonus = { number: 1, choice: attrs };
                    }
                    if ( txt.includes( "Points de vie" ) ) {
                        // ex: "Points de vie : 10 plus modificateur de Constitution"
                        const m = txt.match( /:\s*(\d+)/ );
                        if ( m ) result.life_point_by_level = parseInt( m[ 1 ] );
                    }
                    continue;
                }

                // Containers récursifs
                if ( cls === "basics-container"
                  || cls === "starting-info-container" ) {
                    self.parseBasicsContainer( child, result );
                    continue;
                }

                // Roleplay + maîtrises
                if ( cls === "roleplaying-container"
                  || cls === "initial-proficiencies-container" ) {
                    self.parsePartContainer( child, result );
                    continue;
                }

                // Tableau de niveaux (déclenche le mode capacités)
                if ( cls === "pf2e remaster" || cls === "pf2e" ) {
                    self.parseTableCapacity( child, result );
                    capacityMode = true;
                    continue;
                }

                continue;
            }

            /*
            ---- Après le tableau : capacités détaillées ----
            */
            if ( capacityMode ) {

                if ( tag === "H2" || tag === "H3" ) {
                    const raw   = self.cleanText( child );
                    const level = self.extractLevel( raw );
                    const name  = raw.replace( /Niveau\s*\d+/i, "" ).trim();
                    const id    = self.toId( name );

                    currentAbility = { name, description: [] };
                    if ( level !== null ) currentAbility.level = level;

                    result.abilities[ id ] = currentAbility;
                    continue;
                }

                if ( tag === "P" ) {
                    const text = child.innerText.trim();
                    if ( !text ) continue;

                    const prereq = self.parsePrerequisites( text );
                    if ( prereq && currentAbility ) {
                        currentAbility.required = prereq;
                        continue;
                    }

                    if ( currentAbility ) currentAbility.description.push( text );
                    continue;
                }

                if ( tag === "UL" || tag === "OL" ) {
                    Array.from( child.querySelectorAll( "li" ) ).forEach( li => {
                        const text = li.innerText.trim();
                        if ( text && currentAbility ) currentAbility.description.push( text );
                    } );
                    continue;
                }

                // Fallback : tout texte restant
                if ( child.innerText?.trim() ) {
                    result.capacities_raw = result.capacities_raw || [];
                    result.capacities_raw.push( child.innerText.trim() );
                }
            }
        }

        return result;
    };

    /*
    =========================================================
    PARSE BASICS CONTAINER (.basics-container, .starting-info-container)
    Cherche les .basics-title pour PV et attribut essentiel
    =========================================================
    */

    self.parseBasicsContainer = ( container, result ) => {
        Array.from( container.children ).forEach( child => {
            const cls = child.className || "";
            if ( cls === "basics-title" ) {
                const txt = child.innerText;
                if ( txt.includes( "Attribut essentiel" ) ) {
                    const raw   = txt.split( ":" )[ 1 ]?.trim() || "";
                    const attrs = raw.split( /\s+ou\s+/i ).map( a => self.attrToCode( a.trim() ) );
                    result.characteristics_bonus = { number: 1, choice: attrs };
                }
                if ( txt.includes( "Points de vie" ) ) {
                    const m = txt.match( /:\s*(\d+)/ );
                    if ( m ) result.life_point_by_level = parseInt( m[ 1 ] );
                }
            }
            if ( cls === "basics-container" || cls === "starting-info-container" ) {
                self.parseBasicsContainer( child, result );
            }
        } );
    };

    /*
    =========================================================
    PARSE PART CONTAINER (roleplay + maîtrises)
    Lit H1/H2 comme clé, P/UL/LI comme valeur
    =========================================================
    */

    self.parsePartContainer = ( container, result ) => {

        let previousKey = null;

        const walk = ( children ) => {
            Array.from( children ).forEach( child => {

                const tag = child.tagName;

                if ( tag === "H1" || tag === "H2" ) {
                    previousKey = self.parseTitleToKey( child.innerText );
                    return;
                }

                if ( !previousKey ) return;

                if ( tag === "P" ) {
                    const text = child.innerText.trim();
                    if ( !text ) return;

                    // Les champs qui sont des tableaux (desc_you_could, desc_probably_others)
                    if ( Array.isArray( result[ previousKey ] ) ) {
                        result[ previousKey ].push( text );
                    }
                    // Les champs maîtrises : on parse en liste { level, description }
                    else if ( previousKey && previousKey.startsWith( "mastery_" ) ) {
                        result[ previousKey ] = self.parseMasteryValue( previousKey, text );
                    }
                    else {
                        result[ previousKey ] = text;
                    }
                    return;
                }

                if ( tag === "UL" ) {
                    if ( !Array.isArray( result[ previousKey ] ) ) {
                        result[ previousKey ] = [];
                    }
                    walk( child.children );
                    return;
                }

                if ( tag === "LI" ) {
                    const text = child.innerText.trim();
                    if ( !text ) return;

                    if ( Array.isArray( result[ previousKey ] ) ) {
                        // Maîtrises en liste
                        if ( previousKey.startsWith( "mastery_" ) ) {
                            result[ previousKey ].push( {
                                level      : self.detectMasteryKey( text ),
                                description: text
                            } );
                        }
                        else {
                            result[ previousKey ].push( text );
                        }
                    }
                    return;
                }

                // Containers imbriqués
                if ( child.children?.length ) {
                    walk( child.children );
                }
            } );
        };

        walk( container.children );
    };

    /**
     * Parse une valeur de maîtrise selon le type de champ.
     * - mastery_perception / mastery_dd → clé courte simple "Q"|"E"...
     * - mastery_js / mastery_skill / mastery_attack / mastery_defense / mastery_spell
     *     → tableau [{ level, description }]
     */
    self.parseMasteryValue = ( key, text ) => {
        const singleKeys = [ "mastery_perception", "mastery_dd", "mastery_initial", "mastery_rarity" ];

        if ( singleKeys.includes( key ) ) {
            return self.detectMasteryKey( text );
        }

        // Sinon : liste d'items séparés par virgule ou déjà un item unique
        return text.split( "," ).map( part => ({
            level      : self.detectMasteryKey( part.trim() ),
            description: part.trim()
        }) ).filter( item => item.description );
    };

    /*
    =========================================================
    TABLEAU NIVEAUX 1–20
    =========================================================
    */

    self.parseTableCapacity = ( tableContainer, result ) => {

        result.capacity_by_level = [];

        const tds = tableContainer.querySelectorAll( "td" );

        // L'ancien script skip la 1ère td (header ou niveau) et prend une td sur deux
        for ( let i = 1; i < tds.length; i += 2 ) {
            result.capacity_by_level.push( tds[ i ].innerText.trim() );
        }
    };

    /*
    =========================================================
    UTILS PARSING
    =========================================================
    */

    self.extractLevel = ( text ) => {
        const m = text.match( /niveau\s*(\d+)/i );
        return m ? parseInt( m[ 1 ] ) : null;
    };

    self.attrToCode = ( word ) => {
        const map = {
            "force"        : "FOR",
            "dexterite"    : "DEX",
            "dextérité"    : "DEX",
            "constitution" : "CON",
            "intelligence" : "INT",
            "sagesse"      : "SAG",
            "charisme"     : "CHA"
        };
        const key = word.toLowerCase().normalize( "NFD" ).replace( /[\u0300-\u036f]/g, "" );
        return map[ key ] || word.toUpperCase().slice( 0, 3 );
    };

    self.parsePrerequisites = ( text ) => {
        if ( !text.toLowerCase().startsWith( "prérequis" ) ) return null;

        const result = {};

        const skillMapping = {
            arcanes    : "arcane",
            nature     : "nature",
            occultisme : "occultism",
            religion   : "religion",
            athlétisme : "athletics",
            acrobaties : "acrobatics"
        };

        const skills = [];
        Object.keys( skillMapping ).forEach( fr => {
            if ( text.toLowerCase().includes( fr ) ) {
                skills.push( { level: self.detectMasteryKey( text ), type: skillMapping[ fr ] } );
            }
        } );
        if ( skills.length ) result.skills = { choices: 1, list: skills };

        const archetypes = [];
        const matches    = text.match( /dévouement\s*:\s*([^,]+)/gi );
        if ( matches ) {
            matches.forEach( m => {
                const name = m.split( ":" )[ 1 ].trim();
                archetypes.push( { id: self.toId( name ), name } );
            } );
        }
        if ( archetypes.length ) result.archetypes = archetypes;

        return Object.keys( result ).length ? result : { raw: text };
    };

    /*
    =========================================================
    POST-TRAITEMENT : restructure mastery en objet propre
    =========================================================
    */

    self.buildMastery = ( result ) => ({
        initial   : result.mastery_initial    || null,
        perception: result.mastery_perception || null,
        saves     : result.mastery_js         || null,
        skills    : result.mastery_skill      || null,
        attacks   : result.mastery_attack     || null,
        defenses  : result.mastery_defense    || null,
        spells    : result.mastery_spell      || null,
        class_dc  : result.mastery_dd         || null,
        rarity    : result.mastery_rarity     || null
    });

    /*
    =========================================================
    SCRAPE PRINCIPAL
    =========================================================
    */

    self.scrape = async ( className = "Champion" ) => {

        console.log( `[PF2_CLASS] → "${className}"` );

        const row = await self.goToClass( className );
        await self.wait( 300 );

        console.log( "[PF2_CLASS] parsing DOM..." );
        const raw = self.parseClassDom( row );

        // Restructuration finale
        const result = {
            name                  : className,
            key                   : self.toId( className ),

            general_desc          : raw.general_desc,
            characteristics_bonus : raw.characteristics_bonus,
            life_point_by_level   : raw.life_point_by_level,
            desc_fight            : raw.desc_fight,
            desc_socially         : raw.desc_socially,
            desc_exploration      : raw.desc_exploration,
            desc_interlude        : raw.desc_interlude,
            desc_you_could        : raw.desc_you_could,
            desc_probably_others  : raw.desc_probably_others,

            mastery               : self.buildMastery( raw ),

            capacity_by_level     : raw.capacity_by_level,
            abilities             : raw.abilities
        };

        console.log( "[PF2_CLASS] Done ✓", result );
        return result;
    };

    /*
    =========================================================
    DOWNLOAD
    =========================================================
    */

    self.download = ( data, filename ) => {
        filename = filename || ( "class_" + data.key + ".json" );
        const blob = new Blob( [ JSON.stringify( data, null, 2 ) ], { type: "application/json" } );
        const url  = URL.createObjectURL( blob );
        const a    = document.createElement( "a" );
        a.href     = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL( url );
    };

    return self;

})();

/*
=========================================================
LANCEMENT
  → Ouvrir https://pf2e.pathfinder-fr.org/classes
  → Coller dans la console et Entrée
=========================================================
*/
(async () => {

    const CLASS_NAME = "Champion"; // ← changer ici

    const data = await PF2_CLASS.scrape( CLASS_NAME );
    console.log( data );
    PF2_CLASS.download( data );

})();