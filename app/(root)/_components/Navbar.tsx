import routes from '@/lib/data/routes';
import Link from '@/components/ui/common/Link';
import MobileNav from './MobileNav';
import { DarkModeToggle } from './DarkModeToggle';
import Logo from './Logo';

const Navbar = () => (
  <div className=" p-8 shadow-md bg-gray-100 dark:bg-gray-800">
    <div className="flex container justify-between items-center gap-6">
      <Logo />
      <div className="md:hidden flex">
        <MobileNav />
      </div>
      <div className="gap-2 text-sm hidden md:flex items-center overflow-x-auto h-14 -my-4">
        {routes.map((r) => (
          <Link href={r.href} name={r.name} key={r.href} />
        ))}
      </div>
      <div className="items-center gap-1.5 text-gray-400 hidden md:flex">
        <DarkModeToggle />
      </div>
    </div>
  </div>
);

export default Navbar;
