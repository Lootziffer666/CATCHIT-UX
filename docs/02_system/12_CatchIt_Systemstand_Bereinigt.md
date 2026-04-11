# CatchIt — bereinigter Systemstand

## Zweck
Dieses Dokument zieht den bisherigen Zwischenstand auf den aktuellen Stand gerade.

Es ersetzt ältere, inzwischen inkonsistente Stellen, insbesondere dort, wo noch von einer 4-stufigen Main-State-Familie, alten Bezeichnungen wie „Fragil/Kritisch“ oder einer noch unvollständigen Systemarchitektur ausgegangen wurde.

---

# 1. Wichtigste Korrekturen gegenüber älteren Fassungen

## 1.1 Die Main-State-Familie hat jetzt **5** Zustände, nicht 4
Die alte Struktur mit:
- Blue / Stable
- Green / Bald Relevant
- Yellow / Fragil
- Red / Kritisch

ist **überholt**.

Die aktuelle, gültige Struktur lautet:
- **Main / Idle / Blue**
- **Main / Ready / Green**
- **Main / Adapting / Yellow**
- **Main / Act Now / Orange**
- **Main / Failed / Red**

## 1.2 Orange ist jetzt eine eigene, explizite Systemstufe
Gelb und Rot sind nicht mehr überladen.

- **Yellow** bedeutet: Änderung erkannt, CatchIt reagiert bereits.
- **Orange** bedeutet: Nutzerhandlung ist jetzt nötig.
- **Red** bedeutet: Diese konkrete Lösung ist nicht mehr tragfähig.

## 1.3 Rot wird extrem sparsam genutzt
Rot ist **kein** allgemeiner Warnzustand.
Rot steht nur für:
- sicheres Scheitern
- nicht mehr tragfähige Route/Kette/Option
- echte Unrettbarkeit dieser konkreten Lösung

## 1.4 Das System umfasst jetzt mehr als reine Screenlisten
Der aktuelle Stand ist nicht mehr nur eine Sammlung von Screens, sondern eine regelbasierte Systemarchitektur mit:
- Zustandslogik
- Anchor-Logik
- Transition-Logik
- Persistence-Logik
- Component Inheritance
- Motion Discipline
- Copy Tone by State

---

# 2. Aktuelle Kernlogik

## 2.1 CatchIt ist keine klassische Transit-App
CatchIt ist nicht:
- Route Search
- Fastest Route Ranking
- Results List UI
- Map-first Navigation
- Dashboard-Transit-App
- Settings-lastiger Planner

CatchIt ist:
- ein **Decision-Relief- und Reassurance-System**
- eine **Zustandsoberfläche**
- ein **präferenzgebundenes Mobilitäts-System**
- ein **truth-condensing interface**
- ein **chain-aware everyday mobility system**

## 2.2 Die drei sichtbaren Optionen sind keine Suchresultate
Die drei angezeigten Linien/Optionen sind:
- bereits gefiltert
- alltagstauglich
- präferenzgebunden
- kettenverträglich
- für diese Person und diese Situation plausibel tragfähig

Sie sind **nicht**:
- Top-3 Suchergebnisse
- mathematisch beste Verbindungen
- neutrale Fahrplanresultate

## 2.3 Wizard statt Settings-Dschungel
Der Wizard ersetzt klassische Settings-Screens.
Er soll:
- Alltag erfassen
- Reibungsprofil erfassen
- Kettenlogik erfassen
- Bewegungsstil und Tageslage berücksichtigen

Er soll **nicht** wirken wie:
- Konfiguration
- Formular
- Setup Wizard aus Produktsoftware
- technische Filtermaske

---

# 3. Gültige 5-State-Logik

## Blue / Idle
**Bedeutung:**
Noch kein akuter operativer Handlungsdruck.

**CatchIt-Rolle:**
beobachten, ruhig halten, vorverdichten.

**Nutzerrolle:**
nicht nachdenken müssen.

**Darf nicht bedeuten:**
leer, egal, irrelevant.

---

## Green / Ready
**Bedeutung:**
Jetzt relevant, aber gut tragfähig.

**CatchIt-Rolle:**
Relevanz erhöhen, ohne Hektik zu erzeugen.

**Nutzerrolle:**
mental bereit sein.

**Darf nicht bedeuten:**
perfekt, Gewinner, optimale Route.

---

## Yellow / Adapting
**Bedeutung:**
Änderung erkannt, CatchIt reagiert bereits.

**CatchIt-Rolle:**
kompensieren, alternative tragfähige Wege suchen, idealerweise zurück auf Grün führen.

**Nutzerrolle:**
noch nicht handeln müssen, aber offen für Anpassung bleiben.

**Darf nicht bedeuten:**
Warnung, Panik, sofortiger Handlungsaufruf.

---

## Orange / Act Now
**Bedeutung:**
Eine tragfähige Lösung existiert, aber jetzt ist Nutzerhandlung nötig.

**CatchIt-Rolle:**
Interpretationslast reduzieren, nächsten Schritt glasklar machen.

**Nutzerrolle:**
handeln.

**Darf nicht bedeuten:**
gescheitert, final verloren.

---

## Red / Failed
**Bedeutung:**
Diese konkrete Option oder Kette ist nicht mehr tragfähig.

**CatchIt-Rolle:**
klar benennen, nicht beschönigen, neue Basis vorbereiten.

**Nutzerrolle:**
alte Lösung loslassen, neue Realität akzeptieren.

**Darf nicht bedeuten:**
knapp, fraglich, vorsichtshalber rot.

---

# 4. Aktuelles Screenset

## 4.1 Kernset
Mit der 5-State-Logik umfasst das Kernset jetzt **17 Screens** statt 16.

### A. Kernzustände
1. Main / Idle / Blue  
2. Main / Ready / Green  
3. Main / Adapting / Yellow  
4. Main / Act Now / Orange  
5. Main / Failed / Red  

### B. Raum- und Exekutionslogik
6. Main → Map Reveal  
7. Map Focus  
8. Go Mode / Walk to Stop  
9. Go Mode / In Vehicle  

### C. Recovery und Vertrauenslogik
10. Recovery / Simple Switch  
11. Recovery / Recheck nötig  
12. Recovery / Kette angepasst  

### D. Planung und Ketten
13. Wizard / Einstieg  
14. Wizard / Kettenfrage  
15. Wizard / Bewegungsstil / Tageslage  
16. Chain Summary  
17. Quick Change / Snack oder späterer Bus  

## 4.2 Zusatzset
18. Neutral Label vs User Label  
19. Lockscreen-safe Notification  
20. Accessibility Variant / Large Text + Reduced Motion  
21. Voice-safe Assist Screen  

---

# 5. Empfohlene Bau-Reihenfolge

## Sprint 1 — Main State Family
1. Main / Idle / Blue  
2. Main / Ready / Green  
3. Main / Adapting / Yellow  
4. Main / Act Now / Orange  
5. Main / Failed / Red  

**Ziel:**
Farblogik, Dichte, Hierarchie, Verantwortungslogik und Eskalation sauber festzurren.

## Sprint 2 — Raum und Exekution
6. Main → Map Reveal  
7. Map Focus  
8. Go Mode / Walk to Stop  
9. Go Mode / In Vehicle  

**Ziel:**
Spatial Assist und Handlung als Fortsetzung derselben Oberfläche beweisen.

## Sprint 3 — Recovery
10. Recovery / Simple Switch  
11. Recovery / Recheck nötig  
12. Recovery / Kette angepasst  

**Ziel:**
Vertrauen unter Realität und Abweichung belastbar machen.

## Sprint 4 — Wizard und Kette
13. Wizard / Einstieg  
14. Wizard / Kettenfrage  
15. Wizard / Bewegungsstil / Tageslage  
16. Chain Summary  
17. Quick Change / Snack oder späterer Bus  

**Ziel:**
sichtbar machen, warum CatchIt andere Vorschläge macht als Standard-Transit-Apps.

## Sprint 5 — Trust / ND / Accessibility
18. Neutral Label vs User Label  
19. Lockscreen-safe Notification  
20. Accessibility Variant / Large Text + Reduced Motion  
21. Voice-safe Assist Screen  

**Ziel:**
Haltung, Sozialrobustheit und Zugänglichkeit systemisch verankern.

---

# 6. Anchor-System (gültiger Stand)

## Erlaubte Primary Anchors
Jeder Screen hat genau **einen** Primary Anchor.

### Countdown Anchor
Verwenden, wenn Zeittragfähigkeit die Hauptwahrheit ist.

### Instruction Anchor
Verwenden, wenn die nächste Handlung die Hauptwahrheit ist.

### Confirmation Anchor
Verwenden, wenn die wichtigste Wahrheit eine Stabilisierung, Anpassung oder verstandene neue Ordnung ist.

### Question Anchor
Verwenden, wenn CatchIt eine alltagsnahe Klärung braucht.

### Failure Anchor
Verwenden, wenn eine Lösung klar nicht mehr tragfähig ist.

## Default Anchor Assignment
- Blue / Idle = Countdown Anchor
- Green / Ready = Countdown Anchor
- Yellow / Adapting = Countdown Anchor
- Orange / Act Now = Instruction Anchor
- Red / Failed = Failure Anchor
- Recovery / Simple Switch = Confirmation Anchor
- Recovery / Recheck nötig = Instruction Anchor
- Recovery / Kette angepasst = Confirmation Anchor
- Wizard states = Question Anchor
- Chain Summary = Confirmation Anchor
- Quick Change = Confirmation Anchor

---

# 7. Anchor Expression (gültiger Stand)

## Countdown Anchor
- darf verdichten
- darf etwas kleiner werden
- darf gespannter wirken
- darf nicht zum dekorativen Badge werden

## Instruction Anchor
- kurz
- aktiv
- klar
- nicht CTA-haft
- nicht navigationsappig

## Confirmation Anchor
- ruhig
- knapp
- ordnend
- nicht euphorisch
- nicht belohnend

## Question Anchor
- alltagsnah
- niedrigschwellig
- nicht formularig
- nicht klinisch

## Failure Anchor
- kurz
- ehrlich
- selten
- nicht theatralisch

---

# 8. Anchor Transition (gültiger Stand)

## Leitsatz
CatchIt springt nicht zwischen Wahrheiten. Es übergibt Führung.

## Zentrale erlaubte Übergänge
- Countdown → Countdown
- Countdown → Instruction
- Countdown → Confirmation
- Countdown → Failure
- Question → Confirmation
- Confirmation → Instruction
- Instruction → Confirmation
- Instruction → Failure

## Wichtige Verbote
- Failure → Countdown ohne neue Basislogik
- Question → Instruction ohne Verstehens-/Bestätigungsschritt
- Failure → Confirmation als Beschönigung
- prolonged anchor competition
- Maps oder Cards, die heimlich Anchor werden

---

# 9. Anchor Persistence (gültiger Stand)

## Persistence-Klassen
### Full Persistence
Alter Anchor bleibt fast vollständig sichtbar.

### Trace Persistence
Ein klar erkennbarer Rest bleibt erhalten.

### Context Persistence
Der Anchor verschwindet, aber seine Konsequenz bleibt lesbar.

## Zentrale Regel
Jede Anchor-Transition muss eine Persistence-Klasse bekommen.

## Leitsatz
Der Verlust der Führung darf nicht zum Verlust der Orientierung werden.

---

# 10. Component Inheritance (gültiger Stand)

## Komponentenfamilien
- Anchor Components
- Support Components
- Spatial Components
- Recovery Components
- Wizard Components
- Trust/Accessibility Components

## Inheritance Levels
1. Direct Inheritance  
2. Condensed Inheritance  
3. Specialized Inheritance  
4. New Component (selten, begründungspflichtig)  

## Harte Regel
Ein neuer Zustand soll zuerst eine vorhandene Komponente erben, bevor er eine neue erfindet.

## Kritische Drift-Fehler
- Species Jump
- Orphan Component
- Decorative Mutation
- Support Takeover
- Recovery Foreign Body
- Wizard Form Drift

---

# 11. Visual Density (gültiger Stand)

## Leitsatz
CatchIt eskaliert über Fokus, nicht über Inventar.

## Blue / Idle
- very low density
- maximum air
- minimum detail

## Green / Ready
- low density
- etwas gespannter als Blue

## Yellow / Adapting
- low-to-medium density
- sichtbare Änderung, aber kontrolliert
- keine Alarmdichte

## Orange / Act Now
- medium density, stark fokussiert
- optionale Infos sinken
- Handlung dominiert

## Red / Failed
- low-to-medium, stark komprimiert
- extrem klar
- keine dekorative Eskalation

## Harte Regel
Mehr Dringlichkeit bedeutet:
- mehr Fokus
- mehr Klarheit
- weniger Ambiguität

Nicht:
- mehr Module
- mehr Karten
- mehr Labels
- mehr visuelles Inventar

---

# 12. Motion Discipline (gültiger Stand)

## Leitsatz
Motion must clarify state, not perform personality.

## Erlaubte Motion-Klassen
- Tightening Motion
- Reveal Motion
- Handover Motion
- Compression Motion
- Settlement Motion

## Motion-Intensitäten
- M0 Static
- M1 Soft
- M2 Directed
- M3 Decisive

## Verboten
- Bounce als Default
- springende CTAs
- pulsierende Warnflächen
- laute Kartenanimationen
- parallax-lastige Hero-Effekte
- showcase-artige Motion
- hektische Urgency-Simulation

## ND-Regel
Reduced Motion muss Bedeutung erhalten, nicht nur Animation wegnehmen.

---

# 13. Copy Tone by State (gültiger Stand)

## Leitsatz
CatchIt-Sprache muss zuerst brauchbar sein, bevor sie interessant klingt.

## Blue / Idle
- ruhig
- still präsent
- leicht informativ

## Green / Ready
- relevant
- tragfähig
- leise zuversichtlich

## Yellow / Adapting
- kontrolliert
- reagierend
- nicht alarmistisch

## Orange / Act Now
- direkt
- handlungszentriert
- kurz
- körpernah verständlich

## Red / Failed
- kurz
- ehrlich
- eindeutig
- nicht theatralisch

## Verbotene Sprachdrifts
- Marketing-Euphorie
- Journey-Planner-Jargon
- Setup-/Formularsprech
- motivationale Wellness-Sprache
- panische Warnsprache
- pseudo-freundliche Error-Copy

---

# 14. Aktualisierte Debug-Reihenfolge

1. anchor type  
2. anchor expression  
3. anchor transition  
4. anchor persistence  
5. component inheritance  
6. density  
7. layout  
8. components  

Das ist die gültige Debug-Reihenfolge.
Nicht mit Layout oder Schönheit anfangen, wenn die führende Wahrheit schon falsch ist.

---

# 15. Wichtigste Leitsätze des aktuellen Systems

## Eskalation
CatchIt eskaliert über Fokus, nicht über Inventar.

## Anchor
CatchIt wechselt nicht nur Farbe oder Dichte, sondern die führende Wahrheit des Screens.

## Transition
CatchIt springt nicht zwischen Wahrheiten. Es übergibt Führung.

## Persistence
Der Verlust der Führung darf nicht zum Verlust der Orientierung werden.

## Components
Eine CatchIt-Komponente darf sich mit dem Zustand verändern, muss aber erkennbar ihrer Familie treu bleiben.

## Motion
CatchIt bewegt sich, um Ambiguität zu reduzieren, nicht um Sensation zu erzeugen.

## Copy
CatchIt spricht, um Aufwand zu senken, nicht um Freundlichkeit zu performen.

---

# 16. Bereinigte Konsequenz für bestehende ältere Dateien

Alle älteren Dokumente oder Tabellen sollten an folgenden Stellen korrigiert werden:

## Ersetzen
- Main / Stable / Blue → Main / Idle / Blue
- Main / Bald Relevant / Green → Main / Ready / Green
- Main / Fragil / Yellow → Main / Adapting / Yellow
- Main / Kritisch / Red → aufteilen in:
  - Main / Act Now / Orange
  - Main / Failed / Red

## Ergänzen
- Orange als eigene Hauptstufe
- Motion Discipline
- Copy Tone by State
- Component Inheritance Rules
- Anchor Persistence Rules
- Anchor Transition Rules
- Visual Density Rules

## Neu zählen
- Kernset = 17 Screens
- Zusatzset = 4 Screens
- Gesamtsystem = 21 definierte Screens/States/Varianten

---

# 17. Kurzfazit

Der aktuelle Stand ist kein loses UI-Briefing mehr.
Er ist ein regelbasiertes CatchIt-System mit:
- klarer Zustandsfamilie
- deterministischer Anchor-Logik
- abgesicherter Übergangslogik
- Persistenzregeln
- Komponentenvererbung
- Bewegungsdisziplin
- zustandsgebundener Copy-Sprache

Ältere Markdown-Zusammenfassungen, die noch von 4 Main States oder einer unvollständigen Regelarchitektur ausgehen, gelten als **überholt**.
