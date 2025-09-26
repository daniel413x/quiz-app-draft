import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'C#',
  slug: 'c-sharp',
  category: {
    slug: 'programming',
  },
  questions: [{
    question: [
      [QuizMarkdownType.TEXT, 'In C#, which keyword declares a read-only auto-property with an init-only setter?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'readonly']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'immutable']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'init']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'sealed']] },
    ],
    correctAnswer: '2',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which type in C# represents a reference to a method with a specific signature?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'delegate']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'event']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'action']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'func']] },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'What keyword prevents a class from being inherited in C#?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'final']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'sealed']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'static']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'private']] },
    ],
    correctAnswer: '1',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which of the following creates a nullable reference type context for the file in C# 8+?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '#nullable enable']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'using System.Nullable;']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '[Nullable(true)]']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '#nullable on']] },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'In C#, which keyword is used to await the completion of an asynchronous operation inside an async method?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'await']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'yield']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'defer']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'async']] },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which collection interface is deferred-executed and typically translated to SQL when used with ORMs like EF Core?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'IEnumerable<T>']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'IQueryable<T>']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ICollection<T>']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'IList<T>']] },
    ],
    correctAnswer: '1',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which statement ensures that an object implementing'],
      [QuizMarkdownType.INLINE_CODE, 'IDisposable'],
      [QuizMarkdownType.TEXT, 'is disposed even if an exception occurs?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'using']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'lock']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'checked']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'fixed']] },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'What is the primary difference between a'],
      [QuizMarkdownType.INLINE_CODE, 'struct'],
      [QuizMarkdownType.TEXT, 'and a'],
      [QuizMarkdownType.INLINE_CODE, 'class'],
      [QuizMarkdownType.TEXT, 'in C#?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.TEXT, 'Structs are value types; classes are reference types']] },
      { id: '1', answer: [[QuizMarkdownType.TEXT, 'Structs support inheritance; classes do not']] },
      { id: '2', answer: [[QuizMarkdownType.TEXT, 'Structs are always immutable; classes are mutable']] },
      { id: '3', answer: [[QuizMarkdownType.TEXT, 'Structs can be abstract; classes cannot']] },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which keyword is used to safely access a member when the receiver may be'],
      [QuizMarkdownType.INLINE_CODE, 'null'],
      [QuizMarkdownType.TEXT, '?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '?.']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '?:']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '??']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '=>']] },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which operator provides a fallback value when an expression evaluates to'],
      [QuizMarkdownType.INLINE_CODE, 'null'],
      [QuizMarkdownType.TEXT, 'in C#?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '?:']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '??']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '&&']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '||']] },
    ],
    correctAnswer: '1',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which feature creates immutable, value-based types with built-in value equality semantics in C# 9+?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'records']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'tuples']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'anonymous types']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'dynamic']] },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'In generics, which variance annotation allows a type parameter to be used as a method return (output) position only?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'in']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'out']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ref']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'params']] },
    ],
    correctAnswer: '1',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which keyword is used to acquire a mutual-exclusion lock on a reference-type object in C#?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'lock']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'mutex']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'monitor']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'sync']] },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which type should you prefer over'],
      [QuizMarkdownType.INLINE_CODE, 'string'],
      [QuizMarkdownType.TEXT, 'for efficient repeated concatenations in a loop?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'StringBuilder']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'ReadOnlySpan<char>']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'char[]']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Memory<char>']] },
    ],
    correctAnswer: '0',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which return type can reduce allocations for frequently-returned synchronous results in async APIs in modern C#/.NET?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Task']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'ValueTask']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'IAsyncResult']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'void']] },
    ],
    correctAnswer: '1',
  },
  {
    question: [
      [QuizMarkdownType.TEXT, 'Which pattern-matching construct allows concise mapping from an expression to a value without fall-through?'],
    ],
    answers: [
      { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'switch expression']] },
      { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'classic switch']] },
      { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'if-else chain']] },
      { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ternary nesting']] },
    ],
    correctAnswer: '0',
  },
  ],
} as QuizDataObject;
