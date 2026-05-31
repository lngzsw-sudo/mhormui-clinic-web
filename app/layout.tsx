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
  title: "MhorMui Clinic | หมอหมุ่ยคลินิก ฝังเข็ม เพิ่มความสูง รักษาโรค",
  description: "คอร์สเพิ่มความสูง กระตุ้นโกรทฮอร์โมน ปรับสมดุลร่างกายด้วยศาสตร์แพทย์แผนจีน โดยทีมแพทย์ผู้ชำนาญการ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}

      <FloatingContact />  
      </body>
    </html>
  );
}
