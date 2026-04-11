# 04_screens — Grouped Screen Specs (Supporting, Non-Gold)

## What this folder is
`docs/04_screens/` contains **grouped screen-spec packs** for operational UI work: screen intent, required elements, flow-level behavior, and build/order guidance.

Use this folder to implement and review screen behavior that is already grounded in canonical CatchIt rules.

## Authority
- **Supporting authority only.**
- Files here **apply** canonical rules; they do not define canonical product logic.
- If a `04_screens` file conflicts with canonical or gold references, canonical/gold sources win.

## What belongs here
- Current multi-screen spec packs used to build or validate UI screens.
- Screen-level guidance that operationalizes Main / Side Swipe / Backstage and planning / execution boundaries.
- Practical implementation-facing screen bundles (especially the `ScreenSpec_01..05` family).

## What does *not* belong here
- New product principles, state logic, or system rules (belongs in `01_philosophy` + `02_system`).
- Gold-set authority files (belongs in `03_gold_set` and any future `layer_2_gold_set` area).
- Raw prototype exports or historical HTML/ZIP artifacts (belongs in `07_prototypes_archive`).
- Brainstorming scratch notes or unresolved thought dumps (belongs in `08_working_notes`).

## How this differs from nearby folders
- **vs `03_gold_set/`**: `03_gold_set` is gold-level reference authority (Core + Extended); `04_screens` is implementation-oriented grouped screen guidance.
- **vs `layer_2_gold_set`**: layer-2 gold is gold authority for later-stage gold material; `04_screens` is never gold authority by default.
- **vs `07_prototypes_archive/`**: archive preserves historical prototypes for lessons and traceability; `04_screens` is active supporting documentation.
- **vs `08_working_notes/`**: working notes are exploratory and non-normative; `04_screens` should be structured and execution-useful.

## Current file classification
- `ScreenSpec_01_Grundsystem_und_Setup.md` — primary grouped screen pack (active supporting).
- `ScreenSpec_02_Core_Screens.md` — primary grouped screen pack (active supporting).
- `ScreenSpec_03_Planning_Chain_QuickChange.md` — primary grouped screen pack (active supporting).
- `ScreenSpec_04_Components_Annotations_Prototype.md` — supporting bridge pack (screens ↔ components/prototype behavior).
- `ScreenSpec_05_Mockup_Liste_und_Baureihenfolge.md` — supporting execution/order pack.
- `Screen_Reference_Home_Screen_Design.md` — older external-reference artifact; useful for context, **not** canonical and not gold.

## Usage guardrail
Before changing any file here, verify alignment with:
1. `docs/01_philosophy/`
2. `docs/02_system/`
3. `docs/03_gold_set/` + `docs/layer_2_gold_set/` (Core before Extended inside `03_gold_set`)

Do not use `04_screens` to silently redefine planning vs execution, Main vs Side Swipe vs Backstage, or Core Gold vs Extended Gold.
