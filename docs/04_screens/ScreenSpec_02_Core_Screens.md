# CatchIt — Figma Screen Spec, Teil 2  
## Core Screens: Main, Map Reveal, Map Focus, Go, Recovery

Dieser Teil definiert die wichtigsten Screens, die das CatchIt-Konzept tragen.

---

## 1. Screen: Main / Stable / Blue

### Zweck
Der Standard-Home-State.  
Er zeigt CatchIt nicht als Suchmaschine, sondern als Zustandsoberfläche.

### Produktbotschaft
„Du bist versorgt. Das ist der nächste relevante Zeitpunkt.“

### Muss sichtbar sein
- Status-Hintergrund in ruhigem Blau
- große Countdown-Bubble
- Label über oder bei der Bubble, z. B. „Spätestens los in“
- beste nächste Verbindung
- zwei weitere machbare Alternativen
- kleiner Kettenkontext, z. B.:
  - „Jetzt: Ergo-Therapie“
  - „Danach: zurück zur Kita“

### Darf sichtbar sein
- minimale Confidence / Stabilitätslesart
- sehr reduzierte Step-Position, z. B. „2 von 4“

### Darf nicht dominieren
- Karte
- Providerdaten
- technische Delay-Metadaten
- volle Timeline

### Informationshierarchie
1. Countdown
2. nächster Zweck
3. beste Option
4. Alternativen
5. Kettenkontext

### Layout-Empfehlung
- Top Utility klein und ruhig
- Bubble in der vertikalen Mitte
- Optionsbereich unten in 3 Slots
- Kontextzeile klein unter oder über Bubble

### Annotation in Figma
- Markiere, dass die drei Optionen **alle tragfähig** sind
- kennzeichne eine Option subtil als beste / aktivste
- erkläre, dass der Screen dieselbe Travel Truth enthält wie detailliertere Screens, nur verdichtet

---

## 2. Screen: Main / Bald Relevant / Green

### Zweck
Der Übergang vom ruhigen Zustand zur nahen Handlung.

### Produktbotschaft
„Es wird bald relevant. Achte jetzt darauf.“

### Unterschied zu Blau
Nicht nur Farbe ändert sich, sondern semantische Zuspitzung.

### Muss sichtbar sein
- grüner Hintergrund
- gleiche Bubble-Position
- engerer, spürbar handlungsnäherer Ton
- gleiche oder leicht fokussiertere Optionen
- Kettenkontext weiterhin sichtbar

### Gute Microcopy
- „Bald los“
- „Los in 10 Min“
- „Noch 10 Min bis Aufbruch“

### Gestaltungshinweise
- kein hektischer Alarmton in der Visualität
- eher beruhigende Aktivierung als Eskalation
- Kontrast und Lesbarkeit müssen in Grün stabil bleiben

### Annotation
- Zustand ist nicht „warning“, sondern „operative Relevanz beginnt“
- derselbe Screen darf nicht wie Fehlermodus wirken

---

## 3. Screen: Main → Map Reveal

### Zweck
Räumliche Orientierung bei Bedarf öffnen, ohne den Main Screen zu verlassen.

### Produktbotschaft
„Hier ist der Weg zur besten Haltestelle. Deine Kerninfos bleiben bei dir.“

### Interaktion
- Swipe up vom Main Screen
- Main-Inhalte verdichten sich nach oben
- Karte wächst aus dem unteren Bereich heraus

### Muss sichtbar sein
- Bubble bleibt oben präsent
- Hero-Bereich wird kompakter
- Karte zeigt Fußweg vom aktuellen Standort zur besten Haltestelle
- aktuelle beste Linie bleibt erkennbar
- ggf. Distanz/Gehzeit in reduzierter Form

### Darf sichtbar sein
- kleiner Hinweis wie „Beste Haltestelle in 6 Min“
- Route als simple, klare Linie

### Darf nicht passieren
- Bubble verschwindet
- Screen wirkt wie harter Modusbruch
- Karte übernimmt sofort alles

### Gestaltungshinweise
- Reveal statt Overlay
- die Karte ist zweite Ebene derselben Wahrheit
- Linien/Optionen rücken enger, aber bleiben lesbar

---

## 4. Screen: Map Focus

### Zweck
Der Nutzer will sich räumlich orientieren oder aktiv bewegen.

### Produktbotschaft
„Folge diesem Weg. Deine Zeit bleibt sichtbar.“

### Interaktion
- Tap auf die Karte nach Map Reveal
- Karte nimmt den Großteil des Screens ein
- Bubble bleibt oben als Zeitanker
- Zusatzinfos erscheinen unter der Karte

### Muss sichtbar sein
- Bubble oben
- große Karte
- Fußweg zur gewählten Haltestelle
- gewählte Linie
- Distanz
- vermutliche Gehzeit
- Ziel-Haltestelle

### Optional
- nächster markanter Richtungswechsel
- Board/Steig nur wenn wirklich relevant

### Nicht zeigen
- alle drei Optionen gleich stark
- zu viele Zusatzdaten
- komplette Verkehrsdiagnostik

### Informationshierarchie
1. Zeitanker
2. räumliche Orientierung
3. gewählte Linie
4. Gehzeit / Distanz
5. weitere Details

---

## 5. Screen: Go Mode / Active Step

### Zweck
Der Nutzer ist in Exekution.  
Nur das Nächste zählt.

### Produktbotschaft
„Das hier ist jetzt dran.“

### Muss sichtbar sein
- aktueller aktiver Schritt
- nächster direkt folgender Schritt
- zentrale Zeit-/Handlungsrelation
- Status der aktuellen Linie / des Abschnitts
- ggf. deutliche Handlungsformulierung:
  - „Jetzt losgehen“
  - „In Bus 21 einsteigen“
  - „Noch 3 Min bis Ankunft“

### Visuelle Struktur
- vertikal
- sequenziell
- minimaler Rückblick
- Zukunft nur vorbereitet, nicht dominant

### Gute UI-Muster
- aktiver Step groß
- erledigte Schritte beruhigt / komprimiert
- nächster Step kleiner vorausblickend

### Nicht tun
- zurück in Vergleichsmodus kippen
- Alternativen gleich stark zeigen wie die aktive Exekution

---

## 6. Screen: Recovery / Fallback

### Zweck
Etwas ist fragil, gekippt oder recheck-pflichtig.  
Der Screen muss sofort die einfachste Rettung zeigen.

### Produktbotschaft
„Etwas ist nicht mehr stabil. Hier ist dein einfachster sicherer Weg weiter.“

### Muss sichtbar sein
- klarer Zustandswechsel
- Problem in menschenlesbarer Sprache
- eine beste Rettung
- ggf. eine ruhige Reserve
- Aussage zur Kette:
  - „Rückweg bleibt machbar“
  - „Termin bleibt erreichbar“
  - „5 Min später weiter ist möglich“

### Darf sichtbar sein
- warum geändert wurde, in einem Satz
- Recheck-Status
- Fallback-Rolle

### Nicht sichtbar machen
- Datenfriedhof
- rohe Fehlersymptome
- unklare Alarmigkeit

### Gute Recovery-Microcopy
- „Diese Verbindung ist nicht mehr stabil.“
- „Einfachste Alternative aktiviert.“
- „Mit Bus 23 bleibst du im Plan.“
- „Der Rückweg wird mit angepasst.“

---

## 7. Screen: Kettenkontext-Mini-Modul für Core Screens

Auf fast allen Go-Screens sollte ein kleines, sehr reduziertes Kontextmodul existieren:

### Inhalt
- Jetzt
- Danach
- ggf. Danach danach

### Beispiel
- Jetzt: Therapie
- Danach: Kita
- Danach: Heimweg

### Form
- 1–2 Zeilen
- kleine Schrift
- nicht dominant
- beruhigend statt analytisch

Dieses Modul verhindert, dass CatchIt wie eine Einzelfahrt-App wirkt.

---

## 8. Übergänge zwischen den Core Screens

### Blau → Grün
- Farbübergang
- semantische Zuspitzung
- keine neue Seite nötig, kann als State-Variant gezeigt werden

### Main → Map Reveal
- vertikales Hochziehen
- Bubble bleibt im Blick
- Optionen verdichten

### Map Reveal → Map Focus
- Karte expandiert
- operative Infos wandern unter die Karte

### Main/Go → Recovery
- klar sichtbarer Zustandswechsel
- sofortige Einfachheit
- kein „erst analysieren, dann handeln“

---

## 9. Minimale Core-Screen-Reihe für Figma

Wenn du nur 5 Screens bauen willst, baue diese:

1. Main / Blue
2. Main / Green
3. Map Reveal
4. Map Focus
5. Recovery

Damit ist der Produktkern schon verständlich.
