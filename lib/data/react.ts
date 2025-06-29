import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'React',
  slug: 'react',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is true of the increment function in the component below?',
        ],
      ],
      code: `function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is added to the job queue when called',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is a microtask',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It causes a synchronous state update',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It causes an asynchronous state update',
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
          'Which of the following hooks is used to access the value of a context in a functional component?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'useContext',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'useReducer',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'useEffect',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'useState',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which algorithm is used by React to efficiently update the DOM?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Diffing Algorithm']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Binary Search']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Sorting Algorithm']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Pathfinding Algorithm']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which algorithm is commonly used to control the rate of input validation in React forms?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Debouncing']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Sorting']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Pathfinding']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Memoization']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which algorithm is used to traverse hierarchical data structures in React?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Tree Traversal']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Sorting']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Binary Search']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Memoization']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of easing functions in React animations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To define the rate of change of a parameter over time and create smooth transitions.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To fetch data from APIs.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To validate form inputs.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To manage state.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JavaScript object best implements the concept of a HashMap?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The'], [QuizMarkdownType.INLINE_CODE, 'Map'], [QuizMarkdownType.TEXT, 'interface']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Any JavaScript object']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The'], [QuizMarkdownType.INLINE_CODE, 'Map'], [QuizMarkdownType.TEXT, 'function']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The'], [QuizMarkdownType.INLINE_CODE, 'Array'], [QuizMarkdownType.TEXT, 'interface']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'JavaScript is a ______ typed language'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dynamically']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Completely']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Statically']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Strictly']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JavaScript library is specifically used for building games and multimedia applications?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Phaser']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Three.js']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'React']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Vue.js']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a static site generator built with React?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Gatsby']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Next.js']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Express']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Angular']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of Babel in web development?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To transpile modern JavaScript code to a version compatible with older browsers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To minify JavaScript files for faster loading and JIT hot paths profiling']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To compile TypeScript code to JavaScript']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To lint JavaScript code and enforce coding standards']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which configuration file is commonly used to customize Babel\'s behavior?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '.babelrc']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'babel.config.js']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '.babelconfig']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'babelrc.config']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Babel package is responsible for transforming ES6+ syntax into a backward-compatible version of JavaScript?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '@babel/preset-env']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '@babel/core']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '@babel/plugin-transform-runtime']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '@babel/preset-react']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the'],
        [QuizMarkdownType.INLINE_CODE, '@babel/preset-react'],
        [QuizMarkdownType.TEXT, 'package?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To transpile React\'s JSX syntax']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To add polyfills for older browsers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To minify React code']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To bundle JavaScript files']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the Babel plugin'],
        [QuizMarkdownType.INLINE_CODE, '@babel/plugin-transform-runtime'],
        [QuizMarkdownType.TEXT, 'do?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It optimizes the code by reusing Babel\'s helper functions to avoid code duplication']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It enables support for TypeScript by transpiling TypeScript code to JavaScript code compatible with older browsers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It transforms ES6 modules to CommonJS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It adds support for async/await syntax']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements is true about Babel?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Babel can be configured to target specific browsers and environments']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Babel automatically minifies code during transpilation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Babel is only used for React, Angular and Vue applications']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Babel follows a transpilation process similar to that of JIT compilation\'s profiling']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following Babel presets would you use to transpile code that includes experimental JavaScript features?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '@babel/preset-env']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '@babel/preset-stage-0']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '@babel/preset-react']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '@babel/preset-typescript']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is responsible for transpiling JSX into JavaScript?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Babel using the @babel/preset-react preset']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Browser engines such as Chrome\'s V8']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'ReactDOM.render']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'JSX is natively understood by all browsers']], order: 3 },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'During the build phase of a React application or'],
        [QuizMarkdownType.INLINE_CODE, 'npm run build'],
        [QuizMarkdownType.TEXT, ', what technology is responsible for bundling?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create React App']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Webpack']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'ReactDOM.render']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Babel']], order: 3 },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT part of the Webpack bundling process when running'],
        [QuizMarkdownType.INLINE_CODE, 'npm run build'],
        [QuizMarkdownType.TEXT, 'in a React project?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linting and code formatting']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Outputting to a folder'], [QuizMarkdownType.INLINE_CODE, 'build']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Injecting script tags into'], [QuizMarkdownType.INLINE_CODE, 'index.html']] },
        // actually true if you ctrl f + webpack in the chat
        // https://chatgpt.com/c/b7c63420-542b-4f82-9de5-41b572c9df54
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transpiling JSX to JavaScript via Babel']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The stages of processing React source code into the HTML used by the end user goes roughly'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Babel -> Webpack -> ReactDOM.render']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Webpack -> Babel -> ReactDOM.render']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'ReactDOM.render -> Webpack -> Babel']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'React source code is natively understood by all browsers']], order: 3 },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which tool is commonly used to bundle the JavaScript, CSS, and other assets in a React application and inject the necessary script tags into the HTML file?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Webpack']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Babel']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'ESLint']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'npm']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a React project, what command is used to generate an optimized build of the application, including the final HTML, CSS, and JavaScript files?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'npm run build']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'npm start']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'npm run serve']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'npm install']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the role of ReactDOM in a typical client-side rendered React application?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To render transpiled JSX at the root element of the HTML template']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To render transpiled JSX at the root element of the browser canvas']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To render transpiled JSX at the root element of SSR applications exclusively']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To render transpiled JSX at the root element of CSR applications exclusively']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a correct usage of'],
        [QuizMarkdownType.INLINE_CODE, 'useLayoutEffect'],
        [QuizMarkdownType.TEXT, 'in a React component?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.CODE, `
import React, { useLayoutEffect, useState } from 'react';

function MyComponent() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>Width: {size.width}, Height: {size.height}</div>;
}
  `]],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.CODE, `
import React, { useLayoutEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useLayoutEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return <div>{data}</div>;
}
  `]],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.CODE, `
import React, { useLayoutEffect } from 'react';

function MyComponent() {
  useLayoutEffect(() => {
    document.title = 'New Title';
  });

  return <div>Check the document title</div>;
}
  `]],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.CODE, `
import React, { useLayoutEffect, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <div>Count: {count}</div>;
}
  `]],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What can happen if you perform DOM measurements in'],
        [QuizMarkdownType.INLINE_CODE, 'useEffect'],
        [QuizMarkdownType.TEXT, 'instead of'],
        [QuizMarkdownType.INLINE_CODE, 'useLayoutEffect'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The measurements might be incorrect.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The component will not render correctly.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The measurements will be more accurate.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The measurements will be undefined.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which phase of the React component lifecycle does'],
        [QuizMarkdownType.INLINE_CODE, 'useLayoutEffect'],
        [QuizMarkdownType.TEXT, 'run?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'After the DOM has been updated but before the browser has painted.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Before the DOM is updated but after the first render.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'After the browser has painted and before the component\'s side effects.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'After the DOM has been updated and after the browser has painted.']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'In traditional HTML, you write __________, while in React, you write __________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'JavaScript inside HTML, HTML inside JavaScript']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'HTML inside HTML, JavaScript inside JavaScript']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'HTML inside JavaScript, JavaScript inside HTML']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'JavaScript inside scripts, scripts inside HTML']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main advantage of using the'],
        [QuizMarkdownType.INLINE_CODE, 'useEffect'],
        [QuizMarkdownType.TEXT, 'hook in a React application over using an event listener listening to the'],
        [QuizMarkdownType.INLINE_CODE, 'DOMContentLoaded'],
        [QuizMarkdownType.TEXT, 'event?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'useEffect is integrated with the React component lifecycle.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'useEffect executes before the DOM is fully loaded.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'useEffect can be used to listen to global events.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'useEffect already uses an event listener listening to \'DOMContentLoaded\'.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If both '],
        [QuizMarkdownType.INLINE_CODE, 'DOMContentLoaded'],
        [QuizMarkdownType.TEXT, ' and '],
        [QuizMarkdownType.INLINE_CODE, 'useEffect'],
        [QuizMarkdownType.TEXT, ' are used in a React app\'s top-level component, which one executes first?'],
        // DOMContentLoaded executes first because it fires once the initial HTML document is fully loaded and parsed, before React components finish rendering.
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The DOMContentLoaded event listener']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The useEffect hook']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Both execute simultaneously.']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it generally not recommended to use the '],
        [QuizMarkdownType.INLINE_CODE, 'DOMContentLoaded'],
        [QuizMarkdownType.TEXT, ' event listener in a React application to fetch data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Because React provides the '], [QuizMarkdownType.INLINE_CODE, 'useEffect'], [QuizMarkdownType.TEXT, ' hook for handling side effects.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Because the '], [QuizMarkdownType.INLINE_CODE, 'DOMContentLoaded'], [QuizMarkdownType.TEXT, ' event does not work in React applications.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Because it is not possible to fetch data using '], [QuizMarkdownType.INLINE_CODE, 'DOMContentLoaded'], [QuizMarkdownType.TEXT, '.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Because it will always execute before the '], [QuizMarkdownType.INLINE_CODE, 'useEffect'], [QuizMarkdownType.TEXT, ' hook.']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'A useEffect hook defined with an empty dependency array in the top-level React component is most functionally similar to which of the following event listeners in a non-React context?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'window.addEventListener("load", function() {...})']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'window.addEventListener("DOMContentLoaded", function() {...})']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'window.addEventListener("ready", function() {...})']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'window.addEventListener("beforeunload", function() {...})']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'In which of the following scenarios can',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'React.useImperativeHandle',
        ],
        [
          QuizMarkdownType.TEXT,
          'be useful?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You must imperatively modify the Shadow DOM',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You must imperatively modify props from a parent component',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You need to pass down multiple refs to a child component',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You need a hook that is easy to mock in Jest',
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
          'In which of the following scenarios can',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'React.useImperativeHandle',
        ],
        [
          QuizMarkdownType.TEXT,
          'be useful?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You must imperatively modify the Shadow DOM',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You must imperatively modify props from a parent component',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You need to pass down multiple refs to a child component',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You need a hook that is easy to mock in Jest',
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
          'What is the primary purpose of React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To build user interfaces',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To manage server-side operations',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To handle database connections',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To create mobile applications',
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
          'What is a React component?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A JavaScript function or class that optionally accepts inputs and returns a React element',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that directly manipulates the DOM',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A method to handle state management',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A styling library for React applications',
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
          'What is the use of the "useState" hook in React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To add state to functional components',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To manage side effects in functional components',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To replace class components',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To handle event listeners',
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
          'Which of the following is true about props in React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Props are read-only',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Props are used to manage state',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Props cannot be passed to class components',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Props are mutable',
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
          'What is the purpose of the "useEffect" hook in React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To perform side effects in functional components',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To handle form submissions',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To manage component state',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To create a new context',
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
      code: `function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A button that increments the count each time it is clicked',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A button that does nothing',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'An error, because setCount is not a function',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A paragraph that displays the count but no button',
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
          'What is the virtual DOM in React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'An in-memory representation of the real DOM elements generated by React components',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The original DOM',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A way to directly manipulate the real DOM',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A special DOM for managing forms',
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
          'How do you create a context in React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using React.createContext()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using React.useContext()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using React.createContextProvider()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using React.createProvider()',
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
          'What is the purpose of "keys" in React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To help React identify which items have changed, are added, or are removed',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To uniquely identify components',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To bind event handlers to components',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To handle form input',
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
          'What is the Virtual DOM in the context of JavaScript libraries like React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A lightweight copy of the actual DOM that allows for efficient updates and rendering',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A separate HTML document that mirrors the actual DOM',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A part of the browser\'s rendering engine',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A debugging tool for developers',
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
          'How does the Virtual DOM improve performance?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By minimizing direct manipulations to the actual DOM, thus reducing costly DOM operations',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using Web Workers to offload calculations to background threads',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By leveraging client-side rendering, thus maximizing server-side performance',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By eliminating the need for server-side rendering and relying on partial background thread work',
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
          'What will be the output of the following code when using React and the Virtual DOM?',
        ],
      ],
      code: `class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The count will increase by 1 every time the button is clicked, updating the displayed number',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The count will remain 0 even when the button is clicked',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The count will increase by 2 every time the button is clicked',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The button will not respond to clicks',
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
          'Which of the following best describes how the Virtual DOM updates the actual DOM?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It calculates the difference between the new Virtual DOM and the previous one, then updates only the changed parts in the actual DOM',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It calculates the difference between the new Virtual DOM and the Shadow DOM, then updates only the changed parts in the actual DOM',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It completely replaces the actual DOM with the new Virtual DOM',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It does not update the actual DOM directly but sends update instructions to the server',
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
          'What problem does the Virtual DOM help solve in web development?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It helps solve performance issues by reducing the number of direct DOM manipulations',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It eliminates the need for responsive design',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It allows for multi-threaded JavaScript execution',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It ensures backward compatibility with older browsers',
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
          'Which of the following is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'There is no need to call "call," "apply," or "bind" on functions that do not use "this"',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'In React, keys are used for debugging purposes',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The task queue is executed before the job queue',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'React guarantees backwards compatibility with older browsers',
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
          'Which of the following is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'There is no need to call "call," "apply," or "bind" on functions that use "this"',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Calling a function creates a new stack frame for that function\'s use',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The macrotask queue has priority over the microtask queue',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'React guarantees backward compatibility with older browsers',
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
          'What will be the output of the code below?',
        ],
      ],
      code: `var promise = new Promise((resolve, reject) => {
    resolve('promise win')
})
promise.then((result) => {
    console.log(result)
})
setTimeout(() => {
    console.log('setTimeout win')
}, 0)`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'setTimeout win, promise win',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Promise<pending>, setTimeout win',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'promise win, setTimeout win',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'setTimeout win, Promise<pending>',
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
          'A Promise is a',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Macrotask',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Synchronous job',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Microtask',
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
          'setTimeout is a',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Macrotask',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Synchronous job',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Microtask',
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
          'What is the Virtual DOM in the context of JavaScript libraries like React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A lightweight copy of the actual DOM that allows for efficient updates and rendering',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A separate HTML document that mirrors the actual DOM but does not attach event listeners',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A part of the browser\'s rendering engine together with the Shadow DOM',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A debugging tool for developers that is accessed in the browser developer tools',
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
          'How does the Virtual DOM improve performance?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By minimizing direct manipulations to the actual DOM, thus reducing the number of costly DOM operations',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using Web Workers to offload calculations to background threads',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By pre-rendering all possible states of the UI',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By eliminating the need for server-side rendering',
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
          'What will be the output of the following code when using React and the Virtual DOM?',
        ],
      ],
      code: `class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The count will increase by 1 every time the button is clicked, updating the displayed number',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The count will remain 0 even when the button is clicked',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The count will increase by 2 every time the button is clicked',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The button will not respond to clicks',
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
          'Which of the following best describes how the Virtual DOM updates the actual DOM?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It calculates the difference between the new Virtual DOM and the previous one, then updates only the changed parts in the actual DOM',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It completely replaces the actual DOM with the new Virtual DOM',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It updates the actual DOM only when the browser is idle',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It does not update the actual DOM directly but sends update instructions to the server',
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
          'What problem does the Virtual DOM help solve in web development?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It helps solve performance issues by reducing the number of direct DOM manipulations',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It helps solve the problem of mutation by providing an environment where state can be mutated',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It allows for multi-threaded JavaScript execution',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It ensures backward compatibility with older browsers',
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
          'What is true of how React leverages state?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'State persists through components being unmounted from the DOM',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'State does not persist through rerenders',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'When a component\'s state or props change, React triggers a rerender of that component',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'When the DOM is mutated directly, React uses the virtual DOM to rerender affected components',
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
          'What triggers a rerender in a React component?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Changes in state or props',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Changes in the URL',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Page refresh',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Adding event listeners',
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
          'Which React hook can be used to prevent unnecessary rerenders of a functional component?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'React.memo',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'useCallback',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'useState',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'useEffect',
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
          'How does React handle multiple state updates in a single event handler to optimize rerenders?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'React batches multiple state updates into a single rerender',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'React processes each state update sequentially with separate rerenders',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'React ignores multiple state updates',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'React defers state updates until the component unmounts',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.INLINE_CODE,
          'useMemo',
        ],
        [
          QuizMarkdownType.TEXT,
          'is used to memoize the results of a ________, while',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'useCallback',
        ],
        [
          QuizMarkdownType.TEXT,
          'is used to memoize the results of a ________',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'computation, callback',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'callback, computation',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'computation, callback or computation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'computation or callback, callback or computation',
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
          'What is the purpose of the React hook `useMemo`?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To memoize the result of a calculation and prevent recalculations on rerenders',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To handle side effects in functional components',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To manage component state',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To update the DOM directly',
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
          'Which lifecycle method in class components is similar to `useEffect` in functional components for handling side effects?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'componentDidMount',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'shouldComponentUpdate',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'componentWillUnmount',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'getDerivedStateFromProps',
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
          'What is JSX in React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A syntax extension that allows writing HTML directly within JavaScript',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function to make AJAX requests',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A syntax extention that adds the attributes "key" and "className"',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A syntax extention that enables higher-order functions to act as HTML',
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
          'Which hook is used to add state to a functional component in React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'useState',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'useEffect',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'useContext',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'useReducer',
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
          'What does the useEffect hook do in a React functional component?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It performs side effects in the component, such as fetching data or subscribing to events',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It manages the state of the component',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It provides a context for the component',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It performs side effects in the component, such as performing state mutation',
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
          'Which of the following is a core principle of React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Component-based architecture',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object-oriented programming',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Server-side rendering only',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Global state management',
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
          'What does the "Virtual DOM" in React do?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is an in-memory representation of the real DOM that allows React to efficiently update the UI',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is an in-memory representation of the shadow DOM that allows React to efficiently update the UI',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is a new standard developed by Facebook for DOM manipulation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is a library for accessing the DOM directly',
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
          'Which of the following statements is true about props in React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Props are used to pass data from parent to child components',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Props are used to manage component state',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Props can be modified directly within a component',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Props are used to manage global state',
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
          'Which of the following is a major feature of React?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Mobile-first architectural philosophy',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The virtual DOM as a means of dealing with state mutation',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Writing HTML directly in JavaScript',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Combining JIT and AOT compiling techiques',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement regarding React strict mode is accurate?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Strict mode is automatically disabled in production'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Strict mode can optimize performance in production'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Strict mode should be explicitly disabled for production'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Strict mode is enabled by default'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main purpose of React Strict Mode?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To enable backward compatibility'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To enforce stricter type checking'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To highlight potential problems in an application'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To enable server-side rendering'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which lifecycle method is intentionally invoked twice in Strict Mode to help detect side effects?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'componentDidMount'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'componentWillUnmount'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'useEffect'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getDerivedStateFromProps'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following features is used by React to improve rendering performance?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'DOM batching'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Shadow DOM'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Virtual DOM'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Reconciler DOM'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does React update the DOM using the Virtual DOM?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It compares the new Virtual DOM with the previous one'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It replaces the entire real DOM with the modified Virtual DOM'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It directly modifies the real DOM with elements of the new Virtual DOM'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It updates the CSS and JS properties of changed elements on the Virtual DOM'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which algorithm does React use to compare Virtual DOM trees?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'diffing algorithm'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'binary tree search'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'hash map traversal'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'fibonacci recursion'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the Virtual DOM in React?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A copy of the browser DOM stored in memory'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The real DOM rendered in a sandboxed environment'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A third-party library integrated into React'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'An HTML file used during rendering'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    // https://chatgpt.com/c/681d2c65-d57c-8005-b47a-2664c9dc2bca
    {
      question: [
        [QuizMarkdownType.TEXT, 'In React, if a parent component returns a different tree structure, how does reconciliation behave?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It performs a deep equality check on every node'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It recreates only the changed leaf nodes'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It destroys and rebuilds subtrees where structure changes'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It caches the tree and ignores the changes'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An array declared as an array literal would be'],
        [QuizMarkdownType.INLINE_CODE, '          '],
        [QuizMarkdownType.TEXT, '.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'const bytes = [80, 65, 78];'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'const bytes = new Array(80, 65, 78);'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'const bytes = [80, 65, 78].map((b) => b);'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'const str = "80 65 78"; const bytes = str.split(" ");'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following React component will render as intended.'],
        [QuizMarkdownType.CODE, `import React from 'react';

const ButtonList = () => {
  const items = [
    { id: 1, label: 'First' },
    { id: 2, label: 'Second' },
    { id: 3, label: 'Third' },
  ];
  return (
    <div>
      {items.map((item) => (
        <button key={item.id} onClick={() => null}>
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following React component will render as intended.'],
        [QuizMarkdownType.CODE, `import React from 'react';

const ButtonList = () => {
  const items = [
    { id: 1, label: 'First' },
    { id: 2, label: 'Second' },
    { id: 3, label: 'Third' },
  ];
  return (
    <div>
      {items.map((item) => {
        <button key={item.id} onClick={() => null}>
          {item.label}
        </button>
      })}
    </div>
  );
};

export default ButtonList;`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which of the following scenarios is'],
        [QuizMarkdownType.INLINE_CODE, 'useInfiniteQuery'],
        [QuizMarkdownType.TEXT, 'from'],
        [QuizMarkdownType.INLINE_CODE, '@tanstack/react-query'],
        [QuizMarkdownType.TEXT, 'most suited?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'In a list of objects continuously fetched via scrolling'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'In a page for a single object'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In a list of objects that is static and unlikely to change'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'In any query that does not require caching'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have a components folder'],
        [QuizMarkdownType.INLINE_CODE, 'views'],
        [QuizMarkdownType.TEXT, '. What kind of components does this folder hold?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Presentational components'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Behavior-focused components'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Layout components'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Provider components'],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
