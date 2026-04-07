# Framework für adaptive Layouts statt Themes

CatchIt sollte nicht primär über Themes, sondern über adaptive Layout-Logik definiert werden. Unterschiedliche Lagen verlangen unterschiedliche Verdichtungsformen derselben Wahrheit.

## Ausgangspunkt

Dieselben Daten verdienen nicht immer dieselbe Oberfläche. Sie verdienen diejenige Oberfläche, die der momentanen menschlichen Lage gerecht wird.

## Warum Themes nicht reichen

Themes verändern meist nur:
- Farben
- Dichte
- Dekor
- Stil

Sie verändern selten:
- Handlungsebene
- Informationsgewichtung
- Sichtbarkeitslogik
- Vergleichstiefe
- Friktionsgrad

Für CatchIt ist das zu wenig. Die App braucht adaptive Layouts, weil nicht dieselbe Person immer denselben Zugriff braucht.

## Das adaptive Layout-Framework

Jeder UX-Layer sollte über vier Achsen definiert werden:

### 1. Mentaler Zustand
Welcher Zustand wird gerade bedient?
Beispiele:
- Eile
- Unsicherheit
- Vergleichsbedarf
- Beruhigungsbedarf
- aktive Ausführung

### 2. Sichtbare Handlungsebene
Was soll für den Nutzer aktuell sichtbar sein?
Optionen:
- nur Empfehlung
- Auswahl
- Bestätigung
- Ausführung
- Eingriff

### 3. Sinnvolle Friktion
Welche Reibung ist hier nützlich?
Optionen:
- bewusstes Bestätigen
- kurzer Swipe
- explizites Umschalten
- kein Eingriff nötig

### 4. Absichtlich Unsichtbares
Was bleibt bewusst im Hintergrund?
Beispiele:
- technische Details
- sekundäre Alternativen
- vergangene Schritte
- irrelevante Unsicherheit

## Anwendung im Produkt

Ein Layout ist dann nicht einfach eine Bildschirmvariante, sondern die konkrete Beantwortung dieser vier Fragen für eine bestimmte Lage.

Beispielhaft:
- Ein Handlungsschwellen-Screen zeigt nur den Zeitpunkt und die tragfähigste Hauptoption.
- Ein Auswahl-Screen zeigt wenige, klar gerollte Alternativen.
- Ein Exekutions-Screen zeigt nur das Nächste und beruhigt Vergangenes.
- Ein Assurance-Screen zeigt nur, ob Handlungsbedarf besteht.
- Ein Eingriffs-Screen zeigt nur die Störung und den besten nächsten Zustand.

## Regeln des Frameworks

1. Dieselbe Travel Truth darf mehrfach dargestellt werden.
2. Unterschiede entstehen aus Lage, nicht aus Dekor.
3. Jede Ansicht muss eine klar erkennbare Handlungsebene haben.
4. Was nicht hilft, bleibt unsichtbar.
5. Jede zusätzliche Sichtbarkeit muss Vertrauen oder Orientierung erzeugen.
6. Jede Reduktion muss Last senken, ohne Wahrheit zu verfälschen.

## Zielbild

CatchIt verwendet keine starre Hauptansicht, sondern ein System adaptiver Verdichtungen. Dadurch wirkt dieselbe Wahrheit je nach Situation anders, ohne beliebig zu werden.
