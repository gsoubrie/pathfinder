"use strict";
/**
 * @typedef {Object} TEST.RUNNER
 */
var TEST                                 = TEST || {};
TEST.RUNNER                             = (function ( self ) {
    self.tests                           = [];
    self.results                         = [];
    self.page_errors                      = [];

    window.onerror                       = function ( message, source, line, column ) {
        self.page_errors.push( String( message ) + " (" + String( source || "?" ) + ":" + String( line ) + ")" );
        return false;
    };

    //********************************************  REGISTER  **************************************************//
    self.register                        = function ( name, test_function ) {
        self.tests.push( { name: name, "function": test_function } );
    };

    //********************************************  RUN  **************************************************//
    // Les tests peuvent retourner une Promise : la bascule de phase du DOM
    // (callbackForPhase) passe par un setTimeout, les assertions sur la
    // visibilite doivent donc attendre le tick suivant.
    self.run                             = function () {
        return self._runNext( 0 ).then( function () {
            for ( let j = 0, _size_j = self.page_errors.length; j < _size_j; j++ ) {
                self.results.push( { name: "[CHARGEMENT PAGE] erreur JS pendant le chargement", ok: false, message: self.page_errors[ j ] } );
            }
            self.render();
            return self.summary();
        } );
    };

    self._runNext                        = function ( index ) {
        if ( index >= self.tests.length ) {
            return Promise.resolve();
        }
        let _current                      = self.tests[ index ];
        let _result;
        try {
            _result                      = _current[ "function" ]();
        }
        catch ( error ) {
            self.results.push( { name: _current.name, ok: false, message: self.cleanMessage( error ) } );
            return self._runNext( index + 1 );
        }
        if ( _result && typeof _result.then === "function" ) {
            return _result.then( function () {
                self.results.push( { name: _current.name, ok: true, message: "" } );
                return self._runNext( index + 1 );
            }, function ( error ) {
                self.results.push( { name: _current.name, ok: false, message: self.cleanMessage( error ) } );
                return self._runNext( index + 1 );
            } );
        }
        self.results.push( { name: _current.name, ok: true, message: "" } );
        return self._runNext( index + 1 );
    };

    self.cleanMessage                    = function ( error ) {
        if ( error && error.message ) {
            return error.message;
        }
        return String( error );
    };

    self.summary                         = function () {
        let _failures                     = 0;
        for ( let i = 0, _size_i = self.results.length; i < _size_i; i++ ) {
            if ( !self.results[ i ].ok ) {
                _failures++;
            }
        }
        return { total: self.results.length, failures: _failures, passes: self.results.length - _failures };
    };

    //********************************************  REPORT  **************************************************//
    self.render                          = function () {
        let _summary                      = self.summary();
        let _container                    = document.getElementById( "test-report" );
        if ( !_container ) {
            return;
        }
        _container.innerHTML              = "";
        let _title                        = document.createElement( "div" );
        _title.className                  = "test-report-title";
        _title.innerText                  = "TESTS : " + _summary.passes + " OK / " + _summary.failures + " ECHECS (" + _summary.total + ")";
        _container.appendChild( _title );
        for ( let i = 0, _size_i = self.results.length; i < _size_i; i++ ) {
            let _current                  = self.results[ i ];
            let _line                     = document.createElement( "div" );
            _line.className               = _current.ok ? "test-pass" : "test-fail";
            _line.innerText               = ( _current.ok ? "[OK]   " : "[ECHEC] " ) + _current.name;
            _container.appendChild( _line );
            if ( !_current.ok && _current.message ) {
                let _message              = document.createElement( "div" );
                _message.className        = "test-message";
                _message.innerText       = _current.message;
                _container.appendChild( _message );
            }
        }
        if ( _summary.failures === 0 ) {
            console.log( "%cTESTS : " + _summary.passes + " passes, 0 echec", "color:green;font-weight:bold" );
        }
        else {
            console.warn( "TESTS : " + _summary.passes + " passes, " + _summary.failures + " echecs" );
        }
    };

    return self;
})( TEST.RUNNER || {} );

/**
 * @typedef {Object} TEST.ASSERT
 */
TEST.ASSERT                             = (function ( self ) {
    function fail ( message ) {
        throw new Error( message );
    }

    self.ok                              = function ( condition, message ) {
        if ( !condition ) {
            fail( message || "Condition non remplie" );
        }
    };

    self.notOk                           = function ( condition, message ) {
        if ( condition ) {
            fail( message || "Condition remplie alors qu'elle ne devait pas l'etre" );
        }
    };

    self.equal                           = function ( current, expected, message ) {
        if ( current !== expected ) {
            fail( ( message || "Valeurs differentes" ) + " : attendu [" + String( expected ) + "], obtenu [" + String( current ) + "]" );
        }
    };

    self.notEqual                       = function ( current, expected, message ) {
        if ( current === expected ) {
            fail( ( message || "Valeurs identiques" ) + " : attendu different de [" + String( expected ) + "]" );
        }
    };

    self.deepEqual                       = function ( current, expected, message ) {
        if ( JSON.stringify( current ) !== JSON.stringify( expected ) ) {
            fail( ( message || "Structures differentes" ) + " : attendu [" + JSON.stringify( expected ) + "], obtenu [" + JSON.stringify( current ) + "]" );
        }
    };

    self.notNull                         = function ( value, message ) {
        if ( value === null || value === undefined ) {
            fail( ( message || "Valeur nulle" ) + " : attendu non nul, obtenu [" + String( value ) + "]" );
        }
    };

    self.isNull                          = function ( value, message ) {
        if ( value !== null && value !== undefined ) {
            fail( ( message || "Valeur non nulle" ) + " : attendu null, obtenu [" + String( value ) + "]" );
        }
    };

    self.isArray                         = function ( value, message ) {
        if ( !Array.isArray( value ) ) {
            fail( ( message || "Type incorrect" ) + " : attendu un tableau, obtenu [" + typeof value + "]" );
        }
    };

    self.throws                          = function ( test_function, message ) {
        try {
            test_function();
        }
        catch ( error ) {
            return error;
        }
        fail( ( message || "Aucune exception levee" ) );
    };

    return self;
})( TEST.ASSERT || {} );

//********************************************  HELPERS  **************************************************//
/**
 * Simule un clic reel sur un onglet : le meme appel que le onclick genere par
 * la lib (MANAGER.EventManagerV2.clickOnWindowNavigation), avec un event dont
 * la cible est l'onglet et le nom de groupe lu sur l'onglet lui-meme
 * (data-group-name). Retourne une Promise : la bascule de visibilite des
 * panneaux (callbackForPhase) passe par un setTimeout.
 */
TEST.clickTab                               = function ( container_selector, window_name ) {
    let _tab                            = document.querySelector( container_selector + " .gs-window-element-V2[data-name='" + window_name + "']" );
    let _params                         = {};
    _params[ WINDOW_V2.CONST.PARAM.WINDOW_GROUP_NAME ] = _tab.dataset.groupName;
    MANAGER.EventManagerV2.clickOnWindowNavigation(
        { target: _tab, button: 0, stopPropagation: function () {} },
        _params
    );
    return new Promise( function ( resolve ) { setTimeout( resolve, 50 ); } );
};

/**
 * Attente avant une assertion DOM sur un rendu differé (counters de la lib :
 * mise a jour du data-number debounced a 50 ms).
 */
TEST.wait                                   = function ( delay ) {
    return new Promise( function ( resolve ) { setTimeout( resolve, delay || 60 ); } );
};

/**
 * Reinitialisation de la feuille en cours de suite : nouveau personnage,
 * fenetres reconstruites, indicateurs data-* nettoyes, popup fermee.
 * A appeler en tete d'un scenario pour repartir d'un etat vierge sans
 * recharger la page (les scenarios precedents mutent le personnage).
 */
TEST.RESET                                  = TEST.RESET || {};
TEST.RESET.sheet                            = function () {
    let _empty                             = function ( dom_element ) {
        while ( dom_element && dom_element.firstChild ) {
            dom_element.removeChild( dom_element.firstChild );
        }
    };
    _empty( document.querySelector( ".character-sheet-windows" ) );
    _empty( document.querySelector( ".characters-sheet-content" ) );
    let _popup                             = document.querySelector( "body > .popup" );
    if ( _popup ) {
        _popup.parentNode.removeChild( _popup );
    }
    CONTROLLER.Character.edition_popup     = null;
    delete document.body.dataset.isRaceSet;
    delete document.body.dataset.isClassSet;
    delete document.body.dataset.levelupMissing;
    CONTROLLER.Character.init();
};
