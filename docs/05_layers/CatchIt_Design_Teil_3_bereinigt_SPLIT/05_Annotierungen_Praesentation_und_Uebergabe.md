# CatchIt – Teil 3E
## Annotierungen, Präsentation und Übergabe

## 1. Annotierungsstil

Empfehlung:
- seitliche Callouts
- kurze Sätze
- keine Fließtextwände
- pro Screen 5–8 Annotationen maximal

### Gute Annotationen
- „Bubble bleibt in allen Go-Zuständen als Zeitanker präsent.“
- „Karte ist zweite Ebene derselben Wahrheit, kein eigener Produktbereich.“
- „Recovery priorisiert einfachste Rettung vor Vollständigkeit.“
- „Neutrale Labels schützen Privatsphäre in öffentlichen Situationen.“

---

## 2. Was auf Mockups annotiert werden sollte

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

## 3. Cathy-Regeln für Mockups

Falls Cathy dargestellt wird:
- peripher bei Stabilität
- näher bei Unsicherheit
- groß nur bei Transition
- nie parallel zum wichtigsten Handlungscontent dominant
- nicht emotionalisieren, wenn Präzision wichtiger ist

Deshalb:
Cathy eher als späteres Layer, nicht als Kernstruktur des Flows.

---

## 4. Präsentationsreihenfolge

Die stärkste Produktstory ist keine Menüstruktur, sondern Zustandsabfolge.

Empfohlene Reihenfolge:
1. Main / Blue
2. Main / Green
3. Main / Yellow oder Orange
4. Map Reveal
5. Map Focus
6. Go Mode
7. Quick Change
8. Recovery
9. Wizard / Kettenfrage
10. Chain Summary
11. Privacy / neutrale Labels
12. Accessibility / ND Support

---

## 5. Übergabe an Entwicklung

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

So wird das Designfile anschlussfähig für:
- Repo-Struktur
- ScreenState-Modelle
- Component Props
- Compose Previews

---

## 6. Minimalset vs. Vollset

### Starkes kompaktes Set
1. Main / Blue
2. Main / Green
3. Map Reveal
4. Map Focus
5. Go Mode
6. Recovery
7. Wizard / Einstieg
8. Wizard / Kettenfrage
9. Chain Summary
10. Quick Change

### Vollständigeres kohärentes Set
plus:
- Main / Yellow
- Main / Orange
- Main / Red
- Recheck nötig
- Kette angepasst
- neutrale Labels
- notification-safe Variante
- accessibility variant
- Cathy peripher
- Cathy Transition
