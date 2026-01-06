## UI Design Review Checklist (Phase-1)

> This PR must comply with:
> - [ui_contract.md](../docs/ui_contract.md)
> - [design_review_checklist.md](../docs/design_review_checklist.md)
> - [ui_constitution_v1.md](https://github.com/gonaj/gonaj-backend/blob/HEAD/docs/01_architecture/ui_constitution_v1.md) (core repo)

### Constitutional Compliance
- [ ] I have reviewed [design_review_checklist.md](../docs/design_review_checklist.md)
- [ ] This change does not introduce UI authority or certainty
- [ ] This change does not violate Phase-1 scope

### Truth & Uncertainty
- [ ] UI represents belief, not truth
- [ ] Uncertainty is explicit where data is weak or missing
- [ ] Absence is not represented as error

### Forbidden Patterns (Confirmed Absent)
- [ ] No Edit / Fix / Correct actions
- [ ] No voting, rating, or approval metaphors
- [ ] No numeric confidence or scores
- [ ] No contribution nudges in empty areas
- [ ] No proactive login or permission prompts

### Contribution & Permissions
- [ ] Contribution is contextual and user-initiated
- [ ] Login is requested only after explicit intent
- [ ] Permissions are optional and deferrable

### Reviewer Assertion
- [ ] I confirm this change preserves or strengthens user trust
- [ ] I understand violations block merge regardless of UX quality
