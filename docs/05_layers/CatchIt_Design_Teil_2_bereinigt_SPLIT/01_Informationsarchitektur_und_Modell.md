# CatchIt – Teil 2A
## Informationsarchitektur und Modell

## 1. Ziel dieses Teils

Dieser Teil definiert die operative Informationsarchitektur von CatchIt.

Er beantwortet:
- Welche UX-Ebenen gibt es?
- Wie unterscheiden sich Planung, Exekution und Recovery?
- Wie bleibt die Kette als Produktmodell spürbar?
- Welche Wahrheit ist wann primär?

---

## 2. Die drei Hauptmodi

### Plan Mode
Zweck:
- Vorhaben und Ketten erfassen
- Rückwege und Folgeschritte mitdenken
- Bewegungsstil und Tageslage übersetzen

Kernfrage:
**Was steht an, und geht es danach noch weiter?**

Merkmale:
- horizontaler Vergleich
- wizardartige Führung
- keine Providerlogik
- keine technischen Felder als Primärmodell

### Go Mode
Zweck:
- laufenden Ablauf begleiten
- Dringlichkeit regulieren
- nächste Handlung eindeutig machen
- Vertrauen stabil halten

Kernfrage:
**Was ist jetzt wichtig?**

Merkmale:
- vertikal
- reduziert
- zustandsbasiert
- handlungsorientiert

### Recovery Mode
Zweck:
- Kippen eines Plans auffangen
- Reassurance oder Eingriff liefern
- einfachste tragfähige Rettung zeigen

Kernfrage:
**Was ist jetzt die einfachste tragfähige Alternative?**

Merkmale:
- keine Panik-UI
- keine Vollsuche
- keine Datendumping-Reaktion
- klare Fallback-Rollen

---

## 3. Die fünf UX-Ebenen

### 3.1 Orientierung
Fragen:
- Muss ich jetzt etwas tun?
- Ist mein Plan tragfähig?
- Wann muss ich los?

Primäre Oberfläche:
- Main State / Default Home

### 3.2 Vergleich
Fragen:
- Welche wenigen tragfähigen Optionen gibt es?
- Welche Rolle hat jede davon?

Primäre Oberfläche:
- Option Unpacking
- Wizard-Zusammenfassung
- Fallback-/Alternativansichten

### 3.3 Übergang
Fragen:
- Wie wird aus Plan Handlung?
- Wann muss Raumhilfe sichtbar werden?

Primäre Oberfläche:
- Map Reveal
- verdichtete Übergangszustände
- Anchor-Handover von Countdown zu Instruction

### 3.4 Exekution
Fragen:
- Was ist jetzt der nächste Schritt?
- Was kommt danach?

Primäre Oberfläche:
- Go Mode
- Map Focus
- vertikale Schrittlogik

### 3.5 Reassurance / Eingriff
Fragen:
- Muss ich etwas ändern?
- Reagiert CatchIt bereits?
- Gibt es eine einfache Rettung?

Primäre Oberfläche:
- Recovery
- Recheck
- Kettenanpassung
- Confirmation-States

---

## 4. Produktregel

CatchIt braucht keine klassische App-Struktur mit gleichgewichtigen Tabs.  
Es braucht eine **kontextdominierte Architektur**.

Primäre Produktbereiche:
1. Home / Main State
2. Plan Mode / Wizard
3. Go Mode
4. Recovery Layer
5. Orte / Routinen / Bedeutungen
6. Vertrauen / Accessibility / Privacy

### Default-Regel
Der Einstieg ist nicht Suche, sondern **Zustandsklarheit**.

---

## 5. Kettenmodell als IA-Grundlage

Die UX darf nie so tun, als gäbe es nur:
- Start
- Ziel
- fertig

Stattdessen muss immer mindestens implizit klar sein:
- Du befindest dich in einer laufenden Kette
- Der aktuelle Schritt ist nur ein Abschnitt
- CatchIt kennt auch das Danach
- Änderungen müssen lokal möglich sein, ohne die ganze Kette neu zu erzwingen

### Designregel
Der Nutzer plant keine Route, sondern einen **tragfähigen Ablauf**.
