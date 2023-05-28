import React from "react";

export default function Footer() {
    return (
        <>
            <footer aria-label="Site Footer" className="bg-gray-100">
                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
                >
                    <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                        <a
                            className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
                            href="/">
                            <span className="sr-only">Back to top</span>


                        </a>
                    </div>

                    <div className="lg:flex lg:items-end lg:justify-between">
                        <div>
                            <div className="flex justify-center text-teal-600 lg:justify-start">

                            </div>

                            <p
                                className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
                            >
                                Sean Rogan - Junior Software Engineer
                            </p>
                        </div>

                        <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
                            <ul
                                className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
                            >
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/cv">
                                        CV
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/projects">
                                        Projects
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/blog">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                        Copyright &copy; 2023. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}