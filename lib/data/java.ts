import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Java',
  slug: 'java',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following program requires the user to enter input three times if it is run via the command .'],
        [QuizMarkdownType.INLINE_CODE, 'java PadNumbers,java'],
        [QuizMarkdownType.TEXT, '. Which command will run the program and pass in (redirect) three inputs at once?'],
        [QuizMarkdownType.CODE, `import java.util.Scanner;
        
public class PadNumbers {

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.println("================================");
      for (int i = 0; i < 3; i++) {
          String s1 = sc.next();
          int x = sc.nextInt();
          System.out.printf("%-15s%03d%n", s1, x);
      }
      System.out.println("================================");
  }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `java Solution <<< "java 100
cpp 65
python 50"`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'java Solution <<< "java 100, cpp 65, python 50'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `java Solution <<< java 100
cpp 65
python 50`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `java Solution < "java 100
cpp 65
python 50"`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The best alternative to using string concatenation in a loop to reverse a string would be'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using'],
            [QuizMarkdownType.INLINE_CODE, 'StringBuilder'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creating a list and reversing it'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using recursion'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using arrays'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which solution is its best replacement?'],
        [QuizMarkdownType.CODE, `public static String reverseAString(String str) {
  String[] arr = str.split("");
  String reversed = "";
  for (int i = arr.length - 1; i >= 0; i--) {
      reversed += arr[i];
  }
  return reversed;
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `public static String reverseAString(String str) {
    StringBuilder reversed = new StringBuilder();
    for (int i = str.length() - 1; i >= 0; i--) {
        reversed.append(str.charAt(i));
    }
    return reversed.toString();
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `public static String reverseAString(String str) {
    if (str.isEmpty()) {
        return str;
    }
    return reverseAString(str.substring(1)) + str.charAt(0);
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `public static String reverseAString(String str) {
    if (str.isEmpty()) {
        return str;
    }
    return reverseAString(str.substring(1)) + str.charAt(0);
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To clear the input'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code.'],
        [QuizMarkdownType.CODE, 'System.out.printf("%d x %d = %d%n", 3, 2, 3 * 2);'],
        [QuizMarkdownType.TEXT, 'What is the function of the syntax'],
        [QuizMarkdownType.CODE, '%d'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To serve as an argument placeholder'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To print a new line'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To perform multiplication'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To clear the input'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code.'],
        [QuizMarkdownType.CODE, 'System.out.printf("%d x %d = %d%n", 3, 2, 3 * 2);'],
        [QuizMarkdownType.TEXT, 'What is the function of the syntax'],
        [QuizMarkdownType.CODE, '%n'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To print a new line'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To serve as an argument placeholder'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To perform multiplication'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To clear the input'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, ______ precede ______.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'classes, objects'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'objects, classes'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'no entity can, objects'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'no entity can, classes'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A blueprint for creating objects, defining properties and behaviors.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'An instance of an object.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A method that executes code.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A package of related classes.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the relationship between a class and an object in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A class is a template from which objects are created.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'An object defines the structure of a class.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A class is an instance of an object.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects and classes are the same.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the code below. Which answer is true?'],
        [QuizMarkdownType.CODE, `public class MyClass implements Cloneable {
    int value;
    MyClass reference;

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The method'],
            [QuizMarkdownType.INLINE_CODE, 'clone()'],
            [QuizMarkdownType.TEXT, 'of interface'],
            [QuizMarkdownType.INLINE_CODE, 'Cloneable'],
            [QuizMarkdownType.TEXT, 'creates a shallow copy of'],
            [QuizMarkdownType.INLINE_CODE, 'MyClass'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The method'],
            [QuizMarkdownType.INLINE_CODE, 'clone()'],
            [QuizMarkdownType.TEXT, 'of interface'],
            [QuizMarkdownType.INLINE_CODE, 'Cloneable'],
            [QuizMarkdownType.TEXT, 'creates a deep copy of'],
            [QuizMarkdownType.INLINE_CODE, 'MyClass'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The method'],
            [QuizMarkdownType.INLINE_CODE, 'clone()'],
            [QuizMarkdownType.TEXT, 'of interface'],
            [QuizMarkdownType.INLINE_CODE, 'Cloneable'],
            [QuizMarkdownType.TEXT, 'instantiates a new instance of'],
            [QuizMarkdownType.INLINE_CODE, 'MyClass'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 3'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Identify the anonymous class in the code below.'],
        [QuizMarkdownType.CODE, `public class HelloWorld {

  interface Greeting {
      void sayHello();
  }

  public static void main(String[] args) {
      Greeting greeting = new Greeting() {
          @Override
          public void sayHello() {
              System.out.println("Hello, World!");
          }
      };

      greeting.sayHello();
  }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `Greeting greeting = new Greeting() {
  @Override
  public void sayHello() {
      System.out.println("Hello, World!");
  }
};`],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `interface Greeting {
  void sayHello();
}`],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'greeting.sayHello();'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `public static void main(String[] args) {
  ...
}`],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Based on the code below, which is the correct answer?'],
        [QuizMarkdownType.CODE, `import java.util.TreeMap;

public class TreeMaps {

  public TreeMaps() {}

  public static void main(String[] args) {
    TheTreeMapExecutor theTreeMapExecutor = new TheTreeMapExecutor();
    theTreeMapExecutor.executeTheTreeMap();
  }
}

class TheTreeMapExecutor {
  TheTreeMap theTreeMap;

  public TheTreeMapExecutor() {
    this.theTreeMap = new TheTreeMap();
  }

  public void executeTheTreeMap() {
    this.theTreeMap.testTheTreeMap();
  }
}

class TheTreeMap {
  public TheTreeMap() {}

  public void testTheTreeMap () {
    TreeMap<Integer, String> treeMap = new TreeMap<>();
    treeMap.put(2, "second");
    treeMap.put(1, "first");
    treeMap.put(3, "third");

    for (String str : treeMap.values()) {
      System.out.println(str);
    }
  }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The output will be'],
            [QuizMarkdownType.INLINE_CODE, 'first'],
            [QuizMarkdownType.INLINE_CODE, 'second'],
            [QuizMarkdownType.INLINE_CODE, 'third'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The output will be'],
            [QuizMarkdownType.INLINE_CODE, 'second'],
            [QuizMarkdownType.INLINE_CODE, 'first'],
            [QuizMarkdownType.INLINE_CODE, 'third'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The output will be'],
            [QuizMarkdownType.INLINE_CODE, 'error: non-static variable theTreeMap cannot be referenced from a static context'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The output will be'],
            [QuizMarkdownType.INLINE_CODE, 'null'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Based on the code below, which is the correct answer?'],
        [QuizMarkdownType.CODE, `import java.util.TreeMap;

public class TreeMaps {

  TheTreeMap theTreeMap;

  public TreeMaps() {
    this.theTreeMap = new TheTreeMap();
  }

  public static void main(String[] args) {
    this.theTreeMap.testTheTreeMap();
  }
}

final class TheTreeMap {
  public TheTreeMap() {}

  public void testTheTreeMap () {
    TreeMap<Integer, String> treeMap = new TreeMap<>();
    treeMap.put(2, "second");
    treeMap.put(1, "first");
    treeMap.put(3, "third");

    for (String str : treeMap.values()) {
      System.out.println(str);
    }
  }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The output will be'],
            [QuizMarkdownType.INLINE_CODE, 'error: non-static variable theTreeMap cannot be referenced from a static context'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The output will be'],
            [QuizMarkdownType.INLINE_CODE, 'second'],
            [QuizMarkdownType.INLINE_CODE, 'first'],
            [QuizMarkdownType.INLINE_CODE, 'third'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The output will be'],
            [QuizMarkdownType.INLINE_CODE, 'first'],
            [QuizMarkdownType.INLINE_CODE, 'second'],
            [QuizMarkdownType.INLINE_CODE, 'third'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The output will be'],
            [QuizMarkdownType.INLINE_CODE, 'null'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Based on the code below, which is the correct answer?'],
        [QuizMarkdownType.CODE, `import java.util.TreeMap;

public class TreeMaps {

  public TreeMaps() {}

  public static void main(String[] args) {
    TheTreeMap theTreeMap = new TheTreeMap();
    theTreeMap.testTheTreeMap();
  }
}

class TheTreeMap {
  public TheTreeMap() {}

  public void testTheTreeMap () {
    TreeMap<Integer, String> treeMap = new TreeMap<>();
    treeMap.put(2, "second");
    treeMap.put(1, "first");
    treeMap.put(3, "third");

    for (String str : treeMap.values()) {
      System.out.println(str);
    }
  }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The output will be'],
            [QuizMarkdownType.INLINE_CODE, 'first'],
            [QuizMarkdownType.INLINE_CODE, 'second'],
            [QuizMarkdownType.INLINE_CODE, 'third'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The output will be'],
            [QuizMarkdownType.INLINE_CODE, 'second'],
            [QuizMarkdownType.INLINE_CODE, 'first'],
            [QuizMarkdownType.INLINE_CODE, 'third'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The output will be'],
            [QuizMarkdownType.INLINE_CODE, 'error: non-static variable theTreeMap cannot be referenced from a static context'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The output will be'],
            [QuizMarkdownType.INLINE_CODE, 'null'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Based on the code below, which is the correct answer?'],
        // note that defining brewCoffee n times doesn't invalidate all previous implementations, they are simply called with different parameters
        [QuizMarkdownType.CODE, `class CoffeeMachine {
  public void brewCoffee(String selection) {
      System.out.println("Brewing " + selection);
  }

  public void brewCoffee(String selection, int number) {
      System.out.println("Brewing " + number + " cups of " + selection);
  }

  public static void main(String[] args) {
      CoffeeMachine machine = new CoffeeMachine();
      machine.brewCoffee("Espresso");
      machine.brewCoffee("Espresso", 2);
  }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Static polymorphism/binding'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic polymorphism/binding'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Absence of polymorphism'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Violation of OOP principles'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If a class is instantiated and its methods are overridden, this naturally means'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic polymorphism/binding'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Static polymorphism/binding'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Absence of polymorphism'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Violation of OOP principles'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answers define the dynamics at play in the following code?'],
        [QuizMarkdownType.CODE, `public class HelloWorld {

  interface Greeting {
      void sayHello();
  }

  public static void main(String[] args) {
      Greeting greeting = new Greeting() {
          @Override
          public void sayHello() {
              System.out.println("Hello, World!");
          }
      };

      greeting.sayHello();
  }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'There is a block of code that is an anonymous class'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'This is an example of dynamic binding'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'This is an example of static binding'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Two of the answers are correct'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, method overloading is required for static polymorphism.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
          order: 1,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, the terms static binding and static polymorphism are interchangeable.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
          order: 1,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, the terms static binding and static polymorphism are interchangeable.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
          order: 1,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A class inherits from another class or an interface inherits from another interface via the keyword _______, while the keyword _______ is used when a class implements an interface.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'extends'],
            [QuizMarkdownType.INLINE_CODE, 'implements'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'implements'],
            [QuizMarkdownType.INLINE_CODE, 'extends'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 2,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method correctly intializes an array of primitive integers from 1-5?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[] numbers = {1, 2, 3, 4, 5};'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[] numbers = int[5]'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[] numbers = int[1][2][3][4][5]'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<Integer> numbers = new ArrayList<>(1, 2, 3, 4, 5)'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, method overloading is required for static binding.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
          order: 1,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, method overloading is required for ________.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Static polymorphism/binding'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic polymorphism/binding'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, method overloading is required for ________.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Static polymorphism/binding'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic polymorphism/binding'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following functions will not return the intended result of summing the individual digits of an integer input?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `public static int sumOfDigitsForLoopFour(int n) {
  return Arrays.stream(String.valueOf(n).split(""))
    .map(Integer::parseInt)
    .reduce(0, Integer::sum);
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `public static int sumOfDigitsOne(int n) {
  int sum = 0;
  while (n > 0) {
    sum += n % 10;
    n /= 10;
  }
  return sum;
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `public static int sumOfDigitsForLoopThree(int n) {
  return String.valueOf(n).chars().sum();
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `public static int sumOfDigitsForLoopTwo(int n) {
  String[] nA = String.valueOf(n).split("");
  int total = Arrays.stream(nA).map(Integer::parseInt).reduce(0, Integer::sum);
  return total;
}`],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which method call is missing for the function to work properly?'],
        [QuizMarkdownType.CODE, `public static List<Integer> individualDigits(int n) {
  return String.valueOf(n)
    .chars()
    .map(Character::getNumericValue)
    // Missing method
    .collect(Collectors.toList());
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '.boxed()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '.sorted()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '.distinct()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '.filter()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A seemingly innocuous palindrome function implementation always outputs'],
        [QuizMarkdownType.INLINE_CODE, 'true'],
        [QuizMarkdownType.TEXT, ', regardless of the input. Why might this happen? Assume the input must be filtered so that there are only alphanumeric characters in the checked strings.'],
        [QuizMarkdownType.CODE, `public static boolean isPalindrome(String s) {
  String regex = "_|\\W+";
  String[] filteredC = s.split(regex);
  StringBuilder fS = new StringBuilder();
  for (String c : filteredC) {
      fS.append(c);
  }
  StringBuilder rS = fS.reverse();
  return rS.toString().equals(fS.toString());
}`],
        [QuizMarkdownType.TEXT, 'in Java sorts its constituents according to the natural order of their'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The method'],
            [QuizMarkdownType.INLINE_CODE, 'StringBuilder.reverse()'],
            [QuizMarkdownType.TEXT, 'modifies its object in place'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The string'],
            [QuizMarkdownType.INLINE_CODE, 'regex'],
            [QuizMarkdownType.TEXT, 'does not properly filter out special characters'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'isPalindrome'],
            [QuizMarkdownType.TEXT, 'is not properly splitting the input strings'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The program actually should not be erroring'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A'],
        [QuizMarkdownType.INLINE_CODE, 'TreeMap'],
        [QuizMarkdownType.TEXT, 'in Java sorts its constituents according to the natural order of their'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Keys'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Values'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Bytes'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Gradients'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The loop below is known as'],
        [QuizMarkdownType.CODE, `String regex = "_|\\W+";
String[] filtered = s.split(regex);
String t = "";
for (String part : filtered) {
  t += part;
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'An enhanced for loop'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A for loop'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A recursion'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'An anonymous loop'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the following line of code, '],
        [QuizMarkdownType.INLINE_CODE, 'List<String> list = new ArrayList<>(); list.add("Hello"); list.add("World");'],
        [QuizMarkdownType.TEXT, ', the syntax'],
        [QuizMarkdownType.INLINE_CODE, '<>'],
        [QuizMarkdownType.TEXT, ', also known as the diamond operator, infers the type of the ArrayList based on what information?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The type of'],
            [QuizMarkdownType.INLINE_CODE, 'list'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The type of the items added'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamically determined at runtime'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 2 and 3'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Any time method implements _________, it is considered static polymorphism AND static binding in Java.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'method overloading'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'the'],
            [QuizMarkdownType.INLINE_CODE, 'static'],
            [QuizMarkdownType.TEXT, 'access modifier'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'the'],
            [QuizMarkdownType.INLINE_CODE, 'private'],
            [QuizMarkdownType.TEXT, 'access modifier'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is true of the following program?'],
        [QuizMarkdownType.CODE, `class HelloWorld {
    private void display() {
        System.out.println("Hello World");
    }

    public static void main(String[] args) {
        HelloWorld obj = new HelloWorld();
        obj.display();
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'This is an example of static binding'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'This is an example of static polymorphism'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'This is an example of dynamic polymorphism'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is true of the following program?'],
        [QuizMarkdownType.CODE, `public class BasicCoffeeMachine {
    // ...
    public Coffee brewCoffee(CoffeeSelection selection) throws CoffeeException {
        switch (selection) {
        case FILTER_COFFEE:
            return brewFilterCoffee();
        default:
            throw new CoffeeException(
                "CoffeeSelection ["+selection+"] not supported!");
        }   
    }
  
    public List brewCoffee(CoffeeSelection selection, int number) throws CoffeeException {
        List coffees = new ArrayList(number);
        for (int i=0; i<number; i++) {
            coffees.add(brewCoffee(selection));
        }
        return coffees;
    }
    // ...
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'This is an example of static binding'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'This is an example of static polymorphism'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'This is an example of dynamic polymorphism'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which set of commands will successfully execute the following program?'],
        [QuizMarkdownType.CODE, `public class DynamicBindingProgram {
    public static void main(String[] args) {
        Animal obj = new Dog();
        obj.sound(); // Dynamic binding: method determined at runtime
    }
}

class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `javac DynamicBindingProgram.java
java DynamicBindingProgram`],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'java DynamicBindingProgram.java'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Either of the above'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which set of commands will successfully execute the following program?'],
        [QuizMarkdownType.CODE, `class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class DynamicBindingProgram {
    public static void main(String[] args) {
        Animal obj = new Dog();
        obj.sound(); // Dynamic binding: method determined at runtime
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `javac DynamicBindingProgram.java
java DynamicBindingProgram`],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'java DynamicBindingProgram.java'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Either of the above'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer best describes the following code?'],
        [QuizMarkdownType.CODE, `class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Example {
    public static void main(String[] args) {
        Animal obj = new Dog();
        obj.sound();
    }
}
`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It is an example of dynamic binding.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It is an example of static binding.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It is an example of closures.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It is an example of unsafe method overriding.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does method overriding relate to dynamic binding in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic binding allows the overridden method to be called at runtime based on the object type.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic binding prevents method overriding.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Method overriding is not related to binding.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Method overriding only uses static binding.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is dynamic binding in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The association of a method call to a method definition at runtime.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The association of a method call to a method definition at compile time.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Binding variables to data types dynamically.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Binding classes together using static methods.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is static binding in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The association of a method call to a method definition at compile time.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The association of a method call to a method definition at runtime.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Binding variables to data types.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Binding classes together using interfaces.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What command would be used to run the following program with proper output?'],
        [QuizMarkdownType.CODE, `import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ScanIt {
    public static void main(String[] args) {
        try {
            Scanner scanner = new Scanner(System.in);
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                System.out.println(line); // Process the line as needed
            }
            scanner.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'java ScanIt < input.txt'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'javac ScanIt < input.txt'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'java > input.txt'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'java ScanIt << input.txt'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: The keywords'],
        [QuizMarkdownType.INLINE_CODE, 'static'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'public'],
        [QuizMarkdownType.TEXT, 'can be applied to the same method.'],
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
        [QuizMarkdownType.TEXT, 'Evaluate: The keywords'],
        [QuizMarkdownType.INLINE_CODE, 'static'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'abstract'],
        [QuizMarkdownType.TEXT, 'can be applied to the same method.'],
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
        [QuizMarkdownType.INLINE_CODE, 'ValidationHandler'],
        [QuizMarkdownType.TEXT, 'is a class defined in a Spring application. '],
        [QuizMarkdownType.INLINE_CODE, 'Validator'],
        [QuizMarkdownType.TEXT, 'is a class that is a dependency of'],
        [QuizMarkdownType.INLINE_CODE, 'ValidationHandler'],
        [QuizMarkdownType.TEXT, '. Which of the following is true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The constructor of'],
            [QuizMarkdownType.INLINE_CODE, 'ValidationHandler'],
            [QuizMarkdownType.TEXT, 'is annotated with'],
            [QuizMarkdownType.INLINE_CODE, '@Autowired'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The constructor of'],
            [QuizMarkdownType.INLINE_CODE, 'Validator'],
            [QuizMarkdownType.TEXT, 'is annotated with'],
            [QuizMarkdownType.INLINE_CODE, '@Autowired'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The constructor of'],
            [QuizMarkdownType.INLINE_CODE, 'Validator'],
            [QuizMarkdownType.TEXT, 'is annotated with'],
            [QuizMarkdownType.INLINE_CODE, '@Bean'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The constructor of'],
            [QuizMarkdownType.INLINE_CODE, 'ValidationHandler'],
            [QuizMarkdownType.TEXT, 'is annotated with'],
            [QuizMarkdownType.INLINE_CODE, '@Bean'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer most accurately defines the way to define a class method before the arguments?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'accessModifier? static? returnType methodName'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'accessModifier static? returnType methodName'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'accessModifier? static? returnType? methodName'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'accessModifier? static returnType? methodName'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT true of the keyword'],
        [QuizMarkdownType.INLINE_CODE, 'static'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The keyword'],
            [QuizMarkdownType.INLINE_CODE, 'this'],
            [QuizMarkdownType.TEXT, 'is irrelevant to static methods'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The keyword'],
            [QuizMarkdownType.INLINE_CODE, 'static'],
            [QuizMarkdownType.TEXT, 'cannot be applied to the main thread'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The keyword'],
            [QuizMarkdownType.INLINE_CODE, 'static'],
            [QuizMarkdownType.TEXT, 'is irrelevant to encapsulation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The keyword'],
            [QuizMarkdownType.INLINE_CODE, 'static'],
            [QuizMarkdownType.TEXT, 'is irrelevant to nested classes'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, the'],
        [QuizMarkdownType.INLINE_CODE, 'static'],
        [QuizMarkdownType.TEXT, ' keyword can be used with nested classes (inner classes) to define static nested classes. Consequently, the nested class does not have _________________ of the enclosing class.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'reference to any instance'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'access to static fields and methods'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'access to any context'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 3'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true of the keyword'],
        [QuizMarkdownType.INLINE_CODE, 'this'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The keyword'],
            [QuizMarkdownType.INLINE_CODE, 'this'],
            [QuizMarkdownType.TEXT, 'is irrelevant to static methods'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The keyword'],
            [QuizMarkdownType.INLINE_CODE, 'this'],
            [QuizMarkdownType.TEXT, 'is irrelevant to abstract classes'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The keyword'],
            [QuizMarkdownType.INLINE_CODE, 'this'],
            [QuizMarkdownType.TEXT, 'is irrelevant to private classes'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The keyword'],
            [QuizMarkdownType.INLINE_CODE, 'this'],
            [QuizMarkdownType.TEXT, 'is irrelevant to protected classes'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is the correct syntax for a for loop in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'for (int i = 0; i < 10; i++) { // code to be executed }'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'for (i = 0; i < 10; i++) { // code to be executed }'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'for int i = 0; i < 10; i++ { // code to be executed }'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'for (int i = 0, i < 10, i++) { // code to be executed }'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you declare an array of integers in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'int[] numbers;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'int numbers[];'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'int array numbers;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'int array[] numbers;'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the public access modifier mean in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is accessible from any other class.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is accessible only within its own package.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is accessible only within its own class.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is accessible within its own package and subclasses.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An example of an access modifier would be'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The keyword'],
            [QuizMarkdownType.INLINE_CODE, 'private'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The keyword'],
            [QuizMarkdownType.INLINE_CODE, 'void'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The keyword'],
            [QuizMarkdownType.INLINE_CODE, 'class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The keyword'],
            [QuizMarkdownType.INLINE_CODE, 'static'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When no access modifier is specified, the field or method is accessible'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Only within its own package.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'From any other class.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'From the main class.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only from subclasses in the package.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the protected access modifier mean in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is accessible within its own package and by subclasses.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is accessible from any other class.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is accessible only within its own class.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is accessible only within its own package.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A blueprint for defining fields and methods.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'An instance of an object compiled at runtime.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A collection of static and abstract methods.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A data structure that holds values in a key-value format.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following can be members of a class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Fields, methods, constructors, nested classes'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only public fields and abstract methods'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Only methods, constructors, and nested classes'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only fields and constructors'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a constructor in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A special method used to initialize objects.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A method that is called when an object is garbage collected.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A static method used to initialize static fields.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A method used to compare two objects.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a default constructor in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A no-argument constructor automatically provided by the compiler if no other constructors are defined.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A constructor that initializes all fields to default values unless overrided at runtime.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A constructor that initializes static fields and methods.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A constructor that must be defined explicitly at compile time.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you declare an integer variable in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'int number;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'integer number;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Number number;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'int number()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you create an object of a class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'MyClass obj = new MyClass();'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'MyClass obj = MyClass();'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'MyClass obj = new Object();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'obj = new MyClass();'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the static keyword mean when applied to a member of a class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The member belongs to the class rather than to any specific instance.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The member cannot be accessed from outside the class.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The member cannot be accessed from any specific instance of the class.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is created by the constructor of the specific instance of that class.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is an abstract class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A class that cannot be instantiated and may contain abstract methods.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A class that can only contain abstract methods and can only be implemented via interface.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A class that must be extended by another class and has methods instantiated by the constructor.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code:'],
        [QuizMarkdownType.CODE, `public class HelloWorld {

  private Printer printer;

  public HelloWorld(Printer printer) {
    this.printer = printer;
  }

  public static void main(String[] args) {
    System.out.println("System.out.println(public static void main(String[] args) {)");

    Printer printer = new Printer();
    printer.print("printer.print("Printer printer = new Printer();")");
    printer.print("Hello World");
  }
}

class Printer {
  public Printer() {
  }

  public final void print(String arg) {
    System.out.println(arg);
  }

}`],
        [QuizMarkdownType.TEXT, 'Which of the following is true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The'],
            [QuizMarkdownType.INLINE_CODE, 'print'],
            [QuizMarkdownType.TEXT, 'method of'],
            [QuizMarkdownType.INLINE_CODE, 'Printer'],
            [QuizMarkdownType.TEXT, 'cannot be submethoded.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The'],
            [QuizMarkdownType.INLINE_CODE, 'Printer'],
            [QuizMarkdownType.TEXT, 'class cannot be subclassed'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'HelloWorld'],
            [QuizMarkdownType.TEXT, '\'s implementation of'],
            [QuizMarkdownType.INLINE_CODE, 'Printer'],
            [QuizMarkdownType.TEXT, 'is an example of static polymorphism'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The implementation of'],
            [QuizMarkdownType.INLINE_CODE, 'Printer'],
            [QuizMarkdownType.TEXT, 'by'],
            [QuizMarkdownType.INLINE_CODE, 'HelloWorld'],
            [QuizMarkdownType.TEXT, 'is an example of static binding'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a final class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A class that cannot be subclassed.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A class with final fields.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A class that cannot be instantiated.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A class that must be extended.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If you mark a class\'s method as '],
        [QuizMarkdownType.TEXT, 'If you mark a class\'s method as ______'],
        [QuizMarkdownType.TEXT, ', then it cannot be overridden by subclasses.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'final'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'abstract'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Autowired'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Serializable'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is an inner class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A class defined within another class.'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A class that is static.'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A class that is extended by another class.'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 2 and 3'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the protected access modifier mean in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is accessible within its own package and by subclasses.'],
          ],
        },
        {
          question: [
            [QuizMarkdownType.TEXT, 'What is the most concise way to declare a class in Java?'],
          ],
          answers: [
            {
              id: '0',
              answer: [
                [QuizMarkdownType.TEXT, 'class MyClass { }'],
              ],
            },
            {
              id: '1',
              answer: [
                [QuizMarkdownType.TEXT, 'public MyClass { }'],
              ],
            },
            {
              id: '2',
              answer: [
                [QuizMarkdownType.TEXT, 'void class MyClass { }'],
              ],
            },
            {
              id: '3',
              answer: [
                [QuizMarkdownType.TEXT, 'public class { }'],
              ],
            },
          ],
          correctAnswer: '0',
        },

        {
          question: [
            [QuizMarkdownType.TEXT, 'What is an anonymous class in Java?'],
          ],
          answers: [
            {
              id: '0',
              answer: [
                [QuizMarkdownType.TEXT, 'A class without a name defined and instantiated in a single expression.'],
              ],
            },
            {
              id: '1',
              answer: [
                [QuizMarkdownType.TEXT, 'A class that cannot be instantiated and is declared outside a parent class.'],
              ],
            },
            {
              id: '2',
              answer: [
                [QuizMarkdownType.TEXT, 'A class that is extended by another class.'],
              ],
            },
            {
              id: '3',
              answer: [
                [QuizMarkdownType.TEXT, 'A class that implements an interface.'],
              ],
            },
          ],
          correctAnswer: '0',
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is accessible from any other class or package.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is accessible only within its own class.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The member is accessible only within its own subclasses.'],
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
            [QuizMarkdownType.TEXT, 'The ability of an object to take many forms.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A way to define multiple classes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The process of creating a new object.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A technique to encapsulate data.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is method overriding in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A subclass provides a specific implementation of a method already defined in its superclass.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Two or more methods in a class have the same name but different parameters.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A method calls other method(s) defined in parent class(es).'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A class provides a specific implementation of a method already defined in one of its inner classes.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Access modifiers are most relevant to _______ in Java'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Inheritance'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Polymorphism'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A member is accessible from any other class by virtue of'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The access modifier'],
            [QuizMarkdownType.INLINE_CODE, 'public'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The access modifier'],
            [QuizMarkdownType.INLINE_CODE, 'private'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The access modifier'],
            [QuizMarkdownType.INLINE_CODE, 'protected'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The default access modifier'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A member is accessible from any other class by virtue of'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The access modifier'],
            [QuizMarkdownType.INLINE_CODE, 'public'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The access modifier'],
            [QuizMarkdownType.INLINE_CODE, 'private'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The access modifier'],
            [QuizMarkdownType.INLINE_CODE, 'protected'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The default access modifier'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the result of the following ternary operation?'],
        [QuizMarkdownType.CODE, 'int result = (5 > 3) ? 10 : 20;'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '10'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '20'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '5'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '3'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the result of the following ternary operation?'],
        [QuizMarkdownType.CODE, 'int result = (5 > 3) ? 10 : 20;'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '10'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '20'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '5'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '3'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of a static block in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To initialize static variables.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To initialize instance variables.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To create anonymous classes.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To define constructors.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is an anonymous class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A class defined within another class without a name.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A class with a default access modifier.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A class that implements an interface without methods.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A class that cannot be instantiated.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the diamond operator <> do in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It infers the type parameters of generic classes or methods.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It indicates a deprecated class.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It marks a method as synchronized.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It specifies a checked exception.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of varargs in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept a variable number of arguments.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To define constants in an interface.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To enable the use of lambda expressions.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify generic types.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of a synchronized block in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To control access to a shared resource in a multi-threaded environment.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To define an immutable class.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To create an enumeration.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To define a default method in an interface.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is an enum in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A special data type that represents a group of constants.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A class that cannot be instantiated.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A method that returns a constant value.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A special type of array.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a default method in a Java interface?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A method with an implementation that can be optionally overridden.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A method that must be overridden by implementing classes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A method that defines a constant value.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A method that synchronizes access to a resource.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the try-with-resources statement in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that resources are closed automatically after use.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To define multiple catch blocks for handling exceptions.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify a finally block for cleaning up resources.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To enable multiple resources to be used in a try block.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a lambda expression in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A concise way to represent an anonymous function.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A method that defines a constant value.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A block of code that defines a class.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A way to define a multi-threaded block of code.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you access the first element of an ArrayList in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.get(0)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list[0]'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.first()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.elementAt(0)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is the correct way to create a list of integers in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<Integer> list = new ArrayList<Integer>();'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<int> list = new ArrayList<int>();'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<Integer> list = new List<Integer>();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ArrayList<Integer> list = new List<Integer>();'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following methods is used to sort an array in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Arrays.sort(array);'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Collections.sort(array);'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'array.sort();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'array.order();'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you determine the size of an ArrayList in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.size()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.length'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.getSize()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.count()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will happen if you try to access an array element with an index that is out of bounds?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'An ArrayIndexOutOfBoundsException will be thrown.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will crash without an exception.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The array will automatically resize to accommodate the new index.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will continue running without any error.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following answers will cause a Java program to fail to compile?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<int> list = new ArrayList<int>();'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Integer[][] ints = new Integer[3][3];'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<Integer> list = new ArrayList<Integer>();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[][] matrix = new int[6][6];'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: It is possible to substitute'],
        [QuizMarkdownType.INLINE_CODE, 'Integer'],
        [QuizMarkdownType.TEXT, 'with'],
        [QuizMarkdownType.INLINE_CODE, 'int'],
        [QuizMarkdownType.TEXT, 'in a List (ArrayList) declaration.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'No, int and Integer are not interchangeable in Lists (ArrayList).'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, you can substitute int with Integer.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, but only in Lists (ArrayList).'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, you must always use int for Lists (ArrayList)s.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a LinkedList in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A data structure that stores elements in a doubly linked list.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A data structure that stores elements in a dynamic array.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A stack implementation using arrays.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A collection that allows duplicate elements in a set.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What are the key characteristics of a LinkedList in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Elements are linked using nodes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Elements are stored in contiguous memory locations.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It uses a fixed-size array to store elements.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It does not allow null elements.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a LinkedList, which operations are generally faster compared to an ArrayList?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Insertions and deletions.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Random access and element retrieval.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorting and searching.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Memory allocation and resizing.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does the access time of elements in a LinkedList compare to an ArrayList?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedList has slower access time due to sequential traversal.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedList has faster access time due to optimal path traversal.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedList and ArrayList have the same access time.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedList has faster access time for the first element only.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true of'],
        [QuizMarkdownType.INLINE_CODE, 'List'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists cannot accept primitive types such as'],
            [QuizMarkdownType.INLINE_CODE, 'int'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists cannot accept wrapper classes such as'],
            [QuizMarkdownType.INLINE_CODE, 'String'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists are the same thing as'],
            [QuizMarkdownType.INLINE_CODE, 'ArrayList'],
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
        [QuizMarkdownType.TEXT, 'When is it preferable to use a LinkedList over an ArrayList?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'When frequent insertions and deletions are required.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'When frequent random access is required.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'When a fixed-size collection is needed.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'When high memory efficiency is needed.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of iterator does LinkedList provide?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'ListIterator for bidirectional traversal.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Iterator for unidirectional traversal only.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'ArrayIterator for random access traversal.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'SetIterator for unique element traversal.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What methods does LinkedList provide for accessing the first and last elements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'getFirst() and getLast().'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'peekFirst() and peekLast().'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'first() and last().'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'head() and tail().'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method removes the first occurrence of a specified element in LinkedList?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'remove(Object o).'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'delete(Object o).'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'removeFirst(Object o).'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'deleteFirst(Object o).'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: It is possible to substitute'],
        [QuizMarkdownType.INLINE_CODE, 'int'],
        [QuizMarkdownType.TEXT, 'with'],
        [QuizMarkdownType.INLINE_CODE, 'Integer'],
        [QuizMarkdownType.TEXT, 'in a two-dimensional array declaration.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, you can substitute int with Integer.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No, int and Integer are not interchangeable in arrays.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, but only in one-dimensional arrays.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, you must always use int for arrays.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following answers will cause a Java program to fail to compile?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<int> list = new ArrayList<int>();'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Integer[][] ints = new Integer[3][3];'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<Integer> list = new ArrayList<Integer>();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[][] matrix = new int[6][6];'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is the correct way to declare a two-dimensional array in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[][] matrix = new int[6][6];'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int matrix[][] = new int[6][6];'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[] matrix = new int[6][6];'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[][] matrix = new int[6, 6];'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is the correct way to declare a two-dimensional array in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[][] matrix = new int[3][3];'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int matrix[][] = new int[3][3];'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[] matrix = new int[3][3];'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[][] matrix = new int[3, 3];'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you convert an array to an ArrayList in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<String> list = Arrays.asList(array);'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<String> list = new ArrayList<String>(array);'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<String> list = array.toList();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'List<String> list = List.of(array);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is the correct way to iterate over an array in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'for (int i = 0; i < numbers.length; i++) { System.out.println(numbers[i]); }'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'for (int i = 0; i <= numbers.length; i++) { System.out.println(numbers[i]); }'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'for (int i = 1; i < numbers.length; i++) { System.out.println(numbers[i]); }'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'for (int i = 1; i <= numbers.length; i++) { System.out.println(numbers[i]); }'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to remove an element from an ArrayList in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.remove(index);'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.delete(index);'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.removeElement(index);'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.drop(index);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Identify the syntax error in the following ArrayList initialization:'],
        [QuizMarkdownType.CODE, `
ArrayList<String> list = new ArrayList<String>[10];
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Incorrect way to specify the size of the ArrayList.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Incorrect data type for the ArrayList elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Missing import statement for ArrayList.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ArrayList cannot be initialized with a specific size.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is the correct way to add an element to an ArrayList in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.add("element");'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.append("element");'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.insert("element");'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'list.push("element");'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you determine the length of an array in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers.length'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers.size()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers.getLength()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers.count()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code snippet?'],
        [QuizMarkdownType.CODE, `
int[] numbers = {10, 20, 30, 40, 50};
System.out.println(numbers[2]);
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '30'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '20'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '40'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '50'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Java Streams?'],
        [QuizMarkdownType.CODE, 'Stream.of("apple", "banana", "cherry").map(String::toUpperCase);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Transforms each string to uppercase and returns a new stream.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Filters out strings that are not in uppercase and returns a new stream.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Collects the uppercase strings into a list and returns a new stream.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorts the strings and returns a new stream.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: In Java, it is necessary to convert a list to a stream in order to modify its elements'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'No, you can modify elements directly using list methods like add, remove, and set.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, you must always convert the list to a stream to modify its elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, but only if you want to add elements to the list.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, but using streams is the only way to remove elements from the list.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do with an ArrayList in Java?'],
        [QuizMarkdownType.CODE, 'List<String> list = new ArrayList<>(); list.add("Hello"); list.add("World");'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Adds "Hello" and "World" to the ArrayList.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a list with "Hello" and "World" but does not add them to the ArrayList.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Removes "Hello" and "World" from the ArrayList.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates an empty ArrayList.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Java?'],
        [QuizMarkdownType.CODE, 'int[] numbers = {1, 2, 3, 4, 5};'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Initializes an array with the values 1, 2, 3, 4, 5.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates an empty array of size 5.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sets all elements of the array to 0.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a list with the values 1, 2, 3, 4, 5.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the method'],
        [QuizMarkdownType.INLINE_CODE, 'Stream.of(string.split(","))'],
        [QuizMarkdownType.TEXT, 'do in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Converts an array returned by'],
            [QuizMarkdownType.INLINE_CODE, 'string.split(",")'],
            [QuizMarkdownType.TEXT, 'into a stream.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Converts a string into a list of substrings.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Splits a string into characters.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a parallel stream from a string.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does'],
        [QuizMarkdownType.INLINE_CODE, 'collect(Collectors.toList())'],
        [QuizMarkdownType.TEXT, 'do when used with a stream?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Collects the elements of the stream into a list.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Converts the stream into an array.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Filters the elements of the stream.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorts the elements of the stream.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the output of the following code snippet?'],
        [QuizMarkdownType.CODE, `String string = "name,surname";
List<String> list = Stream.of(string.split(","))
                                .collect(Collectors.toList());
System.out.println(list);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '[name, surname]'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '[name surname]'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '[name,surname]'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '[n, a, m, e, s, u, r, n, a, m, e]'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the'],
        [QuizMarkdownType.INLINE_CODE, '.chars()'],
        [QuizMarkdownType.TEXT, 'method do in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Returns an IntStream of the Unicode code points of each character in the String.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Converts the string to an array of characters.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Converts each character to its numeric value.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a stream of substrings split by commas.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which method call is missing for the function to work properly?'],
        [QuizMarkdownType.CODE, `public static List<Integer> individualDigits(int n) {
  return String.valueOf(n)
    .chars()
    .map(Character::getNumericValue)
    // Missing method
    .collect(Collectors.toList());
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '.boxed()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '.sorted()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '.distinct()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '.filter()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do with an ArrayList in Java?'],
        [QuizMarkdownType.CODE, 'List<String> list = new ArrayList<>(Arrays.asList("apple", "banana", "cherry")); int size = list.size();'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Calculates the size of the list.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Adds the size of the list to the ArrayList.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Removes the first element of the list.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Clears all elements in the list.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the method to get the length of a'],
        [QuizMarkdownType.INLINE_CODE, 'StringBuilder'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '.length()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '.length'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '.size'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '.size()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the best rewrite for the code below?'],
        [QuizMarkdownType.CODE, `public static List<String> uppercaseAllStringsFive(String string) {
  List<String> sL = new ArrayList<>();
  String[] sA = string.split(",");
  for (int i = 0; i < sA.length; i++) {
      sL.add(sA[i]);
  }
  return sL;
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Use the method'],
            [QuizMarkdownType.INLINE_CODE, 'List.replaceAll()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Use a stream to transform and collect the elements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Set each element individually in a for loop'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Return a'],
            [QuizMarkdownType.INLINE_CODE, 'map(String::toUpperCase)'],
            [QuizMarkdownType.TEXT, 'call in a stream'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the best replacement to the code below?'],
        [QuizMarkdownType.CODE, `public static List<String> uppercaseAllStringsFive(String string) {
  List<String> sL = new ArrayList<>();
  String[] sA = string.split(",");
  for (int i = 0; i < sA.length; i++) {
      sL.add(sA[i]);
  }
  return sL;
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `public static List<String> uppercaseAllStringsFour(String string) {
  List<String> sL = Arrays.asList(string.split(","));
  sL.replaceAll(String::toUpperCase);
  return sL;
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `public static List<String> uppercaseAllStringsThree(String string) {
  return Stream.of(string.split(",")).map(String::toUpperCase).toList();
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `public static List<String> uppercaseAllStringsFour(String string) {
  List<String> sL = Arrays.asList(string.split(","));
  sL.replaceAll(String::toUpperCase);
  return sL;
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `public static List<String> uppercaseAllStrings(String string) {
  return Arrays.stream(string.split(",")).map(String::toUpperCase).toList();
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Assuming the output is valid, what is proven in the following code?'],
        [QuizMarkdownType.CODE, 'String string = "name,surname"; List<String> list = Stream.of(string.split(",")).toList()'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays can be utilized as iterables in Java.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A string can be converted into an array of substrings.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A string can be split into characters.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A list is derived from operations that return a stream.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Java Streams?'],
        [QuizMarkdownType.CODE, 'Stream.of(1, 2, 3, 4, 5).filter(n -> n % 2 == 0);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Filters out odd numbers and returns a new stream with even numbers.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplies each number by 2 and returns a new stream.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Removes all numbers from the stream.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a list with the values 1, 2, 3, 4, 5.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do with an ArrayList in Java?'],
        [QuizMarkdownType.CODE, 'List<String> list = new ArrayList<>(Arrays.asList("apple", "banana", "cherry")); list.remove("banana");'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Removes "banana" from the list.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Removes the first element of the list.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Clears all elements in the list.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Adds "banana" to the list.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Java?'],
        [QuizMarkdownType.CODE, 'int[] numbers = {1, 2, 3, 4, 5}; int length = numbers.length;'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Gets the length of the array, which will be 5.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Sets the length of the array to 5.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Initializes an empty array of size 5.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Sets all elements of the array to 0.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Java Streams?'],
        [QuizMarkdownType.CODE, 'Stream.of("apple", "banana", "cherry").forEach(System.out::println);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Prints each element of the stream to the console.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Collects the elements of the stream into a list.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Filters out elements that are not "apple", "banana", or "cherry".'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Transforms each string to uppercase.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code snippet?'],
        [QuizMarkdownType.CODE, 'int[] numbers = {10, 20, 30, 40, 50}; System.out.println(numbers[4]);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '50'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '40'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '30'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '20'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Java Streams?'],
        [QuizMarkdownType.CODE, 'List<String> list = Stream.of("apple", "banana", "cherry").collect(Collectors.toList());'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Collects the elements of the stream into a list.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Collects the elements of a list and creates a stream from them.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Transforms each string to uppercase and collects them into a list.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Prints each element of the stream to the console.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do with an ArrayList in Java?'],
        [QuizMarkdownType.CODE, 'List<String> list = new ArrayList<>(Arrays.asList("apple", "banana", "cherry")); String element = list.get(1);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Gets the element at index 1, which will be "banana".'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Removes the element at index 1, which will be "banana".'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sets the element at index 1 to "cherry".'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Adds a new element "banana" at index 1.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'How is memory allocation different for arrays and lists in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays allocate memory for all elements up front, while lists allocate memory dynamically as needed.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists allocate memory for all elements up front, while arrays allocate memory dynamically as needed.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both arrays and lists allocate memory for all elements up front.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Both arrays and lists allocate memory dynamically as needed.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which is generally faster for fixed-size collections in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays are generally faster due to lower overhead.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists are generally faster due to dynamic memory allocation.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both arrays and lists have the same performance for fixed-size collections.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists are faster for fixed-size collections due to lower overhead.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which data structure in Java comes with utility methods like add, remove, and contains?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists'],
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
            [QuizMarkdownType.TEXT, 'Both arrays and lists'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither arrays nor lists'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, a'],
        [QuizMarkdownType.INLINE_CODE, 'List'],
        [QuizMarkdownType.TEXT, 'is capable of being multi-dimensional.'],
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
        [QuizMarkdownType.TEXT, 'Which of the following is not a primitive type in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'string'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'byte'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'boolean'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The eight wrapper classes of Java are'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Byte'],
            [QuizMarkdownType.INLINE_CODE, 'Short'],
            [QuizMarkdownType.INLINE_CODE, 'Integer'],
            [QuizMarkdownType.INLINE_CODE, 'Long'],
            [QuizMarkdownType.INLINE_CODE, 'Float'],
            [QuizMarkdownType.INLINE_CODE, 'Double'],
            [QuizMarkdownType.INLINE_CODE, 'Boolean'],
            [QuizMarkdownType.INLINE_CODE, 'Character'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'byte'],
            [QuizMarkdownType.INLINE_CODE, 'short'],
            [QuizMarkdownType.INLINE_CODE, 'int'],
            [QuizMarkdownType.INLINE_CODE, 'long'],
            [QuizMarkdownType.INLINE_CODE, 'float'],
            [QuizMarkdownType.INLINE_CODE, 'double'],
            [QuizMarkdownType.INLINE_CODE, 'boolean'],
            [QuizMarkdownType.INLINE_CODE, 'char'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Either of the above'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which data structure in Java can be multi-dimensional?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both arrays and lists'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither arrays nor lists'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is the correct way to declare an array in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'int[] array = new int[5];'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'List<int> list = new ArrayList<>(5);'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'int array = new ArrayList<>(5);'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'int[] array = new ArrayList<>(5);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the function of the'],
        [QuizMarkdownType.INLINE_CODE, '5'],
        [QuizMarkdownType.TEXT, 'in the following code?'],
        [QuizMarkdownType.CODE, 'int[] array = new int[5];'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To define the size of the array'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To define an initialized value in the array'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To define the initialized array as five ints of '],
            [QuizMarkdownType.INLINE_CODE, '5'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which data structure supports iterators and enhanced for loops in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists'],
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
            [QuizMarkdownType.TEXT, 'Both arrays and lists'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither arrays nor lists'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Can arrays and lists in Java store elements of different types?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'No, both arrays and lists can only store elements of the same type.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, both arrays and lists can store elements of different types.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays can store different types, but lists cannot.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists can store different types, but arrays cannot.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you access the first element of an array in Java?'],
        [QuizMarkdownType.CODE, 'int[] array = {1, 2, 3};'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'array[0]'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'array.get(0)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'array.first()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'array.elementAt(0)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to add an element to a list in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'add'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'put'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'append'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'insert'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is one key difference between an array and a list in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays have a fixed size while lists can grow and shrink dynamically.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays can store elements of different types, while lists can only store elements of the same type.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays come with many utility methods like add, remove, etc., while lists do not.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists are generally faster for fixed-size collections due to lower overhead.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Java Streams?'],
        [QuizMarkdownType.CODE, 'List<Integer> list = Stream.of(1, 2, 3, 4, 5).map(n -> n * n).collect(Collectors.toList());'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Transforms each number to its square and collects the results into a list.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Filters out numbers that are not squares and collects the results into a list.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Transforms each number in a list to its square and creates a stream.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Adds each number to a list.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code snippet?'],
        [QuizMarkdownType.CODE, 'int[] numbers = new int[5]; numbers[0] = 10; numbers[1] = 20; System.out.println(numbers[1]);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '20'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '10'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '0'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '5'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do with an ArrayList in Java?'],
        [QuizMarkdownType.CODE, 'List<String> list = new ArrayList<>(Arrays.asList("apple", "banana", "cherry")); list.clear();'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Removes all elements from the list.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Removes the first element from the list.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sets all elements of the list to null.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Adds a new element to the list.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Java Streams?'],
        [QuizMarkdownType.CODE, 'int sum = Stream.of(1, 2, 3, 4, 5).reduce(0, Integer::sum);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Calculates the sum of the elements in the stream, which will be 15.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplies all elements of the stream together.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Subtracts all elements of the stream from 0.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Prints each element of the stream to the console.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Mono.just("Hello").flatMap(s -> Mono.just(s + " WebFlux"));'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Combines "Hello" and "WebFlux" into a single Mono.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Maps "Hello" to "WebFlux" in a Mono stream.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a stream that emits "Hello" and "WebFlux" separately.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits "Hello WebFlux".'],
          ],
        },
      ],
      correctAnswer: '3',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Mono.just(5).map(x -> x * 2);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits 10.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Maps 5 to 10 in a Mono stream.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a stream that emits 5 and 10 separately.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits 5.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Flux.just(1, 2, 3, 4, 5).filter(x -> x % 2 == 0);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits 2 and 4.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Filters out odd numbers and creates a Mono.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a stream that emits only odd numbers.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits 1, 2, 3, 4, 5.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Flux.just(1, 2, 3, 4, 5).reduce((x, y) -> x + y);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits the sum of the numbers: 15.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits the sum of each pair of numbers.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits the product of the numbers.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a stream that emits each number separately.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Mono.just("Hello").concatWith(Mono.just("World"));'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a stream that emits "Hello" followed by "World".'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Combines "Hello" and "World" into a single Mono.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Maps "Hello" to "World" in a Mono stream.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits "HelloWorld".'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Mono.zip(Mono.just("Hello"), Mono.just("World"));'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits a tuple ("Hello", "World").'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Combines "Hello" and "World" into a single string.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits "Hello" followed by "World".'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Maps "Hello" to "World" in a Mono stream.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Flux.range(1, 10).buffer(3);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits lists of 3 elements each: [1, 2, 3], [4, 5, 6], [7, 8, 9], [10].'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits elements in batches of 3.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Filters out elements that are not multiples of 3.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Maps each element to its square in a Flux stream.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Mono.just("Test").flatMap(s -> Mono.just(s.length()));'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits the length of the string "Test".'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits the string "Test".'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits the string "Test".'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits the length of the string "Test".'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Flux.just("1", "2", "3").map(Integer::parseInt);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits the integers 1, 2, 3.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits a list of integers.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits the integers 1, 2, 3 separately.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits the strings "1", "2", "3".'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Mono.just("Data").map(String::toUpperCase);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits "DATA".'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits "DATA".'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Maps "Data" to a single Mono stream.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits "Data".'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Flux.just("A", "B", "C").collectList();'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits a list containing "A", "B", "C".'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits "A", "B", "C".'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits "A", "B", "C" separately.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Maps "A", "B", "C" to individual Mono streams.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Mono.just("World").flatMapMany(s -> Flux.fromArray(s.split("")));'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits the characters "W", "o", "r", "l", "d".'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits "World".'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Maps "World" to a single Mono stream.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits "World".'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Mono.just("Hello").flatMapMany(s -> Flux.just(s.split("")));'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits the characters "H", "e", "l", "l", "o".'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Maps "Hello" to a single Mono stream.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits "Hello".'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits "Hello".'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Flux.just("A", "B").mergeWith(Flux.just("C", "D"));'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits "A", "B", "C", and "D".'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Combines "A" and "B" with "C" and "D" into a single Mono.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits "ABCD".'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Maps "A" to "D" in a Flux stream.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Mono.empty().switchIfEmpty(Mono.just("Default"));'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits "Default" if the original Mono is empty.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits an empty string.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Flux that emits "Default".'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Maps "Default" to the original Mono stream.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the intermediate operation '],
        [QuizMarkdownType.INLINE_CODE, 'skip'],
        [QuizMarkdownType.TEXT, ' do in Java Streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It returns a new stream consisting of the remaining elements after discarding the first n elements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It returns a new stream consisting of the first n elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It collects the elements of the stream into a list.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It transforms each element of the stream into another form.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the '],
        [QuizMarkdownType.INLINE_CODE, 'peek'],
        [QuizMarkdownType.TEXT, 'intermediate operation in Java Streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows performing a side-effect action on each element of the stream as elements are consumed by a terminal operation.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It collects the elements of the stream into a list.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It transforms each element of the stream into another form.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It filters elements based on a given predicate.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the intermediate operation '],
        [QuizMarkdownType.INLINE_CODE, 'limit'],
        [QuizMarkdownType.TEXT, ' do in Java Streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It returns a new stream consisting of the first n elements of the stream.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It returns a new stream consisting of the elements after skipping the first n elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It filters elements based on a given predicate.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It sorts the elements of the stream.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the intermediate operation '],
        [QuizMarkdownType.INLINE_CODE, 'distinct'],
        [QuizMarkdownType.TEXT, ' do in Java Streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It returns a new stream consisting of unique elements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It sorts the elements of the stream.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It applies a function to each element of the stream and returns a new stream.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It filters elements based on a given predicate.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the '],
        [QuizMarkdownType.INLINE_CODE, 'sorted'],
        [QuizMarkdownType.TEXT, ' intermediate operation in Java Streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It returns a new stream with the elements sorted according to natural order or a provided comparator.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It returns a new stream consisting of distinct elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It returns a stream that skips the first n elements.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It limits the stream to the first n elements.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the intermediate operation '],
        [QuizMarkdownType.INLINE_CODE, 'map'],
        [QuizMarkdownType.TEXT, ' do in Java Streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It returns a new stream by applying a function to each element of the original stream.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It filters elements based on a given predicate.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It sorts the elements of the stream.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It performs an action for each element of the stream.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the intermediate operation '],
        [QuizMarkdownType.INLINE_CODE, 'filter'],
        [QuizMarkdownType.TEXT, ' do in Java Streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It returns a new stream consisting of elements that match a given predicate.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It transforms each element of the stream into another form.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It sorts the elements of the stream.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It collects the elements of the stream into a list.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does it mean for stream operations to be stateless in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Stream operations are processed independently of others.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Stream operations can store and modify state between elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Streams can only process elements in sequential order.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stream operations must use shared variables for state management.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is meant by non-interference in the context of Java streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Streams do not modify the source data structure and produce a new result instead.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Streams directly modify each element in the source data structure.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Streams cannot be reused once they are created.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Streams always operate on primitive data types.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'How do streams in Java take advantage of parallel processing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Streams can be processed in parallel, utilizing multi-core processors to improve performance for large datasets.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Streams automatically parallelize all operations by default.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Streams are always processed using a single thread.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Streams do not support parallel processing.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does lazy evaluation mean in the context of Java streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Intermediate operations are not executed until a terminal operation is invoked.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'All operations are executed immediately as they are encountered.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Streams can only be processed using a single thread.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Streams do not support parallel processing.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'How do streams in Java support functional-style operations?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By using functional interfaces such as Predicate, Function, and Consumer.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By directly modifying elements in the stream.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By requiring the use of explicit loops.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By only supporting primitive data types.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What does it mean for streams in Java to be declarative?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They allow you to express complex data processing queries in a clear and concise way using a fluent API.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They modify the source data structure directly.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They are always evaluated eagerly.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They can only process data sequentially.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is an intermediate operation in the context of Java Streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'An operation that returns a new stream without consuming it.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'An operation that consumes the stream and produces a result or side-effect.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'An operation that modifies the source data structure directly.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'An operation that is only used with parallel streams.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'It is technically correct to refer to an uninstantiated class as an object in Java.'],
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
        [QuizMarkdownType.TEXT, 'It is technically correct not to refer to an uninstantiated class as an object in Java.'],
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
        [QuizMarkdownType.TEXT, 'Assume you are working in a file'],
        [QuizMarkdownType.INLINE_CODE, 'HelloWorld.java'],
        [QuizMarkdownType.TEXT, 'which consists of a main class'],
        [QuizMarkdownType.INLINE_CODE, 'HelloWorld'],
        [QuizMarkdownType.TEXT, 'and a subclass'],
        [QuizMarkdownType.INLINE_CODE, 'HelloWorldPrinter'],
        [QuizMarkdownType.TEXT, 'that has a non-static method'],
        [QuizMarkdownType.INLINE_CODE, 'printHelloWorld'],
        [QuizMarkdownType.TEXT, 'that prints the string'],
        [QuizMarkdownType.INLINE_CODE, '"Hello World"'],
        [QuizMarkdownType.TEXT, '. This method is to be run in'],
        [QuizMarkdownType.INLINE_CODE, 'HelloWorld'],
        [QuizMarkdownType.TEXT, '. For the program to work properly, which of the following answers must be true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'HelloWorldPrinter'],
            [QuizMarkdownType.TEXT, 'is initialized inside the'],
            [QuizMarkdownType.INLINE_CODE, 'HelloWorld'],
            [QuizMarkdownType.TEXT, 'class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'HelloWorldPrinter'],
            [QuizMarkdownType.TEXT, 'is declared inside the'],
            [QuizMarkdownType.INLINE_CODE, 'HelloWorld'],
            [QuizMarkdownType.TEXT, 'class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'HelloWorld'],
            [QuizMarkdownType.TEXT, 'is declared inside the'],
            [QuizMarkdownType.INLINE_CODE, 'HelloWorldPrinter'],
            [QuizMarkdownType.TEXT, 'class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which two commands can compaile and execute a'],
        [QuizMarkdownType.INLINE_CODE, 'HelloWorld.java'],
        [QuizMarkdownType.TEXT, 'script?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `javacompile HelloWorld.java
java HelloWorld.java`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `javac HelloWorld.java
javarun HelloWorld.java`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `javacompile HelloWorld.java
javarun HelloWorld.java`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `javac HelloWorld.java
java HelloWorld.java`],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you write a Hello World script in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `public class HelloWorld {
  public static void main(String[] args) {
      System.out.println("Hello World");
  }
}`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `public static void main(String[] args) {
    System.out.println("Hello World");
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `public class HelloWorld {
  public static void main() {
      System.out.println("Hello World");
  }
}`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `class HelloWorld {
  static void main(String[] args) {
      System.out.println("Hello World");
  }
}`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the '],
        [QuizMarkdownType.INLINE_CODE, 'map'],
        [QuizMarkdownType.TEXT, ' operation in Java Streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To transform each element of the stream into another form.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To filter elements from the stream based on a predicate.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To collect the elements of the stream into a list.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To sort the elements of the stream.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method would you use to filter elements of a stream based on a condition?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'filter'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'map'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'collect'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'forEach'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do?'],
        [QuizMarkdownType.CODE, `List<String> names = Arrays.asList("John", "Jane", "Jack", "Doe");
List<String> upperCaseNames = names.stream()
                                   .map(String::toUpperCase)
                                   .collect(Collectors.toList());`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It converts all names in the list to uppercase and collects them into a new list.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It filters out names that are not in uppercase.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It sorts the names in alphabetical order and collects them into a new list.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It concatenates all names into a single string.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which terminal operation is used to collect the elements of a stream into a list?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'collect'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'toList'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'toCollection'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'toArray'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the difference between '],
        [QuizMarkdownType.INLINE_CODE, 'map'],
        [QuizMarkdownType.TEXT, ' and '],
        [QuizMarkdownType.INLINE_CODE, 'flatMap'],
        [QuizMarkdownType.TEXT, ' in Java Streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'map transforms each element into another form, while flatMap transforms each element into a stream and flattens them into a single stream.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'map is used for filtering elements, while flatMap is used for mapping elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'map is a terminal operation, while flatMap is an intermediate operation.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'map collects elements into a list, while flatMap collects elements into a set.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are deciding whether to use stream() in your WebFlux application as presented below. Is this implementation considered blocking?'],
        [QuizMarkdownType.CODE, `restaurant.setMenuItems(restaurantPUTReq.getMenuItems().stream()
.map(menuItemReq -> {
    ObjectId id = menuItemReq.getId()
        .map(ObjectId::new)
        .orElseGet(ObjectId::new);
    return new MenuItem(id, menuItemReq.getName(), menuItemReq.getPrice());
})
.collect(Collectors.toList()));`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'No, because the operations are minute and performed in-memory.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, because stream operations inherently block the main thread.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'No, because the stream operation is always asynchronous.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, because setting object fields is a blocking operation.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'CompletableFuture, which can be used to execute tasks asynchronously, can be found in'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Java Spring'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Java WebFlux'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Java Spring and Java WebFlux'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither framework'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'To which of the following does the keyword'],
        [QuizMarkdownType.INLINE_CODE, 'abstract'],
        [QuizMarkdownType.TEXT, 'not apply?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Static objects']],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Classes'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Methods and properties'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Overridden objects'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true of Java Spring?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Java Spring has methods for asynchronously handling blocking tasks'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Java Spring leverages Java\'s multithreading capabilities to remain non-blocking'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Java Spring has a mechanism similar to Node.js\'s event loop'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Java Spring is built on subscribers and publishers'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Java WebFlux uses Java\'s multithreading capabilities'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To achieve optimization at compilation and runtime'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To handle errors on methods such as'],
            [QuizMarkdownType.INLINE_CODE, 'onErrorResume'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To finalize objects for garbage collection'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To achieve non-blocking runtimes'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following classes violates the Single-Responsibility Principle?'],
        [QuizMarkdownType.CODE, `class Employee {
  void calculatePay() { ... }
  void saveToDatabase() { ... }
}`],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.CODE, `class Employee {
  void calculatePay() { ... }
}`],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.CODE, `class Database {
  void save(Employee emp) { ... }
}`],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.CODE, `class Payroll {
  void process(Employee emp) { ... }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The first class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The second class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The third class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The fourth class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which function below violates the Single-Responsibility Principle?'],
        [QuizMarkdownType.CODE, `void generateReport() {
  fetchData();
  processData();
  printReport();
}`],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.CODE, 'void fetchData() { ... }'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.CODE, 'void processData() { ... }'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.CODE, 'void printReport() { ... }'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The first function'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The second function'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The third function'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The fourth function'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following scenarios violates the Single-Responsibility Principle?'],
        [QuizMarkdownType.KATEX, 'A class handles both user authentication and user profile management'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.KATEX, 'A class handles only user authentication'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.KATEX, 'A class handles only user profile management'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.KATEX, 'A class handles only data validation for user input'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The first scenario'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The second scenario'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The third scenario'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The fourth scenario'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following classes violates the Single-Responsibility Principle?'],
        [QuizMarkdownType.CODE, `class User {
  void login() { ... }
  void register() { ... }
  void sendEmailNotification() { ... }
}`],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.CODE, `class User {
  void login() { ... }
  void register() { ... }
}`],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.CODE, `class EmailService {
  void sendEmailNotification(User user) { ... }
}`],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.CODE, `class RegistrationService {
  void register(User user) { ... }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The first class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The second class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The third class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The fourth class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following functions violates the Single-Responsibility Principle?'],
        [QuizMarkdownType.CODE, `void manageUserAccount() {
  createUser();
  updateUser();
  deleteUser();
}`],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.CODE, 'void createUser() { ... }'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.CODE, 'void updateUser() { ... }'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.CODE, 'void deleteUser() { ... }'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The first function'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The second function'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The third function'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The fourth function'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following handler,'],
        [QuizMarkdownType.CODE, `public Mono<ServerResponse> getUserOrders(ServerRequest req) {
    String authorizationHeader = req.headers().firstHeader("Authorization");
    return this.getAuth0IdFromToken(authorizationHeader)
            .flatMap(auth0Id -> {
                PageRequest pageRequest = this.getPageRequest(req);
                Flux<Order> ordersFlux = ordersRepository.findAllByUserId(auth0Id, pageRequest);
                Mono<Long> count = ordersRepository.findAllByUserId(auth0Id, Pageable.unpaged()).count();
                // A method is missing below
                return ordersFlux.______()
                // A method is missing above
                        .zipWith(count, (list, cnt) -> OrdersGETReq.fromOrders(list, pageRequest, cnt))
                        .flatMap(dtoMono -> dtoMono)
                        .flatMap(dto -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).bodyValue(dto));
            });
}`],
        [QuizMarkdownType.TEXT, 'What method is missing from the line'],
        [QuizMarkdownType.INLINE_CODE, 'return ordersFlux'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'collectList'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'sorted'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'collect'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'concat'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method would you use to sort the elements of a stream in natural order?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'sorted'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'order'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'sort'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'arrange'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_____ is a terminal operation while _____ is an intermediate operation.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'forEach, map'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'peek, forEach'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'map, forEach'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'filter, map'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which terminal operation can be used to perform an action for each element of a stream?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'forEach'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'peek'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'map'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'filter'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the '],
        [QuizMarkdownType.INLINE_CODE, 'reduce'],
        [QuizMarkdownType.TEXT, ' operation in Java Streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To combine the elements of the stream into a single result using an associative accumulation function.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To filter elements of the stream based on a predicate.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To collect the elements of the stream into a list.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To transform each element of the stream into another form.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of a terminal operation in Java Streams?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'collect'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'map'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'filter'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'sorted'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which class is used in Spring WebFlux to handle incoming HTTP requests reactively?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Mono'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Flux'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'RouterFunction'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'WebClient'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main difference between Mono and Flux in Spring WebFlux?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Mono is used for zero or one element, while Flux is used for zero or many elements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Mono is used for synchronous processing, while Flux is used for asynchronous processing.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Mono is used for single-threaded processing, while Flux is used for multi-threaded processing.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Mono is used for blocking operations, while Flux is used for non-blocking operations.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which operator is used to merge two Flux streams in Spring WebFlux?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'merge()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'concat()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'zip()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'combine()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code snippet do in Spring WebFlux?'],
        [QuizMarkdownType.CODE, 'Mono.just("Hello").flatMap(s -> Mono.just(s + " World"));'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Combines "Hello" and "World" into a single Mono.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Maps "Hello" to "World" in a Mono stream.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a stream that emits "Hello" and "World" separately.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Mono that emits "Hello World".'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the '],
        [QuizMarkdownType.INLINE_CODE, 'flatMap'],
        [QuizMarkdownType.TEXT, ' operator in reactive programming with Spring WebFlux?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To transform each element emitted by a Publisher into a Publisher and then flatten these Publishers into a single Publisher.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To combine multiple Publishers into a single Publisher without transforming the elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To filter elements emitted by a Publisher based on a predicate.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To map each element emitted by a Publisher to another element.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    // {
    //   question: [
    //     [QuizMarkdownType.TEXT, 'Which of the following is a correct usage of '],
    //     [QuizMarkdownType.INLINE_CODE, 'flatMap'],
    //     [QuizMarkdownType.TEXT, ' in Spring WebFlux?'],
    //     [QuizMarkdownType.CODE, `//   Flux.just("a", "b", "c").flatMap(s -> Flux.just(s.toUpperCase()));
    //     `],
    //   ],
    //   answers: [
    //     {
    //       id: '0',
    //       answer: [
    //         [QuizMarkdownType.TEXT, 'It converts each string to uppercase and flattens the result into a single Flux.'],
    //       ],
    //     },
    //     {
    //       id: '1',
    //       answer: [
    //         [QuizMarkdownType.TEXT, 'It converts each string to lowercase and combines the result into a single Mono.'],
    //       ],
    //     },
    //     {
    //       id: '2',
    //       answer: [
    //         [QuizMarkdownType.TEXT, 'It filters out elements that are not uppercase.'],
    //       ],
    //     },
    //     {
    //       id: '3',
    //       answer: [
    //         [QuizMarkdownType.TEXT, 'It concatenates the strings and returns a single Mono.'],
    //       ],
    //     },
    //   ],
    //   correctAnswer: '0',
    // },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the difference between '],
        [QuizMarkdownType.INLINE_CODE, 'map'],
        [QuizMarkdownType.TEXT, ' and '],
        [QuizMarkdownType.INLINE_CODE, 'flatMap'],
        [QuizMarkdownType.TEXT, ' in Spring WebFlux?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'map transforms each element to another element, while flatMap transforms each element to a Publisher and flattens them into a single Publisher.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'map is used for synchronous operations, while flatMap is used for asynchronous operations.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'map filters elements based on a predicate, while flatMap combines multiple Publishers.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'map is used for blocking operations, while flatMap is used for non-blocking operations.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to define a WebFlux controller in Spring?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@RestController'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@WebFluxController'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@ReactiveController'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@FluxController'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Spring WebFlux, which method is used to handle errors in a reactive stream?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'onErrorResume()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'doOnError()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'handleError()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'catchError()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true about the backpressure mechanism in Spring WebFlux?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It controls the flow of data to prevent overwhelming the receiver.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It increases the rate of data production.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It is used to buffer data streams.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It is only applicable to synchronous processing.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the function of the WebClient class in Spring WebFlux?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To make non-blocking HTTP requests.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To handle WebSocket connections.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To create reactive data streams.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To configure reactive routes.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method would you use to convert a Flux to a Mono in Spring WebFlux?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'collectList()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'reduce()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'collect()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'concat()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which keyword is used to define a class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'define'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'new'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default value of a boolean variable in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'false'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'true'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '0'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method must be implemented by all threads in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'run()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'start()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'execute()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'init()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you declare an abstract method in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'abstract void methodName();'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'void methodName();'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'abstract methodName();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'abstract methodName() {}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the size of an int variable in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '32 bits'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '64 bits'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '16 bits'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '8 bits'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to start a thread in Java?'],
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
            [QuizMarkdownType.INLINE_CODE, 'run()'],
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
            [QuizMarkdownType.INLINE_CODE, 'execute()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which package contains the Random class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'java.util'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'java.lang'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'java.io'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'java.math'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the output of the following code snippet?'],
        [QuizMarkdownType.CODE, 'System.out.println(10 + 20 + "30")'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '3030'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '102030'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '30'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '60'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is not a valid keyword in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'interface'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'string'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'extends'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'implements'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is called to release resources in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'close()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'release()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'shutdown()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'terminate()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is a marker interface in Java?']],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'An interface with no methods or fields that conveys special behavior to a class that implements it.']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'An interface that defines common functionalities for a group of classes.']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'There is no such thing as a marker interface in Java.']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which of the following is a commonly used marker interface in Java?']],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Runnable']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Cloneable']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Serializable']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'All of the above']],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is the benefit of using marker interfaces?']],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Improves code readability and maintainability.']],
          order: 0,
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Allows for code polymorphism.']],
          order: 1,
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'There are no benefits to using marker interfaces.']],
          order: 2,
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Both A and B.']],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Can a marker interface have static methods?']],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Yes, marker interfaces can have static methods.']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'No, marker interfaces cannot have any methods.']],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is an alternative to using marker interfaces in Java 5 and above?']],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Annotations']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Abstract classes']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Enums']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is Java bytecode?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Machine code that can be directly executed by the JVM',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Intermediate code generated by the Java compiler',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Source code written in Java',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Assembly language code',
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
          'Which file extension is used for Java bytecode files?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.java',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.class',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.bytecode',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.jbc',
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
          'Which tool is used to generate Java bytecode from Java source code?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'javac',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'java',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'javadoc',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'javap',
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
          'javac stands for',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Java Compiler',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The Java Interpreter',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Java Code',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Java Bytecode',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the operand stack used for in the Java Virtual Machine (JVM)?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It is used for intermediate calculations and method invocation in the JVM.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It stores local variables for method execution upon running'],
            [QuizMarkdownType.INLINE_CODE, 'java'],
            [QuizMarkdownType.TEXT, 'with the'],
            [QuizMarkdownType.INLINE_CODE, '.class'],
            [QuizMarkdownType.TEXT, 'file'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It adds and pops off function calls as they are handled by the main thread.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It manages memory allocation for streams and objects.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is static binding in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The association of a method call to a method definition at compile time.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The association of a method call to a method definition at runtime.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Binding variables to data types dynamically.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Binding classes together using interfaces.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Complete the sentence: Static binding in Java is the association of a method call to a method definition __ _____'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'at compile time.'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'at runtime.'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'at compile time or runtime.'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above.'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Complete the sentence: Dynamic binding in Java is the association of a method call to a method definition __ _____'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'at runtime.'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'at compile time.'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'at compile time or runtime.'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above.'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is dynamic binding in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The association of a method call to a method definition at runtime.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The association of a method call to a method definition at compile time.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Binding variables to data types dynamically.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Binding classes together using interfaces.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of methods in Java typically use static binding?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Static and private methods.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstract methods.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Overridden methods.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Final methods.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does static binding impact performance in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Static binding generally improves performance.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Static binding decreases performance due to late binding.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Static binding has no impact on performance.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Static binding only affects memory usage.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which scenario is static binding used in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'When calling overloaded methods.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'When calling overridden methods.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'When using polymorphism with interfaces.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'When using lambda expressions.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the primary function of the javac command?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Runs a compiled Java program',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Translates Java source code into bytecode',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Manages libraries and dependencies',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decompiles bytecode back to Java source code',
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
          'You have a Java source file named Main.java. Which command will compile it?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'java Main',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'compile Main.java',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'javac Main',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'run Main.java',
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
          'What will be the output of the following Java bytecode instruction?',
        ],
      ],
      code: `iconst_1
iconst_2
iadd
invokestatic java/io/PrintStream.println(I)V`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '3',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Compilation error',
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
          'Which of the following is not a Java feature?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object-oriented',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Use of pointers',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Portable',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dynamic',
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
          'Which memory area is not directly managed by the JVM?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Heap',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Stack',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Native Method Stack',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Register',
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
          'Java achieves platform independence through which mechanism?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Bytecode',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Java Compiler',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Just-In-Time Compiler',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Java Virtual Machine',
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
          'Which of the following is a valid declaration of a char?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'char ch = "Z";',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'char ch = Z;',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'char ch = \'Z\';',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'char ch = 7;',
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
          'Which keyword is used to prevent inheritance of a class in Java?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'static',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'final',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'abstract',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'extends',
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
          'Which exception is thrown when Java cannot allocate an object because it is out of memory?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'MemoryError',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'OutOfMemoryError',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'MemoryAllocationException',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'MemoryAccessException',
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
          'Which of the following is not a wrapper class in Java?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Byte',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Integer',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Character',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'String',
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
          'Which method must be defined by a Java class implementing the java.lang.Runnable interface?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'void run()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'void start()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'void main()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'void execute()',
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
          'Which package is imported by default in every Java program?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'java.util',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'java.lang',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'java.io',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'java.net',
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
          'Which of the following is the correct way to declare an abstract class?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'public class MyClass abstract',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'abstract public class MyClass',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'abstract class MyClass',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'abstract MyClass class',
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
          'Which method is called when an object is made available for garbage collection?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'finalize()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'garbageCollect()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'destruct()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'clean()',
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
          'What will be the output of the following code?',
        ],
      ],
      code: `public class Test {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Hello, World!',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'hello, world!',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'HELLO, WORLD!',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'None of the above',
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
          'Which of these cannot be used for a variable name in Java?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'identifier',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'keyword',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'name',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'string',
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
          'Which statement is true about Java bytecode?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can be directly executed by the JVM.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is platform-independent.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is the source code of a Java program.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is written in binary code.',
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
          'What will be the result of compiling and running the following code?',
        ],
      ],
      code: `public class Test {
  public static void main(String[] args) {
    int x = 5;
    System.out.println(x++);
  }
}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '6',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '5',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Compilation error',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Runtime error',
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
          'Which of the following is not a Java access modifier?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'private',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'protected',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'public',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'internal',
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
          'In Java, which operator is used to concatenate two strings?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '+',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '&',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '||',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '==',
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
          'Which method is used to convert an object into a byte stream in Java?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'serialize()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'marshal()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'deserialize()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'stream()',
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
          'Which of the following is used to find and fix bugs in the Java programs?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JVM',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JRE',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JDK',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JDB',
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
          'What is the extension of compiled Java classes?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.java',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.class',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.txt',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '.exe',
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
          'What does the expression 5 & 1 evaluate to in Java?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
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
              '4',
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
          'Which method in Java is used to compare two strings lexicographically?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'equals()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'compare()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'compareTo()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'equalsIgnoreCase()',
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
          'What will be the output of the following code?',
        ],
      ],
      code: `public class Test {
  public static void main(String[] args) {
    String s1 = "hello";
    String s2 = "hello";
    System.out.println(s1 == s2);
  }
}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'true',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'false',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Compilation error',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Runtime error',
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
          'Which of the following is a marker interface?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Serializable',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Comparable',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cloneable',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Runnable',
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
          'What is the output of the following code?',
        ],
      ],
      code: `public class Test {
  public static void main(String[] args) {
    int a = 10;
    int b = 20;
    int c = a + b;
    System.out.println(c);
  }
}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '10',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '20',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '30',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '40',
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
          'Which exception is thrown when an array is accessed with an illegal index?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ArrayIndexOutOfBoundsException',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'IndexOutOfBoundsException',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'NullPointerException',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'IllegalArgumentException',
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
          'What is the primary programming paradigm used by WebFlux?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Procedural Programming',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Object-Oriented Programming',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reactive Programming',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Functional Programming',
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
          'Which Project Reactor class is used to represent a sequence of 0..N items?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Mono',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Flux',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Stream',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Observable',
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
          'In WebFlux, which class represents a single value or an empty value?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Mono',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Flux',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Optional',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Single',
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
          'Which of the following is a key benefit of using WebFlux over traditional Spring MVC?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Better support for microservices',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Improved UI design',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Higher performance and scalability with asynchronous processing',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Easier to write synchronous code',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code snippet with a break statement?'],
        [QuizMarkdownType.CODE, `
for (int i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    System.out.print(i + " ");
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0 1 2'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '0 1 2 3'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '0 1 2 3 4'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1 2 3'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the output of the following code using an enhanced for loop?'],
        [QuizMarkdownType.CODE, `
int[] numbers = {10, 20, 30};
for (int num : numbers) {
    System.out.print(num + " ");
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '10 20 30'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '30 20 10'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '10 30 20'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '20 10 30'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How many times will the following loop execute?'],
        [QuizMarkdownType.CODE, `
int i = 0;
do {
    i++;
} while (i < 5);
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '5 times'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '4 times'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '6 times'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Infinite times'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of the following code snippet?'],
        [QuizMarkdownType.CODE, `
int count = 0;
while (count < 3) {
    System.out.println("Count is: " + count);
    count++;
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Count is: 0\nCount is: 1\nCount is: 2'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Count is: 1\nCount is: 2\nCount is: 3'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Count is: 0\nCount is: 1\nCount is: 2\nCount is: 3'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Count is: 1\nCount is: 2'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the output of the following code snippet?'],
        [QuizMarkdownType.CODE, `
for (int i = 0; i < 5; i++) {
    System.out.print(i + " ");
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0 1 2 3 4'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1 2 3 4 5'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '0 1 2 3 4 5'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1 2 3 4'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the purpose of the @EnableWebFlux annotation in a Spring application?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To enable WebFlux support in the application',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To configure the data source',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To enable Spring Boot auto-configuration',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To enable transaction management',
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
          'Which method is used to subscribe to a Mono or Flux?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'register()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'execute()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'subscribe()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'run()',
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
          'In the context of WebFlux, what does backpressure refer to?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A mechanism to control the flow of data and prevent overwhelming the consumer',
            ],
          ],
        },

        {
          question: [
            [QuizMarkdownType.TEXT, 'Which of the following is a limitation of field injection using @Autowired?'],
          ],
          answers: [
            {
              id: '0',
              answer: [
                [QuizMarkdownType.TEXT, 'It makes unit testing more difficult.'],
              ],
            },
            {
              id: '1',
              answer: [
                [QuizMarkdownType.TEXT, 'It cannot inject prototype-scoped beans.'],
              ],
            },
            {
              id: '2',
              answer: [
                [QuizMarkdownType.TEXT, 'It requires explicit configuration in XML.'],
              ],
            },
            {
              id: '3',
              answer: [
                [QuizMarkdownType.TEXT, 'It can only be used in Java-based configuration.'],
              ],
            },
          ],
          correctAnswer: '0',
        },

        {
          question: [
            [QuizMarkdownType.TEXT, 'How can you indicate that a dependency is optional with @Autowired?'],
          ],
          answers: [
            {
              id: '0',
              answer: [
                [QuizMarkdownType.TEXT, 'Use @Autowired(required = false).'],
              ],
            },
            {
              id: '1',
              answer: [
                [QuizMarkdownType.TEXT, 'Use @Autowired(optional = true).'],
              ],
            },
            {
              id: '2',
              answer: [
                [QuizMarkdownType.TEXT, 'Use @OptionalAutowired.'],
              ],
            },
            {
              id: '3',
              answer: [
                [QuizMarkdownType.TEXT, 'Use @Nullable.'],
              ],
            },
          ],
          correctAnswer: '0',
        },
        {
          question: [
            [QuizMarkdownType.TEXT, 'How is constructor injection performed using @Autowired in Spring?'],
          ],
          answers: [
            {
              id: '0',
              answer: [
                [QuizMarkdownType.TEXT, 'The @Autowired annotation is placed on the constructor.'],
              ],
            },
            {
              id: '1',
              answer: [
                [QuizMarkdownType.TEXT, 'The @Autowired annotation is placed on the class.'],
              ],
            },
            {
              id: '2',
              answer: [
                [QuizMarkdownType.TEXT, 'The @Autowired annotation is placed on the setter method.'],
              ],
            },
            {
              id: '3',
              answer: [
                [QuizMarkdownType.TEXT, 'The @Autowired annotation is placed directly on the field.'],
              ],
            },
          ],
          correctAnswer: '0',
        },
        {
          question: [
            [QuizMarkdownType.TEXT, 'Which of the following is true about field injection using @Autowired?'],
          ],
          answers: [
            {
              id: '0',
              answer: [
                [QuizMarkdownType.TEXT, 'The @Autowired annotation is placed directly on the field to be injected.'],
              ],
            },
            {
              id: '1',
              answer: [
                [QuizMarkdownType.TEXT, 'The @Autowired annotation is placed on the class.'],
              ],
            },
            {
              id: '2',
              answer: [
                [QuizMarkdownType.TEXT, 'The @Autowired annotation is placed on the setter method.'],
              ],
            },
            {
              id: '3',
              answer: [
                [QuizMarkdownType.TEXT, 'The @Autowired annotation is placed on the constructor.'],
              ],
            },
          ],
          correctAnswer: '0',
        },
        {
          question: [
            [QuizMarkdownType.TEXT, 'What is the purpose of the @Autowired annotation in Spring?'],
          ],
          answers: [
            {
              id: '0',
              answer: [
                [QuizMarkdownType.TEXT, 'It injects dependencies automatically.'],
              ],
            },
            {
              id: '1',
              answer: [
                [QuizMarkdownType.TEXT, 'It marks a method as a bean producer.'],
              ],
            },
            {
              id: '2',
              answer: [
                [QuizMarkdownType.TEXT, 'It configures transaction management.'],
              ],
            },
            {
              id: '3',
              answer: [
                [QuizMarkdownType.TEXT, 'It specifies a data repository.'],
              ],
            },
          ],
          correctAnswer: '0',
        },
        {
          question: [
            [QuizMarkdownType.TEXT, 'Evaluate: A method modified by the @Bean annotation cannot accept parameters.'],
          ],
          answers: [
            {
              id: '0',
              answer: [
                [QuizMarkdownType.TEXT, 'False, the parameters can be autowired by Spring.'],
              ],
            },
            {
              id: '1',
              answer: [
                [QuizMarkdownType.TEXT, 'True, methods annotated with @Bean cannot accept parameters.'],
              ],
            },
            {
              id: '2',
              answer: [
                [QuizMarkdownType.TEXT, 'False, but only if they are primitive types.'],
              ],
            },
            {
              id: '3',
              answer: [
                [QuizMarkdownType.TEXT, 'True, parameters must be injected manually.'],
              ],
            },
          ],
          correctAnswer: '0',
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A way to cache data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A method to handle exceptions',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A feature to optimize memory usage',
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
          'Which operator in Project Reactor is used to transform the items emitted by a Flux?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'map()',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'filter()',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'reduce()',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'collect()',
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
          'In WebFlux, how do you handle errors in a reactive stream?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'catch()',
            ],
            [
              QuizMarkdownType.TEXT,
              'method',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'onError()',
            ],
            [
              QuizMarkdownType.TEXT,
              'method',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'onErrorResume()',
            ],
            [
              QuizMarkdownType.TEXT,
              'method',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'handleError()',
            ],
            [
              QuizMarkdownType.TEXT,
              'method',
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
          'What is the purpose of the @RestController annotation in a WebFlux application?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To mark a class as a Spring MVC controller',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To enable REST API handling with WebFlux',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To inject dependencies into the class',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To configure WebFlux routes',
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
          'What is the size of a char in Java?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1 byte',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2 bytes',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '4 bytes',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '8 bytes',
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
          'What is the range of a char in Java?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0 to 255',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0 to 65535',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '-128 to 127',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0 to 32767',
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
          'What will be the output of the following code?',
        ],
      ],
      code: `public class Test {
  public static void main(String[] args) {
    char c = 65;
    System.out.println(c);
  }
}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '65',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'a',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Error',
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
          'Which of the following is true about the char data type in Java?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is signed',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is unsigned',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is always null-terminated',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can store ASCII values only',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
  ],
} as QuizDataObject;
