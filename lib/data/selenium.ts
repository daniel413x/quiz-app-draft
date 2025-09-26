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
  ],
} as QuizDataObject;
