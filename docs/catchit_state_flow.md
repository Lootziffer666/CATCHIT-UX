# CatchIt – State Flow (Plan → Go → Recovery)

```mermaid
graph TD
  A["App / Plan geöffnet"]
  B["PLAN State"]
  C["Go starten"]
  D["GO State"]
  E["Alles stabil?"]
  F["Continue Execution"]
  G["Quick Change"]
  H["Plan aktualisieren"]
  I["Recovery Trigger"]
  J["RECOVERY State"]
  K["Recovery Option wählen"]
  L["Zurück in GO"]
  M["Zurück in PLAN"]
  N["Plan abgeschlossen"]

  A --> B
  B --> C
  C --> D

  D --> E
  E -- "Ja" --> F
  F --> D

  E -- "Nein / Unsicher" --> I
  I --> J
  J --> K

  D --> G
  G --> H
  H --> D

  K -- "einfacher Fix" --> L
  L --> D

  K -- "größere Neuplanung" --> M
  M --> B

  D -- "Ziel erreicht" --> N
```

## Kurzlogik

- **PLAN**: Planung läuft horizontal. Nutzer erstellt oder bearbeitet eine Kette.
- **GO**: Ausführung läuft vertikal. Fokus liegt auf dem aktuellen Schritt und der nächsten Entscheidung.
- **RECOVERY**: Wird ausgelöst, wenn die Lage instabil wird, etwa bei Verzug, verpasstem Anschluss oder Kontextwechsel.
- **Quick Change**: Kleine Anpassung innerhalb von GO, ohne komplette Rückkehr in PLAN.
- **Neuplanung**: Größere Abweichungen führen zurück in PLAN.