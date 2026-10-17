import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return [{ lang: "de" }, { lang: "en" }, { lang: "tr" }];
}

export default async function AboutPage({ params }: { params: Promise<{ lang: "de" | "en" | "tr" }> }) {
  const { lang } = await params;

  const team = [
    { name: "Ayhan Önal", role: "Kurucu / Tech-CEO", desc: "Senior System Architect ve F&E Yöneticisi (>20 Yıl Otomotiv, OEM ve Tier-1 Deneyimi). Smart Lean Management geliştiricisi. ASPICE L3, ISO 26262 ve ISO 21434 uzmanı.", img: "/team/ayhan-onal.jpg" },
    { name: "Ulli Schmehl", role: "Global Strateji & Mühendislik", desc: "Süreç Geliştirme Uzmanı (>20 Yıl Automotive, Tier-1 Deneyimi: ZF, Magna, ThyssenKrupp, Linde AG). ISO 29110 ve sistem mimarisi uzmanı.", img: "/team/ulli-schmehl.jpg" },
    { name: "Maksim Rybakov", role: "Teknik Tasarım & Sistem Entegrasyonu", desc: "Uygulama Geliştirme, Gömülü Sistemler ve Sistem Mimarisi Sorumlusu.", img: "/team/maksim.jpg" },
    { name: "Zümrüt Batur", role: "Dokümantasyon & TGB Sorumlusu", desc: "Proje Satınalma, Proje Muhasebe, Kalite Dokümantasyonu ve TGB Operasyon Sorumlusu.", img: "/team/zumrut.jpg" },
    { name: "Hatice B. Önal", role: "Kurucu Ortak / Yönetici", desc: "Finans, Operasyon, Stratejik Büyüme Yönetimi ve Test Koordinatörü.", img: "/team/hatice.jpg" }
  ];

  const ownProducts = [
    { name: "mesafeRAY", desc: "Otonom raylı/aktüatör güdümlü, yapay zeka nesne tanıma destekli UV-C sterilizasyon sistemi.", icon: "🛡️", cp: "Patent / Faydalı Model: 2020/11546" },
    { name: "NEObist", desc: "Bisikletleri E-Bike'a dönüştüren akıllı dönüşüm kiti (Pedelec Conversion Kit). Entegre BMS, Çift İnvertör ve CAN-Bus.", icon: "🚴", cp: "Patent / Faydalı Model: 2023/014188" },
    { name: "NEOflasher", desc: "Ergonomik 3D gövdeye sahip donanım ve yazılım destekli mekatronik test/flasher cihazı.", icon: "⚡", cp: "Endüstriyel Tasarım: 2021/013728 & 2023/003287" },
    { name: "sureNEO LOS", desc: "Açık kaynaklı ERP/CRM, PDM ve BPM sistemlerini birleştiren Lean UBOS (Universal Business Operating System) destekli akıllı yalın yönetim platformu.", icon: "📊", cp: "TÜBİTAK 1501 Ar-Ge Projesi" }
  ];

  const references = [
    "Karluna Mühendislik (L7 EV)", "Rheinmetall Electronics", "Arçelik", "BorgWarner / TE / Schaeffler", "Joyson / Preh", "TOGG / Döktaş",
    "Hanon Systems / TAI / Vaillant", "Rieter", "Brusa", "Volkswagen AG", "OSRAM", "Hyundai Mobis", "Continental", "Valeo",
    "MBTech (Kiekert)", "MAN Truck & Bus", "ZF TRW", "Bombardier (Primove)", "Magna Powertrain", "Delphi Automotive",
    "GKN Driveline", "aoloa-Engineering", "Webasto", "Daimler AG", "Lear Corporation"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar lang={lang} />
      <main className="pt-36 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* KURUMSAL KİMLİK */}
        <div className="mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-semibold text-xs mb-6 uppercase tracking-widest">
              T.C. Sanayi ve Teknoloji Bakanlığı Teknogirişim Rozeti Sahibi (Belge No: 2026-1348)
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Hakkımızda & <span className="text-blue-500">Kurumsal Kimlik</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed mb-6">
              <strong>BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LİMİTED ŞİRKETİ</strong> çatısı altında (Vergi No: 1660399683), 4691 Sayılı Kanun kapsamında Teknoloji Geliştirme Bölgesi (TGB) %0 KDV muafiyeti altyapısı ile faaliyet göstermekteyiz.
            </p>
            <p className="text-lg text-slate-400 max-w-4xl leading-relaxed">
              2016'da Türkiye'de kurulan beeNEO, köklerini Almanya Ar-Ge ekosisteminden alarak Alman mühendislik disiplinini Türkiye'nin mobilite ve yüksek teknoloji dönüşümüyle buluşturmaktadır.
            </p>
        </div>

        {/* LİDER KADRO */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 border-b border-slate-800 pb-4">Yönetim ve Mühendislik Kadromuz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-semibold text-xs mb-4">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ÜRÜNLER & İNOVASYON */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-slate-800 pb-4">Kendi Geliştirdiğimiz F&E Ürünleri (Patent & İnovasyon)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ownProducts.map((prod, idx) => (
                    <div key={idx} className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl">
                        <div className="text-4xl mb-4">{prod.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{prod.name}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">{prod.desc}</p>
                        <div className="text-xs font-mono text-slate-500 bg-slate-950 p-3 rounded-xl border border-slate-800">
                            {prod.cp}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* REFERANSLAR */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-slate-800 pb-4">Saha Tecrübesi & Referans Projeler (Tier-1 / OEM)</h2>
            <div className="flex flex-wrap gap-3 bg-slate-950 border border-slate-800 p-8 rounded-3xl">
                {references.map((ref, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-semibold text-slate-300">
                        {ref}
                    </span>
                ))}
            </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}