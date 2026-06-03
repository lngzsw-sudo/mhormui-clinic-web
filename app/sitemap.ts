import { MetadataRoute } from 'next';
import { BASE_API_URL } from '../api-config'; // ดึงพิกัด API เพื่อไปขอรายชื่อบทความ

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mhormui.com';

  // 1. กำหนดแผนที่หน้าหลักทั้งหมดของเว็บไซต์
  const staticRoutes = ['', '/services', '/rates', '/reviews', '/articles', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8, // ให้ความสำคัญหน้าแรกสูงสุด
    })
  );

  // 2. ไปดึงไอดีบทความทั้งหมดจาก Google Sheets มาทำเป็นลิงก์แผนที่
  let dynamicArticleRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${BASE_API_URL}?sheet=Articles`, { cache: 'no-store' });
    if (res.ok) {
      const articles = await res.json();
      dynamicArticleRoutes = articles.map((article: any) => ({
        url: `${baseUrl}/articles/${article.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7, // ให้ความสำคัญหน้าบทความรองลงมา
      }));
    }
  } catch (error) {
    console.error("Error generating sitemap for articles:", error);
  }

  // รวมแผนที่หน้าหลักและหน้าบทความเข้าด้วยกันส่งให้ Google
  return [...staticRoutes, ...dynamicArticleRoutes];
}