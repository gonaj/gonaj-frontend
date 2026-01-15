/**
 * ReadLayout Component
 *
 * WHAT THIS REPRESENTS:
 * - A neutral read-only shell for Phase-1 pages
 * - Provides minimal structural framing for content
 *
 * PHASE-1 READ-ONLY CONTEXT:
 * - This layout is strictly read-only
 * - No navigation implying user journeys
 * - No headers implying authority or ownership
 * - No actions or interactive elements
 *
 * MOCKING AND BACKEND INTEGRATION:
 * - This layout has no backend dependency
 * - No API calls, no auth, no routing logic
 *
 * See: ui_contract.md, design_review_checklist.md, phase_1_ui_freeze_criteria.md
 */

interface ReadLayoutProps {
    children: React.ReactNode;
}

export function ReadLayout({ children }: ReadLayoutProps) {
    return (
        <div style={{ padding: "1rem" }}>
            {children}
        </div>
    );
}
