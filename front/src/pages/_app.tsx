import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import Layout from "../components/Layout";

const App = ({ Component, ...pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};
export default wrapper.withRedux(App);
