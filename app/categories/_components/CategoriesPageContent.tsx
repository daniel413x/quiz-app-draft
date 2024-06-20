import { categories } from '@/lib/data/quiz-data';
import Header from '@/components/ui/common/Header';
import CategoriesQuizLinks from './CategoriesQuizLinks';

const CategoriesPageContent = () => (
  <div className="flex flex-col">
    <Header header="Quizzes by category" />
    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {categories.map((qdo) => (
        <li key={qdo.slug}>
          <div className="h-full shadow-md flex flex-col gap-3 p-6 rounded-sm bg-gray-100 dark:bg-background border border-black/75 dark:border-gray-700">
            <h3 className="text-lg text-purple-600">
              {qdo.name}
            </h3>
            <CategoriesQuizLinks
              quizzes={qdo.quizzes}
              quizDataObjectSlug={qdo.slug}
            />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default CategoriesPageContent;
