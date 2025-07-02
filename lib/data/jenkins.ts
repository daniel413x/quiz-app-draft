/* eslint-disable linebreak-style */
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Jenkins',
  slug: 'jenkins',
  category: {
    slug: 'jenkins',
  },
  questions: [
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'According to Jenkins\' default Content Security Policy (CSP), which of the following are not allowed for statically served resources?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'CSS',
            ],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JavaScript',
            ],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Icons',
            ],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All of the above',
            ],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Statically served resources, such as test reports, should be ',
        ],
        [
          QuizMarkdownType.INLINE_CODE, 'jenkins add .',
        ],
        [
          QuizMarkdownType.TEXT,
          'and add changes you did not intend to commit. What action can you take to undo the unintentional',
        ],
        [
          QuizMarkdownType.INLINE_CODE, 'jenkins add .',
        ],
        [
          QuizMarkdownType.TEXT,
          '?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'jenkins reset .',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'jenkins restore .',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'jenkins reset HEAD~',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'jenkins pull',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which programming syntax is illustrated below?',
        ],
        [
          QuizMarkdownType.CODE,
          `pipeline {
    agent any
    tools {
        nodejs '18.0.0'
    }
    environment { ... }
    stages { ... }
    post { ... }
}`,
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'Jenkins Pipeline DSL',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'Groovy syntax',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'Shell',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'YAML',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which programming syntax is NOT illustrated in the method below?',
        ],
        [
          QuizMarkdownType.CODE,
          `def generateJWT() {
    def now = sh(script: 'date +%s', returnStdout: true).trim()
    def iat = (now.toInteger() - 60).toString()
    def exp = (now.toInteger() + 600).toString()

    echo "Current time: \${now}"
    echo "Issued at: \${iat}"
    echo "Expires at: \${exp}"

    return sh(script: """
        #!/bin/bash
        client_id="\${GITHUB_APP_CLIENT_ID}"
        pem="\${PEM}"
        iat="\${iat}"
        exp="\${exp}"
        b64enc() { openssl base64 -A | tr '+/' '-_' | tr -d '='; }
        header=$(echo -n '{"typ":"JWT","alg":"RS256"}' | b64enc)
        payload=$(echo -n "{\\"iat\\":\${iat},\\"exp\\":\${exp},\\"iss\\":\\"\${client_id}\\"}" | b64enc)
        header_payload="\${header}.\${payload}"

        signature=$(echo -n "\${header_payload}" | openssl dgst -sha256 -sign \${PEM} | b64enc)
        JWT="\${header_payload}.\${signature}"
        echo "\${JWT}"
    """, returnStdout: true).trim()
}`,
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'Jenkins Pipeline DSL',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'JSON',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'Shell',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'Groovy',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Select the answer which correctly pairs each indicated line to the programming syntax',
        ],
        [
          QuizMarkdownType.CODE,
          `def generateJWT() { // 1
    def now = sh(script: 'date +%s', returnStdout: true).trim()
    def iat = (now.toInteger() - 60).toString()
    def exp = (now.toInteger() + 600).toString()

    echo "Current time: \${now}"
    echo "Issued at: \${iat}"
    echo "Expires at: \${exp}"

    return sh(script: """ // 2
        #!/bin/bash // 3
        client_id="\${GITHUB_APP_CLIENT_ID}" // 4
        pem="\${PEM}"
        iat="\${iat}"
        exp="\${exp}"
        b64enc() { openssl base64 -A | tr '+/' '-_' | tr -d '='; }
        header=$(echo -n '{"typ":"JWT","alg":"RS256"}' | b64enc)
        payload=$(echo -n "{\\"iat\\":\${iat},\\"exp\\":\${exp},\\"iss\\":\\"\${client_id}\\"}" | b64enc)
        header_payload="\${header}.\${payload}"

        signature=$(echo -n "\${header_payload}" | openssl dgst -sha256 -sign \${PEM} | b64enc)
        JWT="\${header_payload}.\${signature}"
        echo "\${JWT}"
    """, returnStdout: true).trim()
}`,
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1 Groovy, 2 Groovy, 3 Shell, 4 Shell',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1 Shell, 2 Shell, 3 Groovy, 4 Groovy',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1 Groovy, 2 Shell, 3 Shell, 4 Groovy',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1 Groovy, 2 Shell, 3 Shell, 4 Shell',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
