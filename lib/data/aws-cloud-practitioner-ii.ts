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
  ],
} as QuizDataObject;
