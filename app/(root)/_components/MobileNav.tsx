'use client';

import { Menu } from 'lucide-react';
import {
  Sheet, SheetContent, SheetTrigger,
} from '@/components/ui/common/shadcn/sheet';
import { Separator } from '@/components/ui/common/shadcn/separator';
import Image from 'next/image';
import routes from '@/lib/data/routes';
import Link from '@/components/ui/common/Link';

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
      <div className="flex flex-col text-sm">
        {routes.map((r) => (
          <Link href={r.href} key={r.href} name={r.name} className="pt-6" />
        ))}
      </div>
    </SheetContent>
  </Sheet>
);

export default MobileNav;
