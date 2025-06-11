import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevKool',
  description: 'DevKool is a leading web development and mobile application agency based in Noida. We provide end-to-end digital solutions including web development, mobile apps, UI/UX design, and digital marketing.',
  keywords: 'web development, mobile app development, Noida, React, Next.js, Flutter, UI/UX design, digital marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/devkool-icon.jpg" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}