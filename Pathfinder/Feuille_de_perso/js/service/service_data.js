"use strict";
SERVICE.DATA = (function ( self ) {
    self.loadDataByUUID  = function ( uuid ) {
        return eval( uuid );
    };
    return self;
})( SERVICE.DATA || {} );


