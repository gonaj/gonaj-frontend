/**
 * UnknownState Component
 *
 * WHAT THIS REPRESENTS:
 * - Absence of belief
 * - The system does not currently have enough information
 * - No reliable belief exists for this context
 *
 * WHAT THIS DOES NOT REPRESENT:
 * - Error (use ErrorState for system failures)
 * - Loading (use LoadingState for in-progress operations)
 * - Stale data (use DormantState for outdated belief)
 * - Incorrect data
 * - Removal or deletion
 *
 * WHY THIS MUST REMAIN MINIMAL AND CENTRALIZED:
 * - UI must never appear more confident than the system (UI Constitution §1.3)
 * - Absence must not look like error (UI Contract §3)
 * - Language drift silently breaks Phase-1 guarantees (Freeze Criteria §3.6)
 * - Copy is frozen for Phase-1 and imported from src/copy/belief.ts
 *
 * This component is intentionally calm, neutral, and non-directive.
 * It must never prompt the user to take any action.
 *
 * See: ui_constitution_v1.md, UI_CONTRACT.md, DESIGN_REVIEW_CHECKLIST.md
 */

import { UNKNOWN_STATE_MESSAGE } from "../../copy/belief";

interface UnknownStateProps {
    className?: string;
}

export function UnknownState({ className }: UnknownStateProps) {
    return (
        <div className={className}>
            <p>{UNKNOWN_STATE_MESSAGE}</p>
        </div>
    );
}
