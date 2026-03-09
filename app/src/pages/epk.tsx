import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Image, Music } from 'lucide-react';

export default function EPK() {
  const pressPhotos = [
    '/images/artist-portrait-1.jpg',
    '/images/artist-portrait-2.jpg',
    '/images/artist-portrait-3.jpg',
  ];

  return (
    <div className="min-h-screen bg-black pt-12 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors mb-12 animate-fade-in"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-sm tracking-widest uppercase animate-fade-in">Electronic Press Kit</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 animate-fade-in-up">
            Sun<span className="text-[#D4AF37]">Godez</span>
          </h1>
          <p className="text-white/60 text-lg mt-4 animate-fade-in-up animation-delay-200">BigBash Music Recording Artist</p>
        </div>

        {/* Download Section */}
        <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl p-8 mb-12 text-center animate-fade-in-up animation-delay-300">
          <h2 className="text-2xl font-bold mb-4">Download SunGodez Press Kit</h2>
          <p className="text-white/60 mb-6">
            Get the complete press kit including high-res photos, full bio, and press materials.
          </p>
          <a
            href="/media/sungodez-press-kit.pdf"
            className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#F4D03F] text-black px-8 py-4 rounded-lg font-semibold transition-all hover:transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            <Download size={20} />
            Download Press Kit
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/30 transition-all animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#D4AF37]" size={24} />
              <h3 className="text-xl font-bold">Short Bio</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              SunGodez is a rising Afrobeat artist signed to BigBash Music. Known for powerful vocals 
              and inspiring storytelling, her music blends Afrobeat rhythms with soulful melodies and 
              African cultural influences. Her debut album "Reborn" showcases her unique sound.
            </p>
          </div>

          {/* Photos */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/30 transition-all animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-3 mb-4">
              <Image className="text-[#D4AF37]" size={24} />
              <h3 className="text-xl font-bold">Press Photos</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {pressPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
                >
                  <img 
                    src={photo} 
                    alt={`Press photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Full Bio */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/30 transition-all animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-3 mb-4">
              <Music className="text-[#D4AF37]" size={24} />
              <h3 className="text-xl font-bold">Full Bio</h3>
            </div>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                SunGodez represents the new generation of African artists making waves on the global stage. 
                Signed to UK-based independent label BigBash Music, she brings a fresh perspective to the 
                Afrobeat genre while honoring its rich cultural roots.
              </p>
              <p>
                Her debut album "Reborn" is a powerful collection of songs that celebrate resilience, faith, 
                and the journey of self-discovery. Working closely with executive producer Suleman Mohammed, 
                SunGodez has crafted a sound that speaks to audiences across continents.
              </p>
              <p>
                With tracks like "My Boat (No Sinking)" and "Signed By Destiny," SunGodez demonstrates her 
                ability to blend infectious rhythms with meaningful lyrics that inspire and uplift listeners.
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Bookings */}
        <div className="mt-12 text-center animate-fade-in-up animation-delay-700">
          <p className="text-white/60 mb-4">For booking and media inquiries:</p>
          <a
            href="mailto:admin@bigbash-music.com"
            className="text-[#D4AF37] hover:text-[#F4D03F] font-semibold transition-colors"
          >
            admin@bigbash-music.com
          </a>
        </div>
      </div>
    </div>
  );
}
