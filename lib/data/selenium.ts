import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Selenium',
  slug: 'selenium',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used in Cucumber to link a step definition to a Gherkin "Given" step?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, '@When']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, '@Then']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, '@Given']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, '@Before']],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main advantage of using the Page Object Model in Selenium tests?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'It separates test steps from annotations']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'It separates test logic from page structure']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'It separates object locators from object interaction logic']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'It prevents the need for assertions']],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which WebDriver method is used to navigate to a URL?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'navigate().to()']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'get()']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'open()']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'visit()']],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in Selenium is used to find an element by its ID?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'findElementByName']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'findElementByClassName']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'findElement(By.id("..."))']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'getElementById']],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which file extension is used for Cucumber feature files?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, '.gherkin']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, '.cucumber']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, '.feature']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, '.step']],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the Page Object Model, what does each page class typically contain?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'The locators for elements on the page only']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Test assertions, element locators, and element interaction methods']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'The locators and methods to interact with elements']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'The \'Given When Then\' annotated steps and test execution logic']],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What keyword is used in Gherkin to define an expected result?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'When']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Then']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'And']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'But']],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used in Cucumber to define code to run before each scenario?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, '@Setup']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, '@Before']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, '@Init']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, '@Prepare']],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the correct syntax to click an element using Selenium?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.CODE, 'driver.findElement(By.id("submit")).click();']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.CODE, 'click(By.id("submit"));']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.CODE, 'submit.click();']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.CODE, 'driver.click("submit")']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which class in Selenium handles dropdowns?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Dropdown']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Select']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'DropDownHandler']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'OptionSelector']],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the Page Object Model, how are the page methods typically named?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'With the name of the test file']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'According to their XPath']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Describing the action performed']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'With capitalized tags']],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Gherkin keyword is used to describe the context or state of the system before an action?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Given']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'When']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Then']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Because']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a Cucumber step definition, how do you extract a parameter from a step like'],
        [QuizMarkdownType.INLINE_CODE, '"I enter username John"?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.CODE, '@When("I enter username {word}")']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.CODE, '@When("I enter username $1")']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.CODE, '@When("I enter username <John>")']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.CODE, '@When("I enter username [a-zA-Z]+")']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which WebDriver method is used to switch to an alert pop-up?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'driver.switchTo().popup()']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'driver.popup().alert()']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'driver.switchTo().alert()']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'driver.handleAlert()']],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Page Object Model, what is the recommended visibility of WebElement locators?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'public']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'private']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'protected']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'default (package-private)']],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a Selenium/Cucumber project for a healthcare application following the Page Object Model, in which of the following files would you expect to find a method annotated with'],
        [QuizMarkdownType.INLINE_CODE, '@Given'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'PatientProfileSteps.java']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'PatientProfilePage.java']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'patient-profile-login.feature']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Main.java']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your Selenium/Cucumber project supporting functional testing efforts for a healthcare enterprise follows the Page Object Model and contains the classes'],
        [QuizMarkdownType.INLINE_CODE, 'pages/PatientProfilePage.java'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'steps/PatientProfilePageSteps.java'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'runners/PatientProfilePageRunner.java'],
        [QuizMarkdownType.TEXT, '. Which statement is true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'PatientProfilePage'], [QuizMarkdownType.TEXT, 'is initialized in'], [QuizMarkdownType.INLINE_CODE, 'PatientProfilePageSteps']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'PatientProfilePageSteps'], [QuizMarkdownType.TEXT, 'is initialized in'], [QuizMarkdownType.INLINE_CODE, 'PatientProfilePage']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'PatientProfilePageSteps'], [QuizMarkdownType.TEXT, 'is initialized in'], [QuizMarkdownType.INLINE_CODE, 'PatientProfilePageRunner']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'PatientProfilePage'], [QuizMarkdownType.TEXT, 'is initialized in'], [QuizMarkdownType.INLINE_CODE, 'PatientProfilePageRunner']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the following pattern called in a Cucumber'],
        [QuizMarkdownType.INLINE_CODE, '.feature'],
        [QuizMarkdownType.TEXT, 'file?'],
        [QuizMarkdownType.CODE, `@axe-core
Feature: axe-core results for any page

  Scenario: Axecore generates results
    Given I am on the route "<route>"
    When I assess the axe-core violations labeled "<route>" in Extent reports
    Then there should be no violations

    Examples:
      | route          |
      | /          |
      | /about          |
      | /features          |
      | /pricing          |
      | /contact          |
`],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Scenario outline']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Scenario template']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Test outline']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Test template']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a Gherkin Scenario, what keyword is typically used to describe an action taken by the user?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'When']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Then']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Given']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'And']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a Gherkin file, what keyword is used to define reusable context executed before each Scenario?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Given']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Background']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'BeforeEach']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Setup']] },
      ],
      correctAnswer: '1',
    },

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

  ],
} as QuizDataObject;
