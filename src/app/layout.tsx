import type { Metadata } from "next";
import { Noto_Sans_Thai, Outfit } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phanuwat Raksaphong | นักศึกษา CS และ Web Developer",
  description: "พอร์ตโฟลิโอและบันทึกโปรเจกต์ของ Phanuwat Raksaphong นักศึกษาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยนเรศวร ที่กำลังเรียนรู้ web development, APIs และพื้นฐานซอฟต์แวร์ผ่านการลงมือทำ",
  metadataBase: new URL("https://phanwat-nu-me.vercel.app"),
  openGraph: {
    title: "Phanuwat Raksaphong | Portfolio",
    description: "โปรเจกต์ กิจกรรมบน GitHub และบันทึกการเรียนรู้ของนักศึกษา CS ที่ฝึกทำเว็บจากปัญหาจริง",
    url: "https://phanwat-nu-me.vercel.app",
    siteName: "Phanuwat Raksaphong Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Phanuwat Portfolio Cover",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phanuwat Raksaphong | Portfolio",
    description: "โปรเจกต์ กิจกรรมบน GitHub และบันทึกการเรียนรู้ของนักศึกษา CS ที่ฝึกทำเว็บจากปัญหาจริง",
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=630&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${notoSansThai.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
