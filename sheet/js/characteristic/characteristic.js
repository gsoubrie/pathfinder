"use strict";
/**
 * @class CHARACTERISTICS.Characteristic
 * @extends CHARACTER.ComponentInterface
 */
CHARACTERISTICS.Characteristic = function ( data ) {
    this.init( data );
};
CHARACTERISTICS.Characteristic.prototype = {
    init: function ( data ) {
        this.final_value    = new OBJECT.FinalValue();
        this.modifier_value = new OBJECT.ModifierValue();
        this.race_bonus     = new OBJECT.ConfigurableValue( "race_bonus", 0, "FREE" );
        this.historic_bonus = new OBJECT.ConfigurableValue( "historic_bonus", 0, "FREE" );
        this.class_bonus    = new OBJECT.ConfigurableValue( "class_bonus", 0, "FREE" );
        // PF2 : la creation accorde 4 boosts de +2, a repartir sur 4
        // caracteristiques DIFFERENTES — la cellule consomme le pool de
        // creation du conteneur, sa valeur se pose pleine (jamais 2 a la
        // suite sur la meme colonne)
        this.level1_bonus    = new OBJECT.ConfigurableValue( "level1_bonus", 0, "FREE" );
        // Les boosts venus des AJUSTEMENTS (colonne Autre) : ils ne se
        // posent pas ici, l'onglet Ajustements les possede
        this.adjustment_boost = 0;
        this.setKey( data[ "key" ] );
        this.setLabelProperty( data[ "label" ] );

        this.race_bonus.addParamForEvents( "param__is_for", RACES.key_element );
        this.historic_bonus.addParamForEvents( "param__is_for", HISTORICS.key_element );
        this.class_bonus.addParamForEvents( "param__is_for", CLASSES.key_element );
        this.level1_bonus.addParamForEvents( "param__is_for", CHARACTERISTICS.creation_key );
        this.computeFinalValue();

        this.children = new OBJECT.InterfaceContainer();
        this.children.add( this.final_value );
        this.children.add( this.modifier_value );
        this.children.add( this.race_bonus );
        this.children.add( this.historic_bonus );
        this.children.add( this.class_bonus );
        this.children.add( this.level1_bonus );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter            : function ( event_name, params ) {
        switch ( event_name ) {
            case "event__ask_set_data": {
                let _saved = params[ "param__set_data_value" ];
                // La cle de la cellule : au rechargement, la pose rejouée doit
                // savoir si le boost etait un choix LISTE (jeton propre) ou un
                // libre (jeton FREE)
                params[ "param__key" ] = this.getUUID();
                // Une valeur FORCED derive de la donnee (la prime imposee de
                // la race ou de la classe) : le save n'a pas autorite dessus
                // — un vieux fichier peut porter le zero d'avant l'ecriture
                if ( !this.race_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORCED ) ) {
                    this.race_bonus.updateData( _saved[ "race_bonus" ] );
                }
                if ( this.race_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED ) ) {
                    params[ "param__is_for" ] = RACES.key_element;
                    // Une penalite libre rechargee rend son retour au pool
                    // du MALUS (le signe la designe)
                    params[ "param__is_malus" ] = this.race_bonus.getValue() < 0;
                    params[ "param__characteristics__object" ].doActionAfter( "event__set_free_bonus_done", params );
                }
                if ( !this.class_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORCED ) ) {
                    this.class_bonus.updateData( _saved[ "class_bonus" ] );
                }
                if ( this.class_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED ) ) {
                    params[ "param__is_for" ] = CLASSES.key_element;
                    params[ "param__is_malus" ] = this.class_bonus.getValue() < 0;
                    params[ "param__characteristics__object" ].doActionAfter( "event__set_free_bonus_done", params );
                }
                this.historic_bonus.updateData( _saved[ "historic_bonus" ] );
                if ( this.historic_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED ) ) {
                    params[ "param__is_for" ] = HISTORICS.key_element;
                    params[ "param__is_malus" ] = false;
                    params[ "param__characteristics__object" ].doActionAfter( "event__set_free_bonus_done", params );
                }
                this.level1_bonus.updateData( _saved[ "level1_bonus" ] );
                // FOSSILE : les vieux fichiers portent les boosts de
                // creation sur la cellule initial_value (la base etait
                // modifiable a la main) — le delta demenage sur la colonne
                // Niv1
                if ( !_saved[ "level1_bonus" ] && _saved[ "initial_value" ] && _saved[ "initial_value" ][ "value" ] > CHARACTERISTICS.INITIAL_VALUE ) {
                    this.level1_bonus.setValue( _saved[ "initial_value" ][ "value" ] - CHARACTERISTICS.INITIAL_VALUE );
                    this.level1_bonus.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED );
                }
                if ( this.level1_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED ) ) {
                    params[ "param__is_for" ] = CHARACTERISTICS.creation_key;
                    params[ "param__is_malus" ] = false;
                    params[ "param__characteristics__object" ].doActionAfter( "event__set_free_bonus_done", params );
                }
                this.computeFinalValue();
                return;
            }
            // Les boosts de la colonne Autre : le compte arrives du
            // conteneur (l'onglet Ajustements possede ses entrees), la
            // valeur finale et l'affichage suivent
            case "event__set_adjustment_boost":
                this.adjustment_boost = params[ "param__adjustment_boost" ];
                if ( this.dom_element_adjustment ) {
                    this.dom_element_adjustment.textContent = this.adjustment_boost ? "+" + ( this.adjustment_boost * 2 ) : "—";
                }
                this.computeFinalValue();
                return;
            case "event__ask_set_forced_value_1":
                this.getObjectForDoActionAfter( params ).doActionAfter( event_name, params );
                this.getObjectForDoActionAfter( params ).setValue( this.computeBonusDelta( params ) );
                this.getObjectForDoActionAfter( params ).setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORCED );
                this.computeFinalValue();
                return;
            // La penalite libre CHOISIE vit comme un bonus pose : phase
            // EDITED, le - la retire (la posee par force, ex. CON de
            // l'Elfe, ne se retire pas)
            case "event__place_free_malus_1":
                this.getObjectForDoActionAfter( params ).setValue( this.computeBonusDelta( params ) );
                this.getObjectForDoActionAfter( params ).setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED );
                this.computeFinalValue();
                return;
            case "event__free_bonus_is_zero":
                this.getObjectForDoActionAfter( params ).setPhaseIfPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITION_FULL, GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
                return;
            case "event__set_forbidden_bonus":
                let object = this.getObjectForDoActionAfter( params );
                if ( object.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORCED ) ) {
                    return;
                }
                let direct_choice = params[ "param__bonuses__object" ].getContentByUUID( this.getUUID() );
                let bonus_choice  = direct_choice ? direct_choice : params[ "param__bonuses__object" ].getContentByUUID( CHARACTERISTICS.FREE.key );
                // Marqueur du jeton concerné par CETTE cellule : listée si la
                // carac a son propre choix nommé, libre sinon (fallback FREE)
                // — posé sur l'objet (la grille peut ne pas etre rendue) et
                // en dataset (la cellule reevalue sa phase au recompute)
                object.listed_choice = !!direct_choice;
                if ( object.dom_element_characteristics ) {
                    SERVICE.DOM.setDataSet( object.dom_element_characteristics, "listedchoice", !!direct_choice );
                }
                object.setPhaseOrPhase( bonus_choice, GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, GS.OBJECT.CONST.PHASE.SETTINGS_FORBIDDEN );
                return;
            // Après chaque pose/retrait, la cellule reevalue sa phase selon
            // ses jetons : posable si total restant > 0 ET (carac listée OU
            // jeton libre restant) — non posable → EDITION_FULL (+ grisé),
            // jetons revenus → TO_EDIT (+ actif)
            case "event__recompute_settable":
                let cell_object = this.getObjectForDoActionAfter( params );
                let is_listed   = cell_object.listed_choice !== undefined ? cell_object.listed_choice : !!( cell_object.dom_element_characteristics && cell_object.dom_element_characteristics.dataset.listedchoice === "true" );
                let placeable   = params[ "param__remaining" ] > 0 && ( is_listed || params[ "param__free_remaining" ] > 0 );
                if ( cell_object.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT ) && !placeable ) {
                    cell_object.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITION_FULL );
                }
                if ( cell_object.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITION_FULL ) && placeable ) {
                    cell_object.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
                }
                return;
            case "event__set_free_bonus":
                if ( this.getObjectForDoActionAfter( params ).isInPhase( [GS.OBJECT.CONST.PHASE.SETTINGS_FORCED, GS.OBJECT.CONST.PHASE.SETTINGS_FORBIDDEN, GS.OBJECT.CONST.PHASE.SETTINGS_EDITED] ) ) {
                    return;
                }
                this.getObjectForDoActionAfter( params ).setValue( 0 );
                this.getObjectForDoActionAfter( params ).setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
                this.computeFinalValue();
                return;
            // La penalite libre en attente s'affiche sur SA cellule : le
            // marqueur OUVRE le - (pose de la penalite), la CSS attenue
            // le - des autres cellules (contrat des choix de classe)
            case "event__set_malus_pending":
                if ( this.getObjectForDoActionAfter( params ) && this.getObjectForDoActionAfter( params ).dom_element_characteristics ) {
                    SERVICE.DOM.setDataSet( this.getObjectForDoActionAfter( params ).dom_element_characteristics, "maluspending", !!params[ "param__malus_pending" ] );
                }
                return;
            case "event__reset_characteristics_bonuses":
                this.getObjectForDoActionAfter( params ).doActionAfter( "event__reset_bonuses" );
                return;
            case "unclean_all_free_race_settings":
                this.race_bonus.setPhaseIfPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, GS.OBJECT.CONST.PHASE.SETTINGS_EDITION_FULL );
                return;
            case "event__more_button":
                this.moreBonus( params );
                return;
            case "event__less_button":
                this.lessBonus( params );
                return;
        }
        CHARACTER.ComponentInterface.prototype.doActionAfter.call( this, event_name, params );
    },
    getObjectForDoActionAfter: function ( params ) {
        switch ( params[ "param__is_for" ] ) {
            case RACES.key_element:
            case "race_bonus":
                return this.race_bonus;
            case HISTORICS.key_element:
            case "historic_bonus":
                return this.historic_bonus;
            case CLASSES.key_element:
            case "class_bonus":
                return this.class_bonus;
            case CHARACTERISTICS.creation_key:
            case "level1_bonus":
                return this.level1_bonus;
        }
    },
    moreBonus                : function ( params ) {
        let object = this.getObjectForDoActionAfter( params );
        // Un jeton ne se pose qu'une fois sur la meme cellule
        if ( object.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED ) ) {
            return;
        }
        // Garde des jetons : total restant > 0, et jeton libre si la carac
        // est hors liste — sinon le + ne pose rien
        params[ "param__can_place" ] = false;
        params[ "param__characteristics__object" ].doActionAfter( "event__ask_can_place_bonus", params );
        if ( !params[ "param__can_place" ] ) {
            return;
        }
        object.setValue( this.computeBonusDelta( params ) );
        object.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED );
        params[ "param__characteristics__object" ].doActionAfter( "event__set_free_bonus_done", params );
        this.computeFinalValue();
    },
    lessBonus                : function ( params ) {
        let object = this.getObjectForDoActionAfter( params );
        if ( object.getValue() !== 0 ) {
            // Un choix place se retire : le signe designe son pool
            // (penalite rendue au malus, prime rendue au bonus)
            params[ "param__is_malus" ] = object.getValue() < 0;
            object.setValue( 0 );
            object.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
            params[ "param__characteristics__object" ].doActionAfter( "event__unset_object_bonuses", params );
        }
        else {
            // Rien de place : le - demande la pose de la penalite LIBRE
            // en attente (le pool du malus decide, la caracteristique
            // se pose elle-meme en retour d'event)
            params[ "param__is_malus" ] = true;
            params[ "param__characteristics__object" ].doActionAfter( "event__ask_place_free_malus", params );
        }
        this.computeFinalValue();
    },
    //********************************************  COMPUTE  **************************************************//
    computeFinalValue: function () {
        let computed_value = CHARACTERISTICS.INITIAL_VALUE;
        if ( this.race_bonus.isSet() ) {
            computed_value += this.race_bonus.value;
        }
        if ( this.historic_bonus.isSet() ) {
            computed_value += this.historic_bonus.value;
        }
        if ( this.class_bonus.isSet() ) {
            computed_value += this.class_bonus.value;
        }
        if ( this.level1_bonus.isSet() ) {
            computed_value += this.level1_bonus.value;
        }
        computed_value += this.adjustment_boost * 2;
        this.final_value.setValue( computed_value );
        this.computeModifier();
    },
    computeModifier  : function () {
        let computed_value = Math.floor( (this.final_value.value - 10) / 2 );
        this.modifier_value.setValue( computed_value );
    },
    computeBonusDelta: function ( params ) {
        this.computeFinalValue();
        let to_return = this.final_value.value > 18 ? 1 : 2;
        if ( params[ "param__is_malus" ] ) {
            to_return = to_return * (-1);
        }
        return to_return;
    },
    //********************************************  GETTER SETTER  **************************************************//
    addParamForEvents: function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        this.race_bonus.addParamForEvents( key, value );
        this.historic_bonus.addParamForEvents( key, value );
        this.class_bonus.addParamForEvents( key, value );
        this.level1_bonus.addParamForEvents( key, value );
    },
    getModifierValue : function ( key, value ) {
        return this.modifier_value.value;
    },
    isSet            : function () {
        return true;
    },
    //********************************************  HTML   **************************************************//
    computeHtmlGeneralWindow   : function ( dom_element_parent ) {
        if ( this.dom_element_general ) {
            return;
        }
        this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-" + this.key } ), dom_element_parent );
        let div                  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "characteristic", "data-name": this.key } ), this.dom_element_general );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "characteristic-label" }, this.label_property ), div );
        let div_2 = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "characteristic-values" } ), div );
        SERVICE.DOM.addElementTo( this.modifier_value.dom_element_general, div_2 );
        SERVICE.DOM.addElementTo( this.final_value.dom_element_general, div_2 );
    },
    computeCharacteristicWindow: function ( dom_element_parent ) {

        this.dom_element_characteristics = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "row characteristic-line", "data-name": this.getKey() } ), dom_element_parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-label" }, this.label_property ), this.dom_element_characteristics );
        // La colonne Valeur porte le TOTAL seul — le modificateur se lit
        // dans le Général, la grille d'hier le collait deux fois ici
        var final_value = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-final-value" } ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( this.final_value.dom_element_characteristics, final_value );
        // La ligne de base du calcul : la colonne Initial, constante
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "cell characteristic-initial-base" }, "" + CHARACTERISTICS.INITIAL_VALUE ), this.dom_element_characteristics );

        var bonus_race = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus characteristic-bonus-race" } ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( this.race_bonus.dom_element_characteristics, bonus_race );

        var bonus_historic = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus characteristic-bonus-historic" } ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( this.historic_bonus.dom_element_characteristics, bonus_historic );

        var bonus_class = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus characteristic-bonus-class" } ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( this.class_bonus.dom_element_characteristics, bonus_class );

        // Niv1 : les boosts de creation (pool du conteneur)
        var bonus_level1 = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus characteristic-bonus-level1" } ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( this.level1_bonus.dom_element_characteristics, bonus_level1 );

        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv5" }, "" ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv10" }, "" ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv15" }, "" ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv20" }, "" ), this.dom_element_characteristics );

        // Les boosts poses par l'onglet Ajustements se lisent ici
        this.dom_element_adjustment = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-adjustment-value" }, this.adjustment_boost ? "+" + this.adjustment_boost * 2 : "—" ), this.dom_element_characteristics );
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristic, CHARACTER.ComponentInterface );