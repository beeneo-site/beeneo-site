const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const appDir = path.join(projectRoot, 'src', 'app', '[lang]');

function writePage(subPath, content) {
  const targetDir = path.join(appDir, subPath);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'page.tsx'), content.trim(), 'utf8');
  console.log(`✓ Erstellt: src/app/[lang]/${subPath}/page.tsx`);
}

// 1. FOOTER KOMPONENTE
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
            Intelligent Lean Management & Process Excellence. Alman mühendislik disiplini ve yerel entegrasyon gücü.
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
            KVKK ve GDPR standartlarına uygun veri güvenliği altyapısı. TGB Status / TÜBİTAK 1501 Badge Holder.
          </p>
          <Link href={\`/\${lang}/contact\`} className="inline-block bg-slate-900 border border-slate-700 hover:border-blue-500 text-white px-4 py-2 rounded-lg text-xs font-bold">
            Bize Ulaşın →
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 text-xs text-center text-slate-500">
        © 2026 Berrin Erden NEO Mühendislik ve Danışmanlık Ltd. Şti. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
`;
fs.mkdirSync(path.join(projectRoot, 'src', 'components'), { recursive: true });
fs.writeFileSync(path.join(projectRoot, 'src', 'components', 'Footer.tsx'), footerCode.trim(), 'utf8');

// 2. PILLAR 1: ENGINEERING PAGE
writePage('engineering', `
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'tr' }];
}

export default async function EngineeringPage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = await params;
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar lang={lang} />
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-semibold text-xs mb-6 uppercase tracking-widest">
          Pillar 1: Engineering & Consultancy
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Stratejik <span className="text-blue-500">Yetkinlik</span> İnşası & Danışmanlık
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-12">
          Alman mühendislik disiplinini Türkiye saha tecrübesiyle birleştiriyoruz. ASPICE Seviye 3, ISO 26262 ASIL-D ve ISO 21434 standartlarında uzman kadro.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">ASPICE & Process Maturity</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              ASPICE Seviye 3 denetimlerinde %85 ilk seferde tam başarı oranı. Süreç boşluk analizi (Process Gap Analysis) ve toolchain optimizasyonu.
            </p>
            <ul className="text-xs text-slate-300 space-y-2">
              <li>• CMMI L3 & ISO 29110 Süreç Mimarisi</li>
              <li>• PLM / ALM / DevOps Araç Zinciri Entegrasyonu</li>
            </ul>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">ISO 26262 & ISO 21434</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Gömülü yazılım ve donanım projelerinde Fonksiyonel Güvenlik (ASIL D) ve Siber Güvenlik entegrasyonu.
            </p>
            <ul className="text-xs text-slate-300 space-y-2">
              <li>• TARA (Threat Analysis and Risk Assessment)</li>
              <li>• HIL Test & E/E Validasyon Desteği</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
`);

// 3. PILLAR 2: SURENEO PAGE
writePage('sureneo', `
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'tr' }];
}

export default async function SureneoPage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = await params;
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar lang={lang} />
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 font-semibold text-xs mb-6 uppercase tracking-widest">
          Technology Startup Badge Holder | TÜBİTAK 1501
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          sureNEO Lean Office Suite & <span className="text-green-500">FaaS Lean</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-12">
          Bürokrasi olmadan sertifikasyon. ISO, TISAX ve ASPICE uyumluluğunu mühendislik ekiplerinizin yaşayan işletim sistemine dönüştürüyoruz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-3xl font-black text-red-400 mb-2">%40</h3>
            <h4 className="text-lg font-bold text-white mb-2">İhale Kaybını Önleyin</h4>
            <p className="text-slate-400 text-sm">Kanıtlanamayan süreç olgunluğu yüzünden kaybedilen ihale ve OEM siparişlerine son verin.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-3xl font-black text-green-400 mb-2">Tool2Tax</h3>
            <h4 className="text-lg font-bold text-white mb-2">Lisans İsrafını Kesin</h4>
            <p className="text-slate-400 text-sm">Gereksiz döviz bazlı kullanıcı lisansı harcamalarını Tool2Tax analizi ile ortadan kaldırın.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-3xl font-black text-blue-400 mb-2">FaaS Lean</h3>
            <h4 className="text-lg font-bold text-white mb-2">Framework-as-a-Service</h4>
            <p className="text-slate-400 text-sm">ISO 29110 uyumlu, tak-çalıştır bulut altyapısı ile hızlı ve düşük riskli adaptasyon.</p>
          </div>
        </div>

        <div className="bg-slate-900 p-10 rounded-3xl border border-green-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">sureNEO Pilot Projesini Başlatın</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Düşük riskli pilot çalışmamızla 15 gün içinde süreç haritanızı çıkaralım.</p>
          <Link href={\`/\${lang}/contact?service=sureneo\`} className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold">
            Demo & Pilot Talep Et →
          </Link>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
`);

// 4. PILLAR 3: LVKON PAGE
writePage('lvkon', `
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'tr' }];
}

export default async function LvkonPage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = await params;
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar lang={lang} />
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-semibold text-xs mb-6 uppercase tracking-widest">
          Türkiye Yetkili Satış & Entegrasyon Partneri
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Lvkon <span className="text-orange-500">E-Mobility</span> Güç Aktarım Sistemleri
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-12">
          Yeni nesil ticari araçlar ve otobüsler için elektrikli sürüş aksları (E-Aks), yüksek torklu tahrik motorları ve şanzıman üniteleri.
        </p>

        <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-orange-400 font-bold text-sm uppercase">Amiral Gemisi Ürün</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">TED3380S Elektrikli Sürüş Aksı</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              10 ve 12 metrelik şehir içi toplu taşıma otobüsleri için özel olarak tasarlanmış entegre e-aks çözümü. Yüksek verimlilik, düşük toplam sahip olma maliyeti (TCO) ve kanıtlanmış saha dayanıklılığı.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-300 mb-6">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">Menzil & Verim: High-Yield</div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">Uygulama: 10-12m Otobüs</div>
            </div>
            <Link href={\`/\${lang}/contact?service=lvkon\`} className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-bold text-sm">
              Teknik Şartname & Fiyat İste →
            </Link>
          </div>
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center">
            <div className="text-5xl font-black text-orange-500 mb-2">160.000+</div>
            <div className="text-slate-300 font-bold text-lg mb-2">Global Araçta Kullanımda</div>
            <p className="text-slate-500 text-xs">24 ülkede aktif çalışan kanıtlanmış e-aks ve güç aktarım teknolojisi.</p>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
`);

// 5. ABOUT PAGE
writePage('about', `
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'tr' }];
}

export default async function AboutPage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = await params;
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar lang={lang} />
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Hakkımızda & <span className="text-blue-500">Lead Team</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-12">
          Berrin Erden NEO Mühendislik ve Danışmanlık Ltd. Şti. bünyesinde Alman mühendislik disiplinini Türkiye'nin teknoloji ekosistemiyle buluşturuyoruz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-2">Ayhan Önal</h3>
            <p className="text-blue-400 text-sm font-semibold mb-4">Lead Engineer & Kurucu</p>
            <p className="text-slate-400 text-sm">Smart Lean Management geliştiricisi, Lvkon Türkiye Partneri, PLM/ALM, ISO 26262 & 21434 Uzmanı.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-2">Ulli Schmehl</h3>
            <p className="text-blue-400 text-sm font-semibold mb-4">Senior Partner sureNEO</p>
            <p className="text-slate-400 text-sm">ZF, Magna, ThyssenKrupp ve Linde AG bünyesinde 20+ yıl mekatronik ürün geliştirme ve ASIL-D tecrübesi.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-2">Berrin Erden</h3>
            <p className="text-blue-400 text-sm font-semibold mb-4">Yönetici / Co-Founder</p>
            <p className="text-slate-400 text-sm">NEO Ltd. Şti. kurumsal yönetimi, TGB (Teknopark) ve TÜBİTAK 1501 süreç liderliği.</p>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
`);

console.log("🎉 Skript erfolgreich ausgeführt!");
