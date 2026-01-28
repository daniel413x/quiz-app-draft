import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Quality Assurance',
  slug: 'qa',
  category: {
    slug: 'software-development',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the “Definition of Done” refer to in Agile?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The end date of the project']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The coding phase is complete']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A shared understanding of what "done" means']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'When the client signs off']] },
      ],
      correctAnswer: '2',
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
        [QuizMarkdownType.TEXT, 'What is the primary purpose of a Requirements Traceability Matrix (RTM)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To list user interface designs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To trace requirements to test cases and ensure coverage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To estimate project budget']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To record team members’ roles']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which element is commonly mapped to each requirement in an RTM?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Database schema']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Test case ID']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Meeting notes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Design wireframes']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which development phase is an RTM usually created?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Testing']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Requirement analysis']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Development']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deployment']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a key benefit of using an RTM?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Tracks time spent on tasks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Ensures all requirements are tested']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Stores project financial data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Defines coding standards']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In an RVTM, what does the “Verification” component refer to?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The priority level of the requirement']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The method used to confirm the requirement was met']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The person who wrote the requirement']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The tools used for development']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of requirements are typically included in an RTM?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Only business requirements']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Only technical requirements']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Both functional and non-functional requirements']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Only test requirements']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Who is typically responsible for maintaining the RTM or RVTM?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Project Manager']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Tester or QA Analyst']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'UI/UX Designer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'DevOps Engineer']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which document is an RTM most commonly used alongside?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Release notes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Requirements Specification Document']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'User guide']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Architecture diagram']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following would most likely be missing from an RTM row?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Requirement ID']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Test Case ID']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Verification method']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Database query']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does an RTM contribute to compliance or audits?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By summarizing budget and expenses']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By showing traceability from requirements to tests']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By enforcing code reviews']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By logging user activity in Jira']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which requirement is an example of business requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '“The system shall improve patient data reporting accuracy.”']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '“The API shall return patient details when queried by ID.”']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '“Response time shall be < 300 ms under normal load.”']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '“The system shall comply with HIPAA.”']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which requirement is an example of functional requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '“The system shall improve patient data reporting accuracy.”']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '“The API shall return patient details when queried by ID.”']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '“Response time shall be < 300 ms under normal load.”']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '“The system shall comply with HIPAA.”']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which requirement is an example of regulatory/compliance requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '“The system shall improve patient data reporting accuracy.”']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '“The API shall return patient details when queried by ID.”']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '“Response time shall be < 300 ms under normal load.”']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '“The system shall comply with HIPAA.”']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT an example of requirements gathering?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using Jira to write test cases']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Developers, testers, and product owners agree on expected API inputs and outputs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Asking users which features they use most in the current system']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Observing how data entry clerks use existing tools']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is an example of requirements gathering?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Defining acceptance criteria with stakeholders']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using Jira to write test cases']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Submitting a screenshot to the Requirements Traceability Matrix']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Writing a test plan']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT an example of requirements gathering?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using Jira to write test cases']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Developers, testers, and product owners agree on expected API inputs and outputs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Asking users which features they use most in the current system']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Observing how data entry clerks use existing tools']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT an example of acceptance criteria?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'User must be able to reset their password via email']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The feature must be deployed before Q4']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Password reset link expires in 15 minutes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'User sees a confirmation message after resetting password']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT an example of acceptance criteria?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Search results must be displayed in under 2 seconds']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Product must meet all PCI compliance standards']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'User can sort results by price, rating, or popularity']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Search is case-insensitive']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT an example of acceptance criteria?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Admin receives a success message when a user is deleted']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'All project milestones must be completed by end of quarter']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Only admins can delete users']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deleted users no longer appear in the user list']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT an example of acceptance criteria?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Clicking the “Download” button initiates a PDF download']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Users prefer dark mode over light mode']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The file name includes the current date']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The PDF must open in a new browser tab']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT an example of acceptance criteria?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'User can add and remove items from the shopping cart']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Product images must be approved by the design team']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Cart updates are reflected in real-time']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Empty cart displays a message and suggested products']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does "shift-left" mean in the context of software testing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Testing is performed only after deployment']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Testing responsibilities are outsourced']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Testing begins earlier in the development lifecycle']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Testing is limited to the user acceptance phase']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a primary benefit of shift-left testing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Longer development timelines']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Earlier defect detection']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reduced need for test automation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Fewer integration points']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which phase is emphasized for early testing in shift-left practices?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Requirements and design']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Production']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'User acceptance testing']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Release planning']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which testing technique aligns most closely with shift-left principles?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Exploratory testing']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Unit testing']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Beta testing']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Production monitoring']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does shift-left testing affect collaboration between teams?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It encourages siloed work between QA and Dev']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It delays QA involvement']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It promotes earlier and continuous collaboration']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It eliminates the need for QA']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Agile ceremony naturally supports shift-left testing by enabling early feedback?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Sprint Retrospective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Daily Stand-up']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Sprint Planning']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Backlog Refinement']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which DevOps practice complements shift-left testing by ensuring fast feedback on code changes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Continuous Integration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Infrastructure as Code']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Release Management']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Continuous Deployment']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In shift-left testing, who typically becomes more involved in writing and executing tests?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'End users']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Test automation vendors']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Developers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Security auditors']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Shift-left testing is primarily focused on preventing which of the following?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Cost overruns']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Late discovery of defects']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Scope changes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Poor documentation']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of test is LEAST likely to be part of a shift-left strategy?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Unit test']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Integration test']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'System test']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Production monitoring']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are analyzing a user story for edge cases. Select the testing activity that best matches what you are doing.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Test analysis']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Test basis']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Test design & implementation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Test conditions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are meeting with stakeholders and gathering requirements. Select the testing activity that best matches what you are doing.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'test analysis']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'test basis']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'test design & implementation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'test conditions']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'The test execution schedule would be determined during _______'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Test implementation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Test analysis'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Test completion'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Test design'],
          ],
        },
      ],
      correctAnswer: '0',
    }, {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Given the following testware:',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '1. Coverage items',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '2. Change requests',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '3. Test execution schedule',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '4. Prioritized test conditions',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'And the following test activities:',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'A. Test analysis',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'B. Test design',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'C. Test implementation',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'D. Test completion',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'Which of the following BEST shows the testware produced by the activities?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1B, 2D, 3C, 4A',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1B, 2D, 3A, 4C',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1D, 2C, 3A, 4B',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1D, 2C, 3B, 4A',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following test tasks:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. Derive test cases from test conditions'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. Identify reusable testware'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. Organize test cases into test procedures'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. Evaluate test basis and test object'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following test activities:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. Test analysis'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. Test design'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. Test implementation'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. Test completion'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which of the following BEST matches the tasks with the activities?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1B, 2A, 3D, 4C'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1B, 2D, 3C, 4A'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1C, 2A, 3B, 4D'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1C, 2D, 3A, 4B'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following testware:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'i. Test completion report'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'ii. Data held in a database used for test inputs and expected results'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'iii. The list of elements needed to build the test environment'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'iv. Documented sequences of test cases in execution order'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'v. Test cases'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which of the following BEST shows the testware produced as a result of performing test implementation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'ii, iv'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'iii, v'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'i, ii, v'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'i, iii, iv'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A development team commits code changes multiple times per day, triggering automatic builds and unit tests after each commit. Which practice is this an example of?'],
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
        [QuizMarkdownType.TEXT, 'A company’s build pipeline automatically tests and packages code, then deploys it to a staging environment for manual approval before production release. What practice does this describe?'],
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
    {
      question: [
        [QuizMarkdownType.TEXT, 'A mobile app development team automatically pushes new code to production servers as soon as it passes all automated tests, without requiring any manual approval. Which DevOps practice is this?'],
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
        [QuizMarkdownType.TEXT, 'Developers frequently merge their local branches to the main repository, and each merge automatically runs tests to ensure compatibility with other code. What practice is being applied here?'],
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
        [QuizMarkdownType.TEXT, 'A DevOps team has set up pipelines where code is automatically built, tested, and deployed to staging. A manager must click “Approve” before production deployment. What is this an example of?'],
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
        [QuizMarkdownType.TEXT, 'An online game development company deploys new server patches multiple times a day, automatically and without human intervention, as soon as all pipeline checks succeed. Which stage of CI/CD does this illustrate?'],
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
        [QuizMarkdownType.TEXT, 'In a healthcare system project, developers push new code daily to a shared repository. Each change is automatically compiled and tested. What is this process called?'],
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
        [QuizMarkdownType.TEXT, 'Which practice ensures that the codebase is always in a deployable state but requires manual approval before release?'],
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
        [QuizMarkdownType.TEXT, 'Which approach automatically deploys every change that passes automated tests into production without human intervention?'],
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
        [QuizMarkdownType.TEXT, 'In which stage of the CI/CD pipeline do developers most often detect and fix integration errors early?'],
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
        [QuizMarkdownType.TEXT, '__________ relies heavily on automated pipelines to push code through staging and testing environments before release'],
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
        [QuizMarkdownType.TEXT, '__________ eliminates the need for manual release approvals entirely'],
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
        [QuizMarkdownType.TEXT, '__________ is a stage that emphasizes ensuring code is ready for deployment at any time, even if deployment itself is not automatic'],
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
