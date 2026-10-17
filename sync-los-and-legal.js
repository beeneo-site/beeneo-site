const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const appDir = path.join(rootDir, 'src', 'app', '[lang]');

console.log("🚀 sureNEO LOS Modülleri, delilim.com Delil Güvencesi ve Kurumsal Resimler İşleniyor...");

// 1. SURENEO DETAYLANDIRILMIŞ SAYFA KODU (FINANS, STOK, CRM, HUKUK, DELİLİM.COM)
const sureneoCode = `
import React, { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmartContactForm from '@/components/SmartContactForm';

export default function SureneoPage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = use(params);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-green-600 selection:text-white">
      <Navbar lang={lang} />
      <main className="pt-36 pb-24 px-6 max-w-7xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 font-semibold text-xs mb-6 uppercase tracking-widest">
          TRL 4 Laboratuvar Doğrulanmış Prototip | Teknogirişim Rozeti No: 2026-1348
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
          sureNEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Lean Office Suite (LOS)</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-16 leading-relaxed">
          İşletmelerin kendi Google Workspace (Drive, Sheets) altyapısında çalışan, dışarıya veri çıkartmayan hepsi-bir-arada işletim sistemi. Tekil cari ve stok kartı etrafında departmanlar arası sıfır operasyon yükü.
        </p>

        {/* LOS MODÜLLERİ GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-green-500/40 transition-all">
            <div className="text-green-400 font-black text-2xl mb-2">A. Finans & Ön Muhasebe</div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Kasa, Banka ve POS otomatik takibi. Akıllı vergi ayrımı (%70 gider / %30 KKEG), ÖİV ayıklama ve mali müşavir yazılımlarına (Luca, Zirve, Orka, Mikro) tek tıkla aktarım ve ay sonu kilitleme.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-green-500/40 transition-all">
            <div className="text-green-400 font-black text-2xl mb-2">B. E-Ticaret, Depo & SMM</div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Trendyol ve Hepsiburada kesinti mutabakatı. Depo ürün çıkışlarında otomatik Satılan Malın Maliyeti (621 SMM) virmanı ve demirbaş amortisman takvimi.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-green-500/40 transition-all">
            <div className="text-green-400 font-black text-2xl mb-2">C. CRM & Satış Yönetimi</div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Tekliften faturaya (Quote-to-Invoice) PDF üretimi. Vadesi geçen faturalar için tek tıkla WhatsApp alacak ve mutabakat hatırlatması.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-green-500/40 transition-all">
            <div className="text-green-400 font-black text-2xl mb-2">D. İK & Özlük Hakları</div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Otomatik Google Takvim izin entegrasyonu. Avanstan maaşa (196-335) otomatik mahsup ve demirbaş zimmet takibi.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-green-500/40 transition-all">
            <div className="text-green-400 font-black text-2xl mb-2">E. Satınalma (PO-to-Bill)</div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Bütçe onaylı satınalma talepleri, tedarikçiye PO sipariş emri iletimi ve fatura eşleştirme ile cariye borç kaydı.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-green-500/40 transition-all">
            <div className="text-green-400 font-black text-2xl mb-2">F. KEP & UETS Tebligat</div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              GİB ve SGK e-Tebligatlarının şifresiz otomatik Drive arşivine düşmesi, sözleşme vadelerinin 30-15-7 gün önceden uyarılması.
            </p>
          </div>
        </div>

        {/* DELİLİM.COM DİJİTAL DELİL ZIRHI */}
        <div className="bg-slate-900/90 border border-green-500/40 p-10 rounded-3xl mb-20 shadow-2xl">
          <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 font-bold text-xs rounded-full uppercase mb-4">
            Yasal Zırh & Delil Güvencesi
          </div>
          <h2 className="text-3xl font-extrabold mb-4 text-white">delilim.com API İle Zaman Damgalı Dijital Delil</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            sureNEO, yapılan tüm kritik işlemleri olası mahkeme, SGK denetimi ve maliye incelemelerinde değiştiremez yasal delile dönüştürür.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <strong className="text-green-400 block mb-2 text-sm">1. Müşavir Kilit (Release) Onayı</strong>
              Müşavir "Mizanı kontrol ettim, beyanname verildi" dediğinde veri kilitlenir ve mühürlenir. Tahrifat yapılmadığı ispatlanır.
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <strong className="text-green-400 block mb-2 text-sm">2. Bordro & Özlük Bildirimi</strong>
              Personele gönderilen bordro veya güvenlik politikası portalda tıklandığı an damgalanır; davanızda geçerli delil olur.
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <strong className="text-green-400 block mb-2 text-sm">3. PO Tedarikçi Mutabakatı</strong>
              Tedarikçiye e-posta ile geçilen siparişin onaylandığı an dijital olarak kaydedilir; "Sipariş almadım" itirazı engellenir.
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-12">
          <SmartContactForm defaultCategory="sureneo" />
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
`;

fs.writeFileSync(path.join(appDir, 'sureneo', 'page.tsx'), sureneoCode.trim(), 'utf8');

console.log("🎉 sureNEO LOS Modülleri ve delilim.com entegrasyonu tamamlandı!");
