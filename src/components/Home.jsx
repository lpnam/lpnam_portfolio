import React, { useState, useEffect } from 'react';
import Header from './Header';
import Image from '../images/logo2.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const Home = () => {
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
    <section className='w-full h-screen flex flex-col items-center bg-primary' id='home'>
    {!nav && <Header />}
    <div className='container mx-auto mt-[180px] text-gray-300'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial='hidden'
            whileInView={'show'} 
            viewport={{once: true, amount: 0.7 }}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-2'
          >
            NAM <span>LE</span>
          </motion.h1>
          <motion.div               
            variants={fadeIn('up', 0.4)} 
            initial='hidden'
            whileInView={'show'} 
            viewport={{once: true, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold leading-[1]'
          >
            <span className='text-white mr-4 text-[30px] lg:text-[38px]'>I am a</span>
            <TypeAnimation sequence={[
                'Developer',
                2000,
                'Software Engineer',
                2000,
                'Automation Tester',
                2000,
              ]}
              speed={50}
              className='uppercase text-pink-600'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p               
            variants={fadeIn('up', 0.5)} 
            initial='hidden'
            whileInView={'show'} 
            viewport={{once: true, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ad optio nesciunt iusto deleniti, atque asperiores sed voluptatibus excepturi ducimus. Voluptates officia consectetur distinctio quaerat voluptate praesentium molestiae dolor cupiditate!
          </motion.p>
          <motion.div               
            variants={fadeIn('up', 0.6)} 
            initial='hidden'
            whileInView={'show'} 
            viewport={{once: true, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
          >
            <button className='btn btn-lg'>Contact Me</button>
            <a href='#' className='btn-link hover:text-pink-600'>My Resume</a>
          </motion.div>
          <motion.div               
            variants={fadeIn('up', 0.7)} 
            initial='hidden'
            whileInView={'show'} 
            viewport={{once: true, amount: 0.7 }}
            className='flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0'
          >
            <a href='#' className='hover:text-pink-600'>
              <FaLinkedin />
            </a>
            <a href='#' className='hover:text-pink-600'>
              <FaGithub />
            </a>
          </motion.div>
        </div>
        <motion.div               
          variants={fadeIn('down', 0.5)} 
          initial='hidden'
          whileInView={'show'} 
          viewport={{once: true, amount: 0.7 }}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
        >
          <img src={Image} alt='' className='rounded-full'/>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default Home