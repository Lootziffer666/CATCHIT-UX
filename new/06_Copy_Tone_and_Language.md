# 06_Copy_Tone_and_Language

## Purpose
Defines CatchIt’s language discipline, tone by state, tone by anchor, and anti-drift vocabulary.

## Status
Normative system document for CatchIt.

## Scope
- global language rules
- copy tone by state
- copy tone by anchor
- wizard copy rules
- recovery copy rules
- quick change language
- preferred vocabulary
- forbidden vocabulary
- translation sheet
- public-safe wording rules
- anti-drift terminology

## Depends on
- 01_CatchIt_Philosophy
- 02_State_System
- 03_Anchor_System
- 04_Anchor_Transitions_and_Persistence

## Must not redefine
- state semantics
- anchor ownership
- motion system
- component inheritance logic
- screen architecture

## Working rule
This file owns how CatchIt speaks. It must preserve trust, clarity, everyday usability, and public robustness while blocking product-language drift into transit jargon, marketing tone, or error-center speech.

## Authoring rule
This file may clarify, extend, or operationalize earlier files within its scope.
It must not silently rename, replace, or contradict concepts owned by earlier normative files.
If a conflict appears, the earlier higher-priority file remains authoritative unless explicitly superseded.

---

## 1. Core Role of Language in CatchIt

CatchIt’s language is not decoration.
It is part of the product’s operational trust system.

Copy in CatchIt must help the user understand:
- what kind of situation this is
- whether CatchIt is already reacting
- whether the user must act now
- whether a path remains viable
- whether the system is asking, confirming, instructing, or stopping

Language must therefore:
- reduce effort
- reduce ambiguity
- preserve dignity
- remain socially robust
- stay aligned with state semantics

It must not:
- imitate generic transit products
- perform friendliness for its own sake
- overexplain
- dramatize
- or speak in invisible technical abstractions

---

## 2. Core Language Principle

CatchIt copy should feel usable before it feels clever.

This means:
- clarity over cleverness
- truth over positivity theater
- everyday language over interface jargon
- trust over hype
- semantic fit over stylistic flourish

### Rule
If the copy sounds “designed” before it sounds usable, it is probably drifting.

---

## 3. Global Language Rules

### Rule 1
Use everyday language before transport or product jargon.

Prefer:
- “Jetzt losgehen”
- “Noch gut erreichbar”
- “Lieber gehen statt warten”
- “Ich passe das an”

Avoid:
- “Optimize route”
- “intermodal option”
- “priority connection”
- “configuration complete”
- “route recalculated successfully”

---

### Rule 2
Use clarity before positivity.

Prefer:
- “Das bleibt machbar”
- “Ich habe angepasst”
- “Nochmal prüfen”
- “Neue Lösung nötig”

Avoid:
- “Great news!”
- “Awesome”
- “Don’t worry!”
- “Success”

---

### Rule 3
Do not sound like a route optimizer, control center, dashboard, or setup wizard.

Avoid tones such as:
- technical configuration language
- platform setup language
- performance-optimization language
- product onboarding hype
- alert center phrasing

---

### Rule 4
Shorter state = stronger wording.

As urgency increases:
- wording becomes shorter
- language becomes less explanatory
- instruction becomes more direct
- copy should narrow around the most important truth

As urgency decreases:
- language may become slightly broader
- but should never become chatty or ornamental

---

### Rule 5
Public safety matters.

Any text that may appear on:
- public screens
- lockscreen surfaces
- notifications
- shared glances
- voice contexts

must be socially robust and non-exposing by default.

---

## 4. Tone by State

## 4.1 Blue / Idle

### Tone
Calm, low-pressure, quietly informative.

### What the language should do
- reassure without fuss
- make preparation legible
- avoid urgency
- maintain readiness without pressure

### Good examples
- “Spätestens los in”
- “Noch ruhig”
- “Heute passt das”
- “Drei sinnvolle Wege”

### Avoid
- motivational tone
- transit-tool phrasing
- technical status labels
- premature urgency

### Wrong examples
- “No active route”
- “Waiting”
- “You are optimized”
- “Perfect setup”

---

## 4.2 Green / Ready

### Tone
Relevant, viable, quietly confident.

### What the language should do
- raise relevance
- preserve calm
- reinforce that the path remains workable
- avoid “best result” framing

### Good examples
- “Jetzt wird es relevant”
- “Noch gut erreichbar”
- “Passt weiterhin”
- “Gut mit Kind”

### Avoid
- winner language
- optimization language
- sporty urgency
- best-route phrasing

### Wrong examples
- “Best route”
- “Optimal connection”
- “Perfect choice”
- “Fastest option”

---

## 4.3 Yellow / Adapting

### Tone
Responsive, controlled, non-alarmist.

### What the language should do
- make change visible
- show that CatchIt is already reacting
- avoid treating the user as if immediate action is required
- preserve confidence where possible

### Good examples
- “Ich prüfe eine passende Alternative”
- “Geändert, aber noch gut lösbar”
- “Ich passe das an”
- “Noch tragfähig”

### Avoid
- warning language
- risk theater
- “problem detected” phrasing
- pre-Orange action language

### Wrong examples
- “Warning”
- “Alert”
- “Problem erkannt”
- “Jetzt sofort handeln”
- “Diese Route wird instabil”

### Critical rule
Yellow is not a warning tone.
Yellow is a **reaction tone**.

---

## 4.4 Orange / Act Now

### Tone
Direct, active, concise, physically understandable.

### What the language should do
- make the next action unmistakable
- reduce interpretation
- eliminate optionality in the primary phrasing

### Good examples
- “Jetzt losgehen”
- “Zur Haltestelle gehen”
- “Diesen Bus nehmen”
- “Jetzt prüfen”

### Avoid
- politeness padding
- too many conditions
- broad explanatory prose
- CTA-marketing phrasing

### Wrong examples
- “Please consider leaving now”
- “It may be a good time to move”
- “Take action”
- “Act fast!”

### Critical rule
Orange copy should be short enough to be acted on, not interpreted at length.

---

## 4.5 Red / Failed

### Tone
Short, explicit, honest, non-theatrical.

### What the language should do
- stop false viability
- clearly mark that the old path is no longer valid
- create room for rebase without panic

### Good examples
- “Das klappt so nicht mehr”
- “Diesen Anschluss erreichst du nicht mehr”
- “Neue Lösung nötig”

### Avoid
- panic
- apology theater
- generic error-center phrasing
- “warning” labels
- emotional drama

### Wrong examples
- “Critical failure”
- “Oops”
- “Danger”
- “Emergency”
- “Please hurry”

### Critical rule
Red should be final in meaning, not loud in style.

---

## 5. Tone by Anchor

## 5.1 Countdown Anchor Tone

### Must feel
- temporal
- stable
- compact
- quietly operative

### Should do
- state time clearly
- avoid sentence bloat
- remain legible at a glance

### Avoid
- explanatory paragraphs
- soft motivational framing
- decorative labels with weak time meaning

### Good style
- short label + dominant value

---

## 5.2 Instruction Anchor Tone

### Must feel
- active
- clear
- compact
- physically actionable

### Should do
- tell the user what now matters
- prefer verbs over abstractions
- keep the primary line short

### Avoid
- CTA language
- “tap here” product voice
- command-center bark
- multi-step sentence chains

### Good style
- one short command
- optional secondary line only if needed

---

## 5.3 Confirmation Anchor Tone

### Must feel
- calm
- settling
- trust-building
- ordered

### Should do
- close uncertainty
- express coherent continuation
- make re-stabilization visible

### Avoid
- cheerfulness theater
- reward language
- promo optimism
- forced warmth

### Good style
- brief factual reassurance
- optional short rationale

---

## 5.4 Question Anchor Tone

### Must feel
- everyday
- understandable
- low-friction
- non-clinical

### Should do
- ask one thing clearly
- feel like understanding
- avoid test, survey, or settings tone

### Avoid
- “configure”
- “select preference”
- “complete profile”
- diagnostic or evaluative phrasing

### Good style
- one practical question
- simple answer framing

---

## 5.5 Failure Anchor Tone

### Must feel
- direct
- minimal
- final
- honest

### Should do
- end ambiguity
- avoid blame
- avoid melodrama

### Avoid
- “critical”
- “alert”
- “system error”
- “you should have”
- emotional overdrive

### Good style
- one clear statement
- minimal follow-up context

---

## 6. Wizard Copy Rules

The wizard exists to understand the user’s day, not to expose configuration complexity.

Wizard language must feel like:
- guided understanding
- low-friction everyday planning
- support for real-life movement

Wizard language must not feel like:
- setup software
- settings menus
- diagnostics
- profile optimization
- forms administration

### Good question examples
- “Hängt heute noch mehr dran?”
- “Bist du heute eher langsam unterwegs?”
- “Willst du lieber gehen statt warten?”
- “Ist ein Kind dabei?”

### Bad question examples
- “Welche Mobilitätspräferenzen möchten Sie konfigurieren?”
- “Bitte wählen Sie Ihr Transferprofil”
- “Optimieren Sie Ihre Warte-/Gehzeitbalance”
- “Complete your setup”

### Rule
A CatchIt wizard question should feel like help, not configuration.

---

## 7. Recovery Copy Rules

Recovery copy is especially sensitive because it directly affects trust.

Recovery language must:
- explain change without drama
- preserve confidence where justified
- make the next coherent path visible
- stay compact

Recovery language must not:
- sound like an error center
- over-celebrate adjustments
- expose system internals
- create unnecessary alarm

### Good examples
- “Ich habe auf eine passendere Verbindung gewechselt”
- “Das bleibt machbar”
- “Nochmal prüfen”
- “Ich habe die Kette angepasst”

### Bad examples
- “Error detected”
- “Route recalculated successfully”
- “Good news!”
- “System fallback initiated”

### Rule
Recovery should sound like composure under change, not technical exception handling.

---

## 8. Quick Change Copy Rules

Quick Change language must remain light.

It should communicate:
- local flexibility
- preserved chain coherence
- manageable consequence

### Good examples
- “Kurze Pause geht noch”
- “Mit dem späteren Bus bleibt es ruhig”
- “Snack geht, der Rückweg bleibt machbar”
- “Das passt noch in die Kette”

### Bad examples
- “Modify itinerary”
- “Reschedule route”
- “Update travel configuration”
- “Recalculate all legs”

### Rule
Quick Change should feel like a gentle adjustment, not a planning reboot.

---

## 9. Public-Safe Language Rules

CatchIt must distinguish between:
- public-safe system language
- optional private meaning

### Product rule
Public surface neutral, private meaning optional.

### Good default categories
- “Arzttermin”
- “Besorgung”
- “Zwischenstopp”
- “Rückweg”
- “Heimweg”
- “Nächstes Ziel”

### Bad defaults
- intimate medical specifics
- embarrassing contextual labels
- auto-exposed calendar titles
- inferred private details spoken aloud
- “magical” naming that feels intrusive

### Rule
Neutral naming is not a loss of value.
It is a trust and dignity feature.

---

## 10. Preferred Vocabulary

The following vocabulary better fits CatchIt’s system language.

### Prefer
- viable option
- suitable option
- preference-shaped option
- chain-aware proposal
- lower reveal
- spatial assist
- trust signal
- chain context
- recheck
- simple switch
- chain adjusted
- calm truth condensation
- next meaningful step

### Prefer in German UI
- tragfähige Option
- passende Option
- nächste sinnvolle Verbindung
- Rückweg
- Zwischenstopp
- jetzt losgehen
- noch gut erreichbar
- ich passe das an
- neue Lösung nötig

---

## 11. Forbidden or High-Risk Vocabulary

The following vocabulary strongly risks generic product drift.

### Avoid
- best route
- fastest route
- route results
- comparison page
- optimize
- configuration complete
- dashboard
- bottom sheet
- success
- alert
- warning
- critical
- route recalculated
- modify itinerary
- journey planner
- smart recommendations
- perfect route
- high priority route

### Avoid in German UI
- optimale Route
- beste Verbindung
- Warnung
- kritisch
- Konfiguration abgeschlossen
- Route neu berechnet
- Dashboard
- Formular
- Setup
- Nutzerprofil

### Rule
If a term pushes CatchIt toward a standard transit, settings, or error-center mental model, avoid it.

---

## 12. Translation Sheet Principle

When the user uses industry-standard transit or product wording, CatchIt should reinterpret the request internally before responding.

### Example translations

| Risky input idea | Generic interpretation | CatchIt interpretation |
|---|---|---|
| best route | route ranking | most viable option now |
| compare routes | results comparison | unpack the few viable options |
| map screen | navigation page | spatial assist state |
| bottom sheet | overlay panel | lower reveal support layer |
| settings | technical configuration | guided understanding of movement reality |
| result list | search output | preference-shaped option cluster |
| critical state | generic alert | either Act Now or Failed, depending on viability |

### Rule
CatchIt does not mirror generic wording back uncritically.
It translates it into system-coherent meaning.

---

## 13. Copy Length Rules

### Primary anchor copy
- ideally one short line
- maximum two lines

### Support copy
- usually 2–6 words
- highly scannable
- avoid full sentences unless needed

### Recovery explanation
- one short main sentence
- optional one short secondary line

### Wizard question
- one question
- no double-question default
- no nested condition logic in the main line

### Failure copy
- as short as possible
- no justification paragraphs
- no rhetorical softening

### Rule
If the user must read too much to know what kind of situation this is, the copy has failed.

---

## 14. Cross-Modal Language Consistency

Copy must reinforce the same truth that:
- the anchor leads
- the state semantically defines
- density makes visible
- motion expresses through change

### Correct combinations
- countdown + calm copy = temporal clarity
- instruction + short active copy = action clarity
- confirmation + settled copy = trust continuity
- question + low-friction copy = guided input
- failure + explicit minimal copy = finality clarity

### Conflicts to avoid
- calm countdown + urgent phrasing
- instruction anchor + explanatory paragraph overload
- confirmation anchor + celebratory tone
- failure anchor + reassuring fluff
- yellow adapting + warning-style copy

### Rule
If the copy sounds like a different state or anchor than the rest of the screen, language drift has occurred.

---

## 15. Copy Drift Warnings

### Drift 1 — Transit jargon drift
The product starts sounding like a route optimizer or journey planner.

### Drift 2 — Marketing drift
The product sounds like onboarding copy, product hype, or app store language.

### Drift 3 — Error-center drift
Recovery and failure sound like technical alerts.

### Drift 4 — Friendly-but-empty drift
The system sounds warm but says too little.

### Drift 5 — Over-explanatory drift
Urgent screens force too much reading.

### Drift 6 — Public exposure drift
Language becomes too private or too specific in publicly visible contexts.

---

## 16. Review Questions

When reviewing copy, ask:

1. Does this wording fit the state semantics?
2. Does it fit the current anchor type?
3. Would a stressed user understand it quickly?
4. Is it shorter than it needs to be?
5. Does it sound like CatchIt rather than a transit app, setup wizard, or alert center?
6. Is it publicly robust if seen by others?
7. Does it preserve trust without fake positivity?
8. Would this still make sense if the color were removed?

If the answer is unclear, the copy is not yet system-correct.

---

## 17. Compact Summary

CatchIt language must be:
- state-aware
- trust-aware
- everyday-usable
- socially robust
- low-friction
- semantically aligned

### Core principles
- clarity over cleverness
- truth over positivity theater
- everyday language over transit jargon
- short language for urgent states
- neutral public wording by default
- anti-drift translation of generic product language

This file is the main defense against:
- transit-language drift
- setup-language drift
- recovery/error-center drift
- public-exposure drift
- and friendliness without semantic usefulness

## Final Rule
If a later document, mockup, prompt, or implementation shortcut weakens semantic clarity in language, this file remains authoritative.
