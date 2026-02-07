import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Database Theory II',
  slug: 'database-theory-ii',
  category: {
    slug: 'database-theory',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database workload is optimized for handling large volumes of analytical queries across historical data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'OLAP (Online Analytical Processing)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'OLTP (Online Transaction Processing)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'HTAP (Hybrid Transactional/Analytical Processing)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Streaming Workloads']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which storage scheme are values grouped by column instead of by row?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Row-Oriented Storage']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Key-Value Storage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Column-Oriented Storage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Document-Oriented Storage']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which storage model is best suited for semi-structured data like JSON?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Column-Oriented Storage']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Document-Oriented Storage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Row-Oriented Storage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Relational Storage']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a typical task for OLTP systems?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Quick responses to user/system events']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create, Read, Update, Delete operations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Aggregate statistics over historical data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Focus on ingesting small updates']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of database workload blends characteristics of both OLTP and OLAP?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Streaming Workloads']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'HTAP (Hybrid Transactional/Analytical Processing)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'ETL Pipelines']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Document-Oriented Workloads']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database system is most suited for low-latency lookups by a single key?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Relational Database']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Key-Value Store']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Document Store']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Graph Database']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which data storage model is most efficient for read-heavy analytics queries?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Column-Oriented Storage']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Row-Oriented Storage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Key-Value Storage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Graph Storage']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which command-line utility is commonly used to extract, transform, and load data in Unix-like systems?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'psql']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'grep']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'awk']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'curl']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In key-value stores, what operation retrieves a value by key?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'scan']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'fetch']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'get']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'match']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following storage schemes is typically used by relational databases?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Key-Value Storage']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Graph Storage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Row-Oriented Storage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Blob Storage']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a benefit of column-oriented storage in analytics workloads?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Faster insert performance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Efficient row-level updates']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Improved compression and fast aggregation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Better support for foreign key constraints']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database workload type is most suitable for dashboards showing real-time updates?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Streaming Workloads']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'OLTP Workloads']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'ETL Pipelines']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'OLAP Workloads']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a document-oriented database, each record is typically stored as a'],
        [QuizMarkdownType.INLINE_CODE, 'document'],
        [QuizMarkdownType.TEXT, 'in which format?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'XML']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CSV']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'JSON']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'YAML']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database workload is designed to respond quickly to high volumes of short, simple read/write operations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'OLAP']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'HTAP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Streaming']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'OLTP']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of storage organizes data as key and value pairs, without fixed schema?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Document-Oriented Storage']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Key-Value Storage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Row-Oriented Storage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Column-Oriented Storage']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database system is optimized for high performance analytical queries over large volumes of data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Graph Database']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Relational Database']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'OLAP Database']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Document Database']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which kind of database storage is most appropriate for storing log files or time-series data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Column-Oriented Storage']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Key-Value Storage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Document-Oriented Storage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Row-Oriented Storage']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database workload would best suit a bank processing user transactions in real-time?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'OLTP']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'OLAP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'HTAP']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Batch Processing']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of query is typically used in OLAP workloads?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transactional query']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Analytical query']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Insert query']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Key lookup']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database type is best for managing relationships between entities, like social networks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Relational Database']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Key-Value Database']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Graph Database']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Document Database']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of storage is best suited for fast writing and retrieval of large binary files?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Blob Storage']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Column-Oriented Storage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Key-Value Store']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Document Store']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following database workloads would be least suitable for a columnar database?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Read-heavy analytics']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'High-volume transactions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Data aggregation queries']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Trend analysis across many rows']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main advantage of row-oriented storage for OLTP systems?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Efficient data compression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Faster joins']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Quick access to entire rows for updates']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Better support for time-series analytics']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database workload scheme is best for integrating machine learning with transactional data in real-time?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Streaming Workloads']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'OLTP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'HTAP']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Batch Processing']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Broadly speaking, which database workload scheme is most optimized for read operations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'OLAP']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'OLTP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'HTAP']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Batch Processing']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Broadly speaking, which database workload scheme is most optimized for business analytics?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'OLAP']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'OLTP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'HTAP']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Batch Processing']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Broadly speaking, which database workload scheme is most optimized for CRUD operations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'OLTP']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'OLAP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'HTAP']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Batch Processing']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following diagram. Which storage scheme is illustrated?'],
        [QuizMarkdownType.CODE, `[Row1: 101, "Alice Johnson", "2021-05-10"]
[Row2: 102, "Bob Smith", "2020-12-01"]`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Row-Oriented Storage']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Column-Oriented Storage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Document-Oriented Storage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Key-Value Storage']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following diagram. Which storage scheme is illustrated?'],
        [QuizMarkdownType.CODE, `[101, 102]               → employee_id
["Alice Johnson", ...]   → name
["2021-05-10", ...]      → hire_date`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Column-Oriented Storage']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Row-Oriented Storage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Document-Oriented Storage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Key-Value Storage']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of an aggregation function?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'SQL\'S '], [QuizMarkdownType.INLINE_CODE, 'AVG()']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'ETL\'S "Transform" stage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Any read operation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'SQL\'S '], [QuizMarkdownType.INLINE_CODE, 'JOIN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database storage scheme stores data in contiguous blocks in memory or in other storage mediums?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Column-Oriented Storage']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Row-Oriented Storage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Document-Oriented Storage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Key-Value Storage']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are designing an e-commerce application with strict consistency requirements for transactions. Which type of database is best suited for this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'NoSQL document store']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Relational SQL database']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Graph database']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Time-series database']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your application must support flexible, schema-less data ingestion from multiple sources. What is the best storage option?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Relational SQL database']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Flat file system']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'NoSQL document store']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'In-memory cache']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to store and query highly connected data such as user relationships and friend suggestions. Which database should you choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Relational SQL database']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Document database']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Graph database']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Key-value store']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are designing a system that experiences highly variable workloads and must scale out horizontally. Which kind of database system is best suited for this need?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Monolithic SQL server']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'NoSQL distributed database']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Single-node graph database']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Local file-based database']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A financial reporting tool must generate consistent reports from historical data and support complex queries. Which solution is most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Time-series database']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Key-value store']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Relational data warehouse']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Columnar NoSQL store']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your system requires ultra-low latency for frequent read operations. Which solution best fits this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Relational database with indexing']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Document database with sharding']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'In-memory key-value store like Redis']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Graph database with relationships']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to support offline analytics and ad-hoc queries across massive datasets. What type of database is most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'OLTP-optimized RDBMS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Key-value cache']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'OLAP-optimized columnar database']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Embedded database']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are a solutions architect for a global application and need low-latency access to user profiles from different regions. What database approach best suits this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Single-region SQL instance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Globally distributed NoSQL database']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Graph database hosted in one region']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'File-based document archive']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your application stores logs that are written frequently and queried by timestamp. What storage option is most efficient?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Relational database']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'NoSQL key-value store']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Time-series database']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Graph database']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are tasked with designing a microservices architecture that includes services independently managing their own data. What is a recommended database pattern in this case?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Single shared relational database']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Event sourcing']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Database-per-service pattern']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Graph-based database federation']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of database is typically used as a single database for everything?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'NoSQL database']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'SQL database']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Graph database']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Object-oriented database']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How is data typically stored in SQL databases?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'As documents']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'As graphs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'In rows and columns']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'As key-value pairs']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes how schemas are handled in NoSQL databases?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Fixed and predefined']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Strict and immutable']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Flexible and dynamic']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Difficult to modify']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What kind of scaling is associated with SQL databases?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Horizontal scaling']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Automatic scaling']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Vertical scaling']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Elastic scaling']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'NoSQL databases use horizontal scaling. What does this mean?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Data must be stored on a single server']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Data is distributed across multiple servers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Scaling is limited by hardware upgrades']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Performance may decrease with data volume']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of database supports the full set of ACID properties?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'NoSQL database']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'SQL database']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Columnar database']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Graph database']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes SQL database performance optimization?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Uses indexes and optimized structure']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Relies on external caching']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Ignores indexing']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Uses object-based APIs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is typically used for storing and retrieving data in SQL databases?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Object-based APIs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'XML documents']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Key-value lookups']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Structured Query Language']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which kind of database can structured, semi-structured, and unstructured data be stored together?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'SQL']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'NoSQL']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Relational']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Hierarchical']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which kind of software is used for both SQL and NoSQL databases?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Only paid software']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Only open-source software']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Both open-source and paid software']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Neither']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database system uses object-based APIs for querying?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'SQL']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'NoSQL']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Relational']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Hierarchical']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the BASE model used in NoSQL databases stand for?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Binary, Atomic, Structured, Efficient']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Basically Available, Soft state, Eventually consistent']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Buffered Access, Simplified Execution']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Backup, Access, Sync, Export']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database system uses documents instead of rows and tables?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'PostgreSQL']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'MySQL']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'MongoDB']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'SQLite']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a property of the ACID model in database systems?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Abstraction']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Consistency']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Concurrency']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Durabilityless']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of normalization in relational databases?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Improve data security']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reduce data redundancy']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Increase data volume']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decrease response time']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Operations in NoSQL databases are backed by Atomicity, Consistency, Isolation, Durability (ACID) transactions.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'False']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'True']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Operations in SQL databases are backed by Atomicity, Consistency, Isolation, Durability (ACID) transactions.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Operations in NoSQL databases are backed by Atomicity, Consistency, Isolation, Durability (ACID) transactions.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'False']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'True']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Operations in SQL databases are backed by the BASE model (Basically Available, Soft State, Eventually Consistent).'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'False']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'True']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Operations in NoSQL databases are backed by the BASE model (Basically Available, Soft State, Eventually Consistent).'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a consistency model that emphasizes availability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'BASE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'ACID']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CAP Theorem']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'PACELC']] },
      ],
      correctAnswer: '0',
    }, {
      question: [
        [QuizMarkdownType.TEXT, 'You are designing a banking application where account balances must reflect all recent transactions immediately. What consistency model is appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Eventual consistency']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Strong consistency']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Causal consistency']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Session consistency']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are designing a globally distributed social media app where post likes can be slightly delayed. What consistency model is best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Strong consistency']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Strict serializability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Eventual consistency']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linearizability']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database offers strong consistency by default and guarantees ACID transactions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'DynamoDB']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'MongoDB']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'PostgreSQL']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Cassandra']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'DynamoDB uses which consistency model by default to optimize availability and latency?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Strong consistency']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Eventual consistency']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Serializable consistency']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Monotonic read consistency']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a consistency model that guarantees that once a write completes, all future reads will reflect that write?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ACID']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'BASE']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CAP']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RAID']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a consistency model that prioritizes availability and partition tolerance over immediate consistency?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ACID']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'BASE']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CAP']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RAID']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a consistency model that prioritizes consistency over availability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ACID']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'BASE']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CAP']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RAID']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In an e-commerce shopping cart, where availability is more important than perfect synchronization, which answer describes a consistency model that is the most appropriate for the task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ACID']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CAP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'BASE']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'PACELC']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a consistency model that allows reads to return stale data temporarily but eventually becomes consistent?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ACID']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CAP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'BASE']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'PACELC']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You’re building a multi-region distributed system where reads and writes must succeed even during network partitions. Which answer describes a consistency model that you should consider?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ACID']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CAP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'BASE']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'PACELC']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following Amazon services is a columnar databse?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Neptune']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary goal of database sharding?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Horizontal partitioning to scale reads and writes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Encrypting data at rest on a single node']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Caching data in quick-access groups']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Mirroring storage to reduce risk of data loss']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You observe uneven load across shards due to skewed values. What is the best mitigation?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Choose a higher-cardinality shard key that distributes writes more evenly']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Disable caching so traffic hits all shards equally']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Increase connection pools on the busiest shard only']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Turn off replication to reduce hot spots']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which strategy reduces hot partitions created by time-ordered inserts (e.g., increasing IDs)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use hash-based sharding on a randomized or salted key']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use strict range sharding on the timestamp']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Write all new rows to a single “ingest” shard']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Disable auto-increment to keep IDs small']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Cross-shard queries are expensive. Which design minimizes them for a multi-tenant SaaS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Shard by '], [QuizMarkdownType.INLINE_CODE, 'tenant_id'], [QuizMarkdownType.TEXT, ' so most queries stay within one shard']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Shard by random UUID so tenants span all shards']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Shard by server IP address for convenience']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Rotate tenants across shards weekly for balance']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your cluster needs to add capacity without massive rebalancing. Which technique helps most?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use consistent hashing with virtual nodes to limit key movement']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use static ranges fixed at deployment time']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Move all data to a larger single server first']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Disable autoscaling to avoid splits entirely']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which is a good property of a shard key?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'High cardinality, uniform distribution, and alignment with query access patterns']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Low cardinality for fewer partitions and simpler routing']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Frequently updated value to spread writes dynamically']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Time-sequential value to keep data localized on one shard']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a range-sharded system, you expect future growth in a new key range. What should you do up front?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Pre-split ranges and pre-allocate shards for anticipated key intervals']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Let all data flow to one shard until it is full']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Disable balancing to minimize movement']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Consolidate shards into a single large range']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your OLTP app often joins customer and order tables by customer. Which sharding approach reduces cross-shard joins?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Co-locate related entities by sharding both on '], [QuizMarkdownType.INLINE_CODE, 'customer_id']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Shard customers by region and orders by date']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Shard customers by hash and orders by range']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Randomly assign orders to shards at write time']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Resharding is planned to handle growth. Which practice minimizes downtime and risk?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dual-write during migration with idempotent consumers and cut over after validation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Bulk copy all data at once and switch immediately']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Turn the site read-only for several days']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Drop old shards before creating new ones']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your read traffic is global and latency-sensitive. Which pattern pairs best with sharding to reduce cross-region hops?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Geo-sharding by user locality plus regional read replicas']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Single-region sharding with larger caches only']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Random sharding across regions to “average out” latency']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Disable replication to avoid conflicts across regions']] },
      ],
      correctAnswer: '0',
    }, {
      question: [
        [QuizMarkdownType.TEXT, 'Why would you add read replicas to a production database?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To offload read traffic and improve read scalability']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To reduce storage costs by compressing data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To enable larger transaction sizes on the primary']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To replace the need for indexing entirely']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In managed RDS-style deployments, how does a standby in '],
        [QuizMarkdownType.INLINE_CODE, 'Multi-AZ'],
        [QuizMarkdownType.TEXT, ' differ from a read replica?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Standby is for HA failover and typically not readable; read replicas are for scaling reads']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Both are readable and used only for analytics']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Read replicas fail over automatically; standbys do not']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'There is no difference—terms are interchangeable']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When should you choose synchronous replication for replicas?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'When you need zero data loss ('], [QuizMarkdownType.INLINE_CODE, 'RPO=0'], [QuizMarkdownType.TEXT, ') and can tolerate higher write latency']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'When you need lowest write latency regardless of durability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'When you want replicas to be eventually consistent for geo reads']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'When you need cheaper storage only']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your API requires read-after-write consistency for user profiles. How should you route reads in a replica-based architecture?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Route post-write reads to the primary or use a session stickiness/read-your-writes strategy']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Always route reads to replicas to reduce latency']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Randomly distribute reads across primary and replicas']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Delay the read by a fixed 10 seconds to avoid staleness']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For a global application, what is a primary benefit of placing read replicas in multiple regions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Lower read latency for local users and improved DR options']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Higher write throughput on the primary without trade-offs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Guaranteed strong consistency across all replicas']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Elimination of the need for caching layers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The primary becomes unavailable. What is a safe high-level approach to maintain availability using replicas?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Promote a healthy replica to primary and fence the old primary to prevent split-brain']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Wait for the old primary to recover before serving traffic']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Switch all traffic to any random replica without checks']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Disable replication on all nodes to isolate the issue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In quorum/majority-based replication, what write concern helps balance durability and availability in a 3-replica setup?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Acknowledge after majority (2/3) replicas confirm the write']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Acknowledge only after all replicas confirm the write']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Acknowledge after the primary queues the write']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Never acknowledge writes to maximize throughput']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need multi-writer capability across regions with minimal conflicts. Which approach reduces write conflicts most?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Single-writer per partition (leader–follower) with well-defined partitioning']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Last-write-wins across all regions for every key']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Randomly assign leaders per request']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Disable replication to avoid conflicts']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Are replicas a substitute for backups?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'No; replicas propagate corruption and deletes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Yes; replicas cannot be corrupted']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Yes, but only with synchronous replication']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Only if replicas are cross-region']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which metric is most critical to monitor for user-facing staleness issues on read replicas?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Replication lag']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Disk queue depth on backup servers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Number of open connections on admin ports']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'CPU temperature on the primary']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Database sharding increases _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Write scalability']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Read availability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Write performance']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Read performance']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT a characteristic of database sharding?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Increased read performance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Increased write scalability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Horizontal scaling']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Fault isolation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT a characteristic of database replication?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Increased write scalability']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Increased read performance']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Horizontal scaling']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Fault isolation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT a characteristic of database replication?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Increased write scalability']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Increased read performance']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Horizontal scaling']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Fault isolation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In databasd sharding, each shard has unique data.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In databasd sharding, each shard has identical data.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In database replication, each replica has the same data.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In database replication, each replica does not have the same data.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer correctly diagrams the flow of a database query involving sharding?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Query → Shard Router → Correct Shard → Index → Row']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Query → Shard Router → Correct Shard → Row → Index']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Query → Index → Shard Router → Correct Shard → Row']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Query → Shard Router → Index → Correct Shard → Row']] },
      ],
      correctAnswer: '0',
    },

  ],
} as QuizDataObject;
