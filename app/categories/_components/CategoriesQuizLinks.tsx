import Link from '@/components/ui/common/Link';
import { QuizDataObject } from '@/lib/data/types';

interface CategoriesQuizLinksProps {
  quizzes: QuizDataObject[];
  quizDataObjectSlug: string;
}

const CategoriesQuizLinks = ({
  quizzes,
  quizDataObjectSlug,
}: CategoriesQuizLinksProps) => (
  <ul className="flex flex-col">
    {quizzes.map((q) => (
      <li key={q.slug}>
        <Link
          className="py-3 text-wrap w-[unset]"
          name={q.name}
          href={`/${quizDataObjectSlug}/${q.slug}`}
        />
      </li>
    ))}
  </ul>
);

export default CategoriesQuizLinks;
