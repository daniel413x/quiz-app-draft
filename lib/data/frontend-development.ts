import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  // rename this Frontend Development
  name: 'Frontend Development',
  slug: 'frontend-development',
  category: {
    slug: 'web-development',
  },
  questions: [
    // {
    //   question: [
    //     [QuizMarkdownType.TEXT, 'You need to prefetch the contents of a page'],
    //     [QuizMarkdownType.INLINE_CODE, '/user'],
    //     [QuizMarkdownType.TEXT, '. Which answer describes a way in which this can be accomplished?'],
    //   ],
    //   answers: [
    //     {
    //       id: '0',
    //       answer: [
    //         [QuizMarkdownType.TEXT, 'Define a '],
    //       ],
    //     },
    //     {
    //       id: '1',
    //       answer: [
    //         [QuizMarkdownType.TEXT, 'Type inferrence'],
    //       ],
    //     },
    //     {
    //       id: '2',
    //       answer: [
    //         [QuizMarkdownType.TEXT, 'RPC'],
    //       ],
    //     },
    //     {
    //       id: '3',
    //       answer: [
    //         [QuizMarkdownType.TEXT, 'Tree shaking'],
    //       ],
    //     },
    //   ],
    //   correctAnswer: '0',
    // },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a feature that is common to the libraries'],
        [QuizMarkdownType.INLINE_CODE, 'react-redux'],
        [QuizMarkdownType.TEXT, ', '],
        [QuizMarkdownType.INLINE_CODE, '@apollo/client'],
        [QuizMarkdownType.TEXT, ', '],
        [QuizMarkdownType.INLINE_CODE, '@tanstack/react-query'],
        [QuizMarkdownType.TEXT, ', and'],
        [QuizMarkdownType.INLINE_CODE, 'swr'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Cache invalidation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Type inferrence'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'RPC'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Tree shaking'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which process is responsible for restoring server-rendered HTML with client-side interactivity?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Hydration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Web workers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'JavaScript AST compilation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Tree shaking']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JavaScript framework is known for performing hydration during client-side rendering?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'jQuery']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'React']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AngularJS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Backbone.js']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What problem can occur if the HTML rendered on the server does not match the client JavaScript during hydration?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Flickering styles']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Hydration mismatch errors']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Slower DNS resolution']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '401'], [QuizMarkdownType.TEXT, 'errors']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main advantage of partial or selective hydration in modern frameworks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reduces bundle size and improves performance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Improves backend logic by making server-side rendering obsolete']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Improves debugging in client-side applications']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Avoids the use of JavaScript to add user interactivity']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following optimizations is designed to reduce the cost of hydration?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Code splitting']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Streaming server rendering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Partial or selective hydration']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Tree shaking']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTML attribute can be used to obtain a resource such as a script or style in advance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'rel="dns-prefetch"']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'rel="prefetch"']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'rel="preconnect"']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'rel="cache"']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When should you avoid prefetching resources in a web app?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'If you are using a content delivery network']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'If you are using server-side rendering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'If the prefetched data is sensitive or private']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'If the page also fulfills hydration']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes the difference between'],
        [QuizMarkdownType.INLINE_CODE, 'prefetch'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'preload'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Prefetch is for critical resources, preload is not']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Prefetch loads content on user interaction, preload is for low-priority data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Preload is used for current navigation, prefetch is for future navigation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Preload is used for future navigation, prefetch is for current navigation']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT related to bundle size reduction?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Prefetch is for critical resources, preload is not']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Hydration']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Tree shaking']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
