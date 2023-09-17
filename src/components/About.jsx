import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const About = () => {
    return (
        <section id='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-start pt-16 md:pt-0 md:justify-center items-center h-screen mx-6'>
                <motion.div 
                    variants={fadeIn('up', 0.3)} 
                    initial='hidden'
                    whileInView={'show'} 
                    viewport={{once: true, amount: 0.7 }}
                    className='w-full grid grid-cols-2 gap-8'
                >
                    <div className='md:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </motion.div>
                <div className='w-full md:grid grid-cols-2 gap-8 px-4'>
                    <motion.div 
                        variants={fadeIn('up', 0.4)} 
                        initial='hidden'
                        whileInView={'show'} 
                        viewport={{once: true, amount: 0.7 }}
                        className='md:text-right text-4xl font-bold'
                    >
                        <p>Hi. I'm Nam, nice to meet you. Please take a look around</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.5)} 
                        initial='hidden'
                        whileInView={'show'} 
                        viewport={{once: true, amount: 0.7 }}
                    >
                        <p className='mt-4 md:mt-0'>
                            I am passionate about building excellent software that improves
                            the lives of those around me. I specialize in creating software
                            for clients ranging from individuals and small-businesses all the
                            way to large enterprise corporations. What would you do if you had
                            a software expert available at your fingertips?
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
      )
}

export default About