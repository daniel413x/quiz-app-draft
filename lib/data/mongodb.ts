import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'MongoDB',
  slug: 'mongodb',
  category: {
    slug: 'databases',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary data structure used by'],
        [QuizMarkdownType.INLINE_CODE, 'MongoDB'],
        [QuizMarkdownType.TEXT, 'to store records?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Document'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Row'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Tuple'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Cell'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which MongoDB command returns all distinct values of a specified field in a collection?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'distinct()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'unique()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'values()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'separate()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which MongoDB method is used to insert a single document into a collection?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'insertOne()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'insertSingle()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'addOne()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'createOne()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which MongoDB query operator is used to find documents where a field value is less than a given value?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '$lt'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '$le'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '$gt'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '$ne'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which MongoDB method is used to retrieve documents from a collection?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'find()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'search()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'query()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'select()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In MongoDB, what is the name of the automatically created unique identifier field for each document?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '_id'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'id'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'doc_id'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'uuid'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which MongoDB method is used to update multiple documents that match a filter?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'updateMany()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'updateAll()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'modifyMany()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'replaceMany()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What MongoDB feature distributes data across multiple machines to support horizontal scaling?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Sharding'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Replication'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Partitioning'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Mirroring'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which MongoDB command is used to delete multiple documents that match a filter?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'deleteMany()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'removeMany()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'dropMany()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'eraseMany()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which MongoDB aggregation pipeline stage is used to filter documents based on specified criteria?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '$match'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '$filter'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '$where'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '$search'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which object is instrumental in implementing cursor batching in a MongoDB query?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'batchSize()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'limit()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Sorts.ascending("_id")'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Filters'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a query that returns a MongoCursor, the methods .limit(10) and .batchSize(2) are called. How many queries will be made to the database if the entire collection is iterated over?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '5'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '2'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '10'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '20'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If a query is performed by filtering fields where there are no indexes, this will result in a ______ of the collection.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'COLLSCAN'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'IXSCAN'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'COUNT_SCAN'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'All of the above'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your schema has the following indexes. Which answer is true?'],
        [QuizMarkdownType.TEXT, `{ blueField: 1 }
{ redField: 1 }
{ purpleField: 1 }`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A write operation on'],
            [QuizMarkdownType.INLINE_CODE, 'blueField'],
            [QuizMarkdownType.TEXT, 'will update all indexes of'],
            [QuizMarkdownType.INLINE_CODE, 'blueField'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A write operation on'],
            [QuizMarkdownType.INLINE_CODE, 'redField'],
            [QuizMarkdownType.TEXT, 'will update the indexes of'],
            [QuizMarkdownType.INLINE_CODE, 'redField'],
            [QuizMarkdownType.TEXT, ', '],
            [QuizMarkdownType.INLINE_CODE, 'blueField'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'purpleField'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A write operation on'],
            [QuizMarkdownType.INLINE_CODE, 'blueField'],
            [QuizMarkdownType.TEXT, 'will update the indexes of'],
            [QuizMarkdownType.INLINE_CODE, 'redField'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'purpleField'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A write operation will not require updating any indexes'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_______ is the component responsible for routing shards amongst the cluster.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'mongos'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'mongod replica set'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'mongod'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'mongosh'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.INLINE_CODE, 'shardCollection'],
        [QuizMarkdownType.TEXT, 'must proceed'],
        [QuizMarkdownType.INLINE_CODE, 'createIndex'],
        [QuizMarkdownType.TEXT, 'to implement sharding.'],
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
        [QuizMarkdownType.TEXT, 'When executing'],
        [QuizMarkdownType.INLINE_CODE, 'shardCollection'],
        [QuizMarkdownType.TEXT, ', the command will verify that a compatible index exists.'],
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
        [QuizMarkdownType.TEXT, 'A shard key must exist for the following command to succeed.'],
        [QuizMarkdownType.CODE, `db.myCollection.createIndex(
  { orangeField: 1, _id: "hashed" },
  { name: "orangeField_1__id_hashed" }
)`],
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
        [QuizMarkdownType.TEXT, 'The command'],
        [QuizMarkdownType.INLINE_CODE, 'db[\'a-collection\']updateMany({...})'],
        [QuizMarkdownType.TEXT, 'is a server-side operation.'],
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
        [QuizMarkdownType.TEXT, 'In MongoDB, what does atomicity guarantee at the document level?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Entire document updates succeed or fail together'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only individual fields update independently'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Collections are always fully consistent'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Indexes update separately from documents'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If multiple fields in a single MongoDB document are updated in one operation, how are they applied?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'All changes are applied atomically together'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Each field is updated independently'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Only indexed fields are updated first'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Updates are eventually consistent'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which MongoDB feature provides atomicity across multiple documents?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Transactions'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Indexes'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sharding'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Aggregation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Without using transactions, what is the scope of atomicity in MongoDB?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Single document'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Entire collection'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Entire database'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Across all shards'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which operator ensures an atomic increment of a numeric field in MongoDB?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '$inc'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '$set'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '$push'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '$mul'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which condition causes a MongoDB transaction to become a distributed transaction?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Ops across multiple shards'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiple ops on unsharded collections'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'DDL operations'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Any operation falling under'],
            [QuizMarkdownType.INLINE_CODE, 'startTransaction()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which condition causes a MongoDB transaction to become a distributed transaction?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Updates broadcast to multiple shards'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiple ops on unsharded collections'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'DDL operations'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Any operation falling under'],
            [QuizMarkdownType.INLINE_CODE, 'startTransaction()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement is MOST accurate?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Shards store chunks'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Collections store chunks'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Chunks store shards'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Collections are shards'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following object is a ______'],
        [QuizMarkdownType.CODE, `{
  _id: ObjectId('69c5e0c2eb017217d5f0a637'),
  uuid: UUID('28439244-edec-410e-b3ab-07e5dd7100ab'),
  min: { 'metadata.geography': MinKey(), _id: MinKey() },
  max: { 'metadata.geography': 'e', _id: Long('-3757056892001451372') },
  shard: 'shard3',
  lastmod: Timestamp({ t: 2, i: 0 }),
  onCurrentShardSince: Timestamp({ t: 1774575815, i: 2659 }),
  history: [
    {
      validAfter: Timestamp({ t: 1774575815, i: 2659 }),
      shard: 'shard3'
    },
    {
      validAfter: Timestamp({ t: 1774575810, i: 17068 }),
      shard: 'shard5'
    }
  ]
},`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Chunk'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Shard'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Index'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Transaction'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In an update operation, a record must be routed to an appropriate chunk. If a shardKey'],
        [QuizMarkdownType.INLINE_CODE, 'shardKey'],
        [QuizMarkdownType.TEXT, 'can be defined as'],
        [QuizMarkdownType.INLINE_CODE, '{\'meta.orangeField\': \'s\', _id: Long(\'-676946465243817389\')}'],
        [QuizMarkdownType.TEXT, ', which answer represents a viable set of filters for finding an appropriate chunk?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `min: { $lte: shardKey },
max: { $gt: shardKey }`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `min: { $lt: shardKey },
max: { $gt: shardKey }`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `min: { $lt: shardKey },
max: { $gte: shardKey }`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `min: { $lte: shardKey },
max: { $gte: shardKey }`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer correctly expresses the comparison requirements for finding a chunk that can be used to determine a shard to which to write?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'min <= shardKey < max'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'max <= shardKey < min'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'min < shardKey < max'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'min <= shardKey <= max'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which series of commands successfully lists the indexes in a certain collection?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `db.getSiblingDB("thedb")
  .getCollection("thecollection")
  .getIndexes()`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `db["thedb"]
  .getCollection("thecollection")
  .getIndexes()`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `db.getSiblingDB("thedb")["thecollection"]
  .getIndexes()`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `const coll = db.getSiblingDB("config").collections.findOne({
  _id: DB_NAME + ".thecollection"
});`],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
