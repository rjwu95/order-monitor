import { CommandAction } from "../actions";
import {
  FETCH_FAILURE,
  FETCH_SUCCESS,
  TOGGLE_MONITORING,
} from "../actions/action-type";
import { StoreState } from "../types";

const initialState = {
  success: 0,
  failure: 0,
  monitoring: false,
};

const rootReducer = (
  state: StoreState = initialState,
  action: CommandAction
): StoreState => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        success: state.success + Math.floor(Math.random() * 100),
      };

    case FETCH_FAILURE:
      return {
        ...state,
        failure: state.failure + Math.floor(Math.random() * 2),
      };

    case TOGGLE_MONITORING:
      return {
        ...state,
        monitoring: !state.monitoring,
      };

    default:
      return state;
  }
};

export default rootReducer;
