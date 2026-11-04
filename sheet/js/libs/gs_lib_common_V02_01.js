"use strict";
var GS                           = GS || {};
GS.OBJECT                        = GS.OBJECT || {};
var WINDOW_V2                    = {};
WINDOW_V2.CONST                  = {
    CLASS: {
        WINDOW_GROUP  : "gs-window-group-V2",
        WINDOW_TAB    : "gs-window-element-V2",
        WINDOW_TARGETS: "gs-window-targets-V2"
    },
    ID   : {
        WINDOW_TAB: "id-gs-window-V2-"
    },
    PARAM: {
        WINDOW_OBJECT    : "window_object",
        WINDOW_NAME      : "window_name",
        WINDOW_GROUP_NAME: "window_group_name",
        UPDATE_URL       : "update_url"
    }
};
WINDOW_V2.ElementGroup           = function ( group_name ) {
    this.init( group_name );
};
WINDOW_V2.ElementGroup.prototype = {
    init                      : function ( group_name ) {
        this.initCommon( group_name );
    },
    initCommon                : function ( group_name ) {
        this.initCounterCommon();
        this.initContents();
        this.initName( group_name );
        this.initPhase();
        this.active_window = null;
        MANAGER.__instance_window_distributor.setParentWindow( this.name, this );
    },
    initCounterCommon         : function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    initName                  : function ( group_name ) {
        this.name = group_name || SERVICE.STRING.buildUUID();
        this.addParamForEvents( WINDOW_V2.CONST.PARAM.WINDOW_GROUP_NAME, this.name );
    },
    doActionAfter             : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon       : function ( event_name, param ) {
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
        this.doActionAfter( "set_active_window", { [ WINDOW_V2.CONST.PARAM.WINDOW_NAME ]: window_name } );
    },
    getActiveWindow           : function () {
        if ( !this.active_window ) {
            for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
                if ( this.contents[ i ].isPhase( GS.OBJECT.CONST.PHASE.RUNNING ) ) {
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
    getDomElementTargets      : function () {
        return this.dom_element_targets;
    },
    pulsateElementIfNotActive : function ( window_name ) {
        if ( this.getActiveWindow().getName() !== window_name ) {
            this.getActiveWindow().pulsate();
        }
    },
    getDataToSave             : function () {
        return this.getActiveWindow().getDataToSave();
    },
    getUrlToSave              : function () {
        return this.getActiveWindow().getUrlToSave();
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementGroup, GS.OBJECT.CounterInterfaceWithGsObjectContainer );
GS.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementGroup, GS.OBJECT.PhaseInterface );
WINDOW_V2.Element           = function ( window_name, parent_name ) {
    this.__class_name__ = "WINDOW_V2.Element";
    this.init( window_name, parent_name );
};
WINDOW_V2.Element.prototype = {
    init                      : function ( window_name, parent_name ) {
        this.initCommon( window_name, parent_name );
    },
    initCommon                : function ( window_name, parent_name ) {
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
    initCounterCommon         : function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    initController            : function () {
        let controller = this.getController_20240426();
        if ( controller ) {
            controller.init();
        }
    },
    doActionAfter             : function ( event_name, param ) {
        this.doActionAfterCommon( event_name, param );
    },
    doActionAfterCommon       : function ( event_name, param ) {
        switch ( event_name ) {
            case "compute_html_done":
                this.setPhaseDomElement( this.getDomElement() );
                break;
            case "init_controller":
                this.initController();
                break;
        }
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
            this.setPhase( GS.OBJECT.CONST.PHASE.RUNNING );
            return true;
        }
        else {
            this.setPhaseIfPhase( GS.OBJECT.CONST.PHASE.STOPPING, GS.OBJECT.CONST.PHASE.RUNNING );
        }
        return false;
    },
    isClickable               : function () {
        var current_phase = this.getCurrentPhase();
        switch ( current_phase ) {
            case GS.OBJECT.CONST.PHASE.RUNNING:
            case GS.OBJECT.CONST.PHASE.HIDDEN_TO_STRING:
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
    setContentDomElementTarget: function ( to_set ) {
        this.content_dom_element_target = to_set;
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    callbackForPhase          : function () {
        var current = this.getCurrentPhase();
        if ( !this.dom_element_target ) {
            return;
        }
        switch ( current ) {
            case GS.OBJECT.CONST.PHASE.RUNNING:
                this.dom_element_target.classList.remove( "gs-hidden" );
                break;
            case GS.OBJECT.CONST.PHASE.STOPPING:
                this.dom_element_target.classList.add( "gs-hidden" );
                break;
        }
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW_V2.Element, GS.OBJECT.CounterInterfaceV2 );
GS.TOOLS.CLASS.addPrototype( WINDOW_V2.Element, GS.OBJECT.PhaseInterface );
GS.TOOLS.CLASS.addPrototype( WINDOW_V2.Element, GS.OBJECT.GsObjectHtml );
WINDOW_V2.ElementFromData           = function ( window_name, parent_name ) {
    this.__class_name__ = 'WINDOW_V2.ElementFromData';
    this.initSpecific( window_name, parent_name );
};
WINDOW_V2.ElementFromData.prototype = {
    init             : WINDOW_V2.Element.prototype.init,
    initSpecific     : function ( window_name, parent_name, label_name ) {
        this.label_name = label_name || "";
        this.init( window_name, parent_name );
        this.label = new COMPONENT.LabelFromData( this.label_name || this.getName() );
    },
    getMainClass     : function () {
        return WINDOW_V2.CONST.CLASS.WINDOW_TAB + " flex-layout-inline-center-h-v gs-user-select-none";
    },
    computeHtml      : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", {
            "class"                : this.getMainClass(),
            "id"                   : this.getUUID(),
            "data-group-name"      : this.getParentName(),
            "data-name"            : this.getName(),
            "data-visibility-state": this.getVisibilityState()
        } ) );
        this.main_div_dom_element = this.addDomElement( SERVICE.DOM.createElement( "div", { "class": "gs-div-tab flex-layout-center-h-v" } ) );
        SERVICE.DOM.addElementTo( this.getLabelCellHtml(), this.main_div_dom_element );
        this.doActionAfter( "compute_html_done" );
        this.computeHtml_tooltip();
        this.computeHtmlTarget();
    },
    getLabelCellHtml : function () {
        this.label.computeHtml();
        var _to_return = this.label.getDomElement();
        this.addCounterComputeHtmlIfExist( GS.OBJECT.COUNTER_V2_CONST.TYPE.TOTAL, _to_return );
        this.addCounterComputeHtmlIfExist( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, _to_return );
        this.addCounterComputeHtmlIfExist( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, _to_return );
        return _to_return;
    },
    computeHtmlTarget: function () {
        if ( this.dom_element_target ) {
            return;
        }
        var _class = "gs-tab-pane property-tab-pane gs-prop-table gs-parent-tab-id-parent";
        if ( !this.isPhase( GS.OBJECT.CONST.PHASE.RUNNING ) ) {
            _class += " gs-hidden";
        }
        this.dom_element_target = SERVICE.DOM.createElement( "div", { "class": _class, "id": this.getUUID() + "-target", "data-name": this.getName() } );
        if ( this.content_dom_element_target ) {
            SERVICE.DOM.addElementTo( this.content_dom_element_target, this.dom_element_target );
        }
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementFromData, WINDOW_V2.Element );
WINDOW_V2.ElementGroupFromData           = function ( group_name ) {
    this.init( group_name );
};
WINDOW_V2.ElementGroupFromData.prototype = {
    init               : WINDOW_V2.ElementGroup.prototype.init,
    initWithData       : function ( data_windows ) {
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
        
        this.setDomElement( SERVICE.DOM.createElement( "div", this.getMainAttribute() ) );
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
        this.dom_element_targets = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { "class": WINDOW_V2.CONST.CLASS.WINDOW_TARGETS } ), dom_parent );
        for ( var i = 0, _size_i = this.contents.length; i < _size_i; i++ ) {
            this.contents[ i ].computeHtmlTarget();
            SERVICE.DOM.addElementTo( this.contents[ i ].dom_element_target, this.dom_element_targets );
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
    getEventManager    : function () {
        return "MANAGER.EventManagerV2.clickOnWindowNavigation(event, " + this.parseParamForEventsToHtml() + ")";
    },
    getMainClass       : function () {
        var _to_return = WINDOW_V2.CONST.CLASS.WINDOW_GROUP + " " + this.getClass();
        if ( this.controller_name ) {
            _to_return += " gs-parent-event-listener";
        }
        return _to_return;
    }
};
GS.TOOLS.CLASS.addPrototype( WINDOW_V2.ElementGroupFromData, WINDOW_V2.ElementGroup );
MANAGER.EVENT_MANAGER_V2 = {
    PARAM: {
        EVENT           : 'event',
        EVENT_NAME      : 'event_name',
        STOP_PROPAGATION: 'stop_propagation'
    }
};
MANAGER.EventManagerV2   = {
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
    mouseMove              : function ( event, controller_name ) {
        let param                                       = {};
        param[ CONTROLLER.CONST.CONTROLLER_NAME_LABEL ] = controller_name;
        param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ]   = event;
        MANAGER.EventManagerV2.dispatch( event, "do", "mouse_move", param );
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
    clickItemSelector      : function ( event, property_name, selector_name, item_name ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_item_selector", property_name, selector_name, item_name );
    },
    clickItemSelector_V3   : function ( event, param ) {
        MANAGER.EventManagerV2.dispatch( event, "do", "click_on_item_selector_V3", param );
    },
    clickOnWindowNavigation: function ( event, param ) {
        if ( !param[ WINDOW_V2.CONST.PARAM.WINDOW_NAME ] ) {
            var _nav_tab = SERVICE.DOM.findParentElementWithClass( event.target, WINDOW_V2.CONST.CLASS.WINDOW_TAB, 10 );
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
            GS.HIGHWAY.goToElementTab( param[ WINDOW_V2.CONST.PARAM.WINDOW_NAME ] );
        }
        param[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT_NAME ] = "click_on__window_navigation__done";
        MANAGER.EventManagerV2.dispatch( event, "do", "do_action_after", param );
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
        if ( SERVICE.DOM.findParentElementWithClass( event.srcElement, "gs-button-V3" ) && SERVICE.DOM.findParentElementWithClass( event.srcElement, "gs-button-V3" ).classList.contains( "gs-disabled" ) ) {
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
                        console.log( "[EventManagerV2 - dispatch]", "[UNKNOWN EVENT]", event_name );
                }
                break;
        }
    }
};

/**
 * Single select with HTML options: container + selector header + option
 * list, open state in the data-state-selector dataset. Every option may
 * carry an info link and a choice event: the option values never travel
 * inline in the handlers (the labels may carry apostrophes), they are read
 * from the data-value attribute at click time.
 *
 * @class COMPONENT.SingleSelectFromData
 * @extends GS.OBJECT.GsObjectHtml
 */
COMPONENT.SingleSelectFromData           = function () {
    this.init();
};
COMPONENT.SingleSelectFromData.prototype = {
    init: function () {
        this.options           = [];
        this.selected_name     = "";
        this.default_label     = "--";
        this.toggle_event_name = "click_on_selector";
        this.click_event_name  = "click_on_item_selector";
        this.info_event_name   = null;
        this.filter_enter_event_name = null;
        this.info_params       = {};
        this.info_value_key    = "";
        this.dom_element       = null;
        this.dom_header        = null;
        this.dom_list          = null;
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "click_on_selector":
                this.toggleState();
                return;
        }
    },
    // Plugs the askHidePopup chain: a click outside closes the list
    hidePopup: function () {
        SERVICE.DOM.setDataSet( this.dom_element, "stateSelector", 0 );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setToggleEventName: function ( to_set ) {
        this.toggle_event_name = to_set;
    },
    setClickEventName : function ( to_set ) {
        this.click_event_name = to_set;
    },
    // Enter key of the filter line: when the consumer configures an event,
    // EVERY Enter dispatches it with raw filter value (the consumer decides
    // what becomes of it); without configuration, Enter validates the
    // option matching the filter generically
    setFilterEnterEventName: function ( to_set ) {
        this.filter_enter_event_name = to_set;
    },
    setInfoEvent      : function ( event_name, params, value_param_key ) {
        this.info_event_name = event_name;
        this.info_params     = params;
        this.info_value_key  = value_param_key;
    },
    getValue          : function () {
        return this.selected_name;
    },
    toggleState       : function () {
        let to_set = this.dom_element.dataset.stateSelector === "1" ? 0 : 1;
        SERVICE.DOM.setDataSet( this.dom_element, "stateSelector", to_set );
        // The filter line takes the focus on opening: the keyboard drives
        // the list right away
        if ( to_set === 1 && this.dom_list ) {
            let filter_dom = this.dom_list.querySelector( ".single-select-filter" );
            if ( filter_dom ) {
                filter_dom.focus();
            }
        }
        return to_set;
    },
    setSelectedName   : function ( to_set ) {
        this.selected_name = to_set || "";
        this.computeTitle();
        this._refreshSelectedOptions();
    },
    //********************************************  DATA   **************************************************//
    setOptions: function ( options_data ) {
        this.options = [];
        for ( let i = 0, _size_i = options_data.length; i < _size_i; i++ ) {
            this.options.push( {
                "name" : options_data[ i ].name,
                "label": options_data[ i ].label !== undefined ? options_data[ i ].label : options_data[ i ].name
            } );
        }
        if ( this.dom_list ) {
            this._computeOptionsHtml();
        }
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.dom_element = SERVICE.DOM.createElement( "div", { class: "single-select-container" } );
        this.dom_header  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "single-select-selector",
            onclick: this.getDoActionAfterEvent( this.toggle_event_name )
        } ), this.dom_element );
        this.computeTitle();
        this.dom_list = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "single-select-list" } ), this.dom_element );
        this._computeOptionsHtml();
    },
    computeTitle: function () {
        if ( !this.dom_header ) {
            return;
        }
        SERVICE.DOM.empty( this.dom_header );
        // A value picked OUTSIDE the options (the raw filter text by Enter)
        // still displays: the header shows the selected name itself when no
        // option carries it
        let label = this.selected_name || this.default_label;
        for ( let i = 0, _size_i = this.options.length; i < _size_i; i++ ) {
            if ( this.options[ i ].name === this.selected_name ) {
                label = this.options[ i ].label;
            }
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "single-select-selector-label" }, label ), this.dom_header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "single-select-selector-chevron" } ), this.dom_header );
    },
    _computeOptionsHtml: function () {
        SERVICE.DOM.empty( this.dom_list );
        // The filter line first (shinken-list STRING_INPUT filter): typing
        // hides the options not matching, the empty one always stays
        let filter_keydown = "COMPONENT.SingleSelectFromData.filterKeydown(event)";
        if ( this.filter_enter_event_name ) {
            filter_keydown = "if(event.key==='Enter'){MANAGER.EventManagerV2.doActionAfter(event,'" + this.filter_enter_event_name + "'," + this._parseParamsHtml( "'param__filter_value':this.value" ) + ")}";
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class      : "single-select-filter",
            placeholder: "Filtrer…",
            onkeyup    : "COMPONENT.SingleSelectFromData.filterOptions(event)",
            onkeydown  : filter_keydown
        } ), this.dom_list );
        // The empty option first: choosing it clears the selection
        let option_names = [ "" ];
        for ( let i = 0, _size_i = this.options.length; i < _size_i; i++ ) {
            option_names.push( this.options[ i ].name );
        }
        for ( let i = 0, _size_i = option_names.length; i < _size_i; i++ ) {
            let option_name = option_names[ i ];
            let option      = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class      : "single-select-option" + ( option_name === this.selected_name ? " selected" : "" ),
                "data-value": option_name,
                onclick    : "MANAGER.EventManagerV2.doActionAfter(event,'" + this.click_event_name + "'," + this._parseParamsHtml( "'param__choice_value':this.getAttribute('data-value')" ) + ")"
            } ), this.dom_list );
            let option_data = null;
            for ( let o = 0, _size_o = this.options.length; o < _size_o; o++ ) {
                if ( this.options[ o ].name === option_name ) {
                    option_data = this.options[ o ];
                }
            }
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "single-select-option-label" }, option_data ? option_data.label : "--" ), option );
            if ( option_name && this.info_event_name ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                    class  : "level-up-row-info gs-link-information",
                    onclick: "MANAGER.EventManagerV2.doActionAfter(event,'" + this.info_event_name + "'," + this._parseParamsHtml( "'" + this.info_value_key + "':this.parentNode.getAttribute('data-value')" ) + ")"
                }, "?" ), option );
            }
        }
    },
    _refreshSelectedOptions: function () {
        if ( !this.dom_list ) {
            return;
        }
        let option_elements = this.dom_list.querySelectorAll( ".single-select-option" );
        for ( let i = 0, _size_i = option_elements.length; i < _size_i; i++ ) {
            if ( option_elements[ i ].getAttribute( "data-value" ) === this.selected_name ) {
                option_elements[ i ].classList.add( "selected" );
            }
            else {
                option_elements[ i ].classList.remove( "selected" );
            }
        }
    },
    //********************************************  DATA   **************************************************//
    // The params of the component plus one read expression: the values of
    // the options never travel inline — they are read from the data-value
    // attribute at click time
    _parseParamsHtml: function ( extra_read ) {
        let params    = this.getParamForEvents();
        let _keys     = Object.keys( params );
        let info_keys = Object.keys( this.info_params );
        let parts     = [];
        for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
            parts.push( "'" + _keys[ i ] + "':'" + params[ _keys[ i ] ] + "'" );
        }
        for ( let i = 0, _size_i = info_keys.length; i < _size_i; i++ ) {
            parts.push( "'" + info_keys[ i ] + "':'" + this.info_params[ info_keys[ i ] ] + "'" );
        }
        if ( extra_read ) {
            parts.push( extra_read );
        }
        return "{" + parts.join( "," ) + "}";
    }
};

GS.TOOLS.CLASS.addPrototype( COMPONENT.SingleSelectFromData, GS.OBJECT.GsObjectHtml );

// Presentation-only filter of the opened list: the input reads its own
// value at event time and hides the non-matching options of its list —
// nothing travels, the state lives in the DOM
COMPONENT.SingleSelectFromData.filterOptions = function ( event ) {
    let filter_value = event.target.value.toLowerCase();
    let options      = event.target.parentNode.querySelectorAll( ".single-select-option" );
    for ( let i = 0, _size_i = options.length; i < _size_i; i++ ) {
        let option_value = options[ i ].getAttribute( "data-value" ).toLowerCase();
        options[ i ].style.display = ( !option_value || option_value.indexOf( filter_value ) !== -1 ) ? "" : "none";
    }
};

// Enter on the filter line, generic behavior (no configured filter event):
// an option matches the filter (exact, or the only one visible) then it is
// clicked — the whole standard flow follows; otherwise nothing
COMPONENT.SingleSelectFromData.filterKeydown = function ( event ) {
    if ( event.key !== "Enter" ) {
        return;
    }
    let filter_value = event.target.value;
    if ( !filter_value ) {
        return;
    }
    let options = event.target.parentNode.querySelectorAll( ".single-select-option" );
    let visible  = [];
    for ( let i = 0, _size_i = options.length; i < _size_i; i++ ) {
        let option_value = options[ i ].getAttribute( "data-value" );
        if ( !option_value ) {
            continue;
        }
        if ( option_value.toLowerCase() === filter_value.toLowerCase() ) {
            options[ i ].click();
            return;
        }
        if ( options[ i ].style.display !== "none" ) {
            visible.push( options[ i ] );
        }
    }
    if ( visible.length === 1 ) {
        visible[ 0 ].click();
    }
};
