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
          'You run the command',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'npx test',
        ],
        [
          QuizMarkdownType.TEXT,
          '. In the output, you find an error: ',
        ],
        [
          QuizMarkdownType.CODE, 'Matcher error: received value must be a mock or spy function',
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
          'In a next.js application that uses the app router, what should be the value of',
        ],
        [
          QuizMarkdownType.INLINE_CODE, 'moduleNameMapper',
        ],
        [
          QuizMarkdownType.TEXT,
          'in the jest config file (e.g. ',
        ],
        [
          QuizMarkdownType.INLINE_CODE, 'jest.config.mjs',
        ],
        [
          QuizMarkdownType.TEXT,
          ') if you must access resources outside the',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'app',
        ],
        [
          QuizMarkdownType.TEXT,
          'folder?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '"^@/(.*)$": "<rootDir>/src/$1"',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '"^@/(.*)$": "<rootDir>/src/app/$1"',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '"^@/(.*)$": "<rootDir>/src',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '"^@/(.*)$": "<rootDir>/$1',
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
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'You are testing a React component',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'SearchInput',
        ],
        [
          QuizMarkdownType.TEXT,
          'that uses a hook',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'useQuery',
        ],
        [
          QuizMarkdownType.TEXT,
          'from the library',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          '@tanstack/react-query',
        ],
        [
          QuizMarkdownType.TEXT,
          '. You run a Jest test and see output below. Which answer solves this issue?',
        ],
        [
          QuizMarkdownType.CODE, `TypeError: Cannot read properties of undefined (reading 'session')

      21 |   const trpc = useTRPC();
      22 |   console.log(trpc);
    > 23 |   const session = useQuery(trpc.auth.session.queryOptions());
         |                                      ^
      24 |   const openSidebar = () => {
      25 |     setIsSidebarOpen(true);
      26 |   };`,
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.CODE, `jest.mock("@/trpc/client", () => ({
  useTRPC: () => ({
    auth: {
      session: {
        queryOptions: () => {},
      },
    },
  }),
}));`,
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.CODE, `jest.mock("useTRPC", () => ({
  auth: {
    session: {
      queryOptions: () => {},
    },
  },
}));`,
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.CODE, `jest.mock("@/trpc/client", () => ({
  jest.mock("useTRPC", () => ({
    auth: {
      session: {
        queryOptions: () => {},
      },
    },
  }))
}));`,
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.CODE, `jest.mock("@/trpc/client", () => ({
  useTRPC: jest.fn(),
}));`,
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
