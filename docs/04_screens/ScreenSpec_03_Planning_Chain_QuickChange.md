# CatchIt — Figma Screen Spec, Teil 3  
## Planning, Ketten, Rückwege, Quick Changes

Dieser Teil zeigt, wie CatchIt seine eigentliche Stärke sichtbar macht: Ketten statt Einzelfahrten.

---

## 1. Screen: Wizard / Einstieg

### Zweck
Nicht Routenparameter sammeln, sondern ein Vorhaben in eine tragfähige Kette übersetzen.

### Produktbotschaft
„Sag mir, was ansteht. Ich leite den Plan daraus ab.“

### Muss sichtbar sein
- einfache, menschliche Frage
- keine technische Formularsprache
- klare Single-Question-Stage
- Fortschritt durch lineare Panels

### Gute Fragefolge
1. Wohin musst du zuerst?
2. Wann musst du dort sein?
3. Musst du danach noch irgendwo hin?
4. Willst du danach zurück?
5. Ist heute etwas anders als sonst?

### Gestaltungsprinzip
- ein Gedanke pro Screen
- große, verständliche Antwortflächen
- möglichst wenig Freitext
- keine Parameterfriedhöfe

---

## 2. Screen: Wizard / Kettenfrage

### Zweck
CatchIt als Kettenprodukt definieren.

### Produktbotschaft
„Der Weg endet nicht beim ersten Ziel.“

### Muss sichtbar sein
- die Frage „Musst du danach noch irgendwo hin?“
- Antwortoptionen wie:
  - Ja
  - Nein
  - Ich will danach zurück
  - Vielleicht noch ein Stopp

### Anmerkung
Diese Frage ist kein Nebenfeld.  
Sie ist das zentrale Unterscheidungsmerkmal zu normalen Transit-Apps.

---

## 3. Screen: Wizard / Micro-Need oder Tageslage

### Zweck
Bewegungsstil erfassen, nicht nur Ziel.

### Gute Inhalte
- lieber stabil als knapp
- lieber weniger Umstiege
- lieber gehen als warten
- mit Kind unterwegs
- wenig Energie heute
- ruhigste Route bevorzugen

### UX-Haltung
Nicht als Einstellungsfriedhof, sondern als situative Übersetzungshilfe.

---

## 4. Screen: Chain Summary

### Zweck
Die fertige Kette in verständlicher, ruhiger Form zeigen.

### Produktbotschaft
„Das ist dein heutiger Ablauf. Er hält zusammen.“

### Muss sichtbar sein
- Abschnitt 1
- Abschnitt 2
- Rückweg
- ggf. Zusatzstopp
- erkennbare Reihenfolge
- klare Gesamtlogik

### Gute Darstellung
- vertikale Kartenfolge oder sehr ruhige Timeline
- jede Station mit Zweck und Zeitfenster
- nicht wie klassischer Stepper
- eher wie stabiler Tagesfaden

### Wichtig
Hier darf analytischer gezeigt werden als auf dem Main Screen, aber nicht datenlastig.

---

## 5. Screen: Quick Change / Snack Stop

### Zweck
Spontane Änderung einfügen, ohne die ganze Kette neu aufzusetzen.

### Produktbotschaft
„Du kannst vom Plan abweichen, ohne die Sicherheit zu verlieren.“

### Beispiel
- „Noch kurz was snacken“
- „10 Min später weiter“
- „einen Bus später nehmen“
- „noch schnell Apotheke“

### Muss sichtbar sein
- einfache lokale Änderung
- CatchIt passt Restkette mit an
- Ergebnis wird klar benannt:
  - „Rückweg bleibt machbar“
  - „Nächster sinnvoller Bus: 16:22“
  - „Ankunft bleibt pünktlich“

### Nicht tun
- komplette Neuplanung wirken lassen
- Nutzer zurück in Vollvergleich zwingen

---

## 6. Screen: Quick Change / Bus später

### Zweck
Vertrauen zeigen, dass CatchIt den Plan halten kann.

### Muss sichtbar sein
- aktueller Plan
- gewünschte Abweichung
- aktualisierte Kette
- Auswirkung auf Folgeschritte

### Gute Darstellung
- vorher / nachher in ruhiger Form
- keine hektische „alles wird neu berechnet“-Inszenierung
- eher „wir haben nachjustiert“

---

## 7. Screen: Return Leg / Rückweg

### Zweck
Den Rückweg als integralen Teil des Produkts zeigen.

### Produktbotschaft
„CatchIt denkt das Danach und das Zurück von Anfang an mit.“

### Muss sichtbar sein
- Hinweg nicht isoliert
- Rückweg ist vorbereiteter Abschnitt
- evtl. Abfahrtsfenster oder Hinweis:
  - „Spätestens zurück los in …“
  - „Rückfahrt bleibt flexibel bis …“

### Wichtig
Dieser Screen ist zentral, weil hier die Differenzierung zu gewöhnlichen Transit-Apps besonders klar wird.

---

## 8. Screen: Semantik / neutrale Labels

### Zweck
Zeigen, wie CatchIt Alltagssinn unterstützt, ohne intime Bedeutung unkontrolliert auszuspielen.

### Muss sichtbar sein
- Systemlabel
- neutrales Kontextlabel
- optionales Nutzerlabel

### Beispiel
- System: „Linie 21 · Hauptbahnhof“
- Kontext: „Nächstes Ziel“
- Nutzerlabel: „Arzttermin“

### Produktbotschaft
„CatchIt hilft bei Bedeutung, exponiert sie aber nicht unnötig.“

---

## 9. Screen: Lockscreen- / Voice-safe Variante

### Zweck
Öffentliche Robustheit demonstrieren.

### Muss sichtbar sein
- abstrahierte Sprache
- neutrale Begriffe
- kein peinlicher oder intimer Content
- trotzdem handlungsfähig

### Beispiel
- gut: „Nächster Termin um 11:30“
- gut: „In 8 Minuten los“
- vermeiden: intime Detailbezeichnung als laute Ausgabe

---

## 10. Minimales Planning-/Chain-Set

Wenn du für den Kettenaspekt nur 4 Screens baust, nimm:

1. Wizard Einstieg
2. Kettenfrage
3. Chain Summary
4. Quick Change / Snack oder späterer Bus

Diese vier Screens reichen, um die Alleinstellung von CatchIt verständlich zu machen.
