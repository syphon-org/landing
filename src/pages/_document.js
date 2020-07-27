import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head >
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
                    <meta name="description" content="A privacy centric matrix client" />
                    <meta property="og:title" content="Syphon • A privacy centric matrix client" />
                    <meta property="og:image" content="/app_logo.svg" />
                    <meta property="og:description" content="An open source, not for profit chat client with a focus on privacy and ease of use" />
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