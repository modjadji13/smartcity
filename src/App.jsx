import React, { useState, useEffect } from 'react';
import { Menu, X, Download, X as CloseIcon } from 'lucide-react';
import { AndroidIcon, AppleIcon, WindowsIcon } from './components/Icons';
import { Hero, Features } from './components/Sections';
import './styles.css'; // Make sure to import the CSS file!

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-white text-slate-900 min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className={`font-display font-bold text-2xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
              Smart<span className="text-blue-500">City</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
             <a href="#features" className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>Features</a>
             <a href="#privacy" className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>Privacy</a>
             <a href="#help" className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>Help Center</a>
             <a href="#" className={`text-sm font-medium font-semibold hover:underline ${scrolled ? 'text-slate-900' : 'text-white'}`}>Log in</a>
             <button onClick={() => setShowDownloadModal(true)} className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30">Download</button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Main Sections - Now imported cleanly! */}
      <Hero onDownload={() => setShowDownloadModal(true)} />
      <Features />

      {/* Footer */}
      <footer className="bg-[#111b21] text-white pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h4 className="text-gray-400 font-bold uppercase tracking-wider text-xs mb-6">What we do</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="hover:underline text-[#e9edef]">Features</a></li>
                <li><a href="#" className="hover:underline text-[#e9edef]">Blog</a></li>
              </ul>
            </div>
            {/* ... keeping footer brief for brevity, add other columns here ... */}
            <div>
               <h4 className="text-gray-400 font-bold uppercase tracking-wider text-xs mb-6">Need help?</h4>
               <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="hover:underline text-[#e9edef]">Contact Us</a></li>
                <li><a href="#" className="hover:underline text-[#e9edef]">Download</a></li>
               </ul>
            </div>
          </div>
          <div className="border-t border-[#3b4a54] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-[#8696a0] text-sm">2026 © SmartCity Inc.</div>
          </div>
        </div>
      </footer>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowDownloadModal(false)}></div>
          <div className="relative bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl animate-reveal">
            <button onClick={() => setShowDownloadModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full">
              <CloseIcon size={20} />
            </button>
            
            <h2 className="text-2xl font-bold font-display text-slate-900 mb-2">Select your Platform</h2>
            <p className="text-slate-500 mb-8">Choose the correct version for your device.</p>
            
            <div className="grid gap-4">
              {[
                { Icon: AndroidIcon, title: 'Android APK', sub: 'v2.4.1 • arm64 • 45MB', bg: 'bg-green-100 text-green-600' },
                { Icon: AppleIcon, title: 'iOS / macOS', sub: 'App Store • Universal', bg: 'bg-slate-100 text-slate-900' },
                { Icon: WindowsIcon, title: 'Windows Installer', sub: 'v2.4.1 • x64 • .msi', bg: 'bg-blue-100 text-blue-600' }
              ].map((item, i) => (
                <a key={i} href="#" className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all group">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${item.bg}`}>
                    <item.Icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500">{item.sub}</p>
                  </div>
                  <Download size={20} className="text-slate-400 group-hover:text-blue-600" />
                </a>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
               <p className="text-xs text-slate-400">By downloading, you agree to our <a href="#" className="underline">Terms of Service</a>.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
