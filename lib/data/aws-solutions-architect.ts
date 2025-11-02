import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'AWS Certified Solutions Architect Associate Certification',
  slug: 'aws-solutions-architect',
  category: {
    slug: 'cloud-certifications',
  },
  questions: [
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection.',
        ],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          'The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.',
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
          'A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture.',
        ],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          'What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Use Amazon Athena directly with Amazon S3 to run the queries as needed.']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed.']],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements with the LEAST amount of operational overhead?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Add the aws:PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy.']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key to the S3 bucket policy.']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly.']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Tag each user that needs access to the S3 bucket. Add the aws:PrincipalTag global condition key to the S3 bucket policy.']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will provide private network connectivity to Amazon S3?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create a gateway VPC endpoint to the S3 bucket.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an instance profile on Amazon EC2 to allow S3 access.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon API Gateway API with a private link to access the S3 endpoint.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer.',
        ],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          'After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect propose to ensure users see all of their documents at once?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Copy the data so both EBS volumes contain all the documents.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Configure the Application Load Balancer to direct a user to the server with the documents.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3.']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.']],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'How should a solutions architect design the architecture to meet these requirements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling.']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue.']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server.']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes.']],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed. The total data size is increasing and is close to the company’s total storage capacity.',
        ],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          'A solutions architect must increase the company’s available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon S3 File Gateway to extend the company’s storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon FSx for Windows File Server file system to extend the company’s storage space.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Install a utility on each user’s computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use an API Gateway authorizer to block any requests while the application processes an order.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user names and passwords that are stored locally in a file. The company wants to minimize the operational overhead of credential management.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to accomplish this goal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use AWS Secrets Manager. Turn on automatic rotation.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use AWS Systems Manager Parameter Store. Turn on automatic rotation.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon S3 bucket to store objects that are encrypted with an AWS Key Management Service (AWS KMS) encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume for each EC2 instance. Attach the new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application to the new EBS volume.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Configure Route 53 to route traffic to the CloudFront distribution.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements with the LEAST operational overhead?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB. Use the RDS API to rotate the secrets.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance.',
        ],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          'The database’s performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use Amazon Redshift with a single node for leader and compute functionality.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Amazon RDS with a Single-AZ deployment. Configure Amazon RDS to add reader instances in a different Availability Zone.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use Amazon ElastiCache for Memcached with EC2 Spot Instances.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC. The company had an inspection server in its on-premises data center. The inspection server performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the same functionalities in the AWS Cloud.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the production VPC.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company’s management team should have full access to all the visualizations. The rest of the company should have only limited access.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports and share them manually.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can access the S3 bucket.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should the solutions architect do to meet this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server. Which solution will meet these requirements with the LEAST operational overhead?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create a Network Load Balancer in the public subnet of the application’s VPC to route the traffic to the appliance for packet inspection.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an Application Load Balancer in the public subnet of the application’s VPC to route the traffic to the appliance for packet inspection.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy a transit gateway in the inspection VPC. Configure route tables to route the incoming packets through the transit gateway.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon EC2 instances on Amazon Elastic Block Store (Amazon EBS) volumes. Modifications to the cloned data must not affect the production environment. The software that accesses this data requires consistently high I/O performance.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A solutions architect needs to minimize the time that is required to clone the production data into the test environment. Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes in the test environment.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS snapshots.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements with the LEAST operational overhead?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use an Amazon S3 bucket to host the website\'s static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which storage option meets these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'S3 Standard']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'S3 Intelligent-Tiering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'S3 Standard-Infrequent Access (S3 Standard-IA)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'S3 One Zone-Infrequent Access (S3 One Zone-IA)']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which storage solution will meet these requirements MOST cost-effectively?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure S3 Intelligent-Tiering to automatically migrate objects.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'How should the solutions architect generate the information with the LEAST operational overhead?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Cost Explorer\'s granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database.',
        ],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          'During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Change the platform from Aurora to Amazon DynamoDB. Provision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS).']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to accomplish this goal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Turn on AWS Config with the appropriate rules.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Turn on AWS Trusted Advisor with the appropriate checks.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Turn on Amazon Inspector with the appropriate assessment template.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon CloudWatch Events).']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company\'s product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Share the dashboard from the CloudWatch console. Enter the product manager\'s email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an IAM user for the company\'s employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company\'s security team needs a single sign-on (SSO) solution across all the company\'s accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company\'s self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company\'s self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use AWS Directory Service. Create a two-way trust relationship with the company\'s self-managed Microsoft Active Directory.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions.',
        ],
        [QuizMarkdownType.BREAK],
        [
          QuizMarkdownType.TEXT,
          'The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB. Create an Amazon CloudFront distribution that uses the latency record as an origin.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB. Deploy an Amazon CloudFront distribution that uses the weighted record as an origin.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements MOST cost-effectively?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Stop the DB instance when tests are completed. Restart the DB instance when required.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances, Amazon RDS DB instances, and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to accomplish this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use AWS Config rules to define and detect resources that are not properly tagged.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which method is the MOST cost-effective for hosting the website?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Containerize the website and host it in AWS Fargate.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon S3 bucket and host the website there.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy a web server on an Amazon EC2 instance to host the website.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect recommend to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for DNS. The company’s solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Enable Amazon GuardDuty on the account.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Enable Amazon Inspector on the EC2 instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Enable AWS Shield and assign Amazon Route 53 to it.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Enable AWS Shield Advanced and assign the ELB to it.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements with the LEAST operational overhead?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements with the LEAST operational overhead?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use the EC2 serial console to directly access the terminal interface of each instance for administration.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users who access the website.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements MOST cost-effectively?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing entries.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket. Edit the Route 53 entries to point to the IP addresses of the accelerators.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the CloudFront distribution.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD storage. There are millions of updates against this data every day through the company’s website.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'The company has noticed that some insert operations are taking 10 seconds or longer. The company has determined that the database storage performance is the problem. Which solution addresses this performance issue?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Change the storage type to Provisioned IOPS SSD.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Change the DB instance to a memory optimized instance class.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Change the DB instance to a burstable performance instance class.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis. The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What is the MOST operationally efficient solution that meets these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon OpenSearch Service cluster. Set up the Amazon OpenSearch Service cluster to take manual snapshots every day and delete data from the cluster that is older than 14 days.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, and set the message retention period to 14 days. Configure consumers to poll the SQS queue, check the age of the message, and analyze the message data as needed. If the message is 14 days old, the consumer should copy the message to an Amazon S3 bucket and delete the message from the SQS queue.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'An Amazon EC2 administrator created the following IAM policy associated with a group containing several users:',
        ],
        [QuizMarkdownType.CODE, `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "ec2:TerminateInstances",
      "Resource": "*",
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "10.100.100.0/24"
        }
      }
    },
    {
      "Effect": "Deny",
      "Action": "ec2:*",
      "Resource": "*",
      "Condition": {
        "StringNotEquals": {
          "ec2:Region": "us-east-1"
        }
      }
    }
  ]
}`],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What is the effect of this policy?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Users can terminate an EC2 instance in any AWS Region except us-east-1.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Users can terminate an EC2 instance with the IP address 10.100.100.1 in the us-east-1 Region.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Users can terminate an EC2 instance in the us-east-1 Region when the user’s source IP is 10.100.100.254.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Users cannot terminate an EC2 instance in the us-east-1 Region when the user’s source IP is 10.100.100.254.'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A solutions architect is designing a VPC with public and private subnets. The VPC and subnets use IPv4 CIDR blocks. There is one public subnet and one private subnet in each of three Availability Zones (AZs) for high availability. An internet gateway is used to provide internet access for the public subnets. The private subnets require access to the internet to allow Amazon EC2 instances to download software updates.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should the solutions architect do to enable internet access for the private subnets?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create three NAT gateways, one for each public subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create three NAT instances, one for each private subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT instance in its AZ.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create a second internet gateway on one of the private subnets. Update the route table for the private subnets that forward non-VPC traffic to the private internet gateway.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an egress-only internet gateway on one of the public subnets. Update the route table for the private subnets that forward non-VPC traffic to the egress-only internet gateway.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has an AWS Glue extract, transform, and load (ETL) job that runs every day at the same time. The job processes XML data that is in an Amazon S3 bucket. New data is added to the S3 bucket every day. A solutions architect notices that AWS Glue is processing all the data during each run.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should the solutions architect do to prevent AWS Glue from reprocessing old data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Edit the job to use job bookmarks.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Edit the job to delete data after the data is processed.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Edit the job by setting the NumberOfWorkers field to 1.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use a FindMatches machine learning (ML) transform.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least privilege to configure permissions that will be used to run an AWS Lambda function. An Amazon EventBridge (Amazon CloudWatch Events) rule will invoke the function.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Add an execution role to the function with lambda:InvokeFunction as the action and * as the principal.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Add an execution role to the function with lambda:InvokeFunction as the action and Service: lambda.amazonaws.com as the principal.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Add a resource-based policy to the function with lambda:* as the action and Service: events.amazonaws.com as the principal.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Add a resource-based policy to the function with lambda:InvokeFunction as the action and Service: events.amazonaws.com as the principal.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is preparing to store confidential data in Amazon S3. For compliance reasons, the data must be encrypted at rest. Encryption key usage must be logged for auditing purposes. Keys must be rotated every year.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements and is the MOST operationally efficient?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Server-side encryption with customer-provided keys (SSE-C).']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Server-side encryption with Amazon S3 managed keys (SSE-S3).']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Server-side encryption with AWS KMS keys (SSE-KMS) with manual rotation.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Server-side encryption with AWS KMS keys (SSE-KMS) with automatic rotation.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A bicycle sharing company is developing a multi-tier architecture to track the location of its bicycles during peak operating hours. The company wants to use these data points in its existing analytics platform. A solutions architect must determine the most viable multi-tier option to support this architecture. The data points must be accessible from the REST API.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which action meets these requirements for storing and retrieving location data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use Amazon Athena with Amazon S3.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Amazon API Gateway with AWS Lambda.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use Amazon QuickSight with Amazon Redshift.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use Amazon API Gateway with Amazon Kinesis Data Analytics.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has an automobile sales website that stores its listings in a database on Amazon RDS. When an automobile is sold, the listing needs to be removed from the website and the data must be sent to multiple target systems.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which design should a solutions architect recommend?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) queue for the targets to consume.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) FIFO queue for the targets to consume.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Subscribe to an RDS event notification and send an Amazon Simple Queue Service (Amazon SQS) queue fanned out to multiple Amazon Simple Notification Service (Amazon SNS) topics. Use AWS Lambda functions to update the targets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company needs to store data in Amazon S3 and must prevent the data from being changed. The company wants new objects that are uploaded to Amazon S3 to remain unchangeable for a nonspecific amount of time until the company decides to modify the objects. Only specific users in the company’s AWS account can have the ability to delete the objects.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an S3 Glacier vault. Apply a write-once, read-many (WORM) vault lock policy to the objects.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Set a retention period of 100 years. Use governance mode as the S3 bucket’s default retention mode for new objects.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an S3 bucket. Use AWS CloudTrail to track any S3 API events that modify the objects. Upon notification, restore the modified objects from any backup versions that the company has.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Add a legal hold to the objects. Add the s3:PutObjectLegalHold permission to the IAM policies of users who need to delete the objects.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company recently migrated a message processing system to AWS. The system receives messages into an ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database running on Amazon EC2. The company wants this application to be highly available with low operational complexity.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which architecture offers the HIGHEST availability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Add a second ActiveMQ server to another Availability Zone. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Use Amazon RDS for MySQL with Multi-AZ enabled.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an Auto Scaling group for the consumer EC2 instances across two Availability Zones. Use Amazon RDS for MySQL with Multi-AZ enabled.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company hosts a containerized web application on a fleet of on-premises servers that process incoming requests. The number of requests is growing quickly. The on-premises servers cannot handle the increased number of requests. The company wants to move the application to AWS with minimum code changes and minimum development effort.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements with the LEAST operational overhead?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use AWS Fargate on Amazon Elastic Container Service (Amazon ECS) to run the containerized web application with Service Auto Scaling. Use an Application Load Balancer to distribute the incoming requests.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use two Amazon EC2 instances to host the containerized web application. Use an Application Load Balancer to distribute the incoming requests.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use AWS Lambda with a new code that uses one of the supported languages. Create multiple Lambda functions to support the load. Use Amazon API Gateway as an entry point to the Lambda functions.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use a high performance computing (HPC) solution such as AWS ParallelCluster to establish an HPC cluster that can process the incoming requests at the appropriate scale.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company uses 50 TB of data for reporting. The company wants to move this data from on premises to AWS. A custom application in the company’s data center runs a weekly data transformation job. The company plans to pause the application until the data transfer is complete and needs to begin the transfer process as soon as possible. The data center does not have any available network bandwidth for additional workloads. A solutions architect must transfer the data and must configure the transformation job to continue to run in the AWS Cloud.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements with the LEAST operational overhead?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Order an AWS Snowcone device to move the data. Deploy the transformation application to the device.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has created an image analysis application in which users can upload photos and add photo frames to their images. The users upload images and metadata to indicate which photo frames they want to add to their images. The application uses a single Amazon EC2 instance and Amazon DynamoDB to store the metadata. The application is becoming more popular, and the number of users is increasing. The company expects the number of concurrent users to vary significantly depending on the time of day and day of week. The company must ensure that the application can scale to meet the needs of the growing user base.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use AWS Lambda to process the photos. Store the photos and metadata in DynamoDB.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Amazon Kinesis Data Firehose to process the photos and to store the photos and metadata.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use AWS Lambda to process the photos. Store the photos in Amazon S3. Retain DynamoDB to store the metadata.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Increase the number of EC2 instances to three. Use Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volumes to store the photos and metadata.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A medical records company is hosting an application on Amazon EC2 instances. The application processes customer data files that are stored on Amazon S3. The EC2 instances are hosted in public subnets. The EC2 instances access Amazon S3 over the internet, but they do not require any other network access. A new requirement mandates that the network traffic for file transfers take a private route and not be sent over the internet.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which change to the network architecture should a solutions architect recommend to meet this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create a NAT gateway. Configure the route table for the public subnets to send traffic to Amazon S3 through the NAT gateway.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Configure the security group for the EC2 instances to restrict outbound traffic so that only traffic to the S3 prefix list is permitted.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Move the EC2 instances to private subnets. Create a VPC endpoint for Amazon S3, and link the endpoint to the route table for the private subnets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Remove the internet gateway from the VPC. Set up an AWS Direct Connect connection, and route traffic to Amazon S3 over the Direct Connect connection.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company stores its application logs in an Amazon CloudWatch Logs log group. A new policy requires the company to store all application logs in Amazon OpenSearch Service (Amazon Elasticsearch Service) in near-real time.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet this requirement with the LEAST operational overhead?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure a CloudWatch Logs subscription to stream the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an AWS Lambda function. Use the log group to invoke the function to write the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon Kinesis Data Firehose delivery stream. Configure the log group as the delivery stream’s source. Configure Amazon OpenSearch Service (Amazon Elasticsearch Service) as the delivery stream’s destination.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Install and configure Amazon Kinesis Agent on each application server to deliver the logs to Amazon Kinesis Data Streams. Configure Kinesis Data Streams to deliver the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is building a web-based application running on Amazon EC2 instances in multiple Availability Zones. The web application will provide access to a repository of text documents totaling about 900 TB in size. The company anticipates that the web application will experience periods of high demand. A solutions architect must ensure that the storage component for the text documents can scale to meet the demand of the application at all times. The company is concerned about the overall cost of the solution.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which storage solution meets these requirements MOST cost-effectively?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic Block Store (Amazon EBS).']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System (Amazon EFS).']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon OpenSearch Service (Amazon Elasticsearch Service).']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A global company is using Amazon API Gateway to design REST APIs for its loyalty club users in the us-east-1 Region and the ap-southeast-2 Region. A solutions architect must design a solution to protect these API Gateway managed REST APIs across multiple accounts from SQL injection and cross-site scripting attacks.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements with the LEAST amount of administrative effort?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Set up AWS WAF in both Regions. Associate Regional web ACLs with an API stage.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Set up AWS Firewall Manager in both Regions. Centrally configure AWS WAF rules.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Set up AWS Shield in both Regions. Associate Regional web ACLs with an API stage.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Set up AWS Shield in one of the Regions. Associate Regional web ACLs with an API stage.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has implemented a self-managed DNS solution on three Amazon EC2 instances behind a Network Load Balancer (NLB) in the us-west-2 Region. Most of the company’s users are located in the United States and Europe. The company wants to improve the performance and availability of the solution. The company launches and configures three EC2 instances in the eu-west-1 Region and adds the EC2 instances as targets for a new NLB.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution can the company use to route traffic to all the EC2 instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon Route 53 geolocation routing policy to route requests to one of the two NLBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create a standard accelerator in AWS Global Accelerator. Create endpoint groups in us-west-2 and eu-west-1. Add the two NLBs as endpoints for the endpoint groups.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Attach Elastic IP addresses to the six EC2 instances. Create an Amazon Route 53 geolocation routing policy to route requests to one of the six EC2 instances. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Replace the two NLBs with two Application Load Balancers (ALBs). Create an Amazon Route 53 latency routing policy to route requests to one of the two ALBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is running an online transaction processing (OLTP) workload on AWS. This workload uses an unencrypted Amazon RDS DB instance in a Multi-AZ deployment. Daily database snapshots are taken from this instance.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to ensure the database and snapshots are always encrypted moving forward?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Encrypt a copy of the latest DB snapshot. Replace existing DB instance by restoring the encrypted snapshot.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create a new encrypted Amazon Elastic Block Store (Amazon EBS) volume and copy the snapshots to it. Enable encryption on the DB instance.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Copy the snapshots and enable encryption using AWS Key Management Service (AWS KMS). Restore encrypted snapshot to an existing DB instance.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Copy the snapshots to an Amazon S3 bucket that is encrypted using server-side encryption with AWS Key Management Service (AWS KMS) managed keys (SSE-KMS).']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company wants to build a scalable key management infrastructure to support developers who need to encrypt data in their applications.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to reduce the operational burden?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use multi-factor authentication (MFA) to protect the encryption keys.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use AWS Key Management Service (AWS KMS) to protect the encryption keys.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use AWS Certificate Manager (ACM) to create, store, and assign the encryption keys.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use an IAM policy to limit the scope of users who have access permissions to protect the encryption keys.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL certificate, which is on each instance to perform SSL termination. There has been an increase in traffic recently, and the operations team determined that SSL encryption and decryption is causing the compute capacity of the web servers to reach their maximum limit.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to increase the application\'s performance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create a new SSL certificate using AWS Certificate Manager (ACM). Install the ACM certificate on each instance.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon S3 bucket. Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to reference the bucket for SSL termination.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and configure it to direct connections to the existing EC2 instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the SSL certificate from ACM.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has a highly dynamic batch processing job that uses many Amazon EC2 instances to complete it. The job is stateless in nature, can be started and stopped at any given time with no negative impact, and typically takes upwards of 60 minutes total to complete. The company has asked a solutions architect to design a scalable and cost-effective solution that meets the requirements of the job.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should the solutions architect recommend?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Implement EC2 Spot Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Purchase EC2 Reserved Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Implement EC2 On-Demand Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Implement the processing on AWS Lambda.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A solutions architect needs to implement a solution to reduce a company’s storage costs. All the company’s data is in the Amazon S3 Standard storage class. The company must keep all data for at least 25 years. Data from the most recent 2 years must be highly available and immediately retrievable.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 years.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in S3 Glacier Deep Archive.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately and to S3 Glacier Deep Archive after 2 years.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A media company is evaluating the possibility of moving its systems to the AWS Cloud. The company needs at least 10 TB of storage with the maximum possible I/O performance for video processing, 300 TB of very durable storage for storing media content, and 900 TB of storage to meet requirements for archival media that is not in use anymore.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which set of services should a solutions architect recommend to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS for maximum performance, Amazon EFS for durable data storage, and Amazon S3 Glacier for archival storage.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2 instance store for maximum performance, Amazon EFS for durable data storage, and Amazon S3 for archival storage.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'An application runs on Amazon EC2 instances across multiple Availability Zones. The instances run in an Amazon EC2 Auto Scaling group behind an Application Load Balancer. The application performs best when the CPU utilization of the EC2 instances is at or near 40%.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to maintain the desired performance across all instances in the group?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use a simple scaling policy to dynamically scale the Auto Scaling group.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use a target tracking policy to dynamically scale the Auto Scaling group.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use an AWS Lambda function to update the desired Auto Scaling group capacity.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use scheduled scaling actions to scale up and scale down the Auto Scaling group.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is developing a file-sharing application that will use an Amazon S3 bucket for storage. The company wants to serve all the files through an Amazon CloudFront distribution. The company does not want the files to be accessible through direct navigation to the S3 URL.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Write individual policies for each S3 bucket to grant read permission for only CloudFront access.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an IAM user. Grant the user read permission to objects in the S3 bucket. Assign the user to CloudFront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Write an S3 bucket policy that assigns the CloudFront distribution ID as the Principal and assigns the target S3 bucket as the Amazon Resource Name (ARN).']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an origin access identity (OAI). Assign the OAI to the CloudFront distribution. Configure the S3 bucket permissions so that only the OAI has read permission.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company\'s website provides users with downloadable historical performance reports. The website needs a solution that will scale to meet the company\'s website demands globally. The solution should be cost-effective, limit the provisioning of infrastructure resources, and provide the fastest possible response time.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which combination should a solutions architect recommend to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront and Amazon S3.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda and Amazon DynamoDB.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Application Load Balancer with Amazon EC2 Auto Scaling.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53 with internal Application Load Balancers.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company runs an Oracle database on premises. As part of the company’s migration to AWS, the company wants to upgrade the database to the most recent available version. The company also wants to set up disaster recovery (DR) for the database. The company needs to minimize the operational overhead for normal operations and DR setup. The company also needs to maintain access to the database\'s underlying operating system.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS Region.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to replicate the snapshots to another AWS Region.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Migrate the Oracle database to Amazon RDS Custom for Oracle. Create a read replica for the database in another AWS Region.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability Zone.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing and new data by using SQL. The company stores the data in an Amazon S3 bucket. The data requires encryption and must be replicated to a different AWS Region.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements with the LEAST operational overhead?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon Athena to query the data.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon Athena to query the data.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon RDS to query the data.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company runs workloads on AWS. The company needs to connect to a service from an external provider. The service is hosted in the provider\'s VPC. According to the company’s security team, the connectivity must be private and must be restricted to the target service. The connection must be initiated only from the company’s VPC.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create a VPC peering connection between the company\'s VPC and the provider\'s VPC. Update the route table to connect to the target service.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Ask the provider to create a virtual private gateway in its VPC. Use AWS PrivateLink to connect to the target service.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create a NAT gateway in a public subnet of the company\'s VPC. Update the route table to connect to the target service.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Ask the provider to create a VPC endpoint for the target service. Use AWS PrivateLink to connect to the target service.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company uses AWS Organizations to create dedicated AWS accounts for each business unit to manage each business unit’s account independently upon request. The root email recipient missed a notification that was sent to the root user email address of one account. The company wants to ensure that all future notifications are not missed. Future notifications must be limited to account administrators.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure the company’s email server to forward notification email messages that are sent to the AWS account root user email address to all users in the organization.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Configure all AWS account root user email addresses as distribution lists that go to a few administrators who can respond to alerts. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Configure all AWS account root user email messages to be sent to one administrator who is responsible for monitoring alerts and forwarding those alerts to the appropriate groups.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure all existing AWS accounts and all newly created accounts to use the same root user email address. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company runs its ecommerce application on AWS. Every new order is published as a message in a RabbitMQ queue that runs on an Amazon EC2 instance in a single Availability Zone. These messages are processed by a different application that runs on a separate EC2 instance. This application stores the details in a PostgreSQL database on another EC2 instance. All the EC2 instances are in the same Availability Zone.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'The company needs to redesign its architecture to provide the highest availability with the least operational overhead. What should a solutions architect do to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Create another Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Create a third Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A reporting team receives files each day in an Amazon S3 bucket. The reporting team manually reviews and copies the files from this initial S3 bucket to an analysis S3 bucket each day at the same time to use with Amazon QuickSight. Additional teams are starting to send more files in larger sizes to the initial S3 bucket. The reporting team wants to move the files automatically to the analysis S3 bucket as the files enter the initial S3 bucket. The reporting team also wants to use AWS Lambda functions to run pattern-matching code on the copied data. In addition, the reporting team wants to send the data files to a pipeline in Amazon SageMaker Pipelines.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to meet these requirements with the LEAST operational overhead?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create a Lambda function to copy the files to the analysis S3 bucket. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create a Lambda function to copy the files to the analysis S3 bucket. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Configure S3 replication between the S3 buckets. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure S3 replication between the S3 buckets. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company runs a web-based portal that provides users with global breaking news, local alerts, and weather updates. The portal delivers each user a personalized view by using a mixture of static and dynamic content. Content is served over HTTPS through an API server running on an Amazon EC2 instance behind an Application Load Balancer (ALB). The company wants the portal to provide this content to its users across the world as quickly as possible.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'How should a solutions architect design the application to ensure the LEAST amount of latency for all users?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve all static and dynamic content by specifying the ALB as an origin.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deploy the application stack in two AWS Regions. Use an Amazon Route 53 latency routing policy to serve all content from the ALB in the closest Region.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve the static content. Serve the dynamic content directly from the ALB.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploy the application stack in two AWS Regions. Use an Amazon Route 53 geolocation routing policy to serve all content from the ALB in the closest Region.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A gaming company is designing a highly available architecture. The application runs on a modified Linux kernel and supports only UDP-based traffic. The company needs the front-end tier to provide the best possible user experience. That tier must have low latency, route traffic to the nearest edge location, and provide static IP addresses for entry into the application endpoints.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure Amazon Route 53 to forward requests to an Application Load Balancer. Use AWS Lambda for the application in AWS Application Auto Scaling.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Configure Amazon CloudFront to forward requests to a Network Load Balancer. Use AWS Lambda for the application in an AWS Application Auto Scaling group.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Configure AWS Global Accelerator to forward requests to a Network Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure Amazon API Gateway to forward requests to an Application Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company wants to migrate its existing on-premises monolithic application to AWS. The company wants to keep as much of the front-end code and the backend code as possible. However, the company wants to break the application into smaller applications. A different team will manage each application. The company needs a highly scalable solution that minimizes operational overhead.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Host the application on AWS Lambda. Integrate the application with Amazon API Gateway.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Host the application with AWS Amplify. Connect the application to an Amazon API Gateway API that is integrated with AWS Lambda.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Host the application on Amazon EC2 instances. Set up an Application Load Balancer with EC2 instances in an Auto Scaling group as targets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Host the application on Amazon Elastic Container Service (Amazon ECS). Set up an Application Load Balancer with Amazon ECS as the target.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company recently started using Amazon Aurora as the data store for its global ecommerce application. When large reports are run, developers report that the ecommerce application is performing poorly. After reviewing metrics in Amazon CloudWatch, a solutions architect finds that the ReadIOPS and CPUUtilization metrics are spiking when monthly reports run.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What is the MOST cost-effective solution?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Migrate the monthly reporting to Amazon Redshift.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Migrate the monthly reporting to an Aurora Replica.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Migrate the Aurora database to a larger instance class.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Increase the Provisioned IOPS on the Aurora instance.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics software is written in PHP and uses a MySQL database. The analytics software, the web server that provides PHP, and the database server are all hosted on the EC2 instance. The application is showing signs of performance degradation during busy times and is presenting 5xx errors. The company needs to make the application scale seamlessly.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements MOST cost-effectively?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load to each EC2 instance.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Migrate the database to an Amazon Aurora MySQL DB instance. Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization surpasses 75%.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Migrate the database to an Amazon Aurora MySQL DB instance. Create an AMI of the web application. Apply the AMI to a launch template. Create an Auto Scaling group with the launch template. Configure the launch template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company runs a stateless web application in production on a group of Amazon EC2 On-Demand Instances behind an Application Load Balancer. The application experiences heavy usage during an 8-hour period each business day. Application usage is moderate and steady overnight. Application usage is low during weekends. The company wants to minimize its EC2 costs without affecting the availability of the application.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use Spot Instances for the entire workload.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Reserved Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use On-Demand Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use Dedicated Instances for the baseline level of usage. Use On-Demand Instances for any additional capacity that the application needs.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company needs to retain application log files for a critical application for 10 years. The application team regularly accesses logs from the past month for troubleshooting, but logs older than 1 month are rarely accessed. The application generates more than 10 TB of logs per month.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which storage option meets these requirements MOST cost-effectively?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Store the logs in Amazon S3. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Store the logs in Amazon S3. Use S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Store the logs in Amazon CloudWatch Logs. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Store the logs in Amazon CloudWatch Logs. Use Amazon S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has a data ingestion workflow that includes the following components: an Amazon Simple Notification Service (Amazon SNS) topic that receives notifications about new data deliveries, and an AWS Lambda function that processes and stores the data. The ingestion workflow occasionally fails because of network connectivity issues. When failure occurs, the corresponding data is not ingested unless the company manually reruns the job.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to ensure that all notifications are eventually processed?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure the Lambda function for deployment across multiple Availability Zones.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Modify the Lambda function\'s configuration to increase the CPU and memory allocations for the function.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Configure the SNS topic’s retry strategy to increase both the number of retries and the wait time between retries.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure an Amazon Simple Queue Service (Amazon SQS) queue as the on-failure destination. Modify the Lambda function to process messages in the queue.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has a service that produces event data. The company wants to use AWS to process the event data as it is received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'How should a solutions architect accomplish this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is migrating an application from on-premises servers to Amazon EC2 instances. As part of the migration design requirements, a solutions architect must implement infrastructure metric alarms. The company does not need to take action if CPU utilization increases to more than 50% for a short burst of time. However, if the CPU utilization increases to more than 50% and read IOPS on the disk are high at the same time, the company needs to act as soon as possible. The solutions architect also must reduce false alarms.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should the solutions architect do to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create Amazon CloudWatch composite alarms where possible.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create Amazon CloudWatch dashboards to visualize the metrics and react to issues quickly.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create Amazon CloudWatch Synthetics canaries to monitor the application and raise an alarm.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create single Amazon CloudWatch metric alarms with multiple metric thresholds where possible.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company uses a three-tier web application to provide training to new employees. The application is accessed for only 12 hours every day. The company is using an Amazon RDS for MySQL DB instance to store information and wants to minimize costs.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure an IAM policy for AWS Systems Manager Session Manager. Create an IAM role for the policy. Update the trust relationship of the role. Set up automatic start and stop for the DB instance.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon ElastiCache for Redis cache cluster that gives users the ability to access the data from the cache when the DB instance is stopped. Invalidate the cache after the DB instance is started.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Launch an Amazon EC2 instance. Create an IAM role that grants access to Amazon RDS. Attach the role to the EC2 instance. Configure a cron job to start and stop the EC2 instance on the desired schedule.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create AWS Lambda functions to start and stop the DB instance. Create Amazon EventBridge (Amazon CloudWatch Events) scheduled rules to invoke the Lambda functions. Configure the Lambda functions as event targets for the rules.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company sells ringtones created from clips of popular songs. The files containing the ringtones are stored in Amazon S3 Standard and are at least 128 KB in size. The company has millions of files, but downloads are infrequent for ringtones older than 90 days. The company needs to save money on storage while keeping the most accessed files readily available for its users.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which action should the company take to meet these requirements MOST cost-effectively?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure S3 Standard-Infrequent Access (S3 Standard-IA) storage for the initial storage tier of the objects.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Move the files to S3 Intelligent-Tiering and configure it to move objects to a less expensive storage tier after 90 days.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Configure S3 inventory to manage objects and move them to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Implement an S3 Lifecycle policy that moves the objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company needs to save the results from a medical trial to an Amazon S3 repository. The repository must allow a few scientists to add new files and must restrict all other users to read-only access. No users can have the ability to modify or delete any files in the repository. The company must keep every file in the repository for a minimum of 1 year after its creation date.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use S3 Object Lock in governance mode with a legal hold of 1 year.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use S3 Object Lock in compliance mode with a retention period of 365 days.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use an IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket policy to only allow the IAM role.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the function to track the hash of the saved object so that modified objects can be marked accordingly.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A large media company hosts a web application on AWS. The company wants to start caching confidential media files so that users around the world will have reliable access to the files. The content is stored in Amazon S3 buckets. The company must deliver the content quickly, regardless of where the requests originate geographically.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use AWS DataSync to connect the S3 buckets to the web application.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deploy AWS Global Accelerator to connect the S3 buckets to the web application.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A solutions architect is optimizing a website for an upcoming musical event. Videos of the performances will be streamed in real time and then will be available on demand. The event is expected to attract a global online audience.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which service will improve the performance of both the real-time and on-demand streaming?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Global Accelerator.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Transfer Acceleration.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'An ecommerce company hosts its analytics application in the AWS Cloud. The application generates about 300 MB of data each month. The data is stored in JSON format. The company is evaluating a disaster recovery solution to back up the data. The data must be accessible in milliseconds if it is needed, and the data must be kept for 30 days.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements MOST cost-effectively?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon OpenSearch Service (Amazon Elasticsearch Service).']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Glacier.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Standard.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS for PostgreSQL.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has a small Python application that processes JSON documents and outputs the results to an on-premises SQL database. The application runs thousands of times each day. The company wants to move the application to the AWS Cloud. The company needs a highly available solution that maximizes scalability and minimizes operational overhead.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Place the JSON documents in an Amazon S3 bucket. Run the Python code on multiple Amazon EC2 instances to process the documents. Store the results in an Amazon Aurora DB cluster.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Place the JSON documents in an Amazon S3 bucket. Create an AWS Lambda function that runs the Python code to process the documents as they arrive in the S3 bucket. Store the results in an Amazon Aurora DB cluster.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Place the JSON documents in an Amazon Elastic Block Store (Amazon EBS) volume. Use the EBS Multi-Attach feature to attach the volume to multiple Amazon EC2 instances. Run the Python code on the EC2 instances to process the documents. Store the results on an Amazon RDS DB instance.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Place the JSON documents in an Amazon Simple Queue Service (Amazon SQS) queue as messages. Deploy the Python code as a container on an Amazon Elastic Container Service (Amazon ECS) cluster that is configured with the Amazon EC2 launch type. Use the container to process the SQS messages. Store the results on an Amazon RDS DB instance.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company wants to use high performance computing (HPC) infrastructure on AWS for financial risk modeling. The company’s HPC workloads run on Linux. Each HPC workflow runs on hundreds of Amazon EC2 Spot Instances, is short-lived, and generates thousands of output files that are ultimately stored in persistent storage for analytics and long-term future use. The company seeks a cloud storage solution that permits the copying of on-premises data to long-term persistent storage to make data available for processing by all EC2 instances. The solution should also be a high performance file system that is integrated with persistent storage to read and write datasets and output files.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which combination of AWS services meets these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon FSx for Lustre integrated with Amazon S3.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon FSx for Windows File Server integrated with Amazon S3.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Glacier integrated with Amazon Elastic Block Store (Amazon EBS).']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 bucket with a VPC endpoint integrated with an Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) volume.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is building a containerized application on premises and decides to move the application to AWS. The application will have thousands of users soon after it is deployed. The company is unsure how to manage the deployment of containers at scale. The company needs to deploy the containerized application in a highly available architecture that minimizes operational overhead.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use target tracking to scale automatically based on demand.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use target tracking to scale automatically based on demand.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2 instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon CloudWatch. Launch new EC2 instances as needed.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to scale out EC2 instances when the average CPU utilization threshold is breached.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has two applications: a sender application that sends messages with payloads to be processed and a processing application intended to receive the messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed. If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements and is the MOST operationally efficient?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue. Configure a dead-letter queue to collect the messages that failed to process.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A solutions architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a static website. The company’s security policy requires that all website traffic be inspected by AWS WAF.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'How should the solutions architect comply with these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure an S3 bucket policy to accept requests coming from the AWS WAF Amazon Resource Name (ARN) only.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Configure Amazon CloudFront to forward all incoming requests to AWS WAF before requesting content from the S3 origin.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Configure a security group that allows Amazon CloudFront IP addresses to access Amazon S3 only. Associate AWS WAF to CloudFront.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure Amazon CloudFront and Amazon S3 to use an origin access identity (OAI) to restrict access to the S3 bucket. Enable AWS WAF on the distribution.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Organizers for a global event want to put daily reports online as static HTML pages. The pages are expected to generate millions of views from users around the world. The files are stored in an Amazon S3 bucket. A solutions architect has been asked to design an efficient and effective solution.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which action should the solutions architect take to accomplish this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Generate presigned URLs for the files.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use cross-Region replication to all Regions.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use the geoproximity feature of Amazon Route 53.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use Amazon CloudFront with the S3 bucket as its origin.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company runs a production application on a fleet of Amazon EC2 instances. The application reads the data from an Amazon SQS queue and processes the messages in parallel. The message volume is unpredictable and often has intermittent traffic. This application should continually process messages without any downtime.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements MOST cost-effectively?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use Spot Instances exclusively to handle the maximum capacity required.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Reserved Instances exclusively to handle the maximum capacity required.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use Reserved Instances for the baseline capacity and use Spot Instances to handle additional capacity.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use Reserved Instances for the baseline capacity and use On-Demand Instances to handle additional capacity.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A security team wants to limit access to specific services or actions in all of the team’s AWS accounts. All accounts belong to a large organization in AWS Organizations. The solution must be scalable and there must be a single point where permissions can be maintained.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to accomplish this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an ACL to provide access to the services or actions.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create a security group to allow accounts and attach it to user groups.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create cross-account roles in each account to deny access to the services or actions.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create a service control policy in the root organizational unit to deny access to the services or actions.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is concerned about the security of its public web application due to recent web attacks. The application uses an Application Load Balancer (ALB). A solutions architect must reduce the risk of DDoS attacks against the application.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should the solutions architect do to meet this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Add an Amazon Inspector agent to the ALB.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Configure Amazon Macie to prevent attacks.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Enable AWS Shield Advanced to prevent attacks.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure Amazon GuardDuty to monitor the ALB.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company’s web application is running on Amazon EC2 instances behind an Application Load Balancer. The company recently changed its policy, which now requires the application to be accessed from one specific country only.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which configuration will meet this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure the security group for the EC2 instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Configure the security group on the Application Load Balancer.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Configure AWS WAF on the Application Load Balancer in a VPC.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure the network ACL for the subnet that contains the EC2 instances.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company provides an API to its users that automates inquiries for tax computations based on item prices. The company experiences a larger number of inquiries during the holiday season only that cause slower response times. A solutions architect needs to design a solution that is scalable and elastic.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should the solutions architect do to accomplish this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Provide an API hosted on an Amazon EC2 instance. The EC2 instance performs the required computations when the API request is made.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Design a REST API using Amazon API Gateway that accepts the item names. API Gateway passes item names to AWS Lambda for tax computations.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an Application Load Balancer that has two Amazon EC2 instances behind it. The EC2 instances will compute the tax on the received item names.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2 instance. API Gateway accepts and passes the item names to the EC2 instance for tax computations.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A solutions architect is creating a new Amazon CloudFront distribution for an application. Some of the information submitted by users is sensitive. The application uses HTTPS but needs another layer of security. The sensitive information should be protected throughout the entire application stack, and access to the information should be restricted to certain applications.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which action should the solutions architect take?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure a CloudFront signed URL.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Configure a CloudFront signed cookie.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Configure a CloudFront field-level encryption profile.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure CloudFront and set the Origin Protocol Policy setting to HTTPS Only for the Viewer Protocol Policy.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A gaming company hosts a browser-based application on AWS. The users of the application consume a large number of videos and images that are stored in Amazon S3. This content is the same for all users. The application has increased in popularity, and millions of users worldwide are accessing these media files. The company wants to provide the files to the users while reducing the load on the origin.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements MOST cost-effectively?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Deploy an AWS Global Accelerator accelerator in front of the web servers.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deploy an Amazon CloudFront web distribution in front of the S3 bucket.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy an Amazon ElastiCache for Redis instance in front of the web servers.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploy an Amazon ElastiCache for Memcached instance in front of the web servers.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has a multi-tier application that runs six front-end web servers in an Amazon EC2 Auto Scaling group in a single Availability Zone behind an Application Load Balancer (ALB). A solutions architect needs to modify the infrastructure to be highly available without modifying the application.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which architecture should the solutions architect choose that provides high availability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an Auto Scaling group that uses three instances across each of two Regions.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Modify the Auto Scaling group to use three instances across each of two Availability Zones.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an Auto Scaling template that can be used to quickly create more instances in another Region.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Change the ALB in front of the Amazon EC2 instances in a round-robin configuration to balance traffic to the web tier.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'An ecommerce company has an order-processing application that uses Amazon API Gateway and an AWS Lambda function. The application stores data in an Amazon Aurora PostgreSQL database. During a recent sales event, a sudden surge in customer orders occurred. Some customers experienced timeouts, and the application did not process the orders of those customers. A solutions architect determined that the CPU utilization and memory utilization were high on the database because of a large number of open connections. The solutions architect needs to prevent the timeout errors while making the least possible changes to the application.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure provisioned concurrency for the Lambda function. Modify the database to be a global database in multiple AWS Regions.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda function to use the RDS Proxy endpoint instead of the database endpoint.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create a read replica for the database in a different AWS Region. Use query string parameters in API Gateway to route traffic to the read replica.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Modify the Lambda function to use the DynamoDB table.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'An application runs on Amazon EC2 instances in private subnets. The application needs to access an Amazon DynamoDB table.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What is the MOST secure way to access the table while ensuring that the traffic does not leave the AWS network?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use a VPC endpoint for DynamoDB.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use a NAT gateway in a public subnet.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use a NAT instance in a private subnet.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use the internet gateway attached to the VPC.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'An entertainment company is using Amazon DynamoDB to store media metadata. The application is read intensive and experiencing delays. The company does not have staff to handle additional operational overhead and needs to improve the performance efficiency of DynamoDB without reconfiguring the application.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect recommend to meet this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use Amazon ElastiCache for Redis.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Amazon DynamoDB Accelerator (DAX).']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Replicate data by using DynamoDB global tables.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use Amazon ElastiCache for Memcached with Auto Discovery enabled.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company’s infrastructure consists of Amazon EC2 instances and an Amazon RDS DB instance in a single AWS Region. The company wants to back up its data in a separate Region.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements with the LEAST operational overhead?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use AWS Backup to copy EC2 backups and RDS backups to the separate Region.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Amazon Data Lifecycle Manager (Amazon DLM) to copy EC2 backups and RDS backups to the separate Region.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create Amazon Machine Images (AMIs) of the EC2 instances. Copy the AMIs to the separate Region. Create a read replica for the RDS DB instance in the separate Region.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create Amazon Elastic Block Store (Amazon EBS) snapshots. Copy the EBS snapshots to the separate Region. Create RDS snapshots. Export the RDS snapshots to Amazon S3. Configure S3 Cross-Region Replication (CRR) to the separate Region.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A solutions architect needs to securely store a database username and password that an application uses to access an Amazon RDS DB instance. The application that accesses the database runs on an Amazon EC2 instance. The solutions architect wants to create a secure parameter in AWS Systems Manager Parameter Store.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should the solutions architect do to meet this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an IAM role that has read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM role to the EC2 instance.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an IAM policy that allows read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM policy to the EC2 instance.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an IAM trust relationship between the Parameter Store parameter and the EC2 instance. Specify Amazon RDS as a principal in the trust policy.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an IAM trust relationship between the DB instance and the EC2 instance. Specify Systems Manager as a principal in the trust policy.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has a legacy data processing application that runs on Amazon EC2 instances. Data is processed sequentially, but the order of results does not matter. The application uses a monolithic architecture. The only way that the company can scale the application to meet increased demand is to increase the size of the instances. The company’s developers have decided to rewrite the application to use a microservices architecture on Amazon Elastic Container Service (Amazon ECS).',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect recommend for communication between the microservices?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the data consumers to process data from the queue.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon Simple Notification Service (Amazon SNS) topic. Add code to the data producers, and publish notifications to the topic. Add code to the data consumers to subscribe to the topic.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an AWS Lambda function to pass messages. Add code to the data producers to call the Lambda function with a data object. Add code to the data consumers to receive a data object that is passed from the Lambda function.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon DynamoDB table. Enable DynamoDB Streams. Add code to the data producers to insert data into the table. Add code to the data consumers to use the DynamoDB Streams API to detect new table entries and retrieve the data.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company wants to migrate its MySQL database from on premises to AWS. The company recently experienced a database outage that significantly impacted the business. To ensure this does not happen again, the company wants a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two nodes.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution meets these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon RDS DB instance with synchronous replication to three nodes in three Availability Zones.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon RDS MySQL DB instance and then create a read replica in a separate AWS Region that synchronously replicates the data.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon EC2 instance with a MySQL engine installed that triggers an AWS Lambda function to synchronously replicate the data to an Amazon RDS MySQL DB instance.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company is building a new dynamic ordering website. The company wants to minimize server maintenance and patching. The website must be highly available and must scale read and write capacity as quickly as possible to meet changes in user demand.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon DynamoDB with on-demand capacity for the database. Configure Amazon CloudFront to deliver the website content.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon Aurora with Aurora Auto Scaling for the database. Configure Amazon CloudFront to deliver the website content.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon DynamoDB with provisioned write capacity for the database.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon Aurora with Aurora Auto Scaling for the database.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has an AWS account used for software engineering. The AWS account has access to the company’s on-premises data center through a pair of AWS Direct Connect connections. All non-VPC traffic routes to the virtual private gateway. A development team recently created an AWS Lambda function through the console. The development team needs to allow the function to access a database that runs in a private subnet in the company’s data center.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure the Lambda function to run in the VPC with the appropriate security group.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Set up a VPN connection from AWS to the data center. Route the traffic from the Lambda function through the VPN.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an Elastic IP address. Configure the Lambda function to send traffic through the Elastic IP address without an elastic network interface.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company runs an application using Amazon ECS. The application creates resized versions of an original image and then makes Amazon S3 API calls to store the resized images in Amazon S3.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'How can a solutions architect ensure that the application has permission to access Amazon S3?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the container.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch configuration used by the ECS cluster.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS cluster while logged in as this account.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has a Windows-based application that must be migrated to AWS. The application requires the use of a shared Windows file system attached to multiple Amazon EC2 Windows instances that are deployed across multiple Availability Zones.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'What should a solutions architect do to meet this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows instance.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Configure Amazon FSx for Windows File Server. Mount the Amazon FSx file system to each Windows instance.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Configure a file system by using Amazon Elastic File System (Amazon EFS). Mount the EFS file system to each Windows instance.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure an Amazon Elastic Block Store (Amazon EBS) volume with the required size. Attach each EC2 instance to the volume. Mount the file system within the volume to each Windows instance.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company uses Amazon S3 as its data lake. The company has a new partner that must use SFTP to upload data files. A solutions architect needs to implement a highly available SFTP solution that minimizes operational overhead.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use AWS Transfer Family to configure an SFTP-enabled server with a publicly accessible endpoint. Choose the S3 data lake as the destination.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Amazon S3 File Gateway as an SFTP server. Expose the S3 File Gateway endpoint URL to the new partner. Share the S3 File Gateway endpoint with the new partner.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Launch an Amazon EC2 instance in a private subnet in a VPC. Instruct the new partner to upload files to the EC2 instance by using a VPN. Run a cron job script on the EC2 instance to upload files to the S3 data lake.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Launch Amazon EC2 instances in a private subnet in a VPC. Place a Network Load Balancer (NLB) in front of the EC2 instances. Create an SFTP listener port for the NLB. Share the NLB hostname with the new partner. Run a cron job script on the EC2 instances to upload files to the S3 data lake.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the ability to test new site features frequently. The company also needs a highly available and managed solution that requires minimum operational overhead.',
        ],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which solution will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the S3 bucket. Use AWS Lambda to process all dynamic content.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between multiple Elastic Beanstalk environments for feature testing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto Scaling groups and an Application Load Balancer to manage the website’s availability.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load Balancer Controller to dynamically route traffic between containers that contain the new site features for testing.']] },
      ],
      correctAnswer: '1',
    },

  ],
} as QuizDataObject;
