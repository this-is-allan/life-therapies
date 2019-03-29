import { all } from "redux-saga/effects";

import {
  watchfetchTherapies,
  watchTherapiesByCategory,
  watchFetchInfiniteTherapies,
  watchInfiniteTherapiesByCategory
} from "./therapies";

import { watchfetchTherapy } from "./therapy";

export default function* rootSaga() {
  yield all([
    watchTherapiesByCategory(),
    watchfetchTherapies(),
    watchFetchInfiniteTherapies(),
    watchInfiniteTherapiesByCategory(),
    watchfetchTherapy()
  ]);
}
