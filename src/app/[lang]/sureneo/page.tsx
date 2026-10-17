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
          İşletmelerin kendi Google Workspace altyapısında çalışan, dışarıya veri çıkartmayan hepsi-bir-arada işletim sistemi. Tekil cari ve stok kartı etrafında birleşen modüllerle sıfır operasyonel yük.
        </p>

        {/* MODÜLLER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-green-500/40 transition-all">
            <div className="text-green-400 font-black text-2xl mb-2">A. Finans & Ön Muhasebe</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kasa, Banka ve POS otomatik takibi. Akıllı vergi ve KKEG ayrımı, Luca/Zirve/Orka/Mikro aktarımı ve ay sonu kilitleme (Release).
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-green-500/40 transition-all">
            <div className="text-green-400 font-black text-2xl mb-2">B. E-Ticaret, Depo & SMM</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trendyol ve Hepsiburada komisyon/kargo mutabakatı (760 Pazarlama Gideri), 153 Depo'dan 621 SMM hesabına otomatik maliyet virmanı.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-green-500/40 transition-all">
            <div className="text-green-400 font-black text-2xl mb-2">C. CRM & Satış Yönetimi</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tekliften faturaya (Quote-to-Invoice) PDF üretimi. Vadesi geçen faturalar için tek tıkla WhatsApp alacak hatırlatması.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-green-500/40 transition-all">
            <div className="text-green-400 font-black text-2xl mb-2">D. İK & Personel Operasyonları</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Google Takvim izin entegrasyonu, avanstan maaşa (196-335) otomatik mahsup ve zimmet takibi.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-green-500/40 transition-all">
            <div className="text-green-400 font-black text-2xl mb-2">E. Satınalma & Tedarik</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Siparişten Faturaya (PO-to-Bill) süreç takibi, onaylı PO gönderimi ve fatura eşleştirme.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-green-500/40 transition-all">
            <div className="text-green-400 font-black text-2xl mb-2">F. Hukuk & Kurumsal Arşiv</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              KEP ve UETS e-Tebligat otopilotu, sözleşme vadelerinin otomatik takibi ve arşivleme.
            </p>
          </div>
        </div>

        {/* DELİLİM.COM HUKUKİ DELİL ZIRHI */}
        <div className="bg-slate-900/90 border border-green-500/40 p-10 rounded-3xl mb-20 shadow-2xl">
          <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 font-bold text-xs rounded-full uppercase mb-4">
            Hukuk Modülü & Yasal Güvence
          </div>
          <h2 className="text-3xl font-extrabold mb-4 text-white">delilim.com Entegrasyonu İle Zaman Damgalı Dijital Delil Güvencesi</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            sureNEO Hukuk Modülü, yapılan kritik işlemleri sadece kaydetmekle kalmaz; delilim.com API entegrasyonu ile zaman damgalı Hash sertifikasına dönüştürerek mahkemelerde ve resmi denetimlerde geçerli yasal bir zırh oluşturur.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <strong className="text-green-400 block mb-2 text-sm">Müşavir Release (Kilit) Onayı</strong>
              Ay sonu mali müşavir onayı verildiğinde veri kilitlenir ve mühürlenir. Verilerin sonradan değiştirilmediği resmi denetimlerde ispatlanır.
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <strong className="text-green-400 block mb-2 text-sm">Bordro ve Özlük Hakları</strong>
              Çalışana iletilen bordro veya güvenlik politikaları portal üzerinden tıklandığı an zaman damgası ile mühürlenir ve yasal delil niteliği kazanır.
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <strong className="text-green-400 block mb-2 text-sm">Tedarikçi Sipariş (PO) Mutabakatı</strong>
              Tedarikçiye iletilen sipariş onaylandığı an dijital olarak kaydedilir; itirazlar ve anlaşmazlıklar engellenir.
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