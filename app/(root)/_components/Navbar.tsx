import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <div className=" p-8 shadow-md bg-white ">
    <div className="flex container justify-between items-center">
      <Image
        src="/navbar-logo.png"
        alt="Logo"
        width={96}
        height={40}
      />
      <Link href="/learners-permit" className="text-sm uppercase">
        Learner&apos;s Permit
      </Link>
      <div className="flex gap-1.5 text-black/50">
        <Facebook />
        <Twitter />
        <Instagram />
      </div>
    </div>
  </div>
);

export default Navbar;
