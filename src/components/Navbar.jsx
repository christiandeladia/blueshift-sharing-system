import { Home as HomeIcon, ArrowRight, Menu, X } from '../assets/icons/react-icons';
import logo from '../assets/img/logo/blueshift.png';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <a className="flex items-center" href="https://blueshift.ph">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-6"
          />
        </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
              Home
            </a>
            <a href="#specifications" className="text-gray-500 hover:text-gray-900 transition-colors">
              Specifications
            </a>
            <a href="#net-metering" className="text-gray-500 hover:text-gray-900 transition-colors">
              Net Metering
            </a>
            <a href="#monitoring" className="text-gray-500 hover:text-gray-900 transition-colors">
              Monitoring
            </a>
             <a href="#faq" className="text-gray-500 hover:text-gray-900 transition-colors">
              FAQ
            </a>
          </nav>

        <a 
          href="https://blueshift.ph/public/contact"
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex bg-gray-900 text-white px-6 py-3 rounded-full items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          Contact Us
          <ArrowRight className="w-4 h-4" />
        </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-900 hover:text-gray-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-200 pt-4">
            <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
              Home
            </a>
            <a href="#specifications" className="text-gray-500 hover:text-gray-900 transition-colors">
              Specifications
            </a>
            <a href="#net-metering" className="text-gray-500 hover:text-gray-900 transition-colors">
              Net Metering
            </a>
            <a href="#monitoring" className="text-gray-500 hover:text-gray-900 transition-colors">
              Monitoring
            </a>
            <a href="#faq" className="text-gray-500 hover:text-gray-900 transition-colors">
              FAQ
            </a>
             <a 
                href="https://blueshift.ph/public/contact"
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:flex bg-gray-900 text-white px-6 py-3 rounded-full items-center gap-2 hover:bg-gray-800 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>

          </nav>
        )}
      </div>
    </header>
  );
}