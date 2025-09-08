import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Docker',
  slug: 'docker',
  category: {
    slug: 'docker',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your'],
        [QuizMarkdownType.INLINE_CODE, 'docker-compose.yml'],
        [QuizMarkdownType.TEXT, 'file contains the following block. Which answer is true for the'],
        [QuizMarkdownType.TEXT, 'docker-compose'],
        [QuizMarkdownType.TEXT, 'command to work properly with the file?'],
        [QuizMarkdownType.CODE, `prometheus:
  container_name: prometheus
  image: prom/prometheus:latest
  ports:
    - '9090:9090'
  volumes:
    - ./prometheus.yml:/etc/prometheus/prometheus.yml
    - ./prometheus-data:/prometheus
  command:
    - --config.file=/etc/prometheus/prometheus.yml`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A file'],
            [QuizMarkdownType.INLINE_CODE, 'prometheus.yml'],
            [QuizMarkdownType.TEXT, 'must be present in the same directory as'],
            [QuizMarkdownType.INLINE_CODE, 'docker-compose.yml'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A file'],
            [QuizMarkdownType.INLINE_CODE, 'prometheus.yml'],
            [QuizMarkdownType.TEXT, 'must be present in the directory'],
            [QuizMarkdownType.INLINE_CODE, '/etc/prometheus/prometheus.yml'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A file'],
            [QuizMarkdownType.INLINE_CODE, 'prometheus.yml'],
            [QuizMarkdownType.TEXT, 'must be present in the directory'],
            [QuizMarkdownType.INLINE_CODE, '/etc/prometheus/prometheus.yml'],
            [QuizMarkdownType.TEXT, 'and a file'],
            [QuizMarkdownType.INLINE_CODE, 'prometheus.yml'],
            [QuizMarkdownType.TEXT, 'must be present in the same directory as'],
            [QuizMarkdownType.INLINE_CODE, 'docker-compose.yml'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To manage user access'],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
