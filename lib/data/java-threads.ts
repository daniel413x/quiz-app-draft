import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Java Threads',
  slug: 'java-threads',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Java class provides a higher-level replacement for'],
        [QuizMarkdownType.INLINE_CODE, 'Thread'],
        [QuizMarkdownType.TEXT, 'by managing a pool of worker threads?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ExecutorService'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ThreadGroup'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'CompletableFuture'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ScheduledThreadPoolExecutor'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements about Java multithreading is true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Every Java application starts with multiple threads by default'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The main thread is the first thread that starts in a Java application'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Threads in Java can only be created by extending the'],
            [QuizMarkdownType.INLINE_CODE, 'Thread'],
            [QuizMarkdownType.TEXT, 'class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A thread cannot be paused once it starts execution'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method allows a thread to voluntarily give up CPU execution time?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yield()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'wait()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'notify()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'sleep()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of the'],
        [QuizMarkdownType.INLINE_CODE, 'volatile'],
        [QuizMarkdownType.TEXT, 'keyword in Java multithreading?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure a variable is only accessed by one thread at a time'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To prevent compiler optimizations that could reorder read and write operations'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To lock a variable and prevent modification'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To create immutable variables'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to safely notify waiting threads that they can proceed?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'notify()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'interrupt()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yield()'],
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
      question: [
        [QuizMarkdownType.TEXT, 'Which method in Java can be used to check if a thread is currently running?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'isAlive()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'isRunning()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'isStarted()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'isExecuting()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Java class provides a higher-level alternative to creating threads manually using'],
        [QuizMarkdownType.INLINE_CODE, 'Thread'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.INLINE_CODE, 'Runnable'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ExecutorService'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ThreadManager'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ThreadPool'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'TaskRunner'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will happen if a thread that is in a waiting state is not notified?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will remain in a waiting state indefinitely'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will eventually resume execution automatically'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw an'],
            [QuizMarkdownType.INLINE_CODE, 'InterruptedException'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will be forcibly terminated by the JVM'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which synchronization mechanism allows multiple threads to read a resource but ensures exclusive access for a writer?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ReentrantLock'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Semaphore'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ReadWriteLock'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'AtomicLock'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the'],
        [QuizMarkdownType.INLINE_CODE, 'yield()'],
        [QuizMarkdownType.TEXT, 'method in Java multithreading?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It terminates the current thread'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It releases the CPU time slice voluntarily for other threads of the same priority'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It puts the current thread into a waiting state'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It forces the thread to sleep for a fixed duration'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which interface must a class implement to create a thread in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Runnable'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Threadable'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Callable'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Executor'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to start the execution of a new thread in Java?'],
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
            [QuizMarkdownType.INLINE_CODE, 'execute()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'begin()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following correctly describes the behavior of the'],
        [QuizMarkdownType.INLINE_CODE, 'sleep()'],
        [QuizMarkdownType.TEXT, 'method in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Pauses the current thread without releasing the lock it holds'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Pauses the current thread and releases the lock it holds'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Terminates the thread execution permanently'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Suspends all threads in the Java application'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens if a thread calls'],
        [QuizMarkdownType.INLINE_CODE, 'join()'],
        [QuizMarkdownType.TEXT, 'on another thread?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The calling thread waits for the joined thread to complete execution'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The joined thread is forcibly stopped'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both threads run in parallel without waiting'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A new thread is created and executed immediately'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Java keyword is used to prevent multiple threads from executing a method simultaneously?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'volatile'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'synchronized'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'transient'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'final'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of'],
        [QuizMarkdownType.INLINE_CODE, 'ThreadLocal'],
        [QuizMarkdownType.TEXT, 'in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To share data between multiple threads efficiently'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To store thread-specific data that is isolated from other threads'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To manage thread synchronization automatically'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To limit the number of active threads in a pool'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to retrieve the value stored in a'],
        [QuizMarkdownType.INLINE_CODE, 'ThreadLocal'],
        [QuizMarkdownType.TEXT, 'variable?'],
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
            [QuizMarkdownType.INLINE_CODE, 'retrieve()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'fetch()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'access()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens when a thread terminates with a'],
        [QuizMarkdownType.INLINE_CODE, 'ThreadLocal'],
        [QuizMarkdownType.TEXT, 'variable?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The ThreadLocal variable remains accessible to other threads'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The ThreadLocal variable is automatically garbage collected'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The ThreadLocal variable is reset to its default value'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The thread’s value remains in memory indefinitely'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method should be called to prevent memory leaks when using'],
        [QuizMarkdownType.INLINE_CODE, 'ThreadLocal'],
        [QuizMarkdownType.TEXT, '?'],
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
            [QuizMarkdownType.INLINE_CODE, 'clear()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'destroy()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'invalidate()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which scenario is a typical use case for'],
        [QuizMarkdownType.INLINE_CODE, 'ThreadLocal'],
        [QuizMarkdownType.TEXT, 'in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Sharing a database connection across multiple threads'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Storing user-specific data in a web application without synchronization'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Enforcing thread safety on a shared counter'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Handling inter-process communication'],
          ],
        },
      ],
      correctAnswer: '1',
    },
  ],
} as QuizDataObject;
