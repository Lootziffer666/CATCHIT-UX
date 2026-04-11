# 07_Component_Inheritance

## Purpose
Defines component families, inheritance levels, and the rules that prevent component drift across CatchIt states and screens.

## Status
Normative system document for CatchIt.

## Scope
- component inheritance rules
- component families
- inheritance levels
- anchor component families
- support component families
- spatial component families
- recovery component families
- wizard component families
- trust/accessibility component families
- component drift failures
- inheritance review logic

## Depends on
- 01_CatchIt_Philosophy
- 02_State_System
- 03_Anchor_System
- 04_Anchor_Transitions_and_Persistence
- 05_Density_Spatial_Motion
- 06_Copy_Tone_and_Language

## Must not redefine
- state meanings
- anchor types
- motion classes
- copy tone system
- screen sequencing
- implementation APIs

## Working rule
This file owns family coherence. A new state should inherit a component before inventing one.

## Authoring rule
This file may clarify, extend, or operationalize earlier files within its scope.
It must not silently rename, replace, or contradict concepts owned by earlier normative files.
If a conflict appears, the earlier higher-priority file remains authoritative unless explicitly superseded.

---

## 1. Core Role of Component Inheritance

CatchIt is not a collection of unrelated screens.
It is a system of recurring truths expressed through recurring families.

That means components must not be reinvented screen by screen just because:
- a new state appears
- a new screen type is introduced
- a designer wants more visual novelty
- a support layer becomes available
- a screen gets denser or more spatial

Component inheritance exists to ensure:
- family continuity
- semantic continuity
- reduced drift
- lower implementation chaos
- recognizability across changing states

A new screen should usually inherit a component before it invents one.

---

## 2. Core Principle of Inheritance

A CatchIt component may evolve by state, but it must remain recognizably related to its family.

That means:
- the family identity must survive state change
- changes in density, urgency, motion, or support context do not justify species change
- support layers may evolve more freely than anchors, but still within family grammar
- a component should not become a new product pattern because the screen got more complex

### Rule
If a component solves the same role but looks or behaves like it belongs to another app family, inheritance has failed.

---

## 3. Family Before Instance

A CatchIt screen must not ask first:
- “What component looks good here?”

It must ask:
- “Which family already owns this role?”
- “Can this be expressed as direct inheritance?”
- “Can this be expressed as condensed inheritance?”
- “Can this be expressed as specialized inheritance?”
- “Do we truly need a new component?”

### Rule
No new component may be introduced as new if an inherited variant can do the job.

---

## 4. Main Component Families

CatchIt uses the following major component families:

1. Anchor Components
2. Support Components
3. Spatial Components
4. Recovery Components
5. Wizard Components
6. Trust / Accessibility Components

These are not just design categories.
They are semantic ownership categories.

---

## 5. Anchor Components

Anchor components carry the primary truth.

### Members
- Countdown Anchor
- Instruction Anchor
- Confirmation Anchor
- Question Anchor
- Failure Anchor

### Special status
Anchor components are semantically critical.
They are the least free to mutate.

### Core rule
Anchor components must remain family-legible across all states.
They must not be visually reinvented into unrelated hero forms.

---

## 6. Support Components

Support components reinforce the anchor without leading.

### Members
- Options Cluster
- Chain Context
- Direction / Stop / Delay residue
- Trust markers
- secondary context rows
- state-supporting chips or lines

### Freedom level
Support components may adapt more freely than anchors.

### Core rule
Support components may evolve, but must not invent a new visual grammar that breaks the screen family.

---

## 7. Spatial Components

Spatial components express orientation support.

### Members
- Map Reveal Surface
- Map Focus Shell
- Walk Path Layer
- Stop Marker Layer
- spatial context residue

### Special constraint
Spatial components must not silently become the product’s primary visual identity.

### Core rule
Spatial components must inherit the calmness and subordination principles of CatchIt.
They may become more important, but not become another app inside CatchIt.

---

## 8. Recovery Components

Recovery components carry reordering, recheck, and path adjustment logic.

### Members
- Simple Switch Card
- Recheck Panel
- Chain Adjustment Summary
- rebasing support panels

### Special constraint
Recovery components must inherit trust language and composure.
They must not drift into generic alert or error-center UI.

### Core rule
Recovery inherits system composure, not failure theatrics.

---

## 9. Wizard Components

Wizard components express guided understanding.

### Members
- Question Panel
- Answer Chips / Rows
- Chain Summary Card
- summary strips
- preference residue markers

### Special constraint
Wizard components must inherit low-friction everyday logic.
They must not become form-builder components.

### Core rule
Wizard inherits guided simplicity, not settings culture.

---

## 10. Trust / Accessibility Components

These components preserve public safety, large text support, reduced motion readability, and related trust behaviors.

### Members
- Public-safe labels
- neutral notification tiles
- large-text variants
- reduced-motion variants
- screen reader order helpers
- privacy-aware naming surfaces

### Special constraint
These are not optional theme extras.
They are functional system variants.

### Core rule
Accessibility variants are inherited functional variants, not aesthetic alternates.

---

## 11. Inheritance Levels

CatchIt allows four inheritance levels.

1. Direct Inheritance
2. Condensed Inheritance
3. Specialized Inheritance
4. New Component

These levels should be treated in that order.
Start with the least disruptive level first.

---

## 12. Direct Inheritance

## Definition
The component remains essentially the same family member, with minor state adaptation.

### Typical examples
- Countdown Anchor in Blue → Green
- Question Panel in one wizard step → another wizard step
- Options Cluster in calm state → slightly more relevant calm state

### Good use case
When the role is unchanged and the screen only needs state-level adjustment.

### Main risk
Underreacting to a real semantic shift.

### Rule
Use Direct Inheritance whenever the underlying role and interaction logic are unchanged.

---

## 13. Condensed Inheritance

## Definition
The component remains clearly the same family, but becomes denser or tighter.

### Typical examples
- Countdown Anchor in Main → Map Reveal
- Options Cluster in broader state → tighter state
- Chain Context in calm overview → compressed action context

### Good use case
When the family role stays the same, but the density changes.

### Main risk
Over-condensing until the component stops reading as the same family.

### Rule
Condensation may reduce space, but not erase family identity.

---

## 14. Specialized Inheritance

## Definition
The component remains related to its family, but gains a state-specific role or residue behavior.

### Typical examples
- Countdown Anchor → trace countdown in Orange
- Question residue inside summary
- Confirmation component widening into chain-adjusted structure
- Options Cluster reduced to contextual background in Orange

### Good use case
When semantic role is partially transformed, but family lineage remains crucial.

### Main risk
Specialization becoming species change.

### Rule
A specialized component must still be traceable back to its parent family at a glance.

---

## 15. New Component

## Definition
A genuinely new component is introduced because no existing family can carry the required role.

### This is rare
A new component should only be created when:
- no existing parent can carry the role
- the function is semantically new, not just visually new
- it does not violate existing anchor logic
- it can be clearly placed into a family
- it does not import foreign UI grammar

### Main risk
Design drift disguised as innovation.

### Rule
If a new component can only be justified by novelty, it is probably not justified.

---

## 16. Countdown Family Rules

The Countdown family is one of CatchIt’s strongest continuity anchors.

### Must remain
- recognizably the same family
- operational, not decorative
- numerically dominant
- semantically temporal
- not badge-like

### Allowed variants
- Blue: largest, calmest form
- Green: almost same, slightly tighter
- Yellow: same family, more tension
- Map Reveal: smaller, still clearly same family
- Orange: trace or secondary persistence
- Red: usually no longer primary countdown

### Must not become
- ornamental circle
- KPI widget
- tiny top-right badge
- alien shape family
- “cooler” redesign per state

### Rule
The countdown may scale, but it may not change species.

---

## 17. Instruction Family Rules

The Instruction family expresses required next action.
It is not a CTA family.

### Must remain
- short
- active
- primary when used
- semantically direct
- clearly not a button headline

### Allowed variants
- Orange / Act Now instruction
- Walk to Stop instruction
- Recheck-needed instruction
- post-recovery instruction

### Must not become
- CTA card
- hero button
- product conversion language
- turn-by-turn cliché
- multi-command overload

### Rule
Instruction is a truth component, not a conversion component.

---

## 18. Confirmation Family Rules

The Confirmation family stabilizes trust.

### Must remain
- calm
- concise
- non-celebratory
- ordering rather than rewarding

### Allowed variants
- Simple Switch confirmation
- Chain Adjusted confirmation
- Summary confirmation
- Quick Change confirmation

### Must not become
- success-state trope
- reward card
- “done!” moment
- optimistic hype
- branded emotional flourish

### Rule
Confirmation inherits calm closure, not reward energy.

---

## 19. Question Family Rules

The Question family is the core of wizard understanding.

### Must remain
- one main question
- everyday language
- low-friction structure
- guided understanding
- non-formular identity

### Allowed variants
- entry question
- chain question
- day condition question
- movement preference question

### Must not become
- survey page
- assessment panel
- settings form
- technical parameter screen
- multi-question default block

### Rule
A CatchIt question is always a focused act of understanding.

---

## 20. Options Cluster Family Rules

The Options Cluster family expresses the small set of viable, preference-shaped options.

### Must remain
- clearly not search results
- role-based, not result-ranked
- compact and scannable
- stable within the same family grammar

### Typical roles
- primary viable option
- reserve
- fallback

### Allowed variants
- Main state cluster
- unpacked comparison cluster
- adapting cluster with residue
- compressed background cluster in Act Now

### Must not become
- generic route list
- ranked results table
- card stack with mixed logic
- provider comparison list
- search output module

### Rule
Options may unpack, but they may not mutate into search results.

---

## 21. Chain Context Family Rules

Chain context expresses where the user is in a broader sequence.

### Must remain
- secondary to the main anchor
- compact
- readable
- chain-aware without timeline overload

### Allowed variants
- short “step x of y”
- next / after residue
- compact return-leg reminder
- visible chain summary context

### Must not become
- full timeline as default
- business process tracker
- task-manager UI
- unrelated metadata stack

### Rule
Chain context should support continuity, not replace the main truth.

---

## 22. Spatial Family Rules

Spatial components must remain support-first.

### Must remain
- integrated
- calm
- subordinate to state logic
- visually related to the rest of CatchIt
- semantically tied to orientation need

### Allowed variants
- lower reveal
- stronger focus
- path emphasis
- stop emphasis

### Must not become
- separate map app
- route explorer
- permanent hero background
- visual identity replacement
- noisy map chrome

### Rule
Spatial components inherit calm support, not cartographic dominance.

---

## 23. Recovery Family Rules

Recovery components exist to preserve trust under change.

### Must remain
- composed
- explicit
- compact
- non-theatrical
- semantically tied to viability and chain impact

### Allowed variants
- simple switch
- recheck needed
- chain adjusted
- rebase support

### Must not become
- error banner center
- alert storm
- technical exception UI
- failure dashboard
- overload of alternatives

### Rule
Recovery inherits composure, not panic.

---

## 24. Wizard Family Rules

Wizard components must remain part of the same product family as Main, Go, and Recovery.

### Must remain
- airy
- focused
- non-technical
- single-truth oriented
- low-friction

### Allowed variants
- question panels
- answer chips
- chain summary cards
- summary residue panels

### Must not become
- installer wizard
- settings labyrinth
- multipage form engine
- profile setup admin UI

### Rule
Wizard inherits everyday calm, not configuration culture.

---

## 25. Trust / Accessibility Family Rules

These variants protect:
- public-safe wording
- large text readability
- reduced motion meaning
- assistive clarity
- screen-reader order relevance

### Must remain
- functionally tied to the same families
- semantically equivalent
- recognizably part of CatchIt

### Must not become
- visually separate app theme
- “special mode” aesthetic detour
- decorative accessibility badge logic

### Rule
Accessibility and trust variants preserve system identity while adapting functionally.

---

## 26. Family Ownership Rule

Every component must belong clearly to one family.

This avoids:
- orphan components
- visual one-offs
- “special” cards with no lineage
- components that behave like one family and look like another

### Rule
If a component cannot be clearly assigned to a family, it is not yet system-ready.

---

## 27. Support Takeover Rule

Support components must never silently replace the anchor.

This includes:
- options becoming the real screen center
- map becoming the emotional hero
- chain context becoming a pseudo-timeline anchor
- recovery panels dominating outside recovery logic
- wizard answer groups leading more than the question

### Rule
Support layers may deepen truth, not replace it.

---

## 28. Component Drift Failures

### Failure 1 — Species Jump
A component solves the same role but now looks like it belongs to another app family.

### Failure 2 — Orphan Component
A new component appears without a clear parent family.

### Failure 3 — Decorative Mutation
A component remains present, but no longer carries its operational role.

### Failure 4 — Support Takeover
A support component becomes the de facto screen leader.

### Failure 5 — Recovery Foreign Body
Recovery components look like a technical alert system instead of CatchIt.

### Failure 6 — Wizard Form Drift
Wizard components mutate into form-builder or settings UI.

### Failure 7 — Accessibility Split Theme
Accessibility variants look like a different product rather than a functional adaptation.

---

## 29. Inheritance Review Questions

When reviewing a component, ask:

1. Which family owns this component?
2. Is this Direct, Condensed, Specialized, or truly New?
3. If new, why can no existing family carry the role?
4. Does the component still look and behave like its family?
5. Does it preserve the anchor hierarchy?
6. Does it preserve CatchIt’s calm, trust-centered identity?
7. Is it importing a foreign pattern from another product type?
8. Would this component still be recognizable if shown next to its parent family?

If these answers are unclear, the component is not yet inheritance-correct.

---

## 30. Compact Summary

CatchIt is not built from disconnected widgets.
It is built from semantically owned families.

### Core principles
- family before novelty
- inherit before inventing
- condensation before species change
- support may adapt, but not take over
- accessibility variants remain family members
- new components are rare and must be justified

This file is the main defense against:
- component sprawl
- random screen-specific UI
- map/product-family drift
- wizard form drift
- recovery error-center drift

## Final Rule
If a later document, mockup, or implementation shortcut breaks family lineage or invents unnecessary component species, this file remains authoritative.
