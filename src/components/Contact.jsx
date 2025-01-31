import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-black text-white py- ' id='contact'>
    <div className='container mx-auto px- md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <div className='flex-1'>
                 <p>I'm open to discussing web development projects or partnership oppertunities.</p>
                <div className='mb-4 mt-8'>
                    <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                    <a href="mailto:aleenat511@gmail.com" className='hover:underline'>
                        aleenat511@gmail.com
                    </a>
                </div>

                <div className='mb-4'>
                    <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                    <span>7356222077</span>
                </div>

                <div className='mb-4 '>
                    <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                    <span>street , city , country</span>
                </div>
               </div>
             <div className='flex-1 w-full'>
                   <form className='space-y-4'>
                    <div>
                        <label htmlFor="name" className='block mb-2'>Your Name</label>
                        <input className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' type="text" placeholder='Enter your Name'/>
                    </div>

                    <div>
                        <label htmlFor="email" className='block mb-2'>Email</label>
                        <input className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' type="text" placeholder='Enter your Email'/>
                    </div>

                    <div>
                        <label htmlFor="message" className='block mb-2'>Message</label>
                        <textarea className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' type="text" row="5" placeholder='Enter  message'/>
                    </div>
                    <button className='bg-gradient-to-r bg-green-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>

                   </form>
             </div>
        </div>
    </div>
</div>
  )
}

export default Contact