import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Navbar from './(root)/_components/Navbar';
import Footer from './(root)/_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Quiz App',
    template: '%s | Quiz App',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const rootLayout = ({
  children,
}: RootLayoutProps) => (
  <html lang="en">
    <body className={cn(inter.className, 'flex flex-col')}>
      <Navbar />
      {/* useRootLayoutClasses */}
      <div className="p-8 md:p-24 lg:p-32 ">
        {children}
      </div>
      <Footer />
    </body>
  </html>
);

export default rootLayout;
