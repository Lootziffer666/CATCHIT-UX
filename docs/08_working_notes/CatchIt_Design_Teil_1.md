# CatchIt — Design-Dokument Teil 1  
## Produktkern, UX-Prinzipien und konzeptionelle Ausrichtung

**Status:** Alignment-Dokument  
**Ziel:** Dieses Dokument bringt drei Quellen in Einklang:
1. die hochgeladene W3C-/WCAG-orientierte UI-Basis,
2. die CatchIt-SSOT,
3. die reale Repository-Struktur und der aktuelle Umsetzungsstand.

---

## 1. Executive Summary

CatchIt ist **keine klassische Transit-App**. CatchIt ist ein **Decision-Relief- und Reassurance-System für öffentliche Mobilität**, das nicht primär Verbindungen zeigt, sondern **Mobilitätswahrheit so verdichtet, dass Menschen weniger planen, weniger zweifeln und klarer wissen, wann sie handeln müssen und wann nicht**.

Der entscheidende Unterschied zu klassischen Transit-Produkten ist nicht „mehr Information“, sondern:

- weniger mentale Last,
- stärkere Zustandsklarheit,
- bessere Unterstützung für **Ketten** statt Einzelfahrten,
- bessere Vertrauensbildung durch **lesbare Systementscheidungen**,
- eine UX, die nicht in Providerlogik denkt, sondern in **Handlungssicherheit**.

Dieses Dokument konkretisiert CatchIt als:

- **ND-taugliche, maximal frictionless UX**
- mit **intentionaler Friktion** an den Stellen, an denen Vertrauen, Privatheit und Bedeutungszuweisung nicht vollautomatisch „magisch“ gelöst werden sollten,
- mit einem **Zustands-Screen als Default Home**,
- mit **Swipe-basierter Raumebene** für Fußwege und Orientierung,
- mit klarer Trennung zwischen **Plan Mode**, **Go Mode** und **Recovery Mode**,
- und mit einem Design-System, das nicht nur visuell, sondern auch semantisch konsistent ist.

---

## 2. CatchIt in einem Satz

**CatchIt stabilisiert reale Wegeketten unter Unsicherheit, statt nur einzelne Verbindungen anzuzeigen.**

Eine klassische Transit-App beantwortet:
- Wie komme ich von A nach B?

CatchIt beantwortet:
- Was passiert als Nächstes?
- Wann muss ich handeln?
- Wie stabil ist mein Plan gerade?
- Was ist die einfachste Alternative, wenn etwas kippt?
- Wie bleibt die gesamte Kette tragfähig, auch wenn ich unterwegs spontan etwas ändere?

---

## 3. Produktdifferenzierung

### 3.1 Was CatchIt besser macht als klassische Transit-Apps

Klassische Produkte sind stark in:
- Punkt-zu-Punkt-Suche,
- statischer Verbindungsanzeige,
- Fahrplandaten,
- Einzelroutenvergleich.

Sie sind schwächer in:
- Rückwege,
- Mehrfachstopps,
- Tagesketten,
- spontanen Abweichungen,
- alltagsnahen Bewegungsstilen,
- Reassurance im laufenden Ablauf,
- mentaler Entlastung.

CatchIt setzt genau dort an.

### 3.2 Ketten statt Einzelfahrten

CatchIt ist explizit für **Ketten** gedacht. Der Nutzer will selten nur „irgendwo hin“. Meist ist die eigentliche Anforderung eher:

- Kind abholen,
- zum Termin,
- zurück zur Kita,
- dann nach Hause,
- vielleicht noch kurz snacken,
- vielleicht bewusst einen Bus später nehmen,
- aber ohne alles wieder neu zusammensetzen zu müssen.

Daraus folgt:

- CatchIt plant nicht nur **Trips**, sondern **Abläufe**.
- Ein aktueller Abschnitt ist immer Teil einer größeren Kette.
- Rückwege sind kein „späteres Problem“, sondern Bestandteil derselben kognitiven Last.
- Replanning darf nie nur lokal auf den aktuellen Leg wirken, sondern muss die **gesamte Restkette** im Blick behalten.

---

## 4. Nordstern und Produktformel

### 4.1 Nordstern
Ein gutes System zwingt Menschen nicht, besser zu funktionieren. Es funktioniert besser für Menschen.

### 4.2 Produktformel
**CatchIt übersetzt Unsicherheit in tragfähige Beruhigung.**

### 4.3 Primäre Produktwährungen
- Handlungssicherheit
- Belastungsarmut
- Vertrauensfähigkeit

### 4.4 Entscheidungskriterien im Produktkern
CatchIt bevorzugt nicht stumpf die rechnerisch schnellste Route, sondern die **tragfähigste Fortbewegung unter realen Lebensbedingungen**.

Leitregeln:
- lieber stabil als knapp
- lieber einfach als schnell
- lieber gehen als unnötig warten
- lieber alltagstauglich als theoretisch optimal

---

## 5. UX-Grundprinzipien

## 5.1 Zustandslogik statt Prozesslogik
CatchIt darf nicht wie ein Formular oder ein Provider-Testscreen wirken. Es braucht menschenlesbare Zustände, z. B.:

- stabil
- bald relevant
- handeln
- fragil
- fallback bereit
- beobachten
- recheck nötig
- abgeschlossen

Technische Rohzustände wie „loading“, „API timeout“ oder „provider mismatch“ dürfen intern existieren, aber nicht als primäre Produktoberfläche.

## 5.2 Verdichtung vor Vollständigkeit
Die UI zeigt nicht alles, was das System weiß. Sie zeigt zuerst nur das, was für den aktuellen Moment tragfähig ist.

Priorität:
1. nächster relevanter Schritt
2. zeitliche Dringlichkeit
3. Stabilität / Confidence
4. einfachste Alternative
5. Details nur bei Bedarf

## 5.3 Kette immer spürbar halten
Auch in maximal verdichteten Zuständen muss klar bleiben:
- Wo in der Kette bin ich?
- Was ist das aktuelle Ziel?
- Was kommt danach?
- Ist die Gesamtkette noch stabil?

## 5.4 Planung horizontal, Exekution vertikal
Das räumliche Modell ist wesentlich:

- **Planung** ist Vergleich → horizontal
- **Exekution** ist Handlung → vertikal

Vergleichbare Optionen gehören nebeneinander.
Schrittfolgen gehören untereinander.

## 5.5 Raum nur bei Bedarf
Die Karte ist kein permanenter Hintergrundteppich.
Raum wird erst dann dominant, wenn körperliche Orientierung wirklich wichtig wird:
- Fußweg zur besseren Haltestelle,
- Wegführung,
- Ortsbezug bei Unsicherheit,
- Wechsel in echten Navigationsfokus.

---

## 6. ND-taugliche UX und intentionale Friktion

### 6.1 Nicht jede Friktion ist schlecht
Schlechte Friktion ist:
- unnötige Eingaben,
- Neustarts,
- Providerdenken,
- modale Bestätigungswüsten,
- versteckte Systemzustände,
- Mehrdeutigkeit.

Gute, intentionale Friktion ist:
- sichtbare Systementscheidungen,
- lesbare Zustandswechsel,
- editierbare Vorschläge,
- kurze Kontrollpunkte,
- bewusst gesetzte Rückversicherungen.

### 6.2 CatchIt-Prinzip
**Keine Friktion beim Tun. Gezielte Friktion beim Vertrauen.**

Das heißt:
- Handlungen müssen leicht bleiben.
- Bedeutungszuschreibungen dürfen nicht zu „magisch“ werden.
- Replanning darf einfach sein, aber nicht still und unlesbar.
- Systemvorschläge dürfen hilfreich sein, aber nicht unkontrolliert intime oder falsche Benennungen behaupten.

### 6.3 Warum das wichtig ist
Je mehr kognitive Arbeit das System übernimmt, desto wichtiger wird:
- Vorhersagbarkeit,
- Erklärbarkeit,
- Reversibilität,
- soziale Sicherheit,
- private Würde.

---

## 7. Semantik, Benennung und Privatsphäre

### 7.1 Das Benennungsproblem ist ein eigenes Systemproblem
Abschnitte automatisch sinnvoll zu benennen ist deutlich schwerer als Haltestellen oder Linien anzuzeigen.

Beispiele:
- „Luke abholen“
- „Ergo-Therapie“
- „zurück zur Kita“
- „Snack-Stopp“
- „danach nach Hause“

Das erfordert:
- Intent-Erkennung,
- Kalender-/Favoritenabgleich,
- Nutzerkontext,
- editierbare Semantik,
- Privacy-Sensibilität.

Das ist **kein triviales UI-Detail**, sondern fast ein separates Produktmodul.

### 7.2 Empfehlung für V1
Für V1 sollte CatchIt nicht versuchen, alltagssemantische Wahrheit vollautomatisch perfekt zu erzeugen.

Stattdessen ein 3-Ebenen-Modell:

1. **Systemname**  
   z. B. „Linie 21 · Hauptbahnhof“

2. **Kontextname**  
   z. B. „Nächstes Ziel“, „Danach“, „Rückweg“

3. **Optionaler Nutzername**  
   z. B. „Luke abholen“, „Therapie“, „Snack-Stopp“

### 7.3 Privacy by Default
Die öffentliche Oberfläche sollte neutral bleiben.

Regel:
**Öffentliche Oberfläche neutral, private Bedeutung optional.**

Also eher:
- Apotheke
- Arzttermin
- Besorgung
- Zwischenstopp

statt:
- intime Detailbeschreibung,
- peinliche Voice-Notiz,
- zu konkrete medizinische/private Formulierung.

### 7.4 Sprach- und Voice-Prinzip
Was öffentlich sichtbar oder hörbar ist, muss **bahn-, lockscreen- und umfeldsicher** sein.

---

## 8. Cathy im System

Cathy ist eine wichtige humane Übersetzungsschicht, aber **nicht** die Travel Truth selbst.

Daraus folgt:
- Cathy darf Zustände rahmen, begleiten und regulieren.
- Cathy darf nicht die Business-Logik ersetzen.
- Cathy ist bei Stabilität peripher.
- Cathy kommt näher bei Unsicherheit.
- Cathy wird größer bei Transition.
- Cathy darf niemals dominieren, wenn präziser Handlungscontent wichtiger ist.

---

## 9. V1-Produktfokus

### 9.1 Was in V1 zwingend sein sollte
- Kettenlogik im Wizard
- Zustands-Screen als Home
- 3 Hauptmodi: Plan / Go / Recovery
- Swipe-basierte Raumebene
- klare Rollen für Alternativen
- ehrliche Confidence-/Fallback-Kommunikation
- einfache Replan-Operationen ohne Neustart
- neutrale, editierbare Labels statt falscher Automatik

### 9.2 Was später ausgebaut werden kann
- intelligente Abschnittsbenennung
- Kalender-/Intent-Fusion
- Mehrpersonenlogik
- Cathy-Ausdifferenzierung
- stärkere Personalisierung von Bewegungsstilen
- komplexe semantische Alltagsmodelle

---

## 10. Schlussfolgerung

CatchIt ist am stärksten, wenn es **nicht wie ein Transitviewer aussieht**, sondern wie ein System, das reale Alltagsketten stabilisiert.

Der eigentliche USP ist nicht nur:
- die Bubble,
- die Farben,
- die Karte,
- oder Cathy.

Der eigentliche USP ist:
**CatchIt plant nicht bloß Wege. CatchIt stabilisiert Ketten.**

Und genau deshalb muss das Designsystem:
- zustandsbasiert,
- vertrauensfähig,
- ND-tauglich,
- progressiv verdichtend,
- und privacy-sensibel sein.

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

# CatchIt — Design-Dokument Teil 4  
## Accessibility, Vertrauensarchitektur, Privacy und Content-Regeln

---

## 1. Zielbild

CatchIt soll eine **barrierearme, ND-taugliche, handlungsorientierte Mobilitäts-UX** sein, die nicht nur zugänglich aussieht, sondern zugänglich funktioniert.

Barrierefreiheit in CatchIt ist deshalb nicht bloß:
- Kontrast
- Screenreader
- große Targets

sondern auch:
- mentale Zugänglichkeit
- verständliche Zustände
- geringe Interpretationslast
- sichere Eskalation
- privacy-sensible Bedeutungsreduktion

---

## 2. Accessibility-Prinzipien

## 2.1 Perceivable
- Zustände nie nur farblich codieren
- kritische Änderungen immer zusätzlich textlich markieren
- wesentliche Informationen in ausreichender Größe und mit gutem Kontrast darstellen
- Bubble und Hauptlabels müssen aus Distanz verständlich sein

## 2.2 Operable
- interaktive Ziele groß und klar
- Swipe-Gesten stets optional durch Tap/Buttons ergänzbar
- Fokuszustände sichtbar und kontrastreich
- kein Gestenzwang ohne Alternative

## 2.3 Understandable
- Alltagssprache statt Providerjargon
- „Jetzt los“ statt abstraktem Trigger-Sprech
- Rollen der Alternativen klar benennen
- Replanning in kurzen, lesbaren Sätzen kommunizieren

## 2.4 Robust
- Zustände konsistent halten
- UI-Reaktionen nicht von fragilen Animationen abhängig machen
- Screenreader- und reduzierter Motion-Modus mitdenken
- technische Zustände in menschenlesbare Produktzustände übersetzen

---

## 3. ND-spezifische Lesbarkeitsregeln

### 3.1 Zustände müssen stabil sein
Menschen sollen nicht bei jedem kleinen Datenwechsel die ganze Oberfläche neu „lernen“ müssen.

### 3.2 Überraschungen minimieren
- keine abrupten Layoutsprünge
- keine hektischen Daueranimationen
- keine unlesbaren Statuswechsel

### 3.3 Reizökonomie
- ein dominanter Fokus pro Screen
- Sekundärinfos wirklich sekundär
- keine dekorative Überladung
- Cathy nur so nah wie nötig

### 3.4 Reversibilität
Wenn CatchIt etwas vorschlägt oder anpasst, muss spürbar sein:
- was geändert wurde
- dass es rückgängig oder anpassbar ist
- dass die Nutzerkontrolle nicht verschwunden ist

---

## 4. Vertrauensarchitektur

## 4.1 Vertrauen entsteht nicht aus Glätte
CatchIt darf nicht „magisch“ und undurchsichtig wirken.
Vertrauen entsteht durch:
- lesbare Verdichtung
- sichtbare Übergänge
- explizite Unsicherheit
- nachvollziehbare Rollen von Alternativen
- ehrliche Confidence-Kommunikation

## 4.2 Gute Vertrauensmomente
- „Plan stabil“
- „Recheck nötig“
- „Fallback bereit“
- „Ich habe deine restliche Kette angepasst“
- „Diese Option bleibt rechtzeitig machbar“

## 4.3 Schlechte Vertrauensmomente
- stilles Replanning ohne Erklärung
- falsche semantische Benennungen
- technische Delay-Zahlen ohne Relevanzübersetzung
- zu intime Labels in öffentlicher Oberfläche
- Farbe ohne Bedeutung

---

## 5. Intentional Friction Matrix

## 5.1 Keine Friktion nötig bei
- Blick auf Hauptzustand
- Swipe zur Karte
- Rückkehr aus Kartenfokus
- Wahl der vom System empfohlenen Standardoption
- einfache Replan-Aktionen

## 5.2 Intentionale Friktion nötig bei
- automatischen Bedeutungszuschreibungen
- privaten Labels
- systemischen Kettenanpassungen
- Voice-Ausgaben mit potenziell intimen Inhalten
- Recovery-Umschaltungen mit relevanten Konsequenzen

## 5.3 Form der Friktion
Nicht:
- Dialogwüste
- komplizierte Bestätigungen
- technische Erklärblöcke

Sondern:
- editierbarer Vorschlag
- kurze Systemmeldung
- sichtbarer Kontrollpunkt
- umgebungsneutrale Standardeinstellung

---

## 6. Privacy by Default

### 6.1 Grundregel
**CatchIt zeigt nur so viel Intention, wie für die Aufgabe nötig ist.**

### 6.2 Öffentliche Oberfläche
Was auf dem Main Screen, Lockscreen oder in Audio erscheinen kann, sollte neutral formuliert sein.

Gute Beispiele:
- Arzttermin
- Besorgung
- Zwischenstopp
- Rückweg
- Nächstes Ziel

Kritische Beispiele:
- explizit medizinische oder intime Details
- peinliche Voice-Notizen
- vom System erfundene alltagsprivate Bedeutungen

### 6.3 Private Ebene
Privatere Bedeutung darf existieren, aber:
- bewusst vergeben
- editierbar
- nicht laut standardmäßig
- nicht dominant auf öffentlichen Oberflächen

---

## 7. Voice- und Audio-Regeln

## 7.1 Sprachstil
- knapp
- neutral
- handlungsorientiert
- umfeldsicher

## 7.2 Gute Voice-Beispiele
- „In zehn Minuten los.“
- „Nächste tragfähige Verbindung bleibt stabil.“
- „Bitte jetzt Richtung Haltestelle.“

## 7.3 Schlechte Voice-Beispiele
- intime Inhaltsdetails
- zu lange Sätze
- Providerjargon
- unnötige Wiederholung technischer Daten

---

## 8. Screenreader und semantische Reihenfolge

Die Lesereihenfolge sollte der Produktlogik entsprechen:

1. Zustand
2. Hauptzeit
3. aktueller Abschnitt
4. empfohlene Option
5. Alternativen
6. Kartenkontext / räumliche Details

Wichtig:
- Alternativen nicht gleichwertig vorlesen, wenn eine klar empfohlen ist
- Zustandsrollen mit ausgeben
- reinen Delay-Wert nicht ohne semantischen Kontext vorlesen

---

## 9. Gesten-Accessibility

Swipe ist elegant, darf aber nie exklusiv sein.

Deshalb:
- Swipe up = Karte einblenden
- zusätzliche Taste / affordance = Karte öffnen
- Tap = Fokus setzen
- alternative explizite Aktion für Nutzer, die Gesten nicht nutzen wollen

---

## 10. Content-Prinzipien

## 10.1 Gute CatchIt-Sprache
- konkret
- ruhig
- alltagsnah
- nicht technisch
- nicht verspielt, wenn Präzision nötig ist

## 10.2 Schlechte CatchIt-Sprache
- maschinenhaft
- pseudo-smart
- überemotionalisiert
- intime Details in Standardsprache
- unklare Statuswörter

## 10.3 Produktive Begriffe
- stabil
- bald relevant
- jetzt los
- fragil
- fallback bereit
- Rückweg
- nächstes Ziel
- danach

---

## 11. Sicherheitsprinzip

Safety in CatchIt bedeutet:
- frühere Fragilitätserkennung
- ehrlichere Verlässlichkeit
- bessere Einordnung
- klare Eskalationsmomente
- vorbereitete Fallbacks

Nicht:
- mehr Tracking
- mehr Warnspamming
- Sicherheitstheater

---

## 12. Schlussfolgerung

CatchIt ist dann wirklich zugänglich, wenn es nicht nur schön reduziert ist, sondern:
- mental entlastet,
- soziale Peinlichkeit vermeidet,
- Systementscheidungen lesbar macht,
- und Unsicherheit in **tragfähige Beruhigung** übersetzt.

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
