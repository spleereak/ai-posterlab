import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import {Sidebar} from "@/components/layout/Sidebar";
import {Header} from "@/components/layout/Header";
import {PageWrapper} from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "AI PosterLab",
  description: "Генерация изображений с помощью ИИ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className='flex min-h-screen'
      >
        <Sidebar />
        <div className='flex flex-col w-full'>
          <Header />
          <PageWrapper>{children}</PageWrapper>
        </div>
      </body>
    </html>
  );
}
