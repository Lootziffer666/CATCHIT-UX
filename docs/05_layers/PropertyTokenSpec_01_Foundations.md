
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
