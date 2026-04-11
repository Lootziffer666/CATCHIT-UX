
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

# CatchIt - Implementierungsnahe UX-/Design-Spezifikation - Teil 2
## Informationsarchitektur, Screen-System, Zustände, Mockup-Strecke

---

## 1. Ziel dieses Teils

Dieser Teil definiert die **konkrete Screen- und Zustandsarchitektur** für CatchIt.  
Er übersetzt das Produktmodell in UI-Ebenen, Informationsdichte, Gestenlogik und eine Mockup-Strecke, mit der das Konzept klar kommunizierbar wird.

---

## 2. Primäre UX-Ebenen

Die SSOT beschreibt fünf UX-Ebenen. Für die Screen-Architektur werden sie so operationalisiert:

### 2.1 Orientierung
Fragen:
- Muss ich jetzt etwas tun?
- Ist mein Plan stabil?
- Wann muss ich los?

Primäre Oberfläche:
- Main Screen / Default Home

### 2.2 Vergleich
Fragen:
- Welche wenigen tragfähigen Optionen gibt es?
- Welche Rolle hat jede Option?

Primäre Oberfläche:
- Wizard-Zusammenfassung
- Vergleichskarten
- Alternative-/Fallback-Sheets

### 2.3 Übergang
Fragen:
- Wie wird aus Plan Handlung?
- Was muss ich räumlich als Nächstes tun?

Primäre Oberfläche:
- Map Reveal
- Mini-Step-Übergänge
- Fußweg-zur-Haltestelle-Layer

### 2.4 Exekution
Fragen:
- Was ist jetzt der nächste Schritt?
- Was ist danach?

Primäre Oberfläche:
- Go Mode
- Map Focus
- vertikale Schrittlogik

### 2.5 Reassurance / Eingriff
Fragen:
- Muss ich etwas ändern?
- Gibt es eine einfache Rettung?
- Ist noch alles tragfähig?

Primäre Oberfläche:
- Recovery State
- Recheck-Fenster
- Fallback Card / Sheet

---

## 3. Kernstruktur der App

CatchIt braucht keine klassische App-Struktur mit gleichgewichtigen Tabs.  
Es braucht eine **kontextdominierte Architektur**.

### Primäre Produktbereiche
1. **Home / Main State**
2. **Plan Mode / Wizard**
3. **Go Mode**
4. **Recovery Layer**
5. **Orte, Routinen, Bedeutungen**
6. **Vertrauen, Accessibility, Privacy**

### Produktregel
Der Default-Einstieg ist nicht Suche, sondern **Zustandsklarheit**.

---

## 4. Der blaue/grüne Main Screen als Default-Home-State

Der Main Screen ist keine Mini-Timeline und kein Dashboard.  
Er ist die **komprimierte Kontrollfläche einer laufenden oder bald relevanten Kette**.

### Muss immer leisten
- Handlungsschwelle zeigen
- Zustand vermitteln
- nächste tragfähige Verbindung zeigen
- zwei Alternativen mit Rollen andeuten
- den aktuellen Kettenkontext nicht verlieren

### Hero-Zone
- Label: `Spätestens los in`
- Countdown-Bubble
- optional kompakte Kontextzeile:
  - `Für: Kita`
  - `Schritt 2 von 4`
  - `Danach: Heimweg`

### Optionenzone
Drei Optionen unten mit Rollenlogik:
- **beste Wahl**
- **ruhigste Reserve**
- **Fallback / spätere Reserve**

Wichtig: Diese drei Optionen sind nicht bloß Datenpunkte, sondern **handlungsrelevante Rollen**.

### State-Farben
- Blau: stabil / noch nicht akut
- Grün: bald relevant / Go nähert sich
- Gelb: fragil, aber CatchIt regelt
- Orange: Handlungsdruck steigt
- Rot: robustes Ziel in Gefahr / klare Intervention nötig
- Grau/gedimmt: abgeschlossen / kein aktiver Abschnitt

---

## 5. Der Main Screen muss dieselbe Wahrheit tragen wie die ausführlichere Plan-/Timeline-Sicht

Der verdichtete Hauptscreen ist **kein Informationsverlust**, sondern Priorisierung.

### Dieselbe Wahrheit, andere Gewichtung
Der ausführlichere Screen enthält explizit:
- Schrittkette
- Haltestellen
- Linien
- Zeiten
- Nächstes und Danach

Der verdichtete Screen enthält dieselben Wahrheiten als:
- Status
- Zeit
- aktuelle Relevanz
- wenige handlungsfähige Optionen
- dezenten Kettenkontext

### Designregel
Nicht weniger wissen - **anders verdichten**.

---

## 6. Main / Map Reveal / Map Focus

Die stärkste aktuelle räumliche Logik von CatchIt besteht aus drei Zuständen.

### 6.1 Main
Ziel:
- sofortige Zustandslesbarkeit
- keine Kartenlast
- nur das, was jetzt zählt

Inhalt:
- Countdown-Bubble
- Statusfarbe
- drei Optionen
- sehr kompakter Kettenkontext

### 6.2 Map Reveal
Auslöser:
- Swipe up

Ziel:
- räumliche Orientierung einblenden, ohne die Main-Logik zu verlieren

Inhalt:
- Main-Informationen komprimieren sich nach oben
- Karte mit Fußweg zur besten Haltestelle erscheint
- Countdown bleibt prominent
- Karte nimmt mittleren/unteren Raum ein
- erste Wegdaten können schon sichtbar werden

Bedeutung:
- nicht nur „mehr Details“, sondern **räumliche Ebene**

### 6.3 Map Focus
Auslöser:
- Tap auf Karte

Ziel:
- Orientierung dominiert jetzt

Inhalt:
- Countdown-Bubble bleibt präsent
- Karte nimmt den Hauptteil des Screens ein
- unter der Karte:
  - Entfernung
  - Gehzeit
  - Zielhaltestelle
  - gewählte Linie
  - ggf. Abfahrtszeit / Puffer

Bedeutung:
- aktive körperliche Exekution

---

## 7. Warum diese 3-Stufen-Logik stark ist

Sie trennt sauber:

- Zeitdominanz
- Raumdominanz
- Handlungsdominanz

Der Nutzer muss nicht zwischen „Home“ und „Map“ springen.  
Er bleibt in **einem Wahrheitsraum**, dessen Fokus sich verschiebt.

### UX-Vorteil
- kognitive Kontinuität
- weniger Kontextwechsel
- Bubble bleibt Zeitanker
- Karte wird nur relevant, wenn Bewegung es erfordert
- Detailtiefe wächst progressiv

---

## 8. Wizard für Ketten

CatchIt darf nie mit einem Transit-Parameterfriedhof starten.  
Der Wizard muss menschlich und kettenfähig bleiben.

### Pflichtfragen
- Was steht an?
- Wann musst du dort sein?
- Musst du danach noch irgendwo hin?
- Gibt es einen Rückweg?
- Ist heute etwas anders als sonst?
- Wie möchtest du dich heute bewegen?

### Kettenregel
Die Frage `Musst du danach noch irgendwo hin?` wird wiederholt, bis verneint wird.

### Wizard-Ton
Nicht technisch, sondern alltagsnah:
- `Wohin musst du?`
- `Bis wann musst du dort sein?`
- `Geht es danach noch weiter?`
- `Möchtest du den Rückweg direkt mitplanen?`
- `Soll es heute lieber ruhig, direkt oder mit mehr Puffer sein?`

---

## 9. Vergleichssichten

Vergleich braucht horizontale Logik.

### Geeignete Vergleichsobjekte
- beste Option
- ruhigste Option
- spätere Option
- Fußweg-aktive Alternative
- Fallback bei erwartbarer Fragilität

### Vergleichsregel
Nicht Vollständigkeit, sondern **begrenzte Alternativen mit klaren Rollen**.

### UI-Muster
- horizontale Cards
- Rollenlabels
- knappe Unterschiede
- keine Matrix mit 14 technischen Spalten

---

## 10. Recovery Mode

Recovery ist kein Fehlerdialog, sondern ein eigener Produktmodus.

### Trigger
- Linie kippt
- Recheck fällig
- Anschluss fragil
- pünktliche Ankunft nicht mehr sicher
- Nutzer verschiebt bewusst den Ablauf

### Recovery muss liefern
- Ist Eingreifen nötig?
- Was ist die einfachste Rettung?
- Bleibt der Rest der Kette tragfähig?
- Muss nur der aktuelle Abschnitt oder die ganze Kette angepasst werden?

### Inhalt
- Problem in menschlicher Sprache
- eine beste Rettung
- eine ruhigere Reserve
- optional alte Wahl als Referenz
- Aussage zur Kettenauswirkung

---

## 11. Spontane Änderung ohne Neustart

Eine Kernstärke von CatchIt ist, dass der Nutzer unterwegs Dinge ändern kann, ohne wieder alles neu zusammenbauen zu müssen.

### Dafür braucht die UI dedizierte Quick-Actions
- `10 Min später`
- `einen Bus später`
- `Snack-Stopp einfügen`
- `nur Rückweg anpassen`
- `gesamte Kette neu abstimmen`
- `heute ruhiger`
- `heute schneller`

### Produktregel
Änderungen sind **lokale Eingriffe in eine laufende Kette**, nicht ein kompletter Neubeginn.

---

## 12. Welche Screens als Mockups gebaut werden sollten

Damit das Konzept kohärent und verständlich vermittelt wird, reicht **kein einzelner Hero-Screen**.  
Es braucht eine bewusst kuratierte Mockup-Strecke.

### Unverzichtbare Kern-Mockups
1. **Main Screen - Blau / stabil**
2. **Main Screen - Grün / bald relevant**
3. **Main Screen - Gelb oder Orange / fragil**
4. **Map Reveal**
5. **Map Focus**
6. **Recovery State**
7. **Wizard Schritt 1 - Vorhaben**
8. **Wizard Kettenfrage - "danach noch irgendwo hin?"**
9. **Wizard Review / Kettenzusammenfassung**
10. **Vergleichssicht für 3 Rollenoptionen**
11. **Quick-Change-Sheet für spontane Anpassung**
12. **Privacy-/Notification-/Voice-Safe State**

### Stark empfohlene Zusatz-Mockups
13. **Kein aktiver Abschnitt / ruhiger Idle-State**
14. **Abgeschlossener Abschnitt mit "Danach"-Kontext**
15. **Recheck nötig / Watcher State**
16. **Fallback bereit, aber noch kein Eingriff nötig**
17. **Neutraler Settings-/Accessibility-Screen**
18. **Cathy peripher bei Stabilität**
19. **Cathy näher bei Unsicherheit / Transition**
20. **Orte / Routinen / eigene Labels**

---

## 13. Empfohlene Reihenfolge für die Präsentation des Konzepts

Wenn du das Konzept in Figma, PDF oder Pitch-Form vermittelst, sollte die Reihenfolge nicht zufällig sein.

### Erzählreihenfolge
1. Was ist CatchIt?
2. Warum Ketten?
3. Der Main Screen als Zustandsoberfläche
4. Farblogik und Zustandslogik
5. Map Reveal
6. Map Focus
7. Recovery
8. Wizard
9. spontane Änderung
10. Privacy / Vertrauen / ND-Tauglichkeit
11. Cathy als Layer, nicht als Wahrheit
12. System- und Tokenkohärenz

---

## 14. Minimales Mockup-Paket für sofortige Verständlichkeit

Wenn du nur ein kleines Paket bauen willst, nimm diese 8 Screens:

1. Main - Blau
2. Main - Grün
3. Map Reveal
4. Map Focus
5. Recovery
6. Wizard - Vorhaben
7. Wizard - Kettenfrage
8. Review / Kettenzusammenfassung

Dieses Set reicht aus, um die CatchIt-Idee **kohärent, differenziert und nicht wie eine normale Transit-App** zu zeigen.

---

## 15. Vollständiges Mockup-Paket für ein starkes Design-Statement

Für ein robustes Konzeptdokument oder Portfolio sollten es eher 14 bis 18 Screens sein:

- 3 Zustandsfarben des Main Screen
- 2 Kartenzustände
- 2 Recovery-/Fallback-Zustände
- 3 Wizard-Stufen
- 1 Vergleichsoberfläche
- 1 Quick-Change-Sheet
- 1 Orte-/Routine-Screen
- 1 Settings/Accessibility-Screen
- 2 Cathy-Zustände
- 1 abgeschlossener Kettenabschnitt
- 1 Voice-/Notification-Safe Variation

---

## 16. Was die Mockups zusammen erzählen müssen

Die Mockups sollen nicht primär „viele Screens zeigen“, sondern diese Kernaussagen beweisen:

- CatchIt denkt in Ketten
- CatchIt verdichtet statt zu überladen
- CatchIt priorisiert Handlung vor Fahrplandaten
- CatchIt bleibt im Main Screen stabil
- CatchIt öffnet Raum nur bei Bedarf
- CatchIt repariert Ketten statt nur einzelne Legs
- CatchIt ist ND-tauglich, weil es lesbar und vertrauensfähig ist
- CatchIt schützt Privatheit und soziale Sicherheit

---

## 17. Übergang zu Teil 3

Teil 3 übersetzt diese Architektur in ein Designsystem:
- Farben
- Typografie
- Spacing
- Komponenten
- Motion
- Zustands-Tokens
- Content-Tokens
- Token-Namensschema

# CatchIt - Implementierungsnahe UX-/Design-Spezifikation - Teil 3
## Design-Tokens, visuelle Regeln, Motion, Komponenten

---

## 1. Ziel dieses Teils

Dieser Teil definiert das **Designsystem** von CatchIt auf Token- und Komponentenebene.  
Es geht nicht um generische UI-Schönheit, sondern um ein konsistentes System, das:

- Zustände klar lesbar macht,
- Verdichtung unterstützt,
- ND-tauglich bleibt,
- und in Compose sauber abbildbar ist.

---

## 2. Token-Prinzipien

### 2.1 Tokens sind Produktlogikträger
In CatchIt sind Tokens nicht bloß Styling-Helfer.  
Sie transportieren:

- Zustände
- Dringlichkeit
- Vertrauen
- Hierarchie
- Rückzug vs. Intervention
- Raumöffnung vs. Verdichtung

### 2.2 Tokens dürfen nicht rein brand-driven sein
Die Zustandsfarben des Systems sind wichtiger als dekorative Markenfarben.

### 2.3 Semantische Tokens vor harte Werte
Bevorzugt:
- `color.state.stable.background`
- `color.state.fragile.background`
- `space.main.hero.gap`

Nicht bevorzugt:
- `blue500`
- `gap16`

---

## 3. Farbmodell

### 3.1 Zustandsfarben
**Stable / Idle / Ruhe**
- `color.state.stable.gradient.start`
- `color.state.stable.gradient.end`

**Go / bald relevant**
- `color.state.ready.gradient.start`
- `color.state.ready.gradient.end`

**Fragile / CatchIt regelt**
- `color.state.fragile.gradient.start`
- `color.state.fragile.gradient.end`

**Action required**
- `color.state.action.gradient.start`
- `color.state.action.gradient.end`

**Critical**
- `color.state.critical.gradient.start`
- `color.state.critical.gradient.end`

**Complete / cool down**
- `color.state.complete.gradient.start`
- `color.state.complete.gradient.end`

### 3.2 Beispielwerte
Diese Werte sind Startpunkte, keine Dogmen.

```yaml
color:
  state:
    stable:
      gradient:
        start: "#4DB9E6"
        end: "#1F4B8F"
    ready:
      gradient:
        start: "#62D58B"
        end: "#1C8F4E"
    fragile:
      gradient:
        start: "#F4D86A"
        end: "#D0A32A"
    action:
      gradient:
        start: "#F1A24B"
        end: "#C56C11"
    critical:
      gradient:
        start: "#E96A5F"
        end: "#B9352A"
    complete:
      gradient:
        start: "#7D8CA6"
        end: "#475569"
```

### 3.3 Neutrale Farben
```yaml
color:
  surface:
    primary: "#FFFFFF"
    secondary: "#F4F7FB"
    elevated: "#FFFFFF"
  text:
    primary: "#102033"
    secondary: "#5C6B82"
    inverse: "#FFFFFF"
    muted: "#A9B4C4"
  stroke:
    subtle: "#DCE4EF"
    strong: "#97A6BA"
```

### 3.4 Semantische Funktionsfarben
```yaml
color:
  feedback:
    success: "#2E7D32"
    warning: "#C98A00"
    danger: "#C0392B"
    info: "#3D67D6"
```

---

## 4. Typografie

### 4.1 Rollen
CatchIt braucht nicht viele Fonts, sondern **eine präzise Hierarchie**.

Empfohlene Rollen:
- **Display / Countdown Font**
- **Primary UI Font**

### 4.2 Empfehlung
- Countdown / Hero-Zahl: markante Display-Sans
- Restliche UI: Inter oder vergleichbar neutrale, gut ausgebaute Sans

### 4.3 Tokens
```yaml
font:
  family:
    display: "Orbitron"
    ui: "Inter"
  weight:
    regular: 400
    medium: 500
    semibold: 600
    bold: 700
```

### 4.4 Type Scale
```yaml
type:
  heroCountdown:
    fontFamily: "{font.family.display}"
    fontSize: 56
    lineHeight: 56
    fontWeight: "{font.weight.bold}"
  heroLabel:
    fontFamily: "{font.family.ui}"
    fontSize: 16
    lineHeight: 22
    fontWeight: "{font.weight.medium}"
  titleLg:
    fontFamily: "{font.family.ui}"
    fontSize: 24
    lineHeight: 30
    fontWeight: "{font.weight.semibold}"
  titleMd:
    fontFamily: "{font.family.ui}"
    fontSize: 20
    lineHeight: 26
    fontWeight: "{font.weight.semibold}"
  body:
    fontFamily: "{font.family.ui}"
    fontSize: 16
    lineHeight: 24
    fontWeight: "{font.weight.regular}"
  bodySm:
    fontFamily: "{font.family.ui}"
    fontSize: 14
    lineHeight: 20
    fontWeight: "{font.weight.regular}"
  label:
    fontFamily: "{font.family.ui}"
    fontSize: 12
    lineHeight: 16
    fontWeight: "{font.weight.medium}"
```

### 4.5 Typoregeln
- keine langen Texte in Display-Font
- keine All-Caps-Fließtexte
- Countdown-Zahlen monolithisch, aber nicht verspielt
- kleine Labels dürfen nie die einzige Trägerin kritischer Information sein
- Zahlen und Zeitangaben klar, ruhig, ohne unnötigen Schmuck

---

## 5. Spacing, Radius, Elevation

### 5.1 Spacing-Scale
```yaml
space:
  0: 0
  1: 4
  2: 8
  3: 12
  4: 16
  5: 20
  6: 24
  8: 32
  10: 40
  12: 48
  16: 64
```

### 5.2 Radius
```yaml
radius:
  sm: 12
  md: 16
  lg: 24
  xl: 32
  pill: 999
```

### 5.3 Elevation
```yaml
elevation:
  flat: 0
  card: 1
  overlay: 2
  modal: 3
```

### 5.4 Regel
CatchIt sollte visuell eher über:
- Abstand
- Tonwert
- Layering
- Größe

arbeiten als über harte Schatten.

---

## 6. Motion-Tokens

Motion muss Zustandswechsel lesbar machen, nicht Effekte inszenieren.

### 6.1 Grundsätze
- ruhig
- weich
- klar
- nie hektisch
- nie permanent animiert
- kein visuelles „Nervensystem“ im Idle

### 6.2 Tokens
```yaml
motion:
  duration:
    fast: 140
    normal: 220
    calm: 320
  easing:
    standard: "cubic-bezier(0.2, 0.0, 0.0, 1.0)"
    enter: "cubic-bezier(0.2, 0.8, 0.2, 1.0)"
    exit: "cubic-bezier(0.4, 0.0, 1.0, 1.0)"
```

### 6.3 Motion-Muster
- Main -> Map Reveal: `calm`
- Reveal -> Focus: `normal`
- Statuswechsel Blau -> Grün: `calm`, weich, keine harte Störung
- Fragil -> Action: `normal`, deutlicher
- Replan-Sheet: `normal`
- Cathy Transition: zurückhaltend, nie parallel zu kritischem Content dominant

---

## 7. Hauptkomponenten

### 7.1 Countdown Bubble
Rolle:
- permanenter Zeitanker

Tokens:
```yaml
component:
  countdownBubble:
    minSize: 168
    padding: 24
    radius: "{radius.pill}"
    bg: "rgba(255,255,255,0.18)"
    border: "rgba(255,255,255,0.32)"
    blur: "optional"
```

### 7.2 State Backdrop
Rolle:
- emotional lesbare Zustandsfläche

Eigenschaften:
- Vollbild-Gradient
- keine Texturüberladung
- keine konkurrierenden Hintergrundobjekte
- Cathy nur, wenn vereinbar mit Handlungspriorität

### 7.3 Option Chip / Option Tile
Rolle:
- wenige machbare Alternativen
- Rollen statt Rohdaten

Tokens:
```yaml
component:
  optionTile:
    minWidth: 72
    paddingX: 12
    paddingY: 8
    radius: 16
    labelStyle: "{type.label}"
    valueStyle: "{type.titleMd}"
```

### 7.4 Kettenkontext-Zeile
Beispiele:
- `Für: Kita`
- `Schritt 2 von 4`
- `Danach: Heimweg`

Regel:
- dezent
- sekundär
- nie detailüberladen

### 7.5 Map Card
Rolle:
- räumliche Ebene

Eigenschaften:
- wächst von unten in den Raum
- klar vom Hero getrennt
- nicht wie ein fremdes Modal
- kann in Focus dominant werden

### 7.6 Recovery Card
Rolle:
- Problem lesbar machen
- beste Rettung priorisieren
- Kettenauswirkung benennen

### 7.7 Quick Change Sheet
Rolle:
- spontane Änderung ohne Neustart

Einträge:
- `10 Min später`
- `späteren Bus nehmen`
- `Snack-Stopp einfügen`
- `Rückweg anpassen`
- `Kette neu abstimmen`

### 7.8 Meaning Label
Rolle:
- neutraler oder nutzerdefinierter Abschnittsname

Varianten:
- system
- neutral
- custom
- private-hidden

---

## 8. Zustands-Token

Neben visuellen Tokens braucht CatchIt produktnahe Zustands-Tokens.

```yaml
state:
  plan:
    stable
    ready
    fragile
    actionRequired
    critical
    complete
  reassurance:
    observe
    recheck
    fallbackReady
    interventionNeeded
  chain:
    currentStep
    nextStep
    upcomingStep
    returnPlanned
```

Diese Zustände sollten in UI-Mapping, Analytics, Logging und Content-Regeln wiederverwendbar sein.

---

## 9. Content-Tokens

Wichtige Microcopy sollte ebenfalls semantisch tokenisiert werden.

```yaml
copy:
  hero:
    leaveIn: "Spätestens los in"
    leaveNow: "Jetzt los"
    almostTime: "Bald los"
  role:
    best: "Beste Wahl"
    calm: "Ruhigste Reserve"
    fallback: "Fallback"
  trust:
    stable: "Alles im Plan"
    fragile: "Plan wird beobachtet"
    recheck: "Neu prüfen"
    fallbackReady: "Alternative bereit"
    action: "Bitte jetzt handeln"
```

Vorteil:
- konsistente Sprache
- klare State-to-copy-Mappings
- weniger Textdrift im Produkt

---

## 10. Token-Namensschema für Implementierung

Empfohlenes Schema:

```text
category.group.role.state.variant
```

Beispiele:
- `color.state.ready.gradient.start`
- `type.heroCountdown`
- `component.optionTile.selected.bg`
- `copy.hero.leaveIn`
- `motion.duration.calm`

---

## 11. Compose-Übersetzung

Für das bestehende Repo wäre sinnvoll:

- `CatchItColors`
- `CatchItTypography`
- `CatchItSpacing`
- `CatchItMotion`
- `CatchItComponents`
- `CatchItStatePalette`

Zusätzlich sinnvoll:
- Mapping-Funktion von `Scene/Alert/PlanState` auf Design-Tokens
- Copy Resolver für Statuslabels
- Option Role Resolver

---

## 12. Designsystem-Regeln für Konsistenz

1. Hero-Zeit schlägt Sekundärdaten.
2. Zustand schlägt Dekoration.
3. Rollen schlagen Datenvollständigkeit.
4. Karte erscheint nur bei räumlichem Bedarf.
5. Motion signalisiert Moduswechsel, nicht Show.
6. Farben sind niemals alleinige Informationsträger.
7. Private Bedeutungen werden nicht standardmäßig exponiert.

---

## 13. Übergang zu Teil 4

Teil 4 definiert:
- Accessibility
- Vertrauensarchitektur
- Privacy
- Voice- und Notification-Regeln
- Cathy-Rahmen

# CatchIt - Implementierungsnahe UX-/Design-Spezifikation - Teil 4
## Accessibility, Vertrauensarchitektur, Privacy, Voice, Cathy

---

## 1. Ziel dieses Teils

Dieser Teil übersetzt die bisherige CatchIt-Richtung in Regeln für:

- WCAG-orientierte Lesbarkeit
- ND-taugliche Reizkontrolle
- Vertrauensaufbau
- Privacy-by-default
- Notification- und Voice-Verhalten
- Cathy als humane Übersetzungsschicht

---

## 2. Accessibility-Grundsatz

CatchIt soll nicht nur „auch zugänglich“ sein.  
Die ND-taugliche Produktidee und die Accessibility-Idee verstärken sich gegenseitig.

### Gemeinsame Interessen
- klare Hierarchie
- wenig konkurrierende Reize
- lesbare Zustände
- stabile Interaktionsmuster
- ausreichend große Ziele
- gute Fokusführung
- reduzierte Überraschung
- klare Sprache

---

## 3. WCAG-orientierte Grundregeln

### 3.1 Farbe nie allein
Alle Zustände brauchen neben der Farbe mindestens einen weiteren Marker:
- Text
- Icon
- Bubble-Verhalten
- Rollenlabel
- haptische / akustische Variante

### 3.2 Zielgrößen
Interaktive Elemente brauchen ausreichende Touch-Fläche und Abstand.  
Besonders relevant:
- Options-Tiles
- Karten-Interaktionen
- Swipe-Hints
- Quick Change Actions
- Recovery-Entscheidungen

### 3.3 Fokuszustände
Wenn Fokussteuerung, Tastatur, Screenreader oder Switch-Zugriff relevant werden, braucht jede Aktion:
- klaren Fokusrahmen
- genügenden Kontrast
- eindeutige Reihenfolge

### 3.4 Textskalierung
Das System muss mit vergrößerter Schrift funktionieren, besonders:
- Hero-Labels
- Option Chips
- Recovery Cards
- untere Karteninfos

### 3.5 Bewegung
Animationen müssen abschaltbar oder ausreichend zurückhaltend sein:
- keine hektischen Dauerbewegungen
- keine pulsierenden Alarme als Default
- kein permanent lebendiger Companion im kritischen Modus

---

## 4. ND-taugliche Reizarchitektur

CatchIt braucht keine sterile UI, aber es braucht **Reizdisziplin**.

### Gute Reize
- klarer Farbumschlag
- eine dominante Bubble
- wenige Optionen
- sanfte räumliche Öffnung
- klare Statusworte

### Schlechte Reize
- mehrere konkurrierende CTA gleichzeitig
- zu viel Animation
- zu viele metrische Details
- technische Statusmeldungen
- aggressive Assistentenpräsenz
- emotionalisierte Fehlerszenarien

### Regel
**Ein zentraler Reizträger pro Zustand.**

Beispiele:
- Main: Countdown
- Map Reveal: Karte
- Recovery: einfachste Rettung
- Wizard: die aktuelle Frage

---

## 5. Vertrauensarchitektur

Vertrauen muss aktiv gestaltet werden.

### CatchIt soll sichtbar machen:
- wie sicher der Plan ist
- ob beobachtet wird
- ob neu geprüft werden muss
- ob eine Alternative bereitliegt
- ob der Rest der Kette stabil bleibt

### Geeignete Vertrauensmuster
- `Alles im Plan`
- `Wird beobachtet`
- `Neu prüfen`
- `Alternative bereit`
- `Kette angepasst`
- `Rückweg bleibt machbar`

### Ungünstige Muster
- `alles okay`
- `kein Problem`
- `perfekt`
- `mach dir keine Sorgen`

Zu glatt klingende Beschwichtigung wirkt weniger vertrauenswürdig als präzise Einordnung.

---

## 6. Privacy-by-default

CatchIt muss davon ausgehen, dass Nutzer sich oft im öffentlichen Raum befinden.

### Öffentliche Kanäle
- Lockscreen
- Voice
- Wearables
- Schnellansichten
- Main Screen in gesellschaftlichen Situationen

### Standardregel
Nur zeigen oder aussprechen, was für die Aufgabe nötig ist.

### Gute Defaults
- `Arzttermin`
- `Besorgung`
- `Zwischenstopp`
- `nächstes Ziel`
- `Rückweg`

### Private Ebenen
Detailliertere Bezeichnungen dürfen erst sichtbar sein, wenn:
- Nutzer sie selbst gesetzt hat
- Nutzer sie bewusst einblendet
- die Oberfläche privat genug ist

---

## 7. Voice-UX-Regeln

Voice darf nicht als unkontrolliertes Vorlesen persönlicher Kontexte gestaltet werden.

### Voice darf standardmäßig ansagen:
- wann gehandelt werden muss
- ob sich etwas geändert hat
- welche grobe Richtung relevant ist
- welche Linie / Haltestelle jetzt zählt
- dass ein Fallback bereit ist

### Voice soll standardmäßig vermeiden:
- intime Kalendereintragsdetails
- peinliche To-dos
- medizinische Fachdetails
- private Nutzerlabels
- zu lange Sätze

### Gute Voice-Sätze
- `In zehn Minuten losgehen.`
- `Neue Alternative bereit.`
- `Nächste Haltestelle: Hauptbahnhof.`
- `Rückweg wurde angepasst.`

### Schlechte Voice-Sätze
- zu intime Bedeutungen
- komplexe Erklärtexte
- mehrere Alternativen in einem Satz
- provider-technische Sprache

---

## 8. Notification-Regeln

Benachrichtigungen müssen sozial robust und handlungsfähig sein.

### Notification-Ebenen
1. nur Hinweis
2. Recheck
3. Handlung
4. Fallback

### Gute Benachrichtigungen
- `Bald losgehen`
- `Plan wird neu geprüft`
- `Alternative bereit`
- `Bitte jetzt aufbrechen`

### Schlechte Benachrichtigungen
- komplette Routentexte
- private Labels
- zu viele Echtzeitmeldungen
- technische Warnungen ohne Handlung

---

## 9. Accessibility-sensible Zustände

### Main Screen
- Countdown bleibt lesbar
- Farben plus Textmarker
- Optionen nicht zu klein
- klare Wischhinweise nur wenn nötig

### Map Reveal
- Swipe darf nicht einzige Entdeckungsmethode sein
- Karte muss auch antippbar erreichbar sein
- reduzierte Informationen oben müssen weiterhin lesbar bleiben

### Map Focus
- Karteninfos unterhalb müssen screenreader-tauglich sein
- Bubble darf nicht wichtige Kartensteuerung verdecken
- Wegdauer / Entfernung / Linie als klare Reihenfolge

### Recovery
- ein Hauptweg
- eine Reserve
- kein Entscheidungstsunami

### Wizard
- eine Frage pro Screen oder sehr klar gruppiert
- Fortschritt lesbar
- Fehlervermeidung vor endgültigem Speichern

---

## 10. Cathy-Regeln

Cathy ist wichtig, aber sekundär zur Travel Truth.

### Cathy bei Stabilität
- peripher
- ruhig
- optional
- eher zustandsrahmend als erklärend

### Cathy bei Unsicherheit
- etwas präsenter
- kann Übergänge verständlicher machen
- darf Recovery rahmen

### Cathy bei kritischer Handlung
- nicht dominieren
- nicht ablenken
- nicht emotional überlagern

### Cathy-Tonalität
- nie infantil, wenn Präzision nötig ist
- nicht zu niedlich im Störfall
- nicht gleichzeitig mit kritischem Text konkurrieren

---

## 11. Intentional Friction als Vertrauenswerkzeug

Die Designentscheidung, an bestimmten Stellen Friktion bewusst zuzulassen, ist richtig.

### Sinnvolle Stellen
- System schlägt Bedeutung vor, statt sie einfach festzuschreiben
- Kettenänderung wird kurz sichtbar bestätigt
- Recovery erklärt kurz die Auswirkung
- private Labels müssen aktiv gesetzt oder freigegeben werden
- kritische Zustandswechsel bekommen klaren Marker

### Nicht sinnvoll
- dauernde Bestätigungsdialoge
- ständiges Nachfragen
- unnötige Setup-Hürden
- versteckte Komplexität hinter simplen Labels

---

## 12. Vertrauensfähige Microcopy-Muster

### Stabil
- `Alles im Plan`
- `Du musst noch nicht handeln`
- `Nächster Schritt ist vorbereitet`

### Beobachtung
- `Plan wird beobachtet`
- `Noch kein Eingriff nötig`
- `Alternative ist vorbereitet`

### Recheck
- `Neu prüfen`
- `Anschluss wird knapp`
- `Plan wurde aktualisiert`

### Handlung
- `Bitte jetzt losgehen`
- `Spätestens jetzt aufbrechen`
- `Alternative aktivieren`

### Abschluss
- `Abschnitt geschafft`
- `Danach geht es weiter mit ...`
- `Kein aktiver Abschnitt`

---

## 13. Prüffragen für jedes UI-Element

Jedes Element in CatchIt sollte diese Fragen bestehen:

1. Hilft es beim nächsten sinnvollen Schritt?
2. Macht es die Lage lesbarer?
3. Schützt es Vertrauen?
4. Ist es öffentlich robust?
5. Ist es bei größerer Schrift noch verständlich?
6. Überlädt es den Zustand?
7. Ist es für ND-Nutzung eher regulierend als stressend?

---

## 14. Übergang zu Teil 5

Teil 5 verbindet alles mit dem aktuellen Repo:
- technische Anschlussfähigkeit
- sinnvolle Priorisierung
- Komponenten- und Screen-Reihenfolge
- Implementierungsroadmap

# CatchIt - Implementierungsnahe UX-/Design-Spezifikation - Teil 5
## Repo-Alignment, technische Anschlussfähigkeit, priorisierte Umsetzung

---

## 1. Ziel dieses Teils

Dieser Teil bringt das Designsystem mit dem aktuellen Repo-Stand in Einklang.  
Er beantwortet vier Fragen:

1. Was passt schon gut zur bestehenden Architektur?
2. Welche Teile des Designkonzepts sind sofort anschlussfähig?
3. Was braucht neue Modelle oder Erweiterungen?
4. Welche Screens solltest du zuerst als Mockups bauen, damit das Konzept kohärent und überzeugend ist?

---

## 2. Was das Repo bereits gut vorbereitet

Auf Basis des aktuellen öffentlichen Repo-Stands ist bereits viel strukturell passend:

- modulare Android-Architektur
- Compose-basierte UI
- getrennte Core-/Data-/Feature-Module
- Modelle für Journeys, Legs, Optionen und Active Plans
- Scene-/Alert-Logik
- Wizard-First-Routing
- DataStore-basierte Persistenz
- Cathy bereits als optionaler Layer, aber nicht als Wahrheitsquelle
- Home-Feature, Timeline-Präsentation und Testoberflächen

Das ist eine gute Basis für CatchIt als Zustandssystem.

---

## 3. Was aus UX-Sicht direkt anschlussfähig ist

### 3.1 Zustands-Screen als Home
Das Repo besitzt bereits Szene-/Alert-Logik.  
Diese ist ein natürlicher Ausgangspunkt, um den Main Screen als Zustandsoberfläche zu treiben.

### 3.2 Wizard-First-Planung
Die vorhandene Wizard-Logik lässt sich produktiv in Richtung Ketten-Wizard ausbauen.

### 3.3 Active Plan / Multi-Leg-Denken
Da bereits Modelle für Journey Legs, Journey Options und Active Plans vorhanden sind, passt das Kettenkonzept strukturell gut.

### 3.4 Cathy als nachgelagerter Layer
Die Repo-Haltung, Cathy nicht zur Travel Truth zu machen, ist konsistent mit der SSOT.

---

## 4. Was noch nicht reif genug ist, um voll auszuspielen

### 4.1 Echte Live-Reassurance
Solange:
- Provider-Mappings,
- Realtime-Reconciliation,
- Caching,
- Geo-Kontext,
- und produktive Response-Qualität

noch nicht robust sind, darf das UX-Konzept nicht so tun, als wäre bereits jede Vertrauensaussage live beweisbar.

### 4.2 Vollautomatische Semantik
Die Benennung von Abschnitten, privaten Bedeutungen und Alltagskontexten sollte erst später stärker automatisiert werden.

### 4.3 CatchIt2gather
Mehrpersonenlogik ist architektonisch vorgedacht, aber noch kein produktiver Fokus.

---

## 5. Design-zu-Repo-Mapping

### Main Screen / Default Home
Wahrscheinliche Andockpunkte:
- `feature:home`
- bestehende Scene-/Alert-Mappings
- evtl. bestehende Timeline-/Poster-Darstellungen als Zwischenzustand

### Wizard / Kettenaufbau
Wahrscheinliche Andockpunkte:
- `feature:wizard`
- `WizardSetup`
- DataStore-Persistenz
- spätere Erweiterung um Ketten- und Bewegungsstilfragen

### Zustands- und Rollenlogik
Wahrscheinliche Andockpunkte:
- `core:model`
- AlertLevel / Scene
- JourneyOption / ActivePlanTile

### Token-System
Wahrscheinliche Andockpunkte:
- `core:ui`
- Compose Theme / shared primitives

### Cathy
Wahrscheinliche Andockpunkte:
- `feature:cathy`
- State-Image-Support
- spätere Zustandsabbildung aus Travel Truth

---

## 6. Empfohlene neue konzeptuelle Modelle

Auch wenn sie noch nicht als finale Code-Modelle existieren müssen, sollte das Design von folgenden Konzepten ausgehen:

### 6.1 ChainPlan
Repräsentiert nicht nur eine einzelne Verbindung, sondern die gesamte Kette.

Mögliche Felder:
- chainId
- segments[]
- currentSegmentIndex
- returnIncluded
- chainConfidence
- fallbackAvailability
- nextRelevantActionAt

### 6.2 SegmentMeaning
Trennt Systemstruktur von menschlicher Bedeutung.

Mögliche Felder:
- systemName
- neutralLabel
- customLabel
- privacyLevel
- sourceType

### 6.3 TrustState
Macht Vertrauenslogik explizit.

Mögliche Felder:
- planState
- confidence
- recheckNeeded
- fallbackReady
- interventionRequired
- observedAt

### 6.4 OptionRole
Rolle der angezeigten Alternativen.

Werte:
- best
- calmReserve
- fallback
- lateButPossible
- walkingPreferred

---

## 7. Empfohlene Compose-/Design-System-Struktur

### In `core:ui`
- `CatchItTheme`
- `CatchItColors`
- `CatchItTypography`
- `CatchItSpacing`
- `CatchItMotion`
- `CatchItComponents`

### Neue UI-Primitives
- `CountdownBubble`
- `StateBackdrop`
- `OptionRoleTile`
- `ChainContextLine`
- `MapRevealContainer`
- `RecoveryCard`
- `QuickChangeSheet`
- `MeaningLabel`
- `TrustBanner`

### Resolver-Schicht
- `SceneToBackdropResolver`
- `PlanStateToCopyResolver`
- `OptionRoleResolver`
- `MeaningPrivacyResolver`

---

## 8. Priorisierte Reihenfolge der Implementierungs-/Designarbeit

### Phase 1 - Narrativer Kern
Ziel: Das Konzept muss in Mockups und Reviewgesprächen sofort verständlich werden.

Bauen:
1. Main Screen - Blau
2. Main Screen - Grün
3. Map Reveal
4. Map Focus
5. Recovery

Warum:
Das ist die stärkste Produktstory und der klarste Unterschied zu klassischen Transit-Apps.

### Phase 2 - Planlogik
Bauen:
6. Wizard - Vorhaben
7. Wizard - Kettenfrage
8. Wizard - Zusammenfassung
9. Vergleichssicht

Warum:
Jetzt wird sichtbar, dass CatchIt Ketten wirklich anders plant.

### Phase 3 - Eingriff ohne Neustart
Bauen:
10. Quick Change Sheet
11. Recheck State
12. Fallback Ready State

Warum:
Hier zeigt CatchIt seine Alltagsüberlegenheit.

### Phase 4 - Vertrauen und Schutz
Bauen:
13. Privacy-/Voice-Safe Notification State
14. Orte / Routinen / Labels
15. Settings / Accessibility

### Phase 5 - Cathy
Bauen:
16. Cathy peripher / stabil
17. Cathy Transition / Unsicherheit
18. Cathy Recovery-Begleitung

---

## 9. Welche Screens du selbst unbedingt als Mockups zusammenbauen solltest

Hier die verdichtete Liste in priorisierter Form.

### Absolute Pflicht
1. Main - stabil (blau)
2. Main - bald relevant (grün)
3. Main - fragil / Handlung nähert sich
4. Map Reveal
5. Map Focus
6. Recovery - einfachste Rettung
7. Wizard - Vorhaben
8. Wizard - Kettenfrage
9. Wizard - Review / Kettenübersicht

### Sehr sinnvoll
10. horizontale Rollenvergleichssicht
11. Quick Change Sheet
12. Recheck nötig
13. Fallback bereit
14. Kein aktiver Abschnitt / cool-down
15. Privacy-/Notification-safe Variante

### Für kohärente Vollständigkeit
16. Orte / Routinen / neutrale Labels
17. Accessibility / Preferences
18. Cathy peripher
19. Cathy in Transition
20. abgeschlossener Abschnitt mit `Danach`

---

## 10. Was jedes dieser Mockups beweisen soll

### Main Screens
Beweisen:
- Zustandslogik
- Verdichtung
- Rollenalternativen
- Countdown als Handlungsschwelle

### Map Reveal / Focus
Beweisen:
- Raum wird nur bei Bedarf geöffnet
- Bubble bleibt als Zeitanker
- Progression statt harter Kontextsprünge

### Recovery
Beweist:
- CatchIt repariert Ketten
- Störung wird nicht als Datenflut gezeigt

### Wizard
Beweist:
- CatchIt fragt nach Vorhaben, nicht nach Routenparametern

### Quick Change
Beweist:
- spontane Alltagsänderung ohne Neustart

### Privacy-Screen
Beweist:
- CatchIt ist sozial robust
- Bedeutung wird kontrolliert exponiert

### Cathy
Beweist:
- humane Übersetzungsschicht
- aber nicht Quelle der Travel Truth

---

## 11. Empfohlene Dateistruktur für deine eigenen Mockups

Wenn du die Mockups in Figma oder lokal organisierst, empfehle ich:

```text
01_Product_Story/
  01_Main_Stable
  02_Main_Ready
  03_Main_Fragile
  04_Map_Reveal
  05_Map_Focus
  06_Recovery

02_Planning/
  01_Wizard_Intent
  02_Wizard_Chain
  03_Wizard_Review
  04_Compare

03_Adjustment/
  01_Quick_Change
  02_Recheck
  03_Fallback

04_Trust_Privacy/
  01_Privacy_Safe
  02_Locations_Labels
  03_Accessibility

05_Cathy/
  01_Peripheral
  02_Transition
  03_Recovery
```

---

## 12. Praktische Schlussfolgerung

Wenn du die nächsten Mockups baust, beginne **nicht** mit Settings, Profil oder generischen Listen.  
Baue zuerst die Screens, die den Kern beweisen:

- der Main Screen als Zustandsoberfläche
- die Raumöffnung per Swipe
- Recovery
- der kettenfähige Wizard
- spontane Änderung ohne Neustart

Erst danach lohnt sich die Ausarbeitung von Rändern wie Orten, Präferenzen oder Cathy-Feindetails.

---

## 13. Abschluss

Dieses zweite Dokumentenpaket versteht CatchIt als:

- Decision-Relief-System
- Reassurance-System
- Ketten-System
- ND-taugliche Zustandsmaschine
- vertrauensfähige, privacy-sensible Mobilitätsoberfläche

Die nächsten besten Artefakte wären nun:

1. ein drittes Paket als **Figma-Screen-Spec in Markdown**,
2. ein **Token-Export-Stub für Compose/JSON**,
3. oder ein **Komponentenhandbuch pro Screenzustand**.
