import { Answer, Question } from '@/lib/quiz-data';
import shuffle from 'lodash/shuffle';

const shuffleAnswers = (answers: Answer[]) => shuffle(answers).sort((a, b) => ((a.order && !b.order) || (a.order && b.order && a.order > b.order) ? 1 : 0));

export const shuffleQuestions = (questions: Question[]) => shuffle(questions.map((q) => ({ ...q, answers: shuffleAnswers(q.answers) }))).slice(0, 26);
