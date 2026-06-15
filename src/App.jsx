import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProductsGrid from './components/ProductsGrid';
import OurStory from './components/OurStory';
import RecipeHub from './components/RecipeHub';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen relative font-sans text-dark bg-base overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <ProductsGrid />
          <OurStory />
          <RecipeHub />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
