"use strict";
var SHINKEN_VALIDATION                    = {};
SHINKEN_VALIDATION.CONST                  = {
    BOOLEAN: {
        _KEY: "boolean"
    },
    COLOR  : {
        CSS: {
            _KEY : "color_css_valid",
            REGEX: /[";']/
        }
    },
    LIST   : {
        INCLUDE_IN: "list_include_in"
    },
    NUMBER : {
        FLOAT_POSITIVE                       : "float_positive",
        INTEGER_BETWEEN                      : "integer_between",
        INTEGER_POSITIVE                     : "integer_positive",
        INTEGER_POSITIVE_AND_SMALLER_THAN_MAX: "integer_positive_and_smaller_than_max",
        MAX                                  : "maximum"
    },
    STRING : {
        NOT_EMPTY          : "string_not_empty",
        DONT_HAVE_FORBIDDEN: "dont_have_forbidden",
        IS_STRING          : "is_string",
        MAX_LENGTH         : "max_length"
    },
    OTHERS : {
        DEFINE_STRING_OR_INTEGER_POSITIVE                     : "define_string_or_integer_positive",
        DEFINE_STRING_OR_INTEGER_POSITIVE_AND_SMALLER_THAN_MAX: "define_string_or_integer_positive_and_smaller_than_max"
    }
};
var GS                                    = GS || {};
GS.DOM                                    = GS.DOM || {};
GS.MODAL                                  = GS.MODAL || {};
GS.NAVIGATOR                              = GS.NAVIGATOR || {};
GS.PAGE                                   = GS.PAGE || {};
GS.CALLBACK                               = GS.CALLBACK || {};
GS.TOOLS                                  = GS.TOOLS || {};
GS.TOOLS.ARRAY                            = GS.TOOLS.ARRAY || {};
GS.OBJECT                                 = GS.OBJECT || {};
GS.OBJECT.CONST                           = GS.OBJECT.CONST || {};
GS.OBJECT.CONST.EVENT_PARAM               = {
    PARENT_PARAMS_OBJECT: "parent___params_object"
};
GS.ELEMENT                                = GS.ELEMENT || {};
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
GS.CONST.CONFIGURATION                    = {
    ELEMENT_UNIQUE_ADDRESS_BEHAVIOUR: {
        DUPLICATED_ACCEPTED: "duplicated_accepted",
        WARNING_DISPLAYED  : "warning_displayed",
        ERROR_DISPLAYED    : "error_displayed",
        SAVE_FORBIDDEN     : "save_forbidden"
    }
};
GS.TOOLS.buildLinkDomElementDependIfAdmin = function ( link, id, label, _class, tooltip ) {
    if ( MANAGER.__instance_element_distributor.current_user.is_admin && link && id ) {
        return GS.TOOLS.buildLinkDomElement( link, id, label, _class, tooltip );
    }
    if ( !_class ) {
        _class = "title gs-space";
    }
    var _to_return = SERVICE.DOM.createElement( 'span', { class: _class }, label );
    SERVICE.DOM.addTooltip( _to_return, tooltip );
    return _to_return;
};
GS.TOOLS.buildLinkDomElement              = function ( link, id, label, _class, tooltip ) {
    var _href = "/elements/" + link + '/' + id;
    if ( !_class ) {
        _class = "title gs-link gs-space";
    }
    var _to_return = SERVICE.DOM.createElement( 'a', { class: _class, href: _href, draggable: 'false', target: "_blank", onclick: "MANAGER.EventManager.mutePropagation(event)" }, '<span class="gs-tag-label">' + label + '</span>' );
    SERVICE.DOM.addTooltip( _to_return, tooltip );
    return _to_return;
};
GS.TOOLS.buildLinkShinkenElement          = function ( element, label, _class, tooltip ) {
    var _uuid = element.uuid;
    if ( element.isNew() ) {
        _uuid += '?new=1';
    }
    if ( !label ) {
        label = element.getName();
    }
    return GS.TOOLS.buildLinkDomElementDependIfAdmin( element.getType(), _uuid, label, _class, tooltip );
};
String.prototype.startsWith               = String.prototype.startsWith || function ( pattern ) {
    return this.indexOf( pattern ) === 0;
};
String.prototype.endsWith                 = String.prototype.endsWith || function ( pattern ) {
    var d = this.length - pattern.length;
    return d >= 0 && this.lastIndexOf( pattern ) === d;
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
GS.TOOLS.Link                             = (function ( self ) {
    self.parse_to_link = function ( item_type, item_name, item_uuid ) {
        return "<a href='/elements/" + item_type + "/" + item_uuid + "' class='gs-link'>" + item_name + "</a>";
    };
    return self;
})( GS.TOOLS.Link || {} );
var GS                                    = GS || {};
GS.OBJECT                                 = GS.OBJECT || {};
GS.OBJECT.COLLAPSE                        = {
    PARAM: {
        NAME                   : "collapse_folder__name",
        NAME_FOR_HIDDEN_PREVIEW: "collapse_folder_name_for_hide_preview",
        IS_OPEN                : "is_open"
    }
};
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
var SHINKEN_LIST                          = SHINKEN_LIST || {};
SHINKEN_LIST.CONST                        = SHINKEN_LIST.CONST || {
    MASS_ACTION     : {
        NAME          : 'mass-action',
        WORK_AREA_NAME: 'mass-action-work-area'
    },
    STRUCTURE_FORMAT: {
        GENERIC        : "GENERIC",
        WITH_HEADER_FIX: "WITH_HEADER_FIX"
    },
    TYPE            : {
        CHECK_IN_HOST       : "CHECK_IN_HOST",
        MASS_CHANGE_SUM_FULL: "MASS_CHANGE_SUM_FULL",
        DATA_PROP           : "DATA_PROP"
    },
    FILTER          : {
        HAS_CHILDREN  : "**SHINKEN_HAS_CHILDREN**",
        ALL           : "___ALL___",
        EMPTY         : "___EMPTY___",
        NOT_EMPTY     : "___NOT_EMPTY___",
        VISUAL        : "VISUAL",
        AUDIO         : "AUDIO",
        STATUS        : {
            DISABLED    : -1,
            OFF         : 0,
            ON          : 1,
            HAS_CHILDREN: 2
        },
        VIEW_BEHAVIOUR: {
            DRAFT   : "draft_phase",
            RUNNING : "running_phase",
            CREATING: "creating_phase"
        },
        TYPE          : {
            HIDDEN                    : "hidden",
            SINGLE_SELECT             : "select-single",
            STRING_INPUT              : "input_string",
            INPUT_STRING_ARRAY        : "input_string_array",
            STRING_INPUT_WITH_DROPDOWN: "input-string-with-dropdown"
        }
    },
    SELECTION       : {
        STATUS: {
            DISABLED: -1,
            OFF     : 0,
            ON      : 1
        }
    },
    PARAM           : {
        PAGINATION_PARENT_NAME: "pagination_parent_name",
        SET_UUID              : "shinken_list_set_uuid",
        FILTERS_UUID          : "shinken_list_filters_uuid",
        FILTER_UUID           : "shinken_list_filter_uuid",
        LINES_UUID            : "shinken_list_lines_uuid",
        LINES_OBJECT          : "shinken_list_lines_object",
        LINE_UUID             : "shinken_list_line_uuid",
        CELL_UUID             : "shinken_list_cell_uuid"
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
GS.CARTO                                  = {};
GS.CARTO.CONST                            = {
    NAME    : "name",
    URL     : "url",
    IS_VALID: "is_valid"
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
GS.OBJECT.GsObjectForContainer            = function ( uuid ) {
    this.__class_name__ = "GS.OBJECT.GsObjectForContainer";
    this.uuid           = uuid;
    this.data_to_save   = {};
};
GS.OBJECT.GsObjectForContainer.prototype  = {
    getUUID           : function () {
        return this.uuid;
    },
    getDataToSave     : function () {
        return this.data_to_save;
    },
    getDataToSaveByKey: function ( key ) {
        return this.data_to_save[ key ];
    },
    setDataToSaveByKey: function ( key, value ) {
        this.data_to_save[ key ] = value;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.GsObjectForContainer, GS.OBJECT.GsObject );
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
    }
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
GS.OBJECT.ConfirmationPopupInterface           = function () {
};
GS.OBJECT.ConfirmationPopupInterface.prototype = {
    computeConfirmationPopup                 : function ( name, event_name_validation_popup ) {
        const instance = GS.OBJECT.ConfirmationPopup_V3.getInstance();
        instance.reset( name, event_name_validation_popup );
        this.updateComputeConfirmationPopupValidButton();
        instance.setTitle( this.buildHtmlTitleDeletePopup() );
        instance.setContent( this.buildHtmlDeleteConfirmationPopup() );
        instance.setController( this.getController() );
        instance.computeHtml();
        instance.show();
    },
    updateComputeConfirmationPopupValidButton: function () {
    },
    buildHtmlTitleDeletePopup                : function () {
        return _( "confirmation_popup.deletable_content.title", [DICTIONARY_COMMON_UI] );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ConfirmationPopupInterface, GS.OBJECT.GsObjectHtml );
GS.SERVER                               = {};
GS.SERVER.CONST                         = {
    NAME              : "name",
    LIST_SHINKEN_CARTO: "shinken_cartos"
};
GS.ELEMENT.USER                         = {
    PARAM : {
        ACL                                                          : {
            KEY             : "acl",
            MAKE_DOWNTIME   : "make_downtime",
            MAKE_ACKNOWLEDGE: "make_acknowledge",
            FORCE_RESULT    : "force_result_check",
            RECHECK_NOW     : "force_retry_check",
            SLA_VIEW        : "sla_view",
            HISTORIC        : {
                SHOW             : "in_tab_history",
                SHOW_BOTH        : "history_sla",
                SHOW_HISTORY_ONLY: "history",
                SHOW_SLA_ONLY    : "sla",
                HISTORIC_RANGE   : "show_history_range",
                SLA_RANGE        : "show_sla_range"
            },
            SHARE           : {
                4: "read",
                3: "create",
                2: "organize",
                1: "update",
                0: "delete"
            },
            SHARE_PRIVATE   : "share_private",
            SHARE_GROUP     : "share_group",
            SHARE_EVERYBODY : "share_everybody"
        },
        GROUPS                                                       : "groups",
        PREFS                                                        : {
            NAME                   : "prefs",
            DEFAULT_SCREEN         : {
                NAME: "defaultScreen",
                TYPE: "type",
                UUID: "uuid"
            },
            DEFAULT_LIST           : {
                NAME         : "defaultLists",
                ROOT_PROBLEMS: "rootProblems",
                ALL          : "all"
            },
            PANELS                 : {
                NAME: "panels"
            },
            DETAIL_GRAPH_HOST_WIDTH: "detail_graph_host_width",
            DEFAULT_EVENTS_TUB     : {
                NAME: "defaultEventsTub",
                ALL : "all_events"
            },
            HISTORIC_TAB           : {
                NAME               : "historicTab",
                SHOW_OUTPUTS       : "show_historic_outputs",
                COLLAPSE_ALL_OUTPUT: "collapse_all_historic_outputs",
                SIZE_SLA_COLUMNN   : "size_sla_column"
            },
            WEATHER_SERVICE        : {
                NAME         : "weather_service",
                FORM_POSITION: "form_position"
            },
            NOTIFICATION_OF_CHANGE : {
                NAME: "notifications_of_change"
            },
            OTHERS                 : {
                NAME: "others"
            }
        },
        SETTINGS                                                     : {
            FIELD            : "settings",
            DEFAULT_URL      : "default_url",
            NAME_DEFAULT_VIEW: "name_default_view"
        },
        STATUS                                                       : "status",
        UI                                                           : "ui",
        USER_NAME                                                    : "userName",
        UUID                                                         : "uuid",
        EXISTS                                                       : "user_exists",
        VERSION                                                      : "version",
        VERSION_FULL                                                 : "version_full",
        SHINKEN_VERSION                                              : "shinken_version",
        SHINKEN_VERSION_TOOLTIP                                      : "shinken_version_tooltip",
        SHINKEN_VERSION_SHORT                                        : "shinken_short_version",
        TIME_ZONE_BACKEND                                            : "time_zone_backend",
        EVENT_CONTAINER_DAY_KEEP_DATA                                : "event_container_day_keep_data",
        EVENTS_EXPORT_MAX_RETRY                                      : "events_export_max_retry",
        EVENTS_CSV_EXPORT_LIMIT                                      : "events_csv_export_limit",
        DEFAULT_NOTIFICATIONS_SETTINGS                               : "default_notifications_settings",
        DEFAULT_NOTIFICATIONS_SETTINGS__USERS__SOUND__VOLUME_PERCENT : "default_notifications_settings__users__sound__volume_percent",
        DEFAULT_NOTIFICATIONS_SETTINGS__USERS__VISUAL__BLINK__ENABLED: "default_notifications_settings__users__visual__blink__enabled",
        SYNTHESIS_REPORT_ENABLED                                     : "synthesis_report_enabled",
        TILES_FORMAT                                                 : {
            KEY        : "tiles_format",
            KEY_BACKEND: "tiles_background",
            TYPE       : {
                DEFAULT   : 0,
                CONTEXT_UP: 1,
                STATUS_UP : 2
            },
            BACKEND_KEY: {
                DEFAULT   : "context_and_status",
                CONTEXT_UP: "context",
                STATUS_UP : "status"
            }
            
        },
        ARCHITECTURE                                                 : "architecture_map",
        IS_ADMIN                                                     : "is_admin",
        HAS_EVENT_TUB_MODULE                                         : "has_event_tub_module",
        HAS_WEATHER_SERVICE_MODULE                                   : "has_weather_service_module",
        HAS_ARCHITECTURE_MODULE                                      : "has_architecture_module",
        KNOWN_MODULES                                                : "known_modules"
    },
    SAVING: {
        TIMER_DELAY: 2000
    },
    STATUS: {
        OFF: 0,
        ON : 1
    }
};
GS.SCREEN                               = {
    TYPE      : {
        HIVE             : "hive",
        LIST             : "list",
        LIST_ROOT_PROBLEM: "list-root-problem",
        EVENT            : "event",
        SERVICE_WEATHER  : "service_weather",
        VIEW360          : "360",
        IMPACTS          : "impacts",
        REPORTING        : "reporting",
        REPORTING_WEB    : "reporting-web",
        DASHBOARD        : "dashboard",
        IFRAME           : "iframe"
    },
    FOUND_ITEM: {
        INIT         : 0,
        FOUND        : 1,
        NOT_FOUND    : 2,
        FOUND_RECHECK: 3,
        DELETED      : 4
    }
};
GS.OBJECT.VIEW                          = {
    PARAM    : {
        NAME              : "name",
        NB_ERRORS         : "nb_errors",
        NB_WARNINGS       : "nb_warnings",
        NB_SHARED_LINK    : "nb_shared_links",
        GROUPS_SHARES_UUID: "groups_shares_uuid",
        UUID              : "uuid",
        FOUND             : "found",
        TYPE              : "type",
        IS_ROOT_PROBLEM   : "is_root_problem",
        NOTIFICATIONS     : "notifications",
        VIEW_BEHAVIOUR    : "view_behaviour_phase",
        USERS             : {
            _KEY          : "users",
            OWNER         : "owner_user",
            PREVIOUS_OWNER: "previous_owner_user",
            CREATOR       : "creator_user"
        },
        EXTERNAL_LINKS    : "external_links",
        OWNER             : {
            _KEY : "owner",
            PARAM: {
                NAME: {
                    _KEY: "name"
                },
                UUID: {
                    _KEY: "uuid"
                }
            }
        }
    },
    USER     : {
        NAME: "user_name",
        UUID: "user_uuid"
    },
    BEHAVIOUR: {
        PARAM: {
            PHASE         : "phase",
            PHASE_PREVIOUS: "previous_phase",
            LAST_UPDATE   : "last_update"
        },
        PHASE: {
            RUNNING: "running_phase",
            DELETED: "deleted_phase",
            DRAFT  : "draft_phase",
            CREATE : "creating_phase"
        }
    },
    HISTORY  : {
        LIST: {
            HEADER: {
                DATE_HISTORY: "date_history",
                USER_HISTORY: "user_history",
                TEXT_HISTORY: "text_history"
            }
        }
    }
};
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
var common_ui_en                        = {
    "common"             : {
        "clone_tag"             : " (copy)",
        "error"                 : "Error",
        "false"                 : "False",
        "load_in_progress"      : "Loading...",
        "not_valid_format_value": "Bad format key : <span class='gs-data-user'>{0}</span>",
        "true"                  : "True",
        "unknown_key"           : "Unknown key : <span class='gs-data-user'>{0}</span>",
        "unknown_user"          : "Unknown user : <span class='gs-highlight-data-user'>{0}</span>",
        "unknown_value"         : "Unknown value : <span class='gs-highlight-data-user'>{0}</span>",
        "warning"               : "Warning",
        "widget_not_found"      : "Element does not exist"
    },
    "communication"      : {
        "contact_admin_shinken": "Please refresh the page and contact your administrator if the problem persists.",
        "no_backend_response"  : "the server doesn't respond",
        "unknown_call"         : "Call unknown by server"
    },
    "confirmation_popup" : {
        "cancel_button"    : "Cancel",
        "deletable_content": {
            "grid" : {
                "title"       : "Delete widgets",
                "title_column": "Name of widget",
                "type_column" : "Type of widget"
            },
            "title": "Deletion"
        },
        "delete_button"    : "Delete",
        "validate_button"  : "Confirm"
    },
    "copy_service"       : {
        "copyExternalLinkSuccess": "Link copied",
        "copyFail"               : "Copy failed",
        "copySuccess"            : "Copied to clipboard",
        "tooltip_edition"        : "Click to edit the property in Cfg format",
        "tooltip_text_copy"      : "Click to copy to clipboard"
    },
    "date_time"          : {
        "None"         : "each month",
        "agoMoment"    : "ago",
        "april"        : "April",
        "august"       : "August",
        "day"          : "day",
        "days"         : "days",
        "december"     : "December",
        "enabled"      : "Enabled",
        "february"     : "February",
        "friday"       : "Friday",
        "hour"         : "hour",
        "hours"        : "hours",
        "inMoment"     : "In",
        "january"      : "January",
        "july"         : "July",
        "june"         : "June",
        "label_week_-1": "last",
        "label_week_-2": "before last",
        "label_week_-3": "before before last",
        "label_week_-4": "before before before last",
        "label_week_-5": "before before before before last",
        "label_week_1" : "first",
        "label_week_2" : "second",
        "label_week_3" : "third",
        "label_week_4" : "forth",
        "label_week_5" : "fifth",
        "march"        : "March",
        "may"          : "May",
        "minute"       : "minute",
        "minutes"      : "minutes",
        "monday"       : "Monday",
        "month"        : "month",
        "months"       : "months",
        "november"     : "November",
        "now"          : "Now",
        "october"      : "October",
        "saturday"     : "Saturday",
        "second"       : "second",
        "seconds"      : "seconds",
        "september"    : "September",
        "short_day"    : "j",
        "short_days"   : "j",
        "short_hour"   : "h",
        "short_hours"  : "h",
        "short_minute" : "m",
        "short_minutes": "m",
        "short_month"  : "m",
        "short_months" : "m",
        "short_second" : "s",
        "short_seconds": "s",
        "short_week"   : "w",
        "short_weeks"  : "w",
        "short_year"   : "y",
        "short_years"  : "y",
        "sunday"       : "Sunday",
        "thursday"     : "Thursday",
        "tuesday"      : "Tuesday",
        "wednesday"    : "Wednesday",
        "week"         : "week",
        "weeks"        : "weeks",
        "year"         : "year",
        "years"        : "years"
    },
    "default_view_button": {
        "tooltipDefaultViewBtn"      : "Define current view as default view",
        "tooltipIsAlreadyDefaultView": "This view is already the default view",
        "tooltipIsEditOnDefaultView" : "A view in edit mode cannot be set as default view"
    },
    "filter"             : {
        "error_level"                           : {
            "CRITICAL" : "CRITICAL",
            "ERROR"    : "ERROR",
            "WARNING"  : "WARNING",
            "___ALL___": "--All--"
        },
        "message_placeholder"                   : "Enter a name",
        "message_placeholder_item_type"         : "Enter a type",
        "message_placeholder_visualisation_name": "Enter a visualisation name"
    },
    "form"               : {
        "action_button": {
            "cancel": "Cancel",
            "submit": "Submit"
        }
    },
    "gap_time"           : {
        "backendOutSynch"     : "Backend local time has gap of more than 30 seconds",
        "backendOutSynchShort": "Time gap"
    },
    "grid"               : {
        "mode_edition": {
            "form_visual": {
                "overlay_frame"          : {
                    "create_space": "Offset of <span class='gs-data-user'>{0}</span>",
                    "delete_space": "Deletion of <span class='gs-data-user'>{0}</span> line(s)"
                },
                "tooltip_on_hover_widget": "Click to see the widget configuration"
            },
            "form_widget": {
                "separator_widget": {
                    "title"          : "Separator widget",
                    "height"         : {
                        "label": "Height",
                        "input": {
                            "placeholder": "Enter a height"
                        }
                    },
                    "width"          : {
                        "label" : "Width",
                        "radios": {
                            "all": "Full width"
                        },
                        "input" : {
                            "placeholder": "Enter a width"
                        }
                    },
                    "content"        : {
                        "layout": {
                            "information_to_display": {
                                "left_area" : {
                                    "displayed"    : {
                                        "label" : "Left part",
                                        "radios": {
                                            "false": "Hidden",
                                            "true" : "Displayed"
                                        }
                                    },
                                    "width_percent": {
                                        "label": "Percentage of the width  <span class=\"gs-extra-label gs-between-space-parenthensis\">% between 0 and 100</span>",
                                        "input": {
                                            "placeholder": "Enter a percentage"
                                        }
                                    }
                                },
                                "right_area": {
                                    "displayed"    : {
                                        "label" : "Right part",
                                        "radios": {
                                            "true" : "Displayed",
                                            "false": "Hidden"
                                        }
                                    },
                                    "width_percent": {
                                        "label": "Percentage of the width  <span class='gs-extra-label gs-between-space-parenthensis'>% between 0 and 100</span>",
                                        "input": {
                                            "placeholder": "Enter a percentage"
                                        }
                                    }
                                },
                                "title_area": {
                                    "label"            : {
                                        "label": "Name",
                                        "input": {
                                            "placeholder": "Enter a title"
                                        }
                                    },
                                    "font_zoom_percent": {
                                        "label": "Text zoom   <span class='gs-extra-label gs-between-space-parenthensis'>% between 0 and 100</span>",
                                        "input": {
                                            "placeholder": "Enter a percentage"
                                        }
                                    },
                                    "text_color"       : {
                                        "label": "Text color",
                                        "input": {
                                            "placeholder": "Enter a color"
                                        }
                                    },
                                    "text_align"       : {
                                        "label" : "Text alignment",
                                        "radios": {
                                            "center": "Middle",
                                            "left"  : "Left",
                                            "right" : "Right"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "collapse_folder": {
                        "cf_dimensions": "Dimensions",
                        "cf_area"      : "Areas display",
                        "cf_left_area" : "Left area",
                        "cf_right_area": "Right area",
                        "cf_title_area": "Label area"
                    }
                },
                "title_widget"    : {
                    "title"          : "Title widget",
                    "height"         : {
                        "label": "Height",
                        "input": {
                            "placeholder": "Enter a height"
                        }
                    },
                    "width"          : {
                        "label" : "Width",
                        "radios": {
                            "all": "Full width"
                        },
                        "input" : {
                            "placeholder": "Enter a width"
                        }
                    },
                    "content"        : {
                        "layout": {
                            "information_to_display": {
                                "title_area": {
                                    "label"            : {
                                        "label": "Name",
                                        "input": {
                                            "placeholder": "Enter a title"
                                        }
                                    },
                                    "text_color"       : {
                                        "label": "Text color",
                                        "input": {
                                            "placeholder": "Enter a color"
                                        }
                                    },
                                    "text_align"       : {
                                        "label" : "Text alignment",
                                        "radios": {
                                            "center": "Middle",
                                            "left"  : "Left",
                                            "right" : "Right"
                                        }
                                    },
                                    "font_zoom_percent": {
                                        "label": "Text area <span class='gs-extra-label gs-between-space-parenthensis'>% between 0 and 100</span>",
                                        "input": {
                                            "placeholder": "Select a percentage"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "collapse_folder": {
                        "cf_dimensions": "Dimensions",
                        "cf_title_area": "Label area"
                    }
                },
                "weather_widget"  : {
                    "title"            : "Weather widget",
                    "height"           : {
                        "label": "Height",
                        "input": {
                            "placeholder": "Enter a height"
                        }
                    },
                    "width"            : {
                        "label" : "Width",
                        "radios": {
                            "all": "Full width"
                        },
                        "input" : {
                            "placeholder": "Enter a width"
                        }
                    },
                    "content"          : {
                        "item"  : {
                            "default_label_selector": "To be defined",
                            "or_label"              : "or",
                            "label"                 : {
                                "item_name"         : "Item name",
                                "item_uuid"         : "UUID",
                                "visualisation_name": "Visualization name"
                            }
                        },
                        "layout": {
                            "background"            : {
                                "label" : "Background",
                                "radios": {
                                    "context_and_status"       : "Context and status",
                                    "context_then_status"      : "Context then status",
                                    "default_label_selector"   : "Select a display",
                                    "no_background"            : "No background",
                                    "only_status"              : "Status only",
                                    "status_context_from_webui": "Forced to Visualization Interface's configuration"
                                }
                            },
                            "information_to_display": {
                                "left_area"     : {
                                    "icon_type": {
                                        "label" : "Icon type",
                                        "radios": {
                                            "context_then_status"      : "Context then status",
                                            "default_label_selector"   : "Select a display",
                                            "only_status"              : "Status only",
                                            "quality_service_icon"     : "Service quality icon",
                                            "sla_tendency"             : "SLA trend",
                                            "status_context_from_webui": "Forced to Visualization Interface's configuration",
                                            "status_then_context"      : "Status then context"
                                        }
                                    }
                                },
                                "top_right_area": {
                                    "displayed": {
                                        "label" : "At top right",
                                        "radios": {
                                            "default_label_selector": "Select a display",
                                            "false"                 : "Hidden",
                                            "true"                  : "Displayed"
                                        }
                                    },
                                    "icon_type": {
                                        "label" : "Icon type",
                                        "radios": {
                                            "context_then_status" : "Context then status",
                                            "only_status"         : "Status only",
                                            "quality_service_icon": "Service quality icon",
                                            "sla"                 : "SLA trend",
                                            "status_then_context" : "Status then context"
                                        }
                                    }
                                },
                                "sla_area"      : {
                                    "displayed": {
                                        "label" : "SLA",
                                        "radios": {
                                            "false": "Hidden",
                                            "true" : "Displayed"
                                        }
                                    },
                                    "show_icon": {
                                        "label" : "Display the icon",
                                        "radios": {
                                            "false": "Hidden",
                                            "true" : "Displayed"
                                        }
                                    }
                                },
                                "name_area"     : {
                                    "font_zoom_percent"    : {
                                        "label": "Text zoom   <span class='gs-extra-label gs-between-space-parenthensis'>% between 0 and 100</span>",
                                        "input": {
                                            "placeholder": "Enter a percentage"
                                        }
                                    },
                                    "nb_lines_max"         : {
                                        "label": "Maximum number of lines",
                                        "input": {
                                            "placeholder": "Enter a number"
                                        }
                                    },
                                    "property_used_as_name": {
                                        "label" : "Name",
                                        "radios": {
                                            "item_name"         : "Item name",
                                            "visualisation_name": "Visualization name"
                                        }
                                    },
                                    "vertical_align"       : {
                                        "label" : "Vertical alignment",
                                        "radios": {
                                            "bottom": "Bottom",
                                            "middle": "Middle",
                                            "top"   : "Top"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "collapse_folder"  : {
                        "cf_dimensions"     : "Dimensions",
                        "cf_display"        : "Display",
                        "cf_area"           : "Areas display",
                        "cf_left_area"      : "Left area",
                        "cf_sla_area"       : "SLA area",
                        "cf_top_right_area" : "Top right area",
                        "cf_name_area"      : "Name area",
                        "cf_shinken_element": "Choose the item"
                    },
                    "cf_preview_widget": {
                        "item_name"         : "Item name",
                        "visualisation_name": "Element visualization name's"
                    }
                }
            }
        }
    },
    "history"            : {
        "action": {
            "creation" : "Creation.",
            "delete"   : "Deleted.",
            "new_owner": "Change of owner <span class='gs-history-user'>{0}</span>.",
            "restore"  : "Restoration.",
            "update"   : "Saving."
        },
        "title" : {
            "action": "Action",
            "date"  : "Date",
            "user"  : "User"
        }
    },
    "html_structure"     : {
        "unparsable": "The value of the field ( HTML invalid ) has corrupted the display.<br>Saving a valid value of the field will correct the display."
    },
    "json_editor"        : {
        "invalid_json"          : "The JSON structure is invalid, We can only detect the first error <span class='gs-data-user'>(encountered line {0})</span>",
        "invalid_json_ie"       : "The JSON structure is invalid. The nature of the error is not provided by the Internet Explorer browser. <br> You can use another browser (Edge, Firefox or Google Chrome) or an editing tool capable of editing JSON to know the nature of the error.",
        "not_valid_format_value": "The content of the key <span class='gs-data-user'>{0}</span> is not in the correct format",
        "unknown_value"         : "Unknown key : <span class='gs-data-user'>{0}</span>"
    },
    "license"            : {
        "aTrialVersion"        : "a trial version",
        "contactMailSubject"   : "About my licence",
        "contactUs"            : "Contact us",
        "day"                  : "day",
        "errors"               : {
            "cannotUpdateLicense": "Impossible to update the license."
        },
        "exceedBy"             : "exceed by {0}",
        "expired"              : "expired",
        "invalidFormat"        : "invalid format",
        "left"                 : "left",
        "license"              : "License",
        "licenseEndingDate"    : "License ending the {0}",
        "licenseInvalid"       : "INVALID LICENSE",
        "licensePeriod"        : "License period",
        "licenseTypePro"       : "PRO LICENSE",
        "licenseTypeTrial"     : "TRIAL LICENSE",
        "noLicenseKey"         : "No license key",
        "nodesAndLimit"        : "Hosts: {0} / {1}",
        "onServer"             : "on the server",
        "unexpectedError"      : "Unexpected Error",
        "youAreUsingSecondTime": "You are using for the second time",
        "yourLicenseHas"       : "Your license has an"
    },
    "list"               : {
        "header_history": {
            "date_history": "Date",
            "text_history": "Action",
            "user_history": "User"
        }
    },
    "loading_frame"      : {
        "load_in_progress": "Loading..."
    },
    "logout"             : {
        "errors": {
            "cannot_logout": "Impossible to log out."
        }
    },
    "messages"           : {
        "invalid_syntax"       : "Invalid syntax :",
        "no_message_to_display": "No problems found in this tab",
        "tag_error"            : "Errors",
        "tag_warning"          : "Warnings"
    },
    "notification"       : {
        "blink_user_warning"     : "<span class='gs-warning'>Note : </span>visual notifications are disabled in your user profile",
        "no_change"              : "<span class='gs-warning'>Note : </span>there have been no changes since the last refresh",
        "sound_navigator_warning": "<span class='gs-warning'>Remarque : </span>sound cannot be played until the user interacts with the document first<br>Changing your browser settings to solve this problem",
        "sound_user_warning"     : "<span class='gs-warning'>Note : </span>audio notifications are disabled in your user profile"
    },
    "progress_bar"       : {
        "previewing_error_detail_401"    : "The preview was not successful because you do not have the minimum rights to modify this page (401 error). Please contact your administrator.",
        "previewing_failed"              : "Failed preview",
        "previewing_in_progress"         : "Preview in progress...",
        "previewing_succeed"             : "Successfully preview",
        "previewing_succeed_with_error"  : "Preview finished with errors",
        "previewing_succeed_with_warning": "Preview finished with warnings",
        "publishing_in_progress"         : "Publishing in progress...",
        "saving_error_detail_401"        : "The backup was not successful because you do not have the minimum rights to modify this page (401 error). Please contact your administrator.",
        "saving_error_detail_404"        : "The resource was not found (404 error). Please contact your administrator.",
        "saving_failed"                  : "Failed saved",
        "saving_in_progress"             : "Save in progress...",
        "saving_succeed"                 : "<table class='gs-table-container-save-back-message'><tr><td><span>Successfully saved</span></td></tr></table>",
        "saving_succeed_with_warning"    : "<table class='gs-table-container-save-back-message'><tr><td><span>Successfully saved with warnings</span></td></tr></table>",
        "toggle_display_message_label"   : "<span class='gs-show-if-hidden'>See</span><span class='gs-show-if-not-hidden'>Hide</span> details"
    },
    "property"           : {
        "default_label": "By default <span class='gs-between-space-bracket'>{0}</span>"
    },
    "service_weather"    : {
        "add_new_weather_button": {
            "errors": {
                "cannot_create_new_service_weather": "It is not possible to create a new service weather for the moment"
            }
        },
        "generate_at"           : {
            "generation_in_progress": "<span class='gs-note gs-between-space-parenthensis'>in progress...</span>"
        },
        "weathers"              : {
            "default_name": "service weather",
            "errors"      : {
                "cannot_get_weathers": "Impossible to get the service weathers."
            },
            "personal"    : "personal"
        }
    },
    "shinken_list"       : {
        "no_elements": {
            "text_no_elements"             : "No element found",
            "text_no_elements_after_filter": "No element match the filters"
        },
        "sort"       : {
            "decrease": "Descending sort",
            "increase": "Ascending sort",
            "remove"  : "Remove sorting"
        }
    },
    "users"              : {
        "errors": {
            "cannot_get_user_from_backend": "Unable to retrieve the user.",
            "user_doesnt_exist"           : "Please note: the user no longer exists"
        }
    },
    "validation"         : {
        "messages": {
            "char_forbidden"                          : "The character {0} is not allowed in this field.",
            "color_is_invalid"                        : "The text entered does not correspond to a color..",
            "integer_between"                         : "Only integers between {0} and {1} are allowed.",
            "mandatory_field"                         : "Mandatory property.",
            "max_length"                              : "Must be text with a maximum size of {0}",
            "must_be_a_boolean"                       : "The property must be a Boolean.",
            "must_be_positive_integer_or_define_value": "Only positive integers or values: {0}, {1} are allowed.",
            "not_empty_and_max_characters"            : "Cannot be empty and must contain a maximum of 300 letters.",
            "not_in_list"                             : "The value is not included in the possible answers.",
            "string_cant_be_empty"                    : "This field cannot be left empty.",
            "tooltip_no_letter"                       : "Only positive integers are allowed.",
            "tooltip_no_letter_2"                     : "Only whole numbers are allowed."
        }
    },
    "window_group_save"  : {
        "action_button": {
            "apply" : "Apply",
            "cancel": "Cancel"
        }
    }
};
var common_ui_fr                        = {
    "common"             : {
        "clone_tag"             : " (copie)",
        "error"                 : "Erreur",
        "false"                 : "Faux",
        "load_in_progress"      : "Chargement...",
        "not_valid_format_value": "Clé avec un mauvais format : <span class='gs-data-user'>{0}</span>",
        "true"                  : "Vrai",
        "unknown_key"           : "Clé inconnue : <span class='gs-data-user'>{0}</span>",
        "unknown_user"          : "Utilisateur inconnu : <span class='gs-highlight-data-user'>{0}</span>",
        "unknown_value"         : "Valeur inconnue : <span class='gs-highlight-data-user'>{0}</span>",
        "warning"               : "Avertissement",
        "widget_not_found"      : "L'élément n'existe pas"
    },
    "communication"      : {
        "contact_admin_shinken": "Veuillez rafraichir la page et contacter votre administrateur si le problème persiste",
        "no_backend_response"  : "Le serveur ne répond pas",
        "unknown_call"         : "Appel non reconnu par le serveur"
    },
    "confirmation_popup" : {
        "cancel_button"    : "Annuler",
        "deletable_content": {
            "grid" : {
                "title"       : "Supprimer les widgets",
                "title_column": "Nom de widget",
                "type_column" : "Type de widget"
            },
            "title": "Suppression"
        },
        "delete_button"    : "Supprimer",
        "validate_button"  : "Valider"
    },
    "copy_service"       : {
        "copyExternalLinkSuccess": "Lien copié",
        "copyFail"               : "La copie a échoué",
        "copySuccess"            : "Copié dans le presse-papier",
        "tooltip_edition"        : "Cliquer pour éditer la propriété au format Cfg",
        "tooltip_text_copy"      : "Cliquer pour copier dans le presse-papier"
    },
    "date_time"          : {
        "None"         : "chaque mois",
        "agoMoment"    : "Il y a",
        "april"        : "Avril",
        "august"       : "Août",
        "day"          : "jour",
        "days"         : "jours",
        "december"     : "Décembre",
        "enabled"      : "Activé",
        "february"     : "Février",
        "friday"       : "Vendredi",
        "hour"         : "heure",
        "hours"        : "heures",
        "inMoment"     : "Dans",
        "january"      : "Janvier",
        "july"         : "Juillet",
        "june"         : "Juin",
        "label_week_-1": "dernier",
        "label_week_-2": "avant dernier",
        "label_week_-3": "avant avant dernier",
        "label_week_-4": "avant avant avant dernier",
        "label_week_-5": "avant avant avant avant dernier",
        "label_week_1" : "premier",
        "label_week_2" : "deuxième",
        "label_week_3" : "troisième",
        "label_week_4" : "quatrième",
        "label_week_5" : "cinquième",
        "march"        : "Mars",
        "may"          : "Mai",
        "minute"       : "minute",
        "minutes"      : "minutes",
        "monday"       : "Lundi",
        "month"        : "mois",
        "months"       : "mois",
        "november"     : "Novembre",
        "now"          : "Maintenant",
        "october"      : "Octobre",
        "saturday"     : "Samedi",
        "second"       : "seconde",
        "seconds"      : "secondes",
        "september"    : "Septembre",
        "short_day"    : "j",
        "short_days"   : "j",
        "short_hour"   : "h",
        "short_hours"  : "h",
        "short_minute" : "min",
        "short_minutes": "min",
        "short_month"  : "mois",
        "short_months" : "mois",
        "short_second" : "sec",
        "short_seconds": "sec",
        "short_week"   : "sem",
        "short_weeks"  : "sem",
        "short_year"   : "an",
        "short_years"  : "ans",
        "sunday"       : "Dimanche",
        "thursday"     : "Jeudi",
        "tuesday"      : "Mardi",
        "wednesday"    : "Mercredi",
        "week"         : "semaine",
        "weeks"        : "semaines",
        "year"         : "an",
        "years"        : "ans"
    },
    "default_view_button": {
        "tooltipDefaultViewBtn"      : "Définir la vue courante comme vue par défaut",
        "tooltipIsAlreadyDefaultView": "Cette vue est déjà la vue par défaut",
        "tooltipIsEditOnDefaultView" : "Une vue en mode édition ne peut pas être définie comme vue par défaut"
    },
    "filter"             : {
        "error_level"                           : {
            "CRITICAL" : "CRITIQUE",
            "ERROR"    : "ERREUR",
            "WARNING"  : "AVERTISSEMENT",
            "___ALL___": "--Tous--"
        },
        "message_placeholder"                   : "Saisir un nom",
        "message_placeholder_item_type"         : "Saisir un type",
        "message_placeholder_visualisation_name": "Saisir un nom de visualisation"
    },
    "form"               : {
        "action_button": {
            "cancel": "Annuler",
            "submit": "Valider"
        }
    },
    "gap_time"           : {
        "backendOutSynch"     : "L'heure du backend diffère de plus de 30 sec par rapport à votre ordinateur",
        "backendOutSynchShort": "Ecart de temps"
    },
    "grid"               : {
        "mode_edition": {
            "form_visual": {
                "overlay_frame"          : {
                    "create_space": "Décalage de <span class='gs-data-user'>{0}</span> case(s)",
                    "delete_space": "Suppression de <span class='gs-data-user'>{0}</span> ligne(s)"
                },
                "tooltip_on_hover_widget": "Cliquer pour voir la configuration du widget"
            },
            "form_widget": {
                "separator_widget": {
                    "title"          : "Widget séparateur",
                    "height"         : {
                        "label": "Hauteur",
                        "input": {
                            "placeholder": "Saisir une hauteur"
                        }
                    },
                    "width"          : {
                        "label" : "Largeur",
                        "radios": {
                            "all": "Toute la largeur"
                        },
                        "input" : {
                            "placeholder": "Saisir une largeur"
                        }
                    },
                    "content"        : {
                        "layout": {
                            "information_to_display": {
                                "left_area" : {
                                    "displayed"    : {
                                        "label" : "A gauche",
                                        "radios": {
                                            "true" : "Affiché",
                                            "false": "Caché"
                                        }
                                    },
                                    "width_percent": {
                                        "label": "Pourcentage de la largeur <span class=\"gs-extra-label gs-between-space-parenthensis\">% entre 0 et 100</span>",
                                        "input": {
                                            "placeholder": "Saisir un pourcentage"
                                        }
                                    }
                                },
                                "right_area": {
                                    "displayed"    : {
                                        "label" : "A droite",
                                        "radios": {
                                            "true" : "Affiché",
                                            "false": "Caché"
                                        }
                                    },
                                    "width_percent": {
                                        "label": "Pourcentage de la largeur <span class=\"gs-extra-label gs-between-space-parenthensis\">% entre 0 et 100</span>",
                                        "input": {
                                            "placeholder": "Saisir un pourcentage"
                                        }
                                    }
                                },
                                "title_area": {
                                    "label"            : {
                                        "label": "Nom",
                                        "input": {
                                            "placeholder": "Saisir un titre"
                                        }
                                    },
                                    "font_zoom_percent": {
                                        "label": "Zoom du texte <span class='gs-extra-label gs-between-space-parenthensis'>% entre 0 et 100</span>",
                                        "input": {
                                            "placeholder": "Saisir un pourcentage"
                                        }
                                    },
                                    "text_color"       : {
                                        "label": "Couleur du texte",
                                        "input": {
                                            "placeholder": "Saisir une couleur"
                                        }
                                    },
                                    "text_align"       : {
                                        "label" : "Alignement du texte",
                                        "radios": {
                                            "center": "Milieu",
                                            "left"  : "Gauche",
                                            "right" : "Droite"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "collapse_folder": {
                        "cf_dimensions": "Dimensions",
                        "cf_area"      : "Affichage des zones",
                        "cf_left_area" : "Zone de gauche",
                        "cf_right_area": "Zone de droite",
                        "cf_title_area": "Zone du label"
                    }
                },
                "title_widget"    : {
                    "title"          : "Widget titre",
                    "height"         : {
                        "label": "Hauteur",
                        "input": {
                            "placeholder": "Saisir une hauteur"
                        }
                    },
                    "width"          : {
                        "label" : "Largeur",
                        "radios": {
                            "all": "Toute la largeur"
                        },
                        "input" : {
                            "placeholder": "Saisir une largeur"
                        }
                    },
                    "content"        : {
                        "layout": {
                            "information_to_display": {
                                "title_area": {
                                    "label"            : {
                                        "label": "Nom",
                                        "input": {
                                            "placeholder": "Saisir un titre"
                                        }
                                    },
                                    "text_color"       : {
                                        "label": "Couleur du texte",
                                        "input": {
                                            "placeholder": "Saisir une couleur"
                                        }
                                    },
                                    "text_align"       : {
                                        "label" : "Alignement du texte",
                                        "radios": {
                                            "center": "Milieu",
                                            "left"  : "Gauche",
                                            "right" : "Droite"
                                        }
                                    },
                                    "font_zoom_percent": {
                                        "label": "Zoom du texte <span class='gs-extra-label gs-between-space-parenthensis'>% entre 0 et 100</span>",
                                        "input": {
                                            "placeholder": "Saisir un pourcentage"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "collapse_folder": {
                        "cf_dimensions": "Dimensions",
                        "cf_title_area": "Zone du label"
                    }
                },
                "weather_widget"  : {
                    "title"            : "Widget météo",
                    "height"           : {
                        "label": "Hauteur",
                        "input": {
                            "placeholder": "Saisir une hauteur"
                        }
                    },
                    "width"            : {
                        "label" : "Largeur",
                        "radios": {
                            "all": "Toute la largeur"
                        },
                        "input" : {
                            "placeholder": "Saisir une largeur"
                        }
                    },
                    "content"          : {
                        "item"  : {
                            "default_label_selector": "À définir",
                            "or_label"              : "ou",
                            "label"                 : {
                                "item_name"         : "Nom de l'élément",
                                "item_uuid"         : "UUID",
                                "visualisation_name": "Nom de Visualisation"
                            }
                        },
                        "layout": {
                            "background"            : {
                                "label" : "Fond",
                                "radios": {
                                    "context_and_status"       : "Contexte et statut",
                                    "context_then_status"      : "Contexte puis statut",
                                    "default_label_selector"   : "Sélectionner un affichage",
                                    "no_background"            : "Pas d'arrière plan",
                                    "only_status"              : "Statut uniquement",
                                    "status_context_from_webui": "Forcé à la configuration de l'Interface de Visualisation"
                                }
                            },
                            "information_to_display": {
                                "left_area"     : {
                                    "icon_type": {
                                        "label" : "Type d'icone",
                                        "radios": {
                                            "context_then_status"      : "Contexte puis statut",
                                            "default_label_selector"   : "Sélectionner un affichage",
                                            "only_status"              : "Statut uniquement",
                                            "quality_service_icon"     : "Indicateur de la qualité de service",
                                            "sla_tendency"             : "Flèche de tendance SLA",
                                            "status_context_from_webui": "Forcé à la configuration de l'Interface de Visualisation",
                                            "status_then_context"      : "Statut puis contexte"
                                        }
                                    }
                                },
                                "top_right_area": {
                                    "displayed": {
                                        "label" : "En haut à droite",
                                        "radios": {
                                            "default_label_selector": "Sélectionner un affichage",
                                            "false"                 : "Caché",
                                            "true"                  : "Affiché"
                                        }
                                    },
                                    "icon_type": {
                                        "label" : "Type d'icône",
                                        "radios": {
                                            "context_then_status" : "Contexte puis statut",
                                            "only_status"         : "Statut uniquement",
                                            "quality_service_icon": "Indicateur de la qualité de service",
                                            "sla"                 : "Flèche de tendance SLA",
                                            "status_then_context" : "Statut puis contexte"
                                        }
                                    }
                                },
                                "sla_area"      : {
                                    "displayed": {
                                        "label" : "SLA",
                                        "radios": {
                                            "false": "Caché",
                                            "true" : "Affiché"
                                        }
                                    },
                                    "show_icon": {
                                        "label" : "Afficher l'icône",
                                        "radios": {
                                            "false": "Caché",
                                            "true" : "Affiché"
                                        }
                                    }
                                },
                                "name_area"     : {
                                    "font_zoom_percent"    : {
                                        "label": "Zoom du texte <span class='gs-extra-label gs-between-space-parenthensis'>% entre 0 et 100</span>",
                                        "input": {
                                            "placeholder": "Saisir un pourcentage"
                                        }
                                    },
                                    "nb_lines_max"         : {
                                        "label": "Nombre de ligne max",
                                        "input": {
                                            "placeholder": "Saisir un chiffre"
                                        }
                                    },
                                    "property_used_as_name": {
                                        "label" : "Nom",
                                        "radios": {
                                            "item_name"         : "Nom de l'élément",
                                            "visualisation_name": "Nom de la visualisation"
                                        }
                                    },
                                    "vertical_align"       : {
                                        "label" : "Alignement vertical",
                                        "radios": {
                                            "bottom": "Bas",
                                            "middle": "Milieu",
                                            "top"   : "Haut"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "collapse_folder"  : {
                        "cf_dimensions"     : "Dimensions",
                        "cf_display"        : "Affichage",
                        "cf_area"           : "Affichage des zones",
                        "cf_left_area"      : "Zone de gauche",
                        "cf_sla_area"       : "Zone SLA",
                        "cf_top_right_area" : "Zone en haut a droite",
                        "cf_name_area"      : "Zone du nom",
                        "cf_shinken_element": "Choisir l'élément"
                    },
                    "cf_preview_widget": {
                        "item_name"         : "Nom de l'élément",
                        "visualisation_name": "Nom de visualisation de l'élément"
                    }
                }
            }
        }
    },
    "history"            : {
        "action": {
            "creation" : "Création.",
            "delete"   : "Suppression.",
            "new_owner": "Changement de propriétaire <span class='gs-history-user'>{0}</span>.",
            "restore"  : "Restauration.",
            "update"   : "Sauvegarde."
        },
        "title" : {
            "action": "Action",
            "date"  : "Date",
            "user"  : "Utilisateur"
        }
    },
    "html_structure"     : {
        "unparsable": "La valeur du champ ( HTML non valide ) a corrompu l'affichage.<br>Sauvegarder une valeur valide du champ corrigera l'affichage."
    },
    "json_editor"        : {
        "invalid_json"          : "La structure JSON est invalide, nous ne pouvons détecter que la première erreur <span class='gs-data-user'>(rencontrée ligne {0})</span>",
        "invalid_json_ie"       : "La structure JSON est invalide. La nature de l'erreur n'est pas fourni par le navigateur Internet Explorer.<br> Vous pouvez utiliser un autre navigateur (Edge, Firefox ou Google Chrome) ou un outil d'édition capable d'éditer le JSON pour connaitre la nature de l'erreur.",
        "not_valid_format_value": "Le contenu de la clé <span class='gs-data-user'>{0}</span> n'est pas au bon format",
        "unknown_value"         : "Clé inconnue : <span class='gs-data-user'>{0}</span>"
    },
    "license"            : {
        "aTrialVersion"        : "une licence d'essai",
        "contactMailSubject"   : "A propos de ma licence",
        "contactUs"            : "Contactez-nous",
        "day"                  : "jour",
        "errors"               : {
            "cannotUpdateLicense": "Impossible de mettre à jour la licence."
        },
        "exceedBy"             : "dépassé de {0}",
        "expired"              : "expirée",
        "invalidFormat"        : "format invalide",
        "left"                 : "restant(s)",
        "license"              : "Licence",
        "licenseEndingDate"    : "La licence se termine le {0}",
        "licenseInvalid"       : "LICENCE INVALIDE",
        "licensePeriod"        : "Durée de la licence",
        "licenseTypePro"       : "LICENCE PRO",
        "licenseTypeTrial"     : "LICENCE D'ESSAI",
        "noLicenseKey"         : "Aucune licence",
        "nodesAndLimit"        : "Hôtes: {0} / {1}",
        "onServer"             : "sur le serveur",
        "unexpectedError"      : "Erreur inattendue",
        "youAreUsingSecondTime": "Vous utilisez pour la deuxième fois ",
        "yourLicenseHas"       : "La licence a un"
    },
    "list"               : {
        "header_history": {
            "date_history": "Date",
            "text_history": "Action",
            "user_history": "Utilisateur"
        }
    },
    "loading_frame"      : {
        "load_in_progress": "Chargement en cours..."
    },
    "logout"             : {
        "errors": {
            "cannot_logout": "Impossible de se déconnecter."
        }
    },
    "messages"           : {
        "invalid_syntax"       : "Syntaxe invalide :",
        "no_message_to_display": "Aucun problème trouvé dans cet onglet",
        "tag_error"            : "Erreurs",
        "tag_warning"          : "Avertissements"
    },
    "notification"       : {
        "blink_user_warning"     : "<span class='gs-warning'>Remarque : </span>les notifications visuelles sont désactivées dans votre profil utilisateur",
        "no_change"              : "<span class='gs-warning'>Remarque : </span>il n'y a pas eu de changements depuis le dernier rafraichissement",
        "sound_navigator_warning": "<span class='gs-warning'>Remarque : </span>le son ne peut pas être joué tant que l'utilisateur n'a pas interagi avec la fenètre<br>Changer les réglages de votre navigateur pour résoudre ce problème",
        "sound_user_warning"     : "<span class='gs-warning'>Remarque : </span>les notifications sonores sont désactivées dans votre profil utilisateur"
    },
    "progress_bar"       : {
        "previewing_error_detail_401"    : "La prévisualisation n'a pas aboutie, car vous n'avez pas les droits minimums pour modifier cette page (erreur 401). Veuillez contacter votre administrateur.",
        "previewing_failed"              : "Prévisualisation échouée",
        "previewing_in_progress"         : "Prévisualisation en cours...",
        "previewing_succeed"             : "Prévisualisation réussie",
        "previewing_succeed_with_error"  : "Prévisualisation finie avec des erreurs",
        "previewing_succeed_with_warning": "Prévisualisation finie avec des avertissements",
        "publishing_in_progress"         : "Publication en cours...",
        "saving_error_detail_401"        : "La sauvegarde n'a pas abouti, car vous n'avez pas les droits minimums pour modifier cette page (erreur 401). Veuillez contacter votre administrateur.",
        "saving_error_detail_404"        : "La ressource n'a pas été trouvée (erreur 404). Veuillez contacter votre administrateur.",
        "saving_failed"                  : "Enregistrement échoué",
        "saving_in_progress"             : "Sauvegarde en cours...",
        "saving_succeed"                 : "<table class='gs-table-container-save-back-message'><tr><td><span>Enregistrement réussi</span></td></tr></table>",
        "saving_succeed_with_warning"    : "<table class='gs-table-container-save-back-message'><tr><td><span>Enregistrement réussi avec des avertissements</span></td></tr></table>",
        "toggle_display_message_label"   : "<span class='gs-show-if-hidden'>Voir</span><span class='gs-show-if-not-hidden'>Cacher</span> le détail"
    },
    "property"           : {
        "default_label": "Par défaut <span class='gs-between-space-bracket'>{0}</span>"
    },
    "service_weather"    : {
        "add_new_weather_button": {
            "errors": {
                "cannot_create_new_service_weather": "Il n'est pas possible de créer une nouvelle météo des services pour le moment"
            }
        },
        "generate_at"           : {
            "generation_in_progress": "<span class='gs-note gs-between-space-parenthensis'>en cours...</span>"
        },
        "weathers"              : {
            "default_name": "météo des services",
            "errors"      : {
                "cannot_get_weathers": "Impossible d'obtenir les météos des services."
            },
            "personal"    : "personal"
        }
    },
    "shinken_list"       : {
        "no_elements": {
            "text_no_elements"             : "Aucun élément n'a été trouvé",
            "text_no_elements_after_filter": "Aucun élément ne correspond aux filtres"
        },
        "sort"       : {
            "decrease": "Tri décroissant",
            "increase": "Tri croissant",
            "remove"  : "Supprimer le tri"
        }
    },
    "users"              : {
        "errors": {
            "cannot_get_user_from_backend": "Impossible d'obtenir l'utilisateur.",
            "user_doesnt_exist"           : "Attention, l'utilisateur n'existe plus"
        }
    },
    "validation"         : {
        "messages": {
            "char_forbidden"                          : "Le caractère {0} est interdit dans ce champ.",
            "color_is_invalid"                        : "Le texte saisi ne correspond pas à une couleur.",
            "integer_between"                         : "Seuls les nombres entiers compris entre {0} et {1} sont autorisés",
            "mandatory_field"                         : "Propriété obligatoire.",
            "max_length"                              : "Doit être un texte d'un taille maximal de {0}",
            "must_be_a_boolean"                       : "La propriété doit être un booléen.",
            "must_be_positive_integer_or_define_value": "Seuls les nombres entiers positif ou les valeurs : {0}, {1} sont autorisé",
            "not_empty_and_max_characters"            : "Ne peut être vide et doit contenir au maximum 300 lettres.",
            "not_in_list"                             : "La valeur n'est pas comprise dans les possibilités de réponses.",
            "string_cant_be_empty"                    : "Ce champs ne peut être laissé vide.",
            "tooltip_no_letter"                       : "Seuls les nombres entiers positifs sont autorisés.",
            "tooltip_no_letter_2"                     : "Seuls les nombres entiers sont autorisés."
        }
    },
    "window_group_save"  : {
        "action_button": {
            "apply" : "Appliquer",
            "cancel": "Annuler"
        }
    }
};
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
GS.OBJECT.CounterInterfaceV2LinkWithParentAndDomElement           = function () {
};
GS.OBJECT.CounterInterfaceV2LinkWithParentAndDomElement.prototype = {
    setCounterValue: function ( type, data_name, nb, parent ) {
        if ( !this.counters || !this.counters[ type ] ) {
            this.initCounter( type );
            this.counters[ type ].addTargetsDomElement( this.getDomElement(), type );
            this.setCounterParent( parent, type );
        }
        this.counters[ type ].update( data_name, nb );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CounterInterfaceV2LinkWithParentAndDomElement, GS.OBJECT.CounterInterfaceV2 );
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
GS.OBJECT.CounterInterfaceV2_patient           = function () {
};
GS.OBJECT.CounterInterfaceV2_patient.prototype = {
    initCounter: function ( type ) {
        this.counters[ type ]            = new GS.OBJECT.CounterV2( type );
        this.counters[ type ].is_patient = true;
    }
};
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
GS.OBJECT.CounterInterfaceHtml           = function () {
};
GS.OBJECT.CounterInterfaceHtml.prototype = {};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CounterInterfaceHtml, GS.OBJECT.CounterInterface );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CounterInterfaceHtml, GS.OBJECT.GsObjectHtml );
GS.OBJECT.Sorting           = function () {
    this.__class_name__ = 'GS.OBJECT.Sorting';
    this._status        = GS.OBJECT.SORTING.STATUS.NONE;
    this._pop_up_status = GS.OBJECT.SORTING.POPUP_STATUS.CLOSE;
    this._counter       = new GS.OBJECT.Counter();
};
GS.OBJECT.Sorting.prototype = {
    init                      : function () {
    },
    changeToNextStatus        : function () {
        switch ( this._status ) {
            case GS.OBJECT.SORTING.STATUS.UNAVAILABLE:
                return;
            case GS.OBJECT.SORTING.STATUS.NONE:
                this.setStatus( GS.OBJECT.SORTING.STATUS.INCREASING );
                break;
            case GS.OBJECT.SORTING.STATUS.INCREASING:
                this.setStatus( GS.OBJECT.SORTING.STATUS.DECREASING );
                break;
            case GS.OBJECT.SORTING.STATUS.DECREASING:
                this.setStatus( GS.OBJECT.SORTING.STATUS.NONE );
                break;
        }
    },
    doActionAfter             : function ( event_name, param_1, param_2, param_3 ) {
        switch ( event_name ) {
            case "click-on-header-popup":
                this.changePopUpStatus();
                break;
            case "click-on-option-header-popup":
                this.setStatus( param_1.status );
                this.setIndex( param_1.index );
                this.changePopUpStatus( GS.OBJECT.SORTING.POPUP_STATUS.CLOSE );
                break;
            case "click-on-header":
                this.changeToNextStatus();
                this.setIndex( param_1 );
                this.hidePopup();
                break;
        }
    },
    changePopUpStatus         : function ( to_set ) {
        if ( !to_set ) {
            to_set = this._pop_up_status === GS.OBJECT.SORTING.POPUP_STATUS.CLOSE ? GS.OBJECT.SORTING.POPUP_STATUS.OPEN : GS.OBJECT.SORTING.POPUP_STATUS.CLOSE;
        }
        this._pop_up_status = to_set;
        this.updateDomParent();
    },
    hidePopup                 : function () {
        this.changePopUpStatus( GS.OBJECT.SORTING.POPUP_STATUS.CLOSE );
    },
    getStatus                 : function () {
        return this._status;
    },
    getIndex                  : function () {
        return this._counter.getValue();
    },
    setDomParent              : function ( to_set ) {
        this._dom_parent = to_set;
        this.updateDomParent();
    },
    updateDomParent           : function () {
        SERVICE.DOM.setDataSet( this._dom_parent, 'sortingStatus', this._status );
        SERVICE.DOM.setDataSet( this._dom_parent, 'sortingPopUpStatus', this._pop_up_status );
    },
    setIndex                  : function ( to_set ) {
        if ( this._status === GS.OBJECT.SORTING.STATUS.NONE ) {
            to_set = GS.OBJECT.SORTING.NO_INDEX;
        }
        this._counter.update( "index_sorting", to_set );
    },
    setStatus                 : function ( to_set ) {
        this._status = to_set;
        switch ( this._status ) {
            case GS.OBJECT.SORTING.STATUS.UNAVAILABLE:
                break;
            case GS.OBJECT.SORTING.STATUS.NONE:
                this.setIndex( GS.OBJECT.SORTING.NO_INDEX );
                break;
            default:
                break;
        }
        this.updateDomParent();
    },
    computeHtml               : function ( name_parent ) {
        if ( this._status === GS.OBJECT.SORTING.STATUS.UNAVAILABLE || this.getDomElement() ) {
            return;
        }
        this.sort_popup_button         = SERVICE.DOM.createElement( "div",
            {
                class  : "gs-sort-popup-button gs-2023-arrow-down",
                onclick: "MANAGER.EventManagerV2.clickButton(event, 'click-on-header-popup', '" + name_parent + "',event)"
            } );
        this.sort_priority_dom_element = SERVICE.DOM.createElement( "div", { class: "gs-list-header-sort-priority" } );
        this.popup_sort_container      = SERVICE.DOM.createElement( "div", { class: "gs-list-header-sort-popup" } );
        this.computeHtmlSortPriority();
        this.computeHtmlSortPopup( name_parent );
    },
    computeHtmlSortPopup      : function ( name_parent ) {
        SERVICE.DOM.empty( this.popup_sort_container );
        var _increase_option    = this.computeHtmlSortPopupOption( GS.OBJECT.SORTING.STATUS.INCREASING, "shinicon shinicon-sort-increase", _( "shinken_list.sort.increase", [DICTIONARY_COMMON_UI] ), name_parent );
        var _decrease_option    = this.computeHtmlSortPopupOption( GS.OBJECT.SORTING.STATUS.DECREASING, "shinicon shinicon-sort-decrease", _( "shinken_list.sort.decrease", [DICTIONARY_COMMON_UI] ), name_parent );
        var _delete_sort_option = this.computeHtmlSortPopupOption( GS.OBJECT.SORTING.STATUS.NONE, "shinkon shinkon-times-bold", _( "shinken_list.sort.remove", [DICTIONARY_COMMON_UI] ), name_parent );
        SERVICE.DOM.addElementTo( _increase_option, this.popup_sort_container );
        SERVICE.DOM.addElementTo( _decrease_option, this.popup_sort_container );
        SERVICE.DOM.addElementTo( _delete_sort_option, this.popup_sort_container );
    },
    computeHtmlSortPopupOption: function ( status, icon, label, name_parent ) {
        var to_return   = SERVICE.DOM.createElement( "div",
            {
                class        : "gs-list-header-sort-popup-option",
                "data-status": status,
                "data-name"  : status,
                onclick      : "MANAGER.EventManagerV2.clickButton(event, 'click-on-option-header-popup', '" + name_parent + "', event)"
            }
        );
        var table       = SERVICE.DOM.createElement( "table", { class: "gs-width-100 gs-list-header-sort-popup-option-table" } );
        var tr          = SERVICE.DOM.createElement( "tr", {} );
        var _icon_cell  = SERVICE.DOM.createElement( "td", { class: "gs-list-header-sort-popup-option-icon-cell" } );
        var _label_cell = SERVICE.DOM.createElement( "td", {}, label );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: icon } ), _icon_cell );
        SERVICE.DOM.addElementTo( _icon_cell, tr );
        SERVICE.DOM.addElementTo( _label_cell, tr );
        SERVICE.DOM.addElementTo( tr, table );
        SERVICE.DOM.addElementTo( table, to_return );
        return to_return;
    },
    computeHtmlSortPriority   : function () {
        var _table                      = SERVICE.DOM.createElement( "table", { class: "gs-list-header-sort-priority-table gs-width-100 gs-user-select-none" } );
        var _tr                         = SERVICE.DOM.createElement( "tr", {} );
        this._counter.dom_element_label = SERVICE.DOM.createElement( "td", { class: "gs-list-header-sort-priority-number" } );
        var _icon                       = SERVICE.DOM.createElement( "td", { class: "gs-list-header-sort-priority-icon-cell" } );
        var _icon_decrease              = SERVICE.DOM.createElement( "span", { class: "shinicon shinicon-sort-decrease" } );
        var _icon_increase              = SERVICE.DOM.createElement( "span", { class: "shinicon shinicon-sort-increase" } );
        
        SERVICE.DOM.addElementTo( _icon_decrease, _icon );
        SERVICE.DOM.addElementTo( _icon_increase, _icon );
        SERVICE.DOM.addElementTo( this._counter.dom_element_label, _tr );
        SERVICE.DOM.addElementTo( _icon, _tr );
        SERVICE.DOM.addElementTo( _tr, _table );
        SERVICE.DOM.addElementTo( _table, this.sort_priority_dom_element );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Sorting, GS.OBJECT.GsObjectHtml );
GS.OBJECT.SortingInterface           = function () {
};
GS.OBJECT.SortingInterface.prototype = {
    initSorting            : function () {
        this.sorting_object = new GS.OBJECT.Sorting();
        this.sorting_object.init();
    },
    initSortingAvailability: function () {
    },
    makeSortingUnavailable : function () {
        this.sorting_object._status = GS.OBJECT.SORTING.STATUS.UNAVAILABLE;
    },
    computeHtmlSorting     : function () {
        this.sorting_object.computeHtml( this.name );
    },
    setDomParentForSorting : function ( to_set ) {
        this.sorting_object.setDomParent( to_set );
    },
    hidePopupSorting       : function () {
        this.sorting_object.hidePopup();
    },
    clickOnButtonSorting   : function ( event, event_name, param ) {
        switch ( event_name ) {
            case "click-on-header-popup":
            case "click-on-option-header-popup":
            case "click-on-header":
                this.sorting_object.clickOnButton( event, event_name, param );
                break;
        }
    },
    getSortingIndex        : function () {
        return this.sorting_object.getIndex();
    },
    getSortingStatus       : function () {
        return this.sorting_object.getStatus();
    },
    setSortingIndex        : function ( to_set ) {
        return this.sorting_object.setIndex( to_set );
    },
    setSortingStatus       : function ( to_set ) {
        return this.sorting_object.setStatus( to_set );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.SortingInterface, GS.OBJECT.GsObject );
GS.OBJECT.SORTING                        = {
    NO_INDEX    : 0,
    STATUS      : {
        UNAVAILABLE: "UNAVAILABLE",
        NONE       : "NONE",
        INCREASING : "INCREASING",
        DECREASING : "DECREASING"
    },
    POPUP_STATUS: {
        CLOSE: "CLOSE",
        OPEN : "OPEN"
    }
};
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
GS.TOOLS.BOOLEAN                         = (function ( self ) {
    self.isBoolean      = function ( value ) {
        return value === false || value === true || value === "false" || value === "true";
    };
    self.parseToBoolean = function ( value ) {
        if ( value === "false" ) {
            return false;
        }
        if ( value === "true" ) {
            return true;
        }
        return !!value;
    };
    return self;
})( GS.TOOLS.BOOLEAN || {} );
var DATE_TIME                            = DATE_TIME || {};
var __translation;
DATE_TIME.FORMAT                         = {
    TIME           : {
        DEFAULT: "HH:MM:SS",
        HH_MM  : "HH:MM"
    },
    DATE           : {
        DEFAULT   : "YYYY-MM-DD",
        DEFAULT_EN: "YYYY-MM-DD",
        WITH_SLASH: "YYYY/MM/DD",
        NO_YEAR   : "MM-DD"
    },
    TIME_PERIOD    : {
        YEAR   : {
            NB_MS    : 1000 * 60 * 60 * 24 * 30 * 355,
            NB_SEC   : 60 * 60 * 24 * 30 * 355,
            KEY      : 'year',
            SHORT_KEY: 'short_year'
        },
        MONTH  : {
            NB_MS    : 1000 * 60 * 60 * 24 * 30,
            NB_SEC   : 60 * 60 * 24 * 30,
            KEY      : 'month',
            SHORT_KEY: 'short_month'
        },
        WEEK   : {
            NB_MS    : 1000 * 60 * 60 * 24 * 7,
            NB_SEC   : 60 * 60 * 24 * 7,
            KEY      : 'week',
            SHORT_KEY: 'short_week'
        },
        DAY    : {
            NB_MS    : 1000 * 60 * 60 * 24,
            NB_SEC   : 60 * 60 * 24,
            KEY      : 'day',
            SHORT_KEY: 'short_day'
        },
        HOUR   : {
            NB_MS    : 1000 * 60 * 60,
            NB_SEC   : 60 * 60,
            KEY      : 'hour',
            SHORT_KEY: 'short_hour'
        },
        MINUTE : {
            NB_MS    : 1000 * 60,
            NB_SEC   : 60,
            KEY      : 'minute',
            SHORT_KEY: 'short_minute'
        },
        SECONDE: {
            NB_MS    : 1000,
            NB_SEC   : 1,
            KEY      : 'second',
            SHORT_KEY: 'short_second'
        }
    },
    NOW            : 'now',
    TYPE_VALIDATION: {
        HOUR: "hour",
        MIN : "min"
    }
};
DATE_TIME.now                            = function () {
    return new Date();
};
DATE_TIME.getCurrentYear                 = function () {
    return new Date().getFullYear();
};
DATE_TIME.isCurrentYear                  = function ( year ) {
    return parseInt( year ) === DATE_TIME.getCurrentYear();
};
DATE_TIME.isCurrentDay                   = function ( date_string ) {
    return date_string === DATE_TIME.FORMAT.get_date( DATE_TIME.now() );
};
DATE_TIME.isInThePast                    = function ( date_string ) {
    return date_string < DATE_TIME.FORMAT.get_date( DATE_TIME.now() );
};
DATE_TIME.buildDate                      = function ( day_delta ) {
    var _to_return = new Date();
    _to_return.setDate( _to_return.getDate() + day_delta );
    return _to_return;
};
DATE_TIME.getTimestampNow                = function () {
    return Date.now();
};
DATE_TIME.getTimestampNow_format_sec     = function () {
    return parseInt( Date.now() / 1000 );
};
DATE_TIME.FORMAT.getTime                 = function ( date, format ) {
    if ( !format ) {
        format = DATE_TIME.FORMAT.TIME.DEFAULT;
    }
    format = format.toUpperCase();
    switch ( format ) {
        case DATE_TIME.FORMAT.TIME.DEFAULT:
            return GS.TOOLS.STRING.prefix_by_zero( date.getHours(), 2 ) + ':' + GS.TOOLS.STRING.prefix_by_zero( date.getMinutes(), 2 ) + ':' + GS.TOOLS.STRING.prefix_by_zero( date.getSeconds(), 2 );
        case DATE_TIME.FORMAT.TIME.HH_MM:
            return GS.TOOLS.STRING.prefix_by_zero( date.getHours(), 2 ) + ':' + GS.TOOLS.STRING.prefix_by_zero( date.getMinutes(), 2 );
        default:
            return GS.TOOLS.STRING.prefix_by_zero( date.getHours(), 2 ) + ':' + GS.TOOLS.STRING.prefix_by_zero( date.getMinutes(), 2 ) + ':' + GS.TOOLS.STRING.prefix_by_zero( date.getSeconds(), 2 );
    }
    
};
DATE_TIME.FORMAT.get_date                = function ( date, format ) {
    if ( !format ) {
        format = DATE_TIME.FORMAT.DATE.DEFAULT;
    }
    
    switch ( format ) {
        case DATE_TIME.FORMAT.DATE.DEFAULT:
            return date.getFullYear() + '-' + GS.TOOLS.STRING.prefix_by_zero( date.getMonth() + 1, 2 ) + '-' + GS.TOOLS.STRING.prefix_by_zero( date.getDate(), 2 );
        case DATE_TIME.FORMAT.DATE.NO_YEAR:
            return GS.TOOLS.STRING.prefix_by_zero( date.getMonth() + 1, 2 ) + '-' + GS.TOOLS.STRING.prefix_by_zero( date.getDate(), 2 );
        case DATE_TIME.FORMAT.DATE.WITH_SLASH:
            return date.getFullYear() + '/' + GS.TOOLS.STRING.prefix_by_zero( date.getMonth() + 1, 2 ) + '/' + GS.TOOLS.STRING.prefix_by_zero( date.getDate(), 2 );
        default:
            return date.getFullYear() + '-' + GS.TOOLS.STRING.prefix_by_zero( date.getMonth() + 1, 2 ) + '-' + GS.TOOLS.STRING.prefix_by_zero( date.getDate(), 2 );
    }
    
};
DATE_TIME.FORMAT.get_date_from_timestamp = function ( timestamp, format ) {
    return DATE_TIME.FORMAT.get_date( new Date( timestamp * 1000 ), format );
};
DATE_TIME.FORMAT.get_time_from_timestamp = function ( timestamp, format ) {
    return DATE_TIME.FORMAT.getTime( new Date( timestamp * 1000 ), format );
};
DATE_TIME.initTraduction                 = function () {
    __translation = [];
    var keys      = Object.keys( DATE_TIME.FORMAT.TIME_PERIOD );
    var _key,
        _label,
        _short_label;
    for ( var i = 0, size = keys.length; i < size; i++ ) {
        _key                          = keys[ i ];
        _label                        = DATE_TIME.FORMAT.TIME_PERIOD[ _key ][ 'KEY' ];
        _short_label                  = DATE_TIME.FORMAT.TIME_PERIOD[ _key ][ 'SHORT_KEY' ];
        __translation[ _label ]       = [_( 'date_time.' + _label, [DICTIONARY_COMMON_UI] ), _( 'date_time.' + _label + 's', [DICTIONARY_COMMON_UI] )];
        __translation[ _short_label ] = [_( 'date_time.' + _short_label, [DICTIONARY_COMMON_UI] ), _( 'date_time.' + _short_label + 's', [DICTIONARY_COMMON_UI] )];
    }
    __translation[ DATE_TIME.NOW ] = [_( 'date_time.now', [DICTIONARY_COMMON_UI] ), ''];
};
DATE_TIME.getTraduction                  = function ( key, is_plural ) {
    if ( !__translation ) {
        this.initTraduction();
    }
    return __translation[ key ][ is_plural ? 1 : 0 ];
};
DATE_TIME.durationToString               = function ( timestamp, is_short_name, limit, escape_extra_text ) {
    if ( !timestamp ) {
        return DATE_TIME.getTraduction( DATE_TIME.NOW, false );
    }
    
    var in_the_past = false;
    if ( timestamp < 0 ) {
        in_the_past = true;
        timestamp   = -timestamp;
    }
    
    if ( !limit ) {
        limit = 9999;
    }
    var toReturn = '';
    var _nb;
    var keys     = Object.keys( DATE_TIME.FORMAT.TIME_PERIOD );
    var _key,
        _label,
        _nb_sec;
    for ( var i = 0, size = keys.length; i < size; i++ ) {
        _key = keys[ i ];
        if ( is_short_name ) {
            _label = DATE_TIME.FORMAT.TIME_PERIOD[ _key ][ 'SHORT_KEY' ];
        }
        else {
            _label = DATE_TIME.FORMAT.TIME_PERIOD[ _key ][ 'KEY' ];
        }
        
        _nb_sec = DATE_TIME.FORMAT.TIME_PERIOD[ _key ][ 'NB_MS' ];
        
        if ( timestamp >= _nb_sec ) {
            _nb = parseInt( timestamp / _nb_sec );
            if ( toReturn ) {
                toReturn += " ";
            }
            toReturn += _nb + " " + DATE_TIME.getTraduction( _label, _nb > 1 );
            timestamp = timestamp - _nb * _nb_sec;
            limit--;
        }
        if ( limit <= 0 ) {
            break;
        }
    }
    if ( escape_extra_text ) {
        return toReturn;
    }
    if ( !toReturn ) {
        toReturn = DATE_TIME.getTraduction( DATE_TIME.NOW, false );
    }
    else if ( in_the_past ) {
        toReturn = _( 'date_time.agoMoment', [DICTIONARY_COMMON_UI] ) + ' ' + toReturn;
    }
    else {
        toReturn = _( 'date_time.inMoment', [DICTIONARY_COMMON_UI] ) + ' ' + toReturn;
    }
    return toReturn;
};
DATE_TIME.relativeTime                   = function ( elapsed ) {
    if ( elapsed < 0 ) {
        return DATE_TIME.relativeTime( -elapsed ) + ' ago';
    }
    var msPerSecond = DATE_TIME.FORMAT.TIME_PERIOD[ 'SECONDE' ][ 'NB_MS' ];
    var msPerMinute = DATE_TIME.FORMAT.TIME_PERIOD[ 'MINUTE' ][ 'NB_MS' ];
    var msPerHour   = DATE_TIME.FORMAT.TIME_PERIOD[ 'HOUR' ][ 'NB_MS' ];
    var msPerDay    = DATE_TIME.FORMAT.TIME_PERIOD[ 'DAY' ][ 'NB_MS' ];
    var msPerMonth  = DATE_TIME.FORMAT.TIME_PERIOD[ 'MONTH' ][ 'NB_MS' ];
    var msPerYear   = DATE_TIME.FORMAT.TIME_PERIOD[ 'YEAR' ][ 'NB_MS' ];
    
    if ( elapsed < msPerMinute ) {
        return Math.round( elapsed / msPerSecond );
    }
    else if ( elapsed < msPerHour ) {
        return Math.round( elapsed / msPerMinute );
    }
    else if ( elapsed < msPerDay ) {
        return Math.round( elapsed / msPerHour );
    }
    else if ( elapsed < msPerMonth ) {
        return Math.round( elapsed / msPerDay );
    }
    else if ( elapsed < msPerYear ) {
        return Math.round( elapsed / msPerMonth );
    }
    else {
        return Math.round( elapsed / msPerYear );
    }
};
DATE_TIME.isValid                        = function ( type, string_value ) {
    var _value_splitted = string_value.split( '' );
    var _size           = _value_splitted.length;
    var value;
    switch ( type ) {
        case DATE_TIME.FORMAT.TYPE_VALIDATION.HOUR:
            if ( isNaN( string_value ) ) {
                return false;
            }
            if ( _size !== 2 ) {
                return false;
            }
            if ( isNaN( _value_splitted[ 0 ] ) || isNaN( _value_splitted[ 1 ] ) ) {
                return false;
            }
            value = parseInt( string_value );
            if ( value < 0 || value > 23 ) {
                return false;
            }
            break;
        case DATE_TIME.FORMAT.TYPE_VALIDATION.MIN:
            if ( isNaN( string_value ) ) {
                return false;
            }
            if ( _size !== 2 ) {
                return false;
            }
            if ( isNaN( _value_splitted[ 0 ] ) || isNaN( _value_splitted[ 1 ] ) ) {
                return false;
            }
            value = parseInt( string_value );
            if ( value < 0 || value > 59 ) {
                return false;
            }
            break;
        case DATE_TIME.FORMAT.DATE.DEFAULT:
        case DATE_TIME.FORMAT.DATE.DEFAULT_EN:
            _value_splitted = string_value.split( '-' );
            if ( _value_splitted.length !== 3 ) {
                return false;
            }
            if ( isNaN( _value_splitted[ 0 ] ) || isNaN( _value_splitted[ 1 ] ) || isNaN( _value_splitted[ 2 ] ) ) {
                return false;
            }
            var value_0 = parseInt( _value_splitted[ 2 ] );
            if ( value_0 < 1 || value_0 > 31 ) {
                return false;
            }
            var value_1 = parseInt( _value_splitted[ 1 ] );
            if ( value_1 < 1 || value_1 > 12 ) {
                return false;
            }
            var value_2 = parseInt( _value_splitted[ 0 ] );
            if ( value_2 < 1 || value_2 > 2100 ) {
                return false;
            }
            break;
        default:
            console.warn( "DATE_TIME.isValid : unknown format =>", type );
            return false;
    }
    return true;
};
DATE_TIME.isValidRangeTimeperiod         = function ( time1, time2 ) {
    return (DATE_TIME.getTimeperiodLabel( PROPERTY.CONST.TIMEPERIOD.FORMAT_LABEL.HOUR, time1 ) <= DATE_TIME.getTimeperiodLabel( PROPERTY.CONST.TIMEPERIOD.FORMAT_LABEL.HOUR, time2 ));
};
DATE_TIME.splitTimeperiodDay             = function ( value ) {
    var _to_return         = [];
    var _timeperiod_ranges = value.split( PROPERTY.CONST.TIMEPERIOD.SEPARATOR.RANGES );
    for ( var i = 0, _size = _timeperiod_ranges.length; i < _size; i++ ) {
        _to_return.push( DATE_TIME.splitTimeperiodRanges( _timeperiod_ranges[ i ] ) );
    }
    return _to_return;
};
DATE_TIME.splitTimeperiodRanges          = function ( value ) {
    var ranges       = value.split( PROPERTY.CONST.TIMEPERIOD.SEPARATOR.HOURS );
    var _size_ranges = ranges.length;
    var _to_return   = [];
    for ( var i = 0; i < _size_ranges; i++ ) {
        _to_return.push( DATE_TIME.splitTimeperiodTime( ranges[ i ] ) );
    }
    return _to_return;
};
DATE_TIME.splitTimeperiodTime            = function ( value ) {
    var _to_return     = {};
    var _time_splitted = value.split( PROPERTY.CONST.TIMEPERIOD.SEPARATOR.HOUR_MIN );
    if ( _time_splitted.length !== 2 ) {
        _to_return.invalid = true;
        return _to_return;
    }
    _to_return.hour = _time_splitted[ 0 ].trim();
    _to_return.min  = _time_splitted[ 1 ].trim();
    
    return _to_return;
};
DATE_TIME.getTimeperiodLabel             = function ( type, value ) {
    switch ( type ) {
        case PROPERTY.CONST.TIMEPERIOD.FORMAT_LABEL.HOUR:
            return value.hour + PROPERTY.CONST.TIMEPERIOD.SEPARATOR.HOUR_MIN + value.min;
        case PROPERTY.CONST.TIMEPERIOD.FORMAT_LABEL.RANGE:
            return DATE_TIME.getTimeperiodLabel( PROPERTY.CONST.TIMEPERIOD.FORMAT_LABEL.HOUR, value[ 0 ] ) + PROPERTY.CONST.TIMEPERIOD.SEPARATOR.HOURS + DATE_TIME.getTimeperiodLabel( PROPERTY.CONST.TIMEPERIOD.FORMAT_LABEL.HOUR, value[ 1 ] );
        case PROPERTY.CONST.TIMEPERIOD.FORMAT_LABEL.FULL:
            var _current_range;
            var _to_return = "";
            var _size      = value.length;
            for ( var i = 0; i < _size; i++ ) {
                _current_range = value[ i ];
                _to_return += DATE_TIME.getTimeperiodLabel( PROPERTY.CONST.TIMEPERIOD.FORMAT_LABEL.RANGE, value[ i ] );
                if ( (value + 1) !== _size ) {
                    _to_return += PROPERTY.CONST.TIMEPERIOD.SEPARATOR.RANGES;
                }
            }
            return _to_return;
    }
};
DATE_TIME.initHistoricArrayTimeStamp     = function ( length ) {
    var toReturn = [];
    for ( var i = length - 1; i >= 0; i-- ) {
        toReturn.push( DATE_TIME.buildDate( -i ).getTime() / 1000 );
    }
    return toReturn;
};
DATE_TIME.getTimezoneOffsetInHour        = function ( value ) {
    return value.getTimezoneOffset() / 60;
};
DATE_TIME.getDateAndTimeToHtml           = function ( timestamp ) {
    var toReturn = "<span class='gs-date'>";
    toReturn += DATE_TIME.FORMAT.get_date_from_timestamp( timestamp );
    toReturn += "</span>";
    toReturn += " <span class='gs-time'>";
    toReturn += DATE_TIME.FORMAT.get_time_from_timestamp( timestamp );
    toReturn += "</span>";
    return toReturn;
};
DATE_TIME.getDateToHtml                  = function ( timestamp ) {
    var toReturn = "<span class='gs-date'>";
    toReturn += DATE_TIME.FORMAT.get_date_from_timestamp( timestamp );
    toReturn += "</span>";
    return toReturn;
};
DATE_TIME.parseSecondToString            = function ( seconds_to_parse ) {
    var sec_num = parseInt( seconds_to_parse, 10 ); // don't forget the second param
    var hours   = Math.floor( sec_num / 3600 );
    var minutes = Math.floor( (sec_num - (hours * 3600)) / 60 );
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
    if ( hours < 10 ) {
        hours = "0" + hours;
    }
    if ( minutes < 10 ) {
        minutes = "0" + minutes;
    }
    if ( seconds < 10 ) {
        seconds = "0" + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
};
DATE_TIME.parseSecondToString_2          = function ( seconds_to_parse ) {
    var sec_num  = parseInt( seconds_to_parse, 10 ); // don't forget the second param
    var days_man = Math.floor( sec_num / (3600 * 7) );
    var hours    = Math.floor( (sec_num - (days_man * 3600 * 7)) / 3600 );
    var minutes  = Math.floor( (sec_num - (days_man * 3600 * 7) - (hours * 3600)) / 60 );
    var seconds  = sec_num - (days_man * 3600 * 7) - (hours * 3600) - (minutes * 60);
    
    if ( hours < 10 ) {
        hours = "0" + hours;
    }
    if ( minutes < 10 ) {
        minutes = "0" + minutes;
    }
    if ( seconds < 10 ) {
        seconds = "0" + seconds;
    }
    return days_man + 'j/h ' + hours + ':' + minutes + ':' + seconds;
};
DATE_TIME.getTimeBetweenToDate           = function ( start_to_hour, end_to_hour, timestamp_to_remove ) {
    var _timestamp_start = new Date();
    var _timestamp_end   = new Date();
    var _split_start     = start_to_hour.split( ":" );
    var _split_end       = end_to_hour.split( ":" );
    _timestamp_start.setHours( _split_start[ 0 ], _split_start[ 1 ] );
    _timestamp_end.setHours( _split_end[ 0 ], _split_end[ 1 ] );
    var _duration = _timestamp_end.getTime() - _timestamp_start.getTime();
    if ( timestamp_to_remove ) {
        return DATE_TIME.durationToString_2( _duration - timestamp_to_remove, true );
    }
    return DATE_TIME.durationToString_2( _duration, true );
};
DATE_TIME.getWeekNumber                  = function ( date ) {
    date = new Date( Date.UTC( date.getFullYear(), date.getMonth(), date.getDate() ) );
    date.setUTCDate( date.getUTCDate() + 4 - (date.getUTCDay() || 7) );
    var yearStart = new Date( Date.UTC( date.getUTCFullYear(), 0, 1 ) );
    return Math.ceil( (((date - yearStart) / 86400000) + 1) / 7 );
};
DATE_TIME.isTimeEqualsWithDelta          = function ( time_string_to_test, time_string_to_compare, delta_minute ) {
    let to_test    = DATE_TIME.parseStringToTime( time_string_to_test );
    let to_compare = DATE_TIME.parseStringToTime( time_string_to_compare );
    return Math.abs( to_compare - to_test ) <= delta_minute * DATE_TIME.FORMAT.TIME_PERIOD.MINUTE.NB_MS;
};
DATE_TIME.parseStringToDate              = function ( date_string ) {
    return new Date( Date.parse( date_string ) );
};
DATE_TIME.parseStringToTime              = function ( time_string ) {
    var split     = time_string.split( ":" );
    let to_return = new Date();
    to_return.setHours( split[ 0 ] );
    to_return.setMinutes( split[ 1 ] );
    if ( split.length > 2 ) {
        to_return.setSeconds( split[ 2 ] );
    }
    else {
        to_return.setSeconds( 0 );
    }
    return to_return;
};
Date.prototype.getWeek                   = function () {
    var date = new Date( this.getTime() );
    date.setHours( 0, 0, 0, 0 );
    date.setDate( date.getDate() + 3 - (date.getDay() + 6) % 7 );
    var week1 = new Date( date.getFullYear(), 0, 4 );
    return 1 + Math.round( ((date.getTime() - week1.getTime()) / 86400000
                            - 3 + (week1.getDay() + 6) % 7) / 7 );
};
Date.prototype.isWeekEnd                 = function () {
    if ( this.getDay() === 0 ) {
        return true;
    }
    if ( this.getDay() === 6 ) {
        return true;
    }
    return false;
};
DATE_TIME.getTimezoneOffsetInHour        = function ( value ) {
    return value.getTimezoneOffset() / 60;
};

GS.TOOLS.FORM                      = (function ( self ) {
    "use strict";
    self.buildGetUrl = function ( form ) {
        var _to_return = "";
        var _value;
        for ( var i = 0, _size_i = form.elements.length; i < _size_i; i++ ) {
            if ( i ) {
                _to_return += "&";
            }
            if ( form.elements[ i ].tagName === "INPUT" && form.elements[ i ].type === "checkbox" ) {
                _value = form.elements[ i ].checked ? 'on' : 'off';
            }
            else {
                _value = form.elements[ i ].value;
            }
            _to_return += form.elements[ i ].name + "=" + _value;
        }
        return _to_return;
    };
    return self;
})( GS.TOOLS.FORM || {} );
GS.TOOLS.LOADING_FRAME             = (function ( self ) {
    self.getDomElement    = function ( id ) {
        if ( id ) {
            return SERVICE.DOM.createElement( "div", {
                class: "gs-loading-frame", id: id
            }, '<div class="gs-loading-frame-container"><h1><div class="gs-pulsate">' + _( 'loading_frame.load_in_progress', [DICTIONARY_COMMON_UI] ) + '</div></h1></div>' );
        }
        return SERVICE.DOM.createElement( "div", {
            class: "gs-loading-frame"
        }, '<div class="gs-loading-frame-container"><h1><div class="gs-pulsate">' + _( 'loading_frame.load_in_progress', [DICTIONARY_COMMON_UI] ) + '</div></h1></div>' );
    };
    self.getDomElement_V3 = function ( id ) {
        if ( id ) {
            return SERVICE.DOM.createElement( "div", {
                class: "gs-loading-frame flex-layout-center-h-v", id: id
            }, '<div class="gs-loading-frame-container"><h1><div class="gs-pulsate">' + _( 'loading_frame.load_in_progress', [DICTIONARY_COMMON_UI] ) + '</div></h1></div>' );
        }
        return SERVICE.DOM.createElement( "div", {
            class: "gs-loading-frame flex-layout-center-h-v"
        }, '<div class="gs-loading-frame-container"><h1><div class="gs-pulsate">' + _( 'loading_frame.load_in_progress', [DICTIONARY_COMMON_UI] ) + '</div></h1></div>' );
    };
    self.getHtml          = function ( id ) {
        return self.getDomElement( id ).outerHTML;
    };
    return self;
})( GS.TOOLS.LOADING_FRAME || {} );
GS.TOOLS.BACKEND_NO_RESPONSE_FRAME = (function ( self ) {
    self.getDomElement = function () {
        return SERVICE.DOM.createElement( "div", {
            class: "gs-no-backend-response-frame flex-layout-center-h-v"
        }, '<div class="gs-no-backend-response-frame-container"><h1><div> ' + _( "communication.no_backend_response", [DICTIONARY_COMMON_UI] ) + '</div></h1><div class="gs-contact-admin"> ' + _( "communication.contact_admin_shinken", [DICTIONARY_COMMON_UI] ) + '</div></div>' );
    };
    self.getHtml       = function () {
        return self.getDomElement().outerHTML;
    };
    return self;
})( GS.TOOLS.BACKEND_NO_RESPONSE_FRAME || {} );
GS.TOOLS.MOUSE                     = (function ( self ) {
    self.getWheelDelta       = function ( event ) {
        if ( event.wheelDelta === 0 ) {
            return 0;
        }
        if ( event.wheelDelta > 0 ) {
            return 1;
        }
        else {
            return -1;
        }
    };
    self.setLastMouseEvent   = function ( event ) {
        this.mousePosition = event;
    };
    self.unsetLastMouseEvent = function () {
        this.mousePosition = null;
    };
    
    self.getLastMouseEvent = function () {
        return this.mousePosition;
    };
    return self;
})( GS.TOOLS.MOUSE || {} );
GS.NAVIGATOR                       = (function ( self ) {
    "use strict";
    
    var navigator = {
        isChrome : false,
        isFireFox: false,
        isIE     : false,
        isHidden : false
    };
    
    
    setInterval( function () {
        setDocumentHidden();
    }, 2000 );
    
    function setDocumentHidden () {
        navigator.isHidden = document.hidden;
    }
    
    self.isNavigator          = function ( type ) {
        return navigator[ type ];
    };
    self.isNavigatorHidden    = function () {
        return navigator.isHidden;
    };
    self.init                 = function ( nb_try ) {
        var _navigator_class = '';
        if ( window.navigator.userAgent.indexOf( 'Firefox' ) !== -1 ) {
            navigator.isFireFox = true;
            _navigator_class    = 'gs-navigator-is-firefox';
        }
        else if ( window.navigator.userAgent.indexOf( 'Chrome' ) !== -1 ) {
            navigator.isChrome = true;
            _navigator_class   = 'gs-navigator-is-chrome';
        }
        if ( document.body ) {
            document.body.classList.add( _navigator_class );
        }
        else if ( nb_try ) {
            setTimeout( function () {
                nb_try = nb_try - 1;
                GS.NAVIGATOR.init( nb_try );
            }, 1000 );
        }
    };
    self.shinken_beforeunload = function ( page_name ) {
        switch ( page_name ) {
            case 'page-analyzer-job':
                return analyzer_beforeunload();
            default:
                return '';
        }
    };
    self.shinken_unload       = function ( page_name ) {
        switch ( page_name ) {
            case 'page-analyzer-job':
                return analyzer_unload();
            default:
                return '';
        }
    };
    
    
    return self;
})( GS.NAVIGATOR || {} );
GS.NAVIGATOR.init( 50 );
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
var CLIPBOARD_SERVICE          = (function ( self ) {
    self.PARAM            = {
        EVENT_NAME_COPY: "copy_to_clipboard",
        EVENT_NAME_EDIT: "edit_to_clipboard_target"
    };
    self.dom_textarea     = null;
    self.dom_parent       = null;
    self.dom_button       = null;
    self.dom_text_to_copy = null;
    self.type             = null;
    
    self.TYPE      = {};
    self.TYPE.TEXT = 'text';
    self.TYPE.HTML = 'html';
    
    self.setContent       = function ( dom_event, value, displayResultCallBack ) {
        var _dom_button = SERVICE.DOM.findParentElementWithClass( dom_event, 'gs-button', 10 );
        setValueTextArea( value );
        self.dom_textarea.select();
        
        var status = false;
        try {
            status = document.execCommand( 'copy' );
            displayResultCallBack ? displayResultCallBack( status, _dom_button ) : displayResult( status, _dom_button );
            setValueTextArea( '' );
        }
        catch ( err ) {
            console.log( 'Unable to copy.' );
        }
    };
    self.buildHtmlButtons = function ( hasCopyButton, hasEditButton, event_name, param ) {
        var table_buttons = SERVICE.DOM.createElement( "table", { class: "gs-copy-buttons-container" } );
        var line_buttons  = SERVICE.DOM.createElement( "tr", {} );
        if ( hasCopyButton ) {
            var button_copy_cell = SERVICE.DOM.createElement( "td", { class: "gs-btn-copy-cell" } );
            var button_copy      = SERVICE.DOM.createElement( "td", {
                class             : "gs-button gs-btn-copy gs-btn-copy-text",
                onclick           : 'MANAGER.EventManager.clickOnButton(event)',
                'data-status-copy': '0',
                'data-name'       : event_name ? event_name : '',
                'data-param'      : param ? param : '',
                onmouseenter      : 'SHINKEN_TOOLTIP.showTooltip(this);',
                onmouseleave      : 'SHINKEN_TOOLTIP.hideTooltip();',
                'shi-tip-html'    : _( 'copy_service.tooltip_text_copy' )
            } );
            var icon_button_copy = SERVICE.DOM.createElement( "span", { class: "gs-copy-default-message shinicon-copy" } );
            
            button_copy.appendChild( icon_button_copy );
            button_copy_cell.appendChild( button_copy );
            line_buttons.appendChild( button_copy_cell );
        }
        if ( hasEditButton ) {
            var button_edit_cell = SERVICE.DOM.createElement( "td", { class: "gs-btn-edit-cell" } );
            var button_edit      = SERVICE.DOM.createElement( "td", {
                class             : "gs-btn-copy",
                onclick           : 'MANAGER.EventManager.clickOnPaste(event)',
                'data-status-copy': '0',
                onmouseenter      : 'SHINKEN_TOOLTIP.showTooltip(this);',
                onmouseleave      : 'SHINKEN_TOOLTIP.hideTooltip();',
                'shi-tip-html'    : _( 'copy_service.tooltip_edition' )
            } );
            var icon_button_edit = SERVICE.DOM.createElement( "span", { class: "gs-copy-default-message gs-icons-url gs-icons-url-write" } );
            
            button_edit.appendChild( icon_button_edit );
            button_edit_cell.appendChild( button_edit );
            line_buttons.appendChild( button_edit_cell );
        }
        table_buttons.appendChild( line_buttons );
        return table_buttons;
    };
    
    self.buildHtmlButtons_V3 = function ( has_copy_button, has_edit_button, params ) {
        let to_return = SERVICE.DOM.createElement( "div", { class: "gs-clipboard-container flex-layout-inline-center-h-v" } );
        if ( has_copy_button ) {
            let copy_button = new COMPONENT.ButtonFromData_V3( CLIPBOARD_SERVICE.PARAM.EVENT_NAME_COPY, "<span class='shinicon shinicon-copy'></span>" );
            copy_button.addParamsForEvents( params );
            copy_button.addClass( "gs-btn-copy gs-btn-copy-text" );
            copy_button.computeHtml();
            copy_button.setTooltipHtml( _( 'copy_service.tooltip_text_copy', [DICTIONARY_COMMON_UI] ) );
            SERVICE.DOM.addElementTo( copy_button.getDomElement(), to_return );
        }
        if ( has_edit_button ) {
            let edit_button = new COMPONENT.ButtonFromData_V3( CLIPBOARD_SERVICE.PARAM.EVENT_NAME_EDIT, "<span class='gs-icons-url gs-icons-url-write'></span>" );
            edit_button.addParamsForEvents( params );
            edit_button.addClass( "gs-btn-copy" );
            edit_button.computeHtml();
            edit_button.setTooltipHtml( _( 'copy_service.tooltip_edition' ) );
            SERVICE.DOM.addElementTo( edit_button.getDomElement(), to_return );
        }
        return to_return;
    };
    
    self.doPaste = function ( event ) {
        event.preventDefault();
        var clipboardData = event.clipboardData || window.clipboardData;
        var to_return     = window.clipboardData ? clipboardData.getData( 'Text' ) : clipboardData.getData( "text/plain" );
        to_return         = to_return.trim();
        document.execCommand( "insertHTML", false, GS.TOOLS.STRING.cleanXss( to_return ) );
        return to_return;
    };
    
    init();
    
    function init () {
        setTimeout( function () {
            createDomTextArea();
        }, 1000 );
    }
    
    function createDomTextArea () {
        var _body = document.querySelector( 'body' );
        if ( !_body ) {
            setTimeout( function () {
                createDomTextArea();
            }, 1000 );
            return;
        }
        self.dom_textarea               = document.createElement( 'textarea' );
        self.dom_textarea.id            = 'id-gs-copy-clipboard-container';
        self.dom_textarea.style.opacity = '0';
        _body.appendChild( self.dom_textarea );
    }
    
    
    function setValueTextArea ( to_set ) {
        self.dom_textarea.value = to_set;
    }
    
    
    function displayResult ( status, dom_button ) {
        var _text     = status ? _( 'copy_service.copySuccess', [DICTIONARY_COMMON_UI] ) : _( 'copy_service.copyFail', [DICTIONARY_COMMON_UI] );
        var _state    = status ? GS.OBJECT.NOTIFICATION.CONST.STATUS.COPY_SUCCESS : GS.OBJECT.NOTIFICATION.CONST.STATUS.COPY_FAILED;
        var _position = status ? GS.OBJECT.NOTIFICATION.CONST.PLACEMENT.COPY_NOTIFICATION_SUCCESS : GS.OBJECT.NOTIFICATION.CONST.PLACEMENT.COPY_NOTIFICATION_FAILED;
        GS.TOOLS.NOTIFICATION.addNotification( _text, _state, dom_button, _position, 2000 );
    }
    
    function pasteHtmlForIE ( text_to_paste ) {
        var sel,
            range;
        
        if ( window.getSelection ) {
            sel = window.getSelection();
            if ( sel.getRangeAt && sel.rangeCount ) {
                range = sel.getRangeAt( 0 );
                range.deleteContents();
                
                var _div = SERVICE.DOM.createElement( "div", {}, text_to_paste );
                
                var frag = document.createDocumentFragment(),
                    node,
                    lastNode;
                
                while ( (node = _div.firstChild) ) {
                    lastNode = frag.appendChild( node );
                }
                range.insertNode( frag );
                
                if ( lastNode ) {
                    range = range.cloneRange();
                    range.setStartAfter( lastNode );
                    range.collapse( true );
                    sel.removeAllRanges();
                    sel.addRange( range );
                }
            }
        }
    }
    
    self.setContent__Angular_Old = function ( dom_element, type ) {
        self.initDomElement_old( dom_element );
        if ( !self.dom_parent || !self.dom_text_to_copy ) {
            displayResult( false );
            return;
        }
        var _value;
        switch ( type ) {
            case self.TYPE.TEXT:
                _value = self.dom_text_to_copy.innerText;
                break;
            case self.TYPE.HTML:
                _value = self.dom_text_to_copy.outerHTML;
                break;
        }
        
        setValueTextArea( _value );
        self.dom_textarea.select();
        var status = false;
        try {
            status = document.execCommand( 'copy' );
            displayResult( status );
            setValueTextArea( '' );
        }
        catch ( err ) {
            console.log( 'Unable to copy.' );
        }
    };
    
    self.initDomElement_old = function ( dom_element ) {
        self.dom_button = dom_element;
        self.dom_parent = SERVICE.DOM.findParentElementWithClass( dom_element, "gs-parent-text-to-copy", 5 );
        if ( !self.dom_parent ) {
            return;
        }
        self.dom_text_to_copy = self.dom_parent.querySelector( ".gs-text-to-copy" );
    };
    return self;
    
})( {} );
var __lang_obj                 = {};
var DICTIONARY_COMMON          = "common";
var DICTIONARY_COMMON_UI       = "common_ui";
var DICTIONARY_VISU_UI         = "ui_visu_lang";
var DICTIONARY_SOURCE_CONF     = "lang_source";
var __dictionary_active_name__ = __dictionary_active_name__ || "lang_";

function __gup ( name, url ) {
    if ( !url ) {
        url = location.href;
    }
    name        = name.replace( /[\[]/, "\\\[" ).replace( /[\]]/, "\\\]" );
    var regexS  = "[\\?&]" + name + "=([^&#]*)";
    var regex   = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[ 1 ];
}

function _load_lang_obj_array ( dictionary_origin_array ) {
    for ( var i = 0, _size_i = dictionary_origin_array.length; i < _size_i; i++ ) {
        _load_lang_obj( dictionary_origin_array[ i ] );
    }
}

function _load_lang_obj ( dictionary_origin ) {
    if ( __lang_obj[ dictionary_origin ] ) {
        return;
    }
    var lang                        = __gup( 'lang' );
    lang                            = !lang ? __shinken_lang__ : lang;
    var _to_return                  = dictionary_origin === DICTIONARY_COMMON ? __dictionary_active_name__ : dictionary_origin + '_';
    _to_return += lang === 'fr' ? lang : 'en';
    __lang_obj[ dictionary_origin ] = eval( _to_return );
    if ( typeof overridden_translations === "undefined" ) {
        return;
    }
    if ( _to_return in overridden_translations ) {
        __lang_obj [ dictionary_origin ] = GS.TOOLS.DICT.updateWithDict( __lang_obj [ dictionary_origin ], overridden_translations[ _to_return ] );
    }
}

function _load_extra_lang_obj ( dictionary_origin ) {
    if ( __lang_obj[ dictionary_origin ] ) {
        return;
    }
    var lang                        = __gup( 'lang' );
    lang                            = !lang ? __shinken_lang__ : lang;
    var _to_return                  = dictionary_origin + "_";
    _to_return += lang === 'fr' ? lang : 'en';
    __lang_obj[ dictionary_origin ] = eval( _to_return );
}

function _ ( to_trad, dictionary_origin ) {
    var elts                    = to_trad.split( '.' );
    var dictionary_origin_array = !dictionary_origin ? [DICTIONARY_COMMON] : dictionary_origin;
    _load_lang_obj_array( dictionary_origin_array );
    
    for ( var j = 0, _size_j = dictionary_origin_array.length; j < _size_j; j++ ) {
        var _to_return = __lang_obj[ dictionary_origin_array[ j ] ][ elts[ 0 ] ];
        var _found     = true;
        for ( var i = 0, _size = elts.length; i < _size; i++ ) {
            _to_return = i !== 0 ? _to_return[ elts[ i ] ] : _to_return;
            if ( typeof _to_return === 'undefined' ) {
                _found = false;
                break;
            }
        }
        if ( _found ) {
            return _to_return;
        }
    }
    return 'TO_TRAD(' + to_trad + ')';
}

function isTranslateKeyExisting ( to_trad, dictionary_origin ) {
    var elts                    = to_trad.split( '.' );
    var dictionary_origin_array = !dictionary_origin ? [DICTIONARY_COMMON] : dictionary_origin;
    _load_lang_obj_array( dictionary_origin_array );
    
    for ( var j = 0, _size_j = dictionary_origin_array.length; j < _size_j; j++ ) {
        var _to_return = __lang_obj[ dictionary_origin_array[ j ] ][ elts[ 0 ] ];
        var _found     = true;
        for ( var i = 0, _size = elts.length; i < _size; i++ ) {
            _to_return = i !== 0 ? _to_return[ elts[ i ] ] : _to_return;
            if ( typeof _to_return === 'undefined' ) {
                _found = false;
                break;
            }
        }
        if ( _found ) {
            return true;
        }
    }
    return false;
}

GS.TOOLS.InterfaceRefreshComponent           = function () {
};
GS.TOOLS.InterfaceRefreshComponent.prototype = {
    update            : function () {
    },
    phaseUpdated      : function ( phase, parent_object ) {
        switch ( phase ) {
            case GS.OBJECT.CONST.PHASE.READY :
                this.eventIsReady( parent_object );
                break;
            case GS.OBJECT.CONST.PHASE.STARTING :
                this.eventIsStarting( parent_object );
                break;
            case GS.OBJECT.CONST.PHASE.RUNNING :
                this.eventIsRunning( parent_object );
                break;
            case GS.OBJECT.CONST.PHASE.REFRESHING :
                this.eventIsRefreshing( parent_object );
                break;
            case GS.OBJECT.CONST.PHASE.STOPPING :
                this.eventIsStopping( parent_object );
                break;
        }
    },
    setLastComputeDate: function ( to_set ) {
    },
    eventIsReady      : function ( parent_object ) {
    },
    eventIsStarting   : function ( parent_object ) {
    },
    eventIsRunning    : function ( parent_object ) {
    },
    eventIsRefreshing : function ( parent_object ) {
    },
    eventIsStopping   : function ( parent_object ) {
    },
    updateCountdown   : function ( parent_object ) {
    }
};
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
GS.OBJECT.JsonEditor                         = function ( dom_element, json, default_tag ) {
    this.__class_name__ = 'GS.OBJECT.JsonEditor';
    this.dom_element    = dom_element;
    this.json           = json;
    this.content        = null;
    this.default_tag    = default_tag;
    this.init();
};
GS.OBJECT.JsonEditor.prototype               = {
    init: function () {
        this.content = SERVICE.DOM.createElement( "span", {}, this.parseToHtml( null, this.json ) );
        this.computeErrorContent();
    },
    
    doActionAfter                       : function ( event_name, param ) {
        switch ( event_name ) {
            case "change_default_value_to_value":
                this.changeDefaultValueToValue( param.data_to_change_default_value, param.default_grid_value, param.widget_type );
                break;
        }
    },
    getCurrentContent                   : function () {
        return this.dom_element.innerText;
    },
    getCurrentElementOfJsonEditor       : function () {
        let element;
        const selection = window.getSelection();
        if ( selection.rangeCount > 0 ) {
            const range        = selection.getRangeAt( 0 );
            let currentElement = range.startContainer;
            while ( currentElement && currentElement.nodeType === Node.TEXT_NODE ) {
                currentElement = currentElement.parentNode;
            }
            
            element = currentElement;
        }
        return element;
    },
    computeErrorContent                 : function () {
        this.data_with_error  = {};
        const _error_contents = this.content.querySelectorAll( "." + GS.OBJECT.JSON_EDITOR.CLASS_ERROR );
        for ( let i = 0, _size_i = _error_contents.length; i < _size_i; i++ ) {
            if ( _error_contents[ i ].dataset.jsonUuidPart ) {
                this.data_with_error[ _error_contents[ i ].dataset.jsonUuidPart ] = _error_contents[ i ].innerText;
            }
        }
    },
    parseToHtml                         : function ( key, to_parse ) {
        let _to_return = '';
        if ( to_parse.__class_name__ === "GS.OBJECT.Param" ) {
            let _value = to_parse.getUserValue() === undefined ? "" : to_parse.getUserValue();
            
            if ( typeof _value === 'string' ) {
                return this.parseStringToHtml( key, _value, to_parse );
            }
            else if ( typeof _value === 'number' ) {
                return this.parseNumberToHtml( key, _value, to_parse );
            }
            else if ( typeof _value === 'boolean' ) {
                return this.parseBooleanToHtml( key, _value, to_parse );
            }
            else if ( _value instanceof Array ) {
                return this.parseArrayToHtml( key, _value, to_parse );
            }
            return this.parseObjectToHtml( key, _value, to_parse );
        }
        else if ( to_parse instanceof Array ) {
            _to_return += this.parseArrayToHtml( key, to_parse );
        }
        else if ( typeof to_parse === 'object' ) {
            _to_return += this.parseObjectToHtml( key, to_parse );
        }
        else if ( typeof to_parse === 'string' ) {
            return this.parseStringToHtml( key, to_parse );
        }
        else if ( typeof to_parse === 'number' ) {
            return this.parseNumberToHtml( key, to_parse );
        }
        else if ( typeof to_parse === 'boolean' ) {
            return this.parseBooleanToHtml( key, to_parse );
        }
        else {
            _to_return += '{}';
        }
        return _to_return;
    },
    parseObjectToHtml                   : function ( key, to_parse, object_with_json_information ) {
        if ( to_parse.json_list_content ) {
            return this.parseArrayToHtml( key, to_parse.json_list_content, to_parse );
        }
        let uuid_of_element = "";
        if ( to_parse[ GS.OBJECT.JSON_EDITOR.SHINKEN_JSON_UUID_ANCHOR ] ) {
            uuid_of_element = ' data-json-uuid-part="' + to_parse[ GS.OBJECT.JSON_EDITOR.SHINKEN_JSON_UUID_ANCHOR ][ 0 ] + '"';
        }
        delete to_parse[ GS.OBJECT.JSON_EDITOR.SHINKEN_JSON_UUID_ANCHOR ];
        let _to_return = '<span ' + uuid_of_element + ' class="' + this.parseJsonTagToClassCss( key, object_with_json_information ) + '" ' + this.parseJsonTagToAttribute( key, object_with_json_information ) + '>{';
        let _keys      = Object.keys( to_parse );
        if ( _keys.length ) {
            _to_return += this.buildUlEntry( key, to_parse );
            let _current_key;
            _keys = Object.keys( to_parse ); //TO KEEP THERE BECAUSE THE KEYS CAN CHANGE
            for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
                _current_key = _keys[ i ];
                _to_return += this.buildLiEntry( key, to_parse );
                _to_return += this.buildKeyEntry( _current_key );
                _to_return += this.parseToHtml( _current_key, to_parse[ _keys[ i ] ] );
                if ( i < _keys.length - 1 ) {
                    _to_return += ",";
                }
                _to_return += "</div></li>";
            }
            _to_return += "</ul>";
        }
        _to_return += "}</span>";
        return _to_return;
    },
    parseArrayToHtmlWithListKeys        : function ( to_parse, object_with_json_information ) {
        let _to_return = "";
        for ( let i = 0, _size_i = object_with_json_information[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].with_list_key.length; i < _size_i; i++ ) {
            _to_return += "<div>";
            _to_return += this.buildDivEntry( i, object_with_json_information );
            const _current_list_keys = object_with_json_information[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].contents[ object_with_json_information[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].with_list_key[ i ] ].list_keys;
            if ( !_current_list_keys ) {
                continue;
            }
            for ( let j = 0, _size_j = _current_list_keys.length; j < _size_j; j++ ) {
                _to_return += this.parseArrayToHtmlWithListKeys_forKey( _current_list_keys[ j ], to_parse );
            }
            _to_return += "</div></div>";
        }
        return _to_return;
    },
    parseArrayToHtmlWithListKeys_forKey : function ( key, to_parse ) {
        if ( to_parse[ key ][ GS.OBJECT.JSON_EDITOR.JSON_INDEX_ALREADY_WRITE ] ) {
            return "";
        }
        let _to_return = this.buildLiEntry( key );
        _to_return += this.parseToHtml( key, to_parse[ key ] );
        if ( typeof to_parse[ key ] === "object" ) {
            to_parse[ key ][ GS.OBJECT.JSON_EDITOR.JSON_INDEX_ALREADY_WRITE ] = true;
        }
        if ( !this.isLastIndexArrayDisplayed( to_parse ) ) {
            _to_return += ",";
        }
        _to_return += "</div></li>";
        return _to_return;
    },
    isLastIndexArrayDisplayed           : function ( array ) {
        for ( let i = 0, _size_i = array.length; i < _size_i; i++ ) {
            if ( !array[ i ][ GS.OBJECT.JSON_EDITOR.JSON_INDEX_ALREADY_WRITE ] ) {
                return false;
            }
        }
        return true;
    },
    parseObjectToHtmlWithListKeys       : function ( key, to_parse ) {
        let _to_return = "";
        for ( let i = 0, _size_i = to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].with_list_key.length; i < _size_i; i++ ) {
            _to_return += "<div>";
            _to_return += this.buildDivEntry( to_parse, i );
            const _current_list_keys = to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].contents[ to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].with_list_key[ i ] ].list_keys;
            if ( !_current_list_keys ) {
                continue;
            }
            for ( let j = 0, _size_j = _current_list_keys.length; j < _size_j; j++ ) {
                _to_return += this.parseObjectToHtmlWithListKeys_forKey( _current_list_keys[ j ], to_parse );
            }
            _to_return += "</div></div>";
        }
        return _to_return;
    },
    parseObjectToHtmlWithListKeys_forKey: function ( key, to_parse ) {
        if ( to_parse[ key ] === undefined ) {
            return ""; //PATCH if a key was already used, it is not anymore available (deleted)
        }
        let _to_return = this.buildLiEntry( key );
        _to_return += '<span class="k">"' + GS.TOOLS.STRING.cleanXss( key ) + '"</span> : ';
        _to_return += this.parseToHtml( key, to_parse[ key ] );
        delete to_parse[ key ];
        if ( Object.keys( to_parse ).length > 1 ) { // AT THIS MOMENT THERE IS AT LEAST THE PROPERTY JSON_FORMAT_INFORMATION
            _to_return += ",";
        }
        _to_return += "</div></li>";
        return _to_return;
    },
    parseArrayToHtml                    : function ( key, to_parse, object_with_json_information ) {
        let uuid_of_element = "";
        if ( object_with_json_information && object_with_json_information[ GS.OBJECT.JSON_EDITOR.SHINKEN_JSON_UUID_ANCHOR ] ) {
            uuid_of_element = ' data-json-uuid-part="' + object_with_json_information[ GS.OBJECT.JSON_EDITOR.SHINKEN_JSON_UUID_ANCHOR ][ 0 ] + '"';
            delete object_with_json_information[ GS.OBJECT.JSON_EDITOR.SHINKEN_JSON_UUID_ANCHOR ];
        }
        let _to_return = '<span ' + uuid_of_element + 'class="' + this.parseJsonTagToClassCss( key, to_parse ) + '" ' + this.parseJsonTagToAttribute( key, to_parse ) + '>[';
        if ( object_with_json_information && object_with_json_information[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ] ) {
            _to_return = '<span class="' + this.parseJsonTagToClassCss( key, object_with_json_information ) + '" ' + this.parseJsonTagToAttribute( key, object_with_json_information ) + '>[';
        }
        if ( to_parse.length ) {
            _to_return += "<ol class='A'>";
            if ( object_with_json_information && object_with_json_information[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ] && object_with_json_information[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].with_list_key.length ) {
                _to_return += this.parseArrayToHtmlWithListKeys( to_parse, object_with_json_information );
            }
            for ( let i = 0, _size_i = to_parse.length; i < _size_i; i++ ) {
                _to_return += this.parseArrayToHtmlWithListKeys_forKey( i, to_parse );
            }
            _to_return += "</ol>";
        }
        _to_return += ']</span>';
        return _to_return;
    },
    parseStringToHtml                   : function ( key, string, to_parse ) {
        if ( string === this.default_tag && !(to_parse && to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ]) ) {
            return '<span class="X ' + this.parseJsonTagToClassCss( key, to_parse ) + '" data-dft-val="' + this.default_tag + '" ' + this.parseJsonTagToAttribute( key, to_parse ) + '>"' + this.default_tag + '"</span>';
        }
        const string_escape = GS.TOOLS.STRING.cleanXss( string );
        return '<span class="' + this.parseJsonTagToClassCss( key, to_parse ) + '" ' + this.parseJsonTagToAttribute( key, to_parse ) + '>"' + string_escape + '"</span>';
    },
    parseBooleanToHtml                  : function ( key, boolean, to_parse ) {
        return this.parseNumberToHtml( key, boolean, to_parse );
    },
    parseNumberToHtml                   : function ( key, number, to_parse ) {
        return '<span class="' + this.parseJsonTagToClassCss( key, to_parse ) + '" ' + this.parseJsonTagToAttribute( key, to_parse ) + '>' + number + '</span>';
    },
    parseJsonTagToClassCss              : function ( key, to_parse, index ) {
        let _to_return = "";
        if ( to_parse ) {
            if ( this.isEditableKeyElement( key ) ) {
                _to_return = "sk-json-edit-val";
            }
        }
        if ( to_parse && to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ] ) {
            for ( let i = 0, _size_i = to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].contents.length; i < _size_i; i++ ) {
                if ( index !== undefined && index !== i ) {
                    continue;
                }
                _to_return += " " + (to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].contents[ i ].class || "");
            }
        }
        return _to_return;
    },
    parseJsonTagToAttribute             : function ( key, to_parse, index ) {
        let _to_return = "";
        if ( to_parse ) {
            if ( this.isEditableKeyElement( key ) ) {
                _to_return = 'data-key="' + key + '"';
            }
        }
        if ( to_parse && to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ] ) {
            let _tooltip = "";
            for ( let i = 0, _size_i = to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].contents.length; i < _size_i; i++ ) {
                if ( index !== undefined && index !== i ) {
                    continue;
                }
                _to_return += ' data-json-uuid-part="' + to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].contents[ i ].uuid + '"';
                _tooltip += to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].contents[ i ].tooltip;
            }
            if ( _tooltip ) {
                _to_return += ' onmouseenter="SHINKEN_TOOLTIP.showTooltip(this)" onmouseleave="SHINKEN_TOOLTIP.hideTooltip()" shi-tip-type="gs-warning" shi-tip-html="' + GS.TOOLS.STRING.cleanXssForTooltipWithUserData( _tooltip ) + '"';
            }
        }
        return _to_return;
    },
    isEditableKeyElement                : function ( key ) {
        return false;
    },
    isLabelOfEditableKey                : function () {
        return false;
    },
    buildUlEntry                        : function ( key, to_parse ) {
        let _to_return = "";
        if ( to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ] ) {
            if ( to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ].with_list_key.length ) {
                _to_return += '<ul class="D">';
                _to_return += this.parseObjectToHtmlWithListKeys( key, to_parse );
            }
            else {
                _to_return += '<ul class="D ' + this.parseJsonTagToClassCss( key, to_parse ) + '" ' + this.parseJsonTagToAttribute( key, to_parse ) + '>';
            }
            delete to_parse[ GS.OBJECT.JSON_EDITOR.JSON_FORMAT_INFORMATION ];
        }
        else {
            _to_return += '<ul class="D">';
        }
        return _to_return;
    },
    buildKeyEntry                       : function ( key ) {
        if ( this.isLabelOfEditableKey( key ) ) {
            return '<span data-label-key="' + key + '" class="k">"' + GS.TOOLS.STRING.cleanXss( key ) + '"</span> : ';
        }
        return '<span class="k">"' + GS.TOOLS.STRING.cleanXss( key ) + '"</span> : ';
    },
    buildLiEntry                        : function ( key, to_parse ) {
        return '<li><div class="' + this.parseJsonTagToClassCss( key, to_parse ) + '" ' + this.parseJsonTagToAttribute( key, to_parse ) + '>';
    },
    buildDivEntry                       : function ( to_parse, index ) {
        return '<div class="z' + this.parseJsonTagToClassCss( '', to_parse, index ) + '" ' + this.parseJsonTagToAttribute( '    ', to_parse, index ) + '>';
    },
    updateHtml                          : function () {
        SERVICE.DOM.addElementToAfterEmpty( this.content, this.dom_element );
        this.dom_element.classList.add( "gs-json-editor-container" );
        this.dom_element.setAttribute( "contenteditable", "true" );
    },
    cleanHtmlAfterEdition               : function () {
        this.updateDefaultValueHtml();
        this.removeErrorAfterUpdate();
    },
    updateDefaultValueHtml              : function () {
        const _default_value_doms = this.dom_element.querySelectorAll( "[data-dft-val]" );
        for ( let i = 0, _size_i = _default_value_doms.length; i < _size_i; i++ ) {
            SERVICE.DOM.addOrRemoveClasses( _default_value_doms[ i ], _default_value_doms[ i ].innerText === '"' + _default_value_doms[ i ].dataset.dftVal + '"', "X" );
        }
    },
    removeErrorAfterUpdate              : function () {
        const _keys                         = Object.keys( this.data_with_error );
        const uuid_error_modified_for_cells = [];
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            const _current_key = _keys[ i ];
            const _current_dom = this.dom_element.querySelector( '.' + GS.OBJECT.JSON_EDITOR.CLASS_ERROR + '[data-json-uuid-part="' + _current_key + '"]' );
            if ( _current_dom && !this._is_same_text( _current_dom.innerText, this.data_with_error[ _current_key ] ) ) {
                _current_dom.classList.remove( GS.OBJECT.JSON_EDITOR.CLASS_ERROR );
                SERVICE.DOM.removeTooltip( _current_dom );
                delete this.data_with_error[ _current_key ];
                let parent_for_cell = SERVICE.DOM.findParentElementWithDataSet( _current_dom.parentElement, 'jsonUuidPart', 50 );
                if ( parent_for_cell ) {
                    uuid_error_modified_for_cells.push( parent_for_cell.getAttribute( 'data-json-uuid-part' ) );
                }
            }
        }
    },
    _is_same_text                       : function ( text_1, text_2 ) {
        return GS.TOOLS.STRING.replaceAll( text_1, "\n", "" ) === GS.TOOLS.STRING.replaceAll( text_2, "\n", "" );
    },
    getController                       : function () {
        return CONTROLLER.CommonUI;
    },
    changeDefaultValueToValue           : function ( array_data_to_change, default_grid_values, widget_type ) {
        array_data_to_change.forEach( data_to_change => {
            switch ( data_to_change.property_name ) {
                case SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT:
                    if ( data_to_change.property_new_value === default_grid_values[ widget_type ][ SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ].getCfgValue() ) {
                        return;
                    }
                    break;
                case SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH:
                    if ( data_to_change.property_new_value === "all" || data_to_change.property_new_value === default_grid_values[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_X ].getCfgValue() ) {
                        return;
                    }
                    break;
            }
            data_to_change.property_data.setUserValueAndValue( data_to_change.property_new_value );
            data_to_change.dom_element.innerHTML = this.buildKeyEntry( data_to_change.property_name ) + this.parseToHtml( data_to_change.property_name, data_to_change.property_data ) + ',';
        } );
    },
    changeGridHeightValue               : function ( label_key, new_value, default_value ) {
        let new_element_html = this.buildKeyEntry( label_key );
        if ( new_value === default_value ) {
            new_element_html += this.parseStringToHtml( '', this.default_tag );
        }
        else {
            new_element_html += this.parseToHtml( label_key, new_value );
        }
        let dom_element_height                     = this.dom_element.querySelector( '[data-label-key="' + label_key + '"]' );
        dom_element_height.parentElement.innerHTML = new_element_html + ',';
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.JsonEditor, GS.OBJECT.GsObject );
GS.OBJECT.JsonEditorService      = (function ( self ) {
    var __LINE_TAG__       = "__SHINKEN_LINE_TAG__";
    self.computeValidation = function ( dom_element ) {
        let _text_parsed = _parseJsonDomElementToText( dom_element );
        _text_parsed     = GS.TOOLS.STRING.replaceAll( _text_parsed, __LINE_TAG__, "\n" );
        return [_text_parsed, GS.TOOLS.STRING.JSON.isFormatJsonInvalid( _text_parsed )];
    };
    self.computeLineNumber = function ( dom_element, error_line ) {
        const _computed_style = SERVICE.DOM.getComputedStyles( dom_element, ["padding-bottom", "padding-top", "line-height", "height"] );
        const number_line     = (dom_element.scrollHeight - _computed_style[ "padding-bottom" ] - _computed_style[ "padding-top" ]) / _computed_style[ "line-height" ];
        let _html             = '';
        for ( let i = 1, _size = number_line; i <= _size; i++ ) {
            if ( i === error_line ) {
                _html += '<div class="gs-line-number gs-weather-json-form-line-error" data-number="' + i + '">' + i + '</div>';
            }
            else {
                _html += '<div class="gs-line-number" data-number="' + i + '">' + i + '</div>';
            }
        }
        const _container     = document.querySelector( '.gs-textarea-line-nums' );
        _container.innerHTML = _html;
        if ( error_line ) {
            self.scrollToError( dom_element, error_line );
        }
        _container.style.transform = "translateY(-" + dom_element.scrollTop + "px)";
    };
    self.scrollToError     = function ( dom_element, error_line ) {
        const _computed_style = SERVICE.DOM.getComputedStyles( dom_element, ["padding-bottom", "padding-top", "line-height", "height"] );
        dom_element.scrollTo( 0, (error_line) * _computed_style[ "line-height" ] - _computed_style[ "height" ] / 2 );
    };
    
    var _parseJsonDomElementToText = function ( dom_element ) {
        const clone    = SERVICE.DOM.cloneElement( dom_element );
        let _text      = clone.innerHTML;
        _text          = GS.TOOLS.STRING.replaceAll( _text, "<li", __LINE_TAG__ + "<li" );
        _text          = GS.TOOLS.STRING.replaceAll( _text, "</ol>", __LINE_TAG__ + "</ol>" );
        _text          = GS.TOOLS.STRING.replaceAll( _text, "</ul>", __LINE_TAG__ + "</ul>" );
        const _new_dom = SERVICE.DOM.createElement( "div", {}, _text );
        const _text_2  = _new_dom.innerText;
        return GS.TOOLS.STRING.replaceAll( _text_2, __LINE_TAG__, "\n" );
    };
    
    return self;
})( GS.OBJECT.JsonEditorService || {} );
GS.OBJECT.JsonForm               = function ( dom_element ) {
    this.__class_name__ = 'GS.OBJECT.JsonForm';
    this.init( dom_element );
};
GS.OBJECT.JsonForm.prototype     = {
    init                : function ( dom_element ) {
        this.dom_element                     = dom_element;
        this.message_invalid                 = "";
        this.timeout_computeEditorLineNumber = null;
        this.line_invalid                    = 0;
    },
    doActionAfter       : function ( event_name, param ) {
        switch ( event_name ) {
            case "focus-on-anchor-json":
                let grid_cell_uuid = param[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ] || param[ SHINKEN_GRID.CONST.PARAM.EVENT.FOCUSED_WIDGET ].getUUID();
                let _to_return     = this.dom_element.querySelector( "[data-json-uuid-part='" + grid_cell_uuid + "']" );
                SERVICE.DOM.focusOnAnchor_withDom( _to_return, this.dom_element, new SERVICE.DOM.Animation( "gs-pulsate", 1600 ), 5 );
                return _to_return;
            case "click_on_button_V3":
                switch ( param[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case "copy_to_clipboard":
                        if ( this.isValid() ) {
                            CLIPBOARD_SERVICE.setContent( param.event.target, JSON.stringify( JSON.parse( this.getText() ), null, 2 ) );
                        }
                        else {
                            CLIPBOARD_SERVICE.setContent( param.event.target, this.getCurrentContent(), WEATHER.Page.prototype.copyJsonCallbackJSONInvalid );
                        }
                        SHINKEN_TOOLTIP.hideTooltip();
                        break;
                }
                break;
        }
    },
    isValid             : function () {
        return !this.error_syntax;
    },
    getText             : function () {
        return this.text;
    },
    askComputeLineNumber: function ( timeout ) {
        timeout    = timeout || 0;
        const self = this;
        if ( self.timeout_computeEditorLineNumber ) {
            clearTimeout( self.timeout_computeEditorLineNumber );
        }
        self.timeout_computeEditorLineNumber = setTimeout( function () {
            const _interval_done = setInterval( function () {
                if ( self.dom_element.scrollHeight ) {
                    GS.OBJECT.JsonEditorService.computeLineNumber( self.dom_element, self.line_invalid );
                    clearInterval( _interval_done );
                }
            }, 100 );
        }, timeout );
    },
    scrollToError       : function () {
        GS.OBJECT.JsonEditorService.scrollToError( this.dom_element, this.line_invalid );
    },
    computeIsValid      : function () {
        this.line_invalid = 0;
        const _analyze    = GS.OBJECT.JsonEditorService.computeValidation( this.dom_element );
        this.text         = _analyze[ 0 ];
        this.error_syntax = _analyze[ 1 ];
        if ( !this.isValid() ) {
            if ( GS.NAVIGATOR.isNavigator( 'isFireFox' ) ) {
                this.line_invalid = parseInt( GS.TOOLS.STRING.extractBetween( this.error_syntax.toString(), 'at line ', ' column' ) );
            }
            else {
                this.line_invalid = parseInt( GS.TOOLS.STRING.extractBetween( this.error_syntax.toString(), 'line ', ' column' ) );
            }
            this.message_invalid = GS.TOOLS.STRING.format( _( "json_editor.invalid_json", [DICTIONARY_COMMON_UI] ), this.line_invalid );
        }
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
GS.OBJECT.NOTIFICATION        = GS.OBJECT.NOTIFICATION || {};
GS.OBJECT.NOTIFICATION.CONST  = GS.OBJECT.NOTIFICATION.CONST || {
    CONTAINER: {
        ID: 'gs-notification-popup-container'
    },
    STATUS   : {
        ERROR       : 'error',
        WARNING     : 'warning',
        INFO        : 'info',
        SUCCESS     : 'success',
        COPY_SUCCESS: 'copy_success',
        COPY_FAILED : 'copy_failed'
    },
    PLACEMENT: {
        TOP                         : 0,
        RIGHT                       : 1,
        BOTTOM                      : 2,
        LEFT                        : 3,
        SPECIFIC_TITLE_HIVE         : 4,
        SPECIFIC_TITLE_LIST         : 5,
        COPY_NOTIFICATION_SUCCESS   : 6,
        COPY_NOTIFICATION_FAILED    : 7,
        SPECIFIC_COPY_GRID_PAGE_JSON: 8
    },
    OF_CHANGE: {
        FIELD: {
            SOUND  : "sound",
            VISUAL : "visual",
            BLINK  : "blink",
            ENABLED: "enabled",
            VOLUME : "volume"
        },
        VALUE: {
            DEFAULT: "default",
            ON     : "ON",
            OFF    : "OFF"
        }
    }
};
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
GS.OBJECT.SLIDE_PANEL          = {
    TYPE    : {
        HORIZONTAL_RIGHT: "HORIZONTAL_RIGHT",
        HORIZONTAL_LEFT : "HORIZONTAL_LEFT",
        VERTICAL_TOP    : "VERTICAL_TOP",
        VERTICAL_BOTTOM : "VERTICAL_BOTTOM"
    },
    POSITION: {
        RIGHT : "RIGHT",
        LEFT  : "LEFT",
        TOP   : "TOP",
        BOTTOM: "BOTTOM"
    },
    WIDTH   : {
        SMALL: 450
    },
    ACTION  : {
        PIN_TO_MIN_SIZE_PART_ADDED   : "pin_to_min_size_part_added",
        PIN_TO_MIN_SIZE_PART_EXISTING: "pin_to_min_size_part_existing"
    },
    PARAM   : {
        NAME         : "slide_panel_name",
        OBJECT       : "slide_panel_object",
        DRAG_N_DROP  : "slide_panel_drag_n_drop",
        SIZE_EXISTING: "size_existing_slide_panel",
        SIZE_ADDED   : "size_added_slide_panel"
    }
};
GS.OBJECT.SlidePanel           = function ( name, dom_element__part_existing ) {
    this.init( name, dom_element__part_existing );
};
GS.OBJECT.SlidePanel.prototype = {
    init                     : function ( name, dom_element__part_existing ) {
        this.initCommon( name, dom_element__part_existing );
    },
    initCommon               : function ( name, dom_element__part_existing ) {
        this.type = this.type || GS.OBJECT.SLIDE_PANEL.TYPE.HORIZONTAL_RIGHT;
        this.initPhase();
        this.setName( name );
        this.setExistingDomElement( dom_element__part_existing );
    },
    open__20240925           : function () {
        this.setPhase( GS.OBJECT.CONST.PHASE.RUNNING );
    },
    close__20240925          : function () {
        this.setPhaseIfDifferent( GS.OBJECT.CONST.PHASE.HIDDEN, GS.OBJECT.CONST.PHASE.HIDDEN );
    },
    doActionAfter            : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon      : function ( event_name, param ) {
        switch ( event_name ) {
            case "click_on_button_V3":
                switch ( param[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case GS.OBJECT.SLIDE_PANEL.ACTION.PIN_TO_MIN_SIZE_PART_ADDED:
                        this.setSize__20240926( this.getMinSize__partAdded() );
                        break;
                    case GS.OBJECT.SLIDE_PANEL.ACTION.PIN_TO_MIN_SIZE_PART_EXISTING:
                        this.setSize__20240926( this.getMaxSize__partAdded() );
                        break;
                }
                break;
            case "compute_html_done":
                this.size_window = this.getCurrentSize__window();
                this.computeSize__parent();
                this.computeInitialSize();
                this.setSize__20240926( this.getSize__partAdded() );
                break;
            case "on_drag_start":
                this.onDragStart( param[ MANAGER.DragNDropManager.EVENT_PARAM.ORIGIN_X ], param[ MANAGER.DragNDropManager.EVENT_PARAM.ORIGIN_Y ] );
                break;
            case "on_drag_move":
                this.onDragMove( param[ MANAGER.DragNDropManager.EVENT_PARAM.DELTA_X ], param[ MANAGER.DragNDropManager.EVENT_PARAM.DELTA_Y ] );
                break;
            case "on_drag_stop":
                this.onDragStop();
                break;
        }
    },
    setSize__20240926        : function ( size__part_added, is_drag_n_drop ) {
        if ( !this.isPhase( GS.OBJECT.CONST.PHASE.RUNNING ) ) {
            return;
        }
        size__part_added         = Math.max( size__part_added, this.getMinSize__partAdded() );
        size__part_added         = Math.min( size__part_added, this.getMaxSize__partAdded() );
        let size__part_existing  = this.getSize__parent() - size__part_added - this.getSizeButtons();
        const is_part_size_small = size__part_existing < GS.OBJECT.SLIDE_PANEL.WIDTH.SMALL;
        SERVICE.DOM.setStyle( this.dom_element__part_added, this.getStyleKey(), size__part_added );
        SERVICE.DOM.setStyle( this.dom_element__part_existing, this.getStyleKey(), size__part_existing );
        SERVICE.DOM.addOrRemoveClasses( this.dom_element__part_existing, is_part_size_small, "gs-slide-panel-main-part-is-small" );
        if ( !is_drag_n_drop ) {
            this.size__part_added = size__part_added;
        }
        this.computeStatePinButtons();
        this.computeSize__parent();
        this.getController_20241003().doActionAfter( "slide_panel__size__has_changed", {
            [ GS.OBJECT.SLIDE_PANEL.PARAM.OBJECT ]       : this,
            [ GS.OBJECT.SLIDE_PANEL.PARAM.DRAG_N_DROP ]  : !!is_drag_n_drop,
            [ GS.OBJECT.SLIDE_PANEL.PARAM.SIZE_ADDED ]   : size__part_added,
            [ GS.OBJECT.SLIDE_PANEL.PARAM.SIZE_EXISTING ]: size__part_existing
        } );
    },
    getSizeButtons           : function () {
        return 22;
    },
    setMinSize               : function ( min_size__part_existing, min_size__part_added ) {
        this.min_size__part_existing = min_size__part_existing || this.min_size__part_existing || 0;
        this.min_size__part_added    = min_size__part_added || this.min_size__part_added || 0;
    },
    setInitialSize           : function ( to_set_ratio, to_set_pixel ) {
        this.initial_ratio = to_set_ratio;
        this.initial_pixel = to_set_pixel;
    },
    getSize__partAdded       : function () {
        return this.size__part_added;
    },
    getMinSize__partExisting : function () {
        return this.min_size__part_existing;
    },
    getMinSize__partAdded    : function () {
        return this.min_size__part_added;
    },
    getMaxSize__partAdded    : function () {
        return this.getSize__parent() - this.getMinSize__partExisting() - this.getSizeButtons();
    },
    getSize__parent          : function () {
        return this.size_parent;
    },
    getSize__window          : function () {
        return this.size_window;
    },
    getCurrentRatio          : function () {
        return this.getSize__partAdded() / this.getSize__parent();
    },
    setLoading               : function ( to_set ) {
        if ( !to_set ) {
            return;
        }
        if ( !this.dom_element_loading ) {
            this.dom_element_loading         = SERVICE.DOM.createElement( "div", { class: "gs-panel-loading-container" } );
            var _content                     = SERVICE.DOM.createElement( "div", { class: "gs-panel-loading-content" } );
            this.dom_element_loading_message = SERVICE.DOM.createElement( "div", { class: "gs-panel-loading-message" } );
            var _icon                        = SERVICE.DOM.createElement( "div", { class: "gs-panel-loading-icon" }, '<span class="shinkon shinkon-reload"></span>' );
            SERVICE.DOM.addElementTo( this.dom_element_loading_message, _content );
            SERVICE.DOM.addElementTo( _icon, _content );
            SERVICE.DOM.addElementTo( _content, this.dom_element_loading );
        }
        this.dom_element_loading_message.innerHTML = to_set;
        this.setContent__20240925( this.dom_element_loading );
    },
    setContent__20240925     : function ( to_set, is_loading ) {
        this.content_html = to_set;
        if ( this.dom_element__part_added ) {
            SERVICE.DOM.addElementToAfterEmpty( this.content_html, this.dom_element__part_added );
        }
        this.doActionAfter( "slide_panel__set_content__done", {
            [ GS.OBJECT.SLIDE_PANEL.PARAM.OBJECT ]: this
        } );
        this.addDoActionAfterCallBackPhaseBecome( GS.OBJECT.CONST.PHASE.RUNNING, "slide_panel__size__has_changed", {} );
    },
    setName                  : function ( to_set ) {
        this.name = to_set;
    },
    getName                  : function () {
        return this.name;
    },
    setType                  : function ( to_set ) {
        this.type = to_set;
    },
    setExistingDomElement    : function ( to_set ) {
        this.dom_element__part_existing   = to_set;
        this.dom_element_parent__20240925 = this.dom_element__part_existing.parentElement;
    },
    getCurrentSize__partAdded: function () {
        return SERVICE.DOM.getBoundingClientRect( this.dom_element__part_added, this.getStyleKey() );
    },
    getStyleKey              : function () {
        switch ( this.type ) {
            case GS.OBJECT.SLIDE_PANEL.TYPE.HORIZONTAL_LEFT:
            case GS.OBJECT.SLIDE_PANEL.TYPE.HORIZONTAL_RIGHT:
                return DOM.CONST.STYLE.WIDTH;
            case GS.OBJECT.SLIDE_PANEL.TYPE.VERTICAL_TOP:
            case GS.OBJECT.SLIDE_PANEL.TYPE.VERTICAL_BOTTOM:
                return DOM.CONST.STYLE.HEIGHT;
        }
    },
    getCurrentSize__window   : function () {
        switch ( this.type ) {
            case GS.OBJECT.SLIDE_PANEL.TYPE.HORIZONTAL_LEFT:
            case GS.OBJECT.SLIDE_PANEL.TYPE.HORIZONTAL_RIGHT:
                return window.innerWidth;
            case GS.OBJECT.SLIDE_PANEL.TYPE.VERTICAL_TOP:
            case GS.OBJECT.SLIDE_PANEL.TYPE.VERTICAL_BOTTOM:
                return window.innerHeight;
        }
    },
    onDragStart              : function ( origin_x, origin_y ) {
        this.origin_x   = origin_x;
        this.origin_y   = origin_y;
        this.is_drag_on = true;
    },
    onDragMove               : function ( delta_x, delta_y ) {
        switch ( this.type ) {
            case GS.OBJECT.SLIDE_PANEL.TYPE.HORIZONTAL_LEFT:
                this.setSize__20240926( this.getSize__partAdded() + delta_x, true );
                break;
            case GS.OBJECT.SLIDE_PANEL.TYPE.HORIZONTAL_RIGHT:
                this.setSize__20240926( this.getSize__partAdded() - delta_x, true );
                break;
            case GS.OBJECT.SLIDE_PANEL.TYPE.VERTICAL_TOP:
                this.setSize__20240926( this.getSize__partAdded() + delta_y, true );
                break;
            case GS.OBJECT.SLIDE_PANEL.TYPE.VERTICAL_BOTTOM:
                this.setSize__20240926( this.getSize__partAdded() - delta_y, true );
                break;
        }
    },
    onDragStop               : function () {
        this.size__part_added = this.getCurrentSize__partAdded();
        this.is_drag_on       = false;
    },
    computeSize__parent      : function () {
        this.size_parent = SERVICE.DOM.getBoundingClientRect( this.dom_element_parent__20240925, this.getStyleKey() );
    },
    computeStatePinButtons   : function () {
        let size__part_added = this.getCurrentSize__partAdded();
        SERVICE.DOM.addOrRemoveClasses( this.dom_element__part_buttons, this.getMaxSize__partAdded() === size__part_added, "gs-max-on" );
        SERVICE.DOM.addOrRemoveClasses( this.dom_element__part_buttons, this.getMinSize__partAdded() === size__part_added, "gs-min-on" );
    },
    computeInitialSize       : function () {
        if ( this.initial_pixel ) {
            this.size__part_added = this.initial_pixel;
        }
        else {
            if ( !this.initial_ratio ) {
                this.setInitialSize( 0.5 );
            }
            this.size__part_added = this.getSize__parent() * this.initial_ratio;
        }
    },
    computeSizes__20240926   : function ( force_compute ) {
        if ( !this.isPhase( GS.OBJECT.CONST.PHASE.RUNNING ) ) {
            return;
        }
        this.getDomElement().classList.add( "gs-hidden" ); //NEEDED IN ORDER TO IGNORE SIZE HARD SET.
        var new_window_size = this.getCurrentSize__window();
        var ratio_resize    = new_window_size / this.getSize__window();
        this.computeSize__parent();
        this.getDomElement().classList.remove( "gs-hidden" );
        if ( !force_compute && ratio_resize === 1 ) {
            return;
        }
        this.setSize__20240926( this.getSize__partAdded() * ratio_resize );
        this.size_window = new_window_size;
    },
    callbackForPhase         : function () {
        this.callbackForPhaseCommon();
    },
    callbackForPhaseCommon   : function () {
        const _current = this.getCurrentPhase();
        if ( this.getPreviousPhase() === _current ) {
            return;
        }
        switch ( _current ) {
            case GS.OBJECT.CONST.PHASE.RUNNING:
                this.computeHtml();
                break;
            case GS.OBJECT.CONST.PHASE.HIDDEN:
                this.restoreStructure();
                break;
        }
    },
    computeHtml              : function () {
        if ( this.getDomElement() ) {
            return;
        }
        this._computeHtml();
        this.addDomElement( this.dom_element__part_added );
        this.addDomElement( this.dom_element__part_buttons );
        this.addDomElement( this.dom_element__part_existing );
        this.doActionAfter( "compute_html_done" );
    },
    _computeHtml             : function () {
        this.setDomElement( SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-slide-panel-container", "data-type": this.type } ), this.dom_element_parent__20240925 ) );
        this.dom_element__part_added = SERVICE.DOM.createElement( "div", {
            class: "gs-slide-panel-content"
        } );
        if ( this.content_html ) {
            SERVICE.DOM.addElementTo( this.content_html, this.dom_element__part_added );
        }
        this.dom_element__part_buttons = this.computeButtonHtml();
    },
    computeButtonHtml        : function () {
        let _to_return = SERVICE.DOM.createElement( "div", { class: "gs-slide-panel-buttons-part gs-user-select-none" } );
        let _div       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-slide-panel-buttons-containers" } ), _to_return );
        
        let _button_min_added = new COMPONENT.ButtonFromData_V3( GS.OBJECT.SLIDE_PANEL.ACTION.PIN_TO_MIN_SIZE_PART_ADDED, "<span class='gs-slide-panel-button shinkon shinkon-double-chevron-up'></span>" );
        _button_min_added.addParamForEvents( GS.OBJECT.SLIDE_PANEL.PARAM.NAME, this.getName() );
        _button_min_added.computeHtml();
        SERVICE.DOM.addElementTo( _button_min_added.getDomElement(), _div );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class                          : "gs-slide-panel-button shinkon shinkon-resize-horizontal gs-draggable",
            "data-drag-is-in-screen"       : true,
            "data-drag-resize-element-name": this.name,
            onmousedown                    : "MANAGER.DragNDropManager.dragStartSingle(event)"
        } ), _div );
        
        let _button_min_existing = new COMPONENT.ButtonFromData_V3( GS.OBJECT.SLIDE_PANEL.ACTION.PIN_TO_MIN_SIZE_PART_EXISTING, "<span class='gs-slide-panel-button shinkon shinkon-double-chevron-down'></span>" );
        _button_min_existing.addParamForEvents( GS.OBJECT.SLIDE_PANEL.PARAM.NAME, this.getName() );
        _button_min_existing.computeHtml();
        SERVICE.DOM.addElementTo( _button_min_existing.getDomElement(), _div );
        
        return _to_return;
    },
    restoreStructure         : function () {
        this.initial_pixel = this.getCurrentSize__partAdded();
        SERVICE.DOM.setStyle( this.dom_element__part_existing, this.getStyleKey(), "" );
        SERVICE.DOM.addElementToAfterEmpty( this.dom_element__part_existing, this.dom_element_parent__20240925 );
        SERVICE.DOM.removeElement( this.getDomElement() );
        SERVICE.DOM.removeElement( this.dom_element__part_buttons );
        SERVICE.DOM.removeElement( this.dom_element__part_added );
        this.setDomElement();
        this.doActionAfter( "slide-panel-restore-structure-done" );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.SlidePanel, GS.OBJECT.GsObjectHtml );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.SlidePanel, GS.OBJECT.PhaseInterface );
GS.NETWORK                                           = {
    HTTP_CODE : {
        NONE                       : -1,
        _200_SUCCESS               : 200,
        _400_BAD_REQUEST           : 400,
        _401_UNAUTHORIZED          : 401,
        _403_FORBIDDEN             : 403,
        _404_NOT_FOUND             : 404,
        _409_CONFLICT              : 409,
        _410_CONFIGURATION_OUTDATED: 410,
        _500_INTERNAL_ERROR        : 500,
        _514_MODULE_NOT_WORKING    : 514
    },
    ERROR_TYPE: {
        USER_SWITCHED: "userSwitched"
    },
    ADRESSES  : {
        LOCALHOST : "localhost",
        _127_0_0_1: "127.0.0.1",
        HTTP      : "http://",
        HTTPS     : "https://"
    },
    URL_STATUS: {
        VALID            : "valid",
        WRONG_FORMAT_HTTP: "format_unvalid_http"
    }
    
};
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
GS.OBJECT.NotificationsOfChange                      = {};
GS.OBJECT.NotificationsOfChange._interface           = function () {
};
GS.OBJECT.NotificationsOfChange._interface.prototype = {
    init              : function ( data ) {
        this.timeout_ask_play_notification = null;
        if ( data ) {
            this.updateData( data );
        }
    },
    initPhase         : function () {
        this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VISUAL ].doActionAfter( "init_phase" );
        this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.SOUND ].doActionAfter( "reset_object" );
        this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.SOUND ].initPhase();
    },
    doActionAfter     : function ( event_name, param ) {
        switch ( event_name ) {
            case "ask_play_notifications":
                if ( this.timeout_ask_play_notification ) {
                    clearTimeout( this.timeout_ask_play_notification );
                }
                this.timeout_ask_play_notification = setTimeout( () => {
                    this.doActionAfter( "ask_play_notification_visual_blink", param );
                    this.doActionAfter( "ask_play_notification_of_sound", param );
                }, 200 );
                break;
            case "notification-configuration-set-dom-element-with-data":
            case "init_with_dom_element":
            case "init_phase_with_dom_element":
            case "click_done":
                this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VISUAL ].doActionAfter( event_name, param );
                this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.SOUND ].doActionAfter( event_name, param );
                break;
            case "change_value_notification_of_change_visual_blink":
            case "user_has_disabled_blink_notification":
            case "ask_play_notification_visual_blink":
            case "shinken_view_has_disabled_blink_notification":
            case "set_phase_blink_depending_number_of_change":
                this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VISUAL ].doActionAfter( event_name, param );
                break;
            case "ask_play_notification_of_sound":
            case "change_value_notification_of_change_sound":
            case "shinken_view_has_disabled_sound_notification":
            case "user_has_volume_muted_notification":
            case "set_phase_sound_depending_number_of_change":
                this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.SOUND ].doActionAfter( event_name, param );
                break;
            default:
                console.log( "[_interface - doActionAfter]", "[not managed case]", event_name, param );
                break;
        }
    },
    updateData        : function ( data ) {
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.setData( _currentKey, data[ _currentKey ] );
        }
    },
    setData           : function ( key, value ) {
        switch ( key ) {
            case GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.SOUND:
            case GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VISUAL:
                this[ key ].updateData( value );
                break;
            case "timeout_ask_play_notification":
                break;
            default:
                console.warn( "[NotificationsOfChange]", "[IGNORED DATA]", "[" + key + "]", value );
        }
    },
    getSoundValue     : function () {
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.SOUND ].getValue();
    },
    getVolumeValue    : function () {
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.SOUND ].getValue();
    },
    getBlinkValue     : function () {
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VISUAL ].getBlinkValue();
    },
    getBlinkDomElement: function () {
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VISUAL ].getBlinkDomElement();
    },
    getSoundDomElement: function () {
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.SOUND ].getDomElement();
    },
    getDataToSave     : function () {
        var _to_return                                                    = {};
        _to_return[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.SOUND ]  = this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.SOUND ].getDataToSave();
        _to_return[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VISUAL ] = this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VISUAL ].getDataToSave();
        return _to_return;
    }
};
GS.OBJECT.Dropdown                                   = GS.OBJECT.Dropdown || {};
GS.OBJECT.Dropdown._interface                        = function () {
};
GS.OBJECT.Dropdown._interface.prototype              = {
    init     : function ( dom_element_target, dom_element_content, placement ) {
        this.initPhase();
        this.setDomTargetElement( dom_element_target );
        this.dom_element_content = dom_element_content;
        this.placement           = placement || GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP;
        this.uuid                = SERVICE.STRING.buildUUID();
    },
    getUUID  : function () {
        return this.uuid;
    },
    getMaxTry: function () {
        return GS.OBJECT.Dropdown.CONST.MAX_TRY_IN_SCREEN;
    },
    getClass : function () {
        return "gs-dropdown-container";
    },
    show     : function () {
        if ( !this.getDomElement() ) {
            this.initDomElement();
        }
        this._show();
        
    },
    _show    : function () {
        this.try = 0;
        this.getSize();
        this.setPosition();
    },
    
    initDomElement: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { "id": this.getUUID(), "class": this.getClass() }, GS.OBJECT.Dropdown.CONST.HTML ) );
        this.setPhaseDomElement( this.getDomElement() );
        document.body.appendChild( this.getDomElement() );
        SERVICE.DOM.addElementTo( this.dom_element_content, this.getDomElement().querySelector( ".shi-tip-text" ) );
        this.doActionAfter( "do_action_after_init_dom_element" );
    },
    
    getSize               : function () {
        var _sizes  = this.getDomElement().getBoundingClientRect();
        this.width  = _sizes.width;
        this.height = _sizes.height;
    },
    doPlacementArrow      : function () {
    },
    setPosition           : function () {
        var _rect = this.dom_element_target.getBoundingClientRect();
        
        this.computePosition( _rect, _rect.width );
        
        if ( this.isInScreen() ) {
            if ( this.try > this.getMaxTry() ) {
                this.computePosition( _rect, _rect.width );
            }
            var self         = this;
            this.timeout_pop = setTimeout( function () {
                self.getDomElement().style.top  = self.pos_top + 'px';
                self.getDomElement().style.left = self.pos_left + 'px';
                SERVICE.DOM.setDataSet( self.getDomElement(), "dataPlacement", self.placement );
                self.getDomElement().classList.remove( "gs-no-opacity" );
                self.doPlacementArrow();
            }, 10 );
        }
        else {
            this.setPosition();
        }
    },
    setPositionAfterResize: function () {
        var _rect = this.dom_element_target.getBoundingClientRect();
        this.computePosition( _rect, _rect.width );
        if ( this.isInScreen() ) {
            this.getDomElement().style.top  = this.pos_top + 'px';
            this.getDomElement().style.left = this.pos_left + 'px';
        }
        else {
            this.setPosition();
        }
    },
    setDomTargetElement   : function ( to_set ) {
        this.dom_element_target = to_set;
    },
    computeAfterResize    : function () {
        if ( this.isPhase( GS.OBJECT.CONST.PHASE.RUNNING ) ) {
            this.setPositionAfterResize();
        }
    },
    computePosition       : function ( _rect, _width_rect ) {
        switch ( this.placement ) {
            case GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP:
                this.pos_top  = (_rect.top - this.height + GS.OBJECT.Dropdown.CONST.STYLE.ARROW_SIZE);
                this.pos_left = (_rect.left + _width_rect / 2 - this.width / 2);
                break;
            case GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP_LEFT:
                this.pos_top  = (_rect.top - this.height + GS.OBJECT.Dropdown.CONST.STYLE.ARROW_SIZE);
                this.pos_left = _rect.left - this.width + _width_rect + 2 * GS.OBJECT.Dropdown.CONST.STYLE.ARROW_SIZE;
                break;
            case GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP_RIGHT:
                this.pos_top  = (_rect.top - this.height + GS.OBJECT.Dropdown.CONST.STYLE.ARROW_SIZE);
                this.pos_left = _rect.left - 2 * GS.OBJECT.Dropdown.CONST.STYLE.ARROW_SIZE;
                break;
            case GS.OBJECT.Dropdown.CONST.PLACEMENT.LEFT:
                this.pos_top  = (_rect.top + _rect.height / 2 - this.height / 2);
                this.pos_left = (_rect.left - this.width);
                break;
            case GS.OBJECT.Dropdown.CONST.PLACEMENT.RIGHT:
                this.pos_top  = (_rect.top + _rect.height / 2 - this.height / 2);
                this.pos_left = (_rect.left + _width_rect);
                break;
            case GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM:
                this.pos_top  = (_rect.bottom - GS.OBJECT.Dropdown.CONST.STYLE.ARROW_SIZE);
                this.pos_left = (_rect.left + _width_rect / 2 - this.width / 2);
                break;
            case GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM_RIGHT:
                this.pos_top  = (_rect.bottom - GS.OBJECT.Dropdown.CONST.STYLE.ARROW_SIZE);
                this.pos_left = _rect.left - 2 * GS.OBJECT.Dropdown.CONST.STYLE.ARROW_SIZE;
                break;
            case GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM_LEFT:
                this.pos_top  = _rect.top + _rect.height + GS.OBJECT.Dropdown.CONST.STYLE.ARROW_SIZE;
                this.pos_left = _rect.left + _width_rect / 2 - this.width;
                break;
            default:
                console.warn( "[shi-type]", this.placement, "NOT MANAGED" );
        }
    },
    isInScreen            : function () {
        var _to_return     = true;
        var _left_parent   = -10;
        var _right_parent  = window.innerWidth - 10;
        var _top_parent    = -10;
        var _bottom_parent = window.innerHeight - 10;
        
        
        
        if ( this.pos_left < _left_parent ) {
            _to_return = false;
            switch ( this.placement ) {
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP_RIGHT;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP_RIGHT:
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.LEFT:
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM_RIGHT:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.RIGHT;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP_LEFT:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM_RIGHT;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM_LEFT:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM;
                    break;
            }
        }
        else if ( (this.pos_left + this.width) > _right_parent ) {
            _to_return = false;
            switch ( this.placement ) {
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP_LEFT;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP_LEFT:
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.RIGHT:
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM_LEFT:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.LEFT;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP_RIGHT:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM_LEFT;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM_RIGHT:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM;
                    break;
            }
        }
        else if ( this.pos_top < _top_parent ) {
            _to_return = false;
            switch ( this.placement ) {
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.LEFT:
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP_LEFT:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM_LEFT;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP_RIGHT:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.RIGHT;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.RIGHT:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM_RIGHT;
                    break;
            }
        }
        else if ( (this.pos_top + this.height) > _bottom_parent ) {
            _to_return = false;
            switch ( this.placement ) {
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.LEFT:
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM_LEFT:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP_LEFT;
                    break;
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.BOTTOM_RIGHT:
                case GS.OBJECT.Dropdown.CONST.PLACEMENT.RIGHT:
                    this.placement = GS.OBJECT.Dropdown.CONST.PLACEMENT.TOP_RIGHT;
                    break;
            }
        }
        this.try++;
        if ( this.try > this.getMaxTry() ) { //CASE WHERE THE TOOLTIP HAS NO PLACE TO BE DISPLAYED
            _to_return = true;
        }
        return _to_return;
    },
    
    parseFormToObject: function ( to_set ) {
        if ( to_set === "ON" ) {
            return true;
        }
        if ( to_set === "OFF" ) {
            return false;
        }
        return GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.VALUE.DEFAULT;
    },
    parseObjectToForm: function ( to_set ) {
        if ( to_set === true ) {
            return "ON";
        }
        if ( to_set === false ) {
            return "OFF";
        }
        return GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.VALUE.DEFAULT;
    },
    
    
    
    
    
    
    callbackForPhase: function () {
        var _current_phase = this.getCurrentPhase();
        switch ( _current_phase ) {
            case GS.OBJECT.CONST.PHASE.RUNNING:
                this.show();
                break;
            case GS.OBJECT.CONST.PHASE.HIDDEN:
                break;
        }
    }
    
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Dropdown._interface, GS.OBJECT.GsObjectHtml );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Dropdown._interface, GS.OBJECT.PhaseInterface );
GS.OBJECT.Dropdown.CONST                      = {
    PLACEMENT        : {
        LEFT        : 'left',
        RIGHT       : 'right',
        TOP         : 'top',
        TOP_LEFT    : 'top-left',
        TOP_RIGHT   : 'top-right',
        BOTTOM      : 'bottom',
        BOTTOM_LEFT : 'bottom-left',
        BOTTOM_RIGHT: 'bottom-right'
    },
    STYLE            : {
        ARROW_SIZE: 5
    },
    MAX_TRY_IN_SCREEN: 10,
    
    HTML: '<table>' +
          '<tr>' +
          '<td></td>' +
          '<td class="gs-cell-arrow-side gs-arrow-top-left"><div class="shi-tip-arrow tooltip-arrow-top" id="tooltip-arrow-top-left"></div></td>' +
          '<td><div class="shi-tip-arrow tooltip-arrow-top" id="tooltip-arrow-top-middle"></div></td>' +
          '<td class="gs-cell-arrow-side gs-arrow-top-right"><div class="shi-tip-arrow tooltip-arrow-top" id="tooltip-arrow-top-right"></div></td>' +
          '<td></td>' +
          '</tr>' +
          '<tr>' +
          '<td><div class="shi-tip-arrow tooltip-arrow-left" id="tooltip-arrow-left-middle"></div></td>' +
          '<td colspan="3"><div class="shi-tip-text"></div></td>' +
          '<td><div class="shi-tip-arrow tooltip-arrow-right" id="tooltip-arrow-right-middle"></div></td>' +
          '</tr>' +
          '<tr>' +
          '<td></td>' +
          '<td class="gs-cell-arrow-side gs-arrow-bottom-left"><div class="shi-tip-arrow tooltip-arrow-bottom" id="tooltip-arrow-bottom-left"></div></td>' +
          '<td><div class="shi-tip-arrow tooltip-arrow-bottom" id="tooltip-arrow-bottom-middle"></div></td>' +
          '<td class="gs-cell-arrow-side gs-arrow-bottom-right"><div class="shi-tip-arrow tooltip-arrow-bottom" id="tooltip-arrow-bottom-right"></div></td>' +
          '<td></td>' +
          '</tr>' +
          '</table>'
};
GS.OBJECT.SoundNotificationOfChange           = function ( data ) {
    this.init( data );
};
GS.OBJECT.SoundNotificationOfChange.prototype = {
    init               : function ( data ) {
        if ( data ) {
            this.updateData( data );
        }
    },
    doActionAfterCommun: function ( event_name, param ) {
        switch ( event_name ) {
            case "init_with_dom_element":
                if ( this.getDomElement() ) {
                    return;
                }
                if ( !param ) {
                    return;
                }
                this.setDomElement( param.querySelector( ".gs-sound-notification-container" ) );
                this.setPhaseDomElement( param, "soundNotification" );
                break;
            case "change_value_notification_of_change_sound":
                this.setData( GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED, param );
                break;
            case "notification-configuration-set-dom-element-with-data":
                this.updateHtmlWithData();
                break;
            case "shinken_view_has_disabled_sound_notification":
                this.setPhase( GS.OBJECT.CONST.PHASE.HIDDEN );
                break;
            case "user_has_volume_muted_notification":
                this.setPhaseSpecific( GS.OBJECT.CONST.PHASE.DISCREET_USER );
                break;
            case "set_phase_sound_depending_number_of_change":
                this.setPhaseSpecific( param ? GS.OBJECT.CONST.PHASE.READY : GS.OBJECT.CONST.PHASE.STOPPING );
                break;
            case "ask_play_notification_of_sound":
                this.flat_user_volume = param;
                this.setPhaseIfPhase( GS.OBJECT.CONST.PHASE.RUNNING, GS.OBJECT.CONST.PHASE.READY );
                break;
            case "ask_simulate_play_notification_of_sound":
                this.simulatePlayAudio( param );
                break;
            case "reset_object":
                this.setDomElement();
                break;
            case "click_done":
                if ( param && param.target.parentElement && param.target.parentElement.classList.value !== "gs-external-link-name-cell" ) {
                    SHINKEN_TOOLTIP.hideTooltip();
                }
                if ( this.isPhase( GS.OBJECT.CONST.PHASE.DISCREET_NAVIGATOR ) ) {
                    this.setPhase( this.getPreviousPhase() );
                    return;
                }
                break;
        }
    },
    doActionAfter      : function ( event_name, param ) {
        this.doActionAfterCommun( event_name, param );
    },
    getValue           : function () {
        if ( this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED ] === undefined ) {
            return GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.VALUE.DEFAULT;
        }
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED ];
    },
    playAudio          : function () {
        var audio    = MANAGER.DistributorResourcesManager.getInstance().getResource( "global_sound_notification" ).getContent();
        var _self    = this;
        audio.volume = this.flat_user_volume / 100;
        audio.play().then(
            function success ( response ) {
                _self.setPhase( GS.OBJECT.CONST.PHASE.READY );
            },
            function error ( response ) {
                console.error( response );
                _self.setPhase( GS.OBJECT.CONST.PHASE.DISCREET_NAVIGATOR );
            } );
    },
    simulatePlayAudio  : function ( value ) {
        var audio    = MANAGER.DistributorResourcesManager.getInstance().getResource( "global_sound_notification" ).getContent();
        audio.volume = value / 100;
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    },
    updateData         : function ( data ) {
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.setData( _currentKey, data[ _currentKey ] );
        }
    },
    setData            : function ( key, value ) {
        switch ( key ) {
            case "value":
                var _keys = Object.keys( value );
                var _current_key;
                for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
                    this.setData( _keys[ i ], value[ _keys[ i ] ] );
                }
                break;
            case GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED:
                if ( typeof value === "object" ) {
                    this[ key ] = value.value;
                }
                else {
                    this[ key ] = value;
                }
                break;
        }
    },
    setPhaseSpecific   : function ( to_set ) {
        if ( this.isPhase( GS.OBJECT.CONST.PHASE.DISCREET_NAVIGATOR ) ) {
            this.setPreviousPhaseForced( to_set );
        }
        else {
            this.setPhase( to_set );
        }
    },
    callbackForPhase   : function () {
        var _current = this.getCurrentPhase();
        this.setTooltipHtml( "" );
        switch ( _current ) {
            case GS.OBJECT.CONST.PHASE.RUNNING:
                this.playAudio();
                break;
            case GS.OBJECT.CONST.PHASE.DISCREET_USER:
                this.setTooltipHtml( _( "notification.sound_user_warning", [DICTIONARY_COMMON_UI] ) );
                break;
            case GS.OBJECT.CONST.PHASE.DISCREET_NAVIGATOR:
                this.setTooltipHtml( _( "notification.sound_navigator_warning", [DICTIONARY_COMMON_UI] ) );
                SHINKEN_TOOLTIP.showTooltip( this.getDomElement() );
                break;
            default:
                break;
        }
    },
    getDataToSave      : function () {
        var _to_return                                                     = {};
        _to_return[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED ] = this.getValue();
        return _to_return;
    },
    updateHtmlWithData : function () {
        var _dom     = document.querySelector( "#gs-modal-container #sound-" + this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED ] );
        _dom.checked = true;
    },
    isEnabled          : function () {
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED ] === true;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.SoundNotificationOfChange, GS.OBJECT.PhaseInterface );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.SoundNotificationOfChange, GS.OBJECT.GsObjectHtml );
GS.OBJECT.SoundNotificationOfChange__fromData           = function () {
    this.init();
};
GS.OBJECT.SoundNotificationOfChange__fromData.prototype = {
    init         : function () {
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "init_phase_with_dom_element":
                this.computeHtml();
                this.setPhaseDomElement( param, "soundNotification" );
                break;
        }
        this.doActionAfterCommun( event_name, param );
    },
    computeHtml  : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-sound-notification-container gs-notification-container" } ) );
        SERVICE.DOM.addTooltip( this.getDomElement(), { "shi-tip-html": "" } );
        let div_sound_notification_content = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-notification-content" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.cloneElement( document.querySelector( '#id-gs-template-view .gs-sound-svg' ) ), div_sound_notification_content );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.SoundNotificationOfChange__fromData, GS.OBJECT.SoundNotificationOfChange );
SHINKEN_LIST.Pagination_V3           = function ( page_size, parent_name ) {
    this.__class_name__ = "SHINKEN_LIST.Pagination_V3";
    this.init( page_size, parent_name );
};
SHINKEN_LIST.Pagination_V3.prototype = {
    init                   : function ( page_size, parent_name ) {
        this.page_size          = page_size || 100;
        this.parent_name        = parent_name;
        this.total_page         = 0;
        this.current_page_index = 0;
        this.initSpecificContents();
    },
    initSpecificContents   : function () {
        this.initContents();
        this.add( new SHINKEN_LIST.PaginationNavigation_V3( COMPONENT.CONST.PAGINATION_NAVIGATION.FIRST ) );
        this.add( new SHINKEN_LIST.PaginationNavigation_V3( COMPONENT.CONST.PAGINATION_NAVIGATION.PREVIOUS ) );
        this.add( new SHINKEN_LIST.PaginationSelector_V3( this.total_page, this.current_page_index, this.parent_name ) );
        this.add( new SHINKEN_LIST.PaginationNavigation_V3( COMPONENT.CONST.PAGINATION_NAVIGATION.NEXT ) );
        this.add( new SHINKEN_LIST.PaginationNavigation_V3( COMPONENT.CONST.PAGINATION_NAVIGATION.LAST ) );
    },
    doActionAfter          : function ( event_name, param, param_2, param_3 ) {
        switch ( event_name ) {
            case "click_on_button_V3":
                switch ( param[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case COMPONENT.CONST.PAGINATION_NAVIGATION.FIRST :
                        this.setActiveIndex( 0 );
                        break;
                    case COMPONENT.CONST.PAGINATION_NAVIGATION.PREVIOUS :
                        this.setActiveIndex( this.current_page_index - 1 );
                        break;
                    case COMPONENT.CONST.PAGINATION_NAVIGATION.NEXT :
                        this.setActiveIndex( this.current_page_index + 1 );
                        break;
                    case COMPONENT.CONST.PAGINATION_NAVIGATION.LAST :
                        this.setActiveIndex( this.total_page - 1 );
                        break;
                }
                break;
            case "click_on_item_selector_done" :
                this.setActiveIndex( parseInt( param.getValue() ), true );
                break;
            case "click_on_selector_V3":
            case "click_on_item_selector_V3":
                this.getSelector().doActionAfter( event_name, param, param_2, param_3 );
                break;
            default:
                console.warn( "[Pagination - doActionAfter]", event_name );
                break;
        }
    },
    onClick                : function ( event ) {
        this.getSelector().onClick();
    },
    getSelector            : function () {
        return this.getContentByUUID( "pagination_selector" );
    },
    setActiveIndex         : function ( index, index_already_update ) {
        this.current_page_index = parseInt( index );
        if ( !index_already_update ) {
            this.getSelector().setCurrentPage( this.current_page_index );
        }
        this.computeClass();
    },
    getDisplayStartingIndex: function () {
        return this.current_page_index * this.page_size;
    },
    getDisplayEndingIndex  : function ( to_set ) {
        return this.getDisplayStartingIndex() + this.page_size;
    },
    setTotalElement        : function ( to_set ) {
        this.setActiveIndex( 0 );
        this.total_page = parseInt( Math.ceil( to_set / this.page_size ) );
        this.getSelector().setTotalPage( this.total_page );
        if ( this.getDomElement() ) {
            this.getSelector().computeHtml();
            this.computeClass();
        }
    },
    setPageSize            : function ( to_set ) {
        this.page_size = to_set;
    },
    add                    : function ( to_add ) {
        this.addCommon( to_add );
        to_add.addParamForEvents( SHINKEN_LIST.CONST.PARAM.PAGINATION_PARENT_NAME, this.parent_name );
        return to_add;
    },
    computeHtml            : function () {
        if ( this.getDomElement() ) {
            SERVICE.DOM.empty( this.getDomElement() );
        }
        else {
            this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-pagination-V3 flex-layout-center-h-v" } ) );
        }
        var _div = this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-pagination-container flex-layout-inline-center-h-v" } ) );
        
        for ( var i = 0; i < this.getSize(); i++ ) {
            this.getContent( i ).computeHtml();
            SERVICE.DOM.addElementTo( this.getContent( i ).getDomElement(), _div );
        }
        this.computeClass();
    },
    computeClass           : function () {
        if ( !this.getDomElement() ) {
            return;
        }
        
        this.getDomElement().classList.remove( "gs-is-first-pagination" );
        this.getDomElement().classList.remove( "gs-is-last-pagination" );
        if ( this.current_page_index === 0 ) {
            this.getDomElement().classList.add( "gs-is-first-pagination" );
        }
        if ( this.current_page_index === this.total_page - 1 || this.total_page === 0 ) {
            this.getDomElement().classList.add( "gs-is-last-pagination" );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Pagination_V3, GS.OBJECT.GsObjectContainerHtml );
GS.OBJECT.CollapseFolder           = function ( name, label ) {
    this.init( name, label );
};
GS.OBJECT.CollapseFolder.prototype = {
    init               : function ( name, label ) {
        this.setName( name );
        this.label = label;
        this.initContents();
    },
    doActionAfter      : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon: function ( event_name, param ) {
        this.doActionAfterContentChildren( event_name, param );
    },
    
    setName: function ( to_set ) {
        this.name = to_set;
        this.addParamForEvents( GS.OBJECT.COLLAPSE.PARAM.NAME, this.name );
    },
    getName: function () {
        return this.name;
    },
    getUUID: function () {
        return this.name;
    },
    
    getDataToSave: function ( type ) {
    }
    
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CollapseFolder, GS.OBJECT.GsObjectContainerHtml );
GS.OBJECT.CollapseSet           = function () {
    this.init();
};
GS.OBJECT.CollapseSet.prototype = {
    init          : function () {
        this.initContents();
    },
    doActionAfter : function ( event_name, param_1, param_2, param_3 ) {
        this._doActionAfter( event_name, param_1, param_2, param_3 );
    },
    _doActionAfter: function ( event_name, param_1, param_2, param_3 ) {
    },
    
    
    
    getDataToSave: function ( type ) {
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CollapseSet, GS.OBJECT.GsObjectContainerHtml );
GS.OBJECT.CollapseFolderFromData           = function ( name, label ) {
    this.initSpecific( name, label );
};
GS.OBJECT.CollapseFolderFromData.prototype = {
    initSpecific     : function ( name, label ) {
        this.class = "gs-collapse-folder gs-toggle-container";
        this.init( name, label );
        this.initCounterCommon();
    },
    initCounterCommon: function () {
        this.counters = {};
    },
    
    
    
    computeHtml             : function () {
        this.computeCommonHtml();
        this.computeSpecificHtml();
    },
    computeCommonHtml       : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", this.computeHtml_getAttribute() ) );
        var _button        = this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-toggle-button", onclick: this.getOnClickEvent() } ) );
        this._button_label = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-toggle-button-label flex-layout-center-h-v flex-layout-justify-between" } ), _button );
        let label          = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-label" }, this.label ), this._button_label );
        var _div           = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-collapse-icon-cell" } ), this._button_label );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-toggle-icon gs-hidden-if-toggle-close gs-2023-arrow-down" } ), _div );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-toggle-icon gs-hidden-if-toggle-open gs-2023-arrow-up" } ), _div );
        
        this.dom_content_target = SERVICE.DOM.createElement( "div", { class: "gs-toggle-target" } );
        this.addDomElement( this.dom_content_target );
        
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).computeHtml();
            SERVICE.DOM.addElementTo( this.getContent( i ).getDomElement(), this.dom_content_target );
        }
        this.computeHtmlExtra();
        this.addCounterComputeHtmlIfExist( GS.OBJECT.COUNTER_V2_CONST.TYPE.WIDGET_TOTAL, label );
    },
    getOnClickEvent         : function () {
        return this.onclick_event || "SERVICE.DOM.Toggle.toggle(this)";
    },
    computeHtml_getAttribute: function () {
        var _to_return                        = {};
        _to_return[ "class" ]                 = this.class;
        _to_return[ "data-name" ]             = this.name;
        _to_return[ "data-visibility-state" ] = this.getVisibilityState();
        return _to_return;
    },
    computeSpecificHtml     : function () {
    },
    getDataToSave           : function ( type ) {
    }
    
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CollapseFolderFromData, GS.OBJECT.CollapseFolder );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CollapseFolderFromData, GS.OBJECT.CounterInterfaceV2 );
GS.OBJECT.CollapseFolderForProperties           = function ( name, label ) {
    this.initSpecific( name, label );
};
GS.OBJECT.CollapseFolderForProperties.prototype = {
    initSpecific     : function ( name, label ) {
        this.class = "gs-collapse-folder gs-toggle-container";
        this.init( name, label );
        this.initCounterCommon();
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    
    add: function ( to_add ) {
        to_add.setCountersParent( this );
        return this.addCommon( to_add );
    }
    
    
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CollapseFolderForProperties, GS.OBJECT.CollapseFolderFromData );
GS.OBJECT.CollapseFolderFromData_V3           = function ( name, label ) {
    this.initSpecific( name, label );
};
GS.OBJECT.CollapseFolderFromData_V3.prototype = {
    initSpecific   : GS.OBJECT.CollapseFolderFromData.prototype.initSpecific,
    doActionAfter  : function ( event_name, param ) {
        switch ( event_name ) {
            case "toggl_collapse_folder__is_open":
                param[ SERVICE.DOM.Toggle.CONST.PARAM_EVENT.TOGGL_SERVICE__IS_OPEN ] = SERVICE.DOM.Toggle.toggle_V3( this.getDomElement() );
                break;
            case "toggl_collapse_folder__is_open__or__close_others":
                if ( this.getUUID() === param[ GS.OBJECT.COLLAPSE.PARAM.NAME ] ) {
                    param[ SERVICE.DOM.Toggle.CONST.PARAM_EVENT.TOGGL_SERVICE__IS_OPEN ] = SERVICE.DOM.Toggle.toggle_V3( this.getDomElement() );
                }
                else {
                    SERVICE.DOM.Toggle.close( this.getDomElement() );
                    param[ SERVICE.DOM.Toggle.CONST.PARAM_EVENT.TOGGL_SERVICE__IS_OPEN ] = false;
                }
                break;
        }
        this.doActionAfterCommon( event_name, param );
    },
    getUserPref    : function () {
        return {
            [ GS.USER_PREFS.KEY ]  : GS.OBJECT.COLLAPSE.PARAM.IS_OPEN,
            [ GS.USER_PREFS.VALUE ]: SERVICE.DOM.Toggle.isOpen( this.getDomElement() )
        };
    },
    getOnClickEvent: function () {
        return this.onclick_event || "MANAGER.EventManagerV2.doActionAfter(event, 'toggl_collapse_folder__is_open', " + this.parseParamForEventsToHtml() + ")";
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.CollapseFolderFromData_V3, GS.OBJECT.CollapseFolderFromData );
SHINKEN_LIST.Filter           = function ( type ) {
    this.type = type;
    this.init();
};
SHINKEN_LIST.Filter.prototype = {
    init                   : function () {
        this._is_active = false;
    },
    initComponents         : function () {
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.SINGLE_SELECT:
                this.component = new COMPONENT.Select( this.dom_element, this.type, false, this );
                break;
            case COMPONENT.CONST.TYPE.STRING_INPUT:
            case COMPONENT.CONST.TYPE.INPUT_STRING_ARRAY:
                this.component = new COMPONENT.Input( this.dom_element.querySelector( ".gs-input-table" ), this );
                break;
            case COMPONENT.CONST.TYPE.STRING_INPUT_WITH_DROPDOWN:
                this.component = new COMPONENT.InputWithDropDown( this.dom_element, this, true );
                this.component.addValidationRule( PROPERTY.CONST.VALIDATOR.TYPE.SELECT_INPUT_WITH_CONDITION_FOCUS, COMPONENT.CONST.FILTER.TYPES_VALIDATION.HAS_FOCUS );
                this.component.addValidationRule( PROPERTY.CONST.VALIDATOR.TYPE.SELECT_INPUT_WITH_CONDITION_NOT_FOCUS, COMPONENT.CONST.FILTER.TYPES_VALIDATION.NOT_FOCUS );
                break;
        }
    },
    setType                : function ( to_set ) {
        switch ( to_set ) {
            case SHINKEN_LIST.CONST.TYPE.CHECK_IN_HOST:
                to_set = COMPONENT.CONST.TYPE.SINGLE_SELECT;
                break;
        }
        this.type = to_set;
    },
    getUUID                : function () {
        return this.getName();
    },
    isValid                : function () {
        return (this.name && this.type);
    },
    isSet                  : function () {
        this._computeState();
        return this.isActive();
    },
    getParentName          : function () {
        return this.name;
    },
    getValue               : function () {
        return this.component ? this.component.getValue() : "";
    },
    getName                : function () {
        return this.name;
    },
    getFinalValue          : function () {
        return this.component.getFinalValue();
    },
    setActive              : function ( to_set ) {
        to_set = !!to_set;
        if ( to_set ) {
            this.dom_element.classList.add( 'gs-active' );
        }
        else {
            this.dom_element.classList.remove( 'gs-active' );
        }
        this._is_active = to_set;
    },
    isActive               : function () {
        return !!this._is_active;
    },
    setValue               : function ( to_set ) {
        this.component.setValueFromJs( to_set );
    },
    getListElement         : function () {
        return this.component.getListElement();
    },
    getChildrenObject      : function () {
        if ( !this.component ) {
            return [];
        }
        return [this.component];
    },
    getComponent           : function () {
        return this.component;
    },
    initWhenInputReady     : function () {
        var self = this;
        setTimeout( function () {
            self.component.validateValueInput();
            self._computeState();
            SERVICE.DOM.setDataSet( self.dom_element, 'inputStatus', self.component.getStatus() );
        }, 300 );
    },
    doActionAfter          : function ( event_name, param ) {
        if ( this.component ) {
            this.component.doActionAfter( event_name, param );
        }
    },
    clickOnSelector        : function () {
        this.component.clickOnSelector();
    },
    clickOnItemSelector    : function ( key_name, dom_element, selector, event ) {
        this.component.clickOnItemSelector( '', key_name, event );
        this._computeState();
        this.hidePopup();
        
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.SINGLE_SELECT:
                this.component.computeTitle();
                break;
            case COMPONENT.CONST.TYPE.STRING_INPUT_WITH_DROPDOWN:
                if ( CONTROLLER.List ) {
                    var forced = !(key_name !== '');
                    CONTROLLER.List.getFilterAndReload( forced );
                }
                break;
        }
    },
    doChangeFilterSelect   : function () {
        this.component.doChangeFilterSelect();
    },
    askComputeAfterChange  : function ( dom_element, parent, args ) {
        this.component.askComputeAfterChange( dom_element, parent || this, args );
    },
    doActionAfterChange    : function ( args ) {
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.SINGLE_SELECT:
            case COMPONENT.CONST.TYPE.LABEL:
                return;
        }
        this._computeState();
        if ( this.component ) {
            this.component.computeAfterChange();
            SERVICE.DOM.setDataSet( this.dom_element, 'inputStatus', this.component.getStatus() );
        }
        switch ( args.controller_name ) {
            case CONTROLLER.CONST.LIST_ALL.NAME:
                CONTROLLER.List.updateCleanButtonStatus();
                break;
        }
    },
    clickChangeFilterSelect: function () {
        this.component.clickChangeFilterSelect();
    },
    clickOnInput           : function () {
        this.component.clickOnInput();
    },
    hidePopup              : function ( exception ) {
        if ( exception === this ) {
            return;
        }
        this.setNeedValidation( true );
        this.doActionAfterChange( {} );
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.SINGLE_SELECT:
                this.component.hidePopup();
                break;
            case COMPONENT.CONST.TYPE.STRING_INPUT:
                break;
            case COMPONENT.CONST.TYPE.STRING_INPUT_WITH_DROPDOWN:
                this.component.hidePopup();
                break;
        }
    },
    _computeState          : function () {
        var _value = this.getValue();
        if ( _value === SHINKEN_LIST.CONST.FILTER.ALL ) {
            _value = false;
        }
        this.setActive( !!_value );
    },
    validateValueInput     : function () {
        this.component.validateValueInput();
    },
    keydown                : function ( event, key_code ) {
        switch ( key_code ) {
            case GS.CONST.KEY_CODE.ENTER:
                if ( this.component.hasAutoSelect() ) {
                    event.stopPropagation();
                    event.preventDefault();
                    this.component.validSelectedOrFirstElement();
                }
                else {
                    this.component.finishActionBeforeReload();
                    CONTROLLER.List.getFilterAndReload( true );
                }
                break;
            default:
                this.component.keydown( event, key_code );
        }
    },
    applySiblingSettings   : function ( list_filter ) {
        this.component.applySiblingSettings( list_filter.component );
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Filter, GS.OBJECT.CounterInterface );
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Filter, GS.OBJECT.GsObjectHtml );
SHINKEN_LIST.Filters           = function () {
    this.init();
};
SHINKEN_LIST.Filters.prototype = {
    init                 : function () {
        this.initContents();
    },
    getActiveFilters     : function () {
        var _to_return = [];
        var _keys      = Object.keys( this.contents );
        var _current_key;
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            if ( this.contents[ i ].isSet() ) {
                _to_return.push( this.contents[ i ] );
            }
        }
        return _to_return;
    },
    doActionAfter        : function ( event_name, param, param_2, param_3 ) {
        switch ( event_name ) {
            case "onchange_in_input_V3":
                this.getContentByUUID( param[ SHINKEN_LIST.CONST.PARAM.FILTER_UUID ] ).doActionAfter( event_name, param );
                return;
        }
        this.doActionAfterCommon( event_name, param, param_2, param_3 );
    },
    askComputeAfterChange: function ( dom_element, parent ) {
        var _parent_dom_element = SERVICE.DOM.findParentElementWithDataSet( dom_element, 'name', 10 );
        var _type               = _parent_dom_element.dataset.objectType;
        switch ( _type ) {
            case 'gs-list-filter':
                this.getContentByUUID( _parent_dom_element.dataset.name ).askComputeAfterChange( dom_element, parent || this, { 'type': _type } );
                break;
        }
    },
    onClick              : function ( event ) {
        var _filter = this.getContentByEvent( event );
        this.hidePopup( _filter );
    },
    clickOnSelector      : function ( event ) {
        var _filter = this.getContentByEvent( event );
        this.hidePopup( _filter );
        if ( _filter ) {
            _filter.clickOnSelector();
        }
    },
    clickOnItemSelector  : function ( event ) {
        var _option             = SERVICE.DOM.findParentElementWithDataSet( event.target, 'keyName', 10 );
        var _parent_dom_element = SERVICE.DOM.findParentElementWithDataSet( event.target, 'name', 20 );
        var _type               = _parent_dom_element.dataset.objectType;
        switch ( _type ) {
            case 'gs-list-filter':
                this.getContentByUUID( _parent_dom_element.dataset.name ).clickOnItemSelector( _option.dataset.keyName, _parent_dom_element, false, event );
                break;
        }
    },
    clickOnInput         : function ( event ) {
        var _filter = this.getContentByEvent( event );
        if ( _filter ) {
            _filter.clickOnInput();
        }
    },
    getObjectsType       : function () {
        return "gs-list-filter";
    },
    applySiblingSettings : function ( list_filters ) {
        var _keys = Object.keys( this.contents );
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            this.contents[ _keys[ i ] ].applySiblingSettings( list_filters.contents[ _keys[ i ] ] );
        }
    },
    hidePopup            : function ( filter_exception ) {
        var _keys = Object.keys( this.contents );
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            this.contents[ _keys[ i ] ].hidePopup( filter_exception );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Filters, GS.OBJECT.GsObjectContainerHtml );
SHINKEN_LIST.Header           = function () {
    this.init();
};
SHINKEN_LIST.Header.prototype = {
    init               : function () {
        this.initCommon();
    },
    initCommon         : function () {
        this.initCounterCommon();
    },
    doActionAfter      : function ( event_name, param_1, param_2, param_3 ) {
        this.doActionAfterCommon( event_name, param_1, param_2, param_3 );
    },
    doActionAfterCommon: function ( event_name, param_1, param_2, param_3 ) {
    },
    hidePopup          : function () {
    },
    getUUID            : function () {
        return this.uuid || this.name;
    },
    getObjectType      : function () {
        return "gs-list-header";
    },
    getDataToExport    : function () {
        return this.getLabel();
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Header, GS.OBJECT.GsObjectHtml );
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Header, GS.OBJECT.PhaseInterface );
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Header, GS.OBJECT.CounterInterfaceV2 );
SHINKEN_LIST.Headers           = function () {
};
SHINKEN_LIST.Headers.prototype = {
    doActionAfter          : function ( event_name, param_1, param_2, param_3 ) {
        this.doActionAfterCommon( event_name, param_1, param_2, param_3 );
    },
    doActionAfterCommon    : function ( event_name, param_1, param_2, param_3 ) {
    },
    getActiveSortingHeaders: function () {
        var _to_return = [];
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            var _index = this.contents[ i ].getSortingIndex();
            if ( _index ) {
                _to_return[ _index - 1 ] = this.contents[ i ];
            }
        }
        return _to_return;
    },
    getChildConstructor    : function () {
        return new SHINKEN_LIST.Header();
    },
    getObjectsType         : function () {
        return "gs-list-header";
    },
    getDataToExport        : function () {
        var _to_return = [];
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            _to_return.push( this.contents[ i ].getDataToExport() );
        }
        return _to_return;
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Headers, GS.OBJECT.GsObjectContainerHtml );
SHINKEN_LIST.LineCell           = function () {
    this.init();
};
SHINKEN_LIST.LineCell.prototype = {
    init                   : function () {
        this.initCommon();
    },
    initCommon             : function () {
        this.initCounterCommon();
        this.setUUID( this.name );
    },
    initCounterCommon      : function () {
        this.counters = {};
    },
    doActionAfter          : function ( event_name, param_1, param_2, param_3 ) {
        this.doActionAfterCommon( event_name, param_1, param_2, param_3 );
    },
    doActionAfterCommon    : function ( event_name, param_1, param_2, param_3 ) {
        switch ( event_name ) {
            case "compute_html_done":
                this.addCountersTargetDomElement( this.getDomElement() );
                break;
        }
    },
    getUUID                : function () {
        return this.name;
    },
    getForFilter           : function () {
        return this.value || SHINKEN_LIST.CONST.FILTER.EMPTY;
    },
    getValue               : function () {
        return this.value;
    },
    getValueForSum         : function () {
        return this.value || 0;
    },
    getDataToExport        : function () {
        let to_return;
        if ( this.getDomElement() ) {
            to_return = this.getDomElement().innerText.replaceAll( "\n", " " );
        }
        else {
            to_return = this.value || "";
        }
        to_return = to_return.replace( /<\/?(span|div)[^>]*>/g, '' );
        return to_return;
    },
    getLabel               : function () {
        return this.label;
    },
    setUUID                : function ( to_set ) {
        this.uuid = to_set;
        this.addParamForEvents( SHINKEN_LIST.CONST.PARAM.CELL_UUID, this.uuid );
    },
    setValue               : function ( to_set ) {
        this.value = to_set;
        if ( this.getDomElement() ) {
            this.changeDomElementContent();
        }
    },
    getValueForApplyFilter : function () {
        return this.getValue();
    },
    setSortingValue        : function ( value ) {
        this.sorting_value = value;
    },
    getSortingValue        : function () {
        return this.sorting_value;
    },
    cleanCellIfHasProblem  : function ( line_object ) {
        if ( this.hasCounterProblems() ) {
            this.cleanCellWithProblem( line_object );
        }
    },
    cleanCellWithProblem   : function ( line_object ) {
    },
    getDataToSave          : function () {
        return this.getValue();
    },
    changeDomElementContent: function () {
        this.computeLabel();
        this.dom_element_content.innerHTML = this.getLabel();
    },
    computeLabel           : function () {
        this.label = this.getValue();
        if ( this.label === SHINKEN_LIST.CONST.FILTER.EMPTY ) {
            this.label = "";
        }
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.LineCell, GS.OBJECT.CounterInterfaceV2LinkWithParentAndDomElement );
SHINKEN_LIST.Line           = function () {
    this.init();
};
SHINKEN_LIST.Line.prototype = {
    init                              : function () {
        this.initCommon();
    },
    initCommon                        : function () {
        this.initCounterCommon();
        this.initContents();
        this.initPhase();
    },
    initCounterCommon                 : function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.FILTERING );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL );
    },
    initLineCountersValue             : function () {
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL, this.getUUID(), 1 );
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.FILTERING, this.getUUID(), 1 );
    },
    doActionAfter                     : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon               : function ( event_name, param ) {
        switch ( event_name ) {
            case "compute_html_done":
                this.addCountersTargetDomElement( this.getDomElement() );
                break;
            case "click_on_button_V3":
            case "onchange_in_input_V3":
                this.getContentByUUID( param[ SHINKEN_LIST.CONST.PARAM.CELL_UUID ] ).doActionAfter( event_name, param );
                break;
            case "click_on_button":
                switch ( param ) {
                    case "restore-deleting-view":
                        this.setPhase( GS.OBJECT.CONST.PHASE.TO_BE_RESTORED );
                        break;
                }
                break;
            case "cancel_user_orders":
                this.setPhase( GS.OBJECT.CONST.PHASE.RUNNING );
                this.doActionAfterContentChildren( event_name, param );
                this.doActionAfterSpecific__20240909( "cancel_user_orders_specific", param );
                break;
        }
    },
    doActionAfterSpecific__20240909   : function ( event_name, param ) {
    },
    clickOnInput                      : function ( event ) {
        var _cell = this.getContentByEvent( event );
        if ( _cell ) {
            _cell.clickOnInput();
        }
    },
    askComputeAfterChange             : function ( dom_element, parent ) {
        var _cell = this.getContentByDomElement( dom_element );
        if ( _cell ) {
            _cell.askComputeAfterChange( dom_element, parent );
        }
    },
    clickOnItemSelector               : function ( event ) {
        var _cell = this.getContentByEvent( event );
        if ( _cell ) {
            _cell.clickOnItemSelector( event );
        }
    },
    getContentByDomElement            : function ( dom_element ) {
        var _parent_dom_element = SERVICE.DOM.findParentElementWithClass( dom_element, 'gs-list-cell', 20 );
        if ( !_parent_dom_element ) {
            return null;
        }
        return this.getContentByUUID( _parent_dom_element.dataset.uuid );
    },
    getContentByEvent                 : function ( event ) {
        return this.getContentByDomElement( event.target );
    },
    applyFilter                       : function ( filters, params_filter_by_line ) {
        var _filter = SHINKEN_LIST.CONST.FILTER.STATUS.OFF;
        if ( params_filter_by_line ) {
            for ( let i = 0, _size_i = params_filter_by_line.length; i < _size_i; i++ ) {
                switch ( params_filter_by_line[ i ] ) {
                    case "filter_by_line_has_problem":
                        if ( !this.hasCounterProblems() ) {
                            this.setFilter( SHINKEN_LIST.CONST.FILTER.STATUS.ON );
                            return;
                        }
                        break;
                    case "filter_by_line_has_error":
                        if ( !this.hasCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS ) ) {
                            this.setFilter( SHINKEN_LIST.CONST.FILTER.STATUS.ON );
                            return;
                        }
                        break;
                }
            }
        }
        for ( var i = 0, _size_i = filters.length; i < _size_i; i++ ) {
            var _value_filter = filters[ i ].getValue();
            var _value_cell   = this.getCellValueForApplyFilter( filters[ i ].getName() );
            switch ( _value_cell ) {
                case SHINKEN_LIST.CONST.FILTER.HAS_CHILDREN:
                    _filter = SHINKEN_LIST.CONST.FILTER.STATUS.HAS_CHILDREN;
                    continue;
            }
            var _type_filter = filters[ i ].type;
            switch ( _type_filter ) {
                case COMPONENT.CONST.TYPE.SINGLE_SELECT:
                    _filter = this.getFilterStatusForSingleSelect( _value_filter, _value_cell, _filter );
                    break;
                case COMPONENT.CONST.TYPE.STRING_INPUT:
                case COMPONENT.CONST.TYPE.STRING_INPUT_WITH_DROPDOWN:
                    _filter = this.getFilterStatusForInputString( _value_filter, _value_cell, _filter );
                    break;
                case COMPONENT.CONST.TYPE.INPUT_STRING_ARRAY:
                    _filter = this.getFilterStatusForInputStringArray( _value_filter, _value_cell, _filter );
                    break;
            }
        }
        this.setFilter( _filter );
    },
    getFilterStatusForSingleSelect    : function ( _value_filter, _value_cell, _filter ) {
        if ( _value_filter === SHINKEN_LIST.CONST.FILTER.ALL ) {
            return _filter;
        }
        else if ( _value_filter === SHINKEN_LIST.CONST.FILTER.NOT_EMPTY ) {
            if ( Array.isArray( _value_cell ) ) {
                if ( GS.TOOLS.ARRAY.contains( _value_cell, SHINKEN_LIST.CONST.FILTER.EMPTY ) ) {
                    _filter = SHINKEN_LIST.CONST.FILTER.STATUS.ON;
                }
            }
            else if ( _value_cell === SHINKEN_LIST.CONST.FILTER.EMPTY ) {
                _filter = SHINKEN_LIST.CONST.FILTER.STATUS.ON;
            }
            return _filter;
        }
        if ( Array.isArray( _value_cell ) ) {
            if ( !GS.TOOLS.ARRAY.contains( _value_cell, _value_filter ) ) {
                _filter = SHINKEN_LIST.CONST.FILTER.STATUS.ON;
            }
        }
        else if ( _value_cell !== _value_filter ) {
            _filter = SHINKEN_LIST.CONST.FILTER.STATUS.ON;
        }
        return _filter;
    },
    getFilterStatusForInputString     : function ( _value_filter, _value_cell, _filter ) {
        if ( GS.TOOLS.STRING.contains( _value_filter, "&" ) ) {
            var _values_filters = _value_filter.split( "&" );
            var _found          = false;
            for ( var j = 0, _size_j = _values_filters.length; j < _size_j; j++ ) {
                if ( GS.TOOLS.STRING_FILTER.containsIgnoreCase( _value_cell + "", _values_filters[ j ] ) ) {
                    _found = true;
                }
            }
            if ( !_found ) {
                _filter = SHINKEN_LIST.CONST.FILTER.STATUS.ON;
            }
        }
        else if ( _value_filter === '=""' ) {
            if ( _value_cell ) {
                _filter = SHINKEN_LIST.CONST.FILTER.STATUS.ON;
            }
        }
        else if ( _value_filter === '!=""' ) {
            if ( !_value_cell ) {
                _filter = SHINKEN_LIST.CONST.FILTER.STATUS.ON;
            }
        }
        else if ( GS.TOOLS.STRING.startsWith( _value_filter, "!" ) ) {
            if ( GS.TOOLS.STRING_FILTER.containsIgnoreCase( _value_cell + "", _value_filter.substr( 1 ) ) ) {
                _filter = SHINKEN_LIST.CONST.FILTER.STATUS.ON;
            }
        }
        else if ( !GS.TOOLS.STRING_FILTER.containsIgnoreCase( _value_cell + "", _value_filter ) ) {
            _filter = SHINKEN_LIST.CONST.FILTER.STATUS.ON;
        }
        return _filter;
    },
    getFilterStatusForInputStringArray: function ( _value_filter, _value_cell, _filter ) {
        var _list  = _value_filter.split( "," );
        var _found = false;
        for ( var j = 0, _size_j = _list.length; j < _size_j; j++ ) {
            if ( _list[ j ] === _value_cell ) {
                _found = true;
                break;
            }
        }
        if ( !_found ) {
            return SHINKEN_LIST.CONST.FILTER.STATUS.ON;
        }
        else {
            return _filter;
        }
    },
    setFilter                         : function ( to_set ) {
        this.is_filtered = to_set;
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.FILTERING, this.getUUID(), this.isFiltered() ? 0 : 1 );
        this.doActionAfter( "do_action_after_filter_change", this.is_filtered );
    },
    isFiltered                        : function () {
        return this.is_filtered === SHINKEN_LIST.CONST.FILTER.STATUS.ON;
    },
    getChildConstructor               : function () {
        return new SHINKEN_LIST.LineCell();
    },
    setUUID                           : function ( to_set ) {
        this.uuid = to_set;
        this.addParamForEvents( SHINKEN_LIST.CONST.PARAM.LINE_UUID, this.uuid );
    },
    getUUID                           : function () {
        if ( !this.uuid ) {
            this.setUUID( SERVICE.STRING.buildUUID() );
        }
        return this.uuid;
    },
    toggleSelect                      : function () {
        switch ( this.is_selected ) {
            case SHINKEN_LIST.CONST.SELECTION.STATUS.ON:
                this.setIsSelected( SHINKEN_LIST.CONST.SELECTION.STATUS.OFF );
                break;
            case SHINKEN_LIST.CONST.SELECTION.STATUS.OFF:
                this.setIsSelected( SHINKEN_LIST.CONST.SELECTION.STATUS.ON );
                break;
        }
    },
    setIsSelected                     : function ( to_set ) {
        if ( this.is_filtered ) {
            return;
        }
        if ( this.is_selected === SHINKEN_LIST.CONST.SELECTION.STATUS.DISABLED ) {
            return;
        }
        this.is_selected = to_set;
        this.updateSelectionCounter();
        switch ( this.is_selected ) {
            case SHINKEN_LIST.CONST.SELECTION.STATUS.ON:
                this.dom_element.classList.add( "gs-selected" );
                if ( this.parent_select_element ) {
                    this.parent_select_element.classList.add( "gs-selected-parent" );
                }
                break;
            case SHINKEN_LIST.CONST.SELECTION.STATUS.OFF:
                this.dom_element.classList.remove( "gs-selected" );
                if ( this.parent_select_element ) {
                    this.parent_select_element.classList.remove( "gs-selected-parent" );
                }
                break;
        }
        if ( this.checkbox ) {
            this.checkbox.setChecked( this.is_selected );
        }
        
        switch ( this.type ) {
            case SHINKEN_LIST.CONST.TYPE.MASS_CHANGE_SUM_FULL:
                switch ( this.is_selected ) {
                    case SHINKEN_LIST.CONST.SELECTION.STATUS.ON:
                        this.showCountersForParent();
                        break;
                    default:
                        this.hideCountersForParent();
                        break;
                }
        }
        
    },
    updateSelectionCounter            : function () {
        switch ( this.type ) {
            case SHINKEN_LIST.CONST.TYPE.CHECK_IN_HOST:
            case SHINKEN_LIST.CONST.TYPE.MASS_CHANGE_SUM_FULL:
                this.is_selected_counter.update( this.uuid, this.isSelected() ? 1 : 0 );
                break;
        }
    },
    setDataSet                        : function ( datakey, data_value, if_key, if_values, else_data_value, if_function ) {
        if ( if_key ) {
            if ( if_function === "matching_regex" ) {
                if ( !GS.TOOLS.STRING.isMatchingStarRegexTab( this.getCellValue( if_key ), if_values ) ) {
                    data_value = else_data_value;
                }
            }
            else {
                if ( !GS.TOOLS.STRING.containsAny( this.getCellValue( if_key ), if_values ) ) {
                    data_value = else_data_value;
                }
            }
        }
        SERVICE.DOM.setDataSet( this.dom_element, datakey, data_value );
    },
    isSelected                        : function () {
        return this.is_selected === SHINKEN_LIST.CONST.SELECTION.STATUS.ON;
    },
    isSelectedOrFiltered              : function () {
        if ( this.is_filtered ) {
            return SHINKEN_LIST.CONST.SELECTION.STATUS.DISABLED;
        }
        if ( this.is_selected === SHINKEN_LIST.CONST.SELECTION.STATUS.DISABLED ) {
            return SHINKEN_LIST.CONST.SELECTION.STATUS.DISABLED;
        }
        return this.is_selected;
    },
    isCollapsedOrFiltered             : function () {
        if ( this.is_filtered ) {
            return true;
        }
        return this.is_collapse;
    },
    getData                           : function ( key ) {
        return this.dom_element.dataset[ key ];
    },
    getCellValue                      : function ( key ) {
        return this.getContentByUUID( key ).getValue();
    },
    getCellValueForSum                : function ( key ) {
        return this.getContentByUUID( key ).getValueForSum();
    },
    getCellValueForApplyFilter        : function ( key ) {
        return this.getContentByUUID( key ).getValueForApplyFilter();
    },
    changeElementValue                : function ( key, to_set ) {
        if ( this.getContentByUUID( key ) !== undefined ) {
            this.dom_element.querySelector( '.gs-list-cell[data-filter="' + key + '"]' ).innerHTML = to_set;
        }
    },
    simulateToggleSelect              : function () {
        this.dom_element.click();
    },
    isSibling                         : function ( list_line ) {
        return (list_line.parent_uuid === this.parent_uuid && list_line.uuid === this.uuid);
    },
    setIndexOriginal                  : function ( to_set ) {
        this.index_origin = to_set;
    },
    getIndexOriginal                  : function () {
        return this.index_origin;
    },
    getDomElementBind                 : function () {
        return null;
    },
    add                               : function ( to_add ) {
        let to_return = this.addCommon( to_add );
        to_return.addParamsForEvents( this.getParamForEvents() );
        return to_return;
    },
    updateCellsValue                  : function ( data ) {
        var _keys = Object.keys( data );
        var current_cell;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            current_cell = this.getContentByUUID( _keys[ i ] );
            if ( current_cell ) {
                current_cell.setValue( data[ _keys[ i ] ] );
            }
        }
    },
    toggleCollapse                    : function ( children ) {
        this.setIsCollapsed( !this.is_collapse );
        for ( var i = 0, _size_i = children.length; i < _size_i; i++ ) {
            children[ i ].setIsCollapsed( this.is_collapse );
        }
    },
    setIsCollapsed                    : function ( to_set, children ) {
        this.is_collapse = to_set;
        if ( this.is_collapse ) {
            this.dom_element.classList.add( "gs-collapsed" );
        }
        else {
            this.dom_element.classList.remove( "gs-collapsed" );
        }
        if ( children ) {
            for ( var i = 0, _size_i = children.length; i < _size_i; i++ ) {
                children[ i ].setIsCollapsed( this.is_collapse );
            }
        }
    },
    simulateToggleCollapse            : function () {
        SERVICE.DOM.SimulateAction.click( this.dom_element.querySelector( ".gs-collapse-listener" ) );
    },
    cleanCellsWithProblem             : function () {
        for ( let i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].cleanCellIfHasProblem( this );
        }
    },
    getInitialDataToSave              : function () {
        return {};
    },
    getDataToSave                     : function () {
        var to_return = this.getInitialDataToSave();
        for ( let i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            to_return[ this.contents[ i ].getUUID() ] = this.contents[ i ].getDataToSave();
        }
        return to_return;
    },
    getDataToExport                   : function ( headers ) {
        var _to_return = [];
        var _current;
        for ( var i = 0, _size_i = headers.contents.length; i < _size_i; i++ ) {
            _to_return.push( this.getContentByUUID( headers.contents[ i ].getUUID() ).getDataToExport() );
        }
        return _to_return;
    },
    updateAfterActionDoneOK           : function ( action ) {
        this.setMessages();
        var _current = this.getContentByUUID( this.parseToFindCellUuid( action.key ) );
        _current.updateAfterActionDoneOK( action );
        this.addMessages( _current.getMessages() );
        this.extraActionAfterActionDoneOK( action );
    },
    extraActionAfterActionDoneOK      : function ( action ) {
    },
    updateAfterActionDoneNOK          : function ( action ) {
        this.setMessages();
        var _current = this.getContentByUUID( this.parseToFindCellUuid( action.key ) );
        _current.updateAfterActionDoneNOK( action );
        this.addMessages( _current.getMessages() );
    },
    parseToFindCellUuid               : function ( key ) {
        return key;
    },
    applySiblingSettings              : function ( list_line ) {
        if ( this.isSelected() !== list_line.isSelected() ) {
            this.simulateToggleSelect();
        }
        if ( this.is_collapse !== list_line.is_collapse ) {
            this.simulateToggleCollapse();
        }
        SERVICE.DOM.applySiblingSettings( this.dom_element, list_line.dom_element );
    },
    remove                            : function () {
        this.removeDomElement();
        this.resetContentsCounters();
        this.resetCounters();
    },
    removeDomElement                  : function () {
        if ( this.dom_element ) {
            SERVICE.DOM.removeElement( this.dom_element );
        }
    },
    getObjectsType                    : function () {
        return "gs-list-cell";
    },
    askHidePopup                      : GS.OBJECT.GsObjectContainerHtml.prototype.askHidePopup,
    addParamForEvents                 : GS.OBJECT.GsObjectContainerHtml.prototype.addParamForEvents
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Line, GS.OBJECT.PhaseInterface );
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Line, GS.OBJECT.CounterInterfaceWithGsObjectContainer );
SHINKEN_LIST.Lines           = function () {
};
SHINKEN_LIST.Lines.prototype = {
    init                         : function () {
        this.initCommon();
    },
    initCommon                   : function () {
        this.addParamForEvents( SHINKEN_LIST.CONST.PARAM.LINES_UUID, "main_lines_list" );
        this.initCounterCommon();
        this.initContents();
        this.initPhase();
    },
    initCounterCommon            : function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.FILTERING );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL );
    },
    addSpecific                  : function ( to_add ) {
        this.add( to_add );
        to_add.setCountersParent( this );
        to_add.addParamsForEvents( this.getParamForEvents() );
    },
    insertAtIndex                : function ( to_add, index ) {
        GS.TOOLS.ARRAY.insert( this.contents, to_add, index );
        to_add.setCountersParent( this );
        this.computeMapping();
    },
    clickOnSelector              : function ( event ) {
        var _line = this.getContentByEvent( event );
        if ( _line ) {
            _line.clickOnSelector( event );
        }
    },
    clickOnInput                 : function ( event ) {
        var _line = this.getContentByEvent( event );
        if ( _line ) {
            _line.clickOnInput( event );
        }
    },
    askComputeAfterChange        : function ( dom_element, parent ) {
        var _line = this.getContentByDomElement( dom_element );
        if ( _line ) {
            _line.askComputeAfterChange( dom_element, parent );
        }
    },
    clickOnItemSelector          : function ( event ) {
        var _line = this.getContentByEvent( event );
        if ( _line ) {
            _line.clickOnItemSelector( event );
        }
    },
    doActionAfter                : function ( event_name, param, param_2, param_3 ) {
        this.doActionAfterCommon( event_name, param, param_2, param_3 );
    },
    doActionAfterCommon          : function ( event_name, param, param_2, param_3 ) {
        switch ( event_name ) {
            case "on-key-down-specific":
                this.getContentByEvent( param ).doActionAfter( event_name, param, param_2, param_3 );
                break;
            case "click_on_selector":
            case "click_on_item_selector":
                this.getContentByUUID( param ).doActionAfter( event_name, param, param_2, param_3 );
                break;
            case "click_on_button":
                switch ( param ) {
                    case "show-history":
                    case "delete-view-forever":
                    case "delete-view":
                    case "restore-deleting-view":
                        this.getContentByUUID( param_2 ).doActionAfter( event_name, param, param_2, param_3 );
                        break;
                }
                break;
            case "click_on_button_V3":
                if ( !param[ SHINKEN_LIST.CONST.PARAM.LINE_UUID ] ) {
                    break;
                }
                param[ SHINKEN_LIST.CONST.PARAM.LINES_OBJECT ] = this;
                this.getContentByUUID( param[ SHINKEN_LIST.CONST.PARAM.LINE_UUID ] ).doActionAfter( event_name, param );
                break;
            case "onchange_in_input_V3":
                this.getContentByUUID( param[ SHINKEN_LIST.CONST.PARAM.LINE_UUID ] ).doActionAfter( event_name, param );
                break;
            case "cancel_user_orders":
                param[ SHINKEN_LIST.CONST.PARAM.LINES_OBJECT ] = this;
                this.doActionAfterContentChildren( event_name, param );
                break;
        }
    },
    addTextForNoElement          : function ( text_no_element, text_no_element_after_filter ) {
        this.text_no_element              = text_no_element;
        this.text_no_element_after_filter = text_no_element_after_filter;
    },
    getContentByCellValue        : function ( key_cell, value_cell ) {
        for ( let i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            if ( this.contents[ i ].getContentByUUID( key_cell ).getValue() === value_cell ) {
                return this.contents[ i ];
            }
        }
        return null;
    },
    getContentByDomElement       : function ( dom_element ) {
        var _parent_dom_element = SERVICE.DOM.findParentElementWithClass( dom_element, 'gs-list-line', 60 );
        if ( !_parent_dom_element ) {
            return null;
        }
        return this.getContentByUUID( _parent_dom_element.dataset.uuid );
    },
    getContentByEvent            : function ( event ) {
        if ( !event ) {
            return;
        }
        return this.getContentByDomElement( event.target );
    },
    updateAfterActionsDone       : function ( data ) {
        this.setMessages();
        var _current_action;
        var to_return = false;
        for ( var k = 0, _size_k = data[ "results" ].length; k < _size_k; k++ ) {
            _current_action = data[ "results" ][ k ];
            if ( _current_action[ "action_done" ] ) {
                this.updateAfterActionDoneOK( _current_action, data );
                to_return = true;
            }
            else {
                return this.updateAfterActionDoneNOK( _current_action, data );
            }
        }
        return to_return;
    },
    updateAfterActionDoneOK      : function ( action, data ) {
        var _current = this.getContentByUUID( data[ "uuid" ] );
        switch ( action.key ) {
            case GS.UI.VIEW.ACTIONS.REMOVE:
            case GS.UI.VIEW.ACTIONS.REMOVE_FORCED:
            case GS.UI.VIEW.ACTIONS.CLONE_VIEW:
                
                this.removeContent( data[ "uuid" ] );
                CONTROLLER.UiViewWeatherManager.doActionAfter( "ask-reload-data-for-current-panel" );
                break;
            case GS.UI.VIEW.ACTIONS.CHANGE_OWNER:
                _current.updateAfterActionDoneOK( action );
                this.addMessages( _current.getMessages() );
                break;
            case GS.UI.VIEW.ACTIONS.RESTORED:
                CONTROLLER.UiViewWeatherManager.doActionAfter( "ask-reload-data-for-current-panel" );
                break;
            default:
                console.warn( "[Lines - updateAfterActionDoneOK]", "[NONE]" );
        }
    },
    updateAfterActionDoneOK_lvl_1: function ( action, data ) {
        return false;
    },
    updateAfterActionDoneNOK     : function ( action, data ) {
        var _current = this.getContentByUUID( data[ "uuid" ] );
        if ( action.critical[ 0 ] === GS.UI.VIEW.ACTIONS.ERRORS.CANNOT_PERFORM_ACTION ) {
            this.addMessage( COMPONENT.CONST.STATUS.ERROR, _( "views.manager.common.backend_errors.cannot_perform_action" ) );
            return;
        }
        switch ( action.key ) {
            case GS.UI.VIEW.ACTIONS.CHANGE_OWNER:
                _current.updateAfterActionDoneNOK( action );
                if ( _current.isPhase( GS.OBJECT.CONST.PHASE.TO_BE_DELETED ) ) {
                    this.removeContent( data[ "uuid" ] );
                }
                this.addMessages( _current.getMessages() );
                break;
            case GS.UI.VIEW.ACTIONS.REMOVE:
            case GS.UI.VIEW.ACTIONS.REMOVE_FORCED:
                _current.updateAfterActionDoneNOK( action );
                this.addMessages( _current.getMessages() );
                break;
            default:
                console.warn( "[Lines - updateAfterActionDoneNOK]", "[NONE]" );
        }
    },
    getChildConstructor          : function () {
        return new SHINKEN_LIST.Line();
    },
    setSelectAllData             : function ( to_set ) {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].setIsSelected( to_set );
        }
    },
    getNbSelected                : function () {
        return this.getSelected().length;
    },
    getSelected                  : function () {
        var _to_return = [];
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            if ( this.contents[ i ].isSelected() ) {
                _to_return.push( this.contents[ i ] );
            }
        }
        return _to_return;
    },
    getNotSelected               : function () {
        var _to_return = [];
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            if ( this.contents[ i ].is_selected !== SHINKEN_LIST.CONST.SELECTION.STATUS.ON ) {
                _to_return.push( this.contents[ i ] );
            }
        }
        return _to_return;
    },
    getSizeNotFiltered           : function () {
        return this.getNotFiltered().length;
    },
    setAllLinesDataSet           : function ( datakey, data_value, if_key, if_values, else_data_value, if_function ) {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].setDataSet( datakey, data_value, if_key, if_values, else_data_value, if_function );
        }
    },
    isAllActiveLineSelected      : function () {
        var _nb_active = 0;
        var _current;
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            _current = this.contents[ i ].isSelectedOrFiltered();
            switch ( _current ) {
                case SHINKEN_LIST.CONST.SELECTION.STATUS.ON:
                    _nb_active++;
                    break;
                case SHINKEN_LIST.CONST.SELECTION.STATUS.OFF:
                    return false;
            }
        }
        return !!_nb_active;
    },
    applyFilter                  : function ( filters, params_filter_by_line ) {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].applyFilter( filters, params_filter_by_line );
        }
    },
    hideAllLines                 : function () {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].setFilter( SHINKEN_LIST.CONST.FILTER.STATUS.ON );
        }
    },
    getNotFiltered               : function () {
        var _to_return = [];
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            if ( !this.contents[ i ].isFiltered() ) {
                _to_return.push( this.contents[ i ] );
            }
        }
        return _to_return;
    },
    applySorting                 : function ( active_headers ) {
        if ( active_headers.length ) {
            var _current_is_increasing;
            var _value_1;
            var _value_2;
            for ( var i = active_headers.length - 1; i >= 0; i-- ) {
                _current_is_increasing = active_headers[ i ].getSortingStatus() === GS.OBJECT.SORTING.STATUS.INCREASING;
                this.contents.sort( function ( a, b ) {
                    _value_1 = _current_is_increasing ? b : a;
                    _value_2 = _current_is_increasing ? a : b;
                    _value_1 = _value_1.getContentByUUID( active_headers[ i ].name ).getSortingValue();
                    _value_2 = _value_2.getContentByUUID( active_headers[ i ].name ).getSortingValue();
                    if ( _value_1 === _value_2 ) {
                        return 0;
                    }
                    if ( _value_1 > _value_2 ) {
                        return -1;
                    }
                    return 1;
                } );
            }
        }
        else {
            this.contents.sort( function ( a, b ) {
                return a.index_origin - b.index_origin;
            } );
        }
        this.displayDomByOrder();
        this.computeMapping();
    },
    displayDomByOrder            : function () {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            SERVICE.DOM.addElementWithIndex( this.contents[ i ].getDomElement(), this.getDomElement(), i );
        }
    },
    getDataToExport              : function ( headers ) {
        var _to_return = [];
        var _current;
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            _current = this.contents[ i ];
            if ( _current.is_filtered ) {
                continue;
            }
            _to_return.push( _current.getDataToExport( headers ) );
        }
        return _to_return;
    },
    addLoadingFrame              : function ( dom_loading ) {
        dom_loading = dom_loading || GS.TOOLS.LOADING_FRAME.getDomElement();
        if ( this.dom_element ) {
            SERVICE.DOM.addElementToAfterEmpty( dom_loading, this.dom_element );
        }
        else {
            this.dom_element_loading = dom_loading;
        }
    },
    applySiblingSettings         : function ( list_lines ) {
        var _current;
        for ( var i = 0, _size_i = list_lines.contents.length; i < _size_i; i++ ) {
            _current = this.getSiblingElement( list_lines.contents[ i ] );
            if ( _current ) {
                _current.applySiblingSettings( list_lines.contents[ i ] );
            }
        }
    },
    getSiblingElement            : function ( list_line ) {
        for ( var j = 0, _size_j = this.contents.length; j < _size_j; j++ ) {
            if ( this.contents[ j ].isSibling( list_line ) ) {
                return this.contents[ j ];
            }
        }
        return null;
    },
    getObjectsType               : function () {
        return "gs-list-line";
    },
    changeOriginalIndexFrom      : function ( original_index_to_start, delta ) {
        let current;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            current = this.getContent( i );
            if ( current.getIndexOriginal() >= original_index_to_start ) {
                current.setIndexOriginal( current.getIndexOriginal() + delta );
            }
        }
    },
    callbackForPhase             : function () {
        switch ( this.getCurrentPhase() ) {
            case GS.OBJECT.CONST.PHASE.REFRESHING:
                this.addLoadingFrame();
                break;
        }
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Lines, GS.OBJECT.GsObjectContainerHtml );
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Lines, GS.OBJECT.CounterInterfaceV2 );
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Lines, GS.OBJECT.PhaseInterface );
SHINKEN_LIST.Set           = function ( name ) {
    this.init( name );
};
SHINKEN_LIST.Set.prototype = {
    init                  : function ( name ) {
        this.name = name;
        this.initCommon();
    },
    initCommon            : function () {
        this.addParamForEvents( SHINKEN_LIST.CONST.PARAM.SET_UUID, this.name );
        this.initCounterCommon();
        this.initPhase();
    },
    initCounterCommon     : function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.FILTERING );
    },
    askComputeAfterChange : function ( dom_element ) {
        this.filters.askComputeAfterChange( dom_element, this );
        this.lines.askComputeAfterChange( dom_element, this );
    },
    doActionAfterChange   : function ( args ) {
        var _type = args[ "type" ];
        switch ( _type ) {
            case "gs-list-filter":
                this.applyFilter();
                break;
            case "gs-hide-all-element":
                this.lines.hideAllLines();
                break;
            case "gs-list-sorting":
                this.lines.applySorting( this.headers.getActiveSortingHeaders() );
                break;
        }
    },
    doActionAfter         : function ( event_name, param, param_2, param_3 ) {
        this.doActionAfterCommon( event_name, param, param_2, param_3 );
    },
    doActionAfterCommon   : function ( event_name, param, param_2, param_3 ) {
        this.doActionAfterSpecific( event_name, param, param_2, param_3 );
        switch ( event_name ) {
            case "compute_html_done":
                this.addCountersTargetDomElement( this.getDomElement() );
                break;
            case "onchange_in_input_V3":
                if ( param[ SHINKEN_LIST.CONST.PARAM.FILTERS_UUID ] ) {
                    this.filters.doActionAfter( event_name, param );
                }
                else {
                    this.lines.doActionAfter( event_name, param );
                }
                break;
            case "update_counter__with_children":
            case "click_on_selector_V3":
            case "click_on_item_selector_V3":
            case "click_on_button_V3":
            case "cancel_user_orders":
            case "clean_selected_element":
                if ( this.filters ) {
                    this.filters.doActionAfter( event_name, param );
                }
                this.lines.doActionAfter( event_name, param );
                break;
            case "ask_apply_filter":
                this.applyFilter();
                break;
            case "clean_filter":
                this.filters.doActionAfter( event_name, param );
                this.applyFilter();
                break;
        }
    },
    doActionAfterSpecific : function ( event_name, param, param_2, param_3 ) {
    },
    clickOnCheckboxInput  : function ( name ) {
        if ( name === "gs-all-elements" ) {
            this.selectAllData( this.is_all_data_selected === SHINKEN_LIST.CONST.SELECTION.STATUS.ON ? SHINKEN_LIST.CONST.SELECTION.STATUS.OFF : SHINKEN_LIST.CONST.SELECTION.STATUS.ON );
            return;
        }
        this.lines.getContentByUUID( name ).toggleSelect();
        this.setSelectAllStatus();
    },
    clickOnCollapseButton : function ( uuid ) {
        if ( uuid === "gs-all-elements" ) {
            this.collapseAllData( !this.is_all_data_collapsed );
            return;
        }
        this.lines.toggleCollapse( uuid );
        this.setIsCollapseAllData( this.lines.isAllActiveLineCollapsed() );
    },
    clickOnSelector       : function ( event, param ) {
        this._clickOnSelector( event, param );
    },
    _clickOnSelector      : function ( event, param ) {
        this.filters.clickOnSelector( event, param );
        this.lines.clickOnSelector( event, param );
    },
    clickOnInput          : function ( event ) {
        this.filters.clickOnInput( event );
        this.lines.clickOnInput( event );
    },
    clickOnItemSelector   : function ( event, parent_name, element ) {
        this._clickOnItemSelector( event, parent_name, element );
    },
    _clickOnItemSelector  : function ( event, parent_name, element ) {
        this.filters.clickOnItemSelector( event, parent_name, element );
        this.lines.clickOnItemSelector( event, parent_name, element );
        var _parent_dom_element = SERVICE.DOM.findParentElementWithDataSet( event.target, "name", 20 );
        this.doActionAfterChange( { "type": _parent_dom_element.dataset.objectType } );
    },
    onClick               : function ( event ) {
        this._onClick( event );
    },
    _onClick              : function ( event ) {
        if ( this.lines ) {
            this.lines.onClick( event );
        }
        if ( this.headers ) {
            this.headers.onClick( event );
        }
        if ( this.filters ) {
            this.filters.onClick( event );
        }
    },
    applyFilter           : function ( params_filter_by_line ) {
        this.applyFilterCommon( params_filter_by_line );
        this.setSelectAllStatus();
    },
    applyFilterCommon     : function ( params_filter_by_line ) {
        let active_filter = this.filters.getActiveFilters();
        if ( this.getDomElement() ) {
            SERVICE.DOM.addOrRemoveClasses( this.getDomElement(), active_filter.length, "gs-has-active-filter" );
        }
        this.lines.applyFilter( active_filter, params_filter_by_line );
        this.lines.doActionAfter( "apply_filter_done" );
    },
    setHeaders            : function ( to_set ) {
        this.headers = to_set;
    },
    setFilters            : function ( to_set ) {
        this.filters = to_set;
        this.filters.addParamsForEvents( this.getParamForEvents() );
    },
    setLines              : function ( to_set ) {
        if ( this.lines ) {
            this.lines.resetContents();
        }
        this.lines = to_set;
        this.lines.addParamsForEvents( this.getParamForEvents() );
        this.addSynchronizedPhase( this.lines.phase );
        to_set.setCountersParent( this );
        if ( this.getDomElement() && to_set.getDomElement() ) {
            var _content_list = this.getDomElement().querySelector( ".gs-list-tbody" );
            if ( _content_list ) {
                SERVICE.DOM.replaceElement( _content_list, to_set.getDomElement() );
            }
        }
    },
    getLines              : function () {
        return this.lines;
    },
    getHeaders            : function () {
        return this.headers;
    },
    initLines             : function ( to_set ) {
        this.lines = this.initLinesObjects();
        this.addSynchronizedPhase( this.lines.phase );
    },
    initLinesObjects      : function () {
        return new SHINKEN_LIST.Lines();
    },
    setIsCollapseAllData  : function ( to_set ) {
        this.is_all_data_collapsed = to_set;
        if ( this.is_all_data_collapsed ) {
            this.dom_element.classList.add( "gs-collapsed" );
        }
        else {
            this.dom_element.classList.remove( "gs-collapsed" );
        }
    },
    collapseAllData       : function ( to_set ) {
        this.setIsCollapseAllData( to_set );
        this.lines.setIsCollapseAllData( this.is_all_data_collapsed );
    },
    setSelectAllStatus    : function ( to_set ) {
        if ( to_set === undefined ) {
            to_set = this.lines.isAllActiveLineSelected() ? SHINKEN_LIST.CONST.SELECTION.STATUS.ON : SHINKEN_LIST.CONST.SELECTION.STATUS.OFF;
        }
        this.is_all_data_selected = to_set;
        if ( this.is_all_data_selected === SHINKEN_LIST.CONST.SELECTION.STATUS.ON ) {
            this.dom_element.classList.add( "gs-selected" );
        }
        else {
            this.dom_element.classList.remove( "gs-selected" );
        }
        if ( this.checkbox ) {
            this.checkbox.setChecked( this.is_all_data_selected );
        }
    },
    selectAllData         : function ( to_set ) {
        this.setSelectAllStatus( to_set );
        this.lines.setSelectAllData( this.is_all_data_selected );
    },
    getSelectedLines      : function () {
        return this.lines.getSelected();
    },
    getFirstSelectedLine  : function () {
        var _to_return = this.getSelectedLines();
        if ( _to_return.length ) {
            return _to_return[ 0 ];
        }
        return null;
    },
    getNotSelectedLines   : function () {
        return this.lines.getNotSelected();
    },
    setAllLinesDataSet    : function ( datakey, data_value, if_key, if_values, else_data_value, if_function ) {
        return this.lines.setAllLinesDataSet( datakey, data_value, if_key, if_values, else_data_value, if_function );
    },
    removeLineByUuid      : function ( uuid ) {
        this.lines.removeContent( uuid );
        this.updateHtml();
    },
    getLineByUUID         : function ( uuid ) {
        return this.lines.getContentByUUID( uuid );
    },
    getLineByCellValue    : function ( key_cell, value_cell ) {
        return this.lines.getContentByCellValue( key_cell, value_cell );
    },
    getSum                : function ( header_name ) {
        var _to_return = 0;
        var _lines     = this.lines.getNotFiltered();
        for ( var i = 0, _size_i = _lines.length; i < _size_i; i++ ) {
            _to_return += parseInt( _lines[ i ].getCellValueForSum( header_name ) || 0 );
        }
        return _to_return;
    },
    getSumBy              : function ( header_name, header_value ) {
        var _to_return = {};
        var _lines     = this.lines.getNotFiltered();
        var _current;
        for ( var i = 0, _size_i = _lines.length; i < _size_i; i++ ) {
            _current = _lines[ i ].getCellValue( header_name );
            if ( !_to_return[ _current ] ) {
                _to_return[ _current ] = 0;
            }
            _to_return[ _current ] += parseInt( _lines[ i ].getCellValue( header_value ) || 0 );
        }
        return _to_return;
    },
    toggleEditionMode     : function () {
        this.edit_mode = !this.edit_mode;
        this.selectAllData( this.edit_mode ? SHINKEN_LIST.CONST.SELECTION.STATUS.ON : SHINKEN_LIST.CONST.SELECTION.STATUS.OFF );
    },
    updateAfterActionsDone: function ( data ) {
        this.setMessages();
        var to_return = this.lines.updateAfterActionsDone( data );
        this.addMessages( this.lines.getMessages() );
        return to_return;
    },
    hidePopup             : function ( _filter ) {
        if ( this.headers ) {
            this.headers.hidePopup( _filter );
        }
        if ( this.filters ) {
            this.filters.hidePopup( _filter );
        }
        if ( this.lines ) {
            this.lines.hidePopup( _filter );
        }
    },
    updateHtml            : function () {
        SERVICE.DOM.setDataSet( this.dom_element, "numberLines", this.lines.contents.length );
    },
    applySiblingSettings  : function ( list_set ) {
        this.filters.applySiblingSettings( list_set.filters );
        this.lines.applySiblingSettings( list_set.lines );
    },
    getDataToExport       : function () {
        var _to_return = [this.headers.getDataToExport()];
        return GS.TOOLS.ARRAY.concat( _to_return, this.lines.getDataToExport( this.headers ) );
    },
    getDataToSave         : function ( type ) {
        return this.lines.getDataToSave( type );
    }
    
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Set, GS.OBJECT.GsObjectHtml );
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Set, GS.OBJECT.CounterInterfaceV2 );
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.Set, GS.OBJECT.PhaseInterface );
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
COMPONENT.ButtonFromData_V2           = function ( event_name, label ) {
    this.__class_name__ = 'COMPONENT.ButtonFromData';
    this.init( event_name, label );
    
};
COMPONENT.ButtonFromData_V2.prototype = {
    init       : function ( event_name, label ) {
        this.name          = event_name;
        this.label         = label;
        this.class         = "gs-button gs-button-V2";
        this.onclick_event = "MANAGER.EventManagerV2.clickButtonV2(event, '" + this.name + "')";
    },
    getUUID    : function () {
        return this.name;
    },
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", {
            class                  : this.getClass(),
            onclick                : this.getOnClickEvent(),
            "data-name"            : this.name,
            "data-visibility-state": this.getVisibilityState()
        } ) );
        this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-label" }, this.label ) );
        var _tooltip_by_state = this.getTooltipByState();
        if ( _tooltip_by_state ) {
            this.setTooltipHtml( _tooltip_by_state );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.ButtonFromData_V2, COMPONENT.InterfaceButton );
COMPONENT.ButtonFromData_V3           = function ( event_name, label ) {
    this.__class_name__ = 'COMPONENT.ButtonFromData';
    this.init( event_name, label );
    
};
COMPONENT.ButtonFromData_V3.prototype = {
    init              : function ( event_name, label ) {
        this.name = event_name;
        this.addParamForEvents( COMPONENT.BUTTON.PARAM.BUTTON_NAME, this.name );
        this.label = label;
        this.class = "gs-button gs-button-V3 flex-layout-center-h-v";
    },
    getUUID           : function () {
        return this.name;
    },
    setLabelDomElement: function ( dom_element_label ) {
        SERVICE.DOM.addElementToAfterEmpty( dom_element_label, this.label_dom_element );
    },
    computeHtml       : function () {
        let onclick_event = "MANAGER.EventManagerV2.clickButton_V3(event, " + this.parseParamForEventsToHtml() + ")";
        this.setDomElement( SERVICE.DOM.createElement( "div", {
            class                  : this.getClass(),
            onclick                : onclick_event,
            "data-name"            : this.name,
            "data-visibility-state": this.getVisibilityState()
        } ) );
        this.label_dom_element = this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-label" }, this.label ) );
        let _tooltip_by_state  = this.getTooltipByState();
        if ( _tooltip_by_state ) {
            this.setTooltipHtml( _tooltip_by_state );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.ButtonFromData_V3, COMPONENT.InterfaceButton_V3 );
COMPONENT.ButtonWithCounter           = function ( event_name, label ) {
    this.__class_name__ = 'COMPONENT.ButtonFromData';
    this.init( event_name, label );
    
};
COMPONENT.ButtonWithCounter.prototype = {
    init              : function ( event_name, label ) {
        this.name = event_name;
        this.addParamForEvents( COMPONENT.BUTTON.PARAM.BUTTON_NAME, this.name );
        this.label = label;
        this.class = "gs-button gs-button-V3";
        this.initCounterCommon();
    },
    initCounterCommon : function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL );
        this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL ).setShowIfNull( true );
    },
    setLabelDomElement: function ( dom_element_label ) {
        SERVICE.DOM.addElementToAfterEmpty( dom_element_label, this.label_dom_element );
    },
    computeHtml       : function () {
        let onclick_event = "MANAGER.EventManagerV2.clickButton_V3(event, " + this.parseParamForEventsToHtml() + ")";
        this.setDomElement( SERVICE.DOM.createElement( "div", {
            class                  : this.getClass(),
            onclick                : onclick_event,
            "data-name"            : this.name,
            "data-visibility-state": this.getVisibilityState()
        } ) );
        this.label_dom_element = this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-label" }, this.label ) );
        this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL ).computeHtml();
        this.addCounterTargetDomElement( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL, this.getDomElement(), "total" );
        SERVICE.DOM.addElementTo( this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL ).getDomElement(), this.label_dom_element );
        let _tooltip_by_state = this.getTooltipByState();
        if ( _tooltip_by_state ) {
            this.setTooltipHtml( _tooltip_by_state );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.ButtonWithCounter, COMPONENT.ButtonFromData_V3 );
COMPONENT.RadioButtonFromData           = function ( value, label, property_name ) {
    this.__class_name__ = 'COMPONENT.RadioButtonFromData';
    this.initSpecific( value, label, property_name );
};
COMPONENT.RadioButtonFromData.prototype = {
    setState       : function ( to_set ) {
        this.state = to_set;
        if ( !this.button_dom_element ) {
            return;
        }
        this.resetStateClass();
        switch ( this.state ) {
            case COMPONENT.CONST.BTN_STATE.ON:
                this.button_dom_element.classList.add( "gs-active" );
                break;
            case COMPONENT.CONST.BTN_STATE.DISABLED:
                this.button_dom_element.classList.add( "gs-disabled" );
                break;
            case COMPONENT.CONST.BTN_STATE.ENABLED_WITH_ERRORS:
                this.button_dom_element.classList.add( "gs-enabled-with-errors" );
                break;
        }
    },
    resetStateClass: function () {
        if ( !this.dom_element ) {
            return;
        }
        this.button_dom_element.classList.remove( "gs-active" );
        this.button_dom_element.classList.remove( "gs-disabled" );
        this.button_dom_element.classList.remove( "gs-enabled-with-errors" );
    },
    initSpecific   : function ( value, label, property_name ) {
        this.property_name = property_name;
        this.param_name    = value;
        this.value         = value;
        this.label         = label || this.value;
        this.state         = COMPONENT.CONST.BTN_STATE.OFF;
    },
    computeHtml    : function () {
        this.setDomElement( SERVICE.DOM.createElement( "td", { class: "gs-btn-cell gs-btn-user-cell", "data-visibility-state": this.getVisibilityState() } ) );
        var _class_button       = this.isOn() ? "gs-radio-btn gs-active" : "gs-radio-btn";
        this.button_dom_element = this.addDomElement( SERVICE.DOM.createElement( "button", {
            class  : _class_button,
            value  : this.getValue(),
            onclick: "MANAGER.EventManagerV2.clickRadioButton(event,'" + this.property_name + "', '" + this.param_name + "')"
        } ) );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "gs-label" }, this.label ), this.button_dom_element );
        if ( this.tooltip_html ) {
            this.setTooltipHtml( this.tooltip_html, this.tooltip_type );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.RadioButtonFromData, COMPONENT.ButtonFromData );
COMPONENT.RadioButtonFromData_V3           = function ( value, label, property_name ) {
    this.__class_name__ = 'COMPONENT.RadioButtonFromData_V3';
    this.initSpecific( value, label, property_name );
};
COMPONENT.RadioButtonFromData_V3.prototype = {
    setState       : function ( to_set ) {
        this.state = to_set;
        if ( !this.button_dom_element ) {
            return;
        }
        this.resetStateClass();
        switch ( this.state ) {
            case COMPONENT.CONST.BTN_STATE.ON:
                this.button_dom_element.classList.add( "gs-active" );
                break;
            case COMPONENT.CONST.BTN_STATE.DISABLED:
                this.button_dom_element.classList.add( "gs-disabled" );
                break;
            case COMPONENT.CONST.BTN_STATE.ENABLED_WITH_ERRORS:
                this.button_dom_element.classList.add( "gs-enabled-with-errors" );
                break;
        }
    },
    resetStateClass: function () {
        if ( !this.dom_element ) {
            return;
        }
        this.button_dom_element.classList.remove( "gs-active" );
        this.button_dom_element.classList.remove( "gs-disabled" );
        this.button_dom_element.classList.remove( "gs-enabled-with-errors" );
    },
    initSpecific   : function ( value, label, property_name ) {
        this.property_name = property_name;
        this.value         = value;
        this.label         = label || this.value;
        this.state         = COMPONENT.CONST.BTN_STATE.OFF;
        this.addParamForEvents( PROPERTY.COMMON.PARAM.PROPERTY_NAME, property_name );
        this.addParamForEvents( COMPONENT.BUTTON.PARAM.BUTTON_NAME, this.value );
    },
    computeHtml    : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-btn-container", "data-visibility-state": this.getVisibilityState() } ) );
        var _class_button       = this.isOn() ? "gs-radio-btn-V3 gs-active" : "gs-radio-btn-V3";
        this.button_dom_element = this.addDomElement( SERVICE.DOM.createElement( "button", {
            class  : _class_button,
            value  : this.getValue(),
            onclick: "MANAGER.EventManagerV2.clickRadioButton_V3(event," + this.parseParamForEventsToHtml() + ")"
        } ) );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "gs-label" }, this.label ), this.button_dom_element );
        if ( this.tooltip_html ) {
            this.setTooltipHtml( this.tooltip_html, this.tooltip_type );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.RadioButtonFromData_V3, COMPONENT.ButtonFromData );
COMPONENT.RadioButtonClassicFromData_V3           = function ( value, label, property_name ) {
    this.__class_name__ = 'COMPONENT.RadioButtonClassicFromData_V3';
    this.initSpecific( value, label, property_name );
};
COMPONENT.RadioButtonClassicFromData_V3.prototype = {
    initSpecific: COMPONENT.RadioButtonFromData_V3.prototype.initSpecific,
    computeHtml : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-btn-container", "data-visibility-state": this.getVisibilityState() } ) );
        var _class_button       = this.isChecked() ? "gs-radio-btn-V3 gs-active" : "gs-radio-btn-V3";
        this.button_dom_element = this.addDomElement( SERVICE.DOM.createElement( "input", {
            class  : _class_button,
            type   : "radio",
            id     : this.value,
            name   : this.property_name,
            value  : this.getValue(),
            onclick: "MANAGER.EventManagerV2.clickRadioButton_V3(event," + this.parseParamForEventsToHtml() + ")"
        } ) );
        SERVICE.DOM.addElementAfterTo( SERVICE.DOM.createElement( "label", { class: "gs-label", for: this.value }, this.label ), this.button_dom_element );
        if ( this.tooltip_html ) {
            this.setTooltipHtml( this.tooltip_html, this.tooltip_type );
        }
    },
    setState    : function ( to_set ) {
        this.state = to_set;
        if ( !this.dom_element ) {
            return;
        }
        this.resetStateClass();
        switch ( this.state ) {
            case COMPONENT.CONST.BTN_STATE.ON:
                SERVICE.DOM.addAttribute( this.dom_element, 'checked' );
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
    }
    
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.RadioButtonClassicFromData_V3, COMPONENT.RadioButtonFromData_V3 );
COMPONENT.Checkbox           = function ( dom_element, parent ) {
    this.init( dom_element, parent );
};
COMPONENT.Checkbox.prototype = {
    init                 : function ( dom_element, parent ) {
        this.dom_element = dom_element;
        this.initCounters( parent );
        this.checkbox_user      = new OBJECT.ElementCheckbox( dom_element.querySelector( ".gs-checkbox-user" ), this );
        this.checkbox_inherited = new OBJECT.ElementCheckbox( dom_element.querySelector( ".gs-checkbox-inherited" ), this );
        this.checkbox_default   = new OBJECT.ElementCheckbox( dom_element.querySelector( ".gs-checkbox-default" ), this );
        this.initInterface();
    },
    toggleCheckedUser    : function () {
        var _value = !this.isCheckedUser();
        this.setCheckedUser( _value );
    },
    isCheckedUser        : function () {
        return this.checkbox_user.isChecked();
    },
    isCheckedInheritance : function () {
        return this.checkbox_inherited.isChecked();
    },
    isCheckedDefault     : function () {
        return this.checkbox_default.isChecked();
    },
    setCheckedUser       : function ( to_set ) {
        this.checkbox_user.setChecked( to_set );
        this.doExtraAction();
    },
    setCheckedInheritance: function ( to_set ) {
        this.checkbox_inherited.setChecked( to_set );
    },
    getChildrenObject    : function () {
        return [this.checkbox_user, this.checkbox_inherited, this.checkbox_default];
    },
    updateUrlWithValue   : function () {
        var _value = this.isCheckedUser() ? '1' : '';
        GS.HIGHWAY.setParam( this.url_param_key, _value );
    }
    
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.Checkbox, COMPONENT.Interface );
COMPONENT.FinderObjectAbstract           = function () {
    this.__class_name__ = 'COMPONENT.FinderObject';
    this.init();
};
COMPONENT.FinderObjectAbstract.prototype = {
    init           : function () {
    },
    doActionAfter  : function ( event_name, param ) {
        switch ( event_name ) {
            case "apply_filter_check_in_page_host":
                if ( param === undefined ) {
                    this.input_search.setValueFromInput();
                }
                else {
                    this.input_search.setValueFromJs( param );
                }
                this.input_search.askComputeAfterChange( null, this.parent_object );
                break;
            case "compute_phase_depending_input_value":
                this.setPhase( this.input_search.getValue() ? GS.OBJECT.CONST.PHASE.RUNNING : GS.OBJECT.CONST.PHASE.STOPPING );
                break;
            case "input-clean-button":
                this.input_search.setValueFromJs( "" );
                break;
            case "toggle_search_activity":
                this.togglePhase( GS.OBJECT.CONST.PHASE.RUNNING, GS.OBJECT.CONST.PHASE.STOPPING );
                break;
            case "focus-on-filtered-check":
                this.setPhase( param ? GS.OBJECT.CONST.PHASE.STOPPING : GS.OBJECT.CONST.PHASE.RUNNING );
                break;
        }
    },
    setParentObject: function ( to_set ) {
        this.parent_object = to_set;
    }
    
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.FinderObjectAbstract, GS.OBJECT.PhaseInterface );
GS.TOOLS.CLASS.addPrototype( COMPONENT.FinderObjectAbstract, GS.OBJECT.GsObjectHtml );
COMPONENT.FinderObjectAbstractFromHtml           = function ( dom_element, parent, dom_element_phase ) {
    this.__class_name__ = 'COMPONENT.FinderObject';
    this.init( dom_element, parent, dom_element_phase );
};
COMPONENT.FinderObjectAbstractFromHtml.prototype = {
    init: function ( dom_element, parent, dom_element_phase ) {
        this.initPhase();
        this.setPhaseDomElement( dom_element_phase || dom_element, "finderObject" );
        this.setDomElement( dom_element );
        this.input_search = new COMPONENT.Input( this.getDomElement().querySelector( ".gs-input" ) );
        this.input_search.setValueFromJs( "" );
        this.setParentObject( parent );
        this.setPhase( GS.OBJECT.CONST.PHASE.RUNNING );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.FinderObjectAbstractFromHtml, COMPONENT.FinderObjectAbstract );
COMPONENT.Generic           = function ( dom_element ) {
    this.init( dom_element );
};
COMPONENT.Generic.prototype = {
    init             : function ( dom_element ) {
        this.dom_element = dom_element;
        if ( this.dom_element ) {
            this.initDomElement();
        }
        else {
            this.state = COMPONENT.CONST.BTN_STATE.DISABLED;
        }
        this._computeState();
    },
    initDomElement   : function () {
        this.value = this.dom_element.dataset.value;
    },
    _computeState    : function () {
        if ( this.state === COMPONENT.CONST.BTN_STATE.DISABLED ) {
            return;
        }
        this.setState( this.dom_element.classList.contains( "gs-active" ) ? COMPONENT.CONST.BTN_STATE.ON : COMPONENT.CONST.BTN_STATE.OFF );
    },
    getUUID          : function () {
        return this.getValue();
    },
    setState         : function ( to_set ) {
        this.state = to_set;
        if ( !this.dom_element ) {
            return;
        }
        this.setClassWithState();
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
    setClassWithState: function () {
        if ( !this.dom_element ) {
            return;
        }
        this.dom_element.classList.remove( "gs-active" );
        this.dom_element.classList.remove( "gs-disabled" );
        this.dom_element.classList.remove( "gs-enabled-with-errors" );
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
    },
    getValue         : function () {
        return this.value;
    },
    setValue         : function ( to_set ) {
        this.value = to_set;
    },
    getState         : function () {
        return this.state;
    },
    isOn             : function () {
        return this.state === COMPONENT.CONST.BTN_STATE.ON;
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
GS.TOOLS.CLASS.addPrototype( COMPONENT.Generic, GS.OBJECT.GsObjectHtml );
GS.TOOLS.CLASS.addPrototype( COMPONENT.Generic, COMPONENT.Interface );
COMPONENT.InputRange           = function ( dom_element, property ) {
    this.init( dom_element, property );
};
COMPONENT.InputRange.prototype = {
    init                 : function ( dom_element ) {
        this.dom_element_parent    = dom_element;
        this.dom_input_range       = dom_element.querySelector( ".gs-range-container input" );
        this.component_label_input = new COMPONENT.Label( dom_element.querySelector( ".gs-label-input-range" ) );
        this.value                 = 0;
        this.min                   = this.dom_input_range.min;
        this.max                   = this.dom_input_range.max;
        this.unit                  = dom_element.dataset.unit;
    },
    doActionAfter        : function ( event_name, param ) {
        switch ( event_name ) {
            case "value_changed":
                this.setValue( this.dom_input_range.value );
                break;
        }
    },
    setValue             : function ( to_set ) {
        this.value = to_set;
        this.updateLabel();
        SERVICE.DOM.setDataSet( this.dom_element_parent, "value", to_set );
    },
    setValueFromUser     : function ( to_set ) {
        this.dom_input_range.value = to_set;
        this.setValue( to_set );
    },
    updateLabel          : function () {
        var _to_set = this.value + this.unit;
        this.component_label_input.updateLabel( _to_set );
    },
    getValue             : function () {
        return this.value;
    },
    getUnit              : function () {
        return this.unit || "";
    },
    setDefaultKeyAndValue: function ( to_set ) {
        this.dom_element_parent.setAttribute( "data-default-value", to_set );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InputRange, GS.OBJECT.CounterInterface );
COMPONENT.InterfaceInputWithDropDown           = function () {
};
COMPONENT.InterfaceInputWithDropDown.prototype = {
    init                       : function () {
    },
    keydown                    : function ( event, key_code ) {
        switch ( key_code ) {
            case GS.CONST.KEY_CODE.DOWN:
                this.select.moveAutoSelectCursor( true );
                event.preventDefault();
                break;
            case GS.CONST.KEY_CODE.UP:
                this.select.moveAutoSelectCursor( false );
                event.preventDefault();
                break;
            case GS.CONST.KEY_CODE.ENTER:
                this.select.validSelectedOrFirstElement();
                event.preventDefault();
                event.stopPropagation();
                break;
            default:
                if ( GS.TOOLS.ARRAY.contains( this.separators, key_code ) ) {
                    event.preventDefault();
                    event.stopPropagation();
                }
        }
    },
    askComputeAfterChange      : function ( dom_element, parent, args ) {
        this.input.askComputeAfterChange( dom_element, parent || this, args );
    },
    clickOnItemSelector        : function ( parent_name, key_name, event ) {
        if ( event ) {
            event.stopPropagation();
        }
        if ( !key_name && event ) {
            var _dom_parent = SERVICE.DOM.findParentElementWithClass( event.target, "gs-option", 20 );
            if ( _dom_parent ) {
                key_name = _dom_parent.dataset.keyName;
            }
        }
        var _previous_value     = this.input.getValue();
        var first_part          = _previous_value.substring( 0, this.first_separator );
        var second_part         = _previous_value.substring( this.last_separator, _previous_value.length );
        var _is_specific_option = false;
        if ( event ) {
            var _parent_dom = SERVICE.DOM.findParentElementWithDataSet( event.target, 'type', 10 );
            if ( _parent_dom && _parent_dom.dataset.type === 'is-always-visible' ) {
                _is_specific_option = true;
            }
        }
        if ( _is_specific_option ) {
            this.input.setValueFromJs( key_name );
        }
        else {
            this.input.setValueFromJs( first_part + key_name + second_part );
        }
        this.setCurrentFilter( true );
    },
    clickOnInput               : function () {
        this.setCurrentFilter();
    },
    setPlaceholder             : function ( to_set ) {
        if ( !to_set ) {
            to_set = this.placeholder_no_template || '';
        }
        this.placeholder = to_set;
        this.input.setPlaceholder( to_set );
    },
    setValidationRules         : function ( _to_set ) {
        this.input.setValidationRules( _to_set );
    },
    hasBeenChanged             : function () {
        return this.current_value !== this.original_value;
    },
    getParentName              : function () {
        return this.parent.getParentName();
    },
    getChildrenObject          : function () {
        return [this.input];
    },
    getValue                   : function () {
        return this.input.getValue();
    },
    setValueFromJs             : function ( to_set ) {
        this.input.setValueFromJs( to_set );
    },
    getFinalValue              : function () {
        if ( this.timeout_ask_compute_after_change ) {
            clearTimeout( this.timeout_ask_compute_after_change );
            this.computeAfterChange();
        }
        return this.getValue();
    },
    setCurrentFilter           : function ( focus_on_last_separator, bypass_do_filter, validation_done ) {
        if ( this.select.list_element.list.length > 0 ) {
            this.select.openSelector();
        }
        var _value           = this.input.getValue();
        var _previous_filter = this.current_filter ? this.current_filter : "";
        var _cursor_position = this.input.dom_element_input.selectionStart;
        this.first_separator = 0;
        this.last_separator  = _value.length;
        
        var _in_quotes = false;
        for ( var i = 0; i < _cursor_position; i++ ) {
            if ( GS.TOOLS.ARRAY.contains( this.separators, _value[ i ] ) && !this.isReallyInQuotes( _in_quotes ) ) {
                this.first_separator = i + 1;
            }
            if ( _value[ i ] === '"' ) {
                _in_quotes = !_in_quotes;
            }
        }
        for ( i = _cursor_position; i < _value.length; i++ ) {
            if ( GS.TOOLS.ARRAY.contains( this.separators, _value[ i ] ) && !this.isReallyInQuotes( _in_quotes ) ) {
                this.last_separator = i;
                break;
            }
            if ( _value[ i ] === '"' ) {
                _in_quotes = !_in_quotes;
            }
        }
        
        if ( (this.first_separator) >= this.last_separator ) {
            this.current_filter = "";
        }
        else {
            this.current_filter = _value.substring( this.first_separator, this.last_separator ).trim();
        }
        if ( focus_on_last_separator ) {
            this.input.restoreCursorLocation( this.last_separator );
        }
        
        if ( GS.TOOLS.STRING.startsWith( this.current_filter, "=" ) ) {
            this.current_filter = this.current_filter.substring( 1 );
        }
        if ( this.use_quotes ) {
            this.current_filter = this.current_filter.replace( /"/g, '' );
        }
        this.select.setResearchDisplay( this.current_filter );
        if ( !bypass_do_filter || this.current_filter !== _previous_filter ) {
            this.select.doFilter( this.current_filter );
        }
        if ( !validation_done ) {
            this.validateValueInput();
        }
    },
    hasAutoSelect              : function () {
        return this.select.hasAutoSelect();
    },
    getDataSetLink             : function () {
        return this.select.getDataSetLink();
    },
    getListElement             : function () {
        return this.select.getListElement();
    },
    getStatus                  : function () {
        return this.input.getStatus();
    },
    addValidationRule          : function ( to_add, type ) {
        this.input.addValidationRule( to_add, type );
    },
    computeAfterChange         : function ( validation_done ) {
        this.setCurrentFilter( false, !this.input.need_validation, validation_done );
    },
    hidePopup                  : function () {
        this.select.hidePopup();
    },
    validSelectedOrFirstElement: function () {
        this.select.validSelectedOrFirstElement();
    },
    validateValueInput         : function () {
        this.input.validateValueInput();
    },
    finishActionBeforeReload   : function () {
        this.input.finishActionBeforeReload();
    },
    doActionAfterChange        : function () {
        this.computeAfterChange();
    },
    isReallyInQuotes           : function ( in_quotes ) {
        return this.use_quotes ? in_quotes : false;
    },
    applySiblingSettings       : function ( component ) {
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceInputWithDropDown, GS.OBJECT.GsObjectHtml );
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceInputWithDropDown, GS.OBJECT.CounterInterface );
COMPONENT.InputWithDropDown           = function ( dom_element, parent, use_quotes, type ) {
    this.init( dom_element, parent, use_quotes, type );
};
COMPONENT.InputWithDropDown.prototype = {
    init: function ( dom_element, parent, use_quotes, type ) {
        this.parent = parent;
        this.initCounters( parent );
        this.type            = type;
        this.dom_element     = dom_element;
        this.uuid            = SERVICE.STRING.buildUUID();
        this.input           = new COMPONENT.Input( this.dom_element.querySelector( '.gs-input-table' ), parent || this, true );
        this.select          = new COMPONENT.Select( this.dom_element.querySelector( '.gs-select-container' ), COMPONENT.CONST.TYPE.SINGLE_SELECT, false, this, false, true );
        this.separators      = this.dom_element.dataset.separator.split( "$^$" );
        this.separator_regex = new RegExp( "[" + this.separators.join( "" ) + "]" );
        if ( use_quotes == undefined ) {
            use_quotes = false;
        }
        this.use_quotes = !!use_quotes;
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InputWithDropDown, COMPONENT.InterfaceInputWithDropDown );
COMPONENT.InputWithDropDownFomData           = function ( type ) {
    this.type = type;
    this.init();
};
COMPONENT.InputWithDropDownFomData.prototype = {
    init               : function () {
        this.uuid      = SERVICE.STRING.buildUUID();
        this.input     = new COMPONENT.InputFromData();
        this.select    = new COMPONENT.SelectFromData( COMPONENT.CONST.TYPE.SINGLE_SELECT );
        this.data_name = "";
    },
    setOptionsFromArray: function ( to_set ) {
        this.select.setOptionsFromArray( to_set );
    },
    addOption          : function ( to_add ) {
        this.select.addOption( to_add );
    },
    setPlaceholder     : function ( to_set ) {
        this.input.setPlaceholder( to_set );
    },
    computeHtml        : function () {
        this.input.computeHtml();
        this.select.computeHtml();
        this.dom_element = SERVICE.DOM.createElement( "div",
            {
                class              : "gs-list-select-input gs-list-filter-container",
                "data-type"        : "input-string-with-dropdown",
                "data-name"        : this.data_name || "input-string-with-dropdown",
                "data-input-status": "gs-no-status"
            }
        );
        SERVICE.DOM.addElementTo( this.input.dom_element, this.dom_element );
        SERVICE.DOM.addElementTo( this.select.dom_element, this.dom_element );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InputWithDropDownFomData, COMPONENT.InterfaceInputWithDropDown );
COMPONENT.INPUT                    = {
    PARAM: {
        NAME: "input_name"
    }
};
COMPONENT.InterfaceInput           = function ( value ) {
    this.__class_name__ = 'COMPONENT.Input';
    this.init( value );
};
COMPONENT.InterfaceInput.prototype = {
    init                          : function ( value ) {
        this.current_value = value || "";
    },
    clickOnInput                  : function () {
    },
    hasFocus                      : function () {
        return SERVICE.DOM.hasFocus( this.dom_element_input );
    },
    getDomValue                   : function () {
        if ( this.dom_element_input ) {
            return this.dom_element_input.value;
        }
    },
    getValue                      : function () {
        return this.current_value;
    },
    setValue                      : function ( keep_cursor_pos ) {
        this.computeNeedValidation();
        this.current_value = this.getDomValue();
        this.askComputeHeight();
        this.updateBroomButton();
    },
    setValueFromJs                : function ( to_set ) {
        this.current_value = to_set;
        this.computeNeedValidation();
        if ( this.dom_element_input ) {
            SERVICE.DOM.setInputValue( this.dom_element_input, to_set );
            this.validateValueInput();
            this.updateView();
            this.doExtraAction();
        }
        this.updateBroomButton();
    },
    setValueFromInput             : function () {
        this.computeNeedValidation();
        this.current_value = this.getDomValue();
        if ( this.need_validation ) {
            this.updateView();
        }
        this.doExtraAction();
        this.updateBroomButton();
    },
    setStatus                     : function ( to_set ) {
        this.status = to_set;
        SERVICE.DOM.setDataSet( this.dom_element, 'status', to_set );
    },
    getStatus                     : function () {
        return this.status;
    },
    setIsProtected                : function ( to_set ) {
        this.is_protected = to_set;
        this.dom_element_input.setAttribute( "type", this.type );
    },
    setDisabled                   : function ( to_set ) {
        if ( to_set ) {
            this.dom_element_input.setAttribute( "readonly", '' );
        }
        else {
            this.dom_element_input.removeAttribute( "readonly", '' );
        }
    },
    setPlaceholder                : function ( to_set ) {
        if ( !to_set ) {
            to_set = this.placeholder_no_template || "";
        }
        to_set           = GS.TOOLS.STRING.unescape_xss( to_set );
        this.placeholder = to_set;
        if ( this.dom_element_input ) {
            this.dom_element_input.placeholder = this.placeholder;
        }
    },
    skipValidation                : function ( to_set ) {
        this.skip_validation = to_set;
    },
    hasBeenChanged                : function () {
        return this.getValue() !== this.original_value;
    },
    setNeedValidation             : function ( to_set, parent_name ) {
        this.need_validation = to_set;
    },
    setType__20241003             : function ( to_set ) {
        this.type = to_set;
    },
    setTimeoutAfterChange         : function ( to_set ) {
        this.time_out_compute_after_change = to_set;
    },
    setExtraTooltip               : function ( to_set ) {
        this.extra_tooltip = to_set;
    },
    addShinkenTooltip             : function ( type, text ) {
        this.dom_element.setAttribute( "onmouseenter", "SHINKEN_TOOLTIP.showTooltip(this)" );
        this.dom_element.setAttribute( "onmouseleave", "SHINKEN_TOOLTIP.hideTooltip()" );
        if ( this.extra_tooltip && this.hasBeenChanged() ) {
            if ( text ) {
                text += "<br>";
            }
            text += this.extra_tooltip;
            if ( type === "gs-success-border" ) {
                type = SHINKEN_TOOLTIP.TYPE.BEWARE_BORDER;
            }
        }
        this.dom_element.setAttribute( 'shi-tip-type', type );
        this.dom_element.setAttribute( 'shi-tip-text', text );
        
        text && this.hasFocus() ? SHINKEN_TOOLTIP.showTooltip( this.dom_element ) : SHINKEN_TOOLTIP.hideTooltip();
    },
    setMessage                    : function ( message ) {
        var _status  = COMPONENT.CONST.STATUS.NONE;
        this.message = message;
        if ( message ) {
            _status = message.getStatus();
        }
        var _counter = [0, 0];
        this.setStatus( _status );
        switch ( _status ) {
            case COMPONENT.CONST.STATUS.ERROR:
                this.addShinkenTooltip( SHINKEN_TOOLTIP.TYPE.ERROR_BORDER, message.buildMessage() );
                _counter[ 0 ] = 1;
                break;
            case COMPONENT.CONST.STATUS.BEWARE:
                this.addShinkenTooltip( SHINKEN_TOOLTIP.TYPE.BEWARE_BORDER, message.buildMessage() );
                break;
            case COMPONENT.CONST.STATUS.WARNING:
                this.addShinkenTooltip( SHINKEN_TOOLTIP.TYPE.WARNING_BORDER, message.buildMessage() );
                _counter[ 1 ] = 1;
                break;
            case COMPONENT.CONST.STATUS.NONE:
                this.addShinkenTooltip( "gs-success-border", message ? message.buildMessage() : "" );
                break;
        }
        this.setError( this.uuid, _counter[ 0 ] );
        this.setWarning( this.uuid, _counter[ 1 ] );
    },
    updateBroomButton             : function () {
        if ( this.broom_button ) {
            SERVICE.DOM.addOrRemoveClasses( this.broom_button.getDomElement(), !this.current_value, "gs-hidden" );
        }
    },
    restoreCursorLocation         : function ( location ) {
        this.dom_element_input.focus();
        if ( location ) {
            this.last_cursor_location = location;
        }
        if ( !this.last_cursor_location ) {
            this.last_cursor_location = this.current_value.length;
        }
        this.dom_element_input.selectionStart = this.last_cursor_location;
        this.dom_element_input.selectionEnd   = this.last_cursor_location;
    },
    saveCursorLocation            : function () {
        this.last_cursor_location = this.getCursorLocation();
    },
    getCursorLocation             : function () {
        return this.dom_element_input.selectionStart;
    },
    updateView                    : function ( is_inherited, update, keep_cursor_pos, has_inheritance ) {
        var _to_write = this.current_value;
        if ( this.current_value === 'null' && has_inheritance ) {
            _to_write = '';
        }
        if ( keep_cursor_pos ) {
            this.saveCursorLocation();
        }
        
        if ( update ) {
            this.computeNeedValidation();
            SERVICE.DOM.setInputValue( this.dom_element_input, is_inherited ? '' : _to_write );
        }
        else {
            this.current_value = this.getDomValue();
        }
        if ( this.dom_element_input.value ) {
            this.dom_element.classList.remove( 'gs-empty-input' );
        }
        else {
            this.dom_element.classList.add( 'gs-empty-input' );
        }
        this.askComputeHeight();
        if ( keep_cursor_pos ) {
            this.restoreCursorLocation();
        }
        if ( this.dom_element_input_broom ) {
            SERVICE.DOM.addOrRemoveClasses( this.dom_element_input_broom, !this.current_value, "gs-hidden" );
        }
    },
    askComputeHeight              : function () {
        var self = this;
        if ( self.timeout_ask_compute_height ) {
            clearTimeout( self.timeout_ask_compute_height );
        }
        self.timeout_ask_compute_height = setTimeout( function () {
            if ( self.is_resizable && SERVICE.DOM.hasScrollHeight( self.dom_element_input ) && SERVICE.DOM.getBoundingClientRect( self.dom_element_input, 'height' ) < 150 ) {
                self.dom_element_input.style.height = Math.min( 150, self.dom_element_input.scrollHeight + 6 ) + 'px';
            }
        }, 200 );
    },
    askComputeAfterChange         : function ( dom_element, parent, arg ) {
        var self = this;
        if ( self.timeout_ask_compute_after_change ) {
            clearTimeout( self.timeout_ask_compute_after_change );
        }
        self.timeout_ask_compute_after_change = setTimeout( function () {
            self.computeAfterChange( dom_element, parent, arg );
        }, self.time_out_compute_after_change );
    },
    finishActionBeforeReload      : function () {
        if ( this.timeout_ask_compute_after_change ) {
            this.computeAfterChange();
        }
    },
    computeAfterChange            : function ( dom_element, parent, args ) {
        this.setValueFromInput();
        if ( !args ) {
            args = {};
        }
        
        args[ 'validation_done' ] = this.validateValueInput();
        args[ 'input_object' ]    = this;
        if ( parent && this.getValue() !== this.previous_value_before_compute ) {
            this.previous_value_before_compute = this.getValue();
            parent.doActionAfterChange( args );
        }
    },
    validateValueInput            : function ( forced, ignore_focus ) {
        if ( !GS.TOOLS.SHINKEN_VALIDATOR ) {
            if ( this.validation_parameter ) {
                return this.validateValueInputNewFormat( forced, ignore_focus );
            }
            return false;
        }
        if ( this.need_validation || forced ) {
            var _validation_rules = this.getValidationRules( ignore_focus );
            var _validator;
            if ( _validation_rules ) {
                _validator = GS.TOOLS.SHINKEN_VALIDATOR._compute_validation( _validation_rules, GS.TOOLS.STRING.trimExtented( this.getValue() ) );
            }
            else if ( this.key_validation ) {
                _validator = GS.TOOLS.SHINKEN_VALIDATOR.init_with_name( this.key_validation, this.getValue() );
            }
            else {
                return false;
            }
            this.setMessage( _validator );
            this.setNeedValidation( false );
            return true;
        }
        return false;
    },
    validateValueInputNewFormat   : function () {
        if ( this.need_validation ) {
            var _to_set = COMPONENT.CONST.STATUS.NONE;
            if ( !SHINKEN_VALIDATION.Service.isValid( this.getValue(), this.validation_parameter ) ) {
                _to_set = COMPONENT.CONST.STATUS.ERROR;
            }
            this.setStatus( _to_set );
            this.setNeedValidation( false );
            return true;
        }
        return false;
    },
    addValidationRule             : function ( to_add, type ) {
        switch ( type ) {
            case COMPONENT.CONST.FILTER.TYPES_VALIDATION.HAS_FOCUS:
                if ( !this.validation_rules ) {
                    this.validation_rules = [];
                }
                this.validation_rules.push( to_add );
                break;
            case COMPONENT.CONST.FILTER.TYPES_VALIDATION.NOT_FOCUS:
                if ( !this.validation_rules_not_focus ) {
                    this.validation_rules_not_focus = [];
                }
                this.validation_rules_not_focus.push( to_add );
                break;
        }
        
    },
    setValidationRules            : function ( to_set, type ) {
        switch ( type ) {
            case COMPONENT.CONST.FILTER.TYPES_VALIDATION.HAS_FOCUS:
                this.validation_rules = to_set;
                break;
            case COMPONENT.CONST.FILTER.TYPES_VALIDATION.NOT_FOCUS:
                this.validation_rules_not_focus = to_set;
                break;
        }
    },
    computeNeedValidation         : function () {
        if ( this.skip_validation ) {
            return;
        }
        if ( this.need_validation ) {
            return;
        }
        if ( this.current_value !== this.getDomValue() ) {
            this.setNeedValidation( true );
        }
    },
    getValidationRules            : function ( ignore_focus ) {
        if ( !this.validation_rules && !this.validation_rules_not_focus ) {
            return null;
        }
        if ( ignore_focus ) {
            return this.validation_rules_not_focus || this.validation_rules;
        }
        if ( !this.hasFocus() && this.validation_rules_not_focus ) {
            return this.validation_rules_not_focus;
        }
        return this.validation_rules;
    },
    setValidationParameter        : function ( validation_parameter ) {
        this.validation_parameter = validation_parameter;
    },
    updateUrlWithValue            : function () {
        var _value = this.current_value ? this.current_value : '';
        GS.HIGHWAY.setParam( this.url_param_key, _value );
    },
    applySiblingSettings          : function ( input ) {
        if ( this.current_value === input.current_value ) {
            return;
        }
        this.simulateUserInteractionWriting( input.current_value );
    },
    simulateUserInteractionWriting: function ( value ) {
        this.setValueFromJs( value );
        this.time_out_compute_after_change = 0;
        SERVICE.DOM.SimulateAction.keyUp( this.dom_element_input );
        this.time_out_compute_after_change = 200;
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceInput, GS.OBJECT.CounterInterface );
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceInput, COMPONENT.Interface );
COMPONENT.InterfaceInput_V3           = function () {
};
COMPONENT.InterfaceInput_V3.prototype = {
    doActionAfter      : function ( event_name, param ) {
        return this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon: function ( event_name, param ) {
        switch ( event_name ) {
            case "property_value__set__by_data":
            case "property_value__set__by_js":
                this.setValueFromJs( param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] );
                break;
            case "click_on_button_V3":
                switch ( param[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case "clean_input_value":
                        this.setValueFromJs( "" );
                        this.askComputeAfterChange( null, param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ] );
                        break;
                }
                break;
        }
    },
    getUUID            : function ( event_name, param ) {
        return this.getName();
    },
    addShinkenTooltip  : function ( type, text ) {
        this.dom_element.setAttribute( "onmouseenter", "SHINKEN_TOOLTIP.showTooltip(this)" );
        this.dom_element.setAttribute( "onmouseleave", "SHINKEN_TOOLTIP.hideTooltip()" );
        this.dom_element.setAttribute( 'shi-tip-type', type );
        this.dom_element.setAttribute( 'shi-tip-text', text );
        text && this.hasFocus() ? SHINKEN_TOOLTIP.showTooltip( this.dom_element ) : SHINKEN_TOOLTIP.hideTooltip();
    },
    setMessage         : function ( message ) {
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
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceInput_V3, GS.OBJECT.CounterInterfaceV2 );
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceInput_V3, COMPONENT.InterfaceInput );
COMPONENT.Input           = function ( dom_element, parent, no_auto_valid, extra_key_validation ) {
    this.__class_name__ = 'COMPONENT.Input';
    this.init( dom_element, parent, extra_key_validation );
};
COMPONENT.Input.prototype = {
    init: function ( dom_element, parent, extra_key_validation ) {
        this.initCounters( parent );
        this.dom_element = dom_element;
        
        if ( this.dom_element.classList.contains( 'gs-input' ) || this.dom_element.classList.contains( 'gs-input-key' ) || this.dom_element.classList.contains( 'gs-input-search' ) ) {
            this.dom_element_input = dom_element;
        }
        else {
            this.dom_element_input = dom_element.querySelector( '.gs-input' );
        }
        this.uuid                    = SERVICE.STRING.buildUUID();
        this.current_value           = this.dom_element_input.getAttribute( 'value' ) || this.dom_element_input.value;
        this.type                    = this.dom_element_input.getAttribute( 'type' );
        this.original_value          = this.current_value;
        this.placeholder_no_template = this.dom_element_input.placeholder;
        this.placeholder             = this.placeholder_no_template;
        this.is_resizable            = this.dom_element_input.tagName === 'TEXTAREA';
        this.setNeedValidation( true );
        this.key_validation = {
            "prop_name"     : parent ? parent.getParentName() : '',
            "component_name": extra_key_validation || ''
        };
        this.initInterface();
        this.time_out_compute_after_change = 200;
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.Input, COMPONENT.InterfaceInput );
COMPONENT.InputFromData           = function ( value ) {
    this.__class_name__ = 'COMPONENT.InputFromData';
    this.init( value );
};
COMPONENT.InputFromData.prototype = {
    init       : function ( value ) {
        this.event_name    = "";
        this.param_name    = "";
        this.current_value = value || "";
    },
    computeHtml: function () {
        this.dom_element       = SERVICE.DOM.createElement( "table", {
                class       : "gs-input-table",
                onmouseenter: "SHINKEN_TOOLTIP.showTooltip(this)",
                onmouseleave: "SHINKEN_TOOLTIP.hideTooltip()"
            }
        );
        var tr                 = SERVICE.DOM.createElement( "tr" );
        var td                 = SERVICE.DOM.createElement( "td", { class: "gs-input-container-cell" } );
        var div                = SERVICE.DOM.createElement( "div", { class: "gs-input-container" } );
        var _on_change         = "MANAGER.EventManager.onChangeOnInput(event, '" + this.event_name + "', '" + this.param_name + "')";
        this.dom_element_input = SERVICE.DOM.createElement( "input", {
            class      : "gs-input",
            type       : "text",
            value      : this.current_value,
            oncut      : _on_change,
            onpaste    : _on_change,
            onkeyup    : _on_change,
            onclick    : "MANAGER.EventManager.clickOnInput(event, '" + this.event_name + "', '" + this.param_name + "')",
            placeholder: this.placeholder
        } );
        
        SERVICE.DOM.addElementTo( this.dom_element_input, div );
        SERVICE.DOM.addElementTo( div, td );
        SERVICE.DOM.addElementTo( td, tr );
        SERVICE.DOM.addElementTo( tr, this.dom_element );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InputFromData, COMPONENT.InterfaceInput );
GS.TOOLS.CLASS.addPrototype( COMPONENT.InputFromData, GS.OBJECT.GsObjectHtml );
COMPONENT.InputFromDataV2           = function ( value, property_name, parent_uuid ) {
    this.__class_name__ = 'COMPONENT.InputFromDataV2';
    this.initSpecific( value, property_name, parent_uuid );
};
COMPONENT.InputFromDataV2.prototype = {
    initSpecific: function ( value, property_name, parent_uuid ) {
        this.init( value );
        this.property_name = property_name;
        this.parent_uuid   = parent_uuid;
    },
    computeHtml : function () {
        this.setDomElement( SERVICE.DOM.createElement( "table", {
                class       : "gs-input-table",
                onmouseenter: "SHINKEN_TOOLTIP.showTooltip(this)",
                onmouseleave: "SHINKEN_TOOLTIP.hideTooltip()"
            }
        ) );
        const _tr        = this.addDomElement( SERVICE.DOM.createElement( "tr" ) );
        const _td        = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", { class: "gs-input-container-cell" } ), _tr );
        const _div       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-input-container container-with-broom" } ), _td );
        const _on_change = "MANAGER.EventManagerV2.onChangeInput(event,'" + this.property_name + "', '" + this.parent_uuid + "')";
        
        this.dom_element_input   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class      : "gs-input",
            type       : "text",
            value      : this.current_value,
            oncut      : _on_change,
            onpaste    : _on_change,
            onkeyup    : _on_change,
            onclick    : "MANAGER.EventManagerV2.onClickInput(event,'" + this.property_name + "')",
            placeholder: this.placeholder
        } ), _div );
        let _class_shinken_broom = "gs-icon-delete-input shinkon shinkon-broom";
        if ( !this.current_value ) {
            _class_shinken_broom += " gs-hidden";
        }
        this.dom_element_input_broom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : _class_shinken_broom,
            onclick: "MANAGER.EventManagerV2.clickButton(event,'clean_input_value','" + this.property_name + "','" + this.parent_uuid + "')"
        } ), _div );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InputFromDataV2, COMPONENT.InterfaceInput );
GS.TOOLS.CLASS.addPrototype( COMPONENT.InputFromDataV2, GS.OBJECT.GsObjectHtml );
COMPONENT.InputFromData_V3           = function ( name, value, params ) {
    this.__class_name__ = 'COMPONENT.InputFromData_V3';
    this.initSpecific( name, value, params );
};
COMPONENT.InputFromData_V3.prototype = {
    initSpecific                 : function ( name, value, params ) {
        this.setTimeoutAfterChange( 200 );
        this.name = name;
        this.init( value );
        this.broom_button = new COMPONENT.ButtonFromData_V3( "clean_input_value", "<span class='gs-icon-delete-input shinkon shinkon-broom'></span>" );
        this.addParamForEvents( COMPONENT.INPUT.PARAM.NAME, this.getName() );
        this.addParamsForEvents( params );
        this.class = "gs-input-component-container flex-layout-center-h-v gs-input-has-broom";
        this.initCounterCommon();
    },
    doActionAfter                : function ( event_name, param ) {
        switch ( event_name ) {
            case "add_message_validation":
                this.setMessage( param[ PROPERTY.COMMON.PARAM.PROPERTY_MESSAGES ] );
                return;
            case "clean_validation_error":
                this.setMessage();
                break;
            case "clean_filter":
            case "click_on_button_V3":
                this.setValueFromJs( "" );
                break;
            case "set_placeholder_input_V3":
                this.setPlaceholder( param[ COMPONENT.CONST.PARAM.TEXT_PLACEHOLDER_INPUT ] );
                break;
            case "onchange_in_input_V3":
                this.askComputeAfterChange( null, param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ] );
                break;
        }
        return this.doActionAfterCommon( event_name, param );
    },
    addParamForEvents            : function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        this.broom_button.addParamForEvents( key, value );
    },
    doActionAfterLastModification: function ( event_name, param ) {
        this.setValueFromJs( param[ "value" ] );
        this.setMessage( param[ "message" ] );
    },
    getDataForLastModification   : function ( params ) {
        return {
            "value"  : this.getValue(),
            "message": this.message || ""
        };
    },
    computeHtml                  : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: this.getClass() } ) );
        const _on_change = "MANAGER.EventManagerV2.onChangeInput_V3(event," + this.parseParamForEventsToHtml() + ")";
        
        this.dom_element_input = this.addDomElement( SERVICE.DOM.createElement( "input", {
            class      : "gs-input-V3",
            type       : this.type || "text",
            value      : this.current_value,
            oncut      : _on_change,
            onpaste    : _on_change,
            onkeyup    : _on_change,
            onclick    : "MANAGER.EventManagerV2.onClickInput_V3(event," + this.parseParamForEventsToHtml() + ")",
            placeholder: this.placeholder || ""
        } ) );
        if ( !this.current_value ) {
            this.broom_button.addClass( "gs-hidden" );
        }
        this.broom_button.computeHtml();
        this.addDomElement( this.broom_button.getDomElement() );
        this.computeHtml_tooltip();
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InputFromData_V3, COMPONENT.InterfaceInput_V3 );
GS.TOOLS.CLASS.addPrototype( COMPONENT.InputFromData_V3, GS.OBJECT.GsObjectHtml );
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
COMPONENT.ListSelectElement                       = function ( dom_element ) {
    this.init( dom_element );
};
COMPONENT.ListSelectElement.prototype             = {
    init               : function ( dom_element ) {
        this.dom_element   = dom_element;
        this.is_filtered   = false;
        this.reason_to_set = [];
        this.element       = new OBJECT.ElementList();
        if ( dom_element ) {
            this.dom_title = dom_element.querySelector( '.' + 'gs-option-title' );
            this.initElement();
            this.is_selected = dom_element.classList.contains( 'gs-selected' );
        }
    },
    initElement        : function () {
        this.element.canHaveXssFailure = !!this.dom_element.dataset.canHaveXssFailure;
        this.element.setName( this.dom_element.dataset.keyName, this.dom_element );
        this.element.setLabel( this.dom_element.dataset.keyLabel );
        this.element.setState( this.dom_element.dataset.state );
        this.element.setIsDisabled( this.dom_element.dataset.isDisabled );
        this.element.setIsForceToNull( this.dom_element.dataset.forceToNull );
        this.element.setType( this.dom_element.dataset.type );
        this.element.setUUID( this.dom_element.dataset.uuid );
        this.element.setItemType( this.dom_element.dataset.itemType );
        this.element.setIsHiddenForAdminSi( this.dom_element.dataset.isHiddenForAdminSi );
        this.element.setIsLock( this.dom_element.classList.contains( "gs-option-locked" ) );
        this.element.setErrorMessage( this.dom_element.dataset.errorMessage );
    },
    getElement         : function () {
        return this.element;
    },
    getDomElement      : function () {
        return this.dom_element;
    },
    getName            : function () {
        return this.element.getName();
    },
    getLabel           : function () {
        return this.element.getLabel();
    },
    getState           : function () {
        return this.element.getState();
    },
    getTextContent     : function () {
        return this.dom_title.textContent;
    },
    getTextContentShort: function () {
        return this.dom_title.dataset.label;
    },
    setSelected        : function ( _to_set, extra_class, reason ) {
        if ( !reason ) {
            reason = "gs-main-selector";
        }
        if ( _to_set ) {
            GS.TOOLS.ARRAY.addElement( this.reason_to_set, reason );
            this.dom_element.classList.add( 'gs-selected' );
            if ( extra_class ) {
                SERVICE.DOM.addClasses( this.dom_element, extra_class );
            }
        }
        else {
            GS.TOOLS.ARRAY.removeElement( this.reason_to_set, reason );
            if ( this.reason_to_set.length ) {
                return;
            }
            this.dom_element.classList.remove( 'gs-selected' );
            this.dom_element.classList.remove( 'gs-select-focused' );
            this.dom_element.classList.remove( 'gs-select-no-events' );
            if ( extra_class ) {
                SERVICE.DOM.removeClasses( this.dom_element, extra_class );
            }
        }
        this.is_selected = _to_set;
    },
    isSelected         : function () {
        return this.is_selected;
    },
    setIsFiltered      : function ( to_set ) {
        this.is_filtered = to_set;
        if ( to_set ) {
            this.dom_element.classList.add( COMPONENT.CONST.LIST_SELECT_ELEMENT.CLASS.HIDDEN );
        }
        else {
            this.dom_element.classList.remove( COMPONENT.CONST.LIST_SELECT_ELEMENT.CLASS.HIDDEN );
        }
    },
    setFilteringOption : function ( to_set ) {
        this.filtering_option = to_set;
    },
    doFilter           : function ( filter ) {
        if ( MANAGER.__instance_element_distributor.current_user && !MANAGER.__instance_element_distributor.current_user.is_admin && this.element.is_hidden_for_admin_si ) {
            return false;
        }
        if ( this.element.state === COMPONENT.CONST.TAG.STATE.OVERRIDE_UNKNOWN ) {
            return false;
        }
        if ( !filter ) {
            this.setIsFiltered( false );
            return this.element.type === OBJECT.CONST.ELEMENT_LIST.TYPE.USER;
        }
        if ( this.filtering_option === OBJECT.CONST.ELEMENT_LIST.FILTER_OPTION.IGNORED ) {
            this.setIsFiltered( true );
            return false;
        }
        if ( this.element.type !== OBJECT.CONST.ELEMENT_LIST.TYPE.USER ) {
            this.setIsFiltered( true );
            return false;
        }
        if ( GS.TOOLS.STRING.containsIgnoreCase( this.element.getName(), filter ) ) {
            this.setIsFiltered( false );
            return true;
        }
        else {
            this.setIsFiltered( true );
            return false;
        }
    },
    updateHtmlLabel    : function ( label ) {
        this.element.setLabel( label );
        this.dom_element.innerHTML = this.getLabel();
    }
};
COMPONENT.InterfaceListSelectElement_V2           = function () {
    this.init();
};
COMPONENT.InterfaceListSelectElement_V2.prototype = {
    init               : function () {
        this.element = new OBJECT.ElementList();
    },
    getElement         : function () {
        return this.element;
    },
    getDomElement      : function () {
        return this.dom_element;
    },
    getName            : function () {
        return this.element.getName();
    },
    getUUID            : function () {
        return this.element.getUUID();
    },
    getLabel           : function () {
        return this.element.getLabel();
    },
    getState           : function () {
        return this.element.getState();
    },
    getTextContent     : function () {
        return this.dom_title.textContent;
    },
    getTextContentShort: function () {
        return this.dom_title.dataset.label;
    },
    setSelected        : function ( _to_set, extra_class, reason ) {
        if ( !reason ) {
            reason = "gs-main-selector";
        }
        if ( _to_set ) {
            GS.TOOLS.ARRAY.addElement( this.reason_to_set, reason );
            this.dom_element.classList.add( 'gs-selected' );
            if ( extra_class ) {
                SERVICE.DOM.addClasses( this.dom_element, extra_class );
            }
        }
        else {
            GS.TOOLS.ARRAY.removeElement( this.reason_to_set, reason );
            if ( this.reason_to_set.length ) {
                return;
            }
            this.dom_element.classList.remove( 'gs-selected' );
            this.dom_element.classList.remove( 'gs-select-focused' );
            this.dom_element.classList.remove( 'gs-select-no-events' );
            if ( extra_class ) {
                SERVICE.DOM.removeClasses( this.dom_element, extra_class );
            }
        }
        this.is_selected = _to_set;
    },
    isSelected         : function () {
        return this.is_selected;
    },
    setIsFiltered      : function ( to_set ) {
        this.is_filtered = to_set;
        if ( to_set ) {
            this.dom_element.classList.add( COMPONENT.CONST.LIST_SELECT_ELEMENT.CLASS.HIDDEN );
        }
        else {
            this.dom_element.classList.remove( COMPONENT.CONST.LIST_SELECT_ELEMENT.CLASS.HIDDEN );
        }
    },
    setFilteringOption : function ( to_set ) {
        this.filtering_option = to_set;
    },
    doFilter           : function ( filter ) {
        if ( !filter ) {
            this.setIsFiltered( false );
            return this.element.type === OBJECT.CONST.ELEMENT_LIST.TYPE.USER;
        }
        if ( this.filtering_option === OBJECT.CONST.ELEMENT_LIST.FILTER_OPTION.IGNORED ) {
            this.setIsFiltered( true );
            return false;
        }
        if ( this.element.type !== OBJECT.CONST.ELEMENT_LIST.TYPE.USER ) {
            this.setIsFiltered( true );
            return false;
        }
        if ( GS.TOOLS.STRING.containsIgnoreCase( this.element.getName(), filter ) ) {
            this.setIsFiltered( false );
            return true;
        }
        else {
            this.setIsFiltered( true );
            return false;
        }
    },
    updateHtmlLabel    : function ( label ) {
        this.element.setLabel( label );
        this.dom_element.innerHTML = this.getLabel();
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceListSelectElement_V2, GS.OBJECT.GsObjectHtml );
COMPONENT.ListSelectElementFromData_V2           = function ( key_name, label, property_name, selector_name ) {
    this.initSpecific( key_name, label, property_name, selector_name );
};
COMPONENT.ListSelectElementFromData_V2.prototype = {
    initSpecific: function ( key_name, label, property_name, selector_name ) {
        this.property_name = property_name;
        this.selector_name = selector_name;
        this.init();
        this.getElement().setName( key_name );
        this.getElement().setLabel( label || key_name );
    },
    computeHtml : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", {
            class           : COMPONENT.CONST.SELECT.SELECTOR_LIST_OPTION, "data-key-name": this.getName(),
            onmouseup       : "MANAGER.EventManagerV2.clickItemSelector(event,'" + this.property_name + "','" + this.selector_name + "', '" + this.getElement().getName() + "')",
            "data-key-label": this.getLabel()
        } ) );
        this.addDomElement( SERVICE.DOM.createElement( "span", { class: "gs-space" }, this.getLabel() ) );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.ListSelectElementFromData_V2, COMPONENT.InterfaceListSelectElement_V2 );
COMPONENT.ListSelectElementFromData_V3           = function ( key_name, label, param_events ) {
    this.initSpecific( key_name, label, param_events );
};
COMPONENT.ListSelectElementFromData_V3.prototype = {
    initSpecific: function ( key_name, label, param_events ) {
        this.class = COMPONENT.CONST.SELECT.SELECTOR_LIST_OPTION;
        this.init();
        this.addParamsForEvents( param_events );
        this.addParamForEvents( PROPERTY.SELECT.PARAM.OPTION_NAME, key_name );
        this.getElement().setName( key_name );
        this.getElement().setLabel( label || key_name );
    },
    computeHtml : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", {
            class           : this.class,
            "data-key-name" : this.getName(),
            onmouseup       : "MANAGER.EventManagerV2.clickItemSelector_V3(event," + this.parseParamForEventsToHtml() + ")",
            "data-key-label": this.getLabel()
        } ) );
        this.addDomElement( SERVICE.DOM.createElement( "span", { class: "gs-space" }, this.getLabel() ) );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.ListSelectElementFromData_V3, COMPONENT.ListSelectElementFromData_V2 );
COMPONENT.InterfaceListSelect           = function () {
    this.init();
};
COMPONENT.InterfaceListSelect.prototype = {
    init                                : function () {
    },
    toggleStateSelectedInList           : function ( key_name, class_to_add ) {
        var _list_select_element = this.list[ this._getIndexElementInMapping( key_name ) ];
        if ( !_list_select_element ) {
            var _to_return = new COMPONENT.ListSelectElement();
            _to_return.getElement().setName( key_name );
            return _to_return;
        }
        _list_select_element.setSelected( !_list_select_element.is_selected, class_to_add );
        return _list_select_element.getElement();
    },
    unselectAllElement                  : function ( extra_class ) {
        var _current;
        for ( var i = 0; i < this.size_list; i++ ) {
            _current = this.list[ i ];
            _current.setSelected( false, extra_class );
        }
    },
    doChangeFilterSelect                : function () {
    
    },
    addNewElementUnknown                : function ( key_name, prop_name ) {
        var _to_add    = SERVICE.DOM.createElement( 'div', {
                class               : COMPONENT.CONST.SELECT.SELECTOR_LIST_OPTION,
                "data-state"        : "unknown",
                "data-key-name"     : key_name,
                "data-key-label"    : key_name,
                "data-type"         : "user",
                "data-is-disabled"  : "false",
                "data-force-to-null": "false",
                "data-uuid"         : "",
                onmouseup           : "MANAGER.EventManager.clickOnItemSelector('event','" + prop_name + "', this)"
            },
            "<span class='gs-space'>" + key_name + " ( " + _( 'element.unknown' ) + " )" + "</span>"
        );
        var _to_return = new COMPONENT.ListSelectElement( _to_add );
        this.addNewElement( key_name, _to_return );
        return _to_return;
    },
    addNewElement                       : function ( key_name, list_select_element ) {
        this.list[ this.size_list ]   = list_select_element;
        this.list_mapping[ key_name ] = this.size_list;
        if ( typeof key_name === "string" ) {
            this.list_mapping_lower_case[ key_name.toLowerCase() ] = this.size_list;
        }
        this.size_list++;
    },
    _getIndexElementInMapping           : function ( key_name ) {
        if ( !key_name ) {
            return;
        }
        var _index = this.list_mapping[ key_name ];
        if ( _index === undefined ) {
            _index = this.list_mapping_lower_case[ key_name.toLowerCase() ];
        }
        return _index;
    },
    getElement                          : function ( key_name ) {
        var _index = this._getIndexElementInMapping( key_name );
        if ( _index === undefined ) {
            return null;
        }
        return this.list[ _index ].getElement();
    },
    getListSelectElement                : function ( key_name ) {
        var _index = this._getIndexElementInMapping( key_name );
        return this.list[ _index ];
    },
    getSelectedElements                 : function () {
        var _to_return = [];
        var _current_element;
        for ( var i = 0; i < this.size_list; i++ ) {
            _current_element = this.list[ i ];
            if ( _current_element.is_selected ) {
                _to_return.push( _current_element );
            }
        }
        return _to_return;
    },
    getFirstSelectedElement             : function ( exclude_hidden ) {
        var _current_element;
        for ( var i = 0; i < this.size_list; i++ ) {
            _current_element = this.list[ i ];
            if ( _current_element.is_selected ) {
                if ( exclude_hidden && _current_element.dom_element.classList.contains( "gs-hidden" ) ) {
                    continue;
                }
                return _current_element;
            }
        }
        return null;
    },
    setState                            : function ( state ) {
        this.state = state;
        this.setLastAutoSelectElement( false );
        return this.state;
    },
    focusOnResearchInput                : function () {
        if ( this.dom_element_input_research ) {
            this.dom_element_input_research.focus();
            if ( this.state === COMPONENT.CONST.BTN_STATE.ON ) {
                this.doFilter( this.current_filter );
            }
        }
    },
    setResearchDisplay                  : function ( value ) {
        if ( this.dom_element_display_research ) {
            this.dom_element_display_research.innerHTML = value;
        }
    },
    toggleState                         : function () {
        switch ( this.state ) {
            case COMPONENT.CONST.BTN_STATE.ON:
                this.setState( COMPONENT.CONST.BTN_STATE.OFF );
                break;
            case COMPONENT.CONST.BTN_STATE.OFF:
                this.setState( COMPONENT.CONST.BTN_STATE.ON );
                break;
            case COMPONENT.CONST.BTN_STATE.DISABLED:
                break;
            default:
                console.error( "Error::toggleState is outside its perimeter" );
        }
        return this.state;
    },
    doFilter                            : function ( filter ) {
        if ( this.current_filter && filter === this.current_filter ) {
            return;
        }
        this.current_filter           = filter;
        this.nbr_in_list_after_filter = 0;
        var _current;
        for ( var i = 0; i < this.size_list; i++ ) {
            _current = this.list[ i ];
            if ( _current.doFilter( filter ) ) {
                this.nbr_in_list_after_filter++;
            }
        }
        if ( filter ) {
            this.dom_element.classList.add( COMPONENT.CONST.LIST_SELECT.CLASS.FILTERING_ON );
        }
        else {
            this.dom_element.classList.remove( COMPONENT.CONST.LIST_SELECT.CLASS.FILTERING_ON );
        }
        if ( this.nbr_in_list_after_filter ) {
            this.dom_element.classList.remove( COMPONENT.CONST.LIST_SELECT.CLASS.NO_RESULT );
        }
        else {
            this.dom_element.classList.add( COMPONENT.CONST.LIST_SELECT.CLASS.NO_RESULT );
        }
        if ( this.dom_element_counter_research ) {
            this.dom_element_counter_research.innerHTML = this.nbr_in_list_after_filter;
        }
        this.setLastAutoSelectElement( false );
        
    },
    cleanFilter                         : function () {
        this.dom_element_input_research.value = "";
        this.doFilter( '' );
    },
    addNewElementList                   : function ( value ) {
        var _to_add = new COMPONENT.ListSelectElement( _list_element[ i ] );
    },
    hasAutoSelect                       : function () {
        return this.current_index_auto_select_element !== COMPONENT.CONST.NOT_FOUND;
    },
    setLastAutoSelectElement            : function ( to_set, action_type, avoid ) {
        if ( to_set ) {
            this.current_index_auto_select_element = this.current_index_auto_select_element || 0;
            DOM.ScrollService.bindWith( this.dom_element_select_content, this.list[ this.current_index_auto_select_element ].dom_element, this.previous_position_vertical, action_type );
            this.list[ this.current_index_auto_select_element ].dom_element.classList.add( 'gs-select-focused' );
        }
        else {
            if ( !avoid ) {
                this.previous_position_vertical = 0;
            }
            if ( this.current_index_auto_select_element !== COMPONENT.CONST.NOT_FOUND ) {
                if ( !avoid ) {
                    this.previous_position_vertical = SERVICE.DOM.getBoundingClientRect( this.list[ this.current_index_auto_select_element ].dom_element, DOM.CONST.SPECIAL.MEDIAN_TOP_BOTTOM );
                }
                this.list[ this.current_index_auto_select_element ].dom_element.classList.remove( 'gs-select-focused' );
            }
            this.current_index_auto_select_element = COMPONENT.CONST.NOT_FOUND;
        }
    },
    selectSelectedOrFirstFilteredElement: function () {
        if ( this.current_index_auto_select_element === COMPONENT.CONST.NOT_FOUND ) {
            this.updateLastAutoSelectIndex( GS.TOOLS.ARRAY.findFirstIndexWith( this.list, "is_filtered", false ), COMPONENT.CONST.AUTO_SELECT_ACTION_TYPE.KEY_INPUT );
        }
    },
    validAutoSelect                     : function () {
        if ( this.current_index_auto_select_element === COMPONENT.CONST.NOT_FOUND ) {
            return false;
        }
        SERVICE.DOM.SimulateAction.mouseUp( this.list[ this.current_index_auto_select_element ].dom_element );
        this.setLastAutoSelectElement( false );
        return true;
    },
    moveAutoSelectCursor                : function ( move_down ) {
        if ( this.state !== COMPONENT.CONST.BTN_STATE.ON ) {
            return;
        }
        if ( !this.size_list ) {
            return;
        }
        var action_type = move_down ? COMPONENT.CONST.AUTO_SELECT_ACTION_TYPE.MOVE_DOWN : COMPONENT.CONST.AUTO_SELECT_ACTION_TYPE.MOVE_UP;
        var _dom_target = this.current_index_auto_select_element === COMPONENT.CONST.NOT_FOUND ? null : this.list[ this.current_index_auto_select_element ].dom_element;
        
        if ( !DOM.ScrollService.isVisible( this.dom_element_select_content, _dom_target, 0, action_type ) ) {
            var _dom_element;
            if ( this.current_index_auto_select_element === COMPONENT.CONST.NOT_FOUND ) {
                _dom_element = DOM.ScrollService.getFirstVisibleDom( this.dom_element_select_content, ".gs-option:not(.gs-hidden):not(.gs-selected)", move_down );
            }
            else {
                _dom_element = DOM.ScrollService.getCloserVisibleDomFromMiddle( this.dom_element_select_content, ".gs-option:not(.gs-hidden):not(.gs-selected)", move_down );
            }
            if ( _dom_element ) {
                this.previous_position_vertical = SERVICE.DOM.getBoundingClientRect( this.dom_element_select_content, DOM.CONST.SPECIAL.MEDIAN_TOP_BOTTOM );
                this.updateLastAutoSelectIndex( this._getIndexElementInMapping( _dom_element.dataset.keyName ), action_type, true );
            }
            return;
        }
        var _current_counter = this.current_index_auto_select_element;
        var _current;
        var _found           = false;
        
        while ( move_down ? _current_counter < this.size_list : _current_counter >= COMPONENT.CONST.NOT_FOUND ) {
            move_down ? _current_counter++ : _current_counter--;
            _current = this.list[ _current_counter ];
            if ( !_current ) {
                this.updateLastAutoSelectIndex( this.current_index_auto_select_element, action_type );
                continue;
            }
            var _display = SERVICE.DOM.getComputedStyle( _current.dom_element, DOM.CONST.STYLE.DISPLAY );
            if ( _display === DOM.CONST.VALUE.NONE ) {
                continue;
            }
            if ( _current.isSelected() && !this.allow_multiple_select ) {
                continue;
            }
            _found = true;
            break;
        }
        if ( _found ) {
            this.updateLastAutoSelectIndex( _current_counter, action_type );
        }
    },
    updateLastAutoSelectIndex           : function ( index, action_type, avoid ) {
        var _type = "";
        switch ( action_type ) {
            case COMPONENT.CONST.AUTO_SELECT_ACTION_TYPE.MOUSE:
                if ( this.prevent_mouse_enter ) {
                    return;
                }
                break;
            case COMPONENT.CONST.AUTO_SELECT_ACTION_TYPE.MOVE_DOWN:
                _type                    = DOM.CONST.ATTRIBUTE.SCROLL_DOWN;
                this.prevent_mouse_enter = true;
                break;
            case COMPONENT.CONST.AUTO_SELECT_ACTION_TYPE.MOVE_UP:
                this.prevent_mouse_enter = true;
                _type                    = DOM.CONST.ATTRIBUTE.SCROLL_TOP;
                break;
        }
        if ( this.prevent_mouse_enter ) {
            var _self = this;
            if ( this.timeout_mouse_down ) {
                clearTimeout( this.timeout_mouse_down );
            }
            this.timeout_mouse_down = setTimeout( function () {
                _self.prevent_mouse_enter = false;
                _self.timeout_mouse_down  = null;
            }, 200 );
        }
        this.setLastAutoSelectElement( false, _type, avoid );
        this.current_index_auto_select_element = index;
        this.setLastAutoSelectElement( true, _type );
    }
};
COMPONENT.ListSelect                    = function ( dom_element, parent_name, allow_multiple_select ) {
    this.init( dom_element, parent_name, allow_multiple_select );
};
COMPONENT.ListSelect.prototype          = {
    init           : function ( dom_element, parent_name, allow_multiple_select ) {
        allow_multiple_select = !!allow_multiple_select;
        this.dom_element      = dom_element;
        if ( !this.dom_element ) {
            return;
        }
        this.dom_element_counter_research      = dom_element.querySelector( '.gs-counter-current' );
        this.dom_element_counter_total         = dom_element.querySelector( '.gs-counter-total' );
        this.dom_element_input_research        = dom_element.querySelector( '.gs-input-search' );
        this.dom_element_display_research      = dom_element.querySelector( '.gs-display-search .gs-value' );
        this.dom_element_select_content        = dom_element.querySelector( '.list-select-content' );
        this.current_index_auto_select_element = COMPONENT.CONST.NOT_FOUND;
        this.state                             = COMPONENT.CONST.BTN_STATE.OFF;
        this.parent_name                       = parent_name;
        this.allow_multiple_select             = allow_multiple_select;
        this.initListElement();
    },
    initListElement: function () {
        this.list                     = [];
        this.list_mapping             = {};
        this.list_mapping_lower_case  = {};
        this.nbr_in_list_after_filter = 0;
        var _list_element             = this.dom_element.querySelectorAll( '.' + COMPONENT.CONST.SELECT.SELECTOR_LIST_OPTION );
        this.size_list                = _list_element.length;
        for ( var i = 0; i < this.size_list; i++ ) {
            this.list[ i ]                                                         = new COMPONENT.ListSelectElement( _list_element[ i ] );
            this.list_mapping[ this.list[ i ].getName() ]                          = i;
            this.list_mapping_lower_case[ this.list[ i ].getName().toLowerCase() ] = i;
        }
    },
    addNewElement  : function ( key_name, list_select_element ) {
        this.list[ this.size_list ]                            = list_select_element;
        this.list_mapping[ key_name ]                          = this.size_list;
        this.list_mapping_lower_case[ key_name.toLowerCase() ] = this.size_list;
        this.dom_element_counter_total.innerHTML               = parseInt( this.dom_element_counter_total.innerHTML ) + 1;
        this.size_list++;
        this.dom_element_select_content.appendChild( list_select_element.dom_element );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.ListSelect, COMPONENT.InterfaceListSelect );
COMPONENT.ListSelectFromData           = function () {
    this.init();
};
COMPONENT.ListSelectFromData.prototype = {
    init           : function () {
        this.initListElement();
        this.state                             = COMPONENT.CONST.BTN_STATE.OFF;
        this.current_index_auto_select_element = COMPONENT.CONST.NOT_FOUND;
    },
    initListElement: function () {
        this.list                     = [];
        this.list_mapping             = {};
        this.list_mapping_lower_case  = {};
        this.nbr_in_list_after_filter = 0;
        this.size_list                = 0;
    },
    addFromString  : function ( key_name, label, filtering_option ) {
        var _dom_element = SERVICE.DOM.createElement( 'div', {
                class               : COMPONENT.CONST.SELECT.SELECTOR_LIST_OPTION,
                "data-key-name"     : key_name,
                "data-key-label"    : label,
                "data-type"         : "user",
                "data-is-disabled"  : "false",
                "data-force-to-null": "false",
                "data-uuid"         : "",
                onmouseup           : "MANAGER.EventManager.clickOnItemSelector(event, this)"
            },
            "<span class='gs-space'>" + label + "</span>"
        );
        var _to_return   = new COMPONENT.ListSelectElement( _dom_element );
        _to_return.setFilteringOption( filtering_option );
        this.addNewElement( key_name, _to_return );
    },
    computeHtml    : function () {
        this.dom_element                = SERVICE.DOM.createElement( "div", { class: "gs-list-select" } );
        this.dom_element_select_content = SERVICE.DOM.createElement( "div", { class: "list-select-content gs-user-select-none" } );
        SERVICE.DOM.addElementTo( this.dom_element_select_content, this.dom_element );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.ListSelectFromData, COMPONENT.InterfaceListSelect );
COMPONENT.InterfaceListSelect_V2           = function () {
};
COMPONENT.InterfaceListSelect_V2.prototype = {
    init       : function () {
    },
    setState   : function ( state ) {
        this.state = state;
        return this.state;
    },
    getState   : function () {
        return this.state;
    },
    toggleState: function () {
        switch ( this.state ) {
            case COMPONENT.CONST.BTN_STATE.ON:
                this.setState( COMPONENT.CONST.BTN_STATE.OFF );
                break;
            case COMPONENT.CONST.BTN_STATE.OFF:
                this.setState( COMPONENT.CONST.BTN_STATE.ON );
                break;
            case COMPONENT.CONST.BTN_STATE.DISABLED:
                break;
            default:
                console.error( "Error::toggleState is outside its perimeter" );
        }
        return this.state;
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceListSelect_V2, GS.OBJECT.GsObjectContainerHtml );
COMPONENT.ListSelectFromData_V2           = function ( property_name, selector_name ) {
    this.init( property_name, selector_name );
};
COMPONENT.ListSelectFromData_V2.prototype = {
    init         : function ( property_name, selector_name ) {
        this.property_name = property_name;
        this.selector_name = selector_name;
        this.initContents();
        this.state = COMPONENT.CONST.BTN_STATE.OFF;
    },
    addFromString: function ( key_name, label ) {
        var _to_return = new COMPONENT.ListSelectElementFromData_V2( key_name, label, this.property_name, this.selector_name );
        this.add( _to_return );
    },
    reset        : function () {
        this.resetHtml();
        this.initContents();
    },
    resetHtml    : function () {
        SERVICE.DOM.removeElement( this.getDomElement() );
    },
    computeHtml  : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-list-select" } ) );
        this.dom_element_select_content = SERVICE.DOM.createElement( "div", { class: "list-select-content gs-user-select-none" } );
        this.addDomElement( this.dom_element_select_content );
        var _current;
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            _current = this.getContent( i );
            _current.computeHtml();
            SERVICE.DOM.addElementTo( _current.getDomElement(), this.dom_element_select_content );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.ListSelectFromData_V2, COMPONENT.InterfaceListSelect_V2 );
COMPONENT.ListSelectFromData_V3_deprecated           = function ( property_name, selector_name ) {
    this.init( property_name, selector_name );
};
COMPONENT.ListSelectFromData_V3_deprecated.prototype = {
    init         : COMPONENT.ListSelectFromData_V2.prototype.init,
    addFromString: function ( key_name, label ) {
        var _to_return = new COMPONENT.ListSelectElementFromData_V3( key_name, label, this.property_name, this.selector_name );
        this.add( _to_return );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.ListSelectFromData_V3_deprecated, COMPONENT.ListSelectFromData_V2 );
COMPONENT.ListSelectFromData_V3           = function ( property_name, selector_name ) {
    this.initSpecific( property_name, selector_name );
};
COMPONENT.ListSelectFromData_V3.prototype = {
    initSpecific : function ( property_name, selector_name ) {
        this.init( property_name, selector_name );
        this.addParamForEvents( PROPERTY.COMMON.PARAM.PROPERTY_NAME, property_name );
        this.addParamForEvents( PROPERTY.SELECT.PARAM.SELECTOR_NAME, selector_name );
    },
    addFromString: function ( key_name, label ) {
        var _to_return = new COMPONENT.ListSelectElementFromData_V3( key_name, label, this.getParamForEvents() );
        this.add( _to_return );
    },
    computeHtml  : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-list-select gs-list-select-V3" } ) );
        this.dom_element_select_content = SERVICE.DOM.createElement( "div", { class: "list-select-content gs-user-select-none" } );
        this.addDomElement( this.dom_element_select_content );
        var _current;
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            _current = this.getContent( i );
            _current.computeHtml();
            SERVICE.DOM.addElementTo( _current.getDomElement(), this.dom_element_select_content );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.ListSelectFromData_V3, COMPONENT.ListSelectFromData_V2 );
COMPONENT.InterfaceSelect           = function () {
};
COMPONENT.InterfaceSelect.prototype = {
    init                          : function () {
    },
    hidePopup                     : function () {
        SERVICE.DOM.setDataSet( this.dom_element, COMPONENT.CONST.SELECT.DATA_STATE_SELECTOR, COMPONENT.CONST.BTN_STATE.OFF );
        this.list_element.setState( COMPONENT.CONST.BTN_STATE.OFF );
    },
    openSelector                  : function () {
        if ( this.list_element.state === COMPONENT.CONST.BTN_STATE.OFF ) {
            this.clickOnSelector();
        }
    },
    clickOnSelector               : function () {
        SERVICE.DOM.setDataSet( this.dom_element, COMPONENT.CONST.SELECT.DATA_STATE_SELECTOR, this.list_element.toggleState() );
        this.list_element.focusOnResearchInput();
    },
    clickOnItemSelector           : function ( parent_name, key_name, class_to_add ) {
        this.setLastSelectedElementName( key_name );
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.MULTI_SELECT:
            case COMPONENT.CONST.TYPE.MULTI_SELECT_BASIC:
                var _element = this.list_element.toggleStateSelectedInList( key_name, class_to_add );
                this.list_element.setState( COMPONENT.CONST.BTN_STATE.OFF );
                this.getActiveListForUser().addTag( parent_name, _element );
                break;
            case COMPONENT.CONST.TYPE.SINGLE_SELECT:
            case COMPONENT.CONST.TYPE.SINGLE_SELECT_WITH_INPUT:
                break;
            case COMPONENT.CONST.TYPE.STRING_INPUT_WITH_DROPDOWN:
                this.list_element.clickOnItemSelector( key_name );
                break;
        }
        if ( MANAGER.__instance_property_distributor ) {
            MANAGER.__instance_property_distributor.hidePopups();
        }
    },
    clickOnDeleteItemSelector     : function ( key_name ) {
        var _element = this.list_element.toggleStateSelectedInList( key_name );
        this.getActiveListForUser().deleteTag( _element );
    },
    askComputeAfterChange         : function ( dom_element ) {
        switch ( dom_element.name ) {
            case 'multi-search':
                this.component_input_search.askComputeAfterChange( dom_element, this );
                break;
        }
    },
    doActionAfterChange           : function ( args ) {
        if ( args[ 'validation_done' ] ) {
            this.doFilter( this.component_input_search.getValue() );
        }
    },
    simulateClickOnItem           : function ( key_name ) {
        SERVICE.DOM.SimulateAction.mouseUp( this.list_element.getListSelectElement( key_name ).dom_element );
    },
    dragStartShinken              : function ( type_element, key_name ) {
        switch ( type_element ) {
            case PROPERTY.CONST.DRAG_N_DROP.TYPE.SELECTED_ITEM:
                return this.getActiveListForUser().dragStartShinken( key_name );
        }
    },
    resetDragging                 : function () {
        this.list_element_selected.resetDragging();
    },
    setTitle                      : function ( _to_set ) {
        if ( !this.is_editable ) {
            return;
        }
        var _dom_text       = this.dom_select.querySelector( '.' + COMPONENT.CONST.SELECT.SELECTOR_TEXT );
        this.title          = _to_set;
        _dom_text.innerHTML = this.title;
    },
    setResearchDisplay            : function ( _to_set ) {
        this.list_element.setResearchDisplay( _to_set );
    },
    isSet                         : function () {
        return !this.getActiveListForUser().isEmpty();
    },
    cleanAllTags                  : function () {
        this.getActiveListForUser().emptyList();
    },
    getActiveListForUser          : function () {
        if ( this.is_override ) {
            return this.list_element_override;
        }
        else {
            return this.list_element_selected;
        }
    },
    cleanAllItemsSelected         : function ( extra_class ) {
        this.list_element.unselectAllElement( extra_class );
    },
    getValue                      : function () {
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.MULTI_SELECT:
            case COMPONENT.CONST.TYPE.MULTI_SELECT_BASIC:
                return this.getActiveListForUser().getValue();
            case COMPONENT.CONST.TYPE.SINGLE_SELECT:
            case COMPONENT.CONST.TYPE.SINGLE_SELECT_WITH_INPUT:
                return this.getLastSelectedElementName();
        }
    },
    getValueToSave                : function () {
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.MULTI_SELECT:
            case COMPONENT.CONST.TYPE.MULTI_SELECT_BASIC:
                return this.getTagsValueToSave();
            case COMPONENT.CONST.TYPE.SINGLE_SELECT:
            case COMPONENT.CONST.TYPE.SINGLE_SELECT_WITH_INPUT:
                if ( this.last_selected_key_name ) {
                    return this.getLastSelectedElement().getElement().getValueFinal();
                }
                return;
        }
    },
    getTagsValueToSave            : function () {
        var _to_return = [];
        var _tags      = this.getActiveListForUser().getTags();
        for ( var i = 0, size = _tags.length; i < size; i++ ) {
            _to_return.push( _tags[ i ].getValueFinal() );
        }
        return _to_return;
    },
    computeTitle                  : function ( add_extra, extra_label ) {
        if ( this.last_selected_key_name === undefined ) {
            var _selected = this.list_element.getSelectedElements();
            if ( _selected[ 0 ] !== undefined ) {
                this.setLastSelectedElementName( _selected[ 0 ].element.name );
            }
        }
        var _selected_element = this.getLastSelectedElement();
        var _title_to_set     = '';
        if ( _selected_element ) {
            _title_to_set = _selected_element.element.getLabel();
        }
        if ( extra_label ) {
            _title_to_set += extra_label;
        }
        this.setTitle( _title_to_set );
    },
    getLastSelectedElement        : function () {
        return this.list_element.getListSelectElement( this.last_selected_key_name );
    },
    getLastSelectedElementName    : function () {
        return this.last_selected_key_name || '';
    },
    setLastSelectedElementName    : function ( to_set ) {
        if ( this.last_selected_key_name ) {
            this.previous_selected_key_name = this.last_selected_key_name;
        }
        this.last_selected_key_name = to_set;
    },
    hasTag                        : function ( name ) {
        return !this.list_element_selected.hasTag( name ) || !this.list_elements_inherited.hasTag( name );
    },
    getMissingItemSelectorWith    : function ( property ) {
        return this.list_element_selected.getMissingItemSelectorWith( property );
    },
    getExtraItemSelectorWith      : function ( property ) {
        return this.list_element_selected.getExtraItemSelectorWith( property );
    },
    setMaximumSelected            : function ( to_set ) {
        this.maximum_selected = to_set;
    },
    getMaximumSelected            : function () {
        return this.maximum_selected;
    },
    isLimitReached                : function () {
        return (this.getActiveListForUser().getSizeTags() + this.list_elements_inherited.getSizeTags() - this.maximum_selected);
    },
    isLimitReachedForSelected     : function () {
        return (this.getActiveListForUser().getSizeTags() - this.maximum_selected);
    },
    disabledTagsOutOfLimit        : function ( limit ) {
        this.list_elements_inherited.disabledTagsOutOfLimit( limit );
    },
    getErrors                     : function ( state, prop_name ) {
        var _to_return = 0;
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.MULTI_SELECT:
                switch ( state ) {
                    case PROPERTY.CONST.STATE_PROPERTY.INHERITANCE_AND_USER:
                        _to_return = this.list_element_selected.getErrors( prop_name ) + this.list_elements_inherited.getErrors( prop_name );
                        break;
                    case PROPERTY.CONST.STATE_PROPERTY.USER_SET:
                        _to_return = this.list_element_selected.getErrors( prop_name );
                        break;
                    case PROPERTY.CONST.STATE_PROPERTY.INHERITANCE:
                        _to_return = this.list_elements_inherited.getErrors( prop_name );
                        break;
                    case PROPERTY.CONST.STATE_PROPERTY.OVERRIDE_AND_PLUS:
                    case PROPERTY.CONST.STATE_PROPERTY.OVERRIDE:
                        _to_return = this.list_element_override.getErrors( prop_name ) + this.list_elements_inherited.getErrors( prop_name );
                        break;
                    case PROPERTY.CONST.STATE_PROPERTY.USER_FORCED_DEFAULT:
                    case PROPERTY.CONST.STATE_PROPERTY.OVERRIDE_FORCED_DEFAULT:
                        break;
                }
                break;
        }
        _to_return += this.getCounterError().getValue();
        return _to_return;
    },
    getWarnings                   : function ( state, prop_name ) {
        var _to_return = 0;
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.MULTI_SELECT:
                switch ( state ) {
                    case PROPERTY.CONST.STATE_PROPERTY.INHERITANCE_AND_USER:
                        _to_return = this.list_element_selected.getWarnings( prop_name ) + this.list_elements_inherited.getWarnings( prop_name );
                        break;
                    case PROPERTY.CONST.STATE_PROPERTY.USER_SET:
                        _to_return = this.list_element_selected.getWarnings( prop_name );
                        break;
                    case PROPERTY.CONST.STATE_PROPERTY.INHERITANCE:
                        _to_return = this.list_elements_inherited.getWarnings( prop_name );
                        break;
                    case PROPERTY.CONST.STATE_PROPERTY.OVERRIDE_AND_PLUS:
                    case PROPERTY.CONST.STATE_PROPERTY.OVERRIDE:
                        _to_return = this.list_element_override.getWarnings( prop_name ) + this.list_elements_inherited.getWarnings( prop_name );
                        break;
                    case PROPERTY.CONST.STATE_PROPERTY.USER_FORCED_DEFAULT:
                    case PROPERTY.CONST.STATE_PROPERTY.OVERRIDE_FORCED_DEFAULT:
                        break;
                }
                break;
        }
        _to_return += this.getCounterWarning().getValue();
        return _to_return;
    },
    setMessage                    : function ( message ) {
        var _status = COMPONENT.CONST.STATUS.NONE;
        if ( typeof message === 'string' ) {
            _status = COMPONENT.CONST.STATUS.INFO;
        }
        else if ( message ) {
            _status = message.getStatus();
        }
        var _counter = [0, 0];
        this.setStatus( _status );
        switch ( _status ) {
            case COMPONENT.CONST.STATUS.INFO:
                this.addShinkenTooltip( "", message );
                break;
            case COMPONENT.CONST.STATUS.ERROR:
                this.addShinkenTooltip( SHINKEN_TOOLTIP.TYPE.ERROR_BORDER, message.buildMessage() );
                _counter[ 0 ] = 1;
                break;
            case COMPONENT.CONST.STATUS.BEWARE:
                this.addShinkenTooltip( SHINKEN_TOOLTIP.TYPE.BEWARE_BORDER, message.buildMessage() );
                break;
            case COMPONENT.CONST.STATUS.WARNING:
                this.addShinkenTooltip( SHINKEN_TOOLTIP.TYPE.WARNING_BORDER, message.buildMessage() );
                _counter[ 1 ] = 1;
                break;
            case COMPONENT.CONST.STATUS.NONE:
                this.addShinkenTooltip( "gs-success-border", "" );
                break;
        }
        this.setError( this.uuid, _counter[ 0 ] );
        this.setWarning( this.uuid, _counter[ 1 ] );
    },
    addShinkenTooltip             : function ( type, message ) {
        this.dom_element.setAttribute( 'shi-tip-type', type );
        this.dom_element.setAttribute( 'shi-tip-text', message );
        message ? SHINKEN_TOOLTIP.showTooltip( this.dom_element ) : SHINKEN_TOOLTIP.hideTooltip();
    },
    setStatus                     : function ( to_set ) {
        this.status = to_set;
        SERVICE.DOM.setDataSet( this.dom_element, 'status', to_set );
    },
    setDataSetLink                : function ( to_set ) {
        this.dataSetLink = to_set;
        if ( this.dataSetLink ) {
            this.computeTitle();
        }
    },
    getDataSetLink                : function () {
        return this.dataSetLink;
    },
    getListElement                : function () {
        return this.list_element;
    },
    doFilter                      : function ( filter ) {
        this.list_element.doFilter( filter );
    },
    doChangeFilterSelect          : function () {
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.MULTI_SELECT:
            case COMPONENT.CONST.TYPE.MULTI_SELECT_BASIC:
            case COMPONENT.CONST.TYPE.SINGLE_SELECT:
            case COMPONENT.CONST.TYPE.SINGLE_SELECT_WITH_INPUT:
                break;
            case COMPONENT.CONST.TYPE.STRING_INPUT_WITH_DROPDOWN:
                this.list_element.doChangeFilterSelect();
                break;
        }
    },
    cleanFilter                   : function () {
        this.list_element.cleanFilter();
    },
    validOrCreateTag              : function ( name_element, prop_name ) {
        var _existing = this.list_element.getListSelectElement( name_element );
        if ( _existing ) {
            return _existing;
        }
        return this.list_element.addNewElementUnknown( name_element, prop_name );
    },
    buildLinkOpenNewTab           : function ( link, id ) {
        var _span_link                         = '<span class="gs-link-icon-button"><span class="gs-link-icon shinicon shinicon-open"></span></span>';
        this.dom_link_icon_container.innerHTML = GS.TOOLS.buildLinkDomElementDependIfAdmin( link, id, _span_link, "gs-link" ).outerHTML;
    },
    pulsateTag                    : function ( name ) {
        var _existing = this.getActiveListForUser().getTagByName( name );
        if ( _existing ) {
            _existing.pulsateTag();
        }
        else if ( this.list_elements_inherited ) {
            _existing = this.list_elements_inherited.getTagByName( name );
            if ( _existing ) {
                _existing.pulsateTag();
            }
        }
    },
    hasAutoSelect                 : function () {
        return this.list_element.hasAutoSelect();
    },
    moveAutoSelectCursor          : function ( move_down ) {
        if ( this.component_input_search ) {
            this.component_input_search.need_validation = false;
        }
        this.list_element.moveAutoSelectCursor( move_down );
    },
    validAutoSelect               : function () {
        return this.list_element.validAutoSelect();
    },
    isAllElementsSelectedDisabled : function () {
        return this.getActiveListForUser().isAllElementsSelectedDisabled();
    },
    hasInvalidElementForProduction: function () {
        return this.getActiveListForUser().hasInvalidElementForProduction();
    },
    validSelectedOrFirstElement   : function () {
        this.list_element.selectSelectedOrFirstFilteredElement();
        this.validAutoSelect();
    },
    applySiblingSettings          : function ( select_comp ) {
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.SINGLE_SELECT:
            case COMPONENT.CONST.TYPE.SINGLE_SELECT_WITH_INPUT:
                var _value = select_comp.getValue();
                if ( _value ) {
                    this.simulateClickOnItem( _value );
                }
                else {
                    this.cleanAllItemsSelected();
                }
                break;
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceSelect, GS.OBJECT.CounterInterface );
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceSelect, GS.OBJECT.GsObjectHtml );
COMPONENT.Select           = function ( dom_element, type, is_override, parent, datasetLink, allow_multiple_select ) {
    this.__class_name__        = 'COMPONENT.Select';
    this.type                  = type;
    this.is_override           = is_override;
    this.allow_multiple_select = !!allow_multiple_select;
    this.is_editable           = true;
    this.init( dom_element, parent );
    this.setDataSetLink( datasetLink );
    this.__class = GS.TOOLS.CLASS.CONST.COMPONENT.SELECT;
};
COMPONENT.Select.prototype = {
    init                      : function ( dom_element, parent ) {
        this.uuid        = SERVICE.STRING.buildUUID();
        this.dom_element = dom_element;
        this.dom_select  = dom_element.querySelector( '.' + COMPONENT.CONST.SELECT.SELECTOR );
        if ( this.dom_select ) {
            this.dom_link_icon_container = this.dom_select.querySelector( '.gs-link-icon-container' );
            this.dom_link_icon_button    = this.dom_select.querySelector( '.gs-link-icon-button' );
        }
        else {
            this.is_editable = false;
        }
        var _dom_list_select = dom_element.querySelector( '.' + COMPONENT.CONST.SELECT.SELECTOR_LIST );
        this.list_element    = new COMPONENT.ListSelect( _dom_list_select, parent.getParentName(), this.allow_multiple_select );
        this.initSearchElement();
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.MULTI_SELECT:
                var _dom_list_selected       = dom_element.querySelector( '.gs-list-selected-in-select' );
                var _dom_list_inherited      = dom_element.querySelector( '.gs-list-inherited' );
                var _dom_list_override       = dom_element.querySelector( '.gs-list-override' );
                this.list_element_selected   = new COMPONENT.ListTag( _dom_list_selected, parent.name );
                this.list_elements_inherited = new COMPONENT.ListTag( _dom_list_inherited );
                this.list_element_override   = new COMPONENT.ListTag( _dom_list_override );
                break;
            case COMPONENT.CONST.TYPE.MULTI_SELECT_BASIC:
                var _dom_list_selected     = dom_element.querySelector( '.gs-list-selected-in-select' );
                this.list_element_selected = new COMPONENT.ListTag( _dom_list_selected, parent.name );
                break;
        }
        this.initCounters( parent );
    },
    initSearchElement         : function () {
        var _dom = this.dom_element.querySelector( ".gs-input-search" );
        if ( _dom ) {
            this.component_input_search = new COMPONENT.Input( _dom );
        }
    },
    updateWithTemplateSpecific: function ( tags ) {
        this.list_elements_inherited.addTags( tags );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.Select, COMPONENT.InterfaceSelect );
COMPONENT.SelectFromData           = function ( type ) {
    this.__class_name__           = 'COMPONENT.SelectFromData';
    this.type                     = type;
    this.is_editable              = true;
    this.default_label_for_select = '-- --';
    this.init();
};
COMPONENT.SelectFromData.prototype = {
    init                      : function () {
        this.uuid         = SERVICE.STRING.buildUUID();
        this.list_element = new COMPONENT.ListSelectFromData();
    },
    setDefaultLabelForSelector: function ( to_set ) {
        this.default_label_for_select = to_set;
    },
    setOptionsFromArray       : function ( to_set ) {
        for ( var i = 0, _size_i = to_set.length; i < _size_i; i++ ) {
            this.addOption( to_set[ i ] );
        }
    },
    addOption                 : function ( to_add ) {
        this.list_element.addFromString( to_add.name, to_add.label, to_add.filtering_option );
        if ( to_add.is_selected ) {
            this.setLastSelectedElementName( to_add.name );
        }
    },
    computeHtml               : function () {
        this.list_element.computeHtml();
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-select-container", "data-state-selector": 0 } ) );
        
        this.dom_select = SERVICE.DOM.createElement( "div",
            {
                class  : "gs-select-selector gs-user-select-none",
                onclick: "MANAGER.EventManager.clickOnSelector(event)"
            }, '<span class="gs-selector-label gs-space">' + this.default_label_for_select + '</span><span class="caret"></span>' );
        if ( this.getLastSelectedElement() ) {
            this.dom_select.innerHTML = '<span class="gs-selector-label gs-space">' + this.getLastSelectedElement().getLabel() + '</span><span class="caret"></span>';
        }
        
        for ( var i = 0, _size_i = this.list_element.size_list; i < _size_i; i++ ) {
            SERVICE.DOM.addElementTo( this.list_element.list[ i ].dom_element, this.list_element.dom_element_select_content );
        }
        SERVICE.DOM.addElementTo( this.dom_select, this.dom_element );
        SERVICE.DOM.addElementTo( this.list_element.dom_element, this.dom_element );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.SelectFromData, COMPONENT.InterfaceSelect );
COMPONENT.RenderInterface           = function () {
};
COMPONENT.RenderInterface.prototype = {
    init            : function () {
        this.initPhase( GS.OBJECT.CONST.PHASE.RUNNING, this.getDomElement() );
    },
    updateLabel     : function ( _to_set ) {
        if ( _to_set !== "___SHINKEN_DONT_CHANGE___" ) {
            this.component_label.updateLabel( _to_set );
        }
        this.computeClassHtml();
    },
    computeClassHtml: function () {
        SERVICE.DOM.addOrRemoveClasses( this.getDomElement(), !this.component_label.hasLabel(), "gs-empty" );
    }
    
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.RenderInterface, GS.OBJECT.CounterInterface );
GS.TOOLS.CLASS.addPrototype( COMPONENT.RenderInterface, GS.OBJECT.PhaseInterface );
GS.TOOLS.CLASS.addPrototype( COMPONENT.RenderInterface, GS.OBJECT.GsObjectHtml );
COMPONENT.RenderFromHtml           = function ( dom_element ) {
    this.initSpecific( dom_element );
};
COMPONENT.RenderFromHtml.prototype = {
    initSpecific: function ( dom_element ) {
        this.setDomElement( dom_element );
        this.init();
        this.component_label = new COMPONENT.Label( this.dom_element.querySelector( ".gs-render-value" ) );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.RenderFromHtml, COMPONENT.RenderInterface );
COMPONENT.RenderWithInheritanceFromHtml           = function ( dom_element ) {
    this.initSpecific( dom_element );
};
COMPONENT.RenderWithInheritanceFromHtml.prototype = {
    initSpecific: function ( dom_element ) {
        this.setDomElement( dom_element );
        this.init();
        try {
            this.component_label             = new COMPONENT.Label( this.dom_element.querySelector( ".gs-render-value" ) );
            this.component_label_inheritance = new COMPONENT.Label( this.dom_element.querySelector( ".gs-render-value-from-template" ) );
        }
        catch ( e ) {
            this.setPhase( GS.OBJECT.CONST.PHASE.HIDDEN );
        }
    },
    updateLabel : function ( to_set_value, _to_set_value_inheritance ) {
        if ( this.component_label && to_set_value !== "___SHINKEN_DONT_CHANGE___" ) {
            this.component_label.updateLabel( to_set_value );
        }
        if ( this.component_label_inheritance && _to_set_value_inheritance !== "___SHINKEN_DONT_CHANGE___" ) {
            this.component_label_inheritance.updateLabel( _to_set_value_inheritance );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.RenderWithInheritanceFromHtml, COMPONENT.RenderFromHtml );
COMPONENT.RenderFromData           = function ( value ) {
    this.initSpecific( value );
};
COMPONENT.RenderFromData.prototype = {
    initSpecific: function ( value ) {
        this.init();
        this.component_label = new COMPONENT.LabelFromData( value );
    },
    computeHtml : function () {
        this.component_label.computeHtml();
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-render-value-container" } ) );
        var _div_1 = this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-container-of-render-value" } ) );
        var _div_2 = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-render-value-content gs-render-value" } ), _div_1 );
        SERVICE.DOM.addElementTo( this.component_label.getDomElement(), _div_2 );
        this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-title-of-render-value-container" }, _( "components.thresholds_display.render_label" ) ) );
        this.updateLabel( this.component_label.getLabel() );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.RenderFromData, COMPONENT.RenderInterface );
COMPONENT.InterfaceSingleSelect           = function () {
};
COMPONENT.InterfaceSingleSelect.prototype = {
    init                      : function () {
        this.last_selected_key_name   = "";
        this.default_label_for_select = '--';
        this.uuid                     = SERVICE.STRING.buildUUID();
    },
    hidePopup                 : function () {
        SERVICE.DOM.setDataSet( this.getDomElement(), COMPONENT.CONST.SELECT.DATA_STATE_SELECTOR, COMPONENT.CONST.BTN_STATE.OFF );
        this.list_element.setState( COMPONENT.CONST.BTN_STATE.OFF );
    },
    clickOnSelector           : function () {
        SERVICE.DOM.setDataSet( this.getDomElement(), COMPONENT.CONST.SELECT.DATA_STATE_SELECTOR, this.list_element.toggleState() );
    },
    clickOnItemSelector       : function ( key_name, parent ) {
        this.resetStatus();
        this.setLastSelectedElementName( key_name );
        this.hidePopup();
        if ( parent ) {
            parent.doActionAfter( "click_on_item_selector_done", this );
        }
    },
    doActionAfter             : function ( event_name, param_1, param_2, param_3 ) {
        switch ( event_name ) {
            case "click_on_selector":
                this.clickOnSelector();
                break;
            case "click_on_item_selector":
                this.clickOnItemSelector( param_1, param_2 );
                break;
        }
    },
    getLastSelectedElement    : function () {
        return this.list_element.getContentByUUID( this.last_selected_key_name );
    },
    setTitle                  : function ( _to_set ) {
        if ( !this.is_editable ) {
            return;
        }
        this.title = _to_set;
        if ( !this.dom_select ) {
            return;
        }
        var _dom_text       = this.dom_select.querySelector( '.' + COMPONENT.CONST.SELECT.SELECTOR_TEXT );
        _dom_text.innerHTML = this.title;
    },
    getValue                  : function () {
        return this.getLastSelectedElementName();
    },
    getLabel                  : function () {
        return this.getLastSelectedElement().getLabel();
    },
    computeTitle              : function () {
        this.setTitle( this.last_selected_key_name !== "" ? this.getLabel() : this.default_label_for_select );
    },
    getLastSelectedElementName: function () {
        return this.last_selected_key_name;
    },
    setLastSelectedElementName: function ( to_set ) {
        this.previous_selected_key_name = this.last_selected_key_name;
        this.last_selected_key_name     = to_set;
        this.computeTitle();
    },
    setStatus                 : function ( to_set ) {
        this.status = to_set;
        SERVICE.DOM.setDataSet( this.getDomElement(), 'status', to_set );
    },
    resetStatus               : function () {
        this.setStatus( "" );
    },
    getListElement            : function () {
        return this.list_element;
    },
    setDefaultLabelForSelector: function ( to_set ) {
        this.default_label_for_select = to_set;
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceSingleSelect, GS.OBJECT.CounterInterface );
GS.TOOLS.CLASS.addPrototype( COMPONENT.InterfaceSingleSelect, GS.OBJECT.GsObjectHtml );
COMPONENT.SingleSelectFromData           = function ( property_name, selector_name ) {
    this.__class_name__ = 'COMPONENT.SingleSelectFromData';
    this.is_editable    = true;
    this.property_name  = property_name;
    this.selector_name  = selector_name || COMPONENT.CONST.SELECT.NAME_MAIN_SELECTOR;
    this.initSpecific();
};
COMPONENT.SingleSelectFromData.prototype = {
    initSpecific          : function () {
        this.init();
        this.list_element = new COMPONENT.ListSelectFromData_V2( this.property_name, this.selector_name );
        this._onclick     = "MANAGER.EventManagerV2.clickSelector(event,'" + this.property_name + "')";
    },
    setOptionsFromArray   : function ( to_set ) {
        if ( to_set ) {
            for ( var i = 0, _size_i = to_set.length; i < _size_i; i++ ) {
                this.addOption( to_set[ i ] );
            }
        }
    },
    addOption             : function ( to_add ) {
        this.list_element.addFromString( to_add.name, to_add.label );
        if ( to_add.is_selected ) {
            this.setLastSelectedElementName( to_add.name );
        }
    },
    setClickEventName     : function ( to_set ) {
        this.specific_event_name = to_set;
        this._onclick            = "MANAGER.EventManagerV2.clickSelector(event,'" + this.property_name + "','" + this.specific_event_name + "')";
    },
    setParentName         : function ( to_set ) {
        this.property_name = to_set;
        
    },
    changeOptionsFromArray: function ( new_options_data ) {
        this.resetOptions();
        this.setOptionsFromArray( new_options_data );
        this.list_element.computeHtml();
        this.addDomElement( this.list_element.getDomElement() );
    },
    resetOptions          : function () {
        this.list_element.reset();
    },
    computeHtml           : function () {
        this.list_element.computeHtml();
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-select-container", "data-state-selector": 0 } ) );
        
        this.dom_select = SERVICE.DOM.createElement( "div",
            {
                class  : "gs-select-selector gs-user-select-none",
                onclick: this._onclick
            }, '<span class="gs-selector-label gs-space">' + this.default_label_for_select + '</span><span class="shinkon header-chevron gs-2023-arrow-down"></span>' );
        this.computeTitle();
        this.addDomElement( this.dom_select );
        this.addDomElement( this.list_element.getDomElement() );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.SingleSelectFromData, COMPONENT.InterfaceSingleSelect );
COMPONENT.SingleSelectFromDataV2           = function ( property_name, selector_name ) {
    this.__class_name__ = 'COMPONENT.SingleSelectFromData';
    this.is_editable    = true;
    this.property_name  = property_name;
    this.selector_name  = selector_name || COMPONENT.CONST.SELECT.NAME_MAIN_SELECTOR;
    this.initSpecific();
};
COMPONENT.SingleSelectFromDataV2.prototype = {
    initSpecific     : function () {
        this.init();
        this.list_element = new COMPONENT.ListSelectFromData_V3_deprecated( this.property_name, this.selector_name );
        this._onclick     = "MANAGER.EventManagerV2.clickSelectorV2(event,'" + this.property_name + "')";
    },
    setClickEventName: function ( to_set ) {
        this.specific_event_name = to_set;
        this._onclick            = "MANAGER.EventManagerV2.clickSelectorV2(event,'" + this.property_name + "','" + this.specific_event_name + "')";
    },
    doActionAfter    : function ( event_name, param ) {
        switch ( event_name ) {
            case "click_on_selector":
                SERVICE.DOM.setDataSet( this.getDomElement(), COMPONENT.CONST.SELECT.DATA_STATE_SELECTOR, this.list_element.toggleState() );
                break;
            case "click_on_item_selector":
                this.resetStatus();
                this.setLastSelectedElementName( param[ PROPERTY.SELECT.PARAM.OPTION_NAME ] );
                this.hidePopup();
                param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ].doActionAfter( "click_on_item_selector_done", this );
                break;
            default:
                console.error( "[SingleSelectFromDataV2 - doActionAfter]", event_name );
                break;
        }
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.SingleSelectFromDataV2, COMPONENT.SingleSelectFromData );
COMPONENT.SingleSelectFromData_V3           = function ( property_name, selector_name ) {
    this.__class_name__ = 'COMPONENT.SingleSelectFromData';
    this.initSpecific( property_name, selector_name );
};
COMPONENT.SingleSelectFromData_V3.prototype = {
    initSpecific                 : function ( property_name, selector_name ) {
        this.init();
        this.is_editable   = true;
        this.property_name = property_name;
        this.selector_name = selector_name || COMPONENT.CONST.SELECT.NAME_MAIN_SELECTOR;
        this.list_element  = new COMPONENT.ListSelectFromData_V3( this.property_name, this.selector_name );
        this.addParamForEvents( PROPERTY.COMMON.PARAM.PROPERTY_NAME, property_name );
        this.addParamForEvents( PROPERTY.SELECT.PARAM.SELECTOR_NAME, this.selector_name );
        this.class = "gs-select-container";
    },
    doActionAfter                : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon          : function ( event_name, param ) {
        switch ( event_name ) {
            case "add_message_validation":
                this.setMessage__2024_12_16( param[ PROPERTY.COMMON.PARAM.PROPERTY_MESSAGES ] );
                return;
            case "set_default_value_in_selector":
                this.setLastSelectedElementName( param[ PROPERTY.COMMON.PARAM.DEFAULT_VALUE ] );
                break;
            case "property_value__set__by_js":
            case "property_value__set__by_data":
                this.setLastSelectedElementName( param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] );
                return;
            case "change_selector_default_title":
                this.setDefaultLabelForSelector( param[ COMPONENT.CONST.PARAM.TEXT_DEFAULT_SELECTOR ] );
                break;
            case "click_on_selector_V3":
                SHINKEN_TOOLTIP.hideTooltip();
                SERVICE.DOM.setDataSet( this.getDomElement(), COMPONENT.CONST.SELECT.DATA_STATE_SELECTOR, this.list_element.toggleState() );
                this.computeListPlacement( param );
                break;
            case "click_on_item_selector_V3":
                this.resetStatus();
                this.setLastSelectedElementName( param[ PROPERTY.SELECT.PARAM.OPTION_NAME ] );
                this.hidePopup();
                param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ].doActionAfter( "click_on_item_selector_done", this );
                break;
            case "ask_hide_pop_up":
            case "click_done":
                this.list_element.setState( COMPONENT.CONST.BTN_STATE.OFF );
                SERVICE.DOM.setDataSet( this.getDomElement(), COMPONENT.CONST.SELECT.DATA_STATE_SELECTOR, COMPONENT.CONST.BTN_STATE.OFF );
                break;
            default:
                break;
        }
    },
    addParamForEvents            : function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        if ( this.list_element ) {
            this.list_element.addParamForEvents( key, value );
        }
    },
    setMessage__2024_12_16       : function ( to_set ) {
        let _status              = COMPONENT.CONST.STATUS.NONE;
        this.message__2024_12_16 = to_set;
        if ( this.message__2024_12_16 ) {
            _status = this.message__2024_12_16.getStatus();
            this.setStatus( _status );
            switch ( _status ) {
                case COMPONENT.CONST.STATUS.ERROR:
                    this.setTooltipHtml( this.message__2024_12_16.buildMessageGeneric(), SHINKEN_TOOLTIP.TYPE.ERROR_BORDER );
                    break;
                case COMPONENT.CONST.STATUS.WARNING:
                    this.setTooltipHtml( this.message__2024_12_16.buildMessageGeneric(), SHINKEN_TOOLTIP.TYPE.WARNING_BORDER );
                    break;
                case COMPONENT.CONST.STATUS.NONE:
                    this.setTooltipHtml( this.message__2024_12_16 ? this.message__2024_12_16.buildMessageGeneric() : "", "" );
                    break;
            }
        }
    },
    getMessage__2024_12_16       : function () {
        return this.message__2024_12_16;
    },
    getDomElementForTooltip      : function () {
        return this.dom_select;
    },
    getLabel                     : function () {
        let to_return = this.getLastSelectedElement();
        if ( to_return ) {
            return to_return.getLabel();
        }
        return this.last_selected_key_name;
    },
    setLastSelectedElementName   : function ( to_set ) {
        let last_element = this.getLastSelectedElement();
        if ( last_element && last_element.getDomElement() ) {
            last_element.getDomElement().classList.remove( "gs-option-selected" );
        }
        this.previous_selected_key_name = this.last_selected_key_name;
        this.last_selected_key_name     = to_set;
        this.computeTitle();
        last_element = this.getLastSelectedElement();
        if ( last_element ) {
            last_element.addClass( "gs-option-selected" );
        }
    },
    doActionAfterLastModification: function ( event_name, param ) {
        this.doActionAfter( "property_value__set__by_js", param );
        this.setMessage__2024_12_16( param[ "message" ] );
    },
    getDataForLastModification   : function ( params ) {
        return {
            [ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ]: this.getLastSelectedElementName(),
            "message"                               : this.getMessage__2024_12_16()
        };
    },
    computeHtml                  : function () {
        this.list_element.computeHtml();
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: this.getClass(), "data-state-selector": 0 } ) );
        this.dom_select = SERVICE.DOM.createElement( "div", {
            class      : "gs-select-selector-V3 gs-select-selector gs-user-select-none flex-layout-center-h-v flex-layout-justify-between",
            "data-name": this.selector_name,
            onclick    : "MANAGER.EventManagerV2.clickSelector_V3(event," + this.parseParamForEventsToHtml() + ")"
        }, '<span class="gs-selector-label gs-space">' + this.default_label_for_select + '</span><span class="shinkon gs-header-chevron gs-2023-arrow-down"></span>' );
        this.computeTitle();
        this.addDomElement( this.dom_select );
        this.addDomElement( this.list_element.getDomElement() );
    },
    computeListPlacement         : function ( param ) {
        SERVICE.DOM.removeClasses( this.list_element.getDomElement(), "gs-display-on-top" );
        if ( this.list_element.getState() === COMPONENT.CONST.BTN_STATE.OFF ) {
            return;
        }
        SERVICE.DOM.addOrRemoveClasses( this.list_element.getDomElement(), SERVICE.DOM.isInScreenVertically( this.list_element.getDomElement() ),
            "gs-display-on-top" );
        
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.SingleSelectFromData_V3, COMPONENT.SingleSelectFromData );
COMPONENT.SingleSelectWithResearchFromData_V3           = function ( property_name, selector_name, extra_columns ) {
    this.__class_name__ = 'COMPONENT.SingleSelectFromData';
    this.initSpecific( property_name, selector_name, extra_columns );
};
COMPONENT.SingleSelectWithResearchFromData_V3.prototype = {
    initSpecific              : function ( property_name, selector_name, extra_columns ) {
        this.extra_columns = this.parseExtraColumn( extra_columns );
        this.init();
        this.is_editable   = true;
        this.property_name = property_name;
        this.selector_name = selector_name || COMPONENT.CONST.SELECT.NAME_MAIN_SELECTOR;
        this.addParamForEvents( PROPERTY.COMMON.PARAM.PROPERTY_NAME, property_name );
        this.addParamForEvents( PROPERTY.SELECT.PARAM.SELECTOR_NAME, this.selector_name );
        
        this.list_element = new SHINKEN_LIST.SetForPropertyResearch( "list_for_research" );
        this.list_element.addParamsForEvents( this.getParamForEvents() );
        this.list_element.setHeaders( new SHINKEN_LIST.HeadersFromData( GS.TOOLS.ARRAY.concat( [{ name: this.property_name }], this.extra_columns ) ) );
        this.list_element.setFilters( new SHINKEN_LIST.FiltersFromData_V3( this.list_element.headers.getContents(), this.list_element.getParamForEvents() ) );
    },
    doActionAfter             : function ( event_name, param ) {
        switch ( event_name ) {
            case "add_message_validation":
                this.setMessage__2024_12_16( param[ PROPERTY.COMMON.PARAM.PROPERTY_MESSAGES ] );
                return;
            case "reset_display":
                this.list_element.setPhase( GS.OBJECT.CONST.PHASE.HIDDEN );
                SERVICE.DOM.setDataSet( this.getDomElement(), COMPONENT.CONST.SELECT.DATA_STATE_SELECTOR, COMPONENT.CONST.BTN_STATE.OFF );
                return;
            case "property_value__set__by_js":
                this.setLastSelectedElementName( this.list_element.getLineByCellValue( this.property_name, param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] ) );
                return;
            case "property_value__set__by_data":
                this.setTitle( param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] );
                return;
            case "property_value__reset":
                this.setLastSelectedElementName( null );
                return;
            case "click_on_selector_V3":
                SHINKEN_TOOLTIP.hideTooltip();
                if ( param[ SHINKEN_LIST.CONST.PARAM.SET_UUID ] ) {
                    this.list_element.doActionAfter( event_name, param );
                    return;
                }
                this.list_element.togglePhase( GS.OBJECT.CONST.PHASE.HIDDEN, GS.OBJECT.CONST.PHASE.RUNNING );
                SERVICE.DOM.setDataSet( this.getDomElement(), COMPONENT.CONST.SELECT.DATA_STATE_SELECTOR, this.list_element.isPhase( GS.OBJECT.CONST.PHASE.RUNNING ) ? COMPONENT.CONST.BTN_STATE.ON : COMPONENT.CONST.BTN_STATE.OFF );
                return;
            case "click_on_item_selector_V3":
                if ( param[ SHINKEN_LIST.CONST.PARAM.SET_UUID ] ) {
                    this.list_element.doActionAfter( event_name, param );
                    return;
                }
                break;
            case "line_list_content__clicked":
                this.resetStatus();
                this.setLastSelectedElementName( this.list_element.getLineByUUID( param[ SHINKEN_LIST.CONST.PARAM.LINE_UUID ] ) );
                this.hidePopup();
                param[ PROPERTY.SELECT.PARAM.OPTION_OBJECT ] = this.selected_line__20241114;
                CONTROLLER.Form.doActionAfter( "click_on_item_selector_done", param );
                return;
            case "clean_filter":
            case "ask_apply_filter":
            case "click_on_button_V3":
            case "onclick_in_input_V3":
            case "onchange_in_input_V3":
            case "clean_selected_element":
                this.list_element.doActionAfter( event_name, param );
                return;
            case "click_done":
                this.list_element.setPhase( GS.OBJECT.CONST.PHASE.HIDDEN );
                SERVICE.DOM.setDataSet( this.getDomElement(), COMPONENT.CONST.SELECT.DATA_STATE_SELECTOR, COMPONENT.CONST.BTN_STATE.OFF );
                return;
            case "ask_hide_pop_up": //WARNING THE HIDE POP UP close the selection when changing pagination
                return;
        }
        this.doActionAfterCommon( event_name, param );
    },
    hidePopup                 : function () {
        this.list_element.setPhase( GS.OBJECT.CONST.PHASE.HIDDEN );
        SERVICE.DOM.setDataSet( this.getDomElement(), COMPONENT.CONST.SELECT.DATA_STATE_SELECTOR, COMPONENT.CONST.BTN_STATE.OFF );
    },
    getValue                  : function () {
        if ( this.selected_line__20241114 ) {
            return this.selected_line__20241114.getContentByUUID( this.property_name ).getValue();
        }
        if ( this.title && this.title !== this.default_label_for_select ) {
            return this.title;
        }
        return "";
    },
    setLastSelectedElementName: function ( to_set ) {
        if ( this.selected_line__20241114 ) {
            this.selected_line__20241114.setIsSelected__20241219( false );
        }
        this.selected_line__20241114 = to_set;
        this.computeTitle();
        if ( this.selected_line__20241114 ) {
            this.selected_line__20241114.setIsSelected__20241219( true );
        }
    },
    computeTitle              : function () {
        let to_set = this.selected_line__20241114 ? this.selected_line__20241114.getContentByUUID( this.property_name ).getValue() : this.default_label_for_select;
        this.setTitle( to_set );
    },
    parseExtraColumn          : function ( extra_columns ) {
        let to_return = [];
        for ( let i = 0, _size_i = extra_columns.length; i < _size_i; i++ ) {
            to_return.push( { "name": extra_columns[ i ] } );
        }
        return to_return;
    },
    computeHtml               : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-select-container", "data-state-selector": 0 } ) );
        this.dom_select = SERVICE.DOM.createElement( "div",
            {
                class      : "gs-select-selector-V3 gs-select-selector gs-user-select-none flex-layout-center-h-v flex-layout-justify-between",
                "data-name": this.selector_name,
                onclick    : "MANAGER.EventManagerV2.clickSelector_V3(event," + this.parseParamForEventsToHtml() + ")"
            }, '<span class="gs-selector-label gs-space">' + (this.title || this.default_label_for_select) + '</span><span class="shinkon gs-header-chevron gs-2023-arrow-down"></span>' );
        this.addDomElement( this.dom_select );
        this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-spinner" } ) );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.SingleSelectWithResearchFromData_V3, COMPONENT.SingleSelectFromData_V3 );
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
GS.OBJECT.EditableElementContainerInterface           = function () {
    throw new TypeError( "Interface EditableElementContainerInterface cant be constructed." );
};
GS.OBJECT.EditableElementContainerInterface.prototype = {
    getDataForLastModification: function () {
        var _to_return = { "contents": [], "mapping": GS.TOOLS.DICT.clone( this.mapping ) };
        for ( let i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            _to_return[ "contents" ].push( this.contents[ i ].getDataForLastModification() );
        }
        return _to_return;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.EditableElementContainerInterface, GS.OBJECT.EditableElementInterface );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.EditableElementContainerInterface, GS.OBJECT.GsObjectContainer );
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
GS.OBJECT.LastModifications           = function () {
    this.init();
};
GS.OBJECT.LastModifications.prototype = {
    init          : function () {
        this.initContents();
        this.current_step = -1;
    },
    doActionAfter : function ( event_name, param ) {
        switch ( event_name ) {
            case "add_last_modification":
                return this.addSpecific( param[ GS.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ] );
            case "reset_all__20240909":
                this.init();
                break;
            case "on_key_up":
                let current_key_code = param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].keyCode;
                switch ( current_key_code ) {
                    case GS.CONST.KEY_CODE.Z:
                        if ( this.getCurrentStep() >= 0 ) {
                            this.gotoStep( this.getCurrentStep() - 1, param[ GS.OBJECT.CONST.LAST_MODIFICATION.PARAM.PARENT_OBJECT ] );
                        }
                        break;
                    case GS.CONST.KEY_CODE.Y:
                        if ( this.getCurrentStep() + 1 < this.getSize() ) {
                            this.gotoStep( this.getCurrentStep() + 1, param[ GS.OBJECT.CONST.LAST_MODIFICATION.PARAM.PARENT_OBJECT ] );
                        }
                        break;
                }
                break;
        }
    },
    getCurrentStep: function () {
        return this.current_step;
    },
    addSpecific   : function ( last_modification ) {
        if ( !last_modification || !last_modification.isValid() ) {
            return false;
        }
        last_modification.setIndex( ++this.current_step );
        last_modification.uuid = SERVICE.STRING.buildUUID();
        this.add( last_modification );
        if ( this.current_step < this.getSize() ) { //REMOVE EXISTING MODIFICATIONS OVER THE STEP
            this.removeAllContentFromIndex( this.current_step + 1 );
        }
        return true;
    },
    gotoStep      : function ( target_step, object_parent ) {
        let action_event = target_step < this.current_step ? "undo_last_modification" : "redo_last_modification";
        while ( this.getCurrentStep() !== target_step ) {
            if ( action_event === "undo_last_modification" ) {
                object_parent.doActionAfter( action_event, { [ GS.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ]: this.getContent( this.current_step-- ) } );
            }
            else {
                object_parent.doActionAfter( action_event, { [ GS.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ]: this.getContent( ++this.current_step ) } );
            }
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.LastModifications, GS.OBJECT.GsObjectContainerHtml );
GS.OBJECT.LastModificationsInterface           = function () {
};
GS.OBJECT.LastModificationsInterface.prototype = {
    initLastModifications: function () {
        this.last_modifications = new GS.OBJECT.LastModifications();
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.LastModificationsInterface, GS.OBJECT.GsObject );
SHINKEN_LIST.FilterFromData           = function ( type, name ) {
    this.type = type;
    this.name = name;
    this.init();
};
SHINKEN_LIST.FilterFromData.prototype = {
    init               : function ( params ) {
        this.addParamForEvents( SHINKEN_LIST.CONST.PARAM.FILTER_UUID, this.name );
        this.addParamsForEvents( params );
        this.initComponents();
    },
    initComponents     : function () {
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.SINGLE_SELECT:
                this.component = new COMPONENT.SelectFromData( this.type );
                break;
            case COMPONENT.CONST.TYPE.STRING_INPUT:
                this.component = new COMPONENT.InputFromData();
                this.component.setPlaceholder( this.getPlaceholderLabel() );
                this.component.skipValidation( true );
                break;
        }
    },
    getPlaceholderLabel: function () {
        switch ( this.name ) {
            case "item.visualisation_name":
                return _( "filter.message_placeholder_visualisation_name", [DICTIONARY_COMMON_UI] );
            case "item.item_type":
                return _( "filter.message_placeholder_item_type", [DICTIONARY_COMMON_UI] );
            default:
                return _( "filter.message_placeholder", [DICTIONARY_COMMON_UI] );
        }
    },
    computeHtml        : function () {
        this.dom_element = SERVICE.DOM.createElement( "td", { class: "gs-list-filter", "data-name": this.name, "data-object-type": "gs-list-filter", "data-type": this.type } );
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.HIDDEN:
                this.dom_element.classList.add( "gs-text-centred" );
                this.addDomElement( SERVICE.DOM.createElement( "span", {}, "--" ) );
                break;
            default:
                this.getComponent().computeHtml();
                this.addDomElement( this.getComponent().dom_element );
                break;
        }
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.FilterFromData, SHINKEN_LIST.Filter );
SHINKEN_LIST.FilterFromData_V3           = function ( type, name, params ) {
    this.type = type;
    this.name = name;
    this.init( params );
};
SHINKEN_LIST.FilterFromData_V3.prototype = {
    init          : SHINKEN_LIST.FilterFromData.prototype.init,
    initComponents: function () {
        switch ( this.type ) {
            case COMPONENT.CONST.TYPE.SINGLE_SELECT:
                this.component = new COMPONENT.SelectFromData( this.type );
                break;
            case COMPONENT.CONST.TYPE.STRING_INPUT:
                this.component = new COMPONENT.InputFromData_V3( "filter_input", "", this.getParamForEvents() );
                this.component.setPlaceholder( this.getPlaceholderLabel() );
                this.component.skipValidation( true );
                break;
        }
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.FilterFromData_V3, SHINKEN_LIST.FilterFromData );
SHINKEN_LIST.FiltersFromData           = function ( headers_array ) {
    this.init( headers_array );
};
SHINKEN_LIST.FiltersFromData.prototype = {
    init               : function ( headers_array ) {
        this.initContents();
        for ( var i = 0, _size_i = headers_array.length; i < _size_i; i++ ) {
            this.add( this.getChildConstructor( COMPONENT.CONST.TYPE.STRING_INPUT, headers_array[ i ].name ) );
        }
    },
    getChildConstructor: function ( type, name ) {
        return new SHINKEN_LIST.FilterFromData( type, name );
    },
    
    
    computeHtml: function () {
        this.dom_element = SERVICE.DOM.createElement( "tr", { class: "gs-filter-line" } );
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].computeHtml();
            SERVICE.DOM.addElementTo( this.contents[ i ].getDomElement(), this.dom_element );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.FiltersFromData, SHINKEN_LIST.Filters );
SHINKEN_LIST.FiltersFromData_V3           = function ( headers_array, params ) {
    this.initSpecific( headers_array, params );
};
SHINKEN_LIST.FiltersFromData_V3.prototype = {
    initSpecific       : function ( headers_array, params ) {
        this.addParamForEvents( SHINKEN_LIST.CONST.PARAM.FILTERS_UUID, "main_filters_list" );
        this.addParamsForEvents( params );
        this.init( headers_array );
    },
    getChildConstructor: function ( type, name ) {
        return new SHINKEN_LIST.FilterFromData_V3( type, name, this.getParamForEvents() );
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.FiltersFromData_V3, SHINKEN_LIST.FiltersFromData );
SHINKEN_LIST.HeaderFromData           = function ( name, label ) {
    this.init( name, label );
};
SHINKEN_LIST.HeaderFromData.prototype = {
    init       : function ( name, label ) {
        this.name  = name;
        this.label = label || name;
        this.initCommon();
    },
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "td", { class: "gs-list-header", "data-name": this.name, "data-object-type": this.getObjectType() } ) );
        this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-list-cell-content" }, this.label ) );
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.HeaderFromData, SHINKEN_LIST.Header );
SHINKEN_LIST.HeaderFromDataWithSort           = function ( name, label ) {
    this.initSpecific( name, label );
};
SHINKEN_LIST.HeaderFromDataWithSort.prototype = {
    initSpecific   : function ( name, label ) {
        this.init( name, label );
        this.initSorting();
        this.initSortingAvailability();
    },
    doActionAfter  : function ( event_name, param_1, param_2, param_3 ) {
        switch ( event_name ) {
            case "click_on_button":
                switch ( param_1 ) {
                    case "click-on-header-popup":
                    case "click-on-option-header-popup":
                    case "click-on-header":
                        this.sorting_object.doActionAfter( param_1, param_2, param_3 );
                        break;
                }
                break;
        }
        this.doActionAfterCommon( event_name, param_1, param_2, param_3 );
    },
    addHtmlCounters: function ( dom_element_parent ) {
    },
    computeHtml    : function () {
        this.setDomElement( SERVICE.DOM.createElement( "td", { class: "gs-list-header", "data-name": this.name, "data-display-sort-popup": true, "data-object-type": this.getObjectType() } ) );
        this.cell_content            = SERVICE.DOM.createElement( "div", { class: "gs-list-cell-content", onclick: "MANAGER.EventManagerV2.clickButton(event, 'click-on-header', '" + this.name + "',event)" } );
        var _table                   = SERVICE.DOM.createElement( "table", { class: "gs-width-100 gs-list-header-table" } );
        var _line                    = SERVICE.DOM.createElement( "tr", {} );
        var _label_cell              = SERVICE.DOM.createElement( "td", { class: "gs-list-header-name-cell" }, "<div class='gs-list-header-name'>" + this.label + "</div>" );
        this.dom_sort_priority_cell  = SERVICE.DOM.createElement( "td", { class: "gs-list-header-sort-priority-cell" } );
        this.dom_actions_button_cell = SERVICE.DOM.createElement( "td", { class: "gs-list-header-sort-button-cell" } );
        
        SERVICE.DOM.addElementTo( _label_cell, _line );
        
        this.addHtmlCounters( _line );
        SERVICE.DOM.addElementTo( this.dom_sort_priority_cell, _line );
        SERVICE.DOM.addElementTo( this.dom_actions_button_cell, _line );
        SERVICE.DOM.addElementTo( _line, _table );
        SERVICE.DOM.addElementTo( _table, this.cell_content );
        SERVICE.DOM.addElementTo( this.cell_content, this.dom_element );
        
        if ( this.sorting_object.getStatus() !== GS.OBJECT.SORTING.STATUS.UNAVAILABLE ) {
            this.computeHtmlSorting();
            SERVICE.DOM.addElementTo( this.sorting_object.sort_priority_dom_element, this.dom_sort_priority_cell );
            SERVICE.DOM.addElementTo( this.sorting_object.sort_popup_button, this.dom_actions_button_cell );
            SERVICE.DOM.addElementTo( this.sorting_object.popup_sort_container, this.cell_content );
            this.setDomParentForSorting( this.dom_element );
        }
    },
    hidePopup      : function () {
        this.hidePopupSorting();
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.HeaderFromDataWithSort, SHINKEN_LIST.HeaderFromData );
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.HeaderFromDataWithSort, GS.OBJECT.SortingInterface );
SHINKEN_LIST.HeadersFromData           = function ( headers_array ) {
    this.init( headers_array );
    
};
SHINKEN_LIST.HeadersFromData.prototype = {
    init               : function ( headers_array ) {
        this.initContents();
        for ( var i = 0, _size_i = headers_array.length; i < _size_i; i++ ) {
            this.add( this.getChildConstructor( headers_array[ i ].name, headers_array[ i ].label ) );
        }
    },
    getChildConstructor: function ( name, label ) {
        return new SHINKEN_LIST.HeaderFromData( name, label );
    },
    computeHtml        : function () {
        this.dom_element = SERVICE.DOM.createElement( "tr", { class: "gs-header-line" } );
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].computeHtml();
            SERVICE.DOM.addElementTo( this.contents[ i ].getDomElement(), this.dom_element );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.HeadersFromData, SHINKEN_LIST.Headers );
SHINKEN_LIST.HeadersWithSortFromData           = function () {
    this.current_index_sorting = 0;
};
SHINKEN_LIST.HeadersWithSortFromData.prototype = {
    init                       : function () {
    },
    doActionAfter              : function ( event_name, param_1, param_2, param_3 ) {
        switch ( param_1 ) {
            case "click-on-option-header-popup":
                this.clickOnOptionHeaderSorting( event_name, param_1, param_2, param_3 );
                break;
            case "click-on-header":
                this.doActionAfterHeaderSorting( event_name, param_1, param_2, param_3 );
                break;
            case "click-on-header-popup":
                this.getContentByUUID( param_2 ).doActionAfter( event_name, param_1, param_2, param_3 );
                break;
        }
        this.doActionAfterCommon( event_name, param_1, param_2, param_3 );
    },
    _computeCurrentIndexSorting: function ( is_cumulative ) {
        this.current_index_sorting = (this.current_index_sorting && is_cumulative) ? this.current_index_sorting + 1 : 1;
    },
    cleanSorting               : function () {
        let _active_headers = this.getActiveSortingHeaders();
        for ( let i = 0, size_i = _active_headers.length; i < size_i; i++ ) {
            _active_headers[ i ].setSortingStatus( GS.OBJECT.SORTING.STATUS.NONE );
        }
    },
    doActionAfterHeaderSorting : function ( event_name, param_1, param_2, event ) {
        let _header = this.getContentByUUID( param_2 );
        if ( !event.shiftKey && (_header.getSortingStatus() === GS.OBJECT.SORTING.STATUS.NONE || this.current_index_sorting > 1) ) {
            this.cleanSorting();
        }
        if ( _header.getSortingIndex() ) {
            _header.doActionAfter( event_name, param_1, _header.getSortingIndex(), event );
        }
        else {
            this._computeCurrentIndexSorting( event.shiftKey );
            _header.doActionAfter( event_name, param_1, this.current_index_sorting, event );
        }
        this._computeAllIndexes();
    },
    _computeAllIndexes         : function () {
        let _active_headers = GS.TOOLS.ARRAY.cleanEmpty( this.getActiveSortingHeaders() );
        for ( var i = 0, size_i = _active_headers.length; i < size_i; i++ ) {
            _active_headers[ i ].setSortingIndex( i + 1 );
        }
        if ( !size_i ) {
            this.current_index_sorting = 0;
        }
    },
    clickOnOptionHeaderSorting : function ( event_name, param_1, param_2, event ) {
        let _option_dom = SERVICE.DOM.findParentElementWithClass( event.target, "gs-list-header-sort-popup-option" );
        let _header     = this.getContentByUUID( param_2 );
        let _to_set     = {};
        if ( _option_dom.dataset.status === GS.OBJECT.SORTING.STATUS.NONE ) {
            let _index    = _header.getSortingIndex();
            _to_set.index = 0;
        }
        else {
            if ( !_header.getSortingIndex() ) {
                this._computeCurrentIndexSorting( true );
                _to_set.index = this.current_index_sorting;
            }
            else {
                _to_set.index = _header.getSortingIndex();
            }
        }
        _to_set.status = _option_dom.dataset.status;
        _header.doActionAfter( event_name, param_1, _to_set, event );
        this._computeAllIndexes();
    }
    
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.HeadersWithSortFromData, SHINKEN_LIST.HeadersFromData );
SHINKEN_LIST.LineCellFromData           = function ( name, value ) {
    this.name  = name;
    this.value = value;
    this.init();
};
SHINKEN_LIST.LineCellFromData.prototype = {
    init                        : SHINKEN_LIST.LineCell.prototype.init,
    computeFilterValue          : function () {
        this.data_filter_html = "";
    },
    computeContentHtml__20241107: function () {
        this.computeLabel();
        this.computeFilterValue();
        this.dom_element_content = SERVICE.DOM.createElement( "div", {
            class        : "gs-list-cell-content",
            "data-filter": this.name
        }, this.label );
    },
    computeHtml                 : function () {
        this.addClass( "gs-list-cell" );
        this.computeContentHtml__20241107();
        this.setDomElement( SERVICE.DOM.createElement( "td", { class: this.getClass(), "data-name": this.name } ) );
        this.addDomElement( this.dom_element_content );
        this.doActionAfter( "compute_html_done" );
    }
    
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.LineCellFromData, SHINKEN_LIST.LineCell );
SHINKEN_LIST.LineFromData           = function ( data, headers ) {
    this.init( data, headers );
};
SHINKEN_LIST.LineFromData.prototype = {
    init                : function ( data, headers ) {
        this.unused_data = {};
        this.initCommon();
        this.initCellsValue( data, headers );
        this.initLineCountersValue();
    },
    initCellsValue      : function ( data, headers ) {
        var _current_name;
        for ( var i = 0, _size_i = headers.contents.length; i < _size_i; i++ ) {
            _current_name = headers.contents[ i ].name;
            this.addSpecific( this.getChildConstructor( _current_name, data[ _current_name ], data ) );
        }
        var _keys = Object.keys( data );
        var _current_key;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            if ( this.getMappingIndex( _current_key ) === undefined ) {
                this.unused_data[ _current_key ] = data[ _current_key ];
            }
        }
        this.doActionAfter( "init_cells_value_done" );
    },
    getChildConstructor : function ( name, value ) {
        return new SHINKEN_LIST.LineCellFromData( name, value );
    },
    getData__20241114   : function ( key ) {
        let to_return = this.getContentByUUID( key );
        if ( to_return ) {
            return to_return.getValue();
        }
        return this.unused_data[ key ];
    },
    getInitialDataToSave: function () {
        return this.unused_data;
    },
    getAttributeHtml    : function () {
        return {
            class    : "gs-list-line",
            "onclick": "MANAGER.EventManagerV2.doActionAfter(event,'line_list_content__clicked'," + this.parseParamForEventsToHtml() + ")"
        };
    },
    computeHtml         : function () {
        this.setDomElement( SERVICE.DOM.createElement( "tr", this.getAttributeHtml() ) );
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).computeHtml();
            this.addDomElement( this.getContent( i ).getDomElement() );
        }
        this.doActionAfter( "compute_html_done" );
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.LineFromData, SHINKEN_LIST.Line );
SHINKEN_LIST.LineForPropertyResearch           = function ( data, headers ) {
    this.init( data, headers );
};
SHINKEN_LIST.LineForPropertyResearch.prototype = {
    init                   : SHINKEN_LIST.LineFromData.prototype.init,
    initCounterCommon      : function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.FILTERING );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL );
    },
    initCounter            : GS.OBJECT.CounterInterfaceV2_patient.prototype.initCounter,
    doActionAfter          : function ( event_name, param ) {
        switch ( event_name ) {
            case "clean_selected_element" :
                if ( this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED ) ) {
                    this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED, this.getUUID(), 0 );
                }
                return;
        }
        this.doActionAfterCommon( event_name, param );
    },
    setIsSelected__20241219: function ( to_set ) {
        if ( to_set ) {
            if ( !this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED ) ) {
                this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED );
                if ( this.getDomElement() ) {
                    this.addCounterTargetDomElement( GS.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED, this.getDomElement() );
                }
            }
        }
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED, this.getUUID(), to_set ? 1 : 0 );
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.LineForPropertyResearch, SHINKEN_LIST.LineFromData );
SHINKEN_LIST.LinesFromData           = function () {
    this.init();
};
SHINKEN_LIST.LinesFromData.prototype = {
    init                  : function () {
        this.initCommon();
        this.initTextNoElement();
    },
    initTextNoElement     : function () {
        try {
            this.addTextForNoElement( _( "shinken_list.no_elements.text_no_elements", [DICTIONARY_COMMON_UI] ),
                _( "shinken_list.no_elements.text_no_elements_after_filter", [DICTIONARY_COMMON_UI] ) );
        }
        catch ( e ) {
        
        }
    },
    computeContentWithData: function ( data, headers_object ) {
        var to_add;
        for ( var i = 0, _size = data.length; i < _size; i++ ) {
            to_add = this.getChildConstructor( data[ i ], headers_object );
            this.addSpecific( to_add );
            to_add.setIndexOriginal( i );
        }
        this.doActionAfter( "compute_content_with_data_done" );
    },
    getChildConstructor   : function ( data, headers ) {
        return new SHINKEN_LIST.LineFromData( data, headers );
    },
    addLineWithData       : function ( data, headers, index ) {
        var _to_add = this.getChildConstructor( data, headers );
        if ( index !== undefined ) {
            this.insertAtIndex( _to_add, index );
        }
        else {
            this.add( _to_add );
        }
    },
    
    
    
    computeHtml          : function () {
        this.setDomElement( SERVICE.DOM.createElement( "tbody", { class: "gs-list-tbody" } ) );
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).computeHtml();
            this.addDomElement( this.getContent( i ).getDomElement() );
            this.addDomElement( this.getContent( i ).getDomElementBind() );
        }
        this.computeTextNoElements();
        if ( this.isPhase( GS.OBJECT.CONST.PHASE.REFRESHING ) && this.dom_element_loading ) {
            this.addDomElement( this.dom_element_loading );
        }
        this.addCountersTargetDomElement( this.getDomElement() );
    },
    computeTextNoElements: function () {
        if ( this.text_no_element ) {
            this.dom_element_text_no_elements = SERVICE.DOM.createElement( "tbody", { class: "gs-text-no-element-container" } );
            const _tr                         = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "tr", { class: "gs-list-text-line" } ), this.dom_element_text_no_elements );
            const _td                         = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", { class: "gs-list-text-cell", colspan: 99 } ), _tr );
            const _list_text_container        = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-list-text-container flex-layout-center-h-v" } ), _td );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "gs-no-element" }, this.text_no_element ), _list_text_container );
            if ( this.text_no_element_after_filter ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "gs-no-element-after-filter" }, this.text_no_element_after_filter ), _list_text_container );
            }
            this.setPhaseDomElement( this.dom_element_text_no_elements );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.LinesFromData, SHINKEN_LIST.Lines );
SHINKEN_LIST.SetFromData           = function ( name ) {
    this.init( name );
};
SHINKEN_LIST.SetFromData.prototype = {
    init               : SHINKEN_LIST.Set.prototype.init,
    initLinesObjects   : function () {
        return new SHINKEN_LIST.LinesFromData();
    },
    computeLines       : function ( data ) {
        var lines = this.initLinesObjects();
        lines.computeContentWithData( data, this.headers );
        this.setLines( lines );
    },
    addLineWithData    : function ( data, index ) {
        this.lines.addLineWithData( data, this.headers, index );
    },
    computeHtml        : function () {
        this.computeCommonHtml();
        this.computeSpecificHtml();
    },
    computeCommonHtml  : function () {
        this.computeLinesHtml();
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-list-container" } ) );
        var _table = SERVICE.DOM.createElement( "table", { class: "gs-width-100 gs-list-table gs-table" } );
        var _thead = SERVICE.DOM.createElement( "thead" );
        
        this.headers.computeHtml();
        SERVICE.DOM.addElementTo( this.headers.getDomElement(), _thead );
        
        if ( this.filters ) {
            this.filters.computeHtml();
            SERVICE.DOM.addElementTo( this.filters.getDomElement(), _thead );
        }
        
        SERVICE.DOM.addElementTo( _thead, _table );
        if ( this.lines ) {
            SERVICE.DOM.addElementTo( this.lines.getDomElement(), _table );
        }
        this.addDomElement( _table );
        this.computeHtmlExtra();
        this.doActionAfter( "compute_html_done" );
    },
    computeLinesHtml   : function () {
        if ( this.lines ) {
            this.lines.computeHtml();
        }
    },
    computeSpecificHtml: function () {
    
    },
    computeHtmlExtra   : function () {
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.SetFromData, SHINKEN_LIST.Set );
SHINKEN_LIST.SetFromDataWithFixHeaderFilter           = function ( name ) {
    this.init( name );
};
SHINKEN_LIST.SetFromDataWithFixHeaderFilter.prototype = {
    init       : SHINKEN_LIST.SetFromData.prototype.init,
    computeHtml: function () {
        this.headers.computeHtml();
        this.computeLinesHtml();
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-list-container gs-list-with-fix-header" } ) );
        if ( this.filters ) {
            this.filters.computeHtml();
            this.getDomElement().classList.add( "gs-list-has-filters" );
        }
        var _container_header_filter   = SERVICE.DOM.createElement( "div", {
            class: "gs-list-container-fix-header-filter"
        } );
        var _table_header_filter       = SERVICE.DOM.createElement( "table", { class: "gs-width-100 gs-list-table gs-table" } );
        var _thead_table_header_filter = SERVICE.DOM.createElement( "thead" );
        
        SERVICE.DOM.addElementTo( this.headers.getDomElement(), _thead_table_header_filter );
        if ( this.filters ) {
            SERVICE.DOM.addElementTo( this.filters.getDomElement(), _thead_table_header_filter );
        }
        SERVICE.DOM.addElementTo( _thead_table_header_filter, _table_header_filter );
        SERVICE.DOM.addElementTo( _table_header_filter, _container_header_filter );
        this.addDomElement( _container_header_filter );
        
        var _container_header_list = SERVICE.DOM.createElement( "div", { class: "gs-list-container-with-scroll" } );
        var _table_list            = SERVICE.DOM.createElement( "table", { class: "gs-width-100 gs-list-table" } );
        SERVICE.DOM.addElementTo( this.lines.dom_element_text_no_elements, _table_list );
        SERVICE.DOM.addElementTo( this.lines.getDomElement(), _table_list );
        
        
        SERVICE.DOM.addElementTo( _table_list, _container_header_list );
        this.addDomElement( _container_header_list );
        
        this.computeSpecificHtml();
        this.doActionAfter( "compute_html_done" );
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.SetFromDataWithFixHeaderFilter, SHINKEN_LIST.SetFromData );
SHINKEN_LIST.LinesFromDataWithPagination           = function ( type ) {
    this.type = type;
    this.init();
};
SHINKEN_LIST.LinesFromDataWithPagination.prototype = {
    init: SHINKEN_LIST.LinesFromData.prototype.init,
    
    
    
    
    
    computeHtml: function ( pagination ) {
        if ( this.getDomElement() ) {
            SERVICE.DOM.empty( this.getDomElement() );
        }
        else {
            this.setDomElement( SERVICE.DOM.createElement( "tbody", { class: "gs-list-tbody" } ) );
        }
        var _first_element_to_display = pagination.getDisplayStartingIndex();
        var _size_end_display         = Math.min( pagination.getDisplayEndingIndex(), this.getSize() );
        
        var _current;
        var _running_index = 0;
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            _current = this.getContent( i );
            if ( _current.is_filtered ) {
                continue;
            }
            if ( _running_index >= _first_element_to_display && _running_index < _size_end_display ) {
                _current.computeHtml();
                this.addDomElement( _current.getDomElement() );
            }
            _running_index++;
        }
        this.computeTextNoElements();
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.LinesFromDataWithPagination, SHINKEN_LIST.LinesFromData );
SHINKEN_LIST.LinesForPropertyResearch           = function ( type ) {
    this.type = type;
    this.init();
};
SHINKEN_LIST.LinesForPropertyResearch.prototype = {
    init               : SHINKEN_LIST.LinesFromDataWithPagination.prototype.init,
    getChildConstructor: function ( data, headers ) {
        return new SHINKEN_LIST.LineForPropertyResearch( data, headers );
    },
    initCounterCommon  : function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.FILTERING );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL );
    },
    doActionAfter      : function ( event_name, param, param_2, param_3 ) {
        switch ( event_name ) {
            case "update_counter__with_children":
            case "apply_filter_done":
                let value_to_set = {};
                let current_line;
                var _keys;
                var _current_key;
                for ( let i = 0; i < this.getSize(); i++ ) {
                    current_line = this.getContent( i );
                    _keys        = Object.keys( current_line.counters );
                    for ( let j = 0, _size = _keys.length; j < _size; j++ ) {
                        value_to_set[ _keys[ j ] ] = value_to_set[ _keys[ j ] ] || 0;
                        value_to_set[ _keys[ j ] ] += current_line.counters[ _keys[ j ] ].getValue();
                    }
                }
                _keys = Object.keys( value_to_set );
                for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
                    _current_key = _keys[ i ];
                    this.setCounterValue( _current_key, this.uuid, value_to_set[ _current_key ] );
                }
                break;
            case "clean_selected_element":
                for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
                    this.contents[ i ].doActionAfter( event_name, param );
                }
                break;
        }
        this.doActionAfterCommon( event_name, param, param_2, param_3 );
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.LinesForPropertyResearch, SHINKEN_LIST.LinesFromDataWithPagination );
SHINKEN_LIST.SetFromDataWithPagination           = function ( name, pagination_size ) {
    this.initSpecific( name, pagination_size );
};
SHINKEN_LIST.SetFromDataWithPagination.prototype = {
    initSpecific             : function ( name, pagination_size ) {
        this.init( name );
        this.setPagination( new SHINKEN_LIST.Pagination_V3( pagination_size, this.getName() ) );
    },
    initLinesObjects         : function () {
        return new SHINKEN_LIST.LinesFromDataWithPagination();
    },
    doActionAfter            : function ( event_name, param, param_2, param_3 ) {
        switch ( event_name ) {
            case "click_on_selector_V3":
            case "click_on_item_selector_V3":
                param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ] = this;
                this.pagination.doActionAfter( event_name, param, param_2, param_3 );
                break;
            case "click_on_button_V3":
            case "click_on_item_selector_done":
                this.pagination.doActionAfter( event_name, param, param_2, param_3 );
                this.computeLinesHtml();
                break;
        }
        this.doActionAfterCommon( event_name, param, param_2, param_3 );
        this.doActionAfterSpecific( event_name, param, param_2, param_3 );
    },
    applyFilter              : function ( params_filter_by_line ) {
        this.applyFilterCommon( params_filter_by_line );
        this.pagination.setTotalElement( this.lines.getSizeNotFiltered() );
        this.computeLinesHtml();
        this.setSelectAllStatus();
    },
    onClick                  : function ( event ) {
        this.pagination.onClick( event );
        this._onClick( event );
    },
    setPagination            : function ( to_set ) {
        this.pagination = to_set;
        this.pagination.addParamsForEvents( this.getParamForEvents() );
    },
    getPagination            : function () {
        return this.pagination;
    },
    setPageSize              : function ( to_set ) {
        this.pagination.setPageSize( to_set );
    },
    addParamForEvents        : function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        if ( this.pagination ) {
            this.pagination.addParamForEvents( key, value );
        }
    },
    computeSpecificHtml      : function () {
        this.pagination.setTotalElement( this.lines.getSize() );
        this.pagination.computeHtml();
        this.addDomElement( this.pagination.getDomElement() );
        this.computeSpecificHtml_lvl_1();
        this.getDomElement().classList.add( "gs-list-has-pagination" );
    },
    computeSpecificHtml_lvl_1: function () {
    },
    computeLinesHtml         : function () {
        if ( this.lines ) {
            this.lines.computeHtml( this.pagination );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.SetFromDataWithPagination, SHINKEN_LIST.SetFromDataWithFixHeaderFilter );
SHINKEN_LIST.SetForPropertyResearch           = function ( name, pagination_size ) {
    this.initSpecific( name, pagination_size );
};
SHINKEN_LIST.SetForPropertyResearch.prototype = {
    initSpecific    : SHINKEN_LIST.SetFromDataWithPagination.prototype.initSpecific,
    initLinesObjects: function () {
        return new SHINKEN_LIST.LinesForPropertyResearch();
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.SetForPropertyResearch, SHINKEN_LIST.SetFromDataWithPagination );
SHINKEN_LIST.FilterFromHtml           = function ( dom_element, type ) {
    this.setType( type );
    this.init( dom_element );
};
SHINKEN_LIST.FilterFromHtml.prototype = {
    init: function ( dom_element ) {
        this.dom_element = dom_element;
        this.name        = this.dom_element.dataset.name;
        this._is_active  = false;
        if ( this.dom_element.dataset.type ) {
            this.setType( this.dom_element.dataset.type );
        }
        this.initComponents();
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.FilterFromHtml, SHINKEN_LIST.Filter );
SHINKEN_LIST.FiltersFromHtml           = function ( dom_element, type ) {
    this.type = type;
    this.init( dom_element );
};
SHINKEN_LIST.FiltersFromHtml.prototype = {
    init               : function ( dom_element ) {
        this.initContents();
        this.initContentsWithDom( SERVICE.DOM.querySelectorAllWithOutChild( dom_element, "gs-list-filter", "gs-list-table" ) );
    },
    initContentsWithDom: function ( dom_elements ) {
        var _current;
        for ( var i = 0, _size_i = dom_elements.length; i < _size_i; i++ ) {
            _current = new SHINKEN_LIST.FilterFromHtml( dom_elements[ i ], this.type );
            if ( _current.isValid() ) {
                this.add( _current );
            }
        }
    }
    
    
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.FiltersFromHtml, SHINKEN_LIST.Filters );
SHINKEN_LIST.HeaderFromHtml           = function ( dom_element, type ) {
    this.type        = type;
    this.dom_element = dom_element;
    this.init();
};
SHINKEN_LIST.HeaderFromHtml.prototype = {
    init: function () {
        this.name  = this.dom_element.dataset.headerName || this.dom_element.dataset.name;
        this.label = this.dom_element.innerText;
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.HeaderFromHtml, SHINKEN_LIST.Header );
SHINKEN_LIST.HeadersFromHtml           = function ( dom_element, type ) {
    this.dom_element = dom_element;
    this.type        = type;
    this.init();
};
SHINKEN_LIST.HeadersFromHtml.prototype = {
    init       : function () {
        this.initContents();
        this.initHeaders();
    },
    initHeaders: function () {
        var dom_elements = SERVICE.DOM.querySelectorAllWithOutChild( this.dom_element, "gs-list-header", "gs-list-table" );
        for ( var i = 0, _size_i = dom_elements.length; i < _size_i; i++ ) {
            this.add( new SHINKEN_LIST.HeaderFromHtml( dom_elements[ i ], this.type ) );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.HeadersFromHtml, SHINKEN_LIST.Headers );
SHINKEN_LIST.LineCellFromHtml           = function ( dom_element, type ) {
    this.init( dom_element );
    this.type = type;
};
SHINKEN_LIST.LineCellFromHtml.prototype = {
    init       : function ( dom_element ) {
        this.dom_element = dom_element;
        this.initWithDom();
    },
    initWithDom: function () {
        this.name = this.dom_element.dataset.filter;
        if ( this.dom_element.dataset.filterValueArray ) {
            this.value = this.dom_element.dataset.filterValueArray.split( "," );
        }
        else if ( this.dom_element.dataset.filterValue ) {
            this.value = this.dom_element.dataset.filterValue;
        }
        else {
            this.value = SERVICE.DOM.getInnerText( this.dom_element );
        }
        switch ( this.type ) {
            case SHINKEN_LIST.CONST.TYPE.DATA_PROP:
                this[ 'data_name_array' ] = this.uuid;
                break;
        }
    },
    getUUID    : function () {
        return this.name;
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.LineCellFromHtml, SHINKEN_LIST.LineCell );
SHINKEN_LIST.LineFromHtml           = function ( dom_element, type ) {
    this.type = type;
    this.init( dom_element );
};
SHINKEN_LIST.LineFromHtml.prototype = {
    init          : function ( dom_element ) {
        this.initCommon();
        this.dom_element = dom_element;
        this.is_collapse = false;
        this.uuid        = this.dom_element.dataset.uuid || SERVICE.STRING.buildUUID();
        switch ( this.type ) {
            case SHINKEN_LIST.CONST.TYPE.CHECK_IN_HOST:
                this.host    = MANAGER.__instance_element_distributor.getElement( OBJECT.ShinkenElement.generateSEUUID( this.dom_element.dataset.typeItem, this.dom_element.dataset.uuidItem ) );
                this.parent  = MANAGER.__instance_element_distributor.getElement( OBJECT.ShinkenElement.generateSEUUID( this.dom_element.dataset.typeItem, this.dom_element.dataset.uuidParent ) );
                this.check   = MANAGER.__instance_element_distributor.getElement( OBJECT.ShinkenElement.generateSEUUID( this.dom_element.dataset.typeCheck, this.dom_element.dataset.uuidCheck ) );
                this.dfe_key = this.dom_element.dataset.dfeKey;
                break;
            case SHINKEN_LIST.CONST.TYPE.MASS_CHANGE_SUM_FULL:
                this.parent_uuid           = this.dom_element.dataset.uuidParent;
                this.parent_select_element = SERVICE.DOM.findParentElementWithClass( this.dom_element, this.dom_element.dataset.parentSelectClass, 20 );
                break;
            case SHINKEN_LIST.CONST.TYPE.DATA_PROP:
                this.uuid = this.dom_element.dataset.name;
                break;
        }
        this.initIsSelected();
        this.initCellsValue();
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL, this.uuid, 1 );
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.FILTERING, this.uuid, 1 );
        this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.FILTERING ).shinken_debug = true;
        
        this.addCountersTargetDomElement( this.getDomElement() );
    },
    initIsSelected: function () {
        if ( this.dom_element.classList.contains( "gs-selected-disabled" ) ) {
            this.is_selected = SHINKEN_LIST.CONST.SELECTION.STATUS.DISABLED;
        }
        else if ( this.dom_element.classList.contains( "gs-selected" ) ) {
            this.is_selected = SHINKEN_LIST.CONST.SELECTION.STATUS.ON;
        }
        else {
            this.is_selected = SHINKEN_LIST.CONST.SELECTION.STATUS.OFF;
        }
        this.is_selected_counter = new GS.OBJECT.Counter();
        switch ( this.type ) {
            case SHINKEN_LIST.CONST.TYPE.MASS_CHANGE_SUM_FULL:
                if ( !this.parent_uuid ) {
                    this.is_selected_counter.setParent( CONTROLLER.MassChange.mass_change_element_selected );
                }
                this.updateSelectionCounter();
                if ( this.is_selected === SHINKEN_LIST.CONST.SELECTION.STATUS.ON ) {
                    this.initCounters( CONTROLLER.MassChange.steps.get().button_next, true );
                }
                break;
            case SHINKEN_LIST.CONST.TYPE.CHECK_IN_HOST:
                this.is_selected_counter.setParent( CONTROLLER.MassChange.mass_change_checks_selected );
                break;
        }
        var _check_box = SERVICE.DOM.askFindChildElementWithClass( this.dom_element, "gs-list-line-checkbox", "gs-list-table" );
        if ( _check_box ) {
            this.checkbox = new OBJECT.ElementCheckbox( _check_box.querySelector( ".gs-checkbox" ) );
        }
    },
    initCellsValue: function () {
        var _cells = SERVICE.DOM.querySelectorAllWithOutChild( this.dom_element, "gs-list-cell", "gs-list-table" );
        var _current;
        for ( var i = 0, _size_i = _cells.length; i < _size_i; i++ ) {
            this.add( new SHINKEN_LIST.LineCellFromHtml( _cells[ i ], this.type ) );
        }
    },
    
    
    getDataToSave: function ( type ) {
        var _to_return;
        switch ( this.type ) {
            case SHINKEN_LIST.CONST.TYPE.CHECK_IN_HOST:
                switch ( type ) {
                    case CONTROLLER.CONST.MASS_CHANGE.TYPE.CHECKS_EXCLUDE:
                        _to_return       = {};
                        _to_return.value = this.isSelected() ? true : false;
                        if ( this.dom_element.dataset.originalSelected === "1" ) {
                            _to_return.value = !_to_return.value;
                        }
                        _to_return.check_link = this.check.getDataToSave( OBJECT.CONST.ELEMENT.SAVE.TYPE.LINK );
                        break;
                    default:
                        _to_return      = [];
                        _to_return[ 0 ] = this.host.getDataToSave( OBJECT.CONST.ELEMENT.SAVE.TYPE.LINK );
                        _to_return[ 1 ] = this.parent.getDataToSave( OBJECT.CONST.ELEMENT.SAVE.TYPE.LINK );
                        _to_return[ 2 ] = this.check.getDataToSave( OBJECT.CONST.ELEMENT.SAVE.TYPE.LINK );
                        _to_return[ 3 ] = this.dfe_key;
                        break;
                }
            
        }
        return _to_return;
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.LineFromHtml, SHINKEN_LIST.Line );
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.LineFromHtml, GS.OBJECT.CounterInterface );
SHINKEN_LIST.LinesFromHtml           = function ( dom_element, type ) {
    this.type = type;
    this.init( dom_element );
};
SHINKEN_LIST.LinesFromHtml.prototype = {
    init                      : function ( dom_element ) {
        this.initCommon();
        this.mapping_parents = {};
        this.initContentsWithDom( SERVICE.DOM.querySelectorAllWithOutChild( dom_element, "gs-list-line", "gs-list-table" ) );
    },
    initContentsWithDom       : function ( dom_elements ) {
        var _current;
        for ( var i = 0, _size_i = dom_elements.length; i < _size_i; i++ ) {
            _current = new SHINKEN_LIST.LineFromHtml( dom_elements[ i ], this.type );
            this.addSpecific( _current );
            this.addMappingParent( _current.parent_uuid, _current.uuid );
        }
    },
    addMappingParent          : function ( parent_uuid, uuid ) {
        if ( !parent_uuid ) {
            if ( !this.mapping_parents[ uuid ] ) {
                this.mapping_parents[ uuid ] = [];
            }
        }
        else {
            if ( !this.mapping_parents[ parent_uuid ] ) {
                this.mapping_parents[ parent_uuid ] = [];
            }
            this.mapping_parents[ parent_uuid ].push( this.getContentByUUID( uuid ) );
        }
    },
    removeMappingParent       : function ( parent_uuid, _to_remove ) {
        if ( parent_uuid ) {
            GS.TOOLS.ARRAY.removeElement( this.mapping_parents[ parent_uuid ], _to_remove );
        }
    },
    remove                    : function ( uuid ) {
        var _to_remove = this.mapping[ uuid ];
        delete this.mapping[ uuid ];
        this.removeMappingParent( _to_remove.parent_uuid, _to_remove );
        GS.TOOLS.ARRAY.removeElement( this.contents, _to_remove );
    },
    addLineWithDom            : function ( dom_element ) {
        var _to_add = new SHINKEN_LIST.LineFromHtml( dom_element, this.type );
        this.add( _to_add );
        this.addMappingParent( _to_add.parent_uuid, _to_add.uuid );
    },
    toggleCollapse            : function ( uuid ) {
        this.getContentByUUID( uuid ).toggleCollapse( this.mapping_parents[ uuid ] );
    },
    setIsCollapseAllData      : function ( to_set ) {
        var _keys = Object.keys( this.mapping_parents );
        var _current_key;
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            this.getContentByUUID( _current_key ).setIsCollapsed( to_set, this.mapping_parents[ _current_key ] );
        }
    },
    isAllActiveLineCollapsed  : function () {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            if ( !this.contents[ i ].isCollapsedOrFiltered() ) {
                return false;
            }
        }
        return true;
    },
    applyFilter               : function ( filters ) {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].applyFilter( filters );
        }
        switch ( this.type ) {
            case SHINKEN_LIST.CONST.TYPE.MASS_CHANGE_SUM_FULL:
                this.filterParentWithNoChildren();
                break;
        }
    },
    filterParentWithNoChildren: function () {
        var _current;
        var _filter;
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            _current = this.contents[ i ];
            if ( _current.is_filtered !== SHINKEN_LIST.CONST.FILTER.STATUS.HAS_CHILDREN ) {
                continue;
            }
            if ( _current.parent_uuid ) {
                continue;
            }
            _filter = SHINKEN_LIST.CONST.FILTER.STATUS.ON;
            for ( var j = 0, _size_j = this.contents.length; j < _size_j; j++ ) {
                if ( this.contents[ j ].parent_uuid === _current.getUUID() && this.contents[ j ].is_filtered === SHINKEN_LIST.CONST.FILTER.STATUS.OFF ) {
                    _filter = SHINKEN_LIST.CONST.FILTER.STATUS.OFF;
                    break;
                }
            }
            _current.setFilter( _filter );
        }
    },
    getDataToSave             : function ( type ) {
        var _to_return = type === CONTROLLER.CONST.MASS_CHANGE.TYPE.CHECKS_EXCLUDE ? {} : [];
        var _current;
        var _current_data;
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            _current = this.contents[ i ];
            if ( _current.isSelected() ) {
                switch ( this.type ) {
                    case SHINKEN_LIST.CONST.TYPE.CHECK_IN_HOST:
                        switch ( type ) {
                            case CONTROLLER.CONST.MASS_CHANGE.TYPE.CHECKS_EXCLUDE:
                                _current_data = _current.getDataToSave( type );
                                if ( !_to_return[ _current.host.getUUID() ] ) {
                                    _to_return[ _current.host.getUUID() ] = [];
                                }
                                _to_return[ _current.host.getUUID() ].push( _current_data );
                                break;
                            
                            default:
                                _to_return.push( _current.getDataToSave( type ) );
                                break;
                        }
                        break;
                    default:
                        _to_return.push( _current.getDataToSave( type ) );
                        break;
                }
            }
        }
        return _to_return;
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.LinesFromHtml, SHINKEN_LIST.Lines );
SHINKEN_LIST.SetFromHtml           = function ( dom_element, type, structure_format ) {
    this.type             = type;
    this.structure_format = structure_format || SHINKEN_LIST.CONST.STRUCTURE_FORMAT.GENERIC;
    this.init( dom_element );
    this.edit_mode = false;
};
SHINKEN_LIST.SetFromHtml.prototype = {
    init          : function ( dom_element ) {
        this.initCommon();
        this.setDomElement( dom_element );
        this.initHeaders();
        this.initFilters();
        this.initLines();
        this.is_all_data_selected  = this.dom_element.classList.contains( "gs-selected" ) ? SHINKEN_LIST.CONST.SELECTION.STATUS.ON : SHINKEN_LIST.CONST.SELECTION.STATUS.OFF;
        this.is_all_data_collapsed = false;
        this.updateHtml();
        var _check_box = SERVICE.DOM.askFindChildElementWithClass( this.dom_element, "gs-all-elements-check-box-filter", "gs-list-table" );
        if ( _check_box ) {
            this.checkbox = new OBJECT.ElementCheckbox( _check_box.querySelector( ".gs-checkbox" ) );
        }
        this.setSelectAllStatus();
    },
    addLineWithDom: function ( dom_element ) {
        this.lines.addLineWithDom( dom_element );
        this.updateHtml();
    },
    
    initHeaders: function () {
        this.headers = new SHINKEN_LIST.HeadersFromHtml( this.dom_element.querySelector( ".gs-header-line" ) );
    },
    initFilters: function () {
        this.filters = new SHINKEN_LIST.FiltersFromHtml( this.dom_element.querySelector( ".gs-filter-line" ), this.type );
    },
    initLines  : function () {
        var dom_element = this.dom_element;
        switch ( this.structure_format ) {
            case SHINKEN_LIST.CONST.STRUCTURE_FORMAT.GENERIC:
                if ( !dom_element.classList.contains( "gs-list-table" ) ) {
                    var temp_dom_element = SERVICE.DOM.askFindChildElementWithClass( dom_element, "gs-list-table", "gs-list-line" );
                    if ( temp_dom_element ) {
                        dom_element = temp_dom_element;
                    }
                }
                break;
            case SHINKEN_LIST.CONST.STRUCTURE_FORMAT.WITH_HEADER_FIX:
                dom_element = dom_element.querySelector( ".gs-scrollable-container .gs-list-table" );
                break;
        }
        this.setLines( new SHINKEN_LIST.LinesFromHtml( dom_element, this.type ) );
    },
    setLines   : function ( to_set ) {
        if ( this.lines ) {
            this.lines.resetContents();
        }
        this.lines = to_set;
        this.addSynchronizedPhase( this.lines.phase );
        to_set.setCountersParent( this );
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.SetFromHtml, SHINKEN_LIST.Set );
SHINKEN_LIST.PaginationNavigation_V3           = function ( type ) {
    this.__class_name__ = "SHINKEN_LIST.PaginationNavigation_V3";
    this.init( type );
};
SHINKEN_LIST.PaginationNavigation_V3.prototype = {
    init             : function ( type ) {
        this.type        = type;
        this.is_disabled = false;
        this.computeLabel();
        this.button = new COMPONENT.ButtonFromData_V3( this.type, this.getLabel() );
    },
    addParamForEvents: function ( key, value ) {
        this.button.addParamForEvents( key, value );
    },
    getType          : function () {
        return this.type;
    },
    getUUID          : function () {
        return this.getType();
    },
    setDisabled      : function ( to_set ) {
        this.is_disabled = to_set;
        if ( this.getDomElement() ) {
            SERVICE.DOM.addOrRemoveClasses( this.getDomElement(), this.is_disabled, "gs-disabled" );
        }
    },
    computeLabel     : function () {
        var dom_class;
        switch ( this.type ) {
            case COMPONENT.CONST.PAGINATION_NAVIGATION.FIRST :
                dom_class = "gs-double-arrows shinkon-double-chevron-left";
                break;
            case COMPONENT.CONST.PAGINATION_NAVIGATION.PREVIOUS :
                dom_class = "gs-simple-arrow gs-2023-left";
                break;
            case COMPONENT.CONST.PAGINATION_NAVIGATION.NEXT :
                dom_class = "gs-simple-arrow gs-2023-right";
                break;
            case COMPONENT.CONST.PAGINATION_NAVIGATION.LAST :
                dom_class = "gs-double-arrows shinkon-double-chevron-right";
                break;
        }
        this.label = "<span class='" + dom_class + "'></span>";
    },
    computeClass     : function () {
        this.class = "gs-pagination-navigation";
        switch ( this.type ) {
            case COMPONENT.CONST.PAGINATION_NAVIGATION.FIRST :
            case COMPONENT.CONST.PAGINATION_NAVIGATION.PREVIOUS :
                this.class += " gs-type-first-pagination";
                break;
            case COMPONENT.CONST.PAGINATION_NAVIGATION.NEXT :
            case COMPONENT.CONST.PAGINATION_NAVIGATION.LAST :
                this.class += " gs-type-last-pagination";
                break;
        }
        
    },
    computeHtml      : function () {
        if ( this.getDomElement() ) {
            return;
        }
        
        this.computeClass();
        this.button.addClass( "gs-pagination-arrow-content" );
        this.button.computeHtml();
        
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: this.getClass() } ) );
        this.addDomElement( this.button.getDomElement() );
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.PaginationNavigation_V3, GS.OBJECT.GsObjectHtml );
SHINKEN_LIST.PaginationSelector           = function ( total_page, current_page, parent_name ) {
    this.__class_name__ = "SHINKEN_LIST.PaginationSelector";
    this.init( total_page, current_page, parent_name );
};
SHINKEN_LIST.PaginationSelector.prototype = {
    init                : function ( total_page, current_page, parent_name ) {
        this.selector = new COMPONENT.SingleSelectFromData( parent_name );
        this.selector.setParentName( parent_name );
        this.selector.setClickEventName( "pagination_click_on_selector" );
        
        this.setTotalPage( total_page );
        this.setCurrentPage( current_page );
    },
    computeFilterOptions: function () {
        var _to_return = [];
        var _to_add;
        for ( var i = 0, _size = this.total_page; i < _size; i++ ) {
            _to_add                  = { "name": i };
            _to_add[ 'label' ]       = i + 1 + "";
            _to_add[ 'is_selected' ] = i === this.current_page;
            _to_return.push( _to_add );
        }
        return _to_return;
    },
    clickOnSelector     : function ( event, param ) {
        this.selector.clickOnSelector( event );
    },
    clickOnItemSelector : function ( key_name, parent ) {
        this.selector.clickOnItemSelector( key_name, parent );
        this.selector.computeTitle();
    },
    onClick             : function ( event ) {
        this.selector.hidePopup();
    },
    doActionAfter       : function ( event_name, param_1, param_2, param_3 ) {
        switch ( event_name ) {
            case "click_on_selector":
            case "click_on_item_selector":
                this.selector.doActionAfter( event_name, param_1, param_2, param_3 );
                break;
        }
    },
    setTotalPage        : function ( to_set ) {
        this.total_page = Math.max( 1, to_set );
        this.selector.setOptionsFromArray( this.computeFilterOptions() );
    },
    setCurrentPage      : function ( to_set ) {
        this.current_page = to_set;
        if ( this.total_page ) {
            this.selector.setLastSelectedElementName( this.current_page );
        }
    },
    getUUID             : function () {
        return "pagination_selector";
    },
    setParentName       : function ( to_set ) {
        this.parent_name = to_set;
        this.selector.setParentName( this.parent_name );
    },
    computeClass        : function () {
        this.class = "gs-pagination-selector";
    },
    computeHtml         : function () {
        if ( this.getDomElement() ) {
            SERVICE.DOM.empty( this.getDomElement() );
        }
        else {
            this.computeClass();
            this.setDomElement( SERVICE.DOM.createElement( "td", { class: this.class } ) );
        }
        this.selector.computeHtml();
        this.computeClass();
        var _to_add = SERVICE.DOM.createElement( "div", { class: "gs-pagination-cell-content", "data-name": "gs-list-pagination" } );
        SERVICE.DOM.addElementTo( this.selector.getDomElement(), _to_add );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "gs-total-pagination" }, " / " + this.total_page ), _to_add );
        this.addDomElement( _to_add );
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.PaginationSelector, GS.OBJECT.GsObjectHtml );
SHINKEN_LIST.PaginationSelector_V3           = function ( total_page, current_page, parent_name ) {
    this.__class_name__ = "SHINKEN_LIST.PaginationSelector_V3";
    this.init( total_page, current_page, parent_name );
};
SHINKEN_LIST.PaginationSelector_V3.prototype = {
    init             : function ( total_page, current_page, parent_name ) {
        this.selector = new COMPONENT.SingleSelectForPagination( parent_name );
        this.selector.setParentName( parent_name );
        
        this.setTotalPage( total_page );
        this.setCurrentPage( current_page );
    },
    doActionAfter    : function ( event_name, param_1, param_2, param_3 ) {
        switch ( event_name ) {
            case "click_on_selector_V3":
            case "click_on_item_selector_V3":
                this.selector.doActionAfter( event_name, param_1, param_2, param_3 );
                break;
        }
    },
    addParamForEvents: function ( key, value ) {
        this.selector.addParamForEvents( key, value );
    },
    computeClass     : function () {
        this.class = "gs-pagination-selector-V3 flex-layout-center-h-v";
    },
    computeHtml      : function () {
        if ( this.getDomElement() ) {
            SERVICE.DOM.empty( this.getDomElement() );
        }
        else {
            this.computeClass();
            this.setDomElement( SERVICE.DOM.createElement( "div", { class: this.class } ) );
        }
        this.selector.computeHtml();
        this.computeClass();
        var _to_add = SERVICE.DOM.createElement( "div", { class: "gs-pagination-cell-content flex-layout-inline-center-h-v", "data-name": "gs-list-pagination" } );
        SERVICE.DOM.addElementTo( this.selector.getDomElement(), _to_add );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "gs-total-pagination" }, " /<span class='gs-value'>" + this.total_page + "</span>" ), _to_add );
        this.addDomElement( _to_add );
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_LIST.PaginationSelector_V3, SHINKEN_LIST.PaginationSelector );
COMPONENT.SingleSelectForPagination           = function ( property_name, selector_name ) {
    this.__class_name__ = 'COMPONENT.SingleSelectForPagination';
    this.initSpecific( property_name, selector_name );
};
COMPONENT.SingleSelectForPagination.prototype = {
    initSpecific: COMPONENT.SingleSelectFromData_V3.prototype.initSpecific,
    computeHtml : function () {
        this.addClass( "gs-for-pagination" );
        this.list_element.computeHtml();
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: this.getClass(), "data-state-selector": 0 } ) );
        
        this.dom_select = SERVICE.DOM.createElement( "div", {
            class      : "gs-select-selector-V3 gs-select-selector gs-user-select-none flex-layout-center-h-v flex-layout-justify-around gs-for-pagination",
            "data-name": this.selector_name,
            onclick    : "MANAGER.EventManagerV2.clickSelector_V3(event," + this.parseParamForEventsToHtml() + ")"
        }, '<span class="gs-selector-label gs-space gs-for-pagination">' + this.default_label_for_select + '</span><span class="shinkon gs-header-chevron gs-2023-arrow-down"></span>' );
        this.computeTitle();
        this.addDomElement( this.dom_select );
        this.addDomElement( this.list_element.getDomElement() );
    }
};
GS.TOOLS.CLASS.addPrototype( COMPONENT.SingleSelectForPagination, COMPONENT.SingleSelectFromData_V3 );
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
MANAGER.DistributorResourcesManager             = function () {
    this.contents = {};
};
MANAGER.DistributorResourcesManager.prototype   = {
    createResource: function ( uuid, data ) {
        var _to_return = new GS.OBJECT.Resource();
        _to_return.updateData( data );
        this.addResource( _to_return );
        return _to_return;
    },
    findResource  : function ( uuid, data ) {
        if ( !uuid ) {
            return;
        }
        var _to_return = this.getResource( uuid );
        if ( !_to_return ) {
            _to_return = this.createResource( uuid, data );
        }
        else {
            _to_return.updateData( data );
        }
        return _to_return;
    },
    getResource   : function ( uuid ) {
        return this.contents[ uuid ];
    },
    addResource   : function ( resource ) {
        this.contents[ resource.getUUID() ] = resource;
    }
};
MANAGER.__instance_resources_distributor        = new MANAGER.DistributorResourcesManager();
MANAGER.DistributorResourcesManager.factory     = function ( key, data ) {
    switch ( key ) {
        case "resources":
            var _keys = Object.keys( data );
            var _size = _keys.length;
            var _currentKey;
            for ( var i = 0; i < _size; i++ ) {
                _currentKey = _keys[ i ];
                MANAGER.DistributorResourcesManager.factory( _currentKey, data[ _currentKey ] );
            }
            break;
        case "audio":
            var _keys = Object.keys( data );
            var _size = _keys.length;
            var _currentKey;
            for ( var i = 0; i < _size; i++ ) {
                _currentKey                          = _keys[ i ];
                data[ _currentKey ][ "resource_id" ] = _currentKey;
                data[ _currentKey ][ "type" ]        = "audio/mpeg";
                MANAGER.__instance_resources_distributor.findResource( _currentKey, data[ _currentKey ] );
            }
            break;
    }
};
MANAGER.DistributorResourcesManager.getInstance = function () {
    try {
        if ( window.parent.MANAGER.__instance_resources_distributor ) {
            return window.parent.MANAGER.DistributorResourcesManager.getInstance();
        }
    }
    catch ( e ) {
    }
    return MANAGER.__instance_resources_distributor;
};
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
MANAGER.DragNDropManager                        = (function ( self ) {
    self.last_element_hovered          = null;
    self.current_parent_name           = null;
    self.type_drag_start               = null;
    self.list_element                  = null;
    self.single_element_drag           = null;
    self.options                       = null;
    self._name_origin_controller       = null;
    self.parent_element_relative_pos_X = null;
    self.parent_element_relative_pos_Y = null;
    
    self.initDragNDropSingle   = function ( event ) {
        self.single_element_drag = SERVICE.DOM.findParentElementByClassWithClassExcluded( event.target, "gs-draggable", 'gs-drag-exclude', 50 );
        if ( !self.single_element_drag ) {
            return;
        }
        self._bounding_origin = self.single_element_drag.getBoundingClientRect();
        self._mouse_x_origin  = parseInt( event.clientX );
        self._mouse_y_origin  = parseInt( event.clientY );
        event.stopPropagation();
        self.options = null;
    };
    self.activeDragNDropSingle = function () {
        if ( self.options ) {
            return;
        }
        self.single_element_drag.classList.add( "gs-drag-active" );
        let _body = document.querySelector( 'body' );
        _body.classList.add( "gs-has-drag-in-progress" );
        _body.addEventListener( 'mouseleave', self.dragEndSingle, false );
        document.documentElement.addEventListener( 'mousemove', self.dragSingle, false );
        document.documentElement.addEventListener( 'mouseup', self.dragEndSingle, false );
        self._initParametersIsInParentDiv();
        self._callbackDragStart();
        event.stopPropagation();
        window.getSelection().removeAllRanges();
        self.parent_element_relative_pos_X     = 0;
        self.parent_element_relative_pos_Y     = 0;
        let dom_element_with_position_relative = SERVICE.DOM.findParentElementWithClass( self.single_element_drag, "gs-css-relative-position", 50 );
        if ( dom_element_with_position_relative ) {
            let _rect                          = SERVICE.DOM.getBoundingClientRect( dom_element_with_position_relative );
            self.parent_element_relative_pos_X = _rect[ "left" ];
            self.parent_element_relative_pos_Y = _rect[ "top" ];
        }
    };
    
    
    self.dragStartSingle = function ( event ) {
        self.single_element_drag = SERVICE.DOM.findParentElementByClassWithClassExcluded( event.target, "gs-draggable", 'gs-drag-exclude', 50 );
        if ( !self.single_element_drag ) {
            return;
        }
        self.single_element_drag.classList.add( "gs-drag-active" );
        self._bounding_origin = self.single_element_drag.getBoundingClientRect();
        self._mouse_x_origin  = parseInt( event.clientX );
        self._mouse_y_origin  = parseInt( event.clientY );
        let _body             = document.querySelector( 'body' );
        _body.classList.add( "gs-has-drag-in-progress" );
        _body.addEventListener( 'mouseleave', self.dragEndSingle, false );
        document.documentElement.addEventListener( 'mousemove', self.dragSingle, false );
        document.documentElement.addEventListener( 'mouseup', self.dragEndSingle, false );
        self._initParametersIsInParentDiv();
        self._callbackDragStart();
        event.stopPropagation();
        window.getSelection().removeAllRanges();
        self.parent_element_relative_pos_X     = 0;
        self.parent_element_relative_pos_Y     = 0;
        let dom_element_with_position_relative = SERVICE.DOM.findParentElementWithClass( self.single_element_drag, "gs-css-relative-position", 50 );
        if ( dom_element_with_position_relative ) {
            let _rect                          = SERVICE.DOM.getBoundingClientRect( dom_element_with_position_relative );
            self.parent_element_relative_pos_X = _rect[ "left" ];
            self.parent_element_relative_pos_Y = _rect[ "top" ];
        }
    };
    self.dragSingle      = function ( event ) {
        let _position_x = parseInt( event.clientX ) - self._mouse_x_origin + self._bounding_origin.left - self.parent_element_relative_pos_X;
        let _position_y = parseInt( event.clientY ) - self._mouse_y_origin + self._bounding_origin.top - self.parent_element_relative_pos_Y;
        
        if ( self.options._is_in_screen ) {
            let _result = self._computeIsInParentDiv( _position_x, _position_y );
            _position_x = _result.x;
            _position_y = _result.y;
        }
        SERVICE.DOM.setStyles( self.single_element_drag, { "top": _position_y + 'px', "left": _position_x + 'px' } );
        self._callbackDragMove( parseInt( event.clientX ) - self._mouse_x_origin, parseInt( event.clientY ) - self._mouse_y_origin );
    };
    self.dragEndSingle   = function () {
        document.documentElement.removeEventListener( 'mousemove', self.dragSingle, false );
        document.documentElement.removeEventListener( 'mouseup', self.dragEndSingle, false );
        let _body = document.querySelector( 'body' );
        _body.removeEventListener( 'mouseleave', self.dragEndSingle, false );
        document.querySelector( 'body' ).classList.remove( "gs-has-drag-in-progress" );
        self.single_element_drag.classList.remove( "gs-drag-active" );
        self._callbackDragStop();
        self.single_element_drag     = null;
        self._name_origin_controller = null;
    };
    
    self._computeIsInParentDiv        = function ( _delta_x, _delta_y ) {
        let _to_return = { x: _delta_x, y: _delta_y };
        if ( _delta_x < 0 ) {
            _to_return.x = 0;
        }
        else if ( (_delta_x + self._bounding_origin.width) > self.options._is_in_screen.parameters.window_width ) {
            _to_return.x = self.options._is_in_screen.parameters.window_width - self._bounding_origin.width - self.options._is_in_screen.parameters.scrollbar_x_width;
        }
        
        if ( _delta_y < 0 ) {
            _to_return.y = 0;
        }
        else if ( (_delta_y + self._bounding_origin.height) > self.options._is_in_screen.parameters.window_height ) {
            _to_return.y = self.options._is_in_screen.parameters.window_height - self._bounding_origin.height - self.options._is_in_screen.parameters.scrollbar_y_height;
        }
        return _to_return;
    };
    self._initParametersIsInParentDiv = function () {
        self.options = {
            _is_in_screen: {
                is_active : false,
                parameters: {}
            }
        };
        if ( !self.single_element_drag ) {
            return;
        }
        if ( !SERVICE.DOM.hasKeyInDataSet( self.single_element_drag, 'dragIsInScreen' ) ) {
            return;
        }
        self.options._is_in_screen.is_active = true;
        let css_selector                     = "body";
        if ( SERVICE.DOM.hasKeyInDataSet( self.single_element_drag, "dragIsInScreenId" ) ) {
            css_selector = self.single_element_drag.dataset[ "dragIsInScreenId" ];
        }
        let dom_element                       = document.querySelector( css_selector );
        let rect                              = SERVICE.DOM.getBoundingClientRect( dom_element );
        self.options._is_in_screen.parameters = {
            window_width      : rect.width,
            window_height     : rect.height,
            scrollbar_x_width : SERVICE.DOM.scrollbarIsVisible( dom_element, 'width' ) ? 8 : 0,
            scrollbar_y_height: SERVICE.DOM.scrollbarIsVisible( dom_element, 'height' ) ? 8 : 0
        };
    };
    self._getDragNameForCallback      = function () {
        let _name = self.single_element_drag.dataset[ 'dragResizeElementName' ];
        if ( _name ) {
            return _name;
        }
    };
    self._callbackDragStart           = function () {
        if ( CONTROLLER && CONTROLLER.DistributorControllerManager ) {
            self._name_origin_controller = CONTROLLER.DistributorControllerManager.findControllerName( "", self.single_element_drag );
        }
        if ( MANAGER && MANAGER.EventManager && self._name_origin_controller ) {
            MANAGER.EventManager.onDragStart( self._name_origin_controller, self._getDragNameForCallback(), self._mouse_x_origin, self._mouse_y_origin );
        }
    };
    self._callbackDragMove            = function ( delta_x, delta_y ) {
        if ( MANAGER && MANAGER.EventManager && self._name_origin_controller ) {
            MANAGER.EventManager.onDragMove( self._name_origin_controller, self._getDragNameForCallback(), delta_x, delta_y );
        }
    };
    self._callbackDragStop            = function () {
        if ( MANAGER && MANAGER.EventManager && self._name_origin_controller ) {
            MANAGER.EventManager.onDragStop( self._name_origin_controller, self._getDragNameForCallback() );
        }
    };
    
    self.dragStartShinken = function ( e, type, parent_name, key_name ) {
        let _object = MANAGER.__instance_property_distributor.findElement( parent_name, true );
        if ( _object.is_disabled ) {
            return false;
        }
        e.dataTransfer.setData( 'text', 'anything' );
        self.type_drag_start      = type;
        self.current_parent_name  = parent_name;
        self.list_element         = _object.dragStartShinken( type, key_name );
        self.last_element_hovered = self.list_element.getDragged().getDomElement().parentNode;
        self.last_index           = self.last_element_hovered.dataset.index;
        self.last_element_hovered.classList.add( MANAGER.CONST.DRAG_N_DROP.CLASS.HOVER );
        
        let _list_droppable = _object.dom_element.querySelectorAll( '.droppable' );
        for ( let i = 0, _size_i = _list_droppable.length; i < _size_i; i++ ) {
            _list_droppable[ i ].style.width = _list_droppable[ i ].getBoundingClientRect().width + 'px';
        }
    };
    self.dragOverShinken  = function ( e, type, parent_name, dom_element ) {
        e.preventDefault();
        if ( self.current_parent_name !== parent_name ) {
            return false;
        }
        if ( self.type_drag_start !== type ) {
            return false;
        }
        let _current_index_hovered = dom_element.dataset.index;
        if ( _current_index_hovered === self.last_index ) {
            return false;
        }
        
        self.list_element.changeElementPosition( self.last_index, _current_index_hovered );
        self.last_index = _current_index_hovered;
        self.last_element_hovered.classList.remove( MANAGER.CONST.DRAG_N_DROP.CLASS.HOVER );
        self.last_element_hovered = dom_element;
        self.last_element_hovered.classList.add( MANAGER.CONST.DRAG_N_DROP.CLASS.HOVER );
    };
    self.dragEndShinken   = function ( e, type ) {
        let _list_droppable = MANAGER.__instance_property_distributor.last_element_focus.dom_element.querySelectorAll( '.droppable' );
        for ( let i = 0, _size_i = _list_droppable.length; i < _size_i; i++ ) {
            _list_droppable[ i ].style.width = '';
        }
        
        if ( MANAGER.__instance_property_distributor.last_element_focus.is_disabled ) {
            return false;
        }
        e.preventDefault();
        self._reset();
    };
    self.dropShinken      = function ( e, type, parent_name, dom_element ) {
        e.preventDefault();
    };
    self._reset           = function () {
        MANAGER.__instance_property_distributor.last_element_focus.resetDragging();
        if ( self.last_element_hovered ) {
            self.last_element_hovered.classList.remove( MANAGER.CONST.DRAG_N_DROP.CLASS.HOVER );
        }
        self.last_element_hovered = null;
        self.current_parent_name  = null;
        self.type_drag_start      = null;
        self.list_element         = null;
        self.pause_timeout        = null;
    };
    
    return self;
})
( MANAGER.DragNDropManager || {} );
MANAGER.DragNDropManager.EVENT_PARAM            = {
    ELEMENT_NAME: "element_name",
    ORIGIN_X    : "origin_x",
    ORIGIN_Y    : "origin_y",
    DELTA_X     : "delta_x",
    DELTA_Y     : "delta_y"
};
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
MANAGER.ResizeManager                           = (function ( self ) {
    "use strict";
    self.dom_element_resize      = null;
    self._bounding_origin        = null;
    self._mouse_x_origin         = null;
    self._mouse_y_origin         = null;
    self._width_origin           = null;
    self._height_origin          = null;
    self._name_origin_controller = null;
    
    
    self.simulateResize            = function ( dom_element ) {
        var _event = {
            "clientX"      : 0,
            "clientY"      : 0,
            stopPropagation: function () {
            }
        };
        setTimeout( function () {
            self.resizeStart( _event, dom_element );
            self.doResize( _event );
            self.resizeEnd();
        }, 0 );
    };
    self.resizeStart               = function ( event, dom_element_target ) {
        var _dom_target         = dom_element_target || event.target;
        self.dom_element_resize = SERVICE.DOM.findParentElementWithClass( _dom_target, "gs-resizable", 50 );
        self._bounding_origin   = SERVICE.DOM.getBoundingClientRect( self.dom_element_resize );
        self._min_width         = parseInt( _dom_target.dataset[ 'resizeMinWidth' ] );
        self._max_width         = parseInt( _dom_target.dataset[ 'resizeMaxWidth' ] );
        self._min_height        = parseInt( _dom_target.dataset[ 'resizeMinHeight' ] );
        self._max_height        = parseInt( _dom_target.dataset[ 'resizeMaxHeight' ] );
        self._mouse_x_origin    = parseInt( event.clientX );
        self._mouse_y_origin    = parseInt( event.clientY );
        self._width_origin      = self._bounding_origin.width;
        self._height_origin     = self._bounding_origin.height;
        self._type              = self.dom_element_resize.dataset.resizeType;
        self.dom_element_resize.classList.add( "gs-resize-active" );
        
        var _body = document.querySelector( 'body' );
        _body.classList.add( "gs-has-resize-in-progress" );
        _body.addEventListener( 'mouseleave', self.resizeEnd, false );
        
        document.documentElement.addEventListener( 'mousemove', self.doResize, false );
        document.documentElement.addEventListener( 'mouseup', self.resizeEnd, false );
        self._callbackResizeStart( event );
        event.stopPropagation();
    };
    self.doResize                  = function ( event ) {
        var _width  = self._width_origin;
        var _height = self._height_origin;
        switch ( self._type ) {
            case MANAGER.CONST.RESIZE.TYPE.LEFT:
                _width = (self._width_origin - event.clientX + self._mouse_x_origin);
                break;
            case MANAGER.CONST.RESIZE.TYPE.RIGHT:
                _width = (self._width_origin + event.clientX - self._mouse_x_origin);
                break;
            case MANAGER.CONST.RESIZE.TYPE.TOP:
                _height = (self._height_origin - event.clientY + self._mouse_y_origin);
                break;
            case MANAGER.CONST.RESIZE.TYPE.BOTTOM:
                _height = (self._height_origin + event.clientY - self._mouse_y_origin);
                break;
            case MANAGER.CONST.RESIZE.TYPE.BOTTOM_RIGHT:
                _width  = (self._width_origin + event.clientX - self._mouse_x_origin);
                _height = (self._height_origin + event.clientY - self._mouse_y_origin);
                break;
        }
        
        if ( self._min_width && self._min_width > _width ) {
            _width = self._min_width;
        }
        if ( self._min_height && self._min_height > _height ) {
            _height = self._min_height;
        }
        if ( self._max_width && self._max_width < _width ) {
            _width = self._max_width;
        }
        if ( self._max_height && self._max_height < _height ) {
            _height = self._max_height;
        }
        
        switch ( self._type ) {
            case MANAGER.CONST.RESIZE.TYPE.LEFT:
            case MANAGER.CONST.RESIZE.TYPE.RIGHT:
                SERVICE.DOM.setStyles( self.dom_element_resize, { width: _width + 'px' } );
                break;
            case MANAGER.CONST.RESIZE.TYPE.TOP:
            case MANAGER.CONST.RESIZE.TYPE.BOTTOM:
                SERVICE.DOM.setStyles( self.dom_element_resize, { height: _height + 'px' } );
                
                break;
            case MANAGER.CONST.RESIZE.TYPE.BOTTOM_RIGHT:
                SERVICE.DOM.setStyles( self.dom_element_resize, { width: _width + 'px', height: _height + 'px' } );
                break;
        }
        
        self._callbackResizeMove( _width, _height );
    };
    self.resizeEnd                 = function () {
        document.documentElement.removeEventListener( 'mousemove', self.doResize, false );
        document.documentElement.removeEventListener( 'mouseup', self.resizeEnd, false );
        var _body = document.querySelector( 'body' );
        _body.removeEventListener( 'mouseleave', self.resizeEnd, false );
        document.querySelector( 'body' ).classList.remove( "gs-has-resize-in-progress" );
        self.dom_element_resize.classList.remove( "gs-resize-active" );
        self._callbackResizeEnd();
        self.dom_element_resize = null;
        self._min_width         = null;
        self._min_height        = null;
        self._type              = null;
    };
    self._getResizeNameForCallback = function () {
        var _name = self.dom_element_resize.dataset[ 'dragResizeElementName' ];
        if ( _name ) {
            return _name;
        }
        console.error( "MANAGER.DragNDropManager : The dataset callbackResizeElementName was not found " );
    };
    self._callbackResizeStart      = function ( event ) {
        if ( MANAGER && CONTROLLER.DistributorControllerManager ) {
            self._name_origin_controller = CONTROLLER.DistributorControllerManager.findControllerName( event );
        }
        if ( self._name_origin_controller && MANAGER && MANAGER.EventManager ) {
            MANAGER.EventManager.onResizeStart( self._name_origin_controller, self._getResizeNameForCallback() );
        }
    };
    self._callbackResizeMove       = function ( width, height ) {
        if ( self._name_origin_controller && MANAGER && MANAGER.EventManager ) {
            MANAGER.EventManager.onResizeMove( self._name_origin_controller, self._getResizeNameForCallback(), width, height );
        }
    };
    self._callbackResizeEnd        = function () {
        if ( self._name_origin_controller && MANAGER && MANAGER.EventManager ) {
            MANAGER.EventManager.onResizeStop( self._name_origin_controller, self._getResizeNameForCallback() );
        }
    };
    return self;
})
( MANAGER.ResizeManager || {} );
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
GS.OBJECT.callbacksAfterCloseModal           = function () {
    this.__class_name__ = "GS.OBJECT.callbacksAfterCloseModal";
    this.init();
};
GS.OBJECT.callbacksAfterCloseModal.prototype = {
    init        : function () {
        this.resetActions();
    },
    addCallback : function ( method, param_1, param_2 ) {
        this.contents.push( new GS.OBJECT.callbackAfterCloseModal( method, param_1, param_2 ) );
    },
    doActions   : function () {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents.pop().doAction();
        }
    },
    hasActions  : function () {
        return this.contents.length;
    },
    resetActions: function () {
        this.contents = [];
    }
};
GS.OBJECT.callbackAfterCloseModal            = function ( method, param_1, param_2 ) {
    this.__class_name__ = "GS.OBJECT.callbackAfterCloseModal";
    this.method         = method;
    this.param_1        = param_1;
    this.param_2        = param_2;
    this.init();
};
GS.OBJECT.callbackAfterCloseModal.prototype  = {
    init    : function () {
    },
    doAction: function () {
        this.method( this.param_1, this.param_2 );
    }
};
GS.OBJECT.ConfirmationPopup                  = function () {
    this.init();
};
GS.OBJECT.ConfirmationPopup.prototype        = {
    init                  : function () {
        this.dom_element           = null;
        this.dom_element_popup     = null;
        this.validate_button_label = "";
        this.initPhase( GS.OBJECT.CONST.PHASE.HIDDEN_TO_STRING );
    },
    show                  : function () {
        this.dom_element.classList.remove( "gs-hidden" );
        this.setPhase( GS.OBJECT.CONST.PHASE.RUNNING_TO_STRING );
    },
    hide                  : function () {
        this.dom_element.classList.add( "gs-hidden" );
        this.setPhase( GS.OBJECT.CONST.PHASE.HIDDEN_TO_STRING );
        this.reset();
    },
    setValidateButtonLabel: function ( to_set ) {
        this.validate_button_label = to_set;
        if ( this.validate_button ) {
            this.validate_button.innerHTML = to_set;
        }
    },
    setTitle              : function ( to_set ) {
        this.title = to_set;
        if ( this.dom_element_title ) {
            this.dom_element_title.innerHTML = to_set;
        }
    },
    setController         : function ( to_set ) {
        this.controller = to_set;
        if ( this.dom_element ) {
            SERVICE.DOM.setDataSet( this.dom_element, "controller", this.controller );
        }
    },
    setContent            : function ( to_set ) {
        this.content = to_set;
        if ( this.dom_element_content ) {
            SERVICE.DOM.addElementToAfterEmpty( this.content, this.dom_element_content );
        }
    },
    reset                 : function () {
        SERVICE.DOM.removeElement( this.dom_element );
        this.dom_element = null;
    },
    computeHtmlDomElement : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", {
            "class"          : "gs-parent-event-listener gs-hidden",
            "id"             : "id-gs-confirmation-popup-container",
            "data-controller": this.controller
        } ) );
        this.computeHtmlPopup();
        SERVICE.DOM.addElementTo( this.dom_element, document.body );
    },
    computeHtmlPopup      : function () {
        this.dom_element_popup = this.addDomElement( SERVICE.DOM.createElement( "div", { "class": "gs-confirmation-popup" } ) );
        this.computeHtmlHeader();
        this.computeHtmlContent();
        this.computeHtmlFooter();
    },
    computeHtmlHeader     : function () {
        var _container               = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { "class": "gs-header-confirmation-popup" } ), this.dom_element_popup );
        var _table                   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "table", { "class": "gs-width-100" } ), _container );
        var _tr                      = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "tr", { "class": "gs-header-confirmation-popup" } ), _table );
        this.dom_element_title       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", { "class": "gs-title-confirmation-popup" }, this.title ), _tr );
        var _onclick_attribute_close = 'MANAGER.EventManager.clickOnButton(event, "click-on-cancel-confirmation-popup")';
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", { "class": "gs-confirmation-popup-cell-close", "onclick": _onclick_attribute_close }, "<span class='shinkon-times'></span>" ), _tr );
    },
    computeHtmlContent    : function () {
        this.dom_element_content = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { "class": "gs-content-confirmation-popup" } ), this.dom_element_popup );
        SERVICE.DOM.addElementTo( this.content, this.dom_element_content );
    },
    computeHtmlFooter     : function () {
        this.validate_button_label = this.validate_button_label || _( "confirmation_popup.validate_button", [DICTIONARY_COMMON_UI] );
        var _container             = SERVICE.DOM.createElement( "div", { "class": "gs-footer-confirmation-popup" } );
        var _table                 = SERVICE.DOM.createElement( "table", { "class": "gs-footer-table-confirmation-popup" } );
        var _tr                    = SERVICE.DOM.createElement( "tr", {} );
        var _td                    = SERVICE.DOM.createElement( "td", {} );
        var _table_buttons         = SERVICE.DOM.createElement( "table", { "class": "gs-action-button-table-confirmation-popup" } );
        var _tr_buttons            = SERVICE.DOM.createElement( "tr", {} );
        var _td_validate           = SERVICE.DOM.createElement( "td", {} );
        this.validate_button       = SERVICE.DOM.createElement( "div", {
            "class"  : "gs-action-button-confirmation-popup gs-validate-button",
            "onclick": "MANAGER.EventManager.clickOnButton(event, 'click-on-validate-confirmation-popup')"
        }, this.validate_button_label );
        var _td_cancel             = SERVICE.DOM.createElement( "td", {} );
        var _onclick_cancel        = 'MANAGER.EventManager.clickOnButton(event, "click-on-cancel-confirmation-popup")';
        var _cancel_button         = SERVICE.DOM.createElement( "div", {
            "class"  : "gs-action-button-confirmation-popup gs-cancel-button",
            "onclick": _onclick_cancel
        }, _( "confirmation_popup.cancel_button", [DICTIONARY_COMMON_UI] ) );
        
        
        SERVICE.DOM.addElementTo( this.validate_button, _td_validate );
        SERVICE.DOM.addElementTo( _td_validate, _tr_buttons );
        
        SERVICE.DOM.addElementTo( _cancel_button, _td_cancel );
        SERVICE.DOM.addElementTo( _td_cancel, _tr_buttons );
        
        SERVICE.DOM.addElementTo( _tr_buttons, _table_buttons );
        SERVICE.DOM.addElementTo( _table_buttons, _td );
        SERVICE.DOM.addElementTo( _td, _tr );
        SERVICE.DOM.addElementTo( _tr, _table );
        SERVICE.DOM.addElementTo( _table, _container );
        SERVICE.DOM.addElementTo( _container, this.dom_element_popup );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ConfirmationPopup, GS.OBJECT.PhaseInterface );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ConfirmationPopup, GS.OBJECT.GsObjectHtml );
GS.OBJECT.CONFIRMATIONPOPUP              = {
    PARAM: {
        NAME                   : "confirmation_pop_up_name",
        EVENT_NAME_CONFIRMATION: "event_name_after_apply_confirmation_pop_up"
    }
};
GS.OBJECT.ConfirmationPopup_V3           = function () {
    this.init();
};
GS.OBJECT.ConfirmationPopup_V3.prototype = {
    init             : function ( name, event_name_validation_popup ) {
        this.uuid = "id-gs-confirmation-popup-container";
        this.name = name;
        this.addParamForEvents( GS.OBJECT.CONFIRMATIONPOPUP.PARAM.NAME, this.uuid );
        this.addParamForEvents( GS.OBJECT.CONFIRMATIONPOPUP.PARAM.EVENT_NAME_CONFIRMATION, event_name_validation_popup );
        this.dom_element       = null;
        this.dom_element_popup = null;
        this.initPhase( GS.OBJECT.CONST.PHASE.HIDDEN_TO_STRING );
        this.button_validate = new COMPONENT.ButtonFromData_V3( "valid_popup__20240904", _( "confirmation_popup.validate_button", [DICTIONARY_COMMON_UI] ) );
        this.button_cancel   = new COMPONENT.ButtonFromData_V3( "cancel_popup__20240904", _( "confirmation_popup.cancel_button", [DICTIONARY_COMMON_UI] ) );
    },
    doActionAfter    : function ( event_name, param ) {
        switch ( event_name ) {
            case "click_on_button_V3":
                switch ( param[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case "close_popup__20240904":
                    case "cancel_popup__20240904":
                        this.hide();
                        break;
                    case "valid_popup__20240904":
                        this.controller.doActionAfter( param[ GS.OBJECT.CONFIRMATIONPOPUP.PARAM.EVENT_NAME_CONFIRMATION ], param );
                        break;
                }
                break;
        }
    },
    show             : function () {
        this.setPhase( GS.OBJECT.CONST.PHASE.RUNNING_TO_STRING );
    },
    hide             : function () {
        this.reset();
    },
    reset            : function ( name, event_name_validation_popup ) {
        SERVICE.DOM.removeElement( this.dom_element );
        this.init( name, event_name_validation_popup );
    },
    setController    : function ( to_set ) {
        this.controller = to_set;
        if ( this.getDomElement() ) {
            SERVICE.DOM.setDataSet( this.getDomElement(), "controller", this.controller.controller_name );
        }
    },
    setValidButton   : function ( to_set ) {
        this.button_validate = to_set;
    },
    isVisible        : function () {
        return this.isPhase( GS.OBJECT.CONST.PHASE.RUNNING_TO_STRING );
    },
    computeHtml      : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", {
            "class"          : "gs-parent-event-listener",
            "id"             : this.uuid,
            "data-name"      : this.name,
            "data-controller": this.controller.controller_name
        } ) );
        this.setPhaseDomElement( this.getDomElement() );
        this.dom_element_popup = this.addDomElement( SERVICE.DOM.createElement( "div", { "class": "gs-confirmation-popup" } ) );
        this.computeHtmlHeader();
        this.computeHtmlContent();
        this.computeHtmlFooter();
        SERVICE.DOM.addElementTo( this.dom_element, document.body );
    },
    computeHtmlHeader: function () {
        var _container         = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { "class": "gs-header-confirmation-popup flex-layout-center-h-v flex-layout-justify-between" } ), this.dom_element_popup );
        this.dom_element_title = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { "class": "gs-title-confirmation-popup" }, this.title ), _container );
        let button_close       = new COMPONENT.ButtonFromData_V3( "close_popup__20240904", "<span class='shinkon-times'></span>" );
        button_close.addParamsForEvents( this.getParamForEvents() );
        button_close.computeHtml();
        SERVICE.DOM.addElementTo( button_close.getDomElement(), _container );
    },
    computeHtmlFooter: function () {
        var footer = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { "class": "gs-footer-confirmation-popup flex-layout-right-h-center-v" } ), this.dom_element_popup );
        this.button_validate.addParamsForEvents( this.getParamForEvents() );
        this.button_validate.computeHtml();
        this.button_cancel.addParamsForEvents( this.getParamForEvents() );
        this.button_cancel.computeHtml();
        SERVICE.DOM.addElementTo( this.button_validate.getDomElement(), footer );
        SERVICE.DOM.addElementTo( this.button_cancel.getDomElement(), footer );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ConfirmationPopup_V3, GS.OBJECT.ConfirmationPopup );
GS.OBJECT.ConfirmationPopup_V3.getInstance = function () {
    if ( !MANAGER.__instance_confirmation_popup_V3 ) {
        MANAGER.__instance_confirmation_popup_V3 = new GS.OBJECT.ConfirmationPopup_V3();
    }
    return MANAGER.__instance_confirmation_popup_V3;
};
MANAGER.__instance_confirmation_popup      = new GS.OBJECT.ConfirmationPopup();
GS.OBJECT.DataHistoric                     = function () {
    this.init();
};
GS.OBJECT.DataHistoric.prototype           = {
    init               : function () {
        this._original = null;
        this.resetPreviews();
    },
    resetPreviews      : function () {
        this._valid_previewing = [];
        this.resetInvalidPreview();
    },
    resetInvalidPreview: function () {
        this._invalid_preview = null;
    },
    getLastValid       : function () {
        if ( this._invalid_preview ) {
            this.resetInvalidPreview();
            if ( this.hasValidPreview() ) {
                return this._valid_previewing[ this._valid_previewing.length - 1 ];
            }
            return this._original;
        }
        if ( this.hasValidPreview() ) {
            this._valid_previewing.pop();
            if ( this.hasValidPreview() ) {
                return this._valid_previewing[ this._valid_previewing.length - 1 ];
            }
        }
        return this._original;
    },
    hasValidPreview    : function () {
        return this._valid_previewing.length;
    },
    setOriginal        : function ( to_set ) {
        this._original = new GS.OBJECT.DataEntryHistoric( to_set );
    },
    getOriginal        : function () {
        return this._original;
    },
    addValidPreview    : function ( to_add ) {
        this.resetInvalidPreview();
        this._valid_previewing.push( new GS.OBJECT.DataEntryHistoric( to_add ) );
    },
    setInvalidPreview  : function ( to_set ) {
        this._invalid_preview = to_set;
    }
};
GS.OBJECT.DataEntryHistoric                = function ( data ) {
    this.init( data );
};
GS.OBJECT.DataEntryHistoric.prototype      = {
    init      : function ( data ) {
        this.setData( data );
    },
    getData   : function () {
        return this.data;
    },
    setData   : function ( to_set ) {
        this.data = to_set;
    },
    updateData: function ( to_add ) {
        var _keys = Object.keys( to_add );
        var _current_key;
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key              = _keys[ i ];
            this.data[ _current_key ] = to_add[ _current_key ];
        }
    }
};
GS.OBJECT.DefaultConfiguration             = function ( default_configuration ) {
    this.init( default_configuration );
};
GS.OBJECT.DefaultConfiguration.prototype   = {
    init                        : function ( default_configuration ) {
        this.initInternal();
        this.updateData( default_configuration );
    },
    initInternal                : function () {
        this.own_children_keys     = [];
        this.own_property_keys     = [];
        this.unknown_property_keys = [];
        this.initMessages();
        this.initCounterCommon();
    },
    initMessages                : function () {
        this.messages = this.getObjectMessagesConstructor();
    },
    getValidOwnProperty         : function ( property_name ) {
        if ( typeof this.valid_own_property === "undefined" ) {
            this.valid_own_property = this._getValidOwnProperty();
        }
        if ( property_name ) {
            return this.valid_own_property.getParameter( property_name );
        }
        return this.valid_own_property;
    },
    _getValidOwnProperty        : function () {
        return false;
    },
    parseValidOwnPropertyToKey  : function () {
        let own_property = this._getValidOwnProperty();
        if ( !own_property ) {
            return [];
        }
        return own_property.getKeys();
    },
    getValidOwnChildren         : function () {
        if ( typeof this.valid_own_children === "undefined" ) {
            this.valid_own_children = this._getValidOwnChildren();
        }
        return this.valid_own_children;
    },
    _getValidOwnChildren        : function () {
        return false;
    },
    _getObjectToJson            : function ( format_data__20241115 ) {
        var _valid_own_property = this.getValidOwnProperty() ? this.getValidOwnProperty().getKeys() : false;
        var _to_add             = _valid_own_property || this.own_property_keys || [];
        var to_return           = {};
        for ( var i = 0, _size_i = _to_add.length; i < _size_i; i++ ) {
            if ( typeof this[ _to_add[ i ] ] === 'undefined' ) {
                continue;
            }
            to_return[ _to_add[ i ] ] = this[ _to_add[ i ] ].getObjectToJson( format_data__20241115 );
        }
        return to_return;
    },
    getDefaultValueLabel        : function () {
        return "default";
    },
    setDataAsUnknownProperty    : function ( key, value ) {
        this[ key ] = this.getObjectParamConstructor( key, value );
        this[ key ].setCountersParent( this );
        this.unknown_property_keys.push( key );
    },
    getObjectParamConstructor   : function ( key, value, parameter, default_value ) {
        return new GS.OBJECT.Param( key, value, parameter, default_value );
    },
    getObjectMessagesConstructor: function () {
        return new GS.OBJECT.MessagesConfig();
    },
    isObjectParamConstructor    : function ( value_object ) {
        return value_object instanceof GS.OBJECT.Param;
    },
    setIsNotTheExpectedObject   : function ( key, value_object ) {
        if ( !this.not_valid_format_property ) {
            this.not_valid_format_property = {};
        }
        this.not_valid_format_property[ key ] = this.isObjectParamConstructor( value_object ) ? value_object : this.getObjectParamConstructor( key, value_object );
        this._setIsNotTheExpectedObject();
    },
    _setIsNotTheExpectedObject  : function ( key, value ) {
    },
    updateData                  : function ( data ) {
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
    setMessageValidation        : function ( value ) {
        this.setMessages( value );
    },
    setData                     : function ( key, value ) {
        return this._setData( key, value );
    },
    setDataKey                  : function ( key, value ) {
        this[ key ] = this.getObjectParamConstructor( key, value );
        this[ key ].setCountersParent( this );
        GS.TOOLS.ARRAY.addElement( this.own_property_keys, key );
    },
    _setData                    : function ( key, value ) {
        switch ( key ) {
            case GS.OBJECT.CONST.VALIDATION.FIELD.MESSAGES:
                this.setMessages( value );
                break;
            default:
                if ( typeof value === 'object' && value !== null && value !== undefined ) {
                    if ( !this._setDataDefaultObject( key, value ) ) {
                        this.setDataAsUnknownProperty( key, value );
                    }
                    this.own_children_keys.push( key );
                }
                else {
                    this.setValueDefault( key, value );
                }
                break;
        }
    },
    _setDataDefaultObject       : function ( key, value ) {
        this[ key ] = new GS.OBJECT.DefaultConfiguration( value );
        this[ key ].setCountersParent( this );
        return true;
    },
    setValueDefault             : function ( key, value ) {
        this[ key ]               = new this.getObjectParamConstructor( key, {} );
        this[ key ].user_value    = value;
        var _valid_own_properties = this.getValidOwnProperty();
        if ( _valid_own_properties ) {
            var _parameter = _valid_own_properties.getParameter( key );
            if ( !_parameter ) {
                var _valid_own_own_children_keys = this.getValidOwnChildren();
                if ( _valid_own_own_children_keys && GS.TOOLS.ARRAY.contains( _valid_own_own_children_keys.getKeys(), key ) ) {
                    this.setIsNotTheExpectedObject( key, this[ key ] );
                }
                else {
                    this.unknown_property_keys.push( key );
                }
                return;
            }
            else {
                this.changeToDefaultValueIfNeeded( key, value, _parameter );
            }
        }
        GS.TOOLS.ARRAY.addElement( this.own_property_keys, key );
    },
    changeToDefaultValueIfNeeded: function ( key, value, parameter ) {
        if ( value && value !== "" ) {
            return;
        }
        if ( parameter.is_mandatory ) {
            return;
        }
        if ( parameter.validation_value && !GS.TOOLS.ARRAY.contains( parameter.validation_value, this.getDefaultValueLabel() ) ) {
            return;
        }
        this[ key ].setValue( this.getDefaultValueLabel() );
        this[ key ].setUserValue( this.getDefaultValueLabel() );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.DefaultConfiguration, GS.OBJECT.CounterInterfaceValidation );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.DefaultConfiguration, GS.OBJECT.GsObjectJson );
GS.OBJECT.DefaultConfigurationWithOwnProperty           = function ( data ) {
    this.init( data );
};
GS.OBJECT.DefaultConfigurationWithOwnProperty.prototype = {
    _setDataDefaultObject           : function ( key, value_object ) {
        var _current = this.getValidOwnChildren().getConfigurationChild( key );
        if ( _current ) {
            if ( this[ key ] ) {
                this[ key ].updateData( value_object );
            }
            else if ( typeof value_object === "undefined" ) {
                this[ key ] = eval( "new " + _current.class_constructor + "({})" );
            }
            else {
                this[ key ] = eval( "new " + _current.class_constructor + "(value_object)" );
            }
            if ( _current.extra_action ) {
                eval( "this[ key ]." + _current.extra_action );
            }
            GS.TOOLS.ARRAY.addElement( this.own_children_keys, key );
            this[ key ].setCountersParent( this );
            return true;
        }
        return false;
    },
    _getValidOwnProperty            : function () {
        return new SHINKEN_VALIDATION.Parameters();
    },
    _getValidOwnChildren            : function () {
        return new GS.OBJECT.DefaultConfigurationChildren();
    },
    getChildrenObject               : function () {
        var _to_return             = [];
        var _own_own_children_keys = this._getValidOwnChildren().getKeys();
        var _to_add                = null;
        for ( var i = 0, _size_i = _own_own_children_keys.length; i < _size_i; i++ ) {
            _to_add = this.getChild( _own_own_children_keys[ i ] );
            if ( _to_add ) {
                _to_return.push( _to_add );
            }
        }
        return _to_return;
    },
    getChildrenObjectDict           : function () {
        var _to_return             = {};
        var _own_own_children_keys = this._getValidOwnChildren().getKeys();
        var _to_add                = null;
        for ( var i = 0, _size_i = _own_own_children_keys.length; i < _size_i; i++ ) {
            _to_add = this.getChild( _own_own_children_keys[ i ] );
            if ( _to_add ) {
                _to_return[ _own_own_children_keys[ i ] ] = _to_add;
            }
        }
        return _to_return;
    },
    getChild                        : function ( key ) {
        if ( !this[ key ] || typeof this[ key ] === 'string' ) {
            this._setDataDefaultObject( key );
        }
        return this[ key ];
    },
    getValue                        : function ( key ) {
        if ( !this[ key ] ) {
            this.setValueDefault( key );
        }
        return this[ key ].getValue();
    },
    getBooleanValue                 : function ( key ) {
        return GS.TOOLS.BOOLEAN.parseToBoolean( this.getValue( key ) );
    },
    isValid                         : function ( key ) {
        if ( !this[ key ] ) {
            this.setValueDefault( key );
        }
        return !this[ key ].hasCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
    },
    setDataKey                      : function ( key, value ) {
        this[ key ] = this.getObjectParamConstructor( key, value, this.getValidOwnProperty().getParameter( key ), this.getDefaultValueLabel(), this.is_belonging_to_grid_cell_object );
        this[ key ].setCountersParent( this );
        GS.TOOLS.ARRAY.addElement( this.own_property_keys, key );
    },
    getDataToSave                   : function () {
        var _to_return = {};
        if ( this.unknown_property_keys ) {
            for ( let i = 0, _size_i = this.unknown_property_keys.length; i < _size_i; i++ ) {
                _to_return[ this.unknown_property_keys[ i ] ] = this[ this.unknown_property_keys[ i ] ].getDataToSave();
            }
        }
        for ( let i = 0, _size_i = this.own_property_keys.length; i < _size_i; i++ ) {
            _to_return[ this.own_property_keys[ i ] ] = this[ this.own_property_keys[ i ] ].getDataToSave();
        }
        for ( let i = 0, _size_i = this.own_children_keys.length; i < _size_i; i++ ) {
            _to_return[ this.own_children_keys[ i ] ] = this[ this.own_children_keys[ i ] ].getDataToSave();
        }
        return _to_return;
    },
    getDataForLastModification      : function ( params ) {
        return this.getDataForLastModificationCommon( params );
    },
    getDataForLastModificationCommon: function ( params ) {
        let _to_return = {};
        let param_list = params ? params[ GS.OBJECT.CONST.PARAM.PARAM_EVENT.PARAM_LIST_KEY ] : false;
        if ( param_list ) {
            for ( let i = 0, _size_i = param_list.length; i < _size_i; i++ ) {
                _to_return[ param_list[ i ] ] = this[ param_list[ i ] ].getDataForLastModification();
            }
        }
        else {
            for ( let i = 0, _size_i = this.own_property_keys.length; i < _size_i; i++ ) {
                _to_return[ this.own_property_keys[ i ] ] = this[ this.own_property_keys[ i ] ].getDataForLastModification();
            }
            for ( let i = 0, _size_i = this.own_children_keys.length; i < _size_i; i++ ) {
                _to_return[ this.own_children_keys[ i ] ] = { [ GS.OBJECT.CONST.PARAM.VALUE ]: this[ this.own_children_keys[ i ] ].getDataForLastModification() };
            }
        }
        return _to_return;
    },
    getAllObjectWithMessages        : function () {
        var to_return = [];
        if ( this.messages && this.messages.hasStatus() ) {
            to_return.push( this );
        }
        var _current;
        for ( var i = 0, _size_i = this.own_property_keys.length; i < _size_i; i++ ) {
            _current = this[ this.own_property_keys[ i ] ];
            if ( _current.messages && _current.messages.hasStatus() ) {
                to_return.push( _current );
            }
        }
        for ( var j = 0, _size_j = this.own_children_keys.length; j < _size_j; j++ ) {
            to_return = GS.TOOLS.ARRAY.concat( to_return, this[ this.own_children_keys[ j ] ].getAllObjectWithMessages() );
        }
        if ( this.unknown_property_keys ) {
            for ( let i = 0, _size_i = this.unknown_property_keys.length; i < _size_i; i++ ) {
                if ( this[ this.unknown_property_keys[ i ] ].messages && this[ this.unknown_property_keys[ i ] ].messages.hasStatus() ) {
                    to_return.push( this[ this.unknown_property_keys[ i ] ] );
                }
            }
        }
        return to_return;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.DefaultConfigurationWithOwnProperty, GS.OBJECT.DefaultConfiguration );
GS.OBJECT.DefaultConfigurationChildren           = function ( parameters ) {
    this.content = [];
    if ( parameters ) {
        this.init( parameters );
    }
};
GS.OBJECT.DefaultConfigurationChildren.prototype = {
    init                 : function ( parameters ) {
        for ( var i = 0, _size_i = parameters.length; i < _size_i; i++ ) {
            this.content.push( new GS.OBJECT.DefaultConfigurationChild( parameters[ i ] ) );
        }
    },
    getConfigurationChild: function ( key ) {
        for ( var i = 0, _size_i = this.content.length; i < _size_i; i++ ) {
            if ( this.content[ i ].key === key ) {
                return this.content[ i ];
            }
        }
        return null;
    },
    getKeys              : function () {
        return GS.TOOLS.ARRAY.extractKey( this.content, 'key' );
    },
    getContent           : function () {
        return this.content;
    }
};
GS.OBJECT.DefaultConfigurationChild              = function ( args ) {
    this.key               = args[ 0 ];
    this.class_constructor = args[ 1 ];
    this.extra_action      = args[ 2 ];
};
GS.OBJECT.DefaultConfigurationChild.prototype    = {};
OBJECT.ElementCheckbox                           = function ( dom_element, parent ) {
    this.uuid = SERVICE.STRING.buildUUID();
    this.init( dom_element, parent );
};
OBJECT.ElementCheckbox.prototype                 = {
    init           : function ( dom_element, parent ) {
        this.initCounters( parent );
        this.dom_element = dom_element;
        if ( this.dom_element ) {
            this.is_checked = dom_element.classList.contains( 'gs-checked' );
        }
        this.computeCounters();
    },
    setChecked     : function ( to_set ) {
        if ( to_set === '0' ) {
            to_set = false;
        }
        this.is_checked = !!to_set;
        this.updateView();
    },
    getValue       : function () {
        return this.is_checked ? '1' : '0';
    },
    isChecked      : function () {
        return this.is_checked;
    },
    computeCounters: function () {
        if ( !this.dom_element ) {
            return;
        }
        var _number_error   = this.dom_element.classList.contains( "gs-error" ) ? 0 : 0;
        var _number_warning = this.dom_element.classList.contains( "gs-warning" ) ? 0 : 0;
        this.getCounterError().update( this.uuid, _number_error );
        this.getCounterWarning().update( this.uuid, _number_warning );
    },
    updateView     : function () {
        if ( this.is_checked ) {
            this.dom_element.classList.add( 'gs-checked' );
        }
        else {
            this.dom_element.classList.remove( 'gs-checked' );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( OBJECT.ElementCheckbox, GS.OBJECT.CounterInterface );
OBJECT.ElementList                 = function () {
    this.init();
};
OBJECT.ElementList.prototype       = {
    init                 : function () {
        this.is_disabled = false;
        this.is_useless  = false;
    },
    getName              : function () {
        return this.name;
    },
    getUUID              : function () {
        return this.getName();
    },
    getState             : function () {
        return this.state;
    },
    getType              : function () {
        return this.type;
    },
    getItemType          : function () {
        return this.item_type ? this.item_type : '';
    },
    getLabel             : function () {
        return this.label;
    },
    setName              : function ( to_set, dom_element ) {
        this.name = to_set;
        this.setLabel( to_set, dom_element );
    },
    setLabel             : function ( to_set ) {
        if ( this.canHaveXssFailure ) {
            this.label = GS.TOOLS.STRING.cleanXss( to_set );
        }
        else {
            this.label = to_set;
        }
    },
    setState             : function ( to_set ) {
        this.state = to_set;
    },
    setIsDisabled        : function ( to_set ) {
        if ( to_set === 'false' ) {
            to_set = false;
        }
        this.is_disabled = !!to_set;
    },
    setIsUseless         : function ( to_set ) {
        if ( to_set === 'false' ) {
            to_set = false;
        }
        this.is_useless = !!to_set;
    },
    setIsForceToNull     : function ( to_set ) {
        if ( to_set === 'false' ) {
            to_set = false;
        }
        this.is_force_to_null = !!to_set;
    },
    setIsHiddenForAdminSi: function ( to_set ) {
        if ( to_set === 'false' ) {
            to_set = false;
        }
        this.is_hidden_for_admin_si = !!to_set;
    },
    setIsLock            : function ( to_set ) {
        this.is_lock = to_set;
    },
    setErrorMessage      : function ( to_set ) {
        this.error_message = to_set;
    },
    setUUID              : function ( to_set ) {
        this.uuid = to_set;
        this.findShinkenElement();
    },
    findShinkenElement   : function () {
        if ( this.uuid && this.item_type ) {
            var _shinken_element = MANAGER.__instance_element_distributor.getElementByDict( this );
            if ( _shinken_element ) {
                this.setShinkenElement( _shinken_element );
            }
        }
    },
    setShinkenElement    : function ( to_set ) {
        this.shinken_element = to_set;
    },
    setType              : function ( to_set ) {
        this.type = to_set;
    },
    setItemType          : function ( to_set ) {
        this.item_type = to_set;
        this.findShinkenElement();
    },
    clone                : function () {
        var _to_return = new OBJECT.ElementList();
        var _keys      = Object.keys( this );
        var _current_key;
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key               = _keys[ i ];
            _to_return[ _current_key ] = this[ _current_key ];
        }
        return _to_return;
    },
    getClass             : function () {
        var _to_return = "";
        if ( this.state === COMPONENT.CONST.TAG.STATE.NEW ) {
            _to_return += " gs-element-new";
        }
        else if ( this.state === COMPONENT.CONST.TAG.STATE.UNKNOWN ) {
            _to_return += " gs-element-unknown";
        }
        else if ( this.is_disabled ) {
            _to_return += " gs-element-disabled";
        }
        return _to_return;
    },
    getError             : function () {
        if ( this.state === COMPONENT.CONST.TAG.STATE.UNKNOWN ) {
            return 1;
        }
        if ( this.state === COMPONENT.CONST.TAG.STATE.NEW ) {
            return 1;
        }
        if ( this.state === COMPONENT.CONST.TAG.STATE.IT_SELF ) {
            return 1;
        }
        if ( this.is_disabled ) {
            return 1;
        }
        if ( this.is_lock ) {
            return 1;
        }
        return 0;
    },
    getTooltip           : function () {
        var _to_return = "";
        if ( this.is_useless ) {
            switch ( this.type ) {
                case 'user' :
                    _to_return = _( 'element.tooltip_edition_contact_not_expert' );
                    break;
            }
        }
        if ( this.is_disabled ) {
            if ( _to_return ) {
                _to_return += "<br>";
            }
            _to_return += _( 'element.tooltip_disabled' );
        }
        switch ( this.state ) {
            case COMPONENT.CONST.TAG.STATE.NEW :
            case COMPONENT.CONST.TAG.STATE.OVERRIDE_NEW :
                if ( this.is_disabled ) {
                    _to_return = _( 'element.tooltip_new_disabled' );
                }
                else {
                    _to_return = _( 'element.tooltip_new' );
                }
                break;
            case COMPONENT.CONST.TAG.STATE.WORKING :
                if ( this.is_disabled ) {
                    _to_return = _( 'element.tooltip_working_disabled' );
                }
                else {
                    _to_return = _( 'element.tooltip_working' );
                }
                break;
            case COMPONENT.CONST.TAG.STATE.UNKNOWN :
            case COMPONENT.CONST.TAG.STATE.OVERRIDE_UNKNOWN :
                _to_return = _( 'element.tooltip_undefined' );
                break;
            case COMPONENT.CONST.TAG.STATE.IT_SELF :
                _to_return = _( 'element.tooltip_it_self' );
                break;
        }
        if ( this.is_force_to_null ) {
            if ( _to_return ) {
                _to_return += "<br>";
            }
            _to_return += GS.TOOLS.STRING.format( _( 'element.double_link_long_warning' ), this.getLabel() );
        }
        return _to_return;
    },
    getValueFinal        : function () {
        var _to_return = {};
        switch ( this.getState() ) {
            case OBJECT.CONST.TEMPLATE.STATUS.UNKNOWN:
            case OBJECT.CONST.TEMPLATE.STATUS.NEW:
            case COMPONENT.CONST.TAG.STATE.UNKNOWN:
            case COMPONENT.CONST.TAG.STATE.NEW:
                _to_return.name   = this.name;
                _to_return.exists = false;
                break;
            default:
                _to_return.name      = this.name;
                _to_return.item_type = this.getItemType();
                _to_return._id       = this.uuid;
                _to_return.exists    = true;
                break;
        }
        return _to_return;
    }
};
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
GS.OBJECT.MessagesConfig           = function () {
    this.init();
};
GS.OBJECT.MessagesConfig.prototype = {
    init            : GS.OBJECT.Messages.prototype.init,
    getUUID         : function () {
        if ( !this.uuid ) {
            this.uuid = SERVICE.STRING.buildUUID();
        }
        return this.uuid;
    },
    addMessage      : function ( type_message, object_message ) {
        switch ( type_message ) {
            case COMPONENT.CONST.STATUS.ERROR:
                this.messages_error.push( new GS.OBJECT.MessageConfig( type_message, object_message, this.getUUID() ) );
                break;
            case COMPONENT.CONST.STATUS.WARNING:
                this.messages_warning.push( new GS.OBJECT.MessageConfig( type_message, object_message, this.getUUID() ) );
                break;
            case COMPONENT.CONST.STATUS.BEWARE:
                this.messages_beware.push( new GS.OBJECT.MessageConfig( type_message, object_message, this.getUUID() ) );
                break;
            default:
                this.messages_info.push( new GS.OBJECT.MessageConfig( type_message, object_message, this.uuid ) );
                break;
        }
    },
    _getObjectToJson: function ( format_data__20241115 ) {
        const _to_return         = {};
        _to_return.contents      = [];
        _to_return.with_list_key = [];
        const _messages          = this.getAllMessages();
        let _current;
        for ( let i = 0, _size_i = _messages.length; i < _size_i; i++ ) {
            _current = _messages[ i ]._getObjectToJson( format_data__20241115 );
            if ( _current.list_keys ) {
                _to_return.with_list_key.push( _to_return.contents.push( _current ) - 1 );
            }
            else {
                _to_return.contents.push( _current );
            }
        }
        return _to_return;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.MessagesConfig, GS.OBJECT.Messages );
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
GS.OBJECT.MessageConfig           = function ( type, object_message, uuid ) {
    this._type       = type;
    this._text       = object_message.text;
    this._list_keys  = object_message.list_keys;
    this.parent_uuid = uuid;
};
GS.OBJECT.MessageConfig.prototype = {
    buildHtml       : function () {
        let _to_return = SERVICE.DOM.createElement( "li", { class: this._type } );
        let _table     = SERVICE.DOM.createElement( "table", { class: "gs-table" } );
        let _tr        = SERVICE.DOM.createElement( "tr" );
        let _td_1      = SERVICE.DOM.createElement( "td", { class: "gs-text-cell" }, "<div>" + this._text + "</div>" );
        SERVICE.DOM.addElementTo( _table, _to_return );
        SERVICE.DOM.addElementTo( _tr, _table );
        SERVICE.DOM.addElementTo( _td_1, _tr );
        
        if ( this._list_keys !== "__SHINKEN_NONE__" ) {
            let _td_2 = SERVICE.DOM.createElement( "td", { class: "gs-json-link-cell" } );
            let param = { [ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ]: this.parent_uuid };
            let _link = SERVICE.DOM.createElement( "span", {
                class: "gs-data-user gs-json-link", onclick: "MANAGER.EventManagerV2.doActionAfter(event, 'focus-on-anchor-json', " + GS.TOOLS.DICT.parseToHTMLParam( param ) + ")"
            }, 'JSON' );
            SERVICE.DOM.addElementTo( _td_2, _tr );
            SERVICE.DOM.addElementTo( _link, _td_2 );
        }
        return _to_return.outerHTML;
    },
    getCategory     : function () {
        return this._category;
    },
    _getObjectToJson: function ( format_data__20241115 ) {
        let _to_return     = {};
        _to_return.uuid    = this.parent_uuid;
        _to_return.tooltip = this._text;
        switch ( this._type ) {
            case COMPONENT.CONST.STATUS.ERROR:
            case COMPONENT.CONST.STATUS.WARNING:
                _to_return.class = GS.OBJECT.JSON_EDITOR.CLASS_ERROR;
                break;
        }
        return _to_return;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.MessageConfig, GS.OBJECT.Message );
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
GS.OBJECT.NOTIFICATION.Container           = function () {
    this.__class_name__ = 'GS.OBJECT.NOTIFICATION.CONTAINER';
    this.dom_element    = null;
    this.notifications  = null;
};
GS.OBJECT.NOTIFICATION.Container.prototype = {
    init: function () {
        this.notifications = [];
    },
    
    addNotification            : function ( message, status, element_to_bind_with, notification_placement, time_before_remove, skip_close ) {
        if ( !this.dom_element ) {
            this.createNotificationContainer( skip_close );
        }
        var _user_notification = new GS.OBJECT.NOTIFICATION.User();
        
        this.cleanAllNotification();
        _user_notification.init();
        _user_notification.createNotification( message, status, skip_close );
        _user_notification.setTimerToCloseNotification( this.dom_element, time_before_remove );
        if ( element_to_bind_with ) {
            _user_notification.bindToElement( element_to_bind_with, notification_placement );
        }
        this.notifications.push( _user_notification );
        SERVICE.DOM.addElementTo( _user_notification.dom_element, this.dom_element );
        return _user_notification;
    },
    addNotificationStyled      : function ( message, status, styles, time_before_remove ) {
        var _user_notification = this.addNotification( message, status );
        
        if ( styles ) {
            _user_notification.addStyles( styles );
        }
    },
    createNotificationContainer: function ( skip_close ) {
        if ( !skip_close ) {
            this.dom_element = SERVICE.DOM.createElement( "div", { id: "id-gs-notification-popup-container" } );
            document.body.appendChild( this.dom_element );
        }
        else {
            this.dom_element = SERVICE.DOM.createElement( "div", { id: "id-gs-notification-popup-container", "onclick": "this.firstChild.classList.add('gs-removed');event.stopPropagation();" } );
            document.body.appendChild( this.dom_element );
        }
        
    },
    cleanAllNotification       : function () {
        SERVICE.DOM.empty( this.dom_element );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.NOTIFICATION.Container, GS.OBJECT.GsObject );
GS.OBJECT.VisualNotificationOfChange                     = function ( data ) {
    this.init( data );
};
GS.OBJECT.VisualNotificationOfChange.prototype           = {
    init                      : function ( data ) {
        this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.BLINK ] = new GS.OBJECT.BlinkNotificationOfChange();
        if ( data ) {
            this.updateData( data );
        }
    },
    doActionAfter             : function ( event_name, param ) {
        this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.BLINK ].doActionAfter( event_name, param );
    },
    updateData                : function ( data ) {
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.setData( _currentKey, data[ _currentKey ] );
        }
    },
    setData                   : function ( key, value ) {
        switch ( key ) {
            case "value":
                var _keys = Object.keys( value );
                var _current_key;
                for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
                    this.setData( _keys[ i ], value[ _keys[ i ] ] );
                }
                break;
            case GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.BLINK:
                this[ key ].updateData( value );
                break;
        }
    },
    getBlinkValue             : function () {
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.BLINK ].getValue();
    },
    getBlinkDomElement        : function () {
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.BLINK ].getDomElement();
    },
    getDataToSave             : function () {
        var _to_return                                                   = {};
        _to_return[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.BLINK ] = this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.BLINK ].getDataToSave();
        return _to_return;
    },
    isBlinkNotificationEnabled: function () {
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.BLINK ].isEnabled();
    }
};
GS.OBJECT.VisualNotificationOfChange__fromData           = function ( data ) {
    this.init( data );
};
GS.OBJECT.VisualNotificationOfChange__fromData.prototype = {
    init: function ( data ) {
        this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.BLINK ] = new GS.OBJECT.BlinkNotificationOfChange__fromData( data );
        if ( data ) {
            this.updateData( data );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.VisualNotificationOfChange__fromData, GS.OBJECT.VisualNotificationOfChange );
GS.OBJECT.BlinkNotificationOfChange           = function ( data ) {
    this.init( data );
};
GS.OBJECT.BlinkNotificationOfChange.prototype = {
    init               : function ( data ) {
        if ( data ) {
            this.updateData( data );
        }
    },
    doActionAfterCommun: function ( event_name, param ) {
        switch ( event_name ) {
            case "init_phase":
                this.doActionAfter( "reset_object" );
                this.initPhase();
                break;
            case "init_with_dom_element":
                if ( this.getDomElement() ) {
                    return;
                }
                if ( !param ) {
                    return;
                }
                this.setDomElement( param.querySelector( ".gs-blink-notification-container" ) );
                this.setPhaseDomElement( param, "blinkNotification" );
                break;
            case "change_value_notification_of_change_visual_blink":
                this.setData( GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED, param );
                break;
            case "notification-configuration-set-dom-element-with-data":
                this.updateHtmlWithData();
                break;
            case "shinken_view_has_disabled_blink_notification":
                this.setPhase( GS.OBJECT.CONST.PHASE.HIDDEN );
                break;
            case "play_blink_notification":
                this.setPhase( GS.OBJECT.CONST.PHASE.RUNNING );
                break;
            case "user_has_disabled_blink_notification":
                this.setPhase( GS.OBJECT.CONST.PHASE.DISCREET_USER );
                break;
            case "set_phase_blink_depending_number_of_change":
                this.setPhase( param ? GS.OBJECT.CONST.PHASE.READY : GS.OBJECT.CONST.PHASE.STOPPING );
                break;
            case "ask_play_notification_visual_blink":
                this.setPhaseIfPhase( GS.OBJECT.CONST.PHASE.RUNNING, GS.OBJECT.CONST.PHASE.READY );
                break;
            case "reset_object":
                this.setDomElement();
                break;
            case "click_done":
                break;
        }
    },
    doActionAfter      : function ( event_name, param ) {
        this.doActionAfterCommun( event_name, param );
    },
    getValue           : function () {
        if ( this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED ] === undefined ) {
            return GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.VALUE.DEFAULT;
        }
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED ];
    },
    updateData         : function ( data ) {
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.setData( _currentKey, data[ _currentKey ] );
        }
    },
    setData            : function ( key, value ) {
        switch ( key ) {
            case "value":
                var _keys = Object.keys( value );
                var _current_key;
                for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
                    this.setData( _keys[ i ], value[ _keys[ i ] ] );
                }
                break;
            case GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED:
                if ( typeof value === "object" ) {
                    this[ key ] = value.value;
                }
                else {
                    this[ key ] = value;
                }
                break;
        }
    },
    getDataToSave      : function () {
        var _to_return                                                     = {};
        _to_return[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED ] = this.getValue();
        return _to_return;
    },
    callbackForPhase   : function () {
        var _current = this.getCurrentPhase();
        this.setTooltipHtml( "" );
        switch ( _current ) {
            case GS.OBJECT.CONST.PHASE.RUNNING:
                this.setPhaseWithTimeOut( GS.OBJECT.CONST.PHASE.READY, 3000 );
                break;
            case GS.OBJECT.CONST.PHASE.DISCREET_USER:
                this.setTooltipHtml( _( "notification.blink_user_warning", [DICTIONARY_COMMON_UI] ) );
                break;
            case GS.OBJECT.CONST.PHASE.STOPPING:
                this.setTooltipHtml( _( "notification.no_change", [DICTIONARY_COMMON_UI] ) );
                break;
            default:
                break;
        }
    },
    updateHtmlWithData : function () {
        var _dom     = document.querySelector( "#gs-modal-container #visual-blink-" + this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED ] );
        _dom.checked = true;
    },
    isEnabled          : function () {
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED ] === true;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.BlinkNotificationOfChange, GS.OBJECT.PhaseInterface );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.BlinkNotificationOfChange, GS.OBJECT.GsObjectHtml );
GS.OBJECT.BlinkNotificationOfChange__fromData           = function ( data ) {
    this.init( data );
};
GS.OBJECT.BlinkNotificationOfChange__fromData.prototype = {
    init         : function () {
        this.button = new COMPONENT.ButtonFromData_V3( "ask_play_notification_visual_blink", SERVICE.DOM.cloneElement( document.querySelector( '#id-gs-template-view .gs-blink-icon' ) ).outerHTML );
        this.button.addClass( "gs-notification-content" );
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "init_phase_with_dom_element":
                this.computeHtml();
                this.setPhaseDomElement( param, "blinkNotification" );
                break;
        }
        this.doActionAfterCommun( event_name, param );
    },
    computeHtml  : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-blink-notification-container gs-notification-container" } ) );
        SERVICE.DOM.addTooltip( this.getDomElement(), { "shi-tip-html": "" } );
        this.button.computeHtml();
        SERVICE.DOM.addElementTo( this.button.getDomElement(), this.getDomElement() );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.BlinkNotificationOfChange__fromData, GS.OBJECT.BlinkNotificationOfChange );
GS.OBJECT.VolumeNotificationOfChange                   = function ( data ) {
    this.init( data );
};
GS.OBJECT.VolumeNotificationOfChange.prototype         = {
    init              : function ( data ) {
        if ( data ) {
            this.updateData( data );
        }
    },
    doActionAfter     : function ( event_name, param ) {
        switch ( event_name ) {
            case "notification-configuration-set-dom-element-with-data":
                this.updateHtmlWithData();
                break;
            case "change_value_notification_of_change_sound":
                this.setData( GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VOLUME, param );
                break;
        }
    },
    getValue          : function () {
        if ( this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VOLUME ] === undefined ) {
            return GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.VALUE.DEFAULT;
        }
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VOLUME ];
    },
    updateData        : function ( data ) {
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.setData( _currentKey, data[ _currentKey ] );
        }
    },
    setData           : function ( key, value ) {
        switch ( key ) {
            case GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VOLUME:
                this[ key ] = value;
                break;
        }
    },
    getDataToSave     : function () {
        var _to_return                                                    = {};
        _to_return[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VOLUME ] = this.getValue();
        return _to_return;
    },
    updateHtmlWithData: function () {
        var _dom     = document.querySelector( "#gs-modal-container #sound-" + this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED ] );
        _dom.checked = true;
    },
    isEnabled         : function () {
        return this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.ENABLED ] === true;
    }
};
GS.OBJECT.NotificationsOfChangeDefaultValues           = function ( data ) {
    this.init( data );
};
GS.OBJECT.NotificationsOfChangeDefaultValues.prototype = {
    init                     : function ( data ) {
        this.users  = new GS.OBJECT.NotificationsOfChangeUser();
        this.hives  = new GS.OBJECT.NotificationsOfChangeView();
        this.lists  = new GS.OBJECT.NotificationsOfChangeView();
        this.events = new GS.OBJECT.NotificationsOfChangeView();
        if ( data ) {
            this.updateData( data );
        }
    },
    updateData               : function ( data ) {
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.setData( _currentKey, data[ _currentKey ] );
        }
    },
    setData                  : function ( key, value ) {
        switch ( key ) {
            case "default_notifications_settings__event_container__visual__blink__enabled":
                this.events.doActionAfter( "change_value_notification_of_change_visual_blink", value );
                break;
            case "default_notifications_settings__event_container__sound__enabled":
                this.events.doActionAfter( "change_value_notification_of_change_sound", value );
                break;
            case "default_notifications_settings__hives__visual__blink__enabled":
                this.hives.doActionAfter( "change_value_notification_of_change_visual_blink", value );
                break;
            case "default_notifications_settings__hives__sound__enabled":
                this.hives.doActionAfter( "change_value_notification_of_change_sound", value );
                break;
            case "default_notifications_settings__lists__visual__blink__enabled":
                this.lists.doActionAfter( "change_value_notification_of_change_visual_blink", value );
                break;
            case "default_notifications_settings__lists__sound__enabled":
                this.lists.doActionAfter( "change_value_notification_of_change_sound", value );
                break;
            case "default_notifications_settings__users__sound__volume_percent":
                this.users.doActionAfter( "change_value_notification_of_change_sound", value );
                break;
            case "default_notifications_settings__users__visual__blink__enabled":
                this.users.doActionAfter( "change_value_notification_of_change_visual_blink", value );
                break;
            case "users":
            case "lists":
            case "hives":
            case "events":
                this[ key ].updateData( value );
                break;
            default:
                break;
        }
    },
    computeViewSettings      : function ( shinken_view ) {
        this.computeViewSettingsVisual( shinken_view );
        shinken_view.sound_notification_of_change_enabled = this.computeViewSettingsSound( shinken_view );
    },
    computeViewSettingsVisual: function ( shinken_view ) {
        shinken_view.visual_notification_of_change_enabled = this.computeViewSettingsBlink( shinken_view );
    },
    computeViewSettingsBlink : function ( shinken_view ) {
        if ( shinken_view.bar_info.getBlinkValue() !== GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.VALUE.DEFAULT ) {
            return shinken_view.bar_info.getBlinkValue();
        }
        switch ( shinken_view.type ) {
            case "hive":
                return this.hives.getBlinkValue();
            case "list":
                return this.lists.getBlinkValue();
            case "event-tub":
                return this.events.getBlinkValue();
            default:
                console.warn( "[NotificationsOfChangeDefaultValues - computeViewSettingsBlink]", shinken_view.type, "NOT MANAGED" );
                break;
            
        }
    },
    computeViewSettingsSound : function ( shinken_view ) {
        if ( shinken_view.bar_info.getSoundValue() !== GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.VALUE.DEFAULT ) {
            return shinken_view.bar_info.getSoundValue();
        }
        switch ( shinken_view.type ) {
            case "hive":
                return this.hives.getSoundValue();
            case "list":
                return this.lists.getSoundValue();
            case "event-tub":
                return this.events.getSoundValue();
            default:
                console.warn( "[NotificationsOfChangeDefaultValues - computeViewSettingsBlink]", shinken_view.type, "NOT MANAGED" );
                break;
        }
    },
    getFlatUserVolume        : function ( notification_of_change_from_user ) {
        var _to_return = notification_of_change_from_user.getVolumeValue();
        if ( _to_return === GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.VALUE.DEFAULT ) {
            _to_return = this.getUserVolumeValue();
        }
        return _to_return;
    },
    getFlatUserBlink         : function ( notification_of_change_from_user ) {
        var _to_return = notification_of_change_from_user.getBlinkValue();
        if ( _to_return === GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.VALUE.DEFAULT ) {
            _to_return = this.getUserBlinkValue();
        }
        return _to_return;
    },
    getUserVolumeValue       : function () {
        return this.users.getVolumeValue();
    },
    getUserBlinkValue        : function () {
        return this.users.getBlinkValue();
    }
};
GS.OBJECT.NotificationsOfChangeUser                    = function ( data ) {
    this.initSpecific( data );
};
GS.OBJECT.NotificationsOfChangeUser.prototype          = {
    initSpecific: function ( data ) {
        this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.SOUND ]  = new GS.OBJECT.VolumeNotificationOfChange();
        this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VISUAL ] = new GS.OBJECT.VisualNotificationOfChange();
        this.init( data );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.NotificationsOfChangeUser, GS.OBJECT.NotificationsOfChange._interface );
GS.OBJECT.NotificationsOfChangeView           = function ( data ) {
    this.initSpecific( data );
};
GS.OBJECT.NotificationsOfChangeView.prototype = {
    initSpecific               : function ( data ) {
        this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.SOUND ]  = this.getChildConstructor__sound( data );
        this[ GS.OBJECT.NOTIFICATION.CONST.OF_CHANGE.FIELD.VISUAL ] = this.getChildConstructor__visual( data );
        this.init( data );
    },
    getChildConstructor__sound : function ( data ) {
        return new GS.OBJECT.SoundNotificationOfChange();
    },
    getChildConstructor__visual: function ( data ) {
        return new GS.OBJECT.VisualNotificationOfChange();
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.NotificationsOfChangeView, GS.OBJECT.NotificationsOfChange._interface );
GS.OBJECT.NotificationsOfChangeView__fromData           = function ( data ) {
    this.initSpecific( data );
};
GS.OBJECT.NotificationsOfChangeView__fromData.prototype = {
    initSpecific               : GS.OBJECT.NotificationsOfChangeView.prototype.initSpecific,
    getChildConstructor__sound : function () {
        return new GS.OBJECT.SoundNotificationOfChange__fromData();
    },
    getChildConstructor__visual: function () {
        return new GS.OBJECT.VisualNotificationOfChange__fromData();
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.NotificationsOfChangeView__fromData, GS.OBJECT.NotificationsOfChangeView );
GS.OBJECT.NOTIFICATION.User           = function () {
    this.__class_name__                = 'GS.OBJECT.NOTIFICATION.USER';
    this.dom_element                   = null;
    this.message                       = null;
    this.timeout_to_close_notification = null;
};
GS.OBJECT.NOTIFICATION.User.prototype = {
    init                       : function () {
    },
    createNotification         : function ( message, status, skip_close ) {
        this.createMessageDom();
        if ( !skip_close ) {
            var _cross = SERVICE.DOM.createElement( 'div', { class: "shinkon shinkon-times-bold" } );
            this.dom_element.appendChild( _cross );
            var self = this;
            _cross.addEventListener( 'click', function () {
                self.close();
            } );
        }
        this.message = message;
        
        if ( status ) {
            this.addTypeToNotification( status );
        }
        var _dom_text_notification = SERVICE.DOM.createElement( 'span', {}, this.message );
        SERVICE.DOM.addElementTo( _dom_text_notification, this.dom_element );
        
    },
    addTypeToNotification      : function ( status ) {
        var _icon = SERVICE.DOM.createElement( 'span', { 'class': "shinkon" } );
        switch ( status ) {
            case GS.OBJECT.NOTIFICATION.CONST.STATUS.ERROR:
                _icon.classList.add( 'shinkon-warning' );
                this.dom_element.classList.add( "notification-error" );
                break;
            case GS.OBJECT.NOTIFICATION.CONST.STATUS.WARNING:
                _icon.classList.add( 'shinkon-warning' );
                this.dom_element.classList.add( "notification-warning" );
                break;
            case GS.OBJECT.NOTIFICATION.CONST.STATUS.INFO:
                _icon.classList.add( 'info-circle' );
                this.dom_element.classList.add( "notification-info" );
                break;
            case GS.OBJECT.NOTIFICATION.CONST.STATUS.SUCCESS:
                _icon.classList.add( 'info-circle' );
                this.dom_element.classList.add( "notification-success" );
                break;
            case GS.OBJECT.NOTIFICATION.CONST.STATUS.COPY_SUCCESS:
                this.dom_element.classList.add( "gs-notification-copy-success" );
                break;
            case GS.OBJECT.NOTIFICATION.CONST.STATUS.COPY_FAILED:
                this.dom_element.classList.add( "gs-notification-copy-failed" );
                break;
        }
        SERVICE.DOM.addElementTo( _icon, this.dom_element );
    },
    setTimerToCloseNotification: function ( parent_element, time_before_remove ) {
        time_before_remove              = time_before_remove || 8000;
        var self                        = this;
        this.timeoutToCloseNotification = setTimeout( function () {
            self.dom_element.classList.add( "gs-removed" );
        }, time_before_remove );
    },
    bindToElement              : function ( element, notification_placement ) {
        var _size   = element.getBoundingClientRect();
        var _styles = {};
        switch ( notification_placement ) {
            case GS.OBJECT.NOTIFICATION.CONST.PLACEMENT.TOP:
                _styles[ DOM.CONST.STYLE.TOP ]  = _size[ DOM.CONST.STYLE.TOP ] - 60;
                _styles[ DOM.CONST.STYLE.LEFT ] = _size[ DOM.CONST.STYLE.LEFT ] - 50;
                break;
            case GS.OBJECT.NOTIFICATION.CONST.PLACEMENT.BOTTOM:
                _styles[ DOM.CONST.STYLE.TOP ]  = _size[ DOM.CONST.STYLE.TOP ] + 60;
                _styles[ DOM.CONST.STYLE.LEFT ] = _size[ DOM.CONST.STYLE.LEFT ] - 50;
                break;
            case GS.OBJECT.NOTIFICATION.CONST.PLACEMENT.SPECIFIC_TITLE_HIVE: // TODO Repenser le placement des notifs
                _styles[ DOM.CONST.STYLE.TOP ]  = _size[ DOM.CONST.STYLE.TOP ] + 60;
                _styles[ DOM.CONST.STYLE.LEFT ] = _size[ DOM.CONST.STYLE.LEFT ];
                break;
            case GS.OBJECT.NOTIFICATION.CONST.PLACEMENT.SPECIFIC_TITLE_LIST: // TODO Repenser le placement des notifs
                _styles[ DOM.CONST.STYLE.TOP ]  = _size[ DOM.CONST.STYLE.TOP ] + 55;
                _styles[ DOM.CONST.STYLE.LEFT ] = _size[ DOM.CONST.STYLE.LEFT ];
                break;
            case GS.OBJECT.NOTIFICATION.CONST.PLACEMENT.SPECIFIC_COPY_GRID_PAGE_JSON:
                _styles[ DOM.CONST.STYLE.TOP ]  = _size[ DOM.CONST.STYLE.TOP ] + 35;
                _styles[ DOM.CONST.STYLE.LEFT ] = _size[ DOM.CONST.STYLE.LEFT ] - 20;
                break;
            case GS.OBJECT.NOTIFICATION.CONST.PLACEMENT.COPY_NOTIFICATION_SUCCESS: // TODO Repenser le placement des notifs
                _styles[ DOM.CONST.STYLE.TOP ] = _size[ DOM.CONST.STYLE.TOP ] - 35;
                if ( _styles[ DOM.CONST.STYLE.TOP ] < 0 ) {
                    _styles[ DOM.CONST.STYLE.TOP ] = _size[ DOM.CONST.STYLE.TOP ] + 35;
                }
                _styles[ DOM.CONST.STYLE.LEFT ] = _size[ DOM.CONST.STYLE.LEFT ] - 25;
                break;
            case GS.OBJECT.NOTIFICATION.CONST.PLACEMENT.COPY_NOTIFICATION_FAILED:// TODO Repenser le placement des notifs
                _styles[ DOM.CONST.STYLE.TOP ] = _size[ DOM.CONST.STYLE.TOP ] - 35;
                if ( _styles[ DOM.CONST.STYLE.TOP ] < 0 ) {
                    _styles[ DOM.CONST.STYLE.TOP ] = _size[ DOM.CONST.STYLE.TOP ] + 35;
                }
                _styles[ DOM.CONST.STYLE.LEFT ] = _size[ DOM.CONST.STYLE.LEFT ] - 100;
                break;
            default:
                _styles[ DOM.CONST.STYLE.TOP ]  = _size[ DOM.CONST.STYLE.TOP ];
                _styles[ DOM.CONST.STYLE.LEFT ] = _size[ DOM.CONST.STYLE.LEFT ] + 50;
                break;
        }
        SERVICE.DOM.setStyles( this.dom_element, _styles );
    },
    createMessageDom           : function () {
        this.dom_element = SERVICE.DOM.createElement( "div", { class: "gs-notification-popup" } );
    },
    close                      : function () {
        clearTimeout( this.timeoutToCloseNotification );
        SERVICE.DOM.removeElement( this.dom_element );
    }
    
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.NOTIFICATION.User, GS.OBJECT.GsObject );
GS.OBJECT.OVERLAYFRAME           = {
    CONST: {
        EVENT: {
            DELTA_X          : "delta_x__overlay_frame",
            DELTA_Y          : "delta_y__overlay_frame",
            POSITION_IN_FRAME: "position_in_frame__overlay_frame"
        }
    }
};
GS.OBJECT.OverlayFrame           = function () {
    this.__class_name__ = "GS.OBJECT.OverlayFrame";
};
GS.OBJECT.OverlayFrame.prototype = {
    init                     : function ( start_x, start_y, dom_relative_position_container ) {
        this.dom_element        = null;
        this.dom_element_parent = dom_relative_position_container;
        this.start_x            = start_x;
        this.start_y            = start_y;
        this.end_x              = start_x;
        this.end_y              = start_y;
        this.initial_scroll_top = 0;
        this.offset_x           = 0;
        this.offset_y           = 0;
        if ( dom_relative_position_container ) {
            this.offset_x           = SERVICE.DOM.getBoundingClientRect( dom_relative_position_container, DOM.CONST.STYLE.LEFT );
            this.offset_y           = SERVICE.DOM.getBoundingClientRect( dom_relative_position_container, DOM.CONST.STYLE.TOP );
            this.initial_scroll_top = dom_relative_position_container.scrollTop;
        }
        this.current_scroll_top = this.initial_scroll_top;
    },
    doActionAfter            : function ( event_name, params ) {
        switch ( event_name ) {
            case "mouse_down":
                if ( !params ) {
                    return;
                }
                this.end_x = params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].clientX;
                this.end_y = params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].clientY;
                this.updateSize();
                break;
            case "on_scroll":
                this.current_scroll_top = this.dom_element_parent.scrollTop;
                this.makeMouseMoveAction( params );
                break;
            case "mouse_move":
                this.addOrRemoveDragInProgress( true );
                this.end_x = params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].clientX;
                this.end_y = params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].clientY;
                this.makeMouseMoveAction( params );
                break;
            case "mouse_up":
                if ( !params ) {
                    return;
                }
                return this.getImpactedElement( params );
        }
    },
    makeMouseMoveAction      : function ( params ) {
        this.updateSize();
        this.updateContent( params );
    },
    getImpactedElement       : function () {
    },
    makeMouseUpAction        : function () {
    },
    remove                   : function () {
        this.resetHTML();
    },
    computeFrameDisplayStyle : function () {
        return {
            top   : Math.min( this.getComputedStartY(), this.getComputedEndY() ) - this.offset_y,
            left  : Math.min( this.start_x, this.end_x ) - this.offset_x,
            width : Math.abs( this.start_x - this.end_x ),
            height: Math.abs( this.getComputedStartY() - this.getComputedEndY() )
        };
    },
    addOrRemoveDragInProgress: function ( add_or_remove ) {
        if ( add_or_remove && this.drag_in_progress ) {
            return;
        }
        this.drag_in_progress = add_or_remove;
    },
    getDelta__parseToParams  : function ( params ) {
        params                                               = params || {};
        params[ GS.OBJECT.OVERLAYFRAME.CONST.EVENT.DELTA_X ] = this.getDelta_x();
        params[ GS.OBJECT.OVERLAYFRAME.CONST.EVENT.DELTA_Y ] = this.getDelta_y();
        return params;
    },
    getDelta_x               : function () {
        return this.end_x - this.start_x;
    },
    getDelta_y               : function () {
        return this.getComputedEndY() - this.getComputedStartY();
    },
    getComputedStartY        : function () {
        return this.start_y + this.initial_scroll_top;
    },
    getComputedEndY          : function () {
        return this.end_y + this.current_scroll_top;
    },
    computeHtml              : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-selection-frame" } ) );
        SERVICE.DOM.setStyles( this.getDomElement(), this.getInitStyle() );
    },
    getInitStyle             : function () {
        return {
            top   : this.getComputedStartY() - this.offset_y,
            left  : this.start_x - this.offset_x,
            width : 0,
            height: 0
        };
    },
    updateSize               : function () {
        if ( !this.getDomElement() ) {
            this.computeHtml();
        }
        SERVICE.DOM.setStyles( this.getDomElement(), this.computeFrameDisplayStyle() );
    },
    updateContent            : function () {
    },
    resetZoneToRemove        : function () {
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.OverlayFrame, GS.OBJECT.GsObjectHtml );
GS.OBJECT.OverlayFrameForGrid           = function ( tile_pixel_size ) {
    this.__class_name__  = "GS.OBJECT.OverlayFrameForGrid";
    this.tile_pixel_size = tile_pixel_size;
};
GS.OBJECT.OverlayFrameForGrid.prototype = {
    getImpactedElement       : function ( shinken_grid_cells ) {
        let bounding_zone = this.getBoundingZone();
        return this.findCellMatchingZone( shinken_grid_cells, bounding_zone );
    },
    findCellMatchingZone     : function ( shinken_grid_cells, bounding_zone ) {
        let cell_in_frame        = [];
        let _has_unselected_cell = false;
        let bottom_left_point    = new GS.OBJECT.Point( bounding_zone.left, bounding_zone.bottom, "bottom_left" );
        let top_right_point      = new GS.OBJECT.Point( bounding_zone.right, bounding_zone.top, "top_right" );
        let selection_square     = new GS.OBJECT.Square( bottom_left_point, top_right_point );
        for ( let cell of shinken_grid_cells.contents ) {
            cell.computeSquare();
            if ( selection_square.isOverlapping( cell.square ) ) {
                cell_in_frame.push( cell );
            }
        }
        return cell_in_frame;
    },
    addOrRemoveDragInProgress: function ( add_or_remove ) {
    },
    getBoundingZone          : function () {
        return {
            left  : Math.min( this.parsePixelToGrid_x( this.start_x ), this.parsePixelToGrid_x( this.end_x ) ),
            right : Math.max( this.parsePixelToGrid_x( this.start_x ), this.parsePixelToGrid_x( this.end_x ) ),
            top   : Math.min( this.parsePixelToGrid_y( this.getComputedStartY() ), this.parsePixelToGrid_y( this.getComputedEndY() ) ),
            bottom: Math.max( this.parsePixelToGrid_y( this.getComputedStartY() ), this.parsePixelToGrid_y( this.getComputedEndY() ) )
        };
    },
    parsePixelToGrid_x       : function ( pos_pixel ) {
        return Math.round( (pos_pixel - this.offset_x) / this.tile_pixel_size );
    },
    parsePixelToGrid_y       : function ( pos_pixel ) {
        return Math.round( (pos_pixel - this.offset_y) / this.tile_pixel_size );
    },
    parseGridToPixel_y       : function ( pos_grid ) {
        return pos_grid * this.tile_pixel_size;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.OverlayFrameForGrid, GS.OBJECT.OverlayFrame );
GS.OBJECT.OverlayFrameZoneSelection           = function ( tile_pixel_size ) {
    this.__class_name__  = "GS.OBJECT.OverlayFrameZoneSelection";
    this.tile_pixel_size = tile_pixel_size;
};
GS.OBJECT.OverlayFrameZoneSelection.prototype = {
    makeMouseUpAction: function ( shinken_grid_cells ) {
        let impacted_elements    = this.getImpactedElement( shinken_grid_cells );
        let _has_unselected_cell = false;
        for ( let i = 0, _size_i = impacted_elements.length; i < _size_i; i++ ) {
            if ( !impacted_elements[ i ].isPhase( GS.OBJECT.CONST.PHASE.SELECTED ) ) {
                _has_unselected_cell = true;
            }
        }
        for ( let i = 0, _size_i = impacted_elements.length; i < _size_i; i++ ) {
            let next_phase = impacted_elements[ i ].isPhase( GS.OBJECT.CONST.PHASE.SELECTED ) ? GS.OBJECT.CONST.PHASE.EDITING : GS.OBJECT.CONST.PHASE.SELECTED;
            impacted_elements[ i ].setPhase( next_phase );
        }
        return impacted_elements;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.OverlayFrameZoneSelection, GS.OBJECT.OverlayFrameForGrid );
GS.OBJECT.OverlayFrameMove           = function () {
    this.__class_name__ = "GS.OBJECT.OverlayFrameMove";
};
GS.OBJECT.OverlayFrameMove.prototype = {};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.OverlayFrameMove, GS.OBJECT.OverlayFrame );
GS.OBJECT.GenericResizer           = function ( type_resize, shinken_object ) {
    this.__class_name__ = "GS.OBJECT.GenericResizer";
    this.type_resize    = type_resize;
    this.shinken_object = shinken_object;
    this.dom_element    = this.shinken_object.getDomElement();
};
GS.OBJECT.GenericResizer.prototype = {
    init          : function ( pos_x, pos_y, dom_scrollable_container ) {
        this.initial_scroll_top = 0;
        this.offset_x           = 0;
        this.offset_y           = 0;
        this.dom_element_parent = dom_scrollable_container;
        if ( dom_scrollable_container ) {
            this.offset_x           = SERVICE.DOM.getBoundingClientRect( dom_scrollable_container, DOM.CONST.STYLE.LEFT );
            this.offset_y           = SERVICE.DOM.getBoundingClientRect( dom_scrollable_container, DOM.CONST.STYLE.TOP );
            this.initial_scroll_top = dom_scrollable_container.scrollTop;
        }
        let rect                = SERVICE.DOM.getBoundingClientRect( this.getDomElement() );
        this.start_x            = this.isCursorOnLeft() ? rect.right : rect.left;
        this.start_y            = this.isCursorOnTop() ? rect.bottom : rect.top;
        this.end_x              = pos_x;
        this.end_y              = pos_y;
        this.current_scroll_top = this.initial_scroll_top;
    },
    isCursorOnTop : function () {
        return this.type_resize.includes( "top" );
    },
    isCursorOnLeft: function () {
        return this.type_resize.includes( "left" );
    },
    remove        : function () {
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.GenericResizer, GS.OBJECT.OverlayFrame );
GS.OBJECT.GridCellResizer           = function ( type_resize, grid_cell, tile_pixel_size ) {
    this.__class_name__  = "GS.OBJECT.GridCellResizer";
    this.type_resize     = type_resize;
    this.shinken_object  = grid_cell;
    this.dom_element     = this.shinken_object.getDomElement();
    this.tile_pixel_size = tile_pixel_size;
};
GS.OBJECT.GridCellResizer.prototype = {
    updateContent             : function ( params ) {
        params[ GS.OBJECT.OVERLAYFRAME.CONST.EVENT.POSITION_IN_FRAME ] = this.getComputedPositionInTile();
        this.shinken_object.doActionAfter( "mouse_resize_selected_grid_cell", params );
    },
    getComputedPositionInTile : function () {
        const position_in_pixel = this.getComputedPositionInPixel();
        return {
            start_x: this.parsePixelToGrid_x( position_in_pixel.left + this.offset_x ),
            start_y: this.parsePixelToGrid_y( position_in_pixel.top + this.offset_y ),
            end_x  : this.parsePixelToGrid_x( position_in_pixel.left + position_in_pixel.width + this.offset_x ),
            end_y  : this.parsePixelToGrid_y( position_in_pixel.top + position_in_pixel.height + this.offset_y )
        };
    },
    getComputedPositionInPixel: function () {
        let top;
        let left;
        let width;
        let height;
        if ( this.isCursorOnLeft() ) {
            left  = Math.min( this.start_x - this.tile_pixel_size * SHINKEN_GRID.CONST.PARAM.GRID_CELL.MIN_WIDTH, this.end_x ) - this.offset_x;
            width = Math.max( this.start_x - this.end_x, this.tile_pixel_size * SHINKEN_GRID.CONST.PARAM.GRID_CELL.MIN_WIDTH );
        }
        else {
            left  = this.start_x - this.offset_x;
            width = Math.max( this.end_x - this.start_x, this.tile_pixel_size * SHINKEN_GRID.CONST.PARAM.GRID_CELL.MIN_WIDTH );
        }
        
        if ( this.isCursorOnTop() ) {
            top    = Math.min( this.getComputedStartY() - this.tile_pixel_size, this.getComputedEndY() ) - this.offset_y;
            height = Math.max( this.getComputedStartY() - this.getComputedEndY(), this.tile_pixel_size * SHINKEN_GRID.CONST.PARAM.GRID_CELL.MIN_HEIGHT );
        }
        else {
            top    = this.getComputedStartY() - this.offset_y;
            height = Math.max( this.getComputedEndY() - this.getComputedStartY(), this.tile_pixel_size * SHINKEN_GRID.CONST.PARAM.GRID_CELL.MIN_HEIGHT );
        }
        
        return {
            top   : top,
            left  : left,
            width : width,
            height: height
        };
    },
    computeFrameDisplayStyle  : function () {
        return this.getComputedPositionInPixel();
    },
    makeMouseUpAction         : function ( params ) {
        params[ GS.OBJECT.OVERLAYFRAME.CONST.EVENT.POSITION_IN_FRAME ] = this.getComputedPositionInTile();
        this.addOrRemoveDragInProgress( false );
        return this.shinken_object.applyResize( params );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.GridCellResizer, GS.OBJECT.GenericResizer );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.GridCellResizer, GS.OBJECT.OverlayFrameForGrid );
GS.OBJECT.SPACEBOX           = {
    CONST: {
        TYPE : {
            CREATION: "gs-create",
            DELETION: "gs-delete"
        },
        EVENT: {
            SPACE_BOX_TYPE: "space_box_type"
        }
    }
};
GS.OBJECT.SpaceBox           = function ( type, max_width ) {
    this.__class_name__ = "GS.OBJECT.SpaceBox";
    this.type           = type;
    this.max_width      = max_width;
};
GS.OBJECT.SpaceBox.prototype = {
    addOrRemoveDragInProgress     : function ( add_or_remove ) {
    },
    computeHtml                   : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-space-box " + this.type } ) );
        SERVICE.DOM.setStyles( this.getDomElement(), this.getInitStyle() );
        this.computeExtraHtml();
    },
    computeExtraHtml              : function () {
    },
    getInitStyle                  : function () {
        return {
            top   : this.getComputedStartY() - this.offset_y,
            left  : 0,
            right : 0,
            height: 0
        };
    },
    getBoundingZone               : function () {
        return {
            left  : 0,
            right : this.max_width,
            top   : this.parsePixelToGrid_y( Math.min( this.getComputedEndY(), this.getComputedStartY() ) ),
            bottom: this.parsePixelToGrid_y( Math.max( this.getComputedEndY(), this.getComputedStartY() ) )
        };
    },
    computeFrameDisplayStyle      : function () {
        const _computed_start_y = this.getComputedStartY();
        const _computed_end_y   = this.getComputedEndY();
        const _computed_height  = this.computeHeight( _computed_end_y, _computed_start_y );
        const _computed_top     = _computed_end_y < _computed_start_y ? _computed_start_y - _computed_height : _computed_start_y; //USEFUL TO PREVENT THE SPACE BOX FROM SLIDING UPWARDS
        
        this.doExtraFrameDisplayStyleAction( _computed_height );
        return {
            top   : _computed_top - this.offset_y,
            height: _computed_height
        };
    },
    computeHeight                 : function () {
    },
    doExtraFrameDisplayStyleAction: function () {
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.SpaceBox, GS.OBJECT.OverlayFrameForGrid );
GS.OBJECT.SpaceBoxCreation               = function ( grid ) {
    this.__class_name__ = "GS.OBJECT.SpaceBoxCreation";
    this.type           = GS.OBJECT.SPACEBOX.CONST.TYPE.CREATION;
    this.initSpecific( grid );
};
GS.OBJECT.SpaceBoxCreation.getCursorIcon = function () {
    return "/static/" + __SHINKEN_HTTP_START_TIME__ + "/service_weather/img/form/icone_create_space.svg";
};
GS.OBJECT.SpaceBoxCreation.prototype     = {
    initSpecific                  : function ( grid ) {
        this.max_width               = grid.nb_tiles_in_width.getValue();
        this.max_height              = grid.nb_tiles_in_height.getValue();
        this.tile_pixel_size         = grid.tile_pixel_size;
        this.remaining_space_in_grid = this.getRemainingSpaceInGrid( grid.grid_elements );
        this.grid_controller         = grid.getController();
        this.old_hover_grid_cell     = [];
    },
    getDelta_y                    : function () {
        let bounding_zone = this.getBoundingZone();
        let to_return     = bounding_zone.bottom - bounding_zone.top;
        to_return         = Math.abs( to_return );
        return to_return;
    },
    doExtraFrameDisplayStyleAction: function ( _computed_height ) {
        for ( let _span of this.arrow_spans ) {
            if ( _computed_height <= 60 ) {
                _span.style.fontSize = (_computed_height / 2) + "pt";
            }
        }
    },
    updateContent                 : function ( params ) {
        this.old_hover_grid_cell.forEach( grid_cell => {
            grid_cell.setPhase( GS.OBJECT.CONST.PHASE.EDITING );
        } );
        this.size_display_element.innerText = this.getDelta_y();
        this.old_hover_grid_cell            = this.findCellMatchingZone( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_OBJECT ], this.getBoundingZone() );
        this.old_hover_grid_cell.forEach( grid_cell => {
            grid_cell.setPhase( GS.OBJECT.CONST.PHASE.HOVER );
        } );
    },
    getSizeDisplayElement         : function () {
        let to_return                       = SERVICE.DOM.createElement( "div", { class: "gs-size-display" }, GS.TOOLS.STRING.format( _( 'grid.mode_edition.form_visual.overlay_frame.create_space', [DICTIONARY_COMMON_UI] ), 0 ) );
        this.size_display_element           = to_return.querySelector( ".gs-data-user" );
        this.size_display_element.innerText = this.getDelta_y();
        return to_return;
    },
    computeExtraHtml              : function () {
        this.arrow_spans = [SERVICE.DOM.createElement( "span", { class: "shinicon-arrow-down" } )];
        this.arrow_spans.push( this.arrow_spans[ 0 ].cloneNode() );
        this.addDomElement( this.arrow_spans[ 0 ] );
        this.addDomElement( SERVICE.DOM.createElement( "HR" ) );
        this.addDomElement( this.getSizeDisplayElement() );
        this.addDomElement( SERVICE.DOM.createElement( "HR" ) );
        this.addDomElement( this.arrow_spans[ 1 ] );
    },
    getImpactedElement            : function ( shinken_grid_cells ) {
        let bounding_zone  = this.getBoundingZone();
        let modified_cells = [];
        let area_top       = Math.min( bounding_zone.top, bounding_zone.bottom );
        for ( let _cell of shinken_grid_cells.contents ) {
            let _cell_bottom = _cell[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].getValue() + _cell[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ].getValue();
            if ( _cell_bottom > area_top ) {// CONTINUE ONLY IF CELL IS IN THE GOOD SIDE OF SPACE BOXE
                modified_cells.push( _cell );
            }
        }
        return modified_cells;
    },
    makeMouseUpAction             : function ( params ) {
        let _delta_y = this.getDelta_y();
        if ( _delta_y === 0 ) {
            return [];
        }
        let shinken_grid_cell_impacted                       = this.getImpactedElement( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_OBJECT ] );
        params[ GS.OBJECT.OVERLAYFRAME.CONST.EVENT.DELTA_Y ] = _delta_y;
        let line_to_add_in_grid                              = _delta_y - this.remaining_space_in_grid;
        let widget_have_move                                 = false;
        for ( let _cell of shinken_grid_cell_impacted ) {
            _cell.doActionAfter( "add_space__selected_grid_cell", params );
            widget_have_move = true;
        }
        if ( line_to_add_in_grid > 0 && widget_have_move ) {
            this.remaining_space_in_grid                          = Math.max( 0, this.remaining_space_in_grid - _delta_y );
            params[ SHINKEN_GRID.CONST.PARAM.GRID.RESIZE_HEIGHT ] = line_to_add_in_grid;
            params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ].doActionAfter( "change_size_of_grid", params );
        }
        return shinken_grid_cell_impacted;
    },
    resetZoneToRemove             : function () {
        this.old_hover_grid_cell.forEach( grid_cell => {
            grid_cell.setPhase( GS.OBJECT.CONST.PHASE.EDITING );
        } );
    },
    
    getRemainingSpaceInGrid: function ( cells ) {
        let max_cell_y = 0;
        cells.getContents().forEach( cell => {
            max_cell_y = Math.max( max_cell_y, cell[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].getValue() + cell[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ].getValue() );
        } );
        return Math.max( 0, this.max_height - max_cell_y );
    },
    computeHeight          : function ( _computed_end_y, _computed_start_y ) {
        return Math.abs( _computed_end_y - _computed_start_y );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.SpaceBoxCreation, GS.OBJECT.SpaceBox );
GS.OBJECT.SpaceBoxDeletion           = function ( grid ) {
    this.__class_name__ = "GS.OBJECT.SpaceBoxDeletion";
    this.type           = GS.OBJECT.SPACEBOX.CONST.TYPE.DELETION;
    this.initSpaceBox( grid );
};
GS.OBJECT.SpaceBoxDeletion.prototype = {
    initSpaceBox        : function ( grid ) {
        this.max_width       = grid.nb_tiles_in_width.getValue();
        this.tile_pixel_size = grid.tile_pixel_size;
        this.grid_controller = grid.getController();
    },
    getEmptyLines       : function ( shinken_grid_cells ) {
        let bounding_zone = this.getBoundingZone();
        let cells_in_zone = this.findCellMatchingZone( shinken_grid_cells, bounding_zone );
        return this.findAreasWithoutCell( cells_in_zone, bounding_zone.top, bounding_zone.bottom );
    },
    findAreasWithoutCell: function ( cells, y_min, y_max ) {
        const y_ranges = cells.map( cell => ({
            start: cell[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].getValue(),
            end  : cell[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].getValue() + cell[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ].getValue()
        }) );
        
        y_ranges.sort( ( a, b ) => a.start - b.start );
        const to_return = [];
        let current_y   = y_min;
        
        y_ranges.forEach( range => {
            if ( current_y < range.start ) {
                to_return.push( { start: current_y, end: range.start, height: range.start - current_y } );
            }
            current_y = Math.max( current_y, range.end );
        } );
        if ( current_y < y_max ) {
            to_return.push( { start: current_y, end: y_max, height: y_max - current_y } );
        }
        return to_return;
    },
    makeMouseUpAction   : function ( params ) {
        let lines_to_remove = this.getEmptyLines( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_OBJECT ] );
        
        const to_return        = [];
        let total_line_removed = 0;
        for ( let _cell of params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_OBJECT ].getContents() ) {
            _cell.setPreviousModificationElement( { [ GS.OBJECT.CONST.PARAM.PARAM_EVENT.PARAM_LIST_KEY ]: [SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y, SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X] } );
        }
        
        for ( let i = lines_to_remove.length - 1; i >= 0; i-- ) {
            let current_height_already_add_to_total = false;
            for ( let _cell of params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_OBJECT ].getContents() ) {
                if ( _cell[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].getValue() >= lines_to_remove[ i ].end ) {
                    if ( !current_height_already_add_to_total ) {
                        total_line_removed += lines_to_remove[ i ].height;
                        current_height_already_add_to_total = true;
                    }
                    let new_y_value = _cell[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].getValue() - lines_to_remove[ i ].height;
                    _cell[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].setUserValueAndValue( new_y_value );
                    if ( i === 0 ) {
                        _cell.doActionAfter( "remove_space__selected_grid_cell", params );
                        to_return.push( _cell );
                    }
                }
            }
        }
        if ( total_line_removed > 0 && to_return.length ) {
            params[ SHINKEN_GRID.CONST.PARAM.GRID.RESIZE_HEIGHT ] = -total_line_removed;
            this.grid_controller.doActionAfter( "change_size_of_grid", params );
        }
        this.resetZoneToRemove();
        return to_return;
    },
    makeMouseMoveAction : function ( params ) {
        const bounding_zone      = this.getBoundingZone();
        const cells_in_zone      = this.findCellMatchingZone( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_OBJECT ], bounding_zone );
        const areas_without_cell = this.findAreasWithoutCell( cells_in_zone, bounding_zone.top, bounding_zone.bottom );
        this.resetZoneToRemove();
        
        areas_without_cell.forEach( area => {
            let current = SERVICE.DOM.createElement( "div", { class: "gs-delete-zone" } );
            this.createDeleteZoneHtml( current, area );
            params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ].addDomElement( current );
            this.zone_to_remove.push( current );
        } );
        this.updateSize();
    },
    createDeleteZoneHtml: function ( element, range ) {
        this.arrow_spans                     = [SERVICE.DOM.createElement( "span", { class: "shinicon-arrow-up shinicon-arrow-up-red" } )];
        this.arrow_spans[ 0 ].style.fontSize = this.parseGridToPixel_y( range.height ) <= 60 ? this.parseGridToPixel_y( range.height ) / 2 : 30;
        this.arrow_spans.push( this.arrow_spans[ 0 ].cloneNode() );
        
        SERVICE.DOM.addElementTo( this.arrow_spans[ 0 ], element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "HR" ), element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-size-display" }, GS.TOOLS.STRING.format( _( 'grid.mode_edition.form_visual.overlay_frame.delete_space', [DICTIONARY_COMMON_UI] ), range.height ) ), element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "HR" ), element );
        SERVICE.DOM.addElementTo( this.arrow_spans[ 1 ], element );
        SERVICE.DOM.setStyles( element, { top: this.parseGridToPixel_y( range.start ), height: this.parseGridToPixel_y( range.height ) } );
    },
    resetZoneToRemove   : function () {
        if ( this.zone_to_remove ) {
            this.zone_to_remove.forEach( zone => {
                SERVICE.DOM.removeElement( zone );
            } );
        }
        this.zone_to_remove = [];
    },
    computeHeight       : function ( _computed_end_y, _computed_start_y ) {
        return Math.abs( _computed_end_y - _computed_start_y );
    }
    
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.SpaceBoxDeletion, GS.OBJECT.SpaceBox );
GS.OBJECT.SPACEBOX.factoryForGrid = function ( grid_object, params ) {
    let to_return;
    switch ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.WIDGET_MODE__PHASE__OBJECT ].current_phase ) {
        case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_CREATE:
            to_return = new GS.OBJECT.SpaceBoxCreation( grid_object );
            break;
        case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_DELETE:
            to_return = new GS.OBJECT.SpaceBoxDeletion( grid_object );
            break;
    }
    to_return.init( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].clientX, params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].clientY, params[ "dom_relative_position_container_2024_07_18" ] );
    to_return.computeHtml();
    return to_return;
};
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
GS.OBJECT.PROGRESS_BAR_CONST    = {
    SAVING_DEFAULT                  : {
        PREPARATION_CALL        : 1,
        CALL_IN_PROGRESS        : 2,
        BACKEND_RETURN_TREATMENT: 3,
        END                     : 4
    },
    SAVING_WITH_TREATMENT_AFTER_CALL: {
        PREPARATION_CALL        : 1,
        CALL_IN_PROGRESS        : 2,
        BACKEND_RETURN_ANALYSE  : 3,
        BACKEND_RETURN_TREATMENT: 4,
        END                     : 5
    }
};
GS.OBJECT.Progressbar           = function ( parent, nb_steps, min_timeout, dom_element_parent ) {
    this.__class_name__ = "GS.OBJECT.Progressbar";
    this._parent        = parent;
    this._nb_steps      = nb_steps;
    this._min_timeout   = min_timeout;
    this.init( dom_element_parent );
};
GS.OBJECT.Progressbar.prototype = {
    init                : function ( dom_element_parent ) {
        this.computeHtml();
        this.setDomElementParent( dom_element_parent );
        this.initPhase( GS.OBJECT.CONST.PHASE.HIDDEN, this.getDomElement() );
    },
    reset               : function () {
        this._timeout_run  = null;
        this._current_step = 0;
        this.setMessagesDisplayed( false );
        this.initSteps();
    },
    initSteps           : function () {
        this._steps = [];
        for ( var i = 0; i <= this._nb_steps; i++ ) {
            this._steps.push( new GS.OBJECT.ProgressbarStep( i ) );
        }
    },
    setMessagesDisplayed: function ( to_set ) {
        SERVICE.DOM.setDataSet( this.getDomElement(), 'messageDisplayed', !!to_set ? "1" : "0" );
    },
    getCurrentStep      : function () {
        return this._steps[ this._current_step ];
    },
    getStep             : function ( step ) {
        return this._steps[ step ];
    },
    setParamStep        : function ( step, to_set ) {
        this._steps[ step ].setParam( to_set );
    },
    setMessageStep      : function ( step, to_set ) {
        this._steps[ step ].setMessage( to_set );
    },
    setDomElementParent : function ( to_set ) {
        this.dom_element_parent = to_set;
        if ( this.getDomElement() ) {
            SERVICE.DOM.addElementToAfterEmpty( this.getDomElement(), this.dom_element_parent );
        }
    },
    setTitleStep        : function ( step, to_set ) {
        this._steps[ step ].setTitle( to_set );
    },
    callbackForPhase    : function () {
        var _current = this.getCurrentPhase();
        switch ( _current ) {
            case GS.OBJECT.CONST.PHASE.HIDDEN:
                this.reset();
                break;
        }
    },
    doProgress          : function ( expected_step, phase, param, message, title ) {
        if ( expected_step === 1 ) {
            this.reset();
            this.setPhase( GS.OBJECT.CONST.PHASE.RUNNING );
        }
        var _step = this._steps[ expected_step ];
        _step.setPhase( phase );
        _step.setParam( param );
        _step.setMessage( message );
        _step.setTitle( title );
        _step.askForRun();
        this._run();
    },
    _run                : function () {
        if ( this._timeout_run ) {
            return;
        }
        if ( !this._steps[ this._current_step + 1 ].needToBeRun() ) {
            return;
        }
        if ( this.isPhase( GS.OBJECT.CONST.PHASE.RUNNING_NOK ) ) {
            return;
        }
        this._current_step++;
        var _current_step = this.getCurrentStep();
        this._parent.doActionWhenProgressStart( this._current_step, _current_step.getParam(), this );
        this._updateHtml( _current_step );
        if ( this._timeout_run ) {
            return;
        }
        var self = this;
        
        this._timeout_run = setTimeout( function () {
            self._parent.doActionWhenProgressEnd( self._current_step, _current_step.getParam(), self );
            self._timeout_run = null;
            if ( self._current_step < self._nb_steps ) {
                self._run();
            }
        }, this._min_timeout );
    },
    computeHtml         : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-popup-progress-bar-container gs-parent-event-listener", "data-controller": "common_ui", "data-message-displayed": "0" } ) );
        
        this._dom_title = this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-popup-title" } ) );
        
        let progressBarContainer = this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-progress-bar-container" } ) );
        this._dom_progress_bar   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-progress-bar" } ), progressBarContainer );
        
        let collapseButtonContainer = this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-collapse-button-container" } ) );
        let buttonContainer         = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-progress-bar-button-container" } ), collapseButtonContainer );
        let button                  = new COMPONENT.ButtonFromData_V3( "toggle_display_popup_progress_bar_message", _( "progress_bar.toggle_display_message_label", [DICTIONARY_COMMON_UI] ) );
        button.addClass( "gs-popup-message-detail-collapse" );
        button.computeHtml();
        SERVICE.DOM.addElementTo( button.getDomElement(), buttonContainer );
        
        let popupClose           = this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-popup-close" } ) );
        let closeButtonContainer = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-button-container" } ), popupClose );
        let closeButton          = new COMPONENT.ButtonFromData_V3( "close_popup_progress_bar", SERVICE.DOM.createElement( "span", { class: "shinkon shinkon-times" } ).outerHTML );
        closeButton.computeHtml();
        SERVICE.DOM.addElementTo( closeButton.getDomElement(), closeButtonContainer );
        
        this._dom_message = this.addDomElement( SERVICE.DOM.createElement( "div", { class: "gs-progress-bar-message" } ) );
    },
    _updateHtml         : function ( current_step ) {
        if ( current_step.getPhase() ) {
            this.setPhase( current_step.getPhase() );
        }
        if ( current_step.getTitle() ) {
            this.updateTitleHtml( current_step.getTitle() );
        }
        if ( current_step.getMessage() ) {
            this._dom_message.innerHTML = current_step.getMessage();
        }
        this._updateBarHtml();
    },
    _updateBarHtml      : function () {
        SERVICE.DOM.setStyle( this._dom_progress_bar, DOM.CONST.STYLE.WIDTH, (this._current_step / this._nb_steps * 100) + "%" );
        SERVICE.DOM.setDataSet( this.getDomElement(), "isComplete", (this._current_step === this._nb_steps) ? "1" : "0" );
    },
    updateTitleHtml     : function ( to_set ) {
        this._dom_title.innerHTML = to_set;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Progressbar, GS.OBJECT.PhaseInterface );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Progressbar, GS.OBJECT.GsObjectHtml );
GS.OBJECT.ProgressbarStep                = function ( index ) {
    this._index        = index;
    this._phase        = null;
    this._title        = null;
    this._message      = null;
    this._param        = null;
    this._run_expected = false;
};
GS.OBJECT.ProgressbarStep.prototype      = {
    setPhase   : function ( to_set ) {
        if ( to_set !== undefined ) {
            this._phase = to_set;
        }
    },
    setMessage : function ( to_set ) {
        if ( to_set !== undefined ) {
            this._message = to_set;
        }
    },
    getTitle   : function ( to_set ) {
        return this._title;
    },
    setTitle   : function ( to_set ) {
        if ( to_set !== undefined ) {
            this._title = to_set;
        }
    },
    getMessage : function ( to_set ) {
        return this._message;
    },
    setParam   : function ( to_set ) {
        if ( to_set !== undefined ) {
            this._param = to_set;
        }
    },
    askForRun  : function () {
        this._run_expected = true;
    },
    needToBeRun: function () {
        return this._run_expected;
    },
    getParam   : function () {
        return this._param;
    },
    getPhase   : function () {
        return this._phase;
    },
    isPhase    : function ( to_test ) {
        return this._phase === to_test;
    }
};
GS.OBJECT.ProgressbarInterface           = function () {
};
GS.OBJECT.ProgressbarInterface.prototype = {
    doActionWhenProgressStart        : function ( current_step, param, progress_bar_object ) {
        if ( current_step === progress_bar_object._nb_steps ) {
            this.doActionWhenProgressionIsComplete( progress_bar_object );
        }
        this._doActionWhenProgressStart( current_step, param );
    },
    doActionWhenProgressEnd          : function ( current_step, param, progress_bar_object ) {
        if ( (current_step === progress_bar_object._nb_steps - 1) && progress_bar_object.getCurrentStep().isPhase( GS.OBJECT.CONST.PHASE.RUNNING_OK ) ) {
            progress_bar_object.doProgress( progress_bar_object._nb_steps );
        }
        this._doActionWhenProgressEnd( current_step, param );
    },
    _doActionWhenProgressStart       : function ( current_step, param ) {
    },
    _doActionWhenProgressEnd         : function ( current_step, param ) {
    },
    doActionWhenProgressionIsComplete: function ( progress_bar_object ) {
        if ( progress_bar_object.isPhase( GS.OBJECT.CONST.PHASE.RUNNING_OK ) ) {
            progress_bar_object.setPhaseWithTimeOut( GS.OBJECT.CONST.PHASE.HIDDEN, 2000 );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ProgressbarInterface, GS.OBJECT.GsObject );
GS.OBJECT.Resource                 = function () {
};
GS.OBJECT.Resource.prototype       = {
    reset     : function () {
        this.content = null;
    },
    getContent: function () {
        if ( !this.content ) {
            this.content = new Audio( this.path );
        }
        return this.content;
    },
    getUUID   : function () {
        return this.uuid;
    },
    getName   : function () {
        return this.label;
    },
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
    setData   : function ( key, value ) {
        switch ( key ) {
            case "resource_id" :
                this.uuid = value;
                break;
            case "display_name" :
                this.label = value;
                break;
            case "resource_hash" :
                this.reset();
                this.resource_hash = value;
                this.path          = "/static/" + __SHINKEN_HTTP_START_TIME__ + "/common_ui/sounds/" + this.resource_hash + ".mp3";
                break;
            case "type" :
            case "file_info_path" :
            case "loading_date_time" :
            case "original_name" :
            case "resource_path" :
            case "use_file_provided_by_shinken" :
                this[ key ] = value;
                break;
        }
    }
};
GS.CARTO.ShinkenCarto              = function ( data ) {
    this.init( data );
};
GS.CARTO.ShinkenCarto.prototype    = {
    init           : function ( data ) {
        if ( data ) {
            this.updateData( data );
            this.setIsValid();
        }
    },
    updateData     : function ( data ) {
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.setData( _currentKey, data[ _currentKey ] );
        }
    },
    setData        : function ( key, value ) {
        switch ( key ) {
            case GS.CARTO.CONST.NAME:
            case GS.CARTO.CONST.URL:
                this[ key ] = value;
                break;
        }
    },
    setIsValid     : function () {
        if ( GS.TOOLS.STRING.containsIgnoreCase( this[ GS.CARTO.CONST.URL ], GS.NETWORK.ADRESSES.LOCALHOST )
             || GS.TOOLS.STRING.containsIgnoreCase( this[ GS.CARTO.CONST.URL ], GS.NETWORK.ADRESSES._127_0_0_1 )
        ) {
            this[ GS.CARTO.CONST.IS_VALID ] = false;
        }
        else {
            this[ GS.CARTO.CONST.IS_VALID ] = true;
        }
    },
    hasLocalHostUrl: function () {
        return GS.TOOLS.STRING.startsWith( this.url, "http://localhost" );
    },
    computeHtml    : function () {
        var _css_selector = this.hasLocalHostUrl() ? "#gs-architecture-template .gs-template-architecture-cartos-start-with-localhost" : "#gs-architecture-template .gs-template-architecture-cartos";
        var _template     = document.querySelector( _css_selector ).outerHTML;
        _template         = GS.TOOLS.STRING.replaceAll( _template, "$$$_cartos_name_$$$", GS.TOOLS.STRING.cleanXss( this.name ) );
        _template         = GS.TOOLS.STRING.replaceAll( _template, "$$$_cartos_url_$$$", GS.TOOLS.STRING.cleanXss( this.url ) );
        var _temp         = SERVICE.DOM.createElement( "div", {}, _template );
        this.dom_element  = _temp.firstChild;
        
    }
};
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
GS.OBJECT.Refresh           = function ( countdown, parent, do_once ) {
    this.parent_object     = parent;
    this.countdown         = countdown || 60000;
    this.countdown_tic     = 1000;
    this.current_countdown = this.countdown;
    this.do_once           = do_once || true;
    this.ui_components     = [];
    this.phase             = new GS.OBJECT.Phase( this );
    this.interval_tic_tac  = null;
};
GS.OBJECT.Refresh.CONST     = {
    UPDATE_AT: "UpdateAt",
    CLOCK    : "Clock"
};
GS.OBJECT.Refresh.prototype = {
    addUiComponent       : function ( to_add ) {
        this.ui_components.push( to_add );
    },
    computePercent       : function () {
        this.percent_computed = (1 - this.current_countdown / this.countdown) * 100;
    },
    setLastComputeDate   : function ( to_set ) {
        for ( var i = 0, _size_i = this.ui_components.length; i < _size_i; i++ ) {
            this.ui_components[ i ].setLastComputeDate( to_set );
        }
    },
    getSpecificDomElement: function ( name ) {
        for ( var i = 0, _size_i = this.ui_components.length; i < _size_i; i++ ) {
            if ( this.ui_components[ i ].getName() === name ) {
                return this.ui_components[ i ].getDomElement();
            }
        }
    },
    computeHtml          : function () {
        for ( var i = 0, _size_i = this.ui_components.length; i < _size_i; i++ ) {
            this.ui_components[ i ].computeHtml();
        }
    },
    askParentPhaseUpdated: function () {
        if ( !this.ui_components ) {
            return;
        }
        for ( var i = 0, _size_i = this.ui_components.length; i < _size_i; i++ ) {
            this.ui_components[ i ].phaseUpdated( this.phase.current_phase, this );
        }
    },
    updateCountdown      : function () {
        if ( this.phase.isPhase( GS.OBJECT.CONST.PHASE.STUCK ) ) {
            return;
        }
        this.current_countdown -= this.countdown_tic;
        this.current_countdown = Math.max( this.current_countdown, 0 );
        this.computePercent();
        for ( var i = 0, _size_i = this.ui_components.length; i < _size_i; i++ ) {
            this.ui_components[ i ].updateCountdown( this );
        }
    },
    reset                : function () {
        clearInterval( this.interval_tic_tac );
        this.current_countdown = this.countdown;
    },
    tictac               : function () {
        var _phase_value = this.getCurrentPhase();
        this.updateCountdown();
        if ( this.current_countdown <= 0 ) {
            switch ( _phase_value ) {
                case GS.OBJECT.CONST.PHASE.RUNNING:
                    this.setPhase( GS.OBJECT.CONST.PHASE.REFRESHING );
                    break;
                case GS.OBJECT.CONST.PHASE.HIDDEN:
                    if ( !GS.NAVIGATOR.isNavigatorHidden() ) {
                        this.setPhase( GS.OBJECT.CONST.PHASE.REFRESHING );
                    }
                    break;
            }
        }
    },
    callbackForPhase     : function () {
        this.askParentPhaseUpdated();
        switch ( this.phase.current_phase ) {
            case GS.OBJECT.CONST.PHASE.RUNNING :
                var _self = this;
                if ( this.phase.previous_phase !== GS.OBJECT.CONST.PHASE.STOPPING ) {
                    this.reset();
                }
                this.interval_tic_tac = setInterval( function () {
                    _self.tictac();
                }, this.countdown_tic );
                break;
            case GS.OBJECT.CONST.PHASE.REFRESHING :
                if ( GS.NAVIGATOR.isNavigatorHidden() ) {
                    this.phase.setPhase( GS.OBJECT.CONST.PHASE.HIDDEN );
                }
                else {
                    clearInterval( this.interval_tic_tac );
                    if ( this.parent_object ) {
                        this.parent_object.refresh();
                    }
                }
                break;
            case GS.OBJECT.CONST.PHASE.STOPPING :
                clearInterval( this.interval_tic_tac );
                break;
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Refresh, GS.OBJECT.PhaseInterface );
GS.TOOLS.ClockComponent           = function () {
    this.init();
};
GS.TOOLS.ClockComponent.prototype = {
    
    init    : function () {
        this.color = '#5C5C5C';
        this.name  = GS.OBJECT.Refresh.CONST.CLOCK;
    },
    setColor: function ( color ) {
        this.color = color;
    },
    getName : function () {
        return this.name;
    },
    getDomElement () {
        return this.dom_element;
    },
    computeHtml             : function () {
        this.dom_element                             = SERVICE.DOM.createElement( "div", { class: "gs-container-clock" } );
        this.dom_element_container_clock_2           = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-container-clock-2 gs-centered-icon-container" } ), this.dom_element );
        this.dom_element_container_clock_2.innerHTML = "<svg width='100%' height='100%' class='gs-clock gs-clock-refresh' viewbox='0 0 121 121'>" +
                                                       "<circle cx='60' cy='60' r='59' stroke='#5C5C5C' stroke-width='2' fill='none' />" +
                                                       "<path id='id-gs-clock-path' fill='#5C5C5C' transform='translate(60,60)'></path>" +
                                                       "</svg>";
        this.dom_element_path                        = this.dom_element_container_clock_2.querySelector( "#id-gs-clock-path" );
    },
    set_refreshing_content  : function () {
        SERVICE.DOM.addClasses( this.dom_element_container_clock_2, 'gs-clock-refreshing' );
    },
    unset_refreshing_content: function () {
        SERVICE.DOM.removeClasses( this.dom_element_container_clock_2, 'gs-clock-refreshing' );
    },
    updateHtml              : function ( parent_object ) {
        this.dom_element_path.setAttribute( "d", this.computePathAttribute( parent_object.percent_computed ) );
    },
    computePathAttribute    : function ( percent ) {
        percent   = percent || 0;
        var angle = (360 * percent / 100) % 360;
        
        var rad = (angle * Math.PI) / 180;
        var x   = Math.sin( rad ) * 60;
        var y   = Math.cos( rad ) * -60;
        var mid = angle > 180 ? 1 : 0;
        return "M 0 0 v -60 A 60 60 1 " + mid + " 1 " + x + " " + y + " z";
    },
    eventIsRunning          : function ( parent_object ) {
        this.unset_refreshing_content();
        this.updateCountdown( parent_object );
    },
    eventIsRefreshing       : function ( parent_object ) {
        this.set_refreshing_content();
    },
    updateCountdown         : function ( parent_object ) {
        this.updateHtml( parent_object );
    },
    eventIsStopping         : function ( parent_object ) {
        this.set_refreshing_content();
    }
};
GS.TOOLS.CLASS.addPrototype( GS.TOOLS.ClockComponent, GS.TOOLS.InterfaceRefreshComponent );
GS.TOOLS.UpdateAtComponent           = function () {
    this.name = GS.OBJECT.Refresh.CONST.UPDATE_AT;
};
GS.TOOLS.UpdateAtComponent.prototype = {
    getName           : function () {
        return this.name;
    },
    setLastComputeDate: function ( to_set ) {
        if ( !to_set ) {
            this.time_label = _( 'service_weather.generate_at.generation_in_progress', [DICTIONARY_COMMON_UI] );
        }
        else {
            this.time_label = DATE_TIME.FORMAT.get_time_from_timestamp( to_set );
        }
    },
    getDomElement () {
        return this.dom_element;
    },
    computeHtml: function () {
        this.dom_element = SERVICE.DOM.createElement( "div", { class: "gs-container-update-at gs-hidden-if-draft-phase" } );
        let div          = SERVICE.DOM.createElement( "div", { class: "gs-generate-at" }, _( 'info_bar.refresh_component.component_update_at.generate' ) );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "gs-time-label" }, this.time_label ), div );
        SERVICE.DOM.addElementTo( div, this.dom_element );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.TOOLS.UpdateAtComponent, GS.TOOLS.InterfaceRefreshComponent );
GS.SERVER.ShinkenServer                    = function ( data ) {
    this.init( data );
};
GS.SERVER.ShinkenServer.prototype          = {
    init          : function ( data ) {
        this[ GS.SERVER.CONST.LIST_SHINKEN_CARTO ] = [];
        if ( data ) {
            this.updateData( data );
        }
    },
    updateData    : function ( data ) {
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.setData( _currentKey, data[ _currentKey ] );
        }
    },
    setData       : function ( key, value ) {
        switch ( key ) {
            case GS.SERVER.CONST.NAME:
                this.setName( value );
                break;
            
            case GS.SERVER.CONST.LIST_SHINKEN_CARTO:
                this.addCartoToList( value );
                break;
        }
    },
    setName       : function ( to_set ) {
        this[ GS.SERVER.CONST.NAME ] = to_set;
    },
    addCartoToList: function ( data ) {
        var _size = data.length;
        for ( var i = 0; i < _size; i++ ) {
            this[ GS.SERVER.CONST.LIST_SHINKEN_CARTO ].push( new GS.CARTO.ShinkenCarto( data[ i ] ) );
        }
    },
    computeHtml   : function () {
        var _template         = document.querySelector( '#gs-architecture-template .gs-template-architecture-map' ).outerHTML;
        _template             = GS.TOOLS.STRING.replaceAll( _template, "$$$_architecture_name_$$$", this.name );
        var _temp             = SERVICE.DOM.createElement( "ul", {}, _template );
        this.dom_element      = _temp.firstChild;
        var _container_for_li = this.dom_element.querySelector( "ul.gs-container" );
        for ( var i = 0, _size_i = this[ GS.SERVER.CONST.LIST_SHINKEN_CARTO ].length; i < _size_i; i++ ) {
            this[ GS.SERVER.CONST.LIST_SHINKEN_CARTO ][ i ].computeHtml();
            SERVICE.DOM.addElementTo( this[ GS.SERVER.CONST.LIST_SHINKEN_CARTO ][ i ].dom_element, _container_for_li );
        }
        
    }
};
GS.SERVER.ShinkenServers                   = function ( data ) {
    this.init( data );
};
GS.SERVER.ShinkenServers.prototype         = {
    init       : function ( data ) {
        this.size              = 0;
        this.list              = [];
        this.need_compute_html = false;
        if ( !data ) {
            return;
        }
        this.updateData( data );
    },
    updateData : function ( datas ) {
        this.size         = datas.length;
        var _current_hash = GS.TOOLS.STRING.hashCode( JSON.stringify( datas ) );
        if ( this.hash === _current_hash ) {
            return;
        }
        this.list              = [];
        this.hash              = _current_hash;
        this.need_compute_html = true;
        for ( var i = 0; i < this.size; i++ ) {
            this.list.push( new GS.SERVER.ShinkenServer( datas[ i ] ) );
        }
    },
    hasServers : function () {
        return !!this.size;
    },
    computeHtml: function () {
        if ( this.need_compute_html ) {
            for ( var i = 0; i < this.size; i++ ) {
                this.list[ i ].computeHtml();
            }
            this.need_compute_html = false;
        }
    }
};
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
GS.SLA_TENDENCY                            = {
    ARROW_UP_OK            : "arrow-up-ok",
    ARROW_UP_45_OK         : "arrow-up-45-ok",
    ARROW_STAGNANT_OK      : "arrow-stagnant-ok",
    ARROW_STAGNANT_CRITICAL: "arrow-stagnant-critical",
    ARROW_DOWN_45_CRITICAL : "arrow-down-45-critical",
    ARROW_DOWN_CRITICAL    : "arrow-down-critical",
    NO_DATA                : "no-data"
};
GS.OBJECT.SlidePanelLeftFromHtml           = function ( name, dom_element ) {
    this.setType( GS.OBJECT.SLIDE_PANEL.TYPE.HORIZONTAL_LEFT );
    this.initSpecific( name, dom_element );
};
GS.OBJECT.SlidePanelLeftFromHtml.prototype = {
    setType               : GS.OBJECT.SlidePanel.prototype.setType,
    initSpecific          : function ( name, dom_element ) {
        this.initPhase();
        this.setName( name );
        this.setDomElement( dom_element );
        this.dom_element_parent__20240925 = dom_element.parentElement;
        this.dom_element__part_added      = dom_element.querySelector( ".gs-slide-panel-content" );
        this.dom_element__part_buttons    = dom_element.querySelector( ".gs-slide-panel-buttons-part" );
        this.dom_element__part_existing   = dom_element.querySelector( ".gs-slide-panel-main-part" );
        this.computeSizes__20240926();
    },
    getController_20241003: function () {
        return CONTROLLER.Apply;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.SlidePanelLeftFromHtml, GS.OBJECT.SlidePanel );
GS.OBJECT.Squares           = function () {
    this.__class_name__ = 'GS.OBJECT.Squares';
    this.init();
    
};
GS.OBJECT.Squares.prototype = {
    init               : function () {
        this.initContents();
    },
    hasOverlapping     : function () {
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            for ( var j = 0, _size_j = this.getSize(); j < _size_j; j++ ) {
                if ( this.getContent( i ) !== this.getContent( j ) && this.getContent( i ).isOverlapping( this.getContent( j ) ) ) {
                    return true;
                }
            }
            
        }
        return false;
    },
    isOverlappingByUuid: function ( uuid_square ) {
        return this.isOverlapping( this.getContentByUUID( uuid_square ) );
    },
    isOverlapping      : function ( square ) {
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ) !== square && this.getContent( i ).isOverlapping( square ) ) {
                
                return true;
            }
        }
        return false;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Squares, GS.OBJECT.GsObjectContainer );
GS.OBJECT.Point           = function ( x, y, type, max_x, max_y ) {
    this.x_original   = x;
    this.y_original   = y;
    this.x            = x;
    this.y            = y;
    this.type         = type;
    this.display_type = type;
    this.max_x        = max_x;
    this.max_y        = max_y;
};
GS.OBJECT.Point.prototype = {
    computeHtml   : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "gs-point", "data-type": this.type, "data-display-type": this.display_type }, this.getInnerHtml() ) );
    },
    getInnerHtml  : function () {
        switch ( this.display_type ) {
            case "drag-n-drop-information-debug":
                return "(x:" + this.x + ', y:' + this.y + ")";
            default:
                return this.type + " (" + this.x + ',' + this.y + ")";
        }
    },
    reset_original: function () {
        this.x_original = this.x;
        this.y_original = this.y;
    },
    addDelta      : function ( delta_x, delta_y ) {
        this.x = Math.max( 0, this.x_original + delta_x );
        this.y = Math.max( 0, this.y_original + delta_y );
        if ( this.max_x ) {
            this.x = Math.min( this.max_x, this.x );
        }
        if ( this.max_y ) {
            this.y = Math.min( this.max_y, this.y );
        }
        if ( this.getDomElement() ) {
            this.getDomElement().innerHTML = this.getInnerHtml();
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Point, GS.OBJECT.GsObjectHtml );
GS.OBJECT.Square           = function ( bottom_left_point, top_right_point, uuid, max_width ) {
    this.top_right_point   = top_right_point;
    this.bottom_left_point = bottom_left_point;
    this.max_width         = max_width;
    this.uuid              = uuid || SERVICE.STRING.buildUUID();
    this.point_to_display  = [];
    this.init();
};
GS.OBJECT.Square.prototype = {
    init              : function () {
        this.addClass( "gs-square" );
    },
    isOverlapping     : function ( square ) {
        if ( this.bottom_left_point.x >= square.top_right_point.x ||
             square.bottom_left_point.x >= this.top_right_point.x ) {
            return false;
        }
        
        if ( (this.top_right_point.y >= square.bottom_left_point.y) && (square.bottom_left_point.y !== -1) ||
             ((square.top_right_point.y >= this.bottom_left_point.y) && (this.bottom_left_point.y !== -1)) ) {
            return false;
        }
        return true;
    },
    isOutsideOfDisplay: function ( nb_tiles_in_width, nb_tiles_in_height ) {
        return this.bottom_left_point.x < 0 || this.top_right_point.y < 0 || this.top_right_point.x > nb_tiles_in_width || this.bottom_left_point.y > nb_tiles_in_height;
    },
    getUUID           : function () {
        return this.uuid;
    },
    addPointToDisplay : function ( point_to_add ) {
        this.point_to_display.push( point_to_add );
    },
    reset             : function () {
        this.top_right_point.reset_original();
        this.bottom_left_point.reset_original();
        for ( var i = 0, _size_i = this.point_to_display.length; i < _size_i; i++ ) {
            this.point_to_display[ i ].reset_original();
        }
        SERVICE.DOM.removeElement( this.getDomElement() );
    },
    addDelta          : function ( delta_x, delta_y ) {
        this.top_right_point.addDelta( delta_x, delta_y );
        this.bottom_left_point.addDelta( delta_x, delta_y );
        for ( var i = 0, _size_i = this.point_to_display.length; i < _size_i; i++ ) {
            this.point_to_display[ i ].addDelta( delta_x, delta_y );
        }
    },
    computeHtml       : function () {
        if ( this.getDomElement() ) {
            return false;
        }
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: this.getClass() } ) );
        var div = this.addDomElement( SERVICE.DOM.createElement( "div", { class: 'gs-relative-div' } ) );
        
        for ( var i = 0, _size_i = this.point_to_display.length; i < _size_i; i++ ) {
            this.point_to_display[ i ].computeHtml();
            SERVICE.DOM.addElementTo( this.point_to_display[ i ].getDomElement(), div );
        }
        return true;
    }
    
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Square, GS.OBJECT.GsObjectHtml );
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
GS.ELEMENT.UiUserAcl           = function ( data ) {
    this.make_downtime                = true;
    this.make_acknowledge             = true;
    this.force_result_check           = true;
    this.show_historic_sla            = true;
    this.show_historic_historic       = true;
    this.show_historic_sla_range      = true;
    this.show_historic_historic_range = true;
    this.init( data );
};
GS.ELEMENT.UiUserAcl.prototype = {
    init                    : function ( data ) {
        this[ GS.ELEMENT.USER.PARAM.ACL.SHARE_PRIVATE ]   = new GS.ELEMENT.UiUserAclShareExtend();
        this[ GS.ELEMENT.USER.PARAM.ACL.SHARE_GROUP ]     = new GS.ELEMENT.UiUserAclShareExtend();
        this[ GS.ELEMENT.USER.PARAM.ACL.SHARE_EVERYBODY ] = new GS.ELEMENT.UiUserAclShareExtend();
        this.updateData( data );
    },
    updateData              : function ( datas ) {
        var _keys     = Object.keys( datas );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.setData( _currentKey, datas[ _currentKey ] );
        }
        this.setRightToCreateNewShare();
        this.setDisplayFavoritePanel();
    },
    setData                 : function ( key, value ) {
        switch ( key ) {
            case GS.ELEMENT.USER.PARAM.ACL.MAKE_DOWNTIME:
            case GS.ELEMENT.USER.PARAM.ACL.MAKE_ACKNOWLEDGE:
            case GS.ELEMENT.USER.PARAM.ACL.FORCE_RESULT:
            case GS.ELEMENT.USER.PARAM.ACL.RECHECK_NOW:
                this[ key ] = value;
                break;
            case GS.ELEMENT.USER.PARAM.ACL.HISTORIC.SHOW:
                this.setHistoricShow( value );
                break;
            case GS.ELEMENT.USER.PARAM.ACL.HISTORIC.HISTORIC_RANGE:
                this.show_historic_historic_range = value;
                break;
            case GS.ELEMENT.USER.PARAM.ACL.HISTORIC.SLA_RANGE:
                this.show_historic_sla_range = value;
                break;
            
            case GS.ELEMENT.USER.PARAM.ACL.SHARE_PRIVATE:
            case GS.ELEMENT.USER.PARAM.ACL.SHARE_GROUP:
            case GS.ELEMENT.USER.PARAM.ACL.SHARE_EVERYBODY:
                this[ key ].init( value );
                break;
            default:
                break;
            
        }
    },
    setHistoricShow         : function ( value ) {
        switch ( value ) {
            case GS.ELEMENT.USER.PARAM.ACL.HISTORIC.SHOW_BOTH:
                this.show_historic_sla      = true;
                this.show_historic_historic = true;
                break;
            case GS.ELEMENT.USER.PARAM.ACL.HISTORIC.SHOW_HISTORY_ONLY:
                this.show_historic_sla      = false;
                this.show_historic_historic = true;
                break;
            case GS.ELEMENT.USER.PARAM.ACL.HISTORIC.SHOW_SLA_ONLY:
                this.show_historic_sla      = true;
                this.show_historic_historic = false;
                break;
        }
    },
    setRightToCreateNewShare: function () {
        if ( !this[ GS.ELEMENT.USER.PARAM.ACL.SHARE_PRIVATE ] ) {
            return;
        }
    },
    hasRightToCreateFavorite: function () {
        return this[ GS.ELEMENT.USER.PARAM.ACL.SHARE_PRIVATE ].create && this[ GS.ELEMENT.USER.PARAM.ACL.SHARE_PRIVATE ].read;
    },
    canCreateFavorite       : function () {
        return this[ GS.ELEMENT.USER.PARAM.ACL.SHARE_PRIVATE ].hasRight( "create" );
    },
    setDisplayFavoritePanel : function () {
        if ( !this[ GS.ELEMENT.USER.PARAM.ACL.SHARE_PRIVATE ] ) {
            return;
        }
        if ( !this[ GS.ELEMENT.USER.PARAM.ACL.SHARE_GROUP ] ) {
            return;
        }
        if ( !this[ GS.ELEMENT.USER.PARAM.ACL.SHARE_EVERYBODY ] ) {
            return;
        }
    },
    getHistoricDisplayMode  : function () {
        if ( this.show_historic_historic && this.show_historic_sla ) {
            return GS.ELEMENT.USER.PARAM.ACL.HISTORIC.SHOW_BOTH;
        }
        if ( this.show_historic_historic ) {
            return GS.ELEMENT.USER.PARAM.ACL.HISTORIC.SHOW_HISTORY_ONLY;
        }
        if ( this.show_historic_sla ) {
            return GS.ELEMENT.USER.PARAM.ACL.HISTORIC.SHOW_SLA_ONLY;
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.ELEMENT.UiUserAcl, GS.OBJECT.GsObject );
GS.ELEMENT.UiUserAclShareExtend           = function () {
    this.read     = false;
    this.create   = false;
    this.organize = false;
    this.update   = false;
    this.delete   = false;
};
GS.ELEMENT.UiUserAclShareExtend.prototype = {
    init    : function ( data ) {
        var _data = data.split( '' );
        var _size = _data.length;
        var _key;
        for ( var i = 0; i < _size; i++ ) {
            _key = GS.ELEMENT.USER.PARAM.ACL.SHARE[ i ];
            if ( !_key ) {
                console.error( "[UNKNOWN SHARE ACL STRUCTURE]" );
                continue;
            }
            this[ _key ] = !!parseInt( _data[ i ] );
        }
    },
    hasRight: function ( type ) {
        if ( !this.read ) {
            return false;
        }
        return this[ type ];
    }
    
};
GS.TOOLS.CLASS.addPrototype( GS.ELEMENT.UiUserAclShareExtend, GS.OBJECT.GsObject );
GS.ELEMENT.UiUserPrefs           = function () {
    this[ GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_LIST.NAME ]           = {};
    this[ GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_SCREEN.NAME ]         = {};
    this[ GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_EVENTS_TUB.NAME ]     = {};
    this[ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.NAME ]           = {};
    this[ GS.ELEMENT.USER.PARAM.PREFS.DETAIL_GRAPH_HOST_WIDTH ]     = 200;
    this[ GS.ELEMENT.USER.PARAM.PREFS.WEATHER_SERVICE.NAME ]        = {};
    this[ GS.ELEMENT.USER.PARAM.PREFS.OTHERS.NAME ]                 = {};
    this[ GS.ELEMENT.USER.PARAM.PREFS.NOTIFICATION_OF_CHANGE.NAME ] = new GS.OBJECT.NotificationsOfChangeUser();
};
GS.ELEMENT.UiUserPrefs.prototype = {
    doActionAfter          : function ( event_name, param ) {
        switch ( event_name ) {
            case "change_value_notification_of_change_sound":
            case "change_value_notification_of_change_visual_blink":
                this[ GS.ELEMENT.USER.PARAM.PREFS.NOTIFICATION_OF_CHANGE.NAME ].doActionAfter( event_name, param );
                break;
        }
    },
    updateData             : function ( data ) {
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.setData( _currentKey, data[ _currentKey ] );
        }
    },
    setData                : function ( key, value ) {
        switch ( key ) {
            case GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_LIST.NAME:
            case GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_SCREEN.NAME:
            case GS.ELEMENT.USER.PARAM.PREFS.DETAIL_GRAPH_HOST_WIDTH:
            case GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_EVENTS_TUB.NAME:
            case GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.NAME:
            case GS.ELEMENT.USER.PARAM.PREFS.WEATHER_SERVICE.NAME:
            case GS.ELEMENT.USER.PARAM.PREFS.OTHERS.NAME:
                this[ key ] = value;
                break;
            case GS.ELEMENT.USER.PARAM.PREFS.NOTIFICATION_OF_CHANGE.NAME:
                this[ GS.ELEMENT.USER.PARAM.PREFS.NOTIFICATION_OF_CHANGE.NAME ].updateData( value );
                
                break;
            case GS.ELEMENT.USER.PARAM.PREFS.PANELS.NAME:
                break;
            default:
                this[ GS.ELEMENT.USER.PARAM.PREFS.OTHERS.NAME ][ key ] = value;
                break;
        }
    },
    getDataToSave          : function () {
        var to_return                                                        = {};
        to_return[ GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_LIST.NAME ]           = this[ GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_LIST.NAME ];
        to_return[ GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_SCREEN.NAME ]         = this[ GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_SCREEN.NAME ];
        to_return[ GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_EVENTS_TUB.NAME ]     = this[ GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_EVENTS_TUB.NAME ];
        to_return[ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.NAME ]           = this[ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.NAME ];
        to_return[ GS.ELEMENT.USER.PARAM.PREFS.WEATHER_SERVICE.NAME ]        = this[ GS.ELEMENT.USER.PARAM.PREFS.WEATHER_SERVICE.NAME ];
        to_return[ GS.ELEMENT.USER.PARAM.PREFS.OTHERS.NAME ]                 = this[ GS.ELEMENT.USER.PARAM.PREFS.OTHERS.NAME ];
        to_return[ GS.ELEMENT.USER.PARAM.PREFS.NOTIFICATION_OF_CHANGE.NAME ] = this[ GS.ELEMENT.USER.PARAM.PREFS.NOTIFICATION_OF_CHANGE.NAME ].getDataToSave();
        to_return[ GS.ELEMENT.USER.PARAM.PREFS.PANELS.NAME ]                 = this[ GS.ELEMENT.USER.PARAM.PREFS.PANELS.NAME ].getDataToSave();
        if ( EXTERNAL.COMMUNICATION.NEW_DETAIL_WIDTH ) {
            to_return[ GS.ELEMENT.USER.PARAM.PREFS.DETAIL_GRAPH_HOST_WIDTH ] = EXTERNAL.COMMUNICATION.NEW_DETAIL_WIDTH;
        }
        return to_return;
    },
    getNotificationOfChange: function () {
        return this[ GS.ELEMENT.USER.PARAM.PREFS.NOTIFICATION_OF_CHANGE.NAME ];
    }
};
GS.USER_PREFS                    = {
    PARAM_EVENT: {
        DATA: "user_prefs__data"
    },
    KEY        : "key",
    VALUE      : "value"
};
GS.UserPrefs_V3                  = function ( data ) {
    this.init( data );
};
GS.UserPrefs_V3.prototype        = {
    init         : function ( data ) {
        this.initContents();
        if ( data ) {
            this.updateData( data );
        }
    },
    getValueByKey: function ( array_keys ) {
        let current = this.getContentByUUID( array_keys[ 0 ] );
        if ( !current ) {
            return null;
        }
        return current.getValueByKey( array_keys.slice( 1 ) );
    },
    updateData   : function ( data ) {
        var _keys = Object.keys( data );
        var _current_key;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            this.addPref( { [ GS.USER_PREFS.KEY ]: _current_key, [ GS.USER_PREFS.VALUE ]: data[ _current_key ] } );
        }
    },
    addPref      : function ( data ) {
        this.add( new GS.UserPref_V3( data ) );
    },
    getDataToSave: function () {
    }
};
GS.TOOLS.CLASS.addPrototype( GS.UserPrefs_V3, GS.OBJECT.GsObjectContainer );
GS.UserPref_V3           = function ( data ) {
    this.init( data );
};
GS.UserPref_V3.prototype = {
    init         : function ( data ) {
        this[ GS.USER_PREFS.KEY ]   = data[ GS.USER_PREFS.KEY ];
        this[ GS.USER_PREFS.VALUE ] = GS.USER_PREFS.factory( data[ GS.USER_PREFS.VALUE ] );
    },
    getUUID      : function () {
        return this[ GS.USER_PREFS.KEY ];
    },
    getValueByKey: function ( array_keys ) {
        if ( array_keys.length > 0 && typeof this[ GS.USER_PREFS.VALUE ] === "object" ) {
            return this[ GS.USER_PREFS.VALUE ].getValueByKey( array_keys );
        }
        return this[ GS.USER_PREFS.VALUE ];
    }
};
GS.TOOLS.CLASS.addPrototype( GS.UserPrefs_V3, GS.OBJECT.GsObjectContainer );
GS.USER_PREFS.factory       = function ( data ) {
    if ( typeof data === "object" ) {
        var _keys = Object.keys( data );
        if ( GS.TOOLS.ARRAY.areEqual( _keys, [GS.USER_PREFS.KEY, GS.USER_PREFS.VALUE] ) ) {
            return new GS.UserPref_V3( data );
        }
        return new GS.UserPrefs_V3( data );
    }
    return data;
};
GS.ELEMENT.UiUser           = function ( data ) {
    this.init( data );
};
GS.ELEMENT.UiUser.prototype = {
    getDataForSelector           : function () {
        return { name: this.getName(), label: this.getName() };
    },
    getDefaultUrlFromSettings    : function () {
        return this.getSettings() [ GS.ELEMENT.USER.PARAM.SETTINGS.DEFAULT_URL ];
    },
    getDefaultView               : function () {
        return this.getDefaultUrlFromSettings() || this.getDefaultUrl();
    },
    init                         : function ( data ) {
        this[ GS.ELEMENT.USER.PARAM.EXISTS ] = true;
        if ( data ) {
            this.updateData( data );
        }
    },
    setDefaultUrlToCurrentView   : function () {
        this.getSettings().default_url = GS.HIGHWAY.getHash();
    },
    updateData                   : function ( data ) {
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.setData( _currentKey, data[ _currentKey ] );
        }
    },
    setData                      : function ( key, value ) {
        switch ( key ) {
            case GS.ELEMENT.USER.PARAM.ACL.KEY:
                this.setACL( value );
                break;
            case GS.ELEMENT.USER.PARAM.PREFS.NAME:
                this.setPrefs( value );
                break;
            case GS.ELEMENT.USER.PARAM.SETTINGS.FIELD:
                this.setSettings( value );
                break;
            case GS.ELEMENT.USER.PARAM.STATUS:
                this.setStatus( value );
                break;
            case GS.ELEMENT.USER.PARAM.UI:
                this.setUI( value );
                break;
            case "user_name":
            case GS.ELEMENT.USER.PARAM.USER_NAME:
                this.setName( value );
                break;
            case "user_uuid":
            case GS.ELEMENT.USER.PARAM.UUID:
                this.setUUID( value );
                break;
            case GS.ELEMENT.USER.PARAM.VERSION:
                this.setVersion( value );
                break;
            case GS.ELEMENT.USER.PARAM.VERSION_FULL:
                this.setVersionFull( value );
                break;
            case GS.ELEMENT.USER.PARAM.TILES_FORMAT.KEY_BACKEND:
                this.setTilesFormat( value );
                break;
            case GS.ELEMENT.USER.PARAM.ARCHITECTURE:
                this.setServers( value );
                break;
            case GS.ELEMENT.USER.PARAM.KNOWN_MODULES:
                this.setModules( value );
                break;
            case GS.ELEMENT.USER.PARAM.IS_ADMIN:
                this.setIsAdmin( value );
                break;
            case GS.ELEMENT.USER.PARAM.SHINKEN_VERSION:
                this.setShinkenVersion( value );
                break;
            case GS.ELEMENT.USER.PARAM.SHINKEN_VERSION_SHORT:
                this.setShinkenShortVersion( value );
                break;
            case GS.ELEMENT.USER.PARAM.TIME_ZONE_BACKEND:
                break;
            case GS.ELEMENT.USER.PARAM.EVENT_CONTAINER_DAY_KEEP_DATA:
            case GS.ELEMENT.USER.PARAM.EVENTS_CSV_EXPORT_LIMIT:
                this[ key ] = value;
                break;
            case GS.ELEMENT.USER.PARAM.EVENTS_EXPORT_MAX_RETRY:
                break;
            case "backend_localtime_epoch":
                this.setLocalTime( value );
                break;
            case "configuration_id":
                this[ key ] = value;
                break;
            case GS.ELEMENT.USER.PARAM.EXISTS:
            case GS.ELEMENT.USER.PARAM.DEFAULT_NOTIFICATIONS_SETTINGS__USERS__SOUND__VOLUME_PERCENT:
            case GS.ELEMENT.USER.PARAM.DEFAULT_NOTIFICATIONS_SETTINGS__USERS__VISUAL__BLINK__ENABLED:
                this[ key ] = value;
                break;
            default:
                this._setData( key, value );
        }
    },
    _setData                     : function ( key, value ) {
    },
    setSettings                  : function ( value ) {
        var _keys        = Object.keys( value );
        var _size_object = _keys.length;
        for ( var i = 0; i < _size_object; i++ ) {
            this.getSettings()[ _keys[ i ] ] = value[ _keys[ i ] ];
        }
    },
    setStatus                    : function ( value ) {
        this[ GS.ELEMENT.USER.PARAM.STATUS ] = value;
    },
    setUI                        : function ( value ) {
        this[ GS.ELEMENT.USER.PARAM.UI ] = value;
    },
    getName                      : function () {
        return this[ GS.ELEMENT.USER.PARAM.USER_NAME ];
    },
    getUUID                      : function () {
        return this[ GS.ELEMENT.USER.PARAM.UUID ];
    },
    setUUID                      : function ( value ) {
        this[ GS.ELEMENT.USER.PARAM.UUID ] = value || "";
    },
    setName                      : function ( value ) {
        this[ GS.ELEMENT.USER.PARAM.USER_NAME ] = value || "";
    },
    setACL                       : function ( value ) {
        this[ GS.ELEMENT.USER.PARAM.ACL.KEY ] = new GS.ELEMENT.UiUserAcl( value );
        
    },
    setVersion                   : function ( value ) {
        this[ GS.ELEMENT.USER.PARAM.VERSION ] = value;
    },
    setVersionFull               : function ( value ) {
        this[ GS.ELEMENT.USER.PARAM.VERSION_FULL ] = value;
    },
    setTilesFormat               : function ( value ) {
        switch ( value ) {
            case GS.ELEMENT.USER.PARAM.TILES_FORMAT.BACKEND_KEY.DEFAULT:
                this[ GS.ELEMENT.USER.PARAM.TILES_FORMAT.KEY ] = GS.ELEMENT.USER.PARAM.TILES_FORMAT.TYPE.DEFAULT;
                break;
            case GS.ELEMENT.USER.PARAM.TILES_FORMAT.BACKEND_KEY.CONTEXT_UP:
                this[ GS.ELEMENT.USER.PARAM.TILES_FORMAT.KEY ] = GS.ELEMENT.USER.PARAM.TILES_FORMAT.TYPE.CONTEXT_UP;
                break;
            case GS.ELEMENT.USER.PARAM.TILES_FORMAT.BACKEND_KEY.STATUS_UP:
                this[ GS.ELEMENT.USER.PARAM.TILES_FORMAT.KEY ] = GS.ELEMENT.USER.PARAM.TILES_FORMAT.TYPE.STATUS_UP;
                break;
            default:
                if ( APP_INFO.DEBUG ) {
                    console.warn( "tiles_background unknown", "[" + value + "]", "Default value used" );
                }
                break;
        }
    },
    getDefaultUrl                : function () {
        return "#/hive/" + this[ GS.ELEMENT.USER.PARAM.PREFS.NAME ][ GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_SCREEN.NAME ][ GS.ELEMENT.USER.PARAM.PREFS.DEFAULT_SCREEN.UUID ];
    },
    getNameDefaultView           : function () {
        return this.getSettings()[ GS.ELEMENT.USER.PARAM.SETTINGS.NAME_DEFAULT_VIEW ];
    },
    _validateData                : function () {
        if ( !this.getSettings()[ GS.ELEMENT.USER.PARAM.SETTINGS.DEFAULT_URL ] && this.getPrefs().defaultScreen.uuid ) {
            var _settings                                           = {};
            _settings[ GS.ELEMENT.USER.PARAM.SETTINGS.DEFAULT_URL ] = LocationService.getUrlHiveDefaultView( this.getPrefs().defaultScreen.uuid );
            this.setSettings( _settings );
        }
    },
    clean                        : function () {
        return Http.query( {
            path  : COMMUNICATION.QUERY.GET.GS.ELEMENT.USER.KEY + '/' + this.uuid + '/clean',
            method: 'DELETE'
        } );
    },
    doesExists                   : function () {
        var _to_return = $q.defer();
        this.get().then(
            function success () {
                _to_return.resolve( true );
            },
            function error ( response ) {
                switch ( response.status ) {
                    case NETWORK.HTTP_CODE._404_NOT_FOUND:
                        _to_return.resolve( false );
                        break;
                    default:
                        RefreshService.askChangeStatus( REFRESH.STATUS.BACKEND_CALL_FAILED );
                        _to_return.reject( response );
                        break;
                }
            }
        );
        return _to_return.promise;
    },
    getUserSaveData              : function getUserSaveData () {
        var OLD_USER_SAVE_PATH = 'usersave/';
        var defer              = $q.defer();
        Http.query( {
            method: 'GET',
            path  : OLD_USER_SAVE_PATH
        } ).then(
            function success ( response ) {
                defer.resolve( response.data );
            },
            function error ( response ) {
                response.status === 404 ? defer.resolve( null ) : defer.reject( response );
            }
        );
        return defer.promise;
    },
    checkMigrationNeeded         : function () {
        var to_return = $q.defer();
        var _self     = this;
        this.getUserSaveData().then( function ( data ) {
            if ( data && data[ GS.ELEMENT.USER.PARAM.VERSION ] === MIGRATION.VERSION.V02_03_03_U1 && !_self[ GS.ELEMENT.USER.PARAM.VERSION ] ) {
                to_return.resolve( MIGRATION.VERSION.V02_03_03_U1 );
            }
            else if ( data && _self[ GS.ELEMENT.USER.PARAM.VERSION ] ) {
                to_return.resolve( MIGRATION.VERSION.V02_04_00_with_U1_data_to_clean );
            }
            else {
                to_return.resolve( false );
            }
            
        } );
        return to_return.promise;
    },
    isOwner                      : function isOwnerUserFn ( item ) {
        return this.uuid === item.owner.uuid;
    },
    setIsAdmin                   : function ( to_set ) {
        this[ GS.ELEMENT.USER.PARAM.IS_ADMIN ]                = to_set;
        this[ GS.ELEMENT.USER.PARAM.SHINKEN_VERSION_TOOLTIP ] = this[ GS.ELEMENT.USER.PARAM.IS_ADMIN ] ? this[ GS.ELEMENT.USER.PARAM.SHINKEN_VERSION ] : '';
    },
    setShinkenShortVersion       : function ( to_set ) {
        this[ GS.ELEMENT.USER.PARAM.SHINKEN_VERSION_SHORT ] = to_set;
    },
    setShinkenVersion            : function ( to_set ) {
        this[ GS.ELEMENT.USER.PARAM.SHINKEN_VERSION ] = to_set;
    },
    setLocalTime                 : function ( to_set ) {
    },
    isAdmin                      : function () {
        return this[ GS.ELEMENT.USER.PARAM.IS_ADMIN ];
    },
    setServers                   : function ( data ) {
    },
    setModules                   : function ( to_set ) {
    },
    getSettings                  : function () {
        if ( !this[ GS.ELEMENT.USER.PARAM.SETTINGS.FIELD ] ) {
            this[ GS.ELEMENT.USER.PARAM.SETTINGS.FIELD ] = {};
        }
        return this[ GS.ELEMENT.USER.PARAM.SETTINGS.FIELD ];
    },
    getPrefs                     : function () {
        if ( !this[ GS.ELEMENT.USER.PARAM.PREFS.NAME ] ) {
            this[ GS.ELEMENT.USER.PARAM.PREFS.NAME ] = new GS.ELEMENT.UiUserPrefs();
        }
        return this[ GS.ELEMENT.USER.PARAM.PREFS.NAME ];
    },
    getPref                      : function ( pref_name ) {
        return this.getPrefs()[ pref_name ];
    },
    getDetailGraphHostWidth      : function () {
        return this.getPrefs()[ GS.ELEMENT.USER.PARAM.PREFS.DETAIL_GRAPH_HOST_WIDTH ];
    },
    setShowHistoricOutputs       : function ( to_set ) {
        this.getPrefs()[ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.NAME ][ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.SHOW_OUTPUTS ] = to_set;
    },
    getShowHistoricOutputs       : function () {
        return this.getPrefs()[ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.NAME ][ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.SHOW_OUTPUTS ];
    },
    setCollapseAllHistoricOutputs: function ( to_set ) {
        this.getPrefs()[ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.NAME ][ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.COLLAPSE_ALL_OUTPUT ] = to_set;
    },
    getCollapseAllHistoricOutputs: function () {
        return this.getPrefs()[ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.NAME ][ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.COLLAPSE_ALL_OUTPUT ];
    },
    getSizeSlaColumn             : function () {
        return this.getPrefs()[ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.NAME ][ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.SIZE_SLA_COLUMNN ];
    },
    getDataToSave                : function () {
        var toReturn                                     = {};
        toReturn[ GS.ELEMENT.USER.PARAM.UUID ]           = this[ GS.ELEMENT.USER.PARAM.UUID ];
        toReturn[ GS.ELEMENT.USER.PARAM.USER_NAME ]      = this[ GS.ELEMENT.USER.PARAM.USER_NAME ] || localStorageService.get( 'gs-ui-user' );
        toReturn[ GS.ELEMENT.USER.PARAM.VERSION ]        = this[ GS.ELEMENT.USER.PARAM.VERSION ];
        toReturn[ GS.ELEMENT.USER.PARAM.VERSION_FULL ]   = APP_INFO.VERSION_FULL;
        toReturn[ GS.ELEMENT.USER.PARAM.PREFS.NAME ]     = this.getPrefs().getDataToSave();
        toReturn[ GS.ELEMENT.USER.PARAM.STATUS ]         = this[ GS.ELEMENT.USER.PARAM.STATUS ];
        toReturn[ GS.ELEMENT.USER.PARAM.UI ]             = this[ GS.ELEMENT.USER.PARAM.UI ];
        toReturn[ GS.ELEMENT.USER.PARAM.SETTINGS.FIELD ] = this.getSettings();
        delete toReturn[ GS.ELEMENT.USER.PARAM.PREFS.NAME ][ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.NAME ][ GS.ELEMENT.USER.PARAM.PREFS.HISTORIC_TAB.SIZE_SLA_COLUMNN ];
        return toReturn;
    },
    getLabel                     : function ( default_label_if_no_name ) {
        if ( !this.getName() ) {
            if ( default_label_if_no_name ) {
                return "<div class='gs-label'>" + default_label_if_no_name + "</div>";
            }
            return "";
        }
        var _class     = this[ GS.ELEMENT.USER.PARAM.EXISTS ] ? "gs-label" : "gs-label gs-user-removed";
        var _user_name = GS.TOOLS.STRING.cleanXss( this.getName() );
        var _attribute = this[ GS.ELEMENT.USER.PARAM.EXISTS ] ? "" : 'onmouseenter="SHINKEN_TOOLTIP.showTooltip(this)" onmouseleave="SHINKEN_TOOLTIP.hideTooltip()" shi-tip-html="' + _( 'users.errors.user_doesnt_exist', [DICTIONARY_COMMON_UI] ) + '"';
        return '<div class="' + _class + '" ' + _attribute + '>' + _user_name + '</div>';
    }
};
GS.TOOLS.CLASS.addPrototype( GS.ELEMENT.UiUser, GS.OBJECT.GsObject );
GS.ELEMENT.UiUsers           = function () {
    this.init();
};
GS.ELEMENT.UiUsers.prototype = {
    init              : function () {
        this.initContents();
    },
    getDataForSelector: function () {
        var _to_return = [];
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            _to_return.push( this.getContent( i ).getDataForSelector() );
        }
        return _to_return;
    },
    getUserByName     : function ( name ) {
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ).getName() === name ) {
                return this.getContent( i );
            }
        }
        return null;
    },
    exists            : function ( name_to_find ) {
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ).getName() === name_to_find ) {
                return true;
            }
        }
        return false;
    },
    existsPartially   : function ( name_to_find ) {
        if ( !name_to_find ) {
            return true;
        }
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( GS.TOOLS.STRING.containsIgnoreCase( this.getContent( i ).getName(), name_to_find ) ) {
                return true;
            }
        }
        return false;
    },
    getDataFromBackend: function ( parent_object ) {
    }
};
GS.TOOLS.CLASS.addPrototype( GS.ELEMENT.UiUsers, GS.OBJECT.GsObjectContainer );
GS.OBJECT.ViewBehaviour           = function () {
    this.__class_name__ = "GS.OBJECT.ViewBehaviour";
    this.init();
};
GS.OBJECT.ViewBehaviour.prototype = {
    init             : function ( data ) {
        this.initPhase();
    },
    updateData       : function ( data ) {
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
    setData          : function ( key, value ) {
        switch ( key ) {
            case GS.OBJECT.VIEW.BEHAVIOUR.PARAM.PHASE:
                this.setPhase( value );
                break;
            case GS.OBJECT.VIEW.BEHAVIOUR.PARAM.LAST_UPDATE:
                this [ key ] = value;
                break;
            case GS.OBJECT.VIEW.BEHAVIOUR.PARAM.PHASE_PREVIOUS:
                break;
            default:
                console.warn( "[GS.OBJECT.ViewBehaviour]", "[IGNORED DATA]", key, value );
                break;
        }
    },
    changePhaseAction: function ( to_set ) {
        this.setPhase( to_set );
        this[ GS.OBJECT.VIEW.BEHAVIOUR.PARAM.LAST_UPDATE ] = DATE_TIME.getTimestampNow_format_sec();
    },
    getDataToSave    : function () {
        var _to_return                                           = {};
        _to_return[ GS.OBJECT.VIEW.BEHAVIOUR.PARAM.PHASE ]       = this.getCurrentPhase();
        _to_return[ GS.OBJECT.VIEW.BEHAVIOUR.PARAM.LAST_UPDATE ] = this[ GS.OBJECT.VIEW.BEHAVIOUR.PARAM.LAST_UPDATE ];
        return _to_return;
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ViewBehaviour, GS.OBJECT.PhaseInterface );
GS.OBJECT.VIEW_HISTORY          = {
    PARAM: {
        NAME: "view_history_name"
    }
};
GS.OBJECT.ViewHistory           = function ( name, pagination ) {
    this.init( name, pagination );
};
GS.OBJECT.ViewHistory.prototype = {
    init                                 : function ( name, pagination ) {
        this.initPhase();
        this.name            = name;
        this.pagination_size = pagination;
    },
    initList                             : function () {
        this.list__20240822 = new SHINKEN_LIST.SetFromDataWithPagination( "list_history", this.pagination_size );
        this.list__20240822.setHeaders( new SHINKEN_LIST.HeadersFromData(
            [
                { name: GS.OBJECT.VIEW.HISTORY.LIST.HEADER.DATE_HISTORY, label: _( "history.title.date", [DICTIONARY_COMMON_UI] ) },
                { name: GS.OBJECT.VIEW.HISTORY.LIST.HEADER.USER_HISTORY, label: _( "history.title.user", [DICTIONARY_COMMON_UI] ) },
                { name: GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY, label: _( "history.title.action", [DICTIONARY_COMMON_UI] ) }
            ] ) );
        this.list__20240822.getPagination().addChildrenParamForEvents( GS.OBJECT.VIEW_HISTORY.PARAM.NAME, this.getName() );
    },
    getDataFromBackend__20241001         : function ( url ) {
    },
    formatAndApplyData                   : function ( data ) {
        this.list__20240822.computeLines( this.parseBackendData( data ) );
        this.parent.doActionAfter( "history_backend_loaded_done" );
    },
    doActionAfter                        : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon                  : function ( event_name, param ) {
        switch ( event_name ) {
            case "click_on_selector_V3":
            case "click_on_item_selector_V3":
                this.list__20240822.doActionAfter( event_name, param );
                break;
            case "click_on_button_V3":
                switch ( param[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case CLIPBOARD_SERVICE.PARAM.EVENT_NAME_COPY:
                        var export_data = GS.TOOLS.ARRAY.parseForClipboardText( this.getDataToExport(), [20, 30, 0] );
                        CLIPBOARD_SERVICE.setContent( param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].target, export_data );
                        SHINKEN_TOOLTIP.hideTooltip();
                        break;
                    default:
                        this.list__20240822.doActionAfter( event_name, param );
                }
                break;
            case "communication_no_backend_response":
                SERVICE.DOM.addServerDown( this.dom_element_parent__20240822 );
                break;
        }
    },
    parseBackendData                     : function ( data ) {
        let _to_return = [];
        for ( let i = 0; i < data.length; i++ ) {
            _to_return.push( this.parseBackendDataLine( data[ i ] ) );
        }
        return _to_return;
    },
    initBackendDataLineParser            : function ( data ) {
        let _to_return                                                = {};
        _to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.DATE_HISTORY ] = DATE_TIME.getDateAndTimeToHtml( data.date );
        _to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.USER_HISTORY ] = data.instigator_user.user_name;
        _to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = "";
        return _to_return;
    },
    parseBackendDataLine                 : function ( data, to_return ) {
        return this.parseBackendDataLineCommon( data, to_return );
    },
    parseBackendDataLineCommon           : function ( data, to_return ) {
        to_return = to_return || this.initBackendDataLineParser( data );
        switch ( data.action.type ) {
            case "SAVE":
                to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = _( "history.action.update", [DICTIONARY_COMMON_UI] );
                break;
            case "CREATION":
                to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = _( "history.action.creation", [DICTIONARY_COMMON_UI] );
                break;
            case "CLONE":
                let sanitized_data_string                                    = GS.TOOLS.STRING.cleanXss( data.action.context.reference_weather.name );
                to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = GS.TOOLS.STRING.format( _( "history.views.copy", [DICTIONARY_VISU_UI] ), sanitized_data_string );
                break;
            case "NEW_OWNER":
                to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = GS.TOOLS.STRING.format( _( "history.action.new_owner", [DICTIONARY_COMMON_UI] ), data.action.context.new_owner.user_name );
                break;
            case "UPDATE":
                to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = this.parseBackendDataLineForActionUpdate( data );
                break;
            case "DELETION":
                to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] += _( "history.action.delete", [DICTIONARY_COMMON_UI] );
                break;
            case "RESTORATION":
                to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = _( "history.action.restore", [DICTIONARY_COMMON_UI] );
                break;
        }
        return to_return;
    },
    parseBackendDataLineForActionDeletion: function () {
    },
    initCurrentChangesDataLineParser     : function ( data ) {
        let _to_return                                                = {};
        _to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.DATE_HISTORY ] = DATE_TIME.getDateAndTimeToHtml( data.timestamp / 1000 );
        _to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.USER_HISTORY ] = _( "history.user", [DICTIONARY_VISU_UI] );
        _to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = "";
        _to_return.widget_uuid                                        = [];
        data.contents.forEach( content => {
            _to_return.widget_uuid.push( content.element_uuid );
        } );
        _to_return.uuid = data.uuid;
        
        return _to_return;
    },
    parseLastModificationDataLine        : function ( data ) {
        return this.parseLastModificationDataLineCommon( data );
    },
    parseLastModificationDataLineCommon  : function ( data ) {
    },
    getList__20240822                    : function () {
        return this.list__20240822;
    },
    getDataToExport                      : function () {
        return this.list__20240822.getDataToExport();
    },
    reset                                : function () {
        this.resetHTML();
        this.setPhase( GS.OBJECT.CONST.PHASE.INIT );
    },
    computeHtml                          : function () {
        this.list__20240822.computeHtml();
        this.setDomElement( SERVICE.DOM.createElement( 'div', { class: "gs-view-history" } ) );
        this.addDomElement( this.list__20240822.getDomElement() );
        this.computeClipboard();
    },
    addLoading                           : function ( text_to_add ) {
        if ( !this.dom_element_parent__20240822 ) {
            return;
        }
        SERVICE.DOM.addLoadingFrameV2( this.dom_element_parent__20240822, text_to_add );
    },
    clickOnItemSelector                  : function ( event, parent_name, element ) {
        this.list__20240822.clickOnItemSelector( event, parent_name, element );
        this.computeSizes();
    },
    computeClipboard                     : function () {
        this.addDomElement( CLIPBOARD_SERVICE.buildHtmlButtons_V3( true, false, { [ GS.OBJECT.VIEW_HISTORY.PARAM.NAME ]: this.getName() } ) );
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ViewHistory, GS.OBJECT.GsObjectHtml );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ViewHistory, GS.OBJECT.PhaseInterface );
GS.OBJECT.View            = function ( data ) {
    this.init( data );
};
GS.OBJECT.View.prototype  = {
    init                           : function ( data ) {
        this.shares_uuid                         = [];
        this[ GS.OBJECT.VIEW.PARAM.NB_ERRORS ]   = 0;
        this[ GS.OBJECT.VIEW.PARAM.NB_WARNINGS ] = 0;
        if ( data ) {
            this.updateData( data );
        }
    },
    updateData                     : function ( data ) {
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
    setData                        : function ( key, value ) {
        switch ( key ) {
            case GS.OBJECT.VIEW.PARAM.NAME:
                this.setName( value );
                break;
            case GS.OBJECT.VIEW.PARAM.UUID:
                this.setUUID( value );
                break;
            case GS.OBJECT.VIEW.PARAM.USERS._KEY:
                this.updateUsers( value );
                break;
            case GS.OBJECT.VIEW.PARAM.EXTERNAL_LINKS:
                this.setWeatherLinks( value );
                break;
            case GS.OBJECT.VIEW.PARAM.FOUND:
            case GS.OBJECT.VIEW.PARAM.NOTIFICATIONS:
            case GS.OBJECT.VIEW.PARAM.TYPE:
            case GS.OBJECT.VIEW.PARAM.IS_ROOT_PROBLEM:
            case GS.OBJECT.VIEW.PARAM.NB_ERRORS:
            case GS.OBJECT.VIEW.PARAM.NB_WARNINGS:
            case GS.OBJECT.VIEW.PARAM.NB_SHARED_LINK:
            case GS.OBJECT.VIEW.PARAM.GROUPS_SHARES_UUID:
            case GS.OBJECT.VIEW.PARAM.OWNER._KEY:
                this [ key ] = value;
                break;
            case GS.OBJECT.VIEW.PARAM.VIEW_BEHAVIOUR:
                this.setBehaviourPhase( value );
                break;
            default:
                console.warn( "[GS.OBJECT.VIEW]", "[IGNORED DATA]", key, value );
                break;
        }
    },
    updateUsers                    : function ( data ) {
        if ( !data ) {
            return;
        }
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            this.addUserInfo( _currentKey, data[ _currentKey ] );
        }
    },
    addUserInfo                    : function ( key, value ) {
        
        switch ( key ) {
            case GS.OBJECT.VIEW.PARAM.USERS.OWNER:
                this.setOwner( value );
                break;
            case GS.OBJECT.VIEW.PARAM.USERS.PREVIOUS_OWNER:
                this.setPreviousOwner( value );
                break;
            case GS.OBJECT.VIEW.PARAM.USERS.CREATOR:
                this.setCreator( value );
                break;
            default:
                console.warn( "[GS.OBJECT.VIEW]", "[IGNORED USER DATA]", key, value );
                break;
        }
    },
    setName                        : function ( to_set ) {
        this[ GS.OBJECT.VIEW.PARAM.NAME ] = to_set;
    },
    setUUID                        : function ( to_set ) {
        this[ GS.OBJECT.VIEW.PARAM.UUID ] = to_set;
    },
    getUUID                        : function () {
        return this[ GS.OBJECT.VIEW.PARAM.UUID ];
    },
    getType                        : function () {
        return this[ GS.OBJECT.VIEW.PARAM.TYPE ];
    },
    getOwnerUUID                   : function () {
        return this[ GS.OBJECT.VIEW.PARAM.OWNER._KEY ][ GS.OBJECT.VIEW.PARAM.OWNER.PARAM.UUID._KEY ];
    },
    getOwnerName                   : function () {
        return this[ GS.OBJECT.VIEW.PARAM.OWNER._KEY ][ GS.OBJECT.VIEW.PARAM.OWNER.PARAM.NAME._KEY ];
    },
    getScreenType                  : function () {
        return this[ GS.OBJECT.VIEW.PARAM.TYPE ];
    },
    getName                        : function () {
        return this[ GS.OBJECT.VIEW.PARAM.NAME ];
    },
    getViewName                    : function () {
        return this.getName();
    },
    getCloneName                   : function () {
        return this.getViewName() + _( "common.clone_tag", [DICTIONARY_COMMON_UI] );
    },
    getShareNumber                 : function () {
        return this[ GS.OBJECT.VIEW.PARAM.NB_SHARED_LINK ];
    },
    getNumberOfErrors              : function () {
        return this[ GS.OBJECT.VIEW.PARAM.NB_ERRORS ];
    },
    getNumberOfWarnings            : function () {
        return this[ GS.OBJECT.VIEW.PARAM.NB_WARNINGS ];
    },
    getOwner                       : function () {
        return this.owner_user;
    },
    getProblems                    : function () {
        var _problems                                 = {};
        _problems[ GS.OBJECT.VIEW.PARAM.NB_ERRORS ]   = this.getNumberOfErrors();
        _problems[ GS.OBJECT.VIEW.PARAM.NB_WARNINGS ] = this.getNumberOfWarnings();
        return _problems;
    },
    setOwner                       : function ( value ) {
        this.owner_user = new GS.ELEMENT.UiUser( value );
    },
    getPreviousOwner               : function () {
        return this.previous_owner_user;
    },
    setPreviousOwner               : function ( value ) {
        this.previous_owner_user = new GS.ELEMENT.UiUser( value );
    },
    getCreator                     : function () {
        return this.creator_user;
    },
    setCreator                     : function ( value ) {
        this.creator_user = new GS.ELEMENT.UiUser( value );
    },
    setWeatherLinks                : function ( value ) {
        GS.TOOLS.DICT.deleteKeyEntries( value, "validation_messages" );
        this.weather_links = new WEATHER.Links( value );
    },
    setBehaviourPhase              : function ( value ) {
        var to_set = value;
        if ( value.__class_name__ !== "GS.OBJECT.ViewBehaviour" ) {
            to_set = new GS.OBJECT.ViewBehaviour();
            to_set.updateData( value );
        }
        this[ GS.OBJECT.VIEW.PARAM.VIEW_BEHAVIOUR ] = to_set;
    },
    getNotifications               : function () {
        return this.notifications;
    },
    setNotifications               : function ( value ) {
        this.notifications = new WEATHER.Notifications( value );
    },
    setDelayBeforeDeletion         : function ( delay_before_deletion ) {
        this.delay_before_deletion = delay_before_deletion;
    },
    getViewBehaviourPhase          : function () {
        return this[ GS.OBJECT.VIEW.PARAM.VIEW_BEHAVIOUR ];
    },
    getViewBehaviourPhaseLastUpdate: function () {
        return this[ GS.OBJECT.VIEW.PARAM.VIEW_BEHAVIOUR ].last_update;
    },
    getViewDeletionTime            : function () {
        return this.getViewBehaviourPhaseLastUpdate() + this.delay_before_deletion;
    }
    
};
GS.OBJECT.ViewParser      = function ( data ) {
    var _data_valid_for_screen                                     = {};
    _data_valid_for_screen[ GS.OBJECT.VIEW.PARAM.UUID ]            = data[ GS.OBJECT.VIEW.PARAM.UUID ];
    _data_valid_for_screen[ GS.OBJECT.VIEW.PARAM.NAME ]            = data[ GS.OBJECT.VIEW.PARAM.NAME ];
    _data_valid_for_screen[ GS.OBJECT.VIEW.PARAM.TYPE ]            = data[ GS.OBJECT.VIEW.PARAM.TYPE ];
    _data_valid_for_screen[ GS.OBJECT.VIEW.PARAM.IS_ROOT_PROBLEM ] = data[ GS.OBJECT.VIEW.PARAM.IS_ROOT_PROBLEM ];
    _data_valid_for_screen[ GS.OBJECT.VIEW.PARAM.FOUND ]           = data[ GS.OBJECT.VIEW.PARAM.FOUND ];
    var _owner                                                     = {};
    _owner[ GS.OBJECT.VIEW.PARAM.OWNER.PARAM.NAME._KEY ]           = data[ "owner_name" ];
    _owner[ GS.OBJECT.VIEW.PARAM.OWNER.PARAM.UUID._KEY ]           = data[ "owner_uuid" ];
    _data_valid_for_screen[ GS.OBJECT.VIEW.PARAM.OWNER._KEY ]      = _owner;
    return new GS.OBJECT.View( _data_valid_for_screen );
};
GS.OBJECT.Views           = function ( data ) {
    this.init( data );
};
GS.OBJECT.Views.prototype = {
    init                  : function ( data ) {
        this.initContents();
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            this.add( new GS.OBJECT.View( data[ i ] ) );
        }
    },
    setDelayBeforeDeletion: function ( to_set ) {
        for ( let i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].setDelayBeforeDeletion( to_set );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.Views, GS.OBJECT.GsObjectContainer );
CONTROLLER.Help                          = (function ( self ) {
    "use strict";
    self._dom_element_help = null;
    self.toggleHelp        = function ( event ) {
        event.preventDefault();
        event.stopPropagation();
        if ( !self._dom_element_help ) {
            self._dom_element_help = document.getElementById( 'id-gs-help-pop-up' );
            self._dom_element_help.classList.remove( 'gs-hidden' );
            return;
        }
        self._dom_element_help.classList.toggle( 'gs-hidden' );
    };
    self.closeHelp         = function () {
        if ( !self._dom_element_help ) {
            return;
        }
        self._dom_element_help.classList.add( 'gs-hidden' );
    };
    return self;
})( CONTROLLER.Help || {} );
MANAGER.HelpGenerator                    = (function ( self ) {
    "use strict";
    self.content                   = [];
    self.size                      = 0;
    self.init                      = function ( type_trad ) {
        self.type_trad = type_trad;
        self.initContent();
        if ( !self.size ) {
            return;
        }
        self.buildButtonHtml();
        self.buildContentHtml();
        self.initEventListener();
    };
    self.initContent               = function () {
        var _found = document.querySelectorAll( ".gs-help-container .gs-help-content" );
        for ( var i = 0, _size_i = _found.length; i < _size_i; i++ ) {
            self.content.push( new OBJECT.Help( _found[ i ] ) );
            SERVICE.DOM.removeElement( _found[ i ] );
        }
        self.size    = self.content.length;
        self.content = GS.TOOLS.ARRAY.sortArrayMultiple( self.content, ["order_tab", "name_tab", "order"] );
    };
    self.initEventListener         = function () {
        document.addEventListener( 'keydown', function ( event ) {
            MANAGER.EventManager.keydown( event );
        } );
    };
    self.buildButtonHtml           = function () {
        var _button_f1       = SERVICE.DOM.createElement( 'div', { class: "gs-help-button-container", onclick: "CONTROLLER.Help.toggleHelp(event)", 'data-name': "toggle_help" } );
        _button_f1.innerHTML = '<button class="gs-button"><table><tr><td><span class="key">F1</span></td><td>' + _( 'common.help.label', self.type_trad ) + '</td></tr></table></button>';
        document.body.appendChild( _button_f1 );
    };
    self.buildContentHtml          = function ( class_to_add ) {
        var _content_to_html  = SERVICE.DOM.createElement( 'div', {
            id     : "id-gs-help-pop-up",
            class  : "gs-hidden " + class_to_add,
            onclick: "MANAGER.EventManager.stopPropagation(event)"
        } );
        var _container_html   = SERVICE.DOM.createElement( 'div', { class: "gs-help-container" } );
        var _container_html_2 = SERVICE.DOM.createElement( 'div', { class: "gs-help-container-2" } );
        var _container_html_3 = SERVICE.DOM.createElement( 'div', { class: "gs-help-container-3" },
            "<div class='gs-text-centred'><div class='gs-help-title'>" + _( 'common.help.label', self.type_trad ) + "</div></div>" );
        var _current_tab;
        var _current_tab_name = "";
        for ( var i = 0, _size_i = self.size; i < _size_i; i++ ) {
            if ( _current_tab_name !== self.content[ i ].tab ) {
                _current_tab_name = self.content[ i ].tab;
                _current_tab      = WINDOW.ElementService.getWindowTargetHtml( 'div', _current_tab_name, !i );
                _container_html_3.appendChild( _current_tab );
            }
            _current_tab.appendChild( self.content[ i ].getHtml() );
        }
        _content_to_html.appendChild( _container_html );
        _container_html.appendChild( _container_html_2 );
        _container_html_2.appendChild( self.buildWindowsLineHtml() );
        _container_html_2.appendChild( _container_html_3 );
        document.body.appendChild( _content_to_html );
        document.body.appendChild( _content_to_html );
    };
    self.buildWindowsLineHtml      = function () {
        var _to_return = SERVICE.DOM.createElement( 'div', {
            class      : "gs-help-windows-title-menu gs-window-group",
            "data-name": "help-group",
            onclick    : "MANAGER.EventManager.clickOnWindowNavigation(event,'help-group')"
        } );
        var _tab_list  = GS.TOOLS.ARRAY.extractKeys( this.content, ['tab', 'name_tab'], true, true );
        _tab_list      = GS.TOOLS.ARRAY.removeDuplicateArray( _tab_list );
        _tab_list      = self.concatDuplicationWindowID( _tab_list );
        var _current;
        for ( var i = 0, _size_i = _tab_list.length; i < _size_i; i++ ) {
            _current = _tab_list[ i ];
            _to_return.appendChild( WINDOW.ElementService.getWindowHtml( "div", _current[ 0 ], _current[ 1 ], "help-group", !i ) );
        }
        var _button_close = SERVICE.DOM.createElement( 'div', { class: "gs-help-close-button shinkon-times-bold", onclick: "CONTROLLER.Help.toggleHelp(event)" } );
        _to_return.appendChild( _button_close );
        return _to_return;
    };
    self.concatDuplicationWindowID = function ( tab_list ) {
        var _to_return = [];
        var _mapping   = {};
        var _current;
        var _index;
        for ( var i = 0, _size_i = tab_list.length; i < _size_i; i++ ) {
            _current = tab_list[ i ];
            if ( _mapping[ _current[ 0 ] ] ) {
                _index                    = _mapping[ _current[ 0 ] ] - 1;
                _to_return[ _index ][ 1 ] = _to_return[ _index ][ 1 ] + GS.TOOLS.STRING.CONST.WHITE_SPACE + _current[ 1 ];
            }
            else {
                _mapping[ _current[ 0 ] ] = _to_return.push( _current );
            }
        }
        return _to_return;
    };
    return self;
})( MANAGER.HelpGenerator || {} );
OBJECT.Help                              = function ( dom_element ) {
    this.dom_element = dom_element;
    this.tab         = dom_element.dataset.tab;
    this.order       = parseInt( dom_element.dataset.order ) || 1;
    this.order_tab   = parseInt( dom_element.dataset.tabOrder ) || 1;
    this.name_tab    = dom_element.dataset.tabName || "??";
};
OBJECT.Help.prototype                    = {
    getHtml: function () {
        return this.dom_element;
    }
};
GS.TOOLS.IFRAME                          = (function ( self ) {
    "use strict";
    self.getIframeJs   = function ( element_css_selector ) {
        var iframe = document.querySelector( element_css_selector );
        
        if ( !iframe ) {
            return;
        }
        
        return iframe.contentWindow || iframe;
    };
    self.doActionAfter = function ( element_css_selector, event_name, param ) {
        var iframe = self.getIframeJs( element_css_selector );
        try {
            iframe.EXTERNAL.COMMUNICATION.doAction( event_name, param );
        }
        catch ( e ) {
        }
    };
    return self;
})( GS.TOOLS.IFRAME || {} );
GS.TOOLS                                 = GS.TOOLS || {};
GS.TOOLS.NOTIFICATION                    = (function ( self ) {
    
    var __instance_notification_container = new GS.OBJECT.NOTIFICATION.Container();
    
    
    
    self.cleanAllNotification   = function () {
        __instance_notification_container.cleanAllNotification();
    };
    self.addNotification        = function ( message, status, element_to_bind_with, notification_placement, time_before_remove, skip_close ) {
        __instance_notification_container.init();
        __instance_notification_container.addNotification( message, status, element_to_bind_with, notification_placement, time_before_remove, skip_close );
    };
    self.addNotificationStyled  = function ( message, status, styles, time_before_remove ) {
        __instance_notification_container.init();
        __instance_notification_container.addNotificationStyled( message, status, styles, time_before_remove );
    };
    self.addNotificationForSave = function ( message, status ) {
        __instance_notification_container.init();
        __instance_notification_container.addNotificationStyled(
            message,
            status,
            {
                top            : '172px',
                right          : '10px',
                padding        : '2px 5px 2px 5px',
                'border-radius': '3px'
            },
            2500 );
    };
    return self;
})( GS.TOOLS.NOTIFICATION || {} );
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
SHINKEN_GRID.BelongGridCell              = {};
SHINKEN_GRID.BelongGridCell.prototype    = {
    is_belonging_to_grid_cell_object: true
};
SHINKEN_GRID.CONST.PARAM.isSizesProperty = function ( property_name ) {
    property_name = GS.TOOLS.STRING.splitForGetLastOne( property_name, "." );
    switch ( property_name ) {
        case SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH:
        case SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT:
        case SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X:
        case SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y:
            return true;
    }
    return false;
};
SHINKEN_GRID.ViewHistory                 = function () {
};
SHINKEN_GRID.ViewHistory.prototype       = {
    
    
    
    
    parseBackendDataLine                    : function ( data ) {
        return this.parseBackendDataLineGrid( data );
    },
    parseBackendDataLineGrid                : function ( data ) {
        switch ( data.action.type ) {
            case "UPDATE":
                return this.parseBackendDataLineForActionUpdate( data );
            case "DELETE":
                return this.parseBackendDataLineForActionDeletion( data );
            default:
                return this.parseBackendDataLineCommon( data );
        }
    },
    parseBackendDataLineForActionDeletion   : function ( data ) {
        let to_return = this.initBackendDataLineParser( data );
        to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] += _( "history.action.delete", [DICTIONARY_COMMON_UI] );
        to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] += "<div class='gs-history-action'>" + GS.TOOLS.STRING.format( _( "history.views.weather.shared_links_removed_from_groups", [DICTIONARY_VISU_UI] ) ) + "</div>";
        
        return to_return;
    },
    parseBackendDataLineForActionUpdate     : function ( data ) {
        let to_return           = this.initBackendDataLineParser( data );
        let text_history_update = "";
        if ( data.action.context.published.new && !data.action.context.published.old ) {
            text_history_update += "<div class='gs-history-action'>" + _( "history.views.weather.update_publish", [DICTIONARY_VISU_UI] ) + "</div>";
        }
        if ( data.action.context.nb_widgets.old > data.action.context.nb_widgets.new ) {
            let nb_widgets = data.action.context.nb_widgets.old - data.action.context.nb_widgets.new;
            if ( nb_widgets === 1 ) {
                text_history_update += "<div class='gs-history-action'>" + _( "history.views.weather.update_remove_widget", [DICTIONARY_VISU_UI] ) + "</div>";
            }
            else {
                text_history_update += "<div class='gs-history-action'>" + GS.TOOLS.STRING.format( _( "history.views.weather.update_remove_widgets", [DICTIONARY_VISU_UI] ), nb_widgets ) + "</div>";
            }
        }
        if ( data.action.context.nb_widgets.old < data.action.context.nb_widgets.new ) {
            let nb_widgets = data.action.context.nb_widgets.new - data.action.context.nb_widgets.old;
            if ( nb_widgets === 1 ) {
                text_history_update += "<div class='gs-history-action'>" + _( "history.views.weather.update_add_widget", [DICTIONARY_VISU_UI] ) + "</div>";
            }
            else {
                text_history_update += "<div class='gs-history-action'>" + GS.TOOLS.STRING.format( _( "history.views.weather.update_add_widgets", [DICTIONARY_VISU_UI] ), nb_widgets ) + "</div>";
            }
        }
        if ( data.action.context.new_links.length > 0 ) {
            for ( let i = 0; i < data.action.context.new_links.length; i++ ) {
                text_history_update += "<div class='gs-history-action'>" + GS.TOOLS.STRING.format( _( "history.views.weather.new_link", [DICTIONARY_VISU_UI] ), data.action.context.new_links[ i ].link_name ) + "</div>";
            }
        }
        if ( data.action.context.removed_links.length > 0 ) {
            for ( let j = 0; j < data.action.context.removed_links.length; j++ ) {
                text_history_update += "<div class='gs-history-action'>" + GS.TOOLS.STRING.format( _( "history.views.weather.remove_link", [DICTIONARY_VISU_UI] ), data.action.context.removed_links[ j ].link_name ) + "</div>";
            }
        }
        
        to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = text_history_update;
        return to_return;
    },
    parseLastModificationDataLine           : function ( data ) {
        return this.parseLastModificationDataLineGrid( data );
    },
    parseLastModificationDataLineGrid       : function ( data ) {
        switch ( data.type_modification ) {
            case GS.OBJECT.CONST.LAST_MODIFICATION.HISTORY.MOVE:
                return this.parseLastModificationDataLineMove( data );
            case GS.OBJECT.CONST.LAST_MODIFICATION.HISTORY.RESIZE:
                return this.parseLastModificationDataLineResize( data );
            case GS.OBJECT.CONST.LAST_MODIFICATION.HISTORY.CREATE:
                return this.parseLastModificationDataLineAddChild( data );
            case GS.OBJECT.CONST.LAST_MODIFICATION.HISTORY.FORM_WIDGET_VALUE_MODIFICATION:
                return this.parseLastModificationDataLineEdit( data );
            case GS.OBJECT.CONST.LAST_MODIFICATION.HISTORY.FORM_DEFAULT_VALUE_MODIFICATION:
                return this.parseLastModificationDataLineDefaultEdit( data );
            case GS.OBJECT.CONST.LAST_MODIFICATION.ACTION.DELETE:
                return this.parseLastModificationDataLineDelete( data );
            default:
                this.parseLastModificationDataLineCommon( data );
                return;
        }
    },
    parseLastModificationDataLineResize     : function ( data ) {
        let to_return                                                = this.initCurrentChangesDataLineParser( data );
        to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = GS.TOOLS.STRING.format( _( "history.views.weather.widget_resized", [DICTIONARY_VISU_UI] ), data.contents[ 0 ].next.width.getUserValue(), data.contents[ 0 ].next.height.getUserValue() );
        return to_return;
    },
    parseLastModificationDataLineMove       : function ( data ) {
        let to_return    = this.initCurrentChangesDataLineParser( data );
        let y_prev       = data.contents[ 0 ].previous.position_y.value;
        let y_next       = data.contents[ 0 ].next.position_y.value;
        let x_prev       = data.contents[ 0 ].previous.position_x.value;
        let x_next       = data.contents[ 0 ].next.position_x.value;
        let nb_of_widget = 0;
        for ( let i = 0; i < data.contents.length; i++ ) {
            if ( data.contents[ i ].type_modification === GS.OBJECT.CONST.LAST_MODIFICATION.ACTION.MOVE ) {
                nb_of_widget++;
            }
        }
        to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = GS.TOOLS.STRING.format( _( "history.views.weather.widget_moved", [DICTIONARY_VISU_UI] ), nb_of_widget, `x:${x_prev} , y:${y_prev}`, `x:${x_next} , y:${y_next}` );
        return to_return;
    },
    parseLastModificationDataLineAddChild   : function ( data ) {
        let to_return                                                = this.initCurrentChangesDataLineParser( data );
        to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = _( "history.views.weather.widget_created", [DICTIONARY_VISU_UI] );
        return to_return;
    },
    parseLastModificationDataLineEdit       : function ( data ) {
        let to_return                                                = this.initCurrentChangesDataLineParser( data );
        to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = _( "history.views.weather.widget_edited", [DICTIONARY_VISU_UI] );
        return to_return;
    },
    parseLastModificationDataLineDefaultEdit: function ( data ) {
        let to_return                                                = this.initCurrentChangesDataLineParser( data );
        to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = _( "history.views.weather.default_value_edited", [DICTIONARY_VISU_UI] );
        return to_return;
    },
    parseLastModificationDataLineDelete     : function ( data ) {
        const nb_of_widget_deleted = data.contents.length;
        let to_return              = this.initCurrentChangesDataLineParser( data );
        if ( nb_of_widget_deleted > 1 ) {
            to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = GS.TOOLS.STRING.format( _( "history.views.weather.update_remove_widgets", [DICTIONARY_VISU_UI] ), nb_of_widget_deleted );
        }
        else {
            to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = _( "history.views.weather.update_remove_widget", [DICTIONARY_VISU_UI] );
        }
        return to_return;
    },
    parseLastModificationDataLineConfig     : function ( data ) {
        let to_return                                                = this.initCurrentChangesDataLineParser( data );
        to_return[ GS.OBJECT.VIEW.HISTORY.LIST.HEADER.TEXT_HISTORY ] = _( "history.views.weather.widget_edited", [DICTIONARY_VISU_UI] );
        return to_return;
    }
};
GS.TOOLS.CLASS.addPrototype( SHINKEN_GRID.ViewHistory, GS.OBJECT.ViewHistory );
SHINKEN_VALIDATION.Parameters                    = function ( parameters ) {
    this.content = [];
    if ( parameters ) {
        this.init( parameters );
    }
};
SHINKEN_VALIDATION.Parameters.prototype          = {
    init        : function ( parameters ) {
        for ( var i = 0, _size_i = parameters.length; i < _size_i; i++ ) {
            this.content.push( new SHINKEN_VALIDATION.Parameter( parameters[ i ] ) );
        }
    },
    getParameter: function ( key ) {
        for ( var i = 0, _size_i = this.content.length; i < _size_i; i++ ) {
            if ( this.content[ i ].key === key ) {
                return this.content[ i ];
            }
        }
        return null;
    },
    getKeys     : function () {
        return GS.TOOLS.ARRAY.extractKey( this.content, 'key' );
    },
    getContent  : function () {
        return this.content;
    }
};
SHINKEN_VALIDATION.Parameter                     = function ( args ) {
    this.key              = args[ 0 ];
    this.validation_type  = args[ 1 ];
    this.validation_value = args[ 2 ];
    this.is_mandatory     = args[ 3 ];
};
SHINKEN_VALIDATION.Parameter.prototype           = {
    updateMaximumValue: function ( value_max ) {
        if ( this.validation_value && this.validation_value[ 1 ] === SHINKEN_VALIDATION.CONST.NUMBER.MAX ) {
            this.validation_value[ 1 ] = value_max;
        }
    }
};
SHINKEN_VALIDATION.Service                       = (function ( self ) {
    "use strict";
    self.isValid            = function ( value, validation_parameter ) {
        if ( value === "default" && !validation_parameter.is_mandatory ) {
            return true;
        }
        return _isValid( value, validation_parameter.validation_type, validation_parameter.validation_value, validation_parameter.is_mandatory );
    };
    self.parseToValidFormat = function ( param_value, validation_parameter ) {
        if ( param_value.getValue() === "default" ) {
            return;
        }
        
        
        _parseToValidFormat( param_value, validation_parameter.validation_type, validation_parameter.is_mandatory );
    };
    var _isValid            = function ( value, validation_type, validation_value, is_mandatory ) {
        if ( is_mandatory && value === "" ) {
            return false;
        }
        switch ( validation_type ) {
            case SHINKEN_VALIDATION.CONST.COLOR.CSS._KEY:
                if ( value ) {
                    if ( typeof value !== "string" ) {
                        return false;
                    }
                    if ( value.match( SHINKEN_VALIDATION.CONST.COLOR.CSS.REGEX ) ) {
                        return false;
                    }
                }
                break;
            case SHINKEN_VALIDATION.CONST.LIST.INCLUDE_IN:
                return GS.TOOLS.ARRAY.contains( validation_value, value );
            case SHINKEN_VALIDATION.CONST.NUMBER.FLOAT_POSITIVE:
                if ( !GS.TOOLS.NUMBER.isNumber( value ) ) {
                    return false;
                }
                if ( value < 0 ) {
                    return false;
                }
                break;
            case SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_POSITIVE:
                if ( !GS.TOOLS.NUMBER.isInteger( value ) ) {
                    return false;
                }
                if ( value < 0 ) {
                    return false;
                }
                break;
            case SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_BETWEEN:
                if ( !GS.TOOLS.NUMBER.isInteger( value ) ) {
                    return false;
                }
                if ( value < validation_value[ 0 ] ) {
                    return false;
                }
                if ( value > validation_value[ 1 ] ) {
                    return false;
                }
                break;
            case SHINKEN_VALIDATION.CONST.STRING.NOT_EMPTY:
                if ( typeof value !== "string" ) {
                    return false;
                }
                if ( value === "" ) {
                    return false;
                }
                break;
            case SHINKEN_VALIDATION.CONST.STRING.DONT_HAVE_FORBIDDEN:
                if ( typeof value !== "string" ) {
                    return false;
                }
                for ( var i = 0, _size_i = validation_value.length; i < _size_i; i++ ) {
                    if ( GS.TOOLS.STRING.contains( value, validation_value[ i ] ) ) {
                        return false;
                    }
                }
                break;
            case SHINKEN_VALIDATION.CONST.STRING.IS_STRING:
                return typeof value === "string";
            
            case SHINKEN_VALIDATION.CONST.OTHERS.DEFINE_STRING_OR_INTEGER_POSITIVE:
                if ( GS.TOOLS.ARRAY.contains( validation_value, value ) ) {
                    return true;
                }
                return _isValid( value, SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_POSITIVE );
            case SHINKEN_VALIDATION.CONST.BOOLEAN._KEY:
                return GS.TOOLS.BOOLEAN.isBoolean( value );
            case undefined:
            case "":
                break;
            default:
                console.warn( "SHINKEN_VALIDATION.Service [_isValid] UNKNOWN KEY", validation_type );
                break;
        }
        return true;
    };
    var _parseToValidFormat = function ( param_value, validation_type ) {
        var _parsed_value = undefined;
        switch ( validation_type ) {
            case SHINKEN_VALIDATION.CONST.NUMBER.FLOAT_POSITIVE:
                _parsed_value = parseFloat( param_value.getValue() );
                break;
            case SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_POSITIVE:
            case SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_BETWEEN:
                _parsed_value = parseInt( param_value.getValue() );
                break;
            case SHINKEN_VALIDATION.CONST.OTHERS.DEFINE_STRING_OR_INTEGER_POSITIVE:
                if ( GS.TOOLS.NUMBER.isInteger( param_value.getValue() ) ) {
                    _parsed_value = parseInt( param_value.getValue() );
                }
                break;
            case SHINKEN_VALIDATION.CONST.BOOLEAN._KEY:
                if ( GS.TOOLS.BOOLEAN.isBoolean( param_value.getValue() ) ) {
                    _parsed_value = GS.TOOLS.BOOLEAN.parseToBoolean( param_value.getValue() );
                }
                break;
        }
        if ( typeof _parsed_value !== 'undefined' && _parsed_value !== param_value.getValue() ) {
            param_value.setValue( _parsed_value );
        }
    };
    return self;
})( SHINKEN_VALIDATION.Service || {} );
GS.OBJECT.ElementWindowGroupSaveObject           = function () {
    this.saving_progress_bar      = null;
    this.dom_saving_bar_container = null;
    this._controller              = null;
    this.init();
};
GS.OBJECT.ElementWindowGroupSaveObject.prototype = {
    init                             : function ( controller ) {
        this._controller = controller;
        this.initCounterCommon();
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.USER );
        this.initPhase();
        this.setPhase( GS.OBJECT.CONST.PHASE.RUNNING );
    },
    clickOnButton                    : function ( event, event_name, param ) {
        switch ( event_name ) {
            case "click-on-apply-button":
                this.setPhase( GS.OBJECT.CONST.PHASE.ASK_FOR_SAVING );
                break;
            case "click-on-cancel-button":
                this.setPhase( GS.OBJECT.CONST.PHASE.ASK_FOR_CANCEL );
                break;
            case "click-on-validate-confirmation-popup":
                const _current_phase = this.getCurrentPhase();
                switch ( _current_phase ) {
                    case GS.OBJECT.CONST.PHASE.ASK_FOR_SAVING:
                        this.setPhase( GS.OBJECT.CONST.PHASE.SAVING );
                        break;
                    case GS.OBJECT.CONST.PHASE.ASK_FOR_CANCEL:
                        this.setPhase( GS.OBJECT.CONST.PHASE.CANCEL );
                        break;
                    case GS.OBJECT.CONST.PHASE.ASK_FOR_CLOSE:
                        GS.COMMUNICATION_WITH_IFRAME_PARENT.doActionAfter( "ask-for-pop-up-close-accepted" );
                        this.setPhase( GS.OBJECT.CONST.PHASE.CLOSE );
                        break;
                }
                MANAGER.__instance_confirmation_popup.hide();
                break;
            case "click-on-cancel-confirmation-popup":
                this.setPhase( GS.OBJECT.CONST.PHASE.RUNNING );
                MANAGER.__instance_confirmation_popup.hide();
                GS.COMMUNICATION_WITH_IFRAME_PARENT.doActionAfter( "ask-for-pop-up-close-refused" );
                break;
        }
    },
    doActionAfter                    : function ( event_name ) {
        switch ( event_name ) {
            case "ask-for-pop-up-close-event":
                if ( !this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.USER ).hasCounter() ) {
                    GS.COMMUNICATION_WITH_IFRAME_PARENT.doActionAfter( "ask-for-pop-up-close-accepted" );
                }
                else {
                    this.setPhase( GS.OBJECT.CONST.PHASE.ASK_FOR_CLOSE );
                }
                break;
        }
    },
    callbackForPhase                 : function () {
        const _current = this.getCurrentPhase();
        switch ( _current ) {
            case GS.OBJECT.CONST.PHASE.ASK_FOR_SAVING:
            case GS.OBJECT.CONST.PHASE.ASK_FOR_CANCEL:
            case GS.OBJECT.CONST.PHASE.ASK_FOR_CLOSE:
                this.doConfirmationPopup();
                break;
            case GS.OBJECT.CONST.PHASE.SAVING:
                this.saving_progress_bar.doProgress( GS.OBJECT.PROGRESS_BAR_CONST.SAVING_WITH_TREATMENT_AFTER_CALL.PREPARATION_CALL );
                break;
            case GS.OBJECT.CONST.PHASE.CANCEL:
                this.getController_20240426().doActionAfter( "cancel_user_orders", {} );
                break;
            case GS.OBJECT.CONST.PHASE.CLOSE:
                break;
            default:
                break;
        }
    },
    getController_20240426           : function () {
        return this._controller;
    },
    _doActionWhenProgressStart       : function ( current_step, param ) {
        switch ( current_step ) {
            case GS.OBJECT.PROGRESS_BAR_CONST.SAVING_WITH_TREATMENT_AFTER_CALL.PREPARATION_CALL:
                this.saving_progress_bar.setTitleStep( current_step, _( "progress_bar.saving_in_progress", [DICTIONARY_COMMON_UI] ) );
                break;
            case GS.OBJECT.PROGRESS_BAR_CONST.SAVING_WITH_TREATMENT_AFTER_CALL.CALL_IN_PROGRESS:
                this._askForSave();
                break;
            case GS.OBJECT.PROGRESS_BAR_CONST.SAVING_WITH_TREATMENT_AFTER_CALL.BACKEND_RETURN_ANALYSE:
                this.doTreatment( param );
                break;
            case GS.OBJECT.PROGRESS_BAR_CONST.SAVING_WITH_TREATMENT_AFTER_CALL.END:
                const _current_step = this.saving_progress_bar.getStep( current_step );
                const _message      = _current_step.isPhase( GS.OBJECT.CONST.PHASE.RUNNING_OK_WITH_WARNING ) ?
                                      _( 'progress_bar.saving_succeed_with_warning', [DICTIONARY_COMMON_UI] ) :
                                      _( "progress_bar.saving_succeed", [DICTIONARY_COMMON_UI] );
                this.saving_progress_bar.setTitleStep( current_step, _message );
                break;
            default:
                break;
        }
    },
    _doActionWhenProgressEnd         : function ( current_step, param ) {
        switch ( current_step ) {
            case GS.OBJECT.PROGRESS_BAR_CONST.SAVING_WITH_TREATMENT_AFTER_CALL.PREPARATION_CALL:
                this.saving_progress_bar.doProgress( GS.OBJECT.PROGRESS_BAR_CONST.SAVING_WITH_TREATMENT_AFTER_CALL.CALL_IN_PROGRESS );
                break;
            case GS.OBJECT.PROGRESS_BAR_CONST.SAVING_WITH_TREATMENT_AFTER_CALL.BACKEND_RETURN_TREATMENT:
                switch ( this.saving_progress_bar.getCurrentPhase() ) {
                    case GS.OBJECT.CONST.PHASE.RUNNING_NOK:
                        break;
                }
                break;
            case GS.OBJECT.PROGRESS_BAR_CONST.SAVING_WITH_TREATMENT_AFTER_CALL.END:
                this._doActionWhenSaveEnd();
                break;
        }
    },
    _doActionWhenSaveEnd             : function () {
    },
    doTreatment                      : function ( param ) {
    },
    _askForSave                      : function () {
    },
    computeHtml                      : function () {
        this.dom_element                = SERVICE.DOM.createElement( "table", { "class": "gs-window-group-save-table-action-button" } );
        const _tr                       = SERVICE.DOM.createElement( "tr", {} );
        const _td_saving_bar            = SERVICE.DOM.createElement( "td", { "class": "gs-window-group-save-progress-bar-cell" } );
        const _td_apply                 = SERVICE.DOM.createElement( "td", {} );
        const _td_cancel                = SERVICE.DOM.createElement( "td", {} );
        this.dom_saving_bar_container   = SERVICE.DOM.createElement( "div", { "class": "gs-window-group-save-container-saving-bar" } );
        const _apply_button_container   = SERVICE.DOM.createElement( "div", { "class": "gs-window-group-save-container-action-button" } );
        const _cancel_button_container  = SERVICE.DOM.createElement( "div", { "class": "gs-window-group-save-container-action-button" } );
        const _apply_button             = SERVICE.DOM.createElement( "div", {
            "class"  : "gs-window-group-save-action-button gs-window-group-save-apply-button",
            "onclick": "MANAGER.EventManager.clickOnButton(event, 'click-on-apply-button')"
        }, _( 'window_group_save.action_button.apply', [DICTIONARY_COMMON_UI] ) );
        const _onclick_attribute_cancel = 'MANAGER.EventManager.clickOnButton(event, "click-on-cancel-button")';
        const _cancel_button            = SERVICE.DOM.createElement( "div", {
            "class"  : "gs-window-group-save-action-button gs-window-group-save-cancel-button",
            "onclick": _onclick_attribute_cancel
        }, _( 'window_group_save.action_button.cancel', [DICTIONARY_COMMON_UI] ) );
        
        SERVICE.DOM.addElementTo( this.dom_saving_bar_container, _td_saving_bar );
        
        SERVICE.DOM.addElementTo( _apply_button, _apply_button_container );
        SERVICE.DOM.addElementTo( _apply_button_container, _td_apply );
        
        SERVICE.DOM.addElementTo( _cancel_button, _cancel_button_container );
        SERVICE.DOM.addElementTo( _cancel_button_container, _td_cancel );
        
        SERVICE.DOM.addElementTo( _td_saving_bar, _tr );
        SERVICE.DOM.addElementTo( _td_apply, _tr );
        SERVICE.DOM.addElementTo( _td_cancel, _tr );
        SERVICE.DOM.addElementTo( _tr, this.dom_element );
        this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.USER ).addTargetsDomElement( this.dom_element );
        this.saving_progress_bar = new GS.OBJECT.Progressbar( this, GS.OBJECT.PROGRESS_BAR_CONST.SAVING_WITH_TREATMENT_AFTER_CALL.END, 500, this.dom_saving_bar_container );
    },
    buildHtmlTitleConfirmationPopup  : function () {
        return "";
    },
    buildHtmlContentConfirmationPopup: function () {
        return SERVICE.DOM.createElement( "div", {} );
    },
    doConfirmationPopup              : function () {
        MANAGER.__instance_confirmation_popup.reset();
        MANAGER.__instance_confirmation_popup.setTitle( this.buildHtmlTitleConfirmationPopup() );
        MANAGER.__instance_confirmation_popup.setContent( this.buildHtmlContentConfirmationPopup() );
        MANAGER.__instance_confirmation_popup.setController( this._controller.controller_name );
        MANAGER.__instance_confirmation_popup.computeHtmlDomElement();
        MANAGER.__instance_confirmation_popup.show();
    }
};
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ElementWindowGroupSaveObject, GS.OBJECT.PhaseInterface );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ElementWindowGroupSaveObject, GS.OBJECT.ProgressbarInterface );
GS.TOOLS.CLASS.addPrototype( GS.OBJECT.ElementWindowGroupSaveObject, GS.OBJECT.CounterInterfaceV2 );
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
WINDOW.ElementGroupWithCommaAbstract           = function ( name ) {
};
WINDOW.ElementGroupWithCommaAbstract.prototype = {
    _doExtraActionAfterSetActiveWindow: function () {
        if ( !this.getDomElement() ) {
            return;
        }
        var _current;
        var _is_first = false;
        var _is_last  = false;
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            _current = this.contents[ i ];
            if ( !_is_first && _current.isVisible() ) {
                _is_first = true;
                SERVICE.DOM.addOrRemoveClasses( _current.getDomElement(), true, "gs-is-first-comma" );
            }
            else {
                SERVICE.DOM.addOrRemoveClasses( _current.getDomElement(), false, "gs-is-first-comma" );
            }
        }
        for ( i = this.contents.length; i > 0; i-- ) {
            _current = this.contents[ i - 1 ];
            if ( !_is_last && _current.isVisible() ) {
                _is_last = true;
                SERVICE.DOM.addOrRemoveClasses( _current.getDomElement(), true, "gs-is-last-comma" );
            }
            else {
                SERVICE.DOM.addOrRemoveClasses( _current.getDomElement(), false, "gs-is-last-comma" );
            }
        }
    }
};
WINDOW.ElementService                          = (function ( self ) {
    self.getWindowTargetHtml = function ( dom_tag, tab_name, is_active ) {
        var _class_to_add = is_active ? "gs-window-target" : "gs-window-target gs-hidden";
        var _to_return    = SERVICE.DOM.createElement( dom_tag, { id: "id-gs-window-" + tab_name + "-target", class: _class_to_add } );
        return _to_return;
    };
    self.getWindowHtml       = function ( dom_tag, window_id, label, group_name, is_active ) {
        var _class_to_add = is_active ? "gs-window-element gs-active" : "gs-window-element";
        var _to_return    = SERVICE.DOM.createElement( dom_tag, {
            class            : _class_to_add,
            "data-group-name": group_name,
            "data-name"      : window_id,
            id               : "id-gs-window-" + window_id
        }, label );
        return _to_return;
    };
    return self;
})( WINDOW.ElementService || {} );
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
WINDOW.ElementFromData           = function ( name, parent_name ) {
    this.__class_name__ = 'WINDOW.ElementFromData';
    this.name           = name;
    this.parent_name    = parent_name;
    this.init();
};
WINDOW.ElementFromData.prototype = {
    init             : function () {
        this.initCounters();
        this.initId();
    },
    initId           : function () {
        this.id = "id-gs-window-" + this.name + this.parent_name;
    },
    initController   : function () {
    },
    getController    : function () {
        return "";
    },
    resizeDone       : function () {
        if ( this.getController() ) {
            this.getController().resizeDone();
        }
    },
    getMainClass     : function () {
        var _to_return = "gs-window-element";
        if ( this.isActive() ) {
            _to_return += " gs-active";
        }
        if ( this.is_disabled ) {
            _to_return += " gs-disabled";
        }
        
        return _to_return;
    },
    computeHtml      : function () {
        this.setDomElement( SERVICE.DOM.createElement( "td", {
            "class"                : this.getMainClass(),
            "id"                   : this.id,
            "data-group-name"      : this.parent_name,
            "data-name"            : this.name,
            "data-visibility-state": this.getVisibilityState()
        } ) );
        this.main_div_dom_element = this.addDomElement( SERVICE.DOM.createElement( "div", { "class": "gs-div-tab" } ) );
        var _div_1                = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { "class": "gs-div-tab-content" } ), this.main_div_dom_element );
        var _table                = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "table", { "class": "gs-table" } ), _div_1 );
        var _tr                   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "tr" ), _table );
        SERVICE.DOM.addElementTo( this.getLabelCellHtml(), _tr );
        
        this.computeHtml_lvl_1();
        this.computeHtml_tooltip();
        this.computeHtmlTarget();
    },
    getLabelCellHtml : function () {
        var _to_return = SERVICE.DOM.createElement( "td", { "class": "gs-window-element-label" } );
        var _div       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {}, this.getLabel() ), _to_return );
        if ( this.total ) {
            this.total.computeHtml();
            SERVICE.DOM.addElementTo( this.total.getDomElement(), _div );
        }
        return _to_return;
    },
    computeHtml_lvl_1: function () {
    },
    computeHtmlTarget: function () {
        var _class = "gs-tab-pane property-tab-pane gs-prop-table gs-parent-tab-id-parent";
        if ( !this.is_active ) {
            _class += " gs-hidden";
        }
        this.dom_element_target = SERVICE.DOM.createElement( "div", {
            "class"    : _class,
            "id"       : this.id + "-target",
            "data-name": this.name
        } );
        if ( this.content_dom_element_target ) {
            SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW.ElementFromData, WINDOW.Element );
WINDOW.ElementFromDataWithComma           = function ( name, parent_name ) {
    this.__class_name__ = 'WINDOW.ElementFromDataWithComma';
    this.name           = name;
    this.parent_name    = parent_name;
    this.init();
};
WINDOW.ElementFromDataWithComma.prototype = {
    init             : WINDOW.ElementFromData.prototype.init,
    computeHtml_lvl_1: function () {
        var start_div = SERVICE.DOM.addElementAtIndex( SERVICE.DOM.createElement( "div", { class: "gs-div-round-part-1" } ), this.main_div_dom_element, 0 );
        var start_svg = SERVICE.DOM.addElementTo( SERVICE.DOM.cloneElement( document.getElementById( 'id-gs-window-comma-shadow-left' ).querySelector( ".window-comma-shadow-left" ) ), start_div );
        
        var end_div = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "gs-div-round-part-2" } ), this.main_div_dom_element );
        var end_svg = SERVICE.DOM.addElementTo( SERVICE.DOM.cloneElement( document.getElementById( 'id-gs-window-comma-shadow-right' ).querySelector( ".window-comma-shadow-right" ) ), end_div );
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW.ElementFromDataWithComma, WINDOW.ElementFromData );
WINDOW.ElementGroupFromDataAbstract           = function () {
};
WINDOW.ElementGroupFromDataAbstract.prototype = {
    init                : WINDOW.ElementGroup.prototype.init,
    initSpecific        : function () {
        this.init();
        this.initName();
        this.initWindows();
        MANAGER.__instance_window_distributor.setParentWindow( this.name, this );
    },
    initWindows         : function () {
    },
    initName            : function () {
        this.name = SERVICE.STRING.buildUUID();
    },
    initControllers     : function () {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].initController();
        }
    },
    getDomElementTargets: function () {
        return this.dom_element_targets;
    },
    resizeDone          : function () {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].resizeDone();
        }
    },
    computeHtml         : function () {
        this.setDomElement( SERVICE.DOM.createElement( "table", this.getMainAttribute() ) );
        var _onclick_attribute = this.getEventMangerHtml();
        var _dom_tr            = this.addDomElement( SERVICE.DOM.createElement( "tr", {
            "class"    : "gs-window-group",
            "data-name": this.name,
            "onclick"  : _onclick_attribute
        } ) );
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].computeHtml();
            SERVICE.DOM.addElementTo( this.contents[ i ].getDomElement(), _dom_tr );
        }
        this.computeHtmlTargets();
        this.computeHtml_lvl_1();
    },
    getEventMangerHtml  : function () {
        return "MANAGER.EventManager.clickOnWindowNavigation(event, '" + this.name + "')";
    },
    computeHtml_lvl_1   : function () {
    },
    computeHtmlTargets  : function ( dom_parent ) {
        this.dom_element_targets = SERVICE.DOM.createElement( "div", {
            "class": "gs-window-targets"
        } );
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            SERVICE.DOM.addElementTo( this.contents[ i ].dom_element_target, this.getDomElementTargets() );
        }
        if ( dom_parent ) {
            this.addDomElement( dom_parent );
        }
    },
    getMainAttribute    : function () {
        var _to_return = { "class": this.getMainClass() };
        if ( this.controller_name ) {
            _to_return[ "data-controller" ] = this.controller_name;
        }
        return _to_return;
    },
    getMainClass        : function () {
        var _to_return = "gs-window-element-table gs-table " + this.getClass();
        if ( this.controller_name ) {
            _to_return += " gs-parent-event-listener";
        }
        return _to_return;
    },
    onClick             : function ( event ) {
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].onClick( event );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW.ElementGroupFromDataAbstract, WINDOW.ElementGroup );
WINDOW.ElementGroupFromDataWithCommaAbstract           = function () {
    this.initSpecific();
};
WINDOW.ElementGroupFromDataWithCommaAbstract.prototype = {
    initSpecific     : WINDOW.ElementGroupFromDataAbstract.prototype.initSpecific,
    computeHtml_lvl_1: function () {
        this._doExtraActionAfterSetActiveWindow();
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW.ElementGroupFromDataWithCommaAbstract, WINDOW.ElementGroupWithCommaAbstract );
GS.TOOLS.CLASS.addPrototype( WINDOW.ElementGroupFromDataWithCommaAbstract, WINDOW.ElementGroupFromDataAbstract );
WINDOW.ElementFromHtml           = function ( name, dom_element, is_menu ) {
    this.__class_name__ = 'WINDOW.ElementFromHtml';
    this.name           = name;
    this.dom_element    = dom_element;
    this.is_menu        = !!is_menu;
    this.init();
};
WINDOW.ElementFromHtml.prototype = {
    init          : function () {
        this.initDomElement();
        if ( this.is_menu ) {
            var _dom_element_counters = this.dom_element.querySelectorAll( '.gs-counter' );
            this.counters             = {};
            var _current;
            for ( var i = 0, _size_i = _dom_element_counters.length; i < _size_i; i++ ) {
                _current                                      = _dom_element_counters[ i ];
                this.counters[ _current.dataset.counterType ] = new GS.OBJECT.Counter();
                this.counters[ _current.dataset.counterType ].init( _current );
            }
        }
        else {
            this.initCounters();
        }
    },
    initDomElement: function () {
        this.id = this.dom_element.getAttribute( 'id' );
        if ( this.is_menu ) {
            return;
        }
        if ( this.dom_element.classList.contains( "gs-active" ) ) {
            this.is_active = true;
        }
        this.dom_element_target = document.getElementById( this.id + '-target' );
        if ( !this.dom_element_target ) {
            console.warn( "[LA STRUCTURE HTML des windows n'est pas correcte]", this.id, this.id + '-target  ==> not found' );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW.ElementFromHtml, WINDOW.Element );
WINDOW.ElementGroupFromHtml           = function ( name ) {
    this.name = name;
    this.list = {};
    this.init();
};
WINDOW.ElementGroupFromHtml.prototype = {
    init       : function () {
        this.dom_element = document.querySelector( '.' + WINDOW.CONST.CLASS.WINDOW_GROUP + '[data-name="' + this.name + '"]' );
        this.initWindows();
    },
    initWindows: function () {
        var _dom_elements = this.dom_element.querySelectorAll( '.' + WINDOW.CONST.CLASS.WINDOW_TAB + '[data-group-name="' + this.name + '"]' );
        this.size         = _dom_elements.length;
        var _current;
        var _current_name;
        var _has_properties;
        for ( var i = 0; i < this.size; i++ ) {
            _current                   = _dom_elements[ i ];
            _current_name              = _current.dataset.name;
            _has_properties            = _current.dataset.hasProperties;
            this.list[ _current_name ] = _has_properties ? new WINDOW.ElementWithProperties( _current_name, _current ) : new WINDOW.Element( _current_name, _current );
        }
    },
    computeHtml: function () {
    
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW.ElementGroupFromHtml, WINDOW.ElementGroup );
