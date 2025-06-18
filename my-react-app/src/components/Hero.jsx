import { motion } from 'framer-motion';
import Navbar from './Navbar';
import TypewriterComponent from 'typewriter-effect';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-[url('/music.webp')] bg-center bg-cover sm:h-screen h-[700px] relative text-white sm:bg-cover sm:bg-center">
        <div className="absolute inset-0 bg-black opacity-60 z-[1] sm:opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-[1]"></div>
        <div className="p-9 relative z-[2]">
        
          <div className="flex flex-col items-center justify-center h-full py-20 sm:py-70">
            
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl font-bold text-center mb-4 text-blue-400"
            >
              WAGMI
            </motion.h1>

            <h1 className="text-xl sm:text-2xl text-center mb-6 italic">
              <TypewriterComponent
                options={{
                  strings: [
                    'disruptive and fun like crypto and creative like music',
                    'high-frequency interaction, perfect for chat, crypto, creative tools.',
                    'Reflect. Grow. Believe.',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 20,
                  deleteSpeed: 10,
                }}
              />
            </h1>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 sm:px-14 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Explore
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
