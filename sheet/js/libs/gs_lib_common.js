"use strict";
var GS                                    = GS || {};
GS.TOOLS                                  = GS.TOOLS || {};
GS.TOOLS.ARRAY                            = GS.TOOLS.ARRAY || {};
GS.OBJECT                                 = GS.OBJECT || {};
GS.OBJECT.CONST                           = GS.OBJECT.CONST || {};
GS.CONST                                  = {
    KEY_CODE        : {
        TAB      : 9,
        ENTER    : 13,
        SHIFT    : 16,
        CTRL     : 17,
        ALT      : 18,
        PAUSE    : 19,
        CAPS_LOCK: 20,
        ESCAPE   : 27,
        SPACE    : 32,
        PAGE_UP  : 33,
        PAGE_DOWN: 34,
        END      : 35,
        HOME     : 36,
        LEFT     : 37,
        UP       : 38,
        RIGHT    : 39,
        DOWN     : 40,
        SUPPR    : 46,
        A        : 65,
        C        : 67,
        F        : 70,
        S        : 83,
        V        : 86,
        W        : 87,
        Y        : 89,
        Z        : 90,
        F1       : 112
    },
    MOUSE           : {
        LEFT  : 0,
        MIDDLE: 1,
        RIGHT : 2
    },
    VISIBILITY_STATE: {
        TOTALLY_FORM_EXCLUDE   : "form_exclude",
        FORM_EXCLUDE__WHEN_SAVE: "form_exclude__when_save",
        HIDDEN                 : "hidden",
        DISABLED               : "disabled",
        LOCKED                 : "locked",
        NORMAL                 : ""
    },
    PARAM           : {
        CALLBACK_FUNCTION       : "callback_function",
        CALLBACK_DO_ACTION_AFTER: "callback_do_action_after",
        KEY_CODE                : "key_code",
        EVENT_PARAM             : {
            AVOID_DO_ACTION_AFTER: "avoid_do_action_after"
        }
    }
};
GS.TOOLS.CLASS                            = (function ( self ) {
    self.CONST        = {
        COMPONENT: {
            SELECT: "component-select"
        }
    };
    self.addPrototype = function ( object_to_add_in, object_to_add_from ) {
        var _current;
        var _keys = Object.keys( object_to_add_from.prototype );
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current = _keys[ i ];
            if ( object_to_add_in.prototype[ _current ] === undefined ) {
                object_to_add_in.prototype[ _current ] = object_to_add_from.prototype[ _current ];
            }
        }
    };
    return self;
})( GS.TOOLS.CLASS || {} );
var GS                                    = GS || {};
GS.OBJECT                                 = GS.OBJECT || {};
var COMPONENT                             = COMPONENT || {};
COMPONENT.CONST                           = {
    PARAM                   : {
        STATUS                : "component_status",
        TEXT_DEFAULT_SELECTOR : "text_default_selector",
        TEXT_PLACEHOLDER_INPUT: "text_placeholder_input"
    },
    NOT_FOUND               : -1,
    BTN_STATE               : {
        DISABLED           : -1,
        OFF                : 0,
        ON                 : 1,
        DISCREET           : 2,
        INIT               : 3,
        ENABLED_WITH_ERRORS: 4
    },
    BTN_STATUS              : {
        NONE   : 0,
        WARNING: 1,
        ERROR  : 2
    },
    AUTO_SELECT_ACTION_TYPE : {
        MOVE_DOWN: "move_down",
        MOVE_UP  : "move_up",
        MOUSE    : "mouse",
        KEY_INPUT: "key_input"
    },
    BTN_NAME                : {
        SAVE   : "save",
        DEFAULT: "default"
    },
    SELECT                  : {
        NAME_MAIN_SELECTOR        : "main_selector",
        SELECTOR                  : "gs-select-selector",
        SELECTOR_TEXT             : "gs-selector-label",
        SELECTOR_LIST             : "gs-list-select",
        SELECTOR_LIST_OPTION      : "gs-option",
        OPTION_ACTIVE_STAGING     : "gs-active-option-staging",
        OPTION_ACTIVE_WORKING_AREA: "gs-active-option-working-area",
        DATA_STATE_SELECTOR       : "stateSelector",
        TIMER_DELAY_BUILD_HTML    : 100
    },
    BTN_INHERITANCE         : {
        TIMER_DELAY_BUILD_HTML: 100
    },
    INHERITANCE_ARBORESCENCE: {},
    TAG                     : {
        STATE: {
            WORKING         : "working_area",
            NEW             : "new",
            STAGGING        : "stagging",
            DISABLED        : "disabled",
            UNKNOWN         : "unknown",
            HIDDEN          : "hidden",
            INHERITED       : "inherited",
            FORCE_TO_NULL   : "force-to-null",
            OVERRIDE_NEW    : "override-new",
            OVERRIDE_UNKNOWN: "override-unknown",
            IT_SELF         : "gs-itself"
        }
    },
    FILTER                  : {
        TYPES_VALIDATION: {
            HAS_FOCUS: "has_focus",
            NOT_FOCUS: "not_focus"
        }
    },
    INPUT                   : {
        TYPES: {
            SINGLE_SELECT: "single-select"
        }
    },
    LIST_SELECT             : {
        CLASS: {
            NO_RESULT   : "gs-no-result",
            FILTERING_ON: "gs-filtering-on"
        }
    },
    LIST_SELECT_ELEMENT     : {
        CLASS: {
            HIDDEN: "gs-hidden"
        }
    },
    STATUS                  : {
        NONE   : "gs-no-status",
        INFO   : "gs-info",
        ERROR  : "gs-error-status",
        WARNING: "gs-warning-status",
        BEWARE : "gs-beware-status",
        VALID  : "gs-valid-status"
    },
    TYPE                    : {
        HIDDEN                    : "hidden",
        SINGLE_SELECT             : "select-single",
        STRING_INPUT              : "input_string",
        INPUT_STRING_ARRAY        : "input_string_array",
        STRING_INPUT_WITH_DROPDOWN: "input-string-with-dropdown",
        MULTI_SELECT              : "select-multi",
        LABEL                     : "label",
        SINGLE_SELECT_WITH_INPUT  : "select-single-with-input",
        MULTI_SELECT_BASIC        : "select-multi-basic"
    },
    TAG_INFORMATION         : {
        STATUS: {
            NONE                 : "none",
            ALL_DISABLED         : "all-disabled",
            ALL_DISABLED_OVERRIDE: "all-disabled-override",
            NOT_VALID_FOR_ARBITER: "not-arbiter-valid",
            USER_GROUP_COHERENCY : "user-group-coherency",
            IN_SHELL             : "in_shell",
            CHECK_DUPLICATE      : "check_duplicate",
            LOCKED               : "locked"
        }
    },
    PAGINATION_NAVIGATION   : {
        FIRST   : "first",
        LAST    : "last",
        PREVIOUS: "previous",
        NEXT    : "next"
    },
    BTN_RADIO               : {
        CLASS: {
            SHINKEN_BUTTON_ACTIVE  : 'gs-active',
            SHINKEN_BUTTON_DISABLED: 'gs-disabled'
        }
    }
};
var MANAGER                               = MANAGER || {};
MANAGER.CONST                             = MANAGER.CONST || {
    STATE          : {
        WORK_FLOW: {
            STAGING     : "save-direct-in-staging",
            WORKING_AREA: "save-in-working-area"
        }
    },
    DRAG_N_DROP    : {
        CLASS: {
            HOVER    : "hover",
            DRAGGABLE: "draggable",
            DRAGGING : "gs-dragging-on"
        }
    },
    HELP           : {
        STATUS: {
            INACTIVE: 1,
            ACTIVE  : 2,
            FORCED  : 3
        }
    },
    AFTER_ACTION   : {
        CLICK_ON_SERVICE_OVERRIDE       : 0,
        UPDATE_VIEW_ON_WINDOW_PROPERTIES: 1
    },
    USER_PREFS_KEYS: {
        SHOW_SOURCE_CONFIGURATION_TAB_OLD_RUN: "show_source_configuration_tab_old_run"
    },
    RESIZE         : {
        TYPE: {
            NONE        : "NONE",
            LEFT        : "LEFT",
            RIGHT       : "RIGHT",
            BOTTOM      : "BOTTOM",
            TOP         : "TOP",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            BOTTOM_LEFT : "BOTTOM_LEFT",
            TOP_RIGHT   : "TOP_RIGHT",
            TOP_LEFT    : "TOP_LEFT"
        }
    }
};
GS.OBJECT.GsObject                        = function () {
    this.__class_name__ = "GS.OBJECT.GsObject";
};
GS.OBJECT.GsObject.prototype              = {
    setShinkenDebug            : function ( to_set ) {
        this.is_shinken_debug = to_set;
        var _components       = this.getChildrenObject();
        for ( var i = 0, _size_i = _components.length; i < _size_i; i++ ) {
            if ( _components[ i ] ) {
                _components[ i ].setShinkenDebug( to_set );
            }
        }
    },
    isShinkenDebugOn           : function () {
        return this.is_shinken_debug;
    },
    doActionAfter              : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon        : function ( event_name, param ) {
    },
    getChildrenObject          : function () {
        return [];
    },
    getChildrenObjectDict      : function () {
        return {};
    },
    initMessages               : function () {
        this.messages = new GS.OBJECT.Messages();
    },
    setMessages                : function ( to_set ) {
        this.initMessages();
        if ( !to_set ) {
            this.doActionAfterAddMessages();
            return;
        }
        if ( to_set.__class_name__ === "GS.OBJECT.Messages" ) {
            this.messages = to_set;
            this.doActionAfterAddMessages();
            return;
        }
        var _keys = Object.keys( to_set );
        
        var _current_key;
        var _current_status;
        for ( var i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
            _current_key    = _keys[ i ];
            _current_status = GS.OBJECT.Messageservice.parseBackendStatus( _current_key );
            for ( var j = 0, _size_j = to_set[ _current_key ].length; j < _size_j; j++ ) {
                this.messages.addMessage( _current_status, to_set[ _current_key ][ j ] );
            }
        }
        this.doActionAfterAddMessages();
    },
    addMessages                : function ( shinken_messages ) {
        this.messages.addMessages( shinken_messages.getAllMessages() );
    },
    addMessage                 : function ( status, text ) {
        if ( !this.messages ) {
            this.messages = new GS.OBJECT.Messages();
        }
        this.messages.addMessage( status, text );
    },
    doActionAfterAddMessages   : function () {
    },
    getMessages                : function () {
        return this.messages;
    },
    canBeDeleted               : function () {
        return true;
    },
    setDefaultKeyAndValue      : function ( default_key, default_value ) {
        this.setDefaultKeyAndValueCommon( default_key, default_value );
    },
    setDefaultKeyAndValueCommon: function ( default_key, default_value ) {
        this.default_key   = default_key;
        this.default_value = default_value;
    },
    getDefaultValue            : function () {
        return this.default_value;
    },
    getDefaultKey              : function () {
        return this.default_key;
    },
    setNeedValidation          : function ( to_set ) {
        this.need_validation = to_set;
        var _components      = this.getChildrenObject();
        for ( var i = 0, _size_i = _components.length; i < _size_i; i++ ) {
            _components[ i ].setNeedValidation( to_set );
        }
    },
    addParamsForEvents         : function ( param_events ) {
        if ( !param_events ) {
            return;
        }
        var _keys = Object.keys( param_events );
        var _current_key;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            this.addParamForEvents( _keys[ i ], param_events[ _keys[ i ] ] );
        }
    },
    addParamForEvents          : function ( key, value ) {
        this.addParamForEventsCommon( key, value );
    },
    addParamForEventsCommon    : function ( key, value ) {
        this._param_for_events        = this._param_for_events || {};
        this._param_for_events[ key ] = value;
    },
    getParamForEvents          : function ( key ) {
        let to_return = this._param_for_events || {};
        if ( key ) {
            return to_return[ key ];
        }
        return to_return;
    },
    getObjectClassName         : function () {
        return this.__class_name__;
    },
    isObjectClassName          : function ( to_test ) {
        return to_test === this.__class_name__;
    }
};
GS.OBJECT.InterfaceHtml           = function () {
};
GS.OBJECT.InterfaceHtml.prototype = {
    addClass   : function ( to_add ) {
        if ( !this.class ) {
            this.class = to_add;
        }
        else {
            this.class = this.class + " " + to_add;
        }
    },
    removeClass: function ( to_remove ) {
        this.class = GS.TOOLS.STRING.replaceAll( this.class, to_remove, "" );
    },
    hasClass   : function ( to_find ) {
        return GS.TOOLS.STRING.contains( this.class, to_find );
    },
    getClass   : function ( to_add ) {
        return this.class || "";
    }
};
GS.OBJECT.GsObjectHtml            = function () {
};
GS.OBJECT.GsObjectHtml.prototype  = {
    addClass                  : function ( to_add ) {
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
    removeClass               : function ( to_remove ) {
        this.class = GS.TOOLS.STRING.replaceAll( this.class, to_remove, "" );
        if ( this.getDomElement() ) {
            this.getDomElement().classList.remove( to_remove );
        }
    },
    setDomElement             : function ( to_set ) {
        this.dom_element = to_set;
        this.doActionAfterSetDomElement();
    },
    setLabel                  : function ( to_set ) {
        this.label = to_set;
    },
    getLabel                  : function () {
        return this.label;
    },
    getName                   : function () {
        return this.name;
    },
    doActionAfterSetDomElement: function () {
    },
    getDomElement             : function () {
        return this.dom_element;
    },
    getDomElementForTooltip   : function () {
        return this.getDomElement();
    },
    setDomElementStyle        : function ( style_param, style_value ) {
        SERVICE.DOM.setStyle( this.getDomElement(), style_param, style_value );
    },
    addDomElement             : function ( to_add ) {
        return SERVICE.DOM.addElementTo( to_add, this.getDomElement() );
    },
    changeContentDomElement   : function ( new_content ) {
        SERVICE.DOM.empty( this.getDomElement() );
        this.addDomElement( new_content );
    },
    askUpdateHtml             : function () {
        if ( this.timeout_ask_compute_html ) {
            clearTimeout( this.timeout_ask_compute_html );
        }
        this.timeout_ask_compute_html = setTimeout( () => {
            this.updateHtml();
            this.timeout_ask_compute_html = null;
        }, 200 );
    },
    updateHtml                : function () {
    },
    resetHTML                 : function () {
        this.resetHTMLCommon();
    },
    resetHTMLCommon           : function () {
        SERVICE.DOM.removeElement( this.getDomElement() );
        this.setDomElement();
    },
    computeHtml               : function () {
        this.computeHtmlExtra();
    },
    computeHtmlExtra          : function () {
    },
    getObjectType             : function () {
        return "";
    },
    computeHtml_setEventName  : function ( to_set ) {
        this.event_name = to_set;
    },
    setVisibilityState        : function ( to_set ) {
        this.visibility_state = to_set;
        if ( this.getDomElement() ) {
            SERVICE.DOM.setDataSet( this.getDomElement(), "visibilityState", this.getVisibilityState() );
        }
    },
    getVisibilityState        : function () {
        return this.visibility_state || "";
    },
    isVisible                 : function () {
        switch ( this.visibility_state ) {
            case GS.CONST.VISIBILITY_STATE.HIDDEN:
            case GS.CONST.VISIBILITY_STATE.TOTALLY_FORM_EXCLUDE:
                return false;
        }
        return true;
    },
    buildDoActionAfterEvent  : function ( event_name ) {
        return { "onclick": this.getDoActionAfterEvent( event_name ) };
    },
    getDoActionAfterEvent    : function ( event_name ) {
        return "MANAGER.EventManagerV2.doActionAfter(event,'" + event_name + "'," + this.parseParamForEventsToHtml() + ")";
    },
    parseParamForEventsToHtml : function () {
        return GS.TOOLS.DICT.parseToHTMLParam( this.getParamForEvents() );
    },
    onClick                   : function ( event ) {
    },
    hidePopup                 : function ( event ) {
    },
    askHidePopup              : function ( dom_element ) {
        if ( dom_element === this.getDomElement() ) {
            return false;
        }
        this.hidePopup( dom_element );
        return true;
    },
    askAddClass               : function ( to_add, time_out ) {
        SERVICE.DOM.askAddClass( this.getDomElement(), to_add, time_out );
    },
    askComputeSizes           : function ( param ) {
        if ( this.timeout_ask_compute_size ) {
            clearTimeout( this.timeout_ask_compute_size );
        }
        this.timeout_ask_compute_size = setTimeout( () => {
            this.computeSizes( param );
        }, 200 );
    },
    setTooltipHtml            : function ( to_set, tooltip_type ) {
        this.tooltip_html = to_set;
        this.tooltip_type = tooltip_type;
        this.computeHtml_tooltip();
    },
    removeTooltipHtml         : function () {
        this.tooltip_html = null;
        this.tooltip_type = null;
        this.computeHtml_tooltip();
    },
    computeHtml_tooltip       : function () {
        var _dom = this.getDomElementForTooltip();
        if ( !_dom ) {
            return;
        }
        if ( this.tooltip_html ) {
            _dom.setAttribute( "onmouseenter", "SHINKEN_TOOLTIP.showTooltip(this)" );
            _dom.setAttribute( "onmouseleave", "SHINKEN_TOOLTIP.hideTooltip()" );
            if ( this.tooltip_type ) {
                _dom.setAttribute( "shi-tip-type", this.tooltip_type );
            }
            _dom.setAttribute( "shi-tip-html", this.tooltip_html );
        }
        else {
            _dom.setAttribute( "shi-tip-html", "" );
        }
    },
        //********************************************  PARAMS FOR EVENTS   **************************************************//
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.GsObjectHtml, GS.OBJECT.GsObject );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.GsObjectHtml, GS.OBJECT.InterfaceHtml );
GS.OBJECT.GsObjectContainer           = function () {
    this.initContents();
};
GS.OBJECT.GsObjectContainer.prototype = {
    initContents                  : function () {
        this.contents = [];
        this.mapping  = {};
    },
    doActionAfter                 : function ( event_name, param_1, param_2, param_3 ) {
        this.doActionAfterCommon( event_name, param_1, param_2, param_3 );
    },
    doActionAfterCommon           : function ( event_name, param_1, param_2, param_3 ) {
        switch ( event_name ) {
            default:
                for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
                    this.contents[ i ].doActionAfter( event_name, param_1, param_2, param_3 );
                }
                break;
        }
    },
    getSize                       : function () {
        return this.contents.length;
    },
    getContents                   : function () {
        return this.contents;
    },
    getContent                    : function ( index ) {
        return this.contents[ index ];
    },
    getContentByUUID              : function ( uuid ) {
        var _index = this.mapping[ uuid ];
        if ( _index === undefined ) {
            return null;
        }
        return this.contents[ _index ];
    },
    getMappingIndex               : function ( uuid ) {
        return this.mapping[ uuid ];
    },
    getNextLoopingIndex           : function ( current_index ) {
        if ( this.getSize() > current_index + 1 ) {
            return current_index + 1;
        }
        return 0;
    },
    getObjectsType                : function () {
        return "";
    },
    isEmpty                       : function () {
        return this.getSize() === 0;
    },
    doActionAfterContentChildren  : function ( event_name, param_1, param_2, param_3 ) {
        for ( let i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
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
        GS.TOOLS.ARRAY.insert( this.contents, to_add, index );
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
        GS.TOOLS.ARRAY.removeElementByIndex( this.contents, this.mapping[ uuid_to_remove ] );
        this.computeMapping();
    },
    removeContentByIndex          : function ( index_to_remove, avoid_revert_content ) {
        if ( !avoid_revert_content ) {
            this.getContent( index_to_remove ).remove();
        }
        GS.TOOLS.ARRAY.removeElementByIndex( this.contents, index_to_remove );
        this.computeMapping();
    },
    removeAllContentFromIndex     : function ( index_to_remove ) {
        GS.TOOLS.ARRAY.removeAllElementsFromIndex( this.contents, index_to_remove );
        this.computeMapping();
    },
    removeFirstXContent           : function ( nb_to_remove ) {
        GS.TOOLS.ARRAY.removeXElementsFromIndex( this.contents, 0, nb_to_remove );
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
        let to_return = [];
        let current;
        for ( let i = this.getSize() - 1; i >= 0; i-- ) {
            current = this.getContent( i );
            if ( current.hasCounter( counter_type ) ) {
                to_return.push( current.getUUID() );
                this.removeContentByIndex( i, true );
            }
        }
        return to_return;
    },
    getContentUuidIfHasCounter    : function ( counter_type ) {
        let to_return = [];
        let current;
        for ( let i = this.getSize() - 1; i >= 0; i-- ) {
            current = this.getContent( i );
            if ( current.hasCounter( counter_type ) ) {
                to_return.push( current.getUUID() );
            }
        }
        return to_return;
    },
    getDataToSave                 : function () {
        let to_return = [];
        for ( let i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            to_return.push( this.contents[ i ].getDataToSave() );
        }
        return to_return;
    },
    addParamForEvents             : function ( key, value ) {
        this.addParamForEventsCommonChild( key, value );
    },
    addParamForEventsCommonChild  : function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        this.addChildrenParamForEvents( key, value );
    },
    addChildrenParamForEvents     : function ( key, value ) {
        if ( !this.contents ) {
            return;
        }
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].addParamForEvents( key, value );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.GsObjectContainer, GS.OBJECT.GsObject );
GS.OBJECT.GsObjectContainerHtml           = function () {
};
GS.OBJECT.GsObjectContainerHtml.prototype = {
    onClick          : function ( event ) {
        this.askHidePopup( this.getDomByEvent( event ) );
    },
    askHidePopup     : function ( dom_element ) {
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
    getContentByEvent: function ( event ) {
        if ( !event ) {
            return null;
        }
        var _parent_dom_element = SERVICE.DOM.findParentElementWithDataSet( event.target, "name", 10 );
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
        return SERVICE.DOM.findParentElementWithDataSet( event.target, "name", 10 );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.GsObjectContainerHtml, GS.OBJECT.GsObjectContainer );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.GsObjectContainerHtml, GS.OBJECT.GsObjectHtml );
var OBJECT                              = OBJECT || {};
OBJECT.CONST                            = OBJECT.CONST || {
    TEMPLATE             : {
        FIELD : {
            UUID             : "uuid",
            _ID              : "_id",
            _SYNC_KEYS       : "_SYNC_KEYS",
            NAME             : "name",
            IS_TEMPLATE      : "is_template",
            IS_TOP_LEVEL     : "is_top_level",
            ITEM_TYPE        : "item_type",
            LAST_MODIFICATION: "last_modification",
            REGISTER         : "register",
            SOURCES          : "sources",
            USE              : "use",
            ENABLED          : "enabled",
            UNCONFIGURED     : "unconfigured",
            STATUS           : "template-status",
            IS_NEW           : "is_new",
            LOOP             : "loop",
            WORK_AREA_INFO   : "work_area_info",
            METADATA         : "@metadata"
        },
        STATUS: {
            USEFUL  : "useful-template",
            USELESS : "useless-template",
            BADLOOP : "badloop-template",
            NEW     : "new-template",
            UNKNOWN : "unknown-template",
            DISABLED: "disabled-template"
        }
    },
    ELEMENT_LIST         : {
        TYPE         : {
            USER       : "user",
            INHERITANCE: "inheritance",
            SEARCHING  : "searching"
        },
        FILTER_OPTION: {
            IGNORED: "ignored_during_filter"
        }
    },
    MACRO                : {
        TYPE: {
            HOST_LOCAL        : "_HOST",
            SERVICE_LOCAL     : "_SERVICE",
            HOST_PROPERTY     : "macros_host_properties",
            SERVICE_PROPERTY  : "macros_service_properties",
            GLOBAL            : "macros_global",
            GLOBAL_INTERPRETED: "macros_global_interpreted",
            UNKNOWN           : "unknown",
            VALUE_DFE         : "VALUE_DFE",
            DFE_KEY           : "$KEY$"
        }
    },
    CHECK_IN_HOST        : {
        STATUS: {
            NONE                           : "",
            DFE_STRUCTURE                  : "dfe-structure",
            ALREADY_EXISTING_NAME          : "already_existing_name",
            ALREADY_EXISTING_NAME_IN_SAME  : "already_existing_name_in_same_host",
            ALREADY_EXISTING_NAME_DUPLICATE: "already_existing_name_duplicate"
        }
    },
    ELEMENT              : {
        PHASE           : {
            INIT         : 0,
            VIEWING      : 1,
            EDITING      : 2,
            ON_SAVING    : 3,
            SAVING_FAILED: 4,
            RELOADING    : 5
        },
        FIELD           : {
            ID                    : "_id",
            UUID                  : "uuid",
            SOURCES               : "sources",
            IMPORT_DATE           : "import_date",
            SERVICE_OVERRIDES     : "service_overrides",
            SERVICE_EXCLUDES_BY_ID: "service_excludes_by_id",
            WORK_AREA_INFO        : "work_area_info",
            SYNC_KEYS             : "_SYNC_KEYS ",
            LAST_MODIFICATION     : "last_modification",
            ENABLED               : "enabled",
            STATUS                : "status",
            ITEM_TYPE             : "item_type"
        },
        FIELD_UI        : {
            UUID                                        : "uuid",
            ITEM_NAME                                   : "item_name",
            ITEM_UUID                                   : "item_uuid",
            STATUS                                      : "status",
            CONTEXT                                     : "context",
            CONTEXT_OR_STATUS                           : "context_or_status",
            SLA                                         : {
                __KEY__           : "sla",
                VALUE             : "value",
                QUALITY           : "quality",
                TENDENCY          : "tendency",
                WARNING_THRESHOLD : "warning_threshold",
                CRITICAL_THRESHOLD: "critical_threshold"
            },
            ITEM_TYPE                                   : "item_type",
            IS_EXISTING                                 : "exists",
            IS_NOT_AUTHORIZED_FOR_USER                  : "is_not_authorized_for_user",
            ELEMENT_VISIBILITY_ON_NOT_AUTHENTICATED_VIEW: "element_visibility_on_not_authenticated_view",
            NAME                                        : "name",
            VISUALISATION_NAME                          : "visualisation_name"
        },
        MODULATION      : {
            TYPE: {
                NONE_FORCED: -1,
                NONE       : 0,
                PLUS       : 1,
                EXISTING   : 2,
                ERROR      : 3
            }
        },
        TYPE            : {
            CLUSTERS                  : "clusters",
            CLUSTER_TPLS              : "clustertpls",
            DISCOVERY                 : "discovery",
            HOSTS                     : "hosts",
            HOST_GROUPS               : "hostgroups",
            HOST_TPLS                 : "hosttpls",
            CHECK_ON_HOST             : "serviceshosts",
            CHECK_ON_TPL_HOST         : "serviceshosttpls",
            CHECK_ON_CLUSTER          : "servicesclusters",
            CHECK_ON_TPL_CLUSTER      : "servicesclustertpls",
            CHECK_TPLS                : "servicetpls",
            COMMANDS                  : "commands",
            CONTACT_GROUPS            : "contactgroups",
            CONTACT_TPLS              : "contacttpls",
            CONTACTS                  : "contacts",
            ESCALATIONS               : "escalations",
            MODULATION_BUSINESS_IMPACT: "businessimpactmodulations",
            MODULATION_DATA           : "macromodulations",
            MODULATION_RESULT         : "resultmodulations",
            NOTIFICATION_WAYS         : "notificationways",
            TIME_PERIODS              : "timeperiods",
            SYNCHRONIZER_LINKER       : "sync"
        },
        WORK_AREA_STATUS: {
            PROPOSED : "PROPOSED",
            WORKING  : "WORKING",
            REJECTED : "REJECTED",
            VALIDATED: "VALIDATED"
            
        },
        STATUS          : {
            NEW: "new"
        },
        SLA             : {
            TENDENCY: {
                STAGNANT  : "stagnant",
                DECRASING : "decreasing",
                INCREASING: "increasing"
            },
            STATUS  : {
                OK      : 0,
                WARNING : 1,
                CRITICAL: 2,
                UNKNOWN : 3
            }
        },
        SAVE            : {
            TYPE: {
                LINK: "LINK"
            }
        }
    },
    OVERRIDE_STATUS      : {
        OFF     : "0",
        ON      : "1",
        DISABLED: "2"
    },
    MODE_OVERRIDE_EXCLUDE: {
        NORMAL  : "0",
        OVERRIDE: "1",
        EXCLUDE : "2"
    },
    EXCLUDE_STATUS       : {
        OFF    : "0",
        BY_ID  : "1",
        BY_NAME: "2"
    }
};
var GS                                  = GS || {};
GS.OBJECT                               = GS.OBJECT || {};
GS.OBJECT.CONST                         = GS.OBJECT.CONST || {};
GS.OBJECT.CONST.VALIDATION              = GS.OBJECT.CONST.VALIDATION || {
    FIELD: {
        MESSAGES                : "validation_messages",
        ERRORS                  : "errors",
        CRITICAL                : "critical",
        WARNINGS                : "warnings",
        _KEY_MESSAGE            : "message",
        PATH_VALIDATION_FOR_JSON: "path_validation_for_json"
    },
    PARAM: {
        CURRENT_OBJECT: "current_object"
    }
};
GS.TOOLS.DICT                           = (function ( self ) {
    self.contains                              = function ( dict, key_to_find ) {
        return dict.hasOwnProperty( key_to_find );
    };
    self.assign                                = function ( dest, src ) {
        var _keys = Object.keys( src );
        var _current_key;
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key         = _keys[ i ];
            dest[ _current_key ] = src[ _current_key ];
        }
        return dest;
    };
    self.assigns                               = function ( dest, srcs ) {
        return srcs.reduce( self.assign, dest );
    };
    self.clone                                 = function ( to_clone ) {
        var json = JSON.stringify( to_clone );
        return JSON.parse( json );
    };
    self.deleteEntry                           = function ( dict_object, key_to_delete ) {
        var to_return = dict_object[ key_to_delete ];
        delete dict_object[ key_to_delete ];
        return to_return;
    };
    self.deleteKeyEntries                      = function ( dict_object, key_to_delete ) {
        delete dict_object[ key_to_delete ];
        var _keys = Object.keys( dict_object );
        var _current_key;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            if ( typeof dict_object[ _keys[ i ] ] === "object" ) {
                self.deleteKeyEntries( dict_object[ _keys[ i ] ], key_to_delete );
            }
        }
    };
    self.parseToHTMLParam                      = function ( dict_object ) {
        let to_return = "{";
        var _keys     = Object.keys( dict_object );
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            if ( i ) {
                to_return += ",";
            }
            to_return += "'" + _keys[ i ] + "':'" + dict_object[ _keys[ i ] ] + "'";
        }
        to_return += "}";
        return to_return;
    };
    self.replaceValuesForGivenKeyInDict        = function ( dict_object, key, value_to_replace, new_value ) {
        if ( typeof dict_object !== 'object' || dict_object === null ) {
            return dict_object;
        }
        const _keys = Object.keys( dict_object );
        let _current_key;
        for ( let i = 0, size = _keys.length; i < size; i++ ) {
            _current_key = _keys[ i ];
            if ( dict_object[ _current_key ] ) {
                if ( _current_key === key && dict_object[ _current_key ] === value_to_replace ) {
                    dict_object[ _current_key ] = new_value;
                }
                else if ( typeof dict_object[ _current_key ] === 'object' && dict_object[ _current_key ] !== null ) {
                    self.replaceValuesForGivenKeyInDict( dict_object[ _current_key ], key, value_to_replace, new_value );
                }
            }
        }
        return dict_object;
    };
    self.updateWithDict                        = function ( dict_dest, dict_src ) {
        if ( typeof dict_src !== 'object' || dict_src === null ) {
            return dict_dest;
        }
        const keys = Object.keys( dict_src );
        let current_key;
        for ( let i = 0, size = keys.length; i < size; i++ ) {
            current_key = keys[ i ];
            if ( typeof dict_src[ current_key ] !== 'object' || dict_dest[ current_key ] === undefined ) {
                dict_dest[ current_key ] = dict_src[ current_key ];
            }
            else {
                self.updateWithDict( dict_dest[ current_key ], dict_src[ current_key ] );
            }
        }
        return dict_dest;
    };
    self.isEquals                              = function ( dict_object_1, dict_object_2 ) {
        const keys_1 = Object.keys( dict_object_1 );
        const keys_2 = Object.keys( dict_object_2 );
        
        if ( keys_1.length !== keys_2.length ) {
            return false;
        }
        for ( const key of keys_1 ) {
            if ( !keys_2.includes( key ) ) {
                return false;
            }
            const value_1 = dict_object_1[ key ];
            const value_2 = dict_object_2[ key ];
            if ( typeof value_1 === 'object' && value_1 !== null && typeof value_2 === 'object' && value_2 !== null ) {
                if ( !self.isEquals( value_1, value_2 ) ) {
                    return false;
                }
            }
            else if ( value_1 !== value_2 ) {
                return false;
            }
        }
        
        return true;
    };
    self.parseKeyComposedToKey                 = function ( dict_object, key_composed, value ) {
        const key_composed_split = key_composed.split( "." );
        if ( key_composed_split.length === 1 ) {
            dict_object[ key_composed_split ] = value;
            return;
        }
        dict_object[ key_composed_split[ 0 ] ] = dict_object[ key_composed_split[ 0 ] ] || {};
        self.parseKeyComposedToKey( dict_object[ key_composed_split[ 0 ] ], key_composed_split.slice( 1 ).join( "." ), value );
    };
    self.getObjectWithComposedKey              = function ( dict_object, key_composed ) {
        if ( !key_composed ) {
            return dict_object;
        }
        const key_composed_split = key_composed.split( "." );
        let new_key_composed     = "";
        if ( key_composed_split.length > 1 ) {
            new_key_composed = key_composed_split.slice( 1 ).join( "." );
        }
        return self.getObjectWithComposedKey( dict_object[ key_composed_split[ 0 ] ] || dict_object, new_key_composed );
    };
    self.getObjectWithComposedKey_fromStartKey = function ( dict_object, key_composed, start_key ) {
        const key_composed_split = key_composed.split( "." );
        const new_key_composed   = key_composed_split.slice( key_composed_split.indexOf( start_key ) + 1 ).join( "." );
        return self.getObjectWithComposedKey( dict_object, new_key_composed );
    };
    self.getValueWithComposedKey               = function ( dict_object, key ) {
        const split_keys = key.split( "." );
        if ( split_keys.length === 1 ) {
            return dict_object[ key ];
        }
        return self.getValueWithComposedKey( dict_object[ split_keys[ 0 ] ] || dict_object, split_keys.slice( 1 ).join( "." ) );
    };
    self.getValueWithComposedKey_WithValue     = function ( dict_object, key_composed ) {
        const _keys = Object.keys( dict_object );
        if ( _keys.length === 1 && _keys[ 0 ] === GS.OBJECT.CONST.PARAM.VALUE ) {
            return self.getValueWithComposedKey_WithValue( dict_object[ GS.OBJECT.CONST.PARAM.VALUE ], key_composed );
        }
        const key_composed_split = key_composed.split( "." );
        if ( key_composed_split.length === 1 ) {
            return dict_object[ key_composed ];
        }
        return self.getValueWithComposedKey_WithValue( dict_object[ key_composed_split[ 0 ] ], key_composed_split.slice( 1 ).join( "." ) );
    };
    return self;
})
( GS.TOOLS.DICT || {} );
var WINDOW                              = {};
WINDOW.CONST                            = {
    ELEMENT: {
        GENERIC      : "generic",
        DATAS        : "datas",
        CHECKS       : "checks",
        MONITORING   : "monitoring",
        NOTIFICATIONS: "notifications",
        ADVANCED     : "advanced",
        USER_RIGHTS  : "user-rights",
        AUTHORIZATION: "authorization",
        PROPOSED     : "proposed",
        CHANGES      : "changes"
    },
    CLASS  : {
        WINDOW_GROUP: "gs-window-group",
        WINDOW_TAB  : "gs-window-element"
    },
    ID     : {
        WINDOW_TAB   : "id-gs-window-",
        WINDOW_TAB_V2: "id-gs-window-V2",
        TAB_PANE     : "tab-pane-"
    },
    GROUP  : {
        MASS_CHANGE: "mass-change"
    }
};
var CONTROLLER                          = CONTROLLER || {};
CONTROLLER.CONST                        = CONTROLLER.CONST || {
    PARAM_EVENT            : {
        CONTROLLER_OBJECT: "param_event__controller__object"
    },
    CONTROLLER_NAME_LABEL  : "controller_name",
    MASS_CHANGE            : {
        NAME      : "mass-change",
        TYPE      : {
            PROPERTIES     : 'properties',
            DATAS          : 'datas',
            LOCAL_DATAS    : 'local_datas',
            DFE_DATAS      : 'dfe_datas',
            CHECKS         : 'checks',
            CHECKS_OVERRIDE: 'overrides',
            CHECKS_EXCLUDE : 'excludes'
        },
        GROUP_DATA: {
            ALL  : "___ALL___",
            LOCAL: "___LocalData___"
        }
    },
    PHASE                  : {
        ACTIVE: 1
    },
    SHINKEN_ELEMENT        : {
        NAME: "gs-element"
    },
    LIST_ALL               : {
        NAME: "list-all"
    },
    SOURCES                : {
        NAME: "sources"
    },
    MAIN                   : {
        NAME: "main"
    },
    WEATHER                : {
        NAME: "weather"
    },
    COMMON_UI              : {
        NAME: "common_ui"
    },
    UI_VISUALISATION       : {
        NAME: "ui_visualisation"
    },
    UI_NAV_BAR             : {
        NAME: "nav_bar"
    },
    SHINKEN_VIEW           : {
        NAME: "shinken_view"
    },
    UI_LOGIN               : {
        NAME: "ui_login"
    },
    REPORT_FORM            : {
        NAME: "report_form"
    },
    REPORT_WEB             : {
        NAME: "report_web"
    },
    UI_VIEW_WEATHER_MANAGER: {
        NAME: "ui_view_weather_manager"
    },
    UI_PANELS              : {
        NAME: "ui_panels"
    },
    APPLY                  : {
        NAME: "apply"
    },
    UI_PANELS_VIEW         : {
        NAME: "ui_panels_view"
    },
    FORM_CONTROLLER        : {
        NAME: "form_controller"
    },
    PAGE_CONTROLLER        : {
        NAME: "page_controller"
    },
    SHARE                  : {
        NAME: "share_controller"
    },
    LOGIN                  : {
        NAME: "login_controller"
    }
};
CONTROLLER.DistributorControllerManager = (function ( self ) {
    self.findControllerByEvent = function ( event, controller_name ) {
        var _controller_name = controller_name || self.findControllerName( event );
        return CONTROLLER.DistributorControllerManager.getController( _controller_name );
    };
    self.findControllerName    = function ( event, dom_element ) {
        if ( !event && !dom_element ) {
            return;
        }
        var _target             = dom_element || event.target;
        var _parent_dom_element = SERVICE.DOM.findParentElementWithClass( _target, "gs-parent-event-listener", 500 );
        if ( !_parent_dom_element ) {
            return;
        }
        return _parent_dom_element.dataset.controller;
    };
    self.getController         = function ( _controller ) {
        switch ( _controller ) {
            case CONTROLLER.CONST.MASS_CHANGE.NAME:
                return CONTROLLER.MassChange;
            case CONTROLLER.CONST.LIST_ALL.NAME:
                return CONTROLLER.List;
            case CONTROLLER.CONST.SHINKEN_ELEMENT.NAME:
                return CONTROLLER.ShinkenElement;
            case CONTROLLER.CONST.SOURCES.NAME:
                return CONTROLLER.Source;
            case CONTROLLER.CONST.MAIN.NAME:
                return CONTROLLER.Main;
            case CONTROLLER.CONST.APPLY.NAME:
                return CONTROLLER.Apply;
            case CONTROLLER.CONST.WEATHER.NAME:
                return CONTROLLER.Weather;
            case CONTROLLER.CONST.COMMON_UI.NAME:
                return CONTROLLER.CommonUI;
            case CONTROLLER.CONST.UI_VISUALISATION.NAME:
                return CONTROLLER.UiVisualisation;
            case CONTROLLER.CONST.UI_PANELS.NAME:
                return CONTROLLER.UiPanels;
            case CONTROLLER.CONST.UI_PANELS_VIEW.NAME:
                return CONTROLLER.UiPanelsView;
            case CONTROLLER.CONST.UI_VIEW_WEATHER_MANAGER.NAME:
                return CONTROLLER.UiViewWeatherManager;
            case CONTROLLER.CONST.UI_LOGIN.NAME:
                return CONTROLLER.Login;
            case CONTROLLER.CONST.FORM_CONTROLLER.NAME:
                return CONTROLLER.Form;
            case CONTROLLER.CONST.REPORT_FORM.NAME:
                return CONTROLLER.ReportForm;
            case CONTROLLER.CONST.PAGE_CONTROLLER.NAME:
                return CONTROLLER.PageController;
            case CONTROLLER.CONST.SHARE.NAME:
                return CONTROLLER.Share;
            case "GS-TODO":
                break;
            default:
                console.warn( "NO CONTROLLER FOUND FOR ", "[" + _controller + "]" );
        }
    };
    return self;
})( CONTROLLER.DistributorControllerManager || {} );
var SHINKEN_TOOLTIP                     = (function ( self ) {
    "use strict";
    
    self.PLACEMENT                       = {};
    self.PLACEMENT.LEFT                  = "left";
    self.PLACEMENT.RIGHT                 = "right";
    self.PLACEMENT.TOP                   = "top";
    self.PLACEMENT.TOP_LEFT              = "top-left";
    self.PLACEMENT.TOP_RIGHT             = "top-right";
    self.PLACEMENT.BOTTOM                = "bottom";
    self.PLACEMENT.BOTTOM_LEFT           = "bottom-left";
    self.PLACEMENT.BOTTOM_RIGHT          = "bottom-right";
    self.PLACEMENT.LEFT_BOTTOM           = "left-bottom";
    self.TYPE                            = {};
    self.TYPE.ERROR_MESSAGE_WEATHER      = "gs-error-message-weather";
    self.TYPE.WARNING_MESSAGE_WEATHER    = "gs-warning-message-weather";
    self.TYPE.ERROR                      = "gs-error";
    self.TYPE.ERROR_BORDER               = "gs-error-border";
    self.TYPE.WARNING                    = "gs-warning";
    self.TYPE.WARNING_BORDER             = "gs-warning-border";
    self.TYPE.BEWARE_BORDER              = "gs-beware-border";
    self.TYPE.NORMAL_DISCREET            = "gs-normal-discreet";
    self.TYPE.NORMAL_ON_BLACK            = "gs-normal-on-black";
    self.TYPE.NORMAL_ON_BLACK_ALIGN_LEFT = "gs-normal-on-black-align-left";
    self.TYPE.OFF_WHITE_ON_BLACK         = "gs-off-white-on-black";
    self.TYPE.DISPLAY_TEXT               = "gs-normal-text";
    self.CONDITION                       = {};
    self.CONDITION.SHIFT                 = "gs-shift";
    self.CONDITION.CTRL_SHIFT            = "gs-ctrl-shift";
    self.CONDITION.ELLIPSIS              = "gs-ellipsis";
    self.STYLE                           = {};
    self.STYLE.PADDING_HORIZONTAL        = 8;
    self.STYLE.PADDING_VERTICAL          = 4;
    self.STYLE.MIN_WIDTH_TEXT            = 60;
    self.STYLE.HEIGHT_TEXT_LINE          = 20;
    self.STYLE.ARROW_SIZE                = 5;
    self.DEFAULT                         = {};
    self.DEFAULT.TIMER_POP               = 100;
    self.MAX_TRY_IN_SCREEN               = 10;
    
    self.CONDITION_TYPE = {
        CHILDREN_HAS_CLASS: "children_have_class",
        QUERYSELECTOR     : "queryselector",
        HAS_CLASS         : "has_class",
        HAS_NOT_CLASS     : "has_not_class"
    };
    
    var __container;
    var __text_container;
    var __type;
    var __condition;
    var __arrow;
    var __placement;
    var __placement_origin;
    var __is_forced_placement;
    var __try;
    var __try_container;
    var __innerText;
    var __innerHtml;
    var __width;
    var __height;
    var __timer_pop;
    var __parent_container;
    var __classes_added;
    var __timeout_pop;
    var __interval_update_value;
    var __interval_update_object;
    var __interval_pop_out;
    var __interval_auto_scroll;
    var __timeout_auto_scroll;
    var __pos_top;
    var __pos_left;
    
    self.showTooltipIf = function ( element, condition_type, condition_value ) {
        if ( !condition_value || !condition_type ) {
            return;
        }
        switch ( condition_type ) {
            case self.CONDITION_TYPE.HAS_CLASS:
                if ( !element.classList.contains( condition_value ) ) {
                    return false;
                }
                break;
            case self.CONDITION_TYPE.CHILDREN_HAS_CLASS:
                if ( !element.querySelector( "." + condition_value ) ) {
                    return false;
                }
                break;
            case self.CONDITION_TYPE.QUERYSELECTOR:
                if ( !element.querySelector( condition_value ) ) {
                    return false;
                }
                break;
            case  self.CONDITION_TYPE.HAS_NOT_CLASS :
                var _splitted = condition_value.split( "," );
                for ( var i = 0, _size = _splitted.length; i < _size; i++ ) {
                    if ( element.classList.contains( _splitted[ i ] ) ) {
                        return false;
                    }
                }
                break;
            default:
                console.log( "Type not manage" );
                return false;
        }
        _showTooltip( element );
    };
    
    self.showTooltipChildren = function ( element, css_selector ) {
        self.showTooltip( element.querySelector( css_selector ) );
    };
    self.showTooltip         = function ( element ) {
        if ( !element ) {
            return;
        }
        if ( !__container ) {
            initDomElement();
        }
        if ( !__container ) {
            return;
        }
        var _condition_type = element.getAttribute( "shi-tip-condition-type" );
        if ( _condition_type ) {
            return self.showTooltipIf( element, _condition_type, element.getAttribute( "shi-tip-condition-value" ) );
        }
        _showTooltip( element );
    };
    
    self.hideTooltip   = function () {
        if ( __container ) {
            setActive( false );
            clean();
        }
    };
    self.updateTooltip = function ( element ) {
        if ( !SERVICE.DOM.isVisible( __container ) ) {
            self.showTooltip( element );
            return;
        }
        _showTooltip( element, true );
    };
    
    function _showTooltip ( element, skip_clean ) {
        __try           = 0;
        __try_container = 0;
        if ( !skip_clean ) {
            clean();
        }
        setTimerPop( element );
        updateTooltipValue( element );
        setType( element );
        setIntervalUpdate( element );
        setCondition( element );
        setParentContainer( element );
        if ( __innerText || __innerHtml ) {
            setClass( element );
            getSize();
            setPlacement( element );
            setPosition( element, skip_clean );
            setArrow();
            launchIntervalPopOut( element );
            launchIntervalAutoScroll( element );
        }
        if ( __interval_update_value ) {
            __interval_update_object = setInterval( function () {
                updateTooltipValue( element );
            }, __interval_update_value );
        }
    }
    
    function updateTooltipValue ( element ) {
        setText( element );
        setHTML( element );
    }
    
    function setPlacement ( element ) {
        cleanArrow();
        __is_forced_placement = element.getAttribute( "shi-tip-is-forced-position" );
        __placement           = __is_forced_placement || element.getAttribute( "shi-tip-placement" ) || self.PLACEMENT.TOP;
        __placement_origin    = __placement;
    }
    
    function setActive ( _bool ) {
        if ( _bool ) {
            __container.classList.add( "gs-tooltip-active" );
        }
        else {
            __container.classList.remove( "gs-tooltip-active" );
        }
    }
    
    function setArrow () {
        __container.classList.add( __placement );
    }
    
    function cleanIntervalPopOut () {
        if ( __interval_pop_out ) {
            clearInterval( __interval_pop_out );
            __interval_pop_out = null;
        }
    }
    
    function cleanIntervalAutoScroll () {
        __text_container.scrollTop = -400;
        if ( __timeout_auto_scroll ) {
            clearTimeout( __timeout_auto_scroll );
            __timeout_auto_scroll = null;
        }
        if ( __interval_auto_scroll ) {
            clearInterval( __interval_auto_scroll );
            __interval_auto_scroll = null;
        }
    }
    
    function launchIntervalPopOut ( element ) {
        cleanIntervalPopOut();
        var _data_timer                = new Date().getTime();
        var _selector                  = "[data-gs-tooltip='" + _data_timer + "']";
        element.dataset.shinkenTooltip = _data_timer;
        __interval_pop_out             = setInterval( function () {
            var _elements = document.querySelector( _selector );
            if ( !_elements ) {
                setActive( false );
                cleanIntervalPopOut();
            }
        }, 1000 );
    }
    
    function launchIntervalAutoScroll ( element ) {
        cleanIntervalAutoScroll();
        if ( __text_container.clientHeight < __text_container.scrollHeight ) {
            __timeout_auto_scroll = setTimeout( function () {
                __interval_auto_scroll = setInterval( function () {
                    __text_container.scrollTop = __text_container.scrollTop + 1;
                    if ( __text_container.scrollTop >= __text_container.scrollHeight - __text_container.clientHeight ) {
                        __timeout_auto_scroll = setTimeout( function () {
                            launchIntervalAutoScroll();
                        }, 2000 );
                    }
                }, 100 );
            }, 2000 );
            
        }
        
    }
    
    function cleanArrow () {
        __container.classList.remove( __placement );
    }
    
    function cleanRectWidth ( _rect ) {
        var _to_return = Math.min( _rect.width, 600 );
        if ( __classes_added ) {
            if ( __classes_added.indexOf( "300" ) !== -1 ) { //BGL  A REFAIRE PROPRE
                _to_return = Math.min( _to_return, 300 );
            }
        }
        return _to_return;
    }
    
    function setPosition ( element_to_bind, skip_clean ) {
        if ( !skip_clean ) {
            clean();
        }
        var _rect       = element_to_bind.getBoundingClientRect();
        var _width_rect = cleanRectWidth( _rect );
        if ( !_width_rect ) {
            return; //ELEMENT NOT DISPLAYED
        }
        computePosition( _rect, _width_rect );
        
        if ( isInScreen() ) {
            if ( __try > self.MAX_TRY_IN_SCREEN ) {
                computePosition( _rect, _width_rect );
            }
            __timeout_pop = setTimeout( function () {
                __container.style.top  = __pos_top + "px";
                __container.style.left = __pos_left + "px";
            }, __timer_pop );
        }
        else {
            setPosition( element_to_bind, skip_clean );
        }
    }
    
    function computePosition ( _rect, _width_rect ) {
        switch ( __placement ) {
            case self.PLACEMENT.TOP:
                __pos_top  = (_rect.top - __height + self.STYLE.ARROW_SIZE);
                __pos_left = (_rect.left + _width_rect / 2 - __width / 2);
                break;
            case self.PLACEMENT.TOP_LEFT:
                __pos_top  = (_rect.top - __height + self.STYLE.ARROW_SIZE);
                __pos_left = _rect.left - __width + _width_rect + 2 * self.STYLE.ARROW_SIZE;
                break;
            case self.PLACEMENT.TOP_RIGHT:
                __pos_top  = (_rect.top - __height + self.STYLE.ARROW_SIZE);
                __pos_left = _rect.left - 2 * self.STYLE.ARROW_SIZE;
                break;
            case self.PLACEMENT.LEFT:
                __pos_top  = (_rect.top + _rect.height / 2 - __height / 2);
                __pos_left = (_rect.left - __width);
                break;
            case self.PLACEMENT.RIGHT:
                __pos_top  = (_rect.top + _rect.height / 2 - __height / 2);
                __pos_left = (_rect.left + _width_rect);
                break;
            case self.PLACEMENT.BOTTOM:
                __pos_top  = (_rect.bottom - self.STYLE.ARROW_SIZE);
                __pos_left = (_rect.left + _width_rect / 2 - __width / 2);
                break;
            case self.PLACEMENT.BOTTOM_LEFT:
                __pos_top  = (_rect.bottom - self.STYLE.ARROW_SIZE);
                __pos_left = _rect.left - __width + _width_rect + 2 * self.STYLE.ARROW_SIZE;
                break;
            case self.PLACEMENT.BOTTOM_RIGHT:
                __pos_top  = (_rect.bottom - self.STYLE.ARROW_SIZE);
                __pos_left = _rect.left - 2 * self.STYLE.ARROW_SIZE;
                break;
            case self.PLACEMENT.LEFT_BOTTOM:
                __pos_top  = _rect.top;
                __pos_left = (_rect.left - __width);
                break;
            default:
                console.warn( "[shi-type]", __placement, "NOT MANAGED" );
        }
    }
    
    function isInScreen () {
        var _to_return       = true;
        var _bounding_parent = __parent_container ? __parent_container.getBoundingClientRect() : false;
        var _left_parent     = _bounding_parent ? _bounding_parent.left : -10;
        var _right_parent    = _bounding_parent ? _bounding_parent.right : window.innerWidth - 10;
        var _top_parent      = _bounding_parent ? _bounding_parent.top : -10;
        var _bottom_parent   = _bounding_parent ? _bounding_parent.bottom : window.innerHeight - 10;
        
        if ( __pos_left < _left_parent ) {
            _to_return = false;
            switch ( __placement ) {
                case self.PLACEMENT.TOP:
                    __placement = self.PLACEMENT.TOP_RIGHT;
                    break;
                case self.PLACEMENT.TOP_RIGHT:
                case self.PLACEMENT.LEFT:
                case self.PLACEMENT.LEFT_BOTTOM:
                case self.PLACEMENT.BOTTOM_RIGHT:
                    __placement = self.PLACEMENT.RIGHT;
                    break;
                case self.PLACEMENT.TOP_LEFT:
                    __placement = self.PLACEMENT.TOP;
                    break;
                case self.PLACEMENT.BOTTOM:
                    __placement = self.PLACEMENT.BOTTOM_RIGHT;
                    break;
                case self.PLACEMENT.BOTTOM_LEFT:
                    __placement = self.PLACEMENT.BOTTOM;
                    break;
            }
        }
        else if ( (__pos_left + __width) > _right_parent ) {
            _to_return = false;
            switch ( __placement ) {
                case self.PLACEMENT.TOP:
                    __placement = self.PLACEMENT.TOP_LEFT;
                    break;
                case self.PLACEMENT.TOP_LEFT:
                case self.PLACEMENT.RIGHT:
                case self.PLACEMENT.LEFT_BOTTOM:
                case self.PLACEMENT.BOTTOM_LEFT:
                    __placement = self.PLACEMENT.LEFT;
                    break;
                case self.PLACEMENT.TOP_RIGHT:
                    __placement = self.PLACEMENT.TOP;
                    break;
                case self.PLACEMENT.BOTTOM:
                    __placement = self.PLACEMENT.BOTTOM_LEFT;
                    break;
                case self.PLACEMENT.BOTTOM_RIGHT:
                    __placement = self.PLACEMENT.BOTTOM;
                    break;
            }
        }
        else if ( __pos_top < _top_parent ) {
            _to_return = false;
            switch ( __placement ) {
                case self.PLACEMENT.TOP:
                    __placement = self.PLACEMENT.BOTTOM;
                    break;
                case self.PLACEMENT.LEFT:
                case self.PLACEMENT.LEFT_BOTTOM:
                case self.PLACEMENT.TOP_LEFT:
                    __placement = self.PLACEMENT.LEFT_BOTTOM;
                    break;
                case self.PLACEMENT.TOP_RIGHT:
                    __placement = self.PLACEMENT.RIGHT;
                    break;
                case self.PLACEMENT.RIGHT:
                    __placement = self.PLACEMENT.BOTTOM_RIGHT;
                    break;
            }
        }
        else if ( (__pos_top + __height) > _bottom_parent ) {
            _to_return = false;
            switch ( __placement ) {
                case self.PLACEMENT.BOTTOM:
                    __placement = self.PLACEMENT.TOP;
                    break;
                case self.PLACEMENT.LEFT:
                case self.PLACEMENT.BOTTOM_LEFT:
                    __placement = self.PLACEMENT.TOP_LEFT;
                    break;
                case self.PLACEMENT.LEFT_BOTTOM:
                case self.PLACEMENT.BOTTOM_RIGHT:
                case self.PLACEMENT.RIGHT:
                    __placement = self.PLACEMENT.TOP_RIGHT;
                    break;
            }
        }
        __try++;
        if ( __is_forced_placement || __try > self.MAX_TRY_IN_SCREEN ) { //CASE WHERE THE TOOLTIP HAS NO PLACE TO BE DISPLAYED
            __placement = __placement_origin;
            _to_return  = true;
        }
        return _to_return;
    }
    
    function createDomElement () {
        var _html             = '<table><tr><td></td><td><div class="shi-tip-arrow tooltip-arrow-top" id="tooltip-arrow-top-left"></div></td><td><div class="shi-tip-arrow tooltip-arrow-top" id="tooltip-arrow-top-middle"></div></td><td><div class="shi-tip-arrow tooltip-arrow-top" id="tooltip-arrow-top-right"></div></td><td></td></tr><tr><td><div class="shi-tip-arrow tooltip-arrow-left" id="tooltip-arrow-left-middle"></div></td><td colspan="3"><div class="shi-tip-text"></div></td><td><div class="shi-tip-arrow tooltip-arrow-right" id="tooltip-arrow-right-middle"></div></td></tr><tr><td></td><td><div class="shi-tip-arrow tooltip-arrow-bottom" id="tooltip-arrow-bottom-left"></div></td><td><div class="shi-tip-arrow tooltip-arrow-bottom" id="tooltip-arrow-bottom-middle"></div></td><td><div class="shi-tip-arrow tooltip-arrow-bottom" id="tooltip-arrow-bottom-right"></div></td><td></td></tr></table>';
        __container           = document.createElement( "div" );
        __container.id        = "shi-tip";
        __container.innerHTML = _html;
        document.body.appendChild( __container );
    }
    
    function initDomElement () {
        __container = document.getElementById( "shi-tip" );
        if ( !__container ) {
            createDomElement();
        }
        
        if ( __container ) {
            __text_container = __container.querySelector( ".shi-tip-text" );
            __arrow          = __container.querySelector( ".shi-tip-arrow" );
        }
    }
    
    function setText ( element ) {
        __innerText = element.getAttribute( "shi-tip-text" );
        if ( __innerText ) {
            __text_container.innerHTML = __innerText;
        }
    }
    
    function setHTML ( element ) {
        __innerHtml = element.getAttribute( "shi-tip-html" );
        if ( __innerHtml ) {
            let text                   = replaceAll( __innerHtml, "___", "&" );
            text                       = GS.TOOLS.STRING.unescape_xss( text );
            __text_container.innerHTML = text;
        }
    }
    
    function setType ( element ) {
        __type                   = element.getAttribute( "shi-tip-type" ) || false;
        __container.dataset.type = __type;
    }
    
    function setIntervalUpdate ( element ) {
        __interval_update_value = parseInt( element.getAttribute( "shi-tip-update-interval" ) ) || false;
    }
    
    function setCondition ( element ) {
        __condition = element.getAttribute( "shi-tip-condition" ) || false;
        
        __container.dataset.condition = __condition;
    }
    
    function setTimerPop ( element ) {
        __timer_pop = element.getAttribute( "shi-tip-timer-pop" ) || self.DEFAULT.TIMER_POP;
    }
    
    function setParentContainer ( element ) {
        var _selector_parent_container = element.getAttribute( "shi-tip-parent-container" );
        if ( _selector_parent_container ) {
            __parent_container = findParentElementWithClass( element, _selector_parent_container, 50 );
        }
        else {
            __parent_container = false;
        }
    }
    
    function setClass ( element ) {
        __classes_added = element.getAttribute( "shi-tip-class" );
        
        __container.className = __classes_added;
    }
    
    function getSize () {
        setActive( true );
        var _sizes = __container.getBoundingClientRect();
        __width    = _sizes.width;
        __height   = _sizes.height;
    }
    
    function clean () {
        __container.style.top  = "-5000px";
        __container.style.left = "-5000px";
        clearTimeout( __timeout_pop );
        cleanIntervalPopOut();
        cleanIntervalAutoScroll();
        if ( __interval_update_object ) {
            clearInterval( __interval_update_object );
            __interval_update_object = null;
        }
    }
    
    function replaceAll ( string, target, replacement ) {
        return string.split( target ).join( replacement || "" );
    }
    
    function findParentElementWithClass ( element, class_tag, deepLimit ) {
        if ( deepLimit < 0 ) {
            return null;
        }
        if ( !element ) {
            return null;
        }
        if ( element.classList.contains( class_tag ) ) {
            return element;
        }
        deepLimit--;
        return findParentElementWithClass( element.parentElement, class_tag, deepLimit );
    }
    
    return self;
    
})( {} );
GS.OBJECT.COUNTER_V2_CONST              = {
    TYPE: {
        ERRORS      : "errors",
        WARNINGS    : "warnings",
        PROBLEMS    : "problems",
        TOTAL       : "total",
        FILTERING   : "filtering",
        USER        : "user",
        OVERLAPPING : "overlapping",
        SELECTED    : "selected",
        DELETED     : "deleted",
        WIDGET_TOTAL: "widget_total"
    }
};
GS.OBJECT.CounterV2                     = function ( type ) {
    this.__class_name__ = 'GS.OBJECT.CounterV2';
    this.init( type );
};
GS.OBJECT.CounterV2.prototype           = {
    init                          : function ( type ) {
        this._counter_final       = 0;
        this.label                = "";
        this._is_label_before     = false;
        this._show_if_null        = false;
        this._is_string           = false;
        this.type                 = type;
        this._show_to_parent      = true;
        this._data_target_name    = "number";
        this._counter_parent_list = [];
        this._elements_mapping    = {};
        this.uuid                 = SERVICE.STRING.buildUUID();
        this._targets_dom_element = [];
        this._has_animation       = false;
        this.class                = "gs-counter gs-" + this.type + "-counter";
    },
    getValue                      : function () {
        return this._counter_final;
    },
    getType                       : function () {
        return this.type;
    },
    hasCounter                    : function () {
        return !!this._counter_final;
    },
    setShowIfNull                 : function ( to_set ) {
        this._show_if_null = !!to_set;
    },
    setAnimation                  : function ( to_set ) {
        this._has_animation = !!to_set;
    },
    reset                         : function () {
        this._elements_mapping = {};
        this._counter_final    = 0;
        this.showForParent( true );
        this.updateTargetsDomElement();
        this._updateHTML();
    },
    showForParent                 : function ( show ) {
        this._show_to_parent = !!show;
        this.updateParents();
    },
    updateParents                 : function () {
        if ( this.is_patient ) {
            return;
        }
        for ( let i = 0, _size_i = this._counter_parent_list.length; i < _size_i; i++ ) {
            this._counter_parent_list[ i ].update( this.uuid, this._show_to_parent ? this._counter_final : 0 );
        }
    },
    update                        : function ( name, nb_counter, tooltip, retry_update_html, is_force ) {
        if ( !nb_counter ) {
            delete this._elements_mapping[ name ];
        }
        else {
            if ( !is_force && this._elements_mapping[ name ] === nb_counter ) {
                return;
            }
            this._elements_mapping[ name ] = nb_counter;
            
        }
        if ( tooltip ) {
            this.setTooltipHtml( tooltip );
        }
        
        this._counter_final = this._is_string ? "" : 0;
        this.finalUpdate( retry_update_html );
    },
    askFinalUpdate                : function ( retry_update_html ) {
        if ( this.timeout_final_update ) {
            clearTimeout( this.timeout_final_update );
        }
        this.timeout_final_update = setTimeout( () => {
            this.finalUpdate( retry_update_html );
            this.timeout_final_update = null;
        }, 10 );
    },
    finalUpdate                   : function ( retry_update_html ) {
        let _keys = Object.keys( this._elements_mapping );
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            this._counter_final = this._counter_final + this._elements_mapping[ _keys[ i ] ];
        }
        this.updateTargetsDomElement();
        this.updateParents();
        return this._askUpdateHTML( retry_update_html );
    },
    setParent                     : function ( to_add ) {
        if ( !to_add ) {
            return;
        }
        GS.TOOLS.ARRAY.addElement( this._counter_parent_list, to_add );
        this.updateParents();
    },
    setDataTargetName             : function ( to_set ) {
        this._data_target_name = to_set;
    },
    doActionAfterSetDomElement    : function () {
        if ( !this.dom_element_label ) {
            this.dom_element_label = this.getDomElement().querySelector( ".gs-counter-label" );
        }
    },
    setDomElementLabel            : function ( to_set ) {
        this.dom_element_label = to_set;
        this._updateHTML();
    },
    addTargetsDomElement          : function ( to_set, data_target_name ) {
        if ( data_target_name ) {
            this.setDataTargetName( data_target_name );
        }
        GS.TOOLS.ARRAY.addElement( this._targets_dom_element, to_set );
        this.updateTargetsDomElement();
    },
    updateTargetsDomElement       : function () {
        for ( let i = 0, _size_i = this._targets_dom_element.length; i < _size_i; i++ ) {
            SERVICE.DOM.setDataSet( this._targets_dom_element[ i ], this._data_target_name, this._counter_final || '' );
        }
    },
    setLabel                      : function ( to_set, is_before ) {
        this.label            = SERVICE.DOM.createElement( 'span', { class: 'gs-counter-extra-label' }, to_set ).outerHTML;
        this._is_label_before = !!is_before;
    },
    isString                      : function ( to_set ) {
        this._is_string = to_set;
    },
    _askUpdateHTML                : function ( retry_update_html ) {
        if ( this.timeout_html ) {
            clearTimeout( this.timeout_html );
        }
        this.timeout_html = setTimeout( () => {
            this._updateHTML( retry_update_html );
            this.timeout_html = null;
        }, 50 );
    },
    _updateHTML                   : function ( retry_update_html ) {
        if ( !this.dom_element_label && !this.dom_element ) {
            return;
        }
        let _html       = "";
        let _data_value = "";
        if ( this._counter_final ) {
            _html       = (this.label ? this._is_label_before ? this.label + this._counter_final : this._counter_final + this.label : this._counter_final);
            _data_value = this._counter_final;
        }
        else if ( this._show_if_null ) {
            _html       = "0";
            _data_value = "0";
        }
        if ( this.dom_element_label ) {
            this.dom_element_label.innerHTML = _html;
        }
        if ( this.dom_element ) {
            SERVICE.DOM.setDataSet( this.dom_element, 'number', _data_value );
        }
        if ( this._has_animation ) {
            var _parent_dom_element = SERVICE.DOM.findParentElementWithClass( this.dom_element, 'gs-pulsate-parent', 10 );
            if ( _parent_dom_element ) {
                SERVICE.DOM.askAddClass( _parent_dom_element, 'gs-pulsate', 1600 );
            }
        }
    },
    getObjectParentWithClassNameV2: function ( class_name ) {
        if ( !this.object_parent_v2 ) {
            return null;
        }
        if ( this.object_parent_v2.getObjectClassName() === class_name ) {
            return this.object_parent_v2;
        }
        if ( !this._counter_parent_list.length ) {
            return null;
        }
        var _current;
        for ( var i = 0, _size_i = this._counter_parent_list.length; i < _size_i; i++ ) {
            _current = this._counter_parent_list[ i ].getObjectParentWithClassNameV2( class_name );
            if ( _current ) {
                return _current;
            }
        }
        return null;
    },
    computeHtml                   : function () {
        let _value = this._counter_final;
        if ( !_value ) {
            if ( this._show_if_null ) {
                _value = 0;
            }
            else {
                _value = "";
            }
        }
        
        this.setDomElement( SERVICE.DOM.createElement( "span", {
            class        : this.getClass(),
            "data-number": _value
        } ) );
        this.dom_element_label = SERVICE.DOM.createElement( "span", { class: "gs-counter-label" }, _value );
        SERVICE.DOM.addElementTo( this.dom_element_label, this.dom_element );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CounterV2, GS.OBJECT.GsObjectHtml );
GS.OBJECT.CounterInterfaceV2           = function () {
};
GS.OBJECT.CounterInterfaceV2.prototype = {
    initCounterCommon           : function () {
        this.counters = {};
    },
    initCounter                 : function ( type, name_for_distributor ) {
        this.counters[ type ] = new GS.OBJECT.CounterV2( type );
        if ( name_for_distributor ) {
            MANAGER.__instance_counter_distributorV2.setCounter( name_for_distributor, this.counters[ type ] );
        }
    },
    resetCounters               : function () {
        if ( !this.counters ) {
            return;
        }
        let _keys = Object.keys( this.counters );
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            this.counters[ _keys[ i ] ].reset();
        }
    },
    resetCounterByType          : function ( counter_type ) {
        if ( this.counters[ counter_type ] ) {
            this.counters[ counter_type ].reset();
        }
    },
    resetCountersByType         : function ( array_type ) {
        for ( let i = 0, _size_i = array_type.length; i < _size_i; i++ ) {
            this.resetCounterByType( array_type[ i ] );
        }
    },
    countersShowForParent       : function ( to_set ) {
        let _keys = Object.keys( this.counters );
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            this.counters[ _keys[ i ] ].showForParent( to_set );
        }
    },
    addCountersTargetDomElement : function ( dom_element ) {
        let _keys = Object.keys( this.counters );
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            this.addCounterTargetDomElement( _keys[ i ], dom_element );
        }
    },
    addCounterTargetDomElement  : function ( type, dom_element, data_target_name ) {
        this.counters[ type ].addTargetsDomElement( dom_element, data_target_name || type );
    },
    hasCounter                  : function ( type ) {
        if ( !this.counters[ type ] ) {
            return false;
        }
        return this.counters[ type ].hasCounter();
    },
    hasCounterProblems          : function () {
        return !!(this.hasCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS ) || this.hasCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ));
    },
    setCounterValue             : function ( type, data_name, nb ) {
        if ( !this.counters || !this.counters[ type ] ) {
            this.initCounter( type );
        }
        this.counters[ type ].update( data_name, nb );
    },
    getCounter                  : function ( type ) {
        return this.counters[ type ];
    },
    getCounterValue             : function ( type ) {
        return this.counters[ type ].getValue();
    },
    setCountersParent           : function ( parent ) {
        let _keys = Object.keys( this.counters );
        let _current_key;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            this.setCounterParent( parent, _keys[ i ] );
        }
    },
    setCounterParent            : function ( parent, type ) {
        this.counters[ type ].setParent( parent.getCounter( type ) );
    },
    addCounterComputeHtmlIfExist: function ( type, dom_element_parent ) {
        if ( !this.counters[ type ] ) {
            return;
        }
        this.counters[ type ].computeHtml();
        SERVICE.DOM.addElementTo( this.counters[ type ].getDomElement(), dom_element_parent );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CounterInterfaceV2, GS.OBJECT.GsObjectHtml );
GS.OBJECT.CounterInterfaceWithGsObjectContainer           = function () {
};
GS.OBJECT.CounterInterfaceWithGsObjectContainer.prototype = {
    resetChildCountersByType: function ( array_type ) {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].resetCountersByType( array_type );
        }
    },
    addSpecific             : function ( to_add ) {
        this.add( to_add );
        to_add.setCountersParent( this );
        return to_add;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CounterInterfaceWithGsObjectContainer, GS.OBJECT.CounterInterfaceV2 );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CounterInterfaceWithGsObjectContainer, GS.OBJECT.GsObjectContainerHtml );
GS.OBJECT.CounterInterfaceValidation           = function () {
};
GS.OBJECT.CounterInterfaceValidation.prototype = {
    initCounterCommon       : function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    doActionAfterAddMessages: function () {
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, this.getObjectClassName(), this.messages.getNumberWarnings() );
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, this.getObjectClassName(), this.messages.getNumberErrors() );
    },
    initCounter             : function ( type, name_for_distributor ) {
        this.counters[ type ]                  = new GS.OBJECT.CounterV2( type );
        this.counters[ type ].object_parent_v2 = this;
        if ( name_for_distributor ) {
            MANAGER.__instance_counter_distributorV2.setCounter( name_for_distributor, this.counters[ type ] );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CounterInterfaceValidation, GS.OBJECT.CounterInterfaceV2 );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CounterInterfaceV2, GS.OBJECT.GsObjectHtml );
GS.OBJECT.Counter           = function ( dom_element, show_if_null ) {
    this.__class_name__         = 'GS.OBJECT.Counter';
    this._counter_final         = 0;
    this.label                  = "";
    this._is_label_before       = false;
    this._has_animation         = false;
    this._show_if_null          = !!show_if_null;
    this._is_string             = false;
    this._counter_parent_list   = [];
    this._elements_mapping      = {};
    this.uuid                   = SERVICE.STRING.buildUUID();
    this.timeout_html           = null;
    this.type                   = '';
    this.dom_class_selector     = '';
    this._targets_dom_element   = [];
    this._show_to_parent        = true;
    this.toggle_parent_activity = false;
    this._data_target_name      = "number";
    if ( dom_element ) {
        this.init( dom_element );
    }
};
GS.OBJECT.Counter.prototype = {
    init                  : function ( dom_element, update_with_dom ) {
        this.dom_element = dom_element;
        this.setDiscreet( !this.dom_element );
        if ( this.dom_element ) {
            this.dom_element_label = dom_element.querySelector( '.gs-counter-label' );
            var _name_parent       = this.dom_element.dataset.parent;
            if ( _name_parent ) {
                this._counter_parent_list.push( MANAGER.__instance_counter_distributor.findCounter( _name_parent ) );
            }
            var _label = this.dom_element_label.querySelector( '.gs-counter-extra-label' );
            if ( _label ) {
                this.label            = _label.outerHTML;
                this._is_label_before = !!this.dom_element_label.dataset.isBefore;
            }
            var _is_string = this.dom_element_label.dataset.isString;
            if ( _is_string ) {
                this._is_string = true;
            }
            if ( this.dom_element.dataset.showIfNull ) {
                this._show_if_null = true;
            }
            if ( this.dom_element.dataset.isDiscreet ) {
                this.setDiscreet( true );
            }
            if ( update_with_dom ) {
                this.initValueWithDom();
            }
        }
    },
    initFromParent        : function ( parent, update_with_dom ) {
        this.init( SERVICE.DOM.askFindChildElementWithClass( parent.dom_element, this.getDomSelector(), 'gs-counter-candidate', 30 ), update_with_dom );
    },
    initValueWithDom      : function () {
        if ( !this.dom_element ) {
            return;
        }
        if ( !this.dom_element.dataset.number ) {
            return;
        }
        this.update( "init_with_dom" + this.uuid, parseInt( this.dom_element.dataset.number ) );
    },
    getValue              : function () {
        return this._counter_final;
    },
    has                   : function ( name ) {
        return !!this._elements_mapping[ name ];
    },
    setDiscreet           : function ( to_set ) {
        this.is_discreet = !!to_set;
    },
    hasCounter            : function () {
        return !!this._counter_final;
    },
    setShowIfNull         : function ( to_set ) {
        this._show_if_null = !!to_set;
    },
    setAnimation          : function ( to_set ) {
        this._has_animation = !!to_set;
    },
    reset                 : function () {
        this._elements_mapping = {};
        this._counter_final    = 0;
        this.showForParent( true );
        this.updateTargetDomElement();
        this._updateHTML();
    },
    showForParent         : function ( show ) {
        this._show_to_parent = !!show;
        this.updateParents();
    },
    removeAllParents      : function () {
        this._counter_parent_list = [];
    },
    updateParents         : function () {
        for ( var i = 0, _size_i = this._counter_parent_list.length; i < _size_i; i++ ) {
            this._counter_parent_list[ i ].update( this.uuid, this._show_to_parent ? this._counter_final : 0 );
        }
    },
    update                : function ( name, nb_counter, tooltip, retry_update_html, is_force ) {
        if ( !nb_counter ) {
            delete this._elements_mapping[ name ];
        }
        else {
            if ( !is_force && this._elements_mapping[ name ] === nb_counter ) {
                return;
            }
            this._elements_mapping[ name ] = nb_counter;
            
        }
        if ( tooltip ) {
            this.setTooltipHtml( tooltip );
        }
        
        this._counter_final = this._is_string ? "" : 0;
        var _keys           = Object.keys( this._elements_mapping );
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            this._counter_final = this._counter_final + this._elements_mapping[ _keys[ i ] ];
        }
        this.updateTargetDomElement();
        this.updateParents();
        return this._askUpdateHTML( retry_update_html );
    },
    setParent             : function ( to_add ) {
        if ( !to_add ) {
            return;
        }
        
        this._counter_parent_list.push( to_add );
        this.updateParents();
        this._updateHTML();
    },
    setDataTargetName     : function ( to_set ) {
        this._data_target_name = to_set;
    },
    setDomElementLabel    : function ( to_set ) {
        this.dom_element_label = to_set;
        this.is_discreet       = false;
        this._updateHTML();
    },
    addTargetsDomElement  : function ( to_set, data_target_name ) {
        if ( data_target_name ) {
            this.setDataTargetName( data_target_name );
        }
        this._targets_dom_element.push( to_set );
        this.updateTargetDomElement();
    },
    updateTargetDomElement: function () {
        for ( var i = 0, _size_i = this._targets_dom_element.length; i < _size_i; i++ ) {
            SERVICE.DOM.setDataSet( this._targets_dom_element[ i ], this._data_target_name, this._counter_final || '' );
        }
    },
    setLabel              : function ( to_set, is_before ) {
        this.label            = SERVICE.DOM.createElement( 'span', { class: 'gs-counter-extra-label' }, to_set ).outerHTML;
        this._is_label_before = !!is_before;
    },
    isString              : function ( to_set ) {
        this._is_string = to_set;
    },
    _askUpdateHTML        : function ( retry_update_html ) {
        if ( this.timeout_html ) {
            clearTimeout( this.timeout_html );
        }
        var self          = this;
        this.timeout_html = setTimeout( function () {
            self._updateHTML( retry_update_html );
            self.timeout_html = null;
        }, 50 );
    },
    _updateHTML           : function ( retry_update_html ) {
        if ( this.is_discreet ) {
            return false;
        }
        if ( !this.dom_element_label ) {
            if ( retry_update_html ) {
                var self = this;
                setTimeout( function () {
                    self._updateHTML();
                }, 100 );
            }
            return false;
        }
        
        if ( this._counter_final ) {
            this.dom_element_label.innerHTML = (this.label ? this._is_label_before ? this.label + this._counter_final : this._counter_final + this.label : this._counter_final);
            SERVICE.DOM.setDataSet( this.dom_element, 'number', this._counter_final );
        }
        else if ( this._show_if_null ) {
            this.dom_element_label.innerHTML = '0';
            SERVICE.DOM.setDataSet( this.dom_element, 'number', '0' );
        }
        else {
            this.dom_element_label.innerHTML = '';
            SERVICE.DOM.setDataSet( this.dom_element, 'number', '' );
        }
        var _parent_dom_element;
        if ( this._has_animation ) {
            _parent_dom_element = SERVICE.DOM.findParentElementWithClass( this.dom_element, 'gs-pulsate-parent', 10 );
            if ( _parent_dom_element ) {
                SERVICE.DOM.askAddClass( _parent_dom_element, 'gs-pulsate', 1600 );
            }
        }
        if ( this.toggle_parent_activity ) {
            _parent_dom_element = SERVICE.DOM.findParentElementWithClass( this.dom_element, 'gs-counter-parent', 10 );
            if ( _parent_dom_element ) {
                if ( this._counter_final ) {
                    _parent_dom_element.classList.add( 'gs-active' );
                }
                else {
                    _parent_dom_element.classList.remove( 'gs-active' );
                }
            }
        }
        return true;
    },
    getDomSelector        : function () {
        switch ( this.type ) {
            case "error":
                return ".gs-error-counter";
            case "warning":
                return ".gs-warning-counter";
            case "user_set":
                return ".gs-user-set-counter";
            case "total":
                return ".gs-window-total-counter";
            default:
                return this.dom_class_selector;
        }
    },
    computeHtml           : function () {
        var _value = this._counter_final;
        if ( !_value ) {
            if ( this._show_if_null ) {
                _value = 0;
            }
            else {
                _value = "";
            }
        }
        this.setDomElement( SERVICE.DOM.createElement( "span", {
            class        : "gs-counter gs-" + this.type + "-counter",
            "data-number": _value
        } ) );
        this.dom_element_label = SERVICE.DOM.createElement( "span", { class: "gs-counter-label" }, _value );
        SERVICE.DOM.addElementTo( this.dom_element_label, this.dom_element );
    },
    pulsate               : function () {
        if ( !this.hasCounter() ) {
            return;
        }
        if ( this.object_parent && this.object_parent.dom_element ) {
            SERVICE.DOM.askAddClass( this.object_parent.dom_element, 'gs-pulsate', 1600 );
        }
        else {
            SERVICE.DOM.askAddClass( this.dom_element, 'gs-pulsate', 1600 );
        }
        for ( var i = 0, _size_i = this._counter_parent_list.length; i < _size_i; i++ ) {
            this._counter_parent_list[ i ].pulsate();
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Counter, GS.OBJECT.GsObjectHtml );
GS.OBJECT.CounterInterface           = function () {
};
GS.OBJECT.CounterInterface.prototype = {
    addExtraCounter               : function ( to_add, type, dom_class_selector, data_target_name, dom_element ) {
        to_add.type                 = type;
        to_add.object_parent        = this;
        to_add.container_class_name = this.getObjectClassName();
        if ( dom_class_selector ) {
            to_add.dom_class_selector = "." + dom_class_selector;
        }
        if ( data_target_name ) {
            to_add.setDataTargetName( data_target_name );
        }
        this.getExtraCounters()[ type ] = to_add;
        if ( dom_element ) {
            to_add.addTargetsDomElement( dom_element );
        }
        return to_add;
    },
    initCounters                  : function ( parent, update_with_dom ) {
        this.errors                      = new GS.OBJECT.Counter();
        this.errors.type                 = "error";
        this.errors.container_class_name = this.getObjectClassName();
        this.errors.object_parent        = this;
        
        this.warnings                      = new GS.OBJECT.Counter();
        this.warnings.type                 = "warning";
        this.warnings.container_class_name = this.getObjectClassName();
        
        this.user_set                      = new GS.OBJECT.Counter();
        this.user_set.type                 = "user_set";
        this.user_set.container_class_name = this.getObjectClassName();
        
        this.total                      = new GS.OBJECT.Counter();
        this.total.type                 = "total";
        this.total.container_class_name = this.getObjectClassName();
        this.initCountersDom( update_with_dom );
        if ( parent ) {
            this.setParentCounter( parent );
        }
    },
    initCountersDom               : function ( update_with_dom ) {
        if ( this.dom_element ) {
            this.errors.initFromParent( this, update_with_dom );
            this.warnings.initFromParent( this, update_with_dom );
            this.user_set.initFromParent( this, update_with_dom );
            this.total.initFromParent( this, update_with_dom );
            var _keys = Object.keys( this.getExtraCounters() );
            for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
                this.getExtraCounterByName( _keys[ i ] ).initFromParent( this, update_with_dom );
            }
        }
    },
    resetCounters                 : function () {
        if ( this.warnings ) {
            this.warnings.reset();
        }
        if ( this.errors ) {
            this.errors.reset();
        }
        if ( this.user_set ) {
            this.user_set.reset();
        }
        if ( this.total ) {
            this.total.reset();
        }
        var _keys = Object.keys( this.getExtraCounters() );
        var _current_key;
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            this.getExtraCounterByName( _current_key ).reset();
        }
    },
    hideCountersForParent         : function () {
        this.warnings.showForParent( false );
        this.errors.showForParent( false );
        this.user_set.showForParent( false );
        this.total.showForParent( false );
        
        var _keys = Object.keys( this.getExtraCounters() );
        var _current_key;
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            this.getExtraCounterByName( _current_key ).showForParent( false );
        }
    },
    showCountersForParent         : function () {
        this.warnings.showForParent( true );
        this.errors.showForParent( true );
        this.user_set.showForParent( true );
        this.total.showForParent( true );
        
        var _keys = Object.keys( this.getExtraCounters() );
        var _current_key;
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            this.getExtraCounterByName( _current_key ).showForParent( true );
        }
    },
    removeAllParentCounters       : function () {
        this.warnings.removeAllParents();
        this.errors.removeAllParents();
        this.user_set.removeAllParents();
        this.total.removeAllParents();
        
        var _keys = Object.keys( this.getExtraCounters() );
        var _current_key;
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            this.getExtraCounterByName( _current_key ).removeAllParents();
        }
    },
    setVisibilityCountersForParent: function ( to_set ) {
        to_set ? this.showCountersForParent() : this.hideCountersForParent();
    },
    hasError                      : function () {
        return this.errors.hasCounter();
    },
    hasWarning                    : function () {
        return this.warnings.hasCounter();
    },
    setError                      : function ( data_name, nb ) {
        this.errors.update( data_name, nb );
    },
    setWarning                    : function ( data_name, nb ) {
        this.warnings.update( data_name, nb );
    },
    setUserSet                    : function ( data_name, nb ) {
        this.user_set.update( data_name, nb );
    },
    setTotal                      : function ( data_name, nb ) {
        this.total.update( data_name, nb );
    },
    getCounterError               : function () {
        return this.errors;
    },
    getCounterWarning             : function () {
        return this.warnings;
    },
    getCounterUserSet             : function () {
        return this.user_set;
    },
    getCounterTotal               : function () {
        return this.total;
    },
    getExtraCounters              : function () {
        if ( !this.extraCounters ) {
            this.extraCounters = {};
        }
        return this.extraCounters;
    },
    resetExtraCounter             : function () {
        if ( !this.extraCounters ) {
            return;
        }
        Object.values( this.getExtraCounters() ).forEach( counter => {
            counter.reset();
        } );
    },
    getExtraCounterByName         : function ( name ) {
        return this.getExtraCounters()[ name ];
    },
    resetExtraCounterByName       : function ( name ) {
        this.getExtraCounters()[ name ].reset();
    },
    findExtraCounter              : function ( name ) {
        var _counter = this.getExtraCounterByName( name );
        if ( _counter ) {
            return _counter;
        }
        this.addExtraCounter( new GS.OBJECT.Counter(), name );
        return this.getExtraCounterByName( name );
    },
    setParentCounter              : function ( to_set ) {
        var _parent = to_set || this.parent_container;
        if ( _parent ) {
            this.getCounterError().setParent( _parent.getCounterError() );
            this.getCounterWarning().setParent( _parent.getCounterWarning() );
            this.getCounterUserSet().setParent( _parent.getCounterUserSet() );
            this.getCounterTotal().setParent( _parent.getCounterTotal() );
        }
        else {
            this.getCounterError().setParent();
            this.getCounterWarning().setParent();
            this.getCounterUserSet().setParent();
            this.getCounterTotal().setParent();
        }
        this.setParentExtraCounter( _parent );
    },
    setParentExtraCounter         : function ( parent ) {
        var _keys = Object.keys( this.getExtraCounters() );
        var _current;
        var _current_key;
        var parent_counter;
        var parent_dom_counter;
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            _current     = this.getExtraCounterByName( _current_key );
            if ( parent ) {
                parent_counter                    = parent.findExtraCounter( _current_key );
                parent_counter.dom_class_selector = _current.dom_class_selector;
                parent_dom_counter                = SERVICE.DOM.askFindChildElementWithClass( parent.dom_element, parent_counter.getDomSelector(), 'gs-counter-candidate', 20 );
                if ( parent_dom_counter ) {
                    parent_counter.init( parent_dom_counter, false );
                }
                else if ( parent.dom_element ) {
                    if ( parent_counter._data_target_name === "number" ) {
                        parent_counter.setDataTargetName( _current._data_target_name );
                    }
                    parent_counter.addTargetsDomElement( parent.dom_element );
                }
                _current.setParent( parent_counter );
                parent.setParentCounter();
            }
            else {
                _current.setParent();
            }
        }
    },
    computeCountersHtml           : function () {
        this.warnings.computeHtml();
        this.errors.computeHtml();
        this.user_set.computeHtml();
        this.total.computeHtml();
        var _keys = Object.keys( this.getExtraCounters() );
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            this.getExtraCounterByName( _keys[ i ] ).computeHtml();
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CounterInterface, GS.OBJECT.GsObject );
GS.TOOLS.ARRAY                           = (function ( self ) {
    "use strict";
    
    self.cleanEmpty                      = function ( array ) {
        const toReturn = [];
        for ( let i = 0, _size_i = array.length; i < _size_i; i++ ) {
            if ( array[ i ] === null || array[ i ] === undefined ) {
                continue;
            }
            toReturn.push( array[ i ] );
        }
        return toReturn;
    };
    self.concat                          = function ( array_1, array_2 ) {
        return array_1.concat( array_2 );
    };
    self.concatUnique                    = function ( array_1, array_2, key_for_unique ) {
        const toReturn = [];
        let _size      = array_1.length;
        for ( let i = 0; i < _size; i++ ) {
            toReturn[ i ] = array_1[ i ];
        }
        _size = array_2.length;
        for ( let i = 0; i < _size; i++ ) {
            if ( !key_for_unique ) {
                self.addElement( toReturn, array_2[ i ] );
            }
            else if ( !self.containsElementWith( toReturn, array_2[ i ][ key_for_unique ], key_for_unique ) ) {
                toReturn.push( array_2[ i ] );
            }
        }
        return toReturn;
    };
    self.concatUniqueIfNotPresentIn      = function ( array_1, array_2, array_3 ) {
        const toReturn = [];
        let _size      = array_1.length;
        for ( let i = 0; i < _size; i++ ) {
            if ( !self.contains( array_3, array_1[ i ] ) ) {
                toReturn[ i ] = array_1[ i ];
            }
        }
        _size = array_2.length;
        for ( let i = 0; i < _size; i++ ) {
            if ( !self.contains( array_3, array_2[ i ] ) ) {
                self.addElement( toReturn, array_2[ i ] );
            }
        }
        return toReturn;
    };
    self.insert                          = function ( array, element_to_insert, index ) {
        index = index || 0;
        array.splice( index, 0, element_to_insert );
    };
    self.sortNumber                      = function ( array ) {
        if ( !array ) {
            return array;
        }
        return array.sort( function ( a, b ) {
            return a - b;
        } );
    };
    self.sortArray                       = function ( array, comparator_value, first_index_to_sort, reverse ) {
        if ( reverse === undefined ) {
            reverse = false;
        }
        
        if ( !array ) {
            return array;
        }
        if ( !comparator_value ) {
            return array.sort();
        }
        const size    = array.length;
        let fix_array = [];
        let to_sort   = array;
        if ( first_index_to_sort ) {
            fix_array = array.slice( 0, first_index_to_sort );
            to_sort   = array.slice( first_index_to_sort, size );
        }
        to_sort.sort( function ( a, b ) {
            if ( a[ comparator_value ] < b[ comparator_value ] ) {
                return reverse ? 1 : -1;
            }
            else if ( a[ comparator_value ] > b[ comparator_value ] ) {
                return reverse ? -1 : 1;
            }
            return 0;
        } );
        return fix_array.concat( to_sort );
    };
    self.sortArrayByUsingInteger         = function ( array, reverse ) {
        return array.sort( function ( a, b ) {
            if ( GS.TOOLS.NUMBER.parseStringToPositiveInteger( a ) < GS.TOOLS.NUMBER.parseStringToPositiveInteger( b ) ) {
                return reverse ? 1 : -1;
            }
            else if ( GS.TOOLS.NUMBER.parseStringToPositiveInteger( a ) > GS.TOOLS.NUMBER.parseStringToPositiveInteger( b ) ) {
                return reverse ? -1 : 1;
            }
            return 0;
        } );
    };
    self.sortArrayMultiple               = function ( array, comparator_values ) {
        if ( !array || !comparator_values ) {
            return array;
        }
        const to_sort = array;
        to_sort.sort(
            function ( a, b ) {
                return self._comparator( a, b, comparator_values, 0 );
            }
        );
        return to_sort;
    };
    self.getMapValues                    = function ( map ) {
        if ( !map ) {
            return null;
        }
        return Object.keys( map ).map( function ( e ) {
            return map[ e ];
        } );
    };
    self._comparator                     = function ( a, b, comparators, index ) {
        if ( index >= comparators.length ) {
            return 0;
        }
        if ( a[ comparators[ index ] ] < b[ comparators[ index ] ] ) {
            return -1;
        }
        else if ( a[ comparators[ index ] ] > b[ comparators[ index ] ] ) {
            return 1;
        }
        return self._comparator( a, b, comparators, (index + 1) );
    };
    self.filterWith                      = function ( array, key, value ) {
        if ( !array ) {
            return [];
        }
        if ( !key || !value ) {
            return null;
        }
        const size = array.length;
        if ( !size ) {
            return [];
        }
        const toReturn = [];
        let _current;
        for ( let i = 0; i < size; i++ ) {
            _current = array[ i ];
            if ( _current[ key ] === value ) {
                toReturn.push( _current );
            }
        }
        return toReturn;
    };
    self.filterWithDeeply                = function ( array, keys, value ) {
        if ( !array || !keys || !value ) {
            return null;
        }
        const size = array.length;
        if ( !size ) {
            return null;
        }
        const _to_return = [];
        let _current;
        for ( let i = 0; i < size; i++ ) {
            _current = array[ i ];
            if ( self.findValueDeeply( _current, keys ) === value ) {
                _to_return.push( _current );
            }
        }
        return _to_return;
    };
    self.findValueDeeply                 = function ( dict, keys ) {
        if ( !dict || !keys ) {
            return null;
        }
        const _size = keys.length;
        if ( _size < 1 ) {
            return null;
        }
        const _to_return = dict[ keys[ 0 ] ];
        if ( _size === 1 ) {
            return _to_return;
        }
        return self.findValueDeeply( _to_return, GS.TOOLS.ARRAY.clone( keys ).splice( -1, 1 ) );
    };
    self.findFirstElementWith            = function ( array, key, value ) {
        if ( !array || !key || typeof value === 'undefined' ) {
            return null;
        }
        const size = array.length;
        if ( !size ) {
            return null;
        }
        let _current;
        for ( let i = 0; i < size; i++ ) {
            _current = array[ i ];
            if ( _current[ key ] === value ) {
                return _current;
            }
        }
        return null;
    };
    self.findFirstIndexWith              = function ( array, key, value ) {
        if ( !array || !key || typeof value === 'undefined' ) {
            return null;
        }
        const size = array.length;
        if ( !size ) {
            return null;
        }
        let _current;
        for ( let i = 0; i < size; i++ ) {
            _current = array[ i ];
            if ( _current[ key ] === value ) {
                return i;
            }
        }
        return -1;
    };
    self.getLengthWith                   = function ( array, key, value ) {
        const _filtered = self.filterWith( array, key, value );
        if ( !_filtered ) {
            return 0;
        }
        return _filtered.length;
    };
    self.extractKey                      = function ( array, key, ignoreEmpty ) {
        if ( !array || !key ) {
            return null;
        }
        const toReturn = [];
        const size     = array.length;
        if ( !size ) {
            return toReturn;
        }
        let _current;
        for ( let i = 0; i < size; i++ ) {
            _current = array[ i ];
            if ( !_current && !ignoreEmpty ) {
                toReturn[ i ] = null;
            }
            else {
                if ( _current[ key ] || !ignoreEmpty ) {
                    toReturn[ i ] = _current[ key ];
                }
            }
        }
        return toReturn;
    };
    self.extractKeys                     = function ( array, keys ) {
        const _keys_size = keys.length;
        if ( !array || !_keys_size ) {
            return null;
        }
        const toReturn = [];
        const size     = array.length;
        if ( !size ) {
            return toReturn;
        }
        let _current;
        for ( let i = 0; i < size; i++ ) {
            _current = array[ i ];
            if ( !_current ) {
                toReturn[ i ] = self.initEmptyArray( _keys_size );
            }
            else {
                toReturn[ i ] = [];
                for ( let j = 0; j < _keys_size; j++ ) {
                    toReturn[ i ].push( _current[ keys[ j ] ] );
                }
            }
        }
        return toReturn;
    };
    self.removeDuplicate                 = function ( array ) {
        if ( !array ) {
            return null;
        }
        const toReturn = [];
        const size     = array.length;
        if ( !size ) {
            return toReturn;
        }
        let _current;
        for ( let i = 0; i < size; i++ ) {
            _current = array[ i ];
            if ( toReturn.indexOf( _current ) !== -1 ) {
                continue;
            }
            toReturn.push( _current );
        }
        return toReturn;
    };
    self.removeDuplicateArray            = function ( array ) {
        if ( !array ) {
            return null;
        }
        const toReturn = [];
        const size     = array.length;
        if ( !size ) {
            return toReturn;
        }
        let _current;
        let _to_add;
        for ( let i = 0; i < size; i++ ) {
            _current = array[ i ];
            _to_add  = true;
            for ( let j = 0, _size_j = toReturn.length; j < _size_j; j++ ) {
                if ( self.areEqual( toReturn[ j ], _current ) ) {
                    _to_add = false;
                }
            }
            if ( _to_add ) {
                toReturn.push( _current );
            }
        }
        return toReturn;
    };
    self.hasSameKeyContent               = function ( array1, array2, key ) {
        if ( !key ) {
            return false;
        }
        if ( !array1 && !array2 ) {
            return true;
        }
        if ( !array1 || !array2 ) {
            return false;
        }
        
        const _extract1 = self.extractKey( array1, key );
        const _extract2 = self.extractKey( array2, key );
        if ( _extract1 === null && _extract2 === null ) {
            return true;
        }
        else if ( _extract1 === null || _extract2 === null ) {
            return false;
        }
        
        const _size1 = _extract1.length;
        const _size2 = _extract2.length;
        
        if ( _size1 !== _size2 ) {
            return false;
        }
        
        for ( let i = 0; i < _extract1; i++ ) {
            if ( _extract1[ i ] !== _extract2[ i ] ) {
                return false;
            }
        }
        return true;
    };
    self.getElementFromTo                = function ( array, indexBegin, indexEnd ) {
        return array.slice( indexBegin, indexEnd );
    };
    self.getElement                      = function ( array, key, value_to_find ) {
        const _size = self.getLength( array );
        let _current_element;
        for ( let i = 0; i < _size; i++ ) {
            _current_element = array[ i ];
            if ( _current_element[ key ] === value_to_find ) {
                return _current_element;
            }
        }
    };
    self.reverseArrayClone               = function ( array ) {
        const toReturn = Array.prototype.slice.call( array );
        toReturn.reverse();
        return toReturn;
    };
    self.initEmptyArray                  = function ( length ) {
        const toReturn = [];
        for ( let i = 0; i <= length; i++ ) {
            toReturn.push( null );
        }
        return toReturn;
    };
    self.initConstantArray               = function ( to_add, length ) {
        const toReturn = [];
        for ( let i = 0; i < length; i++ ) {
            toReturn.push( to_add );
        }
        return toReturn;
    };
    self.initIntegerArray                = function ( indexBegin, indexEnd ) {
        const toReturn = [];
        for ( let i = indexBegin; i <= indexEnd; i++ ) {
            toReturn.push( i );
        }
        return toReturn;
    };
    self.initIntegerArrayToString        = function ( indexBegin, indexEnd ) {
        const toReturn = [];
        for ( let i = indexBegin; i <= indexEnd; i++ ) {
            toReturn.push( i + "" );
        }
        return toReturn;
    };
    self.initArrayWithKey                = function ( array, key ) {
        const toReturn = [];
        for ( let i = 0, _size_i = array.length; i < _size_i; i++ ) {
            toReturn.push( array[ i ][ key ] );
        }
        return toReturn;
    };
    self.indexOf                         = function ( array, key, value ) {
        const size = array.length;
        let _current;
        for ( let i = 0; i < size; i++ ) {
            _current = array[ i ][ key ];
            if ( _current && _current === value ) {
                return i;
            }
        }
        return -1;
    };
    self.indexOfCollection               = function ( array, to_find ) {
        const size = array.length;
        for ( let i = 0; i < size; i++ ) {
            if ( array[ i ] === to_find ) {
                return i;
            }
        }
        return -1;
    };
    self.search                          = function ( array, key, value ) {
        const index = self.indexOf( array, key, value );
        if ( index === -1 ) {
            return null;
        }
        return array[ index ];
    };
    self.join                            = function ( array, separator ) {
        if ( Array.isArray( array ) ) {
            return array.join( separator );
        }
        return array.toString();
    };
    self.getLength                       = function ( array ) {
        if ( array ) {
            return array.length;
        }
        return 0;
    };
    self.clone                           = function ( array ) {
        return array.slice( 0 );
    };
    self.swap                            = function ( array, index_1, index_2 ) {
        if ( !array ) {
            return;
        }
        const b          = array[ index_1 ];
        array[ index_1 ] = array[ index_2 ];
        array[ index_2 ] = b;
        return array;
    };
    self.contains                        = function ( array, toSearch ) {
        if ( !array ) {
            return false;
        }
        return array.indexOf( toSearch ) !== -1;
    };
    self.containsAtLeastOne              = function ( array1, array2 ) {
        if ( !array1 || !array2 ) {
            return false;
        }
        for ( let i = 0, _size_i = array2.length; i < _size_i; i++ ) {
            if ( self.contains( array1, array2[ i ] ) ) {
                return true;
            }
        }
        return false;
    };
    self.addElement                      = function ( array, toAdd ) {
        if ( self.contains( array, toAdd ) ) {
            return -1;
        }
        return array.push( toAdd );
    };
    self.removeElement                   = function ( array, toRemove ) {
        const index = array.indexOf( toRemove );
        if ( index === -1 ) {
            return false;
        }
        self.removeElementByIndex( array, index );
        return true;
    };
    self.removeElementByIndex            = function ( array, index ) {
        array.splice( index, 1 );
    };
    self.removeAllElementsFromIndex      = function ( array, index ) {
        array.splice( index );
    };
    self.removeXElementsFromIndex        = function ( array, index, nb ) {
        array.splice( index, nb );
    };
    self.parseToArray                    = function ( obj, extra_value ) {
        if ( !obj ) {
            return null;
        }
        
        const _keys      = Object.keys( obj );
        const _size      = _keys.length;
        const _to_return = [];
        for ( let i = 0; i < _size; i++ ) {
            _to_return[ i ] = obj[ _keys[ i ] ];
        }
        if ( extra_value ) {
            _to_return.push( extra_value );
        }
        return _to_return;
    };
    self.parseForClipboard               = function ( array ) {
        let _to_return = "";
        for ( let i = 0, _size_i = array.length; i < _size_i; i++ ) {
            for ( let j = 0, _size_j = array[ i ].length; j < _size_j; j++ ) {
                _to_return += array[ i ][ j ] + '\t';
            }
            _to_return += "\r";
        }
        return _to_return;
    };
    self.getNumberOfLineWithConstraint   = function ( array, column_size_array ) {
        let to_return = 1;
        for ( let i = 0, _size_i = column_size_array.length; i < _size_i; i++ ) {
            if ( column_size_array[ i ] ) {
                to_return = Math.max( to_return, Math.ceil( array[ i ].length / column_size_array[ i ] ) );
            }
        }
        return to_return;
    };
    self.parseArrayToTextWithConstraint  = function ( array, column_size_array ) {
        let _to_return = "";
        let nb_lines   = self.getNumberOfLineWithConstraint( array, column_size_array );
        let nb_column  = column_size_array.length;
        for ( let i = 0; i < nb_lines; i++ ) {
            for ( let j = 0; j < nb_column; j++ ) {
                if ( column_size_array[ j ] ) {
                    _to_return += array[ j ].substring( i * column_size_array[ j ], column_size_array[ j ] * (i + 1) ).padEnd( column_size_array[ j ] ) + '\t';
                }
                else if ( i === 0 ) {
                    _to_return += array[ j ] + '\t';
                }
                else {
                    _to_return += "".padEnd( array[ j ].length ) + '\t';
                }
            }
            _to_return += "\r";
        }
        return _to_return;
    };
    self.parseForClipboardText           = function ( array, column_size_array ) {
        let _to_return = "";
        for ( let i = 0, _size_i = array.length; i < _size_i; i++ ) {
            _to_return += self.parseArrayToTextWithConstraint( array[ i ], column_size_array );
        }
        return _to_return;
    };
    self.containsElementWith             = function ( array, toSearch, key ) {
        if ( !array ) {
            return false;
        }
        if ( !key ) {
            return false;
        }
        
        const _size = array.length;
        for ( let i = 0; i < _size; i++ ) {
            if ( array[ i ][ key ] === toSearch ) {
                return true;
            }
        }
        return false;
    };
    self.areEqual                        = function ( array1, array2 ) {
        return JSON.stringify( array1 ) === JSON.stringify( array2 );
    };
    self.getMedianIndex                  = function ( array, round_up ) {
        if ( !array ) {
            return GS.TOOLS.ARRAY.NOT_FOUND;
        }
        return round_up ? Math.ceil( array.length / 2 ) : Math.floor( array.length / 2 );
    };
    self.getFirstPartOf                  = function ( array ) {
        return array.slice( 0, self.getMedianIndex( array ) + 1 );
    };
    self.getLastPartOf                   = function ( array ) {
        return array.slice( self.getMedianIndex( array ), array.length );
    };
    self.minNumber                       = function ( array ) {
        if ( !array ) {
            return null;
        }
        return array.reduce( function ( a, b ) {
            return Math.min( a, b );
        }, array[ 0 ] );
    };
    self.maxNumber                       = function ( array ) {
        if ( !array ) {
            return null;
        }
        return array.reduce( function ( a, b ) {
            return Math.max( a, b );
        }, array[ 0 ] );
    };
    self.medianNumber                    = function ( array ) {
        if ( !array ) {
            return null;
        }
        const sorted = array.slice().sort();
        const half   = Math.floor( array.length / 2 );
        
        if ( array.length % 2 ) {
            return sorted[ half ];
        }
        
        return (sorted[ half - 1 ] + sorted[ half ]) / 2.0;
    };
    self.take                            = function ( arr, n ) {
        return arr.filter( function ( _, i ) {
            return i < n;
        } );
    };
    self.takeLast                        = function ( arr, n ) {
        const _len = arr.length;
        return arr.filter( function ( _, i ) {
            return _len - i <= n;
        } );
    };
    self.searchIndexByDichotomy          = function ( comp_by_index, i_up, i_down ) {
        /*
        * return the index of the bigger element that is smaller or equal to the search element.
        *
        * [i_down, i_up] are search interval
        * comp_by_index, comparing function:
        *       return value > 0 if the value at index i is bigger than the search value
        *       return value < 0 if the value at index i is smaller than the search value
        *       return 0 if the value at index i is equal than the search value
        *  */
        if ( !i_down ) {
            i_down = 0;
        }
        let _i_up   = i_up;
        let _i_down = i_down;
        let _i_cur;
        while ( _i_up > _i_down ) {
            _i_cur = Math.floor( (_i_up + _i_down + 1) / 2 );
            if ( comp_by_index( _i_cur ) > 0 ) {
                if ( _i_up === _i_cur ) {
                    break;
                }
                _i_up = _i_cur;
            }
            else {
                if ( _i_down === _i_cur ) {
                    break;
                }
                _i_down = _i_cur;
            }
        }
        return _i_down;
    };
    self.removeElementFromArrayWithValue = function ( arr, value ) {
        let index = arr.indexOf( value );
        if ( index !== -1 ) {
            arr.splice( index, 1 );
        }
    };
    self.getMissingElements              = function ( array_full, array_with_missing ) {
        let to_return = [];
        for ( let i = 0, _size = array_full.length; i < _size; i++ ) {
            if ( !array_with_missing.includes( array_full[ i ] ) ) {
                to_return.push( array_full[ i ] );
            }
        }
        return to_return;
    };
    return self;
})
( GS.TOOLS.ARRAY || {} );
GS.TOOLS.ARRAY.NOT_FOUND                 = -1;
var DATE_TIME                            = DATE_TIME || {};
DATE_TIME.getTimestampNow                = function () {
    return Date.now();
};
GS.TOOLS.NUMBER                = (function ( self ) {
    self.roundTo                      = function ( number, precision ) {
        if ( !precision ) {
            precision = 0;
        }
        var _number = Number( number );
        return _number.toFixed( precision );
    };
    self.parseFloat                   = function ( number ) {
        if ( typeof number === "string" ) {
            number = number.replace( ',', '.' );
        }
        return parseFloat( number );
    };
    self.percent                      = function ( number ) {
        return self.roundTo( number * 100, 2 );
    };
    self.getRandom                    = function ( min, max ) {
        return Math.floor( Math.random() * (max - min + 1) + min );
    };
    self.percent_no_extem             = function ( number ) {
        var toReturn = self.percent( number );
        if ( toReturn === '100.00' ) {
            toReturn = 100;
            if ( number !== 1 ) //IN ORDER TO NOT BE AT 100% WHEN THE PERCENT IS ROUNDED
            {
                toReturn = 99.99;
            }
        }
        else if ( toReturn === '-100.00' ) {
            toReturn = -100;
        }
        else if ( toReturn === '0.00' ) {
            toReturn = 0;
        }
        return toReturn;
    };
    self.getPathIconSla               = function ( sla_percent, critical_threshold, warning_threshold ) {
        sla_percent        = parseFloat( sla_percent );
        critical_threshold = parseFloat( critical_threshold );
        warning_threshold  = parseFloat( warning_threshold );
        var _path          = "";
        if ( sla_percent < critical_threshold ) {
            _path = "assets/images/widget/sla/storm.svg";
        }
        else if ( sla_percent >= critical_threshold && sla_percent < warning_threshold ) {
            _path = "assets/images/widget/sla/cloud.svg";
        }
        else {
            _path = 'assets/images/widget/sla/sun.svg';
        }
        return _path;
    };
    self.getDateToFormatedNumber      = function ( number_date ) {
        if ( number_date > 9 ) {
            return number_date;
        }
        return "0" + number_date;
    };
    self.getValueInInterval           = function ( value, min, max ) {
        return Math.max( Math.min( value, max ), min );
    };
    self.isNumber                     = function ( value ) {
        return !isNaN( value );
    };
    self.isInteger                    = function ( value ) {
        if ( isNaN( value ) ) {
            return false;
        }
        return parseFloat( value ) === parseInt( value, 10 );
    };
    self.parseStringToPositiveInteger = function ( value ) {
        return parseInt( value.replace( /[^\d]/g, '' ) );
    };
    return self;
})( GS.TOOLS.NUMBER || {} );
var DICTIONARY_COMMON          = "common";
var DICTIONARY_COMMON_UI       = "common_ui";
GS.OBJECT.JSON_EDITOR                        = {
    SHINKEN_JSON_UUID_ANCHOR: "__SHINKEN_JSON_UUID_ANCHOR_ANCHOR__",
    JSON_FORMAT_INFORMATION : "__JSON_FORMAT_INFORMATION__",
    JSON_INDEX_ALREADY_WRITE: "__JSON_INDEX_ALREADY_WRITE__",
    CLASS_ERROR             : "gs-json-error",
    PARAM                   : {
        JSON_OBJECT: "json_object"
    },
    FORMAT_DATA             : {
        OBJECT                   : "object",
        VALUE_ONLY               : "value_only",
        VALUE_AND_DEFAULT        : "value_and_default",
        VALUE_AND_DEFAULT_AND_CFG: "value_and_default_and_cfg",
        VALUE_AND_FORCE_DEFAULT  : "value_and_force_default"
    },
    PARAM_EVENT             : {
        JSON_FORM_OBJECT: "json_form__object"
    }
};
GS.OBJECT.GsObjectJson           = function () {
    this.__class_name__ = 'GS.OBJECT.GsObjectJson';
};
GS.OBJECT.GsObjectJson.prototype = {
    getDataForJson        : function ( format_data__20241115 ) {
        const _to_return  = this.getObjectToJson( format_data__20241115 );
        const _components = this.getChildrenObjectDict();
        
        if ( Array.isArray( _components ) ) {
            _to_return.json_list_content = [];
            for ( let _i = 0, _size_i = _components.length; _i < _size_i; _i++ ) {
                _to_return.json_list_content.push( _components[ _i ].getDataForJson( format_data__20241115 ) );
            }
        }
        else {
            const _keys = Object.keys( _components );
            let _current_key;
            for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
                _current_key = _keys[ i ];
                if ( Array.isArray( _components[ _current_key ] ) ) {
                    _to_return[ _current_key ] = [];
                    for ( let j = 0, _size_j = _components[ _current_key ].length; j < _size_j; j++ ) {
                        _to_return[ _current_key ].push( _components[ _current_key ][ j ].getDataForJson( format_data__20241115 ) );
                    }
                }
                else if ( _components[ _current_key ].__class_name__ === "GS.OBJECT.Param" ) {
                    _to_return[ _current_key ] = _components[ _current_key ].user_value;
                }
                else if ( _components[ _current_key ] ) {
                    _to_return[ _current_key ] = _components[ _current_key ].getDataForJson( format_data__20241115 );
                }
            }
        }
        return _to_return;
    },
    getObjectToJson       : function ( format_data__20241115 ) {
        const _to_return = this._getObjectToJson( format_data__20241115 ) || {};
        if ( this.unknown_property_keys ) {
            for ( let j = 0, _size_j = this.unknown_property_keys.length; j < _size_j; j++ ) {
                _to_return[ this.unknown_property_keys[ j ] ] = this[ this.unknown_property_keys[ j ] ].getObjectToJson( format_data__20241115 );
            }
        }
        if ( this.__class_name__ !== "GS.OBJECT.Param" ) {
            const _valid_own_property = this.getValidOwnProperty().getContent();
            for ( let i = 0, _size = _valid_own_property.length; i < _size; i++ ) {
                if ( _valid_own_property[ i ].is_mandatory && typeof this[ _valid_own_property[ i ].key ] === 'undefined' ) {
                    _to_return[ _valid_own_property[ i ].key ] = "";
                }
            }
        }
        
        if ( this._json_anchor && !format_data__20241115 ) {
            _to_return[ GS.OBJECT.JSON_EDITOR.SHINKEN_JSON_UUID_ANCHOR ] = this._json_anchor;
        }
        const _information = this.addJSONInformation( format_data__20241115 );
        if ( _information ) {
            _to_return[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ] = _information;
        }
        return _to_return;
    },
    addJSONInformation    : function ( format_data__20241115 ) {
        let _to_return = null;
        if ( this.messages && this.messages.hasStatus() ) {
            _to_return = this.messages._getObjectToJson( format_data__20241115 );
        }
        return _to_return;
    },
    _getObjectToJson      : function ( format_data__20241115 ) {
        return {};
    },
    addJsonAnchor         : function ( uuid_anchor ) {
        this._json_anchor = this._json_anchor || [];
        this._json_anchor.push( uuid_anchor );
    },
    initJsonDomElement    : function ( css_selector, dom_element ) {
        if ( this.dom_element__json ) {
            return;
        }
        dom_element            = dom_element || document;
        this.dom_element__json = dom_element.querySelector( css_selector );
    },
    setJsonDomElement     : function ( to_set ) {
        this.dom_element__json = to_set;
    },
    getJsonDomElement     : function () {
        return this.dom_element__json;
    },
    setJsonDomElementValue: function ( to_set ) {
        if ( !this.dom_element__json ) {
            return;
        }
        if ( to_set === this.getValue() && this.getUserValue() === this.default_value ) {
            return;
        }
        this.dom_element__json.innerHTML = to_set === this.default_value ? '"' + to_set + '"' : to_set;
        SERVICE.DOM.addOrRemoveClasses( this.dom_element__json, to_set !== this.getUserInitialValue(), "gs-modified" );
        this.updateDefaultValueHtml();
    },
    updateDefaultValueHtml: function () {
        const _default_value_doms = this.dom_element__json.parentElement.querySelectorAll( "[data-dft-val]" );
        for ( let i = 0, _size_i = _default_value_doms.length; i < _size_i; i++ ) {
            SERVICE.DOM.addOrRemoveClasses( _default_value_doms[ i ], _default_value_doms[ i ].innerText === '"' + _default_value_doms[ i ].dataset.dftVal + '"', "X" );
        }
    },
    linkJsonDomElement    : function ( property_list ) {
        this.initJsonDomElement( "#id-gs-output-json [data-json-uuid-part='" + this.getUUID() + "']" );
        if ( property_list ) {
            for ( let i = 0, _size_i = property_list.length; i < _size_i; i++ ) {
                this[ property_list[ i ] ].initJsonDomElement( '.sk-json-edit-val[data-key="' + property_list[ i ] + '"]', this.dom_element__json );
            }
        }
    },
    updateJsonIfNeeded    : function ( params ) {
        if ( params && params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] ) {
            this.linkJsonDomElement();
            let json_editor = this.getJsonEditorInstance( null, this.getDataForJson(), SHINKEN_PAGE.CONST.DEFAULT_VALUE );
            SERVICE.DOM.replaceElement( this.dom_element__json, json_editor.content.firstChild );
            this.dom_element__json = null;
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.GsObjectJson, GS.OBJECT.GsObject );
COMPONENT.Interface           = function () {
};
COMPONENT.Interface.prototype = {
    initInterface     : function () {
        this.url_param_key = this.dom_element.dataset.urlParamKey;
    },
    doExtraAction     : function () {
        if ( this.url_param_key ) {
            this.updateUrlWithValue();
        }
    },
    updateUrlWithValue: function () {
    },
    setTooltipByState : function ( state, text_tooltip ) {
        this.tooltip_text          = this.tooltip_text || {};
        this.tooltip_text[ state ] = text_tooltip;
    },
    getTooltipByState : function () {
        if ( !this.tooltip_text ) {
            return;
        }
        return this.tooltip_text[ this.state ] || "";
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.Interface, GS.OBJECT.CounterInterface );
COMPONENT.Interface_V3           = function () {
};
COMPONENT.Interface_V3.prototype = {
    initInterface     : function () {
        this.url_param_key = this.dom_element.dataset.urlParamKey;
    },
    doExtraAction     : function () {
        if ( this.url_param_key ) {
            this.updateUrlWithValue();
        }
    },
    updateUrlWithValue: function () {
    },
    setTooltipByState : function ( state, text_tooltip ) {
        this.tooltip_text          = this.tooltip_text || {};
        this.tooltip_text[ state ] = text_tooltip;
    },
    getTooltipByState : function () {
        if ( !this.tooltip_text ) {
            return;
        }
        return this.tooltip_text[ this.state ] || "";
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.Interface_V3, GS.OBJECT.CounterInterfaceV2 );
GS.OBJECT.DoActionsAfter           = function () {
    this.init();
};
GS.OBJECT.DoActionsAfter.prototype = {
    init         : function () {
        this.initContents();
    },
    doActionAfter: function ( to_test ) {
        var _current;
        for ( let i = this.getSize() - 1; i >= 0; i-- ) {
            _current = this.getContent( i );
            if ( _current.doActionAfter( to_test ) ) {
                this.removeContentByIndex( i );
            }
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.DoActionsAfter, GS.OBJECT.GsObjectContainer );
GS.OBJECT.DoActionAfter           = function ( parent_object, to_test, event_name, param_1, param_2, param_3 ) {
    this.init( parent_object, to_test, event_name, param_1, param_2, param_3 );
};
GS.OBJECT.DoActionAfter.prototype = {
    init         : function ( parent_object, to_test, event_name, param_1, param_2, param_3 ) {
        this.uuid          = SERVICE.STRING.buildUUID();
        this.parent_object = parent_object;
        this.to_test       = to_test;
        this.event_name    = event_name;
        this.param_1       = param_1;
        this.param_2       = param_2;
        this.param_3       = param_3;
    },
    doActionAfter: function ( to_test ) {
        if ( this.to_test !== to_test ) {
            return false;
        }
        this.parent_object.doActionAfter( this.event_name, this.param_1, this.param_2, this.param_3 );
        return true;
    },
    getUUID      : function ( to_test ) {
        return this.uuid;
    },
    remove       : function () {
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.DoActionAfter, GS.OBJECT.GsObject );
GS.OBJECT.CONST.PHASE                  = {
    RUNNING                 : 0,
    REFRESHING              : 1,
    INIT                    : 2,
    EDITING                 : 3,
    EDITING_TO_STRING       : "EDITING",
    SAVING                  : 4,
    WAITING_FOR_START_IMPORT: 5,
    WAITING_FOR_IMPORT      : 6,
    WAITING_FOR_MERGE       : 7,
    WAITING_FOR_UPDATE      : 8,
    READY                   : "READY",
    WAITING_FOR_READY       : 10,
    STOPPING                : "STOPPING",
    SLEEPING                : "SLEEPING",
    RUNNING_TO_STRING       : "RUNNING",
    STARTING                : 12,
    STUCK                   : 13,
    HIDDEN                  : 14,
    HIDDEN_TO_STRING        : "HIDDEN_TO_STRING",
    ASKING_ENTER_PREVIEWING : 15,
    PREVIEWING              : 16,
    ASKING_ENTER_EDITING    : 17,
    ASKING_SHOW_FORM        : 171,
    ASK_FOR_REFRESH         : 18,
    RUNNING_OK              : 19,
    RUNNING_OK_WITH_WARNING : 191,
    RUNNING_NOK             : 20,
    SAVING_AFTER_PREVIEWING : 21,
    TO_BE_DELETED           : 22,
    ASK_FOR_SAVING          : 23,
    ASK_FOR_CANCEL          : 24,
    CANCEL                  : 25,
    SAVE_DONE               : 26,
    RUNNING_WITH_WARNING    : 27,
    ASK_FOR_CLOSE           : 28,
    TO_BE_DELETED_FOREVER   : 29,
    TO_BE_RESTORED          : 30,
    DELETED                 : "PHASE_DELETED",
    CREATING                : "CREATING",
    ADDING                  : "ADDING",
    CLONING                 : "CLONING",
    DISCREET_USER           : "DISCREET_USER",
    DISCREET_VIEW           : "DISCREET_VIEW",
    DISCREET_NAVIGATOR      : "DISCREET_NAVIGATOR",
    PUBLISHING              : "PUBLISHING",
    SELECTED                : "SELECTED",
    EDITING_SINGLE_GRID_CELL: "EDITING_SINGLE_GRID_CELL",
    HOVER                   : "HOVER",
    LOADING_DATA            : "LOADING_DATA",
    SETTINGS_FORBIDDEN      : "SETTINGS_FORBIDDEN",
    SETTINGS_FORCED         : "SETTINGS_FORCED",
    SETTINGS_TO_EDIT        : "SETTINGS_TO_EDIT",
    SETTINGS_EDITION_FULL   : "SETTINGS_EDITION_FULL",
    SETTINGS_EDITED         : "SETTINGS_EDITED"
};
GS.OBJECT.CONST.CALLBACK_PHASE_TIMEOUT = 0;
GS.OBJECT.Phase                        = function ( parent_object ) {
    this.previous_phase                 = null;
    this.current_phase                  = GS.OBJECT.CONST.PHASE.INIT;
    this.next_phase                     = null;
    this.parent_object                  = parent_object;
    this.timeout_set_phase_callback     = null;
    this.timeout_phase                  = null;
    this.synchrnonized_phase_object     = [];
    this.action_to_do_on_phase          = new GS.OBJECT.DoActionsAfter();
    this.action_to_do_callback_on_phase = new GS.OBJECT.DoActionsAfter();
};
GS.OBJECT.Phase.prototype              = {
    setPhase                       : function ( to_set ) {
        if ( this.timeout_phase ) {
            clearTimeout( this.timeout_phase );
        }
        this.previous_phase = this.current_phase;
        this.current_phase  = to_set;
        if ( this.dom_element ) {
            this._setPhaseInDomElement();
        }
        this.next_phase = null;
        if ( this.parent_object ) {
            if ( this.timeout_set_phase_callback ) {
                clearTimeout( this.timeout_set_phase_callback );
            }
            this.timeout_set_phase_callback = setTimeout( () => {
                this.parent_object.callbackForPhase();
                this.action_to_do_callback_on_phase.doActionAfter( this.current_phase );
                this.timeout_set_phase_callback = null;
            }, GS.OBJECT.CONST.CALLBACK_PHASE_TIMEOUT );
        }
        if ( this.synchrnonized_phase_object.length ) {
            for ( let i = 0, _size_i = this.synchrnonized_phase_object.length; i < _size_i; i++ ) {
                this.synchrnonized_phase_object[ i ].setPhase( to_set );
            }
        }
        this.action_to_do_on_phase.doActionAfter( this.current_phase );
    },
    _setPhaseInDomElement          : function () {
        if ( this.dom_element_data_name ) {
            SERVICE.DOM.setDataSet( this.dom_element, this.dom_element_data_name + 'CurrentPhase', this.current_phase );
            SERVICE.DOM.setDataSet( this.dom_element, this.dom_element_data_name + 'PreviousPhase', this.previous_phase );
        }
        else {
            SERVICE.DOM.setDataSet( this.dom_element, 'currentPhase', this.current_phase );
            SERVICE.DOM.setDataSet( this.dom_element, 'previousPhase', this.previous_phase );
        }
    },
    setPhaseIfPhase                : function ( to_set, if_is ) {
        if ( !this.isPhase( if_is ) ) {
            return;
        }
        this.setPhase( to_set );
        return true;
    },
    setPhaseWithTimeOut            : function ( to_set, timeout ) {
        if ( !timeout ) {
            timeout = 0;
        }
        this.timeout_phase = setTimeout( () => {
            this.setPhase( to_set );
        }, timeout );
    },
    isPhase                        : function ( to_test ) {
        return this.current_phase === to_test;
    },
    togglePhase                    : function ( phase_1, phase_2 ) {
        if ( this.isPhase( phase_1 ) ) {
            this.setPhase( phase_2 );
        }
        else {
            this.setPhase( phase_1 );
        }
    },
    isPreviousPhase                : function ( to_test ) {
        if ( this.previous_phase === undefined ) {
            return false;
        }
        return this.previous_phase === to_test;
    },
    setParent                      : function ( parent_object ) {
        this.parent_object = parent_object;
    },
    addSynchronizedPhase           : function ( to_add, clean_before ) {
        if ( clean_before ) {
            this.synchrnonized_phase_object = [];
        }
        this.synchrnonized_phase_object.push( to_add );
    },
    haveSamePreviousAndCurrentPhase: function () {
        return this.previous_phase === this.current_phase;
    },
    setDomElement                  : function ( to_set, data_name ) {
        this.dom_element           = to_set;
        this.dom_element_data_name = data_name;
        this._setPhaseInDomElement();
    }
};
GS.OBJECT.PhaseInterface               = function () {
};
GS.OBJECT.PhaseInterface.prototype     = {
    initPhase                          : function ( phase_value, dom_element ) {
        this.phase = new GS.OBJECT.Phase( this );
        if ( dom_element ) {
            this.phase.setDomElement( dom_element );
        }
        if ( phase_value ) {
            this.setPhase( phase_value );
        }
    },
    addSynchronizedPhase               : function ( to_add, clean_before ) {
        this.phase.addSynchronizedPhase( to_add, clean_before );
    },
    isPhase                            : function ( to_test ) {
        return this.phase.isPhase( to_test );
    },
    isInPhase                          : function ( array_to_test ) {
        for ( let i = 0, _size_i = array_to_test.length; i < _size_i; i++ ) {
            if ( this.phase.isPhase( array_to_test[ i ] ) ) {
                return true;
            }
        }
        return false;
    },
    setPhase                           : function ( to_set ) {
        this.phase.setPhase( to_set );
    },
    setPhaseOrPhase                    : function ( boolean, to_set_true, to_set_false ) {
        this.setPhase( boolean ? to_set_true : to_set_false );
    },
    setPhaseIfDifferent                : function ( to_set ) {
        if ( to_set !== this.getCurrentPhase() ) {
            this.phase.setPhase( to_set );
        }
    },
    addDoActionAfterCallBackPhaseIs    : function ( phase_to_test, event_name, param_1, param_2, param_3 ) {
        if ( this.isPhase( phase_to_test ) ) {
            this.doActionAfter( event_name, param_1, param_2, param_3 );
        }
        else {
            this.addDoActionAfterCallBackPhaseBecome( phase_to_test, event_name, param_1, param_2, param_3 );
        }
    },
    addDoActionAfterCallBackPhaseBecome: function ( phase_to_test, event_name, param_1, param_2, param_3 ) {
        this.phase.action_to_do_callback_on_phase.add( new GS.OBJECT.DoActionAfter( this, phase_to_test, event_name, param_1, param_2, param_3 ) );
    },
    togglePhase                        : function ( phase_1, phase_2 ) {
        this.phase.togglePhase( phase_1, phase_2 );
    },
    setPhaseParent                     : function ( to_set ) {
        this.phase.setParent( to_set );
    },
    setPhaseDomElement                 : function ( to_set, data_name ) {
        this.phase.setDomElement( to_set, data_name );
    },
    setPhaseIfPhase                    : function ( to_set, if_is ) {
        return this.phase.setPhaseIfPhase( to_set, if_is );
    },
    setPhaseWithTimeOut                : function ( to_set, timeout ) {
        this.phase.setPhaseWithTimeOut( to_set, timeout );
    },
    getCurrentPhase                    : function () {
        return this.phase.current_phase;
    },
    getPreviousPhase                   : function () {
        return this.phase.previous_phase;
    },
    setPreviousPhaseForced             : function ( to_set ) {
        this.phase.previous_phase = to_set;
    },
    isPreviousPhase                    : function ( to_test ) {
        return this.phase.isPreviousPhase( to_test );
    },
    isPreviousPhaseInPhase             : function ( array_to_test ) {
        for ( let i = 0, _size_i = array_to_test.length; i < _size_i; i++ ) {
            if ( this.phase.isPreviousPhase( array_to_test[ i ] ) ) {
                return true;
            }
        }
        return false;
    },
    callbackForPhase                   : function () {
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.PhaseInterface, GS.OBJECT.GsObject );
GS.HIGHWAY                                           = (function ( self ) {
    "use strict";
    self.goToParentUrl                  = function () {
        var _floors        = location.pathname.split( '/' );
        var _new_path_name = "";
        var _size          = _floors.length;
        for ( var i = 1; i < _size - 1; i++ ) {
            _new_path_name += "/";
            _new_path_name += _floors[ i ];
        }
        switch ( _new_path_name ) {
            case "":
            case "/elements/my_working_area":
            case "/elements/working_area":
            case "/elements":
            case "/analyzers":
            case "/tagger":
            case "/elements/add":
                _new_path_name = "/main";
                break;
            case "/sources":
                _new_path_name = "/main";
                var _params    = this.getParams();
                if ( _params[ 'conf-id' ] || _params[ 'synchronizer-id' ] ) {
                    delete _params[ 'conf-id' ];
                    delete _params[ 'synchronizer-id' ];
                    delete _params[ 'source-name' ];
                    _new_path_name = this.getPathWithoutOrigin() + window.GS.HIGHWAY.buildParamsToUrl( _params );
                }
                break;
            case "/elements/add/working_area":
                _new_path_name = "/elements/working_area/hosts";
                break;
            case "/sources/server-analyzer/discovery":
                _new_path_name = "/sources/server-analyzer?tab=tab-network-scan";
                break;
            case "/sources/discovery/discovery":
                _new_path_name = "/sources/discovery?tab=tab-network-scan";
                break;
            case "/sources/server-analyzer/discovery/add":
                _new_path_name = "/sources/server-analyzer?tab=tab-network-scan";
                break;
            case "/sources/discovery/discovery/add":
                _new_path_name = "/sources/discovery?tab=tab-network-scan";
                break;
        }
        switch ( location.pathname ) {
            case "/elements/add/cluster":
            case "/elements/add/clustertpl":
            case "/elements/add/hosttpl":
            case "/elements/add/hostgroup":
            case "/elements/add/serviceshost":
            case "/elements/add/serviceshosttpl":
            case "/elements/add/servicescluster":
            case "/elements/add/servicesclustertpl":
            case "/elements/add/servicetpl":
            case "/elements/add/contact":
            case "/elements/add/contacttpl":
            case "/elements/add/contactgroup":
            case "/elements/add/escalation":
            case "/elements/add/notificationway":
            case "/elements/add/command":
            case "/elements/add/businessimpactmodulation":
            case "/elements/add/macromodulation":
            case "/elements/add/resultmodulation":
            case "/elements/add/timeperiod":
                _new_path_name = "/elements/" + _floors[ _size - 1 ] + 's';
                break;
        }
        window.location = location.origin + _new_path_name;
    };
    self.goToElementTab                 = function ( tab_name ) {
        var _path     = self.getPath();
        var _params   = self.getParams();
        var _old_name = _params[ 'tab' ];
        if ( _old_name === tab_name ) {
            return;
        }
        _params[ 'tab' ]       = tab_name;
        var _new_params_string = self.buildParamsToUrl( _params );
        self.changeUrl( _path + _new_params_string );
    };
    self.changeUrl                      = function ( new_url ) {
        new_url = new_url || location.pathname;
        window.history.pushState( "object or string", "Title", new_url );
    };
    self.getOrigin                      = function () {
        return location.origin;
    };
    self.getHost                        = function () {
        return location.host;
    };
    self.getHash                        = function () {
        return location.hash;
    };
    self.getHostName                    = function () {
        return location.hostname;
    };
    self.getPath                        = function () {
        return location.origin + this.getPathWithoutOrigin();
    };
    self.getPathFull                    = function () {
        return self.getPath() + self.buildParamsToUrl( self.getParams() );
    };
    self.getPathOrigin                  = function () {
        return location.origin;
    };
    self.getPathWithoutOrigin           = function () {
        return location.pathname;
    };
    self.getPathWithParamsWithoutOrigin = function () {
        return location.pathname + self.buildParamsToUrl( self.getParams() );
    };
    self.buildParamsToUrl               = function ( params ) {
        var _keys = Object.keys( params );
        var _size = _keys.length;
        if ( !_size ) {
            return '';
        }
        var _to_return = COMMUNICATION.QUERY.GET.SEPARATOR.GET_BEGINNER;
        for ( var i = 0; i < _size; i++ ) {
            if ( i ) {
                _to_return += COMMUNICATION.QUERY.GET.SEPARATOR.GET_ADD;
            }
            _to_return += _keys[ i ] + COMMUNICATION.QUERY.GET.SEPARATOR.PARAM_SETTER + params[ _keys[ i ] ];
        }
        return _to_return;
    };
    self.getParams                      = function ( param ) {
        var vars = {};
        window.location.href.replace( location.hash, '' ).replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function ( m, key, value ) { // callback
                vars[ key ] = value !== undefined ? value : '';
            }
        );
        
        if ( param ) {
            return vars[ param ] ? vars[ param ] : null;
        }
        return vars;
    };
    self.is                             = function ( type ) {
        switch ( type ) {
            case COMMUNICATION.PAGE_TYPE.LIST_ALL_ELEMENT: //PATCH BUG 4022 TO REMOVE
                return location.pathname === "/elements/elements";
            case COMMUNICATION.PAGE_TYPE.LIST_WORKING_AREA:
                return location.pathname === "/elements/working_area/hosts" || location.pathname === "/elements/my_working_area/hosts";
        }
    };
    self.getListType                    = function () {
        var _to_return = self.getPath().split( "/" );
        return _to_return[ _to_return.length - 1 ];
    };
    self.getNavigationType              = function ( event ) {
        if ( !event ) {
            return GS.HIGHWAY.CONST.NAVIGATION_TYPE.NORMAL;
        }
        switch ( event.which ) {
            case 1:
                return event.ctrlKey ? GS.HIGHWAY.CONST.NAVIGATION_TYPE.TARGET_BLANK : GS.HIGHWAY.CONST.NAVIGATION_TYPE.NORMAL;
            case 2:
                return GS.HIGHWAY.CONST.NAVIGATION_TYPE.TARGET_BLANK;
        }
        return GS.HIGHWAY.CONST.NAVIGATION_TYPE.NONE;
    };
    self.goTo                           = function ( url, event ) {
        var _navigation_type = self.getNavigationType( event );
        switch ( _navigation_type ) {
            case GS.HIGHWAY.CONST.NAVIGATION_TYPE.TARGET_BLANK:
                return self.goToBlank( url, event );
            case GS.HIGHWAY.CONST.NAVIGATION_TYPE.NORMAL:
                if ( event ) {
                    event.stopPropagation();
                    event.preventDefault();
                }
                window.location = url;
                break;
        }
    };
    self.goToBlank                      = function ( url, event ) {
        if ( event ) {
            event.stopPropagation();
            event.preventDefault();
        }
        window.open( url, '_blank' ).focus();
    };
    self.refreshCurrentPage             = function () {
        location.reload();
    };
    self.removeItemIdFromHistory        = function ( item_id ) {
        var histories = App.HistoryManager.histories();
        for ( var i = histories.length - 1; i >= 0; i-- ) {
            var _previousUrl = histories[ i ];
            if ( GS.TOOLS.STRING.contains( _previousUrl, item_id ) ) {
                histories.splice( i, 1 );
            }
        }
        App.HistoryManager.setHandlers();
    };
    self.setParam                       = function ( param_key, param_value ) {
        var params = self.getParams();
        if ( param_value ) {
            params[ param_key ] = GS.TOOLS.STRING.urlEncode( param_value );
        }
        else {
            delete params[ param_key ];
        }
        self.changeUrl( self.buildParamsToUrl( params ) );
    };
    self.handleResponse                 = function ( status ) {
        switch ( status ) {
            case COMMUNICATION.CODE.UNAUTHORIZED:
                GS.HIGHWAY.goTo( '/user/login?error=' + _( 'login.invalid_user' ) );
                break;
            default:
                break;
        }
    };
    self.isDocumentationOn              = function () {
        return false;
    };
    return self;
})( GS.HIGHWAY || {} );
GS.HIGHWAY.CONST                                     = {
    NAVIGATION_TYPE: {
        TARGET_BLANK: "TARGET_BLANK",
        NORMAL      : "NORMAL",
        NONE        : "NONE"
    }
};
CONTROLLER.CommonUI                 = (function ( self ) {
    self.controller_name = CONTROLLER.CONST.COMMON_UI.NAME;
    self.init            = function () {
    };
    self.doActionAfter   = function ( event_name, params ) {
        switch ( event_name ) {
            case "open_override_specific_display":
                var _doms = document.querySelectorAll( ".js_display_override_difference" );
                for ( let i = 0, _size_i = _doms.length; i < _size_i; i++ ) {
                    if ( i < 5 ) {
                        _doms[ i ].click();
                    }
                    else {
                        setTimeout( function () {
                            _doms[ i ].click();
                        }, i * 200 );
                    }
                }
                break;
            case "click_on_button_V3":
                let _dom_element_parent;
                switch ( params[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case "close_popup_progress_bar":
                        _dom_element_parent = SERVICE.DOM.findParentElementWithClass( event.target, "gs-popup-progress-bar-container", 10 );
                        SERVICE.DOM.setDataSet( _dom_element_parent, 'currentPhase', GS.OBJECT.CONST.PHASE.HIDDEN );
                        break;
                    case "toggle_display_popup_progress_bar_message":
                        _dom_element_parent       = SERVICE.DOM.findParentElementWithClass( event.target, "gs-popup-progress-bar-container", 10 );
                        var _is_message_displayed = _dom_element_parent.dataset.messageDisplayed === "1";
                        SERVICE.DOM.setDataSet( _dom_element_parent, 'messageDisplayed', _is_message_displayed ? "0" : "1" );
                        break;
                }
                break;
        }
    };
    self.clickOnButton   = function ( event, event_name, param ) {
    };
    
    return self;
})
( CONTROLLER.CommonUI || {} );
COMPONENT.BUTTON                    = {
    PARAM: {
        BUTTON_NAME: "button_name"
    }
};
COMPONENT.InterfaceButton           = function () {
};
COMPONENT.InterfaceButton.prototype = {
    init             : function () {
    },
    setState         : function ( to_set ) {
        this.state = to_set;
        if ( !this.dom_element ) {
            return;
        }
        this.resetStateClass();
        switch ( this.state ) {
            case COMPONENT.CONST.BTN_STATE.ON:
                this.dom_element.classList.add( "gs-active" );
                break;
            case COMPONENT.CONST.BTN_STATE.DISABLED:
                this.dom_element.classList.add( "gs-disabled" );
                break;
            case COMPONENT.CONST.BTN_STATE.ENABLED_WITH_ERRORS:
                this.dom_element.classList.add( "gs-enabled-with-errors" );
                break;
        }
        var _tooltip_by_state = this.getTooltipByState();
        if ( _tooltip_by_state ) {
            this.setTooltipHtml( _tooltip_by_state );
        }
    },
    toggleState      : function () {
        switch ( this.state ) {
            case COMPONENT.CONST.BTN_STATE.ON:
                this.setState( COMPONENT.CONST.BTN_STATE.OFF );
                break;
            case COMPONENT.CONST.BTN_STATE.OFF:
                this.setState( COMPONENT.CONST.BTN_STATE.ON );
                break;
        }
    },
    resetStateClass  : function () {
        if ( !this.dom_element ) {
            return;
        }
        this.dom_element.classList.remove( "gs-active" );
        this.dom_element.classList.remove( "gs-disabled" );
        this.dom_element.classList.remove( "gs-enabled-with-errors" );
    },
    getValue         : function () {
        return this.value;
    },
    getUUID          : function () {
        return this.getValue();
    },
    getState         : function () {
        return this.state;
    },
    isOn             : function () {
        return this.state === COMPONENT.CONST.BTN_STATE.ON;
    },
    isChecked        : function () {
        return this.state === COMPONENT.CONST.BTN_STATE.ON;
    },
    setInheritedLabel: function ( to_set ) {
        this.dom_element.querySelector( '.gs-inherited-value' ).innerHTML = to_set;
    },
    removeClass      : function ( to_remove ) {
        this.dom_element.classList.remove( to_remove );
    },
    setTooltipByState: function ( state, text_tooltip ) {
        this.tooltip_text          = this.tooltip_text || {};
        this.tooltip_text[ state ] = text_tooltip;
    },
    getTooltipByState: function () {
        if ( !this.tooltip_text ) {
            return;
        }
        return this.tooltip_text[ this.state ] || "";
    },
    getOnClickEvent  : function () {
        return this.onclick_event;
    },
    setOnClickEvent  : function ( to_set ) {
        this.onclick_event = to_set;
    },
    computeCounters  : function () {
        switch ( this.status ) {
            case COMPONENT.CONST.BTN_STATUS.ERROR:
                this.getCounterError().update( this.uuid, 1 );
                break;
            case COMPONENT.CONST.BTN_STATUS.WARNING:
                this.getCounterWarning().update( this.uuid, 1 );
                break;
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceButton, GS.OBJECT.GsObjectHtml );
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceButton, COMPONENT.Interface );
COMPONENT.InterfaceButton_V3           = function () {
};
COMPONENT.InterfaceButton_V3.prototype = {
    init             : function () {
    },
    setState         : function ( to_set ) {
        this.state = to_set;
        if ( !this.dom_element ) {
            return;
        }
        this.resetStateClass();
        switch ( this.state ) {
            case COMPONENT.CONST.BTN_STATE.ON:
                this.dom_element.classList.add( "gs-active" );
                break;
            case COMPONENT.CONST.BTN_STATE.DISABLED:
                this.dom_element.classList.add( "gs-disabled" );
                break;
            case COMPONENT.CONST.BTN_STATE.ENABLED_WITH_ERRORS:
                this.dom_element.classList.add( "gs-enabled-with-errors" );
                break;
        }
        var _tooltip_by_state = this.getTooltipByState();
        if ( _tooltip_by_state ) {
            this.setTooltipHtml( _tooltip_by_state );
        }
    },
    toggleState      : function () {
        switch ( this.state ) {
            case COMPONENT.CONST.BTN_STATE.ON:
                this.setState( COMPONENT.CONST.BTN_STATE.OFF );
                break;
            case COMPONENT.CONST.BTN_STATE.OFF:
                this.setState( COMPONENT.CONST.BTN_STATE.ON );
                break;
        }
    },
    resetStateClass  : function () {
        if ( !this.dom_element ) {
            return;
        }
        this.dom_element.classList.remove( "gs-active" );
        this.dom_element.classList.remove( "gs-disabled" );
        this.dom_element.classList.remove( "gs-enabled-with-errors" );
    },
    getValue         : function () {
        return this.value;
    },
    getUUID          : function () {
        return this.getValue();
    },
    getState         : function () {
        return this.state;
    },
    isOn             : function () {
        return this.state === COMPONENT.CONST.BTN_STATE.ON;
    },
    setInheritedLabel: function ( to_set ) {
        this.dom_element.querySelector( '.gs-inherited-value' ).innerHTML = to_set;
    },
    removeClass      : function ( to_remove ) {
        this.dom_element.classList.remove( to_remove );
    },
    setTooltipByState: function ( state, text_tooltip ) {
        this.tooltip_text          = this.tooltip_text || {};
        this.tooltip_text[ state ] = text_tooltip;
    },
    getTooltipByState: function () {
        if ( !this.tooltip_text ) {
            return;
        }
        return this.tooltip_text[ this.state ] || "";
    },
    getOnClickEvent  : function () {
        return this.onclick_event;
    },
    setOnClickEvent  : function ( to_set ) {
        this.onclick_event = to_set;
    },
    computeCounters  : function () {
        switch ( this.status ) {
            case COMPONENT.CONST.BTN_STATUS.ERROR:
                this.getCounterError().update( this.uuid, 1 );
                break;
            case COMPONENT.CONST.BTN_STATUS.WARNING:
                this.getCounterWarning().update( this.uuid, 1 );
                break;
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceButton_V3, GS.OBJECT.GsObjectHtml );
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceButton_V3, COMPONENT.Interface_V3 );
COMPONENT.Button           = function ( dom_element, name ) {
    this.__class_name__ = 'COMPONENT.Button';
    this.uuid           = SERVICE.STRING.buildUUID();
    this.state          = COMPONENT.CONST.BTN_STATE.OFF;
    this.status         = COMPONENT.CONST.BTN_STATUS.NONE;
    this.name           = name;
    this.value          = '';
    this.init( dom_element );
};
COMPONENT.Button.prototype = {
    init          : function ( dom_element ) {
        this.dom_element = dom_element;
        if ( this.dom_element ) {
            this.initDomElement();
        }
        else {
            this.state = COMPONENT.CONST.BTN_STATE.DISABLED;
        }
        this._computeState();
    },
    initDomElement: function () {
        this.value = this.dom_element.value;
        if ( this.dom_element.classList.contains( 'gs-error' ) ) {
            this.status = COMPONENT.CONST.BTN_STATUS.ERROR;
        }
        else if ( this.dom_element.classList.contains( 'gs-warning' ) ) {
            this.status = COMPONENT.CONST.BTN_STATUS.WARNING;
        }
    },
    _computeState : function () {
        if ( this.state === COMPONENT.CONST.BTN_STATE.DISABLED ) {
            return;
        }
        if ( this.dom_element.classList.contains( "gs-active" ) ) {
            this.setState( COMPONENT.CONST.BTN_STATE.ON );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.Button, COMPONENT.InterfaceButton );
COMPONENT.ButtonFromData           = function ( event_name, class_to_add, label ) {
    this.__class_name__ = 'COMPONENT.ButtonFromData';
    this.init( event_name, class_to_add, label );
};
COMPONENT.ButtonFromData.prototype = {
    init       : function ( event_name, class_to_add, label ) {
        this.name         = event_name;
        this.label        = label || "";
        this.class_to_add = class_to_add;
        this.state        = COMPONENT.CONST.BTN_STATE.OFF;
    },
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "button", {
            class                  : "gs-label " + this.class_to_add,
            onclick                : "MANAGER.EventManager.clickOnButton(event, '" + this.name + "','" + this.extra_param + "' )",
            "data-visibility-state": this.getVisibilityState()
        }, this.label ) );
        var _tooltip_by_state = this.getTooltipByState();
        if ( _tooltip_by_state ) {
            this.setTooltipHtml( _tooltip_by_state );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.ButtonFromData, COMPONENT.InterfaceButton );
COMPONENT.ButtonFromData_V4 = function ( event_name, label, params_event ) {
    this.__class_name__ = 'COMPONENT.ButtonFromData_V4';
    this.init( event_name, label, params_event );
    
};
COMPONENT.ButtonFromData_V4.prototype = {
    init: function ( event_name, label, params_event ) {
        this.name  = event_name;
        this.label = label;
        this.class = "gs-button gs-button-V4 flex-layout-center-h-v";
        this.addParamForEvents( COMPONENT.BUTTON.PARAM.BUTTON_NAME, this.name );
        if ( params_event ) {
            this.addParamsForEvents( params_event );
        }
    },
    //********************************************  GETTER SETTER  ***********************************************//
    getUUID           : function () {
        return this.name;
    },
    setLabelDomElement: function ( dom_element_label ) {
        SERVICE.DOM.addElementToAfterEmpty( dom_element_label, this.label_dom_element );
    },
    //********************************************  HTML  ***********************************************//
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", {
            class                  : this.getClass(),
            "data-name"            : this.name,
            "data-visibility-state": this.getVisibilityState(),
            ...this.buildDoActionAfterEvent( this.name )
        } ) );
        this.label_dom_element = this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-label" }, this.label ) );
        let _tooltip_by_state  = this.getTooltipByState();
        if ( _tooltip_by_state ) {
            this.setTooltipHtml( _tooltip_by_state );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.ButtonFromData_V4, COMPONENT.InterfaceButton_V3 );

COMPONENT.InterfaceLabel           = function () {
    this.__class_name__ = 'COMPONENT.Label';
    this.init();
};
COMPONENT.InterfaceLabel.prototype = {
    init         : function () {
    },
    setLabel     : function ( to_set ) {
        this.label = to_set;
        if ( this.dom_element_label ) {
            this.dom_element_label.innerHTML = this.label;
        }
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "add_message_validation":
                this.setMessage( param[ PROPERTY.COMMON.PARAM.PROPERTY_MESSAGES ] );
                break;
        }
    },
    getValue     : function () {
        return "";
    },
    hasLabel     : function () {
        return !!this.label;
    },
    updateLabel  : function ( to_set ) {
        this.label = to_set;
        if ( this.dom_element ) {
            this.dom_element.innerHTML = this.label;
        }
    },
    getUUID      : function () {
        return this.label;
    },
    setStatus    : function ( to_set ) {
        this.status = to_set;
        SERVICE.DOM.setDataSet( this.dom_element, 'status', to_set );
    },
    setMessage   : function ( message ) {
        var _status  = COMPONENT.CONST.STATUS.NONE;
        this.message = message;
        if ( message ) {
            _status = message.getStatus();
        }
        var _counter = [0, 0];
        this.setStatus( _status );
        switch ( _status ) {
            case COMPONENT.CONST.STATUS.ERROR:
                this.setTooltipHtml( message.buildMessageGeneric(), SHINKEN_TOOLTIP.TYPE.ERROR_BORDER );
                _counter[ 0 ] = 1;
                break;
            case COMPONENT.CONST.STATUS.WARNING:
                this.setTooltipHtml( message.buildMessageGeneric(), SHINKEN_TOOLTIP.TYPE.WARNING_BORDER );
                _counter[ 1 ] = 1;
                break;
            case COMPONENT.CONST.STATUS.NONE:
                this.setTooltipHtml( message ? message.buildMessageGeneric() : "", "" );
                break;
        }
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, this.uuid, _counter[ 0 ] );
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, this.uuid, _counter[ 1 ] );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceLabel, GS.OBJECT.CounterInterfaceV2 );
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceLabel, GS.OBJECT.CounterInterface );
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceLabel, COMPONENT.Interface );
COMPONENT.Label           = function ( dom_element ) {
    this.init( dom_element );
};
COMPONENT.Label.prototype = {
    init: function ( dom_element ) {
        this.dom_element = dom_element;
        this.label       = dom_element.outerText;
    }
    
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.Label, COMPONENT.InterfaceLabel );
COMPONENT.LabelFromData           = function ( label ) {
    this.__class_name__ = 'COMPONENT.LabelFromData';
    this.initSpecific( label );
};
COMPONENT.LabelFromData.prototype = {
    initSpecific  : function ( label ) {
        this.label = label;
        this.initCounterCommon();
    },
    setValueFromJs: function ( to_set ) {
        this.label = to_set;
        if ( this.dom_element_label ) {
            this.dom_element_label.innerHTML = to_set;
        }
    },
    getValue      : function () {
        return this.label;
    },
    computeHtml   : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-label-container " + this.getClass() } ) );
        this.dom_element_label = this.addDomElement( SERVICE.DOM.createElement( "span", { class: "gs-label" }, this.label ), this.dom_element );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.LabelFromData, COMPONENT.InterfaceLabel );
GS.TOOLS.CLASS.addPrototype( COMPONENT.LabelFromData, GS.OBJECT.GsObjectHtml );
GS.OBJECT.CONST.LAST_MODIFICATION                     = {
    INITIAL_STEP: -1,
    ACTION      : {
        CREATE               : "CREATE",
        ADD_CHILD            : "ADD_CHILD",
        REMOVE_CHILD         : "REMOVE_CHILD",
        DELETE               : "DELETE",
        MOVE                 : "MOVE",
        MESSAGES             : "MESSAGES",
        RESIZE               : "RESIZE",
        CONFIGURE            : "CONFIGURE",
        EDIT_PARAMS          : "EDIT_PARAMS",
        PARAM_MODIFICATION   : "PARAM_MODIFICATION",
        PROPERTY_MODIFICATION: "PROPERTY_MODIFICATION"
    },
    HISTORY     : {
        CREATE                         : "CREATE",
        DELETE                         : "DELETE",
        MOVE                           : "MOVE",
        RESIZE                         : "RESIZE",
        FORM_DEFAULT_VALUE_MODIFICATION: "FORM_DEFAULT_VALUE_MODIFICATION",
        FORM_WIDGET_VALUE_MODIFICATION : "FORM_WIDGET_VALUE_MODIFICATION"
    },
    PARAM       : {
        TYPE_MODIFICATION: "type_modification",
        TYPE             : "last_modification_type",
        OBJECT           : "last_modification_object",
        OBJECT_ELEMENT   : "last_modification_object_element",
        ARRAY_ELEMENT    : "last_modification_array_element",
        NUMBER           : "last_modification_number",
        PARENT_OBJECT    : "last_modification_parent_object",
        PARAM_FOR_EVENT  : "param_for_event"
    }
};
GS.OBJECT.EditableElementInterface                    = function () {
    throw new TypeError( "Interface EditableElementInterface cant be constructed." );
};
GS.OBJECT.EditableElementInterface.prototype          = {
    undoLastModification          : function ( modification_data ) {
        throw new TypeError( "Function undoLastModification from EditableElementInterface have to be surcharged" );
    },
    redoLastModification          : function ( modification_data ) {
        throw new TypeError( "Function redoLastModification from EditableElementInterface have to be surcharged" );
    },
    getLastModificationElement    : function () {
        throw new TypeError( "Function getLastModificationElement from EditableElementInterface have to be surcharged" );
    },
    setPreviousModificationElement: function ( params ) {
        this.previous_modication_data = this.getDataForLastModification( params );
    }
};
GS.OBJECT.LastModificationElement           = function ( type_modification, element_modified, previous, next ) {
    this.init( type_modification, element_modified, previous, next );
};
GS.OBJECT.LastModificationElement.prototype = {
    init               : function ( type_modification, element_modified, previous, next ) {
        this.uuid              = SERVICE.STRING.buildUUID();
        this.type_modification = type_modification;
        this.addParamsForEvents( element_modified.getParamForEvents() );
        this.setPrevious( previous );
        this.setNext( next );
    },
    getTypeModification: function () {
        return this.type_modification;
    },
    isValid            : function () {
        if ( this.previous && this.next ) {
            return !GS.TOOLS.DICT.isEquals( this.previous, this.next );
        }
        return this.previous !== this.next;
    },
    setPrevious        : function ( previous ) {
        this.previous = previous;
    },
    setNext            : function ( next ) {
        this.next = next;
    },
    setParam           : function ( param_name, to_set ) {
        this[ param_name ] = to_set;
    },
    getParam           : function ( param_name ) {
        return this[ param_name ];
    },
    getPrevious        : function () {
        return this.previous;
    },
    getNext            : function () {
        return this.next;
    },
    getNextOrPrevious  : function ( event_name ) {
        switch ( event_name ) {
            case "undo_last_modification":
                return this.getPrevious();
            case "redo_last_modification":
                return this.getNext();
        }
    },
    getUUID            : function () {
        return this.uuid;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.LastModificationElement, GS.OBJECT.GsObject );
GS.OBJECT.LastModification           = function () {
    this.init();
};
GS.OBJECT.LastModification.prototype = {
    init                       : function () {
        this.initContents();
        this.setTimestamp();
        
    },
    setTimestamp               : function ( to_set ) {
        this.timestamp = Date.now();
    },
    setExtraParam              : function ( to_set ) {
        this.extra_params = to_set;
    },
    getExtraParam              : function () {
        return this.extra_params;
    },
    setModificationType        : function ( to_set ) {
        this.type_modification = to_set;
    },
    getUUID                    : function () {
        return this.index;
    },
    setIndex                   : function ( index ) {
        this.index = index;
    },
    isValid                    : function () {
        return this.contents.length > 0;
    },
    getAllUuidOfImpactedElement: function () {
        return this.getContents().map( last_modification_element => last_modification_element.getParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ) );
    },
    addSpecific                : function ( last_modification_element ) {
        if ( !last_modification_element.isValid() ) {
            return;
        }
        return this.add( last_modification_element );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.LastModification, GS.OBJECT.GsObjectContainer );
MANAGER.DistributorCounterManagerV2             = function () {
    this.counters = {};
    this.objects  = {};
};
MANAGER.DistributorCounterManagerV2.prototype   = {
    createCounter: function ( name, type ) {
        let _to_return = new GS.OBJECT.CounterV2( type );
        this.setCounter( name, _to_return );
        return _to_return;
    },
    deleteCounter: function ( name ) {
        delete this.counters[ name ];
    },
    deleteObject : function ( name ) {
        delete this.objects[ name ];
    },
    
    findCounter: function ( name, type ) {
        if ( !name ) {
            return;
        }
        let _to_return = this.getCounter( name );
        if ( !_to_return ) {
            _to_return = this.createCounter( name, type );
        }
        return _to_return;
    },
    findObject : function ( name ) {
        if ( !name ) {
            return;
        }
        return this.getObject( name );
    },
    
    setCounter      : function ( name, to_set ) {
        this.counters[ name ] = to_set;
    },
    setParentCounter: function ( name_parent, counter_child ) {
        let _parent = this.getCounter( name_parent );
        if ( _parent ) {
            counter_child.setParent( _parent );
        }
        else {
        }
    },
    setObject       : function ( name, to_set ) {
        this.objects[ name ] = to_set;
    },
    getCounter      : function ( name ) {
        return this.counters[ name ];
    },
    getObject       : function ( name ) {
        return this.objects[ name ];
    },
    reset           : function () {
        this.counters = {};
        this.objects  = {};
    }
};
MANAGER.__instance_counter_distributorV2        = new MANAGER.DistributorCounterManagerV2();
MANAGER.DistributorElementManager               = function () {
    this.elements        = {};
    this.mapping_by_name = {};
};
MANAGER.DistributorElementManager.prototype     = {
    createElement   : function ( data ) {
        var _to_return = new GS.OBJECT.ShinkenElement();
        _to_return.updateData( data );
        this.addElement( _to_return );
        return _to_return;
    },
    findElement     : function ( uuid, data ) {
        if ( !uuid ) {
            return;
        }
        var _to_return = this.getElement( uuid );
        if ( !_to_return ) {
            _to_return = this.createElement( data );
        }
        else {
            _to_return.updateData( data );
        }
        return _to_return;
    },
    getElement      : function ( uuid ) {
        return this.elements[ uuid ];
    },
    addElement      : function ( element ) {
        this.elements[ element.getUUID() ]        = element;
        this.mapping_by_name[ element.getName() ] = element.getUUID();
    },
    getElementByName: function ( name ) {
        return this.elements[ this.mapping_by_name[ name ] ];
    }
};
MANAGER.__instance_element_distributor          = new MANAGER.DistributorElementManager();
MANAGER.DistributorWindowManager                = function () {
    this.windows        = {};
    this.parent_windows = {};
};
MANAGER.DistributorWindowManager.prototype      = {
    createWindow                      : function ( name, is_menu, has_properties ) {
        var _id          = WINDOW.CONST.ID.WINDOW_TAB + name;
        var _dom_element = document.getElementById( _id );
        if ( !_dom_element ) {
            return;
        }
        var _to_return = has_properties ? new WINDOW.ElementWithProperties( name, _dom_element, is_menu ) : new WINDOW.Element( name, _dom_element, is_menu );
        this.setWindow( name, _to_return );
        return _to_return;
    },
    createParentWindow                : function ( name ) {
        var _to_return = new WINDOW.ElementGroup( name );
        this.setParentWindow( name, _to_return );
        return _to_return;
    },
    findWindow                        : function ( name, is_menu, parent_id, has_properties ) {
        if ( !name ) {
            return;
        }
        if ( parent_id ) {
            var _parent = this.findParentWindow( parent_id );
            if ( _parent ) {
                return _parent.getElementByName( name );
            }
        }
        var _to_return = this.getWindow( name );
        if ( !_to_return ) {
            _to_return = this.createWindow( name, is_menu, has_properties );
        }
        return _to_return;
    },
    findParentWindow                  : function ( name ) {
        if ( !name ) {
            return;
        }
        var _to_return = this.getParentWindow( name );
        if ( !_to_return ) {
            _to_return = this.createParentWindow( name );
        }
        return _to_return;
    },
    setWindow                         : function ( name, window ) {
        this.windows[ name ] = window;
    },
    setParentWindow                   : function ( name, parent_window ) {
        this.parent_windows[ name ] = parent_window;
    },
    getWindow                         : function ( name ) {
        return this.windows[ name ];
    },
    clickOnFirstWindowInParentWithName: function ( name ) { //FOR DOCUMENTATION
        var _keys = Object.keys( this.parent_windows );
        this.parent_windows[ _keys[ 0 ] ].clickOnWindow( name );
    },
    getParentWindow                   : function ( name ) {
        return this.parent_windows[ name ];
    },
    reset                             : function () {
        this.windows        = {};
        this.parent_windows = {};
    }
};
MANAGER.__instance_window_distributor           = new MANAGER.DistributorWindowManager();
MANAGER.EventManager                            = {
    last_element_hovered            : null,
    stop_propagation                : false,
    mouse_down_target               : null,
    mouse_on_target                 : null,
    openIframeModal                 : function ( url, id ) {
        if ( !MANAGER.__instance_window_modal_manager ) {
            MANAGER.__instance_window_modal_manager = new MANAGER.WindowModalManager();
        }
        MANAGER.__instance_window_modal_manager.setIframe( url, id );
    },
    closeModal                      : function () {
        if ( MANAGER.__instance_window_modal_manager ) {
            MANAGER.__instance_window_modal_manager.askDoClose();
        }
    },
    closeNotify                     : function ( notify_id ) {
        MANAGER.__instance_notify_manager.close( notify_id );
    },
    clickOnToggleCollapse           : function ( dom_element ) {
        var _parent_dom_element = SERVICE.DOM.findParentElementWithClass( dom_element, "gs-toggle-parent", 25 );
        if ( !_parent_dom_element ) {
            return;
        }
        _parent_dom_element.classList.toggle( "gs-collapsed" );
    },
    logout                          : function () {
        window.location = '/logout';
        sessionStorage.removeItem( "user_id" );
    },
    onFocus                         : function ( dom_element ) {
        var _parent_dom_element = SERVICE.DOM.findParentElementWithClass( dom_element, PROPERTY.CONST.CLASS.SKINKEN_LINE, 25 );
        var parent_name         = _parent_dom_element.dataset.name;
        var _object             = MANAGER.__instance_property_distributor.findElement( parent_name, true );
        _object.onFocus();
    },
    onFocusIn                       : function ( event, event_name ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        if ( !_controller ) {
            console.warn( "[EventManager - onFocusIn]", "Controller not found", event.target );
            return;
        }
        _controller.onFocusIn( event, event_name );
    },
    onFocusOut                      : function ( event ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        _controller.onFocusOut( event );
    },
    stopPropagation                 : function ( event ) {
        if ( event ) {
            event.stopPropagation();
        }
        else {
            this.stop_propagation = true;
            var self              = this;
            setTimeout( function () {
                self.stop_propagation = false;
            }, 50 );
        }
    },
    clickOnRadioBtn                 : function ( event, event_name, param ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        _controller.clickOnRadioBtn( event, event_name, param );
    },
    clickOnButton                   : function ( event, event_name, param ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        if ( !_controller ) {
            console.warn( "[EventManager - clickOnButton]", "Controller not found", event.target );
            return;
        }
        if ( !event_name ) {
            var _parent_dom_element = SERVICE.DOM.findParentElementWithDataSet( event.target, 'name', 50 );
            if ( _parent_dom_element ) {
                event_name = _parent_dom_element.dataset.name;
            }
            else {
                console.warn( "[EventManager - clickOnButton]", "not element with data set 'name' found", event.target );
                return;
            }
        }
        event.stopPropagation();
        _controller.clickOnButton( event, event_name, param );
    },
    onKeyUp                         : function ( event ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        _controller.onKeyUp( event );
    },
    onKeyDown                       : function ( event ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        _controller.onKeyDown( event );
    },
    onPaste                         : function ( event ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        _controller.onPaste( event );
    },
    onDragStart                     : function ( _controller_name, element_name, origin_x, origin_y ) {
        var _controller = CONTROLLER.DistributorControllerManager.getController( _controller_name );
        if ( _controller ) {
            _controller.onDragStart( element_name, origin_x, origin_y );
        }
    },
    onDragMove                      : function ( _controller_name, element_name, delta_x, delta_y ) {
        var _controller = CONTROLLER.DistributorControllerManager.getController( _controller_name );
        if ( _controller ) {
            _controller.onDragMove( element_name, delta_x, delta_y );
        }
    },
    onDragStop                      : function ( _controller_name, element_name ) {
        var _controller = CONTROLLER.DistributorControllerManager.getController( _controller_name );
        if ( _controller ) {
            _controller.onDragStop( element_name );
        }
    },
    onResizeStart                   : function ( _controller_name, element_name, width, height ) {
        var _controller = CONTROLLER.DistributorControllerManager.getController( _controller_name );
        if ( _controller ) {
            _controller.onResizeStart( element_name );
        }
    },
    onResizeMove                    : function ( _controller_name, element_name, width, height ) {
        var _controller = CONTROLLER.DistributorControllerManager.getController( _controller_name );
        if ( _controller ) {
            _controller.onResizeMove( element_name, width, height );
        }
    },
    onResizeStop                    : function ( _controller_name, element_name ) {
        var _controller = CONTROLLER.DistributorControllerManager.getController( _controller_name );
        if ( _controller ) {
            _controller.onResizeStop( element_name );
        }
    },
    onChangeOnInputKey              : function ( event ) {
        var _parent_dom_element = SERVICE.DOM.findParentElementWithClass( event.target, PROPERTY.CONST.CLASS.SKINKEN_LINE, 25 );
        var parent_name         = _parent_dom_element.dataset.name;
        var _object             = MANAGER.__instance_property_distributor.findElement( parent_name, true );
        _object.askComputeKeyAfterChange( event.target );
    },
    clickOnAddNewLocalMacro         : function () {
        return App.Elements.DataTab.addNewData();
    },
    clickOnDeletePropertyBtn        : function ( dom_element ) {
        var _parent_dom_element = SERVICE.DOM.findParentElementWithClass( dom_element, PROPERTY.CONST.CLASS.SKINKEN_LINE, 25 );
        var _name               = _parent_dom_element.dataset.name;
        var _object             = MANAGER.__instance_property_distributor.findElement( _name );
        _object.delete();
    },
    clickDataCollapseButtonGlobal   : function () {
        App.Elements.DataTab.toggleCollapseButtonGlobal();
    },
    clickDataCollapseButton         : function ( dom_element ) {
        App.Elements.DataTab.toggleCollapseButton( dom_element );
    },
    goToDataView                    : function ( data_name ) {
        MANAGER.EventManager.clickOnWindowNavigation( null, MANAGER.__instance_element_distributor.current_element.uuid, true, WINDOW.CONST.ELEMENT.DATAS );
        var _prop = MANAGER.__instance_property_distributor.getDataWithName( data_name );
        if ( _prop && _prop.group_data ) {
            MANAGER.EventManager.clickOnDataNavigation( _prop.group_data.uuid );
        }
    },
    clickOnDataNavigation           : function ( group_uuid ) {
        App.Elements.DataTab.clickOnDataNavigation( group_uuid );
    },
    clickOnWindowNavigation         : function ( event, name, update_url, window_name ) {
        if ( !window_name ) {
            var _nav_tab = SERVICE.DOM.findParentElementWithClass( event.target, WINDOW.CONST.CLASS.WINDOW_TAB, 10 );
            if ( !_nav_tab ) {
                return;
            }
            window_name = _nav_tab.dataset.name;
        }
        var _parent_window = MANAGER.__instance_window_distributor.findParentWindow( name );
        var _click_done    = _parent_window.clickOnWindow( window_name );
        if ( !_click_done ) {
            return;
        }
        if ( update_url ) {
            GS.HIGHWAY.goToElementTab( window_name );
        }
        
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        if ( _controller ) {
            if ( _controller.computeSizes ) {
                _controller.computeSizes();
            }
            if ( _controller.doActionAfter ) {
                _controller.doActionAfter( "click_on__window_navigation__done", name, window_name );
            }
        }
    },
    clickOnCheckboxInput            : function ( event ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        _controller.clickOnCheckboxInput( event );
    },
    onChangeOnInput                 : function ( event, event_name, param ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        _controller.onChangeOnInput( event, event_name, param );
    },
    onResize                        : function ( dom_element ) {
        var _parent_dom_element = SERVICE.DOM.findParentElementWithClass( dom_element, PROPERTY.CONST.CLASS.SKINKEN_LINE, 25 );
        var parent_name         = _parent_dom_element.dataset.name;
        var _object             = MANAGER.__instance_property_distributor.findElement( parent_name, true );
        _object.onResize( dom_element );
    },
    onMoveRangeCursor               : function ( parent_name, ask_after_action, event ) {
        var _object = MANAGER.__instance_property_distributor.findElement( parent_name, true );
        _object.onMoveRangeCursor( null, event );
        if ( ask_after_action ) {
            MANAGER.ListenerEventManager.askAfterActionProperty( _object );
        }
    },
    clickOnBtnPlus                  : function ( parent_name, event ) {
        this.stopPropagation();
        var _object = MANAGER.__instance_property_distributor.findElement( parent_name, true );
        _object.clickOnBtnPlus( event );
        MANAGER.ListenerEventManager.askAfterActionProperty( _object );
    },
    clickOnSelector                 : function ( event, param, controller_name ) {
        event.stopPropagation();
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event, controller_name );
        _controller.clickOnSelector( event, param );
    },
    clickOnAllItemsSelector         : function ( parent_name, limit ) {
        var _object = MANAGER.__instance_property_distributor.findElement( parent_name, true );
        _object.clickOnAllItemsSelector( limit );
        MANAGER.ListenerEventManager.askAfterActionProperty( _object );
    },
    clickOnItemSelector             : function ( event, parent_name, element, controller_name ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event, controller_name );
        _controller.clickOnItemSelector( event, parent_name, element );
    },
    clickOnDeleteItemSelector       : function ( parent_name, key_name ) {
        var _object = MANAGER.__instance_property_distributor.findElement( parent_name, true );
        _object.clickOnDeleteItemSelector( key_name );
        MANAGER.ListenerEventManager.askAfterActionProperty( _object );
    },
    clickOnBtnInheritance           : function ( parent_name ) {
        var _object = MANAGER.__instance_property_distributor.findElement( parent_name, true );
        _object.clickOnBtnInheritance();
    },
    clickOnInput                    : function ( event ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        _controller.clickOnInput( event );
    },
    muteEvent                       : function ( event ) {
        event.preventDefault();
        event.stopPropagation();
    },
    mutePropagation                 : function ( event ) {
        event.stopPropagation();
    },
    clickOnToggleViewSource         : function ( event ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        _controller.clickOnToggleViewSource( event );
    },
    clickOnActivatedSource          : function ( name ) {
        if ( !MANAGER.__instance_element_distributor.current_user.is_admin ) {
            console.warn( "[clickOnActivatedSource]", "[not admin]", "refused" );
            return;
        }
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        _controller.toggleSourceEnable( event );
    },
    clickOnActivatedDiscoverySource : function ( source_name, discovery_id ) {
        if ( MANAGER.__instance_element_distributor.current_user && !MANAGER.__instance_element_distributor.current_user.is_admin ) {
            console.warn( "[clickOnActivatedDiscoverySource]", "[not admin]", "refused" );
            return;
        }
        var _source    = MANAGER.__instance_source_distributor.findSource( source_name );
        var _discovery = _source[ SOURCE.CONST.FIELD.IP_RANGES ].getRangeById( discovery_id );
        _discovery.toggleEnable();
    },
    clickOnForceSource              : function ( name ) {
        if ( MANAGER.__instance_element_distributor.current_user && !MANAGER.__instance_element_distributor.current_user.is_admin ) {
            console.warn( "[clickOnForceSource]", "[not admin]", "refused" );
            return;
        }
        var _source = MANAGER.__instance_source_distributor.findSource( name );
        _source.askForceImport();
    },
    clickOnCleanSource              : function ( name ) {
        if ( MANAGER.__instance_element_distributor.current_user && !MANAGER.__instance_element_distributor.current_user.is_admin ) {
            console.warn( "[clickOnCleanSource]", "[not admin]", "refused" );
            return;
        }
        var _source = MANAGER.__instance_source_distributor.findSource( name );
        _source.cleanImport();
    },
    clickOnLastExecutionSource      : function ( name ) {
        if ( MANAGER.__instance_element_distributor.current_user && !MANAGER.__instance_element_distributor.current_user.is_admin ) {
            console.warn( "[clickOnLastExecutionSource]", "[not admin]", "refused" );
            return;
        }
        var _source = MANAGER.__instance_source_distributor.findSource( name );
        _source.redirectToSourceLastExecution();
    },
    clickOnWorkflowTab              : function ( name ) {
        var dom_element = document.querySelector( "#gs-workflow-container" );
        SERVICE.DOM.setDataSet( dom_element, 'selected', name );
        dom_element.classList.toggle( 'PATCH_IE' );
    },
    clickOpenNewWindow              : function ( event, link, id ) {
        var _path = "/elements/";
        _path += link + '/';
        _path += id;
        if ( event.ctrlKey ) {
            window.open( _path, '_blank' );
        }
        else {
            window.location = _path;
        }
    },
    clickOnLinkForWorkingArea       : function ( event, id ) { //NE MARCHE QUE POUR LES HOSTS
        var _path = "/elements/working_area/hosts/" + id;
        if ( event.ctrlKey ) {
            window.open( _path, '_blank' );
        }
        else {
            window.location = _path;
        }
    },
    keydown                         : function ( event ) {
        var _key_code = event.keyCode;
        switch ( _key_code ) {
            case GS.CONST.KEY_CODE.F1:
                event.preventDefault();
                event.stopPropagation();
                break;
        }
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        if ( _controller ) {
            _controller.keydown( event, _key_code );
        }
    },
    mouseEnter                      : function ( event ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        if ( _controller ) {
            _controller.mouseEnter( event );
        }
    },
    mouseLeave                      : function ( event ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        if ( _controller ) {
            _controller.mouseLeave( event );
        }
    },
    mouseMove                       : function ( event, controller_name ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event, controller_name );
        if ( _controller ) {
            _controller.mouseMove( event );
        }
    },
    mouseWheel                      : function ( event, controller_name ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event, controller_name );
        if ( _controller ) {
            _controller.mouseWheel( event );
        }
    },
    mouseDown                       : function ( event, controller_name ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event, controller_name );
        if ( _controller ) {
            _controller.mouseDown( event );
        }
    },
    mouseUp                         : function ( event, controller_name ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event, controller_name );
        if ( _controller ) {
            _controller.mouseUp( event );
        }
    },
    onClick                         : function ( event ) {
        if ( this.stop_propagation ) {
            this.stop_propagation = false;
            return;
        }
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        if ( _controller ) {
            _controller.onClick( event );
        }
    },
    onScroll                        : function ( event, controller_name, param ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event, controller_name );
        if ( _controller ) {
            _controller.onScroll( event, param );
        }
    },
    clickOnForcedHelpButton         : function ( event, dom_element ) {
        event.preventDefault();
        event.stopPropagation();
        var _parent_dom_element = SERVICE.DOM.findParentElementWithClass( dom_element, PROPERTY.CONST.CLASS.SKINKEN_LINE, 20 );
        var name                = _parent_dom_element.dataset.name;
        var _object             = MANAGER.__instance_property_distributor.findElement( name );
        _object.clickOnForcedHelpButton();
    },
    clickOnForcedHelpButtonCheck    : function ( event, dom_element ) {
        event.preventDefault();
        event.stopPropagation();
        MANAGER.HelpManager.setForced( 'help_title_try_checks', dom_element, true );
    },
    clickOnPaste                    : function ( event ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        if ( _controller ) {
            _controller.clickOnPaste( event );
        }
    },
    clickOnCopy                     : function ( event ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        if ( _controller ) {
            _controller.clickOnCopy( event );
        }
    },
    clickOnModeTab                  : function ( element, do_blink_animation ) {
        var _parent = document.getElementById( 'id-gs-window-checks-target' );
        SERVICE.DOM.setDataSet( _parent, 'tabSelected', element.dataset.value );
        if ( do_blink_animation ) {
            SERVICE.DOM.askAddClass( element, 'gs-pulsate', 2000 );
        }
        if ( element.dataset.value !== OBJECT.CONST.MODE_OVERRIDE_EXCLUDE.OVERRIDE ) {
            var _elements = document.querySelectorAll( '.gs-tab-check-col-tags' );
            for ( var i = 0, _size = _elements.length; i < _size; i++ ) {
                _elements[ i ].classList.remove( "gs-active" );
            }
            var _elements_tr = document.querySelectorAll( '.gs-tr-check-override' );
            for ( var i = 0, _size = _elements_tr.length; i < _size; i++ ) {
                _elements_tr[ i ].classList.add( "gs-hidden" );
            }
        }
        MANAGER.__instance_navigator_size.tab_data_exclude();
    },
    chooseOverrideValueFromDuplicate: function ( event, value, property ) {
        MANAGER.__instance_element_distributor.current_element.override_value_choosed             = {};
        MANAGER.__instance_element_distributor.current_element.override_value_choosed[ property ] = value;
    },
    validateErrorOverrideValue      : function ( event, property, property_link_name ) {
        MANAGER.__instance_element_distributor.current_element[ property_link_name ].setValueFromUser( MANAGER.__instance_element_distributor.current_element.override_value_choosed[ property ] );
    },
    clickOnSetOverride              : function ( dom_uuid ) {
        var _element = document.getElementById( 'id-gs-window-checks-target' );
        if ( _element.dataset.tabSelected !== OBJECT.CONST.MODE_OVERRIDE_EXCLUDE.OVERRIDE ) {
            this.clickOnModeTab( _element.querySelector( '.gs-check-mode-menu-tab[data-value="' + OBJECT.CONST.MODE_OVERRIDE_EXCLUDE.OVERRIDE + '"]' ), true );
        }
        App.Elements.ChecksTab.getCheckOverrideData( dom_uuid );
        MANAGER.ListenerEventManager.afterAction( MANAGER.CONST.AFTER_ACTION.CLICK_ON_SERVICE_OVERRIDE );
    },
    clickOnSetExclude               : function ( dom_uuid, event, ignore_if_on_status_exclude ) {
        if ( event ) {
            event.stopPropagation();
        }
        var _element = document.getElementById( 'id-gs-window-checks-target' );
        if ( _element.dataset.tabSelected !== OBJECT.CONST.MODE_OVERRIDE_EXCLUDE.EXCLUDE ) {
            this.clickOnModeTab( _element.querySelector( '.gs-check-mode-menu-tab[data-value="' + OBJECT.CONST.MODE_OVERRIDE_EXCLUDE.EXCLUDE + '"]' ), true );
        }
        else if ( !ignore_if_on_status_exclude ) {
            var _check_in_host = App.Elements.ChecksTab.getCheckInHostElement( dom_uuid );
            _check_in_host.changeExcludeStatus();
        }
    },
    clickOnDeleteInvalidOverride    : function ( type, name ) {
        MANAGER.__instance_override_unvalid.deleteOverride( type, name );
        App.Elements.ChecksTab.askUpdateOverrideFormatCfg();
    },
    clickOnCleanCheckOverrides      : function ( event, check_uuid ) {
        event.stopPropagation();
        var _confirm = confirm( _( 'element.confirm_remove_override' ) );
        if ( _confirm ) {
            var _check_in_page_host = App.Elements.ChecksTab.getCheckInHostElement( check_uuid );
            _check_in_page_host.cleanOverride();
            App.Elements.ChecksTab.askUpdateOverrideFormatCfg();
        }
    },
    clickOnFocusOnDuplicateCheck    : function ( check_uuid ) {
        var _check_in_page_host = App.Elements.ChecksTab.getCheckByID( check_uuid );
        _check_in_page_host.dom_element.scrollIntoView( false );
        SERVICE.DOM.askAddClass( _check_in_page_host.dom_element.querySelector( '.gs-tab-check-col-name' ), 'gs-pulsate-focus', 3000 );
    },
    clickOnTryCheck                 : function ( check_uuid, is_exec, is_on_poller ) {
        var _check_in_page_host = App.Elements.ChecksTab.getCheckInHostElement( check_uuid );
        _check_in_page_host.askTryCheck( is_exec, is_on_poller );
    },
    clickOnCleanTryCheck            : function ( check_uuid ) {
        var _check_in_page_host = App.Elements.ChecksTab.getCheckInHostElement( check_uuid );
        _check_in_page_host.hide_eval_check();
    },
    clickOnMultiLineObjectAdd       : function ( parent_name ) {
        var _object = MANAGER.__instance_property_distributor.findElement( parent_name, true );
        _object.clickOnAddLine();
    },
    clickOnDeleteLine               : function ( dom_element ) {
        var _parent_dom_element = SERVICE.DOM.findParentElementWithClass( dom_element, PROPERTY.CONST.CLASS.SKINKEN_LINE, 25 );
        var _name               = _parent_dom_element.dataset.name;
        var _object             = MANAGER.__instance_property_distributor.findElement( _name );
        _object.deleteLine( dom_element );
    },
    clickOnHooksPopup               : function ( event, element ) {
        event.stopImmediatePropagation();
        var target    = element;
        var parent    = target.parentNode;
        var is_active = target.classList.contains( 'active' );
        if ( is_active ) {
            target.classList.remove( 'active' );
            parent.classList.remove( "gs-force-display-block" );
        }
        else {
            target.classList.add( 'active' );
            parent.classList.add( "gs-force-display-block" );
        }
    },
    clickOnCollapseButton           : function ( event ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        _controller.clickOnCollapseButton( event );
    },
    simulateClickOnFilter           : function ( event, header_name, value ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event );
        _controller.simulateClickOnFilter( event, header_name, value );
    },
    clickOnForceImportInSource      : function ( source_name ) {
        $.ajax( {
            url    : COMMUNICATION.QUERY.GET.SOURCE.FORCE_IMPORT.URL
                     + source_name
                     + COMMUNICATION.QUERY.GET.SOURCE.FORCE_IMPORT.OPTIONS.TIMESTAMP
                     + DATE_TIME.getTimestampNow(),
            success: function ( data ) {
                var _sources = MANAGER.__instance_source_distributor.findSources( SOURCE.CONST.TYPES.ALL );
                _sources.refresh();
            },
            error  : function ( data, txt ) {
                console.log( 'Got bad result for' + data );
            }
        } );
    },
    shinkenBroadcast                : function ( key, value_object, event, controller_name ) {
        var _controller = CONTROLLER.DistributorControllerManager.findControllerByEvent( event, controller_name );
        if ( _controller ) {
            _controller.shinkenBroadcast( key, value_object );
        }
    }
};
MANAGER.WindowModalManager                      = function () {
    this.dom_element         = document.getElementById( 'id-gs-window-modal' );
    this.dom_element_content = this.dom_element.querySelector( '.gs-window-modal-content' );
    this.dom_element_loading = this.dom_element.querySelector( '.gs-loading-text' );
    this.dom_element_close   = this.dom_element.querySelector( '#id-gs-window-modal-close' );
    this.class_added         = "";
    this.is_open             = false;
};
MANAGER.WindowModalManager.prototype            = {
    setContent        : function ( to_set ) {
        this.dom_element_content.innerHTML = to_set;
        this.dom_element.classList.remove( "gs-hidden" );
        this.is_open = true;
    },
    showCloseContainer: function () {
        this.dom_element_close.classList.remove( "gs-hidden" );
    },
    addClass          : function ( to_set ) {
        this.class_added = to_set;
        this.dom_element.classList.add( to_set );
    },
    addCloseEvent     : function ( event_to_ask_to_iframe, controller ) {
        this.close_event            = event_to_ask_to_iframe;
        this.close_event_controller = controller;
    },
    setIframe         : function ( url_to_set, id ) {
        if ( this.dom_element_loading ) {
            this.dom_element_content.classList.add( "gs-hidden" );
            this.dom_element_loading.classList.remove( "gs-hidden" );
        }
        if ( id ) {
            this.setIframeID( id );
        }
        var _id     = this._id ? 'id="' + this._id + '"' : '';
        var _to_set = '<iframe ' + _id + ' src="' + url_to_set + '"></iframe>';
        this.setContent( _to_set );
    },
    setIframeID       : function ( to_set ) {
        this._id = to_set;
    },
    iframeLoaded      : function () {
        this.dom_element_content.classList.remove( "gs-hidden" );
        this.dom_element_loading.classList.add( "gs-hidden" );
    },
    askDoClose        : function () {
        if ( this.close_event ) {
            GS.COMMUNICATION_WITH_IFRAME_CHILD.doActionAfter( this._id, this.close_event );
        }
        else {
            MANAGER.__instance_window_modal_manager.close();
        }
    },
    close             : function () {
        this.doClose();
        if ( this.close_event_controller ) {
            this.close_event_controller.doActionAfter( this.close_event, true );
            this.close_event_controller = null;
        }
        this.close_event = null;
    },
    doClose           : function () {
        this.is_open                       = false;
        this.dom_element_content.innerHTML = '';
        this.dom_element.classList.add( "gs-hidden" );
        this.dom_element_close.classList.add( "gs-hidden" );
        if ( this.class_added ) {
            this.dom_element.classList.remove( this.class_added );
            this.class_added = "";
        }
    }
};
MANAGER.__instance_window_modal_manager; //INIT IN LOADING MANAGER
GS.OBJECT.MESSAGE                  = {
    ICON       : {
        ERROR  : '<span class="gs-icon-error shinkon-warning"></span>',
        WARNING: '<span class="gs-icon-warning shinkon-warning"></span>',
        BEWARE : '<span class="gs-icon-warning shinkon-warning-light"></span>'
    },
    MAX_ERROR  : 5,
    MAX_WARNING: 5
};
GS.OBJECT.Messages                 = function ( footer ) {
    this.init( footer );
};
GS.OBJECT.Messages.prototype       = {
    init                : function ( footer ) {
        this.__class_name__ = "GS.OBJECT.Messages";
        this.resetMessages();
        this.is_dfe           = false;
        this.is_dfe_protected = false;
        this.footer           = footer;
        this.no_duplicate     = false;
    },
    addMessage          : function ( type_message, text ) {
        switch ( type_message ) {
            case COMPONENT.CONST.STATUS.ERROR:
                this.messages_error.push( new GS.OBJECT.Message( type_message, text ) );
                break;
            case COMPONENT.CONST.STATUS.WARNING:
                this.messages_warning.push( new GS.OBJECT.Message( type_message, text ) );
                break;
            case COMPONENT.CONST.STATUS.BEWARE:
                this.messages_beware.push( new GS.OBJECT.Message( type_message, text ) );
                break;
            default:
                this.messages_info.push( new GS.OBJECT.Message( type_message, text ) );
                break;
        }
    },
    addMessages         : function ( messages ) {
        if ( !messages ) {
            return;
        }
        const _size = messages.length;
        let _current_message;
        for ( let i = 0; i < _size; i++ ) {
            _current_message = messages[ i ];
            this.addMessage( _current_message._type, _current_message._text );
        }
    },
    hasMessage          : function () {
        return this.hasError() || this.hasWarning() || this.hasBeware() || this.hasInfo();
    },
    getNumberErrors     : function () {
        return this.messages_error.length;
    },
    getNumberWarnings   : function () {
        return this.messages_warning.length;
    },
    hasError            : function () {
        return this.getNumberErrors() > 0;
    },
    hasWarning          : function () {
        return this.getNumberWarnings() > 0;
    },
    hasBeware           : function () {
        return this.messages_beware.length > 0;
    },
    hasInfo             : function () {
        return this.messages_info.length > 0;
    },
    getStatus           : function () {
        if ( this.hasError() ) {
            return COMPONENT.CONST.STATUS.ERROR;
        }
        if ( this.hasWarning() ) {
            return COMPONENT.CONST.STATUS.WARNING;
        }
        if ( this.hasBeware() ) {
            return COMPONENT.CONST.STATUS.BEWARE;
        }
        return COMPONENT.CONST.STATUS.NONE;
    },
    hasStatus           : function () {
        return this.getStatus() !== COMPONENT.CONST.STATUS.NONE;
    },
    buildMessage        : function ( is_default, template_name, has_no_max, skip_invalid_syntax ) {
        
        let _status = this.getStatus();
        if ( _status === COMPONENT.CONST.STATUS.NONE ) {
            return '';
        }
        let _to_return          = '<div class="gs-tooltip-message text-left gs-drag-exclude">';
        let _show_extra_message = false;
        if ( this.hasError() ) {
            _show_extra_message = true;
            if ( !skip_invalid_syntax ) {
                _to_return += '<span class="text-underline">' + _( 'messages.invalid_syntax', [DICTIONARY_COMMON_UI] ) + '</span><br>';
            }
            _to_return += GS.OBJECT.MESSAGE.ICON.ERROR + _( 'messages.tag_error', [DICTIONARY_COMMON_UI] ) + '<br><ol>';
            _to_return += this.buildMessageForList( this.messages_error, has_no_max ? '' : GS.OBJECT.MESSAGE.MAX_ERROR );
            _to_return += '</ol>';
        }
        if ( this.hasWarning() ) {
            _show_extra_message = true;
            _to_return += GS.OBJECT.MESSAGE.ICON.WARNING + _( 'messages.tag_warning', [DICTIONARY_COMMON_UI] ) + '<br><ol>';
            _to_return += this.buildMessageForList( this.messages_warning, has_no_max ? '' : GS.OBJECT.MESSAGE.MAX_WARNING );
            _to_return += '</ol>';
        }
        if ( !this.is_dfe_protected && _show_extra_message && this.is_dfe ) {
            const _format_to_follow        = is_default ? _( 'messages.tooltip_dfe_common_default_value' ) : _( 'element.tooltip_dfe_common' );
            const _note_to_update_template = template_name ? '<div class=\'container-legend \'>' + GS.TOOLS.STRING.format( _( 'element.tooltip_dfe_common_go_tpl' ), template_name ) + '</div>' : "";
            _to_return                     = _to_return +
                                             '<div class=\'container-legend\'>' + _format_to_follow + '</div>' +
                                             _note_to_update_template;
            
        }
        if ( this.hasBeware() && this.is_dfe ) {
            if ( !this.is_dfe_protected && _show_extra_message ) {
                _to_return += '<hr>';
            }
            _to_return += '<ol>' + GS.OBJECT.MESSAGE.ICON.BEWARE + GS.TOOLS.STRING.format( _( 'element.tooltip_dfe_deleted_part_1' ), this.property_name );
            _to_return += this.buildMessageForList( this.messages_beware, 999 );
            _to_return += '</ol>';
        }
        else if ( this.hasBeware() ) {
            _to_return += GS.OBJECT.MESSAGE.ICON.BEWARE + _( 'messages.tag_warning', [DICTIONARY_COMMON_UI] ) + '<br>';
            _to_return += this.buildMessageForList( this.messages_beware, 999 );
        }
        if ( this.footer ) {
            _to_return += this.footer;
        }
        
        _to_return += '</div>';
        return _to_return;
    },
    buildMessageGeneric : function () {
        const _status = this.getStatus();
        if ( _status === COMPONENT.CONST.STATUS.NONE ) {
            return '';
        }
        let _to_return = '<div class="gs-message-container">';
        if ( this.hasError() ) {
            _to_return += GS.OBJECT.MESSAGE.ICON.ERROR + _( 'messages.tag_error', [DICTIONARY_COMMON_UI] ) + '<br><ol>';
            _to_return += this.buildMessageForList( this.messages_error );
            _to_return += '</ol>';
        }
        if ( this.hasWarning() ) {
            _to_return += GS.OBJECT.MESSAGE.ICON.ERROR + _( 'messages.tag_warning', [DICTIONARY_COMMON_UI] ) + '<br><ol>';
            _to_return += this.buildMessageForList( this.messages_warning );
            _to_return += '</ol>';
        }
        _to_return += '</div>';
        return _to_return;
    },
    buildMessageForList : function ( list, max ) {
        let _to_return = '';
        let _size      = list.length;
        if ( max ) {
            _size = Math.min( list.length, _size );
        }
        let _to_add;
        const _duplicate = {};
        for ( let i = 0; i < _size; i++ ) {
            _to_add = list[ i ].buildHtml();
            if ( this.no_duplicate ) {
                let _md5 = GS.TOOLS.MD5.MD5( _to_add );
                if ( _duplicate[ _md5 ] ) {
                    continue;
                }
                _duplicate[ _md5 ] = true;
            }
            _to_return += _to_add;
        }
        return _to_return;
    },
    getAllMessages      : function () {
        let to_return = [];
        to_return     = GS.TOOLS.ARRAY.concat( to_return, this.messages_error );
        to_return     = GS.TOOLS.ARRAY.concat( to_return, this.messages_warning );
        to_return     = GS.TOOLS.ARRAY.concat( to_return, this.messages_info );
        to_return     = GS.TOOLS.ARRAY.concat( to_return, this.messages_beware );
        return to_return;
    },
    _getObjectToJson    : function ( format_data__20241115 ) {
        return {};
    },
    countMessageWithText: function ( type_message, text ) {
        let messages;
        let _to_return = 0;
        switch ( type_message ) {
            case COMPONENT.CONST.STATUS.ERROR:
                messages = this.messages_error;
                break;
            case COMPONENT.CONST.STATUS.WARNING:
                messages = this.messages_warning;
                break;
            case COMPONENT.CONST.STATUS.BEWARE:
                messages = this.messages_beware;
                break;
            default:
                messages = this.messages_info;
                break;
        }
        const messages_length = messages.length;
        
        for ( let i = 0; i < messages_length; i++ ) {
            if ( GS.TOOLS.STRING.contains( messages[ i ]._text, text ) ) {
                _to_return++;
            }
        }
        return _to_return;
    },
    getObjectClassName  : function () {
        return this.__class_name__;
    },
    getErrorMessages    : function () {
        return this.messages_error;
    },
    resetMessages       : function () {
        this.resetErrorMessages();
        this.messages_warning = [];
        this.messages_beware  = [];
        this.messages_info    = [];
    },
    resetErrorMessages  : function () {
        this.messages_error = [];
    }
};
GS.OBJECT.Message                 = function ( type, text, line_index ) {
    this._type = type;
    this._text = text;
};
GS.OBJECT.Message.prototype       = {
    buildHtml: function () {
        return '<li class=\'' + this._type + '\'>' + this._text + '</li>';
    },
    getText  : function () {
        return this._text;
    }
};
GS.OBJECT.Messageservice                   = (function ( self ) {
    self.parseBackendStatus = function ( status ) {
        switch ( status ) {
            case GS.OBJECT.CONST.VALIDATION.FIELD.WARNINGS:
                return COMPONENT.CONST.STATUS.WARNING;
            case GS.OBJECT.CONST.VALIDATION.FIELD.CRITICAL:
            case GS.OBJECT.CONST.VALIDATION.FIELD.ERRORS:
                return COMPONENT.CONST.STATUS.ERROR;
        }
    };
    return self;
})( GS.OBJECT.Messageservice || {} );
GS.OBJECT.CONST.PARAM             = {
    VALUE       : "value",
    CFG_VALUE   : "cfg_value",
    SOURCE_VALUE: "source_value",
    PARAM_EVENT : {
        PARAM_LIST_KEY: "param_object__list_keys",
        PARAM_DATA    : "param_object__data"
    }
};
GS.OBJECT.Param                   = function ( key, value_object, parameter, default_value ) {
    this.init( key, value_object, parameter, default_value );
};
GS.OBJECT.Param.prototype         = {
    __class_name__            : 'GS.OBJECT.Param',
    init                      : function ( key, value_object, parameter, default_value ) {
        this.initCounterCommon();
        if ( !value_object ) {
            return;
        }
        this.key           = key;
        this.default_value = default_value || value_object.default_value;
        this.initValueObject( value_object );
        if ( parameter && this.user_value === "" && !parameter.is_mandatory ) {
            this.user_value = this.default_value;
        }
    },
    initValueObject           : function ( value_object ) {
        if ( value_object.validation_messages ) {
            this.setMessagesSpecific( value_object.validation_messages );
        }
        this.setValue( value_object[ GS.OBJECT.CONST.PARAM.VALUE ] );
        if ( value_object[ GS.OBJECT.CONST.PARAM.CFG_VALUE ] !== undefined ) {
            this.cfg_value = value_object[ GS.OBJECT.CONST.PARAM.CFG_VALUE ];
        }
        this.setUserValueFromInit( value_object );
        this._initial_user_value = value_object._initial_user_value !== undefined ? value_object._initial_user_value : this.getUserValue();
    },
    doActionAfter             : function ( event_name, params ) {
        switch ( event_name ) {
            case "value__param__configured__from_form":
                this.addParamForEvents( PROPERTY.COMMON.PARAM.COMPOSED_KEY, params[ PROPERTY.COMMON.PARAM.COMPOSED_KEY ] );
                this.setPreviousModificationElement();
                this.initValueObject( params[ GS.OBJECT.CONST.PARAM.PARAM_EVENT.PARAM_DATA ] );
                params[ GS.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].addSpecific( this.getLastModificationElement() );
                break;
            case "undo_last_modification" :
            case "redo_last_modification":
                this.initValueObject( params[ GS.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getNextOrPrevious( event_name ) );
                break;
            case "default__param__configured__from_form":
                this.addParamForEvents( PROPERTY.COMMON.PARAM.COMPOSED_KEY, params[ PROPERTY.COMMON.PARAM.COMPOSED_KEY ] );
                this.setPreviousModificationElement();
                this.setValue( params[ GS.OBJECT.CONST.PARAM.PARAM_EVENT.PARAM_DATA ][ GS.OBJECT.CONST.PARAM.VALUE ] );
                params[ GS.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].addSpecific( this.getLastModificationElement() );
                break;
        }
    },
    setMessagesSpecific       : function ( message ) {
        this.setMessages( message );
    },
    doActionAfterAddMessages  : function () {
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, this.getObjectClassName(), this.messages.getNumberWarnings() );
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, this.getObjectClassName(), this.messages.getNumberErrors() );
    },
    _getObjectToJson          : function ( format_data__20241115 ) {
        switch ( format_data__20241115 ) {
            case GS.OBJECT.JSON_EDITOR.FORMAT_DATA.VALUE_ONLY:
                return this.getValue();
            case GS.OBJECT.JSON_EDITOR.FORMAT_DATA.VALUE_AND_DEFAULT:
                return { [ GS.OBJECT.CONST.PARAM.VALUE ]: this.getValue(), [ GS.OBJECT.CONST.PARAM.SOURCE_VALUE ]: this.getUserValue() };
            case GS.OBJECT.JSON_EDITOR.FORMAT_DATA.VALUE_AND_DEFAULT_AND_CFG:
                return { [ GS.OBJECT.CONST.PARAM.VALUE ]: this.getValue(), [ GS.OBJECT.CONST.PARAM.SOURCE_VALUE ]: this.getUserValue(), [ GS.OBJECT.CONST.PARAM.CFG_VALUE ]: this.getCfgValue() };
            case GS.OBJECT.JSON_EDITOR.FORMAT_DATA.VALUE_AND_FORCE_DEFAULT:
                return { [ GS.OBJECT.CONST.PARAM.VALUE ]: this.getValue(), [ GS.OBJECT.CONST.PARAM.SOURCE_VALUE ]: this.default_value };
        }
        return this;
    },
    changeUserValueByValue    : function () {
        this.user_value = this.value;
    },
    setUserValueFromInit      : function ( value_object ) {
        let to_set = "";
        if ( value_object[ GS.OBJECT.CONST.PARAM.SOURCE_VALUE ] !== undefined ) {
            to_set = value_object[ GS.OBJECT.CONST.PARAM.SOURCE_VALUE ];
        }
        else if ( value_object.user_value !== undefined ) {
            to_set = value_object.user_value;
        }
        this.setUserValue( to_set );
    },
    setUserValue              : function ( to_set ) {
        this.user_value = to_set;
    },
    setUserValueAndValue      : function ( to_set ) {
        this.setValue( to_set );
        this.setUserValue( to_set );
    },
    getUserInitialValue       : function () {
        return this._initial_user_value;
    },
    getUserValue              : function () {
        return this.user_value;
    },
    setValue                  : function ( to_set ) {
        this.value = to_set;
    },
    getValue                  : function () {
        return this.value;
    },
    getCfgValue               : function () {
        return this.cfg_value;
    },
    getUUID                   : function () {
        return this.uuid;
    },
    clone__20250108           : function () {
        let to_return                 = new GS.OBJECT.Param( this.key );
        to_return.user_value          = this.user_value;
        to_return.value               = this.value;
        to_return._initial_user_value = this._initial_user_value;
        to_return.cfg_value           = this.cfg_value;
        to_return.default_value       = this.default_value;
        return to_return;
    },
    getLastModificationElement: function () {
        let element_modified = this;
        let previous         = this.previous_modication_data;
        let next             = this.getDataForLastModification();
        return new GS.OBJECT.LastModificationElement( GS.OBJECT.CONST.LAST_MODIFICATION.ACTION.PARAM_MODIFICATION, element_modified, previous, next );
    },
    getDataToSave             : function () {
        return this.getValue();
    },
    getDataForLastModification: function () {
        let to_return = this.clone__20250108();
        delete to_return[ "counters" ];
        return to_return;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Param, GS.OBJECT.CounterInterfaceValidation );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Param, GS.OBJECT.GsObjectJson );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Param, GS.OBJECT.EditableElementInterface );
GS.OBJECT.ShinkenElement           = function () {
    this.sla_value_status = OBJECT.CONST.ELEMENT.SLA.STATUS.UNKNOWN;
};
GS.OBJECT.ShinkenElement.prototype = {
    init                              : function ( data ) {
        this.updateData( data );
    },
    isConfigured                      : function () {
        if ( !this.getType() ) {
            return false;
        }
        return !!(this.getUUID() || this.getName());
    },
    getUUID                           : function () {
        return this.uuid;
    },
    getName                           : function () {
        return this.name;
    },
    getVisualisationName              : function () {
        return this.visualisation_name;
    },
    getType                           : function () {
        return this.item_type;
    },
    setUUID                           : function ( to_set ) {
        this.uuid      = to_set;
        this.item_uuid = to_set;
    },
    isExisting                        : function () {
        if ( !this.getUUID() || !this[ OBJECT.CONST.ELEMENT.FIELD_UI.ITEM_TYPE ] ) {
            return false;
        }
        return this[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_EXISTING ];
    },
    setExists                         : function ( to_set ) {
        if ( this[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_EXISTING ] === to_set ) {
            return false;
        }
        this[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_EXISTING ] = to_set;
        return true;
    },
    isNotAuthorized                   : function ( to_set ) {
        if ( this[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_NOT_AUTHORIZED_FOR_USER ] === to_set ) {
            return false;
        }
        this[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_NOT_AUTHORIZED_FOR_USER ] = to_set;
        return true;
    },
    setVisibilityWithoutAuthentication: function ( to_set ) {
        if ( this[ OBJECT.CONST.ELEMENT.FIELD_UI.ELEMENT_VISIBILITY_ON_NOT_AUTHENTICATED_VIEW ] === to_set ) {
            return false;
        }
        this[ OBJECT.CONST.ELEMENT.FIELD_UI.ELEMENT_VISIBILITY_ON_NOT_AUTHENTICATED_VIEW ] = to_set;
        return true;
    },
    setName                           : function ( to_set ) {
        if ( this.name === to_set ) {
            return false;
        }
        this.name = to_set;
        return true;
    },
    setVisualisationName              : function ( to_set ) {
        if ( this.visualisation_name === to_set ) {
            return false;
        }
        this.visualisation_name = to_set;
        return true;
    },
    setContext                        : function ( to_set ) {
        this.previous_context = this.previous_context || new GS.Status();
        if ( this.context ) {
            this.previous_context.setCode( this.context.getCode() );
        }
        if ( this.context && this.context.isByCode( to_set ) ) {
            return false;
        }
        this.context = this.context || new GS.Status();
        this.context.setCode( to_set );
        return true;
    },
    setStatus                         : function ( to_set ) {
        this.previous_status = this.previous_status || new GS.Status();
        if ( this.status ) {
            this.previous_status.setCode( this.status.getCode() );
        }
        if ( this.status && this.status.isByCode( to_set ) ) {
            return false;
        }
        this.status = this.status || new GS.Status();
        this.status.setCode( to_set );
        return true;
    },
    setSlaValue                       : function ( to_set ) {
        if ( this.sla_value === to_set ) {
            return false;
        }
        this.sla_value        = to_set;
        this.sla_value_status = OBJECT.CONST.ELEMENT.SLA.STATUS.UNKNOWN;
        this.sla_quality      = null;
        return true;
    },
    setSlaTendency                    : function ( to_set ) {
        if ( this.tendency === to_set ) {
            return false;
        }
        this.tendency = to_set;
        return true;
    },
    setSlaThreshold                   : function ( key, value ) {
        if ( this[ "sla_" + key ] === value ) {
            return false;
        }
        this[ "sla_" + key ]  = value;
        this.sla_value_status = OBJECT.CONST.ELEMENT.SLA.STATUS.UNKNOWN;
        this.sla_quality      = null;
        return true;
    },
    getSlaValueStatus                 : function ( key, value ) {
        
        if ( this.sla_value_status === OBJECT.CONST.ELEMENT.SLA.STATUS.UNKNOWN ) {
            if ( parseFloat( this.sla_value ) < this.sla_critical_threshold ) {
                this.sla_value_status = OBJECT.CONST.ELEMENT.SLA.STATUS.CRITICAL;
            }
            else if ( parseFloat( this.sla_value ) < this.sla_warning_threshold ) {
                this.sla_value_status = OBJECT.CONST.ELEMENT.SLA.STATUS.WARNING;
            }
            else {
                this.sla_value_status = OBJECT.CONST.ELEMENT.SLA.STATUS.OK;
            }
        }
        return this.sla_value_status;
    },
    getSlaQuality                     : function () {
        if ( this[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_NOT_AUTHORIZED_FOR_USER ] ) {
            this.sla_quality = new GS.SlaQuality();
        }
        else if ( typeof this.sla_value === "undefined" || typeof this.status === 'undefined' ) {
            this.sla_quality = new GS.SlaQuality();
        }
        else if ( !this.sla_quality ) {
            this.sla_quality = new GS.SlaQuality( this.status.getCode(), this.getSlaValueStatus() );
        }
        return this.sla_quality;
    },
    getDataForLastModification        : function ( _to_return ) {
        _to_return = _to_return || {};
        
        _to_return[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_EXISTING ] = this[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_EXISTING ];
        if ( this[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_EXISTING ] ) {
            
            _to_return[ OBJECT.CONST.ELEMENT.FIELD_UI.STATUS ]             = this[ OBJECT.CONST.ELEMENT.FIELD_UI.STATUS ].getCode();
            _to_return[ OBJECT.CONST.ELEMENT.FIELD_UI.CONTEXT ]            = this[ OBJECT.CONST.ELEMENT.FIELD_UI.CONTEXT ].getCode();
            var to_add                                                     = {};
            to_add[ OBJECT.CONST.ELEMENT.FIELD_UI.SLA.CRITICAL_THRESHOLD ] = this[ 'sla_critical_threshold' ];
            to_add[ OBJECT.CONST.ELEMENT.FIELD_UI.SLA.WARNING_THRESHOLD ]  = this[ "sla_warning_threshold" ];
            to_add[ OBJECT.CONST.ELEMENT.FIELD_UI.SLA.TENDENCY ]           = this[ OBJECT.CONST.ELEMENT.FIELD_UI.SLA.TENDENCY ];
            to_add[ OBJECT.CONST.ELEMENT.FIELD_UI.SLA.VALUE ]              = this[ "sla_value" ];
            _to_return[ OBJECT.CONST.ELEMENT.FIELD_UI.SLA.__KEY__ ]        = to_add;
            _to_return[ OBJECT.CONST.ELEMENT.FIELD_UI.VISUALISATION_NAME ] = this[ OBJECT.CONST.ELEMENT.FIELD_UI.VISUALISATION_NAME ];
            
            _to_return[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_NOT_AUTHORIZED_FOR_USER ] = this[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_NOT_AUTHORIZED_FOR_USER ];
            
            _to_return[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_NOT_AUTHORIZED_FOR_USER ] = this[ OBJECT.CONST.ELEMENT.FIELD_UI.IS_NOT_AUTHORIZED_FOR_USER ];
        }
        return _to_return;
    },
    updateData                        : function ( data ) {
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
    setData                           : function ( key, value ) {
        switch ( key ) {
            case "item_uuid":
            case OBJECT.CONST.ELEMENT.FIELD_UI.UUID:
                this.setUUID( value );
                break;
            case OBJECT.CONST.ELEMENT.FIELD_UI.STATUS:
                this.setStatus( value );
                break;
            case OBJECT.CONST.ELEMENT.FIELD_UI.IS_EXISTING:
                this.setExists( value );
                break;
            case OBJECT.CONST.ELEMENT.FIELD_UI.IS_NOT_AUTHORIZED_FOR_USER:
                this.isNotAuthorized( value );
                break;
            case OBJECT.CONST.ELEMENT.FIELD_UI.ELEMENT_VISIBILITY_ON_NOT_AUTHENTICATED_VIEW:
                this.setVisibilityWithoutAuthentication( value );
                break;
            case OBJECT.CONST.ELEMENT.FIELD_UI.CONTEXT:
                this.setContext( value );
                break;
            case OBJECT.CONST.ELEMENT.FIELD_UI.SLA.__KEY__:
                this.updateData( value );
                break;
            case OBJECT.CONST.ELEMENT.FIELD_UI.SLA.VALUE:
                this.setSlaValue( value );
                break;
            case OBJECT.CONST.ELEMENT.FIELD_UI.SLA.TENDENCY:
                this.setSlaTendency( value );
                break;
            case OBJECT.CONST.ELEMENT.FIELD_UI.SLA.WARNING_THRESHOLD:
            case OBJECT.CONST.ELEMENT.FIELD_UI.SLA.CRITICAL_THRESHOLD:
                this.setSlaThreshold( key, value );
                break;
            case "item_name":
                this[ key ] = value;
                this.setName( value );
                break;
            case OBJECT.CONST.ELEMENT.FIELD_UI.NAME:
                this.setName( value );
                break;
            case OBJECT.CONST.ELEMENT.FIELD_UI.VISUALISATION_NAME:
            case OBJECT.CONST.ELEMENT.FIELD_UI.ITEM_TYPE:
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ShinkenElement, GS.OBJECT.GsObjectJson );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ShinkenElement, GS.OBJECT.PhaseInterface );
GS.SlaQualityService                       = (function ( self ) {
    "use strict";
    self.templates            = {};
    self.getTemplateInnerHtml = function ( sla_quality ) {
        var _name = sla_quality.name;
        if ( !self.templates[ _name ] ) {
            var _dom = document.querySelector( "#id-gs-template-view #id-gs-sla-quality-template-" + _name );
            if ( _dom ) {
                self.templates[ _name ] = _dom.innerHTML;
            }
            else {
                self.templates[ _name ] = "";
                console.warn( "[StatusService - getTemplateInnerHtml]", "Missing resources template : " + _name );
            }
        }
        return self.templates[ _name ];
    };
    
    return self;
})( GS.StatusService || {} );
GS.SlaQuality                              = function ( status_code, sla_status_code ) {
    this.init( status_code, sla_status_code );
};
GS.SlaQuality.prototype                    = {
    init                   : function ( status_code, sla_status_code ) {
        this.status_code     = status_code;
        this.sla_status_code = sla_status_code;
        if ( typeof this.status_code === "undefined" && typeof this.sla_status_code === "undefined" ) {
            this.name = GS.SLA_QUALITY.LOCK;
        }
        else {
            this.name = GS.SLA_QUALITY.MAPPING[ sla_status_code ][ status_code ];
        }
    },
    getPath                : function () {
        return "img/sla_quality/" + this.name + ".svg";
    },
    getInnerHtmlViaTemplate: function () {
        if ( this.name === GS.SLA_QUALITY.LOCK ) {
            return '<div class="gs-user-no-right-to-see"><span class="shinkon shinkon-lock"\n' +
                   ' onmouseenter="SHINKEN_TOOLTIP.showTooltip(this)"\n' +
                   ' onmouseleave="SHINKEN_TOOLTIP.hideTooltip()"\n' +
                   ' shi-tip-html="' + _( "widget.weather.shinken_element_user_no_right" ) + '"></span></div>';
        }
        else {
            return GS.SlaQualityService.getTemplateInnerHtml( this );
        }
    }
};
GS.SLA_QUALITY                             = {
    MAPPING: [
        ["sun", "cloud_sunny", "cloud", "sun"],
        ["sun_cloudy", "dark_cloud", "storm", "cloud"],
        ["cloud", "dark_cloud", "storm", "storm"]
    ],
    LOCK   : "lock"
};
GS.StatusService               = (function ( self ) {
    "use strict";
    
    self.buildPaths     = function ( status, context ) {
        var _to_return = {
            path      : null,
            path_extra: null
        };
        if ( context.is( GS.STATUS.DISABLED ) ) {
            _to_return.path = context.getPath();
        }
        else if ( !context.is( GS.STATUS.NOTHING ) ) {
            _to_return.path       = context.getPath();
            _to_return.path_extra = status.getPath();
        }
        else {
            _to_return.path = status.getPath();
        }
        return _to_return;
    };
    self.buildTilePaths = function ( status, context ) {
        return {
            path      : status.getPath(),
            path_extra: context.getPath()
        };
    };
    self.parseToPartial = function ( code ) {
        var _to_return;
        switch ( code ) {
            case  GS.STATUS.ACKNOWLEDGED.CODE:
            case  GS.STATUS.INHERITED_ACKNOWLEDGED.CODE:
                _to_return = GS.STATUS.PARTIAL_ACKNOWLEDGED.CODE;
                break;
            case GS.STATUS.DOWNTIME.CODE:
            case GS.STATUS.INHERITED_DOWNTIME.CODE:
                _to_return = GS.STATUS.PARTIAL_DOWNTIME.CODE;
                break;
            case GS.STATUS.FLAPPING.CODE:
                _to_return = GS.STATUS.PARTIAL_FLAPPING.CODE;
                break;
            default:
                _to_return = code;
                break;
        }
        return _to_return;
    };
    self.isPartial      = function ( code ) {
        switch ( code ) {
            case GS.STATUS.PARTIAL_ACKNOWLEDGED.CODE:
            case GS.STATUS.PARTIAL_DOWNTIME.CODE:
            case GS.STATUS.PARTIAL_FLAPPING.CODE:
                return true;
        }
        return false;
    };
    self.isContext      = function ( context, type ) {
        var _code = context.getCode();
        switch ( type ) {
            case GS.STATUS.ACKNOWLEDGED:
                switch ( _code ) {
                    case GS.STATUS.ACKNOWLEDGED.CODE:
                    case GS.STATUS.INHERITED_ACKNOWLEDGED.CODE:
                    case GS.STATUS.PARTIAL_ACKNOWLEDGED.CODE:
                        return true;
                }
                break;
            case GS.STATUS.DOWNTIME:
                switch ( _code ) {
                    case GS.STATUS.DOWNTIME.CODE:
                    case GS.STATUS.INHERITED_DOWNTIME.CODE:
                    case GS.STATUS.PARTIAL_DOWNTIME.CODE:
                        return true;
                }
                break;
            case GS.STATUS.FLAPPING:
                switch ( _code ) {
                    case GS.STATUS.FLAPPING.CODE:
                    case GS.STATUS.PARTIAL_FLAPPING.CODE:
                        return true;
                }
                break;
            case GS.STATUS.DISABLED:
                switch ( _code ) {
                    case GS.STATUS.DISABLED.CODE:
                        return true;
                }
                break;
            case GS.STATUS.NOTHING:
                switch ( _code ) {
                    case GS.STATUS.NOTHING.CODE:
                        return true;
                }
                break;
        }
        return false;
    };
    
    return self;
})( GS.StatusService || {} );
GS.Status                      = function () {
};
GS.Status.prototype            = {
    setCode      : function ( toSet ) {
        this.code = toSet;
        this.key  = GS.STATUS.CODE_TO_KEY[ this.code ];
        this.initEnd();
    },
    setKey       : function ( toSet ) {
        this.key  = toSet;
        this.code = GS.STATUS[ this.key ].CODE;
        this.initEnd();
    },
    initEnd      : function ( toSet ) {
        this.setName();
        this.priority = GS.STATUS[ this.key ].PRIORITY;
        this.label    = this.name;
        this.buildPath();
    },
    getCode      : function () {
        return this.code;
    },
    getLabel     : function () {
        return this.label;
    },
    getName      : function () {
        return this.name;
    },
    getPriority  : function () {
        return this.priority;
    },
    is           : function ( type ) {
        return this.isByCode( type.CODE );
    },
    isByCode     : function ( code ) {
        return this.code === code;
    },
    getPath      : function () {
        return this.path;
    },
    setPathExtra : function ( name ) {
    },
    getClass     : function () {
        var _to_return = this.getName();
        if ( this.is_inherited ) {
            _to_return = 'inherited-' + _to_return;
        }
        return _to_return;
    },
    setName      : function () {
        this.name = GS.STATUS[ this.key ].NAME;
    },
    equals       : function ( status ) {
        if ( !status ) {
            return false;
        }
        if ( status.code !== this.code ) {
            return false;
        }
        if ( this.path_extra && status.path_extra && this.path_extra !== status.path_extra ) {
            return false;
        }
        return true;
    },
    buildPath    : function () {
        if ( this.name === GS.STATUS.NOTHING.NAME ) {
            this.path = '';
        }
        else {
            this.path = '/static/' + __SHINKEN_HTTP_START_TIME__ + '/img/icons/' + this.name + '.svg';
        }
    },
    buildHtml    : function () {
    },
    getCodeSample: function () {
        switch ( this.code ) {
            case  GS.STATUS.INHERITED_DOWNTIME.CODE:
            case  GS.STATUS.PARTIAL_DOWNTIME.CODE:
                return GS.STATUS.DOWNTIME.CODE;
            case  GS.STATUS.INHERITED_ACKNOWLEDGED.CODE:
            case  GS.STATUS.PARTIAL_ACKNOWLEDGED.CODE:
                return GS.STATUS.ACKNOWLEDGED.CODE;
            case  GS.STATUS.PARTIAL_FLAPPING.CODE:
                return GS.STATUS.FLAPPING.CODE;
        }
        return this.code;
    },
    getNameSample: function () {
        switch ( this.code ) {
            case  GS.STATUS.INHERITED_DOWNTIME.CODE:
            case  GS.STATUS.PARTIAL_DOWNTIME.CODE:
                return GS.STATUS.DOWNTIME.NAME;
            case  GS.STATUS.INHERITED_ACKNOWLEDGED.CODE:
            case  GS.STATUS.PARTIAL_ACKNOWLEDGED.CODE:
                return GS.STATUS.ACKNOWLEDGED.NAME;
            case  GS.STATUS.PARTIAL_FLAPPING.CODE:
                return GS.STATUS.FLAPPING.NAME;
        }
        return this.name;
    }
};
GS.STATUS                      = {
    OK                        : {
        CODE    : 0,
        NAME    : 'ok',
        KEY     : 'OK',
        PRIORITY: 0,
        ORDER   : 0,
        TYPE    : 'status',
        PATH    : 'assets/images/status/ok.svg'
    },
    WARNING                   : {
        CODE    : 1,
        NAME    : 'warning',
        KEY     : 'WARNING',
        PRIORITY: 2,
        ORDER   : 1,
        TYPE    : 'status',
        PATH    : 'assets/images/status/warning.svg'
    },
    CRITICAL                  : {
        CODE    : 2,
        NAME    : 'critical',
        KEY     : 'CRITICAL',
        PRIORITY: 3,
        ORDER   : 2,
        TYPE    : 'status',
        PATH    : 'assets/images/status/critical.svg'
    },
    UNKNOWN                   : {
        CODE    : 3,
        NAME    : 'unknown',
        KEY     : 'UNKNOWN',
        PRIORITY: 1,
        ORDER   : 3,
        TYPE    : 'status',
        PATH    : 'assets/images/status/unknown.svg'
    },
    MISSING_DATA              : {
        CODE    : 4,
        NAME    : 'missing-data',
        KEY     : 'MISSING_DATA',
        PRIORITY: 0,
        ORDER   : 4,
        TYPE    : 'status'
    },
    PENDING                   : {
        CODE    : 4,
        NAME    : 'missing-data',
        KEY     : 'MISSING_DATA',
        PRIORITY: 0,
        ORDER   : 4,
        TYPE    : 'status'
    },
    SHINKEN_INACTIVE          : {
        CODE    : 5,
        NAME    : 'gs-inactive',
        KEY     : 'SHINKEN_INACTIVE',
        PRIORITY: 0,
        ORDER   : 5,
        TYPE    : 'status'
    },
    NOTHING                   : {
        CODE    : 'NOTHING',
        NAME    : 'nothing',
        PRIORITY: 0,
        ORDER   : 0,
        TYPE    : 'context'
    },
    ACKNOWLEDGED              : {
        CODE    : 'ACKNOWLEDGED',
        NAME    : 'acknowledged',
        PRIORITY: 15,
        ORDER   : 1,
        TYPE    : 'context'
    },
    PARTIAL_ACKNOWLEDGED      : {
        CODE    : 'PARTIAL-ACKNOWLEDGED',
        NAME    : 'partial-acknowledged',
        PRIORITY: 19,
        ORDER   : 2,
        TYPE    : 'context'
    },
    INHERITED_ACKNOWLEDGED    : {
        CODE    : 'INHERITED-ACKNOWLEDGED',
        NAME    : 'inherited-acknowledged',
        PRIORITY: 10,
        ORDER   : 2,
        TYPE    : 'context'
    },
    DOWNTIME                  : {
        CODE    : 'DOWNTIME',
        NAME    : 'downtime',
        PRIORITY: 35,
        ORDER   : 3,
        TYPE    : 'context',
        PATH    : 'assets/images/status/downtime.svg'
    },
    PARTIAL_DOWNTIME          : {
        CODE    : 'PARTIAL-DOWNTIME',
        NAME    : 'partial-downtime',
        PRIORITY: 39,
        ORDER   : 3,
        TYPE    : 'context'
    },
    INHERITED_DOWNTIME        : {
        CODE    : 'INHERITED-DOWNTIME',
        NAME    : 'inherited-downtime',
        PRIORITY: 30,
        ORDER   : 3,
        TYPE    : 'context'
    },
    FLAPPING                  : {
        CODE    : 'FLAPPING',
        NAME    : 'flapping',
        PRIORITY: 25,
        ORDER   : 4,
        TYPE    : 'context'
    },
    PARTIAL_FLAPPING          : {
        CODE    : 'PARTIAL-FLAPPING',
        NAME    : 'partial-flapping',
        PRIORITY: 29,
        ORDER   : 5,
        TYPE    : 'context'
    },
    DISABLED                  : {
        CODE    : 'DISABLED',
        NAME    : 'disabled',
        PRIORITY: 404,
        ORDER   : 6,
        TYPE    : 'context'
    },
    STATUS_COUNT              : 6,
    CODE_TO_KEY               : {
        0                       : 'OK',
        1                       : 'WARNING',
        2                       : 'CRITICAL',
        3                       : 'UNKNOWN',
        4                       : 'MISSING_DATA',
        5                       : 'SHINKEN_INACTIVE',
        NOTHING                 : 'NOTHING',
        ACKNOWLEDGED            : 'ACKNOWLEDGED',
        'PARTIAL-ACKNOWLEDGED'  : 'PARTIAL_ACKNOWLEDGED',
        'INHERITED-ACKNOWLEDGED': 'INHERITED_ACKNOWLEDGED',
        DOWNTIME                : 'DOWNTIME',
        'PARTIAL-DOWNTIME'      : 'PARTIAL_DOWNTIME',
        'INHERITED-DOWNTIME'    : 'INHERITED_DOWNTIME',
        FLAPPING                : 'FLAPPING',
        'PARTIAL-FLAPPING'      : 'PARTIAL_FLAPPING',
        DISABLED                : 'DISABLED'
    },
    NAME_TO_CODE              : {
        ok      : 0,
        warning : 1,
        critical: 2,
        unknown : 3
    },
    LIST_CONTEXT_WIDGET_DETAIL: {
        0: 'NOTHING',
        1: 'ACKNOWLEDGED',
        2: 'FLAPPING',
        3: 'DOWNTIME'
    },
    TYPE                      : {
        STATUS : 'status',
        CONTEXT: 'context'
    }
    
};
GS.TOOLS                                 = GS.TOOLS || {};
var SHINKEN_GRID                         = {};
SHINKEN_GRID.CONST                       = {
    PARAM        : {
        GRID     : {
            SHINKEN_GRID_UUID              : "shinken_grid_uuid",
            TYPE                           : "type",
            GRID_ELEMENTS                  : "grid_elements",
            ORDERING                       : "ordering",
            TILES_MAX_X                    : "nb_tiles_in_width",
            TILES_MAX_Y                    : "nb_tiles_in_height",
            SEPARATION_GRID_ELEMENT_MIN    : "separation_grid_element_min",
            SEPARATION_GRID_ELEMENT_MAX    : "separation_grid_element_max",
            SEPARATION_GRID_ELEMENT_PERCENT: "separation_grid_element_percent",
            LAYOUTS                        : "layouts",
            RESIZE_HEIGHT                  : "resize_height",
            ZOOM_PERCENT_FOR_WIDGET        : "zoom_percent_for_widget"
        },
        GRID_CELL: {
            POSITION_X : "position_x",
            POSITION_Y : "position_y",
            HEIGHT     : "height",
            WIDTH      : "width",
            UUID       : "uuid",
            CONTENT    : "content",
            INDEX_LABEL: "index_label",
            INDEX      : "index",
            MIN_WIDTH  : 2,
            MIN_HEIGHT : 1
        },
        EVENT    : {
            FOCUSED_WIDGET           : "focused_widget__20240816",
            GRIDS_UUID               : "grids_uuid",
            GRID_OBJECT              : "grid_object",
            GRID_UUID                : "grid_uuid",
            GRID_CELLS_OBJECT        : "grid_cells_object",
            GRID_CELLS_UUID          : "grid_cells_uuid",
            GRID_LIST_CELL_OBJECT    : "grid_list_cell_object",
            GRID_LIST_CELL_UUID      : "grid_list_cell_uuid_param",
            GRID_LIST_CELL_INDEXES   : "grid_list_cell_indexes",
            GRID_CELL_OBJECT         : "grid_cell_object",
            GRID_CELL_UUID           : "grid_cell_uuid_param",
            GRID__LAYOUTS__CHILD_NAME: "grid__layouts__child_name",
            ADD_DIRECTLY_TO_GRID     : "add_directly_to_grid"
        }
    },
    SPECIAL_VALUE: {
        SEPARATION_GRID_ELEMENT_MAX_UNLIMITED: "unlimited",
        ALL                                  : "all"
    }
};
WINDOW.ElementGroup           = function ( name ) {
    this.init( name );
};
WINDOW.ElementGroup.prototype = {
    init                              : function ( name ) {
        this.initContents();
        this.initCounters();
        this.initPhase();
        this.active_window = null;
        this.name          = GS.TOOLS.STRING.escapeBackslash( name );
    },
    initWindows                       : function () {
    },
    setActiveWindow                   : function ( window_name ) {
        var _current;
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            _current = this.contents[ i ];
            _current.setActive( _current.getName() === window_name );
            if ( _current.isActive() ) {
                this.active_window = _current;
                if ( _current.hasProperties() ) {
                    MANAGER.ListenerEventManager.afterAction( MANAGER.CONST.AFTER_ACTION.UPDATE_VIEW_ON_WINDOW_PROPERTIES, window_name );
                }
            }
        }
        this.setPhase( window_name );
        this._doExtraActionAfterSetActiveWindow();
    },
    getActiveWindow                   : function () {
        if ( !this.active_window ) {
            for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
                if ( this.contents[ i ].isActive() ) {
                    this.active_window = this.contents[ i ];
                    break;
                }
            }
        }
        return this.active_window;
    },
    clickOnWindow                     : function ( window_name ) {
        var _active_window = this.getActiveWindow();
        if ( _active_window && _active_window.getName() === window_name ) {
            return false;
        }
        var _current_window = this.getWindowByName( window_name );
        if ( _current_window && !_current_window.isClickable() ) {
            return false;
        }
        this.setActiveWindow( window_name );
        return true;
    },
    _doExtraActionAfterSetActiveWindow: function () {
    },
    getWindowByName                   : function ( window_name ) {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            if ( this.contents[ i ].getName() === window_name ) {
                return this.contents[ i ];
            }
        }
        return null;
    },
    
    setParentCounter          : function ( parent ) {
        
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].setParentCounter( parent );
        }
    },
    setContentDomElementTarget: function ( window_name, to_set ) {
        var _to_return = this.getWindowByName( window_name );
        this.getWindowByName( window_name ).setContentDomElementTarget( to_set );
        return _to_return;
    },
    hasProblems               : function ( window_name ) {
        return this.getWindowByName( window_name ).hasProblems();
    },
    setVisibilityWindowState  : function ( to_set, window_name ) {
        var _window = this.getWindowByName( window_name );
        if ( _window ) {
            _window.setVisibilityState( to_set );
            _window.doActionAfter( "set_visibility_state" );
        }
    },
    pulsateElementIfNotActive : function ( window_name ) {
        if ( this.getActiveWindow().getName() !== window_name ) {
            SERVICE.DOM.askAddClass( this.getElementByName( window_name ).dom_element, 'gs-pulsate', 2000 );
        }
    },
    getDataToSave             : function () {
        return this.getActiveWindow().getDataToSave();
    },
    getUrlToSave              : function () {
        return this.getActiveWindow().getUrlToSave();
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW.ElementGroup, GS.OBJECT.GsObjectContainerHtml );
GS.TOOLS.CLASS.addPrototype( WINDOW.ElementGroup, GS.OBJECT.CounterInterface );
GS.TOOLS.CLASS.addPrototype( WINDOW.ElementGroup, GS.OBJECT.PhaseInterface );
WINDOW.Element                                 = function ( name, dom_element, is_menu ) {
    this.__class_name__ = "WINDOW.Element";
    this.name           = name;
    this.dom_element    = dom_element;
    this.is_menu        = !!is_menu;
    this.init();
};
WINDOW.Element.prototype                       = {
    init                      : function () {
        this.initCounters();
    },
    initDomElement            : function () {
    },
    getName                   : function () {
        return this.name;
    },
    getLabel                  : function () {
        return this.label || this.name;
    },
    getUUID                   : function () {
        return this.id;
    },
    setHasRequired            : function ( to_set ) {
        if ( to_set ) {
            this.dom_element.querySelector( ".gs-required-field" ).classList.remove( "gs-hidden" );
        }
    },
    setActive                 : function ( to_set ) {
        this.is_active = to_set;
        if ( this.getDomElement() ) {
            if ( this.is_active ) {
                this.dom_element.classList.add( "gs-active" );
                this.dom_element_target.classList.remove( "gs-hidden" );
            }
            else {
                this.dom_element.classList.remove( "gs-active" );
                this.dom_element_target.classList.add( "gs-hidden" );
            }
        }
    },
    isActive                  : function () {
        return this.is_active;
    },
    setDisabled               : function ( to_set ) {
        this.is_disabled = to_set;
        SERVICE.DOM.addOrRemoveClasses( this.dom_element, this.is_disabled, "gs-disabled" );
    },
    isClickable               : function ( to_set ) {
        if ( this.is_disabled ) {
            return false;
        }
        switch ( this.visibility_state ) {
            case GS.CONST.VISIBILITY_STATE.HIDDEN:
            case GS.CONST.VISIBILITY_STATE.DISABLED:
            case GS.CONST.VISIBILITY_STATE.LOCKED:
            case GS.CONST.VISIBILITY_STATE.TOTALLY_FORM_EXCLUDE:
                return false;
        }
        return true;
    },
    hasProperties             : function () {
        return false;
    },
    setContentDomElementTarget: function ( to_set ) {
        this.content_dom_element_target = to_set;
        SERVICE.DOM.addElementToAfterEmpty( to_set, this.dom_element_target );
    },
    hasProblems               : function ( window_name ) {
        return !!(this.hasError() || this.hasWarning());
    },
    updateCounter             : function ( name, value ) {
        this.counters[ name ].update( "counter", value );
    },
    getDataToSave             : function () {
        return [];
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW.Element, GS.OBJECT.CounterInterface );
GS.TOOLS.CLASS.addPrototype( WINDOW.Element, GS.OBJECT.GsObjectHtml );
WINDOW.ElementWithProperties           = function ( name, dom_element, is_menu ) {
    this.__class_name__ = "WINDOW.ElementWithProperties";
    
    this.name        = name;
    this.dom_element = dom_element;
    this.is_menu     = !!is_menu;
    this.init();
};
WINDOW.ElementWithProperties.prototype = {
    hasProperties: function () {
        return true;
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW.ElementWithProperties, WINDOW.Element );
