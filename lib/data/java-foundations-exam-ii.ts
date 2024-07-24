import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Java Foundations Exam II',
  slug: 'java-foundations-exam-ii',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following program will compile and run.'],
        [QuizMarkdownType.CODE,
          `List s1 = new ArrayList();
    s1.add("a");
    s1.add("b");
    s1.add("c");
    s1.add("a");
    
    if(s1.remove("a")) {
        if(s1.remove("a")) {
            s1.remove("b");
        } else {
            s1.remove("c");
        }
    }
    System.out.println(s1);`],
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
        [QuizMarkdownType.TEXT, 'Identify the valid for loop construct assuming the following declarations:'],
        [QuizMarkdownType.CODE,
          `Object o = null;
    ArrayList c = //valid ArrayList object.
    int[] ia = //valid array of integers.`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'for(final Object o2 : c) { }'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'for(o : c) { }'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'for(Iterator it : c.iterator()) { }'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'for(int i = 1; i <= ia.length; i++) { System.out.println(ia[i]); }'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT true of the following program:'],
        [QuizMarkdownType.CODE,
          `public class FinallyTest {
       public static void main(String args[]) {
          try {
              if (args.length == 0) return;
              else throw new Exception("Some Exception");
          }
          catch(Exception e) {
              System.out.println("Exception in Main");
          }
          finally {
              System.out.println("The end");
          }
       }
    }`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'If run with one argument, the program will only print "Exception in Main".'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'If run with one argument, the program will print "Exception in Main" and "The end".'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'If run with no arguments, the program will only print "The end".'],
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
        [QuizMarkdownType.TEXT, 'Which of the following is NOT true of the following program:'],
        [QuizMarkdownType.CODE,
          `public class TestClass {
       public static void main(String args[]) {
          try {
             m1();
          } catch (IndexOutOfBoundsException e) {
             System.out.println("1");
             throw new NullPointerException();
          } catch (NullPointerException e) {
             System.out.println("2");
             return;
          } catch (Exception e) {
             System.out.println("3");
          } finally {
             System.out.println("4");
          }
          System.out.println("END");
       }
       
       // IndexOutOfBoundsException is a subclass of RuntimeException.
       static void m1() {
          System.out.println("m1 Starts");
          throw new IndexOutOfBoundsException("Big Bang");
       }
    }`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will print "m1 Starts".'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will print "m1 Starts", 1 and 4, in that order.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '"END" will not be printed.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '"4" will not be printed.'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A '],
        [QuizMarkdownType.TEXT, '____'],
        [QuizMarkdownType.TEXT, ' can hold a range of integers from 0 to 65535 while a '],
        [QuizMarkdownType.TEXT, '____'],
        [QuizMarkdownType.TEXT, ' can hold a range of integers from -32,768 to 32,767.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'char, short'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'short, char'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'int, long'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'byte, char'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following two classes defined in two .java files. What should be inserted at '],
        [QuizMarkdownType.INLINE_CODE, '//1'],
        [QuizMarkdownType.TEXT, ' so that '],
        [QuizMarkdownType.INLINE_CODE, 'Y.java'],
        [QuizMarkdownType.TEXT, ' can compile without any error?'],
        [QuizMarkdownType.CODE,
          `//in file /root/com/foo/X.java
    package com.foo;
    public class X {
      public static int LOGICID = 10;
      public void apply(int i) {
        System.out.println("applied");
      }
    }
    
    //in file /root/com/bar/Y.java
    package com.bar;
    //1  <== INSERT STATEMENT(s) HERE
    public class Y {
        public static void main(String[] args) {
           X x = new X();
           x.apply(LOGICID);
        }
    }`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'import static com.foo.X.*; and import com.foo.*;'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'import static com.foo.X.*; and import static com.foo.*;'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'import com.foo.X;'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'import com.foo.X.*;'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a valid constructor?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public TestClass(String s)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public TestClass(int a, int b) { }'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'private TestClass(String s, int a) { }'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'public TestClass(String s1, String s2) { }'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A constructor can have an empty body.'],
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
        [QuizMarkdownType.TEXT, 'Which of the following is NOT true of Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows development of low level components such as device drivers.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows you to develop desktop as well as web applications.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows you to develop distributed applications.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

  ],
} as QuizDataObject;
