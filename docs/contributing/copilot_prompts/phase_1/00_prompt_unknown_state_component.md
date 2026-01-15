# Prompt: Implement `UnknownState` Belief Component (Phase-1)

This prompt must be used **verbatim** with VS Code Copilot Agent or GitHub Copilot Agent.

The agent must **not guess, infer, or redesign** any behavior. Every requirement below is explicit and mandatory.

The goal is to implement a **single, production-grade React component** that represents **absence of belief** in Phase-1.

---

## 1. Documents to Refer (Mandatory Reading)

Before writing any code, the agent must conceptually align with the following documents. These define system-level constraints.

1. `ui_constitution_v1.md` (core repository)
   - Defines how belief, uncertainty, and absence must be represented in UI

2. `UI_CONTRACT.md` (frontend repository)
   - Binds frontend implementation to the core UI constitution

3. `DESIGN_REVIEW_CHECKLIST.md` (frontend repository)
   - Lists forbidden UI patterns and enforcement rules

4. `PHASE_1_UI_FREEZE_CRITERIA.md` (frontend repository)
   - Explains why belief semantics and copy must be centralized and frozen

5. `rules_v0.md` (core repository)
   - Describes belief decay, absence vs error semantics

If any implementation idea conflicts with these documents, **discard the idea**.

---

## 2. Conceptual Definition of `UnknownState`

`UnknownState` represents **absence of belief**.

It explicitly means:
- The system does not currently have enough information
- No reliable belief exists

It explicitly does **NOT** mean:
- Error
- Loading
- Stale data
- Incorrect data
- Removal or deletion

This component must feel **calm, neutral, and non-directive**.

---

## 3. Exact File and Folder Structure

### Component file (required)

```
src/components/belief/UnknownState.tsx
```

Create the folder if it does not exist.

---

### Centralized copy file (required)

```
src/copy/belief.ts
```

If this file does not exist, it **must be created** as part of this task.

The component **must not contain inline user-facing copy**.

---

## 4. Centralized Copy Requirement (Frozen for Phase-1)

Define and export the following constant in `src/copy/belief.ts`:

```ts
export const UNKNOWN_STATE_MESSAGE = "Information for this area is currently limited.";
```

Rules for this copy:
- This exact string must be used
- Do not modify wording
- No emojis
- No special characters
- No punctuation beyond the final period
- No suggestion, encouragement, or call to action

This copy is **frozen for Phase-1**.

---

## 5. Component Implementation Requirements

### 5.1 Technical Rules

- React functional component
- Written in TypeScript
- Pure and deterministic
- No side effects
- No data fetching
- No global state access
- No context consumption

Allowed props:
- `className?: string`

Disallowed props:
- `confidence`
- `score`
- `severity`
- `action`
- `cta`
- any numeric or boolean flag implying belief strength

---

### 5.2 Rendering Rules

- Render only minimal markup
- Display the centralized copy text
- No buttons, links, or interactive elements
- No icons
- No animations or loaders
- No conditional logic beyond rendering

The component must never prompt the user to do anything.

---

### 5.3 Styling Rules

- Neutral appearance only
- No success or error colors
- No visual emphasis implying importance or urgency

Styling must not suggest failure, correctness, or authority.

---

## 6. Logging and Output Restrictions

- Do not use `console.log`, `console.warn`, or `console.error`
- Do not emit analytics events
- Do not perform side effects

---

## 7. Unit Testing

- Unit tests are **not required** for this task
- The component must be trivial to test later

This means:
- Deterministic output
- No dependency on time, environment, or external state

---

## 8. Production Readiness Requirements

The code must:

- Follow idiomatic React + TypeScript practices
- Be readable and maintainable
- Avoid premature abstraction
- Avoid future refactors for production use

Assume this code will ship to production unchanged.

---

## 9. Required In-Code Documentation

At the top of `UnknownState.tsx`, include a block comment explaining:

- What `UnknownState` represents
- What it explicitly does NOT represent
- Why it must remain minimal and centralized

This comment is mandatory.

---

## 10. Final Validation (Agent Self-Check)

Before outputting code, verify:

- Copy is imported from `src/copy/belief.ts`
- The exact string is used
- No emojis or special characters exist
- No inline user-facing strings exist
- No actions or CTAs exist
- No console output exists
- No UI authority is implied

If any check fails, fix it before producing output.

---

## 11. Output Instructions

The final output must include **only**:

- `src/components/belief/UnknownState.tsx`
- `src/copy/belief.ts` (if newly created)

No explanations.
No markdown.
No commentary.

---

End of prompt.

