'use client';
import React from 'react';
import Link from 'next/link';

export default function Navbar({ lang = 'tr' }: { lang?: string }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href={`/${lang}`} className="flex items-center gap-2 z-50">
          <img 
            src="/logos/beeNEO_Logo2026beebgd.png" 
            alt="beeNEO Logo" 
            className="h-10 w-auto object-contain"
            onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300 h-full">
          
          {/* 1. MÜHENDİSLİK (MEGA MENU) */}
          <div className="group h-full flex items-center cursor-pointer">
            <Link href={`/${lang}/engineering`} className="hover:text-blue-400 transition-colors flex items-center gap-1">
              Mühendislik <span className="text-[10px]">▼</span>
            </Link>
            <div className="absolute top-20 left-0 w-full bg-slate-950 border-b border-slate-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-8">
                <div>
                  <h3 className="text-blue-500 font-bold mb-4 border-b border-slate-800 pb-2">Otomotiv & Sistem Mühendisliği</h3>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/engineering`}>Fonksiyonel Güvenlik (ISO 26262)</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/engineering`}>Siber Güvenlik (ISO 21434)</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/engineering`}>Test ve Validasyon (V&V)</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-blue-500 font-bold mb-4 border-b border-slate-800 pb-2">Süreç Mükemmelliği & Kalite</h3>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/engineering`}>ASPICE Seviye 3 & CMMI L3</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/engineering`}>Araç Zinciri (Toolchain) Entegrasyonu</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/engineering`}>IATF 16949</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-blue-500 font-bold mb-4 border-b border-slate-800 pb-2">İnovasyon & Ar-Ge Ürünleri</h3>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/about`}>NEObist (E-Bike Kiti)</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/about`}>mesafeRAY (UV-C)</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/about`}>NEOflasher</Link></li>
                  </ul>
                </div>
                {/* GRAFİK / BİLD */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-end p-4 h-full min-h-[160px]">
                  <img src="/img/blog/2026-10-08-risk-based-thinking-supplier-quality.webp" alt="Mühendislik" className="absolute inset-0 w-full h-full object-cover opacity-40 hover:opacity-70 transition-opacity" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                  <span className="relative z-10 text-white font-bold text-sm">Danışmanlık ve Coaching Hizmetleri</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. SURENEO LOS (MEGA MENU) */}
          <div className="group h-full flex items-center cursor-pointer">
            <Link href={`/${lang}/sureneo`} className="hover:text-green-400 transition-colors flex items-center gap-1">
              sureNEO LOS <span className="text-[10px]">▼</span>
            </Link>
            <div className="absolute top-20 left-0 w-full bg-slate-950 border-b border-slate-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-8">
                <div>
                  <h3 className="text-green-500 font-bold mb-4 border-b border-slate-800 pb-2">İşletim Sistemi Modülleri</h3>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/sureneo`}>Finans & Ön Muhasebe</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/sureneo`}>E-Ticaret & Depo (SMM)</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/sureneo`}>CRM & Satış</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/sureneo`}>İK & Özlük</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/sureneo`}>Satınalma</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-green-500 font-bold mb-4 border-b border-slate-800 pb-2">Hukuk & Dijital Zırh</h3>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/sureneo`}>Kurumsal Arşiv (KEP/UETS)</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/sureneo`}>delilim.com Dijital Delil Zaman Damgası</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-green-500 font-bold mb-4 border-b border-slate-800 pb-2">Derin Teknoloji (Deep-Tech)</h3>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/sureneo`}>LEAF (Kurumsal Tasarım)</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/sureneo`}>LEAD (Dijital İkiz)</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/sureneo`}>LEAI (Ajan Yapay Zeka)</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/sureneo`}>Tool2Tax Analizi</Link></li>
                  </ul>
                </div>
                {/* GRAFİK / BİLD */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-end p-4 h-full min-h-[160px]">
                  <img src="/img/blog/2026-10-08-zero-cost-toolchain-vision.webp" alt="sureNEO" className="absolute inset-0 w-full h-full object-cover opacity-40 hover:opacity-70 transition-opacity" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                  <span className="relative z-10 text-white font-bold text-sm">Akıllı Yalın Yönetim Çözümleri</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. ÜRÜNLER (MEGA MENU) */}
          <div className="group h-full flex items-center cursor-pointer">
            <Link href={`/${lang}/lvkon`} className="hover:text-orange-400 transition-colors flex items-center gap-1">
              Ürünler <span className="text-[10px]">▼</span>
            </Link>
            <div className="absolute top-20 left-0 w-full bg-slate-950 border-b border-slate-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-8">
                <div>
                  <h3 className="text-orange-400 font-bold mb-4 border-b border-slate-800 pb-2">Entegre Güç Üniteleri (Drive Assembly)</h3>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>AMT'li Saf Elektrikli Sistem</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Kesintisiz Güçlü Tam Elektrikli Sistem</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Paralel Hibrit Güç Sistemi</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Seri-Paralel Hibrit Güç Sistemi</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Kesintisiz Güçlü Hibrit Sistem</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-orange-400 font-bold mb-4 border-b border-slate-800 pb-2">Elektrikli Sürüş Aksları (E-Aks)</h3>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Ağır Hizmet E-Aks</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Orta Hizmet E-Aks</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Hafif Ticari E-Aks</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-orange-400 font-bold mb-4 border-b border-slate-800 pb-2">Tahrik Motorları (Drive Motor)</h3>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Tahrik Motoru</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Monte Motor</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Jeneratör</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-orange-400 font-bold mb-4 border-b border-slate-800 pb-2">Şanzıman Sistemleri (Transmission)</h3>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Maden Tipi Şanzıman</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Ağır Hizmet ve Büyük Otobüs Şanzımanı</Link></li>
                    <li className="hover:text-white transition-colors"><Link href={`/${lang}/lvkon`}>Hafif Ticari Araç Şanzımanı</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 4. HAKKIMIZDA (DROPDOWN) */}
          <div className="group relative h-full flex items-center cursor-pointer">
            <Link href={`/${lang}/about`} className="hover:text-blue-400 transition-colors flex items-center gap-1">
              Hakkımızda <span className="text-[10px]">▼</span>
            </Link>
            <div className="absolute top-16 -left-4 w-64 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4">
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="hover:text-white transition-colors"><Link href={`/${lang}/about`}>Künye</Link></li>
                <li className="hover:text-white transition-colors"><Link href={`/${lang}/about`}>Lider Kadro</Link></li>
                <li className="hover:text-white transition-colors"><Link href={`/${lang}/career`}>Kariyer</Link></li>
                <li className="hover:text-white transition-colors"><Link href={`/${lang}/blog`}>Blog & Medya</Link></li>
                <li className="hover:text-white transition-colors pt-3 mt-3 border-t border-slate-800"><Link href={`/${lang}/about`}>Tescilli İnovasyonlarımız <br/><span className="text-xs text-slate-500">(mesafeRAY, NEOflasher, NEObist, oOreNEO)</span></Link></li>
              </ul>
            </div>
          </div>

        </nav>

        {/* 5. İLETİŞİM */}
        <div className="flex items-center gap-4 z-50">
          <Link href={`/${lang}/contact`} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/30">
            İletişim
          </Link>
        </div>

      </div>
    </header>
  );
}