# 03_Anchor_System

## Purpose
Defines the allowed primary anchor types in CatchIt and the rules for how each anchor may appear.

## Status
Normative system document for CatchIt.

## Scope
- primary anchor rules
- countdown anchor
- instruction anchor
- confirmation anchor
- question anchor
- failure anchor
- anchor assignment by state
- anchor expression rules
- cross-anchor expression rules
- anchor drift detection

## Depends on
- 01_CatchIt_Philosophy
- 02_State_System

## Must not redefine
- state meanings
- transition matrix
- persistence classes
- motion classes
- component families
- screen flow sequence

## Working rule
This file owns leading truth. Every CatchIt screen must have exactly one primary anchor, and that anchor must be chosen by state meaning, not by stylistic preference.

## Authoring rule
This file may clarify, extend, or operationalize earlier files within its scope.
It must not silently rename, replace, or contradict concepts owned by earlier normative files.
If a conflict appears, the earlier higher-priority file remains authoritative unless explicitly superseded.

---

## 1. Core Role of the Anchor System

The anchor system defines what the screen is really saying first.

A CatchIt screen may contain:
- timing
- map support
- options
- chain context
- recovery information
- labels
- secondary details

But only one element may carry the screen’s **primary truth**.

That leading truth is the **primary anchor**.

The anchor system exists to prevent:
- diffuse centers
- competing hero elements
- hidden truth behind cards or maps
- “everything looks equally important”
- generic app composition logic

A correct CatchIt screen should feel like one coherent statement, not several competing signals.

---

## 2. Primary Anchor Rule

Every CatchIt screen must have exactly one primary anchor.

This means:
- one element or message leads
- support layers may reinforce it
- support layers must not silently replace it
- the screen’s core meaning must be readable from the anchor first

### Rule
If a screen cannot clearly answer:
**“What is the one thing the user most needs to understand right now?”**
then the anchor is not correctly defined.

---

## 3. Allowed Anchor Types

CatchIt allows exactly five primary anchor types:

1. Countdown Anchor
2. Instruction Anchor
3. Confirmation Anchor
4. Question Anchor
5. Failure Anchor

No other primary anchor type is allowed unless explicitly added to the normative system later.

Maps, cards, option clusters, labels, chips, and context blocks may support the anchor, but must not become primary anchor categories themselves.

---

## 4. Countdown Anchor

## Definition
The main truth is temporal viability.

The user primarily needs to understand:
- how soon the next meaningful threshold is
- whether the current path is still temporally workable
- how timing relates to action-readiness

### Typical semantic reading
- “this is the key time relationship”
- “this remains viable”
- “this is when it becomes important”

### Typical usage
- Blue / Idle
- Green / Ready
- Yellow / Adapting
- Main → Map Reveal
- some Map Focus states
- some In Vehicle states

### Countdown Anchor must do
- make time immediately legible
- create trust through temporal clarity
- remain visibly primary while time is still the main truth

### Countdown Anchor must not become
- decorative bubble
- brand ornament
- secondary badge
- generic KPI circle
- visual habit carried over without meaning

### Core rule
If time is the main question, the countdown remains the primary anchor.

---

## 5. Instruction Anchor

## Definition
The main truth is the next required action.

The user primarily needs to understand:
- what to do now
- where to go now
- what immediate step preserves viability

### Typical semantic reading
- “this is the next meaningful action”
- “observation is no longer enough”
- “follow this now”

### Typical usage
- Orange / Act Now
- Go Mode / Walk to Stop
- some Go / In Vehicle states
- Recovery / Recheck nötig
- some immediate post-recovery states

### Instruction Anchor must do
- reduce interpretation load
- make action unmistakable
- lead decisively without theatrical pressure

### Instruction Anchor must not become
- generic CTA
- marketing headline
- button text pretending to be anchor
- navigation cliché
- multi-command overload

### Core rule
If action is more important than monitoring, instruction becomes the primary anchor.

---

## 6. Confirmation Anchor

## Definition
The main truth is stabilized continuation, successful adaptation, or verified understanding.

The user primarily needs to understand:
- CatchIt has adjusted the situation
- viability has been restored or clarified
- the chain remains coherent
- the system has understood or reorganized something meaningfully

### Typical semantic reading
- “this is stable again”
- “this has been adjusted”
- “this is now your coherent path forward”

### Typical usage
- Recovery / Simple Switch
- Recovery / Kette angepasst
- Chain Summary
- Quick Change
- some post-wizard summaries

### Confirmation Anchor must do
- close uncertainty
- settle the screen
- reinforce trust continuity

### Confirmation Anchor must not become
- celebration
- reward banner
- “success” screen trope
- fake positivity
- generic “done” state

### Core rule
If trust must be restored or stabilized, confirmation becomes the primary anchor.

---

## 7. Question Anchor

## Definition
The main truth is that CatchIt needs one clear piece of everyday information from the user.

The user primarily needs to understand:
- what CatchIt is asking
- why this question matters
- that this is not a settings form
- that this is a low-friction act of understanding

### Typical semantic reading
- “this is the one thing I need to answer now”
- “the system is trying to understand my day, not configure a machine”

### Typical usage
- Wizard / Einstieg
- Wizard / Kettenfrage
- Wizard / Bewegungsstil / Tageslage

### Question Anchor must do
- focus a single meaningful question
- feel understandable and low-pressure
- support guided input rather than form completion

### Question Anchor must not become
- assessment heading
- survey block
- setup wizard stepper trope
- technical filter prompt

### Core rule
If CatchIt must understand before it can guide, the question becomes the primary anchor.

---

## 8. Failure Anchor

## Definition
The main truth is that a specific route, option, or chain is no longer viable in its current form.

The user primarily needs to understand:
- this path no longer works
- continuing to behave as if it still works would be dishonest
- a new basis is needed

### Typical semantic reading
- “this no longer works”
- “the previous path must be released”
- “this is not recoverable in the old form”

### Typical usage
- Main / Failed / Red
- hard recovery dead ends
- explicit viability collapse

### Failure Anchor must do
- end denial
- state non-viability clearly
- create room for rebase without melodrama

### Failure Anchor must not become
- generic warning
- panic mode
- theatrical crisis performance
- louder orange
- decorative red drama

### Core rule
If the truthful meaning is failure of viability, failure becomes the primary anchor.

---

## 9. Anchor Assignment by State

The following anchor assignment is the default expectation for CatchIt.

| State / Screen Family | Expected Primary Anchor |
|---|---|
| Main / Blue / Idle | Countdown Anchor |
| Main / Green / Ready | Countdown Anchor |
| Main / Yellow / Adapting | Countdown Anchor |
| Main / Orange / Act Now | Instruction Anchor |
| Main / Red / Failed | Failure Anchor |
| Main → Map Reveal | Countdown Anchor |
| Map Focus | Countdown Anchor or Instruction Anchor depending on execution proximity |
| Go Mode / Walk to Stop | Instruction Anchor |
| Go Mode / In Vehicle | Countdown Anchor or Instruction Anchor depending on next action threshold |
| Recovery / Simple Switch | Confirmation Anchor |
| Recovery / Recheck nötig | Instruction Anchor |
| Recovery / Kette angepasst | Confirmation Anchor |
| Wizard / Einstieg | Question Anchor |
| Wizard / Kettenfrage | Question Anchor |
| Wizard / Bewegungsstil / Tageslage | Question Anchor |
| Chain Summary | Confirmation Anchor |
| Quick Change | Confirmation Anchor, optionally with instruction residue |

### Rule
If a screen deviates from this assignment, it must have a strong and explainable semantic reason.

---

## 10. Anchor Expression Rules

Choosing the correct anchor type is not enough.
Each anchor must also be expressed in a way that preserves its role.

### Expression means
- position
- scale
- typographic weight
- text length
- surrounding space
- degree of compression
- relationship to support elements

### Rule
An anchor may evolve by state, but must remain legible as the same anchor type.

---

## 11. Countdown Anchor Expression

### Must visually do
- remain clearly primary when time is the main truth
- make the numeric core dominant
- preserve its operational role even when density changes

### May change through states
- slightly tighter spacing
- slightly smaller scale
- stronger tension
- more compressed support context

### Must not drift into
- decorative bubble
- tiny status circle
- ornamental metric
- badge in a corner
- unconvincing leftover from earlier state

### Good expression qualities
- centered or clearly primary placement
- dominant number
- short supporting label
- strong surrounding calm

### State examples
- Blue: largest, calmest expression
- Green: almost the same, slightly more active
- Yellow: still primary, slightly tighter
- Map Reveal: smaller but still visibly leading
- Map Focus: may reduce, but only if time still leads

### Core rule
A countdown may tighten, but it must not apologize for being primary.

---

## 12. Instruction Anchor Expression

### Must visually do
- make the next action immediately legible
- reduce cognitive branching
- feel physically and temporally actionable

### May change through states
- stronger directness
- reduced explanation
- closer relation to spatial support
- more compressed supporting context

### Must not drift into
- hero CTA
- marketing message
- action button masquerading as truth
- overlong instructional paragraph
- multi-command confusion

### Good expression qualities
- short active wording
- one dominant command
- compact line count
- decisive placement
- minimal competition from support elements

### State examples
- Orange: very direct
- Walk to Stop: physically concrete
- Recheck nötig: direct but more cognitive than bodily

### Core rule
Instruction must reduce thought, not create interface drama.

---

## 13. Confirmation Anchor Expression

### Must visually do
- close uncertainty
- express stable continuation
- communicate that CatchIt has understood or adjusted something meaningfully

### May change through states
- become slightly more explanatory
- widen in summary contexts
- include short secondary rationale

### Must not drift into
- celebration
- app success card
- reward language
- fake warmth
- “good news” theater

### Good expression qualities
- calm tone
- short main statement
- trust-building secondary line if needed
- settled rather than loud emphasis

### State examples
- Simple Switch: brief and calming
- Chain Adjusted: slightly more structural
- Chain Summary: broader but still orderly
- Quick Change: calm re-stabilization

### Core rule
Confirmation should close uncertainty, not perform confidence.

---

## 14. Question Anchor Expression

### Must visually do
- focus one understandable question
- invite a low-friction answer
- feel like understanding, not assessment

### May change through states
- become more open or more pragmatic
- adapt to chain vs day-condition logic
- support different answer structures

### Must not drift into
- survey heading
- form wizard trope
- diagnostic phrasing
- settings page logic
- overloaded multi-question grouping

### Good expression qualities
- one clear question
- everyday wording
- compact answer affordances
- no jargon
- no exam-like framing

### State examples
- Entry: open and inviting
- Chain question: pragmatic and clear
- Day condition: empathic but plain

### Core rule
A CatchIt question should feel like understanding, not interrogation.

---

## 15. Failure Anchor Expression

### Must visually do
- state non-viability clearly
- end ambiguity
- resist melodrama

### May change through states
- become shorter or harder
- include a minimal next-basis cue
- increase explicitness when needed

### Must not drift into
- red spectacle
- disaster UX
- dramatic warning theater
- technical error phrasing
- apologetic vagueness

### Good expression qualities
- short main statement
- minimal secondary context
- hard semantic edge
- low ornament

### State examples
- Main / Red: shortest and hardest form
- dead-end recovery: slightly more explanatory, still direct

### Core rule
Failure must be clear enough to end denial, not loud enough to become theater.

---

## 16. Cross-Anchor Expression Rules

### Rule 1
Anchor expression may evolve by state, but anchor identity must remain legible.

### Rule 2
Expression may tighten, compress, or shift emphasis, but must not drift so far that the anchor reads like a different anchor type.

### Rule 3
Typography, spacing, and support layers must reinforce the anchor, not compete with it.

### Rule 4
A more urgent screen should usually simplify anchor expression, not embellish it.

### Rule 5
If a screen feels wrong, check anchor drift before layout drift.

---

## 17. What May Support an Anchor

The following elements may support the current primary anchor:
- option clusters
- chain context
- map support
- recovery rationale
- trust markers
- delay or direction residue
- small contextual labels
- supporting action hints

These support elements may:
- clarify the anchor
- deepen the anchor
- stabilize the anchor
- provide context around the anchor

They must not:
- compete for leadership
- introduce a second truth center
- create dashboard behavior
- silently become the actual screen focus

---

## 18. What May Never Become an Anchor by Accident

The following are not valid primary anchor classes:
- map area
- card stack
- option list
- CTA button
- settings section
- chip row
- decorative state banner
- generic toolbar title

If one of these starts visually dominating the screen without semantic justification, anchor drift has occurred.

---

## 19. Anchor Drift Failures

### Failure 1 — Hidden anchor
The screen technically has an anchor, but the user would not know what leads.

### Failure 2 — Dual leadership
Two elements compete for primary meaning.

### Failure 3 — Decorative anchor
The chosen anchor still exists, but reads as style instead of truth.

### Failure 4 — Support takeover
A support layer becomes the real center without explicit justification.

### Failure 5 — Anchor inertia
An old anchor remains primary even though the state meaning has changed.

### Failure 6 — Semantic mismatch
The chosen anchor type contradicts the state semantics defined in the state system.

---

## 20. Review Questions for Any Anchor-Based Screen

When reviewing a screen, ask:

1. What is the one thing the user most needs to understand first?
2. Which anchor type is leading?
3. Is that anchor type correct for the state?
4. Is the anchor visually legible as primary?
5. Do support layers reinforce or compete?
6. Would a first-time viewer know what truth leads?
7. If the color were removed, would the anchor still make the state legible?
8. Is the anchor expressed as truth, not as decoration?

If the answer is unclear, the screen is not yet anchor-correct.

---

## 21. Compact Summary

CatchIt uses five allowed primary anchor types:
- Countdown
- Instruction
- Confirmation
- Question
- Failure

Every screen must have exactly one.
That anchor must be chosen by state meaning, not by visual trend.
Support layers may help, but must not silently replace it.

The anchor system protects CatchIt from:
- generic transit UI drift
- dashboard composition
- diffuse hierarchy
- decorative hero elements
- and hidden truth behind maps, cards, or modules

## Final Rule
If a later document, prompt, mockup, or implementation convenience weakens anchor clarity, this file remains authoritative.
