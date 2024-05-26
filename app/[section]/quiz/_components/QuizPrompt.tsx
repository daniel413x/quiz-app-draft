'use client';

import { Button } from '@/components/ui/common/shadcn/button';
import quizData from '@/lib/quiz-data';
import { useParams, useRouter } from 'next/navigation';
import { useTimer } from '../_hooks/useTimer';
import { numOfQuestions } from '../_consts';

const QuizPrompt = () => {
  const section = useParams().section as string;
  const router = useRouter();
  const quiz = quizData[section];
  const {
    handleStartTimer,
  } = useTimer();
  const handlePressStart = () => {
    router.replace(`/${section}/quiz?page=0`);
    handleStartTimer();
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center">
        {`${quiz.name} Quiz`}
      </h1>
      <span className="text-center">
        {`(${numOfQuestions} questions)`}
      </span>
      <span className="text-center mb-4">
        Once you press start, the timer will begin. You have within the alotted time to complete the quiz.
      </span>
      <Button className="m-auto p-6 w-full mt-4" variant="outline" onClick={handlePressStart}>
        Start
      </Button>
    </div>

  );
};

export default QuizPrompt;
