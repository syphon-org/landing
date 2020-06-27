import Link from 'next/link'

import React, { Component } from 'react';

import assets from '../../global/assets';

export default class Header extends Component {
    render() {
        return (
            <nav className="flex fixed items-center justify-between flex-wrap w-full bg-color-brand p-6">

                <div className="flex items-center flex-shrink-0 text-white">
                    <div className="fill-current h-8 w-8 mr-2">
                        <img src={assets.iconAppWhite} />
                    </div>
                    <span className="text-2xl font-semibold tracking-tight">
                        Syphon
                    </span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="flex items-center w-full lg:w-auto">
                    <div className="flex-grow items-center content-center text-sm mr-4">
                        <a className="text-base text-teal-200 hover:text-white mr-4" href="/blog">Blog</a>
                        <a className="text-base text-teal-200 hover:text-white mr-4" href="/timeline">Timeline</a>
                        <a className="text-base text-teal-200 hover:text-white" href="/about">About</a>
                    </div>
                    <div>
                        <a className="border rounded text-white border-white text-sm mt-4 px-4 py-2 hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0" href="/downloads">Download</a>
                    </div>
                </div>
            </nav>
        )
    }
}