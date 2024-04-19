import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='pt-[1200px] w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-5xl font-bold border-b-4 border-gray-400 p-2 inline'>Contact</p>
                    <p className='py-6 text-xl'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/paqgqnwa" method='POST' className='flex flex-col w-full'>
                        <input type="text" name='name' placeholder='Enter your name' className='p-3 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="email" name='email' placeholder='Enter your email' className='my-6 p-3 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <textarea name="message" rows="10" className='p-3 bg-transparent border-2 rounded-md focus:outline-none' placeholder='Enter your message'></textarea>

                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-600 px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-110 duration-200 font-semibold text-xl'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
