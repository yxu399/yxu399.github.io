// Portfolio Content Configuration
// Edit this file to update all text content 

export const personalInfo = {
  name: "Riley Xu",
  title: "Software Engineer",
  location: "New York",
  email: "rileyxu399@gmail.com",
  github: "https://github.com/yxu399",
  linkedin: "https://www.linkedin.com/in/yingjuan-xu/",
  intro: "Hi, I'm Riley, a software engineer passionate about building intelligent systems that solve real-world problems. I specialize in data engineering, full-stack development, and AI-powered applications."
};

export const education = [
  {
    degree: "M.S. in Health Informatics",
    school: "Cornell University",
    gpa: "3.90",
    period: "2020 - 2022"
  },
  {
    degree: "B.S. in Computer Science",
    school: "Oregon State University",
    gpa: "3.85",
    period: "2023 - 2025"
  }
];

export const experience = [
  {
    title: "Software Engineer",
    company: "Memorial Sloan Kettering Cancer Center",
    location: "New York, NY",
    period: "Dec 2022 - Present",
    achievements: [
      "Architected ETL pipelines matching 100K+ records using PubMed/ORCID APIs",
      "Reduced reporting time by 96% (from 3 days to 2 hours)",
      "Built full-stack internal ops system (React, Node, Postgres) for 4,000+ employees",
      "Co-developed BioBERT NLP platform for faculty evaluation"
    ]
  },
  {
    title: "Data Analyst Researcher",
    company: "Weill Cornell Medicine",
    location: "New York, NY",
    period: "Nov 2021 - Apr 2022",
    achievements: [
      "Built Python ETL pipeline for 50,000+ medical records",
      "Refactored logistic regression models to 85% accuracy using XGBoost",
      "Built PyTest suites with 95% coverage"
    ]
  }
];

export const projects = [
  {
    title: "DataQuest",
    description: "AI Conversational Data Analysis Assistant. Built with Anthropic API to enable NLP data analysis on 250K+ rows. Features automatic profiling and interactive Plotly charts.",
    technologies: ["Python", "LangGraph", "React", "FastAPI", "Pandas"],
    github: "https://github.com/yxu399/DataQuest",
    analyzePrompt: "Analyze the technical architecture of DataQuest, an AI conversational data analysis assistant. Focus on: 1) How LangGraph orchestrates the multi-agent workflow 2) The integration between FastAPI backend and React frontend 3) How Plotly charts are generated dynamically 4) The use of Pandas for data processing. Explain the key technical decisions and why this stack was chosen."
  },
  {
    title: "SyncCode",
    description: "Real-Time Collaborative Code Editor. WebSocket-powered platform enabling multiple users to code together in real-time with syntax highlighting and live cursors.",
    technologies: ["React", "Express", "Redis", "Docker", "DigitalOcean"],
    github: "https://github.com/yxu399/SyncCode",
    analyzePrompt: "Analyze the architecture of SyncCode, a real-time collaborative code editor. Discuss: 1) How WebSockets enable real-time synchronization 2) Redis's role in managing session state 3) The challenges of handling concurrent edits 4) Docker containerization strategy 5) DigitalOcean deployment considerations. Explain the technical challenges of building real-time collaborative features."
  }
];

export const skills = {
  "Languages": ["Python", "TypeScript", "SQL", "Java", "C"],
  "Frontend": ["React", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  "Backend": ["Node.js", "FastAPI", "Express", "REST APIs"],
  "Data": ["Pandas", "NumPy", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  "DevOps": ["Docker", "AWS", "CI/CD", "Git", "Linux"],
  "AI/ML": ["LangGraph", "Anthropic API", "NLP", "BioBERT"]
};

export const resumeContext = `
Riley Yingjuan Xu is a Software Engineer based in New York.

Education:
- M.S. in Health Informatics, Cornell University (GPA 3.90)
- B.S. in Computer Science, Oregon State University (GPA 3.85)

Experience:
- Software Engineer at Memorial Sloan Kettering Cancer Center (Dec 2022 - Present):
  - Architected ETL pipelines matching 100K+ records using PubMed/ORCID APIs.
  - Reduced reporting time 96% (3 days to 2 hrs).
  - Built full-stack internal ops system (React, Node, Postgres) for 4,000+ employees.
  - Co-developed BioBERT NLP platform for faculty evaluation.

- Data Analyst Researcher at Weill Cornell Medicine (Nov 2021 - Apr 2022):
  - Built Python ETL pipeline for 50,000+ medical records.
  - Refactored logistic regression models to 85% accuracy using XGBoost.
  - Built PyTest suites with 95% coverage.

Projects:
- DataQuest: AI Conversational Data Analysis Assistant (Python, LangGraph, React, FastAPI).
- SyncCode: Real-Time Collaborative Code Editor (React, Express, Redis, Docker, DigitalOcean).

Skills:
- Languages: Python, TypeScript, SQL, Java, C.
- Stack: React, Node.js, FastAPI, Pandas, Tailwind.
- Data: PostgreSQL, MySQL, MongoDB, Redis.
- DevOps: AWS, Docker, CI/CD.

Background: Started as a Clinical Laboratory Technologist before pivoting to engineering.
`;
