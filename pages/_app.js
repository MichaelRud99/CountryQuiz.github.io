import { Provider } from "react-redux";
import { useStore } from "../untils/redux/store";

import "../styles/globals.css";
import "../styles/cssVariable.css";
function MyApp({ Component, pageProps }) {
   const store = useStore(pageProps.initialReduxState);

   return (
      <Provider store={store}>
         <Component {...pageProps} />
      </Provider>
   );
}

export default MyApp;
