/**
 * HighConfidenceState Component
 *
 * WHAT THIS REPRESENTS:
 * - A belief that is stronger than other belief states but still provisional
 * - The system has accumulated multiple consistent observations
 * - The belief is stronger relative to other states, but still not absolute truth
 *
 * HOW IT DIFFERS FROM LowConfidenceState:
 * - LowConfidenceState: Belief exists but is weak (uncertain presence)
 * - HighConfidenceState: Belief is stronger due to consistent observations (relative confidence)
 *
 * WHAT THIS DOES NOT REPRESENT:
 * - Confirmed
 * - Correct
 * - Accurate
 * - Verified
 * - Guaranteed
 * - Final
 *
 * WHY THIS MUST REMAIN NON-AUTHORITATIVE AND CENTRALIZED:
 * - UI must never appear more confident than the system (UI Constitution §1.3)
 * - UI must never imply completeness, accuracy, or authority (UI Constitution §3)
 * - Numeric confidence is forbidden (UI Constitution §3, §5)
 * - Belief states communicated via visual tone + language only (Freeze Criteria §3.2)
 * - Language drift silently breaks Phase-1 guarantees (Freeze Criteria §3.6)
 * - Copy is frozen for Phase-1 and imported from src/copy/belief.ts
 *
 * This component communicates relative strength without authority.
 * High confidence is still a belief, not a fact.
 *
 * See: ui_constitution_v1.md, UI_CONTRACT.md, DESIGN_REVIEW_CHECKLIST.md, rules_v0.md
 */

import { HIGH_CONFIDENCE_STATE_MESSAGE } from "../../copy/belief";

interface HighConfidenceStateProps {
    className?: string;
}

export function HighConfidenceState({ className }: HighConfidenceStateProps) {
    return (
        <div className={className}>
            <p>{HIGH_CONFIDENCE_STATE_MESSAGE}</p>
        </div>
    );
}
