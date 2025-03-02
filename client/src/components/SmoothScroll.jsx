import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  const { scrollY } = useScroll();

  const springConfig = { 
    damping: 60,
    stiffness: 400,
    mass: 0.5
  };
  const physicsScroll = useSpring(scrollY, springConfig);

  const transformedY = useTransform(physicsScroll, (latest) => -latest);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    if (scrollRef.current) {
      setScrollHeight(scrollRef.current.scrollHeight);
    }

    const resizeObserver = new ResizeObserver(() => {
      if (scrollRef.current) {
        setScrollHeight(scrollRef.current.scrollHeight);
      }
    });

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => {
      document.body.style.overflow = '';
      if (scrollRef.current) {
        resizeObserver.unobserve(scrollRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={ghostRef}
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: scrollHeight,
          pointerEvents: 'none',
          visibility: 'hidden',
          top: 0,
          left: 0
        }}
      />

      <div 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'auto',
          pointerEvents: 'none'
        }}
        className="custom-scrollbar"
      >
        <div style={{ height: scrollHeight }}></div>
      </div>

      <motion.div
        ref={scrollRef}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          y: transformedY,
          zIndex: 10,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
