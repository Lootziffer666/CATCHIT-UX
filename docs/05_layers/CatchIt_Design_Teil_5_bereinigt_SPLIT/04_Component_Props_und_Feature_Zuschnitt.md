# CatchIt – Teil 5D
## Component Props und Feature-Zuschnitt

## 1. Empfohlene Modulverteilung

### `:app`
- App wiring
- Navigation
- Entry
- globale Settings
- Startup Routing

### `:core:model`
- Domain models
- shared enums / sealed hierarchies
- chain / state / alert / confidence contracts

### `:core:ui`
- Theme
- Tokens
- Primitives
- Reusable Components
- Motion / Semantics / Layout helpers

### `:feature:home`
- Main States
- Map Reveal / Focus
- Home mapper
- Go-state Komposition

### `:feature:wizard`
- Chain-first planning
- Tageslogik
- Summary
- Quick Change entry points

### `:feature:cathy`
- optional assistive overlay
- state framing
- not source of truth

### `:data:*`
- provider adapters
- DTO mapping
- provenance
- reconciliation

---

## 2. Countdown Composable

```kotlin
@Composable
fun CountdownAnchor(
    model: AnchorUiModel.Countdown,
    modifier: Modifier = Modifier
)
```

Regel:
- Countdown bleibt Familienkomponente
- in Orange nur trace-persistent
- keine Badge-Mutation

---

## 3. Instruction Composable

```kotlin
@Composable
fun InstructionAnchor(
    model: AnchorUiModel.Instruction,
    modifier: Modifier = Modifier
)
```

Regel:
- kein CTA-Hero
- keine Marketing-Headline
- kurze aktive Sprache

---

## 4. Options Cluster

```kotlin
@Composable
fun OptionsCluster(
    model: OptionsClusterUiModel,
    modifier: Modifier = Modifier
)
```

Regel:
- drei Rollenoptionen
- nicht wie Search Results
- im Orange-State stark reduziert oder nur Hintergrundebene

---

## 5. Spatial Assist

```kotlin
@Composable
fun MapRevealSurface(
    model: SpatialAssistUiModel,
    modifier: Modifier = Modifier
)

@Composable
fun MapFocusSurface(
    model: SpatialAssistUiModel,
    modifier: Modifier = Modifier
)
```

Regel:
- Reveal und Focus sind zwei Dichten derselben räumlichen Hilfe
- keine eigene Karten-App im Inneren

---

## 6. Recovery Components

```kotlin
@Composable
fun SimpleSwitchCard(...)

@Composable
fun RecheckPanel(...)

@Composable
fun ChainAdjustedSummary(...)
```

Regel:
- Recovery erbt Trust Language
- nie generische Error-UI

---

## 7. Wizard Components

```kotlin
@Composable
fun QuestionPanel(...)

@Composable
fun AnswerChips(...)

@Composable
fun ChainSummaryCard(...)
```

Regel:
- Wizard erbt Alltagssprache
- keine Form-Builder-Optik
