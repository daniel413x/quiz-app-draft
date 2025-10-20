import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'AWS Certified Cloud Practitioner Certification II',
  slug: 'aws-cloud-practitioner-ii',
  category: {
    slug: 'cloud-certifications',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'A startup wants to deploy its workloads closer to its users in Europe for better performance. It must choose the specific AWS area that contains multiple data centers and meets EU compliance. What should it select?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Edge Locations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Local Zones']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS construct is designed to allow customers to choose where their workloads and data are physically located around the world?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Edge Locations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Local Zones']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which pillar of the AWS Well-Architected Framework focuses on running and monitoring systems to deliver business value and continuously improve processes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Operational Excellence']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reliability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Performance Efficiency']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Security']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Well-Architected pillar recommends enabling traceability through monitoring, logging, and auditing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Security']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Cost Optimization']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Sustainability']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Operational Excellence']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which pillar emphasizes automatically recovering from failure and scaling resources dynamically to meet demand?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reliability']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Performance Efficiency']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Security']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Operational Excellence']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which pillar is concerned with using computing resources efficiently to meet system requirements and to maintain that efficiency as demand changes and technologies evolve?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Performance Efficiency']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reliability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Sustainability']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Operational Excellence']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Well-Architected pillar advises on avoiding unnecessary costs and using resources efficiently?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Cost Optimization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Performance Efficiency']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Sustainability']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Operational Excellence']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which pillar was added most recently to the AWS Well-Architected Framework and focuses on minimizing environmental impact?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Sustainability']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Security']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reliability']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Cost Optimization']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Cloud Adoption Framework (CAF) perspective focuses on preparing the organization’s workforce for cloud adoption by addressing roles, skills, and change management?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'People perspective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Business perspective']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Governance perspective']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Platform perspective']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to ensure its employees are trained in cloud technologies and that new roles are defined for operating in the cloud. Which AWS CAF perspective provides guidance for this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'People perspective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Operations perspective']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Security perspective']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Business perspective']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'According to the AWS Cloud Adoption Framework (CAF), which perspective helps organizations identify skills gaps and implement training programs to support cloud readiness?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'People perspective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Governance perspective']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Operations perspective']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Platform perspective']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS CAF perspective focuses on aligning cloud adoption with business value, outcomes, and KPIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Business perspective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Platform perspective']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Security perspective']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Operations perspective']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the AWS CAF, which perspective addresses organizational structure, skills, and change management needed for cloud adoption?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'People perspective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Governance perspective']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Business perspective']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Operations perspective']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS CAF perspective defines guardrails, decision rights, and compliance mechanisms for operating in the cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Governance perspective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'People perspective']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Business perspective']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Platform perspective']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which perspective in the AWS CAF concentrates on designing and building the foundational technology landscape (e.g., landing zones, networks, and compute)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Platform perspective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Security perspective']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Operations perspective']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Business perspective']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The AWS CAF perspective that emphasizes risk management, identity, data protection, and incident response is the:'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Security perspective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Governance perspective']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'People perspective']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Business perspective']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS CAF perspective focuses on day-2 operations, service management, observability, and continual improvement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Operations perspective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Platform perspective']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'People perspective']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Business perspective']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In AWS CAF adoption planning, what is the primary purpose of establishing a landing zone early?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Provide a secure, scalable foundation with standardized guardrails']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Eliminate the need for governance and compliance']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Avoid creating any operating model']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Migrate all workloads in a single big-bang release']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes how AWS CAF perspectives are used during a readiness or capability assessment?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They identify current capabilities and gaps to prioritize remediation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They replace the need for a business case or KPI definition']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They prescribe a single migration pattern for all workloads']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They only apply to technical teams, not business teams']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When aligning an operating model to the AWS CAF, which pairing is most accurate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Operations perspective ↔ service management and SRE practices']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Business perspective ↔ encryption key rotation processes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Security perspective ↔ product pricing strategy']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Platform perspective ↔ executive KPI definition only']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'According to the AWS CAF, what should tie roadmap items and migration waves back to measurable outcomes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Business value metrics and KPIs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Ad-hoc team preferences only']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Single-region constraints']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A fixed list of services regardless of goals']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is AWS Snowball primarily used for?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transferring large amounts of data to and from AWS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Running serverless compute workloads']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Transferring small amounts of data to and from AWS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Writing and streaming the same data in parallel']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides a physical device for edge data transfer and local compute in disconnected environments?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball Edge']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS DataSync']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Transfer Family']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When using AWS Snowball to migrate data, how is data encrypted during transit and at rest?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'With AWS Key Management Service (KMS)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'With manual user-defined encryption only']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'With SSL/TLS encryption only during upload']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'With basic password-protected zip archives']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is best suited for migrating petabyte-scale data from on-premises storage to AWS when network bandwidth is limited?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS DataSync']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main benefit of using database replication as a migration strategy?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It minimizes downtime by synchronizing data between the source and target databases']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It eliminates the need for any data validation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It allows migration without network connectivity']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It replaces all database schemas automatically']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service can be used for continuous replication of data from an on-premises database to Amazon RDS during a migration?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Snowmobile']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Data Pipeline']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is AWS Snowball most commonly used for during the migration phase of a cloud adoption project?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Bulk data transfer from on-premises to AWS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Application performance monitoring']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Continuous integration pipeline management']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Running long-term analytics workloads']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides a petabyte-scale data transfer solution using a 45-foot long shipping container?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Snowmobile']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball Edge']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS DataSync']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Transfer Family']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is designed for online data migration using high-speed network transfers instead of physical devices?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS DataSync']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Snowmobile']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When using database replication for migration, what is typically done before cutting over to the new database?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Validate that the target database is synchronized with the source']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Delete all data from the source database']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Restart the replication process from scratch']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Disable all networking to avoid changes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which scenario would AWS Snowball be a more appropriate migration method than AWS DataSync?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'When transferring hundreds of terabytes of data over limited network bandwidth']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'When transferring small files under 10 GB total']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'When the migration requires near-zero downtime']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'When moving data between Amazon S3 buckets only']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which combination of services provides both offline and online migration capabilities in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball and AWS DataSync']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda and AWS Glue']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service and AWS DataSync']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Backup and AWS S3 Glacier']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service involves shipping physical devices to an organization that wants to migrate data to AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS DataSync']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS S3 Glacier']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is able to migrate the largest amounts of data (~80 TB) with typical use cases being media and entertainment archives, scientific research, or government data centers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Snowmobile']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Snowcone']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If your AWS architecture is fully cloud, which of the following AWS services is NOT part of your architecture?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS VPC']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CLI']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Backup']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A financial organization must retain database backups for seven years to meet compliance requirements. Which AWS service provides centralized retention management for backups?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Backup']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Glacier Deep Archive']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Inspector']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS Snapshots']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS services can be protected by AWS Backup?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS, Amazon EFS, and Amazon DynamoDB']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront, AWS WAF, and Amazon Route 53']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda, AWS Secrets Manager, and Amazon CloudWatch']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Glue, Amazon Athena, and AWS CodePipeline']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to ensure backups are automatically created and stored in another AWS Region for disaster recovery. Which AWS service feature supports this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Backup cross-Region backup']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Replication']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Edge location native functionality']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Amazon CloudFront can be protected by AWS Backup'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'False']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'True']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Amazon EFS can be protected by AWS Backup'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'True']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'False']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service involves shipping physical devices to an organization that wants to migrate data to AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS DataSync']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS S3 Glacier']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example usage of federated identity management?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Identities are managed externally (Active Directory, Okta, Google) and federated via SAML/OIDC.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Identities are created inside AWS (IAM users, roles, groups).']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Credentials are issued by AWS STS to cross-account roles.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using the root user to manually define roles']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'During a hybrid migration, a company uses database replication to keep an on-premises system in sync with AWS RDS. What is the benefit of this approach?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It enables a seamless cutover with minimal downtime']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It avoids the need for any network connectivity']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It replaces the need for backups']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It guarantees no schema changes are needed']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs to migrate 50 TB of active file data from its on-premises NFS server to Amazon S3. The migration must occur over the existing internet connection while keeping data synchronized during the cutover. Which service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS DataSync']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball Edge']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Transfer Family']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise wants to automate recurring transfers of data from multiple on-premises storage systems to Amazon EFS for analytics workloads in AWS. They need a managed service that can securely accelerate these online transfers. What should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS DataSync']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Snowmobile']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Backup']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon FSx']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A media company stores high-resolution video files on-premises and wants to continuously transfer new footage to Amazon S3 as it is produced, without shipping any devices. Which AWS service best meets this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS DataSync']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFront']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is an AWS-managed service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is an AWS-managed service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is an AWS-managed service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudWatch Logs Agent on EC2']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is an AWS-managed service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon ECS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Route Tables']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS Volumes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is an AWS-managed service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EKS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS IAM Policy attached to a role']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is an AWS-managed service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Security Groups']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is an AWS-managed service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS VPC Subnets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is an AWS-managed service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Lightsail']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is an AWS-managed service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Beanstalk']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Route Tables']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is an AWS-managed service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Aurora']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Security Groups']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is a service that is NOT AWS-managed?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is a service that is NOT AWS-managed?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon FSx']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company owns perpetual software licenses for their database product and wants to use them on AWS instead of purchasing new ones. Which licensing strategy is endorsed and supported on Amazon Web Services?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Bring Your Own License']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'License Included']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Pay-as-you-go']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Free-tier licensing']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A development team wants to run containerized microservices on AWS without having to manage or provision EC2 instances. They also want the service to automatically scale based on demand. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Fargate']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EKS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company runs containerized workloads using Amazon ECS, but they no longer want to manage the underlying EC2 cluster capacity. They prefer a serverless compute engine that handles provisioning and scaling automatically. What should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Fargate']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2 Auto Scaling']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Beanstalk']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Batch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A startup wants to deploy a containerized application quickly on AWS. They need to focus solely on building and deploying containers without dealing with the operating system or scaling infrastructure. Which AWS service is the best fit?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Fargate']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon ECS on EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EKS with self-managed nodes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where can customers access AWS compliance reports and certifications, such as SOC and ISO documentation?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT a feature offered by AWS Artifact?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Automatically audit AWS accounts for compliance violations']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Provide on-demand access to AWS compliance reports such as SOC and ISO certifications']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Allow customers to accept and manage AWS agreements (e.g., Business Associate Addendum)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Provide a central resource for viewing AWS compliance documentation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company operating in the European Union needs to ensure its workloads comply with GDPR. Which AWS resource should they consult for specific regional compliance programs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Compliance Center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Shield Advanced']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Glue DataBrew']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service continuously monitors AWS accounts for potential security threats and malicious activity?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Network Firewall']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service helps perform automated security assessments to identify vulnerabilities or deviations from best practices?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Network Firewall']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides a unified view of security and compliance findings across AWS accounts and regions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS KMS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service protects applications from Distributed Denial of Service (DDoS) attacks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Shield']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of encryption protects data while it is being transmitted between systems?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Encryption in transit']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Encryption at rest']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Client-side encryption only']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Key rotation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service automatically records and stores API activity for auditing and compliance purposes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service helps organizations audit and assess compliance with frameworks like ISO 27001 or PCI DSS by providing prebuilt control sets and automated evidence collection?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Audit Manager']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Shield Advanced']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service tracks configuration changes to AWS resources to ensure they comply with organizational policies?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is primarily used to create and manage cryptographic keys for data encryption?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Key Management Service (AWS KMS)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudHSM']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Secrets Manager']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Shield']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of encryption protects data stored in Amazon S3 or Amazon EBS volumes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Encryption at rest']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Encryption in transit']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Client-side encryption only']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Tokenization']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of encryption protects data while it moves between AWS services or between a client and AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Encryption in transit']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Encryption at rest']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Envelope encryption']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Symmetric key encryption']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides dedicated hardware-based key storage for customers who need to meet stringent compliance requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudHSM']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS KMS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Secrets Manager']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Shield Advanced']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS feature automatically encrypts data stored in Amazon S3 without requiring any application changes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Server-Side Encryption (SSE)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Client-Side Encryption (CSE)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Certificate Manager']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transport Layer Security (TLS)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization must demonstrate ongoing compliance with ISO 27001 and SOC 2 frameworks. They need a service that automates evidence collection from their AWS environment and helps track control implementation. Which service should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Audit Manager']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Shield Advanced']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A healthcare company subject to HIPAA regulations needs to automatically assess compliance across multiple AWS accounts and generate evidence reports. Which AWS service should they use to simplify this process?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Audit Manager']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A government contractor needs to prove compliance with FedRAMP controls and regularly generate detailed reports showing adherence to AWS best practices. Which service can automate evidence collection and control mapping?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Audit Manager']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A startup is preparing for its first external compliance audit and needs a tool that provides predefined control sets for frameworks like GDPR and NIST while continuously gathering compliance evidence from AWS accounts. Which AWS service meets this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Audit Manager']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is specifically designed to securely store, retrieve, and manage credentials such as database passwords and API keys?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Secrets Manager']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Key Management Service']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudHSM']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service allows administrators to define and enforce password policies for IAM users?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Identity and Access Management']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Secrets Manager']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which feature provides an additional layer of security by requiring a one-time code along with a password when logging into the AWS Management Console?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Multi-Factor Authentication']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS IAM Policy']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Cross-account IAM role']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Key Pair']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service allows single sign-on (SSO) access to multiple AWS accounts and business applications using existing corporate credentials?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS IAM Identity Center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Directory Service']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Cognito']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'According to the principle of least privilege, what is the best practice for assigning permissions to IAM users?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Grant only the permissions necessary to perform specific job functions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Assign full administrator access to simplify operations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use inline policies on every user account']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Avoid using IAM roles for resource access']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following actions can only be performed by the AWS account root user?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Changing the account email address']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Creating IAM roles']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Managing S3 bucket policies']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Enabling MFA for IAM users']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a best practice to protect the AWS root user account?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Enable Multi-Factor Authentication (MFA) for the root user']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use the root user for daily administrative tasks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Share root credentials with team members']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Store root credentials in plaintext files on local machines']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs to allow an IAM user in one AWS account to assume a role in another AWS account to access shared resources. What should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Cross-account IAM roles']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Resource-based policies']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Service control policies (SCPs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of identity management allows users to authenticate with external identity providers such as Microsoft Active Directory or Google Workspace?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Federated identity management']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Local IAM users and groups']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Cross-account IAM roles']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Directory Service']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service helps store configuration parameters, such as database connection strings and API keys, securely and retrieve them programmatically?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager Parameter Store']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudHSM']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS KMS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Shield']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a task that ONLY be performed by a root user?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Change the AWS support plan (e.g., Basic → Enterprise)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Assign permissions (including admin access) to others']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Configure MFA enforcement, password policies, and access key rotation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create and manage federated identity providers (SAML, OIDC)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is designed to securely store and retrieve sensitive information such as API keys, passwords, and database credentials?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Secrets Manager']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudHSM']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager Parameter Store']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise uses AWS Organizations and needs to assign and manage user access to multiple AWS accounts from a central place. Which service is best suited for this task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS IAM']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS IAM Identity Center']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS STS']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An application running in Account A needs to access resources in Account B. Which service enables cross-account role assumption using temporary credentials?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS IAM']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS STS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Secrets Manager']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to allow an IAM user from Account A to access resources in Account B without creating a new user. Which method should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Cross-account IAM role']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Resource-based access policy']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Access key sharing between accounts']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Service control policy (SCP)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service allows storing non-secret configuration data such as environment variables and application settings?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager Parameter Store']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Secrets Manager']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A development team needs a cloud service that manages user sign-up/sign-in and federation for their web/mobile app. Which AWS service can fill this role?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Cognito']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS STS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Identity and Access Management']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS IAM Identity Center']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to protect its web applications from common attacks such as SQL injection and cross-site scripting (XSS). Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS WAF']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Shield']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Network Firewall']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to allow only traffic from specific IP address ranges and block malicious requests to its CloudFront distribution. Which AWS service provides this functionality?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Web Application Firewall']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Shield Advanced']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC Security Groups']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Network Firewall']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A security team needs to create custom rules to block web requests that contain specific patterns in the query string or body of an HTTP request. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS WAF']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Shield']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A development team wants to integrate AWS services directly into their application using programming languages like Python or Java. Which solution offered by AWS is most relevant to their needs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS SDKs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CLI']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Management Console']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to ensure that every deployment of its infrastructure is consistent and repeatable. Which solution offered by AWS is most relevant to their needs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS SDKs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Management']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CLI']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which deployment model involves utilizing both on-premises infrastructure and cloud services?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Hybrid']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Multi-cloud']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-premises']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'All in with cloud/cloud native']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which deployment model involves utilizing both on-premises infrastructure and cloud services?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Hybrid']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Multi-cloud']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-premises']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'All in with cloud/cloud native']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer does NOT imply a hybrid AWS deployment model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS VPC']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS DataLink']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Outposts']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '______ is a fully managed AWS infrastructure installed on-premises; it runs EC2, EBS, RDS, ECS, EKS locally.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Outposts']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Local zones']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS PrivateLink']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '____________ is a set of hybrid cloud storage services that provide on-premises access to virtually unlimited cloud storage.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Outposts']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'S3']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Elasticache']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Storage Gateway']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to allow a third-party user to access AWS resources temporarily using an external identity provider. Which service should they use to issue temporary credentials?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Cognito']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS STS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS IAM Identity Center']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The (6) things Trusted Advisor observes are: security, cost optimization, peformance, operational excellence, fault tolerance, and _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'service limits']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'sustainability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'reliability']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'fault tolerance']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The (6) things Trusted Advisor observes are: security, cost optimization, peformance, operational excellence, fault tolerance, and _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'service limits']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'sustainability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'reliability']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'fault tolerance']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The two engines Elasticache provides are ________ and ________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'redis, memcached']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'redcache, redis']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'redcache, memcached']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'memcached, elasticload']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The (6) things Trusted Advisor observes are: security, service limits, peformance, operational excellence, fault tolerance, and _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'cost optimization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'sustainability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'reliability']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'fault tolerance']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A fintech company is deploying a critical payment processing application that must remain available even if one data center goes down. Which AWS cloud component accounts ensures that their application is replicated across isolated, fault-tolerant zones within a single region?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Local Zones']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Edge Locations']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to launch EC2 instances in multiple physical data centers within the same region to ensure high availability. Which AWS infrastructure component allows them to do this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Local Zones']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Edge Locations']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is deploying a PostgreSQL database using Amazon RDS and wants to ensure automatic failover in case of infrastructure failure. Which AWS infrastructure component does RDS use to replicate data for high availability within the same region?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Local Zones']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Edge Locations']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A media studio located in a large U.S. city wants to edit and process high-resolution video with low-latency access to cloud compute resources. They want to minimize lag while staying connected to AWS services without managing local data centers. Which AWS infrastructure component accounts for these concerns?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Local Zones']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Edge Locations']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A healthcare analytics company wants to process patient imaging data in compliance with strict data residency laws. They need compute, database, and storage services close to their city while keeping everything integrated with AWS. Which AWS infrastructure component accounts for these concerns?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Local Zones']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Edge Locations']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A video game development company needs to run latency-sensitive rendering workloads near its teams based in Los Angeles. They want to keep most of the infrastructure in the cloud but need compute and storage closer to their location to reduce latency. Which AWS infrastructure component accounts for these concerns?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Local Zones']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Edge Locations']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company live-streaming a sports event wants to minimize buffering for viewers worldwide by delivering video content through AWS locations closest to users. Which AWS infrastructure component supports this use case?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Local Zones']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Edge Locations']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_________________ are a type of infrastructure deployment that places compute, storage, database, and other select AWS services close to large population and industry centers.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'availability zones']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'edge locations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'local zones']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'regions']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_________________ are isolated locations within a region that host AWS resources and are designed to provide high availability and fault tolerance.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Edge Locations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Local Zones']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Regions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_________________ are used by Amazon CloudFront to cache content and deliver data to users with low latency from locations closest to them.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Edge Locations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Local Zones']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Regions']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides single-sign on access to AWS accounts and applications?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS IAM Identity Center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Identity and Access Management']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS STS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Management Console']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An AWS cloud architect intends to handle user permissions purely by defining roles and policies in AWS without using any SSO solutions or identity federation. Which service are they using?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Identity and Access Management']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS IAM Identity Center']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS STS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Management Console']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is best practice for handling the root user account?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use the root user to perform tasks that only the root user can perform']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use the root user to solve permissions issues or policy conflicts']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use the root user to configure organizational policies through AWS Config ']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use the root user to establish security groups, NACLs, and services such as AWS Network Firewall']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes high availability in the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The ability of a system to remain operational even if a component fails']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The ability to increase resources automatically during peak demand']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The ability to deploy infrastructure as code']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The ability to store large amounts of data in S3']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS feature or design principle helps ensure that applications stay online even during failures?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Deploying workloads across multiple availability zones']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Caching content and delivering data to users with low latency from locations closest to them via edge locations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using multiple regions for redundancy']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Automatically adding or removing resources based on demand']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes elasticity in the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Automatically adding or removing resources based on demand']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using multiple Regions for redundancy']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploying workloads across multiple availability zones']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Caching content and delivering data to users with low latency from locations closest to them via edge locations']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service helps applications automatically scale their resources based on incoming traffic or usage patterns?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Auto Scaling']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does the AWS Cloud improve an organization’s agility?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By allowing quick provisioning and deployment of resources on demand']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By requiring long-term hardware purchases before deployment']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By caching content and delivering data to users with low latency from locations closest to them via edge locations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By endorsing conventions such as "Bring Your Own License"']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS services supports high availability by automatically distributing traffic across multiple targets?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Elastic Load Balancing (ELB)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Batch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS architecture principle helps systems recover quickly from failure and minimize downtime?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Design for failure and nothing will fail']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deliver cached content from locations closest to the end user']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use manual deployments only']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Automatically add or remove resources based on demand']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS feature enables customers to automatically increase or decrease compute capacity to meet variable workload demands?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Elasticity']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'High availability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Data redundancy']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Security groups']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best demonstrates agility in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'An organization can quickly launch new environments for testing and development']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'An organization\'s web infrastructure can quickly recover from server failure']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An organization is entitled to conventions such as "Bring Your Own License"']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'An organization is able to use multiple regions for redundancy']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which benefit of the AWS cloud allows businesses to quickly respond to changing market conditions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'High availability']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Agility']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Global reach']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Scalability']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Maintaining the ________ is an example of security OF the cloud, while maintaining the ________ is an example of security IN the cloud.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'hardware, network security']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'network security, hardware']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'infrastructure software, hardware']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'hardware, infrastructure software']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An architect wants to ensure all S3 buckets are encrypted and uses AWS Config to set a Config Rule to check encryption status. Which concept is demonstrated through the architect\'s actions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Governance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Compliance']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Security']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Guardrails']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company download reports from AWS Artifact to provide to auditors. Which concept is demonstrated or satisfied through the company\'s actions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Compliance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Governance']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Security']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Guardrails']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise uses AWS Organizations to create rules controlling what users and accounts can do in AWS. Which concept is demonstrated or satisfied through the enterprise\'s actions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Governance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Compliance']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Security']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Guardrails']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS feature essentially limits the permissions that any identity can be granted?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Service Control Policies']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Roles']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM Policies']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM Users']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization wants to migrate its on-premises databases to AWS while keeping the source database fully operational during the migration. Which AWS service supports this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS DataSync']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Snowmobile']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which IAM component defines permissions using JSON documents to specify allowed or denied actions on AWS resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM Policies']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Roles']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Service Control Policies']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM Users']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which IAM entity represents a person or application that interacts directly with AWS using long-term credentials?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM Users']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Roles']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM Groups']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Service Control Policies']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which IAM entity is designed to grant temporary access permissions to AWS resources for applications, services, or users in another account?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM Roles']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Policies']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM Users']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Service Control Policies']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which IAM feature allows AWS services like EC2 or Lambda to access other AWS resources securely without storing credentials?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM Roles']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Users']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM Policies']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Service Control Policies']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which IAM entity should be created for an individual employee who needs direct access to the AWS Management Console?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM Users']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Roles']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Service Control Policies']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM Policies']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which policy type in AWS Organizations can be used to restrict certain services or actions across all accounts in an organization?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Service Control Policies']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Inline Policies']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM Roles']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM Managed Policies']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which IAM feature should a developer use to allow an application running on an EC2 instance to temporarily access S3 without using hardcoded credentials?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM Roles']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Users']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM Policies']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Service Control Policies']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A federeted SSO solution handles ______ as opposed to _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'authentication, authorization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'authorization, authentication']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM Users, IAM Roles']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM Roles, IAM Users']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Assess: If using a federated SSO solution, there is no need to handle roles or permissions in AWS IAM because they will be handled externally'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'False']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'True']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which EC2 pricing option is best for applications with predictable, steady workloads that require long-term commitment for cost savings?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot Instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Savings Plans']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company runs a batch processing workload that can be interrupted and restarted without issue. Which EC2 pricing model offers the lowest cost for this scenario?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Spot Instances']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which EC2 pricing model allows customers to pay for compute capacity by the second or hour with no long-term commitments?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Spot Instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Savings Plans']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which EC2 instance type provides the highest discount—up to 90% off—compared to On-Demand pricing, but may be reclaimed by AWS when capacity is needed?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Spot Instances']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Savings Plans']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A startup runs unpredictable workloads and needs flexibility to scale up or down at any time without long-term contracts. Which EC2 pricing option should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot Instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which EC2 pricing model provides a discount in exchange for committing to a one-year or three-year usage term?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot Instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A data analytics company needs compute resources that can handle intermittent, non-critical workloads and wants to minimize cost. Which EC2 option is ideal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Spot Instances']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which EC2 instance type is best suited for mission-critical workloads that must not be interrupted and require predictable performance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot Instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Savings Plans']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which EC2 pricing model automatically terminates instances when AWS needs the capacity, making it suitable only for fault-tolerant workloads?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Spot Instances']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A new AWS customer wants to ask technical questions and get answers from both AWS experts and the broader community. Which answer is an AWS service or platform they can use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS re:Post']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An engineer wants to troubleshoot a deployment issue in AWS CloudFormation and prefers to post the question publicly for community feedback. Which answer is an AWS platform that is designed for this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS re:Post']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A team wants a centralized, AWS-managed Q&A platform where they can share knowledge, get expert answers, and follow specific AWS topics. Which answer is an AWS service they can use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS re:Post']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Chime']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is seeking help from an external organization with expertise in migrating workloads to AWS. Which AWS program connects them with certified consulting and technology partners?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS IQ']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Support Plans']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A government agency needs to find an AWS-certified partner experienced in security and compliance to help design a cloud architecture. Which AWS program can they use to find such partners?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS IQ']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service enables users to find, buy, and immediately start using software solutions from third-party vendors in their AWS environment?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS OpsWorks']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A new AWS user encounters an issue setting up Amazon S3 permissions and wants to find official step-by-step troubleshooting guidance from AWS. Where should they look first?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Knowledge Center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS re:Post']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Whitepapers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS resource provides a searchable collection of articles with official AWS answers to common technical and account-related questions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Knowledge Center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Documentation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS re:Invent']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An administrator wants to find official AWS guidance for troubleshooting IAM permission errors without opening a support case. Which AWS resource should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Knowledge Center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS re:Post']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A user wants to quickly resolve a billing issue by searching through official AWS articles rather than contacting support. Which AWS resource should they consult?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Knowledge Center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS re:Post']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer wants to find official AWS troubleshooting steps for failed EC2 instance launches. Where should they go to find curated AWS answers written by AWS experts?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Knowledge Center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS re:Post']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A customer wants to open a technical support case to get help from AWS engineers about a configuration issue with Amazon EC2. Which AWS resource should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Support Center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS re:Post']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Knowledge Center']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An AWS customer needs to check the status of a recent billing inquiry submitted to AWS Support. Where should they go?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Support Center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Billing Console']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Knowledge Center']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A business wants to open a case to request a service quota increase for EC2 instances. Which AWS tool or console should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Support Center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Knowledge Center']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS re:Post']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A customer using a Developer Support plan wants to communicate directly with AWS engineers about a technical issue. Where can they initiate this contact?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Support Center']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Knowledge Center']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS re:Post']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization wants step-by-step instructions and best practices for migrating applications to AWS in a secure and efficient way. Which AWS resource provides this type of detailed guidance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Prescriptive Guidance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Knowledge Center']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Well-Architected Framework']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS re:Post']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A cloud architect is looking for migration strategies, best practices, and implementation patterns to modernize workloads on AWS. Which AWS resource should they consult?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Prescriptive Guidance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Well-Architected Framework']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Support Center']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A development team wants to follow AWS-recommended methods for cloud adoption, migration, and modernization, complete with reference architectures. Which AWS resource provides this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Prescriptive Guidance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Service Catalog']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Well-Architected Framework']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The AWS Prescriptive Guidance has a targer audience of ________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Cloud architects']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Stakeholders']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Application developers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Partners']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT an end goal of the service offered by AWS Professional Services?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Maintaining network security']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Becoming migration ready']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Adopting a cloud operating model']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Act according to AWS Prescriptive Guidance']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Support plan is free and provides access to customer service, AWS documentation, whitepapers, and limited Trusted Advisor checks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Basic Support']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Developer Support']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Business Support']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Enterprise Support']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A small development team is testing new workloads in a non-production environment and needs general technical guidance during business hours. Which AWS Support plan is most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Developer Support']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Basic Support']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Business Support']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Enterprise Support']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Support plan provides 24×7 access to Cloud Support Engineers and a 1-hour response time for production system outages?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Business Support']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Developer Support']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Basic Support']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Enterprise Support']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise customer with mission-critical workloads wants access to a Technical Account Manager (TAM) and 15-minute response times for critical system outages. Which AWS Support plan should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Enterprise Support']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Business Support']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Developer Support']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Basic Support']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Support plan includes access to the AWS Support API for automation and integration with support case management tools?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Business Support']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Developer Support']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Enterprise Support']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Basic Support']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Support plan is intended for mission-critical workloads that require operations reviews and a Technical Account Manager (TAM)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Enterprise Support']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Business Support']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Developer Support']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Basic Support']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A startup running production workloads wants 24×7 access to Cloud Support Engineers and third-party software support, but does not need a Technical Account Manager. Which plan fits best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Business Support']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Developer Support']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Enterprise Support']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Basic Support']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Support plan provides general guidance within 24 hours and system-impaired response within 12 hours?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Developer Support']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Business Support']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Enterprise Support']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Basic Support']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are running AWS infrastructure at the "Business" level and your production system is down. In how long can you expect a response from AWS engineers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '~1 hour']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '~15 minutes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '~12 hours']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '~24 hours']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are running AWS infrastructure at the "Enterprise" level and your production system is down. In how long can you expect a response from AWS engineers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '~15 minutes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '~1 hour']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '~12 hours']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '~24 hours']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A large enterprise wants proactive guidance through Well-Architected reviews, operational support, and concierge assistance. Which AWS Support plan offers these features?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Enterprise Support']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Business Support']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Developer Support']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Basic Support']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your infrastructure is intended for a non-production/testing environment. Which AWS Support Plan is best suited for this workload?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Developer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Enterprise']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Basic']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Business']] },
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
            [QuizMarkdownType.TEXT, 'Amazon SNS (Simple Notification Service)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Amazon SQS (Simple Queue Service)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Amazon SES (Simple Email Service)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'AWS Lambda'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '______ is a single dashboard that aggregates findings from services such as Amazon GuardDuty, AWS Config, and Amazon Inspector. Which AWS service provides this unified view?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization wants to continuously monitor its AWS environment against security best practices and compliance standards such as CIS AWS Foundations. Which AWS service can automatically perform these checks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs to consolidate and prioritize security alerts coming from multiple AWS accounts and Regions into a single place for investigation. Which service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Shield Advanced']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is a valid choice for running a long-running container in a serverless capacity?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Fargate']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS EKS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Beanstalk']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs a fully managed file storage service that provides compatibility with Windows Server features such as SMB protocol support and Active Directory integration. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon FSx']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An engineering team needs a high-performance, managed file system for Windows-based applications that require shared file access and integration with Active Directory. Which AWS service meets this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon FSx']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A media company needs a fully managed file system optimized for workloads like Windows applications and Lustre-based high-performance computing. Which service should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon FSx']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A development team needs a scalable, serverless file system that multiple EC2 instances can access concurrently within the same Region. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon FSx']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An analytics workload requires a shared, elastic file system that can automatically grow and shrink as data is added or removed, without manual capacity management. Which AWS service is the best fit?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon FSx']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A web application running across multiple EC2 instances in different Availability Zones needs a shared file system for storing session data. Which AWS service should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon FSx']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An EC2 instance running a database application requires low-latency, high-performance storage that supports snapshots for backup and recovery. Which AWS storage option should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon FSx']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer needs persistent storage that remains available even if an EC2 instance is stopped or restarted. Which AWS service provides this functionality?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon FSx']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise needs a solution that continuously replicates on-premises servers to AWS to enable fast recovery of applications after an outage. Which service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Disaster Recovery']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Backup']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A healthcare company must meet strict business continuity requirements and ensure critical systems can be rapidly restored in AWS after an unexpected data center failure. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Disaster Recovery']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Backup']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A healthcare company must meet strict business continuity requirements and ensure critical systems can be rapidly restored in AWS after an unexpected data center failure. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Disaster Recovery']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Backup']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your organization needs on-premises, full-system recovery readiness. Which AWS service can provide for this need?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Disaster Recovery']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Backup']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your organization needs full-system recovery readiness for fast failover. Which AWS service can provide for this need?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Disaster Recovery']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Backup']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '______ provides data backup in the form of file- or resource-level snapshots, while ______ provides data backup in the form of proactive, constant replications'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Disaster Recovery, AWS Backup']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Backup, AWS Elastic Disaster Recovery']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System, AWS Storage Gateway']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway, Amazon Elastic File System']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A stakeholder communicates to you, in layman\'s terms, that the company needs a hot standby copy of its entire on-premises system ready to boot if the main one dies. Which AWS service can handle this need?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Disaster Recovery']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Backup']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A financial company stores millions of customer records in S3. Which AWS service can scan all their S3 buckets, identify which ones contain sensitive data, and flag those that are publicly accessible or unencrypted?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Macie']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Resource Access Manager']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A financial company stores millions of customer records in S3. Which AWS service can scan all their S3 buckets, identify which ones contain sensitive data, and flag those that are publicly accessible or unencrypted?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Macie']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Resource Access Manager']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company stores large amounts of sensitive customer data in Amazon S3 and wants to automatically discover and protect personally identifiable information (PII) such as names and credit card numbers. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Macie']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS GuardDuty']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS WAF']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A compliance officer needs to identify and classify sensitive data stored in Amazon S3 buckets to ensure the company meets data privacy regulations such as GDPR. Which AWS service can help with this task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Macie']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Audit Manager']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_______ answers the question, "Which accounts can access this resource?" while ______ answers the question, "What actions can this user/role perform on this resource?"'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Resource Access Manager, AWS Identity and Access Management']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Identity and Access Management, AWS Resource Access Manager']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Identity and Access Management, AWS IAM Identity Center']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS IAM Identity Center, AWS Identity and Access Management']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A security analyst needs to investigate unusual login patterns and network activity detected by Amazon GuardDuty. Which AWS service helps visualize and analyze these findings to identify the root cause?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Detective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'After AWS Security Hub reports multiple findings related to potential compromised credentials, a security engineer wants to trace related API calls and user behavior over time. Which service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Detective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudWatch']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company’s security team wants an AWS service that automatically collects and organizes data from GuardDuty, CloudTrail, and VPC Flow Logs to make it easier to perform root cause analysis of security incidents. Which service should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Detective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Audit Manager']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to integrate its on-premises Microsoft Active Directory with AWS to allow users to log in to AWS applications using their existing corporate credentials. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Directory Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS IAM Identity Center']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Cognito']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Secrets Manager']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization is migrating its Windows-based applications to AWS and needs a managed Active Directory environment for authentication and group policy management. Which AWS service fulfills this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Directory Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Cognito']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
      ],
      correctAnswer: '0',
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
        [QuizMarkdownType.TEXT, 'A company operates multiple Amazon VPCs and on-premises networks that need to communicate efficiently. They want to simplify their network architecture by using a single hub to manage all connections. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Transit Gateway']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Site-to-Site VPN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53 Resolver']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise with dozens of VPCs across multiple Regions wants to simplify VPC-to-VPC communication and reduce the complexity of managing peering connections. Which AWS service provides this centralized connectivity solution?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Transit Gateway']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'VPC Peering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect Gateway']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Network Firewall']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs to connect multiple VPCs and its on-premises data center through a single gateway to enable centralized routing and monitoring. Which AWS service should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Transit Gateway']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS PrivateLink']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS VPN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company’s remote employees need to securely connect to their AWS VPC from their personal laptops using VPN software. ______ is an AWS offering specifically for this task.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Client VPN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Site-to-Site VPN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS VPN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization wants to provide its employees with secure remote access to AWS and on-premises resources through VPN connections from any location. ______ is an AWS offering specifically for this task.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Client VPN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS VPN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Site-to-Site VPN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Transit Gateway']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer working remotely needs a secure, local VPN connection to access resources inside a private subnet of an AWS VPC. ______ is an AWS offering specifically for this task.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Client VPN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS VPN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Site-to-Site VPN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '________ improves application performance for users worldwide by using the AWS global network to route traffic to the optimal AWS Region.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Global Accelerator']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Transit Gateway']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise wants to access AWS services and third-party applications from within its VPC without exposing its traffic to the public internet. Which solution provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS PrivateLink']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Site-to-Site VPN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'VPC Peering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service allows customers to privately access supported AWS services and VPC endpoint services using private IP addresses rather than public ones?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS PrivateLink']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53 Resolver']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Transit Gateway']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A security-conscious company wants to ensure that traffic between its VPC and Amazon S3 does not leave the AWS network. Which feature should they implement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS PrivateLink']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS VPN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'VPC Peering']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs to connect its on-premises network to Amazon VPN. Which AWS VPN solution does this concern?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Site-to-Site VPN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Client VPN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_________ is an AWS service that can be managed centrally by AWS Firewall Manager to enforce network protection policies across multiple accounts.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS WAF']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_________ is an AWS service that can be managed centrally by AWS Firewall Manager to automatically apply DDoS protection policies across AWS accounts.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Shield Advanced']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_________ is an AWS service that can be managed centrally by AWS Firewall Manager.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC Security Groups']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS IAM']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs a reliable way to decouple components of a distributed application so that messages are stored until they can be processed, ensuring that none are lost. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer wants to ensure that tasks sent between microservices are delivered once and processed asynchronously, even if one of the services becomes temporarily unavailable. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An ecommerce company needs a way to queue order requests from its website so that backend systems can process them at their own pace without losing messages. Which AWS service should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A retail company wants to build an event-driven architecture that reacts to changes across AWS services, such as when an item is added to an S3 bucket or a new user is created in IAM. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to connect multiple AWS services and SaaS applications so that certain business workflows are triggered automatically when specific events occur. Which AWS service enables this integration?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A logistics company wants to route events from multiple applications to different AWS Lambda functions based on specific event patterns and rules. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to coordinate multiple AWS Lambda functions into a defined workflow where each function runs in sequence and handles errors automatically. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer needs to design a workflow that visually represents business logic across multiple AWS services, such as invoking Lambda functions and handling retries. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An ecommerce application needs to manage a multi-step order processing workflow that involves validation, payment, and shipment. The workflow should automatically retry failed steps and maintain state. Which AWS service is best suited for this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A retail company wants to build an event-driven architecture that reacts to changes across AWS services, such as when an item is added to an S3 bucket or a new user is created in IAM. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to connect multiple AWS services and SaaS applications so that certain business workflows are triggered automatically when specific events occur. Which AWS service enables this integration?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A logistics company wants to route events from multiple applications to different AWS Lambda functions based on specific event patterns and rules. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs a reliable way to decouple components of a distributed application so that messages are stored until they can be processed, ensuring that none are lost. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer wants to ensure that tasks sent between microservices are delivered once and processed asynchronously, even if one of the services becomes temporarily unavailable. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An ecommerce company needs a way to queue order requests from its website so that backend systems can process them at their own pace without losing messages. Which AWS service should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EventBridge']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A data analyst needs to run ad-hoc SQL queries directly on data stored in Amazon S3 without loading it into a database. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A marketing team stores large amounts of structured and unstructured data in Amazon S3 and wants to quickly query it using standard SQL syntax without managing servers. Which AWS service should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants a serverless solution to analyze log data stored in Amazon S3 using SQL queries and pay only for the queries they run. Which AWS service fulfills this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'A data engineering team needs a fully managed ETL (extract, transform, load) service to prepare and clean data stored in Amazon S3 before loading it into a data warehouse. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to automate the discovery, cataloging, and transformation of raw data into structured formats for analytics. Which AWS service provides a data catalog and serverless ETL capabilities for this purpose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A data analyst wants to create an automated job that extracts data from multiple sources, transforms it, and loads it into Amazon Redshift for reporting. Which AWS service should they use to build and schedule this job?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A data science team needs to process large-scale datasets using open-source frameworks like Apache Spark and Hadoop on a managed cluster. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A research organization needs to analyze petabytes of genomic data using a scalable cluster that supports tools like Apache Hive and Presto. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to build a big data platform that runs distributed processing workloads with full control over the underlying cluster configuration. Which AWS service is most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A business analyst wants to create interactive dashboards and visual reports from data stored in Amazon Redshift and S3, without writing SQL queries. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A marketing team needs a serverless business intelligence tool that can automatically generate visualizations and share reports with other AWS users. Which AWS service meets this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An executive team wants to view key performance metrics in real-time dashboards generated from data stored in AWS. Which AWS service should they use to create these visual analytics?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A development team needs a managed service to search, analyze, and visualize log data from applications in near real time. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon OpenSearch Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A security team needs to index and search VPC Flow Logs and CloudTrail logs to detect unusual network activity. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon OpenSearch Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch Logs Insights']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to build a dashboard that allows users to perform full-text searches and visualize operational metrics from log data stored in AWS. Which service should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon OpenSearch Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to build a dashboard that allows users to perform full-text searches and visualize operational metrics from log data stored in AWS. Which service should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon OpenSearch Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A development team wants to automate the process of compiling source code, running unit tests, and producing software packages. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CodeBuild']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CodePipeline']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A DevOps engineer needs a fully managed continuous integration service that can build and test code in a scalable environment without managing build servers. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CodeBuild']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CodePipeline']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A software team wants to automatically compile and test their source code every time a change is pushed to the main branch in AWS CodeCommit. Which AWS service performs this build process?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CodeBuild']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CodePipeline']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A DevOps team wants to automate their software release process, integrating steps like source retrieval, build, testing, and deployment into a single workflow. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CodePipeline']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CodeBuild']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An engineering team wants to orchestrate multiple stages in their software delivery process — including build, test, and deploy — using a visual interface. Which AWS service provides this functionality?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CodePipeline']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CodeBuild']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer needs to trace requests as they move through a distributed application to identify performance bottlenecks and pinpoint where latency is occurring. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CLI']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Batch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An operations team wants to analyze and visualize the flow of requests across multiple microservices in a production environment to troubleshoot errors. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CLI']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Batch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is experiencing latency issues in its serverless application and needs to identify which AWS Lambda function or API call is causing the delay. Which AWS service provides request tracing and performance analysis?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CLI']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Batch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is experiencing latency issues in its serverless application and needs to identify which AWS Lambda function or API call is causing the delay. Which AWS service provides request tracing and performance analysis?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CLI']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Batch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In functionality, AWS X-Ray is most similar to ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS QuickSight']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS S3']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Batch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In functionality, AWS QuickSight is most similar to ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Grafana']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Prometheus']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A research organization needs to run thousands of batch computing jobs that can automatically scale based on the number of pending tasks. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Batch']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Amazon Simple Queue Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A pharmaceutical company needs to run high-performance computing jobs that can be queued and executed automatically across a dynamically scaled compute environment. Which AWS service provides this functionality?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Batch']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Amazon Simple Queue Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A data analytics team needs a managed service to efficiently run hundreds of containerized batch processing jobs without managing servers or manually provisioning compute resources. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Batch']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Step Functions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Amazon Simple Queue Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Amazon Lightsail is a service for ________.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'simplified deployment and management of virtual private servers for web applications']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'building machine learning models integrated with AWS SageMaker at scale']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'running high-performance batch computing workloads']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'analyzing large datasets stored in Amazon S3 using Amazon Athena SQL queries']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides a fully managed service for hosting and deploying web applications?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Beanstalk']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Amazon AppStream 2.0 allows end users to ________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'stream desktop applications from AWS to any device using just a web browser']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'install desktop applications from AWS remotely and securely through a VPN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'install desktop applications stored on a secured device']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'stream desktop applications from AWS to any device through AWS Client VPN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A software company wants to deliver desktop applications to users through a web browser without requiring installation on local machines. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon AppStream 2.0']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon WorkSpaces']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon WorkSpaces Secure Browser']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs to provide employees with persistent cloud-based Windows desktops that can be accessed securely from any device. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon WorkSpaces']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon AppStream 2.0']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon WorkSpaces Secure Browser']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A financial firm wants to enable its employees to use fully managed, persistent virtual desktops in the cloud instead of traditional office PCs. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon WorkSpaces']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon AppStream 2.0']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon WorkSpaces Secure Browser']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization wants to give contractors secure access to internal web applications without allowing them to download data or install software on their local devices. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon WorkSpaces Secure Browser']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon AppStream 2.0']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon WorkSpaces']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A government agency needs to enable secure, isolated access to web-based tools and intranet portals for remote users without exposing its internal network. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon WorkSpaces Secure Browser']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon WorkSpaces']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon AppStream 2.0']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_____________ is an example of AWS IoT Core at work.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A network of smart home thermostats sending real-time temperature data to AWS for monitoring and automation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A web application deployed on AWS Elastic Beanstalk']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A company using Amazon S3 to store static website assets']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A developer using AWS Lambda to run scheduled tasks']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_____________ is an example of AWS IoT Core at work.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A fleet of delivery trucks transmitting GPS and engine data to the cloud for predictive maintenance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A mobile app storing images in Amazon S3 buckets']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An e-commerce site hosted on Amazon EC2 instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A developer debugging an application using AWS X-Ray']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_____________ is an example of AWS IoT Core at work.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A factory monitoring system where sensors send production line metrics to AWS for analysis']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A user streaming video content from Amazon CloudFront']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A company running Kubernetes workloads on Amazon EKS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A database migration using AWS DMS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_____________ is an example of AWS IoT Core at work.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A smart agriculture system where soil sensors send data to AWS for irrigation control']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A static website served from an S3 bucket']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An AWS Batch job processing large amounts of data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'An internal web app deployed with AWS Elastic Beanstalk']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_____________ is an example of AWS IoT Core at work.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A city traffic management system collecting live data from connected traffic lights and sensors']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A user analyzing logs with Amazon OpenSearch Service']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A company using Amazon RDS for a transactional database']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A static blog hosted with AWS Amplify']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A frontend developer wants to quickly build, host, and deploy a scalable web application with continuous integration from GitHub. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Amplify']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Beanstalk']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS AppRunner']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A startup wants to quickly create a full-stack application with a hosted React frontend and a serverless backend powered by AWS services like API Gateway and DynamoDB. Which AWS service simplifies this process?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Amplify']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS AppSync']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Beanstalk']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Lightsail']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A news organization wants to automatically identify the sentiment (positive, negative, neutral) of thousands of customer feedback emails. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Translate']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Lex']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Rekognition']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A legal firm wants to extract key phrases, entities, and topics from thousands of contract documents stored in Amazon S3. Which AWS AI service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Textract']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Translate']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A social media analytics company needs to determine the overall mood of user comments and identify common topics discussed. Which AWS service enables natural language processing for this use case?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Kendra']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Rekognition']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Translate']] },
      ],
      correctAnswer: '0',
    }, {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise wants to create an intelligent search engine that can find accurate answers from documents stored across SharePoint, S3, and internal knowledge bases. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Kendra']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon OpenSearch Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Glue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A support team wants a natural language search solution that allows employees to ask questions like “How do I reset my VPN?” and receive precise answers from corporate documentation. Which AWS service provides this functionality?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Kendra']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Lex']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon OpenSearch Service']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A law firm needs to implement an AI-powered search solution that understands natural language queries and retrieves relevant case files from their document repository. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Kendra']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Textract']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon OpenSearch Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to build a customer support chatbot that can understand natural language and respond conversationally to users. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Lex']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Kendra']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A bank wants to create a voice-enabled virtual assistant that helps customers check account balances and recent transactions securely. Which AWS AI service enables this feature?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Lex']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Transcribe']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A retail company wants to automate its customer service chat system by enabling users to type or speak to a virtual agent that understands intent and context. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Lex']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Transcribe']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Kendra']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly']] },
      ],
      correctAnswer: '0',
    }, {
      question: [
        [QuizMarkdownType.TEXT, 'A developer wants to convert dynamic text content from a website into lifelike speech to improve accessibility for visually impaired users. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Lex']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Transcribe']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company developing an e-learning platform wants to generate natural-sounding audio narration for online training materials. Which AWS AI service provides this functionality?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Translate']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Lex']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Kendra']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer wants to create a voice-enabled news reader application that converts daily news articles into spoken words with different voice styles.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Transcribe']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Lex']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '________ is a generative AI assistant that can answer questions about the AWS environment, write code snippets, and help troubleshoot issues directly in the AWS Management Console.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Q']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Bedrock']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CodeWhisperer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon SageMaker']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_________ is an AI-powered assistant to get contextual explanations and guidance about AWS services and configurations within the AWS Management Console.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Q']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CodeCatalyst']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Bedrock']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_________ is an AI assistant that can automatically summarize AWS documentation, recommend configurations, and assist with CLI commands inside the AWS Console.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Q']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon SageMaker']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CodeWhisperer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A media company wants to automatically detect objects, scenes, and faces in millions of images uploaded by users. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Rekognition']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Textract']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A security company wants to build a real-time video monitoring system that can recognize faces and detect suspicious activity in camera feeds. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Rekognition']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Kinesis Video Streams']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Textract']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A social media app wants to automatically detect and filter inappropriate or unsafe images uploaded by users. Which AWS service provides this capability through machine learning?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Rekognition']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Textract']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Kendra']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A customer service company wants to automatically convert recorded phone conversations into text so they can analyze customer sentiment and agent performance. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Transcribe']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Lex']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A video platform wants to generate subtitles for uploaded videos automatically by converting the spoken audio into text. Which AWS AI service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Transcribe']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Rekognition']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Translate']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A healthcare company needs to convert doctor-patient voice recordings into accurate medical transcripts for documentation purposes. Which AWS service is best suited for this use case?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Transcribe']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Textract']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend Medical']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to identify underutilized Amazon EC2 instances and receive recommendations for more cost-efficient instance types. Which AWS service provides this functionality?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Compute Optimizer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An IT team wants to optimize performance and cost by right-sizing Amazon EC2, Auto Scaling groups, and EBS volumes based on utilization metrics. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Compute Optimizer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A startup wants machine learning-based recommendations to improve compute efficiency for its workloads running on Amazon EC2 and Lambda. Which AWS service provides these insights?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Compute Optimizer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise wants to set up and govern a secure multi-account AWS environment following AWS best practices automatically. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Control Tower']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A large company needs a service that can automatically set up new AWS accounts with preconfigured guardrails for security, compliance, and governance. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Control Tower']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS IAM Identity Center']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Service Catalog']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is expanding its AWS footprint and wants to centrally manage multiple accounts with built-in blueprints for logging, auditing, and compliance. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Control Tower']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A system administrator wants to monitor the operational status of AWS services in their Region and receive alerts when AWS experiences outages that might impact their resources. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Health Dashboard']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A business wants personalized alerts about maintenance events and service disruptions that specifically affect its AWS account resources. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Health Dashboard']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A cloud administrator wants to view and manage the maximum number of Amazon EC2 instances that can be launched in a specific Region. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Service Quotas']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An IT team wants to request an increase to the number of Amazon S3 buckets allowed per account through the AWS Management Console. Which AWS service allows them to make this request?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Service Quotas']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Support Center']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Compute Optimizer']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer wants to programmatically monitor and receive alerts when an AWS resource is approaching its usage limit. Which AWS service should they integrate with Amazon CloudWatch for this purpose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Service Quotas']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A DevOps team wants to remotely manage and automate operational tasks such as patching, configuration management, and running scripts on EC2 instances. Which AWS service provides this functionality?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An operations team needs a centralized service to view and manage EC2 and on-premises instances, automate patching, and store operational parameters securely. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A system administrator wants to automate the application of OS patches across multiple EC2 instances and generate reports on compliance status. Which AWS service enables this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Inspector']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A solutions architect wants to evaluate an existing cloud architecture against AWS best practices and receive recommendations for improvement. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Well-Architected Tool']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A development team wants to review their workloads using the five pillars of the AWS Well-Architected Framework and document improvement plans directly in the AWS Management Console. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Well-Architected Tool']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Control Tower']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service automatically sets up guardrails for security, compliance, and governance when creating new AWS accounts?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Control Tower']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS IAM Identity Center']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Well-Architected Tool']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company’s architecture review board wants to ensure that all workloads are evaluated for operational excellence, reliability, performance efficiency, cost optimization, and security. Which AWS service helps perform these reviews?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Well-Architected Tool']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Audit Manager']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company planning a large-scale cloud migration wants to identify all applications running on its on-premises servers, along with their dependencies and resource utilization. Which AWS service provides this capability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Application Discovery Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Application Migration Service']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service (AWS DMS)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Before migrating workloads to AWS, an enterprise wants to gather data about server configurations, network dependencies, and performance profiles in its data center. Which AWS service helps with this assessment?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Application Discovery Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service (AWS DMS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Application Migration Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An IT department needs to collect detailed information about existing on-premises applications to build a migration strategy and estimate total cost of ownership (TCO) in AWS. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Application Discovery Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Application Migration Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service (AWS DMS)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A global enterprise wants a single place to track the progress of all application migrations to AWS, regardless of which migration tools are being used. Which AWS service provides this functionality?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Migration Evaluator']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Application Migration Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service (AWS DMS)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization is migrating several applications to AWS using multiple tools and wants to monitor migration status, performance, and progress in a centralized dashboard. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Migration Evaluator']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service (AWS DMS)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Application Migration Service']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is using both AWS Application Migration Service and AWS DMS for its migration projects but wants to track and consolidate the progress of all migrations in one place. Which AWS service should it use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Application Discovery Service']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service (AWS DMS)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Application Migration Service']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to lift and shift its on-premises virtual machines to AWS with minimal changes to the applications. Which AWS service should they use to automate this process?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Application Migration Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Application Discovery Service']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service (AWS DMS)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An IT team wants to rehost its legacy applications on AWS by replicating on-premises servers to EC2 instances automatically. Which AWS service simplifies this migration?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Application Migration Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service (AWS DMS)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Application Discovery Service']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A data center modernization project requires the replication of entire application servers to AWS EC2 while maintaining minimal downtime. Which AWS service is best suited for this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Application Migration Service']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Application Discovery Service']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service (AWS DMS)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to estimate the potential cost savings of moving its on-premises workloads to AWS before starting the migration. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Migration Evaluator']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Application Discovery Service']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Pricing Calculator']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise wants a detailed report analyzing its current on-premises infrastructure to determine the most cost-effective migration strategy and right-sized AWS instance types. Which AWS service provides this analysis?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Migration Evaluator']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Application Migration Service']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Schema Conversion Tool (AWS SCT)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Before moving to AWS, a business wants to assess its existing compute and storage usage and receive a data-driven estimate of future AWS costs and savings. Which AWS service can generate this assessment?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Migration Evaluator']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Pricing Calculator']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_______ is a tool that should be used before migration begins, and _______ is a tool that can be used to monitor a migration\'s progress.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Migration Evaluator, AWS Migration Hub']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub, Migration Evaluator']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub, AWS Trusted Advisor']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Migration Evaluator, AWS Trusted Advisor']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service can be used to create APIs that act as a “front door” for applications to access data, business logic, or functionality from backend services?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon API Gateway']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS App Mesh']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service supports both RESTful APIs and WebSocket APIs for building real-time, two-way communication applications?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon API Gateway']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS AppSync']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS IoT Core']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS features CANNOT be used to grant permissions such as creating S3 buckets or scaling a cluster?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Service Control Policy']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Group']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM User']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM Role']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A _______ is attached to a _______; never the other way around'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'policy, role']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'role, policy']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SCP, role']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'role, SCP']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A _______ is dependent on a _______ to achieve an intended permissions effect'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM Policy, IAM Role']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Role, IAM Policy']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SCP, IAM Role']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM Role, SCP']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A _______ is dependent on a _______ to achieve an intended permissions effect'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM Group, IAM Policy']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Role, IAM Group']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM Group, IAM Role']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM Role, SCP']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A _______ cannot be attached to a _______; only the other way around'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'role, policy']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'policy, role']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SCP, role']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'role, SCP']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A _______ cannot be attached to a _______; only the other way around'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'group, policy']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'policy, role']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'group, role']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'role, SCP']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A SCP is attached to a _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM User']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Role']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM Group']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'None of the above']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A SCP cannot be attached to a _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'User']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Root']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Account']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'OU']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'AWS STS allows users to assume a _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Role']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Policy']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Group']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'SCP']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'To achieve a permissions effect, the ARN of an IAM Policy must be referenced in your call to AWS STS.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'False']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'True']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'To achieve a permissions effect, the ARN of an IAM Role must be referenced in your call to AWS STS.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'False']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'True']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A call to AWS STS involes referencing the ARN of a _____ in order to achieve a permissions effect.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Role']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Policy']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SCP']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements about IAM Roles is true?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'An IAM Role is dependent on an IAM Policy except in the case of using an IAM Inline Policy']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'An IAM Role can be used to affect permissions ']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Group']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'SCP']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements about IAM Roles is true?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'An IAM Role is dependent on an IAM Policy except in the case of using an IAM Inline Policy']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'An IAM Role can be used to affect permissions even if no policy is attached to it']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An IAM Role can be used to grant permissions but it cannot be used to deny permissions']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'An IAM Role is the sole means by which an IAM User can be granted permissions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following actions is NOT possible?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Deleting a policy that is attached to a role']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Attaching multiple policies to a role']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Attaching a policy to multiple roles']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Modifying a policy to include more permissions after it has been attached to a role']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Two existing policies in an AWS IAM setup have conflicting rules. One is defined \'Effect: "Deny"\' and the other is defined \'Effect: "Allow"\'. Which answer is true?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '\'Effect: "Deny"\' takes precedent over \'Effect: "Allow"\'']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '\'Effect: "Allow"\' takes precedent over \'Effect: "Deny"\'']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'There is no guarantee which effect is applied first']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A rule conflict will result in an implicit deny']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A solutions architect wants to evaluate an existing cloud architecture against AWS best practices and receive recommendations for improvement. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Well-Architected Tool']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Control Tower']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Select the answer that correctly assigns features offered by AWS Trusted Advisor per level of support plan.'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Basic 1. ______'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Developer 2. ______'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Business 3. ______'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Enterprise 4. ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '1. Limited 2. Limited 3. Full 4. Full + proactive guidance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '1. Limited 2. Full 3. Full + proactive guidance 4. Full + proactive guidance']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '1. None 2. Limited 3. Full 4. Full + proactive guidance']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '1. None 2. None 3. Limited 4. Full + proactive guidance']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides unified visibility into AWS resource performance through metrics, logs, and events to maintain system health?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon OpenSearch Service']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A cloud architect needs to find out why EC2 instance costs are spiking. Which AWS feature can help solve this problem?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Cost Explorer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Billing and Cost Management']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon OpenSearch Service']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Amazon S3 feature speeds up data uploads and downloads by routing traffic over the AWS global network instead of the public internet?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'S3 Transfer Acceleration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'S3 Cross-Region Replication']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'S3 Multipart Upload']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'S3 Intelligent-Tiering']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Amazon S3 feature allows users around the world to upload data to a centralized S3 bucket faster by using Amazon CloudFront’s globally distributed edge locations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'S3 Transfer Acceleration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'S3 Glacier Deep Archive']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'S3 Cross-Region Replication']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'S3 Versioning']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which S3 feature would you enable to improve the upload performance of large files to an S3 bucket from geographically distant locations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'S3 Transfer Acceleration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'S3 Replication']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'S3 Lifecycle Rules']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'S3 Object Lock']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In best practice, a target group represents ________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'instances of an identical type']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'instances of any type']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'EC2 instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Elastic or Network Load Balancers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A _______ is a first-class resource type that is referenced by Load Balancers and Auto Scaling Groups'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'target group']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'launch template']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IOPS SSD']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM Policy']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
