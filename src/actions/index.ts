import { createAction } from "typesafe-actions";

export const fetchSuccess = createAction("@fetch/success", (action) => action);
export const fetchFailure = createAction("@fetch/failure", (action) => action);
export const toggleMonitoring = createAction(
  "@toggle/monitoring",
  (action) => action
);
