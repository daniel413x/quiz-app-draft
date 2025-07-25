import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Linux',
  slug: 'linux',
  category: {
    slug: 'os',
  },
  questions: [
    {
      question: [[QuizMarkdownType.TEXT, 'The default file system used in Ubuntu Linux is called ______']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ext4']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'FAT32']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'UFS']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'NTFS']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the'],
        [QuizMarkdownType.INLINE_CODE, 'sudo'],
        [QuizMarkdownType.TEXT, 'command allow a user to do?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Execute commands with elevated privileges']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Switch to another user without authentication']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Run a script only in the background']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Prevent changes to system directories']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Linux, what is the typical mount point for removable media like USB drives?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/media']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/root']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/mnt/system']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/boot']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default shell on many Linux distributions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Bash (Bourne Again Shell)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Fish (Friendly Interactive Shell)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Zsh (Z Shell)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Tcsh (TENEX C Shell)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which command is used to schedule tasks at specific times in Linux?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'cron']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'plan']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'tasker']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'delayrun']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the command'],
        [QuizMarkdownType.INLINE_CODE, 'chmod 755 file.sh'],
        [QuizMarkdownType.TEXT, 'do to'],
        [QuizMarkdownType.INLINE_CODE, 'file.sh'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Sets owner full permissions, others read and execute']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Removes execute permission for all users']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Grants read and write to everyone but no execute']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Sets hidden attribute and owner write only']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What core philosophy is expressed by the Linux principle "Everything is a file"?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Treating devices and processes as files for a unified interface']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Every file must be stored in the home directory']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'All files must be readable by every user']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Files are always immutable once created']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which philosophy drives the Linux practice of using small programs chained together with pipes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Do one thing well and combine tools for complex tasks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Monolithic design for simplicity and speed']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Use a single program for all tasks to avoid errors']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Require graphical interfaces for every program']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why does Linux emphasize plain text configuration files according to its philosophy?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Because text is universal, easy to parse, and human-readable']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Because binary files are not supported by the kernel']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Because text files execute faster than binaries']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Because only root can edit non-text files']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The Linux philosophy "Do one thing and do it well" best encourages which design pattern?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Modular programs with focused functionality']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Single giant programs for all operations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Hardcoding configurations into applications']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Storing system logic only in the kernel']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why does Linux embrace the philosophy of open source development?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To allow collaboration, transparency, and peer review']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To prevent any user from modifying the source code']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To ensure only one person maintains the kernel']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To discourage reuse of components across projects']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which principle explains why Linux separates mechanisms from policies in its design?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Flexibility and adaptability for various user needs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Enforcing strict workflows for all distributions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Combining policies directly into system calls']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Restricting users to predefined configurations']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the Unix and Linux philosophy "Store data in flat text files" aim to achieve?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Portability and easy manipulation of configuration data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Faster boot times for the kernel']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A requirement for GUI-based tools only']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Mandatory encryption of all system files']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which idea underlies the Linux concept of "Everything can be combined"?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Programs should output text streams that can be piped into others']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Every program must include its own editor']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'All programs must run in isolation with no input']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Programs must store output only in logs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why does Linux prefer simple tools rather than complex all-in-one solutions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Because simple tools are easier to maintain and combine']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Because the kernel cannot handle multiple processes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Because complex tools are not allowed in open source']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Because GUI programs cannot be created on Linux']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What Linux philosophy encourages writing programs that handle text streams for input and output?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To make them composable with other programs via pipes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To ensure they never run as background processes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To avoid using libraries for IO operations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To enforce use only by system administrators']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which command is used to modify file permissions in Linux?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'chmod']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'chperm']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'permset']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'setmode']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the "least privilege" principle in Linux security mean?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Users and processes should have only the access they need']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Every user must have root privileges']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'All files must be writable by everyone']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Processes should never request any permissions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which command changes the ownership of a file in Linux?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'chown']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'chuser']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ownfile']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'setowner']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is the root account considered powerful in Linux?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It has unrestricted access to all commands and files']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It is unable to execute critical system commands']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It only has access to user directories']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It is locked by default in every system']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which file stores local user account information in Linux?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/passwd']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/var/userlist']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/sys/users']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/home/pass']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where are encrypted user passwords typically stored on a Linux system?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/shadow']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/pass']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/usr/secure']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/root/shadowlist']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Linux command shows the currently effective permissions of a file?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ls -l']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'whoami']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'permscan']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'scanmode']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the "umask" value in Linux?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It sets default permission bits for newly created files']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It encrypts passwords when users log in']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It locks a user account permanently']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It stores a list of blocked IP addresses']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the "sudo" command help enforce in Linux security?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Controlled privilege escalation with logging']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Automatic granting of root access for all users']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Disabling password prompts permanently']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Allowing file execution without permissions']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Linux command can show failed login attempts for auditing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'lastb']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'lslogins']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'who']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'authcat']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a security benefit of disabling SSH root login on production servers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To reduce the attack surface']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To speed up the boot process significantly']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To prevent saving logs in /var/log']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To disable all user accounts by default']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which security feature uses rules to control incoming and outgoing network traffic?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Firewall (e.g., iptables or nftables)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Cron jobs for scheduled tasks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Syslog for log collection']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Mount points for external drives']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which command can be used to check a file’s SELinux context?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ls -Z']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'sestatus']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'getenforce']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'checksel']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What purpose do Linux capabilities serve in security?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They divide root privileges into modular units']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They automatically encrypt user home directories']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They hide processes from non‑root users']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They prevent a file from being deleted permanently']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which file stores encrypted user passwords in Linux?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/shadow']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/passwd.enc']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/var/shadowlist']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/root/passwords']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which file contains a list of file systems to be mounted at boot time?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/fstab']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/mounts']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/sys/mountlist']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/var/fsconfig']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which file logs authentication attempts in many Linux distributions?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/var/log/auth.log']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/var/log/passwd.log']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/authlist']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/root/logintrack']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which file defines the hostname of a Linux system?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/hostname']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/host']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/var/hostid']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/sys/hostname']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which file lists groups and their members in Linux?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/group']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/usergroup']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/var/groups']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/sys/groups.conf']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which file stores environment variables for system-wide settings?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/environment']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/env']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/var/envvars']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/root/environmental']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which file holds the system-wide crontab configuration?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/crontab']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/var/cronjobs']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/scheduler']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/root/cronlist']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which file contains DNS server configurations on most Linux systems?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/resolv.conf']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/dnsconfig']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/var/dns.conf']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/sys/resolver']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which file contains a list of hosts and their associated IP addresses?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/hosts']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/hostlist']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/var/hostsmap']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/root/hosts.conf']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which file controls limits on user processes and resources?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/security/limits.conf']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '/etc/limits']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '/var/limits.conf']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '/sys/limitrules']] },
      ],
      correctAnswer: '0',
    },

  ],
} as QuizDataObject;
