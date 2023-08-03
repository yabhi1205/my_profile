"use client"
import { useEffect, useRef, useState } from "react";
import { info } from "./DATA/data"
import { TypeAnimation } from "react-type-animation";

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
            <h1 ref={elementRef} className="text-6xl pb-6 text-center">About Me</h1>
            <div id="aboutme" className="mt-10 mb-10 flex max-lg:flex-col-reverse max-lg:w-full">
                {isVisible && <div className="w-5/12 max-lg:w-full lg:pl-20 px-5 py-10 h-full">
                    <div id="typer" className="typer pb-3 text-red-700">
                        {typer}
                    </div>
                    <TypeAnimation cursor={false} speed={50} sequence={[
                        3000,
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
                    <img className="mx-auto" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                </div>
            </div>
        </>
    )
}