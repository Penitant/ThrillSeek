import React, { useRef, useState, } from 'react'
import { motion, useInView } from 'framer-motion'

const SignUp = () => {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [passwordMatch, setPasswordMatch] = useState(true);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Check password match when either password field changes
    if (name === 'password' || name === 'confirmPassword') {
      if (name === 'password') {
        setPasswordMatch(value === formData.confirmPassword || formData.confirmPassword === '');
      } else {
        setPasswordMatch(value === formData.password);
      }
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    // have to parse data to the backend later:
    console.log('Form submitted:', formData);
  };
  
  return (
    <section className='bg-black text-gray-100 flex flex-col min-h-screen'>
      <motion.div 
        ref={formRef}
        className='flex flex-col items-center justify-center p-8 md:p-14 my-8 md:my-16'
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
          Join the ThrillSeek Community
        </motion.h1>
        
        <motion.p 
          className='text-xl md:text-2xl font-bold text-center pt-6 pb-12 px-4 md:px-12'
          initial={{ opacity: 0 }}
          animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Sign up today to book your next adrenaline-pumping adventure!
        </motion.p>
        
        <motion.form 
          className='w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-xl'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isFormInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col md:flex-row md:space-x-4'>
            <motion.div 
              className='mb-6 w-full'
              initial={{ opacity: 0, x: -20 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <label className='block text-[#FF9D00] text-sm font-bold mb-2' htmlFor='firstName'>
                First Name
              </label>
              <input 
                className='shadow appearance-none border rounded w-full py-3 px-4 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-400'
                id='firstName'
                name='firstName'
                type='text'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </motion.div>
            
            <motion.div 
              className='mb-6 w-full'
              initial={{ opacity: 0, x: 20 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <label className='block text-[#FF9D00] text-sm font-bold mb-2' htmlFor='lastName'>
                Last Name
              </label>
              <input 
                className='shadow appearance-none border rounded w-full py-3 px-4 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-400'
                id='lastName'
                name='lastName'
                type='text'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>
          
          <motion.div 
            className='mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
            transition={{ duration: 0.6, delay: 0.9 }}
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
            className='mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <label className='block text-[#FF9D00] text-sm font-bold mb-2' htmlFor='confirmPassword'>
              Re-enter Password
            </label>
            <input 
              className={`shadow appearance-none border ${!passwordMatch ? 'border-red-500' : ''} rounded w-full py-3 px-4 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-400`}
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {!passwordMatch && (
              <p className='text-red-500 text-xs italic mt-1'>Passwords do not match</p>
            )}
          </motion.div>
          
          <motion.div 
            className='flex items-center justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <button
              className="w-full bg-yellow-400 px-6 py-3 rounded-md text-black font-bold hover:bg-black hover:text-yellow-400 hover:border hover:border-yellow-400 transition"
              type="submit"
            >
              Sign Up for Adventure
            </button>
          </motion.div>
          
          <motion.div 
            className='mt-6 text-center'
            initial={{ opacity: 0 }}
            animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className='text-gray-400'>
              Already have an account? <a href="/sign-in" className='text-[#FF9D00] hover:underline font-bold'>Log in</a>
            </p>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  )
}

export default SignUp