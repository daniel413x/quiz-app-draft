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
  ],
} as QuizDataObject;
