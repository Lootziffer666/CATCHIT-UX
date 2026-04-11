# CatchIt – Teil 4D
## Variant Properties und State Mapping

## 1. Wiederverwendbare Property-Familien

Empfohlene Property-Gruppen:

- `state = idle | ready | adapting | actNow | failed | done`
- `density = ambient | standard | expanded | compressed`
- `confidence = high | medium | low | unknown`
- `emphasis = primary | secondary | tertiary`
- `chainContext = hidden | compact | visible`
- `privacy = neutral | publicSafe | private`
- `selection = active | available | reserve | fallback | disabled`
- `map = hidden | reveal | focus`
- `motion = standard | reduced`

---

## 2. State Mapping statt Schönheitsmapping

Die wichtigste Regel:
**Variants folgen Produktzuständen, nicht nur UI-Zuständen.**

Also nicht:
- blueCard
- orangeCard
- mapCardBig

sondern:
- countdown / state=ready
- countdown / state=adapting
- instruction / state=actNow
- recovery / type=recheck

---

## 3. Beispiel: `ci/anchor/countdown`

### Variant Properties
- `state = idle | ready | adapting | actNowTrace`
- `density = ambient | standard | compressed`
- `map = hidden | reveal | focus`
- `chainContext = hidden | compact | visible`
- `motion = standard | reduced`

### Regel
Orange bekommt nicht einfach einen neuen Countdown-Hero, sondern nur die passende Persistenz-/Trace-Variante.

---

## 4. Beispiel: `ci/support/options-cluster`

### Variant Properties
- `state = idle | ready | adapting | actNowBackground | recovery`
- `selection = primary | reserve | fallback`
- `density = standard | expanded`
- `chainContext = hidden | compact`
- `privacy = neutral | publicSafe`

### Regel
Das Cluster darf sich entpacken, aber nicht in Suchresultate mutieren.

---

## 5. Beispiel: `ci/spatial/map-reveal-surface`

### Variant Properties
- `state = ready | adapting | actNow`
- `map = reveal | focus`
- `motion = standard | reduced`
- `privacy = neutral | publicSafe`

### Regel
`reveal` und `focus` sind keine zwei Produkte, sondern zwei Dichten derselben räumlichen Hilfe.

---

## 6. Beispiel: `ci/recovery/simple-switch-card`

### Variant Properties
- `state = adapting | recoveryResolved`
- `confidence = high | medium | low`
- `chainContext = compact | visible`
- `motion = standard | reduced`

### Regel
Recovery-Varianten folgen Vertrauenslogik, nicht Error-Schablonen.

---

## 7. Beispiel: `ci/wizard/question-panel`

### Variant Properties
- `type = entry | chain | dayCondition`
- `privacy = neutral | publicSafe`
- `motion = standard | reduced`
- `density = standard | expanded`

### Regel
Auch Wizard-Varianten bleiben Teil derselben CatchIt-Familie und werden nicht zum Form Builder.
