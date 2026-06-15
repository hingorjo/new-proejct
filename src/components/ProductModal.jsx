import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Leaf, Flame, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const spiceDetails = {
  "Shahi Biryani Masala": {
    ingredients: "Black cardamom, green cardamom, mace, nutmeg, cinnamon, cloves, coriander, bay leaf, red chilli, cumin, fennel, black pepper.",
    usage: "Add 2 tablespoons per 500g of basmati rice and meat. Marinate meat with yogurt and spices for 2 hours before slow-cooking and layering.",
    origin: "Awadh / Lucknow",
    notes: "Perfect for both chicken and lamb biryanis."
  },
  "Nihari Royal Blend": {
    ingredients: "Dry ginger (sont), fennel seeds, black cardamom, nutmeg, mace, cinnamon, black pepper, cloves, bay leaf, stone flower (kalpasi).",
    usage: "Slow-cook meat (beef or lamb shank) with onions and spice blend for 4-6 hours. Dissolve wheat flour in water and stir in during the final 30 minutes to thicken.",
    origin: "Old Delhi / Shahjahanabad",
    notes: "Traditionally served with thin ginger juliennes, fresh coriander, and lemon."
  },
  "Shami Kabab Spice": {
    ingredients: "Coriander seeds, whole red chillies, cumin seeds, black pepper, cloves, cinnamon, caraway seeds (shahi jeera), ginger, garlic.",
    usage: "Boil minced meat and chana dal (split chickpeas) with 1.5 tbsp of spice mix. Blend to a fine paste once cooled, form patties, and shallow fry in ghee.",
    origin: "Mughalai Royal Court",
    notes: "Gives kababs their signature melt-in-the-mouth texture."
  },
  "Tandoori Flame Masala": {
    ingredients: "Kashmiri chilli (for rich red color), garlic powder, ginger powder, kasuri methi (fenugreek leaves), cumin, coriander, salt, dry mango powder.",
    usage: "Mix 2 tbsp spice mix with 4 tbsp thick hung yogurt and 1 tbsp mustard oil. Rub onto chicken, paneer, or vegetables. Marinate for 4 hours and roast.",
    origin: "Punjab / Clay Oven Heritage",
    notes: "Adds a natural, rich red smokiness without artificial food coloring."
  },
  "Peshawari BBQ Masala": {
    ingredients: "Coarse coriander, crushed red chilli flakes, anardana (dried pomegranate seeds), cumin, carom seeds (ajwain), black salt, dry mint.",
    usage: "Mix with minced beef/mutton or sprinkle generously over chops before grilling over open charcoal. Best paired with charcoal-smoked butter baste.",
    origin: "Peshawar / Khyber Pass",
    notes: "Features a tangy, rustic bite due to the dried pomegranate seeds."
  },
  "Royal Fish Masala": {
    ingredients: "Yellow mustard seeds, fenugreek seeds, turmeric, coriander, cumin, amchur (dry mango powder), dry garlic, ajwain.",
    usage: "Create a rub with spice mix, lemon juice, and oil. Coat fish fillets and set aside for 30 minutes. Shallow fry or simmer in coconut milk curry.",
    origin: "Konkan Coastline",
    notes: "Adds a vibrant, tangy acidity that cuts through fresh seafood beautifully."
  },
  "Sabzi Masala Blend": {
    ingredients: "Cumin, coriander, turmeric, dry ginger, amchur, asafoetida (hing), black pepper, fenugreek leaves.",
    usage: "Sprinkle 1 tsp during the last 5 minutes of stir-frying mixed seasonal vegetables or okra to lock in fresh aromas without burning the spices.",
    origin: "Varanasi / Banaras",
    notes: "A versatile, everyday flavor enhancer for vegetarian cooking."
  },
  "Kala Namak (Black Salt)": {
    ingredients: "100% natural and organic Himalayan mineral black salt crystals (Kala Namak).",
    usage: "Use as a finishing seasoning. Sprinkle over fruit salads, yogurt raitas, chaats, lemonades, or savory roasted chickpeas.",
    origin: "Himalayan Salt Range",
    notes: "Highly digestive mineral salt with a distinct, savory sulfur flavor profile."
  },
  "Imperial Selection Box": {
    ingredients: "A complete tasting collection including all 6 core recipe pouches of Zauq-e-Noor Masalas.",
    usage: "Excellent gift box or culinary starter kit. Store pouches in a cool, dark place in an airtight jar after opening.",
    origin: "Sourced Globally, Blended Locally",
    notes: "Comes packaged in a hand-crafted, gold-embossed regal gift container."
  }
};

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('ingredients');
  const details = spiceDetails[product.name] || {
    ingredients: "Premium proprietary spice blend.",
    usage: "Use according to your recipe taste.",
    origin: "Ancient spice route",
    notes: "Sourced naturally."
  };

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative bg-base max-w-4xl w-full rounded-sm shadow-2xl border border-secondary/20 z-10 overflow-hidden flex flex-col md:flex-row h-auto md:max-h-[85vh]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-primary md:text-white md:bg-primary/40 md:hover:bg-primary/70 md:p-1.5 md:rounded-full z-30 transition-all duration-300"
          >
            <X size={20} />
          </button>

          {/* Left Side: Product Image inside Ogee Arch */}
          <div className="w-full md:w-1/2 bg-primary/5 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-secondary/15 relative">
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
              <svg viewBox="0 0 100 120" className="w-full h-full p-4 text-secondary fill-none stroke-current" strokeWidth="0.5">
                <path d="M 10,110 L 10,50 C 10,35 30,30 50,10 C 70,30 90,35 90,50 L 90,110 Z" />
              </svg>
            </div>
            <img
              src={product.img}
              alt={product.name}
              className="relative z-10 max-h-[300px] md:max-h-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Title & Origin */}
              <div className="mb-4">
                <span className="text-[10px] tracking-[0.2em] text-secondary font-semibold uppercase block mb-1">
                  Origin: {details.origin}
                </span>
                <h3 className="text-3xl font-serif text-primary leading-tight">
                  {product.name}
                </h3>
                <p className="text-secondary font-medium tracking-wide text-lg mt-1">
                  {product.price}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm font-light leading-relaxed text-accent/90 mb-6">
                {product.desc}
              </p>

              {/* Tabs */}
              <div className="flex border-b border-secondary/15 mb-4">
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-2 pr-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 relative ${
                    activeTab === 'ingredients' ? 'text-primary' : 'text-accent/50'
                  }`}
                >
                  Ingredients
                  {activeTab === 'ingredients' && (
                    <motion.div layoutId="modal-tab-line" className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('usage')}
                  className={`pb-2 px-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 relative ${
                    activeTab === 'usage' ? 'text-primary' : 'text-accent/50'
                  }`}
                >
                  How to Use
                  {activeTab === 'usage' && (
                    <motion.div layoutId="modal-tab-line" className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary" />
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="min-h-[100px] text-xs font-light text-accent/80 leading-relaxed mb-6">
                {activeTab === 'ingredients' ? (
                  <div className="flex items-start gap-2 animate-fadeIn">
                    <Leaf size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                    <p>{details.ingredients}</p>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 animate-fadeIn">
                    <Flame size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                    <p>{details.usage}</p>
                  </div>
                )}
              </div>

              {/* Sourcing notes */}
              <div className="bg-primary/5 p-3 rounded-sm border border-secondary/10 flex items-start gap-2 text-[11px] text-primary/80 font-light mb-6">
                <Sparkles size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                <span><strong className="font-semibold">Concierge Note: </strong>{details.notes}</span>
              </div>
            </div>

            {/* Action button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-primary text-white hover:bg-secondary hover:text-primary transition-all duration-300 font-semibold uppercase tracking-widest text-xs rounded-sm shadow-md flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} />
              Add to Cart Pouch
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;
