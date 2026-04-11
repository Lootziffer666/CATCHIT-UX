# CatchIt – Teil 5E
## Recovery, Wizard, Cathy und Implementierungsregeln

## 1. Recovery technisch übersetzen

Recovery darf nicht bloß `error = true` oder `delay > x` sein.

Es braucht eigene produktive Ableitungen:
- `SimpleSwitch`
- `RecheckNeeded`
- `ChainAdjusted`
- optional später `FailedAndRebased`

### Regel
Recovery wird als Produkterfahrung modelliert, nicht als UI-Sonderfall.

---

## 2. Wizard technisch übersetzen

Wizard muss:
- Vorhaben erfassen
- Kette aufbauen
- Tageslage abbilden
- Rückweg mitdenken
- Quick Change vorbereiten

### Nicht tun
- als Settings-Screen modellieren
- direkte Providerlogik zeigen
- endlose Formularvalidierung in den Vordergrund stellen

---

## 3. Cathy technisch begrenzen

Cathy ist nicht Source of Truth.

### Cathy darf:
- Zustand rahmen
- Nähe / Distanz modulieren
- Übergänge begleiten
- Reassurance visuell unterstützen

### Cathy darf nicht:
- Business-Truth besitzen
- Countdown / Instruction verdrängen
- Providerzustände ersetzen
- Recovery-Entscheidungen treffen

---

## 4. Was ausdrücklich vermieden werden sollte

- Home-UI direkt auf Providerresponse-Feldern aufbauen
- Debug-Datenmodell als Grundlage der Endnutzeroberfläche
- eine einzige generische JourneyScreen-Komponente für alles
- technische States wie loading / delayed / error als Produktsprache
- zu frühe Koppelung an Karten-SDK-spezifische Details

---

## 5. Implementierungsregel in einem Satz

**SSOT → Product State → Screen State → Component Props → Compose UI**

Nicht:
**Provider Response → UI**

---

## 6. Ergebnis dieses Pakets

Teil 5 legt die Übersetzungslogik fest:

- Domain Truth wird nicht direkt gerendert
- Product States machen CatchIt-lesbare Wahrheit daraus
- Screen States strukturieren Modi und Zustände
- Component Props halten Varianten anschlussfähig
- Compose rendert die verdichtete Produkterfahrung
