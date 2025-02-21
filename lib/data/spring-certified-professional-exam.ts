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
        [QuizMarkdownType.TEXT, 'mvn package'],
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
        [QuizMarkdownType.CODE, `# RewardsApplication.java

@SpringBootApplication
@EnableConfigurationProperties(ConnectionSettings.class)
public class RewardsApplication { ... }`],
        [QuizMarkdownType.CODE, `# ConnectionSettings.java

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
        [QuizMarkdownType.TEXT, 'Which answer states a way you can explicitly disable some of Spring Boot\'s auto-configuration?'],
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
  ],
} as QuizDataObject;
