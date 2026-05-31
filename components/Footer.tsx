import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* คอลัมน์ที่ 1: เกี่ยวกับคลินิก */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg">หมอหมุยคลินิกแพทย์แผนจีน</h4>
          <p className="text-sm leading-relaxed text-slate-400">
            มุ่งมั่นดูแลรักษาสุขภาพ ฟื้นฟูร่างกาย และปรับสมดุลอวัยวะภายในด้วยศาสตร์แพทย์แผนจีนอย่างปลอดภัยและได้มาตรฐาน โดยทีมแพทย์ผู้ชำนาญการ
          </p>
          <p className="text-xs text-slate-500">
            *เลขที่ใบอนุญาตสถานพยาบาล: [๗๒๑๐๙๐๐๑๖๔]*
          </p>
        </div>

        {/* คอลัมน์ที่ 2: ลิงก์ภายในเว็บ (ช่วยดันคะแนน SEO) */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-base">แผนผังเว็บไซต์</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li><Link href="/" className="hover:text-teal-400 transition">หน้าแรก</Link></li>
            <li><Link href="/services" className="hover:text-teal-400 transition">โปรแกรมรักษา</Link></li>
            <li><Link href="/articles" className="hover:text-teal-400 transition">สาระความรู้</Link></li>
            <li><Link href="/reviews" className="hover:text-teal-400 transition">รีวิวจากคนไข้</Link></li>
            <li><Link href="/rates" className="hover:text-teal-400 transition">อัตราค่าบริการ</Link></li>
            <li><Link href="/contact" className="hover:text-teal-400 transition">ติดต่อเรา</Link></li>
          </ul>
        </div>

        {/* คอลัมน์ที่ 3: ข้อมูลติดต่อและเวลาทำการ */}
        <div className="space-y-3 text-sm">
          <h4 className="text-white font-bold text-base">การติดต่อและที่ตั้ง</h4>
          <p>📍 36/3 ถ.บางลี่-หนองวัลย์เปรียง ต.สองพี่น้อง อ.สองพี่น้อง จ.สุพรรณบุรี 72110</p>
          <p>📞 โทรติดต่อ: <a href="tel:0889145199" className="text-teal-400 hover:underline">088-9145199</a></p>
          <p>⏰ เวลาทำการ: อังคาร - อาทิตย์ 09:00 - 19:00 น. <span className="text-rose-400">(หยุดวันจันทร์)</span></p>
        </div>

      </div>

      {/* แถบล่างสุด: ข้อกำหนดและลิขสิทธิ์ */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs text-slate-500 px-4 space-y-2">
        <p>© {new Date().getFullYear()} MhorMui Clinic. All rights reserved.</p>
        <p className="max-w-3xl mx-auto text-[10px] leading-relaxed">
          คำแนะนำ: ข้อมูลบนเว็บไซต์นี้มีวัตถุประสงค์เพื่อการให้ความรู้เบื้องต้นเท่านั้น ไม่สามารถใช้ทดแทนการตรวจวินิจฉัยหรือเข้าหารับการรักษาจากแพทย์โดยตรงได้ ผลลัพธ์ของการรักษาอาจแตกต่างกันไปในแต่ละบุคคล ขึ้นอยู่กับสภาพร่างกายและโรคประจำตัวของคนไข้
        </p>
      </div>
    </footer>
  );
}