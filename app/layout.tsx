import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingContact } from "@/components/FloatingContact"; // 1. อิมพอร์ตปุ่มลอยเข้ามา



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "หมอหมุยคลินิก ฝังเข็ม เพิ่มความสูง รักษาโรค",
  description: "คอร์สเพิ่มความสูง กระตุ้นโกรทฮอร์โมน ปรับสมดุลร่างกายด้วยศาสตร์แพทย์แผนจีน โดยทีมแพทย์ผู้ชำนาญการ",
  // ✨ เพิ่มบล็อกยืนยันตัวตน Google ตรงนี้ครับ
  verification: {
    google: 'USfItctwfpAviaDYSsxahD7Yg8fU506ppoCf54w3v2U',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ชุดข้อมูล Schema สำหรับบอท Google Search
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "หมอหมุ่ยคลินิกแพทย์แผนจีน",
    "image": "https://mhormui.com/favicon.ico", // ✨ แก้โดเมนตรงนี้
    "@id": "https://mhormui.com",               // ✨ แก้โดเมนตรงนี้
    "url": "https://mhormui.com",               // ✨ แก้โดเมนตรงนี้
    "telephone": "088-9145199",
    "priceRange": "฿฿",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "36/3 ถ.บางลี่-หนองวัลย์เปรียง ต.สองพี่น้อง",
      "addressLocality": "อำเภอสองพี่น้อง",
      "addressRegion": "จังหวัดสุพรรณบุรี",
      "postalCode": "72110",
      "addressCountry": "TH"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <html lang="th">
      <body>
        {/* 📝 เพิ่มสคริปต์ฝังข้อมูล SEO ส่งให้ Google ตรงนี้ครับ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {children}
      </body>
    </html>
  );
}