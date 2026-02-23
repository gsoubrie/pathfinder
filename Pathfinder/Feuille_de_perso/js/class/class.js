"use strict";
CLASSES.Class           = function () {
    this.init();
};
CLASSES.Class.prototype = {
    init: function ( data ) {
        this.setKey( CLASSES.key_element );
        this.setLabelProperty( CLASSES.label_element );
        this.setDefaultValue( CLASSES.default_value );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__form__element_changed":
                this.setValue( params[ "param__edition_value" ] );
                params[ "param__characteristics__object" ].doActionAfter( "event__reset_characteristics_bonuses", { "param__is_for": CLASSES.key_element } );
                params[ "param__characteristics__object" ].doActionAfter( "event__set_object_bonuses", { "param__class_object": this, "param__is_for": CLASSES.key_element } );
                break;
        }
        CHARACTER.ComponentInterfacePopup.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setValue: function ( to_set ) {
        CHARACTER.ComponentInterface.prototype.setValue.call( this, to_set );
        let data_from_class = Object.assign( {}, CLASSES.getDataByName( this.getValue() ) );
        delete data_from_class[ "name" ];
        var _keys = Object.keys( data_from_class );
        var _current_key;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            this.setData( _current_key, data_from_class[ _current_key ] );
        }
        document.body.dataset.isClassSet = this.isSet() ? 1 : 0;
    },
    getUUID: function () {
        return this.getName();
    },
    //********************************************  HTML   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "characteristics_bonus":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key );
        }
    }
    //********************************************  SAVE   **************************************************//
};

SERVICE.CLASS.addPrototype( CLASSES.Class, CHARACTER.ComponentInterfacePopup );
