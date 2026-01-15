/**
 * ListViewPage Component
 *
 * WHAT THIS REPRESENTS:
 * - A sparse optional list view of entities
 * - Demonstrates belief placement within list items
 *
 * PHASE-1 READ-ONLY CONTEXT:
 * - This page is strictly read-only
 * - No contributor affordances
 * - No sorting, filtering, or grouping
 * - No backend integration
 *
 * MOCKING AND BACKEND INTEGRATION:
 * - Belief states are mocked intentionally
 * - No API calls, no auth, no dynamic data
 * - Hardcoded list items demonstrate structural placement only
 *
 * BELIEF RENDERING:
 * - Each list item shows entity label and belief
 * - Belief is secondary to identity
 *
 * See: ui_contract.md, design_review_checklist.md, phase_1_ui_freeze_criteria.md
 */

import { BeliefContainer } from "../../components/belief/BeliefContainer";
import { ReadLayout } from "../../layouts/ReadLayout";

export function ListViewPage() {
    return (
        <ReadLayout>
            <h1>List View</h1>

            <ul>
                <li>
                    <span>Entity One</span>
                    <BeliefContainer beliefState="active_high_confidence" />
                </li>
                <li>
                    <span>Entity Two</span>
                    <BeliefContainer beliefState="active_low_confidence" />
                </li>
            </ul>
        </ReadLayout>
    );
}
