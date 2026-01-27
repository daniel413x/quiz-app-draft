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
        [QuizMarkdownType.TEXT, 'GraphQL is a _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Query language']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Library']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RESTful approach']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Framework']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is the LEAST applicable to cookies?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RESTful APIs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'State persistence']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Session management']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Storing information']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is MOST LIKELY the LEAST relevant to the application layer in HTTP communication?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'SQL procedures']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'State persistence']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Cookes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RESTful APIs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A mobile app has several screens that each need different subsets of user and product data. You want to avoid over-fetching/under-fetching and cut down on multiple round trips to various endpoints while keeping a strongly typed schema clients can introspect. What integration style fits best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are connecting backend microservices written in Go, Java, and Python. Calls are high-throughput, latency-sensitive, and benefit from contract-first development with auto-generated clients and efficient binary serialization. Which do you pick?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are exposing a public CRUD API for partners. You want broad tooling support, easy caching of '],
        [QuizMarkdownType.INLINE_CODE, 'GET'],
        [QuizMarkdownType.TEXT, ' responses at CDNs, human-friendly URLs, and compatibility with corporate firewalls and proxies. What should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building a live chat and collaborative whiteboard feature where the server must push events to clients instantly and clients must also send events back in real time. Which transport is the best fit?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An internal analytics pipeline needs efficient server-to-server streaming (client and server can send multiple messages over one connection) with strong typing and back-pressure over HTTP/2. What should you choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your e-commerce product catalog must be globally cacheable at the edge with cache-control semantics and linkable resources for SEO. Which approach is most suitable?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building a stock-trading ticker and notifications panel where thousands of clients subscribe to live price updates and receive pushes within milliseconds. Which technology best fits this need?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A single “backend for frontend” (BFF) must aggregate many microservice resources and let the mobile app request exactly the fields it needs per view to cut payload size. What is the best choice?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise customer’s network only permits simple HTTP/1.1 through legacy proxies and security appliances. You need a widely compatible, debuggable interface with standard verbs and status codes. What should you implement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need bi-directional real-time collaboration for a multiplayer document editor (cursor presence, keystrokes, and operational transforms) with low latency from browser clients. Which is the best transport?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your platform’s internal services must exchange small, frequent RPCs with strict SLAs and need first-class streaming modes (server, client, bi-directional) plus schema evolution with generated stubs. What should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A startup needs to expose a lightweight public API for third-party developers to query products and submit orders using simple HTTP verbs like'],
        [QuizMarkdownType.INLINE_CODE, 'GET'],
        [QuizMarkdownType.TEXT, ' and'],
        [QuizMarkdownType.INLINE_CODE, 'POST'],
        [QuizMarkdownType.TEXT, ', and responses must be easy to test with cURL. What is the most suitable approach?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A financial trading system needs bidirectional, low-latency communication between servers and client dashboards to stream live updates without polling. Which communication model should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A backend system serves multiple web and mobile clients that each need to query complex relationships between entities but only specific fields. You want to prevent unnecessary data transfer. Which approach best fits?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Two microservices in different regions exchange large volumes of structured data and require binary serialization and contract enforcement for speed and safety. What protocol should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A news application must push breaking updates to users instantly, maintaining an open connection between client and server. Which solution allows this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An IoT device network must send telemetry data efficiently to a central backend. Messages are small and frequent, and low bandwidth overhead is crucial. Which technology is best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A frontend team wants to replace multiple REST calls with a single query to fetch related user and post data while reducing response size. What is the optimal API style?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A government open data portal provides endpoints for public consumption. The endpoints must use standard HTTP verbs and be easily understood and cached. What pattern fits best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise backend service uses Java, but mobile clients are written in Swift and Kotlin. They require a unified API contract that supports strongly typed requests and responses with minimal serialization errors. Which technology fits best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are implementing a live sports score tracker where clients must stay updated in real-time without continuously polling the server. What’s the right solution?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A video streaming backend must provide metadata about videos to browsers and smart TVs with predictable URLs, caching support, and compatibility with HTTP proxies. Which approach should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RESTful API']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WebSockets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which technology is NOT based on remote procedure calls?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'SOAP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'tRPC']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'REST can be described as ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Resource-based']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Query-based']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Event-driven']] },
        { id: '3', order: 3, answer: [[QuizMarkdownType.TEXT, 'All of the above']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'REST can be described as ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Resource-based']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Query-based']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Event-driven']] },
        { id: '3', order: 3, answer: [[QuizMarkdownType.TEXT, 'All of the above']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In GraphQL, how do you define a field that must always have a value and cannot be null?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'String!']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'NonNull<String>']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'required String']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'String?']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In RESTful APIs, what determines the data structure of the response for a given endpoint?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The endpoint’s resource representation schema']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The HTTP header']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The transport protocol']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The API key format']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In gRPC, how are types defined for request and response messages?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Protocol Buffers (.proto) files']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'JSON Schema']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'XML Schema (XSD)']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'YAML mappings']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In SOAP-based APIs, what is used to formally describe data types and operations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'WSDL']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'OpenAPI']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Protocol Buffers']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'RAML']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In GraphQL, which keyword is used to define a reusable type that can be queried by clients?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'type']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'struct']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'schema']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'interface']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which API style relies on HTTP methods like'],
        [QuizMarkdownType.INLINE_CODE, 'GET'],
        [QuizMarkdownType.TEXT, ','],
        [QuizMarkdownType.INLINE_CODE, 'POST'],
        [QuizMarkdownType.TEXT, ','],
        [QuizMarkdownType.INLINE_CODE, 'PUT'],
        [QuizMarkdownType.TEXT, ', and'],
        [QuizMarkdownType.INLINE_CODE, 'DELETE'],
        [QuizMarkdownType.TEXT, ' to determine the action on typed resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'REST']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'SOAP']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In gRPC, how do developers enforce strong typing between services?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By compiling shared .proto files into client/server stubs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By validating JSON payloads at runtime']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By using OpenAPI specifications']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By defining XML Schemas for data exchange']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which API model defines data structures using XML Schema Definition (XSD) and enforces strict typing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'SOAP']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'REST']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GraphQL']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'gRPC']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In GraphQL, how do you specify that a field returns a list of another type?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '[Type]']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'List<Type>']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Array<Type>']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Type[]']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement about typing in REST APIs is true?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Typing is implicit and depends on resource representation, not protocol definition.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'All types must be declared in an OpenAPI schema.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'REST enforces strict type checking using XML Schema.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'REST requires JSON Schema validation for every request.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A widely adopted utilization of ______ is in ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'gRPC, microservices']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'SOAP, microservices']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'REST, streaming']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'REST, microservices']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'With ______, after the initial handshake, communication no longer includes _______.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'WebSockets, headers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GraphQL, origins']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'gRPC, caching']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'REST, HTTP']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
