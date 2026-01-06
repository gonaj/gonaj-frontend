/**
 * Centralized copy for belief state components.
 *
 * These strings are frozen for Phase-1 and must not be modified
 * without a new UI Constitution version.
 *
 * See: ui_constitution_v1.md, UI_CONTRACT.md
 */

export const UNKNOWN_STATE_MESSAGE =
  "Information for this area is currently limited.";

export const DORMANT_STATE_MESSAGE =
  "Information here has not been observed recently.";

export const LOW_CONFIDENCE_STATE_MESSAGE =
  "Information exists here, but its reliability is uncertain.";

export const HIGH_CONFIDENCE_STATE_MESSAGE =
  "This information has been observed consistently in this area.";
