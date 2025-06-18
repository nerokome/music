import React from 'react'
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaSnapchat, FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';


const Join = () => {
return (
    <div className="flex bg-[url('/contact.webp')] bg-center bg-cover sm:h-[400px] relative flex-col justify-center items-center h-[400px] bg-gray-300 text-gray-800">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        {/* Content */}
        <motion.div
            className="relative z-10 flex flex-col justify-center items-center w-full h-full"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <motion.p
                className='text-3xl font-bold text-gray-200 mb-4'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                Contact us
            </motion.p>
            <motion.div
                className="flex gap-5 mt-5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                <CiInstagram size={35} className='text-[#E1306C] transition-transform duration-300 hover:scale-125 hover:-translate-y-1' />
                <CiFacebook size={35} className='text-[#1877F2] transition-transform duration-300 hover:scale-125 hover:-translate-y-1' />
                <FaSnapchat size={35} className='text-[#FFFC00] transition-transform duration-300 hover:scale-125 hover:-translate-y-1' />
                <FaXTwitter size={35} className='text-white transition-transform duration-300 hover:scale-125 hover:-translate-y-1' />
            </motion.div>
        </motion.div>
    </div>
)
}

export default Join
