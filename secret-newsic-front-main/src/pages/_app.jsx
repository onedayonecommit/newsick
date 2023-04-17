import { Provider, useSelector } from "react-redux";
import Layout from "@/components/Layout";
import "@/styles/globals.min.css";
import SignUp from "./sign_up";
import { store, persistor, wrapper } from "@/redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { useEffect, useState } from "react";

const App = ({ Component, ...pageProps }) => {
  // const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          {Component !== SignUp ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </PersistGate>
      </Provider>
    </>
  );
};
// 아래와 같이 쓰는건 옛날 문법! 위에서 wrapper.useWrappedStore를 사용했으면 그냥 내보내주면됨
// export default wrapper.withRedux(App);
export default App;
