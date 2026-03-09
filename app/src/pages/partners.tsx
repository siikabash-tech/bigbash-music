import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Box, Calendar, Mic } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: 'Streaming Partners',
      description: 'Distributed across all major streaming platforms worldwide.',
      icon: Play,
    },
    {
      name: 'Distribution',
      description: 'Global music distribution network reaching millions of listeners.',
      icon: Box,
    },
    {
      name: 'Event Partners',
      description: 'Connecting artists with live performance opportunities.',
      icon: Calendar,
    },
    {
      name: 'Studio Partners',
      description: 'Professional recording studios for our artists.',
      icon: Mic,
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-12 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Our <span className="text-[#D4AF37]">Partners</span>
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            Collaborating with industry leaders to bring Afrobeat to the world.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#D4AF37]/50 transition-all hover:transform hover:-translate-y-1"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <partner.icon className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
              <p className="text-white/60 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Interested in partnering with BigBash Music? Let's work together to promote Afrobeat globally.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F4D03F] text-black px-8 py-4 rounded-lg font-semibold transition-all hover:transform hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
