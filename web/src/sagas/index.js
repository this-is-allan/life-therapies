import { all, takeEvery, put, call } from "redux-saga/effects";

import { Creators as TherapiesActions, Types } from "../store/ducks/therapies";
import Api from "../services/api";

function* fetchTherapies() {
  try {
    const response = yield call(Api.therapies.getAll);
    yield put(TherapiesActions.successTherapies(response.therapies));
  } catch (e) {}
}

export default function* root() {
  yield all([yield takeEvery(Types.REQUEST_THERAPIES, fetchTherapies)]);
}
