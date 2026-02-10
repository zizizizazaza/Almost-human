import React, { useState } from 'react';
import { NFTType, NFTDetails } from '../types';

const OATH_DATA: NFTDetails = {
  id: 'oath-sbt',
  type: NFTType.OATH,
  name: 'Oath SBT',
  subtitle: 'Identity & Membership',
  description: 'Non-transferable identity tag for the Almost Human Order. The oath is not a rank, but a commitment permit to enter the core construction layer.',
  price: '0.05 ETH',
  total: 5000,
  minted: 1240,
  benefits: [
    'AI Compute Quota',
    'Governance Twin',
    'Agent Pre-Financing Whitelist',
    'Rank Acceleration'
  ],
  specs: [
    'Chain: Base',
    'Type: ERC-721',
    'Transferable: No',
    'Metadata: Updatable'
  ]
};

const RIGS_DATA: NFTDetails = {
  id: 'season-1-rigs',
  type: NFTType.RIGS,
  name: 'Rig NFT',
  subtitle: 'Tooling & Tradable',
  description: 'Rigs represent production means and system permissions. A rig is not an identity; it is your specialized equipment for high-tier productivity.',
  price: '0.12 ETH',
  total: 3333,
  minted: 412,
  benefits: [
    'Tradable tooling：全产线效率乘数。持有 Rig 是你在部落内部获取超额收益的必备杠杆。',
    'Flux settlement：解锁限定的 Research & Dev Workflows。这些任务通常具有更高的结算单价。',
    '模块化插槽系统：预留硬件级升级槽位，持续增强 NFT 的基础属性。',
    '结算成本动态折扣：在执行 Agent 托管任务时，获得 15% - 30% 的服务费折扣。'
  ],
  specs: [
    'Chain: Base',
    'Type: ERC-721',
    'Transferable: Yes',
    'Standard: Equipment'
  ]
};

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    {/* Decorative Background Glows */}
    <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-electric-cyan/5 blur-[150px] rounded-full"></div>
    <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-plasma-purple/5 blur-[150px] rounded-full"></div>

    <div className="max-w-7xl mx-auto px-8 relative z-10 w-full font-sans flex flex-col lg:flex-row items-center">
      {/* Text & Stats Content Area */}
      <div className="flex flex-col items-start text-left z-20 lg:w-[60%] lg:-mr-40 group">
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
          <span className="title-gradient">Almost Human</span> <br />
          <span className="text-white title-glow-pulse">Order</span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg font-light">
          Contribution is verified. Oath is pledged. Tools are equipped. Capital is anchored in the first sovereign network for the symbiotic era.
        </p>

        {/* Dynamic Stats Section based on User Image */}
        <div className="flex flex-wrap gap-10 lg:gap-16 items-start">
          <div className="flex flex-col">
            <span className="font-display text-3xl lg:text-4xl font-bold text-red-600 mb-1 leading-none">2</span>
            <span className="text-sm text-slate-500 uppercase tracking-widest font-medium">Series Collections</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-3xl lg:text-4xl font-bold text-red-600 mb-1 leading-none">∞</span>
            <span className="text-sm text-slate-500 uppercase tracking-widest font-medium">Utility & Benefits</span>
          </div>
        </div>
      </div>

      {/* Hero Asset with Radial Masking */}
      <div className="relative z-10 w-full lg:w-[120%] mt-12 lg:mt-0 opacity-80 lg:opacity-100">
        <div className="relative mask-radial">
          <img
            alt="Almost Human Hero"
            className="w-full h-auto object-cover filter contrast-[1.1] brightness-[0.8]"
            src="/hero-bg.jpg"
          />
        </div>
      </div>
    </div>
  </section>
);

const BenefitCard = ({ icon, title, description, accentColor, hexColor }: {
  icon: string,
  title: string,
  description: string,
  accentColor: string,
  hexColor: string
}) => {
  return (
    <div
      className="benefit-card group"
      style={{ '--accent-color': hexColor } as React.CSSProperties}
    >
      {/* Arcade Corners */}
      <div className="pixel-corner corner-tl"></div>
      <div className="pixel-corner corner-tr"></div>
      <div className="pixel-corner corner-bl"></div>
      <div className="pixel-corner corner-br"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className={`material-symbols-outlined ${accentColor} text-2xl smooth-transition`}>
            {icon}
          </span>
          <span className="text-sm font-bold text-white tracking-tight">{title}</span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

const MintSection = ({ type }: { type: NFTType }) => {
  const data = type === NFTType.OATH ? OATH_DATA : RIGS_DATA;
  const isOath = type === NFTType.OATH;
  const [amount, setAmount] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const [mintStatus, setMintStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleMint = () => {
    setIsMinting(true);
    setTimeout(() => {
      setIsMinting(false);
      setMintStatus('success');
    }, 2500);
  };

  const accentColor = isOath ? 'text-electric-cyan' : 'text-rig-green';
  const hexColor = isOath ? '#FF9500' : '#00F59B';
  const bgColor = isOath ? 'bg-electric-cyan' : 'bg-rig-green';
  const borderColor = isOath ? 'border-electric-cyan/30' : 'border-rig-green/30';
  const shadowClass = isOath ? 'shadow-neon-cyan' : 'shadow-neon-green';
  const sectionId = isOath ? 'oath-sbt' : 's1-rig';

  return (
    <section className={`py-32 relative ${isOath ? 'bg-background-dark' : 'bg-[#0a0014]'}`} id={sectionId}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`space-y-10 ${!isOath ? 'lg:order-2' : ''}`}>
            <div>
              <span className={`text-sm font-bold ${accentColor} uppercase tracking-widest mb-4 block`}>
                {data.subtitle}
              </span>
              <h2 className="text-5xl font-extrabold tracking-tight text-white mb-6">
                {data.name}
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                {data.description}
              </p>
            </div>

            <div className={`glass-panel p-8 rounded-3xl ${borderColor} ${shadowClass}`}>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Mint fee</span>
                  <span className="text-4xl font-bold text-white">{data.price}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Supply</span>
                  <span className="text-2xl font-bold text-white">
                    {data.minted} <span className="text-slate-500 text-lg">/ {data.total}</span>
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className={`flex justify-between text-sm font-bold ${accentColor}`}>
                  <span>{isOath ? 'Commitment progress' : 'Rig calibration'}</span>
                  <span>{Math.round((data.minted / data.total) * 100)}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${bgColor} rounded-full transition-all duration-1000`}
                    style={{ width: `${(data.minted / data.total) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                {!isOath && (
                  <div className="flex items-center glass-panel rounded-xl p-1 border border-white/10 w-full sm:w-auto justify-between">
                    <button onClick={() => setAmount(Math.max(1, amount - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-lg active:scale-95">-</button>
                    <span className="w-10 text-center font-bold">{amount}</span>
                    <button onClick={() => setAmount(Math.min(5, amount + 1))} className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-lg active:scale-95">+</button>
                  </div>
                )}
                <button
                  onClick={handleMint}
                  disabled={isMinting || mintStatus === 'success'}
                  className={`flex-1 w-full ${bgColor} ${isOath ? 'text-black' : 'text-white'} font-bold py-4 rounded-xl hover:bg-white hover:text-black smooth-transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isMinting ? 'INITIALIZING...' : mintStatus === 'success' ? 'PROTOCOL DEPLOYED' :
                    isOath ? `MINT NOW (${data.price})` : `MINT NOW (${(parseFloat(data.price) * amount).toFixed(2)} ETH)`
                  }
                </button>
              </div>
            </div>
          </div>

          <div className={`relative flex justify-center ${!isOath ? 'lg:order-1' : ''}`}>
            <div className={`absolute inset-0 ${isOath ? 'bg-electric-cyan/10' : 'bg-rig-green/10'} blur-[120px] rounded-full`}></div>
            <div className={`relative p-4 glass-panel rounded-3xl smooth-transition group`}>
              <img
                alt={data.name}
                className="w-full h-auto max-w-md rounded-2xl shadow-2xl group-hover:scale-[1.02] smooth-transition"
                src={isOath ?
                  "/rig.png" :
                  "/chanzi.jpg"
                }
              />
            </div>
          </div>
        </div>

        {/* Benefits — Full Width Section Below */}
        <div className="mt-20">
          <h3 className={`text-lg font-bold ${accentColor} uppercase tracking-widest mb-8 text-center`}>
            {isOath ? 'Oath Benefits (v1)' : 'Rig Benefits (v1)'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {isOath ? (
              <>
                <BenefitCard
                  icon="memory"
                  title="AI Compute Quota"
                  description="Oath members receive a monthly AI compute allowance for running governance twins, participating in tasks, and research workflows."
                  accentColor={accentColor}
                  hexColor={hexColor}
                />
                <BenefitCard
                  icon="account_tree"
                  title="Governance Twin"
                  description="Create an auditable AI Twin to delegate governance. It votes per your values with verifiable reasoning traces. Pause / revoke / override anytime."
                  accentColor={accentColor}
                  hexColor={hexColor}
                />
                <BenefitCard
                  icon="rocket_launch"
                  title="Agent Pre-Financing"
                  description="Early pilot whitelist access to agent future cashflow financing & pre-financing programs (research / product stage access)."
                  accentColor={accentColor}
                  hexColor={hexColor}
                />
                <BenefitCard
                  icon="trending_up"
                  title="Rank Acceleration"
                  description="Faster progression through Initiate → Operator → Architect → Custodian. You level up faster with verifiable performance."
                  accentColor={accentColor}
                  hexColor={hexColor}
                />
              </>
            ) : (
              <>
                <BenefitCard
                  icon="handyman"
                  title="Tradable Tooling"
                  description="Boost your task execution capability and settlement efficiency. Tool attributes evolve with each version iteration."
                  accentColor={accentColor}
                  hexColor={hexColor}
                />
                <BenefitCard
                  icon="lock_open"
                  title="Task Pool Access"
                  description="Unlock higher-tier task pools including agent integration, research workflows, and subnet tasks."
                  accentColor={accentColor}
                  hexColor={hexColor}
                />
                <BenefitCard
                  icon="payments"
                  title="Settlement Efficiency"
                  description="Receive fee discounts and priority boosts in FLUX / USDAI settlements. Specific rates per the rules page."
                  accentColor={accentColor}
                  hexColor={hexColor}
                />
                <BenefitCard
                  icon="extension"
                  title="Upgradeable Slots"
                  description="Reserved modular upgrade slots for future enhancements — season modules, fragments, and beyond."
                  accentColor={accentColor}
                  hexColor={hexColor}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section className="max-w-7xl mx-auto px-8 py-32" id="philosophy">
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="order-2 lg:order-1 relative">
        <div className="glass-panel p-3 rounded-3xl overflow-hidden group relative">
          <img
            alt="Atmospheric shuttle launch"
            className="w-full rounded-2xl transition-all duration-700 group-hover:scale-105"
            src="/philosophy-pixel.png"
          />
          <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <p className="text-lg font-medium text-electric-cyan">Human-machine integration is the terminal goal.</p>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 space-y-10">
        <h2 className="text-6xl font-black leading-tight text-white tracking-tight">
          More than an <br /><span className="text-habbo-amber italic text-glow">NFT project</span>
        </h2>
        <p className="text-xl text-slate-400 leading-relaxed">
          Almost Human is a sovereign network built for the age of autonomous agents. We leverage verifiable contribution proofs to construct the economic infrastructure of a new era.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-habbo-amber hover:bg-white/5 smooth-transition">
            <div className="text-habbo-amber font-bold text-2xl mb-2">PoCW</div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Proof of Contribution</p>
            <p className="text-slate-300">Verifiable on-chain efforts that translate into tribal reputation.</p>
          </div>
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-habbo-green hover:bg-white/5 smooth-transition">
            <div className="text-habbo-green font-bold text-2xl mb-2">PoSA</div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Proof of Stake</p>
            <p className="text-slate-300">Asset-backed commitment and active governance participation.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Ascension = () => (
  <section className="max-w-7xl mx-auto px-8 py-32 border-t border-white/5" id="ascension">
    <div className="flex flex-col items-center mb-24 text-center">
      <span className="text-sm font-bold text-electric-cyan uppercase tracking-widest mb-6 block">Terminal objective</span>
      <h2 className="text-6xl md:text-7xl font-black text-white tracking-tight text-glow">Path of ascension</h2>
    </div>
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="space-y-8">
        <h3 className="text-5xl font-extrabold text-white tracking-tight leading-tight">
          The Human-Machine <br /><span className="text-habbo-amber">Symbiotic tribe</span>
        </h3>
        <div className="space-y-6 text-xl text-slate-400 leading-relaxed font-light">
          <p>
            The era of competition between man and machine is over. We have entered the era of the tribe—where collective intelligence transcends individual limitations.
          </p>
          <p>
            Almost Human is a manifesto written in code. Our vision is a decentralized network where agents serve the tribe, and the tribe empowers the agents.
          </p>
        </div>
        <div className="pt-10 flex gap-12 border-t border-white/10">
          <div>
            <div className="text-4xl font-black text-white">100%</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Community owned</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white">∞</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Growth potential</div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="absolute inset-0 bg-plasma-purple/10 rounded-full blur-[100px]"></div>
        <div className="relative p-2 rounded-full glass-panel border-plasma-purple/20 group overflow-hidden">
          <img
            alt="Artistic dark symbiotic sphere"
            className="w-full max-w-md rounded-full shadow-2xl hover:scale-110 smooth-transition duration-1000"
            src="/ascension-pixel.png"
          />
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <MintSection type={NFTType.OATH} />
      <MintSection type={NFTType.RIGS} />
      <Philosophy />
      <Ascension />
    </div>
  );
}
