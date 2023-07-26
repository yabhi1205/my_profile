'use client'
import React, { useEffect, useRef, useState } from 'react';
import Circular from './circular';
export default function Skills() {
    let skillList = [
        { name: "HTML", value: 60 },
        { name: "CSS", value: 70 },
        { name: "JavaScript", value: 80 },
        { name: "React.js", value: 40 },
        { name: "Node.js", value: 80 },
        { name: "Python", value: 75 },
        { name: "MongoDB", value: 84 },
    ]
    const [percent, setPercent] = useState(parseInt(skillList[0].value, 10))
    const [active, setActive] = useState(skillList[0].name)
    useEffect(() => {
      document.getElementById(active).classList.add("ring","ring-violet-300")
    }, [])
    
    return (
        <>
            <p className="w-screen text-8xl uppercase align-middle justify-center text-center pb-20 ">Skills</p>
            <div className="flex  px-4 mx-auto w-10/12 ">
                <div className="w-3/5 h-auto grid grid-rows-4 grid-flow-col gap-4">
                    {skillList.map((users) => {
                        return <button
                            className="text-white h-20 w-60 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2"
                            id={users.name}
                            key={users.name}
                            onClick={(e) => {
                                setPercent(parseInt(e.currentTarget.name, 10))
                                document.getElementById(active).classList.remove("ring","ring-violet-300")
                                document.getElementById(e.target.id).classList.add("ring","ring-violet-300")
                                setActive(e.target.id)
                            }}
                            name={users.value}>
                            {users.name}
                        </button>
                    })}
                </div>
                <div className=" w-5/12">
                    <Circular maxPercentage={percent} />
                </div>
            </div>
        </>
    )
};