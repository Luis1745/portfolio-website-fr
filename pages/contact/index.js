import { BsArrowRightCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px] bg-white/5 p-4 rounded-3xl'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let’s <span className='text-accent'>connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input' />
              <input type='text' placeholder='email' className='input' />
            </div>
            <input type='text' placeholder='subject' className='input' />
            <textarea placeholder='message' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
            hover:border-green-700 group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500'>
                Let’s talk
              </span>
              <BsArrowRightCircle className='-translate-y-[120%] opacity-0 group-hover:flex 
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all
              duration-300 absolute text-[22px] text-green-600' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
