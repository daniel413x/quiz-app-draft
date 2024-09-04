/* eslint-disable linebreak-style */
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Module VII',
  slug: 'module-vii',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'In terms of checking code quality, user acceptance testing would fall under a ________ approach.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Manual']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Automated']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Hybrid']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'None of the above']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In terms of checking code quality, exploratory testing would fall under a ________ approach.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Manual']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Automated']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Hybrid']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'None of the above']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT an advantage of automated code quality processes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Flexibility']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Consistency']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Fast']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Easier to run on large codebases']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is true of the following comparison between manual and automated code quality processes?'],
        [QuizMarkdownType.TABLE, {
          name: 'Comparison of Manual and Automated Code Quality Processes',
          data: [
            {
              _tableDataColId: '1', process_type: 'Manual', speed: 'Slow', scope: 'Context-specific', human_involvement: 'High',
            },
            {
              _tableDataColId: '2', process_type: 'Automated', speed: 'Fast', scope: 'Broad', human_involvement: 'Low',
            },
          ],
          cols: [
            { accessorKey: 'process_type', header: 'PROCESS TYPE' },
            { accessorKey: 'speed', header: 'SPEED' },
            { accessorKey: 'scope', header: 'SCOPE' },
            { accessorKey: 'human_involvement', header: 'HUMAN INVOLVEMENT' },
          ],
        }],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Automated processes are always faster but may miss context-specific issues']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Manual processes are faster but less accurate']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Automated processes are slower but more thorough']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Manual processes involve less human oversight']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which process is more effective at identifying code readability issues?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Automated code quality tools']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Manual code reviews']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Unit tests']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'CI/CD pipelines']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following tasks is better suited for automated code quality tools?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Detecting logical fallacies']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Ensuring code style consistency across a project']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Validating complex business logic']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Providing insights into the intent of the code']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a limitation of automated code quality tools?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They can introduce bias into the review process']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They may not fully understand the business context of the code']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They require manual input at every stage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They cannot detect syntax errors']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do automated code quality tools typically identify potential issues?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By analyzing the runtime behavior of the application']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By using predefined rules and patterns to check for issues in the code']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By relying on developer input for detecting issues']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By running the code through different environments manually']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which code quality process is better suited for identifying business logic errors?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Automated testing']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Manual code reviews']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Code linters']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Continuous integration tools']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a key benefit of combining both manual and automated code quality processes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It reduces development time significantly']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It leverages the strengths of both human intuition and automated precision']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It eliminates the need for continuous integration']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It makes code reviews unnecessary']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a disadvantage of manual code review processes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It is susceptible to human error and bias']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It provides better context awareness of the code']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It is typically faster than automated analysis']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It requires no understanding of the codebase']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a primary advantage of automated code quality tools over manual reviews?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They do not require any configuration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They can detect more complex logical errors']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They are faster and can be integrated into CI/CD pipelines']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They are better at detecting semantic issues in code']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes manual code reviews?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A static code analysis process performed by automated tools']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A process where developers review each other’s code to identify issues']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A method for automatically refactoring code']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A method of running code in different environments manually']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is true of the following SonarQube scan results?'],
        [QuizMarkdownType.TABLE, {
          name: 'SonarQube Results',
          data: [
            {
              _tableDataColId: '1', issue_type: 'Bug', severity: 'Critical', lines_affected: 12,
            },
            {
              _tableDataColId: '2', issue_type: 'Code Smell', severity: 'Minor', lines_affected: 5,
            },
            {
              _tableDataColId: '3', issue_type: 'Vulnerability', severity: 'High', lines_affected: 20,
            },
          ],
          cols: [
            { accessorKey: 'issue_type', header: 'ISSUE TYPE' },
            { accessorKey: 'severity', header: 'SEVERITY' },
            { accessorKey: 'lines_affected', header: 'LINES AFFECTED' },
          ],
        }],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The scan found 3 issues']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Only one critical issue was found']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'All issues were of high severity']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The scan did not find any vulnerabilities']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following SonarQube metrics indicates how maintainable a codebase is?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reliability']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Maintainability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Security Hotspots']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Coverage']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How are issues categorized in SonarQube?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Bugs, Vulnerabilities, Code Smells, and Security Hotspots']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Errors, Warnings, Criticals, and Suggestions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Informational, Warnings, and Errors']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Failures, Warnings, and Suggestions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which SonarQube feature allows users to track long-term trends of code quality?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Issues']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Dashboards']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Timeline']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Measures']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does SonarQube help improve security in codebases?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By blocking deployments']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By identifying security vulnerabilities and hotspots']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By reducing code complexity']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By enforcing coding standards']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which SonarQube quality gate status indicates that the project has met the configured quality standards?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Failed']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Passed']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Warning']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Critical']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In SonarQube, what does the term \'Code Smell\' refer to?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A potential bug in the code']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A vulnerability in the code']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Poor design or code that needs refactoring']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'An error in logic']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following SonarQube metrics assesses the technical debt in a project?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Code Smells']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reliability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Security Hotspots']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Maintainability']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is SonarQube primarily used for?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Tracking code changes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Managing code repositories']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Performing static code analysis']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Monitoring code execution']] },
      ],
      correctAnswer: '2',
    },

  ],
} as QuizDataObject;
