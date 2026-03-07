import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'MongoDB',
  slug: 'mongodb',
  category: {
    slug: 'databases',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary data structure used by'],
        [QuizMarkdownType.INLINE_CODE, 'MongoDB'],
        [QuizMarkdownType.TEXT, 'to store records?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Document'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Row'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Tuple'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Cell'],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
