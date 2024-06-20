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
              className="flex p-3 w-full dark:bg-purple-900/20 dark:hover:bg-purple-900/40 border-0 dark:border-b-slate-900 border-b-2 border-l-4 border-l-transparent dark:hover:border-l-purple-600"
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
