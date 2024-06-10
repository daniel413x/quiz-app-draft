'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/common/shadcn/separator';
import { useTimer, useTimerOnInterval } from '../_hooks/useTimer';
import QuizForm from './QuizForm';
import QuizPrompt from './QuizPrompt';
import Timer from './Timer';
import useUserQuizData from '../_hooks/useUserQuizData';
import Progress from './Progress';

const QuizPageContent = () => {
  const section = useParams().section as string;
  const router = useRouter();
  const {
    isStarted,
    timer,
  } = useTimerOnInterval();
  const {
    resetTimer,
  } = useTimer();
  const {
    setAnswersRecord,
    setProgress,
  } = useUserQuizData();
  useEffect(() => {
    router.replace(`/${section}/quiz`);
    setAnswersRecord([]);
    resetTimer();
    setProgress(0);
  }, []);
  return (
    <main>
      <div className="flex justify-between items-end">
        <Timer timer={timer} />
        <Progress />
      </div>
      <Separator className="w-1/4 mt-4 mx-auto" />
      {!isStarted ? <QuizPrompt /> : null}
      {!isStarted ? null : <QuizForm />}
    </main>
  );
};

export default QuizPageContent;
