'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const SectionPage = () => {
  const section = useParams().section as string;
  return (
    <main className="flex  flex-col items-center justify-between">
      <Link href={`${section}/quiz`} className=" p-6 shadow-sm bg-red-200 text-red-800">
        Start quiz
      </Link>
    </main>
  );
};

export default SectionPage;
