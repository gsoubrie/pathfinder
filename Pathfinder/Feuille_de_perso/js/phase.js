//priority 20
//__lib__ lib_common
"use strict";
var PHASE = {
    INIT             : "INIT",
    STOPPING         : "STOPPING",
    SLEEPING         : "SLEEPING",
    RUNNING_TO_STRING: "RUNNING"
};

PHASE.Phase = function ( parent_object ) {
    this.previous_phase             = null;
    this.current_phase              = PHASE.INIT;
    this.next_phase                 = null;
    this.parent_object              = parent_object;
    this.timeout_set_phase_callback = null;
    this.timeout_phase              = null;
};
PHASE.Phase.prototype = {
    setPhase                       : function ( to_set ) {
        if ( this.timeout_phase ) {
            clearTimeout( this.timeout_phase );
        }
        this.previous_phase = this.current_phase;
        this.current_phase  = to_set;
        if ( this.dom_element ) {
            this._setPhaseInDomElement();
        }
        this.next_phase = null;
        if ( this.parent_object ) {
            if ( this.timeout_set_phase_callback ) {
                clearTimeout( this.timeout_set_phase_callback );
            }
            this.timeout_set_phase_callback = setTimeout( () => {
                this.parent_object.callbackForPhase();
                this.timeout_set_phase_callback = null;
            }, 200 );
        }
    },
    _setPhaseInDomElement          : function () {
        if ( this.dom_element_data_name ) {
            this.dom_element.dataset[ this.dom_element_data_name + 'CurrentPhase' ]  = this.current_phase;
            this.dom_element.dataset[ this.dom_element_data_name + 'PreviousPhase' ] = this.previous_phase;
        }
        else {
            this.dom_element.dataset[ 'currentPhase' ]  = this.current_phase;
            this.dom_element.dataset[ 'previousPhase' ] = this.previous_phase;
        }
    },
    setPhaseIfPhase                : function ( to_set, if_is ) {
        if ( !this.isPhase( if_is ) ) {
            return;
        }
        this.setPhase( to_set );
        return true;
    },
    setPhaseWithTimeOut            : function ( to_set, timeout ) {
        if ( !timeout ) {
            timeout = 0;
        }
        this.timeout_phase = setTimeout( () => {
            this.setPhase( to_set );
        }, timeout );
    },
    isPhase                        : function ( to_test ) {
        return this.current_phase === to_test;
    },
    togglePhase                    : function ( phase_1, phase_2 ) {
        if ( this.isPhase( phase_1 ) ) {
            this.setPhase( phase_2 );
        }
        else {
            this.setPhase( phase_1 );
        }
    },
    isPreviousPhase                : function ( to_test ) {
        if ( this.previous_phase === undefined ) {
            return false;
        }
        return this.previous_phase === to_test;
    },
    setParent                      : function ( parent_object ) {
        this.parent_object = parent_object;
    },
    haveSamePreviousAndCurrentPhase: function () {
        return this.previous_phase === this.current_phase;
    },
    setDomElement                  : function ( to_set, data_name ) {
        this.dom_element           = to_set;
        this.dom_element_data_name = data_name;
        this._setPhaseInDomElement();
    }
};

PHASE.PhaseInterface           = function () {
};
PHASE.PhaseInterface.prototype = {
    initPhase                          : function ( phase_value, dom_element ) {
        this.phase = new PHASE.Phase( this );
        if ( dom_element ) {
            this.phase.setDomElement( dom_element );
        }
        if ( phase_value ) {
            this.setPhase( phase_value );
        }
    },
    isPhase                            : function ( to_test ) {
        return this.phase.isPhase( to_test );
    },
    isInPhase                          : function ( array_to_test ) {
        for ( let i = 0, _size_i = array_to_test.length; i < _size_i; i++ ) {
            if ( this.phase.isPhase( array_to_test[ i ] ) ) {
                return true;
            }
        }
        return false;
    },
    setPhase                           : function ( to_set ) {
        this.phase.setPhase( to_set );
    },
    setPhaseOrPhase                    : function ( boolean, to_set_true, to_set_false ) {
        this.setPhase( boolean ? to_set_true : to_set_false );
    },
    setPhaseIfDifferent                : function ( to_set ) {
        if ( to_set !== this.getCurrentPhase() ) {
            this.phase.setPhase( to_set );
        }
    },
    togglePhase                        : function ( phase_1, phase_2 ) {
        this.phase.togglePhase( phase_1, phase_2 );
    },
    setPhaseParent                     : function ( to_set ) {
        this.phase.setParent( to_set );
    },
    setPhaseDomElement                 : function ( to_set, data_name ) {
        this.phase.setDomElement( to_set, data_name );
    },
    setPhaseIfPhase                    : function ( to_set, if_is ) {
        return this.phase.setPhaseIfPhase( to_set, if_is );
    },
    setPhaseWithTimeOut                : function ( to_set, timeout ) {
        this.phase.setPhaseWithTimeOut( to_set, timeout );
    },
    getCurrentPhase                    : function () {
        return this.phase.current_phase;
    },
    getPreviousPhase                   : function () {
        return this.phase.previous_phase;
    },
    setPreviousPhaseForced             : function ( to_set ) {
        this.phase.previous_phase = to_set;
    },
    isPreviousPhase                    : function ( to_test ) {
        return this.phase.isPreviousPhase( to_test );
    },
    isPreviousPhaseInPhase             : function ( array_to_test ) {
        for ( let i = 0, _size_i = array_to_test.length; i < _size_i; i++ ) {
            if ( this.phase.isPreviousPhase( array_to_test[ i ] ) ) {
                return true;
            }
        }
        return false;
    },
    callbackForPhase                   : function () {
    }
};
SERVICE.CLASS.addPrototype( PHASE.PhaseInterface, OBJECT.InterfaceHtml );