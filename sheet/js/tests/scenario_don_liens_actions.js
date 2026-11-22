"use strict";
/**
 * [DON] liens des actions dans la popup don (suite indépendante, aucun
 * personnage requis) :
 *  1. La popup du don de compétence "Étudiant du droit canon" rend sa
 *     description avec les actions reconnues en liens gs-link-information
 *     ("Vous souvenir"...), chaque lien portant l'uuid de l'action.
 *  2. Le clic sur le lien "Vous souvenir" ouvre la popup de l'action du
 *     compendium (titre "Se souvenir"), les deux popups se ferment par leur
 *     uuid.
 */
TEST.RUNNER.register( "[DON] popup = liens d'actions dans la description", function () {
    let _feat_data = DON.getFeatInformation( "skill", "Étudiant du droit canon" );
    TEST.ASSERT.notNull( _feat_data, "Pre-condition : le don devrait exister dans les données" );
    if ( !_feat_data ) {
        return;
    }
    TEST.ASSERT.ok( _feat_data.description.indexOf( "gs-link-information" ) !== -1, "La description du don devrait porter des liens d'information, obtenu : " + _feat_data.description.slice( 0, 200 ) );
    CONTROLLER.Main.doActionAfter( "event__show_information__feat", { "param__feat_category": "skill", "param__feat_name": "Étudiant du droit canon" } );
    let _overlay   = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "La popup du don devrait s'ouvrir" );
    if ( !_overlay ) {
        return;
    }
    let _title     = _overlay.querySelector( ".popup-title" );
    TEST.ASSERT.notNull( _title, "La popup du don devrait afficher un titre" );
    if ( _title ) {
        TEST.ASSERT.equal( _title.textContent, "Étudiant du droit canon", "Le titre de la popup devrait etre le nom du don, obtenu : " + _title.textContent );
    }
    let _links     = _overlay.querySelectorAll( ".popup-description .gs-link-information" );
    TEST.ASSERT.ok( _links.length > 0, "La description de la popup devrait porter des liens d'actions" );
    let _recall    = null;
    for ( let i = 0, _size_i = _links.length; i < _size_i; i++ ) {
        if ( _links[ i ].textContent === "Vous souvenir" ) {
            _recall = _links[ i ];
        }
    }
    TEST.ASSERT.notNull( _recall, "La description devrait porter le lien \"Vous souvenir\"" );
    if ( _recall ) {
        TEST.ASSERT.ok( /param__object__uuid': '([^']+)'/.test( _recall.getAttribute( "onclick" ) ), "Le lien devrait embarquer l'uuid de l'action dans son onclick, obtenu : " + _recall.getAttribute( "onclick" ) );
    }
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "feat__skill__Étudiant du droit canon" } );
    TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup du don devrait etre masquee apres fermeture" );
} );

TEST.RUNNER.register( "[DON] clic sur le lien = popup de l'action ouverte", function () {
    CONTROLLER.Main.doActionAfter( "event__show_information__feat", { "param__feat_category": "skill", "param__feat_name": "Étudiant du droit canon" } );
    let _overlay   = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "Pre-condition : la popup du don devrait s'ouvrir" );
    if ( !_overlay ) {
        return;
    }
    let _links     = _overlay.querySelectorAll( ".popup-description .gs-link-information" );
    let _recall    = null;
    for ( let i = 0, _size_i = _links.length; i < _size_i; i++ ) {
        if ( _links[ i ].textContent === "Vous souvenir" ) {
            _recall = _links[ i ];
        }
    }
    TEST.ASSERT.notNull( _recall, "Pre-condition : le lien \"Vous souvenir\" devrait etre rendu" );
    if ( !_recall ) {
        return;
    }
    let _match     = _recall.getAttribute( "onclick" ).match( /param__object__uuid': '([^']+)'/ );
    TEST.ASSERT.notNull( _match, "Pre-condition : l'uuid de l'action devrait etre lisible dans le onclick" );
    if ( !_match ) {
        return;
    }
    let _uuid      = _match[ 1 ];
    let _action    = OBJECT.COMPENDIUM[ _uuid ];
    TEST.ASSERT.notNull( _action, "L'uuid du lien devrait exister dans le compendium, obtenu : " + _uuid );
    TEST.ASSERT.equal( _action ? _action.category : null, "action", "L'uuid du lien devrait pointer vers une action, obtenu : " + ( _action ? _action.category : null ) );
    _recall.click();
    let _open      = document.querySelectorAll( ".popup-overlay[data-current-phase='RUNNING']" );
    let _action_overlay = null;
    for ( let i = 0, _size_i = _open.length; i < _size_i; i++ ) {
        let _t = _open[ i ].querySelector( ".popup-title" );
        if ( _t && _t.textContent === "Se souvenir" ) {
            _action_overlay = _open[ i ];
        }
    }
    TEST.ASSERT.notNull( _action_overlay, "Le clic sur le lien devrait ouvrir la popup de l'action \"Se souvenir\"" );
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": _uuid } );
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "feat__skill__Étudiant du droit canon" } );
    let _still_open = document.querySelectorAll( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.equal( _still_open.length, 0, "Toutes les popups devraient etre fermees en fin de test, reste : " + _still_open.length );
} );

// Régression : les balises inline Foundry des descriptions scrapées
// (@Damage[formule[type]]{libellé}) doivent être réduites au libellé par le
// scraper — aucun résidu "[type]{" ne doit subsister (vu sur "Poussée
// punitive" qui affichait ")[bludgeoning]]{dégâts contondants...}")
TEST.RUNNER.register( "[DON] balayage des données = aucun résidu de balise inline dans les descriptions de dons", function () {
    let _lists    = [ DON.GENERAL.ENUM, DON.CLASS.ENUM, DON.RACE.ENUM[ 0 ], DON.SKILL.ENUM[ 0 ] ];
    let _residues = [];
    let _re       = /\[[a-z-]+\]\]?\{/;
    for ( let l = 0, _size_l = _lists.length; l < _size_l; l++ ) {
        for ( let f = 0, _size_f = _lists[ l ].length; f < _size_f; f++ ) {
            let _feat = _lists[ l ][ f ];
            let _desc = ( _feat.description || [] ).join( "\n" );
            if ( _re.test( _desc ) ) {
                _residues.push( _feat.name );
            }
        }
    }
    TEST.ASSERT.equal( _residues.length, 0, "Aucune description de don ne devrait contenir de résidu de balise inline [type]{..., dons concernés : " + _residues.slice( 0, 10 ).join( " | " ) + ( _residues.length > 10 ? "..." : "" ) );
} );

TEST.RUNNER.register( "[DON] popup Poussée punitive = jet de dégâts lisible, sans résidu brut", function () {
    let _feat_data = DON.getFeatInformation( "class", "Poussée punitive" );
    TEST.ASSERT.notNull( _feat_data, "Pre-condition : le don Poussée punitive devrait exister (classe)" );
    if ( !_feat_data ) {
        return;
    }
    TEST.ASSERT.ok( _feat_data.description.indexOf( "dégâts contondants égal à votre modificateur de Force" ) !== -1, "La description devrait garder le libellé du jet de dégâts, obtenu : " + _feat_data.description.slice( 0, 400 ) );
    TEST.ASSERT.notOk( /\[[a-z-]+\]\]?\{/.test( _feat_data.description ), "La description ne devrait contenir aucun résidu [type]{..., trouvé : " + ( ( _feat_data.description.match( /.{0,30}\[[a-z-]+\]\]?\{.{0,30}/ ) || [] )[ 0 ] || "" ) );
    CONTROLLER.Main.doActionAfter( "event__show_information__feat", { "param__feat_category": "class", "param__feat_name": "Poussée punitive" } );
    let _overlay   = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "La popup du don devrait s'ouvrir" );
    if ( !_overlay ) {
        return;
    }
    let _desc_dom  = _overlay.querySelector( ".popup-description" );
    TEST.ASSERT.notNull( _desc_dom, "La popup devrait rendre la description" );
    if ( _desc_dom ) {
        TEST.ASSERT.ok( _desc_dom.textContent.indexOf( "bludgeoning" ) === -1, "Le texte rendu ne devrait pas contenir le type de dégâts brut, obtenu : " + _desc_dom.textContent.slice( 0, 400 ) );
        TEST.ASSERT.ok( _desc_dom.textContent.indexOf( "dégâts contondants égal à votre modificateur de Force" ) !== -1, "Le texte rendu devrait porter le libellé du jet, obtenu : " + _desc_dom.textContent.slice( 0, 400 ) );
    }
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": _feat_data.id } );
    TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup devrait etre masquee apres fermeture" );
} );
