import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import Layout from "../components/Layout";
import "../../styles/globals.min.css";

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
// 아래와 같이 쓰는건 옛날 문법! 위에서 wrapper.useWrappedStore를 사용했으면 그냥 내보내주면됨
// export default wrapper.withRedux(App);
export default App;
