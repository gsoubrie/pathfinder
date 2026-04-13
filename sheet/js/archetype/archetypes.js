"use strict";

/**
 * @class ARCHETYPES.ArchetypePopup
 * @extends ARCHETYPES.Archetype
 */
ARCHETYPES.ArchetypePopup           = function ( data ) {
    this.init( data );
};
ARCHETYPES.ArchetypePopup.prototype = {
    init: function ( data ) {
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
            case "skills":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHTMLEdition: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "archetype-edition" } ) );

        if ( this.traits && this.traits.length ) {
            var traits_div = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "archetype-traits" } ),
                this.getDomElement()
            );
            for ( var t = 0; t < this.traits.length; t++ ) {
                SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "span", { class: "archetype-trait" }, this.traits[ t ] ),
                    traits_div
                );
            }
        }

        if ( this.description && this.description.length ) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM_HELPER.createEditionPropertyDescription( this.description, "Description" ),
                this.getDomElement()
            );
        }

        if ( this.skills && this.skills.length ) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "archetype-skills-title" }, "Dons de l'archétype" ),
                this.getDomElement()
            );

            for ( var i = 0; i < this.skills.length; i++ ) {
                var skill     = this.skills[ i ];
                var feat_div = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "div", { class: "archetype-skill" } ),
                    this.getDomElement()
                );

                var header = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "div", { class: "archetype-skill-header" } ),
                    feat_div
                );
                SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "span", { class: "archetype-skill-name" }, skill.name || "" ),
                    header
                );
                if ( skill.level ) {
                    SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "span", { class: "archetype-skill-level" }, "Don " + skill.level ),
                        header
                    );
                }

                if ( skill.required ) {
                    var req_div = SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "div", { class: "archetype-skill-required" } ),
                        feat_div
                    );
                    SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "span", { class: "archetype-skill-required-label" }, "Prérequis : " ),
                        req_div
                    );

                    if ( skill.required.archetypes && skill.required.archetypes.length ) {
                        var arch_names = [];
                        for ( var a = 0; a < skill.required.archetypes.length; a++ ) {
                            arch_names.push( "Dévouement " + skill.required.archetypes[ a ].name );
                        }
                        SERVICE.DOM.addElementTo(
                            SERVICE.DOM.createElement( "span", { class: "archetype-req-tag archetype-req-devotion" }, arch_names.join( ", " ) ),
                            req_div
                        );
                    }

                    if ( skill.required.skills ) {
                        var skills     = skill.required.skills;
                        var skill_list = skills.list || [];
                        var label_map  = {
                            "arcane"    : "Arcanes",
                            "nature"    : "Nature",
                            "occultism" : "Occultisme",
                            "religion"  : "Religion",
                            "trained"   : "qualifié",
                            "expert"    : "expert",
                            "master"    : "maître",
                            "legendary" : "légendaire"
                        };
                        var skill_texts = [];
                        for ( var s = 0; s < skill_list.length; s++ ) {
                            var sk = skill_list[ s ];
                            skill_texts.push( ( label_map[ sk.level ] || sk.level ) + " en " + ( label_map[ sk.type ] || sk.type ) );
                        }
                        var intro = skills.choices > 1 ? skills.choices + " parmi : " : "";
                        SERVICE.DOM.addElementTo(
                            SERVICE.DOM.createElement( "span", { class: "archetype-req-tag archetype-req-skill" }, intro + skill_texts.join( " ou " ) ),
                            req_div
                        );
                    }
                }

                if ( skill.description && skill.description.length ) {
                    var desc_div = SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "div", { class: "archetype-skill-desc" } ),
                        feat_div
                    );
                    for ( var d = 0; d < skill.description.length; d++ ) {
                        SERVICE.DOM.addElementTo(
                            SERVICE.DOM.createElement( "p", {}, skill.description[ d ] ),
                            desc_div
                        );
                    }
                }
            }
        }

        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( ARCHETYPES.ArchetypePopup, ARCHETYPES.Archetype );

/**
 * @class ARCHETYPES.Archetypes
 * @extends OBJECT.InterfaceContainerHtml
 */
ARCHETYPES.Archetypes           = function () {
    this.init();
};
ARCHETYPES.Archetypes.prototype = {
    init: function () {
        this.initContents();
        if ( !ARCHETYPES.ENUM ) {
            return;
        }
        for ( var i = 0, _size_i = ARCHETYPES.ENUM.length; i < _size_i; i++ ) {
            this.add( new ARCHETYPES.ArchetypePopup( ARCHETYPES.ENUM[ i ] ) );
        }
    }
};

SERVICE.CLASS.addPrototype( ARCHETYPES.Archetypes, OBJECT.InterfaceContainerHtml );

/**
 * @class ARCHETYPES.WindowGroup
 * @extends WINDOW_V2.ElementGroupFromData
 */
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
        // Option "Aucun"
        var none     = this.addSpecific( this.getChildConstructor( ARCHETYPES.default_value, this.getName() ) );
        var dom_none = SERVICE.DOM.createElement( "div", { class: "edition-property description" } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "value" }, "Aucun Archétype" ), dom_none );
        none.setContentDomElementTarget( dom_none );

        // Tous les archétypes
        for ( var i = 0, _size_i = CONTROLLER.Main.archetypes.getSize(); i < _size_i; i++ ) {
            var current = CONTROLLER.Main.archetypes.getContent( i );
            var added   = this.addSpecific( this.getChildConstructor( current.name, this.getName() ) );
            added.setContentDomElementTarget( current.computeHTMLEdition() );
        }
    }
};

SERVICE.CLASS.addPrototype( ARCHETYPES.WindowGroup, WINDOW_V2.ElementGroupFromData );