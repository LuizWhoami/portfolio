/* ============================================================
   data.js — Fonte única de verdade do portfólio
   ------------------------------------------------------------
   • Edite SOMENTE este arquivo para atualizar o site.
   • Campos com valor null não são renderizados.
   • NÃO invente links, credenciais ou datas.
   ============================================================ */

const profile = {
  name: "Luiz",
  handle: "luiz",
  host: "portfolio",

  role: "Cybersecurity Student",
  tagline: "Red Team • Pentest • Python • Linux",

  bio: [
    "Estudante de Cibersegurança com foco em segurança ofensiva,",
    "Linux, Python e segurança de aplicações web.",
    "Interesse em Red Team, Pentest e análise de redes."
  ],

  focus: ["Cybersecurity", "Offensive Security", "Web Pentest", "Linux", "Python", "Network Security"],

  id: {
    uid: "luiz",
    role: "cybersecurity_student",
    focus: "red_team",
    environment: "linux"
  },

  contact: {
    github:   null,
    linkedin: null,
    email:    null,
    telegram: null
  }
};

const education = [
  {
    course: "CST em Cibersegurança",
    institution: "Anhanguera",
    period: "2026",
    status: "in_progress"
  },
  {
    course: "Técnico em Informática",
    institution: "CETEP",
    period: null,
    status: "completed"
  }
];

const certifications = [
  {
    name: "Redscan",
    institution: "RedScan Academy",
    area: "Red Team / Pentest",
    date: null, credentialId: null, link: null, certificate: null,
    status: "completed"
  },
  {
    name: "CRTA",
    institution: "CyberWarfare",
    area: "Red Team / Pentest",
    date: null, credentialId: null, link: null, certificate: null,
    status: "completed"
  },
  {
    name: "Introduction to Cybersecurity",
    institution: "Cisco",
    area: "Fundamentos",
    date: null, credentialId: null, link: null, certificate: null,
    status: "completed"
  },
  {
    name: "Network Basics",
    institution: "Cisco",
    area: "Redes",
    date: null, credentialId: null, link: null, certificate: null,
    status: "completed"
  },
  {
    name: "Segurança em Linux",
    institution: "IBSEC",
    area: "Linux / Hardening",
    date: null, credentialId: null, link: null, certificate: null,
    status: "completed"
  },
  {
    name: "Boas Práticas de Cibersegurança",
    institution: "IBSEC",
    area: "Cibersegurança",
    date: null, credentialId: null, link: null, certificate: null,
    status: "completed"
  },
  {
    name: "Fundamentos de Ethical Hacking e Pentest",
    institution: null,
    area: "Pentest",
    date: null, credentialId: null, link: null, certificate: null,
    status: "completed"
  },
  {
    name: "Pentest e Hacking em Sites e Aplicações Web",
    institution: null,
    area: "Web Security",
    date: null, credentialId: null, link: null, certificate: null,
    status: "completed"
  }
];

const htbMachines = [
  {
    name: "TwoMillion",
    platform: "Hack The Box",
    os: "Linux",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["Web", "Linux", "Privilege Escalation"],
    link: "https://app.hackthebox.com/machines/TwoMillion",
    writeup: null
  },
  {
    name: "Cap",
    platform: "Hack The Box",
    os: "Linux",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["IDOR", "PCAP", "Linux"],
    link: "https://app.hackthebox.com/machines/Cap",
    writeup: null
  },
  {
    name: "Support",
    platform: "Hack The Box",
    os: null,
    difficulty: "Easy",
    status: "in_progress",
    completedAt: null,
    tags: [],
    link: "https://app.hackthebox.com/machines/Support",
    writeup: null
  }
];

/* Adicione rooms assim:
   { name: "...", difficulty: "...", status: "...", completedAt: null, tags: [], link: null, writeup: null }
*/
const thmRooms = [
  {
    name: "Investigating Windows",
    description: "A Windows machine has been hacked — investigate the incident and find clues about what the attacker did.",
    type: "Challenge",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["Windows", "DFIR", "Forensics"],
    link: "https://tryhackme.com/room/investigatingwindows",
    writeup: null
  },
  {
    name: "OhSINT",
    description: "Open Source Intelligence challenge — find information about a target using public data.",
    type: "Challenge",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["OSINT", "Recon"],
    link: "https://tryhackme.com/room/ohsint",
    writeup: null
  },
  {
    name: "c4ptur3-th3-fl4g",
    description: "Beginner-level CTF covering encoding, hashing, and basic forensic techniques.",
    type: "Challenge",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["CTF", "Encoding", "Forensics"],
    link: "https://tryhackme.com/room/c4ptur3th3fl4g",
    writeup: null
  },
  {
    name: "What is Networking?",
    description: "Fundamentals of computer networking — bite-sized and interactive introduction.",
    type: "Walkthrough",
    difficulty: "Info",
    status: "completed",
    completedAt: null,
    tags: ["Networking", "Fundamentals"],
    link: "https://tryhackme.com/room/whatisnetworking",
    writeup: null
  },
  {
    name: "Pentesting Fundamentals",
    description: "Ethics and methodologies behind every penetration test.",
    type: "Walkthrough",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["Pentest", "Methodology", "Ethics"],
    link: "https://tryhackme.com/room/pentestingfundamentals",
    writeup: null
  },
  {
    name: "Offensive Security Intro",
    description: "Hack your first website in a safe environment and experience the work of an ethical hacker.",
    type: "Walkthrough",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["Offensive", "Web", "Intro"],
    link: "https://tryhackme.com/room/offensivesecurityintro",
    writeup: null
  },
  {
    name: "Neighbour",
    description: "New cloud service 'Authentication Anywhere' — can you find other users' secrets?",
    type: "Challenge",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["Web", "IDOR", "Access Control"],
    link: "https://tryhackme.com/room/neighbour",
    writeup: null
  },
  {
    name: "Defensive Security Intro",
    description: "Introduction to defensive security: Threat Intelligence, SOC, DFIR, Malware Analysis and SIEM.",
    type: "Walkthrough",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["Blue Team", "SOC", "DFIR", "SIEM"],
    link: "https://tryhackme.com/room/defensivesecurityintro",
    writeup: null
  }
];

const projects = [
  {
    name: "Sentinel Network",
    description: "Monitoramento e detecção de eventos de rede com alertas automatizados.",
    category: "network",
    stack: ["Python", "Scapy", "Telegram"],
    status: "completed",
    github: null,
    demo: null
  },
  {
    name: "Varredura RedScan",
    description: "Ferramenta de varredura voltada a reconhecimento e enumeração.",
    category: "cyber",
    stack: [],
    status: "completed",
    github: null,
    demo: null
  },
  {
    name: "PriceHunter Bot",
    description: "Bot para monitoramento de preços e envio de alertas.",
    category: "python",
    stack: ["Python"],
    status: "completed",
    github: null,
    demo: null
  },
  {
    name: "Corporate Network Infrastructure",
    description: "Projeto de infraestrutura de rede corporativa com VLANs, DHCP e roteamento.",
    category: "network",
    stack: ["Cisco", "VLAN", "DHCP"],
    status: "completed",
    github: null,
    demo: null
  },
  {
    name: "Gestão Bot WhatsApp",
    description: "Bot de gestão e automação de atendimento via WhatsApp.",
    category: "python",
    stack: ["Python"],
    status: "completed",
    github: null,
    demo: null
  },
  {
    name: "LS Barbershop",
    description: "Aplicação web para agendamento e gestão de barbearia.",
    category: "web",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "completed",
    github: null,
    demo: null
  }
];

const skills = [
  { group: "OFFENSIVE SECURITY", items: ["Web Pentest", "Reconnaissance", "Enumeration", "Vulnerability Analysis", "Privilege Escalation", "OWASP"] },
  { group: "PROGRAMMING",        items: ["Python", "Bash", "HTML", "CSS", "JavaScript"] },
  { group: "NETWORK",            items: ["TCP/IP", "VLAN", "DHCP", "Cisco", "Network Infrastructure"] },
  { group: "LINUX",              items: ["Linux Administration", "Bash", "Permissions", "Logs", "Networking"] },
  { group: "TOOLS / PLATFORMS",  items: ["Hack The Box", "TryHackMe", "PortSwigger", "GitHub", "Virtual Labs"] }
];

const timeline = [
  { period: null, title: "Técnico em Informática",       place: "CETEP",                description: null },
  { period: null, title: "Experiência em NOC",           place: "Provedor de Internet", description: null },
  { period: null, title: "Exército Brasileiro",          place: null,                   description: null },
  { period: null, title: "Graduação em Cibersegurança",  place: "Anhanguera",           description: null },
  { period: null, title: "Red Team / Pentest Labs",      place: null,                   description: null },
  { period: null, title: "CRTA",                         place: "RedScan Academy",      description: null },
  { period: null, title: "Projetos próprios de Cyber",   place: null,                   description: null }
];
