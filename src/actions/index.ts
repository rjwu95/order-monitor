import { FETCH_FAILURE, FETCH_SUCCESS, TOGGLE_MONITORING } from "./action-type";

export type CommandAction = {
  type: typeof FETCH_SUCCESS | typeof FETCH_FAILURE | typeof TOGGLE_MONITORING;
};

export const fetchSuccess = (): CommandAction => ({
  type: FETCH_SUCCESS,
});

export const fetchFailure = (): CommandAction => ({
  type: FETCH_FAILURE,
});

export const toggleMonitoring = (): CommandAction => ({
  type: TOGGLE_MONITORING,
});
