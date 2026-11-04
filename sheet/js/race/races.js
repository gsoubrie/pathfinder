"use strict";
/**
 * @class RACES.Races
 * @extends OBJECT.InterfaceContainerHtml
 */
RACES.Races = function () {
    this.init();
};
RACES.Races.prototype = {
    init: function () {
        this.initContents();
        let keys = Object.keys( RACES.ENUM );
        for ( let i = 0, _size_i = keys.length; i < _size_i; i++ ) {
            this.add( new RACES.RacePopup( RACES.ENUM[ keys[ i ] ] ) );
        }
    }
};

SERVICE.CLASS.addPrototype( RACES.Races, OBJECT.InterfaceContainerHtml );
/**
 * @class RACES.RacePopup
 * @extends RACES.Race
 */
RACES.RacePopup = function ( data ) {
    this.init( data );
};
RACES.RacePopup.prototype = {
    init: function ( data ) {
        this.updateData( data );
    },
    //********************************************  HTML   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "key":
            case "name":
                this[ "name" ] = value;
                this[ "key" ]  = value;
                break;
            case "start_life":
            case "body_size":
            case "speed":
            case "language":
            case "language_sup":
            case "traits":
            case "sens":
            case "Ethnies":
            case "physical_desc":
            case "society_desc":
            case "believe_desc":
            case "general_desc":
            case "anathema_desc":
            case "edit_desc":
            case "legacies":
            case "dons":
            case "name_example":
                this[ key ] = value;
                break;
            case "characteristics_bonus":
            case "characteristics_malus":
                let bonus = new CHARACTERISTICS.Bonus( key === "characteristics_bonus" );
                bonus.initWithData( value );
                this[ key ] = bonus;
                break;
            case "category":
                this[ key ] = value;
                 break;
            case "id":
                this[ "uuid" ] = value;
                break;
            case "href":
            case "mechanic":
            case "text":
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value, this );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHTMLEdition: function () {
        let params = { param__window: "param__popup__select" };
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "race-edition" } ) );
        let traits_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "traits" } ), this.getDomElement() );
        for ( let index = 0; index < this.traits.length; index++ ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "trait" }, this.traits[ index ] ), traits_row );
            
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.start_life, "Point de vie" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.body_size, "Taille moyenne" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.speed + " mètres", "Vitesse" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createFieldPropertyHorizontal( this.characteristics_bonus, "Prime d'attribut", params ), this.getDomElement() );
        if ( this.characteristics_malus ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createFieldPropertyHorizontal( this.characteristics_malus, "Pénalité d'attribut", params ), this.getDomElement() );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.language, "Langues" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.sens, "Vision nocturne" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "hr" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.general_desc, "Description" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.physical_desc, "Description physique" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.society_desc, "Description en société" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.believe_desc, "Croyances" ), this.getDomElement() );
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( RACES.RacePopup, RACES.Race );

/**
 * @class RACES.WindowGroup
 * @extends WINDOW_V2.ElementGroupFromData
 */
RACES.WindowGroup = function () {
    this.init( "race_window_group" );
};
RACES.WindowGroup.prototype = {
    init        : function ( group_name ) {
        this.initCommon( group_name );
        CONTROLLER.Main.races = new RACES.Races();
        this.initWithData();
    },
    initWithData: function () {
        for ( let i = 0, _size_i = CONTROLLER.Main.races.getSize(); i < _size_i; i++ ) {
            let current = CONTROLLER.Main.races.getContent( i );
            let added   = this.addSpecific( this.getChildConstructor( current.name, this.getName() ) );
            added.setContentDomElementTarget( current.computeHTMLEdition() );
        }
    }
};
SERVICE.CLASS.addPrototype( RACES.WindowGroup, WINDOW_V2.ElementGroupFromData );

RACES.getDataByName = function ( race_name ) {
    var _keys = Object.keys( RACES.ENUM );
    var _current_key;
    for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
        _current_key = _keys[ i ];
        if ( RACES.ENUM[ _current_key ].name === race_name ) {
            return RACES.ENUM[ _current_key ];
        }
    }
    return null;
};
/**
 * The scraped language_sup list carries the grant sentence glued to the
 * first language ("... Choisissez parmi Draconique"), trailing commas and,
 * for Humain, no fixed list at all ("toutes les langues courantes") — the
 * cleanup lives here, it survives the re-scrap.
 *
 * @param {string} race_name  Ancestry name, ex: "Elfe"
 * @returns {Array}           [ { name } ] of the choosable languages
 */
RACES.getAdditionalLanguages = function ( race_name ) {
    let race_data = RACES.getDataByName( race_name );
    let to_return = [];
    if ( !race_data || !race_data.language_sup ) {
        return to_return;
    }
    let languages = [];
    for ( let i = 0, _size_i = race_data.language_sup.length; i < _size_i; i++ ) {
        let language  = race_data.language_sup[ i ];
        let chosen_at = language.indexOf( "Choisissez parmi " );
        if ( chosen_at !== -1 ) {
            language = language.substring( chosen_at + "Choisissez parmi ".length );
        }
        language = language.replace( /,+$/, "" ).trim();
        // The Humain sentence names no language, only "toutes les langues"
        if ( language === "" || language.indexOf( "langues" ) !== -1 ) {
            continue;
        }
        languages.push( language );
    }
    // Humain chooses among the common languages : the pool of every scraped
    // ancestry base list is the honest available data
    if ( languages.length === 0 ) {
        languages = RACES.getCommonLanguages();
    }
    for ( let i = 0, _size_i = languages.length; i < _size_i; i++ ) {
        if ( race_data.language && race_data.language.indexOf( languages[ i ] ) !== -1 ) {
            continue;
        }
        to_return.push( { "name": languages[ i ] } );
    }
    return to_return;
};

/**
 * Common languages pool: union of every ancestry base language.
 *
 * @returns {Array}  [ "Commun", ... ] of the language names
 */
RACES.getCommonLanguages = function () {
    let to_return = [];
    let seen      = {};
    let _keys     = Object.keys( RACES.ENUM );
    for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
        let base_languages = RACES.ENUM[ _keys[ i ] ].language;
        if ( !base_languages ) {
            continue;
        }
        for ( let l = 0, _size_l = base_languages.length; l < _size_l; l++ ) {
            if ( seen[ base_languages[ l ] ] ) {
                continue;
            }
            seen[ base_languages[ l ] ] = true;
            to_return.push( base_languages[ l ] );
        }
    }
    return to_return;
};

// Number of additional language picks: Intelligence modifier if positive,
// the Humain ancestry grants one more (hand-written override, the scraped
// sentence is not parsed)
RACES.ADDITIONAL_LANGUAGE_BONUS = {
    "Humain": 1
};

/**
 * @param {string} race_name    Ancestry name, ex: "Humain"
 * @param {number} int_modifier  Intelligence modifier of the character
 * @returns {number}            Number of additional language picks
 */
RACES.getAdditionalLanguagesNumber = function ( race_name, int_modifier ) {
    return Math.max( 0, ( RACES.ADDITIONAL_LANGUAGE_BONUS[ race_name ] || 0 ) + int_modifier );
};

/**
 * Every known language of the scraped data: the base lists of all the
 * ancestries plus their additional languages lists, deduplicated
 * case-insensitively (the scrapes mix "Draconique" and "draconique").
 *
 * @returns {Array}  [ { name } ] of the language names
 */
RACES.getKnownLanguages = function () {
    let to_return = [];
    let seen      = {};
    let pushKnown = function ( language ) {
        let seen_key = language.toLowerCase();
        if ( seen[ seen_key ] ) {
            return;
        }
        seen[ seen_key ] = true;
        to_return.push( { "name": language } );
    };
    let _keys = Object.keys( RACES.ENUM );
    for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
        let race_data = RACES.ENUM[ _keys[ i ] ];
        let base      = race_data.language || [];
        for ( let l = 0, _size_l = base.length; l < _size_l; l++ ) {
            pushKnown( base[ l ] );
        }
        let additional = RACES.getAdditionalLanguages( race_data.name );
        for ( let l = 0, _size_l = additional.length; l < _size_l; l++ ) {
            pushKnown( additional[ l ].name );
        }
    }
    return to_return;
};
