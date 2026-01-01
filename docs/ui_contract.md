# UI_CONTRACT — Frontend Binding to Core Architecture

> **Status:** Binding Contract (Frontend)
>
> **Scope:** This document governs all frontend UI implementation in this repository (web, admin, moderator views).
>
> **Authority:** This document is subordinate to, and derives its authority from, the core system architecture documents maintained in the **core/backend repository**.

---

## 0. Purpose

This document exists to **bind this frontend repository** to the system‑level UI rules defined in the core project.

It ensures that frontend implementation:

- Cannot silently diverge from system truth guarantees
- Does not reinterpret uncertainty, authority, or contribution semantics
- Remains compliant with Phase‑1 governance even as UI code evolves

This is **not** a style guide or component reference.
It is a **contractual agreement** between this frontend and the core system.

---

## 1. Source of Truth (Non‑Negotiable)

The authoritative UI rules for the system are defined in:

- `docs/01_architecture/ui_constitution_v1.md` (core repository)

This frontend repository:

- **Does not redefine UI semantics**
- **Does not weaken constraints**
- **Must resolve all ambiguity in favor of the core document**

If a conflict exists between this document and the core UI Constitution, **the core UI Constitution prevails**.

---

## 2. Binding Scope

This contract applies to:

- All React / Next.js components
- All pages, routes, and layouts
- All admin and moderator interfaces
- All permission, login, and contribution flows
- All error, empty, and degraded states

No UI surface is exempt.

---

## 3. Phase‑1 Constraints (Inherited)

This frontend explicitly inherits the following Phase‑1 constraints:

- UI represents **belief**, not truth
- Users submit **observations**, not edits
- Uncertainty must be visible and honest
- Absence must not look like error
- Contribution must be contextual and user‑initiated
- Permissions must be explicit and optional
- Account deletion must be silent and final

These constraints are **not implementation details**.
They are system guarantees.

---

## 4. Prohibited UI Patterns

The following patterns are forbidden in this repository:

- Components or actions labeled “Edit”, “Fix”, “Correct”, or equivalents
- Voting, rating, or approval metaphors
- Numeric confidence indicators
- Gamification or reputation UI
- Proactive login or permission prompts
- Contribution CTAs in no‑data areas
- UI implying completeness or correctness

Introducing any of the above is a **contract violation**.

---

## 5. Implementation Responsibilities

Frontend implementation **must actively enforce** constraints, not merely respect them.

Examples:

- Separate components for `EmptyState`, `UnknownState`, and `ErrorState`
- Permission requests wrapped behind explicit user actions
- No generic “CTA” components usable for contribution
- Visual treatment tied to belief state, not data volume

Correctness must be easier than violation.

---

## 6. Review & Enforcement

All frontend PRs that affect UI behavior must:

- Reference relevant sections of `ui_constitution_v1.md`
- Confirm compliance with this UI Contract

Violations:

- Block merge regardless of visual quality
- Must be resolved by changing UI, not reinterpreting rules

---

## 7. Versioning & Change Policy

This contract is valid for **Phase‑1**.

Changes to UI semantics require:

- A new version of the core UI Constitution (V2)
- An explicit update to this contract
- Phase compatibility review

Silent drift is forbidden.

---

## Final Statement

> This frontend implements system law; it does not invent it.
>
> If a UI decision improves usability but weakens trust or truth guarantees, it is incorrect.

