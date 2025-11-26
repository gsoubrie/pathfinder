"use strict";
SERVICE.DOM = (function ( self ) {
    self.STYLE                                     = {
        LEFT            : "left",
        RIGHT           : "right",
        TOP             : "top",
        BOTTOM          : "bottom",
        HEIGHT          : "height",
        MAX_HEIGHT      : "max-height",
        MAX_WIDTH       : "max-width",
        LINE_HEIGHT     : "line-height",
        WIDTH           : "width",
        Z_INDEX         : "z-index",
        DISPLAY         : "display",
        POSITION        : "position",
        BACKGROUND_COLOR: "background-color",
        PADDING         : "padding",
        MARGIN          : "margin",
        BORDER_RADIUS   : "border-radius",
        FONT_SIZE       : "font-size"
    };
    self.createElement                             = function ( tag, attributes, innerHTML ) {
        const toReturn = document.createElement( tag );
        if ( attributes ) {
            const keys = Object.keys( attributes );
            const size = keys.length;
            for ( var i = 0; i < size; i++ ) {
                toReturn.setAttribute( keys[ i ], attributes[ keys[ i ] ] );
            }
        }
        if ( innerHTML !== undefined && innerHTML !== null ) {
            toReturn.innerHTML = innerHTML;
        }
        return toReturn;
    };
    self.removeElement                             = function ( element ) {
        if ( !element ) {
            return;
        }
        const parent = element.parentNode;
        
        try {
            return parent.removeChild( element );
        }
        catch ( e ) {
            return false;
        }
    };
    self.addElementTo                              = function ( element, parent ) {
        if ( parent && element ) {
            parent.appendChild( element );
            return element;
        }
        return null;
    };
    self.findParentElementWithDataSet              = function ( element, key, deepLimit ) {
        if ( !element || deepLimit < 0 ) {
            return null;
        }
        if ( self.hasKeyInDataSet( element, key ) ) {
            return element;
        }
        deepLimit--;
        return this.findParentElementWithDataSet( element.parentElement, key, deepLimit );
    };
    self.findParentElementWithClass                = function ( element, class_tag, deepLimit, data_set_name, data_set_value ) {
        if ( !element || deepLimit < 0 ) {
            return null;
        }
        if ( element.classList.contains( class_tag ) ) {
            if ( !data_set_name ) {
                return element;
            }
            else {
                if ( element.dataset[ data_set_name ] === data_set_value ) {
                    return element;
                }
            }
        }
        deepLimit--;
        return this.findParentElementWithClass( element.parentElement, class_tag, deepLimit, data_set_name, data_set_value );
    };
    self.findParentElementWithTagName              = function ( element, tagName, deepLimit ) {
        if ( !element || deepLimit < 0 ) {
            return null;
        }
        if ( element.tagName === tagName ) {
            return element;
        }
        deepLimit--;
        return this.findParentElementWithTagName( element.parentElement, tagName, deepLimit );
    };
    self.findParentElementWithID                   = function ( element, id, deepLimit ) {
        if ( !element || deepLimit < 0 ) {
            return null;
        }
        if ( element.id === id ) {
            return element;
        }
        deepLimit--;
        return this.findParentElementWithID( element.parentElement, id, deepLimit );
    };
    self.findParentElementByClassWithClassExcluded = function ( element, class_tag, class_exclude, deepLimit ) {
        if ( deepLimit < 0 || !element ) {
            return null;
        }
        if ( element.classList.contains( class_exclude ) ) {
            return null;
        }
        if ( element.classList.contains( class_tag ) ) {
            return element;
        }
        deepLimit--;
        return this.findParentElementByClassWithClassExcluded( element.parentElement, class_tag, class_exclude, deepLimit );
    };
    self.querySelectorAll                          = function ( dom_element, css_selector ) {
        return dom_element.querySelectorAll( css_selector );
    };
    self.findChildWithCssSelector                  = function ( dom_element, css_selector ) {
        return dom_element.querySelector( css_selector );
    };
    self.isExisting                                = function ( dom_element ) {
        const elements = document.querySelectorAll( self.getSelector( dom_element ) );
        for ( let i = 0, _size_i = elements.length; i < _size_i; i++ ) {
            if ( elements[ i ] === dom_element ) {
                return true;
            }
        }
        return false;
    };
    self.isInDom                                   = function ( dom_element ) {
        return dom_element.getRootNode
               ? dom_element.getRootNode( { composed: true } ) === document
               : document.body.contains( dom_element );
    };
    self.setPageTitle                              = function ( to_set ) {
        document.title = to_set;
    };
    self.hasKeyInDataSet                           = function ( element, key ) {
        return typeof element.dataset[ key ] !== "undefined";
    };
    self.hasKeyInDataSetAndKeyNotEmpty             = function ( element, key ) {
        return self.hasKeyInDataSet( element, key ) && element.dataset[ key ];
    };
    
    self.createElement                                     = function ( tag, attributes, innerHTML ) {
        const toReturn = document.createElement( tag );
        if ( attributes ) {
            const keys = Object.keys( attributes );
            const size = keys.length;
            for ( let i = 0; i < size; i++ ) {
                toReturn.setAttribute( keys[ i ], attributes[ keys[ i ] ] );
            }
        }
        if ( innerHTML !== undefined && innerHTML !== null ) {
            toReturn.innerHTML = innerHTML;
        }
        return toReturn;
    };
    self.createTextNode                                    = function ( text ) {
        return document.createTextNode( text );
    };
    self.cloneElement                                      = function ( dom_element_to_clone, attributes ) {
        const _to_return = dom_element_to_clone.cloneNode( true );
        if ( attributes ) {
            const keys = Object.keys( attributes );
            const size = keys.length;
            for ( let i = 0; i < size; i++ ) {
                _to_return.setAttribute( keys[ i ], attributes[ keys[ i ] ] );
            }
        }
        return _to_return;
    };
    self.addTooltip                                        = function ( element, attributes, on_mouse_enter ) {
        if ( !attributes ) {
            return;
        }
        element.setAttribute( "onmouseenter", on_mouse_enter || "SHINKEN_TOOLTIP.showTooltip(this)" );
        element.setAttribute( "onmouseleave", "SHINKEN_TOOLTIP.hideTooltip()" );
        const _keys = Object.keys( attributes );
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            element.setAttribute( _keys[ i ], attributes[ _keys[ i ] ] );
        }
        return element;
    };
    self.removeTooltip                                     = function ( element ) {
        element.setAttribute( "onmouseenter", "" );
        element.setAttribute( "onmouseleave", "" );
    };
    self.removeElement                                     = function ( element ) {
        if ( !element ) {
            return;
        }
        const parent = element.parentNode;
        try {
            return parent.removeChild( element );
        }
        catch ( e ) {
            return false;
        }
    };
    self.removeParentIfHasClassOrElement                   = function ( element, class_to_test ) {
        if ( !element ) {
            return;
        }
        const parent = element.parentNode;
        if ( !parent ) {
            return;
        }
        
        if ( parent.classList.contains( class_to_test ) ) {
            const _grand_parent = parent.parentNode;
            if ( !_grand_parent ) {
                return;
            }
            _grand_parent.removeChild( parent );
        }
        
        return parent.removeChild( element );
    };
    self.getInnerText                                      = function ( element ) {
        if ( !element ) {
            return;
        }
        return element.innerText.trim();
    };
    self.toggleClass                                       = function ( element, to_toggle ) {
        if ( element.classList.contains( to_toggle ) ) {
            element.classList.remove( to_toggle );
            return false;
        }
        else {
            element.classList.add( to_toggle );
            return true;
        }
    };
    self.removeElementIfHasClass                           = function ( element, class_to_test ) {
        if ( !element ) {
            return;
        }
        if ( !element.classList.contains( class_to_test ) ) {
            return false;
        }
        const parent = element.parentNode;
        return parent.removeChild( element );
    };
    self.addElementWithIndex                               = function ( element, parent, index ) {
        if ( !index ) {
            index = 0;
        }
        if ( index >= parent.children.length ) {
            parent.appendChild( element );
        }
        else {
            parent.insertBefore( element, parent.children[ index ] );
        }
    };
    self.addElementAtIndex                                 = function ( element, parent, index ) {
        if ( !parent || !element ) {
            return;
        }
        if ( !index ) {
            index = 0;
        }
        if ( parent.childElementCount <= index ) {
            return self.addElementTo( element, parent );
        }
        else {
            self.insertElementBefore( parent.children[ index ], element );
        }
        return element;
    };
    self.addAllChildrenTo                                  = function ( element_with_children, parent ) {
        if ( parent && element_with_children ) {
            const _children = element_with_children.children;
            for ( let i = 0, _size_i = _children.length; i < _size_i; i++ ) {
                self.addElementTo( _children[ i ], parent );
            }
            parent.appendChild( element_with_children );
        }
        
    };
    self.addElementTo                                      = function ( element, parent ) {
        if ( parent && element ) {
            parent.appendChild( element );
            return element;
        }
        return null;
    };
    self.addElementToAfterEmpty                            = function ( element, parent ) {
        self.empty( parent );
        self.addElementTo( element, parent );
    };
    self.addElementAfterTo                                 = function ( element, target ) {
        const _next = target.nextSibling;
        if ( _next ) {
            target.parentNode.insertBefore( element, _next );
        }
        else {
            self.addElementTo( element, target.parentNode );
        }
    };
    self.addElementBeforeToAfterEmpty                      = function ( element, target ) {
        self.empty( target );
        target.parentNode.insertBefore( element, target );
        
    };
    self.switchElementParent                               = function ( element_1, element_2 ) {
        if ( !element_1 || !element_2 ) {
            return;
        }
        const parent_1 = element_1.parentNode;
        const parent_2 = element_2.parentNode;
        
        parent_1.removeChild( element_1 );
        parent_2.removeChild( element_2 );
        
        parent_1.appendChild( element_2 );
        parent_2.appendChild( element_1 );
    };
    self.insertElementBefore                               = function ( element_existing, element_to_insert ) {
        if ( !element_existing || !element_to_insert ) {
            return;
        }
        const _parent = element_existing.parentNode;
        _parent.insertBefore( element_to_insert, element_existing );
    };
    self.getPercentCompareToWindowHeight                   = function ( value, forbid_negative_value ) {
        var _to_return = (value * 100) / window.innerHeight;
        if ( forbid_negative_value && _to_return < 0 ) {
            _to_return = 0;
        }
        return _to_return + "%";
    };
    self.getPercentCompareToWindowWidth                    = function ( value, forbid_negative_value ) {
        var _to_return = (value * 100) / window.innerWidth;
        if ( forbid_negative_value && _to_return < 0 ) {
            _to_return = 0;
        }
        return _to_return + "%";
    };
    self.setDataSet                                        = function ( element, data_name, value ) {
        if ( !element ) {
            return;
        }
        element.dataset[ data_name ] = value;
    };
    self.querySelectorAllWithData                          = function ( css_selector, data_name, dom_element ) {
        dom_element    = dom_element || document;
        var _all_doms  = dom_element.querySelectorAll( css_selector );
        var _to_return = [];
        for ( var i = 0, _size_i = _all_doms.length; i < _size_i; i++ ) {
            if ( _all_doms[ i ].dataset[ data_name ] ) {
                _to_return.push( _all_doms[ i ] );
            }
        }
        return _to_return;
    };
    self.addControllerAnchor                               = function ( dom_element, controller_name ) {
        dom_element.classList.add( "gs-parent-event-listener" );
        dom_element.dataset.controller = controller_name;
    };
    self.computedWidthClass                                = function ( width ) {
        var _width_compute = Math.floor( width / 50 );
        return "gs-width-for-responsive-" + _width_compute * 50;
    };
    self.askAddClass                                       = function ( element, to_add, time_out ) {
        if ( !element ) {
            return;
        }
        element.classList.add( to_add );
        if ( time_out ) {
            setTimeout( function () {
                element.classList.remove( to_add );
            }, time_out );
        }
    };
    self.addClasses                                        = function ( dom_element, class_to_add ) {
        if ( !dom_element || !class_to_add ) {
            return;
        }
        if ( typeof class_to_add === "string" ) {
            class_to_add = class_to_add.trim().split( " " );
        }
        for ( var i = 0, _size_i = class_to_add.length; i < _size_i; i++ ) {
            dom_element.classList.add( class_to_add[ i ] );
        }
    };
    self.removeClasses                                     = function ( dom_element, class_to_remove ) {
        if ( !dom_element ) {
            return;
        }
        if ( typeof class_to_remove === "string" ) {
            class_to_remove = class_to_remove.split( " " );
        }
        for ( var i = 0, _size_i = class_to_remove.length; i < _size_i; i++ ) {
            dom_element.classList.remove( class_to_remove[ i ] );
        }
    };
    self.addOrRemoveClasses                                = function ( dom_element, boolean, _class ) {
        boolean ? self.addClasses( dom_element, _class ) : self.removeClasses( dom_element, _class );
    };
    self.applySiblingSettings                              = function ( dom_element, dom_element_ref ) {
        dom_element.className = dom_element_ref.className;
    };
    self.getComputedStyle                                  = function ( dom_element, key ) {
        if ( !dom_element ) {
            return {};
        }
        var _to_return = getComputedStyle( dom_element );
        if ( key ) {
            _to_return = _to_return[ key ];
            if ( SERVICE.STRING.endsWith( _to_return, "px" ) ) {
                _to_return = parseInt( _to_return );
            }
        }
        return _to_return;
    };
    self.getComputedStyles                                 = function ( dom_element, keys ) {
        if ( !keys || !dom_element ) {
            return self.getComputedStyle( dom_element );
        }
        var _computed  = self.getComputedStyle( dom_element );
        var _to_return = {};
        var _to_add;
        for ( var i = 0, _size_i = keys.length; i < _size_i; i++ ) {
            _to_add = _computed[ keys[ i ] ];
            if ( SERVICE.STRING.endsWith( _to_add, "px" ) ) {
                _to_add = parseInt( _to_add );
            }
            _to_return[ keys[ i ] ] = _to_add;
        }
        return _to_return;
    };
    self.cleanAllStyles                                    = function ( dom_element ) {
        dom_element.removeAttribute( "style" );
    };
    self.attributeStyleToDict                              = function ( dom_element ) {
        var attribute_style = dom_element.getAttribute( "style" );
        var _to_return      = {};
        var split_1         = attribute_style.split( ";" );
        for ( var i = 0, _size_i = split_1.length; i < _size_i; i++ ) {
            if ( !split_1[ i ] ) {
                continue;
            }
            var split_2                = split_1[ i ].split( ":" );
            _to_return[ split_2[ 0 ] ] = split_2[ 1 ];
        }
        return _to_return;
    };
    self.cleanAllStyles                                    = function ( dom_element ) {
        dom_element.removeAttribute( "style" );
    };
    self.setStyle                                          = function ( dom_element, key, value ) {
        if ( !dom_element || !key ) {
            return;
        }
        if ( value !== "" ) {
            dom_element.style[ key ] = self._parseStyle( key, value );
        }
        else {
            self.removeStyle( dom_element, key );
        }
    };
    self._parseStyle                                       = function ( key, value ) {
        switch ( key ) {
            case self.STYLE.LEFT:
            case self.STYLE.TOP:
            case self.STYLE.HEIGHT:
            case self.STYLE.WIDTH:
            case self.STYLE.LINE_HEIGHT:
            case self.STYLE.MAX_HEIGHT:
            case self.STYLE.MAX_WIDTH:
            case self.STYLE.BORDER_RADIUS:
                if ( !isNaN( value ) ) {
                    value = value + "px";
                }
                break;
            default:
                break;
        }
        return value;
    };
    self.setStyles                                         = function ( dom_element, styles ) {
        var keys = Object.keys( styles );
        for ( var i = 0, size = keys.length; i < size; i++ ) {
            self.setStyle( dom_element, keys[ i ], styles[ keys[ i ] ] );
        }
    };
    self.removeStyles                                      = function ( dom_element, styles ) {
        for ( var i = 0, size = styles.length; i < size; i++ ) {
            self.removeStyle( dom_element, styles[ i ] );
        }
    };
    self.removeStyle                                       = function ( dom_element, style ) {
        if ( !dom_element ) {
            return;
        }
        dom_element.style.removeProperty( style );
    };
    self.styleToHtml                                       = function ( styles ) {
        var _keys      = Object.keys( styles );
        var _current_key;
        var _to_return = "";
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            _to_return += _current_key + ":" + self._parseStyle( _current_key, styles[ _current_key ] ) + ";";
        }
        return _to_return;
    };
    self.setStyleInHard                                    = function ( dom_element, style ) {
        self.removeStyle( dom_element, style );
        var _hard_value = self.getBoundingClientRect( dom_element, style );
        self.setStyle( dom_element, style, _hard_value );
    };
    self.ChangeUserSelect                                  = function ( dom_element, add_or_remove ) {
        if ( !add_or_remove ) {
            SERVICE.DOM.setStyles( dom_element, { userSelect: "none" } );
            for ( let _dom_element of dom_element.querySelectorAll( ".gs-user-select-text" ) ) {
                _dom_element.style.cssText += "user-select: none !important;";
            }
        }
        else {
            SERVICE.DOM.setStyles( dom_element, { userSelect: "" } );
            for ( let _dom_element of dom_element.querySelectorAll( ".gs-user-select-text" ) ) {
                SERVICE.DOM.setStyles( _dom_element, { userSelect: "" } );
            }
        }
    };
    self.getBoundingClientRect                             = function ( dom_element, key ) {
        if ( !dom_element ) {
            return;
        }
        var _rect = dom_element.getBoundingClientRect();
        if ( !key ) {
            return _rect;
        }
        return parseInt( _rect[ key ] );
    };
    self.hasScrollHeight                                   = function ( dom_element ) {
        return dom_element.clientHeight < dom_element.scrollHeight;
    };
    self.hasScrollWidth                                    = function ( dom_element ) {
        return dom_element.clientWidth < dom_element.scrollWidth;
    };
    self.setHtmlOrHide                                     = function ( dom_element, to_set ) {
        if ( !dom_element ) {
            return;
        }
        if ( to_set ) {
            dom_element.innerHTML = to_set;
            dom_element.classList.remove( "gs-hidden" );
        }
        else {
            dom_element.classList.add( "gs-hidden" );
        }
    };
    self.replaceElement                                    = function ( element_to_replace, element_replace_with ) {
        var _parent_node = element_to_replace.parentNode;
        _parent_node.replaceChild( element_replace_with, element_to_replace );
    };
    self.empty                                             = function ( dom_element ) {
        if ( !dom_element ) {
            return;
        }
        while ( dom_element.firstChild ) {
            dom_element.removeChild( dom_element.firstChild );
        }
    };
    self.addAttribute                                      = function ( dom_element, attribute_name, to_set ) {
        dom_element.setAttribute( attribute_name, to_set );
    };
    self.removeAttribute                                   = function ( dom_element, attribute_name ) {
        dom_element.removeAttribute( attribute_name );
    };
    self.getHeight                                         = function ( dom_element ) {
        if ( !dom_element ) {
            return 0;
        }
        return dom_element.offsetHeight;
    };
    self.getHeightWithMargin                               = function ( dom_element ) {
        if ( !dom_element ) {
            return 0;
        }
        return dom_element.offsetHeight + self.getComputedStyle( dom_element, "marginTop" ) + self.getComputedStyle( dom_element, "marginBottom" );
    };
    self.isVisible                                         = function ( elem, deepness ) {
        if ( !elem ) {
            return false;
        }
        if ( !deepness ) {
            deepness = 0;
        }
        try {
            var styles = self.getComputedStyle( elem );
        }
        catch ( ex ) {
            throw Error( "SERVICE.DOM: elem is not an element." );
        }
        
        if ( styles.display === "none" ) {
            return false;
        }
        if ( styles.visibility !== "visible" && styles.visibility !== "inherit" ) {
            return false;
        }
        if ( styles.opacity < 0.1 ) {
            return false;
        }
        if ( elem.parentElement && deepness > 0 ) {
            return self.isVisible( elem.parentElement, --deepness );
        }
        return true;
    };
    self.getMissingScrollPositionToBeVisible               = function ( dom_element, dom_parent ) {
        var _parent_rect  = self.getBoundingClientRect( dom_parent );
        var _element_rect = self.getBoundingClientRect( dom_element );
        if ( _element_rect[ self.STYLE.TOP ] < _parent_rect[ self.STYLE.TOP ] ) {
            return _parent_rect[ self.STYLE.TOP ] - _element_rect[ self.STYLE.TOP ];
        }
        if ( _element_rect[ self.STYLE.BOTTOM ] > _parent_rect[ self.STYLE.BOTTOM ] ) {
            return _parent_rect[ self.STYLE.BOTTOM ] - _element_rect[ self.STYLE.BOTTOM ];
        }
        return 0;
    };
    self.setCheckBoxValue                                  = function ( dom_element, to_set ) {
        dom_element.checked = !!to_set;
    };
    self.hasFocus                                          = function ( dom_element ) {
        return dom_element === document.activeElement;
    };
    self.generateDomElementFromString                      = function ( string ) {
        var _to_return = self.createElement( "div", "", string );
        return _to_return.children;
    };
    self.compareCoordinates                                = function ( dom_element, x, y ) {
        var _rect = self.getBoundingClientRect( dom_element );
        if ( x ) {
            if ( _rect.left < x ) {
                return -1;
            }
            if ( _rect.left + _rect.width > x ) {
                return 1;
            }
        }
        if ( y ) {
            if ( _rect.top > y ) {
                return -1;
            }
            if ( _rect.top + _rect.height < y ) {
                return 1;
            }
        }
        return 0;
    };
    self.show                                              = function ( dom_element ) {
        dom_element.classList.remove( "gs-hidden" );
    };
    self.hide                                              = function ( dom_element ) {
        dom_element.classList.add( "gs-hidden" );
    };
    self.setEditable                                       = function ( edit_content, dom_container, dom_to_edit ) {
        dom_to_edit.contentEditable = edit_content;
        if ( edit_content === true ) {
            self.focusAtTheEnd( dom_to_edit );
        }
        self.setDataSet( dom_container, "statusEdit", edit_content ? "1" : "0" );
    };
    self.focusAtTheEnd                                     = function ( dom_element ) {
        dom_element.focus();
        var range = document.createRange();
        range.selectNodeContents( dom_element );
        range.collapse( false );
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange( range );
    };
    self.scrollbarIsVisible                                = function ( dom_element, axe ) {
        switch ( axe ) {
            case "height":
                return dom_element.scrollHeight > dom_element.clientHeight;
            case "width":
                return dom_element.scrollWidth > dom_element.clientWidth;
        }
    };
    self.scrollIntoElementIfNotVisible                     = function ( dom_element ) {
        dom_element.scrollIntoView( { block: "nearest" } );
    };
    self.scrollIntoElementStart                            = function ( dom_element ) {
        dom_element.scrollIntoView( { block: "start" } );
    };
    self.getNavigatorZoom                                  = function () {
        return Math.round( window.devicePixelRatio * 100 );
    };
    self.isActiveElementEditable                           = function () {
        return Boolean( document.activeElement.isContentEditable );
    };
    self.saveCursorPosition                                = function ( dom_element ) {
        return dom_element.selectionStart;
    };
    self.focusAndSetCursorPosition                         = function ( dom_element, cursor_position ) {
        if ( !cursor_position ) {
            return;
        }
        dom_element.selectionStart = cursor_position;
        dom_element.selectionEnd   = cursor_position;
        dom_element.blur();
        dom_element.focus();
    };
    self.isMouseOnScrollBar                                = function ( event, dom_element, zoom ) {
        let value_X = event.clientX;
        let value_y = event.clientY;
        if ( zoom ) {
            const scale = zoom / 100;
            value_X     = event.clientX * scale;
            value_y     = event.clientY * scale;
        }
        return value_X >= dom_element.clientWidth || value_y >= dom_element.clientHeight;
    };
    self.changeCursorIcon                                  = function ( dom_element, url_icon ) {
        if ( url_icon ) {
            dom_element.style.cursor = `url("${url_icon}") 16 16, auto`;
        }
        else {
            this.getDomElement().style.cursor = "default";
        }
    };
    self.computeHasScrollVertical                          = function ( dom_element ) {
        if ( !dom_element ) {
            return;
        }
        self.addOrRemoveClasses( dom_element, self.hasScrollHeight( dom_element ), "gs-scroll-vertical-active" );
    };
    self.computeHasScrollVerticals                         = function ( selector, dom_element ) {
        if ( !selector ) {
            return;
        }
        if ( !dom_element ) {
            dom_element = document;
        }
        var _dom_s = dom_element.querySelectorAll( selector );
        for ( var i = 0, _size_i = _dom_s.length; i < _size_i; i++ ) {
            self.computeHasScrollVertical( _dom_s[ i ] );
        }
    };
    self.focusOnAnchor                                     = function ( selector_css, parent_dom, animation, extra_size_for_top ) {
        return selector_css.focusOnAnchor_withDom( document.querySelector( selector_css ), parent_dom, new SERVICE.DOM.Animation( animation, 2000 ), extra_size_for_top );
    };
    self.focusOnAnchor_withDom                             = function ( dom_element, parent_dom, animation_object, extra_size_for_top ) {
        if ( !dom_element ) {
            return;
        }
        if ( parent_dom ) {
            parent_dom.classList.add( "gs-scroll-behavior-smooth" );
            extra_size_for_top   = extra_size_for_top || 5; //-5 USED TO NOT BE STUCK ON THE TOP
            parent_dom.scrollTop = dom_element.offsetTop - extra_size_for_top;
        }
        else {
            dom_element.scrollIntoView();
        }
        if ( animation_object ) {
            switch ( animation_object.type ) {
                case 'gs-pulsate':
                    SERVICE.DOM.askAddClass( dom_element, 'gs-pulsate', animation_object.timer );
            }
        }
    };
    self.focus                                             = function ( dom_element ) {
        if ( !dom_element ) {
            return;
        }
        dom_element.focus();
    };
    self.isElementOnScreen                                 = function ( dom_element ) {
        const rect                = dom_element.getBoundingClientRect();
        const windowHeight        = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth         = (window.innerWidth || document.documentElement.clientWidth);
        const verticallyVisible   = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        const horizontallyVisible = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        return verticallyVisible && horizontallyVisible;
    };
    self.isPartiallyVisibleIntoScrollingVerticalParent_Box = function ( box_dom, box_parent ) {
        return box_dom.bottom >= box_parent.top && box_dom.top <= box_parent.bottom;
    };
    self.addResizeCursorsTo                                = function ( dom_container, positions_list ) {
        if ( !positions_list ) {
            positions_list = ["top-left", "top-right", "bottom-left", "bottom-right"];
        }
        for ( let i = 0; i < positions_list.length; i++ ) {
            let current_position   = positions_list[ i ];
            let css_classes        = `gs-${current_position} gs-2024-${current_position}-triangle gs-resize-cursor`;
            let dom_cursor_element = SERVICE.DOM.createElement( "span", { class: css_classes, "data-position": current_position } );
            SERVICE.DOM.addElementTo( dom_cursor_element, dom_container );
        }
    };
    self.reloadIframe                                      = function ( css_selector ) {
        document.querySelector( css_selector ).src += "";
    };
    return self;
})( SERVICE.DOM || {} );

SERVICE.MODAL = (function ( self ) {
    
    /**
     * Crée une modale de base
     * @param {string} title - Titre de la modale
     * @param {string} event_name - nom de l'event
     * @param {OBJECT.InterfaceHtml} current_object - nom de l'objet parent
     * @param {object} options - Options de configuration
     * @returns {HTMLElement} L'élément modal
     */
    self.create = function ( title, event_name, current_object, options ) {
        
        options = options || {};
        
        var modal   = SERVICE.DOM.createElement( "div", { class: "modal", style: options.style || "" } );
        var content = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "modal-content" } ), modal );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "modal-title" }, title ), content );
        
        modal._content            = content;
        modal._current_event_name = event_name;
        modal._current_object = current_object;
        
        return modal;
    };
    
    /**
     * Ajoute un champ de formulaire à une modale
     * @param {HTMLElement} modal - La modale
     * @param {string} type - Type de champ (text, number, textarea, select)
     * @param {string} label - Label du champ
     * @param {string} name - Nom du champ
     * @param {string} defaultValue - Valeur par défaut
     * @param {object} options - Options supplémentaires
     * @returns {HTMLElement} L'élément input/textarea/select
     */
    self.addField = function ( modal, type, label, name, defaultValue, options ) {
        options = options || {};
        
        var content = modal._content || modal.querySelector( ".modal-content" );
        
        var field = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "modal-field" } ),
            content
        );
        
        if ( label ) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "label", { class: "modal-label" }, label ),
                field
            );
        }
        
        var input;
        var inputClass = type === "textarea" ? "modal-textarea" : "modal-input";
        
        if ( type === "textarea" ) {
            input       = SERVICE.DOM.createElement( "textarea", {
                class      : inputClass,
                name       : name,
                placeholder: options.placeholder || ""
            } );
            input.value = defaultValue || "";
        }
        else {
            input = SERVICE.DOM.createElement( "input", {
                class      : inputClass,
                type       : type,
                name       : name,
                value      : defaultValue || "",
                placeholder: options.placeholder || ""
            } );
        }
        
        if ( options.min !== undefined ) {
            input.min = options.min;
        }
        if ( options.max !== undefined ) {
            input.max = options.max;
        }
        if ( options.step !== undefined ) {
            input.step = options.step;
        }
        if ( options.required ) {
            input.required = true;
        }
        
        SERVICE.DOM.addElementTo( input, field );
        
        return input;
    };
    
    /**
     * Ajoute un champ select à une modale
     * @param {HTMLElement} modal - La modale
     * @param {string} label - Label du champ
     * @param {string} name - Nom du champ
     * @param {Array} options_list - Liste des options (strings ou {value, label})
     * @param {string} defaultValue - Valeur par défaut
     * @returns {HTMLElement} L'élément select
     */
    self.addSelectField = function ( modal, label, name, options_list, defaultValue ) {
        var content = modal._content || modal.querySelector( ".modal-content" );
        
        var field = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "modal-field" } ),
            content
        );
        
        if ( label ) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "label", { class: "modal-label" }, label ),
                field
            );
        }
        
        var select = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "select", {
                class: "modal-select",
                name : name
            } ),
            field
        );
        
        for ( var i = 0; i < options_list.length; i++ ) {
            var opt        = options_list[ i ];
            var value      = typeof opt === "string" ? opt : opt.value;
            var label_text = typeof opt === "string" ? opt : opt.label;
            
            var option = SERVICE.DOM.createElement( "option", { value: value }, label_text );
            
            if ( value === defaultValue ) {
                option.selected = true;
            }
            
            SERVICE.DOM.addElementTo( option, select );
        }
        
        return select;
    };
    
    /**
     * Ajoute un texte ou contenu personnalisé à une modale
     * @param {HTMLElement} modal - La modale
     * @param {string|HTMLElement} content - Contenu à ajouter
     * @param {string} className - Classe CSS optionnelle
     * @returns {HTMLElement} L'élément créé
     */
    self.addContent = function ( modal, content, className ) {
        var modal_content = modal._content || modal.querySelector( ".modal-content" );
        
        if ( typeof content === "string" ) {
            var div = SERVICE.DOM.createElement( "div", {
                class: className || "modal-text"
            }, content );
            SERVICE.DOM.addElementTo( div, modal_content );
            return div;
        }
        else {
            SERVICE.DOM.addElementTo( content, modal_content );
            return content;
        }
    };
    
    /**
     * Ajoute des boutons à une modale
     * @param {HTMLElement} modal - La modale
     * @param {Array} buttons - Liste des boutons {label, callback, className}
     * @returns {HTMLElement} Le conteneur des boutons
     */
    self.addButtons = function ( modal, buttons ) {
        var content = modal._content || modal.querySelector( ".modal-content" );
        
        var buttons_container = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "modal-buttons" } ),
            content
        );
        
        for ( var i = 0; i < buttons.length; i++ ) {
            var btn_config = buttons[ i ];
            var btn_class  = "modal-button";
            
            if ( btn_config.className ) {
                btn_class += " " + btn_config.className;
            }
            
            var button = SERVICE.DOM.createElement( "button", {
                class: btn_class
            }, btn_config.label );
            
            if ( btn_config.callback ) {
                button.addEventListener( "click", btn_config.callback );
            }
            
            SERVICE.DOM.addElementTo( button, buttons_container );
        }
        
        return buttons_container;
    };
    
    /**
     * Ajoute des boutons standard Confirmer/Annuler
     * @param {HTMLElement} modal - La modale
     * @param {Function} onConfirm - Callback de confirmation
     * @param {Function} onCancel - Callback d'annulation (optionnel)
     * @returns {HTMLElement} Le conteneur des boutons
     */
    self.addConfirmButtons = function ( modal, onConfirm, onCancel ) {
        var buttons = [
            {
                label    : "Annuler",
                className: "cancel",
                callback : onCancel || function () {
                    self.close( modal );
                }
            },
            {
                label   : "Confirmer",
                callback: onConfirm
            }
        ];
        
        return self.addButtons( modal, buttons );
    };
    
    /**
     * Affiche une modale
     * @param {HTMLElement} modal - La modale à afficher
     */
    self.show = function ( modal ) {
        self.addConfirmButtons(
            modal,
            function () {
                modal._current_object.doActionAfter( modal._current_event_name, {param__modal__data : SERVICE.MODAL.getFormData( modal )} );
                SERVICE.MODAL.close( modal );
            },
            function () {
                SERVICE.MODAL.close( modal );
            }
        );
        
        document.body.appendChild( modal );
        
        // Focus sur le premier champ si disponible
        var first_input = modal.querySelector( "input, textarea, select" );
        if ( first_input ) {
            setTimeout( function () {
                first_input.focus();
            }, 100 );
        }
    };
    
    /**
     * Ferme et retire une modale
     * @param {HTMLElement} modal - La modale à fermer
     */
    self.close = function ( modal ) {
        if ( modal && modal.parentNode ) {
            modal.parentNode.removeChild( modal );
        }
    };
    
    /**
     * Récupère les valeurs de tous les champs d'une modale
     * @param {HTMLElement} modal - La modale
     * @returns {object} Objet contenant toutes les valeurs par nom de champ
     */
    self.getFormData = function ( modal ) {
        var data   = {};
        var inputs = modal.querySelectorAll( "input, textarea, select" );
        
        for ( var i = 0; i < inputs.length; i++ ) {
            var input = inputs[ i ];
            var name  = input.name || input.getAttribute( "name" );
            
            if ( name ) {
                if ( input.type === "number" ) {
                    data[ name ] = parseFloat( input.value ) || 0;
                }
                else if ( input.type === "checkbox" ) {
                    data[ name ] = input.checked;
                }
                else {
                    data[ name ] = input.value;
                }
            }
        }
        
        return data;
    };
    
    /**
     * Modale de confirmation simple
     * @param {string} title - Titre
     * @param {string} message - Message
     * @param {Function} onConfirm - Callback si confirmé
     * @param {Function} onCancel - Callback si annulé
     */
    self.confirm = function ( title, message, onConfirm, onCancel ) {
        var modal = self.create( title );
        
        self.addContent( modal, message );
        
        self.addConfirmButtons(
            modal,
            function () {
                self.close( modal );
                if ( onConfirm ) {
                    onConfirm();
                }
            },
            function () {
                self.close( modal );
                if ( onCancel ) {
                    onCancel();
                }
            }
        );
        
        self.show( modal );
        
        return modal;
    };
    
    /**
     * Modale d'alerte simple
     * @param {string} title - Titre
     * @param {string} message - Message
     * @param {Function} onClose - Callback à la fermeture
     */
    self.alert = function ( title, message, onClose ) {
        var modal = self.create( title );
        
        self.addContent( modal, message );
        
        self.addButtons( modal, [
            {
                label   : "OK",
                callback: function () {
                    self.close( modal );
                    if ( onClose ) {
                        onClose();
                    }
                }
            }
        ] );
        
        self.show( modal );
        
        return modal;
    };
    
    /**
     * Modale de prompt (saisie simple)
     * @param {string} title - Titre
     * @param {string} label - Label du champ
     * @param {string} defaultValue - Valeur par défaut
     * @param {Function} onConfirm - Callback avec la valeur saisie
     * @param {Function} onCancel - Callback si annulé
     */
    self.prompt = function ( title, label, defaultValue, onConfirm, onCancel ) {
        var modal = self.create( title );
        
        var input = self.addField( modal, "text", label, "prompt_value", defaultValue );
        
        self.addConfirmButtons(
            modal,
            function () {
                var value = input.value;
                self.close( modal );
                if ( onConfirm ) {
                    onConfirm( value );
                }
            },
            function () {
                self.close( modal );
                if ( onCancel ) {
                    onCancel();
                }
            }
        );
        
        self.show( modal );
        
        // Soumettre avec Enter
        input.addEventListener( "keypress", function ( e ) {
            if ( e.key === "Enter" ) {
                var value = input.value;
                self.close( modal );
                if ( onConfirm ) {
                    onConfirm( value );
                }
            }
        } );
        
        return modal;
    };
    
    /**
     * Ferme toutes les modales ouvertes
     */
    self.closeAll = function () {
        var modals = document.querySelectorAll( ".modal" );
        for ( var i = 0; i < modals.length; i++ ) {
            self.close( modals[ i ] );
        }
    };
    
    return self;
})( SERVICE.MODAL || {} );