# CatchIt Compose-/Android-Übersetzung — Teil 1  
## Architektur, Repo-Mapping und Systemgrenzen

## 1. Zweck dieses Pakets
Dieses vierte Folgepaket übersetzt die bisherigen CatchIt-Design- und Figma-Spezifikationen in eine **implementierungsnahe Android-/Compose-Sicht**.  
Es ist **kein Refactoring-Plan des gesamten Repos**, sondern eine **Übersetzungsschicht** zwischen:

- Produktkern / SSOT
- Design-System / Tokens
- Figma-Komponenten
- bestehender Android-Architektur
- möglicher Compose-Implementierung

Ziel ist, dass das CatchIt-Konzept nicht nur schön dokumentiert, sondern **technisch kohärent anschlussfähig** wird.

---

## 2. Arbeitsannahmen auf Basis von SSOT und Repo
Für diese Übersetzung gelten folgende harten Arbeitswahrheiten:

### 2.1 Aus der SSOT
CatchIt ist:
- ein **Decision-Relief-System**
- ein **Reassurance-System**
- eine **Zustandsmaschine**
- eine **Fallback-Maschine**
- ein Produkt für **tragfähige Fortbewegung unter realen Lebensbedingungen**

Daraus folgen für Android/Compose:
- UI ist **zustandsgetrieben**, nicht screengetrieben
- die Hauptoberfläche zeigt **verdichtete Produktzustände**, nicht rohe Providerdaten
- Planung, Exekution und Recovery dürfen **nicht in einer einzigen Flat-UI verschmelzen**
- Reassurance, Confidence, Fragilität und Fallback sind **first-class UI states**
- dieselbe Travel Truth braucht **mehrere Darstellungen mit unterschiedlicher Dichte**

### 2.2 Aus dem Repo
Das aktuelle Repo bestätigt:
- eine **modulare Android-Struktur**
- Compose-basierte UI
- Wizard-first-Routing
- Scene-/Alert-System
- gemeinsame Modelle für Journeys, Legs, Active Plans, Wizard Setup und CatchIt State
- Cathy als **nachgelagerten** UX-Layer
- Provider-Module als reale Scaffolds, aber noch keine vollständig produktreife Live-Transit-Basis

Daraus folgt:
- wir bauen **keine direkte Provider-UI**
- wir binden UI primär an **abgeleitete Screen-State-Modelle**
- Providerlogik bleibt hinter Interactors / Reducern / Mappern
- Cathy darf UI rahmen, aber **nicht Source of Truth** werden

---

## 3. Zielarchitektur für die UI-Übersetzung
Ich empfehle für CatchIt eine **fünfschichtige UI-Übersetzung**:

### Ebene A — Domain / Travel Truth
Beispiel:
- Journey
- Leg
- Segment
- Stop
- ActivePlan
- AlertLevel
- ProviderConfidence
- Watcher/Recheck/Fallback

Diese Ebene bleibt möglichst nah an der fachlichen Wahrheit.

### Ebene B — Derived Product State
Hier werden rohe Wahrheiten in produktlesbare Zustände übersetzt:
- Stable
- Fragile
- RecheckNeeded
- FallbackReady
- ActNow
- Wait
- Observe
- Completed
- SoonRelevant

Das ist die erste echte CatchIt-spezifische Übersetzung.

### Ebene C — Screen State
Diese Ebene erzeugt konkrete UI-Zustände:
- `HomeState.BlueIdle`
- `HomeState.GreenSoon`
- `HomeState.AmberAttention`
- `HomeState.RedCritical`
- `MapRevealState`
- `MapFocusState`
- `RecoveryState`
- `PlanWizardStepState`
- `QuickChangeState`

### Ebene D — Component Props
Hier werden Screen States in konkrete Component Models übersetzt:
- Countdown Bubble Props
- Route Option Props
- Map Sheet Props
- Stability Chip Props
- Chain Header Props
- Quick Change Card Props

### Ebene E — Compose Rendering
Erst hier entstehen:
- Composables
- animation states
- layout decisions
- gestures
- accessibility semantics
- previews

Das ist wichtig:  
**Domain != UI. Daten != UX. Screen != Wahrheit.**

---

## 4. Empfohlenes Mapping auf die Repo-Struktur

## 4.1 Bestehende Module als Grundlage
Aus dem Repo ergibt sich ein sehr brauchbarer Schnitt:

### `:app`
Verantwortung:
- App wiring
- Navigation graph
- Activity/entry
- global settings
- top-level ViewModels
- startup routing
- wizard-first default routing

### `:core:model`
Verantwortung:
- Domain models
- shared enums / sealed hierarchies
- product state models
- scene models
- alert models
- core screen-state contracts, sofern wirklich generisch

### `:core:ui`
Verantwortung:
- Design tokens in Android/Compose-Form
- primitives
- reusable components
- theming
- spacing/shape/typography/color wrappers
- semantic accessibility helpers

### `:feature:home`
Verantwortung:
- Main state screen
- Map reveal/focus
- timeline condensation
- home scene rendering
- urgency-/scene-based screen composition

### `:feature:wizard`
Verantwortung:
- chain-first planning wizard
- daily intent capture
- next-stop loops
- return-leg configuration
- confirmation / chain summary

### `:feature:cathy`
Verantwortung:
- optional assistive overlay
- mood/state visuals
- regulated reassurance layer
- not owner of travel truth
- no direct provider coupling

### `:feature:naveo`
Verantwortung:
- debug / provider matrix / desk-like test surface
- not product-facing UX source

### `:data:*`
Verantwortung:
- provider adapters
- DTO mapping
- source provenance
- request/response scaffolds
- future reconciliation

---

## 5. Konkretes Zustandsmodell für Compose
Die produktive Compose-Schicht sollte **nicht direkt auf Journey/Legs rendern**, sondern auf **derived UI state**.

## 5.1 Beispiel: Top-Level Home State
```kotlin
sealed interface CatchItHomeUiState {
    data object Loading : CatchItHomeUiState
    data class NoActiveChain(
        val nextSuggestion: String?,
        val primaryAction: String
    ) : CatchItHomeUiState

    data class Active(
        val mode: HomeMode,
        val countdown: CountdownUiModel,
        val chainContext: ChainContextUiModel,
        val primaryOption: RouteOptionUiModel,
        val secondaryOptions: List<RouteOptionUiModel>,
        val reassurance: ReassuranceUiModel?,
        val mapPreview: MapPreviewUiModel?,
        val quickActions: List<QuickActionUiModel>
    ) : CatchItHomeUiState

    data class Recovery(
        val severity: RecoverySeverity,
        val summary: String,
        val primaryAction: RecoveryActionUiModel,
        val secondaryActions: List<RecoveryActionUiModel>,
        val chainImpact: ChainImpactUiModel
    ) : CatchItHomeUiState
}
```

## 5.2 HomeMode
```kotlin
enum class HomeMode {
    BLUE_IDLE,
    GREEN_SOON,
    AMBER_ATTENTION,
    RED_CRITICAL,
    MAP_REVEAL,
    MAP_FOCUS
}
```

Das ist näher an der SSOT als ein reiner Navigationsscreen.

---

## 6. Warum diese Übersetzung sinnvoll ist
So entsteht eine Architektur, in der:

- Providerdaten austauschbar bleiben
- Designzustände nicht an API-Formate gekoppelt sind
- Mockups direkt auf Screen-State-Mapping verweisen können
- A/B-Tests eher Zustands- oder Component-Ebene betreffen
- Cathy ein Layer bleibt und keine Businesslogik verschluckt
- Recovery als **eigenständige Produkterfahrung** modelliert wird

---

## 7. Welche Android-Pakete ich empfehlen würde

### in `:core:model`
- `state/`
- `scene/`
- `alert/`
- `chain/`
- `confidence/`
- `fallback/`

### in `:core:ui`
- `theme/`
- `tokens/`
- `components/`
- `motion/`
- `semantics/`
- `layout/`

### in `:feature:home`
- `home/`
- `home/state/`
- `home/components/`
- `home/mapper/`
- `home/gesture/`
- `home/preview/`

### in `:feature:wizard`
- `wizard/steps/`
- `wizard/state/`
- `wizard/mapper/`
- `wizard/components/`

### in `:feature:cathy`
- `overlay/`
- `stateframe/`
- `assets/`
- `semantics/`

---

## 8. Die zentrale Regel
**Compose rendert keine Rohrealität. Compose rendert abgeleitete Produktzustände.**

Das ist die wichtigste technische Übersetzung des gesamten CatchIt-Denkens.

---

## 9. Was ausdrücklich vermieden werden sollte
Nicht sinnvoll wären:

- eine Home-UI, die direkt auf Providerresponse-Feldern basiert
- ein Debug-Datenmodell als Grundlage der Endnutzeroberfläche
- Cathy als ViewModel-Besitzerin der Travel Truth
- eine einzige generische „JourneyScreen“-Komponente für alle Modi
- technische States wie loading/delayed/error als eigentliche Produktsprache
- zu frühe Koppelung an Karten-SDK-spezifische Details

---

## 10. Ergebnis dieses Teils
Teil 1 legt die Übersetzungslogik fest:

- SSOT → Product State
- Product State → Screen State
- Screen State → Component Props
- Component Props → Compose UI

Im nächsten Teil folgt die komponentenweise Compose-Übersetzung.
