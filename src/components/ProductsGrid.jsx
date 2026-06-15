import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import ProductModal from './ProductModal';

const products = [
  {
    id: 1,
    name: "Shahi Biryani Masala",
    desc: "A regal blend of aromatic spices for the perfect festive biryani.",
    price: "$15",
    img: "/products/Biryani masala.jpeg"
  },
  {
    id: 2,
    name: "Nihari Royal Blend",
    desc: "Slow-cook heritage spices to create the classic rich Karachi Nihari gravy.",
    price: "$16",
    img: "/products/Nihari Masala.jpeg"
  },
  {
    id: 3,
    name: "Shami Kabab Spice",
    desc: "Perfect mix for traditional melt-in-the-mouth minced meat kababs.",
    price: "$14",
    img: "/products/Shami Kabab.jpeg"
  },
  {
    id: 4,
    name: "Tandoori Flame Masala",
    desc: "Vibrant and smoky spices for premium clay-oven style roasting.",
    price: "$15",
    img: "/products/Tandoori Masala.jpeg"
  },
  {
    id: 5,
    name: "Peshawari BBQ Masala",
    desc: "Authentic rustic blend for street-style charcoal grilled meats.",
    price: "$15",
    img: "/products/BBQ Masala.jpeg"
  },
  {
    id: 6,
    name: "Royal Fish Masala",
    desc: "Tangy and fragrant spices curated for traditional seafood curries.",
    price: "$16",
    img: "/products/Fish Masala.jpeg"
  },
  {
    id: 7,
    name: "Sabzi Masala Blend",
    desc: "A delicate mix to elevate everyday seasonal vegetable stir-fries.",
    price: "$12",
    img: "/products/4.jpeg"
  },
  {
    id: 8,
    name: "Kala Namak (Black Salt)",
    desc: "Pure mineral black salt with a distinct, savory sulfur aroma.",
    price: "$10",
    img: "/products/3.jpeg"
  },
  {
    id: 9,
    name: "Imperial Selection Box",
    desc: "A curated gift box containing all 6 signature Zauq-e-Noor packets.",
    price: "$65",
    img: "/products/1.jpeg"
  }
];

const ProductsGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const { addToCart } = useCart();
  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <section className="py-32 bg-base relative overflow-hidden" id="collection">
      {/* Premium textured background image */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage: "url('/products/product_bg.jpeg')",
          backgroundSize: '115%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Overlay to ensure blend and readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-base/80 via-base/40 to-base/85 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-primary mb-4"
          >
            The Royal Reserve
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-secondary mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
          <AnimatePresence>
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index % 6) * 0.1 }}
                className="group relative flex flex-col justify-between cursor-pointer bg-base/90 backdrop-blur-md border border-secondary/25 p-6 rounded-sm shadow-md transition-all duration-500 hover:shadow-2xl hover:border-secondary/60 hover:bg-base/95 after:absolute after:inset-2 after:border after:border-secondary/10 hover:after:border-secondary/30 after:transition-all after:duration-500 after:pointer-events-none"
                onClick={() => setActiveProduct(product)}
              >
                {/* Product Image Showcase with Mughal Arch Backdrop */}
                <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden mb-6 p-4">
                  {/* Arch Outline SVG Background */}
                  <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 group-hover:opacity-60 transition-opacity duration-500">
                    <svg viewBox="0 0 100 120" className="w-full h-full text-secondary fill-none stroke-current" strokeWidth="0.75">
                      <path d="M 15,105 L 15,45 C 15,30 32,25 50,8 C 68,25 85,30 85,45 L 85,105 Z" />
                    </svg>
                  </div>

                  {/* Clean, Sharp Product Image (No blur) */}
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="relative z-10 max-w-[85%] max-h-[85%] object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.12)] group-hover:drop-shadow-[0_20px_25px_rgba(212,175,55,0.25)] transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:-translate-y-2"
                  />
                </div>

                {/* Typography and Actions Area */}
                <div className="relative z-10 flex flex-col items-center mt-auto">
                  <span className="text-[9px] tracking-[0.25em] text-secondary font-semibold uppercase mb-1.5">
                    {product.id === 9 ? "Collector's Box" : "Imperial Selection"}
                  </span>
                  
                  <h3 className="text-xl font-serif text-primary text-center mb-1 group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-secondary font-medium tracking-wide text-sm mb-4">
                    {product.price}
                  </p>

                  {/* Animated Gold Line */}
                  <div className="w-10 h-px bg-secondary/25 group-hover:w-20 transition-all duration-500 mb-6"></div>

                  {/* Primary E-commerce Actions */}
                  <div className="w-full grid grid-cols-2 gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProduct(product);
                      }}
                      className="py-2.5 bg-primary/5 border border-primary/20 text-primary hover:bg-primary hover:text-white text-center uppercase tracking-widest text-[9px] font-semibold transition-all duration-300 rounded-sm"
                    >
                      Inspect
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="py-2.5 bg-secondary text-primary border border-secondary hover:bg-primary hover:text-white text-center uppercase tracking-widest text-[9px] font-bold transition-all duration-300 shadow-sm rounded-sm"
                    >
                      + Pouch
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-20 relative z-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 border border-secondary text-primary hover:bg-secondary hover:text-primary transition-all duration-300 font-semibold tracking-widest uppercase text-sm rounded-sm bg-base/50 backdrop-blur-sm shadow-md"
          >
            {showAll ? "Show Less" : "Explore More Blends"}
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeProduct && (
        <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
      )}
    </section>
  );
};

export default ProductsGrid;
