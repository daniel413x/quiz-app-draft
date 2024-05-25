'use client';

import { useEffect } from 'react';
import { useTimer, useTimerOnInterval } from './_hooks/useTimer';
import QuizForm from './_components/QuizForm';
import QuizPrompt from './_components/QuizPrompt';
import Timer from './_components/Timer';
import useUserQuizData from './_hooks/useUserQuizData';

const QuizPage = () => {
  const {
    isStarted,
    timer,
  } = useTimerOnInterval();
  const {
    resetTimer,
  } = useTimer();
  const {
    setAnswersRecord,
  } = useUserQuizData();
  useEffect(() => {
    setAnswersRecord([]);
    resetTimer();
  }, []);
  return (
    <main>
      <Timer timer={timer} />
      {!isStarted ? <QuizPrompt /> : null}
      {!isStarted ? null : <QuizForm />}
    </main>
  );
};

export default QuizPage;
