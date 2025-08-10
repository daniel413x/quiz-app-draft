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
        [QuizMarkdownType.TEXT, 'The best type of test for measuring business SLA throughput is _______'],
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
  ],
} as QuizDataObject;
