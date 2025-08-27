import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Performance Testing',
  slug: 'performance-testing',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary goal of performance testing in software development?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'To evaluate how a system behaves under workload']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'To test how easily the system can be maintained']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'To ensure the user interface is intuitive']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'To detect security flaws in the application']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of performance testing measures how many users a system can handle simultaneously?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Load testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Spike testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Soak testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Unit testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of performance testing is used to determine the system’s behavior under sudden increase in load?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Spike testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Load testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Stress testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Volume testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which metric in performance testing refers to the time taken to process a user request?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Response time']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Throughput']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Latency']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Availability']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does soak testing aim to uncover in a software system?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Performance issues over an extended duration']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Code coverage problems']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Security loopholes']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'User experience flaws']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the term '],
        [QuizMarkdownType.INLINE_CODE, 'throughput'],
        [QuizMarkdownType.TEXT, 'refer to in performance testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'The number of transactions a system can process in a given time']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'The average time taken for each request under certain loads']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'The output of thread groups simultaneously querying an endpoint']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'The delay before data begins to transfer']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Stress testing is typically used to test the system’s behavior when it is:'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Pushed beyond its operational capacity']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Operating at peak normal usage']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Used by a single user repeatedly']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Handling secure transactions only']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your test case simulates enough users as are expected during normal usage hours. This type of testing is best described as ________'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Load Testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Stress Testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Soak Testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Spike Testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following tasks:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. Detecting memory leaks'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. Finding the breaking point'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. Spiking usage'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. Simulating normal usage'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following types of testing:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. Spike Testing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. Load Testing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. Stress Testing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. Soak testing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which of the following BEST matches the tasks to the types of testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1D, 2C, 3A, 4B'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1D, 2B, 3A, 4C'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1D, 2A, 3B, 4C'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1D, 2B, 3C, 4A'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your test case simulates enough users as are expected during normal usage hours. This type of testing is best described as ________'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Load Testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Stress Testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Soak Testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Spike Testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your test case simulates enough users as are expected to find the breaking point of your application. This type of testing is best described as ________'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Stress Testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Load Testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Soak Testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Spike Testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which performance test is best suited for detecting memory leaks over time?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Soak testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Load testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Spike testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Unit testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In performance testing, which term best describes the maximum load a system can handle before failure?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Scalability limit']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Baseline']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Memory ceiling']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Response threshold']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a test case for performance testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, '"Verify the login API can handle 5000 requests per minute with response time < 200ms."']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, '"Verify the login modal works successfully and brings the user to their profile after login."']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, '"Verify that the site renders correctly in Chrome, Firefox, and Safari."']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Verify that clicking "Submit" sends a POST request to /api/submit.']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of test plan element in JMeter is used to simulate a virtual user sending requests to a server?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Thread Group']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Test Fragment']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'CSV Data Set Config']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Listener']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JMeter component is responsible for collecting and displaying results?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Listener']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Sampler']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Timer']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Controller']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In JMeter, which element is used to introduce delays between requests?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Timer']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Assertion']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Listener']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Thread Group']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JMeter element is used to check if the server response contains expected data?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Assertion']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Thread Group']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Sampler']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'PreProcessor']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to verify that the API endpoint GET /users handles 10,000 requests per minute with < 300ms latency. Which JMeter feature can be used to simulate the requests?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Thread Group']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Assertion']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Sampler']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Ramp-up Period']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer contains the best definition for thoroughput?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'The number of transactions processed per unit of time']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'The time taken to process a single request']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'The percentage of uptime over a given period']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'The maximum number of concurrent users supported']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A JMeter test shows a throughput of 500 requests per second. What does this mean in practical terms?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'The system successfully handled 500 requests every second']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'The server took 500 milliseconds to process each request']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'There were 500 users connected at the same time']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'The system can run 500 concurrent threads']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When analyzing throughput in performance testing, which factor can directly increase it without changing server hardware?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Optimizing application code and database queries']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Replacing all HTTP requests with HTTPS']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Reducing the number of users in the system']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Adding artificial delays between requests']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to manage cookies for a given JMeter test. Which type of object do you need to add?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Sampler']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Test Fragment']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Logic Controller']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Listener']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to manage headers for a given JMeter test. Which type of object do you need to add?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Sampler']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Test Fragment']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Logic Controller']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Listener']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to manage cookies for a given JMeter test. Which type of object do you need to add?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Sampler']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Test Fragment']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Logic Controller']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Listener']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which type of JMeter object do you define the address to which requests are made?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Sampler']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Test Fragment']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Logic Controller']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Listener']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes the most salient benefit to user think times in performance testing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Simulating natural pauses between user actions']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Controlling the rate at which tests are executed']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Reducing the stress on load balancers']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Neutralizing concurrency in tests']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which JMeter element should be minimized in a heavy load test to prevent excessive memory consumption?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Listeners with detailed result storage']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Thread Groups with uniform random timers']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'More than one Preprocessor']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Loop Controllers in general']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of timer is best for simulating how many users would behave in a real-world scenario?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Uniform Random Timer']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Constant Timer']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'JSR223 Timer']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Constant Throughput Timer']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In your JMeter test, you need to extract the'],
        [QuizMarkdownType.INLINE_CODE, 'id'],
        [QuizMarkdownType.TEXT, 'of an object you create from a POST request. Which object can assist with obtaining the'],
        [QuizMarkdownType.INLINE_CODE, 'id'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'JSON Extractor']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Random Variable']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'JSON Assertion']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Boundary Extractor']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following items does NOT fall under a SLA (Service Level Agreement)?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Frequency of Feature Updates']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Mean Time to Resolution (MTTR)']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Response Time / Latency']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Service Restoration Commitments']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You notice an increase in response times (in MS) the longer your endurance test executes. What is the most likely cause?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Memory leaks']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Load balancer failure']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Database bottleneck']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Service Restoration Commitments']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Assess: Soak Testing is synonymous with Endurance Testing.'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'True']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'False']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of testing is the LEAST effective for detecting bottlenecks?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Spike Testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Endurance/Soak Testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Load Testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Stress Testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of testing is the MOST effective for detecting bottlenecks?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Stress Testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Endurance/Soak Testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Load Testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Spike Testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of testing is the MOST effective for detecting memory leaks?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Endurance/Soak Testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Stress Testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Load Testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Spike Testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your performance tests intentionally brought the system to total failure. Which type of testing are you performing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Stress Testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Endurance/Soak Testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Load Testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Spike Testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The best type of test for measuring stable throughput is _______'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Load Testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Endurance/Soak Testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Stress Testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Spike Testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The best type of test for measuring the most possible throughput is _______'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Stress Testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Endurance/Soak Testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Load Testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Spike Testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The best type of test for measuring whether throughput measures up to SLA specifications is _______'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Load Testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Endurance/Soak Testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Stress Testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Spike Testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Under which of the following categories does Performance Testing fall?'],
      ],
      answers: [
        {
          order: 0,
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Operational Acceptance Testing']],
        },
        {
          order: 1,
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'User Acceptance Testing']],
        },
        {
          order: 2,
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Functional Testing']],
        },
        {
          order: 3,
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'None of the above']],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Stress testing CANNOT be conducted without an evaluation of the ability of a system to recover following total failure.'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'True']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'False']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Stress testing CAN be conducted without an evaluation of the ability of a system to recover following total failure.'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'False']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'True']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Stress testing CAN be conducted without an evaluation of the ability of a system to recover following total failure.'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'False']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'True']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Stress testing CAN be conducted without an evaluation of the ability of a system to recover following total failure.'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'False']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'True']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: User acceptance testing falls within the scope of performance testing.'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'False']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'True']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is true of ramp-up time?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'A ramp-up time that is defined too high may result in the test never achieving peak load']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'A ramp-up time that is defined too low may result in the test never achieving peak load']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'A ramp-up time that is defined higher than the number of threads in the group can be efficient']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'A ramp-up time that is defined lower than the number of threads in the group cannot be efficient']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of testing can be used to best determine whether or not the system\'s computing power (CPU, RAM) overfits or underfits its expected needs?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Stress Testing']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Load Testing']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Volume Testing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Endurance/Soak Testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which of the following situations is parameterization in JMeter useful?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'A thread group user enters an arbitrary string in a login form field']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'A thread group user performs a GET request and the API returns many objects']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'A thread group user performs a static PUT request on a static endpoint']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'A thread group user enters the string "admin_user" in a login form field']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your project contains the following text file'],
        [QuizMarkdownType.INLINE_CODE, 'Credentials'],
        [QuizMarkdownType.TEXT, '. Which element can be added to a transaction controller in order to use the values as parameterized variables?'],
        [QuizMarkdownType.CODE, `Username,Password
one,one
two2,two2
three3,three3`],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'CSV Data Set Config']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Counter']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'HTTP Authorization Manager']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Keystore Configuration']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is true of a transaction that contains an extractor step that extracts a value and assigns it to a variable?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'The variable can be referenced in the transaction where it was assigned immediately after the extractor step and in subsequent transactions']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'The variable cannot be referenced in the transaction where it was assigned, but it can be referenced in all subsequent transactions']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'The variable can only be referenced in the transaction where it was assigned, as long as it is referenced after the extractor step']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'The variable can only be referenced in the transaction where it was assigned and it can be referenced before and after the extractor step']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is true of a transaction that contains an extractor step that extracts a value and assigns it to a variable?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'The variable can be referenced in the transaction where it was assigned immediately after the extractor step and in subsequent transactions']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'The variable cannot be referenced in the transaction where it was assigned, but it can be referenced in all subsequent transactions']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'The variable can only be referenced in the transaction where it was assigned, as long as it is referenced after the extractor step']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'The variable can only be referenced in the transaction where it was assigned and it can be referenced before and after the extractor step']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are working with a jp@gc Ultimate Thread Group. Which field is equivalent to ramp-up time?'],
        [QuizMarkdownType.TABLE, {
          name: 'jp@gc - Ultimate Thread Group',
          data: [
            {
              _tableDataColId: '1', startThreadsCount: '', initialDelaySec: '', startupTimeSec: '', holdTimeForSec: '', shutdownTime: '',
            },
          ],
          cols: [
            { accessorKey: 'startThreadsCount', header: 'Start Threads Count' },
            { accessorKey: 'initialDelaySec', header: 'Initial Delay, sec' },
            { accessorKey: 'startupTimeSec', header: 'Startup Time, sec' },
            { accessorKey: 'holdTimeForSec', header: 'Hold Time For, sec' },
            { accessorKey: 'shutdownTime', header: 'Shutdown Time' },
          ],
        }],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Startup Time, sec'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Initial Delay, sec'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Hold Time For, sec'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Start Threads Count'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of JMeter thread group allows you to define load in the following way?'],
        [QuizMarkdownType.CODE, 'pause(5 sec) rate(1000/hour) random_arrivals(1 min) pause(5 sec)'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Open Model Thread Group']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Ultimate Model Thread Group']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Arrivals Thread Group']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Concurrency Thread Group']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your Arrivals Thread Group is parameterized the following way. What should be the total estimated arrivals?'],
        [QuizMarkdownType.CODE, `Target Rate (arrivals/min): 300
Ramp-Up Time (min):
Ramp-Up Steps Count:
Hold Target Rate Time (min): 60`],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, '~18000 total arrivals']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, '~1800 total arrivals']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, '~300 total arrivals']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, '~36000 total arrivals']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your Arrivals Thread Group is parameterized the following way:'],
        [QuizMarkdownType.CODE, `Target Rate (arrivals/sec): 10
Ramp-Up Time (sec): (blank)
Ramp-Up Steps Count: (blank)
Hold Target Rate Time (sec): 60`],
        [QuizMarkdownType.TEXT, 'It contains a Simple Controller which contains two samplers:'],
        [QuizMarkdownType.CODE, `Scenario 1 - Search
  └─Simple Controller
    ├─01_01_ClickEnterTheStore
    └─01_02_Search"Amazon"`],
        [QuizMarkdownType.TEXT, 'Both'],
        [QuizMarkdownType.INLINE_CODE, '01_01_ClickEnterTheStore'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, '01_02_Search"Amazon"'],
        [QuizMarkdownType.TEXT, 'contain a sampler that makes a request to a single endpoint. In a Summary Report, how many total samples should be recorded after executing the complete test plan?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, '~2400 samples']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, '~600 samples']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, '~1200 samples']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, '~3600 samples']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of JMeter thread group is most similar to imperative programming in implementation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Basic Thread Group']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Ultimate Thread Group']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Concurrency Thread Group']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Open Model Thread Group']],
        },
        {
          id: '4',
          answer: [[QuizMarkdownType.TEXT, 'Arrivals Thread Group']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of JMeter thread group allows the tester to declaratively define the desired number of threads to run in a test?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Ultimate Thread Group']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Basic Thread Group']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Concurrency Thread Group']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Open Model Thread Group']],
        },
        {
          id: '4',
          answer: [[QuizMarkdownType.TEXT, 'Arrivals Thread Group']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of JMeter thread group allows the tester to declaratively define the desired number of users to run in a test?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Arrivals Thread Group']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Basic Thread Group']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Concurrency Thread Group']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Open Model Thread Group']],
        },
        {
          id: '4',
          answer: [[QuizMarkdownType.TEXT, 'Ultimate Thread Group']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a Concurrency Thread Group, target concurrency refers to ________'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'The number of simultaneous users']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'The number of simultaneous threads']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'The number of steps']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'The duration of the test']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a Concurrency Thread Group, your parameters are defined as follows. How many threads are estimated to run 7 minutes into executing your test?'],
        [QuizMarkdownType.CODE, `Target Concurrency: 300
Ramp-Up Time (min): 10
Ramp-Up Steps Count: 10
Hold Target Rate Time (min): 60`],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, '~240']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, '~270']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, '~300']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, '~150']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a Concurrency Thread Group, your parameters are defined as follows. How long will your test run including ramp-up time?'],
        [QuizMarkdownType.CODE, `Target Concurrency: 300
Ramp-Up Time (min): 6
Ramp-Up Steps Count: 6
Hold Target Rate Time (min): 60`],
      ],
      answers: [
        {
          id: '0',
          order: 0,
          answer: [[QuizMarkdownType.TEXT, '1:06:00']],
        },
        {
          id: '1',
          order: 1,
          answer: [[QuizMarkdownType.TEXT, '1:00:00']],
        },
        {
          id: '2',
          order: 2,
          answer: [[QuizMarkdownType.TEXT, '1:12:00']],
        },
        {
          id: '3',
          order: 3,
          answer: [[QuizMarkdownType.TEXT, 'Not enough information']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a Concurrency Thread Group, your parameters are defined as follows. How long will your test run at its target concurrency?'],
        [QuizMarkdownType.CODE, `Target Concurrency: 300
Ramp-Up Time (min): 6
Ramp-Up Steps Count: 6
Hold Target Rate Time (min): 60`],
      ],
      answers: [
        {
          id: '0',
          order: 0,
          answer: [[QuizMarkdownType.TEXT, '1:00:00']],
        },
        {
          id: '1',
          order: 1,
          answer: [[QuizMarkdownType.TEXT, '1:06:00']],
        },
        {
          id: '2',
          order: 2,
          answer: [[QuizMarkdownType.TEXT, '1:12:00']],
        },
        {
          id: '3',
          order: 3,
          answer: [[QuizMarkdownType.TEXT, 'Not enough information']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which JMeter element is it possible to evaluate Java code?'],
      ],
      answers: [
        {
          id: '0',
          order: 0,
          answer: [[QuizMarkdownType.TEXT, 'JSR223 Sampler']],
        },
        {
          id: '1',
          order: 1,
          answer: [[QuizMarkdownType.TEXT, 'User Defined Variables']],
        },
        {
          id: '2',
          order: 2,
          answer: [[QuizMarkdownType.TEXT, 'If Controller']],
        },
        {
          id: '3',
          order: 3,
          answer: [[QuizMarkdownType.TEXT, 'All of the above']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which JMeter element is Groovy code written exclusively?'],
      ],
      answers: [
        {
          id: '0',
          order: 0,
          answer: [[QuizMarkdownType.TEXT, 'JSR223 Sampler']],
        },
        {
          id: '1',
          order: 1,
          answer: [[QuizMarkdownType.TEXT, 'User Defined Variables']],
        },
        {
          id: '2',
          order: 2,
          answer: [[QuizMarkdownType.TEXT, 'If Controller']],
        },
        {
          id: '3',
          order: 3,
          answer: [[QuizMarkdownType.TEXT, 'All of the above']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: in the JMeter config element User Defined Variables, it is possible to define a value using JMeter\'s native functions, Groovy or Java code.'],
      ],
      answers: [
        {
          id: '0',
          order: 0,
          answer: [[QuizMarkdownType.TEXT, 'True']],
        },
        {
          id: '1',
          order: 1,
          answer: [[QuizMarkdownType.TEXT, 'False']],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Consider the following JMeter config element User Defined Variables. Which scripting language can be observed in the values?',
        ],
        [
          QuizMarkdownType.TABLE, {
            name: 'User Defined Variables',
            data: [
              {
                _tableDataColId: '1', name: 'var1', value: 'Hello', description: '',
              },
              {
                // eslint-disable-next-line no-template-curly-in-string
                _tableDataColId: '2', name: 'var2', value: '${var} World', description: '',
              },
            ],
            cols: [
              { accessorKey: 'name', header: 'Name:' },
              { accessorKey: 'value', header: 'Value:' },
              { accessorKey: 'description', header: 'Description:' },
            ],
          },
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JMeter Native Functions',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Java',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Groovy',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'BeanShell',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In JMeter, a User Defined Variables object is evaluated ________'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'When the test tree is built']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'When a thread is created']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'When its variables are required dynamically']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'When a sampler is sequentially executed']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In JMeter, which answer is NOT possible?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Accessing the value of a Random Variable from a User Defined Variables']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Accessing values of a User Defined Variables from a Random Variable']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Accessing values of a User Defined Variables from a JSR223 Sampler']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Accessing the value of a Random Variable from a JSR223 Sampler']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In your JMeter test plan scenario, you intend for every user to enter random numbers to a minimum and maximum price filter widget. Which object CANNOT be used to implement this scenario?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'User Defined Variables']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Random Variable']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'If Controller']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'JSR223 Sampler']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'InfluxDB is used as a link between ______ and _______ for the purpose of ________'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'JMeter, Grafana, reporting metrics']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'JMeter, Jenkins, parsing'], [QuizMarkdownType.INLINE_CODE, '.jtl'], [QuizMarkdownType.TEXT, 'files']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Grafana, Jenkins, reporting metrics']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Grafana, DynamoDB, parsing'], [QuizMarkdownType.INLINE_CODE, '.jtl'], [QuizMarkdownType.TEXT, 'files']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a task that a Backend Listener can accomplish?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Assisting in reporting metrics']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Failing a test pipeline based on a condition']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Performing a new set of instructions based on a condition']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Performing distributed load testing']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In your JMeter test plan scenario, your request returns the following JSON. What JSON Path Expression matches the url?'],
        [QuizMarkdownType.CODE, `[
    {
        "result": {
            "data": {
                "json": {
                    "url": "https://checkout.stripe.com/..."
                }
            }
        }
    }
]`],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, '$[0].result.data.json.url']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, '$.result.data.json.url']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, '[0].result.data.json.url']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'result.data.json.url']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your JMeter test scenario is structured the following way. Transaction Controller B contains a JSON Extractor. Which answer is a true statement?'],
        [QuizMarkdownType.CODE, `Test Plan
├── Thread Group A
│   ├── Simple Controller A
│   │   ├── Transaction Controller A
│   │   │   ├── ...
│   │   │   └── ...
│   │   ├── Transaction Controller B
│   │   │   ├── ...
│   │   │   └── JSON Extractor
│   │   ├── Transaction Controller C
│   │   │   ├── ...
│   │   │   └── ...
│   │   └── ...
│   ├── Simple Controller B
│   │   ├── Transaction Controller X
│   │   │   ├── ...
│   │   │   └── ...
│   │   ├── Transaction Controller Y
│   │   │   ├── ...
│   │   │   └── ...
│   │   ├── Transaction Controller Z
│   │   │   ├── ...
│   │   │   └── ...
│   │   └── ...
│   └── ...
├── Thread Group B
│   ├── Simple Controller C
│   │   ├── Transaction Controller D
│   │   │   ├── ...
│   │   │   └── ...
│   │   ├── ...
│   │   │   ├── ...
│   │   │   └── ...
│   │   ├── ...
│   │   │   ├── ...
│   │   │   └── ...
│   │   └── ...
│   └── ...
└── ...`],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'The value assigned to the variable in Transaction Controller B is accessible to Transaction Controllers C, X, Y and Z']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'The value assigned to the variable in Transaction Controller B is accessible to Transaction Controllers A, B and C']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'The value assigned to the variable in Transaction Controller B is accessible to any subsequent Transaction Controller in the test plan']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'The value assigned to the variable in Transaction Controller B is accessible to Transaction Controller C only']],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
