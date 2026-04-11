Your job is to go as far as possible without asking for clarification unless you are truly blocked by missing source material.
Work iteratively, make progress step by step, and keep refining the output based on the repo docs.

Repository truth:
CatchIt is not a classic transit app or timetable viewer.
It is a decision-relief and reassurance system for public mobility.
Its goal is to compress mobility truth so that people plan less, doubt less, check less, and understand more clearly when they must act and when they do not need to act.

Read these files first and treat them as the source of truth, in this order:
1. README.md
2. docs/DESIGNSYSTEM_BRIEF.md
3. docs/NON_NEGOTIABLES.md
4. docs/EXPECTED_OUTPUTS.md
5. docs/CONSTRAINTS.md
6. docs/REFERENCES.md

If any reference conflicts with CatchIt’s own product truth, CatchIt wins.

Hard constraints:
- Do not create polished mockups
- Do not invent a new product direction
- Do not drift into generic transit UI
- Do not default to Material, iOS, dashboard, or SaaS patterns
- Do not focus on CatchIt2gather
- Do not treat Zen as just a blue screen
- Do not treat Cathy as a mascot or branding device
- Start semantic, not visual
- Keep scope strict, small, and V0.1-friendly
- Optimize for consistency, accessibility, low interpretation cost, and bad-day usability
- Make the result usable by a non-designer

Mode logic that must be preserved:
- Plan Mode
- Go Mode
- Recovery Mode

UX layers that must be preserved:
- Orientation
- Comparison
- Transition
- Execution
- Reassurance / Recovery

Zen/Cathy truth that must be preserved:
- Zen is the calm, state-adaptive main expression of the core
- Cathy is the humane translation layer, not the travel truth itself
- Cathy states already exist
- Cathy and Zen are coupled expression layers of the same state truth

Autonomous work loop:
1. Read source docs carefully
2. Extract product truths and constraints
3. Build the architecture
4. Self-check against the non-negotiables
5. Improve weak sections
6. Continue until you have pushed the work as far as reasonably possible

Primary output path:
output/run_a/DESIGN_SYSTEM_V0_1.md

After the primary file is solid, continue as far as possible and create supporting files if useful:
- output/run_a/TOKENS_V0_1.md
- output/run_a/COMPONENTS_V0_1.md
- output/run_a/PATTERNS_V0_1.md
- output/run_a/NEXT_STEPS.md

Required structure for the primary output:
1. Design system north star
2. 10–15 hard design principles
3. State taxonomy
4. Compression-mode / UX-layer model
5. Semantic token architecture
6. Foundation proposal for color, typography, spacing, shape, motion, iconography
7. Initial component inventory
8. Reusable patterns
9. Zen / Cathy coupling rules
10. Documentation structure for Figma and/or code

Quality bar:
- Prefer semantic rigor over visual polish
- Explain why each recommendation fits CatchIt specifically
- Avoid filler and moodboard language
- Produce a real, usable architecture draft
- If uncertain, choose the more product-logical and semantically strict option
- Before finishing, write open questions, risks, and next steps instead of stopping early
- 
