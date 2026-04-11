# CatchIt – Teil 5C
## Compose Foundations und Theme

## 1. Theme-Layer

Der Theme-Layer darf nicht bloß Light/Dark lösen, sondern muss Produktzustände visuell tragen.

Empfehlung:

```kotlin
@Composable
fun CatchItTheme(
    mode: CatchItVisualMode,
    highContrast: Boolean = false,
    largeText: Boolean = false,
    reducedMotion: Boolean = false,
    content: @Composable () -> Unit
)
```

---

## 2. CatchItVisualMode

```kotlin
enum class CatchItVisualMode {
    BLUE_IDLE,
    GREEN_READY,
    YELLOW_ADAPTING,
    ORANGE_ACT_NOW,
    RED_FAILED,
    MAP_REVEAL,
    MAP_FOCUS,
    NEUTRAL
}
```

---

## 3. Token-Objekte in `:core:ui`

Empfohlen:
- `CatchItColorTokens`
- `CatchItTypographyTokens`
- `CatchItSpacingTokens`
- `CatchItShapeTokens`
- `CatchItElevationTokens`
- `CatchItMotionTokens`

Diese sollen produktlogische Begriffe tragen, z. B.:
- `surfaceCalm`
- `surfaceAdaptive`
- `surfaceAction`
- `surfaceFailure`
- `countdownHero`
- `focusRingStrong`
- `mapPreviewBackdrop`

---

## 4. Foundations in Compose

### Theme
- zustandsabhängige Backdrops
- semantische Textfarben
- trust-/failure-/action-konforme Flächen

### Typography
- UI-Schrift
- Countdown-Schrift
- kurze Anchor-Texte
- klare Sekundärtexte

### Shape
- Bubble
- Cards
- Reveal-Surfaces
- Recovery-Flächen

### Motion
- Tightening
- Reveal
- Handover
- Compression
- Settlement

---

## 5. Accessibility im Theme

`largeText`, `highContrast` und `reducedMotion` sind keine Extras, sondern Primärsystem.

Das Theme muss:
- Typo-Skalen anheben
- Dichte lockern
- Motion reduzieren
- trotzdem Anchor-Hierarchie erhalten
