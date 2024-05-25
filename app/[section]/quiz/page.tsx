'use client';

import { formatTime } from '@/lib/utils';
import { useTimer, useTimerToggle } from './_hooks/useTimer';
import QuizForm from './_components/QuizForm';
import QuizPrompt from './_components/QuizPrompt';

const QuizPage = () => {
  const {
    timer,
  } = useTimer();
  const {
    isStarted,
  } = useTimerToggle();
  return (
    <main className="flexflex-col items-center justify-between">
      <div className="flex text-3xl text-stone-500">
        {formatTime(timer)}
      </div>
      {!isStarted ? <QuizPrompt /> : null}
      {!isStarted ? null : <QuizForm />}
    </main>
  );
};

export default QuizPage;
