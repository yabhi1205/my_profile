"use client"
import { useState } from "react"
import { data } from "./DATA/data"
import Modal from "./modal"
export default function Projects() {
    const [project, setProject] = useState(null)
    const [hidden, setHidden] = useState(false)
    return (
        <>
            <h1 id="projects" className="text-5xl text-center mt-20 mb-12">Projects</h1>
            <div className="w-10/12 m-auto grid grid-flow-row grid-cols-3">
                {data.map((project) => {
                    return (
                        <div key={project.name} className="max-w-sm m-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description.length > 100 ? `${project.description.slice(0, 100)}...` : project.description}</p>
                            <button type="button" key={project.name} onClick={(e) => { setProject(e.target.name); setHidden(true) }} name={JSON.stringify(project)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Know More
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    )
                })}
            </div>
            {hidden && <Modal projects={project} hidden={hidden} setHidden={setHidden} />}
        </>
    )
}