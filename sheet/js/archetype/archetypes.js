"use strict";

ARCHETYPES.ArchetypePopup           = function ( data ) {
    this.init( data );
};
ARCHETYPES.ArchetypePopup.prototype = {
    init   : function ( data ) {
        this.updateData( data );
    },
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this.setKey( value );
                this[ "name" ] = value;
                break;
            case "name_en":
            case "level":
            case "traits":
            case "description":
            case "feats":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHTMLEdition: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "archetype-edition" } ) );
        
        // Description générale
        if ( this.description && this.description.length ) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM_HELPER.createEditionPropertyDescription( this.description, "Description" ),
                this.getDomElement()
            );
        }
        
        // Liste des dons de l'archétype
        if ( this.feats && this.feats.length ) {
            let feats_title = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "archetype-feats-title" }, "Dons" ),
                this.getDomElement()
            );
            for ( let i = 0, _size_i = this.feats.length; i < _size_i; i++ ) {
                let feat        = this.feats[ i ];
                let feat_div    = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "div", { class: "archetype-feat" } ),
                    this.getDomElement()
                );
                let feat_header = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "div", { class: "archetype-feat-header" } ),
                    feat_div
                );
                SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "span", { class: "archetype-feat-name" }, feat.name || "" ),
                    feat_header
                );
                if ( feat.level ) {
                    SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "span", { class: "archetype-feat-level" }, "Niv. " + feat.level ),
                        feat_header
                    );
                }
                if ( feat.description && feat.description.length ) {
                    let desc_div = SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "div", { class: "archetype-feat-desc" } ),
                        feat_div
                    );
                    SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "div", { class: "value" }, feat.description[ 0 ] || "" ),
                        desc_div
                    );
                }
            }
        }
        
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( ARCHETYPES.ArchetypePopup, ARCHETYPES.Archetype );

ARCHETYPES.Archetypes           = function () {
    this.init();
};
ARCHETYPES.Archetypes.prototype = {
    init: function () {
        this.initContents();
        if ( !ARCHETYPES.ENUM ) {
            return;
        }
        for ( let i = 0, _size_i = ARCHETYPES.ENUM.length; i < _size_i; i++ ) {
            this.add( new ARCHETYPES.ArchetypePopup( ARCHETYPES.ENUM[ i ] ) );
        }
    }
};

SERVICE.CLASS.addPrototype( ARCHETYPES.Archetypes, OBJECT.InterfaceContainerHtml );

ARCHETYPES.WindowGroup           = function () {
    this.init( "archetype_window_group" );
};
ARCHETYPES.WindowGroup.prototype = {
    init        : function ( group_name ) {
        this.initCommon( group_name );
        CONTROLLER.Main.archetypes = new ARCHETYPES.Archetypes();
        this.initWithData();
    },
    initWithData: function () {
        let none     = this.addSpecific( this.getChildConstructor( ARCHETYPES.default_value, this.getName() ) );
        let dom_none = SERVICE.DOM.createElement( "div", { class: "edition-property description" } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "value" }, "Aucun Archétype" ), dom_none );
        none.setContentDomElementTarget( dom_none );
        
        for ( let i = 0, _size_i = CONTROLLER.Main.archetypes.getSize(); i < _size_i; i++ ) {
            let current = CONTROLLER.Main.archetypes.getContent( i );
            let added   = this.addSpecific( this.getChildConstructor( current.name, this.getName() ) );
            added.setContentDomElementTarget( current.computeHTMLEdition() );
        }
    }
};

SERVICE.CLASS.addPrototype( ARCHETYPES.WindowGroup, WINDOW_V2.ElementGroupFromData );