"use strict";
/**
 * @class ComponentInterface
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.ComponentInterface = function () {
};
CHARACTER.ComponentInterface.prototype = {
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__compute__html":
                this.computeHtml( params );
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    setKey      : function ( to_set ) {
        this.key = to_set;
    },
    setValue      : function ( to_set ) {
        this.value = to_set;
    },
    getDataToSave: function () {
        let to_return         = {};
        to_return[ this.key ] = this.value;
        return to_return;
    },
};

SERVICE.CLASS.addPrototype( CHARACTER.ComponentInterface, OBJECT.InterfaceHtml );
