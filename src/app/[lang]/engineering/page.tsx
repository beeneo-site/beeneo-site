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
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-semibold text-xs mb-6 uppercase tracking-widest">Mühendislik & Danışmanlık</div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Stratejik <span className="text-blue-500">Yetkinlik</span> İnşası</h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-12">Alman mühendislik disiplinini Türkiye saha tecrübesiyle birleştiriyoruz. ASPICE Seviye 3, ISO 26262 ASIL-D ve ISO 21434 standartlarında uzman kadro.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">ASPICE & Süreç Mükemmelliği</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">ASPICE Seviye 3 denetimlerinde %85 ilk seferde tam başarı oranı. Süreç boşluk analizi (Process Gap Analysis) ve toolchain optimizasyonu.</p>
            <ul className="text-xs text-slate-300 space-y-2">
              <li>• CMMI L3 & ISO 29110 Süreç Mimarisi</li>
              <li>• PLM / ALM / DevOps Araç Zinciri Entegrasyonu</li>
            </ul>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">ISO 26262 & ISO 21434</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">Gömülü yazılım ve donanım projelerinde Fonksiyonel Güvenlik (ASIL D) ve Siber Güvenlik entegrasyonu.</p>
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