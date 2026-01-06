# DESIGN_REVIEW_CHECKLIST — Phase‑1 UI

> **Status:** Mandatory for Phase‑1
>
> **Applies to:** All UI/UX changes in this repository (web, admin, moderator)
>
> **Authority:** Derived from `ui_constitution_v1.md` (core repo) and `UI_CONTRACT.md` (this repo)

---

## How to Use This Checklist

- This checklist **must be reviewed for every UI‑affecting PR**
- Each item should be explicitly marked **YES / NO / N/A** during review
- Any **NO** blocks merge until resolved
- **Unchecked items are merge blockers** — every item must be explicitly addressed
- Visual quality or usability improvements **do not override** failed checks

> **Reviewer Accountability:** A reviewer who approves a PR implicitly asserts compliance with this checklist. Reviewers are accountable for constitutional violations.

---

## 1. Constitutional Compliance (Blocker)

☐ Does this change comply with **UI_CONSTITUTION_V1**?

☐ Does it avoid introducing any new UI authority or certainty?

☐ If there is ambiguity, was it resolved **in favor of system uncertainty**?

---

## 2. Truth & Belief Semantics

☐ Does the UI represent **belief**, not asserted truth?

☐ Are words like *confirmed, correct, fixed, accurate* avoided?

☐ Is the UI no more confident than the backend data allows?

---

## 3. Forbidden Patterns Check (Hard Red Lines)

Confirm **none** of the following are present:

☐ Edit / Fix / Correct actions

☐ Voting, rating, or approval metaphors

☐ Numeric confidence scores or percentages

☐ Gamification (points, badges, leaderboards)

☐ Contribution nudges in no‑data areas

☐ Proactive login prompts

☐ Proactive permission requests

☐ UI implying completeness or correctness

---

## 4. Uncertainty & Absence Handling

☐ Is uncertainty explicitly visible when data is weak or stale?

☐ Is **absence of data** visually and textually distinct from **system error**?

☐ Are stale or dormant beliefs clearly communicated?

☐ Is silence used instead of speculation where appropriate?

---

## 5. Information Hierarchy

☐ Does the screen present orientation before action?

☐ Is uncertainty communicated before interaction?

☐ Is exploration available without login?

☐ Is contribution secondary to inspection?

---

## 6. Contribution UX Constraints

☐ Is contribution **contextual and user‑initiated**?

☐ Is login requested **only after** explicit intent to contribute?

☐ Does submission confirm **receipt**, not **impact**?

☐ Is there no pressure or encouragement language?

---

## 7. Permissions & Privacy

☐ Are permissions requested only after explicit user action?

☐ Is denial treated as a valid, final choice?

☐ Are manual alternatives provided when permissions are denied?

☐ Is account deletion silent, final, and clearly explained?

---

## 8. Empty, Error, and Degraded States

☐ Are **Empty**, **Unknown**, and **Error** states distinct components?

☐ Does each state have appropriate language and recovery options?

☐ Does system failure never masquerade as missing data?

---

## 9. Phase‑1 Scope Guard

☐ Does this change avoid Phase‑2 features (ETA, navigation, predictions)?

☐ Does it avoid personalization or notification hooks?

☐ Does it avoid admin or moderator authority shortcuts?

---

## 10. Implementation Discipline

☐ Does the code structure make violations hard to introduce accidentally?

☐ Are constrained components reused instead of ad‑hoc UI?

☐ Is correctness easier than violation?

---

## Final Reviewer Assertion

☐ I confirm this UI change strengthens or preserves **trust**.

☐ I confirm this change does not weaken system guarantees.

> **If any item above is NO, this PR must not merge.**

---

**End of DESIGN_REVIEW_CHECKLIST (Phase‑1)**

