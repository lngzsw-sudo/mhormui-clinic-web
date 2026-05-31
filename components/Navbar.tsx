import React from 'react';
import Link from 'next/link';

export function Navbar({ currentPath }: { currentPath: string }) {
  // ฟังก์ชันช่วยเช็กพาธปัจจุบัน เพื่อไฮไลต์ปุ่มเมนูให้เป็นสีเขียวและขีดเส้นใต้
  const linkClass = (path: string) => 
    currentPath === path 
      ? "text-teal-600 border-b-2 border-teal-600 pb-1 font-bold transition duration-200" 
      : "hover:text-teal-600 transition text-slate-600 font-medium duration-200";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO ฝั่งซ้าย (กดแล้วเด้งกลับหน้าแรก) */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-2xl font-bold tracking-wider text-teal-600 hover:opacity-80 transition">
            MhorMui
          </Link>
          <span className="text-xs uppercase text-slate-400 tracking-widest hidden sm:block">Clinic</span>
        </div>

        {/* แถบเมนูตรงกลาง (เปลี่ยนจาก <a href="#"> เป็น <Link href="/พาธ"> เรียบร้อย) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={linkClass("/")}>หน้าแรก</Link>
          <Link href="/services" className={linkClass("/services")}>โปรแกรมรักษา</Link>
          <Link href="/articles" className={linkClass("/articles")}>สาระความรู้</Link>
          <Link href="/reviews" className={linkClass("/reviews")}>รีวิว</Link>
          <Link href="/rates" className={linkClass("/rates")}>อัตราค่าบริการ</Link>
          <Link href="/contact" className={linkClass("/contact")}>ติดต่อเรา</Link>
        </nav>

        {/* ปุ่มฝั่งขวา */}
        <div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-medium shadow-sm transition duration-200 transform hover:scale-105">
            ปรึกษาฟรี! →
          </button>
        </div>
      </div>
    </header>
  );
}