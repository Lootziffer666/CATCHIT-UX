# CatchIt — Design-Dokument Teil 3  
## Design-System, Tokens, Komponenten und Zustandsfarben

---

## 1. Design-System-Prinzip

Das CatchIt-Design-System ist kein rein visuelles Inventar, sondern ein **semantisches Betriebssystem** für Verdichtung, Zustand und Vertrauen.

Es dient vier Zielen:
- Lesbarkeit
- Zustandsklarheit
- ND-taugliche Reizökonomie
- konsistente Produktbedeutung

---

## 2. Foundations

## 2.1 Spacing
Empfohlenes Basisraster:
- 4 px Mikro-Abstände
- 8 px Basisraster
- 12 px für enge Komponentenräume
- 16 px Standardabstand
- 24 px Abschnittsabstand
- 32 px Hero-Abstand
- 40–48 px Screen-Top-Atmung in Vollflächen

## 2.2 Radien
Empfehlung:
- 12 px kleine Oberflächen
- 16 px Standardkarten
- 24 px große Karten / Sheets
- volle Rundung für Bubble / Pills / Statuspunkte

## 2.3 Elevation
CatchIt sollte sparsam mit Schatten umgehen.

Stufen:
- Level 0: Flat / Fullscreen State
- Level 1: subtile Karte
- Level 2: interaktives Sheet
- Level 3: Map Focus / modaler Fokus

## 2.4 Linien und Trennungen
Linien nur minimal verwenden.
Besser:
- Kontrast,
- Abstand,
- Flächenwechsel,
- Motion.

---

## 3. Farbmodell als Zustandsarchitektur

Farben in CatchIt sind kein Dekor, sondern Zustandslogik.

## 3.1 Primärpalette
- `state.calm.blue.start` = #31C6D4
- `state.calm.blue.end` = #2E8FFF
- `surface.primary` = #FFFFFF
- `surface.secondary` = #F4F7FB
- `text.primary.dark` = #1E293B
- `text.secondary.dark` = #526176
- `text.onState` = #FFFFFF

## 3.2 Zustandsfarben
### Blau — ruhig / stabil / noch nicht handlungsnah
- Rolle: Default, Plan hält, noch kein unmittelbarer Handlungsdruck
- Semantik: beobachten, vertrauen, vorbereitet sein

### Grün — bald relevant / gute Sicherheit / Go nähert sich
- Rolle: etwa ab 10 Minuten vor Aufbruch oder bei aktivem tragfähigem Go-Zustand
- Semantik: bald los, alles im Plan, jetzt aufmerksam

### Gelb — fragil / Recheck / System beobachtet
- Rolle: Unsicherheit, aber noch keine harte Eskalation
- Semantik: beobachten, mögliche Änderung, Alternativen prüfen

### Orange — Handeln bald nötig
- Rolle: konkreter Handlungsbedarf oder knappe Tragfähigkeit
- Semantik: jetzt entscheiden, nicht weiter passiv bleiben

### Rot — Plan kippt / Fallback erforderlich
- Rolle: pünktliche Ankunft oder robuster Ablauf nicht mehr sicher
- Semantik: eingreifen, Alternative aktivieren

## 3.3 Beispiel-Gradienten
- Blau: `#35C8D5 → #2F91FF`
- Grün: `#2ED38C → #1FAF65`
- Gelb: `#FFD766 → #EFB300`
- Orange: `#FFB15E → #F47D20`
- Rot: `#FF6F6F → #E44444`

## 3.4 Zustandsregel
Farbwechsel darf nie nur dekorativ sein.  
Wenn sich die Farbe ändert, ändert sich auch die semantische Dringlichkeit und idealerweise mindestens eine dieser Größen:

- Hauptlabel
- operative Priorisierung
- Handlungston
- Rollen der Alternativen
- Cathy-Nähe
- Reassurance-Intensität

---

## 4. Typography

## 4.1 Systemschrift
Empfehlung für Primärschrift:
- Inter
- alternativ DM Sans oder Geist Sans

Anforderungen:
- hohe Bildschirmlesbarkeit
- mehrere Gewichte
- gute deutsche Umlaute
- klare Ziffern
- starke kleine Größen
- gute Accessibility-Skalierung

## 4.2 Countdown-Schrift
Die Countdown-Bubble darf typografisch markanter sein, aber nicht ornamental.

Empfehlung:
- gleiche Familie in stärkerem Gewicht
- oder eine zweite, sehr sparsam genutzte Display-Schrift nur für Zeitwerte

Wichtige Regel:
Die Bubble-Ziffern dürfen aufmerksamkeitsstark sein, aber nicht futuristisch-selbstzweckhaft.

## 4.3 Typo-Skala
- Display / Bubble: 44–64 px
- Hero Label: 24–32 px
- Section Title: 20–24 px
- Card Title: 18–20 px
- Body Large: 16–18 px
- Body Standard: 16 px
- Meta / Labels: 12–14 px
- Nie kritische Information ausschließlich in 12 px

## 4.4 Gewichte
- Bold / Semibold: Zählwerte, Kernhandlungen, aktuelle Linie
- Medium: wichtige Sekundärinfos
- Regular: Standardtext
- Keine extreme Vielfalt an Gewichten

---

## 5. Motion Tokens

Motion muss regulieren, nicht aufregen.

## 5.1 Timing
- fast: 120–160 ms
- standard: 180–240 ms
- emphasis: 260–320 ms

## 5.2 Easing
- sanftes ease-out für Reveal
- kein nervöses Springen
- kein dauerndes Pulsieren als Standardzustand

## 5.3 Motion-Rollen
- State Shift: Farb-/Labelwechsel
- Compress: Main-Content verdichtet sich nach oben
- Reveal: Karte fährt aus dem unteren Bereich ein
- Focus: Karte übernimmt Raum
- Reassure: sanfte Rückmeldung bei bestätigter Stabilität

---

## 6. Component Inventory

## 6.1 Hero Components
### Countdown Bubble
Funktion:
- Hauptwahrheit des Screens
- Zeit bis spätestem Aufbruch
- dauerpräsenter Zeitanker

Zustände:
- calm
- active
- critical
- focused

### State Backdrop
Funktion:
- Gesamtzustand emotional und semantisch rahmen
- nie rein dekorativ

## 6.2 Option Components
### Route Role Tile
Inhalt:
- Linien-/Optionstitel
- Rolle
- Delay-/Stabilitätsindikator
- optional empfohlene Markierung

Regel:
Nicht bloß Rohdaten anzeigen, sondern Produktrolle.

### Best Option Marker
Subtil, nicht laut.
Mittel:
- Gewicht
- Opazität
- minimaler Pill-Hinweis
- leicht stärkere Größe

## 6.3 Chain Components
### Chain Progress Strip
Sehr reduzierte Anzeige für:
- aktueller Abschnitt
- nächster Abschnitt
- Fortschritt in der Kette

### Context Label
Beispiele:
- Jetzt
- Danach
- Rückweg
- Nächstes Ziel

## 6.4 Spatial Components
### Map Reveal Panel
- wächst aus dem unteren Screenbereich
- zeigt Fußweg zur besten Haltestelle
- respektiert die bestehende Main-Hierarchie

### Map Focus Surface
- Karte dominant
- Bubble bleibt präsent
- Daten unter der Karte bleiben handlungsnah

### Footpath Summary Row
- Distanz
- Gehzeit
- Ziel-Haltestelle
- gewählte Linie

## 6.5 Recovery Components
### Confidence Banner
- stabil
- fragil
- recheck nötig
- fallback bereit

### Recovery Sheet
- einfachste Alternative
- kurze Begründung
- eine primäre Handlung
- eine ruhigere Reserve

## 6.6 Semantics Components
### Neutral Label Pill
z. B.:
- Arzttermin
- Besorgung
- Zwischenstopp

### User Label Field
- optional
- editierbar
- nie erzwungen
- privatere Bezeichnung bewusst, nicht automatisch

---

## 7. Token-Namensschema

Empfohlenes Schema:

### Color
- `color.state.calm.bg.start`
- `color.state.calm.bg.end`
- `color.state.ready.bg.start`
- `color.state.warning.bg.start`
- `color.state.alert.bg.start`
- `color.text.primary`
- `color.text.inverse`
- `color.surface.primary`
- `color.surface.sheet`

### Typography
- `type.display.countdown`
- `type.hero.label`
- `type.card.title`
- `type.body.default`
- `type.meta.label`

### Space
- `space.1 = 4`
- `space.2 = 8`
- `space.3 = 12`
- `space.4 = 16`
- `space.5 = 24`
- `space.6 = 32`

### Radius
- `radius.sm = 12`
- `radius.md = 16`
- `radius.lg = 24`
- `radius.full = 999`

### Motion
- `motion.fast = 140`
- `motion.default = 220`
- `motion.emphasis = 300`

### Elevation
- `elevation.0`
- `elevation.1`
- `elevation.2`
- `elevation.3`

---

## 8. Example Token Table

```json
{
  "color": {
    "state": {
      "calm": { "start": "#35C8D5", "end": "#2F91FF" },
      "ready": { "start": "#2ED38C", "end": "#1FAF65" },
      "warning": { "start": "#FFD766", "end": "#EFB300" },
      "attention": { "start": "#FFB15E", "end": "#F47D20" },
      "critical": { "start": "#FF6F6F", "end": "#E44444" }
    },
    "surface": {
      "primary": "#FFFFFF",
      "secondary": "#F4F7FB",
      "sheet": "rgba(255,255,255,0.88)"
    },
    "text": {
      "primary": "#1E293B",
      "secondary": "#526176",
      "inverse": "#FFFFFF"
    }
  },
  "radius": {
    "sm": 12,
    "md": 16,
    "lg": 24,
    "full": 999
  },
  "space": {
    "1": 4,
    "2": 8,
    "3": 12,
    "4": 16,
    "5": 24,
    "6": 32
  },
  "motion": {
    "fast": 140,
    "default": 220,
    "emphasis": 300
  }
}
```

---

## 9. Screen-State-Specific Rules

## 9.1 Main State
- Farbe vollflächig
- Bubble maximal präsent
- Optionen untergeordnet, aber lesbar
- kaum Linien, kaum Kartenchrome

## 9.2 Map Reveal
- Main-Content verdichtet sich nach oben
- Karte entsteht aus dem unteren Bereich
- Sheet-Charakter ohne Modalgefühl

## 9.3 Map Focus
- Bubble bleibt fixierter Anker
- Karte dominiert
- Meta-Fakten ruhig und knapp darunter
- Alternativen nur sekundär

---

## 10. Do / Don’t

### Do
- Zustände klar codieren
- Rollen statt Datenhäufung zeigen
- Farbe + Text + Struktur kombinieren
- Karten nur bei Bedarf dominant machen
- Tokens semantisch benennen

### Don’t
- Farben als Deko einsetzen
- Delay-Werte ohne Relevanzkontext zeigen
- zu viele Karten stapeln
- Main Screen mit Timeline-Logik überfrachten
- semantische Labels ungeprüft automatisieren

---

## 11. Schlussfolgerung

Das CatchIt-Design-System ist dann gut, wenn seine Tokens nicht nur hübsch, sondern **bedeutungstragend** sind.

Jeder Token sollte eine der folgenden Fragen beantworten helfen:
- Wie dringlich ist es?
- Wie stabil ist es?
- Was ist jetzt wichtig?
- Was darf im Hintergrund bleiben?
