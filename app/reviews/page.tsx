import React from 'react';
import { Navbar } from '@/components/Navbar';
import { BASE_API_URL } from '@/app/api-config'; // 🔗 อิมพอร์ตตัวแปรลิงก์กลางที่ใช้ได้จริงมาแทน

async function getReviews() {
  try {
    // ดึงข้อมูลผ่านตัวแปรเดียวกระบอกเดียวกับหน้าอื่นชัวร์ๆ
    // 💡 โน้ตเพิ่มเติม: ถ้าหน้าอื่นของคุณเรียกใช้ในรูปแบบพ่วงท้ายอื่น เช่น `${BASE_API_URL}/api/config?sheet=...` 
    // ให้ปรับเปลี่ยนแก้ไขรูปแบบการต่อคำตรงนี้ให้เหมือนหน้า services ได้เลยนะครับ
    const res = await fetch(`${BASE_API_URL}?sheet=Reviews`, { 
      next: { revalidate: 3600 } 
    });
    if (!res.ok) throw new Error('Failed to fetch reviews');
    return res.json();
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}

interface ReviewItem {
  id: string;
  title: string;
  image: string;
}

export default async function ReviewsPage() {
  const reviews: ReviewItem[] = await getReviews();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar currentPath="/reviews" />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center space-y-3 mb-12">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
            ความประทับใจจากคนไข้
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            เสียงตอบรับและรีวิวการรักษาจริงจากคนไข้ที่ไว้วางใจให้หมอหมุ่ยคลินิกดูแลรักษาโรคและปรับสมดุลร่างกาย
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews && reviews.length > 0 ? (
            reviews.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition duration-300"
              >
                <div className="relative w-full h-64 bg-slate-100 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-800 text-lg leading-relaxed">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-400">
              กำลังโหลดข้อมูลรีวิว หรือยังไม่มีข้อมูลในระบบ...
            </div>
          )}
        </div>
      </main>
    </div>
  );
}