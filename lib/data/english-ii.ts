import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'English II',
  slug: 'english-ii',
  category: {
    slug: 'english',
  },
  questions: [

    {
      question: [
        [QuizMarkdownType.TEXT, 'Question marks should go _____________ if the quote is a question. If the quote is not a question, but the sentence is, the question mark should be _____________.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'inside of the quotation marks, outside the quotation marks'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'outside the quotation marks, inside of the quotation marks'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'Either of the above'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
