import { Home as HomeIcon, ArrowRight, Menu, X } from '../assets/icons/react-icons';
import logo from '../assets/img/logo/blueshift.png';
import { useState, useEffect } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // 💡 NEW STATE: Tracks if the user has scrolled past a threshold
  const [isScrolled, setIsScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Logic for shadow (isScrolled)
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Existing logic for hiding/showing header (isVisible)
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down and past threshold
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // Dependencies remain [lastScrollY]

  return (
    <header 
      // 💡 CONDITIONAL CLASS: Apply shadow and change background based on isScrolled
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' // Scrolled: Opaque white, with shadow
          : 'bg-white/95 backdrop-blur-sm' // Not Scrolled: Blurred background, no shadow
      } ${
        // Existing hide/show logic
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a className="flex items-center" href="https://blueshift.ph">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-6"
          />
        </a>

          {/* Desktop Navigation */}
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

          {/* Desktop Contact Button */}
        <a 
          href="https://blueshift.ph/public/contact"
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex bg-gray-900 text-white px-6 py-3 rounded-full items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          Contact Us
          <ArrowRight className="w-4 h-4" />
        </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-900 hover:text-gray-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
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