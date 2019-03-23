import { all } from "redux-saga/effects";

import { watchfetchTherapies, watchTherapiesByCategory } from "./therapy";

export default function* rootSaga() {
  yield all([watchTherapiesByCategory(), watchfetchTherapies()]);
}
