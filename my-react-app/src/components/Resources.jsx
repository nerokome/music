import React from 'react';
import { motion } from 'framer-motion';

const Resources = () => {
  const resources = [
    {
      title: "Crypto & Music 101",
      description: "Beginner-friendly guide to the decentralized music revolution.",
      link: "#",
      image: "/crymu.webp",
    },
    {
      title: "NFT Music Templates",
      description: "Smart contract blueprints and metadata samples for minting tracks.",
      link: "#",
      image: "/thrice.webp",
    },
    {
      title: "Open Source API",
      description: "Use our open API to integrate your music dApp with blockchain.",
      link: "#",
      image: "/twice.webp",
    },
    {
      title: "Brand Toolkit",
      description: "Logos, color schemes, and visual assets to remix with your vibe.",
      link: "#",
      image: "/once.webp",
    },
  ];

  return (
    <div className="flex bg-[url('/resource.webp')] bg-center bg-cover flex-row relative  justify-center min-h-screen bg-gray-900 text-gray-100 px-5 py-10 sm:px-5">
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="container relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Resources</h1>
        <p className='text-lg sm:text-md flex items-center justify-center'>Your gateway to the tools, knowledge, and assets that power the fusion of music and blockchain. Whether you’re a developer, artist,
             or community builder, you’ll find guides, templates, and APIs designed to be composable, open, 
            and creative. From minting music NFTs to integrating decentralized audio systems, this hub is built to help you remix the future</p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mt-10">
          {resources.map((item, index) => {
            const colors = ["#FFD700", "#00BFFF", "#32CD32", "#FF69B4"];
            const bgColor = colors[index % colors.length];

            return (
              <motion.div
                key={index}
                className="flex flex-col rounded-xl shadow-lg min-h-[500px] p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: bgColor }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#222] no-underline flex flex-col h-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-2xl font-bold font-mono mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resources;
