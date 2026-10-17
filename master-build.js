const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();
const rootDir = __dirname;
const appDir = path.join(rootDir, 'src', 'app', '[lang]');

// 1. MEDIEN KOPIEREN
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

console.log("📂 Kopiere Firmenlogos & Medien...");
copyDirRecursive(sourceImg, path.join(destPublic, 'img'));
copyDirRecursive(sourceVid, path.join(destPublic, 'videos'));

// 2. FOOTER MIT AKTUELLEM FIRMENNAMEN
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
          <p className="text-xs leading-relaxed font-semibold">
            BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LİMİTED ŞİRKETİ
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Çözümler / Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={\`/\${lang}/engineering\`} className="hover:text-white">Engineering & ASPICE</Link></li>
            <li><Link href={\`/\${lang}/sureneo\`} className="hover:text-white">sureNEO LOS & FaaS Lean</Link></li>
            <li><Link href={\`/\${lang}/lvkon\`} className="hover:text-white">Lvkon E-Mobility</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Kurumsal / Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={\`/\${lang}/about\`} className="hover:text-white">Hakkımızda & Lead Team</Link></li>
            <li><Link href={\`/\${lang}/career\`} className="hover:text-white">Kariyer & Freelancer</Link></li>
            <li><Link href={\`/\${lang}/blog\`} className="hover:text-white">Blog & Medya</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Uyum & Güvenlik</h4>
          <p className="text-xs leading-relaxed mb-4">
            KVKK ve GDPR Standartlarında Veri Güvenliği. TGB Status / TÜBİTAK 1501 Proje Yönetimi.
          </p>
          <Link href={\`/\${lang}/contact\`} className="inline-block bg-slate-900 border border-slate-700 hover:border-blue-500 text-white px-4 py-2 rounded-lg text-xs font-bold">
            İletişim / Contact →
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

console.log("🎉 Master-Build Skript erfolgreich vorbereitet!");
