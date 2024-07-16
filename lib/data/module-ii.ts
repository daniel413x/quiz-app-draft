import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Module II',
  slug: 'module-ii',
  category: {
    slug: 'programming',
  },
  questions: [

  {
    question: [
      [QuizMarkdownType.TEXT, 'What is the primary purpose of the '],
      [QuizMarkdownType.INLINE_CODE, '@Bean'],
      [QuizMarkdownType.TEXT, ' annotation in Spring?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'To indicate that a method produces a bean to be managed by the Spring container'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'To indicate that a class should be a Spring-managed component'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'To define a repository interface'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'To configure transaction management'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which lifecycle method can be defined in a bean annotated with '],
      [QuizMarkdownType.INLINE_CODE, '@Bean'],
      [QuizMarkdownType.TEXT, '?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'initMethod'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'startMethod'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'beginMethod'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'setupMethod'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'In Spring, how do you declare a bean with a custom name using the '],
      [QuizMarkdownType.INLINE_CODE, '@Bean'],
      [QuizMarkdownType.TEXT, ' annotation?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'Specify the name attribute in the '],
          [QuizMarkdownType.INLINE_CODE, '@Bean'],
          [QuizMarkdownType.TEXT, ' annotation'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'Declare the name in the application properties'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'Use the '],
          [QuizMarkdownType.INLINE_CODE, '@BeanName'],
          [QuizMarkdownType.TEXT, ' annotation'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'Assign the name in the Spring configuration XML'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'What scope is assigned to a bean by default when using the '],
      [QuizMarkdownType.INLINE_CODE, '@Bean'],
      [QuizMarkdownType.TEXT, ' annotation?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'Singleton'],
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
          [QuizMarkdownType.TEXT, 'Request'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'Session'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which of the following is true about beans defined using the '],
      [QuizMarkdownType.INLINE_CODE, '@Bean'],
      [QuizMarkdownType.TEXT, ' annotation in Spring?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'They can be singleton or prototype scoped'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'They must be prototype scoped'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'They cannot be singleton scoped'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'They must be defined in XML configuration files'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which method in the '],
      [QuizMarkdownType.INLINE_CODE, 'JpaRepository'],
      [QuizMarkdownType.TEXT, ' interface is used to retrieve all entities?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'findAll'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'getAll'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'retrieveAll'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'fetchAll'],
        ],
      },
    ],
    correctAnswer: '0',
  },{
    question: [
      [QuizMarkdownType.TEXT, 'Which annotation is used to declare a class as an entity in JPA?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Entity'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Table'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Column'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@MappedSuperclass'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'What is the purpose of the '],
      [QuizMarkdownType.INLINE_CODE, 'CrudRepository'],
      [QuizMarkdownType.TEXT, ' interface in Spring Data JPA?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'To provide CRUD operations for the entity class'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'To provide caching operations'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'To enable JMS support'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'To manage transactions'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'In Spring Data JPA, which method is used to delete an entity?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'delete'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'remove'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'deleteById'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.INLINE_CODE, 'deleteEntity'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which annotation in Spring Boot is used to enable scheduling support?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@EnableScheduling'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@EnableAsync'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Scheduled'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Async'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'What is the default fetch type for a '],
      [QuizMarkdownType.INLINE_CODE, '@ManyToOne'],
      [QuizMarkdownType.TEXT, ' association in JPA?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'EAGER'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'LAZY'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'DEFAULT'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'ON_DEMAND'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'In JPA, which annotation is used to specify the primary key of an entity?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Id'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@PrimaryKey'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@GeneratedValue'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Key'],
        ],
      },
    ],
    correctAnswer: '0',
  },{
    question: [
      [QuizMarkdownType.TEXT, 'Which of the following annotations is used in Spring Data JPA to create a repository interface?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Repository'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Entity'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Table'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@RepositoryDefinition'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'In Spring, which annotation is used to define a class as a Spring bean?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Bean'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Autowired'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Component'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Service'],
        ],
      },
    ],
    correctAnswer: '2',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'What is the primary purpose of the '],
      [QuizMarkdownType.INLINE_CODE, '@SpringBootApplication'],
      [QuizMarkdownType.TEXT, ' annotation in a Spring Boot application?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'To enable component scanning, auto-configuration, and define a base package for configuration'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'To enable JPA repositories'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'To manage transactions'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'To enable Aspect-Oriented Programming (AOP)'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'A definition of methods without implementation, or method body, is called a(n) __________.'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'interface'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'superclass'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'static block'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'abstract class'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which of the following is not a variable scope in Java?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'Block'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'Instance'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'Global'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'Class'],
        ],
      },
    ],
    correctAnswer: '2',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'In Java, exceptions thrown at runtime are objects on the Heap.'],
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
      [QuizMarkdownType.TEXT, 'Which of the following methods asks a thread to release the lock of the current object?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'interrupt()'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'sleep()'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'wait()'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'join()'],
        ],
      },
    ],
    correctAnswer: '2',
  },

  {
    question: [
      [QuizMarkdownType.TEXT, 'What is represented by the following code snippet?'],
      [QuizMarkdownType.CODE, `
class Rectangle {
  
  double calculateArea(double length) {
      return length * length;
  }
  
  double calculateArea(double length, double width) {
      return length * width;
  }
}
      `],
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
          [QuizMarkdownType.TEXT, 'Encapsulation'],
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
          [QuizMarkdownType.TEXT, 'Abstraction'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'The lines'],
      [QuizMarkdownType.INLINE_CODE, 'public static void main(String[] args)'],
      [QuizMarkdownType.TEXT, 'and'],
      [QuizMarkdownType.INLINE_CODE, 'static public void main(String[] args)'],
      [QuizMarkdownType.TEXT, 'are both valid.'],
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
      [QuizMarkdownType.TEXT, 'Which are valid ways to create a thread in Java?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'class A implements Thread'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'class A extends Thread'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'class A implements Runnable'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'Answers 2 and 3'],
        ],
      },
    ],
    correctAnswer: '3',
  },

  {
    question: [
      [QuizMarkdownType.TEXT, 'What is the outcome of this code snippet?'],
      [QuizMarkdownType.CODE, `
int a = 5;
int b = a++;
System.out.println(a + b);
      `],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, '13'],
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
          [QuizMarkdownType.TEXT, '11'],
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
      [QuizMarkdownType.TEXT, 'A variable declared inside of a method is a(n) __________.'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'static variable'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'local variable'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'non-static variable'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'instance variable'],
        ],
      },
    ],
    correctAnswer: '1',
  },
  
  {
    question: [
      [QuizMarkdownType.TEXT, 'What is Inversion of Control (IoC) in the context of Spring?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'Control of object creation and management is transferred from the application code to Spring'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'A mechanism to invert the order of method execution by using annotation dependency injection'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'A technique to control access to resources and promote encapsulation in Spring Boot applications'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'A process to reverse data flow in applications and optimize the runtime of Spring Boot applications'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which of the following is a key benefit of using IoC in Spring?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'Increased testability and decoupling of components'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'Improved performance of the application'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'Enhanced security of the application'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'Simplified user interface design'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'In Spring, what role does the ApplicationContext play in IoC?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'It acts as the IoC container, managing the lifecycle and configuration of application beans'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'It provides a way to handle HTTP requests and responses'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'It manages database connections'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'It handles logging and error reporting'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which annotation is commonly used to declare a Spring bean in the context of IoC?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Component'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Service'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Repository'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.INLINE_CODE, '@Controller'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'How does Dependency Injection (DI) relate to IoC in Spring?'],
    ],
    answers: [
      {
        id: '0',
        answer: [
          [QuizMarkdownType.TEXT, 'DI is a pattern that implements IoC, allowing the Spring container to inject dependencies into beans'],
        ],
      },
      {
        id: '1',
        answer: [
          [QuizMarkdownType.TEXT, 'DI is an alternative to IoC'],
        ],
      },
      {
        id: '2',
        answer: [
          [QuizMarkdownType.TEXT, 'DI is unrelated to IoC and serves a different purpose'],
        ],
      },
      {
        id: '3',
        answer: [
          [QuizMarkdownType.TEXT, 'DI is a configuration mechanism for IoC containers'],
        ],
      },
    ],
    correctAnswer: '0',
  },
  
  
  
  
  
  
  
  
  
    
  ],
} as QuizDataObject;
