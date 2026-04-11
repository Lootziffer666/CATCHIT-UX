# CatchIt — Design-Dokument Teil 5  
## Repo-Alignment, Umsetzungsimplikationen und empfohlene nächste Schritte

---

## 1. Ziel dieses Dokuments

Dieses Dokument übersetzt die CatchIt-Produkt- und UX-Ausrichtung in die aktuelle Realität des Repositories.

Es geht ausdrücklich nicht darum, neue Fantasie-Features zu behaupten, sondern darum zu klären:

- Was ist architektonisch schon vorhanden?
- Was ist für die Designarbeit bereits anschlussfähig?
- Wo gibt es echte Lücken?
- Wie sollte das Design an die reale Codebasis andocken?

---

## 2. Was die aktuelle Repo-Lage bereits stützt

Die vorhandene Struktur ist für die CatchIt-Zielrichtung erstaunlich anschlussfähig.

### 2.1 Modularer Android-Unterbau
Die Modulstruktur stützt eine Trennung von:
- App-Wiring
- Kernmodellen
- Providern
- Featureflächen

Das ist wichtig, weil CatchIt nicht eine einzige starre UI sein soll, sondern mehrere UX-Layer auf derselben Travel Truth.

### 2.2 Journey- und Leg-Modelle
Die vorhandenen Modelle für Journey, Legs, Active Plan und Timeline sind ein guter Anker für:
- Ketten
- aktuelle Leg-Position
- Timeline-Darstellung
- aktuelle vs. nächste Schritte

### 2.3 Scene- und Alert-Logik
Die vorhandene State-/Scene-Struktur passt direkt zu:
- Zustandsfarben
- Bubble-Hintergründen
- Dringlichkeitsstufen
- Cathy-Nähe
- Reassurance-Layern

### 2.4 Wizard-first Routing
Das existierende Wizard-First-Modell ist die richtige Grundlage für:
- Ketten-Erfassung
- Vorhaben statt Route
- spätere Rückweg- und Folgeziel-Fragen

### 2.5 Cathy als separater Layer
Dass Cathy schon existiert, aber bewusst nicht die Business Truth besitzt, ist exakt richtig und sollte beibehalten werden.

---

## 3. Wo das aktuelle Repo dem Zielbild noch hinterherläuft

## 3.1 Live-Provider-Reife
Die größte praktische Grenze ist nicht die UX-Idee, sondern die reale Provider-Zuverlässigkeit.

Solange Mappings, Auth, Reconciliation, Geo und Realtime nicht ausgereift sind, bleibt:
- Confidence fragiler,
- Reassurance schwerer,
- Fallback weniger belastbar.

## 3.2 Kettenlogik als Produktobjekt
Obwohl Multi-Leg-Modelle vorhanden sind, braucht CatchIt produktlogisch mehr als nur Legs:
- Folgeabschnitte
- Rückweg als integraler Teil
- spontane Änderungen
- Restketten-Neubewertung

Das ist konzeptionell teilweise angelegt, aber noch nicht als vollständiges UX-Objekt ausformuliert.

## 3.3 Semantik und Labels
Hier besteht eine klare Lücke:
- Abschnittsbenennung
- neutrale vs. private Labels
- Nutzerlabels
- öffentlich sichere Standardbezeichnungen

## 3.4 Räumliche Reveal-Logik
Die gezeigte Vision von Main → Map Reveal → Map Focus ist ein eigenes Interaktionsmodell und muss bewusst in Screen-Struktur, Motion und Zustandsmodell gegossen werden.

---

## 4. Empfohlene Übersetzung in Featurebereiche

## 4.1 :feature:wizard
Ausbauen zu einem echten Chain Builder:

Ergänzen:
- wiederholbare Folgeziel-Frage
- Rückweg explizit
- neutrale Anlass-/Kontextlabels
- Bewegungsstil-/Tageslagen-Fragen

Nicht ergänzen:
- Providerjargon
- technische Advanced Settings als Primärmodell

## 4.2 :feature:home
Umformen zur eigentlichen Zustands-Startseite:

Soll enthalten:
- Hero Bubble
- 3 Rollenoptionen
- Chain-Kontext
- State Backdrop
- Swipe-Anker für Raumebene

Soll nicht primär bleiben:
- debugartige Timeline-Optik
- datenlastige Rohpräsentation

## 4.3 :feature:cathy
Beibehalten als regulatorischer Overlay-Layer:

Soll tun:
- Stimmung / Nähe nach Zustand
- Reassurance rahmen
- unsichere Situationen begleiten

Soll nicht tun:
- Entscheidungstruth überschreiben
- Hauptinformationen verdrängen

## 4.4 zukünftige Semantik-/Privacy-Schicht
Empfohlen als eigener, klar begrenzter Verantwortungsbereich:

- neutrale Labels
- optionale Nutzerlabels
- öffentlicher vs. privater Modus
- voice-sichere Standardbezeichnungen

---

## 5. Empfohlene Produkt- und UI-Backlog-Reihenfolge

## Phase A — Zustandskern schärfen
1. Home als Zustands-Screen definieren
2. Hero Bubble semantisch festlegen
3. 3 Rollenoptionen statt bloßer Linienanzeige
4. Zustandsfarben + Labels synchronisieren

## Phase B — Raumebene anschließen
5. Map Reveal einführen
6. Map Focus aus Reveal ableiten
7. Bubble-Präsenz über alle Zustände erhalten
8. operative Fußwegdaten unter der Karte ordnen

## Phase C — Kettenprodukt vervollständigen
9. Folgeziele und Rückweg im Wizard ausbauen
10. Restkettenlogik bei Replanning definieren
11. Timeline als tiefe Erklärungsebene sauber an Home anbinden

## Phase D — Vertrauen und Privatheit
12. neutrales Labelsystem
13. Nutzerlabels
14. privacy-sichere Voice-Regeln
15. intentionales Friktionsmodell an sensiblen Punkten

---

## 6. Was nicht priorisiert werden sollte

- perfekte Auto-Semantik in V1
- voll ausdefinierte Mehrpersonenlogik
- dekorative Kartenpersistenz
- Cathy als dominierende Primärfigur
- visuelle Komplexität vor Vertrauensarchitektur

---

## 7. Delivery-Artefakte, die als Nächstes sinnvoll wären

### A. Figma-taugliche Spezifikation
- Main
- Map Reveal
- Map Focus
- Timeline
- Recovery
- Wizard

### B. Zustandsmatrix
- calm
- ready
- warning
- attention
- critical

Mit:
- Farbe
- Hero-Text
- Bubble-Bedeutung
- Cathy-Nähe
- Alternativen-Rollen
- erlaubten Aktionen

### C. Token-Datei
JSON oder Kotlin-Struktur für:
- Farben
- Typografie
- Abstände
- Motion
- Elevation
- Zustandsnamen

### D. Content-Regelkatalog
- öffentliche Labels
- neutrale Standardbegriffe
- verbotene intime Auto-Namen
- Voice-Regeln
- Recovery-Microcopy

---

## 8. Fazit

Das Repository ist bereits nah genug an der CatchIt-Idee, dass die jetzt formulierte UX- und Designlogik **keine Fantasiespezifikation** ist.

Aber:
Die Vision wird nur dann wirklich stark, wenn die nächste Iteration nicht in noch mehr Provider- oder Debug-Flächen investiert, sondern in:

- Zustandsverdichtung,
- Kettenlogik,
- Raum-als-zweite-Ebene,
- Vertrauensarchitektur,
- und privacy-sensible Semantik.

Erst dann wird aus dem bestehenden Kern wirklich das Produkt, das klassische Transit-Apps in Alltagstauglichkeit klar schlägt.
