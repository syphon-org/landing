import Link from 'next/link'

import React, { Component } from 'react';

import assets from '../../global/assets';
import styles from './header.module.css'


export default class Header extends Component {
    render() {
        return (
            <nav id="header" className="fixed w-full z-30 top-0 header">
                <div class="container flex flex-wrap items-center justify-between mx-auto mt-0 px-2 py-4">
                    <a href="/#" style={{ cursor: 'pointer', height: 52, width: 188 }} className="h-12 w-90">
                        <img src={assets.appLogoOutlined} />
                    </a>
                    <input id="menu" type='checkbox' class="menu" />
                    <label for="menu" class="flex items-center px-4 py-1 border text-md md:hidden rounded text-white border-teal-100 menu-label hover:border-transparent hover:text-teal-500 hover:bg-white">Menu</label>
                    <div class="w-full justify-end flex flex-wrap md:items-center md:w-auto menu-content">
                        <div class="text-md text-right items-center md:flex-grow">
                            <a href="/about" class="block  mt-4 md:mt-0 md:mr-4 text-white hover:text-teal-200 md:inline-block  ">
                                About
                            </a>
                            <a href="/support" class="block mt-4 md:mt-0 md:mr-4 text-white hover:text-teal-200 md:inline-block ">
                                Support
                            </a>
                            <a href="https://github.com/syphon-org/syphon/" class="block mt-4 md:mt-0 md:mr-4 text-white hover:text-teal-200 md:inline-block ">
                                Github
                            </a>
                            <a href="https://github.com/syphon-org/syphon/releases"
                                class="inline-block text-md px-4 py-2 mt-4 sm:mt-0 rounded leading-none border text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}