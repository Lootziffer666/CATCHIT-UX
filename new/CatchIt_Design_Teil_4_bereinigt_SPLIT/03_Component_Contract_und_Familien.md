# CatchIt – Teil 4C
## Component Contract und Familien

## 1. Component Contract

Jede CatchIt-Komponente soll in Figma dokumentiert werden mit:

1. Zweck
2. wann verwenden
3. wann nicht verwenden
4. welche Wahrheit transportiert sie
5. welche Tokens bindet sie
6. welche Variant Properties existieren
7. welche Accessibility-Regeln gelten
8. welche Privacy-/Public-Safe-Regeln gelten
9. welche Prototype-Transitions sie auslöst

---

## 2. Zentrale Familien

### Anchor Components
- Countdown
- Instruction
- Confirmation
- Question
- Failure

### Support Components
- Options Cluster
- Chain Context
- Status-/Trust-Marker
- Direction / Stop / Delay residue

### Spatial Components
- Map Reveal Surface
- Map Focus Shell
- Walk Path Layer
- Stop Marker Layer

### Recovery Components
- Simple Switch Card
- Recheck Panel
- Chain Adjustment Summary

### Wizard Components
- Question Panel
- Response Chips / Rows
- Summary Strip
- Preference Residue

### Trust / Accessibility Components
- Public Safe Label
- Large Text Variant
- Reduced Motion Variant
- Neutral Notification Tile

---

## 3. Vererbungsstufen

### Direct Inheritance
Die Komponente bleibt praktisch dieselbe, nur mit State-Anpassung.

### Condensed Inheritance
Die Komponente bleibt dieselbe Familie, wird aber verdichtet.

### Specialized Inheritance
Die Komponente bleibt verwandt, bekommt aber eine zustandsspezifische Rolle.

### New Component
Nur wenn keine vorhandene Familie reicht.

---

## 4. Countdown-Familie

Muss bleiben:
- klar derselben Familie zugehörig
- runde / zentrale / primäre Anmutung
- numerischer Kern dominant
- kein Badge-Charakter

Erlaubte Varianten:
- Blue: größte, luftigste Form
- Green: fast identisch, leicht gespannter
- Yellow: gleiche Familie, etwas verdichteter
- Map Reveal: kleiner, aber klar wiedererkennbar
- Orange: trace-persistent oder sekundär
- Red: meist kein primärer Countdown mehr

Verboten:
- Mini-Kreis rechts oben ohne Kontext
- pillförmiger Ersatz
- neue Spezies pro State

---

## 5. Instruction-Familie

Instruction ist kein generischer CTA.

Muss bleiben:
- kurze aktive Sprache
- klare Führungsrolle in Orange / Go / Recheck
- keine Button-Logik als Hauptausdruck

Verboten:
- CTA-Button als Hero
- Marketing-Headline
- turn-by-turn Navi-Sprech

---

## 6. Confirmation-Familie

Confirmation trägt Vertrauen.

Muss bleiben:
- knapp
- ruhig
- ordnend
- nicht feierlich

Verboten:
- „Done!“
- „Great news“
- Reward Cards
- künstliche Positivität

---

## 7. Question-Familie

Fragen im Wizard sind dieselbe Familie, nicht neue Screenmuster.

Muss bleiben:
- eine Hauptfrage
- alltagsnah
- nicht technisch
- nicht formularig

Verboten:
- Multi-question screen als Default
- Formularraster
- technische Settingsgruppen

---

## 8. Options-/Cluster-Familie

Die drei Vorschläge sind eine zentrale Support-Familie.

Muss bleiben:
- drei präferenzgeformte Optionen
- kompakt und scanbar
- nicht wie Suchresultate

Erlaubte Varianten:
- Main: minimal
- Option Unpacking: gleichartige Detailblöcke
- Yellow: mit Anpassungsresiduen
- Orange: reduziert oder Hintergrundebene

Verboten:
- neue Suchlistenlogik
- Objektivranglisten
- wechselnde Kartenformen pro Screen

---

## 9. Spatial-Familie

Map und Spatial Assist müssen aus demselben System stammen.

Muss bleiben:
- ruhige Bühne
- untergeordnete Rolle
- gleiche Materialität
- keine fremde Navi-Ästhetik

Verboten:
- eigene Karten-App innerhalb von CatchIt
- laute Karten-Chrome
- Layer-Explosion
