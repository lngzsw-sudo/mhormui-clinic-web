import React from 'react';
import { Navbar } from '@/components/Navbar'; // 1. เติมปีกกาครอบ Navbar

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar currentPath="/contact" />
      <main className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-slate-900">ติดต่อ หมอหมุยคลินิก</h1>
          <div className="text-slate-600 space-y-4 leading-relaxed">
            <div>
              <p className="font-bold text-slate-800 text-lg">📍 ที่อยู่คลินิก:</p>
              <p className="mt-1">36/3 ถ.บางลี่-หนองวัลย์เปรียง​ ต.สองพี่น้อง​ อ.สองพี่น้อง​ จ.สุพรรณบุรี​0889145199</p>
            </div>
            <div>
              <p className="font-bold text-slate-800 text-lg">⏰ วัน/เวลา ทำการ:</p>
              <p className="mt-1">อังคาร - อาทิตย์ : 09:00 - 19:00 น. <span className="text-rose-500 font-semibold">(หยุดทุกวันจันทร์)</span></p>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 h-80 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center text-slate-400 font-medium border-4 border-white">
          <div className="p-4 text-center space-y-2">
            <p className="text-slate-500 font-semibold">📍 แผนที่กูเกิลแมพส์ (Google Maps)</p>
            <p className="text-xs text-slate-400">ระบบจำลองพื้นที่สำหรับฝัง iframe แผนที่จริงบนหน้าจอดิสเพลย์</p>
          </div>
        </div>
      </main>
    </div>
  );
}