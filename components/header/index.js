import Link from 'next/link'

import React, { Component } from 'react';

import assets from '../../global/assets';

export default class Header extends Component {
    render() {
        return (
            <nav id="header" class="fixed w-full z-30 top-0 gradient">
                <div class="container flex flex-wrap items-center justify-between w-full mx-auto mt-0 px-2 py-4">
                    <a className="flex items-center flex-shrink-0 text-white">
                        <div className="fill-current h-12 w-12">
                            <img src={assets.iconAppWhite} />
                        </div>
                        <span style={{ marginBottom: -4, marginLeft: 16, fontFamily: 'Rubik-Light', letterSpacing: 0.5, fontSize: 32 }} className="text-2xl tracking-tight">
                            syphon
                        </span>
                    </a>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div className="flex items-center w-full lg:w-auto">
                        <div className="flex-grow items-center content-center text-sm">
                            <a className="text-base text-teal-200 hover:text-white mr-4" href="https://github.com/syphon-org/syphon/blob/main/readme.md">About</a>
                            <a className="text-base text-teal-200 hover:text-white mr-4" href="/support">Support</a>
                        </div>
                        <div>
                            <a className="border rounded text-white border-white text-sm mt-4 px-4 py-2 hover:border-transparent hover:text-teal-500 hover:bg-white" href="https://github.com/syphon-org/syphon/releases">Download</a>

                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}