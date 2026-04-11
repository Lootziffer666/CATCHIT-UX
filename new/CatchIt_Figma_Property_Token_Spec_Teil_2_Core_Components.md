
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
