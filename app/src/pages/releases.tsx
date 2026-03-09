import { Link } from 'react-router-dom';
import { ArrowLeft, Play, ExternalLink } from 'lucide-react';

export default function Releases() {
  const releases = [
    {
      title: 'REBORN',
      artist: 'SunGodez',
      year: '2026',
      type: 'Album',
      description: 'The debut album from SunGodez featuring powerful Afrobeat rhythms and inspiring storytelling.',
      tracks: ['My Boat (No Sinking)', 'Signed By Destiny', 'Reborn', 'African Queen', 'Rise Up'],
      image: '/images/album-reborn.jpg',
    },
  ];

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
            Our <span className="text-[#D4AF37]">Releases</span>
          </h1>
        </div>

        {/* Releases Grid */}
        <div className="space-y-12">
          {releases.map((release, index) => (
            <div
              key={release.title}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 animate-fade-in-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Album Cover */}
              <div className="aspect-square rounded-xl overflow-hidden group relative">
                <img 
                  src={release.image} 
                  alt={release.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 hover:bg-[#F4D03F]">
                    <Play size={28} fill="black" className="text-black ml-1" />
                  </button>
                </div>
              </div>

              {/* Album Info */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold rounded-full">
                    {release.type}
                  </span>
                  <span className="text-white/50 text-sm">{release.year}</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">{release.title}</h2>
                <p className="text-[#D4AF37] text-lg mb-4">{release.artist}</p>
                <p className="text-white/60 mb-6">{release.description}</p>

                {/* Track List */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">
                    Featured Tracks
                  </h4>
                  <ul className="space-y-2">
                    {release.tracks.map((track, trackIndex) => (
                      <li 
                        key={track} 
                        className="flex items-center gap-3 text-white/80 group cursor-pointer hover:text-[#D4AF37] transition-colors"
                      >
                        <span className="text-white/30 text-sm w-6">{trackIndex + 1}</span>
                        <Play size={14} className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="group-hover:translate-x-1 transition-transform">{track}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stream Links */}
                <div>
                  <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">
                    Stream Now
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {['Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music'].map((platform) => (
                      <button
                        key={platform}
                        className="px-4 py-2 bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/50 rounded-lg text-sm text-white/80 hover:text-[#D4AF37] transition-all hover:transform hover:-translate-y-1 flex items-center gap-2"
                      >
                        {platform}
                        <ExternalLink size={12} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
