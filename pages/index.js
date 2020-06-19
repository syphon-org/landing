import Link from 'next/link'

// Data
import thingsJson from '../public/static/all-things.json';

// Components
import Header from '../components/header';

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

function Main({ things }) {
    return (
        <div className="app sans-serif">
            <Header />
            <div className="p-4 shadow rounded bg-white">
                <h1 className="text-purple-500 leading-normal">Next.js</h1>
                <p className="text-gray-500">with Tailwind CSS</p>
            </div>
            {
                things.map((thing) => {
                    const slug = thing.name.toLowerCase().replace(/ /g, '-');
                    return (
                        <Link href={`/things/${slug}`}>
                            <h4>
                                {thing.name}
                            </h4>
                        </Link>
                    );
                })
            }
            {
                things.map((thing) => {
                    const slug = thing.name.toLowerCase().replace(/ /g, '-');
                    return (
                        <Link href={`/things/${slug}`}>
                            <h4>
                                {thing.name}
                            </h4>
                        </Link>
                    );
                })
            }
            {
                things.map((thing) => {
                    const slug = thing.name.toLowerCase().replace(/ /g, '-');
                    return (
                        <Link href={`/things/${slug}`}>
                            <h4>
                                {thing.name}
                            </h4>
                        </Link>
                    );
                })
            }
            {
                things.map((thing) => {
                    const slug = thing.name.toLowerCase().replace(/ /g, '-');
                    return (
                        <Link href={`/things/${slug}`}>
                            <h4>
                                {thing.name}
                            </h4>
                        </Link>
                    );
                })
            }
            {
                things.map((thing) => {
                    const slug = thing.name.toLowerCase().replace(/ /g, '-');
                    return (
                        <Link href={`/things/${slug}`}>
                            <h4>
                                {thing.name}
                            </h4>
                        </Link>
                    );
                })
            }
            {
                things.map((thing) => {
                    const slug = thing.name.toLowerCase().replace(/ /g, '-');
                    return (
                        <Link href={`/things/${slug}`}>
                            <h4>
                                {thing.name}
                            </h4>
                        </Link>
                    );
                })
            }
            {
                things.map((thing) => {
                    const slug = thing.name.toLowerCase().replace(/ /g, '-');
                    return (
                        <Link href={`/things/${slug}`}>
                            <h4>
                                {thing.name}
                            </h4>
                        </Link>
                    );
                })
            }
        </div>
    )
}

export default Main