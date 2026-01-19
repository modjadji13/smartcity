import React from 'react';
import { Menu, X } from 'lucide-react';
import { APP_CONFIG } from '../../config/constants';

export default function Navbar({ scrolled, isOpen, onToggle, onDownload }) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className={`font-display font-bold text-2xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
            Smart<span className="text-blue-500">City</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
           {/* Links mapped from Config if you want, or static */}
           <a href="#features" className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>Features</a>
           {/* ... other links ... */}
           <button 
             onClick={onDownload}
             className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
           >
             Download
           </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={onToggle} className={`md:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
