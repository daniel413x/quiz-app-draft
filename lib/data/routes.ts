import quizData from '../quiz-data';

const keys = Object.keys(quizData);

export default keys.map((k) => ({
  href: `/${k}`,
  name: quizData[k].name,
}));
