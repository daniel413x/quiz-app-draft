import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'AWS Certified Cloud Practitioner Certification',
  slug: 'aws-cloud-practitioner',
  category: {
    slug: 'cloud-certifications',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of Amazon VPC?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To manage data in a database']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To create isolated network environments']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To store large amounts of data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To automate server deployments']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which component of a VPC allows you to divide a VPC into multiple isolated sections?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Security Groups']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Subnets']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Route Tables']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Internet Gateways']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the function of a Security Group in a VPC?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To store data in a secure environment']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To provide a firewall for controlling inbound and outbound traffic']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To manage DNS entries']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To establish network connectivity']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does an Internet Gateway function within a VPC?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It blocks all internet traffic']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It connects a VPC to the internet']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It provides DNS services']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It manages data encryption']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement best describes a VPC peering connection?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A direct connection to a data center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A link between two VPCs to route traffic between them']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A service that provides VPN connectivity']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A storage optimization feature']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the maximum number of VPCs you can create per AWS account per region by default?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '5']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '10']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '20']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '50']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes an Elastic IP address in the context of VPC?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A static IPv4 address designed for dynamic cloud computing']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'An IP address that changes automatically']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An internal IP address within a VPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'An address used solely for DNS services']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What role does a Network ACL play in a VPC?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Stores encrypted data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Controls access to subnets within a VPC']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Routes traffic within the VPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Provides a VPN connection']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is true of the following table regarding VPC components?'],
        [QuizMarkdownType.TABLE, {
          name: 'VPC Components',
          data: [
            { _tableDataColId: '1', component: 'Security Group', function: 'Firewall for inbound/outbound rules' },
            { _tableDataColId: '2', component: 'Subnet', function: 'Divide VPC into isolated sections' },
            { _tableDataColId: '3', component: 'Route Table', function: 'Determine how traffic is directed' },
            { _tableDataColId: '4', component: 'Internet Gateway', function: 'Connect VPC to the internet' },
          ],
          cols: [
            { accessorKey: 'component', header: 'Component' },
            { accessorKey: 'function', header: 'Function' },
          ],
        }],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Subnets provide DNS services']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Security Groups manage storage']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Route Tables determine traffic direction']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Internet Gateways act as firewalls']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of a NAT Gateway in a VPC?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To provide encryption for data at rest']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To enable instances in a private subnet to access the internet']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To route traffic between VPCs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To manage DNS entries within the VPC']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary benefit of using cloud computing over traditional on-premises IT infrastructure?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Higher security']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Faster access to hardware']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Pay-as-you-go pricing']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Complete control over data']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a responsibility of the cloud customer?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Physical security of the data centers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Managing user identities and permissions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Maintaining the cloud infrastructure']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Cooling and power supply']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is used for object storage?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main purpose of AWS Lambda?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Store and retrieve data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Run code without provisioning servers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Manage databases']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Monitor application performance']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides a content delivery network (CDN)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon SNS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon SQS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is used to launch and manage virtual machines?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service helps in building and deploying machine learning models?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon SageMaker']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a key advantage of using AWS CloudFormation?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It provides automatic backups of data.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It allows for infrastructure as code.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It offers a pay-as-you-go pricing model.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It simplifies database management.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service can be used to track API requests made to AWS services?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides DNS management?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Shield']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS WAF']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a benefit of AWS Auto Scaling?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Manual resource allocation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Improved application availability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reduced storage costs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Enhanced network security']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service is used for deploying applications in Docker containers on AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon ECS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the AWS Shared Responsibility Model dictate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS manages all security for the customer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Security and compliance are shared between AWS and the customer']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The customer is responsible for physical security']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS handles software development for the customer']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides real-time data streaming capabilities?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Kinesis']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service allows you to build conversational interfaces using voice and text?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Lex']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Transcribe']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is designed to help users analyze log data?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[
            QuizMarkdownType.TEXT, 'AWS CloudTrail']],
        },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch Logs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CodePipeline']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides a virtual network that closely resembles a traditional network?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is used to create and manage encryption keys?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS IAM']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS KMS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Secrets Manager']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Shield']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service allows for the secure, durable, and low-cost storage of archive data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Standard']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Glacier']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is used for monitoring AWS infrastructure and applications?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of a Security Group in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To control traffic to and from AWS resources']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To manage user identities and permissions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To provide VPN connectivity']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To monitor API requests']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Can a Security Group be applied to multiple instances in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Yes, it can be applied to multiple instances']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'No, it can only be applied to one instance']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Yes, but only within the same VPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'No, it can only be applied to one subnet']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which protocol and port should you allow in a Security Group to enable HTTP traffic?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'TCP, Port 22']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'TCP, Port 443']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'TCP, Port 80']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'UDP, Port 53']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement is true regarding changes to Security Group rules in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Changes to Security Group rules apply immediately']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Changes to Security Group rules require a reboot of instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Changes to Security Group rules apply after 24 hours']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Changes to Security Group rules require a new instance launch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the effect of removing all rules from an AWS Security Group?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'All inbound and outbound traffic is blocked']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Only outbound traffic is allowed']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Only inbound traffic is allowed']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The Security Group is disabled']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does a Security Group differ from a Network ACL in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Security Groups are stateless, Network ACLs are stateful']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Security Groups operate at the instance level, while Network ACLs operate at the subnet level']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Network ACLs are applied to specific instances, Security Groups are applied to entire subnets']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Security Groups must be manually updated for each instance, while Network ACLs update automatically']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is true of the following table?'],
        [QuizMarkdownType.TABLE, {
          name: 'AWS Service Characteristics',
          data: [
            { _tableDataColId: '1', service: 'Amazon EC2', characteristic: 'Compute' },
            { _tableDataColId: '2', service: 'Amazon S3', characteristic: 'Storage' },
            { _tableDataColId: '3', service: 'Amazon RDS', characteristic: 'Database' },
            { _tableDataColId: '4', service: 'Amazon VPC', characteristic: 'Networking' },
            { _tableDataColId: '5', service: 'AWS IAM', characteristic: 'Security' },
          ],
          cols: [
            { accessorKey: 'service', header: 'Service' },
            { accessorKey: 'characteristic', header: 'Characteristic' },
          ],
        }],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 is used for compute']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC is a storage service']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS IAM is a networking service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2 is used for compute']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does S3 stand for in AWS?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Simple Storage Service'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Secure Storage Service'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Structured Storage System'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Standard Storage Solution'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the maximum size of an S3 object?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '5 TB'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1 GB'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '10 TB'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1 TB'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is used for deploying and managing containers?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'ECS (Elastic Container Service)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'EKS (Elastic Kubernetes Service)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'EC2 (Elastic Compute Cloud)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'ECR (Elastic Container Registry)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does RDS stand for in AWS?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Relational Database Service'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Remote Database System'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Resource Deployment Service'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Regional Database Storage'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service can be used to distribute content to users with low latency?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'CloudFront'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Route 53'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'API Gateway'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Elastic Load Balancing'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the pricing model for AWS Lambda?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Pay-per-request'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Hourly billing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Monthly subscription'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Free tier'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service allows you to set up a virtual private cloud (VPC)?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'VPC (Virtual Private Cloud)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Direct Connect'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Route 53'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'API Gateway'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is used for real-time messaging and event-driven computing?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'SNS (Simple Notification Service)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'SQS (Simple Queue Service)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'SES (Simple Email Service)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Lambda'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is AWS CloudFormation used for?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Infrastructure as Code'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Automated Testing'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Data Warehousing'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Machine Learning'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is used for logging and monitoring resources?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'CloudWatch'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'CloudTrail'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'X-Ray'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Config'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does AWS IAM stand for?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Identity and Access Management'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Internet Access Management'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Internal Account Management'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Information Access Management'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following is an example of an AWS managed service?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon Elastic Compute Cloud (EC2)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon Relational Database Service (RDS)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon Simple Storage Service (S3)',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Identity and Access Management (IAM)',
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
          'What does the AWS Well-Architected Framework provide?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Guidance on best practices to design cloud architectures',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A tool to monitor AWS spending',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'An API for deploying AWS resources',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A service for managing user identities',
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
          'Which AWS service is used for object storage?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon RDS',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon EC2',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon S3',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon Redshift',
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
          'What is the main benefit of Amazon CloudFront?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Improves security of your content',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Scales compute resources automatically',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Provides content delivery with low latency and high transfer speeds',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Monitors application performance',
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
          'Which AWS service is used for monitoring and logging AWS resources?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS CloudTrail',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Config',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon CloudWatch',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS X-Ray',
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
          'Which of the following is a benefit of using AWS Lambda?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Automatic scaling',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Lower cost',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'No server management',
            ],
          ],
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
          'What is the main purpose of Amazon VPC?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To create isolated networks within the AWS cloud',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To provide a scalable database service',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To manage identities and access',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To monitor resource usage',
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
          'Which AWS service is used for data warehousing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon DynamoDB',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon Redshift',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon RDS',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon Aurora',
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
          'What is the primary benefit of using Amazon S3?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'High availability and durability',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Managed relational databases',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Scalable compute power',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Identity and access management',
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
          'Which AWS service can be used to run containerized applications?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon ECS',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon S3',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Lambda',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS CloudFormation',
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
          'What is AWS CloudFormation used for?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Managing cloud costs',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Running serverless functions',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Automating the deployment of AWS resources',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Monitoring cloud resources',
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
          'Which AWS service is used for managed NoSQL databases?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon Aurora',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon RDS',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon DynamoDB',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon Redshift',
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
          'What is the primary function of AWS IAM?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Managing user access and permissions',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Storing objects in the cloud',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Providing virtual servers',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Deploying containerized applications',
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
          'Which AWS service helps you centrally manage and govern your environment as you grow and scale your AWS resources?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS CloudFormation',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Organizations',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS CloudTrail',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Config',
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
          'What does Amazon CloudWatch Logs enable you to do?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Store and monitor log files from AWS resources',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Stream real-time data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Manage NoSQL databases',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Provision virtual networks',
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
          'Which AWS service enables you to quickly deploy and manage applications in the AWS Cloud without worrying about the infrastructure that runs those applications?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon EC2',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Lambda',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon RDS',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Elastic Beanstalk',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which service is used to manage DNS records for domain names?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon Route 53',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon CloudFront',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon VPC',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon EC2',
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
          'What does AWS CloudTrail record?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS resource configurations',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'API calls made to AWS services',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cloud resource monitoring data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cost and usage reports',
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
          'Which AWS service can you use to deploy and manage a Kubernetes cluster?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon EC2',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon ECS',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Lambda',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon EKS',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which service allows you to run code without provisioning or managing servers?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon EC2',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Lambda',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon RDS',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon S3',
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
          'Which AWS service provides a fully managed message queue service?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon SNS',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon SQS',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon MQ',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Step Functions',
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
          'What is Amazon Cognito used for?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Hosting static websites',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Provisioning virtual machines',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Managing user sign-up and sign-in',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Monitoring application performance',
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
          'Which AWS service is best suited for real-time data processing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon RDS',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon Kinesis',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon S3',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon Redshift',
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
          'Which service allows you to run applications without provisioning and managing servers?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon EC2',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Fargate',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Lambda',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon Lightsail',
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
          'What is the main function of AWS CloudTrail?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Monitor AWS resource utilization',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Store objects in the cloud',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Record API calls and deliver log files',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Manage NoSQL databases',
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
          'Your company wants to host a multi-tier web application on AWS. The application requires a public-facing web server and a database server that should not be accessible from the internet. Which configuration should you use?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Deploy the web server in a public subnet and the database server in a private subnet within a VPC.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Deploy both the web server and database server in the same public subnet within a VPC.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Deploy the web server in a private subnet and the database server in a public subnet within a VPC.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Deploy both the web server and database server in a private subnet within a VPC.',
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
          'A company needs to establish a secure connection between its on-premises network and AWS to ensure data is encrypted in transit. Which AWS service should they use?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Direct Connect',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS VPN',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon CloudFront',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS IAM',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of a bastion host in AWS?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To provide secure access to private instances within a VPC'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To host public-facing websites'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To manage AWS IAM roles and policies'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To automatically scale EC2 instances based on traffic'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is commonly used as a bastion host in a VPC?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'EC2 (Elastic Compute Cloud)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'S3 (Simple Storage Service)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'RDS (Relational Database Service)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'IAM (Identity and Access Management)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What security measure should be implemented for bastion hosts in AWS?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Use multi-factor authentication (MFA) for SSH access'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Store sensitive data on the bastion host'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Allow unrestricted access from any IP address'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Run production workloads on the bastion host'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a benefit of using a bastion host?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Enhanced scalability of applications'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Improved security posture for accessing private instances'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Centralized management of AWS resources'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Controlled access to sensitive data'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Your development team needs to access an RDS instance hosted in a private subnet for testing purposes. What should you do to securely grant them access?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Create a bastion host in a public subnet and use it to access the RDS instance in the private subnet.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Open the private subnet to the internet.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Move the RDS instance to a public subnet.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Use AWS Direct Connect to access the RDS instance.',
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
          'A company wants to ensure their application servers in a VPC can communicate with the internet for software updates, but they should not accept inbound connections from the internet. What solution should they implement?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Configure a NAT gateway in a public subnet and route traffic from the application servers through the NAT gateway.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Place the application servers in a public subnet with a security group blocking inbound connections.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Deploy the application servers in a private subnet without any internet connectivity.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Use an internet gateway to provide internet access to the application servers.',
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
          'Your company wants to restrict access to its VPC to only known IP addresses for security reasons. Which AWS service can help achieve this?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS WAF',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Shield',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Security Groups',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Network ACLs',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A client has deployed a web application in a VPC. They want to ensure high availability and fault tolerance by distributing traffic across multiple Availability Zones. Which AWS service should they use?',
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
              'AWS Load Balancer',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Elastic Beanstalk',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Auto Scaling',
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
          'An organization needs to allow communication between instances in two different VPCs they own. What AWS feature should they implement?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'VPC Peering',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Direct Connect',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS VPN',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Transit Gateway',
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
          'A company needs to isolate the environment for their testing, development, and production workloads within the same VPC. What AWS feature should they use?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Security Groups',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'NAT Gateway',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Subnets',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Network ACLs',
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
          'Your company wants to monitor and analyze network traffic within a VPC to identify potential security threats. Which AWS service should you use?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS CloudTrail',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'VPC Flow Logs',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Config',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon CloudWatch',
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
          'A company wants to set up a hybrid cloud architecture. They need a high-bandwidth, dedicated connection between their on-premises data center and AWS. Which service should they use?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS VPN',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Direct Connect',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS CloudFormation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Snowball',
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
          'Your organization requires all internet-bound traffic from their VPC to pass through a security appliance for inspection. Which AWS feature can help achieve this?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Transit Gateway',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'VPC Peering',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'NAT Gateway',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Network Firewall',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company needs to ensure that their AWS resources are compliant with internal security policies. Which AWS service can they use to monitor and audit configuration changes?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS CloudTrail',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Config',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon GuardDuty',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Security Hub',
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
          'An organization wants to establish a private, secure connection to an AWS VPC from multiple on-premises locations. What should they implement?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS VPN',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'VPC Peering',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Direct Connect',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Transit Gateway',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'You need to provide developers with secure, temporary access to your VPC resources for a project. Which AWS feature should you use?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'IAM Roles',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Security Groups',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Network ACLs',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'VPC Endpoints',
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
          'A company is migrating their web application to AWS and wants to ensure low latency and high availability. Which AWS service should they leverage for this?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon S3',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Global Accelerator',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Amazon CloudFront',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AWS Route 53',
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
          'A company has deployed a web server on an EC2 instance. They want to ensure that only HTTP and HTTPS traffic is allowed to the server. How should they configure the security group?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on port 80 (HTTP) and port 443 (HTTPS).',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow outbound traffic on port 80 (HTTP) and port 443 (HTTPS).',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Block inbound traffic on all ports.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on port 22 (SSH) only.',
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
          'Your development team needs to access a MySQL database on an EC2 instance. The database is hosted in a private subnet. Which security group configuration should you use?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on port 3306 from the development team’s IP addresses.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow outbound traffic on port 3306 to the development team’s IP addresses.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on port 22 for SSH access.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Block all traffic to the EC2 instance.',
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
          'A company wants to allow SSH access to their EC2 instances only from a specific IP address. What should they do?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Configure the security group to allow inbound traffic on port 22 from the specific IP address.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Configure the security group to allow outbound traffic on port 22 to the specific IP address.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Configure the security group to allow inbound traffic on port 80 from the specific IP address.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Block all inbound traffic to the EC2 instances.',
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
          'An application server needs to communicate with a database server within the same VPC. Assuming the application server and the database server are assigned to seperate security groups on default settings, how should you configure the security groups to allow this communication?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic from the application server’s security group to the database server’s security group on the database port.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow outbound traffic from the application server’s security group to the database server’s security group on the database port.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic from the database server’s security group to the application server’s security group on the database port.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Block all traffic between the application server and the database server.',
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
          'An application server needs to communicate with a database server within the same security group. Assuming default settings, how should you configure the security groups to allow this communication?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The security group does not need to be configured.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow outbound traffic from the application server’s security group to the database server’s security group on the database port.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic from the database server’s security group to the application server’s security group on the database port.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic from the application server’s security group to the database server’s security group on the database port.',
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
          'A web application needs to connect to an external API over HTTPS. How should the security group be configured?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow outbound traffic on port 443 (HTTPS).',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on port 443 (HTTPS).',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on port 80 (HTTP).',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Block all outbound traffic.',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    // {
    //   question: [
    //     [
    //       QuizMarkdownType.TEXT,
    //       'A company wants to ensure their application servers can communicate with each other while blocking all other inbound traffic. What should they do?',
    //     ],
    //   ],
    //   answers: [
    //     {
    //       id: '0',
    //       answer: [
    //         [
    //           QuizMarkdownType.TEXT,
    //           'Configure the security group to allow inbound traffic from instances assigned to the same security group.',
    //         ],
    //       ],
    //     },
    //     {
    //       id: '1',
    //       answer: [
    //         [
    //           QuizMarkdownType.TEXT,
    //           'Configure the security group to allow inbound traffic on all ports from all IP addresses.',
    //         ],
    //       ],
    //     },
    //     {
    //       id: '2',
    //       answer: [
    //         [
    //           QuizMarkdownType.TEXT,
    //           'Block all outbound traffic from the application servers.',
    //         ],
    //       ],
    //     },
    //     {
    //       id: '3',
    //       answer: [
    //         [
    //           QuizMarkdownType.TEXT,
    //           'Allow inbound traffic on port 80 (HTTP) and port 443 (HTTPS) from all IP addresses.',
    //         ],
    //       ],
    //     },
    //   ],
    //   correctAnswer: '0',
    // },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A database server should only accept connections from the application server within the same VPC. How should you configure the security group?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on the database port from the application server’s security group.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow outbound traffic on the database port to the application server’s security group.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on the database port from all IP addresses.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Block all inbound traffic to the database server.',
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
          'A company needs to temporarily allow SSH access to an EC2 instance from a developer’s home IP address. What is the best practice for configuring this access?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on port 22 from the developer’s home IP address.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on port 22 from all IP addresses.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow outbound traffic on port 22 to the developer’s home IP address.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Block all inbound traffic to the EC2 instance.',
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
          'An organization wants to restrict access to their application servers to only their internal network. What is the logical course of action?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on the required ports from the internal network’s IP address range.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on all ports from the internal network’s IP address range.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on ports 80 and 443 from the internal network’s IP address range.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow outbound traffic on the required ports to the internal network’s IP address range.',
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
          'A company’s security policy requires that only HTTPS traffic is allowed to their web servers. How should the security group be configured?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on port 443 (HTTPS) and block all other inbound traffic.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on port 80 (HTTP) and port 443 (HTTPS).',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow outbound traffic on port 443 (HTTPS).',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on all ports from all IP addresses.',
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
          'Your application server needs to connect to a third-party service over HTTPS. How should you configure the security group?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow outbound traffic on port 443 (HTTPS).',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow inbound traffic on port 443 (HTTPS).',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Block all outbound traffic.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow outbound traffic on port 80 (HTTP).',
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
          'AWS Cloudfront is a',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'CDN',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Logging service',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'IaS service',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Weather service',
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
          'What is a recommended best practice when creating security groups for your AWS resources?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Create specific security groups for each type of resource.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Use a single security group for all resources in your VPC.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow all inbound traffic and restrict outbound traffic.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Disable all security groups for better performance.',
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
          'Why is it important to regularly review and update security group rules?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To ensure they align with the principle of least privilege.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To allow unrestricted access to all IP addresses.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To disable all inbound traffic rules.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To increase the number of open ports for better connectivity.',
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
          'Which of the following is a best practice for configuring inbound rules in a security group?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow only the minimum required ports and IP addresses.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow all inbound traffic by default.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Disable all inbound traffic rules.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Enable inbound traffic on all ports for faster access.',
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
          'What is the recommended way to manage access to your EC2 instances using security groups?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow access only from specific IP addresses or CIDR blocks.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow access from all IP addresses.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Disable all inbound traffic rules.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Enable inbound traffic on port 22 from all IP addresses.',
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
          'How can you ensure that only necessary traffic is allowed to your database server?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Create security group rules that allow only the specific application servers to connect on the database port.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow all inbound traffic to the database server.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Disable all outbound traffic from the database server.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Enable inbound traffic on all ports for better connectivity.',
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
          'Which of the following is a best practice for setting up security groups in a production environment?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Use least privilege principles to restrict access as much as possible.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow all outbound traffic to simplify connectivity.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Disable security groups to improve performance.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Enable all inbound and outbound traffic for all IP addresses.',
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
          'When configuring security groups, why is it recommended to avoid using 0.0.0.0/0 in inbound rules?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Because it allows traffic from any IP address, posing a security risk.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Because it restricts access to all IP addresses, increasing security.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Because it only allows internal traffic.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Because it disables all inbound traffic.',
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
          'Your service needs to make requests to Google Maps API. How should you change your security group rules?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Add a security group rule allowing outbound traffic',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Add a security group rule allowing inbound traffic',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Add a security group rule blocking outbound traffic.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Add a security group rule blocking inbound traffic.',
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
          'What is the benefit of using security groups in combination with Network ACLs (NACLs)?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They provide an additional layer of security by allowing fine-grained control over traffic.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They replace the need for encryption.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They improve the performance of the network.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They reduce the cost of managing security.',
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
          'How should security groups be configured to comply with the principle of least privilege?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow only necessary traffic and deny all other traffic.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow all traffic by default and restrict specific traffic as needed.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Disable all security groups.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Enable all inbound and outbound traffic.',
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
          'What is the purpose of creating separate security groups for different tiers of an application (e.g., web, app, database)?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To apply specific rules and better manage access control for each tier.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To allow all tiers to use the same security rules.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To disable traffic between tiers.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To simplify security group management by using one group for all tiers.',
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
          'Why is it important to monitor and audit security group changes?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To ensure compliance with security policies and identify any unauthorized changes.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To allow unrestricted access to resources.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To disable security group rules periodically.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To increase the number of open ports for better connectivity.',
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
          'How can you restrict access to specific services on your AWS resources using security groups?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By creating inbound rules that allow traffic only on the specific ports used by those services.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By allowing all inbound traffic.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By disabling all security group rules.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By enabling outbound traffic on all ports.',
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
          'What should you do if you need to temporarily allow access to your EC2 instance from a specific IP address?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Add a temporary security group rule and remove it after access is no longer needed.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Allow access from all IP addresses.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Disable all inbound traffic.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Enable all outbound traffic.',
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
          'Why should you avoid using the default security group for your resources?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Because it allows all inbound and outbound traffic by default, which is not secure.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Because it blocks all traffic by default.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Because it improves performance.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Because it is costlier to use.',
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
          'What is the recommended approach for handling security group rules that are no longer needed?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Remove or disable them to reduce the attack surface.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Leave them in place for future use.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Expand them to cover more IP addresses.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Convert them into outbound rules.',
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
          'Which statement is true regarding the default settings of security groups?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All inbound traffic is denied and all outbound traffic is allowed',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All inbound traffic is denied and all outbound traffic is denied',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              // https://docs.aws.amazon.com/vpc/latest/userguide/default-security-group.html
              'All inbound traffic from all resources that are assigned to the security group is allowed and all outbound traffic is denied',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All inbound traffic from all resources that are assigned to the security group is allowed and all outbound traffic is allowed',
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
          'Which statement is true regarding AWS Elastic Load Balancer (ELB)endpoints?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All answers are true',
            ],
          ],
          order: 3,
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ELB endpoints are accessible via a raw IP address',
            ],
          ],
          order: 2,
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ELB endpoints are accessible via A record aliases',
            ],
          ],
          order: 1,
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ELB endpoints can be set up with an AWS CloudFront distribution',
            ],
          ],
          order: 0,
        },
      ],
      correctAnswer: '0',
    },
    // https://chatgpt.com/c/682969bf-5d38-8005-b0dd-f2621665e57a
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which answer correctly labels the constituents of a AWS Elastic Load Balancer endpoint URL (e.g. its DNS name)?',
        ],
        [
          QuizMarkdownType.CODE,
          'k8s-<1>-<2>-<3>.<4>.elb.amazonaws.com',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1. namespace 2. service 3. random-id 4. region',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1. service 2. namespace 3. random-id 4. region',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1. region 2. namespace 3. service 4. random-id',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1.random-id 2. namespace 3. service 4. region',
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
          'You have an AWS Elastic Load Balancer endpoint, e.g. *.elb.amazonaws.com. To map a domain registered in your name to this endpoint, which type of Route 53 record is required?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'AAAA',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'CNAME',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'MX',
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
          'Which type of AWS resource is accepted by AWS CloudFront for serving static sites?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'S3',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Route 53 A Record',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'EKS',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Route 53 AAAA Record',
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
          'Assume you are working on a project where the following subdomains exist and are hosted on AWS infrastructure. What answer is most likely a correct assumption about the infrastructure used?',
        ],
        [
          QuizMarkdownType.CODE,
          `// Staging

https://staging.frontend.skillstorm-congo.com/
https://staging.api.skillstorm-congo.com/

// Production

https://frontend.skillstorm-congo.com/
https://api.skillstorm-congo.com/`,
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A Route 53 A record exists for the subdomain',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'https://staging.frontend.skillstorm-congo.com/ ',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'An AWS CloudFront distribution exists for the subdomain',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'https://staging.api.skillstorm-congo.com/ ',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A Route 53 hosted zone exists for',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'https://frontend.skillstorm-congo.com/',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A Route 53 AAAA Record exists for the subdomain',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'https://staging.api.skillstorm-congo.com/ ',
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
          'Assume you are working on a project where the following subdomains exist and are hosted on AWS infrastructure. What answer is most likely a correct assumption about the infrastructure used?',
        ],
        [
          QuizMarkdownType.CODE,
          `// Staging

https://staging.frontend.skillstorm-congo.com/
https://staging.api.skillstorm-congo.com/

// Production

https://frontend.skillstorm-congo.com/
https://api.skillstorm-congo.com/`,
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A Route 53 hosted zone exists for the domain',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'skillstorm-congo.com',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A Route 53 hosted zone exists for the subdomain',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'api.skillstorm-congo.com',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A Route 53 hosted zone exists for the subdomain',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'frontend.skillstorm-congo.com',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A Route 53 AAAA Record exists for the subdomain',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'staging',
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
          'Assume you are working on a project where the following subdomains exist and are hosted on AWS infrastructure. What answer is most likely a correct assumption about the infrastructure used?',
        ],
        [
          QuizMarkdownType.CODE,
          `// Staging

https://staging.frontend.skillstorm-congo.com/
https://staging.api.skillstorm-congo.com/

// Production

https://frontend.skillstorm-congo.com/
https://api.skillstorm-congo.com/`,
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Separate Route 53 A records exist for the subdomains',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'frontend.skillstorm-congo.com',
            ],
            [
              QuizMarkdownType.TEXT,
              'and',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'staging.frontend.skillstorm-congo.com',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A Route 53 A record exists for the subdomains',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'frontend.skillstorm-congo.com',
            ],
            [
              QuizMarkdownType.TEXT,
              'and',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'staging.frontend.skillstorm-congo.com',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A Route 53 AAAA record exists for the subdomains',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'frontend.skillstorm-congo.com',
            ],
            [
              QuizMarkdownType.TEXT,
              'and',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'staging.frontend.skillstorm-congo.com',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Separate Route 53 AAAA records exist for the subdomains',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'frontend.skillstorm-congo.com',
            ],
            [
              QuizMarkdownType.TEXT,
              'and',
            ],
            [
              QuizMarkdownType.INLINE_CODE,
              'staging.frontend.skillstorm-congo.com',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    // /home/daniel413x/VirtualBox VMs/shared/project 3/presentation
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are working with an elastic load balancer (ELB) and an API gateway microservice deployed on an EKS cluster. Your ELB is responsible for distributing traffic evenly across all microservices. Which answer is true with regards to how the API gateway can be integrated with the ELB?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The API gateway is exposed to internet traffic that is routed from the ELB']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The API gateway directs traffic to the ELB, which evenly directs it to other microservices']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The API gateway is directly exposed to internet traffic without the ELB']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The API gateway and the ELB have no working relationship']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An elastic load balancer is a type of ingress.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'False']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'True']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are working with an EKS cluster. You need to store Docker images to be pulled by services as defined by your yaml configs. Which AWS service do you use to store the images?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ECR']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'ECS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'EKS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'S2']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You deploy an ingress resource. Which of the following services or components is reponsible for provisioning an elastic load balancer according to the ingress rules?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Ingress controller']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'EKS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'NAT Gateway']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Routing table']] },
      ],
      correctAnswer: '0',
    },
    // you define the set of rules, we provision the ELB implementing those rules
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following resources is a set of rules for routing external HTTP and HTTPS traffic?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Ingress']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Ingress controller']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Elastic Load Balancer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'NAT Gateway']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following resources can be described as a configuration layer?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Ingress']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Ingress controller']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Elastic Load Balancer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'NAT Gateway']] },
      ],
      correctAnswer: '0',
    },
    // k8s-staging-ingress...* has to resolve to an unreadable IP address. so k8s-staging-ingress...* must already be an A name record.
    {
      question: [
        [QuizMarkdownType.TEXT, 'An AWS ingress controller provisions you with an elastic load balancer with the address'],
        [QuizMarkdownType.INLINE_CODE, 'k8s-staging-ingress-af7115ad11-1821985949.us-east-1.elb.amazonaws.com'],
        [QuizMarkdownType.TEXT, '. You will register a record in Route 53 that points to this address. Which type of record should you register?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'An A record']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A CNAME record']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An AAAA record']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A hosted zone']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An AWS Load Balancer Controller must be provisioned in addition to a separate ingress controller like NGINX.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'False']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'True']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An A record can reference the address of another A record and map it to a custom domain.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'False']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'True']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a route table configuration for a public subnet?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '0.0.0.0/0 → Internet Gateway']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '0.0.0.0/0 → NAT Gateway']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '10.0.0.0/16 → local']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '192.168.0.0/16 → Virtual Private Gateway (VGW)']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
