import React from 'react';
import { Navbar } from '@/components/Navbar';
import { BASE_API_URL } from '../../api-config';
import { Footer } from '@/components/Footer'; 
import { Metadata } from 'next';
import Link from 'next/link'; // 🔗 1. อิมพอร์ตระบบลิงก์เข้ามาใช้งาน

export const metadata: Metadata = {
  title: "สาระความรู้แพทย์แผนจีน คลังบทความสุขภาพ | หมอหมุยคลินิค",
  description: "รวบรวมสาระน่ารู้เกี่ยวกับศาสตร์แพทย์แผนจีน การรักษาโรคด้วยการฝังเข็ม ครอบแก้ว และเคล็ดลับการดูแลสุขภาพฟื้นฟูร่างกายอย่างถูกวิธีโดยหมอหมุยคลินิค",
};

interface ArticleItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default async function ArticlesPage() {
  let articles: ArticleItem[] = [];
  try {
    const res = await fetch(`${BASE_API_URL}?sheet=Articles`, { cache: 'no-store' });
    articles = res.ok ? await res.json() : [];
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Navbar currentPath="/articles" />
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-teal-700 rounded-3xl p-8 md:p-12 text-white text-center space-y-4 mb-12 shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold">สาระความรู้ "หมอหมุยคลินิค"</h1>
            <p className="text-teal-100 max-w-xl mx-auto text-sm">รวมบทความสุขภาพ การแพทย์แผนจีน และการดูแลตัวเองอย่างถูกวิธี</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 grid grid-cols-1 sm:grid-cols-3">
                {/* 🔗 2. เพิ่มลิงก์ครอบรูปภาพ ให้คนไข้จิ้มที่รูปเพื่อเปิดอ่านได้ด้วย */}
                <div className="h-48 sm:h-full bg-slate-100">
                  <Link href={`/articles/${item.id}`} className="block h-full w-full">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                  </Link>
                </div>
                
                <div className="p-6 sm:col-span-2 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* 🔗 3. เพิ่มลิงก์ครอบชื่อหัวข้อบทความ */}
                    <Link href={`/articles/${item.id}`}>
                      <h2 className="text-xl font-bold text-slate-900 leading-snug hover:text-teal-600 transition cursor-pointer">{item.title}</h2>
                    </Link>
                    <p className="text-slate-500 text-sm line-clamp-3">{item.description}</p>
                  </div>
                  
                  {/* 🔗 4. เปลี่ยนจากแท็ก <button> ธรรมดา ให้กลายเป็นแท็ก <Link> วิ่งไปหน้าดีเทลจริง */}
                  <Link href={`/articles/${item.id}`} className="text-teal-600 font-semibold text-sm flex items-center hover:text-teal-700 w-fit transition">
                    อ่านเพิ่มเติม →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}