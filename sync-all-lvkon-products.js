const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const appDir = path.join(rootDir, 'src', 'app', '[lang]');

console.log("🔋 Tüm Lvkon PDF Kataloğu (50+ Ürün Modeli) Kodlanıyor...");

const lvkonPageCode = `
'use client';

import React, { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LvkonPage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = use(params);

  const productCategories = [
    {
      title: "1. AMT'li Saf Elektrikli Sistemler (TED Serisi)",
      badge: "BEV Otobüs & Kamyon",
      items: [
        { code: "TED1020", app: "4.5-6t Kamyon", trans: "2-Vitesli (2.7/1)", power: "55/120 kW", torque: "170/380 Nm", maxTorque: "1.026 Nm" },
        { code: "TED1360", app: "4.5-7t Kamyon", trans: "2-Vitesli (2.73/1)", power: "60/120 kW", torque: "300/500 Nm", maxTorque: "1.365 Nm" },
        { code: "TED2330S", app: "7-12t Kamyon", trans: "2-Vitesli (2.741/1)", power: "75/120 kW", torque: "350/850 Nm", maxTorque: "2.330 Nm" },
        { code: "TED3010S", app: "8-10m Yolcu & 10m Halk Otobüsü, 11-14t Kamyon", trans: "2-Vitesli (2.741/1)", power: "80/160 kW", torque: "500/1100 Nm", maxTorque: "3.015 Nm" },
        { code: "TED3380S", app: "10m Yolcu & 12m Halk Otobüsü (Amiral Gemisi)", trans: "2-Vitesli (2.741/1)", power: "120/185 kW", torque: "500/1300 Nm", maxTorque: "3.380 Nm" }
      ]
    },
    {
      title: "2. Schwerlast / Ağır Hizmet Elektrikli Sistemler (HTED & STED Serisi)",
      badge: "Ağır Hizmet Kamyon & Maden",
      items: [
        { code: "STED7000S", app: "14-18t Kamyon & Özel Amaçlı Araçlar", trans: "4-Vitesli (6.61/3.52/1.89/1)", power: "100/185 kW", torque: "500/1100 Nm", maxTorque: "7.000 Nm" },
        { code: "HTED16000", app: "25-30t Ağır Hizmet Kamyonu", trans: "4-Vitesli (8.39/3.54/1.74/1)", power: "250/380 kW", torque: "1200/2400 Nm", maxTorque: "16.360 Nm" },
        { code: "HTED20000L", app: "35-60t Ağır Hizmet Kamyonu", trans: "4-Vitesli (8.39/3.54/1.74/1)", power: "180/300 kW", torque: "850/1950 Nm", maxTorque: "20.136 Nm" },
        { code: "HTED20000L2", app: "31-49t Ağır Hizmet Kamyonu", trans: "4-Vitesli (8.39/3.54/1.741/1)", power: "270/405 kW", torque: "1500/2400 Nm", maxTorque: "20.136 Nm" },
        { code: "HTED20000H", app: "60-90t Ağır Hizmet Kamyonu", trans: "4-Vitesli (8.39/3.54/1.741/1)", power: "300/450 kW", torque: "1500/2400 Nm", maxTorque: "20.136 Nm" },
        { code: "HTED22000", app: "50-70t Ağır Hizmet Kamyonu", trans: "4-Vitesli (8.39/3.54/1.741)", power: "280/420 kW", torque: "1500/2600 Nm", maxTorque: "21.814 Nm" },
        { code: "HTED24000L / H", app: "70-100t Ağır Hizmet Kamyonu", trans: "4-Vitesli (8.67/4.57/2.29/1)", power: "315-360 kW", torque: "1650-1800 Nm", maxTorque: "24.276 Nm" }
      ]
    },
    {
      title: "3. İş Makineleri Elektrikli Sistemleri (NTED Serisi)",
      badge: "Radlader & Yükleyici",
      items: [
        { code: "NTED6500", app: "5-6t Yükleyici / Radlader", trans: "2-Vitesli (5.43/1.95)", power: "140/200 kW", torque: "440/1200 Nm", maxTorque: "6.516 Nm" },
        { code: "NTED7500", app: "7t Yükleyici / İş Makinesi", trans: "2-Vitesli (5.43/1.95)", power: "158/340 kW", torque: "540/1382 Nm", maxTorque: "7.500 Nm" }
      ]
    },
    {
      title: "4. Kesintisiz Çift Motorlu Tam Elektrikli Sistemler (CED Serisi)",
      badge: "Maden Kamyonları",
      items: [
        { code: "CED20000 (55-90t)", app: "55-90 Ton Ağır Hizmet Kamyonu", trans: "Çift Motor (8.39/1.74 & 3.54/1)", power: "150/270 kW", torque: "750/1500 Nm", maxTorque: "20.136 Nm" },
        { code: "CED20000 (90-120t)", app: "90-120 Ton Maden Kamyonu", trans: "Çift Motor 3-Vitesli", power: "210/350 kW", torque: "1100/1800 Nm", maxTorque: "21.420 Nm" },
        { code: "CED34000", app: "120-180 Ton Maden Kamyonu", trans: "Çift Motor 3-Vitesli", power: "270/400 kW", torque: "1200/2400 Nm", maxTorque: "34.632 Nm" }
      ]
    },
    {
      title: "5. Elektrikli Sürüş Aksları (STEA E-Axle Series)",
      badge: "Entegre E-Aks",
      items: [
        { code: "STEA5300Z / 6640Z", app: "3.5t - 4.5t Hafif Kamyon & 6m Otobüs", trans: "Tek Kademeli Redüksiyon (16.67:1)", power: "80/160 kW", torque: "175/400 Nm", maxTorque: "6.640 Nm" },
        { code: "STEA9000Z / 10000Z", app: "5t - 6t Lojistik Kamyonu", trans: "2-Vitesli (22.6/10.0)", power: "100/200 kW", torque: "220/440 Nm", maxTorque: "10.000 Nm" },
        { code: "STEA16000Z", app: "9t - 13t Treyler & Otobüs", trans: "2-Vitesli / 1-Vitesli", power: "107/234 kW", torque: "250/570 Nm", maxTorque: "16.500 Nm" },
        { code: "STEA26000Z - STEA45000Z", app: "6x4 & 4x2 Ağır Kamyonlar", trans: "2, 4 ve Çift Motorlu 6-Vitesli", power: "150/252 kW x2", torque: "380 Nm x2", maxTorque: "45.000 Nm" }
      ]
    },
    {
      title: "6. Hibrit Güç Aktarma Sistemleri (PHD, MHD, CHD)",
      badge: "Parallel & Power-Split Hybrid",
      items: [
        { code: "PHD3300 / PHD6300", app: "4.5t - 25t Kamyon & Otobüs (Paralel Hibrit)", trans: "6-Vitesli AMT", power: "60-135 kW E-Motor", torque: "1000 Nm", maxTorque: "6.300 Nm" },
        { code: "PHD29000 (G/E/B)", app: "25t - 60t Mikser & Ağır Çekici", trans: "12-Vitesli AMT", power: "105/200 kW E-Motor", torque: "1400 Nm", maxTorque: "29.040 Nm" },
        { code: "MHD3500 / MHD4500", app: "10.5m - 18m Körüklü Otobüs (Seri-Paralel)", trans: "2-Vitesli AMT", power: "ISG + TM Çift Motor", torque: "2800 Nm", maxTorque: "4.500 Nm" },
        { code: "CHD1600 - CHD36000", app: "4.5t - 160t Damperli & Maden (4DHT / 8DHT)", trans: "Çift Girişli DHT", power: "310 kW TM + 180 kW ISG", torque: "2100 Nm", maxTorque: "36.000 Nm" }
      ]
    },
    {
      title: "7. Tahrik Motorları & Jeneratörler (DM & IM Serileri)",
      badge: "PMSM Su Soğutmalı",
      items: [
        { code: "DM500 - DM1000", app: "3.5t - 4.5t Hafif Kamyon, Sprinter, Havaalanı Çekicisi", trans: "PMSM Motor", power: "60-130 kW", torque: "300-1000 Nm", maxTorque: "5.000 RPM" },
        { code: "DM1100 - DM2800", app: "6.6m - 12m Halk ve Şehirlerarası Yolcu Otobüsleri", trans: "PMSM Motor", power: "80-275 kW", torque: "1100-2800 Nm", maxTorque: "4.500 RPM" },
        { code: "DM3400 - DM5000", app: "45t Konteyner İstifleyici, Terminal Çekici & 18t Çöp Kamyonu", trans: "PMSM Motor", power: "200-400 kW", torque: "1800-5000 Nm", maxTorque: "3.000 RPM" },
        { code: "IM075H37 - IM200H46", app: "Hidrojen Fuel Cell & Hibrit Jeneratörler", trans: "540V - 600V Jeneratör", power: "100-318 kW Peak", torque: "750-2030 Nm", maxTorque: "1.500 RPM" }
      ]
    },
    {
      title: "8. Şanzıman Sistemleri (J Serisi Nutzfahrzeug Getriebe)",
      badge: "AMT & Manuel Şanzımanlar",
      items: [
        { code: "J5S20 / J5S25 / J6S46 / J6S54A", app: "2.5t - 9t Hafif ve Orta Ticari Araçlar", trans: "5-Gang / 6-Gang Manuel", power: "Giriş Torku: 196-540 Nm", torque: "3000 RPM", maxTorque: "100 kg Ağırlık" },
        { code: "J6S95 / J12S240 / J12S240B", app: "10-12m Otobüsler, 14-18t Kamyonlar & Çekiciler", trans: "6-Gang / 12-Gang AMT", power: "Giriş Torku: 950-2400 Nm", torque: "3000 RPM", maxTorque: "302 kg Ağırlık" },
        { code: "J8S240A / J8S260A / J8S280A", app: "80t - 125t Maden Kamyonları (Ağır Hizmet)", trans: "8-Gang Maden Tipi", power: "Giriş Gücü: 400-480 kW", torque: "Giriş Torku: 2800 Nm", maxTorque: "705 kg Ağırlık" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-orange-600 selection:text-white">
      <Navbar lang={lang} />

      <section className="pt-36 pb-16 px-6 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-semibold text-xs mb-6 uppercase tracking-widest">
          Türkiye Yetkili Mühendislik & Satış Partneri (Resmi Katalog)
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
          Lvkon <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">E-Mobility</span> Eksiksiz Ürün Kataloğu
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
          24 Ülkede 160.000+ araçta çalışan tüm elektrikli akslar, motorlar, şanzımanlar ve hibrit sistemler (PDF Kataloğu Tam Listesi).
        </p>
      </section>

      <section className="pb-32 px-6 max-w-7xl mx-auto space-y-16">
        {productCategories.map((group, idx) => (
          <div key={idx} className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">{group.title}</h2>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-orange-400 text-xs font-semibold">
                {group.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((item, i) => (
                <div key={i} className="bg-slate-900/80 border border-slate-800 hover:border-orange-500/40 transition-all rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-orange-400 text-xs font-bold uppercase tracking-wider block mb-1">{item.app}</span>
                    <h3 className="text-xl font-extrabold text-white mb-3">{item.code}</h3>
                    
                    <div className="space-y-1.5 text-xs text-slate-300 mb-6 font-mono bg-slate-950 p-4 rounded-xl border border-slate-850">
                      <div><strong className="text-slate-500">Şanzıman/Yapı:</strong> {item.trans}</div>
                      <div><strong className="text-slate-500">Güç:</strong> {item.power}</div>
                      <div><strong className="text-slate-500">Tork:</strong> {item.torque}</div>
                      <div><strong className="text-slate-500">Max Çıkış:</strong> {item.maxTorque}</div>
                    </div>
                  </div>

                  <Link 
                    href={`/${lang}/contact?service=lvkon&product=${item.code}`} 
                    className="w-full bg-orange-600 hover:bg-orange-500 text-white text-center py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Teknik Şartname & Fiyat İsteyin →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer lang={lang} />
    </div>
  );
}
