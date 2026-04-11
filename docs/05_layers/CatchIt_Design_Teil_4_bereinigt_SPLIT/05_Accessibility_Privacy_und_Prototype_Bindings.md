# CatchIt – Teil 4E
## Accessibility, Privacy und Prototype Bindings

## 1. Accessibility ist Teil des Hauptsystems

Alle zentralen Komponenten bekommen Accessibility-spezifische Variant Properties:

- `a11yLargeText = true/false`
- `a11yHighContrast = true/false`
- `a11yReducedMotion = true/false`
- `a11yScreenReaderPriority = hero | navigation | detail`
- `privacyPublicMode = true/false`

Diese Properties sind **keine Extras**, sondern Teil der Kernvarianten.

---

## 2. Large Text

Große Schrift darf:
- Hierarchie verändern
- Verdichtung lockern
- Kartenanteil reduzieren
- Nebensignale stärker unterdrücken

Große Schrift darf nicht:
- CatchIt in ein zweites visuelles System verwandeln
- Anchor-Logik verlieren
- Kettenkontext unlesbar machen

---

## 3. Reduced Motion

Reduced Motion bedeutet nicht nur weniger Animation, sondern vereinfachte Bedeutungsübertragung.

### Regeln
- keine decorative transitions
- kein Ambient-Motion-Layer
- nur funktionale Handover
- Reveal stark vereinfacht
- Zustandswechsel weiter lesbar

---

## 4. Public Safe / Privacy Mode

Privacy-Varianten müssen mitgedacht werden für:
- öffentliche Screens
- Voice
- Notifications
- Lockscreen
- ggf. Companion-Layer

### Regeln
- neutrale Begriffe statt intimer Labels
- keine peinlichen oder medizinisch konkreten Defaults
- keine private Semantik als Systembehauptung

---

## 5. Prototype Bindings

Jede relevante Komponente oder Screenfamilie sollte dokumentieren:
- welcher Trigger sie aktiviert
- in welchen State sie überführt
- welchen Anchor sie unterstützt
- welche Motion-Klasse gilt
- welche Persistence-Klasse im Übergang gilt

### Beispiele
- Swipe up → Map Reveal
- Tap card → Map Focus
- Confirm change → Confirmation
- Recheck action → Instruction / Recheck
- Apply later bus → Confirmation / Quick Change

---

## 6. Arbeitsregel

Wenn eine Komponente nur „schön“ ist, aber keine klare Zustands- oder Travel-Truth-Funktion trägt, gehört sie nicht zum Kernsystem.

CatchIt ist optimiert auf:
- Zustände
- Handlungsschwellen
- Vertrauen
- Kettenkontext
- Recovery
- ND-taugliche Lesbarkeit

nicht auf dekorativen Interface-Inventaraufbau.
