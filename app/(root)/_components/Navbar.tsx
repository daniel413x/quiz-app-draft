import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <div className=" p-8 shadow-md bg-white ">
    <div className="flex container justify-between items-center">
      <Link href="/" className="shrink-0">
        <Image
          src="/navbar-logo.png"
          alt="Logo"
          width={96}
          height={40}
        />
      </Link>
      <div className="flex gap-2 text-sm">
        <Link href="/learners-permit" className="text-sm">
          Learner&apos;s Permit
        </Link>
        <Link href="/javascript" className="text-sm">
          JavaScript
        </Link>
      </div>
      <div className="flex gap-1.5 text-black/50">
        <Facebook />
        <Twitter />
        <Instagram />
      </div>
    </div>
  </div>
);

export default Navbar;
