# DESIGN_SYSTEM_V0_1 — CatchIt Design System Architecture

## Purpose

This document is the primary V0.1 design system architecture for CatchIt — a decision-relief and reassurance system for public mobility.

This is not a visual polish layer. It is a semantic, state-based foundation that makes CatchIt buildable by someone with strong product intuition but limited formal design training.

---

## 1. Design System North Star

### North Star Statement

> A good system does not force people to function better. It functions better for people.

### What This Means for the Design System

CatchIt's design system exists to:
- Reduce cognitive load instead of exposing raw data
- Make truth visible without requiring interpretation
- Express state clearly so users know what to do and when to do it
- Support calm under stress, low energy, and bad-day conditions
- Enable fallback communication when uncertainty increases
- Preserve trust through honesty, not through false reassurance

The system optimizes for action clarity, trustworthiness, semantic consistency, and low interpretation cost. This is not a generic UI kit. It is a state-expression system where the same travel truth can be compressed differently across UX layers.

---

## 2. Hard Design Principles

These principles are product-specific. They are not generic design slogans. They emerge from CatchIt's reality.

### Principle 1: Planning Horror is a Service Problem

**Explanation:** Users should not have to reconstruct the same travel plan every time. The system must remember context, reduce repeated effort, and compress the planning burden.

**Practical Implications:**
- Design for continuity across sessions
- Pre-fill known parameters (home, work, frequent routes)
- Never make users rebuild from scratch without reason

### Principle 2: Load Reduction Over Data Exposure

**Explanation:** Showing more data does not help users make better decisions. Showing the right data at the right time does.

**Practical Implications:**
- One dominant information layer per moment
- Hide intermediate steps until requested
- Use compression layers (Orientation, Comparison, Transition, Execution)

### Principle 3: One Dominant Action Layer Per Moment

**Explanation:** Users should never face more than one meaningful decision at a time. Multiple options create paralysis, not empowerment.

**Practical Implications:**
- Clear primary action CTA
- Secondary actions de-emphasized but accessible
- Never show more than one decision tree at once

### Principle 4: Truth Before Comfort

**Explanation:** Reassurance must never come from concealment. If the system does not know something, it must say so. False calm destroys trust.

**Practical Implications:**
- Status uncertainty must be communicated honestly
- Do not mask real delays or disruptions
- Say "I don't know" rather than fake precision

### Principle 5: Semantic Compression Over Visual Smoothing

**Explanation:** Compression is about removing unnecessary cognitive load, not about making things look cleaner. The goal is not beauty — it is meaning reduction.

**Practical Implications:**
- Remove words that add no new information
- Stack relevant data, don't spread it
- Use progressive disclosure, not progressive hiding

### Principle 6: Mode Separation is Structural

**Explanation:** Plan, Go, and Recovery are not stylistic variations. They are different cognitive modes requiring different information densities.

**Practical Implications:**
- Never collapse modes into one surface
- Each mode has its own information hierarchy
- Design distinct transitions between modes

### Principle 7: Alternatives Have Roles, Not Options

**Explanation:** Alternatives are not flat choices labeled "Option A, Option B." They are semantically differentiated paths.

**Practical Implications:**
- Name alternatives by role: best choice, calm reserve, fallback
- Never present as equal cards
- Rank by semantic priority, not alphabetically

### Principle 8: Waiting Is Not Neutral

**Explanation:** Waiting without information is active harm. Waiting with understanding is acceptable. The system must never create meaningless waiting.

**Practical Implications:**
- Explain why users are waiting
- Offer meaningful alternatives during wait
- Prioritize action over ETA display

### Principle 9: Bad-Day Resilience Over Ideal-Day Polish

**Explanation:** The system must work when users are stressed, tired, overloaded, or caring for children. Good-day polish is irrelevant if the system fails under pressure.

**Practical Implications:**
- Optimize for low interpretation cost
- Design for low bandwidth and high stress
- Test states under fragmentation and distraction

### Principle 10: Safety Without Surveillance

**Explanation:** Safety features must not become surveillance UX. Trust-based, escalation-aware, low-stigma.

**Practical Implications:**
- Status-based safety, not tracking-first
- User remains in control
- No alarm inflation or theater

### Principle 11: State Visibility Over Process Visibility

**Explanation:** Users need to know what state they are in, not what process step they are at. State is about the user's reality. Process is about the system's logic.

**Practical Implications:**
- Make product state (stable, attentive, fragile) visible
- Hide system process details unless relevant
- Align with user reality, not internal flow

### Principle 12: Low Interpretation Cost

**Explanation:** Every element that requires interpretation is cognitive load. The system must minimize the cost of understanding.

**Practical Implications:**
- Icon + text redundancy (never icon alone for critical meaning)
- Clear hierarchy reduces scanning cost
- Touch targets sized for stress conditions

### Principle 13: Cathy Is a UX Layer, Not a Mascot

**Explanation:** Cathy is the humane translation layer. She is peripheral in stability, closer in uncertainty, large only in transition. She does not replace truth.

**Practical Implications:**
- Never dominant next to critical action content
- Does not speak if visual state communicates enough
- Does not emotionalize where precision matters more

### Principle 14: Consistency Is the Primary Quality Metric

**Explanation:** In V0.1, consistency matters more than beauty. A non-designer must be able to apply the system and produce coherent results.

**Practical Implications:**
- Strict token rules
- Clear component dependencies
- Pattern-based reuse rather than intuition

---

## 3. State Taxonomy

### Product States

These are the core states the design system must express:

| State | Meaning | UX Priority |
|-------|---------|--------------|
| Stable | Everything is working as expected | Low information density |
| Attentive | User needs to monitor something | Increase visibility of monitored value |
| Fragile | User is stressed or overloaded | Reduce load, increase clarity |
| Recheck Needed | User must verify something | Make verification easy |
| Fallback Ready | System has a safe option | Make fallback obvious |
| Act Now | User must take action immediately | Single clear call to action |
| Wait | User should not act yet | Explain why, offer alternatives |
| Observe | User should watch and learn | Show what changed and why |
| Completed | User has finished their task | Confirm completeness, offer next step |

### Interaction States

These states govern component behavior:

| Interaction State | Meaning |
|------------------|---------|
| Default | Available for interaction |
| Hover | Targetable, awaiting input |
| Active | Currently being used |
| Disabled | Not available |
| Loading | Awaiting response |
| Error | Needs correction |

### Visual Intensity / Urgency

Visual intensity must map to semantic urgency:

- **Low intensity (stable, completed):** Calm presentation, minimal emphasis
- **Medium intensity (attentive, observe):** Clear presentation, moderate emphasis
- **High intensity (act now, error):** Bold presentation, high emphasis
- **Recovery intensity (recheck needed, fallback ready):** Warm presentation, accessible emphasis

The system must never use color as the sole carrier of critical meaning. Always combine color + icon + text for state-critical information.

---

## 4. Compression-Mode / UX-Layer Model

CatchIt supports multiple compression layers of the same truth. Each layer serves a different user need.

### Layer 1: Orientation

**Purpose:** Help users understand their current context and whether they need to act.

**User Need:** "Where am I? Do I need to do anything?"

**Information Density:** Very low. One to three pieces of critical information.

**Action Model:** Passive. Show current state, hide alternatives until requested.

**What to Show:** Current status, next meaningful action threshold, time until action needed.

**What to Hide:** Alternative routes, detailed schedules, technical parameters.

**Dominant Element:** State indicator.

---

### Layer 2: Comparison

**Purpose:** Help users understand the meaningful differences between alternatives.

**User Need:** "What are my options? Which one fits my situation?"

**Information Density:** Medium. One to three alternatives with clear differentiation.

**Action Model:** Evaluative. Show role-based alternatives, hide irrelevant options.

**What to Show:** Alternative roles (best, reserve, fallback), key differentiators, decision-relevant time thresholds.

**What to Hide:** Technical details, provider information, raw schedules.

**Dominant Element:** Alternative cards with semantic roles.

---

### Layer 3: Transition

**Purpose:** Guide users from one state to another with clarity.

**User Need:** "What happens next? Am I ready?"

**Information Density:** Low to medium. Focus on progress, not complexity.

**Action Model:** Wizard-based. Sequential steps, no backtracking to parameter creation.

**What to Show:** Current step, what is needed next, confirmation of progress.

**What to Hide:** Full route details, unrelated options, system process.

**Dominant Element:** Progress indicator + next step.

---

### Layer 4: Execution

**Purpose:** Support the user in taking action with confidence.

**User Need:** "Go. Help me do this."

**Information Density:** Very low. Single action, single target.

**Action Model:** Single call to action. No distractions.

**What to Show:** What to do, when to do it, what happens after.

**What to Hide:** Alternatives, other routes, non-critical status.

**Dominant Element:** Action button / confirmation.

---

### Layer 5: Reassurance / Recovery

**Purpose:** Provide comfort when things go wrong or when users are uncertain.

**User Need:** "What do I do now? Is this okay?"

**Information Density:** Low. Clarity over completeness.

**Action Model:** Single path forward. Reduce options in stress.

**What to Show:** What happened, what to do next, backup option.

**What to Hide:** Blame, excessive detail, unrelated alternatives.

**Dominant Element:** Recovery prompt or fallback option.

---

## 5. Semantic Token Architecture

Tokens are organized by semantic function, not by visual output.

### Token Family: State

**Purpose:** Express the user's current product state.

**Values:** stable, attentive, fragile, recheck-needed, fallback-ready, act-now, wait, observe, completed

**UI Influence:** Hierarchy, information density, emphasis level.

---

### Token Family: Urgency

**Purpose:** Express how soon the user must act.

**Values:** none (no action needed), low (action can wait), medium (action soon), high (act now), critical (emergency)

**UI Influence:** Visual intensity, animation speed, attention weight.

---

### Token Family: Confidence

**Purpose:** Express how certain the system is about its information.

**Values:** certain, likely, uncertain, unknown

**UI Influence:** Language tone, status visibility, fallback prominence.

---

### Token Family: Actionability

**Purpose:** Express whether the user is in a state that requires action.

**Values:** passive (monitor only), reactive (respond to changes), proactive (initiate), decisive (finalize)

**UI Influence:** CTA prominence, alternative visibility, confirmation prompts.

---

### Token Family: Fallback Availability

**Purpose:** Express whether safe alternatives exist.

**Values:** available, limited, exhausted, unknown

**UI Influence:** Fallback prominence, reassurance messaging, recovery flow.

---

### Token Family: Attention Weight

**Purpose:** Control how much visual attention an element demands.

**Values:** minimal (background), subtle (secondary), moderate (noticeable), high (primary), urgent (immediate)

**UI Influence:** Size, contrast, color saturation, position.

---

### Token Family: Emphasis

**Purpose:** Control textual and structural emphasis.

**Values:** neutral, subtle, moderate, strong

**UI Influence:** Font weight, text size, structural hierarchy.

---

### Token Family: Completion

**Purpose:** Express how complete a process or state is.

**Values:** not-started, in-progress, near-complete, completed, failed

**UI Influence:** Progress indicators, next-step prompts, confirmation messaging.

---

### Token Family: Motion Tone

**Purpose:** Express the emotional quality of motion.

**Values:** calm (stable state), active (transition), alert (attention needed), reassuring (recovery), urgent (immediate action)

**UI Influence:** Animation duration, easing, direction.

---

## 6. Foundation Proposal (V0.1 Practical Defaults)

These are practical defaults for V0.1. They are not final brand choices. They are buildable defaults.

### Color

| Role | Purpose | Hex (Light Mode) | Hex (Dark Mode) |
|------|---------|-----------------|-----------------|
| Primary | Main actions, key state | #2563EB | #3B82F6 |
| Success | Stable state, completion | #16A34A | #22C55E |
| Warning | Attentive state, caution | #D97706 | #F59E0B |
| Error | Act now, failure | #DC2626 | #EF4444 |
| Background | Surface background | #FFFFFF | #0F172A |
| Surface | Cards, containers | #F8FAFC | #1E293B |
| Text Primary | Main text | #0F172A | #F1F5F9 |
| Text Secondary | Supporting text | #475569 | #94A3B8 |
| Border | Dividers, outlines | #E2E8F0 | #334155 |

**Constraint:** Color is never the sole carrier of critical meaning. Use icon + text + color together.

---

### Typography

**Font:** System font stack (use system defaults).

| Style | Size | Weight | Line Height | Use Case |
|-------|------|--------|-------------|---------|
| Display | 32px | Bold (700) | 1.2 | Mode headers |
| Heading 1 | 24px | SemiBold (600) | 1.3 | Section titles |
| Heading 2 | 20px | SemiBold (600) | 1.4 | Card titles |
| Body | 16px | Regular (400) | 1.5 | Primary content |
| Caption | 14px | Regular (400) | 1.4 | Secondary content |
| Label | 12px | Medium (500) | 1.3 | Labels, tags |

**Constraint:** Never rely on font size alone for hierarchy. Combine with weight, spacing, and color.

---

### Spacing

Base unit: 4px.

| Token | Value | Use Case |
|-------|-------|----------|
| xs | 4px | Tight inline spacing |
| sm | 8px | Icon + text, inline elements |
| md | 16px | Default padding, component gaps |
| lg | 24px | Section padding, card gaps |
| xl | 32px | Major section gaps |
| 2xl | 48px | Screen padding, large gaps |

**Constraint:** Never use arbitrary spacing. Always use token values.

---

### Shape

| Token | Value | Use Case |
|-------|-------|----------|
| none | 0px | No rounding |
| sm | 4px | Buttons, inputs |
| md | 8px | Cards, containers |
| lg | 12px | Modals, overlays |
| full | 9999px | Pills, avatars |

**Constraint:** Keep shape simple. Larger shape = more elevated.

---

### Motion

| Token | Duration | Easing | Use Case |
|-------|----------|--------|---------|
| fast | 150ms | ease-out | Micro-interactions |
| normal | 250ms | ease-in-out | State transitions |
| slow | 400ms | ease-in | Page transitions |
| reveal | 300ms | ease-out | Showing new elements |

**Constraint:** Motion must support state change, not attract attention. No decorative animation.

---

### Iconography

**Style:** Line icons, consistent stroke width (1.5px or 2px).

**Sizes:** 16px (small), 24px (medium), 32px (large).

**Constraint:** Icons must have text labels for critical meaning. Icon-only is acceptable only for decorative or universally understood icons (close, menu).

---

## 7. Initial Component Inventory

These are the strict V0.1 components. Each justifies its existence.

### Zen Shell

**Purpose:** The calm, state-adaptive main surface that wraps all content.

**When It Appears:** Always. The shell contains all other components.

**Semantic Dependencies:** state, attention-weight, motion-tone.

**Variants:** Full screen, partial screen.

---

### Primary Time Block

**Purpose:** Display the next meaningful time threshold.

**When It Appears:** In modes where time is the primary decision factor.

**Semantic Dependencies:** state, urgency, completion.

**Variants:** With countdown, without countdown.

---

### Primary Connection Card

**Purpose:** Show the best choice for the user's current context.

**When It Appears:** During comparison and selection.

**Semantic Dependencies:** state, confidence, actionability.

**Variants:** Default, selected, unavailable.

---

### Alternative Card

**Purpose:** Show role-based alternatives (reserve, fallback).

**When It Appears:** When alternatives exist beyond the primary choice.

**Semantic Dependencies:** actionability, fallback-availability.

**Variants:** Reserve, fallback, unavailable.

---

### Transition Object / Step Accordion

**Purpose:** Guide the user through wizard flows.

**When It Appears:** During transitions between modes.

**Semantic Dependencies:** completion, motion-tone.

**Variants:** Current step, completed step, upcoming step.

---

### Recovery Card

**Purpose:** Provide fallback when the primary path fails.

**When It Appears:** When the user is in a fragile state or when disruption occurs.

**Semantic Dependencies:** state, fallback-availability, confidence.

---

### Reassurance Element

**Purpose:** Communicate system status without requiring action.

**When It Appears:** When the user is in a stable state and monitoring is sufficient.

**Semantic Dependencies:** state, confidence.

---

### Wizard Prompt Unit

**Purpose:** Single input in a wizard flow.

**When It Appears:** During planning and transition flows.

**Semantic Dependencies:** completion, actionability.

---

### Mode Header / State Header

**Purpose:** Indicate the current mode and state.

**When It Appears:** Always visible at the top of the screen.

**Semantic Dependencies:** state.

**Variants:** Plan mode, Go mode, Recovery mode.

---

### Cathy Container

**Purpose:** The surface for Cathy's expression layer.

**When It Appears:** When Cathy has something to communicate.

**Semantic Dependencies:** state, confidence, urgency.

**Constraint:** Never dominant next to critical action. Does not speak if visual state communicates enough.

---

### Low-Noise Action Controls

**Purpose:** Actions that do not create interpretation load.

**When It Appears:** When secondary actions are needed but should not distract.

**Semantic Dependencies:** emphasis.

**Variants:** Icon-only (rare), text-only (preferred), icon + text (standard).

---

## 8. Reusable Patterns

### Planning Pattern

**Problem:** Users should not have to reconstruct travel context every time.

**What to Show:** Pre-filled context, next suggested action, one wizard step at a time.

**What to Hide:** Full route details, all alternatives at once, technical parameters.

**Anti-Pattern:** Presenting a blank form with no context. Showing all options simultaneously.

**Semantic Core:** Compress context, reveal progressively.

---

### Comparison Pattern

**Problem:** Users face option paralysis when presented with flat choices.

**What to Show:** Role-based alternatives (best, reserve, fallback), key differentiators, time thresholds.

**What to Hide:** Technical details, provider logos, raw schedules, alphabetical sorting.

**Anti-Pattern:** Equivalent cards with equal visual weight. Showing all data points equally.

**Semantic Core:** Differentiate by role, not by listing.

---

### Transition Pattern

**Problem:** Users need clarity during mode changes.

**What to Show:** Progress indicator, current step, what comes next, confirmation of what was done.

**What to Hide:** Full process map, all future steps, system logic.

**Anti-Pattern:** Showing all steps at once. Allowing backtracking to parameter inputs.

**Semantic Core:** Sequence, don't parallelize.

---

### Execution Pattern

**Problem:** Users need single-path confidence when acting.

**What to Show:** Single action, clear target, confirmation, what happens after.

**What to Hide:** All alternatives, other routes, non-essential status.

**Anti-Pattern:** Multiple CTAs. Showing options at the moment of action.

**Semantic Core:** One action, one target, no distraction.

---

### Reassurance Pattern

**Problem:** Users need comfort without false calm.

**What to Show:** Honest status, what it means for the user, what to do next.

**What to Hide:** Blame, excessive technical detail, irrelevant alternatives.

**Anti-Pattern:** False optimism. Hiding uncertainty. Using cheerful language to mask problems.

**Semantic Core:** Honesty first.

---

### Recovery Pattern

**Problem:** Users need clear paths forward when things go wrong.

**What to Show:** What happened (brief), single recovery path, fallback option.

**What to Hide:** Root cause detail, blame, other failure modes.

**Anti-Pattern:** Blame language. Showing multiple recovery paths during stress. Hiding the fallback.

**Semantic Core:** One path forward, fallback available.

---

### Wizard Flow Pattern

**Problem:** Users should express intentions, not configure routes.

**What to Show:** Questions about context (where, when, how, what next), not parameters.

**What to Hide:** Technical options, profile settings, provider selection.

**Anti-Pattern:** Starting with route selection. Showing parameter inputs. Making it feel like profile configuration.

**Semantic Core:** Intentions over parameters.

---

## 9. Zen / Cathy Coupling Rules

Cathy and Zen are two expression layers of the same state truth. They are not competing surfaces.

### Mapping Rule 1

- Zen expresses the state through visual presentation (color, hierarchy, density, motion)
- Cathy expresses the state through humane translation (language, proximity, size, tone)

### Mapping Rule 2

- In Stable state: Zen is calm. Cathy is peripheral.
- In Attentive state: Zen increases visibility. Cathy is closer.
- In Fragile state: Zen reduces load. Cathy provides reassurance.
- In Act Now state: Zen is urgent. Cathy is minimal.

### Mapping Rule 3

- Cathy must never be dominant next to critical action content
- When the user must act, the action is primary. Cathy is secondary.
- Cathy does not speak if visual state communicates enough.

### Mapping Rule 4

- Cathy must not emotionalize where precision matters more
- When accuracy is critical (timing, status, disruption), Cathy stays factual
- Emotional expression is appropriate in reassurance, not in critical status

### Mapping Rule 5

- Both layers map to the same semantic state model
- State.urgent = high (for Act Now) means both Zen and Cathy reflect urgency
- The layers are synchronized, not independent

### What Zen Expresses Alone

- Color and visual hierarchy
- Density of information
- Motion tone
- Layout structure

### What Cathy Expresses Alone

- Translation of status into language
- Contextual suggestions
- Reassurance in fragile states
- Transition guidance

### What They Never Conflict On

- Critical status (stable, disruption, act now)
- Action requirements
- Fallback availability
- Time-critical information

---

## 10. Documentation Structure for Figma / Code

### Suggested Sections

1. **Principles** — The 14 hard design principles, each with title, explanation, and examples.

2. **State Model** — Product states, interaction states, visual intensity mapping. Reference for all component state logic.

3. **Semantic Tokens** — Token families, values, and usage rules. The semantic layer that drives all decisions.

4. **Foundations** — Color palette, typography scale, spacing scale, shape scale, motion defaults, icon rules.

5. **Components** — Individual component specs with purpose, variants, required tokens, and behavior rules.

6. **Patterns** — Reusable patterns for planning, comparison, execution, reassurance, recovery, wizard flows.

7. **Mode Rules** — Plan mode, Go mode, Recovery mode specifications. What each mode shows and hides.

8. **Zen / Cathy Mapping** — The coupling rules. How Zen and Cathy express the same state together.

9. **Accessibility Rules** — Low interpretation cost rules, color independence, touch targets, focus states.

10. **Open Questions / Future Expansion** — Known uncertainties, items to resolve in V0.2+.

### Figma File Structure

- Page 1: Principles (text only)
- Page 2: Foundations (color, type, spacing, shape, motion)
- Page 3: Tokens (semantic token reference)
- Page 4: Components (component specs)
- Page 5: Patterns (pattern flows)
- Page 6: States (state model reference)
- Page 7: Zen/Cathy (coupling rules)
- Page 8: Accessibility (rules and checklist)

### Code Structure

```
/tokens
  /semantic
    state.json
    urgency.json
    confidence.json
    actionability.json
    ...
  /foundation
    color.json
    typography.json
    spacing.json
    shape.json
    motion.json
/components
  /shell
  /timeblock
  /connectioncard
  /alternatives
  ...
/patterns
  /planning
  /comparison
  /execution
  ...
/modes
  /plan
  /go
  /recovery
```

---

## Open Questions / Risks / Next Steps

### Open Questions

1. **Font selection:** System font stack is a practical default, but final brand typography is not yet determined. Need brand input for V0.2.

2. **Color palette refinement:** V0.1 uses accessible, neutral defaults. Final brand colors may shift emphasis in light mode.

3. **Cathy personality guidelines:** The system defines when Cathy speaks and is quiet, but tone guidelines (factual vs. warm) need refinement.

4. **Dark mode contrast ratios:** Dark mode defaults are provided, but full WCAG compliance verification needed in V0.2.

5. **Motion library expansion:** V0.1 provides durations and basic easings. A fuller motion library for specific states is a V0.2 priority.

### Risks

1. **Non-designer interpretability:** The system assumes strong product intuition. May need more explicit rules if applied without product guidance.

2. **State taxonomy completeness:** The 9 product states cover core scenarios, but edge cases (multi-step transitions, concurrent alerts) need more work.

3. **Recovery state coverage:** Recovery patterns are defined but may not cover all disruption scenarios.

### Next Steps

1. **Validate foundation with build:** Use these defaults to build one real screen and verify they work.

2. **Expand component variants:** V0.1 includes minimal variants. Real use will surface needed additions.

3. **Refine token values:** The semantic tokens define families but not all specific values. Real use will refine.

4. **Create Figma documentation:** Transfer this structure into a real Figma file.

5. **Establish code token exports:** Map to code token system (CSS variables, design tokens).

6. **Accessibility audit:** Run full audit against WCAG guidelines to verify assumptions.

7. **Test with user states:** Validate state model against real user scenarios (stressed, tired, with children).

---

*End of DESIGN_SYSTEM_V0_1 — CatchIt Design System Architecture V0.1*