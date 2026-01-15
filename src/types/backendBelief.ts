/**
 * BackendBeliefState
 *
 * Canonical belief states emitted by the backend.
 * These values must match rules_v0.md exactly.
 *
 * IMPORTANT:
 * - Do NOT rename these values.
 * - Do NOT introduce frontend-normalized variants.
 * - UI components must map from these states explicitly.
 *
 * See: rules_v0.md, ui_backend_contract.md
 */
export type BackendBeliefState =
  | "proposed"
  | "active_low_confidence"
  | "active_high_confidence"
  | "dormant"
  | "contested";
