import { put, call, takeLatest } from "redux-saga/effects";
import requestStorageComposition from "../api/requestCountres";
import { readData, writeData } from "./slice/quizSlice";

export function* read(region) {
   const data = yield call(
      requestStorageComposition,
      "https://restcountries.com/v3.1/region/" + region.payload
   );
   yield put(writeData(data));
}

export function* watchClickSaga() {
   yield takeLatest(readData, read);
}

export default function* rootSaga() {
   yield watchClickSaga();
}
