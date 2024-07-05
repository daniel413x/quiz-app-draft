import circularLinkedList from '@/public/circular-linked-list.png';
import doubleEndedQueue from '@/public/double-ended-queue.png';
import singlyLinkedList from '@/public/singly-linked-list.png';
import doublyLinkedList from '@/public/doubly-linked-list.png';
import { QuizDataObject, QuizMarkdownType } from './types';

// if some of these seem like too much noise, just try to associate them with the study guide section
// like
// interface <----> abstraction

export default {
  name: 'Special',
  slug: 'special',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is Stack Memory in Java primarily used for?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Static memory allocation and execution of a thread.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic memory allocation and garbage collection.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Storing global variables and objects.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Handling network connections.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In what order is memory accessed in the stack?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Last-In-First-Out (LIFO)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'First-In-First-Out (FIFO)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Random Access'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Round-Robin'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When is a new block created on top of the stack in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Whenever a new method is called.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Whenever a new object is created.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Whenever a new variable is declared.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Whenever a new class is loaded.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens to the stack frame when a method finishes execution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The stack frame is flushed and space becomes available for the next method.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The stack frame is moved to the heap.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The stack frame remains in the stack.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The stack frame is saved to disk.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How long do variables inside the stack exist?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'As long as the method that created them is running.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'As long as the class that contains them is loaded.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'As long as the program is running.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'As long as the thread that created them is running.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How is stack memory allocated and deallocated in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Automatically as methodd finish execution.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Manually by the programmer.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Through garbage collection.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By the operating system.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens if the stack memory is full in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Java throws java.lang.StackOverflowError.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Java throws java.lang.OutOfMemoryError.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Java throws java.lang.StackUnderflowError.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The program terminates without an exception.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does the access speed of stack memory compare to heap memory in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Access to stack memory is faster than heap memory.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Access to stack memory is slower than heap memory.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Access speeds are the same for both stack and heap memory.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Access speed depends on the size of the memory.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is stack memory considered threadsafe in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because each thread operates in its own stack.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because stack memory is shared among all threads.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because stack memory is protected by synchronization mechanisms.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because stack memory is read-only.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does stack memory grow and shrink in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It grows and shrinks as new methods are called and returned, respectively.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It grows and shrinks based on the size of the objects created.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It grows and shrinks based on the amount of data processed.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It grows and shrinks based on the number of threads.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of heap space in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Heap space is used for the dynamic memory allocation of Java objects and JRE classes at runtime.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Heap space is used for static memory allocation and the execution of a thread.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Heap space is used for storing primitive values and references to objects.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Heap space is used for maintaining the call stack of methods.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where are new objects created in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'New objects are always created in heap space.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'New objects are always created in stack memory.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'New objects are always created in method area.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'New objects are always created in native memory.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What level of access do objects in heap space have in a Java application?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects in heap space have global access and can be accessed from anywhere in the application.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects in heap space have local access and can only be accessed within the method that created them.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects in heap space have restricted access and can only be accessed within the class that created them.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects in heap space have no access limitations and can be accessed from native code.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, instantiated objects are always added to the ____, while references to these objects are added to the ____'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'heap, stack'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'stack, heap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'register, heap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'heap, register'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a multi-threaded Java application, where are shared objects typically stored?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'In the heap memory.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'In the stack memory.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In the method area.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'In the native method stack.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What order does stack memory operate in?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Last-In-First-Out (LIFO)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'First-In-First-Out (FIFO)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Random Access'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Round-Robin'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is stack memory used for in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Method call management'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Storing objects'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic memory allocation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Managing global variables'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does memory allocation speed in the stack compare to the heap?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack memory allocation is faster'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Heap memory allocation is faster'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both have the same speed'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It depends on the JVM implementation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does memory allocation speed in the stack compare to the heap?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack memory allocation is faster'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Heap memory allocation is faster'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both have the same speed'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It depends on the JVM implementation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a characteristic of stack memory size?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Limited in size'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Unlimited in size'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Varies with each method call'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Equal to heap memory size'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does stack memory store?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Local variables and function calls'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Global variables and objects'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'JRE classes'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'File I/O streams'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How is stack memory deallocated?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Automatically when the method finishes execution'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Manually by the programmer'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By the garbage collector'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It is never deallocated'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What error occurs if the stack memory is full?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'StackOverflowError'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'OutOfMemoryError'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'NullPointerException'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'ClassCastException'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: all threads in a Java application share a common heap memory.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, all threads share a common heap memory.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No, each thread has its own heap memory.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'No, each class has its own heap memory.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, each method has its own heap memory.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true about stack memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Fast access, less memory used'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Slow access, more memory used'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Slow access, less memory used'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Fast access, more memory used'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does stack memory grow and shrink in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Grows and shrinks automatically with function calls'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Grows and shrinks dynamically with object creation and deletion'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Grows but does not shrink'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Shrinks but does not grow'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is heap space used for in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic memory allocation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Static memory allocation'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Method call management'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Storing local variables'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does memory allocation speed in the heap compare to the stack?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Heap memory allocation is slower'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack memory allocation is slower'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both have the same speed'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It depends on the JVM implementation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does the size of heap memory compare to stack memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Heap memory is larger'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack memory is larger'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both have the same size'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It depends on the application'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can objects in heap memory be accessed in a Java application?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects in heap memory have global access and can be accessed from anywhere in the application'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects in heap memory have local access and can only be accessed within the method that created them'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects in heap memory have restricted access and can only be accessed within the class that created them'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects in heap memory have no access limitations and can be accessed from native code'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, a thread always created its own ____, but all threads share a common ____ memory.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'stack, heap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'heap, stack'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'register, heap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'heap, register'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does a stack frame contain in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Local variables, including references to objects.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'All objects created by the method.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Global variables and static fields.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The bytecode of the method being executed.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where are Java objects created using the "new" keyword stored?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'In the heap memory.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'In the stack memory.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In the method area.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'In the native method stack.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where are references to instantiated objects typically stored in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'In the stack memory of the particular thread that created the objects.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'In the heap memory along with the objects.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In the method area.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'In the native method stack.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What potential issue can occur in heap memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Memory fragmentation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack overflow'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Null reference'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Heap corruption'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is NOT true of the program below?'],
        [QuizMarkdownType.CODE, `public class Example {
    private int counter = 0;

    public void increment() {
        counter++;
    }

    public int getCounter() {
        return counter;
    }

    public static void main(String[] args) {
        Example example = new Example();

        Runnable task = () -> {
            for (int i = 0; i < 1000; i++) {
                example.increment();
            }
        };

        Thread thread1 = new Thread(task);
        Thread thread2 = new Thread(task);

        thread1.start(); 
        thread2.start();

        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace(); 
        }

        System.out.println("Counter: " + example.getCounter());
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will output improperly because'],
            [QuizMarkdownType.INLINE_CODE, 'example'],
            [QuizMarkdownType.TEXT, 'is inaccessible by either'],
            [QuizMarkdownType.INLINE_CODE, 'thread1'],
            [QuizMarkdownType.TEXT, 'or'],
            [QuizMarkdownType.INLINE_CODE, 'thread2'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'thread1'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'thread2'],
            [QuizMarkdownType.TEXT, 'are facing a possible race condition'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'thread1'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'thread2'],
            [QuizMarkdownType.TEXT, 'possess their own memory stacks'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will output properly because'],
            [QuizMarkdownType.INLINE_CODE, 'example'],
            [QuizMarkdownType.TEXT, 'is accessible from'],
            [QuizMarkdownType.INLINE_CODE, 'thread1'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'thread2'],
            [QuizMarkdownType.TEXT, 'by virtue of being part of the heap memory'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'How can the execution stack of the following program be represented in XML-like markdown?'],
        [QuizMarkdownType.CODE, `public class StackExample {
    public static void main(String[] args) {
        firstMethod();
    }

    public static void firstMethod() {
        secondMethod();
    }

    public static void secondMethod() {
        System.out.println("Inside secondMethod");
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `<main>
  <firstMethod>
    <secondMethod>
      <println />
    </secondMethod>
  </firstMethod>
</main>`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `<main />
<firstMethod />
<secondMethod />
<println />`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `<main>
  <firstMethod />
  <secondMethod />
  <println />
</main>`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `<main>
  <firstMethod />
    <secondMethod>
      <println />
    </secondMethod>
</main>`],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is "polymorphism" in Object-Oriented Programming?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The ability to process objects differently based on their data type or class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A way to hide the internal state of objects'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The creation of a new object from existing ones'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The use of functions with the same name but different parameters'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is "encapsulation" in Object-Oriented Programming?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The bundling of data with the methods that operate on that data'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The ability to inherit methods from another class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A technique to reduce redundancy'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A method of processing objects based on their class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of polymorphism is achieved through method overloading?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Compile-time polymorphism'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Run-time polymorphism'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Static polymorphism'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic polymorphism'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true of heaps and stacks?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Unlike a stack, the heap isn’t threadsafe and needs to be guarded by properly synchronizing the code.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No object in the heap can be affected by race conditions because Java provides for thread safety.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'If heap space is full, Java throws java.lang.StackOverFlowError.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Access to the heap memory is faster than access to stack memory.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the term "abstraction" refer to in object-oriented programming?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Hiding the complex reality while exposing only the necessary parts'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Providing a way to reuse code'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Bundling data with the methods that operate on that data'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Allowing objects to take on many forms'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where possible, from a memory standpoint, you should use _______ types over _______ types.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'primitive, reference'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'reference, primitive'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'static, reference'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'reference, static'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Objects that are _______ types are stored directly in the stack while  _______ types have a memory address stored in the stack that points to the object in the heap.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'primitive, reference'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'reference, primitive'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'static, reference'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'reference, static'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How are primitive types typically stored in memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'As direct values'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'As references'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In the stack'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'In the heap'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a primitive type in programming?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A basic data type provided by the programming language'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A user-defined data type'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A complex data structure like arrays'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A type that contains multiple values'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which programming paradigm is based on the concept of objects containing both data and methods?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Object-Oriented Programming'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Functional Programming'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Procedural Programming'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Event-Driven Programming'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary advantage of using interfaces in programming?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They allow for the definition of methods without specifying their implementation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They enable the use of polymorphism'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They ensure that a class has only one reason to change'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They allow objects to be replaceable with instances of their subtypes'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which principle is focused on bundling the data and the methods that operate on that data together into a single unit?'],
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
            [QuizMarkdownType.TEXT, 'Abstraction'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Inheritance'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Polymorphism'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The four principles of object-oriented programming are:'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation, Abstraction, Inheritance, Polymorphism'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation, Modularity, Inheritance, Polymorphism'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction, Encapsulation, Modularity, Polymorphism'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Inheritance, Encapsulation, Abstraction, Modularity'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does hierarchical inheritance mean in object-oriented programming?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiple subclasses inherit from a single superclass.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A single subclass inherits from multiple superclasses.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Classes inherit properties and methods from unrelated classes.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Classes do not use inheritance.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a class hierarchy, what type of structure is formed by the relationships between classes?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A tree-like structure.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A linear structure.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A circular structure.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A tabular structure.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: The term "hierarchical inheritance" implies superiority or rank among subclasses'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'No, it does not imply superiority or rank among subclasses.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, it implies a ranking system among subclasses.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, it indicates which classes are more important.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, it implies a circular relationship.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Interfaces in Java can have static methods'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, interfaces can have static methods with a body.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No, interfaces cannot have static methods.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, but the methods must be abstract.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, only classes can have static methods.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Interfaces can extend other interfaces in Java'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, interfaces can extend multiple other interfaces.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No, interfaces cannot extend other interfaces.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, but they can only extend one interface.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, interfaces can only extend classes.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Can interfaces extend other interfaces in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, interfaces can extend multiple other interfaces.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No, interfaces cannot extend other interfaces.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, but they can only extend one interface.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, interfaces can only extend classes.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Can a Java class implement multiple interfaces?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, a class can implement multiple interfaces.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No, a class can only implement one interface.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, but it can only extend one class.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, a class can only implement interfaces of the same type.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A class without the'],
        [QuizMarkdownType.INLINE_CODE, 'abstract'],
        [QuizMarkdownType.TEXT, 'modifier cannot be considered part of abstraction in the object-oriented programming sense of the term.'],
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
        [QuizMarkdownType.TEXT, 'What is true about abstract methods in interfaces?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They do not have a body and must be implemented by the class that implements the interface.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They can have a body and do not need to be implemented by the class that implements the interface.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They must be private.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They can be final.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is true about abstract methods in interfaces?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They do not have a body and must be implemented by the class that implements the interface.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They can have a body and do not need to be implemented by the class that implements the interface.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They must be private.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They can be final.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which principle allows objects to be treated as instances of their parent class rather than their actual class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Polymorphism'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Inheritance'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which principle allows objects to be treated as instances of their parent class rather than their actual class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Polymorphism'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Inheritance'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which phenomenon can be seen at play?'],
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

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Dog();
        myAnimal.sound(); 
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic polymorphism'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Static polymorphism'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Static binding'],
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
        [QuizMarkdownType.TEXT, 'Consider the following code. Which of the following is true?'],
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

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Dog();
        myAnimal.sound(); 
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic polymorphism is nullified if myAnimal is typed as a Dog'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Static polymorphism is nullified if myAnimal is typed as a Dog'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Static binding is nullified if myAnimal is typed as a Dog'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'There will be a runtime error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which of the following is true?'],
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

public class Main {
    public static void main(String[] args) {
        Dog myAnimal = new Dog();
        myAnimal.sound(); 
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The method'],
            [QuizMarkdownType.INLINE_CODE, 'myAnimal.sound()'],
            [QuizMarkdownType.TEXT, 'is resolved at runtime'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The method'],
            [QuizMarkdownType.INLINE_CODE, 'myAnimal.sound()'],
            [QuizMarkdownType.TEXT, 'is resolved at compile time'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The method'],
            [QuizMarkdownType.INLINE_CODE, 'myAnimal.sound()'],
            [QuizMarkdownType.TEXT, 'will throw an error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will not compile'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why does contravariance improve type safety in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it ensures that you can add elements of the correct type to a collection.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it allows you to add elements of any type to a collection.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it allows you to add elements of a superclass to a collection.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it ensures that collections are immutable.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which wildcard allows for covariance in generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '? extends T'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '? super T'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'T extends ?'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '?'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the context of inheritance, what does covariant return type mean?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A subclass can override a method and return a type that is a subtype of the return type declared in the superclass.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A subclass can override a method and return a type that is a supertype of the return type declared in the superclass.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A method can return multiple types depending on the input parameters.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A method in a superclass can return a type that is a subtype of the return type declared in the subclass.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following method signature:'],
        [QuizMarkdownType.CODE, 'public void addElements(List<? super Integer> list)'],
        [QuizMarkdownType.TEXT, 'Which type of elements can you add to the list within the method?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add elements of type Integer or its subtypes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add any elements of type Number or its subtypes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add elements of any type.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'You cannot add any elements to the list.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code:'],
        [QuizMarkdownType.CODE, 'public static void printNumbers(List<? extends Number> list) {\n  for (Number number : list) {\n    System.out.println(number);\n  }\n}'],
        [QuizMarkdownType.TEXT, 'What types of lists can be passed to the printNumbers method?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists of any subclass of Number (e.g., List<Integer>, List<Double>).'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only List<Number>.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists of any type.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only List<Object>.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following method signature:'],
        [QuizMarkdownType.CODE, 'public void processElements(List<? extends Number> list)'],
        [QuizMarkdownType.TEXT, 'Which type of elements can you add to the list within the method?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'You cannot add any elements to the list.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add any elements of type Number or its subtypes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add elements of any type.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add elements of the type specified by the wildcard.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which line of code is invalid?'],
        [QuizMarkdownType.CODE, `List<? super Integer> foo3 = new ArrayList<Integer>();
List<? super Integer> foo3 = new ArrayList<Number>();
List<? super Integer> foo3 = new ArrayList<Object>();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The first line'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The second line'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The third line'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None are invalid'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What can be said generally and accurately about the following line of code?'],
        [QuizMarkdownType.CODE, 'List<? super Integer> integers = new ArrayList<Number>();'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It uses the concept of generics with a wildcard to create a list that can hold elements of type Integer or any of its supertypes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It uses the concept of covariance with a wildcard to create a list that can hold elements of type Integer or any of its supertypes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It uses the concept of contravariance with a wildcard to create a list that can hold elements of type Integer or any of its subtypes.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add elements of the type specified by the wildcard.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. What change will make it compile and run?'],
        [QuizMarkdownType.CODE, `import java.util.ArrayList;
import java.util.List;

class Bird {}
class Parrot extends Bird {}
class Parakeet extends Bird {}

public class BirdHouse {

    /* There is a problem here */
    public static List<Bird> getBirds(boolean parrots) {
    /* There is a problem here */

        if (parrots) {
            return new ArrayList<Parrot>();
        } else {
            return new ArrayList<Parakeet>();
        }
    }

    public static void main(String[] args) {
        List<Parrot> parrots = new ArrayList<>();
        List<Parakeet> parakeets = new ArrayList<>();

        getBirds(true);
        getBirds(false);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Redefining the'],
            [QuizMarkdownType.INLINE_CODE, 'getAnimals()'],
            [QuizMarkdownType.TEXT, 'return type as'],
            [QuizMarkdownType.INLINE_CODE, 'List<? extends Bird>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Redefining the'],
            [QuizMarkdownType.INLINE_CODE, 'getAnimals()'],
            [QuizMarkdownType.TEXT, 'return type as'],
            [QuizMarkdownType.INLINE_CODE, 'List<? super Bird>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Redefining'],
            [QuizMarkdownType.INLINE_CODE, 'getAnimals()'],
            [QuizMarkdownType.TEXT, 'as a'],
            [QuizMarkdownType.INLINE_CODE, 'non-static'],
            [QuizMarkdownType.TEXT, 'method'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Redefining the'],
            [QuizMarkdownType.INLINE_CODE, 'getAnimals()'],
            [QuizMarkdownType.TEXT, 'return type as'],
            [QuizMarkdownType.INLINE_CODE, 'List<Optional<Bird>>'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. What does it represent?'],
        [QuizMarkdownType.CODE, `class Animal {}
class Cat extends Animal {}
class Dog extends Animal {}

public class Zoo {
    public static List<? extends Animal> getAnimals(boolean cats) {
        if (cats) {
            return new ArrayList<Cat>();
        } else {
            return new ArrayList<Dog>();
        }
    }

    public static void main(String[] args) {
        List<Cat> cats = new ArrayList<>();
        List<Dog> dogs = new ArrayList<>();
        
        getAnimals(true); // Valid
        getAnimals(); // Valid
    }
}
`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Runtime binding and hierarchical inheritance.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Interface segregation.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Runtime binding.'],
          ],
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'Hierarchical inheritance.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. What does it represent?'],
        [QuizMarkdownType.CODE, `class Vehicle {
    void start() {
        System.out.println("Vehicle starts.");
    }
}

class Car extends Vehicle {
    void drive() {
        System.out.println("Car drives.");
    }
}

class Bike extends Vehicle {
    void ride() {
        System.out.println("Bike rides.");
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Hierarchical inheritance.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Interface segregation.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Runtime binding.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which wildcard allows for contravariance in generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '? super T'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '? extends T'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '?'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'T super ?'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a covariant return type in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A method in a subclass can return a type that is a subtype of the return type declared in the superclass.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A method in a superclass can return a type that is a subtype of the return type declared in the subclass.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A method can return multiple types depending on the input parameters.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A method can return a generic type.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which is true of the following code?'],
        [QuizMarkdownType.CODE, 'Integer[] intArray = {1, 2, 3};\nNumber[] numArray = intArray;'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numArray'],
            [QuizMarkdownType.TEXT, 'is a reference that actually points to an'],
            [QuizMarkdownType.INLINE_CODE, 'Integer'],
            [QuizMarkdownType.TEXT, 'array.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numArray'],
            [QuizMarkdownType.TEXT, 'casts copied values of'],
            [QuizMarkdownType.INLINE_CODE, 'intArray'],
            [QuizMarkdownType.TEXT, 'and creates an array where each value is a'],
            [QuizMarkdownType.INLINE_CODE, 'Number'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw a ClassCastException.'],
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
        [QuizMarkdownType.TEXT, 'Consider the following code. What will happen when it is executed?'],
        [QuizMarkdownType.CODE, 'Integer[] intArray = {1, 2, 3};\nNumber[] numArray = intArray;\nnumArray[0] = 3.14; // What happens here?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw an ArrayStoreException.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will compile and run without any exceptions.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will compile but throw a ClassCastException.'],
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
        [QuizMarkdownType.TEXT, 'What feature of Java is prominently displayed below?'],
        [QuizMarkdownType.CODE, `class Animal {}
class Cat extends Animal {}
class Dog extends Animal {}

public class Zoo {
    public static void feedAnimals(List<? extends Animal> animals) {
        for (Animal animal : animals) {
            System.out.println("nom nom");
        }
    }

    public static void main(String[] args) {
        List<Cat> cats = new ArrayList<>();
        List<Dog> dogs = new ArrayList<>();
        
        feedAnimals(cats);
        feedAnimals(dogs);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Dependency inversion'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Type conversion'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Covariance and contravariance are best described as ______ of Java.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Features'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Laws'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Phenomena'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Side effects'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a method overload, what can the Java feature "covariance" help you accomplish?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstractly describe the type of object that can be passed into a method overload.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Type the object passed into a method overload as the superclass of one of its subclasses.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Cast the type of the object passed in as the superclass of the subclass'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Define the object passed into the overload as a class that extends an interface'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate the following code. Will it compile?'],
        [QuizMarkdownType.CODE, 'List<Number> numberList = new ArrayList<Integer>(); // What happens here?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'No, it will not compile by virtue of a misunderstanding of covariance.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, it will compile by virtue of implementing covariance.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will compile but throw a runtime exception.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will compile with a warning.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code involving generics:'],
        [QuizMarkdownType.CODE, 'List<Number> numberList = new ArrayList<Integer>(); // What happens here?'],
        [QuizMarkdownType.TEXT, 'Will this code compile?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'No, it will not compile by virtue of misunderstanding covariance.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, it will compile by virtue of implementing covariance.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will compile but throw a runtime exception.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will compile with a warning.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        // a subtype is trying to be typed for an instantiation of its superclass
        [QuizMarkdownType.TEXT, 'Generalize the issue with the following code:'],
        [QuizMarkdownType.CODE, 'Integer[] numbers = new Number[10];'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiple answers are correct.'],
          ],
          order: 4,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers'],
            [QuizMarkdownType.TEXT, 'is typed as an'],
            [QuizMarkdownType.INLINE_CODE, 'Integer'],
            [QuizMarkdownType.TEXT, 'array, but the instantiated object is an array of the subclass of'],
            [QuizMarkdownType.INLINE_CODE, 'Number'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers'],
            [QuizMarkdownType.TEXT, 'is typed as an'],
            [QuizMarkdownType.INLINE_CODE, 'Integer'],
            [QuizMarkdownType.TEXT, 'array, not as a'],
            [QuizMarkdownType.INLINE_CODE, 'Number'],
            [QuizMarkdownType.TEXT, 'array.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers'],
            [QuizMarkdownType.TEXT, 'is typed as an'],
            [QuizMarkdownType.INLINE_CODE, 'Integer'],
            [QuizMarkdownType.TEXT, 'array, and it is a typing violation to assign a superclass'],
            [QuizMarkdownType.INLINE_CODE, 'Number'],
            [QuizMarkdownType.TEXT, 'array to that reference.'],
          ],
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'numbers'],
            [QuizMarkdownType.TEXT, 'is typed as an'],
            [QuizMarkdownType.INLINE_CODE, 'Integer'],
            [QuizMarkdownType.TEXT, 'array, but the instantiated object is an array of the superclass of'],
            [QuizMarkdownType.INLINE_CODE, 'Integer'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        // a subtype is trying to be typed for an instantiation of its superclass
        [QuizMarkdownType.TEXT, 'The displayed code will not error. By virtue of what?'],
        [QuizMarkdownType.CODE, `int[] ints = {0, 3, 4};
Integer key = ints[1]; // no type error`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Autoboxing'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic polymorphism'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Static polymorphism'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        // a subtype is trying to be typed for an instantiation of its superclass
        [QuizMarkdownType.TEXT, 'Which of the following is not a valid display of covariance?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'Integer[] numbers = new Number[10];'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'Number[] numbers = new Integer[10];'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, arrays are covariant. This means you can assign an array of a ______ to an array reference of a _________? For example,'],
        [QuizMarkdownType.CODE, 'Number[] numbers = new Integer[10];'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'subtype, supertype'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'supertype, subtype'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do covariance and contravariance improve type safety in Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By ensuring that only compatible types are assigned, preventing runtime type errors.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By allowing any type to be assigned, increasing flexibility.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By ensuring that only unrelated types are assigned, promoting code reusability.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By allowing type conversions at runtime, improving performance.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following method signatures demonstrates covariance in Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'public void processElements(List<? extends Number> list)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'public void processElements(List<? super Integer> list)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'public void processElements(List<Number> list)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'public void processElements(List<?> list)'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Arrays are covariant in Java.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, arrays are covariant.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No, arrays are invariant.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, arrays are contravariant.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, arrays are not type-safe.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. What does it illustrate?'],
        [QuizMarkdownType.CODE, `public void processElements(List<? extends Number> list) {
    for (Number number : list) {
        System.out.println(number);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Type Safety: Ensures that operations within the method are type-safe and consistent with the expected base type (Number).'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation: Ensures that operations within the method are protected through access restriction.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Method overloading: The function guarantees successful runtime by making the type optional.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Type Safety: Ensures that operations within the method are of the type Number only.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. What does it illustrate?'],
        [QuizMarkdownType.CODE, 'List<? super Integer> integers = new ArrayList<Number>();'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Erroneous code'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Type overloading'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. What does it illustrate?'],
        [QuizMarkdownType.CODE, 'List<? extends Number> numbers = new ArrayList<Integer>();'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Erroneous code'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Type overloading'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main purpose of using contravariance in Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept a type and its supertypes, enabling flexibility in method calls.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept only the exact type specified, ensuring strict type safety.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept unrelated types, increasing the method’s versatility.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept a type and its subtypes, enabling flexibility in method calls.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which wildcard is used for contravariance in Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '? super T'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '? extends T'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'T super ?'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '?'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which wildcard is used for covariance in Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '? extends T'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '? super T'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'T extends ?'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '?'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is contravariance in the context of Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance allows a method to accept a type and its supertypes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance allows a method to accept a type and its subtypes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance allows a method to accept only the exact type specified.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance allows a method to accept unrelated types.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is covariance in the context of Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance allows a method to accept a type and its subtypes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance allows a method to accept a type and its supertypes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance allows a method to accept only the exact type specified.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance allows a method to accept unrelated types.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main purpose of using covariance in Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept a type and its subtypes, enabling flexibility in method calls.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept only the exact type specified, ensuring strict type safety.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept unrelated types, increasing the method’s versatility.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept a type and its supertypes, enabling flexibility in method calls.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the context of method overriding, what does it mean for a return type to be covariant?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The return type of the overriding method is allowed to be a subclass of the return type declared in the overridden method.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The return type of the overriding method must be the exact same type as the return type declared in the overridden method.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The return type of the overriding method must be a superclass of the return type declared in the overridden method.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The return type of the overriding method can be any type.'],
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
    List<? super Cat> animals = new ArrayList<>();
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
        [QuizMarkdownType.TEXT, 'Which statement is true about heap memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects in the heap memory can be accessed from anywhere in the application where there is a reference to them.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects in the heap memory can only be accessed from the thread that instantiated them.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Objects are stored in the heap memory along with references to them upon instantiation.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The heap memory is responsible for handling thread function calls and object references while stacks store instantiations.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generally speaking, the purpose of covariant return types in Java is'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a subclass to return a more specific type than the one declared by the superclass method.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a subclass to return a more generic type than the one declared by the superclass method.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To prevent subclasses from overriding methods.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure all methods return the same type.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the code below. Which dynamic is at play?'],
        [QuizMarkdownType.CODE, `class NumberProvider {
    public Number getNumber() {
        return 42; // Returning an Integer, but as a Number
    }
}

class IntegerProvider extends NumberProvider {
    @Override
    public Integer getNumber() {
        return 42; // Returning an Integer directly
    }
}

public class Demo {
    public static void main(String[] args) {
        NumberProvider numberProvider = new NumberProvider();
        Number number = numberProvider.getNumber();

        IntegerProvider integerProvider = new IntegerProvider();
        Integer integer = integerProvider.getNumber();
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariant return types.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariant return types.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Return types determined at compilation.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above.'],
          ],
          order: '3',
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the code below. Which dynamic is at play?'],
        [QuizMarkdownType.CODE, `class NumberProvider {
    public Number getNumber() {
        return 42;
    }
    
    public Number getNumber(int value) {
        return value; 
    }
    
    public Number getNumber(double value) {
        return value;
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        NumberProvider numberProvider = new NumberProvider();
        
        Number number1 = numberProvider.getNumber();
        
        Number number2 = numberProvider.getNumber(123);
        
        Number number3 = numberProvider.getNumber(123.45);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The functionality of '],
            [QuizMarkdownType.INLINE_CODE, 'getNumber()'],
            [QuizMarkdownType.TEXT, 'is determined at compile time (compile-time polymorphism)'],
          ],
          order: '0',
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with its supertypes.'],
          ],
          order: '1',
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'During the program runtime, it is already known by Java what the return type of'],
            [QuizMarkdownType.INLINE_CODE, 'getNumber()'],
            [QuizMarkdownType.TEXT, 'will be by virtue of method signatures'],
          ],
          order: '2',
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 3.'],
          ],
          order: '3',
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Covariance is'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with its subtype.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with its supertypes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with either its subtypes or supertypes.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above.'],
          ],
          order: '3',
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
    }, {
      question: [
        [QuizMarkdownType.TEXT, 'Can interfaces in Java have static methods?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, interfaces can have static methods with a body.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No, interfaces cannot have static methods.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, but the methods must be abstract.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, only classes can have static methods.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Contravariance is'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with its supertypes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with its subtype.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with either its subtypes or supertypes.'],
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
        [QuizMarkdownType.TEXT, 'Consider the following code. What mechanic is demonstrated by the method'],
        [QuizMarkdownType.INLINE_CODE, 'feedAnimals'],
        [QuizMarkdownType.TEXT, '?'],
        [QuizMarkdownType.CODE, `class Animal {}
class Cat extends Animal {}
class Dog extends Animal {}

public class Zoo {
    public static void feedAnimals(List<? extends Animal> animals) {
        for (Animal animal : animals) {
            // Feed each animal
        }
    }

    public static void main(String[] args) {
        List<Cat> cats = new ArrayList<>();
        List<Dog> dogs = new ArrayList<>();
        
        feedAnimals(cats); // Valid
        feedAnimals(dogs); // Valid
    }
}`],

      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance.'],
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
        [QuizMarkdownType.TEXT, 'Consider the following code. Which answer is true?'],
        [QuizMarkdownType.CODE, `List<? extends Animal> animals = new ArrayList<Cat>();
animals.add(new Cat());
Animal animal = animals.get(0);
`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will cause a compile-time error and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will be valid'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will cause a runtime error and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will be valid'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will be valid and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will cause a runtime error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will be valid and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will cause a compilation error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the most concise way to change how'],
        [QuizMarkdownType.INLINE_CODE, 'newStrings'],
        [QuizMarkdownType.TEXT, 'receives its strings in the code below?'],
        [QuizMarkdownType.CODE, `String[] strings = {"Dynamic", "typing", "vs", "Autoboxing"};
List<String> newStrings = new ArrayList<>();
for (int i = 0; i < strings.length; i++) {
    newStrings.add(strings[i]);
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'List<String> newStrings = Arrays.asList(strings);'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `for (String s : strings) {
  newStrings.add(s);
}`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'List<String> newStrings = new ArrayList<>(Arrays.asList(strings));'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'newStrings.addAll(Arrays.asList(strings));'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which answer is true?'],
        [QuizMarkdownType.CODE, `List<? super Cat> animals = new ArrayList<Animal>();
animals.add(new Cat()); 
Cat cat = animals.get(0); 
`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will be valid and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will cause a compilation error'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will cause a runtime error and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will be valid'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will cause a compile-time error and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will be valid'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will be valid and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will cause a runtime error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is true of the following code?'],
        [QuizMarkdownType.CODE, `public class Test {
    public static void main(String[] args) {
        Animal animal = new Animal();
        animal.make_sound();
        Animal dog = new Dog();
        dog.make_sound();
    }
}

class Animal {
    public void make_sound() {
        System.out.println("sound");
    }
}

class Dog extends Animal {
    public void make_sound(String str) {
        System.out.println(str);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'In the subclass '],
            [QuizMarkdownType.INLINE_CODE, 'Dog'],
            [QuizMarkdownType.TEXT, ', '],
            [QuizMarkdownType.INLINE_CODE, 'make_sound'],
            [QuizMarkdownType.TEXT, ' is overloaded and not overridden.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'In the subclass '],
            [QuizMarkdownType.INLINE_CODE, 'Dog'],
            [QuizMarkdownType.TEXT, ', '],
            [QuizMarkdownType.INLINE_CODE, 'make_sound'],
            [QuizMarkdownType.TEXT, ' is overridden and not overloaded.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The method '],
            [QuizMarkdownType.INLINE_CODE, 'make_sound'],
            [QuizMarkdownType.TEXT, ' in '],
            [QuizMarkdownType.INLINE_CODE, 'Dog'],
            [QuizMarkdownType.TEXT, ' class is a static method.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The method '],
            [QuizMarkdownType.INLINE_CODE, 'make_sound'],
            [QuizMarkdownType.TEXT, ' in '],
            [QuizMarkdownType.INLINE_CODE, 'Animal'],
            [QuizMarkdownType.TEXT, ' class is private.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where do no instances of polymorphism occur in the following code?'],
        [QuizMarkdownType.CODE, `public class Test {
    public static void main(String[] args) {
        Animal animal = new Animal();
        animal.make_sound();
        animal.make_sound("meow");

        Animal dog = new Dog();
        dog.make_sound();
        dog.make_sound("bark");

        Dog anotherDog = new Dog();
        anotherDog.make_sound();
        anotherDog.make_sound("bark");
    }
}

class Animal {
    public void make_sound() {
        System.out.println("Animal sound");
    }

    public void make_sound(String str) {
        System.out.println("Animal makes sound: " + str);
    }
}

class Dog extends Animal {
    @Override
    public void make_sound() {
        System.out.println("Dog sound");
    }

    @Override
    public void make_sound(String str) {
        System.out.println("Dog makes sound: " + str);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'anotherDog.make_sound()'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'anotherDog.make_sound("bark")'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound()'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound("meow")'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'anotherDog.make_sound()'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'anotherDog.make_sound("bark")'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound("meow")'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'dog.make_sound("bark")'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound()'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound("meow")'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where does runtime polymorphism occur in the following code?'],
        [QuizMarkdownType.CODE, `public class Test {
    public static void main(String[] args) {
        Animal animal = new Animal();
        animal.make_sound();
        animal.make_sound("meow");

        Animal dog = new Dog();
        dog.make_sound();
        dog.make_sound("bark");

        Dog anotherDog = new Dog();
        anotherDog.make_sound();
        anotherDog.make_sound("bark");
    }
}

class Animal {
    public void make_sound() {
        System.out.println("Animal sound");
    }

    public void make_sound(String str) {
        System.out.println("Animal makes sound: " + str);
    }
}

class Dog extends Animal {
    @Override
    public void make_sound() {
        System.out.println("Dog sound");
    }

    @Override
    public void make_sound(String str) {
        System.out.println("Dog makes sound: " + str);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'dog.make_sound()'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'dog.make_sound("bark")'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'dog.make_sound()'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'dog.make_sound("bark")'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'anotherDog.make_sound()'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'anotherDog.make_sound("bark")'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound("meow")'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'dog.make_sound("bark")'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound()'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound("meow")'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where does compile-time polymorphism occur in the following code?'],
        [QuizMarkdownType.CODE, `public class Test {
    public static void main(String[] args) {
        Animal animal = new Animal();
        animal.make_sound();
        animal.make_sound("meow");

        Animal dog = new Dog();
        dog.make_sound();
        dog.make_sound("bark");

        Dog anotherDog = new Dog();
        anotherDog.make_sound();
        anotherDog.make_sound("bark");
    }
}

class Animal {
    public void make_sound() {
        System.out.println("Animal sound");
    }

    public void make_sound(String str) {
        System.out.println("Animal makes sound: " + str);
    }
}

class Dog extends Animal {
    @Override
    public void make_sound() {
        System.out.println("Dog sound");
    }

    @Override
    public void make_sound(String str) {
        System.out.println("Dog makes sound: " + str);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound("meow")'],
            [QuizMarkdownType.TEXT, 'only'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound("meow")'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'dog.make_sound("bark")'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'anotherDog.make_sound("bark")'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound("meow")'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'dog.make_sound("bark")'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound()'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'animal.make_sound("meow")'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Identify the polymorphism dynamic in the code below.'],
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
            [QuizMarkdownType.TEXT, 'The anonymous class'],
            [QuizMarkdownType.INLINE_CODE, 'greeting'],
            [QuizMarkdownType.TEXT, 'is driving runtime polymorphism'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The anonymous class'],
            [QuizMarkdownType.INLINE_CODE, 'greeting'],
            [QuizMarkdownType.TEXT, 'is driving compile-time polymorphism'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither answer.'],
          ],
          order: 2,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to retrieve the first (lowest) element currently in a TreeSet?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'first()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'pollFirst()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'peekFirst()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'getFirst()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a primary characteristic of a TreeSet in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It sorts the elements in natural order or according to a custom comparator.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It maintains the insertion order of elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows for constant-time complexity for basic operations like add and remove.'],
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
        [QuizMarkdownType.TEXT, 'Which method is used to check if a HashSet contains a specific element?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'contains()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'get()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'exists()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'has()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a primary characteristic of a HashSet in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It does not allow duplicate elements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It maintains the insertion order of elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It sorts the elements in natural order.'],
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
        [QuizMarkdownType.TEXT, 'What is a primary characteristic of a LinkedHashMap in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It maintains the insertion order of elements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows for constant-time complexity for basic operations like get and put.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It sorts the keys in natural order.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It does not allow null keys.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to retrieve the first (lowest) key currently in a TreeMap?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'firstKey()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'lastKey()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'pollFirstKey()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'getFirstKey()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a primary characteristic of a TreeMap in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It maintains keys in natural order or according to a custom comparator.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows for constant-time complexity for basic operations like get and put.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It maintains the insertion order of elements.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It does not allow null keys.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary characteristic of a HashMap in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows for constant-time complexity for basic operations like get and put.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It maintains the insertion order of elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It sorts the keys in natural order.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It does not allow null keys.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary characteristic of a HashMap in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows for constant-time complexity for basic operations like get and put.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It maintains the insertion order of elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It sorts the keys in natural order.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It does not allow null keys.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Set implementation would you use if you need the elements to be stored in their natural order?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeSet'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashSet'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashSet'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'EnumSet'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Map implementation would you choose if you need to maintain natural ordering of keys?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'ConcurrentHashMap'],
          ],
        },
      ],
      correctAnswer: '0',
    }, {
      question: [
        [QuizMarkdownType.TEXT, 'What combination of data structures does LinkedHashMap use to manage memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Hash Table + Doubly Linked List'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Hash Table + Single Linked List'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Red-Black Tree + Doubly Linked List'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Red-Black Tree + Single Linked List'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which data structure is used to back the implementation of a HashSet?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Hash Table (Backed by HashMap)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Red-Black Tree'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly Linked List'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which memory management scheme is used by TreeSet in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Red-Black Tree'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Hash Table'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly Linked List'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What combination of data structures does LinkedHashSet use to manage memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Hash Table + Doubly Linked List (Backed by LinkedHashMap)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Hash Table + Single Linked List'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Red-Black Tree + Doubly Linked List'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Red-Black Tree + Single Linked List'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a primary characteristic of a HashMap in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Allows for constant-time complexity for basic operations like get and put.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Maintains the insertion order of elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorts the keys in natural order.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Does not allow null keys.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a primary characteristic of a TreeMap in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Maintains keys in natural order or according to a custom comparator.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Allows for constant-time complexity for basic operations like get and put.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Maintains the insertion order of elements.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Does not allow null keys.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a primary characteristic of a LinkedHashMap in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Maintains the insertion order of elements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Allows for constant-time complexity for basic operations like get and put.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorts the keys in natural order.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Does not allow null keys.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a primary characteristic of a HashSet in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Does not allow duplicate elements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Maintains the insertion order of elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorts the elements in natural order.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Does not allow null elements.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a primary characteristic of a TreeSet in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorts the elements in natural order or according to a custom comparator.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Maintains the insertion order of elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Allows for constant-time complexity for basic operations like add and remove.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Does not allow null elements.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a primary characteristic of a LinkedHashSet in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Maintains the insertion order of elements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorts the elements in natural order.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Allows for constant-time complexity for basic operations like add and remove.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Does not allow null elements.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which collection maintains insertion order and allows for constant-time complexity for add, remove, and contains operations?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashSet'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashSet'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeSet'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'ArrayList'],
          ],
        },
      ],
      correctAnswer: '0',
    }, {
      question: [
        [QuizMarkdownType.TEXT, 'What memory management scheme does a HashMap use in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Hash Table'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Red-Black Tree'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly Linked List'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which memory management scheme is used by TreeMap in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Red-Black Tree'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Hash Table'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly Linked List'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A red-black tree is a'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Self-Balancing Binary Tree'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Hash Table'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Unstructured Tree-Like Table'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What combination of data structures does LinkedHashMap use to manage memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Hash Table + Doubly Linked List'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Hash Table + Single Linked List'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Red-Black Tree + Doubly Linked List'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Red-Black Tree + Single Linked List'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the concept illustrated below?'],
      ],
      image: circularLinkedList,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority queue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the concept illustrated below?'],
      ],
      image: circularLinkedList,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority queue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the concept illustrated below?'],
      ],
      image: singlyLinkedList,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular linked list'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority queue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the concept illustrated below?'],
      ],
      image: doublyLinkedList,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular linked list'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority queue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the concept illustrated below?'],
      ],
      image: doubleEndedQueue,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Double-ended queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular linked list'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'FIFO'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In SQL, joins are used to combine _____ from two or more _____ based on a related ______ between them.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'rows, tables, columns'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'tables, rows, columns'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'rows, columns, tables'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'columns, rows, columns'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In SQL, an inner join could be used to find rows from two tables based on matching ______'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Columns'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Tables'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Rows'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Foreign keys'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In SQL, the most commonly used join query is the'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Inner join'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Left join'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Right join'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Full Outer Join'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In SQL, a many-to-many relationship between models should be handled by means of'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A special join table'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A special query syntax'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Right join'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Full Outer Join'],
          ],
        },
      ],
      correctAnswer: '0',
    },

  ],
} as QuizDataObject;

/*

Covariance: Allows a type to be replaced with its subtype. It is used when you only need to read from a collection, ensuring that you can safely treat elements as a more general type.
Contravariance: Allows a type to be replaced with its supertype. It is used when you only need to write to a collection, ensuring that you can safely add elements of a more specific type to a collection expecting a more general type.

*/
