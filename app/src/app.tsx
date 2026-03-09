import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Releases from './pages/Releases';
import EPK from './pages/EPK';
import Media from './pages/Media';
import Submissions from './pages/Submissions';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/artist', label: 'Artist' },
    { path: '/releases', label: 'Releases' },
    { path: '/epk', label: 'EPK' },
    { path: '/media', label: 'Media' },
    { path: '/submissions', label: 'Submissions' },
    { path: '/partners', label: 'Partners' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-[#D4AF37] tracking-tight">
            BigBash
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37]'
                    : 'text-white/80 hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <a
              href="tel:+448002740074"
              className="hidden md:flex items-center gap-2 text-[#D4AF37] hover:text-[#F4D03F] transition-colors text-sm"
            >
              <Phone size={16} />
              <span>+44 800 274 0074</span>
            </a>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white hover:text-[#D4AF37] transition-colors p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-white/10">
          <nav className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37]'
                    : 'text-white/80 hover:text-[#D4AF37]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/releases" element={<Releases />} />
            <Route path="/epk" element={<EPK />} />
            <Route path="/media" element={<Media />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
