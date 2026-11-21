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
                this.computeArea__actionsFeats( CONTROLLER.Character.current_character );
                this.computeArea__deity( CONTROLLER.Character.current_character );
                this._updateHealthPointsField( CONTROLLER.Character.current_character );
                break;
            // A +/− on a characteristic moves the Constitution modifier and
            // so the max HP : the PV field follows without tab activation
            case "event__more_button":
            case "event__less_button":
                this._updateHealthPointsField( CONTROLLER.Character.current_character );
                break;
            case "event__photo__set":
            case "event__photo__remove":
                this.computeArea__photo( CONTROLLER.Character.current_character );
                break;
            case "click_on__window_navigation__done":
                // Les prises de niveau et validations vivent dans l'onglet Passage de
                // niveau, apres cette fenetre dans le groupe : recalcul des jets a
                // l'activation de l'onglet, toujours sur l'etat frais du personnage
                if ( this.name === params[ "window_name" ] ) {
                    this.computeArea__photo( CONTROLLER.Character.current_character );
                    this.computeArea__saves( CONTROLLER.Character.current_character );
                    this.computeArea__skills( CONTROLLER.Character.current_character );
                    this.computeArea__ancestryInfo( CONTROLLER.Character.current_character );
                    this.computeArea__actionsFeats( CONTROLLER.Character.current_character );
                    this.computeArea__deity( CONTROLLER.Character.current_character );
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
        this.computeArea__photo( character_object );
        this.computeComponent(character_object.getNameObject());
        this.computeComponent(character_object.getPlayer());
        this.computeComponent(character_object.getRace());
        this.computeComponent( character_object.getRace().getLegacy() );
        this.computeComponent( character_object.getRace().getBodySize() );
        this.computeArea__ancestryInfo( character_object );
        this.computeArea__actionsFeats( character_object );
        this.computeArea__deity( character_object );
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
        // Les compétences qualifiées (Artisanat/Connaissance + type) vivent
        // sur leurs propres slots : une ligne par slot qualifié possédé,
        // le clic ouvre la popup maîtrises (un type ne possède pas
        // d'actions dans nos données)
        var qualified_slots = this._getQualifiedSkillSlots( character_object, masteries );
        for ( var q = 0; q < qualified_slots.length; q++ ) {
            var qualified_slot = qualified_slots[ q ];
            var qualified_data = SKILLS.LIST[ qualified_slot.slice( "skill__".length ).split( "__" )[ 0 ].toUpperCase() ];
            var qualified_rank         = masteries.getFinalRank( character_object, qualified_slot ) || "I";
            var qualified_rank_data    = MASTERY.getByShort( qualified_rank );
            var qualified_value        = masteries.getRollModifier( character_object, { "slot": qualified_slot, "characteristic": qualified_data.characteristic } );
            var qualified_characteristic = character_object.getCharacteristics().getContentByUUID( qualified_data.characteristic );
            var qualified_modifier     = qualified_characteristic ? qualified_characteristic.getModifierValue() : 0;
            var qualified_row          = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class  : "saves-row",
                    "data-slot": qualified_slot,
                    onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__masteries',{})"
                } ),
                this.block_skills
            );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-label" }, MASTERY.getSlotLabel( qualified_slot ) ), qualified_row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-value" }, qualified_value ), qualified_row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class: "saves-rank class-mastery-badge " + qualified_rank_data.css,
                title: qualified_rank_data.label
            }, qualified_rank_data.short ), qualified_row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class      : "saves-cell",
                "data-name": "modifier",
                title      : "Modificateur de " + this._getCharacteristicLabel( qualified_data.characteristic )
            }, qualified_modifier ), qualified_row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell", "data-name": "level" }, character_object.getLevel() ), qualified_row );
        }
    },

    // Slots des compétences qualifiées possédées (Progression ou
    // Ajustements), tries par libellé : leur rang vit dans la collecte
    _getQualifiedSkillSlots: function ( character_object, masteries ) {
        let to_return = [];
        let slot_data = masteries.getDataBySlot( character_object );
        let _slots    = Object.keys( slot_data );
        for ( let s = 0, _size_s = _slots.length; s < _size_s; s++ ) {
            if ( _slots[ s ].indexOf( "skill__" ) === 0 && _slots[ s ].split( "__" ).length > 2 ) {
                to_return.push( _slots[ s ] );
            }
        }
        to_return.sort( function ( slot_a, slot_b ) {
            return MASTERY.getSlotLabel( slot_a ).localeCompare( MASTERY.getSlotLabel( slot_b ) );
        } );
        return to_return;
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

    // Zone de la colonne 5 : DONS et ACTIONS mergés dans le MEME container
    // (décision utilisateur) — Dons d'abord, puis Actions. Les dons actifs
    // sont collectés par événement depuis les lignes validées de la
    // Progression (un don pris sur deux lignes n'apparait qu'une fois, avec
    // son niveau), les actions vivent sur les ajustements de l'onglet
    // Ajustements. Chaque entrée ouvre sa popup (don par catégorie+nom,
    // action par nom) lus en data attributes, jamais inline (apostrophes)
    computeArea__actionsFeats: function ( character_object ) {
        if ( !this.content_dom_element_target ) {
            return;
        }
        if ( !this.area_actions ) {
            this.area_actions = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "grid-area area-actions" } ),
                this.content_dom_element_target
            );
        }
        SERVICE.DOM.empty( this.area_actions );
        let property = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "property vertical actions-info-property" } ),
            this.area_actions
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, "Dons" ), property );
        let feats_list   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "feats-info-list" } ), property );
        let active_feats = character_object.getGifts().getActiveFeats( character_object );
        if ( !active_feats.length ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "feats-list-entry feats-list-entry-empty" }, "—" ), feats_list );
        }
        for ( let i = 0, _size_i = active_feats.length; i < _size_i; i++ ) {
            let feat  = active_feats[ i ];
            let label = feat.name + ( feat.level ? " (niv " + feat.level + ")" : "" );
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class         : "feats-list-entry",
                    "data-value"  : feat.name,
                    "data-category": feat.category,
                    title         : "Informations du don",
                    onclick       : "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__feat',{'param__feat_category':this.getAttribute('data-category'),'param__feat_name':this.getAttribute('data-value')})"
                }, label ),
                feats_list
            );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label label--second-group" }, "Actions" ), property );
        let actions_list  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "actions-info-list" } ), property );
        let action_values = character_object.getAdjustments().getValuesByKind( "action" );
        if ( !action_values.length ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "actions-list-entry actions-list-entry-empty" }, "—" ), actions_list );
        }
        for ( let i = 0, _size_i = action_values.length; i < _size_i; i++ ) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class      : "actions-list-entry",
                    "data-value": action_values[ i ],
                    title      : "Informations de l'action",
                    onclick    : "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__action',{'param__action__name':this.getAttribute('data-value')})"
                }, action_values[ i ] ),
                actions_list
            );
        }
    },


    // Zone photo du personnage (en haut a gauche, style CV) : cadre cliquable,
    // « + » sans photo, image + « × » avec. La source est un fichier local lu
    // en dataURL (voir readPhotoFile), jamais une URL externe
    computeArea__photo: function ( character_object ) {
        if ( !this.content_dom_element_target ) {
            return;
        }
        if ( !this.area_photo ) {
            this.area_photo = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "grid-area area-photo neutral" } ),
                this.content_dom_element_target
            );
        }
        SERVICE.DOM.empty( this.area_photo );
        let _photo = character_object ? character_object.getPhoto() : null;
        let _frame = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", {
                class   : "photo-frame",
                title   : _photo ? "Changer la photo" : "Ajouter une photo",
                onclick : "document.getElementById('photo-file-input').click()"
            } ),
            this.area_photo
        );
        if ( _photo ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "img", { class: "photo-img", src: _photo, alt: "Photo du personnage" } ), _frame );
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class   : "photo-remove",
                    title   : "Retirer la photo",
                    onclick : "event.stopPropagation(); MANAGER.EventManagerV2.doActionAfter(event,'event__photo__remove',{})"
                }, "×" ),
                _frame
            );
        }
        else {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "photo-add" }, "+" ), _frame );
        }
        // L'input file vit hors de la fenetre (unique dans la page), le cadre
        // se contente de le cliquer
        if ( !document.getElementById( "photo-file-input" ) ) {
            document.body.appendChild( SERVICE.DOM.createElement( "input", {
                id      : "photo-file-input",
                class   : "photo-file-input",
                type    : "file",
                accept  : "image/*",
                onchange: "CHARACTER.GeneralWindow.readPhotoFile(event)"
            } ) );
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

    // Champ Divinité du General : lu par collecte (ligne "divinité" validée
    // de la Progression, écrasée par un ajustement "deity" manuel). Le clic
    // ouvre la popup d'information de la divinité (uuid compendium lu en
    // data attribute, jamais inline)
    computeArea__deity: function ( character_object ) {
        if ( !this.content_dom_element_target ) {
            return;
        }
        if ( !this.area_deity ) {
            this.area_deity = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "grid-area area-deity" } ),
                this.content_dom_element_target
            );
        }
        SERVICE.DOM.empty( this.area_deity );
        let property = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "property vertical", "data-name": "deity" } ),
            this.area_deity
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, "Divinité" ), property );
        let deity_choice = character_object.getDeityChoice();
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "input", {
                class      : "value deity-link",
                readOnly   : "",
                "data-value": deity_choice ? deity_choice.name : "",
                "data-uuid" : deity_choice && deity_choice.uuid ? deity_choice.uuid : "",
                title      : deity_choice ? "Informations de la divinité" : "",
                onclick    : "if ( this.getAttribute('data-uuid') ) { MANAGER.EventManagerV2.doActionAfter(event,'event__show_information',{'param__object__uuid':this.getAttribute('data-uuid'),'param__object__label':this.getAttribute('data-value')}) }"
            } ),
            property
        ).value = deity_choice ? deity_choice.name : "";
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

// Lecture du fichier choisi dans le sélecteur de fichiers : dataURL -> image
// -> canvas redimensionné (max 600 px de côté, JPEG 0.85 pour ne pas alourdir
// le save) -> pose sur le personnage par événement
CHARACTER.GeneralWindow.readPhotoFile = function ( event ) {
    let _input    = event.target;
    let _file     = _input.files && _input.files[ 0 ];
    if ( !_file ) {
        return;
    }
    let _reader   = new FileReader();
    _reader.onload = function () {
        let _image    = new Image();
        _image.onload = function () {
            let _max    = 600;
            let _scale  = Math.min( 1, _max / Math.max( _image.width, _image.height ) );
            let _canvas = SERVICE.DOM.createElement( "canvas", {} );
            _canvas.width  = Math.max( 1, Math.round( _image.width * _scale ) );
            _canvas.height = Math.max( 1, Math.round( _image.height * _scale ) );
            _canvas.getContext( "2d" ).drawImage( _image, 0, 0, _canvas.width, _canvas.height );
            CONTROLLER.Main.doActionAfter( "event__photo__set", { "param__photo__data": _canvas.toDataURL( "image/jpeg", 0.85 ) } );
        };
        _image.src = _reader.result;
    };
    _reader.readAsDataURL( _file );
    _input.value = "";
};

CHARACTER.GeneralWindow.NAME = "general_sheet";