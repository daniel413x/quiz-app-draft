/* eslint-disable linebreak-style */
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Module V',
  slug: 'module-v',
  category: {
    slug: 'programming',
  },
  questions: [

    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which feature of Selenium IDE allows for the use of loops and conditions in test scripts?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Selenese Commands',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Flow Control',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript Integration',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Add-ons',
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
          'Which WebDriver method is used to switch to a different frame by index?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.switchTo().frameByIndex(index)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.switchTo().frame(index)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.switchTo().frameIndex(index)',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.switchTo().frameNumber(index)',
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
          'Which component of Selenium RC serves as a server to interpret and execute Selenese commands?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Selenium Server',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Selenium Client',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Selenium IDE',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Selenium Grid',
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
          'In Selenium Grid, what is the role of a hub?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It executes the test cases',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It manages the test environment',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It distributes test cases to various nodes',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It records and replays test scripts',
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
          'Which type of wait in WebDriver waits for a specific condition to occur before proceeding further in the code?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Implicit Wait',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Explicit Wait',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Thread.sleep()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Fluent Wait',
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
          'Which command in Selenium IDE is used to pause the execution of a test for a specific time?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'wait',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'pause',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'delay',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'sleep',
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
          'Which Selenium method is used to find an element by its ID?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'findElement(By.id("elementID"))',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'getElementById("elementID")',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'selectElementById("elementID")',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'locateElementById("elementID")',
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
          'What was a key limitation of Selenium RC?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It did not support running tests in multiple browsers',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It required a server to interact with browsers',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It could only be used on Windows systems',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It did not support JavaScript',
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
          'What is the main advantage of using Selenium Grid?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It allows for the recording of test scripts',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It enables parallel test execution across different machines',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It simplifies writing tests with a graphical interface',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It provides support for mobile test automation',
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
          'Which method is used to close the current browser window in Selenium WebDriver?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.quit()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.close()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.exit()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.terminate()',
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
          'What is the primary purpose of Selenium IDE?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To execute tests in parallel across multiple machines',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To record and playback test scripts',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To write tests using the WebDriver API',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To run tests on different web browsers simultaneously',
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
          'Which WebDriver method is used to accept a browser alert?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.alert().accept()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.switchTo().alert().accept()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.switchTo().alert().confirm()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.acceptAlert()',
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
          'Which method is used to close the current browser window in Selenium WebDriver?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.quit()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.close()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.exit()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.terminate()',
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
          'Which WebDriver method is used to switch to a different frame by index?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.switchTo().frameByIndex(index)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.switchTo().frame(index)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.switchTo().frameIndex(index)',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.switchTo().frameNumber(index)',
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
          'Which WebDriver method is used to find an element by its ID?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'findElement(By.id("elementID"))',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'getElementById("elementID")',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'selectElementById("elementID")',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'locateElementById("elementID")',
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
          'Which type of wait in WebDriver waits for a specific condition to occur before proceeding further in the code?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Implicit Wait',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Explicit Wait',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Thread.sleep()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Fluent Wait',
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
          'Which WebDriver method is used to accept a browser alert?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.alert().accept()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.switchTo().alert().accept()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.switchTo().alert().confirm()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.acceptAlert()',
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
          'What is the role of the WebDriver in Selenium?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To record and playback test scripts',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To interact with the web browser directly',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To manage test environment configuration',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To execute tests in parallel across machines',
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
          'Which WebDriver method is used to navigate to a new URL?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.get("URL")',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.navigate().to("URL")',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.open("URL")',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.goTo("URL")',
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
          'Which method is used to maximize the browser window in WebDriver?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.window().maximize()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.maximizeWindow()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.browser().maximize()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.maximize()',
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
          'Which WebDriver method is used to perform a click operation on a web element?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.performClick()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.click()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.executeClick()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.triggerClick()',
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
          'Which WebDriver method is used to retrieve the current URL of the webpage?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.getUrl()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.currentUrl()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.retrieveUrl()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.getCurrentUrl()',
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
          'In WebDriver, the ___________ communicates with the __________, which communicates back and forth with the ___________.',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'client library, browser driver, browser',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'browser driver, browser, client library',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'client library, browser, browser driver',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'browser, client library, browser driver',
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
          'Which of the following is NOT true of Selenium?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It cannot be integrated with frameworks like JUnit',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is open source',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can mimic user actions',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can work with many high-level coding languages',
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
          'What is the main purpose of the Page Object Model (POM) in Selenium testing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To execute tests in parallel',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To separate the test scripts from the underlying page structure',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To generate test reports automatically',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To enhance test execution speed',
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
          'Which of the following is a key benefit of using the Page Object Model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It reduces code duplication',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It allows tests to run faster',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It supports mobile automation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It integrates seamlessly with Selenium IDE',
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
          'In the Page Object Model, what does each class typically represent?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A test case',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A web page or part of a web page',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A test suite',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A Selenium driver instance',
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
          'How does the Page Object Model promote maintainability in test automation?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By allowing tests to be written without any programming knowledge',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By separating test logic from UI elements',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By generating automatic reports',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By minimizing hardware requirements',
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
          'Which principle is essential to the Page Object Model design pattern?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Code redundancy',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Single Responsibility Principle',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Use of global variables',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Complex code structures',
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
          'The main purpose of Selenium is  ________',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To automate web application testing',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To write tests in a given-when-then format',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To use a BDD approach to testing',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To employ testing ameneties such as annotations, grouping, sequencing, and parameterization of tests',
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
          'In _________, Gherkin syntax is used, which allows for writing tests in a very human-readable format',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cucumber',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'TestNG',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Selenium',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Acceptance test automation',
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
          'In _________, Gherkin syntax is used, which allows for writing tests in a very human-readable format',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cucumber',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'TestNG',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Selenium',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Acceptance test automation',
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
          'TestNG was designed based on the idea of improving aspects of ______ and _______.',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JUnit and NUnit',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cucumber and BDD',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Selenium and test automation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Component testing and component integration testing',
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
          'Which WebDriver method is used to retrieve the title of the current web page?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.getTitle()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.pageTitle()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.retrieveTitle()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.currentPageTitle()',
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
          'What is the function of the WebDriverWait class in Selenium?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To wait for a page to load completely',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To wait for a specific condition to occur before proceeding',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To introduce random delays in test execution',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To set a timeout for all WebDriver operations',
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
          'Which WebDriver method would you use to perform a double-click action?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.doubleClick()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.actions().doubleClick()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.executeDoubleClick()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.performDoubleClick()',
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
          'What is the role of the WebDriver in Selenium?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To interact with the web browser directly',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To provide a user interface for creating test scripts',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To generate reports automatically',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To execute tests on a remote machine',
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
          'Which WebDriver method is used to open a URL in the browser?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.launch("URL")',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.get("URL")',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.navigateTo("URL")',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.open("URL")',
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
          'Which method in WebDriver is used to find a web element using CSS selectors?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.findElement(By.cssSelector("selector"))',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.getElementByCss("selector")',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.locateElementByCss("selector")',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.selectElementByCss("selector")',
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
          'How does Selenium WebDriver execute JavaScript commands in the browser?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the executeScript() method',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the runJavaScript() method',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the eval() method',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the scriptRunner() method',
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
          'Which of the following is true about WebDriver?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'WebDriver interacts with browsers using native support',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'WebDriver only supports desktop browsers',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'WebDriver requires a Selenium Grid to run',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'WebDriver can record and playback tests',
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
          'Which WebDriver method is used to simulate typing into an input field?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.sendKeys("text")',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.type("text")',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.input("text")',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.enterText("text")',
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
          'Evaluate: Selenium is a dependency of TestNG.',
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
          'What is the primary purpose of TestNG in test automation?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To provide a user interface for creating test scripts',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To provide a flexible framework for writing and running tests',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To generate automatic test reports',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To automate web applications using Selenium',
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
          'Which annotation in TestNG is used to define a method as a test case?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@BeforeTest',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@Test',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@AfterTest',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@TestCase',
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
          'How can you define test dependencies in TestNG?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the dependsOnMethods attribute in the @Test annotation',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the depends attribute in the @Test annotation',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the priority attribute in the @Test annotation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the order attribute in the @Test annotation',
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
          'Which feature of TestNG allows for running the same test with multiple sets of data?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Test Suites',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Data Providers',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Test Groups',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Listeners',
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
          'In TestNG, which annotation is used to execute a method before any test method is executed within a test class?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@BeforeClass',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@BeforeMethod',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@BeforeSuite',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@BeforeTest',
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
          'Which TestNG annotation is used to handle exceptions in test methods?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@HandleExceptions',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@ExpectedExceptions',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@Test(expectedExceptions = Exception.class)',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@CatchExceptions',
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
          'Which XML file is used to configure and run TestNG tests?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'testng.xml',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'test-config.xml',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'test-run.xml',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'test-suite.xml',
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
          'What is the function of the @AfterMethod annotation in TestNG?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It runs after all test methods in a class',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It runs after each test method',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It runs after the entire test suite',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It runs after each test class',
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
          'Which feature of TestNG allows for grouping tests into specific categories?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Test Groups',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Data Providers',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Test Suites',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Listeners',
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
          'Which annotation is used in TestNG to specify the priority of test methods?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@Priority',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@Test(priority = n)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@Order',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '@Rank',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
  ],
} as QuizDataObject;
