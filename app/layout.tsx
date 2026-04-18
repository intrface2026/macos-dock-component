import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "macOS Dock - Framer Motion & Next.js",
  description: "A professional macOS dock experience built with Next.js, Tailwind, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${baiJamjuree.className} antialiased bg-[#050505] text-white selection:bg-white/20`}>
        {children}
      </body>
    </html>
  );
}

