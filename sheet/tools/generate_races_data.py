#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
generate_races_data.py — complete race_enum.js / legacy_enum.js from the
site data (pf2e.pathfinder-fr.org exposes the Foundry JSON : /assets/data/).

The old flow scraped the RENDERED pages via the Chrome extensions ; the site
now serves the same data as JSON with French translations embedded, so the
generator reads ancestries.json + heritages.json + traits.json +
languages.json and APPENDS the entries missing from the enums (existing
entries are never rewritten : the DOM-scraped ones stay as they ride).

The generated fields mirror the extension extractors
(extract_element_in_page/content_ancestry.js + content_heritage.js) :
sections come from the French description headings, the mechanics come from
the structured JSON (hp, speed, boosts, flaws, vision, languages), the
heritage bonuses come from the pattern engine of content_heritage.js run on
the French description text.

Usage :  python sheet/tools/generate_races_data.py [--refresh]
"""

import argparse
import json
import os
import re
import ssl
import sys
import time
import urllib.request

HERE        = os.path.dirname( os.path.abspath( __file__ ) )
SHEET       = os.path.dirname( HERE )
ROOT        = os.path.dirname( SHEET )
RACE_ENUM   = os.path.join( SHEET, "js", "race", "race_enum.js" )
LEGACY_ENUM = os.path.join( SHEET, "js", "legacy", "legacy_enum.js" )
FEATS_FILE   = os.path.join( SHEET, "js", "gift", "constant_gift_race.js" )
BASE_URL    = "https://pf2e.pathfinder-fr.org"
CACHE_DIR   = os.path.join( HERE, ".scrap_cache" )
UA          = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"

#********************************************  SITE DATA  **************************************************//

def fetch_data( name ):
    """Download (or reuse the cached) /assets/data/<name>.json."""
    os.makedirs( CACHE_DIR, exist_ok = True )
    cache = os.path.join( CACHE_DIR, name + ".json" )
    if os.path.exists( cache ) and os.path.getmtime( cache ) > time.time() - 3600:
        return json.load( open( cache, encoding = "utf-8" ) )
    request = urllib.request.Request( BASE_URL + "/assets/data/" + name + ".json", headers = { "User-Agent": UA } )
    # Le certificat du site pose problème à certaines chaînes Python : le
    # téléchargement d'un scraper de données publiques passe sans vérification
    context = ssl.create_default_context()
    context.check_hostname = False
    context.verify_mode    = ssl.CERT_NONE
    with urllib.request.urlopen( request, context = context ) as response:
        data = json.loads( response.read().decode( "utf-8" ) )
    with open( cache, "w", encoding = "utf-8" ) as out:
        json.dump( data, out )
    return data

#********************************************  MAPPINGS  **************************************************//

CHARACTERISTICS_MAP = {
    "str": "FOR", "dex": "DEX", "con": "CON",
    "int": "INT", "wis": "SAG", "cha": "CHA"
}
SIX_ATTRIBUTES = set( ["str", "dex", "con", "int", "wis", "cha"] )

SIZE_MAP = {
    "tiny": "TP", "sm": "P", "med": "M", "lrg": "G", "huge": "TG", "grg": "T"
}

VISION_MAP = {
    "low-light-vision": "Vision nocturne",
    "darkvision"      : "Vision dans le noir"
}

SECTION_MAP = {
    "Vous..."                      : "inline_vous",
    "Vous…"                        : "inline_vous",
    "Probablement que les autres...": "inline_autres",
    "Les autres pourraient…"       : "inline_autres",
    "Vous pourriez..."             : "inline_vous_pourriez",
    "Description physique"         : "physical_desc",
    "Société"                      : "society_desc",
    "Croyances"                    : "believe_desc",
    "Alignement et Religion"       : "believe_desc",
    "Noms"                         : "noms",
    "Exemples de noms"             : "name_example"
}

#********************************************  HTML HELPERS  **************************************************//

TAG_RE     = re.compile( r"<[^>]+>" )
UUID_LINK  = re.compile( r"@UUID\[Compendium\.[^\]]*\.Item\.([A-Za-z0-9]+)\]\{([^}]*)\}" )

def link_names_only( html ):
    return UUID_LINK.sub( lambda m: m.group( 2 ), html )

def to_text( html ):
    text = link_names_only( html )
    text = TAG_RE.sub( " ", text )
    return re.sub( r"\s+", " ", text ).strip()

def split_sections( html ):
    """Yield (title, [content_blocks]) from the description HTML."""
    blocks = re.findall( r"<h([1-4])[^>]*>(.*?)</h\1>|(<(?:p|ul)[^>]*>.*?</(?:p|ul)>|<p[^>]*>.*?</p>)", html, re.S )
    sections  = []
    current   = ( "", [] )
    for heading, title_text, content in blocks:
        if heading:
            if current[ 1 ] or current[ 0 ]:
                sections.append( current )
            title = re.sub( r"\s+", " ", TAG_RE.sub( "", title_text ) ).strip()
            current = ( title, [] )
        elif content:
            current[ 1 ].append( content )
    if current[ 0 ] or current[ 1 ]:
        sections.append( current )
    return sections

#********************************************  LABELS  **************************************************//

def build_labels( traits_data, languages_data ):
    labels = {}
    for key, entry in traits_data.items():
        fr = entry.get( "translations", {} ).get( "fr", {} ).get( "name" )
        labels[ key ] = fr or entry.get( "name" ) or key
    langs = {}
    for key, entry in languages_data.items():
        fr = entry.get( "translations", {} ).get( "fr", {} ).get( "name" )
        langs[ key ] = fr or entry.get( "name" ) or key
    return labels, langs

def traits_list( data, labels ):
    rarity = data[ "traits" ].get( "rarity" )
    to_return = []
    if rarity and rarity != "common":
        to_return.append( labels.get( rarity, rarity.capitalize() ) )
    for trait in data[ "traits" ].get( "value", [] ):
        to_return.append( labels.get( trait, trait.capitalize() ) )
    return to_return

def mechanic_lines( data, labels ):
    to_return = []
    rarity = data[ "traits" ].get( "rarity" )
    if rarity and rarity != "common":
        to_return.append( "Rareté " + labels.get( rarity, rarity.capitalize() ) )
    labels_fr = [ labels.get( trait, trait ) for trait in data[ "traits" ].get( "value", [] ) ]
    if labels_fr:
        # The rendered page shows the first label capitalized, the following
        # lowercase ("Traits Elfe, humanoïde")
        line = [ labels_fr[ 0 ] ]
        for label in labels_fr[ 1: ]:
            line.append( label[ 0 ].lower() + label[ 1: ] if label else label )
        to_return.append( "Traits " + ", ".join( line ) )
    return to_return

def characteristics( slots ):
    """ boosts : { "0": [ "dex" ], "2": [ "str", ..., "cha" ] } -> the
    six-way slot is a FREE choice (the extension's Primes d'attributs) """
    choice = []
    for key in sorted( slots.keys() ):
        values = slots[ key ]
        if len( values ) == 1:
            choice.append( CHARACTERISTICS_MAP.get( values[ 0 ], values[ 0 ].upper() ) )
        elif set( values ) >= SIX_ATTRIBUTES:
            choice.append( "FREE" )
        else:
            choice.append( "FREE" )
    return {
        "choice" : choice,
        "nb_free": choice.count( "FREE" ),
        "number" : len( choice )
    }

def speed_meters( feet ):
    # The site displays meters (0.3 x feet) ; the old DOM scrape parseInt'd
    # the comma value (7,5 -> 7) : the generated data keeps the same convention
    return int( feet * 0.3 )

def lower_first( text ):
    return text[ 0 ].lower() + text[ 1: ] if text else text

#********************************************  ANCESTRY ENTRY  **************************************************//

def description_sections( html ):
    parsed = {}
    for title, content in split_sections( html ):
        key = SECTION_MAP.get( title )
        if key == "noms":
            continue
        if key is None:
            if title.startswith( "Mécaniques" ) or title.startswith( "Méchaniques" ):
                continue
            if title.startswith( "Héritages" ):
                continue
            key = re.sub( r"[^a-z_]", "", title.lower().replace( " ", "_" ) ) or "desc"
        if key.startswith( "inline" ):
            parsed.setdefault( "general_desc", [] )
            prefix = { "inline_vous": "Vous",
                       "inline_autres": "Les autres",
                       "inline_vous_pourriez": "Vous pourriez..." }.get( key )
            for block in content:
                inner = link_names_only( block ).replace( "\r", "" ).replace( "\n", "" ).strip()
                parsed[ "general_desc" ].append( prefix + " : " + inner )
            continue
        parsed.setdefault( key, [] )
        if key == "name_example":
            for block in content:
                text = to_text( block )
                if text:
                    parsed[ key ].append( text )
            continue
        for block in content:
            text = to_text( block )
            if text:
                parsed[ key ].append( text )
    # Les lignes "Vous : ..." restent en bas du general_desc, comme l'ancien extrait
    return parsed

def build_ancestry_entry( data, labels, langs, legacies ):
    fr = data.get( "translations", {} ).get( "fr", {} )
    name = fr.get( "name" ) or data[ "name" ]
    sections = description_sections( fr.get( "description", "" ) )
    entry                  = {}
    entry[ "believe_desc" ]  = sections.get( "believe_desc", [] )
    entry[ "body_size" ]     = SIZE_MAP.get( data.get( "size" ), data.get( "size" ) )
    entry[ "category" ]      = "ancestries"
    entry[ "characteristics_bonus" ] = characteristics( data.get( "boosts", {} ) )
    if data.get( "flaws" ):
        entry[ "characteristics_malus" ] = characteristics( data[ "flaws" ] )
    entry[ "general_desc" ]  = sections.get( "general_desc", [] )
    if sections.get( "name_example" ):
        entry[ "name_example" ] = sections[ "name_example" ]
    entry[ "href" ]          = "/ancestries/" + data[ "_id" ]
    entry[ "id" ]            = data[ "_id" ]
    entry[ "language" ]      = [ langs.get( l, l.capitalize() ) for l in data.get( "languages", [] ) ]
    entry[ "language_sup" ]  = [ lower_first( langs.get( l, l ) ) for l in data.get( "additionalLanguages", {} ).get( "value", [] ) ]
    entry[ "legacies" ]      = legacies
    entry[ "mechanic" ]      = mechanic_lines( data, labels )
    entry[ "name" ]          = name
    entry[ "physical_desc" ] = sections.get( "physical_desc", [] )
    vision = VISION_MAP.get( data.get( "vision" ) )
    if vision:
        entry[ "sens" ] = vision
    entry[ "society_desc" ]  = sections.get( "society_desc", [] )
    entry[ "speed" ]         = speed_meters( data.get( "speed", 25 ) )
    entry[ "start_life" ]    = data.get( "hp", 8 )
    entry[ "text" ]          = name
    entry[ "traits" ]        = traits_list( data, labels )
    return entry

#********************************************  HERITAGE ENTRY  **************************************************//

SENSE_WHITELIST = "vision nocturne|vision dans le noir|odorat précis|odorat imprécis|tremblesens|perception aveugle|sens magique"
TRADITION_MAP   = { "primordial": "TRADITION.PRIMAL", "primordiaux": "TRADITION.PRIMAL", "primordiale": "TRADITION.PRIMAL",
                    "arcanique": "TRADITION.ARCANE", "arcaniques": "TRADITION.ARCANE",
                    "divin": "TRADITION.DIVINE", "divins": "TRADITION.DIVINE", "divine": "TRADITION.DIVINE",
                    "occulte": "TRADITION.OCCULT", "occultes": "TRADITION.OCCULT" }
ATTACK_MAP      = { "griffe": "ATTACK.CLAW", "serre": "ATTACK.TALON", "croc": "ATTACK.FANG", "crocs": "ATTACK.FANG",
                    "machoire": "ATTACK.JAW", "mâchoire": "ATTACK.JAW", "morsure": "ATTACK.BITE", "bec": "ATTACK.BEAK",
                    "corne": "ATTACK.HORN", "cornes": "ATTACK.HORN", "defenses": "ATTACK.TUSK", "défenses": "ATTACK.TUSK",
                    "epine": "ATTACK.SPINE", "épine": "ATTACK.SPINE", "queue": "ATTACK.TAIL", "sabot": "ATTACK.HOOF",
                    "sabots": "ATTACK.HOOF", "poing": "ATTACK.FIST", "coup": "ATTACK.SLAM",
                    "tentacule": "ATTACK.TENTACLE", "tentacules": "ATTACK.TENTACLE", "aile": "ATTACK.WING",
                    "ailes": "ATTACK.WING", "dard": "ATTACK.STING", "pince": "ATTACK.PINCER", "pinces": "ATTACK.PINCER" }

def _set_path( obj, path, value ):
    keys = path.split( "." )
    cur = obj
    for key in keys[ :-1 ]:
        cur = cur.setdefault( key, {} )
    cur[ keys[ -1 ] ] = value

def parse_heritage_bonus( text, html_text ):
    bonus = {}

    m = re.search( r"Vous obtenez ([^.]+)", text )
    if m:
        found = re.findall( r"le trait ([^,. ]+(?:\s[^,. ]+)*?)(?=\s*(,|et\s+le|et\s+la|$))", m.group( 1 ) )
        values = [ f[ 0 ].strip() for f in found ]
        if values:
            _set_path( bonus, "traits", values )

    senses = re.findall( r"(" + SENSE_WHITELIST + r")", text, re.I )
    if senses:
        _set_path( bonus, "sens", [] )
        existing = bonus[ "sens" ]
        for s in senses:
            low = s.lower()
            if low not in existing:
                existing.append( low )

    m = re.search( r"la liste d(?:es|e) dons des ([^.]+)", text )
    if not m:
        m = re.search( r"choisir parmi les dons de ([^.]+)", text )
    if m:
        values = re.split( r",?\s*(?:et ceux de(?: votre)?|et de|des)\s+", m.group( 1 ) )
        values = [ re.sub( r"\s*et (?:d[eo] (?:votre|leur)|celle d[eo]).*$", "", v, flags = re.I ).strip() for v in values ]
        values = [ re.sub( r"\s*(?:votre )?autre ascendance.*$", "", v, flags = re.I ).strip() for v in values ]
        values = [ v for v in values if v ]
        if values:
            _set_path( bonus, "dons", {} )
            bonus[ "dons" ][ "ancestraux" ] = values

    resistances = []
    for m in re.finditer( r"résistance (?:à la?|au|aux) (\w+) égale à (?:la moitié de votre niveau|votre niveau)(?:[^.]*minimum d?e? ?(\d+))?", text, re.I ):
        entry = { "type": m.group( 1 ).lower(),
                  "value": "level/2" if re.search( "moitié", m.group( 0 ), re.I ) else "level" }
        if m.group( 2 ):
            entry[ "min" ] = int( m.group( 2 ) )
        resistances.append( entry )
    if resistances:
        _set_path( bonus, "resistances", resistances )

    m = re.search( r"vitesse au sol de (\d+) mètres?", text, re.I )
    if m:
        _set_path( bonus, "speed", {} )
        bonus[ "speed" ][ "ground" ] = int( m.group( 1 ) )

    spells = [ ]
    for m in re.finditer( r"sort inné (\w+)( à volonté| une fois par jour| deux fois par jour| trois fois par jour)?", text, re.I ):
        tradition = TRADITION_MAP.get( m.group( 1 ).lower() )
        frequency = { "trois fois par jour": "FREQUENCY.DAILY_3", "deux fois par jour": "FREQUENCY.DAILY_2",
                       "une fois par jour": "FREQUENCY.DAILY_1" }.get( ( m.group( 2 ) or "" ).strip().lower(), "FREQUENCY.AT_WILL" )
        entry = { "type": "innate", "tradition": tradition, "frequency": frequency, "free": True }
        spells.append( entry )
    if spells:
        _set_path( bonus, "spells", spells )

    m = re.search( r"(\w+) attaque(?:s)? animale(?:s)? de votre choix(?:\s*\(typiquement ([^)]+)\))?", text, re.I )
    if m:
        count_word = m.group( 1 ).lower()
        count = { "une": 1, "deux": 2 }.get( count_word ) or 1
        examples = []
        if m.group( 2 ):
            for part in re.split( r",\s*|\s+ou\s+", m.group( 2 ) ):
                key = ATTACK_MAP.get( part.strip().lower() )
                if key:
                    examples.append( key )
        _set_path( bonus, "attacks", [ { "type": "FREE", "count": count, "examples": examples } ] )

    actions = []
    for m in re.finditer( r"(la réaction|l'action|les deux actions|l'activité libre)\s+@UUID\[Compendium\.[^\]]*\.Item\.([A-Za-z0-9]+)\]\{([^}]*)\}", html_text, re.I ):
        type_text = m.group( 1 ).lower()
        action_type = { "la réaction": "ACTION_TYPE.REACTION", "les deux actions": "ACTION_TYPE.ACTION_2",
                        "l'activité libre": "ACTION_TYPE.FREE" }.get( type_text, "ACTION_TYPE.ACTION_1" )
        actions.append( { "type": action_type, "name": m.group( 3 ).strip(), "id": m.group( 2 ) } )
    if actions:
        _set_path( bonus, "actions", actions )

    feats = []
    for m in re.finditer( r"don général\s+@UUID\[Compendium\.[^\]]*\.Item\.([A-Za-z0-9]+)\]\{([^}]*)\}", html_text, re.I ):
        feats.append( { "name": m.group( 2 ).strip(), "id": m.group( 1 ) } )
    if feats:
        _set_path( bonus, "dons", {} )
        bonus[ "dons" ][ "general" ] = feats

    return bonus

def clean_empty( obj ):
    if isinstance( obj, list ):
        cleaned = [ clean_empty( v ) for v in obj ]
        return [ v for v in cleaned if v not in ( [], {}, None ) ]
    if isinstance( obj, dict ):
        cleaned = { k: clean_empty( v ) for k, v in obj.items() }
        return { k: v for k, v in cleaned.items() if v not in ( [], {}, None ) }
    return obj

def build_heritage_entry( data, labels ):
    fr = data.get( "translations", {} ).get( "fr", {} )
    name = fr.get( "name" ) or data[ "name" ]
    desc_html = fr.get( "description", "" )
    paragraphs = [ p for p in re.findall( r"<p[^>]*>.*?</p>", desc_html, re.S ) ]
    if not paragraphs:
        paragraphs = [ desc_html ] if desc_html else []
    general_desc = []
    for p in paragraphs:
        text = to_text( p )
        if text:
            general_desc.append( text )
    text_flat = " ".join( general_desc )
    html_flat = " ".join( paragraphs ).replace( "\n", "" )
    entry             = {}
    bonus = parse_heritage_bonus( text_flat, html_flat )
    bonus = clean_empty( bonus )
    if bonus:
        entry[ "bonus" ] = bonus
    entry[ "category" ]    = "heritages"
    entry[ "general_desc" ] = general_desc
    entry[ "href" ]        = "/heritages/" + data[ "_id" ]
    entry[ "id" ]          = data[ "_id" ]
    entry[ "name" ]        = name
    entry[ "text" ]        = name
    entry[ "traits" ]      = traits_list( data, labels )
    return entry

#********************************************  JS EMISSION  **************************************************//

TOP_ALIGN = 24  # colonne des ":" des clefs de premier niveau (characteristics_bonus)

def js_string( value ):
    escaped = value.replace( "\\", "\\\\" ).replace( '"', '\\"' )
    return '"' + escaped + '"'

def format_value( value, indent ):
    """Format a nested value exactly like the existing enum blocks."""
    pad = " " * indent
    if isinstance( value, str ):
        return js_string( value )
    if isinstance( value, bool ) or isinstance( value, ( int, float ) ):
        return json.dumps( value )
    if isinstance( value, list ):
        if not value:
            return "[]"
        lines = [ "[" ]
        for item in value:
            lines.append( pad + "    " + format_value( item, indent + 4 ) + "," )
        if lines[ -1 ].endswith( "," ):
            lines[ -1 ] = lines[ -1 ][ :-1 ]
        lines.append( pad + "]" )
        return "\n".join( lines )
    if isinstance( value, dict ):
        keys = sorted( value.keys() )
        align = max( len( js_string( k ) ) for k in keys ) if keys else 0
        align = max( align, len( '"nb_free"' ) )
        lines = [ "{" ]
        for key in keys:
            key_js = js_string( key )
            spaces = " " * ( align - len( key_js ) )
            lines.append( pad + "    " + key_js + spaces + " : " + format_value( value[ key ], indent + 4 ) + "," )
        if lines[ -1 ].endswith( "," ):
            lines[ -1 ] = lines[ -1 ][ :-1 ]
        lines.append( pad + "}" )
        return "\n".join( lines )
    raise ValueError( "unserializable : " + repr( value ) )

def format_entry( key, entry ):
    key_js = js_string( key )
    lines = [ "    " + key_js + ": {" ]
    for k in sorted( entry.keys() ):
        key_field = js_string( k )
        pad = " " * ( TOP_ALIGN - len( key_field ) )
        if not pad:
            pad = ""
        lines.append( "        " + key_field + pad + ": " + format_value( entry[ k ], 8 ) + "," )
    lines[ -1 ] = lines[ -1 ][ :-1 ]
    lines.append( "    }," )
    return "\n".join( lines )

def append_entries( path, entries ):
    content = open( path, encoding = "utf-8" ).read()
    existing_ids = set( re.findall( r'"([A-Za-z0-9]{12,20})"\s*:\s*\{', content ) )
    new_blocks = []
    for key, entry in entries:
        if key in existing_ids:
            continue
        new_blocks.append( format_entry( key, entry ) )
        existing_ids.add( key )
    if not new_blocks:
        return 0
    # Insere avant la fermeture de l'ENUM : le dernier "};" du fichier — la
    # precedente entite ne porte pas de virgule, le jonc en gagne une
    idx = content.rstrip().rfind( "\n};" )
    if idx == -1:
        raise SystemExit( "Fermeture '};' introuvable dans " + path )
    head = content[ : idx ].rstrip()
    if head.endswith( "}" ):
        head += ","
    blocks_txt = "\n".join( new_blocks )
    if blocks_txt.rstrip().endswith( "," ):
        blocks_txt = blocks_txt.rstrip()[ :-1 ]
    with open( path, "w", encoding = "utf-8", newline = "" ) as out:
        out.write( head + "\n" + blocks_txt + "\n};" )
    return len( new_blocks )

#********************************************  ANCESTRY FEATS  **************************************************//

# Site quirk : these ancestries carry only a generic trait (dragon,
# aberration, construct) that owns no feat — their feats ride a dedicated
# trait id the site never lists on the ancestry itself
ANCESTRY_FEAT_TRAITS = {
    "Dragonnet": [ "dragonet" ],
    "Distordu" : [ "fleshwarp" ],
    "Poupée"   : [ "poppet" ]
}

def trait_ids_of_ancestry( ancestry, labels ):
    """The ancestry trait ids of a race : its own trait (the one whose
    French label IS the race name), fallback the first non-humanoid trait."""
    fr_name = ancestry.get( "translations", {} ).get( "fr", {} ).get( "name" ) or ancestry[ "name" ]
    to_return = []
    for tid in ancestry.get( "traits", {} ).get( "value", [] ):
        if labels.get( tid ) == fr_name:
            to_return.append( tid )
    if to_return:
        return to_return
    for tid in ancestry.get( "traits", {} ).get( "value", [] ):
        if tid != "humanoid":
            return [ tid ]
    return []

def feat_traits_list( feat, labels ):
    """Feat traits for the file : rarity label + the trait labels the site
    actually translates — the internal ids absent from traits.json (ex the
    "awakened" duplicate of "awakenedanimal") fall on the floor instead of
    riding capitalized English."""
    to_return = []
    rarity = feat[ "traits" ].get( "rarity" )
    if rarity and rarity != "common" and rarity in labels:
        to_return.append( labels[ rarity ] )
    for trait in feat[ "traits" ].get( "value", [] ):
        if trait in labels and labels[ trait ] not in to_return:
            to_return.append( labels[ trait ] )
    return to_return

def format_feat_entry( entry ):
    lines  = [ "            {" ]
    lines.append( '                "name"       : ' + js_string( entry[ "name" ] ) + "," )
    lines.append( '                "level"      : ' + js_string( entry[ "level" ] ) + "," )
    lines.append( '                "traits"     : [' )
    for trait in entry[ "traits" ]:
        lines.append( '                    ' + js_string( trait ) + ',' )
    if lines[ -1 ].endswith( "," ):
        lines[ -1 ] = lines[ -1 ][ :-1 ]
    lines.append( '                ],' )
    lines.append( '                "required"   : [' )
    for required in entry[ "required" ]:
        lines.append( '                    ' + js_string( required ) + ',' )
    if lines[ -1 ].endswith( "," ):
        lines[ -1 ] = lines[ -1 ][ :-1 ]
    lines.append( '                ],' )
    lines.append( '                "description": [' )
    for paragraph in entry[ "description" ]:
        lines.append( '                    ' + js_string( paragraph ) + ',' )
    if entry[ "description" ] and lines[ -1 ].endswith( "," ):
        lines[ -1 ] = lines[ -1 ][ :-1 ]
    lines.append( '                ]' )
    lines.append( '            },' )
    return "\n".join( lines )

def append_feats( path, ancestry, feats, labels ):
    """Append the ancestry feats of ONE new race to DON.RACE.ENUM[ 0 ],
    skipping the names the file already carries (idempotent, the DOM-scraped
    entries stay as they ride)."""
    content = open( path, encoding = "utf-8" ).read()
    existing_names = set( re.findall( r'"name"\s*:\s*"([^"]+)"', content ) )
    # Traduction des prerequis par nom : les prerequs du site restent en VO
    english_to_fr = {}
    for feat in feats:
        fr = feat.get( "translations", {} ).get( "fr", {} )
        if feat.get( "name" ) and fr.get( "name" ):
            english_to_fr[ feat[ "name" ].lower() ] = fr[ "name" ]
    def translate ( prereq ):
        low = prereq.strip()
        if low.lower() in english_to_fr:
            return english_to_fr[ low.lower() ]
        parts = re.split( r"\s+or\s+", low )
        if len( parts ) > 1 and all( p.strip().lower() in english_to_fr for p in parts ):
            return " ou ".join( english_to_fr[ p.strip().lower() ] for p in parts )
        return prereq
    new_blocks = []
    for feat in feats:
        fr = feat.get( "translations", {} ).get( "fr", {} )
        name = fr.get( "name" )
        if not name or name in existing_names:
            continue
        existing_names.add( name )
        description = []
        for paragraph_match in re.findall( r"<p[^>]*>.*?</p>", fr.get( "description", "" ), re.S ):
            text = to_text( paragraph_match )
            if text:
                description.append( text )
        required = [ translate( prereq ) for prereq in feat.get( "prerequisites", [] ) if prereq ]
        new_blocks.append( format_feat_entry( {
            "name"       : name,
            "level"      : str( feat.get( "level", 1 ) ),
            "traits"     : feat_traits_list( feat, labels ),
            "required"   : required,
            "description": description
        } ) )
    if not new_blocks:
        return 0
    # L'ENUM vit avant les accesseeurs du fichier : le dernier "}" de la
    # derniere entite ne porte pas de virgule, le jonc en gagne une
    idx = content.find( "\n        ]\n    ]\n};" )
    if idx == -1:
        raise SystemExit( "Fermeture de DON.RACE.ENUM introuvable dans " + path )
    head = content[ : idx ].rstrip()
    if head.endswith( "}" ):
        head += ","
    blocks_txt = "\n".join( new_blocks )
    # la derniere entite ne porte pas la virgule : le jonc vient de la prendre
    if blocks_txt.rstrip().endswith( "," ):
        blocks_txt = blocks_txt.rstrip()[ :-1 ]
    with open( path, "w", encoding = "utf-8", newline = "" ) as out:
        out.write( head + "\n" + blocks_txt + "\n        ]\n    ]\n};" + content[ idx + len( "\n        ]\n    ]\n};" ) : ] )
    return len( new_blocks )

#********************************************  MAIN  **************************************************//

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument( "--refresh", action = "store_true", help = "ignore le cache local" )
    args = parser.parse_args()
    if args.refresh:
        for name in os.listdir( CACHE_DIR ) if os.path.isdir( CACHE_DIR ) else []:
            os.remove( os.path.join( CACHE_DIR, name ) )

    ancestries = fetch_data( "ancestries" )
    heritages  = fetch_data( "heritages" )
    traits     = fetch_data( "traits" )
    languages  = fetch_data( "languages" )
    labels, langs = build_labels( traits, languages )

    race_entries = []
    legacy_entries = []
    for ancestry in ancestries:
        heritage_names = []
        for heritage in heritages:
            if heritage.get( "ancestryId" ) == ancestry[ "_id" ]:
                fr_name = heritage.get( "translations", {} ).get( "fr", {} ).get( "name" ) or heritage[ "name" ]
                heritage_names.append( fr_name )
                legacy_entries.append( ( heritage[ "_id" ], build_heritage_entry( heritage, labels ) ) )
        race_entries.append( ( ancestry[ "_id" ], build_ancestry_entry( ancestry, labels, langs, heritage_names ) ) )

    print( "== race_enum.js ==" )
    added = append_entries( RACE_ENUM, race_entries )
    print( "  ajoutées :", added )
    print( "== legacy_enum.js ==" )
    added = append_entries( LEGACY_ENUM, legacy_entries )
    print( "  ajoutées :", added )

    feats = fetch_data( "feats" )
    print( "== constant_gift_race.js ==" )
    # Only the races without feats in the file pass here : the original ones
    # stay covered by their DOM scrape, the generated ones stay as they ride
    # (the race name rides as a trait of its feats)
    feats_content = open( FEATS_FILE, encoding = "utf-8" ).read()
    covered_races = set()
    for traits_block in re.findall( r'"traits"\s*:\s*\[([^\]]*)\]', feats_content ):
        covered_races.update( re.findall( r'"([^"]+)"', traits_block ) )
    for ancestry in ancestries:
        fr_name = ancestry.get( "translations", {} ).get( "fr", {} ).get( "name" ) or ancestry[ "name" ]
        if fr_name in covered_races:
            continue
        trait_ids = ANCESTRY_FEAT_TRAITS.get( fr_name ) or trait_ids_of_ancestry( ancestry, labels )
        race_feats = [ f for f in feats if any( tid in ( f.get( "traits", {} ).get( "value" ) or [] ) for tid in trait_ids ) ]
        # The sheet matches a feat by trait == race name : the carrying trait
        # label is forced to the ancestry French name, whatever the site's
        # own label rides (Orc/Orque, Homme-félin/Félide)
        race_labels = dict( labels )
        for tid in trait_ids:
            race_labels[ tid ] = fr_name
        added_feats = append_feats( FEATS_FILE, ancestry, race_feats, race_labels )
        print( "  " + fr_name + " : " + str( added_feats ) + " dons (" + ", ".join( trait_ids ) + ")" )

if __name__ == "__main__":
    main()
