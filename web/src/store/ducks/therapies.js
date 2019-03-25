import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  requestTherapies: ["page"],
  requestTherapiesByCategory: ["page", "category"],
  successTherapies: ["therapies"],
  requestInfiniteTherapies: ["page"],
  successInfiniteTherapies: ["therapies"],
  requestInfiniteTherapiesByCategory: ["page", "category"]
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

const request = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true,
    page: action.page
  };
};

const requestByCategory = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true,
    category: action.category
  };
};

const requestInfiniteByCategory = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true,
    category: action.category
  };
};

const success = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  data: action.therapies.data,
  pagination: {
    page: action.therapies.page,
    lastPage: action.therapies.lastPage
  }
});

const requestInfinite = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true,
    page: action.page
  };
};
const successInfinite = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: false,
    data: state.data.concat(action.therapies.data),
    pagination: {
      page: action.therapies.page,
      lastPage: action.therapies.lastPage
    }
  };
};

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.REQUEST_THERAPIES_BY_CATEGORY]: requestByCategory,
  [Types.REQUEST_THERAPIES]: request,
  [Types.SUCCESS_THERAPIES]: success,
  [Types.REQUEST_INFINITE_THERAPIES]: requestInfinite,
  [Types.SUCCESS_INFINITE_THERAPIES]: successInfinite,
  [Types.REQUEST_INFINITE_THERAPIES_BY_CATEGORY]: requestInfiniteByCategory
});
