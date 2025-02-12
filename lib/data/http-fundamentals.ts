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
        [QuizMarkdownType.TEXT, 'A successful GET request should return a ___ status code.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '200']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '201']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '204']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '100']] },
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
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It deletes and recreates an existing resource with updated fields']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It updates an existing resource without changing its modification date or versioning']] },
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
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It authenticates the request before running any methods']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It acknowledges the method to be called by the request']] },
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
        [QuizMarkdownType.TEXT, 'Which status code should be returned to a successful DELETE request?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '204']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '200']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '201']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '100']] },
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
    }, {
      question: [
        [QuizMarkdownType.TEXT, 'What does statelessness mean in a RESTful API?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Each request must contain all the necessary information to process it']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Each request is stored on the server for future reference']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Session data is maintained between client and server']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The server can maintain user authentication state across requests']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes why statelessness is beneficial in RESTful APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It improves scalability by avoiding session management on the server']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It allows the server to store client state for efficiency']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It reduces the number of requests needed for authentication']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It forces all clients to use cookies for authentication']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How should a RESTful API handle authentication while maintaining statelessness?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By using tokens such as JWT or API keys with each request']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By storing user sessions on the server']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By requiring the client to send cookies for state tracking']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By using server-side session identifiers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following violates the statelessness principle in a RESTful API?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Maintaining user sessions on the server']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using API keys for authentication']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Including request parameters in the URL']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using caching for GET requests']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTTP status code is returned when authentication is required but not provided in a stateless API?'],
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
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a best practice in REST api design?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Avoiding accepting and responding with JSON']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Avoiding stateful api patterns']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using nouns instead of verbs in endpoint paths']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using logical nesting on endpoints']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An authenticated user calls the endpoint /api/store/3 where "3" is a store id identifier. However, the server determines that the store with id "3" does not belong to this user. The appropriate status code to return is _____'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '403']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '404']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '401']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '405']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a recommended HTTP status code usage in REST APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using 200 for all successful responses']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using 201 for successful resource creation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using 404 when a requested resource is not found']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using 401 when authentication is required but missing']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a best practice for handling authentication in REST APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using session-based authentication']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using token-based authentication like JWT']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Requiring authentication headers for protected endpoints']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using OAuth for third-party authentication']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a best practice when designing REST API endpoints?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using verbs in resource URLs like /getUser']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using plural nouns for collections, e.g., /users']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Avoiding deep nesting of resources']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using HTTP methods to define operations instead of URL names']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a recommended approach for API versioning in RESTful services?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Embedding the version in query parameters like ?v=1']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using versioning in the URL path, e.g., /v1/resources']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using the Accept header to specify the API version']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using content negotiation to handle API versioning']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a best practice for error handling in REST APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Returning 500 for all failures']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Providing meaningful error messages with error codes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using appropriate HTTP status codes for different errors']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Including an error message field in JSON responses']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are tasked with designing API routing that reflects logical nesting. That is, if one object can contain another object, then the endpoint should reflect that. Which answer best reflects this scheme for an endpoint where there are articles and an article can have comments?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '/articles/:articleId/comments']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '/comments/:articleId']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '/:articleId/comments']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '/articles/comments/:articleId']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are tasked with designing API routing that reflects logical nesting. That is, if one object can contain another object, then the endpoint should reflect that. Which answer best reflects this scheme for an endpoint where there are quizzes and an quiz can have quiz questions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '/quizzes/:quizId/quiz-questions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '/:quizId/quiz-questions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '/quiz-questions/:quizId']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '/quiz-questions/quizzes/:quizId']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_____ are typically used to identify or retrieve a specific resource. _____  are more suitable for sorting the request data.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'parameters, query parameters']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'query parameters, parameters']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'UUIDs, slugs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'slugs, UUIDs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following answers reflects PROPER versioning in an API endpoint?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '/v1/books']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '/books/v1']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '/books?v=1']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '/v=1/books']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT an advantage of API versioning?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Provide new features only on specific object domains such as /books/v2']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Provide backward compatibility to third-party applications']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Provide an avenue for clients who prefer previous versions\' API']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Provide an avenue to mix and match all previous versions of an API']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main advantage of using HATEOAS in RESTful APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It allows clients to navigate API resources dynamically']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It improves authentication security']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It eliminates the need for API documentation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It reduces API response times']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a common caching strategy used in RESTful APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Session-based caching']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Client-side caching']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Proxy caching']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Server-side caching']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTTP header is used to control caching behavior in RESTful APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Cache-Control']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Authorization']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Content-Type']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Accept']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In RESTful API security, what is the main advantage of using OAuth 2.0 over API keys?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'OAuth provides scoped access and token expiration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'OAuth requires fewer requests to authenticate']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'OAuth does not require a client secret']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'OAuth uses HTTP cookies to store authentication data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which RESTful API architectural style allows different representations of the same resource?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Content Negotiation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'HATEOAS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Statelessness']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Layered System']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main benefit of using JSON:API in RESTful API design?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It standardizes how clients and servers exchange data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It forces all responses to be in XML format']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It eliminates the need for authentication']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It only works with GraphQL APIs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a downside of using long-lived access tokens in REST API security?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They increase the risk of unauthorized access if leaked']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They require more server storage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They slow down API response times']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They are not compatible with OAuth 2.0']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a correct use case for the HTTP'],
        [QuizMarkdownType.INLINE_CODE, 'LINK'],
        [QuizMarkdownType.TEXT, 'method in RESTful APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To associate a resource with another resource']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To retrieve a list of linked resources']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To delete a linked resource']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To create a new resource']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In RESTful APIs, what is the advantage of using pagination with'],
        [QuizMarkdownType.INLINE_CODE, 'Link'],
        [QuizMarkdownType.TEXT, 'headers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It allows clients to navigate pages efficiently']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It reduces server memory usage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It improves response speed for large payloads']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It eliminates the need for query parameters']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a reason to use rate limiting in RESTful APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To restrict access to premium users only']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To prevent denial-of-service (DoS) attacks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To manage server load and optimize performance']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To enforce API usage policies per user']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
