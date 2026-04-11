
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
