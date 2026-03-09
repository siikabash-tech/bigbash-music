import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Info } from 'lucide-react';
import { useState } from 'react';

export default function Submissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    genre: '',
    link: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your submission! We will review your demo and get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-black pt-12 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Submit Your <span className="text-[#D4AF37]">Music</span>
          </h1>
          <p className="text-white/60 text-lg mt-4">
            Send us your demo and become part of the BigBash Music family.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Artist/Band Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your artist or band name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="genre" className="block text-sm font-medium mb-2">
                Genre
              </label>
              <input
                type="text"
                id="genre"
                value={formData.genre}
                onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                placeholder="e.g., Afrobeat, Hip-Hop, R&B"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="link" className="block text-sm font-medium mb-2">
                Music Link
              </label>
              <input
                type="url"
                id="link"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="SoundCloud, Spotify, or YouTube link"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about yourself and your music..."
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F4D03F] text-black px-8 py-4 rounded-lg font-semibold transition-all hover:transform hover:-translate-y-1"
            >
              <Send size={18} />
              Submit Demo
            </button>
          </form>

          {/* Info Box */}
          <div className="mt-8 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Info className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-semibold mb-2">What happens next?</h3>
                <p className="text-white/60 text-sm">
                  Our A&R team reviews every submission. If we think you're a good fit for BigBash Music, 
                  we'll reach out within 2-4 weeks. Please include your best work and a brief bio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
