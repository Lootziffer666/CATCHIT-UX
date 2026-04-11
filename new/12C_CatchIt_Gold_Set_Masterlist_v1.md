# 12C_CatchIt_Gold_Set_Masterlist_v1

## Purpose
Defines the complete CatchIt Gold Set Masterlist v1, containing all 21 current gold-level screens with explicit Core Gold or Extended Gold classification.

## Status
Master reference index for CatchIt Gold Set v1.

## Scope
- full 21-screen gold-level masterlist
- core vs extended classification
- grouped listing by product family
- usage guidance for custom GPT, review, and design iteration

## Depends on
- 12A_CatchIt_Core_Gold_Set_v1
- 12B_CatchIt_Extended_Gold_Set_v1

## Must not redefine
- state semantics
- anchor taxonomy
- canonical screen families
- core vs extended rationale already defined in 12A and 12B

## Working rule
This file is an index and master overview. It does not replace the detailed rationale in the Core Gold and Extended Gold files.

## 1. Full Gold-Level Masterlist

The current CatchIt Gold Set v1 contains 21 gold-level screens.

These 21 screens are not equal in structural importance.
They are divided into:
- Core Gold
- Extended Gold

Core Gold screens carry the main product grammar.
Extended Gold screens extend and strengthen the system without carrying the core grammar in the same way.

---

## 2. Core Gold Screens

The following 14 screens are Core Gold.

### Main State Family
1. Main / Blue / Idle
2. Main / Green / Ready
3. Main / Yellow / Adapting
4. Main / Orange / Act Now
5. Main / Red / Failed

### Spatial Assist Family
6. Main → Map Reveal
7. Map Focus

### Go Family
8. Go Mode / Walk to Stop

### Recovery Family
9. Recovery / Simple Switch
10. Recovery / Recheck nötig
11. Recovery / Kette angepasst

### Planning / Chain Family
12. Wizard / Kettenfrage
13. Chain Summary
14. Quick Change

---

## 3. Extended Gold Screens

The following 7 screens are Extended Gold.

### Planning / Understanding Support
15. Wizard / Einstieg
16. Wizard / Bewegungsstil / Tageslage

### Go / Execution Support
17. Go Mode / In Vehicle

### Trust / Privacy / Accessibility
18. Neutral Label vs User Label
19. Lockscreen-safe Notification
20. Voice-safe Assist Screen
21. Accessibility Variant / Large Text + Reduced Motion

---

## 4. Masterlist by Product Family

### Main State Family
- Main / Blue / Idle (Core Gold)
- Main / Green / Ready (Core Gold)
- Main / Yellow / Adapting (Core Gold)
- Main / Orange / Act Now (Core Gold)
- Main / Red / Failed (Core Gold)

### Spatial Assist Family
- Main → Map Reveal (Core Gold)
- Map Focus (Core Gold)

### Go Family
- Go Mode / Walk to Stop (Core Gold)
- Go Mode / In Vehicle (Extended Gold)

### Recovery Family
- Recovery / Simple Switch (Core Gold)
- Recovery / Recheck nötig (Core Gold)
- Recovery / Kette angepasst (Core Gold)

### Planning / Chain Family
- Wizard / Einstieg (Extended Gold)
- Wizard / Kettenfrage (Core Gold)
- Wizard / Bewegungsstil / Tageslage (Extended Gold)
- Chain Summary (Core Gold)
- Quick Change (Core Gold)

### Trust / Privacy / Accessibility
- Neutral Label vs User Label (Extended Gold)
- Lockscreen-safe Notification (Extended Gold)
- Voice-safe Assist Screen (Extended Gold)
- Accessibility Variant / Large Text + Reduced Motion (Extended Gold)

---

## 5. Recommended Reading Order

For product explanation or stakeholder presentation, use this order:

1. Main / Blue / Idle
2. Main / Green / Ready
3. Main / Yellow / Adapting
4. Main / Orange / Act Now
5. Main / Red / Failed
6. Main → Map Reveal
7. Map Focus
8. Go Mode / Walk to Stop
9. Recovery / Simple Switch
10. Recovery / Recheck nötig
11. Recovery / Kette angepasst
12. Wizard / Kettenfrage
13. Chain Summary
14. Quick Change
15. Wizard / Einstieg
16. Wizard / Bewegungsstil / Tageslage
17. Go Mode / In Vehicle
18. Neutral Label vs User Label
19. Lockscreen-safe Notification
20. Voice-safe Assist Screen
21. Accessibility Variant / Large Text + Reduced Motion

This order explains:
- the main grammar first
- spatial and execution behavior second
- recovery logic third
- planning/chain logic fourth
- supporting trust and accessibility screens last

---

## 6. Recommended Usage Order for the Custom GPT

When using the masterlist as GPT guidance:

### First priority
Use Core Gold as the primary benchmark.

### Second priority
Use Extended Gold when:
- the user asks for supporting screens
- the request touches trust/privacy/accessibility
- the request touches planning entry or in-vehicle support

### Rule
Extended Gold must strengthen Core Gold, not redefine it.

---

## 7. Compact Summary

CatchIt currently has 21 gold-level screens:
- 14 Core Gold
- 7 Extended Gold

This masterlist exists to make the full set easy to inspect, maintain, and reference across:
- custom GPT setup
- design review
- screen iteration
- pitch preparation
- system documentation

## Final Rule
When in doubt, preserve Core Gold first, then extend through Extended Gold without altering the main product grammar.
