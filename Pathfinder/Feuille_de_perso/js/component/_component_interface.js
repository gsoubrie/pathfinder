"use strict";
/**
 * @class CHARACTER.ComponentInterface
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.ComponentInterface = function () {
};
CHARACTER.ComponentInterface.prototype = {
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter : function ( event_name, params ) {
        switch ( event_name ) {
            case "event__compute__html":
                this.computeHtml( params );
                return;
        }
    },
    getObjectByKey: function ( key_name ) {
        if ( this[ key_name ] ) {
            return this[ key_name ];
        }
        if ( this.children ) {
            for ( let i = 0, _size_i = this.children.length; i < _size_i; i++ ) {
                let current = this.children[ i ].getObjectByKey( key_name );
                if ( current ) {
                    return current;
                }
            }
        }
        return null;
    },
    //********************************************  GETTER SETTER  **************************************************//
    isSet                : function () {
        return !!this.value;
    },
    setKey               : function ( to_set ) {
        this.key = to_set;
    },
    setLabelProperty     : function ( to_set ) {
        this.label_property = to_set;
    },
    setDefaultValue      : function ( to_set ) {
        this.default_value = to_set;
    },
    setValue             : function ( to_set ) {
        this.value = to_set;
        if ( this.dom_element__input ) {
            this.dom_element__input.value = this.value;
        }
    },
    getKey               : function () {
        return this.key;
    },
    getUUID              : function () {
        return this.getKey();
    },
    getValue             : function () {
        return this.value || "";
    },
    getSpecificDataToSave: function () {
        let to_return = {};
        if ( this.children ) {
            to_return[ this.key ] = {
                value: this.getValue()
            };
        }
        else {
            to_return[ this.key ] = this.value;
        }
        return to_return;
    },
    //********************************************  HTML   **************************************************//
    computeHtml             : function ( params ) {
        switch ( params[ "param__window" ] ) {
            case CHARACTER.GeneralWindow.NAME:
                this.computeHtmlGeneralWindow( params[ "param__dom_element_parent" ] );
                return;
        }
    },
    computeHtmlGeneralWindow: function ( dom_element_parent ) {
        if ( this.dom_element_general ) {
            return;
        }
        this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-" + this.key } ), dom_element_parent );
        let div                  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: " property vertical", "data-name": this.key } ), this.dom_element_general );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, this.label_property ), div );
        this.dom_element__input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class   : "value",
            readOnly: "",
        } ), div );
        if ( this.isSet() ) {
            this.dom_element__input.value = this.getValue();
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return = this.getSpecificDataToSave();
        if ( this.children ) {
            let object = to_return[ this.key ] || to_return;
            for ( let i = 0, _size_i = this.children.length; i < _size_i; i++ ) {
                object = Object.assign( object, this.children[ i ].getDataToSave() );
            }
        }
        return to_return;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.ComponentInterface, OBJECT.InterfaceHtml );

/**
 * @class CHARACTER.ComponentInterfaceInput
 * @extends CHARACTER.ComponentInterface
 */
CHARACTER.ComponentInterfaceInput = function () {
};
CHARACTER.ComponentInterfaceInput.prototype = {
    //********************************************  HTML   **************************************************//
    computeHtmlGeneralWindow: function ( dom_element_parent ) {
        if ( this.dom_element_general ) {
            return;
        }
        this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-" + this.key } ), dom_element_parent );
        let div                  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: " property vertical", "data-name": this.key } ), this.dom_element_general );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, this.label_property ), div );
        this.dom_element__input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class   : "value",
            onchange: "MANAGER.EventManagerV2.doActionAfter(event,'event__has_change__input',{'property_name':'" + this.getKey() + "'})"
        } ), div );
        if ( this.isSet() ) {
            this.dom_element__input.value = this.getValue();
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.ComponentInterfaceInput, CHARACTER.ComponentInterface );

/**
 * @class CHARACTER.ComponentInterfacePopup
 * @extends CHARACTER.ComponentInterface
 */
CHARACTER.ComponentInterfacePopup = function () {
};
CHARACTER.ComponentInterfacePopup.prototype = {
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__property_popup__open":
                CONTROLLER.Character.edition_popup = new POPUP.PropertyEdition( this.getKey(), this.getValue() || this.default_value );
                break;
        }
        CHARACTER.ComponentInterface.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  HTML   **************************************************//
    computeHtmlGeneralWindow: function ( dom_element_parent ) {
        if ( this.dom_element_general ) {
            return;
        }
        this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-" + this.key } ), dom_element_parent );
        let div                  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: " property vertical", "data-name": this.key } ), this.dom_element_general );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, this.label_property ), div );
        this.dom_element__input       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class   : "value",
            readOnly: "",
            onclick : "MANAGER.EventManagerV2.doActionAfter(event,'event__property_popup__open',{'property_name':'" + this.getKey() + "'})"
        } ), div );
        this.dom_element__input.value = this.getValue();
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.ComponentInterfacePopup, CHARACTER.ComponentInterface );

/**
 * @class CHARACTER.ContainerComponentInterface
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.ContainerComponentInterface = function () {
};
CHARACTER.ContainerComponentInterface.prototype = {
    init         : function () {
        this.initContents();
    },
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__compute__html":
                this.computeHtml( params );
                return;
        }
        GS.OBJECT.GsObjectContainer.prototype.doActionAfterContentChildren.call( this, event_name, params );
    },
    //********************************************  HTML   **************************************************//
    computeHtml             : function ( params ) {
        switch ( params[ "param__window" ] ) {
            case CHARACTER.CharacteristicWindow.NAME:
                this.computeCharacteristicWindow( params[ "param__dom_element_parent" ] );
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
};

SERVICE.CLASS.addPrototype( CHARACTER.ContainerComponentInterface, OBJECT.InterfaceContainerHtml );
