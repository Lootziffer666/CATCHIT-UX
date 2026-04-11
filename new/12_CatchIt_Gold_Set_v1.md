# 12_CatchIt_Gold_Set_v1

## Purpose
Defines the curated CatchIt Gold Set v1: the strongest reference screens to use as normative visual and structural targets for future screen iteration, review, and custom GPT guidance.

## Status
Reference-standard screen set for CatchIt.

## Scope
- curated canonical reference screens
- recommended gold-set order
- exclusions from gold set v1
- redline rules for freezing and reviewing the set
- usage guidance for future iteration

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
- 11_Additional_Rules

## Must not redefine
- state semantics
- anchor taxonomy
- transition logic
- persistence classes
- density classes
- component family ownership
- canonical screen roles

## Working rule
This file does not replace the normative system files. It selects the strongest current reference screens and freezes them as preferred examples for future design iteration, critique, and GPT guidance.

## 1. What the Gold Set Is

The CatchIt Gold Set is not the complete product.
It is the smallest strong reference package that best expresses the current CatchIt system language.

The Gold Set exists to:
- reduce drift in future screen generation
- anchor design iteration to known-good targets
- provide a stable internal benchmark for critique
- help distinguish canonical screen expression from merely acceptable variation
- give the custom GPT concrete “best current examples” to align against

A Gold Set screen should not merely be valid.
It should be among the strongest currently available expressions of CatchIt’s design system.

---

## 2. Selection Criteria

A screen belongs in the Gold Set if it:
- expresses CatchIt’s system logic clearly
- preserves correct state meaning
- keeps the correct anchor primary
- resists common drift risks
- feels reusable as a future reference example
- is strong enough to teach by example

A screen should not be included if it is:
- only barely valid
- still too prose-dependent
- still too copy-soft
- still unstable between two screen families
- likely to teach the wrong default behavior

---

## 3. Gold Set v1

The following twelve screens are the recommended CatchIt Gold Set v1.

### 1. Main / Blue / Idle
Why it belongs:
- clearly establishes CatchIt as a state-based home surface
- keeps countdown primary
- avoids dashboard, map, and route-results drift
- works as the calm base state for the whole family

### 2. Main / Green / Ready
Why it belongs:
- cleanly inherits from Blue
- shows relevance increase without stress theater
- useful as the main reference for “tightening without alarm”

### 3. Main → Map Reveal
Why it belongs:
- expresses one of CatchIt’s key product ideas: space only when needed
- keeps the current truth primary
- strongly defends against bottom-sheet and map takeover drift

### 4. Map Focus
Why it belongs:
- shows how spatial dominance can increase without turning CatchIt into another map product
- preserves anchor leadership while strengthening orientation
- acts as the best bridge between Main and Go/Walk screens

### 5. Go Mode / Walk to Stop
Why it belongs:
- one of the strongest execution-state expressions
- Instruction Anchor is clean and stable
- timing survives only as trace persistence
- spatial help stays subordinate
- excellent reference for Orange/Act-Now execution logic

### 6. Recovery / Simple Switch
Why it belongs:
- excellent confirmation-led recovery example
- the old disruption remains only causal residue
- the new viable continuation leads clearly
- avoids alert, reroute-browser, and success-card drift

### 7. Recovery / Recheck nötig
Why it belongs:
- distinguishes bounded recovery attention from warning-center behavior
- keeps one clear recheck action
- avoids overload and technical exception tone
- strong reference for controlled recovery pressure

### 8. Recovery / Kette angepasst
Why it belongs:
- expresses CatchIt’s chain-aware logic especially well
- avoids timeline, diff, and planner drift
- strong example of structured re-stabilization

### 9. Wizard / Kettenfrage
Why it belongs:
- one of CatchIt’s strongest differentiators
- clearly separates chain-aware planning from one-leg thinking
- strong guided-understanding reference

### 10. Chain Summary
Why it belongs:
- a key calm confirmation screen
- shows the day as coherent without turning into itinerary dump or setup summary
- useful for stakeholder understanding and internal consistency

### 11. Quick Change
Why it belongs:
- strongly expresses CatchIt’s ability to absorb local change without collapsing the whole chain
- a major product differentiator
- keeps flexibility without triggering replanning drift

### 12. Trust / Accessibility / Public-safe variants
Why they belong:
- show CatchIt’s deeper product posture, not just its layout system
- make privacy, social robustness, and accessibility visible
- strengthen the system’s credibility and distinctiveness

---

## 4. Recommended Gold Set Order

Use the following order when presenting the Gold Set:

1. Main / Blue / Idle
2. Main / Green / Ready
3. Main → Map Reveal
4. Map Focus
5. Go Mode / Walk to Stop
6. Recovery / Simple Switch
7. Recovery / Recheck nötig
8. Recovery / Kette angepasst
9. Wizard / Kettenfrage
10. Chain Summary
11. Quick Change
12. Trust / Accessibility / Public-safe variants

This order is recommended because it shows:
- the core home-state logic first
- spatial reveal second
- execution next
- recovery after that
- chain/planning logic afterward
- product posture and trust layer at the end

It explains CatchIt as evolving truth, not as a menu.

---

## 5. Excluded from Gold Set v1

The following screens are not rejected.
They are simply not the strongest reference examples yet.

### Main / Yellow / Adapting
Reason:
- valid, but still slightly more drift-prone than the strongest screens
- still vulnerable to support-residue softening and slightly too much support structure

### Main / Orange / Act Now as a pure Main-state card
Reason:
- valid in principle, but weaker than the cleaner Go Mode / Walk to Stop execution expression
- likely to create ambiguity between Main execution and true Go-state logic

### Main / Red / Failed
Reason:
- systemically valid, but still slightly too linguistically smoothed in current examples
- needs even harder clarity to become a strong freeze reference

### Wizard / Einstieg
Reason:
- useful, but not as differentiating as Wizard / Kettenfrage

### Wizard / Bewegungsstil / Tageslage
Reason:
- product-relevant, but less foundational as a Gold Set teaching example than Kettenfrage or Chain Summary

### Go Mode / In Vehicle
Reason:
- valid and useful, but less iconic and less system-defining than Go Mode / Walk to Stop

---

## 6. Gold Set Redlines

Before treating a screen as frozen Gold Set reference, apply these redlines.

### Redline 1 — Secondary Actions
Prefer:
- Weiter
- Weg zeigen

Be cautious with:
- Anzeigen
- Details ansehen
- Neue Verbindung ansehen

A secondary action should never silently become an inspection/browser invitation by default.

### Redline 2 — Residue Discipline
Default maximum:
- one clear anchor
- one residue zone
- one optional lower continuity line

Do not add extra support areas unless semantically necessary.

### Redline 3 — Implementation-Near Copy
Prefer:
- concrete UI-near language
- explicit timing, stop, path, and continuity wording
- less conceptual “smart UX phrasing”

Avoid:
- coaching-like labels
- concept-like support text
- strategy narration

### Redline 4 — Orange Execution Handling
Once spatially concrete movement becomes necessary, prefer Go Mode / Walk to Stop over a vague Orange Main card.

Do not let Orange drift ambiguously between:
- execution card
- route suggestion panel
- walk-state
- map transition

### Redline 5 — Chain Context Restraint
Chain residue should only remain visible if it sharpens the current screen’s meaning.
Do not add a chain line merely to prove chain-awareness.

---

## 7. How to Use the Gold Set

Use the Gold Set:
- as the first internal benchmark for new screens
- as the preferred example set for custom GPT guidance
- as the main review comparison package
- as stakeholder/pitch reference sequence
- as the baseline for future polishing rounds

When a new screen is proposed, ask:
- which Gold Set screen is it closest to?
- which family should it inherit from?
- is it stronger than the current Gold Set example?
- if not, should it really replace anything?

### Rule
Do not replace a Gold Set screen unless the new version is clearly better in system clarity, not just more polished.

---

## 8. Minimal Gold Set Core

If you need an even smaller reference package, use this 8-screen core:

1. Main / Blue / Idle
2. Main / Green / Ready
3. Main → Map Reveal
4. Go Mode / Walk to Stop
5. Recovery / Simple Switch
6. Wizard / Kettenfrage
7. Chain Summary
8. Quick Change

This is the strongest compact package for explaining CatchIt quickly.

---

## 9. Compact Summary

CatchIt Gold Set v1 is the strongest current reference package for:
- home-state logic
- spatial reveal logic
- execution logic
- recovery logic
- chain-aware planning
- trust/privacy posture

It should be used as:
- a stabilizer against drift
- a teaching set for the custom GPT
- a benchmark for future iterations
- a reference package for internal and external explanation

## Final Rule
A screen belongs in the Gold Set only if it is not just valid, but exemplary.
