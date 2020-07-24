import Link from 'next/link'
import Head from 'next/head'

// Components
import Header from 'components/header';
import SectionWaves from 'components/section-waves';

import assets from 'global/assets';
import Footer from 'components/footer';

function Main({ things }) {
    return (
        <div className="app sans-serif gradient">
            <Head>
                <title>Syphon • A privacy centric matrix client</title>
                <meta name="description" content="A privacy centric matrix client" />
                <meta property="og:title" content="Syphon" />
                <meta property="og:image" content="/android-chrome-512x512.png" />
                <meta property="og:description" content="A privacy centric matrix client - not for profit, open source chat client with a focus on privacy and ease of use" />
            </Head>
            <Header />
            <section class="pt-32">
                <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center">
                    <div class="flex flex-col w-full md:w-1/2 justify-center md:items-start sm:items-center text-center md:text-left">
                        <a href="https://github.com/syphon-org/syphon" target="_blank" rel="nofollow noreferrer noopener" class="text-white cursor-pointer justify-center items-center">
                            <span class="mr-2 pride rubik">OPEN ALPHA</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" preserveAspectRatio="xMinYMin" class="text-white fill-current ml-1 inline-block align-top"><path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"></path></svg>
                        </a>
                        <h1 class="my-4 text-5xl leading-tight rubik">chat with your privacy<br /> and freedom intact</h1>
                        <p class="leading-normal text-2xl mb-8 rubik">a not for profit, open source matrix client<br /> with a focus on privacy and ease of use*</p>
                        <div class='flex flex-row flex-wrap justify-center items-center'>
                            <div class="flex justify-center items-center mr-1 mt-1" style={{ minHeight: 52, minWidth: 172, }}>
                                <a href='https://play.google.com/store/apps/details?id=org.tether.tether'>
                                    <img height="80px" style={{ maxWidth: 188 }} alt='Get it on Google Play' src='assets/external/en_badge_web_generic.png' />
                                </a>
                            </div>
                            <div class="flex justify-center items-center mr-1 mt-1" style={{ minHeight: 52, minWidth: 172, }}>
                                <a href='https://apps.apple.com/us/app/syphon/id1496285352'>
                                    <img height="80px" style={{ height: 58, width: 172, }} alt='Download on the App Store' src='assets/external/download_on_the_app_store.svg' />
                                </a>
                            </div>
                            <div class="flex justify-center items-center mt-1" style={{ minHeight: 52, minWidth: 188, }}>
                                <a href='https://f-droid.org/packages/org.tether.tether'>
                                    <img height="80px" style={{ height: 58, width: 188 }} alt='Get it on F-Droid' src='assets/external/get-it-on-fdroid.png' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2 sm:px-6 md:px-0 mt-24 text-center">
                        <img src={assets.undrawMobileUser} />
                    </div>
                    <div class="flex flex-row justify-center items-center text-center pt-4 pb-24 mb-12">
                        <span>
                            * syphon is still in Open Alpha and is not considered ready for everyday use
                        </span>
                    </div>
                </div>
            </section>
            <SectionWaves />
            <section class="bg-white  py-8">
                <div class="container max-w-5xl mx-auto m-8">
                    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">features</h1>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>

                    <div class="flex flex-wrap lg:mt-16">
                        <div class="w-5/6 sm:w-1/2 p-6">
                            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">chat with matrix</h3>
                            <p class="text-gray-600 mb-8">syphon works by using an encrypted and decentralized capable protocol called <b>Matrix</b></p>
                        </div>
                        <div class="w-full sm:w-2/5 p-6">
                            <div class="w-full sm:h-64 mx-auto" viewBox="0 0 1177 598.5">
                                <img src={assets.undrawMessagingFun} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="flex flex-wrap flex-col-reverse sm:flex-row lg:mt-16">
                        <div class="w-full sm:w-1/2 p-6 mb-6">
                            <div class="w-5/6 sm:h-64 mx-auto" viewBox="0 0 1176.60617 873.97852" >
                                <img src={assets.undrawConnection} />
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 p-6 mb-6">
                            <div class="align-middle">
                                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">end to end encrypted*</h3>
                                <p class="text-gray-600 mb-8">
                                    syphon uses the olm/megolm encryption library provided by Matrix to keep your chats private from others<br></br>*currently only works for direct or one-on-one chats
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:mt-16">
                            <div class="w-5/6 sm:w-1/2 p-6">
                                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">customize it</h3>
                                <p class="text-gray-600 mb-8">
                                    pick colors, themes, and eventually different widgets throughout the app according to your preference
                                </p>
                            </div>
                            <div class="w-full sm:w-2/5 p-6">
                                <div class="w-full sm:h-64 mx-auto" viewBox="0 0 1177 598.5">
                                    <img src={assets.undrawInsertBlock} />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap flex-col-reverse sm:flex-row lg:mt-16">
                            <div class="w-full sm:w-2/5 p-6 mt-6">
                                <div class="w-5/6 sm:h-64 mx-auto" viewBox="0 0 1176.60617 873.97852" >
                                    <img src={assets.undrawVoid} />
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 p-6 mt-6">
                                <div class="align-middle">
                                    <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">no analytics</h3>
                                    <p class="text-gray-600 mb-8">no analytics or tracking are present outside what matrix attempts to track on clients, but contact us at support@syphon.org if you need help
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 class="w-full mb-2 mt-32 text-5xl font-bold leading-tight text-center text-gray-800">future goals</h1>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>

                    <div class="flex flex-wrap lg:mt-16">
                        <div class="w-5/6 sm:w-1/2 p-6">
                            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">peer to peer messaging</h3>
                            <p class="text-gray-600 mb-8">host the server to one or all of your devices without the need for a homeserver
                            <br /><br />
                            </p>
                        </div>
                        <div class="w-full sm:w-2/5 p-6">
                            <div class="w-full sm:h-64 mx-auto" viewBox="0 0 1177 598.5">
                                <img src={assets.undrawProfileData} />
                            </div>

                        </div>
                    </div>
                    <div class="flex flex-wrap flex-col-reverse sm:flex-row lg:mt-16">
                        <div class="w-full sm:w-1/2 p-6 mt-6">
                            <div class="w-5/6 sm:h-64 mx-auto" viewBox="0 0 1176.60617 873.97852" >
                                <img src={assets.undrawGroupChat} />
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 p-6 mt-6">
                            <div class="align-middle">
                                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">transfer data</h3>
                                <p class="text-gray-600 mb-8">transfer your data from one homeserver to another, or locally with P2P
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
            <section class="container mx-auto text-center py-6 mb-4">
                <h1 class="w-full my-8 text-5xl font-bold leading-tight text-center text-white">
                    want to get involved?
                </h1>
                <div class="flex flex-row justify-center items-center">
                    <a class="text-4xl leading-tight underline mx-8" style={{ cursor: 'pointer', letterSpacing: '0.5', }}>
                        help@syphon.org
                        </a>
                </div>
                <div class="w-full my-8">
                    <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div class="flex flex-row flex-wrap justify-center items-center">
                    <a class="shadow mx-8 my-4" href="https://patreon.com/ereio">
                        <img class="h-16" alt="Patreon" src='assets/external/patreon.png' />
                    </a>
                    <a class="shadow mx-8 my-4" href="https://liberapay.com/ereio">
                        <img class="h-16" alt="Libera Pay" src='assets/external/fund-via-liberapay.png' />
                    </a>
                    <a class="flex flex-row justify-start items-center shadow mx-8 my-4" href="https://etherscan.io/address/0xE565D0f3ab559b4Cd166c26893AeC4418F1A6EF5"
                        style={{ backgroundColor: '#497391', width: '272px' }}>
                        <img class="h-16 mr-4" alt="Patreon" src='assets/external/eth-material.svg' />
                        <span class="rubik text-xl">Donate Etherem</span>
                    </a>
                    <a class="flex flex-row justify-start items-center shadow mx-8 my-4" href="https://www.blockchain.com/btc/address/bc1qqypclrq2jmtedjylacqepr7s06w59dsqg050w2"
                        style={{ backgroundColor: '#F7931A', width: '272px' }}>
                        <img class="h-16 mr-4" alt="Patreon" src='assets/external/btc-material.svg' />
                        <span class="rubik text-xl">Donate Bitcoin</span>
                    </a>
                </div>
            </section>
            <Footer />
        </div >
    )
}


export default Main