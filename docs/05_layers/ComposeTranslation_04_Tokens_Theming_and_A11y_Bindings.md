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
