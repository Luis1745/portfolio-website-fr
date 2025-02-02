import { useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  const [status, setStatus] = useState({
    sending: false,
    success: false,
    error: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, success: false, error: '' });

    // Honeypot validation
    if (e.target.honeyPot.value) {
      setStatus({ sending: false, success: false, error: 'Bot detected' });
      return;
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error sending message');
      }

      setStatus({ sending: false, success: true, error: '' });
      e.target.reset();

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 3000);

    } catch (error) {
      setStatus({
        sending: false,
        success: false,
        error: error.message || 'An error occurred'
      });
    }
  };

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

          {/* Status Messages */}
          {status.error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 p-3 bg-red-500/20 text-red-300 rounded-lg"
            >
              {status.error}
            </motion.div>
          )}

          {status.success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 p-3 bg-green-500/20 text-green-300 rounded-lg"
            >
              Message sent successfully!
            </motion.div>
          )}

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* Honeypot Field */}
            <input
              type="text"
              name="honeyPot"
              className="hidden"
              autoComplete="off"
            />

            <div className='flex gap-x-6 w-full'>
              <input 
                type='text' 
                name='name'
                placeholder='Your Name'
                className='input'
                required
                minLength="2"
              />
              <input 
                type='email' 
                name='email'
                placeholder='Your Email'
                className='input'
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
            </div>

            <input 
              type='text' 
              name='subject'
              placeholder='Subject'
              className='input'
              required
              minLength="3"
            />
            
            <textarea 
              name='message'
              placeholder='Your Message'
              className='textarea'
              required 
              minLength="10"
              rows="5"
            ></textarea>
            
            <motion.button 
              type='submit'
              disabled={status.sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className='btn rounded-full border border-white/50 max-w-[170px]
              px-8 transition-all duration-300 flex items-center justify-center 
              overflow-hidden hover:border-green-700 group relative'
            >
              {status.sending ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white rounded-full animate-spin" />
                  Sending...
                </div>
              ) : (
                <>
                  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
                  transition-all duration-500'>
                    Send Message
                  </span>
                  <BsArrowRightCircle className='-translate-y-[120%] opacity-0 group-hover:flex 
                  group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                  duration-300 absolute text-[22px] text-green-600' />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;