import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'tr' }];
}

export default async function HomePage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar lang={lang} />
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Engineering. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Lean Management.
            </span> <br/>
            E-Mobility.
          </h1>
          <div className="flex gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold">
              Jetzt Anfragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}