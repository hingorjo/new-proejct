import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section className="py-24 md:py-32 bg-base relative" id="story">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Side: Massive Mughal Arch Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-md mx-auto md:max-w-none"
        >
          {/* Mughal Arch Window Frame */}
          <div className="relative aspect-[3/4] rounded-[50%_50%_0_0/100%_100%_0_0] overflow-hidden border-[6px] border-secondary/30 p-1 shadow-2xl bg-primary/10">
            <div className="w-full h-full rounded-[49%_49%_0_0/98%_98%_0_0] overflow-hidden">
              <img 
                src="/products/legacy.jpeg" 
                alt="Brand Legacy" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
              />
            </div>
          </div>
          {/* Decorative Gold Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-secondary rounded-full opacity-30 pointer-events-none"></div>
          <div className="absolute top-1/4 -left-8 w-16 h-16 bg-secondary/10 rounded-full blur-xl pointer-events-none"></div>
        </motion.div>

        {/* Right Side: Editorial Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">
            A Legacy of <br/>
            <span className="italic text-secondary">Flavor</span>
          </h2>
          
          <div className="text-accent space-y-6 font-sans text-lg md:text-xl font-light leading-relaxed">
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-secondary first-letter:float-left first-letter:mr-4 first-letter:-mt-2">
              For over a century, Zauq-e-Noor has been the secret behind the most illustrious royal banquets. Our journey began in the bustling spice bazaars of the East, where our founders hand-selected the rarest ingredients to create blends of unparalleled complexity.
            </p>
            <p>
              We do not simply grind spices; we curate experiences. Every batch of our masala is a testament to time-honored roasting techniques, ensuring that the essential oils are perfectly preserved, releasing their majestic aromas only when they meet the heat of your culinary creations.
            </p>
            <p>
              Taste the heritage. Experience the regality.
            </p>
          </div>

          <div className="mt-12">
            <div className="font-serif italic text-3xl text-secondary/70 font-semibold tracking-wider">Noor-ud-Din</div>

            <p className="text-sm font-semibold tracking-widest text-primary mt-4 uppercase">
              Master Blender, Zauq-e-Noor
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
