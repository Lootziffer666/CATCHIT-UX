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
