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

   // After navigating to a page with an initial Redux state, merge that state
   // with the current state in the store, and create a new store
   if (preloadedState && store) {
      _store = initStore({
         ...store.getState(),
         ...preloadedState,
      });
      // Reset the current store
      store = undefined;
   }

   // For SSG and SSR always create a new store
   if (typeof window === "undefined") return _store;
   // Create the store once in the client
   if (!store) store = _store;

   return _store;
};

export function useStore(initialState) {
   const store = useMemo(() => initializeStore(initialState), [initialState]);
   return store;
}
