import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'
function Navbar() {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 4,
            link: 'contact'
        }

    ]
    return (
        <div className='flex justify-between items-center w-full h-[80px] text-white fixed bg-black px-5'>
            <div className='font-signature text-5xl ml-[200px] mt-9 mb-3'>Sakshi Chavan</div>
            <ul className='hidden md:flex mr-[200px]'>

                {
                    links.map(({ id, link }) => (


                        <li key={id} className=' px-5 cursor-pointer capitalize text-xl font-medium text-gray-400 hover:scale-105 duration-200 tracking-wide mt-9 ' >{link}</li>
                    ))
                }

            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-5 z-10 text-gray-400 md:hidden'>
                {
                    nav ? <FaTimes size={30} className='mt-9 mb-3' /> : <FaBars size={30} className='mt-9 mb-3' />
                }
            </div>

            {
                nav && (
                    <ul className='flex flex-col justify-center items-center top-0 left-0 w-full h-screen absolute bg-gradient-to-b from-black to-gray-800 text-gray-400 text-xl'>

                        {
                            links.map(({ id, link }) => (


                                <li key={id} className='px-5 cursor-pointer text-5xl capitalize py-6 hover:scale-105 duration-200  ' ><Link to={link} smooth duration={500} >{link}</Link></li>
                            ))
                        }



                    </ul>
                )
            }

        </div>
    )
}

export default Navbar
