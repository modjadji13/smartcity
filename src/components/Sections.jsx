import React from 'react';
import { 
  MapPin, WifiOff, Shield, Activity, Zap, Globe, Smartphone,
  CheckCircle, RefreshCw, Database, Lock, Server
} from 'lucide-react';
import { AndroidIcon, AppleIcon, WindowsIcon } from './Icons';

export const Hero = ({ onDownload }) => (
  <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1519010470956-6d877008eaa4?q=80&w=2532&auto=format&fit=crop" alt="City Night" className="w-full h-full object-cover opacity-90"/>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      {/* Text Content */}
      <div className="animate-reveal">
        <h1 className="font-display text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-xl">
          Civic infrastructure <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">at your fingertips.</span>
        </h1>
        <p className="font-body text-lg text-slate-300 mb-10 max-w-lg leading-relaxed drop-shadow-md">
          The official channel for reporting municipal faults. Engineered for reliability, offline capability, and real-time feedback loops.
        </p>

        <div className="flex flex-wrap gap-3">
          {[
             { Icon: AndroidIcon, label: 'Get it on', platform: 'Android' },
             { Icon: AppleIcon, label: 'Download on the', platform: 'App Store' },
             { Icon: WindowsIcon, label: 'Get it from', platform: 'Microsoft' }
          ].map((btn, i) => (
             <button key={i} onClick={onDownload} className="h-14 px-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm flex items-center justify-center gap-3 transition-all hover:bg-white/20 hover:-translate-y-1 shadow-xl">
               <btn.Icon />
               <div className="flex flex-col items-start leading-none">
                 <span className="text-[10px] uppercase opacity-70">{btn.label}</span>
                 <span className="text-sm font-bold">{btn.platform}</span>
               </div>
             </button>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-2">Minimum Requirements: Android 8.0+, iOS 15.0+, Windows 10/11</p>
      </div>

      {/* Realistic Phone UI */}
      <div className="relative flex justify-center perspective-1000 animate-reveal" style={{animationDelay: '0.2s'}}>
        <div className="relative w-[320px] h-[650px] bg-black rounded-[50px] border-[8px] border-slate-800 phone-shadow overflow-hidden z-20 ring-1 ring-slate-900/50">
           {/* Phone Top Bar */}
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none z-50 rounded-[42px]"></div>
           <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-40 flex items-center justify-center">
             <div className="w-16 h-4 bg-[#111] rounded-full"></div>
           </div>
           
           {/* Phone Screen Content */}
           <div className="w-full h-full bg-slate-50 flex flex-col relative">
             <div className="absolute inset-0 bg-[#E5E7EB]">
               {/* Map Background Pattern */}
               <div className="w-full h-full opacity-60" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L90 10 L90 90 L10 90 Z' fill='none' stroke='%23CBD5E1' stroke-width='1'/%3E%3Cpath d='M30 0 L30 100 M70 0 L70 100 M0 40 L100 40 M0 70 L100 70' fill='none' stroke='%23fff' stroke-width='4'/%3E%3C/svg%3E")`, backgroundSize: '200px 200px'}}></div>
               
               {/* 3D Elements */}
               <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-slate-300 transform -skew-y-12 border border-slate-200 shadow-lg"></div>
               <div className="absolute top-1/2 right-1/4 w-16 h-20 bg-slate-300 transform -skew-y-12 border border-slate-200 shadow-lg"></div>

               {/* Map Pin */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                 <div className="w-24 h-24 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><div className="pulse-ring"></div></div>
                 <div className="relative z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white transform hover:scale-110 transition-transform cursor-pointer">
                   <MapPin size={20} fill="currentColor" />
                 </div>
                 {/* Tooltip */}
                 <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-slate-100 whitespace-nowrap z-20 flex flex-col items-start min-w-[140px]">
                   <div className="flex items-center gap-2 mb-1 w-full border-b border-slate-100 pb-1">
                     <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                     <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Critical Fault</span>
                   </div>
                   <span className="text-xs font-bold text-slate-800">Water Pipe Burst</span>
                   <span className="text-[10px] text-slate-400">Main St. & 5th Ave</span>
                 </div>
               </div>
             </div>

             {/* Phone Overlay Icons */}
             <div className="absolute top-14 right-4 flex flex-col gap-2 z-20">
               <div className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600"><Globe size={20}/></div>
               <div className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600"><Smartphone size={20}/></div>
             </div>

             {/* Phone Bottom Sheet */}
             <div className="absolute bottom-0 w-full bg-white rounded-t-[32px] p-6 pb-10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.15)] z-30">
               <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8"></div>
               <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-slate-900 text-lg">New Report</h3>
                 <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Step 1 of 3</span>
               </div>
               <div className="grid grid-cols-4 gap-3 mb-6">
                 {[Zap, WifiOff, Shield, Activity].map((Icon, i) => (
                   <div key={i} className="aspect-square rounded-2xl bg-slate-50 flex flex-col items-center justify-center gap-1 text-slate-400 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all border border-slate-100 cursor-pointer group">
                     <Icon size={24} className="group-hover:scale-110 transition-transform" />
                   </div>
                 ))}
               </div>
               <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 active:scale-95 transition-all">Set Location</button>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

export const Features = () => (
  <section id="features" className="py-24 bg-slate-50/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Core Capabilities</h2>
        <p className="text-slate-500 max-w-2xl">A unified platform bridging the gap between municipal operations and citizen engagement.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
        {/* Card 1 */}
        <div className="md:col-span-2 bento-shadow bg-white rounded-2xl p-8 border border-slate-100 relative overflow-hidden group">
           <div className="absolute -right-20 -top-20 w-64 h-64 opacity-50 pointer-events-none">
             <div className="absolute inset-0 rounded-full border border-blue-100"></div>
             <div className="absolute inset-4 rounded-full border border-blue-50"></div>
             <div className="absolute inset-0 rounded-full radar-sweep opacity-50"></div>
           </div>
           <div className="relative z-10 h-full flex flex-col justify-between">
             <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center text-blue-600"><MapPin /></div>
             <div>
               <h3 className="font-display text-xl font-bold text-slate-900 mb-2">High-Fidelity Geotagging</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-4">Automatically captures coordinates with <span className="font-semibold text-slate-700">3-meter precision</span>. Eliminates ambiguity.</p>
               <div className="flex gap-2">
                 <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-md text-[10px] font-bold text-slate-600 border border-slate-200"><Globe size={10} /><span>GNSS Multi-Band</span></div>
                 <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 rounded-md text-[10px] font-bold text-blue-600 border border-blue-100"><CheckCircle size={10} /><span>Verified Loc</span></div>
               </div>
             </div>
           </div>
        </div>

        {/* Card 2 */}
        <div className="md:col-span-1 bento-shadow bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 relative overflow-hidden group flex flex-col justify-between">
           <div className="flex justify-between items-start">
             <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm"><WifiOff size={20} /></div>
             <RefreshCw size={16} className="text-slate-500 animate-spin opacity-50" style={{animationDuration: '3s'}} />
           </div>
           <div>
             <div className="flex items-center gap-2 mb-2"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span><span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sync Active</span></div>
             <h3 className="font-display text-lg font-bold mb-2">Offline First</h3>
             <p className="text-slate-400 text-xs leading-relaxed mb-3">Store reports locally. Auto-uploads securely via background sync.</p>
             <div className="flex items-center gap-1.5 text-[10px] text-slate-500 bg-black/20 p-1.5 rounded w-fit"><Database size={10} /><span>Local Encrypted DB</span></div>
           </div>
        </div>

        {/* Card 3 */}
        <div className="md:col-span-1 bento-shadow bg-white rounded-2xl p-8 border border-slate-100 relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50"></div>
           <div className="absolute -right-6 -bottom-6 text-slate-50 shield-glow"><Shield size={120} /></div>
           <div className="relative z-10 h-full flex flex-col justify-between">
             <div className="flex justify-between"><Lock className="text-slate-400 group-hover:text-blue-600 transition-colors" /><div className="px-2 py-0.5 rounded border border-green-200 bg-green-50 text-[10px] font-bold text-green-700 h-fit">SECURE</div></div>
             <div>
               <h3 className="font-display text-lg font-bold text-slate-900 mb-1">Encrypted</h3>
               <p className="text-slate-500 text-xs mb-3">End-to-end data protection for all reports.</p>
               <div className="space-y-1">
                 <div className="flex items-center gap-1.5 text-[10px] text-slate-500"><Server size={10} /><span>AES-256 Standard</span></div>
                 <div className="flex items-center gap-1.5 text-[10px] text-slate-500"><Shield size={10} /><span>GDPR Compliant</span></div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);
