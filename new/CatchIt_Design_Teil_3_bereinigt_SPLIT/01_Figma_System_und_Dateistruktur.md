# CatchIt – Teil 3A
## Figma-System und Dateistruktur

## 1. Ziel dieses Pakets

Dieses Paket ist keine Marketingfolie, sondern eine Arbeitsgrundlage für:
- kohärente Mockups
- klickbare Flows
- Screenfamilien
- Annotationslogik
- Design-Kommunikation

Es soll drei Dinge leisten:
1. Designkohärenz sichern
2. Produktwahrheit sichtbar machen
3. Figma-Arbeit strukturieren

---

## 2. Grundsatz für Mockups

Jeder Screen muss auf mindestens eine der vier CatchIt-Kernfragen antworten:
- Was passiert als Nächstes?
- Wann muss ich handeln?
- Wie sicher ist der Plan gerade?
- Was ist die einfachste tragfähige Alternative, wenn etwas kippt?

Wenn ein Mockup diese Fragen nicht beantwortet, ist es meist:
- zu ornamental
- zu transit-toolhaft
- zu datenorientiert
- oder zu wenig CatchIt

---

## 3. Dateistruktur in Figma

Empfohlene Seiten:

### Seite 1 — Principles
- Produktkern
- Zustandslogik
- Kettenlogik
- ND-/Trust-Prinzipien
- Intentional Friction

### Seite 2 — Tokens
- Farbe
- Typografie
- Spacing
- Radius
- Motion
- Semantik

### Seite 3 — Components
- Countdown Anchor
- Options Cluster
- Chain Context
- Map Reveal Surface
- Recovery Card
- Wizard Question Panel
- Cathy Layer Container

### Seite 4 — Core Screens
- Main States
- Map Reveal
- Map Focus
- Go Mode
- Recovery

### Seite 5 — Planning / Chain
- Wizard
- Chain Summary
- Quick Change
- Return Logic

### Seite 6 — Trust / Privacy / Accessibility
- neutrale Labels
- notification-safe Inhalte
- reduced motion
- large text
- voice-safe surfaces

### Seite 7 — Prototype
- klickbarer Flow
- Zustandswechsel
- Gesten
- Transitionen

---

## 4. Naming-Konvention für Frames

Empfohlen:
`[Mode]_[Screen]_[State]_[Variant]`

Beispiele:
- `GO_Main_Blue_Idle`
- `GO_Main_Green_Ready`
- `GO_Main_Yellow_Adapting`
- `GO_Main_Orange_ActNow`
- `GO_Main_Red_Failed`
- `GO_MapReveal_Default`
- `GO_MapFocus_WalkPath`
- `RECOVERY_SimpleSwitch_Default`
- `PLAN_Wizard_ChainQuestion_Default`
- `PLAN_QuickChange_LaterBus`

---

## 5. Allgemeines Layoutmodell

### Device Frame
- konsistenter Smartphone-Frame
- keine Statusbar-Spielereien
- gleiche Safe Areas
- konstantes Viewport-Verhältnis

### Grid
- 4-pt Unterraster
- 8-pt Hauptsystem
- horizontale Außenabstände 20–24
- vertikale Rhythmik 8 / 12 / 16 / 24 / 32

### Vertikale Grundzonen
1. Top Utility Zone
2. Hero / Anchor Zone
3. Operational Zone
4. Support Zone

Die Gewichtung variiert je nach State, aber die Grundfamilie bleibt.
