import React from 'react';
import { motion } from 'framer-motion';
import { eventConfig } from '../../config/eventConfig';
import { Trophy, Award, Sparkles, Cpu, Gift, Briefcase, Zap, Globe, Gamepad2, Shield, Wrench, CheckCircle } from 'lucide-react';
import { WhatsAppCTA } from '../common/WhatsAppCTA';
import { StampCard } from '../StampCard';
import { confirmedPerks } from '../../data/perks';

const getPerkIcon = (id: string) => {
  switch (id) {
    case 'drone-kits':
      return <Cpu className="w-5 h-5 text-reddark" />;
    case 'high-end-electronics':
      return <Cpu className="w-5 h-5 text-reddark" />;
    case 'sso-jet-subscriptions':
      return <Shield className="w-5 h-5 text-yellow" />;
    case 'basic-electronics':
      return <Wrench className="w-5 h-5 text-brown" />;
    case 'claude-subscriptions':
      return <Sparkles className="w-5 h-5 text-brown" />;
    case 'gaming-assets':
      return <Gamepad2 className="w-5 h-5 text-yellow" />;
    case 'chatgpt-go-gift-cards':
      return <Gift className="w-5 h-5 text-green" />;
    case 'paid-internships':
      return <Briefcase className="w-5 h-5 text-yellow" />;
    case 'n8n-platform':
      return <Zap className="w-5 h-5 text-reddark" />;
    case 'gen-xyz-domains':
      return <Globe className="w-5 h-5 text-ink" />;
    default:
      return <Award className="w-5 h-5 text-ink" />;
  }
};

export const PrizeGrid: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Editorial Announcement Banner */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cream text-reddark border-2 border-ink font-mono text-xs uppercase tracking-widest font-bold -rotate-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CONFIRMED PRIZE POOL &amp; PARTNER BOUNTIES</span>
        </div>

        <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-cream">
          BUILD. SHIP.{' '}
          <span className="bg-cream text-bg px-2 inline-block -rotate-1">WIN.</span>
        </h3>

        <p className="text-cream text-base md:text-lg leading-relaxed font-bold">
          Drones, high-end microcontrollers, subscriptions, and bounties backed by our sponsors. Full hardware kits, cloud perks, and official trophies awarded across Game Dev, Web Development, and Hardware tracks.
        </p>

        {/* Awards Overview */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest font-bold">
          <span className="px-3 py-1.5 bg-yellow border-2 border-ink text-ink">Hardware Kits // Drones &amp; Pis</span>
          <span className="px-3 py-1.5 bg-cream border-2 border-ink text-ink">Subscriptions // Claude, SSO &amp; n8n</span>
          <span className="px-3 py-1.5 bg-bg border-2 border-cream text-cream">Perks // ChatGPT Go &amp; Domains</span>
        </div>

        <WhatsAppCTA compact className="mx-auto" />
      </div>

      {/* SECTION 1: CONFIRMED HARDWARE, SUBSCRIPTIONS & PERKS */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 bg-yellow border-2 border-ink text-ink font-mono text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-[2px_2px_0_#1d1210]">
              <Sparkles className="w-4 h-4 text-reddark" />
              <span>CONFIRMED HARDWARE &amp; PERKS POOL</span>
            </span>
            <div className="hidden sm:block h-px w-12 bg-cream/30 border-t-2 border-dashed" />
            <span className="font-mono text-xs text-cream/70 uppercase tracking-widest font-bold">
              SPONSOR-BACKED REWARDS
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream/10 border border-cream/30 text-cream font-mono text-xs tracking-wider">
            <CheckCircle className="w-3.5 h-3.5 text-green" />
            <span>10 CONFIRMED REWARD CATEGORIES</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {confirmedPerks.map((perk, idx) => (
            <motion.div
              key={perk.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="p-6 bg-cream border-2 border-ink shadow-card hover:shadow-[8px_8px_0_#1d1210] transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Header Pills */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-10 h-10 bg-black/5 border-2 border-ink/30 flex items-center justify-center shrink-0">
                    {getPerkIcon(perk.id)}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`px-2.5 py-0.5 border-2 font-mono text-[10px] font-black uppercase tracking-wider ${perk.badgeColor}`}>
                      {perk.quantityOrValue}
                    </span>
                    <span className="font-mono text-[9px] text-ink-muted uppercase tracking-widest font-bold">
                      {perk.audience}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <div className="font-mono text-[10px] text-reddark uppercase tracking-widest font-black">
                    {perk.category} {perk.sponsor ? `// ${perk.sponsor}` : ''}
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-black text-ink tracking-tight">
                    {perk.title}
                  </h4>
                  <p className="text-ink-muted text-xs sm:text-sm font-sans leading-relaxed font-medium pt-1">
                    {perk.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t-2 border-ink/15 flex items-center justify-between font-mono text-[10px] text-ink-muted">
                <span className="font-bold text-ink">STATUS</span>
                <span className="text-green font-black uppercase">CONFIRMED POOL</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 2: 9 OFFICIAL CATEGORY TROPHY AWARDS */}
      <div className="space-y-8 pt-4">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1.5 bg-reddark border-2 border-ink text-cream font-mono text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-[2px_2px_0_#1d1210]">
            <Trophy className="w-4 h-4 text-yellow" />
            <span>9 CATEGORY TROPHY AWARDS</span>
          </span>
          <div className="flex-1 h-px bg-cream/20 border-t-2 border-dashed" />
          <span className="hidden sm:inline-block font-mono text-xs text-cream/70 uppercase tracking-widest font-bold">
            TRACK-SPECIFIC PODIUM REWARDS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cards" style={{ perspective: 1000 }}>
          {eventConfig.prizes.map((prize, idx) => (
            <motion.div
              key={prize.id}
              initial={{ opacity: 0, y: 40, rotateX: 12, rotateY: idx % 2 === 0 ? 6 : -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <StampCard
                title={prize.title}
                className="p-8 h-full flex flex-col justify-between transition-all duration-300 group-hover:shadow-[8px_8px_0_#1d1210]"
              >
                <div className="space-y-6 min-w-0">
                  {/* Category */}
                  <div className="flex items-center justify-between font-mono text-xs text-ink-muted">
                    <span className="font-mono text-reddark font-black tracking-widest">
                      AWARD {prize.rank}
                    </span>
                    <span className="px-2.5 py-1 bg-black/5 border-2 border-ink/30 text-ink uppercase tracking-widest text-[10px] font-bold">
                      {prize.category}
                    </span>
                  </div>

                  {/* Value / Trophy Badge */}
                  <div className="space-y-3 min-w-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow border-2 border-ink font-mono text-xs text-ink font-bold">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>OFFICIAL CITATION // {prize.status}</span>
                    </div>

                    <p className="text-ink-muted text-xs sm:text-sm leading-relaxed font-medium">
                      {prize.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-8 border-t-2 border-ink/20 flex items-center justify-between font-mono text-[11px] text-ink-muted">
                  <span className="flex items-center gap-1.5 font-semibold text-ink">
                    <Award className="w-3.5 h-3.5 text-brown group-hover:scale-110 transition-transform" />
                    <span>OFFICIAL TROPHY</span>
                  </span>
                  <span className="text-ink-muted uppercase font-bold">PODIUM DROP</span>
                </div>
              </StampCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WhatsApp Full Banner */}
      <WhatsAppCTA
        title="JOIN THE FALLING SUN ANNOUNCEMENT CHANNEL"
        subtitle="Get instant push notifications the moment additional sponsor bounties, cash prizes, and workshop schedules drop."
      />
    </div>
  );
};

export default PrizeGrid;
