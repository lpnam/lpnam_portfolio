import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { BiHomeAlt, BiUser } from 'react-icons/bi';

const Logo = '<LPN/>'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const showNavbar = () => {
        if(window.innerWidth<=960) {
            setNav(false)
        } else {
            setNav(true)
        }
    };

    useEffect(() => {
        showNavbar()
      }, []);

    window.addEventListener('resize', showNavbar);

  return (
    <nav className={nav ? 'fixed bg-primary text-gray-300 w-full h-[70px] flex items-center border-b-2' :
                          'fixed w-full bottom-5 overflow-hidden z-50 text-[#0a192f]'}
    >
        {nav ?     
            // MD Screen
            <div className='px-4 w-full flex justify-between items-center'>
                {/* Logo */}
                <div className='text-4xl font-bold'>{Logo}</div>

                {/* Navbar */}
                <div>
                    <ul className='flex text-[19px]'>
                        <li>
                            <Link to='home' smooth={true} offset={-70}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='about' smooth={true} offset={-70}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='skills' smooth={true} offset={-70}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to='work' smooth={true} offset={-70}>
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link to='contact' smooth={true} offset={-70}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div> :
            // Sm Screen
            <div className='container max-w-[360px] mx-auto h-[65px]
                            flex justify-around items-center text-2xl backdrop-blur-2xl
                            rounded-full px-5 border-2 border-[#0a192f] bg-[#ccd6f6]'
            >
                <Link to='home' 
                    activeClass='active' 
                    smooth={true} 
                    spy={true} 
                    offset={-210}
                    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
                >
                    <BiHomeAlt />
                </Link>
                <Link to='about' 
                    activeClass='active' 
                    smooth={true} 
                    spy={true} 
                    offset={-70}
                    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
                >
                    <BiUser />
                </Link>
                <Link to='skills' 
                    activeClass='active' 
                    smooth={true} 
                    spy={true} 
                    offset={-70}
                    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
                >
                    <BsClipboardData />
                </Link>
                <Link to='work' 
                    activeClass='active' 
                    smooth={true} 
                    spy={true} 
                    offset={-70}
                    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
                >
                    <BsBriefcase />
                </Link>
                <Link to='contact' 
                    activeClass='active' 
                    smooth={true} 
                    spy={true} 
                    offset={-70}
                    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
                >
                    <BsChatSquareText />
                </Link>

            </div>
        }
    </nav>
  )
}

export default Navbar