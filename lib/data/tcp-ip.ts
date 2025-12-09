import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'TCP/IP',
  slug: 'tcp-ip',
  category: {
    slug: 'networking',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'The _______ protocol uses a "3-way handshake" to ensure reliable communication'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'TCP']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'UDP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'UDP-Lite']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'TLS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The _______ protocol uses a stores information such as "Sequence Number" in communication headers to ensure consistency accross communications'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'TCP']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'UDP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'UDP-Lite']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'TLS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You must work in a protocol where data loss is NOT acceptable. Which protocol is most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'TCP']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'UDP']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'UDP-Lite']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'TLS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The HTTP communication protocol occurs at the __________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Application layer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Transport layer']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Internet layer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Link layer']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'TCP occurs at the __________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Application layer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Transport layer']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Internet layer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Link layer']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'UDP occurs at the __________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Application layer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Transport layer']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Internet layer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Link layer']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The "3-way handshake" is sequenced _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'SYN ► SYN + ACK ► ACK']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'SYN + ACK ► SYN + ACK ► ACK']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SYN ► ACK ► SYN + ACK']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'SYN ► SYN ► ACK']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
