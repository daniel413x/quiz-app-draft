/* eslint-disable linebreak-style */
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Next.js',
  slug: 'next-js',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A page is rendered at build time. This is known as _________',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Static rendering',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dynamic rendering',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Server-side rendering',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Partial server-side rendering',
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
          'Which answer correctly defines the directive to force a page to render dynamically?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'export const dynamic = "force-dynamic";',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'export const dynamic = "dynamic";',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'export const dynamic = "dynamic-rendering";',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'export const dynamic = "rendering-dynamic";',
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
          'Which answer is true of pages that are rendered statically?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They constitute a smaller bundle size',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They constitute a larger bundle size',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is unnecessary to perform hydration on statically rendered pages',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Query parameters cannot be retreived in statically rendered pages',
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
          'A component with React hooks is rendered. This must be done as ________',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Client-side rendering',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Static rendering',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Server-side rendering',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dynamic rendering',
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
          'In a client component, you must access data that has already been prefetched. Which of the following objects can accomplish this?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'useSuspenseQuery',
            ],
            [
              QuizMarkdownType.TEXT,
              'from',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '@tanstack/react-query',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'useQuery',
            ],
            [
              QuizMarkdownType.TEXT,
              'from',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '@tanstack/react-query',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'caller',
            ],
            [
              QuizMarkdownType.TEXT,
              'from',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '@/trpc/server',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'getQueryClient',
            ],
            [
              QuizMarkdownType.TEXT,
              'from',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '@/trpc/server',
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
          'In a client component, you must access data that has NOT already been prefetched. Which of the following objects can accomplish this?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'useQuery',
            ],
            [
              QuizMarkdownType.TEXT,
              'from',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '@tanstack/react-query',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'useSuspenseQuery',
            ],
            [
              QuizMarkdownType.TEXT,
              'from',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '@tanstack/react-query',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'caller',
            ],
            [
              QuizMarkdownType.TEXT,
              'from',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '@/trpc/server',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'getQueryClient',
            ],
            [
              QuizMarkdownType.TEXT,
              'from',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '@/trpc/server',
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
          'In a server component, you must access data that has already been prefetched. Which of the following objects can accomplish this?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'caller',
            ],
            [
              QuizMarkdownType.TEXT,
              'from',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '@/trpc/server',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'useSuspenseQuery',
            ],
            [
              QuizMarkdownType.TEXT,
              'from',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '@tanstack/react-query',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'useQuery',
            ],
            [
              QuizMarkdownType.TEXT,
              'from',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '@tanstack/react-query',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'getQueryClient',
            ],
            [
              QuizMarkdownType.TEXT,
              'from',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '@/trpc/server',
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
          'In which of the following scenarios is',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'dynamic',
        ],
        [
          QuizMarkdownType.TEXT,
          'from',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'next/dynamic',
        ],
        [
          QuizMarkdownType.TEXT,
          'a solution?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To solve hydration issues',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To achieve a smaller bundle size',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To better adhere to the single responsibility principle',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To force server-side rendering',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
