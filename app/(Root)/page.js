import About from "./Components/about";
import Branding from "./Components/branding";
import Contact from "./Components/contact";
import Education from "./Components/education";
import Nav from "./Components/nav";
import Projects from "./Components/projects";
import Skills from "./Components/skills";
export default function Home() {
    return (
        <div>
            <Nav />
            <Branding />
            <Skills />
            <About/>
            <Projects/>
            <Education/>
            <Contact/>
        </div>
    )
}