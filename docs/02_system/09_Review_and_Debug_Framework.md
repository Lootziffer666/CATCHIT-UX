# 09_Review_and_Debug_Framework

## Purpose
Defines the review logic, debug stack, drift detection, and correction method for CatchIt screen work.

## Status
Normative system document for CatchIt.

## Scope
- cross-modal consistency rules
- debug stack
- drift risks
- kill criteria
- smallest correction logic
- review questions
- coherence checks
- what breaks CatchIt
- what still works
- system-consistent correction method
- critique mode logic

## Depends on
- 01_CatchIt_Philosophy
- 02_State_System
- 03_Anchor_System
- 04_Anchor_Transitions_and_Persistence
- 05_Density_Spatial_Motion
- 06_Copy_Tone_and_Language
- 07_Component_Inheritance
- 08_Screen_System_and_Flows

## Must not redefine
- product philosophy
- state semantics
- anchor system
- screen set
- implementation structure

## Working rule
This file owns critique and correction. It is the main guardrail against silent drift back into generic mobility UI.

## Authoring rule
This file may clarify, extend, or operationalize earlier files within its scope.
It must not silently rename, replace, or contradict concepts owned by earlier normative files.
If a conflict appears, the earlier higher-priority file remains authoritative unless explicitly superseded.

---

## 1. Core Role of Review in CatchIt

CatchIt is unusually vulnerable to “looks plausible” drift.

A screen can look:
- polished
- calm
- modern
- app-like
- transit-adjacent
- beautifully composed

and still be wrong for CatchIt.

That is why review in CatchIt is not taste-based polishing.
It is a structured process of checking whether the screen still speaks the system’s truth.

Review exists to detect:
- semantic drift
- anchor drift
- recovery drift
- map drift
- language drift
- family drift
- public-safety drift
- generic mobility UI regression

### Rule
In CatchIt, “this looks good” is never sufficient review evidence.

---

## 2. Core Review Principle

A correct CatchIt screen should feel like one coherent statement, not multiple competing signals.

That means:
- the state is clear
- the anchor is legible
- the copy matches the state
- motion supports the change
- density serves focus
- components remain in family
- nothing silently takes over

### Rule
If the reviewer cannot say, in one sentence, what the screen is telling the user now, the screen is not yet coherent.

---

## 3. Cross-Modal Consistency Rules

All primary layers of a CatchIt screen must agree on the same semantic truth.

These layers include:
- Anchor (what is true)
- Copy (how it is said)
- Motion (how change is expressed)
- Density (how much is shown)
- Components (what carries or supports it)
- Spatial support (when and why space appears)

### Rules
- no layer may contradict the anchor
- motion must reinforce anchor transitions, not reinterpret them
- copy must reflect the same state meaning as the anchor type
- density must support focus, not dilute or exaggerate the anchor
- support components must deepen the truth, not compete with it
- spatial assistance must remain subordinate unless spatial cognition is truly primary

### Correct consistency patterns
- Countdown + calm copy + stable/tightening motion = temporal clarity
- Instruction + direct copy + decisive motion = action clarity
- Confirmation + settling copy + settlement motion = trust continuity
- Question + low-friction copy + soft forward motion = guided input
- Failure + minimal copy + static or compressed motion = finality clarity

### Conflicts to avoid
- calm countdown + urgent animation
- instruction anchor + explanatory paragraph overload
- confirmation anchor + celebratory tone
- failure anchor + animated reassurance
- yellow adapting + warning-style copy or motion
- orange action state + map-first exploration behavior
- recovery state + technical alert language
- wizard question + settings form grammar

---

## 4. Debug Stack

When something feels wrong in CatchIt, check in this order:

1. anchor type
2. anchor expression
3. anchor transition
4. anchor persistence
5. component inheritance
6. density
7. layout
8. components

This order is critical.
Most CatchIt review failures happen because people skip directly to:
- layout tweaking
- visual cleanup
- card styling
- spacing adjustments

when the real problem is earlier in the stack.

### Rule
Do not try to “fix” later layers before earlier layers are verified.

---

## 5. What Breaks CatchIt

The following break CatchIt at system level:

### 5.1 State ambiguity
The screen does not clearly belong to one of the canonical semantic states.

### 5.2 Anchor ambiguity
The screen has no clear leading truth, or two truths compete.

### 5.3 Generic transit drift
The screen starts behaving like:
- route results
- trip comparison
- map-first navigation
- generic planner UI

### 5.4 Dashboard drift
The screen gains too many independently important modules.

### 5.5 Recovery drift
Recovery looks like:
- an error center
- an alert page
- a technical exception state
- a large choice tree

### 5.6 Wizard drift
Wizard screens feel like:
- setup flow
- settings screen
- profile form
- optimization configuration

### 5.7 Motion drift
Movement is more expressive than meaningful.

### 5.8 Language drift
Copy sounds like:
- transit software
- setup software
- app-store product writing
- generic error messages
- motivational wellness writing

### 5.9 Public-safety drift
Language or labels expose too much private meaning by default.

### 5.10 Family drift
A component begins to feel like it belongs to another app or another internal grammar.

---

## 6. What Usually Still Works

Even in a flawed CatchIt screen, some parts may remain usable.

Typical “still works” elements:
- the correct state color may still be present
- the correct anchor family may be chosen, but badly expressed
- the right information may be present, but badly prioritized
- chain context may exist, but be too weak
- the map may be justified, but too dominant
- recovery intent may be good, but error-like in form
- the screen may remain in-family even if density drifted

### Rule
Review should distinguish between:
- what breaks the system
- what still preserves it
- what is the smallest viable repair

This avoids over-correcting and inventing a new screen unnecessarily.

---

## 7. Smallest Correction Logic

When something is wrong, CatchIt review should prefer the **smallest correction that restores coherence**.

This means:
- do not redesign the whole screen if anchor correction is enough
- do not invent a new component if the family can be restored
- do not add more explanation if shorter copy fixes the issue
- do not add more UI if removing competition solves the problem
- do not jump to a new flow if the screen role can be clarified in place

### Rule
Fix the first real break in the stack, not the most visible symptom.

---

## 8. Review Modes

CatchIt review can happen in three modes:

### 8.1 System Review
Full review against the whole system.
Used for:
- new screen proposals
- major redesigns
- flow-level critiques
- stakeholder-ready review

### 8.2 Sketch Review
Fast critique of rough ideas.
Used for:
- exploratory directions
- light ideation
- unfinished mockups

### 8.3 Crit Review
Correction-focused critique only.
Used for:
- debugging
- “what breaks and how to fix it”
- rejecting generic drift
- validating partially working designs

### Rule
The stricter the review, the more the system stack must be checked in order.

---

## 9. Kill Criteria

The following are kill criteria.
If one of these happens, the screen should not be approved.

### Kill 1
The state cannot be named unambiguously.

### Kill 2
The screen has no clear primary anchor.

### Kill 3
The anchor type contradicts the state.

### Kill 4
The screen feels primarily like a generic mobility UI.

### Kill 5
A support layer silently becomes the real hero.

### Kill 6
The map becomes product identity without justification.

### Kill 7
Recovery opens more burden than it removes.

### Kill 8
Wizard input feels like configuration burden instead of guided understanding.

### Kill 9
The copy would be embarrassing, too private, or too specific if seen in public.

### Kill 10
The screen can only be defended through aesthetic preference rather than system logic.

---

## 10. State Review Questions

When reviewing a state-based screen, ask:

1. Which exact state is this?
2. Does this screen clearly express the burden distribution for that state?
3. Is Yellow clearly adaptation, not warning?
4. Is Orange clearly action, not failure?
5. Is Red clearly failed viability, not “very urgent”?
6. Would this still make sense if the color were removed?
7. Does the density level fit the state?
8. Does the copy support the state meaning?

If not, state drift is present.

---

## 11. Anchor Review Questions

1. What is the one leading truth here?
2. Which anchor type owns that truth?
3. Is that anchor the right one for this state?
4. Is it visibly primary?
5. Is it expressed correctly?
6. Are support layers supporting or competing?
7. If something changed from the previous state, was the handover justified?
8. Is enough of the old truth preserved to maintain orientation?

If not, anchor drift is present.

---

## 12. Density Review Questions

1. Is this screen denser because it must be, or because it wants to look “richer”?
2. Does urgency reduce ambiguity or just increase inventory?
3. Are optional elements receding at the right time?
4. Does Blue still feel prepared?
5. Does Green still feel calm?
6. Does Yellow remain controlled?
7. Does Orange become tighter rather than fuller?
8. Does Red become clearer rather than louder?

If not, density drift is present.

---

## 13. Spatial Review Questions

1. Is spatial assistance truly needed now?
2. Is the map supporting the anchor or replacing it?
3. Does this feel like lower reveal or a map takeover?
4. Is Map Focus still CatchIt, not generic navigation?
5. Would the screen still work without the map?
6. Is the map helping orientation or merely filling visual space?

If not, spatial drift is present.

---

## 14. Motion Review Questions

1. What semantic change is motion clarifying?
2. Is the motion class appropriate?
3. Does motion reinforce the anchor transition?
4. Is urgency being expressed through decisiveness rather than noise?
5. Is Reduced Motion still meaningful?
6. Does the transition feel like handover or screen replacement?

If not, motion drift is present.

---

## 15. Copy Review Questions

1. Does the copy fit the state?
2. Does it fit the current anchor type?
3. Is it shorter than it needs to be?
4. Does it sound like CatchIt, not transit software?
5. Does it avoid hype and warning theater?
6. Is it publicly safe by default?
7. Does it reduce effort instead of adding explanation burden?

If not, language drift is present.

---

## 16. Component Review Questions

1. Which family owns each visible component?
2. Is any component a species jump?
3. Did a support component silently become a leader?
4. Did the screen invent a new component unnecessarily?
5. Does the family remain legible across the state?
6. Are accessibility variants still family members, not a separate app style?

If not, family drift is present.

---

## 17. Flow Review Questions

1. Which screen family is this part of?
2. Why does this screen exist instead of being a state of another one?
3. Does the transition preserve continuity?
4. Does the user understand where they came from?
5. Does the chain remain legible?
6. Is this flow still CatchIt, not app-menu logic?

If not, flow drift is present.

---

## 18. Public-Safety Review Questions

1. Would this wording be okay on a lockscreen?
2. Would this wording be okay in public?
3. Is private meaning optional rather than imposed?
4. Is the voice-safe form socially robust?
5. Are labels neutral by default?

If not, trust drift is present.

---

## 19. Drift Severity Levels

CatchIt review should classify drift by severity.

### Severity 1 — cosmetic inconsistency
The screen is still system-valid, but has weak stylistic mismatch.

### Severity 2 — semantic blur
The screen still resembles CatchIt, but meaning is no longer sharp.

### Severity 3 — system conflict
A core rule is contradicted, but the screen may still be repairable.

### Severity 4 — product drift
The screen behaves like another product type.

### Severity 5 — system break
The screen is no longer meaningfully CatchIt.

### Rule
Do not treat all drift as equally severe.
But do not downplay Severity 3+ just because the screen looks polished.

---

## 20. Correction Method

When critiquing, use this sequence:

1. Name the screen family
2. Name the state
3. Name the current anchor
4. Name the biggest break
5. Name what still works
6. Name the smallest correction
7. Only then suggest broader redesign if needed

### Example pattern
- “This is trying to be a Yellow Main State.”
- “The correct anchor would still be Countdown.”
- “The biggest break is warning-style copy.”
- “What still works is the calm overall structure.”
- “Smallest correction: replace alert wording, reduce warning density, keep countdown primary.”

This method keeps critique grounded and usable.

---

## 21. Review Output Templates

### Full review template
1. CatchIt interpretation
2. What works
3. What breaks
4. Biggest drift risk
5. Smallest correction
6. Broader recommendation
7. Confidence of review

### Quick review template
1. Likely screen family/state
2. Main break
3. Minimal fix

### Crit-only template
1. What breaks the system
2. What still works
3. Biggest drift risk
4. Smallest correction that restores coherence

---

## 22. Anti-Hallucination Rule for Review

Do not invent rationale that is not actually visible in the screen.

Do not say:
- “this is probably meant to…”
- “maybe the map is acting as…”
- “perhaps the CTA represents…”

unless the visible evidence is truly ambiguous, and then mark it clearly as uncertainty.

### Rule
Review must stay tied to what is actually shown or explicitly described.

---

## 23. Compact Summary

CatchIt review is not:
- taste policing
- transit-app benchmarking
- generic UX nitpicking

It is a coherence audit.

### Core principles
- one coherent statement, not competing signals
- fix the earliest real break in the stack
- preserve what still works
- apply the smallest coherent correction
- protect CatchIt from silent regression into generic mobility UI

This file is the main defense against:
- plausible-but-wrong screens
- polished drift
- recovery collapse
- dashboard/map takeover
- and critique based only on style preference

## Final Rule
If a later mockup, review habit, or implementation shortcut evaluates CatchIt by generic app aesthetics instead of system coherence, this file remains authoritative.
