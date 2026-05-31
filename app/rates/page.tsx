import React from 'react';
import Navbar from '@/components/Navbar';
import { BASE_API_URL } from '../../api-config';

export default async function RatesPage() {
  let rates = [];
  try {
    const res = await fetch(`${BASE_API_URL}?sheet=Rates`, { cache: 'no-store' });
    rates = res.ok ? await res.json() : [];
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar currentPath="/rates" />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-3xl font-bold text-slate-900">อัตราค่าบริการ</h1>
          <p className="text-slate-500">มั่นใจและโปร่งใสกับราคามาตรฐานโดยทีมแพทย์ผู้ชำนาญการ</p>
        </div>
        <div className="space-y-4">
          {rates.map((item: any) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
              <span className="text-teal-600 font-bold bg-teal-50 px-4 py-2 rounded-xl text-center whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}