import React from 'react';
import { ShieldCheck, Wifi, Map, Activity, Sparkles, Bell } from 'lucide-react';

const features = [
  {
    title: 'Secure by design',
    description: 'End-to-end encryption for city credentials and safety alerts.',
    icon: ShieldCheck,
    accent: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Mobility intelligence',
    description: 'Real-time transit, micro-mobility, and congestion overlays.',
    icon: Map,
    accent: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Citywide connectivity',
    description: 'Trusted Wi‑Fi hotspots and roaming guides at a glance.',
    icon: Wifi,
    accent: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Proactive alerts',
    description: 'Incident push notifications with location-aware routing.',
    icon: Bell,
    accent: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Performance tuned',
    description: 'Lightweight footprint with battery-aware background sync.',
    icon: Activity,
    accent: 'bg-slate-50 text-slate-700',
  },
  {
    title: 'Future proof',
    description: 'Built for new devices and updated OTA without downtime.',
    icon: Sparkles,
    accent: 'bg-purple-50 text-purple-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Capabilities</p>
            <h2 className="font-display text-3xl font-bold text-slate-900">Engineered for every city scenario</h2>
            <p className="text-slate-500 mt-2">A modular foundation that keeps the experience consistent across platforms.</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold">Performance</span>
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold">Security</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <article key={feature.title} className="p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-card transition-shadow bg-slate-50/50">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${feature.accent}`}>
                <feature.icon size={20} />
              </div>
              <h3 className="font-semibold text-lg text-slate-900">{feature.title}</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
