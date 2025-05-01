import {
  backend,
  fullstack,
  mobile,
  web,
  java,
  cplusplus,
  python,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  postgresql,
  aws,
  git,
  powershell,
  kalilinux,
  ubuntu,
  connectwise,
  cisco,
  virtualbox,
  wireshark,
  nmap,
  metasploit,
  johntheripper,
  hydra,
  aircrackng,
  photoshop,
  premiere,
  cinema4d,
  blender,
  google,
  github,
  whmis,
  connectwisecert,
  awsdbcert,
  financialflowimage,
  sunnifyimage,
  enterpriseapitester,
  knifethrowimage,
  password_generator,
  pythonanalysis,
} from "../assets";

import mentoringtime from "../assets/mentoringtime.png";
import phoenix from "../assets/phoenix.png";
import uh from "../assets/uh.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Software Developer", icon: fullstack },
  { title: "Cloud Engineer", icon: mobile },
  { title: "System Designer", icon: backend },
  { title: "Workflow Optimizer", icon: web },
];

export const technologies = [
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "C++", icon: cplusplus },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgresql },
  { name: "AWS", icon: aws },
  { name: "Git", icon: git },
];

export const experiences = [
  {
    title: "Research Assistant",
    company_name: "University of Houston",
    icon: uh,
    iconBg: "#E6DEDD",
    date: "Aug 2023 – Present",
    points: [
      "Refactored Cascade CMS, improving load speed 28% and SEO traffic 30%.",
      "Engineered YOLOv8 inference pipeline with AWS Batch & S3 for 50K images.",
      "Built Street-View crawler indexing 10K undocumented road signs.",
      "Automated geospatial QA using hashing, cutting 90% manual effort.",
      "Secured $1.2M grant by delivering AI-powered map editor and insights."
    ],
  },
  {
    title: "Software Developer",
    company_name: "MentoringTime.com",
    icon: mentoringtime,
    iconBg: "#E6DEDD",
    date: "May 2024 – Aug 2024",
    points: [
      "Built mentor-matching platform using Node.js, React, MongoDB, AWS.",
      "Integrated JWT + Stripe, securing 10K+ payments monthly.",
      "Launched analytics dashboard boosting engagement 60%.",
      "Improved match precision 40% with vector search.",
      "Streamlined CI/CD via Docker & GitHub Actions with blue-green deployments."
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Phoenix Global",
    icon: phoenix,
    iconBg: "#E6DEDD",
    date: "Mar 2022 – Aug 2022",
    points: [
      "Analyzed 3M+ Play Store apps with PySpark to boost session time 25%.",
      "Predicted installs with GBM models using ratings, APK size, etc.",
      "Designed dashboards from PostgreSQL to guide 10 product teams.",
      "Used regression and A/B testing to increase marketing ROI by 15%.",
      "Tuned Spark pipelines to cut ETL runtime 35% and spend 20%."
    ],
  }
];

export const projects = [
  {
    name: "Optimizing Spotify Data Pipeline",
    description:
      "Built serverless ETL on AWS Lambda, S3, and Athena trimming ingest time 40% while scaling to 1 TB daily.",
    tags: [
      { name: "AWS", color: "blue-text-gradient" },
      { name: "Lambda", color: "green-text-gradient" },
      { name: "Athena", color: "pink-text-gradient" },
    ],
    image: sunnifyimage,
    source_code_link: "https://github.com/soninarayan/cloudtunes-etl",
    live_project_link: "#",
  },
  {
    name: "MentoringTime Platform",
    description:
      "Full-stack microservice app for mentor matching using Node.js, React, Stripe, and AWS. Scaled to 5K+ users in 3 months.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: financialflowimage,
    source_code_link: "https://github.com/soninarayan/mentoringtime-platform",
    live_project_link: "#",
  },
  {
    name: "School Management System",
    description:
      "Spring Boot + React school system with RabbitMQ, auto-scaling via AWS EKS, and blue-green deployment.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "RabbitMQ", color: "pink-text-gradient" },
    ],
    image: enterpriseapitester,
    source_code_link: "https://github.com/soninarayan/school-management",
    live_project_link: "#",
  },
  {
    name: "Task Manager with RBAC",
    description:
      "Node + React app with secure role-based access control (RBAC) for streamlined team workflows.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "RBAC", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
    ],
    image: password_generator,
    source_code_link: "https://github.com/soninarayan/task-manager-rbac",
    live_project_link: "#",
  }
];

export const education = [
  {
    title: "M.S. Computer Science",
    company_name: "University of Houston",
    icon: uh,
    iconBg: "#ffffff",
    date: "Expected: May 2025",
    points: [
      "GPA: 4.0/4.0",
      "Coursework: Distributed Systems, Advanced Algorithms, Computer Architecture, Data Visualization"
    ],
  },
  {
    title: "B.Tech Computer Science",
    company_name: "GITAM University, Visakhapatnam",
    icon: phoenix,
    iconBg: "#ffffff",
    date: "2019 – 2023",
    points: [
      "GPA: 8.59/10",
      "Coursework: DSA, DBMS, Operating Systems, Web App Development, AI, Networking"
    ],
  }
];

export const extracurricular = [
  {
    title: "MongoDB Python Developer Path",
    type: "Proof of Completion",
    icon: mongodb,
    iconBg: "#000000",
    date: "Feb 2025",
    points: ["PyMongo, NoSQL Schema Design, Data Aggregation, MongoDB Query Optimization"],
    credential: "https://learn.mongodb.com/c/tf2DSC7hTcyM3NBZjkLPoA",
  },
  {
    title: "Github Foundations",
    type: "Professional Certificate",
    icon: github,
    iconBg: "#000000",
    date: "Issued: Sep 2024 - Expires: Sep 2027",
    points: ["Version Control, Git, Actions, CI/CD, Repository Management, SAP Workflow"],
    credential: "https://www.credly.com/badges/b6f69785-2da8-447e-b02c-3350bf9af803",
  },
  {
    title: "Certified Enterprise Scripting Architect",
    type: "Automate | Connectwise University",
    icon: connectwise,
    iconBg: "#748C7B",
    date: "Jul 2024",
    points: ["RMM, MDM, Powershell, Scripting, Windows Server, Enterprise Architecture, Query Optimization"],
    credential: connectwisecert,
  },
  {
    title: "Google IT Automation With Python",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#050C18",
    date: "Mar 2023",
    points: [
      "Configuration Management, Automation, Google Cloud Platform (GCP), Cloud Servers and VM's, Version Control Tools, Automation."
    ],
    credential: "https://www.coursera.org/account/accomplishments/specialization/certificate/82SZFUWF4B3T",
  },
  {
    title: "WHMIS (Worker Health and Safety)",
    type: "Government Workforce Requirement",
    icon: whmis,
    iconBg: "#CCCFD8",
    date: "Sep 2020",
    points: ["Hazard Awareness, Legal Compliance, Personal Protection, Accident Prevention"],
  },
];
export const certifications = [
  {
    title: "AWS Certified Database - Specialty",
    type: "Amazon Web Services",
    icon: aws,
    iconBg: "#000000",
    date: "Issued: Aug 2024 - Expires: Aug 2027",
    points: ["Database Design, Data Migration, Performance Optimization, Security"],
    credential: awsdbcert,
  },
  {
    title: "Google IT Support",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#050C18",
    date: "Issued: Mar 2023 - Expires: Mar 2026",
    points: ["Technical Support, System Administration, Networking, Security"],
    credential: "https://www.coursera.org/account/accomplishments/specialization/certificate/82SZFUWF4B3T",
  },
];
export const tools = [
  { name: "Git", icon: git },
  { name: "AWS", icon: aws },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },
  { name: "Kali Linux", icon: kalilinux },
  { name: "Ubuntu", icon: ubuntu },
  { name: "ConnectWise", icon: connectwise },
  { name: "Cisco", icon: cisco },
  { name: "VirtualBox", icon: virtualbox },
  { name: "Wireshark", icon: wireshark },
  { name: "Nmap", icon: nmap },
  { name: "Metasploit", icon: metasploit },
  { name: "John the Ripper", icon: johntheripper },
  { name: "Hydra", icon: hydra },
  { name: "Aircrack-ng", icon: aircrackng },
  { name: "Photoshop", icon: photoshop },
  { name: "Premiere Pro", icon: premiere },
  { name: "Cinema4D", icon: cinema4d },
  { name: "Blender", icon: blender }
];
export const testimonials = [
  {
    testimonial:
      "Narayan's engineering insight and dedication made him an outstanding asset to our data research team. His ability to merge cloud infrastructure with AI processing gave us a strategic edge.",
    name: "Dr. Shumon Alam",
    designation: "Assistant Professor",
    company: "University of Houston",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Narayan’s attention to detail and system design principles consistently delivered scalable backend services under tight deadlines. I’d recommend him for any cloud-first development role.",
    name: "Sazzad Ahmed",
    designation: "CTO",
    company: "MentoringTime.com",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "During his internship, Narayan demonstrated analytical depth and a knack for optimizing ETL pipelines with PySpark. His dashboards helped shape real business decisions.",
    name: "Vishak Bharadwaj",
    designation: "Senior Data Scientist",
    company: "Phoenix Global",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  }
];