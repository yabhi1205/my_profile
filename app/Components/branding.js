"use client"

import ReactTypingEffect from "react-typing-effect"

// import Link from "next/link"
// import { useEffect } from "react";
export default function Branding() {
    return (
        <div id="navbar" className="flex h-screen w-screen text-center justify-center content-center items-center align-middle">
            <div className="">
                <h1 className="text-5xl pb-2">Abhinav Yadav</h1>
                <div>
                    <ReactTypingEffect
                        className="text-3xl"
                        eraseSpeed={50}
                        text={['FullStack Web Developer', 'Coder', 'Photo Editor', 'Python']} />
                </div>
            </div>
        </div>
    )
}