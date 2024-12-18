import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from "../components/Avatar";

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Unleash the Power<br />of{' '} <span className='text-accent'>Digital Innovation</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            Transform your business with custom-built websites, apps, and software designed for excellence.
            I create digital experiences that captivate and drive results, turning your ideas into powerful tools for success.
            Let’s push the boundaries of what’s possible.
          </motion.p>

          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat 
        w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[570px] max-h-[578px] absolute -bottom-32 lg:bottom-0 lg:right-[5%]'>
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
