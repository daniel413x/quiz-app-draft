'use client';

import { Menu } from 'lucide-react';
import {
  Sheet, SheetContent, SheetTrigger,
} from '@/components/ui/common/shadcn/sheet';
import { Separator } from '@/components/ui/common/shadcn/separator';
import Link from 'next/link';
import Image from 'next/image';
import routes from '@/lib/data/routes';

const MobileNav = () => (
  <Sheet>
    <SheetTrigger>
      <Menu className="text-stone-500" />
    </SheetTrigger>
    <SheetContent className="space-y-3">
      <Image
        src="/navbar-logo.png"
        alt="Logo"
        width={96}
        height={40}
      />
      <Separator />
      <div className="flex flex-col gap-2 text-sm">
        {routes.map((r) => (
          <Link href={r.href} className="text-sm" key={r.href}>
            {r.name}
          </Link>
        ))}
      </div>
    </SheetContent>
  </Sheet>
);

export default MobileNav;
