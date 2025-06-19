import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
const [tappedIdx, setTappedIdx] = React.useState(null);

return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 px-5 sm:px-5'>
        <h1 className='text-4xl font-bold mb-6 mt-5'>Our Vision</h1>

        <ul className='flex gap-8 p-5 flex-wrap justify-center'>
            {[
                {
                    src: "/Phone.webp",
                    alt: "heyyyyy",
                    title: "To create a vibrant digital space where the energy of crypto innovation meets the soul of musical creativity  a platform that disrupts the norm, pulses with rhythm, and empowers users to connect, create, and express freely.”",
                },
                {
                    src: "/block.webp",
                    alt: "hello",
                    title: "Just like music, the experience should spark emotion, creativity, and self-expression. It’s not just a product  it’s a vibe. Users can feel the rhythm in every click, glow, and message.",
                },
            ].map((card, idx) => (
                <motion.li
                    key={card.title}
                    className="w-110 h-110 sm:w-170 sm:h-170 rounded-xl overflow-hidden shadow-lg
                     bg-gray-800 relative p-0 sm:p-4 transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in list-none"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="relative w-full h-full"
                        whileTap={{ scale: 0.93, rotate: -3 }}
                        animate={tappedIdx === idx ? { scale: 1.08, rotate: 3 } : { scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        onTap={() => {
                            setTappedIdx(idx);
                            setTimeout(() => setTappedIdx(null), 350);
                        }}
                    >
                        <img
                            src={card.src}
                            alt={card.alt}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <h2 className="text-white text-xl italic text-center px-4">
                                {card.title}
                            </h2>
                        </div>
                    </motion.div>
                </motion.li>
            ))}
        </ul>
        <style>
            {`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in {
                    animation: fade-in 1s ease;
                }
            `}
        </style>
    </div>
);
};

export default Vision;
