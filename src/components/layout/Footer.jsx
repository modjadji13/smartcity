import React from 'react';
import { APP_CONFIG } from '../../config/constants';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2 font-display text-slate-900">
          <span className="font-bold">SmartCity</span>
          <span className="text-xs px-2 py-1 bg-slate-200 rounded-full font-semibold">{APP_CONFIG.version}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={APP_CONFIG.links.privacy} className="hover:text-slate-700">Privacy</a>
          <a href={APP_CONFIG.links.help} className="hover:text-slate-700">Help</a>
        </div>
        <span>{APP_CONFIG.copyright}</span>
      </div>
    </footer>
  );
}
