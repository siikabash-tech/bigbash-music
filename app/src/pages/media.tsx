import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, User, Building2, Disc } from 'lucide-react';

export default function Media() {
  const documents = [
    {
      category: 'Artist Press Materials',
      icon: User,
      items: [
        {
          title: 'SunGodez Press Kit',
          description: 'Complete artist biography, photos, and career highlights.',
          file: 'sungodez-press-kit.pdf',
        },
        {
          title: 'SunGodez Artist One Sheet',
          description: 'Quick-reference promotional sheet with key artist info.',
          file: 'sungodez-artist-one-sheet.pdf',
        },
        {
          title: 'SunGodez Reborn Press Release',
          description: 'Official press release for the REBORN album launch.',
          file: 'sungodez-reborn-press-release.pdf',
        },
      ],
    },
    {
      category: 'Label Documents',
      icon: Building2,
      items: [
        {
          title: 'BigBash Music Label Profile',
          description: 'Company overview, mission, and key information about the label.',
          file: 'bigbash-music-label-profile.pdf',
        },
        {
          title: 'BigBash Music Investor Pitch Deck',
          description: 'Investment opportunity presentation for potential partners.',
          file: 'bigbash-music-investor-pitch-deck.pdf',
        },
      ],
    },
    {
      category: 'Album & Streaming Documents',
      icon: Disc,
      items: [
        {
          title: 'REBORN Album Presentation',
          description: 'Comprehensive album overview with track details and credits.',
          file: 'reborn-album-presentation.pdf',
        },
        {
          title: 'REBORN Streaming Pitch',
          description: 'Playlist pitch deck for streaming platform curators.',
          file: 'reborn-streaming-pitch.pdf',
        },
      ],
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
          <span className="text-[#D4AF37] text-sm tracking-widest uppercase">Press & Media Resources</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Media & Press <span className="text-[#D4AF37]">Downloads</span>
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            Download official press, media, and industry documents for SunGodez and BigBash Music.
          </p>
        </div>

        {/* Document Categories */}
        <div className="space-y-16">
          {documents.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-3 mb-6">
                <section.icon className="text-[#D4AF37]" size={28} />
                <h2 className="text-2xl font-bold">{section.category}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                          <FileText className="text-[#D4AF37]" size={20} />
                        </div>
                        <span className="px-2 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold rounded">
                          PDF
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{item.description}</p>

                    <a
                      href={`/media/${item.file}`}
                      className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4D03F] font-medium transition-colors"
                    >
                      <Download size={16} />
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Materials CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Custom Materials?</h2>
          <p className="text-white/60 mb-6 max-w-xl mx-auto">
            Contact us for high-resolution images, interview requests, or custom promotional materials.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:admin@bigbash-music.com"
              className="text-[#D4AF37] hover:text-[#F4D03F] font-semibold"
            >
              admin@bigbash-music.com
            </a>
            <span className="hidden sm:block text-white/30">|</span>
            <a
              href="tel:+448002740074"
              className="text-[#D4AF37] hover:text-[#F4D03F] font-semibold"
            >
              +44 800 274 0074
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
