/* eslint-disable linebreak-style */
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Module X',
  slug: 'module-x',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main focus of Domain-Driven Design (DDD)?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Aligning software design with business domain requirements'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creating software independent of business logic'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Focusing on infrastructure design before business needs'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Optimizing code performance over understanding business'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In DDD, what is a \'Bounded Context\'?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A boundary within which a particular domain model is applicable'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A context where the entire system architecture is designed'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A place where multiple teams collaborate on the same model'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A boundary separating user interface from domain logic'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is an \'Entity\' in Domain-Driven Design?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'An object with a unique identity that is tracked over time'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A data object without an identity'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A service layer that encapsulates domain logic'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A collection of related domain services'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Domain-Driven Design, what is an \'Aggregate Root\'?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'An entity that controls access to other entities in an aggregate'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A utility class used to encapsulate domain services'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A design pattern for structuring application layers'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A method for optimizing database transactions'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of a \'Value Object\' in Domain-Driven Design?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To represent an object defined by its attributes rather than identity'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To store complex business logic'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure database transaction isolation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To encapsulate system infrastructure concerns'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    [
      {
        question: [
          [QuizMarkdownType.TEXT, 'What is the role of a message broker like RabbitMQ in microservices architecture?'],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'To manage asynchronous communication between services'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'To store stateful information for services'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'To manage service orchestration'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'To increase service dependencies'],
            ],
          },
        ],
        correctAnswer: '0',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'Which of the following is NOT a valid exchange type in RabbitMQ?'],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'Direct'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'Fanout'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'Round Robin'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'Topic'],
            ],
          },
        ],
        correctAnswer: '2',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'What does RabbitMQ use to ensure that a message is only delivered once?'],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'Acknowledge mode'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'Message routing'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'Exchange bindings'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'Queue persistence'],
            ],
          },
        ],
        correctAnswer: '0',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'In RabbitMQ, what is a binding?'],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'A link between a queue and an exchange'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'A connection between two queues'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'A way to combine multiple exchanges'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'A mechanism for prioritizing messages'],
            ],
          },
        ],
        correctAnswer: '0',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'What is the main purpose of an exchange in RabbitMQ?'],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'To route messages to the appropriate queues'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'To store messages persistently'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'To process messages'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'To receive messages directly from producers'],
            ],
          },
        ],
        correctAnswer: '0',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'How does RabbitMQ ensure message durability?'],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'By setting the queue and message to be persistent'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'By using in-memory storage for messages'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'By writing messages directly to a log file'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'By ensuring that all messages are replicated to multiple nodes'],
            ],
          },
        ],
        correctAnswer: '0',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'What happens when a message is published to a RabbitMQ exchange but has no matching queue binding?'],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'The message is dropped'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'The message is stored temporarily'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'The message is forwarded to all queues'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'The message is re-routed'],
            ],
          },
        ],
        correctAnswer: '0',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'Which protocol is primarily used by RabbitMQ for messaging?'],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'AMQP'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'HTTP'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'SMTP'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'FTP'],
            ],
          },
        ],
        correctAnswer: '0',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'In RabbitMQ, what is a dead-letter exchange (DLX)?'],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'An exchange that receives messages that were rejected or expired'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'An exchange that processes failed messages'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'An exchange for handling messages with no route'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'An exchange that forwards failed messages to another service'],
            ],
          },
        ],
        correctAnswer: '0',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'What is the role of a queue in RabbitMQ?'],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'To store messages until a consumer retrieves them'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'To process messages sent by the producer'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'To directly deliver messages to consumers'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'To balance load between different services'],
            ],
          },
        ],
        correctAnswer: '0',
      },
    ],
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does a microservices architecture help in achieving fault tolerance?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By isolating failures to individual services'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By centralizing all failure points'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By allowing failures to cascade through the system'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By reducing communication between services'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Analyze the following table describing the communication between microservices:'],
        [QuizMarkdownType.TABLE, {
          name: 'Microservice Communication',
          data: [
            {
              _tableDataColId: '1', service: 'Order', request: 'PlaceOrder', response: 'OrderPlaced',
            },
            {
              _tableDataColId: '2', service: 'Payment', request: 'MakePayment', response: 'PaymentProcessed',
            },
            {
              _tableDataColId: '3', service: 'Inventory', request: 'UpdateStock', response: 'StockUpdated',
            },
          ],
          cols: [
            { accessorKey: 'service', header: 'Service' },
            { accessorKey: 'request', header: 'Request' },
            { accessorKey: 'response', header: 'Response' },
          ],
        }],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The Order service depends on the Payment and Inventory services.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Each service is responsible for its own database.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The Order service directly calls the Inventory service.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Microservices are communicating synchronously.'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is one of the key benefits of using microservices architecture?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Easier scaling of individual components'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Centralized deployment process'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Single point of failure'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Tightly coupled services'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a key benefit of horizontal scaling in microservices architecture?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows adding more instances of a service to handle increased load.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It increases the memory and CPU resources of existing instances.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It reduces the number of services running at any given time.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It requires tightly coupled services to function properly.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a challenge when scaling down microservices?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Ensuring that no in-progress requests are dropped.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Adding more instances to the system.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Maintaining synchronous communication.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Reducing system security when scaling down.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main advantage of auto-scaling in a microservices environment?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Automatically adjusting service capacity based on traffic demand.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Manually deploying more instances of the service.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Scaling the database to accommodate more users.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Eliminating the need for service discovery.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following can be a bottleneck when scaling up a microservices architecture?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A shared database limiting the scaling of individual services.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Adding more service instances to handle increased requests.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Distributing traffic evenly across instances.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using a stateless approach for services.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of service discovery in a microservices architecture?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To dynamically locate services for communication without hardcoded URLs.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To manage data persistence across microservices.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To enforce security policies across microservices.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To scale microservices based on traffic.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a type of service discovery method?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Client-side discovery'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Server-side monitoring'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Database sharding'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stateful services'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In client-side service discovery, where does the service registry information typically reside?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'On the client making the service call.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'In a central load balancer.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In the database layer.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'In a remote data center.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service discovery pattern offloads the responsibility of finding services to a load balancer or proxy?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Server-side discovery'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Client-side discovery'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'API Gateway pattern'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Event-driven discovery'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following tools is commonly used for service discovery in microservices architecture?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Consul'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'RabbitMQ'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Kafka'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'PostgreSQL'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following tools is commonly used for service discovery in microservices architecture?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Eureka'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'RabbitMQ'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Kafka'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'PostgreSQL'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of heartbeat requests in a service discovery system?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To regularly check and confirm the availability of service instances'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To establish initial connections between services'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To synchronize data across multiple services'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To encrypt communication between services'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What can happen if a service fails to send heartbeat requests in a service discovery system?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The service may be marked as unavailable or unhealthy'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The service will automatically scale up'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The service\'s data will be backed up'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The service\'s API endpoints will be hidden'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the role of a fallback plan in the context of a circuit breaker in microservice architecture?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To provide an alternative response or action when the circuit breaker detects a failure.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To restart the failing service automatically.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To cache requests until the service is back online.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To stop all requests from reaching the microservice until it is fixed.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens when a circuit breaker opens and a fallback plan is triggered?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The system returns a predefined response or routes the request to an alternative service.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The system retries the request immediately.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The failing service is scaled down to reduce load.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The system logs the failure and waits indefinitely for the service to recover.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which scenario is a circuit breaker most likely triggered?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A service fails a heartbeat check'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A service generates a 500 response'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The application infrastructure goes offline'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A service generates a 404 response'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Spring AMQP with RabbitMQ, which class will allow a consumer to read messages from the RabbitMQ broker?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'RabbitListener'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'RabbitTemplate'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'MessageConverter'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'DirectExchange'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a responsibility of an API gateway?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Sending heartbeat requests'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Global CORS handling'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'SSL termination'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Routing'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following frameworks is leveraged for creating API gateways?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Spring Cloud'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Eureka'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Service Bus'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'RabbitMQ'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'AMQP stands for _____'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Advanced Message Queuing Protocol'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Asynchronous Messaging Queue Protocol'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Application Messaging Queue Process'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Advanced Messaging Queue Processor'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the key characteristic of a direct exchange in RabbitMQ?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Messages are routed based on a specific routing key.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Messages are broadcast to all bound queues.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Messages are delivered to only one consumer.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Messages are routed randomly to any queue.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In RabbitMQ, which of the following best describes a fanout exchange?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Messages are broadcast to all queues bound to the exchange.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Messages are routed based on a matching routing key.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Messages are sent to one specific queue only.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Messages are routed using a priority-based algorithm.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When should a direct exchange be used in RabbitMQ?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'When messages need to be routed to a specific queue based on a routing key.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'When all queues should receive the same message.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'When messages should be routed randomly to any queue.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'When messages should be prioritized based on queue size.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the difference between direct and fanout exchanges in RabbitMQ?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Direct exchanges use routing keys to send messages to specific queues, while fanout exchanges broadcast messages to all bound queues.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Fanout exchanges use routing keys, while direct exchanges broadcast messages.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Direct exchanges route messages based on a topic, while fanout exchanges use headers.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'There is no functional difference between the two.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A direct exchange can be described as _________'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Point-to-point'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Broadcast'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Topic-based'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'One-to-many'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'A fanout exchange can be described as _________'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'One-to-many'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Broadcast'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Topic-based'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Point-to-point'],
          ],
        },
      ],
      correctAnswer: '0',
    },

  ],
} as QuizDataObject;
