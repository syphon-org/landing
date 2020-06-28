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