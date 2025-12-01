import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Docker',
  slug: 'docker',
  category: {
    slug: 'docker',
  },
  questions: [
    // https://docs.docker.com/engine/network/drivers/overlay/
    // https://docs.docker.com/engine/network/drivers/bridge/
    {
      question: [
        [QuizMarkdownType.TEXT, 'You run the following command. Which answer best characterizes what you have accomplished?'],
        [QuizMarkdownType.CODE, 'docker network create internal'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'You create a bridge network called'], [QuizMarkdownType.INLINE_CODE, 'internal'], [QuizMarkdownType.TEXT, ', which containers can use to talk to each other.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'You create a distributed network called'], [QuizMarkdownType.INLINE_CODE, 'internal'], [QuizMarkdownType.TEXT, 'among multiple Docker daemon hosts.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'You create a distributed network called'], [QuizMarkdownType.INLINE_CODE, 'internal'], [QuizMarkdownType.TEXT, ', which enables IPsec encryption at the level of the Virtual Extensible LAN (VXLAN).']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'You create a bridge network called'], [QuizMarkdownType.INLINE_CODE, 'internal'], [QuizMarkdownType.TEXT, ', which adds a physical interface.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The default driver for creating a network with the command'],
        [QuizMarkdownType.INLINE_CODE, 'docker network create'],
        [QuizMarkdownType.TEXT, 'is a _________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'bridge']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'null']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'host']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'overlay']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A Docker container failed to start. A command you can run to find output written to the container console is '],
        [QuizMarkdownType.INLINE_CODE, '__________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'docker logs [CONTAINER ID]']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'docker ps -a']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'docker exec -it [CONTAINER ID] /bin/sh']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'docker ps']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You create a Docker volume with the command'],
        [QuizMarkdownType.INLINE_CODE, 'docker volume create patient_service_data'],
        [QuizMarkdownType.TEXT, '. Which command can you run to see your volumes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'docker volume ls']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'docker ps -a']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'docker volume -a']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'docker ps ls']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are running a container built from the image'],
        [QuizMarkdownType.INLINE_CODE, 'postgres:latest'],
        [QuizMarkdownType.TEXT, '. Assuming you are not mounting a volume to persist the data, which command will result in the permanent loss of data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'docker rm [CONTAINER ID]']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'docker kill [CONTAINER ID]']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'docker run postgres:latest']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'docker start [CONTAINER ID]']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You build a Docker image with the command'],
        [QuizMarkdownType.INLINE_CODE, 'docker build'],
        [QuizMarkdownType.TEXT, 'and it is now part of your local repository. Which command deletes the image you built?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'docker rmi [CONTAINER ID]']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'docker kill [CONTAINER ID]']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'docker rm postgres:latest']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'docker delete [CONTAINER ID]']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You build a Docker image with the command'],
        [QuizMarkdownType.INLINE_CODE, 'docker build'],
        [QuizMarkdownType.TEXT, 'and it is now part of your local repository. Which command deletes the image you built?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'docker rmi [CONTAINER ID]']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'docker kill [CONTAINER ID]']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'docker rm postgres:latest']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'docker delete [CONTAINER ID]']] },
      ],
      correctAnswer: '0',
    },
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
    {
      question: [
        [QuizMarkdownType.TEXT, 'A'],
        [QuizMarkdownType.INLINE_CODE, 'Dockerfile'],
        [QuizMarkdownType.TEXT, 'contains the following lines. Which answer is true?'],
        [QuizMarkdownType.CODE, `ENV SPRING_DATASOURCE_URL=jdbc:postgresql://patient-service-db:22222/the-database
ENV SPRING_DATASOURCE_USERNAME=postgres
ENV SPRING_DATASOURCE_PASSWORD=postgres`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The values will be baked into the image\'s build history']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The values will not be baked into the image\'s build history']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
