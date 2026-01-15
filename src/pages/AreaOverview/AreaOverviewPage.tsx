/**
 * AreaOverviewPage Component
 *
 * WHAT THIS REPRESENTS:
 * - A geographic area overview showing multiple entities
 * - Demonstrates belief placement for various belief states
 *
 * PHASE-1 READ-ONLY CONTEXT:
 * - This page is strictly read-only
 * - No contributor affordances
 * - No calls to action
 * - No backend integration
 *
 * MOCKING AND BACKEND INTEGRATION:
 * - Belief states are mocked intentionally
 * - No API calls, no auth, no dynamic data
 * - Hardcoded belief states demonstrate structural placement only
 *
 * BELIEF RENDERING:
 * - Each belief is rendered locally near its entity
 * - No aggregation, summaries, or explanations
 * - UnknownState represents absence of canonical entity
 *
 * See: ui_contract.md, design_review_checklist.md, phase_1_ui_freeze_criteria.md
 */

import { BeliefContainer } from "../../components/belief/BeliefContainer";
import { UnknownState } from "../../components/belief/UnknownState";
import { ReadLayout } from "../../layouts/ReadLayout";

export function AreaOverviewPage() {
    return (
        <ReadLayout>
            <h1>Area Overview</h1>

            <section>
                <h2>Entity A</h2>
                <BeliefContainer beliefState="active_low_confidence" />
            </section>

            <section>
                <h2>Entity B</h2>
                <BeliefContainer beliefState="active_high_confidence" />
            </section>

            <section>
                <h2>Entity C</h2>
                <BeliefContainer beliefState="dormant" />
            </section>

            <section>
                <h2>Entity D</h2>
                <UnknownState />
            </section>
        </ReadLayout>
    );
}
