import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Principles of UI/UX',
  slug: 'principles-ui-ux',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you listen for a click event on a button with the ID'],
        [QuizMarkdownType.INLINE_CODE, 'myButton'],
        [QuizMarkdownType.TEXT, 'using JavaScript?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.CODE, 'document.getElementById("myButton").addEventListener("click", function() {...})']] },
        { id: '1', answer: [[QuizMarkdownType.CODE, 'document.getElementById("myButton").on("click", function() {...})']] },
        { id: '2', answer: [[QuizMarkdownType.CODE, 'document.querySelector("#myButton").on("click", function() {...})']] },
        { id: '3', answer: [[QuizMarkdownType.CODE, 'document.querySelector("#myButton").click(function() {...})']] },
      ],
      correctAnswer: '0',
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
  ],
} as QuizDataObject;
