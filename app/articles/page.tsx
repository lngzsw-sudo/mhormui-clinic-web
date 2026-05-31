import React from 'react';
import Link from 'next/link'; // อิมพอร์ต Link เช่นกัน

// ⚠️ ใส่ลิงก์ URL ของคุณตัวเดิมลงตรงนี้ครับ
const BASE_API_URL = "https://script.google.com/macros/s/AKfycbx19EGUPmjaS2IBStk9MEf0fbRwrffCKdx4SSDXnnA7BQXlQ1xvV3cvKdvtAgyZYdgHiw/exec";

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
    if (res.ok) {
      articles = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch articles:", error);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. HEADER & NAVBAR (ปรับเมนูให้เหมือนหน้าแรกและใช้งานได้จริง) */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-bold tracking-wider text-teal-600">MhorMui</Link>
            <span className="text-xs uppercase text-slate-400 tracking-widest hidden sm:block">Clinic</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
            <Link href="/" className="hover:text-teal-600 transition">หน้าแรก</Link>
            <a href="#" className="hover:text-teal-600 transition">โปรแกรมรักษา</a>
            <Link href="/articles" className="text-teal-600 border-b-2 border-teal-600 pb-1">สาระความรู้</Link>
            <a href="#" className="hover:text-teal-600 transition">รีวิว</a>
            <a href="#" className="hover:text-teal-600 transition">อัตราค่าบริการ</a>
            <a href="#" className="hover:text-teal-600 transition">ติดต่อเรา</a>
          </nav>

          <div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-medium shadow-sm transition-all duration-200 transform hover:scale-105">
              ปรึกษาฟรี! →
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-teal-700 rounded-3xl p-8 md:p-12 text-white text-center space-y-4 mb-12 shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold">สาระความรู้ "หมอหมุ่ยคลินิก"</h1>
          <p className="text-teal-100 max-w-xl mx-auto text-sm md:text-base">
            รวมบทความสุขภาพ การแพทย์แผนจีน สาระน่ารู้เกี่ยวกับการฝังเข็ม ครอบแก้ว และการดูแลตัวเองอย่างถูกวิธี
          </p>
        </div>

        {/* ARTICLES GRID */}
        {articles.length === 0 ? (
          <div className="text-center py-12 text-slate-400">กำลังดึงข้อมูลบทความล่าสุด...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-slate-100 grid grid-cols-1 sm:grid-cols-3">
                <div className="h-48 sm:h-full bg-slate-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 sm:col-span-2 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-slate-900 leading-snug hover:text-teal-600 transition cursor-pointer">{item.title}</h2>
                    <p className="text-slate-500 text-sm line-clamp-3">{item.description}</p>
                  </div>
                  <button className="text-teal-600 font-semibold text-sm flex items-center hover:text-teal-700">
                    อ่านเพิ่มเติม →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}