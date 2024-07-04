'use client';

import special from '@/lib/data/special';
import { QuizMarkdownTuple } from '@/lib/data/types';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const arr = [['Arrays', 'fast random access', 'fixed size'],
  ['Arrays', 'static size', 'inefficient insertions/deletions'],
  ['ArrayList', 'dynamic size', 'slow for frequent insertions/deletions'],
  ['ArrayList', 'resizable array', 'slower for insertions/deletions'],
  ['LinkedLists', 'dynamic size', 'efficient insertions/deletions'],
  ['LinkedLists', 'sequential access', 'more memory per element'],
  ['Queues', 'FIFO order', 'fair processing'],
  ['CircularQueue', 'reuses space', 'efficient for fixed-size buffers'],
  ['PriorityQueue', 'sorted by priority', 'not by insertion order'],
  ['DoubleEndedQueue', 'insert/remove from both ends', 'versatile operations'],
  ['Stacks', 'LIFO order', 'simple and fast for nested tasks'],
  ['HashMap', 'fast lookups', 'no order maintained'],
  ['TreeMap', 'sorted keys', 'slower lookups'],
  ['LinkedHashMap', 'maintains insertion order', 'slightly slower than HashMap'],
  ['HashSet', 'unique elements', 'fast lookups'],
  ['TreeSet', 'sorted elements', 'slower than HashSet'],
  ['LinkedHashSet', 'maintains insertion order', 'slower than HashSet'],
  ['Contiguous', 'memory faster access', 'limited by size'],
  ['NonContiguous', 'memory flexible size', 'slower access'],
  ['EqualsMethod', 'compares object equality', 'custom implementation'],
  ['HashCode', 'generates hash', 'used in hash-based collections'],
  ['Stack vs Heap', 'Stack stores method calls', 'Heap stores objects'],
  ['BigONotation', 'measures algorithm efficiency', 'worst-case scenario'],
  ['RelationalModel', 'Tables', 'Columns', 'Rows', '1:1 relationships', '1relationships', 'M relationships'],
  ['PrimaryKeys', 'unique identifier for a row'],
  ['ForeignKeys', 'reference to a primary key in another table'],
  ['Normalization', '1NF eliminates duplicate columns', '2NF removes subsets of data', '3NF eliminates transitive dependency', 'BCNF strict version of 3NF'],
  ['DMLStatements', 'INSERT adds new rows', 'UPDATE modifies existing rows', 'DELETE removes rows'],
  ['DDLStatements', 'CREATE TABLE defines a new table', 'ALTER TABLE modifies an existing table', 'DROP TABLE deletes a table', 'Constraints define rules for data'],
];

// stacks are generally FILO but the call stack is LIFO

const SpecialPage = () => {
  const ln = special.questions.length;
  const ln2 = arr.length;
  const [s, setS] = useState<QuizMarkdownTuple[] | undefined>();
  const [ss, setSS] = useState<string[]>();
  useEffect(() => {
    const i = setInterval(() => {
      const r = Math.floor(Math.random() * ln);
      const q = special.questions[r || 0];
      setSS(arr[Math.floor(Math.random() * ln2)]);
      setS(q?.answers.find((a) => a.id === q.correctAnswer)?.answer);
    }, 750);
    return () => {
      clearInterval(i);
    };
  }, []);
  return !s ? null : (
    <div className="flex flex-col">
      {ss?.map((str, i) => (
        <span
          key={i}
          className={cn({
            'font-black text-red-900': i === 0,
          })}
        >
          {str}
        </span>
      ))}
      {/* {renderMarkdown(s)} */}
    </div>
  );
};

export default SpecialPage;
