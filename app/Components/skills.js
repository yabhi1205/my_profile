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
        <div id='skills'>
            <p className="w-screen text-6xl uppercase align-middle justify-center text-center mb-20 ">Skills</p>
            <div className="xl:flex xl:px-4 mx-auto xl:w-10/12 max-xl:w-full max-xl:px-6 max-xl:flex max-xl:flex-col-reverse">
                <div className="w-3/5 h-auto lg:grid lg:grid-rows-4 lg:grid-flow-col lg:gap-4 max-xl:w-full max-lg:flex-wrap max-lg:mb-16">
                    {skillList.map((users) => {
                        return <button
                            className="text-white h-20 w-full max-xl:w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2"
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
                <div className="xl:w-5/12 max-xl:w-full max-xl:container max-xl:mb-6 mx-auto">
                    <Circular maxPercentage={percent} />
                </div>
            </div>
        </div>
    )
};