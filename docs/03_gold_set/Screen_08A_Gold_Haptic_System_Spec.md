# Screen_08A_Gold_Haptic_System_Spec

## Purpose
Defines the gold-status version of the CatchIt haptic system as an independent sensory guidance language.

## Status
Gold-status subsystem spec for CatchIt Layer 2.

## 1. CatchIt interpretation

Haptics in CatchIt are not:
- a phone buzz
- a gimmick
- a binary toggle
- random vibration patterns

They are:
- gradual bodily guidance
- non-visual escalation
- threshold support without constant screen checking

The system should feel like:
- guidance
- atmosphere
- increasing relevance
- bodily orientation

Not:
- punishment
- panic buzzing
- generic notification noise

## 2. Core principle

CatchIt haptics escalate like environmental pressure:

**Windhauch → spürbar → deutlich → nicht mehr ignorierbar**

This model is especially important for:
- absorbed attention
- slower pacing
- exploration drift
- ADHD/autistic use
- low executive energy

The system should begin kind and become unmistakable only when needed.

## 3. Haptic levels

### Level 0 — still
No haptic signal.

### Level 1 — Windhauch
Very soft, ambient, easy to miss.
Meaning:
- slight attention
- relevance beginning

### Level 2 — Spürbar
Clearly noticeable, still calm.
Meaning:
- this matters now
- begin orienting

### Level 3 — Deutlich
Direct, insistent, still controlled.
Meaning:
- act now
- this is your threshold

### Level 4 — Nicht mehr ignorierbar
Strongest non-panic insistence.
Meaning:
- this cannot stay optional
- respond now

## 4. Escalation philosophy

CatchIt should not start too loud.
It should become louder only when:
- time shortens
- action is truly required
- softer guidance did not produce response
- staying polite would fail the user

Model:
**kind first, unmistakable later**

## 5. State relation

### Blue
Usually no haptics.

### Green
Level 1, rising toward Level 2 near threshold.

### Yellow
Level 1–2, adaptation without panic.

### Orange
Level 3 by default.
Level 4 only if ignored.

### Red
Not a target for theatrical vibration escalation.
The meaningful haptic escalation should already have happened earlier.

### Recovery / Recheck nötig
Level 3, sometimes Level 4 if attention delay would worsen outcome.

### Go / Walk to Stop
Escalate from Level 2 to 3.
Level 4 only when movement threshold is being missed.

### Go / In Vehicle
Mostly Level 1–2.
Level 3 near exit threshold.
Avoid constant buzzing.

## 6. User-facing mode model

Prefer understandable modes over raw technical control.

### Ruhig
Starts soft, escalates slowly.

### Deutlich
Reaches noticeable levels faster.

### Nachdrücklich
Escalates earlier and more firmly.

### Nur kritisch
Minimal haptics, only at real thresholds.

## 7. Drift risks

- generic notification pulses
- punishment vibration
- panic buzzing
- decorative pattern overload
- game-like rumble logic
- raw milliseconds/waveform jargon on first layer

## 8. Product rule

Treat haptics as its own sub-system, not just a subsection of Vibration & Sound.

Recommended structure:
- Screen 08 = Vibration & Sound overview
- Screen 08A = Haptic Mode Selection / Escalation Behavior
- Sound may stay separate from deeper haptic logic

## 9. Prompt for generation tool

Design the CatchIt haptic system as an independent sensory guidance language, not as a simple vibration toggle or technical pattern editor.

Semantic meaning:
haptics guide the body toward the right moment through calm escalation.

Requirements:
- use the model:
  - Windhauch
  - Spürbar
  - Deutlich
  - Nicht mehr ignorierbar
- make the system begin kind and escalate only when needed
- avoid panic aesthetics
- avoid raw technical jargon on the first layer
- treat haptics as bodily guidance, not generic phone buzzing
