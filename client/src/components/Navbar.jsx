import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "tailwindcss";
import logo from '../assets/svgs/logo.svg';

const Navbar = () => {
    const [isPlansOpen, setIsPlansOpen] = useState(false);
    const montserratStyle = {
      fontFamily: "'Montserrat', sans-serif"
    };

    return (
      <nav className="bg-black text-white p-4 flex justify-between items-center shadow-md relative z-50">
        <div className="flex items-center gap-6">
          <div className="text-xl font-bold text-yellow-400">
            <img src={logo} alt="Logo" className="size-20" />
          </div>
          <div className="hidden md:flex gap-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition">Home</a>
            
            <div className="relative">
              <button 
                onClick={() => setIsPlansOpen(!isPlansOpen)}
                className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-1"
                style={montserratStyle}
              >
                Plans
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className={`transition-transform duration-300 ${isPlansOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <AnimatePresence>
                {isPlansOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    className="absolute top-full mt-2 w-56 bg-black border border-gray-800 text-gray-300 rounded-md shadow-lg z-50"
                  >
                    <a href="#" className="block px-4 py-2 hover:text-yellow-400 transition border-b border-gray-800">Dirt Bike Riding</a>
                    <a href="#" className="block px-4 py-2 hover:text-yellow-400 transition border-b border-gray-800">Jet Ski Adventures</a>
                    <a href="#" className="block px-4 py-2 hover:text-yellow-400 transition">Skydiving Experiences</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition">Book now</a>
          </div>
        </div>
        <div>
          <button className="bg-yellow-400 px-6 py-2 rounded-md text-black font-bold hover:bg-black hover:text-yellow-400 hover:border hover:border-yellow-400 transition">
            Sign Up
          </button>
        </div>
      </nav>
    );
};
  

export default Navbar;