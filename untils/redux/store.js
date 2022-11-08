import { useMemo } from "react";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import interfaceSlice from "./slice/interfaceSlice";
import quizSlice from "./slice/quizSlice";

let store;
const sagaMiddleware = createSagaMiddleware();

store = configureStore({
   reducer: { quiz: quizSlice, interface: interfaceSlice },
   middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export const initializeStore = (preloadedState) => {
   let _store = store ?? store(preloadedState);

   if (preloadedState && store) {
      _store = initStore({
         ...store.getState(),
         ...preloadedState,
      });
      store = undefined;
   }

   if (typeof window === "undefined") return _store;
   if (!store) store = _store;

   return _store;
};

export function useStore(initialState) {
   const store = useMemo(() => initializeStore(initialState), [initialState]);
   return store;
}
