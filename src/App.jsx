import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Cloud, 
  Terminal, 
  Menu, 
  X, 
  ChevronRight,
  MapPin,
  Phone,
  Download,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scrolling handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for trigger

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ to, label }) => (
    <li>
      <button
        onClick={() => scrollToSection(to)}
        className={`group flex items-center py-3 text-sm font-medium transition-all duration-300 w-full text-left
          ${activeSection === to ? 'text-white translate-x-2' : 'text-slate-400 hover:text-slate-200 hover:translate-x-1'}`}
      >
        <span className={`mr-4 h-px transition-all duration-300 ${activeSection === to ? 'w-16 bg-white' : 'w-8 bg-slate-600 group-hover:w-12 group-hover:bg-slate-200'}`}></span>
        <span className="uppercase tracking-widest text-xs">{label}</span>
      </button>
    </li>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900 lg:flex">
      
      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center p-6 bg-slate-900 text-white sticky top-0 z-50">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Riley Xu</h1>
          <p className="text-blue-400 text-sm">Software Engineer</p>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-900 pt-24 px-6 space-y-4">
           {['about', 'experience', 'projects', 'skills', 'contact'].map(item => (
             <button 
               key={item}
               onClick={() => scrollToSection(item)}
               className="block text-xl font-bold text-slate-300 py-2 capitalize"
             >
               {item}
             </button>
           ))}
        </div>
      )}

      {/* LEFT COLUMN (Fixed Sidebar) */}
      <header className="hidden lg:flex lg:flex-col lg:justify-between lg:w-1/3 lg:fixed lg:top-0 lg:bottom-0 lg:left-0 bg-slate-900 text-white p-12 xl:p-20 overflow-y-auto">
        <div>
          <h1 className="text-4xl xl:text-5xl font-bold tracking-tight mb-3">
            Riley Xu
          </h1>
          <h2 className="text-xl font-medium text-blue-400 mb-6 flex items-center gap-2">
            Software Engineer <span className="text-slate-500">@</span> MSKCC
          </h2>
          <p className="text-slate-400 max-w-xs leading-relaxed mb-12">
            I build scalable data systems and intelligent applications.
            <br />
            <span className="text-slate-500 mt-2 block text-sm">New York, NY</span>
          </p>

          <nav className="hidden lg:block">
            <ul className="space-y-1">
              <NavItem to="about" label="About" />
              <NavItem to="experience" label="Experience" />
              <NavItem to="projects" label="Projects" />
              <NavItem to="skills" label="Skills" />
              <NavItem to="contact" label="Contact" />
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-6 mt-12">
          <a href="#" className="text-slate-400 hover:text-white transition-colors" title="GitHub"><Github size={24} /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors" title="LinkedIn"><Linkedin size={24} /></a>
          <a href="mailto:rileyxu399@gmail.com" className="text-slate-400 hover:text-white transition-colors" title="Email"><Mail size={24} /></a>
          <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium ml-auto">
            <Download size={18} /> <span>Resume</span>
          </a>
        </div>
      </header>

      {/* RIGHT COLUMN (Scrollable Content) */}
      <main className="w-full lg:w-2/3 lg:ml-[33.333333%] p-6 md:p-12 xl:p-24 bg-slate-50">
        
        {/* About Section */}
        <section id="about" className="mb-24 scroll-mt-24">
          <div className="sticky top-0 lg:hidden py-4 bg-slate-50/90 backdrop-blur mb-6 z-10 border-b border-slate-200">
             <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">About</h2>
          </div>
          <div className="prose prose-slate prose-lg text-slate-600">
            <p className="text-xl font-medium text-slate-900 mb-6">
              My journey evolved from <span className="text-blue-600">pipette to Python</span>.
            </p>
            <p className="mb-4">
              I started my career as a <strong>Clinical Laboratory Technologist</strong>, where I experienced the operational bottlenecks of healthcare firsthand. I spent days manually tracking samples and wrestling with outdated software, realizing that the real limitation wasn't the science—it was the data systems supporting it.
            </p>
            <p className="mb-4">
              Driven to build the solutions I once needed, I pivoted to engineering. I earned a Master's in <strong>Health Informatics</strong> at Cornell and a B.S. in <strong>Computer Science</strong> to combine domain expertise with technical rigor.
            </p>
            <p>
              Today, as a Software Engineer at <strong>Memorial Sloan Kettering Cancer Center</strong>, I architect the scalable administrative backbones—from grant tracking to resource allocation—that ensure research operations are as efficient as the science they support.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 scroll-mt-24">
          <div className="sticky top-0 lg:hidden py-4 bg-slate-50/90 backdrop-blur mb-6 z-10 border-b border-slate-200">
             <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Experience</h2>
          </div>
          <div className="space-y-12">
            
            {/* Job 1 */}
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                Dec 2022 — Present
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-900">
                  <div className="group-hover:text-blue-600 transition-colors inline-flex items-baseline font-bold text-lg">
                    Software Engineer
                    <span className="ml-2 text-sm font-normal text-slate-500">@ MSKCC</span>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-600">
                  Architected ETL pipelines integrating PubMed/ORCID APIs to match 100K+ records, reducing reporting time by 96%. Built full-stack internal tools (React, Node, Postgres) serving 4,000+ employees. Co-developed BioBERT NLP platform for faculty evaluation.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {['React', 'Node.js', 'PostgreSQL', 'AWS', 'NLP'].map(tech => (
                    <li key={tech} className="flex items-center rounded-full bg-blue-100/50 px-3 py-1 text-xs font-medium text-blue-700">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Job 2 */}
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                Nov 2021 — Apr 2022
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-900">
                   <div className="group-hover:text-blue-600 transition-colors inline-flex items-baseline font-bold text-lg">
                    Data Analyst Researcher
                    <span className="ml-2 text-sm font-normal text-slate-500">@ Weill Cornell</span>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-600">
                  Built Python ETL pipelines for 50K+ medical records. Refactored logistic regression models to 85% accuracy using XGBoost. Built PyTest suites with 95% coverage.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {['Python', 'Pandas', 'XGBoost', 'PyTest', 'ETL'].map(tech => (
                    <li key={tech} className="flex items-center rounded-full bg-blue-100/50 px-3 py-1 text-xs font-medium text-blue-700">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <div className="sticky top-0 lg:hidden py-4 bg-slate-50/90 backdrop-blur mb-6 z-10 border-b border-slate-200">
             <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Featured Projects</h2>
          </div>
          <div className="space-y-12">
            
            {/* Project 1 */}
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:col-span-2 mt-1">
                 <div className="w-20 h-20 rounded border border-slate-200 bg-white flex items-center justify-center text-blue-600">
                   <Database size={32} />
                 </div>
              </div>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-900">
                  <a href="#" className="inline-flex items-baseline font-bold text-lg hover:text-blue-600 focus-visible:text-blue-600 group/link">
                    DataQuest
                    <ExternalLink size={14} className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-600">
                  AI Conversational Data Analysis Assistant. Built with Anthropic API to enable NLP data analysis on 250K+ rows. Features automatic profiling and interactive Plotly charts.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'React', 'LangGraph', 'PostgreSQL'].map(tech => (
                    <li key={tech} className="flex items-center rounded-full bg-blue-100/50 px-3 py-1 text-xs font-medium text-blue-700">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:col-span-2 mt-1">
                 <div className="w-20 h-20 rounded border border-slate-200 bg-white flex items-center justify-center text-blue-600">
                   <Code size={32} />
                 </div>
              </div>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-900">
                  <a href="#" className="inline-flex items-baseline font-bold text-lg hover:text-blue-600 focus-visible:text-blue-600 group/link">
                    SyncCode
                    <ExternalLink size={14} className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-600">
                  Real-time collaborative code editor. Architected microservices with conflict resolution algorithms, Redis Pub/Sub, and Docker containerization.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {['React', 'Express', 'Redis', 'Docker', 'MongoDB'].map(tech => (
                    <li key={tech} className="flex items-center rounded-full bg-blue-100/50 px-3 py-1 text-xs font-medium text-blue-700">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 scroll-mt-24">
           <div className="sticky top-0 lg:hidden py-4 bg-slate-50/90 backdrop-blur mb-6 z-10 border-b border-slate-200">
             <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Skills</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Code size={18} className="text-blue-600"/> Languages</h3>
               <div className="flex flex-wrap gap-2">
                 {['Python', 'TypeScript', 'SQL', 'Java', 'C'].map(s => (
                   <span key={s} className="px-2 py-1 bg-slate-50 rounded text-sm text-slate-700 border border-slate-100">{s}</span>
                 ))}
               </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Briefcase size={18} className="text-blue-600"/> Stack</h3>
               <div className="flex flex-wrap gap-2">
                 {['React', 'Node.js', 'FastAPI', 'Pandas', 'Tailwind'].map(s => (
                   <span key={s} className="px-2 py-1 bg-slate-50 rounded text-sm text-slate-700 border border-slate-100">{s}</span>
                 ))}
               </div>
            </div>
             <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Database size={18} className="text-blue-600"/> Data</h3>
               <div className="flex flex-wrap gap-2">
                 {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'].map(s => (
                   <span key={s} className="px-2 py-1 bg-slate-50 rounded text-sm text-slate-700 border border-slate-100">{s}</span>
                 ))}
               </div>
            </div>
             <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Cloud size={18} className="text-blue-600"/> DevOps</h3>
               <div className="flex flex-wrap gap-2">
                 {['AWS', 'Docker', 'CI/CD', 'Linux'].map(s => (
                   <span key={s} className="px-2 py-1 bg-slate-50 rounded text-sm text-slate-700 border border-slate-100">{s}</span>
                 ))}
               </div>
            </div>
          </div>
        </section>

         {/* Education Section */}
        <section id="education" className="mb-24 scroll-mt-24">
           <div className="sticky top-0 lg:hidden py-4 bg-slate-50/90 backdrop-blur mb-6 z-10 border-b border-slate-200">
             <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Education</h2>
          </div>
          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">B.S. in Computer Science</h3>
                <div className="text-slate-600">Oregon State University</div>
              </div>
              <div className="text-slate-500 text-sm font-mono">3.85 GPA</div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">M.S. in Health Informatics</h3>
                <div className="text-slate-600">Cornell University</div>
              </div>
              <div className="text-slate-500 text-sm font-mono">3.90 GPA</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24 scroll-mt-24">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
             <h2 className="text-2xl font-bold mb-4">Ready to Collaborate?</h2>
             <p className="text-slate-400 mb-8 max-w-lg mx-auto">
               I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
             </p>
             <a 
               href="mailto:rileyxu399@gmail.com"
               className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
             >
               <Mail size={18} /> Say Hello
             </a>
          </div>
          <div className="mt-12 text-sm text-slate-500 text-center">
             Designed & Built by Riley Xu.
          </div>
        </section>

      </main>
    </div>
  );
};

export default Portfolio;