import React from 'react';
import { ShieldCheck, MapPin, Wifi, Download } from 'lucide-react';
import { APP_CONFIG } from '../../config/constants';

export default function Hero({ onDownload }) {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 overflow-hidden hero-gradient text-white">
      <div className="blur-blob blue" />
      <div className="blur-blob purple" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-semibold">
            <ShieldCheck size={16} />
            Secure, Connected, Ready
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">
            SmartCity platform for <span className="text-blue-300">urban intelligence</span>.
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            A unified companion for mobility, safety, and community services. Optimized for every device with one-click installs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onDownload}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
            >
              <Download size={18} />
              Download
            </button>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:border-white text-sm font-semibold text-white transition-colors"
            >
              View features
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 text-white/70 text-sm">
            <div>
              <div className="font-display text-2xl font-bold text-white">99.9%</div>
              Uptime
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-white">+120</div>
              Cities
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-white">24/7</div>
              Support
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-sky-400/10 to-indigo-500/10 rounded-3xl blur-3xl" />
          <div className="relative bg-white text-slate-900 rounded-3xl p-6 shadow-2xl shadow-blue-500/10 border border-white/20 phone-shadow animate-float">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 grid place-items-center font-display font-bold">SC</div>
                <div>
                  <p className="text-xs text-slate-500">SmartCity</p>
                  <p className="font-semibold">{APP_CONFIG.version}</p>
                </div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">Live</span>
            </div>

            <div className="space-y-3">
              <CardRow icon={<MapPin size={16} />} title="Mobility" value="Transit sync + ETA" accent="text-blue-600" />
              <CardRow icon={<ShieldCheck size={16} />} title="Safety" value="SOS & alerts" accent="text-emerald-600" />
              <CardRow icon={<Wifi size={16} />} title="Connectivity" value="City Wi‑Fi map" accent="text-indigo-600" />
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-xs text-slate-500">Requirements</p>
              <p className="text-sm font-semibold text-slate-900">{APP_CONFIG.requirements}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardRow({ icon, title, value, accent }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl bg-white border border-slate-100 grid place-items-center text-blue-600`}>
          {icon}
        </div>
        <div>
          <p className="text-xs text-slate-500">{title}</p>
          <p className={`text-sm font-semibold ${accent}`}>{value}</p>
        </div>
      </div>
      <span className="text-xs font-semibold text-slate-400">Synced</span>
    </div>
  );
}
