# CatchIt – Teil 1B
## Zustandslogik und UX-Grundprinzipien

## 1. Zustandslogik statt Prozesslogik

CatchIt darf nicht wie ein Formular, Provider-Testscreen oder Reiseplaner-Menü wirken.  
Es braucht menschenlesbare Zustände statt technischer Prozessschritte.

### Gültige Hauptzustände
- **Blue / Idle** – noch ruhig
- **Green / Ready** – relevant und tragfähig
- **Yellow / Adapting** – Änderung erkannt, CatchIt reagiert
- **Orange / Act Now** – Nutzer muss jetzt handeln
- **Red / Failed** – diese konkrete Lösung ist nicht mehr tragfähig

### Harte Bedeutung
- **Gelb** ist kein Warnzustand
- **Orange** ist der eigentliche Action-State
- **Rot** ist kein „vorsicht“, sondern „geht so nicht mehr“

### Produktlogik dahinter
- In Blau, Grün und Gelb trägt CatchIt die Last weitgehend selbst
- In Orange muss der Nutzer aktiv mitziehen
- In Rot ist die Lage nicht mehr mit besserem UI wegzudesignen

---

## 2. Verdichtung vor Vollständigkeit

Die UI zeigt nicht alles, was das System weiß.  
Sie zeigt zuerst nur das, was für den aktuellen Moment tragfähig ist.

### Priorität
1. nächster relevanter Schritt
2. zeitliche Dringlichkeit
3. Stabilität / Confidence
4. einfachste tragfähige Alternative
5. Details nur bei Bedarf

### CatchIt-Regel
**Das System eskaliert über Fokus, nicht über Inventar.**

Mehr Dringlichkeit bedeutet nicht:
- mehr Karten
- mehr Module
- mehr Labels
- mehr UI-Lärm

Mehr Dringlichkeit bedeutet:
- klarere Hierarchie
- weniger Ambiguität
- weniger Nebensignale
- stärkere Handlungslesbarkeit

---

## 3. Kette immer spürbar halten

Auch in stark verdichteten Zuständen muss klar bleiben:
- Wo in der Kette bin ich?
- Was ist das aktuelle Ziel?
- Was kommt danach?
- Ist die Gesamtkette noch tragfähig?

CatchIt darf nie so tun, als sei der aktuelle Schritt isoliert.

---

## 4. Planung horizontal, Exekution vertikal

Das räumliche Modell ist zentral:

- **Planung** ist Vergleich → horizontal
- **Exekution** ist Handlung → vertikal

### Daraus folgt
Vergleichbare Optionen gehören nebeneinander.  
Schrittfolgen gehören untereinander.

Der Nutzer soll nicht erst lesen müssen, in welchem Modus er ist.  
Der Raum selbst muss es zeigen.

---

## 5. Raum nur bei Bedarf

Die Karte ist kein permanenter Hintergrundteppich.

Raum wird erst dann dominant, wenn körperliche Orientierung wirklich wichtig wird:
- Fußweg zur besseren Haltestelle
- Wegführung
- Ortsbezug bei Unsicherheit
- Wechsel in echten Navigationsfokus

### CatchIt-Regel
Die Karte ist **räumliche Unterstützung**, nicht Produktstandard.

Sie erscheint als:
- lower reveal
- integrated spatial assist
- situative Orientierungsebene

Nicht als:
- Maps-Screen
- Standard-Bottom-Sheet
- dauerhafte Default-Hero-Fläche

---

## 6. Zustandsoberfläche als Home

Der Default Home ist kein klassischer Startscreen, sondern eine **Zustandsoberfläche**.

Er beantwortet idealerweise in einem Blick:
- Muss ich jetzt etwas tun?
- Wann muss ich los?
- Ist der Plan tragfähig?
- Welche wenigen Optionen sind heute für mich sinnvoll?

### Der Home-State darf nicht werden
- Dashboard
- Fahrplansuche
- Ergebnisliste
- Datenkonsole

### Der Home-State muss tragen
- Primärwahrheit
- Handlungsschwelle
- Kettenbezug
- lesbare Stabilität
