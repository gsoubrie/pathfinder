"use strict";
/**
 * @class CHARACTER.GeneralWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.GeneralWindow = function ( parent_name ) {
    this.initSpecific( CHARACTER.GeneralWindow.NAME, parent_name, "Général" );
};

CHARACTER.GeneralWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__heal_modal__confirm":
            case "event__temp_hp_modal__confirm":
            case "event__damage_modal__confirm":
                this._updateHealthPointsField( CONTROLLER.Character.current_character );
                break;
            case "event__form__element_changed":
                this.computeHtmlWithData();
                break;
            case "event__adjustment__add":
            case "event__adjustment__remove":
                this.computeArea__ancestryInfo( CONTROLLER.Character.current_character );
                break;
            case "click_on__window_navigation__done":
                // Les prises de niveau et validations vivent dans l'onglet Passage de
                // niveau, apres cette fenetre dans le groupe : recalcul des jets a
                // l'activation de l'onglet, toujours sur l'etat frais du personnage
                if ( this.name === params[ "window_name" ] ) {
                    this.computeArea__saves( CONTROLLER.Character.current_character );
                    this.computeArea__skills( CONTROLLER.Character.current_character );
                    this.computeArea__ancestryInfo( CONTROLLER.Character.current_character );
                    this.computeArea__healthPoints( CONTROLLER.Character.current_character );
                    this.computeArea__level( CONTROLLER.Character.current_character );
                }
                break;
        }
        WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function () {
        let character_object = CONTROLLER.Character.current_character;
        if ( !this.content_dom_element_target ) {
            this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "character-sheet-grid" } );
            SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
        }

        // Trois arrêts conditionnels ont ete supprimes (decision utilisateur :
        // tout s'affiche des le debut, meme vide) : l'heritage, les
        // caracteristiques et la zone Classe ne dependent plus de l'ascendance
        // posee, les jets et competences ne dependent plus de la classe
        this.computeComponent(character_object.getNameObject());
        this.computeComponent(character_object.getPlayer());
        this.computeComponent(character_object.getRace());
        this.computeComponent( character_object.getRace().getLegacy() );
        this.computeComponent( character_object.getRace().getBodySize() );
        this.computeArea__ancestryInfo( character_object );
        this.computeComponent(character_object.getCharacteristics());
        this.computeComponent(character_object.getClasses());
        this.computeArea__level( character_object );
        // Le champ Archétype vit sur le PERSONNAGE (decision utilisateur :
        // un seul archétype, affiche des le debut)
        this.computeComponent( character_object.getArchetype() );
        this.computeComponent( character_object.getHistoric() );
        this.computeArea__healthPoints( character_object );
        this.computeArea__saves( character_object );
        this.computeArea__skills( character_object );
    },
    
    computeComponent: function (object) {
        object.doActionAfter("event__compute__html", {"param__window" : CHARACTER.GeneralWindow.NAME, "param__dom_element_parent" : this.content_dom_element_target });
    },

    // Zone dédiée des jets et compétences (une seule colonne de grille
    // élargie) : le bloc des jets puis le bloc des compétences, à la suite.
    computeArea__saves: function ( character_object ) {
        if ( !this.content_dom_element_target || !character_object ) {
            return;
        }
        if ( !this.block_saves ) {
            this.block_saves = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "jets-block jets-saves-block" } ), this._computeJetsArea() );
        }
        SERVICE.DOM.empty( this.block_saves );
        this._computeJetsHeader( this.block_saves );
        var masteries = character_object.getMasteries();
        for ( var i = 0; i < MASTERY.SAVES.length; i++ ) {
            var save           = MASTERY.SAVES[ i ];
            var rank           = masteries.getFinalRank( character_object, save.slot );
            var rank_data      = rank ? MASTERY.getByShort( rank ) : MASTERY.LIST.UNKNOWN;
            var save_value     = masteries.getRollModifier( character_object, save );
            var characteristic = character_object.getCharacteristics().getContentByUUID( save.characteristic );
            var modifier       = characteristic ? characteristic.getModifierValue() : 0;
            var row            = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class  : "saves-row",
                    "data-slot": save.slot,
                    onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__masteries',{})"
                } ),
                this.block_saves
            );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-label" }, save.label ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-value" }, save_value ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class: "saves-rank class-mastery-badge " + rank_data.css,
                title: rank ? rank_data.label : "?"
            }, rank ? rank_data.short : "?" ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class      : "saves-cell",
                "data-name": "modifier",
                title      : "Modificateur de " + this._getCharacteristicLabel( save.characteristic )
            }, modifier ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell", "data-name": "level" }, character_object.getLevel() ), row );
            if ( save.slot === "perception" ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "saves-separator" }, "Jets de sauvegarde" ), this.block_saves );
            }
        }
    },

    // Bloc des compétences, à la suite des jets dans la même zone : une ligne
    // par compétence du jeu (SKILLS.LIST), charac associée au libellé, jet au
    // même format que les jets, rang I (bonus 0) quand le personnage ne l'a
    // pas maîtrisée
    computeArea__skills: function ( character_object ) {
        if ( !this.content_dom_element_target || !character_object ) {
            return;
        }
        if ( !this.block_skills ) {
            this.block_skills = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "jets-block jets-skills-block" } ), this._computeJetsArea() );
        }
        SERVICE.DOM.empty( this.block_skills );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "saves-separator" }, "Compétences" ), this.block_skills );
        var masteries = character_object.getMasteries();
        var skill_keys = Object.keys( SKILLS.LIST ).sort( function ( key_a, key_b ) {
            return SKILLS.LIST[ key_a ].label.localeCompare( SKILLS.LIST[ key_b ].label );
        } );
        for ( var i = 0; i < skill_keys.length; i++ ) {
            var skill_data    = SKILLS.LIST[ skill_keys[ i ] ];
            var skill_key     = CLASSES.getAbilityKey( skill_data.label );
            var slot          = MASTERY.getSkillSlot( skill_data.label );
            var rank          = masteries.getFinalRank( character_object, slot ) || "I";
            var rank_data     = MASTERY.getByShort( rank );
            var skill_value   = masteries.getRollModifier( character_object, { "slot": slot, "characteristic": skill_data.characteristic } );
            var characteristic = character_object.getCharacteristics().getContentByUUID( skill_data.characteristic );
            var modifier      = characteristic ? characteristic.getModifierValue() : 0;
            var row           = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class  : "saves-row",
                    "data-slot": slot,
                    onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__skill_actions',{'param__skill':'" + skill_key + "'})"
                } ),
                this.block_skills
            );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-label" }, skill_data.label ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-value" }, skill_value ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-rank class-mastery-badge " + rank_data.css, title: rank_data.label }, rank_data.short ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class      : "saves-cell",
                "data-name": "modifier",
                title      : "Modificateur de " + this._getCharacteristicLabel( skill_data.characteristic )
            }, modifier ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell", "data-name": "level" }, character_object.getLevel() ), row );
        }
    },

    _computeJetsArea: function () {
        if ( !this.area_jets ) {
            this.area_jets = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-jets jets-grid" } ), this.content_dom_element_target );
        }
        return this.area_jets;
    },

    _computeJetsHeader: function ( dom_element_parent ) {
        var header = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "saves-row saves-header-row" } ), dom_element_parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-label" } ), header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell" }, "Jet" ), header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell" }, "Rang" ), header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell" }, "Mod" ), header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell" }, "Niv" ), header );
    },

    _getCharacteristicLabel: function ( characteristic_key ) {
        for ( var i = 0; i < CHARACTERISTICS.ENUM.length; i++ ) {
            if ( CHARACTERISTICS.ENUM[ i ].key === characteristic_key ) {
                return CHARACTERISTICS.ENUM[ i ].label;
            }
        }
        return characteristic_key;
    },

    // Zone des donnees de l'ascendance (sous le champ ascendance) : traits,
    // vitesse par mode de deplacement, sens et langues en listes — le champ
    // Taille vit deja dans sa zone (le body_size, enfant de la race, se rend
    // par le broadcast des enfants). La zone s'affiche DES LE DEBUT (decision
    // utilisateur) : sans ascendance posee ses listes restent vides, la
    // marche ne s'affiche qu'avec les donnees de la race. Les listes
    // affichent les entrees gerees (base de race + choix de Progression) +
    // les entrees manuelles du personnage : la zone se recalcule a
    // l'activation de l'onglet
    computeArea__ancestryInfo: function ( character_object ) {
        if ( !this.content_dom_element_target ) {
            return;
        }
        if ( !this.area_ancestry_info ) {
            this.area_ancestry_info = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "grid-area area-ancestry-info" } ),
                this.content_dom_element_target
            );
        }
        SERVICE.DOM.empty( this.area_ancestry_info );
        let race       = character_object.getRace();
        let traits_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "ancestry-info-traits" } ), this.area_ancestry_info );
        let race_traits = race.traits || [];
        for ( let t = 0, _size_t = race_traits.length; t < _size_t; t++ ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "ancestry-info-trait" }, race_traits[ t ] ), traits_row );
        }
        // Vitesse : une ligne par mode de deplacement, la marche vient de la
        // race, les autres modes viennent des ajustements de l'onglet
        let speed_property = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "property vertical ancestry-info-property", "data-name": "speed" } ),
            this.area_ancestry_info
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, "Vitesse" ), speed_property );
        let speed_modes = character_object.getAdjustments().getValuesByKind( "speed" );
        if ( race.isSet() && race.speed !== undefined ) {
            speed_modes.unshift( "Marche : " + race.speed + " mètres" );
        }
        for ( let m = 0, _size_m = speed_modes.length; m < _size_m; m++ ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "ancestry-info-value" }, speed_modes[ m ] ), speed_property );
        }
        if ( race.sens ) {
            let senses = [ race.sens ].concat( character_object.getAdjustments().getValuesByKind( "sense" ) );
            this._computeAncestryInfoList( "sense", "Sens", senses );
        }
        let languages = ( race.language || [] ).concat(
            character_object.getAncestryHistory().getSelectedLanguages(),
            character_object.getAdjustments().getValuesByKind( "language" )
        );
        this._computeAncestryInfoList( "language", "Langues", languages );
        // Les connaissances (lores) viennent des ajustements ; la liste
        // n'apparait que quand elle est non vide
        let lores = character_object.getAdjustments().getValuesByKind( "lore" );
        if ( lores.length ) {
            this._computeAncestryInfoList( "lore", "Connaissances", lores );
        }
    },

    // Lecture seule : les entrees gerees (base de race, choix de Progression)
    // et les ajustements de l'onglet Ajustements s'affichent ici, l'edition
    // vit dans cet onglet — la feuille reste utilisable en lecture
    _computeAncestryInfoList: function ( entries_key, label, entries ) {
        let property = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "property vertical ancestry-info-property", "data-name": entries_key } ),
            this.area_ancestry_info
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, label ), property );
        let list = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "ancestry-info-list" } ), property );
        for ( let i = 0, _size_i = entries.length; i < _size_i; i++ ) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "ancestry-list-entry", "data-value": entries[ i ] }, entries[ i ] ),
                list
            );
        }
    },
    
    
    // Champ Niveau du General : le niveau total du personnage. Le clic
    // bascule sur l'onglet Progression, la ou vivent les prises de niveau
    computeArea__level: function ( character_object ) {
        if ( !this.area_level ) {
            this.area_level = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "grid-area area-level" } ),
                this.content_dom_element_target
            );
            let property = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "property vertical", "data-name": "level" } ), this.area_level );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, "Niveau" ), property );
            this.dom_element_level = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "input", {
                    class   : "value level-link",
                    readOnly: "",
                    title   : "Ouvrir l'onglet Progression",
                    onclick : "CHARACTER.LibraryWindow.goToSheet('" + CHARACTER.LevelUpWindow.NAME + "')"
                } ),
                property
            );
        }
        this.dom_element_level.value = "" + ( character_object ? character_object.getLevel() : 0 );
    },

    // Champ PV du General (demande utilisateur : UN CHAMP — le suivi vit
    // dans l'onglet Combat). Le clic bascule sur l'onglet Combat, la ou
    // vivent les gestes de jeu (Soigner, Degats, PV temporaires, journal)
    computeArea__healthPoints: function ( character_object ) {
        if ( !this.area_health_points ) {
            this.area_health_points = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "grid-area area-pv" } ),
                this.content_dom_element_target
            );
            let property = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "property vertical", "data-name": "health_points" } ), this.area_health_points );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, "Points de vie" ), property );
            this.dom_element_health_points = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "input", {
                    class   : "value health-points-link",
                    readOnly: "",
                    title   : "Ouvrir l'onglet Combat",
                    onclick : "CHARACTER.LibraryWindow.goToSheet('" + CHARACTER.CombatWindow.NAME + "')"
                } ),
                property
            );
        }
        this._updateHealthPointsField( character_object );
    },

    _updateHealthPointsField: function ( character_object ) {
        if ( !this.dom_element_health_points || !character_object ) {
            return;
        }
        let health = character_object.getHealth();
        this.dom_element_health_points.value = health.getCurrentHP() + " / " + health.getMaxHP();
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.GeneralWindow, WINDOW_V2.ElementFromData );

CHARACTER.GeneralWindow.NAME = "general_sheet";