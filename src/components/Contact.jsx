import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/54602da7-39d8-4a5f-8837-ec04827e7ebb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline text-gray-300 
                            border-b-4 border-pink-600'>
                                Contact
                </p>
                <p className='text-gray-300 py-4'>
                    // Submit the form below or shoot me an email - kgzwhite00@gmail.com
                </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600
                            px-8 py-3 my-8 mx-auto flex items-center'>
                Send
            </button>
        </form>
    </div>
  )
}

export default Contact