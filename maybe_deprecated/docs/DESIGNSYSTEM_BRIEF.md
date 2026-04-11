# DESIGNSYSTEM_BRIEF


## Purpose
This brief defines the task for creating the first real design-system architecture for CatchIt.


This is **not** a request for polished mockups, brand exploration, or generic UI kit generation.


It is a request to build a **semantic, state-based, reusable design-system foundation** for CatchIt and potentially for other apps with similar “compression logic”.


The output must help turn CatchIt’s already-defined product logic into a coherent, buildable, extensible design system.


---


## 1. Product summary


CatchIt is **not** a classic transit app, timetable viewer, or routing shell.


CatchIt is a **decision-relief and reassurance system for public mobility**.


Its purpose is to compress mobility truth so that people:
- plan less
- doubt less
- check less
- understand more clearly when they must act
- understand more clearly when they do **not** need to act


CatchIt does not only calculate routes.
It aims to support **viable movement under real-life conditions**.


That means the system must support decisions shaped by:
- energy
- stress
- uncertainty
- walking speed
- child context
- waiting aversion
- need for calm
- need for fallback
- bad-day conditions
- low interpretation capacity


---


## 2. North star


> A good system does not force people to function better.  
> It functions better for people.


This must directly shape the design system.


The design system should therefore optimize for:
- cognitive load reduction
- action clarity
- trustworthiness
- semantic consistency
- low interpretation cost
- calm under stress
- viable fallback communication


---


## 3. Core product truths


The design system must reflect these truths:


- Planning horror is a service problem
- Load reduction matters more than raw data display
- Truth matters more than smoothness
- Reassurance must not come from concealment
- State logic matters more than process logic
- The same travel truth can be compressed differently across UX layers
- CatchIt is structurally separated into:
  - Plan Mode
  - Go Mode
  - Recovery Mode
- UX layers include:
  - Orientation
  - Comparison
  - Transition
  - Execution
  - Reassurance / Recovery


These are not cosmetic ideas.
They are part of the product’s semantic core.


---


## 4. Zen and Cathy


### Zen
Zen is the calm, state-adaptive main expression of the CatchIt core.


Important:
- Zen is **not** “the blue screen”
- blue is only one state expression within Zen
- Zen is a mode of semantic compression, not just a visual surface


### Cathy
Cathy is:
- main UI
- central USP
- primary humane translation layer


Cathy is not:
- the travel truth itself
- business logic
- a mascot detached from system meaning


Important:
- Cathy states are already defined
- Cathy states can be fully mapped onto Zen
- Cathy and Zen are two expression layers of the same state truth
- Cathy must not be reinvented as a generic assistant


Cathy must follow these rules:
- peripheral in stability
- closer in uncertainty
- large only in transition
- never dominant next to critical action content
- does not speak if visual state is enough
- does not emotionalize where precision matters more


---


## 5. Scope of this task


The task is to create a **V0.1 design-system architecture**.


This means:
- semantic first
- reusable first
- small and strict first
- practical first


The goal is not to produce:
- polished final UI
- final branding
- a moodboard
- a generic component library
- a giant enterprise design system
- a fully mature visual language


The goal is to produce:
- a strong system base
- consistency rules
- semantic foundations
- reusable structure
- low-chaos guidance for a non-designer


---


## 6. Explicit non-goals


Do **not** produce the following as primary output:
- polished mockups
- Dribbble-style concepts
- branding exploration
- visual trend boards
- generic Material-style systems
- generic iOS-style systems
- generic SaaS dashboard kits
- group-product expansion
- CatchIt2gather-first design work


CatchIt2gather is currently only an architectural boundary.
It must not dominate the design-system work.


---


## 7. Accessibility expectations


Accessibility is not a late QA layer.


The system must assume that users may be:
- stressed
- tired
- overloaded
- time-pressured
- uncertain
- in low-energy states
- in ND overload
- with children
- in fragile transition moments


Therefore the design system must optimize for:
- low interpretation cost
- clear hierarchy
- strong state legibility
- meaningful contrast
- sane touch target assumptions
- semantic redundancy
- reduced ambiguity
- calm motion
- limited overload per moment


Color must never be the sole carrier of critical meaning.


---


## 8. V0.1 design-system objective


The first version of the design system should make it possible for someone with:
- strong product intuition
- limited formal design training


to still build UI that feels:
- coherent
- semantically aligned
- consistent
- calm
- trustworthy
- reusable


This is one of the core success conditions.


---


## 9. Requested outputs


Produce exactly these outputs:


### 1. Design system north star
A short, sharp design-system north star aligned with CatchIt’s product philosophy.


### 2. 10–15 hard design-system principles
Principles must be product-specific, not generic.


### 3. State taxonomy
A clear model of relevant states and what they mean for UX.


### 4. Compression-mode / UX-layer model
A reusable model for Orientation, Comparison, Transition, Execution, and Reassurance / Recovery.


### 5. Semantic token architecture
Token families should go beyond color and include concepts like:
- state
- urgency
- confidence
- actionability
- fallback availability
- attention weight
- emphasis
- completion
- motion tone


### 6. Foundation proposal
A practical V0.1 proposal for:
- color
- typography
- spacing
- shape
- motion
- iconography


Important:
- use workable defaults if final brand choices are unknown
- do not assume final font choice exists yet


### 7. Initial component inventory
A strict V0.1 list of core components and what they depend on semantically.


### 8. Reusable patterns
Patterns for:
- planning
- comparison
- transition
- execution
- reassurance
- recovery
- wizard flows


### 9. Zen / Cathy coupling rules
Explicit rules for how Zen and Cathy express the same state model together without semantic conflict.


### 10. Documentation structure
A suggested structure for:
- Figma docs
- Markdown docs
- token naming
- future code organization


---


## 10. Constraints for generation


The design-system work must obey these constraints:


- start semantic, not visual
- prioritize consistency over beauty in V0.1
- keep scope strict and small
- do not introduce unnecessary complexity
- avoid generic transit UI assumptions
- do not let Cathy become branding theater
- do not let Zen become only an aesthetic surface
- do not optimize only for ideal users on good days
- explain why each recommendation fits CatchIt specifically
- ensure the system could be adapted to other apps with similar compression logic


---


## 11. Required mindset


Treat this as:
- a real product system
- a long-term foundation
- a semantic architecture problem
- a design-governance problem
- a consistency framework for future UI work


Do not treat this as:
- a styling exercise
- an inspiration board
- a one-off UI exploration
- a generic library generation task


---


## 12. Success criteria


The output is successful if it:
- feels like a true design-system architecture
- preserves CatchIt’s semantic core
- reduces future design chaos
- helps a non-designer work consistently
- remains reusable beyond one screen
- keeps Zen and Cathy aligned
- supports Plan / Go / Recovery separation
- makes state-driven design operational, not just philosophical


The output fails if it:
- drifts into generic transit UI
- becomes branding-first
- ignores semantic states
- collapses modes into one surface
- treats Cathy like a mascot
- treats Zen like a color theme
- produces lots of pretty UI without structural rigor


---


## 13. Source documents to read first


Before generating anything, read and use these source documents:


- `CATCHIT SSOT`
- `CATCHIT2GATHER SSOT`
- `NON_NEGOTIABLES.md`
- `EXPECTED_OUTPUTS.md`
- `CONSTRAINTS.md`
- `REFERENCES.md`


If any external reference conflicts with CatchIt’s own semantic/product truth, CatchIt wins.


---


## 14. Final instruction
Build a design-system architecture that helps CatchIt become:
- calm without hiding truth
- expressive without becoming decorative
- flexible without becoming inconsistent
- humane without becoming vague
- reusable without becoming generic
