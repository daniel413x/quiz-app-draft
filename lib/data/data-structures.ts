import circularLinkedList from '@/public/circular-linked-list.png';
import doubleEndedQueue from '@/public/double-ended-queue.png';
import singlyLinkedList from '@/public/singly-linked-list.png';
import doublyLinkedList from '@/public/doubly-linked-list.png';
import squareIllustrationLinkedList from '@/public/square-illustration-linked-list.png';
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Data Structures',
  slug: 'data-structures',
  category: {
    slug: 'data',
  },
  questions: [

    {
      question: [
        [QuizMarkdownType.TEXT, 'Arrays use ________ memory, while linked lists use _______ memory.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'contiguous, non-contiguous'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'non-contiguous, contiguous'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'non-contiguous, non-contiguous'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'contiguous, contiguous'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a heap in the context of data structures?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A complete binary tree that satisfies the heap property.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A sorted array of elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A linked list with no order.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A stack that maintains order.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'How does contiguous memory allocation affect memory access speed?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It generally increases speed due to spatial locality'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It decreases speed due to scattered locations'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It has no effect on speed'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It depends on the operating system'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a common example of a data structure that uses contiguous memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked List'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Graph'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Tree'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What are the advantages of non-contiguous memory allocation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Reduces fragmentation and allows dynamic allocation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Improves spatial locality'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Increases memory speed'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Enhances data integrity'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does fragmentation occur in contiguous memory allocation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Unused memory blocks cannot be allocated to new data'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Memory blocks are always perfectly filled'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'All memory is used efficiently'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It occurs only in non-contiguous memory'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is paging in the context of non-contiguous memory allocation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dividing memory into fixed-size pages to reduce fragmentation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Allocating continuous blocks of memory'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorting data within pages'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Increasing memory speed'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do linked lists relate to non-contiguous memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They store elements in non-contiguous memory locations'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They store all elements contiguously'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They do not use memory'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They enhance cache performance'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the impact of contiguous memory on cache performance?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It improves cache performance due to spatial locality'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It degrades cache performance'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It has no effect on cache'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It depends on the type of cache'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does virtual memory relate to non-contiguous memory allocation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It uses non-contiguous physical memory for logical contiguous addresses'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It requires physical contiguous memory'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It does not use memory at all'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It enhances data access speed'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a drawback of non-contiguous memory allocation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Potentially higher access times due to scattered memory locations'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Increased spatial locality'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Requires less complex management'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It always uses less memory'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Nodes in a singly linked list have references to and from the next and previous nodes'],
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
        [QuizMarkdownType.TEXT, 'Nodes in a doubly linked list have references to and from the next and previous nodes'],
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
        [QuizMarkdownType.TEXT, 'A data structure that is not suitable for caching would be a'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Queue/Deque'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A priority queue using a max heap executes tasks based on priority. In other words, the queue executes tasks based on'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The largest current item in the heap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The smallest current item in the heap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The most recently added item in the heap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does memory allocation in arrays differ from that in linked lists?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays use contiguous memory, linked lists use non-contiguous memory'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Both use contiguous memory'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both use non-contiguous memory'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked lists have fixed size, arrays do not'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What role does the memory management unit (MMU) play in non-contiguous memory allocation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It translates virtual addresses to physical addresses'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It allocates memory contiguously'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It enhances physical memory size'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It manages the CPU cache'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why might an operating system prefer non-contiguous memory allocation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To better utilize available memory and avoid fragmentation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To increase memory speed'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To simplify programming'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To reduce hardware costs'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do data access patterns differ between contiguous and non-contiguous memory?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Contiguous memory allows sequential access, non-contiguous requires pointer traversal'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Both require pointer traversal'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both allow sequential access'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Data access patterns do not differ'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In priority queue utilizing a max heap, which of the following is true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The largest element of the heap is the highest priority item.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The smallest element of the heap is at the root.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'All elements of the heap are sorted in ascending order.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Elements are stored in a heap and priority is mapped in a HashMap.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a max heap, which of the following is always true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The largest element is at the root.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The smallest element is at the root.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'All elements are sorted in ascending order.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Elements are stored in a linked list.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which operation on a heap allows you to remove the root element?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Extract'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Insert'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sort'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Search'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the time complexity of inserting an element into a binary heap?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'O(log n)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'O(1)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n^2)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which application commonly uses heaps as a core data structure?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority queues'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Graph traversal'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'String manipulation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Matrix operations'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer best imitates a double-ended queue in an undo-redo data structure?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Two arrays that handle undoes by popping the last element from an undo array and adding it to the redo array and vice versa for redoes'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A single array that handles undoes by popping the last element and moving it to the beginning of the array and vice versa for redoes'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Either answer'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither answer'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A'],
        [QuizMarkdownType.INLINE_CODE, 'TreeMap'],
        [QuizMarkdownType.TEXT, 'in Java sorts its constituents according to the natural order of their'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Keys'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Values'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Bytes'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Gradients'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following code outputs'],
        [QuizMarkdownType.INLINE_CODE, 'Top Student: Diana with a grade of 90'],
        [QuizMarkdownType.TEXT, ', which is incorrect. Which answer explains the problem with the code?'],
        [QuizMarkdownType.CODE, `// Create a TreeMap to store student names and grades
        TreeMap<String, Integer> studentGrades = new TreeMap<>();

        // Add some students and their grades
        studentGrades.put("Alice", 85);
        studentGrades.put("Bob", 92);
        studentGrades.put("Charlie", 78);
        studentGrades.put("Diana", 90);

        // Display the students and their grades in sorted order
        System.out.println("Student Grades:");
        for (String student : studentGrades.keySet()) {
            System.out.println(student + ": " + studentGrades.get(student));
        }

        // Get and display the student with the highest grade
        String topStudent = studentGrades.lastKey();
        System.out.println("\nTop Student: " + topStudent + " with a grade of " + studentGrades.get(topStudent));`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'In Java, a'],
            [QuizMarkdownType.INLINE_CODE, 'TreeMap'],
            [QuizMarkdownType.TEXT, 'sorts its constituents based on the natural order of their keys, not their values'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'In Java, a'],
            [QuizMarkdownType.INLINE_CODE, 'TreeMap'],
            [QuizMarkdownType.TEXT, 'sorts its constituents based on the natural order of their values, not their keys'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'In Java, a'],
            [QuizMarkdownType.INLINE_CODE, 'TreeMap'],
            [QuizMarkdownType.TEXT, 'sorts its constituents based on the weighted calculated of their keys and values'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a LinkedHashMap primarily used for?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Maintaining insertion order of elements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorting keys in natural order.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Implementing a stack data structure.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Enforcing unique elements only.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which feature differentiates LinkedHashMap from a regular HashMap?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Maintaining a doubly linked list to preserve order.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Allowing duplicate keys.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorting elements by key.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Enforcing thread safety.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In what scenario would a LinkedHashMap be preferable to a HashMap?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'When the order of iteration needs to match the order of insertion.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'When memory usage needs to be minimized.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'When keys need to be sorted in natural order.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'When duplicate values need to be stored.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What advantage does LinkedHashMap offer for caching mechanisms?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Maintaining access order for efficient cache eviction.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Reducing memory footprint.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Automatically sorting cached items by size.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Increasing lookup speed.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does a LinkedHashMap handle hash collisions compared to a regular HashMap?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It handles collisions similarly by using chaining or open addressing.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It does not handle collisions.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It resolves collisions by sorting keys.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It stores colliding keys in a list.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a circular queue, when the next position of the rear is the front, this indicates that '],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The queue is full'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The queue is empty'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The queue is realized erroneously'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Vector databases are based on the concept of'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMaps'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMaps'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMaps'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Redis databases are based on the concept of'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMaps'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Stacks'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMaps'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMaps'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A TreeMap is distinguished by'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Its constituents being sorted according to the natural order of their keys'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Its constituents being sorted according to the natural order of their values'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Its constituents being unsorted but optimized for direct index access'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Being similar to a LinkedHashMap but optimized for insert and delete operations'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In JavaScript, an object can store key-value pairs, making them similar to ______'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Web browser history uses which of the following data structures?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Stacks'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Queues'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LIFO'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Heap'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a hash table?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A data structure that maps keys to values using a hash function.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A linear list of elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A type of linked list.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A tree structure for storing sorted data.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary advantage of using a hash table?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Fast data retrieval.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Reduced memory usage.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorted data storage.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Simple structure.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a common problem encountered in hash tables?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Indexing'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Searching'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Collision'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Deletion'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How are collisions typically resolved in hash tables?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Binary search'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked lists (chaining) or open addressing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorting'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stacking'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the time complexity of inserting an element into a hash table?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'O(log n)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n log n)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'O(1)'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which hash table operation is typically the most efficient?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Insertion'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Deletion'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lookup'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'All of the above'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a hash function?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A function that maps data of arbitrary size to fixed-size values.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A function that sorts data.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A function that searches for an element.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A function that deletes elements.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it important for a hash function to distribute keys uniformly across the hash table?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To reduce the likelihood of collisions.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To increase memory usage.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To simplify the structure.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To sort the data.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is meant by "load factor" in a hash table?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The ratio of the number of elements to the size of the hash table.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The speed of data retrieval.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The depth of the hash tree.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The memory usage of the hash table.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the worst-case time complexity for searching in a hash table with collisions?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'O(log n)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n log n)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'O(1)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An applied usage of a double-ended queue is a'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Undo system'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Task scheduling system'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Malware scanner'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Web browser history'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the concept illustrated below?'],
      ],
      image: doublyLinkedList,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular linked list'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority queue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the concept illustrated below?'],
      ],
      image: doubleEndedQueue,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Double-ended queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular linked list'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'FIFO'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building a task scheduler where tasks must be executed based on priority. What data structure would be most suitable?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are developing a ticketing system where customers are served in the order they arrive but can also switch to a different line. Which data structure is ideal?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a network router, data packets must be processed in a cyclic order. Which data structure is most appropriate?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked List'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are implementing an undo/redo feature in a text editor. Which data structure would best facilitate this?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a print spooler, print jobs need to be processed in order of arrival, but with the ability to requeue jobs. What data structure fits this scenario?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For a real-time gaming application, tasks must be scheduled based on their urgency. Which data structure should be used?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are managing a call center where calls must be handled in the order they arrive, but the most urgent calls can be prioritized. What structure is suitable?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked List'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a robotics control system, commands need to be sent to robots in a cyclical manner. Which data structure is best?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'You need a data structure that provides fast access to elements based on keys. Which should you choose?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'ArrayList'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to maintain a map where keys are sorted in natural order. Which data structure should you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'HashSet'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For a caching mechanism, you need a map that maintains insertion order. What should you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'PriorityQueue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which data structure would you choose for a phone book application to keep contacts sorted by name?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'ArrayList'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need a map that allows for quick lookups but also iterates over elements in the order they were added. What is suitable?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedList'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a web application, you need to store user sessions with fast access. Which map would you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which data structure would you use for a leaderboard where scores need to be displayed in order?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to create a cache that maintains the order of recently accessed items. Which map should you choose?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'PriorityQueue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which map should be used when you need to ensure that the elements are sorted according to a custom comparator?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'HashSet'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a shopping cart system, you need to maintain item insertion order for display. What data structure is ideal?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'ArrayList'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which map is suitable for scenarios where you frequently need to check the highest or lowest key?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For storing and retrieving user preferences where quick access is needed, which map would be optimal?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Queue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In an analytics application, you need to keep track of events in chronological order. Which map fits best?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to store product information where products can be quickly retrieved by their ID. What map would you choose?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'ArrayList'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which map allows for maintaining elements in the order they are accessed, making it useful for caching strategies?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'LinkedHashMap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'TreeMap'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'PriorityQueue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For a simulation where processes must be handled in the order they start but can be reprioritized, which structure is ideal?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In an operating system, processes need to be executed based on their priority level. Which data structure is most effective?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are designing a system where users can navigate through a list of items cyclically. Which data structure is most suitable?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked List'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For a parking system that processes cars in the order they arrive but allows for emergency exits, which structure should be used?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a project management tool, tasks must be added to both the beginning and end of a list. Which data structure would you use?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are developing a messaging app where messages are processed based on priority and timestamps. What data structure is appropriate?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular Queue'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Double Ended Queue'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the concept illustrated below?'],
      ],
      image: circularLinkedList,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority queue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the concept illustrated below?'],
      ],
      image: circularLinkedList,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority queue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the concept illustrated below?'],
      ],
      image: singlyLinkedList,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular linked list'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Priority queue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a circular queue?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A queue where the last position is connected to the first.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A queue implemented using linked lists.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A queue where elements are sorted.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A queue that supports priority elements.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What problem does a circular queue solve compared to a linear queue?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Efficiently utilizes storage by reusing freed space.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Allows direct access to the middle elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Supports dynamic resizing.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Automatically sorts elements.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a circular queue, what condition indicates that the queue is full?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The next position of the rear is the front.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The rear is at the maximum index.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The front is at the maximum index.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'All elements are NULL.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you handle the "wrap around" condition in a circular queue?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Use modulo operation with the queue size.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Resize the queue dynamically.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Use a linked list to manage elements.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Shift all elements to the start of the array.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a common use case for a circular queue?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Managing tasks in a round-robin scheduling algorithm.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorting large datasets.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Depth-first search in graphs.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Implementing binary trees.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does FIFO stand for in data structures?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'First In, First Out'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Fast In, Fast Out'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'First In, Fast Out'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Fast In, First Out'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which data structure is most commonly associated with the FIFO principle?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Queue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked List'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which scenario is FIFO particularly useful?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Scheduling tasks in an operating system'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Undo functionality in applications'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Depth-first search in graphs'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Recursive algorithms'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens to the first element added to a FIFO queue when it reaches capacity?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It is removed to make space for a new element.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It is overwritten by a new element.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It remains until all other elements are removed.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It is moved to the end of the queue.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In FIFO, if there is a task 1 and task 2, task 2 must await task 1\'s completion.'],
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
        [QuizMarkdownType.TEXT, 'Which of the following is a real-world example of the FIFO principle?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Customers waiting in line at a bank'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Books stacked on a shelf'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Plates stacked in a kitchen cabinet'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Nested Russian dolls'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a key advantage of a singly linked list over a doubly linked list?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Less memory usage per node.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Faster traversal.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Ability to traverse in both directions.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Simpler node deletion process.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a circular linked list, what makes it different from a regular linked list?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The last node points back to the first node.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Nodes are arranged in a circular order.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It allows for quick random access.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It uses a dynamic array for storage.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What operation on a linked list is generally more efficient than on an array?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Insertion of elements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Accessing elements by index.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorting elements.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Memory deallocation.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of linked list allows traversal in both directions?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly linked list.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly linked list.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular linked list.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Array list.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a common use case for a linked list in programming?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Implementing queues or stacks.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Implementing hash tables.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Implementing binary trees.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Implementing graphs.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a major disadvantage of using linked lists compared to arrays?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Slower access time for elements by index.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Higher memory usage due to pointers.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Fixed size once created.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Inability to store duplicate elements.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why can linked lists be less efficient in terms of memory usage?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Each node requires additional memory for pointers.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Data is stored contiguously in memory.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They require manual memory management.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They use dynamic arrays internally.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a drawback of linked lists when it comes to search operations?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Searching requires traversing the list, leading to slower performance.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They can only be searched using binary search.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They do not support searching for elements.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Searching is done in constant time.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is an advantage of linked lists when compared to arrays?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic size that can grow or shrink as needed.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Faster access time for elements by index.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Memory usage is more efficient.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Elements are stored contiguously.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why are linked lists preferred for implementing queues or stacks?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They allow for efficient insertions and deletions.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They provide random access to elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They consume less memory per element.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They maintain elements in sorted order.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In what scenario is a linked list particularly advantageous?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'When frequent insertions and deletions are required.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'When data needs to be accessed by index frequently.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'When minimal memory overhead is critical.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'When implementing LRU caches.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a circular queue?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A queue where the last position is connected to the first.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A queue implemented using linked lists.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A queue where elements are sorted.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A queue that supports priority elements.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What problem does a circular queue solve compared to a linear queue?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Efficiently utilizes storage by reusing freed space.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Allows direct access to the middle elements.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Supports dynamic resizing.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Automatically sorts elements.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a circular queue, what condition indicates that the queue is full?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The next position of the rear is the front.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The rear is at the maximum index.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The front is at the maximum index.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'All elements are NULL.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you handle the "wrap around" condition in a circular queue?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Use modulo operation with the queue size.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Resize the queue dynamically.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Use a linked list to manage elements.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Shift all elements to the start of the array.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a common use case for a circular queue?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Managing tasks in a round-robin scheduling algorithm.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorting large datasets.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Depth-first search in graphs.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Implementing binary trees.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a priority queue?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A data structure where each element has a priority, and elements are served based on priority.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A queue where elements are processed in FIFO order.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A stack that allows priority access.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A collection of elements sorted by insertion order.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a priority queue, how is the order of elements determined?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By the priority assigned to each element.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By the order of insertion.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By the element size.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By alphabetical order.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which data structure is commonly used to implement a priority queue?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Heap'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Array'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked List'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a common use case for a priority queue?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Task scheduling in operating systems.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Sorting elements alphabetically.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Depth-first search in graphs.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Storing elements in insertion order.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a max-priority queue, which element is dequeued first?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The element with the highest priority.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The element with the lowest priority.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The first element added.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The last element added.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a key difference between singly linked lists and doubly linked lists?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked lists have nodes with one pointer, while doubly linked lists have nodes with two pointers.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked lists can traverse in both directions, doubly linked lists cannot.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked lists use more memory per node.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked lists have a fixed size.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of linked list allows for easier backward traversal?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In terms of memory usage, which type of linked list typically requires more memory per node?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both require the same amount of memory'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Memory usage depends on the data stored'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of linked list is more efficient for operations that require frequent traversals in both directions?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both are equally efficient'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither is efficient for such operations'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of linked list generally has a simpler implementation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both have the same complexity'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Implementation complexity depends on the language used'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of linked list generally has a simpler implementation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Singly-linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Doubly-linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both have the same complexity'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Implementation complexity depends on the language used'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Because linked lists do not store their constituents in contiguous memory locations,'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Insertions and deletions do not require shifting each constituent'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Insertions and deletions require traversing each node in the list.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Insertions and deletions require shifting each constituent'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Insertions and deletions exclude the possibility of dynamic allocation of memory'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Linked lists do not require shifting of elements during insertions or deletions because'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Elements in a linked list are not stored in contiguous memory locations.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked lists use more memory for each element.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked lists have a built-in shifting mechanism.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays require shifting because they are dynamic in size.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Linked lists do not require shifting of elements during insertions or deletions because'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Elements in a linked list are not stored in contiguous memory locations.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked lists use more memory for each element.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked lists have a built-in shifting mechanism.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays require shifting because they are dynamic in size.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following could be true of a task scheduling system?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A task scheduling system could use a data structure that is both FIFO and priority queue-based'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only the term "priority queue" makes sense in the context of a task scheduling system'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'FIFO does not make sense in the context of a task scheduling system'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither FIFO nor priority queues make sense in the context of a task scheduling system'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Traversing a list to find an element takes ___ time because each element must be checked.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'O(n)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'O(1)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'O(log n)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'O(n^2)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The time complexity of shifting elements in an array during insertions or deletions is'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'O(n)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'O(1)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'O(log n)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'O(n^2)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The time complexity of shifting elements in a linked list during insertions or deletions is'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'O(n)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'O(1)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'O(log n)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'O(n^2)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following illustration could be representative of a ________'],
      ],
      image: squareIllustrationLinkedList,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked list'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Stack'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Hash table'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following data structure patterns is most vulnerable to fragmentation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Contiguous memory'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Linked list'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Non-contiguous memory'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'HashMap'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In your custom data structure, nodes are connected by references (pointers). This means your data structure is based on'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Non-contiguous memory'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Circular memory'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Contiguous memory'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Arrays'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In C++, the speed of accessing an array element by index is _____'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'O(1)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'O(n)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'O(0)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'O(log n)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building a playlist feature where users can add duplicate tracks, and the app must preserve the exact order of insertion and allow quick index-based access (e.g., get the 5th song). Which interface best fits?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'List']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Set']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Queue']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Map']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to maintain a catalog of unique product SKUs with no duplicates and you don’t care about preserving insertion order or indexing by position. Which interface should you expose to callers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Set']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'List']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Deque']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Map']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are implementing a URL shortener service that maps short codes to destination URLs and needs O(1) style key lookups by short code. Which interface should the storage layer primarily implement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Map']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'List']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Set']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Queue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A background worker processes incoming jobs strictly FIFO. Producers may need to wait when the buffer is full, and consumers should wait when it is empty. Which interface is the most appropriate abstraction?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'BlockingQueue']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Queue']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Deque']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ConcurrentMap']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need a double-ended buffer for a chat app that can add/remove messages at both the head and the tail efficiently (e.g., prepend history, append new). Which interface matches this usage?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Deque']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Queue']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'List']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Set']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your trading service stores open orders keyed by timestamp and must support fast range queries like “all orders between 10:00 and 10:05,” as well as ceiling/floor lookups. Which key-value interface should you prefer?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'NavigableMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Map']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ConcurrentMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'SortedSet']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are implementing a leaderboard that must keep user IDs unique and sorted by score, supporting operations like getting the next higher/lower score neighbor. Which collection interface should back this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'NavigableSet']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Set']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'List']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Queue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A microservice caches session tokens and must support concurrent reads and writes from many threads with atomic put-if-absent semantics. Which key-value interface best expresses this contract?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ConcurrentMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Map']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'NavigableMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'BlockingQueue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A scheduler needs a structure that always serves the highest-priority task first and may contain duplicate priorities. You want the public API to reflect a “priority queue” behavior. Which interface should clients depend on?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Queue']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Deque']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'List']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Set']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building a bounded work queue for image processing that sometimes needs to push tasks to the front (urgent reprocess) and pop from both ends under backpressure, with producers/consumers blocking appropriately. Which interface communicates this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'BlockingDeque']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Deque']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'BlockingQueue']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Queue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building a product catalog cache that is read-heavy, requires fast random index-based lookups, and will run single-threaded behind a REST API. Which list implementation is the best default choice?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You maintain a legacy multi-threaded batch processor where a shared list is modified by several threads and you need built-in synchronization with minimal code changes. Which list should you pick?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are implementing an LRU-like queue of recent user IDs where you frequently add at the tail and remove from the head during evictions. Random access is not required. Which structure is most suitable?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need a list to back paginated API responses where you often access the nth element and iterate, with occasional appends at the end. Concurrency is handled elsewhere. What should you choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are refactoring a legacy module that relies on Enumeration and expects a synchronized list. You want to keep behavior identical without wrapping a non-thread-safe list. Which implementation aligns best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A job scheduler keeps a rolling window of tasks, frequently inserting and removing near the beginning while scanning sequentially. Random index lookups are rare. Which list is preferable?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are writing a reporting service that loads results into memory once and then performs many random-access reads by index while generating CSV pages. Which list gives the best overall performance profile?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need a thread-safe shared buffer in a legacy system where introducing new concurrency utilities is not feasible and correctness must rely on intrinsic synchronization of the list implementation. What do you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are implementing an undo history where you frequently push and pop from the front and back while iterating linearly over recent actions. Random index access is unimportant. Which list suits best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A feature flag service composes a list of active flags once per request and then performs frequent index lookups while rendering templates. Single-threaded per request, high read-to-write ratio. Which list is ideal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You cache product DTOs per request and need fast random index access while iterating. Writes are minimal and single-threaded per request context. Which structure is the best default?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building a small in-memory cache for a REST gateway that must preserve insertion order when iterating keys for debug dumps, while still providing O(1)-ish lookups by key. Which map fits best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your pricing service needs sorted keys and efficient range queries like get all price tiers between two bounds, plus floor/ceiling lookups. Which map interface should you select?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You’re counting occurrences of event types from a Kafka topic in memory, and you need the fastest average-time key lookups with no ordering guarantees. Which structure should back the counter?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are implementing a bounded producer–consumer queue for image processing. Producers should block when the buffer is full and consumers should block when it is empty. Which structure is appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayBlockingQueue']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'PriorityQueue']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A job scheduler must always execute the task with the highest priority (lowest numeric value) first. Duplicates may exist and you do not need stable ordering for ties. Which structure should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'PriorityQueue']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need a lightweight double-ended buffer for a web socket service to push messages at the tail and occasionally pop from the head, with fast stack/queue ops and no random access needs. Which structure fits best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You maintain a legacy multi-threaded module where a single shared list is mutated by several threads, and you must rely on intrinsic synchronization of the list implementation (no wrappers). What is the safest drop-in?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building a recent-activity buffer where inserts and removals frequently happen at both ends, and you scan sequentially. Random index access is rare and not a priority. Which list is preferable?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'PriorityQueue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need an iteration-order-preserving cache that evicts the eldest entry when size exceeds a threshold, and you want predictable iteration order for metrics dumps. Which map is the best base for this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A reporting endpoint loads 50k order DTOs once and then performs many random index-based reads while building CSV pages. Mutations are rare and single-threaded per request. Which class is the best fit?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'PriorityQueue']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayBlockingQueue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A legacy batch job shares a single list between multiple threads. You cannot refactor to modern concurrency utilities and must rely on built-in synchronization of the list implementation. What should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building a bounded producer–consumer buffer for image processing. Producers must block when the buffer is full; consumers must block when it is empty. Which class is appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayBlockingQueue']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your scheduler must always execute the highest-priority task first (lowest numeric priority). Stability among equal priorities is not required. Which class should back the ready queue?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'PriorityQueue']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayBlockingQueue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need a fast key→value store for counting event types from Kafka with no ordering requirements and the best average-time lookups. Which map is the default choice?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An audit endpoint must iterate keys in the exact order they were inserted while still providing near O(1) key lookups. Which map class should power this feature?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your pricing service stores tier thresholds and must support range queries (between lower and upper bounds) plus floor/ceiling lookups on keys. Which map provides the needed ordering semantics?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need a lightweight double-ended buffer for websocket messages where you frequently push at the tail and pop from the head, with occasional stack-like operations, and you do not need random index access. Which class fits best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'PriorityQueue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A recent-activity feed frequently inserts and removes items at both ends, and you iterate sequentially. Random index access is not a priority. Which list implementation is preferable?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayBlockingQueue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want an LRU-like in-memory cache that evicts the eldest entry when size exceeds a threshold and also preserves a predictable iteration order for metrics dumps. Which base map is the right starting point?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are implementing a pricing engine that must support queries like “find the next higher price tier” and “all tiers between $X and $Y.” Keys must remain sorted at all times with fast floor/ceiling lookups. Which class should you choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need a time-series index keyed by epoch milliseconds that supports efficient range scans (e.g., last 5 minutes) and nearest-key navigation. Which map best supports subMap/headMap/tailMap operations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A feature toggle service stores flags with precedence based on an ordered environment level (e.g., DEV < STAGE < PROD). You want the map to enforce this custom order globally via a Comparator. Which implementation is appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'PriorityQueue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An address autocomplete endpoint must return streets in alphabetical order within a prefix range (e.g., keys from “Ma” to “Me”). You also need fast lookup of the first and last keys in that range. Which map should back this index?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You maintain exchange order books keyed by price. You need best-bid/best-ask retrieval, plus quick navigation to the next higher/lower price level for matching. Which map is the most suitable backbone for the price levels?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A geo service stores city data keyed by country+state+city with a custom lexicographic ordering that groups by country and state. You need sorted iteration and range slices by key prefix. Which map fits these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your quotas service stores per-tenant limits keyed by integer threshold. The API must answer queries like floorEntry(usage) and ceilingEntry(usage) to find the nearest threshold. Which map gives these navigable operations out of the box?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayBlockingQueue']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For a rate-limiting dashboard, you need to iterate accounts sorted by their current request count to produce percentile cutoffs and support quick “next higher count” navigation. Which map structure aligns best with these needs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'PriorityQueue']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You’re implementing a config store keyed by version strings that must always iterate in natural order (e.g., 1.0.0 < 1.0.10 < 1.1.0) with a custom Comparator. You also need subMap to slice a version range. Which map should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A monitoring service tracks latency percentiles per endpoint using buckets keyed by upper-bound latency. You need fast retrieval of the smallest bucket greater than or equal to a value and efficient range iteration across buckets. Which map is ideal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayBlockingQueue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your telemetry service stores events keyed by epoch milliseconds and must support range scans (last 5 minutes) plus nearest-key navigation (floor/ceiling). Which map should you select?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You maintain a postcode directory keyed by postal code and need efficient prefix-range queries (e.g., all codes between 20000 and 20999) and quick next-higher/next-lower lookups. Which map should you select?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A configuration store is keyed by semantic version strings and must iterate in sorted version order with a custom Comparator and support subMap for version ranges. Which map should you select?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An exchange order book stores levels keyed by price and requires best-bid/best-ask plus fast navigation to adjacent price levels. Which map should you select?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A rate-limiting dashboard buckets users by request-count thresholds and needs floorEntry/ceilingEntry to find the nearest bucket for a given count, plus efficient iteration across a range. Which map should you select?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeMap']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashMap']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashMap']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to store a unique set of usernames and always iterate them in alphabetical order, with quick access to the next/previous username relative to a given value. Which class should you choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeSet']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashSet']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashSet']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A telemetry service stores unique latency measurements (in ms) and must answer queries like floor(42) and ceiling(42) for percentile-like calculations. Which set structure best supports this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeSet']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashSet']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashSet']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'PriorityQueue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For an autocomplete feature, you need a unique dictionary of tags that stays sorted and supports efficient range queries (e.g., all tags from "ma" to "me"). Which implementation fits best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeSet']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashSet']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'HashSet']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You maintain a collection of unique release versions (e.g., 1.0.0, 1.0.10, 1.1.0) and need a custom Comparator to ensure natural version ordering with quick higher/lower navigation. Which class should you use as the backing set?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeSet']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashSet']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedList']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashSet']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your pricing engine keeps a unique set of discount thresholds and must frequently fetch the nearest threshold above/below a given cart value. Which set provides these navigable operations out of the box?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeSet']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashSet']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An access-control module keeps a unique list of allowed IP prefixes and must iterate them in sorted order for efficient matching and diagnostics. Which collection suits this requirement best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeSet']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashSet']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'HashSet']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'PriorityQueue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a recommendation engine, you keep a unique set of candidate product IDs and need deterministic sorted iteration for stable page rendering, plus the ability to quickly find the next larger ID. Which implementation should back this set?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeSet']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashSet']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashSet']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayDeque']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your scheduler stores unique execution times (timestamps) for upcoming jobs and needs to poll the earliest time and navigate to the next one after a given cutoff while keeping the set strictly unique. Which class should you choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeSet']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'PriorityQueue']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashSet']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayBlockingQueue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to deduplicate and sort unique email domains for an allowlist, and also support fast subset iterations over ranges (e.g., domains between "g" and "m"). Which set should power this allowlist?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeSet']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashSet']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashSet']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'ArrayList']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For a feature-rollout system, you maintain a unique set of percentile cut points (integers 0–100) and need efficient operations to find the closest existing cut below/above an input. Which set implementation is most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'TreeSet']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'HashSet']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'LinkedHashSet']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'Vector']] },
      ],
      correctAnswer: '0',
    },

  ],
} as QuizDataObject;
