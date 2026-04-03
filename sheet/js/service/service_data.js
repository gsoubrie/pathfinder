"use strict";
/**
 * @typedef {Object} SERVICE.DATA
 */
SERVICE.DATA = (function ( /** @type {SERVICE.DATA} */ self ) {
    self.loadDataByUUID  = function ( uuid ) {
        return eval( uuid );
    };
    return self;
})( SERVICE.DATA || {} );


