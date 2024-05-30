'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const SectionPageContent = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const section = useParams().section as string;
  return (
    <main className="flex flex-col items-center justify-between">
      <Link
        href={`${section}/quiz`}
        className={cn('flex gap-1 p-6 shadow-sm bg-red-200 text-red-800', {
          'opacity-50': clicked,
        })}
        onClick={() => setClicked(true)}
      >
        Start quiz
      </Link>
    </main>
  );
};

export default SectionPageContent;
