# CatchIt – Teil 1D
## V1-Fokus und Repo-Alignment

## 1. V1-Produktfokus

### In V1 zwingend
- Kettenlogik im Wizard
- Zustands-Screen als Home
- klare Trennung von Plan / Go / Recovery
- Swipe-basierte Raumebene
- klare Rollen für wenige tragfähige Optionen
- ehrliche Confidence-/Fallback-Kommunikation
- einfache Replan-Operationen ohne Neustart
- neutrale, editierbare Labels statt falscher Automatik

### Später ausbaubar
- intelligente Abschnittsbenennung
- Kalender-/Intent-Fusion
- Mehrpersonenlogik
- stärkere Cathy-Ausdifferenzierung
- weitergehende Personalisierung von Bewegungsstilen
- komplexere semantische Alltagsmodelle

---

## 2. Repo-Alignment: was die aktuelle Struktur bereits stützt

Die vorhandene Struktur ist für die CatchIt-Zielrichtung anschlussfähig.

### 2.1 Modularer Android-Unterbau
Die Modulstruktur stützt die Trennung von:
- App-Wiring
- Kernmodellen
- Providern
- Featureflächen

Das ist wichtig, weil CatchIt nicht eine einzige starre UI sein soll, sondern mehrere UX-Layer auf derselben Travel Truth.

### 2.2 Journey-, Leg- und Active-Plan-Modelle
Die vorhandenen Modelle sind ein guter Anker für:
- Ketten
- aktuelle Leg-Position
- Timeline-Darstellung
- aktuelle vs. nächste Schritte

### 2.3 Scene- und Alert-Logik
Die vorhandene State-/Scene-Struktur passt gut zu:
- Zustandsfarben
- Dringlichkeitsstufen
- Reassurance-Layern
- späterer Cathy-Nähe

### 2.4 Wizard-first Routing
Das bestehende Wizard-First-Modell ist richtig für:
- Ketten-Erfassung
- Vorhaben statt Route
- Rückweg- und Folgeziel-Fragen

### 2.5 Cathy als separater Layer
Dass Cathy bereits getrennt von der Business Truth existiert, ist richtig und sollte beibehalten werden.

---

## 3. Wo das Repo dem Zielbild noch hinterherläuft

### 3.1 Live-Provider-Reife
Die größte Grenze ist nicht die UX-Idee, sondern reale Provider-Zuverlässigkeit.

Solange Mapping, Auth, Reconciliation, Geo und Realtime nicht ausgereift sind, bleiben:
- Confidence fragiler
- Reassurance schwerer
- Fallbacks weniger belastbar

### 3.2 Kettenlogik als Produktobjekt
Multi-Leg-Modelle reichen nicht aus. CatchIt braucht produktlogisch zusätzlich:
- Folgeabschnitte
- Rückweg als integralen Teil
- spontane Änderungen
- Restketten-Neubewertung

### 3.3 Semantik und Labels
Hier besteht weiterhin eine Lücke:
- Abschnittsbenennung
- neutrale vs. private Labels
- Nutzerlabels
- öffentlich sichere Standardbezeichnungen

### 3.4 Räumliche Reveal-Logik
Main → Map Reveal → Map Focus ist ein eigenes Interaktionsmodell und muss bewusst in:
- Screen-Struktur
- Motion
- Zustandsmodell
- und Persistence-Logik

gegossen werden.

---

## 4. Empfohlene Übersetzung in Featurebereiche

### :feature:wizard
Ausbauen zu einem echten Chain Builder.

Ergänzen:
- wiederholbare Folgeziel-Frage
- Rückweg explizit
- neutrale Anlass-/Kontextlabels
- Bewegungsstil-/Tageslagen-Fragen

Nicht ergänzen:
- Providerjargon
- technische Advanced Settings als Primärmodell

### :feature:home
Umformen zur eigentlichen Zustands-Startseite.

Soll enthalten:
- Hero Anchor
- 3 Rollenoptionen
- Chain-Kontext
- State Backdrop
- Swipe-Anker für Raumebene

Soll nicht primär bleiben:
- datenlastige Rohpräsentation
- Debug-/Timeline-Look als Default

### :feature:cathy
Beibehalten als regulatorischer Overlay-Layer.

Soll tun:
- Stimmung / Nähe nach Zustand
- Reassurance rahmen
- unsichere Situationen begleiten

Soll nicht tun:
- Entscheidungstruth überschreiben
- Hauptinformationen verdrängen

### zukünftige Semantik-/Privacy-Schicht
Empfohlen als klar begrenzter Verantwortungsbereich:
- neutrale Labels
- optionale Nutzerlabels
- öffentlicher vs. privater Modus
- voice-sichere Standardbezeichnungen

---

## 5. Abschluss

CatchIt ist am stärksten, wenn es **nicht wie ein Transitviewer aussieht**, sondern wie ein System, das reale Alltagsketten stabilisiert.

Der eigentliche USP ist nicht nur:
- die Bubble
- die Farben
- die Karte
- oder Cathy

Der eigentliche USP ist:
**CatchIt plant nicht bloß Wege. CatchIt stabilisiert Ketten.**

Und genau deshalb muss das Designsystem:
- zustandsbasiert
- vertrauensfähig
- ND-tauglich
- progressiv verdichtend
- privacy-sensibel
- und technisch anschlussfähig

sein.
