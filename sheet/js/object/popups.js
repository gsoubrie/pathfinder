"use strict";
/**
 * @class OBJECT.PopupRenderers
 * @extends OBJECT.InterfaceHtml
 * @extends GS.OBJECT.PhaseInterface
 */
OBJECT.PopupRenderers = function () {
    this.init();
};
OBJECT.PopupRenderers.prototype = {
    init: function () {
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__show_information":
                let object_data = OBJECT.COMPENDIUM[ params[ "param__object__uuid" ] ];
                let existing_popup = object_data ? this._openPopup( object_data ) : null;
                if ( existing_popup ) {
                    existing_popup.doActionAfter( event_name, params );
                }
                return;
            case "event__show_information__class_ability":
                let ability_data = CLASSES.getAbilityInformation( params[ "param__class_name" ], params[ "param__ability_key" ] );
                let ability_popup = ability_data ? this._openPopup( ability_data ) : null;
                if ( ability_popup ) {
                    ability_popup.doActionAfter( "event__show_information", params );
                }
                return;
            case "event__show_information__masteries":
                let character = CONTROLLER.Character.current_character;
                let masteries_data = character ? character.getMasteries().getInformationData( character ) : null;
                if ( !masteries_data ) {
                    return;
                }
                // Les maîtrises sont un état du personnage : la popup est
                // reconstruite a chaque ouverture, jamais servie du cache
                if ( this.getContentByUUID( masteries_data[ "id" ] ) ) {
                    this.removeContent( masteries_data[ "id" ], null, true );
                }
                let masteries_popup = this._openPopup( masteries_data );
                if ( masteries_popup ) {
                    masteries_popup.doActionAfter( "event__show_information", params );
                }
                return;
            case "event__show_information__skill_actions":
                let skill_key        = params[ "param__skill" ];
                let skill_character  = CONTROLLER.Character.current_character;
                let skill_data       = OBJECT.SKILL_ACTIONS ? OBJECT.SKILL_ACTIONS[ skill_key ] : null;
                if ( !skill_character || !skill_data ) {
                    return;
                }
                let skill_popup_data = skill_character.getMasteries().getSkillActionsInformationData( skill_character, skill_key, skill_data );
                // Les actions affichées dépendent du rang courant du personnage :
                // la popup est reconstruite a chaque ouverture, jamais servie du cache
                if ( this.getContentByUUID( skill_popup_data[ "id" ] ) ) {
                    this.removeContent( skill_popup_data[ "id" ], null, true );
                }
                let skill_popup = this._openPopup( skill_popup_data );
                if ( skill_popup ) {
                    skill_popup.doActionAfter( "event__show_information", params );
                }
                return;
            case "event__show_information__feat": {
                let feat_data = params[ "param__feat_name" ] ? DON.getFeatInformation( params[ "param__feat_category" ], params[ "param__feat_name" ] ) : null;
                let feat_popup = feat_data ? this._openPopup( feat_data ) : null;
                if ( feat_popup ) {
                    feat_popup.doActionAfter( "event__show_information", params );
                }
                return;
            }
            // The stuff data is static : the popup caches by its uuid
            case "event__show_information__item": {
                let stuff_data = params[ "param__stuff__value" ] ? STUFFS.getItemInformation( params[ "param__stuff__value" ] ) : null;
                let stuff_popup = stuff_data ? this._openPopup( stuff_data ) : null;
                if ( stuff_popup ) {
                    stuff_popup.doActionAfter( "event__show_information", params );
                }
                return;
            }
            // The spell data is static : the popup caches by its scraped uuid
            case "event__show_information__spell": {
                let spell_data = params[ "param__spell__value" ] ? SPELLS.getSpellInformation( params[ "param__spell__value" ] ) : null;
                let spell_popup = spell_data ? this._openPopup( spell_data ) : null;
                if ( spell_popup ) {
                    spell_popup.doActionAfter( "event__show_information", params );
                }
                return;
            }
            // The slot totals are a character state : the popup is rebuilt at
            // each opening, never served from the cache
            case "event__show_information__spell_slots": {
                let slots_character = CONTROLLER.Character.current_character;
                let slots_data      = slots_character ? slots_character.getSpellSlots().getInformationData( slots_character, params[ "param__spell__rank" ] === null || params[ "param__spell__rank" ] === undefined ? 0 : parseInt( params[ "param__spell__rank" ], 10 ) ) : null;
                if ( !slots_data ) {
                    return;
                }
                if ( this.getContentByUUID( slots_data[ "id" ] ) ) {
                    this.removeContent( slots_data[ "id" ], null, true );
                }
                let slots_popup = this._openPopup( slots_data );
                if ( slots_popup ) {
                    slots_popup.doActionAfter( "event__show_information", params );
                }
                return;
            }
            case "event__popup__close":
                this.getContentByUUID( params[ "param__popup__uuid" ] ).doActionAfter( event_name, params );
                return;
        }
    },

    _openPopup: function ( object_data ) {
        let to_return = this.getContentByUUID( object_data[ "id" ] );
        if ( !to_return ) {
            to_return = this.add( new OBJECT.PopupRenderer( object_data ) );
            to_return.computeHtml();
        }
        return to_return;
    }
};

SERVICE.CLASS.addPrototype( OBJECT.PopupRenderers, OBJECT.InterfaceContainer );
