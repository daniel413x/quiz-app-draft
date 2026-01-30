/* eslint-disable linebreak-style */
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Git',
  slug: 'git',
  category: {
    slug: 'git',
  },
  questions: [
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'You make changes to your project from the branch "main". Then you run the following series of commands:',
        ],
        [
          QuizMarkdownType.CODE, `git branch add-inventory-by-category-tests
git checkout add-inventory-by-category-tests
git add .
git commit -m "add InventoryByCategory tests"`,
        ],
        [
          QuizMarkdownType.TEXT,
          'Which answer is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The changes committed will not appear in any other branch',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The changes committed will appear in the main branch',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The commands will not work because the changes were originally made in the branch "main"',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The changes will be committed to both branches "main" and "add-inventory-by-category-tests"',
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
          'You accidentally perform the action',
        ],
        [
          QuizMarkdownType.INLINE_CODE, 'git add .',
        ],
        [
          QuizMarkdownType.TEXT,
          'and add changes you did not intend to commit. What action can you take to undo this?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'git reset .',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'git restore .',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'git reset HEAD~',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'git pull',
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
          'In order to generate an access token to automate processes such as the creation of PR requests, it is necessary to set up a _____ in order to obtain a PEM file used in the JWT to authenticate in GitHub.',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'GitHub App',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'GitHub Action',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'Copilot',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'GitHub Webhook',
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
          'In the event of a critical issue discovered in production, a development team\'s protocol is to create a hotfix branch in the production branch',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'main',
        ],
        [
          QuizMarkdownType.TEXT,
          'and merge the hotfix branch directly to it. They also use a development branch',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'dev',
        ],
        [
          QuizMarkdownType.TEXT,
          '. If a hotfix branch',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'hotfix/security-vulnerability',
        ],
        [
          QuizMarkdownType.TEXT,
          'is merged to',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'main',
        ],
        [
          QuizMarkdownType.TEXT,
          ', which answer must be true before development work can resume?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'main',
            ],
            [
              QuizMarkdownType.TEXT,
              'will have to be merged into',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'dev',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'dev',
            ],
            [
              QuizMarkdownType.TEXT,
              'will have to be merged into',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'main',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'hotfix/security-vulnerability',
            ],
            [
              QuizMarkdownType.TEXT,
              'will have to be merged into',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'dev',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'dev',
            ],
            [
              QuizMarkdownType.TEXT,
              'will have to be merged into',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'hotfix/security-vulnerability',
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
          'In the development branch',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'dev',
        ],
        [
          QuizMarkdownType.TEXT,
          ', there are the feature branches',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'feature/file-upload',
        ],
        [
          QuizMarkdownType.TEXT,
          'and',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'feature/filtered-search',
        ],
        [
          QuizMarkdownType.TEXT,
          '. If',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'feature/file-upload',
        ],
        [
          QuizMarkdownType.TEXT,
          'is merged to',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'dev',
        ],
        [
          QuizMarkdownType.TEXT,
          'before',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'feature/filtered-search',
        ],
        [
          QuizMarkdownType.TEXT,
          ', which answer must be true before work can resume on',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'feature/filtered-search',
        ],
        [
          QuizMarkdownType.TEXT,
          '?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'dev',
            ],
            [
              QuizMarkdownType.TEXT,
              'will have to be merged into',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'feature/filtered-search',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'dev',
            ],
            [
              QuizMarkdownType.TEXT,
              'will have to be merged into',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'feature/file-upload',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'feature/file-upload',
            ],
            [
              QuizMarkdownType.TEXT,
              'will have to be merged into',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'feature/filtered-search',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'feature/filtered-search',
            ],
            [
              QuizMarkdownType.TEXT,
              'will have to be merged into',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'feature/file-upload',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
