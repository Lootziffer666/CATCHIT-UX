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
