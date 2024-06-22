import quizData from './quiz-data';

const keys = Object.keys(quizData);

export const CATEGORIES_ROUTE = 'categories';
export const QUIZ_ROUTE = 'quiz';
export const RESULTS_ROUTE = 'results';

export const directQuizRoutes = keys.map((k) => quizData[k]);
