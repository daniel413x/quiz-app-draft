'use client';

import { Card, CardContent } from '@/components/ui/common/shadcn/card';
import useHasMounted from '@/lib/hooks/useHasMounted';
import { cn } from '@/lib/utils';
import { ReactElement, useEffect, useState } from 'react';

interface TopRowCardProps {
  delay: number;
  header: ReactElement;
  body: string;
}

const TopRowCard = ({
  delay,
  header,
  body,
}: TopRowCardProps) => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setShow(true), delay);
  }, []);
  if (!useHasMounted()) return null;
  return (
    <Card className={cn('shadow-md pt-4 flex w-full transition-all opacity-0 relative top-1', {
      'top-0 opacity-100': show,
    })}
    >
      <CardContent className="flex flex-col gap-1">
        <div className="flex gap-1 items-center">
          {header}
        </div>
        <span className="text-sm">
          {body}
        </span>
      </CardContent>
    </Card>
  );
};

export default TopRowCard;
