import Navbar from "@components/Navigation";
import { store } from "lib/redux/app/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/index.scss";

let persistor = persistStore(store);

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="globalWrapper">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <div className="pageWrapper">
            <Component {...pageProps} key={router.asPath} />
          </div>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default MyApp;
