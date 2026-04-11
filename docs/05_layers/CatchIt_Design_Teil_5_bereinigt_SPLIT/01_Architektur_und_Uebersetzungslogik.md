# CatchIt – Teil 5A
## Architektur und Übersetzungslogik

## 1. Zweck dieses Pakets

Dieses Paket übersetzt die bisherigen CatchIt-Design- und Figma-Spezifikationen in eine Android-/Compose-nahe Sicht.

Es ist:
- keine komplette Refactoring-Anleitung
- kein Provider-Implementierungsplan
- kein generisches Android-UI-Kit

Es ist eine **Übersetzungsschicht** zwischen:
- Produktkern / SSOT
- Zustandslogik
- Designsystem
- Figma-Komponenten
- bestehender Android-Struktur
- Compose-Implementierung

---

## 2. Harte Arbeitsannahmen

### Aus der Produktwahrheit
CatchIt ist:
- ein Decision-Relief-System
- ein Reassurance-System
- eine Zustandsmaschine
- eine Fallback-Maschine
- ein Produkt für tragfähige Fortbewegung unter realen Lebensbedingungen

Daraus folgt:
- UI ist **zustandsgetrieben**, nicht screengetrieben
- Hauptoberfläche zeigt **verdichtete Produktzustände**, nicht rohe Providerdaten
- Planung, Exekution und Recovery dürfen nicht in einer Flat-UI verschmelzen
- Confidence, Fragilität, Handlung und Fallback sind First-Class-UI-States

### Aus der Android-/Repo-Realität
Die bestehende Struktur stützt:
- modulare Feature-Trennung
- Compose-basierte UI
- Wizard-first Routing
- gemeinsame Modelle für Journeys / Legs / Active Plans / Alerts
- Cathy als nachgelagerten UX-Layer
- Provider-Module als Datenquellen, nicht als UI-Sprache

---

## 3. Zielarchitektur für die UI-Übersetzung

Ich empfehle eine fünfstufige Übersetzung:

### Ebene A — Domain / Travel Truth
Beispiele:
- Journey
- Leg
- Segment
- Stop
- ActivePlan
- ProviderConfidence
- Alerts
- Recheck / Fallback Signale

Diese Ebene bleibt nah an der fachlichen Wahrheit.

### Ebene B — Derived Product State
Hier werden rohe Wahrheiten in CatchIt-lesbare Zustände übersetzt:
- Idle
- Ready
- Adapting
- ActNow
- Failed
- RecheckNeeded
- FallbackReady
- Completed

### Ebene C — Screen State
Hier entstehen konkrete UI-Zustände:
- `HomeState.BlueIdle`
- `HomeState.GreenReady`
- `HomeState.YellowAdapting`
- `HomeState.OrangeActNow`
- `HomeState.RedFailed`
- `MapRevealState`
- `MapFocusState`
- `RecoveryState`
- `WizardStepState`
- `QuickChangeState`

### Ebene D — Component Props
Hier werden Screen States in konkrete Component Models übersetzt:
- Countdown Props
- Instruction Props
- Options Cluster Props
- Map Reveal Props
- Recovery Card Props
- Chain Context Props
- Question Panel Props

### Ebene E — Compose Rendering
Erst hier entstehen:
- Composables
- animation states
- layout decisions
- semantics
- accessibility
- previews

---

## 4. Kernregel

**Compose rendert keine Rohrealität. Compose rendert abgeleitete Produktzustände.**

Das ist die wichtigste technische Übersetzung des gesamten CatchIt-Denkens.
