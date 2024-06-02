import { cn } from '@/lib/utils';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  name: string;
  className?: string;
}

const Link = ({
  href,
  name,
  className,
}: LinkProps) => (
  <NextLink href={href} className={cn('hover:bg-purple-200 dark:hover:bg-purple-600 text-sm border-0 border-b-2 border-b-purple-400 flex h-max w-max text-nowrap', className)} key={href}>
    {name}
  </NextLink>
);

export default Link;
