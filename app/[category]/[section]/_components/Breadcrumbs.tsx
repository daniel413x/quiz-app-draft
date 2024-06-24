/**
  * Breadcrumbs component that aligns width-wise with the <main> container
  */

'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/common/shadcn/breadcrumb';
import { Slash } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathnameStrings = pathname.split('/').filter(Boolean);
  const [width, setWidth] = useState<number>();
  const handleUpdateWidth = () => {
    const main = document.getElementsByTagName('main')[0];
    if (main) {
      setWidth(main.clientWidth);
    }
  };
  useLayoutEffect(() => {
    handleUpdateWidth();
    window.addEventListener('resize', handleUpdateWidth);
    return () => window.removeEventListener('resize', handleUpdateWidth);
  }, [pathname]);
  return (
    <Breadcrumb className="mb-4 m-auto" style={{ width }}>
      <BreadcrumbList>
        {pathnameStrings.map((str, i) => {
          if (pathnameStrings[pathnameStrings.length - 1] === str) {
            return (
              <BreadcrumbItem key={str}>
                <BreadcrumbPage>{str}</BreadcrumbPage>
              </BreadcrumbItem>
            );
          }
          let href = '';
          for (let j = 0; j <= i; j += 1) {
            href += pathnameStrings[j];
            if (pathnameStrings[j] !== str) {
              href += '/';
            }
          }
          return (
            <BreadcrumbItem key={href}>
              <BreadcrumbLink href={`/${href}`}>
                {str}
              </BreadcrumbLink>
              <Slash strokeWidth={1} className="opacity-50" size={16} />
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
