import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Full-screen Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/products/masala_photo.jpeg')"
        }}
      />
      {/* Premium dark gradient overlay for branding and readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/85 via-primary/20 to-primary/95 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-primary/20" />
      
      {/* Subtle slow-panning background gradient/texture to prevent flat look */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #D4AF37 0%, transparent 60%)',
          backgroundSize: '150% 150%'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 z-0 pointer-events-none"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-secondary tracking-[0.2em] uppercase text-sm md:text-base mb-6 font-medium drop-shadow-sm"
          >
            Est. 1920
          </motion.h2>

          <motion.h1 
            variants={itemVariants}
            className="text-base font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 drop-shadow-md"
          >
            The Heritage of <br/>
            <span className="italic text-secondary">Regal Flavors</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base/90 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-sm"
          >
            Artisanal spices crafted from generations of royal recipes. Elevate your culinary creations with the purest ingredients sourced from ancient lands.
          </motion.p>

          <motion.a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-secondary text-primary font-semibold tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300 rounded-sm inline-flex items-center gap-2"
          >
            Explore the Collection
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
