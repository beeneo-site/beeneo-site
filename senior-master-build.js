const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();
const rootDir = __dirname;
const appDir = path.join(rootDir, 'src', 'app', '[lang]');

console.log("🚀 Senior Web Architect: 3 Dilli Tam Teşekküllü Platform Derleniyor...");

// 1. DICTIONARIES (TR, DE, EN)
const dictDir = path.join(rootDir, 'src', 'dictionaries');
fs.mkdirSync(dictDir, { recursive: true });

const trDict = {
  nav: { engineering: "Mühendislik", sureneo: "sureNEO YYS", lvkon: "Lvkon E-Mobilite", about: "Hakkımızda", career: "Kariyer", blog: "Blog & Medya", contact: "İletişim" },
  hero: {
    badge: "BERRİN ERDEN NEO MÜHENDİSLİK | TÜBİTAK 1501 & TGB STATÜSÜ",
    title: "Mühendislik. Yalın Yönetim. E-Mobilite.",
    subtitle: "50 yılı aşkın Mercedes, BMW, ZF ve Bosch tecrübesiyle otomotiv ve yüksek teknoloji sektöründe süreç mükemmelliği ve güç aktarım çözümleri.",
    ctaPrimary: "Proje Başlat",
    ctaSecondary: "Kurumsal Profil"
  },
  stats: {
    exp: "50+ Yıl", expSub: "OEM & Tier-1 Saha Tecrübesi",
    audit: "%85", auditSub: "ASPICE L3 İlk Audit Başarısı",
    cost: "%40", costSub: "Tool2Tax Lisans Tasarrufu",
    fleet: "160K+", fleetSub: "Lvkon Global Sahada Kullanılan Araç"
  }
};

const deDict = {
  nav: { engineering: "Engineering", sureneo: "sureNEO LOS", lvkon: "Lvkon E-Mobility", about: "Über Uns", career: "Karriere", blog: "Blog & Media", contact: "Kontakt" },
  hero: {
    badge: "BERRİN ERDEN NEO MÜHENDİSLİK | TÜBİTAK 1501 & TGB STATUS",
    title: "Engineering. Lean Management. E-Mobility.",
    subtitle: "Prozessexzellenz und Antriebslösungen mit über 50 Jahren Praxisnähe bei Mercedes, BMW, ZF und Bosch.",
    ctaPrimary: "Projekt Starten",
    ctaSecondary: "Unternehmensprofil"
  },
  stats: {
    exp: "50+ Jahre", expSub: "OEM & Tier-1 Praxiserfahrung",
    audit: "85%", auditSub: "ASPICE L3 Erst-Audit Ersterfolg",
    cost: "40%", costSub: "Tool2Tax Lizenzersparnis",
    fleet: "160K+", fleetSub: "Lvkon Global im Field-Einsatz"
  }
};

const enDict = {
  nav: { engineering: "Engineering", sureneo: "sureNEO LOS", lvkon: "Lvkon E-Mobility", about: "About Us", career: "Career", blog: "Blog & Media", contact: "Contact" },
  hero: {
    badge: "BERRİN ERDEN NEO MÜHENDİSLİK | TÜBİTAK 1501 & TGB STATUS",
    title: "Engineering. Lean Management. E-Mobility.",
    subtitle: "Process excellence and powertrain solutions powered by over 50 years of Tier-1/OEM experience at Mercedes, BMW, ZF, and Bosch.",
    ctaPrimary: "Start Project",
    ctaSecondary: "Company Profile"
  },
  stats: {
    exp: "50+ Years", expSub: "OEM & Tier-1 Field Expertise",
    audit: "85%", auditSub: "ASPICE L3 First-Pass Audit Success",
    cost: "40%", costSub: "Tool2Tax License Cost Reduction",
    fleet: "160K+", fleetSub: "Lvkon Vehicles Active Globally"
  }
};

fs.writeFileSync(path.join(dictDir, 'tr.json'), JSON.stringify(trDict, null, 2));
fs.writeFileSync(path.join(dictDir, 'de.json'), JSON.stringify(deDict, null, 2));
fs.writeFileSync(path.join(dictDir, 'en.json'), JSON.stringify(enDict, null, 2));

fs.writeFileSync(path.join(dictDir, 'getDictionary.ts'), `
import 'server-only';
const dictionaries = {
  de: () => import('./de.json').then((m) => m.default),
  en: () => import('./en.json').then((m) => m.default),
  tr: () => import('./tr.json').then((m) => m.default),
};
export const getDictionary = async (locale: 'de' | 'en' | 'tr') => {
  return dictionaries[locale]?.() ?? dictionaries.tr();
};
`);

// 2. NAVBAR KOMPONENTE
const compDir = path.join(rootDir, 'src', 'components');
fs.mkdirSync(compDir, { recursive: true });

fs.writeFileSync(path.join(compDir, 'Navbar.tsx'), `
'use client';
import React from 'react';
import Link from 'next/link';

export default function Navbar({ lang, dict }: { lang: string; dict?: any }) {
  const n = dict?.nav || {
    engineering: "Mühendislik", sureneo: "sureNEO YYS", lvkon: "Lvkon E-Mobilite",
    about: "Hakkımızda", career: "Kariyer", blog: "Blog & Medya", contact: "İletişim"
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={\`/\${lang}\`} className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
          <span className="text-blue-500">bee</span>NEO
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link href={\`/\${lang}/engineering\`} className="hover:text-blue-400 transition-colors">{n.engineering}</Link>
          <Link href={\`/\${lang}/sureneo\`} className="hover:text-green-400 transition-colors">{n.sureneo}</Link>
          <Link href={\`/\${lang}/lvkon\`} className="hover:text-orange-400 transition-colors">{n.lvkon}</Link>
          <Link href={\`/\${lang}/about\`} className="hover:text-white transition-colors">{n.about}</Link>
          <Link href={\`/\${lang}/career\`} className="hover:text-white transition-colors">{n.career}</Link>
          <Link href={\`/\${lang}/blog\`} className="hover:text-white transition-colors">{n.blog}</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex text-xs font-bold bg-slate-900 border border-slate-800 rounded-lg p-1">
            <Link href="/tr" className={\`px-2 py-1 rounded \${lang === 'tr' ? 'bg-blue-600 text-white' : 'text-slate-400'}\`}>TR</Link>
            <Link href="/de" className={\`px-2 py-1 rounded \${lang === 'de' ? 'bg-blue-600 text-white' : 'text-slate-400'}\`}>DE</Link>
            <Link href="/en" className={\`px-2 py-1 rounded \${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400'}\`}>EN</Link>
          </div>
          <Link href={\`/\${lang}/contact\`} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/30">
            {n.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
`);

// 3. FOOTER KOMPONENTE WITH OFFICIAL COMPANY NAME
fs.writeFileSync(path.join(compDir, 'Footer.tsx'), `
'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer({ lang }: { lang: string }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href={\`/\${lang}\`} className="text-2xl font-black text-white flex items-center gap-1 mb-4">
            <span className="text-blue-500">bee</span>NEO
          </Link>
          <p className="text-xs leading-relaxed font-medium text-slate-300">
            BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LİMİTED ŞİRKETİ
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Ar-Ge: Bilişim Vadisi, Gebze / Kocaeli <br/>
            Genel Merkez: Üsküdar / İstanbul
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Sütunlar / Pillars</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={\`/\${lang}/engineering\`} className="hover:text-white">Engineering & ASPICE L3</Link></li>
            <li><Link href={\`/\${lang}/sureneo\`} className="hover:text-white">sureNEO YYS & FaaS Lean</Link></li>
            <li><Link href={\`/\${lang}/lvkon\`} className="hover:text-white">Lvkon E-Mobility Powertrain</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Kurumsal / Corporate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={\`/\${lang}/about\`} className="hover:text-white">Hakkımızda & Lead Team</Link></li>
            <li><Link href={\`/\${lang}/career\`} className="hover:text-white">Kariyer & Freelancer</Link></li>
            <li><Link href={\`/\${lang}/blog\`} className="hover:text-white">Marblism Medya & Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Uyum & Güvenlik</h4>
          <p className="text-xs leading-relaxed mb-4">
            KVKK ve GDPR Standartlarında Veri Güvenliği Altyapısı. TÜBİTAK 1501 & TGB Statüsü.
          </p>
          <Link href={\`/\${lang}/contact\`} className="inline-block bg-slate-900 border border-slate-700 hover:border-blue-500 text-white px-4 py-2 rounded-lg text-xs font-bold">
            İletişim / Contact →
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 text-xs text-center text-slate-500">
        © 2026 BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LİMİTED ŞİRKETİ. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
`);

console.log("✨ Senior Master Skripti Hazırlandı! Build & Vercel Dağıtımı Başlatılıyor...");
