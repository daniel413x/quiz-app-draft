'use client';

import { useEffect } from 'react';
import { useTimer, useTimerOnInterval } from '../_hooks/useTimer';
import QuizForm from './QuizForm';
import QuizPrompt from './QuizPrompt';
import Timer from './Timer';
import useUserQuizData from '../_hooks/useUserQuizData';

const QuizPageContent = () => {
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

export default QuizPageContent;
