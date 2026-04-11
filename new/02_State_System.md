# 02_State_System

## Purpose
Defines the official five-state semantic model of CatchIt.

## Status
Normative system document for CatchIt.

## Scope
- Blue / Idle
- Green / Ready
- Yellow / Adapting
- Orange / Act Now
- Red / Failed
- meaning of each state
- user role per state
- CatchIt role per state
- UI consequence per state
- what each state must not mean
- orange vs red distinction
- recovery meaning per state

## Depends on
- 01_CatchIt_Philosophy

## Must not redefine
- anchor types
- anchor transitions
- persistence logic
- density system
- motion system
- component families
- screen list

## Working rule
This file owns state semantics. All later files must inherit from this state model and must not replace it with alternate naming schemes such as stable/fragile/critical.

## Authoring rule
This file may clarify, extend, or operationalize earlier files within its scope.
It must not silently rename, replace, or contradict concepts owned by earlier normative files.
If a conflict appears, the earlier higher-priority file remains authoritative unless explicitly superseded.

---

## 1. Core Role of the State System

The CatchIt state system is not decorative color coding.

It is the semantic backbone that determines:
- what the current situation means
- who currently carries the cognitive load
- what kind of UI focus is justified
- what kind of language is appropriate
- whether CatchIt should reassure, adapt, instruct, or clearly stop pretending

The state system exists to reduce ambiguity.

It must never collapse into:
- generic traffic-light semantics
- generic warning escalation
- arbitrary background colors
- mood decoration
- provider-status cosmetics

---

## 2. Core Five-State Model

CatchIt uses five primary semantic states:

1. Blue / Idle
2. Green / Ready
3. Yellow / Adapting
4. Orange / Act Now
5. Red / Failed

These five states are not interchangeable intensity levels.
They represent different relationships between:
- the user
- the system
- the current chain
- and the viability of the next step

---

## 3. One-Line Meaning of Each State

### Blue / Idle
Calm. Not yet operationally urgent.

### Green / Ready
Relevant now, still fully viable.

### Yellow / Adapting
A change was detected. CatchIt is already reacting.

### Orange / Act Now
A viable path still exists, but the user must act now.

### Red / Failed
This specific option or chain is no longer viable.

---

## 4. State Matrix

| State | Meaning | User Role | CatchIt Role | Core UI Effect | Must Not Mean |
|---|---|---|---|---|---|
| **Blue / Idle** | calm, not yet urgent | observe, not think | monitor, stabilize, pre-condense | low density, high air, no pressure | empty, irrelevant, inactive |
| **Green / Ready** | relevant, still viable | be ready | reassure, clarify timing | slightly more relevance, same calm structure | “best route”, “winner”, “optimized result” |
| **Yellow / Adapting** | change detected, system is reacting | stay open, not yet act | compensate, search viable adjustment | visible controlled instability, no alarm logic | warning, danger, act immediately |
| **Orange / Act Now** | viable path exists, but now requires action | act | reduce interpretation, clarify next step | instruction-led, tighter, more decisive | failed, hopeless, red-lite |
| **Red / Failed** | this option is no longer viable | let go of old path | state failure clearly, rebase if possible | short, hard, explicit, rare | “be careful”, “slight issue”, generic urgency |

---

## 5. State-by-State Definition

## 5.1 Blue / Idle

### Definition
The situation is calm or not yet operationally urgent.

### User Role
The user should not have to think yet.
Passive trust is appropriate.

### CatchIt Role
CatchIt monitors, prepares, and holds the surface calm.
It pre-condenses truth without pushing action.

### Core UI Consequence
- maximum air
- minimal supporting detail
- strong calm anchor
- no spatial takeover
- no recovery emphasis
- no comparison overload

### Appropriate Semantic Reading
- “nothing urgent yet”
- “you are covered”
- “the next important moment is still ahead”

### Blue must not mean
- nothing is happening
- the system has no information
- the screen is only decorative
- there is no chain context
- the user is abandoned until later

### Typical Good Copy
- “Spätestens los in”
- “Noch ruhig”
- “Heute passt das”

### Typical Bad Copy
- “No active route”
- “Waiting”
- “No alerts”
- “You are optimized”

---

## 5.2 Green / Ready

### Definition
The current step is becoming relevant, but it remains fully viable.

### User Role
The user should become mentally ready to act soon, without stress.

### CatchIt Role
CatchIt raises relevance while preserving calm trust.

### Core UI Consequence
- same structural logic as Blue
- slightly stronger relevance
- slightly tighter focus
- no panic or action overload
- the path still feels comfortably workable

### Appropriate Semantic Reading
- “this is now becoming relevant”
- “you are still in a good state”
- “timing matters soon, but you are fine”

### Green must not mean
- mathematically optimal
- absolute best route
- sporty precision
- competitive ranking
- success state

### Typical Good Copy
- “Jetzt wird es relevant”
- “Noch gut erreichbar”
- “Passt weiterhin”

### Typical Bad Copy
- “Best route”
- “Perfect connection”
- “Optimal choice”
- “Go now!!!”

---

## 5.3 Yellow / Adapting

### Definition
A change has been detected and CatchIt is already reacting to it.

### User Role
The user does not yet need to act, but should remain open to adjustment.

### CatchIt Role
CatchIt compensates, evaluates, and attempts to restore a viable path.

### Core UI Consequence
- visible change
- controlled tension
- slight increase in density
- adaptation cues may appear
- no warning-style escalation
- no orange-style action demand

### Appropriate Semantic Reading
- “something changed”
- “the system saw it”
- “the system is already working on it”
- “this is still manageable”

### Yellow must not mean
- warning
- failure
- act immediately
- danger
- orange-lite
- generic alert yellow

### Critical Rule
Yellow is not a warning state.
Yellow is a **reaction state**.

That means:
- CatchIt is already carrying the burden
- Yellow should often try to return to Green
- the user should not yet be treated like the system has given up

### Typical Good Copy
- “Ich prüfe eine passende Alternative”
- “Geändert, aber noch gut lösbar”
- “Ich passe das an”
- “Noch tragfähig”

### Typical Bad Copy
- “Warning”
- “Problem detected”
- “Take action now”
- “Unstable route!”
- “This may fail soon”

---

## 5.4 Orange / Act Now

### Definition
A viable path still exists, but now requires user action.

### User Role
The user must now act.
Observation is no longer enough.

### CatchIt Role
CatchIt reduces interpretation load and makes the next action unmistakable.

### Core UI Consequence
- stronger compression
- stronger action clarity
- optional information recedes
- instruction becomes primary
- support elements serve execution, not analysis

### Appropriate Semantic Reading
- “now is the moment”
- “if you act now, it still works”
- “this is still viable, but not passively”

### Orange must not mean
- failed
- no longer possible
- theatrical danger
- red
- panic
- irreversible loss

### Critical Rule
Orange is the real action-needed state.

That means:
- the user is now responsible for a meaningful next step
- CatchIt should not just “show more data”
- CatchIt should lead clearly

### Typical Good Copy
- “Jetzt losgehen”
- “Zur Haltestelle gehen”
- “Jetzt prüfen”
- “Diesen Bus nehmen”

### Typical Bad Copy
- “Warning”
- “Critical state”
- “Final chance”
- “System failed”
- “Oops”

---

## 5.5 Red / Failed

### Definition
This specific option, route, or chain is no longer viable.

### User Role
The old path must be released.
A new basis may be needed.

### CatchIt Role
CatchIt must stop smoothing reality and clearly name the failure.

### Core UI Consequence
- very rare
- semantically hard
- visually compressed
- no decorative escalation
- no overloaded information field
- clarity over elegance

### Appropriate Semantic Reading
- “this specific path no longer works”
- “continuing to pretend would reduce trust”
- “a new basis is needed”

### Red must not mean
- hurry up
- be careful
- slight issue
- slight delay
- orange but stronger
- generic emergency mode

### Critical Rule
Red is not stronger urgency.
Red is the end of viability for this specific path.

### Typical Good Copy
- “Das klappt so nicht mehr”
- “Diesen Anschluss erreichst du nicht mehr”
- “Neue Lösung nötig”

### Typical Bad Copy
- “Critical”
- “Alert”
- “Danger”
- “Please hurry”
- “You may miss this soon”

---

## 6. Color Logic Is Semantic, Not Decorative

The state colors must not be treated as branding gradients with loose emotional associations.

They are semantic operating signals.

### Blue
not-yet-urgent calm

### Green
relevant and viable

### Yellow
detected change + system adaptation

### Orange
user action threshold

### Red
failed viability

### Rule
No state color may be reused loosely for visual variety if that breaks semantic trust.

---

## 7. Who Carries the Load?

| State | Primary cognitive burden carried by |
|---|---|
| Blue | CatchIt |
| Green | CatchIt |
| Yellow | CatchIt |
| Orange | User |
| Red | Reality |

### Interpretation
In Blue, Green, and Yellow, CatchIt should carry as much of the burden as possible.

In Orange, the burden shifts back to the user in a focused and guided way.

In Red, CatchIt must stop pretending the system can fully cushion the situation.

This distribution is one of the strongest hidden rules of CatchIt.

---

## 8. Recovery Meaning by State

Recovery is not separate from the state model.
Each state implies a different recovery relationship.

### Blue
No recovery needed.

### Green
A viable state is already present.

### Yellow
CatchIt is actively trying to recover viability.

### Orange
Recovery may still be possible, but only with user action.

### Red
This specific recovery path has failed. A new basis is needed.

### Important consequence
Yellow belongs more to **system-side recovery effort**.
Orange belongs more to **user-side execution requirement**.
Red belongs to **truthful viability failure**.

---

## 9. Orange vs Red Decision Rule

This is the most important boundary in the whole system.

## Use Orange when:
- a viable action still exists
- the user can still preserve the path through timely action
- CatchIt can still meaningfully guide the next step
- the situation is urgent, but not dead

## Use Red when:
- this specific option will no longer work
- timely action is no longer enough
- the old plan is factually broken
- continuing to imply viability would be dishonest

## Core distinction
**Orange = still possible, but no longer passive.**  
**Red = no longer possible in this form.**

If this distinction becomes blurry, the whole trust model weakens.

---

## 10. Density Consequences by State

The state system must constrain density.

### Blue
very low density  
maximum air

### Green
low density  
slightly tighter than Blue

### Yellow
low-to-medium density  
visible change, still controlled

### Orange
medium density  
strongly focused  
execution-oriented

### Red
low-to-medium density  
compressed around failure truth

### Rule
Higher urgency must not automatically mean more UI inventory.

---

## 11. Anchor Expectations by State

This file does not define anchor rules in full, but it defines expected anchor behavior by state.

### Blue
Countdown anchor expected

### Green
Countdown anchor expected

### Yellow
Countdown anchor expected, possibly with adaptation residue

### Orange
Instruction anchor expected

### Red
Failure anchor expected

### Rule
If a later screen uses a different anchor without strong reason, it must be treated as a coherence risk.

---

## 12. Language Expectations by State

This file does not replace the language rules file, but it defines baseline state expectations.

### Blue
calm, low-pressure, quietly informative

### Green
relevant, viable, quietly confident

### Yellow
responsive, controlled, non-alarmist

### Orange
direct, active, short

### Red
explicit, brief, final

### Rule
Language that contradicts state meaning weakens trust, even if the layout is correct.

---

## 13. Motion Expectations by State

This file does not replace the motion rules file, but it defines semantic expectations.

### Blue
minimal or nearly invisible motion

### Green
slightly more tension, still calm

### Yellow
controlled adaptation motion, not alarm motion

### Orange
more decisive motion, not louder motion

### Red
minimal, hard, non-theatrical motion

---

## 14. Forbidden Legacy Naming

The following naming set is no longer valid as the core state system:
- stable
- bald relevant
- fragile
- critical

Reasons:
- “fragile” ambiguously overlaps Yellow and Orange
- “critical” ambiguously overlaps Orange and Red
- the newer model cleanly separates:
  - system adaptation
  - user action
  - true failure

### Valid canonical naming
- Idle
- Ready
- Adapting
- Act Now
- Failed

Optional German working names:
- Ruhig
- Tragfähig
- Reagiert
- Jetzt handeln
- Nicht mehr machbar

---

## 15. State-Level Drift Warnings

These are common failure modes.

### Drift 1 — Yellow becomes warning
This breaks the adaptation logic and pushes CatchIt toward generic alert UI.

### Drift 2 — Orange becomes red-lite
This destroys the user-action threshold and creates fake failure escalation.

### Drift 3 — Red becomes decorative
This cheapens trust and makes true failure harder to read.

### Drift 4 — Green becomes “best result”
This pulls CatchIt back toward ranking logic.

### Drift 5 — Blue becomes empty
This makes the system feel passive instead of prepared.

---

## 16. Review Questions for Any State-Based Screen

When evaluating a screen, ask:

1. Which of the five states is this, exactly?
2. Does the screen express the correct burden distribution?
3. Does the user know whether CatchIt is carrying the situation or asking for action?
4. Would the same screen still make sense if the color were removed?
5. Is Orange clearly distinct from Red?
6. Is Yellow clearly distinct from warning logic?
7. Does Green feel viable rather than optimized?
8. Does Blue feel calm rather than inactive?

If the answer to these is unclear, the screen is not yet state-correct.

---

## 17. Compact System Summary

CatchIt uses a five-step semantic state model:

- **Blue / Idle** = calm, not yet urgent
- **Green / Ready** = relevant and viable
- **Yellow / Adapting** = change detected, system already reacting
- **Orange / Act Now** = viable path remains, user must act now
- **Red / Failed** = this specific path is no longer viable

This model is foundational.
All later rules for anchors, motion, density, copy, components, and screens must inherit from it.

## Final Rule
If a later document, mockup, prompt, or implementation convenience weakens this distinction, the state system remains authoritative.
