const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();
const projectRoot = __dirname;

// 1. PFADE DEFINIEREN
const srcImgBlog = path.join(homeDir, 'beeneo-platform', 'static', 'img', 'blog');
const srcVideos = path.join(homeDir, 'beeneo-platform', 'static', 'videos');
const srcBlogMDX = path.join(homeDir, 'beeneo-platform', 'blog');

const destImgBlog = path.join(projectRoot, 'public', 'img', 'blog');
const destVideos = path.join(projectRoot, 'public', 'videos');
const destDataBlog = path.join(projectRoot, 'src', 'data', 'blogs.json');

// Ordner-Erstellung
[destImgBlog, destVideos, path.dirname(destDataBlog)].forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

// Helper zum Kopieren
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.readdirSync(src).forEach(file => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    if (fs.lstatSync(srcFile).isFile()) {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

console.log("📂 Kopiere Bilder & Videos aus Drive/Platform...");
copyDir(srcImgBlog, destImgBlog);
copyDir(srcVideos, destVideos);

// 2. BLOG-DATEN & MARBLISM GRAFIKEN PARSEN
console.log("📝 Verarbeite Marblism Mdx-Inhalte & Grafiken...");
const posts = [];
if (fs.existsSync(srcBlogMDX)) {
  fs.readdirSync(srcBlogMDX).forEach(file => {
    if (file.endsWith('.mdx') || file.endsWith('.md')) {
      const content = fs.readFileSync(path.join(srcBlogMDX, file), 'utf8');
      const titleMatch = content.match(/title:\s*"(.*?)"/);
      const slugMatch = content.match(/slug:\s*(.*)/);
      
      const title = titleMatch ? titleMatch[1] : file.replace('.mdx', '');
      const slug = slugMatch ? slugMatch[1].trim() : file.replace('.mdx', '');
      
      let category = 'engineering';
      if (content.toLowerCase().includes('sureneo') || content.toLowerCase().includes('faas') || content.toLowerCase().includes('tool2tax')) {
        category = 'sureneo';
      } else if (content.toLowerCase().includes('lvkon') || content.toLowerCase().includes('e-aks') || content.toLowerCase().includes('bus')) {
        category = 'lvkon';
      }

      posts.push({
        id: slug,
        title: title,
        category: category,
        mediaType: 'image',
        mediaUrl: `/img/blog/${slug}.webp`,
        excerpt: content.substring(0, 160).replace(/---[\s\S]*?---/, '').trim() + '...'
      });
    }
  });
}
fs.writeFileSync(destDataBlog, JSON.stringify(posts, null, 2), 'utf8');

// 3. SPRACH-WÖRTERBÜCHER ERSTELLEN (i18n)
console.log("🌐 Generiere Übersetzungen für TR, DE, EN...");
const dictDE = {
  nav: { engineering: "Engineering", sureneo: "sureNEO LOS", lvkon: "Lvkon E-Mobility", about: "Über Uns", career: "Karriere", blog: "Blog & Media", contact: "Kontakt" },
  hero: { badge: "TGB / TÜBİTAK 1501 Badge", title: "Engineering. Lean Management. E-Mobility.", subtitle: "Prozessexzellenz, ASPICE L3, ISO 26262/21434 & E-Aks Lösungen.", ctaPrimary: "Jetzt Anfragen", ctaSecondary: "Über beeNEO" },
  pillars: { p1Title: "1. Engineering", p1Desc: "ASPICE Level 3, ISO 26262 (FuSa), ISO 21434 (CySec) & Interim Lean Engineering.", p2Title: "2. sureNEO LOS", p2Desc: "Zertifizierung ohne Bürokratie. Tool2Tax Reduction & FaaS Lean.", p3Title: "3. Lvkon E-Mobility", p3Desc: "Elektrikli Sürüş Aksı (TED3380S), Motoren und Şanzıman." }
};

const dictTR = {
  nav: { engineering: "Mühendislik", sureneo: "sureNEO YYS", lvkon: "Lvkon E-Mobilite", about: "Hakkımızda", career: "Kariyer", blog: "Blog & Medya", contact: "İletişim" },
  hero: { badge: "TGB / TÜBİTAK 1501 Rozet Sahibi", title: "Mühendislik. Yalın Yönetim. E-Mobilite.", subtitle: "Süreç Mükemmelliği, ASPICE L3, ISO 26262/21434 ve E-Aks Çözümleri.", ctaPrimary: "Hemen Başvur", ctaSecondary: "beeNEO Hakkında" },
  pillars: { p1Title: "1. Mühendislik", p1Desc: "ASPICE Seviye 3, ISO 26262 (Fonksiyonel Güvenlik) ve ISO 21434 (Siber Güvenlik).", p2Title: "2. sureNEO YYS", p2Desc: "Bürokrasi olmadan sertifikasyon. Tool2Tax Analizi ve FaaS Lean.", p3Title: "3. Lvkon E-Mobilite", p3Desc: "Elektrikli Sürüş Aksı (TED3380S), Tahrik Motorları ve Şanzıman." }
};

const dictEN = {
  nav: { engineering: "Engineering", sureneo: "sureNEO LOS", lvkon: "Lvkon E-Mobility", about: "About Us", career: "Career", blog: "Blog & Media", contact: "Contact" },
  hero: { badge: "TGB / TÜBİTAK 1501 Badge Holder", title: "Engineering. Lean Management. E-Mobility.", subtitle: "Process Excellence, ASPICE L3, ISO 26262/21434 & E-Axle Solutions.", ctaPrimary: "Get in Touch", ctaSecondary: "About beeNEO" },
  pillars: { p1Title: "1. Engineering", p1Desc: "ASPICE Level 3, ISO 26262 (FuSa), ISO 21434 (CySec) & Interim Lean Engineering.", p2Title: "2. sureNEO LOS", p2Desc: "Certification without bureaucracy. Tool2Tax Reduction & FaaS Lean.", p3Title: "3. Lvkon E-Mobility", p3Desc: "Electric Drive Axle (TED3380S), Motors and Transmissions." }
};

const dictDir = path.join(projectRoot, 'src', 'dictionaries');
fs.mkdirSync(dictDir, { recursive: true });
fs.writeFileSync(path.join(dictDir, 'de.json'), JSON.stringify(dictDE, null, 2));
fs.writeFileSync(path.join(dictDir, 'tr.json'), JSON.stringify(dictTR, null, 2));
fs.writeFileSync(path.join(dictDir, 'en.json'), JSON.stringify(dictEN, null, 2));

fs.writeFileSync(path.join(dictDir, 'getDictionary.ts'), `
import 'server-only';
const dictionaries = {
  de: () => import('./de.json').then((m) => m.default),
  en: () => import('./en.json').then((m) => m.default),
  tr: () => import('./tr.json').then((m) => m.default),
};
export const getDictionary = async (locale: 'de' | 'en' | 'tr') => {
  return dictionaries[locale]?.() ?? dictionaries.de();
};
`);

// 4. SMART NAVBAR & FOOTER KOMPONENTE
console.log("🛠 Erstelle dynamische UI-Komponenten...");
const compDir = path.join(projectRoot, 'src', 'components');
fs.mkdirSync(compDir, { recursive: true });

fs.writeFileSync(path.join(compDir, 'Navbar.tsx'), `
'use client';
import React from 'react';
import Link from 'next/link';

export default function Navbar({ lang, dict }: { lang: string, dict: any }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={\`/\${lang}\`} className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
          <span className="text-blue-500">bee</span>NEO
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <Link href={\`/\${lang}/engineering\`} className="hover:text-blue-400 transition-colors">{dict.nav.engineering}</Link>
          <Link href={\`/\${lang}/sureneo\`} className="hover:text-green-400 transition-colors">{dict.nav.sureneo}</Link>
          <Link href={\`/\${lang}/lvkon\`} className="hover:text-orange-400 transition-colors">{dict.nav.lvkon}</Link>
          <Link href={\`/\${lang}/about\`} className="hover:text-white transition-colors">{dict.nav.about}</Link>
          <Link href={\`/\${lang}/career\`} className="hover:text-white transition-colors">{dict.nav.career}</Link>
          <Link href={\`/\${lang}/blog\`} className="hover:text-white transition-colors">{dict.nav.blog}</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex text-xs font-bold bg-slate-900 border border-slate-800 rounded-lg p-1">
            <Link href="/de" className={\`px-2 py-1 rounded \${lang === 'de' ? 'bg-blue-600 text-white' : 'text-slate-400'}\`}>DE</Link>
            <Link href="/en" className={\`px-2 py-1 rounded \${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400'}\`}>EN</Link>
            <Link href="/tr" className={\`px-2 py-1 rounded \${lang === 'tr' ? 'bg-blue-600 text-white' : 'text-slate-400'}\`}>TR</Link>
          </div>
          <Link href={\`/\${lang}/contact\`} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/30">
            {dict.nav.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
`);

// 5. UNTERSEITEN GENERIEREN
console.log("🚀 Bau aller Unterseiten in 3 Sprachen...");
const appDir = path.join(projectRoot, 'src', 'app', '[lang]');

function createPage(subPath, content) {
  const targetDir = path.join(appDir, subPath);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'page.tsx'), content);
}

// CAREER PAGE
createPage('career', `
import React from 'react';
import Navbar from '@/components/Navbar';
import { getDictionary } from '@/dictionaries/getDictionary';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'tr' }];
}

export default async function CareerPage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar lang={lang} dict={dict} />
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6">Kariyer & Freelancer Ekosistemi</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
          beeNEO ve sureNEO ekosisteminde Senior Engineer, ASPICE Auditor veya E-Mobilite Uzmanı olarak yerinizi alın.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Senior ASPICE Assessor</h3>
            <p className="text-sm text-slate-400 mb-4">Remote / Hybrid • Automotive</p>
            <p className="text-slate-300 text-sm">OEM ve Tier-1 projelerinde süreç olgunluğu denetimi ve CMMI L3 rehberliği.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-green-400 mb-2">E-Drive Systems Engineer</h3>
            <p className="text-sm text-slate-400 mb-4">İstanbul / Bursa • Lvkon Integration</p>
            <p className="text-slate-300 text-sm">TED3380S ve e-aks sistemlerinin otobüs/kamyon platformlarına entegrasyonu.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Freelance Functional Safety Expert</h3>
            <p className="text-sm text-slate-400 mb-4">Project-Based • ISO 26262 ASIL D</p>
            <p className="text-slate-300 text-sm">ASIL-D seviyesinde güvenlik mimarisi oluşturma ve HIL validasyonu.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
`);

console.log("✨ Setup vollständig beendet!");