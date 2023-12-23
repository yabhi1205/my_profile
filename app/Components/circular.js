'use client'
import React, { useEffect, useState } from 'react';
export default function Circular({ maxPercentage }) {
    const [percentage, setPercentage] = useState(0);
    const [sqSize, setSqSize] = useState(0)
    const [setstrokergba, setSetstrokergba] = useState("")
    // Function to update the percentage at regular intervals
    const updatePercentage = () => {
        // const maxPercentage = 70;
        const interval = 10; // 1000 milliseconds = 1 second

        let currentPercentage = 0;
        let rgba=[0,255,0,1]

        const updateInterval = setInterval(() => {
            currentPercentage += 1;
            setPercentage(Math.min(currentPercentage, maxPercentage));
            if (rgba[0]<255){
                rgba[0]+=5
            }
            else{
                if(rgba[1]>100){
                    rgba[1]-=5
                }
            }
            setSetstrokergba(`rgb(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`)
            if (currentPercentage >= maxPercentage) {
                clearInterval(updateInterval);
            }
        }, interval);
    };

    // Run the updatePercentage function when the component mounts
    useEffect(() => {
        updatePercentage();
    }, [maxPercentage]);
    useEffect(() => {
        setSqSize(window.innerWidth > 400 ? 350 : window.innerWidth * .8)
        window.addEventListener('resize', () => {

            if(window!=undefined){
                setSqSize(window.innerWidth > 400 ? 350 : window.innerWidth * .8)
            }
        })
    }, [])


    // let sqSize = window.innerWidth>400 ? 350: window.innerWidth*.8
    // let percentage = 75
    let strokeWidth = 15

    const radius = ((sqSize - strokeWidth) / 2)>0?((sqSize - strokeWidth) / 2):0 ;
    // Enclose circle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - dashArray * percentage / 100;

    return (
        <div className="w-full px-0 mx-auto" >

            <svg
                className='mx-auto'
                width={sqSize}
                height={sqSize}
                viewBox={viewBox}
            >
                <circle
                    className="circle-background"
                    cx={sqSize / 2}
                    cy={sqSize / 2}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`}
                />
                <circle
                    className="circle-progress w-full"
                    // style={{}}
                    cx={sqSize / 2}
                    cy={sqSize / 2}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`}
                    // Start progress marker at 12 O'Clock
                    transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                    style={{
                        // stroke:percentage<45?"rgb(0, 255, 64)":(percentage>75?"rgb(255, 108, 0)":"rgb(211, 235, 0)"),
                        stroke:setstrokergba,
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }}
                />
                <text
                    className="text-xl circle-text"
                    x="50%"
                    y="50%"
                    dy=".3em"
                    textAnchor="middle"
                >
                    {/* {`${percentage<45?"Beginner":(percentage>75?"Expert":"Intermediate")}`} */}
                    Skills Level
                </text>
            </svg>
        </div>
    );
};