import React from 'react';
import { Menu, X } from 'lucide-react';
import { APP_CONFIG } from '../../config/constants';

export default function Navbar({ scrolled, isOpen, onToggle, onDownload }) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className={`font-display font-bold text-2xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
            Smart<span className="text-blue-500">City</span>
          </span>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${scrolled ? 'bg-blue-50 text-blue-600' : 'bg-white/10 text-white'}`}>
            {APP_CONFIG.version}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>Features</a>
          <a href={APP_CONFIG.links.help} className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>Help</a>
          <a href={APP_CONFIG.links.privacy} className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>Privacy</a>
          <button
            onClick={onDownload}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
          >
            Download
          </button>
        </div>

        <button onClick={onToggle} className={`md:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-slate-100 animate-reveal">
          <div className="px-6 py-4 space-y-3">
            <a href="#features" className="block text-slate-700 font-medium">Features</a>
            <a href={APP_CONFIG.links.help} className="block text-slate-700 font-medium">Help</a>
            <a href={APP_CONFIG.links.privacy} className="block text-slate-700 font-medium">Privacy</a>
            <button
              onClick={onDownload}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold shadow-md shadow-blue-500/20 transition-colors"
            >
              Download
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
