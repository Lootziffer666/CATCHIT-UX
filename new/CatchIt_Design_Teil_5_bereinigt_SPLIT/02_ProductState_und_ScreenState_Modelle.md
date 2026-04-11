# CatchIt – Teil 5B
## Product State und Screen State Modelle

## 1. Warum abgeleitete Zustände nötig sind

Journeys, Legs und Providerdaten reichen fachlich, aber nicht produktlogisch.

CatchIt braucht UI-seitig zusätzlich:
- Zustandsklarheit
- Reassurance
- Handlungsschwellen
- Fallback-Rollen
- Kettenbezug

Deshalb darf die UI nicht direkt auf Providerresponses oder rohe Journey-Modelle rendern.

---

## 2. Empfohlenes Top-Level Home State Modell

```kotlin
sealed interface CatchItHomeUiState {
    data object Loading : CatchItHomeUiState

    data class NoActiveChain(
        val summary: String?,
        val primaryAction: String
    ) : CatchItHomeUiState

    data class Active(
        val mode: HomeMode,
        val anchor: AnchorUiModel,
        val chainContext: ChainContextUiModel?,
        val options: OptionsClusterUiModel?,
        val reassurance: ReassuranceUiModel?,
        val spatialAssist: SpatialAssistUiModel?,
        val quickActions: List<QuickActionUiModel>
    ) : CatchItHomeUiState

    data class Recovery(
        val type: RecoveryType,
        val anchor: AnchorUiModel,
        val chainImpact: ChainImpactUiModel?,
        val actions: List<RecoveryActionUiModel>
    ) : CatchItHomeUiState
}
```

---

## 3. HomeMode

```kotlin
enum class HomeMode {
    BLUE_IDLE,
    GREEN_READY,
    YELLOW_ADAPTING,
    ORANGE_ACT_NOW,
    RED_FAILED,
    MAP_REVEAL,
    MAP_FOCUS
}
```

Wichtig:
Die alte Logik
- stable
- fragile
- critical

ist hier nicht mehr gültig.

---

## 4. AnchorUiModel

```kotlin
sealed interface AnchorUiModel {
    data class Countdown(
        val label: String,
        val value: String,
        val persistence: PersistenceLevel
    ) : AnchorUiModel

    data class Instruction(
        val text: String,
        val secondary: String? = null
    ) : AnchorUiModel

    data class Confirmation(
        val text: String,
        val secondary: String? = null
    ) : AnchorUiModel

    data class Question(
        val text: String
    ) : AnchorUiModel

    data class Failure(
        val text: String,
        val secondary: String? = null
    ) : AnchorUiModel
}
```

---

## 5. OptionsClusterUiModel

```kotlin
data class OptionsClusterUiModel(
    val primary: RouteOptionUiModel,
    val reserve: RouteOptionUiModel?,
    val fallback: RouteOptionUiModel?
)
```

Die UI darf diese Cluster nicht wie Suchresultate behandeln.

---

## 6. WizardStepState

```kotlin
sealed interface WizardStepUiState {
    data class Entry(
        val question: String,
        val answers: List<AnswerUiModel>
    ) : WizardStepUiState

    data class ChainQuestion(
        val question: String,
        val answers: List<AnswerUiModel>
    ) : WizardStepUiState

    data class DayCondition(
        val question: String,
        val answers: List<AnswerUiModel>
    ) : WizardStepUiState

    data class Summary(
        val chain: ChainSummaryUiModel
    ) : WizardStepUiState
}
```

---

## 7. RecoveryState

```kotlin
sealed interface RecoveryUiState {
    data class SimpleSwitch(
        val confirmation: AnchorUiModel.Confirmation,
        val updatedOption: RouteOptionUiModel,
        val chainImpact: ChainImpactUiModel?
    ) : RecoveryUiState

    data class RecheckNeeded(
        val instruction: AnchorUiModel.Instruction,
        val reason: String,
        val options: List<RecoveryActionUiModel>
    ) : RecoveryUiState

    data class ChainAdjusted(
        val confirmation: AnchorUiModel.Confirmation,
        val updatedChain: ChainSummaryUiModel
    ) : RecoveryUiState
}
```
