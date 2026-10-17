import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'tr' }];
}

export default async function CareerPage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = await params;
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar lang={lang} />
      <main className="pt-36 pb-24 px-6 max-w-7xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 font-semibold text-xs mb-6 uppercase tracking-widest">Kariyer & Freelancer Ekosistemi</div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Geleceğin <span className="text-purple-400">Teknoloji Projelerinde</span> Yer Alın</h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-12">BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LİMİTED ŞİRKETİ bünyesinde Senior Assessor, E-Mobilite Mühendisi veya Yazılım Güvenlik Uzmanı olarak bizimle çalışın.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Senior ASPICE Assessor</h3>
            <p className="text-xs text-slate-400 mb-4 font-mono">Uzaktan / Hibrit • Otomotiv</p>
            <p className="text-slate-300 text-sm">OEM ve Tier-1 projelerinde süreç olgunluğu denetimi ve ISO 29110 rehberliği.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-xl font-bold text-green-400 mb-2">E-Drive Güç Aktarım Mühendisi</h3>
            <p className="text-xs text-slate-400 mb-4 font-mono">İstanbul / Gebze • Lvkon Entegrasyon</p>
            <p className="text-slate-300 text-sm">TED3380S ve STEA e-aks sistemlerinin otobüs ve kamyon platformlarına entegrasyonu.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-purple-400 mb-2">ISO 26262 / 21434 Uzmanı</h3>
            <p className="text-xs text-slate-400 mb-4 font-mono">Proje Bazlı • ASIL D & TARA</p>
            <p className="text-slate-300 text-sm">Fonksiyonel güvenlik mimarisi oluşturma ve siber güvenlik risk analizi.</p>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}