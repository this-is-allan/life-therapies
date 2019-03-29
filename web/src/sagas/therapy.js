import { takeEvery, put, call } from "redux-saga/effects";

import { Creators as TherapyActions, Types } from "../store/ducks/therapy";
import Api from "../services/api";

export function* fetchTherapy({ id }) {
  console.log("passou");
  try {
    const response = yield call(Api.therapies.fetchTherapy, id);
    yield put(TherapyActions.successTherapy(response));
  } catch (e) {}
}

export function* watchfetchTherapy(id) {
  yield takeEvery(Types.REQUEST_THERAPY, fetchTherapy);
}
