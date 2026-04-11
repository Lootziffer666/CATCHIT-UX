# CatchIt Codegerüst-Paket Teil 1 — Architektur, Prinzipien, Schichten

## Zweck dieses Pakets

Dieses Paket übersetzt die bisherigen CatchIt-Design- und Figma-Spezifikationen in ein **implementierungsnahes Kotlin-/Compose-Codegerüst als Markdown**. Es ist absichtlich **state-first** aufgebaut und dockt an drei Wahrheiten an:

1. die bestehende W3C-/Accessibility-orientierte Designbasis,
2. die SSOT mit Decision-Relief, Reassurance, Zustandslogik, Kettenfokus, Plan/Go/Recovery,
3. die reale Repo-Struktur mit modularem Android-/Compose-Setup, Wizard-First-Routing, Scene-/Alert-System, Provider-Modulen und Cathy als nachgelagertem UX-Layer.

Dieses Dokument liefert **keinen finalen Produktionscode**, sondern ein tragfähiges **Architektur- und Modellgerüst**, aus dem echte Kotlin-Dateien abgeleitet werden können.

---

## Leitformel

**CatchIt ist nicht provider-first, sondern state-first.**

Das bedeutet:

- Domaindaten werden **nicht direkt gerendert**
- Providerantworten werden in **Travel Truth** übersetzt
- Travel Truth wird in **Product State** verdichtet
- Product State wird in **Screen State** übersetzt
- Screen State speist **Composables mit klaren Props**

Die zentrale technische Formel lautet deshalb:

```text
Provider/Data -> Travel Truth -> Product State -> Screen State -> Component Props -> Compose UI
```

---

## Architekturebenen

### 1. Domain / Travel Truth
Enthält:
- Journeys
- Legs
- Stops
- Providers
- Departures
- Alerts
- Confidence / Unsicherheit
- Fallback-Kandidaten
- Recheck-Bedarf

Diese Ebene ist **nicht** die UX.

### 2. Product State
Enthält menschenlesbare Zustände wie:
- stable
- fragile
- recheckNeeded
- fallbackReady
- actNow
- watch
- wait
- soonRelevant
- completed

Diese Ebene beantwortet:
- Was passiert als Nächstes?
- Wann muss ich handeln?
- Wie sicher ist der Plan?
- Was ist die einfachste Alternative?

### 3. Screen State
Hier wird die Produktwahrheit je nach Modus übersetzt in:
- Home / Main
- Map Reveal
- Map Focus
- Go
- Recovery
- Wizard
- Quick Change
- Privacy / Label Edit
- Settings / Accessibility

### 4. Component Props
Jede Komponente erhält nur das, was sie wirklich braucht:
- CountdownBubbleUiModel
- RouteOptionUiModel
- ChainContextUiModel
- ReassuranceBannerUiModel
- MapSheetUiModel
- RecoveryCardUiModel
- CathyUiModel

### 5. Compose UI
UI bleibt schlank:
- rendert Zustand
- triggert Events
- besitzt keine Business Truth

---

## Repo-Anbindung

Das reale Repository beschreibt bereits eine modulare Android-Codebasis mit 13 Gradle-Modulen, Compose-UI, Provider-Modulen für Transitous, AVV, DB Vendo/Movas und DB HAFAS Compat, geteilten Modellen für Journeys, Legs, Alert Levels, Active Plans, Wizard Setup und CatchIt State sowie ein Scene-/Alert-System. Cathy ist vorhanden, soll aber explizit nicht die Business Truth besitzen. Daraus folgt für das Codegerüst:

- `:core:model` bleibt Heimat der Travel-Truth- und Produktzustände
- `:core:ui` bleibt Heimat von Tokens, UI-Primitives und Mappings
- `:feature:home` trägt Main / Map Reveal / Map Focus / Go / Recovery
- `:feature:wizard` trägt Ketteneingabe und Vorhabenlogik
- `:feature:cathy` konsumiert Zustände, erzeugt aber keine Travel Truth
- Provider-Module bleiben Datenlieferanten, nicht UX-Formgeber

---

## Empfohlenes Schichtenmodell im Code

```kotlin
// Domain / Truth
interface JourneyProvider
data class Journey(...)
data class Leg(...)
data class Stop(...)
data class ProviderAlert(...)

// Product State
sealed interface PlanRobustness
sealed interface CatchItMode
sealed interface ReassuranceState

// Screen State
data class HomeScreenState(...)
data class WizardScreenState(...)
data class RecoveryScreenState(...)

// Component State / Props
data class CountdownBubbleUiModel(...)
data class RouteOptionUiModel(...)

// UI
@Composable fun HomeScreen(...)
@Composable fun CountdownBubble(...)
```

---

## Empfohlene Paketstruktur

```text
catchit-android/
  core/
    model/
      src/main/java/.../domain/
      src/main/java/.../product/
      src/main/java/.../state/
    ui/
      src/main/java/.../tokens/
      src/main/java/.../components/
      src/main/java/.../accessibility/
      src/main/java/.../mappers/
  feature/
    home/
      .../state/
      .../reducer/
      .../ui/
      .../components/
      .../mapper/
    wizard/
      .../state/
      .../reducer/
      .../ui/
    cathy/
      .../state/
      .../mapper/
      .../ui/
```

---

## Zentrale Designentscheidung: State Host statt Datenscreen

Home sollte als **State Host** konzipiert werden, nicht als klassischer Screen, der rohe Daten anzeigt.

Home hostet:
- Main State
- Map Reveal State
- Map Focus State
- Go State
- Recovery Entry
- Quick Change Entry

Damit bleibt der Produktkern konsistent:
**derselbe Travel-Truth-Kern, mehrere UX-Verdichtungen.**

---

## Sealed Classes für Moduslogik

```kotlin
sealed interface CatchItMode {
    data object Plan : CatchItMode
    data object Go : CatchItMode
    data object Recovery : CatchItMode
}
```

```kotlin
sealed interface HomePresentationLayer {
    data object Main : HomePresentationLayer
    data object MapReveal : HomePresentationLayer
    data object MapFocus : HomePresentationLayer
    data object GoExecution : HomePresentationLayer
    data object RecoveryPrompt : HomePresentationLayer
}
```

---

## Zustandslogik statt Loading-Logik

Nicht nur technische States modellieren.

Falsch:
```kotlin
data class UiState(
    val isLoading: Boolean,
    val hasError: Boolean
)
```

Besser:
```kotlin
sealed interface HumanReadableState {
    data object Stable : HumanReadableState
    data object SoonRelevant : HumanReadableState
    data object ActNow : HumanReadableState
    data object Fragile : HumanReadableState
    data object RecheckNeeded : HumanReadableState
    data object FallbackReady : HumanReadableState
    data object Completed : HumanReadableState
}
```

---

## Ketten als First-Class-Objekt

CatchIt darf nicht nur Trips modellieren.

Empfehlung:

```kotlin
data class MobilityChain(
    val id: String,
    val segments: List<ChainSegment>,
    val overallRobustness: PlanRobustness,
    val nextAction: NextAction,
    val fallbackSummary: FallbackSummary?,
    val semanticLabels: SemanticLabelBundle
)
```

```kotlin
data class ChainSegment(
    val id: String,
    val purpose: SegmentPurpose,
    val primaryJourney: Journey?,
    val alternatives: List<Journey>,
    val currentStatus: SegmentStatus,
    val nextSegmentHint: SegmentHint?
)
```

---

## SegmentPurpose: neutral plus optional semantisch

Wegen Privacy und Vertrauen sollte das Modell zwei Ebenen trennen:

```kotlin
data class SemanticLabelBundle(
    val publicLabel: String,
    val privateLabel: String?,
    val systemLabel: String,
    val labelConfidence: Float?,
    val source: LabelSource
)

sealed interface LabelSource {
    data object SystemDerived : LabelSource
    data object CalendarDerived : LabelSource
    data object UserNamed : LabelSource
}
```

So kann die UI im öffentlichen Raum neutral bleiben.

---

## Mapper-Prinzip

Die wichtigste Trennung ist:

```text
Domain Mapper != UI Mapper
```

### Domain Mapper
- normalisiert Providerantworten
- gleicht ETA/Delays an
- erzeugt Travel Truth

### Product Mapper
- leitet Confidence, Robustness, Recheck, Fallback ab
- priorisiert beste/ruhigste/Fallback-Option

### UI Mapper
- verdichtet in konkrete Screen States
- erzeugt textnahe, menschenlesbare Modelle

---

## Reduktionslogik

Empfehlung: reducer-artiges Modell statt verstreuter Screenlogik.

```kotlin
interface HomeReducer {
    fun reduce(
        truth: MobilityTruth,
        previous: HomeScreenState?,
        event: HomeEvent?
    ): HomeScreenState
}
```

Warum:
- stabilere Testbarkeit
- Zustandsübergänge sind explizit
- ND-/Trust-relevante Übergänge werden nachvollziehbar
- Recovery und Reassurance lassen sich sauber modellieren

---

## Beispiel für Events

```kotlin
sealed interface HomeEvent {
    data object OnOpenMapReveal : HomeEvent
    data object OnFocusMap : HomeEvent
    data object OnCloseMap : HomeEvent
    data object OnTapBestOption : HomeEvent
    data object OnOpenRecovery : HomeEvent
    data object OnQuickDelayPlusTen : HomeEvent
    data class OnSelectAlternative(val optionId: String) : HomeEvent
}
```

---

## Architekturregel für Cathy

Cathy bleibt eine **nachgelagerte humane Übersetzungsschicht**.

Darum:

- Cathy liest `HumanReadableState`
- Cathy liest `Confidence`
- Cathy liest `Urgency`
- Cathy darf Stimmung, Präsenz, Nähe und Form modulieren
- Cathy darf nicht Journey Truth oder Hauptlogik überschreiben

```kotlin
data class CathyUiModel(
    val visibility: CathyVisibility,
    val posture: CathyPosture,
    val messageMode: CathyMessageMode,
    val moodColorTokenRef: String?,
    val shouldSpeak: Boolean
)
```

---

## Ergebnis dieses Teils

Teil 1 liefert das Grundgerüst:

- state-first
- Ketten als First-Class-Objekt
- Produktzustände statt Providerdaten
- Screen States statt Datenscreens
- Cathy als UX-Layer, nicht Truth-Layer
- Mapper und Reducer als zentrale Übersetzungsmaschinen

Im nächsten Teil folgen die eigentlichen Kotlin-Datenmodelle und Codegerüste.
