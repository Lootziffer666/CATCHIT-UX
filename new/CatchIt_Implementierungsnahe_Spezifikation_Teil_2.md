
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
