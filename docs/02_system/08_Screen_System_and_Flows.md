# 08_Screen_System_and_Flows

## Purpose
Defines the official screen roles, flow families, and mockup/prototype logic of CatchIt.

## Status
Normative system document for CatchIt.

## Scope
- main state family
- map reveal and map focus
- go mode
- recovery screens
- wizard screens
- chain summary
- quick change
- flow families
- presentation order
- mockup logic
- role of each screen in the system
- minimal and extended screen sets

## Depends on
- 01_CatchIt_Philosophy
- 02_State_System
- 03_Anchor_System
- 04_Anchor_Transitions_and_Persistence
- 05_Density_Spatial_Motion
- 06_Copy_Tone_and_Language
- 07_Component_Inheritance

## Must not redefine
- core state semantics
- anchor taxonomy
- low-level motion classes
- token architecture
- implementation-layer APIs

## Working rule
This file owns which screens exist, what they are for, and how they relate. It must describe screens as parts of one system family, not as isolated UI ideas.

## Authoring rule
This file may clarify, extend, or operationalize earlier files within its scope.
It must not silently rename, replace, or contradict concepts owned by earlier normative files.
If a conflict appears, the earlier higher-priority file remains authoritative unless explicitly superseded.

---

## 1. Core Role of the Screen System

CatchIt is not organized as a generic app menu.
It is organized as a **state and flow system**.

That means screens are not primarily defined by:
- technical feature buckets
- common app navigation patterns
- card libraries
- provider views
- map pages
- results lists

They are defined by:
- what kind of truth is primary now
- what the user most needs to understand now
- where the user is in a chain
- whether the product is planning, guiding, adapting, or re-stabilizing

### Rule
A CatchIt screen is valid only if it has a clear role in the state-based product logic.

---

## 2. Main Flow Families

CatchIt’s screen system is built from five main flow families:

1. Main State Family
2. Spatial Assist Family
3. Go Family
4. Recovery Family
5. Planning / Chain Family

An additional trust/accessibility layer overlays these families when needed, but does not replace them.

---

## 3. Main State Family

The Main State Family is the core home surface of CatchIt.

It is not:
- a dashboard
- a route search UI
- a results list
- a map-first overview
- a full timeline

It is:
- the condensed operational truth surface
- the place where the user knows whether to think, wait, prepare, act, or let go
- the core home state of a living chain

### Core responsibilities
- show the current state clearly
- show the next meaningful time/action relationship
- preserve chain awareness
- expose only a few viable, preference-shaped options
- maintain trust without overload

### Rule
The Main State Family is the default product identity of CatchIt.

---

## 4. Main State Screens

CatchIt uses five canonical main states:

1. Main / Blue / Idle
2. Main / Green / Ready
3. Main / Yellow / Adapting
4. Main / Orange / Act Now
5. Main / Red / Failed

These are not cosmetic skins.
They are semantically distinct screens in one family.

---

## 5. Main / Blue / Idle

## Role
The calm default home state.

### Main truth
Nothing urgent yet; the next relevant threshold is still ahead.

### Expected anchor
Countdown Anchor

### What this screen must do
- feel prepared, not empty
- preserve chain context
- show a few viable options without decision pressure
- establish CatchIt’s home identity

### What this screen must not become
- decorative landing screen
- empty state by habit
- generic dashboard
- pre-search page

---

## 6. Main / Green / Ready

## Role
The state where relevance increases without stress.

### Main truth
The situation is becoming operationally relevant, but remains comfortably viable.

### Expected anchor
Countdown Anchor

### What this screen must do
- sharpen relevance without panic
- remain clearly in the same family as Blue
- preserve timing clarity
- reinforce that the path still works well

### What this screen must not become
- action state too early
- ranking result
- fake optimization state
- “best route” screen

---

## 7. Main / Yellow / Adapting

## Role
The system-side adaptation state.

### Main truth
A change has been detected, and CatchIt is already reacting.

### Expected anchor
Countdown Anchor

### What this screen must do
- make change visible
- show controlled adaptation
- preserve trust
- avoid warning logic
- preserve continuity with Green

### What this screen must not become
- alert state
- orange precursor through anxiety
- generic unstable warning UI
- system panic

### Critical rule
Yellow is not a warning screen.
It is an adaptation screen.

---

## 8. Main / Orange / Act Now

## Role
The action-threshold state.

### Main truth
The path remains viable, but user action is now required.

### Expected anchor
Instruction Anchor

### What this screen must do
- shift from monitoring to doing
- make the next action unmistakable
- compress around execution
- preserve enough continuity from the previous state

### What this screen must not become
- loud dashboard urgency
- red-lite panic
- CTA-heavy app screen
- generic action panel

### Critical rule
Orange is the main execution threshold inside the Main State Family.

---

## 9. Main / Red / Failed

## Role
The non-viability state.

### Main truth
This specific path no longer works in its current form.

### Expected anchor
Failure Anchor

### What this screen must do
- stop false viability
- remain rare and hard
- create room for rebase or recovery follow-up
- preserve truthful chain context

### What this screen must not become
- overloaded crisis center
- dramatic emergency UI
- stronger orange
- generic error page

---

## 10. Spatial Assist Family

The Spatial Assist Family introduces orientation support only when it becomes cognitively relevant.

It does not create a separate map product identity.

The two main members are:
1. Map Reveal
2. Map Focus

### Rule
Spatial screens are still CatchIt screens.
They must not drift into generic map-first or navigation-first UI.

---

## 11. Map Reveal

## Role
The first spatial layer.
Orientation support becomes visible while the existing truth remains primary.

### Main truth
There is more spatial help here, but the main state still leads.

### Expected anchor
Usually Countdown Anchor

### What this screen must do
- reveal map support from below
- preserve the original home state identity
- show spatial relevance without takeover
- support walk-to-stop or orientation decisions

### What this screen must not become
- bottom sheet by default
- separate maps page
- card stack over map
- transition into another app pattern

### Rule
Map Reveal is a denser layer of the same truth, not a new product surface.

---

## 12. Map Focus

## Role
The stronger spatial reading state.

### Main truth
Spatial orientation is now more important, but CatchIt still governs the meaning.

### Expected anchor
Countdown Anchor or Instruction Anchor depending on execution proximity

### What this screen must do
- make path/stop orientation clearer
- preserve temporal or instructional context
- remain part of the same product family
- avoid navigation-app takeover identity

### What this screen must not become
- generic route navigator
- permanent maps mode
- full identity shift away from state logic

---

## 13. Go Family

The Go Family exists when the user is in or near real execution.

It is not a route browser.
It is a guided sequence of action and reassurance.

The main members are:
1. Go Mode / Walk to Stop
2. Go Mode / In Vehicle

---

## 14. Go Mode / Walk to Stop

## Role
The physical execution state before boarding or reaching the next spatial threshold.

### Main truth
This is what you need to do now in space and time.

### Expected anchor
Instruction Anchor

### What this screen must do
- prioritize movement clarity
- reduce cognitive branching
- show where the user is going and why
- remain concise and physically legible

### What this screen must not become
- sports/navigation app
- multi-option comparison screen
- map-heavy exploration surface
- instruction buried under context

### Rule
Walk to Stop is one of the strongest execution screens in CatchIt.

---

## 15. Go Mode / In Vehicle

## Role
The guided in-transit execution state.

### Main truth
You are in motion; CatchIt is holding the next meaningful threshold for you.

### Expected anchor
Countdown Anchor or Instruction Anchor depending on next threshold

### What this screen must do
- preserve calm while in motion
- show the next relevant change without overload
- maintain chain continuity
- prepare for next action if needed

### What this screen must not become
- passive live tracker
- full route browser
- transport dashboard
- generic transit status page

---

## 16. Recovery Family

Recovery is not a side-state.
It is a product family for preserving trust under disruption.

The main members are:
1. Recovery / Simple Switch
2. Recovery / Recheck nötig
3. Recovery / Kette angepasst

### Rule
Recovery screens must show the simplest coherent continuation, not the largest available information set.

---

## 17. Recovery / Simple Switch

## Role
The system found a nearby viable continuation with low user burden.

### Main truth
CatchIt has already adjusted the path to something still workable.

### Expected anchor
Confirmation Anchor

### What this screen must do
- reassure without celebration
- show that a path remains viable
- keep change understandable
- avoid opening a large decision tree

### What this screen must not become
- success state trope
- hidden reroute with no explanation
- full comparison screen

---

## 18. Recovery / Recheck nötig

## Role
The system cannot safely smooth the situation without renewed user attention.

### Main truth
The user needs to check again because system-side certainty is no longer enough.

### Expected anchor
Instruction Anchor

### What this screen must do
- be direct
- avoid false confidence
- explain enough to justify recheck
- remain calm and bounded

### What this screen must not become
- technical error notice
- generic warning center
- apologetic system page
- broad fallback explorer

---

## 19. Recovery / Kette angepasst

## Role
The local change affects the broader chain, and CatchIt has reorganized it.

### Main truth
The chain has been adjusted coherently.

### Expected anchor
Confirmation Anchor

### What this screen must do
- show the adjustment as chain-aware, not just local
- preserve trust
- keep continuity across the broader day
- avoid forcing full replanning

### What this screen must not become
- business timeline editor
- giant itinerary diff
- abstract data panel

---

## 20. Planning / Chain Family

Planning in CatchIt is not classic transit search.
It is guided understanding of a real day structure.

The main members are:
1. Wizard / Einstieg
2. Wizard / Kettenfrage
3. Wizard / Bewegungsstil / Tageslage
4. Chain Summary
5. Quick Change

---

## 21. Wizard / Einstieg

## Role
The first guided entry into CatchIt’s understanding of the day.

### Main truth
CatchIt wants to understand what is happening, not configure a machine.

### Expected anchor
Question Anchor

### What this screen must do
- establish low-friction input
- avoid setup wizard tone
- define CatchIt as chain-aware from the start
- feel supportive, not administrative

### What this screen must not become
- onboarding marketing screen
- setup page
- permissions-style funnel
- intro carousel habit

---

## 22. Wizard / Kettenfrage

## Role
The planning screen where CatchIt explicitly separates one-leg thinking from chain-aware thinking.

### Main truth
This is not just about one destination.

### Expected anchor
Question Anchor

### What this screen must do
- ask whether more follows
- establish return leg / follow-up / additional stop logic
- make chain-awareness explicit
- preserve low-friction tone

### What this screen must not become
- form builder
- route-planner advanced option
- branching tree editor
- technical chain graph

### Rule
The chain question is one of CatchIt’s strongest product differentiators.

---

## 23. Wizard / Bewegungsstil / Tageslage

## Role
The planning state where movement reality becomes part of the product logic.

### Main truth
CatchIt needs to understand how movement works today, not only where the destination is.

### Expected anchor
Question Anchor

### What this screen must do
- capture practical preferences
- remain everyday-readable
- avoid profiling tone
- support preference-shaped later screens

### What this screen must not become
- preferences admin panel
- profile tuning
- settings category page
- diagnostic form

---

## 24. Chain Summary

## Role
The screen where CatchIt shows what it understood and how the day now holds together.

### Main truth
This is your coherent chain.

### Expected anchor
Confirmation Anchor

### What this screen must do
- show the whole chain in stable form
- preserve clarity over detail
- show sequence and coherence
- remain part of CatchIt, not become a project timeline

### What this screen must not become
- configuration summary
- settings review page
- route list dump
- “setup complete” trope

---

## 25. Quick Change

## Role
The local adjustment screen family for inserting change without collapsing the chain.

### Main truth
A small deviation can be absorbed without losing coherence.

### Expected anchor
Usually Confirmation Anchor, sometimes followed by Instruction Anchor

### Typical subcases
- snack stop
- later bus
- short delay
- local insert
- slight timing shift

### What this screen must do
- make local change feel manageable
- show chain impact clearly
- avoid total replanning behavior
- preserve trust and flexibility

### What this screen must not become
- route-builder reboot
- itinerary editor
- giant diff screen
- generic “modify plan” page

---

## 26. Trust / Accessibility Overlay Screens

These do not replace the main screen families.
They adapt them.

Important overlay variants include:
- Neutral Label vs User Label
- Lockscreen-safe Notification
- Accessibility Variant / Large Text + Reduced Motion
- Voice-safe Assist Screen

### Rule
These are support and adaptation screens, not a separate product branch.

---

## 27. Minimal Core Screen Set

The smallest strong set that can still explain CatchIt well is:

1. Main / Blue / Idle
2. Main / Green / Ready
3. Main → Map Reveal
4. Map Focus
5. Go Mode / Walk to Stop
6. Recovery / Simple Switch
7. Wizard / Kettenfrage
8. Chain Summary
9. Quick Change

This set proves:
- CatchIt is not a search UI
- it is state-based
- it is chain-aware
- it reveals maps only when needed
- it can adapt without losing coherence

---

## 28. Extended Core Screen Set

A fuller but still coherent product-level screen set includes:

1. Main / Blue / Idle
2. Main / Green / Ready
3. Main / Yellow / Adapting
4. Main / Orange / Act Now
5. Main / Red / Failed
6. Main → Map Reveal
7. Map Focus
8. Go Mode / Walk to Stop
9. Go Mode / In Vehicle
10. Recovery / Simple Switch
11. Recovery / Recheck nötig
12. Recovery / Kette angepasst
13. Wizard / Einstieg
14. Wizard / Kettenfrage
15. Wizard / Bewegungsstil / Tageslage
16. Chain Summary
17. Quick Change

### Rule
These seventeen form the canonical core screen family of the current CatchIt system.

---

## 29. Flow Families

CatchIt’s flows should be understood as system families, not only screen chains.

### Core flow families
- calm-to-relevant-to-action
- state-to-spatial-assist
- adaptation-to-recovery
- question-to-understanding
- local-change-to-restabilization

These flows should feel like:
- continuity
- handover
- persistence
- increasing or decreasing focus

They should not feel like:
- separate app branches
- unrelated product modes
- new interface grammars for every step

---

## 30. Presentation Order for Explaining the Product

The strongest way to explain CatchIt is usually through state and flow progression, not menu hierarchy.

Recommended presentation order:

1. Main / Blue / Idle
2. Main / Green / Ready
3. Main / Yellow / Adapting
4. Main / Orange / Act Now
5. Main → Map Reveal
6. Map Focus
7. Go Mode / Walk to Stop
8. Recovery / Simple Switch
9. Recovery / Recheck nötig
10. Wizard / Kettenfrage
11. Chain Summary
12. Quick Change
13. Trust / public-safe variant
14. Accessibility variant

### Rule
Present CatchIt as evolving truth, not as a sitemap.

---

## 31. Mockup Logic

A mockup is valid only if it makes the product logic more legible.

Each mockup should answer at least one of these:
- What happens next?
- When do I need to act?
- How stable is the current path?
- What is the simplest viable alternative?
- Where am I in the larger chain?
- Is CatchIt carrying this, or am I now expected to act?

### Rule
If a mockup mainly shows aesthetic variation without semantic gain, it is probably not needed.

---

## 32. Screen Drift Failures

### Failure 1 — Menu drift
The screen is organized by generic app architecture rather than truth logic.

### Failure 2 — Results drift
The screen behaves like a route result or comparison page.

### Failure 3 — Map takeover drift
The screen becomes map-first without semantic necessity.

### Failure 4 — Wizard form drift
Planning screens feel like forms or settings rather than guided understanding.

### Failure 5 — Recovery error drift
Recovery screens feel like alerts or technical exception pages.

### Failure 6 — Flow replacement drift
Moving between screens feels like switching products instead of handing over truth.

---

## 33. Review Questions

When reviewing a screen or flow, ask:

1. Which screen family does this belong to?
2. What is this screen’s exact role?
3. Which anchor should lead here?
4. Why does this screen exist instead of being a detail of another one?
5. Is this a necessary screen, or an unhelpful variant?
6. Does this preserve chain awareness?
7. Does this feel like CatchIt, not a transit template?
8. Does the flow between screens feel like continuity rather than replacement?

If these questions are unclear, the screen system is not yet coherent.

---

## 34. Compact Summary

CatchIt’s screen system is organized around five main families:
- Main State
- Spatial Assist
- Go
- Recovery
- Planning / Chain

These are not navigation tabs.
They are roles in one coherent state-based system.

### Core principles
- home is a state surface, not a dashboard
- map support is conditional, not default
- go states are execution-first
- recovery is a product family, not an error case
- planning is chain-aware understanding, not route search
- quick change preserves coherence instead of rebooting planning

This file is the main defense against:
- random screen proliferation
- app-menu thinking
- flow fragmentation
- and generic mobility product structure

## Final Rule
If a later mockup, prototype, or implementation convenience invents screens without a clear role in this system, this file remains authoritative.
