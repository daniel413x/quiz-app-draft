/* eslint-disable linebreak-style */
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Module VI',
  slug: 'module-vi',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a Kubernetes Ingress used for?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To expose HTTP and HTTPS routes to services outside the cluster']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To manage network policies for Pods']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To provide persistent storage for applications']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To handle load balancing between Pods within the cluster']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does Kubernetes handle secret management for Pods?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By encrypting secrets at rest in etcd']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By storing secrets in ConfigMaps']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By storing secrets in PersistentVolumes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By including secrets in the Pod\'s environment variables']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which component in Kubernetes schedules Pods to nodes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'kube-scheduler']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'kube-controller-manager']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'kube-apiserver']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'etcd']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary use of a StatefulSet in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To maintain the identity and storage of Pods']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To dynamically scale Pods based on traffic']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To manage network policies in the cluster']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To roll back applications during a failed update']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of a Kubernetes ConfigMap?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To store secret data such as passwords']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To store non-confidential data in key-value pairs for application configuration']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To manage persistent storage for Pods']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To expose network services to the outside world']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Kubernetes controller is responsible for ensuring the desired number of Pods are running in a ReplicaSet?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'DaemonSet controller']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deployment controller']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Replication controller']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Service controller']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does a Horizontal Pod Autoscaler (HPA) work in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It scales Pods based on CPU usage or other metrics']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It scales nodes based on resource utilization']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It scales Deployments based on memory usage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It scales Pods based on the number of available nodes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true about namespaces in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They are used for network isolation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They provide a scope for resources in the cluster']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They restrict access to the kube-apiserver']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They control how much CPU and memory a Pod can use']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a PersistentVolume in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A static storage resource provisioned by administrators']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A dynamic volume created by Pods']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A network file system shared across Pods']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A storage resource that is specific to a single Pod']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which command is used to scale a Deployment in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'kubectl get scale']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'kubectl autoscale']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'kubectl scale']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'kubectl update']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of a DaemonSet in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To run a single replica of a Pod on a specific node']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To ensure that a Pod is running on every node in the cluster']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To update or roll back Pods in a controlled manner']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To manage secrets and environment variables for Pods']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Kubernetes object is used to expose an application running on a set of Pods?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ReplicaSet']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'ConfigMap']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Volume']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the role of the kube-apiserver in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It stores the cluster state in etcd']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It exposes the Kubernetes API and processes REST operations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It ensures that containers are running in a Pod']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It schedules containers to run on nodes']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a key benefit of using Helm in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It simplifies the configuration and deployment of Kubernetes applications']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It manages network policies for Pods']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It stores Kubernetes secrets']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It automates the scaling of applications']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the difference between a ReplicaSet and a Deployment in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ReplicaSets are used to manage Pods directly, while Deployments provide updates and rollbacks for ReplicaSets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deployments provide persistent storage management, while ReplicaSets ensure the number of Pods']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'ReplicaSets manage DaemonSets, while Deployments manage StatefulSets']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'There is no difference between ReplicaSets and Deployments']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do Network Policies work in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They define how Pods are allowed to communicate with each other and external endpoints']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They manage the storage volumes of Pods']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They determine the scaling behavior of Pods']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They expose Kubernetes services outside the cluster']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Kubernetes object is used to ensure that a group of Pods always runs the specified number of replicas?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'PersistentVolume']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Job']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'ReplicaSet']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'ConfigMap']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the role of etcd in a Kubernetes cluster?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It stores all the cluster configuration and state information']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It schedules Pods to nodes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It handles networking between Pods']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It monitors resource usage and autoscaling']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the kube-controller-manager in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It manages the lifecycle of the nodes in the cluster']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It ensures that the desired state of the cluster is maintained by monitoring the state of the system']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It schedules Pods onto nodes in the cluster']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It serves as the entry point for the Kubernetes API']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does Kubernetes handle node failures in a cluster?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It automatically reschedules Pods from the failed node to available nodes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It notifies the administrator to manually reschedule the Pods']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It shuts down the failed node and restarts the Pods on it']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It backs up the node and restores it after the failure']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is Minikube primarily used for in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Running a Kubernetes cluster locally']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Setting up a cloud-based Kubernetes cluster']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Managing multiple Kubernetes clusters']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Providing monitoring tools for Kubernetes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which command starts a Kubernetes cluster using Minikube?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'minikube cluster']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'kubectl start']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'minikube start']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'kubectl minikube']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you stop a Minikube cluster?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'minikube stop']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'kubectl delete cluster']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'minikube delete']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'kubectl stop cluster']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which hypervisors are supported by Minikube for running a Kubernetes cluster locally?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'VirtualBox and Hyper-V']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'VMware and KVM']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'VirtualBox, KVM, Hyper-V, VMware, Docker']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Hyper-V and VMware only']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What command would you use to access the Kubernetes Dashboard on Minikube?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'minikube dashboard']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'kubectl dashboard']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'minikube start dashboard']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'kubectl minikube dashboard']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you check the status of a Minikube cluster?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'minikube status']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'kubectl get status']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'minikube get status']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'kubectl minikube status']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default container runtime used by Minikube?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Docker']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'containerd']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CRI-O']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Podman']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which flag would you use to specify the Kubernetes version when starting a Minikube cluster?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '--kubernetes-version']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '--version']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '--cluster-version']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '--kube-version']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How would you delete an existing Minikube cluster?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'minikube stop']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'minikube delete']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'kubectl delete cluster']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'minikube destroy']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Minikube command allows you to tunnel services from the Kubernetes cluster to your local machine?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'minikube tunnel']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'kubectl port-forward']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'minikube expose']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'kubectl tunnel']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a Pod in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A group of containers that share storage, network, and a specification for how to run the containers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A container orchestration system']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A tool for managing Kubernetes clusters']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A way to expose services to external clients']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How many containers can a Pod contain in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'One']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Multiple containers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Up to 10 containers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Only two containers']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which component in Kubernetes schedules Pods onto nodes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'kube-scheduler']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'kube-controller-manager']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'kube-apiserver']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'etcd']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the role of a Pod in Kubernetes networking?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Pods are assigned a unique IP address and can communicate with each other across nodes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Pods are responsible for network load balancing']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Pods manage network security policies for containers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Pods do not have any role in networking']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main purpose of the init containers in a Pod?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To initialize the node before the Pod starts']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To run setup tasks before the main container starts']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To run background tasks after the main container stops']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To manage data persistence between Pod restarts']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens when a Pod in Kubernetes is deleted?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'All the containers in the Pod stop and the resources are freed up']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The Pod\'s IP address is retained for future use']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The containers in the Pod restart immediately']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The Pod’s data persists until manually deleted']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which field in a Pod’s specification defines the containers that should be run?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'containers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'initContainers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'volumes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'affinity']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following resources can be shared between containers within a Pod?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Storage volumes, network, and memory']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Only network and memory']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Only CPU and network']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Containers in a Pod cannot share resources']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What command is used to create a Pod in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'kubectl create pod']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'kubectl apply -f']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'kubectl run']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'kubectl pod apply']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default restart policy for a Kubernetes Pod?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Always']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'OnFailure']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Never']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Manual']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a multi-container Pod in Kubernetes used for?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To run a single process']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To support tightly coupled application components that need to share resources']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To horizontally scale an application']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To create backup containers for redundancy']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which command is used to retrieve information about Pods in a Kubernetes cluster?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'kubectl get pods']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'kubectl describe pods']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'kubectl pod info']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'kubectl cluster info']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a Pod’s lifecycle in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Pending -> Running -> Succeeded/Failed']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Pending -> Running -> Stopped']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Created -> Running -> Deleted']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Started -> Running -> Removed']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the role of the readiness probe in a Kubernetes Pod?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To determine if a container is ready to accept traffic']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To restart containers that are not responding']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To monitor the overall health of the Pod']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To check the network configuration of the Pod']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does Kubernetes handle Pod scaling?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By adding or removing containers inside the Pod']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By creating or terminating Pods as needed']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By adjusting the Pod’s memory and CPU resources']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By changing the restart policy of the Pod']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes a Pod’s IP address in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A Pod is assigned a unique IP address and can communicate with other Pods across nodes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A Pod shares an IP address with the node it is running on']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A Pod does not have an IP address by default']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A Pod can be assigned multiple IP addresses for better performance']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a Persistent Volume (PV) in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A volume attached to a single Pod and removed after the Pod is deleted']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A temporary volume created during a Pod’s lifecycle']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A network file system shared by all Pods in a namespace']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which component in Kubernetes is responsible for binding Persistent Volumes (PVs) to Persistent Volume Claims (PVCs)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'kube-scheduler']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'kube-controller-manager']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'kubelet']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'kube-apiserver']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of a Persistent Volume Claim (PVC) in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To request storage resources from a Persistent Volume (PV)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To manage data persistence between Pod restarts']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To create temporary storage for Pods']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To define storage limits for a namespace']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can a Persistent Volume be dynamically provisioned in Kubernetes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By using Storage Classes to automatically provision storage when a Persistent Volume Claim (PVC) is created']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By manually allocating storage space on a node']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By attaching a volume to a Pod’s specification']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By configuring a DaemonSet to create volumes for each node']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens to a Persistent Volume (PV) when the Persistent Volume Claim (PVC) that is bound to it is deleted?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The PV is automatically deleted']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The PV is retained, but can be manually deleted later based on its reclaim policy']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The PV is automatically resized']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The PV is made read-only']] },
      ],
      correctAnswer: '1',
    },
    /* ****************************** */
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary goal of high availability in cloud computing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To ensure that an application can handle high traffic loads efficiently']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To minimize downtime and ensure continuous operation of services']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To reduce storage costs and optimize resource usage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To provide a secure environment for sensitive data']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is an Availability Zone in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A data center located within a specific region']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A region-wide network used for high-speed data transfers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A virtual machine instance type']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A global AWS service for managing security groups']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it recommended to deploy resources across multiple Availability Zones?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To increase cost efficiency']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To improve application performance']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To achieve high availability and fault tolerance']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To reduce network latency between regions']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How are Availability Zones connected to each other within an AWS region?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Via dedicated high-speed, low-latency fiber optic networks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Via public internet connections']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Via satellite communication links']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Through VPN connections established by customers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary benefit of having multiple Availability Zones in an AWS region?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It allows for a better utilization of AWS pricing plans']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It enhances redundancy and data replication within the same region']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It allows AWS to offer more services in different regions']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It ensures that AWS can scale the infrastructure quickly']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service helps you replicate data across multiple Availability Zones automatically for high availability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFront']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS WAF']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of AWS Edge Locations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To provide a physical location for storing data backups']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To reduce latency by caching content closer to users']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To offer disaster recovery services']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To host virtual private clouds (VPCs)']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service primarily uses edge locations to deliver content globally?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFront']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do edge locations improve user experience in content delivery?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By encrypting all content automatically']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By allowing users to store data locally']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By reducing latency through local caching of frequently requested data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By managing traffic between different AWS regions']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of AWS Edge Locations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To provide redundancy for AWS regions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To cache content closer to end users for lower latency']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To host applications and databases']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To manage network traffic between Availability Zones']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service primarily uses Edge Locations to deliver content?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Shield']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do Edge Locations contribute to improving the performance of applications for end users?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By caching frequently accessed data closer to users']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By managing user permissions more efficiently']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By reducing the number of API calls to backend services']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By providing direct access to AWS data centers']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
