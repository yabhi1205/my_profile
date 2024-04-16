"use client"

import Image from "next/image"
const img = require('./pictures/Iphone-spinner-2.gif')

export default function SkeletonLoader() {
    return (
        // < !--component -- >
        <div className="h-screen bg-white">
            <div className="flex justify-center items-center h-full">
                <Image className="h-16 w-16" src={img} width={300} height={300} alt=""/>
            </div>
        </div>
    )
}