"use client"

import ReactTypingEffect from "react-typing-effect"

// import Link from "next/link"
// import { useEffect } from "react";
export default function Branding() {
    return (
        <>
            <div className=" top-10">
                <div id="NavSection" value="navHome">
                    <div id="navbar" value="navHome" className="flex h-screen w-screen text-center justify-center content-center items-center align-middle">
                        <div>
                            <h1 className="text-5xl pb-2">Abhinav Yadav</h1>
                            <ReactTypingEffect
                                className="text-3xl"
                                eraseSpeed={50}
                                text={['FullStack Web Developer', 'Coder', 'Photo Editor', 'Python']} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}