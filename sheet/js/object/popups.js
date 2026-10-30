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
                let masteries_data = character ? character.getMasteries().getInformationData() : null;
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
                let skill_popup_data = skill_character.getMasteries().getSkillActionsInformationData( skill_key, skill_data );
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
