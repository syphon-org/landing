import React from 'react'

import * as assets from '../../global/assets'

export const Header = () => (
  <nav
    id="header"
    className="fixed w-full z-30 top-0 header">
    <div className="container flex flex-wrap items-center justify-between mx-auto mt-0 px-6 py-5">
      <a
        href="/#"
        style={{ cursor: 'pointer', height: 50, width: 204 }}
        className="h-12 w-90 flex flex-row">
        <img src={assets.appLogoWhite.src} />
        <span className="text-white text-sm mb-8 pl-1">®</span>
      </a>
      <input
        id="menu"
        type="checkbox"
        className="menu" />
      <label
        htmlFor="menu"
        className="flex items-center px-4 py-1 border-2 text-xl md:hidden rounded text-white border-teal-100 menu-label hover:border-transparent hover:text-teal-500 hover:bg-white">
        Menu
      </label>
      <div className="w-full justify-end flex flex-wrap md:items-center md:w-auto menu-content">
        <div className="text-md text-right items-center md:flex-grow">
          <a
            href="/about"
            className="block text-xl mt-4 md:mt-0 md:mr-6 text-white hover:text-teal-200 md:inline-block  ">
            About
          </a>
          <a
            href="/support"
            className="block text-xl mt-4 md:mt-0 md:mr-6 text-white hover:text-teal-200 md:inline-block ">
            Support
          </a>
          <a
            href="https://github.com/syphon-org/syphon/"
            className="block text-xl mt-4 md:mt-0 md:mr-6 text-white hover:text-teal-200 md:inline-block ">
            Github
          </a>
          <a className="block text-xl mt-4 md:mt-0 md:mr-6 text-teal-200 md:inline-block ">
            Store (coming soon)
          </a>
          <a
            href="https://github.com/syphon-org/syphon/releases"
            className="inline-block text-xl px-4 py-2 mt-4 sm:mt-0 rounded-full leading-none border-2 text-white font-medium border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
            Download
          </a>
        </div>
      </div>
    </div>
  </nav>
)
