import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  requestTherapies: [],
  successTherapies: ["therapies"]
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

const request = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true
});

const success = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  data: action.therapies
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.REQUEST_THERAPIES]: request,
  [Types.SUCCESS_THERAPIES]: success
});
