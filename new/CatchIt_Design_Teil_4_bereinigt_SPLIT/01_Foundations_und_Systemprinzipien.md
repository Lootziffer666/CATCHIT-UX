# CatchIt – Teil 4A
## Foundations und Systemprinzipien

## 1. Zweck dieses Pakets

Dieses Paket ist kein loses Style-Kit, sondern ein Arbeitsdokument für:
- Figma-Komponenten
- Variant-Systeme
- Property-Strukturen
- Token-Bindings
- Zustandsbasierte UI-Übersetzung

Es baut auf:
- CatchIt als Decision-Relief-System
- der 5-State-Logik
- Anchor-/Transition-/Persistence-/Inheritance-Regeln
- ND-/Trust-/Privacy-Prinzipien
- dem vorhandenen Repo als technische Anschlussfläche

---

## 2. Leitprinzip

CatchIt ist keine klassische Transit-Oberfläche.  
Daher dürfen die Komponenten nicht wie eine normale Karten-/Listen-App gebaut werden.

Die Komponentenarchitektur folgt vier Regeln:

### 2.1 State first
Nicht „welches Widget zeigen wir?“, sondern „welchen Zustand übersetzen wir?“

### 2.2 Travel Truth bleibt zentral
Countdown, Optionen, Karte, Recovery, Cathy und Farben rahmen dieselbe Wahrheit unterschiedlich.  
Sie sind nie selbst die Wahrheit.

### 2.3 Verdichtung vor Ausfaltung
Die Basisoberfläche zeigt weniger, aber gewichtet stärker.  
Zusätzliche Informationen werden nicht parallel, sondern gestuft geöffnet.

### 2.4 Kettenfähigkeit
Jede Kernkomponente muss mit Einzelfahrt **und** Wegekette funktionieren.

---

## 3. Figma-Dateiaufbau

Empfohlene Seitenstruktur:

1. `00_Cover_Notes`
2. `01_Principles`
3. `02_Tokens`
4. `03_Components_Core`
5. `04_Components_Support`
6. `05_Components_Spatial_Recovery`
7. `06_Screens_Core`
8. `07_Screens_Planning_Chain`
9. `08_Screens_Trust_Privacy_A11y`
10. `09_Prototype_Flow`
11. `10_Archive_Exploration`

---

## 4. Namensschema

Empfohlenes Komponentenschema:

- `ci/anchor/countdown`
- `ci/anchor/instruction`
- `ci/anchor/confirmation`
- `ci/support/options-cluster`
- `ci/support/chain-context`
- `ci/spatial/map-reveal-surface`
- `ci/spatial/map-focus-shell`
- `ci/recovery/recheck-panel`
- `ci/recovery/simple-switch-card`
- `ci/wizard/question-panel`
- `ci/privacy/public-safe-label`

Dabei gilt:
- `ci` = CatchIt
- zweite Ebene = Familienlogik
- dritte Ebene = konkrete Komponente

---

## 5. CatchIt-Komponenten sind Familien, nicht Einzelscreens

Jede neue Komponente muss zuerst als Variante einer bestehenden Familie gedacht werden.

### Kernfamilien
- Anchor Components
- Support Components
- Spatial Components
- Recovery Components
- Wizard Components
- Trust / Accessibility Components

### Harte Regel
Eine neue Screen-Anforderung darf nicht automatisch eine neue Komponente erzeugen.
