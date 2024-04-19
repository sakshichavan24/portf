import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import heroImage from '../assetes/heroImage..jpg'
function Home() {


    return (
        <div name='home' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full pt-50 px-5 md:flex-row md:pt-40  sm:pt-3 tracking-wide'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Software Developer</h2>
                    <p className='text-gray-400 max-w-md mt-10 text-xl leading-relaxed '>
                        I am Sakshi chavan. Recently graduated with a bachelor degree in computer engineering. I am Passionate about learning new technology and applying programming skills to solve real world problem.
                        Familiarity with Html,CSS and JavaScript,<span>MERN stack</span> CSS framework tailwind Proficient in C++ in oop and python.
                        Basic understanding of DBMS and DSA.
                    </p>
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md font-semibold text-xl bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer mt-7'>
                            Projects
                            <span className=' group-hover:rotate-90 duration-300 '>
                                <IoIosArrowForward size={25} className='ml-2' />
                            </span>

                        </button>
                    </div>

                </div>
                <div className=''>
                    <img src={heroImage} alt="my profile" className='rounded-xl mx-auto  sm:w-full ' />
                </div>
            </div>
        </div>
    )
}

export default Home
