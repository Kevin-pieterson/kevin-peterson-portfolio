// Central content store — all data extracted from Kevin's CV, certificates and GitHub profile.

export const profile = {
  name: 'Kevin Peterson',
  firstName: 'Kevin',
  lastName: 'Peterson',
  title: 'Cybersecurity Specialist',
  tagline: 'Defend. Detect. Respond.',
  subtitle: 'Building a safer digital world through security and innovation.',
  summary:
    "Entry-level cybersecurity professional with an HND in Cybersecurity and Networking, holding industry certifications including CCNA, MCSA, and a Certificate in Ethical Hacking. Experienced in security monitoring, threat detection, vulnerability assessment, incident response fundamentals, and log analysis — skilled across Windows Server administration, Active Directory, Linux system administration, network configuration, and cloud computing fundamentals. Currently preparing for the Microsoft SC-200 Security Operations Analyst certification.",
  email: 'pietersonk489@gmail.com',
  phone: '+94 78 111 4808',
  location: 'Kotugoda, Sri Lanka',
  locationShort: 'Sri Lanka',
  linkedin: 'https://www.linkedin.com/in/kevin-peterson-cybersecurity/',
  linkedinLabel: 'linkedin.com/in/kevin-peterson-cybersecurity',
  github: 'https://github.com/Kevin-pieterson',
  githubLabel: 'github.com/Kevin-pieterson',
  cvFile: '/cv/Kevin_Peterson_CV.pdf',
  status: 'Open to Cybersecurity Internship roles',
}

export const stats = [
  { label: 'Certifications', value: 7, suffix: '' },
  { label: 'Featured Projects', value: 3, suffix: '+' },
  { label: 'Diploma Credits', value: 240, suffix: '' },
  { label: 'HND Graduate', value: 2026, suffix: '' },
]

export const featureCards = [
  { title: 'Network Security', icon: 'network' },
  { title: 'Threat Detection', icon: 'radar' },
  { title: 'Vulnerability Assessment', icon: 'scan' },
  { title: 'SOC & Incident Response', icon: 'shield' },
]

export const personalDetails = [
  { label: 'Name', value: 'Kevin Peterson' },
  { label: 'Role', value: 'Cybersecurity Intern' },
  { label: 'Education', value: 'HND Cybersecurity & Networking' },
  { label: 'Location', value: 'Kotugoda, Sri Lanka' },
  { label: 'Languages', value: 'Sinhala (Native), English (Professional)' },
  { label: 'Focus', value: 'SOC Operations · Threat Detection' },
]

export const technicalSkills = [
  { name: 'Network Security & Troubleshooting', level: 90 },
  { name: 'Windows Server & Active Directory', level: 88 },
  { name: 'Ethical Hacking Fundamentals', level: 82 },
  { name: 'Linux System Administration', level: 85 },
  { name: 'Log Analysis & KQL Queries', level: 80 },
  { name: 'Cloud Computing Fundamentals', level: 72 },
]

export const tools = [
  { name: 'Kali Linux', icon: 'kali' },
  { name: 'Wireshark', icon: 'wireshark' },
  { name: 'Nmap', icon: 'nmap' },
  { name: 'Nessus', icon: 'nessus' },
  { name: 'Microsoft Sentinel', icon: 'sentinel' },
  { name: 'Active Directory', icon: 'activedirectory' },
  { name: 'Windows Server', icon: 'windows' },
  { name: 'Linux', icon: 'linux' },
  { name: 'PowerShell', icon: 'powershell' },
  { name: 'Bash', icon: 'bash' },
  { name: 'KQL', icon: 'kql' },
  { name: 'Azure', icon: 'azure' },
  { name: 'Cisco Packet Tracer', icon: 'cisco' },
  { name: 'TryHackMe', icon: 'tryhackme' },
  { name: 'VirtualBox', icon: 'virtualbox' },
]

export const projects = [
  {
    id: 'soc-sentinel',
    title: 'Microsoft Sentinel SOC Lab',
    subtitle: 'Cloud SOC · Brute-Force Detection · KQL',
    description:
      'Built a cloud-based Security Operations Center on Microsoft Azure — deployed a Log Analytics workspace and Sentinel instance, forwarded Windows security logs with the Azure Monitor Agent, simulated a brute-force login attack (Event ID 4625), and investigated it end-to-end with KQL, from detection through incident documentation.',
    highlights: [
      'Simulated brute-force attack captured 35,517 audit-failure events in Event Viewer',
      'Forwarded logs to Sentinel via Azure Monitor Agent for cloud-based detection',
      'Wrote KQL queries for detection, targeted user investigation, and attack summaries',
    ],
    tech: ['Microsoft Azure', 'Microsoft Sentinel', 'KQL', 'Windows Server', 'Log Analytics'],
    github: 'https://github.com/Kevin-pieterson/SOC-Lab-Microsoft-Sentinel',
    demo: null,
    accent: 'from-neon-deep to-neon',
  },
  {
    id: 'vuln-assessment',
    title: 'Vulnerability Assessment Lab',
    subtitle: 'Nmap · Nessus · Metasploitable2',
    description:
      'Performed a full vulnerability assessment against Metasploitable2 from a Kali Linux attack host, running Nmap service enumeration and Nessus Essentials scans, then documenting every finding with severity ratings and remediation guidance.',
    highlights: [
      '64 vulnerabilities identified — 5 critical, 2 high, 4+ medium severity',
      'Flagged notable issues: default VNC credentials, a bind-shell backdoor, Ghostcat (Tomcat AJP)',
      'Delivered structured findings documentation with remediation recommendations',
    ],
    tech: ['Kali Linux', 'Nmap', 'Nessus Essentials', 'VirtualBox'],
    github: 'https://github.com/Kevin-pieterson/Vulnerability-Assessment-Lab',
    demo: null,
    accent: 'from-neon to-neon-ice',
  },
  {
    id: 'ad-home-lab',
    title: 'Active Directory Home Lab',
    subtitle: 'Windows Server · DNS/DHCP · Group Policy',
    description:
      'Stood up an enterprise-style Windows domain inside VirtualBox — a full AD DS deployment with DNS, DHCP, structured OUs, and Group Policy enforcement, then joined a client machine and validated domain authentication.',
    highlights: [
      'Domain corp.local across 4 OUs (IT, HR, Finance, Sales) with 16 user accounts',
      'Configured DNS, DHCP scope (192.168.10.100–200), and static IP addressing',
      'Linked a Group Policy Object and validated domain login on a joined Windows 10 client',
    ],
    tech: ['Windows Server 2022', 'Active Directory', 'DNS', 'DHCP', 'Group Policy', 'PowerShell'],
    github: 'https://github.com/Kevin-pieterson/Active-Directory-Home-Lab',
    demo: null,
    accent: 'from-neon-ice to-neon-deep',
  },
]

export const certificates = [
  {
    id: 'qualifi-diploma',
    name: 'Qualifi Level 5 Extended Diploma in Cyber Security',
    issuer: 'Qualifi Ltd (Ofqual Regulated)',
    date: 'October 2025',
    credentialId: 'QN 610/3296/7 · Ref 99600',
    file: '/certificates/qualifi-cyber-security-diploma.pdf',
    featured: true,
  },
  {
    id: 'ethical-hacking',
    name: 'Certificate in Ethical Hacking',
    issuer: 'WinSYS Networks',
    date: 'May 2025',
    credentialId: 'WIN/CO/24/3352/6',
    file: '/certificates/ethical-hacking.pdf',
  },
  {
    id: 'linux-admin-security',
    name: 'Linux Network Administrator with Security',
    issuer: 'WinSYS Networks',
    date: 'January 2025',
    credentialId: 'WIN/CO/24/3352/5',
    file: '/certificates/linux-network-admin-security.pdf',
  },
  {
    id: 'mcsa',
    name: 'Microsoft Certified System Administrator',
    issuer: 'WinSYS Networks',
    date: 'November 2024',
    credentialId: 'WIN/CO/24/3352/3',
    file: '/certificates/mcsa.pdf',
  },
  {
    id: 'ccna',
    name: 'Cisco Certified Network Associate',
    issuer: 'WinSYS Networks',
    date: 'October 2024',
    credentialId: 'WIN/CO/24/3352/4',
    file: '/certificates/ccna.pdf',
  },
  {
    id: 'windows-networks',
    name: 'Certificate in Windows Networks',
    issuer: 'WinSYS Networks',
    date: 'August 2024',
    credentialId: 'WIN/CO/24/3352/2',
    file: '/certificates/windows-networks.pdf',
  },
  {
    id: 'computer-hardware',
    name: 'Certificate in Computer Hardware',
    issuer: 'WinSYS Networks',
    date: 'July 2024',
    credentialId: 'WIN/CO/24/3352/1',
    file: '/certificates/computer-hardware.pdf',
  },
]

export const inProgress = {
  name: 'Microsoft SC-200: Security Operations Analyst',
  status: 'In Progress',
}
