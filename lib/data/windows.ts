import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Windows',
  slug: 'windows',
  category: {
    slug: 'os',
  },
  questions: [
    {
      question: [[QuizMarkdownType.TEXT, 'Which Windows feature allows several programs to share CPU resources simultaneously?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Multithreading']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Prefetching']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Mirroring']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Virtualization']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What Windows feature uses disk space to extend RAM?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Paging']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Caching']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Buffering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Spooling']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which component in Windows handles hardware input like keyboards and mice?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Device Drivers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Thread Manager']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Cache Manager']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'User Shell']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'NTFS in Windows stands for what?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'New Technology File System']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Next Table File System']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Native Transfer File Storage']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Network Task File Setup']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'The file system used in Windows is called ______']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'NTFS']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'FAT32']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'ext4']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'ReFS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which feature allows reverting Windows to a previous state?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'System Restore']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Safe Mode']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Startup Repair']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Driver Rollback']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which Windows system controls user and group permissions?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Access Control Lists']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Print Spooler']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Volume Shadow']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Task Scheduler']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which interface is used to manage files in Windows?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'File Explorer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Taskbar']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Run Dialog']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Control Panel']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which feature stores files across multiple drives for redundancy?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Storage Spaces']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Paging File']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Fast Boot']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Volume Cache']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is the default port used by Remote Desktop in Windows?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '3389']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '445']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '8080']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '110']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which feature encrypts entire drives in Windows?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'BitLocker']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AppLocker']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Disk Quota']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Registry Lock']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Where do you change environment variables in Windows?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'System Properties']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Network Settings']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Task Manager']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Services Panel']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which startup mode loads only essential drivers in Windows?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Safe Mode']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recovery Mode']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Hybrid Boot']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Performance Mode']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which tool edits the Windows Registry?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regedit']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Netstat']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Eventvwr']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Taskschd']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which folder contains critical system files in Windows?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'C:\\Windows\\System32']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'C:\\ProgramData']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'C:\\Users\\Default']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'C:\\Recovery']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which Windows utility schedules automated tasks?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Task Scheduler']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Device Manager']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Windows Update']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Performance Monitor']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which Windows feature isolates apps for security?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'User Account Control']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Disk Cleanup']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Fast User Switching']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Volume Cache']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which feature creates shadow copies for backup in Windows?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Volume Shadow Copy']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'BitLocker Encryption']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Fast Boot Mode']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'User Profiles']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is the primary purpose of the Windows Registry?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To store configuration settings for the operating system and applications']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To manage virtual memory paging files']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To schedule automated tasks']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To monitor active network connections']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which tool is commonly used to manually edit the Windows Registry?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regedit']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Task Manager']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Event Viewer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Notepad']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'In the Windows Registry, what is a "hive"?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A logical group of keys, subkeys, and values stored in a file']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A single numeric value in the registry']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A hardware driver installation record']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A process running in background memory']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which of these is a top‑level root key in the Windows Registry?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'HKEY_LOCAL_MACHINE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'C:\\Windows\\System32']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Program Files (x86)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Temp Variables']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Why should caution be exercised when editing the Windows Registry?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Because incorrect edits can make the system unstable or unbootable']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Because it will delete the paging file permanently']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Because it disables automatic updates permanently']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Because it blocks access to user accounts immediately']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'In which programming language is the Windows kernel primarily written?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'C']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'C++']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'C#']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Python']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which language is commonly used for GUI components in Windows?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'C++']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'C']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Assembly']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Rust']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'In Windows development, what is C# primarily used for?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'User-mode applications and utilities']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Kernel-level memory management']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Boot sector programming']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Low-level device driver routines']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'For which tasks is assembly language still used in Windows?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Boot sector code and some device drivers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'File Explorer user interface rendering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Windows Store app layouts']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Task Scheduler configuration files']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'How did early versions of Windows differ in their implementation languages compared to modern Windows?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They relied more heavily on C and assembly']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They were mostly written in C#']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They relied more heavily on C++ and C#']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They used no low-level languages at all']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What design philosophy best describes the purpose of the Windows Registry compared to plain configuration files?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Centralized storage of configuration']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Distributed storage of configuration']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Storing only program-specific parameters']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Eliminating the need for settings altogether']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Why did Windows adopt a registry instead of relying solely on individual INI files?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To unify configuration and reduce redundancy']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To make configuration readable by assembly code']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To prevent user-mode programs from storing settings']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To accommodate implementation of disk paging']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'From a philosophical standpoint, what advantage does the registry provide to system administrators?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A single, hierarchical point of control over system and application settings']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A decentralized configuration structure based on independent nodes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A repository to store markup language as semi-mutable parameters']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A directory of binary settings to simplify programmatic workflow']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'How does the registry’s design reflect Microsoft’s philosophy on system extensibility?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By allowing applications and system components to dynamically add and manage keys and values']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By locking system configuration to read-only files at install time in increase security']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By forbidding third-party applications from modifying any settings']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By improving backward compatibility for older configuration methods']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'In terms of design philosophy, why is the registry organized as a tree of keys and values?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To mirror a logical and hierarchical structure']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To store settings data as sequential key-value arrays']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To ensure that only one level of settings can exist']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To replace the need for any system APIs']] },
      ],
      correctAnswer: '0',
    },

  ],
} as QuizDataObject;
