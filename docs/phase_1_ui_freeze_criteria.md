# Phase‑1 UI Freeze Criteria

> **Status:** Draft → To be frozen when criteria are met
>
> **Scope:** Frontend UI behavior for Phase‑1 of Gonaj, the collaborative reasoning project described in the main project overview
>
> **Authority:** Derived from `ui_constitution_v1.md`, `rules_v0.md`, and Phase‑1 backend scope

---

## 1. Purpose

This document defines **exact, testable criteria** for declaring a **Phase‑1 UI Freeze**.

A UI Freeze means:

- UI **behavior and semantics** are frozen
- UI **must not change meaning**, authority, or interaction logic
- Only **visual polish, accessibility, and bug fixes** are allowed afterward

The goal is to ensure that **frontend evolution cannot violate backend Phase‑1 guarantees**, even unintentionally.

---

## 2. What “UI Freeze” Means (Precisely)

When Phase‑1 UI Freeze is declared:

### Frozen
- Interaction semantics
- Meaning of UI actions
- Contribution affordance rules
- Permission request timing
- Uncertainty language and framing
- Distinction between belief states

### Still Allowed
- Visual refinements (spacing, typography, colors)
- Accessibility improvements
- Performance optimizations
- Bug fixes that do **not** change behavior

### Explicitly Disallowed
- New UI actions
- New contribution paths
- Reordering interaction hierarchy
- Any change that reduces visible uncertainty
- Any UI that implies correctness or authority

---

## 3. Preconditions for Declaring Phase‑1 UI Freeze

Phase‑1 UI Freeze may be declared **only when all conditions below are met**.

---

### 3.1 Governance Preconditions (Mandatory)

- [ ] `ui_constitution_v1.md` is final and referenced by frontend repo
- [ ] `ui_contract.md` exists in frontend repo and is binding
- [ ] `design_review_checklist.md` is enforced for all UI PRs
- [ ] Branch protection rules prevent direct merges to `main`

**Rationale:**
Without governance enforcement, a freeze is meaningless.

---

### 3.2 Belief Semantics Preconditions (Mandatory)

The following components must exist and be used universally:

- [ ] `BeliefContainer`
- [ ] `UnknownState` (no belief)
- [ ] `DormantState` (belief exists but stale)
- [ ] `LowConfidenceState`

Additional requirements:

- [ ] No numeric confidence displayed anywhere
- [ ] Belief states communicated via **visual tone + language only**
- [ ] Belief → UI mapping documented in code comments

**Rationale:**
If belief semantics are not centralized, UI behavior cannot be safely frozen.

---

### 3.3 State Semantics Preconditions (Mandatory)

The following states must be explicitly distinguishable:

- [ ] Empty (no data known)
- [ ] Unknown (insufficient belief)
- [ ] Error (system failure)
- [ ] Loading (in progress)

Rules:

- Each state uses a dedicated component
- Copy and visuals differ clearly
- No state is reused for another

**Rationale:**
Most trust failures occur when absence, error, and uncertainty are conflated.

---

### 3.4 Read‑Only Traveller UX Preconditions (Mandatory)

The following user journeys must be complete:

- [ ] First‑time visitor (read‑only)
- [ ] Returning visitor (read‑only)
- [ ] Browsing sparse or empty regions
- [ ] Inspecting an entity with stale belief

Rules:

- No login required
- No contribution prompts by default
- Uncertainty communicated before interaction

**Rationale:**
Read‑only UX is the primary trust surface of Phase‑1.

---

### 3.5 Contribution UX Preconditions (Mandatory but Minimal)

- [ ] Contribution affordance appears **only after inspection**
- [ ] No contribution prompts in no‑data areas
- [ ] Login requested only after explicit intent
- [ ] Submission confirms **receipt**, not **impact**
- [ ] Location permission requested only after explicit user action

**Rationale:**
Contribution must remain secondary and non‑authoritative.

---

### 3.6 Language & Copy Discipline Preconditions (Mandatory)

- [ ] Uncertainty language centralized in `copy/`
- [ ] Forbidden words absent (accurate, correct, confirmed, fixed, verified)
- [ ] No UI copy implies completeness or correctness

**Rationale:**
Language drift silently breaks Phase‑1 guarantees.

---

### 3.7 Technical Enforcement Preconditions (Strongly Recommended)

At least one of the following must be in place:

- [ ] ESLint rules banning forbidden UI patterns
- [ ] CI check referencing Design Review Checklist

**Rationale:**
Mechanical enforcement reduces reliance on human memory.

---

## 4. Formal Declaration of Phase‑1 UI Freeze

When all preconditions are met:

1. Create `docs/02_phase_1/phase_1_ui_freeze.md` in the [core repo](https://github.com/gonaj/gonaj-backend) (following the numbered docs directory convention, e.g. `docs/01_architecture/`, `docs/02_phase_1/`)
2. Reference this criteria document
3. State the freeze date explicitly
4. Announce that UI behavior changes require Phase‑2 governance

---

## 5. What Triggers a Phase‑2 UI Constitution

Any of the following **requires** a new UI Constitution version:

- Introduction of navigation / ETA UX
- Prediction or recommendation features
- Reputation or trust indicators
- Background sensing or notifications
- Any UI that reduces visible uncertainty

Phase‑1 UI Freeze **must not be relaxed incrementally**.

---

## Final Statement

> **Phase‑1 UI Freeze is declared not when the UI looks finished, but when it can no longer accidentally lie.**

Until that point, UI behavior must remain under active constraint.

