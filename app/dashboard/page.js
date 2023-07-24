"use client"
import { useState } from "react";
export default async function Abhi() {
    const [first, setFirst] = useState(Date.now())
    await fetch("https://cxi-miet.github.io/Elevate-Challenge/"
    , {
        method: "GET",
        mode: "no-cors",
        cache: "no-cache",
        referrerPolicy: "no-referrer"
      }
      ).then(()=>{
        setFirst(Date.now()-first)
    })
    return (
        <div className="text-black text-3xl items-center justify-center flex bg-white h-screen w-screen">
            <p> {Math.floor(first / 1000 % 60)} </p>
        </div>
    );
}
