/* eslint-disable max-len */
import Head from 'next/head'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { FooterWaves, SectionWaves } from '../components/section-waves'
import * as assets from '../global/assets'

export const config = {
  unstable_runtimeJS: false,
}

export default function Main() {
  return (
    <div className="app sans-serif gradient">
      <Head>
        <title>Syphon • A privacy centric matrix client</title>
        <meta
          name="description"
          content="A privacy centric matrix client" />
        <meta
          property="og:title"
          content="Syphon • A privacy centric matrix client" />
        <meta
          property="og:description"
          content="An open source, not for profit chat client with a focus on privacy and ease of use" />
      </Head>
      <Header />
      <section className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center pt-32">
        <div className="flex flex-col md:w-1/2 justify-center md:items-start sm:items-center text-center md:text-left">
          <div className="flex flex-row items-center justify-center items-baseline pb-2">
            <a
              href="https://github.com/syphon-org/syphon"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="flex text-white cursor-pointer justify-center items-center">
              <span className="mr-2 pride rubik">OPEN ALPHA</span>
              <img className="ml-1 inline-block align-top" height={24} width={24} src={assets.githubLogo.src} />
            </a>
            <a
              href="https://matrix.to/#/#syphon:matrix.org"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="flex justify-center items-center text-white cursor-pointer ml-3">
              <span className="mr-2 pride rubik">JOIN THE CHAT</span>
              <img className="ml-1 inline-block align-top" height={24} width={24} src={assets.matrixLogo.src} />
            </a>
          </div>
          <h1 className="my-4 text-5xl leading-tight rubik">
            chat with your privacy
            <br />
            {' '}
            and freedom intact
          </h1>
          <p className="leading-normal text-2xl mb-8 rubik">
            a not for profit, open source matrix client
            <br />
            {' '}
            with a focus on privacy and ease of use*
          </p>
          <div className="flex flex-row flex-wrap justify-center items-center">
            <div
              className="flex justify-center items-center mr-1 mt-1"
              style={{ minHeight: 52, minWidth: 172 }}>
              <a href="https://play.google.com/store/apps/details?id=org.tether.tether">
                <img
                  height="80px"
                  style={{ height: 58}}
                  alt="Get it on Google Play"
                  src="assets/external/en_badge_web_generic.png" />
              </a>
            </div>
            <div
              className="flex justify-center items-center mr-1 mt-1"
              style={{ minHeight: 52, minWidth: 172 }}>
              <a href="https://apps.apple.com/app/syphon/id1496285352">
                <img
                  height="80px"
                  style={{ height: 58}}
                  alt="Download on the App Store"
                  src="assets/external/download_on_the_app_store.svg" />
              </a>
            </div>
            <div
              className="flex justify-center items-center mr-1 mt-1"
              style={{ minHeight: 52, minWidth: 172 }}>
              <a href="https://f-droid.org/packages/org.tether.tether">
                <img
                  height="80px"
                  style={{ height: 58}}
                  alt="Get it on F-Droid"
                  src="assets/external/get-it-on-fdroid.png" />
              </a>
            </div>
            <div
              className="flex justify-center items-center mr-1 mt-1"
              style={{ minHeight: 52, minWidth: 172 }}>
              <a href='https://flathub.org/apps/details/org.syphon.Syphon'>
                <img
                height='80px'
                style={{ height: 58}}
                alt='Download on Flathub'
                src='https://flathub.org/assets/badges/flathub-badge-en.png' />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 sm:px-6 md:px-0 mt-24 text-center">
          <img src={assets.undrawMobileUser.src} />
        </div>
        <div className="flex flex-row justify-center items-center text-center pt-4 pb-24 mb-12">
          <span>
            * Syphon is still in Open Alpha and is not considered ready for
            everyday use
          </span>
        </div>
      </section>
      <SectionWaves />
      <section className="bg-white  py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            features
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>

          <div className="flex flex-wrap lg:mt-16">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                chat with matrix
              </h3>
              <p className="text-gray-600 mb-8">
                Syphon connects you to others using a decentralized and
                encrypted network called
                <a href="https://matrix.org">
                  <b>{' Matrix'}</b>
                </a>
              </p>
            </div>
            <div className="w-full sm:w-2/5 p-6">
              <div
                className="w-full sm:h-64 mx-auto"
                viewBox="0 0 1177 598.5">
                <img src={assets.undrawMessagingFun.src} />
              </div>
            </div>
          </div>
          <br />
          <div className="flex flex-wrap flex-col-reverse sm:flex-row lg:mt-16">
            <div className="w-full sm:w-1/2 p-6 mb-6">
              <div
                className="w-5/6 sm:h-64 mx-auto"
                viewBox="0 0 1176.60617 873.97852">
                <img src={assets.undrawConnection.src} />
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-6 mb-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  end to end encrypted
                </h3>
                <p className="text-gray-600 mb-8">
                  using the open-source Olm/Megolm encryption library provided
                  by Matrix, your chats are privately sent and stored
                </p>
              </div>
            </div>
            <div className="flex flex-wrap lg:mt-16">
              <div className="w-5/6 sm:w-1/2 p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  customize it
                </h3>
                <p className="text-gray-600 mb-8">
                  pick colors, themes, and eventually different widgets
                  throughout the app according to your preference
                </p>
              </div>
              <div className="w-full sm:w-2/5 p-6">
                <div
                  className="w-full sm:h-64 mx-auto"
                  viewBox="0 0 1177 598.5">
                  <img src={assets.undrawInsertBlock.src} />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap flex-col-reverse sm:flex-row lg:mt-16">
              <div className="w-full sm:w-2/5 p-6 mt-6">
                <div
                  className="w-5/6 sm:h-64 mx-auto"
                  viewBox="0 0 1176.60617 873.97852">
                  <img src={assets.undrawVoid.src} />
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <div className="align-middle">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    no analytics
                  </h3>
                  <p className="text-gray-600 mb-8">
                    no analytics or tracking are present in Syphon. Metadata
                    normally sent using the Matrix network is minimized. Feel
                    free to email
                    <a href="mailto:support@syphon.org">
                      {' support@syphon.org '}
                    </a>
                    {' '}
                    for more info.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="w-full mb-2 mt-32 text-5xl font-bold leading-tight text-center text-gray-800">
            future goals
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>

          <div className="flex flex-wrap lg:mt-16">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                peer to peer messaging
              </h3>
              <p className="text-gray-600 mb-8">
                host the server to one or all of your devices without the need
                for a homeserver
                <br />
                <br />
              </p>
            </div>
            <div className="w-full sm:w-2/5 p-6">
              <div
                className="w-full sm:h-64 mx-auto"
                viewBox="0 0 1177 598.5">
                <img src={assets.undrawProfileData.src} />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row lg:mt-16">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div
                className="w-5/6 sm:h-64 mx-auto"
                viewBox="0 0 1176.60617 873.97852">
                <img src={assets.undrawGroupChat.src} />
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  transfer data
                </h3>
                <p className="text-gray-600 mb-8">
                  transfer your data from one homeserver to another, or locally
                  with P2P
                  <br />
                  <br />
                </p>
              </div>
            </div>
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
        <div className="flex flex-row justify-center items-center pt-4">
          <a
            href="https://matrix.to/#/#syphon:matrix.org"
            className="text-4xl leading-tight underline mx-8"
            style={{ cursor: 'pointer', letterSpacing: '0.5' }}>
            join the syphon chat
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
