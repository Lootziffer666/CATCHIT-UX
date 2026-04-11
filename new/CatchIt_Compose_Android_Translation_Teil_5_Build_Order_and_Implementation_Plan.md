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
