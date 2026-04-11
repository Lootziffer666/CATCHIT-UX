# CatchIt Design – Teil 5 (bereinigt)

Dieses ZIP ist die bereinigte, gesplittete Fassung von **CatchIt_Design_Teil_5.md**.

## Befund
Teil 5 war die Android-/Compose-nahe Übersetzungsschicht, aber mit mehreren Brüchen:
- alte State-Namen (`stable`, `fragile`, `critical`)
- zu direkte Bindung von UI an Journeys/Providerdaten
- fehlende Anpassung an die spätere 5-State-Logik
- noch nicht sauber genug getrennt zwischen Domain Truth, Product State, Screen State und Component Props

## Ziel dieser Fassung
Teil 5 ist jetzt als **Compose-/Android-Übersetzungsschicht** neu geordnet.

## Inhalt
1. `01_Architektur_und_Uebersetzungslogik.md`
2. `02_ProductState_und_ScreenState_Modelle.md`
3. `03_Compose_Foundations_und_Theme.md`
4. `04_Component_Props_und_Feature_Zuschnitt.md`
5. `05_Recovery_Wizard_Cathy_und_Implementierungsregeln.md`

## Gültiger Stand
- UI rendert keine Rohrealität, sondern abgeleitete Produktzustände
- 5-State-Logik
- Plan / Go / Recovery getrennt
- Cathy bleibt Layer, nicht Source of Truth
- Providerlogik bleibt hinter Reducern / Interactors / Mappers
