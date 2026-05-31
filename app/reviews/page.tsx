import React from 'react';
import Navbar from '@/components/Navbar';
import { BASE_API_URL } from '../../api-config';

export default async function ReviewsPage() {
  let reviews = [];
  try {
    const res = await fetch(`${BASE_API_URL}?sheet=Reviews`, { cache: 'no-store' });
    reviews = res.ok ? await res.json() : [];
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar currentPath="/reviews" />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 text-slate-900">รีวิวผลการรักษาจากผู้ใช้จริง</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review: any) => (
            <div key={review.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100">
              <div className="h-64 bg-slate-100 overflow-hidden">
                <img src={review.image} alt={review.title} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-slate-800 text-center">{review.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}