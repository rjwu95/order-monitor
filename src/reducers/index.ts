import { ActionType, getType } from "typesafe-actions";
import * as Actions from "../actions";
import { StoreState } from "../types";

const initialState = {
  success: 0,
  failure: 0,
  monitoring: false,
};

const rootReducer = (
  state: StoreState = initialState,
  action: ActionType<typeof Actions>
): StoreState => {
  switch (action.type) {
    case getType(Actions.fetchSuccess):
      return {
        ...state,
        success: state.success + Math.floor(Math.random() * 100),
      };

    case getType(Actions.fetchFailure):
      return {
        ...state,
        failure: state.failure + Math.floor(Math.random() * 2),
      };

    case getType(Actions.toggleMonitoring):
      return {
        ...state,
        monitoring: !state.monitoring,
      };

    default:
      return state;
  }
};

export default rootReducer;
