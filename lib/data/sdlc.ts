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
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary use of Jira in software development teams?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Source control']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Bug and issue tracking']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Automated testing']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Code deployment']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Jira, which of the following is NOT a standard issue type?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Task']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Story']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deployment']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Bug']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What Jira feature allows teams to visualize work and manage it in columns like To Do, In Progress, and Done?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Filters']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Workflows']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Kanban board']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dashboards']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Jira Scrum projects, what is the purpose of a "Sprint"?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To resolve only bugs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To manage team members']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To complete a fixed set of work in a time-boxed period']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To write user stories']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which field in Jira typically describes the business value or technical need behind a piece of work?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Resolution']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Priority']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Summary']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Description']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a typical Jira workflow, which of the following is a terminal status?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'In Progress']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To Do']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'In Review']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Done']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which role in Jira is typically responsible for grooming the backlog and setting priorities?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Scrum Master']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Project Admin']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Product Owner']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Developer']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Jira feature helps you search for issues using a structured query language?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Advanced Filters']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Custom Fields']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'JQL (Jira Query Language)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Smart Links']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the Jira "Epic" issue type represent?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A critical bug']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A user story']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A large body of work that can be broken down into smaller tasks or stories']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A feature request']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Jira, how can teams track progress over time during a Sprint?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By reviewing the backlog']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using a Burndown Chart']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Creating new epics']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Assigning labels to issues']] },
      ],
      correctAnswer: '1',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Fill in the blanks: In Jira, a(n) ______ contains multiple ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'project, epics']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'epic, projects']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'task, projects']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'subtask, tasks']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Fill in the blanks: In Jira, a(n) ______ contains multiple ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'project, epics']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'epic, projects']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'task, projects']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'subtask, tasks']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Jira, work is divided in categories known as ________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Issue types']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Projects']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Sub-tasks']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Epics']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer illustrates a valid example of JQL?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'project = "PAY" AND createdDate >= startOfMonth()']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'project EQ "PAY" AND createdDate GT startOfMonth()']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'project IS "PAY" AND createdDate IS startOfMonth()']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'project = "PAY" & createdDate >= startOfMonth()']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to find issues assigned to you using JQL. Which query can you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'assignee = currentUser()']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'project = currentUser()']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'assignee = currentUser']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'project = currentUser']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        // these are in the same project (refer to project key DBE)
        [QuizMarkdownType.TEXT, 'Taylor is working on subtask DBE-12: Validate fields. Kim is working on task DBE-3: Finalize API contract. If the fields Taylor is working on for DBE-12 depends on the finalized API contract, which answer is a logical course of action the team can take?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Taylor can create a link stating DBE-12 is blocked by DBE-3']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Kim can create a link stating DBE-3 is blocked by DBE-12']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Taylor can create a link stating DBE-12 is caused by DBE-3']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Kim can create a link stating DBE-3 is caused by DBE-12']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'In Jira, a ____ can be used to express how two issues are related semantically, not hierarchically.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Link']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Task']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Project']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Subtask']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is TRUE about sprints in Jira?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A sprint can contain issues from more than one project']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A sprint belongs directly to a project']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Every project has its own sprints']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Moving an issue to a sprint changes its project']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is FALSE about sprints in Jira?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Moving an issue to a sprint changes its project']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A sprint can contain issues from more than one project']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An issue can be in only one sprint at a time']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'An issue must match the board’s filter to appear in a sprint']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'In Jira, every ______ has its own backlog'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Project']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Board']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Epic']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Story']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, '__________ primarily focuses on automating the merge and test process rather than the release process'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Continuous Integration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Continuous Delivery']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Continuous Deployment']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '__________  typically comes immediately after Continuous Integration in a DevOps pipeline'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Continuous Integration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Continuous Delivery']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Continuous Deployment']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which practice focuses on automatically building and testing code after each commit?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Continuous Integration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Continuous Delivery']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Continuous Deployment']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A SaaS company’s CI/CD pipeline automatically deploys every passing build directly to production without human intervention. Which practice is being used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Continuous Integration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Continuous Delivery']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Continuous Deployment']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An e-commerce platform uses Jenkins to run automated unit tests whenever a developer merges code into the main branch. No code is deployed yet. What phase of CI/CD does this represent?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Continuous Integration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Continuous Delivery']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Continuous Deployment']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A financial services team runs automated end-to-end tests and performance checks on each build. Once approved by QA, the same artifact can be manually pushed to production at any time. What process is being used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Continuous Integration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Continuous Delivery']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Continuous Deployment']] },
      ],
      correctAnswer: '1',
    },
  ],
} as QuizDataObject;
