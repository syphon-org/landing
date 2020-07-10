import Link from 'next/link'

// Components  
import Header from 'components/header';
import SectionWaves from 'components/section-waves';

import assets from '../../global/assets';
import Footer from 'components/footer';

function Main() {
    return (
        <div className="app sans-serif bg-white">
            <Header />
            <section class="pt-32 bg-white">
                <div style={{ paddingBottom: 1000 }} class="container bg-white px-3 mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center">
                    <div class="bg-white pt-8">
                        <section class="container bg-white text-black max-w-5xl mx-auto ">
                            <div class="splash flex flex-grow flex-col justify-start items-center bg-white">
                                <div class="bg-white">
                                    <h4 class="text-4xl pb-4 bg-white">why</h4>
                                    <p class="text-xl text-black bg-white">
                                        <b>Syphon aims to be built on the foundations of privacy, branding, and user experience </b>
                                            in an effort to pull others away from proprietary chat clients to the matrix protocol.
                                            <br /><br />
                                             My name is Taylor and I'm creator of Syphon. This all started late 2019 when I saw a twitter
                                             thread regarding the riots in Hong Kong. At the time, the user was frustrated Signal didn't warn
                                             users that if you're using the default keyboard on an Android device, that all your message content
                                              is likely already been saved by a keylogger. I thought even if Signal could display some sort of warning,
                                              how long would it take for that to get implemented everywhere and approved? Are quick community driven
                                              changes like this a priority?
                                            <br /><br />
                                            For several years, the idea
                                             that we do not have an agreed upon protocol for instant messaging that is easy to use and open
                                             has kept me up at night. Email (SMTP, IMAP, POP3) has worked this way for a long time.
                                             The protocol has not stopped its centralization, in fact email is widely adopted arguably because of both the protocol and its centralization.
                                             One of the reasons Signal discusses how for mass adoption centralization will only help. But if I want to host my own mail server,
                                             or more to a more trustworthy email provider, I am not worried. There's a breadth of options. You cannot host your own signal server and chat with those running on normal Signal.
                                             It's not a protocol in that way.
                                            <br /><br />
                                             At the time, I saw countless posts on reddit where users stated they wanted to switch to Matrix
                                             but it was hard because the platform as a whole felt fragmented and/or Riots UX was bad.
                                             I thought how useful would it be for those attempting to resist censorship if they already had agreed upon a standard messaging protocol,
                                             that had allowed them to host a secure session with relatively little work. Matrix has created easily deployable docker containers for Synapse.
                                             If a client was focused on branding and user experience as much as Signal, I bet we could drive adoption.
                                            <br /><br />
                                            That all to say, <b>we need to decentralize the web</b>, but also provide a means of freedom within that system.
                                            Matrix has the potential to be a standardized peer-to-peer
                                            chat protocol, <a class="underline" href="https://matrix.org/blog/2020/06/02/introducing-p-2-p-matrix">and in a way already is</a>,
                                            that will allow people to communicate and transfer their data at will.
                                            <br /><br />
                                            Additionally, if the goal for Matrix is adoption to make instant messaging communication go the way of email,
                                            a network effect is required for this paradigm shift. Syphon makes the bet
                                            that the best way to attract new users is through strong branding and user experience.
                                            I hope that contributing and maintaining Syphon will help kick start this process and help those in need.
                                            <br /><br />
                                            Since starting on this project, <b>the Riot teams have started making strides at unifying their branding</b> and user experience.
                                            If Riot rebrands well, and focused on all the same features that Syphon originally set out to impliement,
                                            Riot (the new one) will likely be the client you should use to access Matrix for the time being. This was out of my belief that
                                            Matrix was ready, it just didn't seem like Riot was at the time.
                                             <br /><br />
                                            Syphon will always be a not for profit, community driven application.
                                        </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Main