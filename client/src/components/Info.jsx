import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Photocard from './Photocard'

import dirtbike_cardimg_l1 from '../assets/images/dirtbike_cardimg_l1.jpg'
import jetski_cardimg_l1 from '../assets/images/jetski_cardimg_l1.jpg'
import skydiving_cardimg_l1 from '../assets/images/skydiving_cardimg_l1.jpg'

const Info = () => {
  const introRef = useRef(null);
  const dirtbikeRef = useRef(null);
  const jetskiRef = useRef(null);
  const skydivingRef = useRef(null);
  
  const isIntroInView = useInView(introRef, { once: true, amount: 0.3 });
  const isDirtbikeInView = useInView(dirtbikeRef, { once: true, amount: 0.3 });
  const isJetskiInView = useInView(jetskiRef, { once: true, amount: 0.3 });
  const isSkydivingInView = useInView(skydivingRef, { once: true, amount: 0.3 });
  
  return (
    <section className='bg-black text-gray-100 flex flex-col'>
        <motion.div 
          ref={introRef}
          className='flex flex-col items-center justify-center p-14 mb-24'
          initial={{ opacity: 0, y: 50 }}
          animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
            <motion.h1 
              className='text-6xl text-[#FF9D00] font-bold text-center pt-6 px-12'
              initial={{ opacity: 0, y: -30 }}
              animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            > 
              Welcome to ThrillSeek - Your Ultimate Adventure Booking Platform
            </motion.h1>
            <motion.p 
              className='text-4xl font-bold text-justify pt-12 px-12'
              initial={{ opacity: 0 }}
              animate={isIntroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
                At ThrillSeek, we believe that life is meant to be lived on the edge—whether that means carving through rugged trails on a dirt bike, conquering roaring rapids, or soaring through the sky.
                Our platform connects adrenaline junkies with the most electrifying adventure sports, offering seamless booking for heart-pounding experiences across breathtaking locations.
                Whether you're a seasoned thrill-seeker or a first-time explorer, ThrillSeek is your gateway to unforgettable moments and untamed excitement.
                Choose your adventure, book your slot, and get ready to unleash the wild within!
            </motion.p>
        </motion.div>
        
        <div ref={dirtbikeRef} className='flex flex-col md:flex-row justify-between items-center gap-8 px-12 py-24 min-h-screen'>
          <motion.div 
            className='w-full md:w-1/2 flex justify-center'
            initial={{ opacity: 0, x: -100 }}
            animate={isDirtbikeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
          >
            <Photocard image={dirtbike_cardimg_l1} alt='Dirtbike' />
          </motion.div>
          <motion.div 
            className='w-full md:w-1/2 flex flex-col justify-center items-center p-6'
            initial={{ opacity: 0, x: 100 }}
            animate={isDirtbikeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h1 
              className='text-4xl font-bold mb-6 text-[#FF9D00]'
              initial={{ opacity: 0, y: -20 }}
              animate={isDirtbikeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Dirt Bike Riding 🏍️
            </motion.h1>
            <motion.p 
              className='text-xl'
              initial={{ opacity: 0 }}
              animate={isDirtbikeInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Feel the rush as you tear through rugged trails, muddy paths, and rocky terrain on a powerful dirt bike!
              Whether you're a seasoned rider or a first-timer, this high-octane sport guarantees heart-pounding excitement and pure off-road adventure.
              Master sharp turns, navigate tricky slopes, and embrace the thrill of the wild outdoors—because the dirtier, the better!
            </motion.p>
          </motion.div>
        </div>
        
        <div ref={jetskiRef} className='flex flex-col md:flex-row-reverse justify-between items-center gap-8 px-12 py-24 min-h-screen'>
          <motion.div 
            className='w-full md:w-1/2 flex justify-center'
            initial={{ opacity: 0, x: 100 }}
            animate={isJetskiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
          >
            <Photocard image={jetski_cardimg_l1} alt='Jetski' />
          </motion.div>
          <motion.div 
            className='w-full md:w-1/2 flex flex-col justify-center items-center p-6'
            initial={{ opacity: 0, x: -100 }}
            animate={isJetskiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h1 
              className='text-4xl font-bold mb-6 text-[#FF9D00]'
              initial={{ opacity: 0, y: -20 }}
              animate={isJetskiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Jet Ski Adventures 🌊
            </motion.h1>
            <motion.p 
              className='text-xl'
              initial={{ opacity: 0 }}
              animate={isJetskiInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Slice through crystal-clear waters at breathtaking speeds on your own personal watercraft!
              Experience the perfect blend of adrenaline and freedom as you zoom across lakes, oceans, or rivers.
              Feel the spray on your face as you perform tight turns, jumps, and spins—creating your own path on the endless blue playground!
            </motion.p>
          </motion.div>
        </div>
        
        <div ref={skydivingRef} className='flex flex-col md:flex-row justify-between items-center gap-8 px-12 py-24 min-h-screen'>
          <motion.div 
            className='w-full md:w-1/2 flex justify-center'
            initial={{ opacity: 0, x: -100 }}
            animate={isSkydivingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
          >
            <Photocard image={skydiving_cardimg_l1} alt='Skydiving' />
          </motion.div>
          <motion.div 
            className='w-full md:w-1/2 flex flex-col justify-center items-center p-6'
            initial={{ opacity: 0, x: 100 }}
            animate={isSkydivingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h1 
              className='text-4xl font-bold mb-6 text-[#FF9D00]'
              initial={{ opacity: 0, y: -20 }}
              animate={isSkydivingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Skydiving Experiences 🪂
            </motion.h1>
            <motion.p 
              className='text-xl'
              initial={{ opacity: 0 }}
              animate={isSkydivingInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Experience the ultimate freefall as you leap from thousands of feet above the earth!
              There's nothing quite like the exhilaration of skydiving—feeling weightless as you soar through the open sky.
              Witness breathtaking panoramic views before your parachute opens, giving you a serene floating descent to complete this unforgettable adventure!
            </motion.p>
          </motion.div>
        </div>
    </section>
  )
}

export default Info