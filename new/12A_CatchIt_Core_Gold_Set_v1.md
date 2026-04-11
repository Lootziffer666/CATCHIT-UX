# 12A_CatchIt_Core_Gold_Set_v1

## Purpose
Defines the CatchIt Core Gold Set v1: the product-architecturally central reference screens that carry CatchIt’s main grammar and must remain primary in all future design, review, and GPT guidance work.

## Status
Core Gold reference package for CatchIt.

## Scope
- core gold screen set
- selection rationale
- recommended core order
- core redline rules
- usage guidance

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
- canonical screen roles
- transition rules
- density logic
- component family ownership

## Working rule
This file identifies the CatchIt screens that carry the product’s core grammar. If one of these screens drifts, CatchIt itself drifts.

## 1. What Core Gold Means

A Core Gold screen is not merely a strong example.
It is a structurally central screen without which CatchIt would lose part of its core product identity.

A screen belongs in Core Gold if it:
- carries the main state grammar
- defines a major state family or handover
- expresses a core product differentiator
- is required to explain CatchIt as a coherent product
- should always be treated as first-class in future design work

Core Gold is not about which screens are “nicest.”
It is about which screens are foundational.

---

## 2. Core Gold Set v1

The following fourteen screens belong to CatchIt Core Gold Set v1.

### 1. Main / Blue / Idle
Reason:
- establishes CatchIt as a calm state-based home surface
- defines the baseline countdown-led home grammar
- prevents empty-state, dashboard, and search-first drift

### 2. Main / Green / Ready
Reason:
- defines how relevance increases without losing calmness
- anchors the “tightening without alarm” logic
- is essential for the continuity of the Main State Family

### 3. Main / Yellow / Adapting
Reason:
- defines CatchIt’s core adaptation behavior
- prevents Yellow from collapsing into warning logic
- is central to the product’s trust posture under change

### 4. Main / Orange / Act Now
Reason:
- defines the action-threshold state
- is necessary to distinguish user action from system adaptation
- prevents Orange from collapsing into warning or Red drift

### 5. Main / Red / Failed
Reason:
- defines honest non-viability
- prevents CatchIt from smoothing reality past the point of truth
- is essential for trust integrity

### 6. Main → Map Reveal
Reason:
- expresses the core CatchIt principle that spatial support enters only when needed
- defines lower-reveal logic against bottom-sheet and map takeover drift

### 7. Map Focus
Reason:
- defines stronger spatial reading without surrendering CatchIt’s identity
- acts as the main bridge from home-state logic into spatial execution support

### 8. Go Mode / Walk to Stop
Reason:
- one of the strongest execution-state expressions
- central reference for Orange-to-execution handover
- prevents map-first and navigation-app drift

### 9. Recovery / Simple Switch
Reason:
- defines the cleanest confirmation-led local recovery behavior
- prevents reroute-browser and alert-center drift

### 10. Recovery / Recheck nötig
Reason:
- defines bounded re-attention without panic
- prevents recovery from collapsing into warning-center or technical fallback UI

### 11. Recovery / Kette angepasst
Reason:
- expresses CatchIt’s chain-aware recovery logic
- prevents chain adjustment from turning into timeline or diff tooling

### 12. Wizard / Kettenfrage
Reason:
- one of CatchIt’s strongest differentiators
- makes chain-awareness explicit at the product level
- prevents planning from collapsing into single-leg thinking

### 13. Chain Summary
Reason:
- defines calm structural confirmation of the day as a coherent chain
- prevents setup-summary, itinerary dump, and planner-review drift

### 14. Quick Change
Reason:
- expresses CatchIt’s ability to absorb local deviation without collapsing the whole day
- is a major differentiator in everyday usability

---

## 3. Recommended Core Gold Order

Use the following order when presenting or reviewing the Core Gold Set:

1. Main / Blue / Idle
2. Main / Green / Ready
3. Main / Yellow / Adapting
4. Main / Orange / Act Now
5. Main / Red / Failed
6. Main → Map Reveal
7. Map Focus
8. Go Mode / Walk to Stop
9. Recovery / Simple Switch
10. Recovery / Recheck nötig
11. Recovery / Kette angepasst
12. Wizard / Kettenfrage
13. Chain Summary
14. Quick Change

This order is recommended because it explains CatchIt as:
- home-state grammar first
- state escalation second
- spatial reveal third
- execution fourth
- recovery fifth
- chain-awareness and structural calm after that

---

## 4. Core Gold Redlines

### Redline 1 — Main States are never optional
Main screens are not “extra” references.
They are core product grammar.

### Redline 2 — Map support must remain subordinate
Spatial help may become stronger, but must not become product identity.

### Redline 3 — Recovery must stay compact
Recovery solves continuity burden.
It must not become result browsing, alert handling, or diff-heavy replanning.

### Redline 4 — Chain logic must remain visible
Kettenfrage, Chain Summary, and Quick Change are core, not decorative planning extras.

### Redline 5 — Execution must remain semantic, not app-like
Go Mode / Walk to Stop must remain instruction-led CatchIt, not a generic navigation shell.

---

## 5. How to Use Core Gold

Use Core Gold:
- as the primary benchmark for all new screen work
- as the main reference package for the custom GPT
- as the first review comparison set
- as the product-core explanation sequence for stakeholders
- as the baseline for future system corrections

When a new core-state or core-flow screen is proposed, ask:
- which Core Gold screen does it inherit from?
- is it clearer than the existing Core Gold version?
- does it preserve the same product grammar?

Do not replace a Core Gold screen unless the replacement is clearly stronger in system clarity.

---

## 6. Compact Summary

CatchIt Core Gold Set v1 contains the screens that carry:
- the Main State Family
- spatial reveal logic
- execution logic
- recovery logic
- chain-aware planning logic

These screens are not optional references.
They are the product’s main grammar.

## Final Rule
If one of these screens drifts, CatchIt’s core identity drifts with it.
