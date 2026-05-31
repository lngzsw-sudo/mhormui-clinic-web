import React from 'react';
import { Navbar } from '@/components/Navbar';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar currentPath="/contact" />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ข้อมูลการติดต่อฝั่งซ้าย */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">ติดต่อ หมอหมุ่ยคลินิก</h1>
            
            <div className="text-slate-600 space-y-4 leading-relaxed">
              
              {/* ที่อยู่ */}
              <div className="bg-teal-50/50 p-5 rounded-2xl border border-teal-100/50">
                <p className="font-bold text-teal-800 text-lg flex items-center gap-2">
                  📍 ที่อยู่คลินิก
                </p>
                <p className="mt-1 text-slate-700 font-medium">
                  36/3 ถ.บางลี่-หนองวัลย์เปรียง ต.สองพี่น้อง อ.สองพี่น้อง จ.สุพรรณบุรี 72110
                </p>
              </div>

              {/* เบอร์โทรศัพท์ (กดโทรออกได้ทันที) */}
              <div className="bg-sky-50/50 p-5 rounded-2xl border border-sky-100/50">
                <p className="font-bold text-sky-800 text-lg flex items-center gap-2">
                  📞 เบอร์โทรศัพท์ติดต่อ
                </p>
                <a 
                  href="tel:0889145199" 
                  className="mt-1 inline-block text-slate-700 font-bold text-xl hover:text-sky-600 transition"
                >
                  088-9145199
                </a>
                <span className="block text-xs text-slate-400 mt-1">*บนมือถือสามารถคลิกที่เบอร์เพื่อโทรออกได้ทันที</span>
              </div>

              {/* เวลาทำการ */}
              <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-100/50">
                <p className="font-bold text-amber-800 text-lg flex items-center gap-2">
                  ⏰ วัน/เวลา ทำการ
                </p>
                <p className="mt-1 text-slate-700 font-medium">
                  อังคาร - อาทิตย์ : 09:00 - 19:00 น. 
                  <span className="block text-rose-500 font-bold mt-1">(หยุดทุกวันจันทร์)</span>
                </p>
              </div>
              
            </div>
          </div>

          {/* แผนที่กูเกิลแมพส์พิกัด อำเภอสองพี่น้อง สุพรรณบุรี ฝั่งขวา */}
          <div className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-md border-4 border-white relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.3924002395484!2d100.03129837592225!3d14.23031688603331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e251977e4daf43%3A0xd958cfe78f6b33a0!2z4Lir4Lih4Lit4Lir4Lih4Li44Lii4LiE4Lil4Li04LiZ4Li04LiB4LmB4Lie4LiX4Lii4LmM4LmB4Lic4Lii4LiI4Li14LiZIOC4neC4seC4h-C5gOC4guC5h-C4oSDguKLguLLguIjguLXguJkg4LiZ4Lin4LiU4LiX4Li44Lii4Lir4LiZ4LiyIOC4o-C4oeC4ouC4siDguIHguLHguKfguIvguLI!5e0!3m2!1sth!2sth!4v1780207768380!5m2!1sth!2sth" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </main>
    </div>
  );
}