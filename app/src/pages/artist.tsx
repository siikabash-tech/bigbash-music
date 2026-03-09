import { Link } from 'react-router-dom';
import { ArrowLeft, Music, Award, Globe } from 'lucide-react';

export default function Artist() {
  return (
    <div className="min-h-screen bg-black pt-12 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-up">
            Sun<span className="text-[#D4AF37]">Godez</span>
          </h1>
        </div>

        {/* Artist Content */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Image */}
          <div className="lg:col-span-2 animate-fade-in-up animation-delay-200">
            <div className="relative aspect-[3/4] rounded-xl border border-white/10 overflow-hidden group">
              <img 
                src="/images/artist-sungodez.jpg" 
                alt="SunGodez"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-3 space-y-8 animate-fade-in-up animation-delay-300">
            <div>
              <h2 className="text-3xl font-bold mb-2">SunGodez</h2>
              <p className="text-[#D4AF37] text-lg">BigBash Music Recording Artist</p>
            </div>

            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                SunGodez is a rising Afrobeat artist signed to BigBash Music. Known for powerful vocals 
                and inspiring storytelling, her music blends Afrobeat rhythms with soulful melodies and 
                African cultural influences.
              </p>
              <p>
                Her debut album "Reborn" showcases her unique sound that fuses traditional African elements 
                with contemporary production. Working closely with executive producer Suleman Mohammed, 
                SunGodez has crafted a sound that speaks to audiences across continents.
              </p>
              <p>
                With tracks like "My Boat (No Sinking)" and "Signed By Destiny," SunGodez demonstrates 
                her ability to blend infectious rhythms with meaningful lyrics that inspire and uplift listeners.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/10">
              <div className="text-center group">
                <Music className="mx-auto mb-2 text-[#D4AF37] group-hover:scale-110 transition-transform" size={24} />
                <p className="text-2xl font-bold">1</p>
                <p className="text-white/50 text-sm">Album</p>
              </div>
              <div className="text-center group">
                <Award className="mx-auto mb-2 text-[#D4AF37] group-hover:scale-110 transition-transform" size={24} />
                <p className="text-2xl font-bold">10+</p>
                <p className="text-white/50 text-sm">Tracks</p>
              </div>
              <div className="text-center group">
                <Globe className="mx-auto mb-2 text-[#D4AF37] group-hover:scale-110 transition-transform" size={24} />
                <p className="text-2xl font-bold">Global</p>
                <p className="text-white/50 text-sm">Reach</p>
              </div>
            </div>

            <Link
              to="/releases"
              className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#F4D03F] text-black px-8 py-4 rounded-lg font-semibold transition-all hover:transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              Listen to SunGodez
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
