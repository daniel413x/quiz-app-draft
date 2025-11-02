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
        [QuizMarkdownType.TEXT, 'Which answer is a benefit of Amazon S3?'],
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
        [QuizMarkdownType.TEXT, 'Which answer is a benefit of Amazon S3?'],
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
        [QuizMarkdownType.TEXT, 'Which answer is a feature found on the AWS Health Dashboard?'],
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
        [QuizMarkdownType.TEXT, 'Which of the following is an important design principles you should adopt when designing systems on AWS?'],
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
        [QuizMarkdownType.TEXT, 'Which answer is an advantage of using Cloud Computing over using traditional data centers?'],
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
        [QuizMarkdownType.TEXT, 'Which answer is a benefit of using the Amazon Relational Database Service?'],
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
        [QuizMarkdownType.TEXT, 'Which answer is a benefit of using the Amazon Relational Database Service?'],
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
    {
      question: [
        [QuizMarkdownType.TEXT, '_________ simplifies organizing and governing commonly deployed IT services'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Service Catalog']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Knowledge Center']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Documentation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Control Tower']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_________ scales automatically without the customer\'s intervention'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_________ scales automatically without the customer\'s intervention'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'For managed services like Amazon DynamoDB, which of the below is AWS responsible for? '],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Patching the database software']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Creating access policies']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Logging access activity']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Protecting credentials']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is a benefit of using DynamoDB?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Offers extremely low (single-digit millisecond) latency']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Supports the most popular NoSQL database engines such as CouchDB and MongoDB']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Provides resizable instances to match the current demand']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Supports both relational and non-relational data models']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is a benefit of using DynamoDB?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Automatically scales to meet required throughput capacity']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Supports the most popular NoSQL database engines such as CouchDB and MongoDB']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Provides resizable instances to match the current demand']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Supports both relational and non-relational data models']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer can be used to protect data at rest on Amazon S3?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Versioning']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deduplication']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Decryption']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Conversion']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do ELBs improve the reliability of your application?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By distributing traffic across multiple S3 buckets.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By replicating data to multiple availability zones.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By creating database Read Replicas.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By ensuring that only healthy targets receive traffic.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-demand instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Dedicated instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reserved instances.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Snowball.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'S3 Transfer Acceleration.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Snowmobile.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Glacier.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Standard.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Service is used to manage user permissions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Security Groups.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon ECS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS IAM.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Support.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which support plan includes AWS Support Concierge Service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Premium Support.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Business Support.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Enterprise Support.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Standard Support.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Config.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS’ recommendation regarding access keys?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Delete all access keys and use passwords instead.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Only share them with trusted people.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Rotate them regularly.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Save them within your application code.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Key Pair.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Access Keys.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SDK.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'MFA.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the benefit of using an API to access AWS Services?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It improves the performance of AWS resources.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It reduces the time needed to provision AWS resources.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It reduces the number of developers necessary.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It allows for programmatic management of AWS resources.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Glacier.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can AWS customers track and avoid over-spending on underutilized reserved instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS service that provides five times the performance of a standard MySQL database?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Aurora.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Neptune.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does AWS Service Catalog provide?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It enables customers to quickly find descriptions and use cases for AWS services.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It enables customers to explore the different catalogs of AWS services.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It simplifies organizing and governing commonly deployed IT services.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It allows developers to deploy infrastructure on AWS using familiar programming languages.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS Services helps with planning application migration to the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball Migration Service.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Application Discovery Service.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS DMS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Migration Hub.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Machine Image.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Cost & Usage Report.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement best describes the concept of an AWS Region?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'An AWS Region is a geographical location with a collection of Edge locations.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'An AWS Region is a virtual network dedicated only to a single AWS customer.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An AWS Region is a geographical location with a collection of Availability Zones.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'An AWS Region represents the country where the AWS infrastructure exist.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'SNS logs.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'SQS logs.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CloudWatch Logs.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'CloudTrail logs.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What are AWS shared controls?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Controls that a customer inherits from AWS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Controls that apply to both the infrastructure layer and customer layers.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Controls that the customer and AWS collaborate together upon to secure the infrastructure.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2 is considered a Serverless Web Service.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2 eliminates the need to invest in hardware upfront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2 can launch as many or as few virtual servers as needed.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2 offers scalable computing.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS Compute service that executes code only when triggered by events?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Transit Gateway.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS Snapshots.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Managed Servers.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2 Instances.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Secrets Manager.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS WAF.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CAF.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS TCO Calculator.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Pricing Calculator.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using AWS Trusted Advisor to find underutilized resources.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using AWS CloudTrail to record user activities.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using AWS CloudFormation to manage infrastructure as code.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploying an application in multiple Availability Zones.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Deleting unused EBS volumes after terminating an EC2 instance.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deleting unused AutoScaling launch configuration.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deleting unused Elastic Load Balancers.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Releasing unused Elastic IPs after terminating an EC2 instance.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS tool that can help a company visualize their AWS spending in the last few months?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Pricing Calculator.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Consolidated Billing.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Email Service (Amazon SES).']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Storage Service (Amazon S3).']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Notification Service (Amazon SNS).']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Queue Service (Amazon SQS).']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Low monthly instance maintenance costs.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Low-cost instance tagging.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Per-second instance billing.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Low instance start-up fees.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Group assists customers in achieving their desired business outcomes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Security Team.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Professional Services.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Concierge Support Team.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service or feature is used to manage the keys used to encrypt customer data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS KMS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Service Control Policies (SCPs).']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Multi-Factor Authentication (MFA).']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Macie.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Service allows customers to download AWS SOC & PCI reports?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Well-Architected Tool.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Glue.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Chime.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You can invoke AWS Lambda manually from any of the following EXCEPT'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Config.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Another Lambda function.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS SDK.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CLI.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS offerings is a serverless service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a factor when estimating the costs of Amazon EC2?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Number of Hosted Zones']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Number of instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The amount of time the instances will be running']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Allocated Elastic IP Addresses ']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following factors should be considered when determining the region in which AWS Resources will be deployed?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Data sovereignty']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The AWS Region’s security level']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The planned number of VPCs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Geographic proximity to the company’s location']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following factors should be considered when determining the region in which AWS Resources will be deployed?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Data sovereignty']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The AWS Region’s security level']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The planned number of VPCs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Geographic proximity to the company’s location']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Least Privilege.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Pilot Light.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Fault Tolerance.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Multi-threading.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'All up-front reservation.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'All reserved instance payment options provide the same discount level.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Partial up-front reservation.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'No up-front reservation.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '3 hours for the Linux instance and 5 hours for the CentOS instance.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS Support feature that allows customers to manage support cases programmatically?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Operations Support.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Support API.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Personal Health Dashboard.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following Amazon RDS features facilitates offloading of database read activity?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Database Snapshots.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Multi-AZ Deployments.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Automated Backups.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Read Replicas.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does AWS notify customers about security and privacy events pertaining to AWS services?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using the AWS ACM service.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using Security Bulletins.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using the AWS Management Console.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using Compliance Resources.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which IAM entity can best be used to grant temporary access to your AWS resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM Users.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Key Pair.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM Roles.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM Groups.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Global Accelerator.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Application Load Balancer (ALB).']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transit VPC.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use Software test automation tools.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use AWS CodeDeploy to build and automate your AWS environment.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use code to provision and operate your AWS infrastructure.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Migrate all of your applications to a dedicated host.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Restrict any API call made through SDKs or CLI.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Require Multi-Factor Authentication (MFA) for all IAM User access.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Set up two login passwords.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Service offers volume discounts based on usage?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Lightsail.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Neptune.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon ElastiCache.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'DAX.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What are the advantages of using Auto Scaling Groups for EC2 instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS helps customers invest more in capital expenditures.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS automates all infrastructure operations, so customers save more on human resources costs.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS continues to lower the cost of cloud computing for its customers.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS secures AWS resources at no additional charge.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a type of MFA device that customers can use to protect their AWS resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudHSM.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'U2F Security Key.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Access Keys.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Key Pair.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon SNS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Beanstalk.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Data Pipeline.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Aurora.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Storage Service.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic Block Store.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic Container Service.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'EBS and S3 are accessible only to the root account owner.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The systems administrator must contact AWS Support first to activate his new IAM account.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'There is not enough space in S3 to store the snapshots.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'There is a non-explicit deny to all new users.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An external auditor is requesting a log of all accesses to the AWS resources in the company’s account. Which of the following services will provide the auditor with the requested information?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the below options is true of Amazon Cloud Directory?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Cloud Directory enables the analysis of video and data streams in real time.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Cloud Directory allows for registration and management of domain names.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A user has opened a “Production System Down” support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '12 hours.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '15 minutes.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '24 hours.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'One hour.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the below options is a best practice for making your application on AWS highly available?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Deploy the application to at least two Availability Zones.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Elastic Load Balancing (ELB) across multiple AWS Regions.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy the application code on at least two servers in the same Availability Zone.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Rewrite the application code to handle all incoming requests.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Basic Support.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Developer Support.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Business Support.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Enterprise Support.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS ACM.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Detective.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS WAF.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Config.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS OpsWorks.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AutoScaling.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Instance Store.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS WAF.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Cloud9.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is migrating a web application to AWS. The application’s compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-demand Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create an IAM role and attach a policy with Amazon DynamoDB access permissions.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create an IAM role and attach a policy with Administrator access permissions.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an IAM user and attach a policy with Amazon DynamoDB access permissions.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create an IAM user and attach a policy with Administrator access permissions.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Generate new IAM access keys every time you delegate permissions.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Store the required AWS credentials directly within the application code.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use temporary security credentials (IAM roles) instead of long-term access keys.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following will help AWS customers save on costs when migrating their workloads to AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use servers instead of managed services.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use existing third-party software licenses on AWS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Migrate production workloads to AWS edge locations instead of AWS Regions.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use AWS Outposts to run all workloads in a cost-optimized environment.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon SQS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Virtual Private Gateway.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'According to best practices, which of the below options is best suited for processing a large number of binary files?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Vertically scaling EC2 instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Running RDS instances in parallel.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Vertically scaling RDS instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Running EC2 instances in parallel.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Pricing Calculator.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Cost & Usage Report.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Elastic coupling.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Loosely coupling.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Scalable coupling.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Tightly coupling.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Storage Service.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic Block Store.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create private connection to your data center.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Achieve global high availability.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Automate the process of provisioning new compute resources.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Make synchronous replication of your data possible.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which option is a use case of Amazon Route 53?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Manages global application traffic through a variety of routing types.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Detects configuration changes in the AWS environment.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Provides infrastructure security optimization recommendations.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Make synchronous replication of your data possible.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which option is a use case of Amazon EMR?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Enables you to analyze and process extremely large amounts of data in a timely manner.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Enables you to backup extremely large amounts of data at very low costs.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Enables you to easily run and manage Docker containers.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Enables you to move Exabyte-scale data from on-premises datacenters into AWS.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '________ is server-based'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Fargate']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer best characterizes AWS CloudFormation?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It allows you to model your entire infrastructure in just a text file']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It compiles and builds application code in a timely manner']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It applies advanced IAM security features automatically']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It helps AWS customers deploy their applications without worrying about the underlying infrastructure']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is an advantage of using AWS as a cloud computing provider?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Enables customers to trade their capital expenses for operational expenses']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Provides custom hardware to meet any specification']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Manages all the compliance and auditing tasks']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Eliminates the need to monitor servers and applications']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'At the AWS _____ Support Plan, the customer receives access to the Infrastructure Event Management (IEM) feature for an additional fee.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Business']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Enterprise']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Basic']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Developer']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true regarding the AWS Availability Zones and edge locations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Edge locations are located in separate Availability Zones worldwide to serve global customers.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'An availability zone exists within an edge location to distribute content globally with low latency.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Personalize.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Cognito.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS IAM.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Config.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Auto Scaling.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Service can perform health checks on Amazon EC2 instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Chime.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Aurora.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS IAM.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Polly.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Rekognition.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company’s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'EC2 On-Demand Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'EC2 Reserved Instances - No Upfront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'EC2 Spot Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'EC2 Reserved Instances - All Upfront.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS account owner.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS technical account manager.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS security team.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS cloud support engineers.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS File Transfer Acceleration.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Server Migration Service.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Database Migration Service.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Application Discovery Service.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-premises.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Mixed.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Hybrid.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Cloud.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CloudEndure Disaster Recovery.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CloudEndure Migration.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Backup.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Glue.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'S3 Standard-IA.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'S3 Intelligent-Tiering.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'S3 Glacier Deep Archive.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'S3 Standard.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to create a backup of your data in another geographical location. Where should you create this backup?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'In another Edge location.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'In another Region.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'In another VPC.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'In another Availability Zone.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement is true in relation to the security of Amazon EC2?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'You should use instance store volumes to store login data.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'You should regularly patch the operating system and applications on your EC2 instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'You should deploy critical components of your application in the Availability Zone that you trust.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'You can track all API calls using Amazon Athena.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does AWS Cost Explorer provide to help manage your AWS spend?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Cost comparisons between AWS Cloud environments and on-premises environments.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Accurate estimates of AWS service costs based on your expected usage.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Consolidated billing.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Highly accurate cost forecasts for up to 12 months ahead.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RDS Single-AZ.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RDS Write Replica.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RDS Snapshots.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RDS Multi-AZ.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Deleting all EBS volumes attached to the instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'You cannot minimize charges for on-demand instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Terminating the instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Stopping the instances.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following strategies helps protect your AWS root account?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Delete root user access keys if you do not need them.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Apply MFA for the root account and use it for all of your work.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Access the root account only from your personal Mobile Phone.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Only share your AWS account password or access keys with trusted persons.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Attach a separate IAM policy for each individual account.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Apply the Principle of Least Privilege.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'For security purposes, you should not grant any permission to the DevOps team.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create six different IAM passwords.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Who from the following will get the largest discount?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A user who chooses to buy On-demand, Convertible, Partial upfront instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A user who chooses to buy Reserved, Convertible, All upfront instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A user who chooses to buy Reserved, Standard, No upfront instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A user who chooses to buy Reserved, Standard, All upfront instances.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an available option when purchasing Amazon EC2 instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The ability to bid to get the lowest possible prices.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The ability to register EC2 instances to get volume discounts on every hour the instances are running.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The ability to buy Dedicated Instances for up to 90% discount.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The ability to pay upfront to get lower hourly costs.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the term “Economies of scale” mean?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It means that you save more when you consume more.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It means as more time passes using AWS, you pay more for its services.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It means that AWS will continuously lower costs as it grows.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It means that you have the ability to pay as you go.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Auto Scaling.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic Compute Cloud.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon ElastiCache.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the below options is true of Amazon VPC?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC allows customers to control user interactions with all other AWS resources.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Customers have complete control over their Amazon VPC virtual networking environment.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS is responsible for all the management and configuration details of Amazon VPC.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon VPC helps customers to review their AWS architecture and adopt best practices.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Pricing Calculator.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS TCO Calculator.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS services uses Puppet to automate how EC2 instances are configured?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS OpsWorks.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Quick Starts.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Kinesis.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CodeDeploy.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can’t see a way to contact support via Chat. What should you do?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'There is no chat feature in AWS support.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The chat feature is available for all plans for an additional fee, but you have to request it first.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'At a minimum, upgrade to Business support plan.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Upgrade from the Basic Support plan to Developer Support.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn’t have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Fargate.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Batch.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Personalize.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Beanstalk.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement best describes the AWS Pay-As-You-Go pricing model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'With AWS, you replace low upfront expenses with large variable payments.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'With AWS, you replace low upfront expenses with large fixed payments.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'With AWS, you replace large upfront expenses with low fixed payments.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'With AWS, you replace large capital expenses with low variable payments.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following strategies help analyze costs in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using tags to group resources.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using AWS CloudFormation to automate the deployment of resources.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploying resources of the same type in different regions.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configuring Amazon Inspector to automatically analyze costs and email reports.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Snowmobile.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS VPN.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main benefit of the AWS Storage Gateway service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It automates the process of building, maintaining, and running ETL jobs.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It provides physical devices to migrate data from on premises to AWS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It allows integration of on-premises IT environments with Cloud Storage.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It provides hardware-based key storage for regulatory compliance.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Glacier Deep Archive.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Standard-Infrequent Access.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Glacier.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Instance Store.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Global Accelerator.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Data Pipeline.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS DAX Accelerator.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Transfer Acceleration.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why are Serverless Architectures more economical than Server-based Architectures?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Serverless Architectures use new powerful computing devices.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'When you reserve serverless capacity, you will get large discounts compared to server reservation.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'With Serverless Architectures you have the ability to scale automatically up or down as demand changes.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Snowmobile.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Import/Export.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS DMS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Snowball.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Cloud9.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon ElastiCache for Redis.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following will affect how much you are charged for storing objects in S3?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The total size in gigabytes of all objects stored.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Creating and deleting S3 buckets.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using default encryption for any number of S3 buckets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The number of EBS volumes attached to your instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a valid Amazon EC2 Reserved Instance type?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Standard.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Expedited.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Bulk.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Spot.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following terms is NOT associated with the Amazon EC2 Reserved Instance type?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Spot.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Full upfront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Convertible.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Standard.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following factors affect Amazon CloudFront cost?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Number of Requests.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Instance type.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Storage Class.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Number of Volumes.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following factors affect Amazon CloudFront cost?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Traffic Distribution.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Instance type.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Storage Class.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Number of Volumes.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following security resources are available to any user for free?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Bulletins.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Support APl.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS TAM.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Classroom Training.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following security resources are available to any user for free?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Security Blog.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Support APl.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS TAM.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Classroom Training.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following procedures can reduce latency when your end users are retrieving data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Store media assets in S3 and use CloudFront to distribute these assets.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reduce the size of media assets using the Amazon Elastic Transcoder.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Replicate media assets to multiple availability zones.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Store media assets on an additional EBS volume and increase the capacity of your server.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is one of the key design principle for designing public cloud systems?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Disposable resources instead of fixed servers.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reserved capacity instead of on demand.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Multi-AZ deployments instead of multi-region deployments.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Servers instead of managed services.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select a service that automatically replicates data across Availability Zones.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'S3.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS VPC.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Instance Store.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select a service that automatically replicates data across Availability Zones.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'DynamoDB.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS VPC.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Instance Store.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service helps developers compile and test their code?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CodeDeploy.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CodeCommit.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CloudEndure.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CodeBuild.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Lightsail.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Connect.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Beanstalk.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using the AWS Cost & Usage Report.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using the AWS Total Cost of Ownership (TCO) dashboard.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using the AWS CloudWatch logs dashboard.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using the Amazon VPC dashboard.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services gives you access to all AWS auditor-issued reports and certifications?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Config.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Resource Groups.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Placement Groups.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Management Console.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Tag Editor.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service collects metrics from running EC2 instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudFormation.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Detective.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Shield.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use EC2 Dedicated Hosts.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use EC2 Reserved Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use EC2 Spot Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use EC2 On-demand Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Tagging Enforcement.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Architecture Optimization.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Budgeting Processes.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Resource Controls.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RedShift.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RDS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CloudHSM.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'DMS.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What can you use to assign permissions directly to an IAM user?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM Identity.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Group.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM Role.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM Policy.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS allows customers to launch powerful EC2 instances to handle spikes in load.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS allows customers to pay upfront to get bigger discounts.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS allows customers to launch and terminate EC2 instances based on demand.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS allows customers to choose cheaper types of EC2 instances that best fit their needs.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'PostgreSQL.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Oracle.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Microsoft SQL Server.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Teradata.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS services would help you migrate on-premise databases to AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS DMS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3 Transfer Acceleration.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Directory Service.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Transit Gateway.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Run WordPress on an Amazon Lightsail instance.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Install WordPress on an Amazon EC2 instance.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use the Amazon S3 Web hosting feature.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Host the website directly on AWS Cloud Development Kit (AWS CDK).']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services allows you to install and run custom relational database software?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Cognito.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Auto Scaling.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'ELB.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Route53.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic Container Service.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS IAM.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Outposts.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Federation.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail Trails.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM Credential Report.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact reports.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Cost and Usage Report.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Shield.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Certificate Manager.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudHSM.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS WAF.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'There is no need to architect for these capabilities in AWS, as AWS is redundant by default.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deploy the application in a single Availability Zone.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy the application in multiple Availability Zones in a single AWS region.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploy the application in multiple Availability Zones in multiple AWS regions.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Service Control Policies (SCPs).']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Acceptable Use Policy.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you protect data stored on Amazon S3 from accidental deletion?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By enabling S3 Versioning.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By configuring S3 Bucket Policies.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By configuring S3 Lifecycle Policies.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By disabling S3 Cross-Region Replication (CRR).']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Securing regions and edge locations.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Performing auditing tasks.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Monitoring AWS resources usage.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Securing access to AWS resources.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Business & Enterprise Support.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Basic & Developer Support.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Developer & Enterprise Support.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Developer & Business Support.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a benefit of using AWS Lambda?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda runs code without provisioning or managing servers.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda provides resizable compute capacity in the cloud.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'There is no charge when your AWS Lambda code is not running.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda can be called directly from any mobile app.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does AWS help customers achieve compliance in the cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It’s not possible to meet regulatory compliance requirements in the Cloud.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS applies the most common Cloud security standards, and is responsible for complying with customers’ applicable laws and regulations.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS has many common assurance certifications such as ISO 9001 and HIPAA.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Many AWS services are assessed regularly to comply with local laws and regulations.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Your security team.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Your development team.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Your internal DevOps team.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic Transcoder.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Pinpoint.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Rekognition.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service allows you to build a data warehouse in the cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Shield.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What AWS service allows you to buy third-party software solutions and services that run on AWS resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Application Discovery service.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon DevPay.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Resource Groups.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CodePipeline.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CodeCommit.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Cognito.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Cloud9.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which feature enables users to sign into their AWS accounts with their existing corporate credentials?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Federation.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Access keys.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM Permissions.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'WAF rules.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What can you access by visiting the URL: [http://status.aws.amazon.com](http://status.aws.amazon.com)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Billing Dashboard.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Dashboard.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Service Health Dashboard.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Security Dashboard.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use the AWS Pricing Calculator service to monitor the costs incurred by each department.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use Amazon Aurora to forecast AWS spending based on usage.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Apply cost allocation tags to segment AWS costs by different projects and departments.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Configure AWS Price List API to receive billing updates for each department automatically.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What is one the main benefits of using the AWS EC2 instances instead of traditional servers??'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Improves Fault-Tolerance.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Provides your business with a seamless remote accessibility.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Prevents unauthorized users from getting into your network.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Provides automatic data backups.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What is one the main benefits of using the AWS EC2 instances instead of traditional servers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Can be scaled manually in a shorter period of time.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Provides your business with a seamless remote accessibility.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Prevents unauthorized users from getting into your network.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Provides automatic data backups.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement is true regarding AWS pricing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'You only pay for the individual services that you need with no long-term contracts.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'There are no reservations on AWS, you only pay for what you use.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'For some services, you have to pay a startup fee in order to get the service running.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'You have no responsibility for third-party software license costs.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement is true regarding AWS pricing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'With the AWS pay-as-you-go pricing model, you don’t have to pay any upfront fee.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'There are no reservations on AWS, you only pay for what you use.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'For some services, you have to pay a startup fee in order to get the service running.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'You have no responsibility for third-party software license costs.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is one of the main differences between an IAM user and an IAM role in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM users are more cost effective than IAM roles.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is one of the main differences between an IAM user and an IAM role in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM users are more cost effective than IAM roles.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following actions may reduce Amazon EBS costs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Deleting unnecessary snapshots.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Distributing requests to multiple volumes.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using reservations.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Distributing requests to multiple volumes.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'IAM user, IAM role.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IAM user, IAM group.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM role, IAM group.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'IAM group, AWS account root user.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Rotate all access keys.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Download all the attached policies in a safe place.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Change the email address and password of the root user account and enable MFA.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use Serverless Computing whenever possible.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deploy resources in another region.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy your resources across multiple Availability Zones.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use Elastic Load Balancing.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use Serverless Computing whenever possible.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deploy resources in another region.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploy your resources across multiple Availability Zones.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use Elastic Load Balancing.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which EC2 instance type exemplifies elasticity in the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot Instances']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A financial institution needs to ensure that their EC2 workloads run on hardware dedicated exclusively to their organization, but they do not need to bring their own software licenses. Which EC2 instance option should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A healthcare company must comply with strict data isolation requirements and needs to ensure that its instances do not share hardware with other AWS customers. Which instance type fulfills this requirement without requiring visibility into the underlying hardware?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Shared Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has a requirement that its EC2 instances must run on physical servers that are not shared with any other AWS accounts. However, the company does not need control over how instances are placed on that hardware. Which option should the company select?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which EC2 option ensures that your instances run on hardware dedicated to a single customer, but AWS still manages the instance placement and capacity?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to use its existing Microsoft SQL Server licenses with Software Assurance in AWS. Which EC2 instance option should they use to comply with license requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An enterprise customer needs visibility into the physical sockets and cores of the servers running their EC2 instances for compliance and licensing audits. Which EC2 instance option should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A government agency must comply with software licensing regulations that require mapping instances to specific physical servers. Which EC2 instance type represents physical servers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which EC2 instance option provides the most control over the physical server, including visibility into host-level metrics and the ability to use Bring Your Own License (BYOL)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS characteristic makes AWS cost effective for a workload with dynamic user demand?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Elasticity.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'High availability.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Shared security model.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reliability.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS characteristic makes AWS cost effective for a workload with dynamic user demand?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Pay-as-you-go pricing.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'High availability.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Shared security model.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reliability.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Storage Service.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Elastic Beanstalk.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CodeCommit.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement is true in relation to security in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS manages everything related to EC2 operating systems.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS customers are responsible for patching any database software running on Amazon EC2.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Server side encryption is the responsibility of AWS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS is responsible for the security of your application.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Control Tower.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Macie.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager Patch Manager.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Security Hub.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use CloudFront to monitor the CPU usage.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use SNS to monitor the utilization of the server.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'You can’t run a database inside an Amazon EC2 instance.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudSearch.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic MapReduce.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudHSM.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does Amazon GuardDuty do to protect AWS accounts and workloads?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Notifies AWS customers about abuse events once they are reported.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Helps AWS customers identify the root cause of potential security issues.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Checks security groups for rules that allow unrestricted access to AWS resources.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which database service should you use if your application and data schema require “joins” or complex transactions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Outposts.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon DocumentDB.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following makes it easier for you to categorize, manage and filter your resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Service Catalog.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Directory Service.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Tagging.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What should you consider when storing data in Amazon Glacier?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Glacier only accepts data in a compressed format.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Glacier can only be used to store frequently accessed data and data archives.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Glacier does not provide immediate retrieval of data.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Attach Glacier to an EC2 Instance to be able to store data.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Batch.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Lambda@Edge.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Fargate.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you increase your application’s fault-tolerance while it is being hosted in AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Deploy your application across multiple EC2 instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Deploy your application across multiple Availability Zones.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Host your application on one powerful EC2 instance type instead of multiple smaller instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Deploy the underlying application resources across multiple subnets.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a benefit of the “Loose Coupling” architecture principle?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It eliminates the need for change management.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It allows for Cross-Region Replication.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It helps AWS customers reduce Privileged Access to AWS resources.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It allows individual application components or services to be modified without affecting other components.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic Block Store.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On-premises.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IaaS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'PaaS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Cloud.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the benefit of Amazon EBS volumes being automatically replicated within the same Availability Zone?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Elasticity.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Durability.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Traceability.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Accessibility.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Savings Plans.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'On-Demand Instances.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EFS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Secrets Manager.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Systems Manager.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is used when encrypting EBS volumes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS WAF.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS KMS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Macie.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It is a data center designed to be completely isolated from other data centers in the same region.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It is a collection of data centers distributed in multiple countries.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It is a logically isolated network of the AWS Cloud.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It is a distinct location within a region that is insulated from failures in other Availability Zones.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple […].'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regions.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Transportation devices.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Support plans.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Edge locations.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the maximum amount of data that can be stored in S3 in a single AWS account?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '100 PetaBytes.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Virtually unlimited storage.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '5 TeraBytes.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '10 Exabytes.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Operational Excellence.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Security.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Performance Efficiency.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reliability.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Connect.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following steps should be taken by a customer when conducting penetration testing on AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Conduct penetration testing using Amazon Inspector, and then notify AWS support.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Request and wait for approval from the customer’s internal security team, and then conduct testing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Notify AWS support, and then conduct testing immediately.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Request and wait for approval from AWS support, and then conduct testing.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Cost and Usage report.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Billing dashboard.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power, networking, and connectivity, which are housed in separate facilities?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Regions.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Availability Zones.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Edge locations.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How many Availability Zones should compute resources be provisioned across to achieve high availability?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A minimum of one.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A minimum of two.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A minimum of three.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A minimum of four or more.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The AWS Cloud’s multiple Regions are an example of:'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Agility.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Global infrastructure.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Elasticity.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Pay-as-you-go pricing.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service can be used to manually launch instances based on resource requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon ECS.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which is a recommended pattern for designing a highly available architecture on AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Ensure that components have low-latency network connectivity.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Run enough Amazon EC2 instances to operate at peak load.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Ensure that the application is designed to accommodate failure of any single component.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use a monolithic application that handles all operations.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main benefit of attaching security groups to an Amazon RDS instance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Manages user access and encryption keys.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Controls what IP address ranges can connect to your database instance.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deploys SSL/TLS certificates for use with your database instance.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Distributes incoming traffic across multiple targets.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'EC2 launch type.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Fargate launch type.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Lightsail launch type.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Lambda launch type.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Try to remove unnecessary AWS accounts.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Add the accounts to an AWS Organization and use Consolidated Billing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Track the AWS charges that are incurred by the member accounts.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Enable AWS tiered-pricing before provisioning resources.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Network ACLs and Traffic Manager.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Network ACLs and Subnets.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Security Groups and Internet Gateways.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Security Groups and Network ACLs.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which task is the customer responsible for in the shared responsibility model for security and compliance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Updating operating systems.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Updating Amazon EC2 host firmware.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Maintaining the physical security of infrastructure hardware.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Providing ways to work with AWS via API.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which task is AWS responsible for in the shared responsibility model for security and compliance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Updating Amazon EC2 host firmware.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Updating operating systems.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Encrypting data in transit.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Encrypting data at rest.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a benefit of using the AWS Cloud for companies with customers in many countries around the world?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Companies can deploy applications in multiple AWS Regions to reduce latency.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend allows users to build applications that can respond to user requests in many languages.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Translate automatically translates third-party website interfaces into multiple languages.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a benefit of using the AWS Cloud for companies with customers in many countries around the world?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront has multiple edge locations around the world to reduce latency.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Comprehend allows users to build applications that can respond to user requests in many languages.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Translate automatically translates third-party website interfaces into multiple languages.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service can be used across hybrid AWS Cloud architectures?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Virtual Private Gateway.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Classic Load Balancer.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Auto Scaling.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch default metrics.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service can be used across hybrid AWS Cloud architectures?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Classic Load Balancer.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Auto Scaling.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch default metrics.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Well-Architected Framework documentation.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CodeCommit.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Quick Start reference deployments.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It simplifies relational database administration tasks.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It provides 99.99999999999% reliability and durability.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It automatically scales databases for loads.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It enables users to dynamically adjust CPU and RAM resources.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following AWS Cloud services can be used to run a customer-managed relational database?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon ElastiCache.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Launch the instances across multiple Availability Zones in a single AWS Region.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Launch the instances in multiple AWS Regions but in the same Availability Zone.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A public and private key-pair.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Identity and Access Management (IAM) policies.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Security Groups.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service or feature can be used to monitor CPU usage?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'VPC Flow Logs.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Config.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which task is AWS responsible for in the shared responsibility model for security and compliance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Granting access to individuals and services.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Encrypting data in transit.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Updating Amazon EC2 host firmware.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Updating operating systems.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following security-related actions are available at no cost?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Calling AWS Support.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Contacting AWS Professional Services to request a workshop.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Accessing forums, blogs, and whitepapers.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Attending AWS classes at a local university.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which storage service can be used as a low-cost option for hosting static websites?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Glacier.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System (Amazon EFS).']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Simple Storage Service (Amazon S3).']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'According to the AWS shared responsibility model what is the sole responsibility of AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Application security.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Edge location management.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Patch management.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Client-side data.']] },
      ],
      correctAnswer: '1',
    }, {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When architecting cloud applications, which of the following are a key design principle?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use the largest instance possible.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Provision capacity for peak load.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use the Scrum development process.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Implement elasticity.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Enable automate patching for the instances using the Amazon RDS console.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'In AWS Config, configure a rule for the instances and the required patch level.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use AWS Systems Manager to automate database patching according to a schedule.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which mechanism allows developers to access AWS services from application code?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Software Development Kit.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Management Console.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CodePipeline.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Config.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS feature will reduce the customer’s total cost of ownership (TCO)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Shared responsibility security model.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Single tenancy.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Elastic computing.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Encryption.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a benefit of using the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Permissive security removes the administrative burden.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Ability to focus on revenue-generating activities.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Control over cloud network hardware.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Choice of specific cloud hardware vendors.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is Amazon CloudWatch?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A code repository with customizable build and team commit features.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A metrics repository with customizable notification thresholds and channels.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A security configuration repository with threat analytics.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A rule repository of a web application firewall with automated vulnerability prevention features.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Under the shared responsibility model, which of the following is a shared control between a customer and AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Physical controls.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Patch management.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Zone security.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Data center auditing.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is used to pay AWS bills, and monitor usage and budget costs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Billing and Cost Management.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Consolidated billing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do customers benefit from Amazon’s massive economies of scale?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Periodic price reductions as the result of Amazon’s operational efficiencies.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'New Amazon EC2 instance types providing the latest hardware.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The ability to scale up and down when needed.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Increased reliability in the underlying hardware of Amazon EC2 instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Service control policies (SCPs).']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Consolidated billing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'All Upfront Reserved Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services will automatically scale with an expected increase in web traffic?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS CodePipeline.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Elastic Load Balancing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service provides a virtually unlimited amount of online highly durable object storage?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic File System (Amazon EFS).']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic Container Service (Amazon ECS).']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS feature should a customer leverage to achieve high availability of an application?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Direct Connect.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Availability Zones.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Data centers.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Virtual Private Cloud (Amazon VPC).']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a cloud architectural design principle?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Scale up not out.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Loosely couple components.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Build monolithic systems.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use commercial database software.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudWatch.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Config.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Health.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where can AWS compliance and certification reports be downloaded?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Concierge.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Certificate Manager.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service can serve a static website?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon QuickSight.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS X-Ray.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS customer responsible for according to the AWS shared responsibility model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Physical access controls.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Data encryption.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Secure disposal of storage devices.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Environmental risk management.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If each department within a company has its own AWS account, what is one way to enable consolidated billing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use AWS Budgets on each account to pay only to budget.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Contact AWS Support for a monthly bill.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Create an AWS Organization from the payer account and invite the other accounts to join.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Project management.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Antivirus software licensing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Data center security.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Software development.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They require the customer to monitor and replace failing instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They have better performance than customer-managed services.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They simplify patching and updating underlying OSs.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They do not require the customer to optimize instance type or size selections.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement best describes Elastic Load Balancing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It translates a domain name into an IP address using DNC.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It distributes incoming application traffic across one or more Amazon EC2 instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It collects metrics on connected Amazon EC2 instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a fast and reliable NoSQL database service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service would you use to obtain compliance reports and certificates?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Artifact.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Certificate Manager.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How would an AWS customer easily apply common access controls to a large set of users?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Apply an IAM policy to an IAM group.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Apply an IAM policy to an IAM role.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Apply the same IAM policy to all IAM users with access to the same workload.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Apply an IAM policy to an Amazon Cognito user pool.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an important architectural design principle when designing cloud applications?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use multiple Availability Zones.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use tightly coupled components.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use open source software.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Provision extra capacity.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Server Migration Service.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is a feature of Amazon CloudWatch Logs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Adjustable retention.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Provided at no charge.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Free Amazon Elasticsearch Service analytics.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Free alerts with Amazon SQS.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which benefit aris included with the AWS Business Support plan?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'An unlimited number of cases and contacts.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Support from a dedicated AWS Technical Account Manager.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '15-minute response time for production system interruption cases.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Annual operational reviews with AWS Solutions Architects.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which benefit is included with the AWS Business Support plan?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '24/7 assistance by way of live chat or a telephone call.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Support from a dedicated AWS Technical Account Manager.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '15-minute response time for production system interruption cases.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Annual operational reviews with AWS Solutions Architects.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which benefit is NOT included with the AWS Business Support plan?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Support from a dedicated AWS Technical Account Manager.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'An unlimited number of cases and contacts.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '24/7 assistance by way of live chat or a telephone call.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '1-hour response time for production system interruption cases.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'One-year, No Upfront, Standard RI pricing.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'One-year, All Upfront, Convertible RI pricing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Three-year, All Upfront, Standard RI pricing.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Three-year, No Upfront, Convertible RI pricing.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an AWS-managed compute service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon SWF.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Aurora.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Elastic Compute Cloud (Amazon EC2).']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CodeCommit.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is the customer’s responsibility under the AWS shared responsibility model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Patching underlying infrastructure.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Physical security.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Patching Amazon EC2 instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Patching network infrastructure.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'According to the AWS shared responsibility model who is responsible for configuration management?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It is solely the responsibility of the customer.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It is solely the responsibility of AWS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It is shared between AWS and the customer.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It is not part of the AWS shared responsibility model.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon GuardDuty.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Macie.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Shield.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create one global AWS account and move all AWS resources to that account.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Sign up for three years of Reserved Instance pricing up front.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use the consolidated billing feature from AWS Organizations.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Sign up for the AWS Enterprise support plan to get volume discounts.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A Partial Upfront Reserved Instances for a 1-year term.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'All Upfront Reserved instances for a 1-year term.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'All Upfront Reserved Instances for a 3-year term.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'No Upfront Reserved Instances for a 3-year term.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service allows users to identify the changes made to a resource over time?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Inspector.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Config.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Service Catalog.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS IAM.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'According to best practices, how should an application be designed to run in the AWS Cloud?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use tightly coupled components.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use loosely coupled components.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use infrequently coupled components.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use frequently coupled components.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an AWS managed Domain Name System (DNS) web service?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Neptune.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon SageMaker.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Lightsail.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. Which Amazon EC2 instance pricing option will meet these requirements?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Dedicated Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reserved Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Dedicated RIs.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Scheduled RIs.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Convertible RIs.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Standard RIs.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service is best for storing common database query results, which helps to alleviate database access load?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Machine Learning.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon SQS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon ElastiCache.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2 Instance Store.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Elastic Load Balancer.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon EC2 Auto Scaling.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Route 53.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Enterprise.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Business.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Developer.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Basic.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Access keys in AWS Identity and Access Management (IAM) are used to:'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Log in to the AWS Management Console.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Make programmatic calls to AWS from AWS APIs.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Log in to Amazon EC2 instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Authenticate to AWS CodeCommit repositories.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Glue.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Data Pipeline.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudSearch.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Athena.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does AWS shorten the time to provision IT resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It supplies an online IT ticketing platform for resource requests.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It supports automatic code validation services.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It provides the ability to programmatically provision existing resources.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It automates the resource request process from a company’s IT vendor list.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Cost Explorer.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Total Cost of Ownership (TCO) Calculator.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Well-Architected Tool.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following services is in the category of AWS serverless platform?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon EMR.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Elastic Load Balancing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Mobile Hub.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Cost allocation tags.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Consolidated billing.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Budgets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Cost Explorer.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Trusted Advisor.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Consolidated billing.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Detailed billing.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Cloud-native.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Partner network.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Hybrid architecture.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Infrastructure as a service.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What technology enables compute capacity to adjust as loads change?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Load balancing.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Automatic failover.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Round robin.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Auto Scaling.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service is a managed NoSQL database?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon DynamoDB.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Aurora.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon RDS for ManaDB.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a correct relationship between regions, Availability Zones, and edge locations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Data centers contain regions.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Regions contain Availability Zones.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Availability Zones contain edge locations.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Edge locations contain regions.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What approach to transcoding a large number of individual video files adheres to AWS architecture principles?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using many instances in parallel.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using a single large instance during off-peak hours.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using dedicated hardware.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using a large GPU instance type.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS IAM feature allows developers to access AWS services through the AWS CLI?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'API keys.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Access keys.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'User names/Passwords.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'SSH keys.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The user is fully responsible for which action when running workloads on AWS?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Patching the infrastructure components.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Maintaining the underlying infrastructure components.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Maintaining physical and environmental controls.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Implementing controls to route application traffic.']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS support plan includes a dedicated Technical Account Manager?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Developer.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Enterprise.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Business.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Basic.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What time-savings advantage is offered with the use of Amazon Rekognition?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Rekognition provides automatic watermarking of images.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Rekognition provides automatic detection of objects appearing in pictures.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon Rekognition provides the ability to resize millions of images automatically.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon AutoScaling.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Amazon Redshift.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CloudTrail.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Lambda.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS manages the data stored in Amazon RDS tables.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS manages the maintenance of the operating system.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS automatically scales up instance types on demand.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS manages the database type.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network Technology Partners.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Marketplace.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Partner Network Consulting Partners.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Service Catalog.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon Glacier.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Storage Gateway.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon S3.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon EBS.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Implement automation.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Design for agility.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Design for failure.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Implement elasticity.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which service should a customer use to consolidate and centrally manage multiple AWS accounts?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS IAM.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Organizations.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS Schema Conversion Tool.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Config.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An e-commerce company needs a file storage service that is scalable and compatible with Server Message Block (SMB) protocol. Which AWS offering suits the company\'s needs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS FSx']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS EFS']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS EBS.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS S3.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the AWS Cloud Development Kit (CDK)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'An extension of AWS CLI that includes AWS CloudFormation-like functionality.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'An SDK for developing AWS web applications in JavaScript.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An open-source framework for defining AWS infrastructure using familiar programming languages.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A visualization tool for monitoring AWS resources in real time.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which programming languages are supported by the AWS Cloud Development Kit (CDK)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Only Java and Python.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Assembly languages.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'High-level programming languages.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Java, Python, C# and JavaScript.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the "cdk synth" command in the AWS Cloud Development Kit (CDK)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It compiles the CDK code into an AWS Lambda function.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It deploys resources directly to AWS.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It generates an AWS CloudFormation template from the CDK code.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It packages and uploads artifacts to Amazon S3.']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which AWS tool can reduce the incidence of human manual error?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AWS Cloud Development Kit']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS Software Development Kit']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'AWS CLI']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS CodeCommit']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A mobile application needs to fetch data from multiple AWS sources, including DynamoDB, Lambda, and RDS, and merge the responses into a single API call. Which AWS service provides a managed GraphQL API to achieve this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amazon API Gateway.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AWS AppSync.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amazon CloudFront.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'AWS Glue.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is building a real-time chat application that requires instant message updates across connected users. Which feature of AWS AppSync can best support this use case?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'GraphQL Subscriptions.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Schema Caching.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'API Caching.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Query Resolvers.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes the core purpose of AWS AppSync?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To create REST APIs for web and mobile apps.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To simplify data retrieval by managing GraphQL APIs and connecting multiple data sources.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To perform ETL (Extract, Transform, Load) operations on data stored in S3 buckets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To simplify communication between applications or databases deployed on different VPCs.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An organization purchased Convertible Reserved Instances but wants to switch to a different instance family with more memory. What must they ensure before making the exchange?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The new Reserved Instances must be of equal or greater value than the original ones.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The exchange can only happen after the first year of the reservation.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They must first cancel their existing Convertible RIs.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They must contact AWS Support to approve the exchange.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following instance attributes can be modified when exchanging Convertible Reserved Instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Instance family, operating system, tenancy, or payment option.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Region, Edge Location, Local Zone, or Availability Zone.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'IAM policies attached to the instance.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Security group, NACL configuration, and subnet configuration.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company running long-term, predictable workloads wants flexibility to change instance types if its application requirements change. Which EC2 pricing option best fits this use case?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Convertible Reserved Instances.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Standard Reserved Instances.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Spot Instances.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dedicated Hosts.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does the discount level of Convertible Reserved Instances generally compare to Standard Reserved Instances?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Convertible RIs offer a lower discount because of their exchange flexibility.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Convertible RIs offer a higher discount because they require longer commitments.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Convertible RIs offer the same discount as Standard RIs.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Convertible RIs do not offer any discount compared to On-Demand Instances.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What can AWS edge locations be used for?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reducing traffic on the server by caching responses.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Running NoSQL database caching services.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Hosting applications.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Sending notification messages to end users.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What can AWS edge locations be used for?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Delivering content closer to users.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Running NoSQL database caching services.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Hosting applications.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Sending notification messages to end users.']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
