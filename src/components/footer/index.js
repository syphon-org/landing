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
              <a class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex flex-row" href="#">
                <img src={assets.appLogoWhite} class="h-10 fill-current inline" />
                <span class={"text-white text-sm mb-8 pl-1"}>®</span>
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

        <div class="credits justify-center flex flex-col items-center" style={{ paddingBottom: 16, }}>
          <span class="text-white">Copyright © 2020 Ereio, LLC</span>
          <span class="text-white">Syphon ® is a registered trademark</span>
        </div>
        <div class="credits justify-center flex" />
      </footer>
    )
  }
}