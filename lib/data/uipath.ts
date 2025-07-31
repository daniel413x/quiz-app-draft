import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'UiPath',
  slug: 'uipath',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'RPA stands for ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Robotic Process Automation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Robotic Practical Automation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Robotic Parsing Automation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Robotic Process Aliasing']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following combinations of activities would you most likely include to automate a process uploading updated spreadsheets to Google Drive?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Read Range, Write Range, Upload File']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Open Browser, Click, Type Into']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Filter Data Table, Log Message, Delay']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Assign, Matches, Invoke Code']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following combinations of activities would you most likely include to automate sending an email with an attachment from Outlook?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Get Outlook Mail Messages, Save Attachment, Send Outlook Mail Message']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Read Range, Filter Data Table, Write Line']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Click, Hover, Get Text']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Assign, Matches, Path Exists']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following combinations of activities would you most likely include to automate extracting invoice data from PDF files?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Read PDF Text, Matches, Write Range']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Open Browser, Click, Type Secure Text']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Delay, Log Message, Comment Out']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Invoke Workflow File, Assign, Kill Process']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following combinations of activities would you most likely include to automate logging into a web portal?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Open Browser, Type Into, Click']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Write Range, Read Range, Build Data Table']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Get Outlook Mail Messages, Send SMTP Mail Message, Path Exists']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Filter Data Table, Matches, Kill Process']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following combinations of activities would you most likely include to automate moving processed files to an archive folder?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Path Exists, Move File, Log Message']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Type Into, Click, Send Hotkey']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Invoke Code, Assign, Matches']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Build Data Table, Add Data Row, Write Range']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following combinations of activities would you most likely include to automate extracting structured data from a website?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Open Browser, Data Scraping, Write CSV']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Kill Process, Matches, Assign']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Delay, Message Box, Comment Out']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Read Range, Filter Data Table, Write Line']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following combinations of activities would you most likely include to automate updating a status column in an Excel file?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Read Range, For Each Row, Write Cell']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Click, Type Into, Send Hotkey']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Assign, Matches, Kill Process']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Log Message, Comment Out, Delay']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following combinations of activities would you most likely include to automate creating folders for each new project?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Path Exists, Create Folder, Log Message']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Read Range, Write Range, Append Line']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Invoke Workflow File, Matches, Filter Data Table']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Get Text, Click, Type Secure Text']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following combinations of activities would you most likely include to automate verifying login credentials from a CSV file?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Read CSV, For Each Row, If']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Matches, Assign, Delay']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Click, Hover, Select Item']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Build Data Table, Remove Data Row, Write Range']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following combinations of activities would you most likely include to automate downloading reports from an internal system and saving them locally?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Open Browser, Click, Download File']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Assign, Matches, Kill Process']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Log Message, Delay, Comment Out']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Read Range, Write Range, Build Data Table']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which UiPath activity is commonly used to pause execution for a specific amount of time?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Delay']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Pause']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Wait']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Suspend']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In UiPath, what type of variable would you use to store multiple values of the same data type in order?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Array']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Dictionary']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Queue']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'DataRow']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which activity is best for iterating through each row in a DataTable?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'For Each Row']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'For Each File']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'While']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Parallel For Each']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In UiPath Studio, which panel shows variables, arguments, and imports for the current workflow?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Properties Panel']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Project Panel']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Variables Panel']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Activities Panel']],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which activity is used to extract specific information from text using regular expressions?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Matches']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Assign']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Filter Data Table']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Find Element']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the Publish button in UiPath Studio do?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'It compiles and uploads the project to Orchestrator or a local feed']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'It only saves the workflow to the local disk without uploading']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'It runs the workflow in debug mode before saving it to the local drive']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'It creates a hashed commit of the project before saving it to the hard drive']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which activity would you use to combine two strings into one?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Assign with a concatenation expression']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Read Text File']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Write Range']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Build Data Table']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In UiPath, which argument direction allows data to be passed both into and out of a workflow?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'In/Out']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'In']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Out']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Control']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which activity is specifically used to execute SQL queries against a database in UiPath?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Execute Query']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Evaluate Expression']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Open Browser']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Invoke Function']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which context is the F2 key useful?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'You need to select a UI element that is a dropdown menu item']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'You need to select a UI element that is a wrapper to child elements']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'You need to select multiple UI elements']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'You need to hide UI elements']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is a possibility when definind variables in UiPath?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Defining a variable\'s scope']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Defining a variable as a BigInt']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Defining a variable as a generic type']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Defining a variable as a constant']],
        },
      ],
      correctAnswer: '0',
    },
    // {
    //   question: [
    //     [QuizMarkdownType.TEXT, 'A team reports that their unattended robot stopped executing jobs, but the robot status in Orchestrator shows “Disconnected”. What is the most likely issue?'],
    //   ],
    //   answers: [
    //     { id: '0', answer: [[QuizMarkdownType.TEXT, 'The machine template was not properly mapped to the robot or the machine key is incorrect']] },
    //     { id: '1', answer: [[QuizMarkdownType.TEXT, 'The queue containing transactions is empty']] },
    //     { id: '2', answer: [[QuizMarkdownType.TEXT, 'The storage bucket has reached capacity']] },
    //     { id: '3', answer: [[QuizMarkdownType.TEXT, 'The license type was set to attended only']] },
    //   ],
    //   correctAnswer: '0',
    // },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Orchestrator entity stores configuration values like API keys or URLs that can be securely retrieved by a robot?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Asset']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Trigger']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Webhook']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Storage Bucket']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to ensure a process can only be executed by a specific group of users in Orchestrator. What is the best approach?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Create a custom role with restricted permissions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Remove all processes from other folders']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use a machine template with no license assignment']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Add a webhook that notifies only certain users']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'While monitoring jobs, you notice some have a “Pending” status for a long time. Which of the following is a likely cause?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'No available robots are connected to the required machine template']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The storage bucket is misconfigured where robots do not have the correct permissions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The heartbeat signal is too frequent and is causing a performance bottleneck']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The process was published without an entry point']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An automation stores intermediate reports in a centralized location accessible by robots in a folder. Which Orchestrator feature would you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Storage Buckets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Queues']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Triggers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Processes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer wants to quickly test a workflow without affecting production folders. Where can they publish and run processes privately?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Personal Workspace']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Default Folder']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Shared Asset Library']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Tenant Level Queue']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A folder in Orchestrator contains multiple processes and queues. Which permission must a user have to analyze job execution logs for those processes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'View on Jobs and View on Logs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Edit on Assets and Create on Queues']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Delete on Processes and View on Triggers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create on Machines and View on Alerts']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Scenario: You have provisioned an unattended robot but jobs never start. You discover the robot is assigned to a modern folder with no machine template configured. What should you do next?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Assign the robot to a machine template']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reinstall Studio on the robot machine']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Delete the process and publish again']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Create a webhook for folder alerts']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Orchestrator feature would you use to automatically start a job every day at a certain time?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Trigger']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Queue']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Heartbeat']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Webhook']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to integrate a third‑party system so that when a specific event occurs, Orchestrator starts a job. Which feature would you configure?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Webhook']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Queue Trigger']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Asset']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Storage Bucket']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'While creating test cases, you want to isolate a component and simulate its output without calling the real service. Which feature should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Mock Testing']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Queue Triggers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Storage Buckets']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Heartbeat Logs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Scenario: You configured a test case with a data-driven source of 50 records. In the Test Explorer Panel you only see results for 20. What is the most likely cause?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A filter in the Test Explorer Panel is limiting displayed results']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The remaining data rows were skipped because they contain text']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Data-driven test cases cannot exceed 20 records']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Mocks were enabled, which hides executions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When should you consider creating a basic RPA test case?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'When the workflow logic is static and does not depend on variable datasets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'When testing multiple input combinations from a spreadsheet']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'When you need to simulate external services']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'When the workflow logic is dynamic and depends on variable datasets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are testing a workflow that retrieves data from a live database, but you want to avoid modifying the database during tests. What is the best approach?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use a mock to simulate database responses']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Run the workflow in debug mode without inputs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Publish the workflow as a package and run unattended']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Disable all variables and retry']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the Test Explorer Panel, what does a red X icon next to a test case indicate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The test case failed during its last execution']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The test case has not been published']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The test case is missing a data-driven file']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The test case is disabled due to folder permissions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have a component that calls an external payment API. How can you test the workflow logic without making actual API calls?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Implement a mock for the API call and run the test case']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Publish the workflow with disabled logging']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Run the process in production mode with dummy inputs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use an unattended robot without queues']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A team created a basic test case but later decided to feed it 100 different data inputs. What should they do to avoid duplicating the test case 100 times?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Convert the basic test case into a data-driven test case']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Publish the test case to Orchestrator']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Implement a mock for the API call and run the test case']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Manually rerun the test case']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer runs the Workflow Analyzer on a project and sees several validation errors. What is the purpose of using Workflow Analyzer at the project level?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To enforce best practices and detect design issues']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To automatically fix all selectors without review']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To create Orchestrator triggers for scheduled jobs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To change arguments to global variables']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Scenario: A workflow runs but fails silently in production. Reviewing the Analyzer settings, you notice rule severity is set to “Info” instead of “Error”. What should you do?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reconfigure the Workflow Analyzer rules']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Publish the workflow again without changes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Disable the Workflow Analyzer completely']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Convert the workflow into a queue trigger']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'When would you use Workflow Analyzer validation at the file level rather than the project level?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'When working on a single XAML file']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'When reviewing licenses and robot allocation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'When configuring Orchestrator queues']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'When editing SDD documents']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are asked to adjust rules in the Workflow Analyzer to allow certain naming conventions for arguments. Where can you do this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'In the Workflow Analyzer settings']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'In the Orchestrator asset configuration']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'In the Test Explorer Panel']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'In the project.json file only']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Scenario: A team is planning a new automation project. Which of the following best describes the correct sequence of implementation stages?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Process assessment, design (PDD/SDD), development, testing, deployment, hypercare']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Development, deployment, design, process assessment, hypercare']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Testing, hypercare, assessment, deployment']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Only development and deployment without assessment']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'While interpreting a Process Design Document (PDD), which detail is most critical for a developer to capture?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Step-by-step description of the as-is and to-be process']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'All variables in the workflow arguments panel']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Machine template licenses in Orchestrator']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Test Explorer execution filters']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are reviewing an SDD for a handover. What kind of information should it primarily contain?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Technical details of workflows, arguments, and exception handling design']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Business-level process goals only']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The heartbeat interval of robots']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The licensing cost breakdown for attended robots']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer ignores Analyzer warnings about unused variables. What is a likely impact on the project?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The project may have reduced maintainability and potential hidden errors']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The process will stop running in Orchestrator']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Studio will not allow publishing']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It will delete the variables from the PDD']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A Business Analyst hands you both a PDD and an SDD. How do you use these together during development?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Use the PDD for process understanding and the SDD for technical implementation details']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Use the PDD for technical implementation details and the SDD for process understanding']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use the PDD for third-party integrations and the SDD for technical implementation details']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Use the PDD for technical implementation details and the SDD for third-party integrations']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your goal is to output a'],
        [QuizMarkdownType.INLINE_CODE, 'Data Table'],
        [QuizMarkdownType.TEXT, 'as a string. Which of the following sequence of activities can achieve this?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Build Data Table'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, 'Output Data Table as Text'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, 'Write Line']],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Build Data Table'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, 'Write Line'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, 'Output Data Table as Text'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Build Data Table'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, 'Output Data Table as Text'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Build Data Table'],
            [QuizMarkdownType.TEXT, ','],
            [QuizMarkdownType.INLINE_CODE, 'Write Line']],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
