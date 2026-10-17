const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();
const rootDir = __dirname;
const appDir = path.join(rootDir, 'src', 'app', '[lang]');

console.log("🚀 Resmi Tesciller, Teknogirişim Rozeti ve Proje Portföyü Entegre Ediliyor...");

// 1. TAM TÜRKÇE SÖZLÜK (TR ONLY)
const dictDir = path.join(rootDir, 'src', 'dictionaries');
fs.mkdirSync(dictDir, { recursive: true });

const trDict = {
  nav: {
    engineering: "Mühendislik",
    sureneo: "sureNEO LOS",
    lvkon: "Lvkon E-Mobilite",
    about: "Hakkımızda",
    career: "Kariyer",
    blog: "Blog & Medya",
    contact: "İletişim"
  },
  hero: {
    badge: "T.C. SANAYİ VE TEKNOLOJİ BAKANLIĞI TEKNOGİRİŞİM ROZETİ SAHİBİ | TGB %0 KDV MUAFİYETİ",
    title: "Mühendislik. Yalın Yönetim. E-Mobilite.",
    subtitle: "50 yılı aşkın Mercedes, BMW, ZF, Continental ve Siemens DISW partnerlik tecrübesiyle otomotiv, havacılık ve savunma sanayiinde süreç mükemmelliği ve güç aktarım çözümleri.",
    ctaPrimary: "Proje Başlat",
    ctaSecondary: "Kurumsal Portföy"
  },
  stats: {
    exp: "50+ Yıl", expSub: "OEM ve Tier-1 Saha Tecrübesi",
    audit: "%85", auditSub: "ASPICE Seviye 3 İlk Audit Başarısı",
    cost: "%40", costSub: "Tool2Tax Lisans Tasarrufu",
    fleet: "160B+", fleetSub: "Lvkon Sahada Aktif Araç Sayısı"
  }
};

fs.writeFileSync(path.join(dictDir, 'tr.json'), JSON.stringify(trDict, null, 2));
fs.writeFileSync(path.join(dictDir, 'de.json'), JSON.stringify(trDict, null, 2));
fs.writeFileSync(path.join(dictDir, 'en.json'), JSON.stringify(trDict, null, 2));

fs.writeFileSync(path.join(dictDir, 'getDictionary.ts'), `
import 'server-only';
const dictionaries = {
  de: () => import('./tr.json').then((m) => m.default),
  en: () => import('./tr.json').then((m) => m.default),
  tr: () => import('./tr.json').then((m) => m.default),
};
export const getDictionary = async (locale: 'de' | 'en' | 'tr') => {
  return dictionaries[locale]?.() ?? dictionaries.tr();
};
`);

// 2. FOOTER (RESMİ BİLGİLERLE)
const compDir = path.join(rootDir, 'src', 'components');
fs.mkdirSync(compDir, { recursive: true });

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
          <p className="text-xs leading-relaxed font-medium text-slate-300 mb-2">
            BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LİMİTED ŞİRKETİ
          </p>
          <p className="text-xs text-slate-400 mb-1">
            <strong>E-Posta:</strong> <a href="mailto:info@beeneo.biz" className="text-blue-400 underline">info@beeneo.biz</a>
          </p>
          <p className="text-xs text-slate-500">
            T.C. Sanayi ve Teknoloji Bakanlığı Teknogirişim Rozeti Belge No: 2026-1348 (4691 Sayılı Kanun TGB %0 KDV Muafiyeti)
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Çözümlerimiz</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={\`/\${lang}/engineering\`} className="hover:text-white">Mühendislik ve ASPICE L3</Link></li>
            <li><Link href={\`/\${lang}/sureneo\`} className="hover:text-white">sureNEO LOS ve FaaS Lean</Link></li>
            <li><Link href={\`/\${lang}/lvkon\`} className="hover:text-white">Lvkon E-Mobilite Güç Aktarımı</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Kurumsal ve Referanslar</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={\`/\${lang}/about\`} className="hover:text-white">Hakkımızda ve Lider Kadro</Link></li>
            <li><Link href={\`/\${lang}/career\`} className="hover:text-white">Kariyer ve Serbest Çalışanlar</Link></li>
            <li><Link href={\`/\${lang}/blog\`} className="hover:text-white">Blog ve Medya</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Lokasyonlarimiz</h4>
          <p className="text-xs text-slate-400 mb-2 leading-relaxed">
            <strong>Genel Merkez:</strong> Pembegül Sk. No: 7/8, Üsküdar / İstanbul <br/>
            <strong>Ar-Ge Merkezleri:</strong> Bilişim Vadisi (Gebze) & Teknopol TGB (Pendik)
          </p>
          <Link href={\`/\${lang}/contact\`} className="inline-block mt-2 bg-slate-900 border border-slate-700 hover:border-blue-500 text-white px-4 py-2 rounded-lg text-xs font-bold">
            İletişime Geçin →
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

console.log("✨ Master Güncelleme Tamamlandı! Derleme Yapılıyor...");
