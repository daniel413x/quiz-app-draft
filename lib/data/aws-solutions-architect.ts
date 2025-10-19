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

  ],
} as QuizDataObject;
