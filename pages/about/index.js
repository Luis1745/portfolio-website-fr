import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaDrupal,
  FaPhp,
  FaJava,
  FaPython,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from 'react-icons/si';

import {
  AiOutlineConsoleSql
} from 'react-icons/ai';

//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="javascript" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <AiOutlineConsoleSql key="sql" />,
          <FaWordpress key="wordpress" />,
          <FaDrupal key="drupal" />
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adxd" />,
          <SiAdobephotoshop key="adphotoshop" />
        ],
      },
      {
        title: 'Video Production Suite',
        icons: [
          <SiAdobeaftereffects key="adae" />,
          <SiAdobepremierepro key="adpremiere" />,
        ],
      },
      {
        title: 'Other Programming Languages',
        icons: [
          <FaJava key="java" />,
          <FaPython key="python" />,
          <FaPhp key="php" />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'English for Developers & IT Professionals - Desafio Latam',
        stage: '2025',
      },
      {
        title: 'Introduction to Data Analysis with Python - Desafio Latam',
        stage: '2025',
      },
      {
        title: 'Introduction to Cybersecurity - Cisco Networking Academy',
        stage: '2023',
      },
      {
        title: 'Project Management with Agile Methodologies and Lean Approaches - Fundación Telefónica, MX',
        stage: '2023',
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            My <span className='text-accent'>Journey</span> as a Freelance Developer
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            Two years ago, I began my journey as a freelance developer. Since then, I have worked on custom websites, web applications,
            and digital solutions, helping businesses bring their ideas to life. With a focus on quality, efficiency, and innovation,
            I continue to grow and refine my skills to deliver the best results for my clients.
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-0'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* Experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* Clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* Projects */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex} // Agrega la propiedad key aquí
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
              after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className='text-2xl text-white'>{icon}</div> // Agrega key aquí también
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
