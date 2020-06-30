import Link from 'next/link'

// Components 
import assets from '../../global/assets';

function Main() {
    return (
        <div className="app sans-serif">
            <div class="splash flex flex-grow flex-col justify-center items-center">
                <div class="flex-col justify-center items-center text-center">
                    <div class="flex-row justify-center items-center text-center">
                        <img class="m-auto" style={{ height: 140, }} src={assets.iconAppWhite} />
                    </div>
                    <div class="pt-8">
                        <span class="text-4xl">almost here</span>
                    </div>
                </div>
            </div>
        </div >
    )
}



export async function getStaticProps() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    // const things = thingsJson.map((json) => JSON.parse(json));

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            things: {},
        },
    }
}


export default Main