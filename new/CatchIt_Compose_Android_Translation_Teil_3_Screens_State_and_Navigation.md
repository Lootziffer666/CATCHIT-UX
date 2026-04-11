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
