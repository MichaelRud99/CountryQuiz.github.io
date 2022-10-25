import { put, call, takeLatest } from "redux-saga/effects";
import requestStorageComposition from "../../pages/api/requestCountres";
import { readData, writeData,writeQuestion } from "./slice/quizSlice";
import requests from "../../pages/api/requests";

export function* read(region) {
   const data = yield call(
      requestStorageComposition,
      "https://restcountries.com/v3.1/region/" + region.payload
   );
   yield put(writeData(data));
}

export function* writeQuestionGenerator(value){
   yield requests(value.payload, "POST");
}

export function* watchClickSaga() {
   yield takeLatest(readData, read);
   yield takeLatest(writeQuestion,writeQuestionGenerator);
}

export default function* rootSaga() {
   yield watchClickSaga();
}
