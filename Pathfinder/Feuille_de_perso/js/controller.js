CONTROLLER.Main = (function ( self ) {
    //********************************************  INIT  **************************************************//
    self.init            = function () {
        self.initTitle();
        self.computeHtml();
    };
    self.initTitle       = function () {
        self.area__title = new AREA.Title();
    };
    //********************************************  EVENT LISTENER  **************************************************//
    //********************************************  HTML  **************************************************//
    self.computeHtml            = function () {
        self.area__title.computeHtml();
        SERVICE.DOM.addElementTo(  self.area__title.getDomElement(), document.querySelector(".sheet-1") );
    };
    self.computeHtml__title     = function () {
        self.computeHtml__title();
    };
    return self;
})
( CONTROLLER.Main || {} );



document.addEventListener( "DOMContentLoaded", function ( e ) {
    CONTROLLER.Main.init();
} );