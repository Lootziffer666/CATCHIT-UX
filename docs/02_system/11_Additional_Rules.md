# 11_Additional_Rules

## Purpose
Defines additional binding system rules that support the master prompt without overloading the system field.

## Status
Normative system document for CatchIt.

## Scope
- file responsibility rule
- state integrity rule
- anchor integrity rule
- transition and persistence rule
- density / spatial / motion rule
- copy rule
- component family rule
- screen role rule
- implementation awareness rule

## Depends on
- 01_CatchIt_Philosophy
- 02_State_System
- 03_Anchor_System
- 04_Anchor_Transitions_and_Persistence
- 05_Density_Spatial_Motion
- 06_Copy_Tone_and_Language
- 07_Component_Inheritance
- 08_Screen_System_and_Flows
- 09_Review_and_Debug_Framework
- 10_Implementation_Bridge

## Must not redefine
- core mission
- response modes
- debug priority
- canonical file ownership

## File Responsibility Rule
Do not let one file silently redefine another file’s ownership.

Specifically:
- do not redefine state meaning outside `02_State_System.md`
- do not redefine anchor types outside `03_Anchor_System.md`
- do not redefine transition or persistence rules outside `04_Anchor_Transitions_and_Persistence.md`
- do not redefine density, spatial logic, or motion classes outside `05_Density_Spatial_Motion.md`
- do not redefine copy rules outside `06_Copy_Tone_and_Language.md`
- do not redefine component family logic outside `07_Component_Inheritance.md`
- do not redefine canonical screen roles outside `08_Screen_System_and_Flows.md`
- do not redefine review logic outside `09_Review_and_Debug_Framework.md`
- do not redefine implementation translation logic outside `10_Implementation_Bridge.md`

## State Integrity Rule
Always preserve the five-state model from `02_State_System.md`:
- Blue / Idle
- Green / Ready
- Yellow / Adapting
- Orange / Act Now
- Red / Failed

Never collapse them into:
- stable
- fragile
- critical

Never treat:
- Yellow as warning
- Orange as failure
- Red as stronger urgency

## Anchor Integrity Rule
Every screen must have exactly one primary anchor, as defined in `03_Anchor_System.md`.

Allowed anchor types:
- Countdown Anchor
- Instruction Anchor
- Confirmation Anchor
- Question Anchor
- Failure Anchor

Support layers may reinforce the anchor, but must not replace it.

## Transition and Persistence Rule
Treat anchor change as semantic handover, not screen replacement.

Always preserve:
- justified leadership change
- continuity through invariants
- outgoing truth not disappearing too early
- persistence supporting the new anchor rather than competing with it

Loss of leadership must not equal loss of orientation.

## Density / Spatial / Motion Rule
Use `05_Density_Spatial_Motion.md` as binding behavior logic.

Always preserve:
- urgency through focus, not clutter
- map as support, not hero
- lower reveal over map takeover
- motion clarifying state, not personality
- reduced motion preserving meaning

## Copy Rule
Use `06_Copy_Tone_and_Language.md` as the source of truth for wording.

Always preserve:
- everyday language over transit jargon
- trust over hype
- clarity over cleverness
- public-safe wording where relevant
- short action language in Orange
- non-alarmist language in Yellow
- explicit, non-theatrical language in Red

## Component Family Rule
Use `07_Component_Inheritance.md` to keep family coherence.

Always:
- inherit before inventing
- prefer direct, condensed, or specialized inheritance before creating a new component
- keep anchor families stable
- keep support layers subordinate
- preserve calm support in spatial components
- prevent wizard, recovery, or map components from importing foreign UI grammars

## Screen Role Rule
Use `08_Screen_System_and_Flows.md` as the canonical source for screen roles.

Do not invent new screens casually.
First determine whether the request belongs to:
- Main State Family
- Spatial Assist Family
- Go Family
- Recovery Family
- Planning / Chain Family
- Trust / Accessibility overlay

## Implementation Awareness Rule
When requests touch implementation, architecture, Figma structure, state models, or UI contracts, follow `10_Implementation_Bridge.md`.

Always preserve:
- SSOT / product truth ? Product State ? Screen State ? Component Props ? UI
- Cathy as layer, not truth
- no direct provider-response-to-UI logic
- no raw technical structure replacing product semantics

## Additional Output Tightening Rules

For canonical state-variant answers, keep adaptation residue as small as possible.

- Default: use one residue line only
- Use a second residue line only if the state would otherwise become semantically unclear
- Do not let residue become a mini status panel under the anchor

For option labels, prefer implementation-near interface labels over conceptual or advisory phrasing.

Prefer labels such as:
- Weiter wie geplant
- Spätere Verbindung
- Zu Fuß

Avoid labels such as:
- Lieber gehen
- Ruhiger Umstieg
- Lieber gehen statt warten

Do not let option labels sound like:
- recommendations
- coaching
- strategy narration
- product explanation

For lower support areas, do not invent extra modules by default.

- No bottom support block unless semantically necessary
- Only include compact chain or trust residue if it strengthens the current state
- Do not add a bottom area just to make the screen feel more complete
- Avoid dashboard-style lower sections in Main-state screens

For Main / Yellow / Adapting:
- keep temporal truth explicit in the anchor
- prefer labels such as “Spätestens los in” over softer temporal phrasing such as “Noch 11 Min”
- default to one adaptation residue line only
- allow a second residue line only if state meaning would otherwise become ambiguous
- do not create a bottom support block by default
- only include lower chain/trust residue if it adds necessary coherence
- keep support residues implementation-near and concrete
- avoid conceptual phrasing such as “Alternative bleibt passend”

For Recovery / Simple Switch:
- the old disruption must remain residue only, never leadership
- the new viable continuation must lead clearly through Confirmation Anchor
- prefer explicit continuation wording over vague adjustment wording
- prefer “Du nimmst jetzt den Bus um 08:24” over more generic lines such as “Ich habe es angepasst” when possible
- keep recovery to one compact summary surface only
- do not let recovery expand into route comparison, card stack, or result-browser behavior
- continuation affordances must remain visually subordinate to the confirmation anchor
- avoid secondary actions such as “Anzeigen” unless the user explicitly needs deeper inspection

For both Yellow and Recovery:
- prefer one concrete support reason over multiple abstract support categories
- avoid filler support areas added only for visual completeness
- if a lower section does not sharpen coherence, remove it

## Secondary Action and Residue Tightening Patch

For Main-state screens:
- do not create more than one dedicated support-residue zone by default
- if adaptation residue exists directly under the anchor, do not add a second separate support block unless it is semantically necessary
- if a lower chain or trust line is included, it must be the only lower support element
- do not add support areas just to make the composition feel richer

For Yellow / Adapting:
- prefer one adaptation residue directly under the countdown
- allow one additional compact change residue only if it adds new necessary information
- do not stack multiple small status lines that together behave like a mini alert panel

For Recovery / Simple Switch:
- prefer explicit old-to-new timing residue such as “statt 08:19” or “Bus verspätet”
- avoid vague carry-over phrasing such as “Vorher 6 Min”
- keep the old disruption visible only as causal residue, never as a parallel focal element

For secondary actions:
- secondary actions must remain optional support, never semantic leadership
- default to no secondary action unless the screen truly needs one
- if a secondary action is needed, prefer neutral continuation wording such as:
  - Weiter
  - Weg zeigen
- avoid vague inspection or browser-like actions such as:
  - Anzeigen
  - Details
  - Mehr sehen
  unless the user explicitly needs deeper inspection

For all state-variant answers:
- prefer one clear anchor, one residue zone, and one optional lower continuity line
- if more than that is proposed, justify each added element semantically