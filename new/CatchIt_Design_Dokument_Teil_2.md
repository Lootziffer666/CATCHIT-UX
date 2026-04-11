# CatchIt — Design-Dokument Teil 2  
## Informationsarchitektur, Screen-System und Interaktionsmodell

---

## 1. Überblick

Dieses Dokument beschreibt die operative UX-Struktur von CatchIt als System aus drei Modi und mehreren Verdichtungsebenen.

Die zentrale Designentscheidung lautet:

- **Planung** ist nicht dieselbe UX wie
- **Ausführung** und auch nicht dieselbe UX wie
- **Störung / Recovery**.

Daraus entsteht ein Interface-System mit klaren mentalen Zuständen statt einer einzigen überladenen Oberfläche.

---

## 2. Die drei Hauptmodi

## 2.1 Plan Mode
Zweck:
- Tagesabsichten erfassen,
- Ketten anlegen,
- Rückwege mitdenken,
- Bewegungsstil und Randbedingungen übersetzen.

Kernfrage:
**Was steht an und geht es danach noch weiter?**

Merkmale:
- horizontaler Vergleich,
- wizardartige Führung,
- keine Providerlogik,
- keine technischen Felder als Primärmodell.

## 2.2 Go Mode
Zweck:
- den laufenden Ablauf begleiten,
- Dringlichkeit regulieren,
- nächste Handlung eindeutig machen,
- Vertrauen erhalten.

Kernfrage:
**Was ist jetzt wichtig?**

Merkmale:
- vertikal,
- reduziert,
- zustandsbasiert,
- handlungsorientiert.

## 2.3 Recovery Mode
Zweck:
- das Kippen eines Plans auffangen,
- Reassurance oder Eingriff liefern,
- die einfachste Rettung zeigen.

Kernfrage:
**Was ist jetzt die einfachste tragfähige Alternative?**

Merkmale:
- keine Panik-UI,
- keine Vollsuche,
- keine Datendumping-Reaktion,
- klare Fallback-Rollen.

---

## 3. Die fünf UX-Ebenen

## 3.1 Orientierung
Sofort erfassen:
- Muss ich jetzt etwas tun?
- Ist mein Plan stabil?
- Wann muss ich los?

## 3.2 Vergleich
Wenige tragfähige Optionen mit Rollen:
- beste Wahl
- ruhigste Reserve
- Fallback

## 3.3 Übergang
Planung wird in Ausführung übersetzt.
Diese Ebene ist kein permanenter Produktmodus, sondern ein Übergangsobjekt.

## 3.4 Exekution
Nur das Nächste zählt.
Vertikal, sequentiell, ruhig.

## 3.5 Reassurance / Eingriff
Unsicherheit wird in:
- klare Handlung
- oder klare Beruhigung
übersetzt.

---

## 4. Default Home: der Zustands-Screen

### 4.1 Funktion
Der Default Home ist kein klassischer Startscreen, sondern eine **Zustands-Startseite**.

Er beantwortet im Idealfall in einem Blick:
- Wann muss ich spätestens los?
- Welche Verbindung hält den robusten Plan?
- Welche zwei Alternativen bleiben tragfähig?
- Wie sicher ist der Plan gerade?

### 4.2 Kernbestandteile
- Hintergrundfarbe als Produktzustand
- zentrale Countdown-Bubble
- beste nächste Verbindung
- zwei Alternativen
- minimale Kontextebene

### 4.3 Semantik der Hauptzahl
Die große Zahl bedeutet nicht nur Countdown, sondern:

**„Du musst spätestens in X Minuten los, damit dein robuster Plan hält.“**

Darin stecken:
- Handlungsschwelle
- Puffer
- Planstabilität
- Vertrauenssignal

---

## 5. Der Main Screen als Verdichtungsmodell

Der Main Screen darf nicht weniger wissen als eine detailreichere Timeline-Ansicht.  
Er muss dieselbe Wahrheit anders priorisieren.

Er ist also nicht Informationsverlust, sondern **Verdichtung**.

### 5.1 Was er in verdichteter Form tragen muss
1. Gesamtzustand
2. aktuell wichtigste Handlung
3. aktueller Abschnitt der Kette
4. verfügbare Mobilitätsoptionen
5. minimaler Ablaufkontext

### 5.2 Was er nicht sein darf
- ein reiner Splashscreen
- ein hübscher Farbverlauf ohne Systemlast
- eine Miniatur der Detailansicht
- ein Transitdashboard voller Rohdaten

---

## 6. Informationsmodell des Main Screen

## 6.1 Ebene A — Hero-State
Der Hero-State ist das, was man sofort verstehen soll.

Enthält:
- Countdown-Bubble
- Label wie „Spätestens los in“
- optional Zustandssatz wie „Plan stabil“ oder „Bald relevant“

## 6.2 Ebene B — Operative Optionen
Unter der Bubble stehen 3 machbare Optionen.

Wichtig:
Diese drei Optionen sind nicht bloß drei Datenpunkte, sondern Rollen.

Beispiel:
- beste Wahl
- ruhigste Alternative
- Fallback bei Delay

Wenn alle drei rechtzeitig machbar sind, muss das UI diese Gleichzeitigkeit transportieren, ohne den Nutzer mit Entscheidungslast zu überschütten.

## 6.3 Ebene C — Kettenkontext
Auch ein stark verdichteter Screen muss zeigen:
- aktueller Abschnitt
- nächstes Ziel
- danach

Mögliche Muster:
- „Jetzt: Zurück zur Kita“
- „Danach: Nach Hause“
- „2 von 4“
- Mini-Progress statt Volltimeline

---

## 7. Die drei Hauptzustände des Go Mode

## 7.1 Zustand 1 — Main
**Zweck:** reine Lageerfassung

Primär:
- Countdown
- Zustandsfarbe
- drei machbare Optionen

Sekundär:
- minimaler Kettenkontext

Nutzerhaltung:
- schauen
- beruhigen
- auf Relevanz prüfen

## 7.2 Zustand 2 — Map Reveal
**Auslösung:** Swipe up

Zweck:
- räumliche Orientierung einblenden,
- Fußweg zur besten Haltestelle sichtbar machen,
- ohne den Main Screen zu verdrängen.

Merkmale:
- Countdown bleibt sichtbar
- Main-Infos verdichten sich nach oben
- Karte erscheint als zweite Ebene
- Systemzustand bleibt erhalten

Nutzerhaltung:
- „Zeig mir, wie ich jetzt hingehe.“

## 7.3 Zustand 3 — Map Focus
**Auslösung:** Tap auf Karte

Zweck:
- Karte wird führend,
- räumliche Orientierung dominiert,
- Bubble bleibt präsent.

Merkmale:
- Karte nimmt den Großteil des Screens ein
- darunter kompakte Fakten
- gewählte Linie wird klar
- Alternativen werden sekundär

Nutzerhaltung:
- „Ich bewege mich jetzt wirklich.“

---

## 8. Swipe- und Focus-Logik

### 8.1 Swipe up
Bedeutung:
- nicht „mehr Details“
- sondern: Wechsel in die Raumebene

### 8.2 Tap auf Karte
Bedeutung:
- nicht nur Karte aktivieren
- sondern: Fokus auf Orientierung verschieben

### 8.3 Swipe down
Bedeutung:
- Rückkehr zur Verdichtung

### 8.4 Langdruck / Secondary Action
Bedeutung:
- alternative Optionen öffnen
- bewusstes Eingreifen
- Replanning oder Reservewahl

---

## 9. Karte als Transition Object

Die Karte ist kein permanenter Standardhintergrund.  
Sie hat eine präzise Rolle:

- Übergang von abstrakter Planung zu körperlicher Bewegung
- sichtbare Übersetzung von „beste Option“ in „realer Weg“
- Raumdarstellung nur dann, wenn sie tatsächlich hilft

Deshalb:
- zuerst nächster Schritt,
- dann Alternative,
- dann Details,
- Karte nur bei Bedarf.

---

## 10. Wizard-System

## 10.1 Grundprinzip
Der Wizard erfasst keine Route, sondern ein Vorhaben.

Die Leitfrage lautet:
**Was steht an, wann ist es, und musst du danach noch irgendwo hin?**

## 10.2 Kettenfrage
Die Pflichtfrage der Kettenlogik ist:
**„Musst du danach noch irgendwo hin?“**

Sie wird wiederholt, bis verneint wird.

## 10.3 Was der Wizard sammeln soll
- Anlass / Vorhaben
- Zeitbindung
- Folgeziele
- Rückweg
- Transporteinschränkungen
- Bewegungsstil / Tageslage
- ggf. notwendige Begleitung / Kindkontext

## 10.4 Was der Wizard nicht tun soll
- Parameterfriedhof
- Providerauswahl als Primärmodell
- API-nahe Optionen
- Vollständigkeitszwang

---

## 11. Recovery Mode

Recovery ist kein Fehlerdialog, sondern produktive Rettung.

### 11.1 Recovery-Fragen
- Ist der Plan noch tragfähig?
- Was ist die einfachste Alternative?
- Muss ich handeln oder reicht Beobachten?
- Reicht lokale Anpassung oder braucht die gesamte Kette ein Update?

### 11.2 Recovery-Ausgaben
- Alternative aktiv
- nächster Bus statt knappem Sprint
- anderer Fußweg
- spätere, stabilere Verbindung
- gesamte Restkette angepasst

### 11.3 Recovery-Mikroprinzip
Nicht:
- „Suche neu“

Sondern:
- „Ich habe deine restliche Kette angepasst.“
- „Der Rückweg bleibt machbar.“
- „Therapie bleibt pünktlich erreichbar.“
- „Nächster sinnvoller Bus: 11:32.“

---

## 12. Timeline- und Kettenansicht

Eine ausführlichere Ansicht darf existieren, aber sie ist **nicht** der Default Home.

Sie dient dazu:
- die Kette explizit zu verstehen,
- vergangene und kommende Schritte zu sehen,
- aktuelle Position im Ablauf zu verorten,
- bewusst tiefer einzusteigen.

### 12.1 Gute Rolle der Timeline
- Analyse
- Beruhigung
- Rückversicherung
- Nachvollziehbarkeit

### 12.2 Schlechte Rolle der Timeline
- Home-Überfrachtung
- permanente Primärfläche
- Ersatz für Verdichtung

---

## 13. Beispielhafte Screen-Landschaft

### Screen 1 — Wizard / Chain Builder
Tagesvorhaben und Folgeziele erfassen.

### Screen 2 — Plan Summary
Kette, Rollen der Alternativen, robuster Plan.

### Screen 3 — Main State Screen
Default Home, Countdown, Stabilität, 3 Optionen.

### Screen 4 — Map Reveal
Fußweg zur besten Haltestelle.

### Screen 5 — Map Focus
Karte dominant, Bubble präsent, operative Fakten darunter.

### Screen 6 — Chain Timeline
Vollständiger Tageslauf in vertikaler Lesart.

### Screen 7 — Recovery Sheet
Fallback, Recheck, Replan.

### Screen 8 — Labels / Semantics
Neutrale Systemlabels, optionale Nutzerlabels.

### Screen 9 — Accessibility & Safety
Darstellungs- und Reassurance-Regeln.

---

## 14. Schlussfolgerung

Die zentrale Stärke der CatchIt-Interaktion liegt in einer sauberen Eskalationslogik:

- zuerst **Zustand**
- dann **Orientierung**
- dann **Raum**
- dann **tiefere Fakten**
- dann **Eingriff**

Dadurch bleibt der Main Screen ruhig, ohne dumm zu sein, und detailreichere Ebenen werden nur dann aktiviert, wenn sie dem tatsächlichen Handlungszustand entsprechen.
