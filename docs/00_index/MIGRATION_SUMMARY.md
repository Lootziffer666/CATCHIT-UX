# Migration Summary

## What changed
A documentation normalization pass consolidated the previous mixed `new/` content into a stable `docs/` structure.

## Canonical source-of-truth now
- `docs/01_philosophy/`
- `docs/02_system/`
- `docs/03_gold_set/`

## Main moves
- Numbered philosophy/system/gold files moved from `new/` into `docs/01_*`, `docs/02_*`, `docs/03_*`.
- Screen-spec files moved into `docs/04_screens/` with normalized names.
- Layer, token, compose translation, and implementation bridge files moved into `docs/05_layers/`.
- Splash/signet and logo assets moved into `docs/06_motion_brand/`.
- Prototype HTML/ZIP/RAR exports moved into `docs/07_prototypes_archive/`.
- Intermediate and working design docs moved into `docs/08_working_notes/`.

## Legacy retained
- `maybe_deprecated/` was left intact as historical/deprecated context.
- Archived prototypes remain accessible in `docs/07_prototypes_archive/` and are explicitly non-canonical.

## Supersession note
If archive/prototype files conflict with canonical rules, treat archive artifacts as inspiration only and follow canonical folders.
