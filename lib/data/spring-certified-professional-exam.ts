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
            [QuizMarkdownType.CODE, '@EntityScan("com.taxservice.models")\n@SpringBootApplication\npublic class MyApp {}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, '@ComponentScan("com.taxservice.models")\n@SpringBootApplication\npublic class MyApp {}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, '@EntityScan(basePackage = "com.taxservice.models")\n@Configuration\npublic class Config {}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, '@SpringBootApplication(scanEntities = "com.taxservice.models")\npublic class MyApp {}'],
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
    {
      question: [
        [QuizMarkdownType.TEXT, 'Assuming no changes have been made to'],
        [QuizMarkdownType.INLINE_CODE, 'application.properties'],
        [QuizMarkdownType.TEXT, ', at which endpoint can you find a list of available actuator endpoints?'],
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
            [QuizMarkdownType.INLINE_CODE, '/actuator/endpoints'],
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
            [QuizMarkdownType.INLINE_CODE, '/actuator/info'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In your application, you want to expose the actuator endpoints for'],
        [QuizMarkdownType.INLINE_CODE, 'beans'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'metrics'],
        [QuizMarkdownType.TEXT, 'only. What value can be set for the property'],
        [QuizMarkdownType.INLINE_CODE, 'management.endpoints.web.exposure.include'],
        [QuizMarkdownType.TEXT, 'to accomplish this?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'beans,metrics'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '"beans,metrics"'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '*'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/*'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In your application, you want to expose all actuator endpoints. What value can be set for the property'],
        [QuizMarkdownType.INLINE_CODE, 'management.endpoints.web.exposure.include'],
        [QuizMarkdownType.TEXT, 'to accomplish this?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '*'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '"*"'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'all'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '**'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your Spring Boot Actuator includes a metric under the'],
        [QuizMarkdownType.INLINE_CODE, '/metrics'],
        [QuizMarkdownType.TEXT, 'endpoint which has the description, "The maximum amount of memory in bytes that can be used for memory management." Assuming no changes to the actuator\'s paths, at which endpoint can this metric be found?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/metrics/jvm.memory.max'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/metrics/jvm-memory-max'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/metrics/jvm/memory/max'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '/actuator/metrics/jvm%20memory%20max'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT true of the'],
        [QuizMarkdownType.INLINE_CODE, '@Timed'],
        [QuizMarkdownType.TEXT, 'annotation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A'],
            [QuizMarkdownType.INLINE_CODE, 'MeterRegistry'],
            [QuizMarkdownType.TEXT, 'object must be injected into the controller object for'],
            [QuizMarkdownType.INLINE_CODE, '@Timed'],
            [QuizMarkdownType.TEXT, 'to function properly'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It is not necessary to inject a'],
            [QuizMarkdownType.INLINE_CODE, 'MeterRegistry'],
            [QuizMarkdownType.TEXT, 'into the controller object for'],
            [QuizMarkdownType.INLINE_CODE, '@Timed'],
            [QuizMarkdownType.TEXT, 'to function properly'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Timed'],
            [QuizMarkdownType.TEXT, 'takes a parameter'],
            [QuizMarkdownType.INLINE_CODE, 'value'],
            [QuizMarkdownType.TEXT, 'which defines the endpoint where the metric information will be found'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Timed'],
            [QuizMarkdownType.TEXT, 'takes a parameter'],
            [QuizMarkdownType.INLINE_CODE, 'extraTags'],
            [QuizMarkdownType.TEXT, 'which adds additional context to the metric collected'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are tasked with configuring Spring Boot Actuator the following way:'],
        [QuizMarkdownType.BREAK, ''],
        [QuizMarkdownType.BREAK, ''],
        [QuizMarkdownType.TEXT, '1. Create 3 groups:'],
        [QuizMarkdownType.INLINE_CODE, 'system'],
        [QuizMarkdownType.TEXT, ','],
        [QuizMarkdownType.INLINE_CODE, 'web'],
        [QuizMarkdownType.TEXT, ', and'],
        [QuizMarkdownType.INLINE_CODE, 'application'],
        [QuizMarkdownType.TEXT, 'as following:'],
        [QuizMarkdownType.BREAK, ''],
        [QuizMarkdownType.BREAK, ''],
        [QuizMarkdownType.TEXT, 'The system group includes the'],
        [QuizMarkdownType.INLINE_CODE, 'diskSpace'],
        [QuizMarkdownType.TEXT, ', and'],
        [QuizMarkdownType.INLINE_CODE, 'db'],
        [QuizMarkdownType.TEXT, 'health indicators'],
        [QuizMarkdownType.BREAK, ''],
        [QuizMarkdownType.BREAK, ''],
        [QuizMarkdownType.TEXT, '2. For'],
        [QuizMarkdownType.INLINE_CODE, 'system'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'application'],
        [QuizMarkdownType.TEXT, 'groups, configure'],
        [QuizMarkdownType.INLINE_CODE, 'show-details'],
        [QuizMarkdownType.TEXT, 'with'],
        [QuizMarkdownType.INLINE_CODE, 'always'],
        [QuizMarkdownType.BREAK, ''],
        [QuizMarkdownType.BREAK, ''],
        [QuizMarkdownType.TEXT, 'Which answer reflects the implementation as specified?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `management.endpoint.health.group.system.include=diskSpace,db
management.endpoint.health.group.system.show-details=always

management.endpoint.health.group.web.include=ping

management.endpoint.health.group.application.include=restaurantHealthCheck
management.endpoint.health.group.application.show-details=always`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `management.endpoint.health.group.system.include="diskSpace,db"
management.endpoint.health.group.system.show-details=always

management.endpoint.health.group.web.include="ping"

management.endpoint.health.group.application.include="restaurantHealthCheck"
management.endpoint.health.group.application.show-details=always`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `management.endpoint.health.group.system.include=diskSpace,db

management.endpoint.health.group.web.include=ping

management.endpoint.health.group.application.include=restaurantHealthCheck`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `actuator.health.group.system.include=diskSpace,db
actuator.health.group.system.show-details=always

actuator.health.group.web.include=ping

actuator.health.group.application.include=restaurantHealthCheck
actuator.health.group.application.show-details=always`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'AOP generally solves issues related to the _______'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Single Responsibility Principle'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Open/Closed Principle'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Liskov Substitution Principle'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Interface Segregation Principle'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which interface in Spring allows you to access the application context programmatically?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ApplicationContext'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'BeanFactory'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Environment'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ApplicationEventPublisher'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method can be used to retrieve a bean from the application context by its name?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'applicationContext.getBean("beanName")'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'applicationContext.lookup("beanName")'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'applicationContext.find("beanName")'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'applicationContext.search("beanName")'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a recommended way to access the application context in a Spring-managed bean?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Implement'],
            [QuizMarkdownType.INLINE_CODE, 'ApplicationContextAware'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Use'],
            [QuizMarkdownType.INLINE_CODE, '@Autowired ApplicationContext'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Create a static field and manually set the context'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Access the context directly via'],
            [QuizMarkdownType.INLINE_CODE, 'System.getProperty()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If you want to get a bean'],
        [QuizMarkdownType.INLINE_CODE, 'CarService'],
        [QuizMarkdownType.TEXT, 'from the application context, which method should you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'applicationContext.getBean(CarService.class)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'applicationContext.findBean(CarService.class)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'applicationContext.lookupBean(CarService.class)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'applicationContext.resolveBean(CarService.class)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens if you call'],
        [QuizMarkdownType.INLINE_CODE, 'getBean()'],
        [QuizMarkdownType.TEXT, 'with a name that does not exist in the application context?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A'],
            [QuizMarkdownType.INLINE_CODE, 'NoSuchBeanDefinitionException'],
            [QuizMarkdownType.TEXT, 'is thrown'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It returns'],
            [QuizMarkdownType.INLINE_CODE, 'null'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It creates the bean automatically'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It logs a warning and continues'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Stereotype classes are beans in Spring.'],
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
        [QuizMarkdownType.TEXT, 'Which answer best defines "bean scope" in the context of Spring?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It defines how long a bean instance is maintained and how it is shared'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It defines the order in which beans are loaded'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It defines the type of a bean (service, controller, repository)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It defines the security level of the bean'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which is the default bean scope in Spring?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'singleton'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'prototype'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'request'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'session'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the key difference between the'],
        [QuizMarkdownType.INLINE_CODE, 'singleton'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'prototype'],
        [QuizMarkdownType.TEXT, 'bean scopes?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Singleton creates one instance per Spring container, Prototype creates a new instance every time it is requested'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Both create exactly one instance per application'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Prototype creates one instance per container, Singleton creates one per request'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Prototype and Singleton behave the same in Spring Boot'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A bean of scope'],
        [QuizMarkdownType.INLINE_CODE, 'singleton'],
        [QuizMarkdownType.TEXT, 'creates __________ per spring container, while a bean of scope'],
        [QuizMarkdownType.INLINE_CODE, 'prototype'],
        [QuizMarkdownType.TEXT, 'creates __________ every time it is requested'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'one instance, a new instance'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'a new instance, one instance'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'a capped number of instances, one instance'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'one instance, a capped number of instances'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following bean scopes is only available in web-aware Spring applications?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'request'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'singleton'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'prototype'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'global'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation is used to specify a custom bean scope in Spring?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Scope'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@BeanScope'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@BeanLifecycle'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@ScopedBean'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which command runs'],
        [QuizMarkdownType.INLINE_CODE, 'mvn clean verify'],
        [QuizMarkdownType.TEXT, 'using the profile'],
        [QuizMarkdownType.INLINE_CODE, 'test'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'mvn clean verify -Dspring.profiles.active=test'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'mvn clean verify -Dspring.build.profiles.active=test'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'mvn clean verify -Dprofile.active=test'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'mvn clean verify -Dspring.profiles.build=test'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If you run a command'],
        [QuizMarkdownType.INLINE_CODE, 'mvn clean verify -Dspring.profiles.active=test'],
        [QuizMarkdownType.TEXT, ', which answer must be true for the command to execute properly?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A properties file titled'],
            [QuizMarkdownType.INLINE_CODE, 'application-test.properties'],
            [QuizMarkdownType.TEXT, 'or'],
            [QuizMarkdownType.INLINE_CODE, 'application-test.yml'],
            [QuizMarkdownType.TEXT, 'must exist'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A properties file titled'],
            [QuizMarkdownType.INLINE_CODE, 'applicationtest.properties'],
            [QuizMarkdownType.TEXT, 'or'],
            [QuizMarkdownType.INLINE_CODE, 'applicationtest.yml'],
            [QuizMarkdownType.TEXT, 'must exist'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A properties file titled'],
            [QuizMarkdownType.INLINE_CODE, 'test.properties'],
            [QuizMarkdownType.TEXT, 'or'],
            [QuizMarkdownType.INLINE_CODE, 'test.yml'],
            [QuizMarkdownType.TEXT, 'must exist'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A properties file titled'],
            [QuizMarkdownType.INLINE_CODE, 'application-test.properties'],
            [QuizMarkdownType.TEXT, 'or'],
            [QuizMarkdownType.INLINE_CODE, 'application-test.yml'],
            [QuizMarkdownType.TEXT, 'or'],
            [QuizMarkdownType.INLINE_CODE, 'app-test.properties'],
            [QuizMarkdownType.TEXT, 'or'],
            [QuizMarkdownType.INLINE_CODE, 'app-test.yml'],
            [QuizMarkdownType.TEXT, 'must exist'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a correct example of using SpEL inside a'],
        [QuizMarkdownType.INLINE_CODE, '@Value'],
        [QuizMarkdownType.TEXT, 'annotation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, '@Value("#{systemProperties[\'user.name\']}")'],
          ],
        },
        {
          id: '1',
          answer: [
            // eslint-disable-next-line no-template-curly-in-string
            [QuizMarkdownType.CODE, '@Value("${systemProperties[\'user.name\']}")'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, '@Value("#systemProperties[\'user.name\']")'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, '@Value("SpEL:user.name")'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following line of code. Which answer identifies the kind of expression passed as a parameter to the '],
        [QuizMarkdownType.INLINE_CODE, '@Value'],
        [QuizMarkdownType.TEXT, 'annotation?'],
        [QuizMarkdownType.CODE, '@Value("#{systemProperties[\'user.name\']}")'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'SpEL (Spring Expression Language)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'AspectJ Pointcut Expression'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'HQL (Hibernate Query Language)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'JPQL (Jakarta Persistence Query Language)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following line of code. Which answer identifies the kind of expression passed as a parameter to the '],
        [QuizMarkdownType.INLINE_CODE, '@Before'],
        [QuizMarkdownType.TEXT, 'annotation?'],
        [QuizMarkdownType.CODE, '@Before("execution(* accounts.web.AccountController.getAccounts(..))")'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'AspectJ Pointcut Expression'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'SpEL (Spring Expression Language)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'HQL (Hibernate Query Language)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'JPQL (Jakarta Persistence Query Language)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following line of code. Which answer identifies the kind of expression passed as a parameter to the '],
        [QuizMarkdownType.INLINE_CODE, '@PreAuthorize'],
        [QuizMarkdownType.TEXT, 'annotation?'],
        [QuizMarkdownType.CODE, '@PreAuthorize("hasRole(\'ADMIN\') && #username == principal.username")'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'SpEL (Spring Expression Language)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'AspectJ Pointcut Expression'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'HQL (Hibernate Query Language)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'JPQL (Jakarta Persistence Query Language)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a Spring Security expression, which SpEL variable refers to the currently authenticated user?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'principal'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'user'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'currentUser'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'authUser'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer does NOT feature usage of SpEL?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, '@Before("execution(* accounts.web.AccountController.getAccounts(..))")'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, '@Value("#{systemProperties[\'user.name\']}")'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, '@PreAuthorize("hasRole(\'ADMIN\') && #username == principal.username")'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `ExpressionParser parser = new SpelExpressionParser();
Expression exp = parser.parseExpression("'Hello World'");
String message = (String) exp.getValue();`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are tasked with implementing Spring Boot Actuator metrics processing across mutiple endpoints. A class annotated with ________ would be ideal for this implementation.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Aspect'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Controller'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@SpringBootApplication'],
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
        [QuizMarkdownType.TEXT, 'What is the purpose of the'],
        [QuizMarkdownType.INLINE_CODE, '@PostConstruct'],
        [QuizMarkdownType.TEXT, 'annotation in Spring?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It marks a method to be executed after the bean has been fully initialized'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It defines the default constructor for a Spring bean'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It marks a method to be called before dependency injection occurs'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It marks a method to be executed before the bean is destroyed'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When using'],
        [QuizMarkdownType.INLINE_CODE, '@PostConstruct'],
        [QuizMarkdownType.TEXT, 'in a bean, when will the annotated method be called?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'After dependency injection and before the bean is ready for use'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Immediately when the bean class is loaded'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Right before the application shuts down'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'When the bean is first accessed by another bean'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Methods marked with the ______ annotation will be executed just before the bean is removed from the container, while methods marked with the ______ annotation will be executed after dependency injection and before the bean is ready for use.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@PreDestroy'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, '@PostConstruct'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@PostConstruct'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, '@PreDestroy'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Scope("singleton")'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, '@Scope("prototype")'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Scope("prototype")'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, '@Scope("singleton")'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a Spring Boot application, which lifecycle event triggers methods annotated with'],
        [QuizMarkdownType.INLINE_CODE, '@PreDestroy'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Application context shutdown'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'After a bean is initialized'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Before dependency injection occurs'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'When a bean method throws an exception'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a possible use for the annotation'],
        [QuizMarkdownType.INLINE_CODE, '@PostContrust'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Populating a database'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Executing class pre-initialization logic'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Class properties initialization'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Closing a database connection'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a possible use for the annotation'],
        [QuizMarkdownType.INLINE_CODE, '@PostConstruct'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Initializing resources like database connections after dependency injection'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Marking a constructor to be called during bean instantiation'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Defining the default scope of the bean'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Injecting configuration properties directly into a field'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a possible use for the annotation'],
        [QuizMarkdownType.INLINE_CODE, '@PreDestroy'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Closing a database connection'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Executing class pre-initialization logic'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Class properties initialization'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Populating a database'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a possible use for the annotation'],
        [QuizMarkdownType.INLINE_CODE, '@PreDestroy'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Releasing resources before the bean is destroyed'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Specifying that the bean should only be created once per container'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Marking a method to be executed after the bean is fully initialized'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Indicating that the bean should only be created if a certain condition is true'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer best describes the correct order of key stages in the Spring bean lifecycle?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Instantiation -> Dependency Injection -> Initialization -> Destruction'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Dependency Injection -> Instantiation -> Initialization -> Destruction'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Initialization -> Instantiation -> Dependency Injection -> Destruction'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Instantiation -> Initialization -> Dependency Injection -> Destruction'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_____ could be called a lifecycle callback annotation that runs after the bean is fully initialized.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@PostConstruct'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@PreDestroy'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Bean'],
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
        [QuizMarkdownType.TEXT, '__________ works on bean definitions, __________ works on actual bean instances'],
        [QuizMarkdownType.INLINE_CODE, 'BeanFactoryPostProcessor'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'BeanPostProcessor'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'BeanFactoryPostProcessor'],
            [QuizMarkdownType.TEXT, ', '],
            [QuizMarkdownType.INLINE_CODE, 'BeanPostProcessor'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'BeanPostProcessor'],
            [QuizMarkdownType.TEXT, ', '],
            [QuizMarkdownType.INLINE_CODE, 'BeanFactoryPostProcessor'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@PreDestroy'],
            [QuizMarkdownType.TEXT, ', '],
            [QuizMarkdownType.INLINE_CODE, '@PostConstruct'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@PostConstruct'],
            [QuizMarkdownType.TEXT, ', '],
            [QuizMarkdownType.INLINE_CODE, '@PreDestroy'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to automatically wrap every service bean in a proxy to add logging after each method call. Which processor should you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanPostProcessor'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanFactoryPostProcessor'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your application must change the default scope of a specific bean from'],
        [QuizMarkdownType.INLINE_CODE, 'singleton'],
        [QuizMarkdownType.TEXT, 'to'],
        [QuizMarkdownType.INLINE_CODE, 'prototype'],
        [QuizMarkdownType.TEXT, 'before it is created. Which processor do you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanFactoryPostProcessor'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanPostProcessor'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to modify the URL property of a DataSource bean before it is instantiated, so that it always points to a test database in certain environments. Which processor do you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanFactoryPostProcessor'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanPostProcessor'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to validate that all beans implementing a custom interface have a certain property set after they are instantiated but before they are used. Which processor do you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanPostProcessor'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanFactoryPostProcessor'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your team wants to scan the bean definitions after they are loaded and remove any beans that have a deprecated annotation before they are created. Which processor do you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanFactoryPostProcessor'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanPostProcessor'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to inject a dynamically generated ID into every bean that implements a certain interface, immediately after they are instantiated. Which processor do you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanPostProcessor'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'BeanFactoryPostProcessor'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A ___________ is created when the target bean implements at least one interface'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'JDK Dynamic Proxy'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'CGLIB Proxy'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'JPA Proxy'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Reflection Proxy'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A ___________ is created when the target bean does not implement interfaces'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'CGLIB Proxy'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'JDK Dynamic Proxy'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'JPA Proxy'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Reflection Proxy'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which annotation can trigger the creation of a transactional proxy in Spring?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Transactional'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Component'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Bean'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Scope'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Spring, ________ are responsible for intercepting method calls and applying additional behavior before or after delegating to the actual method'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Proxies'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Application contexts'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Beans'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stereotypes'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a Spring AOP scenario, what term describes the additional behavior applied by a proxy?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Advice'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Injection'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Handler'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Decorator'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A ___________ is created when the target bean implements interfaces'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'JDK Dynamic Proxy'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'CGLIB Proxy'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'JPA Proxy'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Reflection Proxy'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is one key limitation of JDK Dynamic Proxies?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They only work on interfaces, not concrete classes'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They cannot apply transaction management'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They do not work with @Autowired beans'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They require manual XML configuration'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AOP advice type allows adding behavior before a method executes?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Before'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@After'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Around'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Pointcut'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which factors influence the order in which Spring creates beans in the application context?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dependency relationships between beans and the use of'],
            [QuizMarkdownType.INLINE_CODE, '@DependsOn'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The order in which beans are declared in the configuration file and the use of'],
            [QuizMarkdownType.INLINE_CODE, '@Configuration'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The size of the bean class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The alphabetical order of bean names'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Two services'],
        [QuizMarkdownType.INLINE_CODE, 'implement'],
        [QuizMarkdownType.TEXT, 'the same'],
        [QuizMarkdownType.INLINE_CODE, 'UserService'],
        [QuizMarkdownType.TEXT, 'class, causing a Spring bean injection conflict. Which annotation, when applied to one of the services, can solve this confict?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Qualifier("userServiceTwo")'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Configuration(qualified=UserServiceTwo.class)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Bean'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@ComponentScan'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are working on a banking application where every service needs to log certain actions. Which Spring feature can be used to implement this concern most efficiently?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Spring Boot Starter AOP'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Spring Boot Starter Web'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Spring Boot Starter Actuator'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Spring Boot Starter Security'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are implementing aspects for a microservice where every method in the service classes needs to log actions before and after the methods run. Which answer indicates the line(s) that can be inserted at'],
        [QuizMarkdownType.INLINE_CODE, '// 1'],
        [QuizMarkdownType.TEXT, 'to accomplish this?'],
        [QuizMarkdownType.CODE, `@Aspect
@Component
public class LoggingAspect {

    // 1
    
    public Object logBeforeAndAfter(ProceedingJoinPoint joinPoint) throws Throwable {
        System.out.println("Before method execution");
        Object result = joinPoint.proceed();
        System.out.println("After method execution");
        return result;
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, '@Around("execution(* com.taxservice.service.*.*(..))")'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `@Before("execution(* com.taxservice.service.*.*(..))")
@After("execution(* com.taxservice.service.*.*(..))")`],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, '@After("execution(* com.taxservice.service.*.*(..))")'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 or 2'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are working on software that needs to log information about service method failures should they occur. Which Spring AOP annotation can be used to implement this concern most efficiently?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@AfterThrowing'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@AfterReturning'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@After'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Around'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are working on software that needs to log information about service method that return successfully without throwing any exceptions. Which Spring AOP annotation can be used to implement this concern most efficiently?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@AfterReturning'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@AfterThrowing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@After'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Around'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT considered "advice" in Spring AOP?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Pointcut'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@AfterThrowing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Before'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Around'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Spring AOP, the primary purpose of a pointcut is _________.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To define where advice should be applied'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To execute advice logic itself'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To configure transactional boundaries'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To define custom exception handling for beans'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a valid example of AspectJ Pointcut Expression in Spring AOP?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'execution(* com.taxservice.service.*.*(..))'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'pointcut("com.taxservice.service.*.*")'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'around(com.taxservice.*)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, '@Before("com.taxservice.*")'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In AspectJ Pointcut Expression, what does the symbol'],
        [QuizMarkdownType.INLINE_CODE, '*'],
        [QuizMarkdownType.TEXT, 'represent?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Matches any method name or return type, depending on where it appears'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Matches only public methods, depending on where they appear'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Matches only methods with no arguments, depending on where they appear'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Matches classes but not methods, depending on where they appear'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In AspectJ Pointcut Expression, if you want to match all methods inside a specific package, which keyword should you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'within'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'execution'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'target'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'args'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In an application you are working on, you must use AOP features to intercept and interrupt a method during execution to perform a certain check before proceeding with the execution method. Choose the pairing of AOP features that can accomplish this.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Around'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, '@ProceedingJoinPoint'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Before'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, '@JoinPoint'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Around'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, '@JoinPoint'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '@Before'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, '@ProceedingJoinPoint'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are implementing a class'],
        [QuizMarkdownType.INLINE_CODE, 'LoggingAspect'],
        [QuizMarkdownType.TEXT, '. How can the comments?'],
        [QuizMarkdownType.INLINE_CODE, '/* 1 */'],
        [QuizMarkdownType.TEXT, ', '],
        [QuizMarkdownType.INLINE_CODE, '/* 2 */'],
        [QuizMarkdownType.TEXT, ', and'],
        [QuizMarkdownType.INLINE_CODE, '/* 3 */'],
        [QuizMarkdownType.TEXT, 'be replaced so that the aspect works properly?'],
        [QuizMarkdownType.CODE, `@Aspect
@Component
public class LoggingAspect {

    @Pointcut("execution(* com.taxservice.service.*.*(..))")
    /* 1 */

    @Before(/* 2 */)
    public void logBefore(JoinPoint joinPoint) {
      ...
    }

    @After(/* 3 */)
    public void logAfter(JoinPoint joinPoint) {
      ...
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `/* 1 */
public void serviceMethods() {}

/* 2 */
"serviceMethods()"

/* 3 */
"serviceMethods()"`],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `/* 1 */
public void pointcut() {}

/* 2 */
"serviceMethods()"

/* 2 */
"serviceMethods()""`],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `/* 1 */
public void serviceMethods() {}

/* 2 */
"execution(* serviceMethods.*.*(..))"

/* 3 */
"execution(* serviceMethods.*.*(..))"`],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `/* 1 */
public void serviceMethods() {}

/* 2 */
"execution(* com.taxservice.service.*.*(..))"

/* 3 */
"execution(* com.taxservice.service.*.*(..))"`],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Given the following definitions:',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '1. Where the action should be applied',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '2. Definitions of advice and pointcuts',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '3. An action to be applied before',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          '4. An action to be applied after',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'And the following annotations:',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'A.',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          '@Before',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'B.',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          '@Aspect',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'C.',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          '@Pointcut',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'D.',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          '@After',
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.BREAK,
        ],
        [
          QuizMarkdownType.TEXT,
          'Which of the following BEST matches the definitions and annotations?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1C 2B 3A 4D',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1C 2B 3D 4A',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1C 2D 3B 4A',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1D 2C 3B 4A',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Spring AOP, a _____ allows you to intercept a method call and determine whether it executes or does not.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ProceedingJoinPoint'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'JoinPoint'],
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
            [QuizMarkdownType.INLINE_CODE, '@ProceedingJoinPoint'],
            [QuizMarkdownType.TEXT, 'or'],
            [QuizMarkdownType.INLINE_CODE, '@JoinPoint'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Spring AOP, a method call intercepted by advice defined by the'],
        [QuizMarkdownType.INLINE_CODE, '@Around'],
        [QuizMarkdownType.TEXT, 'annotation will not proceed unless'],
        [QuizMarkdownType.INLINE_CODE, 'proceedingJoinPoint.proceed()'],
        [QuizMarkdownType.TEXT, 'is called.'],
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
        [QuizMarkdownType.TEXT, 'Which pointcut expression correctly matches a method named'],
        [QuizMarkdownType.INLINE_CODE, 'processOrder'],
        [QuizMarkdownType.TEXT, 'with a single'],
        [QuizMarkdownType.INLINE_CODE, 'String'],
        [QuizMarkdownType.TEXT, 'parameter in the'],
        [QuizMarkdownType.INLINE_CODE, 'com.example.service.OrderService'],
        [QuizMarkdownType.TEXT, 'class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'execution(void com.example.service.OrderService.processOrder(String))'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'execution(* com.example.service.OrderService.processOrder(..))'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'execution(* com.example.service.OrderService.processOrder(String, ..))'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'execution(* com.example.service.OrderService.processOrder())'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How would you define a pointcut that matches only the overloaded version of'],
        [QuizMarkdownType.INLINE_CODE, 'calculateTotal'],
        [QuizMarkdownType.TEXT, 'in'],
        [QuizMarkdownType.INLINE_CODE, 'BillingService'],
        [QuizMarkdownType.TEXT, 'that takes both'],
        [QuizMarkdownType.INLINE_CODE, 'int'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'double'],
        [QuizMarkdownType.TEXT, 'parameters?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'execution(* com.example.service.BillingService.calculateTotal(int, double))'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'execution(* com.example.service.BillingService.calculateTotal(..))'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'execution(* com.example.service.BillingService.calculateTotal(double, int))'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'execution(* com.example.service.BillingService.calculateTotal(int))'],
          ],
        },
      ],
      correctAnswer: '0',
    },

  ],
} as QuizDataObject;
