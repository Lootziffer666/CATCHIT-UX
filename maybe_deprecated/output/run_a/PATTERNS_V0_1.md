# PATTERNS_V0_1.md — Reusable Interaction Patterns

This document defines the reusable interaction patterns for CatchIt V0.1. Each pattern addresses a specific user interaction problem, enforces semantic discipline, and protects the product's core philosophy: decision-relief through compression, not concealment.

---

## Pattern Principles

All patterns obey these governing principles:

- **Active-Move over passive waiting**: The system never designs for "wait and watch". Every state points toward meaningful movement or resolution.
- **Intentions over routes**: Users express what they need, not the technical path to get there.
- **Alternatives with roles**: Every alternative has a semantic role (best choice, calm reserve, fallback). No flat equivalence.
- **Safety without surveillance**: Safety signals are state-based, trust-based, and low-stigma. Never tracking-first.
- **Wizard over parameter cemetery**: Multi-step guided flows over complex settings configuration.
- **Semantic redundancy**: Critical meaning is never carried by a single channel (color alone, text alone, icon alone).

---

## 1. Planning Pattern

### Problem Solved

Users need to establish intent before building a route. Classic transit apps jump straight to routes, forcing users to understand the system. The Planning Pattern compresses intent-setting into a low-friction flow that derives the right route from user context.

### What to Show

- Current context: where the user is, what time it is, today vs. tomorrow
- Movement intent: going somewhere specific, returning later, open-ended
- Energy/constraint: normal day, tired, child present, limited standing
- Destination intent: specific place, flexible destination, no destination yet
- "Do you need to go anywhere afterwards?" — the chain logic question

### What to Hide

- Technical route parameters (transfer limits, walk speed, mode preferences)
- Timetable data until intent is understood
- Advanced settings, profile options
- Alternatives before intent is established

### Common Anti-Patterns

- **Parameter cemetery**: Presenting sliders for "maximum walk distance", "transfer preference", "departure window" — users don't think in these terms.
- **Route-first approach**: Showing a route before the user has expressed what they need.
- **Flat destination search**: Providing 47 matching stops for "Market" with no role differentiation.
- **Static profile setup**: Asking users to configure preferences before using the product.

### How It Protects CatchIt's Semantic Core

The Planning Pattern enforces the **Wizard instead of parameter cemetery** principle. It compresses the intent-gathering into 2-4 focused questions that derive route, timing, buffer, and fallback in one flow. This preserves Plan Mode as a distinct UX layer: compression before calculation.

### Which Components It Uses

- Wizard Prompt Unit (for guided intent questions)
- Zen Shell (container for planning state)
- Mode Header showing "Plan Mode"
- Low-noise action controls for intent choices
- Cathy Container in peripheral "ready to help" state

### Which States It Operates In

- **planning**: User is setting intent
- **destination-defined**: User has a specific target
- **destination-flexible**: User knows roughly where
- **returning**: User has a return need
- **open-ended**: User is exploring

### Which UX Layers It Spans

- **Orientation**: Helping the user understand their current context before planning
- **Comparison**: Not yet — comparison happens after planning produces options

### Example Flow (Textual)

1. User opens CatchIt. Zen shell shows current location, today's date, normal time.
2. Prompt asks: "Where do you need to be?"
3. User types "Market Street" or taps current location.
4. Prompt asks: "Do you need to go anywhere afterwards?"
5. User answers: "I'm going home later" or "Nothing planned" or "Meeting at 7pm".
6. Prompt asks: "How are you feeling today?" (normal / tired / need to sit / with child)
7. System derives destination, return need, and energy context.
8. Cathy moves closer, shows the plan preview without showing the full route.
9. Plan Mode transitions to Comparison Layer with semantically-rolled options.

---

## 2. Comparison Pattern

### Problem Solved

When planning produces multiple viable paths, users face choice paralysis. The Comparison Pattern presents alternatives as semantically-differentiated roles, not equivalent cards. The user chooses a movement style, not a technical route.

### What to Show

- Alternatives with clear roles: "Best for now", "Calm backup", "If disruption happens"
- Only the information that distinguishes choice: time to destination, key transfer, stability
- Confidence level on each option (high/medium/depends)
- What makes each option different from the others
- Cathy expression: which option matches user's likely preference

### What to Hide

- Technical route details before choice is made
- Full timetable data per option
- All 47 possible alternatives — showing the top 3 with distinct roles
- Granular platform-by-platform breakdowns before the user asks

### Common Anti-Patterns

- **Flat options**: Showing three identical cards with only the route number different.
- **ETA ranking**: Ordering purely by fastest arrival without considering movement quality.
- **Information dumping**: Showing every departure, every stop, every transfer on every card.
- **Color-only differentiation**: Making the "best" option blue and others gray — without explaining why.

### How It Protects CatchIt's Semantic Core

The Comparison Pattern enforces **Alternatives must have roles**. It ensures semantic differentiation is visible and meaningful: the difference between "fastest" and "best fit" is visible, not implied. This protects Plan Mode integrity — the choice is about movement, not optimization.

### Which Components It Uses

- Primary Connection Card (for the best option)
- Alternative Card (for backup and fallback options)
- Reassurance Element (subtle hint about what makes each choice different)
- Zen Shell showing comparison state
- Cathy Container in focused, minimal expression

### Which States It Operates In

- **comparing**: User is evaluating options
- **choice-confident**: User understands the distinction
- **choice-uncertain**: User needs more help
- **rollback**: User wants to change constraints

### Which UX Layers It Spans

- **Comparison**: This is the primary layer — the core information density for this pattern.
- **Execution**: Once a choice is made, transitions to Execution Layer.

### Example Flow (Textual)

1. Planning produces three options.
2. Primary Connection Card shows "Best for now": 32 minutes, one transfer, high confidence.
3. Alternative Card #1 shows "Calm backup": 45 minutes, direct bus, medium confidence.
4. Alternative Card #2 shows "If disruption happens": 40 minutes, different transfer, fallback ready.
5. Cathy leans toward the "Best for now" card but does not select it.
6. User taps the Primary Connection Card.
7. Transition Pattern begins — execution flow activates.

---

## 3. Transition Pattern

### Problem Solved

Moving from Planning to Execution is a moment of high cognitive load. The user has made a choice — now they need to understand what happens next without being flooded with detail. The Transition Pattern creates a bridge state that tells the user what to expect, what to do, and when to act — without overwhelming them.

### What to Show

- Confirmation of what the user chose (not the full route)
- What happens next: first departure, key milestone, next decision point
- Action trigger: when the user needs to start moving
- Confidence level: what's the certainty of this path
- Any early warning: if the path depends on a specific connection

### What to Hide

- Full route map, all stops, all transfers
- All departure times for the next 2 hours
- Technical details like platform numbers, bus bay specifics
- Possible disruption scenarios until they become relevant

### Common Anti-Patterns

- **Transition dumps everything**: Showing the full route with every stop named.
- **Execution before confirmation**: jumping straight to "now boarding" without confirming the user understood the plan.
- **Static countdown**: Showing "departs in 12 minutes" without explaining what happens at minute 12.
- **False urgency**: Creating panic when there is no immediate action needed.

### How It Protects CatchIt's Semantic Core

The Transition Pattern enforces the **Active-Move principle**: it points toward the first departure moment, not toward passive watching. It keeps the UX layer clear — this isn't Execution yet, it's the bridge from Plan to Go.

### Which Components It Uses

- Transition Object / Step Accordion (showing the key milestones)
- Mode Header transitioning from "Plan" to "Go"
- Reassurance Element (subtle, grounding)
- Cathy Container scaling up but not dominating

### Which States It Operates In

- **transitioning**: User is moving from planning to execution
- **milestone-pending**: User is waiting for the next key decision point
- **action-due**: User needs to act soon
- **action-now**: User needs to move now

### Which UX Layers It Spans

- **Comparison**: The tail end of comparison.
- **Transition**: This is the core layer — compression for the handoff from Plan to Go.
- **Execution**: The final moment transitions into Execution.

### Example Flow (Textual)

1. User confirms their choice in Comparison.
2. Transition Object appears with three visible steps: "Walk to stop (3 min)", "Bus 42 to Oak", "Arrive at Market".
3. Step Accordion shows step 1 expanded ("Walk to stop on the corner"), steps 2-3 collapsed.
4. Prompt says: "Your bus leaves in 12 minutes. Head to the stop in 8 minutes."
5. Cathy shows a calm, encouraging expression — close but not dominant.
6. When 8 minutes remain, the Step Accordion expands.
7. Action trigger fires: "Time to go."
8. Transition Object collapses, Execution Pattern takes over.

---

## 4. Execution Pattern

### Problem Solved

The user is in motion. Their cognitive load should be near zero. The Execution Pattern provides just enough information to stay confident: where to go next, what to do next, and that the plan is holding. No analysis, no options, no re-planning cues unless something actually changes.

### What to Show

- Current status: on track / running late / fallback active
- Next action: go here, do this, wait here
- Key milestone: arrival at transfer, arrival at destination
- If things change: what changed, what the system is doing about it

### What to Hide

- Full route details
- Alternative options unless specifically requested
- All other possible routes
- Re-planning tools unless there's a real disruption

### Common Anti-Patterns

- **Live tracking spam**: Updating the user's location every 10 meters.
- **Options explosion**: Showing "Try these other routes!" in execution mode.
- **Passive ETA countdown**: "Your bus arrives in 4 minutes" — when the user should be walking, not watching.
- **Alarm inflation**: Beeping, pulsing, or flashing for every minor variance.

### How It Protects CatchIt's Semantic Core

The Execution Pattern enforces **Waiting is not neutral**. It turns execution into a progression toward the next action, not a passive observation of data. This protects Go Mode as a distinct state of flow, not a status display.

### Which Components It Uses

- Primary Time Block (for departure times and milestones)
- Mode Header showing "Go Mode"
- Zen Shell in execution state
- Cathy Container close but conversational — brief check-ins, not status updates

### Which States It Operates In

- **executing**: User is following the plan
- **milestone-due**: Next decision point approaching
- **fallback-active**: Original plan changed, system is handling it
- **complete**: User arrived

### Which UX Layers It Spans

- **Execution**: This is the core layer — minimal information, maximum reassurance.
- **Reassurance**: If something changes, the Reassurance Layer activates briefly.

### Example Flow (Textual)

1. User begins execution. Zen shell shows "On the way".
2. Primary Time Block shows "Arrive in 22 minutes".
3. User walks. No data shown during the walk — just a quiet state.
4. At the transfer stop, Trigger fires: "Bus 42 arriving. Board at door 2."
5. User boards. State briefly shows "on board".
6. Next milestone: "Get off at Oak Street".
7. No further interaction needed until arrival or disruption.
8. Arrival: "You're here." Completion state. Recovery options appear.

---

## 5. Reassurance Pattern

### Problem Solved

Minor uncertainties happen — a bus is late, there'sconstruction, the user missed a connection. The Reassurance Pattern provides calm, early information without panic. It reassures through action, not through explanation. The user needs to know what's happening and that the system has a plan — not a detailed breakdown.

### What to Show

- What's different: "Your bus is running 5 minutes late"
- What's being done: "Checking for alternatives"
- What the user should do: "Wait here" / "Take the next one" / "Try a backup"
- How confident the system is that this will resolve

### What to Hide

- Full re-planning options unless specifically needed
- Technical details about why the delay happened
- Multiple screens of alternatives — show the backup, not the menu
- Any implication that the user did something wrong

### Common Anti-Patterns

- **Surveillance signals**: "YOUR BUS IS LATE — REPLAN NOW" with red flashing.
- **Option explosion**: Presenting 12 alternative routes when one backup works.
- **Blame framing**: "You missed your connection" instead of "The bus left before you arrived."
- **False calm**: Silencing all information when something is actually wrong.

### How It Protects CatchIt's Semantic Core

The Reassurance Pattern enforces **Safety must not become surveillance**. It keeps signals state-based and trust-based: the system noticed, the system is handling it, the user is guided, not alarmed. This protects the semantic core from drift into control patterns.

### Which Components It Uses

- Reassurance Element (for quiet, grounding communication)
- Recovery Card (if re-planning is needed)
- Zen Shell showing "handling it" state
- Cathy Container in helpful, close expression — not alarming

### Which States It Operates In

- **uncertainty-detected**: System noticed something changed
- **handling**: System is finding a solution
- **backup-ready**: Alternative is identified
- **resolved**: The situation is handled

### Which UX Layers It Spans

- **Execution**: In the background — handling the flow.
- **Reassurance**: This is the core layer — quiet confidence, not status broadcasting.

### Example Flow (Textual)

1. User is executing. The system detects their bus is running late.
2. Reassurance Element appears gently: "Your bus is a few minutes late."
3. Cathy moves close, calm: "I can check for an alternative if needed."
4. If the delay exceeds threshold, Recovery Pattern activates.
5. Recovery Card shows one backup: "Take the next bus — it arrives in 8 minutes, same route."
6. User accepts (or doesn't — they can wait).
7. Backup activated. Execution resumes with new plan.
8. "All set. Next bus in 8 minutes."

---

## 6. Recovery Pattern

### Problem Solved

Something significant changed enough that the user's current plan is no longer viable — a missed connection, a service disruption, a complete route failure. The user is now in a fragile state: stressed, possibly frustrated, possibly embarrassed. The Recovery Pattern compresses the recovery into a single backup that's ready to go, not a menu the user has to navigate.

### What to Show

- What happened: clear, non-blaming statement
- What the system has found: one ready backup option, not a menu
- What the user needs to do: single action
- Confirmation that this gets them to their destination

### What to Hide

- More than one backup option (unless the first fails)
- Technical details about why the failure happened
- "Browse all options" — the user needs a solution, not a project
- Any framing of the failure as the user's fault

### Common Anti-Patterns

- **Parameter cemetery in recovery**: "Please select your new preferred route from these 23 options."
- **Blame-oriented recovery**: "You missed your bus. Choose another."
- **Full re-planning workflow**: Forcing the user to re-answer all intent questions.
- **No backup found**: Leaving the user stranded with "No alternatives found."

### How It Protects CatchIt's Semantic Core

The Recovery Pattern enforces **Reassurance must not come from concealment**. If the user's plan fails, the system has a backup ready — they don't have to rebuild from scratch. This protects Recovery Mode as a distinct semantic layer: the system is handling the failure, not asking the user to fix it.

### Which Components It Uses

- Recovery Card (showing the single backup option)
- Zen Shell in recovery state (different visual intensity)
- Cathy Container in close, supportive expression — but never mocking
- Reassurance Element for grounding

### Which States It Operates In

- **disruption-detected**: The system noticed something significant changed
- **backup-proposed**: A recovery option is ready
- **backup-accepted**: The user is moving to recovery plan
- **recovery-complete**: The user is back on track

### Which UX Layers It Spans

- **Reassurance**: Handles the communication layer.
- **Recovery**: This is the core layer — the system doing the work, not the user.
- **Execution**: After backup is accepted, execution resumes.

### Example Flow (Textual)

1. User misses their transfer. System detects the gap.
2. Recovery Card appears prominently but calmly: "Your bus left. Here's a backup."
3. Shows: "Next bus on same route — arrives in 6 minutes."
4. Cathy is close and steady: "This gets you there, just 8 minutes later."
5. User taps "Use backup."
6. Recovery Card collapses. Execution resumes.
7. Completion shows new arrival time: "You'll arrive at 5:42 pm."

---

## 7. Wizard Flow Pattern

### Problem Solved

The user shouldn't have to configure a route. They should express what they need, and the system should derive the route. The Wizard Flow Pattern structures this as a guided conversation, not a configuration form. Each step is purposeful, low-friction, and derives the next question from the previous answer.

### What to Show

- One focused question at a time
- Context-appropriate defaults (today's date, current location, typical time)
- Progress indication: how many questions remain
- Quick-exit option: "I know what I need" for power users

### What to Hide

- Technical parameters at the input level
- All possible options at once
- Advanced settings unless explicitly requested
- Timeline of all questions before the user starts

### Common Anti-Patterns

- **Parameter cemetery**: Presenting "Walk speed: slider", "Transfer limit: slider", "Departure window: input field".
- **Static form fields**: First name, last name, favorite route, profile settings.
- **Infinite wizard**: No end state in sight — keeps asking questions.
- **Generic onboarding**: "Welcome! Let's set up your profile!"

### How It Protects CatchIt's Semantic Core

The Wizard Flow Pattern enforces **users express intentions, not routes**. The user says "I need to get to Market Street and back later", and the system derives the route, timing, and fallback. This protects the product from becoming a parameter-configured routing shell.

### Which Components It Uses

- Wizard Prompt Unit (for each step)
- Zen Shell containing the wizard flow
- Mode Header showing "Planning" (or "Go" after confirmation)
- Low-noise action controls for answer selection
- Cathy Container in guided, helpful state — not talking too much

### Which States It Operates In

- **wizard-active**: Currently in wizard flow
- **wizard-paused**: User paused, can resume
- **wizard-complete**: Intent is established, system generated a plan
- **wizard-aborted**: User exited early

### Which UX Layers It Spans

- **Orientation**: First step helps the user understand their context.
- **Comparison**: After wizard completes, moves to Comparison Layer.
- **Transition**: After user confirms, moves to Transition.

### Example Flow (Textual)

1. User opens CatchIt. Prompt: "Where do you need to be?"
2. User enters "Market Street".
3. Prompt: "What time do you need to arrive?" Defaults to current time + appropriate buffer.
4. User confirms time.
5. Prompt: "Do you need to go anywhere afterwards?"
6. User answers.
7. Prompt: "How are you getting there?" (with context: driving, transit, walking — or "I don't know, what's best?")
8. System derives full plan.
9. Confirmation screen: "Here's what you've said. Does this look right?"
10. User confirms. Wizard complete. Comparison options appear.

---

## 8. Active-Move Pattern

### Problem Solved

Waiting is not neutral. The system never designs for passive observation. Every state either points toward the next action or provides meaning. If there's nothing to do, the user should feel that they don't need to check again — they should feel the system's confidence, not the burden of watching.

### What to Show

- What to do next (or when to do it)
- Confidence that the plan is holding
- If there's a wait, what's coming after it
- If nothing to do, reassurance: "You're all set. I'll let you know if anything changes."

### What to Hide

- Inactive countdown timers for things beyond the user's control
- Live tracking data that serves no action
- Options to "check for other routes" unless something is actually wrong
- The raw ETA clock as a primary focus — it's a secondary indicator

### Common Anti-Patterns

- **Passive ETA display**: "Your bus arrives in: 00:12:34" — the user should be walking, not watching the countdown.
- **Monitoring encouragement**: "Checking for updates... checking for updates..."
- **No-end states**: Ending a flow with "We'll keep monitoring" with no confidence level.
- **Tracking-first**: Showing the user's exact GPS position on a map during execution.

### How It Protects CatchIt's Semantic Core

The Active-Move Pattern is the enforcement layer for **Waiting is not neutral**. It ensures every UX moment is either moving the user toward their next action or providing confidence to stop watching. This is the semantic heart of CatchIt — the system compresses truth, the user acts when necessary, and otherwise they're free.

### Which Components It Uses

- Primary Time Block for real action milestones (not ETA clocks for watching)
- Zen Shell showing the appropriate activity state (not "waiting")
- Mode Header showing current mode
- Reassurance Element for grounding when no action is needed
- Cathy Container for check-ins — not for monitoring

### Which States It Operates In

- **action-due**: User needs to do something now
- **action-ready**: User is ready, should progress
- **observation-burden**: System is about to create watching behavior (antipattern — redesign)
- **confidence-state**: User doesn't need to act, system is handling things

### Which UX Layers It Spans

- **All**: This pattern spans every layer — it's a principle, not a layer-specific pattern.
- **Orientation**: No action needed? Don't show a route.
- **Comparison**: No action needed? Don't invite re-checking.
- **Execution**: No action needed? Don't show a countdown.

### Example Flow (Textual)

1. User confirmed their plan. System calculates: "Walk to stop (3 min)", "Bus 42 (15 min)", "Walk (2 min)".
2. At step 1: "Walk to the stop." No ETA shown. Just the next action.
3. While walking: System shows that the bus is being tracked. User doesn't see tracking.
4. Bus approach: "Your bus is coming" — only now, a trigger.
5. Board. No countdown during the ride.
6. Destination approach: "Get off at Oak."
7. Walk. Arrival.
8. Completion.

---

## 9. Safety Pattern

### Problem Solved

Safety must stay state-based, trust-based, and low-stigma. CatchIt is not a tracking app. Safety signals appear when there's elevated information — not as surveillance. The user's sense of security comes from confidence in the system, not from being watched.

### What to Show

- Elevator status: is thelift working, broken, unknown
- Station conditions: elevator status, crowding, step-free access
- Service alerts relevant to the user's path
- Connection safety: if a transfer is tight, information that helps the user decide

### What to Hide

- Tracking the user's exact location
- "Safety score" metrics and gamified safety ratings
- Real-time location sharing with others
- Alarm膨胀: creating urgency for routine conditions

### Common Anti-Patterns

- **Tracking-first**: Publishing the user's location in real-time to others.
- **Surveillance UI**: Showing the user's dot on a map with a live "tracking" indicator.
- **Safety theater**: Checkboxes that say "I'm safe" that nobody monitors.
- **Alarm inflation**: Red pulsing for "Elevator status unknown" — not urgent, just unknown.

### How It Protects CatchIt's Semantic Core

The Safety Pattern enforces **Safety must not become surveillance**. It keeps all safety-related information in the state layer: the system provides useful safety information without becoming a tracking tool. This protects the semantic core from drift into control-pattern UX.

### Which Components It Uses

- Reassurance Element for quiet safety signals (elevator status, crowding indicator)
- Alternative Card for step-free options (safety differentiation, not surveillance)
- Zen Shell showing relevant safety context without overstatement
- Cathy Container in grounding state — never alarming

### Which States It Operates In

- **safety-confirmed**: The user's path has accessible options available
- **safety-uncertain**: Some condition is unknown, handled without alarm
- **safety-alternative**: User should be informed of step-free options

### Which UX Layers It Spans

- **Comparison**: Showing accessible alternatives alongside standard options.
- **Execution**: Providing relevant condition updates without monitoring.
- **Reassurance**: If conditions change, a quiet signal.

### Example Flow (Textual)

1. User plans a route involving an elevator transfer.
2. Alternative Card shows "Step-free option: use the elevator at [stop]" — not emphasized, just available.
3. If elevator status is unknown, Reassurance Element says: "Elevator status is being checked — I'll let you know."
4. During execution: No live elevator tracking — just a signal if status changes.
5. If elevator is down: Recovery Card offers step-free alternative, not an alarm.

---

## Pattern-to-Component Reference Table

| Pattern | Primary Components | Supporting Components |
|---|---|---|
| Planning | Wizard Prompt Unit, Zen Shell, Mode Header | Cathy Container, Low-noise Controls |
| Comparison | Primary Connection Card, Alternative Card, Reassurance Element | Zen Shell, Cathy Container |
| Transition | Transition Object / Step Accordion, Mode Header | Reassurance Element, Cathy Container |
| Execution | Primary Time Block, Mode Header, Zen Shell | Cathy Container |
| Reassurance | Reassurance Element | Recovery Card, Zen Shell, Cathy Container |
| Recovery | Recovery Card | Reassurance Element, Cathy Container |
| Wizard Flow | Wizard Prompt Unit, Zen Shell, Mode Header | Low-noise Controls, Cathy Container |
| Active-Move | Primary Time Block, Zen Shell, Mode Header | Reassurance Element, Cathy Container |
| Safety | Reassurance Element, Alternative Card | Zen Shell, Cathy Container |

---

## Pattern-to-UX-Layer Matrix

| Pattern | Orientation | Comparison | Transition | Execution | Reassurance / Recovery |
|---|---|---|---|---|---|
| Planning | ✓ | (post-intent) | — | — | — |
| Comparison | — | ✓ | (transitions) | — | — |
| Transition | — | ✓ | ✓ | ✓ | — |
| Execution | — | — | — | ✓ | (background) |
| Reassurance | — | — | — | ✓ | ✓ |
| Recovery | — | — | — | — | ✓ |
| Wizard Flow | ✓ | (if needed) | — | — | — |
| Active-Move | ✓ | ✓ | ✓ | ✓ | ✓ |
| Safety | — | ✓ | — | ✓ | ✓ |

---

## Pattern Anti-Pattern Quick Reference

| Pattern | Common Anti-Patterns |
|---|---|
| Planning | Parameter cemetery, route-first, flat destination search, static profile setup |
| Comparison | Flat options, ETA ranking, information dumping, color-only differentiation |
| Transition | Transition dumps everything, execution before confirmation, static countdown, false urgency |
| Execution | Live tracking spam, options explosion, passive ETA countdown, alarm inflation |
| Reassurance | Surveillance signals, option explosion, blame framing, false calm |
| Recovery | Parameter cemetery in recovery, blame-oriented, full re-planning, no backup found |
| Wizard Flow | Parameter cemetery, static form, infinite wizard, generic onboarding |
| Active-Move | Passive ETA display, monitoring encouragement, no-end states, tracking-first |
| Safety | Tracking-first, surveillance UI, safety theater, alarm inflation |

---

*PATTERNS_V0_1.md — V0.1 Pattern Set for CatchIt — Generated from NON_NEGOTIABLES.md and DESIGNSYSTEM_BRIEF.md — No mockups.*