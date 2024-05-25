'use client';

import { Button } from '@/components/ui/common/shadcn/button';
import quizData from '@/lib/quiz-data';
import { useParams } from 'next/navigation';
import { useTimer } from '../_hooks/useTimer';
import { numOfQuestions } from '../_consts';

const QuizPrompt = () => {
  const section = useParams().section as string;
  const quiz = quizData[section];
  const {
    handleStartTimer,
  } = useTimer();
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl">
        {`${quiz.name} Quiz (${numOfQuestions} questions)`}
      </h1>
      Once you press start, the timer will begin. You have within the alotted time to complete the quiz.
      <Button className="m-auto p-6 w-full mt-4" variant="outline" onClick={() => handleStartTimer()}>
        Start
      </Button>
    </div>

  );
};

export default QuizPrompt;
