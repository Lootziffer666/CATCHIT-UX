# 05_Density_Spatial_Motion

## Purpose
Defines how visual density, spatial assistance, and motion behave across CatchIt states.

## Status
Normative system document for CatchIt.

## Scope
- visual density rules
- density by state
- map and spatial logic
- lower reveal principle
- map as support, not hero
- motion discipline
- motion classes
- motion intensity levels
- reduced motion rules
- cross-modal interaction between density, spatial assistance, and motion

## Depends on
- 01_CatchIt_Philosophy
- 02_State_System
- 03_Anchor_System
- 04_Anchor_Transitions_and_Persistence

## Must not redefine
- state semantics
- anchor ownership
- copy tone rules
- component family rules
- screen set definitions

## Working rule
This file owns how CatchIt escalates visually and behaviorally without drifting into dashboard, map-first, or animation-heavy UI habits.

## Authoring rule
This file may clarify, extend, or operationalize earlier files within its scope.
It must not silently rename, replace, or contradict concepts owned by earlier normative files.
If a conflict appears, the earlier higher-priority file remains authoritative unless explicitly superseded.

---

## 1. Core Role of Density, Spatial Logic, and Motion

CatchIt must not communicate urgency, trust, or state change through arbitrary UI growth.

Instead, it uses:
- density to control how much is shown
- spatial logic to control when orientation becomes necessary
- motion to clarify semantic change

These three systems are tightly linked.

A correct CatchIt screen should not merely look nice.
It should:
- reduce ambiguity
- preserve trust
- tighten focus when needed
- reveal space only when useful
- and move only when meaning changes

---

## 2. Core Principle of Density

CatchIt escalates through focus, not interface inventory.

That means urgency must be expressed through:
- tighter hierarchy
- stronger semantic focus
- reduced optionality
- more decisive leadership
- clearer action thresholds

Urgency must not be expressed through:
- more cards
- more labels
- more modules
- more interface mass
- generic dashboard expansion
- “more urgent = more clutter”

### Rule
If a higher-urgency screen is mainly busier rather than clearer, density drift has occurred.

---

## 3. Core Principle of Spatial Assistance

Space is not always the main truth.

CatchIt uses spatial assistance only when the user’s cognitive need truly becomes spatial.

Maps and spatial support should answer:
- where do I need to go right now?
- what is the footpath or stop relationship?
- how does the spatial situation support the current action?

Maps should not answer by default:
- everything
- route browser logic
- permanent background context
- map-first navigation identity

### Rule
The map is support, not hero.

---

## 4. Core Principle of Motion

Motion exists to make state change legible.

It must:
- clarify state shifts
- support anchor handover
- support reveal and compression
- maintain continuity
- reinforce semantic hierarchy

It must not:
- perform excitement
- simulate urgency through agitation
- replace semantic clarity with “feel”
- create novelty where continuity is required

### Rule
Motion must clarify state, not perform personality.

---

## 5. Density by State

## 5.1 Blue / Idle

### Density level
Very low

### Meaning
The situation is calm and not yet urgent.

### Density consequences
- maximum air
- minimal support detail
- no map by default
- no recovery emphasis
- no comparison overload
- no visual pressure

### Correct feeling
Prepared, calm, clear, low-pressure

### Wrong feeling
Empty, unfinished, generic start screen

---

## 5.2 Green / Ready

### Density level
Low

### Meaning
The situation is relevant, but comfortably viable.

### Density consequences
- slightly tighter than Blue
- slightly stronger focus
- still generous space
- no major increase in interface mass
- same screen family as Blue

### Correct feeling
Now relevant, still calm, still workable

### Wrong feeling
Alert mode, early action panic, winner/ranking logic

---

## 5.3 Yellow / Adapting

### Density level
Low-to-medium

### Meaning
A change was detected and CatchIt is already reacting.

### Density consequences
- change becomes visible
- some support detail may increase
- adaptation residue may appear
- still controlled, not warning-heavy
- no dramatic clutter increase

### Correct feeling
Something changed, but the system is handling it

### Wrong feeling
Alert panel, system panic, transition to orange by noise

---

## 5.4 Orange / Act Now

### Density level
Medium, strongly focused

### Meaning
The path is still viable, but user action is now required.

### Density consequences
- stronger compression
- optional information recedes
- execution-supporting information becomes dominant
- action clarity beats broad overview
- the screen should usually feel tighter, not fuller

### Correct feeling
Now is the moment; the next step is clear

### Wrong feeling
Louder dashboard, red-lite escalation, chaotic urgency

---

## 5.5 Red / Failed

### Density level
Low-to-medium, compressed around failure truth

### Meaning
This specific path is no longer viable.

### Density consequences
- stripped clarity
- minimal decorative structure
- minimal interface inventory
- no overload
- no “critical center” theatrics

### Correct feeling
The truth has become hard, not crowded

### Wrong feeling
Crisis dashboard, overloaded failure screen, alarm center

---

## 6. Density Constraint

Higher urgency must usually result in:
- fewer simultaneous meanings
- fewer optional branches
- more explicit semantic leadership
- less need for manual interpretation

If higher urgency creates:
- more reading burden
- more object competition
- more module counting
- more visual fragmentation

then the density system has failed.

---

## 7. Spatial Logic: When Spatial Assistance Is Justified

Spatial support is justified when:
- the user must physically orient
- the next meaningful action depends on location
- walking to a different stop matters
- a spatial threshold is now part of the truth
- uncertainty benefits from geographic reassurance

Spatial support is not justified merely because:
- maps are available
- transit apps usually show maps
- the designer wants visual variety
- the screen would otherwise look “too simple”

### Rule
Do not introduce spatial assistance unless physical orientation is now cognitively relevant.

---

## 8. Lower Reveal Principle

When spatial support is introduced, CatchIt should strongly prefer **lower reveal** logic.

That means:
- the map emerges from below
- the existing truth remains visible
- the screen feels like one surface with increasing depth
- spatial assistance is integrated, not introduced as a separate app-like screen

### Lower reveal should feel like
- a continuation
- added orientation
- controlled disclosure
- a new layer of the same truth

### Lower reveal must not feel like
- a bottom sheet reflex
- a new modal plane
- a separate navigation environment
- a generic maps product pattern

### Rule
Spatial help should usually appear as a revealed support layer, not a replacement surface.

---

## 9. Map Reveal

## Meaning
The same truth is still primary, but spatial reassurance is becoming relevant.

### Typical characteristics
- same overall screen family
- countdown or current anchor still remains legible
- map is revealed, not imposed
- support density increases slightly
- no handover to full navigation identity

### Correct use
- footpath to stop
- orientation before leaving
- decision to walk to better stop
- mild spatial clarification

### Wrong use
- full map as hero
- screen replacement into route viewer
- bottom-sheet or drawer behavior as default

---

## 10. Map Focus

## Meaning
Spatial reading becomes more important, but the system still remains CatchIt.

### Typical characteristics
- larger map area
- time or action residue remains visible
- same trust logic
- same product grammar
- no turn-by-turn takeover identity

### Correct use
- active walking phase
- tight stop approach
- spatially ambiguous environments
- user needs “where exactly” more than “which option”

### Wrong use
- generic navigation shell
- map as dominant product identity
- loss of countdown/instruction continuity without cause

### Rule
Map Focus may increase spatial dominance, but it must not erase CatchIt’s state-based identity.

---

## 11. Motion Discipline

Motion in CatchIt must always serve semantic clarity.

Allowed purposes of motion:
- clarify state change
- support anchor handover
- reveal spatial support
- show tightening or compression
- express recovery as reordering
- move a wizard flow forward calmly
- settle the system after adjustment

Motion must not:
- perform excitement
- simulate urgency through agitation
- create a “new screen” feeling where continuity is required
- rely on bounce, pulse, shake, parallax, or animation spectacle
- add meaning the state system does not justify

### Rule
If motion feels exciting, it is probably wrong for CatchIt.

---

## 12. Motion Classes

CatchIt uses five motion classes.

## 12.1 Tightening Motion

### Purpose
Expresses increased relevance without changing the fundamental truth.

### Typical contexts
- Blue → Green
- Green → Yellow
- Main → slightly denser Main state

### Characteristics
- subtle compression
- stronger focus
- same overall axis
- no hard recomposition

### Meaning
This matters more now.

---

## 12.2 Reveal Motion

### Purpose
Makes support information or spatial assistance visible.

### Typical contexts
- Main → Map Reveal
- Option Unpacking
- exposing recovery context
- gentle surfacing of additional truth

### Characteristics
- soft emergence
- support layer appears within existing screen logic
- no drawer feel
- no modal disruption

### Meaning
There is more here, but it is still the same truth.

---

## 12.3 Handover Motion

### Purpose
Supports anchor change.

### Typical contexts
- Countdown → Instruction
- Question → Confirmation
- Confirmation → Instruction
- Instruction → Confirmation

### Characteristics
- outgoing anchor loses emphasis
- incoming anchor gains emphasis
- brief overlap allowed
- no long competition phase

### Meaning
Something else leads now.

---

## 12.4 Compression Motion

### Purpose
Expresses narrowing toward action.

### Typical contexts
- Yellow → Orange
- Main → Go Mode
- overview → execution
- soft trust state → action threshold

### Characteristics
- reduction of non-essential elements
- stronger central direction
- tighter grouping
- more decisive rhythm

### Meaning
Focus is narrowing to the next step.

---

## 12.5 Settlement Motion

### Purpose
Expresses stabilization after adaptation or action.

### Typical contexts
- Simple Switch
- Chain Adjusted
- Summary after wizard
- post-action re-stabilization

### Characteristics
- calm settling
- no reward-energy
- no celebratory snap
- no exaggerated relief

### Meaning
The system has reorganized into a stable form.

---

## 13. Motion Intensity Levels

CatchIt uses four motion intensity levels.

## M0 — Static
Almost no visible motion

### Typical uses
- Blue / Idle
- stable summary states
- reduced motion fallback cases

---

## M1 — Soft
Low-intensity, calm motion

### Typical uses
- Green / Ready
- Wizard questions
- calm confirmations
- stable reveal transitions

---

## M2 — Directed
Clearly perceptible but controlled motion

### Typical uses
- Yellow / Adapting
- Map Reveal
- Recovery
- denser support disclosure

---

## M3 — Decisive
Short, focused, more exact motion

### Typical uses
- Orange / Act Now
- Go Mode
- entry into failure
- high-stakes anchor handover

### Rule
M3 does not mean frantic.
It means least ambiguous.

---

## 14. Motion by State

### Blue
Almost invisible or static

### Green
Slightly more tension, still calm

### Yellow
Controlled adaptation motion, no alarm motion

### Orange
More decisive motion, less ornamental motion

### Red
Minimal, hard, non-theatrical motion

### Rule
Urgency increases decisiveness, not animation quantity.

---

## 15. Reduced Motion Rule

Reduced Motion must preserve meaning, not merely remove animation.

This means:
- no decorative transitions
- no ambient motion
- no layered theatrics
- anchor handover remains understandable
- reveal still communicates support emergence
- compression still communicates narrowing
- settlement still communicates stabilization

### Rule
Reduced Motion is a semantic simplification, not just an aesthetic toggle.

---

## 16. Cross-Modal Consistency: Density + Motion + Anchor

Density and motion must reinforce the active anchor.

### Examples
- Countdown + calm copy + tightening motion = temporal clarity
- Instruction + short direct copy + decisive motion = action clarity
- Confirmation + settlement motion + reduced density = trust continuity
- Failure + compressed density + minimal motion = finality clarity

### Conflicts to avoid
- calm countdown + urgent animation
- failure + reassuring motion
- adapting state + alarm pulse
- instruction state + large lingering overview
- orange state + exploratory reveal behavior

### Rule
When density or motion contradicts anchor logic, the anchor is being undermined.

---

## 17. Spatial Drift Warnings

### Drift 1 — Map hero drift
The map becomes the visual identity instead of support.

### Drift 2 — Bottom sheet drift
Reveal is implemented as generic product behavior instead of CatchIt-specific spatial assistance.

### Drift 3 — Navigation drift
Map Focus starts behaving like another app’s turn-by-turn interface.

### Drift 4 — Decorative map presence
A map is shown without real spatial necessity.

### Drift 5 — Spatial overload
The map contains too much operational or decorative information at once.

---

## 18. Density Drift Warnings

### Drift 1 — Blue becomes empty
The calm screen feels abandoned instead of prepared.

### Drift 2 — Green becomes too similar to Blue
Relevance increase becomes decorative instead of meaningful.

### Drift 3 — Yellow becomes noisy
Adaptation is mistaken for warning.

### Drift 4 — Orange becomes crowded
Action clarity is replaced by more inventory.

### Drift 5 — Red becomes overloaded
Failure gets drowned in UI mass.

---

## 19. Motion Drift Warnings

### Drift 1 — Animation replaces meaning
The screen feels dynamic but semantically unclear.

### Drift 2 — Urgency through agitation
Motion becomes nervous instead of decisive.

### Drift 3 — Transition as screen replacement
The state change feels like a different product pattern.

### Drift 4 — Generic app motion habits
Bounce, pulse, shake, parallax, and oversized spring reactions appear.

### Drift 5 — Settling becomes celebration
Confirmation or summary feels rewarded rather than stabilized.

---

## 20. Review Questions

When reviewing density, spatial logic, or motion, ask:

1. Is urgency becoming clearer or just louder?
2. Is more being shown because it is necessary, or because the design wants variety?
3. Is the map truly needed now?
4. Would the screen still make sense without the map?
5. Does motion clarify meaning or merely signal change?
6. Does density reinforce the anchor or compete with it?
7. Does Reduced Motion preserve semantic legibility?
8. Does the screen still feel like CatchIt rather than a transit, maps, or dashboard template?

If the answer is unclear, the behavior is not yet system-correct.

---

## 21. Compact Summary

CatchIt uses:
- density to focus truth
- spatial assistance to support orientation only when needed
- motion to make state change legible

### Core principles
- density escalates through focus, not inventory
- maps are support, not hero
- lower reveal is preferred over replacement patterns
- motion clarifies semantics, not personality
- reduced motion must preserve meaning

This file is the main defense against:
- dashboard drift
- map-first drift
- motion-as-brand drift
- and urgency-through-clutter

## Final Rule
If a later document, mockup, or implementation shortcut makes CatchIt louder instead of clearer, this file remains authoritative.
