# Screen_03_Gold_Saved_Chain_Detail_Quick_Recall

## Purpose
Defines the gold-status version of the CatchIt Saved Chain Detail / Quick Recall screen.

## Status
Gold-status supporting screen for CatchIt Layer 2.

## 1. CatchIt interpretation

This is not a planner editor, route-detail page, or technical itinerary view.

It is a calm detail surface for one trusted recurring everyday chain.

The point is not showing everything.
The point is quick recognition, calm confirmation, and immediate reuse.

## 2. State type

**Shell / Recall Layer / Saved Chain Detail / Quick Recall**

- Screen role: make one saved chain quickly understandable and reusable
- Primary anchor: **Confirmation Anchor**
- User role: confirm a known chain and use it
- CatchIt role: make stability and structure visible without editor drift
- Density: **low-to-medium**
- Tone: calm, trustworthy, structured

## 3. Must stay the same

- remains clearly CatchIt
- no planner/editor logic
- no provider route-detail logic
- no map requirement
- no data-sheet structure
- no full route explosion
- the chain remains one coherent sequence
- activation matters more than editing

## 4. Must change

Compared to Saved Plans, this becomes:
- more focused on one plan
- slightly deeper
- still far from full detail

The first view should answer:
- yes, this is the plan
- yes, this still fits
- yes, I can use it now

Show:
- title
- core chain
- 1–2 small recognition residues if useful
- one clear primary action

Do not foreground:
- every time
- every stop
- full technical routing

## 5. Drift risks

- planner-editor drift
- itinerary dump
- route-detail drift
- too many legs on first level
- too much metadata
- edit actions stronger than use action
- map preview by habit

## 6. Recommended screen structure

### Header
Quiet, not tool-like.

Example:
- **Kita → Ergo → Rückweg**
- *mit Luke · wiederkehrend*

### Primary anchor
Calm confirmation of the known routine.

Examples:
- **Diesen Ablauf nutzen**
- **Heute so unterwegs**

### Chain core
Central coherent sequence.

Example:
- **Zuhause → Kita → Ergo → Kita → Zuhause**

Not as a technical timeline.
Not as a route list.

### Context residues
Only 1–2 if helpful:
- *mit Luke*
- *wenig Fußweg*
- *Rückweg mitgedacht*

### Primary action
Examples:
- **Jetzt nutzen**
- **Für heute übernehmen**

### Secondary actions
Reduced and subordinate:
- **Anpassen**
- **Duplizieren**
- **Entfernen**

## 7. Prompt for generation tool

Design the CatchIt **Saved Chain Detail / Quick Recall** screen as a calm detail surface for one trusted recurring everyday chain, not as a planner editor, route detail page, or technical itinerary view.

Semantic meaning:
this is a known, workable routine that should be quickly recognized, understood, and reactivated.

Requirements:
- use a calm Confirmation-Anchor-like primary read
- show the chain as one coherent sequence, not as a technical breakdown
- make the main purpose “yes, this is the plan” and “use it now”
- keep edit actions secondary
- avoid heavy metadata
- avoid full route detail
- avoid planner-editor behavior
- avoid mandatory map preview
