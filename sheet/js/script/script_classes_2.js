"use strict";
//https://claude.ai/chat/c4380309-0396-4719-8d82-038e67737967

const PF2_CLASS = (function () {

    const self = {};

    /*
    =========================================================
    ÉTAT PARTAGÉ (comme l'ancien script)
    previous_title et capacity_mode sont sur self pour
    persister à travers tous les appels récursifs.
    =========================================================
    */

    self.previous_title  = "";
    self.capacity_mode   = false;

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
    MAÎTRISES — clé courte uniquement
    "Q" | "E" | "M" | "L" | "I"
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
    Reprend exactement toutes les variantes de l'ancien script.
    =========================================================
    */

    self.parseTitleToKey = ( text ) => {
        switch ( text.trim() ) {
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
                console.warn( "[PF2_CLASS] titre non géré :", text.trim() );
                return null;
        }
    };

    /*
    =========================================================
    PARSE PAR CLASSE CSS
    Appelé sur les enfants directs de .description
    tant que capacity_mode === false
    =========================================================
    */

    self.parseChildByClass = ( child, result ) => {

        const cls = ( child.className || "" ).trim();

        switch ( cls ) {

            case "fluff":
                result.general_desc = child.innerText.trim();
                break;

            case "basics-title":
                if ( child.innerText.includes( "Attribut essentiel" ) ) {
                    const raw   = child.innerText.split( ":" )[ 1 ]?.trim() || "";
                    const attrs = raw.split( /\s+ou\s+/i ).map( a => self.attrToCode( a.trim() ) );
                    result.characteristics_bonus = { number: 1, choice: attrs };
                }
                if ( child.innerText.includes( "Points de vie" ) ) {
                    result.life_point_by_level = parseInt( child.innerText.replace( /[^\d]/g, "" ) ) || null;
                }
                break;

            case "basics-content":
            case "title":
                // ignoré
                break;

            case "basics-container":
            case "starting-info-container":
                // récursion via parseChildByClass (même mode)
                Array.from( child.children ).forEach( c => self.parseChildByClass( c, result ) );
                break;

            case "roleplaying-container":
            case "initial-proficiencies-container":
                // récursion via parseChildByPart (mode titre/contenu)
                Array.from( child.children ).forEach( c => self.parseChildByPart( c, result ) );
                break;

            case "pf2e remaster":
            case "pf2e":
                self.parseTableCapacity( child, result );
                self.capacity_mode = true;
                break;

            case "":
                break;

            default:
                console.log( "[PF2_CLASS] classe non gérée :", cls, child );
                break;
        }
    };

    /*
    =========================================================
    PARSE PAR PARTIE (roleplay + maîtrises)
    H1/H2 → clé, P/UL/LI → valeur
    self.previous_title persiste entre les appels
    =========================================================
    */

    self.parseChildByPart = ( child, result ) => {

        const tag = child.tagName;

        // Titre → met à jour la clé courante
        if ( tag === "H1" || tag === "H2" ) {
            self.previous_title = self.parseTitleToKey( child.innerText );
            return;
        }

        if ( !self.previous_title ) return;

        const key = self.previous_title;

        if ( tag === "P" ) {
            const text = child.innerText.trim();
            if ( !text ) return;

            // Champ tableau (desc_you_could, desc_probably_others, mastery_js, etc.)
            if ( Array.isArray( result[ key ] ) ) {
                result[ key ].push( self.formatMasteryItem( key, text ) );
            }
            // Champ scalaire déjà rempli → on le transforme en tableau
            else if ( result[ key ] !== null && result[ key ] !== undefined ) {
                result[ key ] = [ result[ key ], self.formatMasteryItem( key, text ) ];
            }
            else {
                result[ key ] = self.formatMasteryItem( key, text );
            }
            return;
        }

        if ( tag === "UL" ) {
            if ( !Array.isArray( result[ key ] ) ) {
                result[ key ] = [];
            }
            Array.from( child.children ).forEach( c => self.parseChildByPart( c, result ) );
            return;
        }

        if ( tag === "LI" ) {
            const text = child.innerText.trim();
            if ( !text ) return;
            if ( !Array.isArray( result[ key ] ) ) result[ key ] = [];
            result[ key ].push( self.formatMasteryItem( key, text ) );
            return;
        }
    };

    /*
    =========================================================
    FORMAT VALEUR MAÎTRISE
    Pour les champs mastery_* : retourne { level, description }
    Pour les autres : retourne le texte brut
    =========================================================
    */

    self.formatMasteryItem = ( key, text ) => {
        if ( key && key.startsWith( "mastery_" ) ) {

            // mastery_perception et mastery_dd : valeur scalaire simple
            if ( key === "mastery_perception" || key === "mastery_dd" || key === "mastery_initial" ) {
                return self.detectMasteryKey( text );
            }

            // mastery_js, mastery_skill, mastery_attack, mastery_defense, mastery_spell :
            // { level, description }
            return {
                level      : self.detectMasteryKey( text ),
                description: text
            };
        }
        return text;
    };

    /*
    =========================================================
    TABLEAU NIVEAUX 1–20
    Logique identique à l'ancien script (i += 2, skip 1ère td)
    =========================================================
    */

    self.parseTableCapacity = ( tableContainer, result ) => {
        result.capacity_by_level = [];
        const tds = tableContainer.querySelectorAll( "td" );
        for ( let i = 1; i < tds.length; i += 2 ) {
            result.capacity_by_level.push( tds[ i ].innerText.trim() );
        }
    };

    /*
    =========================================================
    CAPACITÉS DÉTAILLÉES (après le tableau, mode capacity_mode)
    H2/H3 = titre de capacité, P/UL/LI = description
    =========================================================
    */

    self.parseCapacity = ( child, result ) => {

        const tag = child.tagName;

        if ( tag === "H2" || tag === "H3" ) {
            const raw   = self.cleanText( child );
            const level = self.extractLevel( raw );
            const name  = raw.replace( /Niveau\s*\d+/i, "" ).trim();
            const id    = self.toId( name );

            result._currentAbility = { name, description: [] };
            if ( level !== null ) result._currentAbility.level = level;

            result.abilities[ id ] = result._currentAbility;
            return;
        }

        if ( !result._currentAbility ) return;

        if ( tag === "P" ) {
            const text = child.innerText.trim();
            if ( !text ) return;
            const prereq = self.parsePrerequisites( text );
            if ( prereq ) { result._currentAbility.required = prereq; return; }
            result._currentAbility.description.push( text );
            return;
        }

        if ( tag === "UL" || tag === "OL" ) {
            Array.from( child.querySelectorAll( "li" ) ).forEach( li => {
                const text = li.innerText.trim();
                if ( text ) result._currentAbility.description.push( text );
            } );
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

        const result       = {};
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
    POST-TRAITEMENT : restructure mastery_* en objet mastery
    =========================================================
    */

    self.buildMastery = ( raw ) => ({
        initial   : raw.mastery_initial    || null,
        perception: raw.mastery_perception || null,
        saves     : raw.mastery_js         || null,
        skills    : raw.mastery_skill      || null,
        attacks   : raw.mastery_attack     || null,
        defenses  : raw.mastery_defense    || null,
        spells    : raw.mastery_spell      || null,
        class_dc  : raw.mastery_dd         || null,
        rarity    : raw.mastery_rarity     || null
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

        // Reset état partagé
        self.previous_title = "";
        self.capacity_mode  = false;

        const sibling  = row.nextElementSibling;
        const descRoot = sibling?.querySelector( ".description" );

        if ( !descRoot ) {
            throw new Error( "[PF2_CLASS] .description introuvable — attendre que le DOM soit chargé." );
        }

        // Résultat brut
        const raw = {
            general_desc          : null,
            characteristics_bonus : null,
            life_point_by_level   : null,
            desc_fight            : null,
            desc_socially         : null,
            desc_exploration      : null,
            desc_interlude        : null,
            desc_you_could        : [],
            desc_probably_others  : [],
            mastery_initial       : null,
            mastery_perception    : null,
            mastery_js            : null,
            mastery_skill         : null,
            mastery_attack        : null,
            mastery_defense       : null,
            mastery_spell         : null,
            mastery_dd            : null,
            mastery_rarity        : null,
            capacity_by_level     : [],
            abilities             : {},
            _currentAbility       : null
        };

        console.log( "[PF2_CLASS] parsing DOM..." );

        Array.from( descRoot.children ).forEach( child => {
            if ( !self.capacity_mode ) {
                self.parseChildByClass( child, raw );
            } else {
                self.parseCapacity( child, raw );
            }
        } );

        // Nettoyage de la clé interne
        delete raw._currentAbility;

        // Résultat final structuré
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