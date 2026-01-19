import React from 'react';
import { X, Download } from 'lucide-react';
import { APP_CONFIG } from '../../config/constants';
import { AndroidIcon, AppleIcon, WindowsIcon } from '../icons/PlatformIcons';

export default function DownloadModal({ onClose }) {
  const getIcon = (name) => {
    if (name === 'android') return <AndroidIcon className="w-6 h-6" />;
    if (name === 'apple') return <AppleIcon className="w-6 h-6" />;
    return <WindowsIcon className="w-6 h-6" />;
  };

  const getBgColor = (name) => {
    if (name === 'android') return 'bg-green-100 text-green-600';
    if (name === 'apple') return 'bg-slate-100 text-slate-900';
    return 'bg-blue-100 text-blue-600';
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl animate-reveal">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full"
          aria-label="Close download modal"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold font-display text-slate-900 mb-2">Select your Platform</h2>
        <p className="text-slate-500 mb-8">Choose the correct version for your device.</p>

        <div className="grid gap-4">
          {APP_CONFIG.downloads.map((item, idx) => (
            <a key={idx} href="#" className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all group">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${getBgColor(item.icon)}`}>
                {getIcon(item.icon)}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">{item.platform}</h3>
                <p className="text-xs text-slate-500">{item.details}</p>
              </div>
              <Download size={20} className="text-slate-400 group-hover:text-blue-600" />
            </a>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
          By downloading, you agree to our <a href="#" className="underline">Terms of Service</a>.
        </div>
      </div>
    </div>
  );
}
