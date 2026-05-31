import React from 'react';
import { Navbar } from '@/components/Navbar'; //  เติมปีกกาครอบแบบนี้ครับ เพื่อนำเข้าให้ถูกตัว
import { BASE_API_URL } from '../api-config'; // ดึงลิงก์ API มาจากไฟล์ตั้งค่าร่วมกัน

interface ServiceItem {
  id: number;
  title: string;
  image: string;
}

export default async function Home() {
  let services: ServiceItem[] = [];
  let isError = false;

  try {
    // ส่งพารามิเตอร์ ?sheet=Services ไปดึงเฉพาะข้อมูลตารางบริการจาก Google Sheets
    const res = await fetch(`${BASE_API_URL}?sheet=Services`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Network response was not ok');
    services = await res.json();
  } catch (error) {
    console.error("Failed to fetch services:", error);
    isError = true;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. เรียกใช้งาน NAVBAR (ส่ง path ปัจจุบันไปเพื่อให้เมนูไฮไลต์สีเขียว) */}
      <Navbar currentPath="/" />

      {/* 2. HERO SECTION */}
      <section className="relative bg-gradient-to-r from-teal-50 to-emerald-50/30 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              การฝังเข็มกระตุ้นการการทำงานของร่างกาย <span className="text-teal-600">รักษาโรค</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
  การฝังเข็มบำบัดและฟื้นฟูร่างกาย โดยแพทย์จีน ชำนาญการฝังเข็มตามเส้นลมปราณเพื่อปรับสมดุลและบำรุงอวัยวะภายใน 
  <span className="block mt-2 text-teal-700 font-medium text-base">📍 พร้อมให้บริการชาวอำเภอสองพี่น้อง และจังหวัดสุพรรณบุรี</span>
</p>
            <div className="pt-2">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md transition">
                ดูรายละเอียดเพิ่มเติม
              </button>
            </div>
          </div>
          
          <div className="relative h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800" 
              alt="MhorMui Clinic Hero" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID SECTION */}
      <section className="py-20 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">หมอหมุยคลินิก ฝังเข็มปรับสมดุล รักษาโรค</h2>
            <p className="text-teal-200 max-w-2xl mx-auto">
              กระตุ้นการทำงานของร่างกายและปรับสมดุลเส้นลมปราณ มั่นใจในการดูแลอย่างตรงจุดโดยแพทย์แผนจีนชำนาญการ
            </p>
          </div>

          {/* ตรวจสอบสถานะการเชื่อมต่อ API หลังบ้าน */}
          {isError ? (
            <div className="text-center py-12 bg-teal-900/50 rounded-2xl border border-teal-700 text-teal-200">
              เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล Google Sheets กรุณาตรวจสอบลิงก์ในไฟล์ app/api-config.ts
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-12 text-teal-300">
              กำลังโหลดข้อมูลบริการล่าสุด...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-teal-700/30 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-slate-800"
                >
                  <div className="h-48 overflow-hidden bg-slate-100">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-5 text-center bg-amber-50/50">
                    <h3 className="font-bold text-slate-900 line-clamp-1">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. FLOATING CONTACT BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <a href="#" className="bg-[#06C755] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition text-center font-bold text-sm">LINE</a>
        <a href="#" className="bg-[#1877F2] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition text-center font-bold text-sm">FB</a>
      </div>

    </div>
  );
}