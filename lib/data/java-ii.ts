import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Java II',
  slug: 'java-ii',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is the correct way to convert a primitive int to an Integer object?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Integer i = Integer.valueOf(5);'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Integer i = new Integer(5);'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Integer i = (Integer) 5;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Integer i = (5);'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following expression: '],
        [QuizMarkdownType.INLINE_CODE, 'Math.pow(2, 3) + Math.sqrt(16)'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '8'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '12'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '10'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '6'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following expressions correctly evaluates to true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '!(true && false)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'true || false && false'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'true && false || true'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'false || false'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you cast a double value to an int in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int x = (int) 4.5;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int x = (Integer) 4.5;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int x = Integer.valueOf(4.5);'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int x = new Integer(4.5);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the result of the following expression: '],
        [QuizMarkdownType.INLINE_CODE, '10 / 3'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '3.3333'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '3'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '3.0'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '4'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a wrapper class for the primitive type boolean?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Boolean'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Bool'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'boolean'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Boo'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code: '],
        [QuizMarkdownType.CODE, 'int a = 5;\nint b = 10;\nint c = ++a + b--;\nSystem.out.println(c);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '15'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '16'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '17'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '14'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method of the Math class is used to return the largest integer less than or equal to a given number?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Math.ceil()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Math.floor()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Math.round()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Math.abs()'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of the following expression: '],
        [QuizMarkdownType.INLINE_CODE, '5 + 2 * 3 - 1'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '20'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '10'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '9'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '6'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly converts a String to an int in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int i = Integer.parseInt("123");'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int i = (int) "123";'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int i = Integer.valueOf("123");'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int i = new Integer("123");'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a valid functional interface in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'interface MyInterface { void myMethod(); }'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'interface MyInterface { void myMethod(); void anotherMethod(); }'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'interface MyInterface { default void myMethod() {} }'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'interface MyInterface { static void myMethod() {} }'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a functional interface in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'An interface with exactly one abstract method'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'An interface with no methods'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'An interface with only default methods'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'An interface with static methods only'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which keyword is used to define a static method in an interface?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'static'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'default'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'private'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'abstract'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following interface methods cannot be accessed outside the interface?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'private'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'default'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'static'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you declare a default method in an interface?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'default void myMethod() { // implementation }'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'void myMethod() { // implementation }'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'static void myMethod() { // implementation }'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'abstract void myMethod();'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of a default method in an interface?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To provide a default implementation that can be inherited by classes implementing the interface'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To declare a method that must be implemented by subclasses'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To define a method that can only be used within the interface'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To create an abstract method'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a correct way to use a static method from an interface?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MyInterface.myStaticMethod();'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'new MyInterface().myStaticMethod();'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'myStaticMethod();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MyInterface::myStaticMethod();'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main difference between a static method and a default method in an interface?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A static method cannot be overridden, while a default method can be overridden by implementing classes'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A static method must be overridden, while a default method cannot be overridden'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A static method is always public, while a default method can be private'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'There is no difference'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly identifies a functional interface?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@FunctionalInterface'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Functional'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Interface'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Annotation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the'],
        [QuizMarkdownType.INLINE_CODE, '@FunctionalInterface'],
        [QuizMarkdownType.TEXT, 'annotation in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To indicate that the interface is intended to be a functional interface'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To provide a default implementation for the interface'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To make the interface abstract'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To make the interface immutable'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, `int x = 5;
int y = 10;
System.out.println(x + y * 2);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '25'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '30'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '20'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '15'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method in the Math class returns the absolute value of a number?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Math.abs()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Math.absolute()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Math.value()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Math.absValue()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of the following boolean expression?'],
        [QuizMarkdownType.INLINE_CODE, 'true && false || true'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'true'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
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
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly converts a Double to a double?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'double d = Double.valueOf(10.5);'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'double d = (double) 10.5;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'double d = Double.parseDouble(10.5);'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'double d = new Double(10.5);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is not a primitive data type in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'int'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'char'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'String'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'boolean'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, `int a = 10;
double b = a;
System.out.println(b);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '10.0'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '10'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '10.5'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Compile-time error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is used to find the larger of two numbers in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Math.max()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Math.large()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Math.bigger()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Math.greater()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, `int x = 7;
int y = 2;
System.out.println(x / y);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '3'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '3.5'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '4'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '7'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly converts a String to a float in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'float f = Float.parseFloat("3.14");'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'float f = (float) "3.14";'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'float f = Float.valueOf("3.14");'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'float f = new Float("3.14");'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the result of the following expression?'],
        [QuizMarkdownType.INLINE_CODE, '15 % 4'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '3'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '2'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '4'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly declares and instantiates an object in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MyClass obj = new MyClass();'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MyClass obj;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'obj = new MyClass();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MyClass obj = MyClass();'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of a constructor in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To initialize the newly created object'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To define the structure of the class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To finalize the object before garbage collection'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To declare methods of the class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true about garbage collection in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It is a process that automatically deallocates memory by removing objects that are no longer referenced'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It manually deallocates memory by removing objects that are no longer referenced'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It is a process that must be invoked by the programmer'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It is a feature that is optional in Java'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you declare a nested static class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'static class NestedClass {}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'class NestedClass static {}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'class NestedClass {}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'static NestedClass class {}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements about object references is true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Reassigning an object reference does not affect the original object'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Reassigning an object reference deletes the original object'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Reassigning an object reference affects the original object'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Reassigning an object reference makes the original object immutable'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main difference between a nested static class and an inner class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A nested static class does not have access to the instance variables of the outer class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A nested static class has access to the instance variables of the outer class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'An inner class cannot be static'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'An inner class does not have access to the instance variables of the outer class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, `class OuterClass {
  static class NestedClass {
    void display() {
      System.out.println("Nested Class");
    }
  }
}

public class Test {
  public static void main(String[] args) {
    OuterClass.NestedClass nested = new OuterClass.NestedClass();
    nested.display();
  }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Nested Class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Outer Class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Compile-time error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Runtime error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is called when an object is garbage collected in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'finalize()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'destroy()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'terminate()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'delete()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, `class Test {
  public static void main(String[] args) {
    Test t1 = new Test();
    Test t2 = t1;
    t1 = null;
    System.gc();
    System.out.println("End of main");
  }

  protected void finalize() {
    System.out.println("Finalize method called");
  }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'End of main'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Finalize method called\nEnd of main'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Compile-time error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Runtime error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements about the object life-cycle is true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'An object is created when the constructor is called and becomes eligible for garbage collection when no references point to it'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'An object is created and destroyed automatically by the JVM'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'An object must be explicitly destroyed by the programmer'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'An object is created when a method is called and destroyed when the method returns'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly declares an abstract class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'abstract class MyClass {}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'class abstract MyClass {}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'class MyClass abstract {}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'abstract MyClass class {}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the `instanceof` operator in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To check whether an object is an instance of a specific class or subclass'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To cast an object to a different type'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To create a new instance of a class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To compare two objects'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly overrides the `toString` method from the Object class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public String toString() { return "MyClass"; }'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public void toString() { return "MyClass"; }'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public String toString(String s) { return "MyClass"; }'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public String toString() { System.out.println("MyClass"); }'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is polymorphism in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The ability of an object to take on many forms'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The ability to inherit from multiple classes'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The ability to override methods'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The ability to use abstract classes'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following demonstrates reference type casting?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Animal a = new Dog();\nDog d = (Dog) a;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int x = (int) 10.5;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Dog d = new Dog();\nAnimal a = d;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Animal a = new Animal();\nDog d = (Dog) a;'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly uses the `instanceof` operator with pattern matching?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `if (obj instanceof String s) {
  System.out.println(s.toUpperCase());
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `if (obj instanceof String) {
  String s = (String) obj;
  System.out.println(s.toUpperCase());
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `if (obj instance String s) {
  System.out.println(s.toUpperCase());
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `if (obj instanceOf String s) {
  System.out.println(s.toUpperCase());
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a correct use of the `switch` statement with pattern matching?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `switch (obj) {
  case String s -> System.out.println(s.toUpperCase());
  case Integer i -> System.out.println(i * 2);
  default -> System.out.println("Unknown type");
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `switch (obj) {
  case String s : System.out.println(s.toUpperCase());
  case Integer i : System.out.println(i * 2);
  default : System.out.println("Unknown type");
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `switch (obj) {
  case String s -> { System.out.println(s.toUpperCase()); }
  case Integer i -> { System.out.println(i * 2); }
  default -> { System.out.println("Unknown type"); }
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `switch (obj) {
  case String s -> System.out.println(s.toUpperCase());
  case int i -> System.out.println(i * 2);
  default -> System.out.println("Unknown type");
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following demonstrates the use of a record class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'public record Person(String name, int age) {}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `public class Person {
  private String name;
  private int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  // getters
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'public abstract record Person(String name, int age) {}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'public sealed record Person(String name, int age) {}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of a sealed class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To restrict which other classes or interfaces may extend or implement it'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To prevent the class from being instantiated'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow the class to be extended by any class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To provide a default implementation for all subclasses'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly creates an array of integers in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[] arr = new int[5];'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int arr = new int[5];'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[] arr = int[5];'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[] arr = new int(5);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to add an element to a List in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'add()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'put()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'insert()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'append()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you remove an element from a Set in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'remove()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'delete()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'discard()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'erase()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to retrieve an element from a Map in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'get()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'fetch()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'retrieve()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'find()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly creates a List of Strings in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<String> list = new ArrayList<>();'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Array<String> list = new ArrayList<>();'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<String> list = new List<>();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'String[] list = new ArrayList<>();'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you sort a List of integers in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Collections.sort(list);'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.sort();'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Arrays.sort(list);'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Collections.order(list);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to add an element to a Deque in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'addFirst()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'append()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'insert()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'enqueue()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly creates a Set of integers in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Set<Integer> set = new HashSet<>();'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'HashSet<Integer> set = new HashSet<>();'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Set<int> set = new HashSet<>();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Set<Integer> set = new Set<>();'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you update a value in a Map in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'map.put(key, newValue);'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'map.set(key, newValue);'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'map.update(key, newValue);'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'map.change(key, newValue);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to remove the first element from a Deque in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'removeFirst()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'deleteFirst()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'pop()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'dequeue()'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following methods is used to add an element at the front of a Deque in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'addFirst()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'add()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'push()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'insertFirst()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you retrieve and remove the last element of a Deque in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'removeLast()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'pollLast()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'popLast()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'deleteLast()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following methods returns the first element of a Deque without removing it?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'peekFirst()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'elementFirst()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getFirst()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'retrieveFirst()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main difference between a Deque and a Queue in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A Deque allows insertion and removal of elements from both ends, whereas a Queue allows insertion from one end and removal from the other end'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A Deque is a type of Queue that does not allow null elements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A Queue allows insertion and removal of elements from both ends, whereas a Deque allows insertion from one end and removal from the other end'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A Deque can only store unique elements, whereas a Queue can store duplicate elements'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to insert an element at the end of a Deque in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'addLast()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'append()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'push()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'insertLast()'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Deque stands for'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic End Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Dual End Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Enter Queue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following methods is used to add an element at the front of a Deque in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'addFirst()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'add()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'push()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'insertFirst()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you retrieve and remove the last element of a Deque in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'removeLast()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'pollLast()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'popLast()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'deleteLast()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following methods returns the first element of a Deque without removing it?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'peekFirst()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'elementFirst()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'getFirst()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'retrieveFirst()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main difference between a Deque and a Queue in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A Deque allows insertion and removal of elements from both ends, whereas a Queue allows insertion from one end and removal from the other end'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A Deque is a type of Queue that does not allow null elements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A Queue allows insertion and removal of elements from both ends, whereas a Deque allows insertion from one end and removal from the other end'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A Deque can only store unique elements, whereas a Queue can store duplicate elements'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to insert an element at the end of a Deque in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'addLast()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'append()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'push()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'insertLast()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to perform reduction on a stream in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'reduce()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'collect()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'accumulate()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'aggregate()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the collect() method in Java streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To perform mutable reduction operations such as accumulating elements into a collection'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To reduce the elements of the stream to a single value'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To concatenate two or more streams'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To decompose a stream into individual elements'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following methods is used to concatenate two streams in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Stream.concat()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Stream.merge()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Stream.join()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Stream.combine()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the groupingBy() method in Java streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To group elements of the stream by a classifier function'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To partition elements of the stream into two groups'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To concatenate multiple streams'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To reduce elements of the stream to a single value'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to partition a stream into two groups in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'partitioningBy()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'groupingBy()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'splittingBy()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'separatingBy()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the parallelStream() method in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To create a parallel stream that can perform operations in parallel'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To create a sequential stream'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To decompose a stream into individual elements'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To reduce elements of the stream to a single value'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following demonstrates the use of the reduce() method in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.stream()
  .reduce(0, (a, b) -> a + b);`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.stream()
  .collect(Collectors.summingInt(Integer::intValue));`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.stream()
  .mapToInt(Integer::intValue)
  .sum();`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.stream()
  .filter(n -> n % 2 == 0)
  .mapToInt(Integer::intValue)
  .sum();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following demonstrates the use of the collect() method with groupingBy() in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `List<String> items = Arrays.asList("apple", "banana", "orange", "apple", "banana");
Map<String, Long> groupedItems = items.stream()
  .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `List<String> items = Arrays.asList("apple", "banana", "orange", "apple", "banana");
Map<Boolean, List<String>> partitionedItems = items.stream()
  .collect(Collectors.partitioningBy(item -> item.startsWith("a")));`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `List<String> items = Arrays.asList("apple", "banana", "orange", "apple", "banana");
List<String> distinctItems = items.stream()
  .distinct()
  .collect(Collectors.toList());`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `List<String> items = Arrays.asList("apple", "banana", "orange", "apple", "banana");
String concatenatedItems = items.stream()
  .collect(Collectors.joining(", "));`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the difference between a sequential stream and a parallel stream in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A sequential stream processes elements one at a time, while a parallel stream can process multiple elements concurrently'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A parallel stream processes elements one at a time, while a sequential stream can process multiple elements concurrently'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A sequential stream can only perform reduction operations, while a parallel stream can perform all stream operations'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'There is no difference between a sequential stream and a parallel stream'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following demonstrates the use of partitioningBy() in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
Map<Boolean, List<Integer>> partitionedNumbers = numbers.stream()
  .collect(Collectors.partitioningBy(n -> n % 2 == 0));`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
Map<Integer, List<Integer>> groupedNumbers = numbers.stream()
  .collect(Collectors.groupingBy(n -> n % 2));`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
Map<Boolean, Long> countedNumbers = numbers.stream()
  .collect(Collectors.partitioningBy(n -> n % 2 == 0, Collectors.counting()));`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
Set<Integer> distinctNumbers = numbers.stream()
  .collect(Collectors.toSet());`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly defines an enum with fields and a constructor in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `public enum Day {
  MONDAY("Mon"), TUESDAY("Tue"), WEDNESDAY("Wed");

  private String abbreviation;

  Day(String abbreviation) {
    this.abbreviation = abbreviation;
  }

  public String getAbbreviation() {
    return abbreviation;
  }
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `public enum Day {
  MONDAY("Mon"), TUESDAY("Tue"), WEDNESDAY("Wed");

  public String abbreviation;

  private Day(String abbreviation) {
    this.abbreviation = abbreviation;
  }

  public String getAbbreviation() {
    return abbreviation;
  }
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `public enum Day {
  MONDAY("Mon"), TUESDAY("Tue"), WEDNESDAY("Wed");

  private String abbreviation;

  private void Day(String abbreviation) {
    this.abbreviation = abbreviation;
  }

  public String getAbbreviation() {
    return abbreviation;
  }
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `public enum Day {
  MONDAY("Mon"), TUESDAY("Tue"), WEDNESDAY("Wed");

  private String abbreviation;

  public Day(String abbreviation) {
    this.abbreviation = abbreviation;
  }

  public String getAbbreviation() {
    return abbreviation;
  }
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of an enum constructor in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To initialize the fields of the enum constants'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To define the possible values of the enum'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To provide methods for the enum constants'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To implement interfaces'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following demonstrates how to call a method on an enum constant in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `public enum Day {
  MONDAY("Mon"), TUESDAY("Tue"), WEDNESDAY("Wed");

  private String abbreviation;

  Day(String abbreviation) {
    this.abbreviation = abbreviation;
  }

  public String getAbbreviation() {
    return abbreviation;
  }
}

Day day = Day.MONDAY;
String abbr = day.getAbbreviation();`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `public enum Day {
  MONDAY("Mon"), TUESDAY("Tue"), WEDNESDAY("Wed");

  private String abbreviation;

  Day(String abbreviation) {
    this.abbreviation = abbreviation;
  }

  public String getAbbreviation() {
    return abbreviation;
  }
}

String abbr = Day.getAbbreviation(MONDAY);`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `public enum Day {
  MONDAY("Mon"), TUESDAY("Tue"), WEDNESDAY("Wed");

  private String abbreviation;

  Day(String abbreviation) {
    this.abbreviation = abbreviation;
  }

  public String getAbbreviation() {
    return abbreviation;
  }
}

String abbr = getAbbreviation(Day.MONDAY);`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `public enum Day {
  MONDAY("Mon"), TUESDAY("Tue"), WEDNESDAY("Wed");

  private String abbreviation;

  Day(String abbreviation) {
    this.abbreviation = abbreviation;
  }

  public String getAbbreviation() {
    return abbreviation;
  }
}

Day day = MONDAY;
String abbr = day.abbreviation();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly demonstrates an enum with a method in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `public enum Operation {
  ADD {
    public int apply(int x, int y) {
      return x + y;
    }
  },
  SUBTRACT {
    public int apply(int x, int y) {
      return x - y;
    }
  };

  public abstract int apply(int x, int y);
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `public enum Operation {
  ADD, SUBTRACT;

  public int apply(int x, int y) {
    switch (this) {
      case ADD:
        return x + y;
      case SUBTRACT:
        return x - y;
      default:
        throw new AssertionError("Unknown operations " + this);
    }
  }
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `public enum Operation {
  ADD, SUBTRACT;

  public abstract int apply(int x, int y);
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `public enum Operation {
  ADD, SUBTRACT;

  public int apply(int x, int y) {
    if (this == ADD) {
      return x + y;
    } else if (this == SUBTRACT) {
      return x - y;
    } else {
      throw new AssertionError("Unknown operations " + this);
    }
  }
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you iterate over all values of an enum in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `for (Day day : Day.values()) {
  System.out.println(day);
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `for (Day day : Day.getValues()) {
  System.out.println(day);
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `for (Day day : Day.all()) {
  System.out.println(day);
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `for (Day day : Day.list()) {
  System.out.println(day);
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the scope of a variable declared inside a method in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Local scope'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Class scope'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Global scope'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Package scope'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a characteristic of an immutable object in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'All fields are final and private'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It has a public setter method'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It can be extended by other classes'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Fields can be modified after object creation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which keyword is used in Java to enforce encapsulation by making a variable only accessible within its own class?'],
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
        [QuizMarkdownType.TEXT, 'How do you declare a local variable using type inference in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'var myVariable = "Hello, World!";'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'String myVariable = "Hello, World!";'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'let myVariable = "Hello, World!";'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'const myVariable = "Hello, World!";'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following demonstrates proper encapsulation in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `public class Person {
  private String name;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `public class Person {
  public String name;
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `public class Person {
  protected String name;
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `public class Person {
  String name;
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a benefit of using local variable type inference with the var keyword in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Improves code readability by reducing boilerplate code'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Enforces stricter type checking at runtime'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Makes variables globally accessible'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Allows for dynamic typing'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly creates an immutable class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `public final class ImmutableClass {
  private final String name;

  public ImmutableClass(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `public class ImmutableClass {
  private String name;

  public ImmutableClass(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `public final class ImmutableClass {
  private String name;

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `public class ImmutableClass {
  public String name;

  public ImmutableClass(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you achieve immutability in a Java class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By declaring the class as final and making all fields private and final'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By providing public setter methods'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By using the static keyword for all fields'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By making the class abstract'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following demonstrates the use of local variable type inference with the var keyword in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `var numbers = List.of(1, 2, 3, 4, 5);
for (var number : numbers) {
  System.out.println(number);
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `List<Integer> numbers = List.of(1, 2, 3, 4, 5);
for (int number : numbers) {
  System.out.println(number);
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `var numbers = new ArrayList<>();
numbers.add(1);
numbers.add(2);
numbers.add(3);`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `var numbers = [1, 2, 3, 4, 5];
for (var number : numbers) {
  System.out.println(number);
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to denote a test method in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Test'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Run'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@TestMethod'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@TestClass'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you assert that two values are equal in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'assertEquals(expected, actual);'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'assertSame(expected, actual);'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'assertTrue(expected == actual);'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'assertEqual(expected, actual);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to execute a method before each test in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@BeforeEach'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@BeforeAll'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@BeforeTest'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Setup'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you specify that a test should be disabled in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Disabled'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Ignore'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Skip'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Exclude'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is used to group multiple assertions together in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'assertAll'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'assertGroup'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'assertMultiple'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'assertBundle'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to run a method once before all tests in a test class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@BeforeAll'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@BeforeEach'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@SetupAll'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Initialize'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you specify that a test method should expect an exception in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `@Test
void testMethod() {
  assertThrows(ExpectedException.class, () -> {
    // code that throws exception
  });
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `@Test(expected = ExpectedException.class)
void testMethod() {
  // code that throws exception
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `@Test
void testMethod() throws ExpectedException {
  // code that throws exception
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `@Test
void testMethod() {
  try {
    // code that throws exception
  } catch (ExpectedException e) {
    // handle exception
  }
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to provide a source of arguments for parameterized tests in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@ParameterizedTest'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Parameters'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@ArgumentsSource'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@TestWithParameters'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to clean up resources after each test in JUnit?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@AfterEach'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@AfterAll'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Cleanup'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@TearDown'],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
