"use strict";
/**
 * @class OBJECT.ConfigurableValue
 * @extends OBJECT.InterfaceHtml
 * @extends GS.OBJECT.PhaseInterface
 */
OBJECT.ConfigurableValue = function ( key, initial_value, editable_value ) {
    this.init( key, initial_value, editable_value );
};
OBJECT.ConfigurableValue.prototype = {
    init: function ( key, initial_value, editable_value ) {
        this.key            = key;
        this.initial_value  = initial_value;
        this.editable_value = editable_value;
        this.value          = this.initial_value;
        this.initPhase( GS.OBJECT.CONST.PHASE.SLEEPING );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__compute__html":
                switch ( params[ "param__window" ] ) {
                    case CHARACTER.CharacteristicWindow.NAME:
                        this.computeCharacteristicWindow( params[ "param__dom_element_parent" ] );
                        return;
                }
                return;
            case "event__reset_bonuses":
                this.setValue( this.initial_value );
                this.setPhase( GS.OBJECT.CONST.PHASE.SLEEPING );
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID       : function () {
        return this.getParamForEvents( "param__is_for" );
    },
    isSet         : function () {
        return this.initial_value !== this.value && this.value !== this.editable_value;
    },
    setValue      : function ( to_set ) {
        this.value = to_set;
        this.updateHtml();
    },
    getValue      : function () {
        return this.value;
    },
    changeValue   : function ( delta ) {
        this.value += delta;
        this.updateHtml();
    },
    getDataToSave : function () {
        let to_return                             = {};
        to_return[ this.key ]                     = {};
        to_return[ this.key ][ "value" ]          = this.value;
        to_return[ this.key ][ "initial_value" ]  = this.initial_value;
        to_return[ this.key ][ "editable_value" ] = this.editable_value;
        let phase_save = this.getPhaseToSave();
        if ( phase_save ) {
            to_return[ this.key ][ "phase" ] = phase_save;
            
        }
        return to_return;
    },
    getPhaseToSave: function () {
        let to_return = this.getCurrentPhase();
        switch ( to_return ) {
            case GS.OBJECT.CONST.PHASE.SETTINGS_FORCED:
            case GS.OBJECT.CONST.PHASE.SETTINGS_FORBIDDEN:
            case GS.OBJECT.CONST.PHASE.SETTINGS_EDITED:
                return to_return;
        }
        return null;
    },
    setData       : function ( key, value ) {
        switch ( key ) {
            case "phase":
                this.setPhase( value );
                break;
            case "value":
                this.value = value;
                break;
            case "initial_value":
                this.initial_value = value;
                break;
            case "editable_value":
                this.editable_value = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML  **************************************************//
    computeCharacteristicWindow: function () {
        if ( this.dom_element_characteristics ) {
            return;
        }
        this.dom_element_characteristics = SERVICE.DOM_HELPER.createDiv_SpaceAround();
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createLessButton( this.getParamForEvents() ), this.dom_element_characteristics );
        this.label_dom_element = SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createDiv_FullyCentred( this.value ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createMoreButton( this.getParamForEvents() ), this.dom_element_characteristics );
        this.setPhaseDomElement( this.dom_element_characteristics );
    },
    updateHtml                 : function () {
        if ( this.label_dom_element ) {
            this.label_dom_element.innerHTML = this.value;
        }
    }
};
SERVICE.CLASS.addPrototype( OBJECT.ConfigurableValue, OBJECT.InterfaceHtml );
SERVICE.CLASS.addPrototype( OBJECT.ConfigurableValue, GS.OBJECT.PhaseInterface );

/**
 * @class OBJECT.CalculatedValue
 * @extends OBJECT.InterfaceHtml
 */
OBJECT.CalculatedValue = function ( uuid ) {
    this.init( uuid );
};
OBJECT.CalculatedValue.prototype = {
    init: function ( uuid ) {
        this.uuid = uuid;
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__compute__html":
                switch ( params[ "param__window" ] ) {
                    case CHARACTER.GeneralWindow.NAME:
                        this.computeHtmlGeneralWindow( params[ "param__dom_element_parent" ] );
                        return;
                    case CHARACTER.CharacteristicWindow.NAME:
                        this.computeCharacteristicWindow( params[ "param__dom_element_parent" ] );
                        return;
                }
                return;
        }
        OBJECT.InterfaceHtml.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID      : function ( to_set ) {
        return this.uuid;
    },
    setValue     : function ( to_set ) {
        this.value = to_set;
        if ( this.dom_element_general ) {
            this.dom_element_general.innerHTML = this.value;
        }
        if ( this.dom_element_characteristics ) {
            this.dom_element_characteristics.innerHTML = this.value;
        }
    },
    getDataToSave: function () {
    }
};
SERVICE.CLASS.addPrototype( OBJECT.CalculatedValue, OBJECT.InterfaceHtml );

/**
 * @class OBJECT.FinalValue
 * @extends OBJECT.CalculatedValue
 */
OBJECT.FinalValue = function ( uuid ) {
    this.init( uuid );
};
OBJECT.FinalValue.prototype = {
    //********************************************  EVENT LISTENER  *****************************************************//
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function ( to_set ) {
        return "final_value";
    },
    //********************************************  HTML   **************************************************//
    computeHtmlGeneralWindow   : function () {
        if ( this.dom_element_general ) {
            return;
        }
        this.dom_element_general = SERVICE.DOM.createElement( "div", { class: "final-value" }, this.value );
    },
    computeCharacteristicWindow: function () {
        if ( this.dom_element_characteristics ) {
            return;
        }
        this.dom_element_characteristics = SERVICE.DOM_HELPER.createDiv_SpaceAround();
        this.label_dom_element           = SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createDiv_FullyCentred( this.value ), this.dom_element_characteristics );
    }
};
SERVICE.CLASS.addPrototype( OBJECT.FinalValue, OBJECT.CalculatedValue );
/**
 * @class OBJECT.ModifierValue
 * @extends OBJECT.CalculatedValue
 */
OBJECT.ModifierValue = function ( uuid ) {
    this.init( uuid );
};
OBJECT.ModifierValue.prototype = {
    //********************************************  EVENT LISTENER  *****************************************************//
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function ( to_set ) {
        return "modifier_value";
    },
    //********************************************  HTML   **************************************************//
    computeHtmlGeneralWindow   : function () {
        if ( this.dom_element_general ) {
            return;
        }
        this.dom_element_general = SERVICE.DOM.createElement( "div", { class: "characteristic-modifier" }, this.value );
    },
    computeCharacteristicWindow: function () {
        if ( this.dom_element_characteristics ) {
            return;
        }
        this.dom_element_characteristics = SERVICE.DOM_HELPER.createDiv_SpaceAround();
        this.label_dom_element           = SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createDiv_FullyCentred( this.value ), this.dom_element_characteristics );
    }
};
SERVICE.CLASS.addPrototype( OBJECT.ModifierValue, OBJECT.CalculatedValue );
