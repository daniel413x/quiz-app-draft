import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'HTTP Fundamentals',
  slug: 'http-fundamentals',
  category: {
    slug: 'web-development',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is the LEAST relevant to cookies?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RESTful APIs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'State persistence']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Session management']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Storing information']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is MOST LIKELY the LEAST relevant to the application layer in HTTP communication?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'SQL procedures']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'State persistence']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Cookes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RESTful APIs']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
