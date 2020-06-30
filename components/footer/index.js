import Link from 'next/link'

import React, { Component } from 'react';

import assets from '../../global/assets';

export default class Footer extends Component {
    render() {
        return (
            <footer class="bg-brand">
                <div class="container mx-auto  px-8">

                    <div class="w-full flex flex-col md:flex-row py-6">

                        <div class="flex-1 justify-content mb-6">
                            <a class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                                <img src={assets.appLogoFilled} class="h-8 fill-current inline" />
                            </a>
                        </div>


                        <div class="flex-1">
                            <p class="uppercase text-white-500 md:mb-6">Links</p>
                            <ul class="list-reset mb-6">
                                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="/under" class="no-underline hover:underline text-white-800 hover:text-orange-500">faq</a>
                                </li>
                                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="mailto:contact@syphon.org?subject=Syphon%20App&body" class="no-underline hover:underline text-white-800 hover:text-orange-500">contact</a>
                                </li>
                                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="/support" class="no-underline hover:underline text-white-800 hover:text-orange-500">support</a>
                                </li>
                            </ul>
                        </div>
                        <div class="flex-1">
                            <p class="uppercase text-white-500 md:mb-6">Legal</p>
                            <ul class="list-reset mb-6">
                                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="/terms" class="no-underline hover:underline text-white-800 hover:text-orange-500">terms</a>
                                </li>
                                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="/privacy" class="no-underline hover:underline text-white-800 hover:text-orange-500">privacy</a>
                                </li>
                            </ul>
                        </div>
                        <div class="flex-1">
                            <p class="uppercase text-white-500 md:mb-6">Social</p>
                            <ul class="list-reset mb-6">
                                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://www.instagram.com/syphonapp" class="no-underline hover:underline text-white-800 hover:text-orange-500">instagram</a>
                                </li>
                                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://github.com/syphon-org" class="no-underline hover:underline text-white-800 hover:text-orange-500">github</a>
                                </li>
                                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://twitter.com/syphonapp" class="no-underline hover:underline text-white-800 hover:text-orange-500">twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div class="flex-1">
                            <p class="uppercase text-white-500 md:mb-6">more</p>
                            <ul class="list-reset mb-6">
                                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="/about" class="no-underline hover:underline text-white-800 hover:text-orange-500">about us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="credits justify-center flex">
                    <a href="https://www.freepik.com/free-photos-vectors/background" class="text-white-500 underline">Background vector created by freepik - www.freepik.com</a>
                    <span class="text-white" style={{ paddingLeft: 12 }}>Images from: <a class="text-white-500 underline" href="https://undraw.co/">undraw.co</a></span>
                </div>
            </footer>
        )
    }
}