import React from 'react'
import Photocard from './Photocard'

import dirtbike_cardimg_l1 from '../assets/images/dirtbike_cardimg_l1.jpg'
import jetski_cardimg_l1 from '../assets/images/jetski_cardimg_l1.jpg'
import skydiving_cardimg_l1 from '../assets/images/skydiving_cardimg_l1.jpg'

const Info = () => {
  return (
    <section className='bg-black text-gray-100 flex flex-col'>
        {/* Introduction section */}
        <div className='flex flex-col items-center justify-center p-14 mb-24'>
            <h1 className='text-6xl text-[#FF9D00] font-bold text-center pt-6 px-12'> Welcome to ThrillSeek - Your Ultimate Adventure Booking Platform</h1>
            <p className='text-4xl font-bold text-justify pt-12 px-12'>
                At ThrillSeek, we believe that life is meant to be lived on the edge—whether that means carving through rugged trails on a dirt bike, conquering roaring rapids, or soaring through the sky.
                Our platform connects adrenaline junkies with the most electrifying adventure sports, offering seamless booking for heart-pounding experiences across breathtaking locations.
                Whether you're a seasoned thrill-seeker or a first-time explorer, ThrillSeek is your gateway to unforgettable moments and untamed excitement.
                Choose your adventure, book your slot, and get ready to unleash the wild within!
            </p>
        </div>
        
        {/* Dirt Bike card with increased vertical spacing */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 px-12 py-24 min-h-screen'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <Photocard image={dirtbike_cardimg_l1} alt='Dirtbike' />
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-6'>
            <h1 className='text-4xl font-bold mb-6 text-[#FF9D00]'>Dirt Bike Riding 🏍️</h1>
            <p className='text-xl'>
              Feel the rush as you tear through rugged trails, muddy paths, and rocky terrain on a powerful dirt bike!
              Whether you're a seasoned rider or a first-timer, this high-octane sport guarantees heart-pounding excitement and pure off-road adventure.
              Master sharp turns, navigate tricky slopes, and embrace the thrill of the wild outdoors—because the dirtier, the better!
            </p>
          </div>
        </div>
        
        {/* Jetski card with increased vertical spacing */}
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8 px-12 py-24 min-h-screen'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <Photocard image={jetski_cardimg_l1} alt='Jetski' />
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-6'>
            <h1 className='text-4xl font-bold mb-6 text-[#FF9D00]'>Jet Ski Adventures 🌊</h1>
            <p className='text-xl'>
              Slice through crystal-clear waters at breathtaking speeds on your own personal watercraft!
              Experience the perfect blend of adrenaline and freedom as you zoom across lakes, oceans, or rivers.
              Feel the spray on your face as you perform tight turns, jumps, and spins—creating your own path on the endless blue playground!
            </p>
          </div>
        </div>
        
        {/* Skydiving card with increased vertical spacing */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 px-12 py-24 min-h-screen'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <Photocard image={skydiving_cardimg_l1} alt='Skydiving' />
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-6'>
            <h1 className='text-4xl font-bold mb-6 text-[#FF9D00]'>Skydiving Experiences 🪂</h1>
            <p className='text-xl'>
              Experience the ultimate freefall as you leap from thousands of feet above the earth!
              There's nothing quite like the exhilaration of skydiving—feeling weightless as you soar through the open sky.
              Witness breathtaking panoramic views before your parachute opens, giving you a serene floating descent to complete this unforgettable adventure!
            </p>
          </div>
        </div>
    </section>
  )
}

export default Info