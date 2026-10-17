'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import blogsData from '@/data/blogs.json';

export default function BlogMediaPage({ params }: { params: Promise<{ lang: 'de' | 'en' | 'tr' }> }) {
  // In Next.js 15 Client Components wird use() für Promises genutzt
  const { lang } = use(params);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar lang={lang} />

      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Bilgi Merkezi & <span className="text-blue-500">Marblism Medya</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Insgesamt {blogsData.length} Fachartikel, technische Skizzen und Analysen zu Engineering, sureNEO LOS und Lvkon.
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((post) => (
            <article key={post.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col">
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <img 
                  src={post.mediaUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute top-3 left-3 bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-slate-100 line-clamp-2">{post.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
                <Link href={`/${lang}/blog`} className="text-blue-400 font-semibold text-sm hover:underline">
                  Devamını Oku →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}