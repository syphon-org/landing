import Link from 'next/link'

// Components
import Header from '../../components/header';
import SectionWaves from '../../components/section-waves';

import assets from '../../global/assets';
import Footer from 'components/footer';

function Main({ things }) {
    return (
        <div className="app sans-serif">
            <Header />
            <div class="pt-24">
                <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center">
                    <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                        <h1 style={{ fontFamily: 'Rubik' }} class="my-4 text-5xl leading-tight">chat with your privacy and freedom intact</h1>
                        {/* <h1 class="my-4 text-5xl font-bold leading-tight">privacy focused chat that anyone can use</h1> */}
                        <p style={{ fontFamily: 'Rubik-Light' }} class="leading-normal text-2xl mb-8">a non-profit, open source matrix client with a focus on privacy and ease of use</p>
                        <div class='flex flex-row'>
                            <div style={{ marginLeft: -16 }}>
                                <a href='https://play.google.com/store/apps/details?id=org.tether.tether'>
                                    <img height="80px" style={{ maxWidth: 210 }} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="w-3/6 py-6 text-center">
                        <img class="ml-8 my-16 z-50" src={assets.undrawMobileUser} />
                        {/* <img class="w-full md:w-4/5 z-50" src="images/hero.png" /> */}
                    </div>
                </div>
            </div>
            <SectionWaves />
            <section class="bg-white  py-8">
                <div class="container max-w-5xl mx-auto m-8">
                    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">features</h1>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>

                    <div class="flex flex-wrap mt-16">
                        <div class="w-5/6 sm:w-1/2 p-6">
                            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">chat with matrix</h3>
                            <p class="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
                            <br /><br />
                        </div>
                        <div class="w-full sm:w-1/2 p-6">
                            <div class="w-full sm:h-64 mx-auto" viewBox="0 0 1177 598.5">
                                <img src={assets.undrawMessagingFun} />
                            </div>

                        </div>
                    </div>
                    <div class="flex flex-wrap flex-col-reverse sm:flex-row mt-16">
                        <div class="w-full sm:w-1/2 p-6 mt-6">
                            <div class="w-5/6 sm:h-64 mx-auto" viewBox="0 0 1176.60617 873.97852" >
                                <img src={assets.undrawConnection} />
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 p-6 mt-6">
                            <div class="align-middle">
                                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">end to end encrypted</h3>
                                <p class="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                                <br /><br />
                                </p>
                            </div>
                        </div>

                    </div>


                    <h1 class="w-full mb-2 mt-32 text-5xl font-bold leading-tight text-center text-gray-800">goals</h1>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>

                    <div class="flex flex-wrap mt-16">
                        <div class="w-5/6 sm:w-1/2 p-6">
                            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">peer to peer messaging</h3>
                            <p class="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                            <br /><br />
                            </p>
                        </div>
                        <div class="w-full sm:w-1/2 p-6">
                            <div class="w-full sm:h-64 mx-auto" viewBox="0 0 1177 598.5">
                                <img src={assets.undrawProfileData} />
                            </div>

                        </div>
                    </div>
                    <div class="flex flex-wrap flex-col-reverse sm:flex-row mt-16">
                        <div class="w-full sm:w-1/2 p-6 mt-6">
                            <div class="w-5/6 sm:h-64 mx-auto" viewBox="0 0 1176.60617 873.97852" >
                                <img src={assets.undrawGroupChat} />
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 p-6 mt-6">
                            <div class="align-middle">
                                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">transfer data</h3>
                                <p class="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                                <br /><br />
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                        <g class="wave" fill="#FEFEFE">
                            <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                        </g>
                        <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                            <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                                <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <section class="container mx-auto text-center py-6 mb-12">
                <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">want to get involved?</h1>
                <br /><br />
                <div class="my-6">
                    <a class="text-4xl leading-tight" style={{ cursor: 'pointer', letterSpacing: '0.5', textDecorationLine: 'underline' }}>help@syphon.org</a>
                </div>
                {/* <div class="w-full mb-4">
                    <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                </div> */}
                {/* <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action!</button>  */}
            </section>
            <Footer />
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