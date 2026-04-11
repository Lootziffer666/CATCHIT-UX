# CatchIt – Teil 2B
## Screen-System und Default Home

## 1. Der Main Screen als Zustandsoberfläche

Der Default Home ist kein klassischer Startscreen, kein Dashboard und keine Suchmaske.  
Er ist eine **Zustandsoberfläche**.

Er beantwortet im Idealfall in einem Blick:
- Muss ich jetzt etwas tun?
- Wann muss ich spätestens los?
- Welche wenigen Optionen bleiben tragfähig?
- Wie sicher ist die Lage gerade?

---

## 2. Der Main Screen muss immer leisten

- Handlungsschwelle zeigen
- Zustand vermitteln
- nächste tragfähige Verbindung zeigen
- zwei weitere tragfähige Rollenoptionen andeuten
- den aktuellen Kettenkontext nicht verlieren

### Hero-Zone
- Label wie `Spätestens los in`
- Countdown Anchor
- optional kompakte Kontextzeile:
  - `Für: Kita`
  - `Schritt 2 von 4`
  - `Danach: Heimweg`

### Optionen-Zone
Drei Rollenoptionen:
- primäre tragfähige Wahl
- ruhigere Reserve
- Fallback / spätere Reserve

Wichtig:
Diese drei Optionen sind **keine Suchresultate**, sondern präferenzgeformte Vorschläge.

---

## 3. Die 5 Main States

### Main / Idle / Blue
- ruhig
- noch nicht operativ dringend
- maximale Luft
- Countdown klar primär

### Main / Ready / Green
- relevant
- weiterhin tragfähig
- leicht zugespitzter als Blau
- gleiche Grundkomposition

### Main / Adapting / Yellow
- Änderung erkannt
- CatchIt reagiert bereits
- kein Warnzustand
- Countdown bleibt primär
- leichte Reibung sichtbar, keine Panik

### Main / Act Now / Orange
- jetzt muss gehandelt werden
- Instruction Anchor übernimmt Führung
- Countdown bleibt nur trace-persistent
- Exekutionslesbarkeit schlägt Überblick

### Main / Failed / Red
- konkrete Option nicht mehr tragfähig
- Failure Anchor
- kurz, hart, selten
- kein überdramatisierter Krisenlook

---

## 4. Der Main Screen darf nicht werden

- Transit-Dashboard
- Ergebnisliste
- Karten-App mit Bubble-Deko
- Provider-Datenoberfläche
- Timeline-Überfrachtung

---

## 5. Der verdichtete Main Screen trägt dieselbe Wahrheit wie ausführlichere Ansichten

Der Main State ist kein Informationsverlust, sondern Priorisierung.

Dieselbe Travel Truth kann anders gewichtet erscheinen in:
- Main State
- Option Unpacking
- Map Reveal
- Go Mode
- Recovery

### Regel
Mehr Detail heißt nicht neue Wahrheit, sondern neue Dichte.
