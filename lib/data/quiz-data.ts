/* eslint-disable no-template-curly-in-string */
import uiUx from './ui-ux';
import principlesOfCybersecurity from './principles-of-cybersecurity';
import statistics from './statistics';
import tensorflow from './tensorflow';
import probabilityTheory from './probability-theory';
import englishIi from './english-ii';
import geometry from './geometry';
import shellScripting from './shell-scripting';
import data from './data';
import linearAlgebra from './linear-algebra';
import awsCloudPractitioner from './aws-cloud-practitioner';
import comptiaNetworkPlus from './comptia-network-plus';
import java from './java';
import mlPrinciples from './ml-principles';
import python from './python';
import javascript from './javascript';
import learnersPermit from './learners-permit';
import { QuizDataObject, QuizMarkdownType } from './types';
import principlesOfProgramming from './principles-of-programming';
import sql from './sql';
import dataStructures from './data-structures';
import special from './special';
import javaIi from './java-ii';
import moduleI from './module-i';

type QuizData = {
  [key: string]: QuizDataObject;
};

const quizData: QuizData = {
  'learners-permit': learnersPermit,
  // ===========
  javascript,
  python,
  // ===========
  'ml-principles': mlPrinciples,
  // ===========
  java,
  'module-i': moduleI,
  // ===========
  'comptia-network-plus': comptiaNetworkPlus,
  'aws-cloud-practitioner': awsCloudPractitioner,
  'linear-algebra': linearAlgebra,
  data,
  'shell-scripting': shellScripting,
  // https://www.google.com/search?sca_esv=4ce04de13f7e18f6&sxsrf=ADLYWII1iTpZHmuNg5Q0ZkCuaaZF-lJHyw:1717784095817&q=%D0%BD%D0%B0+%D0%B4%D0%B8%D0%B0%D0%B3%D0%BE%D0%BD%D0%B0%D0%BB%D0%B8&uds=ADvngMjUXgvBgt_rBpnNYEl3NfSff0qvnJ7zYe5a1uwoRWmk6v-6UySfSLMVq3CG8Bfzu4H4-1drA1P-pjmDK0CtVdD1DZWcCi15vn2xrYArE2sAlLOJLxWF8QB6ijiAO55yCeIHqayIp36tsI4n8A5GZczXLWCjivis1lAgkGTCnBfU3J9CjV4r23Y4Yf_1cpoDEW48R0ucs50xrcZ1gRyJzJJq09nHqJfy9XONCeK-lkkke3l2E9OUCnoA1It3mF5FvSVBn3JQweiBPF8ZfWgawwfNEOxfax0zjEiLe71u7PVptgNzkj61e4ddhlCRmh_ZeJGw53DTRNIYkYp2WUSc65196CtvzEMOUPShZmiWdBBBjZHMZmYUlL_NNoA1UN0izKFEogwBwEwAioVHKFRrVrNW1bpBmcBQrMfjF7SS28luAc9vDGk&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwjJydO2jMqGAxWev4kEHZ5pBg4QtKgLegQIFhAB&biw=2560&bih=1302&dpr=1#vhid=kFmwnFr1_EWHdM&vssid=mosaic
  geometry,
  'english-ii': englishIi,
  'probability-theory': probabilityTheory,
  tensorflow,
  statistics,
  'java-ii': javaIi,
  'principles-of-programming': principlesOfProgramming,
  'principles-of-cybersecurity': principlesOfCybersecurity,
  'principles-ui-ux': uiUx,
  'data-structures': dataStructures,
  special,
  sql,
  test: {
    name: 'test',
    slug: 'test',
    category: {
      slug: 'test',
    },
    questions: [

      {
        question: [
          [QuizMarkdownType.TEXT, 'Consider the following tables showing sales and product tables in a SQL database. This design pattern is a violation of which normal form??'],
          [QuizMarkdownType.TABLE, {
            name: 'Sales table',
            data: [
              {
                _tableDataColId: '1', id: 'S001', product_id: 'P001', date: '2023-07-01', customer_name: 'John Doe', product_name: 'Laptop',
              },
              {
                _tableDataColId: '2', id: 'S002', product_id: 'P002', date: '2023-07-02', customer_name: 'Jane Smith', product_name: 'Smartphone',
              },
              {
                _tableDataColId: '3', id: 'S003', product_id: 'P001', date: '2023-07-03', customer_name: 'Alice Johnson', product_name: 'Laptop',
              },
            ],
            cols: [
              { accessorKey: 'id', header: 'id' },
              { accessorKey: 'product_id', header: 'product_id' },
              { accessorKey: 'date', header: 'date' },
              { accessorKey: 'customer_name', header: 'customer_name' },
              { accessorKey: 'product_name', header: 'product_name' },
            ],
          }],
          [QuizMarkdownType.TABLE, {
            name: 'Product table',
            data: [
              {
                _tableDataColId: '1', id: 'P001', name: 'Laptop', category: 'Electronics',
              },
              {
                _tableDataColId: '2', id: 'P002', name: 'Smartphone', category: 'Electronics',
              },
            ],
            cols: [
              { accessorKey: 'id', header: 'id' },
              { accessorKey: 'name', header: 'name' },
              { accessorKey: 'category', header: 'category' },
            ],
          }],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 1NF'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 2NF'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 3NF'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'None of the above'],
            ],
          },
        ],
        correctAnswer: '2',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'Consider the following table showing the assignments of employees to projects along with their project details. This design pattern is a violation of which normal form??'],
          [QuizMarkdownType.TABLE, {
            name: 'Employee table',
            data: [
              {
                _tableDataColId: '1', id: '1', name: 'Alice', projectId: 'P101', projectName: 'Project Alpha', projectManager: 'John Smith',
              },
              {
                _tableDataColId: '2', id: '2', name: 'Bob', projectId: 'P102', projectName: 'Project Beta', projectManager: 'Jane Doe',
              },
              {
                _tableDataColId: '3', id: '3', name: 'Charlie', projectId: 'P101', projectName: 'Project Alpha', projectManager: 'John Smith',
              },
            ],
            cols: [
              { accessorKey: 'id', header: 'id' },
              { accessorKey: 'name', header: 'name' },
              { accessorKey: 'projectId', header: 'project_id' },
              { accessorKey: 'projectName', header: 'project_name' },
              { accessorKey: 'projectManager', header: 'project_manager' },
            ],
          }],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 1NF'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 2NF'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 3NF'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'None of the above'],
            ],
          },
        ],
        correctAnswer: '1',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'What is the solution to partial dependency in relational databases?'],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'Split up the tables'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'Add foreign keys'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'Shrink the composite primary key'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'Expand the composite primary key'],
            ],
          },
        ],
        correctAnswer: '0',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'Consider the following table showing the assignments of employees to projects along with their project details. This design pattern is a violation of which normal form??'],
          [QuizMarkdownType.TABLE, {
            data: [
              {
                _tableDataColId: '1', id: '1', name: 'Alice', projectId: 'P101', projectName: 'Project Alpha', projectManager: 'John Smith',
              },
              {
                _tableDataColId: '2', id: '2', name: 'Bob', projectId: 'P102', projectName: 'Project Beta', projectManager: 'Jane Doe',
              },
              {
                _tableDataColId: '3', id: '3', name: 'Charlie', projectId: 'P101', projectName: 'Project Alpha', projectManager: 'John Smith',
              },
            ],
            cols: [
              { accessorKey: 'id', header: 'id' },
              { accessorKey: 'name', header: 'name' },
              { accessorKey: 'projectId', header: 'project_id' },
              { accessorKey: 'projectName', header: 'project_name' },
              { accessorKey: 'projectManager', header: 'project_manager' },
            ],
          }],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 1NF'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 2NF'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 3NF'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'None of the above'],
            ],
          },
        ],
        correctAnswer: '1',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'Consider the following table showing purchase orders. This design pattern is a violation of which normal form??'],
          [QuizMarkdownType.TABLE, {
            data: [
              {
                _tableDataColId: '1', id: '1', orderDate: '2023-07-01', items: 'Laptop, Smartphone',
              },
              {
                _tableDataColId: '2', id: '2', orderDate: '2023-07-02', items: 'Tablet',
              },
              {
                _tableDataColId: '3', id: '3', orderDate: '2023-07-03', items: 'Smartwatch, Headphones',
              },
            ],
            cols: [
              { accessorKey: 'id', header: 'id' },
              { accessorKey: 'date', header: 'date' },
              { accessorKey: 'items', header: 'items' },
            ],
          }],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 1NF'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 2NF'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 3NF'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'None of the above'],
            ],
          },
        ],
        correctAnswer: '0',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'Consider the following table showing the sales records. This design pattern is a violation of which normal form??'],
          [QuizMarkdownType.TABLE, {
            data: [
              {
                _tableDataColId: '1', id: '1', saleId: 'S001', productId: 'P001', productName: 'Laptop', saleDate: '2023-07-01', customerName: 'John Doe',
              },
              {
                _tableDataColId: '2', id: '2', saleId: 'S002', productId: 'P002', productName: 'Smartphone', saleDate: '2023-07-02', customerName: 'Jane Smith',
              },
              {
                _tableDataColId: '3', id: '3', saleId: 'S003', productId: 'P001', productName: 'Laptop', saleDate: '2023-07-03', customerName: 'Alice Johnson',
              },
            ],
            cols: [
              { accessorKey: 'id', header: 'id' },
              { accessorKey: 'productId', header: 'product_id' },
              { accessorKey: 'productName', header: 'product_name' },
              { accessorKey: 'date', header: 'date' },
              { accessorKey: 'customerName', header: 'customer_name' },
            ],
          }],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 1NF'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 2NF'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 3NF'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'None of the above'],
            ],
          },
        ],
        correctAnswer: '2',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'Consider the following table. This entity is in violation of which normal form?'],
          [QuizMarkdownType.TABLE, {
            data: [
              {
                _tableDataColId: '1', id: '1', studentName: 'Alice', courseId: 'C101', courseName: 'Math 101', courseInstructor: 'Dr. Smith',
              },
              {
                _tableDataColId: '1', id: '2', studentName: 'Bob', courseId: 'C102', courseName: 'Science 101', courseInstructor: 'Dr. Johnson',
              },
              {
                _tableDataColId: '1', id: '3', studentName: 'Charlie', courseId: 'C101', courseName: 'Math 101', courseInstructor: 'Dr. Smith',
              },
            ],
            cols: [
              { accessorKey: 'id', header: 'id' },
              { accessorKey: 'name', header: 'name' },
              { accessorKey: 'courseId', header: 'course_id' },
              { accessorKey: 'courseName', header: 'course_name' },
              { accessorKey: 'courseInstructor', header: 'course_instructor' },
            ],
          }],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 1NF'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 2NF'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 3NF'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'None of the above'],
            ],
          },
        ],
        correctAnswer: '1',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'Consider the following table showing the contact information of customers. This design pattern is a violation of which normal form??'],
          [QuizMarkdownType.TABLE, {
            data: [
              {
                _tableDataColId: '1', customerId: 'C001', customerName: 'John Doe', phoneNumbers: '123-456-7890, 987-654-3210',
              },
              {
                _tableDataColId: '2', customerId: 'C002', customerName: 'Jane Smith', phoneNumbers: '555-123-4567',
              },
              {
                _tableDataColId: '3', customerId: 'C003', customerName: 'Alice Johnson', phoneNumbers: '444-555-6666, 333-222-1111',
              },
            ],
            cols: [
              { accessorKey: 'customerId', header: 'customerId' },
              { accessorKey: 'customerName', header: 'customerName' },
              { accessorKey: 'phoneNumbers', header: 'phone_numbers' },
            ],
          }],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 1NF'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 2NF'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 3NF'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'None of the above'],
            ],
          },
        ],
        correctAnswer: '0',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'Consider the following table showing the contact information of employees. This design pattern is a violation of which normal form??'],
          [QuizMarkdownType.TABLE, {
            data: [
              {
                _tableDataColId: '1', employeeId: 'E001', employeeName: 'Alice', phoneNumbers: '123-456-7890, 987-654-3210',
              },
              {
                _tableDataColId: '2', employeeId: 'E002', employeeName: 'Bob', phoneNumbers: '555-123-4567',
              },
              {
                _tableDataColId: '3', employeeId: 'E003', employeeName: 'Charlie', phoneNumbers: '444-555-6666, 333-222-1111',
              },
            ],
            cols: [
              { accessorKey: 'employeeId', header: 'id' },
              { accessorKey: 'employeeName', header: 'name' },
              { accessorKey: 'phoneNumbers', header: 'phone_numbers' },
            ],
          }],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 1NF'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 2NF'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 3NF'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'None of the above'],
            ],
          },
        ],
        correctAnswer: '0',
      },
      {
        question: [
          [QuizMarkdownType.TEXT, 'Consider the following table of SQL data showing the enrollments of students in different courses along with their course details. This design pattern is a violation of which normal form??'],
          [QuizMarkdownType.TABLE, {
            data: [
              {
                _tableDataColId: '1', id: '1001', name: 'Alice', courseId: 'C101', courseName: 'Math 101', courseInstructor: 'Dr. Smith',
              },
              {
                _tableDataColId: '2', id: '1002', name: 'Bob', courseId: 'C102', courseName: 'Science 101', courseInstructor: 'Dr. Johnson',
              },
              {
                _tableDataColId: '3', id: '1003', name: 'Charlie', courseId: 'C101', courseName: 'Math 101', courseInstructor: 'Dr. Smith',
              },
            ],
            cols: [
              { accessorKey: 'id', header: 'id' },
              { accessorKey: 'name', header: 'name' },
              { accessorKey: 'courseId', header: 'course_id' },
              { accessorKey: 'courseName', header: 'name' },
              { accessorKey: 'courseInstructor', header: 'instructor' },
            ],
          }],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 1NF'],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 2NF'],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, 'Violation of 3NF'],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, 'None of the above'],
            ],
          },
        ],
        correctAnswer: '1',
      },
    ],
  },
};

const categories = [
  {
    name: 'Cars',
    slug: 'cars',
    quizzes: [
      quizData['learners-permit'],
    ],
  },
  {
    name: 'Programming',
    slug: 'programming',
    quizzes: [
      quizData.javascript,
      quizData.python,
      quizData['module-i'],
      quizData.java,
      quizData['java-ii'],
      quizData['shell-scripting'],
      quizData['principles-ui-ux'],
      quizData['principles-of-programming'],
      quizData.sql,
      quizData.special,
    ],
  },
  {
    name: 'Machine Learning',
    slug: 'machine-learning',
    quizzes: [
      quizData['ml-principles'],
      quizData.tensorflow,
    ],
  },
  {
    name: 'IT Certifications',
    slug: 'it-certifications',
    quizzes: [
      quizData['comptia-network-plus'],
    ],
  },
  {
    name: 'Cloud Certifications',
    slug: 'cloud-certifications',
    quizzes: [
      quizData['aws-cloud-practitioner'],
    ],
  },
  {
    name: 'Mathematics',
    slug: 'mathematics',
    quizzes: [
      quizData['linear-algebra'],
      quizData.geometry,
      quizData['probability-theory'],
      quizData.statistics,
      quizData.test,
    ],
  },
  {
    name: 'Data',
    slug: 'data',
    quizzes: [
      quizData.data,
      quizData['data-structures'],
    ],
  },
  {
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    quizzes: [
      quizData['principles-of-cybersecurity'],
    ],
  },
  {
    name: 'English',
    slug: 'english',
    quizzes: [
      quizData['english-ii'],
    ],
  },
];

export {
  categories,
};

export default quizData;

// (?<=\s)(?<!(answer|question).*)\d
// "$0"

// new prompt meta
// generate questions which describe real-world scenarios and an applied LDAP solution is the answer
// output:
// A large corporation needs to manage and authenticate user access to multiple applications and services across its network. Which solution should they implement for centralized authentication?

// generate questions which describe real-world scenarios and an applied physical layer (of the OSI model) explanation is the answer
// generate questions which describe real-world scenarios and an applied router solution or explanation is the answer

// let's say i have a home network with 3-4 machines connected to the internet through a router. explain what happens when i connect a new device to this router. i know that my new device must be mapped to the MAC address of the router, but
