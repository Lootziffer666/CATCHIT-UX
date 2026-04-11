
# CatchIt – Figma Property & Token Spec Paket – Teil 4  
## Komponentenmatrix, Prototyping und Screen-Prioritäten

## 1. Komponentenmatrix
| Komponente | Pflicht für V1 Mockup | Pflicht für Build-V1 | Später |
|---|---|---|---|
| status-shell | ja | ja | |
| countdown-bubble | ja | ja | |
| transport-row | ja | ja | |
| chain/progress | ja | optional | |
| confidence-chip | ja | ja | |
| map/reveal-panel | ja | optional | |
| map/summary-row | ja | optional | |
| fallback-card | ja | ja | |
| wizard/question-panel | ja | ja | |
| public-safe-label | ja | optional | |
| quick-change-sheet | ja | optional | |
| cathy/frame | optional | nein | später |

## 2. Figma-Property-Panel-Standard
Jede Hauptkomponente bekommt in Figma einheitliche Properties in dieser Reihenfolge:

1. `state`
2. `selection`
3. `density`
4. `confidence`
5. `privacy`
6. `map`
7. `cathy`
8. `a11yLargeText`
9. `a11yHighContrast`
10. `a11yReducedMotion`

Damit bleibt das Variantensystem über Komponenten hinweg lesbar.

## 3. Empfohlene Component Sets
### Set A – Hero
- status-shell
- countdown-bubble
- confidence-chip
- chain-progress

### Set B – Options
- transport-row
- route chip
- supporting role label

### Set C – Map
- reveal panel
- map summary
- drag handle
- map focus footer

### Set D – Recovery
- fallback-card
- recovery explanation row
- recheck-needed banner

### Set E – Planning
- wizard question panel
- answer chips
- chain continuation pattern
- return trip pattern

### Set F – Trust & Privacy
- public-safe-label
- confidence chip
- provenance hint
- watcher/recheck hint

## 4. Prototyp-Übergänge in Figma
### 4.1 Main → Map Reveal
- Trigger: swipe up
- Animation: move in + smart animate
- Dauer: 300 ms
- Easing: ease out
- Bubble: scale down
- Options: compress upward
- Karte: rise from bottom

### 4.2 Map Reveal → Map Focus
- Trigger: tap on map
- Animation: smart animate
- Dauer: 350 ms
- Bubble: pin to top
- Karte: expand vertically
- Summary row: fade + move

### 4.3 Main → Green State
- Trigger: timer state / prototype tap
- Animation: dissolve + smart animate
- Dauer: 400 ms
- Background morph
- copy shift mild

### 4.4 Fragile → Recovery
- Trigger: alert / missed connection
- Animation: smart animate
- Dauer: 300 ms
- confidence tone shifts from caution to alert
- fallback card enters immediately below hero

### 4.5 Wizard → Quick Change
- Trigger: CTA or overflow
- Animation: bottom sheet
- Dauer: 250 ms

## 5. Annotationen pro Kernscreen
Jeder Präsentationsscreen braucht vier Annotationstypen:

1. **State truth**
   - Was ist die eigentliche Lage?

2. **User question**
   - Welche Frage beantwortet der Screen?

3. **Design decision**
   - Warum ist diese Verdichtung so gebaut?

4. **Trust / ND note**
   - Welcher Vertrauens- oder Belastungsaspekt wird geschützt?

## 6. Empfohlene Annotation-Beispiele
### Main Screen
- State truth: „Robuster Plan hält, wenn in 15 Minuten aufgebrochen wird.“
- User question: „Muss ich gerade etwas tun?“
- Design decision: „Derselbe Plan wie in der detaillierten Ansicht, aber nach Dringlichkeit verdichtet.“
- Trust note: „Alle Optionen sind machbar; eine ist führend.“

### Map Reveal
- State truth: „Räumliche Orientierung wird jetzt relevant.“
- User question: „Wie komme ich zur besten Haltestelle?“
- Design decision: „Karte erscheint erst bei Bedarf.“
- ND note: „Orientierung wird geöffnet, nicht aufgedrängt.“

### Recovery
- State truth: „Der bisherige Plan ist fragil oder gekippt.“
- User question: „Was ist jetzt die einfachste Rettung?“
- Design decision: „Recovery ist ein eigener Modus, kein Fehlerdialog.“
- Trust note: „Änderung und Kettenauswirkung werden explizit gemacht.“

## 7. Welche Mockups du zusätzlich selbst bauen solltest
Für eine kohärente Vermittlung des Designkonzepts reichen nicht nur schöne Hero-Screens.  
Du solltest mindestens diese 12 Mockups bauen:

1. Main Idle
2. Main Green
3. Main Fragile
4. Map Reveal
5. Map Focus
6. Go Mode / nächster Schritt
7. Recovery / einfachste Rettung
8. Wizard Start
9. Kettenfrage / weiterer Stop
10. Quick Change / Snacken + späterer Bus
11. Privacy / Public Safe Beispiel
12. Accessibility Variant Board

### Sehr empfehlenswerte Ergänzungen
13. Main mit subtiler Kettenprogression  
14. Rückweg im selben Kettenobjekt  
15. Cathy in Transition  
16. Recovery mit Recheck / Watcher  
17. Component Gallery  
18. Token Overview Slide

## 8. Priorisierte Baureihenfolge
### Phase 1 – Produktkern
1. Main Idle
2. Main Green
3. Map Reveal
4. Map Focus
5. Recovery

### Phase 2 – Differenzierung
6. Wizard Start
7. Kettenfrage
8. Quick Change
9. Rückweg-Ansicht

### Phase 3 – Vertrauen
10. Privacy
11. Accessibility
12. Cathy Transition

### Phase 4 – Systemisierung
13. Komponentenboard
14. Tokenboard
15. Prototyp-Flowboard

## 9. Repo-Anschluss
Dieses Paket soll an die reale Struktur des Repos anschließen.

### Figma → Compose Anschluss
- `status-shell` korrespondiert mit Home-/Scene-State-Logik
- `countdown-bubble` und `transport-row` korrespondieren mit Home-/Timeline-/ActivePlan-Darstellung
- `wizard/question-panel` korrespondiert mit Wizard-First-Routing
- `fallback-card` korrespondiert mit Alert-/Recovery-Logik
- `cathy/frame` bleibt nachgelagert

### Was bewusst noch nicht zu eng gekoppelt werden sollte
- provider-spezifische API-Eigenheiten
- Live-Realtime-Unsauberkeiten
- echte Mehrpersonenlogik
- technische Debug-Oberflächen

## 10. Abschlussregel
Dieses Paket ist dann gelungen, wenn:
- Figma nicht wie eine normale Transit-App aussieht
- die Komponenten eine echte Zustandsmaschine tragen
- Ketten klarer werden als Einzelfahrten
- Vertrauen sichtbarer wird als bloße Glätte
- Privacy und ND-Lesbarkeit nicht nachträglich, sondern systemisch eingebaut sind
