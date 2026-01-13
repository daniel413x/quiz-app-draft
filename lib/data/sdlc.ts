import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Software Development Lifecycle (SDLC)',
  slug: 'sdlc',
  category: {
    slug: 'software-development',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'In BDD, which phase of development is most likely to occur last?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Software development']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Determining requirements']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Writing tests']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Test planning']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In BDD, which phase of development is most likely to occur first?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Determining requirements']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Writing tests']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Software development']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Test planning']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the first phase of the Software Development Life Cycle (SDLC)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Design']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Testing']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Requirement analysis']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deployment']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Agile methodology, work is typically divided into time-boxed iterations called'],
        [QuizMarkdownType.INLINE_CODE, 'what?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Tasks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Cycles']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Milestones']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Sprints']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Test-Driven Development (TDD), what is written first?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The implementation code']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The user manual']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The test cases']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The UML diagram']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes Behavior-Driven Development (BDD)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Tests are written in plain language based on expected behavior']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Focuses on backend service testing only']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Only tests user interfaces']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Uses mathematical modeling for behavior']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Agile development, what is a "user story"?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A high-level overview of project milestones']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A detailed technical specification']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A description of a feature from the user’s perspective']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A bug report']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the “Definition of Done” refer to in Agile?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The end date of the project as specified at the project\'s outset']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The coding phase is complete at the end of the iteration']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A shared understanding of what it means for a task to be complete']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'When the client signs off on the finished product']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In TDD, what is the typical cycle followed by developers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Test → Refactor → Code']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Code → Refactor → Test']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Write failing test → Write code → Refactor']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Write code → Deploy → Write test']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Agile ceremony is focused on reviewing what went well and what could be improved?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Sprint Planning']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Daily Stand-up']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Sprint Retrospective']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Backlog Grooming']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which document outlines how a system should behave from a user’s point of view?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Test Plan']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Technical Specification']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'User Requirements Document (URD)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Risk Assessment']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main goal of the verification phase in SDLC?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To ensure the product meets business needs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To check if the software was built correctly']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To validate the test cases']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To install the software on client machines']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main goal of the validation phase in SDLC?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To ensure the product meets business needs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To check if the software was built correctly']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To validate the test cases']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To install the software on client machines']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main goal of the validation phase in SDLC?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To ensure the product meets business needs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To check if the software was built correctly']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To validate the test cases']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To install the software on client machines']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which SDLC model allows overlapping of phases for faster delivery?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Waterfall Model']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'V-Model']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Agile Model']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Spiral Model']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In BDD, test scenarios are usually written in which format?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'GIVEN-WHEN-THEN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IF-ELSE']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'TRY-CATCH']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'BEFORE-AFTER']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a common artifact in Agile used for prioritizing work?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Roadmap']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Product Backlog']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deployment Pipeline']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'User Manual']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which role in Scrum is responsible for maximizing the value of the product?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Scrum Master']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Development Team']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Product Owner']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Stakeholder']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which role best serves as a liaison between the business stakeholders and the development team?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Business Analyst']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Senior Developer']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Product Owner']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Project Lead']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Under most continuous delivery models, deployments to production are _______ when the new build passes an automated testing pipeline, and under most continuous deployment models, deployments to production are _______ when the new build passes an automated testing pipeline.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'manually approved, automatic']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'automatic, manually approved']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'automatic, automatic']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'also tested, manually approved']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Jira, you must create work for a new project and select a work type that represents an abstract view of the software you are creating for your client. The most appropriate type to choose is ____'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Epic']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Story']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Subtask']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Task']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Jira, you have a project named GEOPS and must create work for a new feature. What is the appropriate course of action?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Click "+Create." In the Project dropdown, select "GEOPS." In the "Work type" dropdown, select "task."']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Click "+Create." In the "Work type" dropdown, select "task." Reference the GEOPS project ID in the form.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Click "+Create." In the Project dropdown, select "GEOPS." In the "Work type" dropdown, select "story."']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Click "+Create." In the "Work type" dropdown, select "story." Reference the GEOPS project ID in the form.']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
