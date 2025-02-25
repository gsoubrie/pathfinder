"use strict";
var SHINKEN         = SHINKEN || {};
SHINKEN.OBJECT      = SHINKEN.OBJECT || {};
SHINKEN.OBJECT.FORM = {
    TYPE_SAVE : {
        VALUE_AND_DEFAULT_FOR_GRID : "value_and_default_type_grid"
    }
};
var PROPERTY_V2 = PROPERTY_V2 || {};
PROPERTY_V2.COMMON = {
    TYPES: {
        BOOLEAN                   : "boolean",
        DATA                      : "data",
        MULTI_SELECT              : "select-multi",
        MULTI_SELECT_BASIC        : "select-multi-basic",
        RANGE                     : "range",
        RANGE_BUSINESS_IMPACT     : "range_business_impact",
        RANGE_WITH_INPUT          : "range_with_input",
        SINGLE_SELECT             : "select-single",
        SINGLE_SELECT_WITH_INPUT  : "select-single-with-input",
        STRING_INPUT              : "input_string",
        STRING_LABEL              : "label_string",
        STRING_INPUT_WITH_DROPDOWN: "input-string-with-dropdown",
        CHECKBOX_SINGLE           : "checkbox-single",
        CHECKBOX_MULTI            : "checkbox-multi",
        RADIO_LIST                : "radio-list",
        RADIO_LIST_CUMULATIVE     : "radio-list-cumulative",
        MULTI_LINE_OBJECT         : "multi-line-object",
        PROPERTY_INFORMATION      : "property-information"
    },
    VALUE: {
        DEFAULT: "default"
    },
    PARAM: {
        IS_DEFAULT   : "is_default",
        DEFAULT_VALUE: "default_value"
    }
};
let SHINKEN_PAGE   = {};
SHINKEN_PAGE.CONST = {
    DEFAULT_VALUE               : "default",
    SLIDE_PANEL                 : {
        EDITION : {
            NAME: "shinken_edition_panel"
        },
        PROBLEMS: {
            NAME: "shinken_problem_panel"
        }
    },
    WINDOW_EDIT_NAME            : {
        VISUAL : "edit_tab_visual",
        JSON   : "edit_tab_json",
        HISTORY: "edit_tab_history",
        DEFAULT: "edit_tab_default"
        
    },
    WINDOWS_TABS_EDIT_PART      : {
        TABS     : [
            {
                name     : "edit_tab_visual",
                is_active: true
            },
            {
                name: "edit_tab_json"
            },
            {
                name: "edit_tab_history"
            },
            {
                name: "edit_tab_default"
            }
        ],
        INDEX_TAB: {
            VISUAL : 0,
            JSON   : 1,
            HISTORY: 2,
            DEFAULT: 3
            
        }
    },
    WINDOWS_TABS_EDITION_MESSAGE: {
        TABS     : [
            {
                name: "general"
            },
            {
                name: "widget"
            }
        ],
        INDEX_TAB: {
            GENERAL: 0,
            WIDGET : 1
        }
    },
    DOM_ELEMENT                 : {
        FORM_VALUE                        : "form_value",
        FORM_ACTION_BAR                   : "form_action_bar",
        FORM_CONTAINER                    : "edit-form-container",
        HISTORY_VIEW_HISTORY              : "shinken-view-history",
        LOADING_MESSAGE                   : "edit-loading-message",
        CURSOR_POSITION_LABEL             : "cursor_position_label",
        SAVING_POPUP_CONTAINER            : "saving_popup_container",
        INFO_BAR_EXTERNAL_LINK            : "info_bar_external_link",
        SHINKEN_BOX_MODE_EDITING          : "shinken-box-mode-editing",
        CURRENT_CHANGES_CONTAINER_VIEW    : "shinken-view-current-changes",
        EDIT_MODE_BTN_PUBLISH_VIEW        : "edit_mode_btn_publish_view",
        HISTORY_CONTAINER_VIEW            : "shinken-view-history-container",
        SLIDE_PANEL_SAVING_POPUP_CONTAINER: "slide_panel_saving_popup_container",
        ACTION_BAR                        : {
            BACK_TO_PREVIOUS_PREVIEW: "edit-action-bar-cancel-button"
        }
    },
    INFO_BAR                    : {
        PARAMS: {
            POSITION                 : "position",
            BACKGROUND_COLOR         : "background_color",
            LOGO_DISPLAYED           : "logo_displayed",
            REFRESH                  : "refresh",
            CHRONO_DISPLAYED         : "chrono_displayed",
            GENERATION_TIME_DISPLAYED: "generation_time_displayed"
        },
        VALUES: {
            POSITION_BOTTOM: "bottom"
        }
    },
    USER_PREFS                  : {
        FORM_POSITION         : "form_position",
        NAME                  : "weather_service", // TODO REGARDER POUR CHANGER ICI
    },
    EVENTS                      : {
        PARAM: {
            PAGE_OBJECT                  : "page_edit_object",
            PAGE_CONTENT_UUID            : "page_edit_content_uuid",
            WIDGET_MODE__PHASE__OBJECT   : "widget_mode__phase__object",
            ACTIVE_WINDOW_NAME_IS_JSON   : "active_window_name_is_json",
            NOTIFICATIONS_OF_CHANGE__DATA: "notifications_of_change__data"
        }
    },
    PARAM                       : {
        SPECIFIC_TREATMENT: {
            OBJECT_VALUE: "value",
            LIST_CONTENT: "list_content"
        },
        OBJECT_VALUE      : "value",
        PAGE              : {
            TYPE                   : "type",
            GRIDS                  : "grids",
            WEATHER_UUID           : "weather_uuid",// TODO VOIR POUR CHANGER ICI
            ELEMENTS_DATA          : "elements_data",
            USER_IS_ADMIN          : "user_is_admin",
            IDENTIFICATION         : "identification",
            VERSION                : "page_version",
            CURRENT_INFO_BAR       : "current_info_bar",
            CURRENT_NOTIFICATIONS  : "current_notifications",
            AUTHENTICATION_NEEDED  : "authentication_needed",
            VALIDATION_CHANGE_TIME : "validation_change_time",
            LAST_ELEMENT_DATA_FETCH: "last_element_data_fetch",
            USERS                  : {
                _KEY: "users"
            },
            NOTIFICATIONS          : {
                _KEY: "notifications"
            }
        }
    },
    STEP                        : {
        JS_JSON_VERIFICATION     : 1,
        CALL_BACKEND_VERIFICATION: 2,
        BACKEND_RETURN_TREATMENT : 3,
        END                      : 4
    },
    CONFIGURATION_ID_IS_OUTDATED: "configuration_id_is_outdated"
};
SHINKEN_PAGE.VISUALFORM  = {
    COLLAPSE_FOLDER: {
        WIDGETS: {
            _KEY       : "cf_weather_edit_widget_part",
            RADIO_MODES: {
                _KEY                          : "rm_weather_edit_widget_part",
                WIDGET                        : {
                    WIDGET_SELECT: "mode_widget_select",
                    WIDGET_ADD   : "mode_widget_add",
                    WIDGET_PUSH  : "mode_widget_push",
                    WIDGET_CREATE: "mode_widget_create",
                    WIDGET_DELETE: "mode_widget_delete",
                    WIDGET_CLONE : "mode_widget_clone",
                    SPACE_CREATE : "mode_space_create",
                    SPACE_DELETE : "mode_space_delete"
                },
                ADD_WIDGET                    : {
                    WEATHER_ADD  : "mode_add_widget_weather",
                    SEPARATOR_ADD: "mode_add_widget_separator",
                    RADIOS       : {
                        _KEY: "weather_radio_widget_mode_add"
                    }
                },
                SELECT_WIDGET                 : {
                    _KEY          : "weather_radio_widget_mode_select",
                    SELECT_BY_CLIC: "mode_select_widget_by_clic",
                    SELECT_BY_ZONE: "mode_select_widget_by_zone",
                    SELECT_BY_NAME: "mode_select_widget_by_name"
                },
                SELECT_WIDGET_SELECTOR_OPTIONS: {
                    TYPE     : "none",
                    WEATHER  : "weather_widget",
                    SEPARATOR: "separator_widget"
                }
            }
        }
    }
};
SHINKEN_PAGE.DEFAULTFORM = {
    COLLAPSE_FOLDER: {
        WEATHER  : {
            _KEY: "cf_weather_default_widget_part"
        },
        TITLE    : {
            _KEY: "cf_weather_default_title_part"
        },
        SEPARATOR: {
            _KEY: "cf_weather_default_separator_part"
        },
        EXTERNAL_LINK: {
            _KEY: "cf_weather_default_external_link_part"
        }
    }
};
var WINDOW_V2 = {};
WINDOW_V2.CONST = {
    CLASS: {
        WINDOW_GROUP  : "shinken-window-group-V2",
        WINDOW_TAB    : "shinken-window-element-V2",
        WINDOW_TARGETS: "shinken-window-targets-V2"
    },
    ID   : {
        WINDOW_TAB: "id-shinken-window-V2-"
    },
    SVG  : {
        COMMA_SHADOW_LEFT : '<svg class="window-comma-shadow-left" width="100%" height="100%" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_978_171179)"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.001 26.037L8.90833 26.4831C8.6068 26.4943 8.30403 26.4999 8.00014 26.4999L8.90833 26.4831C20.7005 26.0462 30.5863 17.1548 30.5863 6.83328C30.5863 5.01525 31.763 3.96366 33.0002 3.43616L33.001 26.037Z" fill="black" fill-opacity="0.19"/></g><path d="M36.001 3V27H12.001C23.0467 27 32.001 18.0457 32.001 7C32.001 4 34.6676 3 36.001 3Z" class="shinken-path"/></svg>',
        COMMA_SHADOW_RIGHT: '<svg class="window-comma-shadow-right" width="100%" height="100%" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_978_171179)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 26.037L27.0926 26.4831C27.3942 26.4943 27.697 26.4999 28.0008 26.4999L27.0926 26.4831C15.3005 26.0462 5.41463 17.1548 5.41463 6.83328C5.41463 5.01525 4.23799 3.96366 3.00079 3.43616L3 26.037Z" fill="black" fill-opacity="0.19"/></g><path d="M0 3V27H24C12.9543 27 4 18.0457 4 7C4 4 1.33333 3 0 3Z" class="shinken-path"/></svg>'
    },
    PARAM: {
        WINDOW_OBJECT    : "window_object",
        WINDOW_NAME      : "window_name",
        WINDOW_GROUP_NAME: "window_group_name",
        UPDATE_URL       : "update_url"
    }
};
SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage           = function ( default_configuration ) {
    this.init( default_configuration );
};
SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage.prototype = {
    init: SHINKEN.OBJECT.DefaultConfiguration.prototype.init,
    updateData                       : function ( data ) {
        if ( !data ) {
            return;
        }
        var _keys     = Object.keys( data );
        var _sizeData = _keys.length;
        var _currentKey;
        var _value;
        for ( var i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            _value      = data[ _currentKey ];
            switch ( _currentKey ) {
                case SHINKEN.OBJECT.CONST.VALIDATION.FIELD.MESSAGES:
                    this.setMessageValidation( _value );
                    break;
                case SHINKEN_PAGE.CONST.PARAM.SPECIFIC_TREATMENT.OBJECT_VALUE:
                    this.updateData( _value );
                    break;
                default:
                    this.setData( _currentKey, _value );
                    break;
            }
        }
    },
    _setData                         : function ( key, value_object ) {
        var _valid_own_properties = this.getValidOwnProperty();
        var _parameter            = _valid_own_properties.getParameter( key );
        if ( _parameter ) {
            this.setDataKey( key, value_object );
            return;
        }
        if ( !this._setDataDefaultObject( key, value_object ) ) {
            this.setDataAsUnknownProperty( key, value_object );
        }
    },
    setMessageValidation             : function ( value ) {
        this.setMessages( value );
        this.doActionAfterSetMessageValidation( value );
    },
    doActionAfterSetMessageValidation: function ( value ) {
        if ( value ) {
            CONTROLLER.PageController.doActionAfter( "add_object_with_problems__to__window_problem", { [ SHINKEN.OBJECT.CONST.VALIDATION.PARAM.CURRENT_OBJECT ]: this } );
        }
    },
    getDataForLastModification: function ( params ) {
        const _to_return = this.getDataForLastModificationCommon( params );
        if ( this.messages.hasMessage() ) {
            _to_return[ SHINKEN.OBJECT.CONST.VALIDATION.FIELD.MESSAGES ] = this.messages;
        }
        return _to_return;
    },
    getObjectParamConstructor   : function ( key, value, parameter, default_value, is_belonging_to_grid_cell_object ) {
        return new SHINKEN.OBJECT.ParamGridPage( key, value, parameter, default_value, is_belonging_to_grid_cell_object );
    },
    isObjectParamConstructor    : function ( value_object ) {
        return value_object instanceof SHINKEN.OBJECT.ParamGridPage;
    },
    getDefaultValueLabel        : function () {
        return SHINKEN_PAGE.CONST.DEFAULT_VALUE;
    },
    getObjectMessagesConstructor: function () {
        return new SHINKEN_PAGE.Messages();
    },
    parseValueToDict_withValueKey : function ( value_source, value_value ) {
        return { [ SHINKEN.OBJECT.CONST.PARAM.SOURCE_VALUE ]: value_source, [ SHINKEN.OBJECT.CONST.PARAM.VALUE ]: value_value };
    },
    parseDictToDict_withValueKey  : function ( dict ) {
        let to_return = {};
        var _keys     = Object.keys( dict );
        var _current_key;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            if ( typeof dict[ _current_key ] === "object" ) {
                to_return[ _current_key ] = this.parseObjectToDict_withValueKey( dict[ _current_key ] );
            }
            else {
                to_return[ _current_key ] = this.parseValueToDict_withValueKey( dict[ _current_key ], dict[ _current_key ] );
            }
        }
        return to_return;
    },
    parseObjectToDict_withValueKey: function ( object ) {
        let to_return = {};
        var _keys     = Object.keys( object );
        if ( _keys.length === 2 && object[ SHINKEN.OBJECT.CONST.PARAM.SOURCE_VALUE ] !== undefined && object[ SHINKEN.OBJECT.CONST.PARAM.VALUE ] !== undefined ) {
            return object;
        }
        return { [ SHINKEN_PAGE.CONST.PARAM.SPECIFIC_TREATMENT.OBJECT_VALUE ]: SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage.prototype.parseDictToDict_withValueKey( object ) };
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage, SHINKEN.OBJECT.DefaultConfigurationWithOwnProperty );
SHINKEN.OBJECT.ParamGridPage           = function ( key, value_object, parameter, default_value, is_belonging_to_grid_cell_object ) {
    this.is_belonging_to_grid_cell_object = is_belonging_to_grid_cell_object;
    this.init( key, value_object, parameter, default_value );
};
SHINKEN.OBJECT.ParamGridPage.prototype = {
    init               : SHINKEN.OBJECT.Param.prototype.init,
    initMessages       : function () {
        if ( !this.messages ) {
            this.messages = new SHINKEN_PAGE.Messages();
        }
    },
    setMessagesSpecific: function ( message ) {
        this.setMessages( message );
        this.doActionAfterSetMessageValidation( message );
    },
    getDataToSave                    : function () {
        return this.getUserValue();
    },
    doActionAfterSetMessageValidation: SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage.prototype.doActionAfterSetMessageValidation
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.ParamGridPage, SHINKEN.OBJECT.Param );
var PROPERTY    = PROPERTY || {};
PROPERTY.COMMON = {
    PARAM: {
        PROPERTY_MESSAGES          : "property__messages",
        PROPERTY_OBJECT            : "property__object",
        PROPERTY_NAME              : "property__name",
        COMPOSED_KEY               : "property__composed_key",
        PROPERTY_LIST__COMPOSED_KEY: "property__list__composed_key",
        PROPERTY_LABEL             : "property__label",
        PROPERTY_VALUE             : "property__value",
        PROPERTY_VISIBILITY        : "property__visibility",
        PARENT_OBJECT              : "parent_object",
        DEFAULT_VALUE              : "property__default_value"
    },
    INPUT: {
        SEARCH_INPUT: "search_input",
        MAIN_INPUT  : "main_input"
    }
};
PROPERTY.AbstractCommon = function () {
};
PROPERTY.AbstractCommon.prototype = {
    ___updateView: function () {
    },
    ___unset    : function () {
    },
    getSelector : function () {
    },
    getValue    : function () {
        console.error( "[Abstract - getValue]", "[NOT IMPLEMENTED]", this.type );
    },
    getFlatValue: function () {
        console.error( "[Abstract - getFlatValue]", "[NOT IMPLEMENTED]", this.type );
    },
    ___clickOnItemSelector : function ( _target_component, key_name ) {
    },
    ___clickOnCheckboxInput: function ( name ) {
    },
    ___clickOnRadioBtn     : function ( value ) {
    },
    ___onFocusOut          : function ( dom_element ) {
    },
    ___hidePopup           : function () {
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.AbstractCommon, SHINKEN.OBJECT.ShinkenObjectHtml );
PROPERTY.InterfaceCommon = function () {
};
PROPERTY.InterfaceCommon.prototype = {
    onFocus                : function () {
    },
    onFocusOut             : function ( dom_element ) {
        this.___onFocusOut( dom_element );
    },
    clickOnItemSelector_end: function ( target_component, key_name, dom_element ) {
        this.___clickOnItemSelector( target_component, key_name, dom_element );
    },
    clickOnInput           : function () {
        this.hidePopup();
    },
    clickOnCheckboxInput   : function ( name ) {
        this.___clickOnCheckboxInput( name );
    },
    clickOnRadioBtn        : function ( value ) {
        if ( this.is_disabled ) {
            return;
        }
        this.___clickOnRadioBtn( value );
    },
    keydown                : function ( event, key_code ) {
    },
    getName            : function () {
        return this.name;
    },
    getUUID            : function () {
        return this.getName();
    },
    getLabelViaDom     : function () {
        return this.dom_element.querySelector( '.shinken-property-label .shinken-label' ).innerText;
    },
    getNameOrUUID      : function () {
        return this.getName();
    },
    getParentName      : function () {
        return this.name;
    },
    getState           : function () {
        return this.state;
    },
    setState           : function ( _to_set ) {
        this.state = _to_set;
        DOM.Service.setDataSet( this.dom_element, 'state', this.state );
    },
    setLastItemSelected: function ( _to_set ) {
        this.last_list_element_selected = _to_set;
    },
    getValue           : function () {
        return this.value;
    },
    setValue           : function ( _to_set ) {
        this.value = _to_set;
    },
    isSet              : function () {
        var _to_return = this.getValue();
        return !!_to_return;
    },
    setIsDisable       : function ( to_set ) {
        if ( to_set && !this.is_disabled ) {
            this.dom_element.classList.add( 'shinken-disabled' );
        }
        else if ( !to_set && this.is_disabled ) {
            this.dom_element.classList.remove( 'shinken-disabled' );
        }
        this.is_disabled = to_set;
    },
    setIsRequired      : function ( to_set ) {
        this.is_required = to_set;
    },
    unset              : function () {
        this.___unset();
    },
    setValueFromUser   : function () {
        console.warn( "setValueFromUser", "[TYPE NOT MANAGED]", this.type );
    },
    isDifferentValue   : function ( value1, value2 ) {
        return value1 !== value2 && SHINKEN.TOOLS.STRING.unescape_xss( value1 ) !== SHINKEN.TOOLS.STRING.unescape_xss( value2 );
    },
    _computeState: function () {
    },
    computeHtml_common: function () {
    
    },
    hidePopup        : function ( exception ) {
        this.___hidePopup( exception );
    },
    updateView       : function () {
        this.___updateView();
    },
    getFlatValueLabel: function () {
    },
    getDataToSave: function () {
        return this.getDataToSaveFinal();
    },
    onClick      : function () {
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.InterfaceCommon, PROPERTY.AbstractCommon );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.InterfaceCommon, SHINKEN.OBJECT.CounterInterface );
PROPERTY.InterfaceCommonFromHtml = function () {
};
PROPERTY.InterfaceCommonFromHtml.prototype = {
    initWithDomElement: function ( element ) {
        this.name             = element.dataset.name;
        this.type             = element.dataset.type;
        this.dom_element      = element;
        this.default_value    = element.dataset.defaultValue;
        this.parent_container = null;
        this.is_disabled      = element.classList.contains( 'shinken-disabled' );
        this.initCounters( null, true );
        this.setIsRequired( element.dataset.isRequired );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.InterfaceCommonFromHtml, PROPERTY.InterfaceCommon );
PROPERTY.InterfaceCommonFromData = function () {
};
PROPERTY.InterfaceCommonFromData.prototype = {
    computeHtml_getClassContainer       : function () {
        return "shinken-element-property-line shinken-parent-event-listener";
    },
    computeHtml_getType                 : function () {
        return "";
    },
    computeHtml_getAttribute            : function () {
        var _to_return                        = this.computeHtml_getAttributeSpecific();
        _to_return[ "class" ]                 = this.computeHtml_getClassContainer();
        _to_return[ "onmouseenter" ]          = "MANAGER.EventManager.mouseEnter(event)";
        _to_return[ "onmouseleave" ]          = "MANAGER.EventManager.mouseLeave(event)";
        _to_return[ "onclick" ]               = "MANAGER.EventManager.onClick(event)";
        _to_return[ "data-controller" ]       = this.controller_name || CONTROLLER.CONST.FORM_CONTROLLER.NAME;
        _to_return[ "data-type" ]             = this.computeHtml_getType();
        _to_return[ "data-name" ]             = this.getName();
        _to_return[ "data-visibility-state" ] = this.getVisibilityState();
        return _to_return;
    },
    computeHtml_getAttributeSpecific    : function () {
        return {};
    },
    computeHtml_getCellPropAction       : function () {
        this.dom_cell_action = DOM.Service.createElement( "td", { class: "shinken-prop-cell-action" } );
        this.computeHtml_getCellPropActionContent();
        this.addDomElement( this.dom_cell_action );
    },
    computeHtml_getCellPropActionContent: function () {
    },
    computeHtml_container               : function () {
        this.label_common = new PROPERTY.LabelCommonFromData( this.getName(), this.getLabel() || this.getName() );
        this.label_common.computeHtml();
        this.setDomElement( DOM.Service.createElement( "tr", this.computeHtml_getAttribute() ) );
        this.addDomElement( this.label_common.getDomElement() );
        this.computeHtml_getCellPropAction();
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.InterfaceCommonFromData, PROPERTY.InterfaceCommon );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.InterfaceCommonFromData, SHINKEN.OBJECT.ShinkenObjectHtml );
PROPERTY.InterfaceCommonFromData_V3 = function () {
};
PROPERTY.InterfaceCommonFromData_V3.prototype = {
    computeHtml_getClassContainer       : function () {
        return "shinken-element-property-line-V3 shinken-layout-center-v";
    },
    computeHtml_getType                 : function () {
        return "";
    },
    computeHtml_getAttribute            : function () {
        var _to_return                        = this.computeHtml_getAttributeSpecific();
        _to_return[ "class" ]                 = this.computeHtml_getClassContainer();
        _to_return[ "onmouseenter" ]          = "MANAGER.EventManager.mouseEnter(event)";
        _to_return[ "onmouseleave" ]          = "MANAGER.EventManager.mouseLeave(event)";
        _to_return[ "onclick" ]               = "MANAGER.EventManager.onClick(event)";
        _to_return[ "data-type" ]             = this.computeHtml_getType();
        _to_return[ "data-name" ]             = this.getName();
        _to_return[ "data-visibility-state" ] = this.getVisibilityState();
        return _to_return;
    },
    computeHtml_getAttributeSpecific    : function () {
        return {};
    },
    computeHtml_getCellPropAction       : function () {
        this.dom_cell_action = DOM.Service.createElement( "div", { class: "shinken-prop-cell-action-V3" } );
        this.computeHtml_getCellPropActionContent();
        this.addDomElement( this.dom_cell_action );
    },
    computeHtml_getCellPropActionContent: function () {
    },
    computeHtml_container               : function () {
        this.label_common = new PROPERTY.LabelCommonFromData_V3( this.getName(), this.getLabel() || this.getName() );
        this.label_common.computeHtml();
        this.setDomElement( DOM.Service.createElement( "div", this.computeHtml_getAttribute() ) );
        this.addDomElement( this.label_common.getDomElement() );
        this.computeHtml_getCellPropAction();
    },
    doActionAfterLastModification: function ( event_name, param ) {
        switch ( event_name ) {
            case "undo_last_modification":
            case "redo_last_modification":
                const new_value = param[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getNextOrPrevious( event_name );
                this.doActionAfter( "property_value__set__by_js", { [ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ]: new_value } );
                this.previous_modication_data = this.getDataForLastModification();
                break;
        }
    },
    getDataForLastModification   : function ( params ) {
        return this.getDataToSave();
    },
    getLastModificationElement   : function () {
        let to_return;
        let element_modified = this;
        let previous         = this.previous_modication_data;
        let next             = this.getDataForLastModification();
        to_return            = new SHINKEN.OBJECT.LastModificationElement( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.PROPERTY_MODIFICATION, element_modified, previous, next );
        this.previous_modication_data = this.getDataForLastModification();
        
        return to_return;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.InterfaceCommonFromData_V3, SHINKEN.OBJECT.CounterInterfaceV2 );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.InterfaceCommonFromData_V3, PROPERTY.InterfaceCommon );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.InterfaceCommonFromData_V3, SHINKEN.OBJECT.ShinkenObjectHtml );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.InterfaceCommonFromData_V3, SHINKEN.OBJECT.EditableElementInterface );
PROPERTY.LabelCommonFromData           = function ( name, label ) {
    this.name  = name;
    this.label = label;
};
PROPERTY.LabelCommonFromData.prototype = {
    computeHtml: function () {
        this.setDomElement( DOM.Service.createElement( "td", { class: "shinken-prop-cell-label" } ) );
        var _table        = DOM.Service.addElementTo( DOM.Service.createElement( "table", { class: "shinken-width-100" } ), this.getDomElement() );
        var _tr           = DOM.Service.addElementTo( DOM.Service.createElement( "tr", { class: "shinken-width-100" } ), _table );
        var _td_1         = DOM.Service.addElementTo( DOM.Service.createElement( "td", {} ), _tr );
        var _div_1        = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-prop-cell-label-container" } ), _td_1 );
        var _table_1      = DOM.Service.addElementTo( DOM.Service.createElement( "table" ), _div_1 );
        var _tr_1_1       = DOM.Service.addElementTo( DOM.Service.createElement( "tr" ), _table_1 );
        var _td_1_1       = DOM.Service.addElementTo( DOM.Service.createElement( "td", { class: "shinken-property-label" } ), _tr_1_1 );
        var _span_1_1_1   = DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-counter shinken-error-counter", "data-number": "" } ), _td_1_1 );
        var _span_1_1_1_1 = DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-counter-label" } ), _span_1_1_1 );
        var _span_1_1_2   = DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-counter shinken-warning-counter", "data-number": "" } ), _td_1_1 );
        var _span_1_1_2_1 = DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-counter-label" } ), _span_1_1_2 );
        var _span_1_1_3   = DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-label" }, this.label ), _td_1_1 );
        
        var _tr_1_2       = DOM.Service.addElementTo( DOM.Service.createElement( "tr" ), _table_1 );
        var _td_1_2       = DOM.Service.addElementTo( DOM.Service.createElement( "td" ), _tr_1_2 );
        var _span_1_2_1   = DOM.Service.addElementTo( DOM.Service.createElement( "span", {
            class         : "shinken-information-tag",
            onmouseenter  : "SHINKEN_TOOLTIP.showTooltip(this)",
            onMouseLeave  : "SHINKEN_TOOLTIP.hideTooltip()",
            "shi-tip-html": ""
        } ), _td_1_2 );
        var _span_1_2_1_1 = DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-label-information" } ), _span_1_2_1 );
        var _span_1_2_1_2 = DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-tag-mark" }, "?" ), _span_1_2_1 );
        
        var _td_2  = DOM.Service.addElementTo( DOM.Service.createElement( "td", { class: "shinken-tag-help-cell" } ), _tr );
        var _div_2 = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-tag-help shinken-user-select-none", onclick: "MANAGER.EventManager.clickOnForcedHelpButton(event,this)" }, "?" ), _td_2 );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.LabelCommonFromData, SHINKEN.OBJECT.ShinkenObjectHtml );
PROPERTY.LabelCommonFromData_V3           = function ( name, label ) {
    this.name  = name;
    this.label = label;
};
PROPERTY.LabelCommonFromData_V3.prototype = {
    computeHtml: function () {
        this.setDomElement( DOM.Service.createElement( "div", { class: "shinken-prop-cell-label-V3 shinken-layout-center-h-v " } ) );
        var _div_1        = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-prop-cell-label-container" } ), this.getDomElement() );
        var _span_1_1_1   = DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-counter shinken-error-counter", "data-number": "" } ), _div_1 );
        var _span_1_1_1_1 = DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-counter-label" } ), _span_1_1_1 );
        var _span_1_1_2   = DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-counter shinken-warning-counter", "data-number": "" } ), _div_1 );
        var _span_1_1_2_1 = DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-counter-label" } ), _span_1_1_2 );
        var _span_1_1_3   = DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-label" }, this.label ), _div_1 );
        var _div_2        = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-tag-help shinken-user-select-none", onclick: "MANAGER.EventManager.clickOnForcedHelpButton(event,this)" }, "?" ), this.getDomElement() );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.LabelCommonFromData_V3, SHINKEN.OBJECT.ShinkenObjectHtml );
PROPERTY.SELECT = {
    PARAM: {
        SELECTOR_OBJECT: "selector_object",
        SELECTOR_NAME  : "selector_name",
        OPTION_NAME    : "option_name",
        OPTION_OBJECT  : "option_object"
    }
};
PROPERTY.InterfaceSelectAbstract           = function () {
};
PROPERTY.InterfaceSelectAbstract.prototype = {
    ___unset   : function () {
        this.setValueFromUser( '', '' );
    },
    getSelector: function ( selector_name ) {
        if ( !selector_name || selector_name === COMPONENT.CONST.SELECT.NAME_MAIN_SELECTOR ) {
            return this.component_selector;
        }
        console.log( "[InterfaceSelectAbstract - getSelector]", "[TO BE DEV]" );
    },
    ___hidePopup          : function ( exception ) {
        if ( exception !== this.getSelector() ) {
            this.getSelector().hidePopup();
        }
    },
    ___clickOnItemSelector: function ( _target_component, key_name ) {
        this.setLastItemSelected( key_name );
        this.getSelector().clickOnItemSelector( this.name, key_name );
        this.updateView();
        return true;
    },
    ___updateView      : function () {
        this._computeState();
    },
    _computeLabelSelect: function () {
    },
    
    doFilter: function ( dom_element, filter ) {
        var _target_component = this.getSelectViaDomElement( dom_element );
        _target_component.doFilter( filter );
    },
    keydown: function ( event, key_code ) {
        switch ( key_code ) {
            case SHINKEN.CONST.KEY_CODE.DOWN:
                this.getSelectViaDomElement( event.target ).moveAutoSelectCursor( true );
                event.preventDefault();
                break;
            case SHINKEN.CONST.KEY_CODE.UP:
                this.getSelectViaDomElement( event.target ).moveAutoSelectCursor( false );
                event.preventDefault();
                break;
            case SHINKEN.CONST.KEY_CODE.ENTER:
                this.getSelectViaDomElement( event.target ).validAutoSelect();
                event.preventDefault();
                break;
        }
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.InterfaceSelectAbstract, PROPERTY.InterfaceCommon );
PROPERTY.InterfaceSelectFromHtml           = function ( dom_element ) {
};
PROPERTY.InterfaceSelectFromHtml.prototype = {
    initMainSelector: function () {
        this.component_selector = new COMPONENT.Select( this.dom_element.querySelector( '.shinken-select-container[data-name="' + PROPERTY.CONST.SELECTOR.MAIN + '"]' ), this.type, false, this );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.InterfaceSelectFromHtml, PROPERTY.InterfaceSelectAbstract );
WINDOW_V2.ElementGroup           = function ( group_name ) {
    this.init( group_name );
};
WINDOW_V2.ElementGroup.prototype = {
    init      : function ( group_name ) {
        this.initCommon( group_name );
    },
    initCommon: function ( group_name ) {
        this.initCounterCommon();
        this.initContents();
        this.initName( group_name );
        this.initPhase();
        this.active_window = null;
        MANAGER.__instance_window_distributor.setParentWindow( this.name, this );
    },
    initCounterCommon           : function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    initName  : function ( group_name ) {
        this.name = group_name || SHINKEN.TOOLS.STRING.buildUUID();
        this.addParamForEvents( WINDOW_V2.CONST.PARAM.WINDOW_GROUP_NAME, this.name );
    },
    doActionAfter      : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon: function ( event_name, param ) {
        switch ( event_name ) {
            case "compute_html_done" : //NOT GIVE TO CHILDREN
                break;
            default:
                this.doActionAfterContentChildren( event_name, param );
                break;
        }
    },
    getController__20240819   : function () {
        return '';
    },
    getChildConstructor       : function ( window_name, parent_name ) {
        return new WINDOW_V2.Element( window_name, parent_name );
    },
    setActiveWindow           : function ( window_name ) {
        var _current;
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            if ( this.contents[ i ].setActiveWindow( window_name ) ) {
                this.active_window = this.contents[ i ];
            }
        }
        this.doActionAfter( "set_active_window", {[WINDOW_V2.CONST.PARAM.WINDOW_NAME] : window_name} );
    },
    getActiveWindow           : function () {
        if ( !this.active_window ) {
            for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
                if ( this.contents[ i ].isPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING_TO_STRING ) ) {
                    this.active_window = this.contents[ i ];
                    break;
                }
            }
        }
        return this.active_window;
    },
    getName                   : function () {
        return this.name;
    },
    clickOnWindow             : function ( window_name ) {
        var _current_window = this.getWindowByName( window_name );
        if ( !_current_window.isClickable() ) {
            return false;
        }
        this.setActiveWindow( window_name );
        return true;
    },
    getWindowByName           : function ( window_name ) {
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
        _to_return.setContentDomElementTarget( to_set );
        return _to_return;
    },
    hasProblems               : function ( window_name ) {
        return this.getWindowByName( window_name ).hasProblems();
    },
    setVisibilityWindowState  : function ( to_set, window_name ) {
        var _window = this.getWindowByName( window_name );
        _window.setVisibilityState( to_set );
        _window.doActionAfter( "set_visibility_state" );
    },
    getDomElementTargets     : function () {
        return this.dom_element_targets;
    },
    pulsateElementIfNotActive: function ( window_name ) {
        if ( this.getActiveWindow().getName() !== window_name ) {
            this.getActiveWindow().pulsate();
        }
    },
    getDataToSave: function () {
        return this.getActiveWindow().getDataToSave();
    },
    getUrlToSave : function () {
        return this.getActiveWindow().getUrlToSave();
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementGroup, SHINKEN.OBJECT.CounterInterfaceWithShinkenObjectContainer );
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementGroup, SHINKEN.OBJECT.PhaseInterface );
WINDOW_V2.ElementGroupWithComma           = function ( group_name ) {
    this.init( group_name );
};
WINDOW_V2.ElementGroupWithComma.prototype = {
    init: WINDOW_V2.ElementGroup.prototype.init,
    doActionAfter             : function ( event_name, param ) {
        this.doActionAfterSpecificComma( event_name, param );
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterSpecificComma: function ( event_name, param ) {
        switch ( event_name ) {
            case "compute_html_done":
                this.doActionAfter( "set_active_window_for_comma" );
                break;
            case "set_active_window_for_comma":
            case "set_active_window":
                if ( !this.getDomElement() ) {
                    break;
                }
                var _current;
                var _is_first = false;
                var _is_last  = false;
                for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
                    _current = this.contents[ i ];
                    if ( !_is_first && _current.isVisible() ) {
                        _is_first = true;
                        DOM.Service.addOrRemoveClasses( _current.getDomElement(), true, "shinken-is-first-comma" );
                    }
                    else {
                        DOM.Service.addOrRemoveClasses( _current.getDomElement(), false, "shinken-is-first-comma" );
                    }
                }
                for ( i = this.contents.length; i > 0; i-- ) {
                    _current = this.contents[ i - 1 ];
                    if ( !_is_last && _current.isVisible() ) {
                        _is_last = true;
                        DOM.Service.addOrRemoveClasses( _current.getDomElement(), true, "shinken-is-last-comma" );
                    }
                    else {
                        DOM.Service.addOrRemoveClasses( _current.getDomElement(), false, "shinken-is-last-comma" );
                    }
                }
                break;
        }
    },
    getChildConstructor: function ( window_name, parent_name ) {
        return new WINDOW_V2.ElementWithComma( window_name, parent_name );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementGroupWithComma, WINDOW_V2.ElementGroup );
WINDOW_V2.Element           = function ( window_name, parent_name ) {
    this.__class_name__ = "WINDOW_V2.Element";
    this.init( window_name, parent_name );
};
WINDOW_V2.Element.prototype = {
    init          : function ( window_name, parent_name ) {
        this.initCommon( window_name, parent_name );
    },
    initCommon    : function ( window_name, parent_name ) {
        this.initCounterCommon();
        this.name        = window_name;
        this.parent_name = parent_name;
        this.addParamForEvents( WINDOW_V2.CONST.PARAM.WINDOW_NAME, this.name );
        this.addParamForEvents( WINDOW_V2.CONST.PARAM.WINDOW_GROUP_NAME, this.parent_name );
        this.uuid = WINDOW_V2.CONST.ID.WINDOW_TAB + this.name;
        if ( this.parent_name ) {
            this.uuid = this.uuid + "-" + this.parent_name;
        }
        this.initPhase();
    },
    initController: function () {
        let controller = this.getController_20240426();
        if ( controller ) {
            controller.init();
        }
    },
    doActionAfter      : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon: function ( event_name, param ) {
        switch ( event_name ) {
            case "compute_html_done":
                this.setPhaseDomElement( this.getDomElement() );
                break;
            case "init_controller":
                this.initController();
                break;
        }
    },
    getController_20240426    : function () {
        return CONTROLLER.UiViewWeatherManager;
    },
    getName                   : function () {
        return this.name;
    },
    getParentName             : function () {
        return this.parent_name;
    },
    getLabel                  : function () {
        return this.label || this.name;
    },
    getUUID                   : function () {
        return this.uuid;
    },
    setActiveWindow           : function ( window_name ) {
        if ( this.getName() === window_name ) {
            this.setPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING_TO_STRING );
            return true;
        }
        else {
            this.setPhaseIfPhase( SHINKEN.OBJECT.CONST.PHASE.STOPPING, SHINKEN.OBJECT.CONST.PHASE.RUNNING_TO_STRING );
        }
        return false;
    },
    isClickable               : function () {
        var current_phase = this.getCurrentPhase();
        switch ( current_phase ) {
            case SHINKEN.OBJECT.CONST.PHASE.RUNNING_TO_STRING:
            case SHINKEN.OBJECT.CONST.PHASE.HIDDEN_TO_STRING:
                return false;
        }
        switch ( this.visibility_state ) {
            case SHINKEN.CONST.VISIBILITY_STATE.HIDDEN:
            case SHINKEN.CONST.VISIBILITY_STATE.DISABLED:
            case SHINKEN.CONST.VISIBILITY_STATE.LOCKED:
            case SHINKEN.CONST.VISIBILITY_STATE.TOTALLY_FORM_EXCLUDE:
                return false;
        }
        return true;
    },
    setContentDomElementTarget: function ( to_set ) {
        this.content_dom_element_target = to_set;
        DOM.Service.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    callbackForPhase: function () {
        var current = this.getCurrentPhase();
        if ( !this.dom_element_target ) {
            return;
        }
        switch ( current ) {
            case SHINKEN.OBJECT.CONST.PHASE.RUNNING_TO_STRING:
                this.dom_element_target.classList.remove( "shinken-hidden" );
                break;
            case SHINKEN.OBJECT.CONST.PHASE.STOPPING:
                this.dom_element_target.classList.add( "shinken-hidden" );
                break;
        }
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.Element, SHINKEN.OBJECT.CounterInterfaceV2 );
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.Element, SHINKEN.OBJECT.PhaseInterface );
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.Element, SHINKEN.OBJECT.ShinkenObjectHtml );
WINDOW_V2.ElementWithComma           = function ( window_name, parent_name ) {
    this.init( window_name, parent_name );
};
WINDOW_V2.ElementWithComma.prototype = {
    init: WINDOW_V2.Element.prototype.init,
    doActionAfter             : function ( event_name, param ) {
        this.doActionAfterSpecificComma( event_name, param );
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterSpecificComma: function ( event_name, param_1, param_2, param_3 ) {
        switch ( event_name ) {
            case "compute_html_done":
                var start_div = DOM.Service.addElementAtIndex( DOM.Service.createElement( "div", { class: "shinken-div-round-part-1" } ), this.main_div_dom_element, 0 );
                var start_svg = DOM.Service.createElement( "div", {}, WINDOW_V2.CONST.SVG.COMMA_SHADOW_LEFT );
                DOM.Service.addElementTo( start_svg.firstChild, start_div );
                
                var end_div = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-div-round-part-2" } ), this.main_div_dom_element );
                var end_svg = DOM.Service.createElement( "div", {}, WINDOW_V2.CONST.SVG.COMMA_SHADOW_RIGHT );
                DOM.Service.addElementTo( end_svg.firstChild, end_div );
                break;
        }
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementWithComma, WINDOW_V2.Element );
SHINKEN.OBJECT.RadioMode           = function ( name, label ) {
    this.init( name, label );
};
SHINKEN.OBJECT.RadioMode.prototype = {
    init             : function ( name, label ) {
        this.initPhase();
        this.name  = name;
        this.class = "shinken-radio-mode";
        if ( label ) {
            this.setLabel( label );
        }
        this.initCounterCommon();
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    doActionAfter      : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon: function ( event_name, param ) {
        switch ( event_name ) {
            case "property_value__set__by_js":
            case "property_value__set__by_data":
                this.setPhase( param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] === this.getName() ? SHINKEN.OBJECT.CONST.PHASE.RUNNING_TO_STRING : SHINKEN.OBJECT.CONST.PHASE.SLEEPING );
                break;
            case "change_radio_mode":
            case "change_radio_mode_by_js":
                this.setPhase( param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] === this.getName() ? SHINKEN.OBJECT.CONST.PHASE.RUNNING_TO_STRING : SHINKEN.OBJECT.CONST.PHASE.SLEEPING );
                break;
            case "add_message_validation":
                this.setMessage( param[ PROPERTY.COMMON.PARAM.PROPERTY_MESSAGES ] );
                return;
        }
    },
    getUUID   : function () {
        return this.name;
    },
    getName   : function () {
        return this.getUUID();
    },
    getValue  : function () {
        return this.getName();
    },
    setMessage: function ( message ) {
        var _status = COMPONENT.CONST.STATUS.NONE;
        if ( message ) {
            _status = message.getStatus();
        }
        var _counter = [0, 0];
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
        this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, this.uuid, _counter[ 0 ] );
        this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, this.uuid, _counter[ 1 ] );
    },
    computeHtml              : function () {
        this.computeCommonHtml();
        this.computeSpecificHtml();
        this.setPhaseDomElement( this.getDomElement() );
        this.addCountersTargetDomElement( this.getDomElement() );
    },
    computeCommonHtml        : function () {
        this.addParamForEvents( SHINKEN.OBJECT.RADIOMODE.PARAM.NAME, this.getName() );
        this.addParamForEvents( MANAGER.EVENT_MANAGER_V2.PARAM.STOP_PROPAGATION, true );
        this.setDomElement( DOM.Service.createElement( "div", {
            class: this.getClass(), "data-name": this.name, "onclick": "MANAGER.EventManagerV2.doActionAfter(event,'change_radio_mode'," + this.parseParamForEventsToHtml() + ")"
        } ) );
        let title_zone        = this.addDomElement( DOM.Service.createElement( "div", { class: "shinken-title-zone shinken-layout-center-h-v shinken-layout-justify-between" } ) );
        this.dom_content_zone = this.addDomElement( DOM.Service.createElement( "div", { class: "shinken-content-zone" } ) );
        
        let title_left_zone = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-title-zone-left shinken-layout-left-h-center-v" } ), title_zone );
        if ( this.getIconHtml() || this.getIconSrc() ) {
            let title_label = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-title-icon-container" } ), title_left_zone );
            if ( this.getIconHtml() ) {
                DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-radio-icon" }, this.getIconHtml() ), title_label );
            }
            else if ( this.getIconSrc() ) {
                DOM.Service.addElementTo( DOM.Service.createElement( "img", { class: "shinken-radio-icon", src: this.getIconSrc() } ), title_label );
            }
        }
        let tooltipPosition = (typeof this.getTooltipPosition === 'function' && this.getTooltipPosition()) ? this.getTooltipPosition() : SHINKEN_TOOLTIP.PLACEMENT.TOP;
        
        if ( this.getShortCutLetter() ) {
            let title_right_zone = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-title-zone-right" } ), title_zone );
            DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-title-short-cut-container" }, this.getShortCutLetter() ), title_right_zone );
            DOM.Service.addElementTo( DOM.Service.createElement( "div", {
                class                       : "shinken-icon shinkon shinkon-question",
                "onmouseenter"              : "SHINKEN_TOOLTIP.showTooltip(this)",
                "onmouseleave"              : "SHINKEN_TOOLTIP.hideTooltip()",
                "shi-tip-html"              : this.getHelpHtml(),
                "shi-tip-is-forced-position": tooltipPosition,
                "shi-tip-type"              : "help_weather_tooltip"
            } ), title_right_zone );
        }
        DOM.Service.addElementTo( this.getLabelDomElement(), title_left_zone );
        
        this.computeHtmlExtra();
    },
    getLabelDomElement       : function () {
        return DOM.Service.createElement( "div", { class: "shinken-label-container" }, this.label );
    },
    computeSpecificHtml      : function () {
    },
    getIconClass             : function () {
        return "";
    },
    getIconSrc               : function () {
        return "";
    },
    getIconHtml              : function () {
        return "";
    },
    getShortCutLetter        : function () {
        return "";
    },
    getTooltipPosition       : function () {
        return "";
    },
    getHelpHtml              : function () {
        let contents = this.getHelpContents();
        if ( !contents.length ) {
            return "";
        }
        return this.getHelpHtmlFromContents( contents );
    },
    getHelpHtmlFromContents  : function ( contents ) {
        let to_return = DOM.Service.createElement( "div", { class: "shinken-tooltip-help-container", "data-help-parent-name": this.getUUID() } );
        contents.forEach( content => {
            DOM.Service.addElementTo( this.getHelpHtmlLineContent( content ), to_return );
        } );
        return to_return.outerHTML;
    },
    getHelpHtmlLineContent   : function ( content ) {
        let to_return = DOM.Service.createElement( "div", { class: "shinken-tooltip-help-content " + this.getHelpSpecificClass() } );
        DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-tooltip-help-action-title" }, content.label ), to_return );
        let element_content = this.getHelpHtmlElementContent( content );
        if ( element_content ) {
            DOM.Service.addElementTo( element_content, to_return );
        }
        return to_return;
    },
    getHelpSpecificClass     : function ( content ) {
        return "shinken-tooltip-help-action";
    },
    getHelpHtmlElementContent: function ( content ) {
        let type_content = content.type_content;
        let to_return;
        switch ( type_content ) {
            case "label_&_content":
            case "image_&_content":
                to_return = DOM.Service.createElement( "div", { class: "shinken-tooltip-help-action-elements" } );
                if ( content.elements ) {
                    content.elements.forEach( content_element => {
                        DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: content_element.className }, content_element.content ), to_return );
                    } );
                    return to_return;
                }
                break;
            case"full_line_content":
                to_return = DOM.Service.createElement( "div", { class: "shinken-tooltip-help-action-inline-multiline-elements" } );
                if ( content.elements ) {
                    content.elements.forEach( content_element => {
                        DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: content_element.className }, content_element.content ), to_return );
                    } );
                    return to_return;
                }
                break;
            case "ordered_title":
                to_return = DOM.Service.createElement( "div", { class: "shinken-tooltip-help-action-inline-multiline-elements" } );
                DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: content.elements[ 0 ].className }, `${content.ordered_value} / ${content.elements[ 0 ].content}` ), to_return );
                return to_return;
        }
    },
    getHelpContents          : function () {
        return [];
    }
}
;
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.RadioMode, SHINKEN.OBJECT.ShinkenObjectHtml );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.RadioMode, SHINKEN.OBJECT.PhaseInterface );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.RadioMode, SHINKEN.OBJECT.CounterInterfaceV2 );
SHINKEN.OBJECT.CheckBoxRadioMode           = function ( name, label ) {
    this.initSpecific( name, label );
};
SHINKEN.OBJECT.CheckBoxRadioMode.prototype = {
    initSpecific: function ( name, label ) {
        this.init( name, label );
        this.addClass( "shinken-radio-with-checkbox" );
    },
    
    getIconHtml: function () {
        if ( !WEATHER.CONST.COMPONENT.SVG.RADIO_ICON ) {
            WEATHER.CONST.COMPONENT.SVG.RADIO_ICON = DOM.Service.cloneElement( document.querySelector( "#id-shinken-template-view .shinken-radio-button-svg" ) ).outerHTML;
        }
        return WEATHER.CONST.COMPONENT.SVG.RADIO_ICON;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.CheckBoxRadioMode, SHINKEN.OBJECT.RadioMode );
SHINKEN.OBJECT.CheckBoxRadioMode__WithSelector           = function ( name ) {
    this.initSpecific( name );
};
SHINKEN.OBJECT.CheckBoxRadioMode__WithSelector.prototype = {
    initSpecific: function ( name ) {
        this.init( name );
        this.selector__20241122 = new COMPONENT.SingleSelectFromData_V3( name, COMPONENT.CONST.SELECT.NAME_MAIN_SELECTOR );
        this.selector__20241122.addParamsForEvents( this.getParamForEvents() );
        this.addClass( "shinken-radio-with-checkbox shinken-radio-with-select" );
    },
    addOption   : function ( to_add ) {
        this.selector__20241122.addOption( to_add );
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "set_default_value_in_selector":
            case "add_message_validation":
            case "property_value__set__by_js":
            case "ask_hide_pop_up":
            case "click_done":
            case "click_on_selector_V3":
            case "click_on_item_selector_V3":
            case "property_value__set__by_data":
            case "change_selector_default_title":
                this.selector__20241122.doActionAfter( event_name, param );
                return;
            case "change_radio_mode":
                this.selector__20241122.doActionAfter( "ask_hide_pop_up", param );
                break;
        }
        this.doActionAfterCommon( event_name, param );
    },
    addParamForEvents: function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        this.selector__20241122.addParamForEvents( key, value );
    },
    getValue         : function () {
        return this.selector__20241122.getValue();
    },
    doActionAfterLastModification: function ( event_name, param ) {
        this.selector__20241122.doActionAfterLastModification(event_name, param);
    },
    getDataForLastModification: function ( params ) {
        return this.selector__20241122.getDataForLastModification();
    },
    getLabelDomElement: function () {
        this.selector__20241122.computeHtml();
        var to_return = DOM.Service.createElement( "div", { class: "shinken-label-container" } );
        DOM.Service.addElementTo( this.selector__20241122.getDomElement(), to_return );
        return to_return;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.CheckBoxRadioMode__WithSelector, SHINKEN.OBJECT.CheckBoxRadioMode );
SHINKEN.OBJECT.CheckBoxRadioMode__WithStringInput           = function ( name ) {
    this.initSpecific( name );
};
SHINKEN.OBJECT.CheckBoxRadioMode__WithStringInput.prototype = {
    initSpecific: function ( name ) {
        this.init( name );
        this.input__20241122 = new COMPONENT.InputFromData_V3( name );
        this.input__20241122.addParamsForEvents( this.getParamForEvents() );
        this.addClass( "shinken-radio-with-checkbox shinken-radio-with-input" );
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "add_message_validation":
            case "onchange_in_input_V3":
            case "click_on_button_V3":
            case "property_value__set__by_data":
            case "property_value__set__by_js":
            case "set_placeholder_input_V3":
            case "clean_validation_error":
                this.input__20241122.doActionAfter( event_name, param );
                return;
        }
        this.doActionAfterCommon( event_name, param );
    },
    getValue         : function () {
        return this.input__20241122.getValue();
    },
    addParamForEvents: function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        this.input__20241122.addParamForEvents( key, value );
    },
    doActionAfterLastModification: function ( event_name, param ) {
        this.input__20241122.doActionAfterLastModification(event_name, param);
    },
    getDataForLastModification: function ( params ) {
        return this.input__20241122.getDataForLastModification();
    },
    getLabelDomElement: function () {
        this.input__20241122.computeHtml();
        var to_return = DOM.Service.createElement( "div", { class: "shinken-label-container" } );
        DOM.Service.addElementTo( this.input__20241122.getDomElement(), to_return );
        return to_return;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.CheckBoxRadioMode__WithStringInput, SHINKEN.OBJECT.CheckBoxRadioMode );
SHINKEN.OBJECT.RADIOMODE = {
    PARAM         : {
        NAME                          : "radio_mode_name",
        PARENT_OBJECT                 : "radio_parent_object_name",
        RADIO_MODE_IS_DISABLE         : "radio_mode_is_disable",
        IS_RADIO_MODE_ALREADY_IN_PHASE: "is_radio_mode_already_in_phase"
    },
    RADIO_SELECTOR: "radio_selector",
    RADIO_INPUT   : "radio_input"
};
SHINKEN.OBJECT.RadioModes           = function ( name ) {
    this.init( name );
};
SHINKEN.OBJECT.RadioModes.prototype = {
    init           : function ( name ) {
        this.name = name;
        this.initContents();
        this.initPhase( SHINKEN.OBJECT.CONST.PHASE.READY );
    },
    initListContent: function ( data_radios ) {
        var _current;
        for ( var i = 0, _size_i = data_radios.length; i < _size_i; i++ ) {
            _current = this.add( this.getChildConstructor( data_radios[ i ].name, data_radios[ i ].label ) );
            _current.addParamsForEvents( this.getParamForEvents() );
            if ( data_radios[ i ][ PROPERTY_V2.COMMON.PARAM.IS_DEFAULT ] ) {
                _current.addClass( "shinken-is-default" );
                this.setDefaultKeyAndValue( data_radios[ i ].name, data_radios[ i ][ PROPERTY_V2.COMMON.PARAM.DEFAULT_VALUE ] );
            }
        }
    },
    doActionAfter      : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon: function ( event_name, param ) {
        switch ( event_name ) {
            case "change_radio_mode_by_js":
            case "change_radio_mode":
                if ( param[ SHINKEN.OBJECT.RADIOMODE.PARAM.RADIO_MODE_IS_DISABLE ] ) {
                    return;
                }
                param[ SHINKEN.OBJECT.RADIOMODE.PARAM.IS_RADIO_MODE_ALREADY_IN_PHASE ] = this.isPhase( param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] );
                this.setPhase( param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] );
                for ( let j = 0, _size_j = this.contents.length; j < _size_j; j++ ) {
                    this.contents[ j ].doActionAfter( event_name, param );
                }
                if ( param[ SHINKEN.OBJECT.FORMSET.PARAM.FORM_NAME ] ) {
                    CONTROLLER.Form.doActionAfter( "change_radio_mode_done", param );
                }
                break;
            case "property_value__set__by_data":
            case "property_value__set__by_js":
                if ( !this.getContentByUUID( param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] ) ) {
                    let _current = this.add( this.getChildConstructor( param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ], param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] ) );
                    _current.addParamsForEvents( this.getParamForEvents() );
                    _current.addParamForEvents( SHINKEN.OBJECT.RADIOMODE.PARAM.RADIO_MODE_IS_DISABLE, true );
                }
                this.setPhase( param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] );
                for ( let j = 0, _size_j = this.contents.length; j < _size_j; j++ ) {
                    this.contents[ j ].doActionAfter( event_name, param );
                }
                break;
            case "change_radio_mode_if_not_set":
                if ( this.isPhase( SHINKEN.OBJECT.CONST.PHASE.READY ) ) {
                    this.doActionAfter( "change_radio_mode", {
                            [ SHINKEN.OBJECT.RADIOMODE.PARAM.PARENT_OBJECT ]: this.getName(),
                            [ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ]         : this.getContent( 0 ).getUUID()
                        }
                    );
                }
                break;
            case "add_message_validation":
                this.getContentByUUID( param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] ).doActionAfter( event_name, param );
                break;
            default:
                for ( let i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
                    this.contents[ i ].doActionAfter( event_name, param );
                }
                break;
        }
    },
    getChildConstructor: function ( name, label ) {
        return new SHINKEN.OBJECT.RadioMode( name, label );
    },
    getUUID : function () {
        return this.name;
    },
    getName : function () {
        return this.getUUID();
    },
    getClass: function ( to_add ) {
        return "shinken-radio-modes-content";
    },
    add: function ( to_add ) {
        let to_return = this.addCommon( to_add );
        to_add.addParamForEvents( SHINKEN.OBJECT.RADIOMODE.PARAM.PARENT_OBJECT, this.getName() );
        return to_return;
    },
    computeHtml        : function () {
        this.computeCommonHtml();
        this.computeSpecificHtml();
        this.setPhaseIfPhase( SHINKEN.OBJECT.CONST.PHASE.READY, SHINKEN.OBJECT.CONST.PHASE.INIT );
        this.doActionAfter( "compute_html_done" );
    },
    computeCommonHtml  : function () {
        this.setDomElement( DOM.Service.createElement( "div", { class: this.getClass() } ) );
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).computeHtml();
            this.addDomElement( this.getContent( i ).getDomElement() );
        }
        this.computeHtmlExtra();
    },
    computeSpecificHtml: function () {
    },
    getDataToSave: function () {
        return this.getValue();
    },
    getValue     : function () {
        return this.getCurrentPhase();
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.RadioModes, SHINKEN.OBJECT.ShinkenObjectContainerHtml );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.RadioModes, SHINKEN.OBJECT.PhaseInterface );
SHINKEN.OBJECT.CheckBoxRadioModes           = function ( name ) {
    this.init( name );
};
SHINKEN.OBJECT.CheckBoxRadioModes.prototype = {
    init: SHINKEN.OBJECT.RadioModes.prototype.init,
    getChildConstructor: function ( name, label ) {
        return new SHINKEN.OBJECT.CheckBoxRadioMode( name, label );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.CheckBoxRadioModes, SHINKEN.OBJECT.RadioModes );
SHINKEN.OBJECT.CheckBoxRadioModes__WithSelector           = function ( name ) {
    this.initSpecific( name );
};
SHINKEN.OBJECT.CheckBoxRadioModes__WithSelector.prototype = {
    initSpecific   : function ( name ) {
        this.init( name );
    },
    initListContent: function ( data_radios ) {
        var _current;
        for ( var i = 0, _size_i = data_radios.length; i < _size_i; i++ ) {
            if ( data_radios[ i ][ PROPERTY_V2.COMMON.PARAM.IS_DEFAULT ] ) {
                _current = this.add( this.getChildConstructor( data_radios[ i ].name, data_radios[ i ].label ) );
                _current.addParamsForEvents( this.getParamForEvents() );
                _current.addClass( "shinken-is-default" );
                this.setDefaultKeyAndValue( data_radios[ i ].name, data_radios[ i ][ PROPERTY_V2.COMMON.PARAM.DEFAULT_VALUE ] );
            }
            else {
                let radio_selector = this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_SELECTOR );
                if ( !radio_selector ) {
                    _current = this.add( this.getChildConstructorForSelect( SHINKEN.OBJECT.RADIOMODE.RADIO_SELECTOR ) );
                    _current.addParamsForEvents( this.getParamForEvents() );
                }
                _current.addOption( data_radios[ i ] );
            }
        }
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "set_default_value_in_selector":
                this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_SELECTOR ).doActionAfter( event_name, param );
                break;
            case "ask_hide_pop_up":
            case "click_done":
                param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ] = this;
                this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_SELECTOR ).doActionAfter( event_name, param );
                this.doActionAfter( "change_radio_mode_to_default_value_if_value_not_set" );
                break;
            case "change_radio_mode_to_default_value_if_value_not_set":
                if ( !this.getValue() ) {
                    this.doActionAfter( "change_radio_mode", { [ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ]: this.getDefaultKey() } );
                }
                return;
            case "click_on_selector_V3":
                param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ] = this;
                param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] = SHINKEN.OBJECT.RADIOMODE.RADIO_SELECTOR;
                this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_SELECTOR ).doActionAfter( event_name, param );
                return;
            case "click_on_item_selector_V3":
                param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ] = this;
                param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] = SHINKEN.OBJECT.RADIOMODE.RADIO_SELECTOR;
                this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_SELECTOR ).doActionAfter( event_name, param );
                this.doActionAfter( "change_radio_mode_by_js", param );
                return;
            case "click_on_item_selector_done":
                this.setPhase( param.getLastSelectedElementName() );
                return;
            case "property_value__set__by_data":
            case "property_value__set__by_js":
                let btn_radio                                = this.getContentByValue( param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] );
                param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ] = this;
                param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] = btn_radio.getName();
                btn_radio.doActionAfter( event_name, param );
                this.doActionAfter( "change_radio_mode", param );
                return;
            case "add_message_validation":
                this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_SELECTOR ).doActionAfter( event_name, param );
                return;
        }
        this.doActionAfterCommon( event_name, param );
    },
    setPhase     : function ( to_set ) {
        this.phase.setPhase( to_set );
    },
    getValue                    : function () {
        return this.getContentByValue( this.getCurrentPhase() ).getValue();
    },
    getContentByValue           : function ( value ) {
        let to_return = this.getContentByUUID( value );
        if ( !to_return ) {
            to_return = this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_SELECTOR );
        }
        return to_return;
    },
    getChildConstructor         : function ( name, label ) {
        return new SHINKEN.OBJECT.CheckBoxRadioMode( name, label );
    },
    getChildConstructorForSelect: function ( name ) {
        return new SHINKEN.OBJECT.CheckBoxRadioMode__WithSelector( name );
    },
    doActionAfterLastModification: function ( event_name, param ) {
        this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_SELECTOR ).doActionAfterLastModification(event_name, param);
    },
    getDataForLastModification: function ( params ) {
        return this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_SELECTOR ).getDataForLastModification();
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.CheckBoxRadioModes__WithSelector, SHINKEN.OBJECT.CheckBoxRadioModes );
SHINKEN.OBJECT.CheckBoxRadioModes__WithStringInput           = function ( name ) {
    this.initSpecific( name );
};
SHINKEN.OBJECT.CheckBoxRadioModes__WithStringInput.prototype = {
    initSpecific   : function ( name ) {
        this.init( name );
    },
    initListContent: function ( data_radios ) {
        var _current;
        for ( var i = 0, _size_i = data_radios.length; i < _size_i; i++ ) {
            switch ( data_radios[ i ].name ) {
                case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.WIDTH.OPTIONS.STRING_INPUT:
                    _current = this.add( this.getChildConstructorForInput( SHINKEN.OBJECT.RADIOMODE.RADIO_INPUT ) );
                    break;
                default:
                    _current = this.add( this.getChildConstructor( data_radios[ i ].name, data_radios[ i ].label ) );
                    if ( data_radios[ i ][ PROPERTY_V2.COMMON.PARAM.IS_DEFAULT ] ) {
                        _current.addClass( "shinken-is-default" );
                        this.setDefaultKeyAndValue( data_radios[ i ].name, data_radios[ i ][ PROPERTY_V2.COMMON.PARAM.DEFAULT_VALUE ] );
                    }
                    break;
            }
            _current.addParamsForEvents( this.getParamForEvents() );
        }
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "property_value__set__by_data":
            case "property_value__set__by_js":
                param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ] = this;
                const btn_radio                              = this.getContentByValue( param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] );
                param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] = btn_radio.getName();
                btn_radio.doActionAfter( event_name, param );
                this.doActionAfter( "change_radio_mode", param );
                return;
            case "add_message_validation":
            case "onchange_in_input_V3":
            case "click_on_button_V3":
            case "onclick_in_input_V3":
            case "clean_validation_error":
                param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] = SHINKEN.OBJECT.RADIOMODE.RADIO_INPUT;
                this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_INPUT ).doActionAfter( event_name, param );
                return;
            case "update_radio_mode_using_input_value":
                let value = this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_INPUT ).getValue();
                if ( value === "" ) {
                    value = this.getDefaultKey();
                }
                const btn_radio_2 = this.getContentByValue( value );
                this.setPhase( btn_radio_2.getValue() );
                this.doActionAfter( "change_radio_mode", { [ PROPERTY.COMMON.PARAM.PARENT_OBJECT ]: this, [ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ]: btn_radio_2.getName() } );
                break;
        }
        this.doActionAfterCommon( event_name, param );
    },
    getValue                   : function () {
        return this.getContentByValue( this.getCurrentPhase() ).getValue();
    },
    getContentByValue          : function ( value, is_forced ) {
        let to_return = this.getContentByUUID( value );
        if ( !to_return ) {
            to_return = this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_INPUT );
        }
        return to_return;
    },
    getChildConstructor        : function ( name, label ) {
        return new SHINKEN.OBJECT.CheckBoxRadioMode( name, label );
    },
    getChildConstructorForInput: function ( name ) {
        return new SHINKEN.OBJECT.CheckBoxRadioMode__WithStringInput( name );
    },
    doActionAfterLastModification: function ( event_name, param ) {
        this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_INPUT ).doActionAfterLastModification(event_name, param);
    },
    getDataForLastModification: function ( params ) {
        return this.getContentByUUID( SHINKEN.OBJECT.RADIOMODE.RADIO_INPUT ).getDataForLastModification();
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.CheckBoxRadioModes__WithStringInput, SHINKEN.OBJECT.CheckBoxRadioModes );
WINDOW_V2.ElementFromData           = function ( window_name, parent_name ) {
    this.__class_name__ = 'WINDOW_V2.ElementFromData';
    this.initSpecific( window_name, parent_name );
    
};
WINDOW_V2.ElementFromData.prototype = {
    init        : WINDOW_V2.Element.prototype.init,
    initSpecific: function ( window_name, parent_name ) {
        this.init( window_name, parent_name );
        this.label = new COMPONENT.LabelFromData( this.getName() );
    },
    getMainClass     : function () {
        return WINDOW_V2.CONST.CLASS.WINDOW_TAB + " shinken-layout-inline-center-h-v shinken-user-select-none";
    },
    computeHtml      : function () {
        this.setDomElement( DOM.Service.createElement( "div", {
            "class"                : this.getMainClass(),
            "id"                   : this.getUUID(),
            "data-group-name"      : this.getParentName(),
            "data-name"            : this.getName(),
            "data-visibility-state": this.getVisibilityState()
        } ) );
        this.main_div_dom_element = this.addDomElement( DOM.Service.createElement( "div", { "class": "shinken-div-tab shinken-layout-center-h-v" } ) );
        DOM.Service.addElementTo( this.getLabelCellHtml(), this.main_div_dom_element );
        this.doActionAfter( "compute_html_done" );
        this.computeHtml_tooltip();
        this.computeHtmlTarget();
    },
    getLabelCellHtml : function () {
        this.label.computeHtml();
        var _to_return = this.label.getDomElement();
        this.addCounterComputeHtmlIfExist( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL, _to_return );
        this.addCounterComputeHtmlIfExist( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, _to_return );
        this.addCounterComputeHtmlIfExist( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, _to_return );
        return _to_return;
    },
    computeHtmlTarget: function () {
        if ( this.dom_element_target ) {
            return;
        }
        var _class = "shinken-tab-pane property-tab-pane shinken-prop-table shinken-parent-tab-id-parent";
        if ( !this.isPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING_TO_STRING ) ) {
            _class += " shinken-hidden";
        }
        this.dom_element_target = DOM.Service.createElement( "div", { "class": _class, "id": this.getUUID() + "-target", "data-name": this.getName() } );
        if ( this.content_dom_element_target ) {
            DOM.Service.addElementTo( this.content_dom_element_target, this.dom_element_target );
        }
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementFromData, WINDOW_V2.Element );
WINDOW_V2.ElementFromDataWithComma           = function ( window_name, parent_name ) {
    this.__class_name__ = 'WINDOW_V2.ElementFromDataWithComma';
    this.init( window_name, parent_name );
};
WINDOW_V2.ElementFromDataWithComma.prototype = {
    init         : WINDOW_V2.ElementFromData.prototype.init,
    doActionAfter: WINDOW_V2.ElementWithComma.prototype.doActionAfter
};
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementFromDataWithComma, WINDOW_V2.ElementFromData );
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementFromDataWithComma, WINDOW_V2.ElementWithComma );
WINDOW_V2.ElementGroupFromData           = function ( group_name ) {
    this.init( group_name );
};
WINDOW_V2.ElementGroupFromData.prototype = {
    init        : WINDOW_V2.ElementGroup.prototype.init,
    initWithData: function ( data_windows ) {
        for ( let i = 0, _size_i = data_windows.length; i < _size_i; i++ ) {
            let added = this.addSpecific( this.getChildConstructor( data_windows[ i ].name, this.getName() ) );
            if ( data_windows[ i ].is_active ) {
                this.setActiveWindow( data_windows[ i ].name );
            }
            if ( data_windows[ i ].label ) {
                added.label.updateLabel( data_windows[ i ].label );
            }
        }
    },
    getChildConstructor: function ( window_name, parent_name ) {
        return new WINDOW_V2.ElementFromData( window_name, parent_name );
    },
    computeHtml        : function () {
        
        this.setDomElement( DOM.Service.createElement( "div", this.getMainAttribute() ) );
        if ( this.getController__20240819() ) {
            this.addParamForEvents( CONTROLLER.CONST.CONTROLLER_NAME_LABEL, this.getController__20240819().controller_name );
        }
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].computeHtml();
            this.addDomElement( this.contents[ i ].getDomElement() );
        }
        this.doActionAfter( "compute_html_done" );
    },
    computeHtmlTargets : function ( dom_parent ) {
        this.dom_element_targets = DOM.Service.addElementTo( DOM.Service.createElement( "div", { "class": WINDOW_V2.CONST.CLASS.WINDOW_TARGETS } ), dom_parent );
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].computeHtmlTarget();
            DOM.Service.addElementTo( this.contents[ i ].dom_element_target, this.dom_element_targets );
        }
    },
    getMainAttribute   : function () {
        var _to_return            = { "class": this.getMainClass() };
        _to_return[ "data-name" ] = this.getName();
        _to_return[ "onclick" ]   = this.getEventManager();
        if ( this.controller_name ) {
            _to_return[ "data-controller" ] = this.controller_name;
        }
        return _to_return;
    },
    getEventManager   : function () {
        return  "MANAGER.EventManagerV2.clickOnWindowNavigation(event, " + this.parseParamForEventsToHtml() + ")";
    },
    getMainClass       : function () {
        var _to_return = WINDOW_V2.CONST.CLASS.WINDOW_GROUP + " " + this.getClass();
        if ( this.controller_name ) {
            _to_return += " shinken-parent-event-listener";
        }
        return _to_return;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementGroupFromData, WINDOW_V2.ElementGroup );
WINDOW_V2.ElementGroupFromDataWithComma           = function ( group_name ) {
    this.init( group_name );
};
WINDOW_V2.ElementGroupFromDataWithComma.prototype = {
    init         : WINDOW_V2.ElementGroupFromData.prototype.init,
    doActionAfter: WINDOW_V2.ElementGroupWithComma.prototype.doActionAfter,
    getChildConstructor: function ( window_name, parent_name ) {
        return new WINDOW_V2.ElementFromDataWithComma( window_name, parent_name );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementGroupFromDataWithComma, WINDOW_V2.ElementGroupFromData );
SHINKEN.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementGroupFromDataWithComma, WINDOW_V2.ElementGroupWithComma );
SHINKEN.OBJECT.WindowEditPartAbstract           = function ( window_name, parent_name ) {
    this.__class_name__ = 'SHINKEN.OBJECT.WindowEditPartAbstract';
    this.init( window_name, parent_name );
};
SHINKEN.OBJECT.WindowEditPartAbstract.prototype = {
    init: function ( window_name, parent_name ) {
        this.initCommon( window_name, parent_name );
        this.label = new COMPONENT.LabelFromData( _( "edit_mode.windows.label." + this.name ) );
        this.label.addClass( "shinken-layout-bottom-v" );
    },
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.WindowEditPartAbstract, WINDOW_V2.ElementFromDataWithComma );
SHINKEN.OBJECT.WindowGenericEditPart           = function ( window_name, parent_name ) {
    this.__class_name__ = 'WEATHER.WindowGenericEditPart';
    this.init( window_name, parent_name );
};
SHINKEN.OBJECT.WindowGenericEditPart.prototype = {
    init: SHINKEN.OBJECT.WindowEditPartAbstract.prototype.init,
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "compute_html_done":
                this.computeContentTarget();
                break;
        }
        this.doActionAfterSpecificComma( event_name, param );
        this.doActionAfterCommon( event_name, param );
    },
    computeHtml         : WINDOW_V2.ElementFromData.prototype.computeHtml,
    computeContentTarget: function () {
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.WindowGenericEditPart, SHINKEN.OBJECT.WindowEditPartAbstract );
SHINKEN.OBJECT.GridPageWindowGroupEditPart = function () {
    this.initSpecific( "shinken-edition-main-part" );
};
SHINKEN.OBJECT.GridPageWindowGroupEditPart.prototype = {
    initSpecific       : function ( group_name ) {
        this.init( group_name );
        this.addClass( "shinken-layout-bottom-v" );
        this.initWithData( SHINKEN_PAGE.CONST.WINDOWS_TABS_EDIT_PART.TABS );
    },
    getChildConstructor: function ( window_name, parent_name ) {
        switch ( window_name ) {
            case SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.VISUAL:
                return new SHINKEN.OBJECT.WindowGenericEditPart( window_name, this.name );
            case SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON:
                return new SHINKEN.OBJECT.WindowJsonEditPart( window_name, this.name );
            case SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.HISTORY:
                return new SHINKEN.OBJECT.WindowEditPartAbstract( window_name, this.name );
            case SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.DEFAULT:
                return new SHINKEN.OBJECT.WindowDefaultEditPart( window_name, this.name );
        }
    },
    
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "set_active_window":
                this.setPhase( param[ WINDOW_V2.CONST.PARAM.WINDOW_NAME ] );
                break;
        }
        this.doActionAfterSpecificComma( event_name, param );
        this.doActionAfterCommon( event_name, param );
    },
    getEventManager    : function () {
        return "CONTROLLER.PageController.askNavigateGroupEdition(event, " + this.parseParamForEventsToHtml() + ")";
    },
    computeHtmlSpecific: function ( window_container ) {
        this.setContentDomElementTarget( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON, window_container.querySelector( ".shinken-json-div" ) );
        this.setContentDomElementTarget( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.HISTORY, window_container.querySelector( ".shinken-view-history-container" ) );
        this.setContentDomElementTarget( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.DEFAULT, window_container.querySelector( ".shinken-view-default-container" ) );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageWindowGroupEditPart, WINDOW_V2.ElementGroupFromDataWithComma );
SHINKEN.OBJECT.FORMSET = {
    PARAM: {
        FORM_NAME                      : "form__name",
        FORM_LINK_OBJECT_UUID          : "form__linked__object_uuid",
        FORM_OBJECT                    : "form__object",
        FORM_ANIMATION_STOP_PROPAGATION: "form__animation_stop_propagation",
        DATA                           : "form__data",
        IS_VALID                       : "form__is_valid"
    }
};
SHINKEN.OBJECT.FormSet           = function ( name ) {
    this.init( name );
};
SHINKEN.OBJECT.FormSet.prototype = {
    init      : function ( name ) {
        this.initCommon( name );
    },
    initCommon: function ( name ) {
        this.setName( name );
        this.initContents();
        this.initPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING_TO_STRING );
        this.property_set = this.getChildConstructor();
    },
    doActionAfter               : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon         : function ( event_name, param ) {
        param = param || {};
        switch ( event_name ) {
            case "click_on_button_V3":
                switch ( param[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case "validated_form":
                    case "cancel_form":
                        param[ SHINKEN.OBJECT.FORMSET.PARAM.FORM_OBJECT ] = this;
                        this.getController__20241003().doActionAfter( event_name, param );
                        return;
                }
                break;
            case "add_message_validation":
                this.updateStatusValidationWithMessage( param[ PROPERTY.COMMON.PARAM.PROPERTY_MESSAGES ] );
                break;
            case "toggl_collapse_folder__is_open":
                this.getContentByUUID( param[ SHINKEN.OBJECT.COLLAPSE.PARAM.NAME ] ).doActionAfter( event_name, param );
                return;
        }
        if ( param[ PROPERTY.COMMON.PARAM.PROPERTY_NAME ] || param[ PROPERTY.COMMON.PARAM.PROPERTY_OBJECT ] ) {
            this.property_set.doActionAfter( event_name, param );
        }
        else {
            for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
                this.contents[ i ].doActionAfter( event_name, param );
            }
        }
    },
    doActionAfterContentChildren: function ( event_name, param ) {
        for ( let i = 0, _size_i = this.property_set.getSize(); i < _size_i; i++ ) {
            this.property_set.getContent( i ).doActionAfter( event_name, param );
        }
    },
    hidePopup                   : function ( param ) {
        var _current;
        for ( let i = 0, _size_i = this.property_set.getSize(); i < _size_i; i++ ) {
            _current = this.property_set.getContent( i );
            if ( param && _current.getName() !== param[ PROPERTY.COMMON.PARAM.PROPERTY_NAME ] ) {
                _current.hidePopup();
            }
            else {
                _current.doActionAfter( "ask_hide_pop_up", param );
            }
        }
    },
    setName                : function ( to_set ) {
        this.name = to_set;
        this.addParamForEvents( SHINKEN.OBJECT.FORMSET.PARAM.FORM_NAME, this.name );
    },
    getChildConstructor    : function () {
        return new SHINKEN.OBJECT.PropertiesSet();
    },
    setController__20241003: function ( to_set ) {
        this.controller = to_set;
    },
    getController__20241003: function () {
        return this.controller;
    },
    addToProperties        : function ( to_add ) {
        this.property_set.add( to_add );
        to_add.addParamsForEvents( this.getParamForEvents() );
    },
    getPropertyByName      : function ( property_name ) {
        return this.property_set.getContentByUUID( property_name );
    },
    addSpecific            : function ( to_add, ignore_property, visibility_state ) {
        if ( !ignore_property ) {
            this.addToProperties( to_add );
        }
        if ( visibility_state ) {
            to_add.setVisibilityState( visibility_state );
        }
        to_add.addParamsForEvents( this.getParamForEvents() );
        return this.add( to_add );
    },
    addSpecificToChild     : function ( to_add, child, ignore_property, visibility_state ) {
        if ( !ignore_property ) {
            this.addToProperties( to_add );
        }
        if ( visibility_state ) {
            to_add.setVisibilityState( visibility_state );
        }
        return child.add( to_add );
    },
    getName                : function () {
        return this.name;
    },
    computeFooterContent   : function () {
        this.footer_content = null;
    },
    getFooterContent       : function () {
        return this.footer_content;
    },
    updateStatusValidationWithMessage: function ( messages ) {
        let status_message = messages.getStatus();
        switch ( status_message ) {
            case COMPONENT.CONST.STATUS.ERROR:
                this.setStatusValidation( COMPONENT.CONST.STATUS.ERROR );
                break;
            case COMPONENT.CONST.STATUS.WARNING:
                if ( this.status_validation !== COMPONENT.CONST.STATUS.ERROR ) {
                    this.setStatusValidation( COMPONENT.CONST.STATUS.WARNING );
                }
                break;
        }
    },
    setStatusValidation              : function ( to_set ) {
        this.status_validation = to_set;
    },
    isValid                          : function () {
        return this.status_validation !== COMPONENT.CONST.STATUS.ERROR;
    },
    computeValidation__20241125      : function () {
        this.status_validation = COMPONENT.CONST.STATUS.VALID;
    },
    getDataToSave__20241114: function ( type_save, property_list ) {
        return this.property_set.getDataToSave__20241114( type_save, property_list );
    },
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.FormSet, SHINKEN.OBJECT.ShinkenObjectContainerHtml );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.FormSet, SHINKEN.OBJECT.PhaseInterface );
SHINKEN.OBJECT.PropertiesSet           = function () {
    this.initContentsSpecific();
};
SHINKEN.OBJECT.PropertiesSet.prototype = {
    initContentsSpecific: function () {
        this.initContents();
    },
    doActionAfter      : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon: function ( event_name, param ) {
        var _current_prop;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            _current_prop = this.getContent( i );
            if ( _current_prop.getUUID() === param[ PROPERTY.COMMON.PARAM.PROPERTY_NAME ] ) {
                _current_prop.doActionAfter( event_name, param );
            }
            else if ( _current_prop === param[ PROPERTY.COMMON.PARAM.PROPERTY_OBJECT ] ) {
                _current_prop.doActionAfter( event_name, param );
            }
            else {
                _current_prop.hidePopup();
            }
        }
    },
    getDataToSave__20241114: function ( type_save, property_list ) {
        const _to_return = {};
        let _current;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            _current = this.getContent( i );
            if ( property_list && !SHINKEN.TOOLS.ARRAY.contains( property_list, _current.getUUID() ) ) {
                continue;
            }
            _to_return[ _current.getUUID() ] = _current.getDataToSave__20241127( type_save );
        }
        return _to_return;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.PropertiesSet, SHINKEN.OBJECT.ShinkenObjectContainer );
SHINKEN.OBJECT.GridPage           = function ( uuid ) {
    this.__class_name__ = "SHINKEN.OBJECT.GridPage";
    this.init( uuid );
};
SHINKEN.OBJECT.GridPage.prototype = {
    init                 : function ( uuid ) {
        this.initCommon( uuid );
    },
    initCommon           : function ( uuid ) {
        this.uuid                                                    = uuid;
        this.page_version                                            = "-1";
        this[ SHINKEN_PAGE.CONST.PARAM.PAGE.VALIDATION_CHANGE_TIME ] = "-1";
        this.setDomElement( document.querySelector( ".shinken-grid-page-container" ) );
        this.initPhase( "", this.getDomElement() );
        this.bar_info = this.getInfoBarChildConstructor( null, this.getDomElement() );
        this.reset();
        this.initRefresh();
        this.getBackendData__20240926( ( _status, data ) => {
            this.actionsAfterGetData( _status, data );
            this.computeHtml();
        } );
        this._getValidOwnChildren();
    },
    initCounterCommon    : function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WIDGET_TOTAL );
    },
    onTimeoutError       : function () {
        this.setPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING );
        this.refresh_object.setPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING );
    },
    onScroll             : function ( event ) {
        this.content.onScroll( event );
    },
    doActionAfter        : function ( event_name, params ) {
    },
    setIdentification    : function ( to_set ) {
        this.page_version                                    = to_set[ SHINKEN_PAGE.CONST.PARAM.PAGE.VERSION ][ "value" ];
        this[ SHINKEN_PAGE.CONST.PARAM.PAGE.IDENTIFICATION ] = to_set;
    },
    setViewBehaviour     : function ( to_set ) {
        const data                                              = {};
        data[ SHINKEN.OBJECT.VIEW.BEHAVIOUR.PARAM.LAST_UPDATE ] = to_set[ SHINKEN.OBJECT.VIEW.BEHAVIOUR.PARAM.LAST_UPDATE ][ SHINKEN_PAGE.CONST.PARAM.SPECIFIC_TREATMENT.OBJECT_VALUE ];
        data[ SHINKEN.OBJECT.VIEW.BEHAVIOUR.PARAM.PHASE ]       = to_set[ SHINKEN.OBJECT.VIEW.BEHAVIOUR.PARAM.PHASE ][ SHINKEN_PAGE.CONST.PARAM.SPECIFIC_TREATMENT.OBJECT_VALUE ];
        
        this.view_behaviour = new SHINKEN.OBJECT.ViewBehaviour();
        this.view_behaviour.setPhaseDomElement( this.getDomElement(), "viewBehaviour" );
        this.view_behaviour.updateData( data );
        SHINKEN.COMMUNICATION_WITH_IFRAME_PARENT.doActionAfter( "update_screen_with_view_behaviour", this.view_behaviour );
    },
    getChildrenObject    : function () {
        const _to_return = this.content.getChildrenObject();
        _to_return.push( this.users );
        _to_return.push( this.notifications );
        return _to_return;
    },
    getChildrenObjectDict: function () {
        const _to_return                                       = this.content.getChildrenObjectDict();
        _to_return[ SHINKEN_PAGE.CONST.PARAM.PAGE.USERS._KEY ] = this.users || new SHINKEN.OBJECT.UserGrids();
        return _to_return;
    },
    _getValidOwnChildren : function () {
        return new SHINKEN.OBJECT.DefaultConfigurationChildren( [
            [WEATHER.CONST.EXTERNAL_LINKS.PARAM.DEFAULT_LINK._KEY, "SHINKEN.OBJECT.DefaultConfigurationPageDefault"]
        ] );
    },
    getUUID                   : function () {
        return this.uuid;
    },
    getPageVersion            : function () {
        return this.page_version;
    },
    getInfoBarChildConstructor: function ( data, parent_dom_element ) {
        return new SHINKEN_PAGE.InfoBar( data, parent_dom_element );
    },
    computeSizes: function () {
        this.content.computeSizes();
    },
    initRefresh: function () {
        this.refresh_object = new SHINKEN.OBJECT.Refresh( 60000, this );
        this.refresh_object.addUiComponent( new SHINKEN.TOOLS.ClockComponent() );
        this.refresh_object.addUiComponent( new SHINKEN.TOOLS.UpdateAtComponent() );
    },
    refresh                        : function () {
        const _self = this;
        this.getBackendData__20240926( function ( _status, data ) {
            _self.actionsAfterGetData( _status, data );
        } );
    },
    actionsAfterGetData            : function ( _status, data ) {
        this.updateUserPrefsFromBackendData();
        this.updateObject( data[ "output" ], true );
        this.setPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING );
        this.askComputeNotificationOfChange();
        SHINKEN.COMMUNICATION_WITH_IFRAME_PARENT.doActionAfter( "iframe_grid_page_view_has_been_refreshed" );
    },
    getDefaultNotificationsOfChange: function ( actions_after_get_user_prefs ) {
    },
    updateUserPrefsFromBackendData : function () {
        if ( !__has_authentication_needed__ ) {
            this.getDefaultNotificationsOfChange( ( _status, data ) => {
                this.default_notifications_of_changed.updateData( data );
                this.askComputeNotificationOfChange();
            } );
            return;
        }
        const actionAfterGetUsersPrefsSuccess = ( _status, data ) => {
            this.user_prefs.updateData( data );
            this.getDefaultNotificationsOfChange( ( _status, data ) => {
                this.default_notifications_of_changed.updateData( data );
                this.askComputeNotificationOfChange();
            } );
        };
        this.getUserPrefs( actionAfterGetUsersPrefsSuccess );
    },
    getUserPrefs                   : function ( actions_after_get_user_prefs ) {
        const url                             = SHINKEN.HIGHWAY.getOrigin() + COMMUNICATION.QUERY.GET.USER.GET_USER_PREFERENCES;
        const actionsAfterGetUserPrefsSuccess = function ( _status, data ) {
            actions_after_get_user_prefs( _status, data );
        };
        SHINKEN.COMUNICATION.requestGet( url, actionsAfterGetUserPrefsSuccess );
    },
    getController                  : function () { // TO OVERRIDE
        throw new Error( "getController of SHINKEN.OBJECT.GridPage need to be override" );
    },
    getBackendData__20240926       : function ( actions_after_get_data, need_user_value ) {
        const url                               = this.getBackendDataUrl__20241008( need_user_value );
        const actionsAfterGetBackendDataSuccess = ( _status, data ) => {
            switch ( data.rc ) {
                case COMMUNICATION.CODE.ERROR :
                    this.getController().doActionAfter400();
                    break;
                case COMMUNICATION.CODE.NOT_FOUND:
                    this.getController().doActionWhenNotFound();
                    break;
                case COMMUNICATION.CODE.FORBIDDEN:
                    this.getController().doActionAfter403();
                    break;
                default:
                    actions_after_get_data( _status, data );
                    break;
            }
        };
        SHINKEN.COMUNICATION.requestGet( url, actionsAfterGetBackendDataSuccess, this.getController().onTimeoutError, this.getController().doActionWhenNotFound );
    },
    getBackendDataUrl__20241008    : function () {// TO OVERRIDE
        throw new Error( "getBackendDataUrl of SHINKEN.OBJECT.GridPage need to be override" );
    },
    callbackForPhase: function () {
        const _current_phase = this.getCurrentPhase();
        switch ( _current_phase ) {
            case SHINKEN.OBJECT.CONST.PHASE.RUNNING:
                this.content.setPhase( _current_phase );
                this.refresh_object.setPhase( _current_phase );
                this.getController().askCloseLoadingPage();
                break;
            case SHINKEN.OBJECT.CONST.PHASE.REFRESHING:
            case SHINKEN.OBJECT.CONST.PHASE.HIDDEN:
                this.refresh_object.setPhase( _current_phase );
                break;
            default:
                break;
        }
    },
    reset                  : function () { // TO OVERRIDE
        console.warn( "CPOU", "[Page - reset]", "[]" );
    },
    saveJsHistory          : function () {
        return false;
    },
    updateObject           : function ( data, skip_history ) {
        if ( data[ SHINKEN_PAGE.CONST.CONFIGURATION_ID_IS_OUTDATED ] ) {
            SHINKEN.HIGHWAY.refreshCurrentPage();
            return;
        }
        this.doActionAfter( "before__update_object__grid_page" );
        this.initMessages();
        
        const _keys     = Object.keys( data );
        const _sizeData = _keys.length;
        let _currentKey;
        let _value;
        if ( data[ SHINKEN_PAGE.CONST.PARAM.SPECIFIC_TREATMENT.OBJECT_VALUE ] ) {
            this.updateData( data[ SHINKEN_PAGE.CONST.PARAM.SPECIFIC_TREATMENT.OBJECT_VALUE ] ); // The object must be updated before getting the remaining
        }
        for ( let i = 0; i < _sizeData; i++ ) {
            _currentKey = _keys[ i ];
            _value      = data[ _currentKey ];
            switch ( _currentKey ) {
                case SHINKEN.OBJECT.CONST.VALIDATION.FIELD.MESSAGES:
                    this.setMessages( _value );
                    break;
                case SHINKEN_PAGE.CONST.PARAM.PAGE.ELEMENTS_DATA:
                    this.content.setData( _currentKey, _value );
                    break;
                case SHINKEN_PAGE.CONST.PARAM.PAGE.CURRENT_INFO_BAR:
                    this.bar_info.updateData( _value );
                    break;
                case SHINKEN_PAGE.CONST.PARAM.PAGE.CURRENT_NOTIFICATIONS:
                    this.bar_info.doActionAfter( "update__notification_of_change__data", { [ SHINKEN_PAGE.CONST.EVENTS.PARAM.NOTIFICATIONS_OF_CHANGE__DATA ]: _value[ SHINKEN_PAGE.CONST.PARAM.SPECIFIC_TREATMENT.OBJECT_VALUE ] } );
                    this.askComputeNotificationOfChange();
                    break;
                case SHINKEN_PAGE.CONST.PARAM.PAGE.AUTHENTICATION_NEEDED:
                    if ( this[ _currentKey ] !== undefined && _value !== this[ _currentKey ] ) {
                        SHINKEN.HIGHWAY.refreshCurrentPage();
                    }
                    this[ _currentKey ] = _value;
                    break;
                case SHINKEN_PAGE.CONST.PARAM.PAGE.LAST_ELEMENT_DATA_FETCH:
                    if ( this.refresh_object ) {
                        this.refresh_object.setLastComputeDate( _value );
                    }
                    break;
                case SHINKEN_PAGE.CONST.PARAM.PAGE.VALIDATION_CHANGE_TIME:
                    this[ _currentKey ] = _value;
                    break;
                case SHINKEN_PAGE.CONST.PARAM.PAGE.USER_IS_ADMIN:
                    __user_is_admin__ = _value;
                    break;
                case "_id":
                    break;
            }
        }
        if ( !skip_history ) {
            this.saveJsHistory( data );
        }
    },
    getDefaultValueFor             : function ( type, key ) {
        const dict      = this.getDefaultFromType( type ).getDataForJson( SHINKEN.OBJECT.JSON_EDITOR.FORMAT_DATA.VALUE_AND_DEFAULT );
        return SHINKEN.TOOLS.DICT.getValueWithComposedKey( dict, key ).value;
    },
    getDefaultFromType        : function ( type ) {
        return this[ type ][WEATHER.CONST.EXTERNAL_LINKS.PARAM.DEFAULT_LINK._KEY];
    },
    computeWidgetWithChange: function () {
        this.size_widget_with_change = this.content.computeWidgetWithChange();
    },
    setData                : function ( key, value ) {
        this.setDataCommon( key, value );
    },
    setDataCommon          : function ( key, value ) {
        switch ( key ) {
            case SHINKEN_PAGE.CONST.PARAM.PAGE.GRIDS:
                this.content.setData( key, value );
                break;
            case SHINKEN_PAGE.CONST.PARAM.PAGE.USERS._KEY:
                this.users = new SHINKEN.OBJECT.UserGrids( value );
                break;
            case SHINKEN.OBJECT.VIEW.PARAM.VIEW_BEHAVIOUR:
                this.setViewBehaviour( value[ SHINKEN_PAGE.CONST.PARAM.SPECIFIC_TREATMENT.OBJECT_VALUE ] );
                break;
            case SHINKEN_PAGE.CONST.PARAM.PAGE.TYPE:
            case SHINKEN_PAGE.CONST.PARAM.PAGE.WEATHER_UUID:
                this[ key ] = value;
                break;
            case SHINKEN_PAGE.CONST.PARAM.PAGE.IDENTIFICATION:
                this.setIdentification( value[ SHINKEN_PAGE.CONST.PARAM.SPECIFIC_TREATMENT.OBJECT_VALUE ] );
                break;
            case SHINKEN_PAGE.CONST.PARAM.PAGE.NOTIFICATIONS._KEY:
                this.notifications = new WEATHER.Notifications( value );// TODO EST ce que c'est spécifique a la Weather ?
                break;
            default:
                this.setDataAsUnknownProperty( key, value );
                break;
        }
    },
    computeHtml: function () {
        this.refresh_object.computeHtml();
        this.bar_info.computeHtml( this.refresh_object );
        this.getDomElement().dataset.infoBarPosition = this.bar_info.getPosition();
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPage, SHINKEN.OBJECT.PhaseInterface );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPage, SHINKEN.OBJECT.ShinkenObjectHtml );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPage, SHINKEN.OBJECT.DefaultConfigurationWithOwnProperty );
COMPONENT.RadioListGeneric           = function ( dom_element, parent ) {
    this.init( dom_element, parent );
};
COMPONENT.RadioListGeneric.prototype = {
    init: function ( dom_element, parent ) {
        this.dom_element = dom_element;
        this.initContents();
        this.initCounters( parent );
        this.initListContent( dom_element );
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "value_changed":
                this.clickOnRadioBtn( param );
                break;
        }
    },
    setValueFromUser: function ( to_set ) {
        this.clickOnRadioBtn( to_set );
    },
    
    initListContent      : function ( dom_element ) {
        var _list_dom = dom_element.querySelectorAll( '.shinken-radio-element' );
        var _current;
        
        for ( var i = 0, _size = _list_dom.length; i < _size; i++ ) {
            _current = new COMPONENT.Generic( _list_dom[ i ] );
            _current.initCounters( this );
            _current.computeCounters();
            this.add( _current );
            if ( _current.state === COMPONENT.CONST.BTN_STATE.ON ) {
                this.active_button = _current;
            }
        }
        
    },
    clickOnRadioBtn      : function ( value ) {
        if ( this.active_button ) {
            this.active_button.setState( COMPONENT.CONST.BTN_STATE.OFF );
        }
        this.active_button = this.getContentByUUID( value );
        if ( this.active_button ) {
            this.active_button.setState( COMPONENT.CONST.BTN_STATE.ON );
        }
    },
    getValue             : function () {
        return this.active_button.getValue();
    },
    isDefaultOn          : function () {
        var _element = this.getContentByUUID( COMPONENT.CONST.BTN_NAME.DEFAULT );
        if ( _element ) {
            return _element.isOn();
        }
        return false;
    },
    setDefault           : function ( to_set ) {
        var _element = this.getContentByUUID( COMPONENT.CONST.BTN_NAME.DEFAULT );
        if ( _element ) {
            _element.setState( to_set );
        }
    },
    setDefaultKeyAndValue: function ( to_set ) {
        this.dom_element.setAttribute( "data-default-value", to_set );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( COMPONENT.RadioListGeneric, COMPONENT.Interface );
SHINKEN.TOOLS.CLASS.addPrototype( COMPONENT.RadioListGeneric, SHINKEN.OBJECT.ShinkenObjectContainer );
COMPONENT.RadioListGenericV2           = function () {
    this.init();
};
COMPONENT.RadioListGenericV2.prototype = {
    init           : function () {
        this.initContents();
        this.initListContent();
    },
    initListContent: function () {
    },
    setValueFromUser: function ( to_set ) {
        this.clickOnRadioBtn( to_set );
    },
    clickOnRadioBtn : function ( value ) {
        if ( this.active_button ) {
            this.active_button.setState( COMPONENT.CONST.BTN_STATE.OFF );
        }
        this.active_button = this.getContentByUUID( value );
        if ( this.active_button ) {
            this.active_button.setState( COMPONENT.CONST.BTN_STATE.ON );
        }
    },
    getValue        : function () {
        return this.active_button.getValue();
    },
    setButtonVisibilityState: function ( button_name, to_set ) {
        this.getContentByUUID( button_name ).setVisibilityState( to_set );
    },
    setButtonTooltip        : function ( button_name, to_set, tooltip_type ) {
        this.getContentByUUID( button_name ).setTooltipHtml( to_set, tooltip_type );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( COMPONENT.RadioListGenericV2, COMPONENT.Interface );
SHINKEN.TOOLS.CLASS.addPrototype( COMPONENT.RadioListGenericV2, SHINKEN.OBJECT.ShinkenObjectContainer );
COMPONENT.RadioListGeneric_V3           = function () {
    this.init();
};
COMPONENT.RadioListGeneric_V3.prototype = {
    init           : function () {
        this.initContents();
    },
    initListContent: function () {
    },
    setValueFromUser: function ( to_set ) {
        this.clickOnRadioBtn( to_set );
    },
    clickOnRadioBtn : function ( value ) {
        if ( this.active_button ) {
            this.active_button.setState( COMPONENT.CONST.BTN_STATE.OFF );
        }
        this.active_button = this.getContentByUUID( value );
        if ( this.active_button ) {
            this.active_button.setState( COMPONENT.CONST.BTN_STATE.ON );
        }
    },
    getValue        : function () {
        return this.active_button.getValue();
    },
    setButtonVisibilityState: function ( button_name, to_set ) {
        this.getContentByUUID( button_name ).setVisibilityState( to_set );
    },
    setButtonTooltip        : function ( button_name, to_set, tooltip_type ) {
        this.getContentByUUID( button_name ).setTooltipHtml( to_set, tooltip_type );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( COMPONENT.RadioListGeneric_V3, COMPONENT.Interface );
SHINKEN.TOOLS.CLASS.addPrototype( COMPONENT.RadioListGeneric_V3, SHINKEN.OBJECT.ShinkenObjectContainer );
COMPONENT.RadioListButtons           = function ( dom_element, parent ) {
    this.initSpecific( dom_element, parent );
};
COMPONENT.RadioListButtons.prototype = {
    initSpecific: function ( dom_element, parent ) {
        this.init();
    },
    initListContent: function ( dom_element ) {
        var _list_dom = dom_element.querySelectorAll( '.shinken-radio-btn' );
        var _current;
        
        for ( var i = 0, _size = _list_dom.length; i < _size; i++ ) {
            _current = new COMPONENT.Button( _list_dom[ i ] );
            _current.initCounters( this );
            _current.computeCounters();
            this.radio_buttons.push( _current );
            this.mapping_radio_button[ _current.getValue() ] = i;
            if ( _current.state === COMPONENT.CONST.BTN_STATE.ON ) {
                this.active_button = _current;
            }
        }
        
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( COMPONENT.RadioListButtons, COMPONENT.RadioListGeneric );
COMPONENT.RadioListFromData           = function ( data_buttons, property_name ) {
    this.initSpecific( data_buttons, property_name );
};
COMPONENT.RadioListFromData.prototype = {
    initSpecific   : function ( data_buttons, property_name ) {
        this.property_name = property_name;
        this.data_buttons  = data_buttons;
        this.init();
    },
    initListContent: function () {
        var _current;
        for ( var i = 0, _size_i = this.data_buttons.length; i < _size_i; i++ ) {
            _current = this.add( new COMPONENT.RadioButtonFromData( this.data_buttons[ i ].value, this.data_buttons[ i ].label, this.property_name ) );
            if ( this.event_name ) {
                _current.computeHtml_setEventName( this.event_name );
            }
            if ( this.data_buttons[ i ].is_active ) {
                this.active_button = _current;
                this.active_button.setState( COMPONENT.CONST.BTN_STATE.ON );
            }
        }
    },
    computeHtml: function () {
        this.dom_element = DOM.Service.createElement( "div", { class: "shinken-btn-radio-container" } );
        var _table       = DOM.Service.addElementTo( DOM.Service.createElement( "table", { class: "shinken-btn-group-table" } ), this.getDomElement() );
        var tr           = DOM.Service.addElementTo( DOM.Service.createElement( "tr" ), _table );
        var _current;
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            _current = this.getContent( i );
            _current.computeHtml();
            DOM.Service.addElementTo( _current.getDomElement(), tr );
        }
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( COMPONENT.RadioListFromData, COMPONENT.RadioListGenericV2 );
SHINKEN.TOOLS.CLASS.addPrototype( COMPONENT.RadioListFromData, SHINKEN.OBJECT.ShinkenObjectHtml );
COMPONENT.RadioListFromData_V3           = function ( property_name ) {
    this.initSpecific( property_name );
};
COMPONENT.RadioListFromData_V3.prototype = {
    initSpecific   : function ( property_name ) {
        this.init();
        this.property_name = property_name;
        this.class         = "shinken-btn-radio-container-V3 shinken-layout-center-h-v";
        this.addParamForEvents( PROPERTY.COMMON.PARAM.PROPERTY_NAME, property_name );
    },
    initListContent: function ( data_radios ) {
        var _current;
        for ( var i = 0, _size_i = data_radios.length; i < _size_i; i++ ) {
            _current = this.add( this.getChildConstructor( data_radios[ i ].value, data_radios[ i ].label, this.property_name ) );
            if ( this.event_name ) {
                _current.computeHtml_setEventName( this.event_name );
            }
            if ( data_radios[ i ].is_active ) {
                this.active_button = _current;
                this.active_button.setState( COMPONENT.CONST.BTN_STATE.ON );
            }
        }
    },
    getChildConstructor: function ( value, label, property_name ) {
        return new COMPONENT.RadioButtonFromData_V3( value, label, property_name );
    },
    computeHtml: function () {
        this.setDomElement( DOM.Service.createElement( "div", { class: this.getClass() } ) );
        var _current;
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            _current = this.getContent( i );
            _current.computeHtml();
            this.addDomElement( _current.getDomElement() );
        }
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( COMPONENT.RadioListFromData_V3, COMPONENT.RadioListGeneric_V3 );
SHINKEN.TOOLS.CLASS.addPrototype( COMPONENT.RadioListFromData_V3, SHINKEN.OBJECT.ShinkenObjectHtml );
COMPONENT.RadioListClassicFromData_V3           = function ( property_name, label, value ) {
    this.initSpecific( property_name );
};
COMPONENT.RadioListClassicFromData_V3.prototype = {
    initSpecific: COMPONENT.RadioListFromData_V3.prototype.initSpecific,
    getChildConstructor: function ( value, label, property_name ) {
        return new COMPONENT.RadioButtonClassicFromData_V3( value, label, property_name );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( COMPONENT.RadioListClassicFromData_V3, COMPONENT.RadioListFromData_V3 );
CONTROLLER.Form = (function ( self ) {
    self.controller_name = CONTROLLER.CONST.FORM_CONTROLLER.NAME;
    self.onClick         = function ( event, event_name ) {
        event.stopPropagation();
        var _dom_target_property = DOM.Service.findParentElementWithClass( event.target, "shinken-element-property-line-V3", 50 );
        if ( _dom_target_property ) {
            self.current_form.hidePopup( { [ PROPERTY.COMMON.PARAM.PROPERTY_NAME ]: _dom_target_property.dataset.name } );
        }
        else {
            self.current_form.hidePopup();
        }
    };
    self.doActionAfter   = function ( event_name, param, param_2, param_3 ) {
        self.current_form.doActionAfter( event_name, param, param_2, param_3 );
    };
    self.mouseLeave      = function ( event ) {
    };
    self.mouseEnter      = function ( event ) {
    };
    self.init            = function () {
    };
    self.setCurrentForm  = function ( to_set ) {
        self.current_form = to_set;
    };
    self.isValid         = function ( param ) {
        this.current_form.computeValidation__20241125( param );
        return this.current_form.isValid();
    };
    self.getDataToSave   = function () {
        return this.current_form.getDataToSave();
    };
    return self;
})( CONTROLLER.Form || {} );
SHINKEN.OBJECT.FormSetFromData           = function ( name ) {
    this.init( name );
};
SHINKEN.OBJECT.FormSetFromData.prototype = {
    init: SHINKEN.OBJECT.FormSet.prototype.init,
    getController__20240821: function ( name ) {
        return CONTROLLER.Form;
    },
    computeHtml        : function () {
        this.computeCommonHtml();
        this.computeSpecificHtml();
    },
    computeCommonHtml  : function () {
        this.setDomElement( DOM.Service.createElement( "div", { class: "shinken-form-container" } ) );
        if ( this.getController__20240821() ) {
            DOM.Service.addControllerAnchor( this.getDomElement(), this.getController__20240821().controller_name );
        }
        this.computeHtmlTitle();
        
        var _div = this.addDomElement( DOM.Service.createElement( "div", { class: "shinken-form-content" } ) );
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).computeHtml();
            DOM.Service.addElementTo( this.getContent( i ).getDomElement(), _div );
        }
        this.computeHtmlFooter();
        this.computeHtmlActions();
        this.computeHtmlExtra();
        
    },
    computeHtmlActions : function () {
        let _div_action         = this.addDomElement( DOM.Service.createElement( "div", { class: "shinken-form-action shinken-parent-event-listener", "data-controller": CONTROLLER.CONST.FORM_CONTROLLER.NAME } ) );
        let _div_action_content = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-table-form-container" } ), _div_action );
        let _div                = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-width-100 shinken-table-form-content shinken-layout-justify-between" } ), _div_action_content );
        
        let _td_1            = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-form-action-cell" } ), _div );
        let _button_validate = new COMPONENT.ButtonFromData_V3( "validated_form", _( "form.action_button.submit", [DICTIONARY_COMMON_UI] ) );
        _button_validate.addClass( "shinken-validate-form" );
        _button_validate.addParamForEvents( SHINKEN.OBJECT.FORMSET.PARAM.FORM_NAME, this.name );
        _button_validate.computeHtml();
        DOM.Service.addElementTo( _button_validate.getDomElement(), _td_1 );
        
        let _td_2          = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-form-action-cell" } ), _div );
        let _button_cancel = new COMPONENT.ButtonFromData_V3( "cancel_form", _( "form.action_button.cancel", [DICTIONARY_COMMON_UI] ) );
        _button_cancel.addClass( "shinken-cancel-form" );
        _button_cancel.addParamForEvents( SHINKEN.OBJECT.FORMSET.PARAM.FORM_NAME, this.name );
        _button_cancel.computeHtml();
        DOM.Service.addElementTo( _button_cancel.getDomElement(), _td_2 );
    },
    computeHtmlFooter  : function () {
        this.computeFooterContent();
        var _to_add = this.getFooterContent();
        if ( _to_add ) {
            _to_add.addClass( "shinken-footer-form" );
            _to_add.computeHtml();
            this.addDomElement( _to_add.getDomElement() );
        }
    },
    computeSpecificHtml: function () {
    },
    computeHtmlTitle   : function () {
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.FormSetFromData, SHINKEN.OBJECT.FormSet );
MANAGER.EVENT_MANAGER_V2 = {
    PARAM: {
        EVENT           : 'event',
        EVENT_NAME      : 'event_name',
        STOP_PROPAGATION: 'stop_propagation'
    }
};
MANAGER.EventManagerV2 = {
    onKeyUp                : function ( event, controller_name ) {
        let param                                       = {};
        param[ CONTROLLER.CONST.CONTROLLER_NAME_LABEL ] = controller_name;
        param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ]   = event;
        MANAGER.EventManagerV2.dispatch( event, "do", "on_key_up", param );
    },
    onKeyDown              : function ( event, controller_name ) {
        let param                                       = {};
        param[ CONTROLLER.CONST.CONTROLLER_NAME_LABEL ] = controller_name;
        param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ]   = event;
        MANAGER.EventManagerV2.dispatch( event, "do", "on_key_down", param );
    },
    onMouseDown            : function ( event, controller_name ) {
        let param                                       = {};
        param[ CONTROLLER.CONST.CONTROLLER_NAME_LABEL ] = controller_name;
        param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ]   = event;
        MANAGER.EventManagerV2.dispatch( event, "do", "mouse_down", param );
    },
    mouseMove              : function ( event, controller_name ) {
        let param                                       = {};
        param[ CONTROLLER.CONST.CONTROLLER_NAME_LABEL ] = controller_name;
        param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ]   = event;
        MANAGER.EventManagerV2.dispatch( event, "do", "mouse_move", param );
    },
    onMouseEnter           : function ( event, controller_name ) {
        let param                                       = {};
        param[ CONTROLLER.CONST.CONTROLLER_NAME_LABEL ] = controller_name;
        param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ]   = event;
        MANAGER.EventManagerV2.dispatch( event, "do", "mouse_enter", param );
    },
    onChangeInput          : function ( event, property_name, args ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "onchange_in_input", property_name, args );
    },
    onChangeInput_V3       : function ( event, param ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "onchange_in_input_V3", param );
    },
    onClickInput           : function ( event, property_name ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "onclick_in_input", property_name );
    },
    onClickInput_V3        : function ( event, param ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "onclick_in_input_V3", param );
    },
    clickRadioButton       : function ( event, property_name, button_name ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_radio_button", property_name, button_name );
    },
    clickRadioButton_V3    : function ( event, param ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_radio_button_V3", param );
    },
    clickSelector          : function ( event, property_name, selector_name ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_selector", property_name, selector_name );
    },
    clickSelector_V3       : function ( event, param ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_selector_V3", param );
    },
    clickSelectorV2        : function ( event, property_name, selector_name ) {
        let param                                    = {};
        param[ PROPERTY.COMMON.PARAM.PROPERTY_NAME ] = property_name;
        param[ PROPERTY.SELECT.PARAM.SELECTOR_NAME ] = selector_name;
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_selector", param );
    },
    clickItemSelector      : function ( event, property_name, selector_name, item_name ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_item_selector", property_name, selector_name, item_name );
    },
    clickItemSelector_V3   : function ( event, param ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_item_selector_V3", param );
    },
    clickOnWindowNavigation: function ( event, param ) {
        if ( !param[ WINDOW_V2.CONST.PARAM.WINDOW_NAME ] ) {
            var _nav_tab = DOM.Service.findParentElementWithClass( event.target, WINDOW_V2.CONST.CLASS.WINDOW_TAB, 10 );
            if ( !_nav_tab ) {
                return;
            }
            param[ WINDOW_V2.CONST.PARAM.WINDOW_NAME ] = _nav_tab.dataset.name;
        }
        var _parent_window = MANAGER.__instance_window_distributor.findParentWindow( param[ WINDOW_V2.CONST.PARAM.WINDOW_GROUP_NAME ] );
        
        var _click_done = _parent_window.clickOnWindow( param[ WINDOW_V2.CONST.PARAM.WINDOW_NAME ] );
        if ( !_click_done ) {
            return;
        }
        if ( param[ WINDOW_V2.CONST.PARAM.UPDATE_URL ] ) {
            SHINKEN.HIGHWAY.goToElementTab( param[ WINDOW_V2.CONST.PARAM.WINDOW_NAME ] );
        }
        param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT_NAME ] = "click_on__window_navigation__done";
        MANAGER.EventManagerV2.dispatch( event, "do", "do_action_after", param );
    },
    clickItemSelectorV2    : function ( event, property_name, selector_name, item_name ) {
        let param                                    = {};
        param[ PROPERTY.COMMON.PARAM.PROPERTY_NAME ] = property_name;
        param[ PROPERTY.SELECT.PARAM.SELECTOR_NAME ] = selector_name;
        param[ PROPERTY.SELECT.PARAM.OPTION_NAME ]   = item_name;
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_item_selector", param );
    },
    clickButton            : function ( event, param_1, param_2, param_3 ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_button", param_1, param_2, param_3 );
    },
    clickButtonV2          : function ( event, param_1, param_2, param_3 ) {
        let param                                   = {};
        param[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] = param_1;
        param[ "item_uuid" ]                        = param_2;
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_button", param );
    },
    clickButton_V3         : function ( event, param ) {
        param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ] = event;
        if ( DOM.Service.findParentElementWithClass( event.srcElement, "shinken-button-V3" ) && DOM.Service.findParentElementWithClass( event.srcElement, "shinken-button-V3" ).classList.contains( "shinken-disabled" ) ) {
            return;
        }
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_button_V3", param );
    },
    doActionAfter          : function ( event, event_name, param, param_2, param_3 ) {
        param                                              = param || {};
        param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT_NAME ] = event_name;
        param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ]      = event;
        event.stopPropagation();
        MANAGER.EventManagerV2.dispatch( event, "do", "do_action_after", param, param_2, param_3 );
    },
    dispatch               : function ( event, type_dispatch, event_name, param, param_2, param_3 ) {
        const RIGHT_CLICK = 2;
        if ( event.button === RIGHT_CLICK ) {
            return;
        }
        if ( param[ MANAGER.EVENT_MANAGER_V2.PARAM.STOP_PROPAGATION ] ) {
            event.stopPropagation();
        }
        let controller_name = param[ CONTROLLER.CONST.CONTROLLER_NAME_LABEL ];
        var _controller     = CONTROLLER.DistributorControllerManager.findControllerByEvent( event, controller_name );
        switch ( type_dispatch ) {
            case "do":
                switch ( event_name ) {
                    case "onchange_in_input":
                    case "onchange_in_input_V3":
                    case "onclick_in_input":
                    case "onclick_in_input_V3":
                    case "click_on_selector":
                    case "click_on_selector_V3":
                    case "click_on_item_selector":
                    case "click_on_item_selector_V3":
                    case "click_on_radio_button":
                    case "click_on_radio_button_V3":
                    case "click_on_button":
                    case "click_on_button_V3":
                        event.stopPropagation();
                        _controller.doActionAfter( event_name, param, param_2, param_3 );
                        break;
                    case "on_key_down":
                    case "on_key_up":
                    case "mouse_down":
                    case "mouse_move":
                    case "mouse_enter":
                        _controller.doActionAfter( event_name, param, param_2, param_3 );
                        break;
                    case "do_action_after":
                        _controller.doActionAfter( param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT_NAME ], param, param_2, param_3 );
                        break;
                    default:
                        console.log( "[EventManagerV2 - dispatch]", "[UNKNOW EVENT]", event_name );
                }
                break;
        }
    }
};
PROPERTY.LabelAbstract           = function () {
};
PROPERTY.LabelAbstract.prototype = {
    init: function () {
    },
    
    getValue: function () {
        return this.value;
    },
    getDataToSave: function () {
        return SHINKEN.TOOLS.STRING.trimExtented( this.getValue() );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.LabelAbstract, PROPERTY.InterfaceCommon );
PROPERTY.LabelFromData           = function ( property_name, label, value ) {
    this.__class_name__ = 'PROPERTY.LabelFromData';
    this.initSpecific( property_name, label, value );
};
PROPERTY.LabelFromData.prototype = {
    initSpecific: function ( property_name, property_label, value ) {
        this.init();
        this.name            = property_name;
        this.label           = property_label;
        this.value           = value;
        this.component_label = new COMPONENT.LabelFromData( this.value );
    },
    computeHtml                         : function () {
        this.computeHtml_container();
        this.computeHtml_common();
    },
    computeHtml_getType                 : function () {
        return PROPERTY_V2.COMMON.TYPES.STRING_LABEL;
    },
    computeHtml_getCellPropActionContent: function () {
        this.component_label.computeHtml();
        DOM.Service.addElementTo( this.component_label.getDomElement(), this.dom_cell_action );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.LabelFromData, PROPERTY.LabelAbstract );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.LabelFromData, PROPERTY.InterfaceCommonFromData );
PROPERTY.LabelFromData_V3           = function ( property_name, label, value ) {
    this.__class_name__ = 'PROPERTY.LabelFromData';
    this.initSpecific( property_name, label, value );
};
PROPERTY.LabelFromData_V3.prototype = {
    initSpecific: function ( property_name, property_label, value ) {
        this.init();
        this.name            = property_name;
        this.label           = property_label;
        this.value           = value;
        this.component_label = new COMPONENT.LabelFromData( this.value );
        this.addParamForEvents( PROPERTY.COMMON.PARAM.PROPERTY_NAME, this.name );
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "add_message_validation":
                this.component_label.doActionAfter(event_name, param);
                break;
            case "property_value__set__by_data":
            case "property_value__set__by_js":
                this.component_label.setValueFromJs( param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] );
                break;
        }
        return this.doActionAfterCommon( event_name, param );
    },
    computeHtml                         : function () {
        this.computeHtml_container();
        this.computeHtml_common();
    },
    computeHtml_getType                 : function () {
        return PROPERTY_V2.COMMON.TYPES.STRING_LABEL;
    },
    computeHtml_getCellPropActionContent: function () {
        this.component_label.computeHtml();
        DOM.Service.addElementTo( this.component_label.getDomElement(), this.dom_cell_action );
    },
    getValue: function ( type_save ) {
        return this.component_label.getValue();
    },
    getDataToSave__20241127: function ( type_save ) {
        let to_return = this.component_label.getValue();
        switch ( type_save ) {
            case SHINKEN.OBJECT.FORM.TYPE_SAVE.VALUE_AND_DEFAULT_FOR_GRID:
                to_return = SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage.prototype.parseValueToDict_withValueKey( to_return, to_return );
                break;
        }
        return to_return;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.LabelFromData_V3, PROPERTY.LabelAbstract );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.LabelFromData_V3, PROPERTY.InterfaceCommonFromData_V3 );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.LabelFromData_V3, PROPERTY.LabelCommonFromData_V3 );
PROPERTY.RadioListAbstract           = function () {
};
PROPERTY.RadioListAbstract.prototype = {
    init: function ( property_name ) {
        this.state = null;
        this.name  = property_name;
        this.addParamForEvents( PROPERTY.COMMON.PARAM.PROPERTY_NAME, this.name );
    },
    ___clickOnRadioBtn : function ( value ) {
        this.component_radio_list.clickOnRadioBtn( value );
        this.updateView();
    },
    doActionAfter      : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon: function ( event_name, param ) {
        switch ( event_name ) {
            case "do_action_after_init_dom_element":
                this.setValueFromUser( param );
                break;
            case "change_radio_mode_done":
                let is_default_key = this.getValue() === this.getDefaultKey();
                this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.USER, this.property_name, is_default_key ? 0 : 1 );
                if ( is_default_key ) {
                    this.component_radio_list.doActionAfter( "clean_validation_error", param );
                }
                break;
            case "property_value__set__by_data":
                this.component_radio_list.doActionAfter( event_name, param );
                this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.USER, this.property_name, this.getValue() === this.getDefaultKey() ? 0 : 1 );
                break;
            case "onchange_in_input_V3":
            case "click_on_selector_V3":
            case "click_on_button_V3":
            case "click_on_item_selector_V3":
            case "onclick_in_input_V3":
                param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ] = this;
                this.component_radio_list.doActionAfter( event_name, param );
                break;
            case "add_message_validation":
                param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] = this.getValue();
                this.component_radio_list.doActionAfter( event_name, param );
                break;
            case "change_radio_mode":
            case "property_value__set__by_js":
            case "value_changed":
            case "click_done":
            case "ask_hide_pop_up":
            case "change_selector_default_title":
            case "set_placeholder_input_V3":
                this.component_radio_list.doActionAfter( event_name, param );
                break;
            case "click_on_radio_button_V3":
                this.clickOnRadioBtn( param[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] );
                break;
        }
    },
    ___unset                : function () {
        this.setValueFromUser( '' );
    },
    setValueFromUser        : function ( value ) {
        if ( !value ) {
            value = PROPERTY_V2.COMMON.VALUE.DEFAULT;
        }
        this.clickOnRadioBtn( value );
    },
    setDefaultKeyAndValue   : function ( default_key, default_value ) {
        this.component_radio_list.setDefaultKeyAndValue( default_key, default_value );
    },
    getDefaultValue         : function () {
        return this.component_radio_list.getDefaultValue();
    },
    getDefaultKey           : function () {
        return this.component_radio_list.getDefaultKey();
    },
    setButtonVisibilityState: function ( button_name, to_set ) {
        this.component_radio_list.setButtonVisibilityState( button_name, to_set );
    },
    setButtonTooltip        : function ( button_name, to_set, tooltip_type ) {
        this.component_radio_list.setButtonTooltip( button_name, to_set, tooltip_type );
    },
    getNbButtonVisible      : function () {
        var _to_return = 0;
        for ( var i = 0, _size_i = this.component_radio_list.getSize(); i < _size_i; i++ ) {
            if ( this.component_radio_list.getContent( i ).isVisible() ) {
                _to_return++;
            }
        }
        return _to_return;
    },
    addParamForEvents       : function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        if ( this.component_radio_list ) {
            this.component_radio_list.addParamForEvents( key, value );
        }
    },
    getValue          : function () {
        return this.component_radio_list.getValue();
    },
    getDataToSaveFinal: function () {
        return this.getValue();
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.RadioListAbstract, PROPERTY.InterfaceCommon );
PROPERTY.RadioListFromHtml           = function ( dom_element ) {
    this.initSpecific( dom_element );
};
PROPERTY.RadioListFromHtml.prototype = {
    initSpecific: function ( dom_element ) {
        this.init();
        this.initWithDomElement( dom_element );
        this.component_radio_list = new COMPONENT.RadioListGeneric( dom_element, this );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.RadioListFromHtml, PROPERTY.RadioListAbstract );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.RadioListFromHtml, PROPERTY.InterfaceCommonFromHtml );
PROPERTY.RadioListFromData           = function ( property_name, data_buttons ) {
    this.initSpecific( property_name, data_buttons );
};
PROPERTY.RadioListFromData.prototype = {
    initSpecific: function ( property_name, data_buttons ) {
        this.name                 = property_name;
        this.component_radio_list = new COMPONENT.RadioListFromData( data_buttons, this.name );
    },
    computeHtml                         : function () {
        this.computeHtml_container();
        this.computeHtml_common();
    },
    computeHtml_getType                 : function () {
        return PROPERTY_V2.COMMON.TYPES.RADIO_LIST;
    },
    computeHtml_getCellPropActionContent: function () {
        this.component_radio_list.computeHtml();
        DOM.Service.addElementTo( this.component_radio_list.getDomElement(), this.dom_cell_action );
    },
    computeHtml_setEventName            : function ( to_set ) {
        return this.component_radio_list.computeHtml_setEventName( to_set );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.RadioListFromData, PROPERTY.RadioListAbstract );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.RadioListFromData, PROPERTY.InterfaceCommonFromData );
PROPERTY.RadioListFromData_V3           = function ( property_name, data_buttons, label ) {
    this.initSpecific( property_name, data_buttons, label );
};
PROPERTY.RadioListFromData_V3.prototype = {
    initSpecific: function ( property_name, data_buttons, label ) {
        this.init( property_name );
        this.setLabel( label );
        this.component_radio_list = this.getChildConstructor( this.name );
        this.component_radio_list.addParamsForEvents( this.getParamForEvents() );
        this.component_radio_list.initListContent( data_buttons );
    },
    getChildConstructor: function ( property_name ) {
        return new COMPONENT.RadioListFromData_V3( property_name );
    },
    computeHtml                         : function () {
        this.computeHtml_container();
        this.computeHtml_common();
    },
    computeHtml_getType                 : function () {
        return PROPERTY_V2.COMMON.TYPES.RADIO_LIST;
    },
    computeHtml_getCellPropActionContent: function () {
        this.component_radio_list.computeHtml();
        DOM.Service.addElementTo( this.component_radio_list.getDomElement(), this.dom_cell_action );
    },
    computeHtml_setEventName            : function ( to_set ) {
        return this.component_radio_list.computeHtml_setEventName( to_set );
    },
    getDataToSave__20241127: function ( type_save ) {
        let to_return = this.getDataToSaveFinal();
        switch ( type_save ) {
            case SHINKEN.OBJECT.FORM.TYPE_SAVE.VALUE_AND_DEFAULT_FOR_GRID:
                to_return = SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage.prototype.parseValueToDict_withValueKey( to_return, to_return === this.getDefaultKey() ? this.getDefaultValue() : to_return );
                break;
        }
        return to_return;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.RadioListFromData_V3, PROPERTY.RadioListAbstract );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.RadioListFromData_V3, PROPERTY.InterfaceCommonFromData_V3 );
PROPERTY.CheckBoxRadioPropFromData_V3           = function ( property_name, values, property_label ) {
    this.initSpecific( property_name, values, property_label );
};
PROPERTY.CheckBoxRadioPropFromData_V3.prototype = {
    initSpecific     : function ( property_name, data_buttons, label ) {
        this.init( property_name );
        this.setLabel( label );
        this.component_radio_list = this.getChildConstructor( this.name );
        this.component_radio_list.addParamsForEvents( this.getParamForEvents() );
        this.component_radio_list.initListContent( data_buttons );
        this.initCounterCommon();
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.USER );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    getChildConstructor: function ( property_name ) {
        return new SHINKEN.OBJECT.CheckBoxRadioModes( property_name );
    },
    getDataToSave__20241127: function ( type_save ) {
        let to_return = this.getDataToSaveFinal();
        switch ( type_save ) {
            case SHINKEN.OBJECT.FORM.TYPE_SAVE.VALUE_AND_DEFAULT_FOR_GRID:
                to_return = SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage.prototype.parseValueToDict_withValueKey( to_return, to_return === this.getDefaultKey() ? this.getDefaultValue() : to_return );
                break;
        }
        return to_return;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.CheckBoxRadioPropFromData_V3, PROPERTY.RadioListFromData_V3 );
PROPERTY.CheckBoxRadioProp__WithSelector__FromData           = function ( property_name, values, property_label ) {
    this.initSpecific( property_name, values, property_label );
};
PROPERTY.CheckBoxRadioProp__WithSelector__FromData.prototype = {
    initSpecific: PROPERTY.CheckBoxRadioPropFromData_V3.prototype.initSpecific,
    doActionAfter: function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
        switch ( event_name ) {
            case "property_value__set__by_data":
                if ( param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] === this.getDefaultKey() ) {
                    this.component_radio_list.doActionAfter( "set_default_value_in_selector", { [ PROPERTY.COMMON.PARAM.DEFAULT_VALUE ]: this.getDefaultValue() } );
                }
                break;
        }
    },
    getChildConstructor: function ( property_name ) {
        return new SHINKEN.OBJECT.CheckBoxRadioModes__WithSelector( property_name );
    },
    ___hidePopup       : function ( exception ) {
        this.doActionAfter( "click_done", {} );
    },
    doActionAfterLastModification: function ( event_name, param ) {
        switch ( event_name ) {
            case "undo_last_modification":
            case "redo_last_modification":
                const values = param[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getNextOrPrevious( event_name );
                this.component_radio_list.doActionAfterLastModification( event_name, values[ "radios_list" ] );
                this.doActionAfter( "property_value__set__by_js", { [ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ]: values[ [ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] ] } );
                this.previous_modication_data = this.getDataForLastModification();
                break;
        }
    },
    getDataForLastModification   : function () {
        return {
            [ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ]      : this.getDataToSave(),
            "radios_list": this.component_radio_list.getDataForLastModification()
        };
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.CheckBoxRadioProp__WithSelector__FromData, PROPERTY.CheckBoxRadioPropFromData_V3 );
PROPERTY.CheckBoxRadioProp__WithStringInput__FromData           = function ( property_name, values, property_label ) {
    this.initSpecific( property_name, values, property_label );
};
PROPERTY.CheckBoxRadioProp__WithStringInput__FromData.prototype = {
    initSpecific: PROPERTY.CheckBoxRadioPropFromData_V3.prototype.initSpecific,
    getChildConstructor: function ( property_name ) {
        return new SHINKEN.OBJECT.CheckBoxRadioModes__WithStringInput( property_name );
    },
    doActionAfterChange: function ( param ) {
        this.component_radio_list.doActionAfter( "update_radio_mode_using_input_value", param );
        CONTROLLER.Form.doActionAfter( "onchange_in_input_V3_done", { [ PROPERTY.COMMON.PARAM.PROPERTY_OBJECT ]: this, [ PROPERTY.COMMON.PARAM.PROPERTY_NAME ]: this.getName() } );
    },
    doActionAfterLastModification: PROPERTY.CheckBoxRadioProp__WithSelector__FromData.prototype.doActionAfterLastModification,
    getDataForLastModification   : PROPERTY.CheckBoxRadioProp__WithSelector__FromData.prototype.getDataForLastModification
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.CheckBoxRadioProp__WithStringInput__FromData, PROPERTY.CheckBoxRadioPropFromData_V3 );
PROPERTY.RangeAbstract           = function () {
};
PROPERTY.RangeAbstract.prototype = {
    init: function () {
        this.number_digit_after_comma = 0;
    },
    doActionAfter            : function ( event_name, param ) {
        switch ( event_name ) {
            case "do_action_after_init_dom_element":
                this.setValueFromUser( param );
                this.component_label_default_input.updateLabel( this.component_btn_default.getValue() + this.component_input_range.getUnit() );
                break;
            case "value_changed":
                this.component_input_range.doActionAfter( event_name, param );
                this.changeDefaultButtonStatus( COMPONENT.CONST.BTN_STATE.OFF );
                break;
            case "use_default_value":
                this.changeDefaultButtonStatus( COMPONENT.CONST.BTN_STATE.ON );
                break;
        }
    },
    onMoveRangeCursor        : function ( value_to_set, is_default ) {
        if ( this.is_disabled ) {
            return;
        }
        value_to_set = SHINKEN.TOOLS.NUMBER.roundTo( value_to_set, this.number_digit_after_comma );
        this.component_input_range.setValueFromUser( value_to_set );
        this.changeDefaultButtonStatus( is_default ? COMPONENT.CONST.BTN_STATE.ON : COMPONENT.CONST.BTN_STATE.OFF );
    },
    ___clickOnRadioBtn       : function ( value ) {
        var _value_to_set = this.default_value;
        this.component_input_range.setValue( _value_to_set );
    },
    changeDefaultButtonStatus: function ( value ) {
        this.component_btn_default.setState( value );
        DOM.Service.setDataSet( this.dom_element, 'defaultBtnStatus', value );
        if ( this.component_btn_default.isOn() ) {
            this.component_input_range.setValueFromUser( this.component_btn_default.getValue() );
        }
    },
    setDefaultKeyAndValue    : function ( default_key, default_value ) {
        this.setDefaultKeyAndValueCommon( default_key, default_value );
        this.component_input_range.setDefaultKeyAndValue( default_key );
        this.component_btn_default.setValue( default_key );
    },
    ___unset                 : function () {
        this.setValueFromUser( "" );
    },
    setValueFromUser         : function ( value ) {
        var is_default = false;
        if ( value === PROPERTY_V2.COMMON.VALUE.DEFAULT || value === undefined ) {
            value      = this.component_btn_default.getValue();
            is_default = true;
        }
        this.onMoveRangeCursor( parseFloat( value ), is_default );
    },
    getValue: function () {
        return this.component_input_range.getValue();
    },
    getDataToSaveFinal: function () {
        return this.getValue();
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.RangeAbstract, PROPERTY.InterfaceCommon );
PROPERTY.RangeFomHtml           = function ( dom_element ) {
    this.init( dom_element );
};
PROPERTY.RangeFomHtml.prototype = {
    init: function ( dom_element ) {
        this.initWithDomElement( dom_element );
        this.component_input_range         = new COMPONENT.InputRange( dom_element, this );
        this.component_btn_default         = new COMPONENT.Generic( dom_element.querySelector( ".shinken-input-range-radio-element" ) );
        this.component_label_default_input = new COMPONENT.Label( dom_element.querySelector( ".shinken-notification-sound-default-value" ) );
        this.number_digit_after_comma      = 0;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.RangeFomHtml, PROPERTY.RangeAbstract );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.RangeFomHtml, PROPERTY.InterfaceCommonFromHtml );
PROPERTY.SingleSelectAbstract           = function () {
};
PROPERTY.SingleSelectAbstract.prototype = {
    init: function ( property_name, label ) {
        this.name  = property_name;
        this.label = label;
        this.addParamForEvents( PROPERTY.COMMON.PARAM.PROPERTY_NAME, this.name );
    },
    clickOnSelector    : function ( selector_name ) {
        if ( this.is_disabled ) {
            return false;
        }
        this.getSelector( selector_name ).clickOnSelector();
    },
    clickOnItemSelector: function ( selector_name, item_name ) {
        if ( this.is_disabled ) {
            return false;
        }
        this.getSelector( selector_name ).clickOnItemSelector( item_name, this );
    },
    doActionAfter      : function ( event_name, param_1, param_2, param_3 ) {
        switch ( event_name ) {
            case "click_on_item_selector_done":
                DOM.Service.setDataSet( this.getDomElement(), "currentValue", param_1.getValue() );
                break;
        }
    },
    addParamForEvents  : function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        if ( this.component_selector ) {
            this.component_selector.addParamForEvents( key, value );
        }
    },
    _computeState: function () {
        this._computeLabelSelect();
    },
    setComponentSelector      : function ( to_set ) {
        this.component_selector = to_set;
        this.component_selector.addParamsForEvents( this.getParamForEvents() );
    },
    setValueFromUser          : function ( value ) {
        this.clickOnItemSelector( null, value );
    },
    getValue                  : function ( value ) {
        return this.getSelector().getValue();
    },
    setStatus                 : function ( _to_set ) {
        this.status = _to_set;
        this.component_selector.setStatus( _to_set );
    },
    setDefaultLabelForSelector: function ( selector_name, to_set ) {
        this.getSelector( selector_name ).setDefaultLabelForSelector( to_set );
    },
    getDataToSave: function () {
        return this.getSelector().getValue();
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.SingleSelectAbstract, PROPERTY.InterfaceSelectAbstract );
PROPERTY.SingleSelectFromData           = function ( property_name, data_option_array, label ) {
    this.initSpecific( property_name, data_option_array, label );
};
PROPERTY.SingleSelectFromData.prototype = {
    initSpecific    : function ( property_name, data_option_array, label, extra_columns ) {
        this.init( property_name, label );
        this.initMainSelector( data_option_array, extra_columns );
    },
    initMainSelector: function ( data_option_array ) {
        this.setComponentSelector( new COMPONENT.SingleSelectFromDataV2( this.getName() ) );
        this.component_selector.setOptionsFromArray( data_option_array );
    },
    doActionAfter: function ( event_name, param_1, param_2, param_3 ) {
        switch ( event_name ) {
            case "click_on_item_selector_done":
                DOM.Service.setDataSet( this.getDomElement(), "currentValue", param_1.getValue() );
                return;
        }
        if ( param_1[ PROPERTY.COMMON.PARAM.PROPERTY_NAME ] !== this.getName() ) {
            return;
        }
        param_1[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ] = this;
        this.component_selector.doActionAfter( event_name, param_1, param_2, param_3 );
    },
    changeOptionsFromArray: function ( data_option_array ) {
        this.component_selector.changeOptionsFromArray( data_option_array );
    },
    computeHtml                         : function () {
        this.computeHtml_container();
        this.computeHtml_common();
    },
    computeHtml_getType                 : function () {
        return PROPERTY_V2.COMMON.TYPES.SINGLE_SELECT;
    },
    computeHtml_getCellPropActionContent: function () {
        this.component_selector.computeHtml();
        DOM.Service.addElementTo( this.component_selector.getDomElement(), this.dom_cell_action );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.SingleSelectFromData, PROPERTY.SingleSelectAbstract );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.SingleSelectFromData, PROPERTY.InterfaceSelectAbstract );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.SingleSelectFromData, PROPERTY.InterfaceCommonFromData );
PROPERTY.SingleSelectFromData_V3           = function ( property_name, data_option_array, label ) {
    this.initSpecific( property_name, data_option_array, label );
};
PROPERTY.SingleSelectFromData_V3.prototype = {
    initSpecific    : function ( property_name, data_option_array, label, extra_columns ) {
        this.initPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING );
        this.init( property_name, label );
        this.initMainSelector( data_option_array, extra_columns );
    },
    initMainSelector: function ( data_option_array ) {
        this.setComponentSelector( new COMPONENT.SingleSelectFromData_V3( this.getName() ) );
        this.component_selector.setOptionsFromArray( data_option_array );
    },
    doActionAfter      : function ( event_name, param, param_2, param_3 ) {
        this.doActionAfterCommon( event_name, param, param_2, param_3 );
    },
    doActionAfterCommon: function ( event_name, param, param_2, param_3 ) {
        param = param || {};
        switch ( event_name ) {
            case "click_on_item_selector_done":
                DOM.Service.setDataSet( this.getDomElement(), "currentValue", param.getValue() );
                return;
            case "click_done":
                this.component_selector.doActionAfter( event_name, param );
                return;
            case "property_visibility__set":
                this.setVisibilityState( param[ PROPERTY.COMMON.PARAM.PROPERTY_VISIBILITY ] );
                return;
        }
        param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ] = this;
        this.component_selector.doActionAfter( event_name, param, param_2, param_3 );
    },
    changeOptionsFromArray: function ( data_option_array ) {
        this.component_selector.changeOptionsFromArray( data_option_array );
    },
    computeHtml                         : function () {
        this.computeHtml_container();
        this.computeHtml_common();
        this.setPhaseDomElement( this.getDomElement() );
    },
    computeHtml_getType                 : function () {
        return PROPERTY_V2.COMMON.TYPES.SINGLE_SELECT;
    },
    computeHtml_getCellPropActionContent: function () {
        this.component_selector.computeHtml();
        DOM.Service.addElementTo( this.component_selector.getDomElement(), this.dom_cell_action );
    },
    getDataToSave__20241127             : function ( type_save ) {
        let to_return = this.getDataToSave();
        switch ( type_save ) {
            case SHINKEN.OBJECT.FORM.TYPE_SAVE.VALUE_AND_DEFAULT_FOR_GRID:
                to_return = SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage.prototype.parseValueToDict_withValueKey( to_return, to_return );
                break;
        }
        return to_return;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.SingleSelectFromData_V3, PROPERTY.SingleSelectAbstract );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.SingleSelectFromData_V3, PROPERTY.InterfaceSelectAbstract );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.SingleSelectFromData_V3, PROPERTY.InterfaceCommonFromData_V3 );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.SingleSelectFromData_V3, SHINKEN.OBJECT.PhaseInterface );
PROPERTY.SingleSelectWithResearchFromData_V3           = function ( property_name, data_option_array, label, extra_columns ) {
    this.initSpecific( property_name, data_option_array, label, extra_columns );
};
PROPERTY.SingleSelectWithResearchFromData_V3.prototype = {
    initSpecific    : PROPERTY.SingleSelectFromData_V3.prototype.initSpecific,
    initMainSelector: function ( data_option_array, extra_columns ) {
        this.setComponentSelector( new COMPONENT.SingleSelectWithResearchFromData_V3( this.getName(), null, extra_columns ) );
        this.component_selector.setOptionsFromArray( data_option_array );
    },
    doActionAfterChange: function ( validation_done ) {
        this.component_selector.doActionAfter( "ask_apply_filter" );
    },
    computeHtml_getClassContainer: function () {
        return "shinken-element-property-line-V3 shinken-layout-column-start-h ";
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.SingleSelectWithResearchFromData_V3, PROPERTY.SingleSelectFromData_V3 );
PROPERTY.StringInputAbstract           = function () {
};
PROPERTY.StringInputAbstract.prototype = {
    init: function () {
    },
    askComputeAfterChange: function () {
        if ( this.is_disabled ) {
            return;
        }
        this.component_input.askComputeAfterChange( null, this );
    },
    doActionAfterChange  : function ( args ) {
    },
    onFocus              : function () {
    },
    ___onFocusOut        : function () {
    },
    doActionAfter        : function ( event_name, param, param_2, param_3 ) {
        switch ( event_name ) {
            case "click_on_button":
                switch ( param ) {
                    case "clean_input_value":
                        this.component_input.setValueFromJs( "" );
                        break;
                }
                break;
        }
    },
    setValueFromUser     : function ( value ) {
        this.component_input.setValueFromJs( value );
    },
    setStatus            : function ( _to_set ) {
        this.status = _to_set;
        this.component_input.setStatus( _to_set );
    },
    getValue             : function () {
        return this.component_input.getValue();
    },
    setDefaultKeyAndValue: function ( to_set ) {
        this.default_value = to_set;
    },
    getDefaultValue      : function () {
        return this.default_value;
    },
    setPlaceholder       : function ( _to_set ) {
        return this.component_input.setPlaceholder( _to_set );
    },
    getDataToSave: function () {
        return SHINKEN.TOOLS.STRING.trimExtented( this.getValue() );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.StringInputAbstract, PROPERTY.InterfaceCommon );
PROPERTY.StringInputAbstract_V3           = function () {
};
PROPERTY.StringInputAbstract_V3.prototype = {
    init: function () {
        this.initContents();
    },
    doActionAfter      : function ( event_name, param ) {
        return this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon: function ( event_name, param ) {
        switch ( event_name ) {
            case "click_on_button_V3":
            case "onchange_in_input_V3":
                param[ PROPERTY.COMMON.PARAM.PARENT_OBJECT ] = this;
                if ( this.getContentByUUID( param[ COMPONENT.INPUT.PARAM.NAME ] ) ) {
                    this.getContentByUUID( param[ COMPONENT.INPUT.PARAM.NAME ] ).doActionAfter( event_name, param );
                }
                break;
            case "set_placeholder_input_V3":
                this.setPlaceholder( param[ COMPONENT.CONST.PARAM.TEXT_PLACEHOLDER_INPUT ] );
                break;
        }
    },
    setValueFromUser: function ( value ) {
        this.getContentByUUID( PROPERTY.COMMON.INPUT.MAIN_INPUT ).setValueFromJs( value );
    },
    setStatus       : function ( _to_set ) {
        this.status = _to_set;
        this.getContentByUUID( PROPERTY.COMMON.INPUT.MAIN_INPUT ).setStatus( _to_set );
    },
    getValue        : function () {
        return this.getContentByUUID( PROPERTY.COMMON.INPUT.MAIN_INPUT ).getValue();
    },
    setPlaceholder  : function ( _to_set ) {
        return this.getContentByUUID( PROPERTY.COMMON.INPUT.MAIN_INPUT ).setPlaceholder( _to_set );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.StringInputAbstract_V3, PROPERTY.StringInputAbstract );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.StringInputAbstract_V3, SHINKEN.OBJECT.ShinkenObjectContainerHtml );
PROPERTY.StringInputFromData           = function ( property_name, value ) {
    this.__class_name__ = 'PROPERTY.StringInputFromData';
    this.initSpecific( property_name, value );
};
PROPERTY.StringInputFromData.prototype = {
    initSpecific: function ( property_name, value ) {
        this.name = property_name;
        this.init();
        this.component_input = new COMPONENT.InputFromDataV2( value, this.name );
    },
    computeHtml                         : function () {
        this.computeHtml_container();
        this.computeHtml_common();
    },
    computeHtml_getType                 : function () {
        return PROPERTY_V2.COMMON.TYPES.STRING_INPUT;
    },
    computeHtml_getCellPropActionContent: function () {
        this.component_input.computeHtml();
        DOM.Service.addElementTo( this.component_input.getDomElement(), this.dom_cell_action );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.StringInputFromData, PROPERTY.StringInputAbstract );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.StringInputFromData, PROPERTY.InterfaceCommonFromData );
PROPERTY.StringInputFromData_V3           = function ( property_name, value, label ) {
    this.__class_name__ = 'PROPERTY.StringInputFromData_V3';
    this.initSpecific( property_name, value, label );
};
PROPERTY.StringInputFromData_V3.prototype = {
    initSpecific     : function ( property_name, value, label ) {
        this.name = property_name;
        this.init();
        this.addParamForEvents( PROPERTY.COMMON.PARAM.PROPERTY_NAME, this.name );
        this.add( new COMPONENT.InputFromData_V3( PROPERTY.COMMON.INPUT.MAIN_INPUT, value, this.getParamForEvents() ) );
        this.setLabel( label || property_name );
        this.initCounterCommon();
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.USER );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    askComputeAfterChange: function () {
        if ( this.is_disabled ) {
            return;
        }
        this.getContentByUUID( PROPERTY.COMMON.INPUT.MAIN_INPUT ).askComputeAfterChange( null, this );
    },
    doActionAfterChange  : function ( args ) {
        this.getContentByUUID( PROPERTY.COMMON.INPUT.MAIN_INPUT ).doActionAfter( "clean_validation_error" );
        CONTROLLER.Form.doActionAfter( "onchange_in_input_V3_done", { [ PROPERTY.COMMON.PARAM.PROPERTY_OBJECT ]: this, [ PROPERTY.COMMON.PARAM.PROPERTY_NAME ]: this.getName() } );
    },
    onFocus              : function () {
    },
    ___onFocusOut        : function () {
    },
    setTypeComponent     : function ( to_set ) {
        this.getContentByUUID( PROPERTY.COMMON.INPUT.MAIN_INPUT ).setType__20241003( to_set );
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "property_value__set__by_data":
            case "property_value__set__by_js":
                this.getContentByUUID( PROPERTY.COMMON.INPUT.MAIN_INPUT ).setValueFromJs( param[ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ] );
                return;
            case "property_visibility__set":
                this.setVisibilityState( param[ PROPERTY.COMMON.PARAM.PROPERTY_VISIBILITY ] );
                break;
            case "add_message_validation":
                this.getContentByUUID( PROPERTY.COMMON.INPUT.MAIN_INPUT ).doActionAfter( event_name, param );
                return;
        }
        return this.doActionAfterCommon( event_name, param );
    },
    computeHtml                         : function () {
        this.computeHtml_container();
        this.computeHtml_common();
    },
    computeHtml_getType                 : function () {
        return PROPERTY_V2.COMMON.TYPES.STRING_INPUT;
    },
    computeHtml_getCellPropActionContent: function () {
        this.getContentByUUID( PROPERTY.COMMON.INPUT.MAIN_INPUT ).computeHtml();
        DOM.Service.addElementTo( this.getContentByUUID( PROPERTY.COMMON.INPUT.MAIN_INPUT ).getDomElement(), this.dom_cell_action );
    },
    getDataToSave__20241127: function ( type_save ) {
        let to_return = this.getDataToSave();
        switch ( type_save ) {
            case SHINKEN.OBJECT.FORM.TYPE_SAVE.VALUE_AND_DEFAULT_FOR_GRID:
                to_return = SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage.prototype.parseValueToDict_withValueKey( to_return, to_return );
                break;
        }
        return to_return;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.StringInputFromData_V3, PROPERTY.StringInputAbstract_V3 );
SHINKEN.TOOLS.CLASS.addPrototype( PROPERTY.StringInputFromData_V3, PROPERTY.InterfaceCommonFromData_V3 );
var PROPERTY_V2 = PROPERTY_V2 || {};
PROPERTY_V2.VALIDATOR = {
    validWithParameter: function ( property, parameter, extra_forbidden_char ) {
        let messages = new SHINKEN.OBJECT.Messages();
        if ( !parameter ) {
            return;
        }
        PROPERTY_V2.VALIDATOR.isMandatory( messages, property, parameter.is_mandatory );
        switch ( parameter.validation_type ) {
            case SHINKEN_VALIDATION.CONST.BOOLEAN._KEY:
                PROPERTY_V2.VALIDATOR.isBoolean( messages, property );
                break;
            case SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_BETWEEN:
                PROPERTY_V2.VALIDATOR.isIntegerBetween( messages, property, parameter.validation_value );
                break;
            case SHINKEN_VALIDATION.CONST.STRING.MAX_LENGTH:
                PROPERTY_V2.VALIDATOR.testStringLength( messages, property, parameter.validation_value );
                break;
            case SHINKEN_VALIDATION.CONST.STRING.NOT_EMPTY:
                PROPERTY_V2.VALIDATOR.isStringNotEmpty( messages, property );
                break;
            case SHINKEN_VALIDATION.CONST.COLOR.CSS._KEY:
                PROPERTY_V2.VALIDATOR.isColorValid( messages, property );
                break;
            case SHINKEN_VALIDATION.CONST.LIST.INCLUDE_IN:
                PROPERTY_V2.VALIDATOR.isListIncludeIn( messages, property, parameter.validation_value );
                break;
            case SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_POSITIVE:
                PROPERTY_V2.VALIDATOR.isPositiveInteger( messages, property );
                break;
            case SHINKEN_VALIDATION.CONST.OTHERS.DEFINE_STRING_OR_INTEGER_POSITIVE:
                PROPERTY_V2.VALIDATOR.isDefineStringOrIntegerPositive( messages, property, parameter.validation_value );
                break;
        }
        PROPERTY_V2.VALIDATOR.hasForbiddenCharacter( messages, property, extra_forbidden_char );
        this.sendValidation( property, messages );
    },
    sendValidation: function ( property, messages ) {
        CONTROLLER.Form.doActionAfter( "add_message_validation", { [ PROPERTY.COMMON.PARAM.PROPERTY_OBJECT ]: property, [ PROPERTY.COMMON.PARAM.PROPERTY_MESSAGES ]: messages } );
    },
    isMandatory                                     : function ( messages, property, is_mandatory ) {
        if ( is_mandatory && SHINKEN.TOOLS.STRING.isEmpty( property.getValue() ) ) {
            messages.addMessage( COMPONENT.CONST.STATUS.ERROR, _( 'validation.messages.mandatory_field', [DICTIONARY_COMMON_UI] ) );
        }
    },
    hasForbiddenCharacter                           : function ( messages, property, forbidden_char ) {
        if ( !forbidden_char ) {
            return;
        }
        if ( SHINKEN.TOOLS.STRING.contains( property.getValue(), forbidden_char ) ) {
            messages.addMessage( COMPONENT.CONST.STATUS.ERROR, SHINKEN.TOOLS.STRING.format( _( 'validation.messages.char_forbidden', [DICTIONARY_COMMON_UI] ), forbidden_char ) );
        }
    },
    isBoolean                                       : function ( messages, property ) {
        let value = property.getValue();
        if ( ["true", "false", "default"].includes( value ) ) {
            return;
        }
        messages.addMessage( COMPONENT.CONST.STATUS.ERROR, _( 'validation.messages.must_be_a_boolean', [DICTIONARY_COMMON_UI] ) );
    },
    testStringLength                                : function ( messages, property, max_length ) {
        let value = property.getValue();
        if ( typeof value === "string" && value.length < max_length ) {
            return;
        }
        messages.addMessage( COMPONENT.CONST.STATUS.ERROR, SHINKEN.TOOLS.STRING.format( _( 'validation.messages.max_length', [DICTIONARY_COMMON_UI] ), max_length ) );
    },
    isIntegerBetween                                : function ( messages, property, values_possible ) {
        let value      = property.getValue();
        let is_integer = SHINKEN.TOOLS.NUMBER.isInteger( value );
        if ( is_integer && parseInt( value ) >= values_possible[ 0 ] && parseInt( value ) <= values_possible[ 1 ] ) {
            return;
        }
        if ( !is_integer && SHINKEN.TOOLS.ARRAY.contains( values_possible, value ) ) {
            return;
        }
        messages.addMessage( COMPONENT.CONST.STATUS.ERROR, SHINKEN.TOOLS.STRING.format( _( 'validation.messages.integer_between', [DICTIONARY_COMMON_UI] ), values_possible[ 0 ], values_possible[ 1 ] ) );
    },
    isStringNotEmpty                                : function ( messages, property ) {
        let value = property.getValue();
        if ( typeof value === "string" && !SHINKEN.TOOLS.STRING.isEmpty( value ) ) {
            return;
        }
        messages.addMessage( COMPONENT.CONST.STATUS.ERROR, _( 'validation.messages.string_cant_be_empty', [DICTIONARY_COMMON_UI] ) );
    },
    isColorValid                                    : function ( messages, property ) {
        let value = property.getValue();
        if ( value !== "" && !SHINKEN.TOOLS.STRING.containsRegex( value, SHINKEN_VALIDATION.CONST.COLOR.CSS.REGEX ) ) {
            return;
        }
        messages.addMessage( COMPONENT.CONST.STATUS.ERROR, _( 'validation.messages.color_is_invalid', [DICTIONARY_COMMON_UI] ) );
        
    },
    isListIncludeIn                                 : function ( messages, property, values_possible ) {
        if ( SHINKEN.TOOLS.ARRAY.contains( values_possible, property.getValue() ) ) {
            return;
        }
        messages.addMessage( COMPONENT.CONST.STATUS.ERROR, _( 'validation.messages.not_in_list', [DICTIONARY_COMMON_UI] ) );
    },
    isPositiveInteger                               : function ( messages, property ) {
        let value = property.getValue();
        if ( value === property.getDefaultKey() ) {
            return;
        }
        let is_integer = SHINKEN.TOOLS.NUMBER.isInteger( value );
        if ( is_integer && parseInt( value ) > 0 ) {
            return;
        }
        messages.addMessage( COMPONENT.CONST.STATUS.ERROR, _( 'validation.messages.tooltip_no_letter', [DICTIONARY_COMMON_UI] ) );
    },
    isDefineStringOrIntegerPositive                 : function ( messages, property, values_possible ) {
        let value      = property.getValue();
        let is_integer = SHINKEN.TOOLS.NUMBER.isInteger( value );
        if ( SHINKEN.TOOLS.ARRAY.contains( values_possible, value ) || is_integer && parseInt( value ) > 0 ) {
            return;
        }
        messages.addMessage( COMPONENT.CONST.STATUS.ERROR, SHINKEN.TOOLS.STRING.format( _( 'validation.messages.must_be_positive_integer_or_define_value', [DICTIONARY_COMMON_UI] ), values_possible[ 0 ], values_possible[ 1 ] ) );
    }
};
SHINKEN.OBJECT.GridPageEditionSlidePanel           = function () {
    this.initSpecific();
};
SHINKEN.OBJECT.GridPageEditionSlidePanel.prototype = {
    initSpecific: function () {
        this.setType( SHINKEN.OBJECT.SLIDE_PANEL.TYPE.HORIZONTAL_RIGHT );
        this.init( SHINKEN_PAGE.CONST.SLIDE_PANEL.EDITION.NAME, document.querySelector( ".shinken-slide-panel-main-part" ) );
        this.dom_element__form_button_actions         = document.querySelector( ".shinken-weather-edition-button-action" );
        this.dom_element__form_without_button_actions = document.querySelector( ".shinken-weather-form-container-without-buttons" );
        this.setInitialSize( SHINKEN.TOOLS.IFRAME_PARENT_COMMUNICATION.getUserPref( SHINKEN_PAGE.CONST.USER_PREFS.NAME )[ this.getName() ] );
        this.setMinSize( 100, 340 );
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "slide-panel-restore-structure-done":
                CONTROLLER.PageController.doActionAfter( event_name );
                break;
            case "slide_panel__set_content__done":
                this.doActionAfter( "update_style_dom_element__without_buttons", param );
                break;
            case "slide_panel__size__has_changed":
                if ( param[ SHINKEN.OBJECT.SLIDE_PANEL.PARAM.OBJECT ] !== this ) {
                    return;
                }
                this.doActionAfter( "update_style_dom_element__without_buttons", param );
                this.doActionAfter( "update_style_dom_element__restricted_label_visibility", param );
                break;
            case "update_style_dom_element__without_buttons":
                let height_button = DOM.Service.getBoundingClientRect( this.dom_element__form_button_actions, DOM.CONST.STYLE.HEIGHT );
                let new_height    = "calc(100% - " + height_button + "px)";
                if ( new_height === this.dom_element__form_without_button_actions.style[ DOM.CONST.STYLE.HEIGHT ] ) {
                    return;
                }
                DOM.Service.setStyle( this.dom_element__form_without_button_actions, DOM.CONST.STYLE.HEIGHT, new_height );
                CONTROLLER.PageController.doActionAfter( "update_style_dom_element__without_buttons__done" );
                break;
            case "update_style_dom_element__restricted_label_visibility":
                DOM.Service.addOrRemoveClasses( this.getDomElement(), param[ SHINKEN.OBJECT.SLIDE_PANEL.PARAM.SIZE_EXISTING ] < 220, "shinken-restricted-label-display" );
                break;
        }
        this.doActionAfterCommon( event_name, param );
    },
    getController_20241003: function () {
        return CONTROLLER.PageController;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageEditionSlidePanel, SHINKEN.OBJECT.SlidePanel );
SHINKEN.OBJECT.SlidePanelProblem           = function () {
    this.initSpecific();
};
SHINKEN.OBJECT.SlidePanelProblem.prototype = {
    initSpecific: function () {
        this.setType( SHINKEN.OBJECT.SLIDE_PANEL.TYPE.VERTICAL_TOP );
        this.init( SHINKEN_PAGE.CONST.SLIDE_PANEL.PROBLEMS.NAME, document.querySelector( ".shinken-weather-form-container-without-buttons .shinken-edition-main-part" ) );
        this.setInitialSize( 0.3 );
        this.setMinSize( 100, 75 );
        this.initCounterCommon();
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "before__update_object__grid_page":
                this.window_group_problem = new SHINKEN.OBJECT.WindowGroupProblem();
                this.window_group_problem.setCountersParent( this );
                break;
            case "clean_widget_with_problem":
                this.window_group_problem.doActionAfter( event_name, param );
                if ( !this.window_group_problem.hasProblems() ) {
                    this.close__20240925();
                }
                break;
            case "add_object_with_problems__to__window_problem":
            case "add_object_json_fail":
                this.window_group_problem.doActionAfter( event_name, param );
                return;
            case "add_object__with_problems__from_user_action":
                this.window_group_problem.doActionAfter( event_name, param );
                this.setPhaseIfPhase( SHINKEN.OBJECT.CONST.PHASE.READY, SHINKEN.OBJECT.CONST.PHASE.HIDDEN );
                return;
            case "update_style_dom_element__without_buttons__done":
                this.computeSize__parent();
                this.setSize__20240926( this.getSize__partAdded() );
                break;
            case "slide_panel__size__has_changed":
                if ( this.isPhase( SHINKEN.OBJECT.CONST.PHASE.SLEEPING ) ) {
                    return this.addDoActionAfterCallBackPhaseBecome( SHINKEN.OBJECT.CONST.PHASE.RUNNING, event_name, param );
                }
                if ( param[ SHINKEN.OBJECT.SLIDE_PANEL.PARAM.OBJECT ] && param[ SHINKEN.OBJECT.SLIDE_PANEL.PARAM.OBJECT ].getName() === SHINKEN_PAGE.CONST.SLIDE_PANEL.EDITION.NAME ) {
                    this.computeSize__parent();
                    this.setSize__20240926( this.getSize__partAdded(), param[ SHINKEN.OBJECT.SLIDE_PANEL.PARAM.OBJECT ].is_drag_on );
                }
                if ( this.window_group_problem ) {
                    this.window_group_problem.doActionAfter( event_name, param );
                }
                break;
        }
        this.doActionAfterCommon( event_name, param );
    },
    buildContent__20240828: function () {
        const to_return                 = DOM.Service.createElement( "div", { class: "shinken-weather-main-container-error-message" } );
        const _container_header         = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-container-header" } ), to_return );
        const _container_header_buttons = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-container-header-buttons" } ), _container_header );
        const _button_see_all           = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-button-see-all" } ), _container_header_buttons );
        
        this.display_of_widgets_button = new COMPONENT.ButtonFromData( "toggle-display-of-widgets-with-issues", "shinkon shinkon-eye-open shinken-button" );
        this.display_of_widgets_button.setTooltipByState( COMPONENT.CONST.BTN_STATE.OFF, _( "edit_mode.windows.tooltips.hide_cells_with_problems" ) );
        this.display_of_widgets_button.setTooltipByState( COMPONENT.CONST.BTN_STATE.ON, _( "edit_mode.windows.tooltips.show_cells_with_problems" ) );
        this.display_of_widgets_button.computeHtml();
        DOM.Service.addElementTo( this.display_of_widgets_button.getDomElement(), _button_see_all );
        
        this.window_container = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-weather-problem-window-container" } ), to_return );
        this.window_group_problem.computeHtml();
        DOM.Service.addElementTo( this.window_group_problem.getDomElement(), this.window_container );
        this.window_group_problem.computeHtmlTargets( this.window_container );
        this.window_group_problem.setContentSpecific();
        this.window_group_problem.doActionAfter( "link__dom_element__to_widget_problem__counter", { "dom_element_to_link": this.display_of_widgets_button.getDomElement() } );
        
        const _container_title_div = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-edit-title-div" } ), _container_header );
        DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-label shinkon shinkon-warning-circle-lite" } ), _container_title_div );
        DOM.Service.addElementTo( DOM.Service.createElement( "span", { class: "shinken-container-title" }, "<span>" + _( "edit_mode.windows.title.problem" ) + "</span>" ), _container_title_div );
        return to_return;
    },
    getController_20241003: function () {
        return CONTROLLER.PageController;
    },
    callbackForPhase: function () {
        const _current = this.getCurrentPhase();
        switch ( _current ) {
            case SHINKEN.OBJECT.CONST.PHASE.REFRESHING:
                DOM.Service.addElementToAfterEmpty( SHINKEN.TOOLS.LOADING_FRAME.getDomElement_V3(), this.window_container );
                break;
            case SHINKEN.OBJECT.CONST.PHASE.READY:
                if ( this.window_group_problem.hasProblems() ) {
                    this.setContent__20240925( this.buildContent__20240828() );
                    this.open__20240925();
                }
                else {
                    this.setPhase( SHINKEN.OBJECT.CONST.PHASE.HIDDEN );
                }
                break;
            case SHINKEN.OBJECT.CONST.PHASE.HIDDEN:
                this.resetCounters();
                break;
        }
        this.callbackForPhaseCommon();
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.SlidePanelProblem, SHINKEN.OBJECT.SlidePanel );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.SlidePanelProblem, SHINKEN.OBJECT.CounterInterfaceValidation );
SHINKEN_GRID.Cell           = function ( data ) {
    this.init( data );
};
SHINKEN_GRID.Cell.prototype = {
    init             : function ( data ) {
        this.initInternal();
        this.initPhase();
        this.class = "shinken-grid-cell shinken-no-opacity";
        this.updateData( data );
        this.setUUID();
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        if ( __has_edit_mode__ ) {
            this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING );
            this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED );
        }
    },
    doActionAfter      : function ( event_name, params ) {
        return this.doActionAfterCommon( event_name, params );
    },
    doActionAfterCommon: function ( event_name, params ) {
        switch ( event_name ) {
            case "click_on_button_V3":
                switch ( params[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case "toggle_remove_grid_cell_from_delete_list":
                        this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.DELETED, this.getUUID(), this.getCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.DELETED ) ? 0 : 1 );
                        break;
                }
                break;
            case "focus_on_dom_element":
                if ( this.getDomElement() && !DOM.Service.isElementOnScreen( this.getDomElement() ) ) {
                    DOM.Service.focusOnAnchor_withDom( this.getDomElement(), this.dom_parent_with_scroll, new DOM.Service.Animation( "shinken-pulsate", 1600 ), 5 );
                }
                break;
            case "mouse_down_on_grid_cell":
                if ( !params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.WIDGET_MODE__PHASE__OBJECT ].isPhase( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_SELECT ) ) {
                    break;
                }
                if ( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].ctrlKey ) {
                    break;
                }
                switch ( this.getCurrentPhase() ) {
                    case SHINKEN.OBJECT.CONST.PHASE.SELECTED:
                        this.selection_event_in_progress = true;
                        break;
                    default:
                        this.setPhase( SHINKEN.OBJECT.CONST.PHASE.SELECTED );
                        break;
                }
                break;
            case "mouse_up_on_grid_cell":
                if ( this.selection_event_in_progress ) {
                    this.setPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING );
                    this.selection_event_in_progress = false;
                    this.updateSize();
                }
                break;
            case "move_selected_grid_cell":
                this.selection_event_in_progress = false;
                if ( !this.starting_clone ) {
                    this.initStartingZone();
                    this.initEndingZone();
                }
                this.setDomElementStyle( "left", this.tile_pixel_size * this.starting_clone.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X ) + params[ SHINKEN.OBJECT.OVERLAYFRAME.CONST.EVENT.DELTA_X ] );
                this.setDomElementStyle( "top", this.tile_pixel_size * this.starting_clone.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ) + params[ SHINKEN.OBJECT.OVERLAYFRAME.CONST.EVENT.DELTA_Y ] );
                
                this.updateEndingClone( params[ SHINKEN.OBJECT.OVERLAYFRAME.CONST.EVENT.DELTA_X ], params[ SHINKEN.OBJECT.OVERLAYFRAME.CONST.EVENT.DELTA_Y ] );
                this.computeSquare();
                if ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] ) {
                    this.synchronizeJsonEditableValue( [SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X, SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y] );
                }
                break;
            case "add_space__selected_grid_cell":
                this.setPreviousModificationElement( { [ SHINKEN.OBJECT.CONST.PARAM.PARAM_EVENT.PARAM_LIST_KEY ]: [SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y, SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X] } );
                let _new_value = this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].getValue() + params[ SHINKEN.OBJECT.OVERLAYFRAME.CONST.EVENT.DELTA_Y ];
                this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].setUserValueAndValue( _new_value );
                this.updateSize();
                params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].addSpecific( this.getLastModificationElement( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.MOVE ) );
                if ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] ) {
                    this.synchronizeJsonEditableValue( [SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X, SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y] );
                }
                break;
            case "remove_space__selected_grid_cell":
                this.updateSize();
                params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].addSpecific( this.getLastModificationElement( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.MOVE, params ) );
                if ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] ) {
                    this.synchronizeJsonEditableValue( [SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X, SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y] );
                }
                break;
            case "mouse_resize_selected_grid_cell":
                if ( !this.starting_clone ) {
                    this.initStartingZone();
                    this.initEndingZone();
                }
                this.ending_clone.makeMoveInProgress__fromResize( params );
                if ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] ) {
                    this.synchronizeJsonEditableValue();
                }
                break;
            case "apply_move_reset__manually":
                if ( !this.starting_clone ) { // NO MOVE INITIATE
                    return;
                }
                this.updateData( this.starting_clone.getDataForMoveLastModification() );
                this.resetMoveObjects();
                this.updateSize();
                if ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] ) {
                    this.synchronizeJsonEditableValue();
                }
                break;
            case "apply_move__manually":
                if ( !this.starting_clone ) { // NO MOVE INITIATE
                    return;
                }
                this.updateData( this.ending_clone.getDataForMoveLastModification() );
                this.resetMoveObjects();
                this.updateSize();
                if ( !this.hasCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING ) && !this.isOutsideOfDisplay() ) {
                    this.updateData( { validation_messages: null } );
                }
                params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].addSpecific( this.getLastModificationElement( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.MOVE, true ) );
                params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].addSpecific( this.getLastModificationElement( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.MESSAGES ) );
                break;
            case "on_scroll":
                if ( this.isInPhase( [SHINKEN.OBJECT.CONST.PHASE.RUNNING, SHINKEN.OBJECT.CONST.PHASE.EDITING] ) && params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ].isInPhase( [SHINKEN.OBJECT.CONST.PHASE.RUNNING, SHINKEN.OBJECT.CONST.PHASE.EDITING] ) ) {
                    this.computeHtml( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ], "", true );
                }
                return;
            case "adding_new_widget_manually":
                this.content.doActionAfter( event_name, params );
                this.resetHTML();
                this.computeHtml( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ], params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ].dom_parent_with_scroll, params[ SHINKEN_GRID.CONST.PARAM.EVENT.ADD_DIRECTLY_TO_GRID ] );
                break;
            case "mouseover_on_deleting_pop_up":
                if ( this.uuid === params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ] ) {
                    DOM.Service.focusOnAnchor_withDom( this.dom_element, this.dom_parent_with_scroll, new DOM.Service.Animation( "shinken-pulsate", 1600 ), 5 );
                }
                else {
                    this.dom_element.classList.remove( "shinken-pulsate" );
                }
                break;
            case "change__shinken_element__from_form":
                this.resetCounters();
                this.resetHTML();
                this.computeHtml( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ], null, true );
                this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT ].doActionAfter( event_name, params );
                this.setPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING );
                CONTROLLER.PageController.doActionAfter( "clean_widget_with_problem", { [ [SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID] ]: this.getUUID() } );
                break;
            case "value__param__configured__from_form":
                for ( let i = 0, _size_i = params[ PROPERTY.COMMON.PARAM.PROPERTY_LIST__COMPOSED_KEY ].length; i < _size_i; i++ ) {
                    params[ PROPERTY.COMMON.PARAM.COMPOSED_KEY ]                = params[ PROPERTY.COMMON.PARAM.PROPERTY_LIST__COMPOSED_KEY ][ i ];
                    let param_object                                            = SHINKEN.TOOLS.DICT.getValueWithComposedKey( this, params[ PROPERTY.COMMON.PARAM.COMPOSED_KEY ] );
                    params[ SHINKEN.OBJECT.CONST.PARAM.PARAM_EVENT.PARAM_DATA ] = params[ SHINKEN.OBJECT.FORMSET.PARAM.DATA ][ params[ PROPERTY.COMMON.PARAM.COMPOSED_KEY ] ];
                    param_object.addParamsForEvents( this.getParamForEvents() );
                    param_object.doActionAfter( event_name, params );
                }
                this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT ].updateDomElement();
                break;
            case "default__param__configured__from_form":
                if ( params[ WIDGET.CONST.PARAM_EVENT.WIDGET_TYPE ] !== this.content.getTypeValue() ) {
                    return;
                }
                const param_to_update = SHINKEN.TOOLS.DICT.getObjectWithComposedKey( this, params[ PROPERTY.COMMON.PARAM.COMPOSED_KEY ] );
                if ( param_to_update.user_value !== param_to_update.default_value ) {
                    return;
                }
                param_to_update.addParamsForEvents( this.getParamForEvents() );
                param_to_update.doActionAfter( event_name, params );
                if ( SHINKEN_GRID.CONST.PARAM.isSizesProperty( params[ PROPERTY.COMMON.PARAM.COMPOSED_KEY ] ) ) {
                    this.updateSize( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ] );
                    params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_OBJECT ].add( this );
                }
                else {
                    this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT ].updateDomElement();
                }
                return;
            case "default__param__configured__from_form__done":
                let messages = { "validation_messages": {} };
                const errors = [];
                if ( this.hasCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING ) ) {
                    errors.push( this.getSingleOverlapMessageError() );
                }
                if ( this.isOutsideOfDisplay() ) {
                    errors.push( this.getOutsideOfDisplayMessageError() );
                }
                if ( errors.length ) {
                    messages[ "validation_messages" ][ "errors" ] = errors;
                }
                this.setPreviousModificationElement();
                this.updateData( messages );
                params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].addSpecific( this.getLastModificationElement( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.MESSAGES ) );
                params[ CONTROLLER.CONST.PARAM_EVENT.CONTROLLER_OBJECT ].doActionAfter( "window_problem__update__grid_cell__after__manual_action", {
                    [ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_OBJECT ]: this, [ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ]: this.getUUID()
                } );
                return;
            case "undo_last_modification":
            case "redo_last_modification":
                if ( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( WIDGET.CONST.PARAM_EVENT.WIDGET_CONTAINER_KEY ) ) {
                    this.doActionAfter__lastModification_onChildren( event_name, params );
                    this.updateJsonIfNeeded( params );
                    return;
                }
                this.doActionAfter__lastModification( event_name, params );
                break;
            case "update_nb_tiles_in_height":
                this.nb_tiles_in_height = params.new_nb_tiles_in_height;
                break;
        }
    },
    setUUID                        : function ( to_set ) {
        if ( !to_set && !this.uuid ) {
            to_set = SHINKEN.TOOLS.STRING.buildUUID();
        }
        this.uuid = to_set || this.uuid;
        this.addParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID, this.getUUID() );
        this.addJsonAnchor( this.getUUID() );
    },
    addParamForEvents              : function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        if ( this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT ] ) {
            this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT ].addParamForEvents( key, value );
        }
    },
    getUUID                        : function () {
        return this.uuid;
    },
    getContentNameForDeletePopup   : function () {
        return this.content.getNameToDisplay();
    },
    getContentUUID                 : function () {
        if ( this.content ) {
            return this.content.getUUID();
        }
    },
    getShinkenElement              : function () {
        if ( this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT ].getShinkenElement ) {
            return this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT ].getShinkenElement();
        }
    },
    getController                  : function () {
        console.shinken.debug( "TO BE OVERRIDE" );
        return null;
    },
    getWidgetType                  : function () {
        return this.content.type.getValue();
    },
    setIndexLabel                  : function ( index_value ) {
        this.index_label = "<span class='shinken-cell-label-index'>Widget " + index_value + "</span>";
    },
    getNameToDisplay               : function () {
        return this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT ].getNameToDisplay();
    },
    getPointBottomLeft             : function () {
        const current_grid_cell = this.ending_clone || this;
        return new SHINKEN.OBJECT.Point(
            current_grid_cell.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X ),
            current_grid_cell.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ) + current_grid_cell.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ),
            "bottom_left",
            current_grid_cell.nb_tiles_in_width - current_grid_cell.getComputedWidth()
        );
    },
    getPointTopRight               : function () {
        const current_grid_cell = this.ending_clone || this;
        return new SHINKEN.OBJECT.Point(
            current_grid_cell.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X ) + current_grid_cell.getComputedWidth(),
            current_grid_cell.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ),
            "top_right",
            current_grid_cell.nb_tiles_in_width
        );
    },
    getSquare                      : function () {
        if ( !this.square ) {
            this.computeSquare();
        }
        return this.square;
    },
    getJsonEditorInstance          : function ( dom_element, json, default_tag ) {
        return new SHINKEN.OBJECT.JsonEditor( dom_element, json, default_tag );
    },
    getSingleOverlapMessageError   : function () {
        return {
            "text"     : _( "validation.business.grid.widget_overlapping" ),
            "list_keys": [
                SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X,
                SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y,
                SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH,
                SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT
            ]
        };
    },
    getOutsideOfDisplayMessageError: function () {
        return {
            "text"     : _( "validation.business.grid.widget_out_of_grid" ),
            "list_keys": [
                SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X,
                SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y,
                SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH,
                SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT
            ]
        };
    },
    _getValidOwnChildren        : function () {
        return new SHINKEN.OBJECT.DefaultConfigurationChildren( [
            [SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT, "SHINKEN.OBJECT.DefaultConfigurationWithOwnProperty"]
        ] );
    },
    _getValidOwnProperty        : function () {
        return new SHINKEN_VALIDATION.Parameters( [
            [SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X, SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_POSITIVE, undefined, true],
            [SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y, SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_POSITIVE, undefined, true],
            [SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH, SHINKEN_VALIDATION.CONST.OTHERS.DEFINE_STRING_OR_INTEGER_POSITIVE, [SHINKEN_GRID.CONST.SPECIAL_VALUE.ALL, this.getDefaultValueLabel()]],
            [SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT, SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_POSITIVE]
        ] );
    },
    setJsonDomElementValue      : function ( property_name ) {
        let to_set = this.ending_clone ? this.ending_clone[ property_name ].getValue() : this[ property_name ].getUserValue();
        this[ property_name ].setJsonDomElementValue( to_set );
    },
    synchronizeJsonEditableValue: function ( property_list ) {
        property_list = property_list || this.parseValidOwnPropertyToKey();
        this.linkJsonDomElement( property_list );
        for ( let i = 0, _size_i = property_list.length; i < _size_i; i++ ) {
            this.setJsonDomElementValue( property_list[ i ] );
        }
    },
    resetSquare : function () {
        this.square = null;
    },
    isVisible   : function () {
        let _box      = this.getDisplayBox();
        let _rect     = DOM.Service.getBoundingClientRect( this.dom_parent_with_scroll );
        let _box_cell = { top: _box.top + _rect.top, bottom: _box.top + _box.height + _rect.top };
        let _box_grid = { top: _rect.top + this.dom_parent_with_scroll.scrollTop, bottom: _rect.bottom + this.dom_parent_with_scroll.scrollTop };
        
        return DOM.Service.isPartiallyVisibleIntoScrollingVerticalParent_Box( _box_cell, _box_grid );
    },
    remove      : function ( params ) {
        this.resetCounters();
        this.setPhase( SHINKEN.OBJECT.CONST.PHASE.DELETED );
        this.resetHTML( params );
        if ( !params[ SHINKEN.CONST.PARAM.EVENT_PARAM.AVOID_DO_ACTION_AFTER ] ) {
            this.getController().doActionAfter( "grid_cell_has_been_deleted", { [ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ]: this.getUUID() } );
        }
    },
    canBeDeleted: function () {
        return this.content.canBeDeleted();
    },
    computeMapping          : function ( mapping ) {
        if ( this.content && this.content.computeMapping ) {
            this.content.computeMapping( mapping );
        }
    },
    computeSizes            : function ( shinken_grid ) {
        this.updateSize( shinken_grid );
    },
    updateSize              : function ( shinken_grid ) {
        if ( !this.dom_element ) {
            this.computeSquare();
            return;
        }
        if ( shinken_grid ) {
            this.tile_pixel_size = shinken_grid.tile_pixel_size;
            this.font_size       = shinken_grid.font_size;
        }
        DOM.Service.setStyles( this.dom_element, this.getStyle() );
        DOM.Service.setStyle( this.dom_element_border_select_parent, DOM.CONST.STYLE.PADDING, this.padding_value );
        this._updateSize();
        if ( this.content ) {
            if ( !this.isPhase( SHINKEN.OBJECT.CONST.PHASE.ADDING ) ) {
                this.content.updateSize();
            }
        }
        this.removeClass( "shinken-no-opacity" );
        this.computeSquare();
    },
    _updateSize             : function () {
        DOM.Service.setStyle( this.content_container, DOM.CONST.STYLE.HEIGHT, "" );
        if ( __has_edit_mode__ && this.hasCounterProblems() ) {
            var _rect  = DOM.Service.getBoundingClientRect( this.dom_element );
            var _ratio = _rect[ DOM.CONST.STYLE.WIDTH ] / _rect[ DOM.CONST.STYLE.HEIGHT ];
            
            if ( _ratio > WIDGET.CONST.COMMON.PERFECT_RATIO ) {
                this.optimal_height = _rect[ DOM.CONST.STYLE.HEIGHT ];
            }
            else {
                this.optimal_height               = parseInt( _rect[ DOM.CONST.STYLE.WIDTH ] / WIDGET.CONST.COMMON.PERFECT_RATIO );
                this.padding_to_have_optimal_zone = parseInt( (_rect[ DOM.CONST.STYLE.HEIGHT ] - this.optimal_height) / 2 );
                
            }
            this.content_padding = parseInt( this.optimal_height * WIDGET.CONST.WEATHER.STYLE.PADDING_CONTENT );
            this.border_radius   = Math.ceil( 0.06 * this.optimal_height );
            
            if ( this.dom_element_error_container_secondary_content ) {
                DOM.Service.setStyles( this.dom_element_error_container_secondary_content, { "border-radius": this.border_radius / 2 } );
            }
            DOM.Service.setStyles( this.dom_element_error_container, { "padding": this.content_padding, "border-radius": this.border_radius } );
            DOM.Service.setStyle( this.content_container, DOM.CONST.STYLE.HEIGHT, "calc(100% - " + this.font_size + "px)" );
            
            DOM.Service.setStyles( this.dom_element_error_container.querySelector( '.shinken-widget' ), { "border-radius": this.border_radius } );
            
            DOM.Service.setStyle( this.dom_element_error_container_primary_content, "line-height", this.font_size + this.content_padding );
            
        }
    },
    computeContentWithChange: function () {
        let _to_return = 0;
        if ( this.content ) {
            _to_return = this.content.computeContentWithChange();
        }
        return _to_return;
    },
    computeOverlapping      : function ( grid_cell ) {
        if ( this.getUUID() === grid_cell.getUUID() ) {
            return;
        }
        grid_cell.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING, this.getUUID(), this.getSquare().isOverlapping( grid_cell.getSquare() ) ? 1 : 0 );
    },
    isOutsideOfDisplay      : function () {
        return this.getSquare().isOutsideOfDisplay( this.nb_tiles_in_width, this.nb_tiles_in_height );
    },
    confirmDoComputeHtml    : function () {
        return true;
    },
    computeSquare           : function () {
        if ( !__has_edit_mode__ || this.is_starting_clone || this.is_ending_clone ) {
            return;
        }
        const bottom_left_point = this.getPointBottomLeft();
        const top_right_point   = this.getPointTopRight();
        this.square             = new SHINKEN.OBJECT.Square( bottom_left_point, top_right_point, this.getUUID() );
    },
    initStartingZone              : function () {
        this.setPreviousModificationElement( { [ SHINKEN.OBJECT.CONST.PARAM.PARAM_EVENT.PARAM_LIST_KEY ]: this.parseValidOwnPropertyToKey() } );
        this.starting_clone                   = this.clone__20241010();
        this.starting_clone.is_starting_clone = true;
        this.starting_clone.addClass( "shinken-cell-position-start" );
        this.starting_clone.computeHtml();
        DOM.Service.insertElementBefore( this.getDomElement(), this.starting_clone.getDomElement() );
        this.starting_clone.computeSizes();
    },
    initEndingZone                : function () {
        this.ending_clone                 = this.clone__20241010();
        this.ending_clone.is_ending_clone = true;
        this.ending_clone.addClass( "shinken-cell-position-end" );
        this.ending_clone.computeHtml();
        DOM.Service.insertElementBefore( this.getDomElement(), this.ending_clone.getDomElement() );
        this.ending_clone.computeSizes();
        this.addCounterTargetDomElement( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING, this.ending_clone.getDomElement() );
    },
    resetMoveObjects              : function () {
        if ( this.starting_clone ) {
            this.starting_clone.remove( { [ SHINKEN.CONST.PARAM.EVENT_PARAM.AVOID_DO_ACTION_AFTER ]: true } );
            this.starting_clone = null;
        }
        if ( this.ending_clone ) {
            this.ending_clone.remove( { [ SHINKEN.CONST.PARAM.EVENT_PARAM.AVOID_DO_ACTION_AFTER ]: true } );
            this.ending_clone = null;
        }
    },
    makeMoveInProgress__fromResize: function ( params ) {
        let positions    = params[ SHINKEN.OBJECT.OVERLAYFRAME.CONST.EVENT.POSITION_IN_FRAME ];
        let height       = Math.max( Math.abs( positions.start_y - positions.end_y ), SHINKEN_GRID.CONST.PARAM.GRID_CELL.MIN_HEIGHT );
        let width        = Math.max( Math.abs( positions.start_x - positions.end_x ), SHINKEN_GRID.CONST.PARAM.GRID_CELL.MIN_WIDTH );
        const position_x = Math.min( positions.start_x, positions.end_x );
        const position_y = Math.min( positions.start_y, positions.end_y );
        if ( position_x + width > this.nb_tiles_in_width ) {
            width = this.nb_tiles_in_width - position_x;
        }
        if ( position_y + height > this.nb_tiles_in_height ) {
            height = this.nb_tiles_in_height - position_y;
        }
        this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X ].setUserValueAndValue( position_x );
        this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].setUserValueAndValue( position_y );
        this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH ].setUserValueAndValue( width );
        this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ].setUserValueAndValue( height );
        this.computeSizes();
    },
    applyResize                   : function ( params ) {
        if ( this.hasCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING ) ) {
            this.updateData( this.starting_clone.getDataForMoveLastModification() );
            this.resetMoveObjects();
            this.updateSize();
            if ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] ) {
                this.synchronizeJsonEditableValue();
            }
            return false;
        }
        this.makeMoveInProgress__fromResize( params );
        this.resetMoveObjects();
        this.updateSize();
        params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].addSpecific( this.getLastModificationElement( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.RESIZE ) );
        return true;
    },
    updateEndingClone             : function ( delta_x, delta_y ) {
        let _pos_x = this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X ].value + Math.round( delta_x / this.tile_pixel_size );
        _pos_x     = Math.max( 0, _pos_x );
        _pos_x     = Math.min( this.nb_tiles_in_width - this.getComputedWidth(), _pos_x );
        this.ending_clone.position_x.setUserValueAndValue( _pos_x );
        
        let _pos_y = this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].value + Math.round( delta_y / this.tile_pixel_size );
        _pos_y     = Math.max( 0, _pos_y );
        _pos_y     = Math.min( this.nb_tiles_in_height - this.getComputedHeight(), _pos_y );
        
        this.ending_clone.position_y.setUserValueAndValue( _pos_y );
        this.ending_clone.updateSize();
    },
    setData                          : function ( key, value ) {
        switch ( key ) {
            case SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X:
            case SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y:
            case SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH:
            case SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT:
                this.setDataKey( key, value );
                break;
            case SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT:
                this[ key ] = this.getChildConstructor( value );
                this[ key ].setCountersParent( this );
                this[ key ].addParamsForEvents( this.getParamForEvents() );
                this.own_children_keys.push( key );
                break;
            case SHINKEN_GRID.CONST.PARAM.GRID_CELL.UUID:
                this.setUUID( value );
                break;
            default:
                this.setDataAsUnknownProperty( key, value );
                break;
        }
    },
    getChildConstructor              : function ( data ) {
        return new SHINKEN.OBJECT.DefaultConfigurationWithOwnProperty( data );
    },
    doActionAfterSetMessageValidation: function ( value ) {
        if ( value ) {
            CONTROLLER.PageController.doActionAfter( "add_object_with_problems__to__window_problem", { [ SHINKEN.OBJECT.CONST.VALIDATION.PARAM.CURRENT_OBJECT ]: this } );
        }
        else {
            CONTROLLER.PageController.doActionAfter( "clean_widget_with_problem", { [ [SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID] ]: this.getUUID() } );
        }
        this.computeSizes();
    },
    clone__20241010    : function () {
        const to_return                                                            = this.getCloneConstructor();
        to_return[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X ]                 = this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X ].clone__20250108();
        to_return[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ]                 = this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].clone__20250108();
        to_return[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH ]                      = this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH ].clone__20250108();
        to_return[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ]                     = this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ].clone__20250108();
        to_return.tile_pixel_size                                                  = this.tile_pixel_size;
        to_return.font_size                                                        = this.font_size;
        to_return.dom_parent_with_scroll                                           = this.dom_parent_with_scroll;
        to_return[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_X ]                     = this[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_X ];
        to_return[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_Y ]                     = this[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_Y ];
        to_return[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MIN ]     = this[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MIN ];
        to_return[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MAX ]     = this[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MAX ];
        to_return[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_PERCENT ] = this[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_PERCENT ];
        return to_return;
    },
    getCloneConstructor: function ( data ) {
        return new SHINKEN_GRID.Cell( data );
    },
    computeHtml           : function ( shinken_grid, dom_parent_with_scroll, add_directly_to_grid ) {
        this.dom_parent_with_scroll = dom_parent_with_scroll || this.dom_parent_with_scroll;
        if ( this.getDomElement() ) {
            return false;
        }
        if ( !__has_edit_mode__ && this.hasCounterProblems() ) {
            return false;
        }
        if ( shinken_grid ) {
            this.tile_pixel_size                                                  = shinken_grid.tile_pixel_size;
            this.font_size                                                        = shinken_grid.font_size;
            this[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_X ]                     = shinken_grid.getValue( SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_X );
            this[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_Y ]                     = shinken_grid.getValue( SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_Y );
            this[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MIN ]     = shinken_grid.getValue( SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MIN );
            this[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MAX ]     = shinken_grid.getValue( SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MAX );
            this[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_PERCENT ] = shinken_grid.getValue( SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_PERCENT );
        }
        if ( !this.confirmDoComputeHtml( shinken_grid ) ) {
            return false;
        }
        if ( !add_directly_to_grid && !this.isVisible() ) {
            return false;
        }
        this.setDomElement( DOM.Service.createElement( "div", this.getAttribute() ) );
        
        this.content_container = DOM.Service.createElement( "div", { class: "shinken-grid-cell-container shinken-height-100" } );
        this.wrapHtmlContainer();
        this.addDomElement( this.dom_element_content );
        if ( this.content ) {
            this.content.setDomElementParent( this.content_container );
            this.content.computeHtml( this.tile_pixel_size * this.getComputedWidth(), this.tile_pixel_size * this.height );
        }
        
        this.setPhaseDomElement( this.getDomElement() );
        if ( add_directly_to_grid ) {
            DOM.Service.addElementTo( this.getDomElement(), shinken_grid.getDomElement() );
            this.updateSize();
        }
        return true;
    },
    computeCellMask       : function () {
        if ( this.dom_element_edition_mask ) {
            return;
        }
        this.dom_element_edition_mask               = this.addDomElement( DOM.Service.createElement( "div", { class: "shinken-grid-cell-mask-container" } ) );
        this.dom_element_border_select_parent       = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-grid-cell-border-container" } ), this.dom_element_edition_mask );
        this.dom_element_edition_mask_cursor_parent = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-grid-cell-resize-container shinken-layout-justify-between" } ), this.dom_element_edition_mask );
        DOM.Service.addResizeCursorsTo( this.dom_element_edition_mask_cursor_parent );
        
        let _delete_button_container   = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-layout-center-h-v shinken-button-container" } ), this.dom_element_edition_mask_cursor_parent );
        let _config_button_container   = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-layout-center-h-v shinken-button-container" } ), this.dom_element_edition_mask_cursor_parent );
        let _dom_element_border_select = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-grid-cell-border" } ), this.dom_element_border_select_parent );
        
        let container_bin = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-bin-container" } ), _delete_button_container );
        let bin_icon_svg  = DOM.Service.cloneElement( document.querySelector( "#id-shinken-template-view .shinken-bin-svg" ) );
        bin_icon_svg.classList.add( "shinken-delete-button" );
        DOM.Service.addElementTo( bin_icon_svg, container_bin );
        
        let container_cog = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-cog-container" } ), _config_button_container );
        let cog_icon_svg  = DOM.Service.cloneElement( document.querySelector( "#id-shinken-template-view .shinken-cog-svg" ) );
        cog_icon_svg.classList.add( "shinken-config-button" );
        DOM.Service.addElementTo( cog_icon_svg, container_cog );
    },
    wrapHtmlContainer     : function () {
        this.dom_element_content = this.dom_element_content || DOM.Service.createElement( "div", { class: "shinken-grid-cell-content" } );
        if ( !__has_edit_mode__ ) {
            DOM.Service.addElementToAfterEmpty( this.content_container, this.dom_element_content );
            return;
        }
        this.addCounterTargetDomElement( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, this.getDomElement() );
        this.addCounterTargetDomElement( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, this.getDomElement() );
        this.addCounterTargetDomElement( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING, this.getDomElement() );
        
        this.dom_element_error_container                 = DOM.Service.createElement( "div", { class: "shinken-grid-cell-container-edit-mode" } );
        this.dom_element_error_container_primary_content = DOM.Service.createElement( "div", { class: "shinken-grid-cell-container-error-primary-content" } );
        let _text_dom                                    = DOM.Service.createElement( "span", { class: "shinken-grid-cell-error-primary-text" } );
        let _primary_icon                                = DOM.Service.createElement( "span", { class: "shinkon-warning" } );
        
        DOM.Service.addElementTo( _primary_icon, this.dom_element_error_container_primary_content );
        
        _text_dom.innerHTML = _( "common.error", [DICTIONARY_COMMON_UI] );
        DOM.Service.addElementTo( _text_dom, this.dom_element_error_container_primary_content );
        let message = this.buildMessage();
        if ( message ) {
            message = "<div class='shinken-weather-error-message'>" + message + "<\div>";
        }
        DOM.Service.addTooltip( this.dom_element, { "shi-tip-html": message, "shi-tip-type": "shinken-error-message-weather" }, 'CONTROLLER.PageController.doActionAfter("show-tooltip-on-grid-cell", this)' );
        this.dom_element_error_separator_between_container = DOM.Service.createElement( "div", { class: "shinken-grid-cell-container-error-separator-between-container" } );
        this.dom_element_error_container_secondary_content = DOM.Service.createElement( "span", { class: "shinken-grid-cell-container-error-secondary-content" } );
        this.dom_element_error_secondary_text              = DOM.Service.createElement( "span", { class: "shinken-grid-cell-error-secondary-text" } );
        this.dom_element_error_secondary_text.innerHTML    = _( "common.warning", [DICTIONARY_COMMON_UI] );
        this.dom_element_error_secondary_icon              = DOM.Service.createElement( "span", { class: "shinkon-warning" } );
        DOM.Service.addElementTo( this.dom_element_error_secondary_icon, this.dom_element_error_container_secondary_content );
        DOM.Service.addElementTo( this.dom_element_error_secondary_text, this.dom_element_error_container_secondary_content );
        DOM.Service.addElementTo( this.dom_element_error_separator_between_container, this.dom_element_error_container_primary_content );
        DOM.Service.addElementTo( this.dom_element_error_container_secondary_content, this.dom_element_error_container_primary_content );
        DOM.Service.addElementTo( this.content_container, this.dom_element_error_container );
        DOM.Service.addElementTo( this.dom_element_error_container_primary_content, this.dom_element_error_container );
        DOM.Service.addElementToAfterEmpty( this.dom_element_error_container, this.dom_element_content );
    },
    buildMessage          : function () {
        var _to_write  = this.getAllObjectWithMessages();
        var _to_return = new SHINKEN_PAGE.Messages();
        for ( var i = 0, _size_i = _to_write.length; i < _size_i; i++ ) {
            _to_return.addMessages( _to_write[ i ].messages.getAllMessages() );
        }
        return _to_return.buildMessage();
    },
    computeHtmlDeletePopup: function () {
        this.dom_element_delete_popup = DOM.Service.createElement( "div", {
            "onmouseover": "MANAGER.EventManagerV2.doActionAfter( event, 'mouseover_on_deleting_pop_up', " + this.parseParamForEventsToHtml() + ")",
            "class"      : "shinken-deleting shinken-layout-justify-between"
        } );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.DELETED );
        this.addCounterTargetDomElement( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.DELETED, this.dom_element_delete_popup, "deletedActive" );
        this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.DELETED, this.getUUID(), 1 );
        
        let type_element_to_delete = DOM.Service.addElementTo( DOM.Service.createElement( "div", { "class": "shinken-type-cell shinken-layout-center-v" } ), this.dom_element_delete_popup );
        DOM.Service.addElementTo( this.content.getIconTypeDom(), type_element_to_delete );
        DOM.Service.addElementTo( DOM.Service.createElement( "span", {}, this.content.getTypeLabel() ), type_element_to_delete );
        
        let title_cell_label = this.getContentNameForDeletePopup();
        if ( !this.canBeDeleted() ) {
            title_cell_label += _( 'edit_mode.windows.tooltips.not_deletable_title' );
            this.dom_element_delete_popup.classList.add( "shinken-not-deletable-title" );
            this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.DELETED, this.getUUID(), 0 );
        }
        DOM.Service.addElementTo( DOM.Service.createElement( "div", { "class": "shinken-title-cell shinken-layout-expand-1" }, title_cell_label ), this.dom_element_delete_popup );
        
        let shinken_action_cell = DOM.Service.addElementTo( DOM.Service.createElement( "div", { "class": "shinken-action-cell" } ), this.dom_element_delete_popup );
        
        let button_toggle_delete = new COMPONENT.ButtonFromData_V3( "toggle_remove_grid_cell_from_delete_list", "<span class='shinken-view-button-delete shinken-2023-broom'></span><span class='shinken-view-button-delete shinken-2023-back'></span>" );
        button_toggle_delete.addParamsForEvents( this.getParamForEvents() );
        button_toggle_delete.computeHtml();
        DOM.Service.addElementTo( button_toggle_delete.getDomElement(), shinken_action_cell );
        
        return this.dom_element_delete_popup;
    },
    getAttribute          : function () {
        const _to_return = {
            class: this.getClass(),
            style: DOM.Service.styleToHtml( this.getStyle() )
        };
        this.getUserInteraction( _to_return );
        return _to_return;
    },
    getUserInteraction    : function ( attributes ) {
        const params                = "{'" + SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID + "' : '" + this.getUUID() + "','" + MANAGER.EVENT_MANAGER_V2.PARAM.EVENT + "' :  event}";
        attributes[ "onmousedown" ] = "MANAGER.EventManagerV2.doActionAfter(event, 'mouse_down_on_grid_cell'," + params + ")";
        attributes[ "onmouseup" ]   = "MANAGER.EventManagerV2.doActionAfter(event, 'mouse_up_on_grid_cell'," + params + ")";
    },
    getComputedWidth      : function () {
        return this.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH ) === SHINKEN_GRID.CONST.SPECIAL_VALUE.ALL ? this[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_X ] : this.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH );
    },
    getComputedHeight     : function () {
        return this.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ) === SHINKEN_GRID.CONST.SPECIAL_VALUE.ALL ? this[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_Y ] : this.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT );
    },
    getStyle              : function () {
        const _to_return = this.getDisplayBox();
        let _padding     = parseInt( DOM.BodyService.getWidth() * this[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_PERCENT ] / 100 );
        if ( !_to_return[ DOM.CONST.STYLE.WIDTH ] || !_to_return[ DOM.CONST.STYLE.HEIGHT ] ) {
            _padding = 0;
        }
        else {
            if ( this[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MAX ] !== SHINKEN_GRID.CONST.SPECIAL_VALUE.SEPARATION_GRID_ELEMENT_MAX_UNLIMITED ) {
                _padding = Math.min( _padding, this[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MAX ] );
            }
            _padding = Math.max( _padding, this[ SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MIN ] );
            
        }
        this.padding_value                    = _padding / 2;
        _to_return[ DOM.CONST.STYLE.PADDING ] = this.padding_value;
        return _to_return;
    },
    getDisplayBox         : function () {
        const _to_return                     = {};
        _to_return[ DOM.CONST.STYLE.WIDTH ]  = this.tile_pixel_size * this.getComputedWidth();
        _to_return[ DOM.CONST.STYLE.HEIGHT ] = this.tile_pixel_size * this.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT );
        _to_return[ DOM.CONST.STYLE.TOP ]    = this.tile_pixel_size * this.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y );
        _to_return[ DOM.CONST.STYLE.LEFT ]   = this.tile_pixel_size * this.getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X );
        return _to_return;
    },
    resetHTML             : function () {
        this.dom_element_edition_mask = null;
        this.resetHTMLCommon();
    },
    callbackForPhase: function () {
        let current_phase = this.getCurrentPhase();
        switch ( current_phase ) {
            case SHINKEN.OBJECT.CONST.PHASE.EDITING:
                this.computeCellMask();
                this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED, this.getUUID(), this.isPhase( SHINKEN.OBJECT.CONST.PHASE.SELECTED ) ? 1 : 0 );
                break;
            case SHINKEN.OBJECT.CONST.PHASE.SELECTED:
                this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED, this.getUUID(), this.isPhase( SHINKEN.OBJECT.CONST.PHASE.SELECTED ) ? 1 : 0 );
                break;
        }
        this.updateSize();
    },
    getLastModificationElement                : function ( type_modification, avoid_delete_previous ) {
        let to_return;
        let data_last_modification;
        let element_modified = this;
        let previous         = null;
        let next             = null;
        switch ( type_modification ) {
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.CONFIGURE:
                previous = this.getDataForLastModification();
                break;
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.DELETE:
                data_last_modification                                            = this.getDataForLastModification();
                data_last_modification[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.UUID ] = this.getUUID();
                previous                                                          = data_last_modification;
                break;
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.RESIZE:
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.MOVE:
                previous = this.previous_modication_data;
                next     = this.getDataForMoveLastModification();
                break;
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.MESSAGES:
                previous = { validation_messages: this.previous_modication_data.validation_messages };
                next     = { validation_messages: this.getDataForLastModification().validation_messages };
                break;
            default:
                console.error( "[Cell - getLastModificationElement]", "[NOT MANAGED]", type_modification );
                break;
        }
        to_return = new SHINKEN.OBJECT.LastModificationElement( type_modification, element_modified, previous, next );
        if ( !avoid_delete_previous ) {
            this.previous_modication_data = null;
        }
        return to_return;
    },
    getDataForMoveLastModification            : function () {
        let to_return = {};
        let _keys     = this.parseValidOwnPropertyToKey();
        for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
            to_return[ _keys[ i ] ] = this[ _keys[ i ] ].getDataForLastModification();
        }
        return to_return;
    },
    doActionAfter__lastModification_onChildren: function ( event_name, params ) {
        const modification_element = params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ];
        switch ( modification_element.getTypeModification() ) {
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.CONFIGURE:
                this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT ].doActionAfter( event_name, params );
                this.resetHTML();
                this.computeHtml( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ], null, true );
                this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT ].updateDomElement();
                this.setPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING );
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_OBJECT ] = this;
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ]   = this.getUUID();
                params[ CONTROLLER.CONST.PARAM_EVENT.CONTROLLER_OBJECT ].doActionAfter( this.hasCounterProblems() ? "add_object__with_problems__from_user_action" : "clean_widget_with_problem", params );
                break;
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.PARAM_MODIFICATION:
                this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT ].doActionAfter( event_name, params );
                break;
        }
    },
    doActionAfter__lastModification           : function ( event_name, params ) {
        const modification_element = params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ];
        switch ( modification_element.getTypeModification() ) {
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.PARAM_MODIFICATION:
                let param_object = SHINKEN.TOOLS.DICT.getObjectWithComposedKey( this, modification_element.getParamForEvents( PROPERTY.COMMON.PARAM.COMPOSED_KEY ) );
                param_object.doActionAfter( event_name, { [ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ]: modification_element } );
                this[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT ].updateDomElement();
                this.computeSizes();
                break;
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.MESSAGES:
                let messages = modification_element.getNextOrPrevious( event_name );
                this.updateData( messages );
                if ( !messages.validation_messages ) {
                    params[ CONTROLLER.CONST.PARAM_EVENT.CONTROLLER_OBJECT ].doActionAfter( "clean_widget_with_problem", { [ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ]: this.getUUID() } );
                }
                else {
                    params[ CONTROLLER.CONST.PARAM_EVENT.CONTROLLER_OBJECT ].doActionAfter( "add_object__with_problems__from_user_action", { [ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_OBJECT ]: this } );
                }
                this.computeSizes();
                break;
            default:
                this.updateData( modification_element.getNextOrPrevious( event_name ) );
                this.updateSize();
                break;
        }
        if ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] ) {
            this.synchronizeJsonEditableValue();
        }
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Cell, SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Cell, SHINKEN.OBJECT.PhaseInterface );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Cell, SHINKEN.OBJECT.ShinkenObjectHtml );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Cell, SHINKEN_GRID.BelongGridCell );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Cell, SHINKEN.OBJECT.EditableElementInterface );
SHINKEN_GRID.Cells           = function ( data ) {
    this.init( data );
};
SHINKEN_GRID.Cells.prototype = {
    init             : function ( data ) {
        this.setUUID();
        this.addParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_UUID, "SHINKEN_GRID.Cells" );
        this.index_label_index = 1;
        this.initContents();
        this.initPhase();
        this.initCounterCommon();
        this.content_mapping = {};
        this.updateData( data );
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL );
    },
    doActionAfter                  : function ( event_name, params ) {
        switch ( event_name ) {
            case "widget_mapping_has_changed":
                this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL, "total", this.getSize() );
                return;
            case "add_new_widget__manually":
                this.setPreviousModificationElement();
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_OBJECT ].setPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING );
                this.addCellObject( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_OBJECT ] );
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_OBJECT ].doActionAfter( "adding_new_widget_manually", params );
                params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].addSpecific( this.getLastModificationElement( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.ADD_CHILD ) );
                this.updateJsonIfNeeded( params );
                return;
            case "delete_selected_grid_cell":
                const last_modification = new SHINKEN.OBJECT.LastModification();
                last_modification.setModificationType( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.HISTORY.DELETE );
                this.setPreviousModificationElement();
                this.removeCells( params );
                last_modification.addSpecific( this.getLastModificationElement( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.REMOVE_CHILD ) );
                params[ CONTROLLER.CONST.PARAM_EVENT.CONTROLLER_OBJECT ].doActionAfter( "add_last_modification", { [ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ]: last_modification } );
                break;
            case "undo_last_modification":
            case "redo_last_modification":
                if ( this.getContentByUUID( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ) ) ) {
                    this.getContentByUUID( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ) ).doActionAfter( event_name, params );
                    return;
                }
                this.doActionAfter__lastModification( event_name, params );
                return;
            case "on_scroll":
            case "update_nb_tiles_in_height":
            case "mouseover_on_deleting_pop_up":
            case "default__param__configured__from_form":
                for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
                    this.getContent( i ).doActionAfter( event_name, params );
                }
                return;
            case "default__param__configured__from_form__done":
                if ( !params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_OBJECT ].getSize() ) {
                    return; //NO SIZES CHANGE
                }
                for ( let i = 0, _size_i = params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_OBJECT ].getSize(); i < _size_i; i++ ) {
                    this.computeOverlapping( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_OBJECT ].getContent( i ) );
                    params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_OBJECT ].getContent( i ).doActionAfter( event_name, params );
                }
        }
        var _cell = this.getContentByUUID( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ] || params );
        if ( !_cell ) {
            return;
        }
        _cell.doActionAfter( event_name, params );
        
        switch ( event_name ) {
            case "mouse_down_on_grid_cell":
            case "mouse_up_on_grid_cell":
                return _cell;
        }
    },
    doActionAfter__lastModification: function ( event_name, params ) {
        const modification_element = params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ];
        var _keys_next             = Object.keys( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getNext().mapping );
        var _keys_previous         = Object.keys( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getPrevious().mapping );
        var _list_uuid_missing;
        var _cell_added;
        switch ( modification_element.getTypeModification() ) {
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.ADD_CHILD:
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_UUID ] = SHINKEN.TOOLS.ARRAY.getMissingElements( _keys_next, _keys_previous );
                switch ( event_name ) {
                    case "undo_last_modification":
                        this.removeCells( params );
                        break;
                    case "redo_last_modification":
                        this.addCellsFromLastModification( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getNext(), params );
                        break;
                }
                break;
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.REMOVE_CHILD:
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_UUID ] = SHINKEN.TOOLS.ARRAY.getMissingElements( _keys_previous, _keys_next );
                switch ( event_name ) {
                    case "redo_last_modification":
                        this.removeCells( params );
                        break;
                    case "undo_last_modification":
                        this.addCellsFromLastModification( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getPrevious(), params );
                        break;
                }
                break;
        }
        this.updateJsonIfNeeded( params );
    },
    addCellsFromLastModification   : function ( data, params ) {
        for ( let i = 0, _size_i = params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_UUID ].length; i < _size_i; i++ ) {
            this.addCellFromLastModification( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_UUID ][ i ], data, params );
        }
    },
    addCellFromLastModification    : function ( uuid_cell, data, params ) {
        let _cell_added = this.addCell( { "value": data[ "contents" ][ data[ "mapping" ][ uuid_cell ] ] }, uuid_cell );
        _cell_added.computeHtml( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ], params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ].dom_parent_with_scroll, true );
        _cell_added.setPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING );
        params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ].getController().doActionAfter( "window_problem__update__grid_cell__after__manual_action", { [ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_OBJECT ]: _cell_added } );
    },
    setUUID              : function ( to_set ) {
        if ( !to_set && !this.uuid ) {
            to_set = SHINKEN.TOOLS.STRING.buildUUID();
        }
        this.uuid = to_set || this.uuid;
        this.addParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_UUID, this.uuid );
        this.addJsonAnchor( this.uuid );
    },
    getUUID              : function ( to_set ) {
        return this.uuid;
    },
    getChildConstructor  : function ( data ) {
        return new SHINKEN_GRID.Cell( data );
    },
    getChildrenObject    : function () {
        return this.getContents();
    },
    getChildrenObjectDict: function () {
        return this.getContents();
    },
    getJsonEditorInstance: function ( dom_element, json, default_tag ) {
        return new SHINKEN.OBJECT.JsonEditor( dom_element, json, default_tag );
    },
    getMaxTileInHeight: function () {
        var _box_content;
        var _to_return = 0;
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            _to_return = Math.max( this.getContent( i ).getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ) + this.getContent( i ).getValue( SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ), _to_return );
        }
        return _to_return;
    },
    computeSizes            : function ( shinken_grid ) {
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).computeSizes( shinken_grid );
        }
    },
    computeContentWithChange: function () {
        var _to_return = 0;
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            _to_return += this.getContent( i ).computeContentWithChange();
        }
        return _to_return;
    },
    computeMapping          : function () {
        this.computeMappingCommon();
        this.doActionAfter( "widget_mapping_has_changed" );
    },
    getLastModificationElement: function ( type_modification ) {
        let to_return;
        let element_modified = this;
        let previous         = null;
        let next             = null;
        switch ( type_modification ) {
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.ADD_CHILD:
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.REMOVE_CHILD:
                previous = this.previous_modication_data;
                next     = this.getDataForLastModification();
                break;
        }
        to_return                     = new SHINKEN.OBJECT.LastModificationElement( type_modification, element_modified, previous, next );
        this.previous_modication_data = null;
        return to_return;
    },
    getDataToSave: function () {
        var _to_return = [];
        for ( let i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            _to_return.push( this.contents[ i ].getDataToSave() );
        }
        return _to_return;
    },
    computeHtml: function ( shinken_grid, dom_parent_with_scroll ) {
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).computeHtml( shinken_grid, dom_parent_with_scroll );
            DOM.Service.addElementTo( this.getContent( i ).getDomElement(), shinken_grid.getDomElement() );
        }
    },
    updateContentData : function ( data ) {
        var _keys = Object.keys( data );
        var _current_key;
        var _currents_content;
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key      = _keys[ i ];
            _currents_content = this.content_mapping[ _current_key ];
            if ( _currents_content ) {
                for ( var j = 0, _size_j = _currents_content.length; j < _size_j; j++ ) {
                    _currents_content[ j ].updateShinkenElementData( data[ _current_key ] );
                }
            }
            else {
                console.error( "[Cells - updateContentData]", data );
            }
        }
    },
    updateData        : SHINKEN.OBJECT.DefaultConfiguration.prototype.updateData,
    setData           : function ( key, value ) {
        switch ( key ) {
            case "list_content":
                for ( var i = 0, _size_i = value.length; i < _size_i; i++ ) {
                    this.addCell( value[ i ] );
                }
                break;
            default:
                this.setDataAsUnknownProperty( key, value );
                break;
        }
    },
    addCell           : function ( data, forced_uuid ) {
        return this.addCellObject( this.getChildConstructor( data ), forced_uuid );
    },
    addCellObject     : function ( to_add, forced_uuid ) {
        if ( forced_uuid ) {
            SHINKEN.TOOLS.ARRAY.removeElementFromArrayWithValue( to_add._json_anchor, to_add.getUUID() );
            to_add.setUUID( forced_uuid );
        }
        this.addSynchronizedPhase( to_add );
        to_add.setCountersParent( this );
        this.add( to_add );
        to_add.setIndexLabel( this.index_label_index );
        this.index_label_index++;
        var _uuid_content = to_add.getContentUUID();
        if ( _uuid_content ) {
            if ( !this.content_mapping[ _uuid_content ] ) {
                this.content_mapping[ _uuid_content ] = [];
            }
            this.content_mapping[ _uuid_content ].push( to_add.content );
        }
        this.doActionAfter( "widget_mapping_has_changed" );
        to_add.addParamsForEvents( this.getParamForEvents() );
        return to_add;
    },
    removeCells       : function ( params ) {
        for ( let i = 0, _size_i = params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_UUID ].length; i < _size_i; i++ ) {
            this.removeContent( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_UUID ][ i ], params );
        }
        params[ CONTROLLER.CONST.PARAM_EVENT.CONTROLLER_OBJECT ].doActionAfter( "ask_close_form__if_needed", { [ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_OBJECT ]: this } );
        this.updateJsonIfNeeded( params );
    },
    computeOverlapping: function ( grid_cell ) {
        grid_cell.resetCounterByType( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING );
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).computeOverlapping( grid_cell );
        }
    },
    callbackForPhase          : function () {
    },
    addParamForEvents         : SHINKEN.OBJECT.EditableElementContainerInterface.prototype.addParamForEvents,
    getDataForLastModification: SHINKEN.OBJECT.EditableElementContainerInterface.prototype.getDataForLastModification
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Cells, SHINKEN.OBJECT.DefaultConfigurationWithOwnProperty );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Cells, SHINKEN.OBJECT.EditableElementContainerInterface );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Cells, SHINKEN.OBJECT.PhaseInterface );
SHINKEN_GRID.Grid           = function ( data ) {
    this.init( data );
};
SHINKEN_GRID.Grid.prototype = {
    init             : function ( data ) {
        this.setUUID();
        this.zoom_percent            = 100;
        this.zoom_percent_for_widget = 100;
        this.initPhase();
        this.initCounterCommon();
        this.initInternal();
        this.tile_pixel_size = 0;
        this.class           = "shinken-grid";
        if ( data ) {
            this.updateData( data );
            this.max_nb_tiles = this.grid_elements.getMaxTileInHeight();
        }
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WIDGET_TOTAL );
    },
    _getValidOwnProperty: function () {
        return new SHINKEN_VALIDATION.Parameters( [
            [SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_X, SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_POSITIVE],
            [SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_Y, SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_POSITIVE],
            [SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MIN, SHINKEN_VALIDATION.CONST.NUMBER.INTEGER_POSITIVE],
            [SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MAX, SHINKEN_VALIDATION.CONST.OTHERS.DEFINE_STRING_OR_INTEGER_POSITIVE, [SHINKEN_GRID.CONST.SPECIAL_VALUE.SEPARATION_GRID_ELEMENT_MAX_UNLIMITED, this.getDefaultValueLabel()]],
            [SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_PERCENT, SHINKEN_VALIDATION.CONST.NUMBER.FLOAT_POSITIVE],
            [SHINKEN_GRID.CONST.PARAM.GRID.TYPE, SHINKEN_VALIDATION.CONST.LIST.INCLUDE_IN, ["grid"], true]
        ] );
    },
    _getValidOwnChildren: function () {
        return new SHINKEN.OBJECT.DefaultConfigurationChildren( [
            [SHINKEN_GRID.CONST.PARAM.GRID.GRID_ELEMENTS, "WEATHER.Cells"],
            [SHINKEN_GRID.CONST.PARAM.GRID.LAYOUTS, "SHINKEN.OBJECT.DefaultConfigurationGridLayouts"]
        ] );
    },
    doActionAfter             : function ( event_name, params ) {
        switch ( event_name ) {
            case "compute_html_done":
                break;
            case "delete_selected_grid_cell":
                params[ CONTROLLER.CONST.PARAM_EVENT.CONTROLLER_OBJECT ]     = this.getController();
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ]         = this;
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_UUID ] = this.selected_grid_cell.extractContentUuidIfHasCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.DELETED );
                this.grid_elements.doActionAfter( event_name, params );
                SHINKEN.OBJECT.ConfirmationPopup_V3.getInstance().hide();
                break;
            case "on_scroll":
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ]       = this;
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_OBJECT ] = this.grid_elements;
                this.grid_elements.doActionAfter( event_name, params );
                if ( this.overlayed_frame ) {
                    this.overlayed_frame.doActionAfter( event_name, params );
                    switch ( this.overlayed_frame.getObjectClassName() ) {
                        case "SHINKEN.OBJECT.OverlayFrameMove":
                            this.selected_grid_cell.doActionAfterContentChildren( "move_selected_grid_cell", this.overlayed_frame.getDelta__parseToParams( params ) );
                            this.computeOverlappingOfSelectedCells();
                            break;
                    }
                }
                break;
            case "change_zoom_percent_for_widget":
                this.zoom_percent_for_widget = params[ SHINKEN_GRID.CONST.PARAM.GRID.ZOOM_PERCENT_FOR_WIDGET ];
                this.doActionAfter( "reset_grid_cell_to_add" );
                break;
            case "update_grid__highlighted_tile":
                this.computeCursorGridPosition( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ] );
                this.updateHighLightedTile();
                break;
            case "reset_action_in_progress":
                this.resetActionInProgress();
                break;
            case "is_an_action_overlay_frame_in_progress_in":
                return this.actionOverlayFrameCurrentlyInProgress();
            case "unselect_all_other_shinken_grid_cell":
                if ( !this.selected_grid_cell ) {
                    return;
                }
                for ( let i = this.selected_grid_cell.getSize() - 1; i >= 0; i-- ) {
                    if ( params && this.selected_grid_cell.getContent( i ).getUUID() === params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ] ) {
                        continue;
                    }
                    this.selected_grid_cell.getContent( i ).setPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING );
                    this.selected_grid_cell.getContent( i ).resetCounterByType( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED );
                    this.selected_grid_cell.getContent( i ).resetCounterByType( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING );
                    this.selected_grid_cell.removeContentByIndex( i, true );
                }
                break;
            case "value__param__configured__from_form":
            case "change__shinken_element__from_form":
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_OBJECT ].doActionAfterContentChildren( event_name, params );
                break;
            case "redo_last_modification":
            case "undo_last_modification":
                if ( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_UUID ) ) {
                    params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ] = this;
                    this.grid_elements.doActionAfter( event_name, params );
                    return;
                }
                else if ( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID__LAYOUTS__CHILD_NAME ) ) {
                    const layout_name = params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID__LAYOUTS__CHILD_NAME );
                    this[ SHINKEN_GRID.CONST.PARAM.GRID.LAYOUTS ][ layout_name ].doActionAfter( event_name, params );
                }
                else { // resize of grid
                    const modification_element = params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ];
                    this.updateData( modification_element.getNextOrPrevious( event_name ) );
                    this.updateStyle();
                }
                return;
            case "on_key_up":
                switch ( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].keyCode ) {
                    case SHINKEN.CONST.KEY_CODE.SUPPR:
                        if ( !this.selected_grid_cell.isEmpty() ) {
                            this.computeConfirmationPopup( "delete_selected_grid_cell", "delete_selected_grid_cell" );
                        }
                        break;
                    case SHINKEN.CONST.KEY_CODE.ENTER:
                        if ( SHINKEN.OBJECT.ConfirmationPopup_V3.getInstance().getName() === "delete_selected_grid_cell" ) {
                            this.doActionAfter( "delete_selected_grid_cell", params );
                        }
                        break;
                    case SHINKEN.CONST.KEY_CODE.ESCAPE:
                        switch ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.WIDGET_MODE__PHASE__OBJECT ].current_phase ) {
                            case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_ADD:
                            case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_CREATE:
                            case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_DELETE:
                                if ( this.actionCurrentlyInProgress() ) {
                                    this.resetActionInProgress();
                                }
                                break;
                            case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_SELECT:
                                if ( this.actionCurrentlyInProgress() ) {
                                    this.selected_grid_cell.doActionAfterContentChildren( "apply_move_reset__manually", params );
                                    this.resetActionInProgress();
                                }
                                else {
                                    this.doActionAfter( "unselect_all_other_shinken_grid_cell" );
                                }
                                break;
                        }
                        break;
                }
                break;
            case "update_focus_from_json_action":
                if ( this.last_plusated_element_uuid === params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ] ) {
                    return;
                }
                this.last_plusated_element_uuid = params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ];
                const grid_cell                 = this.grid_elements.getContentByUUID( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ] );
                if ( grid_cell ) {
                    this.doActionAfter( "unselect_all_other_shinken_grid_cell" );
                    grid_cell.setPhase( SHINKEN.OBJECT.CONST.PHASE.SELECTED );
                    this.updateSelectedList( [grid_cell] );
                    DOM.Service.focusOnAnchor_withDom( grid_cell.getDomElement(), this.dom_parent_with_scroll, new DOM.Service.Animation( "shinken-pulsate", 1600 ), 5 );
                }
                break;
            case "change_size_of_grid":
                params[ SHINKEN.OBJECT.CONST.PARAM.PARAM_EVENT.PARAM_LIST_KEY ] = [SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_Y];
                this.setPreviousModificationElement( params );
                this.applyResizeOfGrid( params[ SHINKEN_GRID.CONST.PARAM.GRID.RESIZE_HEIGHT ] );
                params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].addSpecific( this.getLastModificationElement( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.EDIT_PARAMS, params ) );
                break;
            case "reset_grid_cell_to_add":
                if ( this.grid_cell_to_add ) {
                    this.grid_cell_to_add.remove( { [ SHINKEN.CONST.PARAM.EVENT_PARAM.AVOID_DO_ACTION_AFTER ]: true } );
                    this.grid_cell_to_add = null;
                }
                break;
            case "pulsate_widgets":
                let widget_uuids = params.split( ',' );
                widget_uuids.forEach( ( uuid ) => {
                    const _grid_cell = this.grid_elements.getContentByUUID( uuid );
                    if ( _grid_cell ) {
                        DOM.Service.focusOnAnchor_withDom( grid_cell.getDomElement(), this.dom_parent_with_scroll, new DOM.Service.Animation( "shinken-pulsate", 1600 ), 5 );
                    }
                } );
                
                break;
            case "get_default_values_of_grid":
                return this.getDefaultValueOfGrid();
            case "change_virtual_add_grid_cell":
                if ( !this.isPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING ) ) {
                    return;
                }
                this.moveGridCellToAdd( null, params[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] );
                break;
            case "default__param__configured__from_form":
                let current_widget_default_layout_name;
                let current_widget_default_layout;
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ]           = this;
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_LIST_CELL_OBJECT ] = new SHINKEN.OBJECT.ShinkenObjectContainer();
                for ( let i = 0; i < params[ PROPERTY.COMMON.PARAM.PROPERTY_LIST__COMPOSED_KEY ].length; i++ ) {
                    params[ PROPERTY.COMMON.PARAM.COMPOSED_KEY ]   = params[ PROPERTY.COMMON.PARAM.PROPERTY_LIST__COMPOSED_KEY ][ i ];
                    params[ WIDGET.CONST.PARAM_EVENT.WIDGET_TYPE ] = SHINKEN.TOOLS.STRING.splitForGetFirstOne( params[ PROPERTY.COMMON.PARAM.COMPOSED_KEY ], "." );
                    
                    current_widget_default_layout = this.getLayoutFromTypeWidget( params[ WIDGET.CONST.PARAM_EVENT.WIDGET_TYPE ] );
                    current_widget_default_layout.addParamsForEvents( this.getParamForEvents() );
                    current_widget_default_layout.addParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID__LAYOUTS__CHILD_NAME, params[ WIDGET.CONST.PARAM_EVENT.WIDGET_TYPE ] + "_layout" );
                    current_widget_default_layout.doActionAfter( event_name, params );
                    
                    this.grid_elements.doActionAfter( event_name, params );
                }
                this.grid_elements.doActionAfter( "default__param__configured__from_form__done", params );
                break;
            case "move_selected_grid_cell":
                switch ( this.overlayed_frame.getObjectClassName() ) {
                    case "SHINKEN.OBJECT.GridCellResizer":
                        this.selected_grid_cell.getContent( 0 ).resetSquare();
                        this.computeOverlappingOfSelectedCells();
                        break;
                    case "SHINKEN.OBJECT.OverlayFrameMove":
                        this.selected_grid_cell.doActionAfterContentChildren( "move_selected_grid_cell", this.overlayed_frame.getDelta__parseToParams( params ) );
                        this.computeOverlappingOfSelectedCells();
                        break;
                }
                break;
            case "mouse_leave":
            case "mouse_wheel":
            case "mouse_move":
            case "mouse_up":
            case "mouse_down":
            case "mouse_move_on_grid_with_add_widget":
            case "mouse_down_on_grid_cell":
            case "mouse_up_on_grid_cell":
                this.doActionAfter_mouse( event_name, params );
                break;
            default:
                this.grid_elements.doActionAfter( event_name, params );
                break;
            
        }
    },
    doActionAfter_mouse       : function ( event_name, params ) {
        switch ( event_name ) {
            case "mouse_down":
                switch ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.WIDGET_MODE__PHASE__OBJECT ].current_phase ) {
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_CREATE:
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_DELETE:
                        this.doActionAfter( "unselect_all_other_shinken_grid_cell" );
                        this.initOverlayFrame( event_name, params );
                        break;
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_SELECT:
                        if ( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].target === this.getDomElement() && !params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].ctrlKey ) {
                            this.doActionAfter( "unselect_all_other_shinken_grid_cell" );
                        }
                        this.initOverlayFrame( event_name, params );
                        break;
                }
                break;
            case "mouse_down_on_grid_cell":
                const _dom_resize_icon        = DOM.Service.findParentElementWithClass( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].target, "shinken-resize-cursor", 50 );
                const _dom_delete_widget_icon = DOM.Service.findParentElementWithClass( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].target, "shinken-delete-button", 50 );
                const _dom_config_widget_icon = DOM.Service.findParentElementWithClass( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].target, "shinken-config-button", 50 );
                
                
                const _cell_ = this.grid_elements.doActionAfter( event_name, params );
                if ( !_dom_delete_widget_icon &&
                     this.selected_grid_cell &&
                     !params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].ctrlKey &&
                     !this.selected_grid_cell.containsUUID( _cell_.getUUID() ) ) {
                    this.doActionAfter( "unselect_all_other_shinken_grid_cell", params );
                }
                else if ( _dom_delete_widget_icon ) {
                    _cell_.setPhase( SHINKEN.OBJECT.CONST.PHASE.SELECTED );
                }
                else if ( _dom_config_widget_icon ) {
                    this.doActionAfter( "unselect_all_other_shinken_grid_cell", params );
                }
                
                this.updateSelectedList( [_cell_] );
                
                if ( _dom_resize_icon ) {
                    this.overlayed_frame = new SHINKEN.OBJECT.GridCellResizer( _dom_resize_icon.dataset.position, _cell_, this.tile_pixel_size );
                    this.overlayed_frame.init( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].clientX, params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].clientY, params[ "dom_relative_position_container_2024_07_18" ] );
                }
                else if ( _dom_delete_widget_icon ) {
                    params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].stopPropagation();
                    this.computeConfirmationPopup( "delete_selected_grid_cell", "delete_selected_grid_cell" );
                    return;
                }
                else if ( _dom_config_widget_icon ) {
                    params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].stopPropagation();
                    if ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] ) {
                        this.getController().doActionAfter( "focus-on-json-forced", { [ SHINKEN_GRID.CONST.PARAM.EVENT.FOCUSED_WIDGET ]: _cell_ } );
                    }
                    else {
                        this.getController().doActionAfter( "show_form_for_widget_configuration", { [ SHINKEN_GRID.CONST.PARAM.EVENT.FOCUSED_WIDGET ]: _cell_, [ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ]: this } );
                    }
                    return;
                }
                else {
                    if ( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].ctrlKey ) {
                        this.doActionAfter( "mouse_down", params ); //MULTIPLE SELECTION
                        return;
                    }
                    this.overlayed_frame = new SHINKEN.OBJECT.OverlayFrameMove();
                    this.overlayed_frame.init( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].clientX, params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].clientY, params[ "dom_relative_position_container_2024_07_18" ] );
                }
                this.getController().doActionAfter( "ask_close_form__if_needed", { [ SHINKEN_GRID.CONST.PARAM.EVENT.FOCUSED_WIDGET ]: _cell_ } );
                switch ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.WIDGET_MODE__PHASE__OBJECT ].current_phase ) {
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_CREATE:
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_DELETE:
                        this.doActionAfter( "mouse_down", params );
                        break;
                }
                break;
            case "mouse_leave":
                this.updateHighLightedTile( true );
                this.doActionAfter( "reset_grid_cell_to_add" );
                SHINKEN.TOOLS.MOUSE.unsetLastMouseEvent();
                break;
            case "mouse_wheel":
                this.updateHighLightedTile( true );
                break;
            case "mouse_move":
                SHINKEN.TOOLS.MOUSE.setLastMouseEvent( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ] );
                if ( !this.actionOverlayFrameCurrentlyInProgress() ) {
                    return;
                }
                this.scrollWhenAtEdgeOfView( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ] );
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ]       = this;
                params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_OBJECT ] = this.grid_elements;
                this.overlayed_frame.doActionAfter( event_name, params );
                switch ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.WIDGET_MODE__PHASE__OBJECT ].current_phase ) {
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_SELECT:
                        this.doActionAfter( "move_selected_grid_cell", params );
                        break;
                }
                break;
            case "mouse_up":
                var last_modification_mouse_up;
                switch ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.WIDGET_MODE__PHASE__OBJECT ].current_phase ) {
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_ADD:
                        if ( !this.grid_cell_to_add ) { // CLICK ON FORM
                            return;
                        }
                        if ( this.grid_cell_to_add.hasCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING ) ) {
                            return;
                        }
                        params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ]          = this;
                        params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_OBJECT ]     = this.grid_cell_to_add;
                        params[ SHINKEN_GRID.CONST.PARAM.EVENT.ADD_DIRECTLY_TO_GRID ] = true;
                        params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ] = new SHINKEN.OBJECT.LastModification();
                        params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].setModificationType( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.HISTORY.CREATE );
                        
                        this.grid_elements.doActionAfter( "add_new_widget__manually", params );
                        this.grid_cell_to_add = null;
                        this.resetActionInProgress();
                        this.getController().doActionAfter( "add_last_modification", params );
                        this.getController().doActionAfter( "confirm_add_new_widget_done", params );
                        return;
                    default:
                        if ( !this.overlayed_frame ) {
                            return; //HAPPENS WHEN DROP OUTSIDE THE GRID
                        }
                }
                switch ( this.overlayed_frame.getObjectClassName() ) {
                    case "SHINKEN.OBJECT.OverlayFrameMove":
                        this.doActionAfter( "mouse_up_on_grid_cell", { [ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ]: this.selected_grid_cell.getContent( 0 ).getUUID(), [ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ]: params } );
                        return;
                    case "SHINKEN.OBJECT.OverlayFrameZoneSelection":
                        this.updateSelectedList( this.overlayed_frame.makeMouseUpAction( this.grid_elements ) );
                        this.resetActionInProgress();
                        return;
                    case "SHINKEN.OBJECT.GridCellResizer":
                        params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ] = new SHINKEN.OBJECT.LastModification();
                        params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].setModificationType( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.HISTORY.RESIZE );
                        let _action_done = this.overlayed_frame.makeMouseUpAction( params );
                        this.computeOverlappingOfSelectedCells();
                        this.resetActionInProgress();
                        if ( _action_done ) {
                            this.getController().doActionAfter( "add_last_modification", params );
                        }
                        break;
                    case "SHINKEN.OBJECT.SpaceBoxDeletion":
                    case "SHINKEN.OBJECT.SpaceBoxCreation":
                        params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ]          = this;
                        params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELLS_OBJECT ]    = this.grid_elements;
                        params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ] = new SHINKEN.OBJECT.LastModification();
                        params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].setModificationType( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.HISTORY.MOVE );
                        this.overlayed_frame.makeMouseUpAction( params );
                        this.resetActionInProgress();
                        this.getController().doActionAfter( "add_last_modification", params );
                        return;
                }
                this.resetActionInProgress();
                break;
            
            case "mouse_move_on_grid_with_add_widget":
                DOM.BodyService.addOrRemoveClasses( true, "shinken-has-drag-in-progress-overlay-frame-move" );
                DOM.BodyService.addOrRemoveClasses( true, "shinken-has-drag-in-progress-overlay-frame" );
                SHINKEN.TOOLS.MOUSE.setLastMouseEvent( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ] );
                
                this.scrollWhenAtEdgeOfView( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ] );
                this.moveGridCellToAdd( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ], params[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] );
                break;
            
            case "mouse_up_on_grid_cell":
                if ( !this.overlayed_frame ) {
                    return;
                }
                this.updateSelectedList( [this.grid_elements.doActionAfter( event_name, params )] );
                switch ( this.overlayed_frame.getObjectClassName() ) {
                    case "SHINKEN.OBJECT.GridCellResizer":
                    case "SHINKEN.OBJECT.OverlayFrameZoneSelection":
                    case "SHINKEN.OBJECT.SpaceBoxDeletion":
                    case "SHINKEN.OBJECT.SpaceBoxCreation":
                        return this.doActionAfter( "mouse_up", params );
                }
                this.computeOverlappingOfSelectedCells();
                if ( this.selected_grid_cell.getContentUuidIfHasCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.OVERLAPPING ).length ) {
                    this.selected_grid_cell.doActionAfterContentChildren( "apply_move_reset__manually", params );
                }
                else {
                    params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ] = new SHINKEN.OBJECT.LastModification();
                    params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].setModificationType( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.HISTORY.MOVE );
                    this.selected_grid_cell.doActionAfterContentChildren( "apply_move__manually", params );
                    this.getController().doActionAfter( "add_last_modification", params );
                }
                this.resetActionInProgress();
                break;
        }
    },
    getLastModificationElement: function ( type_modification, params ) {
        let to_return;
        let data_last_modification;
        let element_modified = this;
        let previous         = null;
        let next             = null;
        switch ( type_modification ) {
            case SHINKEN.OBJECT.CONST.LAST_MODIFICATION.ACTION.EDIT_PARAMS:
                previous = this.previous_modication_data;
                next     = this.getDataForLastModification( params );
                break;
        }
        to_return                     = new SHINKEN.OBJECT.LastModificationElement( type_modification, element_modified, previous, next );
        this.previous_modication_data = null;
        return to_return;
    },
    initOverlayFrame          : function ( event_name, params ) {
        this.resetActionInProgress();
        switch ( event_name ) {
            case "mouse_down":
                switch ( params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.WIDGET_MODE__PHASE__OBJECT ].current_phase ) {
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_CREATE:
                        this.overlayed_frame = new SHINKEN.OBJECT.SpaceBoxCreation( this );
                        break;
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_DELETE:
                        this.overlayed_frame = new SHINKEN.OBJECT.SpaceBoxDeletion( this );
                        break;
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_SELECT:
                        this.overlayed_frame = new SHINKEN.OBJECT.OverlayFrameZoneSelection( this.tile_pixel_size );
                        break;
                }
                this.overlayed_frame.init( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].clientX, params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].clientY, params[ "dom_relative_position_container_2024_07_18" ] );
                this.overlayed_frame.computeHtml();
                this.addDomElement( this.overlayed_frame.getDomElement() );
        }
    },
    updateSelectedList: function ( cell_array ) {
        if ( !cell_array ) {
            return;
        }
        if ( !this.selected_grid_cell ) {
            this.selected_grid_cell = new SHINKEN.OBJECT.ShinkenObjectContainer();
        }
        let current;
        for ( let i = 0, _size_i = cell_array.length; i < _size_i; i++ ) {
            current = cell_array[ i ];
            if ( current.isPhase( SHINKEN.OBJECT.CONST.PHASE.SELECTED ) ) {
                this.selected_grid_cell.add( current );
            }
            else {
                this.selected_grid_cell.removeContent( current.getUUID(), null, true );
            }
        }
    },
    setUUID          : function ( to_set ) {
        this.uuid = to_set || SHINKEN.TOOLS.STRING.buildUUID();
        this.addParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID_UUID, this.uuid );
    },
    getUUID          : function () {
        return this.uuid;
    },
    getController    : function () {
        return CONTROLLER.CommonUI;
    },
    addParamForEvents: function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        if ( this[ SHINKEN_GRID.CONST.PARAM.GRID.GRID_ELEMENTS ] ) {
            this[ SHINKEN_GRID.CONST.PARAM.GRID.GRID_ELEMENTS ].addParamForEvents( key, value );
        }
    },
    computeMapping                   : function ( mapping ) {
        if ( this.grid_elements instanceof SHINKEN_GRID.Cells ) {
            this.grid_elements.computeMapping( mapping );
        }
    },
    computeOverlappingOfSelectedCells: function () {
        this.selected_grid_cell.getContents().forEach( cell => {
            this.grid_elements.computeOverlapping( cell );
        } );
    },
    computeSizes                     : function () {
        this.computeTileSize();
        this.computeFontSize();
        this.updateStyle();
        this.grid_elements.computeSizes( this );
    },
    computeTileSize                  : function () {
        this.tile_pixel_size = DOM.Service.getBoundingClientRect( this.getDomElement(), DOM.CONST.STYLE.WIDTH ) / this.getValue( SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_X ) * 100 / this.zoom_percent;
    },
    computeContentWithChange         : function () {
        return this.grid_elements.computeContentWithChange();
    },
    computeCursorGridPosition        : function ( event ) {
        let _x             = event.clientX - DOM.Service.getBoundingClientRect( this.dom_element, DOM.CONST.STYLE.LEFT );
        let _y             = event.clientY - DOM.Service.getBoundingClientRect( this.dom_element, DOM.CONST.STYLE.TOP );
        let _on_one_widget = false;
        if ( !event.target.classList.contains( "shinken-grid" ) ) {
            let _dom_parent = DOM.Service.findParentElementWithClass( event.target, "shinken-grid-cell", 50 );
            if ( _dom_parent ) {
                _on_one_widget = true;
            }
        }
        this.mouse_position = {
            x            : Math.floor( _x / this.tile_pixel_size ),
            y            : Math.floor( _y / this.tile_pixel_size ),
            on_one_widget: _on_one_widget,
            is_out_grids : event.target.querySelector( ".shinken-grids" )
        };
    },
    updateComputeConfirmationPopupValidButton: function () {
        this.button_validate_deleted = new COMPONENT.ButtonWithCounter( "valid_popup__20240904", _( "confirmation_popup.delete_button", [DICTIONARY_COMMON_UI] ) );
        SHINKEN.OBJECT.ConfirmationPopup_V3.getInstance().setValidButton( this.button_validate_deleted );
    },
    buildHtmlTitleDeletePopup                : function () {
        return _( "confirmation_popup.deletable_content.grid.title", [DICTIONARY_COMMON_UI] );
    },
    buildHtmlDeleteConfirmationPopup         : function () {
        this.selected_grid_cell.sortContentByClassName();
        let to_return = DOM.Service.createElement( "div", { "class": "shinken-grid-delete-confirmation-popup" } );
        let container = DOM.Service.addElementTo( DOM.Service.createElement( "div", { "class": "shinken-container" } ), to_return );
        let header    = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-layout-center-h-v shinken-layout-justify-between" } ), container );
        DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-header shinken-type-cell" }, _( "confirmation_popup.deletable_content.grid.type_column", [DICTIONARY_COMMON_UI] ) ), header );
        DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-header shinken-title-cell shinken-layout-expand-1" }, _( "confirmation_popup.deletable_content.grid.title_column", [DICTIONARY_COMMON_UI] ) ), header );
        DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-header shinken-action-cell" } ), header );
        let _table_element_to_delete_body = DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-container" } ), container );
        for ( let i = 0; i < this.selected_grid_cell.getSize(); i++ ) {
            DOM.Service.addElementTo( this.selected_grid_cell.getContent( i ).computeHtmlDeletePopup(), _table_element_to_delete_body );
            this.selected_grid_cell.getContent( i ).getCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.DELETED ).setParent( this.button_validate_deleted.getCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL ) );
        }
        return to_return;
    },
    createGridCellToAdd: function ( type ) {
        this.grid_cell_to_add = this.grid_elements.getChildConstructor();
        this.grid_cell_to_add.setPhase( SHINKEN.OBJECT.CONST.PHASE.ADDING );
        this.grid_cell_to_add.setData( SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X, { [ SHINKEN.OBJECT.CONST.PARAM.VALUE ]: "" } );
        this.grid_cell_to_add.setData( SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y, { [ SHINKEN.OBJECT.CONST.PARAM.VALUE ]: "" } );
        this.grid_cell_to_add.setData( SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH, { [ SHINKEN.OBJECT.CONST.PARAM.VALUE ]: this.getDefaultValueForElementToAdd( type, SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH ) } );
        this.grid_cell_to_add.setData( SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT, { [ SHINKEN.OBJECT.CONST.PARAM.VALUE ]: this.getDefaultValueForElementToAdd( type, SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ) } );
        this.grid_cell_to_add.setData( SHINKEN_GRID.CONST.PARAM.GRID_CELL.CONTENT, this.getContentByTypeForElementToAdd( type ) );
        this.grid_cell_to_add.computeHtml( this, this.dom_parent_with_scroll, true );
        DOM.Service.addElementTo( this.grid_cell_to_add.getDomElement(), this.getDomElement() );
        this.grid_cell_to_add.last_modication_data = type;
    },
    moveGridCellToAdd  : function ( event, type ) {
        const mouse_event = event || SHINKEN.TOOLS.MOUSE.getLastMouseEvent();
        if ( !mouse_event ) {
            return;
        }
        this.computeCursorGridPosition( mouse_event );
        if ( this.mouse_position.is_out_grids ) {
            this.doActionAfter( "reset_grid_cell_to_add" );
            return;
        }
        if ( !this.grid_cell_to_add ) {
            this.createGridCellToAdd( type );
        }
        let position_x = Math.round( this.mouse_position.x - this.grid_cell_to_add[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH ].getValue() / 2 );
        let position_y = Math.round( this.mouse_position.y - this.grid_cell_to_add[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ].getValue() / 2 );
        
        position_x = Math.min( Math.max( position_x, 0 ), this.nb_tiles_in_width.getValue() - this.grid_cell_to_add[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH ].getValue() );
        position_y = Math.min( Math.max( position_y, 0 ), this.nb_tiles_in_height.getValue() - this.grid_cell_to_add[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.HEIGHT ].getValue() );
        
        this.grid_cell_to_add[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_X ].setUserValueAndValue( position_x );
        this.grid_cell_to_add[ SHINKEN_GRID.CONST.PARAM.GRID_CELL.POSITION_Y ].setUserValueAndValue( position_y );
        this.grid_cell_to_add.updateSize();
        this.grid_cell_to_add.computeSquare();
        this.grid_elements.computeOverlapping( this.grid_cell_to_add );
    },
    initDomElementHighlightCell: function () {
        if ( this.dom_element_highlight_cell ) {
            return;
        }
        this.dom_element_highlight_cell = DOM.Service.createElement( "div", {
            class         : "shinken-grid-highlight-cell-container",
            "shi-tip-type": SHINKEN_TOOLTIP.TYPE.OFF_WHITE_ON_BLACK
        } );
        DOM.Service.addElementTo( this.dom_element_highlight_cell, this.getDomElement() );
    },
    updateHighLightedTile      : function ( force_hidden ) {
        if ( !this.mouse_position ) {
            return;
        }
        if ( this.mouse_position.is_out_grids ) {
            force_hidden = true;
        }
        this.initDomElementHighlightCell();
        if ( force_hidden ) {
            this.dom_element_highlight_cell.classList.add( "shinken-hidden" );
            SHINKEN_TOOLTIP.hideTooltip();
            return;
        }
        const _styles                     = {};
        _styles[ DOM.CONST.STYLE.TOP ]    = this.tile_pixel_size * this.mouse_position.y + DOM.Service.getBoundingClientRect( this.dom_element, DOM.CONST.STYLE.TOP );
        _styles[ DOM.CONST.STYLE.LEFT ]   = this.tile_pixel_size * this.mouse_position.x + DOM.Service.getBoundingClientRect( this.dom_element, DOM.CONST.STYLE.LEFT );
        _styles[ DOM.CONST.STYLE.HEIGHT ] = this.tile_pixel_size;
        _styles[ DOM.CONST.STYLE.WIDTH ]  = this.tile_pixel_size;
        
        
        DOM.Service.setStyles( this.dom_element_highlight_cell, _styles );
        let _tooltip_html = (this.mouse_position.on_one_widget) ? _( 'grid.mode_edition.form_visual.tooltip_on_hover_widget', [DICTIONARY_COMMON_UI] ) + " <br>" : '';
        _tooltip_html += "x = " + this.mouse_position.x + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = " + this.mouse_position.y;
        
        DOM.Service.addAttribute( this.dom_element_highlight_cell, 'shi-tip-html', _tooltip_html );
        this.dom_element_highlight_cell.classList.remove( 'shinken-hidden' );
        SHINKEN_TOOLTIP.updateTooltip( this.dom_element_highlight_cell );
        
    },
    initGridDomElement             : function () {
        this.setDomElement( DOM.Service.createElement( "div", {
            id                     : "id-shinken-" + this.uuid,
            class                  : this.getClass(),
            style                  : "font-size:" + this.font_size + "px;",
            "data-visibility-state": this.visibility_state || ""
        } ) );
        if ( __has_edit_mode__ ) {
            DOM.Service.addClasses( this.dom_element, "shinken-parent-mouse-move-listener shinken-parent-mouse-leave-listener" );
        }
        this.computeTileSize();
    },
    computeHtml                    : function ( dom_parent_with_scroll ) {
        this.dom_parent_with_scroll = dom_parent_with_scroll;
        let to_return               = !this.getDomElement();
        if ( to_return ) {
            this.initGridDomElement();
            DOM.Service.setDataSet( this.dom_element, "gridUuid", this.uuid );
        }
        this.grid_elements.computeHtml( this, dom_parent_with_scroll );
        this.addCounterTargetDomElement( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.SELECTED, this.getDomElement() );
        this.doActionAfter( "compute_html_done" );
        return to_return;
    },
    updateStyle                    : function () {
        DOM.Service.setStyles( this.dom_element, this.getComputedStyle() );
    },
    getComputedStyle               : function () {
        const _nb_tiles                         = this.isPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING ) ? this.getValue( SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_Y ) : this.max_nb_tiles;
        const _to_return                        = {};
        _to_return[ DOM.CONST.STYLE.HEIGHT ]    = this.tile_pixel_size * _nb_tiles;
        _to_return[ DOM.CONST.STYLE.FONT_SIZE ] = this.font_size;
        return _to_return;
    },
    computeFontSize                : function () {
        this.font_size = Math.round( DOM.Service.getBoundingClientRect( this.dom_element, DOM.CONST.STYLE.WIDTH ) / 85.7 );
    },
    resetActionInProgress          : function () {
        this.updateHighLightedTile( true );
        DOM.BodyService.addOrRemoveClasses( false, "shinken-has-drag-in-progress-overlay-frame-move" );
        DOM.BodyService.addOrRemoveClasses( false, "shinken-has-drag-in-progress-overlay-frame" );
        if ( this.grid_cell_to_add ) {
            this.grid_cell_to_add.resetHTML();
            this.grid_cell_to_add = null;
        }
        if ( !this.overlayed_frame ) {
            return;
        }
        this.overlayed_frame.addOrRemoveDragInProgress( false );
        this.overlayed_frame.resetZoneToRemove();
        this.overlayed_frame.remove();
        this.overlayed_frame = null;
    },
    getDefaultValueForElementToAdd : function ( type, key ) {
        switch ( type ) {
            case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.ADD_WIDGET.WEATHER_ADD:
                return this.getDefaultValueFor( WIDGET.CONST.TYPE.WEATHER, key );
            case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.ADD_WIDGET.SEPARATOR_ADD:
                return this.getDefaultValueFor( WIDGET.CONST.TYPE.SEPARATOR, key );
        }
    },
    getLayoutFromTypeWidget        : function ( type_widget ) {
        return this[ SHINKEN_GRID.CONST.PARAM.GRID.LAYOUTS ][ type_widget + "_layout" ];
    },
    getDefaultValueFor             : function ( type_widget, key ) {
        let dict      = this.getLayoutFromTypeWidget( type_widget ).getDataForJson( SHINKEN.OBJECT.JSON_EDITOR.FORMAT_DATA.VALUE_AND_DEFAULT );
        let to_return = SHINKEN.TOOLS.DICT.getValueWithComposedKey( dict, key ).value;
        if ( key === SHINKEN_GRID.CONST.PARAM.GRID_CELL.WIDTH ) {
            to_return = this.getComputedWidth( to_return );
        }
        return to_return;
    },
    getComputedWidth               : function ( width_to_compute ) {
        return width_to_compute === SHINKEN_GRID.CONST.SPECIAL_VALUE.ALL ? this[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_X ].getValue() : Math.min( width_to_compute, this.nb_tiles_in_width.getValue() );
    },
    getContentByTypeForElementToAdd: function ( type ) {
        let to_return;
        switch ( type ) {
            case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.ADD_WIDGET.WEATHER_ADD:
                to_return = {
                    [ WIDGET.CONST.PARAM.TYPE._KEY ]                  : WIDGET.CONST.TYPE.WEATHER,
                    [ WIDGET.CONST.PARAM.ITEM._KEY ]                  : {
                        [ WIDGET.CONST.PARAM.ITEM.TYPE._KEY ]: "",
                        [ WIDGET.CONST.PARAM.ITEM.UUID._KEY ]: "",
                        [ WIDGET.CONST.PARAM.ITEM.NAME._KEY ]: ""
                    },
                    [ WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT._KEY ]: this[ SHINKEN_GRID.CONST.PARAM.GRID.LAYOUTS ][ WIDGET.CONST.PARAM.LAYOUTS.WEATHER._KEY ].content[ WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT._KEY ].getDataForJson( SHINKEN.OBJECT.JSON_EDITOR.FORMAT_DATA.VALUE_AND_FORCE_DEFAULT )
                };
                break;
            case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.ADD_WIDGET.SEPARATOR_ADD:
                to_return                                                                                                                                                                                                                                                                                                                  = {
                    [ WIDGET.CONST.PARAM.TYPE._KEY ]                    : WIDGET.CONST.TYPE.SEPARATOR,
                    [ WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT._KEY ]: this[ SHINKEN_GRID.CONST.PARAM.GRID.LAYOUTS ][ WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR._KEY ].content[ WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT._KEY ].getDataForJson( SHINKEN.OBJECT.JSON_EDITOR.FORMAT_DATA.VALUE_AND_FORCE_DEFAULT )
                };
                to_return[ WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT._KEY ][ WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY._KEY ][ WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA._KEY ][ WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.LABEL._KEY ] = _( "edit_mode.widget.new_widget_separator" );
                break;
        }
        return SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage.prototype.parseDictToDict_withValueKey( to_return );
    },
    getDefaultValueOfGrid          : function () {
    },
    setData                              : function ( key, value ) {
        switch ( key ) {
            case SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_Y:
            case SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_X:
            case SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MIN:
            case SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_MAX:
            case SHINKEN_GRID.CONST.PARAM.GRID.SEPARATION_GRID_ELEMENT_PERCENT:
            case SHINKEN_GRID.CONST.PARAM.GRID.TYPE:
                this.setDataKey( key, value );
                break;
            case SHINKEN_GRID.CONST.PARAM.GRID.GRID_ELEMENTS:
                this[ key ] = this.getChildConstructor( value );
                this[ key ].setCountersParent( this );
                this[ key ].getCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL ).setParent( this.getCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WIDGET_TOTAL ) );
                this.addSynchronizedPhase( this[ key ] );
                this.own_children_keys.push( key );
                this[ key ].addParamsForEvents( this.getParamForEvents() );
                break;
            case SHINKEN_GRID.CONST.PARAM.GRID.LAYOUTS:
                this[ key ] = new SHINKEN.OBJECT.DefaultConfigurationGridLayouts( value );
                this.own_children_keys.push( key );
                break;
            default:
                this.setDataAsUnknownProperty( key, value );
                break;
        }
    },
    updateContentData                    : function ( data ) {
        this.grid_elements.updateContentData( data );
    },
    getChildConstructor                  : function ( data ) {
        return new SHINKEN_GRID.Cells( data );
    },
    actionCurrentlyInProgress            : function () {
        return this.actionOverlayFrameCurrentlyInProgress() || this.grid_cell_to_add;
    },
    actionOverlayFrameCurrentlyInProgress: function () {
        return !!this.overlayed_frame;
    },
    callbackForPhase: function () {
        if ( this.getCurrentPhase() !== this.getPreviousPhase() ) {
            this.updateStyle();
        }
        if ( this.getCurrentPhase() === SHINKEN.OBJECT.CONST.PHASE.EDITING ) {
            this.selected_grid_cell = new SHINKEN.OBJECT.ShinkenObjectContainer();
        }
    },
    scrollWhenAtEdgeOfView: function ( mouse_event ) {
        let dom_scrollable_container      = DOM.Service.findParentElementWithClass( this.getDomElement(), "shinken-grid-container", 50 );
        const mouse_position_y_in_grid    = this.parseRelativePixelY( mouse_event, dom_scrollable_container );
        const max_tile_in_height_in_pixel = this.parseGridToPixel_y( this.nb_tiles_in_height.getValue() );
        const position_y_visible          = this.getPositionYVisible( dom_scrollable_container );
        let scroll_height                 = 0;
        const delta                       = 20;
        
        if ( position_y_visible.max - mouse_position_y_in_grid < delta && mouse_position_y_in_grid + delta < max_tile_in_height_in_pixel ) {
            scroll_height = delta;
        }
        else if ( mouse_position_y_in_grid - position_y_visible.min < delta && mouse_position_y_in_grid - delta > 0 ) {
            scroll_height = -delta;
        }
        if ( scroll_height !== 0 ) {
            DOM.ScrollService.scrollVertically( dom_scrollable_container, scroll_height );
        }
    },
    parseGridToPixel_y    : function ( pos_grid ) {
        return pos_grid * this.tile_pixel_size;
    },
    parseRelativePixelY   : function ( mouse_event, dom_scrollable_container ) {
        return mouse_event.clientY - dom_scrollable_container.getBoundingClientRect().top + dom_scrollable_container.scrollTop;
    },
    getPositionYVisible   : function ( dom_scrollable_container ) {
        return {
            max: dom_scrollable_container.scrollTop + dom_scrollable_container.getBoundingClientRect().height,
            min: dom_scrollable_container.scrollTop
        };
    },
    applyResizeOfGrid     : function ( resize_height ) {
        if ( resize_height && resize_height !== 0 ) {
            const new_grid_height = Math.max( this.nb_tiles_in_height.getCfgValue(), this.nb_tiles_in_height.getValue() + resize_height );
            this.nb_tiles_in_height.setUserValueAndValue( new_grid_height );
            this.getController().doActionAfter( "change_grid_size_in_json", { new_grid_height_value: new_grid_height } );
            this.grid_elements.doActionAfter( "update_nb_tiles_in_height", { new_nb_tiles_in_height: new_grid_height } );
            this.updateStyle();
        }
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Grid, SHINKEN.OBJECT.DefaultConfigurationWithOwnProperty );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Grid, SHINKEN.OBJECT.PhaseInterface );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Grid, SHINKEN.OBJECT.ConfirmationPopupInterface );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Grid, SHINKEN.OBJECT.EditableElementInterface );
SHINKEN_GRID.Grids           = function () {
};
SHINKEN_GRID.Grids.prototype = {
    init             : function ( data ) {
        this.addParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRIDS_UUID, "SHINKEN_GRID.Grids" );
        this.initCommon();
        this.updateData( data );
    },
    initCommon       : function () {
        this.initInternal();
        this.initContents();
        this.initPhase();
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WIDGET_TOTAL );
    },
    doActionAfter    : function ( event_name, param ) {
        switch ( event_name ) {
            case "is_an_action_overlay_frame_in_progress_in":
                for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
                    if ( this.getContent( i ).doActionAfter( event_name, param ) ) {
                        return true;
                    }
                }
                return false;
            case "get_default_values_of_grid":
                return this.getContent( 0 ).doActionAfter( event_name, param );
            case "undo_last_modification":
            case "redo_last_modification":
                this.getContentByUUID( param[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID_UUID ) ).doActionAfter( event_name, param );
                return;
        }
        return this.doActionAfterCommon( event_name, param );
    },
    hasGrid              : function () {
        return this.getSize() > 0;
    },
    setType              : function ( to_set ) {
        this.type = to_set;
    },
    getGridByUUID        : function ( grid_uuid ) {
        return this.getContentByUUID( grid_uuid );
    },
    getChildrenObject    : function () {
        return this.getContents();
    },
    getChildrenObjectDict: function () {
        return this.getContents();
    },
    _computeMapping         : function () {
        this.mapping_uuid_content = {};
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).computeMapping( this.mapping_uuid_content );
        }
    },
    computeSizes            : function () {
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).computeSizes();
        }
    },
    computeContentWithChange: function () {
        var _to_return = 0;
        for ( var i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            _to_return += this.getContent( i ).computeContentWithChange();
        }
        return _to_return;
    },
    getDataToSave: function () {
        var _to_return = [];
        for ( let i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            _to_return.push( this.contents[ i ].getDataToSave() );
        }
        return _to_return;
    },
    computeHtml: function ( dom_parent_with_scroll ) {
        var _to_return = !this.getDomElement();
        if ( _to_return ) {
            this.setDomElement( DOM.Service.createElement( "div", { class: "shinken-grids shinken-css-relative-position" } ) );
        }
        var _current;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            _current = this.getContent( i );
            if ( _current.computeHtml( dom_parent_with_scroll ) ) {
                this.addDomElement( _current.getDomElement() );
            }
        }
        return _to_return;
    },
    updateData         : SHINKEN.OBJECT.DefaultConfiguration.prototype.updateData,
    reset              : function () {
        this.initContents();
        DOM.Service.removeElement( this.getDomElement() );
    },
    setData            : function ( key, value ) {
        switch ( key ) {
            case "list_content":
                for ( var i = 0, _size_i = value.length; i < _size_i; i++ ) {
                    let _current_grid = this.add( this.getChildConstructor( value[ i ] ) );
                    _current_grid.addParamsForEvents( this.getParamForEvents() );
                    this.addSynchronizedPhase( _current_grid );
                    _current_grid.setCountersParent( this );
                }
                break;
            default:
                this.setDataAsUnknownProperty( key, value );
                break;
        }
    },
    getChildConstructor: function ( data ) {
        return new SHINKEN_GRID.Grid( data );
    },
    updateContentData  : function ( data ) {
        for ( var i = 0, _size = this.getSize(); i < _size; i++ ) {
            this.getContent( i ).updateContentData( data );
        }
    },
    callbackForPhase   : function () {
    },
    addParamForEvents  : SHINKEN.OBJECT.ShinkenObjectContainer.prototype.addParamForEvents,
    doActionAfterCommon: SHINKEN.OBJECT.ShinkenObjectContainer.prototype.doActionAfterCommon
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Grids, SHINKEN.OBJECT.DefaultConfigurationWithOwnProperty );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Grids, SHINKEN.OBJECT.ShinkenObjectContainerHtml );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_GRID.Grids, SHINKEN.OBJECT.PhaseInterface );
SHINKEN.OBJECT.ButtonModeClic           = function ( name ) {
    this.initSpecific( name );
};
SHINKEN.OBJECT.ButtonModeClic.prototype = {
    initSpecific: function ( name, label ) {
        this.init( name );
        this.setLabel( _( 'edit_mode.labels.clic' ) );
        this.computeHtml();
    },
    
 
    getLabelDomElement: function () {
        let to_return = DOM.Service.createElement( "div", { class: "shinken-label-container shinken-layout-center-h-v" } );
        DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-label" }, this.label ), to_return );
        return to_return;
    },
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.ButtonModeClic, SHINKEN.OBJECT.RadioMode );
SHINKEN.OBJECT.ButtonModeZone           = function ( name ) {
    this.initSpecific( name );
};
SHINKEN.OBJECT.ButtonModeZone.prototype = {
    initSpecific: function ( name, label ) {
        this.init( name );
        this.setLabel( _( 'edit_mode.labels.zone' ) );
    },
    
 
    getLabelDomElement: function () {
        let to_return = DOM.Service.createElement( "div", { class: "shinken-label-container shinken-layout-center-h-v" } );
        DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-label" }, this.label ), to_return );
        return to_return;
    },
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.ButtonModeZone, SHINKEN.OBJECT.RadioMode );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.ButtonModeZone, COMPONENT.ButtonFromData );
SHINKEN.OBJECT.ButtonModeSelectByName           = function ( name ) {
    this.initSpecific( name );
};
SHINKEN.OBJECT.ButtonModeSelectByName.prototype = {
    initSpecific: function ( name, label ) {
        this.init( name );
        this.initInput();
        this.initSelector( name );
        
    },
    initInput   : function () {
        this.input = new COMPONENT.InputFromDataV2( "", this.name );
        this.input.setPlaceholder( _( "form.radio_widget_mode.mode_select.input_placeholder" ) );
        this.input.computeHtml();
    },
    initSelector: function ( name ) {
        this.select = new COMPONENT.SingleSelectFromData( name );
        this.select.setOptionsFromArray( this.computeSelectorOptions( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.SELECT_WIDGET_SELECTOR_OPTIONS ) );
        this.select.computeHtml();
    },
    doActionAfter: function ( event_name, param_1, param_2, param_3 ) {
        switch ( event_name ) {
            case "click_on_selector":
                this.select.doActionAfter( event_name, param_1, param_2, param_3 );
                return true;
            case "click_on_item_selector":
                this.select.doActionAfter( event_name, param_3, this );
                return true;
        }
        this.doActionAfterCommon(event_name, param_1, param_2, param_3);
    },
    
    
    getLabelDomElement: function () {
        let to_return = DOM.Service.createElement( "div", { class: "shinken-label-container shinken-layout-inline-center-h-v" } );
        DOM.Service.addElementTo( this.select.getDomElement(), to_return );
        DOM.Service.addElementTo( this.input.getDomElement(), to_return );
        return to_return;
    },
    computeSelectorOptions: function ( selectors_options ) {
        var _to_return = [];
        var _keys      = Object.keys( selectors_options );
        var _current_key;
        var _to_add;
        for ( let i = 0, _size = (_keys.length); i < _size; i++ ) {
            _current_key       = _keys[ i ];
            _to_add            = { "name": selectors_options[ _current_key ] };
            _to_add[ 'label' ] = _( "form.radio_widget_mode.mode_select.input_selector_options." + selectors_options[ _current_key ] );
            if ( i === 0 ) {
                _to_add[ 'is_selected' ] = true;
            }
            _to_return.push( _to_add );
        }
        return _to_return;
    }
}
;
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.ButtonModeSelectByName, SHINKEN.OBJECT.RadioMode );
SHINKEN.OBJECT.ModeSelectWidgetButtons           = function ( name ) {
    this.init( name );
};
SHINKEN.OBJECT.ModeSelectWidgetButtons.prototype = {
    init          : SHINKEN.OBJECT.RadioModes.init,
    initAllContent: function () {
    },
    computeCommonHtml: function () {
        /*    this.setDomElement( DOM.Service.createElement( "div", { class: this.getClass() } ) );
            for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
                this.getContent( i ).computeHtml();
            }
            DOM.Service.addElementTo( this.computeSecondLine(), this.getDomElement() );
            this.computeHtmlExtra();*/
    },
    /*  computeSecondLine: function () {
          let to_return = DOM.Service.createElement( "div", { class: "shinken-layout-wrap shinken-disabled shinken-hidden", style: "pointer-events: none; opacity: 0.5; cursor: not-allowed" } );
          DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-layout-center-v shinken-select-description" }, _( 'form.radio_widget_mode.mode_select.by_name' ) ), to_return );
          DOM.Service.addElementTo( this.getContent( 2 ).getDomElement(), to_return );
          return to_return;
      },*/
    getClass: function () {
        return "shinken-radio-sub-modes-content shinken-sub-mode-select shinken-layout-column";
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.ModeSelectWidgetButtons, SHINKEN.OBJECT.RadioModes );
SHINKEN.OBJECT.RadioWidgetModeSelect           = function ( name ) {
    this.initSpecific( name );
};
SHINKEN.OBJECT.RadioWidgetModeSelect.prototype = {
    initSpecific  : function ( name, label ) {
        this.init( name );
        this.setLabel( _( "form.radio_widget_mode.label." + name ) );
    },
    initAllContent: function () {
        this.add( new SHINKEN.OBJECT.RadioWidgetModeSelect( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_SELECT ) );
    },
    getIconSrc        : function () {
        return "/static/" + __SHINKEN_HTTP_START_TIME__ + "/service_weather/img/form/select.png";
    },
    getShortCutLetter : function () {
        return "V";
    },
    getTooltipPosition: function () {
        return SHINKEN_TOOLTIP.PLACEMENT.BOTTOM_LEFT;
    },
    getHelpContents     : function () {
        return [
            {
                type_content: "label_&_content",
                label       : _( "edit_mode.windows.tooltips.labels_help.select_with" ),
                elements    : [
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.click" ) },
                    { className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.or" ) },
                    { className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.maintain" ) },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.click" ) },
                    { className: "shinken-tooltip-help-label", content: "+" },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.move" ) }
                ]
            },
            {
                type_content: "label_&_content",
                label       : _( "edit_mode.windows.tooltips.labels_help.mass_selection" ),
                elements    : [
                    { className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.maintain" ) },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.click" ) },
                    { className: "shinken-tooltip-help-label", content: "+" },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.move" ) },
                    { className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.or" ) },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.ctrl" ) },
                    { className: "shinken-tooltip-help-label", content: "+" },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.click" ) }
                ]
            },
            {
                type_content: "label_&_content",
                label       : _( "edit_mode.windows.tooltips.labels_help.move_widget" ),
                elements    : [
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.select" ) },
                    { className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.then" ) },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.click" ) },
                    { className: "shinken-tooltip-help-label", content: "+" },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.move" ) }
                ]
            },
            {
                type_content: "label_&_content",
                label       : _( "edit_mode.windows.tooltips.labels_help.cancel_selection" ),
                elements    : [{ className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.esc" ) }]
            },
            {
                type_content: "full_line_content",
                label       : _( "edit_mode.windows.tooltips.labels_help.deselect" ),
                elements    : [
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.ctrl" ) },
                    { className: "shinken-tooltip-help-label", content: "+" },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.click" ) },
                    { className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.or" ) },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.click" ) },
                    { className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.on" ) },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.weather" ) }
                ]
            }
        ];
    },
    getHelpSpecificClass: function ( content ) {
        return "shinken-tooltip-selection";
    },
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.RadioWidgetModeSelect, SHINKEN.OBJECT.RadioMode );
SHINKEN.OBJECT.AddRadioModes           = function ( name ) {
    this.init( name );
};
SHINKEN.OBJECT.AddRadioModes.prototype = {
    init: SHINKEN.OBJECT.RadioModes.init,
    doActionAfter: function ( event_name, param, param_2, param_3 ) {
        switch ( event_name ) {
            case "change_radio_mode_to_next":
                let _next_index = this.getNextLoopingIndex( this.getMappingIndex( this.getCurrentPhase() ) );
                this.doActionAfter( "change_radio_mode", {
                    [ SHINKEN.OBJECT.RADIOMODE.PARAM.PARENT_OBJECT ]: this.getName(),
                    [ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ]         : this.getContent( _next_index ).getUUID()
                } );
                return;
            case "mouse_move_on_grid":
                for ( let i = 0, size = this.getSize(); i < size; i++ ) {
                    this.getContent( i ).doActionAfter( event_name, param, param_2, param_3 );
                }
                return;
            case "compute_html_done":
                this.doActionAfter( "change_radio_mode_if_not_set" );
                return;
        }
        this.doActionAfterCommon( event_name, param, param_2, param_3 );
        switch ( event_name ) {
            case "change_radio_mode":
                CONTROLLER.PageController.doActionAfter( "change_radio_mode_done", param );
                break;
        }
    },
    getClass: function ( to_add ) {
        return "shinken-radio-modes-content shinken-layout-wrap";
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.AddRadioModes, SHINKEN.OBJECT.RadioModes );
SHINKEN.OBJECT.RadioWidgetModeAdd           = function ( name ) {
    this.initSpecific( name );
};
SHINKEN.OBJECT.RadioWidgetModeAdd.prototype = {
    initSpecific: function ( name, label ) {
        this.init( name );
        this.setLabel( _( "form.radio_widget_mode.label." + name ) );
        this.radios = null;
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "change_radio_mode":
                if ( param[ SHINKEN.OBJECT.RADIOMODE.PARAM.PARENT_OBJECT ] === SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.ADD_WIDGET.RADIOS._KEY ) {
                    this.radios.doActionAfter( event_name, param );
                    return;
                }
                break;
            case "change_radio_mode_to_next":
                this.radios.doActionAfter( event_name, param );
                return;
        }
        this.doActionAfterCommon( event_name, param );
    },
    add                      : function ( radios_mode ) {
        this.radios = radios_mode;
        return this.radios;
    },
    getIconSrc        : function () {
        return "/static/" + __SHINKEN_HTTP_START_TIME__ + "/service_weather/img/form/add.png";
    },
    getShortCutLetter : function () {
        return "A";
    },
    getTooltipPosition: function () {
        return SHINKEN_TOOLTIP.PLACEMENT.TOP_LEFT;
    },
    
    getHelpContents     : function () {
        return [
            {
                type_content : "ordered_title",
                ordered_value: 1,
                elements     : [
                    { type: "span", className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.select_widget_type" ) }
                ]
            },
            {
                type_content: "full_line_content",
                elements    : [
                    { type: "span", className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.click" ) },
                    { type: "span", className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.on" ) },
                    { type: "span", className: "shinken-tooltip-help-button-type-widget", content: _( "edit_mode.windows.tooltips.labels_help.type_widget" ) }
                ]
            },
            {
                type_content : "ordered_title",
                ordered_value: 2,
                elements     : [
                    { type: "span", className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.add_widget" ) }
                ]
            },
            {
                type_content: "full_line_content",
                elements    : [
                    { type: "span", className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.move_mouse" ) }
                ]
            },
            {
                type_content: "full_line_content",
                elements    : [
                    { type: "span", className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.empty_area" ) },
                    { type: "span", className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.add_widget_button" ) },
                    { type: "span", className: "shinken-tooltip-help-label", content: "+" },
                    { type: "span", className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.click" ) }
                ]
            }
        
        ]
            ;
    },
    getHelpSpecificClass: function ( content ) {
        return "shinken-tooltip-add-widget";
    },
    computeHtmlExtra    : function () {
        this.radios.computeHtml();
        DOM.Service.addElementTo( this.radios.getDomElement(), this.dom_content_zone );
    },
    callbackForPhase: function () {
        if ( this.getCurrentPhase() === this.getPreviousPhase() ) {
            return;
        }
        switch ( this.getCurrentPhase()  ){
            case SHINKEN.OBJECT.CONST.PHASE.RUNNING_TO_STRING:
                this.radios.doActionAfter( "change_radio_mode_if_not_set" );
                break;
            case SHINKEN.OBJECT.CONST.PHASE.SLEEPING:
                 CONTROLLER.PageController.doActionAfter( "reset_grid_cell_to_add" );
                break;
        }
    }
}
;
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.RadioWidgetModeAdd, SHINKEN.OBJECT.RadioMode );
SHINKEN.OBJECT.RadioWidgetModePush           = function ( name ) {
    this.initSpecific( name );
};
SHINKEN.OBJECT.RadioWidgetModePush.prototype = {
    initSpecific: function ( name, label ) {
        this.init( name );
        this.setLabel( _( "form.radio_widget_mode.label." + name ) );
    },
    
    
    getIconSrc       : function () {
        return "/static/" + __SHINKEN_HTTP_START_TIME__ + "/service_weather/img/form/push.png";
    },
    getShortCutLetter: function () {
        return "P";
    },
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.RadioWidgetModePush, SHINKEN.OBJECT.RadioMode );
SHINKEN.OBJECT.RadioWidgetModeSpaceCreate           = function ( name ) {
    this.initSpecific( name );
};
SHINKEN.OBJECT.RadioWidgetModeSpaceCreate.prototype = {
    initSpecific: function ( name, label ) {
        this.init( name );
        this.setLabel( _( "form.radio_widget_mode.label." + name ) );
    },
    
    getIconSrc        : function () {
        return "/static/" + __SHINKEN_HTTP_START_TIME__ + "/service_weather/img/form/weather_visual_edit_create_space.png";
    },
    getShortCutLetter : function () {
        return "C";
    },
    getTooltipPosition: function () {
        return SHINKEN_TOOLTIP.PLACEMENT.TOP_LEFT;
    },
    
    getHelpContents     : function () {
        return [
            {
                type_content: "label_&_content",
                elements    : [
                    { className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.create_space" ) },
                    { className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.maintain" ) },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.click" ) },
                    { className: "shinken-tooltip-help-label", content: "+" },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.move" ) }
                ]
            },
            {
                type_content: "unordered_title",
                label       : _( "edit_mode.windows.tooltips.labels_help.direction_widget_movement" )
            },
            {
                type_content: "image_&_content",
                elements    : [
                    { className: "shinken-help-img shinken-create-space" },
                    { className: "shinken-tooltip-help-label shinken-multi-line", content: _( "edit_mode.windows.tooltips.labels_help.to_the_down" ) }
                ]
            }
        
        ];
    },
    getHelpSpecificClass: function ( content ) {
        return "shinken-tooltip-space";
    }
    
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.RadioWidgetModeSpaceCreate, SHINKEN.OBJECT.RadioMode );
SHINKEN.OBJECT.RadioWidgetModeSpaceDelete           = function ( name ) {
    this.initSpecific( name );
};
SHINKEN.OBJECT.RadioWidgetModeSpaceDelete.prototype = {
    initSpecific: function ( name, label ) {
        this.init( name );
        this.setLabel( _( "form.radio_widget_mode.label." + name ) );
    },
    
    
    getIconSrc          : function () {
        return "/static/" + __SHINKEN_HTTP_START_TIME__ + "/service_weather/img/form/weather_visual_edit_delete_space.png";
    },
    getShortCutLetter   : function () {
        return "S";
    },
    getTooltipPosition  : function () {
        return SHINKEN_TOOLTIP.PLACEMENT.TOP_LEFT;
    },
    getHelpContents     : function () {
        return [
            {
                type_content: "label_&_content",
                elements    : [
                    { className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.delete_space" ) },
                    { className: "shinken-tooltip-help-label", content: _( "edit_mode.windows.tooltips.labels_help.maintain" ) },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.click" ) },
                    { className: "shinken-tooltip-help-label", content: "+" },
                    { className: "shinken-tooltip-help-button", content: _( "edit_mode.windows.tooltips.labels_help.move" ) }
                ]
            },
            {
                type_content: "unordered_title",
                label       : _( "edit_mode.windows.tooltips.labels_help.direction_widget_movement" )
            }, {
                
                type_content: "image_&_content",
                elements    : [
                    { className: "shinken-help-img shinken-delete-space" },
                    { className: "shinken-tooltip-help-label shinken-multi-line", content: _( "edit_mode.windows.tooltips.labels_help.to_the_top" ) }
                ]
            }
        
        ];
    },
    getHelpSpecificClass: function ( content ) {
        return "shinken-tooltip-space";
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.RadioWidgetModeSpaceDelete, SHINKEN.OBJECT.RadioMode );
SHINKEN.OBJECT.GridPageEdit           = function ( uuid ) {
    this.__class_name__ = "SHINKEN.OBJECT.GridPageEdit";
    this.init( uuid );
};
SHINKEN.OBJECT.GridPageEdit.prototype = {
    init                  : function ( uuid ) {
        this.initCommon( uuid );
        this.initEditMode();
    },
    initEditMode          : function () {
        this.timeout_before_show_tooltip_preview_button = null;
        this.window_group_edition                       = null;
        this.button_back_to_previous_preview            = null;
        this.synchronized_phase_with_widget_mode        = new SHINKEN.OBJECT.Phase();
        this.grid_page_history_view                     = this.getViewHistoryInstance();
        this.slide_panel_edition                        = new SHINKEN.OBJECT.GridPageEditionSlidePanel();
        this.slide_panel_problems                       = new SHINKEN.OBJECT.SlidePanelProblem();
        this.window_group_edition                       = new SHINKEN.OBJECT.GridPageWindowGroupEditPart();
        this.user_pref                                  = new SHINKEN.UserPrefs_V3();
        this.initCounterCommon();
        this.initLastModifications();
        this.initButtonExternalLink();
    },
    getViewHistoryInstance: function () {
        throw new TypeError( "getViewHistoryInstance in SHINKEN.OBJECT.GridPageEdit have to be override" );
    },
    initCounterCommon     : function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WIDGET_TOTAL );
    },
    initPhaseEditing      : function () {
        if ( !this.window_group_edition.getDomElement() ) {
            let window_container = document.querySelector( ".shinken-container-visual-or-json" );
            this.window_group_edition.setPhaseDomElement( this.dom_element, "tabEditionName" );
            this.window_group_edition.computeHtml();
            DOM.Service.addElementTo( this.window_group_edition.getDomElement(), window_container );
            this.window_group_edition.computeHtmlTargets( window_container );
            this.window_group_edition.computeHtmlSpecific( window_container );
        }
    },
    initButtonExternalLink: function () {
    },
    clickOnButton              : function ( event, event_name, param ) {
        this.clickOnButtonCommon( event, event_name, param );
    },
    clickOnButtonCommon        : function ( event, event_name, param ) {
        switch ( event_name ) {
            case "toggle-display-of-widgets-with-issues":
                this.dom_element.classList.contains( "shinken-hide-widgets-with-issues" ) ? this.doActionAfter( "show-widgets-with-issues" ) : this.doActionAfter( "hide-widgets-with-issues" );
                break;
            case "enter_in_edit_mode":
                this.setPhase( SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_EDITING );
                break;
            case "enter_in_save_mode":
                this.setPhase( SHINKEN.OBJECT.CONST.PHASE.SAVING );
                break;
            case "publish_view":
                this.setPhase( SHINKEN.OBJECT.CONST.PHASE.PUBLISHING );
                break;
            case "cancel_edit_mode_grid_page":
                this.setPhase( SHINKEN.OBJECT.CONST.PHASE.ASK_FOR_CANCEL );
                break;
            case "preview_grid_page":
                this.setPhase( SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_PREVIEWING );
                break;
        }
    },
    askOnKeyUpJson             : function ( event ) {
        if ( this.timeout_onkeyup ) {
            clearTimeout( this.timeout_onkeyup );
        }
        this.timeout_onkeyup = setTimeout( () => {
            this.onKeyUpJson( event );
            this.timeout_onkeyup = null;
        }, 200 );
    },
    onKeyUpJson                : function ( event, key_code ) {
        if ( event.target.id !== "id-shinken-output-json" ) {
            return;
        }
        key_code = key_code || event.keyCode;
        switch ( key_code ) {
            case SHINKEN.CONST.KEY_CODE.SHIFT:
            case SHINKEN.CONST.KEY_CODE.CTRL:
            case SHINKEN.CONST.KEY_CODE.ALT:
            case SHINKEN.CONST.KEY_CODE.PAUSE:
            case SHINKEN.CONST.KEY_CODE.CAPS_LOCK:
            case SHINKEN.CONST.KEY_CODE.ESCAPE:
            case SHINKEN.CONST.KEY_CODE.PAGE_UP:
            case SHINKEN.CONST.KEY_CODE.PAGE_DOWN:
            case SHINKEN.CONST.KEY_CODE.END:
            case SHINKEN.CONST.KEY_CODE.HOME:
            case SHINKEN.CONST.KEY_CODE.LEFT:
            case SHINKEN.CONST.KEY_CODE.RIGHT:
            case SHINKEN.CONST.KEY_CODE.UP:
            case SHINKEN.CONST.KEY_CODE.DOWN:
            case SHINKEN.CONST.KEY_CODE.F1:
                return;
            default:
                break;
        }
        this.setEditionJsonManually( true );
        if ( !this.json_form.isValid() ) {
            this.closeSavingPopUp();
            this.computeJsonForm();
        }
        else {
            SHINKEN_TOOLTIP.hideTooltip();
            this.json_form.askComputeLineNumber( 200 );
            this.json_editor.cleanHtmlAfterEdition();
        }
        if ( this.timeout_before_show_tooltip_preview_button ) {
            return;
        }
        setTimeout( () => {
            this.timeout_before_show_tooltip_preview_button = setTimeout( () => {
                this.timeout_before_show_tooltip_preview_button = null;
            }, 10000 );
            SHINKEN_TOOLTIP.showTooltip( document.querySelector( ".shinken-button[data-name='preview_grid_page']" ) );
        }, 500 );
    },
    onPasteAfterAction         : function ( text_pasted ) {
        this.setEditionJsonManually( true );
        setTimeout( function () {
            SHINKEN_TOOLTIP.showTooltip( document.querySelector( ".shinken-button[data-name='preview_grid_page']" ) );
        }, 200 );
    },
    copyJsonCallbackJSONInvalid: function ( status, dom_button ) {
        const _text  = status ? _( "copy_service.copySuccess", [DICTIONARY_COMMON_UI] ) : _( "copy_service.copyFail", [DICTIONARY_COMMON_UI] );
        const _state = status ? SHINKEN.OBJECT.NOTIFICATION.CONST.STATUS.COPY_SUCCESS : SHINKEN.OBJECT.NOTIFICATION.CONST.STATUS.COPY_FAILED;
        SHINKEN.TOOLS.NOTIFICATION.addNotification( _text, _state, dom_button, SHINKEN.OBJECT.NOTIFICATION.CONST.PLACEMENT.SPECIFIC_COPY_GRID_PAGE_JSON, 2000 );
    },
    doActionAfter              : function ( event_name, params ) {
        this.doActionAfterCommon( event_name, params );
    },
    doActionAfterCommon        : function ( event_name, params ) {
        switch ( event_name ) {
            case "default__param__configured__from_form":
            case "value__param__configured__from_form":
            case "change__shinken_element__from_form":
                if ( params[ SHINKEN.OBJECT.FORMSET.PARAM.IS_VALID ] ) {
                    params[ CONTROLLER.CONST.PARAM_EVENT.CONTROLLER_OBJECT ] = this.getController();
                    if ( WEATHER.CONST.isExternalLinkComposedKey( params[ PROPERTY.COMMON.PARAM.PROPERTY_LIST__COMPOSED_KEY ][ 0 ] ) ) { //TODO A CHANGER... ->
                        this.external_links.doActionAfter( event_name, params );
                    }
                    else {
                        this.content.doActionAfter( event_name, params );
                    }
                }
                this.doActionAfter( "add_last_modification", params );
                break;
            case "change_radio_mode_done":
                this.doActionAfter( "show-widgets-with-issues" );
                this.content.doActionAfter( "reset_action_in_progress" );
                break;
            case "back_to_previous_preview":
                this.json_editor = null;
                this.closeSavingPopUp();
                this.getController().askShowLoadingPage();
                this.updateObject( this._preview_historics.getLastValid().getData(), true );
                this.setPhase( SHINKEN.OBJECT.CONST.PHASE.ASKING_SHOW_FORM );
                this.doActionAfter( "previous_button_status_change" );
                break;
            case "slide_panel__size__has_changed":
                params [ SHINKEN_PAGE.CONST.EVENTS.PARAM.PAGE_OBJECT ] = this;
                this.slide_panel_edition.doActionAfter( event_name, params );
                this.window_group_edition.doActionAfter( event_name, params );
                this.slide_panel_problems.doActionAfter( event_name, params );
                this.doActionAfterInForm( event_name, params );
                if ( params[ SHINKEN.OBJECT.SLIDE_PANEL.PARAM.DRAG_N_DROP ] ) {
                    this.askComputeSizes( params );
                    return;
                }
                this.computeSizes( params );
                break;
            case "slide-panel-restore-structure-done":
                this.computeSizes( params );
                break;
            case "grid_cell_has_been_deleted":
            case "clean_widget_with_problem":
                this.slide_panel_problems.doActionAfter( "clean_widget_with_problem", params );
                break;
            case "update_style_dom_element__without_buttons__done":
            case "add_object__with_problems__from_user_action":
            case "add_object_with_problems__to__window_problem":
            case "before__update_object__grid_page":
                this.slide_panel_problems.doActionAfter( event_name, params );
                break;
            case "click_on_selector_V3":
            case "click_on_item_selector_V3":
            case "click_on_button_V3":
                if ( params[ SHINKEN.OBJECT.SLIDE_PANEL.PARAM.NAME ] ) {
                    params [ SHINKEN_PAGE.CONST.EVENTS.PARAM.PAGE_OBJECT ] = this;
                    switch ( params[ SHINKEN.OBJECT.SLIDE_PANEL.PARAM.NAME ] ) {
                        case SHINKEN_PAGE.CONST.SLIDE_PANEL.PROBLEMS.NAME:
                            this.slide_panel_problems.doActionAfter( event_name, params );
                            break;
                        case SHINKEN_PAGE.CONST.SLIDE_PANEL.EDITION.NAME:
                            this.slide_panel_edition.doActionAfter( event_name, params );
                            break;
                    }
                }
                switch ( params[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case "copy_to_clipboard":
                        if ( params[ SHINKEN.OBJECT.JSON_EDITOR.PARAM.JSON_OBJECT ] ) {
                            this.computeJsonForm();
                            this.json_form.doActionAfter( event_name, params );
                        }
                        if ( params[ SHINKEN.OBJECT.VIEW_HISTORY.PARAM.NAME ] === this.grid_page_history_view.getName() ) {
                            return this.grid_page_history_view.doActionAfter( event_name, params );
                        }
                        break;
                    case "enter_in_edit_mode":
                        this.setPhase( SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_EDITING );
                        break;
                    case "external_links_weather":
                        if ( this.isPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING ) ) {
                            console.log( this );
                            this.external_links_form = new SHINKEN.OBJECT.WeatherExternalLinksForm( params );
                            this.external_links_form.computeHtml();
                            DOM.Service.addElementToAfterEmpty( this.external_links_form.getDomElement(), document.querySelector( ".shinken-weather-form-container .shinken-extra-form-specific" ) );
                            CONTROLLER.Form.setCurrentForm( this.external_links_form );
                        }
                        else {
                            this[ WEATHER.CONST.EXTERNAL_LINKS._KEY ].doActionAfter( event_name, params );
                        }
                        break;
                    default:
                        if ( params[ WINDOW_V2.CONST.PARAM.WINDOW_GROUP_NAME ] ) {
                            const _parent_window = MANAGER.__instance_window_distributor.findParentWindow( params[ WINDOW_V2.CONST.PARAM.WINDOW_GROUP_NAME ] );
                            return _parent_window.doActionAfter( event_name, params );
                        }
                        if ( params[ SHINKEN.OBJECT.VIEW_HISTORY.PARAM.NAME ] === this.grid_page_history_view.getName() ) {
                            return this.grid_page_history_view.doActionAfter( event_name, params );
                        }
                        if ( params[ SHINKEN.OBJECT.JSON_EDITOR.PARAM.JSON_OBJECT ] ) {
                            return this.doActionAfter( params[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ], params );
                        }
                        this.content.doActionAfter( event_name, params );
                        break;
                }
                break;
            case "on_click_2024_07_31":
                this.doActionAfterInForm( event_name, params );
                switch ( this.synchronized_phase_with_widget_mode.current_phase ) {
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_CREATE:
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_DELETE:
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.SELECT_WIDGET.SELECT_BY_ZONE:
                        this.doActionAfter( "mouse_up", params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ] );
                        break;
                }
                break;
            case "click_on_button":
                switch ( params[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case "preview_grid_page":
                        this.setPhase( SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_PREVIEWING );
                        break;
                }
                break;
            case "on_key_down":
                if ( !this.isPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING ) ) {
                    return;
                }
                this.doActionAfterInForm( event_name, params );
                break;
            case "on_key_up":
                params[ CONTROLLER.CONST.PARAM_EVENT.CONTROLLER_OBJECT ]             = this.getController();
                params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.WIDGET_MODE__PHASE__OBJECT ] = this.synchronized_phase_with_widget_mode;
                this.doActionAfter_keyUp( event_name, params );
                break;
            case "confirm_add_new_widget_done":
                this.form__visual_mode.doActionAfter( "change_radio_mode", {
                    [ SHINKEN.OBJECT.RADIOMODE.PARAM.PARENT_OBJECT ]: SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES._KEY,
                    [ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ]         : SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_SELECT
                } );
                this.doActionAfter( "window_problem__update__grid_cell__after__manual_action", params );
                break;
            case "on_drag_move":
                switch ( params[ MANAGER.DragNDropManager.EVENT_PARAM.ELEMENT_NAME ] ) {
                    case SHINKEN_PAGE.CONST.SLIDE_PANEL.EDITION.NAME:
                        this.slide_panel_edition.doActionAfter( event_name, params );
                        break;
                    case SHINKEN_PAGE.CONST.SLIDE_PANEL.PROBLEMS.NAME:
                        this.slide_panel_problems.doActionAfter( event_name, params );
                        break;
                }
                break;
            case "on_drag_stop":
                switch ( params[ MANAGER.DragNDropManager.EVENT_PARAM.ELEMENT_NAME ] ) {
                    case SHINKEN_PAGE.CONST.SLIDE_PANEL.EDITION.NAME:
                        this.slide_panel_edition.doActionAfter( event_name );
                        this.computeSizes();
                        break;
                    case SHINKEN_PAGE.CONST.SLIDE_PANEL.PROBLEMS.NAME:
                        this.slide_panel_problems.doActionAfter( event_name );
                        this.slide_panel_problems.computeSizes__20240926();
                        break;
                    default:
                        break;
                }
                this.saveUserPrefs();
                break;
            case "click_on_selector":
            case "click_on_item_selector":
                this.doActionAfterInForm( event_name, params );
                break;
            case "click-on-window-group-problem":
            case "click-on-window-group-problem-go-previous":
            case "click-on-window-group-problem-go-next":
            case "click-on-window-group-problem-focus-current":
                if ( !this.isPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING ) ) {
                    params[ "phase_not_ready__20240816" ] = true;
                    this.addDoActionAfterCallBackPhaseIs( SHINKEN.OBJECT.CONST.PHASE.EDITING, event_name, params );
                    return;
                }
                break;
            case "focus-on-anchor-json":
                if ( this.json_form ) { // USEFUL to avoid traceback when click on cogwheel with a lot of widgets
                    this.json_form.doActionAfter( event_name, params );
                }
                break;
            case "focus-on-json-forced":
                if ( !this.window_group_edition.isPhase( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON ) ) {
                    this.window_group_edition.setActiveWindow( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON );
                    this.doActionAfter( "click_on__window_navigation__done", {
                        [ WINDOW_V2.CONST.PARAM.WINDOW_GROUP_NAME ]: this.window_group_edition.getName(), [ WINDOW_V2.CONST.PARAM.WINDOW_NAME ]: SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON
                    } );
                    setTimeout( () => {
                        this.doActionAfter( "focus-on-anchor-json", params );
                    }, 0 );
                    return;
                }
                this.doActionAfter( "focus-on-anchor-json", params );
                break;
            case "focus-on-json-if-existing":
                if ( !this.window_group_edition.isPhase( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON ) ) {
                    return;
                }
                this.doActionAfter( "focus-on-anchor-json", params );
                break;
            case "undo_last_modification":
            case "redo_last_modification":
                params[ CONTROLLER.CONST.PARAM_EVENT.CONTROLLER_OBJECT ]             = this.getController();
                params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] = this.window_group_edition.isPhase( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON );
                for ( let i = 0, _size_i = params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].getSize(); i < _size_i; i++ ) {
                    params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ] = params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].getContent( i );
                    if ( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( SHINKEN_PAGE.CONST.EVENTS.PARAM.PAGE_CONTENT_UUID ) ) {
                        this.content.doActionAfter( event_name, params );
                    }
                    else if ( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( WEATHER.CONST.EXTERNAL_LINKS.EVENTS_PARAM.EXTERNAL_LINKS ) ) {
                        this.external_links.doActionAfter( event_name, params );
                    }
                    else if ( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( SHINKEN.OBJECT.FORMSET.PARAM.FORM_NAME ) ) {
                        this.doActionAfterInForm( event_name, params );
                    }
                }
                this.doActionAfterInForm( "compute_form_after_undo_or_redo_last_modification", params );
                this.grid_page_history_view.doActionAfter( event_name, params );
                if ( !this.window_group_edition.isPhase( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON ) ) {
                    this.json_editor = null; // USEFUL to force recompute of JSON
                }
                break;
            case "show-widgets-with-issues":
                this.dom_element.classList.remove( "shinken-hide-widgets-with-issues" );
                if ( this.display_of_widgets_button ) {
                    this.display_of_widgets_button.setState( COMPONENT.CONST.BTN_STATE.OFF );
                }
                break;
            case "hide-widgets-with-issues":
                this.dom_element.classList.add( "shinken-hide-widgets-with-issues" );
                if ( this.display_of_widgets_button ) {
                    this.display_of_widgets_button.setState( COMPONENT.CONST.BTN_STATE.ON );
                }
                break;
            case "previous_button_status_change":
                this.button_back_to_previous_preview = this.button_back_to_previous_preview || new COMPONENT.Button( this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.ACTION_BAR.BACK_TO_PREVIOUS_PREVIEW ).parentNode );
                const _state                         = this._preview_historics.hasValidPreview() ? COMPONENT.CONST.BTN_STATE.ON : COMPONENT.CONST.BTN_STATE.DISABLED;
                this.button_back_to_previous_preview.setState( _state );
                DOM.Service.addOrRemoveClasses( DOM.BodyService.getDomElement(), _state === COMPONENT.CONST.BTN_STATE.ON, "shinken-previewing-is-on" );
                break;
            case "show-tooltip-on-grid-cell":
                if ( this.isPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING ) ) {
                    SHINKEN_TOOLTIP.showTooltip( params );
                }
                break;
            case "history_backend_loaded_done":
                this.grid_page_history_view.computeHtml();
                DOM.Service.addElementToAfterEmpty( this.grid_page_history_view.getDomElement(), this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.HISTORY_CONTAINER_VIEW ) );
                break;
            case "click_on__window_navigation__done":
                if ( params[ WINDOW_V2.CONST.PARAM.WINDOW_GROUP_NAME ] === this.window_group_edition.getName() ) {
                    switch ( params[ WINDOW_V2.CONST.PARAM.WINDOW_NAME ] ) {
                        case SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.VISUAL:
                            if ( !this.form__visual_mode ) {
                                this.form__visual_mode = this.getVisualFormInstance(); //  new SHINKEN.OBJECT.GridPageVisualForm ( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.VISUAL );
                                this.form__visual_mode.computeHtml();
                                this.window_group_edition.setContentDomElementTarget( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.VISUAL, this.form__visual_mode.getDomElement() );
                                this.form__visual_mode.doActionAfter( "action_for_page_edit_when_object_is_compute", { [ SHINKEN_PAGE.CONST.EVENTS.PARAM.PAGE_OBJECT ]: this } );
                            }
                            this.form__visual_mode.doActionAfter( "compute_linked_objects" );
                            CONTROLLER.Form.setCurrentForm( this.form__visual_mode );
                            break;
                        case SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.HISTORY:
                            if ( this.grid_page_history_view.getCurrentPhase() === SHINKEN.OBJECT.CONST.PHASE.INIT ) {
                                this.grid_page_history_view.initSpecific( this, this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.HISTORY_CONTAINER_VIEW ) );
                            }
                            CONTROLLER.Form.setCurrentForm( this.form__visual_mode );
                            break;
                        case SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON:
                            this.computeJsonEditor();
                            this.content.doActionAfter( "unselect_all_other_shinken_grid_cell" );
                            CONTROLLER.Form.setCurrentForm( this.form__visual_mode );
                            break;
                        case SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.DEFAULT:
                            if ( !this.form__default_values ) {
                                this.form__default_values = this.getDefaultFormInstance();
                                this.form__default_values.computeHtml();
                                this.window_group_edition.setContentDomElementTarget( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.DEFAULT, this.form__default_values.getDomElement() );
                            }
                            else {
                                this.form__default_values.doActionAfter( "make_compute_after_0ms" );
                            }
                            CONTROLLER.Form.setCurrentForm( this.form__default_values );
                            this.form__default_values.doActionAfter( "make_validation" );
                            break;
                    }
                }
                break;
            case "navigate_on_window_edition_group":
                if ( this.json_form && this.json_form.message_invalid ) {
                    this.setPhase( SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_PREVIEWING );
                    return;
                }
                if ( this.is_json_modified_manually ) {
                    this.setPhase( SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_PREVIEWING );
                    this.addDoActionAfterCallBackPhaseIs( SHINKEN.OBJECT.CONST.PHASE.EDITING, "navigate_on_window_edition_group", params );
                    return;
                }
                MANAGER.EventManagerV2.clickOnWindowNavigation( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ], params );
                break;
            case "add_last_modification":
                params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.PARENT_OBJECT ] = this;
                if ( this.last_modifications.doActionAfter( event_name, params ) ) {
                    this.grid_page_history_view.doActionAfter( event_name, params );
                }
                break;
            case "update_focus_from_json_action_and_key_up":
                this.doActionAfter( "update_focus_from_json_action", params );
                this.doActionAfter( "on_key_up", params );
                break;
            case "update_focus_from_json_action":
                let dom_parent_element = DOM.Service.findParentElementWithDataSet( this.json_editor.getCurrentElementOfJsonEditor(), 'jsonUuidPart', 50 );
                if ( dom_parent_element && dom_parent_element.getAttribute( 'data-json-uuid-part' ) ) {
                    this.content.doActionAfter( event_name, { [ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ]: dom_parent_element.getAttribute( 'data-json-uuid-part' ) } );
                }
                break;
            case "window_problem__update__grid_cell__after__manual_action":
                if ( params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_OBJECT ].hasCounterProblems() ) {
                    this.doActionAfter( "add_object__with_problems__from_user_action", params );
                }
                else {
                    this.doActionAfter( "clean_widget_with_problem", params );
                }
                break;
            case "change_grid_size_in_json":
                if ( this.window_group_edition.isPhase( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON ) ) {
                    const default_nb_tiles_in_height = this.getDefaultValueOfGrids()[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_Y ].getCfgValue();
                    this.json_editor.changeGridHeightValue( SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_Y, params.new_grid_height_value, default_nb_tiles_in_height );
                }
                break;
            case "show_form_for_widget_configuration":
                params[ SHINKEN.ELEMENT.USER.PARAM.PREFS.NAME ] = this.user_pref;
                if ( this.form__widget_conf && this.form__widget_conf.isWidgetInForm( params[ SHINKEN_GRID.CONST.PARAM.EVENT.FOCUSED_WIDGET ] ) ) {
                    return;
                }
                this.form__widget_conf = SHINKEN.WidgetFormFactory( params );
                break;
            case "close_form__for__widget_configuration__done":
                this.form__widget_conf = null;
                CONTROLLER.Form.setCurrentForm( this.window_group_edition.isPhase( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.DEFAULT ) ? this.form__default_values : this.form__visual_mode );
                this.slide_panel_edition.computeSizes__20240926( true );
                this.slide_panel_problems.computeSizes__20240926( true );
                break;
            case "ask_close_form__if_needed":
                this.doActionAfterInForm( event_name, params );
                break;
            case "mouse_down_on_grid_cell":
            case "mouse_up_on_grid_cell":
            case "mouse_down":
            case "mouse_move":
            case "mouse_up":
            case "mouse_wheel":
            case "mouse_leave":
                this.doActionAfter_mouse( event_name, params );
                break;
            case "set__user_pref__data":
                this.user_pref.addPref( params[ SHINKEN.USER_PREFS.PARAM_EVENT.DATA ] );
                break;
            default:
                params                                                               = params || {};
                params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] = this.window_group_edition.isPhase( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON );
                this.content.doActionAfter( event_name, params );
                break;
        }
        this.doActionAfterSpecific( event_name, params );
    },
    doActionAfterSpecific      : function ( event_name, param ) { // TO OVERRIDE
    },
    doActionAfter_keyUp        : function ( event_name, param ) {
        if ( !this.isPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING ) ) {
            return;
        }
        if ( DOM.Service.isActiveElementEditable() ) {
            if ( document.activeElement.id === "id-shinken-output-json" ) {
                this.askOnKeyUpJson( param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ] );
            }
            return;
        }
        
        let current_key_code                  = param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].keyCode;
        param[ SHINKEN.CONST.PARAM.KEY_CODE ] = current_key_code;
        if ( this.content.doActionAfter( "is_an_action_overlay_frame_in_progress_in" ) ) {//you can't use keyboard shortcut if something is ongoing on the grid
            switch ( current_key_code ) {
                case SHINKEN.CONST.KEY_CODE.ESCAPE:
                    this.content.doActionAfter( event_name, param );
                    break;
            }
            return;
        }
        switch ( current_key_code ) {
            case SHINKEN.CONST.KEY_CODE.Z:
            case SHINKEN.CONST.KEY_CODE.Y:
                if ( !param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].ctrlKey ) {
                    return;
                }
                param[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.PARENT_OBJECT ] = this;
                return this.last_modifications.doActionAfter( event_name, param );
            case SHINKEN.CONST.KEY_CODE.SUPPR:
                this.doActionAfter( "show-widgets-with-issues" );
                this.content.doActionAfter( event_name, param );
                break;
            case SHINKEN.CONST.KEY_CODE.ENTER:
                param[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] = this.window_group_edition.isPhase( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON );
                this.content.doActionAfter( event_name, param );
                break;
            case SHINKEN.CONST.KEY_CODE.ESCAPE:
                if ( SHINKEN.OBJECT.ConfirmationPopup_V3.getInstance().isVisible() ) {
                    SHINKEN.OBJECT.ConfirmationPopup_V3.getInstance().hide();
                    SHINKEN.OBJECT.ConfirmationPopup_V3.getInstance().init();
                    return;
                }
                this.content.doActionAfter( event_name, param );
                this.doActionAfterInForm( event_name, param );
                return;
            case SHINKEN.CONST.KEY_CODE.A:
                if ( !SHINKEN.OBJECT.ConfirmationPopup_V3.getInstance().isVisible() ) {
                    this.doActionAfter( "reset_grid_cell_to_add" );
                    this.doActionAfterInForm( event_name, param );
                }
                break;
            case SHINKEN.CONST.KEY_CODE.V:
            case SHINKEN.CONST.KEY_CODE.C:
            case SHINKEN.CONST.KEY_CODE.S:
                this.doActionAfterInForm( event_name, param );
                break;
        }
    },
    doActionAfter_mouse        : function ( event_name, params ) {
        if ( !this.isPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING ) ) {
            return;
        }
        switch ( event_name ) {
            case "mouse_down":
            case "mouse_down_on_grid_cell":
                this.doActionAfter( "show-widgets-with-issues" );
                this.doActionAfter( "ask_close_form__if_needed", params );
                if ( this.is_json_modified_manually ) {
                    this.setPhase( SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_PREVIEWING );
                    return;
                }
                break;
        }
        if ( params ) {
            params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.WIDGET_MODE__PHASE__OBJECT ] = this.synchronized_phase_with_widget_mode;
            params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.ACTIVE_WINDOW_NAME_IS_JSON ] = this.window_group_edition.isPhase( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON );
        }
        switch ( event_name ) {
            case "mouse_up":
            case "mouse_down":
                this.content.doActionAfter( event_name, params );
                break;
            case "mouse_down_on_grid_cell":
                switch ( this.synchronized_phase_with_widget_mode.current_phase ) {
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_SELECT:
                        this.content.doActionAfter( event_name, params );
                        this.doActionAfter( "focus-on-json-if-existing", params );
                        break;
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_CREATE:
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_DELETE:
                        this.content.doActionAfter( event_name, params );
                        break;
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_ADD:
                        return;
                }
                break;
            case "mouse_move":
                switch ( this.synchronized_phase_with_widget_mode.current_phase ) {
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_SELECT:
                        this.content.doActionAfter( event_name, params );
                        switch ( this.window_group_edition.getCurrentPhase() ) {
                            case SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON:
                            case SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.HISTORY:
                                this.content.doActionAfter( "update_grid__highlighted_tile", params );
                                break;
                        }
                        break;
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.SELECT_WIDGET.SELECT_BY_ZONE:
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_CREATE:
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_DELETE:
                        this.content.doActionAfter( event_name, params );
                        break;
                    case SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_ADD:
                        this.content.doActionAfter( event_name, params );
                        params[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] = this.form__visual_mode.getPropertyByName( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.ADD_WIDGET.RADIOS._KEY ).getCurrentPhase();
                        this.content.doActionAfter( "mouse_move_on_grid_with_add_widget", params );
                        break;
                    default:
                        break;
                }
                break;
            case "mouse_up_on_grid_cell":
            case "mouse_wheel":
            case "mouse_leave":
                this.content.doActionAfter( event_name, params );
                break;
        }
    },
    doActionAfterInForm        : function ( event_name, params ) {
        if ( this.form__visual_mode ) {
            this.form__visual_mode.doActionAfter( event_name, params );
        }
        if ( this.form__default_values ) {
            this.form__default_values.doActionAfter( event_name, params );
        }
        if ( this.form__widget_conf ) {
            this.form__widget_conf.doActionAfter( event_name, params );
        }
    },
    setEditionJsonManually     : function ( to_set ) {
        this.is_json_modified_manually = to_set;
        this.content.doActionAfter( "set_edition_json_manually", { "is_json_modified_manually": this.is_json_modified_manually } );
    },
    computeJsonEditor          : function () {
        if ( !this.json_editor || !this.isSameViewData( this._preview_historics.getOriginal().getData() ) ) {
            this.json_editor = this.getJsonEditorInstance( this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.FORM_VALUE ), this.getDataForJson(), SHINKEN_PAGE.CONST.DEFAULT_VALUE );
            this.json_editor.dom_element.addEventListener( "scroll", () => {
                const _container           = document.querySelector( ".shinken-textarea-line-nums" );
                _container.style.transform = "translateY(-" + this.json_editor.dom_element.scrollTop + "px)";
            } );
            document.querySelector( ".shinken-json-div" ).appendChild( CLIPBOARD_SERVICE.buildHtmlButtons_V3( true, false, { [ SHINKEN.OBJECT.JSON_EDITOR.PARAM.JSON_OBJECT ]: true } ) );
            this.json_form = new SHINKEN.OBJECT.JsonForm( this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.FORM_VALUE ) );
            this.json_editor.updateHtml();
            this.json_form.askComputeLineNumber();
        }
    },
    getController              : function () { // TO OVERRIDE
        throw new Error( "getController in page-edit.js have to be override" );
    },
    getBackendDataUrl__20241008: function ( need_user_value ) { // TO OVERRIDE
        throw new Error( "getBackendDataUrl in page-edit.js have to be override" );
    },
    saveJsHistory              : function ( data ) {
        const _current = this.getCurrentPhase();
        switch ( _current ) {
            case SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_EDITING:
                this._preview_historics = new SHINKEN.OBJECT.DataHistoric();
                this._preview_historics.setOriginal( data );
                this._visual_edition_historics = new SHINKEN.OBJECT.DataHistoric();
                this._visual_edition_historics.setOriginal( this.content.grids );
                break;
            case SHINKEN.OBJECT.CONST.PHASE.SAVING:
            case SHINKEN.OBJECT.CONST.PHASE.PUBLISHING:
            case SHINKEN.OBJECT.CONST.PHASE.RUNNING:
            case SHINKEN.OBJECT.CONST.PHASE.ASK_FOR_REFRESH:
                this._preview_historics.getOriginal().updateData( data );
                this._preview_historics.resetPreviews();
                this._visual_edition_historics.resetPreviews();
                break;
            case SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_PREVIEWING:
                this._preview_historics.addValidPreview( data );
                this._visual_edition_historics.addValidPreview( this.content.grids );
                this.doActionAfter( "previous_button_status_change" );
                break;
            case SHINKEN.OBJECT.CONST.PHASE.ASK_FOR_CANCEL:
                break;
            default:
                console.warn( "[Page - saveJsHistory]", "[NOT MANAGED]", _current, data );
                break;
        }
    },
    onTimeoutError             : function () {
        const _current = this.getCurrentPhase();
        switch ( _current ) {
            case SHINKEN.OBJECT.CONST.PHASE.RUNNING:
            case SHINKEN.OBJECT.CONST.PHASE.REFRESHING:
            case SHINKEN.OBJECT.CONST.PHASE.INIT:
            case SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_EDITING:
                this.setPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING );
                this.refresh_object.setPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING );
                if ( !this.dom_element ) {
                    this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.BACKEND_RETURN_TREATMENT, SHINKEN.OBJECT.CONST.PHASE.RUNNING_NOK, "", _( "common.broker_unreachable" ), _( "progress_bar.previewing_failed", [DICTIONARY_COMMON_UI] ) );
                }
                break;
            case SHINKEN.OBJECT.CONST.PHASE.SAVING:
            case SHINKEN.OBJECT.CONST.PHASE.PUBLISHING:
                this.grid_page_history_view.reset();
                this.setPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING );
                this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.BACKEND_RETURN_TREATMENT, SHINKEN.OBJECT.CONST.PHASE.RUNNING_NOK, "", _( "common.broker_unreachable" ), _( "edit_mode.saving_popup.saving_error" ) );
                break;
            default:
                break;
        }
    },
    getDataForPreview          : function () {
        this.saving_popup = new SHINKEN.OBJECT.Progressbar( this, SHINKEN_PAGE.CONST.STEP.END, 500, this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.SLIDE_PANEL_SAVING_POPUP_CONTAINER ) );
        this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.JS_JSON_VERIFICATION, SHINKEN.OBJECT.CONST.PHASE.RUNNING, "", "", _( "progress_bar.previewing_in_progress", [DICTIONARY_COMMON_UI] ) );
        const checkPreviewSuccess = ( _status, _data ) => {
            switch ( _data.rc ) {
                case COMMUNICATION.CODE.SUCCESS:
                    this.updateObject( _data[ "output" ] );
                    this.setPhase( SHINKEN.OBJECT.CONST.PHASE.ASKING_SHOW_FORM );
                    this.saving_popup.setTitleStep( SHINKEN_PAGE.CONST.STEP.END, _( "progress_bar.previewing_succeed", [DICTIONARY_COMMON_UI] ) );
                    this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.BACKEND_RETURN_TREATMENT, SHINKEN.OBJECT.CONST.PHASE.RUNNING_OK );
                    break;
                case COMMUNICATION.CODE.ERROR:
                    this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.BACKEND_RETURN_TREATMENT, SHINKEN.OBJECT.CONST.PHASE.RUNNING_NOK, _data[ "output" ], _( "edit_mode.saving_popup.saving_error_detail_json" ), _( "progress_bar.previewing_succeed_with_error", [DICTIONARY_COMMON_UI] ) );
                    this.updateObject( _data[ "output" ], true );
                    this._preview_historics.setInvalidPreview( _data[ "output" ] );
                    break;
                case COMMUNICATION.CODE.NOT_FOUND:
                    this.saving_popup.setTitleStep( SHINKEN_PAGE.CONST.STEP.END, _( "progress_bar.previewing_failed", [DICTIONARY_COMMON_UI] ) );
                    this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.BACKEND_RETURN_TREATMENT, SHINKEN.OBJECT.CONST.PHASE.RUNNING_NOK, "", _( "edit_mode.saving_popup.saving_error_detail_404" ), _( "progress_bar.previewing_failed", [DICTIONARY_COMMON_UI] ) );
                    break;
                case COMMUNICATION.CODE.FORBIDDEN:
                    this.getController().doActionAfter403();
                    break;
            }
        };
        let data_json_format      = this.getDataToSaveJsonFormat();
        if ( data_json_format ) {
            const url = this.getUrlPreview();
            this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.CALL_BACKEND_VERIFICATION );
            this.getController().requestPost( url, data_json_format, checkPreviewSuccess );
            this.json_editor = null;
        }
    },
    getUrlPreview              : function () {
        throw new Error( "getUrlPreview in grid-page-edit have to be override" );
    },
    computeSizes               : function ( param ) {
        this.content.computeSizes();
        if ( param && param[ SHINKEN.OBJECT.SLIDE_PANEL.PARAM.OBJECT ] ) {
            if ( param[ SHINKEN.OBJECT.SLIDE_PANEL.PARAM.OBJECT ] === SHINKEN_PAGE.CONST.SLIDE_PANEL.EDITION.NAME ) {
                this.slide_panel_problems.computeSizes__20240926();
            }
        }
        else {
            this.slide_panel_edition.computeSizes__20240926();
            this.slide_panel_problems.computeSizes__20240926();
        }
    },
    
    getDataToSaveSpecific  : function ( to_return ) {
        return to_return;
    },
    getDataToSave          : function () {
        const _to_return = this.content.getDataToSave();
        this.getDataToSaveSpecific( _to_return );
        if ( this[ SHINKEN_PAGE.CONST.PARAM.PAGE.USERS._KEY ] ) {
            _to_return[ SHINKEN_PAGE.CONST.PARAM.PAGE.USERS._KEY ] = this[ SHINKEN_PAGE.CONST.PARAM.PAGE.USERS._KEY ].getDataToSave();
        }
        _to_return[ SHINKEN_PAGE.CONST.PARAM.PAGE.NOTIFICATIONS._KEY ] = this[ SHINKEN_PAGE.CONST.PARAM.PAGE.NOTIFICATIONS._KEY ].getDataToSave();
        _to_return[ SHINKEN.OBJECT.VIEW.PARAM.VIEW_BEHAVIOUR ]         = this.view_behaviour.getDataToSave();
        return _to_return;
    },
    getDataToSaveJsonFormat: function () {
        let to_return;
        if ( this.window_group_edition.isPhase( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.JSON ) ) {
            to_return = this.json_editor.getCurrentContent();
            this.computeJsonForm();
            if ( !this.json_form.isValid() ) {
                if ( this.isPhase( SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_PREVIEWING ) ) {
                    this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.CALL_BACKEND_VERIFICATION, SHINKEN.OBJECT.CONST.PHASE.RUNNING_NOK, "", _( "edit_mode.saving_popup.saving_error_detail_json" ), _( "progress_bar.previewing_failed", [DICTIONARY_COMMON_UI] ) );
                }
                else {
                    this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.CALL_BACKEND_VERIFICATION, SHINKEN.OBJECT.CONST.PHASE.RUNNING_NOK, "", _( "edit_mode.saving_popup.saving_error_detail_json" ), _( "edit_mode.saving_popup.saving_error" ) );
                }
                return;
            }
            if ( !this.isPhase( SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_PREVIEWING ) ) { //WHY IS IT DIFFERENT ??
                to_return                                             = JSON.parse( to_return );
                to_return[ SHINKEN.OBJECT.VIEW.PARAM.VIEW_BEHAVIOUR ] = this.view_behaviour.getDataToSave();
                to_return                                             = JSON.stringify( to_return );
            }
        }
        else {
            to_return = this.getDataToSave();
            to_return = JSON.stringify( to_return );
        }
        return to_return;
    },
    askSave                : function () {
        this.saving_popup = new SHINKEN.OBJECT.Progressbar( this, SHINKEN_PAGE.CONST.STEP.END, 500, this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.SLIDE_PANEL_SAVING_POPUP_CONTAINER ) );
        if ( this.isPhase( SHINKEN.OBJECT.CONST.PHASE.PUBLISHING ) ) {
            this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.JS_JSON_VERIFICATION, SHINKEN.OBJECT.CONST.PHASE.RUNNING, "", "", _( "progress_bar.publishing_in_progress", [DICTIONARY_COMMON_UI] ) );
        }
        else {
            this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.JS_JSON_VERIFICATION, SHINKEN.OBJECT.CONST.PHASE.RUNNING, "", "", _( "progress_bar.saving_in_progress", [DICTIONARY_COMMON_UI] ) );
        }
        const saveSuccess    = ( _status, _data ) => {
            switch ( _data.rc ) {
                case COMMUNICATION.CODE.SUCCESS:
                    this.saving_popup.setParamStep( SHINKEN_PAGE.CONST.STEP.END, _data[ "output" ] );
                    this.saving_popup.setTitleStep( SHINKEN_PAGE.CONST.STEP.END, _( "progress_bar.saving_succeed", [DICTIONARY_COMMON_UI] ) );
                    this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.BACKEND_RETURN_TREATMENT, SHINKEN.OBJECT.CONST.PHASE.RUNNING_OK );
                    this.grid_page_history_view.initSpecific( this, this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.HISTORY_CONTAINER_VIEW ), true );
                    this.json_editor = null;
                    break;
                case COMMUNICATION.CODE.ERROR:
                    this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.BACKEND_RETURN_TREATMENT, SHINKEN.OBJECT.CONST.PHASE.RUNNING_NOK, _data[ "output" ], _( "edit_mode.saving_popup.saving_error_detail_json" ), _( "edit_mode.saving_popup.saving_error" ) );
                    this.json_editor = null;
                    break;
                case COMMUNICATION.CODE.NOT_FOUND:
                    this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.BACKEND_RETURN_TREATMENT, SHINKEN.OBJECT.CONST.PHASE.RUNNING_NOK, "", _( "edit_mode.saving_popup.saving_error_detail_404" ), _( "edit_mode.saving_popup.saving_error" ) );
                    break;
                case COMMUNICATION.CODE.FORBIDDEN:
                    this.getController().doActionAfter403();
                    break;
            }
            SHINKEN.COMMUNICATION_WITH_IFRAME_PARENT.doActionAfter( "save-view-done" );
        };
        let data_json_format = this.getDataToSaveJsonFormat();
        if ( data_json_format ) {
            const url = this.getUrlSave();
            this.saving_popup.doProgress( SHINKEN_PAGE.CONST.STEP.CALL_BACKEND_VERIFICATION );
            this.getController().requestPost( url, data_json_format, saveSuccess );
        }
    },
    getUrlSave             : function () { // TO OVERRIDE
        throw new Error( "getUrlSave in page-edit have to be overridden" );
    },
    
    saveUserPrefs : function () {
        const _to_save = SHINKEN.TOOLS.IFRAME_PARENT_COMMUNICATION.getUserPref( SHINKEN_PAGE.CONST.USER_PREFS.NAME );
        if ( !_to_save ) {
            return;
        }
        if ( !this.isPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING ) ) {
            if ( this.slide_panel_edition.isPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING ) ) {
                _to_save[ this.slide_panel_edition.getName() ] = this.slide_panel_edition.getCurrentRatio();
            }
            if ( this.slide_panel_problems.isPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING ) ) {
                _to_save[ this.slide_panel_problems.getName() ] = this.slide_panel_problems.getCurrentRatio();
            }
        }
        SHINKEN.TOOLS.IFRAME_PARENT_COMMUNICATION.askSaveUserPrefs( SHINKEN_PAGE.CONST.USER_PREFS.NAME, _to_save );
    },
    isSameViewData: function ( data ) {
        throw new Error( "isSameViewData in grid-page-edit.js have to be override" );
    },
    
    getPageEditDomElement       : function ( name ) {
        return this.getPageEditDomElementCommon( name );
    },
    getPageEditDomElementCommon : function ( name ) {
        if ( !this.dom_elements ) {
            this.dom_elements = [];
        }
        if ( !this.dom_elements[ name ] ) {
            switch ( name ) {
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.INFO_BAR_EXTERNAL_LINK:
                    this.dom_elements[ name ] = document.querySelector( ".shinken-info-bar-container .shinken-weather-external-links-button-cell .shinken-external-link-dropdown" );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.SHINKEN_BOX_MODE_EDITING:
                    this.dom_elements[ name ] = document.querySelector( ".shinken-box-mode-editing" );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.FORM_VALUE:
                    this.dom_elements[ name ] = document.getElementById( "id-shinken-output-json" );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.FORM_CONTAINER:
                    this.dom_elements[ name ] = document.querySelector( ".shinken-weather-form-container" );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.ACTION_BAR.BACK_TO_PREVIOUS_PREVIEW:
                    this.dom_elements[ name ] = document.querySelector( '.shinken-weather-form-container .shinken-form-action-bar-container .shinken-button[data-name="back_to_previous_preview"]' );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.LOADING_MESSAGE:
                    this.dom_elements[ name ] = document.querySelector( ".shinken-weather-form-container .shinken-weather-form-loading-message" );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.EDIT_MODE_BTN_PUBLISH_VIEW:
                    this.dom_elements[ name ] = document.querySelector( ".shinken-weather-publish-button-cell .shinken-button-container" );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.FORM_ACTION_BAR:
                    this.dom_elements[ name ] = document.querySelector( ".shinken-weather-form-container .shinken-action-bar-container" );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.SAVING_POPUP_CONTAINER:
                    this.dom_elements[ name ] = document.querySelector( ".shinken-info-bar-container .shinken-weather-edit-mode-button-cell .shinken-weather-popup-progress-bar-container" );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.SLIDE_PANEL_SAVING_POPUP_CONTAINER:
                    this.dom_elements[ name ] = document.querySelector( ".shinken-weather-edit-popup-progress-bar-container" );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.CURSOR_POSITION_LABEL:
                    this.dom_elements[ name ] = document.querySelector( ".shinken-action-bar-cursor-position-label" );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.HISTORY_CONTAINER_VIEW:
                    this.dom_elements[ name ] = document.querySelector( ".shinken-view-history-container" );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.HISTORY_VIEW_HISTORY:
                    this.dom_elements[ name ] = document.querySelector( ".shinken-view-history" );
                    break;
                case SHINKEN_PAGE.CONST.DOM_ELEMENT.CURRENT_CHANGES_CONTAINER_VIEW:
                    this.dom_elements[ name ] = document.querySelector( ".shinken-view-current-changes" );
                    break;
                default:
                    this.dom_elements[ name ] = document.querySelector( name );
                    break;
            }
        }
        return this.dom_elements[ name ];
    },
    closeSavingPopUp            : function () {
        if ( this.saving_popup ) {
            this.saving_popup.setPhase( SHINKEN.OBJECT.CONST.PHASE.HIDDEN );
        }
    },
    closeSavingPopUpAfterTimeout: function ( timeout ) {
        setTimeout( () => {
            if ( this.saving_popup ) {
                
                this.saving_popup.setPhase( SHINKEN.OBJECT.CONST.PHASE.HIDDEN );
            }
        }, timeout );
        
    },
    computeJsonForm: function () {
        if ( !this.json_form ) {
            return;
        }
        this.json_form = new SHINKEN.OBJECT.JsonForm( this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.FORM_VALUE ) );
        this.json_form.computeIsValid();
        this.json_form.askComputeLineNumber();
        if ( this.json_form.isValid() ) {
            return;
        }
        this.setPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING );
        this.slide_panel_problems.doActionAfter( "before__update_object__grid_page" );
        this.slide_panel_problems.doActionAfter( "add_object_json_fail", { [ SHINKEN.OBJECT.JSON_EDITOR.PARAM_EVENT.JSON_FORM_OBJECT ]: this.json_form } );
    },
    getTypeEdition          : function () {
        return this.window_group_edition.getActiveWindow().getName();//TODO TO REMOVE
    },
    updateData__20240926    : function ( data ) {
        this.updateObject( data[ "output" ] );
    },
    getVisualFormInstance   : function () {
        return new SHINKEN.OBJECT.GridPageVisualForm( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.VISUAL );
    },
    getJsonEditorInstance   : function ( dom_element, json, default_tag ) {
        return new SHINKEN.OBJECT.JsonEditor( dom_element, json, default_tag );
    },
    getDefaultFormInstance  : function () {
        const grid = this.content.grids.getContent( 0 ); // TODO see here how to get the grid with a better way
        let params = {
            [ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ] : grid,
            [ SHINKEN_PAGE.CONST.EVENTS.PARAM.PAGE_OBJECT ]: this,
            [ SHINKEN.USER_PREFS.PARAM_EVENT.DATA ]        : this.user_pref
        };
        return new SHINKEN.OBJECT.GridPageDefaultForm( SHINKEN_PAGE.CONST.WINDOW_EDIT_NAME.DEFAULT, params );
    },
    callbackForPhase        : function () {
        const _current            = this.getCurrentPhase();
        this.last_cursor_position = this.last_cursor_position || 0;
        switch ( _current ) {
            case SHINKEN.OBJECT.CONST.PHASE.RUNNING:
            case SHINKEN.OBJECT.CONST.PHASE.REFRESHING:
            case SHINKEN.OBJECT.CONST.PHASE.HIDDEN:
                this.refresh_object.setPhase( _current );
                break;
            default:
                this.refresh_object.setPhase( SHINKEN.OBJECT.CONST.PHASE.STOPPING );
                break;
        }
        switch ( _current ) {
            case SHINKEN.OBJECT.CONST.PHASE.RUNNING:
                SHINKEN.COMMUNICATION_WITH_IFRAME_PARENT.doActionAfter( "update_screen_phase", _current );
                this.last_modifications.doActionAfter( "reset_all__20240909" );
                this.synchronized_phase_with_widget_mode.setPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING_TO_STRING );
                this.content.setPhase( _current );
                if ( !this.isPreviousPhaseInPhase( [SHINKEN.OBJECT.CONST.PHASE.RUNNING, SHINKEN.OBJECT.CONST.PHASE.INIT] ) ) {
                    this.slide_panel_problems.close__20240925();
                    this.slide_panel_edition.close__20240925();
                }
                this.getController().doActionAfter( "current_page_set_phase_to_running" );
                const _window = MANAGER.__instance_window_distributor.getParentWindow( "grid_page_window_group_problem" );
                if ( _window ) {
                    _window.resetCounters();
                }
                break;
            case SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_EDITING:
                this.slide_panel_edition.open__20240925();
                SHINKEN.TOOLS.IFRAME_PARENT_COMMUNICATION.askEnterEditMode();
                this.slide_panel_edition.setLoading( _( "edit_mode.loading_message.get_data_in_progress" ) );
                this.getBackendData__20240926( ( _status, data ) => {
                    this.saveJsHistory( data[ "output" ] );
                    if ( !this.isSameViewData( data[ "output" ] ) ) {
                        this.getController().askShowLoadingPage();
                        this.updateData__20240926( data );
                        this.setPhaseWithTimeOut( SHINKEN.OBJECT.CONST.PHASE.ASKING_SHOW_FORM, 600 );
                    }
                    else if ( this.json_editor ) {
                        this.setPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING );
                    }
                    else {
                        this.slide_panel_edition.setLoading( _( "edit_mode.loading_message.get_data_in_progress" ) );
                        this.setPhaseWithTimeOut( SHINKEN.OBJECT.CONST.PHASE.ASKING_SHOW_FORM, 600 );
                    }
                }, true );
                break;
            case SHINKEN.OBJECT.CONST.PHASE.ASKING_SHOW_FORM:
                this.setEditionJsonManually( false );
                this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.LOADING_MESSAGE ).innerHTML = _( "edit_mode.loading_message.build_json" );
                this.slide_panel_edition.setContent__20240925( this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.FORM_CONTAINER ) );
                this.initPhaseEditing();
                this.doActionAfter( "click_on__window_navigation__done", {
                    [ WINDOW_V2.CONST.PARAM.WINDOW_GROUP_NAME ]: this.window_group_edition.getName(), [ WINDOW_V2.CONST.PARAM.WINDOW_NAME ]: this.getTypeEdition()
                } );
                this.form__visual_mode.doActionAfter( "change_radio_mode", {
                    [ SHINKEN.OBJECT.RADIOMODE.PARAM.PARENT_OBJECT ]: SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES._KEY,
                    [ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ]         : SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_SELECT
                } );
                this.setPhaseWithTimeOut( SHINKEN.OBJECT.CONST.PHASE.EDITING, 600 );
                break;
            case SHINKEN.OBJECT.CONST.PHASE.EDITING:
                SHINKEN.COMMUNICATION_WITH_IFRAME_PARENT.doActionAfter( "update_screen_phase", _current );
                DOM.Service.focusAndSetCursorPosition( this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.FORM_VALUE ), this.last_cursor_position || 0 );
                this.content.setPhase( _current );
                this.getController().askCloseLoadingPage();
                this.slide_panel_problems.setPhase( SHINKEN.OBJECT.CONST.PHASE.READY );
                break;
            case SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_PREVIEWING:
                this.slide_panel_problems.setPhase( SHINKEN.OBJECT.CONST.PHASE.REFRESHING );
                this.closeSavingPopUp();
                this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.LOADING_MESSAGE ).innerHTML = _( "edit_mode.loading_message.checking" );
                this.getController().askShowLoadingPage();
                this.last_cursor_position = this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.FORM_VALUE ).selectionStart;
                this.getDataForPreview();
                this.setEditionJsonManually( false );
                this.last_modifications.init();
                break;
            case SHINKEN.OBJECT.CONST.PHASE.SAVING:
            case SHINKEN.OBJECT.CONST.PHASE.PUBLISHING:
                this.form__default_values = null;
                this.slide_panel_problems.setPhase( SHINKEN.OBJECT.CONST.PHASE.REFRESHING );
                this.askSave();
                break;
            case SHINKEN.OBJECT.CONST.PHASE.ASK_FOR_REFRESH:
                this.refresh();
                break;
            case SHINKEN.OBJECT.CONST.PHASE.ASK_FOR_CANCEL:
                this.closeSavingPopUp();
                if ( !this.isSameViewData( this._preview_historics.getOriginal().getData() ) ) {
                    this.updateObject( this._preview_historics.getOriginal().getData() );
                }
                this.grid_page_history_view.doActionAfter( "clear_all_last_modifications", { [ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.NUMBER ]: this.last_modifications.getSize() } );
                this.setEditionJsonManually( false );
                this.json_editor          = null;
                this.form__default_values = null;
                this._preview_historics.resetPreviews();
                this._visual_edition_historics.resetPreviews();
                this.doActionAfter( "previous_button_status_change" );
                this.setPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING );
                break;
        }
        this.callbackForPhaseSpecific();
    },
    callbackForPhaseSpecific: function () {
    },
    _doActionWhenProgressStart: function ( current_step, param ) {
        switch ( current_step ) {
            case SHINKEN_PAGE.CONST.STEP.END:
                switch ( this.getCurrentPhase() ) {
                    case SHINKEN.OBJECT.CONST.PHASE.SAVING:
                    case SHINKEN.OBJECT.CONST.PHASE.PUBLISHING:
                        this.saving_popup.setDomElementParent( this.getPageEditDomElement( SHINKEN_PAGE.CONST.DOM_ELEMENT.SAVING_POPUP_CONTAINER ) );
                        this.setPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING );
                        this.updateObject( param );
                        this._preview_historics.resetPreviews();
                        this._visual_edition_historics.resetPreviews();
                        SHINKEN.TOOLS.IFRAME_PARENT_COMMUNICATION.listenSaveDone(); //TODO a géré quand l'appel est en failed
                        this.doActionAfter( "previous_button_status_change" );
                        SHINKEN.COMMUNICATION_WITH_IFRAME_PARENT.doActionAfter( "ask_for_refresh_after_save" );
                        break;
                }
                break;
            default:
                break;
        }
    },
    _doActionWhenProgressEnd  : function ( current_step, param ) {
        switch ( current_step ) {
            case SHINKEN_PAGE.CONST.STEP.BACKEND_RETURN_TREATMENT:
                switch ( this.saving_popup.getCurrentPhase() ) {
                    case SHINKEN.OBJECT.CONST.PHASE.RUNNING_NOK:
                        if ( this.getCurrentPhase() !== SHINKEN.OBJECT.CONST.PHASE.ASKING_ENTER_PREVIEWING ) {
                            this.updateObject( param, true );
                        }
                        this.setPhase( SHINKEN.OBJECT.CONST.PHASE.ASKING_SHOW_FORM );
                        break;
                }
                break;
        }
    },
    getDefaultValueOfGrids    : function () {
        if ( !this.default_valud_of_grids ) {
            this.default_valud_of_grids = this.content.doActionAfter( "get_default_values_of_grid" );
        }
        return this.default_valud_of_grids;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageEdit, SHINKEN.OBJECT.GridPage );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageEdit, SHINKEN.OBJECT.ShinkenObjectJson );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageEdit, SHINKEN.OBJECT.ProgressbarInterface );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageEdit, SHINKEN.OBJECT.CounterInterfaceValidation );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageEdit, SHINKEN.OBJECT.LastModificationsInterface );
SHINKEN_PAGE.Messages = function () {
    this.initCounterCommon();
    this.init();
};
SHINKEN_PAGE.Messages.prototype = {
    init             : SHINKEN.OBJECT.MessagesConfig.prototype.init,
    initCounterCommon: SHINKEN.OBJECT.CounterInterfaceValidation.prototype.initCounterCommon,
    getStatus        : function () {
        if ( this.hasError() ) {
            return COMPONENT.CONST.STATUS.ERROR;
        }
        if ( this.hasWarning() ) {
            return COMPONENT.CONST.STATUS.WARNING;
        }
        if ( this.hasInfo() ) {
            return COMPONENT.CONST.STATUS.INFO;
        }
        return COMPONENT.CONST.STATUS.NONE;
    },
    buildMessage     : function () {
        this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, "SHINKEN_PAGE.Messages", this.messages_error.length || "" );
        this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "SHINKEN_PAGE.Messages", this.messages_warning.length || "" );
        let _status = this.getStatus();
        if ( _status === COMPONENT.CONST.STATUS.NONE ) {
            return '';
        }
        let _to_return = '<div class="shinken-tooltip-message text-left shinken-drag-exclude">';
        if ( this.hasError() ) {
            _to_return += '<span class="shinken-error-message-title">' + _( 'messages.tag_error', [DICTIONARY_COMMON_UI] ) + '</span><br><ol class="shinken-error-message-container">';
            _to_return += this.buildMessageForList( this.messages_error, false );
            _to_return += '</ol>';
        }
        if ( this.hasWarning() ) {
            _to_return += '<span class="shinken-warning-message-title">' + _( 'messages.tag_warning', [DICTIONARY_COMMON_UI] ) + '</span><br><ol class="shinken-warning-message-container">';
            _to_return += this.buildMessageForList( this.messages_warning, false );
            _to_return += '</ol>';
        }
        if ( this.hasInfo() ) {
            _to_return += '<span class="shinken-icon-unknown-key shinkon-warning"></span>' + '<span class="shinken-unknown-key-message-title">' + _( 'messages.tag_unknown_key' ) + '</span><br><ol class="shinken-unknown-key-message-container">';
            _to_return += this.buildMessageForList( this.messages_info, false );
            _to_return += '</ol>';
        }
        
        
        if ( this.footer ) {
            _to_return += this.footer;
        }
        
        _to_return += '</div>';
        return _to_return;
    },
    buildHTML        : function () {
        let _to_return;
        if ( this.hasStatus() ) {
            _to_return = DOM.Service.createElement( "div", {}, this.buildMessage() );
        }
        else {
            _to_return = DOM.Service.createElement( "div", { class: "shinken-note" }, _( 'messages.no_message_to_display', [DICTIONARY_COMMON_UI] ) );
        }
        return _to_return;
    },
    addMessage       : function ( type_message, object_message ) {
        switch ( type_message ) {
            case COMPONENT.CONST.STATUS.ERROR:
                this.messages_error.push( new SHINKEN_PAGE.Message( type_message, object_message, this.getUUID() ) );
                break;
            case COMPONENT.CONST.STATUS.WARNING:
                this.messages_warning.push( new SHINKEN_PAGE.Message( type_message, object_message, this.getUUID() ) );
                break;
            case COMPONENT.CONST.STATUS.BEWARE:
                this.messages_beware.push( new SHINKEN_PAGE.Message( type_message, object_message, this.getUUID() ) );
                break;
            default:
                this.messages_info.push( new SHINKEN_PAGE.Message( type_message, object_message, this.uuid ) );
                break;
        }
    },
    addMessages      : function ( messages ) {
        if ( !messages ) {
            return;
        }
        let _size = messages.length;
        let _current_message;
        for ( let i = 0; i < _size; i++ ) {
            _current_message = messages[ i ];
            switch ( _current_message._type ) {
                case COMPONENT.CONST.STATUS.ERROR:
                    this.messages_error.push( _current_message );
                    break;
                case COMPONENT.CONST.STATUS.WARNING:
                    this.messages_warning.push( _current_message );
                    break;
                case COMPONENT.CONST.STATUS.BEWARE:
                    this.messages_beware.push( _current_message );
                    break;
                default:
                    this.messages_info.push( _current_message );
                    break;
            }
        }
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_PAGE.Messages, SHINKEN.OBJECT.MessagesConfig );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_PAGE.Messages, SHINKEN.OBJECT.CounterInterfaceValidation );
SHINKEN_PAGE.Message           = function ( type, object_message, uuid ) {
    this._type = type;
    if ( typeof object_message === "string" ) {
        this._text = object_message;
    }
    else {
        this._text          = object_message.text;
        this._list_keys     = object_message.list_keys;
        this.parent_uuid    = uuid || SHINKEN.TOOLS.STRING.buildUUID();
        this.impacted_index = this.parseMessageToGetIndexOfCellImpacted( object_message );
    }
};
SHINKEN_PAGE.Message.prototype = {
    _getObjectToJson                    : function ( format_data__20241115 ) {
        
        let _to_return     = {};
        _to_return.uuid    = this.parent_uuid;
        _to_return.tooltip = "";
        if ( this._list_keys !== "__SHINKEN_NONE__" ) {
            if ( this._list_keys ) {
                _to_return.list_keys = this._list_keys;
            }
            _to_return.tooltip = this._text;
            switch ( this._type ) {
                case COMPONENT.CONST.STATUS.ERROR:
                case COMPONENT.CONST.STATUS.WARNING:
                    _to_return.class = SHINKEN.OBJECT.JSON_EDITOR.CLASS_ERROR;
                    break;
            }
        }
        return _to_return;
    },
    parseMessageToGetIndexOfCellImpacted: function ( object_message ) {
        if ( !object_message ) {
            return;
        }
        const regex_find_number_between_bracket     = /\[ (\d+) ]/g;
        const arr_element_matching_regex_in_message = [];
        const matches                               = object_message.text.match( regex_find_number_between_bracket ) || [];
        for ( let i = 0; i < matches.length; i++ ) {
            arr_element_matching_regex_in_message.push( matches[ i ] );
        }
        const impacted_index = [];
        for ( let i = 0, _size_i = arr_element_matching_regex_in_message.length; i < _size_i; i++ ) {
            impacted_index.push(SHINKEN.TOOLS.NUMBER.parseStringToPositiveInteger(arr_element_matching_regex_in_message[i]));
        }
        return impacted_index;
    },
    getImpactedIndex                    : function () {
        return this.impacted_index;
    },
    buildHtml: function () {
        let _to_return = DOM.Service.createElement( "li" );
        let div        = DOM.Service.createElement( "div", { class: "shinken-layout-justify-between " + this._type } ); // flex hide the list style
        DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-text-cell" }, "<div>" + this._text + "</div>" ), div );
        if ( this._list_keys !== "__SHINKEN_NONE__" ) {
            let _td_2  = DOM.Service.addElementTo( DOM.Service.createElement( "td", { class: "shinken-json-link-cell" } ), div );
            let button = new COMPONENT.ButtonFromData_V3( 'focus-on-json-forced', "<div class='shinken-layout-column-center-h shinken-json-button'><div class='shinicon-cog'></div><div>JSON</div></div>" );
            button.addParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID, this.parent_uuid );
            button.addParamForEvents( SHINKEN.OBJECT.JSON_EDITOR.PARAM.JSON_OBJECT, true );
            button.computeHtml();
            DOM.Service.addElementTo( button.getDomElement(), _td_2 );
        }
        DOM.Service.addElementTo( div, _to_return );
        return _to_return.outerHTML;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_PAGE.Message, SHINKEN.OBJECT.MessageConfig );
SHINKEN_PAGE.InfoBar = function ( data, dom_element_parent ) {
    this.initCommon( data, dom_element_parent );
};
SHINKEN_PAGE.InfoBar.prototype = {
    initCommon: function ( data, dom_element_parent ) {
        this.init( data );
        if ( dom_element_parent ) {
            this.dom_element_parent = dom_element_parent.querySelector( ".shinken-info-bar-container" );
        }
    },
    doActionAfter      : function ( event_name, params ) {
        this.doActionAfterCommon( event_name, params );
    },
    doActionAfterCommon: function ( event_name, params ) {
    },
    _getValidOwnProperty: function () {
        return new SHINKEN_VALIDATION.Parameters( [
            [SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.BACKGROUND_COLOR, SHINKEN_VALIDATION.CONST.COLOR.CSS._KEY],
            [SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.LOGO_DISPLAYED, SHINKEN_VALIDATION.CONST.BOOLEAN._KEY],
            [SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.POSITION, SHINKEN_VALIDATION.CONST.LIST.INCLUDE_IN, ['top', 'bottom', SHINKEN_PAGE.CONST.DEFAULT_VALUE]]
        ] );
    },
    _getValidOwnChildren: function () {
        return new SHINKEN.OBJECT.DefaultConfigurationChildren( [
            [SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.REFRESH, "SHINKEN_PAGE.InfoBarRefresh"]
        ] );
    },
    getPosition         : function () {
        if ( !this.getChild( SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.REFRESH ).getValue( SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.GENERATION_TIME_DISPLAYED ) &&
             !this.getValue( SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.LOGO_DISPLAYED ) &&
             !this.getChild( SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.REFRESH ).getValue( SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.CHRONO_DISPLAYED ) ) {
            return "shinken-hidden";
        }
        if ( this.getValue( SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.POSITION ) === SHINKEN_PAGE.CONST.INFO_BAR.VALUES.POSITION_BOTTOM ) {
            return "bottom";
        }
        else {
            return "top";
        }
    },
    computeHtml               : function ( refresh_object ) {
        this.initDomElement__20250213();
        this.computeHtml__logo();
        this.addDomElement( DOM.Service.createElement( "div", { class: "shinken-width-100" } ) );
        
        this.computeHtml__editionButton();
        this.computeHtml__extraContent();
        this.computeHtml__refresh( refresh_object );
        
        this.addDomElement( (DOM.Service.createElement( "div", { class: "shinken-end-info-bar" } )) );
    },
    initDomElement__20250213  : function () {
        this.setDomElement( DOM.Service.createElement( "div", { class: "shinken-info-bar" } ) );
        DOM.Service.addElementTo( this.getDomElement(), this.dom_element_parent );
        
        if ( __external_url_uuid__ ) {
            DOM.Service.setStyle( this.getDomElement(), DOM.CONST.STYLE.BACKGROUND_COLOR, this.getValue( SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.BACKGROUND_COLOR ) );
        }
    },
    computeHtml__logo         : function () {
        let container_logo = this.addDomElement( DOM.Service.createElement( "div", { class: "shinken-logo-container shinken-user-select-none" } ) );
        if ( !__external_url_uuid__ ) {
            DOM.Service.addElementTo( DOM.Service.cloneElement( document.querySelector( '#id-shinken-template-view .shinken-weather-icon' ) ), container_logo );
            return;
        }
        else if ( __external_url_uuid__ && this.getBooleanValue( SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.LOGO_DISPLAYED ) ) {
            DOM.Service.addElementTo( DOM.Service.createElement( "img", { class: "shinken-logo", src: "/static/" + __SHINKEN_HTTP_START_TIME__ + "/common_ui/img/logos/shinken_logo_black.png", alt: "shinken-logo" } ), container_logo );
        }
    },
    computeHtml__editionButton: function () {
        if ( !__external_url_uuid__ && __user_is_admin__ ) {
            let container_button        = this.addDomElement( DOM.Service.createElement( "div", { class: "shinken-button-container shinken-weather-edit-mode-button-cell" } ) );
            this.button_enter_edit_mode = new COMPONENT.ButtonFromData_V3( "enter_in_edit_mode", _( 'edit_mode.buttons.edit_mode' ) );
            this.button_enter_edit_mode.computeHtml();
            DOM.Service.addElementTo( this.button_enter_edit_mode.getDomElement(), container_button );
            DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-weather-popup-progress-bar-container" } ), container_button );
        }
    },
    computeHtml__extraContent : function () {
    },
    computeHtml__refresh      : function ( refresh_object ) {
        if ( this.getChild( SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.REFRESH ).getBooleanValue( SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.GENERATION_TIME_DISPLAYED ) ) {
            this.addDomElement( refresh_object.getSpecificDomElement( SHINKEN.OBJECT.Refresh.CONST.UPDATE_AT ) );
        }
        
        if ( this.getChild( SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.REFRESH ).getBooleanValue( SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.CHRONO_DISPLAYED ) ) {
            this.addDomElement( (refresh_object.getSpecificDomElement( SHINKEN.OBJECT.Refresh.CONST.CLOCK )) );
        }
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_PAGE.InfoBar, SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_PAGE.InfoBar, SHINKEN.OBJECT.ShinkenObjectHtml );
SHINKEN_PAGE.InfoBarRefresh = function ( data ) {
    this.init( data );
};
SHINKEN_PAGE.InfoBarRefresh.prototype = {
    init: SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage.prototype.init,
    _getValidOwnProperty: function () {
        return new SHINKEN_VALIDATION.Parameters( [
            [SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.CHRONO_DISPLAYED, SHINKEN_VALIDATION.CONST.BOOLEAN._KEY],
            [SHINKEN_PAGE.CONST.INFO_BAR.PARAMS.GENERATION_TIME_DISPLAYED, SHINKEN_VALIDATION.CONST.BOOLEAN._KEY]
        ] );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN_PAGE.InfoBarRefresh, SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage );
CONTROLLER.PageController = (function ( self ) {
    self.controller_name = CONTROLLER.CONST.PAGE_CONTROLLER.NAME;
    
    self.clickOnButton = function ( event, event_name, params) {
        SHINKEN_TOOLTIP.hideTooltip();
        switch ( event_name ) {
            case "cancel_edit_mode_grid_page":
                if ( self.current_page.isPhase( SHINKEN.OBJECT.CONST.PHASE.EDITING ) ) {
                    self.askShowLoadingPage();
                    self.current_page.clickOnButton( event, event_name, params );
                    SHINKEN.TOOLS.IFRAME_PARENT_COMMUNICATION.askLeaveEditMode();
                    self.askComputeSizes();
                }
                break;
            case "back_to_previous_preview":
                self.doActionAfter( event_name );
                break;
            default :
                self.current_page.clickOnButton( event, event_name, params );
        }
        if ( event_name && event ) {
            event.stopPropagation();
        }
    };
    
    self.doActionAfter = function ( event_name, params ) {
        switch ( event_name ) {
            case "current_page_set_phase_to_running":
                this.askCloseLoadingPage();
                this.selectors_once          = null;
                this.list_element_from_webui = null;
                return;
            case "click_on_button_V3":
                if ( params[ SHINKEN.OBJECT.CONFIRMATIONPOPUP.PARAM.NAME ] ) {
                    SHINKEN.OBJECT.ConfirmationPopup_V3.getInstance().doActionAfter( event_name, params );
                    return;
                }
                break;
            case "current_view_is_being_deleted":
                self.current_page.doActionAfterSpecific( event_name, params );
                return;
            case "mouse_up":
                if ( params.button === 1 ) {
                    return;
                }
                break;
            case "mouse_down":
            case "mouse_down_on_grid_cell":
            case "mouse_up_on_grid_cell":
                if ( params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].button === 1 ) {
                    return;
                }
                break;
        }
        self.current_page.doActionAfter( event_name, params );
    };
    
    self.onDragStart             = function ( element_name, origin_x, origin_y ) {
        self.current_page.doActionAfter( "on_drag_start", {
            [ MANAGER.DragNDropManager.EVENT_PARAM.ELEMENT_NAME ]: element_name, [ MANAGER.DragNDropManager.EVENT_PARAM.ORIGIN_X ]: origin_x, [ MANAGER.DragNDropManager.EVENT_PARAM.ORIGIN_Y ]: origin_y
        } );
    };
    self.onDragMove              = function ( element_name, delta_x, delta_y ) {
        self.current_page.doActionAfter( "on_drag_move", {
            [ MANAGER.DragNDropManager.EVENT_PARAM.ELEMENT_NAME ]: element_name, [ MANAGER.DragNDropManager.EVENT_PARAM.DELTA_X ]: delta_x, [ MANAGER.DragNDropManager.EVENT_PARAM.DELTA_Y ]: delta_y
        } );
    };
    self.onDragStop              = function ( element_name ) {
        self.current_page.doActionAfter( "on_drag_stop", {
            [ MANAGER.DragNDropManager.EVENT_PARAM.ELEMENT_NAME ]: element_name
        } );
    };
    self.askComputeSizes         = function () {
        self.current_page.askComputeSizes();
    };
    self.mouseLeave              = function ( event ) {
        this.current_page.doActionAfter( "mouse_leave", event );
    };
    self.onclick                 = function () {
        if ( self.current_page ) {
            self.current_page.onclick();
        }
    };
    self.onScroll                = function ( event, param ) {
        switch ( param ) {
            case "current_page":
                this.current_page.doActionAfter( "on_scroll", { [ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ]: event } );
                break;
            case "json_editor":
                break;
        }
        SHINKEN_TOOLTIP.hideTooltip();
    };
    self.mouseWheel              = function ( event ) {
        this.current_page.doActionAfter( "mouse_wheel", event );
    };
    self.onPaste                 = function ( event ) {
        var _text_pasted = CLIPBOARD_SERVICE.doPaste( event );
        var self         = this;
        setTimeout( function () {
            self.current_page.onPasteAfterAction( _text_pasted );
        }, 200 );
    };
    self.mouseDown               = function ( event ) {
        self.current_page.doActionAfter( "mouse_down", { [ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ]: event } );
    };
    self.mouseUp                 = function ( event ) {
    };
    self.askNavigateGroupEdition = function ( event, param ) {
        param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ] = event;
        this.doActionAfter( "navigate_on_window_edition_group", param );
    };
    self.setCurrentPage          = function ( to_set ) {
        self.current_page = to_set;
    };
    self.doActionWhenNotFound    = function () {
        self.current_page.doActionWhenWeatherNotFound();
    };
    self.requestGet              = function ( url, saveSuccess ) {
        SHINKEN.COMUNICATION.requestGet( url, saveSuccess, self.onTimeoutError, "", self.doActionAfter401 );
    };
    self.requestPost             = function ( url, json, saveSuccess ) {
        SHINKEN.COMUNICATION.requestPost( url, json, saveSuccess, self.onTimeoutError, "", self.doActionAfter401 );
    };
    self.onTimeoutError          = function () {
        SHINKEN.TOOLS.NOTIFICATION.addNotification( _( "common.broker_unreachable" ), SHINKEN.OBJECT.NOTIFICATION.CONST.STATUS.ERROR );
        self.current_page.onTimeoutError();
    };
    self.doActionAfter401        = function () {
        SHINKEN.COMMUNICATION_WITH_IFRAME_PARENT.doActionAfter( "raise-error-401" );
    };
    self.doActionAfter403        = function () {
        SHINKEN.COMMUNICATION_WITH_IFRAME_PARENT.doActionAfter( "raise-error-403" );
    };
    self.doActionAfter400        = function ( data ) {
        SHINKEN.TOOLS.NOTIFICATION.addNotification( _( "common.raise_error_400" ), SHINKEN.OBJECT.NOTIFICATION.CONST.STATUS.ERROR );
        self.current_page.onTimeoutError();
    };
    self.askShowLoadingPage      = function () {
        document.querySelector( ".shinken-grid-page-container" ).classList.remove( "shinken-hidden" );
        document.querySelector( '.shinken-grid-page-container .shinken-loading-after-reset' ).classList.remove( "shinken-hidden" );
        DOM.Service.setStyle( self.current_page.content.dom_element, "opacity", 0 );
    };
    self.askCloseLoadingPage     = function () {
        DOM.Service.setStyle( self.current_page.content.dom_element, "opacity", 1 );
        document.querySelector( '.shinken-grid-page-container .shinken-loading-after-reset' ).classList.add( "shinken-hidden" );
    };
    return self;
})
( CONTROLLER.PageController || {} );
SHINKEN.OBJECT.WindowJsonEditPart           = function ( window_name, parent_name ) {
    this.__class_name__ = 'SHINKEN.OBJECT.WindowJsonEditPart';
    this.initSpecific( window_name, parent_name );
};
SHINKEN.OBJECT.WindowJsonEditPart.prototype = {
    initSpecific : function ( window_name, parent_name ) {
        this.init( window_name, parent_name );
        this.dom_element__json_preview_action = document.querySelector( ".shinken-form-action-bar-container" );
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "set_active_window":
            case "slide_panel__size__has_changed":
                if ( this.isPhase( SHINKEN.OBJECT.CONST.PHASE.RUNNING_TO_STRING ) ) {
                    DOM.Service.addOrRemoveClasses( this.dom_element__json_preview_action.querySelector( ".shinken-action-bar-label-cell" ), true, "shinken-hidden" );
                    DOM.Service.addOrRemoveClasses( this.dom_element__json_preview_action.querySelector( ".shinken-note" ), true, "shinken-hidden" );
                    let _size = DOM.Service.getBoundingClientRect( this.dom_element__json_preview_action, DOM.CONST.STYLE.WIDTH );
                    DOM.Service.addOrRemoveClasses( this.dom_element__json_preview_action.querySelector( ".shinken-action-bar-label-cell" ), _size < 635, "shinken-hidden" );
                    DOM.Service.addOrRemoveClasses( this.dom_element__json_preview_action.querySelector( ".shinken-note" ), _size < 430, "shinken-hidden" );
                }
                return;
        }
        this.doActionAfterSpecificComma( event_name, param );
        this.doActionAfterCommon( event_name, param );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.WindowJsonEditPart, SHINKEN.OBJECT.WindowEditPartAbstract );
SHINKEN.OBJECT.WindowHistoryEditPart           = function ( window_name, parent_name ) {
    this.__class_name__ = 'SHINKEN.OBJECT.WindowHistoryEditPart';
    this.init( window_name, parent_name );
};
SHINKEN.OBJECT.WindowHistoryEditPart.prototype = {
    init: SHINKEN.OBJECT.WindowEditPartAbstract.prototype.init
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.WindowHistoryEditPart, SHINKEN.OBJECT.WindowEditPartAbstract );
SHINKEN.OBJECT.WindowDefaultEditPart           = function ( window_name, parent_name ) {
    this.__class_name__ = 'SHINKEN.OBJECT.WindowDefaultEditPart';
    this.init( window_name, parent_name );
};
SHINKEN.OBJECT.WindowDefaultEditPart.prototype = {
    init: SHINKEN.OBJECT.WindowEditPartAbstract.prototype.init
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.WindowDefaultEditPart, SHINKEN.OBJECT.WindowEditPartAbstract );
const WINDOW_PROBLEM_NAME_GENERAL           = SHINKEN_PAGE.CONST.WINDOWS_TABS_EDITION_MESSAGE.TABS[ SHINKEN_PAGE.CONST.WINDOWS_TABS_EDITION_MESSAGE.INDEX_TAB.GENERAL ][ "name" ];
const WINDOW_PROBLEM_NAME_WIDGET            = SHINKEN_PAGE.CONST.WINDOWS_TABS_EDITION_MESSAGE.TABS[ SHINKEN_PAGE.CONST.WINDOWS_TABS_EDITION_MESSAGE.INDEX_TAB.WIDGET ][ "name" ];
SHINKEN.OBJECT.WindowGroupProblem           = function () {
    this.initSpecific( "grid_page_window_group_problem" );
};
SHINKEN.OBJECT.WindowGroupProblem.prototype = {
    initSpecific       : function ( group_name ) {
        this.init( group_name );
        this.initWithData( WEATHER.CONST.WINDOWS_TABS_EDITION_MESSAGE.TABS );
    },
    getChildConstructor: function ( window_name, parent_name ) {
        switch ( window_name ) {
            case WINDOW_PROBLEM_NAME_GENERAL:
                return new SHINKEN.OBJECT.WindowProblemGeneral( window_name, this.name );
            case WINDOW_PROBLEM_NAME_WIDGET:
                return new SHINKEN.OBJECT.WindowProblemCell( window_name, this.name );
        }
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "clean_widget_with_problem":
            case "link__dom_element__to_widget_problem__counter":
            case "add_object__with_problems__from_user_action":
                this.getWindowByName( WINDOW_PROBLEM_NAME_WIDGET ).doActionAfter( event_name, param );
                return;
            case "add_object_json_fail":
                this.getWindowByName( WINDOW_PROBLEM_NAME_GENERAL ).doActionAfter( event_name, param );
                return;
            case "add_object_with_problems__to__window_problem":
                if ( param[ SHINKEN.OBJECT.CONST.VALIDATION.PARAM.CURRENT_OBJECT ].is_belonging_to_grid_cell_object ) {
                    this.getWindowByName( WINDOW_PROBLEM_NAME_WIDGET ).doActionAfter( event_name, param );
                }
                else {
                    this.getWindowByName( WINDOW_PROBLEM_NAME_GENERAL ).doActionAfter( event_name, param );
                }
                return;
            case "weather_window_group_problem_change_index_label": // TODO Utile ??
                this.getWindowByName( WINDOW_PROBLEM_NAME_WIDGET ).doActionAfter( event_name, param );
                this.clickOnWindow( WINDOW_PROBLEM_NAME_WIDGET );
                return;
            case "slide_panel__size__has_changed":
                DOM.Service.addOrRemoveClasses( this.dom_element, false, "shinken-inline-display" );
                const buttons_size = DOM.Service.getBoundingClientRect( this.getWindowByName( WINDOW_PROBLEM_NAME_GENERAL ).getDomElement(), DOM.CONST.STYLE.WIDTH ) +
                                     DOM.Service.getBoundingClientRect( this.getWindowByName( WINDOW_PROBLEM_NAME_WIDGET ).getDomElement(), DOM.CONST.STYLE.WIDTH );
                const target_size  = DOM.Service.getBoundingClientRect( this.dom_element_targets, DOM.CONST.STYLE.WIDTH );
                DOM.Service.addOrRemoveClasses( this.dom_element, target_size <= buttons_size, "shinken-inline-display" );
                return;
        }
        this.doActionAfterSpecificComma( event_name, param );
        this.doActionAfterCommon( event_name, param );
    },
    hasProblems       : function () {
        return this.getContents().some( current_window_element => current_window_element.hasProblems() );
    },
    setContentSpecific: function () {
        if ( this.getWindowByName( WINDOW_PROBLEM_NAME_GENERAL ).hasCounterProblems() ) {
            this.setActiveWindow( WINDOW_PROBLEM_NAME_GENERAL );
        }
        else {
            this.setActiveWindow( WINDOW_PROBLEM_NAME_WIDGET );
        }
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.WindowGroupProblem, WINDOW_V2.ElementGroupFromDataWithComma );
SHINKEN.OBJECT.WindowProblemGeneral           = function ( window_name, parent_name ) {
    this.__class_name__ = 'SHINKEN.OBJECT.WindowProblemGeneral';
    this.init( window_name, parent_name );
};
SHINKEN.OBJECT.WindowProblemGeneral.prototype = {
    init             : function ( window_name, parent_name ) {
        this.initCommon( window_name, parent_name );
        this.label            = new COMPONENT.LabelFromData( _( "edit_mode.windows.label." + this.name ) );
        this.problem_for_init = new SHINKEN_PAGE.Messages();
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "add_object_json_fail":
                this.problem_for_init.addMessage( COMPONENT.CONST.STATUS.ERROR, param[ SHINKEN.OBJECT.JSON_EDITOR.PARAM_EVENT.JSON_FORM_OBJECT ].message_invalid );
                return;
            case "add_object_with_problems__to__window_problem":
                this.problem_for_init.addMessages( param[ SHINKEN.OBJECT.CONST.VALIDATION.PARAM.CURRENT_OBJECT ].messages.getAllMessages() );
                return;
            case "compute_html_done":
                this.updateLabelCounters();
                this.computeContentTarget();
                break;
        }
        this.doActionAfterSpecificComma( event_name, param );
        this.doActionAfterCommon( event_name, param );
    },
    hasProblems  : function () {
        let current_phase = this.getCurrentPhase();
        switch ( current_phase ) {
            case SHINKEN.OBJECT.CONST.PHASE.INIT:
                return !!this.problem_for_init.hasMessage();
        }
        return this.hasCounterProblems();
    },
    updateLabelCounters: function () {
        this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, "", this.problem_for_init.getNumberErrors() );
        this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "", this.problem_for_init.getNumberWarnings() );
    },
    computeHtml         : WINDOW_V2.ElementFromData.prototype.computeHtml,
    computeContentTarget: function () {
        this.content_dom_element_target = DOM.Service.createElement( "div", { class: "shinken-window-problem-general-container" } );
        if ( !this.problem_for_init.hasMessage() ) {
            DOM.Service.addElementTo( DOM.Service.createElement( "div", { class: "shinken-note" }, _( 'messages.no_message_to_display', [DICTIONARY_COMMON_UI] ) ), this.content_dom_element_target );
            return;
        }
        DOM.Service.addElementTo(
            DOM.Service.createElement(
                "div",
                { class: "shinken-dom-element-problem" },
                this.problem_for_init.buildMessage()
            ),
            this.content_dom_element_target
        );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.WindowProblemGeneral, WINDOW_V2.ElementFromDataWithComma );
SHINKEN.OBJECT.WindowProblemCell           = function ( window_name, parent_name ) {
    this.__class_name__ = 'SHINKEN.OBJECT.WindowProblemCell';
    this.init( window_name, parent_name );
};
SHINKEN.OBJECT.WindowProblemCell.prototype = {
    init             : function ( window_name, parent_name ) {
        this.initCommon( window_name, parent_name );
        this.label                   = new COMPONENT.LabelFromData( _( "edit_mode.windows.label." + this.name ) );
        this.problem_for_init        = [];
        this.weather_cells__20240829 = new SHINKEN.OBJECT.GridCellWithProblem();
        this.weather_cells__20240829.setCountersParent( this );
        this.weather_cells__20240829.getCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.PROBLEMS ).setParent( this.getCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.PROBLEMS ) );
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.PROBLEMS );
    },
    hasProblems      : function () {
        let current_phase = this.getCurrentPhase();
        switch ( current_phase ) {
            case SHINKEN.OBJECT.CONST.PHASE.INIT:
                return !!this.problem_for_init.length;
        }
        return this.hasCounterProblems();
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "clean_widget_with_problem":
            case "add_object__with_problems__from_user_action":
                param[ WINDOW_V2.CONST.PARAM.WINDOW_OBJECT ] = this;
                this.weather_cells__20240829.doActionAfter( event_name, param );
                break;
            case "add_object_with_problems__to__window_problem":
                if ( this.isPhase( SHINKEN.OBJECT.CONST.PHASE.INIT ) ) {
                    this.problem_for_init.push( param[ SHINKEN.OBJECT.CONST.VALIDATION.PARAM.CURRENT_OBJECT ] );
                }
                return;
            case "compute_html_done":
                this.getCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.PROBLEMS ).addTargetsDomElement( this.getDomElement(), "problems" );
                this.mergeProblemsOnCell();
                this.computeContentTarget();
                break;
            case "click_on_button_V3":
                param[ WINDOW_V2.CONST.PARAM.WINDOW_OBJECT ] = this;
                this.weather_cells__20240829.doActionAfter( event_name, param );
                return;
            case "link__dom_element__to_widget_problem__counter":
                this.getCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.PROBLEMS ).addTargetsDomElement( param[ "dom_element_to_link" ], "problems" );
                break;
        }
        this.doActionAfterSpecificComma( event_name, param );
        this.doActionAfterCommon( event_name, param );
    },
    mergeProblemsOnCell: function () {
        for ( let i = 0, _size_i = this.problem_for_init.length; i < _size_i; i++ ) {
            this.weather_cells__20240829.addSpecific( this.problem_for_init[ i ] );
        }
        this.problem_for_init = [];
    },
    computeHtml         : WINDOW_V2.ElementFromData.prototype.computeHtml,
    computeContentTarget: function () {
        this.content_dom_element_target = DOM.Service.createElement( "div", { class: "shinken-window-problem-cell-container" } );
        this.weather_cells__20240829.computeHtml__20240829( this );
        DOM.Service.addElementTo( this.weather_cells__20240829.getDomElement(), this.content_dom_element_target );
    },
    getLabelCellHtml    : function () {
        var _action_after_param = SHINKEN.TOOLS.DICT.parseToHTMLParam( { "window_problem_tab_target": WEATHER.CONST.WINDOWS_TABS_EDITION_MESSAGE.WIDGET } );
        let previous_button     = this._buildButtonHtml( "click-on-window-group-problem-go-previous", "<span class='shinkon-double-chevron-left-lite'></span>", _( "edit_mode.windows.tooltips.previous_cell" ) );
        let label_button        = this._buildButtonHtml( "click-on-window-group-problem-focus-current" );
        let next_button         = this._buildButtonHtml( "click-on-window-group-problem-go-next", "<span class='shinkon-double-chevron-right-lite'></span>", _( "edit_mode.windows.tooltips.next_cell" ) );
        DOM.Service.addClasses( label_button.getDomElement(), "shinken-layout-expand-1" );
        this.dom_element_widget_label       = DOM.Service.createElement( "span", { "class": "shinken-window-widget-label" } );
        this.dom_element_widget_label_index = DOM.Service.addElementTo( DOM.Service.createElement( "span", { "class": "shinken-data-user" } ), this.dom_element_widget_label );
        label_button.setLabelDomElement( this.dom_element_widget_label );
        
        let _to_return = DOM.Service.createElement( "div", { "class": "shinken-container-buttons shinken-layout-justify-between" } );
        
        this.label.computeHtml();
        
        DOM.Service.addElementTo( this.label.getDomElement(), _to_return );
        
        this.addCounterComputeHtmlIfExist( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, this.label.getDomElement() );
        this.addCounterComputeHtmlIfExist( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, this.label.getDomElement() );
        
        let _div_actions = DOM.Service.addElementTo( DOM.Service.createElement( "div", { "class": "shinken-window-element-actions-area shinken-layout-inline-center-h-v" } ), _to_return );
        
        DOM.Service.addElementTo( previous_button.getDomElement(), _div_actions );
        DOM.Service.addElementTo( label_button.getDomElement(), _div_actions );
        DOM.Service.addElementTo( next_button.getDomElement(), _div_actions );
        
        return _to_return;
    },
    _buildButtonHtml    : function ( event_name, label, tooltip_html ) {
        let to_return = new COMPONENT.ButtonFromData_V3( event_name, label );
        to_return.addParamsForEvents( this.getParamForEvents() );
        to_return.computeHtml();
        if ( tooltip_html ) {
            to_return.setTooltipHtml( tooltip_html );
        }
        return to_return;
    },
    changeIndexLabelHtml: function ( to_set ) {
        if ( !this.dom_element_widget_label_index ) {
            return;
        }
        this.dom_element_widget_label_index.innerHTML = to_set;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.WindowProblemCell, WINDOW_V2.ElementFromDataWithComma );
SHINKEN.OBJECT.GridCellWithProblem           = function () {
    this.init();
};
SHINKEN.OBJECT.GridCellWithProblem.prototype = {
    init             : function () {
        this.initCounterCommon();
        this.initContents();
        this.last_focused_widget = 0;
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        this.initCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.PROBLEMS );
    },
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "add_object__with_problems__from_user_action":
                this.addSpecific( param[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_OBJECT ] );
                this.computeHtmlOfGridElement( param[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_OBJECT ], true );
                this.focusOnAProblem( param );
                return;
            case "clean_widget_with_problem":
                let grid_cell_uuid = param[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_UUID ];
                let index_deleting = this.getMappingIndex( grid_cell_uuid );
                if ( index_deleting === undefined ) {
                    return;
                }
                DOM.Service.removeElement( this.getContentByUUID( grid_cell_uuid ).dom_element_problem );
                this.removeContent( grid_cell_uuid, null, true );
                this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, grid_cell_uuid, 0 );
                this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, grid_cell_uuid, 0 );
                this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.PROBLEMS, grid_cell_uuid, 0 );
                this.setIndexFocus( index_deleting, param );
                break;
            default:
                switch ( param[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case "click-on-window-group-problem":
                        this.setIndexFocus( this.last_focused_widget || 0, param );
                        break;
                    case "click-on-window-group-problem-go-previous":
                        this.setIndexFocus( this.last_focused_widget - 1, param );
                        break;
                    case "click-on-window-group-problem-go-next":
                        this.setIndexFocus( this.last_focused_widget + 1, param );
                        break;
                    case "click-on-window-group-problem-focus-current":
                        this.doFocusWidget( param, true );
                        break;
                }
        }
    },
    addSpecific    : function ( to_add ) {
        let current_counter   = to_add.getCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS ) ? to_add.getCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS ) : to_add.getCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        let current_grid_cell = current_counter.getObjectParentWithClassNameV2( "WEATHER.Cell" );
        this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, current_grid_cell.getUUID(), current_grid_cell.getCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS ).getValue() );
        this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, current_grid_cell.getUUID(), current_grid_cell.getCounter( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).getValue() );
        this.setCounterValue( SHINKEN.OBJECT.COUNTER_V2_CONST.TYPE.PROBLEMS, current_grid_cell.getUUID(), 1 );
        this.add( current_grid_cell );
    },
    focusOnAProblem: function ( param ) {
        const index_to_focus = this.getMappingIndex( param[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_CELL_OBJECT ].getUUID() );
        this.setIndexFocus( index_to_focus, param );
    },
    setIndexFocus  : function ( to_set, param ) {
        if ( this.getSize() === 0 ) {
            this.last_focused_widget = 0;
            return;
        }
        if ( to_set < 0 ) {
            to_set = this.getSize() - 1;
        }
        else if ( to_set >= this.getSize() ) {
            to_set = 0;
        }
        for ( let i = 0; i < this.getSize(); i++ ) {
            const contentElement = this.getContent( i ).dom_element_problem;
            const isFocused      = i === to_set;
            DOM.Service.addOrRemoveClasses( contentElement, !isFocused, "shinken-hidden" );
            if ( isFocused ) {
                const dom_parent = DOM.Service.findParentElementWithID( contentElement, "id-shinken-window-V2-widget-grid_page_window_group_problem-target", 20 );
                DOM.Service.askAddClass( dom_parent, "shinken-focused-message", 500 );
            }
        }
        this.last_focused_widget = to_set;
        param[ WINDOW_V2.CONST.PARAM.WINDOW_OBJECT ].changeIndexLabelHtml( this.getContent( this.last_focused_widget ).index_label );
        this.doFocusWidget( {}, !param[ SHINKEN.OBJECT.FORMSET.PARAM.FORM_ANIMATION_STOP_PROPAGATION ] );
    },
    doFocusWidget  : function ( param, do_focus_on_widget ) {
        let _focus_widget = this.getContent( this.last_focused_widget );
        _focus_widget.dom_element_problem.classList.remove( "shinken-hidden" );
        if ( do_focus_on_widget ) {
            _focus_widget.doActionAfter( "focus_on_dom_element" );
        }
        param[ SHINKEN_GRID.CONST.PARAM.EVENT.FOCUSED_WIDGET ] = _focus_widget;
        CONTROLLER.PageController.doActionAfter( "focus-on-json-if-existing", param );
    },
    computeHtml__20240829   : function ( window_element_problem_cell_object ) {
        this.setDomElement( DOM.Service.createElement( "div" ) );
        if ( !this.getSize() ) {
            this.addDomElement( DOM.Service.createElement( "div", { class: "shinken-note" }, _( 'messages.no_message_to_display', [DICTIONARY_COMMON_UI] ) ) );
            return;
        }
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.computeHtmlOfGridElement( this.getContent( i ), i > 0 );
        }
        window_element_problem_cell_object.changeIndexLabelHtml( this.getContent( this.last_focused_widget ).index_label );
    },
    computeHtmlOfGridElement: function ( grid_element, hide_element ) {
        grid_element.dom_element_problem = DOM.Service.createElement( "div", { class: "shinken-dom-element-problem", "data-problem-cell-uuid": grid_element.getUUID() }, grid_element.buildMessage() );
        if ( hide_element ) {
            grid_element.dom_element_problem.classList.add( "shinken-hidden" );
        }
        if ( this.getDomElement() ) {
            DOM.Service.removeElement( this.getDomElement().querySelector( '.shinken-dom-element-problem[data-problem-cell-uuid="' + grid_element.getUUID() + '"]' ) );
        }
        
        this.addDomElement( grid_element.dom_element_problem );
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridCellWithProblem, SHINKEN.OBJECT.CounterInterfaceValidation );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridCellWithProblem, SHINKEN.OBJECT.ShinkenObjectContainer );
WINDOW_V2.ElementService = (function ( self ) {
    self.getWindowTargetHtml = function ( dom_tag, tab_name, is_active ) {
        var _class_to_add = is_active ? "shinken-window-target" : "shinken-window-target shinken-hidden";
        var _to_return    = DOM.Service.createElement( dom_tag, { id: WINDOW_V2.CONST.ID.WINDOW_TAB + tab_name + "-target", class: _class_to_add } );
        return _to_return;
    };
    self.getWindowHtml       = function ( dom_tag, window_id, label, group_name, is_active ) {
        var _class_to_add = is_active ? "shinken-window-element shinken-active" : "shinken-window-element";
        var _to_return    = DOM.Service.createElement( dom_tag, {
            class            : _class_to_add,
            "data-group-name": group_name,
            "data-name"      : window_id,
            id               : WINDOW_V2.CONST.ID.WINDOW_TAB + window_id
        }, label );
        return _to_return;
    };
    return self;
})( WINDOW_V2.ElementService || {} );
SHINKEN.OBJECT.CommonFormInterface           = function () {
};
SHINKEN.OBJECT.CommonFormInterface.prototype = {
    addToPropertyModified              : function ( property_name ) {
        if ( !this.properties_modified.includes( property_name ) ) {
            this.properties_modified.push( property_name );
        }
    },
    askValidateForm                    : function ( param ) {
        this.addToPropertyModified( param[ PROPERTY.COMMON.PARAM.PROPERTY_NAME ] );
        if ( this.timeout__compute_validate_form ) {
            clearTimeout( this.timeout__compute_validate_form );
        }
        this.timeout__compute_validate_form = setTimeout( () => {
            this.validateForm( param );
            this.timeout__compute_validate_form = null;
            this.properties_modified            = [];
        }, 200 );
    },
    parseTilesBackgroundValueForPreview: function ( composed_key ) {
        switch ( composed_key ) {
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.BACKGROUND.COMPOSED_KEY:
                switch ( __tiles_background__ ) {
                    case SHINKEN.ELEMENT.USER.PARAM.TILES_FORMAT.BACKEND_KEY.DEFAULT:
                        return WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.BACKGROUND.OPTIONS.CONTEXT_AND_STATUS;
                    case SHINKEN.ELEMENT.USER.PARAM.TILES_FORMAT.BACKEND_KEY.CONTEXT_UP:
                        return WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.BACKGROUND.OPTIONS.CONTEXT_THEN_STATUS;
                    case SHINKEN.ELEMENT.USER.PARAM.TILES_FORMAT.BACKEND_KEY.STATUS_UP:
                        return WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.BACKGROUND.OPTIONS.ONLY_STATUS;
                }
                break;
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.ICON_TYPE.COMPOSED_KEY:
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE.COMPOSED_KEY:
                switch ( __tiles_background__ ) {
                    case SHINKEN.ELEMENT.USER.PARAM.TILES_FORMAT.BACKEND_KEY.DEFAULT:
                    case SHINKEN.ELEMENT.USER.PARAM.TILES_FORMAT.BACKEND_KEY.CONTEXT_UP:
                        return WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE.OPTIONS.CONTEXT_THEN_STATUS;
                    case SHINKEN.ELEMENT.USER.PARAM.TILES_FORMAT.BACKEND_KEY.STATUS_UP:
                        return WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE.OPTIONS.ONLY_STATUS;
                }
                break;
        }
    },
    parseConfigurationToArray          : function ( options_array, dictionary_key, property_structure, type ) {
        let composed_key = property_structure.COMPOSED_KEY;
        let default_value;
        let dictionary;
        switch ( type ) {
            case WIDGET.CONST.TYPE.EXTERNAL_LINKS:
                default_value = this.page_object.getDefaultValueFor( type, composed_key );
                dictionary    = "";
                break;
            case WIDGET.CONST.PARAM.LAYOUTS.TITLE._KEY:
            case WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR._KEY:
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER._KEY:
                let dict = this.grid_object[ SHINKEN_GRID.CONST.PARAM.GRID.LAYOUTS ][ type ].getDataForJson( SHINKEN.OBJECT.JSON_EDITOR.FORMAT_DATA.VALUE_AND_DEFAULT_AND_CFG );
                default_value = SHINKEN.TOOLS.DICT.getValueWithComposedKey( dict, composed_key ).cfg_value;
                dictionary    = [DICTIONARY_COMMON_UI];
                break;
        }
        let to_return = [];
        
        const _keys = Object.keys( options_array );
        let value;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            value = options_array[ _keys[ i ] ];
            to_return.push( { name: value, label: _( dictionary_key + "." + value, dictionary ) } );
        }
        let default_label = default_value;
        if ( isTranslateKeyExisting( dictionary_key + "." + default_value, dictionary ) ) {
            default_label = _( dictionary_key + "." + default_value, dictionary );
        }
        default_label = SHINKEN.TOOLS.STRING.format( _( "property.default_label", [DICTIONARY_COMMON_UI] ), default_label );
        to_return.push( { name: WEATHER.CONST.DEFAULT_VALUE, label: default_label, [ PROPERTY_V2.COMMON.PARAM.IS_DEFAULT ]: true, [ PROPERTY_V2.COMMON.PARAM.DEFAULT_VALUE ]: default_value } );
        return to_return;
    },
    getController   : function () {
        return CONTROLLER.PageController;
    },
    setPropertyValue: function ( property_name, value ) {
        this.doActionAfter( "property_value__set__by_js", {
            [ SHINKEN.OBJECT.FORMSET.PARAM.FORM_NAME ]: this.getName(), [ PROPERTY.COMMON.PARAM.PROPERTY_NAME ]: property_name, [ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ]: value
        } );
    },
    getUserPref: function () {
        let to_return = {
            [ SHINKEN.USER_PREFS.KEY ]  : this.getName(),
            [ SHINKEN.USER_PREFS.VALUE ]: {}
        };
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ SHINKEN.USER_PREFS.VALUE ][ this.getContent( i ).getUUID() ] = this.getContent( i ).getUserPref();
        }
        return to_return;
    }
};
SHINKEN.OBJECT.ExternalLinkFormInterface = function () {
};
SHINKEN.OBJECT.ExternalLinkFormInterface.prototype = {
    initExternalLinkDefault: function ( user_prefs ) {
        let widget_cf = this.addSpecific( new SHINKEN.OBJECT.CollapseFolderFromData_V3( SHINKEN_PAGE.DEFAULTFORM.COLLAPSE_FOLDER.EXTERNAL_LINK._KEY, _( "form.collapse_folder.label." + SHINKEN_PAGE.DEFAULTFORM.COLLAPSE_FOLDER.EXTERNAL_LINK._KEY ) ), true );
        if ( !user_prefs || !user_prefs.getValueByKey( [widget_cf.getUUID(), SHINKEN.OBJECT.COLLAPSE.PARAM.IS_OPEN] ) ) {
            widget_cf.addClass( "shinken-close" );
        }
        let current_cf = this.addSpecificToChild( this.getCollapseFolder__external_links__URLArea(), widget_cf, true );
        current_cf.addClass( "shinken-collapse-disabled" );
        current_cf = this.addSpecificToChild( this.getCollapseFolder__external_links__info_barArea(), widget_cf, true );
        current_cf.addClass( "shinken-collapse-disabled" );
        current_cf = this.addSpecificToChild( this.getCollapseFolder__external_links__notificationArea(), widget_cf, true, true );
        current_cf.addClass( "shinken-collapse-disabled" );
    },
    getCollapseFolder__external_links__NameArea         : function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( WEATHER.CONST.EXTERNAL_LINKS.PARAM.URL_CF, _( "form.external_links.collapse_folder.cf_name" ) );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.LINK_NAME ), to_return );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.LINK_UUID ), to_return );
        return to_return;
    },
    getCollapseFolder__external_links__URLArea         : function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( WEATHER.CONST.EXTERNAL_LINKS.PARAM.URL_CF, _( "form.external_links.collapse_folder.cf_url" ) );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.LINK_PROTOCOL ), to_return );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.LINK_BASE_URL ), to_return );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.LINK_EXTERNAL_PART_URL ), to_return );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.AUTHENTICATION_NEEDED ), to_return );
        return to_return;
    },
    getCollapseFolder__external_links__info_barArea    : function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( WEATHER.CONST.EXTERNAL_LINKS.PARAM.INFO_BAR._KEY, _( "form.external_links.collapse_folder.cf_information_bar_display" ) );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.INFO_BAR.POSITION ), to_return );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.INFO_BAR.BACKGROUND_COLOR ), to_return );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.INFO_BAR.LOGO_DISPLAYED ), to_return );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.INFO_BAR.REFRESH.CHRONO_DISPLAYED ), to_return );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.INFO_BAR.REFRESH.GENERATION_TIME_DISPLAYED ), to_return );
        
        return to_return;
    },
    getCollapseFolder__external_links__notificationArea: function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( SHINKEN_PAGE.VISUALFORM.EXTERNALLINK.COLLAPSE_FOLDER.NOTIFICATION._KEY, _( "form.external_links.collapse_folder.cf_notifications" ) );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.NOTIFICATIONS.SOUND.ENABLED ), to_return );
        this.addSpecificToChild( this.factoryProperty( WEATHER.CONST.EXTERNAL_LINKS.PARAM.NOTIFICATIONS.VISUAL.BLINK.ENABLED ), to_return );
        
        return to_return;
    },
    factoryProperty: function ( property_structure ) {
        let to_return;
        let radios = this.parseConfigurationToArray( property_structure.OPTIONS, "form.external_links.properties." + property_structure.COMPOSED_KEY + ".radios", property_structure, WIDGET.CONST.TYPE.EXTERNAL_LINKS );
        switch ( property_structure ) {
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.LINK_PROTOCOL:
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.AUTHENTICATION_NEEDED:
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.INFO_BAR.POSITION:
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.INFO_BAR.LOGO_DISPLAYED:
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.INFO_BAR.REFRESH.CHRONO_DISPLAYED:
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.INFO_BAR.REFRESH.GENERATION_TIME_DISPLAYED:
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.NOTIFICATIONS.SOUND.ENABLED:
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.NOTIFICATIONS.VISUAL.BLINK.ENABLED:
                to_return = new PROPERTY.CheckBoxRadioPropFromData_V3( property_structure.COMPOSED_KEY, radios, _( "form.external_links.properties." + property_structure.COMPOSED_KEY + ".label" ) );
                break;
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.LINK_UUID:
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.LINK_NAME:
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.LINK_BASE_URL:
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.LINK_EXTERNAL_PART_URL:
            case WEATHER.CONST.EXTERNAL_LINKS.PARAM.INFO_BAR.BACKGROUND_COLOR:
                to_return = new PROPERTY.CheckBoxRadioProp__WithStringInput__FromData( property_structure.COMPOSED_KEY, radios, _( "form.external_links.properties." + property_structure.COMPOSED_KEY + ".label" ) );
                to_return.doActionAfter( "set_placeholder_input_V3", { [ COMPONENT.CONST.PARAM.TEXT_PLACEHOLDER_INPUT ]: _( "form.external_links.properties." + property_structure.COMPOSED_KEY + ".input.placeholder" ) } );
                break;
        }
        let param_object = SHINKEN.TOOLS.DICT.getValueWithComposedKey( this.page_object, WEATHER.CONST.EXTERNAL_LINKS.PARAM.DEFAULT_LINK.COMPOSED_KEY + "." + property_structure.COMPOSED_KEY );
        to_return.doActionAfter( "property_value__set__by_data", { [ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ]: param_object.getUserValue() + "" } );
        
        to_return.setPreviousModificationElement();
        return to_return;
    }
    
};
SHINKEN_PAGE.VISUALFORM.EXTERNALLINK = {
    COLLAPSE_FOLDER: {
        NAME        : {
            _KEY: "cf_weather_edit_external_link_name_part"
        },
        URL         : {
            _KEY: "cf_weather_edit_external_link_url_part"
        },
        INFO_BAR    : {
            _KEY: "cf_weather_edit_external_link_information_bar_display_part"
        },
        NOTIFICATION: {
            _KEY: "cf_weather_edit_external_link_notification_part"
        }
        
    }
};
SHINKEN.OBJECT.SeparatorWidgetFormInterface = function () {
};
SHINKEN.OBJECT.SeparatorWidgetFormInterface.prototype = {
    initSeparatorWidgetDefault: function ( user_prefs ) {
        let widget_cf = this.addSpecific( new SHINKEN.OBJECT.CollapseFolderFromData_V3( SHINKEN_PAGE.DEFAULTFORM.COLLAPSE_FOLDER.SEPARATOR._KEY, _( "form.collapse_folder.label." + SHINKEN_PAGE.DEFAULTFORM.COLLAPSE_FOLDER.SEPARATOR._KEY ) ), true );
        if ( !user_prefs || !user_prefs.getValueByKey( [widget_cf.getUUID(), SHINKEN.OBJECT.COLLAPSE.PARAM.IS_OPEN] ) ) {
            widget_cf.addClass( "shinken-close" );
        }
        
        let current_cf = this.addSpecificToChild( this.getCollapseFolder__widgetSeparator__sizes(), widget_cf, true );
        current_cf.addClass( "shinken-collapse-disabled" );
        current_cf = this.addSpecificToChild( this.getCollapseFolder__widgetSeparator__content(), widget_cf, true, true );
        current_cf.addClass( "shinken-collapse-disabled" );
        current_cf = this.addSpecificToChild( this.getCollapseFolder__widgetSeparator__leftArea(), widget_cf, true, true );
        current_cf.addClass( "shinken-collapse-disabled" );
        current_cf = this.addSpecificToChild( this.getCollapseFolder__widgetSeparator__rightArea(), widget_cf, true, true );
        current_cf.addClass( "shinken-collapse-disabled" );
        current_cf = this.addSpecificToChild( this.getCollapseFolder__widgetSeparator__titleArea(), widget_cf, true, true );
        current_cf.addClass( "shinken-collapse-disabled" );
    },
    getCollapseFolder__widgetSeparator__sizes    : function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( SHINKEN_PAGE.DEFAULTFORM.WIDGET.COLLAPSE_FOLDER.DIMENSION_AREA._KEY, _( "grid.mode_edition.form_widget.separator_widget.collapse_folder.cf_dimensions", [DICTIONARY_COMMON_UI] ) );
        
        this.addSpecificToChild( this.factoryProperty__separator( WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.WIDTH ), to_return );
        this.addSpecificToChild( this.factoryProperty__separator( WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.HEIGHT ), to_return );
        
        return to_return;
    },
    getCollapseFolder__widgetSeparator__content  : function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.AREAS._KEY, _( "grid.mode_edition.form_widget.separator_widget.collapse_folder.cf_area", [DICTIONARY_COMMON_UI] ) );
        
        this.addSpecificToChild( this.factoryProperty__separator( WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.DISPLAYED ), to_return );
        this.addSpecificToChild( this.factoryProperty__separator( WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.RIGHT_AREA.DISPLAYED ), to_return );
        
        return to_return;
    },
    getCollapseFolder__widgetSeparator__leftArea : function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.LEFT_AREA._KEY, _( "grid.mode_edition.form_widget.separator_widget.collapse_folder.cf_left_area", [DICTIONARY_COMMON_UI] ) );
        
        this.addSpecificToChild( this.factoryProperty__separator( WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.WIDTH_PERCENT ), to_return );
        
        return to_return;
    },
    getCollapseFolder__widgetSeparator__rightArea: function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.RIGHT_AREA._KEY, _( "grid.mode_edition.form_widget.separator_widget.collapse_folder.cf_right_area", [DICTIONARY_COMMON_UI] ) );
        
        this.addSpecificToChild( this.factoryProperty__separator( WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.RIGHT_AREA.WIDTH_PERCENT ), to_return );
        
        return to_return;
    },
    getCollapseFolder__widgetSeparator__titleArea: function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.TITLE_AREA._KEY, _( "grid.mode_edition.form_widget.separator_widget.collapse_folder.cf_title_area", [DICTIONARY_COMMON_UI] ) );
        
        this.addSpecificToChild( this.factoryProperty__separator( WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.TEXT_ALIGN ), to_return );
        this.addSpecificToChild( this.factoryProperty__separator( WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.TEXT_COLOR ), to_return );
        this.addSpecificToChild( this.factoryProperty__separator( WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.FONT_ZOOM_PERCENT ), to_return );
        
        return to_return;
    },
    factoryProperty__separator: function ( property_structure ) {
        let to_return;
        let radios = this.parseConfigurationToArray( property_structure.OPTIONS, "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".radios", property_structure, WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR._KEY );
        switch ( property_structure ) {
            case WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.TEXT_ALIGN:
            case WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.RIGHT_AREA.DISPLAYED:
            case WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.DISPLAYED:
                to_return = new PROPERTY.CheckBoxRadioPropFromData_V3( property_structure.COMPOSED_KEY, radios, _( "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".label", [DICTIONARY_COMMON_UI] ) );
                break;
            case WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.HEIGHT:
            case WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.WIDTH:
            case WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.WIDTH_PERCENT:
            case WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.RIGHT_AREA.WIDTH_PERCENT:
            case WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.TEXT_COLOR:
            case WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.FONT_ZOOM_PERCENT:
                to_return = new PROPERTY.CheckBoxRadioProp__WithStringInput__FromData( property_structure.COMPOSED_KEY, radios, _( "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".label", [DICTIONARY_COMMON_UI] ) );
                to_return.doActionAfter( "set_placeholder_input_V3", { [ COMPONENT.CONST.PARAM.TEXT_PLACEHOLDER_INPUT ]: _( "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".input.placeholder", [DICTIONARY_COMMON_UI] ) } );
                break;
        }
        let param_object = SHINKEN.TOOLS.DICT.getValueWithComposedKey( this.grid_object, "layouts.separator_widget_layout." + property_structure.COMPOSED_KEY );
        to_return.doActionAfter( "property_value__set__by_data", { [ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ]: param_object.getUserValue() + "" } );
        
        to_return.setPreviousModificationElement();
        return to_return;
    }
    
};
SHINKEN.OBJECT.TitleWidgetFormInterface = function () {
};
SHINKEN.OBJECT.TitleWidgetFormInterface.prototype = {
    initTitleWidgetDefault: function ( user_prefs ) {
        let widget_cf = this.addSpecific( new SHINKEN.OBJECT.CollapseFolderFromData_V3( SHINKEN_PAGE.DEFAULTFORM.COLLAPSE_FOLDER.TITLE._KEY, _( "form.collapse_folder.label." + SHINKEN_PAGE.DEFAULTFORM.COLLAPSE_FOLDER.TITLE._KEY ) ), true );
        if ( !user_prefs || !user_prefs.getValueByKey( [widget_cf.getUUID(), SHINKEN.OBJECT.COLLAPSE.PARAM.IS_OPEN] ) ) {
            widget_cf.addClass( "shinken-close" );
        }
        let current_cf = this.addSpecificToChild( this.getCollapseFolder__widgetTitle__sizes(), widget_cf, true );
        current_cf.addClass( "shinken-collapse-disabled" );
        current_cf = this.addSpecificToChild( this.getCollapseFolder__widgetTitle__titleArea(), widget_cf, true, true );
        current_cf.addClass( "shinken-collapse-disabled" );
    },
    getCollapseFolder__widgetTitle__sizes    : function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( SHINKEN_PAGE.DEFAULTFORM.WIDGET.COLLAPSE_FOLDER.DIMENSION_AREA._KEY, _( "grid.mode_edition.form_widget.title_widget.collapse_folder.cf_dimensions", [DICTIONARY_COMMON_UI] ) );
        
        this.addSpecificToChild( this.factoryProperty__title( WIDGET.CONST.PARAM.LAYOUTS.TITLE.WIDTH ), to_return );
        this.addSpecificToChild( this.factoryProperty__title( WIDGET.CONST.PARAM.LAYOUTS.TITLE.HEIGHT ), to_return );
        
        return to_return;
    },
    getCollapseFolder__widgetTitle__titleArea: function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.TITLE_AREA._KEY, _( "grid.mode_edition.form_widget.title_widget.collapse_folder.cf_title_area", [DICTIONARY_COMMON_UI] ) );
        
        this.addSpecificToChild( this.factoryProperty__title( WIDGET.CONST.PARAM.LAYOUTS.TITLE.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.TEXT_ALIGN ), to_return );
        this.addSpecificToChild( this.factoryProperty__title( WIDGET.CONST.PARAM.LAYOUTS.TITLE.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.TEXT_COLOR ), to_return );
        this.addSpecificToChild( this.factoryProperty__title( WIDGET.CONST.PARAM.LAYOUTS.TITLE.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.FONT_ZOOM_PERCENT ), to_return );
        
        return to_return;
    },
    factoryProperty__title: function ( property_structure ) {
        let to_return;
        let radios = this.parseConfigurationToArray( property_structure.OPTIONS, "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".radios", property_structure, WIDGET.CONST.PARAM.LAYOUTS.TITLE._KEY );
        switch ( property_structure ) {
            case WIDGET.CONST.PARAM.LAYOUTS.TITLE.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.TEXT_ALIGN:
                to_return = new PROPERTY.CheckBoxRadioPropFromData_V3( property_structure.COMPOSED_KEY, radios, _( "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".label", [DICTIONARY_COMMON_UI] ) );
                break;
            case WIDGET.CONST.PARAM.LAYOUTS.TITLE.WIDTH:
            case WIDGET.CONST.PARAM.LAYOUTS.TITLE.HEIGHT:
            case WIDGET.CONST.PARAM.LAYOUTS.TITLE.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.TEXT_COLOR:
            case WIDGET.CONST.PARAM.LAYOUTS.TITLE.LAYOUT.INFORMATION_TO_DISPLAY.TITLE_AREA.FONT_ZOOM_PERCENT:
                to_return = new PROPERTY.CheckBoxRadioProp__WithStringInput__FromData( property_structure.COMPOSED_KEY, radios, _( "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".label", [DICTIONARY_COMMON_UI] ) );
                to_return.doActionAfter( "set_placeholder_input_V3", { [ COMPONENT.CONST.PARAM.TEXT_PLACEHOLDER_INPUT ]: _( "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".input.placeholder", [DICTIONARY_COMMON_UI] ) } );
                break;
        }
        let param_object = SHINKEN.TOOLS.DICT.getValueWithComposedKey( this.grid_object, "layouts.title_widget_layout." + property_structure.COMPOSED_KEY );
        to_return.doActionAfter( "property_value__set__by_data", { [ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ]: param_object.getUserValue() + "" } );
        
        to_return.setPreviousModificationElement();
        return to_return;
    }
};
SHINKEN.OBJECT.WeatherWidgetFormInterface = function () {
};
SHINKEN.OBJECT.WeatherWidgetFormInterface.prototype = {
    initWeatherWidgetDefault: function ( user_prefs ) {
        let widget_cf = this.addSpecific( new SHINKEN.OBJECT.CollapseFolderFromData_V3( SHINKEN_PAGE.DEFAULTFORM.COLLAPSE_FOLDER.WEATHER._KEY, _( "form.collapse_folder.label." + SHINKEN_PAGE.DEFAULTFORM.COLLAPSE_FOLDER.WEATHER._KEY ) ), true );
        if ( !user_prefs || !user_prefs.getValueByKey( [widget_cf.getUUID(), SHINKEN.OBJECT.COLLAPSE.PARAM.IS_OPEN] ) ) {
            widget_cf.addClass( "shinken-close" );
        }
        
        let current_cf = this.addSpecificToChild( new SHINKEN.OBJECT.CollapseFolderForProperties( SHINKEN_PAGE.DEFAULTFORM.WIDGET.COLLAPSE_FOLDER.DIMENSION_AREA._KEY, _( "grid.mode_edition.form_widget.weather_widget.collapse_folder.cf_dimensions", [DICTIONARY_COMMON_UI] ) ), widget_cf, true );
        current_cf.addClass( "shinken-collapse-disabled" );
        
        this.addSpecificToChild( this.factoryProperty__weather( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.WIDTH ), current_cf );
        this.addSpecificToChild( this.factoryProperty__weather( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.HEIGHT ), current_cf );
        
        
        current_cf = this.addSpecificToChild( this.getCollapseFolder__widgetWeather__display(), widget_cf, true );
        current_cf.addClass( "shinken-collapse-disabled" );
        current_cf = this.addSpecificToChild( this.getCollapseFolder__widgetWeather__areas(), widget_cf, true );
        current_cf.addClass( "shinken-collapse-disabled" );
        
        this.grid_for_preview = this.addSpecificToChild( new SHINKEN_GRID.GridForPreview( this.getInitialDataForPreviewWidget( true ) ), widget_cf, true );
        this.grid_for_preview.addParamForEvents( SHINKEN.OBJECT.FORMSET.PARAM.FORM_NAME, this.name );
        this.grid_cell_for_preview = this.grid_for_preview.grid_elements.getContent( 0 );
        this.grid_cell_for_preview.computeHtml();
        
        this.addSpecificToChild( this.getCollapseFolder__widgetWeather__leftArea(), widget_cf, true, SHINKEN.CONST.VISIBILITY_STATE.HIDDEN );
        this.addSpecificToChild( this.getCollapseFolder__widgetWeather__topRightArea(), widget_cf, true, SHINKEN.CONST.VISIBILITY_STATE.HIDDEN );
        this.addSpecificToChild( this.getCollapseFolder__widgetWeather__slaArea(), widget_cf, true, SHINKEN.CONST.VISIBILITY_STATE.HIDDEN );
        this.addSpecificToChild( this.getCollapseFolder__widgetWeather__nameArea(), widget_cf, true, SHINKEN.CONST.VISIBILITY_STATE.HIDDEN );
        
    },
    getCollapseFolder__widgetWeather__display     : function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.DISPLAY._KEY, _( "grid.mode_edition.form_widget.weather_widget.collapse_folder.cf_display", [DICTIONARY_COMMON_UI] ) );
        
        this.addSpecificToChild( this.factoryProperty__weather( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.NAME_AREA.PROPERTY_USED_AS_NAME ), to_return );
        this.addSpecificToChild( this.factoryProperty__weather( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.BACKGROUND ), to_return );
        
        return to_return;
    },
    getCollapseFolder__widgetWeather__areas       : function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForProperties( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.AREAS._KEY, _( "grid.mode_edition.form_widget.weather_widget.collapse_folder.cf_area", [DICTIONARY_COMMON_UI] ) );
        
        this.addSpecificToChild( this.factoryProperty__weather( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.DISPLAYED, SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.TOP_RIGHT_AREA._KEY ), to_return );
        this.addSpecificToChild( this.factoryProperty__weather( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.SLA_AREA.DISPLAYED, SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.SLA_AREA._KEY ), to_return );
        
        return to_return;
    },
    getCollapseFolder__widgetWeather__leftArea    : function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForPropertiesWithPreview( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.LEFT_AREA._KEY, _( "grid.mode_edition.form_widget.weather_widget.collapse_folder.cf_left_area", [DICTIONARY_COMMON_UI] ), this.grid_cell_for_preview );
        to_return.addClass( "shinken-collapse-disabled" );
        this.addSpecificToChild( this.factoryProperty__weather( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE ), to_return );
        return to_return;
    },
    getCollapseFolder__widgetWeather__topRightArea: function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForPropertiesWithPreview( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.TOP_RIGHT_AREA._KEY, _( "grid.mode_edition.form_widget.weather_widget.collapse_folder.cf_top_right_area", [DICTIONARY_COMMON_UI] ), this.grid_cell_for_preview );
        to_return.addClass( "shinken-collapse-disabled" );
        this.addSpecificToChild( this.factoryProperty__weather( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.ICON_TYPE ), to_return );
        return to_return;
    },
    getCollapseFolder__widgetWeather__slaArea     : function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForPropertiesWithPreview( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.SLA_AREA._KEY, _( "grid.mode_edition.form_widget.weather_widget.collapse_folder.cf_sla_area", [DICTIONARY_COMMON_UI] ), this.grid_cell_for_preview );
        to_return.addClass( "shinken-collapse-disabled" );
        this.addSpecificToChild( this.factoryProperty__weather( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.SLA_AREA.SHOW_ICON ), to_return );
        return to_return;
    },
    getCollapseFolder__widgetWeather__nameArea    : function () {
        const to_return = new SHINKEN.OBJECT.CollapseFolderForPropertiesWithPreview( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.NAME_AREA._KEY, _( "grid.mode_edition.form_widget.weather_widget.collapse_folder.cf_name_area", [DICTIONARY_COMMON_UI] ), this.grid_cell_for_preview );
        to_return.addClass( "shinken-collapse-disabled" );
        
        this.addSpecificToChild( this.factoryProperty__weather( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.NAME_AREA.VERTICAL_ALIGN ), to_return );
        this.addSpecificToChild( this.factoryProperty__weather( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.NAME_AREA.FONT_ZOOM_PERCENT ), to_return );
        this.addSpecificToChild( this.factoryProperty__weather( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.NAME_AREA.NB_LINES_MAX ), to_return );
        
        return to_return;
    },
    factoryProperty__weather: function ( property_structure, param_for_event ) {
        let to_return;
        let radios = this.parseConfigurationToArray( property_structure.OPTIONS, "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".radios", property_structure, WIDGET.CONST.PARAM.LAYOUTS.WEATHER._KEY );
        switch ( property_structure ) {
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.SLA_AREA.DISPLAYED :
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.DISPLAYED :
                to_return = new PROPERTY.CheckBoxRadioPropFromData_V3( property_structure.COMPOSED_KEY, radios, _( "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".label", [DICTIONARY_COMMON_UI] ) );
                to_return.addParamForEvents( SHINKEN.OBJECT.COLLAPSE.PARAM.NAME_FOR_HIDDEN_PREVIEW, param_for_event );
                break;
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.SLA_AREA.SHOW_ICON:
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.NAME_AREA.VERTICAL_ALIGN:
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.NAME_AREA.PROPERTY_USED_AS_NAME:
                to_return = new PROPERTY.CheckBoxRadioPropFromData_V3( property_structure.COMPOSED_KEY, radios, _( "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".label", [DICTIONARY_COMMON_UI] ) );
                break;
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.BACKGROUND:
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE:
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.ICON_TYPE:
                to_return = new PROPERTY.CheckBoxRadioProp__WithSelector__FromData( property_structure.COMPOSED_KEY, radios, _( "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".label", [DICTIONARY_COMMON_UI] ) );
                to_return.doActionAfter( "change_selector_default_title", { [ COMPONENT.CONST.PARAM.TEXT_DEFAULT_SELECTOR ]: _( "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".radios.default_label_selector", [DICTIONARY_COMMON_UI] ) } );
                break;
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.WIDTH:
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.HEIGHT:
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.NAME_AREA.NB_LINES_MAX:
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.NAME_AREA.FONT_ZOOM_PERCENT:
                to_return = new PROPERTY.CheckBoxRadioProp__WithStringInput__FromData( property_structure.COMPOSED_KEY, radios, _( "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".label", [DICTIONARY_COMMON_UI] ) );
                to_return.doActionAfter( "set_placeholder_input_V3", { [ COMPONENT.CONST.PARAM.TEXT_PLACEHOLDER_INPUT ]: _( "grid.mode_edition.form_widget." + property_structure.COMPOSED_KEY + ".input.placeholder", [DICTIONARY_COMMON_UI] ) } );
                break;
        }
        let param_object = SHINKEN.TOOLS.DICT.getValueWithComposedKey( this.grid_object, "layouts.weather_widget_layout." + property_structure.COMPOSED_KEY );
        to_return.doActionAfter( "property_value__set__by_data", { [ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ]: param_object.getUserValue() + "" } );
        
        to_return.setPreviousModificationElement();
        return to_return;
    },
    synchronizationProperty: function ( param, avoid_notification ) {
        switch ( param[ PROPERTY.COMMON.PARAM.PROPERTY_NAME ] ) {
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE.COMPOSED_KEY:
            case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.ICON_TYPE.COMPOSED_KEY:
                let property_left  = this.property_set.getContentByUUID( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE.COMPOSED_KEY );
                let property_right = this.property_set.getContentByUUID( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.ICON_TYPE.COMPOSED_KEY );
                let value_left     = property_left.getDataToSave__20241127( SHINKEN.OBJECT.FORM.TYPE_SAVE.VALUE_AND_DEFAULT_FOR_GRID );
                let value_tp_r     = property_right.getDataToSave__20241127( SHINKEN.OBJECT.FORM.TYPE_SAVE.VALUE_AND_DEFAULT_FOR_GRID );
                if ( WIDGET.CONST.isSameIconType( value_left, value_tp_r ) ) {
                    if ( param[ PROPERTY.COMMON.PARAM.PROPERTY_NAME ] === WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE.COMPOSED_KEY ) {
                        if ( value_left[ SHINKEN.OBJECT.CONST.PARAM.VALUE ] === WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE.OPTIONS.QUALITY_SERVICE_ICON ) {
                            this.setPropertyValue( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.ICON_TYPE.COMPOSED_KEY, WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.ICON_TYPE.OPTIONS.CONTEXT_THEN_STATUS );
                        }
                        else {
                            this.setPropertyValue( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.ICON_TYPE.COMPOSED_KEY, WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.ICON_TYPE.OPTIONS.QUALITY_SERVICE_ICON );
                        }
                        if ( !avoid_notification ) {
                            SHINKEN.TOOLS.NOTIFICATION.addNotification( SHINKEN.TOOLS.STRING.format( _( "validation.errors.change_auto__duplicate_value_on_property" ),
                                '<span class="shinken-data-user">' + property_right.getLabel() + '</span>&nbsp;<span "shinken-note"> (&nbsp;' + this.getContentByUUID( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.TOP_RIGHT_AREA._KEY )
                                                                                                                                                    .getLabel() + '&nbsp;)</span>',
                                '<span class="shinken-data-user">' + property_left.getLabel() + '</span>&nbsp;<span "shinken-note"> (&nbsp;' + this.getContentByUUID( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.LEFT_AREA._KEY )
                                                                                                                                                   .getLabel() + '&nbsp;)</span>'
                            ), SHINKEN.OBJECT.NOTIFICATION.CONST.STATUS.INFO, null, 10000 );
                        }
                    }
                    if ( param[ PROPERTY.COMMON.PARAM.PROPERTY_NAME ] === WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.ICON_TYPE.COMPOSED_KEY ) {
                        if ( value_tp_r[ SHINKEN.OBJECT.CONST.PARAM.VALUE ] === WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.ICON_TYPE.OPTIONS.QUALITY_SERVICE_ICON ) {
                            this.setPropertyValue( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE.COMPOSED_KEY, WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE.OPTIONS.CONTEXT_THEN_STATUS );
                        }
                        else {
                            this.setPropertyValue( WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE.COMPOSED_KEY, WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.LEFT_AREA.ICON_TYPE.OPTIONS.QUALITY_SERVICE_ICON );
                        }
                        if ( !avoid_notification ) {
                            SHINKEN.TOOLS.NOTIFICATION.addNotification( SHINKEN.TOOLS.STRING.format( _( "validation.errors.change_auto__duplicate_value_on_property" ),
                                '<span class="shinken-data-user">' + property_right.getLabel() + '</span>&nbsp;<span "shinken-note"> (&nbsp;' + this.getContentByUUID( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.TOP_RIGHT_AREA._KEY )
                                                                                                                                                    .getLabel() + '&nbsp;)</span>',
                                '<span class="shinken-data-user">' + property_left.getLabel() + '</span>&nbsp;<span "shinken-note"> (&nbsp;' + this.getContentByUUID( SHINKEN_PAGE.VISUALFORM.WIDGET.COLLAPSE_FOLDER.LEFT_AREA._KEY )
                                                                                                                                                   .getLabel() + '&nbsp;)</span>'
                            ), SHINKEN.OBJECT.NOTIFICATION.CONST.STATUS.INFO, null, 10000 );
                        }
                    }
                }
                break;
        }
    },
    getInitialDataForPreviewWidget                 : function ( is_default_form ) {
        const layout = is_default_form ?
                       this.getDefaultPreviewWidgetLayout() :
                       SHINKEN.OBJECT.DefaultConfigurationWithOwnPropertyGridPage.prototype.parseDictToDict_withValueKey( this.main_grid_cell.content.layout.getDataForJson( SHINKEN.OBJECT.JSON_EDITOR.FORMAT_DATA.VALUE_AND_DEFAULT ) );
        return {
            "width"  : {
                "value": 15
            },
            "height" : {
                "value": 4
            },
            "content": {
                "type"  : {
                    "value": "weather_widget"
                },
                "layout": {
                    "value": layout
                },
                "item"  : {
                    "value": {
                        "item_uuid": {
                            "value": "010010010"
                        },
                        "item_name": {
                            "value": "Preview_Widget"
                        },
                        "item_type": {
                            "value": "host"
                        }
                    }
                }
            }
        };
    }
};
SHINKEN.OBJECT.GridPageDefaultForm = function ( name, params ) {
    this.init( name, params );
};
SHINKEN.OBJECT.GridPageDefaultForm.prototype = {
    init                : function ( name, params ) {
        this.grid_object = params[ SHINKEN_GRID.CONST.PARAM.EVENT.GRID_OBJECT ];
        this.page_object = params[ SHINKEN_PAGE.CONST.EVENTS.PARAM.PAGE_OBJECT ];
        this.initCommon( name );
        this.initAllContent( params[ SHINKEN.USER_PREFS.PARAM_EVENT.DATA ] );
        this.properties_modified = [];
    },
    initAllContent      : function ( user_prefs ) {
        let prefs = user_prefs.getValueByKey( [this.getName()] );
        this.initWeatherWidgetDefault( prefs );
        this.initTitleWidgetDefault( prefs );
        this.initSeparatorWidgetDefault( prefs );
        this.initPropertiesValues();
    },
    initPropertiesValues: function () {
        let current_property;
        for ( let i = 0, _size_i = this.property_set.getSize(); i < _size_i; i++ ) {
            current_property = this.property_set.getContent( i );
            current_property.doActionAfter( "property_value__set__by_data", { [ PROPERTY.COMMON.PARAM.PROPERTY_VALUE ]: this.grid_object[ SHINKEN_GRID.CONST.PARAM.GRID.LAYOUTS ].getValueForComposedKeyProperty( current_property ) + "" } );
            current_property.setPreviousModificationElement();
        }
    },
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "onchange_in_input_V3_done":
            case "click_on_item_selector_done":
                this.askValidateForm( params );
                break;
            case "change_radio_mode_done":
                this.synchronizationProperty( params, true );
                this.askValidateForm( params );
                break;
            case "undo_last_modification":
            case "redo_last_modification":
                if ( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( SHINKEN.OBJECT.FORMSET.PARAM.FORM_NAME ) !== this.getName() ) {
                    return;
                }
                if ( this.grid_for_preview && params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( SHINKEN_GRID.CONST.PARAM.EVENT.GRID_UUID ) === this.grid_for_preview.getUUID() ) {
                    this.grid_for_preview.doActionAfter( event_name, params );
                    return;
                }
                this.property_set.getContentByUUID( params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT_ELEMENT ].getParamForEvents( PROPERTY.COMMON.PARAM.PROPERTY_NAME ) ).doActionAfterLastModification( event_name, params );
                return;
            case "toggl_collapse_folder__is_open":
                for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
                    this.contents[ i ].doActionAfter( "toggl_collapse_folder__is_open__or__close_others", params );
                }
                this.getController().doActionAfter( "set__user_pref__data", { [ SHINKEN.USER_PREFS.PARAM_EVENT.DATA ]: this.getUserPref() } );
                return;
            case "click_on_button_V3":
                switch ( params[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ] ) {
                    case"change__widget_preview_zone__activity":
                        this.doActionAfter( params[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ], params );
                        return;
                }
                break;
            case "make_validation":
                CONTROLLER.Form.isValid();
                return;
        }
        this.doActionAfterCommon( event_name, params );
    },
    validateForm: function ( params ) {
        const new_params                                    = {};
        new_params[ SHINKEN.OBJECT.FORMSET.PARAM.IS_VALID ] = CONTROLLER.Form.isValid( params );
        
        new_params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ] = new SHINKEN.OBJECT.LastModification();
        new_params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].setModificationType( SHINKEN.OBJECT.CONST.LAST_MODIFICATION.HISTORY.FORM_DEFAULT_VALUE_MODIFICATION );
        new_params[ PROPERTY.COMMON.PARAM.PROPERTY_LIST__COMPOSED_KEY ] = this.properties_modified;
        new_params[ SHINKEN.OBJECT.FORMSET.PARAM.DATA ]                 = this.parseDataForSpecialCase( this.getDataToSave__20241114( SHINKEN.OBJECT.FORM.TYPE_SAVE.VALUE_AND_DEFAULT_FOR_GRID, this.properties_modified ) );
        for ( let i = 0; i < this.properties_modified.length; i++ ) {
            new_params[ SHINKEN.OBJECT.CONST.LAST_MODIFICATION.PARAM.OBJECT ].addSpecific( this.property_set.getContentByUUID( this.properties_modified[ i ] ).getLastModificationElement() );
        }
        
        this.grid_for_preview.doActionAfter( "value__param__configured__from_form__if_needed", new_params );
        
        CONTROLLER.PageController.doActionAfter( "default__param__configured__from_form", new_params );
        return true;
    },
    
    computeValidation__20241125: function ( params ) {
        this.status_validation      = COMPONENT.CONST.STATUS.VALID;
        let current_property;
        const validate_all_property = !params;
        for ( let i = 0, _size_i = this.property_set.getSize(); i < _size_i; i++ ) {
            current_property = this.property_set.getContent( i );
            if ( !validate_all_property && !this.properties_modified.includes( current_property.getName() ) ) {
                continue;
            }
            let parameter_validation = this.getParameterValidation( current_property );
            switch ( parameter_validation.key ) {
                case "height":
                    parameter_validation.updateMaximumValue( this.grid_object[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_Y ].getValue() );
                    break;
                case "width":
                    parameter_validation.updateMaximumValue( this.grid_object[ SHINKEN_GRID.CONST.PARAM.GRID.TILES_MAX_X ].getValue() );
                    break;
            }
            PROPERTY_V2.VALIDATOR.validWithParameter( current_property, parameter_validation, '"' );
        }
    },
    getParameterValidation     : function ( current_property ) {
        if ( WEATHER.CONST.isExternalLinkComposedKey( current_property.getName() ) ) {
            let _composed_key = SHINKEN.TOOLS.STRING.splitAndJoinExceptLastOne( WEATHER.CONST.EXTERNAL_LINKS.PARAM.DEFAULT_LINK.COMPOSED_KEY + "." + current_property.getName(), "." );
            let _key          = SHINKEN.TOOLS.STRING.splitForGetLastOne( current_property.getName(), "." );
            return SHINKEN.TOOLS.DICT.getObjectWithComposedKey( this.page_object, _composed_key ).getValidOwnProperty( _key );
        }
        else {
            const split_composed_key = current_property.getName().split( "." );
            split_composed_key[ 0 ] += "_layout";
            split_composed_key.splice( 0, 0, SHINKEN_GRID.CONST.PARAM.GRID.LAYOUTS );
            let _composed_key = split_composed_key.join( "." );
            return SHINKEN.TOOLS.DICT.getObjectWithComposedKey( this.grid_object, SHINKEN.TOOLS.STRING.splitAndJoinExceptLastOne( _composed_key, "." ) ).getValidOwnProperty( SHINKEN.TOOLS.STRING.splitForGetLastOne( _composed_key, "." ) );
        }
    },
    computeHtmlActions: function () {
    },
    getDefaultPreviewWidgetLayout: function () {
        const default_grid_layout          = this.grid_object.layouts[ WIDGET.CONST.PARAM.LAYOUTS.WEATHER._KEY ].content.layout.getDataForJson( SHINKEN.OBJECT.JSON_EDITOR.FORMAT_DATA.VALUE_AND_DEFAULT );
        const CONST_INFORMATION_TO_DISPLAY = WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY;
        
        default_grid_layout[ CONST_INFORMATION_TO_DISPLAY._KEY ][ CONST_INFORMATION_TO_DISPLAY.SLA_AREA._KEY ][ CONST_INFORMATION_TO_DISPLAY.SLA_AREA.DISPLAYED._KEY ].value             = true;
        default_grid_layout[ CONST_INFORMATION_TO_DISPLAY._KEY ][ CONST_INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA._KEY ][ CONST_INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.DISPLAYED._KEY ].value = true;
        
        return default_grid_layout;
    },
    parseDataForSpecialCase      : function ( data ) {
        var _keys = Object.keys( data );
        var _current_key;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            if ( data[ _current_key ][ SHINKEN.OBJECT.CONST.PARAM.VALUE ] === WIDGET.CONST.PARAM.LAYOUTS.WEATHER.LAYOUT.INFORMATION_TO_DISPLAY.TOP_RIGHT_AREA.ICON_TYPE.OPTIONS.FROM_WEBUI ) {
                data[ _current_key ][ SHINKEN.OBJECT.CONST.PARAM.VALUE ] = this.parseTilesBackgroundValueForPreview( _current_key );
            }
            switch ( _current_key ) {
                case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.WIDTH.COMPOSED_KEY:
                case WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.WIDTH.COMPOSED_KEY:
                case WIDGET.CONST.PARAM.LAYOUTS.TITLE.WIDTH.COMPOSED_KEY:
                    if ( data[ _current_key ][ SHINKEN.OBJECT.CONST.PARAM.VALUE ] !== SHINKEN_GRID.CONST.SPECIAL_VALUE.ALL ) {
                        data[ _current_key ][ SHINKEN.OBJECT.CONST.PARAM.VALUE ] = parseInt( data[ _current_key ][ SHINKEN.OBJECT.CONST.PARAM.VALUE ] );
                    }
                    break;
                case WIDGET.CONST.PARAM.LAYOUTS.WEATHER.HEIGHT.COMPOSED_KEY:
                case WIDGET.CONST.PARAM.LAYOUTS.SEPARATOR.HEIGHT.COMPOSED_KEY:
                case WIDGET.CONST.PARAM.LAYOUTS.TITLE.HEIGHT.COMPOSED_KEY:
                    data[ _current_key ][ SHINKEN.OBJECT.CONST.PARAM.VALUE ] = parseInt( data[ _current_key ][ SHINKEN.OBJECT.CONST.PARAM.VALUE ] );
                    break;
            }
        }
        return data;
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageDefaultForm, SHINKEN.OBJECT.FormSetFromData );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageDefaultForm, SHINKEN.OBJECT.CommonFormInterface );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageDefaultForm, SHINKEN.OBJECT.TitleWidgetFormInterface );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageDefaultForm, SHINKEN.OBJECT.SeparatorWidgetFormInterface );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageDefaultForm, SHINKEN.OBJECT.WeatherWidgetFormInterface );
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageDefaultForm, SHINKEN.OBJECT.ExternalLinkFormInterface );
SHINKEN.OBJECT.GridPageVisualForm           = function ( name ) {
    this.init( name );
};
SHINKEN.OBJECT.GridPageVisualForm.prototype = {
    init  : function ( name ) {
        this.initCommon( name );
        this.initAllContent();
    },
    initAllContent: function () {
        let widget_cf = this.addSpecific( new SHINKEN.OBJECT.CollapseFolderFromData( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS._KEY, _( "form.collapse_folder.label." + SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS._KEY ) ), true );
        
        let widget_modes = this.addSpecificToChild( new SHINKEN.OBJECT.WidgetRadioModes( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES._KEY ), widget_cf );
        widget_modes.add( new SHINKEN.OBJECT.RadioWidgetModeSelect( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_SELECT ) );
        let widget_mode_add = widget_modes.add( new SHINKEN.OBJECT.RadioWidgetModeAdd( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_ADD ) );
        widget_modes.add( new SHINKEN.OBJECT.RadioWidgetModeSpaceCreate( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_CREATE ) );
        widget_modes.add( new SHINKEN.OBJECT.RadioWidgetModeSpaceDelete( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_DELETE ) );
        
        let widget_mode_add_radios = this.addSpecificToChild( new SHINKEN.OBJECT.AddRadioModes( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.ADD_WIDGET.RADIOS._KEY ), widget_mode_add );
        widget_modes.setPhaseDomElement( CONTROLLER.PageController.current_page.getDomElement(), SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES._KEY );
    },
    
    
    computeHtmlActions: function () {
    }
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.GridPageVisualForm, SHINKEN.OBJECT.FormSetFromData );
SHINKEN.OBJECT.WidgetRadioModes           = function ( name ) {
    this.init( name );
};
SHINKEN.OBJECT.WidgetRadioModes.prototype = {
    init: SHINKEN.OBJECT.RadioModes.prototype.init,
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "change_radio_mode":
                if ( param[ SHINKEN.OBJECT.RADIOMODE.PARAM.PARENT_OBJECT ] === SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.ADD_WIDGET.RADIOS._KEY ) {
                    this.getContentByUUID( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_ADD ).doActionAfter( event_name, param );
                    this.doActionAfter( event_name, {
                        [ SHINKEN.OBJECT.RADIOMODE.PARAM.PARENT_OBJECT ]: this.getName(),
                        [ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ]         : SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_ADD
                    } );
                    return;
                }
                CONTROLLER.PageController.doActionAfter( "change_radio_mode_done", param );
                break;
            case "action_for_page_edit_when_object_is_compute":
                this.setPhaseDomElement( param[ SHINKEN_PAGE.CONST.EVENTS.PARAM.PAGE_OBJECT ].dom_element, "widgetEditionMode" );
                this.addSynchronizedPhase( param[ SHINKEN_PAGE.CONST.EVENTS.PARAM.PAGE_OBJECT ].synchronized_phase_with_widget_mode );
                break;
            case "on_key_up":
                let current_key_code = param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].keyCode;
                switch ( current_key_code ) {
                    case SHINKEN.CONST.KEY_CODE.V:
                    case SHINKEN.CONST.KEY_CODE.ESCAPE:
                        param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] = SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_SELECT;
                        break;
                    case SHINKEN.CONST.KEY_CODE.A:
                        if ( this.getCurrentPhase() === SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_ADD ) {
                            this.getContentByUUID( SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_ADD ).doActionAfter( "change_radio_mode_to_next" );
                            return;
                        }
                        param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] = SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.WIDGET_ADD;
                        break;
                    case SHINKEN.CONST.KEY_CODE.C:
                        param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] = SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_CREATE;
                        break;
                    case SHINKEN.CONST.KEY_CODE.S:
                        param[ SHINKEN.OBJECT.RADIOMODE.PARAM.NAME ] = SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES.WIDGET.SPACE_DELETE;
                        break;
                    default:
                        return;
                }
                param[ SHINKEN.OBJECT.RADIOMODE.PARAM.PARENT_OBJECT ] = SHINKEN_PAGE.VISUALFORM.COLLAPSE_FOLDER.WIDGETS.RADIO_MODES._KEY;
                this.doActionAfter( "change_radio_mode", param );
                break;
        }
        this.doActionAfterCommon( event_name, param );
    },
};
SHINKEN.TOOLS.CLASS.addPrototype( SHINKEN.OBJECT.WidgetRadioModes, SHINKEN.OBJECT.RadioModes );
