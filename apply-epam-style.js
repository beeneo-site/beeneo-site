const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const appDir = path.join(rootDir, 'src', 'app', '[lang]');

console.log("🚀 Lade EPAM-Inspirationen & beeNEO-Daten...");

// 1. EPAM-STYLE HERO & HOME PAGE
const homePageCode = `
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getDictionary } from '@/dictionaries/getDictionary';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'tr' }];
}

export default async function HomePage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar lang={lang} dict={dict} />

      {/* EPAM-STYLE HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-semibold text-xs mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Engineering × Lean Management × E-Mobility
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.08]">
            Engineering the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400">
              Future of Industry.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Alman mühendislik disiplini ve yerel entegrasyon gücü. ASPICE L3, ISO 26262/21434, sureNEO FaaS Lean ve Lvkon E-Aks çözümleri.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={\`/\${lang}/contact\`} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-2xl shadow-blue-600/40 hover:scale-105">
              Projekt Anfragen →
            </Link>
            <Link href={\`/\${lang}/sureneo\`} className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105">
              sureNEO Keşfet
            </Link>
          </div>
        </div>
      </section>

      {/* EPAM-STYLE METRICS & IMPACT COUNTER */}
      <section className="py-20 border-y border-slate-800/80 bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-6xl font-black text-blue-400 mb-2">%30</div>
            <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">Hızlı Teslimat</div>
            <div className="text-slate-500 text-xs mt-1">Release Velocity</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-black text-green-400 mb-2">%40</div>
            <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">Maliyet Optimizasyonu</div>
            <div className="text-slate-500 text-xs mt-1">Tool2Tax Reduction</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-black text-cyan-400 mb-2">%85</div>
            <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">ASPICE L3 Başarısı</div>
            <div className="text-slate-500 text-xs mt-1">İlk Seferde Tam Başarı</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-black text-orange-400 mb-2">160K+</div>
            <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">Lvkon Global E-Vehicle</div>
            <div className="text-slate-500 text-xs mt-1">24 Ülkede Saha Kullanımı</div>
          </div>
        </div>
      </section>

      {/* 3 PILLARS MATRIX */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Üç Stratejik Uzmanlık Sütunu</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Otomotiv, Ağır Sanayi ve High-Tech Sektörleri İçin Uçtan Uca Çözümler.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="text-blue-500 text-sm font-bold uppercase tracking-wider mb-2">Pillar 01</div>
              <h3 className="text-2xl font-bold mb-4">Engineering & Consultancy</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                ASPICE Level 3, ISO 26262 ASIL D Fonksiyonel Güvenlik ve ISO 21434 Siber Güvenlik süreç entegrasyonu.
              </p>
            </div>
            <Link href={\`/\${lang}/engineering\`} className="text-blue-400 font-bold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Mühendislik Detayları →
            </Link>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl hover:border-green-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="text-green-500 text-sm font-bold uppercase tracking-wider mb-2">Pillar 02</div>
              <h3 className="text-2xl font-bold mb-4">sureNEO LOS & FaaS Lean</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Bürokrasi olmadan sertifikasyon. Lisans israfını kesen Tool2Tax analizi ve yapay zeka destekli AIBPM altyapısı.
              </p>
            </div>
            <Link href={\`/\${lang}/sureneo\`} className="text-green-400 font-bold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              sureNEO Platformu →
            </Link>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl hover:border-orange-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-2">Pillar 03</div>
              <h3 className="text-2xl font-bold mb-4">Lvkon E-Mobility Products</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                TED3380S Elektrikli Sürüş Aksı (E-Aks), Tahrik Motorları, Şanzıman ve Entegre Güç Üniteleri.
              </p>
            </div>
            <Link href={\`/\${lang}/lvkon\`} className="text-orange-400 font-bold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Ürün Kataloğu →
            </Link>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
`;

fs.writeFileSync(path.join(appDir, 'page.tsx'), homePageCode.trim(), 'utf8');

console.log("🎉 EPAM-Style Design erfolgreich angewendet!");
`;