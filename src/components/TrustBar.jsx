import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, ShieldCheck, Globe } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Award size={28} strokeWidth={1.5} />, title: 'Export Quality', desc: 'Grade A++ Standards' },
    { icon: <Leaf size={28} strokeWidth={1.5} />, title: 'Pure Ingredients', desc: 'Sourced directly from farms' },
    { icon: <ShieldCheck size={28} strokeWidth={1.5} />, title: 'No Preservatives', desc: '100% natural and authentic' },
    { icon: <Globe size={28} strokeWidth={1.5} />, title: 'Global Delivery', desc: 'Worldwide premium shipping' },
  ];

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-6 -mt-16 md:-mt-24 mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-base border border-secondary/30 shadow-2xl py-8 px-4 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
      >
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4 md:border-r last:border-0 border-secondary/20">
            <div className="text-secondary mb-3">
              {item.icon}
            </div>
            <h4 className="font-serif text-dark text-sm md:text-base font-semibold mb-1">
              {item.title}
            </h4>
            <p className="text-accent/70 text-xs tracking-wide">
              {item.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustBar;
