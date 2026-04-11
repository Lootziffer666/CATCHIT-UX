# Migration Summary (Structural Record)

This file records what changed in the docs restructure and what authority boundaries now apply.

## 1) Structural changes made

### Moved into authority-ordered docs domains
- Mixed material previously kept in `new/` was moved into `docs/01_philosophy` through `docs/08_working_notes`.
- Canonical rule content was separated from supporting specs, archive artifacts, and working notes.

### Renamed/normalized for stable lookup
- Screen and implementation specs were normalized to stable, numbered names (for example `ScreenSpec_01..05`, `ImplementationSpec_01..05`, `PropertyTokenSpec_01..04`, `ComposeTranslation_01..05`).

### Split for maintainability
- Large "Teil" source tracks were preserved as split sets under `docs/05_layers/*_SPLIT/` to reduce single-file sprawl while keeping traceability.

### Archived instead of kept inline
- Historical prototype HTML files were moved to `docs/07_prototypes_archive/html/`.
- Historical zipped/packaged exports (`.zip`, `.rar`) were moved to `docs/07_prototypes_archive/packages/`.

### Classified into canonical vs supporting vs archival
- Canonical rule authority: `docs/01_philosophy/`, `docs/02_system/`.
- Gold reference authority: `docs/03_gold_set/`.
- Supporting implementation guidance: `docs/04_screens/`, `docs/05_layers/`.
- Parallel (non-overriding) domain: `docs/06_motion_brand/`.
- Non-canonical archive/working zones: `docs/07_prototypes_archive/`, `docs/08_working_notes/`, and root `maybe_deprecated/`.

## 2) Gold-set clarification
- Gold authority is now organized under `docs/03_gold_set/`, with Layer 2 gold nested at `docs/03_gold_set/layer_2_gold_set/`.
- `docs/03_gold_set/` remains the primary Core/Extended gold baseline (including `12A` Core and `12B` Extended references).
- `docs/03_gold_set/layer_2_gold_set/` is for later gold-status material and does not collapse Core vs Extended distinctions.
- Older unsplit gold-adjacent material preserved elsewhere is retained for traceability, not as primary authority.

## 3) Prototype/archive clarification
- Prototype HTML and packaged exports were intentionally moved into `docs/07_prototypes_archive/`.
- Archive material remains useful for lessons, comparative checks, and historical traceability.
- Archive material is **not** automatically normative and cannot override canonical or gold files.

## 4) Supersession map (practical)
- Canonical/product-truth disputes are superseded by `docs/01_philosophy/` + `docs/02_system/`.
- Gold-level acceptance/reference disputes are superseded by `docs/03_gold_set/` (Core before Extended on conflicts).
- Prototype behavior in old HTML/ZIP artifacts is superseded by canonical + gold + current supporting specs.
- Exploratory notes (`docs/08_working_notes/`) and legacy holding content (`maybe_deprecated/`) are superseded by canonical/gold/supporting current docs.

## 5) Intentionally imperfect areas retained
- `docs/04_screens/` remains a grouped screen-spec area (supporting, non-gold). It is intentionally kept as a practical bundle pending any future deeper pass.
- `maybe_deprecated/` remains a holding zone for non-canonical historical material and unresolved leftovers.
- Parallel tracks still exist in places (split/unsplit and multiple package versions). They are preserved intentionally until a dedicated, explicit supersession pass is executed.

## 6) Trust boundary reminder
Use this order when conflicts appear:
1. `docs/01_philosophy/` + `docs/02_system/`
2. `docs/03_gold_set/` + `docs/03_gold_set/layer_2_gold_set/` (Core before Extended inside `03_gold_set`)
3. `docs/04_screens/` + `docs/05_layers/`
4. `docs/06_motion_brand/` (parallel spec domain)
5. `docs/08_working_notes/`, `docs/07_prototypes_archive/`, `maybe_deprecated/`
