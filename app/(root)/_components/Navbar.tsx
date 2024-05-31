import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import routes from '@/lib/data/routes';
import Link from '@/components/ui/common/Link';
import NextLink from 'next/link';
import MobileNav from './MobileNav';

const Navbar = () => (
  <div className=" p-8 shadow-md bg-gray-100 ">
    <div className="flex container justify-between items-center">
      <NextLink href="/" className="shrink-0">
        <Image
          src="/navbar-logo.png"
          alt="Logo"
          width={96}
          height={40}
        />
      </NextLink>
      <div className="md:hidden flex">
        <MobileNav />
      </div>
      <div className="gap-2 text-sm hidden md:flex">
        {routes.map((r) => (
          <Link href={r.href} name={r.name} key={r.href} />
        ))}
      </div>
      <div className="items-center gap-1.5 text-black/50 hidden md:flex">
        <Facebook size={20} />
        <Twitter size={20} />
        <Instagram size={20} />
      </div>
    </div>
  </div>
);

export default Navbar;
