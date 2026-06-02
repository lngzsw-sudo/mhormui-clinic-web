import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BASE_API_URL } from '../../../api-config'; // 🔗 พิกัดถอยออก 3 ชั้นเจอไฟล์นอกสุดพอดี
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic'; // บังคับดึงข้อมูลสดใหม่เสมอ ป้องกันบั๊กหน้าขาวค้างตอน Build

interface ArticleItem {
  id: number | string;
  title: string;
  image: string;
  description: string;
  content?: string;
}

async function getArticles(): Promise<ArticleItem[]> {
  try {
    const res = await fetch(`${BASE_API_URL}?sheet=Articles`, { cache: 'no-store' });
    return res.ok ? await res.json() : [];
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const resolvedParams = typeof params.then === 'function' ? await params : params;
  const id = resolvedParams?.id;
  const articles = await getArticles();
  const article = articles.find((item) => item.id.toString() === id?.toString());
  
  return {
    title: article ? `${article.title} | หมอหมุยคลินิค` : "บทความสุขภาพ | หมอหมุยคลินิค",
    description: article ? article.description : "สาระความรู้แพทย์แผนจีน บำบัดรักษาโรคอย่างตรงจุด บมความโดยหมอหมุยคลินิค",
  };
}

export default async function ArticleDetailPage({ params }: { params: any }) {
  // รองรับการแกะค่าพารามิเตอร์แบบปลอดภัยทั้ง Next.js 14 และ 15
  const resolvedParams = typeof params.then === 'function' ? await params : params;
  const id = resolvedParams?.id;

  const articles = await getArticles();
  const article = articles.find((item) => item.id.toString() === id?.toString());

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Navbar currentPath="/articles" />
        
        <main className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <Link href="/articles" className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center mb-6 w-fit transition">
            ← กลับไปหน้าสาระความรู้
          </Link>

          <article className="space-y-8 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              {article.title}
            </h1>

            <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-inner bg-slate-100">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-slate-600 leading-relaxed text-base md:text-lg space-y-5 pt-4 whitespace-pre-line border-t border-slate-100 font-normal">
              {article.content || article.description}
            </div>
          </article>
        </main>
      </div>

      <Footer />
    </div>
  );
}