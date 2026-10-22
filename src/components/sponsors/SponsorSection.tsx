import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { Sparkles, ArrowUpRight, Mail, Shield, CheckCircle2 } from 'lucide-react';
import { mainSponsors, partnerSponsors } from '../../data/sponsors';

const SPONSOR_EMAIL = 'team@fallingsun.in';
const mailtoLink = `mailto:${SPONSOR_EMAIL}?subject=Sponsorship%20Proposal%20-%20Falling%20Sun%202026&body=Hi%20Falling%20Sun%20Team%2C%0A%0AI%20am%20interested%20in%20sponsoring%20Falling%20Sun%202026.%20Please%20share%20details%20about%20partnership%20opportunities.%0A%0AOrganization%3A%0AContact%20Person%3A`;

export const SponsorSection: React.FC = () => {
  return (
    <section id="sponsors-section" className="relative py-28 md:py-36 px-6 md:px-12 bg-bg select-none overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Header */}
        <SectionHeader
          number="04"
          category="PARTNERS & ECOSYSTEM"
          title="BACKED BY VISIONARY FORCES."
          subtitle="Engineering studios, hardware innovators, developer tools, and community networks empowering Falling Sun 2026."
        />

        {/* SECTION 1: MAIN FINANCIAL SPONSORS */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 bg-yellow border-2 border-ink text-ink font-mono text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-[2px_2px_0_#1d1210]">
                <Sparkles className="w-4 h-4 text-reddark" />
                <span>MAIN SPONSORS</span>
              </span>
              <div className="hidden sm:block h-px w-12 bg-cream/30 border-t-2 border-dashed" />
              <span className="font-mono text-xs text-cream/70 uppercase tracking-widest font-bold">
                HEADLINE &amp; FINANCIAL BACKERS
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream/10 border border-cream/30 text-cream font-mono text-xs tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-green" />
              <span>CONFIRMED CASH POOL &amp; HARDWARE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainSponsors.map((sponsor, idx) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className={`p-8 bg-cream border-2 border-ink shadow-card hover:shadow-[10px_10px_0_#1d1210] transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  sponsor.id === 'aarksh-systems' ? 'ring-4 ring-yellow/50' : ''
                }`}
              >
                <div className="space-y-6">
                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="px-2.5 py-1 bg-yellow border-2 border-ink font-mono text-[11px] font-black tracking-widest text-ink uppercase">
                      {sponsor.tier}
                    </span>
                    {sponsor.amount && (
                      <span className="px-3 py-1 bg-reddark border-2 border-ink font-mono text-xs font-black tracking-wider text-cream shadow-[2px_2px_0_#1d1210]">
                        {sponsor.amount}
                      </span>
                    )}
                  </div>

                  {/* Logo Container */}
                  <div className={`w-full h-32 ${sponsor.logoBg} border-2 border-ink flex items-center justify-center p-4 relative overflow-hidden group`}>
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-20 max-w-[85%] object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="font-mono text-[10px] text-reddark uppercase tracking-widest font-black">
                      {sponsor.category}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-ink tracking-tight">
                      {sponsor.name}
                    </h3>
                    <p className="text-ink-muted text-xs sm:text-sm font-sans leading-relaxed font-medium pt-1">
                      {sponsor.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-ink/15 flex items-center justify-between font-mono text-[11px]">
                  <span className="font-bold text-ink">OFFICIAL BACKER</span>
                  <span className="text-reddark font-black uppercase">CONFIRMED</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: OFFICIAL PARTNERS & ECOSYSTEM (THE OTHERS) */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 bg-cream border-2 border-ink text-ink font-mono text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-[2px_2px_0_#1d1210]">
              <Shield className="w-4 h-4 text-brown" />
              <span>ECOSYSTEM &amp; PLATFORM PARTNERS</span>
            </span>
            <div className="flex-1 h-px bg-cream/20 border-t-2 border-dashed" />
            <span className="hidden sm:inline-block font-mono text-xs text-cream/70 uppercase tracking-widest font-bold">
              TOOLS, CREDENTIALS &amp; DOMAINS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnerSponsors.map((partner, idx) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="p-5 bg-cream border-2 border-ink shadow-card hover:shadow-[6px_6px_0_#1d1210] transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[9px] text-ink-muted uppercase tracking-widest font-black">
                      {partner.category}
                    </span>
                    <span className="w-2 h-2 bg-green rounded-full shrink-0" />
                  </div>

                  {/* Logo Box */}
                  <div className={`w-full h-24 ${partner.logoBg} border-2 border-ink flex items-center justify-center p-3 relative overflow-hidden group`}>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-14 max-w-[80%] object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Name and Tagline */}
                  <div className="space-y-1">
                    <h4 className="font-display text-lg font-black text-ink tracking-tight leading-tight">
                      {partner.name}
                    </h4>
                    <p className="text-ink-muted text-xs font-sans leading-snug font-medium pt-1">
                      {partner.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-ink/15 font-mono text-[10px] text-ink-muted flex items-center justify-between">
                  <span>PARTNER</span>
                  <span className="font-bold text-ink uppercase">ACTIVE</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BECOME A SPONSOR CTA BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="group relative bg-ink text-cream border-2 border-ink p-8 sm:p-12 md:p-14 overflow-hidden shadow-[6px_6px_0_#e8232b]"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-reddark border border-cream/30 font-mono text-[10px] uppercase tracking-widest font-black text-cream">
                <Sparkles className="w-3 h-3" />
                <span>JOIN OUR PARTNER ROSTER</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-cream tracking-tight">
                WANT TO PARTNER WITH FALLING SUN?
              </h3>
              <p className="text-cream/80 text-sm sm:text-base font-sans font-medium max-w-2xl leading-relaxed">
                Empower 500+ builders, creators, and engineers across Game Dev, Web, and Hardware tracks. Connect with our organizing team for custom bounties, recruitment booths, and stage slots.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
              <a
                href={mailtoLink}
                className="w-full sm:w-auto px-8 py-3.5 bg-yellow border-2 border-ink text-ink font-sans text-sm font-black uppercase tracking-wider shadow-[4px_4px_0_#1d1210] hover:bg-cream hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1d1210] transition-all flex items-center justify-center gap-2 group/btn"
              >
                <Mail className="w-4 h-4" />
                <span>BECOME A SPONSOR</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
              <span className="font-mono text-xs text-cream/60">
                Direct inquiry: {SPONSOR_EMAIL}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorSection;
