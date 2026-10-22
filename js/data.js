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
  },
  {
    name: "Ethical Hacking Penetration Testing",
    institution: "GoHacking",
    area: "Ethical Hacking",
    date: null, credentialId: null, link: null, certificate: null,
    status: "completed"
  },
  {
    name: "Ethical Hacking Web API",
    institution: "GoHacking",
    area: "Web API",
    date: null, credentialId: null, link: null, certificate: null,
    status: "completed"
  },
  {
    name: "GoHacking Security Essentials",
    institution: "GoHacking",
    area: "Security Essentials",
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
    name: "Orion",
    platform: "Hack The Box",
    os: null,
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: [],
    link: "https://app.hackthebox.com/machines/Orion",
    writeup: null
  }
];

/* Adicione rooms assim:
   { name: "...", description: "...", type: "...", difficulty: "...", status: "...", completedAt: null, tags: [], link: null, writeup: null }
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
    name: "Pickle Rick",
    description: "A Rick and Morty CTF. Help turn Rick back into a human!",
    type: "Challenge",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["Enumeration", "RCE"],
    link: "https://tryhackme.com/room/picklerick",
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
  },
  {
    name: "The Concierge Knows Too Much",
    description: "She knows your name, your room, your coffee order, none of which you told her. Word your next question carefully and she'll also hand over the instructions she was told to keep to herself.",
    type: "Challenge",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["Reverse Engineering", "LLM"],
    link: "https://tryhackme.com/room/hh-theconciergeknows-2d7eb4d9",
    writeup: null
  },
  {
    name: "Wi-Fi Fundamentals and Reconnaissance",
    description: "Learn how Wi-Fi works and use airodump-ng to map networks and reveal hidden SSIDs.",
    type: "Challenge",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["Pentest", "Wi-Fi", "WPA"],
    link: "https://tryhackme.com/room/wififundamentalsandrecon",
    writeup: null
  },
  {
    name: "Cache Me Outside",
    description: "Can you find this ex hacker turned outdoorsman?",
    type: "Challenge",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["OSINT"],
    link: "https://tryhackme.com/room/cachemeoutside",
    writeup: null
  },
  {
    name: "W1seGuy",
    description: "A w1se guy 0nce said, the answer is usually as plain as day.",
    type: "Challenge",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["Cryptography", "Brute Force"],
    link: "https://tryhackme.com/room/w1seguy",
    writeup: null
  },
  {
    name: "Basic Pentesting",
    description: "This is a machine that allows you to practise web app hacking and privilege escalation.",
    type: "Challenge",
    difficulty: "Easy",
    status: "completed",
    completedAt: null,
    tags: ["Enumeration", "Brute Force", "Exploitation", "Privilege Escalation"],
    link: "https://tryhackme.com/room/basicpentestingjt",
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
  },
  {
    name: "Argus",
    description: "Agente autônomo de Bug Bounty.",
    category: "other",
    stack: ["HTML", "CSS", "JavaScript", "Python", "Tools"],
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
  { period: null, title: "CRTA",                         place: "CyberWarfare",         description: null },
  { period: null, title: "Projetos próprios de Cyber",   place: null,                   description: null }
];
