import Head from 'next/head'

import { Header } from '../../components/header'
import { SectionWaves } from '../../components/section-waves/index'
import { Footer } from '../../components/footer/index'
import { githubLogoCyan } from '../../global/assets'

export const config = {
  unstable_runtimeJS: false,
}

// TODO: setup github api
// maybe get issues by tag ?

// https://api.github.com/

// await octokit.request('GET /repos/syphon-org/syphon/projects', {
//   owner: 'syphon-org',
//   repo: 'syphon',
//   mediaType: {
//     previews: [
//       'inertia'
//     ]
//   }
// })

export default function roadmap() {
  return (
    <div className="app sans-serif bg-white items-center">
      <Head>
        <title>Roadmap</title>
        <meta
          name="description"
          content="Project Roadmap" />
        <meta
          property="og:title"
          content="Syphon • A privacy centric matrix client" />
        <meta
          property="og:description"
          content="An open source, not for profit chat client with a focus on privacy and ease of use" />
      </Head>

      <Header />
      <section className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center pt-32 bg-white w-screen">
        <div className="flex flex-col md:w-1/2 justify-center md:items-start sm:items-center text-center md:text-left bg-white">
          <h1 className="text-teal mt-1 text-5xl leading-tight font-bold rubik">
            ROADMAP
          </h1>
          <a
            href="https://github.com/syphon-org/syphon"
            target="_blank"
            rel="nofollow noreferrer noopener"
            className="flex text-teal cursor-pointer justify-center items-center mt-3">
            <span className="mr-2 pride rubik">OPEN ALPHA</span>
            <img className="ml-1 inline-block align-top" height={24} width={24} src={githubLogoCyan.src} />
          </a>
        </div>
      </section>
      {/* <SectionWaves/> */}

      {/* TODO: get custom css components working to clean up the html
            TODO: get things centered
       
       */}
      <section className="bg-white py-8 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-xl pl-8">

          <div className="p-6 w-full"  >
            <h3 className="text-3xl text-white font-bold leading-none mb-3 rounded-xl bg-teal w-max p-4 rubik">
              <span> v0.2.0</span> 🎉 (Completed)
            </h3>
            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"
                  checked></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Multiaccount support
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"
                  checked></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Multimedia Messaging
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"
                  checked></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Deactivate Account
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"
                  checked />
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Password restriction
                </span>
              </label>
            </div>


            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"
                  checked></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Token Authentication
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"
                  checked></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Support for Autofill
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"
                  checked></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Forgot Password / Reset Password (email)
                </span>
              </label>
            </div>


            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"
                  checked></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Token Authentication
                </span>
              </label>
            </div>
          </div>

          <div className="p-6 w-full" >
            <h3 className=" text-3xl text-white font-bold leading-none mb-3 rounded-xl bg-teal w-max p-4 rubik">
              <span>v0.3.0</span> (In Progress)
            </h3>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Cross Signing
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Manual Key Import / Export
                </span>
              </label>
            </div>


            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Stable Desktop Builds
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  State Events In Timeline
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Message Formatting
                </span>
              </label>
            </div>


          </div>

          <div className="p-6 w-full">
            <h3 className=" text-3xl text-white font-bold leading-none mb-3 rounded-xl bg-teal w-max p-4 rubik">
              v0.4.0
            </h3>


            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Out-Of-Band SMS / MMS
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Spaces
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Theme Exports and Templates
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Full UI Customizations
                </span>
              </label>
            </div>


            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Full Backups
                </span>
              </label>
            </div>

          </div>

          <div className="p-6 w-full">
            <h3 className=" text-3xl text-white font-bold leading-none mb-3 rounded-xl bg-teal w-max p-4 rubik">
              v0.5.0
            </h3>
            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  VoIP Calls
                </span>
              </label>

              <div className="pt-2 pb-3">
                <label className="mt-4 flex">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                    disabled="true"></input>
                  <span className="ml-2 font-bold text-2xl text-gray-600">
                    Sticker Pack Support
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="p-6 w-full">
            <h3 className=" text-3xl text-white font-bold leading-none mb-3 rounded-xl bg-teal w-max p-4 rubik">
              v0.6.0
            </h3>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Pinecone / Libp2p integration
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Locally run server on the client
                </span>
              </label>
            </div>

            <div className="pt-2 pb-3">
              <label className="mt-4 flex">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-2xl h-8 w-8 text-teal border-4 border-teal"
                  disabled="true"></input>
                <span className="ml-2 font-bold text-2xl text-gray-600">
                  Custom Desktop UI
                </span>
              </label>
            </div>
          </div>

          <div className="p-6 w-full">
            <h3 className=" text-3xl text-white font-bold leading-none mb-3 rounded-xl bg-teal w-max p-4 rubik">
              And Much More!
            </h3>
          </div>
        </div>
      </section>

      <svg
        className="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd">
          <g
            transform="translate(-1.000000, -14.000000)"
            fillRule="nonzero">
            <g
              className="wave"
              fill="#FEFEFE">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z" />
            </g>
            <g
              transform="translate(1.000000, 15.000000)"
              fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001" />
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001" />
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003" />
              </g>
            </g>
          </g>
        </g>
        <SectionWaves />
      </svg>

      <section className="container mx-auto text-center py-6 mb-4">
        <h1 className="w-full my-8 text-5xl font-bold leading-tight text-center text-white">
          want to get involved?
        </h1>
        <div className="flex flex-row justify-center items-center">
          <a
            className="text-4xl leading-tight underline mx-8"
            style={{ cursor: 'pointer', letterSpacing: '0.5' }}>
            help@syphon.org
          </a>
        </div>
        <div className="w-full my-8">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <div className="flex flex-row flex-wrap text-center justify-center items-center">
          <a
            className="shadow mx-4 my-4"
            href="https://patreon.com/ereio">
            <img
              className="h-16"
              alt="Patreon"
              src="assets/external/patreon.png" />
          </a>
          <a
            className="flex flex-row justify-start items-center shadow mx-4 my-4"
            href="https://etherscan.io/address/0xE565D0f3ab559b4Cd166c26893AeC4418F1A6EF5"
            style={{ backgroundColor: '#497391', width: '272px' }}>
            <img
              className="h-16 mr-4"
              alt="Patreon"
              src="assets/external/eth-material.svg" />
            <span className="rubik text-xl">Donate Ethereum</span>
          </a>
          <a
            className="flex flex-row justify-start items-center shadow mx-4 my-4"
            href="https://www.blockchain.com/btc/address/bc1qqypclrq2jmtedjylacqepr7s06w59dsqg050w2"
            style={{ backgroundColor: '#F7931A', width: '272px' }}>
            <img
              className="h-16 mr-4"
              alt="Patreon"
              src="assets/external/btc-material.svg" />
            <span className="rubik text-xl">Donate Bitcoin</span>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
