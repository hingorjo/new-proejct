import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
  } = useCart();

  const handleWhatsAppCheckout = () => {
    const total = getCartTotal().toFixed(2);
    let message = `Hello Zauq-e-Noor Concierge,\n\nI would like to place an artisanal order for:\n`;
    
    cartItems.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} (${item.price} each)\n`;
    });

    message += `\n*Total Order Value:* $${total}\n\nPlease verify availability and confirm shipping details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
          />

          {/* Drawer Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[450px] bg-base shadow-2xl border-l border-secondary/20 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-secondary/15 flex justify-between items-center bg-primary text-white">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-secondary" size={24} />
                <span className="font-serif text-xl uppercase tracking-widest">Your Collection</span>
              </div>
              <button
                onClick={toggleCart}
                className="text-white hover:text-secondary transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag size={48} className="text-secondary/40" />
                  <p className="font-serif text-lg text-primary">Your cart is empty</p>
                  <p className="text-sm text-accent/70 font-light max-w-xs">
                    Explore our Royal Reserve and select premium blends to add here.
                  </p>
                  <button
                    onClick={toggleCart}
                    className="px-6 py-2 border border-secondary text-primary hover:bg-secondary hover:text-primary transition-all duration-300 text-xs font-semibold tracking-wider uppercase rounded-sm"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center bg-white border border-secondary/10 p-3 rounded-sm shadow-sm">
                    {/* Item Image */}
                    <div className="h-20 w-16 bg-primary/5 border border-secondary/10 rounded-sm p-1 flex items-center justify-center flex-shrink-0">
                      <img src={item.img} alt={item.name} className="h-full w-full object-contain" />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-primary text-sm font-semibold truncate mb-1">
                        {item.name}
                      </h4>
                      <p className="text-secondary text-xs font-semibold mb-2">
                        {item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center border border-secondary/20 rounded-sm max-w-[90px] justify-between">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 hover:bg-secondary/10 text-primary transition-colors duration-300"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs text-primary font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 hover:bg-secondary/10 text-primary transition-colors duration-300"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Delete Item Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-accent/60 hover:text-red-600 transition-colors duration-300 p-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary / Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-secondary/15 bg-white space-y-4 shadow-[0_-8px_24px_rgba(0,0,0,0.03)]">
                <div className="flex justify-between items-center text-primary font-semibold">
                  <span className="font-serif uppercase tracking-widest text-sm">Subtotal</span>
                  <span className="text-lg">${getCartTotal().toFixed(2)}</span>
                </div>
                <p className="text-xs text-accent/70 font-light leading-relaxed">
                  Shipping, delivery details, and royal packaging options will be verified directly by our concierge team on WhatsApp.
                </p>

                <div className="grid grid-cols-5 gap-3 pt-2">
                  <button
                    onClick={clearCart}
                    className="col-span-1 border border-secondary/20 hover:bg-red-50 hover:border-red-200 text-accent/70 hover:text-red-600 transition-colors duration-300 flex items-center justify-center rounded-sm"
                    title="Clear Cart"
                  >
                    <Trash2 size={18} />
                  </button>
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="col-span-4 py-4 bg-secondary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold uppercase tracking-widest text-xs rounded-sm shadow-md text-center"
                  >
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
