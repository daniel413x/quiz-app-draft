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

    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following code, which statements can be placed at the indicated position without causing compile and run time errors?'],
        [QuizMarkdownType.CODE, `
public class Test {
    int i1;
    static int i2;
    public void method1() {
        int i;
        // ... insert statements here
    }
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'i = this.i1;'],
          ],
          order: 1,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'i = this.i2;'],
          ],
          order: 2,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'this.i = 4;'],
          ],
          order: 3,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'this.i1 = i2;'],
          ],
          order: 4,
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'this.i1 = i2;'],
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
        {
          id: '6',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1, 3 and 2'],
          ],
          order: 7,
        },
        {
          id: '7',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1, 2 and 5'],
          ],
          order: 8,
        },
      ],
      correctAnswer: '7',
    },
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
      correctAnswer: '0',
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
        [QuizMarkdownType.TEXT, 'Consider the following method. Which of the following methods correctly overload the above method?'],
        [QuizMarkdownType.CODE, `
public int setVar(int a, int b, float c) {
    //valid code not shown
}
        `],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'public int setVar(int a, float b, int c) { return setVar(a, c, b); }'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'public int setVar(int a, float b, int c) { return this(a, c, b); }'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'public int setVar(int x, int y, float z) { return x + y; }'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'public float setVar(int a, int b, float c) { return c * a; }'],
          ],
          order: 3,
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'public float setVar(int a) { return a; }'],
          ],
          order: 4,
        },
        {
          id: '5',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 2 and 4'],
          ],
          order: 5,
        },
        {
          id: '6',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 3'],
          ],
          order: 6,
        },
        {
          id: '7',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1, 3 and 5'],
          ],
          order: 7,
        },
        {
          id: '8',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1, 2 and 4'],
          ],
          order: 8,
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
      correctAnswer: '2',
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
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '2'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '3'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '4'],
          ],
          order: 3,
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
        [QuizMarkdownType.TEXT, 'Why does the expression'],
        [QuizMarkdownType.INLINE_CODE, 'balances1 == balances2'],
        [QuizMarkdownType.TEXT, 'evaluate to true in the following code?'],
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
            [QuizMarkdownType.TEXT, 'Because both balances1 and balances2 point to the same array in memory.'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because balances1 and balances2 are different arrays with the same values.'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because the == operator compares the values inside the arrays.'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because balances2 is a copy of balances1.'],
          ],
          order: 3,
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
            [QuizMarkdownType.TEXT, 'Compilation error'],
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
      correctAnswer: '2',
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
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'i'],
            [QuizMarkdownType.TEXT, 'will be assigned a default value while'],
            [QuizMarkdownType.INLINE_CODE, 'anInt'],
            [QuizMarkdownType.TEXT, 'won\'t'],
          ],
          order: 1,
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
          order: 2,
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
          order: 3,
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
            [QuizMarkdownType.TEXT, 'I scored 0 marks in the null exam!'],
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
      correctAnswer: '2',
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
        [QuizMarkdownType.INLINE_KATEX, '-2^31'],
        [QuizMarkdownType.TEXT, 'to'],
        [QuizMarkdownType.INLINE_KATEX, '2^31-1'],
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
        [QuizMarkdownType.TEXT, 'Which of the following statements are true regarding naming rules in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'You can use the same name for a class, variable, or method.'],
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
