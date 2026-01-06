/**
 * LowConfidenceState Component
 *
 * WHAT THIS REPRESENTS:
 * - A belief that exists but is weak
 * - The system has some evidence, but it is insufficient to be considered reliable
 * - The belief should not be trusted without caution
 *
 * HOW IT DIFFERS FROM UnknownState AND DormantState:
 * - UnknownState: No belief exists (absence of information)
 * - DormantState: Belief existed but is outdated (staleness of information)
 * - LowConfidenceState: Belief exists but is weak (uncertain presence of information)
 *
 * WHAT THIS DOES NOT REPRESENT:
 * - Confirmation
 * - Accuracy
 * - Correctness
 * - Error (use ErrorState for system failures)
 * - Recommendation
 * - Prediction
 *
 * WHY THIS MUST REMAIN MINIMAL AND CENTRALIZED:
 * - UI must never appear more confident than the system (UI Constitution §1.3)
 * - Numeric confidence is forbidden (UI Constitution §3, §5)
 * - Uncertainty must be visible when data is weak (Design Review Checklist §4)
 * - Language drift silently breaks Phase-1 guarantees (Freeze Criteria §3.6)
 * - Copy is frozen for Phase-1 and imported from src/copy/belief.ts
 *
 * This component is intentionally cautious and non-directive.
 * It communicates uncertain presence without implying trustworthiness.
 *
 * See: ui_constitution_v1.md, UI_CONTRACT.md, DESIGN_REVIEW_CHECKLIST.md, rules_v0.md
 */

import { LOW_CONFIDENCE_STATE_MESSAGE } from "../../copy/belief";

interface LowConfidenceStateProps {
    className?: string;
}

export function LowConfidenceState({ className }: LowConfidenceStateProps) {
    return (
        <div className={className}>
            <p>{LOW_CONFIDENCE_STATE_MESSAGE}</p>
        </div>
    );
}
