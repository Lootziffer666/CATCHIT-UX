# CatchIt – Teil 4B
## Tokens und semantische Bindings

## 1. Token-Ebenen

Die Token-Bibliothek wird in sechs Ebenen organisiert:

1. global
2. semantic
3. state
4. component
5. screen
6. prototype

---

## 2. Global Tokens

Diese Tokens sind roh und systemweit neutral.

Beispiele:
- `color.blue.500`
- `color.green.500`
- `color.yellow.500`
- `color.orange.500`
- `color.red.500`
- `space.4`
- `space.8`
- `space.12`
- `space.16`
- `space.24`
- `radius.12`
- `radius.16`
- `radius.24`
- `radius.bubble`
- `font.family.ui`
- `font.family.countdown`
- `motion.150.quick`
- `motion.250.standard`

---

## 3. Semantic Tokens

Diese Tokens beschreiben Bedeutung statt Rohfarbe.

Beispiele:
- `semantic.text.primary`
- `semantic.text.secondary`
- `semantic.surface.base`
- `semantic.surface.overlay`
- `semantic.stroke.soft`
- `semantic.focus.ring`
- `semantic.trust.stable`
- `semantic.trust.recheck`
- `semantic.trust.failed`

---

## 4. State Tokens

Diese Tokens gehören direkt zu CatchIt-Zuständen.

Beispiele:
- `state.idle.background.start`
- `state.idle.background.end`
- `state.ready.background.start`
- `state.ready.background.end`
- `state.adapting.background.start`
- `state.adapting.background.end`
- `state.actNow.background.start`
- `state.actNow.background.end`
- `state.failed.background.start`
- `state.failed.background.end`

### Wichtig
Die alte Logik
- stable
- fragile
- critical

ist hier nicht mehr gültig.

---

## 5. Component Tokens

Diese binden Look und Verhalten an Bausteine.

Beispiele:
- `component.countdown.fill`
- `component.countdown.text`
- `component.instruction.text`
- `component.optionsCluster.gap`
- `component.option.role.primary`
- `component.option.role.reserve`
- `component.option.role.fallback`
- `component.mapReveal.scrim`
- `component.recovery.surface`
- `component.question.surface`

---

## 6. Screen Tokens

Diese helfen, wenn dieselbe Komponente je Screen anders gewichtet wird.

Beispiele:
- `screen.main.heroTopOffset`
- `screen.main.optionsGap`
- `screen.mapReveal.heroScale`
- `screen.mapFocus.mapHeight`
- `screen.recovery.panelSpacing`
- `screen.wizard.questionTopOffset`

---

## 7. Prototype Tokens

Diese dokumentieren Übergangslogik.

Beispiele:
- `prototype.swipeReveal.threshold`
- `prototype.mapFocus.expandDuration`
- `prototype.anchorHandover.duration`
- `prototype.statusShift.colorMorphDuration`

---

## 8. Kernfarben

Die Farben sind Zustandsarchitektur, nicht Dekoration.

### Idle / Blue
- Start: `#4DB9E6`
- Ende: `#1F4B8F`

### Ready / Green
- Start: `#62D38A`
- Ende: `#2E8B57`

### Adapting / Yellow
- Start: `#F4D35E`
- Ende: `#D4A017`

### Act Now / Orange
- Start: `#F4B860`
- Ende: `#D97A1E`

### Failed / Red
- Start: `#F06A6A`
- Ende: `#B83232`

### Neutrale Farben
- Background light: `#F4F7FB`
- Surface white: `#FFFFFF`
- Text strong: `#1E293B`
- Text mute: `#6C7A96`
- Stroke light: `#E1E7F0`

---

## 9. Typografie-Tokens

### UI-Schrift
- `font.family.ui = Inter` oder systemnahe UI-Familie

### Countdown-Schrift
- `font.family.countdown = Orbitron`
- nur für zentrale Zeitanzeige und wenige operative Zahlen

### Typo-Skala
- `type.display.countdown = 48 / 56 / bold`
- `type.title.hero = 18 / 24 / semibold`
- `type.title.card = 16 / 22 / semibold`
- `type.body.default = 16 / 24 / regular`
- `type.body.compact = 14 / 20 / medium`
- `type.label.small = 12 / 16 / medium`
- `type.label.micro = 11 / 14 / medium`

### Typografische Regeln
- Countdown nie in All Caps beschriften
- semantische Labels kurz halten
- keine Miniatur-Sekundärtexte für kritische Wahrheit
- öffentliche/private Semantik über Formulierung, nicht nur Größe
