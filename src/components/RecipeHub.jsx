import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, ChefHat, Check, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const recipes = [
  {
    id: 1,
    title: "Nizam's Mutton Biryani",
    desc: "A royal celebration of layered aged basmati rice, tender mutton, and aromatic spices cooked slow under 'dum'.",
    prepTime: "30 mins",
    cookTime: "45 mins",
    servings: "4-6",
    difficulty: "Regal",
    spiceName: "Shahi Biryani Masala",
    spiceProduct: {
      id: 1,
      name: "Shahi Biryani Masala",
      price: "$15",
      img: "/products/Biryani masala.jpeg",
      desc: "A regal blend of aromatic spices for the perfect festive biryani."
    },
    bgImage: "/products/masala_photo.jpeg",
    ingredients: [
      { name: "1kg Mutton (lamb or goat, cut into pieces)", isSpice: false },
      { name: "1kg Basmati Rice (aged, soaked for 30 mins)", isSpice: false },
      { name: "250g Pure Ghee", isSpice: false },
      { name: "4 large Onions (thinly sliced)", isSpice: false },
      { name: "200g Fresh Yogurt (whisked)", isSpice: false },
      { name: "2 tbsp Ginger-Garlic paste", isSpice: false },
      { name: "1 pack Zauq-e-Noor Shahi Biryani Masala", isSpice: true }
    ],
    steps: [
      "Marinate the mutton with yogurt, ginger-garlic paste, and 2 tablespoons of Zauq-e-Noor Shahi Biryani Masala. Let it rest for 2 hours.",
      "In a heavy-bottomed handi, heat ghee and fry the sliced onions until golden brown. Set half aside for garnish.",
      "Add marinated mutton to the remaining onions in the handi, and sear until the meat changes color. Cover and slow cook until tender.",
      "In a separate pot, boil rice with whole spices until 70% cooked. Drain the water.",
      "Layer the cooked mutton, parboiled rice, fried onions, and saffron milk in the handi. Seal the lid with wheat dough.",
      "Cook on low heat (dum) for 25 minutes. Garnish with mint, coriander, and fried onions before serving."
    ]
  },
  {
    id: 2,
    title: "Dehlvi Slow-Cooked Nihari",
    desc: "A velvety, slow-cooked stew of tender beef shank, simmered overnight with traditional heritage spices.",
    prepTime: "15 mins",
    cookTime: "4-6 hours",
    servings: "6-8",
    difficulty: "Imperial",
    spiceName: "Nihari Royal Blend",
    spiceProduct: {
      id: 2,
      name: "Nihari Royal Blend",
      price: "$16",
      img: "/products/Nihari Masala.jpeg",
      desc: "Slow-cook heritage spices to create the classic rich Delhi Nihari gravy."
    },
    bgImage: "/products/legacy.jpeg",
    ingredients: [
      { name: "1kg Beef Shank (Bong, cut into large pieces)", isSpice: false },
      { name: "100g Wheat Flour (Atta)", isSpice: false },
      { name: "150ml Mustard Oil or Ghee", isSpice: false },
      { name: "2 large Onions (finely chopped)", isSpice: false },
      { name: "1 tbsp Ginger Paste", isSpice: false },
      { name: "1 pack Zauq-e-Noor Nihari Royal Blend", isSpice: true }
    ],
    steps: [
      "Heat ghee or mustard oil in a deep heavy-bottomed pot. Sauté the chopped onions until soft and translucent.",
      "Add beef shank pieces and ginger paste. Stir-fry on high heat for 5 minutes until meat is seared.",
      "Stir in 3 tablespoons of Zauq-e-Noor Nihari Royal Blend. Mix well, then add 4-6 cups of water. Cover and bring to a boil.",
      "Reduce heat to low, cover tightly, and simmer for 4-5 hours until the meat is melt-in-the-mouth tender.",
      "Dissolve wheat flour in 1 cup of water to make a smooth slurry. Gradually pour into the gravy while stirring constantly.",
      "Simmer for another 20-30 minutes until the gravy thickens and oil floats to the top. Serve hot with ginger juliennes, green chillies, and lemon wedges."
    ]
  },
  {
    id: 3,
    title: "Peshawari Charcoal Tikka",
    desc: "Smoked street-style charcoal-grilled meat chunks infused with rustic spices and dried pomegranate.",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "4",
    difficulty: "Courtyard",
    spiceName: "Peshawari BBQ Masala",
    spiceProduct: {
      id: 5,
      name: "Peshawari BBQ Masala",
      price: "$15",
      img: "/products/BBQ Masala.jpeg",
      desc: "Authentic rustic blend for street-style charcoal grilled meats."
    },
    bgImage: "/products/product_bg.jpeg",
    ingredients: [
      { name: "1kg Chicken or Lamb cubes", isSpice: false },
      { name: "100g Butter (melted, for basting)", isSpice: false },
      { name: "3 tbsp Lemon juice", isSpice: false },
      { name: "2 tbsp Ginger-Garlic paste", isSpice: false },
      { name: "1 pack Zauq-e-Noor Peshawari BBQ Masala", isSpice: true }
    ],
    steps: [
      "In a large bowl, mix chicken/lamb cubes with ginger-garlic paste, lemon juice, and 2.5 tablespoons of Zauq-e-Noor Peshawari BBQ Masala.",
      "Cover and marinate in the refrigerator for at least 4 hours (overnight for lamb is preferred).",
      "Thread the marinated meat onto skewers, leaving a small space between pieces.",
      "Prepare hot coals in a barbecue grill. Place the skewers over the charcoal.",
      "Grill for 15-20 minutes, turning regularly and basting generously with melted butter, until cooked through and charred at the edges.",
      "Slide the tikka off skewers, dust with a pinch of extra BBQ masala, and serve hot with mint yogurt chutney and naan."
    ]
  }
];

const RecipeHub = () => {
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const { addToCart } = useCart();

  const handleToggleIngredient = (recipeId, index) => {
    const key = `${recipeId}-${index}`;
    setCheckedIngredients((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleOpenRecipe = (recipe) => {
    setActiveRecipe(recipe);
    // Clear checked ingredients for this recipe when opening
    const cleared = { ...checkedIngredients };
    recipe.ingredients.forEach((_, idx) => {
      delete cleared[`${recipe.id}-${idx}`];
    });
    setCheckedIngredients(cleared);
  };

  return (
    <section className="py-32 bg-primary text-base relative overflow-hidden" id="journal">
      {/* Decorative background vectors */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-secondary">
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.3em] text-secondary font-semibold uppercase block mb-3">
            Culinary Heritage Journal
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-secondary mb-4"
          >
            The Royal Kitchens
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-secondary/40 mx-auto"
          ></motion.div>
          <p className="text-base/70 font-light text-sm max-w-lg mx-auto mt-6">
            Secrets of Mughal culinary mastery, tailored for the modern home chef. Discover how to create authentic dishes with our royal reserve.
          </p>
        </div>

        {/* Asymmetrical Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {recipes.map((recipe, index) => {
            // Apply different styling heights or grid spans for asymmetry
            const isWide = index === 0;
            return (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`group relative flex flex-col justify-between overflow-hidden bg-primary/40 border border-secondary/15 rounded-sm transition-all duration-500 hover:border-secondary/40 hover:shadow-xl ${
                  isWide ? 'md:col-span-2 h-[450px]' : 'col-span-1 h-[450px]'
                }`}
              >
                {/* Background image overlay */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center opacity-10 group-hover:scale-105 group-hover:opacity-20 transition-all duration-700 pointer-events-none"
                  style={{ backgroundImage: `url('${recipe.bgImage}')` }}
                />

                {/* Mughal arch element inside card */}
                <div className="absolute inset-x-0 bottom-0 top-1/3 z-0 flex items-end justify-center opacity-5 pointer-events-none">
                  <svg viewBox="0 0 100 120" className="w-full h-full text-secondary fill-none stroke-current" strokeWidth="0.5">
                    <path d="M 10,120 L 10,50 C 10,35 30,30 50,10 C 70,30 90,35 90,50 L 90,120" />
                  </svg>
                </div>

                <div className="p-8 z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Badge / Difficulty */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="flex items-center gap-1.5 text-xs text-secondary font-medium tracking-wider uppercase">
                        <ChefHat size={14} />
                        {recipe.difficulty}
                      </span>
                      <div className="flex gap-4 text-xs text-base/60">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {recipe.prepTime} Prep
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-base mb-4 group-hover:text-secondary transition-colors duration-300">
                      {recipe.title}
                    </h3>
                    <p className="text-base/70 font-light text-sm leading-relaxed mb-6 max-w-xl">
                      {recipe.desc}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-secondary/10 pt-6 mt-auto">
                    <div className="flex items-center gap-3">
                      <img
                        src={recipe.spiceProduct.img}
                        alt={recipe.spiceName}
                        className="w-10 h-10 object-contain rounded-sm bg-base/5 p-1 border border-secondary/10"
                      />
                      <div className="flex flex-col">
                        <span className="text-[10px] tracking-widest uppercase text-secondary">Key Spice</span>
                        <span className="text-xs font-medium text-base/90">{recipe.spiceName}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenRecipe(recipe)}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-secondary hover:text-white transition-colors duration-300 group/btn self-start sm:self-center"
                    >
                      Secret Recipe
                      <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Recipe Detail Modal */}
      <AnimatePresence>
        {activeRecipe && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveRecipe(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative bg-base text-dark max-w-4xl w-full rounded-sm shadow-2xl border border-secondary/20 z-10 overflow-hidden flex flex-col md:flex-row h-auto md:max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveRecipe(null)}
                className="absolute top-4 right-4 text-primary md:text-white md:bg-primary/45 md:hover:bg-primary/75 md:p-1.5 md:rounded-full z-30 transition-all duration-300"
              >
                <X size={20} />
              </button>

              {/* Left Column: Cover & Spice Feature */}
              <div className="w-full md:w-5/12 bg-primary text-base flex flex-col justify-between p-8 relative border-b md:border-b-0 md:border-r border-secondary/15">
                {/* Visual backdrop */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none"
                  style={{ backgroundImage: `url('${activeRecipe.bgImage}')` }}
                />

                <div className="relative z-10">
                  <span className="text-[10px] tracking-[0.25em] text-secondary font-semibold uppercase block mb-1">
                    Heritage Formula
                  </span>
                  <h3 className="text-3xl font-serif text-base mb-6 leading-tight">
                    {activeRecipe.title}
                  </h3>

                  {/* Badges list */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-xs text-base/80">
                      <Clock size={16} className="text-secondary" />
                      <span>{activeRecipe.prepTime} Prep | {activeRecipe.cookTime} Cook</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-base/80">
                      <Users size={16} className="text-secondary" />
                      <span>Serves {activeRecipe.servings} guests</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-base/80">
                      <ChefHat size={16} className="text-secondary" />
                      <span>Difficulty: {activeRecipe.difficulty} Level</span>
                    </div>
                  </div>
                </div>

                {/* Golden Commerce Box for Spice */}
                <div className="relative z-10 bg-gradient-to-br from-primary via-primary/95 to-primary/80 border border-secondary/30 p-5 rounded-sm mt-8 shadow-lg">
                  <span className="text-[9px] tracking-widest text-secondary font-bold uppercase block mb-2">Secret Ingredient</span>
                  <div className="flex gap-4 items-center mb-4">
                    <img
                      src={activeRecipe.spiceProduct.img}
                      alt={activeRecipe.spiceProduct.name}
                      className="w-12 h-12 object-contain bg-base/5 p-1 border border-secondary/10 rounded-sm"
                    />
                    <div>
                      <h4 className="text-sm font-serif text-base">{activeRecipe.spiceProduct.name}</h4>
                      <p className="text-xs text-secondary font-medium">{activeRecipe.spiceProduct.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(activeRecipe.spiceProduct);
                      setActiveRecipe(null);
                    }}
                    className="w-full py-2.5 bg-secondary text-primary hover:bg-white hover:text-primary transition-all duration-300 text-center uppercase tracking-widest text-[9px] font-bold rounded-sm shadow-md flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag size={12} />
                    Add Spice Pouch to Cart
                  </button>
                </div>
              </div>

              {/* Right Column: Ingredients Checklist & Steps */}
              <div className="w-full md:w-7/12 p-8 overflow-y-auto flex flex-col justify-between">
                <div>
                  {/* Ingredients section */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold tracking-widest uppercase text-primary border-b border-secondary/10 pb-2 mb-4">
                      Ingredients Checklist
                    </h4>
                    <p className="text-[11px] text-accent/60 font-light mb-4">
                      Tick off ingredients in your pantry to see what is missing:
                    </p>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeRecipe.ingredients.map((ing, idx) => {
                        const isChecked = !!checkedIngredients[`${activeRecipe.id}-${idx}`];
                        return (
                          <div
                            key={idx}
                            onClick={() => handleToggleIngredient(activeRecipe.id, idx)}
                            className={`flex items-start gap-3 p-2 border rounded-sm cursor-pointer transition-all duration-200 select-none ${
                              isChecked
                                ? 'bg-primary/5 border-primary/20 text-accent/40 line-through'
                                : ing.isSpice
                                ? 'bg-secondary/10 border-secondary/30 text-primary hover:bg-secondary/15'
                                : 'bg-transparent border-secondary/10 text-dark hover:bg-primary/5'
                            }`}
                          >
                            <div className={`mt-0.5 w-4 h-4 border rounded-sm flex items-center justify-center transition-all ${
                              isChecked
                                ? 'bg-primary border-primary text-base'
                                : ing.isSpice
                                ? 'border-secondary bg-transparent text-secondary'
                                : 'border-secondary/30 bg-transparent'
                            }`}>
                              {isChecked && <Check size={10} strokeWidth={3} />}
                            </div>
                            <span className={`text-xs font-light ${ing.isSpice && !isChecked ? 'font-semibold text-primary' : ''}`}>
                              {ing.name}
                              {ing.isSpice && !isChecked && (
                                <span className="ml-2 inline-block text-[9px] bg-secondary text-primary font-bold px-1 py-0.5 rounded-sm uppercase tracking-wider scale-90">
                                  Secret
                                </span>
                              )}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Preparation steps */}
                  <div>
                    <h4 className="text-sm font-semibold tracking-widest uppercase text-primary border-b border-secondary/10 pb-2 mb-4">
                      Method of Preparation
                    </h4>
                    <div className="space-y-4">
                      {activeRecipe.steps.map((step, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                          <span className="font-serif text-lg text-secondary font-bold w-6 text-right flex-shrink-0">
                            {idx + 1}.
                          </span>
                          <p className="text-xs font-light text-accent/80 leading-relaxed pt-0.5">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-secondary/10 flex justify-between items-center text-[10px] text-accent/50 font-light">
                  <span>Zauq-e-Noor Royal Recipe Collection</span>
                  <span>Authentic Dum Method</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RecipeHub;
