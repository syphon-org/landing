
import Head from 'next/head'

import { Header } from '../../components/header'

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
      <section className="pt-40 pb-24 px-4 bg-white">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center">
          <section className="container text-black max-w-5xl mx-auto">
            <div className="flex flex-col justify-center w-4/6">
              <h4 className="text-6xl text-teal mb-6 rubik">Matrix</h4>
              <p className="text-xl text-black">
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
