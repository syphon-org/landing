import Link from 'next/link'

import thingsJson from '../public/static/all-things.json';

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    const things = thingsJson.map((json) => JSON.parse(json));

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            things: things,
        },
    }
}

/**
 *  https://tachyons.io/components/buttons/pill/index.html#0
 * 
 */
function Main({ things }) {
    return (
        <div className="app sans-serif">
            <header className="bg-color-syphon fixed w-100 pv3 ph3 ph4-m ph5-l">
                <nav className="flex mh2 w-100 items-center justify-between">
                    <div className="flex-1 items-center px-8">
                        <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box" />
                    </div>
                    <div className="flex-1 items-center pa3">
                        <a className="f6 fw4 hover-white no-underline white-70 pv2 ph3" href="/blog" >Blog</a>
                        <a className="f6 fw4 hover-white no-underline white-70 pv2 ph3" href="/about" >About</a>
                        <a className="f6 fw4 hover-white no-underline white-70 pv2 ph3" href="/timeline" >Timeline</a>
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Download
                        </button>
                    </div>
                </nav>
            </header>
            <body>
                <div className="cover bg-color-syphon">
                    <div className="bg-black-80 pb5 pb6-m pb7-l">
                    </div>
                </div>
                {/* {things.map((thing) => {
                    const slug = thing.name.toLowerCase().replace(/ /g, '-');
                    return (
                        <Link href={`/things/${slug}`}>
                            <h4>
                                {thing.name}
                            </h4>
                        </Link>
                    );
                })} */}
            </body>
            <footer>

            </footer>
        </div>
    )
}

export default Main