const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const appDir = path.join(rootDir, 'src', 'app', '[lang]');

console.log("🛠 Girişimci Belgesindeki Resmi Ekip Listesi Entegre Ediliyor...");

const aboutPageCode = `
import React, { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = use(params);

  const teamMembers = [
    {
      name: "Ayhan Önal",
      role: "Kurucu / Tech-CEO",
      desc: "Senior System Architect, F&E Yöneticisi. Otomotiv, OEM ve Tier-1 sektörlerinde 20 yılı aşkın kıdemli sistem mimarisi ve yazılım tecrübesi.",
      img: "/team/ayhan-onal.jpg"
    },
    {
      name: "Ulli Schmehl",
      role: "Global Strateji & Mühendislik",
      desc: "ZF, Magna, ThyssenKrupp, Brusa ve Linde AG bünyesinde 20 yılı aşkın mekatronik ürün geliştirme, ASIL-D ve süreç yönetimi uzmanlığı.",
      img: "/team/ulli-schmehl.jpg"
    },
    {
      name: "Maksim Rybakov",
      role: "Teknik Tasarım & Sistem Entegrasyonu",
      desc: "Gömülü sistemler, uygulama geliştirme ve sistem entegrasyon süreçleri sorumlusu.",
      img: "/team/maksim.jpg"
    },
    {
      name: "Zümrüt Batur",
      role: "Dokümantasyon & TGB Sorumlusu",
      desc: "Proje satınalma, proje muhasebesi, kalite dokümantasyonu ve TGB operasyonel süreç yönetimi.",
      img: "/team/zumrut.jpg"
    },
    {
      name: "Hatice B. Önal",
      role: "Kurucu Ortak / Yönetici",
      desc: "Finans, operasyon, stratejik büyüme yönetimi ve yazılım/test süreç koordinasyonu.",
      img: "/team/hatice.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar lang={lang} />
      <main className="pt-36 pb-24 px-6 max-w-7xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-semibold text-xs mb-6 uppercase tracking-widest">
          T.C. Sanayi ve Teknoloji Bakanlığı Teknogirişim Rozeti Sahibi (Belge No: 2026-1348)
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Hakkımızda & <span className="text-blue-500">Uzman Ekibimiz</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-16 leading-relaxed">
          BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LİMİTED ŞİRKETİ çatısı altında, Almanya Ar-Ge ekosisteminden gelen mühendislik disiplinini Türkiye'nin teknoloji odaklı büyüme hamlesiyle buluşturuyoruz.
        </p>

        {/* EKİP GRID */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 border-b border-slate-800 pb-4">Yönetim ve Mühendislik Kadromuz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="h-56 bg-slate-950 rounded-2xl mb-6 overflow-hidden border border-slate-800">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-semibold text-xs mb-4">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LOKASYONLAR */}
        <div className="bg-slate-900/60 border border-slate-800 p-10 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-6">Ofislerimiz ve Ar-Ge Merkezlerimiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <strong className="text-blue-400 block mb-2">Merkez Ofis</strong>
              Çengelköy / Üsküdar, İstanbul <br/> Pembegül Sk. No: 7/8
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <strong className="text-green-400 block mb-2">Ar-Ge Merkezimiz (TGB)</strong>
              Teknopol TGB, Pendik / İstanbul <br/> & Bilişim Vadisi, Gebze
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <strong className="text-purple-400 block mb-2">Almanya Operasyonu</strong>
              Düsseldorf, Almanya
            </div>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
`;

fs.writeFileSync(path.join(appDir, 'about', 'page.tsx'), aboutPageCode.trim(), 'utf8');

console.log("🎉 Ekip yapısı girişim belgesine uygun olarak tamamen yenilendi!");
