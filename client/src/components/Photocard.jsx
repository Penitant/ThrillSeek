import React from 'react';
import { motion } from 'framer-motion';

const Photocard = ({ image, alt }) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-xl border-4 border-[#FF9D00]"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <img 
        src={image} 
        alt={alt} 
        className="w-full h-auto object-cover"
      />
    </motion.div>
  );
};

export default Photocard;