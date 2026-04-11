# Migration Summary

## What was moved/renamed
- Former mixed-maturity files from `new/` were reorganized into `docs/01_philosophy` through `docs/08_working_notes`.
- Filenames were normalized for readability and stable lookup (for example screen specs and token specs).

## What was archived
- Prototype HTML exports moved to `docs/07_prototypes_archive/html/`.
- Prototype/design bundles (`.zip`, `.rar`) moved to `docs/07_prototypes_archive/packages/`.

## What is now canonical
- Primary source-of-truth: `docs/01_philosophy/` and `docs/02_system/`.
- Gold-level architectural reference: `docs/03_gold_set/`.

## What remains supporting/non-canonical
- Supporting specs: `docs/04_screens/`, `docs/05_layers/`.
- Motion/brand domain: `docs/06_motion_brand/` (important but separate from operational precedence).
- Working notes: `docs/08_working_notes/`.
- Archive inspiration: `docs/07_prototypes_archive/`.
- Historical deprecated area retained: `maybe_deprecated/`.

## Unresolved items
- Some documents exist in parallel tracks (split/unsplit and multiple package versions). They are preserved until a dedicated de-duplication pass with explicit supersession decisions.
