// 전체 HTML 문서를 커스터마이징 할 수 있게 해준다
// 이 문서를 설정하고 나면 서버를 다시 껐다가 켜주어야한다!
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
// 여기서의 head는 next/head랑은 다른 head이다! 같은 컴포넌트가 아님!
// next/document의 head는 _document 파일 내에서만 사용된다
// import한 컴포넌트를 사용해서 <Html>로 감싸진 TSX 구조를 반환해야한다

import { ServerStyleSheet } from "styled-components";

export default class NewsicDoc extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } catch (error) {
      throw error;
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link href="https://webfontworld.github.io/SCoreDream/SCoreDream.css" rel="stylesheet" />
        </Head>
        <body>
          이건 최상위
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
