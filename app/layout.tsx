import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import React from "react";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StyleSphere - Unleash Your Fashion Universe",
  description: "Unleash Your Fashion Universe with StyleSphere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className} suppressHydrationWarning>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

