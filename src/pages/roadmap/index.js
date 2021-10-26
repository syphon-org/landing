import Head from 'next/head'

import { Header } from '../../components/header'
import { FooterWaves, SectionWaves } from '../../components/section-waves/index'
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
                  Themes, Colors, and Widget Customizations
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
      <FooterWaves />
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
