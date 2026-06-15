import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-base text-primary px-4 py-2 rounded-md shadow-xl border border-secondary/20 text-sm font-medium tracking-wide"
          >
            Chat with our Concierge
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors duration-300"
      >
        {/* Ping Animation Ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-slow opacity-75"></div>
        
        {/* Icon */}
        <MessageCircle size={32} className="relative z-10" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
