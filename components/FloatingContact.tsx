import React from 'react';

export function FloatingContact() {
  // ⚠️ เปลี่ยนเป็นลิงก์จริงของ หมอหมุ่ยคลินิก ได้เลยครับ
  // รูปแบบลิงก์ LINE OA: https://lin.ee/XXXXXXX หรือ LINE ส่วนตัว: https://line.me/ti/p/~ไอดีไลน์
  const LINE_URL = "https://line.me/ti/p/~@969gymdr"; 
  
  // รูปแบบลิงก์ Messenger: https://m.me/ชื่อยูสเซอร์เนมเพจ
  const MESSENGER_URL = "https://m.me/Mhormui";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      
      {/* ปุ่ม LINE */}
      <a 
        href={LINE_URL}
        target="_blank"             // สั่งให้เปิดแท็บใหม่ ไม่ทับหน้าเว็บเดิม
        rel="noopener noreferrer"   // ระบบความปลอดภัยป้องกันการแฮกแท็บเบราว์เซอร์
        className="bg-[#06C755] hover:bg-[#05b34c] text-white w-14 h-14 rounded-full shadow-xl hover:scale-110 transition duration-200 flex items-center justify-center font-bold text-sm tracking-wide"
        title="แชททาง LINE"
      >
        LINE
      </a>

      {/* ปุ่ม Facebook Messenger */}
      <a 
        href={MESSENGER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1877F2] hover:bg-[#166fe5] text-white w-14 h-14 rounded-full shadow-xl hover:scale-110 transition duration-200 flex items-center justify-center font-bold text-sm tracking-wide"
        title="แชททาง Facebook"
      >
        FB
      </a>

    </div>
  );
}