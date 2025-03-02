import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Spring Certified Professional Exam',
  slug: 'spring-certified-professional-exam',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does Spring Boot’s opinionated approach benefit developers?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It simplifies application setup by providing default configurations'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It forces a specific architecture, reducing flexibility'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It increases the amount of required boilerplate code'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It removes the need for dependency injection'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which feature of Spring Boot best represents its opinionated nature?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Auto-configuration'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Manual XML configuration'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Mandatory use of a specific database'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Forcing a microservices architecture'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which mechanism in Spring Boot allows developers to override some of the opinionated defaults?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Properties or YAML configuration'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Spring Boot prevents overriding defaults'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Hardcoding values in Java classes'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using only environment variables'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which starter dependency is an example of Spring Boot’s opinionated approach?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-web'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-core'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'javax.servlet-api'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'commons-logging'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT true of overriding Spring Boot\'s auto configuration?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dependencies\' versions cannot be changed'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Some auto configuration can be explicitly disabled'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Beans can be explicitly defined by the developer, overriding Spring Boot\'s definitions'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Settings can be overridden in'],
            [QuizMarkdownType.INLINE_CODE, 'application.properties'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to mark a class as a Spring Boot application entry point?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@SpringBootApplication'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@EnableAutoConfiguration'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@ComponentScan'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Configuration'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which property file is commonly used to configure Spring Boot applications?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'application.properties'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'config.xml'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot.yml'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'settings.json'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the'],
        [QuizMarkdownType.INLINE_CODE, '@RestController'],
        [QuizMarkdownType.TEXT, 'annotation do in a Spring Boot application?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It combines'],
            [QuizMarkdownType.INLINE_CODE, '@Controller'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, '@ResponseBody'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It enables RESTful web services'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It defines a REST API endpoint'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It marks a class as a Spring component'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which dependency must be included to use Spring Boot with an embedded Tomcat server?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-web'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-data-jpa'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-security'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-thymeleaf'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to inject dependencies in a Spring Boot application?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Autowired'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Inject'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Resource'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Component'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you expose a REST endpoint in Spring Boot?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, '@RestController\n@RequestMapping("/hello")\npublic class HelloController {\n  @GetMapping\n  public String sayHello() {\n    return "Hello!";\n  }\n}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, '@Component\n@RequestMapping("/hello")\npublic class HelloController {\n  public String sayHello() {\n    return "Hello!";\n  }\n}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, '@Service\n@RequestMapping("/hello")\npublic class HelloController {\n  public String sayHello() {\n    return "Hello!";\n  }\n}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, '@Repository\n@RequestMapping("/hello")\npublic class HelloController {\n  public String sayHello() {\n    return "Hello!";\n  }\n}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database can be used in a Spring Boot application without any configuration?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'H2'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MySQL'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'PostgreSQL'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MongoDB'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following annotations is used to enable JPA repositories in Spring Boot?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@EnableJpaRepositories'],
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
            [QuizMarkdownType.INLINE_CODE, '@Transactional'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@EnableAutoConfiguration'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to define a scheduled task in Spring Boot?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Scheduled'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Async'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@CronJob'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Task'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which starter dependency is required for using Spring Boot with a relational database and JPA?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-data-jpa'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-web'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-security'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-thymeleaf'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a feature of Spring Boot?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Unopinionated settings'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Packaging and runtime'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Auto-configuration'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Dependency management'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a feature of Spring Boot?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Unopinionated settings'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Packaging and runtime'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Auto-configuration'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Dependency management'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT an advantage of Spring Boot?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Be unopinionated out of the box and get out of the way quickly as requirements start to diverge from the defaults'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Provide a radically faster and widely accessible getting-started experience for all Spring development'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Be opinionated out of the box but get out of the way quickly as requirements start to diverge from the defaults'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Provide a range of non-functional features that are common to large classes of objects'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which build tool is most commonly used for dependency management in Spring Boot projects?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Maven'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Gradle'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Ant'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Makefile'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which section of'],
        [QuizMarkdownType.INLINE_CODE, 'pom.xml'],
        [QuizMarkdownType.TEXT, 'is used to define dependencies in a Spring Boot project?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<dependencies>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<dependencyManagement>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<plugins>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<repositories>'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Spring Boot starter dependency is required to build a RESTful web application?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-web'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-data-jpa'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-security'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-test'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the'],
        [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-parent'],
        [QuizMarkdownType.TEXT, 'dependency in a Spring Boot project?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It provides default dependency versions and configuration'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It manages database connections'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It is required for all Spring Boot applications'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It enables Spring Boot security features'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which dependency is needed to use Spring Boot with JPA and Hibernate?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-data-jpa'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-web'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-jdbc'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-security'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does Spring Boot manage dependency versions automatically in a Maven project?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By using'],
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-parent'],
            [QuizMarkdownType.TEXT, 'as the parent project'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By requiring developers to specify versions manually'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By using'],
            [QuizMarkdownType.INLINE_CODE, 'dependencyManagement'],
            [QuizMarkdownType.TEXT, 'without a parent POM'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By automatically downloading the latest versions from Maven Central'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens if a version conflict occurs in a Spring Boot project?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Spring Boot resolves it by using the version from'],
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-parent'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Maven automatically picks the latest version'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The application fails to start'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The developer must manually resolve the conflict'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which dependency must be included to use Lombok in a Spring Boot project?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'org.projectlombok:lombok'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-data-jpa'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-validation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-web'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can a developer exclude a transitive dependency in a Spring Boot project using Maven?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, '<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-web</artifactId>\n  <exclusions>\n    <exclusion>\n      <groupId>org.apache.tomcat.embed</groupId>\n      <artifactId>tomcat-embed-core</artifactId>\n    </exclusion>\n  </exclusions>\n</dependency>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, '<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-web</artifactId>\n  <scope>excluded</scope>\n</dependency>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, '<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-web</artifactId>\n  <remove>true</remove>\n</dependency>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, '<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-web</artifactId>\n  <disable>true</disable>\n</dependency>'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer accurately states the contents of a "fat" JAR?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A "fat" JAR contains all dependencies including Tomcat for the application'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A "fat" JAR contains all dependencies for the application'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A "fat" JAR contains the Tomcat server for the application'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A "fat" JAR does not contain application dependencies'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of running'],
        [QuizMarkdownType.INLINE_CODE, 'mvn package'],
        [QuizMarkdownType.TEXT, 'in your application\'s root directory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `yourapp-0.0.1-SNAPSHOT.jar
yourapp-0.0.1-SNAPSHOT.jar.original`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `
yourapp-0.0.1-SNAPSHOT.jar.original`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `yourapp-0.0.1-SNAPSHOT.jar
`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `yourapp-0.0.1-SNAPSHOT.jar
yourapp-0.0.1-SNAPSHOT.jar.fat
yourapp-0.0.1-SNAPSHOT.jar.original`],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer accurately states the contents of a "fat" JAR?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A "fat" JAR contains all dependencies including Tomcat for the application'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A "fat" JAR contains all dependencies for the application'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A "fat" JAR contains the Tomcat server for the application'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A "fat" JAR does not contain application dependencies'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Upon running '],
        [QuizMarkdownType.INLINE_CODE, 'mvn package'],
        [QuizMarkdownType.TEXT, ', one of the files generated will be'],
        [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1-SNAPSHOT.jar'],
        [QuizMarkdownType.TEXT, '. This file is also known as a __________'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '"fat" jar'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '"thin" jar'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'jar containing only your code'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'jar containing only your dependencies'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is true of the contents of the following'],
        [QuizMarkdownType.INLINE_CODE, 'pom.xml'],
        [QuizMarkdownType.TEXT, 'file?'],
        [QuizMarkdownType.CODE, `<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.2.5</version>
    <relativePath/> <!-- lookup parent from repository -->
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
</dependencies>`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-data-jpa'],
            [QuizMarkdownType.TEXT, 'will be installed in the version specified by the parent'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-data-jpa'],
            [QuizMarkdownType.TEXT, 'will be installed in its latest version'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring-boot-starter-data-jpa'],
            [QuizMarkdownType.TEXT, 'will be installed in version 3.2.5'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Not enough information to answer'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of using a Bill of Materials (BOM) in Maven dependency management?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To centrally manage dependency versions and ensure compatibility'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To automatically download the latest versions of dependencies'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To exclude transitive dependencies from the project'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To generate dependency reports for security audits'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does Spring Boot use the'],
        [QuizMarkdownType.INLINE_CODE, 'spring-boot-dependencies'],
        [QuizMarkdownType.TEXT, 'BOM to manage dependency versions?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It specifies versions for Spring Boot dependencies so they do not need to be defined explicitly'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It forces projects to use only a fixed set of dependencies'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It disables version resolution and requires manual version specification'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It upgrades all dependencies to the latest stable versions'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The "entry point" of a Spring Boot application is _____'],
        [QuizMarkdownType.INLINE_CODE, 'spring-boot-dependencies'],
        [QuizMarkdownType.TEXT, 'BOM to manage dependency versions?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The class annotated with'],
            [QuizMarkdownType.INLINE_CODE, '@SpringBootApplication'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'application.properties'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'pom.xml'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The "fat" JAR file generated from running'],
            [QuizMarkdownType.INLINE_CODE, 'mvn package'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the'],
        [QuizMarkdownType.INLINE_CODE, 'schema.sql'],
        [QuizMarkdownType.TEXT, 'file in Spring Boot?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To define the structure of the database using DDL statements'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To populate the database with initial data'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To execute complex business logic'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To configure database connection properties'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which SQL statements are typically found in a'],
        [QuizMarkdownType.INLINE_CODE, 'schema.sql'],
        [QuizMarkdownType.TEXT, 'file?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'CREATE TABLE, ALTER TABLE, DROP TABLE'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'INSERT, UPDATE, DELETE'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT, JOIN, GROUP BY'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'GRANT, REVOKE, COMMIT'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary function of the'],
        [QuizMarkdownType.INLINE_CODE, 'data.sql'],
        [QuizMarkdownType.TEXT, 'file in Spring Boot?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To insert initial data into the database'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To create database tables'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To configure database connection settings'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To execute stored procedures'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'By default, when does Spring Boot execute'],
        [QuizMarkdownType.INLINE_CODE, 'schema.sql'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'data.sql'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'At startup, only if an embedded database is used'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only when explicitly enabled in'],
            [QuizMarkdownType.INLINE_CODE, 'application.properties'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'After the first REST API call'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'At startup always'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which property enables automatic execution of'],
        [QuizMarkdownType.INLINE_CODE, 'schema.sql'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'data.sql'],
        [QuizMarkdownType.TEXT, 'for external databases like MySQL or PostgreSQL?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring.sql.init.mode=always'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring.jpa.hibernate.ddl-auto=create-drop'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring.datasource.initialize=true'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring.jpa.show-sql=true'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default behavior of Spring Boot when using an embedded database like H2?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It automatically executes'],
            [QuizMarkdownType.INLINE_CODE, 'schema.sql'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'data.sql'],
            [QuizMarkdownType.TEXT, 'at startup'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It requires explicit configuration in'],
            [QuizMarkdownType.INLINE_CODE, 'application.properties'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It ignores'],
            [QuizMarkdownType.INLINE_CODE, 'schema.sql'],
            [QuizMarkdownType.TEXT, 'by default'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It only runs'],
            [QuizMarkdownType.INLINE_CODE, 'data.sql'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which tool can be used as an alternative to'],
        [QuizMarkdownType.INLINE_CODE, 'schema.sql'],
        [QuizMarkdownType.TEXT, 'for managing database schema changes in production?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Flyway'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'JPA'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Hibernate'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'JDBC'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens if'],
        [QuizMarkdownType.INLINE_CODE, 'spring.jpa.hibernate.ddl-auto=create-drop'],
        [QuizMarkdownType.TEXT, 'is set in'],
        [QuizMarkdownType.INLINE_CODE, 'application.properties'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The database schema is created on startup and dropped on shutdown'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The database schema is only created on startup'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It prevents the execution of'],
            [QuizMarkdownType.INLINE_CODE, 'data.sql'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It executes'],
            [QuizMarkdownType.INLINE_CODE, 'schema.sql'],
            [QuizMarkdownType.TEXT, 'but ignores'],
            [QuizMarkdownType.INLINE_CODE, 'data.sql'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you specify a custom location for'],
        [QuizMarkdownType.INLINE_CODE, 'schema.sql'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'data.sql'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'spring.sql.init.schema-locations=classpath:/custom-schema.sql\nspring.sql.init.data-locations=classpath:/custom-data.sql'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'spring.datasource.initialize.path=/db-scripts/'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'spring.jpa.hibernate.ddl-auto=update'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'spring.datasource.sql.script.path=/db'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A'],
        [QuizMarkdownType.INLINE_CODE, 'CommandLineRunner'],
        [QuizMarkdownType.TEXT, 'MUST be defined in the class annotated with'],
        [QuizMarkdownType.INLINE_CODE, '@SpringBootApplication'],
        [QuizMarkdownType.TEXT, '.'],
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
        [QuizMarkdownType.TEXT, 'In a project where there are the files'],
        [QuizMarkdownType.INLINE_CODE, 'application-local.properties'],
        [QuizMarkdownType.TEXT, ','],
        [QuizMarkdownType.INLINE_CODE, 'application-cloud.properties'],
        [QuizMarkdownType.TEXT, '. and'],
        [QuizMarkdownType.INLINE_CODE, 'application.properties'],
        [QuizMarkdownType.TEXT, ', which of the following is true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'application.properties'],
            [QuizMarkdownType.TEXT, ' is always loaded'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'application-cloud.properties'],
            [QuizMarkdownType.TEXT, ' is always loaded'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'application-local.properties'],
            [QuizMarkdownType.TEXT, ' is always loaded'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The file with alphabetical precedence is loaded'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    // https://spring.academy/courses/spring-boot/lessons/spring-boot-closer-look-look
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a project where there are files as described below, which answer is NOT true?'],
        [QuizMarkdownType.CODE, `// RewardsApplication.java

@SpringBootApplication
@EnableConfigurationProperties(ConnectionSettings.class)
public class RewardsApplication { ... }`],
        [QuizMarkdownType.CODE, `// ConnectionSettings.java

@Component
@ConfigurationProperties(prefix="rewards.client")
public class ConnectionSettings { ... }`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'RewardsApplication'],
            [QuizMarkdownType.TEXT, 'will fail to properly configure itself without the presence of'],
            [QuizMarkdownType.INLINE_CODE, 'ConnectionSettings'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, '@EnableConfigurationProperties(ConnectionSettings.class)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'RewardsApplication'],
            [QuizMarkdownType.TEXT, 'annotated with'],
            [QuizMarkdownType.INLINE_CODE, '@ConfigurationPropertiesScan'],
            [QuizMarkdownType.TEXT, 'can substitute for the'],
            [QuizMarkdownType.INLINE_CODE, 'ConnectionSettings'],
            [QuizMarkdownType.TEXT, 'class (Spring Boot 2.2.0+)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@SpringBootApplication'],
            [QuizMarkdownType.TEXT, 'already provides configuration properties based on your properties file'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The file with alphabetical precedence is loaded'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer states a way you can explicitly disable data source auto-configuration in Spring Boot?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@EnableAutoConfiguration(exclude = DataSourceAutoConfiguration.class)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring.main.auto-config=false'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@EnableAutoConfiguration(disableAll = true)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@DisableSpringBoot'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is sufficient for subtituting the HTTP server Tomcat with Jetty?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
  <exclusions>
   <exclusion>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-tomcat</artifactId>
   </exclusion>
  </exclusions>
</dependency>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
  <exclusions>
   <exclusion>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-tomcat</artifactId>
   </exclusion>
  </exclusions>
</dependency>`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which is true of'],
        [QuizMarkdownType.INLINE_CODE, 'CommandLineRunner'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'CommandLineRunner'],
            [QuizMarkdownType.TEXT, 'is invoked before returning from'],
            [QuizMarkdownType.INLINE_CODE, 'SpringApplication.run()'],
            [QuizMarkdownType.TEXT, 'and after all the beans are configured'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'CommandLineRunner'],
            [QuizMarkdownType.TEXT, 'is invoked before returning from'],
            [QuizMarkdownType.INLINE_CODE, 'SpringApplication.run()'],
            [QuizMarkdownType.TEXT, 'and before all the beans are configured'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'CommandLineRunner'],
            [QuizMarkdownType.TEXT, 'is invoked after returning from'],
            [QuizMarkdownType.INLINE_CODE, 'SpringApplication.run()'],
            [QuizMarkdownType.TEXT, 'and before all the beans are configured'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'CommandLineRunner'],
            [QuizMarkdownType.TEXT, 'is invoked after returning from'],
            [QuizMarkdownType.INLINE_CODE, 'SpringApplication.run()'],
            [QuizMarkdownType.TEXT, 'and after all the beans are configured'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is TRUE of a non-Boot Spring application?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'DataSource'],
            [QuizMarkdownType.TEXT, 'beans must be explicitly defined'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Command line runners cannot be used'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'application.properties'],
            [QuizMarkdownType.TEXT, 'does not pertain to such an application'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@SpringBootApplication'],
            [QuizMarkdownType.TEXT, 'has pertinence to such an application'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is best practice when explicitly defining a'],
        [QuizMarkdownType.INLINE_CODE, 'DataSource'],
        [QuizMarkdownType.TEXT, 'bean in a Spring Boot aplication?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Explicitly disabling data source auto-configuration'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Defining a component annotated with'],
            [QuizMarkdownType.INLINE_CODE, '@ConfigurationProperties'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Removing values from'],
            [QuizMarkdownType.INLINE_CODE, 'application.properties'],
            [QuizMarkdownType.TEXT, 'pertaining to data sources'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No action needed'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If a file'],
        [QuizMarkdownType.INLINE_CODE, 'RewardsConfig.java'],
        [QuizMarkdownType.TEXT, 'is responsible for explicitly defining a data source bean, which answer accurately states how Spring Boot can incorporate this definition?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'RewardsConfig'],
            [QuizMarkdownType.TEXT, 'can be incorporated via an'],
            [QuizMarkdownType.INLINE_CODE, '@Import'],
            [QuizMarkdownType.TEXT, 'annotation in'],
            [QuizMarkdownType.INLINE_CODE, 'Main.java'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'RewardsConfig'],
            [QuizMarkdownType.TEXT, 'can be incorporated via an'],
            [QuizMarkdownType.INLINE_CODE, '@ComponentScan'],
            [QuizMarkdownType.TEXT, 'annotation in'],
            [QuizMarkdownType.INLINE_CODE, 'Main.java'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'RewardsConfig'],
            [QuizMarkdownType.TEXT, 'can be incorporated via an'],
            [QuizMarkdownType.INLINE_CODE, '@SpringBootApplication'],
            [QuizMarkdownType.TEXT, 'annotation in'],
            [QuizMarkdownType.INLINE_CODE, 'Main.java'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'RewardsConfig'],
            [QuizMarkdownType.TEXT, 'can be incorporated via an'],
            [QuizMarkdownType.INLINE_CODE, '@Configuration'],
            [QuizMarkdownType.TEXT, 'annotation in'],
            [QuizMarkdownType.INLINE_CODE, 'Main.java'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a production setting, what should be the value of'],
        [QuizMarkdownType.INLINE_CODE, 'spring.jpa.hibernate.ddl-auto'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'none'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'create-drop'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'create'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'update'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When is it necessary to use'],
        [QuizMarkdownType.INLINE_CODE, '@EntityScan'],
        [QuizMarkdownType.TEXT, 'in a Spring Boot application?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'When entity classes are located outside the default package structure'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'When entity classes use custom annotations'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'When entity classes have complex relationships'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'When using NoSQL databases like MongoDB'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which code snippet correctly uses'],
        [QuizMarkdownType.INLINE_CODE, '@EntityScan'],
        [QuizMarkdownType.TEXT, 'to scan entities in a specific package?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, '@EntityScan("com.example.models")\n@SpringBootApplication\npublic class MyApp {}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, '@ComponentScan("com.example.models")\n@SpringBootApplication\npublic class MyApp {}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, '@EntityScan(basePackage = "com.example.models")\n@Configuration\npublic class Config {}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, '@SpringBootApplication(scanEntities = "com.example.models")\npublic class MyApp {}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The'],
        [QuizMarkdownType.INLINE_CODE, '@Document'],
        [QuizMarkdownType.TEXT, 'annotation is used for _______'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Defining a NoSQL JSON document'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Defining a SQL relational object'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Defining either a SQL relational object or a NoSQL JSON document'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Defining a text file'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the following code snippet, what is the name for the part of code indicated by the comment at'],
        [QuizMarkdownType.INLINE_CODE, '// 1?'],
        [QuizMarkdownType.TEXT, '?'],
        [QuizMarkdownType.CODE, `@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    // 1
    @Query(value = "SELECT c FROM Customer WHERE c.email NOT LIKE '%@%'")
    public List<Customer> findInvalidEmails();
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'JPQL (Jakarta Persistence Query Language)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'SQL'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Java SQL'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'DDL'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the following code snippet, which answer is TRUE regarding the part of code indicated by the comment?'],
        [QuizMarkdownType.CODE, `@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    // Which answer is true of the following line?
    @Query(value = "SELECT c FROM Customer WHERE c.email NOT LIKE '%@%'")
    public List<Customer> findInvalidEmails();
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'This query is a user-customized query'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'This query is a conventional JPA query'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'This query follows the findBy JPA query naming convention'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'This query is not supported in JPA'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You must explicitly set the name of a certain property of an entity in your database tables. Which annotation do you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Column'],
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
            [QuizMarkdownType.INLINE_CODE, '@Entity'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@OneToMany'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You must explicitly set the name of an entity in your database tables. Which annotation do you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Table'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Column'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Entity'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@OneToMany'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to signify an entity class in a JPA project?'],
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
            [QuizMarkdownType.INLINE_CODE, '@Column'],
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
            [QuizMarkdownType.INLINE_CODE, '@OneToMany'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotations are included (by virtue of inheritance or otherwise) in classes annotated with'],
        [QuizMarkdownType.INLINE_CODE, '@RestController'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Component'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, '@Controller'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, '@ResponseBody'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Component'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, '@ResponseBody'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Component'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, '@Controller'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Controller'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, '@ResponseBody'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A controller class annotated with'],
        [QuizMarkdownType.INLINE_CODE, '@RestController'],
        [QuizMarkdownType.TEXT, 'must annotate each REST method with the annotation'],
        [QuizMarkdownType.INLINE_CODE, '@ResponseBody'],
        [QuizMarkdownType.TEXT, '.'],
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
        [QuizMarkdownType.TEXT, 'A controller class annotated with'],
        [QuizMarkdownType.INLINE_CODE, '@RestController'],
        [QuizMarkdownType.TEXT, 'must annotate each handler method with an annotation for a particular REST method, e.g.'],
        [QuizMarkdownType.INLINE_CODE, '@GetMapping("/accounts")'],
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
        [QuizMarkdownType.TEXT, 'A controller class annotated with'],
        [QuizMarkdownType.INLINE_CODE, '@RestController'],
        [QuizMarkdownType.TEXT, 'must annotate each handler method with an annotation for a particular REST method, e.g.'],
        [QuizMarkdownType.INLINE_CODE, '@GetMapping("/accounts")'],
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
        [QuizMarkdownType.TEXT, 'Which annotation would be used to extract a request query param from a URL containing the query params'],
        [QuizMarkdownType.INLINE_CODE, '?filter=ascending'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@RequestParam'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@RequestBody'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Valid'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@PathVariable'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation would be used to extract an ID string from a URL containing the ID'],
        [QuizMarkdownType.INLINE_CODE, '/accounts/237'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@PathVariable'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@RequestBody'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Valid'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@RequestParam'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation would be used to extract an ID string from a URL containing the ID'],
        [QuizMarkdownType.INLINE_CODE, '/accounts/237'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@PathVariable'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@RequestBody'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Valid'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@RequestParam'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary role of the'],
        [QuizMarkdownType.INLINE_CODE, 'DispatcherServlet'],
        [QuizMarkdownType.TEXT, 'in a Spring Boot application?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It acts as the front controller that routes HTTP requests to appropriate handlers'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It is responsible for managing database transactions'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It scans components and registers beans in the application context'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It handles dependency injection in Spring Boot'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which component does the'],
        [QuizMarkdownType.INLINE_CODE, 'DispatcherServlet'],
        [QuizMarkdownType.TEXT, 'interact with to process a request and return a response?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'HandlerMapping, HandlerAdapter, ViewResolver'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'DataSource, EntityManager, Hibernate'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanFactory, ApplicationContext, ComponentScan'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'ThreadPool, TaskExecutor, JobScheduler'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which default URL pattern is mapped to'],
        [QuizMarkdownType.INLINE_CODE, 'DispatcherServlet'],
        [QuizMarkdownType.TEXT, 'in a Spring Boot application?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/*'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/api/*'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/servlet/*'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/spring/*'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When deploying your Spring Boot project to a cloud environment, which of the following files would you be most likely to utilize?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.jar'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.jar.original'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.war'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.war.original'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are deploying a Spring Boot application to a traditional Java EE server. Which of the following files would you be most likely to utilize?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.war'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.jar.original'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.jar'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.war.original'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are deploying a Spring Boot application as a microservice. Which of the following files would you be most likely to utilize?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.jar'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.jar.original'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.war'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.war.original'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are deploying a Spring Boot application that must run in an external servlet container. Which of the following files would you be most likely to utilize?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.war'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.jar.original'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.jar'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.war.original'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are dockerizing a Spring Boot application. Which of the following files would you be most likely to utilize?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.jar'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.jar.original'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.war'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'yourapp-0.0.1.war.original'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which class does Spring Boot use by default to convert JSON request and response bodies?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MappingJackson2HttpMessageConverter'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'StringHttpMessageConverter'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Jaxb2RootElementHttpMessageConverter'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SimpleJsonHttpMessageConverter'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you customize the list of'],
        [QuizMarkdownType.INLINE_CODE, 'HttpMessageConverters'],
        [QuizMarkdownType.TEXT, 'in a Spring Boot application?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, '@Configuration\npublic class MyConfig {\n  @Bean\n  public WebMvcConfigurer customConverters() {\n    return new WebMvcConfigurer() {\n      @Override\n      public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {\n        converters.add(new MyCustomConverter());\n      }\n    };\n  }\n}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, '@EnableMessageConverters\npublic class MyConfig {}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, '@EnableHttpConverters\npublic class MyConfig {}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, '@HttpConverterConfig\npublic class MyConfig {}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What status code will be returned on a successful request to an endpoint whose handler is annotated with'],
        [QuizMarkdownType.INLINE_CODE, '@ResponseStatus(HttpStatus.NO_CONTENT)'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '204'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '100'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '500'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '404'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your Accounts Service receives a POST request where the user has chosen a name that already exists in a column in the accounts table. What is the appropriate status code to return?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '409'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '400'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '500'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '403'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are writing unit tests for a controller class. Which of the following tools would you use to interact directly with the controller class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MockMVC'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Mockito'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@MockBean'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Mock'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In testing, ____ is used when the Spring context is not needed.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Mock'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Mockito'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@MockBean'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MockMVC'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In testing, ____ is used when the Spring context is needed.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@MockBean'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Mockito'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Mock'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MockMVC'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are writing unit tests for a service class. Which of the following tools would you use to stub the service class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Mock'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Mockito'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@MockBean'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MockMVC'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The annotation'],
        [QuizMarkdownType.INLINE_CODE, '@DataJpaTest'],
        [QuizMarkdownType.TEXT, 'is most applicable to testing which type of component?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Repository'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Service'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Controller'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'View'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In unit testing, ______ are stubbed, but ______ are not.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'services, controllers'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'controllers, services'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'controllers, databases'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'databases, services'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer correctly returns the'],
        [QuizMarkdownType.INLINE_CODE, 'Location'],
        [QuizMarkdownType.TEXT, 'header as per the appended HTTP response?'],
        [QuizMarkdownType.CODE, `HTTP/1.1 201 Created
Date: . . .
Content-Length: 0
Location:
http://shop.io/store/orders/123/items/234`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `URI location = URI.create(String.format("http://shop.io/store/orders/%s/items/%s", 123, 234));
        return ResponseEntity.created(location).build();`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `URI location = URI.create(String.format("http://shop.io/store/orders/%s/items/%s", 123, 234));
return new ResponseEntity<>(location, HttpStatus.OK)`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `URI location = URI.create(String.format("http://shop.io/store/orders/%s/items/%s", 123, 234));
return ResponseEntity.status(201).body(location)`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `URI location = URI.create(String.format("http://shop.io/store/orders/%s/items/%s", 123, 234));
return ResponseEntity.status(200).body(location)`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following chain of arguments. These arguments are passed into which testing method?'],
        [QuizMarkdownType.CODE, `get("/accounts/{acctId}", "123456001")
.accept(MediaType.APPLICATION.JSON)
.andExpect(status().isOk())
.andExpect(content().contentType("application/json"))`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'mockMvc.perform()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'when()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'assertEquals()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'verify()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are working with the following test code. Which answer can be chained at the comment // 1 to check for the presence of a Location header?'],
        [QuizMarkdownType.CODE, `@Test
  public void createAccount() throws Exception {

    Account testAccount = new Account("1234512345", "Mary Jones");
    testAccount.setEntityId(21L);

    given(accountManager.save(testAccount))
      .willReturn(testAccount);

      mockMvc.perform(post("/accounts")
      .contentType(MediaType.APPLICATION_JSON)
      .content(objectMapper.writeValueAsString(testAccount)))
        .andExpect(status().isCreated())
         // 1
        .andExpect(header().string("Location", "http://localhost/accounts/21"));

    verify(accountManager).save(testAccount);

}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'andExpect(header().exists("Location"))'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'andExpect(header("Location").exists())'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'andExpect(header().exists())'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'andExpect(header.exists())'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to secure methods in Spring Security?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@PreAuthorize'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Secured'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@EnableSecurity'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@SecurityConfig'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which class is used to configure HTTP security in Spring Boot?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SecurityFilterChain'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'HttpSecurityConfigurer'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SpringSecurityConfig'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'WebSecurityAdapter'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you disable CSRF protection in Spring Security?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'http.csrf().disable();'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'http.disableCsrf();'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'http.csrf().enabled(false);'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'http.security().csrf(false);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to enable Spring Security in a configuration class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@EnableWebSecurity'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@EnableSecurity'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@EnableAuthentication'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@EnableGlobalSecurity'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Spring Security feature ensures that only authenticated users can access a REST API endpoint?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'http.authorizeHttpRequests()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'http.enableAuth()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'http.secureEndpoints()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'http.protect()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which authentication provider does Spring Security use by default?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'DaoAuthenticationProvider'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'OAuth2AuthenticationProvider'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'JwtAuthenticationProvider'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'LdapAuthenticationProvider'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which authentication method does Spring Security use for securing REST APIs with JWT?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Token-based authentication'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Session-based authentication'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Basic authentication'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'LDAP authentication'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary role of'],
        [QuizMarkdownType.INLINE_CODE, 'SecurityContextPersistenceFilter'],
        [QuizMarkdownType.TEXT, 'in Spring Security?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It ensures that the security context is loaded and stored across multiple requests'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It validates the user credentials during authentication'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It processes JWT tokens for authentication'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It handles password encryption and hashing'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where does'],
        [QuizMarkdownType.INLINE_CODE, 'SecurityContextPersistenceFilter'],
        [QuizMarkdownType.TEXT, 'store the security context by default?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'In the'],
            [QuizMarkdownType.INLINE_CODE, 'HttpSession'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'In a browser cookie'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In a database table'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'In a JWT token'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you disable'],
        [QuizMarkdownType.INLINE_CODE, 'SecurityContextPersistenceFilter'],
        [QuizMarkdownType.TEXT, 'in a Spring Security configuration?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'http.securityContext().disable();'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'http.disableSecurityContextPersistence();'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'http.sessionManagement().disable();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'http.remove(SecurityContextPersistenceFilter.class);'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary role of'],
        [QuizMarkdownType.INLINE_CODE, 'UsernamePasswordAuthenticationFilter'],
        [QuizMarkdownType.TEXT, 'in Spring Security?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It handles username and password authentication'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It verifies JWT tokens for authentication'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It logs out users and invalidates their session'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It restricts access to protected resources based on roles'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'By default, which HTTP endpoint does'],
        [QuizMarkdownType.INLINE_CODE, 'UsernamePasswordAuthenticationFilter'],
        [QuizMarkdownType.TEXT, 'listen for login requests?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/login'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/authenticate'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/auth'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/signin'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you configure the logout URL in Spring Security using'],
        [QuizMarkdownType.INLINE_CODE, 'LogoutFilter'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'http.logout().logoutUrl("/logout");'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'http.logout("/custom-logout");'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'http.configureLogout("/signout");'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'http.disableLogout("/logout");'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You must convert SpringSecurity exceptions into HTTP responses. Which filter do you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ExceptionTranslationFilter'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'UsernamePasswordAuthenticationFilter'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'AuthorizationFilter'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SecurityContextPersistenceFilter'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the'],
        [QuizMarkdownType.INLINE_CODE, 'SecurityFilterChain'],
        [QuizMarkdownType.TEXT, 'below. Which lines of code can be inserted at'],
        [QuizMarkdownType.INLINE_CODE, '// 1'],
        [QuizMarkdownType.TEXT, 'so that users with the roles'],
        [QuizMarkdownType.INLINE_CODE, '"USER"'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.INLINE_CODE, '"ADMIN"'],
        [QuizMarkdownType.TEXT, 'can access the paths at'],
        [QuizMarkdownType.INLINE_CODE, '/accounts/**'],
        [QuizMarkdownType.TEXT, '?'],
        [QuizMarkdownType.CODE, `@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
  http.authorizeHttpRequests((authz) ->
    .requestMatchers("/signup", "/about").permitAll()
    .requestMatchers(HttpMethod.PUT, "/accounts/edit*").hasRole("ADMIN")
    // 1

    .anyRequest().authenticated());
  return http.build();
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, '.requestMatchers("/accounts/**").hasAnyRole("USER","ADMIN")'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, '.requestMatchers("/accounts/**").hasRole("USER","ADMIN")'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `.requestMatchers("/accounts/**")
.hasRole("USER")
.hasRole("ADMIN")`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `.requestMatchers("/accounts/**")
.hasRole("ADMIN")`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the'],
        [QuizMarkdownType.INLINE_CODE, 'WebSecurityCustomizer'],
        [QuizMarkdownType.TEXT, 'below. How can the line at'],
        [QuizMarkdownType.INLINE_CODE, '// 1'],
        [QuizMarkdownType.TEXT, 'be modified so that the paths'],
        [QuizMarkdownType.INLINE_CODE, '/static1'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, '/static2'],
        [QuizMarkdownType.TEXT, 'are ignored completely by Spring Security?'],
        [QuizMarkdownType.CODE, `@Bean
public WebSecurityCustomizer webSecurityCustomizer() {
  // 1

}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'return (web) -> web.ignoring().requestMatchers("/static1", "/static2");'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'return (web) -> web.ignoring().requestMatchers("/static1", "/static2").permitAll();'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'return () -> requestMatchers("/static1", "/static2").permitAll();'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'return (web) -> web.ignoring().requestMatchers("/static1", "/static2");'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the'],
        [QuizMarkdownType.INLINE_CODE, 'SecurityFilterChain'],
        [QuizMarkdownType.TEXT, 'below. What lines can be added at'],
        [QuizMarkdownType.INLINE_CODE, '// 1'],
        [QuizMarkdownType.TEXT, 'so that a form login is used at the page'],
        [QuizMarkdownType.INLINE_CODE, '"/login"'],
        [QuizMarkdownType.TEXT, '?'],
        [QuizMarkdownType.CODE, `@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
  // 1
  http.authorizeHttpRequests((authz) -> 
    authz
      .requestMatchers("/accounts/**").hasRole("USER")
  )
  // 1

  .logout(logout ->
    logout
      .logoutSuccessUrl("/")
      .permitAll()
  );
  return http.build();
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `.formLogin(form ->
  form
    .loginPage("/login")
    .permitAll()
)`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `.formLogin(form ->
  form
    .loginPage("/login")
)`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `.formLogin(form ->
  form
    .permitAll()
)`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `.formLogin(form ->
  form("/login")
    .permitAll()
)`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the'],
        [QuizMarkdownType.INLINE_CODE, 'OrderItemService'],
        [QuizMarkdownType.TEXT, 'below. How can the comparison in the annotation'],
        [QuizMarkdownType.INLINE_CODE, '@PreAuthorize("hasRole(\'MEMBER\')  &&  " + "#order.owner.name == _________")'],
        [QuizMarkdownType.TEXT, 'at'],
        [QuizMarkdownType.INLINE_CODE, '// 1'],
        [QuizMarkdownType.TEXT, 'be completed so that a user getting an order item can only do so if the order belongs to them?'],
        [QuizMarkdownType.CODE, `import org.springframework.security.annotation.PreAuthorize;

public class OrderItemService {
  // 1
  @PreAuthorize("hasRole('MEMBER')  &&  " + "#order.owner.name == _________")
  public OrderItem getOrderItem(Order order, long orderItemId) {
    // fetch logic
  }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'principal.username'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'user.username'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'owner.username'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'springsecurity.username'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'At what layer should endpoints be protected using Spring Security?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The service layer'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The controller layer'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The data access layer'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The infrastructure layer'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Spring Security, once authentication is successful, the security context is maintained in the ________ during the processing of a request.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ThreadLocal'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Thread'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ThreadLocalRandom'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'InheritableThreadLocal'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the security configuration below. What line of code can be added at'],
        [QuizMarkdownType.INLINE_CODE, '// 1'],
        [QuizMarkdownType.TEXT, 'so that any user with the roles'],
        [QuizMarkdownType.INLINE_CODE, 'USER'],
        [QuizMarkdownType.TEXT, ','],
        [QuizMarkdownType.INLINE_CODE, 'ADMIN'],
        [QuizMarkdownType.TEXT, ', or'],
        [QuizMarkdownType.INLINE_CODE, 'SUPERADMIN'],
        [QuizMarkdownType.TEXT, 'can perform a GET request to the resource at'],
        [QuizMarkdownType.INLINE_CODE, '/accounts'],
        [QuizMarkdownType.TEXT, 'or any of its sub-resources?'],
        [QuizMarkdownType.CODE, `package config;

@Configuration
@EnableMethodSecurity
public class RestSecurityConfig {

  @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((authz) -> authz
                // 1
                
                .anyRequest().denyAll())
            .httpBasic(withDefaults())
            .csrf(CsrfConfigurer::disable);
        return http.build();
    }

  @Bean
    public InMemoryUserDetailsManager userDetailsService(PasswordEncoder passwordEncoder) {
    UserDetails user = User.withUsername("user").password(passwordEncoder.encode("user")).roles("USER").build();
    UserDetails admin = User.withUsername("admin").password(passwordEncoder.encode("admin")).roles("USER", "ADMIN").build();
    UserDetails superAdmin = User.withUsername("superadmin").password(passwordEncoder.encode("superadmin")).roles("USER", "ADMIN", "SUPERADMIN").build();

    return new InMemoryUserDetailsManager(user, admin, superAdmin);
  }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
      return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '.requestMatchers(HttpMethod.GET, "/accounts/**").hasAnyRole("USER", "ADMIN", "SUPERADMIN")'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '.requestMatchers(HttpMethod.GET, "/accounts/*").hasAnyRole()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '.requestMatchers(HttpMethod.GET, "/accounts/**").hasRole("USER").hasRole("ADMIN").hasRole("SUPERADMIN")'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '.requestMatchers(HttpMethod.GET, "/accounts").hasAnyRole("USER", "ADMIN", "SUPERADMIN")'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default base path for all Actuator endpoints in Spring Boot 2.x and 3.x?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/monitor'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/admin'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/health'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which property can be set to expose all Actuator endpoints?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'management.endpoints.web.exposure.include=*'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring.actuator.enabled=true'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'actuator.all.enabled=true'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'management.web.include=all'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Actuator endpoint provides application health information?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/health'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/metrics'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/info'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/env'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which property can be set to customize the base path for Actuator endpoints?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'management.endpoints.web.base-path=/management'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'spring.actuator.base=/admin'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'server.management.path=/status'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'endpoints.base-url=/monitor'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Spring Boot Actuator endpoint provides the following information?'],
        [QuizMarkdownType.CODE, `{
  "build": {
    "version": "5.3.23",
    "artifact": "37-actuator",
    "name": "37-actuator",
    "group": "io.spring.training.core-spring",
    "time": "2022-03-25T22:06:18.311Z",
  }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/info'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/health'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/metrics'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/beans'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Spring Boot Actuator endpoint provides the following information?'],
        [QuizMarkdownType.CODE, `{
  "status": "UP"
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/health'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/info'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/metrics'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/conditions'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Spring Boot Actuator endpoint provides the following information?'],
        [QuizMarkdownType.CODE, `{
  "names": [
    "jvm.memory.max",
    "jvm.gc.memory.promoted",
    "http.server.requests",
    "system.cpu.usage",
    "hikaricp.connections.active",
    "process.start.time",
    "reward.summary",
    ...
  ]
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/metrics'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/info'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/health'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/mappings'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For security reasons, Spring Boot Actuator exposes only one endpoint by default. Which endpoint is that?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/health'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/info'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/metrics'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/mappings'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have a set of Spring Boot Actuator endpoints whose base path often changes during the course of development. What arguments can be passed into the'],
        [QuizMarkdownType.INLINE_CODE, 'requestMatchers'],
        [QuizMarkdownType.TEXT, 'at the comments'],
        [QuizMarkdownType.INLINE_CODE, '// 1'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, '// 2'],
        [QuizMarkdownType.TEXT, 'to make the request matcher base path-agnostic?'],
        [QuizMarkdownType.CODE, `@Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
          http.authorizeHttpRequests((authz) ->
            // 1
            .requestMatchers(  ...  ).permitAll()
            // 2
            .requestMatchers(  ...  ).hasRole("ACTUATOR")
            .anyRequest().authenticated());
          return http.build();
        }`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `EndpointRequest.to(HealthEndpoint.class)
EndpointRequest.toAnyEndpoint()`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `"/actuator/health"
"/actuator/**"`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `"**/actuator/health"
"**/actuator/**"`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `EndpointRequest.to("/actuator/health")
EndpointRequest.to("/actuator/**")`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example use case for'],
        [QuizMarkdownType.INLINE_CODE, 'DistributionSummary'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Tracking the size of uploaded files'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counting the number of active sessions'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Measuring database query execution time'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Logging exceptions in real-time'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which types of statistics does a Micrometer'],
        [QuizMarkdownType.INLINE_CODE, 'Timer'],
        [QuizMarkdownType.TEXT, 'typically expose?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Count, total time, max time, and percentiles'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only the average duration'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Error rate and success rate'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Database connection pool size'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Examine the following code. Which answer is NOT true?'],
        [QuizMarkdownType.CODE, `public class OrderController {
    private Timer timer;

    public OrderController(MeterRegistry registry) {
        this.timer = registry.timer("orders.submit");
    }

    // 1
    @PostMapping("/orders")
    public Order placeOrder( ... ) {
        return timer.record(() -> { ... });
    }

    // 2
    @GetMapping("/orders")
    @Timed("orders.summary")
    public List<Order> orderSummary() { ... }

    // 3
    @PutMapping("/orders/{id}")
    public void editOrder(@PathVariable Long id) { ... }

    // 4
    @DeleteMapping("/orders/{id}")
    @Timed("orders.summary")
    public void deleteOrder(@PathVariable Long id) { ... }
}`],
        [QuizMarkdownType.TEXT, 'typically expose?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'editOrder'],
            [QuizMarkdownType.TEXT, 'will be included in timed method execution performance metrics'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'orderSummary'],
            [QuizMarkdownType.TEXT, 'will be included in timed method execution performance metrics'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'deleteOrder'],
            [QuizMarkdownType.TEXT, 'will be included in timed method execution performance metrics'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'placeOrder'],
            [QuizMarkdownType.TEXT, 'will be included in timed method execution performance metrics'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You add a build info goal to your'],
        [QuizMarkdownType.INLINE_CODE, 'pom.xml'],
        [QuizMarkdownType.TEXT, 'file as per below. In which Spring Boot Actuator endpoint can you find this information?'],
        [QuizMarkdownType.CODE, `<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <executions>
        <execution>
            <goals>
                <goal>build-info</goal>
            </goals>
        </execution>
    </executions>
</plugin>`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/info'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/health'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/env'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/metrics'],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
