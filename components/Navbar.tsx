"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export function Navbar({ currentPath }: { currentPath: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path: string) => 
    currentPath === path 
      ? "text-teal-600 md:border-b-2 md:border-teal-600 md:pb-1 font-bold transition duration-200" 
      : "hover:text-teal-600 transition text-slate-600 font-medium duration-200";

  const mobileLinkClass = (path: string) =>
    currentPath === path
      ? "block px-4 py-3 rounded-xl bg-teal-50 text-teal-700 font-bold"
      : "block px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-teal-600 font-medium transition";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">
        
        {/* LOGO ฝั่งซ้าย */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-2xl font-bold tracking-wider text-teal-600 hover:opacity-80 transition">
            MhorMui
          </Link>
          <span className="text-xs uppercase text-slate-400 tracking-widest hidden sm:block">Clinic</span>
        </div>

        {/* แถบเมนูตรงกลาง (จอคอมพิวเตอร์) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={linkClass("/")}>หน้าแรก</Link>
          <Link href="/services" className={linkClass("/services")}>โปรแกรมรักษา</Link>
          <Link href="/articles" className={linkClass("/articles")}>สาระความรู้</Link>
          <Link href="/reviews" className={linkClass("/reviews")}>รีวิว</Link>
          <Link href="/rates" className={linkClass("/rates")}>อัตราค่าบริการ</Link>
          <Link href="/contact" className={linkClass("/contact")}>ติดต่อเรา</Link>
        </nav>

        {/* ปุ่มฝั่งขวาจอคอม */}
        <div className="hidden md:block">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-medium shadow-sm transition duration-200 transform hover:scale-105">
            ปรึกษาฟรี! →
          </button>
        </div>

        {/* ปุ่มสามขีด Hamburger (จอมือถือ) */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-teal-600 hover:text-teal-700 p-2 rounded-xl focus:outline-none bg-slate-50 border border-slate-100 flex items-center justify-center"
            style={{ width: '44px', height: '44px' }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6 block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* บล็อกเมนูสไลด์ลงมาบนมือถือ (แก้ไขจุดพิมพ์เบิ้ลบรรทัดที่ 77 เรียบร้อยแล้วครับ) */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 border-t border-slate-100 bg-white px-4 py-4 space-y-1 shadow-xl z-50">
          <Link href="/" onClick={() => setIsOpen(false)} className={mobileLinkClass("/")}>หน้าแรก</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className={mobileLinkClass("/services")}>โปรแกรมรักษา</Link>
          <Link href="/articles" onClick={() => setIsOpen(false)} className={mobileLinkClass("/articles")}>สาระความรู้</Link>
          <Link href="/reviews" onClick={() => setIsOpen(false)} className={mobileLinkClass("/reviews")}>รีวิว</Link>
          <Link href="/rates" onClick={() => setIsOpen(false)} className={mobileLinkClass("/rates")}>อัตราค่าบริการ</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={mobileLinkClass("/contact")}>ติดต่อเรา</Link>
          
          <div className="pt-4 pb-2 border-t border-slate-100">
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-medium shadow-sm transition">
              ปรึกษาฟรี! →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}