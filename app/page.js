"use client"
import SkeletonLoader from "./Components/skeletonLoader";
import About from "./Components/about";
import Branding from "./Components/branding";
import Contact from "./Components/contact";
import Education from "./Components/education";
import Nav from "./Components/nav";
import Navbygpt from "./Components/navbygpt";
import Projects from "./Components/projects";
import Skills from "./Components/skills";
import { useEffect, useState } from "react";
export default function Home() {
    const [loading, setloading] = useState(true)
    useEffect(() => {
        setloading(false)
    }, [])
    return (
        <div>
            {loading && <SkeletonLoader />}
            {/* <Nav /> */}
            {!loading &&
                <>
                    <Navbygpt />
                    <Branding />
                    <Skills />
                    <About />
                    <Projects />
                    <Education />
                    <Contact />
                </>
            }
        </div>
    )
}