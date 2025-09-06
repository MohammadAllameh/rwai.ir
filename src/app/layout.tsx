// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

import localFont from "next/font/local";

const vazirFont = localFont({
  src: [
    {
      path: "../../public/fonts/Vazir-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazir-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "حمید علامه | مدرس و توسعه‌دهنده",
  description:
    "وبسایت شخصی حمید علامه، ارائه‌دهنده دوره‌های آموزشی تخصصی در حوزه هوش مصنوعی و برنامه‌نویسی.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background  antialiased",
          vazirFont.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
