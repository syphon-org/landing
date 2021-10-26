/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import Head from 'next/head'

import { Header } from '../../components/header'

export const config = {
  unstable_runtimeJS: false
}

export default function About() {
  return (
    <div className="app sans-serif bg-white">
      <Head>
        <title>Syphon • About</title>
      </Head>
      <Header />
      <section className="pt-40 pb-24 px-4 bg-white">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center">
          <section className="container text-black max-w-5xl mx-auto flex flex-col items-center">
            <div className="flex-1 w-5/6 max-w-5xl">
              <h4 className="text-6xl text-teal mb-6 rubik">why</h4>
              <p className="text-xl text-black">
                <b>Syphon aims to be built on the foundations of privacy, branding, and user experience </b>
                in an effort to pull others away from proprietary chat clients to the matrix protocol.
                <br />
                <br />
                My name is Taylor and I'm the creator of Syphon. Late 2019, I saw a twitter
                thread regarding the protests happening in Hong Kong. At the time, a user was frustrated Signal didn't warn
                others that if you're using the default keyboard on an Android device, that all your message content
                could potentially still be logged by a keylogger depending on your device.
                <br />
                <br />
                I thought even if Signal could display some sort of warning,
                how long would it take for that to get implemented everywhere and approved? Are quick community driven
                changes like this a priority for Signal? The request seemed to go unobserved until early 2021.
                <br />
                <br />
                For several years, the fact
                that society does not have an agreed upon protocol for instant messaging has bothered many. Email (SMTP, IMAP, POP3) has worked this way for a long time.
                However, it's arguable email is widely adopted today because of centralization surrounding those providers.
                <br />
                <br />
                Signals creator Moxie Marlinspike has discussesed how for mass adoption,
                {' '}
                <a
                  style={{ color: 'blue' }}
                  className="underline"
                  href="https://www.newyorker.com/magazine/2020/10/26/taking-back-our-privacy">centralization of a platform and a focus on product will only help.</a>
                {' '}
                If you want to own your own mail server,
                or switch to a more trustworthy email provider, there's a breadth of options. It's much harder to host
                your own signal server and chat with those using Signal. Matrix aims to solve this problem, but seemingly falls short to realize the benefits of creating a cohesive, or product centric platform.
                <br />
                <br />
                At the time, I saw countless posts on reddit where users stated they wanted to switch to Matrix
                but it was hard because the platform as a whole felt fragmented, encryption configuration and flows was difficult for the non-technical, and [Element's] UX was bad.
                <br />
                <br />
                I thought how useful would it be for those attempting to resist censorship if they already had agreed upon a standard messaging protocol,
                that had allowed them to host a secure session with relatively little work. Matrix has created easily deployable docker containers for Synapse.
                If a client was focused on branding and user experience as much as Signal, I bet we could drive adoption.
                <br />
                <br />
                <b>We need to decentralize the web</b>
                , but also provide a means of freedom within that system.
                Matrix has the potential to be a standardized peer-to-peer
                chat protocol,
                {' '}
                <a
                  style={{ color: 'blue' }}
                  className="underline"
                  href="https://matrix.org/blog/2020/06/02/introducing-p-2-p-matrix">and in a way already is</a>
                ,
                that will allow people to communicate and transfer their data at will.
                <br />
                <br />
                Additionally, if the goal for Matrix is adoption to make instant messaging communication go the way of email,
                a network effect is required for this paradigm shift.
                {' '}
                <br />
                <br />
                Syphon makes the bet
                that the best way to attract new users is through strong branding and user experience.
                I hope that contributing and maintaining Syphon will help kick start this process and help those in need.
                <br />
                <br />
                Since starting on this project,
                {' '}
                <b>the [Element] teams have started making strides at unifying their branding</b>
                {' '}
                and user experience.
                If Riot rebrands well, and focused on all the same features that Syphon originally set out to impliement,
                [Element] will likely be the client you should use to access Matrix for the time being. This was out of my belief that
                Matrix was ready, it just didn't seem like Riot was at the time.
                <br />
                <br />
                Syphon will always be a not for profit, community driven application.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
