import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "SBN_Web_Dev",
  description: "SBN_Web_Dev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={` antialiased bg-[#171717] font-sans`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
