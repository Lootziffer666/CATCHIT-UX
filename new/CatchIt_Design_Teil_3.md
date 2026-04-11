# CatchIt — Figma Screen Spec, Teil 1  
## Grundsystem, Präsentationslogik und Aufbauprinzipien

Dieses Paket übersetzt die CatchIt-SSOT, die vorhandene W3C-/Accessibility-MD sowie den aktuellen Repo-Stand in eine konkrete, Figma-taugliche Screen-Spezifikation. Es ist nicht als Marketing-Deck gedacht, sondern als Arbeitsgrundlage für kohärente Mockups, klickbare Flows und ein belastbares Design-System.

---

## 1. Ziel dieses Pakets

Dieses Paket soll drei Dinge gleichzeitig leisten:

1. **Designkohärenz sichern**  
   Alle Mockups sollen wie Teile desselben Produkts wirken, nicht wie lose explorative Screens.

2. **Produktwahrheit sichtbar machen**  
   CatchIt ist kein Fahrplan-Viewer, sondern ein Decision-Relief- und Reassurance-System.  
   Daher müssen die Screens Handlungssicherheit, Zustandsklarheit, Fallback und Kettenlogik sichtbar machen.

3. **Figma-Arbeit strukturieren**  
   Das Paket beschreibt:
   - welche Screens gebaut werden sollen
   - in welcher Reihenfolge sie gezeigt werden sollen
   - was auf jedem Screen zwingend sichtbar sein muss
   - welche Elemente primär, sekundär und optional sind
   - welche Interaktionen als Prototyp inszeniert werden sollten

---

## 2. Produktwahrheit, die in jedem Mockup spürbar bleiben muss

Jeder Screen muss auf mindestens eine der vier CatchIt-Kernfragen antworten:

- Was passiert als Nächstes?
- Wann muss ich handeln?
- Wie sicher ist der Plan gerade?
- Was ist die einfachste Alternative, wenn etwas kippt?

Wenn ein Mockup diese Fragen nicht beantwortet, ist es entweder zu ornamental oder zu transit-toolhaft.

---

## 3. Die drei Hauptmodi als oberste Struktur

Für die Figma-Arbeit gilt:

### Plan Mode
Der Nutzer erfasst Absichten und Ketten, nicht technische Routenparameter.

### Go Mode
Der Nutzer ist unterwegs oder kurz davor.  
Nur das Nächste zählt. Handlungsschwelle, Stabilität und operative Orientierung dominieren.

### Recovery Mode
Etwas kippt.  
Das System muss nicht möglichst viele Daten zeigen, sondern die einfachste Rettung lesbar machen.

Alle Screen-Spezifikationen in diesem Paket ordnen sich einem dieser Modi zu.

---

## 4. Die stärkste Präsentationslogik für dein Konzept

Dein Designkonzept wird am verständlichsten, wenn du es **nicht als App-Menü**, sondern als **Zustandsabfolge** präsentierst.

Empfohlene Reihenfolge in Figma:

1. **Main Screen / stabil / blau**
2. **Main Screen / bald relevant / grün**
3. **Main → Map Reveal**
4. **Map Reveal → Map Focus**
5. **Go Mode / Exekution**
6. **Quick Change / Snack / späterer Bus**
7. **Recovery Mode**
8. **Kettenübersicht**
9. **Wizard / Kette erfassen**
10. **Privacy / neutrale Labels**
11. **Accessibility / ND Support**
12. **Cathy Layer nur als nachgelagerte Rahmung**

Diese Reihenfolge erklärt CatchIt als Produkt besser als eine klassische Sitemap.

---

## 5. Allgemeines Layoutmodell für alle Smartphone-Screens

### Device-Frame
- iPhone-ähnlicher oder neutraler Smartphone-Frame
- keine Statusbar-Spielereien
- möglichst konsistente Safe Areas
- alle Screens im selben Viewport-Verhältnis

### Grid
- 4-pt Unterraster
- 8-pt Hauptsystem
- horizontale Außenabstände: 20–24 px
- vertikale Rhythmik: 8 / 12 / 16 / 24 / 32

### Vertikale Grundzonen
Jeder Screen sollte in folgende logische Zonen aufteilbar sein:

1. **Top Utility Zone**  
   Back, Close, More, Kontext, ggf. Status-Indikatoren

2. **Hero Zone**  
   zentrale Bubble, Hauptzustand, wichtigste semantische Aussage

3. **Operational Zone**  
   Linien, Optionen, aktive Auswahl, Gehweg-Karte, Fallback, Step-Inhalte

4. **Support Zone**  
   Zusatzinfos, Distanz, Gehzeit, neutrales Kontextwissen, Secondary Actions

Die Gewichtung dieser Zonen variiert je nach Screen-State.

---

## 6. Semantische Prioritäten statt Datenprioritäten

In Figma darf nicht das sichtbarste Element das datenreichste sein, sondern das **momentan wichtigste**.

Reihenfolge:
1. Handlung
2. Dringlichkeit
3. Stabilität / Confidence
4. beste Alternative
5. Details

Wenn ein Screen zuerst Liniennummern, Uhrzeiten oder Providerdetails zeigt, ist er falsch priorisiert.

---

## 7. Grundregel für Ketten

CatchIt ist explizit für Ketten gebaut.  
Deshalb muss in den Mockups regelmäßig sichtbar werden:

- aktueller Abschnitt
- nächster Abschnitt
- ggf. danach folgender Abschnitt
- Rückweg ist Teil derselben Logik
- spontane Änderung zerstört die Kette nicht, sondern moduliert sie

Jeder relevante Flow sollte mindestens ein Beispiel enthalten mit:
- Hinweg
- Zwischenziel
- Rückweg
- optionalem Zusatzstopp

---

## 8. Grundregel für ND-taugliche UX

Die Screens sollen maximal frictionless wirken, aber nicht magisch oder unlesbar.  
Daher gilt:

### Frictionless in Handlung
- klare Primary Action
- wenige Entscheidungen
- keine Formularlast
- keine versteckte Kerninformation

### Intentionale Friktion in Bedeutung
- editierbare Vorschläge statt übergriffige Auto-Benennung
- lesbare Übergänge bei Zustandswechseln
- sichtbare Replan-Logik
- neutrale öffentliche Sprache statt entblößender Semantik

Das muss im Mockup-Set sichtbar werden.

---

## 9. Öffentliche Oberfläche vs. private Bedeutung

Ein wichtiges CatchIt-Prinzip für Screen-Texte und Labels:

- öffentliche Screens zeigen neutrale, sozial robuste Begriffe
- private oder intime Details werden nicht automatisch exponiert
- Voice- und Lockscreen-Inhalte bleiben abstrahiert
- Nutzer können Bedeutung ergänzen, aber CatchIt behauptet sie nicht aggressiv

Beispiel:
- gut: „Arzttermin“, „Besorgung“, „Zwischenstopp“
- schlecht als Default: intime oder peinliche Detailformulierung

---

## 10. Figma-Datei-Struktur

Empfohlene Seiten im Figma-File:

### Seite 1 — Principles
- Produktkern
- Zustandslogik
- Kettenlogik
- ND/Trust-Prinzipien
- Intentional Friction

### Seite 2 — Tokens
- Farbe
- Typografie
- Spacing
- Radius
- Elevation
- Motion
- Semantik

### Seite 3 — Components
- Bubble
- Option Row
- Mini Chain Context
- Map Reveal Container
- Recovery Card
- Wizard Question Panel
- Cathy Layer Container

### Seite 4 — Core Screens
- Main
- Main Green
- Map Reveal
- Map Focus
- Go Mode
- Recovery

### Seite 5 — Planning / Chain
- Wizard
- Chain Summary
- Quick Change
- Return Logic

### Seite 6 — Trust / Privacy / Accessibility
- neutral labels
- voice-safe content
- high-contrast / large text
- reduced motion
- Cathy behavior rules

### Seite 7 — Prototype
- klickbarer Flow
- Gesten / Übergänge
- Zustandswechsel

---

## 11. Naming-Konvention für Frames

Empfohlenes Schema:

`[Mode]_[Screen]_[State]_[Variant]`

Beispiele:
- `GO_Main_Stable_Blue`
- `GO_Main_BaldRelevant_Green`
- `GO_MapReveal_WalkToBestStop_Default`
- `GO_MapFocus_ActiveLine21`
- `RECOVERY_Fallback_OneTapSwitch`
- `PLAN_Wizard_ChainQuestion_Continue`
- `PLAN_QuickChange_SnackStop_Insert`

So wird das File wartbar.

---

## 12. Mindestumfang für ein kohärentes Mockup-Set

Wenn du nur das Nötigste bauen willst, um das Konzept verständlich zu machen, reichen diese 8 Kernscreens:

1. Main / stabil / blau
2. Main / bald relevant / grün
3. Map Reveal
4. Map Focus
5. Go Mode / Schritt aktiv
6. Recovery / Plan kippt
7. Wizard / Kette erfassen
8. Chain Summary / Rückweg + Zusatzstopp

Wenn du die volle Produktwahrheit zeigen willst, erweitere auf 12–16 Screens.

---

## 13. Was ein guter CatchIt-Prototyp zeigen muss

Ein guter Prototyp zeigt nicht nur schöne Screens, sondern einen glaubwürdigen Ablauf:

- es gibt einen geplanten Kettenkontext
- der Main Screen verdichtet die Wahrheit
- Karte erscheint nur bei räumlichem Bedarf
- Bubble bleibt präsent
- spontane Änderung ist lokal und zerstört nicht alles
- Recovery zeigt die einfachste Rettung
- das System bleibt ruhig, lesbar und nicht transit-toolhaft

---

## 14. Nächste Teile dieses Pakets

- **Teil 2:** Core Screens im Detail  
- **Teil 3:** Planning, Ketten, Quick Changes  
- **Teil 4:** Components, Annotierungen, Prototyping  
- **Teil 5:** Welche Mockups du selbst bauen solltest, in welcher Reihenfolge und mit welchem Story-Ziel
# CatchIt — Figma Screen Spec, Teil 2  
## Core Screens: Main, Map Reveal, Map Focus, Go, Recovery

Dieser Teil definiert die wichtigsten Screens, die das CatchIt-Konzept tragen.

---

## 1. Screen: Main / Stable / Blue

### Zweck
Der Standard-Home-State.  
Er zeigt CatchIt nicht als Suchmaschine, sondern als Zustandsoberfläche.

### Produktbotschaft
„Du bist versorgt. Das ist der nächste relevante Zeitpunkt.“

### Muss sichtbar sein
- Status-Hintergrund in ruhigem Blau
- große Countdown-Bubble
- Label über oder bei der Bubble, z. B. „Spätestens los in“
- beste nächste Verbindung
- zwei weitere machbare Alternativen
- kleiner Kettenkontext, z. B.:
  - „Jetzt: Ergo-Therapie“
  - „Danach: zurück zur Kita“

### Darf sichtbar sein
- minimale Confidence / Stabilitätslesart
- sehr reduzierte Step-Position, z. B. „2 von 4“

### Darf nicht dominieren
- Karte
- Providerdaten
- technische Delay-Metadaten
- volle Timeline

### Informationshierarchie
1. Countdown
2. nächster Zweck
3. beste Option
4. Alternativen
5. Kettenkontext

### Layout-Empfehlung
- Top Utility klein und ruhig
- Bubble in der vertikalen Mitte
- Optionsbereich unten in 3 Slots
- Kontextzeile klein unter oder über Bubble

### Annotation in Figma
- Markiere, dass die drei Optionen **alle tragfähig** sind
- kennzeichne eine Option subtil als beste / aktivste
- erkläre, dass der Screen dieselbe Travel Truth enthält wie detailliertere Screens, nur verdichtet

---

## 2. Screen: Main / Bald Relevant / Green

### Zweck
Der Übergang vom ruhigen Zustand zur nahen Handlung.

### Produktbotschaft
„Es wird bald relevant. Achte jetzt darauf.“

### Unterschied zu Blau
Nicht nur Farbe ändert sich, sondern semantische Zuspitzung.

### Muss sichtbar sein
- grüner Hintergrund
- gleiche Bubble-Position
- engerer, spürbar handlungsnäherer Ton
- gleiche oder leicht fokussiertere Optionen
- Kettenkontext weiterhin sichtbar

### Gute Microcopy
- „Bald los“
- „Los in 10 Min“
- „Noch 10 Min bis Aufbruch“

### Gestaltungshinweise
- kein hektischer Alarmton in der Visualität
- eher beruhigende Aktivierung als Eskalation
- Kontrast und Lesbarkeit müssen in Grün stabil bleiben

### Annotation
- Zustand ist nicht „warning“, sondern „operative Relevanz beginnt“
- derselbe Screen darf nicht wie Fehlermodus wirken

---

## 3. Screen: Main → Map Reveal

### Zweck
Räumliche Orientierung bei Bedarf öffnen, ohne den Main Screen zu verlassen.

### Produktbotschaft
„Hier ist der Weg zur besten Haltestelle. Deine Kerninfos bleiben bei dir.“

### Interaktion
- Swipe up vom Main Screen
- Main-Inhalte verdichten sich nach oben
- Karte wächst aus dem unteren Bereich heraus

### Muss sichtbar sein
- Bubble bleibt oben präsent
- Hero-Bereich wird kompakter
- Karte zeigt Fußweg vom aktuellen Standort zur besten Haltestelle
- aktuelle beste Linie bleibt erkennbar
- ggf. Distanz/Gehzeit in reduzierter Form

### Darf sichtbar sein
- kleiner Hinweis wie „Beste Haltestelle in 6 Min“
- Route als simple, klare Linie

### Darf nicht passieren
- Bubble verschwindet
- Screen wirkt wie harter Modusbruch
- Karte übernimmt sofort alles

### Gestaltungshinweise
- Reveal statt Overlay
- die Karte ist zweite Ebene derselben Wahrheit
- Linien/Optionen rücken enger, aber bleiben lesbar

---

## 4. Screen: Map Focus

### Zweck
Der Nutzer will sich räumlich orientieren oder aktiv bewegen.

### Produktbotschaft
„Folge diesem Weg. Deine Zeit bleibt sichtbar.“

### Interaktion
- Tap auf die Karte nach Map Reveal
- Karte nimmt den Großteil des Screens ein
- Bubble bleibt oben als Zeitanker
- Zusatzinfos erscheinen unter der Karte

### Muss sichtbar sein
- Bubble oben
- große Karte
- Fußweg zur gewählten Haltestelle
- gewählte Linie
- Distanz
- vermutliche Gehzeit
- Ziel-Haltestelle

### Optional
- nächster markanter Richtungswechsel
- Board/Steig nur wenn wirklich relevant

### Nicht zeigen
- alle drei Optionen gleich stark
- zu viele Zusatzdaten
- komplette Verkehrsdiagnostik

### Informationshierarchie
1. Zeitanker
2. räumliche Orientierung
3. gewählte Linie
4. Gehzeit / Distanz
5. weitere Details

---

## 5. Screen: Go Mode / Active Step

### Zweck
Der Nutzer ist in Exekution.  
Nur das Nächste zählt.

### Produktbotschaft
„Das hier ist jetzt dran.“

### Muss sichtbar sein
- aktueller aktiver Schritt
- nächster direkt folgender Schritt
- zentrale Zeit-/Handlungsrelation
- Status der aktuellen Linie / des Abschnitts
- ggf. deutliche Handlungsformulierung:
  - „Jetzt losgehen“
  - „In Bus 21 einsteigen“
  - „Noch 3 Min bis Ankunft“

### Visuelle Struktur
- vertikal
- sequenziell
- minimaler Rückblick
- Zukunft nur vorbereitet, nicht dominant

### Gute UI-Muster
- aktiver Step groß
- erledigte Schritte beruhigt / komprimiert
- nächster Step kleiner vorausblickend

### Nicht tun
- zurück in Vergleichsmodus kippen
- Alternativen gleich stark zeigen wie die aktive Exekution

---

## 6. Screen: Recovery / Fallback

### Zweck
Etwas ist fragil, gekippt oder recheck-pflichtig.  
Der Screen muss sofort die einfachste Rettung zeigen.

### Produktbotschaft
„Etwas ist nicht mehr stabil. Hier ist dein einfachster sicherer Weg weiter.“

### Muss sichtbar sein
- klarer Zustandswechsel
- Problem in menschenlesbarer Sprache
- eine beste Rettung
- ggf. eine ruhige Reserve
- Aussage zur Kette:
  - „Rückweg bleibt machbar“
  - „Termin bleibt erreichbar“
  - „5 Min später weiter ist möglich“

### Darf sichtbar sein
- warum geändert wurde, in einem Satz
- Recheck-Status
- Fallback-Rolle

### Nicht sichtbar machen
- Datenfriedhof
- rohe Fehlersymptome
- unklare Alarmigkeit

### Gute Recovery-Microcopy
- „Diese Verbindung ist nicht mehr stabil.“
- „Einfachste Alternative aktiviert.“
- „Mit Bus 23 bleibst du im Plan.“
- „Der Rückweg wird mit angepasst.“

---

## 7. Screen: Kettenkontext-Mini-Modul für Core Screens

Auf fast allen Go-Screens sollte ein kleines, sehr reduziertes Kontextmodul existieren:

### Inhalt
- Jetzt
- Danach
- ggf. Danach danach

### Beispiel
- Jetzt: Therapie
- Danach: Kita
- Danach: Heimweg

### Form
- 1–2 Zeilen
- kleine Schrift
- nicht dominant
- beruhigend statt analytisch

Dieses Modul verhindert, dass CatchIt wie eine Einzelfahrt-App wirkt.

---

## 8. Übergänge zwischen den Core Screens

### Blau → Grün
- Farbübergang
- semantische Zuspitzung
- keine neue Seite nötig, kann als State-Variant gezeigt werden

### Main → Map Reveal
- vertikales Hochziehen
- Bubble bleibt im Blick
- Optionen verdichten

### Map Reveal → Map Focus
- Karte expandiert
- operative Infos wandern unter die Karte

### Main/Go → Recovery
- klar sichtbarer Zustandswechsel
- sofortige Einfachheit
- kein „erst analysieren, dann handeln“

---

## 9. Minimale Core-Screen-Reihe für Figma

Wenn du nur 5 Screens bauen willst, baue diese:

1. Main / Blue
2. Main / Green
3. Map Reveal
4. Map Focus
5. Recovery

Damit ist der Produktkern schon verständlich.
# CatchIt — Figma Screen Spec, Teil 3  
## Planning, Ketten, Rückwege, Quick Changes

Dieser Teil zeigt, wie CatchIt seine eigentliche Stärke sichtbar macht: Ketten statt Einzelfahrten.

---

## 1. Screen: Wizard / Einstieg

### Zweck
Nicht Routenparameter sammeln, sondern ein Vorhaben in eine tragfähige Kette übersetzen.

### Produktbotschaft
„Sag mir, was ansteht. Ich leite den Plan daraus ab.“

### Muss sichtbar sein
- einfache, menschliche Frage
- keine technische Formularsprache
- klare Single-Question-Stage
- Fortschritt durch lineare Panels

### Gute Fragefolge
1. Wohin musst du zuerst?
2. Wann musst du dort sein?
3. Musst du danach noch irgendwo hin?
4. Willst du danach zurück?
5. Ist heute etwas anders als sonst?

### Gestaltungsprinzip
- ein Gedanke pro Screen
- große, verständliche Antwortflächen
- möglichst wenig Freitext
- keine Parameterfriedhöfe

---

## 2. Screen: Wizard / Kettenfrage

### Zweck
CatchIt als Kettenprodukt definieren.

### Produktbotschaft
„Der Weg endet nicht beim ersten Ziel.“

### Muss sichtbar sein
- die Frage „Musst du danach noch irgendwo hin?“
- Antwortoptionen wie:
  - Ja
  - Nein
  - Ich will danach zurück
  - Vielleicht noch ein Stopp

### Anmerkung
Diese Frage ist kein Nebenfeld.  
Sie ist das zentrale Unterscheidungsmerkmal zu normalen Transit-Apps.

---

## 3. Screen: Wizard / Micro-Need oder Tageslage

### Zweck
Bewegungsstil erfassen, nicht nur Ziel.

### Gute Inhalte
- lieber stabil als knapp
- lieber weniger Umstiege
- lieber gehen als warten
- mit Kind unterwegs
- wenig Energie heute
- ruhigste Route bevorzugen

### UX-Haltung
Nicht als Einstellungsfriedhof, sondern als situative Übersetzungshilfe.

---

## 4. Screen: Chain Summary

### Zweck
Die fertige Kette in verständlicher, ruhiger Form zeigen.

### Produktbotschaft
„Das ist dein heutiger Ablauf. Er hält zusammen.“

### Muss sichtbar sein
- Abschnitt 1
- Abschnitt 2
- Rückweg
- ggf. Zusatzstopp
- erkennbare Reihenfolge
- klare Gesamtlogik

### Gute Darstellung
- vertikale Kartenfolge oder sehr ruhige Timeline
- jede Station mit Zweck und Zeitfenster
- nicht wie klassischer Stepper
- eher wie stabiler Tagesfaden

### Wichtig
Hier darf analytischer gezeigt werden als auf dem Main Screen, aber nicht datenlastig.

---

## 5. Screen: Quick Change / Snack Stop

### Zweck
Spontane Änderung einfügen, ohne die ganze Kette neu aufzusetzen.

### Produktbotschaft
„Du kannst vom Plan abweichen, ohne die Sicherheit zu verlieren.“

### Beispiel
- „Noch kurz was snacken“
- „10 Min später weiter“
- „einen Bus später nehmen“
- „noch schnell Apotheke“

### Muss sichtbar sein
- einfache lokale Änderung
- CatchIt passt Restkette mit an
- Ergebnis wird klar benannt:
  - „Rückweg bleibt machbar“
  - „Nächster sinnvoller Bus: 16:22“
  - „Ankunft bleibt pünktlich“

### Nicht tun
- komplette Neuplanung wirken lassen
- Nutzer zurück in Vollvergleich zwingen

---

## 6. Screen: Quick Change / Bus später

### Zweck
Vertrauen zeigen, dass CatchIt den Plan halten kann.

### Muss sichtbar sein
- aktueller Plan
- gewünschte Abweichung
- aktualisierte Kette
- Auswirkung auf Folgeschritte

### Gute Darstellung
- vorher / nachher in ruhiger Form
- keine hektische „alles wird neu berechnet“-Inszenierung
- eher „wir haben nachjustiert“

---

## 7. Screen: Return Leg / Rückweg

### Zweck
Den Rückweg als integralen Teil des Produkts zeigen.

### Produktbotschaft
„CatchIt denkt das Danach und das Zurück von Anfang an mit.“

### Muss sichtbar sein
- Hinweg nicht isoliert
- Rückweg ist vorbereiteter Abschnitt
- evtl. Abfahrtsfenster oder Hinweis:
  - „Spätestens zurück los in …“
  - „Rückfahrt bleibt flexibel bis …“

### Wichtig
Dieser Screen ist zentral, weil hier die Differenzierung zu gewöhnlichen Transit-Apps besonders klar wird.

---

## 8. Screen: Semantik / neutrale Labels

### Zweck
Zeigen, wie CatchIt Alltagssinn unterstützt, ohne intime Bedeutung unkontrolliert auszuspielen.

### Muss sichtbar sein
- Systemlabel
- neutrales Kontextlabel
- optionales Nutzerlabel

### Beispiel
- System: „Linie 21 · Hauptbahnhof“
- Kontext: „Nächstes Ziel“
- Nutzerlabel: „Arzttermin“

### Produktbotschaft
„CatchIt hilft bei Bedeutung, exponiert sie aber nicht unnötig.“

---

## 9. Screen: Lockscreen- / Voice-safe Variante

### Zweck
Öffentliche Robustheit demonstrieren.

### Muss sichtbar sein
- abstrahierte Sprache
- neutrale Begriffe
- kein peinlicher oder intimer Content
- trotzdem handlungsfähig

### Beispiel
- gut: „Nächster Termin um 11:30“
- gut: „In 8 Minuten los“
- vermeiden: intime Detailbezeichnung als laute Ausgabe

---

## 10. Minimales Planning-/Chain-Set

Wenn du für den Kettenaspekt nur 4 Screens baust, nimm:

1. Wizard Einstieg
2. Kettenfrage
3. Chain Summary
4. Quick Change / Snack oder späterer Bus

Diese vier Screens reichen, um die Alleinstellung von CatchIt verständlich zu machen.
# CatchIt — Figma Screen Spec, Teil 4  
## Komponenten, Annotierungen und Prototyp-Verhalten

Dieser Teil beschreibt, wie du die Screens so dokumentierst, dass sie nicht nur schön aussehen, sondern auch systemisch lesbar sind.

---

## 1. Kernkomponenten, die in Figma als Variants angelegt werden sollten

### 1. Countdown Bubble
Varianten:
- Blue / Stable
- Green / Bald relevant
- Yellow / Fragil
- Orange / Handeln bald
- Red / Kritisch

Eigenschaften:
- große zentrale Zahl
- kurze semantische Beizeile
- hohe visuelle Stabilität
- nie ornamental

### 2. Option Row / Option Tile
Varianten:
- best
- calm reserve
- fallback
- unavailable
- active

Inhalt:
- Linien-/Verkehrsmittelkennung
- kurze Rolle
- optional ETA-/Pufferhinweis
- nicht nur Delay-Rohwert

### 3. Mini Chain Context
Varianten:
- 2 steps
- 3 steps
- with return
- with optional stop

### 4. Map Reveal Container
Varianten:
- collapsed
- revealed
- focused

### 5. Active Step Card
Varianten:
- now
- next
- done
- blocked
- rerouted

### 6. Recovery Card
Varianten:
- simple switch
- recheck
- fallback ready
- critical action

### 7. Wizard Question Panel
Varianten:
- single select
- yes/no
- chips
- text assist
- timeline summary

### 8. Neutral Label Block
Varianten:
- system label
- context label
- user label
- privacy safe

---

## 2. Was jede Komponente erklären muss

Jede Kernkomponente braucht in Figma eine kleine Annotation mit:

- Zweck
- wann sie erscheint
- welche Information primär ist
- welche Information weggelassen wird
- welche Rolle sie im Vertrauen spielt

So wird das System verständlich, nicht nur das Styling.

---

## 3. Annotierungsstil

Empfehlung:
- seitliche Callouts
- kurze Sätze
- keine Fließtextwände
- pro Screen 5–8 Annotationen maximal

Gute Annotationen sind etwa:
- „Bubble bleibt in allen Go-Zuständen als Zeitanker präsent.“
- „Karte ist zweite Ebene derselben Wahrheit, kein eigener Produktbereich.“
- „Recovery priorisiert einfachste Rettung vor Vollständigkeit.“
- „Neutrale Labels schützen Privatsphäre in öffentlichen Situationen.“

---

## 4. Was auf den Mockups annotiert werden sollte

### Immer annotieren
- Informationshierarchie
- Rollen der Optionen
- Kettenkontext
- Zustandswechsel
- Vertrauensaspekt

### Nur situativ annotieren
- genaue Accessibility-Details
- Cathy-Verhalten
- technische Anschlussannahmen

---

## 5. Motion- / Transition-Spezifikation für Figma Prototype

### Blau → Grün
- sanfter Farbübergang
- keine ruckartige Eskalation
- Dauer: ruhig, aber spürbar

### Main → Map Reveal
- vertical move / smart animate
- Bubble und Hero rücken nach oben
- Karte wächst von unten

### Map Reveal → Map Focus
- Karte skaliert in dominante Position
- Bubble bleibt an oberer Achse
- Textinfos ziehen unter Karte

### Quick Change anwenden
- Ergebnis erscheint als ruhige Umstellung
- kein chaotischer Reflow
- kurze Bestätigungsbotschaft

### Recovery
- klar sichtbarer Zustandswechsel
- danach sofort eine einfache Action

---

## 6. Gestenlogik für Prototype

### Swipe up
- Kontext und räumliche Ebene öffnen

### Tap auf Karte
- Fokus auf räumliche Navigation

### Swipe down
- zurück zur Verdichtung

### Tap auf Alternative
- Alternative wird aktiv oder als Reserve erklärt

### Tap auf Quick Change
- lokale Anpassung statt kompletter Neuplanung

Wichtig: Gesten sollen wie Erweiterungen derselben Wahrheit wirken, nicht wie Sprünge in andere Apps.

---

## 7. Accessibility-Anmerkungen, die in Figma explizit markiert werden sollten

- Countdown, Status und Handlung nie nur über Farbe transportieren
- Fokuszustände sichtbar definieren
- Touch-Ziele ausreichend groß
- Large Text kompatibel
- Reduced Motion Variante mitdenken
- map focus auch ohne komplexe Gestik erreichbar
- Voice-Ausgaben neutral und kurz

---

## 8. Cathy-Regeln für Annotierungen

Falls Cathy dargestellt wird, dann nur nach diesen Regeln:

- peripher bei Stabilität
- näher bei Unsicherheit
- groß nur bei Transition
- nie parallel zum wichtigsten Handlungscontent dominant
- nicht emotionalisieren, wenn Präzision wichtiger ist

Deshalb sollte Cathy in Mockups eher als späteres Layer gezeigt werden, nicht als Kernstruktur des Flows.

---

## 9. Prototype-Strecke für Präsentation

Empfohlene klickbare Strecke:

1. Main / Blue
2. Main / Green
3. Swipe → Map Reveal
4. Tap → Map Focus
5. Back / Continue → Go Mode
6. Quick Change → späterer Bus
7. Ergebnis → Kette bleibt stabil
8. Recovery-Fall → einfachste Rettung

Das ist die stärkste Live-Demo-Sequenz.

---

## 10. Übergabe an Entwicklung

Jeder Screen sollte in Figma folgende Meta-Information tragen:
- Screen-ID
- Modus
- State
- Primärziel
- Input
- Output
- Interaktion
- relevante Komponenten
- Varianten
- Accessibility-Hinweise
- offene Produktfragen

So wird das Designfile anschlussfähig für das Repo und nicht nur visuelles Referenzmaterial.
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
