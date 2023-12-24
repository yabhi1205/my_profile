"use client"
import { useEffect, useRef, useState } from "react";
import { info } from "./DATA/data"
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import profile from "./pictures/Abhinav.png"

export default function About() {
    const elementRef = useRef()
    const [typer, setTyper] = useState("Initialising Typer")
    // useEffect(() => {
    //     window.addEventListener(scrollY,)
    // }, [])
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (elementRef.current) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(elementRef.current);
                    }
                });
            });
            observer.observe(elementRef.current);
        }
    }, [elementRef]);
    return (
        <>
            <div id="aboutSection" value="navAboutme">
                <h1 ref={elementRef} className="text-6xl pb-6 text-center">About Me</h1>
                <div id="aboutme" className="mt-10 mb-10 flex max-lg:flex-col-reverse max-lg:w-full">
                    {isVisible && <div className="w-5/12 max-lg:w-full lg:pl-20 px-5 py-10 h-full">
                        <div id="typer" className="typer pb-3 text-red-700">
                            {typer}
                        </div>
                        <TypeAnimation cursor={false} speed={85} sequence={[
                            1500,
                            () => {
                                setTyper("Typing")
                                document.getElementById("cursor").classList.add("cursor")
                                document.getElementById("typer").classList.remove("text-red-700")
                                document.getElementById("typer").classList.add("text-yellow-500")
                            },
                            info,
                            () => {
                                setTyper("Typing Done")
                                document.getElementById("typer").classList.remove("typer")
                                document.getElementById("cursor").classList.remove("cursor")
                                document.getElementById("typer").classList.add("text-green-500")
                            }
                        ]} />
                        <div id="cursor" className="h-full "></div>
                    </div>}
                    <div className="lg:w-7/12 p-4 max-lg:w-full container">
                        <div className="relative flex">
                            <Image className=" relative mx-auto  " color="white" width={500} height={500} src={profile} />
                            <Image className=" mx-auto absolute ml-32 scale-105 blur-lg -z-10 filter drop-shadow-profile " color="white" width={500} height={500} src={profile} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
