"use strict";
/**
 * Scenario : VIGNETTES EQUIPEMENT (suite de scenario_stuffs, SANS reset —
 * elle herite de la feuille laissée : épée longue équipée, armure
 * d'écailles entreposée, bouclier + potion + parchemin + un petit objet
 * empilé au sac à dos, onglet Équipement actif).
 * La section ÉQUIPÉ est un SCHÉMA DU CORPS : une case par emplacement
 * (STUFF.SCHEMA_AREAS), seules les cases OCCUPÉES se rendent (un
 * emplacement vide n'apparaît que quand un objet s'y pose), la vignette
 * de l'objet sits dans sa case avec la roue crantée ET la croix de
 * déquipage en haut à droite, une arme à 1 main porte les puces
 * [Main] / [Main secondaire]. Le bouclier occupe la case Main secondaire
 * (STUFF.getSlotCase), une arme à 2 mains (Mains = "2", ex. Arbalète) se
 * pose en Main avec le label « Deux mains » et fait repartir au sac tout
 * ce qui occupe les deux mains. Le SAC À DOS rend ses vignettes
 * CLIQUABLES avec le bandeau « Cliquer sur une vignette pour équiper » :
 * le clic équipe l'objet (event__stuff__equip), échange la case (l'objet
 * déjà équipé dessus retourne au sac) et applique la règle 2 mains.
 * 1. Schéma : seules les cases occupées rendent, la vignette de l'épée
 *    vit dans la case main avec roue + croix en haut à droite et les
 *    puces de main (Main active).
 * 2. Sac à dos : bandeau « cliquer pour équiper (N disponibles) », les
 *    vignettes portent la classe cliquable, le bouclier porte le label
 *    « Bouclier ».
 * 3. Clic sur la vignette du bouclier au sac → équipé dans la case
 *    Main secondaire (label « Bouclier » sur la vignette), domaine
 *    location = equipped.
 * 4. Clic sur la croix de la vignette équipée → retour au sac à dos, la
 *    case Main secondaire disparaît du schéma.
 * 5. Échange de case : une rapière ajoutée au sac, clic de sa vignette →
 *    équipée en Main, l'épée longue retourne au sac.
 * 6. Puces de main : clic sur « Main secondaire » de la rapière équipée →
 *    slot off_hand, la vignette passe dans la case Main secondaire.
 * 7. Arme à 2 mains : une arbalète ajoutée au sac, clic de sa vignette →
 *    équipée en Main avec le label « Deux mains », la rapière (main
 *    secondaire) retourne au sac.
 * 8. Save → load : emplacements et slots survivent à la relecture.
 */

function TEST_vignettesPane() {
    return document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
}

function TEST_vignettesCard( location, value ) {
    return document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-location='" + location + "'] .stuffs-entry[data-value=" + JSON.stringify( value ) + "]" );
}

function TEST_vignettesClickBackpackCard( value ) {
    let _card = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-location='backpack'] .stuffs-card--clickable[data-value=" + JSON.stringify( value ) + "]" );
    if ( !_card ) {
        return;
    }
    _card.click();
}

TEST.RUNNER.register( "[VIGNETTES] schéma Équipé : cases occupées seules, vignette avec roue + croix + puces main", function () {
    let _pane = TEST_vignettesPane();
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Équipement ouvert" );
    if ( !_pane ) {
        return;
    }
    let _character = CONTROLLER.Character.current_character;
    let _stuffs    = _character.getStuffs();
    let _equipped  = _stuffs.getStuffsByLocation( "equipped" );
    TEST.ASSERT.ok( _equipped.length >= 1, "Pre-condition : au moins un objet équipé (laissé par scenario_stuffs), obtenu : " + _equipped.length );
    let _schema = _pane.querySelector( ".stuffs-section[data-location='equipped'] .stuffs-schema" );
    TEST.ASSERT.notNull( _schema, "La section Équipé devrait rendre le schéma du corps" );
    if ( !_schema ) {
        return;
    }
    // Seules les cases occupées se rendent : une case par objet équipé
    // (hors hosts), aucun emplacement vide affiché
    let _slots      = _schema.querySelectorAll( ".stuffs-slot" );
    let _expected   = 0;
    for ( let i = 0, _size_i = _equipped.length; i < _size_i; i++ ) {
        if ( !STUFF.getHostBodySlot( _equipped[ i ].getSlot() ) ) {
            _expected++;
        }
    }
    TEST.ASSERT.equal( _slots.length, _expected, "Le schéma ne devrait rendre que les cases occupées (" + _expected + "), obtenu : " + _slots.length );
    // La vignette de l'épée longue vit dans la case main
    let _sword_card = TEST_vignettesCard( "equipped", "Épée longue" );
    TEST.ASSERT.notNull( _sword_card, "La vignette de l'épée équipée devrait exister dans le schéma" );
    if ( !_sword_card ) {
        return;
    }
    let _main_slot = _sword_card.closest( ".stuffs-slot" );
    TEST.ASSERT.equal( _main_slot ? _main_slot.getAttribute( "data-slot" ) : null, "main", "L'épée devrait siéger dans la case main, obtenu : [" + ( _main_slot ? _main_slot.getAttribute( "data-slot" ) : "null" ) + "]" );
    // Roue crantée + croix en haut à droite (dans la rangée du haut)
    let _top = _sword_card.querySelector( ".stuffs-card-top" );
    TEST.ASSERT.notNull( _top, "La vignette devrait porter sa rangée du haut" );
    if ( _top ) {
        TEST.ASSERT.notNull( _top.querySelector( ".stuffs-entry-edit" ), "La roue crantée devrait vivre en haut à droite de la vignette" );
        TEST.ASSERT.notNull( _top.querySelector( ".stuffs-entry-unequip" ), "La croix de déquipage devrait vivre à côté de la roue" );
    }
    // L'épée longue est à 1 main : les puces [Main] [Main secondaire]
    let _choices = _sword_card.querySelectorAll( ".stuffs-slot-choice" );
    TEST.ASSERT.equal( _choices.length, 2, "Une arme à 1 main devrait porter ses deux puces de main, obtenu : " + _choices.length );
    TEST.ASSERT.equal( _choices.length ? _choices[ 0 ].getAttribute( "data-active" ) : null, "true", "La puce Main devrait etre active (l'épée est en main)" );
    // La quantité ne s'affiche pas sur un objet équipé
    TEST.ASSERT.isNull( _sword_card.querySelector( ".stuffs-entry-quantity" ), "La quantité ne devrait pas s'afficher sur une vignette équipée" );
} );

TEST.RUNNER.register( "[VIGNETTES] sac à dos : bandeau + vignettes cliquables, bouclier en label « Bouclier »", function () {
    let _pane = TEST_vignettesPane();
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Équipement ouvert" );
    if ( !_pane ) {
        return;
    }
    let _stuffs    = CONTROLLER.Character.current_character.getStuffs();
    let _backpack  = _stuffs.getStuffsByLocation( "backpack" );
    let _section   = _pane.querySelector( ".stuffs-section[data-location='backpack']" );
    let _hint      = _section ? _section.querySelector( ".stuffs-section-hint" ) : null;
    TEST.ASSERT.notNull( _hint, "Le sac à dos devrait porter son bandeau « cliquer pour équiper »" );
    TEST.ASSERT.ok( _hint && _hint.textContent.indexOf( "Cliquer sur une vignette pour équiper (" + _backpack.length + " disponibles)" ) !== -1, "Le bandeau devrait porter le texte et le compte, obtenu : [" + ( _hint ? _hint.textContent : "null" ) + "]" );
    let _cards = _section ? _section.querySelectorAll( ".stuffs-card--clickable" ) : [];
    TEST.ASSERT.equal( _cards.length, _backpack.length, "Chaque objet du sac devrait rendre une vignette cliquable (" + _backpack.length + "), obtenu : " + _cards.length );
    // Le bouclier du sac (posé par scenario_stuffs) porte le label « Bouclier »
    let _shield_name = null;
    for ( let i = 0, _size_i = _backpack.length; i < _size_i && !_shield_name; i++ ) {
        if ( _backpack[ i ].getSlot() === "shield" ) {
            _shield_name = _backpack[ i ].value;
        }
    }
    TEST.ASSERT.notNull( _shield_name, "Pre-condition : un bouclier devrait être au sac à dos" );
    if ( _shield_name ) {
        let _shield_card = TEST_vignettesCard( "backpack", _shield_name );
        TEST.ASSERT.ok( _shield_card && _shield_card.querySelector( ".stuffs-card-slot" ) && _shield_card.querySelector( ".stuffs-card-slot" ).textContent === "Bouclier", "La vignette du bouclier devrait porter le label « Bouclier », obtenu : [" + ( _shield_card && _shield_card.querySelector( ".stuffs-card-slot" ) ? _shield_card.querySelector( ".stuffs-card-slot" ).textContent : "null" ) + "]" );
    }
} );

TEST.RUNNER.register( "[VIGNETTES] clic vignette bouclier = équipé en Main secondaire, croix = retour au sac", function () {
    let _pane = TEST_vignettesPane();
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Équipement ouvert" );
    if ( !_pane ) {
        return;
    }
    let _character   = CONTROLLER.Character.current_character;
    let _stuffs      = _character.getStuffs();
    let _shield_name = null;
    let _backpack    = _stuffs.getStuffsByLocation( "backpack" );
    for ( let i = 0, _size_i = _backpack.length; i < _size_i && !_shield_name; i++ ) {
        if ( _backpack[ i ].getSlot() === "shield" ) {
            _shield_name = _backpack[ i ].value;
        }
    }
    TEST.ASSERT.notNull( _shield_name, "Pre-condition : un bouclier au sac à dos" );
    if ( !_shield_name ) {
        return;
    }
    // Le geste réel : clic sur la vignette cliquable du sac
    TEST_vignettesClickBackpackCard( _shield_name );
    return TEST.wait().then( function () {
        let _shield = _stuffs.getContentByUUID( "armor__" + _shield_name );
        TEST.ASSERT.equal( _shield ? _shield.location : null, "equipped", "Le bouclier devrait etre équipé après le clic, obtenu : [" + ( _shield ? _shield.location : "null" ) + "]" );
        // Il occupe la case Main secondaire (pas de case Bouclier à part)
        TEST.ASSERT.equal( STUFF.getSlotCase( _shield.getSlot() ), "off_hand", "La case du bouclier devrait etre la Main secondaire" );
        let _card = TEST_vignettesCard( "equipped", _shield_name );
        TEST.ASSERT.notNull( _card, "La vignette du bouclier devrait se rendre dans le schéma Équipé" );
        if ( _card ) {
            let _slot = _card.closest( ".stuffs-slot" );
            TEST.ASSERT.equal( _slot ? _slot.getAttribute( "data-slot" ) : null, "off_hand", "Le bouclier devrait siéger dans la case Main secondaire, obtenu : [" + ( _slot ? _slot.getAttribute( "data-slot" ) : "null" ) + "]" );
            let _slot_label = _card.querySelector( ".stuffs-card-slot" );
            TEST.ASSERT.equal( _slot_label ? _slot_label.textContent : null, "Bouclier", "La vignette du bouclier devrait porter le label « Bouclier », obtenu : [" + ( _slot_label ? _slot_label.textContent : "null" ) + "]" );
        }
        // La croix déquipe : retour au sac à dos, la case disparaît du schéma
        let _cross = _card ? _card.querySelector( ".stuffs-entry-unequip" ) : null;
        TEST.ASSERT.notNull( _cross, "La vignette équipée devrait porter sa croix de déquipage" );
        if ( !_cross ) {
            return;
        }
        _cross.click();
        return TEST.wait().then( function () {
            TEST.ASSERT.equal( _stuffs.getContentByUUID( "armor__" + _shield_name ).location, "backpack", "La croix devrait rendre le bouclier au sac à dos, obtenu : [" + _stuffs.getContentByUUID( "armor__" + _shield_name ).location + "]" );
            let _offhand_slot = _pane.querySelector( ".stuffs-section[data-location='equipped'] .stuffs-slot[data-slot='off_hand']" );
            TEST.ASSERT.isNull( _offhand_slot, "La case Main secondaire devrait disparaître du schéma (cases vides cachées), obtenu : [" + ( _offhand_slot ? "présente" : "absente" ) + "]" );
            TEST.ASSERT.notNull( TEST_vignettesCard( "backpack", _shield_name ), "Le bouclier devrait réapparaître en vignette cliquable au sac" );
        } );
    } );
} );

TEST.RUNNER.register( "[VIGNETTES] échange de case + puces de main + arme à 2 mains", function () {
    let _pane = TEST_vignettesPane();
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Équipement ouvert" );
    if ( !_pane ) {
        return;
    }
    let _character = CONTROLLER.Character.current_character;
    let _stuffs    = _character.getStuffs();
    // Une rapière (1 main) au sac par la bibliothèque
    return TEST_stuffsAddViaLibrary( "Rapière" ).then( function () {
        TEST.ASSERT.equal( _stuffs.getContentByUUID( "weapon__Rapière" ).location, "backpack", "La rapière devrait arriver au sac à dos" );
        // Clic vignette → équipée en Main, l'épée longue (déjà en main) retourne au sac
        TEST_vignettesClickBackpackCard( "Rapière" );
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( _stuffs.getContentByUUID( "weapon__Rapière" ).location, "equipped", "La rapière devrait etre équipée après le clic" );
        TEST.ASSERT.equal( _stuffs.getContentByUUID( "weapon__Épée longue" ).location, "backpack", "L'épée longue (même case Main) devrait retourner au sac, obtenu : [" + _stuffs.getContentByUUID( "weapon__Épée longue" ).location + "]" );
        let _card = TEST_vignettesCard( "equipped", "Rapière" );
        TEST.ASSERT.notNull( _card, "La vignette de la rapière devrait se rendre équipée" );
        if ( !_card ) {
            return;
        }
        let _slot = _card.closest( ".stuffs-slot" );
        TEST.ASSERT.equal( _slot ? _slot.getAttribute( "data-slot" ) : null, "main", "La rapière devrait siéger en Main" );
        // Puces de main : clic sur « Main secondaire » → slot off_hand, case off_hand
        let _offhand_choice = _card.querySelector( ".stuffs-slot-choice[data-slot='off_hand']" );
        TEST.ASSERT.notNull( _offhand_choice, "La rapière (1 main) devrait porter la puce Main secondaire" );
        if ( !_offhand_choice ) {
            return;
        }
        _offhand_choice.click();
        return TEST.wait().then( function () {
            TEST.ASSERT.equal( _stuffs.getContentByUUID( "weapon__Rapière" ).getSlot(), "off_hand", "La puce devrait poser la rapière en Main secondaire, obtenu : [" + _stuffs.getContentByUUID( "weapon__Rapière" ).getSlot() + "]" );
            let _card2 = TEST_vignettesCard( "equipped", "Rapière" );
            let _slot2 = _card2 ? _card2.closest( ".stuffs-slot" ) : null;
            TEST.ASSERT.equal( _slot2 ? _slot2.getAttribute( "data-slot" ) : null, "off_hand", "La vignette devrait passer dans la case Main secondaire, obtenu : [" + ( _slot2 ? _slot2.getAttribute( "data-slot" ) : "null" ) + "]" );
            // Une arbalète (2 mains) au sac, clic vignette → case Main, label « Deux
            // mains », la rapière (main secondaire) retourne au sac
            return TEST_stuffsAddViaLibrary( "Arbalète" ).then( function () {
                TEST_vignettesClickBackpackCard( "Arbalète" );
                return TEST.wait();
            } ).then( function () {
                TEST.ASSERT.equal( _stuffs.getContentByUUID( "weapon__Arbalète" ).location, "equipped", "L'arbalète devrait etre équipée" );
                TEST.ASSERT.equal( _stuffs.getContentByUUID( "weapon__Rapière" ).location, "backpack", "La rapière (main secondaire) devrait repartir au sac avec l'arme à 2 mains, obtenu : [" + _stuffs.getContentByUUID( "weapon__Rapière" ).location + "]" );
                let _arbalete_card = TEST_vignettesCard( "equipped", "Arbalète" );
                TEST.ASSERT.notNull( _arbalete_card, "La vignette de l'arbalète devrait se rendre équipée" );
                if ( _arbalete_card ) {
                    let _slot3 = _arbalete_card.closest( ".stuffs-slot" );
                    TEST.ASSERT.equal( _slot3 ? _slot3.getAttribute( "data-slot" ) : null, "main", "L'arbalète devrait se poser dans la case Main, obtenu : [" + ( _slot3 ? _slot3.getAttribute( "data-slot" ) : "null" ) + "]" );
                    let _label = _arbalete_card.querySelector( ".stuffs-card-slot" );
                    TEST.ASSERT.equal( _label ? _label.textContent : null, STUFF.TWO_HANDS_LABEL, "La vignette de l'arme à 2 mains devrait porter le label « Deux mains », obtenu : [" + ( _label ? _label.textContent : "null" ) + "]" );
                    TEST.ASSERT.isNull( _arbalete_card.querySelector( ".stuffs-slot-choice" ), "Une arme à 2 mains ne porte pas les puces de main" );
                }
                // Save → load : emplacements et slots survivent
                let _reloaded = new CHARACTER.Current();
                _reloaded.updateData( _character.getDataToSave() );
                TEST.ASSERT.equal( _reloaded.getStuffs().getContentByUUID( "weapon__Arbalète" ).location, "equipped", "L'arbalète équipée devrait survivre à la relecture" );
                TEST.ASSERT.equal( _reloaded.getStuffs().getContentByUUID( "weapon__Épée longue" ).location, "backpack", "L'épée au sac devrait survivre à la relecture" );
            } );
        } );
    } );
} );

// Relecture d'un vieux save : deux armes équipées dans la même main (cas
// Tyrane : Rapière + Épée courte, slot null → case main toutes les deux) —
// la règle « une case = une pièce » s'applique au chargement : la première
// reste équipée, l'autre retourne au sac à dos. Une arme à 2 mains gagne
// les deux mains.
TEST.RUNNER.register( "[VIGNETTES] relecture vieux save : deux armes même main = une équipée, l'autre au sac", function () {
    let _fixture = { "stuffs": [
        { "kind": "weapon", "value": "Rapière",      "quantity": 1, "location": "equipped", "slot": null },
        { "kind": "weapon", "value": "Épée courte",  "quantity": 1, "location": "equipped", "slot": null }
    ] };
    let _reloaded = new CHARACTER.Current();
    _reloaded.updateData( _fixture );
    let _stuffs = _reloaded.getStuffs();
    TEST.ASSERT.equal( _stuffs.getContentByUUID( "weapon__Rapière" ).location, "equipped", "La première arme de la case devrait rester équipée, obtenu : [" + _stuffs.getContentByUUID( "weapon__Rapière" ).location + "]" );
    TEST.ASSERT.equal( _stuffs.getContentByUUID( "weapon__Épée courte" ).location, "backpack", "La seconde arme de la même case devrait repartir au sac à dos, obtenu : [" + _stuffs.getContentByUUID( "weapon__Épée courte" ).location + "]" );
    // Une arme à 2 mains équipée gagne les deux mains, même lue avant
    let _fixture2 = { "stuffs": [
        { "kind": "weapon", "value": "Épée courte",  "quantity": 1, "location": "equipped", "slot": null },
        { "kind": "weapon", "value": "Arbalète",     "quantity": 1, "location": "equipped", "slot": null }
    ] };
    let _reloaded2 = new CHARACTER.Current();
    _reloaded2.updateData( _fixture2 );
    let _stuffs2 = _reloaded2.getStuffs();
    TEST.ASSERT.equal( _stuffs2.getContentByUUID( "weapon__Arbalète" ).location, "equipped", "L'arbalète (2 mains) devrait rester équipée, obtenu : [" + _stuffs2.getContentByUUID( "weapon__Arbalète" ).location + "]" );
    TEST.ASSERT.equal( _stuffs2.getContentByUUID( "weapon__Épée courte" ).location, "backpack", "L'arme à 1 main devrait repartir au sac (les deux mains sont prises), obtenu : [" + _stuffs2.getContentByUUID( "weapon__Épée courte" ).location + "]" );
} );
