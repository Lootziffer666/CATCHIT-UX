# Workflow Start Here

Use this workflow to extend CatchIt without drift.

## 1) Before editing
- Read `CANONICAL_START_HERE.md` and `FILE_AUTHORITY_MAP.md`.
- Confirm whether your task is philosophy/system, gold, screen, layer, motion/brand, or archive analysis.

## 2) When to edit canonical files
Edit canonical files (`docs/01_philosophy`, `docs/02_system`) only when:
- the product rule itself changes,
- anchor/state/transition/copy logic changes,
- a contradiction must be resolved at the rule level.

## 3) When to update Gold sets
Update `docs/03_gold_set` when a canonical rule change affects acceptance references or central product architecture.
- Update **Core Gold** for central architecture shifts.
- Update **Extended Gold** for supporting but still gold-level updates.

## 4) When to create or update screen files
Use `docs/04_screens` for screen-spec evolution that implements existing canonical logic.
Do not encode new product truth only inside screen files.

## 5) When to use layers docs
Use `docs/05_layers` for implementation translation and layer binding details.
Preserve Main vs Side Swipe vs Backstage and planning (horizontal) vs execution (vertical).

## 6) Archive vs overwrite
- If a file is old but still informative, move/archive it.
- Do not overwrite historical prototypes without leaving traceability.

## 7) Handling prototype discoveries
If an old prototype suggests a better pattern:
1. log insight in `docs/07_prototypes_archive/LESSONS_FROM_OLD_PROTOTYPES.md`
2. validate against canonical rules
3. promote only through explicit canonical/gold updates
