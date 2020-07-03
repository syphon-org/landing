import Link from 'next/link'

import React, { Component } from 'react';

import assets from '../../global/assets';
import styles from './header.module.css'


export default class Header extends Component {
    render() {
        return (
            <nav id="header" className="fixed w-full z-30 top-0 header">
                <div class="container flex flex-wrap items-center justify-between mx-auto mt-0 px-2 py-4">
                    <a className="flex items-center flex-shrink-0 text-white">
                        <div className="fill-current h-12 w-12">
                            <img src={assets.iconAppWhite} />
                        </div>
                        <span style={{ marginBottom: -4, marginLeft: 16, letterSpacing: 0.5, fontSize: 32 }} className="text-2xl tracking-tight logo">
                            syphon
                        </span>
                    </a>
                    <div class="flex items-center justify-end w-full md:hidden">
                        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div class="w-full justify-end flex flex-wrap md:items-center md:w-auto">
                        <div class="text-sm text-right items-center md:flex-grow">
                            <a href="#responsive-header" class="block  mt-4 md:mt-0 md:mr-4 text-teal-200 hover:text-white md:inline-block  ">
                                About
                            </a>
                            <a href="/support" class="block  mt-4 md:mt-0 md:mr-4 text-teal-200 hover:text-white md:inline-block ">
                                Support
                            </a>
                            <a href="https://github.com/syphon-org/syphon/releases"
                                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}