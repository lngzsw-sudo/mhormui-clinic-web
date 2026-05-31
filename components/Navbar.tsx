import React from 'react';
import Link from 'next/link';

export function Navbar({ currentPath }: { currentPath: string }) {
  // ฟังก์ชันช่วยเช็กว่าอยู่หน้านั้นๆ ไหม เพื่อไฮไลต์สีเขียว
  const linkClass = (path: string) => 
    currentPath === path 
      ? "text-teal-600 border-b-2 border-teal-600 pb-1 font-semibold" 
      : "hover:text-teal-600 transition text-slate-600 font-medium";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-2xl font-bold tracking-wider text-teal-600">MhorMui</Link>
          <span className="text-xs uppercase text-slate-400 tracking-widest hidden sm:block">Clinic</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={linkClass("/")}>หน้าแรก</Link>
          <Link href="/services" className={linkClass("/services")}>โปรแกรมรักษา</Link>
          <Link href="/articles" className={linkClass("/articles")}>สาระความรู้</Link>
          <Link href="/reviews" className={linkClass("/reviews")}>รีวิว</Link>
          <Link href="/rates" className={linkClass("/rates")}>อัตราค่าบริการ</Link>
          <Link href="/contact" className={linkClass("/contact")}>ติดต่อเรา</Link>
        </nav>

        <div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-medium shadow-sm transition">
            ปรึกษาฟรี! →
          </button>
        </div>
      </div>
    </header>
  );
}