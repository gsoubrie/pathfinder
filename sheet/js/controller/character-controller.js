"use strict";
CONTROLLER.Character = (function ( self ) {
    //********************************************  INIT  **************************************************//
    self.init               = function ( uuid ) {
        self.current_uuid      = uuid || new URLSearchParams( location.search ).get( "id" );
        self.current_character = new CHARACTER.Current();
        self.current_character.init( self.current_uuid );
        self.current_character.computeHTML();
    };
    //********************************************  EVENT LISTENER  **************************************************//
    self.doActionAfter      = function ( event_name, params ) {
        switch ( event_name ) {
            case "click_on_button_V3":
                if ( params[ "param__current_character__uuid" ] ) {
                    self.current_character.doActionAfter( params[ COMPONENT.BUTTON.PARAM.BUTTON_NAME ], params );
                    return;
                }
                break;
            case "event__property_popup__open":
            case "event__has_change__input":
            case "event__free_bonus_is_zero":
            case "event__open_modal__hp_heal":
            case "event__open_modal__hp_temp":
            case "event__open_modal__hp_damage":
            case "event__heal_modal__confirm":
            case "event__temp_hp_modal__confirm":
            case "event__damage_modal__confirm":
            case "event__adjustment__add":
            case "event__adjustment__remove":
            case "event__adjustment__edit_explanation":
            case "event__stuff__add":
            case "event__stuff__remove":
            case "event__spell__add":
            case "event__spell__add_many":
            case "event__spell__remove":
            case "event__daily_spell__select_choice":
            case "event__daily_spell__toggle_spent":
            case "event__daily_spell__long_rest":
            case "event__daily_spell__new_day":
            case "event__archetype__select":
            case "event__historic__select":
            // The body slot and the current HP land on the character
            // FIRST (like add/remove) : the domain updates, then the
            // character broadcasts to the windows, which refresh with
            // the fresh state (the Combat schema reads it) — routing
            // straight to the windows would refresh the Combat before
            // the domain, and a re-dispatch from a window would loop
            case "event__photo__set":
            case "event__photo__remove":
            case "event__stuff__set_slot":
            case "event__stuff__edit_current_hp":
                self.current_character.doActionAfter( event_name, params );
                break;
            case "event__combat__select_mode":

            case "event__level_up__select_class":
            case "event__level_up__take_level":
            case "event__level_up__remove_level":
            case "event__level_up__toggle_skill":
            case "event__level_up__select_choice":
            case "event__level_up__toggle_selector":
            case "event__level_up__toggle_qualifier_selector":
            case "event__level_up__qualifier_filter_enter":
            case "event__level_up__select_qualifier":
            case "event__daily_spell__toggle_selector":
            case "event__adjustment__toggle_selector":
            case "event__adjustment__pick":
            case "event__adjustment__commit":
            case "event__adjustment__filter_enter":
                self.current_character.windows.doActionAfterContentChildren( event_name, params );
                break;
            case "event__stuff__toggle_type_selector":
            case "event__stuff__pick_type":
            case "event__stuff__toggle_location_selector":
            case "event__stuff__pick_location":
            case "event__stuff__toggle_selector":
            case "event__stuff__pick":
            case "event__stuff__commit":
            case "event__stuff__filter_enter":
            case "event__stuff__toggle_edit_location_selector":
            case "event__stuff__pick_edit_location":
            case "event__stuff__toggle_edit_slot_selector":
            case "event__stuff__pick_edit_slot":
            case "event__stuff__commit_edit":
            case "event__stuff__commit_remove":
            case "event__spell__pick":
            case "event__spell__filter_enter":
            case "event__spell__commit":
            case "event__spell__commit_edit":
            case "event__spell__commit_remove":
                this.edition_popup.doActionAfter( event_name, params );
                break;
            // The gear of an entry opens its edit popup : the entry
            // identity travels by the plat, never inline (apostrophes)
            case "event__stuff__open_edit_popup":
                this.edition_popup = new CHARACTER.StuffEditPopup( params[ "param__stuff__kind" ], params[ "param__stuff__value" ] );
                break;
            case "event__spell__open_add_popup":
                this.edition_popup = new CHARACTER.SpellAddPopup();
                break;
            case "event__spell__open_edit_popup":
                this.edition_popup = new CHARACTER.SpellEditPopup( params[ "param__spell__value" ] );
                break;
            case "event__stuff__set_location":
            case "event__stuff__edit_place":
            case "event__stuff__edit_comment":
            case "event__stuff__edit_characteristics":
            case "event__stuff__filter_location":
            case "event__stuff__edit_quantity":
            case "event__spell__edit_comment":
                self.current_character.windows.doActionAfterContentChildren( event_name, params );
                break;
            case "event__level__toggle":
            case "event__more_button":
            case "event__less_button":
            case "click_on__window_navigation__done":
                self.current_character.doActionAfter( event_name, params );
                break;
            case "event__form__element_changed":
                self.current_character.doActionAfter( event_name, { "param__property": this.edition_popup.current_property.key_element, "param__edition_value": this.edition_popup.windows.getActiveWindow().getName() } );
                this.doActionAfter( "event__form__reset" );
                break;
            case "event__form__reset":
                this.edition_popup.close();
                this.edition_popup = null;
                break;
            case "event__current_character__save":
                this.save();
                break;
            // The Général Archétype field lands the sheet on the
            // Bibliothèque, subject Archétypes : the domain reads the value
            // itself, nothing rides inline (the names carry apostrophes)
            case "event__archetype__goto_library":
                CHARACTER.LibraryWindow.goToArchetypesSubject( self.current_character );
                break;
            // Same contract for the Historique field of the Général
            case "event__historic__goto_library":
                CHARACTER.LibraryWindow.goToHistoricsSubject( self.current_character );
                break;
        }
    };
    //********************************************  SAVE  **************************************************//
    self.getSaveFileContent = function () {
        return "let " + self.current_character.getUUID() + " = " + JSON.stringify( self.current_character.getDataToSave() ) + ";";
    };
    self.save               = function () {
        let to_return = self.current_character.getDataToSave();
        console.log("GSOU", "[Character - save]", to_return);
        let file      = new Blob( [ self.getSaveFileContent() ], { "type": "application/javascript" } );
        let link      = SERVICE.DOM.createElement( "a", {
            "href"    : URL.createObjectURL( file ),
            "download": self.current_character.getUUID() + ".js"
        } );
        link.click();
        URL.revokeObjectURL( link.href );
        return to_return;
    };
    //********************************************  HTML  **************************************************//
    self.computeHtml__title = function () {
        self.computeHtml__title();
    };
    return self;
})
( CONTROLLER.Character || {} );
