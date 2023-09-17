import React from 'react'

const Logo = '<LPN/>';

const Header = () => {
  return (
    <div className='fixed top-0 bg-primary text-gray-300 w-full h-[70px] flex items-center border-b-2'>
       <div className='px-4 w-full flex justify-start items-center'>
            <div className='text-3xl font-bold'>{Logo}</div>
       </div>
 
    </div>
  )
}

export default Header