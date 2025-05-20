import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Kubernetes',
  slug: 'kubernetes',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'In an EKS cluster, what component is responsible for scheduling pods to nodes?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The Kubernetes Scheduler',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The kube-apiserver',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The AWS Load Balancer Controller',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The Node Controller',
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
          'Which answer represents a valid command to update the kubeconfig file to access an EKS cluster?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.CODE,
              'aws eks --region us-east-1 update-kubeconfig --name project3-eks',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.CODE,
              'kubectl apply --config project3-eks --region us-east-1',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.CODE,
              'eksctl configure-cluster project3-eks --region us-east-1',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.CODE,
              'kubectl update-kubeconfig project3-eks --region us-east-1',
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
          'What AWS resource is used to expose Kubernetes services to the internet in an EKS cluster?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Route 53',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Auto Scaling',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Elastic Load Balancer',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS VPC',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'How do you deploy a pod to a specific node in an EKS cluster?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By using node affinity or nodeSelector in the pod specification',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By assigning a pod-specific IP in the EKS console',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By labeling the pod as "target-node"',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By deploying through eksctl with node ID',
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
          'What is the purpose of the kubeconfig file in Kubernetes?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To store configuration data for managing Kubernetes resources',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To authenticate and authorize access to the Kubernetes cluster',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To define the network policy rules for a cluster',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To install and manage Kubernetes add-ons',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'You execute the command',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'kubectl apply -f ingress.yaml -n prod',
        ],
        [
          QuizMarkdownType.TEXT,
          'in a directory where the file',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'ingress.yaml',
        ],
        [
          QuizMarkdownType.TEXT,
          'does exist and is a valid configuration for an ingress resource. You then execute the command',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'kubectl describe ingress',
        ],
        [
          QuizMarkdownType.TEXT,
          'and to your surprise, no resources are found. What is the most likely explanation?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You should add the parameter',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '-n prod',
            ],
            [
              QuizMarkdownType.TEXT,
              'to',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'kubectl describe',
            ],
            [
              QuizMarkdownType.TEXT,
              'to specify the namespace where the resource exists',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You should execute the command',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'aws eks --region us-east-1 update-kubeconfig --name project3-eks',
            ],
            [
              QuizMarkdownType.TEXT,
              'to ensure kube-config is configured correctly',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You should rerun the command',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'kubectl apply -f ingress.yaml',
            ],
            [
              QuizMarkdownType.TEXT,
              'to ensure the resource actually deploys',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You should add the parameter',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              '-n default',
            ],
            [
              QuizMarkdownType.TEXT,
              'to',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'kubectl describe',
            ],
            [
              QuizMarkdownType.TEXT,
              'to specify the default namespace',
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
          'Consider the following commands:',
        ],
        [
          QuizMarkdownType.CODE,
          `kubectl apply -f ./deployment-user-service.yaml -n prod
kubectl apply -f ./deployment-user-service.yaml -n staging`,
        ],
        [
          QuizMarkdownType.TEXT,
          'Evaluate: Running the command',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'kubectl describe pod',
        ],
        [
          QuizMarkdownType.TEXT,
          'will return information about the resources applied in the aforementioned commands.',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'False',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'True',
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
          'You deploy an ingress resource and obtain the address indicated below by running the command',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'kubectl get ingress ingress --namespace staging',
        ],
        [
          QuizMarkdownType.TEXT,
          '. Where should this address be referenced?',
        ],
        [
          QuizMarkdownType.CODE,
          'http://k8s-staging-ingress-af7115ad11-1821985949.us-east-1.elb.amazonaws.com',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'As a Route 53 A Record',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'As a Route 53 AAA Record',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'As a Cloudfront origin domain name',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'As an annotation in the ingress yaml file',
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
          'In terms of Kubernetes resource allocations, what value is equivalent to 0.1 of a CPU core?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '100m',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '10m',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '1000m',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              '0.1m',
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
          'Your Kubernetes pod must initialize data in a database. In which type of Kubernetes configuration should this be defined?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'ConfigMap',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'Service',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'Pod',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'Secret',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following resources can be described as operating at the configuration layer?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Ingress']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Ingress controller']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Load Balancer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'NAT Gateway']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following resources can be described as operating at the application layer?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Deployment']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Ingress controller']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Load Balancer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Ingress']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following Kubernetes assets can be described as service discovery?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CoreDNS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Ingress controller']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deployment']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Ingress']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A ______ is the simplest type of resource that exposes your an application running inside a Kubernetes cluster to external clients.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'NodePort']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CoreDNS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deployment']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Ingress']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to expose an API gateway microservice to external traffic. Which of the following resources CANNOT be used to accomplish this task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ClusterIP']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'NodePort']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Load Balancer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Ingress']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are a defining a microservice to be accessible only by other microservices within your Kubernetes cluster. Which of the following types of resources is appropriate for this constraint?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ClusterIP']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'NodePort']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Load Balancer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Ingress']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A service defined as a ClusterIP can only be accessed internally by other services within the Kubernetes cluster.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A service defined as a ClusterIP can be accessed externally from outside the Kubernetes cluster.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A service defined as a NodePort can be accessed externally from outside the Kubernetes cluster.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A service defined as a NodePort can only be accessed internally by other services within the Kubernetes cluster.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The default type of any service in Kubernetes is a ________.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ClusterIP']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'NodePort']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Load Balancer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Ingress']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
