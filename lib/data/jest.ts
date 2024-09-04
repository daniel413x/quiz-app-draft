/* eslint-disable linebreak-style */
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Jest',
  slug: 'jest',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'You get the error: ',
        ],
        [
          QuizMarkdownType.CODE, `

Matcher error: received value must be a mock or spy function`,
        ],
        [
          QuizMarkdownType.TEXT,
          'Which Jest method can help you define a mock function?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'jest.fn()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'mockReturnValue()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'jest.fn()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'toHaveBeenCalled()',
            ],
          ],
          order: 0,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'You attempt to run tests, but some of them fail. In your console output, you see: ',
        ],
        [
          QuizMarkdownType.CODE, `Error: Error: connect ECONNREFUSED 127.0.0.1:5000
    ...
    baseURL: 'http://localhost:5000/api',
  method: 'get',
  url: '/warehouse',`,
        ],
        [
          QuizMarkdownType.TEXT,
          'What is the most likely explanation for this error?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A forgotten jest.mock() call',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'An error in the API files',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A misconfiguration in the jest config file',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Neglecting to start the backend server before running tests',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
