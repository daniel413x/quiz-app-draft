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

  ],
} as QuizDataObject;
