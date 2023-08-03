"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
export default function Nav() {
    const [smaller, setSmaller] = useState(false)
    useEffect(() => {
        // if (props.effect) {
        const nav = document.querySelector(".navbar");
        nav.getElementsByTagName("nav")[0].classList.toggle("scroll", window.scrollY > 1);
        window.addEventListener("scroll", function (e) {
            nav.getElementsByTagName("nav")[0].classList.toggle("scroll", window.scrollY > 1);
        });
        // }
    }, [])
    return (
        <>
            <div className="navbar fixed w-screen max-h-max">
                <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link href="" className="flex items-center" scroll={false} onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
                        }}>
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Abhinav Yadav</span>
                        </Link>
                        <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                                <li>
                                    <Link href="#navbar" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page" scroll={false} onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
                                    }}>Home</Link>
                                </li>
                                <li>
                                    <Link href="#projects" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        scroll={false} onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >Projects</Link>
                                </li>
                                <li>
                                    <Link href="#aboutme" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        scroll={false} onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >About Me</Link>
                                </li>
                                <li>
                                    <Link href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        scroll={false} onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {smaller &&
                    <div>
                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg></button>
                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </div>





            {/* <div className="navbar">
                <div className="flex w-screen justify-between mt-3 my-auto py-5 px-10  absolute">
                    <Link className="text-4xl font-serif text-white font-bold " href="/">Abhinav Yadav</Link>
                    <div className="w-1/5 flex justify-evenly py-2 text-xl font-bold">
                        <Link className="nav-link" href="">Home</Link>
                        <Link className="nav-link" href="#projects" scroll={false} onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                        }}>Projects</Link>
                        <Link className="nav-link" href="#posts" scroll={false} onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("posts").scrollIntoView({ behavior: "smooth" });
                        }}>Posts</Link>
                    </div>
                </div>
            </div> */}
        </>
    )
}