/**
 * DormantState Component
 *
 * WHAT THIS REPRESENTS:
 * - A belief that once existed but is now stale
 * - The system previously had belief, but it has decayed
 * - The information may no longer reflect reality due to lack of recent observations
 *
 * HOW IT DIFFERS FROM UnknownState:
 * - UnknownState: No belief exists (absence of information)
 * - DormantState: Belief existed but is outdated (staleness of information)
 *
 * WHAT THIS DOES NOT REPRESENT:
 * - Error (use ErrorState for system failures)
 * - Loading (use LoadingState for in-progress operations)
 * - Removal or deletion (dormant stops are never deleted in Phase-1)
 * - Incorrect data
 * - Confirmation of absence
 *
 * WHY THIS MUST REMAIN MINIMAL AND CENTRALIZED:
 * - UI must never appear more confident than the system (UI Constitution §1.3)
 * - Stale or dormant beliefs must be clearly communicated (Design Review Checklist §4)
 * - Language drift silently breaks Phase-1 guarantees (Freeze Criteria §3.6)
 * - Copy is frozen for Phase-1 and imported from src/copy/belief.ts
 *
 * This component is intentionally cautious and non-directive.
 * It communicates staleness without implying failure or disappearance.
 *
 * See: ui_constitution_v1.md, UI_CONTRACT.md, DESIGN_REVIEW_CHECKLIST.md, rules_v0.md
 */

import { DORMANT_STATE_MESSAGE } from "../../copy/belief";

interface DormantStateProps {
    className?: string;
}

export function DormantState({ className }: DormantStateProps) {
    return (
        <div className={className}>
            <p>{DORMANT_STATE_MESSAGE}</p>
        </div>
    );
}
