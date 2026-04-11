# 10_Implementation_Bridge

## Purpose
Defines the bridge from CatchIt’s product/system logic into Figma structures, screen states, component props, implementation architecture, and UI rendering.

## Status
Normative system document for CatchIt.

## Scope
- SSOT → product state → screen state → component props → UI
- product state vs screen state
- implementation bridge principles
- feature/module alignment
- Figma bridge principles
- Compose translation principles
- component props logic
- Cathy as layer, not truth
- provider response must not directly define UI
- implementation constraints that must preserve system semantics

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

## Must not redefine
- product philosophy
- state semantics
- anchor rules
- review logic
- screen system itself

## Working rule
This file owns translation into buildable structure, not product reinvention. It must preserve system semantics while making implementation practical.

## Authoring rule
This file may clarify, extend, or operationalize earlier files within its scope.
It must not silently rename, replace, or contradict concepts owned by earlier normative files.
If a conflict appears, the earlier higher-priority file remains authoritative unless explicitly superseded.

---

## 1. Core Role of the Implementation Bridge

The implementation bridge exists because CatchIt’s product truth is not identical to:
- provider responses
- domain data shape
- screen count
- component count
- or navigation structure

CatchIt is a system where:
- product meaning is derived
- truth is condensed
- state is interpretive, not raw
- screens are roles, not merely routes
- the same underlying reality may appear at different densities

The bridge exists to ensure that:
- implementation follows system meaning
- design abstractions remain buildable
- technical convenience does not silently redefine product truth
- visual structure remains anchored in product logic

### Rule
Implementation is not allowed to bypass product semantics just because raw data is already available.

---

## 2. Core Translation Formula

CatchIt should be translated in this order:

**SSOT / product truth → Product State → Screen State → Component Props → UI Rendering**

Not:

**provider response → UI**

This is the most important technical rule in the whole system.

### Why this matters
If implementation renders raw domain or provider data directly:
- the UI drifts toward transit-tool logic
- state semantics become weaker
- recovery becomes technical instead of experiential
- chain awareness becomes incidental
- trust logic becomes inconsistent
- different surfaces start speaking different product languages

### Rule
No visible screen should be treated as a direct visualization of provider shape.

---

## 3. Layer Model

CatchIt should be implemented as a layered translation model.

### Layer A — Domain / Travel Truth
This layer represents raw or near-raw product-relevant reality.

Typical content:
- journeys
- legs
- timing
- delays
- provider confidence
- active plan
- alerts
- raw chain structure
- optional semantic labels

This layer is necessary, but not user-facing by default.

---

### Layer B — Product State
This layer interprets domain truth into CatchIt’s semantic model.

Typical content:
- Idle
- Ready
- Adapting
- Act Now
- Failed
- Recheck needed
- Simple Switch possible
- Chain adjusted
- Completed
- No active chain

This is the first true CatchIt-specific translation layer.

### Rule
Product state owns meaning, not layout.

---

### Layer C — Screen State
This layer maps product state into concrete screen roles.

Typical content:
- Main / Blue / Idle
- Main / Green / Ready
- Main / Yellow / Adapting
- Main / Orange / Act Now
- Main / Red / Failed
- Map Reveal
- Map Focus
- Walk to Stop
- In Vehicle
- Recovery / Simple Switch
- Recovery / Recheck nötig
- Recovery / Kette angepasst
- Wizard steps
- Chain Summary
- Quick Change

### Rule
Screen state owns screen role, anchor expectation, and density expectation.

---

### Layer D — Component Props
This layer translates screen state into reusable component-ready data.

Typical content:
- Countdown props
- Instruction props
- Confirmation props
- Question props
- Failure props
- Options cluster props
- Chain context props
- Spatial assist props
- Recovery card props
- Wizard answer props

### Rule
Component props should already be semantically shaped enough that components do not need to “figure out” the product meaning themselves.

---

### Layer E — UI Rendering
This is where actual implementation happens:
- Figma layout instances
- Compose UI
- previews
- motion bindings
- accessibility semantics
- input/gesture wiring

### Rule
Rendering should express already-decided meaning, not invent it.

---

## 4. Product State vs Screen State

Product state and screen state must not be collapsed into one concept.

### Product State answers
- what kind of situation is this?
- who carries the burden?
- is this viable?
- is CatchIt adapting, instructing, or failing?
- what kind of trust behavior is justified?

### Screen State answers
- which surface role expresses this now?
- which anchor should lead?
- what density is appropriate?
- is spatial support visible?
- whether the user is in planning, execution, or recovery
- whether a transition should stay within one family or hand over to another

### Example
A product state may be:
- Adapting

But the screen state may be:
- Main / Yellow / Adapting
or
- Recovery / Simple Switch
depending on whether CatchIt is still reacting in place or already resolved to a confirmed alternative.

### Rule
Do not use one enum or sealed type to flatten both meaning and screen role unless the mapping is extremely small and stable.

---

## 5. Bridge to Figma

Figma should not be treated as just a picture of components.
It should mirror the same translation layers conceptually.

### In Figma, the bridge should look like:
- principles page for philosophy and rules
- state-focused screen pages
- component pages organized by family
- token pages organized by semantic ownership
- variant properties organized by product/state meaning, not purely visual style

### Figma should encode
- state logic
- anchor logic
- family inheritance
- density variants
- public-safe variants
- large-text and reduced-motion variants
- prototype transitions that reflect anchor handover

### Rule
Figma structure should help implementation preserve system logic rather than requiring it to rediscover it.

---

## 6. Bridge to Compose

Compose should not directly mirror design shapes without product interpretation.

Compose should receive:
- meaningful UI models
- explicit state variants
- anchor-aware props
- accessibility-aware variants
- motion classes already semantically justified

### Compose should not have to decide
- which state color means what
- whether a countdown is primary or decorative
- whether yellow is a warning
- whether a recovery card behaves like an error banner
- whether the map is support or hero

Those questions must already be resolved earlier in the chain.

### Rule
Compose renders decisions; it should not invent CatchIt semantics at the last mile.

---

## 7. Feature / Module Alignment

The exact repository structure may evolve, but the following responsibility split is strongly recommended.

### `:app`
Owns:
- app wiring
- entry activity
- navigation graph
- startup routing
- environment setup
- global toggles

It should not own product meaning.

---

### `:core:model`
Owns:
- domain entities
- core contracts
- chain models
- alert/confidence contracts
- product-state-level primitives where truly shared

It should not own screen composition.

---

### `:core:ui`
Owns:
- theme
- tokens
- spacing/shape/typography wrappers
- semantic primitives
- reusable component building blocks
- motion and accessibility helpers

It should not own screen-specific business decisions.

---

### `:feature:home`
Owns:
- Main state family
- spatial assist family
- some Go family rendering if tied tightly to the main state experience
- home state mapping
- main-to-map transitions

---

### `:feature:wizard`
Owns:
- Wizard / Einstieg
- Wizard / Kettenfrage
- Wizard / Bewegungsstil / Tageslage
- Chain Summary
- pre-Quick Change setup logic where relevant

---

### `:feature:recovery`
May own:
- Recovery / Simple Switch
- Recovery / Recheck nötig
- Recovery / Kette angepasst
- some rebasing flows

If not separated as its own feature, its internal boundaries must still remain explicit.

---

### `:feature:cathy`
Owns:
- Cathy as assistive layer
- visual framing
- optional regulated reassurance behaviors

It must not own travel truth or the screen’s semantic leadership.

---

### `:data:*`
Owns:
- provider adapters
- response mapping
- provenance
- reconciliation
- raw transport/route/service inputs

It must not leak raw provider structure directly into the UI.

---

## 8. Cathy as Layer, Not Truth

Cathy must stay downstream from state meaning.

Cathy may:
- reinforce mood or trust
- frame transitions
- appear closer or further
- support reassurance
- make state changes feel more humane

Cathy must not:
- own primary truth
- replace state semantics
- override anchor choice
- turn recovery into emotional theater
- become the screen’s meaning source
- silently encode product logic that is missing elsewhere

### Rule
The product must remain fully understandable with Cathy absent.

---

## 9. Provider Responses Must Not Directly Define UI

A provider response may contain:
- times
- route geometry
- delays
- transfers
- cancellations
- confidence hints

But it does not directly contain:
- whether CatchIt is in Yellow or Orange
- whether the screen should be Main or Recovery
- whether the user should be reassured or instructed
- whether the path has functionally failed in chain terms
- how much information should be visible
- what anchor should lead

Those are product-layer interpretations.

### Rule
Providers provide ingredients.
CatchIt defines the dish.

---

## 10. Product State Mapping Principles

The mapping from domain truth to product state should be:
- centralized enough to stay coherent
- explainable
- testable
- reviewable against the state system
- independent from screen styling choices

### Mapping should consider
- viability
- time threshold
- need for action
- system adaptability
- chain impact
- confidence
- public-safe wording implications
- local vs chain-level disruption

### Rule
A change in provider data should not directly produce a new screen.
It should first produce a new interpreted product state.

---

## 11. Screen State Mapping Principles

Screen state mapping should answer:
- which screen family should express this?
- what anchor should lead?
- what density is appropriate?
- whether spatial support is justified
- whether the user is in planning, execution, or recovery
- whether a transition should stay within one family or hand over to another

### Rule
Screen state mapping must preserve the system’s distinction between:
- main state
- spatial assist
- go
- recovery
- planning / chain

---

## 12. Component Props Principles

Component props should be semantic, not raw-data-heavy.

### Good props
- `AnchorUiModel.Countdown(label, value, persistence)`
- `OptionsClusterUiModel(primary, reserve, fallback)`
- `ChainContextUiModel(step, next, after)`
- `SpatialAssistUiModel(mode, path, stop)`
- `RecoveryUiModel.SimpleSwitch(...)`

### Weak props
- raw provider blobs
- untyped string maps
- “card style” flags with no semantic meaning
- screen-local hacks that bypass the product model

### Rule
Props should describe what the component must express, not how it happens to be styled in one screen.

---

## 13. Accessibility Bridge

Accessibility must enter before rendering, not after.

That means:
- large text variants should be modeled as real layout/priority consequences
- reduced motion should alter motion class resolution, not just disable all movement blindly
- public-safe labeling should be available in the semantic model, not as last-second string replacement
- screen reader priority should follow anchor logic

### Rule
Accessibility variants are system variants, not patch layers.

---

## 14. Public-Safe / Privacy Bridge

Public-safe behavior should not be bolted on later.

The bridge should support:
- neutral default labels
- optional user-defined private meaning
- lockscreen-safe summaries
- voice-safe phrasing
- alternative display modes for exposed contexts

### Rule
Privacy-safe language must be possible from the semantic layer upward, not improvised in the view layer.

---

## 15. Motion Bridge

Motion should be wired from semantic intent, not generic animation habit.

The bridge should support:
- tightening
- reveal
- handover
- compression
- settlement

These motion classes should be triggered by:
- state transitions
- anchor handovers
- spatial reveal conditions
- re-stabilization logic

### Rule
Animation specs should consume semantic transition types, not invent them.

---

## 16. Figma-to-Implementation Alignment

Each major Figma construct should map cleanly to implementation concepts.

### Recommended alignment
- Figma state frame → screen state
- Figma component family → component family in code
- variant property → typed semantic prop or enum
- semantic token → design token / theme token
- prototype motion → transition class or motion token
- annotation → mapper or screen contract note

### Rule
Do not let Figma become a second source of truth with different meanings than the code model.

---

## 17. Review Bridge

Implementation must stay reviewable against the same system files.

That means implementation artifacts should still allow reviewers to ask:
- what state is this?
- what anchor leads?
- what transition occurred?
- what persistence class is active?
- what family is this component in?
- why is this screen dense or sparse?
- why is the map visible?

### Rule
A technically correct implementation is still wrong if it cannot be explained in CatchIt’s system language.

---

## 18. Common Bridge Failures

### Failure 1 — Direct provider rendering
Raw data becomes the UI without product interpretation.

### Failure 2 — State flattening
Product state and screen state are merged too early and lose nuance.

### Failure 3 — Visual-only props
Components are driven by cosmetic variants instead of semantic props.

### Failure 4 — Recovery as exception
Recovery is treated as an error case rather than a product family.

### Failure 5 — Cathy leakage
Cathy begins to carry semantic meaning that should belong to the state system.

### Failure 6 — Accessibility as patch
Large text, reduced motion, or public-safe variants are added too late and break family coherence.

### Failure 7 — Figma/code semantic mismatch
Design and implementation use the same words for different meanings.

---

## 19. Implementation Review Questions

When reviewing the bridge, ask:

1. What is raw truth here?
2. What is interpreted product state?
3. What is screen state?
4. What props does the UI actually receive?
5. Is the component reading semantic props or raw data?
6. Could the UI still be explained entirely in CatchIt language?
7. Is privacy/public-safe logic possible before rendering?
8. Is Cathy downstream from meaning?
9. Would a provider change force a UI meaning change, or first a product-state remap?

If these questions are unclear, the bridge is not yet system-correct.

---

## 20. Compact Summary

The implementation bridge exists so CatchIt remains CatchIt when it becomes buildable.

### Core translation
**SSOT / product truth → Product State → Screen State → Component Props → UI**

### Core principles
- raw data is not product meaning
- product state owns semantic interpretation
- screen state owns role and density
- component props own semantic expression needs
- rendering expresses already-decided meaning
- Cathy stays a layer, not a truth source
- providers never directly define the user-facing screen

This file is the main defense against:
- provider-driven UI drift
- implementation shortcuts that erase semantics
- design/code misalignment
- and technical convenience replacing product logic

## Final Rule
If a later implementation shortcut bypasses product meaning in favor of raw technical structure, this file remains authoritative.
