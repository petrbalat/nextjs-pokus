import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode }>,
) {
  return (
    <html lang="en">
      <body className={`antialiased`} >
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          {children}
        </div>
      </body>
    </html>
  );
}
