import React from 'react';

// ⚠️ สำคัญมาก: นำลิงก์ URL ที่คุณก๊อปปี้มาจาก Google Apps Script (ที่ลงท้ายด้วย /exec) มาวางแทนที่เครื่องหมายคำพูดด้านล่างนี้ครับ
const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnS1A-Q2DeLsmolScNpfbXhoNrWhx95iUhzE_5hwZjtV5GupBil6lCClXNopYB5kiFO_LJYSzI-eSGxjjwnKZJlnJfIk41WmpXpizrO4AbSaH8WuP1Asi02CFeirCOqrcVx3JVbbXCLshJGpMswZef0iA7qF18FuUE6Ou030t2ykxfQG5mel8_S-J2HhWly2areYS4vHAaGsOzWIdDjyQV1vxrG1ko3DGefYKwN9KGdgiRl-oxDbRJ4__WXT_8Zs6PLPZVOweAF_Q2-LKDtUFzWv9sJQFw&lib=MxY-TxczUkLsCsbYwOJwfXTi6PhGDX-sR";

// กำหนดโครงสร้างข้อมูลให้ TypeScript เข้าใจ
interface ServiceItem {
  id: number;
  title: string;
  image: string;
}

export default async function Home() {
  let services: ServiceItem[] = [];
  let isError = false;

  try {
    // ดึงข้อมูลจาก Google Sheets API แบบไม่เก็บแคชเพื่อความสดใหม่ของข้อมูล ({ cache: 'no-store' })
    const res = await fetch(API_URL, { cache: 'no-store' });
    if (!res.ok) throw new Error('Network response was not ok');
    services = await res.json();
  } catch (error) {
    console.error("Failed to fetch services:", error);
    isError = true;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. HEADER & NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-wider text-teal-600">MhorMui</span>
            <span className="text-xs uppercase text-slate-400 tracking-widest hidden sm:block">Clinic</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
            <a href="#" className="text-teal-600 border-b-2 border-teal-600 pb-1">หน้าแรก</a>
            <a href="#" className="hover:text-teal-600 transition">โปรแกรมรักษา</a>
            <a href="#" className="hover:text-teal-600 transition">สาระความรู้</a>
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

      {/* 2. HERO SECTION */}
      <section className="relative bg-gradient-to-r from-teal-50 to-emerald-50/30 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              การฝังเข็มกระตุ้นการเจริญเติบโต <span className="text-teal-600">รักษาโรค</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              การฝังเข็มกระตุ้นการเจริญเติบโตเป็นการกระตุ้นโกรทฮอร์โมน (Growth Hormone) โดยแพทย์จีน จะฝังเข็มตามเส้นลมปราณเพื่อปรับสมดุล และบำรุงอวัยวะภายใน
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

      {/* 3. SERVICES GRID SECTION (ดึงข้อมูลจาก Sheets มาแสดงผล) */}
      <section className="py-20 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">คลินิกฝังเข็ม เพิ่มความสูง รักษาโรค</h2>
            <p className="text-teal-200 max-w-2xl mx-auto">
              คอร์สเพิ่มความสูง ต้อง "หมอหมุ่ยคลินิก" มั่นใจ โดยทีมแพทย์และผู้ชำนาญการเฉพาะทาง
            </p>
          </div>

          {/* ตรวจสอบว่าระบบมีปัญหาการดึงข้อมูลหรือไม่ */}
          {isError ? (
            <div className="text-center py-12 bg-teal-900/50 rounded-2xl border border-teal-700 text-teal-200">
              เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล Google Sheets กรุณาตรวจสอบ API_URL
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-12 text-teal-300">
              กำลังโหลดข้อมูลบริการ หรือยังไม่มีข้อมูลในตาราง...
            </div>
          ) : (
            /* เมื่อดึงข้อมูลสำเร็จ ข้อมูลจะลูปตามจำนวนแถวใน Google Sheets ทันที */
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