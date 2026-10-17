import React from 'react';
import SmartContactForm from '@/components/SmartContactForm';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'tr' }];
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <main className="min-h-screen bg-slate-50 py-24 px-6 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Lass uns sprechen</h1>
        <p className="text-slate-600">Sprache: {lang}</p>
      </div>
      <div className="w-full max-w-4xl">
        <SmartContactForm defaultCategory="general" />
      </div>
    </main>
  );
}