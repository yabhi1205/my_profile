"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
export default function Navbygpt() {
    const [smaller, setSmaller] = useState(false)
    const [small, setSmall] = useState(false)
    let currentElement="navbar"
    const ListSections = ["navbar","aboutSection","projectsSection","contactSection"]
    let smallsize=0
    useEffect(() => {
        const viewHeight = window.innerHeight
        const nav = document.querySelector(".navbar");
        const dropdown = document.querySelector(".dropdown");
        const LinkList = document.querySelector("#LinkList")
        ListSections.map((arr)=>{
            var element = document.getElementById(arr)
            document.getElementById(element.getAttribute("value")).classList.remove("activeLink")
            if (element.getBoundingClientRect()["y"]>=0 && element.getBoundingClientRect()["y"]<(viewHeight/2)){
                currentElement =((element.getAttribute("value")))
                document.getElementById(currentElement)?document.getElementById(currentElement).classList.add("activeLink"):false;
            }
            else if (element.getBoundingClientRect()["y"]>(viewHeight/2)&& element.getBoundingClientRect()["y"]<viewHeight){
                var index= ListSections.indexOf(element.getAttribute("id"))
                currentElement = (document.getElementById(ListSections[index>0?index-1:0]).getAttribute("value"))
                document.getElementById(currentElement).classList.add("activeLink")
            }
            else{
                document.getElementById(currentElement).classList.add("activeLink")
            }
        })
        nav.getElementsByTagName("nav")[0].classList.toggle("scroll", window.scrollY > 50);
        window.addEventListener("scroll", function (e) {
            nav.getElementsByTagName("nav")[0].classList.toggle("scroll", window.scrollY > 50);
            ListSections.map((arr)=>{
                var element = document.getElementById(arr)
                document.getElementById(element.getAttribute("value")).classList.remove("activeLink")
                if (element.getBoundingClientRect()["y"]>=0 && element.getBoundingClientRect()["y"]<(viewHeight/2)){
                    currentElement =((element.getAttribute("value")))
                    document.getElementById(currentElement)?document.getElementById(currentElement).classList.add("activeLink"):false;
                }
                else if (element.getBoundingClientRect()["y"]>(viewHeight/2)&& element.getBoundingClientRect()["y"]<viewHeight){
                    var index= ListSections.indexOf(element.getAttribute("id"))
                    currentElement = (document.getElementById(ListSections[index>0?index-1:0]).getAttribute("value"))
                    document.getElementById(currentElement).classList.add("activeLink")
                }
                else{
                    document.getElementById(currentElement).classList.add("activeLink")
                }
            })
        });
        // }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setSmall(window.scrollY > smallsize);
            smallsize = window.scrollY
        };

        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div className={`fixed w-screen m-0 max-h-max z-50 text-xl transition-all duration-700 ${small ? '-top-20 ' : 'top-0'}`}>
                <div className="navbar ">
                    <nav id="navtrans" className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <div className=" w-5/5 flex flex-row justify-between mx-0 p-4 md:mx-6 md:p-4">
                            <Link href="" className="flex items-center" scroll={false} onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
                            }}>
                                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Abhinav Yadav</span>
                            </Link>
                            <div className=" w-max" >
                                {smaller ?
                                    <button onClick={() => {
                                        setSmaller(!(smaller))
                                        document.getElementById("navtrans").classList.remove("scroll_dark")

                                    }} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                                        <span className="sr-only">Close main menu</span>
                                        <svg className="w-5 h-5" fill="#bcbcbc" xmlns="http://www.w3.org/2000/svg" height="329pt" viewBox="0 0 329.26933 329" width="329pt"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" /></svg>
                                    </button>
                                    : <button onClick={() => {
                                        setSmaller(!(smaller))
                                        document.getElementById("navtrans").classList.add("scroll_dark")

                                    }} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                                        <span className="sr-only">Open main menu</span>
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                        </svg>
                                    </button>
                                }

                            </div>
                            <div className="hidden w-fit dark:text-blue-700 md:block md:w-auto" id="navbar-solid-bg">
                                <ul id="LinkList" className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                                    <li>
                                        <Link id="navHome" href="#navbar" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent dark:text-blue-700" aria-current="page"
                                            scroll={false} onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
                                            }}>Home</Link>
                                    </li>
                                    <li>
                                        <Link id="navProjects" href="#projects" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                            scroll={false} onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                                            }}
                                        >Projects</Link>
                                    </li>
                                    <li>
                                        <Link id="navAboutme" href="#aboutme" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                            scroll={false} onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
                                            }}
                                        >About Me</Link>
                                    </li>
                                    <li>
                                        <Link id="navContact" href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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

                </div >
                <div className="dropdown">
                    {smaller &&
                        <nav>
                            <div id="dropdown" className="animate-[wiggle_.6s_ease-in-out] z-50 w-full bg-white divide-y divide-gray-100 rounded-lg shadow text-center text-4xl opacity-90 dark:bg-gray-700">
                                <ul className="py-2 text-xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li className="">
                                        <Link href="#navbar" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            scroll={false} onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("navbar").scrollIntoView({ behavior: "smooth" })
                                            }}
                                        >Home</Link>
                                    </li>
                                    <li>
                                        <Link href="#projects" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            scroll={false} onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                                            }}>Projects</Link>
                                    </li>
                                    <li>
                                        <Link href="#aboutme" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            scroll={false} onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
                                            }}
                                        >About Me</Link>
                                    </li>
                                    <li>
                                        <Link href="#contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            scroll={false} onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                                            }}
                                        >Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    }
                </div>
            </div>
        </>
    )
}