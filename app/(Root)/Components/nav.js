"use client"
import Link from "next/link"
import { useEffect } from "react";
export default function Nav() {
    useEffect(() => {
        // if (props.effect) {
        const nav = document.querySelector(".navbar");
        nav.classList.toggle("scroll", window.scrollY < 1);
        window.addEventListener("scroll", function (e) {
            nav.classList.toggle("scroll", window.scrollY < 1);
        });
        // }
    }, [])
    return (
        <div className="navbar">
            <div className="flex w-screen justify-between mt-3 my-auto py-5 px-10  absolute">
                <Link className="text-4xl font-serif text-white font-bold " href="/">Abhinav Yadav</Link>
                <div className="w-1/5 flex justify-evenly py-2 text-xl font-bold">
                    <Link className="nav-link " href="">Home</Link>
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
        </div>
    )
}