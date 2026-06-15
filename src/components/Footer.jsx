import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);


const Footer = () => {
  return (
    <footer className="bg-dark text-base py-16 md:py-24 border-t-4 border-secondary" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-center md:items-start">
        
        {/* Brand Column */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-serif text-3xl text-secondary uppercase tracking-widest mb-2">Zauq-e-Noor</h3>
          <p className="text-xs tracking-[0.3em] text-base/60 uppercase mb-6">Masala</p>
          <p className="font-light text-base/70 max-w-xs text-sm leading-relaxed">
            Preserving the royal heritage of spices for the modern connoisseur.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-sm font-semibold tracking-widest uppercase text-secondary mb-2">Contact Us</h4>
          <a href="mailto:concierge@zauqenoor.com" className="flex items-center gap-3 text-base/80 hover:text-secondary transition-colors duration-300 font-light text-sm">
            <Mail size={18} />
            concierge@zauqenoor.com
          </a>
          <p className="flex items-center gap-3 text-base/80 font-light text-sm">
            <MapPin size={18} />
            Empress Market, Karachi, Pakistan
          </p>
        </div>

        {/* Social & Legal */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h4 className="text-sm font-semibold tracking-widest uppercase text-secondary mb-2">Follow the Journey</h4>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base/80 hover:text-secondary transition-colors duration-300 font-light text-sm">
            <Instagram size={18} />
            @zauqenoor
          </a>
          <div className="mt-8 pt-8 border-t border-base/10 w-full md:text-right">
            <p className="text-xs text-base/40">
              &copy; {new Date().getFullYear()} Zauq-e-Noor Masala. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
