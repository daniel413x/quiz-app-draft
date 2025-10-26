import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Java Foundations Exam',
  slug: 'java-foundations-exam',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'The size of a long in Java is 64 bits. This means that it represents a range of '],
        [QuizMarkdownType.TEXT, '__________'],
        [QuizMarkdownType.TEXT, ' values or '],
        [QuizMarkdownType.TEXT, '__________'],
        [QuizMarkdownType.TEXT, ' distinct integers.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '-2^63 to 2^63 - 1, 2^64'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '-2^31 to 2^31 - 1, 2^32'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '-2^15 to 2^15 - 1, 2^16'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '-2^7 to 2^7 - 1, 2^8'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The size of an integer in Java is 32 bits. This means that it represents a range of '],
        [QuizMarkdownType.TEXT, '__________'],
        [QuizMarkdownType.TEXT, ' values or '],
        [QuizMarkdownType.TEXT, '__________'],
        [QuizMarkdownType.TEXT, ' distinct integers.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '-2^31 to 2^31 - 1, 2^32'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '-2^15 to 2^15 - 1, 2^16'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '-2^7 to 2^7 - 1, 2^8'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '-2^63 to 2^63 - 1, 2^64'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which integral types in Java have a range of 2^16 integers? OR Which integral types in Java can represent exactly 2^16 distinct integers?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'short and char'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'int and char'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'int and short'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'long and short'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following method, which is called with an argument of 7. What will it print?'],
        [QuizMarkdownType.CODE,
          `public void method1(int i) {
       int j = (i * 30 - 2) / 100;
       
       POINT1: for (; j < 10; j++) {
           boolean flag = false;
           while (!flag) {
               if (Math.random() > 0.5) break POINT1;
           }
       }
    
       while (j > 0) {
           System.out.println(j--);
           if (j == 4) break POINT1;
       }
    }`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will not compile.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw an exception at runtime.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print 1 and 2.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print 1 to N where N is a random number.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following code, which method declaration CANNOT be inserted at line 1 without causing a problem?'],
        [QuizMarkdownType.CODE,
          `public class OverloadTest {
        public int sum(int i1, int i2) { return i1 + i2; }
        // 1
    }`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public long sum(int i1, int i2) { return i1 + i2; }'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public long sum(long i1, int i2) { return i1 + i2; }'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public int sum(int i1, long i2) { return (int) i2; }'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public int sum(long i1, long i2) { return (int) i1; }'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given a class named '],
        [QuizMarkdownType.INLINE_CODE, 'Test'],
        [QuizMarkdownType.TEXT, ', which of these would be valid definitions for the constructors for the class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Test(Test b) { }'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Test Test( ) { }'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'private final Test( ) { }'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'void Test( ) { }'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is not a valid'],
        [QuizMarkdownType.INLINE_CODE, 'main'],
        [QuizMarkdownType.TEXT, 'method definition?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public static main(String[] args) {}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public static void main(String args[]) {}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'static public void main(String[] args) {}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'final public static void main(String[] args) {}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the following expression'],
        [QuizMarkdownType.INLINE_CODE, 'int rate = 10; XXX amount = 1 - rate/100*1 - rate/100;'],
        [QuizMarkdownType.TEXT, ', the type'],
        [QuizMarkdownType.INLINE_CODE, 'XXX'],
        [QuizMarkdownType.TEXT, 'could be an'],
        [QuizMarkdownType.INLINE_CODE, 'int'],
        [QuizMarkdownType.TEXT, ', '],
        [QuizMarkdownType.INLINE_CODE, 'long'],
        [QuizMarkdownType.TEXT, ', '],
        [QuizMarkdownType.INLINE_CODE, 'float'],
        [QuizMarkdownType.TEXT, ', or '],
        [QuizMarkdownType.INLINE_CODE, 'double'],
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
        [QuizMarkdownType.TEXT, 'Which is NOT a way to create a char literal corresponding to a lower-case'],
        [QuizMarkdownType.INLINE_CODE, 'a'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'a\''],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '\'\\u0061\''],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '\\u0061'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '(char) 97'],
          ],
          order: 3,
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, '\\141'],
          ],
          order: 4,
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following program?'],
        [QuizMarkdownType.CODE, `System.out.println("1" + 2 + 3);
System.out.println(1 + 2 + "3");`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `123
33`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `33
33`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `123
123`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `33
123`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which is true of the'],
        [QuizMarkdownType.INLINE_CODE, '+'],
        [QuizMarkdownType.TEXT, 'operator?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It is left-associate, meaning it evaluates from left to right'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It is right-associate, meaning it evaluates from right to left'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It is relevant to the addition and subtraction of'],
            [QuizMarkdownType.INLINE_CODE, 'Number'],
            [QuizMarkdownType.TEXT, 'objects only'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'An operation like'],
            [QuizMarkdownType.INLINE_CODE, '1 + 5 + "33"'],
            [QuizMarkdownType.TEXT, 'is impossible'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A static member cannot be accessed from a constructor.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'False.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'True.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which is true of the'],
        [QuizMarkdownType.INLINE_CODE, '='],
        [QuizMarkdownType.TEXT, 'operator?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It has the lowest precedence of any operator'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It has higher precedence than most other operators'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It has the same precedence as the'],
            [QuizMarkdownType.INLINE_CODE, '='],
            [QuizMarkdownType.TEXT, 'operator'],
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
        [QuizMarkdownType.TEXT, 'Which of the following is true of the following program?'],
        [QuizMarkdownType.CODE, `boolean b1 = false;
boolean b2 = false;
if (b2 != b1 = !b2) {
    System.out.println("true");
} else {
    System.out.println("false");
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will not compile because the statement'],
            [QuizMarkdownType.INLINE_CODE, 'b2 != b1 = !b2'],
            [QuizMarkdownType.TEXT, 'attempts to assign a value of'],
            [QuizMarkdownType.INLINE_CODE, 'false'],
            [QuizMarkdownType.TEXT, 'to'],
            [QuizMarkdownType.INLINE_CODE, 'false'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print'],
            [QuizMarkdownType.INLINE_CODE, 'true'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print'],
            [QuizMarkdownType.INLINE_CODE, 'false'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will fail at runtime because it uses the'],
            [QuizMarkdownType.INLINE_CODE, '='],
            [QuizMarkdownType.TEXT, 'operator in an'],
            [QuizMarkdownType.INLINE_CODE, 'if'],
            [QuizMarkdownType.TEXT, 'statement'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of executing the following code?'],
        [QuizMarkdownType.CODE, `boolean b1 = false;
boolean b2 = false;
if (b2 != b1 = !b2) {
    System.out.println("true");
} else {
    System.out.println("false");
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation error'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'true'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Runtime error'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following answers can output a random number between 1 and 10?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `Random r = new Random(x);
r.setSeed(x);
int d = r.nextInt(x);`],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `Random r = new Random(x);
int d = r.nextInt(x);`],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `Random r = new Random();
int d = r.nextInt(x);`],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'All of the above.'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will happen when the following code is compiled?'],
        [QuizMarkdownType.CODE, `public class FooBar {
    private int FooBar;  //1
    public FooBar(int FooBar) { this.FooBar = FooBar; } //2
    public void FooBar() { } //3
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation error at //1.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation error at //2.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation error at //3.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Compiles without any error.'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer will NOT output a random number between 0 and 10?'],
        [QuizMarkdownType.CODE, `
int x = 10;
//insert code here
System.out.println(d);
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Random r = new Random(x); int d = r.nextInt();'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Random r = new Random(); int d = r.nextInt(x);'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Random r = new Random(x); int d = r.nextInt(x);'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Random r = new Random(x); r.setSeed(x); int d = r.nextInt(x);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a true statement regarding method overloading and the return types defined by overloaded methods?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A different return type doesn\'t mean a valid overload but a valid overload can define a different return type'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A different return type is not necessary to define a valid overload but a valid overload must define the same parameters'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A different return type is necessary to define a valid overload in addition to defining a different set of parameters'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A different set of parameters is necessary to define a valid overload but the method body must remain unchanged'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    // order is fucked?
    //     {
    //       question: [
    //         [QuizMarkdownType.TEXT, 'Given the following code, which statements can be placed at the indicated position without causing compile and run time errors?'],
    //         [QuizMarkdownType.CODE, `
    // public class Test {
    //     int i1;
    //     static int i2;
    //     public void method1() {
    //         int i;
    //         // ... insert statements here
    //     }
    // }
    //         `],
    //       ],
    //       answers: [
    //         {
    //           id: '0',
    //           answer: [
    //             [QuizMarkdownType.TEXT, 'i = this.i1;'],
    //           ],
    //           order: 1,
    //         },
    //         {
    //           id: '1',
    //           answer: [
    //             [QuizMarkdownType.TEXT, 'i = this.i2;'],
    //           ],
    //           order: 2,
    //         },
    //         {
    //           id: '2',
    //           answer: [
    //             [QuizMarkdownType.TEXT, 'this.i = 4;'],
    //           ],
    //           order: 3,
    //         },
    //         {
    //           id: '3',
    //           answer: [
    //             [QuizMarkdownType.TEXT, 'this.i1 = i2;'],
    //           ],
    //           order: 4,
    //         },
    //         {
    //           id: '4',
    //           answer: [
    //             [QuizMarkdownType.TEXT, 'this.i1 = i2;'],
    //           ],
    //           order: 5,
    //         },
    //         {
    //           id: '5',
    //           answer: [
    //             [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
    //           ],
    //           order: 6,
    //         },
    //         {
    //           id: '6',
    //           answer: [
    //             [QuizMarkdownType.TEXT, 'Answers 1, 3 and 2'],
    //           ],
    //           order: 7,
    //         },
    //         {
    //           id: '7',
    //           answer: [
    //             [QuizMarkdownType.TEXT, 'Answers 1, 2 and 5'],
    //           ],
    //           order: 8,
    //         },
    //       ],
    //       correctAnswer: '7',
    //     },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is not a valid overload expression?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A redefined method body with a different return type'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A reordered set of parameters'],
            [QuizMarkdownType.INLINE_CODE, 'float'],
            [QuizMarkdownType.INLINE_CODE, 'int'],
            [QuizMarkdownType.INLINE_CODE, 'int'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Omitting the first two parameters from the overload'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Omitting all of the parameters from the overload'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is not a valid overload for the following code?'],
        [QuizMarkdownType.CODE, `public int setVar(int a, int b, float c) {
  //valid code not shown
}
`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public float setVar(int a, int b, float c) { return c * a; }',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public int setVar(int a, float b, int c) { return setVar(a, c, b);'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public float setVar(int a) { return a; }'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public int setVar(int a, int b, float c) { return Math.round(c);}'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements declares a valid null reference?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'String str : null;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Object obj = NULL;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Date d(null);'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'File f = null;'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will the following statement return?'],
        [QuizMarkdownType.CODE, `
"    hello java guru   ".trim();
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '"hello java guru"'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '"hello java guru   "'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '"hellojavaguru"'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which is a true statement?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The Java development environment is set up when you download and install the JDK for your platform.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Both JDK and JRE are required for setting up the Java development environment.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The Java development environment is the combination of JDK, JRE, and IDE.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The Java development environment is installed by default for all major operating systems.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of attempting to run the following program?'],
        [QuizMarkdownType.CODE,
          `public class TestClass {
        int x = 5;
        int getX() { return x; }
    
        public static void main(String args[]) throws Exception {
            TestClass tc = new TestClass();
            tc.looper();
            System.out.println(tc.x);
        }
        
        public void looper() {
            int x = 0;
            while ((x = getX()) != 0) {
                for (int m = 10; m >= 0; m--) {
                    x = m;
                }
            }
        }
    }`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will never terminate.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print 5.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will not compile.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print 0.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following class?'],
        [QuizMarkdownType.CODE, `
class Test {
    public static void main(String[] args) {
        int j = 1;
        try {
            int i = doIt() / (j = 2);
        } catch (Exception e) {
            System.out.println("j = " + j);
        }
    }
    
    public static int doIt() throws Exception {  
        throw new Exception("FORGET IT");  
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print j = 1;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print j = 2;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will not compile.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will fail at runtime.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following program?'],
        [QuizMarkdownType.CODE, `
public class TestClass {
    public static void main(String[] args) {
        int j = 2;
        int i = 8 / (j = 4);
        System.out.println("i = " + i + ", " + "j = " + j);
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'i = 2, j = 4'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'i = 4, j = 4'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'i = 8, j = 2'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation error'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The maximum value that a char can take is 2^16 -1.'],
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
        [QuizMarkdownType.TEXT, 'In which order are the following operators evaluated?'],
        [QuizMarkdownType.CODE, 'a + b * c - d'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Addition, multiplication, subtraction'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplication, addition, subtraction'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplication, subtraction, addition'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Subtraction, addition, multiplication'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which operator type has lower precedence than the multiplicative operators?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Unary (++expr)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Additive (-)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Postfix (expr++)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Relational (>=)'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which operator has the same precedence as the equality (==) operator?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Relational (>)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Additive (+)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Unary (-expr)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Inequality (!=)'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the precedence of the instanceof operator?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Higher than relational operators'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lower than additive operators'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Equal to relational operators'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Higher than equality operators'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the following expression, which operation is performed first?'],
        [QuizMarkdownType.CODE, '3 + 5 * 2'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Addition (+)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplication (*)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Subtraction (-)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Division (/)'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which order are the following operators evaluated?'],
        [QuizMarkdownType.CODE, 'x * y - z + w'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplication, subtraction, addition'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplication, addition, subtraction'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Subtraction, multiplication, addition'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Addition, multiplication, subtraction'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which order are the following operators evaluated?'],
        [QuizMarkdownType.CODE, 'a - b * c / d'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Subtraction, multiplication, division'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplication, division, subtraction'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Division, multiplication, subtraction'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Subtraction, division, multiplication'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which order are the following operators evaluated?'],
        [QuizMarkdownType.CODE, 'm * n - o / p'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplication, subtraction, division'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplication, division, subtraction'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Subtraction, multiplication, division'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Division, multiplication, subtraction'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true of dividing two integers?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'In integer division, the fractional part is discarded, so '],
            [QuizMarkdownType.INLINE_CODE, 'System.out.println(106 / 10);'],
            [QuizMarkdownType.TEXT, ' will print 10.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'In integer division, the fractional part is kept and the resulting value will be autoboxed as a double.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In integer division, the fractional part is rounded to the nearest whole number.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'In integer division, an error will occur if there is a fractional part.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements will NOT correctly create and initialize an array of Strings to non-null elements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'String[] sA = new String[1] { "aaa" };'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'String[] sA = new String[] { "aaa" };'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'String[] sA = { new String( "aaa") };'],
          ],
        },
        {
          question: [
            [QuizMarkdownType.TEXT, 'In integer division, the fractional part is discarded. What will be the result of the following operation?'],
            [QuizMarkdownType.INLINE_CODE, 'System.out.println(106 / 10);'],
          ],
          answers: [
            {
              id: '0',
              answer: [
                [QuizMarkdownType.INLINE_CODE, '10'],
              ],
            },
            {
              id: '1',
              answer: [
                [QuizMarkdownType.INLINE_CODE, '10.6'],
              ],
            },
            {
              id: '2',
              answer: [
                [QuizMarkdownType.INLINE_CODE, '11'],
              ],
            },
            {
              id: '3',
              answer: [
                [QuizMarkdownType.INLINE_CODE, '1060'],
              ],
            },
          ],
          correctAnswer: '0',
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'String[] sA = { "aaa" };'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which order are the following operators evaluated?'],
        [QuizMarkdownType.CODE, 'x / y + z * w'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Division, addition, multiplication'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplication, division, addition'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Division, multiplication, addition'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Addition, division, multiplication'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which order are the following operators evaluated?'],
        [QuizMarkdownType.CODE, 'p - q / r + s'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Subtraction, division, addition'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Division, subtraction, addition'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Division, addition, subtraction'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Addition, division, subtraction'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which operator has lower precedence than the relational operators?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Additive (+)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Equality (==)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Postfix (expr++)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Unary (~)'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which operator is evaluated after all other operators except assignment operators?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Equality (==)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Relational (<=)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Additive (+)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Ternary (? :)'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will the following method return if called with an argument of 7?'],
        [QuizMarkdownType.CODE, `
public int transformNumber(int n)
{
   int radix = 2;
   int output = 0;
   output += radix * n;
   radix = output / radix;
   if (output < 14)
   {
       return output;
   }
   else
   {
       output = output * radix / 2;
       return output;
   }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation fails.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '7'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '14'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '49'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following code, which of these statements is NOT true?'],
        [QuizMarkdownType.CODE, `
public class TestClass {
    public static void main(String args[]) {
        int k = 0;
        int m = 0;
        for (int i = 0; i <= 3; i++) {
            k++;
            if (i == 2) {
                // line 1
            }
            m++;
        }
        System.out.println(k + ", " + m);
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print 3, 2 when line 1 is replaced by continue.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print 3, 2 when line 1 is replaced by break;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print 4, 3 when line 1 is replaced by continue.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print 3, 3 when line 1 is replaced by i = 4;'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Every'],
        [QuizMarkdownType.INLINE_CODE, 'array'],
        [QuizMarkdownType.TEXT, 'has an implicit method named'],
        [QuizMarkdownType.INLINE_CODE, 'length'],
        [QuizMarkdownType.TEXT, 'which tells you the number of elements in the array.'],
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
        [QuizMarkdownType.TEXT, 'Which of the following statements about an array is correct?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Element indexing for arrays as well as for Lists starts at 0.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Every array has a built in property named \'size\' which tells you the number of elements in the array.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Every array has an implicit method named \'length\' which tells you the number of elements in the array.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'An array can dynamically grow in size.'],
          ],
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays can be created only for primitive types.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What would be the result of attempting to compile and run the following program?'],
        [QuizMarkdownType.CODE, `
class TestClass {
    static TestClass ref;
    String[] arguments;
    public static void main(String args[]) {
        ref = new TestClass();
        ref.func(args);
    }
    public void func(String[] args) {
        ref.arguments = args;
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will compile and run successfully.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will fail to compile, since method func is trying to assign to the non-static member variable \'arguments\' through the static member variable ref.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will fail to compile, since the argument args passed to the static method main cannot be passed on to the non-static method func.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will fail to compile, since the static method main is trying to call the non-static method func.'],
          ],
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will fail to compile, since the non-static method func cannot access the static member variable ref.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will the following program print?'],
        [QuizMarkdownType.CODE, `
public class TestClass {
    public static void main(String[] args) {
        for : for(int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                if (i + j > 10) break for;
            }
            System.out.println("hello");
        }
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will not compile.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print "hello" 4 times.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print "hello" 2 times.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print "hello" 5 times.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is invalid?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'char c = 320;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'float f = 320;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'double d = 320;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'byte b = 320;'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Assuming a method'],
        [QuizMarkdownType.INLINE_CODE, 'throwsException()'],
        [QuizMarkdownType.TEXT, 'contains the line'],
        [QuizMarkdownType.INLINE_CODE, 'throw new Exception("FORGET IT");'],
        [QuizMarkdownType.TEXT, ', a line of code such as'],
        [QuizMarkdownType.INLINE_CODE, 'int j = 0; int i = throwsException() / (j = 2);'],
        [QuizMarkdownType.TEXT, 'will cause a compilation error.'],
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
        [QuizMarkdownType.TEXT, 'Evaluate: If evaluation of the left-hand operand of a binary operator completes abruptly, e.g.,'],
        [QuizMarkdownType.INLINE_CODE, 'int j = 0; int i = throwsException() / (j = 2);'],
        [QuizMarkdownType.TEXT, 'no part of the right-hand operand will be evaluated.'],
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
        [QuizMarkdownType.TEXT, 'What will result from running the following code?'],
        [QuizMarkdownType.CODE, `
for (;;) {
    System.out.println("Hello world");
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Infinite loop'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation error'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Runtime error'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Empty output'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A _______ is backed by linked lists while an _______ is backed by an array.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap, ArrayList'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'ArrayList, LinkedList'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'HashSet, ArrayList'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap, ArrayList'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: In the absence of a termination condition, such as in the code below, the condition is implicitly'],
        [QuizMarkdownType.INLINE_CODE, 'true'],
        [QuizMarkdownType.TEXT, '.'],
        [QuizMarkdownType.CODE, `for (;;) {
    System.out.println("Hello world");
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
        [QuizMarkdownType.TEXT, 'ArrayList is a subclass of which class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'AbstractList'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'AbstractCollection'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Object'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Serializable'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following interfaces are implemented by ArrayList?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Serializable, Cloneable, Iterable<E>, Collection<E>, List<E>, RandomAccess'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Serializable, Cloneable, Iterable<E>, Map<E>, List<E>, RandomAccess'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Serializable, Cloneable, Set<E>, Collection<E>, List<E>, RandomAccess'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Serializable, Cloneable, Iterable<E>, Collection<E>, List<E>, SortedSet<E>'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following line of code?'],
        [QuizMarkdownType.CODE, 'System.out.println(3 + 100/10*2-13);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '7'],
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
            [QuizMarkdownType.INLINE_CODE, '20'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '0'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer(s) could substitute for the line at'],
        [QuizMarkdownType.INLINE_CODE, '// 1'],
        [QuizMarkdownType.TEXT, 'so that the program outputs'],
        [QuizMarkdownType.INLINE_CODE, '10 20 100 100'],
        [QuizMarkdownType.TEXT, 'when executed?'],
        [QuizMarkdownType.CODE, `
public class Account {
    double balance;
    public void update(int[] balances){
        // 1
    }

    public static void main(String[] args) {
        int[] balances = new int[2];
        balances[0] = 10;
        balances[1] = 20;
        for(int bal : balances){
            System.out.print(bal + " ");
        }
        Account a = new Account();
        a.update(balances);
        for(int bal : balances){
            System.out.print(bal + " ");
        }
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `balances[0] = 100;
balances[1] = 100;`],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `for(int bal : balances){
    bal = 100;
};`],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 & 2'],
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
        [QuizMarkdownType.TEXT, 'A constructor can be'],
        [QuizMarkdownType.INLINE_CODE, 'static'],
        [QuizMarkdownType.TEXT, '.'],
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
        [QuizMarkdownType.TEXT, 'What will the following lines of code print?'],
        [QuizMarkdownType.CODE, `
String s = "java";
s.replace('j', 'l');
s = s.substring(0, 2);
System.out.println(s);
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'ja'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'java'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'la'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'lava'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How many string objects are created in the following code?'],
        [QuizMarkdownType.CODE, `
String s = "java";
s.replace('j', 'l');
s = s.substring(0, 2);
System.out.println(s);
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1'],
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
            [QuizMarkdownType.TEXT, '3'],
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
        [QuizMarkdownType.TEXT, 'Which answer is NOT true of constructors in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A constructor cannot take a parameter of its own operative type.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A constructor cannot return anything, not even void.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A constructor cannot be final or abstract.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A constructor cannot be static.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given a class named Test, which of these would be valid definitions for the constructors for the class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Test(Test b) { }'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Test Test( ) { }'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'private final Test( ) { }'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'void Test( ) { }'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be printed from running this program?'],
        [QuizMarkdownType.CODE, `
public class Account {
    double balance;
    public void update(int[] balances){
        for(int bal : balances){
            bal = 100;
        }
    }

    public static void main(String[] args) {
        int[] balances = new int[2];
        balances[0] = 10;
        balances[1] = 20;
        for(int bal : balances){
            System.out.print(bal + " ");
        }
        Account a = new Account();
        a.update(balances);
        for(int bal : balances){
            System.out.print(bal + " ");
        }
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '10 20 10 20'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '10 20 100 100'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '0 0 100 100'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '10 20 0 0'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of running the code below?'],
        [QuizMarkdownType.CODE, `
public class Main {
    int[] arr;
    public static void main(String... args) {
        System.out.println(arr);
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation error'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Runtime error'],
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
            [QuizMarkdownType.TEXT, '[]'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of running the code below?'],
        [QuizMarkdownType.CODE, `
class Utility {
    int[] arr;
    public void print() {
        System.out.println(arr);
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '[]'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation error'],
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
        [QuizMarkdownType.TEXT, 'The following code will compile and run:'],
        [QuizMarkdownType.CODE, `
int i = 0;
for (;;) {
    if (i >= 5) {
        break;
    }
    System.out.println("i is " + i);
    i++;
}
        `],
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
        [QuizMarkdownType.TEXT, 'What will the following code print?'],
        [QuizMarkdownType.CODE, `
int x = 1;
int y = 2;
int z = x++;
int a = --y;
int b = z--;
b += ++z;

int answ = x > a ? (y > b ? y : b) : (x > z ? x : z);
System.out.println(answ);
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1'],
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
            [QuizMarkdownType.TEXT, '3'],
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
        [QuizMarkdownType.TEXT, 'An exception thrown outside a try block will be caught'],
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
        [QuizMarkdownType.TEXT, 'What will the following code print?'],
        [QuizMarkdownType.CODE, `boolean flag = true;
if (flag = false) {
    System.out.println("1");
} else if (flag) {
    System.out.println("2");
} else if (!flag) {
    System.out.println("3");
} else {
    System.out.println("4");
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1'],
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
            [QuizMarkdownType.TEXT, '3'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '4'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following code, which of the following options, when inserted in the above code, will print 111 222 ?'],
        [QuizMarkdownType.CODE, `
public class Account {
    int id;
    public Account(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return String.valueOf(id);
    }

    public static void main(String[] args) {
        List<Account> list = new ArrayList<Account>();
        list.add(new Account(111));
        list.add(new Account(222));

        //insert code here
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Iterator<Account> it = list.iterator(); while(it.hasNext()) System.out.println(it.next()+" ");'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'for(int id : list.id) System.out.print(id+" ");'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'for(Account id : list) System.out.print(id+" ");'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'for(int i = 0; i<list.size(); i++) System.out.print(list.id+" ");'],
          ],
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above.'],
          ],
          order: 10,
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following code fragment, which of the following lines would NOT be a part of the output?'],
        [QuizMarkdownType.CODE, `
outer: 
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 2; j++) {
        if (i == j) {
            continue outer;
        }
        System.out.println("i=" + i + " , j=" + j);
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'i = 2, j = 2'],
          ],
          order: 1,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'i = 1, j = 2'],
          ],
          order: 2,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'i = 0, j = 1'],
          ],
          order: 3,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 0 and 1'],
          ],
          order: 4,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A'],
        [QuizMarkdownType.INLINE_CODE, 'NullPointerException'],
        [QuizMarkdownType.TEXT, 'is thrown when you try to access an instance member on a null reference. Which of the following lines of code will throw a'],
        [QuizMarkdownType.INLINE_CODE, 'NullPointerException'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'String str = "hello"; int len = str.length();'],
          ],
          order: 1,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'String str = null; int len = str.length();'],
          ],
          order: 2,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'String str = ""; int len = str.length();'],
          ],
          order: 3,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'String str = "world"; int len = str.length();'],
          ],
          order: 4,
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 3'],
          ],
          order: 5,
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?'],
        [QuizMarkdownType.CODE, `for (int i = 0; i < 1; ++i) {
  System.out.println(i);
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '0'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Blank ('],
            [QuizMarkdownType.INLINE_CODE, ' '],
            [QuizMarkdownType.TEXT, ')'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following are reserved words in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'goto'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'package'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'string'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'package'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'export'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'goto'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'array'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'package'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following code, what will be the output?'],
        [QuizMarkdownType.CODE, `
public class Test {
    static int a;
    int b;

    public void incr() {
        int c = a++;
        b++;
        c++;
        System.out.println(a + " " + b + " " + c);
    }

    public static void main(String args[]) {
        Test test = new Test();
        test.incr();
        a++;
        test = new Test();
        test.incr();
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1 1 1\n3 1 3'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1 1 1\n2 1 2'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation failure'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1 2 1\n2 3 3'],
          ],
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, '1 2 1\n3 3 3'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following code, what will be the output?'],
        [QuizMarkdownType.CODE, `
public class Test {
    public int div(int a, int b) throws Exception {
        try {
            return a / b;
        } catch (ArithmeticException ae) {
            System.out.println("exception in div");
            return 0;
        }
    }

    public static void main(String args[]) {
        Test test = new Test();
        try {
            System.out.println(test.div(5, 0));
        } catch (Exception e) {
            System.out.println("exception in main");
        }
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'exception in div\n0'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'exception in main'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'exception in div\nexception in main'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which is true?'],
        [QuizMarkdownType.CODE, `
public class Test {
    public static void main(String[] args) {
        if (args[0].equals("open"))
        if (args[1].equals("someone"))
            System.out.println("Hello!");
        else 
            System.out.println("Go away " + args[1]);
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The else clause belongs to the outer if statement.'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The else clause belongs to the inner if statement.'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will not compile due to ambiguous else clause.'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will compile but will throw an exception at runtime.'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default value of an instance variable of type array in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '[]'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '{}'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default value of an instance variable of type byte in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0.0'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default value of an instance variable of type long in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '0L'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0.0'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default value of an instance variable of type double in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0.0f'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '0.0d'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default value of an instance variable of type float in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0.0f'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '0.0d'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will happen if you try to use an uninitialized local variable in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will use the default value.'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will cause a runtime error.'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will cause a compilation error.'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will produce an undefined value.'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default value of an instance variable of type boolean in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'true'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default value of an instance variable of type int in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '0.0'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.INLINE_CODE, '1 + Math.round(Math.random() * 9)'],
        [QuizMarkdownType.TEXT, 'will give you a random number between 1 and 10'],
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
        [QuizMarkdownType.INLINE_CODE, '1 + Math.round(Math.random() * 9)'],
        [QuizMarkdownType.TEXT, 'will give you a random number between 0 and 10'],
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
        [QuizMarkdownType.INLINE_CODE, 'Math.round(Math.random()*10) will return a random number between 1 and 10'],
        [QuizMarkdownType.TEXT, 'will give you a random number between 1 and 10'],
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
        [QuizMarkdownType.INLINE_CODE, '1 + Math.round(Math.random() * 9'],
        [QuizMarkdownType.TEXT, 'will give you a random number between 1 and 10'],
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
        [QuizMarkdownType.TEXT, 'Which of the following statements about the'],
        [QuizMarkdownType.INLINE_CODE, 'switch'],
        [QuizMarkdownType.TEXT, 'statement in Java is true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A'],
            [QuizMarkdownType.INLINE_CODE, 'switch'],
            [QuizMarkdownType.TEXT, 'statement must have a default label to be valid.'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A'],
            [QuizMarkdownType.INLINE_CODE, 'switch'],
            [QuizMarkdownType.TEXT, 'statement can omit the default label, and if none of the case labels match, it will simply exit without executing any code.'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The default label in a'],
            [QuizMarkdownType.INLINE_CODE, 'switch'],
            [QuizMarkdownType.TEXT, 'statement is mandatory and specifies the action for unmatched case labels.'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'If a'],
            [QuizMarkdownType.INLINE_CODE, 'switch'],
            [QuizMarkdownType.TEXT, 'statement does not have a default label, it will cause a compilation error.'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default value of an instance variable of type String in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '""'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A Java class such as'],
        [QuizMarkdownType.INLINE_CODE, 'String'],
        [QuizMarkdownType.TEXT, 'can be considered a keyword like'],
        [QuizMarkdownType.INLINE_CODE, 'strictfp'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.INLINE_CODE, 'extends'],
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
        [QuizMarkdownType.TEXT, 'What happens when the value at'],
        [QuizMarkdownType.INLINE_CODE, 'balances2[0]'],
        [QuizMarkdownType.TEXT, 'is modified in the following code?'],
        [QuizMarkdownType.CODE, `
public class Test {
    public static void main(String[] args) {
        int[] balances1 = new int[2];
        balances1[0] = 10;
        balances1[1] = 20;
        
        int[] balances2 = balances1;
        balances2[0] = 0;
        
        System.out.print(balances1 == balances2);
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The modification is reflected in balances1 because both balances1 and balances2 point to the same array.'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The modification is not reflected in balances1 because balances1 and balances2 are different arrays.'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'An exception is thrown because balances2 cannot modify balances1.'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will not compile.'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: The line'],
        [QuizMarkdownType.INLINE_CODE, 'balances1 == balances2'],
        [QuizMarkdownType.TEXT, 'evaluates to true in the following code.'],
        [QuizMarkdownType.CODE, `public class Test {
    public static void main(String[] args) {
        int[] balances1 = new int[2];
        balances1[0] = 10;
        balances1[1] = 20;
        
        int[] balances2 = balances1;
        balances2[0] = 0;
        
        System.out.print(balances1 == balances2);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, because both balances1 and balances2 point to the same array in memory.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, because balances1 and balances2 are different arrays with the same values.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, because the == operator compares the values inside the arrays.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, because balances2 is a deep copy of balances1.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following code fragment, what will be the output?'],
        [QuizMarkdownType.CODE, `
public class Test {
    public static void main(String[] args) {
        int[] balances1 = new int[2];
        balances1[0] = 10;
        balances1[1] = 20;
        
        int[] balances2 = balances1;
        balances2[0] = 0;
        
        System.out.print(balances1 == balances2);
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'true'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation error'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Runtime error'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Assuming that a valid integer will be passed in the command line as the first argument, which statements regarding the following code are correct?'],
        [QuizMarkdownType.CODE, `
public class TestClass {
    public static void main(String args[]) {
        int x = Integer.parseInt(args[0]);
        switch(x) {
            case x < 5: 
                System.out.println("BIG"); 
                break;
            case x > 5: 
                System.out.println("SMALL");
            default: 
                System.out.println("CORRECT"); 
                break;
        }
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw an exception at runtime.'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'BIG will never be followed by anything else.'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'SMALL will always be followed by CORRECT.'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will not compile.'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following code will compile'],
        [QuizMarkdownType.CODE, `
String str = "hello\\r\\n" + "world";
System.out.println(str.length);
        `],
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
        [QuizMarkdownType.TEXT, 'Given the following code, what will be output?'],
        [QuizMarkdownType.CODE, `
String str = "hello\\r\\n" + "world";
System.out.println(str.length());
        `],
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
            [QuizMarkdownType.TEXT, '11'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '12'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '13'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Local variables in Java are automatically initialized to their default values.'],
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
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Instance variables in Java are automatically initialized to their default values.'],
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
        [QuizMarkdownType.TEXT, 'What will be the result of the following code?'],
        [QuizMarkdownType.CODE, `
public class Test {
    public static void main(String[] args) {
        int i;
        System.out.println(i);
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following code, how many object references will be created?'],
        [QuizMarkdownType.CODE,
          `class References 
{
  String s1;
  String s2 = null;
  Integer i1 = new Integer();
  int i2;
  File f;
  Object b = f;
}`],
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
            [QuizMarkdownType.TEXT, '4'],
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
            [QuizMarkdownType.TEXT, '6'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements about implicit narrowing in Java is true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Implicit narrowing conversion happens when a value of a larger primitive type is automatically converted to a smaller primitive type without explicit casting.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Implicit narrowing conversion happens when a value of a smaller primitive type is automatically converted to a larger primitive type without explicit casting.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Implicit narrowing conversion is allowed between all primitive types without any data loss.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Implicit narrowing conversion is not supported in Java.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following code, which answer is NOT true?'],
        [QuizMarkdownType.CODE,
          `class References 
{
  String s1;
  String s2 = null;
  Integer i1 = new Integer();
  int i2;
  File f;
  Object b = f;
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The member'],
            [QuizMarkdownType.INLINE_CODE, 'i2'],
            [QuizMarkdownType.TEXT, 'results in an object reference being created'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The member'],
            [QuizMarkdownType.INLINE_CODE, 's1'],
            [QuizMarkdownType.TEXT, 'results in an object reference being created'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The member'],
            [QuizMarkdownType.INLINE_CODE, 'i1'],
            [QuizMarkdownType.TEXT, 'results in an object reference being created'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The member'],
            [QuizMarkdownType.INLINE_CODE, 'f'],
            [QuizMarkdownType.TEXT, 'results in an object reference being created'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will the following code print when compiled and run?'],
        [QuizMarkdownType.CODE,
          `import java.util.*;
public class TestClass {
    public static void main(String[] args) throws Exception {
        List list = new ArrayList();
        list.add("val1"); //1
        list.add(2, "val2"); //2
        list.add(1, "val3"); //3
        System.out.println(list);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw an exception at run time because of line //2'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw an exception at run time because of line //1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw an exception at run time because of line //3'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will not compile.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The order of keywords for a static import must always be '],
        [QuizMarkdownType.INLINE_CODE, 'import static'],
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
        [QuizMarkdownType.INLINE_CODE, 'ArrayList'],
        [QuizMarkdownType.TEXT, 'is imported via the line'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.util.ArrayList;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.lang.*;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.lang.ArrayList;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.collections.ArrayList;'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will the following code print?'],
        [QuizMarkdownType.CODE,
          `void crazyLoop() {
       int c = 0;
       JACK: while (c < 8) {
          JILL: System.out.println(c);
          if (c > 3) break JILL; else c++;
       }
    }`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will not compile'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print numbers from 0 to 3'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print numbers from 0 to 4'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print numbers from 0 to 8'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which answer correctly initializes the static variables '],
        [QuizMarkdownType.INLINE_CODE, 'MAX'],
        [QuizMarkdownType.TEXT, ' and '],
        [QuizMarkdownType.INLINE_CODE, 'CLASS_GUID'],
        [QuizMarkdownType.TEXT, '?'],
        [QuizMarkdownType.CODE,
          `class Widget {
   static int MAX;     //1
   static final String CLASS_GUID;   // 2
   Widget() {
       //3
   }
   Widget(int k) {
       //4
   }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'At //2, insert '],
            [QuizMarkdownType.INLINE_CODE, 'static { MAX = 111; CLASS_GUID = "XYZ123"; }'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'At //1, insert '],
            [QuizMarkdownType.INLINE_CODE, 'MAX = 111; CLASS_GUID = "XYZ123";'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'At //3, insert '],
            [QuizMarkdownType.INLINE_CODE, 'static { MAX = 111; CLASS_GUID = "XYZ123"; }'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'At //4, insert '],
            [QuizMarkdownType.INLINE_CODE, 'MAX = 111; CLASS_GUID = "XYZ123";'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, a '],
        [QuizMarkdownType.INLINE_CODE, '________'],
        [QuizMarkdownType.TEXT, ' is a 64-bit type while a '],
        [QuizMarkdownType.INLINE_CODE, '________'],
        [QuizMarkdownType.TEXT, ' is a 32-bit type.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'double, float'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int, short'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'long, int'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'char, byte'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer will result in implicit narrowing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'short s = 12;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int i = 12L;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'long l = 12;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'float f = 12.0;'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the following code,'],
        [QuizMarkdownType.CODE, `
public class Test {
    private int anInt;

    public void count() {
        int i;
        System.out.println(anInt);
        System.out.println(i);
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'anInt'],
            [QuizMarkdownType.TEXT, 'will be assigned a default value while'],
            [QuizMarkdownType.INLINE_CODE, 'i'],
            [QuizMarkdownType.TEXT, 'won\'t'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'i'],
            [QuizMarkdownType.TEXT, 'will be assigned a default value while'],
            [QuizMarkdownType.INLINE_CODE, 'anInt'],
            [QuizMarkdownType.TEXT, 'won\'t'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither'],
            [QuizMarkdownType.INLINE_CODE, 'i'],
            [QuizMarkdownType.TEXT, 'nor'],
            [QuizMarkdownType.INLINE_CODE, 'anInt'],
            [QuizMarkdownType.TEXT, 'will be assigned a default value'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Both'],
            [QuizMarkdownType.INLINE_CODE, 'i'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'anInt'],
            [QuizMarkdownType.TEXT, 'will be assigned a default value'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will the following statement print?'],
        [QuizMarkdownType.CODE, `
int marks = 90;
String exam = "OCJA";
System.out.printf("I scored %d marks in the %s exam!", exam, marks);
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'I scored 90 marks in the OCJA exam!'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Runtime exception'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'I scored OCJA marks in the 90 exam!'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'I scored %d marks in the %s exam!'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In integer division, any fractional part is discarded by rounding up, so '],
        [QuizMarkdownType.INLINE_CODE, 'System.out.println(106 / 10);'],
        [QuizMarkdownType.TEXT, ' will print 11.'],
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
        [QuizMarkdownType.TEXT, 'What would be the result of trying to compile and run the following program?'],
        [QuizMarkdownType.CODE, `
public class Test {
    int[] ia = new int[1];
    Object oA[] = new Object[1];
    boolean bool;

    public static void main(String args[]) {
        Test test = new Test();
        System.out.println(test.ia[0] + "  " + test.oA[0] + "  " + test.bool);
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will not compile.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will compile and print "0  null  false".'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will compile and print "0  0  false".'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will compile and print "null  null  false".'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which integral type in Java has a range from'],
        [QuizMarkdownType.INLINE_KATEX, '-2^{31}'],
        [QuizMarkdownType.TEXT, 'to'],
        [QuizMarkdownType.INLINE_KATEX, '2^{31}-1'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'byte'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'short'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'int'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'long'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will print when the following code is compiled and run?'],
        [QuizMarkdownType.CODE, `
public class TestClass {
    public static int switchTest(int k) {
        int j = 1;
        switch(k) {
            case 1: j++;
            case 2: j++;
            case 3: j++;
            case 4: j++;
            case 5: j++;
            default: j++;
        }
        return j + k;
    }
    public static void main(String[] args) {
        System.out.println(switchTest(4));
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '5'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '6'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '8'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '10'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will print when the following code is compiled and run?'],
        [QuizMarkdownType.CODE, `
public class TestClass {
    public static int switchTest(int k) {
        int j = 1;
        switch (k) {
            case 1:
                j++;
            case 2:
                j++;
            case 3:
                j++;
            case 4:
                j++;
            case 5:
                j++;
                break;
            case 6:
                j++;
            case 7:
                j++;
            case 8:
                j++;
            default:
                j++;
        }
        return j + k;
    }

    public static void main(String[] args) {
        System.out.println(switchTest(3));
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '5'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '9'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '7'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '10'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following are true about accessor and mutator methods?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They allow setting and retrieval of private data elements of an instance.'],
          ],
          order: 1,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They should be private.'],
          ],
          order: 2,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They can be overloaded.'],
          ],
          order: 3,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They inherit members from the base class.'],
          ],
          order: 4,
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 3'],
          ],
          order: 5,
        },
        {
          id: '5',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
          ],
          order: 6,
        },
      ],
      correctAnswer: '4',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can an '],
        [QuizMarkdownType.INLINE_CODE, 'int'],
        [QuizMarkdownType.TEXT, ' variable be assigned the following value? '],
        [QuizMarkdownType.INLINE_CODE, 'double dl = 12L;'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int idl = (int) dl;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int idl = dl;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int idl = (long) dl;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int idl = Double.valueOf(dl);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the size and range of a '],
        [QuizMarkdownType.INLINE_CODE, 'short'],
        [QuizMarkdownType.TEXT, ' in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 16 bits, Range: -32,768 to 32,767'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 8 bits, Range: -128 to 127'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 16 bits, Range: 0 to 65,535'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 32 bits, Range: -2^31 to 2^31 - 1'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the size and range of a '],
        [QuizMarkdownType.INLINE_CODE, 'char'],
        [QuizMarkdownType.TEXT, ' in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 16 bits, Range: 0 to 65,535'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 8 bits, Range: -128 to 127'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 16 bits, Range: -32,768 to 32,767'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 32 bits, Range: -2^31 to 2^31 - 1'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the size and range of a '],
        [QuizMarkdownType.INLINE_CODE, 'float'],
        [QuizMarkdownType.TEXT, ' in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 32 bits, Range: Approximately ±1.4E-45 to ±3.4E38'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 64 bits, Range: Approximately ±4.9E-324 to ±1.8E308'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 32 bits, Range: -2^31 to 2^31 - 1'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 16 bits, Range: -32,768 to 32,767'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the size and range of a '],
        [QuizMarkdownType.INLINE_CODE, 'double'],
        [QuizMarkdownType.TEXT, ' in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 64 bits, Range: Approximately ±4.9E-324 to ±1.8E308'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 32 bits, Range: Approximately ±1.4E-45 to ±3.4E38'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 64 bits, Range: -2^63 to 2^63 - 1'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 32 bits, Range: -2^31 to 2^31 - 1'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the size and range of a '],
        [QuizMarkdownType.INLINE_CODE, 'long'],
        [QuizMarkdownType.TEXT, ' in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 64 bits, Range: -2^63 to 2^63 - 1'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 32 bits, Range: -2^31 to 2^31 - 1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 64 bits, Range: -2^31 to 2^31 - 1'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 32 bits, Range: -32,768 to 32,767'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For which variable in the following code is explicit casting unnecessary?'],
        [QuizMarkdownType.CODE,
          `double xd = 10.0d;
float xf = 10.0f;
double dl = 12L;
short sh = 12;
int idl = (int) dl;
int idl2 = (int) xf;
int idl3 = (int) xd;
int idl4 = (int) sh;`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'sh'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'idl'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'idl2'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'idl3'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate casting in the following code.'],
        [QuizMarkdownType.CODE,
          `double xd = 10.0d;
float xf = 10.0f;
double dl = 12L;
short sh = 12;
int idl = (int) dl;
int idl2 = (int) xf;
int idl3 = (int) xd;
int idl4 = sh;`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int idl4 = sh;'],
            [QuizMarkdownType.TEXT, 'does not require explicit casting because'],
            [QuizMarkdownType.INLINE_CODE, 'int idl4 = sh;'],
            [QuizMarkdownType.TEXT, 'is an implicit widening conversion.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int idl = (int) dl;'],
            [QuizMarkdownType.TEXT, 'requires explicit casting because'],
            [QuizMarkdownType.INLINE_CODE, 'int idl = (int) dl;'],
            [QuizMarkdownType.TEXT, 'is a widening conversion.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int idl2 = (int) xf;'],
            [QuizMarkdownType.TEXT, 'requires explicit casting because'],
            [QuizMarkdownType.INLINE_CODE, 'int idl2 = (int) xf;'],
            [QuizMarkdownType.TEXT, 'is a widening conversion.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int idl3 = (int) xd;'],
            [QuizMarkdownType.TEXT, 'requires explicit casting because'],
            [QuizMarkdownType.INLINE_CODE, 'int idl3 = (int) xd;'],
            [QuizMarkdownType.TEXT, 'is a widening conversion.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement describes a widening conversion?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The integer'],
            [QuizMarkdownType.INLINE_CODE, '-123'],
            [QuizMarkdownType.TEXT, 'is assigned to a reference variable'],
            [QuizMarkdownType.INLINE_CODE, 'float f'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The integer'],
            [QuizMarkdownType.INLINE_CODE, '12'],
            [QuizMarkdownType.TEXT, 'is assigned to a reference variable'],
            [QuizMarkdownType.INLINE_CODE, 'short s'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The boolean'],
            [QuizMarkdownType.INLINE_CODE, 'false'],
            [QuizMarkdownType.TEXT, 'is assigned to a reference variable'],
            [QuizMarkdownType.INLINE_CODE, 'int i'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The double'],
            [QuizMarkdownType.INLINE_CODE, '0 * 1.5'],
            [QuizMarkdownType.TEXT, 'is assigned to a reference variable'],
            [QuizMarkdownType.INLINE_CODE, 'float d'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the size and range of an '],
        [QuizMarkdownType.INLINE_CODE, 'int'],
        [QuizMarkdownType.TEXT, ' in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 32 bits, Range: -2^31 to 2^31 - 1'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 16 bits, Range: -32,768 to 32,767'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 32 bits, Range: -2^63 to 2^63 - 1'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 64 bits, Range: -2^63 to 2^63 - 1'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'While compiling a Java file, you want the compiler to generate the class file in a particular directory. Which '],
        [QuizMarkdownType.INLINE_CODE, 'javac'],
        [QuizMarkdownType.TEXT, ' option will you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '-d'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '-dest'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '-output'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '-target'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of attempting to compile and run the following class?'],
        [QuizMarkdownType.CODE,
          `public class TestClass
{
    public static void main(String args[ ] )
    {
        int i = 1;
        int[] iArr = {3};
        incr(i) ;
        incr(iArr) ;
        System.out.println( "i = " + i + "  iArr[0] = " + iArr [ 0 ] ) ;
    }

    public static void incr(int   n ) { n++ ; }

    public static void incr(int[ ] n ) {
        n = new int[1];
        n[0]++;
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will print i = 1 iArr[0] = 3'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will print i = 1 iArr[0] = 4'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will print i = 2 iArr[0] = 2'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will print i = 2 iArr[0] = 1'],
          ],
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will not compile.'],
          ],
          order: 4,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Java SE is used for'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Building applications that feature a GUI'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Building enterprise software'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creating embedded applications for Raspberry PI'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Any back-end project'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Java EE is used for'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Building enterprise back-end software'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Building applications that feature a GUI'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Creating embedded applications for Raspberry PI'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creating applications for mobile devices'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following will NOT return true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '"hello world".compareTo("Hello world") < 0'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '"Hello world".toLowerCase().equals("hello world")'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '"hello".concat(" world").trim().equals("hello world")'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '"HELLO world".equalsIgnoreCase("hello world")'],
          ],
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '"hello world".equals("hello world")'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be output by the following code?'],
        [QuizMarkdownType.CODE, `String myStr = "good";
char[] myCharArr = {'g', 'o', 'o', 'd'};

String newStr = null;
for (char ch : myCharArr) {
    newStr = newStr + ch;
}
System.out.println(newStr);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'nullgood'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'good'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '103 111 111 100'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '0 1 2 3'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following program, what will be printed if executed?'],
        [QuizMarkdownType.CODE,
          `package strings;
public class StringFromChar {
    
    public static void main(String[] args) {
        String myStr = "good";
        char[] myCharArr = {'g', 'o', 'o', 'd'};
        
        String newStr = null;
        for (char ch : myCharArr) {
            newStr = newStr + ch;
        }

        System.out.println((newStr == myStr) + " " + (newStr.equals(myStr)));
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'false false'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'true false'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'false true'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'true true'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will the following code print if executed?'],
        [QuizMarkdownType.CODE,
          'System.out.printf("This is %s %s", "what", "it", "is");'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'This is what it'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'This is it is'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Exception will be thrown at run time because the number of arguments and the number of format specifiers in the input string do not match.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation failure'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be printed as a result of executing the following code?'],
        [QuizMarkdownType.CODE, `public class Mambo {
  static int m = 10, n = 20;
  public static void main(String args[]){
    int m = 0, n = 10;
    Mambo mb = new Mambo();
    while(m<3) {
      m++; n--;
    }
    System.out.println(m+", "+n);
  }
}
`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '3, 7'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '10, 20'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '9, 19'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of these.'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the result of executing the following code when the value of'],
        [QuizMarkdownType.INLINE_CODE, 'i'],
        [QuizMarkdownType.TEXT, 'is'],
        [QuizMarkdownType.INLINE_CODE, '5'],
        [QuizMarkdownType.TEXT, '?'],
        [QuizMarkdownType.CODE, `switch (i)
{
    default:
    case 1:
        System.out.println(1);
    case 0:
        System.out.println(0);
    case 2:
        System.out.println(2);
        break;
    case 3:
        System.out.println(3);
}
`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '1 0 2'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '1 0 2 3'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Compilation error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '1 0'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The size of an array can be specified either on the right-hand or (rarely) the left-hand side of the declaration statement.'],
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
        [QuizMarkdownType.TEXT, 'The code'],
        [QuizMarkdownType.INLINE_CODE, 'String[ ] sa = new String[3]{ "a", "b", "c"};'],
        [QuizMarkdownType.TEXT, 'will correctly initialize an array of size 3.'],
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
        [QuizMarkdownType.TEXT, 'Which of the following does NOT legitimately declare a variable which can hold an array of 10 integers?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[10] iA;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[ ] iA;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int iA[ ];'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int[] iA = new int[10];'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Java ME is used for'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creating embedded applications for Raspberry PI'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Building enterprise back-end software'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Building applications that feature a GUI'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creating applications for mobile devices'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of attempting to compile and run the following class?'],
        [QuizMarkdownType.CODE,
          `public class TestClass {
    public static void main(String args[] ) {
       int i = 1;
       int[] iArr = {1};
       incr(i);
       incr(iArr);
       System.out.println("i = " + i + "  iArr[0] = " + iArr[0]);
    }

    public static void incr(int n) { n++; }

    public static void incr(int[] n) { n[0]++; }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will print i = 1 iArr[0] = 2'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will print i = 1 iArr[0] = 1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will print i = 2 iArr[0] = 2'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will print i = 2 iArr[0] = 1'],
          ],
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will not compile.'],
          ],
          order: 4,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can the following program be changed so that it can be compiled?'],
        [QuizMarkdownType.CODE,
          `class Test
{
  public static void main(String[] args)
  {
    short s = 10; // 1
    char c = s; // 2
    s = c; // 3
  }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Change '],
            [QuizMarkdownType.INLINE_CODE, 's'],
            [QuizMarkdownType.TEXT, ' in line 2 to '],
            [QuizMarkdownType.INLINE_CODE, '(char) s'],
            [QuizMarkdownType.TEXT, ' and change '],
            [QuizMarkdownType.INLINE_CODE, 'c'],
            [QuizMarkdownType.TEXT, ' in line 3 to '],
            [QuizMarkdownType.INLINE_CODE, '(short) c'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Change '],
            [QuizMarkdownType.INLINE_CODE, 's'],
            [QuizMarkdownType.TEXT, ' in line 1 to '],
            [QuizMarkdownType.INLINE_CODE, 'char'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Change '],
            [QuizMarkdownType.INLINE_CODE, 'c'],
            [QuizMarkdownType.TEXT, ' in line 2 to '],
            [QuizMarkdownType.INLINE_CODE, 'int'],
            [QuizMarkdownType.TEXT, ' and '],
            [QuizMarkdownType.INLINE_CODE, 's'],
            [QuizMarkdownType.TEXT, ' in line 3 to '],
            [QuizMarkdownType.INLINE_CODE, 'int'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No changes are needed, the program will compile as is'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The assignment '],
        [QuizMarkdownType.INLINE_CODE, 'long g = 012;'],
        [QuizMarkdownType.TEXT, ' is considered a widening conversion because it is assigning a primitive type of a '],
        [QuizMarkdownType.TEXT, '________'],
        [QuizMarkdownType.TEXT, ' range to a primitive type of a '],
        [QuizMarkdownType.TEXT, '________'],
        [QuizMarkdownType.TEXT, ' range.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'smaller, larger'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'larger, smaller'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'equal, equal'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'different, similar'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the size and range of a '],
        [QuizMarkdownType.INLINE_CODE, 'byte'],
        [QuizMarkdownType.TEXT, ' in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 8 bits, Range: -128 to 127'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 16 bits, Range: -32,768 to 32,767'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 8 bits, Range: 0 to 255'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Size: 32 bits, Range: -2^31 to 2^31 - 1'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following code will fail to compile.'],
        [QuizMarkdownType.CODE, `double xd = 10.0d;
double xD = 10.0D;
float xf = 10.0f;
double xF = 10.0F;
System.out.println(xd);
System.out.println(xD);
System.out.println(xf);
System.out.println(xF);`],
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
        [QuizMarkdownType.TEXT, 'The following code will compile and run'],
        [QuizMarkdownType.INLINE_CODE, 'int[] ia = new int[0];'],
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
        [QuizMarkdownType.TEXT, 'Which of the following statements regarding'],
        [QuizMarkdownType.INLINE_CODE, 'break'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'continue'],
        [QuizMarkdownType.TEXT, 'are true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_CODE, 'break'],
            [QuizMarkdownType.TEXT, 'without a label can occur only in a'],
            [QuizMarkdownType.INLINE_CODE, 'switch'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, 'while'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, 'do'],
            [QuizMarkdownType.TEXT, ', or'],
            [QuizMarkdownType.INLINE_CODE, 'for'],
            [QuizMarkdownType.TEXT, 'statement.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_CODE, 'continue'],
            [QuizMarkdownType.TEXT, 'without a label can occur only in a'],
            [QuizMarkdownType.INLINE_CODE, 'switch'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, 'while'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, 'do'],
            [QuizMarkdownType.TEXT, ', or'],
            [QuizMarkdownType.INLINE_CODE, 'for'],
            [QuizMarkdownType.TEXT, 'statement.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'break'],
            [QuizMarkdownType.TEXT, 'can never occur without a label.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'continue'],
            [QuizMarkdownType.TEXT, 'can never occur WITH a label.'],
          ],
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above.'],
          ],
          order: 4,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which situation does a class get a default constructor?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'All classes in Java get a default constructor.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'You have to define at least one constructor to get the default constructor.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'If the class does not define any constructors explicitly.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'All classes get default constructor from Object class.'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output if you run the following program?'],
        [QuizMarkdownType.CODE, `
public class TestClass {
    public static void main(String args[]) {
        int i;
        int j;
        for (i = 0, j = 0; j < 1; ++j, i++) {
            System.out.println(i + " " + j);
        }
        System.out.println(i + " " + j);
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0 0 will be printed twice.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1 1 will be printed once.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '0 1 will be printed followed by 1 2.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0 0 will be printed followed by 1 1.'],
          ],
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print 0 0 and then 0 1.'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will the following code print when run?'],
        [QuizMarkdownType.CODE, `
public class TestClass {
    public static long main(String[] args) {
        System.out.println("Hello");
        return 10L;
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print nothing.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will not compile.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will generate an error at run time.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above.'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which is true of fields modified by the'],
        [QuizMarkdownType.INLINE_CODE, 'static'],
        [QuizMarkdownType.TEXT, 'modifier?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The field could be accessed in its class in a non-static method using the keyword'],
            [QuizMarkdownType.INLINE_CODE, 'this'],
            [QuizMarkdownType.TEXT, ', e.g.'],
            [QuizMarkdownType.INLINE_CODE, 'this.field;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The field could be modified by the keyword'],
            [QuizMarkdownType.INLINE_CODE, 'abstract'],
            [QuizMarkdownType.TEXT, ', e.g.'],
            [QuizMarkdownType.INLINE_CODE, 'static abstract int field;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The field could be accessed in its class in a static method using the keyword'],
            [QuizMarkdownType.INLINE_CODE, 'this'],
            [QuizMarkdownType.TEXT, ', e.g.'],
            [QuizMarkdownType.INLINE_CODE, 'this.field;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Assuming that the following are the complete contents of'],
        [QuizMarkdownType.INLINE_CODE, 'TestClass.java'],
        [QuizMarkdownType.TEXT, 'file, what will be the result of attempting to compile this file?'],
        [QuizMarkdownType.CODE, `
import java.util.*;
package test;

public class TestClass {
    public OtherClass oc = new OtherClass();
}

class OtherClass {
    int value;
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The class will fail to compile.'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The class will fail to compile, since the class OtherClass must be defined in a file called OtherClass.java.'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'There is no problem with the code.'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The class will fail to compile, since the class OtherClass is used before it is defined.'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If you have file'],
        [QuizMarkdownType.INLINE_CODE, 'TestClass.java'],
        [QuizMarkdownType.TEXT, ', the contents of which are displayed below, and you run the commands'],
        [QuizMarkdownType.INLINE_CODE, 'javac Testclass.java'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'java Testclass'],
        [QuizMarkdownType.TEXT, ', what can be concluded?'],
        [QuizMarkdownType.CODE, `
public class TestClass {
    public static long main(String[] args) {
        System.out.println("Hello");
        return 10L;
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will reveal a runtime error.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will reveal a compilation error.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will compile and run without issue.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above.'],
          ],
          order: 4,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you import a static method from a class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import static java.lang.Math.max;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.lang.Math.max;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.lang.static.Math.max;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import static java.lang.*;'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The division operator / has the same precedence as the multiplication operator'],
        [QuizMarkdownType.INLINE_CODE, '/'],
        [QuizMarkdownType.TEXT, 'has the same precedence as the multiplication operator'],
        [QuizMarkdownType.INLINE_CODE, '*'],
        [QuizMarkdownType.TEXT, '.'],
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
        [QuizMarkdownType.TEXT, 'Which import statement will NOT import the'],
        [QuizMarkdownType.INLINE_CODE, 'Collections'],
        [QuizMarkdownType.TEXT, 'interface'],
        [QuizMarkdownType.INLINE_CODE, 'HashMap'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.lang.System.*;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.util.*;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.util.Collections;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.util.HashMap;'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the correct import statement for the Collections class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.util.Collections;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.collection.Collections;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.util.Collection;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.util.Collections.*;'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you import a static method from a class in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import static java.lang.Math.max;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.lang.Math.max;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import java.lang.static.Math.max;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import static java.lang.*;'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a valid way to import the public static field '],
        [QuizMarkdownType.INLINE_CODE, 'MAX_VALUE'],
        [QuizMarkdownType.TEXT, ' from the '],
        [QuizMarkdownType.INLINE_CODE, 'java.lang.Integer'],
        [QuizMarkdownType.TEXT, ' class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'static import Integer.MAX_VALUE;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import static java.lang.Integer.*;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'import static java.lang.System.*;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'All answers are valid'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT true about the "default" constructor?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It is provided by the compiler if the class does not define a \'no-args\' constructor.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It is provided by the compiler only if the class does not define any constructor.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It calls the default \'no-args\' constructor of the super class.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be printed as a result of running the following program?'],
        [QuizMarkdownType.CODE,
          `public class TestClass {
    public void update(int[] a, int offset) {
        a[0] = a[0] + offset;
    }

    public void update(int a, int offset) {
        a = a + offset;
    }

    public static void main(String[] args) {
        TestClass u = new TestClass();
        int a = 99;
        int[] iA = {a};
        u.update(iA, 111);
        u.update(a, 111);
        System.out.println("a: " + a + ", " + "iA[0]: " + iA[0]);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'a: 210, iA[0]: 210'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'a: 99, iA[0]: 210'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'a: 99, iA[0]: 99'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'a: 210, iA[0]: 99'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be printed as a result of running the following program?'],
        [QuizMarkdownType.CODE,
          `public class TestClass {
    public void update(int[] a, int offset) {
        a[0] = a[0] + offset;
    }

    public void update(int a, int offset) {
        a = a + offset;
    }

    public static void main(String[] args) {
        TestClass u = new TestClass();
        int a = 99;
        int[] iA = {a};
        int[] iA2 = iA;
        u.update(iA, 111);
        u.update(iA2, 1);
        System.out.println("a: " + a + ", " + "iA[0]: " + iA[0]);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'a: 99, iA[0]: 211'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'a: 211, iA[0]: 211'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'a: 99, iA[0]: 100'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'a: 100, iA[0]: 100'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be printed as a result of running the following program?'],
        [QuizMarkdownType.CODE,
          `import java.util.ArrayList;
import java.util.List;

public class TestClass {

    public void update(Integer a, int offset) {
        a = a + offset;
    }

    public static void main(String[] args) {
        TestClass u = new TestClass();
        Integer a = 99;
        List<Integer> iL = new ArrayList<>();
        iL.add(a);
        u.update(a, 111);
        System.out.println("a: " + iL.get(0));
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'a: 210'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'a: 99'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'a: 111'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'a: 0'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Java source code is converted to binary code using an interpreter.'],
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
    }, {
      question: [
        [QuizMarkdownType.TEXT, 'The following class declaration is valid:'],
        [QuizMarkdownType.CODE, 'class Hello throws Exception'],
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
        [QuizMarkdownType.TEXT, 'What will the following program print?'],
        [QuizMarkdownType.CODE,
          `class Test {
   public static void main(String args[]) {
      int var = 20, i = 0;
      do {
         while (true) {
            if (i++ > var) break;
         }
      } while (i < var--);
      System.out.println(var);
   }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '19'],
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
            [QuizMarkdownType.TEXT, '21'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will enter an infinite loop'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT true of constructors?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A constructor must define a return type,'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A constructor must have the same name as the class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A constructor is used to initialize objects of the class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A constructor cannot be modified by the keyword'],
            [QuizMarkdownType.INLINE_CODE, 'static'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following program will compile and run'],
        [QuizMarkdownType.CODE,
          `public class TestClass {
    long l1;
    public void TestClass(long pLong) { l1 = pLong ; }  //1
    public static void main(String args[]) {
        TestClass a, b ;
        a = new TestClass();  //2
        b = new TestClass(5);  //3
    }
}`],
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
        [QuizMarkdownType.TEXT, 'What will the following code print?'],
        [QuizMarkdownType.CODE,
          `void crazyLoop() {
   int c = 0;
   JACK: while (c < 8) {
      JILL: System.out.println(c);
      if (c > 3) break JILL; else c++;
   }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will not compile.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print numbers from 0 to 8'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print numbers from 0 to 3'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will print numbers from 0 to 4'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a true statement?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It is not necessary for a Java file to have a public class.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A Java file must contain at least one public class.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A Java file can only have one class.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A Java file must always be named after one of the classes it contains.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following class can be imported by a different class in the project via the import statement '],
        [QuizMarkdownType.INLINE_CODE, 'import com.cool;'],
        [QuizMarkdownType.TEXT, '.'],
        [QuizMarkdownType.CODE, `package com.cool;

public class Cooler {
  public void doCool(){
    System.out.println("cooling...");
  }
}`],
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
        [QuizMarkdownType.TEXT, 'What will the following code print when run without any arguments?'],
        [QuizMarkdownType.CODE,
          `public class TestClass {

    public static int m1(int i) {
        return ++i;
    }
    
    public static void main(String[] args) {
        int k = m1(args.length);
        k += 3 + ++k;
        System.out.println(k);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '6'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '4'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '7'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of these.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following code will print which answer?'],
        [QuizMarkdownType.CODE,
          `int k = 1;
k += 3 + ++k;
System.out.println(k);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '6'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '4'],
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
            [QuizMarkdownType.TEXT, '7'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be printed from executing the following code?'],
        [QuizMarkdownType.CODE, `int[] balances1 = new int[]{ 10, 20 };
int[] balances2 = balances1;
int[] balances3 = new int[2];
balances3[0] = balances2[0];
balances3[1] = balances2[1];
System.out.print(balances1 == balances3);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'true'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be printed from executing the following code?'],
        [QuizMarkdownType.CODE, `int[] balances1 = new int[]{ 10, 20 };
int[] balances2 = balances1;
balances2[1] = balances1[0];
System.out.print(balances1 == balances2);`],
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
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be printed from executing the following code?'],
        [QuizMarkdownType.CODE, `int[] balances1 = new int[]{ 10, 20 };
int[] balances2 = balances1;
balances1 = new int[]{ 100 };
System.out.print(balances1 == balances2);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'true'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following class can be imported by a different class in the project via the import statement '],
        [QuizMarkdownType.INLINE_CODE, 'import com.cool.*;'],
        [QuizMarkdownType.TEXT, '.'],
        [QuizMarkdownType.CODE, `package com.cool;

public class Cooler {
  public void doCool(){
    System.out.println("cooling...");
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
        [QuizMarkdownType.TEXT, 'The following class can be imported by a different class in the project via the import statements '],
        [QuizMarkdownType.INLINE_CODE, 'import com.cool.Cooler;'],
        [QuizMarkdownType.TEXT, ','],
        [QuizMarkdownType.INLINE_CODE, 'import com.cool.*;'],
        [QuizMarkdownType.TEXT, ' or '],
        [QuizMarkdownType.INLINE_CODE, 'import com.cool;'],
        [QuizMarkdownType.TEXT, '.'],
        [QuizMarkdownType.CODE, `package com.cool;

public class Cooler {
  public void doCool(){
    System.out.println("cooling...");
  }
}`],
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
        [QuizMarkdownType.TEXT, 'What is the range of values for a '],
        [QuizMarkdownType.INLINE_CODE, 'char'],
        [QuizMarkdownType.TEXT, ' in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0 to (2^16 - 1)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '-2^31 to 2^31 - 1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '-2^63 to 2^63 - 1'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '-2^15 to 2^15 - 1'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following program?'],
        [QuizMarkdownType.CODE,
          `public class TestClass {
    public static void main(String[] args) {
        System.out.println(new IntUtility().IntUtility());
    }
}

class IntUtility {
    int IntUtility() {
        IntUtility IntUtility = new IntUtility();
        return IntUtility.IntUtility(7);
    }

    int IntUtility(int i) {
        return i;
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '7'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw a compilation error.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw a runtime exception.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following program?'],
        [QuizMarkdownType.CODE,
          `public class TestClass {
    public static void main(String[] args) {
        System.out.println(new IntUtility().IntUtility());
    }
}

class IntUtility {
    int IntUtility() {
        return IntUtility(6);
    }

    int IntUtility(int i) {
        return i;
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '6'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw a compilation error.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw a runtime exception.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements are true regarding naming rules in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'You can use the same name cross-scope for a class, variable, or method.'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'You cannot have the same name for two variables in the same scope.'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'You can have the same name for two variables in the same scope.'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'You cannot use the same name for a class, variable, or method.'],
          ],
          order: 3,
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
          ],
          order: 4,
        },
        {
          id: '5',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 3 and 4'],
          ],
          order: 5,
        },
      ],
      correctAnswer: '4',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of attempting to compile and run the following program?'],
        [QuizMarkdownType.CODE, `
class TestClass {
    public static void main(String args[]) {
        int i = 0;
        for (i = 1; i < 5; i++) continue; //1
        for (i = 0;                     ; i++) break; //2
        for (     ; i < 5 ? false : true;     ); //3
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will compile without error and will terminate without problems when run.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will fail to compile, since the \'continue\' can\'t be used this way.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will fail to compile, since the \'break\' can\'t be used this way.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The code will fail to compile, since the \'for\' statement in line 2 is invalid.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you declare a method'],
        [QuizMarkdownType.INLINE_CODE, 'someMethod()'],
        [QuizMarkdownType.TEXT, 'such that an instance of the class is not needed to access it and all the members of the same package have access to it?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'public static void someMethod()'],
          ],
          order: 1,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'static void someMethod()'],
          ],
          order: 2,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'protected static void someMethod()'],
          ],
          order: 3,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'void someMethod()'],
          ],
          order: 4,
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'protected void someMethod()'],
          ],
          order: 5,
        },
        {
          id: '5',
          answer: [
            [QuizMarkdownType.TEXT, 'public abstract static void someMethod()'],
          ],
          order: 6,
        },
        {
          id: '6',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1, 2, and 3.'],
          ],
          order: 7,
        },
      ],
      correctAnswer: '6',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How many string objects are created in the following code fragment?'],
        [QuizMarkdownType.CODE, `
String a, b, c;
a = new String("hello");
b = a;
c = a + b;
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1'],
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
            [QuizMarkdownType.TEXT, '3'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '4'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following will give an error at compile time and run time?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'if (x = 3) {} // assume that x is defined as an int'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'if (8 == 81) {}'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'if (bool = false) {} //assume that bool is declared as a boolean'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'if (true) {}'],
          ],
          order: 3,
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.CODE, 'if (x == 10 ? true:false) {} // assume that x is an int'],
          ],
          order: 4,
        },
        {
          id: '5',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2.'],
          ],
          order: 5,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is not valid code?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int a, b; (a + b)--;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int a, b; a = b;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int a, b; a = b = a;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'int a = 0, b = 0; a = (a + b);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
