"use strict";

OBJECT.InterfaceHtml           = function () {
};
OBJECT.InterfaceHtml.prototype = {
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.setData( _currentKey, data[ _currentKey ] );
        }
    },
    //********************************************  SETTER GETTER   **************************************************//
    /**
     * @returns {string}
     */
    getName      : function () {
        return this.name;
    },
    getLabel     : function () {
        return this.label;
    },
    addClass     : function ( to_add ) {
        if ( !this.class ) {
            this.class = to_add;
        }
        else {
            this.class = this.class + " " + to_add;
        }
        if ( this.getDomElement() ) {
            this.getDomElement().classList.add( to_add );
        }
    },
    removeClass  : function ( to_remove ) {
        this.class = SERVICE.STRING.replaceAll( this.class, to_remove, "" );
        if ( this.getDomElement() ) {
            this.getDomElement().classList.remove( to_remove );
        }
    },
    setDomElement: function ( to_set ) {
        this.dom_element = to_set;
    },
    getDomElement: function () {
        return this.dom_element;
    }
};
SERVICE.CLASS.addPrototype( OBJECT.InterfaceHtml, GS.OBJECT.GsObject );

OBJECT.InterfaceContainer           = function () {
    this.initContents();
};
OBJECT.InterfaceContainer.prototype = {
    initContents: function () {
        this.contents = [];
        this.mapping  = {};
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter      : function ( event_name, param_1, param_2, param_3 ) {
        this.doActionAfterCommon( event_name, param_1, param_2, param_3 );
    },
    doActionAfterCommon: function ( event_name, param_1, param_2, param_3 ) {
        switch ( event_name ) {
            default:
                for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
                    this.contents[ i ].doActionAfter( event_name, param_1, param_2, param_3 );
                }
                break;
        }
    },
    //********************************************  SETTER GETTER   **************************************************//
    getSize            : function () {
        return this.contents.length;
    },
    getContents        : function () {
        return this.contents;
    },
    getContent         : function ( index ) {
        return this.contents[ index ];
    },
    getContentByUUID   : function ( uuid ) {
        var _index = this.mapping[ uuid ];
        if ( _index === undefined ) {
            return null;
        }
        return this.contents[ _index ];
    },
    getMappingIndex    : function ( uuid ) {
        return this.mapping[ uuid ];
    },
    getNextLoopingIndex: function ( current_index ) {
        if ( this.getSize() > current_index + 1 ) {
            return current_index + 1;
        }
        return 0;
    },
    getObjectsType     : function () {
        return "";
    },
    isEmpty            : function () {
        return this.getSize() === 0;
    },
    //********************************************  ACTIONS  **************************************************//
    doActionAfterContentChildren  : function ( event_name, param_1, param_2, param_3 ) {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].doActionAfter( event_name, param_1, param_2, param_3 );
        }
    },
    containsUUID                  : function ( uuid ) {
        return uuid in this.mapping;
    },
    sortContentByClassName        : function () {
        var to_return = this.contents.sort( ( a, b ) => (a.content.getObjectClassName() > b.content.getObjectClassName()) ? -1 : ((b.content.getObjectClassName() > a.content.getObjectClassName()) ? 1 : 0) );
        this.computeMapping();
        return to_return;
    },
    add                           : function ( to_add ) {
        return this.addCommon( to_add );
    },
    addCommon                     : function ( to_add ) {
        if ( this.mapping[ to_add.getUUID() ] !== undefined ) {
            this.contents[ this.mapping[ to_add.getUUID() ] ] = to_add;
        }
        else {
            this.mapping[ to_add.getUUID() ] = this.contents.push( to_add ) - 1;
        }
        return to_add;
    },
    insertAtIndex                 : function ( to_add, index ) {
        SHINKEN.TOOLS.ARRAY.insert( this.contents, to_add, index );
        this.computeMapping();
    },
    removeContent                 : function ( uuid_to_remove, params, avoid_revert_content ) {
        var _to_remove = this.getContentByUUID( uuid_to_remove );
        if ( !_to_remove ) {
            return;
        }
        if ( !avoid_revert_content ) {
            _to_remove.remove( params );
        }
        SHINKEN.TOOLS.ARRAY.removeElementByIndex( this.contents, this.mapping[ uuid_to_remove ] );
        this.computeMapping();
    },
    removeContentByIndex          : function ( index_to_remove, avoid_revert_content ) {
        if ( !avoid_revert_content ) {
            this.getContent( index_to_remove ).remove();
        }
        SHINKEN.TOOLS.ARRAY.removeElementByIndex( this.contents, index_to_remove );
        this.computeMapping();
    },
    removeAllContentFromIndex     : function ( index_to_remove ) {
        SHINKEN.TOOLS.ARRAY.removeAllElementsFromIndex( this.contents, index_to_remove );
        this.computeMapping();
    },
    removeFirstXContent           : function ( nb_to_remove ) {
        SHINKEN.TOOLS.ARRAY.removeXElementsFromIndex( this.contents, 0, nb_to_remove );
        this.computeMapping();
    },
    resetContents                 : function () {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].remove();
        }
        this.initContents();
    },
    resetContentsCounters         : function () {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            if ( this.contents[ i ].resetCounters ) {
                this.contents[ i ].resetCounters();
            }
        }
    },
    computeMapping                : function () {
        this.computeMappingCommon();
    },
    computeMappingCommon          : function () {
        this.mapping = {};
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.mapping[ this.contents[ i ].getUUID() ] = i;
        }
    },
    extractContentUuidIfHasCounter: function ( counter_type ) {
        var to_return = [];
        var current;
        for ( var i = this.getSize() - 1; i >= 0; i-- ) {
            current = this.getContent( i );
            if ( current.hasCounter( counter_type ) ) {
                to_return.push( current.getUUID() );
                this.removeContentByIndex( i, true );
            }
        }
        return to_return;
    },
    getContentUuidIfHasCounter    : function ( counter_type ) {
        var to_return = [];
        var current;
        for ( var i = this.getSize() - 1; i >= 0; i-- ) {
            current = this.getContent( i );
            if ( current.hasCounter( counter_type ) ) {
                to_return.push( current.getUUID() );
            }
        }
        return to_return;
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        var to_return = [];
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            to_return.push( this.contents[ i ].getDataToSave() );
        }
        return to_return;
    },
    //********************************************  PARAMS FOR EVENTS   **************************************************//
    addParamForEvents           : function ( key, value ) {
        this.addParamForEventsCommonChild( key, value );
    },
    addParamForEventsCommonChild: function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        this.addChildrenParamForEvents( key, value );
    },
    addChildrenParamForEvents   : function ( key, value ) {
        if ( !this.contents ) {
            return;
        }
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].addParamForEvents( key, value );
        }
    }
};

OBJECT.InterfaceContainerHtml           = function () {
};
OBJECT.InterfaceContainerHtml.prototype = {
    //********************************************  EVENT LISTENER   **************************************************//
    onClick     : function ( event ) {
        this.askHidePopup( this.getDomByEvent( event ) );
    },
    askHidePopup: function ( dom_element ) {
        if ( dom_element === this.getDomElement() ) {
            return false;
        }
        this.hidePopup();
        var _keys = Object.keys( this.contents );
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            this.contents[ _keys[ i ] ].askHidePopup( dom_element );
        }
        return true;
    },
    //********************************************  SETTER GETTER   **************************************************//
    getContentByEvent: function ( event ) {
        if ( !event ) {
            return null;
        }
        var _parent_dom_element = DOM.Service.findParentElementWithDataSet( event.target, "name", 10 );
        if ( !_parent_dom_element ) {
            return null;
        }
        var _type = _parent_dom_element.dataset.objectType;
        if ( _type === this.getObjectsType() ) {
            return this.getContentByUUID( _parent_dom_element.dataset.name );
        }
    },
    getDomByEvent    : function ( event ) {
        if ( !event ) {
            return null;
        }
        return DOM.Service.findParentElementWithDataSet( event.target, "name", 10 );
    }
};
SERVICE.CLASS.addPrototype( OBJECT.InterfaceContainerHtml, OBJECT.InterfaceContainer );
SERVICE.CLASS.addPrototype( OBJECT.InterfaceContainerHtml, OBJECT.InterfaceHtml );