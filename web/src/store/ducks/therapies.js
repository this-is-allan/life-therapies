import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  requestTherapies: ["page"],
  requestTherapiesByCategory: ["page", "category"],
  successTherapies: ["therapies"]
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  pagination: {
    page: null,
    lastPage: null
  },
  error: null
};

const request = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true,
  page: action.page
});

const requestByCategory = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true,
  category: action.category
});

const success = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  data: action.therapies.data,
  pagination: {
    page: action.therapies.page,
    lastPage: action.therapies.lastPage
  }
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.REQUEST_THERAPIES_BY_CATEGORY]: requestByCategory,
  [Types.REQUEST_THERAPIES]: request,
  [Types.SUCCESS_THERAPIES]: success
});
