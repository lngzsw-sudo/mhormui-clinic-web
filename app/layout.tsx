import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingContact } from "@/components/FloatingContact";
import Script from "next/script"; // ✨ 1. อิมพอร์ต Script เพื่อใช้ฝัง GA4

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "หมอหมุยคลินิคแพทย์แผนจีน | สุพรรณบุรี สองพี่น้อง",
  description: "คลินิกแพทย์แผนจีน บริการฝังเข็ม ครอบแก้ว ยาจีน ปรับสมดุลร่างกายด้วยศาสตร์แพทย์แผนจีน โดยหมอหมุยคลินิค",
  verification: {
    google: 'USfItctwfpAviaDYSsxahD7Yg8fU506ppoCf54w3v2U',
  },
  // ✨ 2. เพิ่มบล็อก Open Graph สำหรับระบบแชร์ลิงก์หน้าหลัก
  openGraph: {
    title: "หมอหมุยคลินิคแพทย์แผนจีน | สุพรรณบุรี",
    description: "บริการฝังเข็ม ครอบแก้ว ยาจีน รักษาอาการปวด ออฟฟิศซินโดรม ไมเกรน โดยแพทย์จีนผู้เชี่ยวชาญ",
    url: 'https://mhormui.com',
    siteName: 'หมอหมุยคลินิค',
    images: [
      {
        url: 'https://mhormui.com/og-image.jpg', // 🖼️ เดี๋ยวเราต้องหารูปหน้าคลินิกสวยๆ มาตั้งชื่อนี้
        width: 1200,
        height: 630,
        alt: 'หมอหมุยคลินิคแพทย์แผนจีน',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // บล็อก Schema ข้อมูลธุรกิจ (คงของเดิมน้าไว้ได้เลยครับ)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "หมอหมุยคลินิคแพทย์แผนจีน",
    "image": "https://mhormui.com/favicon.ico", 
    "@id": "https://mhormui.com",              
    "url": "https://mhormui.com",               
    "telephone": "088-9145199",
    "priceRange": "$$",
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
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <html lang="th">
      <head>
        {/* ✨ 3. ฝังโค้ด Google Analytics 4 (🚨 อย่าลืมเปลี่ยน G-XXXXXXXXXX เป็นรหัสของน้านะครับ ทั้ง 2 จุดเลย) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <FloatingContact />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}