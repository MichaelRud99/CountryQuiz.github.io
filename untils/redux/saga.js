import { put, call, takeLatest } from "redux-saga/effects";
import requestStorageComposition from "../../pages/api/requestCountres";
import {
   readData,
   writeData,
   writeQuestion,
   deleteQuestion,
} from "./slice/quizSlice";
import requests from "../../pages/api/requests";
import requestDelete from "../../pages/api/requestDelete";

export function* read(region) {
   const data = yield call(
      requestStorageComposition,
      "https://restcountries.com/v3.1/region/" + region.payload
   );
   yield put(writeData(data));
}

export function* writeQuestionGenerator(value) {
   yield requests(value.payload, "POST");
}

export function* deleteQuestionGenerator() {
   const data = yield call(
      requestStorageComposition,
      "http://localhost:4200/questions/"
   );
   for (let i = 0; i < 10; i++) {
      yield requestDelete(data[i].id,false);
   }
}

export function* watchClickSaga() {
   yield takeLatest(readData, read);
   yield takeLatest(writeQuestion, writeQuestionGenerator);
   yield takeLatest(deleteQuestion, deleteQuestionGenerator);
}

export default function* rootSaga() {
   yield watchClickSaga();
}
