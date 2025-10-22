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
        [QuizMarkdownType.TEXT, 'Following best practice, a target group represents ________'],
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
    {
      question: [
        [QuizMarkdownType.TEXT, 'A _______ is a geographically isolated cluster of _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'region, availability zones']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'availability zone, region']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'availability zone, edge locations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'edge location, regions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A _______ is a geographically isolated cluster of _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'region, availability zones']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'availability zone, region']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'availability zone, edge locations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'edge location, regions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Under the shared responsibility model, server-side encryption is the responsibility of ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'the customer and AWS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'the customer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'third parties']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Under the shared responsibility model, client-side encryption is the responsibility of ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'the customer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'the customer and AWS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'third parties']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Redundancy is a strategy to insure against failure in the case of _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'the system\'s components failing']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'the system itself failing']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'components in the system\'s overlying architecture failing']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS failing']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company’s application must deliver sub-10 ms latency to end users in a specific city. Which answer best answers this scenario?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use an AWS Local Zone near the city.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use AWS Outposts near the city']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy infrastructure in a Region closest to the city']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploy multiple Availability Zones in the region where the city is located']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of horizontal scaling in the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Adding more EC2 instances of the same size to handle an increase in traffic.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Adding more RAM capacity to an EC2 instance']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Increasing the compute capacity of a single EC2 instance to address the growing demands of an application']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Replacing an existing EC2 instance with a larger, more powerful one']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'AWS allows users to manage their resources using a web-based user interface. What is the name of this interface?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CLI']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS API']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS SDK']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Management Console']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of horizontal scaling in the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Replacing an existing EC2 instance with a larger, more powerful one.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Adding more RAM capacity to an EC2 instance.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Adding more EC2 instances of the same size to handle an increase in traffic.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'EC2 Instance Usage Report']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement is true regarding the AWS Shared Responsibility Model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Responsibilities vary depending on the services used.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Security of the IaaS services is the responsibility of AWS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Patching the guest OS is always the responsibility of AWS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Security of the managed services is the responsibility of the customer.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The Reserved Instance discounts can only be shared with the master account.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'All accounts can receive the hourly cost benefit of the Reserved Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The purchased instances will have better performance than On-demand instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'There are no cost benefits from using consolidated billing; It is for informational purposes only.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Deploy the application across multiple Availability Zones and Edge locations.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deploy the application across multiple Availability Zones and subnets.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy the application across multiple Regions and Availability Zones.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploy the application across multiple VPC’s and subnets.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Health Dashboard']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Support Concierge']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Customer Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Operations Support']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Applying the Amazon Connect latency-based routing policy.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Registering a new US domain name to serve the users in the US.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Building a new data center in the US and implementing a hybrid model.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploying new Amazon EC2 instances in a Region located in the US.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM roles']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM users']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM user groups']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS OpsWorks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Server Migration Service']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Application Discovery Service']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Build security in every layer.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Parallelize tasks.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Implement elasticity.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Adopt monolithic architecture.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the advantage of the AWS-recommended practice of “decoupling” applications?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Allows treating an application as a single, cohesive unit.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reduces inter-dependencies so that failures do not impact other components of the application.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Allows updates of any monolithic application quickly and easily.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Allows tracking of any API call made to any AWS service.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following helps a customer view the Amazon EC2 billing activity for the past month?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Pricing Calculator.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Cost & Usage Reports.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What do you gain from setting up consolidated billing for five different AWS accounts under another master account?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS services’ costs will be reduced to half the original price.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The consolidated billing feature is just for organizational purpose.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Each AWS account gets volume discounts.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Each AWS account gets five times the free-tier services capacity.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By automatically scaling your on-premises resources based on changes in demand.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By automatically scaling your AWS resources using an Elastic Load Balancer.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By reducing interdependencies between application components wherever possible.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By automatically provisioning the required AWS resources based on changes in demand.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does Amazon CloudFront use to distribute content to global users with low latency?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Global Accelerator.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Regions.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Edge Locations.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Availability Zones.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the “Principle of Least Privilege” refer to?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'You should grant your users only the permissions they need when they need them and nothing more.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'All IAM users should have at least the necessary permissions to access the core AWS services.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'All trusted IAM users should have access to any AWS service in the respective AWS account.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM users should not be granted any permissions; to keep your account safe.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following does NOT belong to the AWS Cloud Computing models?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Platform as a Service (PaaS).']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Infrastructure as a Service (IaaS).']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Software as a Service (SaaS).']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Networking as a Service (NaaS).']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'S3 Intelligent-Tiering.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Glacier Deep Archive.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service provides DNS in the AWS cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Route 53.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Config.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS OpsWorks.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS volume.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon ElastiCache.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reserved instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Dedicated instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'On-demand instances.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following can be described as a global content delivery network (CDN) service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS VPN.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Regions.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services allows customers to manage their agreements with AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Certificate Manager.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS CAF perspective is addressed by usage of the AWS Billing and Cost Management service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'People perspective']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Governance perspective']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Business perspective']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Operations perspective']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Aurora.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic Block Store.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Identity and Access Management (IAM) user.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Infrastructure Event Management (IEM) engineer.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Consulting Partners.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Technical Account Manager (TAM).']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you view the distribution of AWS spending in one of your AWS accounts?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By using Amazon VPC console.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By contacting the AWS Support team.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By using AWS Cost Explorer.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By contacting the AWS Finance team.']] },
      ],
      correctAnswer: '2',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is a feature of AWS Snowball?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Built-in computing capabilities that allow customers to process data locally']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A hybrid cloud storage between on-premises environments and the AWS Cloud']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Physical devices secured with server-side encryption for streaming data to the AWS Cloud']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT a benefit of Amazon S3?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 stores any number of objects, but with object size limits']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 can run any type of application or backend system']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 provides 99.999999999% (11 9’s) of data durability']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT a benefit of Amazon S3?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 provides unlimited storage for any type of data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 stores any number of objects, but with object size limits']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 can run any type of application or backend system']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 provides 99.999999999% (11 9’s) of data durability']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer IS a benefit of Amazon S3?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 can run any type of application or backend system']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 provides unlimited storage for any type of data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 provides 98% of data durability']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer IS a benefit of Amazon S3?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 stores any number of objects, but with object size limits']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 provides unlimited storage for any type of data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 provides 98% of data durability']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer IS a feature found on the AWS Health Dashboard?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A detailed troubleshooting guidance to address AWS events impacting your resources']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Request tracing']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A dashboard detailing vulnerabilities in your applications']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 provides 98% of data durability']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Configure the AWS Budgets Service to alert the company when the threshold is exceeded']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Configure the Amazon Connect Service to alert the company when the threshold is exceeded']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure the Cost Analyzer to alert the company when the threshold is exceeded']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which AWS service would NOT help in this regard?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'EC2']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'ELB']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Auto Scaling Group']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Aurora']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM User Groups.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Config.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service provides object-level storage in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Instance Store.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding or removing EC2 compute capacity to closely match the required demand?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Load Balancer.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Auto Scaling.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which S3 storage class is best for data with unpredictable access patterns?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Intelligent-Tiering.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Glacier Flexible Retrieval.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Standard.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Standard-Infrequent Access.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS database service that allows you to upload data structured in key-value format?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Aurora.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT correct regarding Amazon EC2 On-demand instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'You have to pay a start-up fee when launching a new instance for the first time.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The on-demand instances follow the AWS pay-as-you-go pricing model.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'With on-demand instances, no longer-term commitments or upfront payments are needed.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'When using on-demand Linux instances, you are charged per second based on an hourly rate.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Encrypted keys.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Email verification.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS KMS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS MFA.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Knowledge Center.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Health Dashboard.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Infrastructure Event Management.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Support Concierge Service.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the below is a best-practice when designing solutions on AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Invest heavily in architecting your environment, as it is not easy to change your design later.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use AWS reservations to reduce costs when testing your production environment.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Automate wherever possible to make architectural experimentation easier.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Provision a large compute capacity to handle any spikes in load.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Penetration testing is not allowed in AWS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The AWS customers are only allowed to perform penetration testing on services managed by AWS.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service is used to ensure that messages between software components are not lost if one or more components fail?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon SQS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon SES.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Connect.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS service that provides a virtual network dedicated to your AWS account?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS VPN.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Subnets.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Dedicated Hosts.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon SQS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Instance store.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Instance Password.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Key pairs.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Access Keys.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'MFA.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does Amazon ElastiCache provide?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'In-memory caching for read-heavy applications.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'An Ehcache compatible in-memory data store.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An online software store that allows Customers to launch pre-configured software with just few clicks.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A domain name system in the cloud.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS service that enables you to manage all of your AWS accounts from a single master account?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS WAF.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Config.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Free support for all enterprise customers.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Automatic data protection.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reduced Capital Expenditure (CapEx).']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS holds responsibility for managing customer applications.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Internet gateways.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Virtual Private Cloud.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Security Groups.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Cognito.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS IAM.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Aurora.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS WAF.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization needs to analyze and process a large number of data sets. Which AWS service should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon MQ.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon SNS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon SQS.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What are the default security credentials that are required to access the AWS management console for an IAM user account?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'MFA.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Security tokens.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A user name and password.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Access keys.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'An internet gateway.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'EBS Snapshot.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AMI.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The ability of a system to recover gracefully from failure.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The efficient use of computing resources to meet requirements.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The ability to monitor systems and improve supporting processes and procedures.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The ability to manage datacenter operations more efficiently.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Edge locations are used by CloudFront to cache the most recent responses.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Edge locations are used by CloudFront to improve your end users’ experience when uploading files.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Edge locations are used by CloudFront to distribute content to global users with low latency.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services allows you to run containerized applications on a cluster of EC2 instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon ECS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Data Pipeline.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Cloud9.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Personal Health Dashboard.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services will help businesses ensure compliance in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CloudFront.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CloudEndure Migration.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CloudWatch.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'CloudTrail.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following procedures will help reduce your Amazon S3 costs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use the Import/Export feature to move old files automatically to Amazon Glacier.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use the right combination of storage classes based on different use cases.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Pick the right Availability Zone for your S3 bucket.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Move all the data stored in S3 standard to EBS.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following activities may help reduce your AWS monthly costs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Enabling Amazon EC2 Auto Scaling for all of your workloads.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Removing all of your Cost Allocation Tags.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploying your AWS resources across multiple Availability Zones.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS service or feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'S3 Transfer Acceleration.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS WAF.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Snowmobile.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Network ACL.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Security Groups.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'VPC Flow logs.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon SNS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon ElastiCache.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'APN Consulting Partners.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS TAM.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'APN Technology Partners.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Professional Services.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS serverless service that allows you to run your applications without any administrative burden?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon LightSail.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2 instances.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'She has properly built an elastic system.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'She has properly built a fault tolerant system.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'She has properly built an encrypted system.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'She has properly built a scalable system.']] },
      ],
      correctAnswer: '1',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Multi-factor authentication']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Penetration testing']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Vertical Scaling']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would NOT help adhere to this principle?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Vertical Scaling']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Elastic Load Balancing']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Multi-Regional Deployment']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Availability Zones']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following IS an important design principles you should adopt when designing systems on AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Remove single points of failure']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Always choose to pay as you go']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Global services are the ideal']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Horizontal scaling over vertical scaling']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? '],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Creating hypervisors']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Configuring Access Control Lists (ACLs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Installing software on EC2 instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Monitoring network performance']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer IS an advantage of using Cloud Computing over using traditional data centers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Eliminating Single Points of Failure']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved Compute capacity']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Virtualized compute resources']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated hosting']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer does NOT help AWS customers audit and monitor resource changes in their AWS environment?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A startup plans to run a web application on EC2 continuously for at least one year with predictable traffic. Which purchasing option would offer the greatest cost savings?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - All Upfront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - Partial Upfront.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has a steady, predictable workload that will run 24/7 for the next two years. Which EC2 pricing model should they choose to minimize costs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - Partial Upfront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization runs batch processing jobs that can be interrupted and resumed later. Which EC2 pricing option would be most cost-effective?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - No Upfront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer displays an example of service limits in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'You can only run 20 EC2 instances at once in a single Region.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'You can use NACLs to add fine-grain control over VPC-to-VPC communication.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'You can configure the AWS Budgets Service to alert when a threshold is exceeded.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'You can buy an EC2 reserved instance for three years.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company runs unpredictable workloads and prefers to pay only when the instances are running, without long-term commitments. Which EC2 pricing model fits best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - Partial Upfront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A financial company needs dedicated physical servers for compliance reasons and plans to use them for the next three years. Which EC2 option should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - All Upfront.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company expects consistent workload demand for the next three years and wants to minimize costs without paying the entire amount upfront. Which option should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - Partial Upfront.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - All Upfront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A research team runs compute-heavy workloads for only a few hours a week and can tolerate interruptions. Which EC2 pricing option would minimize their costs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A healthcare company with strict compliance requirements needs physical isolation for its EC2 instances. Which option meets this need?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A startup frequently tests new features and wants to launch and terminate EC2 instances as needed, paying only for what it uses. Which pricing model should it choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - No Upfront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - Partial Upfront.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to lock in capacity for predictable workloads while saving money over On-demand pricing, but they prefer to spread payments over time. Which option fits best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - Partial Upfront.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - All Upfront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - No Upfront.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following connectivity options CAN be used to build hybrid cloud architecture?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Cloud9']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following connectivity options CAN be used to build hybrid cloud architecture?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS VPN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Cloud9']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following connectivity options CANNOT be used to build hybrid cloud architecture?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Cloud9']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS VPN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Outposts']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer IS a benefit of using the Amazon Relational Database Service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Lower administrative burden']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Complete control over the underlying host']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Scales automatically to larger or smaller instance types']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Supports the document and key-value data structure']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer IS a benefit of using the Amazon Relational Database Service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Resizable compute capacity']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Complete control over the underlying host']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Scales automatically to larger or smaller instance types']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Supports the document and key-value data structure']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Reserved instances require at least a ______ pricing commitment'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'one-year']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'two-year']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'three-year']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'six-month']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_______ are best suited for periodic workloads'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Spot Instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '________ can be used to improve the availability of your database'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Read Replicas']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Edge Locations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Automatic patching']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Regions']] },
      ],
      correctAnswer: '0',
    },
    // inherit as in "benefit from"
    {
      question: [
        [QuizMarkdownType.TEXT, 'Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? '],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Environmental and physical controls']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Database controls']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Awareness and Training']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Patch management controls']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Internet Gateway.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS IQ.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Site-to-Site VPN.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Enterprise Support.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Developer Support.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Basic Support.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Business Support.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reserved instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-Demand instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated instances.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Service provides the current status of all AWS Services in all AWS Regions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Service Health Dashboard.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Management Console.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Personal Health Dashboard.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides cost-optimization recommendations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Pricing Calculator.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'VPC Peering.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Transit Gateway.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Connect.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Security Groups.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why does every AWS Region contain multiple Availability Zones?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Multiple Availability Zones allows you to build resilient and highly available architectures.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Multiple Availability Zones allows for data replication and global reach.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Multiple Availability Zones within a region increases the storage capacity available in that region.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - All Upfront.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances - No Upfront.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a benefit of running an application in multiple Availability Zones?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Allows you to exceed AWS service limits.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reduces application response time between servers and global users.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Increases available compute capacity.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Increases the availability of your application.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS sells the old devices to other hosting providers.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS destroys the old devices in accordance with industry-standard practices.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS sends the old devices for remanufacturing.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS stores the old devices in a secure place.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Elasticity.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Global reach.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Data durability.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'High availability.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deploy AWS resources across multiple Availability Zones within the same AWS Region.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create point-in-time backups in another subnet and recover this data when a disaster occurs.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS tool that enables you to use scripts to manage all AWS services and resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Console.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Service Catalog.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS OpsWorks.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CLI.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS EC2 Auto Recovery.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Auto Scaling.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Network Load Balancer.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Application Load Balancer.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Neptune.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Aurora.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS for SQL Server.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS for PostgreSQL.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Kinesis.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Application development.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Market research.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Business analysis.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Physical hardware.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How are AWS customers billed for Linux-based Amazon EC2 usage?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'EC2 instances will be billed on one second increments, with a minimum of one minute.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'EC2 instances will be billed on one hour increments, with a minimum of one day.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'EC2 instances will be billed on one minute increments, with a minimum of one hour.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'EC2 instances will be billed on one day increments, with a minimum of one month.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By creating an AWS Config template from the old instance and launching a new instance from it.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By creating an EBS Snapshot of the old instance.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By installing Aurora on EC2 and launching a new instance from it.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By creating an AMI from the old instance and launching a new instance from it.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements describes the AWS Cloud’s agility?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS allows you to host your applications in multiple regions around the world.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS provides customizable hardware at the lowest possible cost.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS allows you to provision resources in minutes.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS allows you to pay upfront to reduce costs.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Pay less as AWS grows.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Pay as you go.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Pay less by using more.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Save when you reserve.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Right-size before and after migration.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use a Multi-Region Active-Passive architecture.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Combine On-demand Capacity Reservations with Saving Plans.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use a Multi-Region Active-Active architecture.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary storage service used by Amazon RDS database instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Glacier.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CodePipeline.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Replicate the current resources across multiple Availability Zones within the same region.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Migrate the application to a hosting provider in Asia.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Recreate the website content.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Using Amazon EC2 falls under which of the following cloud computing models?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IaaS & SaaS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IaaS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SaaS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'PaaS.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the below is a best-practice when building applications on AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Strengthen physical security by applying the principle of least privilege.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Ensure that the application runs on hardware from trusted vendors.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use IAM policies to maintain performance.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decouple the components of the application so that they run independently.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon SQS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Instance store.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does Amazon Elastic Beanstalk provide?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A PaaS solution to automate application deployment.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A compute engine for Amazon ECS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A scalable file storage solution for use with AWS and on-premises servers.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A NoSQL database service.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Kinesis.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Security groups.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Network Access Control Lists.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reserved instances - No Upfront.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved instances - Partial Upfront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-Demand instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What are the two components that make up an AWS Access Key?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Access Key ID and Secret Access Key.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Public Key and Private Key.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Client ID and Client Secret.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'User ID and Password.']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
