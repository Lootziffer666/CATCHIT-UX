CatchIt Translation Sheet for Stitch
Purpose

This sheet exists to prevent Stitch from translating CatchIt into conventional transit-app UI.

CatchIt is not a route-ranking app, not a map-first app, and not a standard results-list app.
Its interface must be interpreted through:

preference-shaped mobility relief
truth condensation
suitability over raw speed
same-screen state changes
spatial reassurance only when needed
Core Rule

When a request sounds similar to a known mobility-app pattern, do not default to that pattern.

Especially avoid automatically translating CatchIt into:

fastest-route ranking
route-results list
bottom sheet
map details page
navigation screen
generic route comparison UI
card-stack dashboard
transit search results

CatchIt should instead be interpreted as:

a calm main state with only a few already-filtered options
those options being shaped by user preferences gathered through a wizard
details being shown as unpacking of the same options
map support appearing only as contextual spatial reassurance
additional information appearing without changing the app into a generic transit product
1. Product Interpretation
What CatchIt is

CatchIt is a decision-relief and reassurance system for public mobility.

It does not aim to show all possible routes.
It does not aim to compute a universal best route.

It aims to reduce planning burden and doubt by surfacing only a few person-compatible, situation-compatible options.

What CatchIt is not

CatchIt is not:

a generic route search app
a “best route” engine
a list of search results
a dashboard of transport modules
a map-centric navigation UI
a route-optimization control center
a parameter/settings-heavy planner
2. Translation Rule
If the user says this…

…do not automatically interpret it like this.

User intent / wording	Wrong default interpretation	Correct CatchIt interpretation
“three lines”	search results	three already-filtered suitable options
“compare”	transit results list	suitability unpacking of the same three options
“details”	route details page	deeper explanation of the same proposed options
“map”	map screen	spatial assistance layer
“swipe up”	bottom sheet	same-screen lower reveal
“better route”	fastest route	more suitable / more robust / more fitting
“settings replacement”	hidden advanced filters	wizard-based preference modeling
“best connection”	objective ranking	preference-shaped proposal, context dependent
3. Forbidden Vocabulary

These words and patterns tend to force Stitch into generic transit UI.

Avoid these terms in interpretation
best route
fastest connection
route results
search results
route picker
compare routes
map details
bottom sheet
navigation screen
route recommendation engine
optimize my path
route card stack
dashboard
trip results page
transit results screen
filters panel
advanced settings
Avoid these UI defaults
fullscreen map
dominant map hero
stacked cards with unrelated modules
bottom sheet handle
generic CTA-heavy route screen
list of many route entries
one objectively “best” route at the top
score/rank based route ordering
visible settings jungle
4. Preferred Vocabulary

Use these terms instead when interpreting CatchIt.

Product logic
preference-shaped options
suitable options
viable options
today-sensible options
preference-compatible proposals
everyday-usable mobility options
friction-aware suggestions
UI/state logic
same screen
same hierarchy
condensed state
unpacked option state
spatial assist state
lower reveal
integrated map support
calm truth condensation
suitability cues
preference-based explanation
User-centered mobility logic
less waiting
easier with child
calmer route
shorter walk
more buffer
lower transfer stress
better today
more robust if delayed
fits current movement reality
5. CatchIt Terminology

Use the following terms as the primary working vocabulary.

Main State

The calm primary screen with:

countdown bubble
three preference-shaped options
minimal information density
no route list
no visible map
Preference-Shaped Options

The three shown lines are not raw route results.
They are already filtered according to the user’s mobility preferences and life constraints.

Option Unpacking

A second state reached by tapping the options.
This is not a generic results screen.
It is a clearer explanation of the same three proposed options.

Suitability Cues

Compact cues that explain why an option is shown, for example:

less waiting
easier with child
shorter walk
calmer route
more reliable today
lower stress transfer
Spatial Assist State

A denser version of the main state in which the lower area reveals map support.
The purpose is reassurance and orientation, not full navigation takeover.

Lower Reveal

A soft appearance of the map from the lower transparent area of the same screen.
This is not a bottom sheet.

Mobility Truth Condensation

Information is deliberately reduced and structured so that the user has less to interpret manually.

Friction Profile

The user’s mobility-relevant preference profile, gathered through the onboarding wizard instead of classic settings.

6. Wizard Interpretation Rule

CatchIt replaces traditional settings screens with a wizard.

This means:

the user does not manually tune a parameter jungle
the app infers mobility preferences through guided onboarding
displayed options are shaped by those preferences
no route shown should feel generic or detached from lived reality

Examples of preference shaping:

prefers walking to the next stop instead of waiting uselessly
slower movement because a child is with them
wants less stressful transfers
prefers more buffer over last-second timing
avoids unnecessary standing and uncertainty
wants more reliable movement, not theoretical speed

Therefore, the UI should not imply:

universal route ranking
abstract optimization
objective best answer

The UI should imply:

these options fit this person’s real mobility behavior
these options are meant to be livable, not merely fast
7. Screen Translation Rules
Screen 1: Main State
Correct interpretation

A calm, high-trust, low-friction primary state.

Contains
large countdown bubble
three preference-shaped options
minimal decisive information only
no map dominance
no route list
Must feel like
clear
reassuring
quiet
already pre-filtered
non-exhausting
Must not feel like
transport dashboard
search results
route browser
trip planner interface
Screen 2: Option Unpacking
Correct interpretation

A structured explanation / comparison of the same three options from screen 1.

Contains
the same three shown lines
identical categories for all three
easy comparability
suitability cues in addition to transport facts
Must communicate

“These are the same three options you already saw, now shown in more depth so you can understand the tradeoffs.”

Must not become
generic route-results page
list of arbitrary route entries
optimization screen
transit search output
route browser
Screen 3: Spatial Assist State
Correct interpretation

The same main screen, condensed slightly, with lower map assistance revealed.

Contains
same countdown hierarchy
same option logic
integrated lower map area
walking path from current location to next-best stop
Must feel like
same screen
slightly tighter
gently expanded downward
map as support, not hero
Must not become
separate map page
bottom sheet
map-first layout
navigation takeover screen
8. Compare vs Browse

This distinction is critical.

Browse

Wrong pattern.

Browse means:

many route entries
open-ended exploration
standard results list
generic transit UI
the user must sift through options
Compare / Unpack

Correct pattern.

Compare / unpack means:

exactly the same three options already proposed
same structure for each
direct readability
no search-results feeling
no generic route-listing behavior

Use unpack, clarify, or show tradeoffs, not “show route results.”

9. Map Interpretation Rule

Whenever a map is mentioned, do not assume the product is switching into map mode.

The map in CatchIt is:
reassurance
orientation support
lower-layer spatial help
footpath visibility
situation-specific assistance
The map in CatchIt is not:
the primary screen
a navigation app takeover
a full route planner map
a dominant visual hero
a separate map screen by default
10. Visual Hierarchy Rules
Always preserve
countdown as primary anchor
options as direct secondary layer
map as supportive tertiary layer
Never allow
map becoming hero
countdown shrinking into corner badge
cards becoming the main structure
dashboard style replacing calm hierarchy
a hard visual seam between top truth and lower support
11. Prompt Guardrails for Stitch

Use these guardrails whenever generating CatchIt screens.

Always include
same screen, not a new screen
same hierarchy
same three options
preference-shaped, not objectively ranked
calm, minimal, reassuring
do not use generic transit patterns
Always exclude
route results list
bottom sheet
dashboard cards
optimize-my-route logic
map-first layout
standard transit UI conventions
12. Ready-to-Use Translation Block

Use this block as a default instruction in Stitch.

Interpret CatchIt outside of standard transit-app conventions.

Do not translate requests into:
- best route ranking
- route results list
- map-first navigation UI
- bottom sheets
- dashboard cards
- generic transit comparison screens

Interpret CatchIt instead as:
- preference-shaped mobility relief
- calm truth condensation
- suitability-based option presentation
- same-screen state changes
- spatial reassurance only when needed

Important:
The three shown lines are not raw route results.
They are already filtered according to the user’s wizard-based mobility preferences.

So when a second screen is requested, it should not become a generic route list.
It should unpack the same three proposed options in a structured, directly comparable way.

When a map is requested, it should not become a map screen.
It should appear as an integrated lower support layer within the same screen hierarchy.
13. Compact Replacement Table
Don’t say / don’t interpret as	Use / interpret as
best route	most suitable option
fastest connection	most fitting option today
route results	proposed options
compare routes	unpack the three proposed options
route details	deeper option explanation
map screen	spatial assist state
bottom sheet	lower reveal
filters / advanced settings	wizard-shaped preferences
optimization	suitability shaping
recommended route	preference-compatible proposal
14. Anti-Drift Clause

If a generated output resembles any of the following, it has drifted away from CatchIt:

standard transit app
Google Maps-like route page
Moovit / DB Navigator style results list
CTA-heavy route-optimization screen
card dashboard
bottom-sheet-heavy mobile UI
full navigation takeover
objective score/ranking of routes

In that case, regenerate with stricter adherence to:

same screen
same hierarchy
preference-shaped options
calm condensation
suitability cues
integrated spatial reassurance
15. One-Sentence Summary for Stitch

CatchIt is not a transit-results app; it is a preference-shaped mobility-relief system that shows only a few suitable options, unpacks those same options when needed, and adds spatial reassurance without switching into generic map-first UI.