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
    // k9s to find out the answer
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'You want to achieve isolated Kubernetes environments for your staging and production applications such that performance issues occuring on one side do not affect the other. To that end, staging and development applications should exist in separate _____',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Clusters',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Namespaces',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Contexts',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Node Controllers',
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
          'While developing your project, you want to reinitialize a service with new initialization data, but your service is attached to a persistent volume claim (PVC). At what point is your service free of the stale data?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You delete the PVC',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You scale down the service',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You destroy all replicas of the service',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'You move the PVC to a different namespaces',
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
          'Your container natively runs on port 3000, however you wish to map that port to port 8087 and have nginx direct traffic to that port. Which answer represents a',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'ports',
        ],
        [
          QuizMarkdownType.TEXT,
          'block in a',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'Service',
        ],
        [
          QuizMarkdownType.TEXT,
          'configuration to accomplish this?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.CODE, `port: 8087
targetPort: 3000`,
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.CODE, `port: 3000
targetPort: 8087`,
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.CODE, `port: 8087
targetPort: 8087`,
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.CODE, `port: 3000
targetPort: 3000`,
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
          'Which command lists all DaemonSets in the kube-system namespace?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'kubectl get ds -n kube-system'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'kubectl get deployments -n kube-system'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'kubectl describe ds -n kube-system'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'kubectl get ds'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which command lists all Ingress resources across all namespaces?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'kubectl get ingress -A'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'kubectl get svc -A'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'kubectl describe ingress -A'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'kubectl get ingress'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which command lists all CustomResourceDefinitions (CRDs) installed on the cluster?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'kubectl get crd'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'kubectl get apiservices'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'kubectl get api-resources'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'kubectl get customresources -A'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Choose the answer that properly fill in the blanks: ________ provides host-level CPU, memory, disk, and network metrics for Kubernetes nodes (commonly scraped by _________)',
        ],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'node_exporter, Prometheus']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Prometheus, kube-state-metrics']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'cAdvisor (via kubelet), node_exporter']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'prometheus-adapter, Prometheus']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'To use ',
        ],
        [QuizMarkdownType.INLINE_CODE, 'kubectl top nodes/pods'],
        [
          QuizMarkdownType.TEXT,
          ' in a cluster, which component must be deployed?',
        ],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'metrics-server']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Prometheus']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'kube-state-metrics']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'node_exporter']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'In a Prometheus Operator setup, which CRD do you create to have Prometheus automatically scrape a Kubernetes Service exposing a ',
        ],
        [QuizMarkdownType.INLINE_CODE, '/metrics'],
        [QuizMarkdownType.TEXT, ' endpoint?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ServiceMonitor']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'PodMonitor']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'PrometheusRule']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AlertmanagerConfig']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the primary responsibility of ',
        ],
        [QuizMarkdownType.INLINE_CODE, 'kube-proxy'],
        [
          QuizMarkdownType.TEXT,
          ' in a Kubernetes cluster?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Programs node-level networking rules (e.g., iptables/IPVS) so Service virtual IPs forward traffic to healthy Pod endpoints',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Assigns IP addresses to Pods and sets up CNI routes between nodes',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Terminates TLS and performs L7 routing for HTTP/HTTPS traffic into the cluster',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Encrypts all inter-Pod traffic with mTLS and rotates certificates',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which proxy/backends are valid operating modes for '],
        [QuizMarkdownType.INLINE_CODE, 'kube-proxy'],
        [QuizMarkdownType.TEXT, ' today?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'iptables and IPVS (userspace is legacy/deprecated)',
            ],
          ],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'eBPF only']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'NAT64 and DNS64']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Envoy and HAProxy']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Where does ',
        ],
        [QuizMarkdownType.INLINE_CODE, 'kube-proxy'],
        [
          QuizMarkdownType.TEXT,
          ' run and how is it typically deployed on EKS?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Runs on every worker node and is deployed as a DaemonSet',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Runs only on control-plane nodes as a static Pod managed by the API server',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Runs centrally as a single Deployment behind a ClusterIP Service',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Is an optional CLI plugin that runs on the kubectl client machine',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which control plane component is the front door to the cluster, handling authentication, authorization, admission, and all API requests?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-apiserver']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-scheduler']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'kubelet']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-proxy']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The control plane component responsible for validating all API requests against RBAC rules is'],
        [QuizMarkdownType.INLINE_CODE, '_______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-apiserver']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-scheduler']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'kubelet']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-proxy']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where is the authoritative cluster state (objects like Deployments, Services, Secrets) stored in a Kubernetes control plane?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'etcd']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-controller-manager']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'containerd']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'coredns']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which control plane component is responsible for binding unscheduled Pods to suitable Nodes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-scheduler']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-apiserver']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-controller-manager']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'cloud-controller-manager']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which control plane process runs controllers (e.g., Deployment, ReplicaSet, Node, ServiceAccount controllers) that continuously reconcile desired vs. current state?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-controller-manager']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-scheduler']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'kubelet']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-proxy']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Admission control (mutating/validating) occurs in which part of the control plane?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Inside the '], [QuizMarkdownType.INLINE_CODE, 'kube-apiserver'], [QuizMarkdownType.TEXT, ' via admission plugins and webhooks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Inside the '], [QuizMarkdownType.INLINE_CODE, 'kube-controller-manager']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Inside each node’s '], [QuizMarkdownType.INLINE_CODE, 'kubelet']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Inside the cluster DNS service']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For high availability of the control plane, which approach is most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Run multiple '], [QuizMarkdownType.INLINE_CODE, 'kube-apiserver'], [QuizMarkdownType.TEXT, ' replicas behind a load balancer and use an odd-sized '], [QuizMarkdownType.INLINE_CODE, 'etcd'], [QuizMarkdownType.TEXT, ' cluster spread across failure domains']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Run a single large '], [QuizMarkdownType.INLINE_CODE, 'kube-apiserver'], [QuizMarkdownType.TEXT, ' with daily backups of '], [QuizMarkdownType.INLINE_CODE, 'etcd']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use one '], [QuizMarkdownType.INLINE_CODE, 'etcd'], [QuizMarkdownType.TEXT, ' node and two schedulers without leader election']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Switch to a larger instance type for control plane components only']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the Kubernetes API Aggregation Layer used for in the control plane?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Extending the core API by registering aggregated API servers via '], [QuizMarkdownType.INLINE_CODE, 'APIService'], [QuizMarkdownType.TEXT, ' objects']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Sending logs from control plane components to external systems']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Replacing '], [QuizMarkdownType.INLINE_CODE, 'etcd'], [QuizMarkdownType.TEXT, ' with a SQL database']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Serving container images directly from the API server']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which pair of control plane components participates in leader election so only one instance is active at a time?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, ''], [QuizMarkdownType.INLINE_CODE, 'kube-controller-manager'], [QuizMarkdownType.TEXT, ' and '], [QuizMarkdownType.INLINE_CODE, 'kube-scheduler']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, ''], [QuizMarkdownType.INLINE_CODE, 'kube-apiserver'], [QuizMarkdownType.TEXT, ' and '], [QuizMarkdownType.INLINE_CODE, 'etcd']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, ''], [QuizMarkdownType.INLINE_CODE, 'kube-proxy'], [QuizMarkdownType.TEXT, ' and '], [QuizMarkdownType.INLINE_CODE, 'kubelet']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, ''], [QuizMarkdownType.INLINE_CODE, 'cloud-controller-manager'], [QuizMarkdownType.TEXT, ' and '], [QuizMarkdownType.INLINE_CODE, 'CoreDNS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which control plane component performs authentication and authorization checks for incoming client requests?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-apiserver']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-scheduler']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'kube-controller-manager']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'etcd']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Amazon EKS, which parts of the control plane are managed by AWS by default?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, ''], [QuizMarkdownType.INLINE_CODE, 'kube-apiserver'], [QuizMarkdownType.TEXT, ', '], [QuizMarkdownType.INLINE_CODE, 'etcd'], [QuizMarkdownType.TEXT, ', and supporting control plane infrastructure (highly available)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Worker node '], [QuizMarkdownType.INLINE_CODE, 'kubelet'], [QuizMarkdownType.TEXT, ' and CNI plugins only']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Ingress controllers and DNS (CoreDNS) only']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Cluster add-ons like metrics-server and dashboard only']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which command can be used to set the context of',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'kubectl',
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
              'kubectl config use-context ecommerce-staging',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'kubectl config set-context ecommerce-staging',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'kubectl context set-context ecommerce-staging',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_CODE,
              'kubectl context use-context ecommerce-staging',
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
          'In your deployed service',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'jmeter-orchestrator',
        ],
        [
          QuizMarkdownType.TEXT,
          ', you run the command',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'kubectl scale deployment jmeter-agents --replicas=0',
        ],
        [
          QuizMarkdownType.TEXT,
          'and you receive the following error. Which block of code should be added to the',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'Role',
        ],
        [
          QuizMarkdownType.TEXT,
          'associated with',
        ],
        [
          QuizMarkdownType.INLINE_CODE,
          'jmeter-orchestrator',
        ],
        [
          QuizMarkdownType.TEXT,
          'in order to resolve the error?',
        ],
        [
          QuizMarkdownType.CODE,
          'Error from server (Forbidden): deployments.apps "jmeter-agents" is forbidden: User "system:serviceaccount:default:jenkins" cannot patch resource "deployments/scale" in API group "apps" in the namespace "default"',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.CODE,
              `  - apiGroups: ["apps"]
    resources: ["deployments/scale"]
    verbs: ["patch"]`,
            ],
          ],
        },
        {
          id: '1',
          answer: [
            QuizMarkdownType.CODE,
            `  - apiGroups: [""]
    resources: ["deployments/scale"]
    verbs: ["patch"]`,
          ],
        },
        {
          id: '2',
          answer: [
            QuizMarkdownType.CODE,
            `  - apiGroups: [""]
    resources: ["deployments"]
    verbs: ["update"]`,
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.CODE,
              `  - apiGroups: ["apps"]
    resources: ["deployments/scale"]
    verbs: ["update"]`,
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
