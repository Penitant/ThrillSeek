import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const SignIn = () => {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };
  
  return (
    <section className='bg-black text-gray-100 flex flex-col min-h-screen'>
      <motion.div 
        ref={formRef}
        className='flex flex-col items-center justify-center p-8 md:p-14 my-12 md:my-24'
        initial={{ opacity: 0, y: 50 }}
        animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className='text-4xl md:text-6xl text-[#FF9D00] font-bold text-center pt-6 px-4 md:px-12'
          initial={{ opacity: 0, y: -30 }}
          animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        > 
          Welcome Back to ThrillSeek
        </motion.h1>
        
        <motion.p 
          className='text-xl md:text-2xl font-bold text-center pt-6 pb-12 px-4 md:px-12'
          initial={{ opacity: 0 }}
          animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Sign in to continue your adventure journey!
        </motion.p>
        
        <motion.form 
          className='w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-xl'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isFormInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onSubmit={handleSubmit}
        >
          <motion.div 
            className='mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <label className='block text-[#FF9D00] text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input 
              className='shadow appearance-none border rounded w-full py-3 px-4 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-400'
              id='email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>
          
          <motion.div 
            className='mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <label className='block text-[#FF9D00] text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input 
              className='shadow appearance-none border rounded w-full py-3 px-4 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-400'
              id='password'
              name='password'
              type='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </motion.div>
          
          <motion.div 
            className='mb-6 flex items-center justify-between'
            initial={{ opacity: 0 }}
            animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className='flex items-center'>
              <input 
                id='rememberMe' 
                type='checkbox'
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className='w-4 h-4 mr-2 border rounded text-yellow-400 focus:ring-yellow-400 bg-gray-800 border-gray-600'
              />
              <label htmlFor='rememberMe' className='text-sm text-gray-300'>
                Remember me
              </label>
            </div>
            <a href="/forgot-password" className='text-sm text-[#FF9D00] hover:underline'>
              Forgot Password?
            </a>
          </motion.div>
          
          <motion.div 
            className='flex items-center justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <button
              className="w-full bg-yellow-400 px-6 py-3 rounded-md text-black font-bold hover:bg-black hover:text-yellow-400 hover:border hover:border-yellow-400 transition"
              type="submit"
            >
              Sign In
            </button>
          </motion.div>
          
          <motion.div 
            className='mt-8 text-center'
            initial={{ opacity: 0 }}
            animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <p className='text-gray-400'>
              Don't have an account? <a href="/signup" className='text-[#FF9D00] hover:underline font-bold'>Sign up</a>
            </p>
          </motion.div>
          
          <motion.div 
            className='mt-8 pt-6 border-t border-gray-700'
            initial={{ opacity: 0 }}
            animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <p className='text-sm text-center text-gray-400 mb-4'>Or sign in with</p>
            <div className='flex justify-center space-x-4'>
              <button 
                type='button'
                className='flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 transition'
              >
                <span className='text-xl'>G</span>
              </button>
              <button 
                type='button'
                className='flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 transition'
              >
                <span className='text-xl'>f</span>
              </button>
              <button 
                type='button'
                className='flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 transition'
              >
                <span className='text-xl'>in</span>
              </button>
            </div>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  )
}

export default SignIn