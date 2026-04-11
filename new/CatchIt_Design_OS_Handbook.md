# CatchIt Design OS Handbook

## Zweck

Dieses Dokument ist die kompakte, aktuelle Betriebslogik für CatchIt als Design Operating System.

Es enthält nur den gültigen Stand:
- 5-State-Logik
- Anchor-System
- Persistenz- und Transition-Logik
- Component Inheritance
- Motion Discipline
- Copy Tone by State

Es ist absichtlich knapp genug, um als Arbeitsgrundlage für:
- Custom GPTs
- UI-Iteration
- Figma-Arbeit
- Design Reviews
- Screen-Kritik
- Stakeholder-Kommunikation

zu dienen.

---

# 1. CatchIt in einem Satz

CatchIt ist kein Transit-Suchtool, sondern ein zustandsbasiertes, präferenzgeformtes Mobility-Relief-System, das nur wenige tragfähige Optionen zeigt, Wahrheit verdichtet und räumliche Hilfe nur bei Bedarf einblendet.

---

# 2. Produktlogik

## CatchIt ist nicht:
- Route search app
- fastest-route optimizer
- route-results list
- map-first navigation UI
- dashboard of transit modules
- settings-driven planner

## CatchIt ist:
- decision-relief and reassurance system
- state-based interface
- preference-shaped mobility assistant
- truth-condensing UI
- chain-aware everyday mobility system
- calm operational surface

## Grundsatz
Die App zeigt keine rohen Suchergebnisse, sondern wenige **präferenzgebundene tragfähige Optionen**.

Diese Optionen werden geprägt durch:
- lieber gehen statt sinnlos warten
- Bewegung mit Kind
- geringerer Umstiegsstress
- mehr Puffer statt theoretischer Bestzeit
- weniger Unsicherheit und Reibung im Alltag

---

# 3. Zustandslogik

## Die 5 Hauptzustände

### Blue / Idle
- ruhig
- noch nicht operativ dringend
- Nutzer soll nicht nachdenken müssen

### Green / Ready
- relevant
- weiterhin gut tragfähig
- operativ sinnvoll ohne Stress

### Yellow / Adapting
- Änderung erkannt
- CatchIt reagiert bereits
- versucht wieder auf tragfähige Lage zu kommen
- **kein Warnzustand**

### Orange / Act Now
- tragfähige Lösung existiert noch
- Nutzer muss jetzt handeln
- eigentlicher Action-State

### Red / Failed
- konkrete Option oder Kette nicht mehr tragfähig
- extrem sparsam einsetzen
- kein „vorsicht“, sondern „geht so nicht mehr“

## Merksatz
- Blau = noch ruhig
- Grün = tragfähig
- Gelb = CatchIt reagiert
- Orange = jetzt handeln
- Rot = nicht mehr machbar

---

# 4. Dichte-Logik

## CatchIt eskaliert über Fokus, nicht über Inventar.

Mehr Dringlichkeit bedeutet nicht:
- mehr Karten
- mehr Module
- mehr Labels
- mehr UI-Lärm

Mehr Dringlichkeit bedeutet:
- klarere Hierarchie
- weniger Ambiguität
- weniger optionale Infos
- stärkere Handlungslesbarkeit

## Density by State

### Blue / Idle
- very low density
- viel Luft
- minimale Zusatzinformation

### Green / Ready
- low density
- leicht gespannter als Blau
- weiter ruhig

### Yellow / Adapting
- low-to-medium density
- Änderung sichtbar
- kontrolliert, nicht alarmistisch

### Orange / Act Now
- medium density, stark fokussiert
- Handlung dominiert
- optionale Infos treten zurück

### Red / Failed
- low-to-medium density
- hart verdichtet
- kein Informationsschwall
- keine Dramatisierung über Masse

---

# 5. Primary Anchor System

Jeder Screen hat **genau einen** Primary Anchor.

## Anchor-Typen

### Countdown Anchor
Zeitliche Tragfähigkeit ist Hauptwahrheit.

Verwendung:
- Blue / Idle
- Green / Ready
- meist Yellow / Adapting
- Map Reveal
- teilweise Map Focus

### Instruction Anchor
Nächster sinnvoller Schritt ist Hauptwahrheit.

Verwendung:
- Orange / Act Now
- Go Mode / Walk to Stop
- teils Recovery / Recheck nötig

### Confirmation Anchor
Stabilisierung, Anpassung oder Verstandenwerden ist Hauptwahrheit.

Verwendung:
- Recovery / Simple Switch
- Recovery / Kette angepasst
- Chain Summary
- Quick Change

### Question Anchor
Eine alltagsnahe Klärung ist Hauptwahrheit.

Verwendung:
- Wizard / Einstieg
- Wizard / Kettenfrage
- Wizard / Bewegungsstil / Tageslage

### Failure Anchor
Nicht-mehr-Machbarkeit ist Hauptwahrheit.

Verwendung:
- Main / Failed / Red
- harte Sackgassen

## Kernregel
Anchors werden zustandslogisch gewählt, nicht nach optischer Vorliebe.

---

# 6. Anchor Expression Rules

Nicht nur der Anchor-Typ, auch seine Ausdrucksform ist geregelt.

## Countdown Anchor
- zentral oder eindeutig primär
- numerischer Kern dominant
- darf tighten, aber nicht degradiert werden
- darf nie zum Deko-Badge werden

## Instruction Anchor
- kurze aktive Sprache
- reduzierte Interpretationslast
- maximal klar
- kein CTA-Sprech

## Confirmation Anchor
- ruhig
- knapp
- ordnend
- nicht euphorisch oder werblich

## Question Anchor
- genau eine verständliche Hauptfrage
- alltagsnah
- nicht formularig

## Failure Anchor
- kurz
- eindeutig
- selten
- nicht theatralisch

## Merksatz
Der Anchor bestimmt nicht nur, **was** führt, sondern auch, **wie** diese Wahrheit erscheinen darf.

---

# 7. Anchor Transition Rules

CatchIt springt nicht zwischen Wahrheiten. Es übergibt Führung.

## Erlaubte Hauptübergänge
- Countdown → Countdown
- Countdown → Instruction
- Countdown → Confirmation
- Countdown → Failure
- Question → Confirmation
- Confirmation → Instruction
- Instruction → Confirmation
- Instruction → Failure

## Regeln
- der alte Anchor darf nicht verschwinden, bevor der neue lesbar ist
- der neue Anchor muss begründen, warum die Führung wechselt
- mindestens eine starke Invariante bleibt erhalten
- Urgency reduziert Ambiguität, nicht bloß „mehr UI“
- Maps und Cards dürfen nie heimlich Anchor werden

## Merksatz
CatchIt übergibt Führung. Es ersetzt nicht einfach die Oberfläche.

---

# 8. Anchor Persistence Rules

Ein Anchor darf Führung verlieren, ohne spurlos zu verschwinden.

## Persistence-Klassen

### Full Persistence
Alter Anchor bleibt fast vollständig sichtbar, verliert aber Führung.

### Trace Persistence
Ein klar erkennbarer Rest bleibt sichtbar.

### Context Persistence
Der Anchor verschwindet, aber seine Folge oder Wirkung bleibt lesbar.

## Beispielhaft
- Blue → Green = Full
- Green → Yellow = Full
- Yellow → Orange = Trace
- Question → Summary = Trace
- Failure → neue Basis = Context

## Merksatz
Verlust der Führung darf nicht zum Verlust der Orientierung werden.

---

# 9. Component Inheritance Rules

Neue Zustände sollen Komponenten **erben**, nicht bei jeder Gelegenheit neue erfinden.

## Komponentenfamilien
- Anchor Components
- Support Components
- Spatial Components
- Recovery Components
- Wizard Components
- Trust / Accessibility Components

## Inheritance Levels
1. Direct Inheritance
2. Condensed Inheritance
3. Specialized Inheritance
4. New Component

## Regeln
- keine neue Komponente, wenn eine geerbte Variante reicht
- Anchor-Komponenten müssen als Familie lesbar bleiben
- Support-Komponenten dürfen freier variieren, aber keine neue Grammatik erfinden
- Spatial-Komponenten erben Ruhe, nicht Karten-Dominanz
- Recovery-Komponenten erben Vertrauenssprache, nicht Error-UI
- Wizard-Komponenten erben Einfachheit, nicht Formularlogik

## Merksatz
Eine CatchIt-Komponente darf sich verändern, aber nicht die Art wechseln.

---

# 10. Motion Discipline

Motion dient nur semantischer Klarheit.

## Motion darf:
- Zustandswechsel klären
- Anchor-Handover unterstützen
- Map Reveal unterstützen
- Verdichtung lesbar machen
- Recovery als Neuordnung zeigen
- Wizard-Fluss ruhig tragen

## Motion darf nicht:
- aufregend sein
- Dringlichkeit durch Zappeln simulieren
- „neuer Screen“-Gefühl erzeugen
- Bounce / Pulse / Shake / Parallax-Showcase werden

## Motion-Klassen
- Tightening Motion
- Reveal Motion
- Handover Motion
- Compression Motion
- Settlement Motion

## Intensitäten
- M0 Static
- M1 Soft
- M2 Directed
- M3 Decisive

## State-Prinzip
- Blue: fast unsichtbar
- Green: minimal gespannt
- Yellow: kontrollierte Neuordnung
- Orange: kurz, klar, direkt
- Red: knapp, hart, kaum Ornament

## Merksatz
CatchIt bewegt sich, um Ambiguität zu reduzieren, nicht um Eindruck zu machen.

---

# 11. Copy Tone by State

CatchIt-Sprache ist zustands- und vertrauenslogisch.

## Global
- Alltagssprache vor Jargon
- Klarheit vor Cleverness
- Ruhe vor Hype
- ehrliche Entlastung vor Positivitäts-Theater
- kurze, zustandsangemessene Formulierungen

## Blue / Idle
- ruhig
- unaufgeregt
- still präsent

Beispiele:
- Spätestens los in
- Noch ruhig
- Heute passt das

## Green / Ready
- wach
- tragfähig
- zuversichtlich

Beispiele:
- Jetzt wird es relevant
- Noch gut erreichbar
- Passt weiterhin

## Yellow / Adapting
- aufmerksam
- regulierend
- kontrolliert
- nicht alarmistisch

Beispiele:
- Ich prüfe eine passende Alternative
- Geändert, aber noch gut lösbar
- Ich passe das an

## Orange / Act Now
- direkt
- aktiv
- exekutiv
- kurz

Beispiele:
- Jetzt losgehen
- Zur Haltestelle gehen
- Jetzt prüfen

## Red / Failed
- kurz
- ehrlich
- eindeutig
- nicht theatralisch

Beispiele:
- Das klappt so nicht mehr
- Diesen Anschluss erreichst du nicht mehr
- Neue Lösung nötig

## Verbotene Copy-Drifts
- Marketing-Euphorie
- App-Store-Sprache
- Journey-planner-Jargon
- Settings-Sprech
- Wellness-/Coaching-Ton
- panische Warning-Sprache
- pseudo-freundliche Error-Copy

## Merksatz
CatchIt spricht, um Aufwand zu senken, nicht um Freundlichkeit zu performen.

---

# 12. Spatial Principle

Karte ist Unterstützung, nie Default-Hero.

## Das bedeutet:
- kein automatischer Kartenscreen
- kein Bottom Sheet als Standardreflex
- keine Navigation-App-Logik
- keine Kartendominanz ohne klare Zustandsbegründung

## Stattdessen:
- lower reveal
- integrated spatial assist
- calm map support
- route reassurance
- walking path visibility, wenn nötig

## Merksatz
Spatial components unterstützen Orientierung, sie übernehmen nicht heimlich die Führung.

---

# 13. Wizard Principle

Der Wizard ersetzt Settings-Dschungel.

## Wizard soll:
- nach Vorhaben fragen, nicht nach Technik
- Alltag und Kette verstehen
- Reibungsprofil erfassen
- wie Hilfe wirken, nicht wie Konfiguration

## Wizard soll nicht:
- form-heavy sein
- technisch klingen
- wie Setup-Software wirken
- wie Diagnostik oder Assessment wirken

## Gute Fragetypen
- Hängt heute noch mehr dran?
- Bist du heute eher langsam unterwegs?
- Willst du lieber gehen statt warten?
- Ist ein Kind dabei?

---

# 14. Recovery Principle

Recovery ist keine Fehler-UI, sondern vertrauenswahrende Neuordnung.

## Recovery-Typen
- Simple Switch
- Recheck nötig
- Kette angepasst

## Muss leisten
- Änderung verständlich machen
- Vertrauen halten
- neue Tragfähigkeit sichtbar machen
- Last beim Nutzer nur dort erhöhen, wo nötig

## Darf nicht werden
- Error-Center
- rote Warnkarten-Flut
- technische Fehlerästhetik
- Alternativen-Chaos

## Merksatz
Recovery erbt Systemruhe, nicht Fehlertheater.

---

# 15. Trust / ND / Accessibility Principle

CatchIt ist sozial robust und ND-freundlich.

## Bedeutet:
- neutrale Labels, wo Exposition problematisch wäre
- diskrete, lockscreen-sichere Kommunikation
- kein unnötiges öffentliches Preisgeben privater Kontexte
- Large Text und Reduced Motion als echte Systemvarianten
- keine Überraschungsdynamik
- kein manipulativer Dringlichkeitsstil

---

# 16. Debug Stack

Wenn etwas falsch wirkt, prüfe in dieser Reihenfolge:

1. anchor type
2. anchor expression
3. anchor transition
4. anchor persistence
5. component inheritance
6. density
7. layout
8. components

## Regel
Nicht mit „sieht komisch aus“ starten, sondern mit:
**Welche führende Wahrheit ist hier falsch oder schlecht übergeben?**

---

# 17. Screen Set: aktueller Kernstand

## 17 Kern-Screens

### Main-Familie
1. Main / Idle / Blue
2. Main / Ready / Green
3. Main / Adapting / Yellow
4. Main / Act Now / Orange
5. Main / Failed / Red

### Raum / Exekution
6. Main → Map Reveal
7. Map Focus
8. Go Mode / Walk to Stop
9. Go Mode / In Vehicle

### Recovery / Vertrauen
10. Recovery / Simple Switch
11. Recovery / Recheck nötig
12. Recovery / Kette angepasst

### Planung / Kette
13. Wizard / Einstieg
14. Wizard / Kettenfrage
15. Wizard / Bewegungsstil / Tageslage
16. Chain Summary
17. Quick Change / Snack oder späterer Bus

## Zusätzliche Trust-/Accessibility-Screens
18. Neutral Label vs User Label
19. Lockscreen-safe Notification
20. Accessibility Variant / Large Text + Reduced Motion
21. Voice-safe Assist Screen

---

# 18. Kurzform für andere Modelle

## CatchIt Default Interpretation Block

CatchIt is not a standard transit UI.
Do not interpret it as:
- best route ranking
- route results list
- map-first navigation
- bottom sheet pattern
- dashboard card stack
- setup/settings planner

Interpret it as:
- preference-shaped mobility relief
- calm truth condensation
- state-based interaction
- chain-aware everyday mobility support
- spatial reassurance only when needed

Urgency is expressed through:
- focus
- compression
- clarity
- action-readiness

Not through:
- more UI inventory
- louder movement
- more cards
- more labels

---

# 19. Wichtigste Merksätze

- CatchIt eskaliert über Fokus, nicht über Inventar.
- CatchIt springt nicht zwischen Wahrheiten. Es übergibt Führung.
- Verlust der Führung darf nicht zum Verlust der Orientierung werden.
- Eine CatchIt-Komponente darf sich verändern, aber nicht die Art wechseln.
- CatchIt bewegt sich, um Ambiguität zu reduzieren, nicht um Eindruck zu machen.
- CatchIt spricht, um Aufwand zu senken, nicht um Freundlichkeit zu performen.

---

# 20. Einsatz dieses Dokuments

Dieses Dokument ist geeignet als:
- CustomGPT-Systemgrundlage
- Review-Handbuch
- Figma-Referenz
- Screen-Briefing für andere Modelle
- Kohärenz-Checkliste
- Stakeholder-Kurzsystem

Wenn ein neuer Screen oder Flow nicht in diese Logik passt, ist er wahrscheinlich kein CatchIt-Screen, sondern Drift.
