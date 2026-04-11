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
