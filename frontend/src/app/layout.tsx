import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseLayout from "../components/baseLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='h-full bg-white'>
      <body className={inter.className}>
        <div className="h-full">
          <BaseLayout>{children}</BaseLayout>
        </div>
      </body>
    </html>
  );
}
