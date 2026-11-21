"use strict";
/**
 * [PHOTO] Photo du personnage en haut à gauche du Général (style CV).
 * Départ : feuille vide (RESET).
 *  1. Onglet Général : zone photo rendue dans la grille (grid-template-areas
 *     contient "photo"), cadre + « + », pas d'image, input file caché présent.
 *  2. Geste réel d'import (canvas 700×900 → File → input#photo-file-input →
 *     change) : photo posée sur le personnage en dataURL JPEG, image rendue
 *     avec « × », redimensionnée à 467×600 (max 600 px de côté).
 *  3. Save → relecture en mémoire : getPhoto() identique, getDataToSave().photo
 *     présent.
 *  4. Clic sur « × » : photo retirée du personnage et du rendu, retour au « + ».
 */
TEST.RUNNER.register( "[PHOTO] zone rendue en haut à gauche du Général, « + » sans photo, input file caché", function () {
    TEST.RESET.sheet();
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Général ouvert" );
        if ( !_pane ) {
            return;
        }
        let _grid  = _pane.querySelector( ".character-sheet-grid" );
        TEST.ASSERT.notNull( _grid, "La grille du Général devrait exister" );
        let _areas = getComputedStyle( _grid ).gridTemplateAreas;
        TEST.ASSERT.ok( _areas.indexOf( "photo" ) !== -1, "grid-template-areas devrait contenir la zone photo, obtenu : " + _areas );
        let _zone  = _pane.querySelector( ".area-photo" );
        TEST.ASSERT.notNull( _zone, "La zone photo devrait être rendue" );
        if ( !_zone ) {
            return;
        }
        TEST.ASSERT.notNull( _zone.querySelector( ".photo-frame" ), "Le cadre photo devrait être rendu" );
        TEST.ASSERT.notNull( _zone.querySelector( ".photo-add" ), "Le « + » devrait être rendu sans photo" );
        TEST.ASSERT.isNull( _zone.querySelector( ".photo-img" ), "Aucune image ne devrait être rendue sans photo" );
        TEST.ASSERT.isNull( _zone.querySelector( ".photo-remove" ), "Le « × » ne devrait pas être rendu sans photo" );
        let _input = document.getElementById( "photo-file-input" );
        TEST.ASSERT.notNull( _input, "L'input file devrait exister dans la page" );
        if ( _input ) {
            TEST.ASSERT.equal( _input.type, "file", "L'input devrait être de type file" );
            TEST.ASSERT.equal( getComputedStyle( _input ).display, "none", "L'input file devrait être caché" );
        }
        TEST.ASSERT.isNull( CONTROLLER.Character.current_character.getPhoto(), "Aucune photo ne devrait être posée sur une feuille vide" );
    } );
} );

TEST.RUNNER.register( "[PHOTO] import d'un fichier image = dataURL JPEG redimensionnée, posée et rendue avec « × »", function () {
    let _character = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    // Fichier image réel : canvas 700×900 exporté en PNG
    let _canvas    = document.createElement( "canvas" );
    _canvas.width  = 700;
    _canvas.height = 900;
    let _ctx       = _canvas.getContext( "2d" );
    _ctx.fillStyle = "#7a3b2e";
    _ctx.fillRect( 0, 0, 700, 900 );
    let _input     = document.getElementById( "photo-file-input" );
    TEST.ASSERT.notNull( _input, "Pre-condition : input file présent (test précédent)" );
    if ( !_input ) {
        return;
    }
    return new Promise( function ( resolve, reject ) {
        _canvas.toBlob( function ( blob ) {
            try {
                let _file = new File( [ blob ], "photo.png", { "type": "image/png" } );
                let _dt   = new DataTransfer();
                _dt.items.add( _file );
                _input.files = _dt.files;
                _input.dispatchEvent( new Event( "change" ) );
                resolve();
            }
            catch ( e ) {
                reject( e );
            }
        }, "image/png" );
    } ).then( function () {
        // FileReader -> Image -> canvas -> événement : attendre la pose sur le personnage
        let _deadline = Date.now() + 5000;
        return new Promise( function ( resolve ) {
            let _poll = function () {
                if ( _character.getPhoto() || Date.now() >= _deadline ) {
                    resolve();
                    return;
                }
                setTimeout( _poll, 50 );
            };
            _poll();
        } );
    } ).then( function () {
        let _photo = _character.getPhoto();
        TEST.ASSERT.notNull( _photo, "La photo devrait être posée sur le personnage après l'import" );
        if ( !_photo ) {
            return;
        }
        TEST.ASSERT.ok( _photo.indexOf( "data:image/jpeg;base64," ) === 0, "La photo devrait être un dataURL JPEG, obtenu : " + _photo.slice( 0, 40 ) + "..." );
        // Le dataURL posé doit être une image chargeable, redimensionnée max 600 px de côté (700×900 -> 467×600)
        return new Promise( function ( resolve ) {
            let _img     = new Image();
            _img.onload  = function () { resolve( _img ); };
            _img.onerror = function () { resolve( null ); };
            _img.src     = _photo;
        } ).then( function ( img ) {
            TEST.ASSERT.notNull( img, "Le dataURL posé devrait être une image chargeable" );
            if ( img ) {
                TEST.ASSERT.equal( img.naturalWidth, 467, "Largeur redimensionnée attendue 467 (700*600/900), obtenue " + img.naturalWidth );
                TEST.ASSERT.equal( img.naturalHeight, 600, "Hauteur redimensionnée attendue 600, obtenue " + img.naturalHeight );
            }
            return TEST.wait();
        } );
    } ).then( function () {
        let _pane = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
        let _zone = _pane ? _pane.querySelector( ".area-photo" ) : null;
        TEST.ASSERT.notNull( _zone, "Pre-condition : zone photo rendue" );
        if ( !_zone ) {
            return;
        }
        let _img  = _zone.querySelector( "img.photo-img" );
        TEST.ASSERT.notNull( _img, "L'image de la photo devrait être rendue dans la zone" );
        if ( _img ) {
            TEST.ASSERT.equal( _img.getAttribute( "src" ), _character.getPhoto(), "Le src de l'image devrait être la dataURL posée" );
        }
        TEST.ASSERT.notNull( _zone.querySelector( ".photo-remove" ), "Le « × » devrait être rendu avec la photo" );
        TEST.ASSERT.isNull( _zone.querySelector( ".photo-add" ), "Le « + » ne devrait plus être rendu avec la photo" );
    } );
} );

TEST.RUNNER.register( "[PHOTO] save -> relecture en mémoire : la photo est conservée", function () {
    let _character = CONTROLLER.Character.current_character;
    let _photo     = _character ? _character.getPhoto() : null;
    TEST.ASSERT.notNull( _photo, "Pre-condition : photo posée (test précédent)" );
    if ( !_photo || !_character ) {
        return;
    }
    let _save     = _character.getDataToSave();
    TEST.ASSERT.equal( _save.photo, _photo, "getDataToSave() devrait porter la clé photo à l'identique" );
    let _reloaded = new CHARACTER.Current();
    _reloaded.updateData( _save );
    TEST.ASSERT.equal( _reloaded.getPhoto(), _photo, "La relecture du save devrait restaurer la photo à l'identique" );
} );

TEST.RUNNER.register( "[PHOTO] clic sur « × » = photo retirée du personnage et du rendu, retour au « + »", function () {
    let _character = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.notNull( _character.getPhoto(), "Pre-condition : photo posée (test 2)" );
    let _pane   = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
    let _remove = _pane ? _pane.querySelector( ".area-photo .photo-remove" ) : null;
    TEST.ASSERT.notNull( _remove, "Pre-condition : « × » rendu (test 2)" );
    if ( !_remove ) {
        return;
    }
    _remove.click();
    return TEST.wait().then( function () {
        TEST.ASSERT.isNull( _character.getPhoto(), "La photo devrait être retirée du personnage" );
        TEST.ASSERT.isNull( _character.getDataToSave().photo, "Le save devrait porter photo: null après retrait" );
        let _zone = _pane.querySelector( ".area-photo" );
        TEST.ASSERT.notNull( _zone.querySelector( ".photo-add" ), "Le « + » devrait revenir" );
        TEST.ASSERT.isNull( _zone.querySelector( ".photo-img" ), "L'image devrait disparaître du rendu" );
        TEST.ASSERT.isNull( _zone.querySelector( ".photo-remove" ), "Le « × » devrait disparaître du rendu" );
    } );
} );
