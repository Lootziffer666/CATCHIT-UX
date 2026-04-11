# CatchIt — Figma Screen Spec, Teil 5  
## Welche Mockups du selbst bauen solltest, in welcher Reihenfolge und warum

Dieser Teil ist bewusst praktisch.  
Er sagt nicht nur, was theoretisch möglich ist, sondern welche Screens du selbst bauen solltest, damit dein Designkonzept kohärent, erklärbar und überzeugend vermittelt wird.

---

## 1. Wenn du nur ein kompaktes, aber starkes Set bauen willst

Baue diese **10 Screens**:

1. Main / Stable / Blue  
2. Main / Bald Relevant / Green  
3. Main → Map Reveal  
4. Map Focus  
5. Go Mode / Active Step  
6. Recovery / Simple Fallback  
7. Wizard / Einstieg  
8. Wizard / Kettenfrage  
9. Chain Summary  
10. Quick Change / späterer Bus oder Snack Stop  

Warum genau diese 10:
- sie zeigen den CatchIt-Kern
- sie unterscheiden CatchIt klar von normalen Transit-Apps
- sie bilden Planung, Exekution und Recovery ab
- sie zeigen Ketten statt Einzelverbindungen
- sie machen deine Verdichtungslogik verständlich

---

## 2. Wenn du ein volles, sehr überzeugendes Konzept-Set bauen willst

Baue diese **16 Screens**:

### A. Kernzustände
1. Main / Stable / Blue  
2. Main / Bald Relevant / Green  
3. Main / Fragil / Yellow  
4. Main / Kritisch / Red  

### B. Raum- und Exekutionslogik
5. Main → Map Reveal  
6. Map Focus  
7. Go Mode / Walk to Stop  
8. Go Mode / In Vehicle  

### C. Recovery und Vertrauenslogik
9. Recovery / Simple Switch  
10. Recovery / Recheck nötig  
11. Recovery / Kette angepasst  

### D. Planung und Ketten
12. Wizard / Einstieg  
13. Wizard / Kettenfrage  
14. Wizard / Bewegungsstil / Tageslage  
15. Chain Summary  
16. Quick Change / Snack oder späterer Bus  

Dieses Set ist fast schon präsentationsreif für Stakeholder, Pitch oder Design-Dokumentation.

---

## 3. Wenn du explizit die ND-/Trust-Perspektive mit zeigen willst

Ergänze zusätzlich 4 Spezial-Screens:

1. Neutral Label vs User Label
2. Lockscreen-safe Notification
3. Voice-safe Assist Screen
4. Accessibility Variant / Large Text + Reduced Motion

Diese Screens machen deine Haltung zu Vertrauen und intentionaler Friktion sichtbar.

---

## 4. Reihenfolge für den Bau

### Phase 1 — Produktkern zuerst
Baue zuerst:
1. Main / Blue
2. Main / Green
3. Map Reveal
4. Map Focus
5. Recovery

Erst wenn diese fünf Screens sitzen, ist der Kern formal stark genug.

### Phase 2 — Ketten-Differenzierung
Danach:
6. Wizard Einstieg
7. Kettenfrage
8. Chain Summary
9. Quick Change

Diese Screens machen CatchIt wirklich eigenständig.

### Phase 3 — Trust, Privacy, ND
Danach:
10. neutrale Labels
11. Accessibility
12. optional Cathy

### Phase 4 — Polishing und Varianten
Dann:
- zusätzliche Zustandsfarben
- weitere Recovery-Fälle
- Sonderfälle für Rückweg und Zwischenstopps

---

## 5. Welcher Screen am wichtigsten ist

### Der wichtigste Screen:
**Main / Stable / Blue**

Warum:
- Er ist der stärkste Ausdruck des Produkts
- Er ersetzt das typische „Transit-App = Suchmaske“-Modell
- Er muss gleichzeitig beruhigen, orientieren und die Kette implizit tragen

### Der zweitwichtigste:
**Map Reveal**

Warum:
- Hier wird deine Verdichtungslogik sichtbar
- Man versteht, dass die Karte nicht Standard, sondern situative Ebene ist

### Der drittwichtigste:
**Quick Change**

Warum:
- Hier zeigt CatchIt, dass es Ketten besser kann als andere Apps

---

## 6. Was jeder dieser Mockups narrativ beweisen soll

### Main / Blue
„CatchIt ist eine Zustandsoberfläche, nicht eine Fahrplansuche.“

### Main / Green
„Der gleiche Screen kann operative Relevanz erhöhen, ohne hektisch zu werden.“

### Map Reveal
„Räumliche Orientierung wird bei Bedarf geöffnet, ohne die Kernwahrheit zu verlieren.“

### Map Focus
„Zeit bleibt präsent, auch wenn Orientierung dominiert.“

### Recovery
„CatchIt zeigt die einfachste Rettung, nicht bloß das Problem.“

### Wizard Einstieg
„CatchIt fragt nach Vorhaben, nicht nach Technik.“

### Kettenfrage
„Der Rückweg und das Danach sind Kernlogik, keine Extras.“

### Chain Summary
„Ein Tagesablauf kann als ruhige, tragfähige Kette dargestellt werden.“

### Quick Change
„Abweichungen zerstören die Planung nicht.“

### Privacy / Label Screen
„Das System bleibt sozial robust und exponiert nicht unnötig private Bedeutung.“

---

## 7. Wie du die Mockups visuell kohärent hältst

### Immer gleich halten
- Device-Größe
- Grid
- Safe Areas
- Bubble-Größe oder definierte Varianten
- Typografie-System
- Spacing-Logik
- Hintergrundlogik nach Zuständen

### Variieren
- Dichte
- Kartenanteil
- operative Informationsmenge
- Recovery-Botschaften
- Wizard-Frageinhalte

### Nicht wild variieren
- Navigationsmuster
- Komponentenformen
- Tonalität der Labels
- Bewegungslogik

---

## 8. Häufige Fehler, die dein Konzept schwächen würden

- zu viele Screens vor dem Main Screen zeigen
- den Wizard wie ein Formular aussehen lassen
- Karte zu früh dominant machen
- im Recovery zu viele Alternativen zeigen
- Kettenlogik nur textlich behaupten, aber nicht visualisieren
- Cathy zu früh ins Zentrum setzen
- Details zeigen, nur weil sie vorhanden sind

---

## 9. Empfehlung für die konkrete Bau-Reihenfolge in Figma

### Sprint 1
- Main / Blue
- Main / Green
- Map Reveal
- Map Focus

### Sprint 2
- Recovery
- Go Mode
- Wizard Einstieg
- Kettenfrage

### Sprint 3
- Chain Summary
- Quick Change
- Rückweg-Screen
- Privacy-Screen

### Sprint 4
- Accessibility Variant
- optional Cathy Layer
- zusätzliche Zustandsvarianten
- Prototype-Verkabelung

---

## 10. Die beste Mini-Präsentation mit deinen Mockups

Wenn du dein Konzept jemandem schnell erklären willst, zeige genau diese Folge:

1. Main / Blue  
2. Main / Green  
3. Swipe → Map Reveal  
4. Tap → Map Focus  
5. Recovery  
6. Wizard / Kettenfrage  
7. Chain Summary  
8. Quick Change  

Damit versteht man:
- CatchIt verdichtet Wahrheit
- CatchIt zeigt Raum nur bei Bedarf
- CatchIt denkt in Ketten
- CatchIt kann Änderungen tragen
- CatchIt ist vertrauens- und nicht datengetrieben

---

## 11. Zusatz: Was du später noch bauen kannst

Später sinnvoll, aber nicht für die erste kohärente Präsentation nötig:

- Favoriten-/Orte-Screen
- Settings / Accessibility-Panel
- Notification-Center
- Lockscreen-Mockups
- Companion-/Cathy-Sonderzustände
- Mehrpersonen-Hinweise
- Admin-/Debug- oder Truth-Inspection-Layer

---

## 12. Schlussregel

Wenn du bei einem Screen zweifelst, frage immer:

**Beweist dieser Screen, dass CatchIt den Alltag als Kette stabilisiert und Unsicherheit in tragfähige Beruhigung übersetzt?**

Wenn nein, ist der Screen entweder noch nicht präzise genug oder für die erste Konzeptvermittlung verzichtbar.
