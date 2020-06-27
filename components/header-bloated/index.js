import Link from 'next/link'

import React, { Component } from 'react';

import assets from '../../global/assets';

export default class Header extends Component {
    render() {
        return (
            <nav id="header" class="fixed w-full z-30 top-0">
                <div class="container flex flex-wrap items-center justify-between w-full mx-auto mt-0 px-2 py-2">
                    <a class="flex flex-row items-center justify-center no-underline hover:no-underline " href="/">
                        <div className="h-10 w-10 mr-2 mb-1">
                            <img src={assets.iconAppWhite} />
                        </div>
                        <span class="text-xl font-bold lg:text-4xl">
                            syphon
                        </span>
                    </a>
                    <div class="block lg:hidden pr-4">
                        <button id="nav-toggle" class="flex items-center p-1 text-orange-800 hover:text-gray-900">
                            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>

                    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                        <ul class="list-reset lg:flex justify-end flex-1 items-center">
                            <li class="mr-3">
                                <a class="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
                            </li>
                            <li class="mr-3">
                                <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
                            </li>
                            <li class="mr-3">
                                <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
                            </li>
                        </ul>
                        <div>
                            <button className="border rounded text-white border-white text-sm mt-4 px-4 py-2 hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0" href="/downloads">Download</button>
                        </div>
                    </div>
                </div>
                <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
        )
    }
}