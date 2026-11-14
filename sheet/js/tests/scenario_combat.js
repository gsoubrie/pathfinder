"use strict";
/**
 * Scenario : COMBAT (chaine, suite de scenario_sauvegardes)
 * Depart : fin du scenario SAUVEGARDES — Magicien niveau 5, onglet General,
 * personnage au PV maximum. L'onglet Combat porte le suivi PV (demande
 * utilisateur) : UN CHAMP PV au General (le clic bascule vers Combat), la
 * bande PV (courant / max, PV temporaires) et les trois modales de jeu dans
 * l'onglet, le journal des soins et pertes dessous (du plus recent au plus
 * ancien), les degats absorbent d'abord les PV temporaires. Le save embarque
 * le PV courant, les PV temporaires et le journal — la relecture restaure
 * tout (l'ancien comportement repartait du maximum).
 * L'onglet porte AUSSI la reference de combat : vitesse, initiative (elle
 * roule sur Perception) et classe d'armure (10 + dex plafonne + bonus
 * d'armure + bonus de rang de defense, popup de sources), les trois jets de
 * sauvegarde, les lignes d'attaque (mains nues + chaque arme EQUIPEE : rang
 * de la categorie, caractéristique FOR/DEX par Portee/Bombe/Finesse, jet,
 * degats scrapes) et l'incantation quand le personnage porte les rangs
 * (attaque de sort, DD des sorts, clé = caractère clé de la classe).
 */
var TEST_combatPane = function () {
    return document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "']" );
};

TEST.RUNNER.register( "[COMBAT] champ PV du Général + bascule vers l'onglet Combat", function () {
    let _character                       = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    let _health                          = _character.getHealth();
    TEST.ASSERT.equal( _health.getCurrentHP(), _health.getMaxHP(), "Pre-condition : le personnage devrait être au PV maximum, obtenu : " + _health.getCurrentHP() + "/" + _health.getMaxHP() );
    let _expected                        = _health.getCurrentHP() + " / " + _health.getMaxHP();
    let _pv_input                        = document.querySelector( ".characters-sheet-content .area-pv input.health-points-link" );
    TEST.ASSERT.notNull( _pv_input, "Le champ PV du Général devrait être rendu (area-pv > input.health-points-link)" );
    if ( !_pv_input ) {
        return;
    }
    TEST.ASSERT.equal( _pv_input.value, _expected, "Le champ PV du Général devrait afficher " + _expected + ", obtenu : [" + _pv_input.value + "]" );
    _pv_input.click();
    TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.CombatWindow.NAME, "Le clic sur le champ PV devrait activer l'onglet Combat" );
} );

TEST.RUNNER.register( "[COMBAT] bande PV + journal vide + les trois gestes disponibles", function () {
    let _character                       = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    let _pane                            = TEST_combatPane();
    TEST.ASSERT.notNull( _pane, "Le panneau Combat devrait exister" );
    if ( !_pane || !_character ) {
        return;
    }
    let _health                          = _character.getHealth();
    let _expected                        = _health.getCurrentHP() + " / " + _health.getMaxHP();
    TEST.ASSERT.equal( _pane.querySelector( ".combat-health-points-value" ).textContent, _expected, "La bande PV devrait afficher " + _expected + ", obtenu : [" + _pane.querySelector( ".combat-health-points-value" ).textContent + "]" );
    TEST.ASSERT.equal( _pane.querySelector( ".combat-health-percentage" ).textContent, "100%", "La bande PV devrait afficher 100% au PV maximum" );
    TEST.ASSERT.equal( _pane.querySelector( ".combat-health-temp-value" ).textContent, "0", "Les PV temporaires devraient valoir 0" );
    TEST.ASSERT.equal( _pane.querySelectorAll( ".combat-health-history .health-history-entry" ).length, 0, "Le journal devrait être vide, obtenu : " + _pane.querySelectorAll( ".combat-health-history .health-history-entry" ).length );
    TEST.ASSERT.notNull( _pane.querySelector( ".combat-health-button--heal" ), "Le bouton Soigner devrait être rendu" );
    TEST.ASSERT.notNull( _pane.querySelector( ".combat-health-button--temp" ), "Le bouton + PV Temp devrait être rendu" );
    TEST.ASSERT.notNull( _pane.querySelector( ".combat-health-button--damage" ), "Le bouton Dégâts devrait être rendu" );
} );

// La gesture réelle : cliquer le bouton, remplir la modale, confirmer. Le
// journal journalise, la bande PV de l'onglet et le champ PV du Général
// suivent l'état frais du domaine
TEST.RUNNER.register( "[COMBAT] dégâts : la modale journalise, la bande et le champ Général suivent", function () {
    let _character                       = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    let _pane                            = TEST_combatPane();
    if ( !_character || !_pane ) {
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Combat rendu" );
        return;
    }
    _pane.querySelector( ".combat-health-button--damage" ).click();
    let _modal                           = document.querySelector( "body > .modal" );
    TEST.ASSERT.notNull( _modal, "La modale de dégâts devrait s'ouvrir au clic sur Dégâts" );
    if ( !_modal ) {
        return;
    }
    _modal.querySelector( "input[name='value']" ).value = "8";
    _modal.querySelectorAll( ".modal-button" )[ 1 ].click();
    TEST.ASSERT.isNull( document.querySelector( "body > .modal" ), "La modale devrait se fermer après confirmation" );
    let _health                          = _character.getHealth();
    TEST.ASSERT.equal( _health.getCurrentHP(), _health.getMaxHP() - 8, "Le PV courant devrait valoir max - 8, obtenu : " + _health.getCurrentHP() + "/" + _health.getMaxHP() );
    let _expected                        = _health.getCurrentHP() + " / " + _health.getMaxHP();
    TEST.ASSERT.equal( _pane.querySelector( ".combat-health-points-value" ).textContent, _expected, "La bande PV devrait afficher " + _expected );
    let _entries                         = _pane.querySelectorAll( ".combat-health-history .health-history-entry" );
    TEST.ASSERT.equal( _entries.length, 1, "Le journal devrait porter l'entrée de dégâts, obtenu : " + _entries.length );
    if ( _entries.length === 1 ) {
        TEST.ASSERT.equal( _entries[ 0 ].getAttribute( "data-type" ), "damage", "L'entrée devrait être de type damage" );
        TEST.ASSERT.ok( _entries[ 0 ].textContent.indexOf( "-8 PV" ) !== -1, "L'entrée devrait afficher -8 PV, obtenu : [" + _entries[ 0 ].textContent + "]" );
    }
    let _pv_input                        = document.querySelector( ".characters-sheet-content .area-pv input.health-points-link" );
    TEST.ASSERT.notNull( _pv_input, "Le champ PV du Général devrait être rendu" );
    if ( _pv_input ) {
        TEST.ASSERT.equal( _pv_input.value, _expected, "Le champ PV du Général devrait suivre la perte, obtenu : [" + _pv_input.value + "]" );
    }
} );

TEST.RUNNER.register( "[COMBAT] soins puis PV temporaires : les dégâts suivants absorbent le temp", function () {
    let _character                       = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    let _pane                            = TEST_combatPane();
    if ( !_character || !_pane ) {
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Combat rendu" );
        return;
    }
    let _health                          = _character.getHealth();
    let _max                             = _health.getMaxHP();
    let _entries_before                  = _health.getHistoryEntries().getSize();

    _pane.querySelector( ".combat-health-button--heal" ).click();
    document.querySelector( "body > .modal input[name='value']" ).value = "5";
    document.querySelectorAll( "body > .modal .modal-button" )[ 1 ].click();
    TEST.ASSERT.equal( _health.getCurrentHP(), _max - 3, "5 soins sur max - 8 PV : le courant devrait valoir max - 3, obtenu : " + _health.getCurrentHP() );

    _pane.querySelector( ".combat-health-button--temp" ).click();
    document.querySelector( "body > .modal input[name='value']" ).value = "10";
    document.querySelectorAll( "body > .modal .modal-button" )[ 1 ].click();
    TEST.ASSERT.equal( _health.getTempHP(), 10, "Les PV temporaires devraient valoir 10, obtenu : " + _health.getTempHP() );
    TEST.ASSERT.equal( _pane.querySelector( ".combat-health-temp-value" ).textContent, "10", "La bande PV devrait afficher les PV temporaires" );

    // Frontière PF2 : les dégâts mangent d'abord les PV temporaires, le
    // courant ne bouge pas tant que le temp couvre
    _pane.querySelector( ".combat-health-button--damage" ).click();
    document.querySelector( "body > .modal input[name='value']" ).value = "3";
    document.querySelectorAll( "body > .modal .modal-button" )[ 1 ].click();
    TEST.ASSERT.equal( _health.getTempHP(), 7, "3 dégâts absorbés par le temp : il devrait rester 7 PV temporaires, obtenu : " + _health.getTempHP() );
    TEST.ASSERT.equal( _health.getCurrentHP(), _max - 3, "Le PV courant ne devrait pas bouger (absorbé par le temp), obtenu : " + _health.getCurrentHP() );

    let _entries                         = _pane.querySelectorAll( ".combat-health-history .health-history-entry" );
    TEST.ASSERT.equal( _entries.length, _entries_before + 3, "Le journal devrait porter les trois événements de la suite (dégâts, soins, dégâts absorbés), obtenu : " + _entries.length );
    if ( _entries.length === _entries_before + 3 ) {
        TEST.ASSERT.equal( _entries[ 0 ].getAttribute( "data-type" ), "damage", "Le journal se lit du plus récent : l'entrée de tête devrait être le dernier dégât" );
        TEST.ASSERT.ok( _entries[ 0 ].textContent.indexOf( "-3 PV" ) !== -1, "L'entrée de tête devrait afficher -3 PV, obtenu : [" + _entries[ 0 ].textContent + "]" );
    }
} );

// Le save embarque PV courant + PV temporaires + journal ; la relecture
// restaure l'état au lieu de repartir du maximum (l'entrée ne se REJOUE
// jamais : le journal est une donnée, pas une source de calcul)
TEST.RUNNER.register( "[COMBAT] save → relecture : PV courant, PV temporaires et journal restaurés", function () {
    let _character                       = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    let _health                          = _character.getHealth();
    let _saved                           = _character.getDataToSave();
    TEST.ASSERT.ok( _saved[ "health" ], "Le save devrait porter la clé health" );
    if ( !_saved[ "health" ] ) {
        return;
    }
    TEST.ASSERT.equal( _saved[ "health" ].current_hp, _health.getCurrentHP(), "Le save devrait porter le PV courant" );
    TEST.ASSERT.equal( _saved[ "health" ].temp_hp, _health.getTempHP(), "Le save devrait porter les PV temporaires" );
    TEST.ASSERT.isArray( _saved[ "health" ].history, "Le save devrait porter le journal" );
    TEST.ASSERT.equal( _saved[ "health" ].history.length, _health.getHistoryEntries().getSize(), "Le journal du save devrait porter toutes les entrées" );

    let _reloaded                        = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
    TEST.ASSERT.equal( _reloaded.getHealth().getMaxHP(), _health.getMaxHP(), "Le maximum devrait être recalculé par le domaine, obtenu : " + _reloaded.getHealth().getMaxHP() );
    TEST.ASSERT.equal( _reloaded.getHealth().getCurrentHP(), _health.getCurrentHP(), "Le PV courant devrait être restauré (l'ancien comportement repartait du maximum), obtenu : " + _reloaded.getHealth().getCurrentHP() );
    TEST.ASSERT.equal( _reloaded.getHealth().getTempHP(), _health.getTempHP(), "Les PV temporaires devraient être restaurés, obtenu : " + _reloaded.getHealth().getTempHP() );
    TEST.ASSERT.equal( _reloaded.getHealth().getHistoryEntries().getSize(), _health.getHistoryEntries().getSize(), "Le journal devrait être restauré, obtenu : " + _reloaded.getHealth().getHistoryEntries().getSize() );
} );

// La reference de combat se lit a l'activation de l'onglet : les valeurs se
// croisent avec le domaine maitrisees/combat, la classe d'armure ouvre sa
// popup de sources (refermee par son uuid, regle Round 45)
TEST.RUNNER.register( "[COMBAT] zone référence = vitesse, initiative, classe d'armure + sauvegardes", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.CombatWindow.NAME ).then( function () {
        let _character    = CONTROLLER.Character.current_character;
        let _pane         = TEST_combatPane();
        TEST.ASSERT.notNull( _pane, "Le panneau Combat devrait exister" );
        if ( !_pane || !_character ) {
            return;
        }
        let _race         = _character.getRace();
        let _speed_cell   = _pane.querySelector( ".combat-reference-cell[data-name='speed'] .combat-reference-value" );
        TEST.ASSERT.equal( _speed_cell.textContent, _race.speed + " mètres", "La vitesse devrait lire la course de l'ascendance, obtenu : [" + _speed_cell.textContent + "]" );
        let _masteries        = _character.getMasteries();
        let _initiative_cell  = _pane.querySelector( ".combat-reference-cell[data-name='initiative'] .combat-reference-value" );
        TEST.ASSERT.equal( _initiative_cell.textContent, "" + _masteries.getRollModifier( _character, COMBAT.INITIATIVE_ROLL ), "L'initiative devrait valoir le jet de perception du domaine, obtenu : [" + _initiative_cell.textContent + "]" );
        let _armor_cell       = _pane.querySelector( ".combat-reference-cell[data-name='armor_class'] .combat-reference-value" );
        TEST.ASSERT.equal( _armor_cell.textContent, "" + _character.getCombat().getArmorClassData( _character ).value, "La classe d'armure devrait valoir le calcul du domaine, obtenu : [" + _armor_cell.textContent + "]" );
        // Les trois sauvegardes, croisees au domaine
        for ( let _i = 0, _size_i = COMBAT.SAVES.length; _i < _size_i; _i++ ) {
            let _save = COMBAT.SAVES[ _i ];
            let _cell = _pane.querySelector( ".combat-save-value[data-name='" + _save.slot + "']" );
            TEST.ASSERT.equal( _cell.textContent, "" + _masteries.getRollModifier( _character, { "slot": _save.slot, "characteristic": _save.characteristic } ), "La sauvegarde " + _save.label + " devrait valoir le jet du domaine, obtenu : [" + _cell.textContent + "]" );
        }
        // Le clic ouvre la popup des sources de la classe d'armure
        _pane.querySelector( ".combat-reference-cell[data-name='armor_class']" ).click();
        let _popup = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _popup, "Le clic sur la classe d'armure devrait ouvrir sa popup" );
        if ( _popup ) {
            TEST.ASSERT.ok( _popup.textContent.indexOf( "Base" ) !== -1 && _popup.textContent.indexOf( "Dextérité" ) !== -1, "La popup devrait citer ses sources de calcul, obtenu : [" + _popup.textContent + "]" );
            CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "character__armor_class" } );
        }
    } );
} );

// Les lignes d'attaque : les mains nues seules, puis chaque arme EQUIPEE
// rejoint la liste ; l'armure equipee bouge la classe d'armure, le "?" d'une
// arme ouvre sa popup d'objet
TEST.RUNNER.register( "[COMBAT] attaques = mains nues + armes équipées, armure = CA", function () {
    let _character    = CONTROLLER.Character.current_character;
    let _pane         = TEST_combatPane();
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Combat ouvert" );
    if ( !_pane || !_character ) {
        return;
    }
    let _combat       = _character.getCombat();
    let _masteries    = _character.getMasteries();
    let _rows         = _pane.querySelectorAll( ".combat-attack-row:not(.combat-attack-row--header)" );
    TEST.ASSERT.equal( _rows.length, 1, "Sans arme équipée la zone ne devrait porter que les mains nues, obtenu : " + _rows.length );
    // La zone Équipement vit toujours : sans pièce portée, chaque ligne
    // affiche sa valeur vide, jamais une ligne manquante
    let _equipment_values = _pane.querySelectorAll( ".combat-equipment-value" );
    TEST.ASSERT.equal( _equipment_values.length, 2, "La zone Équipement devrait porter ses deux lignes Armure et Bouclier, obtenu : " + _equipment_values.length );
    TEST.ASSERT.equal( _equipment_values[ 0 ].textContent, "—", "Sans armure portée la ligne Armure devrait afficher une valeur vide" );
    TEST.ASSERT.equal( _equipment_values[ 1 ].textContent, "—", "Sans bouclier porté la ligne Bouclier devrait afficher une valeur vide" );
    let _fist_roll    = _masteries.getRollModifier( _character, { "slot": COMBAT.UNARMED_SLOT, "characteristic": COMBAT.UNARMED_CHARACTERISTIC } );
    TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".combat-attack-col-roll" ).textContent, "" + _fist_roll, "Le jet des mains nues devrait valoir le calcul du domaine, obtenu : [" + _rows[ 0 ].querySelector( ".combat-attack-col-roll" ).textContent + "]" );
    // Le plat des popups d'ajout porte l'inventaire réel : une armure et une
    // arme de mêlée ÉQUIPÉES, une arme à distance ÉQUIPÉE
    CONTROLLER.Main.doActionAfter( "event__stuff__add", { "param__stuff__kind": "armor", "param__stuff__value": "Armure d'écailles", "param__stuff__location": "equipped", "param__stuff__comment": null, "param__stuff__place": null } );
    CONTROLLER.Main.doActionAfter( "event__stuff__add", { "param__stuff__kind": "weapon", "param__stuff__value": "Épée longue", "param__stuff__location": "equipped", "param__stuff__comment": null, "param__stuff__place": null } );
    CONTROLLER.Main.doActionAfter( "event__stuff__add", { "param__stuff__kind": "weapon", "param__stuff__value": "Arc long", "param__stuff__location": "equipped", "param__stuff__comment": null, "param__stuff__place": null } );
    let _rows_after   = _pane.querySelectorAll( ".combat-attack-row:not(.combat-attack-row--header)" );
    TEST.ASSERT.equal( _rows_after.length, 3, "Chaque arme équipée devrait rejoindre les mains nues, obtenu : " + _rows_after.length );
    // L'épée longue roule en mêlée sur la Force, l'arc long porte sa Portée
    // scrapée : il roule sur la Dextérité
    let _for_value    = _character.getCharacteristics().getContentByUUID( COMBAT.MELEE_CHARACTERISTIC );
    let _dex_value    = _character.getCharacteristics().getContentByUUID( COMBAT.RANGED_CHARACTERISTIC );
    let _sword_mod    = _rows_after[ 1 ].querySelector( ".combat-attack-col-modifier" ).textContent;
    TEST.ASSERT.equal( _sword_mod, COMBAT.MELEE_CHARACTERISTIC + " " + ( _for_value ? _for_value.getModifierValue() : 0 ), "L'épée longue devrait rouler sur la Force, obtenu : [" + _sword_mod + "]" );
    let _bow_mod      = _rows_after[ 2 ].querySelector( ".combat-attack-col-modifier" ).textContent;
    TEST.ASSERT.equal( _bow_mod, COMBAT.RANGED_CHARACTERISTIC + " " + ( _dex_value ? _dex_value.getModifierValue() : 0 ), "L'arc long devrait rouler sur la Dextérité (Portée scrapée), obtenu : [" + _bow_mod + "]" );
    // La classe d'armure suit l'armure equipée : 10 + dex plafonné + bonus
    // d'armure + bonus du rang de defense
    let _armor_cell   = _pane.querySelector( ".combat-reference-cell[data-name='armor_class'] .combat-reference-value" );
    let _armor_data   = _combat.getArmorClassData( _character );
    TEST.ASSERT.equal( _armor_cell.textContent, "" + _armor_data.value, "La classe d'armure devrait suivre l'armure équipée, obtenu : [" + _armor_cell.textContent + "]" );
    TEST.ASSERT.equal( _armor_data.dex_used, Math.min( _dex_value ? _dex_value.getModifierValue() : 0, COMBAT.parseSignedNumber( _armor_data.armor.getCharacteristicValue( COMBAT.DEX_CAP_FIELD ) ) ), "La dextérité devrait se plafonner au Mod. de dex. max. de l'armure, obtenu : " + _armor_data.dex_used );
    // La zone Équipement porte l'armure ÉQUIPÉE : nom, stats du domaine, "?"
    let _armor_entry  = _character.getStuffs().getContentByUUID( "armor__Armure d'écailles" );
    let _equipment_names  = _pane.querySelectorAll( ".combat-equipment-value" );
    let _equipment_stats  = _pane.querySelectorAll( ".combat-equipment-stats" );
    TEST.ASSERT.equal( _equipment_names[ 0 ].textContent, "Armure d'écailles", "La ligne Armure devrait porter l'armure équipée, obtenu : [" + _equipment_names[ 0 ].textContent + "]" );
    TEST.ASSERT.equal( _equipment_stats[ 0 ].textContent, "CA " + _armor_entry.getCharacteristicValue( COMBAT.ARMOR_BONUS_FIELD ) + ", Mod. de dex. max. " + _armor_entry.getCharacteristicValue( COMBAT.DEX_CAP_FIELD ), "La ligne Armure devrait citer les stats de sa pièce, obtenu : [" + _equipment_stats[ 0 ].textContent + "]" );
    TEST.ASSERT.ok( _pane.querySelectorAll( ".combat-equipment-row" )[ 0 ].querySelector( ".combat-attack-info" ), "La ligne Armure devrait porter son ? de popup" );
    TEST.ASSERT.equal( _equipment_names[ 1 ].textContent, "—", "Sans bouclier équipé la ligne Bouclier reste vide, obtenu : [" + _equipment_names[ 1 ].textContent + "]" );
    // Le "?" d'une arme ouvre la popup d'objet (uuid = stuff__<nom>)
    _rows_after[ 1 ].querySelector( ".combat-attack-info" ).click();
    let _popup = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _popup, "Le ? d'une arme devrait ouvrir sa popup d'objet" );
    if ( _popup ) {
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "stuff__Épée longue" } );
    }
    // La suite reprend un inventaire VIERGE : scenario_equipement_complet
    // (fin de chaîne) repose ses objets par les PREMIERES options du
    // dataset — un objet laissé ici vit en doublon et son ajout no-ope
    // (les non-consommables ne se créent pas deux fois), le compte
    // attendu de sa dizaine manque alors une entrée
    CONTROLLER.Character.doActionAfter( "event__stuff__remove", { "param__stuff__kind": "armor", "param__stuff__value": "Armure d'écailles" } );
    CONTROLLER.Character.doActionAfter( "event__stuff__remove", { "param__stuff__kind": "weapon", "param__stuff__value": "Épée longue" } );
    CONTROLLER.Character.doActionAfter( "event__stuff__remove", { "param__stuff__kind": "weapon", "param__stuff__value": "Arc long" } );
} );

// Le Magicien porte ses rangs d'incantation : la zone rend l'attaque de sort
// (niveau + mod INT + bonus de rang) et le DD des sorts (10 + les memes)
TEST.RUNNER.register( "[COMBAT] incantation = attaque de sort + DD des sorts", function () {
    let _character    = CONTROLLER.Character.current_character;
    let _pane         = TEST_combatPane();
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Combat ouvert" );
    if ( !_pane || !_character ) {
        return;
    }
    let _lines        = _pane.querySelectorAll( ".combat-spellcasting-line" );
    TEST.ASSERT.equal( _lines.length, 2, "Le Magicien devrait porter ses deux lignes d'incantation, obtenu : " + _lines.length );
    let _masteries    = _character.getMasteries();
    let _int_value    = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.INT.key );
    let _int_mod      = _int_value ? _int_value.getModifierValue() : 0;
    let _attack_rank  = _masteries.getFinalRank( _character, "spell_attack" );
    let _dc_rank      = _masteries.getFinalRank( _character, "spell_dc" );
    let _attack_roll  = _character.getLevel() + _int_mod + MASTERY.getByShort( _attack_rank ).bonus;
    let _dc_value     = COMBAT.BASE_ARMOR_CLASS + _character.getLevel() + _int_mod + MASTERY.getByShort( _dc_rank ).bonus;
    TEST.ASSERT.ok( _pane.textContent.indexOf( "Attaque de sort" ) !== -1, "La zone devrait citer l'attaque de sort" );
    TEST.ASSERT.ok( _pane.textContent.indexOf( "DD des sorts" ) !== -1, "La zone devrait citer le DD des sorts" );
    let _values       = _pane.querySelectorAll( ".combat-spellcasting-value" );
    TEST.ASSERT.equal( _values[ 0 ].textContent, "" + _attack_roll, "L'attaque de sort devrait valoir " + _attack_roll + ", obtenu : [" + _values[ 0 ].textContent + "]" );
    TEST.ASSERT.equal( _values[ 1 ].textContent, "" + _dc_value, "Le DD des sorts devrait valoir " + _dc_value + ", obtenu : [" + _values[ 1 ].textContent + "]" );
} );
