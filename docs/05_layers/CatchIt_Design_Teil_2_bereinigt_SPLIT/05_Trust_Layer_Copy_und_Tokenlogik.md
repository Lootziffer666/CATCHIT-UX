# CatchIt – Teil 2E
## Trust-Layer, Copy und Tokenlogik

## 1. Trust-Layer

Trust ist in CatchIt kein Zusatz, sondern Architekturschicht.

Vertrauen entsteht durch:
- lesbare Zustände
- stabile Rollen von Alternativen
- sichtbare Übergänge
- explizite Fragilität
- nachvollziehbare Eingriffe
- neutrale öffentliche Sprache

Vertrauen entsteht nicht durch:
- überfreundliche Beschönigung
- stilles Replanning
- technische Delay-Zahlen ohne Relevanzübersetzung
- intime Label auf öffentlicher Oberfläche
- Farbe ohne Bedeutung

---

## 2. Copy-Grundregeln

CatchIt-Sprache muss:
- alltagsnah
- kurz
- brauchbar
- zustandsangemessen
- nicht marketinghaft
- nicht transit-jargonig

sein.

### Gute Beispiele
- `Spätestens los in`
- `Jetzt losgehen`
- `Ich prüfe eine passende Alternative`
- `Das klappt so nicht mehr`

### Schlechte Beispiele
- `Optimize your route`
- `Configuration complete`
- `Warning`
- `Great news!`

---

## 3. Zustandsnahe Copy-Ideen

### Stabil / Idle / Blue
- `Noch ruhig`
- `Heute passt das`
- `Du musst noch nicht handeln`

### Ready / Green
- `Jetzt wird es relevant`
- `Noch gut erreichbar`
- `Passt weiterhin`

### Adapting / Yellow
- `Ich prüfe eine passende Alternative`
- `Geändert, aber noch gut lösbar`
- `Ich passe das an`

### Act Now / Orange
- `Jetzt losgehen`
- `Zur Haltestelle gehen`
- `Jetzt prüfen`

### Failed / Red
- `Das klappt so nicht mehr`
- `Diesen Anschluss erreichst du nicht mehr`
- `Neue Lösung nötig`

---

## 4. Tokenlogik

Neben visuellen Tokens braucht CatchIt semantische Tokens.

### Zustandsnahe Tokenbeispiele
- `state.idle.*`
- `state.ready.*`
- `state.adapting.*`
- `state.actNow.*`
- `state.failed.*`

### Content-/Copy-Tokens
- `copy.hero.leaveIn`
- `copy.hero.leaveNow`
- `copy.role.primary`
- `copy.role.reserve`
- `copy.role.fallback`
- `copy.trust.stable`
- `copy.trust.recheck`
- `copy.trust.action`
- `copy.trust.failed`

### Regel
Tokens dürfen nicht nur hübsch sein, sondern müssen Bedeutung tragen:
- Wie dringlich ist es?
- Wie stabil ist es?
- Was ist jetzt wichtig?
- Was darf im Hintergrund bleiben?

---

## 5. Öffentliche Oberfläche vs. private Bedeutung

Öffentliche Screens zeigen neutrale, sozial robuste Begriffe.

Beispiel:
- gut: `Arzttermin`, `Besorgung`, `Zwischenstopp`
- schlecht als Default: intime oder peinliche Detailformulierung

### Produktregel
**Öffentliche Oberfläche neutral, private Bedeutung optional.**

---

## 6. Prüffragen für jedes UI-Element

1. Hilft es beim nächsten sinnvollen Schritt?
2. Macht es die Lage lesbarer?
3. Schützt es Vertrauen?
4. Ist es öffentlich robust?
5. Ist es bei größerer Schrift noch verständlich?
6. Überlädt es den Zustand?
7. Ist es für ND-Nutzung eher regulierend als stressend?
