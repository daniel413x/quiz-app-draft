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
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A 1._____ is mapped to a 2.______ in a 3.______, while a 4.______ is mapped to a 5.______ in a 6.______',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1. volume 2. folder path 3.',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'volumeMounts',
            ],
            [
              QuizMarkdownType.TEXT,
              'block 4. volume 5. data definition 6.',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'volumes',
            ],
            [
              QuizMarkdownType.TEXT,
              'block',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1. volume 2. folder path 3.',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'volumes',
            ],
            [
              QuizMarkdownType.TEXT,
              'block 4. volume 5. data definition 6.',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'volumeMounts',
            ],
            [
              QuizMarkdownType.TEXT,
              'block',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1. folder path 2. volume 3.',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'data',
            ],
            [
              QuizMarkdownType.TEXT,
              'block 4. volume 5. data definition 6.',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'volumeMounts',
            ],
            [
              QuizMarkdownType.TEXT,
              'block',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1. folder path 2. volume 3.',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'volumes',
            ],
            [
              QuizMarkdownType.TEXT,
              'block 4. folder path 5. data definition 6.',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'volumeMounts',
            ],
            [
              QuizMarkdownType.TEXT,
              'block',
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
          'You need to mount a volume to your deployed Jenkins service such that a folder',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          '/var/jenkins_home/casc_configs',
        ],
        [
          QuizMarkdownType.TEXT,
          'exists when the service is initialized. Which answer is NOT a true statement?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your solution may involve modifying a',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'Service',
            ],
            [
              QuizMarkdownType.TEXT,
              'object',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your solution will involve modifying a',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'volumes',
            ],
            [
              QuizMarkdownType.TEXT,
              'block',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your solution will involve modifying a',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'volumeMounts',
            ],
            [
              QuizMarkdownType.TEXT,
              'block',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Your solution may involve modifying a',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'ConfigMap',
            ],
            [
              QuizMarkdownType.TEXT,
              'object',
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
          'You need to mount a volume to your deployed Jenkins service such that a folder',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          '/var/jenkins_home/casc_configs',
        ],
        [
          QuizMarkdownType.TEXT,
          'exists when the service is initialized. This will mainly involve modifying a _______ object',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'Deployment',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'ConfigMap',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'Service',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'ServiceAccount',
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
          'In your Jenkins deployment, you need to mount a volume mapped to the folder',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          '/var/jenkins_home/casc_configs',
        ],
        [
          QuizMarkdownType.TEXT,
          'in a',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'volumeMounts',
        ],
        [
          QuizMarkdownType.TEXT,
          'block. Your config looks like this:',
        ],
        [
          QuizMarkdownType.CODE, `
  volumeMounts:
    - name: jenkins-home # A persistent volume claim
      mountPath: /var/jenkins_home
    - name: jenkins-casc
      mountPath: /var/jenkins_home/casc_configs
      readOnly: true`,
        ],
        [
          QuizMarkdownType.TEXT,
          'Which answer is a FALSE statement?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The existing volume mapped to',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '/var/jenkins_home',
            ],
            [
              QuizMarkdownType.TEXT,
              'would be overwriten by the volume mapped to',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '/var/jenkins_home/casc_configs',
            ],
            [
              QuizMarkdownType.TEXT,
              'and data would be lost',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The contents of a volume mapped to',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '/var/jenkins_home/casc_configs',
            ],
            [
              QuizMarkdownType.TEXT,
              'can be defined in a',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'ConfigMap',
            ],
            [
              QuizMarkdownType.TEXT,
              'object',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It would be best practice to add a',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'ConfigMap',
            ],
            [
              QuizMarkdownType.TEXT,
              'as opposed to modifying the existing',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'PersistentVolumeClaim',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The existing volume mapped to',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '/var/jenkins_home',
            ],
            [
              QuizMarkdownType.TEXT,
              'would not be overwriten by the volume mapped to',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '/var/jenkins_home/casc_configs',
            ],
            [
              QuizMarkdownType.TEXT,
              'and no data would be lost',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
