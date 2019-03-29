import { takeEvery, put, call } from "redux-saga/effects";

import { Creators as TherapiesActions, Types } from "../store/ducks/therapies";
// import { Creators as TherapyActions } from "../store/ducks/therapy";
import Api from "../services/api";

export function* fetchTherapies({ page }) {
  try {
    const response = yield call(Api.therapies.getAll, page);
    yield put(TherapiesActions.successTherapies(response));
  } catch (e) {}
}

export function* fetchInfiniteTherapies({ page }) {
  try {
    const response = yield call(Api.therapies.getAll, page);
    yield put(TherapiesActions.successInfiniteTherapies(response));
  } catch (e) {}
}

export function* fetchInfiniteTherapiesByCategory({ page, category }) {
  try {
    const response = yield call(Api.therapies.getAll, page, category);
    yield put(TherapiesActions.successInfiniteTherapies(response));
  } catch (e) {}
}

export function* fetchTherapiesByCategory({ page, category }) {
  try {
    const response = yield call(Api.therapies.getAll, page, category);
    yield put(TherapiesActions.successTherapies(response));
  } catch (e) {}
}

export function* watchfetchTherapies(category) {
  yield takeEvery(Types.REQUEST_THERAPIES, fetchTherapies);
}

export function* watchTherapiesByCategory(category) {
  yield takeEvery(
    Types.REQUEST_THERAPIES_BY_CATEGORY,
    fetchTherapiesByCategory
  );
}

export function* watchFetchInfiniteTherapies(category) {
  yield takeEvery(Types.REQUEST_INFINITE_THERAPIES, fetchInfiniteTherapies);
}

export function* watchInfiniteTherapiesByCategory(category) {
  yield takeEvery(
    Types.REQUEST_INFINITE_THERAPIES_BY_CATEGORY,
    fetchInfiniteTherapiesByCategory
  );
}
