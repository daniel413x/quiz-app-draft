import { CATEGORIES_ROUTE, directQuizRoutes } from '@/lib/data/routes';
import Link from '@/components/ui/common/Link';
import { Separator } from '@/components/ui/common/shadcn/separator';
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
      <ul className="gap-2 text-sm hidden md:flex items-center overflow-x-auto h-14 -my-4">
        <li>
          <Link href={`/${CATEGORIES_ROUTE}`} name="All Categories" />
        </li>
        <Separator
          className="bg-gray-400 dark:bg-gray-400 w-[1px] h-8 mx-2.5 opacity-50"
        />
        {directQuizRoutes.slice(0, 11).map((r) => (
          <li key={r.slug}>
            <Link href={`/${r.category.slug}/${r.slug}`} name={r.name} key={r.slug} />
          </li>
        ))}
      </ul>
      <div className="items-center gap-1.5 text-gray-400 hidden md:flex">
        <DarkModeToggle />
      </div>
    </div>
  </div>
);

export default Navbar;
