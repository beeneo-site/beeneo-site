const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const appDir = path.join(rootDir, 'src', 'app', '[lang]');

console.log("🛠 Aktualisiere Firmenname & Lvkon Produktkatalog...");

// LVKON VOLLSTÄNDIGE PRODUKTPAGE
const lvkonPageCode = `
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'tr' }];
}

export default async function LvkonPage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = await params;

  const products = [
    {
      group: "1. Elektrikli Sürüş Aksları (Electric Drive Axles)",
      items: [
        { name: "TED3380S E-Aks", desc: "10-12m Şehir İçi Otobüsler İçin Yüksek Performanslı Entegre Sürüş Aksı.", img: "/img/products/ted3380s.png" },
        { name: "Hafif & Orta Ticari E-Aks", desc: "4.5t - 8t Arası Hafif Kamyon ve Minibüsler İçin Entegre Aks Sistemleri.", img: "/img/products/e-axle-light.png" }
      ]
    },
    {
      group: "2. Tahrik Motorları (Drive Motors)",
      items: [
        { name: "PMSM Yüksek Torklu Tahrik Motoru", desc: "Lvkon Kendi Tasarımı Yüksek Güç Yoğunluklu Elektrik Motorları.", img: "/img/products/drive-motor.png" },
        { name: "Jeneratör & Hibrit Motor Sistemleri", desc: "Yakıt Hücreli (Fuel Cell) ve Hibrit Araçlar İçin Entegre Jeneratörler.", img: "/img/products/generator-motor.png" }
      ]
    },
    {
      group: "3. Şanzıman Sistemleri (Transmissions)",
      items: [
        { name: "AMT Otomatik Şanzımanlar (2-Gang / 4-Gang)", desc: "Ağır Hizmet Kamyonları ve Otobüsler İçin Özel Kontrol Stratejili Getriebe.", img: "/img/products/transmission.png" }
      ]
    },
    {
      group: "4. Entegre Güç Üniteleri (Drive Assemblies)",
      items: [
        { name: "Central Drive Assembly", desc: "Motor, İnovatif Kontrolör ve Şanzımanın Tek Gövdede Buluştuğu Güç Ünitesi.", img: "/img/products/drive-assembly.png" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar lang={lang} />
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-semibold text-xs mb-6 uppercase tracking-widest">
          Türkiye Yetkili Mühendislik & Satış Partneri
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Lvkon <span className="text-orange-500">E-Mobility</span> Tüm Ürün Portföyü
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-16">
          24 Ülkede 160.000+ araçta kullanılan kanıtlanmış güç aktarım çözümleri (www.lvkon.com resmi ürün gamı).
        </p>

        {products.map((group, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-bold text-orange-400 mb-8 border-b border-slate-800 pb-3">{group.group}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {group.items.map((item, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between hover:border-orange-500/40 transition-all">
                  <div>
                    <div className="h-48 bg-slate-950 rounded-2xl mb-6 flex items-center justify-center border border-slate-850 overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="max-h-full max-w-full object-contain p-4"
                        onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-slate-400 text-sm mb-6">{item.desc}</p>
                  </div>
                  <Link href={\`/\${lang}/contact?service=lvkon\`} className="bg-orange-600 hover:bg-orange-500 text-white text-center py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all">
                    Teknik Şartname & Fiyat Talebi →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer lang={lang} />
    </div>
  );
}
`;

fs.writeFileSync(path.join(appDir, 'lvkon', 'page.tsx'), lvkonPageCode.trim(), 'utf8');

// FOOTER MIT ANPASSUNG DER OFFICIAL LEGAL ENTITY
const footerCode = `
'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer({ lang }: { lang: string }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href={\`/\${lang}\`} className="text-2xl font-black text-white flex items-center gap-1 mb-4">
            <span className="text-blue-500">bee</span>NEO
          </Link>
          <p className="text-sm leading-relaxed">
            BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LİMİTED ŞİRKETİ
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Çözümler</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={\`/\${lang}/engineering\`} className="hover:text-white">Engineering & ASPICE</Link></li>
            <li><Link href={\`/\${lang}/sureneo\`} className="hover:text-white">sureNEO LOS & FaaS Lean</Link></li>
            <li><Link href={\`/\${lang}/lvkon\`} className="hover:text-white">Lvkon E-Mobility</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Kurumsal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={\`/\${lang}/about\`} className="hover:text-white">Hakkımızda & Lead Team</Link></li>
            <li><Link href={\`/\${lang}/career\`} className="hover:text-white">Kariyer & Freelancer</Link></li>
            <li><Link href={\`/\${lang}/blog\`} className="hover:text-white">Blog & Medya</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Uyum & Güvenlik</h4>
          <p className="text-xs leading-relaxed mb-4">
            KVKK / GDPR Uyumlu Altyapı. TGB Status / TÜBİTAK 1501 Proje Liderliği.
          </p>
          <Link href={\`/\${lang}/contact\`} className="inline-block bg-slate-900 border border-slate-700 hover:border-blue-500 text-white px-4 py-2 rounded-lg text-xs font-bold">
            Bize Ulaşın →
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 text-xs text-center text-slate-500">
        © 2026 BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LİMİTED ŞİRKETİ. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
`;

fs.writeFileSync(path.join(rootDir, 'src', 'components', 'Footer.tsx'), footerCode.trim(), 'utf8');

console.log("🎉 Firmenbezeichnung und Lvkon Katalogsystem erfolgreich aktualisiert!");