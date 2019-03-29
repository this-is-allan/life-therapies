import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  requestTherapy: ["id"],
  successTherapy: ["therapy"]
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  loading: true,
  data: [],
  error: null
};

const request = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true
  };
};

const success = (state = INITIAL_STATE, action) => {
  console.log("success");
  return {
    ...state,
    loading: false,
    data: action.therapy
  };
};

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.REQUEST_THERAPY]: request,
  [Types.SUCCESS_THERAPY]: success
});
