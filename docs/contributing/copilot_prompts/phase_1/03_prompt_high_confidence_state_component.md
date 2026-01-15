# Prompt: Implement `HighConfidenceState` Belief Component (Phase-1)

This prompt must be used **verbatim** with VS Code Copilot Agent or GitHub Copilot Agent.

The agent must **not guess, infer, redesign, optimize, or generalize** any behavior. Every requirement below is explicit and mandatory.

The goal is to implement a **single, production-grade React component** that represents a **high-confidence (but still provisional) belief** in Phase-1.

---

## 1. Documents to Refer (Mandatory Reading)

Before writing any code, the agent must conceptually align with the following documents. These define system-level constraints.

1. `ui_constitution_v1.md` (core repository)
   - Defines how belief, uncertainty, and non-authoritative confidence may be represented in UI

2. `UI_CONTRACT.md` (frontend repository)
   - Binds frontend implementation to the core UI constitution

3. `DESIGN_REVIEW_CHECKLIST.md` (frontend repository)
   - Lists forbidden UI patterns and enforcement rules

4. `PHASE_1_UI_FREEZE_CRITERIA.md` (frontend repository)
   - Explains why belief semantics and copy must be centralized and frozen

5. `rules_v0.md` (core repository)
   - Describes belief accumulation, decay, and non-probabilistic confidence handling

If any implementation idea conflicts with these documents, **discard the idea**.

---

## 2. Conceptual Definition of `HighConfidenceState`

`HighConfidenceState` represents a **belief that is stronger than other belief states but still provisional**.

It explicitly means:
- The system has accumulated multiple consistent observations
- The belief is stronger relative to other states
- The belief is still not absolute truth

It explicitly does **NOT** mean:
- Confirmed
- Correct
- Accurate
- Verified
- Guaranteed
- Final

Plain meaning:
> The system has repeatedly observed similar information here, but it remains a belief, not a fact.

This component must feel **more confident than LowConfidenceState**, yet still clearly non-authoritative.

---

## 3. Exact File and Folder Structure

### Component file (required)

```
src/components/belief/HighConfidenceState.tsx
```

Create the folder if it does not exist.

---

### Centralized copy file (required)

Use the existing centralized belief copy file:

```
src/copy/belief.ts
```

Do not create a new copy file.

---

## 4. Centralized Copy Requirement (Frozen for Phase-1)

Define and export the following constant in `src/copy/belief.ts`:

```ts
export const HIGH_CONFIDENCE_STATE_MESSAGE = "This information has been observed consistently in this area.";
```

Rules for this copy:
- Use this exact string
- Do not modify wording
- No emojis
- No special characters
- No calls to action
- No implication of correctness, confirmation, or recommendation

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

- Render minimal markup
- Display the centralized high-confidence copy
- No buttons, links, or interactive elements
- No icons
- No animations or loaders

The component must not prompt user action.

---

### 5.3 Visual / Styling Rules

- Slightly stronger visual presence than LowConfidenceState
- Still restrained and cautious
- Neutral colors only
- No success, error, or warning semantics
- No emphasis implying authority or finality

Styling must communicate **relative strength without authority**.

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

At the top of `HighConfidenceState.tsx`, include a block comment explaining:

- What `HighConfidenceState` represents
- How it differs from `LowConfidenceState`
- Why it must remain non-authoritative and centralized

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

- `src/components/belief/HighConfidenceState.tsx`
- `src/copy/belief.ts` (only if modified to add the constant)

No explanations.
No markdown.
No commentary.

---

End of prompt.

