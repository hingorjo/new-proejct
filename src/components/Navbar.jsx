import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Heritage', href: '#story' },
    { name: 'Collection', href: '#collection' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  const { toggleCart, getCartCount } = useCart();

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img 
            src="/products/2.jpeg" 
            alt="Zauq-e-Noor Logo" 
            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-secondary/30 bg-base shadow-md" 
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-2xl text-secondary tracking-widest uppercase leading-none">Zauq-e-Noor</span>
            <span className="text-[0.5rem] md:text-xs text-base/60 tracking-[0.3em] uppercase mt-1">Masala</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base/90 hover:text-secondary text-sm font-medium tracking-wider uppercase relative group transition-colors duration-300"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Cart Icon trigger */}
          <button 
            onClick={toggleCart}
            className="relative text-base/90 hover:text-secondary p-2 transition-colors duration-300 flex items-center"
          >
            <ShoppingBag size={20} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-primary text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {getCartCount()}
              </span>
            )}
          </button>

          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="ml-2 px-6 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors duration-300 text-xs font-semibold tracking-widest uppercase rounded-sm">
            Order
          </a>
        </div>

        {/* Mobile Toggle & Cart */}
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={toggleCart}
            className="relative text-secondary p-2 transition-colors duration-300 flex items-center"
          >
            <ShoppingBag size={22} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-primary text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-md">
                {getCartCount()}
              </span>
            )}
          </button>
          <button className="text-secondary p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-primary border-t border-secondary/20 py-6 px-6 flex flex-col gap-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base text-lg font-serif tracking-widest uppercase text-center hover:text-secondary"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
