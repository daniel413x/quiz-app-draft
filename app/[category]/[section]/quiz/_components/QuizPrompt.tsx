'use client';

import { Button } from '@/components/ui/common/shadcn/button';
import quizData from '@/lib/data/quiz-data';
import { useParams, useRouter } from 'next/navigation';
import { QUIZ_ROUTE } from '@/lib/data/routes';
import { useTimer } from '../_hooks/useTimer';
import useNumberOfQuestions from '../_hooks/useNumberOfQuestions';

const QuizPrompt = () => {
  const category = useParams().category as string;
  const section = useParams().section as string;
  const router = useRouter();
  const quiz = quizData[section];
  const actualNumOfQuestions = useNumberOfQuestions();
  const {
    handleStartTimer,
  } = useTimer();
  const handlePressStart = () => {
    router.replace(`/${category}/${section}/${QUIZ_ROUTE}?qNum=0`);
    handleStartTimer();
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col my-10">
        <h1 className="text-2xl text-center">
          {`${quiz.name} Quiz`}
        </h1>
        <span className="text-center text-purple-500">
          {`(${actualNumOfQuestions} questions)`}
        </span>
        <span className="text-center mb-4">
          Once you press start, the timer will begin. You have within the alotted time to complete the quiz.
        </span>
      </div>
      <Button className="m-auto p-6 w-1/2 mt-4" variant="outline" onClick={handlePressStart}>
        Start
      </Button>
    </div>
  );
};

export default QuizPrompt;
