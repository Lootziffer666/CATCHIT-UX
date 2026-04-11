
# CatchIt – Figma Property & Token Spec Paket – Teil 1  
## Foundations, Component Contract und Token-Bindings

## 1. Zweck dieses Pakets
Dieses vierte Paket übersetzt das bisherige CatchIt-Design in eine **implementierungsnahe Figma-System-Spezifikation**.  
Es ist nicht mehr primär ein konzeptuelles UX-Dokument, sondern ein **Arbeitsdokument für Figma-Komponenten, Variantensysteme, Properties, Token-Bindings, Annotationen und Übergänge**.

Es baut auf:
- der W3C-/WCAG-orientierten UI-Grundlage
- der CatchIt-SSOT
- dem aktuellen CATCHIT-Repo
- den hier im Gespräch festgehaltenen Regeln für Ketten, ND-taugliche UX, intentionale Friktion, Privacy und progressive Offenlegung

## 2. Leitprinzip
CatchIt ist keine klassische Transit-Oberfläche.  
Daher dürfen die Komponenten nicht wie eine normale Karten-/Listen-App gebaut werden.

Die Komponentenarchitektur folgt vier Regeln:

1. **State first**
   - Nicht „welches Widget zeigen wir?“, sondern „welchen Zustand übersetzen wir?“

2. **Travel truth bleibt zentral**
   - Cathy, Farben, Mood, Map, Optionen und Cards sind nie die Wahrheit selbst.
   - Sie rahmen dieselbe Wahrheit unterschiedlich.

3. **Verdichtung vor Ausfaltung**
   - Die Basisoberfläche zeigt weniger, aber gewichtet stärker.
   - Zusätzliche Informationen werden nicht parallel, sondern gestuft geöffnet.

4. **Kettenfähigkeit**
   - Jede Kernkomponente muss mit Einzelfahrt **und** Wegekette funktionieren.

## 3. Figma-Dateiaufbau
Empfohlene Seitenstruktur in Figma:

### 3.1 Seiten
1. `00_Cover_Notes`
2. `01_Foundations`
3. `02_Tokens`
4. `03_Components_Core`
5. `04_Components_Cards`
6. `05_Components_Map_States`
7. `06_Screens_Core`
8. `07_Screens_Planning_Chain`
9. `08_Screens_Recovery_Trust_Privacy`
10. `09_Prototype_Flow`
11. `10_Archive_Exploration`

### 3.2 Namensschema
Empfohlenes Komponentenschema:

- `ci/hero/countdown`
- `ci/hero/status-shell`
- `ci/options/transport-row`
- `ci/map/reveal-panel`
- `ci/map/focus-shell`
- `ci/chain/progress`
- `ci/trust/confidence-chip`
- `ci/recovery/fallback-card`
- `ci/wizard/question-panel`
- `ci/privacy/public-safe-label`

Dabei gilt:
- `ci` = CatchIt
- zweite Ebene = Funktionsfamilie
- dritte Ebene = konkrete Komponente

## 4. Token-Ebenen
Die Token-Bibliothek wird in sechs Ebenen organisiert:

1. **global**
2. **semantic**
3. **state**
4. **component**
5. **screen**
6. **prototype**

### 4.1 Global Tokens
Diese Tokens sind roh und systemweit neutral.

Beispiele:
- `color.blue.500`
- `color.green.500`
- `color.gray.950`
- `space.4`
- `space.8`
- `radius.16`
- `font.family.ui`
- `font.family.countdown`
- `motion.250.standard`

### 4.2 Semantic Tokens
Diese Tokens beschreiben Bedeutung statt Rohfarbe.

Beispiele:
- `semantic.text.primary`
- `semantic.text.secondary`
- `semantic.surface.base`
- `semantic.surface.overlay`
- `semantic.stroke.soft`
- `semantic.focus.ring`
- `semantic.info`
- `semantic.warning`
- `semantic.critical`

### 4.3 State Tokens
Diese Tokens gehören zu CatchIt-Zuständen.

Beispiele:
- `state.idle.background.start`
- `state.idle.background.end`
- `state.baldRelevant.background.start`
- `state.stable.background.start`
- `state.fragile.background.start`
- `state.recovery.background.start`
- `state.critical.background.start`

### 4.4 Component Tokens
Tokens auf Komponentenebene binden Verhalten und Look direkt an Bausteine.

Beispiele:
- `component.countdownBubble.fill`
- `component.countdownBubble.text`
- `component.transportOption.label`
- `component.transportOption.emphasis.active`
- `component.mapPanel.scrim`
- `component.fallbackCard.surface`

### 4.5 Screen Tokens
Diese Tokens helfen, wenn derselbe Baustein auf verschiedenen Ebenen anders gewichtet wird.

Beispiele:
- `screen.main.heroTopOffset`
- `screen.main.optionRowGap`
- `screen.mapReveal.heroScale`
- `screen.mapFocus.mapHeight`
- `screen.recovery.panelSpacing`

### 4.6 Prototype Tokens
Diese Tokens dokumentieren Bewegungs- und Übergangslogik.

Beispiele:
- `prototype.swipeReveal.threshold`
- `prototype.mapFocus.expandDuration`
- `prototype.statusShift.colorMorphDuration`

## 5. Kernfarben
Die Farben sind nicht dekorativ, sondern Zustandsarchitektur.

## 5.1 Basis-Gradienten
### Idle / ruhig
- Start: `#4DB9E6`
- Ende: `#1F4B8F`

### Bald relevant / grün
- Start: `#62D38A`
- Ende: `#2E8B57`

### Fragil / gelb
- Start: `#F4D35E`
- Ende: `#D4A017`

### Recovery / gelb-orange
- Start: `#F4B860`
- Ende: `#D97A1E`

### Kritisch / rot
- Start: `#F06A6A`
- Ende: `#B83232`

## 5.2 Neutrale Farben
- Background light: `#F4F7FB`
- Surface white: `#FFFFFF`
- Text strong: `#1E293B`
- Text mute: `#6C7A96`
- Stroke light: `#E1E7F0`

## 6. Typografie-Tokens
Empfohlene Typo-Rollen:

### 6.1 UI-Schrift
- `font.family.ui = Inter`
- Alternativ: system UI für Android-Nähe

### 6.2 Countdown-Schrift
- `font.family.countdown = Orbitron`
- Nur für zentrale Zeitanzeige und ggf. wenige operative Zahlen

### 6.3 Typo-Skala
- `type.display.countdown = 48 / 56 / bold`
- `type.title.hero = 18 / 24 / semibold`
- `type.title.card = 16 / 22 / semibold`
- `type.body.default = 16 / 24 / regular`
- `type.body.compact = 14 / 20 / medium`
- `type.label.small = 12 / 16 / medium`
- `type.label.micro = 11 / 14 / medium`

### 6.4 Typografische Regeln
- Countdown nie in All Caps beschriften
- semantische Labels kurz halten
- keine Miniatur-Sekundärtexte für kritische Wahrheit
- öffentliche/private Semantik über Formulierung, nicht nur Größe

## 7. Spacing- und Radius-System
### 7.1 Spacing
- `space.4 = 4`
- `space.8 = 8`
- `space.12 = 12`
- `space.16 = 16`
- `space.20 = 20`
- `space.24 = 24`
- `space.32 = 32`

### 7.2 Radius
- `radius.12 = 12`
- `radius.16 = 16`
- `radius.24 = 24`
- `radius.bubble = 999`

## 8. Motion-System
Motion darf nicht hektisch sein.  
CatchIt braucht **orientierende Bewegung**, keine Show.

### 8.1 Standard-Dauern
- `motion.150.quick`
- `motion.250.standard`
- `motion.350.emphasis`
- `motion.500.stateShift`

### 8.2 Einsatzlogik
- Swipe-Reveal: `250–350 ms`
- Map-Focus-Expand: `350 ms`
- Statusfarbwechsel: `350–500 ms`
- Recovery-Eskalation: sichtbar, aber weich
- keine permanente Pulsation bei stabilen Zuständen

## 9. Accessibility-Bindings
Alle zentralen Komponenten bekommen Accessibility-spezifische Variant Properties:

- `a11yLargeText = true/false`
- `a11yHighContrast = true/false`
- `a11yReducedMotion = true/false`
- `a11yScreenReaderPriority = hero|navigation|detail`
- `privacyPublicMode = true/false`

Diese Properties sind **keine Extras**, sondern Teil der Hauptvarianten.

## 10. Component Contract
Jede CatchIt-Komponente soll in Figma dokumentiert werden mit:

1. **Zweck**
2. **wann verwenden**
3. **wann nicht verwenden**
4. **welche Wahrheit transportiert sie**
5. **welche Tokens bindet sie**
6. **welche Variant Properties existieren**
7. **welche Accessibility-Regeln gelten**
8. **welche Privacy-/Public-Safe-Regeln gelten**
9. **welche Prototype-Transitions sie auslöst**

## 11. Zentrale Variant-Property-Familien
Wiederverwendbare Property-Gruppen:

- `state = idle | green | fragile | recovery | critical | done`
- `density = ambient | standard | expanded`
- `confidence = high | medium | low | unknown`
- `emphasis = primary | secondary | tertiary`
- `chainContext = hidden | compact | visible`
- `privacy = neutral | publicSafe | private`
- `selection = active | available | fallback | disabled`
- `map = hidden | reveal | focus`
- `cathy = off | peripheral | transition`
- `motion = standard | reduced`

## 12. Arbeitsregel für das ganze Paket
Wenn eine Komponente nur „schön“ ist, aber keine klare Reise-Wahrheit oder Zustandsfunktion trägt, gehört sie nicht zum Kernsystem.

Dieses Paket ist daher bewusst auf:
- Zustände
- Handlungsschwellen
- Vertrauen
- Kettenkontext
- Recovery
- ND-taugliche Lesbarkeit

optimiert.

# CatchIt – Figma Property & Token Spec Paket – Teil 2  
## Kernkomponenten mit Figma Properties

## 1. `ci/hero/status-shell`
Die umgebende Fullscreen-Hülle des Main States.

### Zweck
Transportiert den Produktzustand über Hintergrund, Dichte, vertikale Kompression und Raumgewichtung.

### Verwendungen
- Main Screen
- Green State
- Fragile State
- Recovery State
- Done State

### Variant Properties
- `state = idle | green | fragile | recovery | critical | done`
- `map = hidden | reveal | focus`
- `chainContext = hidden | compact | visible`
- `cathy = off | peripheral | transition`
- `privacy = neutral | publicSafe | private`
- `a11yHighContrast = false | true`

### Token Bindings
- Fill: `state.*.background.start/end`
- Top padding: `screen.main.heroTopOffset`
- Foreground text: `semantic.text.onState`
- Scrim on map reveal: `component.mapPanel.scrim`

### Verhalten
- Bei `map = reveal` komprimiert sich der Hero-Bereich nach oben
- Bei `map = focus` verliert der Hero Raum, aber nicht Präsenz
- Bei `state = critical` darf die Fläche dominanter werden, aber nicht blinken

## 2. `ci/hero/countdown-bubble`
Die zentrale Bubble mit der semantischen Zeitwahrheit.

### Zweck
Nicht bloß Countdown, sondern:
„Du musst spätestens in X Minuten handeln, damit dein robuster Plan hält.“

### Variant Properties
- `size = hero | compact | pinned`
- `state = idle | green | fragile | recovery | critical | done`
- `urgency = low | medium | high | now`
- `privacy = neutral | publicSafe`
- `a11yLargeText = false | true`

### Inhaltsslots
- `labelTop`
- `timePrimary`
- `unit`
- optional `labelBottom`

### Token Bindings
- Fill: `component.countdownBubble.fill`
- Text primary: `component.countdownBubble.text`
- Shadow: `component.countdownBubble.shadow`
- Radius: `radius.bubble`
- Font family: `font.family.countdown`

### Regeln
- `labelTop` bleibt kurz
- `timePrimary` ist immer das visuelle Zentrum
- `labelBottom` nur bei Mehrwert, z. B. „für: Kita“
- im Map Focus wird `size = pinned`

## 3. `ci/options/transport-row`
Eine einzelne Option im unteren Bereich.

### Zweck
Zeigt eine **machbare** Mobilitätsoption mit Rolle.  
Nicht alle Optionen sind gleich wichtig.

### Variant Properties
- `selection = active | available | fallback | disabled`
- `status = onTime | buffered | tight | delayed | unavailable`
- `mode = bus | tram | train | walk | mixed`
- `privacy = neutral | publicSafe`
- `density = ambient | standard | compact`

### Inhaltsslots
- `modeLabel`
- `routeLabel`
- `supportingValue`
- `roleLabel`

### Token Bindings
- Active emphasis: `component.transportOption.emphasis.active`
- Secondary emphasis: `component.transportOption.emphasis.available`
- Delayed value color: semantic warning / critical
- Route shape chip: `component.transportOption.routeChip`

### Regeln
- nicht als gleichwertige Vergleichstabelle bauen
- eine Option muss lesbar führend sein
- Delay allein ist nie genug; Rolle oder Zielrelevanz ergänzen
- Beispiel für `roleLabel`:
  - „am ruhigsten“
  - „optimal“
  - „knapp, aber machbar“

## 4. `ci/chain/progress`
Mini-Fortschrittsbaustein für Ketten.

### Zweck
Zeigt, dass der aktuelle Schritt Teil eines größeren Ablaufs ist.

### Variant Properties
- `mode = dots | stepLabels | fraction`
- `visibility = hidden | subtle | standard`
- `progressState = past | current | next | future`
- `privacy = neutral | publicSafe`

### Regeln
- niemals voller Timeline-Ersatz
- im Main Screen höchstens subtil
- in Plan/Go/Recovery darf er expliziter sein

## 5. `ci/map/reveal-panel`
Der per Swipe eingeblendete Kartenbereich.

### Zweck
Macht die räumliche Ebene sichtbar: Fußweg, Haltestelle, Übergang.

### Variant Properties
- `state = hidden | reveal | focus`
- `orientationNeed = low | medium | high`
- `routeType = walkToStop | transferWalk | fallbackWalk`
- `privacy = neutral | publicSafe`
- `a11yReducedMotion = false | true`

### Token Bindings
- Panel background: `semantic.surface.overlay`
- Drag handle: `component.mapPanel.handle`
- Height reveal: `screen.mapReveal.mapHeight`
- Height focus: `screen.mapFocus.mapHeight`

### Regeln
- Karte nicht permanent dominant
- Reveal bedeutet: Raum öffnen
- Focus bedeutet: Orientierung führt

## 6. `ci/map/summary-row`
Die Informationszeile unter oder über der Karte.

### Inhalte
- Distanz
- Gehzeit
- Zielhaltestelle
- gewählte Linie
- optional Abfahrtszeit

### Variant Properties
- `layout = inline | stacked`
- `density = compact | standard`
- `selection = active | fallback`
- `privacy = neutral | publicSafe`

### Regeln
- nur handlungsnahe Fakten
- keine Technikdaten
- keine vollständige Routendekodierung

## 7. `ci/trust/confidence-chip`
Baustein für Stabilität und Vertrauensfähigkeit.

### Variant Properties
- `confidence = high | medium | low | unknown`
- `tone = calm | caution | alert`
- `explanation = hidden | short`

### Beispielwerte
- hoch = „Plan stabil“
- mittel = „Bitte im Blick behalten“
- niedrig = „Recheck nötig“
- unknown = „Noch wird geprüft“

### Regeln
- nie scheinbar mathematisch präzise ohne belastbare Grundlage
- darf Unsicherheit benennen
- dient Vertrauen, nicht Kosmetik

## 8. `ci/recovery/fallback-card`
Fallback- oder Recovery-Option.

### Variant Properties
- `priority = primary | secondary`
- `fallbackType = nextBus | simplerRoute | laterDeparture | walkAlternative | manualReview`
- `confidence = high | medium | low`
- `action = autoSuggested | userConfirm`

### Inhalt
- kurze Lage
- einfachste Alternative
- Auswirkung auf Kette
- CTA

### CTA-Beispiele
- „Diesen Plan nehmen“
- „10 Minuten später weiter“
- „Einfachere Route öffnen“
- „Rückweg neu abstimmen“

## 9. `ci/wizard/question-panel`
Die Basis des menschlichen Wizards.

### Zweck
Fragt nach Vorhaben statt Parametern.

### Variant Properties
- `questionType = destination | deadline | chainContinuation | returnNeed | mobilityStyle | pauseStop`
- `density = minimal | standard`
- `inputType = text | choice | chips | time | yesNo`
- `privacy = neutral | publicSafe`

### Regeln
- eine Kernfrage pro Panel
- keine Formularfriedhöfe
- Kettenfrage wiederholen, bis verneint

## 10. `ci/privacy/public-safe-label`
Abstraktionsbaustein für öffentliche Sichtbarkeit.

### Zweck
Übersetzt private Semantik in sozial robuste Begriffe.

### Variant Properties
- `privacy = publicSafe | private`
- `type = stop | appointment | errand | health | child | home`
- `mode = auto | userDefined`

### Beispiele
- privat: „Einläufe holen“
- publicSafe: „Apotheke“
- privat: „Termin beim Proktologen“
- publicSafe: „Arzttermin“

### Regeln
- Main Screen standardmäßig `publicSafe`
- private Details nur in bewusstem Fokusmodus
- Voice-Ausgabe nutzt immer safe default

## 11. `ci/cathy/frame`
Nur als nachgelagerter UX-Layer.

### Variant Properties
- `state = off | peripheral | transition | supportive`
- `intensity = low | medium`
- `position = top | side | bottom`
- `content = none | glance | reassure | transitionCue`

### Regeln
- nicht parallel zu kritischem Handlungscontent dominieren
- nicht die Route erklären, wenn visuelle Wahrheit genügt
- groß nur in Transition oder Regulation

## 12. `ci/action/quick-change-sheet`
Schnelle Kettenänderungen ohne Neustart.

### Variant Properties
- `changeType = snackStop | laterBus | shortPause | skipStop | adjustReturn`
- `impact = local | chainWide`
- `confirmation = simple | explained`

### Regeln
- Änderungen lokal, nicht zerstörerisch
- immer zeigen, was mit Restkette passiert
- keine unmarkierten stillen Total-Neuberechnungen

# CatchIt – Figma Property & Token Spec Paket – Teil 3  
## Screen-by-Screen Token-Zuordnung

## 1. Screen `SC-01 Main / Idle`
### Ziel
Default-Home-State mit ruhiger Verdichtung.

### Sichtbare Elemente
- `ci/hero/status-shell`
- `ci/hero/countdown-bubble`
- 3x `ci/options/transport-row`
- optional `ci/chain/progress`
- optional `ci/trust/confidence-chip`

### Variant Set
- `status-shell.state = idle`
- `countdown-bubble.size = hero`
- `transport-row.selection = active / available / fallback`
- `chain/progress.visibility = subtle`

### Token-Bindings
- Background: `state.idle.*`
- Bubble size: `screen.main.countdown.hero`
- Option gap: `screen.main.optionRowGap`
- Progress offset: `screen.main.chainOffset`

### Annotationen in Figma
- „Dieser Screen zeigt dieselbe Wahrheit wie der ausführlichere Plan-Screen, aber verdichtet.“
- „Die Hauptaussage ist semantische Handlungsschwelle, nicht rohe Dauer.“

## 2. Screen `SC-02 Main / Green`
### Ziel
10-Minuten-vor-Losgehen-Modus.

### Unterschied zu SC-01
- Hintergrund grün
- sprachlich zugespitzter
- Handlungsschwelle höher gewichtet
- Optionen operativer lesbar

### Variant Set
- `status-shell.state = green`
- `countdown-bubble.urgency = medium|high`
- `confidence-chip.tone = calm|caution`

### Copy-Ideen
- „Bald los“
- „Spätestens los in“
- „Plan stabil“

## 3. Screen `SC-03 Main / Fragile`
### Ziel
Plan ist noch möglich, aber nicht mehr bequem.

### Zusätzliche Elemente
- `ci/trust/confidence-chip`
- evtl. `ci/recovery/fallback-card` in kompakter Form

### Regeln
- nicht sofort Alarmästhetik
- Farbe und Copy müssen ehrlich sein
- Beispiel:
  - „Bitte im Blick behalten“
  - „Alternative bereit“

## 4. Screen `SC-04 Map Reveal`
### Ziel
Fußweg zur besten Haltestelle per Swipe einblenden.

### Sichtbare Elemente
- `status-shell.map = reveal`
- `countdown-bubble.size = compact`
- komprimierte Optionen
- `ci/map/reveal-panel`
- `ci/map/summary-row`

### Token-Bindings
- Hero scale: `screen.mapReveal.heroScale`
- Map height: `screen.mapReveal.mapHeight`
- Panel radius: `screen.mapReveal.panelRadius`
- Scrim: `screen.mapReveal.scrim`

### Gestenlogik
- Swipe up = Reveal
- Swipe down = zurück zu Main

### Annotation
- „Der Swipe öffnet keine bloßen Details, sondern die Raumebene.“

## 5. Screen `SC-05 Map Focus`
### Ziel
Orientierung dominiert, Zeit bleibt sichtbar.

### Sichtbare Elemente
- `status-shell.map = focus`
- `countdown-bubble.size = pinned`
- Karte groß
- `map/summary-row`
- optional 1 aktive Linienkarte

### Token-Bindings
- Map height: `screen.mapFocus.mapHeight`
- Bubble pinned top: `screen.mapFocus.bubbleTopOffset`
- Summary spacing: `screen.mapFocus.summaryGap`

### Regeln
- Bubble bleibt präsent
- nicht alle drei Optionen gleich stark zeigen
- nur aktive Linie prominent

## 6. Screen `SC-06 Go Mode / nächster Schritt`
### Ziel
Vertikale Exekution.

### Sichtbare Elemente
- `status-shell.state = green|fragile`
- `countdown-bubble.size = compact|pinned`
- nächster Schritt als Sequenz
- evtl. reduzierte Kettenfortsetzung
- minimaler Confidence-Hinweis

### Regeln
- nur das Nächste zählt
- Zukünftiges bleibt vorbereitet, aber nicht dominant
- Vergangenes beruhigt

## 7. Screen `SC-07 Recovery`
### Ziel
Wenn etwas kippt, die einfachste Rettung zeigen.

### Sichtbare Elemente
- `status-shell.state = recovery`
- `countdown-bubble`
- 1–2 `fallback-card`
- knappe Kettenauswirkung
- klare CTA

### Token-Bindings
- Background: `state.recovery.*`
- Card surface: `component.fallbackCard.surface`
- CTA emphasis: `component.fallbackCard.cta`

### Annotation
- „Recovery ist keine Fehlerseite, sondern ein handlungsfähiger Produktmodus.“

## 8. Screen `SC-08 Critical`
### Ziel
Pünktlichkeit nicht mehr sicher oder verfehlt.

### Regeln
- nicht hysterisch
- ehrliche Lage
- nächstbeste tragfähige Option
- falls nötig: expliziter Kontrollmoment

### Copy
- „Plan nicht mehr sicher“
- „Einfachste Rettung“
- „Rückweg angepasst“

## 9. Screen `SC-09 Wizard Start`
### Ziel
Vorhaben statt Route erfassen.

### Sichtbare Elemente
- `wizard/question-panel`
- `privacy/public-safe-label` wo nötig
- Fortschritt auf Wizard-Ebene

### Regeln
- eine Frage pro Screen
- wenig kognitive Verzweigung

## 10. Screen `SC-10 Kettenfrage`
### Kernfrage
„Musst du danach noch irgendwo hin?“

### Properties
- `questionType = chainContinuation`
- `inputType = yesNo | chips`

### Varianten
- keine Folge
- weitere Station
- Rückweg
- spontaner Zwischenstopp

## 11. Screen `SC-11 Quick Change`
### Ziel
Snacken, später fahren, Pause, Rückweg anpassen – ohne Neustart.

### Sichtbare Elemente
- `action/quick-change-sheet`
- Kettenauswirkung
- neue Handlungsschwelle

### Regeln
- lokale Änderung
- Restkette explizit mitdenken

## 12. Screen `SC-12 Privacy / Public Safe`
### Ziel
Zeigen, wie CatchIt intime Bedeutung abstrahiert.

### Sichtbare Elemente
- Vergleich private vs publicSafe
- Notification-/Voice-Beispiele
- Umschalter / Voreinstellung

### Annotation
- „Öffentliche Oberfläche neutral, private Bedeutung optional.“

## 13. Screen `SC-13 Cathy Transition`
### Ziel
Cathy nur als humane Rahmung.

### Regeln
- peripher bei Stabilität
- näher bei Unsicherheit
- groß nur bei Transition
- nicht parallel zu kritischem Handlungscontent

## 14. Screen `SC-14 Accessibility`
### Ziel
A11y-Varianten sichtbar machen.

### Varianten
- Large Text
- High Contrast
- Reduced Motion
- Public Safe
- Screen Reader Priority

## 15. Screen `SC-15 Component Gallery`
### Ziel
Figma-Team-Übergabe und Systemkonsistenz.

### Inhalt
- Hero shell Varianten
- Bubble Varianten
- Option rows
- map states
- fallback cards
- wizard panels
- privacy labels
- cathy frame

# CatchIt – Figma Property & Token Spec Paket – Teil 4  
## Komponentenmatrix, Prototyping und Screen-Prioritäten

## 1. Komponentenmatrix
| Komponente | Pflicht für V1 Mockup | Pflicht für Build-V1 | Später |
|---|---|---|---|
| status-shell | ja | ja | |
| countdown-bubble | ja | ja | |
| transport-row | ja | ja | |
| chain/progress | ja | optional | |
| confidence-chip | ja | ja | |
| map/reveal-panel | ja | optional | |
| map/summary-row | ja | optional | |
| fallback-card | ja | ja | |
| wizard/question-panel | ja | ja | |
| public-safe-label | ja | optional | |
| quick-change-sheet | ja | optional | |
| cathy/frame | optional | nein | später |

## 2. Figma-Property-Panel-Standard
Jede Hauptkomponente bekommt in Figma einheitliche Properties in dieser Reihenfolge:

1. `state`
2. `selection`
3. `density`
4. `confidence`
5. `privacy`
6. `map`
7. `cathy`
8. `a11yLargeText`
9. `a11yHighContrast`
10. `a11yReducedMotion`

Damit bleibt das Variantensystem über Komponenten hinweg lesbar.

## 3. Empfohlene Component Sets
### Set A – Hero
- status-shell
- countdown-bubble
- confidence-chip
- chain-progress

### Set B – Options
- transport-row
- route chip
- supporting role label

### Set C – Map
- reveal panel
- map summary
- drag handle
- map focus footer

### Set D – Recovery
- fallback-card
- recovery explanation row
- recheck-needed banner

### Set E – Planning
- wizard question panel
- answer chips
- chain continuation pattern
- return trip pattern

### Set F – Trust & Privacy
- public-safe-label
- confidence chip
- provenance hint
- watcher/recheck hint

## 4. Prototyp-Übergänge in Figma
### 4.1 Main → Map Reveal
- Trigger: swipe up
- Animation: move in + smart animate
- Dauer: 300 ms
- Easing: ease out
- Bubble: scale down
- Options: compress upward
- Karte: rise from bottom

### 4.2 Map Reveal → Map Focus
- Trigger: tap on map
- Animation: smart animate
- Dauer: 350 ms
- Bubble: pin to top
- Karte: expand vertically
- Summary row: fade + move

### 4.3 Main → Green State
- Trigger: timer state / prototype tap
- Animation: dissolve + smart animate
- Dauer: 400 ms
- Background morph
- copy shift mild

### 4.4 Fragile → Recovery
- Trigger: alert / missed connection
- Animation: smart animate
- Dauer: 300 ms
- confidence tone shifts from caution to alert
- fallback card enters immediately below hero

### 4.5 Wizard → Quick Change
- Trigger: CTA or overflow
- Animation: bottom sheet
- Dauer: 250 ms

## 5. Annotationen pro Kernscreen
Jeder Präsentationsscreen braucht vier Annotationstypen:

1. **State truth**
   - Was ist die eigentliche Lage?

2. **User question**
   - Welche Frage beantwortet der Screen?

3. **Design decision**
   - Warum ist diese Verdichtung so gebaut?

4. **Trust / ND note**
   - Welcher Vertrauens- oder Belastungsaspekt wird geschützt?

## 6. Empfohlene Annotation-Beispiele
### Main Screen
- State truth: „Robuster Plan hält, wenn in 15 Minuten aufgebrochen wird.“
- User question: „Muss ich gerade etwas tun?“
- Design decision: „Derselbe Plan wie in der detaillierten Ansicht, aber nach Dringlichkeit verdichtet.“
- Trust note: „Alle Optionen sind machbar; eine ist führend.“

### Map Reveal
- State truth: „Räumliche Orientierung wird jetzt relevant.“
- User question: „Wie komme ich zur besten Haltestelle?“
- Design decision: „Karte erscheint erst bei Bedarf.“
- ND note: „Orientierung wird geöffnet, nicht aufgedrängt.“

### Recovery
- State truth: „Der bisherige Plan ist fragil oder gekippt.“
- User question: „Was ist jetzt die einfachste Rettung?“
- Design decision: „Recovery ist ein eigener Modus, kein Fehlerdialog.“
- Trust note: „Änderung und Kettenauswirkung werden explizit gemacht.“

## 7. Welche Mockups du zusätzlich selbst bauen solltest
Für eine kohärente Vermittlung des Designkonzepts reichen nicht nur schöne Hero-Screens.  
Du solltest mindestens diese 12 Mockups bauen:

1. Main Idle
2. Main Green
3. Main Fragile
4. Map Reveal
5. Map Focus
6. Go Mode / nächster Schritt
7. Recovery / einfachste Rettung
8. Wizard Start
9. Kettenfrage / weiterer Stop
10. Quick Change / Snacken + späterer Bus
11. Privacy / Public Safe Beispiel
12. Accessibility Variant Board

### Sehr empfehlenswerte Ergänzungen
13. Main mit subtiler Kettenprogression  
14. Rückweg im selben Kettenobjekt  
15. Cathy in Transition  
16. Recovery mit Recheck / Watcher  
17. Component Gallery  
18. Token Overview Slide

## 8. Priorisierte Baureihenfolge
### Phase 1 – Produktkern
1. Main Idle
2. Main Green
3. Map Reveal
4. Map Focus
5. Recovery

### Phase 2 – Differenzierung
6. Wizard Start
7. Kettenfrage
8. Quick Change
9. Rückweg-Ansicht

### Phase 3 – Vertrauen
10. Privacy
11. Accessibility
12. Cathy Transition

### Phase 4 – Systemisierung
13. Komponentenboard
14. Tokenboard
15. Prototyp-Flowboard

## 9. Repo-Anschluss
Dieses Paket soll an die reale Struktur des Repos anschließen.

### Figma → Compose Anschluss
- `status-shell` korrespondiert mit Home-/Scene-State-Logik
- `countdown-bubble` und `transport-row` korrespondieren mit Home-/Timeline-/ActivePlan-Darstellung
- `wizard/question-panel` korrespondiert mit Wizard-First-Routing
- `fallback-card` korrespondiert mit Alert-/Recovery-Logik
- `cathy/frame` bleibt nachgelagert

### Was bewusst noch nicht zu eng gekoppelt werden sollte
- provider-spezifische API-Eigenheiten
- Live-Realtime-Unsauberkeiten
- echte Mehrpersonenlogik
- technische Debug-Oberflächen

## 10. Abschlussregel
Dieses Paket ist dann gelungen, wenn:
- Figma nicht wie eine normale Transit-App aussieht
- die Komponenten eine echte Zustandsmaschine tragen
- Ketten klarer werden als Einzelfahrten
- Vertrauen sichtbarer wird als bloße Glätte
- Privacy und ND-Lesbarkeit nicht nachträglich, sondern systemisch eingebaut sind
