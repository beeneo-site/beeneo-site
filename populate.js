const fs = require('fs');
const path = require('path');
const os = require('os');

// 1. Pfade reparieren (Löst das Problem mit dem "Ö" in AyhanÖnal)
const homeDir = os.homedir(); // Holt automatisch C:\Users\AyhanÖnal
const sourceImg = path.join(homeDir, 'beeneo-platform', 'static', 'img', 'blog');
const sourceVid = path.join(homeDir, 'beeneo-platform', 'static', 'videos');
const destImg = path.join(__dirname, 'public', 'img', 'blog');
const destVid = path.join(__dirname, 'public', 'videos');

// Helper Funktion zum Kopieren
function copyFolderSync(from, to) {
    if (!fs.existsSync(from)) return console.log(`Übersprungen: ${from} nicht gefunden.`);
    fs.mkdirSync(to, { recursive: true });
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
    console.log(`Kopiert: ${from} -> ${to}`);
}

console.log("Kopiere Medien...");
copyFolderSync(sourceImg, destImg);
copyFolderSync(sourceVid, destVid);

// Helper Funktion zum Schreiben von Dateien
const writeFile = (filePath, content) => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content.trim(), 'utf8');
    console.log(`Erstellt: ${filePath}`);
};

console.log("Schreibe Code in die Dateien...");

// 2. Dictionaries & i18n
writeFile('src/dictionaries/getDictionary.ts', `
import 'server-only';
const dictionaries = {
  de: () => import('./de.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
  tr: () => import('./tr.json').then((module) => module.default),
};
export const getDictionary = async (locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
`);

writeFile('src/dictionaries/de.json', JSON.stringify({
  "navigation": { "engineering": "Engineering", "sureneo": "sureNEO", "lvkon": "Lvkon", "about": "Über Uns", "contact": "Kontakt" },
  "hero": { "title": "Engineering. Lean Management. E-Mobility.", "cta_primary": "Jetzt Anfragen" }
}, null, 2));

writeFile('src/dictionaries/tr.json', JSON.stringify({
  "navigation": { "engineering": "Mühendislik", "sureneo": "sureNEO", "lvkon": "Lvkon", "about": "Hakkımızda", "contact": "İletişim" },
  "hero": { "title": "Mühendislik. Yalın Yönetim. E-Mobilite.", "cta_primary": "Hemen Başvur" }
}, null, 2));

writeFile('src/dictionaries/en.json', JSON.stringify({
  "navigation": { "engineering": "Engineering", "sureneo": "sureNEO", "lvkon": "Lvkon", "about": "About Us", "contact": "Contact" },
  "hero": { "title": "Engineering. Lean Management. E-Mobility.", "cta_primary": "Get in Touch" }
}, null, 2));

// --- HINWEIS: Hier kannst du die langen React-Codes von oben per Copy & Paste einfügen ---
// Beispiel für die Startseite:
writeFile('src/app/[lang]/page.tsx', `
import React from 'react';
import { getDictionary } from '@/dictionaries/getDictionary';
import Link from 'next/link';

export default async function HomePage({ params: { lang } }: { params: { lang: 'de' | 'en' | 'tr' } }) {
  const dict = await getDictionary(lang);
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">{dict.hero.title}</h1>
      <Link href={\`/\${lang}/contact\`} className="bg-blue-600 px-6 py-3 rounded-lg">{dict.hero.cta_primary}</Link>
    </main>
  );
}
`);

console.log("Automatisierung abgeschlossen! Starte jetzt mit 'npm run dev'.");