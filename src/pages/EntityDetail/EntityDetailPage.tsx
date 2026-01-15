/**
 * EntityDetailPage Component
 *
 * WHAT THIS REPRESENTS:
 * - A single canonical entity detail view
 * - Demonstrates belief placement for one entity
 *
 * PHASE-1 READ-ONLY CONTEXT:
 * - This page is strictly read-only
 * - No contributor affordances
 * - No metadata, timestamps, or reasoning text
 * - No backend integration
 *
 * MOCKING AND BACKEND INTEGRATION:
 * - Belief state is mocked intentionally
 * - No API calls, no auth, no dynamic data
 * - Hardcoded high-confidence belief demonstrates structural placement only
 *
 * BELIEF RENDERING:
 * - Exactly one belief state rendered using BeliefContainer
 * - One belief, one place
 *
 * See: ui_contract.md, design_review_checklist.md, phase_1_ui_freeze_criteria.md
 */

import { BeliefContainer } from "../../components/belief/BeliefContainer";
import { ReadLayout } from "../../layouts/ReadLayout";

export function EntityDetailPage() {
    return (
        <ReadLayout>
            <h1>Entity Detail</h1>

            <section>
                <BeliefContainer beliefState="active_high_confidence" />
            </section>
        </ReadLayout>
    );
}
