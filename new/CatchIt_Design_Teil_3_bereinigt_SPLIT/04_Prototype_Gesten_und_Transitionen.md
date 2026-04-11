# CatchIt – Teil 3D
## Prototype, Gesten und Transitionen

## 1. Grundsatz

Gesten und Transitionen sollen wie Erweiterungen derselben Wahrheit wirken, nicht wie Sprünge in andere Apps.

---

## 2. Motion-/Transition-Spezifikation

### Blue → Green
- sanfter Farbübergang
- keine harte Eskalation
- semantische Zuspitzung ohne neue Seite

### Green / Yellow → Orange
- Anchor-Handover Countdown → Instruction
- tighter composition
- keine CTA-Pop-Ästhetik
- weniger Ambiguität, nicht mehr Show

### Main → Map Reveal
- vertical move / smart animate
- Hero rückt leicht nach oben
- Karte wächst von unten
- Bubble bleibt im Blick

### Map Reveal → Map Focus
- Karte wird dominanter
- Bubble bleibt an oberer Achse
- operative Infos ziehen unter Karte

### Quick Change anwenden
- Ergebnis erscheint als ruhige Umstellung
- kein chaotischer Reflow
- kurze Confirmation

### Recovery
- klar sichtbarer Zustandswechsel
- danach sofort die einfachste Action
- keine Datendump-Phase

---

## 3. Gestenlogik

### Swipe up
- räumliche Ebene öffnen
- Map Reveal

### Tap auf Karte
- Fokus auf Orientierung
- Map Focus

### Swipe down
- zurück zur Verdichtung

### Tap auf Alternative
- Alternative aktivieren oder als Reserve erklären

### Tap auf Quick Change
- lokale Anpassung statt kompletter Neuplanung

### Regel
Swipe darf nie exklusiv sein.  
Alle relevanten Funktionen brauchen eine zugängliche Alternative.

---

## 4. Accessibility im Prototype

Explizit markieren:
- Countdown, Status und Handlung nie nur über Farbe
- sichtbare Fokuszustände
- ausreichende Touch-Ziele
- Large Text kompatibel
- Reduced Motion mitdenken
- Map Focus auch ohne komplexe Gestik erreichbar
- Voice-Inhalte neutral und kurz

---

## 5. Prototype-Strecke für Präsentation

Empfohlene klickbare Strecke:
1. Main / Blue
2. Main / Green
3. Main / Yellow oder direkt Map Reveal
4. Swipe → Map Reveal
5. Tap → Map Focus
6. Continue → Go Mode
7. Quick Change → späterer Bus
8. Ergebnis → Kette bleibt stabil
9. Recovery-Fall → einfachste Rettung

Das ist die stärkste Live-Demo-Sequenz.
