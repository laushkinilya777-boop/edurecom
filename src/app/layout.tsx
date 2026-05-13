'use client';

import type { ReactNode } from 'react';
import './globals.css';
import { Providers } from '@/app/providers';

export const metadata = {
  title: 'EduRecom - Modern Learning Platform',
  description: 'Learn programming with gamification, achievements, and modern design',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-dark-950 text-white antialiased overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
