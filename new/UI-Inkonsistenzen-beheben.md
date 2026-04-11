> From: https://chatgpt.com/c/69d970ef-9c64-8395-8638-99a6e8264dfd

# chatgpt response

Ja — mit der vollständigen Liste würde ich die Reihenfolge **leicht korrigieren**.  
Der Kern bleibt gleich: **nicht nach Menüstruktur bauen, sondern nach Systemabhängigkeiten**.

# Empfohlene Bau-Reihenfolge

## Phase 1 — Produktkern
Zuerst die Screens, die beweisen, dass CatchIt **als Zustandsoberfläche** funktioniert.

1. **Main / Stable / Blue**  
2. **Main / Bald Relevant / Green**  
3. **Main / Fragil / Yellow**  
4. **Main / Kritisch / Red**  
5. **Main → Map Reveal**  
6. **Map Focus**

Warum so:  
Ohne diese sechs Screens weißt du noch nicht belastbar,
- wie Zustände kippen,
- wie Verdichtung funktioniert,
- wie viel Raum die Karte bekommen darf,
- und ob CatchIt visuell wirklich **dieselbe Oberfläche** bleibt.

---

## Phase 2 — Exekution
Dann die Screens, in denen der Nutzer wirklich unterwegs handelt.

7. **Go Mode / Walk to Stop**  
8. **Go Mode / In Vehicle**

Warum erst jetzt:  
Der Go Mode muss auf einer bereits geklärten Main-/Map-Logik aufbauen. Sonst baust du bloß eine hübsche Mobility-Ansicht, aber keine Fortsetzung deines Systems.

---

## Phase 3 — Recovery und Vertrauen
Dann die Fälle, in denen die Realität unordentlich wird.

9. **Recovery / Simple Switch**  
10. **Recovery / Recheck nötig**  
11. **Recovery / Kette angepasst**

Warum in dieser Reihenfolge:  
- **Simple Switch** = leichtester Recovery-Fall  
- **Recheck nötig** = ehrlichster, heikelster Fall  
- **Kette angepasst** = komplexester Fall mit Folgewirkung

---

## Phase 4 — Planung und Ketten
Erst danach der Wizard-Block.

12. **Wizard / Einstieg**  
13. **Wizard / Kettenfrage**  
14. **Wizard / Bewegungsstil / Tageslage**  
15. **Chain Summary**  
16. **Quick Change / Snack oder späterer Bus**

Warum so spät:  
Der Wizard ist zwar zeitlich am Anfang der Nutzung, aber **systemisch nicht am Anfang des Konzeptbaus**.  
Du kannst ihn erst sauber formulieren, wenn klar ist, **wofür** er eigentlich vorbereitet.

---

# Die beste Reihenfolge als Liste

## Reihenfolge, die ich dir empfehlen würde
1. Main / Stable / Blue  
2. Main / Bald Relevant / Green  
3. Main / Fragil / Yellow  
4. Main / Kritisch / Red  
5. Main → Map Reveal  
6. Map Focus  
7. Go Mode / Walk to Stop  
8. Go Mode / In Vehicle  
9. Recovery / Simple Switch  
10. Recovery / Recheck nötig  
11. Recovery / Kette angepasst  
12. Wizard / Einstieg  
13. Wizard / Kettenfrage  
14. Wizard / Bewegungsstil / Tageslage  
15. Chain Summary  
16. Quick Change / Snack oder späterer Bus  

---

# Wenn du ein erstes starkes Präsentationspaket willst

Dann würde ich **nicht sofort alle 16** bauen, sondern zuerst diese 8:

1. Main / Stable / Blue  
2. Main / Bald Relevant / Green  
3. Main → Map Reveal  
4. Map Focus  
5. Recovery / Simple Switch  
6. Wizard / Kettenfrage  
7. Chain Summary  
8. Quick Change / Snack oder späterer Bus  

Warum genau diese 8:  
Weil sie in kurzer Folge bereits fast die ganze CatchIt-Idee beweisen:

- **kein Suchmasken-Produkt**
- **Zustandslogik statt Fahrplanliste**
- **Karte nur situativ**
- **Recovery statt bloßer Fehlermeldung**
- **Kettenlogik statt Einzelwegdenken**
- **Flexibilität ohne Planungsbruch**

---

# Die 4 Zusatz-Screens
Die würde ich **nicht** in die Kernreihenfolge mischen, sondern als **Trust-/Accessibility-Layer** später draufsetzen:

17. Neutral Label vs User Label  
18. Lockscreen-safe Notification  
19. Voice-safe Assist Screen  
20. Accessibility Variant / Large Text + Reduced Motion  

## Reihenfolge dafür
1. Neutral Label vs User Label  
2. Lockscreen-safe Notification  
3. Accessibility Variant  
4. Voice-safe Assist Screen  

Warum:  
So zeigst du zuerst Haltung und Schutz, dann Zugänglichkeit, dann Spezialinteraktion.

---

# Was jeder Bau-Block beweisen muss

## Block 1 — Main States
**Beweist:** CatchIt funktioniert ohne klassische Suche.

## Block 2 — Map + Go
**Beweist:** Raumhilfe ergänzt die Wahrheit, ersetzt sie nicht.

## Block 3 — Recovery
**Beweist:** CatchIt bleibt unter Störung vertrauenswürdig.

## Block 4 — Wizard + Chain
**Beweist:** Die Vorschläge kommen aus echter Alltagslogik, nicht aus Standard-Ranking.

## Block 5 — Trust/ND/Accessibility
**Beweist:** Die Haltung ist nicht Behauptung, sondern im System verankert.

---

# Meine harte Empfehlung für Figma/Stitch
Baue in **Familien**, nicht querbeet.

## Sprint 1
- Main / Blue
- Main / Green
- Main / Yellow
- Main / Red

## Sprint 2
- Main → Map Reveal
- Map Focus
- Go Mode / Walk to Stop
- Go Mode / In Vehicle

## Sprint 3
- Recovery / Simple Switch
- Recovery / Recheck nötig
- Recovery / Kette angepasst

## Sprint 4
- Wizard / Einstieg
- Wizard / Kettenfrage
- Wizard / Bewegungsstil / Tageslage
- Chain Summary
- Quick Change

## Sprint 5
- Neutral Label vs User Label
- Lockscreen-safe Notification
- Voice-safe Assist Screen
- Accessibility Variant

---

# Wichtigste drei Screens

## 1. Main / Stable / Blue
Der wichtigste überhaupt.  
Wenn der nicht sitzt, ist alles andere nur Variation auf wackliger Grundlage.

## 2. Main → Map Reveal
Hier zeigt sich, ob deine Verdichtungslogik wirklich funktioniert.

## 3. Quick Change / Snack oder späterer Bus
Hier zeigt CatchIt, dass es mehr kann als nur eine Verbindung anzeigen.

---

# Mein Fazit
Deine ergänzte Liste ist stark.  
Aber die vorgeschlagene Reihenfolge aus dem kopierten Text ist mir etwas zu grob und lässt **Yellow/Red** zu spät bzw. fast nebensächlich wirken. Das wäre ein Fehler, weil gerade dort deine Zustandslogik sichtbar wird.

Die belastbarste Reihenfolge ist:

**erst alle Main-Zustände, dann Map/Go, dann Recovery, dann Wizard/Kette, dann Trust/Accessibility.**

Wenn du willst, mache ich dir im nächsten Schritt daraus eine **saubere Master-Tabelle mit 16+4 Screens, Zweck, Reihenfolge, Priorität und Gate-Kriterium pro Screen**.

---

# chatgpt response

## CatchIt Master-Tabelle

### Legende
- **Priorität**: P1 = zuerst, P2 = danach, P3 = später, P4 = Zusatz-/Polish-Layer
- **Gate** = Was stehen muss, bevor der Screen wirklich „fertig genug“ ist

---

## Kernset: 16 Screens

| Nr. | Screen | Zweck | Reihenfolge | Priorität | Gate-Kriterium |
|---|---|---|---:|---|---|
| 1 | Main / Stable / Blue | Nullpunkt der App; ruhige Primärwahrheit ohne akuten Handlungsdruck | 1 | P1 | Countdown ist klarer Hauptanker, 3 Vorschläge wirken wie tragfähige Optionen statt Suchresultate, Screen ist ruhig aber nicht leer |
| 2 | Main / Bald Relevant / Green | Relevanz steigt, ohne Hektik auszulösen | 2 | P1 | Unterschied zu Blue ist funktional lesbar, nicht nur farblich; „bald wichtig“ ist klar, ohne Alarmwirkung |
| 3 | Main / Fragil / Yellow | Instabilität sichtbar machen, ohne Chaos oder Error-Gefühl | 3 | P1 | Yellow ist semantisch sauber von Green und Red getrennt; Nutzer versteht: noch tragfähig, aber aufmerksam bleiben |
| 4 | Main / Kritisch / Red | Klare Handlungsnotwendigkeit oder Scheitern einer Option | 4 | P1 | Rot wirkt selten, eindeutig und handlungsleitend; kein generisches Fehler-Design |
| 5 | Main → Map Reveal | Übergang von Zustandsoberfläche zu räumlicher Unterstützung | 5 | P1 | Kein Bottom Sheet, kein neuer Screen; Karte erscheint als Verdichtung derselben Oberfläche |
| 6 | Map Focus | Räumliche Orientierung wird wichtiger, Zeitwahrheit bleibt aber präsent | 6 | P1 | Map dominiert nicht vollständig; Countdown-/Zeitlogik bleibt als Vertrauensanker erhalten |
| 7 | Go Mode / Walk to Stop | Exekutionszustand fürs tatsächliche Losgehen | 7 | P1 | Screen reduziert Denken, macht Handlung sofort lesbar, kippt nicht in generische Karten-App |
| 8 | Go Mode / In Vehicle | Exekutionszustand während der Fahrt | 8 | P2 | Weniger operative Hektik als Walk-State, aber weiterhin klare Zustandsführung und Orientierung |
| 9 | Recovery / Simple Switch | Sanfte Plananpassung ohne Vertrauensbruch | 9 | P1 | Nutzer versteht: System hat geregelt; Änderung wirkt beruhigend statt nervös |
| 10 | Recovery / Recheck nötig | Ehrliche Rückgabe von Aufmerksamkeit an den Nutzer | 10 | P1 | Recheck ist klar, konkret und vertrauenswahrend; kein schwammiger Warnzustand |
| 11 | Recovery / Kette angepasst | Änderung mit Folgewirkung auf den weiteren Tagesablauf | 11 | P2 | Kettenlogik wird sichtbar, ohne in Komplexität oder Textwände zu kippen |
| 12 | Wizard / Einstieg | Ersatz für Settings-Dschungel; erklärt Haltung und Nutzen | 12 | P2 | Fühlt sich nicht wie Formular oder Setup-Hölle an; Nutzen des Wizards ist sofort verständlich |
| 13 | Wizard / Kettenfrage | Einzelweg vs. Alltagskette sauber unterscheiden | 13 | P1 | Nutzer versteht Kettenlogik intuitiv; Frage wirkt lebensnah statt technisch |
| 14 | Wizard / Bewegungsstil / Tageslage | Präferenzmodell und Tagesrealität erfassen | 14 | P2 | Fragen sind alltagsnah, nicht klinisch; Antworten lassen sich sichtbar in Vorschläge übersetzen |
| 15 | Chain Summary | Zeigt, was CatchIt aus Vorhaben + Präferenzen gemacht hat | 15 | P1 | Summary wirkt wie Systemverständnis, nicht wie Settings-Review |
| 16 | Quick Change / Snack oder späterer Bus | Spontane Abweichung ohne Planungsbruch | 16 | P1 | App zeigt, dass Ketten flexibel tragfähig bleiben; Änderung zerstört nicht den Gesamtfluss |

---

## Zusatzset: 4 Spezial-Screens

| Nr. | Screen | Zweck | Reihenfolge | Priorität | Gate-Kriterium |
|---|---|---|---:|---|---|
| 17 | Neutral Label vs User Label | Zeigt Datenschutz-, ND- und Sozialrobustheits-Haltung | 17 | P3 | Unterschied zwischen neutraler Außendarstellung und persönlicher Bedeutung ist klar und elegant gelöst |
| 18 | Lockscreen-safe Notification | Diskrete, sichere Relevanzkommunikation im öffentlichen Raum | 18 | P3 | Notification verrät nicht unnötig private Kontexte und bleibt trotzdem handlungsrelevant |
| 19 | Accessibility Variant / Large Text + Reduced Motion | Beweist, dass das System auch unter Zugänglichkeitsanforderungen stabil bleibt | 19 | P3 | Informationshierarchie funktioniert auch mit großem Text und reduzierter Bewegung |
| 20 | Voice-safe Assist Screen | Zeigt sprach-/audioverträgliche Unterstützung ohne Peinlichkeits- oder Privacy-Falle | 20 | P4 | Assistenz ist sozial sicher, ND-tauglich und nicht aufdringlich |

---

## Empfohlene Bau-Reihenfolge in 5 Sprints

### Sprint 1 — Zustandsfamilie Main
1. Main / Stable / Blue  
2. Main / Bald Relevant / Green  
3. Main / Fragil / Yellow  
4. Main / Kritisch / Red  

**Ziel:** Farblogik, Hierarchie, Zustandssemantik und Invarianten festzurren.

---

### Sprint 2 — Raum und Handlung
5. Main → Map Reveal  
6. Map Focus  
7. Go Mode / Walk to Stop  
8. Go Mode / In Vehicle  

**Ziel:** Spatial Assist und Exekution als Fortsetzung derselben Oberfläche beweisen.

---

### Sprint 3 — Vertrauen unter Realität
9. Recovery / Simple Switch  
10. Recovery / Recheck nötig  
11. Recovery / Kette angepasst  

**Ziel:** CatchIt zeigt nicht nur Idealzustände, sondern bleibt auch bei Störung belastbar.

---

### Sprint 4 — Wizard und Kette
12. Wizard / Einstieg  
13. Wizard / Kettenfrage  
14. Wizard / Bewegungsstil / Tageslage  
15. Chain Summary  
16. Quick Change / Snack oder späterer Bus  

**Ziel:** sichtbar machen, warum CatchIt andere Vorschläge macht als klassische Transit-Apps.

---

### Sprint 5 — Trust / ND / Accessibility
17. Neutral Label vs User Label  
18. Lockscreen-safe Notification  
19. Accessibility Variant / Large Text + Reduced Motion  
20. Voice-safe Assist Screen  

**Ziel:** Haltung und Robustheit im System selbst verankern.

---

## Wichtigste Präsentationsfolge für Stakeholder

Wenn du nicht alle 20 Screens zeigen willst, sondern schnell die Idee verkaufen musst, nimm diese Reihenfolge:

1. Main / Stable / Blue  
2. Main / Bald Relevant / Green  
3. Main → Map Reveal  
4. Map Focus  
5. Recovery / Simple Switch  
6. Wizard / Kettenfrage  
7. Chain Summary  
8. Quick Change / Snack oder späterer Bus  
9. Neutral Label vs User Label  
10. Accessibility Variant  

Damit beweist du in kurzer Folge:
- CatchIt ist keine Suchmaske
- CatchIt verdichtet Wahrheit
- Karte ist situativ, nicht Standard
- Recovery ist Teil des Produkts
- Kettenlogik ist Kern, nicht Zusatz
- Trust/ND/Accessibility sind eingebaut, nicht nachträglich draufgesetzt

---

## Priorisierte Minimalmenge für ein erstes starkes Systempaket

Falls du zunächst nicht alles bauen willst, sondern den stärksten Kern:

### Unbedingt zuerst
- 1 Main / Stable / Blue
- 2 Main / Bald Relevant / Green
- 5 Main → Map Reveal
- 7 Go Mode / Walk to Stop
- 9 Recovery / Simple Switch
- 13 Wizard / Kettenfrage
- 15 Chain Summary
- 16 Quick Change / Snack oder späterer Bus

Das ist der kleinste Satz, der CatchIt schon als eigenes Produktdenken beweist.

---

## Harte Gates zwischen den Sprints

### Nach Sprint 1 muss klar sein:
- Was bleibt in allen Main States gleich?
- Was ändert sich nur farblich?
- Was ändert sich in Dichte, Ton, Gewichtung?
- Wo kippt Reassurance in Handlungsdruck?

### Nach Sprint 2 muss klar sein:
- Wann wird Raumhilfe eingeblendet?
- Was bleibt auch mit Karte unverändert?
- Wann wird aus Beobachtung tatsächliche Exekution?

### Nach Sprint 3 muss klar sein:
- Wann regelt CatchIt selbst?
- Wann fordert CatchIt Recheck?
- Wie kommuniziert CatchIt Änderungen ohne Vertrauensverlust?

### Nach Sprint 4 muss klar sein:
- Welche Wizard-Antworten beeinflussen welche Vorschlagslogik?
- Wie wird aus Vorhaben und Präferenzen eine tragfähige Kette?
- Warum sehen die drei Vorschläge anders aus als bei Standard-Apps?

### Nach Sprint 5 muss klar sein:
- Wie schützt das System soziale und private Bedeutung?
- Wie robust bleibt die UI bei Accessibility-Anpassungen?
- Welche Teile der Haltung sind jetzt sichtbar im Interface verankert?

---

## Eine einfache Ampel für deine Arbeitsplanung

### Grün: sofort bauen
- 1, 2, 5, 7, 9, 13, 15, 16

### Gelb: direkt danach
- 3, 4, 6, 8, 10, 11, 12, 14

### Blau: Präsentations-/Haltungs-Layer
- 17, 18, 19, 20

Wenn du willst, mache ich dir daraus im nächsten Schritt ein **copy-paste-fähiges Screen-Spec-Template**, das du für jeden dieser 20 Screens identisch ausfüllen kannst.

---

# chatgpt response

Das ist die richtige Entscheidung.  
Und sie ist **nicht nur visuell**, sondern systemisch wichtig.

Mit deiner Korrektur ist die Farbsemantik jetzt deutlich sauberer:

# Farbmodell von CatchIt

## Blau
**ruhig / neutral / noch nicht relevant**

Bedeutet:
- aktuell kein Handlungsdruck
- Lage ist stabil oder noch nicht operativ
- CatchIt beobachtet
- Nutzer muss noch nichts tun

## Grün
**relevant und gut tragfähig**

Bedeutet:
- jetzt wird es wichtig
- aber die Lage ist gut
- CatchIt ist zuversichtlich
- der Ablauf ist stimmig und handhabbar

Wichtig:  
Grün ist nicht nur „alles okay“, sondern eher  
**„jetzt sinnvoll relevant, aber weiterhin gut tragfähig“**

## Gelb
**Änderung erkannt, CatchIt reagiert bereits**

Bedeutet:
- die Lage ist nicht mehr ideal stabil
- CatchIt hat die Änderung erkannt
- CatchIt arbeitet aktiv an einer passenden Alternative
- Gelb ist noch **kein Handlungsaufruf**, sondern ein **Systemreaktionszustand**

Das ist stark, weil Gelb dadurch nicht nach „Warnung“ klingt, sondern nach:

> „Etwas hat sich verändert. Ich kümmere mich.“

Das ist viel CatchIt-hafter als klassisches Alarm-Gelb.

## Orange
**Handlungsnotwendigkeit**

Bedeutet:
- jetzt reicht Beobachtung nicht mehr
- der Nutzer muss etwas tun
- CatchIt kann helfen, aber nicht mehr nur still im Hintergrund regeln

Das ist im Grunde der eigentliche **Action-State**.

Und genau deshalb ist es gut, Orange zwischen Gelb und Rot einzuziehen.

## Rot
**sicher gescheitert / das wird nichts mehr**

Bedeutet:
- diese Option ist nicht mehr tragfähig
- kein kosmetischer Warnzustand
- keine bloße Dringlichkeit
- sondern ein eindeutiges **Scheitern**

Das ist perfekt für deinen Wunsch, Rot extrem sparsam zu halten.

---

# Warum das besser ist als die alte 4er-Logik

Vorher war:

- Blau
- Grün
- Gelb
- Rot

Das Problem daran:
Gelb musste gleichzeitig leisten:
- Änderung
- Unsicherheit
- Handlungsnähe
- Vorwarnung
- drohendes Scheitern

Das ist zu viel für eine Farbe.

Mit Orange entkoppelst du jetzt zwei verschiedene Dinge:

## Gelb = CatchIt arbeitet
## Orange = du musst jetzt handeln

Das ist viel präziser.

---

# Die neue CatchIt-Zustandslogik

## Empfohlene Lesart

### Blau
Noch kein operativer Moment

### Grün
Operativer Moment, aber gut tragfähig

### Gelb
Abweichung erkannt, CatchIt kompensiert / sucht Alternative

### Orange
Jetzt ist Nutzerhandlung nötig

### Rot
Diese Route / dieser Plan ist sicher nicht mehr tragfähig

---

# Das ist besonders gut für Vertrauen

Denn damit sagt CatchIt nicht sofort bei jeder Änderung:

> Achtung, Problem!

Sondern zuerst:

> Ich habe die Änderung gesehen. Ich prüfe / reguliere.

Das ist genau die Art von Entlastung, die dein Produkt verspricht.

---

# Konsequenz für die Screens

Deine Main-State-Familie ist damit nicht mehr 4, sondern eigentlich **5 Zustände**:

1. Main / Stable / Blue  
2. Main / Relevant / Green  
3. Main / Adaptive / Yellow  
4. Main / Action Needed / Orange  
5. Main / Failed / Red  

Das würde ich auch so umbenennen, weil die alten Namen nicht mehr ganz passen.

---

# Bessere Zustandsnamen

## Statt:
- Stable / Blue
- Bald Relevant / Green
- Fragil / Yellow
- Kritisch / Red

## Lieber:
- **Idle / Blue**
- **Ready / Green**
- **Adapting / Yellow**
- **Act Now / Orange**
- **Failed / Red**

Oder etwas CatchIt-näher auf Deutsch gedacht:

- **Ruhig / Blau**
- **Tragfähig / Grün**
- **Reagiert / Gelb**
- **Jetzt handeln / Orange**
- **Nicht mehr machbar / Rot**

---

# Besonders wichtig: Gelb darf nicht wie Orange aussehen

Sonst verlierst du die ganze schöne Logik wieder.

## Gelb sollte eher bedeuten:
- CatchIt ist aktiv
- Alternative wird geprüft oder vorbereitet
- leichte Instabilität
- aber noch keine hektische Aufforderung

Visuell also eher:
- warm
- aufmerksam
- regulierend
- kontrolliert

## Orange dagegen:
- deutlich klarer Handlungsimpuls
- enger
- direkter
- exekutiver

Nicht bloß „dunkleres Gelb“.

---

# Und Rot darf wirklich selten bleiben

Das ist richtig so.  
Rot sollte fast die Aussage haben:

> Selbst mit sinnvoller Reaktion und möglicher Aktion ist das jetzt nicht mehr zu retten.

Also nicht:
- „es wird knapp“
- „du solltest los“
- „wir haben eine Verspätung“

sondern:
- Anschluss sicher weg
- Kette an dieser Stelle nicht mehr tragfähig
- ursprünglicher Plan tot

---

# Was das für Recovery bedeutet

Diese Farbsemantik hilft dir auch enorm bei Recovery:

## Gelb
CatchIt erkennt Abweichung und versucht intern auf Grün zurückzukehren

## Orange
CatchIt hat eine Lösung, aber der Nutzer muss aktiv mitziehen

## Rot
CatchIt kann nur noch klar sagen, dass diese konkrete Lösung gescheitert ist und eine neue Kette nötig wird

Das ist sehr sauber.

---

# Meine Empfehlung für die Screen-Liste

Ich würde deine Kernzustände jetzt offiziell umstellen auf:

### A. Kernzustände
1. Main / Blue / Idle  
2. Main / Green / Ready  
3. Main / Yellow / Adapting  
4. Main / Orange / Action Needed  
5. Main / Red / Failed  

Dann verschiebt sich der Rest numerisch nach hinten, oder du belässt die Nummern intern und änderst nur die Semantik.

---

# Für Stakeholder ist das sogar besser erklärbar

Du kannst es fast in einem Satz sagen:

- **Blau** = noch ruhig  
- **Grün** = gut tragfähig  
- **Gelb** = CatchIt reagiert bereits  
- **Orange** = jetzt handeln  
- **Rot** = nicht mehr machbar  

Das ist sofort verständlich und deutlich stärker als klassisches „Ampelsystem mit ein bisschen Transit“.

---

# Was ich dir direkt empfehlen würde
Die alte Main-State-Familie im Konzept nicht mehr mit „Fragil“ und „Kritisch“ beschriften. Das ist zu unscharf.

**Fragil** könnte Gelb oder Orange meinen.  
**Kritisch** könnte Orange oder Rot meinen.

Besser sind Zustandsnamen, die die Verantwortungslogik sauber trennen:
- System reagiert
- Nutzer handelt
- Plan scheitert

Das ist der eigentliche Unterschied.

Wenn du willst, formuliere ich dir daraus direkt eine **bereinigte Zustandsmatrix mit Farbe, Bedeutung, Nutzerrolle, CatchIt-Rolle und UI-Konsequenz**.

---

# chatgpt response

## CatchIt Zustandsmatrix

Diese Matrix trennt sauber:

- **was passiert**
- **wer gerade „dran“ ist**
- **wie CatchIt sich verhalten soll**
- **was die UI daraus machen darf**
- **was die Farbe ausdrücklich nicht bedeuten soll**

---

# 1. Kernlogik in einem Satz

**Blau** = noch ruhig  
**Grün** = tragfähig und relevant  
**Gelb** = Änderung erkannt, CatchIt reagiert  
**Orange** = Nutzer muss jetzt handeln  
**Rot** = diese Lösung ist sicher nicht mehr tragfähig

---

# 2. Master-Matrix

| Zustand | Farbe | Bedeutung | Rolle des Nutzers | Rolle von CatchIt | UI-Konsequenz | Darf nicht bedeuten |
|---|---|---|---|---|---|---|
| **Idle** | Blau | Noch kein akuter Handlungsdruck | beobachten / nicht nachdenken müssen | überwachen, ruhig halten | luftige Ruhe, minimale Dichte, keine operative Zuspitzung | „egal“, „leer“, „unwichtig“ |
| **Ready** | Grün | Jetzt relevant, aber gut tragfähig | mental bereit sein | Sicherheit geben, Orientierung verdichten | klare Relevanz, aber ohne Hektik | „Gewinner“, „optimale mathematische Route“ |
| **Adapting** | Gelb | Änderung erkannt, CatchIt reagiert bereits | noch nicht handeln müssen, nur aufmerksam bleiben | prüfen, alternative tragfähige Wege finden, idealerweise zurück zu Grün führen | leichte Instabilität sichtbar, aber kontrolliert; keine Alarmästhetik | „Warnung“, „du hast ein Problem“, „jetzt sofort los“ |
| **Act Now** | Orange | Eine passende Lösung existiert, aber Nutzerhandlung ist jetzt nötig | handeln | Handlung klar machen, Entscheidung entlasten | stärkere Verdichtung, klarer Exekutionsfokus | „gescheitert“, „alles rot“, „Panik“ |
| **Failed** | Rot | Diese konkrete Lösung ist nicht mehr tragfähig | alte Lösung loslassen, neue Basis akzeptieren | klar benennen, nicht beschönigen | selten, eindeutig, hart, fokussiert | „wird knapp“, „bisschen verspätet“, „vorsichtshalber rot“ |

---

# 3. Ausformuliert pro Zustand

## 1. Idle / Blau

### Bedeutung
Die Lage ist noch ruhig oder noch nicht operativ relevant.

### Nutzerrolle
Der Nutzer muss noch nichts tun und idealerweise nicht grübeln.

### CatchIt-Rolle
CatchIt beobachtet und hält die Oberfläche ruhig.

### UI-Folgen
- viel Luft
- klare Hauptwahrheit
- keine unnötige Dringlichkeit
- Vorschläge sind da, aber noch nicht exekutiv zugespitzt

### Nicht verwechseln mit
- Leere
- Untätigkeit
- „keine Daten“

---

## 2. Ready / Grün

### Bedeutung
Jetzt wird es relevant, aber der Ablauf ist gut tragfähig.

### Nutzerrolle
Der Nutzer darf sich innerlich darauf einstellen, bald zu handeln.

### CatchIt-Rolle
CatchIt sagt im Grunde:  
**„Es wird jetzt wichtig, aber du bist gut aufgestellt.“**

### UI-Folgen
- gleiche Grundhierarchie wie Blau
- spürbar mehr Relevanz
- leicht mehr operative Spannung
- trotzdem ruhig und zuversichtlich

### Nicht verwechseln mit
- „die beste Route“
- „alles perfekt“
- sportliche Optimierung

---

## 3. Adapting / Gelb

### Bedeutung
Etwas hat sich verändert. CatchIt hat das erkannt und arbeitet bereits an einer passenden Reaktion.

### Nutzerrolle
Der Nutzer muss noch nicht sofort handeln, aber sollte offen für eine Anpassung sein.

### CatchIt-Rolle
CatchIt kompensiert, prüft, rechnet um, sucht eine Alternative, versucht wieder auf Grün zu kommen.

### UI-Folgen
- Änderung wird sichtbar
- aber nicht als Alarm
- leichte Spannung
- Hinweise auf Anpassung oder alternative Tragfähigkeit
- semantisch eher „ich kümmere mich“ als „Achtung!“

### Nicht verwechseln mit
- orangefarbener Handlungsdruck
- klassischer Warnzustand
- drohendes Scheitern

---

## 4. Act Now / Orange

### Bedeutung
Eine sinnvolle Lösung ist da, aber jetzt muss der Nutzer aktiv mitgehen.

### Nutzerrolle
Nicht mehr nur beobachten. Jetzt ist exekutive Handlung nötig.

### CatchIt-Rolle
CatchIt reduziert Interpretationslast und macht konkret:
- was jetzt zu tun ist
- wohin
- wie dringend
- was der nächste sinnvolle Schritt ist

### UI-Folgen
- deutlich stärkere operative Verdichtung
- weniger Überblick, mehr Exekution
- klare Priorisierung
- Handlung vor Analyse

### Nicht verwechseln mit
- gescheitert
- final verloren
- roter Krisenzustand

---

## 5. Failed / Rot

### Bedeutung
Diese konkrete Route, Kette oder Option ist nicht mehr tragfähig.

### Nutzerrolle
Nicht mehr retten wollen, sondern neue Realität akzeptieren.

### CatchIt-Rolle
CatchIt soll hier nicht beschönigen.  
Es soll klar sagen: **„Das klappt so nicht mehr.“**

### UI-Folgen
- selten
- knapp
- eindeutig
- kein dekorativer Einsatz
- kein „fast rot“
- nur bei echter Unrettbarkeit

### Nicht verwechseln mit
- Verspätung
- Nervosität
- bloßer Unsicherheit
- Handlungsbedarf

---

# 4. Rollenlogik: Wer trägt gerade die Last?

| Zustand | Hauptlast liegt bei |
|---|---|
| Blau | CatchIt |
| Grün | CatchIt |
| Gelb | CatchIt |
| Orange | Nutzer |
| Rot | Realität |

Das ist wichtig.

## Lesart
- In **Blau, Grün, Gelb** versucht CatchIt, die Last weitgehend selbst zu tragen.
- In **Orange** muss der Nutzer wieder ins Handeln.
- In **Rot** ist die Lage nicht mehr durch gutes UI „wegzudesignen“.

Das ist eine sehr starke Produktlogik.

---

# 5. Recovery-Logik passend zu den Farben

| Farbe | Recovery-Bedeutung |
|---|---|
| Blau | kein Recovery nötig |
| Grün | tragfähige Lage erreicht |
| Gelb | CatchIt arbeitet an Recovery |
| Orange | Recovery möglich, aber nur mit Nutzerhandlung |
| Rot | diese konkrete Recovery ist gescheitert, neue Lösung nötig |

Damit wird Gelb endlich sauber:
**Gelb ist nicht Problemfarbe, sondern Reaktionsfarbe.**

Das ist stark.

---

# 6. Konkrete UI-Konsequenzen pro Farbe

## Blau
- größte Ruhe
- meiste Luft
- wenig Nebensignale
- kaum Bewegungsdruck

## Grün
- etwas mehr operative Schärfe
- aber weiterhin ruhig
- Vertrauen statt Aufregung

## Gelb
- sichtbare Veränderung
- subtile Reibung
- leicht erhöhte Dichte
- alternative Tragfähigkeit erkennbar

## Orange
- klare Exekutionssignale
- stärkere Verdichtung
- weniger optionale Infos
- Fokus auf nächsten Schritt

## Rot
- maximal klar
- keine stilistische Spielerei
- keine übermäßige Informationsfülle
- lieber eindeutig als elegant

---

# 7. Gute Zustandsnamen

Ich würde sie intern so benennen:

| Farbe | Empfohlener State-Name |
|---|---|
| Blau | **Idle** |
| Grün | **Ready** |
| Gelb | **Adapting** |
| Orange | **Act Now** |
| Rot | **Failed** |

Oder auf Deutsch:

| Farbe | Deutscher Arbeitsname |
|---|---|
| Blau | **Ruhig** |
| Grün | **Tragfähig** |
| Gelb | **Reagiert** |
| Orange | **Jetzt handeln** |
| Rot | **Nicht mehr machbar** |

Deutsch ist semantisch klarer. Englisch ist für Specs oft handlicher.

---

# 8. Was das für deine bisherige Screenliste bedeutet

Deine bisherige Kernfamilie sollte eigentlich umgestellt werden auf:

1. **Main / Idle / Blue**  
2. **Main / Ready / Green**  
3. **Main / Adapting / Yellow**  
4. **Main / Act Now / Orange**  
5. **Main / Failed / Red**

Das ist sauberer als:
- Stable
- Bald Relevant
- Fragil
- Kritisch

Denn:
- **Fragil** ist zu unscharf
- **Kritisch** vermischt Orange und Rot

---

# 9. Entscheidungsregel für Orange vs. Rot

Das ist die wichtigste Trennlinie.

## Orange, wenn:
- noch eine tragfähige Handlung existiert
- der Nutzer durch rechtzeitiges Handeln noch etwas retten kann
- CatchIt noch sinnvoll leiten kann

## Rot, wenn:
- diese konkrete Option sicher nicht mehr klappt
- rechtzeitiges Handeln nicht mehr genügt
- der Plan an dieser Stelle faktisch tot ist

**Merksatz:**  
**Orange = noch machbar, aber nicht mehr passiv.**  
**Rot = nicht mehr machbar.**

---

# 10. Kompaktfassung für dein Design-Dokument

**Standard Title: **

CatchIt uses a five-step state logic:

Blue = calm, not yet operationally urgent  
Green = relevant and still fully viable  
Yellow = a change was detected and CatchIt is already adapting  
Orange = user action is now required  
Red = this specific option is no longer viable

Important:
Yellow is not a warning state.
Yellow means the system is reacting and trying to restore a viable path.

Orange is the real action-needed state.

Red should be used extremely rarely and only when a solution is clearly no longer workable.

---

# 11. Meine Empfehlung
Ab jetzt würde ich in allen Specs, Prompts und Design-Tabellen **Orange explizit als eigene Stufe** führen.  
Sonst fällt Gelb früher oder später wieder zurück in die Rolle von „alles Mögliche gleichzeitig“, und dann wird die Logik weich.

Wenn du willst, mache ich dir daraus direkt noch eine **State-Spec-Tabelle pro Zustand** mit:
- Trigger
- Nutzerrolle
- CatchIt-Rolle
- sichtbare Elemente
- verborgene Elemente
- Tonalität
- Kill Criteria.

---

# chatgpt response

## CatchIt State Spec Table

Diese Tabelle ist so gebaut, dass du sie direkt in dein Design-Dokument, in Figma-Annotations oder in ein System-Spec übernehmen kannst.

---

# 1. Main / Idle / Blue

| Feld | Definition |
|---|---|
| **State Name** | Main / Idle / Blue |
| **Kurzdefinition** | Noch kein akuter Handlungsdruck. CatchIt hält die Lage ruhig, klar und lesbar. |
| **Trigger** | Route/Kette ist vorhanden, aber noch nicht operativ relevant. Keine störende Abweichung, kein unmittelbarer Entscheidungsdruck. |
| **Nutzerrolle** | Beobachten dürfen, nicht nachdenken müssen. |
| **CatchIt-Rolle** | Überwachen, beruhigen, vorverdichten, aber nicht zuspitzen. |
| **Primäre Wahrheit** | „Es ist alles vorbereitet. Noch ist nichts akut.“ |
| **Sichtbare Elemente** | große Countdown-Bubble, 3 präferenzgebundene Optionen, ruhige Grundstruktur, minimale Zusatzinfos |
| **Unterdrückte Elemente** | Karte, Recovery-Logik, aggressive Statussignale, detaillierte Vergleichsinfos |
| **Informationsdichte** | niedrig |
| **Tonalität** | ruhig, souverän, beiläufig präsent |
| **Visuelle Konsequenz** | viel Luft, stabile Vertikalachse, keine operative Verdichtung |
| **Darf nicht bedeuten** | leer, unwichtig, datenarm, passiv |
| **Kill Criteria** | Wenn der Screen wie eine Startseite ohne Relevanz wirkt, wenn schon Hektik entsteht, wenn zu viele Details sichtbar sind, wenn die 3 Optionen wie Suchresultate aussehen |

---

# 2. Main / Ready / Green

| Feld | Definition |
|---|---|
| **State Name** | Main / Ready / Green |
| **Kurzdefinition** | Jetzt wird es relevant, aber der Ablauf ist gut tragfähig. |
| **Trigger** | Ein sinnvoller Handlungszeitpunkt nähert sich. Keine problematische Änderung, keine nötige Umplanung. |
| **Nutzerrolle** | Mental bereit sein, bald handeln können. |
| **CatchIt-Rolle** | Relevanz erhöhen, ohne Stress zu erzeugen. |
| **Primäre Wahrheit** | „Jetzt wird es wichtig, aber du bist gut aufgestellt.“ |
| **Sichtbare Elemente** | Countdown-Bubble, 3 Optionen, leicht stärkere operative Zuspitzung, ggf. klarerer Fokus auf die plausibelste aktuelle Option |
| **Unterdrückte Elemente** | Karte, Recovery, übermäßige Vergleichstiefe |
| **Informationsdichte** | niedrig bis leicht erhöht |
| **Tonalität** | zuversichtlich, vorbereitet, wach |
| **Visuelle Konsequenz** | gleiche Hierarchie wie Blau, aber spürbar mehr Relevanz |
| **Darf nicht bedeuten** | Sieg, Optimierung, mathematisch beste Route |
| **Kill Criteria** | Wenn Grün wie Alarm wirkt, wenn der Unterschied zu Blau nur dekorativ ist, wenn der Screen schon wie Exekution aussieht |

---

# 3. Main / Adapting / Yellow

| Feld | Definition |
|---|---|
| **State Name** | Main / Adapting / Yellow |
| **Kurzdefinition** | Eine Änderung wurde erkannt. CatchIt reagiert bereits und versucht, wieder auf eine tragfähige Lage zu kommen. |
| **Trigger** | Verspätung, veränderte Lage, fragliche Anschlusslage, Alternativpfad wird geprüft oder vorbereitet. |
| **Nutzerrolle** | Noch nicht handeln müssen, aber offen für eine Anpassung bleiben. |
| **CatchIt-Rolle** | Kompensieren, neu bewerten, alternative tragfähige Wege vorbereiten. |
| **Primäre Wahrheit** | „Etwas hat sich verändert. Ich kümmere mich.“ |
| **Sichtbare Elemente** | weiter Countdown + Optionen, Hinweis auf veränderte Lage, subtile Zeichen von Anpassung, evtl. neue Passungsmarker |
| **Unterdrückte Elemente** | harte Alarmästhetik, finale Handlungsaufforderung, Rot-Semantik |
| **Informationsdichte** | mittel |
| **Tonalität** | aufmerksam, regulierend, kontrolliert |
| **Visuelle Konsequenz** | leichte Reibung sichtbar, aber keine Panik; Änderung ist lesbar, ohne zum Problem-UI zu kippen |
| **Darf nicht bedeuten** | Warnung, Scheitern, sofort handeln |
| **Kill Criteria** | Wenn Gelb wie Orange aussieht, wenn es wie eine Fehlermeldung wirkt, wenn keine aktive CatchIt-Reaktion erkennbar ist |

---

# 4. Main / Act Now / Orange

| Feld | Definition |
|---|---|
| **State Name** | Main / Act Now / Orange |
| **Kurzdefinition** | Eine sinnvolle Lösung ist vorhanden, aber jetzt ist Nutzerhandlung nötig. |
| **Trigger** | Der Nutzer muss jetzt losgehen, wechseln, reagieren oder sich für eine noch tragfähige Option entscheiden. |
| **Nutzerrolle** | Handeln. Nicht mehr nur beobachten. |
| **CatchIt-Rolle** | Interpretationslast reduzieren, nächsten Schritt glasklar machen. |
| **Primäre Wahrheit** | „Jetzt handeln, dann bleibt es machbar.“ |
| **Sichtbare Elemente** | klare Exekutionssignale, verdichtete Informationen, nächste Handlung prominent, ggf. Raumhilfe/Karte stärker zugänglich |
| **Unterdrückte Elemente** | breite Vergleichsinfos, ruhige Neutralität, unnötige Nebendetails |
| **Informationsdichte** | mittel bis hoch, aber fokussiert |
| **Tonalität** | direkt, klar, exekutiv |
| **Visuelle Konsequenz** | stärkere Verdichtung, weniger Optionalität, Fokus auf nächste Aktion |
| **Darf nicht bedeuten** | gescheitert, hoffnungslos, final verloren |
| **Kill Criteria** | Wenn Orange wie Rot aussieht, wenn der Nutzer nicht sofort versteht, was zu tun ist, wenn zu viele Optionen gleichzeitig sichtbar bleiben |

---

# 5. Main / Failed / Red

| Feld | Definition |
|---|---|
| **State Name** | Main / Failed / Red |
| **Kurzdefinition** | Diese konkrete Option oder Kette ist sicher nicht mehr tragfähig. |
| **Trigger** | Anschluss sicher verpasst, Route nicht mehr rettbar, Zeitfenster faktisch gebrochen. |
| **Nutzerrolle** | Alte Lösung loslassen. Neue Realität akzeptieren. |
| **CatchIt-Rolle** | Klar benennen, nicht beschönigen, neue Basis vorbereiten. |
| **Primäre Wahrheit** | „Das klappt so nicht mehr.“ |
| **Sichtbare Elemente** | eindeutige Problembennung, ggf. neue nächste tragfähige Basis, minimale Rettungs-/Neustartlogik |
| **Unterdrückte Elemente** | kosmetische Zuversicht, weiche Sprache, unnötige Optimierungsdetails |
| **Informationsdichte** | fokussiert niedrig bis mittel |
| **Tonalität** | selten, klar, hart, ehrlich |
| **Visuelle Konsequenz** | Rot nur in eindeutigen Scheiterfällen, kein dekorativer Einsatz |
| **Darf nicht bedeuten** | knapp, fraglich, bitte beeilen |
| **Kill Criteria** | Wenn Rot für bloße Unsicherheit genutzt wird, wenn es wie Orange-plus aussieht, wenn rote Zustände zu häufig auftreten |

---

# 6. Spatial Assist / Map Reveal

| Feld | Definition |
|---|---|
| **State Name** | Spatial Assist / Map Reveal |
| **Kurzdefinition** | Der Main Screen verdichtet sich, und aus dem unteren Bereich wird räumliche Unterstützung freigelegt. |
| **Trigger** | Swipe-up, situativer Bedarf nach räumlicher Sicherheit, Annäherung an Exekution |
| **Nutzerrolle** | Räumlich absichern, ohne den Kernscreen zu verlassen |
| **CatchIt-Rolle** | Orientierung ergänzen, nicht übernehmen |
| **Primäre Wahrheit** | „Hier ist zusätzliche Raumhilfe, ohne dass du die Hauptwahrheit verlierst.“ |
| **Sichtbare Elemente** | gleiche Bubble-Hierarchie, gleiche Optionen, weich eingeblendete Map-Zone unten |
| **Unterdrückte Elemente** | Bottom Sheet, separater Kartenscreen, modulare Dashboard-Blöcke |
| **Informationsdichte** | mittel |
| **Tonalität** | ruhig, eingebettet, unterstützend |
| **Visuelle Konsequenz** | gleiche Oberfläche, höhere Dichte, Karte als untere Schicht |
| **Darf nicht bedeuten** | Map mode, Screenwechsel, Navigation takeover |
| **Kill Criteria** | Wenn die Karte der Hero wird, wenn ein Bottom Sheet sichtbar ist, wenn die Bubble zur Nebenfigur schrumpft |

---

# 7. Map Focus

| Feld | Definition |
|---|---|
| **State Name** | Spatial Assist / Map Focus |
| **Kurzdefinition** | Räumliche Orientierung wird dominanter, aber die Zeit- und Zustandswahrheit bleibt präsent. |
| **Trigger** | Nutzer vertieft Raumhilfe oder nähert sich einem räumlich kritischen Moment |
| **Nutzerrolle** | Raum lesen, ohne den situativen Takt zu verlieren |
| **CatchIt-Rolle** | Karte lesbarer machen, aber Hauptlogik nicht aufgeben |
| **Primäre Wahrheit** | „Die Orientierung wird gerade wichtiger, aber die Zeit bleibt maßgeblich.“ |
| **Sichtbare Elemente** | größere Kartenfläche, klarer Fußweg/Stop-Fokus, Zeitanker weiterhin sichtbar |
| **Unterdrückte Elemente** | reine Karten-App-Logik, Navigationschrome, überladene Kartendetails |
| **Informationsdichte** | mittel |
| **Tonalität** | fokussiert, ruhig, situativ |
| **Visuelle Konsequenz** | Karte gewinnt Raum, aber nicht die komplette Identität |
| **Darf nicht bedeuten** | Google Maps, turn-by-turn takeover |
| **Kill Criteria** | Wenn Zeitinformation verschwindet, wenn die Oberfläche wie eine Standard-Navi wirkt, wenn CatchIt-Hierarchie verloren geht |

---

# 8. Go Mode / Walk to Stop

| Feld | Definition |
|---|---|
| **State Name** | Go Mode / Walk to Stop |
| **Kurzdefinition** | Exekutionszustand für den Weg zur Haltestelle. Denken runter, Handeln rauf. |
| **Trigger** | Nutzer muss jetzt losgehen, um die tragfähige Option zu erreichen |
| **Nutzerrolle** | Gehen |
| **CatchIt-Rolle** | Nächsten Schritt maximal klar und belastungsarm machen |
| **Primäre Wahrheit** | „Jetzt losgehen. Das ist der Weg.“ |
| **Sichtbare Elemente** | verbleibende Zeit, verbleibender Weg, Zielhaltestelle, ruhige Raumhilfe |
| **Unterdrückte Elemente** | Mehrfachvergleiche, breite Kettenübersicht, unnötige Nebendetails |
| **Informationsdichte** | fokussiert |
| **Tonalität** | direkt, ruhig, körpernah |
| **Visuelle Konsequenz** | große Klarheit, wenig Auswahl, hohe Exekutionslesbarkeit |
| **Darf nicht bedeuten** | normales Navigationstool, Sport-/Tracking-App |
| **Kill Criteria** | Wenn der Screen wieder zum Analysieren einlädt, wenn zu viele alternative Optionen sichtbar bleiben, wenn die Handlung nicht eindeutig ist |

---

# 9. Go Mode / In Vehicle

| Feld | Definition |
|---|---|
| **State Name** | Go Mode / In Vehicle |
| **Kurzdefinition** | Exekutionszustand während der Fahrt. Weniger Losgehstress, mehr Begleitung und Übergangssicherheit. |
| **Trigger** | Nutzer ist eingestiegen oder befindet sich in der Transportphase |
| **Nutzerrolle** | Folgen, beobachten, sich rechtzeitig vorbereiten |
| **CatchIt-Rolle** | Übergänge absichern, nächste Relevanz früh genug verdichten |
| **Primäre Wahrheit** | „Du bist unterwegs. Ich halte den nächsten sinnvollen Punkt für dich im Blick.“ |
| **Sichtbare Elemente** | nächster relevanter Schritt, verbleibende Stops/Zeit, Umstiegsrelevanz, ruhige Zustandsführung |
| **Unterdrückte Elemente** | initiale Wizard-/Vergleichslogik, zu viele Planungsdetails |
| **Informationsdichte** | niedrig bis mittel |
| **Tonalität** | begleitend, stabil, wachsam |
| **Visuelle Konsequenz** | weniger Hektik als Walk-State, aber klare kommende Relevanz |
| **Darf nicht bedeuten** | reine Fahrtstatusanzeige ohne Handlungsperspektive |
| **Kill Criteria** | Wenn der Screen passiv wird, wenn der nächste relevante Schritt nicht klar lesbar ist, wenn es wie Live-Tracking ohne Entlastung wirkt |

---

# 10. Recovery / Simple Switch

| Feld | Definition |
|---|---|
| **State Name** | Recovery / Simple Switch |
| **Kurzdefinition** | CatchIt hat eine neue tragfähige Alternative gefunden, ohne den Nutzer unnötig zu belasten. |
| **Trigger** | ursprüngliche Option wird schlechter, aber eine einfache passende Alternative steht bereit |
| **Nutzerrolle** | zur Kenntnis nehmen, ggf. minimal mitgehen |
| **CatchIt-Rolle** | Änderung erklären, ohne Drama zu erzeugen |
| **Primäre Wahrheit** | „Es hat sich geändert. Ich habe eine einfache passende Alternative.“ |
| **Sichtbare Elemente** | neue Option, knappe Begründung, klare Fortsetzung |
| **Unterdrückte Elemente** | große Problemkommunikation, Alternativenflut |
| **Informationsdichte** | mittel |
| **Tonalität** | beruhigend, kompetent, kurz |
| **Visuelle Konsequenz** | Recovery als Entlastung, nicht als Fehlerzustand |
| **Darf nicht bedeuten** | Fail, Alarm, unkontrollierte Lage |
| **Kill Criteria** | Wenn Recovery wie ein Defekt wirkt, wenn zu viele Wahlmöglichkeiten wieder aufgemacht werden, wenn die neue Tragfähigkeit nicht klar ist |

---

# 11. Recovery / Recheck nötig

| Feld | Definition |
|---|---|
| **State Name** | Recovery / Recheck nötig |
| **Kurzdefinition** | CatchIt kann die Lage nicht glatt genug halten und braucht erneute Nutzeraufmerksamkeit. |
| **Trigger** | Datenlage unsicher, Alternativen nicht belastbar genug, neue Prüfung nötig |
| **Nutzerrolle** | nochmal hinschauen, aktiv bestätigen oder neu bewerten |
| **CatchIt-Rolle** | ehrlich Unsicherheit markieren, ohne Vertrauen zu verspielen |
| **Primäre Wahrheit** | „Ich kann das gerade nicht sauber genug für dich übernehmen. Bitte prüf nochmal.“ |
| **Sichtbare Elemente** | Unsicherheitsgrund, Recheck-Aufforderung, reduzierte klare Optionen |
| **Unterdrückte Elemente** | falsche Sicherheit, beschönigende Sprache |
| **Informationsdichte** | mittel |
| **Tonalität** | ehrlich, nüchtern, respektvoll |
| **Visuelle Konsequenz** | nicht alarmistisch, aber klar von Simple Switch getrennt |
| **Darf nicht bedeuten** | generischer Fehler, technischer Defekt, bloßes Gelb |
| **Kill Criteria** | Wenn unklar bleibt, warum Recheck nötig ist, wenn der Nutzer keine klare nächste Handlung erkennt, wenn der Zustand sich wie ein App-Bug anfühlt |

---

# 12. Recovery / Kette angepasst

| Feld | Definition |
|---|---|
| **State Name** | Recovery / Kette angepasst |
| **Kurzdefinition** | Eine Änderung betrifft nicht nur einen Abschnitt, sondern den weiteren Ablauf der Kette. |
| **Trigger** | Zwischenstopp, Rückweg, Folgeverpflichtung oder Zeitkorridor werden durch Änderung mitbeeinflusst |
| **Nutzerrolle** | neue Gesamtlage verstehen, aber nicht alles neu planen müssen |
| **CatchIt-Rolle** | Kettenfolge neu sortieren und als weiter tragfähig darstellen |
| **Primäre Wahrheit** | „Die Änderung betrifft mehr als diesen einen Schritt. Ich habe die Kette angepasst.“ |
| **Sichtbare Elemente** | knappe Kettenfortsetzung, geänderte Folgepunkte, klare neue Logik |
| **Unterdrückte Elemente** | Planungschaos, vollständige Neuberechnung als Textwand |
| **Informationsdichte** | mittel bis hoch, aber strukturiert |
| **Tonalität** | ordnend, souverän, entlastend |
| **Visuelle Konsequenz** | Kettenhaftigkeit wird sichtbar, ohne Projektplan-Charakter |
| **Darf nicht bedeuten** | Voll-Neuplanung durch den Nutzer |
| **Kill Criteria** | Wenn die Kette nicht visuell verständlich wird, wenn zu viel Text nötig ist, wenn es wie ein kompliziertes Planungstool aussieht |

---

# 13. Wizard / Einstieg

| Feld | Definition |
|---|---|
| **State Name** | Wizard / Einstieg |
| **Kurzdefinition** | CatchIt erklärt seinen Nutzen über Vorhaben und Alltag, nicht über Settings. |
| **Trigger** | Erstnutzung oder relevante Neueinrichtung |
| **Nutzerrolle** | Vorhaben und Bewegungsrealität grob mitteilen |
| **CatchIt-Rolle** | Vertrauen aufbauen, nicht wie Setup wirken |
| **Primäre Wahrheit** | „Ich will verstehen, wie du unterwegs wirklich funktionieren musst.“ |
| **Sichtbare Elemente** | einfache, lebensnahe Einstiegsfrage, klare Nutzenkommunikation |
| **Unterdrückte Elemente** | Fachparameter, Schalterfriedhof, technische Begriffe |
| **Informationsdichte** | niedrig |
| **Tonalität** | freundlich, konkret, alltagsnah |
| **Visuelle Konsequenz** | Wizard fühlt sich wie Hilfe an, nicht wie Konfiguration |
| **Darf nicht bedeuten** | Onboarding-Showcase, Formularstrecke |
| **Kill Criteria** | Wenn es wie Settings aussieht, wenn zu viele Entscheidungen auf einmal verlangt werden, wenn der Produktnutzen nicht sofort klar wird |

---

# 14. Wizard / Kettenfrage

| Feld | Definition |
|---|---|
| **State Name** | Wizard / Kettenfrage |
| **Kurzdefinition** | CatchIt klärt, ob es um einen einzelnen Weg oder einen Tages-/Pflichtablauf mit Folgepunkten geht. |
| **Trigger** | Nach Wizard-Einstieg oder bei erkennbarer Mehrfachlogik |
| **Nutzerrolle** | Art des Vorhabens beschreiben |
| **CatchIt-Rolle** | Kettenlogik früh und einfach erfassen |
| **Primäre Wahrheit** | „Geht es nur um einen Weg, oder hängt heute mehr daran?“ |
| **Sichtbare Elemente** | alltagsnahe Frageform, einfache Auswahl-/Antwortstruktur |
| **Unterdrückte Elemente** | Flowcharts, komplexe Multi-Step-Builder |
| **Informationsdichte** | niedrig |
| **Tonalität** | pragmatisch, lebensnah |
| **Visuelle Konsequenz** | Kettenlogik erscheint als normaler Alltag, nicht als Sonderfunktion |
| **Darf nicht bedeuten** | Projektplanung, Business-Workflow |
| **Kill Criteria** | Wenn Nutzer die Frage nicht sofort versteht, wenn Kette technisch statt lebensnah wirkt, wenn die UI zu builder-artig wird |

---

# 15. Wizard / Bewegungsstil / Tageslage

| Feld | Definition |
|---|---|
| **State Name** | Wizard / Bewegungsstil / Tageslage |
| **Kurzdefinition** | Präferenzen und aktuelle Belastungsfaktoren werden so erhoben, dass spätere Vorschläge realistisch passen. |
| **Trigger** | nach Kettenfrage oder bei relevanter Profilbildung |
| **Nutzerrolle** | Bewegungsrealität und Tagesbesonderheiten angeben |
| **CatchIt-Rolle** | Reibungsprofil statt Settings-Liste erfassen |
| **Primäre Wahrheit** | „Was heute oder grundsätzlich deine Bewegung verändert, soll mitgedacht werden.“ |
| **Sichtbare Elemente** | einfache Auswahlfelder, alltagsnahe Formulierungen, kind-/stress-/geh-/wartebezogene Faktoren |
| **Unterdrückte Elemente** | technische Filter, schwere Parameterbegriffe |
| **Informationsdichte** | niedrig bis mittel |
| **Tonalität** | empathisch, praktisch, unprätentiös |
| **Visuelle Konsequenz** | kein Klinik-/Assessment-Gefühl, keine Settings-Hölle |
| **Darf nicht bedeuten** | Diagnostik, Profiling, Formularprüfung |
| **Kill Criteria** | Wenn die Fragen klinisch oder technisch wirken, wenn Antworten später nicht sichtbar auf Vorschläge einzahlen, wenn es wie versteckte Settings wirkt |

---

# 16. Chain Summary

| Feld | Definition |
|---|---|
| **State Name** | Chain Summary |
| **Kurzdefinition** | CatchIt zeigt, was es aus Vorhaben und Präferenzen verstanden hat und wie daraus tragfähige Vorschläge entstehen. |
| **Trigger** | Abschluss des Wizards oder relevante Neujustierung |
| **Nutzerrolle** | Verstanden fühlen, ggf. leicht korrigieren |
| **CatchIt-Rolle** | Verarbeitetes Alltagsmodell sichtbar machen |
| **Primäre Wahrheit** | „So denke ich deinen Ablauf und deine Bewegungsrealität mit.“ |
| **Sichtbare Elemente** | ruhige Kettenübersicht, Präferenzhinweise, verständliche Zusammenfassung |
| **Unterdrückte Elemente** | Settings-Review-Look, rohe Parameterlisten |
| **Informationsdichte** | mittel |
| **Tonalität** | ordnend, vertrauensbildend |
| **Visuelle Konsequenz** | Summary wirkt wie Verständnis, nicht wie Konfiguration |
| **Darf nicht bedeuten** | „Bitte kontrollieren Sie 27 Optionen“ |
| **Kill Criteria** | Wenn die Summary wie ein Einstellungsmenü aussieht, wenn kein klarer Bezug zu späteren Vorschlägen entsteht, wenn zu viel technische Sprache auftaucht |

---

# 17. Quick Change / Snack oder späterer Bus

| Feld | Definition |
|---|---|
| **State Name** | Quick Change |
| **Kurzdefinition** | Spontane Abweichung wird in die Kette integriert, ohne alles zu zerstören. |
| **Trigger** | Nutzer möchte kurz etwas einbauen, verschieben oder einen späteren Bus nehmen |
| **Nutzerrolle** | Abweichung äußern, nicht neu planen |
| **CatchIt-Rolle** | Flexibel umsortieren, Tragfähigkeit erhalten |
| **Primäre Wahrheit** | „Eine kleine Änderung muss nicht den ganzen Ablauf kaputtmachen.“ |
| **Sichtbare Elemente** | kleine Änderungsoption, neue plausible Kettenfortsetzung, knappe Auswirkung |
| **Unterdrückte Elemente** | Voll-Neuplanung, lange Listen, komplexe Optionenbäume |
| **Informationsdichte** | mittel |
| **Tonalität** | flexibel, gelassen, lösungsorientiert |
| **Visuelle Konsequenz** | Quick Change fühlt sich leicht an, nicht wie ein großer Eingriff |
| **Darf nicht bedeuten** | kompletter Rebuild, chaotische Re-Optimierung |
| **Kill Criteria** | Wenn die Änderung zu viel UI-Komplexität erzeugt, wenn der Nutzer wieder alles entscheiden muss, wenn Kettenrobustheit nicht sichtbar wird |

---

## Kompakte Zusatzregel für alle States

| Feld | Regel |
|---|---|
| **Invarianz** | Countdown-/Zustandslogik bleibt fast immer Vertrauensanker |
| **Verdichtung** | Mehr Relevanz = nicht automatisch mehr Module, sondern gezieltere Lesbarkeit |
| **Map-Prinzip** | Karte ist Unterstützung, nie Standard-Hero |
| **Recovery-Prinzip** | Erst CatchIt trägt die Last, dann der Nutzer, erst zuletzt die harte Wahrheit |
| **Wizard-Prinzip** | Vorhaben und Reibung erfassen, niemals wie Settings-Dschungel wirken |

## Schnellformel für Drift-Erkennung
Wenn ein Screen aussieht wie:
- normale Transit-App,
- Karten-App,
- Dashboard,
- Ergebnisliste,
- Formular,
- Error-Center,

dann ist er von CatchIt weggedriftet.

Wenn du willst, mache ich dir daraus als Nächstes eine **einheitliche Markdown-Vorlage pro Screen**, sodass du für alle 16 States nur noch copy-paste und ausfüllen musst.