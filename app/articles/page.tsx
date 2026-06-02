import React from 'react';
import { Navbar } from '@/components/Navbar';
import { BASE_API_URL } from '../../api-config';
import { Footer } from '@/components/Footer'; // นำเข้า Footer เตรียมใช้งาน
import { Metadata } from 'next';

// 📝 1. เพิ่มค่า Metadata เพื่อดันอันดับ SEO คลังบทความของคลินิกบน Google
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
    // ปรับสไตล์คุมกรอบให้ Footer เกาะอยู่ขอบล่างสุดเสมอเมื่อหน้าจอมีเนื้อหาน้อย
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      
      <div>
        <Navbar currentPath="/articles" />
        
        <main className="max-w-7xl mx-auto px-4 py-12">
          {/* 🛠️ 2. ปรับปรุงชื่อแบรนด์ภาษาไทยให้ถูกต้องตรงตามเอกลักษณ์คลินิก */}
          <div className="bg-teal-700 rounded-3xl p-8 md:p-12 text-white text-center space-y-4 mb-12 shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold">สาระความรู้ "หมอหมุยคลินิค"</h1>
            <p className="text-teal-100 max-w-xl mx-auto text-sm">รวมบทความสุขภาพ การแพทย์แผนจีน และการดูแลตัวเองอย่างถูกวิธี</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 grid grid-cols-1 sm:grid-cols-3">
                <div className="h-48 sm:h-full bg-slate-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 sm:col-span-2 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-slate-900 leading-snug hover:text-teal-600 transition cursor-pointer">{item.title}</h2>
                    <p className="text-slate-500 text-sm line-clamp-3">{item.description}</p>
                  </div>
                  <button className="text-teal-600 font-semibold text-sm flex items-center hover:text-teal-700 w-fit">อ่านเพิ่มเติม →</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* 🛠️ 3. วางแท็ก Footer ปิดท้ายหน้าต่างโครงสร้างเว็บด้านล่างสุด */}
      <Footer />

    </div>
  );
}