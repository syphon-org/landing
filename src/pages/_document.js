/* eslint-disable max-classes-per-file */
import React from 'react'

import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const isDev = process.env.NODE_ENV === 'development'
    return (
      <Html>
        <Head {...this.props}>
          <link
            rel="preload"
            href="/fonts/Rubik-Regular.ttf"
            as="Rubik"
            crossOrigin="" />
          <link
            rel="preload"
            href="/fonts/Rubik-Light.ttf"
            as="Rubik-Light"
            crossOrigin="" />
          <link
            rel="preload"
            href="/fonts/Rubik-Bold.ttf"
            as="Rubik-Bold"
            crossOrigin="" />
          <link
            rel="shortcut icon"
            href="favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width" />
          <meta
            name="mobile-web-app-capable"
            content="yes" />
          <meta
            name="apple-mobile-web-app-capable"
            content="yes" />
          <meta
            property="og:image"
            content="app-logo.png" />
        </Head>
        <body className="leading-normal tracking-normal text-white gradient">
          <Main />
          {isDev && <NextScript />}
        </body>
      </Html>
    )
  }
}
