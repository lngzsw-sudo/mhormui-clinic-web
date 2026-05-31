import React from 'react';
import { Navbar } from '@/components/Navbar'; // 1. เติมปีกกาครอบ Navbar
import { BASE_API_URL } from '../../api-config';

export default async function ServicesPage() {
  let services = [];
  try {
    const res = await fetch(`${BASE_API_URL}?sheet=Services`, { cache: 'no-store' });
    services = res.ok ? await res.json() : [];
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar currentPath="/services" />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center space-y-3 mb-16">
          <h1 className="text-3xl font-bold sm:text-4xl text-slate-900">โปรแกรมการรักษาทั้งหมด</h1>
          <p className="text-slate-500">บริการดูแลรักษาสุขภาพด้วยศาสตร์แพทย์แผนจีนโดยผู้ชำนาญการ</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service: any) => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 text-center bg-amber-50/20">
                <h3 className="font-bold text-slate-900">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}