AREA.Title           = function ( data ) {
    this.init( data );
};
AREA.Title.prototype = {
    init: function ( data ) {
    },
    //********************************************  HTML   **************************************************//
    computeHtml        : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "title" } ) );
        this.computeHtml__left();
        this.computeHtml__middle();
        this.computeHtml__right();
    },
    computeHtml__left  : function () {
        let to_return = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "left-zone" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "logo-pathfinder" } ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "page-name" }, "Feuille de<br>personnage" ), to_return );
    },
    computeHtml__middle: function () {
        let middle    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-zone" } ), this.getDomElement() );
        let left_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-left-zone" } ), middle );
        let name      = SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "name", "Tapadami", "Nom du <br>personnage"  ), left_zone );
        let player      = SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "player", "Greg", "Nom du <br>Joueur"  ), left_zone );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-right-zone" } ), middle );
    },
    computeHtml__right : function () {
        let right = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "right-zone" } ), this.getDomElement() );
    }
};

SERVICE.CLASS.addPrototype( AREA.Title, OBJECT.InterfaceHtml );