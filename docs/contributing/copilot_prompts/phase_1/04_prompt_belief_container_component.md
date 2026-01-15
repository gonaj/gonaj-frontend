# Prompt: Implement `BeliefContainer` Selector Component (Phase-1)

This prompt must be used **verbatim** with VS Code Copilot Agent or GitHub Copilot Agent.

The agent must **not guess, infer, redesign, optimize, or generalize** any behavior. Every requirement below is explicit and mandatory.

The goal is to implement a **pure selector component** that renders the correct belief-state UI component **without adding logic, interpretation, or authority**.

`BeliefContainer` is **structural glue only**. It must remain intentionally boring.

---

## 1. Documents to Refer (Mandatory Reading)

Before writing any code, the agent must conceptually align with the following documents. These define system-level constraints.

1. `ui_constitution_v1.md` (core repository)
   - Defines how belief states may be represented without asserting truth

2. `UI_CONTRACT.md` (frontend repository)
   - Binds frontend implementation to the core UI constitution

3. `DESIGN_REVIEW_CHECKLIST.md` (frontend repository)
   - Lists forbidden UI patterns and enforcement rules

4. `PHASE_1_UI_FREEZE_CRITERIA.md` (frontend repository)
   - Explains why belief semantics must be centralized and frozen

5. `rules_v0.md` (core repository)
   - Describes belief states and their non-probabilistic handling

If any implementation idea conflicts with these documents, **discard the idea**.

---

## 2. Conceptual Definition of `BeliefContainer`

`BeliefContainer` is a **non-intelligent selector**.

It explicitly means:
- Receives a belief state identifier
- Renders the corresponding belief component

It explicitly does **NOT**:
- Compute belief
- Infer confidence
- Perform decay
- Fetch data
- Interpret backend rules
- Modify copy or styling

Plain meaning:
> Given a belief state, render the matching UI component.

---

## 3. Exact File and Folder Structure

### Component file (required)

```
src/components/belief/BeliefContainer.tsx
```

Create the folder if it does not exist.

No other files should be created or modified as part of this task.

---

## 4. Allowed Belief States (Frozen for Phase-1)

The backend defines a **closed union type** for belief states in `src/types/backendBelief.ts`. `BeliefContainer` must **import** and use that shared `BackendBeliefState` type.

The current union (shown here for reference **only**, do not re-declare in `BeliefContainer`) is:

type BackendBeliefState =
  | "proposed"
  | "active_low_confidence"
  | "active_high_confidence"
  | "dormant"
  | "contested";
```

Rules:
- This union is **frozen for Phase-1**
- Do not add additional states
- Do not accept arbitrary strings

---

## 5. Component API (Strict)

`BeliefContainer` must accept **only** the following props:

```ts
interface BeliefContainerProps {
  beliefState: BackendBeliefState;
  className?: string;
}
```

Rules:
- `beliefState` is required
- No optional fallbacks
- No default state
- No inference logic

---

## 6. Rendering Rules (Mandatory)

- Use a **simple switch or mapping** to select components
- Render exactly one belief component
- Pass through `className` only

Implement a switch statement with the following exact behavior:

- "active_low_confidence" → render <LowConfidenceState />
- "active_high_confidence" → render <HighConfidenceState />
- "dormant" → render <DormantState />
- "proposed" → return null
- "contested" → return null

These null returns are intentional and must be documented in code comments.

If an invalid state is encountered, fail loudly at compile time (TypeScript).

Add a comment at the top of the component stating:
- BeliefContainer renders backend belief states only
- Absence of belief ("no Stop exists") is handled outside using UnknownState
- Some backend belief states are intentionally not rendered in Phase-1 public UI
---

## 7. Explicit Non-Goals (Do NOT Implement)

The component must NOT:

- Contain copy
- Contain styling decisions
- Perform logging
- Emit analytics
- Fetch data
- Use context
- Use hooks other than React itself
- Attempt to be extensible

This component is intentionally **closed and rigid**.

---

## 8. Unit Testing

- Unit tests are **not required** for this task
- The component must be trivial to test later

That means:
- Deterministic rendering
- No side effects
- Exhaustive handling via TypeScript

---

## 9. Production Readiness Requirements

The code must:

- Follow idiomatic React + TypeScript patterns
- Prefer explicitness over abstraction
- Avoid cleverness
- Avoid future refactors for production use

Assume this code will ship to production unchanged.

---

## 10. Required In-Code Documentation

At the top of `BeliefContainer.tsx`, include a block comment explaining:

- Why this component must remain dumb
- Why belief logic must live elsewhere
- Why this selector is frozen for Phase-1

This comment is mandatory.

---

## 11. Final Validation (Agent Self-Check)

Before outputting code, verify:

- Only allowed belief states are handled
- No default case hides missing states
- No copy or logic exists in this file
- No emojis or special characters exist
- No console output exists
- No UI authority is implied

If any check fails, fix it before producing output.

---

## 12. Output Instructions

The final output must include **only**:

- `src/components/belief/BeliefContainer.tsx`

No explanations.
No markdown.
No commentary.

---

End of prompt.

