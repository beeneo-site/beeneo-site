'use client';

import React, { useState } from 'react';

export default function SmartContactForm({ defaultCategory = 'general' }: { defaultCategory?: string }) {
  const [category, setCategory] = useState(defaultCategory);
  const [isKvkkAccepted, setIsKvkkAccepted] = useState(false);

  const categories: Record<string, { title: string; desc: string; fields: string[] }> = {
    engineering: {
      title: "Mühendislik & ASPICE Danışmanlık Talebi",
      desc: "ASPICE Seviye 3, ISO 26262 ASIL-D veya ISO 21434 Siber Güvenlik projeleriniz için teknik detayları iletin.",
      fields: ["Firma Unvanı", "Proje / Araç Tipi", "Hedef Denetim / Standart Tarihi"]
    },
    sureneo: {
      title: "sureNEO LOS & Pilot Proje Başvurusu",
      desc: "Tool2Tax Lisans Tasarruf Analizi ve 15 günlük FaaS Lean pilot çalışmamız için başvurun.",
      fields: ["Firma / Ekip Büyüklüğü", "Mevcut Kullanılan Araç Zinciri (PLM/ALM)", "Pilot Proje Hedefi"]
    },
    lvkon: {
      title: "Lvkon E-Mobilite Teknik Şartname & Fiyat Talebi",
      desc: "TED3380S E-Aks, STEA serisi veya tahrik motorları için teknik teklif alın.",
      fields: ["Firma / OEM Unvanı", "İlgilenilen Ürün / Araç Sınıfı (Örn: 10-12m Otobüs)", "Tahmini Yıllık Adet"]
    },
    career: {
      title: "Kariyer & Freelancer Ekosistemi Başvurusu",
      desc: "beeNEO ve sureNEO projelerinde Senior Uzman veya Danışman olarak yer alın.",
      fields: ["Uzmanlık Alanı (ASPICE, ISO 26262, E-Mobilite vb.)", "Çalışma Biçimi (Tam Zamanlı / Freelance / Proje Bazlı)"]
    },
    general: {
      title: "Genel İletişim Formu",
      desc: "Bizimle info@beeneo.biz üzerinden veya formu doldurarak iletişime geçebilirsiniz.",
      fields: ["Konu Başlığı"]
    }
  };

  const current = categories[category] || categories.general;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isKvkkAccepted) return;
    alert("Talebiniz info@beeneo.biz adresine iletilmek üzere başarıyla alındı!");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto text-white">
      <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-6">
        <button
          type="button"
          onClick={() => setCategory('engineering')}
          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${category === 'engineering' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'}`}
        >
          ⚙️ Mühendislik
        </button>
        <button
          type="button"
          onClick={() => setCategory('sureneo')}
          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${category === 'sureneo' ? 'bg-green-600 border-green-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'}`}
        >
          📊 sureNEO LOS
        </button>
        <button
          type="button"
          onClick={() => setCategory('lvkon')}
          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${category === 'lvkon' ? 'bg-orange-600 border-orange-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'}`}
        >
          🔋 Lvkon E-Mobilite
        </button>
        <button
          type="button"
          onClick={() => setCategory('career')}
          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${category === 'career' ? 'bg-purple-600 border-purple-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'}`}
        >
          💼 Kariyer / CV
        </button>
        <button
          type="button"
          onClick={() => setCategory('general')}
          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${category === 'general' ? 'bg-slate-700 border-slate-600 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'}`}
        >
          ✉️ Genel
        </button>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{current.title}</h3>
        <p className="text-slate-400 text-sm">{current.desc}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">Ad Soyad / Yetkili Kişi</label>
            <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">E-Posta Adresi</label>
            <input type="email" required placeholder="ornek@sirket.com" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none" />
          </div>
        </div>

        {current.fields.map((field, idx) => (
          <div key={idx}>
            <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">{field}</label>
            <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none" />
          </div>
        ))}

        {category === 'career' && (
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">Özgeçmiş / CV Dosyası Yükle (PDF)</label>
            <input type="file" accept=".pdf" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 text-sm" />
          </div>
        )}

        <div>
          <label className="block text-xs font-bold text-slate-300 mb-2 uppercase">Açıklama & Notlar</label>
          <textarea rows={4} required className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none resize-none" placeholder="Talebinizin detaylarını yazabilirsiniz..."></textarea>
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
            KVKK (6698 sayılı kanun) ve GDPR kapsamında kişisel verilerimin, BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LİMİTED ŞİRKETİ tarafından info@beeneo.biz üzerinden işlenmesini kabul ediyorum.
          </label>
        </div>

        <button 
          type="submit" 
          disabled={!isKvkkAccepted}
          className={`w-full py-4 rounded-xl font-bold transition-all ${
            isKvkkAccepted ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20' : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          Talebi info@beeneo.biz Adresine Gönder
        </button>
      </form>
    </div>
  );
}
