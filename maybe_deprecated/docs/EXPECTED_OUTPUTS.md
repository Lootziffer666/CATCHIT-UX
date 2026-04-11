# EXPECTED_OUTPUTS


## Purpose
This document defines the exact outputs expected from any design-system generation task for CatchIt.


The goal is not “nice UI”.
The goal is a reusable, semantic, state-based design-system architecture.


---


## Output 1 — Design system north star
Provide a short, sharp north star for the design system.


It should explain:
- what the system exists to do
- how it relates to CatchIt’s product philosophy
- what kind of UX quality it optimizes for


The north star must be product-logical, not visual.


---


## Output 2 — 10 to 15 hard design principles
Provide a compact but rigorous set of design-system principles.


These must not be generic design slogans.
They must emerge from CatchIt’s reality.


They should cover themes like:
- load reduction over data exposure
- one dominant action layer per moment
- truth before comfort
- semantic compression
- mode separation
- role-based alternatives
- bad-day resilience
- low interpretation cost
- state visibility
- non-surveillance safety


Each principle should include:
- a short title
- one clear explanation
- practical implications


---


## Output 3 — State taxonomy
Provide a state model for the system.


This must include:
- key user-facing product states
- how states differ semantically
- what states mean for the UX


Examples may include:
- stable
- attentive
- fragile
- recheck needed
- fallback ready
- act now
- wait
- observe
- completed


The taxonomy should distinguish:
- product states
- interaction states
- visual intensity or urgency implications


---


## Output 4 — Compression-mode / UX-layer model
Provide a reusable model for how the same truth can be compressed differently.


This should include layers such as:
- Orientation
- Comparison
- Transition
- Execution
- Reassurance / Recovery


For each layer explain:
- purpose
- user need
- typical information density
- action model
- what should remain hidden
- what should be dominant


This should be reusable beyond CatchIt as a system pattern.


---


## Output 5 — Semantic token architecture
Provide a semantic token model before any visual token system.


This should not start with colors only.


It should define token families such as:
- state
- urgency
- confidence
- actionability
- fallback availability
- attention weight
- motion tone
- emphasis level
- completion level


For each family:
- define purpose
- define possible values
- explain what UI decisions it influences


---


## Output 6 — Foundation proposal
Provide a V0.1 foundation layer for:
- color
- typography
- spacing
- shape
- motion
- iconography


Important:
- do not start with final brand polish
- do not assume final font choice is already known
- use a practical working setup
- make it buildable by a non-designer


For each foundation area, include:
- purpose
- why it matters for CatchIt
- recommended V0.1 structure
- what to avoid


---


## Output 7 — Initial component inventory
Provide a first inventory of components.


This must be a strict V0.1 list, not an explosion of UI parts.


Expected component families may include:
- Zen shell
- primary time block
- primary connection card
- alternative card
- transition object / step accordion
- recovery card
- reassurance element
- wizard prompt unit
- mode header / state header
- Cathy container or Cathy-expression surfaces
- low-noise action controls


For each component:
- define purpose
- define when it appears
- define what semantic tokens it depends on


---


## Output 8 — Reusable pattern set
Provide repeatable patterns for key CatchIt interactions.


At minimum:
- planning
- comparison
- execution
- recovery
- reassurance
- wizard flows


Each pattern should explain:
- what problem it solves
- what it should show
- what it should hide
- where it often goes wrong
- how it protects CatchIt’s semantic core


---


## Output 9 — Zen and Cathy coupling rules
Provide explicit rules for how Zen and Cathy work together.


This must assume:
- Cathy states already exist
- Zen can express the same state structure


The output should define:
- what Zen expresses
- what Cathy expresses
- where they overlap
- where one must yield to the other
- what must never be communicated by Cathy alone
- how to avoid semantic conflict or overstimulation


---


## Output 10 — Documentation structure for Figma and/or code
Provide a recommended documentation layout.


This should include suggested sections such as:
- principles
- semantic tokens
- foundations
- components
- patterns
- mode rules
- state mapping
- Cathy mapping
- accessibility rules
- open questions / future expansion


The result should be usable as:
- Figma documentation structure
- Markdown docs
- future code token structure


---


## Output quality requirements
All outputs must be:
- semantic first
- reusable
- strict enough for non-designers
- explainable
- small enough to start with
- extensible later


---


## Outputs that are explicitly not wanted
Do not provide as primary output:
- final polished mockups
- branding-first moodboards
- generic UI kits
- platform-specific skinning
- group-product expansion
- random inspirational references without structure


---


## Success criteria
A successful output should:
- feel like a real design-system architecture
- preserve CatchIt’s product truth
- reduce the chance of design-by-feeling chaos
- make consistent design possible even for a non-designer
- be adaptable to other apps with similar compression logic
