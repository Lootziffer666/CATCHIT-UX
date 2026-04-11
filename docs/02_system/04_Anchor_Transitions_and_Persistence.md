# 04_Anchor_Transitions_and_Persistence

## Purpose
Defines how leadership moves between anchors in CatchIt and what must remain legible across state change.

## Status
Normative system document for CatchIt.

## Scope
- anchor transition rules
- allowed transitions
- forbidden transitions
- anchor handover principles
- persistence classes
- full persistence
- trace persistence
- context persistence
- transition and persistence debug order
- transition/persistence failure cases

## Depends on
- 01_CatchIt_Philosophy
- 02_State_System
- 03_Anchor_System

## Must not redefine
- state meanings
- anchor types themselves
- density classes
- motion classes
- component inheritance families
- copy tone system

## Working rule
This file owns how truth changes hands without breaking continuity. It must preserve orientation across state changes and block screen-replacement thinking.

## Authoring rule
This file may clarify, extend, or operationalize earlier files within its scope.
It must not silently rename, replace, or contradict concepts owned by earlier normative files.
If a conflict appears, the earlier higher-priority file remains authoritative unless explicitly superseded.

---

## 1. Core Role of Transition and Persistence

A CatchIt screen does not merely change appearance.
It changes which truth is leading.

That means transitions are not:
- decoration
- mere animation timing
- generic “next screen” behavior
- visual refresh

They are semantic handovers.

The transition system exists to answer:
- how one primary truth gives way to another
- how the user keeps orientation across that change
- how the screen remains one product rather than several disconnected modes

The persistence system exists to answer:
- what remains visible or legible from the old truth
- what may fade
- what must not vanish too early
- how continuity survives handover

---

## 2. Core Principle of Anchor Transition

Anchor transitions must feel like **cognitive re-prioritization**, not layout replacement.

This means:
- the screen is still recognizably the same system
- the old truth loses leadership
- the new truth gains leadership
- the handover is semantically justified
- continuity is preserved through invariants and persistence

### Rule
A transition is correct when the user feels:
- “now something else matters more”
and not:
- “now I am suddenly in a different app pattern”

---

## 3. Core Principle of Persistence

Loss of leadership must not equal loss of orientation.

This means:
- an outgoing anchor may stop leading
- but it must not always disappear completely
- the system must decide what remains visible, traceable, or contextually legible
- continuity is a trust mechanism, not a visual luxury

### Rule
A new truth should feel earned by the old truth, not detached from it.

---

## 4. Allowed Primary Anchor Transitions

The following primary transitions are allowed in CatchIt:

1. Countdown → Countdown
2. Countdown → Instruction
3. Countdown → Confirmation
4. Countdown → Failure
5. Question → Confirmation
6. Confirmation → Instruction
7. Confirmation → Confirmation
8. Instruction → Confirmation
9. Instruction → Failure
10. Failure → Confirmation only with a clearly established new basis

No other transition should be treated as normal system behavior unless explicitly added later.

---

## 5. Countdown → Countdown

## Meaning
The core truth remains temporal, but the state meaning changes.

### Typical contexts
- Blue → Green
- Green → Yellow
- Main → tighter Main
- early Map Reveal
- some In Vehicle progressions

### What changes
- urgency or relevance
- density
- surrounding support
- tension level

### What must remain
- countdown stays primary
- timing remains main truth
- visual family continuity
- no hidden handover to another anchor

### Rule
This is not a “new anchor” transition.
It is a semantic tightening inside the same anchor family.

---

## 6. Countdown → Instruction

## Meaning
Time is no longer enough by itself.
The next action becomes more important than temporal observation.

### Typical contexts
- Yellow → Orange
- Map Reveal → Walk to Stop
- Green → immediate execution state
- some Go-state escalations

### What changes
- action becomes primary
- the user becomes responsible for an immediate next step
- execution readability becomes more important than overview

### What must remain
- some temporal continuity
- a trace of timing logic
- enough of the old state to preserve context
- no abrupt replacement feeling

### What must not happen
- countdown disappears before instruction is legible
- instruction appears as generic CTA
- the screen becomes a new pattern instead of a sharpened state
- maps, cards, or buttons hijack leadership during handover

### Rule
When time stops being enough, action becomes primary.

---

## 7. Countdown → Confirmation

## Meaning
The main truth becomes successful stabilization or adaptation.

### Typical contexts
- Yellow → Recovery / Simple Switch
- Yellow → Chain Adjusted
- adaptation completed without immediate user action

### What changes
- suspense resolves
- the system communicates stabilized continuation
- reassurance becomes primary

### What must remain
- awareness of what was just being tracked
- continuity of chain context
- a legible relationship to previous timing pressure

### What must not happen
- confirmation sounds celebratory
- countdown remains visually dominant
- the screen opens a new analysis burden
- recovery becomes a generic “success state”

### Rule
When adaptation resolves, reassurance replaces temporal suspense.

---

## 8. Countdown → Failure

## Meaning
Temporal viability is no longer the main truth.
The path has crossed into non-viability.

### Typical contexts
- Orange → Red
- Yellow → Red in clear collapse
- time-threshold breach with no remaining viable action

### What changes
- the system stops implying that timing can still save the path
- viability failure becomes explicit
- the old path is no longer framed as recoverable in place

### What must remain
- enough context to understand why failure is true
- continuity of chain location
- a truthful relation to the previous temporal state

### What must not happen
- red looks like louder orange
- failure becomes theatrical
- the screen gets busier as viability dies
- countdown “dies” in a dramatic animation trope

### Rule
Failure is not stronger urgency. It is the end of viability for this path.

---

## 9. Question → Confirmation

## Meaning
CatchIt has moved from understanding to showing what it understood.

### Typical contexts
- Wizard question → Summary
- Kettenfrage → confirmed chain logic
- movement-style question → reflected system understanding

### What changes
- asking stops leading
- interpreted understanding becomes primary
- open loop becomes ordered result

### What must remain
- a trace of the user input that shaped the result
- a clear causal bridge from question to outcome
- no black-box feeling

### What must not happen
- wizard becomes a “success screen”
- question disappears without residue
- confirmation feels promotional or congratulatory
- a settings-review pattern appears

### Rule
A good wizard transition feels like understanding becoming visible.

---

## 10. Confirmation → Instruction

## Meaning
The system has stabilized or clarified the situation, and now the user must act.

### Typical contexts
- Simple Switch → immediate action
- Quick Change → next physical step
- post-recovery state that now requires execution

### What changes
- trust closure yields to action clarity
- the next step becomes primary
- the user moves from reassured to responsible

### What must remain
- enough confirmation residue that the user knows why this new action is coherent
- continuity of updated plan logic
- no sense that the previous reassurance has been revoked instantly

### What must not happen
- two competing truths remain equally strong
- instruction appears before confidence closure was legible
- the screen oscillates between “it’s handled” and “act now”

### Rule
First restore trust, then ask for action.

---

## 11. Confirmation → Confirmation

## Meaning
The main truth remains stabilized continuation, but the form of confirmation evolves.

### Typical contexts
- Chain Summary → continued stable chain presentation
- one calm recovery state → another clarified recovery continuation
- post-adjustment → stable continuation

### What changes
- scope may broaden or narrow
- one confirmation may become more structural
- details may settle

### What must remain
- reassurance remains the main truth
- the screen should not re-open uncertainty
- family continuity stays intact

### Rule
Confirmation may deepen or broaden, but should not become a new class of anchor without justification.

---

## 12. Instruction → Confirmation

## Meaning
A required action has been taken, and the main truth becomes stabilized continuation again.

### Typical contexts
- Walk action completed
- Recheck resolved
- user followed a new route switch
- local change is now integrated

### What changes
- action pressure recedes
- system coherence becomes primary again
- the screen can settle

### What must remain
- a trace of what action was taken
- legibility of why the situation is now stable
- no “now everything is magically different” feeling

### What must not happen
- reward-screen logic
- gamified completion feeling
- total loss of the action context

### Rule
Confirmation after instruction should feel like re-stabilization, not reward.

---

## 13. Instruction → Failure

## Meaning
The required action is no longer enough or no longer possible to preserve viability.

### Typical contexts
- user is too late
- recheck confirms non-viability
- execution threshold has been missed

### What changes
- the action path is no longer the main truth
- failure becomes the only honest leading meaning
- the system stops framing this as still recoverable in place

### What must remain
- causal clarity
- enough action residue to show why failure is now true
- continuity of chain context

### What must not happen
- moralizing tone
- user-blame
- generic critical alert UI
- dramatic failure spectacle

### Rule
If action can no longer preserve the path, the system must say so cleanly.

---

## 14. Forbidden or Highly Restricted Transitions

The following transitions are forbidden or highly restricted:

### Failure → Countdown
Forbidden unless a completely new and clearly established basis exists.

### Question → Instruction
Forbidden as a normal pattern.
Questions should first resolve into understanding or confirmation.

### Failure → Confirmation
Forbidden as a softening move.
Only allowed if a genuinely new basis has already been established.

### prolonged dual-anchor competition
Forbidden.
CatchIt must not let two truths compete for too long.

### map/card takeover during transition
Forbidden.
Support layers must not silently become the new anchor.

---

## 15. Transition Invariants

Every valid transition should preserve at least one strong invariant.

Possible invariant classes:
- spatial continuity
- typographic continuity
- anchor family continuity
- chain-context continuity
- vertical-axis continuity
- color-semantic continuity
- interaction continuity

### Rule
The greater the semantic shift, the more important at least one strong invariant becomes.

This is a major protection against screen-replacement thinking.

---

## 16. Persistence Classes

Every anchor transition must declare a persistence class for the outgoing anchor.

CatchIt uses three persistence classes:

1. Full Persistence
2. Trace Persistence
3. Context Persistence

These are not animation settings.
They are semantic continuity settings.

---

## 17. Full Persistence

## Definition
The outgoing anchor remains almost fully visible, but no longer leads.

### Use when
- the old truth still matters strongly
- continuity should feel almost uninterrupted
- the new leadership is a tightening, not a thematic break

### Typical examples
- Blue → Green
- Green → Yellow
- Countdown in early Map Reveal
- Map Reveal → early Map Focus

### Strength
High continuity, low rupture risk

### Risk
If used too long, leadership ambiguity can arise.

### Rule
Full Persistence is for strong continuity, not for avoiding decisions about leadership.

---

## 18. Trace Persistence

## Definition
A reduced but clearly recognizable part of the outgoing anchor remains visible.

### Use when
- leadership truly changes
- the old truth still matters as reassurance or context
- too much old presence would weaken the new anchor

### Typical examples
- Yellow → Orange
- Countdown → Instruction
- Question → Summary
- Confirmation → Instruction
- Instruction → Confirmation

### Strength
Strong orientation without dual leadership

### Risk
If the trace becomes too weak, continuity dies.
If too strong, it competes.

### Rule
Trace Persistence is the default handover persistence for meaningful anchor change.

---

## 19. Context Persistence

## Definition
The outgoing anchor itself may disappear, but its consequence remains legible in the new state.

### Use when
- the anchor’s job is finished
- visible residue would only clutter the new truth
- the user still needs to understand that the new state grew out of the old one

### Typical examples
- Failure → rebased continuation
- late confirmation into stable continuation
- completed wizard input after summary is established

### Strength
Strong semantic clarity with low visual residue

### Risk
If context is too weak, the new state feels unearned or detached.

### Rule
Context Persistence is acceptable only if causal continuity remains understandable.

---

## 20. Recommended Persistence Matrix

| Transition | Recommended Persistence |
|---|---|
| Blue → Green | Full |
| Green → Yellow | Full |
| Yellow → Orange | Trace |
| Orange → Red | Trace or Context depending on clarity need |
| Countdown → Map Reveal | Full |
| Map Reveal → Map Focus | Full or Trace |
| Countdown → Recovery / Simple Switch | Trace |
| Countdown → Recovery / Chain Adjusted | Trace |
| Countdown → Failure | Context |
| Question → Summary | Trace |
| Question → Confirmation | Trace |
| Confirmation → Instruction | Trace |
| Confirmation → stable continuation | Context |
| Instruction → Confirmation | Trace |
| Failure → new basis | Context |

This table is a default guide, not a substitute for semantic reasoning.

---

## 21. Special Handling by Outgoing Anchor Type

## Outgoing Countdown
Often requires Full or Trace Persistence because countdown is a strong trust anchor.

### Rule
A countdown may stop leading, but it should not become forgettable without cause.

## Outgoing Instruction
Needs at least a legible residue of intent before disappearing.

### Rule
An instruction may stop leading only after its intent remains legible.

## Outgoing Confirmation
Should often leave trust residue rather than vanish completely.

### Rule
Confirmation should fade into trust, not disappear into nothing.

## Outgoing Question
Usually needs trace persistence into summary or confirmation.

### Rule
If a question disappears without a trace, the system feels like a black box.

## Outgoing Failure
Rarely persists visually for long, but should leave truthful context.

### Rule
Failure should not linger theatrically, but it must leave a truthful trace.

---

## 22. Transition Failure Modes

### Failure 1 — Hard Vanish
The outgoing anchor disappears before the incoming anchor is legible.

### Failure 2 — Ghost Competition
The outgoing anchor remains too strong and competes with the new one.

### Failure 3 — Cosmetic Persistence
Something remains visible, but no longer carries meaningful orienting value.

### Failure 4 — False Reset
The new state ignores the old one so fully that the transition feels unearned.

### Failure 5 — Over-Persistence
The old anchor blocks the new leadership for too long.

### Failure 6 — Screen Replacement Drift
The transition feels like a completely different app pattern instead of a truth handover.

---

## 23. Transition Review Questions

When reviewing a transition, ask:

1. What outgoing anchor is losing leadership?
2. What incoming anchor is gaining leadership?
3. Why is the new leadership justified now?
4. Which persistence class is used?
5. Is at least one strong invariant preserved?
6. Does the transition feel like reprioritization or replacement?
7. Would the user still understand where they came from?
8. Is there any period of anchor competition that lasts too long?

If these questions are unclear, the transition is not yet system-correct.

---

## 24. Transition and Persistence Debug Order

When a state change feels wrong, check in this order:

1. anchor type
2. anchor expression
3. anchor transition
4. anchor persistence
5. density
6. layout
7. components

### Rule
Do not jump to layout fixes too early.
Many “layout problems” in CatchIt are actually failed handovers.

---

## 25. Compact Summary

CatchIt does not jump between truths.
It hands leadership over.

Anchor transitions are semantic handovers, not just animations.
Anchor persistence defines what remains legible from the old truth while the new truth takes over.

### Core rules
- the outgoing anchor must not disappear before the new one is legible
- transitions must preserve at least one strong invariant
- persistence must support the new anchor, not compete with it
- urgency transitions reduce ambiguity; they do not increase interface inventory
- continuity must survive change

## Final Rule
If a later document, prototype, mockup, or implementation shortcut weakens transition clarity or persistence continuity, this file remains authoritative.
