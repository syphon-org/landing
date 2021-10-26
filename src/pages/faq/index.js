
import Head from 'next/head'

import { Header } from '../../components/header'
import * as assets from '../../global/assets'

export const config = {
  unstable_runtimeJS: false
}

export default function About() {
  return (
    <div className="app sans-serif bg-white">
      <Head>
        <title>Syphon • Matrix</title>
      </Head>
      <Header />
      <section className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center pt-32 bg-white w-screen">
        <div className="flex flex-col md:w-1/2 justify-center md:items-start sm:items-center text-center md:text-left bg-white">
          <h1 className="text-teal mt-1 text-5xl leading-tight font-bold rubik">
            FAQ
          </h1>
          <a
            href="https://github.com/syphon-org/syphon"
            target="_blank"
            rel="nofollow noreferrer noopener"
            className="flex text-teal cursor-pointer justify-center items-center mt-3">
            <span className="mr-2 pride rubik">OPEN ALPHA</span>
            <img className="ml-1 inline-block align-top" height={24} width={24} src={assets.githubLogoCyan.src} />
          </a>
        </div>
      </section>
    </div>
  )
}
