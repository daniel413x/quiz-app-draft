import domIllustration from '@/public/dom-illustration.png';
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'JavaScript',
  slug: 'javascript',
  category: {
    slug: 'programming',
  },
  questions: [

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which is true of the call stack?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'While processing tasks in the task queue, any number of jobs can be added to the jobs queue']], order: 1 },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'While processing jobs in the jobs queue, any number of jobs can be added to the jobs queue']], order: 2 },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'While processing tasks in the task queue, any number of tasks can be added to the tasks queue']], order: 3 },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'All of the above']], order: 4 },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Queueing tasks to the tasks queue while a task is being executed will cummulatively extend the execution of tasks before any queued jobs are executed.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'False']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'True']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: The event loop can go idle (after finishing the execution of all operations) on a macrotask or a microtask alike.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer correctly illustrates a sequence for executing microtasks (jobs) and macrotasks (tasks) in the event loop?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'task, job, job, task, job, job, job, job, job, job, task, job, task, ...']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'task, job, job, task, task, job, job, task, job, job, task, task, ...']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'task, task, task, job, task, task, job, job, task, task, job, job, ...']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'All of the above']], order: 3 },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer correctly illustrates a sequence for executing microtasks (jobs) and macrotasks (tasks) in the event loop?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'task, job, job, task, job, task, job, job, job, task, task, task, ...']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'task, job, job, task, task, job, job, task, job, job, task, task, ...']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'task, task, task, job, task, task, job, job, task, task, job, job, ...']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'All of the above']], order: 3 },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is true of the event loop?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Any number of tasks and jobs can be added while the current task is processing, but all jobs must be processed before the next task is processed']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Any number of tasks and jobs can be added while the current task is processing and all of them will be processed in the order they are added']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Any number of tasks and jobs can be added while the current task is processing and either is cummulatively processed in order before the others are processed']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'None of the above']], order: 3 },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Assuming an execution context of microtasks and macrotasks where no microtask or macrotask defines its own execution context in which there are additional microtasks or macrotasks, the event loop will execute all microtasks and then all macrotasks.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Macrotask A queues microtasks A and B to the jobs queue and macrotask B to the tasks queue. Microtask A queues macrotasks C and D to the tasks queue. Which of the following is true?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Macrotask B is executed before macrotasks C and D']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Macrotasks C and D are executed before macrotask B']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Macrotasks C and D are executed before microtask B']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Macrotask B is executed before microtasks A and B']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: In the event loop, any number of microtasks can be chain added and processed before the next macrotask will be processed.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: In the event loop, jobs and tasks are batch processed in the order they are added.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'False']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'True']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your application is executing a task in the tasks queue. During this, it queues a task to the tasks queue and then queues two jobs to the jobs queue. The current task finishes executing. What happens next?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The two jobs are executed']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The task is executed']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'One job is executed, then the task, then the other job']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'None of the above']], order: 3 },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement is true about the output of the following code?'],
        [QuizMarkdownType.CODE, `console.log('Synchronous code');

Promise.resolve().then(() => {
  console.log('Job 1');
});

Promise.resolve().then(() => {
  console.log('Job 2');
  setTimeout(() => {
    console.log('Job 2 Task 1');
    Promise.resolve().then(() => {
      console.log('Job 2 Task 1 Job 1');
    });
  }, 0);
});

setTimeout(() => {
  console.log('Task 2');
}, 0);

setTimeout(() => {
  console.log('Task 3');
  Promise.resolve().then(() => {
    console.log('Task 3 Job 1');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('Job 3');
});

console.log('Synchronous code');`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Task 3 Job 1'], [QuizMarkdownType.TEXT, 'will be logged before'], [QuizMarkdownType.INLINE_CODE, 'Job 2 Task 1 Job 1']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Job 2 Task 1 Job 1'], [QuizMarkdownType.TEXT, 'will be logged before'], [QuizMarkdownType.INLINE_CODE, 'Task 3 Job 1']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Job 2 Task 1 Job 1'], [QuizMarkdownType.TEXT, 'will be logged before'], [QuizMarkdownType.INLINE_CODE, 'Job 2 Task 1']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Task 3'], [QuizMarkdownType.TEXT, 'will be logged after'], [QuizMarkdownType.INLINE_CODE, 'Job 2 Task 1 Job 1']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does one correctly fill in the blanks for the DOM illustration?'],
      ],
      image: domIllustration,
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '1. window, 2. document, 3. html']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '1. document, 2. window, 3. html']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '1. html, 2. document, 3. window']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '1. window, 2. html, 3. document']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which environment uses JavaScript to control hardware and robotics?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Johnny-Five']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'React Native']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Electron']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Vue.js']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which tool is often used for automating tasks in a JavaScript development workflow?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Gulp']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'React']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Vue.js']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Webpack']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JavaScript library is commonly used for 3D content on the web?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Three.js']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Phaser']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Babylon.js']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'jQuery']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is used for creating desktop applications with JavaScript, HTML, and CSS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Electron']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'React Native']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Node.js']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Vue.js']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which framework is used for building cross-platform mobile applications using JavaScript?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'React Native']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Electron']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Angular']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Next.js']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which environment is most commonly associated with client-side JavaScript?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Web Browsers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Node.js']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'React Native']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Electron']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JavaScript runtime environment is primarily used for server-side development?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Node.js']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'React']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Angular']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Vue.js']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which framework is used for building cross-platform mobile applications using JavaScript?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'React Native']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Electron']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Angular']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Next.js']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.INLINE_CODE, '.then()'],
      ],
      answers: [
        {
          id: '0', answer: [[QuizMarkdownType.TEXT, 'is a method']],
        },
        {
          id: '1', answer: [[QuizMarkdownType.TEXT, 'is special syntax']],
        },
        {
          id: '2', answer: [[QuizMarkdownType.TEXT, 'is a promise']],
        },
        {
          id: '3', answer: [[QuizMarkdownType.TEXT, 'is a resolver']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A certain promise'],
        [QuizMarkdownType.INLINE_CODE, 'async function sleep() {...}'],
        [QuizMarkdownType.TEXT, 'sleeps for'],
        [QuizMarkdownType.INLINE_CODE, 'ms'],
        [QuizMarkdownType.TEXT, 'milliseconds before executing further code. Which of the following could properly define the promise?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.CODE, `async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}`]],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.CODE, `async function sleep(millis) {
  const p = new Promise();
  return await setTimeout(() => {}, millis);
}`]],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.CODE, `async function sleep(millis) {
  await setTimeout(() => {}, millis)
  return null;
}`]],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.CODE, `async function sleep(millis) {
  const p = new Promise((resolve, r) => {
    setTimeout(() => { }, millis);
  });
  return await p.resolve();
}`]],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer modifies all arrays such that you can call the method array.last() on any array and it will return the last element?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.CODE, `Array.prototype.last = function () {
  return this[this.length - 1];
}`]],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.CODE, `Array.prototype.last = function () {
  return this[this.length];
}`]],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.CODE, `Array.prototype.last = function () {
  return this.length - 1;
}`]],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.CODE, `Array.prototype.last = function () {
  return this;
}`]],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does CSSOM stand for in web development?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CSS Object Model']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Cascading Style Sheet Object Manager']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Cascading Style Sheet Object Modeler']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Cascading Style Sheet Operating Model']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of the CSSOM in web development?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To represent the stylesheets of a document as a structured tree of objects']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To manipulate HTML content dynamically']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To handle server-side rendering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To store user session data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes how the CSSOM is related to the DOM?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The CSSOM and DOM are separate, but the CSSOM is used to apply styles to the DOM elements.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The CSSOM is a subset of the DOM and directly modifies the HTML structure.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The CSSOM replaces the DOM for styling purposes.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The CSSOM is used exclusively for JavaScript interactions.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What kind of objects does the CSSOM represent in a web document?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CSS rules, properties, and values']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'HTML elements and attributes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'JavaScript functions and variables']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'HTTP requests and responses']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can JavaScript be used to interact with the CSSOM?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By accessing and modifying style properties using methods like'],
            [QuizMarkdownType.INLINE_CODE, 'document.styleSheets'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'CSSStyleSheet.insertRule'],
          ],
        },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By sending AJAX requests to update styles.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By manipulating cookies to store style information.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By updating the HTML directly within script tags.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to insert a new CSS rule into a stylesheet in the CSSOM?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'insertRule']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'appendChild']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'createRule']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'addRule']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the'],
        [QuizMarkdownType.INLINE_CODE, 'CSSStyleDeclaration'],
        [QuizMarkdownType.TEXT, 'interface represent in the CSSOM?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It represents an object that is a list of CSS property-value pairs.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It represents an individual CSS rule in a stylesheet.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It represents a collection of CSS stylesheets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It represents the entire CSS object model.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which CSSOM method is used to delete a CSS rule from a stylesheet?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'deleteRule']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'removeRule']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'clearRule']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'eraseRule']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the'],
        [QuizMarkdownType.INLINE_CODE, 'CSSRule'],
        [QuizMarkdownType.TEXT, 'interface in the CSSOM?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It represents a single CSS rule within a stylesheet.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It represents the entire CSS stylesheet.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It represents a list of CSS stylesheets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It represents the CSS object model.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you access the CSS rules of a specific stylesheet in the CSSOM?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the'],
            [QuizMarkdownType.INLINE_CODE, 'cssRules'],
            [QuizMarkdownType.TEXT, 'property of the'],
            [QuizMarkdownType.INLINE_CODE, 'CSSStyleSheet'],
            [QuizMarkdownType.TEXT, 'interface.']],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the'],
            [QuizMarkdownType.INLINE_CODE, 'getRules'],
            [QuizMarkdownType.TEXT, 'method of the'],
            [QuizMarkdownType.INLINE_CODE, 'CSSStyleSheet'],
            [QuizMarkdownType.TEXT, 'interface.']],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the'],
            [QuizMarkdownType.INLINE_CODE, 'rules'],
            [QuizMarkdownType.TEXT, 'property of the'],
            [QuizMarkdownType.INLINE_CODE, 'CSSStyleSheet'],
            [QuizMarkdownType.TEXT, 'interface.']],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the'],
            [QuizMarkdownType.INLINE_CODE, 'getCSSRules'],
            [QuizMarkdownType.TEXT, 'method of the'],
            [QuizMarkdownType.INLINE_CODE, 'CSSStyleSheet'],
            [QuizMarkdownType.TEXT, 'interface.']],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default behavior of a'],
        [QuizMarkdownType.INLINE_CODE, '<script>'],
        [QuizMarkdownType.TEXT, 'tag in HTML?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The script is executed synchronously and blocks HTML parsing until it is fully executed.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The script is executed asynchronously and does not block HTML parsing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The script is deferred and executes after the HTML document has been fully parsed.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The script is handled by background threads, allowing for a non-blocking runtime.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the code below,'],
        [QuizMarkdownType.CODE, `<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
    <script>
      console.log('Start');
      setTimeout(() => {
        console.log('Macrotask');
      }, 0);
      Promise.resolve().then(() => {
        console.log('Microtask');
      });
      console.log('End');
    </script>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
`],
        [QuizMarkdownType.TEXT, 'Which is true of the <script> tag?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The script logs',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'Start, End, Microtask, Macrotask',
            ],
            [
              QuizMarkdownType.TEXT,
              'and blocks the UI until',
            ],
            [QuizMarkdownType.INLINE_CODE,
              'Microtask',
            ],
            [QuizMarkdownType.TEXT,
              'is logged',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The script logs',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'Start, End, Microtask, Macrotask',
            ],
            [
              QuizMarkdownType.TEXT,
              'and blocks the UI until',
            ],
            [QuizMarkdownType.INLINE_CODE,
              'Macrotask',
            ],
            [QuizMarkdownType.TEXT,
              'is logged',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The script logs',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'Start, End, Microtask, Macrotask',
            ],
            [
              QuizMarkdownType.TEXT,
              'and blocks the UI until',
            ],
            [QuizMarkdownType.INLINE_CODE,
              'Microtask',
            ],
            [QuizMarkdownType.TEXT,
              'is logged',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The script logs',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'Start, End, Microtask, Macrotask',
            ],
            [
              QuizMarkdownType.TEXT,
              'and blocks the UI until',
            ],
            [QuizMarkdownType.INLINE_CODE,
              'End',
            ],
            [QuizMarkdownType.TEXT,
              'is logged',
            ],
          ],

        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which attribute allows a'],
        [QuizMarkdownType.INLINE_CODE, '<script>'],
        [QuizMarkdownType.TEXT, 'tag to load the script asynchronously, without blocking HTML parsing, but executes it as soon as it is available?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'async']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'defer']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'type']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'src']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the line of code'],
        [QuizMarkdownType.INLINE_CODE, 'x += 1'],
        [QuizMarkdownType.TEXT, ','],
        [QuizMarkdownType.INLINE_CODE, 'x'],
        [QuizMarkdownType.TEXT, 'is known as the'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Operand']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Deferred']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Value']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Operator']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the'],
        [QuizMarkdownType.INLINE_CODE, 'defer'],
        [QuizMarkdownType.TEXT, 'attribute do when used with a'],
        [QuizMarkdownType.INLINE_CODE, '<script>'],
        [QuizMarkdownType.TEXT, 'tag?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It loads the script in parallel with HTML parsing and executes it after the document has been fully parsed.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It prevents the script from executing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It executes the script as soon as it is available, without blocking HTML parsing.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It only allows the script to run on older browsers.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements about'],
        [QuizMarkdownType.INLINE_CODE, '<script>'],
        [QuizMarkdownType.TEXT, 'tags is true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Scripts with the'],
            [QuizMarkdownType.INLINE_CODE, 'defer'],
            [QuizMarkdownType.TEXT, 'attribute are executed in the order they appear in the document.']],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Scripts with the'],
            [QuizMarkdownType.INLINE_CODE, 'async'],
            [QuizMarkdownType.TEXT, 'attribute are guaranteed to be executed in order.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Scripts without'],
            [QuizMarkdownType.INLINE_CODE, 'defer'],
            [QuizMarkdownType.TEXT, 'or'],
            [QuizMarkdownType.INLINE_CODE, 'async'],
            [QuizMarkdownType.TEXT, 'attributes are executed asynchronously.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Scripts with the'],
            [QuizMarkdownType.INLINE_CODE, 'defer'],
            [QuizMarkdownType.TEXT, 'attribute block HTML parsing.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens when a'],
        [QuizMarkdownType.INLINE_CODE, '<script>'],
        [QuizMarkdownType.TEXT, 'tag is placed in the body of an HTML document without'],
        [QuizMarkdownType.INLINE_CODE, 'async'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.INLINE_CODE, 'defer'],
        [QuizMarkdownType.TEXT, 'attributes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The script is executed immediately and blocks HTML parsing until it finishes.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The script is loaded in parallel and executed after the HTML document is fully parsed.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The script does not execute at all.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The script is executed after all other resources are loaded.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary difference between synchronous and asynchronous script loading in HTML?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Synchronous scripts block HTML parsing, while asynchronous scripts do not.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Asynchronous scripts are always executed before synchronous scripts.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Synchronous scripts are loaded faster than asynchronous scripts.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Asynchronous scripts block the loading of other resources.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which attribute ensures that a'],
        [QuizMarkdownType.INLINE_CODE, '<script>'],
        [QuizMarkdownType.TEXT, 'is executed only after the HTML document has been fully parsed, but still loads the script in parallel?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'defer']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'async']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'type']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'src']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If both'],
        [QuizMarkdownType.INLINE_CODE, 'async'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'defer'],
        [QuizMarkdownType.TEXT, 'attributes are present on a'],
        [QuizMarkdownType.INLINE_CODE, '<script>'],
        [QuizMarkdownType.TEXT, 'tag, which one takes precedence?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'async']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'defer']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Neither, the script will not execute.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Both, the script will execute twice.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of script loading is most appropriate for scripts that modify the DOM structure of the document?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'defer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'async']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'type="module"']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'type="text/javascript"']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why might you use the'],
        [QuizMarkdownType.INLINE_CODE, 'async'],
        [QuizMarkdownType.TEXT, 'attribute on a'],
        [QuizMarkdownType.INLINE_CODE, '<script>'],
        [QuizMarkdownType.TEXT, 'tag?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To load the script without blocking HTML parsing and execute it as soon as it is available.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To ensure the script is executed in order after all HTML parsing is complete.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To prevent the script from executing until a user interaction.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To guarantee that the script will not execute.']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, `try {
  var x = 4;
  console.log(y);
} catch (error) {
  console.error(error);
}`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ReferenceError']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'TypeError']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'RangeError']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'SyntaxError']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, 'let num =+ 5'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ReferenceError']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'TypeError']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'RangeError']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'SyntaxError']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, `try {
  let arr = new Array(-1);
} catch (error) {
  console.error(error);
}`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ReferenceError']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'TypeError']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'RangeError']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'SyntaxError']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, `try {
  let interOp = 'interOp';
  interOp.toFixed(2);
} catch (error) {
  console.error(error);
}`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ReferenceError']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'TypeError']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'RangeError']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'SyntaxError']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, `try {
  let num = 5;
  num.toUpperCase();
} catch (error) {
  console.error(error);
}`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ReferenceError']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'TypeError']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'RangeError']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'SyntaxError']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When does a'],
        [QuizMarkdownType.INLINE_CODE, 'ReferenceError'],
        [QuizMarkdownType.TEXT, 'typically occur in JavaScript?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'When a code attempts to access a variable that hasn’t been declared within its scope.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'When a variable is declared but not initialized.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'When there is a type mismatch in the variable assignment.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'When a function is called with incorrect arguments.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following code snippets will throw a'],
        [QuizMarkdownType.INLINE_CODE, 'ReferenceError'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.CODE, 'console.log(nonExistentVariable);']] },
        { id: '1', answer: [[QuizMarkdownType.CODE, 'let a;\nconsole.log(a);']] },
        { id: '2', answer: [[QuizMarkdownType.CODE, 'let b = undefined;\nconsole.log(b);']] },
        { id: '3', answer: [[QuizMarkdownType.CODE, 'const c = null;\nconsole.log(c);']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a '],
        [QuizMarkdownType.INLINE_CODE, 'ReferenceError'],
        [QuizMarkdownType.TEXT, ' in JavaScript?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'An error thrown when trying to access a variable that is not declared.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'An error thrown when a variable is declared but not assigned a value.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An error thrown when there is a syntax mistake in the code.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'An error thrown when a variable is assigned an undefined value.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, `var i = 0;

i++;
++i;
++i;
i++;
i++;
++i;
i++;
i++;
++i;

console.log(i);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SyntaxError'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ReferenceError'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '9'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '7'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the'],
        [QuizMarkdownType.INLINE_CODE, 'DOMContentLoaded'],
        [QuizMarkdownType.TEXT, 'event signify in a web application?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The HTML document has been fully loaded and parsed, but stylesheets, images, and subframes may not have finished loading.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'All resources including stylesheets, images, and subframes have finished loading.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The user has interacted with the page for the first time.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The JavaScript code has finished executing.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you sort an array of objects by a property value in ascending order?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.CODE, 'array.sort((a, b) => a.property - b.property)']] },
        { id: '1', answer: [[QuizMarkdownType.CODE, 'array.sort((a, b) => b.property - a.property)']] },
        { id: '2', answer: [[QuizMarkdownType.CODE, 'array.sort((a, b) => a.property.length - b.property.length)']] },
        { id: '3', answer: [[QuizMarkdownType.CODE, 'array.sort((a, b) => b.property.length - a.property.length)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why might using'],
        [QuizMarkdownType.INLINE_CODE, 'sort()'],
        [QuizMarkdownType.TEXT, 'without a compare function give unexpected results for an array of numbers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Because the default sorting is lexicographical']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Because the default sorting is based on length']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Because the default sorting relies on integers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Because the default sorting is numerical']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code when using'],
        [QuizMarkdownType.INLINE_CODE, 'sort()'],
        [QuizMarkdownType.TEXT, 'with a compare function?'],
        [QuizMarkdownType.CODE, `const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => b - a);
console.log(numbers);`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '[5, 4, 3, 2, 1]']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '[1, 2, 3, 4, 5]']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '[4, 2, 5, 1, 3]']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '[2, 3, 4, 5, 1]']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following compare functions will sort an array of strings in reverse alphabetical order?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.CODE, '(a, b) => b.localeCompare(a)']] },
        { id: '1', answer: [[QuizMarkdownType.CODE, '(a, b) => a.localeCompare(b)']] },
        { id: '2', answer: [[QuizMarkdownType.CODE, '(a, b) => a.length - b.length']] },
        { id: '3', answer: [[QuizMarkdownType.CODE, '(a, b) => b.length - a.length']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the compare function in'],
        [QuizMarkdownType.INLINE_CODE, 'Array.prototype.sort()'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To define the sort order of elements based on custom logic']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To filter elements during sorting']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To map elements to new values']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To join array elements into a string']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does the compare function used in'],
        [QuizMarkdownType.INLINE_CODE, 'sort()'],
        [QuizMarkdownType.TEXT, 'determine the order of elements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It returns a negative, zero, or positive value to determine the order']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It returns true or false']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It returns the index of the elements']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It returns the length of the elements']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of sorting the following array of strings using'],
        [QuizMarkdownType.INLINE_CODE, 'sort()'],
        [QuizMarkdownType.TEXT, '?'],
        [QuizMarkdownType.CODE, `const fruits = ['banana', 'apple', 'Cherry'];
fruits.sort();
console.log(fruits);`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '[\'Cherry\', \'apple\', \'banana\']']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '[\'apple\', \'banana\', \'Cherry\']']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '[\'banana\', \'Cherry\', \'apple\']']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '[\'apple\', \'Cherry\', \'banana\']']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you sort an array of numbers in ascending order?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.CODE, 'array.sort((a, b) => a - b)']] },
        { id: '1', answer: [[QuizMarkdownType.CODE, 'array.sort((a, b) => b - a)']] },
        { id: '2', answer: [[QuizMarkdownType.CODE, 'array.sort()']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following code, what will be the output?'],
        [QuizMarkdownType.CODE, `const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers);`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '[1, 100000, 21, 30, 4]']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '[1, 4, 21, 30, 100000]']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '[100000, 1, 21, 30, 4]']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '[1, 30, 4, 21, 100000]']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The array sorting function'],
        [QuizMarkdownType.INLINE_CODE, 'Array.prototype.sort()'],
        [QuizMarkdownType.TEXT, 'is based on the _______ algorithm'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'TimSort']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Bubble Sort']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Insertion Sort']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Heap Sort']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default sorting order when using'],
        [QuizMarkdownType.INLINE_CODE, 'Array.prototype.sort()'],
        [QuizMarkdownType.TEXT, 'without a compare function?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Lexicographical (based on Unicode code points)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Numerical']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Chronological']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reverse lexicographical']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JavaScript event is used to detect when the content of a webpage has fully loaded?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'DOMContentLoaded']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'load']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ready']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'beforeunload']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer demonstrates type coercion?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '===']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '!!']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '!=']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'parseInt()']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer demonstrates type coercion?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '===']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '!!']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '!=']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'parseInt()']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JavaScript event is used to ensure that the DOM is fully constructed before running scripts that depend on DOM elements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'DOMContentLoaded']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'load']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ready']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'beforeunload']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JavaScript method can be used to dynamically add a new element to the DOM?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'document.createElement']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'document.getElementById']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'document.querySelector']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'document.write']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A web developer must perform a certain action after the entire web page has loaded, including all stylesheets and images. Which event listener would best serve the web developer?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'window.addEventListener("load", function() {...})']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'window.addEventListener("DOMContentLoaded", function() {...})']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'window.addEventListener("ready", function() {...})']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'window.addEventListener("beforeunload", function() {...})']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you ensure that a script is executed only after the entire page has loaded?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'window.addEventListener("load", function() {...})']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'window.addEventListener("DOMContentLoaded", function() {...})']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'window.addEventListener("ready", function() {...})']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'window.addEventListener("beforeunload", function() {...})']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following methods can be used to prevent the default action of an event in JavaScript?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'event.preventDefault()']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'event.stopPropagation()']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'event.stopImmediatePropagation()']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'event.cancelBubble']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following methods can be used to prevent the default action of an event in JavaScript?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'event.preventDefault()']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'event.stopPropagation()']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'event.stopImmediatePropagation()']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'event.cancelBubble']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JavaScript method can be used to change the content of an HTML element?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'element.innerHTML']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'element.innerText']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'element.content']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'element.value']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you add a class to an HTML element using JavaScript?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'element.classList.add("classname")']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'element.addClass("classname")']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'element.className += " classname"']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'element.setAttribute("class", "classname")']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to stop event propagation in JavaScript?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'event.stopPropagation()']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'event.preventDefault()']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'event.stopImmediatePropagation()']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'event.cancelBubble']] },
      ],
      correctAnswer: '0',
    },
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
        [QuizMarkdownType.TEXT, 'Which JavaScript method is used to remove an existing HTML element from the DOM?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'element.remove()']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'element.delete()']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'element.removeChild()']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'element.discard()']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which principle is best described by the code below?',
        ],
        [
          QuizMarkdownType.CODE,
          `class Animal {
  speak() {
    console.log('Animal speaks');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks');
  }
}

const myDog = new Dog();
myDog.speak(); // Dog barks`,
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Polymorphism',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Inheritance',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Higher-order functions',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Context binding',
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
          'What is the purpose of the following HTML?',
        ],
      ],
      code: '<span className="sr-only">Toggle theme</span>',
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To add a span with the class "sr-only"',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To add a label to a toggle button',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To add screen reader support',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To add a testing element',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the primary goal of an SQL injection attack?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To gain unauthorized access to a database',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To cause a denial of service',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To install malware on a server',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To redirect users to a malicious website',
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
          'Which of the following is a common indication that a web application might be vulnerable to SQL injection?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Frequent server crashes',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Slow website performance',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Error messages displaying SQL syntax errors',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increased spam emails',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which SQL clause is most commonly exploited in an SQL injection attack?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'WHERE',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ORDER BY',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'GROUP BY',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'HAVING',
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
          'Which of the following techniques can help prevent SQL injection attacks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using parameterized queries',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Disabling error messages',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using complex passwords',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Implementing a CAPTCHA',
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
          'What is the purpose of using parameterized queries in preventing SQL injections?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To speed up database queries',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To separate SQL code from user input',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To encrypt database connections',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To log all database activities',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following is a direct consequence of a successful SQL injection attack?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Data leakage',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Website defacement',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Service unavailability',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increased traffic',
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
          'What role does input validation play in preventing SQL injection attacks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It blocks malicious IP addresses',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It ensures that user input conforms to expected formats',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It encrypts user input',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It logs user input for auditing',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which web application vulnerability is exploited in SQL injection attacks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cross-Site Scripting (XSS)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Buffer Overflow',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Improper input handling',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Denial of Service (DoS)',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'How can web application firewalls (WAFs) help in mitigating SQL injection attacks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By blocking traffic from known malicious IP addresses',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By analyzing and filtering out malicious SQL queries',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By encrypting all database communications',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By logging all user activities for later review',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which method is NOT effective in preventing SQL injection attacks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Parameterized queries',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Stored procedures',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Client-side validation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Web application firewalls',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What will be the output of the following code?',
        ],
      ],
      code: 'console.log([] + []);',
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '""',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"[]"',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"[object Object]"',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'undefined',
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
          'Which of the following correctly describes the behavior of',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'let',
        ],
        [
          QuizMarkdownType.TEXT,
          'and',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'var',
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
              'let',
            ],
            [
              QuizMarkdownType.TEXT,
              'is block-scoped, while',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'var',
            ],
            [
              QuizMarkdownType.TEXT,
              'is function-scoped',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'let',
            ],
            [
              QuizMarkdownType.TEXT,
              'is function-scoped, while',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'var',
            ],
            [
              QuizMarkdownType.TEXT,
              'is block-scoped',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'let',
            ],
            [
              QuizMarkdownType.TEXT,
              'and',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'var',
            ],
            [
              QuizMarkdownType.TEXT,
              'are block-scoped',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'let',
            ],
            [
              QuizMarkdownType.TEXT,
              'and',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'var',
            ],
            [
              QuizMarkdownType.TEXT,
              'are function-scoped',
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
          'Which of the following is a valid way to create an object in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'let obj = {};',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'let obj = Object.create();',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'let obj = newObject();',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'let obj = Object.createObject();',
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
          'What will be the output of the following code?',
        ],
      ],
      code: 'console.log(typeof NaN);',
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"number"',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"NaN"',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"undefined"',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"object"',
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
          'What does the "map" method do in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It creates a new array with the results of calling a function for every array element',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It creates a new array with all elements that pass a test implemented by a function',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It changes the original array',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It returns the first element that passes a test implemented by a function',
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
          'Which of the following is true about arrow functions?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They do not have their own "this" context',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They are always anonymous',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They cannot be used as constructors',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All of the above',
            ],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the purpose of the "Promise" object in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It represents the eventual completion (or failure) of an asynchronous operation and its resulting value',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It ensures synchronous code execution',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It allows the use of global variables',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It delays the execution of code',
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
          'Which of the following statements is true about "strict mode"?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It helps catch common coding errors and prevents the use of certain unsafe features',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It makes JavaScript code run faster',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It allows the use of deprecated features',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It automatically fixes common bugs in the code',
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
          'Which of the following is not a feature of ES6?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Callback functions',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Arrow functions',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Template literals',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Default parameters',
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
          'A critical component to encapsulation in JavaScript is ______',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ES6',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Parameters',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Global scope',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Closures',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the main purpose of the "async/await" syntax?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To handle asynchronous code in a synchronous manner',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To create new promises',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To pause the execution of synchronous code',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To declare functions that do not return a value',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The code'],
        [QuizMarkdownType.INLINE_CODE, '[] == ![]'],
        [QuizMarkdownType.TEXT, 'will evaluate to'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'true']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'false']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'undefined']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'null']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, 'console.log([] + []);'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '[]']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'undefined']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'null']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code output?'],
        [QuizMarkdownType.CODE, `const foo = {
  bar: function() {
    return this.baz;
  },
  baz: 1
};
console.log(typeof (f = foo.bar)());`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'undefined']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'number']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'object']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'function']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following evaluates to NaN?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'parseInt("hello")']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'parseInt("42")']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'parseInt("10.5")']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'parseInt("0x10")']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, `(function() {
  var a = b = 5;
})();
console.log(b);`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '5']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'undefined']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ReferenceError']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'TypeError']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will the following code return?'],
        [QuizMarkdownType.CODE, '[1, 2, 3] + [4, 5, 6]'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '"1,2,34,5,6"']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '[1, 2, 3, 4, 5, 6]']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'undefined']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'TypeError']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of the following code?'],
        [QuizMarkdownType.CODE, `var x = 10;
var y = (x++, x);
console.log(y);`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '11']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '10']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'undefined']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ReferenceError']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, 'console.log([] == []);'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'false']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'true']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'undefined']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'TypeError']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What will be the output of the following code?',
        ],
        [
          QuizMarkdownType.CODE,
          'console.log(0.1 + 0.2 === 0.3);',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'false',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'true',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'undefined',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '"0.3"',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, 'console.log([] == []);'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'false']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'true']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'undefined']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'TypeError']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What would be the best way to type arguments for the function',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'function theFunc() {}',
        ],
        [
          QuizMarkdownType.TEXT,
          'if',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'theFunc',
        ],
        [
          QuizMarkdownType.TEXT,
          'takes any number of arguments?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '(...args: any[])',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '(args: any[])',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '(args: any)',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '(args: [...any])',
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
          'What is the difference between "==" and "===" in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"==" compares values after type conversion, while "===" compares values without type conversion',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"==" is used for strict equality, while "===" is used for loose equality',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both are used for strict equality',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both are used for loose equality',
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
          'Which of the following is a method for adding properties to all objects created by a constructor?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Constructor.prototype.method',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object.method',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Function.method',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object.prototype.method',
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
          'What will be the output of the following code?',
        ],
      ],
      code: 'console.log(typeof []);',
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"object"',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"array"',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"undefined"',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"null"',
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
          'Which of the following is not a valid way to define a function in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'function myFunction() {}',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'let myFunction = function() {}',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'let myFunction = new Function()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'function:myFunction() {}',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What does the "reduce" method do in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It executes a reducer function on each element of the array, resulting in a single output value',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It creates a new array with the results of calling a function for every array element',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It filters the elements of an array based on a function',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It sorts the elements of an array in place',
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
          'Which of the following best describes the "event loop" in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It handles asynchronous operations by continuously checking the call stack and the callback queue',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is a way to loop through arrays',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It loops through all events attached to the DOM',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is used to handle synchronous code',
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
          'What is the difference between "call" and "apply" methods in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both methods call a function with a given "this" value, but "apply" accepts arguments as an array',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"call" binds a function to a given context, while "apply" does not',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"apply" binds a function to a given context, while "call" does not',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both methods are used to create new functions',
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
          'What is the purpose of the "Symbol" type in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To create unique identifiers for object properties',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To define constants',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To represent large numbers',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To create functions',
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
          'What will be the output of the following code?',
        ],
      ],
      code: 'console.log("5" - 2);',
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '3',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"52"',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'NaN',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"3"',
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
          'Which of the following is true about closures in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A closure is a function combined with its lexical environment',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A closure is a function that can be used only once',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A closure is a function that has no access to its outer scope',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Closures do not exist in JavaScript',
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
          'What is the purpose of the "use strict" directive in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To enable strict mode, which catches common coding errors and “unsafe” actions',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To allow the use of experimental features',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To disable deprecated features',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To automatically fix common bugs in the code',
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
          'Which statement best describes "hoisting" in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Variables and function declarations are moved to the top of their scope before code execution',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Functions are executed before any other code',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Variables and functions are hoisted to the bottom of their scope',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Only variables are hoisted to the top of their scope',
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
          'In JavaScript, which of the following methods can be used to find the largest number in an array?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Math.max.apply(null, array)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'array.reduce(Math.max)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Math.max(array)',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'array.reduce((a, b) => a > b ? a : b)',
            ],
          ],
        },
        {
          id: '4',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Either Math.max.apply(null, array) OR array.reduce((a, b) => a > b ? a : b)',
            ],
          ],
          order: 4,
        },
      ],
      correctAnswer: '4',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What does the "this" keyword refer to in a method of an object?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The object itself',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The global object',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The closest parent object',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The window object',
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
          'Which of the following is a feature of JavaScript’s prototype-based inheritance?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Objects can inherit properties from other objects',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Classes can inherit properties from other classes',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Properties can only be inherited from a prototype object',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Inheritance is not supported in JavaScript',
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
          'Which of the following is not a JavaScript data type?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Float',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Undefined',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Symbol',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Boolean',
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
          'What will be the output of the following code?',
        ],
      ],
      code: 'console.log(typeof null);',
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"object"',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"null"',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"undefined"',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"boolean"',
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
          'Which of the following is true about the "bind" method in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It creates a new function with a specified "this" value and arguments',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It permanently sets the "this" value of a function',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It prevents the function from being called',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It creates a copy of an object',
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
          'What does the "async" keyword do when added to a function?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It allows the function to return a promise',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It allows the function to run synchronously',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It prevents the function from returning a value',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It ensures the function runs immediately',
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
          'What will be the output of the following code?',
        ],
      ],
      code: 'console.log(1 + "1");',
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"2"',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"11"',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"3"',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which method is used to remove the last element from an array?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'shift',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'pop',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'slice',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'splice',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the value of "this" in a regular function (not an arrow function) in the global scope?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'null',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'undefined',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'window',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'global',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which operator is used to check for both value and type equality?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '==',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '===',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '!=',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '!==',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The statement below checks for value and type equality',
        ],
      ],
      code: 'console.log(0 == "0");',
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'True',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'False',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What will be the output of the following code?',
        ],
      ],
      code: 'console.log(typeof function(){});',
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"function"',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"object"',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"undefined"',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"null"',
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
          'Which of the following is not a valid loop construct in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'for',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'while',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'do-while',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'for-while',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What does the "filter" method do in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It creates a new array with all elements that pass the test implemented by the provided function',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It modifies the original array',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It removes elements from the original array',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It sorts the elements of an array',
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
          'What will be the output of the following code?',
        ],
      ],
      code: 'console.log(0 == "0");',
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'false',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'true',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'undefined',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'null',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following is a way to create a new object that inherits from a prototype?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object.create()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'new Object()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object.assign()',
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
          'Which of the following is a way to create a new object that is a shallow copy of another object?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object.create()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'new Object()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object.assign()',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A shallow copy created with Object.assign()',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'will have fields that are immutable with regards to the copied object',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'creates references to fields that are objects or arrays in the copied object',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'creates references to fields that are objects in the copied object',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'creates references to fields that are arrays in the copied object',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    // https://chatgpt.com/c/024d9b70-5afe-41e5-89ae-b410fb3f6bc5
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'When you use Object.assign() to create a shallow copy of another object, the original object\'s fields cannot be mutated',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'True',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'False',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What will be the output of the following code?',
        ],
      ],
      code: 'console.log(typeof NaN);',
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"number"',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"NaN"',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"undefined"',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"object"',
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
          'What is a closure in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function having access to the parent scope, even after the parent function has closed',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that returns another function',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that can be called only once',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that has no parameters',
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
          'Which of the following scenarios best describes closure?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that is defined within another function and is a private method of its parent function',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that returns another function that has access to the returner function’s variables',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that is defined within another function and has access to the parent function’s variables',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function with no parameters',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Why are closures useful in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They allow a function to have "private" variables',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They enable synchronous execution of code',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They help in defining global variables',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They prevent code execution',
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
          'What will be the output of the following code?',
        ],
      ],
      code: `function outer() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}
const increment = outer();
console.log(increment());
console.log(increment());`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1 and 1',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1 and 2',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2 and 2',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1 and 2',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What principle is best illustrated by the code below?',
        ],
      ],
      code: `function outer() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}
const increment = outer();
console.log(increment());
console.log(increment());`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'React Context',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Inheritance',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'React functional components',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Closures',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following is true about null?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is a boolean',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is passed in to certain methods to signify where no context or prototype is necessary',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Variables assigned "null" do not occupy memory',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Null is the same as "undefined"',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the primary role of the event loop in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To handle asynchronous operations by continuously checking the call stack and the callback queue',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To manage memory allocation',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To execute synchronous code',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To optimize code execution',
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
          'What will be the output of the following code?',
        ],
      ],
      code: `console.log('start');
setTimeout(() => {
  console.log('middle');
}, 0);
console.log('end');`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'start, end, middle',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'start, middle, end',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'middle, start, end',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'end, start, middle',
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
          'Which statement accurately describes the "call stack" in the context of the event loop?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The call stack is a data structure that keeps track of function calls in the order they need to be executed',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The call stack is a queue where functions are stored before they are executed',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The call stack manages asynchronous tasks',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The call stack is responsible for memory allocation',
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
          'What will be the output of the following code?',
        ],
      ],
      code: `setTimeout(() => {
  console.log('timeout');
}, 0);
Promise.resolve().then(() => {
  console.log('promise');
});
console.log('log');`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'log, promise, timeout',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'timeout, promise, log',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'promise, log, timeout',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'log, timeout, promise',
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
          'Which of the following best describes the "callback queue" in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A queue where callback functions are held until the call stack is empty',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A queue for synchronous functions waiting to be executed',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A queue for functions that are being executed',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A queue that manages memory allocation',
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
          'What will be the output of the following code?',
        ],
      ],
      code: `console.log('first');
setTimeout(() => console.log('second'), 0);
console.log('third');`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'first, third, second',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'first, second, third',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'second, first, third',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'third, first, second',
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
          'In the context of the event loop, what is a "task" in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A piece of code that runs to completion before other code can run',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that is waiting to be executed',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A variable that holds data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'An event that triggers a function call',
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
          'What will be the output of the following code?',
        ],
      ],
      code: `console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'script start, script end, promise1, promise2, setTimeout',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'script start, promise1, script end, promise2, setTimeout',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'script start, promise1, promise2, script end, setTimeout',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'script start, setTimeout, script end, promise1, promise2',
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
          'How does JavaScript handle blocking operations?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript uses the event loop to handle blocking operations asynchronously',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript pauses execution until the operation is complete',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript uses multiple threads to handle blocking operations',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript does not handle blocking operations',
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
          'Which answer illustrates the process "LIFO"?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '[], [0], [0, 1], [0, 1, 2], [1, 2], [1], []',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '[], [0], [0, 1], [0, 1, 2], [0, 1], [0], []',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '[], [0], [0, 2], [0, 1, 2], [0, 1], [0], []',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '[], [0], [0, 1], [0, 0, 1], [0, 1], [0], []',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The event loop is essentially the main thread in JavaScript runtimes',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript is a multi-threaded programming language',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript uses multiple threads to handle blocking operations',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript is a single-threaded programming language',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },

    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What will be the output of the following code?',
        ],
      ],
      code: `function task(message) {
  console.log(message);
}

console.log('Start');

setTimeout(task, 0, 'Timeout task');

Promise.resolve().then(() => task('Promise task'));

console.log('End');`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Start, End, Promise task, Timeout task',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Start, Timeout task, End, Promise task',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Promise task, Start, End, Timeout task',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Start, End, Timeout task, Promise task',
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
          'Which of the following statements is true about microtasks in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Microtasks are tasks that are executed before any macrotasks',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Microtasks are tasks that are executed immediately after the currently executing script',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Microtasks are executed in parallel with the current script',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Microtasks are the same as macrotasks in terms of call stack priority',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following statements is true about setTimeout?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'setTimeout is a microtask',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'setTimeout is a macrotask',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'setTimeout is executed immediately after the currently executing script ',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the primary difference between the Job Queue and the Task Queue in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The Job Queue handles microtasks, while the Task Queue handles macrotasks',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The Job Queue handles tasks scheduled with setTimeout, while the Task Queue handles promises',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The Task Queue has higher priority over the Job Queue',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The Job Queue is for synchronous tasks, and the Task Queue is for asynchronous tasks',
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
          'Which type of tasks are placed in the Job Queue?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Microtasks such as promises and process.nextTick',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Tasks scheduled with setTimeout',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Tasks scheduled with setInterval',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Event handler callbacks',
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
          'Which type of tasks are placed in the Task Queue?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Macrotasks such as setTimeout and setInterval callbacks',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Microtasks such as promises',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Synchronous code',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Immediate code execution',
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
          'What will be the output of the following code?',
        ],
      ],
      code: `console.log('start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise');
});

console.log('end');`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'start, end, promise, setTimeout',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'start, promise, end, setTimeout',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'start, setTimeout, promise, end',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'start, end, setTimeout, promise',
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
          'Why are promises executed before setTimeout callbacks when scheduled to run at the same time?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Because promises are placed in the Job Queue, which has higher priority over the Task Queue',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Because setTimeout callbacks have a built-in delay',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Because promises run synchronously',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Because setTimeout is a promise but is nonetheless placed on the Task Queue',
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
          'In the context of the event loop, what happens after the call stack is empty?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The event loop first processes all tasks in the Job Queue',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The event loop first processes all tasks in the Task Queue',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The event loop stops',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The event loop first processes all synchronous tasks',
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
          'What kind of tasks are added to the Job Queue in Node.js?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Tasks scheduled with process.nextTick',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'setTimeout callbacks',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'setInterval callbacks',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Event handler callbacks',
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
          'What is the purpose of the Job Queue in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To handle microtasks like promises and process.nextTick',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To handle macrotasks like setTimeout and I/O callbacks',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To manage synchronous code execution',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To handle network requests',
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
          'Which of the following statements is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Microtasks are executed before the next macrotask',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Macrotasks are executed before the next microtask',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Microtasks and macrotasks are executed in the same order',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Microtasks are executed only after all macrotasks are done',
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
          'What will be the output of the following code?',
        ],
      ],
      code: `console.log('A');
setTimeout(() => {
  console.log('B');
}, 0);
Promise.resolve().then(() => {
  console.log('C');
}).then(() => {
  console.log('D');
});
console.log('E');`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A, E, C, D, B',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A, C, D, E, B',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A, B, C, D, E',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A, E, B, C, D',
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
          'What is the call stack in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A stack data structure that keeps track of function calls',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A stack data structure that iterates through function calls synchronously',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A queue for handling asynchronous callbacks',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A memory heap for dynamic allocation',
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
          'Which of the following best describes how the call stack operates?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'LIFO (Last In, First Out)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'FIFO (First In, First Out)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Round-robin scheduling',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Random access',
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
          'What happens when a function is called in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is pushed onto the call stack',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is pushed onto the callback queue',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is added to the job queue',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is executed immediately, bypassing the stack',
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
          'What will be the output of the following code?',
        ],
      ],
      code: `function first() {
  console.log('first');
}
function second() {
  first();
  console.log('second');
}
second();`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'first, second',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'second, first',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'first, first, second',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'second, first, second',
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
          'What will happen if a function calls itself recursively without an exit condition?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A stack overflow error will occur',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The function will execute indefinitely',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The browser will crash',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Nothing, the function will handle recursion internally',
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
          'Which of the following is true about the call stack in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It only tracks the current function calls in execution',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It handles asynchronous events and callbacks',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It manages memory allocation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It executes microtasks before macrotasks',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What does the call stack do when a function returns a value?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It pops the function off the stack',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It pushes the return value onto the stack',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It moves the function to the callback queue',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It restarts the function execution',
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
          'How does the call stack handle nested function calls?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It pushes each nested function call onto the stack',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It creates a separate stack for each function',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It executes them in parallel',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It iterates through them in-memory',
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
          'What is the maximum size of the call stack in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It depends on the implementation and available memory',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'There is no limit',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1024 function calls',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '64KB',
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
          'What will be the output of the following code?',
        ],
      ],
      code: `function a() {
  b();
  console.log('a');
}
function b() {
  console.log('b');
}
a();`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'b, a',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'a, b',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'b, b, a',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'a, a, b',
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
          // chatgpt says it is
          // https://chatgpt.com/c/b7c63420-542b-4f82-9de5-41b572c9df54
          'The terms "callback queue" and "task queue" are interchangeable',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'True',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'False',
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
          'The terms "callback queue" and "call stack" are interchangeable',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'True',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'False',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The terms "event loop" and "call stack" are interchangeable',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'True',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'False',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is Just-In-Time (JIT) compilation?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A technique where code is compiled during execution rather than before execution',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A method of compiling code ahead of time before execution or rendering',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A process of interpreting code without any compilation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A technique used only in statically-typed languages',
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
          'Which of the following is a key benefit of JIT compilation?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Improved runtime performance',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Simplified debugging process',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduced memory usage',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Faster initial startup time',
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
          'Which JavaScript engine is known for using JIT compilation?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'V8',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Nashorn',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Chakra',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'SpiderMonkey',
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
          'What is the primary difference between JIT compilation and AOT (Ahead-Of-Time) compilation?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JIT compilation happens during execution, while AOT compilation happens before execution',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AOT compilation is slower than JIT compilation, but is less prone to crashing',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JIT compilation is used only in interpreted languages while AOT compilation is only used in compiled languages',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AOT compilation does not produce machine code',
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
          'Which of the following is a disadvantage of JIT compilation?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Potential for increased startup time',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Lower runtime performance',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increased memory usage',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Difficulty in cross-platform compatibility',
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
          'What role does the JIT compiler play in the performance of modern JavaScript applications?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It optimizes code execution by compiling hot code paths at runtime',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It interprets JavaScript code line-by-line',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It only compiles code ahead of time before execution',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It handles garbage collection for JavaScript applications',
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
          'Which phase of execution does JIT compilation occur?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During the execution phase of the application',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Before the execution phase of the application',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During the initial loading of the application',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'After the application has finished executing',
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
          'How does JIT compilation improve performance over traditional interpretation?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By compiling frequently executed code to machine code',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By caching frequently interpreted bytecode for reuse',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By optimizing source code directly',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By reducing the need for memory allocation',
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
          'What is one of the challenges associated with JIT compilation?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Balancing the overhead of compilation with runtime performance gains',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Ensuring code compatibility across different browsers',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Writing platform-specific machine code',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Managing memory allocation and garbage collection',
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
          'What technique is often used by JIT compilers to identify hot code paths?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Profiling',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Syntax analysis',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Static code analysis',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Lexical analysis',
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
          'How does the event loop contribute to JavaScript’s non-blocking paradigm?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By allowing asynchronous operations to be executed without blocking the main thread',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By ensuring all tasks are executed synchronously',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By prioritizing long-running tasks over short tasks',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By directly handling memory management and garbage collection',
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
          'Which of the following best describes the role of the event loop in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It continuously checks the call stack and task queues to execute code, handle events, and process callbacks',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It compiles JavaScript code into machine code at runtime without blocking the main thread',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It manages synchronous function calls only and offloads computationally expensive operations to worker threads',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It executes code in parallel using multiple threads to provide a non-blocking interface',
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
          'How does the console output of following code demonstrate the non-blocking nature of JavaScript?',
        ],
      ],
      code: `console.log('start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

console.log('end');`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It demonstrates that the main thread is not blocked by the asynchronous setTimeout',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It demonstrates that the main thread waits for the setTimeout to complete',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It demonstrates that asynchronous tasks are executed immediately',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It demonstrates that tasks are executed in the order they are scheduled',
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
          'How does the event loop handle long-running operations to prevent blocking in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By offloading long-running operations to Web APIs or worker threads and processing the results asynchronously',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By pausing all other operations until the long-running task is completed',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By executing long-running tasks with higher priority',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By dividing the long-running task into smaller synchronous tasks',
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
          'Why is non-blocking I/O important in JavaScript, and how does the event loop facilitate this?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Non-blocking I/O allows the application to remain responsive, and the event loop facilitates this by handling I/O operations asynchronously',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Non-blocking I/O is not important in JavaScript as it is single-threaded',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Non-blocking I/O ensures that all operations are executed in parallel, and the event loop supports this by using multiple threads',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Non-blocking I/O is handled synchronously by the event loop to ensure quick execution',
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
          'Which of the following is NOT true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The call stack holds the currently executing script and function calls',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Microtasks are executed before any task from the task queue whenever the call stack is empty',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'When the call stack is empty, the event loop picks the first task from the task queue and pushes it onto the call stack for execution.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'I/O callbacks belong to the job queue',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    // {
    //   question: 'During the initial render of a web application',
    //   answers: [
    //     { id: '0', answer: 'Synchronous code (such as initial component renders in React) runs to build the initial UI.' },
    //     { id: '1', answer: 'Microtasks are executed before any task from the task queue whenever the call stack is empty' },
    //     { id: '2', answer: 'When the call stack is empty, the event loop picks the first task from the task queue and pushes it onto the call stack for execution.' },
    //     { id: '3', answer: 'I/O callbacks belong to the job queue' },
    //   ],
    //   correctAnswer: '3',
    // },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following is not a microtask?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A promise',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A callback following the keyword "await"',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'An I/O event listener callback',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which answer best represents the call stack for executing the following lines of code?',
        ],
      ],
      code: `function a() {
  b();
  console.log('a');
}
function b() {
  console.log('b');
}
a();`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<a /><b /><console.log /><console.log />',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<a /><b /><console.log /><b /><console.log /><b /><a />',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<a><b><console.log /><console.log /></b></a>',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<a><b><console.log /></b><console.log /></a>',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which answer best represents the call stack for executing the following lines of code?',
        ],
      ],
      code: `function x() {
  y();
  console.log('x');
}
function y() {
  z();
  console.log('y');
}
function z() {
  console.log('z');
}
x();`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<x /><y /><z /><console.log /><console.log /><console.log />',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<x><y><z><console.log /></z><console.log /></y></x>',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<x><y><z /></y><console.log /></x><console.log /></x>',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<x><y><z><console.log /></z><console.log /></y><console.log /></x>',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    }, {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which answer best represents the call stack for executing the following lines of code?',
        ],
      ],
      code: `function a() {
  c();
  console.log('a');
}
function b() {
  console.log('b');
}
function c() {
  b();
  console.log('c');
}
a();`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<a><c><b><console.log /></b><console.log /></c><console.log /></a>',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<a><b><c><console.log /></c><console.log /></b><console.log /></a>',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<a><c><console.log /></c><console.log /></a><console.log /></a>',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<a><b /><c /><console.log /><console.log /><console.log />',
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
          'Which answer best represents the call stack for executing the following lines of code?',
        ],
      ],
      code: `function start() {
  middle();
  console.log('start');
}
function middle() {
  end();
  console.log('middle');
}
function end() {
  console.log('end');
}
start();`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<start /><middle /><end /><console.log /><console.log /><console.log />',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<start><middle><end><console.log /></end><console.log /></middle><console.log /></start>',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<start><middle><end /></middle><console.log /></start><console.log /></start>',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<start><middle><end><console.log /><console.log /></end></middle></start>',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which answer best represents the call stack for executing the following lines of code?',
        ],
      ],
      code: `function first() {
  second();
  console.log('first');
}
function second() {
  third();
  console.log('second');
}
function third() {
  fourth();
  console.log('third');
}
function fourth() {
  console.log('fourth');
}
first();`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<first><second><third><fourth><console.log /></fourth><console.log /></third><console.log /></second><console.log /></first>',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<first><second /><third /><fourth /><console.log /><console.log /><console.log /><console.log />',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<first><second><third /><fourth /><console.log /><console.log /><console.log /><console.log />',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<first /><second /><third /><fourth /><console.log /><console.log /><console.log /><console.log />',
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
          'Which answer best represents the call stack for executing the following lines of code?',
        ],
      ],
      code: `function alpha() {
  beta();
  console.log('alpha');
}
function beta() {
  gamma();
  console.log('beta');
}
function gamma() {
  delta();
  console.log('gamma');
}
function delta() {
  console.log('delta');
}
alpha();`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<alpha><beta><gamma><delta><console.log /><console.log /><console.log /><console.log /><delta><gamma></beta></alpha>',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<alpha><beta><gamma><delta><console.log /></delta><console.log /></gamma><console.log /></beta><console.log /></alpha>',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<alpha><beta><gamma><delta><console.log /></delta></gamma></beta /><console.log /></alpha>',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '<alpha /><beta /><gamma /><delta /><console.log /><console.log /><console.log /><console.log />',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Given the following code, is `b` a closure of `a`?',
        ],
      ],
      code: `function a() {
  const x = 10;
  function b() {
    console.log(x);
  }
  return b;
}
const closure = a();
closure();`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Yes, `b` is a closure of `a` because it accesses `a`\'s variables',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'No, `b` is not a closure of `a` because it does not modify `x`',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Yes, `b` is a closure of `a` because it is defined inside `a`',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'No, `b` is not a closure of `a` because it is returned by `a`',
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
          'Which functions are closures in the following code?',
        ],
      ],
      code: `function outer() {
  const y = 20;
  function inner1() {
    console.log(y);
  }
  function inner2() {
    const z = 30;
    function inner3() {
      console.log(z);
    }
    return inner3;
  }
  return { inner1, inner2 };
}
const { inner1, inner2 } = outer();
const inner3 = inner2();
inner1();
inner3();`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'inner1 and inner3 are closures',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'inner1 is a closure, but inner3 is not',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'inner3 is a closure, but inner1 is not',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Neither inner1 nor inner3 are closures',
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
          'In the following code, does `d` form a closure?',
        ],
      ],
      code: `function a() {
  const val = 100;
  function b() {
    const innerVal = 200;
    function c() {
      console.log(val);
    }
    function d() {
      console.log(innerVal);
    }
    return { c, d };
  }
  return b();
}
const { c, d } = a();
c();
d();`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Yes, `d` forms a closure because it accesses `innerVal` from `b`\'s scope',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'No, `d` does not form a closure because it does not access `val` from `a`\'s scope',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Yes, `d` forms a closure because it is defined inside `b`',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'No, `d` does not form a closure because it does not return anything',
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
          'In the following code, which function(s) form a closure?',
        ],
      ],
      code: `function outerFunction() {
  const outerVariable = 'I am outside!';
  
  function innerFunction() {
    console.log(outerVariable);
  }
  
  return innerFunction;
}
const myFunction = outerFunction();
myFunction();`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'innerFunction forms a closure',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'outerFunction forms a closure',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both outerFunction and innerFunction form closures',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Neither outerFunction nor innerFunction form closures',
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
          'Given the following code, which function(s) are closures?',
        ],
      ],
      code: `function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both increment and decrement are closures',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Only increment is a closure',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Only decrement is a closure',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Neither increment nor decrement are closures',
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
          'If you wanted the program below to print 1, 2, 3 to the console, what is a possible solution?',
        ],
      ],
      code: `function funcOne() {
  console.log(1)
}

function funcTwo() {
  setTimeout(() => {
    console.log(2)
  }, 0)
}

function funcThree() {
  console.log(3)
}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Ensure the main thread is an asynchronous function',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Make funcOne a higher-order function, pass in funcTwo and call it at the end of the function body',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Make funcTwo a higher-order function, pass in funcThree and call it at the end of the setTimeout block',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Make funcThree a higher-order function, pass in both funcOne and funcThree and call them sequentially',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'In JavaScript, how can encapsulation be achieved?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using closures and modules to create private variables and methods',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using higher-order functions to set object properties',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By defining all of an object\'s methods and properties as private functions',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using private properties only',
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
          'How does encapsulation promote modularity in software design?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By keeping related data and methods together, encapsulation makes it easier to understand and manage individual modules of a program',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By allowing the use of multiple inheritance',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By enabling the use of global variables throughout the program',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By reducing the need for private methods and properties',
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
          'Why is encapsulation important in software development?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It helps to protect the internal state of an object from modifications',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It allows multiple classes to inherit properties from a parent class',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It enables directly setting an object\'s properties, such as assigning an array to a number field',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It details how a function returned by another function can have access to a nested function\'s private variables',
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
          'Which of the following best demonstrates encapsulation?',
        ],
      ],
      code: `class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  getName() {
    return this._name;
  }

  getAge() {
    return this._age;
  }

  setName(name) {
    this._name = name;
  }

  setAge(age) {
    if (age > 0) {
      this._age = age;
    }
  }
}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The use of private fields and methods to restrict direct access to the data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The ability to inherit methods from another class',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The ability to directly assign new values to an object\'s private variables',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The use of public fields and methods to restrict direct access to the data',
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
          'What is encapsulation in object-oriented programming?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Encapsulation is the concept of bundling data and methods that operate on that data within a single unit or class',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Encapsulation is the process of inheriting properties from another class where all methods remain private',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Encapsulation is the principle that classes should only declare private variables so as to not compromise validation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Encapsulation is a way to implement polymorphism',
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
          'What is a race condition?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A situation where the behavior of software depends on the timing or sequence of uncontrollable events',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A condition where two functions execute in parallel without dependencies',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A scenario where two promises output different results even when executed simultaneously',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A situation where multiple users access a resource simultaneously',
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
          'Which of the following best describes how to avoid race conditions?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using synchronization mechanisms like locks, semaphores, or atomic operations',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By chaining promises in a synchronous, sequential manner',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By running code sequentially without any concurrency',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using methods such as setTimeout in tandem with promises so as to create check-gaps',
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
          'Which scenario could potentially cause a race condition?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Two threads updating the same shared variable simultaneously',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Two independent processes running on different machines',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A single-threaded program executing sequentially',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A program reading a constant value multiple times',
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
          'What is the primary consequence of a race condition?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Unpredictable behavior and incorrect results due to timing issues',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A promise failing to resolve because of lack of memory allocation',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A program running out of memory',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A single-threaded application experiencing delays',
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
          'How can race conditions be detected during development?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using tools like thread sanitizers and race condition detectors',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By measuring the execution time of functions',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By monitoring memory usage',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By checking for syntax errors',
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
          'How can you create a higher-order function in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By writing a function that accepts another function as an argument or returns a function',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using global variables inside a function',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By writing a function that contains nested loops',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By creating an immediately invoked function expression (IIFE)',
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
          'Which of these is NOT a higher-order function?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'setTimeout()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'filter()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'map()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'alert()',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Why are higher-order functions useful?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They allow for more abstract and reusable code by handling functions as first-class citizens',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They execute faster than regular functions',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They can only be used in asynchronous programming',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They are required for error handling',
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
          'Which of the following is an example of a higher-order function?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Array.prototype.map()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'console.log()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Math.random()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'parseInt()',
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
          'What is a higher-order function in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that takes another function as an argument or returns a function as a result',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that returns a string',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that runs only once',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that is called immediately after it is defined',
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
          'What is the Shadow DOM in web development?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A separate, encapsulated DOM tree that is isolated from the main DOM',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A separate, encapsulated DOM tree for directly styling elements',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A separate, encapsulated DOM tree for imperatively styling elements',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A separate, encapsulated DOM tree for styling elements with JavaScript',
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
          'Which of the following best describes the purpose of the Shadow DOM?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To encapsulate styles and markup, preventing them from affecting the rest of the document',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To encapsulate styles and markup in compliance with object-oriented programming principles',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To encapsulate styles and markup, preventing developers from changing certain styling',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To encapsulate styles and markup and optimize the initial page rendering',
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
          'How do you create a Shadow DOM in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the attachShadow method on an element',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the createShadow method on an element',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the shadowRoot property directly',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the new Shadow() constructor',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    }, {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following can be encapsulated within the Shadow DOM?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Styles and markup',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Only markup',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Only JavaScript code',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Global variables',
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
          'What is the advantage of using the Shadow DOM?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It prevents style and markup conflicts by encapsulating them within a separate DOM tree',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It improves server-side rendering performance',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It allows JavaScript to run in a separate thread',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It enables the use of deprecated HTML tags',
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
          'What can cause long initial page loading (i.e. blocked UI)?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Long, complex style sheets',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Large images or text files in the bundle',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A slow initial data fetch from the server',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Code that attaches too many event listeners',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Where are you likely to encounter UI blocking?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using a Software as a Service (SaaS) application without a subscription',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Loading a page with many lazy loaded images',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Loading a chat page that fetches many messages and does not use lazy loading',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Browsing a web page with slow GET requests because the server must populate fetched object fields',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the correct inference from the line of code below?',
        ],
      ],
      code: 'Array.prototype.map()',
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"Map" is a method of "prototype"',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '"prototype" is a method of "Array"',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Arrays belong to a class of objects "prototype"',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All arrays have a method "map"',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is a correct inference from the snippet of code below?',
        ],
      ],
      code: `function a(param: string) {
  console.log('a');
  console.log(param);
}

function b(param: string) {
  console.log('b');
  console.log(param);
}

function c(param: string) {
  console.log('c');
  console.log(param);
}

function d(cb: (params: any[]) => void) {
  console.log('d');
  console.log(cb('d'));
}

function e(cb: (params: any[]) => void) {
  console.log('e');
  console.log(cb('e'));
}

function f(param: string) {
  console.log('f');
}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'There are closures defined in the snippet',
            ],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'There are higher-order functions defined in the snippet',
            ],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'There are violations of encapsulation defined in the snippet',
            ],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'There are examples of encapsulation defined in the snippet',
            ],
          ],
          order: 3,
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The browser\'s Web APIs',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'are leveraged by JavaScript to communicate with web workers',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'are leveraged by JavaScript to perform low-level operations',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'are leveraged by JavaScript to remain non-blocking',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'are leveraged by JavaScript to process macrotasks before microtasks',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is a Web API in the context of web development?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'An interface to interact with browser features and services',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A library of third-party services such as Google Maps API',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A resource for communicating with browser development teams',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A library for dealing with asynchronous operations only',
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
          'Which Web API would you use to manipulate the DOM?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Document Object Model (DOM) API',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Web Storage API',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Geolocation API',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Service Worker API',
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
          'What does the Geolocation API provide?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Access to the geographical location of the user',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Access to device sensors',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Access to offline storage',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Access to camera and microphone',
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
          'Which is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Web Workers run on background threads',
            ],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript is single-threaded',
            ],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript and Web Workers run on the same thread',
            ],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both 1 and 2',
            ],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following is a real application of the event "onmessage"?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'onmessage is used by Web Workers to communicate to the main thread',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'onmessage is used by the main thread to communicate to Web Workers',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'onmessage is used by developers to add accessibility to applications',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both 1 and 2',
            ],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following is an application of the method "postMessage"?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'postMessage is used by Web Workers to communicate to the main thread',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'postMessage is used by the main thread to communicate to Web Workers',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'postMessage is used by developers to add accessibility to applications',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both 1 and 2',
            ],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the primary purpose of a Web Worker in web development?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To run JavaScript code in the background without blocking the main thread',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To assist the main thread in running synchronous code',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To work with the event loop to run asynchronous code in the main thread in an optimized way',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To rerender the application when a promise is fulfilled',
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
          'How do Web Workers communicate with the main thread?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using message passing with postMessage and onmessage',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Through shared variables',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By manipulating the DOM directly',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using WebSockets',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    // {
    //   question: 'In which situation can a Web Worker serve as a solution?',
    //   answers: [
    //     { id: '0', answer: 'A computationally heavy page of a ' },
    //     { id: '1', answer: 'Through shared variables' },
    //     { id: '2', answer: 'By manipulating the DOM directly' },
    //     { id: '3', answer: 'Using WebSockets' },
    //   ],
    //   correctAnswer: '0',
    // },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following operations can a Web Worker perform?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Perform calculations and data processing without accessing the DOM',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Perform garbage collection',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Perform profiling to identify hot code paths to optimize JIT compilation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Perform promises and rerender the application if they resolve successfully',
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
          'What is a limitation of Web Workers?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They cannot directly access the DOM',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They cannot run in the background',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They cannot perform network requests',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They cannot use JavaScript',
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
          'What is a limitation of Web Workers?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They cannot directly access the DOM',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They cannot run in the background',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They cannot perform network requests',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They cannot use JavaScript',
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
          'How do you create a new Web Worker in JavaScript?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By instantiating a new Worker object with the script file',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By calling the createWorker function',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using the WebWorker constructor',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By defining a worker function',
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
          'Keyboard event objects in a web application are initially propagated by',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'the browser',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'the user\'s devices',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'event listeners',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Keyboard event objects in a web application are initially propagated by',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'the browser',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'the user\'s device',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'event listeners',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Click event objects in a web application are initially propagated by',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'the browser',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'the user\'s device',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'event listeners',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which is the most accurate assessment of the following JavaScript program?',
        ],
      ],
      code: `// main.js
const worker = new Worker('worker.js');

worker.postMessage('Hello, worker!');

worker.onmessage = function(event) {
  console.log('Received from worker:', event.data);
};

// worker.js
onmessage = function(event) {
  let result = event.data + ' - processed by worker';

  postMessage(result);
};`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Running the program will result in a completely synchronous runtime with no background thread work',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Running the program will result in a completely synchronous runtime with background thread work',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Running the program will result in a single-threaded runtime with no background thread work',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Running the program will result in a single-threaded runtime with asynchronous background thread work',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which ES6 method is used to copy all enumerable own properties from one or more source objects to a target object?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object.assign()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object.copy()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object.clone()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object.merge()',
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
          'What is a major advantage of using arrow functions in ES6?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They do not have their own this context',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They allow multiple inheritance',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They enable synchronous code execution',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They automatically bind to the global object',
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
          'How do you define a default parameter in an ES6 function?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'function foo(a = 10) {}',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'function foo(a : 10) {}',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'function foo(a => 10) {}',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'function foo(a = default) {}',
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
          'Which of the following keywords is used to declare a block-scoped variable in ES6?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'let',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'var',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'const',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'static',
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
          'Which of the following was NOT introduced in ES6?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Spread operator',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Recursion',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Symbols',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Template literals',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following is a new feature introduced in ES6?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Arrow functions',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Prototype-based inheritance',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Hoisting',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Global object',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    }, {
      question: [
        [
          QuizMarkdownType.TEXT,
          'How can you create a class in ES6?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the class keyword',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the constructor function',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the function keyword',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the object keyword',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer best characterizes the following code?'],
        [QuizMarkdownType.CODE, `const handleClickOnClear = () => {
  const resetObject = 
  Object.fromEntries(
    Object.keys(filters).map((key) => [key, null])
  );
  setFilters(resetObject);
};`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It is a dynamic solution to a problem'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It is a static solution to a problem'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It is a hacking solution to a problem'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It is an inefficient solution to a problem'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Your',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'package.json',
        ],
        [
          QuizMarkdownType.TEXT,
          'contains the line',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          '"type": "module"',
        ],
        [
          QuizMarkdownType.TEXT,
          '. Which of the following is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your project is using ES6 modules',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your project is using CommonJS modules',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your project is using obsolete syntax',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your project is using experimental syntax',
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
          'Your Jest config file',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'jest.config.mjs',
        ],
        [
          QuizMarkdownType.TEXT,
          'contains the import statement',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'import nextJest from "next/jest.js";',
        ],
        [
          QuizMarkdownType.TEXT,
          '. Which of the following is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using ES6 modules',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using CommonJS modules',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using obsolete syntax',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file contains statements that conflict with the file extension',
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
          'Your Jest config file',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'jest.config.js',
        ],
        [
          QuizMarkdownType.TEXT,
          'contains the import statement',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'const nextJest = require("next/jest");',
        ],
        [
          QuizMarkdownType.TEXT,
          '. Which of the following is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using CommonJS modules',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using ES6 modules',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using obsolete syntax',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file contains statements that conflict with the file extension',
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
          'Your Jest config file',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'jest.config.js',
        ],
        [
          QuizMarkdownType.TEXT,
          'contains the export statement',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'module.exports = {...};',
        ],
        [
          QuizMarkdownType.TEXT,
          '. Which of the following is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using CommonJS modules, and they do not conflict with the file extension',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using ES6 modules, and they do not conflict with the file extension',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using CommonJS modules, but they conflict with the file extension',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using ES6 modules, but they conflict with the file extension',
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
          'Your Jest config file',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'jest.config.cjs',
        ],
        [
          QuizMarkdownType.TEXT,
          'contains the export statement',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'module.exports = {...};',
        ],
        [
          QuizMarkdownType.TEXT,
          '. Which of the following is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using CommonJS modules, and they do not conflict with the file extension',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using ES6 modules, and they do not conflict with the file extension',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using CommonJS modules, but they conflict with the file extension',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using ES6 modules, but they conflict with the file extension',
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
          'Your Jest config file',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'jest.config.mjs',
        ],
        [
          QuizMarkdownType.TEXT,
          'contains the export statement',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'module.exports = {...};',
        ],
        [
          QuizMarkdownType.TEXT,
          '. Which of the following is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using ES6 modules, but they conflict with the file extension',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using ES6 modules, and they do not conflict with the file extension',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using CommonJS modules, but they conflict with the file extension',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using CommonJS modules, and they do not conflict with the file extension',
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
          'Your Jest config file',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'jest.config.js',
        ],
        [
          QuizMarkdownType.TEXT,
          'contains the export statement',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'export default {...};',
        ],
        [
          QuizMarkdownType.TEXT,
          '. Which of the following is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using ES6 modules, and they do not conflict with the file extension',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using CommonJS modules, and they do not conflict with the file extension',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using CommonJS modules, but they conflict with the file extension',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using ES6 modules, but they conflict with the file extension',
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
          'Your Jest config file',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'jest.config.cjs',
        ],
        [
          QuizMarkdownType.TEXT,
          'contains the export statement',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'export default {...};',
        ],
        [
          QuizMarkdownType.TEXT,
          '. Which of the following is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using ES6 modules, but they conflict with the file extension',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using CommonJS modules, and they do not conflict with the file extension',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using CommonJS modules, but they conflict with the file extension',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your file is using ES6 modules, and they do not conflict with the file extension',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
