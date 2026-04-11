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
