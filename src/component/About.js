import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-slate-800 to-black text-white'>
            <div className='max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-9'>
                    <p className='text-5xl font-bold inline border-b-4 border-gray-400'>About</p>
                </div>
                <p className='text-xl mt-10 text-gray-300 leading-relaxed tracking-wider'>
                    <span className='pl-20'> Hello</span>, I'm Sakshi, a recent graduate in Computer Engineering who is passionate about technology and problem-solving. I have a solid grasp of  HTML, CSS, JavaScript, React.js, Express, Node.js, MongoDB, and the CSS framework Tailwind. I also have a strong foundation in C++ (object-oriented programming) and Python. I'm excited to apply my skills in building real-world projects and continuing to learn and grow in the field of web development.
                </p>
                <br />
                <p className='text-xl text-gray-300 leading-relaxed tracking-wider'>
                    In addition to my programming skills, I have a basic understanding of Database Management Systems (DBMS) and Data Structures and Algorithms (DSA). I believe in the importance of continuous learning and staying updated with the latest trends in technology. I'm eager to showcase my projects and problem-solving abilities in my portfolio and am looking forward to opportunities as a React.js Developer to contribute effectively to innovative projects.
                </p>
            </div>

        </div>
    )
}

export default About
