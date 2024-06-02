import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import ThemeProvider from '@/components/providers/ThemeProvider';
import Navbar from './(root)/_components/Navbar';
import Footer from './(root)/_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Quiz App',
    template: '%s | Quiz App',
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon.png',
        href: '/icon.png',
      },
    ],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const rootLayout = ({
  children,
}: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn(inter.className, 'flex flex-col dark:bg-gray-900')}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        storageKey="quiz-app-theme-2"
      >
        <Navbar />
        {/* useRootLayoutClasses */}
        <div className="p-8 md:p-24 lg:p-32 self-center w-full max-w-7xl">
          {children}
        </div>
        <Footer />
      </ThemeProvider>
    </body>
  </html>
);

export default rootLayout;
