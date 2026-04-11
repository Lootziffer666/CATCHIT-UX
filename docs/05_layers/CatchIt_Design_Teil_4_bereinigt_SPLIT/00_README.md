# CatchIt Design – Teil 4 (bereinigt)

Dieses ZIP ist die bereinigte, gesplittete Fassung von **CatchIt_Design_Teil_4.md**.

## Befund
Teil 4 war der technischere Figma-/Token-/Property-Baustein, aber mit mehreren Problemen:
- alte State-Namen (`stable`, `fragile`, `critical`)
- unklare Trennung zwischen Foundations, Tokens, Component Contracts und Variants
- zu frühe Vermischung von schönem UI-Kit-Denken mit CatchIt-spezifischer Zustandslogik
- fehlende Anpassung an den späteren 5-State-Stand und das Anchor-/Density-System

## Ziel dieser Fassung
Teil 4 ist jetzt als **Figma-System- und Komponentenvertragspaket** neu geordnet.

## Inhalt
1. `01_Foundations_und_Systemprinzipien.md`
2. `02_Tokens_und_semantische_Bindings.md`
3. `03_Component_Contract_und_Familien.md`
4. `04_Variant_Properties_und_State_Mapping.md`
5. `05_Accessibility_Privacy_und_Prototype_Bindings.md`

## Gültiger Systemstand
- 5-State-Logik
- Anchor-first statt Widget-first
- Verdichtung vor Ausfaltung
- Kettenfähigkeit als Kernanforderung
- Accessibility-/Privacy-Varianten als Hauptsystem, nicht Extra
