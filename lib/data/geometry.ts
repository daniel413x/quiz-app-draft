import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Geometry',
  slug: 'geometry',
  category: {
    slug: 'mathematics',
  },
  questions: [
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The formula',
        ],
        [
          QuizMarkdownType.INLINE_KATEX,
          'C^2 = A^2 + B^2',
        ],
        [
          QuizMarkdownType.TEXT,
          'is used to find',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'The diagonal of a rectangle']],
          order: 0,
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'The diagonal of a right triangle']],
          order: 1,
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'The Pythagorean theorem']],
          order: 2,
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'All of the above']],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the formula to calculate Euclidean distance?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{\\sum_{i=1}^n (a_i - b_i)^2}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\frac{\\sum_{i=1}^n a_i b_i}{\\sqrt{\\sum_{i=1}^n a_i^2} \\sqrt{\\sum_{i=1}^n b_i^2}}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sum_{i=1}^n |a_i - b_i|'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\left( \\sum_{i=1}^n |a_i - b_i|^p \\right)^{\\frac{1}{p}}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the formula to calculate Euclidean distance?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + \\cdots + (z_2 - z_1)^2}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2 + \\cdots + (z_1 - z_2)^2}'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the Euclidean distance between the points '],
        [QuizMarkdownType.INLINE_KATEX, '(0, 0, 0, 0)'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_KATEX, '(1, 2, 2, 1)'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{6}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{8}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{9}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{10}'],
          ],
        },
      ],
      correctAnswer: '3',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the Euclidean distance between the points '],
        [QuizMarkdownType.INLINE_KATEX, '(3, 2)'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_KATEX, '(4, 3)'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{4}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{2}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{3}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{1}'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the Euclidean distance between the points'],
        [QuizMarkdownType.INLINE_KATEX, '(2, 3)'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_KATEX, '(6, 9)'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '5'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '6'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '7'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '10'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the Euclidean distance between the points'],
        [QuizMarkdownType.INLINE_KATEX, '(1, 2, 3)'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_KATEX, '(4, 6, 8)'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{27}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{29}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{35}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{50}'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the Euclidean distance between the points'],
        [QuizMarkdownType.INLINE_KATEX, '(1, 1)'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_KATEX, '(4, 5)'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '3'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '5'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '6'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '7'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the Euclidean distance between the points'],
        [QuizMarkdownType.INLINE_KATEX, '(1, 1, 1, 1, 1)'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_KATEX, '(2, 3, 4, 5, 6)'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{25}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\text{Cov}(x, y)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{35}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{55}'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the formula to calculate Euclidean distance?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + \\cdots + (z_2 - z_1)^2}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2 + \\cdots + (z_1 - z_2)^2}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
