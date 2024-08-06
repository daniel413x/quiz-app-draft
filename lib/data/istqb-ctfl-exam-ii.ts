import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'ISTQB Foundational Level (CTFL) Exam II',
  slug: 'istqb-ctfl-exam-ii',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which activity is part of test execution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Analyzing discrepancies between expected and actual results and reporting defects'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Estimating the time required for testing all payment functionalities'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Defining the scope of payment tests to be conducted'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using decision tables to design payment tests'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which activity is a part of test design?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using boundary value analysis to derive test data for payment processing'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Determining which payment scenarios should be tested'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Reviewing test results to identify defects'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Estimating the resources needed for testing the payment module'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which activity is considered part of test analysis?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Deciding which scenarios to test, such as sharing payment between multiple users'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Developing automated test scripts for the payment process'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Measuring the time taken to execute each test case'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Preparing test data based on boundary value analysis'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following activities is a part of test planning?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Estimating the test effort required for integrating with a third-party payment service'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Identifying the most critical test conditions for payment processing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Executing test cases for different payment scenarios'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Reporting defects found during payment integration testing'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You work in a team that develops a mobile application for food ordering. In the current iteration, the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Estimating that testing the integration with the payment service will take 8 person-days'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Deciding that the team should test if it is possible to properly share payment between many users'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect'],
          ],
        },
      ],
      correctAnswer: '1',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'How is the whole team approach present in the interactions between testers and business representatives?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Business representatives decide on test automation approaches'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Testers help business representatives to define test strategy'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Business representatives are not part of the whole team approach'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Testers help business representatives to create suitable acceptance tests'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Who typically defines the test automation approach in a whole team setting?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Testers with the help of developers and business representatives'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Business representatives alone'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Developers without tester input'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Testers independently'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How is the test strategy typically decided in a collaborative development environment?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'In collaboration with testers, developers, and business representatives'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By the business representatives alone'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By testers alone without input from others'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By developers without any other input'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is true about the role of business representatives in the whole team approach?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They collaborate with testers and developers as part of the team'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They are not involved in the testing process'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They only provide business requirements and nothing else'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They are responsible for coding the test cases'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT an example of the shift left approach?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Reviewing the user requirements before they are formally accepted by the stakeholders'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Writing a component test before the corresponding code is written'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Executing a performance efficiency test for a component during component testing'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Writing a test script before setting up the configuration management process'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is reviewing user requirements before they are formally accepted considered part of the shift left approach?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows for early detection and resolution of issues, preventing costly fixes later'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It eliminates the need for further testing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It ensures that only necessary features are developed'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It speeds up the development process without needing stakeholder input'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does writing a component test before the corresponding code is written exemplify the shift left approach?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By integrating testing early in the development process, allowing for immediate feedback and issue resolution'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By ensuring that no further testing is required once the code is completed'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By ensuring all stakeholders are involved in coding decisions'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By avoiding the need for design documentation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is executing a performance efficiency test for a component during component testing considered part of the shift left approach?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It identifies performance issues early, allowing for optimizations before full system integration'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It eliminates the need for further performance testing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It ensures components are developed without needing external input'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It ensures no functional testing is needed later'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why should test scripts not be written before setting up the configuration management process?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Test scripts should be subject to configuration management to ensure version control and traceability'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Test scripts are not important in the early stages of development'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Configuration management has no impact on test scripts'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It is better to write test scripts after all coding is completed'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT true for white-box testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'During white-box testing the entire software implementation is considered'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'White-box coverage metrics can help identify additional tests to increase code coverage'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'White-box test techniques can be used in static testing'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'White-box testing can help identify gaps in requirements implementation'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it true that white-box testing considers the entire software implementation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it involves testing internal structures and logic paths within the code'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it focuses only on external system behavior'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is used exclusively for testing user interfaces'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it ignores the actual implementation details'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do white-box coverage metrics help improve testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They provide objective measures of code coverage, identifying where additional tests may be needed'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They guarantee that no defects exist in the code'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They ensure that testing is completed without requiring further analysis'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They replace the need for functional testing'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In what way can white-box test techniques be used during static testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They can be applied during code reviews to analyze the control flow and logic'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They are only applicable during dynamic testing phases'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They focus solely on system performance under load'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They are used exclusively for testing APIs'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why can white-box testing not identify gaps in requirements implementation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it focuses on code structure and logic, not on comparing code against requirements specifications'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it only tests the user interface elements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it ensures all requirements are automatically met'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is solely concerned with performance optimization'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do testers support business representatives in achieving desired quality levels?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By helping them create suitable acceptance tests'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By writing all the business requirements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By designing the application architecture'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By implementing the user interface'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are testing a user story with three acceptance criteria: AC1, AC2, and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows:'],
        [QuizMarkdownType.TABLE, {
          name: 'Test Execution History',
          data: [
            {
              _tableDataColId: '1', execution: 'Execution 1', tc1: 'Failed (1)', tc2: 'Passed (4)', tc3: 'Failed (7)',
            },
            {
              _tableDataColId: '2', execution: 'Execution 2', tc1: 'Passed (2)', tc2: 'Failed (5)', tc3: 'Failed (8)',
            },
            {
              _tableDataColId: '3', execution: 'Execution 3', tc1: 'Passed (3)', tc2: 'Passed (6)', tc3: 'Passed (9)',
            },
          ],
          cols: [
            { accessorKey: 'execution', header: 'Execution' },
            { accessorKey: 'tc1', header: 'TC1' },
            { accessorKey: 'tc2', header: 'TC2' },
            { accessorKey: 'tc3', header: 'TC3' },
          ],
        }],
        [QuizMarkdownType.TEXT, 'Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available. Which of the above tests are executed as regression tests?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Only 5, 7'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only 5, 6'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Only 4, 6, 8, 9'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only 4, 7, 8, 9'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Evaluate: A regression test is run after a confirmation test.',
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
          'The reviews being used in your organization have the following attributes:',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          '• There is the role of a scribe',
        ],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          '• The main purpose is to evaluate quality',
        ],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          '• The meeting is led by the author of the work product',
        ],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          '• There is individual preparation',
        ],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          '• A review report is produced',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          'Which of the following review types is MOST likely being used?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Informal review',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Walkthrough',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Technical review',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Inspection',
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
          'You are testing a simplified apartment search form which has only two search criteria: floor (with three possible options: ground floor; first floor; second or higher floor) and garden type (with three possible options: no garden; small garden; large garden). Only apartments on the ground floor have gardens. The form has a built-in validation mechanism that will not allow you to use the search criteria which violate this rule. Each test has two input values: floor and garden type. You want to apply equivalence partitioning (EP) to cover each floor and each garden type in your tests. What is the minimal number of test cases to achieve 100% EP coverage?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '4',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '3',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '5',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '6',
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
          'You are testing a system that calculates the final course grade for a given student. The final grade is assigned based on the final result, according to the following rules:',
        ],
        [
          QuizMarkdownType.TABLE, {
            name: 'Final Grade Rules',
            data: [
              { _tableDataColId: '1', points: '0 – 50', grade: 'failed' },
              { _tableDataColId: '2', points: '51 – 60', grade: 'fair' },
              { _tableDataColId: '3', points: '61 – 70', grade: 'satisfactory' },
              { _tableDataColId: '4', points: '71 – 80', grade: 'good' },
              { _tableDataColId: '5', points: '81 – 90', grade: 'very good' },
              { _tableDataColId: '6', points: '91 – 100', grade: 'excellent' },
            ],
            cols: [
              { accessorKey: 'points', header: 'Points' },
              { accessorKey: 'grade', header: 'Grade' },
            ],
          },
        ],
        [
          QuizMarkdownType.TEXT,
          'You have prepared the following set of test cases:',
        ],
        [
          QuizMarkdownType.TABLE, {
            name: 'Test Cases',
            data: [
              {
                _tableDataColId: '1', final_result: 'TC1', final_grade: '91', grade: 'excellent',
              },
              {
                _tableDataColId: '2', final_result: 'TC2', final_grade: '50', grade: 'failed',
              },
              {
                _tableDataColId: '3', final_result: 'TC3', final_grade: '81', grade: 'very good',
              },
              {
                _tableDataColId: '4', final_result: 'TC4', final_grade: '60', grade: 'fair',
              },
              {
                _tableDataColId: '5', final_result: 'TC5', final_grade: '70', grade: 'satisfactory',
              },
              {
                _tableDataColId: '6', final_result: 'TC6', final_grade: '80', grade: 'good',
              },
            ],
            cols: [
              { accessorKey: 'final_result', header: ' ' },
              { accessorKey: 'final_grade', header: 'Final Grade' },
              { accessorKey: 'grade', header: 'Grade' },
            ],
          },
        ],
        [
          QuizMarkdownType.TEXT,
          'What is the 2-value Boundary Value Analysis (BVA) coverage for the final result that is achieved with the existing test cases?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '50%',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '60%',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '33.3%',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '100%',
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
          'Your test suite achieved 100% statement coverage. What is the consequence of this fact?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Each instruction in the code that contains a defect has been executed at least once',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Any test suite containing more test cases than your test suite will also achieve 100% statement coverage',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Each path in the code has been executed at least once',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Every combination of input values has been tested at least once',
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
          'The purpose of a confirmation test is to see ________',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If the problem is fixed',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If a fix caused a different test to fail',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If all tests passed',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If tests can be performed',
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
          'Evaluate: A regression test runs after any failing test.',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'False',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'True',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT true for white-box testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'During white-box testing the entire software implementation is considered'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'White-box coverage metrics can help identify additional tests to increase code coverage'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'White-box test techniques can be used in static testing'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'White-box testing can help identify gaps in requirements implementation'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it true that white-box testing considers the entire software implementation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it involves testing internal structures and logic paths within the code'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it focuses only on external system behavior'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is used exclusively for testing user interfaces'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it ignores the actual implementation details'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do white-box coverage metrics help improve testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They provide objective measures of code coverage, identifying where additional tests may be needed'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They guarantee that no defects exist in the code'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They ensure that testing is completed without requiring further analysis'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They replace the need for functional testing'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In what way can white-box test techniques be used during static testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They can be applied during code reviews to analyze the control flow and logic'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They are only applicable during dynamic testing phases'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They focus solely on system performance under load'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They are used exclusively for testing APIs'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why can white-box testing not identify gaps in requirements implementation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it focuses on code structure and logic, not on comparing code against requirements specifications'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it only tests the user interface elements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it ensures all requirements are automatically met'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is solely concerned with performance optimization'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'In your project there has been a delay in the release of a brand-new application and test execution started late, but you have very detailed domain knowledge and good analytical skills. The full list of requirements has not yet been shared with the team, but management is asking for some test results to be presented. Which test technique fits BEST in this situation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Checklist-based testing'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Error guessing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Exploratory testing'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Branch testing'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why might checklist-based testing not be suitable for a brand-new product with incomplete requirements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because there may not be an existing checklist or known test conditions due to missing requirements'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because checklist-based testing is only used for regression testing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it requires complete automation of all tests'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is only used in performance testing scenarios'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is error guessing not the best technique for testing a new product with missing requirements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because there may not be enough information to make correct error guesses'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because error guessing is only used after all other testing is completed'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is a formalized technique requiring complete documentation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it requires input from end users'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is exploratory testing suitable when there are few known specifications and a pressing timeline for testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it allows testers to use their domain knowledge and analytical skills to explore the application without complete documentation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it guarantees full coverage of the application code'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it eliminates the need for any formal testing processes'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it requires no interaction with the development team'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why might branch testing not be appropriate when management is asking for quick test results and the focus is on domain knowledge?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because branch testing is time-consuming and does not focus on domain-specific knowledge'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because branch testing is only used for non-functional testing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it only applies to user acceptance testing'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is a manual testing technique'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do testers add value to iteration and release planning?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Testers determine the priority of the user stories to be developed'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Testers focus only on the functional aspects of the system to be tested'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Testers participate in the detailed risk identification and risk assessment of user stories'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Testers guarantee the release of high-quality software through early test design during the release planning'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Who is typically responsible for determining the priority of user stories in iteration and release planning?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The business representative, together with the development team'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Testers, independently from other roles'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The project manager alone'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The customer directly'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it incorrect to say that testers focus only on the functional aspects of the system?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because testers evaluate both functional and non-functional aspects of the system'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because testers are responsible only for code quality'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because testers focus solely on user interfaces'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because testers work exclusively with developers'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do testers contribute to risk identification and assessment during release planning?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By identifying potential risks and assessing their impact and likelihood on user stories'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By assigning technical tasks to developers'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By developing new features independently'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By ensuring all documentation is complete'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why does early test design not guarantee the release of high-quality software?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because quality is also dependent on development practices, requirements clarity, and stakeholder collaboration'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because early test design prevents new feature development'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because early test design eliminates the need for further testing'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because early test design replaces the need for user acceptance testing'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Testing is a form of ________.',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Risk mitigation',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Contingency planning',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Risk acceptance',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Risk transfer',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Acceptance criteria'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Defect report'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Test completion report'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Burndown chart'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why are acceptance criteria not suitable for showing work progress in an iteration?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because acceptance criteria define the conditions to determine if a user story is complete, not the progress of work'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because they are updated daily to track iteration progress'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because they visualize defects rather than work progress'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because they are used to track time spent on tasks'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why do defect reports not provide information about work progress in an iteration?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because defect reports focus on documenting and tracking defects, not overall work progress'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because they summarize the iteration progress in a graphical format'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because they are used to measure task completion rates'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because they track user stories completed in each iteration'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is the test completion report not suitable for showing work progress within an iteration?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is typically created after the iteration is finished and does not provide continuous progress updates'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it tracks daily progress against remaining work'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it provides a real-time view of task completion'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it updates the team on defect resolutions'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why are burndown charts effective for showing work progress in agile iterations?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because they graphically represent the work left to do versus the time remaining, providing daily updates on progress'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because they are used solely for tracking defect reports'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because they outline the acceptance criteria for user stories'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because they summarize test completion rates'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Traceability management'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Maintenance testing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Configuration management'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Requirements engineering'],
          ],
        },
      ],
      correctAnswer: '2',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'In exploratory testing, which activity is simultaneously performed along with test design and execution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Evaluation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Test data generation'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Reporting'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Documentation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of using session-based testing in exploratory testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To structure the testing within a defined time-box'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To automate repetitive test cases'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To focus solely on functional testing'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To eliminate the need for test documentation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What document contains the test objectives to guide exploratory testing in a session-based approach?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Test charter'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Test plan'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Requirement specification'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Test matrix'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What typically follows a test session in exploratory testing to discuss the results?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Debriefing'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Test execution'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Code review'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Performance analysis'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a session-based exploratory testing approach, what are test objectives treated as?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'High-level test conditions'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Detailed test scripts'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Static analysis goals'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'User stories'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is used to document the steps followed and discoveries made during an exploratory test session?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Test session sheets'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Bug reports'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Requirement documents'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Performance logs'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is exploratory testing particularly useful when there are few or inadequate specifications?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows testers to explore and learn about the test object without needing detailed documentation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It relies solely on automation to execute tests'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It ensures all code paths are executed'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It eliminates the need for test cases'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What attributes should a tester have to be effective in exploratory testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Experience, domain knowledge, analytical skills, curiosity, and creativeness'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Strict adherence to test scripts and plans'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In-depth knowledge of automation tools'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Ability to follow detailed documentation without deviation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can exploratory testing be complemented in the testing process?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By incorporating other test techniques like equivalence partitioning'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By using only automated test scripts'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By ensuring complete documentation before testing'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By avoiding any interaction with developers'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following statements is a CORRECT example of the value of traceability?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Traceability between the mitigated risks and passing test cases provides a means of determining the level of residual risk',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Traceability between user requirements and test execution results provides a means of measuring project progress against business goals',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Traceability between testers and failing test cases provides a means of determining the skill level of the testers',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does traceability between user requirements and test execution results benefit a project?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It provides an indication of which user requirements have been tested'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It ensures that all defects are found before release'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It eliminates the need for regression testing'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It automates the entire testing process'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does traceability provide in the context of testing and project progress?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A means of measuring project progress against business goals'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A method to automate all test execution'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A way to ensure 100% code coverage'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A tool for designing user interfaces'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What aspect of testing is directly linked to business goals through traceability?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Project progress in testing'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Code review and analysis'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'User interface design'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Defect prioritization'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Evaluate: If agile software development is used, system test automation replaces the need for regression testing.',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'False',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'True',
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
          'Evaluate: If a sequential development model is used, then dynamic testing is typically restricted to later in the lifecycle.',
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
          'In incremental development models, what is required for each increment delivered?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both static and dynamic testing at all test levels',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Only static testing at the unit level',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Only dynamic testing at the integration level',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Testing is not required for each increment',
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
          'Which types of testing are performed at all test levels for each increment in an incremental development model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Static and dynamic testing',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Functional and non-functional testing',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'User acceptance and system testing',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Regression and load testing',
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
          'What is the primary characteristic of deliverables in most incremental development models?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Deliverables are produced in each increment',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Deliverables are produced only at the end of the project',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Deliverables are only theoretical models',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Deliverables are outsourced to third-party vendors',
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
          'A crucial component of the shift-left approach is ___________.',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reviewing work products as soon as drafts are available',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Conducting performance testing at the end of development',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Focusing only on manual testing strategies',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Performing regression testing only after deployment',
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
          'What is the primary goal of the shift-left approach in software testing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To identify and fix defects earlier in the development process',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To increase the number of manual tests conducted',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To reduce the time spent on planning and design',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To focus testing efforts only on the user acceptance phase',
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
          'Which activity is emphasized in the shift-left approach?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Early involvement of testers in the software development lifecycle',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Postponing testing until the final release',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the number of features delivered per release',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Eliminating automated testing from the process',
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
          'How does the shift-left approach impact the software development lifecycle?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It integrates testing activities earlier in the lifecycle phases',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It delays testing activities until after deployment',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It focuses on minimizing the testing effort required',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It reduces the need for collaboration among team members',
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
          'What is a key benefit of implementing the shift-left approach in testing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Early detection of defects, leading to reduced costs and rework',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreased focus on code quality and documentation',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increased time spent on maintenance and support',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Delayed release cycles due to extended testing phases',
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
          'Which practice aligns with the principles of the shift-left approach?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Conducting code reviews and static analysis early in development',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Postponing performance testing until the system is fully deployed',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Focusing testing efforts exclusively on integration testing',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Removing test automation from the testing process',
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
          'Which of the following is MOST likely to be performed as part of system testing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Security testing of a credit management system by an independent test team',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Testing the interface of a currency exchange system with an external banking system',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Beta testing of a remote learning system by courseware developers',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Testing interactions between the user interface and database of a human resources system',
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
          'Which of the following statements about DevOps is CORRECT?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the danger of regression',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing',
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
          'Testing the interface of a currency exchange system with an external banking system is an example of __________.',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'System integration testing',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Integration testing',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'User acceptance testing',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'System testing',
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
          'Which of the following is an example of a defect that can be found by static testing but NOT by dynamic testing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Lack of usability provided through the user interface',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Code with no path that reaches it',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Poor response times for most of the expected users',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Required features that are not implemented in the code',
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
          'Which of the following is true of dynamic tests?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dynamic tests can only exercise reachable code',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dynamic tests can identify missing requirements',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dynamic tests can validate system architecture',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dynamic tests can detect code style issues',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a review, the role responsible for deciding what is to be reviewed and providing resources such as staff and time for the review is that of the ________'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Facilitator'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Manager'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Scribe'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Review leader'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Decision table testing is a ________ test technique, while branch testing is a ________ test technique.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'black-box, white-box'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'white-box, black-box'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'test-driven development, acceptance test-driven development'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'acceptance test-driven development, test-driven development'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements BEST describes the difference between decision table testing and branch testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code.'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a review, the role responsible for ensuring the effective running of review meetings and the setting up a safe review environment is that of the ________'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Facilitator'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Manager'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Scribe'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Review leader'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Given the following roles in reviews:',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '1. Scribe',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '2. Review leader',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '3. Facilitator',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '4. Manager',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'And the following responsibilities in reviews:',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'A. Ensures the effective running of review meetings and the setting up a safe review environment',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'B. Records review information, such as decisions and new anomalies found during the review meeting',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'C. Decides what is to be reviewed and provides resources, such as staff and time for the review',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'D. Takes overall responsibility for the review such as organizing when and where the review will take place',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'Which of the following BEST matches the roles and responsibilities?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1A, 2B, 3D, 4C',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1A, 2C, 3B, 4D',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1B, 2D, 3A, 4C',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1B, 2D, 3C, 4A',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is traceability management not the process used for creating a new version of a test script?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because traceability management focuses on the relationships between different work products, not on versioning of the same product'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because traceability management is solely about tracking changes in code'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it deals with user interface design'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is only used during test execution'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is maintenance testing not the appropriate process for creating a new version of a test script?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because maintenance testing is focused on testing changes rather than managing versions of test scripts'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it exclusively deals with manual testing processes'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is used only for new feature development'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it involves only regression testing activities'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does configuration management support the creation of new versions of test scripts?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By providing version control for all test items, including scripts, ensuring that changes are tracked and managed'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By handling only the initial creation of test scripts without any updates'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By focusing solely on the execution of test cases'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By ensuring that requirements are collected and documented'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is requirements engineering not directly related to creating new versions of test scripts?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because requirements engineering is concerned with eliciting, documenting, and managing requirements, not version control of test scripts'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it only deals with the development of test cases'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is focused on coding standards and practices'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it ensures test cases meet user expectations'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'In your project, a critical module was unexpectedly changed, and test execution started late. However, you have a skilled testing team with strong exploratory skills and domain expertise. The documentation for the module is incomplete, but management needs some test results to make urgent decisions. Which test technique fits BEST in this situation?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Checklist-based testing',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Error guessing',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Exploratory testing',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Branch testing',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'QA is performed as part of testing'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Testing is performed as part of QC'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Testing is another term for QC'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Testing is performed as part of QA'],
          ],
        },
      ],
      correctAnswer: '1',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of why testing is necessary?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Static testing is used by developers to identify failures in their program code earlier than can be achieved through dynamic testing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products'],
          ],
        },
      ],
      correctAnswer: '3',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main difference between static testing and dynamic testing in software development?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Static testing is used to detect defects in code without execution, while dynamic testing finds failures by executing the code'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Static testing is conducted by end-users, while dynamic testing is conducted by developers'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Static testing is done after the software is released, while dynamic testing is done during development'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Static testing is used to evaluate system performance, while dynamic testing checks system security'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of static analysis in software development?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To directly detect anomalies in code that may be defects'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that all customer requirements are met before release'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To test the software in an operational environment'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To evaluate the usability and user experience of the software'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'A form verifies a correct password length of 6-12 characters and is tested with 2-value boundary value coverage. This means that the input lengths tested are 0, 5, 6, 12, and 13. Which additional inputs would be tested with 3-value boundary value coverage?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '4, 5, 13, 14'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '7, 11'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1, 5, 13'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1, 4, 7, 11, 14'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A form verifies a correct username length of 8-16 characters and is tested with 2-value boundary value coverage. This means that the values tested are 7, 8, 16, and 17. Which additional values would be tested with 3-value boundary value coverage?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '6, 7, 17, 18',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '9, 15',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '7, 8, 16',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '6, 9, 15, 18',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. This value represents the number of the current wash. Based on this number the system decides what discount the customer is entitled to.'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'For every tenth wash, the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e., a 50% discount in total).'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which of the following sets of input data (understood as the numbers of the current wash) achieves the highest equivalence partition coverage?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '19, 20, 30'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '11, 12, 20'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1, 10, 50'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '10, 29, 30, 31'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Let the branch coverage metric be defined as BCov = (X / Y) * 100%. What do X and Y represent in this formula?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'X = number of decision outcomes exercised by the test cases',
            ],
            [
              QuizMarkdownType.BREAK,
            ],
            [
              QuizMarkdownType.TEXT,
              'Y = total number of decision outcomes in the code',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'X = number of conditional branches exercised by the test cases',
            ],
            [
              QuizMarkdownType.BREAK,
            ],
            [
              QuizMarkdownType.TEXT,
              'Y = total number of branches in the code',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'X = number of branches exercised by the test cases',
            ],
            [
              QuizMarkdownType.BREAK,
            ],
            [
              QuizMarkdownType.TEXT,
              'Y = total number of branches in the code',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'X = number of conditional branches exercised by the test cases',
            ],
            [
              QuizMarkdownType.BREAK,
            ],
            [
              QuizMarkdownType.TEXT,
              'Y = total number of decision outcomes in the code',
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
          'You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER.',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'You have prepared the following five test cases, which you want to execute according to their priorities:',
        ],
        [
          QuizMarkdownType.TABLE,
          {
            data: [
              {
                _tableDataColId: '1', test_case: 'TC1', description: 'SEARCH product A', priority: 'medium',
              },
              {
                _tableDataColId: '2', test_case: 'TC2', description: 'VIEW product A details', priority: 'low',
              },
              {
                _tableDataColId: '3', test_case: 'TC3', description: 'ADD product B to a shopping cart', priority: 'medium',
              },
              {
                _tableDataColId: '4', test_case: 'TC4', description: 'ADD product C to a shopping cart', priority: 'high',
              },
              {
                _tableDataColId: '5', test_case: 'TC5', description: 'place an ORDER', priority: 'high',
              },
            ],
            cols: [
              { accessorKey: 'test_case', header: 'Test Case' },
              { accessorKey: 'description', header: 'Description' },
              { accessorKey: 'priority', header: 'Priority' },
            ],
          },
        ],
        [
          QuizMarkdownType.TEXT,
          'You also identified the following logical dependencies between test cases:',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '• SEARCH functionality must be tested before VIEW functionality can be tested, as product details rely on search functionality.',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '• VIEW functionality must be tested before ADD functionality, as adding products relies on the availability of accurate product details.',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '• ADD functionality must be tested before ORDER functionality, as placing an order relies on the availability of accurate shopping cart information.',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'Which test case should be executed as the fourth one?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'TC3',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'TC1',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'TC2',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'TC4',
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
          'Which of the following is a product quality metric?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Mean time to failure',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Number of defects found',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Requirements coverage',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Defect detection percentage',
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
          'Which of the following is a coverage metric?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Mean time to failure',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Number of defects found',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Requirements coverage',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Defect detection percentage',
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
          'You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile, follows the DevOps approach, and uses a continuous integration/continuous delivery pipeline.',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          'Which of the following is the LEAST effective way to communicate test progress to the customer?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Face-to-face',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dashboards',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Email',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Video conferencing',
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
          'Which of the following BEST describes an example of how configuration management (CM) supports testing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs, and drivers used in that environment',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Having a record of the values of the test inputs, the CM tool can execute the test cases for these configurations and calculate test coverage',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Having the version number of the test case, the CM tool can automatically generate test data for this test case',
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
          '_______ are the consequence of ________, which are the result of ________.',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Failures, defects, error',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Defects, failures, error',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Error, failures, defects',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Failures, error, defects',
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
          'Read clockwise, the four sides of the testing quadrants are:',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Business-facing, product-critiquing, technology-facing, supporting the team',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Product-critiquing, business-facing, technology-facing, supporting the team',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Technology-facing, product-critiquing, business-facing, supporting the team',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Business-facing, supporting the team, technology-facing, product-critiquing',
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
          'Tools from which of the following categories help with the organization of test cases, detected defects, and configuration management?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Test execution and coverage tools',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Test design and implementation tools',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Defect management tools',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Test management tools',
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
          'Which of the following is NOT an example of how configuration management supports testing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All commits to the repository are uniquely identified and version controlled',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All changes in the test environment elements are tracked',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All requirement specifications are referenced unambiguously in test plans',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All identified defects have an assigned status',
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
          'Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Continuous risk monitoring allows us to identify emerging risks as soon as possible',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Risk identification allows us to implement risk mitigation activities and reduce the risk level',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The assessed risk level helps us to select the rigor of testing',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Risk analysis allows us to derive coverage items',
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
          'What is the relationship between the testing quadrants, test levels, and test types?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Testing quadrants describe the degree of granularity of individual test types performed at each test level',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Testing quadrants assign the test types that can be performed to the test levels',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following user story is best-suited for __________'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'As a Regular or Special user, I want to be able to use my electronic floor card, to access specific floors.'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Acceptance Criteria:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'AC1: Regular users have access to floors 1 to 3'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'AC2: Floor 4 is only accessible to Special users'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'AC3: Special users have all the access rights of Regular users'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Acceptance test-driven development'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Shift-right testing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Exploratory testing'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '"Test design" is a process that can involve _________.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The identification of coverage items'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Defining the test objectives'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Prioritizing associated test conditions'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Scope creep'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Test design includes elaborating the test conditions into test cases and other testware (e.g., test charters). This activity often involves the identification of coverage items, which serve as a guide to specify test case inputs.'],
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
        [QuizMarkdownType.TEXT, 'Evaluate: Test planning consists of defining the test objectives and then selecting an approach that best achieves the objectives within the constraints imposed by the overall context.'],
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
        [QuizMarkdownType.TEXT, 'Evaluate: Test design consists of defining the test objectives and then selecting an approach that best achieves the objectives within the constraints imposed by the overall context.'],
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
        [QuizMarkdownType.TEXT, 'Which of the following is a product risk?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Poor architecture'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Cost-cutting'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Scope creep'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Poor tool support'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%. What is the risk impact?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '$500'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '$2,000'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '$50,000'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '$200'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT anticipated by the tester while applying error guessing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The developer misunderstood the formula in the user story for calculating the interest'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The developer wrote “FA = A*(1+IR^N)” instead of “FA = A*(1+IR)^N” in the source code'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The developer missed the seminar on new compound interest rate legislation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The accuracy of the interest calculated by the system is not precise enough'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which collaborative user story writing practice enables the team to achieve a collective understanding of what needs to be delivered?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Planning poker, so that a team can achieve consensus on the effort needed to implement a user story'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Reviews, so that a team can detect inconsistencies and contradictions in a user story'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Conversation, so that team members can understand how the software will be used'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer missed the seminar on new compound interest rate legislation, and there is an incorrect calculation in their program where compound interest is calculated. Given this account, a _________ can be identified.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Root cause'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Test report'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Risk'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your test suite S for a program P achieves 100% statement coverage. It consists of three test cases, each of which achieves 50% statement coverage. Which of the following statements is CORRECT?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Executing S will cause all possible failures in P'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'S achieves 100% branch coverage for P'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Every executable statement in P containing a defect has been run at least once during the execution of S'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage'],
          ],
        },
      ],
      correctAnswer: '2',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'You are applying state transition testing to the hotel room reservation system modeled by the following state transition table, with 4 states and 5 different events. Assuming all test cases start in the "Requesting" state, which of the following test cases, represented as sequences of events, achieves the highest valid transitions coverage?'],
        [QuizMarkdownType.TABLE, {
          name: 'Events',
          data: [
            {
              _tableDataColId: '1', state: 'S1: Requesting', available: 'S2', not_available: 'S3', change_room: '', cancel: '', pay: '',
            },
            {
              _tableDataColId: '2', state: 'S2: Confirmed', available: '', not_available: '', change_room: 'S1', cancel: 'S4', pay: 'S4',
            },
            {
              _tableDataColId: '3', state: 'S3: Waiting list', available: 'S2', not_available: '', change_room: '', cancel: 'S4', pay: '',
            },
            {
              _tableDataColId: '4', state: 'S4: End', available: '', not_available: '', change_room: '', cancel: '', pay: '',
            },
          ],
          cols: [
            { accessorKey: 'state', header: 'State' },
            { accessorKey: 'available', header: 'Available' },
            { accessorKey: 'not_available', header: 'Not Available' },
            { accessorKey: 'change_room', header: 'Change Room' },
            { accessorKey: 'cancel', header: 'Cancel' },
            { accessorKey: 'pay', header: 'Pay' },
          ],
        }],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'NotAvailable, Available, ChangeRoom, NotAvailable, Cancel'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Available, ChangeRoom, NotAvailable, Available, Pay'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Available, ChangeRoom, Available, ChangeRoom, NotAvailable'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'NotAvailable, Cancel, ChangeRoom, Available, Pay'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are testing a temperature control system for a horticultural cold storage facility. The system receives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and 2 degrees inclusive, the system displays the message “temperature OK”. For lower temperatures, the system displays the message "temperature too low" and for higher temperatures, it displays the message “temperature too high”.'],
        [QuizMarkdownType.TEXT, 'Using two-value boundary value analysis, which of the following sets of test inputs provides the highest level of boundary value coverage?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '–1, 3'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '0, 2'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '–1, 0, 2, 3'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '–2, 0, 2, 4'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are designing test cases based on the following decision table. So far you have designed the following test cases:'],
        [QuizMarkdownType.TABLE, {
          name: 'Decision Table',
          data: [
            {
              _tableDataColId: '1', rule: 'R1', age: '0-18', experience: '-', registered: 'NO', category: 'A',
            },
            {
              _tableDataColId: '2', rule: 'R2', age: '19-65', experience: '0-4', registered: 'NO', category: 'A',
            },
            {
              _tableDataColId: '3', rule: 'R3', age: '19-65', experience: '>4', registered: 'NO', category: 'B',
            },
            {
              _tableDataColId: '4', rule: 'R4', age: '>65', experience: '-', registered: 'NO', category: 'B',
            },
            {
              _tableDataColId: '5', rule: 'R5', age: '0-18', experience: '-', registered: 'YES', category: 'B',
            },
            {
              _tableDataColId: '6', rule: 'R6', age: '19-65', experience: '-', registered: 'YES', category: 'D',
            },
            {
              _tableDataColId: '7', rule: 'R7', age: '>65', experience: '-', registered: 'YES', category: 'C',
            },
          ],
          cols: [
            { accessorKey: 'rule', header: 'Rule' },
            { accessorKey: 'age', header: 'C1: Age' },
            { accessorKey: 'experience', header: 'C2: Experience' },
            { accessorKey: 'registered', header: 'C3: Registered?' },
            { accessorKey: 'category', header: 'Category' },
          ],
        }],
        [QuizMarkdownType.TEXT, 'TC1: 19-year-old, unregistered man with no experience; expected result: category A'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'TC2: 65-year-old, unregistered woman with 5 years of experience; expected result: category B'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'TC3: 66-year-old, registered man with no experience; expected result: category C'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'TC4: 65-year-old, registered woman with 4 years of experience; expected result: category D'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which of the following test cases, when added to the existing set of test cases, will increase the decision table coverage?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '66-year-old, unregistered man with no experience; expected result: category B'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '55-year-old, unregistered woman with 2 years of experience; expected result: category A'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '19-year-old, registered woman with 5 years of experience; expected result: category D'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No additional test case can increase the already achieved decision table coverage'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a trigger for maintenance testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A service exhibiting slow response times'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Modifications, such as planned enhancements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Upgrades or migrations of the operational environment'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Retirement of an application'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following set of testing actions,'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. Check that the sort function puts the elements of the list or array in ascending order'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. Check whether the sort function completes sorting within one second of starting'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. Check how easily the sort function can be changed from sorting ascending to sorting descending'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. Checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'and the test types,'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. Non-functional maintainability testing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. Portability testing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. Non-functional testing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. Functional testing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which answer correctly maps testing actions to test types?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A4 B3 C1 D2'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A4 B3 C2 D1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A2 B4 C3 D1'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A2 B1 C4 D3'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is MOST likely to be a challenge encountered when implementing DevOps?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Making sure that non-functional quality characteristics are not overlooked'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Managing continuously changing test environments'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The need for more manual testers with suitable experience'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Setting up the test automation as part of the delivery pipeline'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Test completion is the responsibility of the'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Test management role'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Test role'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Scrum master'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Facilitator'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an activity carried out by a test management role?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Test planning'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Evaluate test basis and test object'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Define test environment requirements'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Assess testability of test object'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a responsibility of the testing role?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Evaluating the test basis'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Test monitoring and control'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Test planning'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Test management'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a responsibility of the testing role?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Test design'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Test monitoring and control'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Test planning'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Test management'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a responsibility of the testing role?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Test planning'],
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
            [QuizMarkdownType.TEXT, 'Test design'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Test implementation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The testing role is primarily responsible for the technical and engineering aspects of testing, such as ___________'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'test analysis, test design, test implementation, and test execution'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'test planning, test monitoring and control, and test completion'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'test analysis, test design, and test monitoring and control'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'test analysis and test completion'],
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
        [QuizMarkdownType.TEXT, 'Which of the following is MOST likely to describe a task performed by someone in a test management role?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Evaluate test basis and test object'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Define test environment requirements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Assess testability of test object'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Create test completion report'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a good testing practice that applies to all software development lifecycles?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Each test level has specific and distinct test objectives'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Test implementation and execution for a given test level should start during the corresponding development phase'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Testers should start test design as soon as drafts of the relevant work products become available'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Every dynamic testing activity has a corresponding static testing activity'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The currency exchange system was reconfigured to support both English and local language currency transactions'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements about the value of static testing is CORRECT?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The defect types found by static testing are different from the defect types that can be found by dynamic testing'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic testing can identify some of the defects that can be found by static testing but not all of them'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following descriptions of review activities:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. Detected anomalies are deliberated upon, and determinations are reached regarding their status, ownership, and any further steps needed'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. Issues are recorded, and any needed updates are addressed prior to the acceptance of the work product'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. Reviewers employ techniques to come up with suggestions and questions about the work product and to spot anomalies'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. The objective of the review and its schedule are established to ensure a focused and efficient review'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '5. Participants are provided with access to the item being reviewed'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which of the following is the CORRECT sequence in the review process of the activities that correspond to the descriptions?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '4 – 3 – 5 – 2 – 1'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '4 – 5 – 3 – 1 – 2'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '5 – 4 – 1 – 3 – 2'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '5 – 4 – 3 – 2 – 1'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A document of requirements for a test object on which you are working only details the behavior of the test object. Therefore, __________ will be most helpful in designing test cases.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Black-box test techniques'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'White-box test techniques'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Experience-based test techniques'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Risk-based test techniques'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The team wants to estimate the time needed for one tester to execute four test cases for a software component. The team has gathered the following measures of the effort used to execute a single test case:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Best-case scenario: 1 hour'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Worst-case scenario: 8 hours'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Most likely scenario: 3 hours'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Given that the three-point estimation technique is being used, what is the final estimate of the time needed to execute all four test cases?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '14 hours'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '3.5 hours'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '16 hours'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '12 hours'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The table shows the traceability matrix from test cases to requirements. "X" means that a given test case covers the corresponding requirement. You want to prioritize the test cases following the additional coverage prioritization technique. You execute all four test cases. Which test case should be executed as the LAST one?'],
        [QuizMarkdownType.TABLE, {
          data: [
            {
              _tableDataColId: '1', test_case: 'TC1', req1: 'X', req2: 'X', req3: '', req4: '', req5: '', req6: '', req7: 'X',
            },
            {
              _tableDataColId: '2', test_case: 'TC2', req1: '', req2: '', req3: 'X', req4: '', req5: 'X', req6: '', req7: 'X',
            },
            {
              _tableDataColId: '3', test_case: 'TC3', req1: '', req2: 'X', req3: '', req4: 'X', req5: '', req6: '', req7: '',
            },
            {
              _tableDataColId: '4', test_case: 'TC4', req1: '', req2: '', req3: '', req4: '', req5: '', req6: 'X', req7: '',
            },
          ],
          cols: [
            { accessorKey: 'test_case', header: 'Test Case' },
            { accessorKey: 'req1', header: 'Req1' },
            { accessorKey: 'req2', header: 'Req2' },
            { accessorKey: 'req3', header: 'Req3' },
            { accessorKey: 'req4', header: 'Req4' },
            { accessorKey: 'req5', header: 'Req5' },
            { accessorKey: 'req6', header: 'Req6' },
            { accessorKey: 'req7', header: 'Req7' },
          ],
        }],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'TC1'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'TC2'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'TC3'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'TC4'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For a given risk impact of $2,000 and a risk likelihood of 50%, what is the risk level?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '$1,000'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '$10,000'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '$4,000'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '$3,000'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a product risk?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Response time too long'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Cost-cutting'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Scope creep'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Poor tool support'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a valid purpose for a test report?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Tracking test progress and identifying areas that require further attention'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Providing information on the tests executed, their results, and any issues or defects found'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Providing information about each defect, such as the steps to reproduce it'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Providing information on testing planned for the next period'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Test planning includes elaborating the test conditions into test cases and other testware (e.g., test charters). This activity often involves the identification of coverage items, which serve as a guide to specify test case inputs.'],
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
        [
          QuizMarkdownType.TEXT,
          'Consider the following list:',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          '• Correct input not accepted',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          '• Incorrect input accepted',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          '• Wrong output format',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          '• Division by zero',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          'What test technique is MOST PROBABLY used by the tester who uses this list when performing testing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Exploratory testing',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Fault attack',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Checklist-based testing',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Boundary value analysis',
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
          'How can white-box testing be useful in support of black-box testing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'White-box coverage analysis can help testers identify unreachable fragments of the source code',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'White-box test techniques can provide coverage items for black-box techniques',
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
          'Why is it important to use white-box coverage measures in addition to black-box testing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'White-box coverage measures provide an objective measurement of code coverage',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Black-box testing alone can detect all possible defects in the code',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'White-box testing only focuses on functional requirements',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Black-box testing provides a measure of actual code coverage without needing white-box testing',
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
          'A developer was asked to implement the following business rule:',
        ],
        [
          QuizMarkdownType.CODE,
          `INPUT: value (integer number)
IF (value ≤ 100 OR value ≥ 200) THEN write “value incorrect”
ELSE write “value OK”`,
        ],
        [
          QuizMarkdownType.TEXT,
          'You design the test cases using 2-value boundary value analysis. Which of the following sets of test inputs achieves the greatest coverage?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '100, 150, 200, 201',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '99, 100, 200, 201',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '98, 99, 100, 101',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '101, 150, 199, 200',
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
          'What are the valid equivalence partitions for the following business rule?',
        ],
        [
          QuizMarkdownType.CODE,
          `INPUT: value (integer number)
IF (value ≤ 100 OR value ≥ 200) THEN write “value incorrect”
ELSE write “value OK”`,
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '{..., 99, 100}, {101, 102, ..., 198, 199}, {200, 201, ...}',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '{..., 99, 101}, {101, 102, ..., 198, 199}, {201, 201, ...}',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '{..., 99}, {101, 102, ..., 198, 199}, {201, ...}',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '{...99, 100}, {101, 102, ..., 198, 199}, {200, 201, ...}',
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
          'You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a sequence of digits. A PIN is valid if it consists of four digits, at least two of which are different. You have identified the following valid equivalence partitions:',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          'Variable: PIN code length',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          '• The partition “length correct” - four-digit PINs',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          '• The partition “length incorrect” - PINs with length other than 4',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          'Variable: Number of different digits',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          '• The partition “number of different digits correct” - PINs with at least two different digits',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          '• The partition “number of different digits incorrect” - PINs with all digits being the same',
        ],
        [
          QuizMarkdownType.BREAK,
          '',
        ],
        [
          QuizMarkdownType.TEXT,
          'Which of the following is a MINIMUM set of input test data that covers all identified equivalence partitions?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1, 1111, 1234',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '111, 1111, 1112',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1, 12345',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '12345, 1234',
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
          'Which of the following is a factor that contributes to a successful review?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Ensure management participate as reviewers',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Split large work products into smaller parts',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Set reviewer evaluation as an objective',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Plan to cover one document per review',
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
          'Which type of review is performed by technically qualified reviewers and led by a moderator?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Technical review',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Informal review',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Inspection',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Walkthrough',
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
          'Validation is concerned with meeting ____________, while verification is concerned with meeting ____________, so this would be correct if we replaced “validating” with “verifying.”',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'user requirements and expectations; specified requirements',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'specified requirements; user requirements and expectations',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'debugging goals; testing goals',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'testing goals; debugging goals',
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
          'The "absence-of-defects fallacy" is one of the principles of testing. Which of the following is an example of addressing this principle in practice?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Explaining that it is not possible for testing to show the absence of defects',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Supporting the end users to perform acceptance testing',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Ensuring that no implementation defects remain in the delivered system',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Modifying tests that cause no failures to ensure few defects remain',
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
          'Evaluate: The testing role is primarily responsible for test monitoring and control, while the test management role is primarily responsible for test planning and test completion.',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'False',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'True',
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
          'Which of the following statements about the independence of testing is CORRECT?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Developers’ familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Independent testing requires testers who are outside the developer’s team and ideally from outside the organization, however these testers find it difficult to understand the application domain',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Testers from outside the developer’s team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release',
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
          'What is the main objective of an informal review?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Evaluating quality and building confidence',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Detecting anomalies',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Generating new ideas',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Motivating authors to improve',
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
          'Which review type is the most formal and follows the complete generic review process?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Technical review',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Informal review',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Inspection',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Walkthrough',
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
          'In which review type is the author not allowed to act as the review leader or scribe?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Technical review',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Informal review',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Inspection',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Walkthrough',
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
          'Which review type is led by the author and serves various objectives such as generating new ideas and motivating authors to improve?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Technical review',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Informal review',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Inspection',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Walkthrough',
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
          'Which type of review focuses primarily on detecting anomalies and does not require formal documented output?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Technical review',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Informal review',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Inspection',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Walkthrough',
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
          'What is one of the objectives of a technical review?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Collecting metrics for the SDLC',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Gaining consensus and making decisions on technical problems',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Providing a platform for informal discussion',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Documenting all anomalies found',
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
          'Which review type has the primary objective of finding the most anomalies and also collects metrics to enhance the SDLC?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Technical review',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Informal review',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Inspection',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Walkthrough',
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
          'What is one of the objectives of a walkthrough?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Detecting anomalies without formal documentation',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Educating reviewers and building consensus',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Documenting metrics to improve the inspection process',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Implementing technical solutions immediately',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'While working on a certain project, you must exclude system integration testing from testing, although the test strategy requires this test level. This deviation should be documented in the project ________.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Test plan'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'User requirements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Exit criteria'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Agile Manifesto'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a purpose of a test plan?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To define test data and expected results for component tests and component integration tests'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To define as exit criteria from the component test level that “100% statement coverage and 100% branch coverage must be achieved”'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To describe what fields the test progress report shall contain and what should be the form of this report'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To explain why system integration testing will be excluded from testing, although the test strategy requires this test level'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following activities in the test process makes the MOST use of test progress reports?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Test design',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Test completion',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Test analysis',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Test planning',
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
          'When is a test completion report typically prepared?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During test completion',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During test analysis',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Before test planning is finalized',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During the test design phase',
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
          'What sources of information does a test completion report typically use?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Test progress reports and other relevant data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Project planning documents and schedules',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Defect logs and incident reports only',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
