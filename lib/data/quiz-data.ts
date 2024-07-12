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
          [QuizMarkdownType.TEXT, 'Consider the following tables showing sales and product tables in a SQL database. These entities are in violation of which normal form?'],
          [QuizMarkdownType.TABLE, {
            name: 'Sales table',
            data: [
              {
                id: '1', sale_id: 'S001', product_id: 'P001', sale_date: '2023-07-01', customer_name: 'John Doe', product_name: 'Laptop',
              },
              {
                id: '2', sale_id: 'S002', product_id: 'P002', sale_date: '2023-07-02', customer_name: 'Jane Smith', product_name: 'Smartphone',
              },
              {
                id: '3', sale_id: 'S003', product_id: 'P001', sale_date: '2023-07-03', customer_name: 'Alice Johnson', product_name: 'Laptop',
              },
            ],
            cols: [
              { accessorKey: 'sale_id', header: 'id' },
              { accessorKey: 'product_id', header: 'product_id' },
              { accessorKey: 'sale_date', header: 'date' },
              { accessorKey: 'customer_name', header: 'customer_name' },
              { accessorKey: 'product_name', header: 'product_name' },
            ],
          }],
          [QuizMarkdownType.TABLE, {
            name: 'Product table',
            data: [
              {
                id: '1', product_id: 'P001', product_name: 'Laptop', category: 'Electronics',
              },
              {
                id: '2', product_id: 'P002', product_name: 'Smartphone', category: 'Electronics',
              },
            ],
            cols: [
              { accessorKey: 'product_id', header: 'id' },
              { accessorKey: 'product_name', header: 'name' },
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
          [QuizMarkdownType.TEXT, 'Consider the following table showing the assignments of employees to projects along with their project details. These entities are in violation of which normal form?'],
          [QuizMarkdownType.TABLE, {
            name: 'Employee table',
            data: [
              {
                id: '1', employeeId: 'E001', employeeName: 'Alice', projectId: 'P101', projectName: 'Project Alpha', projectManager: 'John Smith',
              },
              {
                id: '2', employeeId: 'E002', employeeName: 'Bob', projectId: 'P102', projectName: 'Project Beta', projectManager: 'Jane Doe',
              },
              {
                id: '3', employeeId: 'E003', employeeName: 'Charlie', projectId: 'P101', projectName: 'Project Alpha', projectManager: 'John Smith',
              },
            ],
            cols: [
              { accessorKey: 'employeeId', header: 'id' },
              { accessorKey: 'employeeName', header: 'name' },
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
