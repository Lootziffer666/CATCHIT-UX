# NON_NEGOTIABLES


## Purpose
This document defines the hard non-negotiables for any design-system or UX-system work on CatchIt.
These are not suggestions. They are constraints.


---


## 1. Product identity
CatchIt is **not** a classic transit app, timetable viewer, or routing shell.


CatchIt is a **decision-relief and reassurance system for public mobility**.


Its purpose is to compress mobility truth so that people:
- plan less
- doubt less
- check less
- and understand more clearly when they must act and when they do not need to act


---


## 2. Core philosophy
The system must follow this north star:


> A good system does not force people to function better.
> It functions better for people.


This means:
- planning horror is a service problem
- cognitive load reduction is more important than raw data display
- truth matters more than smoothness
- reassurance must never come from concealment or false calm


---


## 3. CatchIt is state-based, not data-first
The design system must not be built as a generic UI kit for transit data.


It must reflect that:
- state logic is more important than process logic
- the same travel truth can be compressed differently across UX layers
- design is not a skin on top of data
- semantic meaning comes before visual styling


---


## 4. Zen terminology
Do not refer to the main calm screen as “the blue screen”.


The correct term is:


**Zen**


Zen is the calm, state-adaptive main expression of the CatchIt core.


Blue is only one state expression within Zen, not the identity of the screen itself.


---


## 5. Cathy is already structurally defined
Do not behave as if Cathy still needs a completely new state system.


The Cathy system states are already defined.


These states can be fully mapped onto Zen.


This means:
- Cathy and Zen are not competing directions
- Cathy and Zen are two expression layers of the same state truth
- Cathy must not be treated as optional decoration
- Cathy must not replace business logic or travel truth


---


## 6. Cathy constraints
Cathy is:
- main UI
- a central USP
- the most important humane translation layer


Cathy is not:
- the travel truth itself
- the business logic
- a free-floating mascot
- a branding toy


Cathy must follow these rules:
- peripheral in stability
- closer in uncertainty
- large only in transition
- never dominant next to critical action content
- should not speak if visual state already communicates enough
- should not emotionalize where precision matters more


---


## 7. Mode separation is mandatory
The product must stay structurally separated into:


- Plan Mode
- Go Mode
- Recovery Mode


These are not stylistic modes.
They are different forms of load reduction.


Do not collapse them into one generic all-purpose screen.


---


## 8. UX layers are part of the product truth
The design system must support multiple compression layers of the same truth, including:


- Orientation
- Comparison
- Transition
- Execution
- Reassurance / Recovery


These are not optional presentation variants.
They are core to the product logic.


---


## 9. Wizard instead of parameter cemetery
The product must not begin with technical preferences, settings complexity, or route-construction UI.


Users should express:
- intentions
- daily context
- movement style
- micro-needs


The system should derive:
- start time
- stop choice
- route
- buffer
- transfers
- return logic
- fallback


The wizard must not feel like profile configuration.


---


## 10. Users express intentions, not routes
The design system must support a product where users express what is happening and what they need, not how they want to manually route themselves.


This includes the chain logic question:


**“Do you need to go anywhere afterwards?”**


This question is a core product differentiator and must be treated seriously.


---


## 11. Active-Move principle is mandatory
Waiting is not neutral.


The system must support the principle that:
- meaningful walking can be better than meaningless waiting
- stability can be better than theoretical speed
- simplicity can be better than aggressive optimization
- real-life movement quality matters, not just ETA


Do not design around ETA alone.


---


## 12. Alternatives must have roles
Alternatives are not “more options”.


They must be semantically differentiated, for example as:
- best choice
- calm reserve
- fallback when disruption happens


Do not present alternatives as flat equivalent cards.


---


## 13. Safety must not become surveillance
CatchIt must not drift into:
- tracking-first logic
- surveillance UX
- safety theater
- alarm inflation
- hidden control patterns


Safety must stay:
- state-based
- trust-based
- escalation-aware
- fallback-ready
- low-stigma
- minimally invasive


---


## 14. No generic design-system clone
Do not output:
- a generic Material clone
- a generic iOS/HIG clone
- a generic SaaS dashboard system
- a generic mobility UI kit


The system must emerge from CatchIt’s semantic structure, not from a premade UI template.


---


## 15. CatchIt2gather is not the active focus
CatchIt2gather is currently only an architectural boundary.


It is:
- defined
- partially prepared
- not the active product focus


The design system must not drift into group UX, social flows, shared live maps, invite/join mechanics, or multi-person coordination as a primary design problem.


Only one active boundary matters:


**The core must remain able to support future multi-person logic later.**


---


## 16. Accessibility is not a late QA layer
Accessibility must be integrated from the beginning.


This includes:
- low interpretation cost
- strong hierarchy
- clear states
- touch target sanity
- color is never the only meaning carrier
- low overload behavior
- support for bad days, stress, ND overload, and low-energy situations


---


## 17. Design system scope for V0.1
The first useful version must stay small and strict.


Do not attempt to generate:
- a complete mature enterprise system
- dozens of polished components
- a final brand language


The first goal is:
- semantic clarity
- strong foundations
- reusable structure
- consistency for non-designers


---


## 18. Final quality check
Any output that violates one of these questions is likely wrong:


- Does this reduce cognitive load, or just look cleaner?
- Does this preserve truth, or just soften it?
- Does this clarify action, or add interpretation?
- Does this fit Plan / Go / Recovery separation?
- Does this keep Zen and Cathy aligned?
- Does this feel like CatchIt, or like a generic transit redesign?
