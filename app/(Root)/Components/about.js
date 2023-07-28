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
        <div className="mt-10 mb-10">
            <h1 ref={elementRef} className="text-6xl pb-6 text-center">About Me</h1>
            {isVisible && <div className="w-5/12 pl-20 pt-10 h-screen">
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
                <div id="cursor" className=""></div>
            </div>}
        </div>
    )
}