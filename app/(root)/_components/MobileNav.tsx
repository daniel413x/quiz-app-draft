'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/common/shadcn/button';
import {
  Sheet, SheetContent, SheetTitle, SheetTrigger,
} from '@/components/ui/common/shadcn/sheet';
import { Separator } from '@/components/ui/common/shadcn/separator';
import Link from 'next/link';
import Image from 'next/image';

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
        <Link href="/learners-permit" className="text-sm">
          Learner&apos;s Permit
        </Link>
        <Link href="/javascript" className="text-sm">
          JavaScript
        </Link>
      </div>
    </SheetContent>
  </Sheet>
);

export default MobileNav;
