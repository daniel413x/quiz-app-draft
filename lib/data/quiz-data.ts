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
import moduleIi from './module-ii';
import javaFoundationsExam from './java-foundations-exam';
import javaFoundationsExamIi from './java-foundations-exam-ii';
import moduleIii from './module-iii';
import istqbCtflExam from './istqb-ctfl-exam';
import istqbCtflExamIi from './istqb-ctfl-exam-ii';
import moduleV from './module-v';
import moduleVi from './module-vi';
import moduleViii from './module-viii';
import moduleIx from './module-ix';
import moduleX from './module-x';
import jenkins from './jenkins';
import kubernetes from './kubernetes';
import git from './git';
import mlPrinciplesIi from './ml-principles-ii';
import javaThreads from './java-threads';
import httpFundamentals from './http-fundamentals';
import multithreading from './multithreading';
import blockchains from './blockchains';
import cppI from './cpp-i';
import springCertifiedProfessionalExam from './spring-certified-professional-exam';
import selenium from './selenium';
import sdlc from './sdlc';
import databaseTheoryIi from './database-theory-ii';
import jest from './jest';
import restfulApis from './restful-apis';
import nextJs from './next-js';
import react from './react';
import scikitLearn from './scikit-learn';
import genetics from './genetics';

type QuizData = {
  [key: string]: QuizDataObject;
};

const quizData: QuizData = {
  genetics,
  'scikit-learn': scikitLearn,
  'database-theory-ii': databaseTheoryIi,
  react,
  jest,
  'next-js': nextJs,
  // ===========
  'http-fundamentals': httpFundamentals,
  'cpp-i': cppI,
  blockchains,
  // ===========
  'restful-apis': restfulApis,
  'learners-permit': learnersPermit,
  // ===========
  javascript,
  python,
  // ===========
  'ml-principles': mlPrinciples,
  'ml-principles-ii': mlPrinciplesIi,
  // ===========
  java,
  jenkins,
  selenium,
  sdlc,
  kubernetes,
  multithreading,
  'java-threads': javaThreads,
  'module-i': moduleI,
  'module-ii': moduleIi,
  'module-iii': moduleIii,
  'module-v': moduleV,
  'module-vi': moduleVi,
  'module-vii': moduleViii,
  'module-ix': moduleIx,
  'module-x': moduleX,
  'istqb-ctfl-exam': istqbCtflExam,
  'istqb-ctfl-exam-ii': istqbCtflExamIi,
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
  'java-foundations-exam': javaFoundationsExam,
  'java-foundations-exam-ii': javaFoundationsExamIi,
  'principles-ui-ux': uiUx,
  git,
  'data-structures': dataStructures,
  'spring-certified-professional-exam': springCertifiedProfessionalExam,
  special,
  sql,
  test: {
    name: 'test',
    slug: 'test',
    category: {
      slug: 'test',
    },
    questions: [
      // https://chatgpt.com/c/682d8882-9b18-8005-89d3-071c942fec30
      {
        question: [
          [QuizMarkdownType.TEXT, ''],
          [QuizMarkdownType.TABLE, {
            name: 'Route Tables',
            data: [
              {
                _tableDataColId: '1', col0: '1', col1: '0.0.0.0/0', col2: 'Internet Gateway',
              },
              {
                _tableDataColId: '2', col0: '2', col1: '0.0.0.0/0', col2: 'NAT Gateway',
              },
              {
                _tableDataColId: '3', col0: '3', col1: '10.0.0.0/16', col2: 'local',
              },
              {
                _tableDataColId: '4', col0: '4', col1: '172.31.0.0/16', col2: 'VPC Peering Connection',
              },
            ],
            cols: [
              { accessorKey: 'col0', header: '' },
              { accessorKey: 'col1', header: 'Destination' },
              { accessorKey: 'col2', header: 'Target' },
            ],
          }],
          [QuizMarkdownType.TEXT, ''],
        ],
        answers: [
          {
            id: '0',
            answer: [
              [QuizMarkdownType.TEXT, ''],
            ],
          },
          {
            id: '1',
            answer: [
              [QuizMarkdownType.TEXT, ''],
            ],
          },
          {
            id: '2',
            answer: [
              [QuizMarkdownType.TEXT, ''],
            ],
          },
          {
            id: '3',
            answer: [
              [QuizMarkdownType.TEXT, ''],
            ],
          },
        ],
        correctAnswer: '0',
      },
    ],
  },
};

const categories = [
  {
    name: 'Biology',
    slug: 'biology',
    quizzes: [
      quizData.genetics,
    ],
  },
  {
    name: 'Cars',
    slug: 'cars',
    quizzes: [
      quizData['learners-permit'],
    ],
  },
  {
    name: 'Software Development',
    slug: 'software-development',
    quizzes: [
      quizData.sdlc,
    ],
  },
  {
    name: 'Programming',
    slug: 'programming',
    quizzes: [
      quizData['next-js'],
      quizData['java-threads'],
      quizData.javascript,
      quizData.jest,
      quizData.react,
      quizData.python,
      quizData.kubernetes,
      quizData['module-i'],
      quizData['module-ii'],
      quizData['module-iii'],
      quizData['module-v'],
      quizData['module-ix'],
      quizData['module-x'],
      quizData['istqb-ctfl-exam'],
      quizData['istqb-ctfl-exam-ii'],
      quizData.java,
      quizData['java-ii'],
      quizData['shell-scripting'],
      quizData['principles-ui-ux'],
      quizData['principles-of-programming'],
      quizData['spring-certified-professional-exam'],
      quizData['java-foundations-exam'],
      quizData['java-foundations-exam-ii'],
      quizData.special,
      quizData.selenium,
      quizData['cpp-i'],
      quizData.git,
      quizData.sdlc,
    ],
  },
  {
    name: 'Machine Learning',
    slug: 'machine-learning',
    quizzes: [
      quizData['ml-principles'],
      quizData['ml-principles-ii'],
      quizData.tensorflow,
      quizData['scikit-learn'],
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
  {
    name: 'Web Development',
    slug: 'web-development',
    quizzes: [
      quizData['restful-apis'],
      quizData['http-fundamentals'],
    ],
  },
  {
    name: 'Computer Science',
    slug: 'computer-science',
    quizzes: [
      quizData.multithreading,
    ],
  },
  {
    name: 'Databases',
    slug: 'databases',
    quizzes: [
      quizData['database-theory-ii'],
      quizData.sql,
    ],
  },
  {
    name: 'Decentralized Tech',
    slug: 'decentralized-tech',
    quizzes: [
      quizData.blockchains,
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
