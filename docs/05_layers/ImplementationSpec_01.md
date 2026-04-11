
# CatchIt - Implementierungsnahe UX-/Design-Spezifikation - Teil 1
## Produktmodell, Experience-Architektur, ND-Vertrauen, Kettenlogik

**Zweck dieses Dokuments**  
Dieses zweite Dokumentenpaket übersetzt die bestehende CatchIt-Designrichtung in eine **implementierungsnahe Spezifikation**. Es baut auf drei Wahrheiten auf:

1. der W3C-/Accessibility-orientierten UI-Basis,
2. der SSOT als Produktwahrheit,
3. dem aktuellen Repo-Stand als technische Realitätsgrenze.

Es ist bewusst **kein loses Kreativpapier**, sondern ein Arbeitsdokument zwischen Produkt, UX, Design-System und späterer Android-Umsetzung.

---

## 1. Arbeitsgrundsatz

CatchIt ist **kein Fahrplan-Viewer**, sondern ein **Decision-Relief- und Reassurance-System**.  
Die App soll nicht mehr Information zeigen, sondern die **richtige Information im richtigen mentalen Zustand**.

Daraus folgen fünf harte Prämissen:

1. **Die App denkt in Ketten, nicht in Einzelfahrten.**
2. **Die App priorisiert Handlungssicherheit vor Vollständigkeit.**
3. **Die App übersetzt Unsicherheit in lesbare Zustände.**
4. **Die App ist ND-tauglich nicht trotz, sondern wegen klarer Zustandsarchitektur.**
5. **Die App bleibt frictionless in der Handlung, aber nicht opak in der Bedeutung.**

---

## 2. CatchIt als Ketten-System

Die eigentliche Stärke von CatchIt liegt nicht darin, eine gute A-nach-B-Verbindung zu finden, sondern darin, **Alltagsketten tragfähig zu halten**.

Typische reale Muster:

- Kind abholen
- Termin wahrnehmen
- weiter zu einem zweiten Ort
- zurück zur Kita
- danach nach Hause
- optional Zwischenstopp
- spontane Verzögerung
- bewusste Entscheidung für einen späteren Bus

Die UX darf deshalb nie so tun, als gäbe es nur:

- Start
- Ziel
- fertig

Stattdessen muss sie immer implizit oder explizit vermitteln:

- **Du befindest dich in einer laufenden Kette**
- **Der aktuelle Schritt ist nur ein Abschnitt**
- **CatchIt kennt auch das Danach**
- **Änderungen müssen lokal möglich sein, ohne die ganze Kette neu zu erzwingen**

### Designregel
Der Nutzer plant nicht „eine Route“, sondern einen **tragfähigen Ablauf**.

---

## 3. ND-taugliche UX: frictionless, aber nicht blind

Für CatchIt ist maximale Reibungsarmut richtig - aber nicht grenzenlos.  
Es gibt eine Form von Reibung, die das System schlechter macht, und eine Form, die Vertrauen erst ermöglicht.

### Schlechte Friktion
- unnötige Formularfelder
- versteckte Zustände
- permanente Parametrisierung
- technische Provider-Sprache
- irrelevante Detailmeldungen
- erzwungene Neustarts des Planungsprozesses

### Intentionale Friktion
- sichtbare Systemübergänge
- lesbare Zustandswechsel
- editierbare Systemvorschläge
- kurze, klare Replan-Bestätigungen
- bewusst neutrale Labels bei privaten Kontexten
- nachvollziehbare Bedeutungsangebote statt magischer Behauptungen

### Kernformel
**Keine Friktion beim Tun.  
Gezielte Friktion beim Vertrauen.**

Das ist besonders relevant für ND-taugliche UX, weil Vertrauen dort häufig aus drei Dingen entsteht:

- Vorhersagbarkeit
- Lesbarkeit
- Reversibilität

---

## 4. Vertrauen als UX-Architektur

CatchIt darf nicht beruhigen, indem es Dinge glattbügelt.  
Es soll beruhigen, indem es Dinge **ehrlich lesbar** macht.

### Vertrauen entsteht in CatchIt aus:
- klarer Priorisierung
- stabilen Zustandsmustern
- begrenzten, gut benannten Alternativen
- nachvollziehbaren Eingriffen
- expliziter Fragilität statt Scheinsicherheit
- neutraler, sozial robuster Sprache

### Vertrauen entsteht nicht aus:
- überfreundlicher Beschönigung
- zu viel Anthropomorphisierung
- „alles ist okay“-Theater
- aggressiver Assistenz
- impliziten Systementscheidungen ohne Lesbarkeit

### UX-Konsequenz
Jede relevante Systementscheidung braucht mindestens einen der folgenden Marker:

- Status
- Rolle
- Confidence
- Recheck-Hinweis
- Fallback-Hinweis
- Änderungserklärung

---

## 5. Semantik: Bedeutung ja, aber kontrolliert

Die Benennung von Abschnitten, Stopps und Alltagszielen ist ein hohes Potenzial, aber **nicht trivial**.  
Wenn CatchIt zu früh zu viel Bedeutung automatisiert, entsteht eher Misstrauen als Hilfe.

### Risiko
Automatische Benennungen könnten:

- zu privat werden
- falsch sein
- zu spezifisch sein
- in öffentlichen Situationen unangenehm wirken
- wie „magisches Wissen“ erscheinen

### Deshalb gilt
**System liefert Struktur. Nutzer liefert Bedeutung.**

### Drei Ebenen von Benennung
1. **Systemname**  
   Beispiel: `Linie 21 - Hauptbahnhof`
2. **Kontextname**  
   Beispiel: `Nächstes Ziel`, `Rückweg`, `Zwischenstopp`
3. **Optionaler Nutzername**  
   Beispiel: `Luke abholen`, `Therapie`, `Snack-Stopp`

### V1-Prinzip
CatchIt braucht keine perfekte automatische Alltagssemantik, um stark zu sein.  
V1 darf neutral bleiben, solange:

- die Kette klar bleibt,
- die Handlung sicher bleibt,
- und freiwillige Bedeutung hinzugefügt werden kann.

---

## 6. Privacy-by-default als UX-Prinzip

Gerade für CatchIt gilt:  
Der Zweck der App ist Mobilitätsentlastung, **nicht intime Kontext-Offenlegung**.

### Produktregel
**Öffentliche Oberfläche neutral. Private Bedeutung optional.**

### Das betrifft besonders:
- Voice-Ausgabe
- Lockscreen
- Benachrichtigungen
- Home-State
- Wearables
- Companion-Charaktere

### Gute Standardbezeichnungen
- Apotheke
- Arzttermin
- Besorgung
- Zwischenstopp
- Heimweg
- Rückweg
- nächstes Ziel

### Schlechte Standardbezeichnungen
- medizinisch intime Details
- peinliche Voice-Transkripte
- automatisch ausgesprochene private Labels
- sehr konkrete Kalendereintragstitel auf öffentlichen Screens

### Schlussfolgerung
Neutrale Begriffe sind keine Verarmung, sondern ein **Würde- und Vertrauensschutz**.

---

## 7. Experience-Zustände statt Prozessschritte

CatchIt darf nicht primär als Prozess-Tool gestaltet werden, sondern als **Zustandsmaschine**.

### Relevante Produktzustände
- stabil
- bald relevant
- handeln
- beobachten
- fragil
- recheck nötig
- fallback bereit
- abwarten
- abgeschlossen

### Nicht UX-führend
- loading
- response pending
- provider mismatch
- parse retry
- route request success

Technische Zustände können intern existieren.  
Sie dürfen aber nicht die Produktoberfläche definieren.

---

## 8. Plan / Go / Recovery als Hauptlogik

Die SSOT trennt Planung, Durchführung und Störung klar.  
Diese Trennung ist für das ganze Designsystem bindend.

### Plan Mode
- Vorhaben erfassen
- Kette aufbauen
- Alternativen vergleichen
- Tageslage berücksichtigen

### Go Mode
- Handlungsschwelle klar machen
- nächsten Schritt zeigen
- Raum nur bei Bedarf öffnen
- Vertrauen stabil halten

### Recovery Mode
- Störung nicht als Datenflut zeigen
- einfachste Rettung priorisieren
- klar sagen, ob Handeln nötig ist
- Kette als Ganzes neu stabilisieren

### Kernregel
Planung und Exekution dürfen **nicht** in derselben Oberfläche gleichberechtigt konkurrieren.

---

## 9. Raumlogik: horizontal vs. vertikal

Die SSOT gibt eine starke räumliche Formel vor:

- **Planung horizontal**
- **Exekution vertikal**

Diese Logik ist nicht nur Layout, sondern Denkarbeit.

### Horizontal bedeutet
- Optionen nebeneinander
- Vergleich
- Rollen von Alternativen
- Wahlraum

### Vertikal bedeutet
- Schrittfolge
- Handlung
- Zeitfluss
- Beruhigung und Fortschritt

### UX-Wirkung
Der Nutzer soll nicht erst lesen müssen, in welchem Modus er ist.  
Der Raum selbst muss es zeigen.

---

## 10. Cathy als Layer, nicht als Wahrheit

Cathy ist ein später zentraler USP, aber **nicht** die Travel Truth.  
Cathy darf Zustände rahmen, aber nicht die Datenlogik ersetzen.

### Deshalb gilt
- klein und peripher bei Stabilität
- näher bei Unsicherheit
- groß nur bei Transition
- nicht parallel zu kritischem Handlungscontent dominieren
- nicht reden, wenn visuelle Zustandslogik reicht
- nicht emotionalisieren, wenn Präzision wichtiger ist

### UX-Konsequenz
Das Designsystem muss **ohne Cathy vollständig verständlich** sein.  
Cathy ist Verstärkung, nicht Fundament.

---

## 11. Anti-Muster

Folgende Muster sind für CatchIt aktiv zu vermeiden:

- Daten-UI: „wir zeigen es, weil wir es haben“
- Parameterfriedhof
- Routenbaukasten als Home
- Debug-/Provider-Sprache im Produkt
- Fake-Automatisierung
- Sicherheitstheater
- Einheitsoberfläche für jede mentale Lage
- zu intime Standardlabels
- Voice- oder Lock-Screen-Offenlegung sensibler Bedeutungen

---

## 12. Designimplikationen für das zweite Dokumentenpaket

Aus Teil 1 ergeben sich für alle weiteren Teile folgende Regeln:

1. Der Main Screen ist **Zustandsoberfläche**, nicht Dashboard.
2. Karten erscheinen **nur**, wenn räumliche Orientierung wirklich nötig ist.
3. Kettenlogik muss in jedem Kernscreen spürbar bleiben.
4. Replanning darf nie wie ein Neustart wirken.
5. Labels und Texte müssen öffentlich robust sein.
6. Token, Komponenten und Motion müssen Zustandsklarheit unterstützen.
7. Mockups müssen nicht „möglichst viele Screens“ zeigen, sondern die **mentale Logik des Systems**.

---

## 13. Arbeitsdefinition für die weiteren Teile

Die nachfolgenden Dokumente spezifizieren:

- Informationsarchitektur
- Screen-Architektur
- Zustandsübergänge
- Komponenten
- Design-Tokens
- Accessibility- und Privacy-Regeln
- Repo-Alignment
- empfohlene Mockup-Strecke

Damit entsteht ein Paket, das sowohl konzeptionell als auch implementierungsnah genug ist, um:

- als Referenz für Figma zu dienen,
- als Entscheidungsbasis für Android-Compose-Komponenten zu dienen,
- und als kohärente Narrative für das Produktkonzept zu funktionieren.
