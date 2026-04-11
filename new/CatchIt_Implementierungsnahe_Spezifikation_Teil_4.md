
# CatchIt - Implementierungsnahe UX-/Design-Spezifikation - Teil 4
## Accessibility, Vertrauensarchitektur, Privacy, Voice, Cathy

---

## 1. Ziel dieses Teils

Dieser Teil übersetzt die bisherige CatchIt-Richtung in Regeln für:

- WCAG-orientierte Lesbarkeit
- ND-taugliche Reizkontrolle
- Vertrauensaufbau
- Privacy-by-default
- Notification- und Voice-Verhalten
- Cathy als humane Übersetzungsschicht

---

## 2. Accessibility-Grundsatz

CatchIt soll nicht nur „auch zugänglich“ sein.  
Die ND-taugliche Produktidee und die Accessibility-Idee verstärken sich gegenseitig.

### Gemeinsame Interessen
- klare Hierarchie
- wenig konkurrierende Reize
- lesbare Zustände
- stabile Interaktionsmuster
- ausreichend große Ziele
- gute Fokusführung
- reduzierte Überraschung
- klare Sprache

---

## 3. WCAG-orientierte Grundregeln

### 3.1 Farbe nie allein
Alle Zustände brauchen neben der Farbe mindestens einen weiteren Marker:
- Text
- Icon
- Bubble-Verhalten
- Rollenlabel
- haptische / akustische Variante

### 3.2 Zielgrößen
Interaktive Elemente brauchen ausreichende Touch-Fläche und Abstand.  
Besonders relevant:
- Options-Tiles
- Karten-Interaktionen
- Swipe-Hints
- Quick Change Actions
- Recovery-Entscheidungen

### 3.3 Fokuszustände
Wenn Fokussteuerung, Tastatur, Screenreader oder Switch-Zugriff relevant werden, braucht jede Aktion:
- klaren Fokusrahmen
- genügenden Kontrast
- eindeutige Reihenfolge

### 3.4 Textskalierung
Das System muss mit vergrößerter Schrift funktionieren, besonders:
- Hero-Labels
- Option Chips
- Recovery Cards
- untere Karteninfos

### 3.5 Bewegung
Animationen müssen abschaltbar oder ausreichend zurückhaltend sein:
- keine hektischen Dauerbewegungen
- keine pulsierenden Alarme als Default
- kein permanent lebendiger Companion im kritischen Modus

---

## 4. ND-taugliche Reizarchitektur

CatchIt braucht keine sterile UI, aber es braucht **Reizdisziplin**.

### Gute Reize
- klarer Farbumschlag
- eine dominante Bubble
- wenige Optionen
- sanfte räumliche Öffnung
- klare Statusworte

### Schlechte Reize
- mehrere konkurrierende CTA gleichzeitig
- zu viel Animation
- zu viele metrische Details
- technische Statusmeldungen
- aggressive Assistentenpräsenz
- emotionalisierte Fehlerszenarien

### Regel
**Ein zentraler Reizträger pro Zustand.**

Beispiele:
- Main: Countdown
- Map Reveal: Karte
- Recovery: einfachste Rettung
- Wizard: die aktuelle Frage

---

## 5. Vertrauensarchitektur

Vertrauen muss aktiv gestaltet werden.

### CatchIt soll sichtbar machen:
- wie sicher der Plan ist
- ob beobachtet wird
- ob neu geprüft werden muss
- ob eine Alternative bereitliegt
- ob der Rest der Kette stabil bleibt

### Geeignete Vertrauensmuster
- `Alles im Plan`
- `Wird beobachtet`
- `Neu prüfen`
- `Alternative bereit`
- `Kette angepasst`
- `Rückweg bleibt machbar`

### Ungünstige Muster
- `alles okay`
- `kein Problem`
- `perfekt`
- `mach dir keine Sorgen`

Zu glatt klingende Beschwichtigung wirkt weniger vertrauenswürdig als präzise Einordnung.

---

## 6. Privacy-by-default

CatchIt muss davon ausgehen, dass Nutzer sich oft im öffentlichen Raum befinden.

### Öffentliche Kanäle
- Lockscreen
- Voice
- Wearables
- Schnellansichten
- Main Screen in gesellschaftlichen Situationen

### Standardregel
Nur zeigen oder aussprechen, was für die Aufgabe nötig ist.

### Gute Defaults
- `Arzttermin`
- `Besorgung`
- `Zwischenstopp`
- `nächstes Ziel`
- `Rückweg`

### Private Ebenen
Detailliertere Bezeichnungen dürfen erst sichtbar sein, wenn:
- Nutzer sie selbst gesetzt hat
- Nutzer sie bewusst einblendet
- die Oberfläche privat genug ist

---

## 7. Voice-UX-Regeln

Voice darf nicht als unkontrolliertes Vorlesen persönlicher Kontexte gestaltet werden.

### Voice darf standardmäßig ansagen:
- wann gehandelt werden muss
- ob sich etwas geändert hat
- welche grobe Richtung relevant ist
- welche Linie / Haltestelle jetzt zählt
- dass ein Fallback bereit ist

### Voice soll standardmäßig vermeiden:
- intime Kalendereintragsdetails
- peinliche To-dos
- medizinische Fachdetails
- private Nutzerlabels
- zu lange Sätze

### Gute Voice-Sätze
- `In zehn Minuten losgehen.`
- `Neue Alternative bereit.`
- `Nächste Haltestelle: Hauptbahnhof.`
- `Rückweg wurde angepasst.`

### Schlechte Voice-Sätze
- zu intime Bedeutungen
- komplexe Erklärtexte
- mehrere Alternativen in einem Satz
- provider-technische Sprache

---

## 8. Notification-Regeln

Benachrichtigungen müssen sozial robust und handlungsfähig sein.

### Notification-Ebenen
1. nur Hinweis
2. Recheck
3. Handlung
4. Fallback

### Gute Benachrichtigungen
- `Bald losgehen`
- `Plan wird neu geprüft`
- `Alternative bereit`
- `Bitte jetzt aufbrechen`

### Schlechte Benachrichtigungen
- komplette Routentexte
- private Labels
- zu viele Echtzeitmeldungen
- technische Warnungen ohne Handlung

---

## 9. Accessibility-sensible Zustände

### Main Screen
- Countdown bleibt lesbar
- Farben plus Textmarker
- Optionen nicht zu klein
- klare Wischhinweise nur wenn nötig

### Map Reveal
- Swipe darf nicht einzige Entdeckungsmethode sein
- Karte muss auch antippbar erreichbar sein
- reduzierte Informationen oben müssen weiterhin lesbar bleiben

### Map Focus
- Karteninfos unterhalb müssen screenreader-tauglich sein
- Bubble darf nicht wichtige Kartensteuerung verdecken
- Wegdauer / Entfernung / Linie als klare Reihenfolge

### Recovery
- ein Hauptweg
- eine Reserve
- kein Entscheidungstsunami

### Wizard
- eine Frage pro Screen oder sehr klar gruppiert
- Fortschritt lesbar
- Fehlervermeidung vor endgültigem Speichern

---

## 10. Cathy-Regeln

Cathy ist wichtig, aber sekundär zur Travel Truth.

### Cathy bei Stabilität
- peripher
- ruhig
- optional
- eher zustandsrahmend als erklärend

### Cathy bei Unsicherheit
- etwas präsenter
- kann Übergänge verständlicher machen
- darf Recovery rahmen

### Cathy bei kritischer Handlung
- nicht dominieren
- nicht ablenken
- nicht emotional überlagern

### Cathy-Tonalität
- nie infantil, wenn Präzision nötig ist
- nicht zu niedlich im Störfall
- nicht gleichzeitig mit kritischem Text konkurrieren

---

## 11. Intentional Friction als Vertrauenswerkzeug

Die Designentscheidung, an bestimmten Stellen Friktion bewusst zuzulassen, ist richtig.

### Sinnvolle Stellen
- System schlägt Bedeutung vor, statt sie einfach festzuschreiben
- Kettenänderung wird kurz sichtbar bestätigt
- Recovery erklärt kurz die Auswirkung
- private Labels müssen aktiv gesetzt oder freigegeben werden
- kritische Zustandswechsel bekommen klaren Marker

### Nicht sinnvoll
- dauernde Bestätigungsdialoge
- ständiges Nachfragen
- unnötige Setup-Hürden
- versteckte Komplexität hinter simplen Labels

---

## 12. Vertrauensfähige Microcopy-Muster

### Stabil
- `Alles im Plan`
- `Du musst noch nicht handeln`
- `Nächster Schritt ist vorbereitet`

### Beobachtung
- `Plan wird beobachtet`
- `Noch kein Eingriff nötig`
- `Alternative ist vorbereitet`

### Recheck
- `Neu prüfen`
- `Anschluss wird knapp`
- `Plan wurde aktualisiert`

### Handlung
- `Bitte jetzt losgehen`
- `Spätestens jetzt aufbrechen`
- `Alternative aktivieren`

### Abschluss
- `Abschnitt geschafft`
- `Danach geht es weiter mit ...`
- `Kein aktiver Abschnitt`

---

## 13. Prüffragen für jedes UI-Element

Jedes Element in CatchIt sollte diese Fragen bestehen:

1. Hilft es beim nächsten sinnvollen Schritt?
2. Macht es die Lage lesbarer?
3. Schützt es Vertrauen?
4. Ist es öffentlich robust?
5. Ist es bei größerer Schrift noch verständlich?
6. Überlädt es den Zustand?
7. Ist es für ND-Nutzung eher regulierend als stressend?

---

## 14. Übergang zu Teil 5

Teil 5 verbindet alles mit dem aktuellen Repo:
- technische Anschlussfähigkeit
- sinnvolle Priorisierung
- Komponenten- und Screen-Reihenfolge
- Implementierungsroadmap
