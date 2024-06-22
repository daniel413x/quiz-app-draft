'use client';

import Header from '@/components/ui/common/Header';
import { notFound, useParams } from 'next/navigation';
import { categories } from '@/lib/data/quiz-data';
import Link from 'next/link';

const CategoryPageContent = () => {
  const categoryParam = useParams().category as string;
  const category = categories.find((cat) => cat.slug === categoryParam);
  if (!category) {
    notFound();
  }
  return (
    <main>
      <Header header={category.name} />
      <ul className="flex flex-col">
        {category.quizzes.map((q) => (
          <li key={q.slug}>
            <Link
              href={`/${category.slug}/${q.slug}`}
              className="h-full shadow-md flex flex-col gap-3 p-6 rounded-sm bg-gray-100 dark:bg-background border border-black/75 dark:border-gray-700"
            >
              {q.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CategoryPageContent;
