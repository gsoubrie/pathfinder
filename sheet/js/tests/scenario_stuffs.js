"use strict";
/**
 * Scenario : STUFFS (suite independante, RESET — placee APRES la chaine
 * classe/multiclasse/niveaux : ces suites ne resetent pas, elles heritent
 * de l'etat laisse par la precedente, une suite qui reset au milieu leur
 * casserait leurs pre-conditions) L'onglet Équipement : l'inventaire du
 * personnage, le « + » en tête de barre ouvre la POPUP D'AJOUT (type →
 * modèle → commentaire → Valider), une section par type (Armes, Armures,
 * Autres objets), les modèles viennent du dataset scrapé (STUFFS).
 * 1. Onglet actif sur page vide : barre + encombrement 0, 3 sections
 * vides, la popup d'ajout s'ouvre sur le + et se referme sur Quitter.
 * 2. Une épée longue par Entrée sur le filtre du modèle (popup, type
 * Armes par défaut) → l'entrée vit dans Armes avec ses Dégâts inline
 * SANS quantité (pas un consommable), son "?" ouvre la popup objet
 * (champs de type scrapés), sa coche « Porté » suit en place ; un nom
 * inconnu ne pick rien, Valider sans modèle ne crée rien. 3. Une armure
 * par changement de type + commentaire → l'entrée vit dans Armures avec
 * son CA bonus inline, le commentaire vit dans le domaine et en
 * infobulle, portée. 4. Un consommable (premier trait Consommable du
 * dataset autres objets) par type Autres objets : empile au Valider
 * (quantité 2), sa quantité se modifie, l'encombrement total suit en
 * place, retrait, save → load : kinds, quantités, porté et commentaires
 * restaurés.
 */
function TEST_stuffsOpenAddPopup() {
    let _button = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-add-bar .stuffs-add-button" );
    if ( !_button ) {
        return;
    }
    _button.click();
}

function TEST_stuffsQuitAddPopup() {
    let _cancel = document.querySelector( "body > .popup .stuffs-add-popup .popup-up-cancel" );
    if ( !_cancel ) {
        return;
    }
    _cancel.click();
}

function TEST_stuffsValidateAddPopup() {
    let _valid = document.querySelector( "body > .popup .stuffs-add-popup .popup-up-valid" );
    if ( !_valid ) {
        return;
    }
    _valid.click();
}

// Le clavier du filtre : le geste reel (frappe + Entrée sur l'input du
// selecteur MODELE de la popup), meme parcours que l'onglet Ajustements
function TEST_stuffsFilterEnter( filter_value ) {
    let _popup = document.querySelector( "body > .popup .stuffs-add-popup" );
    if ( !_popup ) {
        return;
    }
    let _selector = _popup.querySelector( ".stuffs-add-popup-model .single-select-selector" );
    let _filter   = _popup.querySelector( ".stuffs-add-popup-model .single-select-filter" );
    if ( !_selector || !_filter ) {
        return;
    }
    _selector.click();
    _filter.value = filter_value;
    _filter.dispatchEvent( new KeyboardEvent( "keydown", { "key": "Enter" } ) );
}

function TEST_stuffsPickType( type_key ) {
    let _option = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-type .single-select-option[data-value='" + type_key + "']" );
    if ( !_option ) {
        return;
    }
    _option.click();
}

function TEST_stuffsPickModel( value ) {
    let _option = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-model .single-select-option[data-value=" + JSON.stringify( value ) + "]" );
    if ( !_option ) {
        return;
    }
    _option.click();
}

function TEST_stuffsDiagnosis() {
    let _description  = "";
    let _popup        = document.querySelector( "body > .popup .stuffs-add-popup" );
    if ( _popup ) {
        let _type_label  = _popup.querySelector( ".stuffs-add-popup-type .single-select-selector-label" );
        let _model_label = _popup.querySelector( ".stuffs-add-popup-model .single-select-selector-label" );
        _description     += "[popup : type=" + ( _type_label ? _type_label.textContent : "?" ) + ", modèle=" + ( _model_label ? _model_label.textContent : "?" ) + "] ";
    }
    else {
        _description     += "[pas de popup] ";
    }
    let _sections = document.querySelectorAll( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section" );
    for ( let _i = 0, _size_i = _sections.length; _i < _size_i; _i++ ) {
        _description += "[" + _sections[ _i ].getAttribute( "data-kind" ) + " : " + _sections[ _i ].querySelectorAll( ".stuffs-entry" ).length + "] ";
    }
    let _bulk = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
    _description                    += _bulk ? _bulk.textContent : "?";
    return _description;
}

TEST.RUNNER.register( "[STUFFS] onglet = + en tête + popup d'ajout + 3 sections", function () {
    TEST.RESET.sheet();
    let _tab = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _tab, "L'onglet Équipement devrait exister" );
    if ( !_tab ) {
        return;
    }
    TEST.ASSERT.notEqual( _tab.getAttribute( "data-visibility-state" ), GS.CONST.VISIBILITY_STATE.DISABLED, "L'onglet Équipement ne devrait pas porter l'etat disabled sur page vide" );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.StuffsWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Équipement devrait exister" );
        if ( !_pane ) {
            return;
        }
        // La barre : le + en tête (PREMIER enfant), l'encombrement total à
        // sa droite, plus aucun sélecteur dans la fenêtre
        let _add_bar = _pane.querySelector( ".stuffs-add-bar" );
        TEST.ASSERT.notNull( _add_bar, "La barre devrait etre rendue" );
        if ( !_add_bar ) {
            return;
        }
        TEST.ASSERT.ok( _add_bar.firstElementChild.classList.contains( "stuffs-add-button" ), "Le + devrait ouvrir la barre (premier enfant), obtenu : [" + ( _add_bar.firstElementChild ? _add_bar.firstElementChild.className : "vide" ) + "]" );
        TEST.ASSERT.equal( _pane.querySelectorAll( ".stuffs-add-button" ).length, 1, "Un seul + devrait vivre dans la fenêtre, obtenu : " + _pane.querySelectorAll( ".stuffs-add-button" ).length );
        TEST.ASSERT.isNull( _pane.querySelector( ".single-select-selector" ), "La fenêtre ne devrait plus porter de sélecteur : l'ajout vit dans la popup" );
        let _bulk_total = _pane.querySelector( ".stuffs-bulk-total" );
        TEST.ASSERT.equal( _bulk_total ? _bulk_total.textContent : null, "Encombrement : 0", "L'encombrement total devrait etre 0 sur page vide, obtenu : [" + ( _bulk_total ? _bulk_total.textContent : "null" ) + "]" );
        let _sections = _pane.querySelectorAll( ".stuffs-section" );
        TEST.ASSERT.equal( _sections.length, STUFF.KINDS.length, "L'onglet devrait rendre une section par type (" + STUFF.KINDS.length + "), obtenu : " + _sections.length );
        // La popup d'ajout : le + l'ouvre (type par défaut, modèle du type,
        // commentaire libre), Quitter la referme sans rien créer
        TEST_stuffsOpenAddPopup();
        let _popup = document.querySelector( "body > .popup .stuffs-add-popup" );
        TEST.ASSERT.notNull( _popup, "La popup d'ajout devrait s'ouvrir sur le +" );
        if ( !_popup ) {
            return;
        }
        let _type_label = _popup.querySelector( ".stuffs-add-popup-type .single-select-selector-label" );
        TEST.ASSERT.equal( _type_label.textContent, STUFF.KINDS[ 0 ].label, "Le type par défaut de la popup devrait etre la premiere section, obtenu : [" + _type_label.textContent + "]" );
        TEST.ASSERT.equal( _popup.querySelectorAll( ".stuffs-add-popup-type .single-select-option" ).length, STUFF.KINDS.length + 1, "Le sélecteur de type devrait porter chaque type + l'option vide, obtenu : " + _popup.querySelectorAll( ".stuffs-add-popup-type .single-select-option" ).length );
        let _model_options_count = _popup.querySelectorAll( ".stuffs-add-popup-model .single-select-option" ).length;
        TEST.ASSERT.equal( _model_options_count, STUFFS.getKindOptions( STUFF.KINDS[ 0 ].key ).length + 1, "Le sélecteur de modèle devrait porter les entrées du type par défaut + l'option vide, obtenu : " + _model_options_count );
        let _comment_input = _popup.querySelector( ".stuffs-add-popup-comment-input" );
        TEST.ASSERT.notNull( _comment_input, "La popup devrait porter son champ commentaire" );
        TEST.ASSERT.ok( !_comment_input.value, "Le champ commentaire devrait etre vide a l'ouverture, obtenu : [" + _comment_input.value + "]" );
        TEST_stuffsQuitAddPopup();
        TEST.ASSERT.isNull( document.querySelector( "body > .popup .stuffs-add-popup" ), "La popup devrait etre refermée sur Quitter" );
        TEST.ASSERT.equal( CONTROLLER.Character.current_character.getStuffs().getSize(), 0, "Quitter ne devrait rien créer, obtenu : " + CONTROLLER.Character.current_character.getStuffs().getSize() );
    } );
} );

TEST.RUNNER.register( "[STUFFS] épée longue par popup = entrée armes + dégâts + popup objet + porté", function () {
    let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Équipement ouvert" );
    if ( !_pane ) {
        return;
    }
    TEST_stuffsOpenAddPopup();
    // Enter sur le filtre du modèle (type Armes par défaut) : le nom
    // exact (insensible à la casse, ACCENTS COMPRIS — la comparaison ne
    // normalise pas les diacritiques) devient la valeur en attente
    return TEST.wait().then( function () {
        TEST_stuffsFilterEnter( "épée longue" );
        return TEST.wait();
    } ).then( function () {
        let _popup = document.querySelector( "body > .popup .stuffs-add-popup" );
        TEST.ASSERT.notNull( _popup, "Pre-condition : popup d'ajout ouverte" );
        if ( !_popup ) {
            return;
        }
        let _model_label = _popup.querySelector( ".stuffs-add-popup-model .single-select-selector-label" );
        TEST.ASSERT.equal( _model_label.textContent, "Épée longue", "L'Entrée sur nom exact devrait poser la valeur canonique en attente, obtenu : [" + _model_label.textContent + "] — fenêtre : " + TEST_stuffsDiagnosis() );
        TEST_stuffsValidateAddPopup();
        return TEST.wait();
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        TEST.ASSERT.isNull( document.querySelector( "body > .popup .stuffs-add-popup" ), "La popup devrait etre refermée apres Valider" );
        let _entry_dom = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-kind='weapon'] .stuffs-entry[data-value='Épée longue']" );
        TEST.ASSERT.notNull( _entry_dom, "L'épée longue devrait etre rendue dans la zone Armes après Valider, fenêtre : " + TEST_stuffsDiagnosis() );
        let _stuff_object = _character.getStuffs().getContentByUUID( "weapon__Épée longue" );
        TEST.ASSERT.notNull( _stuff_object, "L'épée longue devrait vivre dans le conteneur (weapon__Épée longue)" );
        if ( !_entry_dom || !_stuff_object ) {
            return;
        }
        TEST.ASSERT.equal( _entry_dom.querySelector( ".stuffs-entry-stat" ).textContent, STUFFS.getFieldValue( "Épée longue", STUFF.getKindData( "weapon" ).info_field ), "L'entrée d'arme devrait porter ses Dégâts inline, obtenu : [" + _entry_dom.querySelector( ".stuffs-entry-stat" ).textContent + "]" );
        TEST.ASSERT.notOk( _stuff_object.worn, "L'épée ne devrait pas etre portée par défaut" );
        TEST.ASSERT.isNull( _entry_dom.querySelector( ".stuffs-entry-quantity" ), "L'épée longue n'est pas consommable : aucune quantité ne devrait etre rendue" );
        TEST.ASSERT.equal( _entry_dom.querySelector( ".stuffs-entry-bulk" ).textContent, STUFFS.getFieldValue( "Épée longue", "bulk" ), "L'entrée devrait porter son encombrement inline, obtenu : [" + _entry_dom.querySelector( ".stuffs-entry-bulk" ).textContent + "]" );
        // L'encombrement total suit l'ajout : croisé avec le domaine
        let _bulk_total = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
        TEST.ASSERT.equal( _bulk_total.textContent, "Encombrement : " + String( Math.round( STUFFS.parseBulk( "Épée longue" ) * 10 ) / 10 ).replace( ".", "," ), "L'encombrement total devrait compter l'épée, obtenu : [" + _bulk_total.textContent + "]" );
        // Le Valider sur un objet déjà possédé ne fait rien (pas un
        // consommable) : le choix repasse par la popup
        TEST_stuffsOpenAddPopup();
        return TEST.wait().then( function () {
            TEST_stuffsPickModel( "Épée longue" );
            return TEST.wait().then( function () {
                TEST_stuffsValidateAddPopup();
                return TEST.wait();
            } );
        } ).then( function () {
            TEST.ASSERT.equal( _character.getStuffs().getStuffsByKind( "weapon" ).length, 1, "Le Valider sur une épée déjà possédée ne devrait rien ajouter, obtenu : " + _character.getStuffs().getStuffsByKind( "weapon" ).length );
            // Un nom inconnu ne pick rien : Valider sans modèle ne crée
            // RIEN et la popup reste ouverte
            TEST_stuffsOpenAddPopup();
            return TEST.wait().then( function () {
                TEST_stuffsFilterEnter( "Zebulon le magnifique" );
                return TEST.wait().then( function () {
                    let _model_label_after = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-model .single-select-selector-label" );
                    TEST.ASSERT.equal( _model_label_after.textContent, "--", "L'Entrée sur nom inconnu ne devrait rien poser en attente, obtenu : [" + _model_label_after.textContent + "]" );
                    TEST_stuffsValidateAddPopup();
                    TEST.ASSERT.notNull( document.querySelector( "body > .popup .stuffs-add-popup" ), "Valider sans modèle ne devrait pas fermer la popup" );
                    TEST.ASSERT.equal( _character.getStuffs().getStuffsByKind( "weapon" ).length, 1, "Valider sans modèle ne devrait rien créer, obtenu : " + _character.getStuffs().getStuffsByKind( "weapon" ).length );
                    TEST_stuffsQuitAddPopup();
                    TEST.ASSERT.isNull( document.querySelector( "body > .popup .stuffs-add-popup" ), "La popup devrait etre refermée sur Quitter" );
                } );
            } );
        } );
    } ).then( function () {
        // Le "?" ouvre la popup objet (données scrapées) — le sélecteur
        // de la feuille pour une popup OUVERTE est l'overlay en phase
        // RUNNING, la popup refermée reste au DOM masquée
        let _info = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-kind='weapon'] .stuffs-entry[data-value='Épée longue'] .stuffs-entry-info" );
        TEST.ASSERT.notNull( _info, "L'entrée devrait porter son ?" );
        if ( !_info ) {
            return;
        }
        _info.click();
        let _overlay       = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup objet devrait etre ouverte (overlay RUNNING)" );
        let _popup_title = _overlay ? _overlay.querySelector( ".popup-title" ) : null;
        TEST.ASSERT.equal( _popup_title ? _popup_title.textContent : null, "Épée longue", "La popup devrait afficher le nom de l'objet, obtenu : [" + ( _popup_title ? _popup_title.textContent : "null" ) + "]" );
        // Les champs de type scrapés vivent dans la popup : croisés avec
        // le domaine
        let _popup_text     = _overlay ? _overlay.textContent : "";
        let _detail_fields  = STUFF.getKindData( "weapon" ).detail_fields;
        for ( let _f = 0, _size_f = _detail_fields.length; _f < _size_f; _f++ ) {
            let _expected = STUFFS.getFieldValue( "Épée longue", _detail_fields[ _f ] );
            if ( _expected ) {
                TEST.ASSERT.ok( _popup_text.indexOf( _expected ) !== -1, "La popup devrait porter le champ scrapé " + _detail_fields[ _f ] + " [" + _expected + "]" );
            }
        }
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "stuff__Épée longue" } );
        TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup devrait passer en phase masquee apres fermeture" );
        // La coche « Porté » suit en place (la data porte l'état)
        let _worn_button = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-kind='weapon'] .stuffs-entry[data-value='Épée longue'] .stuffs-entry-worn" );
        TEST.ASSERT.notNull( _worn_button, "L'entrée devrait porter sa coche Porté" );
        if ( !_worn_button ) {
            return;
        }
        _worn_button.click();
        return TEST.wait().then( function () {
            let _entry_after = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-kind='weapon'] .stuffs-entry[data-value='Épée longue']" );
            TEST.ASSERT.equal( _entry_after.getAttribute( "data-worn" ), "true", "La coche devrait poser data-worn=true en place, obtenu : " + _entry_after.getAttribute( "data-worn" ) );
            TEST.ASSERT.ok( CONTROLLER.Character.current_character.getStuffs().getContentByUUID( "weapon__Épée longue" ).worn, "Le domaine devrait porter l'état porté" );
        } );
    } );
} );

TEST.RUNNER.register( "[STUFFS] armure par popup = entrée armures + CA bonus + commentaire + porté", function () {
    let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Équipement ouvert" );
    if ( !_pane ) {
        return;
    }
    let _comment = "Armure de la garde, transmission familiale";
    TEST_stuffsOpenAddPopup();
    // Le type change dans la popup : le sélecteur de modèle suit
    return TEST.wait().then( function () {
        let _popup = document.querySelector( "body > .popup .stuffs-add-popup" );
        TEST.ASSERT.notNull( _popup, "Pre-condition : popup d'ajout ouverte" );
        if ( !_popup ) {
            return;
        }
        TEST_stuffsPickType( "armor" );
        return TEST.wait().then( function () {
            let _type_label = _popup.querySelector( ".stuffs-add-popup-type .single-select-selector-label" );
            TEST.ASSERT.equal( _type_label.textContent, STUFF.getKindData( "armor" ).label, "Le type choisi devrait s'afficher dans la popup, obtenu : [" + _type_label.textContent + "]" );
            let _model_options_count = _popup.querySelectorAll( ".stuffs-add-popup-model .single-select-option" ).length;
            TEST.ASSERT.equal( _model_options_count, STUFFS.getKindOptions( "armor" ).length + 1, "Le sélecteur de modèle devrait porter les armures du dataset + l'option vide, obtenu : " + _model_options_count );
            TEST_stuffsFilterEnter( "armure d'écailles" );
            return TEST.wait();
        } ).then( function () {
            let _model_label = _popup.querySelector( ".stuffs-add-popup-model .single-select-selector-label" );
            TEST.ASSERT.equal( _model_label.textContent, "Armure d'écailles", "L'Entrée sur nom d'armure exact devrait poser la valeur en attente, obtenu : [" + _model_label.textContent + "] — fenêtre : " + TEST_stuffsDiagnosis() );
            // Le commentaire se saisit librement : lu au Valider sur son
            // input (jamais embarqué inline)
            _popup.querySelector( ".stuffs-add-popup-comment-input" ).value = _comment;
            TEST_stuffsValidateAddPopup();
            return TEST.wait();
        } );
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        // Les noms d'objets portent des apostrophes : le sélecteur par
        // valeur embarque des guillemets doubles (JSON.stringify)
        let _entry_dom = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-kind='armor'] .stuffs-entry[data-value=" + JSON.stringify( "Armure d'écailles" ) + "]" );
        TEST.ASSERT.notNull( _entry_dom, "L'armure devrait etre rendue dans la zone Armures, fenêtre : " + TEST_stuffsDiagnosis() );
        if ( !_entry_dom ) {
            return;
        }
        let _armor_object = _character.getStuffs().getContentByUUID( "armor__Armure d'écailles" );
        TEST.ASSERT.notNull( _armor_object, "L'armure devrait vivre dans le conteneur (armor__Armure d'écailles)" );
        TEST.ASSERT.equal( _entry_dom.querySelector( ".stuffs-entry-stat" ).textContent, STUFFS.getFieldValue( "Armure d'écailles", STUFF.getKindData( "armor" ).info_field ), "L'entrée d'armure devrait porter son CA bonus inline, obtenu : [" + _entry_dom.querySelector( ".stuffs-entry-stat" ).textContent + "]" );
        TEST.ASSERT.equal( _armor_object.comment, _comment, "Le commentaire devrait vivre dans le domaine, obtenu : [" + _armor_object.comment + "]" );
        TEST.ASSERT.equal( _entry_dom.getAttribute( "title" ), _comment, "Le commentaire devrait vivre en infobulle de l'entrée, obtenu : [" + _entry_dom.getAttribute( "title" ) + "]" );
        // L'encombrement total : l'épée + l'armure, croisé avec le domaine
        let _bulk_total = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
        let _expected   = Math.round( ( STUFFS.parseBulk( "Épée longue" ) + STUFFS.parseBulk( "Armure d'écailles" ) ) * 10 ) / 10;
        TEST.ASSERT.equal( _bulk_total.textContent, "Encombrement : " + String( _expected ).replace( ".", "," ), "L'encombrement total devrait compter épée + armure, obtenu : [" + _bulk_total.textContent + "]" );
        // La popup se rouvre VIERGE : le type revient au défaut (l'attente
        // d'une popup fermée ne survit pas)
        TEST_stuffsOpenAddPopup();
        return TEST.wait().then( function () {
            let _fresh_type_label = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-type .single-select-selector-label" );
            TEST.ASSERT.equal( _fresh_type_label ? _fresh_type_label.textContent : null, STUFF.KINDS[ 0 ].label, "La popup réouverte devrait revenir au type par défaut, obtenu : [" + ( _fresh_type_label ? _fresh_type_label.textContent : "null" ) + "]" );
            TEST_stuffsQuitAddPopup();
            // L'armure portée : la coche suit en place puis le domaine
            let _worn_button = _entry_dom.querySelector( ".stuffs-entry-worn" );
            _worn_button.click();
            return TEST.wait().then( function () {
                TEST.ASSERT.equal( _entry_dom.getAttribute( "data-worn" ), "true", "La coche de l'armure devrait poser data-worn=true en place, obtenu : " + _entry_dom.getAttribute( "data-worn" ) );
                TEST.ASSERT.ok( _character.getStuffs().getContentByUUID( "armor__Armure d'écailles" ).worn, "Le domaine devrait porter l'armure portée" );
            } );
        } );
    } );
} );

TEST.RUNNER.register( "[STUFFS] consommable par popup = empilement + encombrement + retrait + save → load", function () {
    // Le consommable se pique du dataset : le trait décide, jamais le nom,
    // et il vit dans la zone autres objets (ni Dégâts ni CA bonus)
    let _consumable_name = null;
    for ( let _i = 0, _size_i = STUFFS.length; !_consumable_name && _i < _size_i; _i++ ) {
        if ( !STUFFS[ _i ][ "Dégâts" ] && !STUFFS[ _i ][ "CA bonus" ] && STUFFS[ _i ].traits.indexOf( STUFF.CONSUMABLE_TRAIT ) !== -1 ) {
            _consumable_name = STUFFS[ _i ].name;
        }
    }
    TEST.ASSERT.notNull( _consumable_name, "Le dataset devrait proposer un consommable de la zone autres objets" );
    if ( !_consumable_name ) {
        return;
    }
    let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Équipement ouvert" );
    if ( !_pane ) {
        return;
    }
    TEST_stuffsOpenAddPopup();
    return TEST.wait().then( function () {
        TEST_stuffsPickType( "other" );
        return TEST.wait().then( function () {
            let _option = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-model .single-select-option[data-value=" + JSON.stringify( _consumable_name ) + "]" );
            TEST.ASSERT.notNull( _option, "Le modèle d'autres objets devrait proposer " + _consumable_name );
            if ( !_option ) {
                return;
            }
            _option.click();
            return TEST.wait().then( function () {
                TEST_stuffsValidateAddPopup();
                return TEST.wait();
            } );
        } );
    } ).then( function () {
        let _character     = CONTROLLER.Character.current_character;
        let _stuffs        = _character.getStuffs();
        let _stuff_before  = _stuffs.getContentByUUID( "other__" + _consumable_name );
        TEST.ASSERT.notNull( _stuff_before, "Le consommable devrait vivre dans le conteneur" );
        if ( !_stuff_before ) {
            return;
        }
        TEST.ASSERT.ok( _stuff_before.isConsumable(), "Le trait Consommable devrait porter la quantité" );
        TEST.ASSERT.equal( _stuff_before.quantity, 1, "Le premier Valider pose la quantité 1, obtenu : " + _stuff_before.quantity );
        TEST.ASSERT.ok( !_stuff_before.comment, "Un ajout sans commentaire ne devrait pas porter de commentaire, obtenu : [" + _stuff_before.comment + "]" );
        // Le Valider empile les consommables déjà possédés : le choix
        // repasse par la popup
        TEST_stuffsOpenAddPopup();
        return TEST.wait().then( function () {
            return TEST.wait();
        } ).then( function () {
            TEST_stuffsPickType( "other" );
            return TEST.wait().then( function () {
                let _option_again = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-model .single-select-option[data-value=" + JSON.stringify( _consumable_name ) + "]" );
                TEST.ASSERT.notNull( _option_again, "L'option du consommable devrait etre rendue au réouverture de la popup" );
                if ( !_option_again ) {
                    return;
                }
                _option_again.click();
                return TEST.wait().then( function () {
                    TEST_stuffsValidateAddPopup();
                    return TEST.wait();
                } );
            } );
        } ).then( function () {
            TEST.ASSERT.equal( _stuffs.getContentByUUID( "other__" + _consumable_name ).quantity, 2, "Le Valider sur un consommable possédé devrait empiler (quantité 2), obtenu : " + _stuffs.getContentByUUID( "other__" + _consumable_name ).quantity );
            // La quantité se modifie sur place (change → domaine, pas de re-render)
            let _quantity_input = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-kind='other'] .stuffs-entry[data-value=" + JSON.stringify( _consumable_name ) + "] .stuffs-entry-quantity" );
            TEST.ASSERT.notNull( _quantity_input, "Le consommable devrait porter son input de quantité" );
            if ( _quantity_input ) {
                _quantity_input.value = "5";
                _quantity_input.dispatchEvent( new Event( "change" ) );
                TEST.ASSERT.equal( _stuffs.getContentByUUID( "other__" + _consumable_name ).quantity, 5, "La quantité modifiée devrait vivre dans le domaine, obtenu : " + _stuffs.getContentByUUID( "other__" + _consumable_name ).quantity );
                TEST.ASSERT.equal( _quantity_input.value, "5", "L'input devrait garder sa valeur (pas de re-render), obtenu : " + _quantity_input.value );
                // L'encombrement suit en place : les consommables comptent
                // à l'unité, croisé avec le domaine
                let _bulk_total = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
                let _expected   = Math.round( ( STUFFS.parseBulk( "Épée longue" ) + STUFFS.parseBulk( "Armure d'écailles" ) + STUFFS.parseBulk( _consumable_name ) * 5 ) * 10 ) / 10;
                TEST.ASSERT.equal( _bulk_total.textContent, "Encombrement : " + String( _expected ).replace( ".", "," ), "L'encombrement total devrait suivre la quantité en place, obtenu : [" + _bulk_total.textContent + "]" );
            }
            // Save → load : kinds, quantités, porté et commentaires restaurés
            let _saved          = _character.getDataToSave();
            TEST.ASSERT.isArray( _saved.stuffs, "La sauvegarde devrait contenir stuffs" );
            let _reloaded       = new CHARACTER.Current();
            _reloaded.updateData( _saved );
            TEST.ASSERT.equal( _reloaded.getStuffs().getSize(), 3, "La relecture devrait restaurer les trois objets, obtenu : " + _reloaded.getStuffs().getSize() );
            let _sword_reloaded  = _reloaded.getStuffs().getContentByUUID( "weapon__Épée longue" );
            TEST.ASSERT.notNull( _sword_reloaded, "L'épée longue devrait etre restaurée par son uuid" );
            if ( _sword_reloaded ) {
                TEST.ASSERT.ok( _sword_reloaded.worn, "La coche portée de l'épée devrait survivre a la relecture" );
            }
            let _armor_reloaded  = _reloaded.getStuffs().getContentByUUID( "armor__Armure d'écailles" );
            TEST.ASSERT.notNull( _armor_reloaded, "L'armure d'écailles devrait etre restaurée par son uuid" );
            if ( _armor_reloaded ) {
                TEST.ASSERT.ok( _armor_reloaded.worn, "La coche portée de l'armure devrait survivre a la relecture" );
                TEST.ASSERT.equal( _armor_reloaded.comment, "Armure de la garde, transmission familiale", "Le commentaire de l'armure devrait survivre a la relecture, obtenu : [" + _armor_reloaded.comment + "]" );
            }
            let _consumable_reloaded = _reloaded.getStuffs().getContentByUUID( "other__" + _consumable_name );
            TEST.ASSERT.notNull( _consumable_reloaded, "Le consommable devrait etre restauré par son uuid" );
            if ( _consumable_reloaded ) {
                TEST.ASSERT.equal( _consumable_reloaded.quantity, 5, "La quantité devrait survivre a la relecture, obtenu : " + _consumable_reloaded.quantity );
            }
            // Retrait : l'entrée et le domaine suivent
            document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-kind='other'] .stuffs-entry[data-value=" + JSON.stringify( _consumable_name ) + "] .stuffs-entry-remove" ).click();
            return TEST.wait().then( function () {
                TEST.ASSERT.isNull( _stuffs.getContentByUUID( "other__" + _consumable_name ), "Le consommable devrait etre retiré du conteneur" );
                TEST.ASSERT.isNull( document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-kind='other'] .stuffs-entry[data-value=" + JSON.stringify( _consumable_name ) + "]" ), "Le consommable ne devrait plus etre rendu apres le retrait" );
                let _bulk_after = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
                let _expected_after = Math.round( ( STUFFS.parseBulk( "Épée longue" ) + STUFFS.parseBulk( "Armure d'écailles" ) ) * 10 ) / 10;
                TEST.ASSERT.equal( _bulk_after.textContent, "Encombrement : " + String( _expected_after ).replace( ".", "," ), "L'encombrement total devrait rendre la place du consommable au retrait, obtenu : [" + _bulk_after.textContent + "]" );
            } );
        } );
    } );
} );
