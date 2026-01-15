/**
 * BeliefContainer Component
 *
 * WHY THIS COMPONENT MUST REMAIN DUMB:
 * - This is a pure selector with no intelligence
 * - It receives a belief state and renders the matching component
 * - It does not compute, infer, interpret, or modify belief in any way
 * - Adding logic here would violate separation of concerns and risk authority inflation
 *
 * WHY BELIEF LOGIC MUST LIVE ELSEWHERE:
 * - Belief computation is a backend responsibility (rules_v0.md)
 * - The UI must never appear more confident than the system (UI Constitution §1.3)
 * - Frontend does not redefine UI semantics (UI Contract §1)
 * - This component only translates pre-computed state to visual representation
 *
 * WHY THIS SELECTOR IS FROZEN FOR PHASE-1:
 * - Belief states are frozen (rules_v0.md §14)
 * - Belief semantics must be centralized and frozen (Freeze Criteria §3.2)
 * - Adding new states requires a new ruleset version
 * - The closed union type enforces this at compile time
 *
 * See: ui_constitution_v1.md, UI_CONTRACT.md, DESIGN_REVIEW_CHECKLIST.md, rules_v0.md
 */
import type { BackendBeliefState } from "../../types/backendBelief";
import { DormantState } from "./DormantState";
import { HighConfidenceState } from "./HighConfidenceState";
import { LowConfidenceState } from "./LowConfidenceState";


interface BeliefContainerProps {
  beliefState: BackendBeliefState;
  className?: string;
}

/**
 * - BeliefContainer renders backend belief states only
 * - Absence of belief ("no Stop exists") is handled outside using UnknownState
 * - Some backend belief states are intentionally not rendered in Phase-1 public UI
 */
export function BeliefContainer({ beliefState, className }: BeliefContainerProps) {
  switch (beliefState) {
    case "active_low_confidence":
      return <LowConfidenceState className={className} />;

    case "active_high_confidence":
      return <HighConfidenceState className={className} />;

    case "dormant":
      return <DormantState className={className} />;

    case "proposed":
    case "contested":
      // Intentionally not rendered in public Phase-1 UI
      return null;
  }
}
