'use client';

import { Menu } from 'lucide-react';
import {
  Sheet, SheetContent, SheetTrigger,
} from '@/components/ui/common/shadcn/sheet';
import { Separator } from '@/components/ui/common/shadcn/separator';
import routes from '@/lib/data/routes';
import Link from '@/components/ui/common/Link';
import Logo from './Logo';

const MobileNav = () => (
  <Sheet>
    <SheetTrigger>
      <Menu className="text-stone-500" />
    </SheetTrigger>
    <SheetContent className="space-y-3">
      <Logo />
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
