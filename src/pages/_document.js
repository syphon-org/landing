import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Rubik-Regular.ttf"
            as="Rubik"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Rubik-Light.ttf"
            as="Rubik-Light"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Rubik-Bold.ttf"
            as="Rubik-Bold"
            crossOrigin=""
          />
          <link rel="shortcut icon" href="favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta property="og:image" content="app-logo.png" />
        </Head>
        <body class="leading-normal tracking-normal text-white gradient">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument