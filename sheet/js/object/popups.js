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
