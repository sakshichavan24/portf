import React from 'react'
import php from "../assetes/php-transformed.png"
import cpp from "../assetes/cpp-transformed.png"
import tailwind from "../assetes/taiwind-transformed.png"
import mongodb from "../assetes/mongodb-transformed.png"
import react from "../assetes/react-transformed.png"
import express from "../assetes/express-transformed.png"
import python from "../assetes/python-transformed.png"
import node from "../assetes/node-transformed.png"
import html from "../assetes/html-pa0o4aqEw-transformed.png"
import css from "../assetes/css-transformed.png"
import js from "../assetes/js-transformed.png"
import github from "../assetes/github-transformed.png"
import bootstarp from "../assetes/bootstaps.png"
import sql from "../assetes/sql-transformed.png"
import postman from "../assetes/postman-transformed.png"

const Experience = () => {
    const links = [
        {
            id: 1,
            src: bootstarp,
            title: 'Bootstrap',
            style: 'shadow-violet-900'

        },
        {
            id: 2,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'

        },
        {
            id: 3,
            src: css,
            title: 'CSS',
            style: 'shadow-cyan-500'

        },
        {
            id: 4,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-400'

        },
        {
            id: 5,
            src: cpp,
            title: 'C++',
            style: 'shadow-cyan-500'

        },
        {
            id: 6,
            src: react,
            title: 'React.js',
            style: 'shadow-cyan-500'

        },
        {
            id: 7,
            src: express,
            title: 'Express.js',
            style: 'shadow-stone-400'

        },
        {
            id: 8,
            src: node,
            title: 'Node.js',
            style: 'shadow-green-500'

        },
        {
            id: 9,
            src: mongodb,
            title: 'MongoDb',
            style: 'shadow-green-500'

        },
        {
            id: 10,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-cyan-500'

        },
        {
            id: 11,
            src: postman,
            title: 'Postman',
            style: 'shadow-orange-500'

        },
        {
            id: 12,
            src: php,
            title: 'php',
            style: 'shadow-violet-900'

        },
        {
            id: 13,
            src: github,
            title: 'Git & GitHub',
            style: 'shadow-stone-400'

        },
        {
            id: 14,
            src: python,
            title: 'python',
            style: 'shadow-yellow-400'

        },
        {
            id: 15,
            src: sql,
            title: 'Sql',
            style: 'shadow-cyan-500'

        },
    ]
    return (
        <div name="Experience" className='text-white bg-gradient-to-b from-gray-800 to-black w-full
        h-screen pt-[600px]'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-screen'>
                <div>
                    <p className='text-5xl font-bold border-b-4 border-gray-400 p-2 inline'>Experience</p>
                    <p className='py-6 text-xl'>These are the technology I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-5 sm:px-0 mb-7 '>

                    {
                        links.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-15 mx-auto' />
                                <div className='pb-3'>
                                    <p className=''>{title}</p>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Experience
