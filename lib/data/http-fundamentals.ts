import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'HTTP Fundamentals',
  slug: 'http-fundamentals',
  category: {
    slug: 'web-development',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'What HTTP method is typically used for retrieving a resource in a RESTful API?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'GET']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'POST']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'PUT']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'DELETE']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTTP status code indicates that a resource was successfully created?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '201']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '200']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '204']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '400']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the HTTP'],
        [QuizMarkdownType.INLINE_CODE, 'PUT'],
        [QuizMarkdownType.TEXT, 'method in a REST API?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It updates an existing resource or creates one if it does not exist']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It retrieves a resource']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It deletes a resource']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It applies a partial update to a resource']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which architectural constraint requires that RESTful APIs must be stateless?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Statelessness']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Cacheability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Layered system']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Code on demand']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTTP method is used to apply partial updates to a resource?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'PATCH']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'PUT']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'POST']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'DELETE']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the'],
        [QuizMarkdownType.INLINE_CODE, 'OPTIONS'],
        [QuizMarkdownType.TEXT, 'HTTP method in RESTful APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It retrieves allowed HTTP methods for a resource']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It applies partial modifications to a resource']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It deletes a resource']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It updates an existing resource']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTTP status code is returned when a client attempts to access a resource that does not exist?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '404']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '403']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '401']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '500']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a best practice when designing RESTful APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use plural nouns for resource endpoints']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use verbs in URL paths']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Avoid using HTTP status codes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use XML as the only response format']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTTP header is commonly used for authentication in REST APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Authorization']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Accept-Language']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Content-Type']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Cache-Control']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which RESTful principle ensures that an API response includes links to related resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'HATEOAS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Statelessness']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Cacheability']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Layered system']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which response header specifies how long a response can be cached?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Cache-Control']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Authorization']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Location']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ETag']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the standard format for RESTful API responses?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'JSON']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'XML']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'YAML']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Plain text']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTTP method should be used to delete a resource?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'DELETE']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'REMOVE']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'PURGE']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'CLEAR']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTTP header is used to specify the format of the request payload?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Content-Type']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Accept']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Authorization']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ETag']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which URL pattern follows RESTful best practices for retrieving a list of users?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/users']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/getUsers']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/retrieve-users']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/users/list']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which principle suggests that API endpoints should be predictable and follow a consistent naming convention?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Uniform Interface']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Statelessness']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Layered System']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Code on Demand']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTTP method should be used when updating an entire resource in a RESTful API?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'PUT']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'PATCH']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'POST']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'GET']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why should RESTful APIs avoid using session-based authentication?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Because RESTful APIs should be stateless']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Because session storage is expensive']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Because it is harder to scale authentication servers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Because JWT is more secure']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the recommended approach for handling versioning in RESTful APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/v1/resources']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'resources?v=1']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Accept-Version: 1']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'X-API-Version: 1']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a RESTful best practice when returning errors?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use standardized HTTP status codes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Return an HTML error page']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Send a generic 500 response for all errors']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use a custom error format with status 200']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a recommended way to implement pagination in a RESTful API?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '?page=1&limit=10']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '?offset=10&count=10']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '?start=10&end=20']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '?limit=10&skip=10']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTTP header is used to specify the format the client expects in a RESTful API response?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Accept']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Content-Type']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Authorization']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Cache-Control']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTTP status code is appropriate when an unauthorized client attempts to access a protected resource?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '401']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '403']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '404']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '500']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of HATEOAS in a RESTful API?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It enables clients to navigate resources dynamically using hyperlinks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It ensures requests are stateless']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It enforces strong authentication mechanisms']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It allows caching responses for performance optimization']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
