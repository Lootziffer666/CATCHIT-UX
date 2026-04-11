
# CatchIt - Implementierungsnahe UX-/Design-Spezifikation - Teil 3
## Design-Tokens, visuelle Regeln, Motion, Komponenten

---

## 1. Ziel dieses Teils

Dieser Teil definiert das **Designsystem** von CatchIt auf Token- und Komponentenebene.  
Es geht nicht um generische UI-Schönheit, sondern um ein konsistentes System, das:

- Zustände klar lesbar macht,
- Verdichtung unterstützt,
- ND-tauglich bleibt,
- und in Compose sauber abbildbar ist.

---

## 2. Token-Prinzipien

### 2.1 Tokens sind Produktlogikträger
In CatchIt sind Tokens nicht bloß Styling-Helfer.  
Sie transportieren:

- Zustände
- Dringlichkeit
- Vertrauen
- Hierarchie
- Rückzug vs. Intervention
- Raumöffnung vs. Verdichtung

### 2.2 Tokens dürfen nicht rein brand-driven sein
Die Zustandsfarben des Systems sind wichtiger als dekorative Markenfarben.

### 2.3 Semantische Tokens vor harte Werte
Bevorzugt:
- `color.state.stable.background`
- `color.state.fragile.background`
- `space.main.hero.gap`

Nicht bevorzugt:
- `blue500`
- `gap16`

---

## 3. Farbmodell

### 3.1 Zustandsfarben
**Stable / Idle / Ruhe**
- `color.state.stable.gradient.start`
- `color.state.stable.gradient.end`

**Go / bald relevant**
- `color.state.ready.gradient.start`
- `color.state.ready.gradient.end`

**Fragile / CatchIt regelt**
- `color.state.fragile.gradient.start`
- `color.state.fragile.gradient.end`

**Action required**
- `color.state.action.gradient.start`
- `color.state.action.gradient.end`

**Critical**
- `color.state.critical.gradient.start`
- `color.state.critical.gradient.end`

**Complete / cool down**
- `color.state.complete.gradient.start`
- `color.state.complete.gradient.end`

### 3.2 Beispielwerte
Diese Werte sind Startpunkte, keine Dogmen.

```yaml
color:
  state:
    stable:
      gradient:
        start: "#4DB9E6"
        end: "#1F4B8F"
    ready:
      gradient:
        start: "#62D58B"
        end: "#1C8F4E"
    fragile:
      gradient:
        start: "#F4D86A"
        end: "#D0A32A"
    action:
      gradient:
        start: "#F1A24B"
        end: "#C56C11"
    critical:
      gradient:
        start: "#E96A5F"
        end: "#B9352A"
    complete:
      gradient:
        start: "#7D8CA6"
        end: "#475569"
```

### 3.3 Neutrale Farben
```yaml
color:
  surface:
    primary: "#FFFFFF"
    secondary: "#F4F7FB"
    elevated: "#FFFFFF"
  text:
    primary: "#102033"
    secondary: "#5C6B82"
    inverse: "#FFFFFF"
    muted: "#A9B4C4"
  stroke:
    subtle: "#DCE4EF"
    strong: "#97A6BA"
```

### 3.4 Semantische Funktionsfarben
```yaml
color:
  feedback:
    success: "#2E7D32"
    warning: "#C98A00"
    danger: "#C0392B"
    info: "#3D67D6"
```

---

## 4. Typografie

### 4.1 Rollen
CatchIt braucht nicht viele Fonts, sondern **eine präzise Hierarchie**.

Empfohlene Rollen:
- **Display / Countdown Font**
- **Primary UI Font**

### 4.2 Empfehlung
- Countdown / Hero-Zahl: markante Display-Sans
- Restliche UI: Inter oder vergleichbar neutrale, gut ausgebaute Sans

### 4.3 Tokens
```yaml
font:
  family:
    display: "Orbitron"
    ui: "Inter"
  weight:
    regular: 400
    medium: 500
    semibold: 600
    bold: 700
```

### 4.4 Type Scale
```yaml
type:
  heroCountdown:
    fontFamily: "{font.family.display}"
    fontSize: 56
    lineHeight: 56
    fontWeight: "{font.weight.bold}"
  heroLabel:
    fontFamily: "{font.family.ui}"
    fontSize: 16
    lineHeight: 22
    fontWeight: "{font.weight.medium}"
  titleLg:
    fontFamily: "{font.family.ui}"
    fontSize: 24
    lineHeight: 30
    fontWeight: "{font.weight.semibold}"
  titleMd:
    fontFamily: "{font.family.ui}"
    fontSize: 20
    lineHeight: 26
    fontWeight: "{font.weight.semibold}"
  body:
    fontFamily: "{font.family.ui}"
    fontSize: 16
    lineHeight: 24
    fontWeight: "{font.weight.regular}"
  bodySm:
    fontFamily: "{font.family.ui}"
    fontSize: 14
    lineHeight: 20
    fontWeight: "{font.weight.regular}"
  label:
    fontFamily: "{font.family.ui}"
    fontSize: 12
    lineHeight: 16
    fontWeight: "{font.weight.medium}"
```

### 4.5 Typoregeln
- keine langen Texte in Display-Font
- keine All-Caps-Fließtexte
- Countdown-Zahlen monolithisch, aber nicht verspielt
- kleine Labels dürfen nie die einzige Trägerin kritischer Information sein
- Zahlen und Zeitangaben klar, ruhig, ohne unnötigen Schmuck

---

## 5. Spacing, Radius, Elevation

### 5.1 Spacing-Scale
```yaml
space:
  0: 0
  1: 4
  2: 8
  3: 12
  4: 16
  5: 20
  6: 24
  8: 32
  10: 40
  12: 48
  16: 64
```

### 5.2 Radius
```yaml
radius:
  sm: 12
  md: 16
  lg: 24
  xl: 32
  pill: 999
```

### 5.3 Elevation
```yaml
elevation:
  flat: 0
  card: 1
  overlay: 2
  modal: 3
```

### 5.4 Regel
CatchIt sollte visuell eher über:
- Abstand
- Tonwert
- Layering
- Größe

arbeiten als über harte Schatten.

---

## 6. Motion-Tokens

Motion muss Zustandswechsel lesbar machen, nicht Effekte inszenieren.

### 6.1 Grundsätze
- ruhig
- weich
- klar
- nie hektisch
- nie permanent animiert
- kein visuelles „Nervensystem“ im Idle

### 6.2 Tokens
```yaml
motion:
  duration:
    fast: 140
    normal: 220
    calm: 320
  easing:
    standard: "cubic-bezier(0.2, 0.0, 0.0, 1.0)"
    enter: "cubic-bezier(0.2, 0.8, 0.2, 1.0)"
    exit: "cubic-bezier(0.4, 0.0, 1.0, 1.0)"
```

### 6.3 Motion-Muster
- Main -> Map Reveal: `calm`
- Reveal -> Focus: `normal`
- Statuswechsel Blau -> Grün: `calm`, weich, keine harte Störung
- Fragil -> Action: `normal`, deutlicher
- Replan-Sheet: `normal`
- Cathy Transition: zurückhaltend, nie parallel zu kritischem Content dominant

---

## 7. Hauptkomponenten

### 7.1 Countdown Bubble
Rolle:
- permanenter Zeitanker

Tokens:
```yaml
component:
  countdownBubble:
    minSize: 168
    padding: 24
    radius: "{radius.pill}"
    bg: "rgba(255,255,255,0.18)"
    border: "rgba(255,255,255,0.32)"
    blur: "optional"
```

### 7.2 State Backdrop
Rolle:
- emotional lesbare Zustandsfläche

Eigenschaften:
- Vollbild-Gradient
- keine Texturüberladung
- keine konkurrierenden Hintergrundobjekte
- Cathy nur, wenn vereinbar mit Handlungspriorität

### 7.3 Option Chip / Option Tile
Rolle:
- wenige machbare Alternativen
- Rollen statt Rohdaten

Tokens:
```yaml
component:
  optionTile:
    minWidth: 72
    paddingX: 12
    paddingY: 8
    radius: 16
    labelStyle: "{type.label}"
    valueStyle: "{type.titleMd}"
```

### 7.4 Kettenkontext-Zeile
Beispiele:
- `Für: Kita`
- `Schritt 2 von 4`
- `Danach: Heimweg`

Regel:
- dezent
- sekundär
- nie detailüberladen

### 7.5 Map Card
Rolle:
- räumliche Ebene

Eigenschaften:
- wächst von unten in den Raum
- klar vom Hero getrennt
- nicht wie ein fremdes Modal
- kann in Focus dominant werden

### 7.6 Recovery Card
Rolle:
- Problem lesbar machen
- beste Rettung priorisieren
- Kettenauswirkung benennen

### 7.7 Quick Change Sheet
Rolle:
- spontane Änderung ohne Neustart

Einträge:
- `10 Min später`
- `späteren Bus nehmen`
- `Snack-Stopp einfügen`
- `Rückweg anpassen`
- `Kette neu abstimmen`

### 7.8 Meaning Label
Rolle:
- neutraler oder nutzerdefinierter Abschnittsname

Varianten:
- system
- neutral
- custom
- private-hidden

---

## 8. Zustands-Token

Neben visuellen Tokens braucht CatchIt produktnahe Zustands-Tokens.

```yaml
state:
  plan:
    stable
    ready
    fragile
    actionRequired
    critical
    complete
  reassurance:
    observe
    recheck
    fallbackReady
    interventionNeeded
  chain:
    currentStep
    nextStep
    upcomingStep
    returnPlanned
```

Diese Zustände sollten in UI-Mapping, Analytics, Logging und Content-Regeln wiederverwendbar sein.

---

## 9. Content-Tokens

Wichtige Microcopy sollte ebenfalls semantisch tokenisiert werden.

```yaml
copy:
  hero:
    leaveIn: "Spätestens los in"
    leaveNow: "Jetzt los"
    almostTime: "Bald los"
  role:
    best: "Beste Wahl"
    calm: "Ruhigste Reserve"
    fallback: "Fallback"
  trust:
    stable: "Alles im Plan"
    fragile: "Plan wird beobachtet"
    recheck: "Neu prüfen"
    fallbackReady: "Alternative bereit"
    action: "Bitte jetzt handeln"
```

Vorteil:
- konsistente Sprache
- klare State-to-copy-Mappings
- weniger Textdrift im Produkt

---

## 10. Token-Namensschema für Implementierung

Empfohlenes Schema:

```text
category.group.role.state.variant
```

Beispiele:
- `color.state.ready.gradient.start`
- `type.heroCountdown`
- `component.optionTile.selected.bg`
- `copy.hero.leaveIn`
- `motion.duration.calm`

---

## 11. Compose-Übersetzung

Für das bestehende Repo wäre sinnvoll:

- `CatchItColors`
- `CatchItTypography`
- `CatchItSpacing`
- `CatchItMotion`
- `CatchItComponents`
- `CatchItStatePalette`

Zusätzlich sinnvoll:
- Mapping-Funktion von `Scene/Alert/PlanState` auf Design-Tokens
- Copy Resolver für Statuslabels
- Option Role Resolver

---

## 12. Designsystem-Regeln für Konsistenz

1. Hero-Zeit schlägt Sekundärdaten.
2. Zustand schlägt Dekoration.
3. Rollen schlagen Datenvollständigkeit.
4. Karte erscheint nur bei räumlichem Bedarf.
5. Motion signalisiert Moduswechsel, nicht Show.
6. Farben sind niemals alleinige Informationsträger.
7. Private Bedeutungen werden nicht standardmäßig exponiert.

---

## 13. Übergang zu Teil 4

Teil 4 definiert:
- Accessibility
- Vertrauensarchitektur
- Privacy
- Voice- und Notification-Regeln
- Cathy-Rahmen
