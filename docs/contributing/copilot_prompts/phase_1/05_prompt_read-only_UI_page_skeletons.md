You are implementing Phase-1 read-only UI page skeletons for the Gonaj frontend.

This task is STRICTLY LIMITED to structure and visual semantics.
You must NOT introduce flows, actions, backend integration, or contributor behavior.

Follow all instructions exactly. Do not guess or optimize.

====================================================================
1. GOVERNING DOCUMENTS (MANDATORY CONTEXT)
====================================================================

You must align with the following documents in this repository:

- docs/ui_contract.md
- docs/design_review_checklist.md
- docs/phase_1_ui_freeze_criteria.md
- Phase-1 Frontend Vision document (screens, surfaces, belief placement)

Key non-negotiable principles:
- Read-only UI only
- No authority signals
- No calls to action
- No contributor affordances
- Belief is rendered, never computed
- Absence is explicit and calm
- No backend or API integration

====================================================================
2. SCOPE OF WORK
====================================================================

Create READ-ONLY PAGE SKELETONS that:
- Demonstrate screen structure
- Demonstrate belief placement
- Use mocked belief states
- Have zero backend dependency

You must ONLY add new files.
Do NOT modify existing components.

====================================================================
3. FILES AND FOLDER STRUCTURE (EXACT)
====================================================================

Create the following new files and directories:

src/
├── layouts/
│   └── ReadLayout.tsx
├── pages/
│   ├── AreaOverview/
│   │   └── AreaOverviewPage.tsx
│   ├── EntityDetail/
│   │   └── EntityDetailPage.tsx
│   └── ListView/
│       └── ListViewPage.tsx

Do not create additional folders or files.

====================================================================
4. TECHNICAL CONSTRAINTS
====================================================================

For ALL new files:

- React functional components only
- TypeScript only
- No state hooks
- No effects
- No API calls
- No routing setup
- No auth usage
- No analytics
- No logging
- No emojis or special characters in strings
- Minimal markup only

These are STRUCTURAL placeholders, not features.

====================================================================
5. BELIEF RENDERING RULES (CRITICAL)
====================================================================

- Use existing belief components ONLY:
  - BeliefContainer
  - UnknownState

- BeliefContainer must receive BACKEND belief states verbatim:
  - "active_low_confidence"
  - "active_high_confidence"
  - "dormant"

- UnknownState must be used ONLY to represent absence of a canonical entity.
- Do NOT pass "unknown" to BeliefContainer.

Belief states must be MOCKED (hardcoded).

====================================================================
6. PAGE RESPONSIBILITIES
====================================================================

--------------------------------------------------
6.1 ReadLayout
--------------------------------------------------

Purpose:
- Provide a neutral read-only shell
- No navigation
- No headers implying authority
- No actions

Requirements:
- Accept children
- Render children inside a simple container
- No styling beyond basic layout spacing

--------------------------------------------------
6.2 AreaOverviewPage
--------------------------------------------------

Represents:
- A geographic area overview

Must include:
- Page title
- Multiple sections showing:
  - One entity with low confidence belief
  - One entity with high confidence belief
  - One entity with dormant belief
  - One case with no canonical entity (UnknownState)

Rules:
- Each belief rendered locally near its entity
- No aggregation
- No summaries
- No explanations

--------------------------------------------------
6.3 EntityDetailPage
--------------------------------------------------

Represents:
- A single canonical entity

Must include:
- Page title
- Exactly ONE belief state rendered using BeliefContainer
- Use a mocked high-confidence belief

Rules:
- One belief, one place
- No metadata
- No timestamps
- No reasoning text

--------------------------------------------------
6.4 ListViewPage
--------------------------------------------------

Represents:
- Sparse optional list view

Must include:
- Page title
- Two list items
- Each item shows:
  - Entity label
  - Belief rendered via BeliefContainer

Rules:
- Belief is secondary to identity
- No sorting
- No filtering
- No grouping

====================================================================
7. DOCUMENTATION IN CODE (REQUIRED)
====================================================================

At the top of EACH file:
- Add a block comment explaining:
  - What the page/layout represents
  - That it is Phase-1 read-only
  - That belief states are mocked intentionally
  - That no backend integration exists

Keep comments factual and neutral.

====================================================================
8. EXPLICIT NON-GOALS (DO NOT IMPLEMENT)
====================================================================

You must NOT:
- Add buttons or links
- Add forms
- Add routing
- Add auth
- Add contributor UI
- Add profile or dashboard
- Add interactivity
- Add CSS frameworks
- Add placeholder text suggesting future actions

====================================================================
9. OUTPUT RULES
====================================================================

Output ONLY the newly created files.
No explanations.
No markdown.
No commentary.
No extra text.

====================================================================
END OF PROMPT
====================================================================