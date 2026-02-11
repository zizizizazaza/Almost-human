import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-electric-cyan rounded-lg flex items-center justify-center group-hover:rotate-90 smooth-transition shadow-neon-cyan">
            <span className="material-symbols-outlined text-black font-bold">grid_view</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-electric-cyan smooth-transition">Almost Human</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 font-bold tracking-wide text-slate-300">
          <a className="hover:text-openclaw-red smooth-transition tracking-widest text-sm" href="#auth-priti">Auth of Priti</a>
          <a className="hover:text-electric-cyan smooth-transition tracking-widest text-sm" href="#oath-sbt">Oath SBT</a>
          <a className="hover:text-rig-green smooth-transition tracking-widest text-sm" href="#s1-rig">Rig</a>
          <a className="hover:text-habbo-amber smooth-transition tracking-widest text-sm" href="#philosophy">About Us</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold hover:bg-electric-cyan hover:scale-105 smooth-transition active:scale-95 tracking-tighter">
            Connect wallet
          </button>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-panel p-8 flex flex-col gap-6 animate-in slide-in-from-top-5">
          <a className="text-lg font-bold hover:text-openclaw-red smooth-transition" href="#auth-priti" onClick={() => setIsOpen(false)}>Auth of Priti</a>
          <a className="text-lg font-bold hover:text-electric-cyan smooth-transition" href="#oath-sbt" onClick={() => setIsOpen(false)}>Oath SBT</a>
          <a className="text-lg font-bold hover:text-rig-green smooth-transition" href="#s1-rig" onClick={() => setIsOpen(false)}>Rig</a>
          <a className="text-lg font-bold hover:text-habbo-amber smooth-transition" href="#philosophy" onClick={() => setIsOpen(false)}>About Us</a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black py-24 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-habbo-amber rounded-lg flex items-center justify-center shadow-lg shadow-habbo-amber/20">
              <span className="material-symbols-outlined text-black font-bold">grid_view</span>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Almost Human</span>
          </div>
          <p className="text-slate-500 max-w-xs leading-relaxed font-light">
            An experimental protocol focused on on-chain contribution verification and human-agent symbiotic governance.
          </p>
        </div>
        <div>
          <h6 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8">Ecosystem</h6>
          <ul className="space-y-4 text-slate-500 font-medium text-sm">
            <li><a className="hover:text-electric-cyan smooth-transition" href="#">Documentation</a></li>
            <li><a className="hover:text-rig-green smooth-transition" href="#">Whitepaper</a></li>
            <li><a className="hover:text-habbo-amber smooth-transition" href="#">Protocol assets</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8">Connect</h6>
          <ul className="space-y-4 text-slate-500 font-medium text-sm">
            <li><a className="hover:text-electric-cyan smooth-transition" href="#">X / Twitter</a></li>
            <li><a className="hover:text-rig-green smooth-transition" href="#">Discord</a></li>
            <li><a className="hover:text-habbo-green smooth-transition" href="#">Telegram</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
        <span className="text-xs text-slate-600 font-bold tracking-widest">© 2024 Almost Human Order.</span>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 px-4 py-1.5 glass-panel rounded-full">
            <div className="w-2 h-2 rounded-full bg-habbo-green animate-pulse shadow-[0_0_8px_#00A859]"></div>
            <span className="text-[10px] text-slate-400 font-bold tracking-widest">Base mainnet: Online</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background-dark relative">
      {/* Global Pixel Grid Overlay */}
      <div className="fixed inset-0 pixel-grid-overlay z-0"></div>

      {/* Global Floating Pixel Dots */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="pixel-dot bg-electric-cyan" style={{ top: '8%', left: '5%', animationDelay: '0s' }}></div>
        <div className="pixel-dot bg-rig-green" style={{ top: '18%', left: '92%', animationDelay: '1.5s' }}></div>
        <div className="pixel-dot bg-electric-cyan" style={{ top: '35%', left: '3%', animationDelay: '3s' }}></div>
        <div className="pixel-dot bg-white" style={{ top: '28%', left: '15%', animationDelay: '2s' }}></div>
        <div className="pixel-dot bg-electric-cyan" style={{ top: '52%', left: '88%', animationDelay: '4s' }}></div>
        <div className="pixel-dot bg-rig-green" style={{ top: '45%', left: '95%', animationDelay: '0.5s' }}></div>
        <div className="pixel-dot bg-white" style={{ top: '65%', left: '50%', animationDelay: '2.5s' }}></div>
        <div className="pixel-dot bg-electric-cyan" style={{ top: '72%', left: '8%', animationDelay: '1s' }}></div>
        <div className="pixel-dot bg-rig-green" style={{ top: '85%', left: '20%', animationDelay: '3.5s' }}></div>
        <div className="pixel-dot bg-white" style={{ top: '90%', left: '75%', animationDelay: '5s' }}></div>

        {/* Larger Pixel Squares */}
        <div className="pixel-dot-lg bg-electric-cyan/30" style={{ top: '15%', left: '85%', animationDelay: '2s' }}></div>
        <div className="pixel-dot-lg bg-rig-green/30" style={{ top: '55%', left: '10%', animationDelay: '4s' }}></div>
        <div className="pixel-dot-lg bg-electric-cyan/20" style={{ top: '78%', left: '45%', animationDelay: '1s' }}></div>
        <div className="pixel-dot-lg bg-rig-green/20" style={{ top: '40%', left: '60%', animationDelay: '6s' }}></div>

        {/* Pixel Crosses */}
        <div className="pixel-cross text-electric-cyan" style={{ top: '22%', left: '90%', animationDelay: '0s' }}></div>
        <div className="pixel-cross text-rig-green" style={{ top: '68%', left: '2%', animationDelay: '5s' }}></div>
        <div className="pixel-cross text-white" style={{ top: '10%', left: '70%', animationDelay: '10s' }}></div>
        <div className="pixel-cross text-electric-cyan" style={{ top: '88%', left: '35%', animationDelay: '7s' }}></div>
        <div className="pixel-cross text-rig-green" style={{ top: '42%', left: '80%', animationDelay: '12s' }}></div>

        {/* Twinkling Pixel Stars */}
        <div className="pixel-star text-electric-cyan" style={{ top: '5%', left: '25%', animationDelay: '0s' }}></div>
        <div className="pixel-star text-white" style={{ top: '12%', left: '60%', animationDelay: '1.2s' }}></div>
        <div className="pixel-star text-rig-green" style={{ top: '30%', left: '45%', animationDelay: '2.8s' }}></div>
        <div className="pixel-star text-electric-cyan" style={{ top: '48%', left: '12%', animationDelay: '0.6s' }}></div>
        <div className="pixel-star text-white" style={{ top: '55%', left: '78%', animationDelay: '3.5s' }}></div>
        <div className="pixel-star text-electric-cyan" style={{ top: '70%', left: '92%', animationDelay: '1.8s' }}></div>
        <div className="pixel-star text-rig-green" style={{ top: '82%', left: '55%', animationDelay: '4.2s' }}></div>
        <div className="pixel-star text-white" style={{ top: '93%', left: '30%', animationDelay: '2.1s' }}></div>

        {/* Pixel Scan Lines */}
        <div className="pixel-line-h bg-electric-cyan/40" style={{ top: '20%', width: '60px', animationDelay: '0s' }}></div>
        <div className="pixel-line-h bg-rig-green/40" style={{ top: '50%', width: '80px', animationDelay: '5s' }}></div>
        <div className="pixel-line-h bg-electric-cyan/30" style={{ top: '75%', width: '50px', animationDelay: '10s' }}></div>

        {/* Pixel Block Clusters */}
        <div className="pixel-block text-electric-cyan" style={{ top: '18%', left: '78%', animationDelay: '1s' }}></div>
        <div className="pixel-block text-rig-green" style={{ top: '38%', left: '6%', animationDelay: '3s' }}></div>
        <div className="pixel-block text-white" style={{ top: '62%', left: '85%', animationDelay: '5s' }}></div>
        <div className="pixel-block text-electric-cyan" style={{ top: '80%', left: '15%', animationDelay: '7s' }}></div>

        {/* Pixel Diamonds */}
        <div className="pixel-diamond text-electric-cyan" style={{ top: '15%', left: '40%', animationDelay: '2s' }}></div>
        <div className="pixel-diamond text-rig-green" style={{ top: '58%', left: '70%', animationDelay: '4s' }}></div>
        <div className="pixel-diamond text-white" style={{ top: '75%', left: '25%', animationDelay: '8s' }}></div>
        <div className="pixel-diamond text-electric-cyan" style={{ top: '35%', left: '95%', animationDelay: '6s' }}></div>
      </div>

      <Navbar />
      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
