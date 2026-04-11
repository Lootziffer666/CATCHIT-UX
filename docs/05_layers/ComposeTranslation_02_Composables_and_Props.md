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
