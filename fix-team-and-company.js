Set-Content -Path ".\fix-team-and-company.js" -Value @'
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const appDir = path.join(rootDir, 'src', 'app', '[lang]');

console.log("🛠 Ekip Yapısı ve Şirket Unvanı Güncelleniyor...");

// 1. HAKKIMIZDA & LEAD TEAM SAYFASI GÜNCELLEMESİ (Berrin Erden Kişi Olarak Kaldırıldı)
const aboutPageCode = `
import React, { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = use(params);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar lang={lang} />
      <main className="pt-36 pb-24 px-6 max-w-7xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-semibold text-xs mb-6 uppercase tracking-widest">
          T.C. Sanayi ve Teknoloji Bakanlığı Teknogirişim Rozeti Sahibi
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Hakkımızda & <span className="text-blue-500">Lider Kadro</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-16 leading-relaxed">
          BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LİMİTED ŞİRKETİ çatısı altında, Alman mühendislik disiplinini ve 50 yılı aşkın OEM/Tier-1 tecrübesini Türkiye'nin teknoloji ekosistemiyle buluşturuyoruz.
        </p>

        {/* LEAD TEAM (SADECE AYHAN ÖNAL VE ULLI SCHMEHL) */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 border-b border-slate-800 pb-4">Lider Kadro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Ayhan Önal */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="h-64 bg-slate-950 rounded-2xl mb-6 overflow-hidden border border-slate-800">
                  <img src="/team/ayhan-onal.jpg" alt="Ayhan Önal" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Ayhan Önal</h3>
                <p className="text-blue-400 font-semibold text-sm mb-4">Genel Müdür / Lead Engineer & Kurucu</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Akıllı Yalın Yönetim (Smart Lean Management) süreç geliştiricisi. Lvkon Türkiye Stratejik Partneri, PLM/ALM, ISO 26262 Fonksiyonel Güvenlik ve ISO 21434 Siber Güvenlik Uzmanı.
                </p>
              </div>
              <div className="text-xs text-slate-500 font-mono">Uzmanlık: Mechatronic Systems, ASPICE L3, Powertrain</div>
            </div>

            {/* Ulli Schmehl */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="h-64 bg-slate-950 rounded-2xl mb-6 overflow-hidden border border-slate-800">
                  <img src="/team/ulli-schmehl.jpg" alt="Ulli Schmehl" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Ulli Schmehl</h3>
                <p className="text-blue-400 font-semibold text-sm mb-4">Senior Partner sureNEO</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  ZF, Magna, ThyssenKrupp, Brusa CH ve Linde AG bünyesinde 20 yılı aşkın mekatronik ürün geliştirme, ASIL-D konfigürasyon yönetimi ve PALM araç zinciri uzmanlığı.
                </p>
              </div>
              <div className="text-xs text-slate-500 font-mono">Uzmanlık: DevOps, ISO 29110, System Architecture</div>
            </div>
          </div>
        </div>

        {/* MİSYON & TESCİLLER */}
        <div className="bg-slate-900/60 border border-slate-800 p-10 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-4">Kurumsal Kimlik ve Yasal Yapı</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Şirketimiz, T.C. Sanayi ve Teknoloji Bakanlığı tarafından verilen <strong>Teknogirişim Rozeti</strong> (Belge Sıra No: 2026-1348) sahibidir ve 4691 sayılı Kanun kapsamında Bilişim Vadisi / Teknopol TGB (Teknoloji Geliştirme Bölgesi) vergi ve %0 KDV muafiyeti altyapısı ile faaliyetlerini yürütmektedir.
          </p>
          <div className="text-xs text-slate-400">
            <strong>Resmi Unvan:</strong> BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LİMİTED ŞİRKETİ <br/>
            <strong>Vergi Kimlik No:</strong> 1660399683
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
`;

fs.writeFileSync(path.join(appDir, 'about', 'page.tsx'), aboutPageCode.trim(), 'utf8');

console.log("🎉 Lider kadro başarıyla güncellendi (Sadece Ayhan Önal ve Ulli Schmehl)!");
'@ -Encoding UTF8; node fix-team-and-company.js; npm run build; vercel --prod