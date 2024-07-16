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
        [QuizMarkdownType.TEXT, 'What will happen when the following code is compiled?'],
        [QuizMarkdownType.CODE, `
public class FooBar {
    private int FooBar;  //1
    public FooBar(int FooBar) { this.FooBar = FooBar; } //2
    public void FooBar() { } //3
}
        `],
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
        [QuizMarkdownType.TEXT, 'What can you do to make the following code print a number between 0 and 10? (Assume appropriate import statements.)'],
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
            [QuizMarkdownType.TEXT, 'Random r = new Random(x); int d = (int) r.next() * 10;'],
          ],
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'Random r = new Random(); r.setSeed(x); int d = (int) r.next() * 10;'],
          ],
        },
        {
          id: '5',
          answer: [
            [QuizMarkdownType.TEXT, 'Random r = new Random(x); r.setSeed(x); int d = r.nextInt(x);'],
          ],
        },
        {
          id: '6',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1, 3 and 5'],
          ],
          order: 6,
        },
        {
          id: '7',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1, 2 and 5'],
          ],
          order: 7,
        },
      ],
      correctAnswer: '7',
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
          order: 1
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'i = this.i2;'],
          ],
          order: 2
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'this.i = 4;'],
          ],
          order: 3
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'this.i1 = i2;'],
          ],
          order: 4
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'this.i1 = i2;'],
          ],
          order: 5
        },
        {
          id: '5',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
          ],
          order: 6
        },
        {
          id: '6',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1, 3 and 2'],
          ],
          order: 7
        },
        {
          id: '7',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1, 2 and 5'],
          ],
          order: 8
        },
      ],
      correctAnswer: '7',
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
          order:0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'public int setVar(int a, float b, int c) { return this(a, c, b); }'],
          ],
          order:1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'public int setVar(int x, int y, float z) { return x + y; }'],
          ],
          order:2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'public float setVar(int a, int b, float c) { return c * a; }'],
          ],
          order:3,
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'public float setVar(int a) { return a; }'],
          ],
          order:4,
        },
        {
          id: '5',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 2 and 4'],
          ],
          order:5,
        },
        {
          id: '6',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 3'],
          ],
          order:6,
        },
        {
          id: '7',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1, 3 and 5'],
          ],
          order:7,
        },
        {
          id: '8',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1, 2 and 4'],
          ],
          order:8,
        },
      ],
      correctAnswer: '0, 2, 4',
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
            [QuizMarkdownType.TEXT, 'Compilation failure'],
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
            [QuizMarkdownType.TEXT, '1 1 1\n3 1 3'],
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
      correctAnswer: '4',
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
          order: 1
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They should be private.'],
          ],
          order: 2
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They can be overloaded.'],
          ],
          order: 3
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They inherit members from the base class.'],
          ],
          order: 4
        },

        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 3'],
          ],
          order: 5
        },

        {
          id: '5',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
          ],
          order: 6
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
        [QuizMarkdownType.TEXT, "Which of the following statements regarding"],
        [QuizMarkdownType.INLINE_CODE, 'break'],
        [QuizMarkdownType.TEXT, "and"],
        [QuizMarkdownType.INLINE_CODE, 'continue'],
        [QuizMarkdownType.TEXT, "are true?"],
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
      correctAnswer: '1',
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
          order: 0
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'You cannot have the same name for two variables in the same scope.'],
          ],
          order: 1
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'You can have the same name for two variables in the same scope.'],
          ],
          order: 2
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'You cannot use the same name for a class, variable, or method.'],
          ],
          order: 3
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
          ],
          order: 4
        },
        {
          id: '5',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 3 and 4'],
          ],
          order: 5
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
            [QuizMarkdownType.TEXT, "The code will fail to compile, since the 'continue' can't be used this way."],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, "The code will fail to compile, since the 'break' can't be used this way."],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, "The code will fail to compile, since the 'for' statement in line 2 is invalid."],
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


  ],
} as QuizDataObject;
