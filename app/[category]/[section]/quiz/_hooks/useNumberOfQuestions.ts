import quizData from '@/lib/data/quiz-data';
import { useParams } from 'next/navigation';

const numOfQuestions = 48;

const useNumberOfQuestions = () => {
  const section = useParams().section as string;
  const quiz = quizData[section];
  const len = quiz.questions.length;
  return len < numOfQuestions ? len : numOfQuestions;
};

export default useNumberOfQuestions;
