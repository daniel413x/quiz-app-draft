import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Multithreading',
  slug: 'multithreading',
  category: {
    slug: 'computer-science',
  },
  questions: [{
    question: [
      [QuizMarkdownType.TEXT, 'Which mechanism allows multiple threads to coordinate execution by blocking until a condition is met?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'Mutex'],
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
          [QuizMarkdownType.INLINE_CODE, 'Condition variable'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'Barrier'],
        ],
      },
    ],
    correctAnswer: '2',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which of the following best describes a reentrant lock?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'A lock that can be acquired multiple times by the same thread without causing a deadlock'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'A lock that can only be acquired once by any thread at a given time'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'A lock that ensures a thread never waits indefinitely'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'A lock that can be released by a thread different from the one that acquired it'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which term describes a situation where a low-priority thread is continuously blocked by higher-priority threads, preventing its execution?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'Deadlock'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'Starvation'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'Livelock'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'Race condition'],
        ],
      },
    ],
    correctAnswer: '1',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which of the following is a key difference between a mutex and a semaphore?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'A mutex allows multiple threads to access a resource, while a semaphore allows only one'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'A semaphore can have multiple available resources, whereas a mutex is strictly binary'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'A mutex can be acquired by multiple threads simultaneously, while a semaphore cannot'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'A semaphore ensures mutual exclusion, while a mutex does not'],
        ],
      },
    ],
    correctAnswer: '1',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'What is the main purpose of a read-write lock in multi-threading?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'To allow multiple readers or a single writer at a time'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'To prevent a thread from acquiring the lock more than once'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'To enforce strict priority scheduling among threads'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'To provide a non-blocking alternative to traditional locks'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'What is the primary benefit of multi-threading in an operating system?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'It improves memory usage efficiency'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'It allows parallel execution of tasks'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'It reduces the need for synchronization'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'It eliminates CPU context switching'],
        ],
      },
    ],
    correctAnswer: '1',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which synchronization mechanism ensures that only one thread can access a critical section at a time?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'Semaphore'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'Mutex'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'Barrier'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'Condition variable'],
        ],
      },
    ],
    correctAnswer: '1',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'What problem can occur when multiple threads compete for access to shared resources without proper synchronization?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'Deadlock'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'Memory fragmentation'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'Cache thrashing'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'Race condition'],
        ],
      },
    ],
    correctAnswer: '3',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which statement best describes a deadlock in multi-threading?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'A situation where two or more threads wait indefinitely for resources held by each other'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'A state where all threads execute simultaneously without blocking'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'A situation where a thread gets priority over others and always executes first'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'A condition where no thread in the system can proceed with execution'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which of the following correctly describes the behavior of a spinlock?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'A lock that allows multiple threads to read but only one to write'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'A lock where a thread continuously checks a condition instead of blocking'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'A mechanism that prevents a thread from releasing a lock'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'A system-level lock managed by the OS scheduler'],
        ],
      },
    ],
    correctAnswer: '1',
  },

  ],
} as QuizDataObject;
