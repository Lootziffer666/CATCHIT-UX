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
# CatchIt Compose-/Android-Übersetzung — Teil 2  
## Komponenten, Props und Compose-Bausteine

## 1. Ziel dieses Teils
Dieser Teil beschreibt, wie die Figma-Komponenten und Tokens in konkrete Compose-Bausteine übersetzt werden können.

Der Fokus liegt auf:
- Component APIs
- State Handling
- Variant Mapping
- Accessibility
- Vorschlag für stabile Composable-Schnitte

---

## 2. Foundations in `:core:ui`

## 2.1 Theme-Layer
Empfehlung:
```kotlin
@Composable
fun CatchItTheme(
    mode: CatchItVisualMode,
    highContrast: Boolean = false,
    largeText: Boolean = false,
    content: @Composable () -> Unit
)
```

### `CatchItVisualMode`
```kotlin
enum class CatchItVisualMode {
    BLUE_IDLE,
    GREEN_SOON,
    AMBER_ATTENTION,
    RED_CRITICAL,
    NEUTRAL,
    MAP_REVEAL,
    MAP_FOCUS
}
```

Der Theme-Layer darf nicht bloß Light/Dark lösen, sondern muss **Produktzustände visuell tragen**.

---

## 2.2 Token-Objekte
Empfehlung:
- `CatchItColorTokens`
- `CatchItTypographyTokens`
- `CatchItSpacingTokens`
- `CatchItShapeTokens`
- `CatchItElevationTokens`
- `CatchItMotionTokens`

Diese sollten nicht nur Material-Defaults umbenennen, sondern produktlogische Begriffe tragen:
- `surfaceUrgent`
- `surfaceCalm`
- `countdownHero`
- `routeOptionRecommended`
- `focusRingStrong`
- `mapPreviewBackdrop`

---

## 3. Countdown Bubble

## 3.1 Rolle
Die Countdown Bubble ist das stärkste Hero-Element des Produkts.  
Sie ist nicht bloß eine Zahl, sondern:
- Handlungsschwelle
- Vertrauenssignal
- Zeitverdichtung
- permanenter Orientierungsanker

## 3.2 API-Vorschlag
```kotlin
data class CountdownUiModel(
    val label: String,
    val value: String,
    val semanticValue: String,
    val urgency: CountdownUrgency,
    val secondaryLabel: String?,
    val showPulse: Boolean,
    val persistentInMapMode: Boolean = true
)

enum class CountdownUrgency {
    CALM,
    SOON,
    ACT_NOW,
    CRITICAL
}

@Composable
fun CountdownBubble(
    model: CountdownUiModel,
    modifier: Modifier = Modifier
)
```

## 3.3 Regeln
- im Main State groß
- im Map Reveal kleiner, aber zentral verankert
- im Map Focus kompakter, aber nie ausgeblendet
- Text darf nicht springen, wenn sich Werte ändern
- Zahl sollte tabellarisch/monospaced-freundlich oder numerisch stabil gesetzt sein

---

## 4. Route Option Row / Card

## 4.1 Rolle
Die unteren Optionen zeigen **wenige tragfähige Alternativen mit klaren Rollen**.

## 4.2 API-Vorschlag
```kotlin
data class RouteOptionUiModel(
    val id: String,
    val vehicleLabel: String,
    val lineLabel: String,
    val statusLabel: String?,
    val role: RouteOptionRole,
    val timingLabel: String?,
    val confidenceLabel: String?,
    val iconType: RouteIconType,
    val isSelected: Boolean = false
)

enum class RouteOptionRole {
    PRIMARY,
    RESERVE,
    FALLBACK
}
```

```kotlin
@Composable
fun RouteOptionRow(
    model: RouteOptionUiModel,
    onClick: (() -> Unit)? = null,
    modifier: Modifier = Modifier
)
```

## 4.3 Regeln
- nicht wie klassische Ergebnisliste inszenieren
- maximal 3 gleichzeitig prominent
- Primäroption subtil markiert
- Delay nie ohne Zielbezug
- Statusworte sind besser als rohe Betriebsdaten allein

---

## 5. Chain Context Header

## 5.1 Rolle
Weil CatchIt für Ketten gebaut ist, braucht jeder Hauptscreen einen dezenten Kontextanker:
- wo bin ich in der Kette
- was ist das nächste Ziel
- was kommt danach

## 5.2 API-Vorschlag
```kotlin
data class ChainContextUiModel(
    val currentStepLabel: String,
    val currentStepIndex: Int?,
    val totalSteps: Int?,
    val nextStepLabel: String?,
    val afterNextLabel: String?,
    val stabilityLabel: String?
)

@Composable
fun ChainContextHeader(
    model: ChainContextUiModel,
    modifier: Modifier = Modifier
)
```

## 5.3 Regeln
- klein, ruhig, nicht dashboardig
- keine Volltimeline im Main State
- im Go Mode stärker sequenziell
- private Begriffe nur nach bewusster Freigabe

---

## 6. Map Preview Card / Sheet

## 6.1 Rolle
Die Karte ist keine Daueroberfläche, sondern eine **räumliche zweite Ebene**.

## 6.2 API-Vorschlag
```kotlin
data class MapPreviewUiModel(
    val title: String,
    val distanceLabel: String?,
    val walkDurationLabel: String?,
    val targetStopLabel: String?,
    val selectedLineLabel: String?,
    val canFocus: Boolean,
    val routePolyline: List<MapPointUiModel> = emptyList()
)

@Composable
fun MapPreviewSheet(
    model: MapPreviewUiModel,
    revealProgress: Float,
    onMapTap: () -> Unit,
    modifier: Modifier = Modifier
)
```

## 6.3 Regeln
- Swipe Reveal verdichtet Home-Inhalte nach oben
- Tap fokussiert Karte
- Bubble bleibt präsent
- Karteninfos unter der Karte nur handlungsnah

---

## 7. Reassurance Banner / Chip
```kotlin
data class ReassuranceUiModel(
    val message: String,
    val tone: ReassuranceTone,
    val canExpand: Boolean = false
)

enum class ReassuranceTone {
    CALM,
    OBSERVE,
    RECHECK,
    FALLBACK_READY,
    ACT
}
```

```kotlin
@Composable
fun ReassuranceBanner(
    model: ReassuranceUiModel,
    modifier: Modifier = Modifier
)
```

Regel:
- nicht ständig sichtbar
- nur wenn Produktzustand davon profitiert
- keine dekorative Beruhigung

---

## 8. Quick Change Card
Weil CatchIt spontane Änderungen ohne Neustart ermöglichen soll, braucht es ein klar definiertes Component Pattern.

```kotlin
data class QuickChangeUiModel(
    val title: String,
    val description: String?,
    val actionLabel: String,
    val impactLabel: String?,
    val severity: QuickChangeSeverity
)

enum class QuickChangeSeverity {
    LOW,
    MEDIUM,
    HIGH
}

@Composable
fun QuickChangeCard(
    model: QuickChangeUiModel,
    onAction: () -> Unit,
    modifier: Modifier = Modifier
)
```

Beispiele:
- „10 Minuten später weiter“
- „Snack-Stopp einfügen“
- „Nächsten Bus nehmen“
- „Rückweg anpassen“

---

## 9. Recovery Card Stack
Recovery ist kein Toast. Recovery ist ein Produktmodus.

```kotlin
data class RecoveryActionUiModel(
    val label: String,
    val explanation: String?,
    val priority: RecoveryPriority
)

enum class RecoveryPriority {
    PRIMARY,
    SECONDARY
}
```

```kotlin
@Composable
fun RecoveryActionCard(
    model: RecoveryActionUiModel,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
)
```

---

## 10. Cathy Overlay
Cathy sollte in Compose als **optionaler visueller Rahmungs-Layer** umgesetzt werden, nicht als primary layout owner.

```kotlin
data class CathyOverlayUiModel(
    val mood: CathyMood,
    val prominence: CathyProminence,
    val message: String?,
    val canSpeak: Boolean
)
```

Regeln:
- peripher bei Stabilität
- näher bei Unsicherheit
- groß nur in Transition
- nie parallel dominant zu kritischem Handlungscontent

---

## 11. Accessibility in den Komponenten
Jede Kernkomponente braucht:
- `contentDescription`
- klare Fokus-Reihenfolge
- große Target Flächen
- Status nie nur über Farbe
- Motion-Reduktion
- Textskalierungsstabilität

Empfehlung:
- eigene `Modifier.catchItSemantics(...)`
- zentrale helper für urgency / reassurance / selected route / map reveal state

---

## 12. Preview-Strategie
In jedem Feature-Modul sollten Compose Previews folgende Zustände zeigen:
- Blue Idle
- Green Soon
- Amber Attention
- Red Critical
- Map Reveal
- Map Focus
- Recovery Primary
- No Active Chain

Das spart später enorme Abstimmungszeit.

---

## 13. Ergebnis dieses Teils
Die wichtigsten Produktbausteine sind jetzt in stabile Compose-Komponenten übersetzt:
- Countdown
- Route Optionen
- Chain Kontext
- Map Sheet
- Reassurance
- Quick Change
- Recovery
- Cathy Overlay

Im nächsten Teil folgt die Screen- und Navigationsebene.
# CatchIt Compose-/Android-Übersetzung — Teil 3  
## Screens, State Reducer und Navigation

## 1. Grundprinzip
CatchIt sollte nicht als Sammlung loser Screens gedacht werden, sondern als **Zustandsmaschine mit wenigen Hauptmodi**:

- Plan Mode
- Go Mode
- Recovery Mode

Navigation ist wichtig, aber sekundär.  
Primär ist, **welcher mentale Modus** aktiv ist.

---

## 2. Top-Level Navigation
Empfehlung im `:app`-Modul:

### Routen
- `startup`
- `wizard`
- `home`
- `recovery`
- `settings`
- `places`
- `debug` (optional intern)

Keine klassische 5-Tab-Mobilitätsnavigation als Primärmuster.

---

## 3. Wizard Flow
Der Wizard lebt in `:feature:wizard`.

### Ziel
Nicht Routeingabe, sondern **Absichtserfassung**.

### Schritte
1. Was steht an?
2. Wann musst du dort sein?
3. Musst du danach noch irgendwo hin?
4. Rückweg / weiterer Stopp
5. Bewegungsstil / ruhige Präferenz
6. Chain Summary

### State-Modell
```kotlin
data class WizardUiState(
    val step: WizardStep,
    val progress: Float,
    val chainDraft: ChainDraftUiModel,
    val canContinue: Boolean,
    val canGoBack: Boolean,
    val helperText: String?
)
```

### Reducer-Idee
- Input Events
- derive next step
- update ChainDraft
- persist relevant preferences via DataStore
- finalize into ActivePlan

---

## 4. Home Screen als State Host
`HomeScreen()` sollte nur Host sein.  
Die visuelle Darstellung hängt von `CatchItHomeUiState` ab.

```kotlin
@Composable
fun HomeScreen(
    state: CatchItHomeUiState,
    onEvent: (HomeEvent) -> Unit
)
```

### `HomeEvent`
Beispiele:
- `OnPrimaryOptionClicked`
- `OnSecondaryOptionClicked`
- `OnSwipeRevealChanged`
- `OnMapTapped`
- `OnRecoveryActionClicked`
- `OnQuickChangeSelected`
- `OnRecheckRequested`

---

## 5. Main / Map Reveal / Map Focus als ein Screen, nicht drei Nav-Ziele
Diese drei Zustände sollten idealerweise **ein zusammenhängender Screen mit internem UI-Mode** sein.

### Warum
- mentale Kontinuität
- weniger Navigationsbruch
- bessere Motion
- klarere Persistenz des Countdown-Ankers

### Zustandsskizze
```kotlin
data class HomePresentationState(
    val mode: HomeMode,
    val revealFraction: Float,
    val mapFocused: Boolean
)
```

---

## 6. Recovery als eigener Screen oder Full-State Layer
Recovery kann je nach Schweregrad zwei Formen annehmen:

### Leicht
- In-place Layer auf Home
- Banner / Card Stack
- schnelle Rettung

### Schwer
- eigener Recovery Screen
- dominante Handlungslogik
- erklärt Auswirkungen auf Rest der Kette

Das Mapping sollte von Severity abhängen.

---

## 7. Chain Awareness auf Screen-Ebene
Jeder relevante Screen braucht Kettenbezug:

### Home
- aktueller Abschnitt
- nächstes Ziel
- optional danach

### Go Mode
- sequentielle Vertikallogik
- vergangener Schritt beruhigt
- nächster Schritt führt

### Recovery
- was kippt?
- was bleibt stabil?
- wie wird Restkette angepasst?

### Wizard
- nicht einzelne Fahrt, sondern Kettenaufbau

---

## 8. Quick Changes als Bottom Sheet / Full Sheet
Ich empfehle Quick Changes als klar definierte Ebene:
- kein Settings-Dialog
- keine versteckte Edit-Funktion
- direkter Eingriff in den aktiven Plan

Beispiele:
- „10 Minuten später“
- „Bus später nehmen“
- „Snack-Stopp hinzufügen“
- „nur Rückweg anpassen“

Diese Änderungen sollten in einen Plan-Reducer laufen, der Auswirkungen auf die Restkette sichtbar ableitet.

---

## 9. State Reducer Architektur
Compose wird übersichtlicher, wenn der relevante Ableitungsweg explizit modelliert wird:

### Schritt 1
Provider-/Journey-/Plan-Daten in Domainform laden

### Schritt 2
Domaindaten in ProductState mappen

### Schritt 3
ProductState in ScreenState mappen

### Schritt 4
ScreenState in Component Props zerlegen

### Beispiel
```kotlin
fun reduceHomeState(
    plan: ActivePlan,
    scene: SceneState,
    alerts: List<AlertState>,
    preferences: UserPreferences
): CatchItHomeUiState
```

Wichtig:
- keine spontane Ableitung direkt in Composables
- Reducer testbar halten
- Reassurance/Fragility/Fallback explizit mappen

---

## 10. Places und Semantik
Da semantische Bezeichnungen ein sensibles Feld sind, empfehle ich eine getrennte Logik:

### Systemlabels
- neutral
- öffentlich robust
- standardmäßig sichtbar

### Nutzerlabels
- bewusst gesetzt
- optional
- ggf. privat

### UI-Konsequenz
Home und Notifications zeigen standardmäßig eher:
- „Arzttermin“
- „Besorgung“
- „Nächstes Ziel“

nicht:
- hochprivate Originalnotizen

---

## 11. Settings / Accessibility
Ein eigener Settings- und Accessibility-Bereich sollte enthalten:
- große Schrift
- hoher Kontrast
- reduzierte Bewegung
- Voice-Verhalten
- öffentliche/neutrale Labels
- Cathy Präsenz / Intensität

Das ist keine Nacharbeit, sondern Teil der Vertrauensarchitektur.

---

## 12. Beispielhafte Navigationslogik
```kotlin
when {
    !hasOnboarding -> navToWizard()
    state is CatchItHomeUiState.Recovery && state.severity.isHigh -> navToRecovery()
    else -> navToHome()
}
```

Map Reveal und Map Focus bleiben innerhalb von Home.

---

## 13. Ergebnis dieses Teils
Jetzt ist klar:
- welche Routen es wirklich braucht
- welche Zustände innerhalb eines Screens bleiben
- wie Reducer und UI gekoppelt werden
- wo Recovery, Quick Change und Chain Awareness leben
# CatchIt Compose-/Android-Übersetzung — Teil 4  
## Tokens, Theming, Motion und Accessibility-Bindings

## 1. Ziel dieses Teils
Die Design-Tokens sollen nicht als Figma-only-Definition enden, sondern in Android/Compose übersetzbar sein.

---

## 2. Farben als Zustandsarchitektur
CatchIt-Farben sind nicht primär Markenfarben, sondern **Zustandsfarben**.

## 2.1 Empfohlene Tokenfamilien
- `color.state.blue.start`
- `color.state.blue.end`
- `color.state.green.start`
- `color.state.green.end`
- `color.state.amber.start`
- `color.state.amber.end`
- `color.state.red.start`
- `color.state.red.end`

### Compose-Abbildung
```kotlin
data class CatchItGradientTokens(
    val blueIdle: List<Color>,
    val greenSoon: List<Color>,
    val amberAttention: List<Color>,
    val redCritical: List<Color>
)
```

---

## 3. Surface Tokens
Empfehlung:
- `surface.hero`
- `surface.card`
- `surface.mapSheet`
- `surface.recovery`
- `surface.overlay`
- `surface.cathy`

Nicht:
- wahllos auf Material Surface 1/2/3 verlassen.

---

## 4. Typography Tokens
Wegen großer Countdown-Zahlen und verdichteter Infos braucht CatchIt eine klare Typohierarchie:

- `type.heroCountdown`
- `type.heroLabel`
- `type.routeOptionLine`
- `type.routeOptionMeta`
- `type.chainContext`
- `type.reassurance`
- `type.sheetMetric`
- `type.quickAction`

### Compose-Abbildung
```kotlin
data class CatchItTypographyTokens(
    val heroCountdown: TextStyle,
    val heroLabel: TextStyle,
    val routePrimary: TextStyle,
    val routeMeta: TextStyle,
    val chainContext: TextStyle,
    val reassurance: TextStyle
)
```

---

## 5. Spacing und Shapes
Empfehlung:
- 4 / 8 / 12 / 16 / 24 / 32 als Basis
- stark gerundete Bubble
- weichere Map Sheet Ecken
- klare Distanz zwischen Hero und Secondary Content

Compose:
```kotlin
data class CatchItSpacingTokens(
    val xxs: Dp,
    val xs: Dp,
    val sm: Dp,
    val md: Dp,
    val lg: Dp,
    val xl: Dp
)
```

---

## 6. Motion Tokens
Da CatchIt ND-tauglich und vertrauensfähig sein soll:
- keine hektische Daueranimation
- Zustandswechsel weich, aber deutlich
- Swipe Reveal als physischer Übergang
- Map Focus als entschiedener, aber ruhiger Übergang
- Reduced Motion respektieren

Empfohlene Tokens:
- `motion.reveal.standard`
- `motion.focus.standard`
- `motion.stateChange.calm`
- `motion.stateChange.urgent`
- `motion.disabled.reduced`

---

## 7. A11y-Bindings
Jeder Tokenbereich braucht A11y-Regeln:

### Farbe
- nie alleiniger Bedeutungsträger
- Kontrastprüfung
- sekundäre Labels / Icons

### Typografie
- große Textskalierung robust
- keine abgeschnittenen Hero-Zahlen
- Zeilenumbrüche kontrollieren

### Motion
- reduzierbare Animation
- keine bedeutungstragende Bewegung allein

### Targets
- Buttons / Touchflächen ausreichend groß
- Swipe-only nicht exklusiv, immer Tap-/Alternative

---

## 8. Semantics Helper
Empfehlung im `:core:ui`:
```kotlin
fun Modifier.catchItStateSemantics(
    stateLabel: String,
    urgencyLabel: String? = null,
    actionLabel: String? = null
): Modifier
```

Weitere helper:
- `catchItCountdownSemantics`
- `catchItRouteOptionSemantics`
- `catchItMapRevealSemantics`
- `catchItRecoverySemantics`

---

## 9. Notifications und Voice
Da CatchIt öffentlich robuste Sprache braucht:
- neutrale Standardlabels
- keine peinlichen Detailnotizen auf Lockscreen
- Voice standardmäßig abstrahierend
- Detailsprache nur bewusst freigegeben

Technisch:
- Notification string layer getrennt halten
- semantische Labels nicht blind aus User Notes ableiten

---

## 10. Cathy-Bindings
Cathy kann an Tokens gekoppelt werden, aber begrenzt:

- state-linked mood assets
- prominence tiers
- silence defaults
- assistive framing

Nicht sinnvoll:
- Cathy bestimmt Farbzustände
- Cathy ersetzt Produktstatus
- Cathy übernimmt kritische Screenhierarchie

---

## 11. Ergebnis dieses Teils
Die Tokenwelt ist nun Compose-fähig:
- Zustandsfarben
- Typografie
- Spacing
- Motion
- Accessibility
- Notification-/Voice-Bindings
# CatchIt Compose-/Android-Übersetzung — Teil 5  
## Build-Reihenfolge, Priorisierung und konkrete nächste Schritte

## 1. Ziel dieses Teils
Dieser Teil übersetzt das Ganze in eine praktikable Reihenfolge für Umsetzung und Abstimmung.

Er beantwortet:
- Was sollte zuerst gebaut werden?
- Was ist Design-/Produktkern?
- Was ist nur späterer Ausbau?
- Welche Screens und Komponenten lohnen sich zuerst?

---

## 2. Was zuerst gebaut werden sollte
Die richtige Reihenfolge ist **nicht**:
Provider perfektionieren → alles in einem Screen zeigen → später UX machen.

Die richtige Reihenfolge ist eher:
1. Product State sauber modellieren
2. Core UI Tokens in Compose bringen
3. Main State Screen bauen
4. Map Reveal / Map Focus bauen
5. Recovery Mode bauen
6. Wizard für Ketten bauen
7. Quick Changes
8. Settings / Accessibility
9. Cathy Layer fein integrieren
10. erst dann breiter Provider-/Realtime-Ausbau

---

## 3. Priorisierte Composable-Build-Reihenfolge

### Phase 1 — Foundations
- `CatchItTheme`
- tokens
- typography
- spacing
- gradients
- semantics helper

### Phase 2 — Core Components
- `CountdownBubble`
- `RouteOptionRow`
- `ChainContextHeader`
- `ReassuranceBanner`
- `QuickActionChip`

### Phase 3 — Main Experience
- `HomeScreen`
- `MapPreviewSheet`
- `MapFocusLayout`
- `RecoveryActionCard`

### Phase 4 — Planning
- Wizard step components
- chain summary
- return leg section
- quick change sheet

### Phase 5 — Trust / ND / Privacy
- notification label rules
- neutral/private naming
- reduced motion modes
- large text behaviors

### Phase 6 — Cathy
- overlay prominence logic
- assistive visuals
- transition-only emphasis

---

## 4. Welche Screens zuerst als reale Compose-Screens entstehen sollten
Die Reihenfolge sollte der Mockup-Reihenfolge ähneln, aber technisch sinnvoll geschnitten sein.

### Screen 1
**Blue Idle Home**
- Hero Countdown
- 3 Optionen
- Chain Kontext

### Screen 2
**Green Soon Home**
- gleiche Struktur
- anderer Zustand
- schärfere Handlungssprache

### Screen 3
**Map Reveal**
- vertikale Verdichtung
- Karte erscheint
- Bubble bleibt

### Screen 4
**Map Focus**
- Karte dominant
- Bubble persistent
- Gehzeit / Distanz / gewählte Linie unten

### Screen 5
**Recovery**
- einfache Alternative
- Kettenauswirkung sichtbar

### Screen 6
**Wizard Einstieg**
- Vorhaben statt Route
- menschenlesbare Fragen

### Screen 7
**Wizard Chain Extension**
- „Musst du danach noch irgendwo hin?“

### Screen 8
**Chain Summary**
- Hinweg / Aufenthalt / Rückweg / optionaler Zusatz

### Screen 9
**Quick Change**
- Snack-Stopp
- 10 Minuten später
- Bus später
- Rückweg anpassen

### Screen 10
**Accessibility / Privacy / Voice**
- öffentliche Sprache
- große Schrift
- reduzierte Bewegung
- Cathy Intensität

---

## 5. Was in V1 nicht perfekt sein muss
Nicht alles braucht V1-Reife:

- vollautomatische semantische Abschnittsbenennung
- perfekte Provider-Fusion
- echte Multi-Person-Logik
- maximale Kartenintelligenz
- vollausgebaute Cathy-Persona

Aber V1 braucht:
- tragfähigen Main State
- Kettenlogik
- verständliches Recovery
- ND-taugliche Vertrauensarchitektur
- Quick Changes ohne Neustart

---

## 6. Empfohlene technische Milestones

### Milestone A
**State-first UI skeleton**
- tokens
- reducers
- preview data
- home state rendering

### Milestone B
**Map layer and transitions**
- reveal/focus
- animation
- semantics
- gesture alternatives

### Milestone C
**Wizard and chain persistence**
- draft model
- DataStore prefs
- summary screen
- active plan creation

### Milestone D
**Recovery and quick change**
- change impact mapping
- alternative suggestion logic
- visible chain impact

### Milestone E
**Trust layer**
- privacy labels
- notification policies
- accessibility modes
- Cathy integration

---

## 7. Übergang von Figma zu Compose
Die stärkste Arbeitsweise wäre:

1. Mockup-Screens finalisieren  
2. für jeden Screen ScreenState definieren  
3. für jeden Screen Component Props definieren  
4. Compose Preview bauen  
5. erst dann echte Dateneinspeisung anschließen

So vermeidest du, dass das Repo aus technischen Realitäten die UX zurück in Debug-Oberflächen zieht.

---

## 8. Empfehlung für Dokumentationsstruktur im Repo
Sinnvoll wären ergänzende Docs wie:
- `docs/ui-state-model.md`
- `docs/design-token-mapping.md`
- `docs/home-screen-spec.md`
- `docs/wizard-chain-spec.md`
- `docs/recovery-spec.md`
- `docs/privacy-voice-policy.md`

---

## 9. Abschluss
Wenn CatchIt technisch sauber umgesetzt werden soll, dann lautet die wichtigste Regel:

**Nicht Provider zuerst sichtbar machen.  
Nicht Daten zuerst sichtbar machen.  
Sondern die verdichtete Produktwahrheit zuerst sichtbar machen.**

Das ist die Android-/Compose-Übersetzung des gesamten CatchIt-Kerns.
