const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();
const rootDir = __dirname;

// 1. MEDIEN UND BILDER KOPIEREN
const sourceImg = path.join(homeDir, 'beeneo-platform', 'static', 'img');
const sourceVid = path.join(homeDir, 'beeneo-platform', 'static', 'videos');
const destPublic = path.join(rootDir, 'public');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

console.log("📸 Kopiere Logos, Team-Bilder und Medien...");
copyDirRecursive(sourceImg, path.join(destPublic, 'img'));
copyDirRecursive(sourceVid, path.join(destPublic, 'videos'));

// Ordner für Team & Logos sicherstellen
fs.mkdirSync(path.join(destPublic, 'team'), { recursive: true });
fs.mkdirSync(path.join(destPublic, 'logos'), { recursive: true });

// 2. SPRACH-DICTIONARIES (100% Sprachrein)
const dictTR = {
  nav: { engineering: "Mühendislik", sureneo: "sureNEO YYS", lvkon: "Lvkon E-Mobilite", about: "Hakkımızda", career: "Kariyer", blog: "Blog & Medya", contact: "İletişim" },
  hero: { badge: "TGB / TÜBİTAK 1501 Rozet Sahibi", title: "Mühendislik. Yalın Yönetim. E-Mobilite.", subtitle: "Alman mühendislik disiplini ve Türkiye'deki derin saha tecrübesi ile endüstriyel dönüşüm.", ctaPrimary: "Hemen Başvur", ctaSecondary: "beeNEO Hakkında" },
  lvkon: { title: "Lvkon E-Mobilite Ürün Ailesi", subtitle: "24 Ülkede 160.000+ Araçta Kanıtlanmış Güç Aktarım Teknolojileri", ted3380s: "TED3380S Elektrikli Sürüş Aksı (10-12m Otobüs)", motors: "Tahrik Motorları", trans: "Şanzıman Sistemleri", assembly: "Entegre Sürüş Üniteleri" }
};

const dictDE = {
  nav: { engineering: "Engineering", sureneo: "sureNEO LOS", lvkon: "Lvkon E-Mobility", about: "Über Uns", career: "Karriere", blog: "Blog & Media", contact: "Kontakt" },
  hero: { badge: "TGB / TÜBİTAK 1501 Badge Holder", title: "Engineering. Lean Management. E-Mobility.", subtitle: "Deutsche Ingenieursdisziplin kombiniert mit lokaler Integrationsstärke.", ctaPrimary: "Jetzt Anfragen", ctaSecondary: "Über beeNEO" },
  lvkon: { title: "Lvkon E-Mobility Produktfamilie", subtitle: "In 24 Ländern auf über 160.000 Fahrzeugen erprobte Antriebstechnik", ted3380s: "TED3380S E-Achse (10-12m Busse)", motors: "Antriebsmotoren", trans: "Getriebesysteme", assembly: "Integrierte Antriebseinheiten" }
};

const dictEN = {
  nav: { engineering: "Engineering", sureneo: "sureNEO LOS", lvkon: "Lvkon E-Mobility", about: "About Us", career: "Career", blog: "Blog & Media", contact: "Contact" },
  hero: { badge: "TGB / TÜBİTAK 1501 Badge Holder", title: "Engineering. Lean Management. E-Mobility.", subtitle: "German engineering rigor combined with deep local integration capability.", ctaPrimary: "Get in Touch", ctaSecondary: "About beeNEO" },
  lvkon: { title: "Lvkon E-Mobility Product Family", subtitle: "Proven Powertrain Solutions Active on 160,000+ Vehicles in 24 Countries", ted3380s: "TED3380S Electric Axle (10-12m Bus)", motors: "Drive Motors", trans: "Transmissions", assembly: "Integrated Assemblies" }
};

const dictDir = path.join(rootDir, 'src', 'dictionaries');
fs.mkdirSync(dictDir, { recursive: true });
fs.writeFileSync(path.join(dictDir, 'tr.json'), JSON.stringify(dictTR, null, 2));
fs.writeFileSync(path.join(dictDir, 'de.json'), JSON.stringify(dictDE, null, 2));
fs.writeFileSync(path.join(dictDir, 'en.json'), JSON.stringify(dictEN, null, 2));

// 3. SMART CONTACT FORM KOMPONENTE (GETRENNT FÜR JEDES ANLIEGEN)
const contactFormCode = `
'use client';

import React, { useState } from 'react';

export default function SmartContactForm({ lang, defaultCategory = 'general' }: { lang: string; defaultCategory?: string }) {
  const [category, setCategory] = useState(defaultCategory);
  const [isKvkkAccepted, setIsKvkkAccepted] = useState(false);

  const labels: Record<string, any> = {
    tr: {
      title: "Kurumsal İletişim & Talep Formu",
      sub: "Lütfen ilgilendiğiniz hizmet veya ürün grubunu seçin.",
      cats: { general: "Genel Danışmanlık", engineering: "Mühendislik & ASPICE", sureneo: "sureNEO Pilot Projesi", lvkon: "Lvkon Ürün Talebi", career: "Kariyer / HR" },
      name: "Ad Soyad / Şirket Unvanı",
      email: "E-Posta Adresi",
      msg: "Talep Detayları / Proje Özeti",
      cv: "CV / Şartname Dosyası Yükle (PDF)",
      kvkk: "6698 sayılı KVKK ve GDPR şartlarını, verilerimin işlenmesini kabul ediyorum.",
      btn: "Güvenli Şekilde Gönder"
    },
    de: {
      title: "Anfrage- & Kontaktformular",
      sub: "Bitte wählen Sie den passenden Bereich für Ihre Anfrage.",
      cats: { general: "Allgemeine Beratung", engineering: "Engineering & ASPICE", sureneo: "sureNEO Pilotprojekt", lvkon: "Lvkon Produktspezifikation", career: "Karriere / HR" },
      name: "Name / Firmenname",
      email: "E-Mail Adresse",
      msg: "Details Ihrer Anfrage / Projektbeschreibung",
      cv: "CV / Spezifikationsdatei hochladen (PDF)",
      kvkk: "Ich stimme der Verarbeitung meiner Daten gemäß DSGVO / KVKK zu.",
      btn: "Anfrage Sicher Senden"
    },
    en: {
      title: "Corporate Inquiry Form",
      sub: "Please select the topic that fits your business requirement.",
      cats: { general: "General Consulting", engineering: "Engineering & ASPICE", sureneo: "sureNEO Pilot Project", lvkon: "Lvkon Product Request", career: "Career / HR" },
      name: "Full Name / Company Name",
      email: "Business E-Mail",
      msg: "Project Summary / Inquiry Details",
      cv: "Upload CV / Spec Document (PDF)",
      kvkk: "I accept the processing of my personal data under GDPR / KVKK regulations.",
      btn: "Submit Secure Inquiry"
    }
  };

  const t = labels[lang] || labels.de;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isKvkkAccepted) return;
    alert("Anfrage wurde übermittelt!");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl max-w-3xl mx-auto text-white">
      <h3 className="text-3xl font-extrabold mb-2 text-slate-100">{t.title}</h3>
      <p className="text-slate-400 text-sm mb-8">{t.sub}</p>

      {/* ANLIEGEN-AUSWAHL */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
        {Object.entries(t.cats).map(([key, label]: [string, any]) => (
          <button
            key={key}
            type="button"
            onClick={() => setCategory(key)}
            className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-left ${
              category === key 
                ? 'bg-blue-600 border-blue-500 text-white shadow-lg' 
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">{t.name}</label>
          <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:border-blue-500 text-white text-sm" />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">{t.email}</label>
          <input type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:border-blue-500 text-white text-sm" />
        </div>

        {category === 'career' && (
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">{t.cv}</label>
            <input type="file" accept=".pdf" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 text-sm" />
          </div>
        )}

        <div>
          <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">{t.msg}</label>
          <textarea rows={4} required className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:border-blue-500 text-white text-sm resize-none" />
        </div>

        <div className="flex items-start gap-3 p-4 bg-slate-950 rounded-xl border border-slate-800">
          <input 
            type="checkbox" 
            id="kvkk" 
            checked={isKvkkAccepted} 
            onChange={(e) => setIsKvkkAccepted(e.target.checked)} 
            className="mt-1 w-4 h-4 text-blue-600 rounded"
          />
          <label htmlFor="kvkk" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
            {t.kvkk}
          </label>
        </div>

        <button 
          type="submit" 
          disabled={!isKvkkAccepted}
          className={`w-full py-4 rounded-xl font-bold transition-all ${
            isKvkkAccepted ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl' : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          {t.btn}
        </button>
      </form>
    </div>
  );
}
`;

fs.writeFileSync(path.join(rootDir, 'src', 'components', 'SmartContactForm.tsx'), contactFormCode.trim());

console.log("✨ Master-Setup erfolgreich! Starte Build & Deployment...");
