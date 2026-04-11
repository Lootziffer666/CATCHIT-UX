
# CatchIt - Implementierungsnahe UX-/Design-Spezifikation - Teil 5
## Repo-Alignment, technische Anschlussfähigkeit, priorisierte Umsetzung

---

## 1. Ziel dieses Teils

Dieser Teil bringt das Designsystem mit dem aktuellen Repo-Stand in Einklang.  
Er beantwortet vier Fragen:

1. Was passt schon gut zur bestehenden Architektur?
2. Welche Teile des Designkonzepts sind sofort anschlussfähig?
3. Was braucht neue Modelle oder Erweiterungen?
4. Welche Screens solltest du zuerst als Mockups bauen, damit das Konzept kohärent und überzeugend ist?

---

## 2. Was das Repo bereits gut vorbereitet

Auf Basis des aktuellen öffentlichen Repo-Stands ist bereits viel strukturell passend:

- modulare Android-Architektur
- Compose-basierte UI
- getrennte Core-/Data-/Feature-Module
- Modelle für Journeys, Legs, Optionen und Active Plans
- Scene-/Alert-Logik
- Wizard-First-Routing
- DataStore-basierte Persistenz
- Cathy bereits als optionaler Layer, aber nicht als Wahrheitsquelle
- Home-Feature, Timeline-Präsentation und Testoberflächen

Das ist eine gute Basis für CatchIt als Zustandssystem.

---

## 3. Was aus UX-Sicht direkt anschlussfähig ist

### 3.1 Zustands-Screen als Home
Das Repo besitzt bereits Szene-/Alert-Logik.  
Diese ist ein natürlicher Ausgangspunkt, um den Main Screen als Zustandsoberfläche zu treiben.

### 3.2 Wizard-First-Planung
Die vorhandene Wizard-Logik lässt sich produktiv in Richtung Ketten-Wizard ausbauen.

### 3.3 Active Plan / Multi-Leg-Denken
Da bereits Modelle für Journey Legs, Journey Options und Active Plans vorhanden sind, passt das Kettenkonzept strukturell gut.

### 3.4 Cathy als nachgelagerter Layer
Die Repo-Haltung, Cathy nicht zur Travel Truth zu machen, ist konsistent mit der SSOT.

---

## 4. Was noch nicht reif genug ist, um voll auszuspielen

### 4.1 Echte Live-Reassurance
Solange:
- Provider-Mappings,
- Realtime-Reconciliation,
- Caching,
- Geo-Kontext,
- und produktive Response-Qualität

noch nicht robust sind, darf das UX-Konzept nicht so tun, als wäre bereits jede Vertrauensaussage live beweisbar.

### 4.2 Vollautomatische Semantik
Die Benennung von Abschnitten, privaten Bedeutungen und Alltagskontexten sollte erst später stärker automatisiert werden.

### 4.3 CatchIt2gather
Mehrpersonenlogik ist architektonisch vorgedacht, aber noch kein produktiver Fokus.

---

## 5. Design-zu-Repo-Mapping

### Main Screen / Default Home
Wahrscheinliche Andockpunkte:
- `feature:home`
- bestehende Scene-/Alert-Mappings
- evtl. bestehende Timeline-/Poster-Darstellungen als Zwischenzustand

### Wizard / Kettenaufbau
Wahrscheinliche Andockpunkte:
- `feature:wizard`
- `WizardSetup`
- DataStore-Persistenz
- spätere Erweiterung um Ketten- und Bewegungsstilfragen

### Zustands- und Rollenlogik
Wahrscheinliche Andockpunkte:
- `core:model`
- AlertLevel / Scene
- JourneyOption / ActivePlanTile

### Token-System
Wahrscheinliche Andockpunkte:
- `core:ui`
- Compose Theme / shared primitives

### Cathy
Wahrscheinliche Andockpunkte:
- `feature:cathy`
- State-Image-Support
- spätere Zustandsabbildung aus Travel Truth

---

## 6. Empfohlene neue konzeptuelle Modelle

Auch wenn sie noch nicht als finale Code-Modelle existieren müssen, sollte das Design von folgenden Konzepten ausgehen:

### 6.1 ChainPlan
Repräsentiert nicht nur eine einzelne Verbindung, sondern die gesamte Kette.

Mögliche Felder:
- chainId
- segments[]
- currentSegmentIndex
- returnIncluded
- chainConfidence
- fallbackAvailability
- nextRelevantActionAt

### 6.2 SegmentMeaning
Trennt Systemstruktur von menschlicher Bedeutung.

Mögliche Felder:
- systemName
- neutralLabel
- customLabel
- privacyLevel
- sourceType

### 6.3 TrustState
Macht Vertrauenslogik explizit.

Mögliche Felder:
- planState
- confidence
- recheckNeeded
- fallbackReady
- interventionRequired
- observedAt

### 6.4 OptionRole
Rolle der angezeigten Alternativen.

Werte:
- best
- calmReserve
- fallback
- lateButPossible
- walkingPreferred

---

## 7. Empfohlene Compose-/Design-System-Struktur

### In `core:ui`
- `CatchItTheme`
- `CatchItColors`
- `CatchItTypography`
- `CatchItSpacing`
- `CatchItMotion`
- `CatchItComponents`

### Neue UI-Primitives
- `CountdownBubble`
- `StateBackdrop`
- `OptionRoleTile`
- `ChainContextLine`
- `MapRevealContainer`
- `RecoveryCard`
- `QuickChangeSheet`
- `MeaningLabel`
- `TrustBanner`

### Resolver-Schicht
- `SceneToBackdropResolver`
- `PlanStateToCopyResolver`
- `OptionRoleResolver`
- `MeaningPrivacyResolver`

---

## 8. Priorisierte Reihenfolge der Implementierungs-/Designarbeit

### Phase 1 - Narrativer Kern
Ziel: Das Konzept muss in Mockups und Reviewgesprächen sofort verständlich werden.

Bauen:
1. Main Screen - Blau
2. Main Screen - Grün
3. Map Reveal
4. Map Focus
5. Recovery

Warum:
Das ist die stärkste Produktstory und der klarste Unterschied zu klassischen Transit-Apps.

### Phase 2 - Planlogik
Bauen:
6. Wizard - Vorhaben
7. Wizard - Kettenfrage
8. Wizard - Zusammenfassung
9. Vergleichssicht

Warum:
Jetzt wird sichtbar, dass CatchIt Ketten wirklich anders plant.

### Phase 3 - Eingriff ohne Neustart
Bauen:
10. Quick Change Sheet
11. Recheck State
12. Fallback Ready State

Warum:
Hier zeigt CatchIt seine Alltagsüberlegenheit.

### Phase 4 - Vertrauen und Schutz
Bauen:
13. Privacy-/Voice-Safe Notification State
14. Orte / Routinen / Labels
15. Settings / Accessibility

### Phase 5 - Cathy
Bauen:
16. Cathy peripher / stabil
17. Cathy Transition / Unsicherheit
18. Cathy Recovery-Begleitung

---

## 9. Welche Screens du selbst unbedingt als Mockups zusammenbauen solltest

Hier die verdichtete Liste in priorisierter Form.

### Absolute Pflicht
1. Main - stabil (blau)
2. Main - bald relevant (grün)
3. Main - fragil / Handlung nähert sich
4. Map Reveal
5. Map Focus
6. Recovery - einfachste Rettung
7. Wizard - Vorhaben
8. Wizard - Kettenfrage
9. Wizard - Review / Kettenübersicht

### Sehr sinnvoll
10. horizontale Rollenvergleichssicht
11. Quick Change Sheet
12. Recheck nötig
13. Fallback bereit
14. Kein aktiver Abschnitt / cool-down
15. Privacy-/Notification-safe Variante

### Für kohärente Vollständigkeit
16. Orte / Routinen / neutrale Labels
17. Accessibility / Preferences
18. Cathy peripher
19. Cathy in Transition
20. abgeschlossener Abschnitt mit `Danach`

---

## 10. Was jedes dieser Mockups beweisen soll

### Main Screens
Beweisen:
- Zustandslogik
- Verdichtung
- Rollenalternativen
- Countdown als Handlungsschwelle

### Map Reveal / Focus
Beweisen:
- Raum wird nur bei Bedarf geöffnet
- Bubble bleibt als Zeitanker
- Progression statt harter Kontextsprünge

### Recovery
Beweist:
- CatchIt repariert Ketten
- Störung wird nicht als Datenflut gezeigt

### Wizard
Beweist:
- CatchIt fragt nach Vorhaben, nicht nach Routenparametern

### Quick Change
Beweist:
- spontane Alltagsänderung ohne Neustart

### Privacy-Screen
Beweist:
- CatchIt ist sozial robust
- Bedeutung wird kontrolliert exponiert

### Cathy
Beweist:
- humane Übersetzungsschicht
- aber nicht Quelle der Travel Truth

---

## 11. Empfohlene Dateistruktur für deine eigenen Mockups

Wenn du die Mockups in Figma oder lokal organisierst, empfehle ich:

```text
01_Product_Story/
  01_Main_Stable
  02_Main_Ready
  03_Main_Fragile
  04_Map_Reveal
  05_Map_Focus
  06_Recovery

02_Planning/
  01_Wizard_Intent
  02_Wizard_Chain
  03_Wizard_Review
  04_Compare

03_Adjustment/
  01_Quick_Change
  02_Recheck
  03_Fallback

04_Trust_Privacy/
  01_Privacy_Safe
  02_Locations_Labels
  03_Accessibility

05_Cathy/
  01_Peripheral
  02_Transition
  03_Recovery
```

---

## 12. Praktische Schlussfolgerung

Wenn du die nächsten Mockups baust, beginne **nicht** mit Settings, Profil oder generischen Listen.  
Baue zuerst die Screens, die den Kern beweisen:

- der Main Screen als Zustandsoberfläche
- die Raumöffnung per Swipe
- Recovery
- der kettenfähige Wizard
- spontane Änderung ohne Neustart

Erst danach lohnt sich die Ausarbeitung von Rändern wie Orten, Präferenzen oder Cathy-Feindetails.

---

## 13. Abschluss

Dieses zweite Dokumentenpaket versteht CatchIt als:

- Decision-Relief-System
- Reassurance-System
- Ketten-System
- ND-taugliche Zustandsmaschine
- vertrauensfähige, privacy-sensible Mobilitätsoberfläche

Die nächsten besten Artefakte wären nun:

1. ein drittes Paket als **Figma-Screen-Spec in Markdown**,
2. ein **Token-Export-Stub für Compose/JSON**,
3. oder ein **Komponentenhandbuch pro Screenzustand**.
