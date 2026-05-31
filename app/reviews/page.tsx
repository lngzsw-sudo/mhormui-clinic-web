import React from 'react';
import { Navbar } from '@/components/Navbar';

// 1. จำลองฟังก์ชันดึงข้อมูลจาก Google Sheets API (ปรับตามฟังก์ชันหลักของโปรเจกต์คุณได้เลย)
async function getReviews() {
  try {
    // ⚠️ เปลี่ยน URL เป็น API Endpoint หรือลิงก์ชีตที่คุณเชื่อมต่อไว้
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/config?sheet=reviews`, { 
      next: { revalidate: 3600 } // ให้รีเฟรชข้อมูลใหม่ทุกๆ 1 ชั่วโมง
    });
    if (!res.ok) throw new Error('Failed to fetch reviews');
    return res.json();
  } catch (error) {
    console.error(error);
    return []; // ถ้าพังให้ส่งอาร์เรย์ว่างกลับไปก่อนเว็บจะได้ไม่ล่ม
  }
}

interface ReviewItem {
  id: string;
  name: string;
  comment: string;
  rating: number;
  treatment: string;
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

        {/* รายการรีวิวแสดงผลแบบ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.length > 0 ? (
            reviews.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* แสดงดาวรีวิว */}
                  <div className="text-amber-400 flex items-center space-x-1">
                    {Array.from({ length: item.rating || 5 }).map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  {/* ข้อความรีวิว */}
                  <p className="text-slate-600 leading-relaxed italic">
                    "{item.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">{item.name}</span>
                  {item.treatment && (
                    <span className="bg-teal-50 text-teal-700 px-2 py-1 rounded-md font-medium">
                      {item.treatment}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            // บล็อกข้อความจำลองกรณีที่ยังไม่มีข้อมูลในชีต
            <div className="col-span-full text-center py-12 text-slate-400">
              กำลังโหลดข้อมูลรีวิว หรือยังไม่มีข้อมูลในระบบ...
            </div>
          )}
        </div>
      </main>
    </div>
  );
}