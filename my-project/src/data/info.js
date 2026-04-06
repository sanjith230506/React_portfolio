// ─────────────────────────────────────────────────────────
//  info.js  –  Edit this file to update your portfolio
// ─────────────────────────────────────────────────────────

const info = {

  // ── PERSONAL ──────────────────────────────────────────
  name: 'Sanjith Senthilkumar',
  shortName: 'Sanjith',
  role: 'AI/ML Engineering Student & Full-Stack Developer',
  email: 'sanjith.s2024aiml@sece.ac.in',
  phone: '+91 9385927019',
  location: 'Tamil Nadu, India',
  cgpa: '8.3',

  // Rotating roles shown in the hero typing animation
  roles: [
    'Full Stack Developer',
    'MERN Stack Engineer',
    'AI/ML Enthusiast',
    'Flutter Developer',
    'Problem Solver',
    'Open Source Contributor',
  ],

  bio: [
    "I'm a passionate developer pursuing B.ECSE in AI & ML at Sri Eshwar College of Engineering. I love building things that live on the internet — from full-stack web apps to smart mobile applications powered by AI/ML.",
    "With experience in the MERN stack, Flutter, and deep learning frameworks, I bridge the gap between cutting-edge AI and practical software engineering. I'm always exploring new technologies and solving challenging problems.",
  ],

  // ── SOCIALS ───────────────────────────────────────────
  socials: {
    github:   'https://github.com/sanjith230506',
    linkedin: 'www.linkedin.com/in/sanjith-senthilkumar-80b931314',
    leetcode: 'https://leetcode.com/u/Sanjith230506/',
  },

  // ── EMAILJS CONFIG ────────────────────────────────────
  // Steps to get these values:
  // 1. Go to https://www.emailjs.com and create a free account
  // 2. Add a Gmail service → copy the Service ID below
  // 3. Create an Email Template → copy the Template ID below
  //    Template variables to use: {{from_name}}, {{from_email}}, {{message}}
  // 4. Go to Account → API Keys → copy your Public Key below
  emailjs: {
    serviceId:  'service_2mvs5uo',   // e.g. 'service_xxxxxxx'
    templateId: 'template_kt7n4nf', // e.g. 'template_xxxxxxx'
    publicKey:  'PwdXtL0207qcq_1q6',  // e.g. 'a1B2c3D4e5F6g7H8'
  },

  // ── HERO STATS ────────────────────────────────────────
  heroStats: [
    { val: '100+', label: 'LeetCode Solved' },
    { val: '900+', label: 'SkillRack Problems' },
    { val: '3+',   label: 'Major Projects' },
    { val: '8.3',  label: 'CGPA' },
  ],

  // ── EDUCATION ─────────────────────────────────────────
  education: [
    {
      degree: 'B.ECSE (AI & ML)',
      school: 'Sri Eshwar College of Engineering',
      year: '2024 – 2028',
      grade: 'CGPA: 8.3',
      icon: '🎓',
      color: 'cyan',
    },
    {
      degree: 'HSC (12th Grade)',
      school: 'Nava Bharath National School',
      year: '2022 – 2024',
      grade: '80.6%',
      icon: '📚',
      color: 'purple',
    },
    {
      degree: 'SSLC (10th Grade)',
      school: 'Adharsh Vidhyalaya Public School',
      year: '2021 – 2022',
      grade: '86%',
      icon: '🏫',
      color: 'green',
    },
  ],

  // ── INTERNSHIP ────────────────────────────────────────
  internship: {
    role: 'MERN Stack Intern',
    company: 'Better Tomorrow',
    year: '2025',
    project: 'FlavorVerse',
    desc: 'Developed FlavorVerse, a full-stack recipe finder app with RESTful APIs, dynamic ingredient-based search, advanced dietary filters (vegetarian, vegan, gluten-free), and CRUD operations for user favorites.',
    tags: ['React JS', 'Node JS', 'Express JS', 'MongoDB'],
  },

  // ── SKILLS ────────────────────────────────────────────
  skillCategories: [
    {
      label: 'Programming Languages',
      icon: '⌨️',
      color: 'cyan',
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
    },
    {
      label: 'Web Technologies',
      icon: '🌐',
      color: 'purple',
      skills: ['HTML', 'CSS', 'React JS', 'Node JS', 'Express JS'],
    },
    {
      label: 'Mobile & AI/ML',
      icon: '📱',
      color: 'pink',
      skills: ['Flutter', 'TensorFlow Lite', 'MediaPipe', 'YOLO', 'Flask'],
    },
    {
      label: 'Data Science',
      icon: '📊',
      color: 'green',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
      label: 'Databases',
      icon: '🗄️',
      color: 'cyan',
      skills: ['MySQL', 'MongoDB', 'Mongoose'],
    },
    {
      label: 'Core Concepts',
      icon: '🧠',
      color: 'purple',
      skills: ['DSA', 'OOP', 'DBMS', 'REST APIs', 'MVC'],
    },
    {
      label: 'Tools & Platforms',
      icon: '🔧',
      color: 'green',
      skills: ['Git', 'GitHub', 'VSCode', 'Postman', 'Canva', 'Google Colab', 'IntelliJ'],
    },
  ],

  // ── PROJECTS ──────────────────────────────────────────
  projects: [
    {
      title: 'FlavorVerse',
      subtitle: 'Recipe Finder Web App',
      type: 'Internship Project',
      year: '2025',
      desc: 'A full-stack MERN recipe finder with RESTful APIs, dynamic ingredient-based search, advanced dietary filters (vegetarian, vegan, gluten-free), and CRUD operations for user favorites.',
      tags: ['React JS', 'Node JS', 'Express JS', 'MongoDB'],
      features: ['RESTful APIs', 'Advanced Filtering', 'CRUD Operations', 'Responsive UI'],
      color: 'cyan',
      icon: '🍽️',
      projectUrl: '#',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Smart Recycle',
      subtitle: 'Waste Management Platform',
      type: 'Personal Project',
      year: '2025',
      desc: 'Flutter-based mobile app connecting households, waste collectors, and recycling centers. Features real-time waste tracking, category-wise segregation guidance, and pickup request management.',
      tags: ['Flutter', 'Real-time Tracking', 'Mobile App', 'Firebase'],
      features: ['Real-time Tracking', 'Route Optimization', 'Multi-user Roles', 'GPS Integration'],
      color: 'green',
      icon: '♻️',
      projectUrl: '#',
      githubUrl: 'https://github.com',
    },
    {
      title: 'WildTrack AI',
      subtitle: 'Wildlife Detection System',
      type: 'AI/ML Project',
      year: '2025',
      desc: 'AI-powered wildlife detection system using YOLO deep learning to identify wild animals in agricultural fields. Deployed on Jetson Nano / ESP32-CAM with automated alert and deterrent systems.',
      tags: ['YOLO', 'Jetson Nano', 'Python', 'Computer Vision'],
      features: ['YOLO Detection', 'Edge Deployment', 'Mobile Alerts', 'Sound/Light Deterrent'],
      color: 'purple',
      icon: '🐾',
      projectUrl: '#',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Athlete Connect',
      subtitle: 'Sports Talent Assessment Platform',
      type: 'AI/ML Project',
      year: '2025',
      desc: 'Flutter app integrated with MediaPipe and TensorFlow Lite for AI-driven athlete performance analysis. Features pose estimation, rep counting, cheat detection, and PDF reports for Sports Authority.',
      tags: ['Flutter', 'TensorFlow Lite', 'MediaPipe', 'Flask API'],
      features: ['Pose Estimation', 'Rep Counting', 'AI Analysis', 'PDF Reports'],
      color: 'pink',
      icon: '🏋️',
      projectUrl: '#',
      githubUrl: 'https://github.com',
    },
  ],

  // ── CERTIFICATIONS ────────────────────────────────────
  certifications: [
    { title: 'Web Development',          issuer: 'Udemy',     year: '2025', icon: '🌐', color: 'cyan'   },
    { title: 'AI Tools & ChatGPT Workshop', issuer: 'Be10x', year: '2024', icon: '🤖', color: 'purple' },
    { title: 'C Training',               issuer: 'IIT Bombay', year: '2024', icon: '⚙️', color: 'green'  },
    { title: 'C++ Training',             issuer: 'IIT Bombay', year: '2024', icon: '🔧', color: 'green'  },
    { title: 'HTML, CSS & Bootstrap',    issuer: 'Udemy',     year: '2024', icon: '🎨', color: 'pink'   },
  ],

  // ── ACHIEVEMENTS ──────────────────────────────────────
  achievements: [
    {
      title: 'Third Place – Vahana 2K25',
      desc:  'National Level Symposium',
      year:  '2024',
      icon:  '🏆',
      color: 'cyan',
    },
    {
      title: 'Dr. Kalam Young Achiever Award',
      desc:  'Participated & Nominated',
      year:  '2025',
      icon:  '⭐',
      color: 'purple',
    },
    {
      title: 'National Hackathon – Odoo',
      desc:  'Participated in 8-hour hackathon',
      year:  '2025',
      icon:  '⚡',
      color: 'green',
    },
  ],

  // ── CODING PROFILES ───────────────────────────────────
  codingProfiles: [
    {
      platform: 'LeetCode',
      icon:     '⚡',
      color:    'cyan',
      badge:    'Problem Solver',
      url:      'https://leetcode.com',
      stats: [
        { label: 'Problems Solved', val: '100+' },
        { label: 'Max Rating',      val: '1433' },
        { label: 'Global Rank',     val: '584,541' },
      ],
    },
    {
      platform: 'HackerRank',
      icon:     '🌿',
      color:    'green',
      badge:    'Multi-Star',
      url:      'https://hackerrank.com',
      stats: [
        { label: 'C Rating',   val: '3 ⭐' },
        { label: 'C++ Rating', val: '1 ⭐' },
        { label: 'Domain',     val: 'Algorithms' },
      ],
    },
    {
      platform: 'SkillRack',
      icon:     '🏅',
      color:    'purple',
      badge:    'Rank 17997',
      url:      'https://skillrack.com',
      stats: [
        { label: 'Problems Solved', val: '900+'  },
        { label: 'Certificates',    val: '5'     },
        { label: 'Bronzes',         val: '150+'  },
      ],
    },
  ],

};

export default info;
