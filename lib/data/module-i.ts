import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Module I',
  slug: 'module-i',
  category: {
    slug: 'programming',
  },
  questions: [

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of the throw keyword in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To explicitly throw an exception from a method or block of code'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To declare that a method may throw an exception'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To catch an exception thrown by another method'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To suppress an exception'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of the throws keyword in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To declare that a method may throw one or more exceptions'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To explicitly throw an exception from a method or block of code'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To catch an exception thrown by another method'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To suppress an exception'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which keyword would you use to throw a custom exception in a method?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'throw'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'throws'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'catch'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'try'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which keyword would you use to indicate that a method might throw an IOException?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'throws'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'throw'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'catch'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'try'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code snippet:'],
        [QuizMarkdownType.CODE, `
public void readFile(String filePath) throws IOException {
    FileReader file = new FileReader(filePath);
    if (file == null) {
        throw new IOException("File not found");
    }
}
        `],
        [QuizMarkdownType.TEXT, 'What is the purpose of the throws keyword in the method declaration?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To declare that the readFile method may throw an IOException'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To explicitly throw an IOException when the file is not found'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To catch an IOException if it occurs'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To suppress any IOException that might occur'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the @BeforeClass annotation in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run once before any of the test methods in the class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run before each test method in the class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be ignored during test execution'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run once after all the test methods in the class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the @Test annotation in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method is a test method'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run before each test method in the class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be ignored during test execution'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run once after all the test methods in the class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the @Before annotation in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run before each test method in the class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run once before any of the test methods in the class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be ignored during test execution'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run once after all the test methods in the class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the @Ignore annotation in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method or class should be ignored during test execution'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run before each test method in the class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run once before any of the test methods in the class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run once after all the test methods in the class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the @After annotation in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run after each test method in the class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run once before any of the test methods in the class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be ignored during test execution'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run once after all the test methods in the class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the @AfterClass annotation in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run once after all the test methods in the class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run before each test method in the class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be run once before any of the test methods in the class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify that a method should be ignored during test execution'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JUnit annotation specifies a method to be run once before any of the test methods in the class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@BeforeClass'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Before'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Test'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@AfterClass'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JUnit annotation specifies a method to be run before each test method in the class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Before'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@BeforeClass'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@After'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@AfterClass'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JUnit annotation specifies a method to be ignored during test execution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Ignore'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Test'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@After'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Before'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JUnit annotation specifies a method to be run once after all the test methods in the class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@AfterClass'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@After'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@BeforeClass'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Before'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a typical use case for the @BeforeClass annotation in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To set up a database connection that will be used by all test methods'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To load data from the database before each test'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To clean up resources after each test'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To ignore a test method during test execution'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a typical use case for the @Before annotation in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To load data from the database before each test'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To set up a database connection that will be used by all test methods'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To clean up resources after all tests are run'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To ignore a test method during test execution'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is JUnit in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A unit-testing framework'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A build automation tool'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A dependency management tool'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A logging framework'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of unit testing in software development?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Testing the program\'s individual components to ensure they work as intended'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Testing the program\'s performance under heavy load'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Testing the program\'s integration with other systems'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Testing the program\'s user interface'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does Maven use to decide how to build your projects?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'POM (Project Object Model)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Build Lifecycle'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Build Script'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Configuration File'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the first step in the Maven build lifecycle?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'validate'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'compile'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'test'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'package'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'During which phase does Maven ensure that your project has all the necessary components?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'validate'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'compile'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'test'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'verify'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which phase of the Maven build lifecycle compiles the source code?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'compile'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'validate'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'test'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'package'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens if there are errors in the source code during the compile phase?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The compile phase will fail'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The validate phase will fail'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The test phase will fail'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The package phase will fail'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'During which phase does Maven run all of your unit tests?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'test'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'validate'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'compile'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'package'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will happen if tests do not pass during the test phase?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The test phase will fail'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The validate phase will fail'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The compile phase will fail'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The package phase will fail'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'During which phase does Maven package the compiled code into a JAR or WAR file?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'package'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'compile'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'test'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'verify'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which phase runs all integration tests to ensure all pieces are working together?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'verify'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'test'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'validate'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'compile'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the install phase in the Maven build lifecycle?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To install the created package to your local repository'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To deploy the package to Maven Central'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To run all integration tests'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To compile the source code'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where is the created package installed during the install phase?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'In the local repository (.m2)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'In the global repository'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In the project directory'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'On Maven Central'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the final phase of the Maven build lifecycle?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'deploy'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'install'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'verify'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'package'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'During which phase does Maven put the created package on Maven Central?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'deploy'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'install'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'package'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'verify'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the validate phase in the Maven build lifecycle?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that your project has all the necessary components'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To compile the source code'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To run all unit tests'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To package the compiled code into a JAR or WAR file'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which phase involves creating a JAR or WAR file from the compiled code?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'package'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'install'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'deploy'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'compile'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the verify phase in the Maven build lifecycle?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To run all integration tests to ensure all pieces are working together'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that your project has all the necessary components'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To compile the source code'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To package the compiled code into a JAR or WAR file'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the compile phase do in the Maven build lifecycle?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Compiles the source code'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Runs all unit tests'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Packages the compiled code into a JAR or WAR file'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Ensures that your project has all the necessary components'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the test phase do in the Maven build lifecycle?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Runs all unit tests'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Compiles the source code'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Packages the compiled code into a JAR or WAR file'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Ensures that your project has all the necessary components'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the install phase do in the Maven build lifecycle?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Installs the created package to your local repository'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Deploys the package to Maven Central'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Runs all integration tests'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Compiles the source code'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the flush() method in PrintWriter?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that all data is written to the underlying stream or file'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To close the PrintWriter'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To clear the buffer without writing data to the stream or file'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To reset the PrintWriter to its initial state'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens if you do not call flush() on a PrintWriter before closing it?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Some data might not be written to the underlying stream or file'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The PrintWriter will throw an IOException'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The buffer will be automatically flushed'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The PrintWriter will close without any issues'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code block:'],
        [QuizMarkdownType.CODE, `PrintWriter writer = new PrintWriter(new FileWriter("example.txt"));
writer.print("Hello, World!");
// Missing writer.flush();
writer.close();`],
        [QuizMarkdownType.TEXT, 'What is the potential issue with the above code?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Some data might not be written to "example.txt" because flush() is not called'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The file will be corrupted'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'An IOException will be thrown'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The file will be empty'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you ensure all data is written to the file using PrintWriter?'],
        [QuizMarkdownType.CODE, `PrintWriter writer = new PrintWriter(new FileWriter("example.txt"));
writer.print("Hello, World!");
writer.flush();
writer.close();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By calling writer.flush() before closing the writer'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By closing the writer without calling flush()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By calling writer.reset() before closing the writer'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By calling writer.clear() before closing the writer'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the output of the following code?'],
        [QuizMarkdownType.CODE, `PrintWriter writer = new PrintWriter(new FileWriter("example.txt"));
writer.print("Hello, ");
writer.print("World!");
writer.flush();
writer.close();

BufferedReader reader = new BufferedReader(new FileReader("example.txt"));
String line = reader.readLine();
System.out.println(line);
reader.close();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Hello, World!'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Hello,'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'World!'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The file will be empty'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the recommended path type to use when working within the same project in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Relative path'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Absolute path'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Universal path'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'File path'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which class is used for reading bytes from a file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileInputStream'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileReader'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'BufferedReader'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'InputStreamReader'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which class is used for writing bytes to a file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileOutputStream'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileWriter'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'BufferedWriter'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'OutputStreamWriter'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of using a full path when working with files outside the current project?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify the exact location of the file in the filesystem'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To improve file access performance'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To make the file path shorter'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To avoid using relative paths'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code snippet:'],
        [QuizMarkdownType.CODE, `String inputFile = "Java\\Day2\\FileIO\\fileInput.txt";
String outputFile = "Java\\Day2\\FileIO\\fileOutput.txt";
FileInputStream fis = new FileInputStream(inputFile);
FileOutputStream fos = new FileOutputStream(outputFile);`],
        [QuizMarkdownType.TEXT, 'What is the likely reason for using these specific paths in the code?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The code is using relative paths because the files are within the same project'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The code is using full paths for better performance'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The code is accessing files located on a different machine'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The code is using incorrect paths'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is encapsulation in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation is the wrapping up of related state and behavior into a single class, allowing control over how that state and behavior are modified and accessed'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation is the process of inheriting properties and methods from another class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation is a way to execute multiple threads simultaneously'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation is a method for catching and handling exceptions'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which access modifier allows everyone to see the property or method?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'public'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'private'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'protected'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'default'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which access modifier restricts access to only within the same class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'private'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'public'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'protected'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'default'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which access modifier allows access within the same package?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'protected'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'private'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'public'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'default'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of getters and setters in encapsulation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To control access and modification of the properties of a class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To inherit properties from another class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To execute multiple threads'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To handle exceptions'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does encapsulation help with data protection in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By restricting direct access to some of an object\'s components and providing controlled access through methods'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By allowing inheritance from protected classes'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By enabling multiple threads to access data simultaneously'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By allowing public access to all class properties and methods'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the @Override annotation in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To indicate that a method is intended to override a method in a superclass'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To mark a method as deprecated'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To indicate that a method should not be overridden'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To mark a method for garbage collection'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What benefit does using the @Override annotation provide during compilation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It helps the compiler catch errors'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It prevents the method from being used outside its package'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows the method to be run in a separate thread'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It makes the method final and prevents further overriding'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Speaking generally about polymorphism,'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Compile-time polymorphism is associated with method overloading, while runtime polymorphism is associated with method overriding'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Compile-time polymorphism is associated with method overriding, while runtime polymorphism is associated with method overloading'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Compile-time polymorphism is associated with method return types, while runtime polymorphism is associated with method overloading'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No statement makes sense.'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following program will compile and run:'],
        [QuizMarkdownType.CODE, `List<Animal> animals = new ArrayList<>();
animals.add(new Animal());
animals.add(new Cat());`],
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
        [QuizMarkdownType.TEXT, 'The following program will compile and run:'],
        [QuizMarkdownType.CODE, `class Animal {}
class Cat extends Animal {}
class Tiger extends Cat {}

public class Main {
  public static void main(String[] args) {
    List<? super Animal> animals = new ArrayList<>();
    animals.add(new Animal());
    animals.add(new Cat());
    animals.add(new Tiger());
  }
}`],
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
        [QuizMarkdownType.TEXT, 'What does the concept of abstraction in Java entail?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction involves showing only what needs to be shown, hiding the implementation details'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction involves creating concrete classes that can be instantiated'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction involves running multiple threads simultaneously'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction involves managing the memory allocation of objects'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT true of abstract classes?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstract classes can be instantiated'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'If a class defines one or more abstract methods, then the class itself must be declared abstract'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'An abstract class can declare both abstract and concrete methods'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'An abstract class can be subclassed'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What keyword is used to inherit a class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'extends'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'implements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'inherits'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'super'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which keyword is used to inherit an interface in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'implements'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'extends'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'inherits'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'super'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How many classes can a single class extend in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'One'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiple'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'None'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Any number'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does a'],
        [QuizMarkdownType.INLINE_CODE, 'super()'],
        [QuizMarkdownType.TEXT, 'call do in a subclass constructor?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Calls the no-arg constructor of the parent class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Calls the no-arg constructor of the same class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Calls a method from the parent class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Calls a static method from the parent class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which answer is true?'],
        [QuizMarkdownType.CODE, `public Segway(String type, int numWheels, String battery) {
    super(type, numWheels);
    this.battery = battery;
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'super(type, numWheels)'],
            [QuizMarkdownType.TEXT, 'is a call to the parameterized constructor of the parent'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'super(type, numWheels)'],
            [QuizMarkdownType.TEXT, 'is a call to an argumentless constructor of the parent'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'super(type, numWheels)'],
            [QuizMarkdownType.TEXT, 'is a call to the static constructor of the parent'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'super(type, numWheels)'],
            [QuizMarkdownType.TEXT, 'is a call to the factory constructor of the parent'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When'],
        [QuizMarkdownType.INLINE_CODE, 'super()'],
        [QuizMarkdownType.TEXT, 'is called in a constructor with no arguments,'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It calls the no-arg constructor of a parent'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It calls both the no-arg and parameterized constructor of a parent'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It calls the parameterized constructor of a parent'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It calls a no-arg static constructor'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is true about interfaces in Java regarding abstraction?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Interfaces are 100% abstract and every method is abstract implicitly'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Interfaces can have concrete methods'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Interfaces can only be implemented by one class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Interfaces can be instantiated directly'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is true about an abstract class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'An abstract class can have abstract methods and cannot be instantiated'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'An abstract class must implement all abstract methods from its parent class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'An abstract class can be instantiated directly'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'An abstract class cannot have concrete methods'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which keyword is used to define an abstract class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'abstract'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'interface'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'extends'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'implements'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Can an abstract class in Java have concrete (non-abstract) methods?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Only if the class is not inherited'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only if the methods are private'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which keyword is used to inherit an abstract class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'extends'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'implements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'inherits'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'abstract'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What must a concrete subclass do with the abstract methods of its abstract superclass?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It must implement all the abstract methods'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It can ignore the abstract methods'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It must redefine the class as abstract'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It can choose to implement some methods and leave others abstract'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why can an abstract class not be instantiated in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it may contain abstract methods that do not have a body'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is a rule of the Java language'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it does not have a default constructor'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it extends another class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in the Vehicle class is an example of an abstract method?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'start()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getType()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'setNumWheels(int numWheels)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Vehicle()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which keyword is used to define an abstract method in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'abstract'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'final'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'static'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'native'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How are elements in an array stored in memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'In consecutive memory addresses'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'In non-contiguous memory locations'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Randomly in memory'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'In a linked list structure'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which answer is true?'],
        [QuizMarkdownType.CODE, 'int[] numbers1 = {1, 2, 3};'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers1'],
            [QuizMarkdownType.TEXT, 'creates an array with 3 filled memory locations'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers1'],
            [QuizMarkdownType.TEXT, 'creates an array with 3 spots allocated but no real values'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers1'],
            [QuizMarkdownType.TEXT, 'creates an array with 3 spots allocated randomly in memory'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers1'],
            [QuizMarkdownType.TEXT, 'is a hash object'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which answer is true?'],
        [QuizMarkdownType.CODE, 'int[] numbers1 = {1, 2, 3};'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers1'],
            [QuizMarkdownType.TEXT, 'creates an array with 3 filled memory locations'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers1'],
            [QuizMarkdownType.TEXT, 'creates an array with 3 spots allocated but no real values'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers1'],
            [QuizMarkdownType.TEXT, 'creates an array with 3 spots allocated randomly in memory'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers1'],
            [QuizMarkdownType.TEXT, 'is a hash object'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of loop always runs at least once?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Do-while loops'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Enhanced for loops'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Any'],
            [QuizMarkdownType.INLINE_CODE, 'Iterator'],
            [QuizMarkdownType.TEXT, 'operation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'While loops'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the hashCode() method in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To generate a unique hash value for an object, which is used by hashing collections to determine locations'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To compare two objects for equality'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To convert an object into a string representation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To clone an object'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When must the hashCode() method be overridden in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'When the equals() method is overridden'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'When the toString() method is overridden'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'When the clone() method is overridden'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'When the finalize() method is overridden'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it necessary to override hashCode() when overriding equals()?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that equal objects have the same hash value, maintaining the contract between equals() and hashCode()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To make objects immutable'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To enable objects to be compared lexicographically'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that objects can be serialized'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the equals() method in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To determine if two objects of a class are equivalent'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To generate a unique hash value for an object'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To convert an object into a string representation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To clone an object'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does it mean if two objects are considered equivalent by the equals() method?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They refer to the same place in memory'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They have the same hash code'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Every value within the object is equal'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 & 3'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method should be overridden when equals() is overridden to maintain the contract between them?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'hashCode()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'toString()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'clone()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'finalize()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a common use case for overriding the equals() method in a class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To compare the contents of two objects for equality rather than their references'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To generate a unique identifier for each object'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To provide a string representation of the object'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To clean up resources before an object is destroyed'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What should be the result of equals() when comparing an object to itself?'],
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
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It depends on the object’s contents'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following answer about the method'],
        [QuizMarkdownType.INLINE_CODE, 'hashCode()'],
        [QuizMarkdownType.TEXT, 'is WRONG:'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'hashCode()'],
            [QuizMarkdownType.TEXT, 'generates string values'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'hashCode()'],
            [QuizMarkdownType.TEXT, 'generates integer values'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'hashCode()'],
            [QuizMarkdownType.TEXT, 'generates unique values'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'hashCode()'],
            [QuizMarkdownType.TEXT, 'has a contract with'],
            [QuizMarkdownType.INLINE_CODE, 'equals()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a key characteristic of lists in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists are ordered and indexed'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists are unordered and use key-value pairs'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists can contain duplicate keys'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists do not allow null elements'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'From which class do all lists in the Java Collections API inherit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'List'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'ArrayList'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Collection'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedList'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What types of elements can Java lists work with?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Only objects'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only primitive types'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects and primitive types'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only strings'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which wrapper class is used for the primitive type int in Java lists?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Integer'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Int'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'intWrapper'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Number'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why does Java provide wrapper classes for primitive types when working with lists?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because lists in Java can only store objects, not primitive types'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To improve the performance of list operations'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow primitive types to be used with generics'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure type safety in list operations'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where are the elements of a linked list stored in memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Non-consecutive memory locations'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Consecutive memory locations'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In a single block of memory'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Randomly in memory'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does each node in a linked list contain?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'At least one pointer to the next node and data at that node'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only data'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiple pointers to other nodes'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'An index and data'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Do linked lists in Java have indexes?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'No'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Only for the first node'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only for the last node'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the time complexity for looking up an element in a linked list?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'O(1)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'O(log n)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n log n)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the time complexity for inserting an element at the front of a linked list?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'O(1)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'O(log n)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n log n)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the time complexity for inserting an element at the tail of a linked list?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'O(1)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'O(log n)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n log n)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the time complexity for inserting an element anywhere other than the front or tail of a linked list?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'O(1)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'O(log n)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n log n)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a linked list, how does the capacity relate to the size?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Capacity always equals size'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Capacity is always greater than size'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Capacity is always less than size'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Capacity and size are unrelated'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Are Java linked lists singly linked or doubly linked?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly linked'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly linked'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It depends on the implementation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which data structure characteristic makes linked lists efficient for insertion and deletion at the front or tail?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Non-consecutive memory locations and pointers to the next node'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Indexed access to elements and contiguous memory locations'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Contiguous memory allocation and efficient node traversal'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Fixed size array allocation and enforced efficient types'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which data structure characteristic makes linked lists efficient for insertion and deletion at the front or tail?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Non-consecutive memory locations and pointers to the next node'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Indexed access to elements and contiguous memory locations'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Contiguous memory allocation and efficient node traversal'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Fixed size array allocation and enforced efficient types'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do maps in Java operate?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'On key-value pairs'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'On ordered elements with indexes'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'On sequential access'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'On stacks'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a key requirement for keys in a Java map?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Keys must be 100% unique'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Keys can be duplicated'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Keys must be of the same type as values'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Keys must be integers'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What can be stored as values in a Java map?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Anything'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only strings'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Only objects'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only integers'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do HashMaps in Java determine the index location for storing elements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the hashCode() method'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the toString() method'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the length of the key'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the value\'s memory address'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the time complexity for lookups in a HashMap?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'O(1)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'O(log n)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n log n)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens in a HashMap when multiple keys have the same hash code?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A linked list is created at that index location'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The keys are discarded'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The values are merged'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The index location is recalculated'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How are HashMaps in Java structured under the hood?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'As arrays of linked lists'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'As arrays of arrays'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'As trees'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'As stacks of linked lists'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Are maps in Java ordered or unordered?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Unordered'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Ordered'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Depends on the implementation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Indexed'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a key characteristic of sets in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Sets are unordered and only contain unique values'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Sets are ordered and indexed'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sets allow duplicate values'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Sets are thread-safe by default'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How are elements in a Java set accessed?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using iterators'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Using indexes'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using key-value pairs'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using pointers'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of values can sets in Java contain?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Only unique values'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only primitive values'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Duplicate values'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only string values'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Do we work directly with indexes in a HashMap?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'No'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Only for insertion'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only for retrieval'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What data structure does Java use to handle hash collisions in HashMaps?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked lists'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Trees'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stacks'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    // @@@@@@

    {
      question: [
        [QuizMarkdownType.TEXT, 'How does Spring WebFlux exemplify the producer-consumer paradigm?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It handles data streams where data producers emit data, and consumers process it asynchronously.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It uses synchronous blocking calls to handle data processing between producers and consumers.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It relies on a single-threaded model to process data sequentially.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It avoids using data streams and focuses on static data processing.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What role do publishers and subscribers play in Spring WebFlux’s implementation of the producer-consumer paradigm?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Publishers act as producers that emit data streams, while subscribers act as consumers that process the data streams.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Publishers and subscribers are not relevant in Spring WebFlux’s data processing model.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Subscribers generate data streams and publishers process them.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Publishers and subscribers both generate and process data streams simultaneously.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main goal of the Producer-Consumer pattern?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To coordinate the production and consumption of items between two separate processes or threads.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure a class has only one instance and provide a global point of access to it.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To provide a way to access the elements of an aggregate object sequentially.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To separate the construction of a complex object from its representation.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which data structure is commonly used to implement the Producer-Consumer pattern?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Tree'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Graph'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What problem does the Producer-Consumer pattern solve?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It solves the problem of coordinating the production and consumption of items between two or more threads or processes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It solves the problem of ensuring a class has only one instance.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It solves the problem of accessing the elements of an aggregate object sequentially.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It solves the problem of separating the construction of a complex object from its representation.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the Producer-Consumer pattern, what is the role of the producer?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The producer is responsible for generating data and placing it into the buffer or queue.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The producer is responsible for consuming data from the buffer or queue.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The producer is responsible for managing the buffer or queue.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The producer is responsible for monitoring the consumption rate.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the Producer-Consumer pattern, what is the role of the consumer?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The consumer is responsible for taking data from the buffer or queue and processing it.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The consumer is responsible for generating data and placing it into the buffer or queue.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The consumer is responsible for managing the buffer or queue.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The consumer is responsible for monitoring the production rate.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a common synchronization primitive used in implementing the Producer-Consumer pattern?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Mutex'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Semaphore'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Spinlock'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Barrier'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can a bounded buffer be implemented in the Producer-Consumer pattern?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using a circular queue with a fixed size.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Using a stack with dynamic resizing.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using a linked list with unlimited size.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using a tree structure with fixed depth.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What issue can arise if the buffer in the Producer-Consumer pattern is not properly synchronized?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Race conditions'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Deadlocks'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Live locks'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Starvation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which approach is commonly used to handle multiple producers and multiple consumers?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using thread-safe queues with synchronization primitives like semaphores and mutexes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Using a single thread for all producers and consumers.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using a linked list with locks.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using separate queues for each producer and consumer.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it important to have a balanced production and consumption rate in the Producer-Consumer pattern?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To prevent the buffer from either overflowing or underflowing.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure the buffer is always full.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To minimize the number of producers and consumers.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To avoid using synchronization primitives.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can overusing the Singleton pattern undermine the principles of object-oriented programming (OOP)?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It can lead to global state, which breaks encapsulation and increases coupling between classes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It encourages the use of inheritance, which is a core principle of OOP.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It promotes polymorphism and makes the system more flexible.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It enforces strict adherence to the single responsibility principle.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In what way does the Singleton pattern conflict with the Open/Closed Principle of object-oriented design?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Singletons require modification of the original class.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Singletons inherently support extension by allowing subclassing.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Singletons help in adhering to the Open/Closed Principle by preventing modification of the class once it is defined.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Singletons simplify the code structure, making it easier to understand and extend.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a common drawback of overusing the Singleton pattern in a large codebase?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It can lead to tightly coupled code and make testing difficult.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It ensures a class has only one instance and provides a global point of access to it.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It encourages the use of global variables, which is generally considered a good practice.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It simplifies the object creation process by using a static method.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why can the Singleton pattern be problematic in a multi-threaded environment?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It can cause synchronization issues if not implemented correctly, leading to multiple instances.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It ensures that all threads can access the same instance without any issues.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It automatically handles thread safety, which can lead to performance overhead.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It prevents the use of lazy initialization in multi-threaded applications.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main purpose of the Singleton design pattern?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure a class has only one instance and provide a global point of access to it.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To create a family of related objects without specifying their concrete classes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To define an interface for creating a single object, but let subclasses alter the type of objects that will be created.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow an object to alter its behavior when its internal state changes.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is commonly used to implement a Singleton in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getInstance()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'createInstance()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'newInstance()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'initInstance()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement is true about the Singleton design pattern?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It ensures a class has only one instance and provides a global point of access to it.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It creates objects without exposing the instantiation logic to the client.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It provides a way to access the elements of an aggregate object sequentially.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows a class to have multiple instances and provides a global point of access to them.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which pattern is often used in conjunction with Singletons for creating objects?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Factory Method'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Prototype'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Adapter'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Decorator'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main advantage of using the Factory Method pattern?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows the client to decide which class to instantiate.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It ensures a class has only one instance and provides a global point of access to it.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It provides a way to access the elements of an aggregate object sequentially.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It separates the construction of a complex object from its representation.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the Singleton pattern, what technique is used to ensure thread safety in a multi-threaded environment?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Double-checked locking'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lazy initialization'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Early initialization'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Static block initialization'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which design pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstract Factory'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Singleton'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Factory Method'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Builder'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main difference between the Factory Method and the Abstract Factory patterns?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Factory Method creates a single object, while Abstract Factory creates families of related objects.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Factory Method ensures a class has only one instance, while Abstract Factory allows multiple instances.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Factory Method uses inheritance, while Abstract Factory uses composition.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Factory Method is a creational pattern, while Abstract Factory is a structural pattern.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to create an object in the Factory Method pattern?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'create()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'build()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'init()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'generate()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of using the Factory Method pattern?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To define an interface for creating an object, but let subclasses decide which class to instantiate.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To create an object without exposing the creation logic to the client and refer to the newly created object through a common interface.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure a class has only one instance and provide a global point of access to it.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To provide a way to access the elements of an aggregate object sequentially.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the flush() method in PrintWriter?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that all data is written to the underlying stream or file'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To close the PrintWriter'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To clear the buffer without writing data to the stream or file'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To reset the PrintWriter to its initial state'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When should you call the flush() method on a PrintWriter?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'After writing data to the PrintWriter, to ensure all data is written out to the underlying stream or file'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Before writing data to the PrintWriter, to clear any existing data in the buffer'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Only when closing the PrintWriter'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only in case of an exception'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the condition in the while loop check for in the given code?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The condition checks for -1, which indicates the end of the stream'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The condition checks for 0, which indicates the end of the stream'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The condition checks for null, which indicates the end of the stream'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The condition checks for EOF, which indicates the end of the stream'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the try-with-resources statement in the given code?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that the InputStream is closed automatically at the end of the try block'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To open the file specified by the path'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To catch any exceptions that occur during file reading'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To convert byte data to characters'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to read a byte of data from the file in the given code?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'read()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getByte()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'readByte()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'get()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which class is used to read bytes from a file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileInputStream'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileReader'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'BufferedReader'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'DataInputStream'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to read a byte from a file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'read()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getByte()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'readByte()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'get()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the try-catch block in file I/O operations?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To handle exceptions that may occur during file I/O operations'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To initialize file streams'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To close file streams'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To open files'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to write a byte to a file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'write()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'putByte()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'writeByte()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'put()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the read() method return when it reaches the end of a file?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '-1'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'EOF'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which class is used to read from a file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileReader'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileWriter'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileInputStream'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileOutputStream'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you create a new file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `File file = new File("example.txt");
boolean result = file.createNewFile();`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `File file = new File("example.txt");
boolean result = file.exists();`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `File file = new File("example.txt");
boolean result = file.mkdir();`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `File file = new File("example.txt");
boolean result = file.delete();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which class is used to write to a file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileWriter'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileReader'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileInputStream'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileOutputStream'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you check if a file exists in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `File file = new File("example.txt");
boolean result = file.exists();`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `File file = new File("example.txt");
boolean result = file.isFile();`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `File file = new File("example.txt");
boolean result = file.isDirectory();`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `File file = new File("example.txt");
boolean result = file.canRead();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to delete a file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'delete()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'remove()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'erase()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'unlink()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the method read() return when it reaches the end of a file?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '-1'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'EOF'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you read a line from a file using BufferedReader?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `BufferedReader reader = new BufferedReader(new FileReader("example.txt"));
String line = reader.readLine();`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `BufferedReader reader = new BufferedReader(new FileReader("example.txt"));
String line = reader.read();`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `BufferedReader reader = new BufferedReader(new FileReader("example.txt"));
String line = reader.readAll();`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `BufferedReader reader = new BufferedReader(new FileReader("example.txt"));
String line = reader.nextLine();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which class is used to read binary data from a file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileInputStream'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileReader'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileBufferReader'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'DataInputStream'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you write a string to a file using FileWriter?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `FileWriter writer = new FileWriter("example.txt");
writer.write("Hello, World!");
writer.close();`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `FileWriter writer = new FileWriter("example.txt");
writer.append("Hello, World!");
writer.close();`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `FileWriter writer = new FileWriter("example.txt");
writer.put("Hello, World!");
writer.close();`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `FileWriter writer = new FileWriter("example.txt");
writer.print("Hello, World!");
writer.close();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in the File class is used to get the absolute path of a file?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getAbsolutePath()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getPath()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getCanonicalPath()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getRealPath()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you create a directory in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `File dir = new File("exampleDir");
boolean result = dir.mkdir();`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `File dir = new File("exampleDir");
boolean result = dir.create();`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `File dir = new File("exampleDir");
boolean result = dir.createNewFile();`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `File dir = new File("exampleDir");
boolean result = dir.make();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in the File class is used to list the contents of a directory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getFiles()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'contents()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'listFiles()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you rename a file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `File oldFile = new File("oldName.txt");
File newFile = new File("newName.txt");
boolean result = oldFile.renameTo(newFile);`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `File oldFile = new File("oldName.txt");
File newFile = new File("newName.txt");
boolean result = oldFile.move(newFile);`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `File oldFile = new File("oldName.txt");
File newFile = new File("newName.txt");
boolean result = oldFile.changeTo(newFile);`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `File oldFile = new File("oldName.txt");
File newFile = new File("newName.txt");
boolean result = oldFile.modify(newFile);`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you copy a file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'Files.copy(Paths.get("source.txt"), Paths.get("destination.txt"), StandardCopyOption.REPLACE_EXISTING);'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `File source = new File("source.txt");
File dest = new File("destination.txt");
boolean result = source.copyTo(dest);`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `File source = new File("source.txt");
File dest = new File("destination.txt");
boolean result = source.moveTo(dest);`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `File source = new File("source.txt");
File dest = new File("destination.txt");
boolean result = source.copy(dest);`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to append data to an existing file in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `FileWriter writer = new FileWriter("example.txt", true);
writer.write("Appending data");
writer.close();`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `FileWriter writer = new FileWriter("example.txt", false);
writer.write("Appending data");
writer.close();`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `FileWriter writer = new FileWriter("example.txt");
writer.append("Appending data");
writer.close();`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `FileWriter writer = new FileWriter("example.txt");
writer.writeAppend("Appending data");
writer.close();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you read binary data from a file using FileInputStream?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `FileInputStream fis = new FileInputStream("example.bin");
int data = fis.read();
while (data != -1) {
  System.out.print((char) data);
  data = fis.read();
}
fis.close();`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `FileInputStream fis = new FileInputStream("example.bin");
int data = fis.readAll();
System.out.print((char) data);
fis.close();`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `FileInputStream fis = new FileInputStream("example.bin");
byte[] data = fis.readBytes();
System.out.print(new String(data));
fis.close();`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `FileInputStream fis = new FileInputStream("example.bin");
int data = fis.readLine();
System.out.print((char) data);
fis.close();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which class is used to buffer characters for efficient reading of text files?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'BufferedReader'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'BufferedWriter'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileReader'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FileBufferReader'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you write binary data to a file using FileOutputStream?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `FileOutputStream fos = new FileOutputStream("example.bin");
fos.write(65);
fos.close();`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `FileOutputStream fos = new FileOutputStream("example.bin");
fos.print(65);
fos.close();`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `FileOutputStream fos = new FileOutputStream("example.bin");
fos.put(65);
fos.close();`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `FileOutputStream fos = new FileOutputStream("example.bin");
fos.append(65);
fos.close();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the hasNext() method in the Iterator interface?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To check if the iterator has more elements to iterate over'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To retrieve the next element in the collection'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To remove the current element from the collection'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To reset the iterator to the first element'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you use a while loop to iterate over all elements in a collection using an iterator?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> it = names.iterator();
while (it.hasNext()) {
  System.out.println(it.next());
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> it = names.iterator();
while (it.next()) {
  System.out.println(it.hasNext());
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> it = names.iterator();
for (it.hasNext()) {
  System.out.println(it.next());
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> it = names.iterator();
do {
  System.out.println(it.next());
} while (it.hasNext());`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the output of the following code?'],
        [QuizMarkdownType.CODE, `HashSet<String> names = new HashSet<>();
names.add("Daniel");
names.add("Alex");
names.add("John");
Iterator<String> it = names.iterator();
String name1 = it.next();
System.out.println(name1);
String name2 = it.next();
System.out.println(name2);
while (it.hasNext()) {
  System.out.println(it.next());
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Daniel\nAlex\nJohn'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Alex\nDaniel\nJohn'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Daniel\nJohn\nAlex'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The output order is not guaranteed'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in the Iterator interface is used to retrieve the next element in the collection?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'next()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'hasNext()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getNext()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getElement()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you handle a NoSuchElementException when using an iterator in a loop?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By using the hasNext() method to check if there are more elements before calling next()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By using a try-catch block to catch the exception'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By resetting the iterator to the first element'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By removing the last element from the collection'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of an iterator in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To move through a collection without using a loop and at your own pace'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To add elements to a collection'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To sort elements in a collection'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To create a new collection'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you obtain an iterator for a HashSet in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `HashSet<String> names = new HashSet<>();
Iterator<String> it = names.iterator();`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `HashSet<String> names = new HashSet<>();
Iterator<String> it = new Iterator<>(names);`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `HashSet<String> names = new HashSet<>();
Iterator<String> it = Iterator.of(names);`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `HashSet<String> names = new HashSet<>();
Iterator<String> it = names.getIterator();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in the Iterator interface is used to retrieve the next element in the collection?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'next()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'previous()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getNext()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getElement()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens if you call the next() method on an iterator and there are no more elements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'NoSuchElementException is thrown'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The iterator returns null'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The iterator returns the last element'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The iterator resets to the first element'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in the Iterator interface is used to check if the collection has more elements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'hasNext()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'next()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'previous()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'hasPrevious()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the output of the following code?'],
        [QuizMarkdownType.CODE, `HashSet<String> names = new HashSet<>();
names.add("Daniel");
names.add("Alex");
Iterator<String> it = names.iterator();
String name1 = it.next();
System.out.println(name1);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Daniel or Alex'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Daniel'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Alex'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw an exception'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you remove an element from a collection using an iterator in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> it = names.iterator();
while (it.hasNext()) {
  String name = it.next();
  if (name.equals("Daniel")) {
    it.remove();
  }
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> it = names.iterator();
while (it.hasNext()) {
  String name = it.next();
  if (name.equals("Daniel")) {
    names.remove(name);
  }
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> it = names.iterator();
while (it.hasNext()) {
  String name = it.next();
  if (name.equals("Daniel")) {
    names.remove();
  }
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> it = names.iterator();
while (it.hasNext()) {
  String name = it.next();
  if (name.equals("Daniel")) {
    it.remove(name);
  }
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which interface in Java provides the ability to iterate over a collection in both directions?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'ListIterator'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Iterator'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Enumeration'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stream'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true about iterators in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Iterators allow you to move through a collection without using a loop'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Iterators can only move through collections in a forward direction'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Iterators are not safe to use in multi-threaded environments'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Iterators can add elements to a collection'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in the ListIterator interface is used to replace the last element returned by next() or previous()?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'set(E e)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'update(E e)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'replace(E e)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'change(E e)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of an iterator in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To move through a collection without using a loop'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To create a new collection'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To sort elements in a collection'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To filter elements in a collection'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in the Iterator interface is used to check if the collection has more elements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'hasNext()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'next()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'previous()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'hasPrevious()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you obtain an iterator for a collection in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `List<String> list = new ArrayList<>();
Iterator<String> iterator = list.iterator();`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `List<String> list = new ArrayList<>();
Iterator<String> iterator = new Iterator<>(list);`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `List<String> list = new ArrayList<>();
Iterator<String> iterator = Iterator.of(list);`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `List<String> list = new ArrayList<>();
Iterator<String> iterator = list.getIterator();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in the Iterator interface is used to retrieve the next element in the collection?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'next()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'previous()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getNext()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getElement()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you remove an element from a collection using an iterator in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
  String element = iterator.next();
  if (element.equals("remove")) {
    iterator.remove();
  }
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
  String element = iterator.next();
  if (element.equals("remove")) {
    list.remove(element);
  }
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
  String element = iterator.next();
  if (element.equals("remove")) {
    list.remove();
  }
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
  String element = iterator.next();
  if (element.equals("remove")) {
    iterator.remove(element);
  }
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which interface in Java provides the ability to iterate over a collection in both directions?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'ListIterator'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Iterator'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Enumeration'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stream'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens if you call the next() method on an iterator and there are no more elements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'NoSuchElementException is thrown'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The iterator returns null'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The iterator returns the last element'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The iterator resets to the first element'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you iterate over a collection using a for-each loop in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `for (String element : list) {
  System.out.println(element);
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `Iterator<String> iterator = list.iterator();
for (iterator.hasNext(); String element = iterator.next()) {
  System.out.println(element);
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `for (Iterator<String> iterator = list.iterator(); iterator.hasNext(); ) {
  String element = iterator.next();
  System.out.println(element);
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `for (int i = 0; i < list.size(); i++) {
  System.out.println(list.get(i));
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in the ListIterator interface is used to check if there are elements before the current position?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'hasPrevious()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'previous()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'hasNext()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'before()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in the ListIterator interface is used to replace the last element returned by next() or previous()?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'set(E e)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'update(E e)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'replace(E e)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'change(E e)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
