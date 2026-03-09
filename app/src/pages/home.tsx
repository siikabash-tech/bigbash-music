import { Play, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for hero
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          ref={heroRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37]/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-4 animate-fade-in-up">
            BigBash <span className="text-[#D4AF37]">Music</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[#D4AF37] font-medium mb-6 animate-fade-in-up animation-delay-200">
            Where Legends Rise
          </p>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto animate-fade-in-up animation-delay-400">
            Independent Afrobeat record label introducing SunGodez.
          </p>
          <Link
            to="/releases"
            className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#F4D03F] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-fade-in-up animation-delay-600"
          >
            <Play size={20} fill="currentColor" />
            Listen Now
          </Link>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/50" size={32} />
        </div>
      </section>

      {/* Sound Section */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm tracking-widest uppercase animate-fade-in">Our Musical Heritage</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 animate-fade-in-up">
              The Sound of BigBash Music
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              BigBash Music celebrates the powerful fusion of African musical heritage and modern global production. 
              Our sound blends traditional instruments with contemporary Afrobeat rhythm to create music that travels 
              across cultures and generations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'Talking Drum', desc: 'Rhythm of African storytelling' },
              { name: 'Kora', desc: 'Strings of tradition and melody' },
              { name: 'Shekere', desc: 'Percussion that moves the soul' },
              { name: 'Balafon', desc: 'Ancient wooden xylophone' },
            ].map((instrument, index) => (
              <div 
                key={instrument.name} 
                className="group animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#1a1a1a] to-black border border-white/10 transition-all duration-500 group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] group-hover:transform group-hover:-translate-y-2">
                  <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-24 h-24 rounded-full bg-[#D4AF37]/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-[#D4AF37] text-3xl font-bold">{instrument.name[0]}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg group-hover:text-[#D4AF37] transition-colors">{instrument.name}</h3>
                    <p className="text-[#D4AF37] text-sm">{instrument.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artist Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black to-[#0a0500] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#D4AF37] text-sm tracking-widest uppercase animate-fade-in">Featured Artist</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 animate-fade-in-up">
                Sun<span className="text-[#D4AF37]">Godez</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6 animate-fade-in-up animation-delay-200">
                SunGodez is a rising Afrobeat artist signed to BigBash Music. Known for powerful vocals 
                and inspiring storytelling, her music blends Afrobeat rhythms with soulful melodies and 
                African cultural influences.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8 animate-fade-in-up animation-delay-300">
                Her debut album "Reborn" showcases her unique sound that fuses traditional African elements 
                with contemporary production.
              </p>
              <Link
                to="/artist"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4D03F] font-semibold transition-all hover:gap-4 animate-fade-in-up animation-delay-400"
              >
                Learn More About SunGodez
                <span className="text-xl">→</span>
              </Link>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-up animation-delay-200">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group">
                <img 
                  src="/images/artist-sungodez.jpg" 
                  alt="SunGodez"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to <span className="text-[#D4AF37]">Experience</span> the Sound?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Stream SunGodez's latest album "Reborn" on all major platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400">
            {['Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music'].map((platform, index) => (
              <button
                key={platform}
                className="px-6 py-3 bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/50 rounded-lg text-white/80 hover:text-[#D4AF37] transition-all hover:transform hover:-translate-y-1"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-2xl font-bold text-[#D4AF37]">BigBash</span>
              <p className="text-white/50 text-sm mt-2">Where Legends Rise. Discovering and developing the next generation of Afrobeat superstars.</p>
            </div>
            <div className="flex gap-6">
              {['Home', 'Artist', 'Releases', 'Media', 'Submissions', 'Partners'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="text-white/50 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
            © 2026 BigBash Music. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
