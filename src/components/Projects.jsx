import React, { useState } from 'react';
import { ExternalLink, Layers, Cpu, Code2 } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectsData = [
    {
      id: 1,
      title: "AI-Powered Personalized Learning Platform",
      category: "Full-Stack",
      status: "Ongoing",
      desc: "An educational MERN-stack platform integrated with AI to analyze student learning gaps, generate personalized study plans, deliver adaptive assessments, and track progress through dedicated parent, student, and teacher dashboards.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "AI APIs"],
      links: []
    },
    {
      id: 2,
      title: "SmartLearnX - Learning Management System",
      category: "Full-Stack",
      status: "Completed",
      desc: "Engineered a scalable LMS supporting course creation, enrollment, assignment management, and progress tracking. Features role-based authorization (Students/Admin) and robust MongoDB schemas with backend RESTful APIs.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Vercel", "RBAC"],
      links: [
        { label: "Live Student App", url: "https://smartlearnx-frontend.vercel.app" },
        { label: "Live Admin App", url: "https://smartlearnx-admin.vercel.app" }
      ]
    },
    {
      id: 3,
      title: "NXT Trendz - E-Commerce Application",
      category: "Frontend",
      status: "Completed",
      desc: "A production-ready e-commerce platform with robust product filtering, search, and a complete cart checkout flow. Features state management with Redux & Context API and secure authentication route guards.",
      tech: ["React.js", "React Hooks", "Redux", "Context API", "REST APIs", "JWT Auth", "CSS3", "Bootstrap"],
      links: [
        { label: "Live Demo", url: "https://nxt-trendz-e-commerce-application-ecru.vercel.app" }
      ]
    },
    {
      id: 4,
      title: "Task Master - Advanced Todo Application",
      category: "Frontend",
      status: "Completed",
      desc: "A comprehensive task management application with task priority levels, custom due dates, drag-and-drop reordering, and light/dark mode. Uses local storage for seamless persistence and progress tracking.",
      tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript (ES6+)", "Local Storage", "DOM Manipulation"],
      links: [
        { label: "Live Demo", url: "https://todo-list-application-iota-two.vercel.app" }
      ]
    }
  ];

  const filters = ['All', 'Full-Stack', 'Frontend'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-5">
      <div className="container py-4">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="text-uppercase fw-bold text-gradient small" style={{ letterSpacing: '1.5px' }}>
              My Works
            </span>
            <h2 className="display-5 fw-extrabold mt-2 mb-3">Featured Projects</h2>
            <div className="mx-auto mb-4" style={{ width: '60px', height: '4px', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
            
            {/* Filter Buttons */}
            <div className="d-flex justify-content-center flex-wrap gap-2 mt-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 mt-2">
          {filteredProjects.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <div className="card-custom h-100 d-flex flex-column justify-content-between text-start position-relative overflow-hidden">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge-custom m-0 text-gradient font-monospace small px-2.5 py-1" style={{ fontSize: '0.8rem' }}>
                      {project.category}
                    </span>
                    {project.status === "Ongoing" ? (
                      <span className="badge bg-warning text-dark rounded-pill px-2.5 py-1 text-uppercase font-monospace fw-bold" style={{ fontSize: '0.7rem' }}>
                        In Progress
                      </span>
                    ) : (
                      <span className="badge bg-success rounded-pill px-2.5 py-1 text-uppercase font-monospace fw-bold" style={{ fontSize: '0.7rem' }}>
                        Completed
                      </span>
                    )}
                  </div>
                  
                  <h3 className="h4 fw-bold mb-3">{project.title}</h3>
                  <p className="text-secondary mb-4" style={{ fontSize: '0.98rem', lineHeight: '1.6' }}>
                    {project.desc}
                  </p>
                </div>
                
                <div>
                  {/* Tech stack badges */}
                  <div className="d-flex flex-wrap mb-4">
                    {project.tech.map((techItem, index) => (
                      <span key={index} className="badge-custom py-1 px-2.5" style={{ fontSize: '0.78rem' }}>
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.links.length > 0 ? (
                    <div className="d-flex flex-wrap gap-3 pt-3 border-top border-light-subtle" style={{ borderColor: 'var(--border-color) !important' }}>
                      {project.links.map((link, lIdx) => (
                        <a 
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-inline-flex align-items-center gap-1.5 fw-bold text-accent small"
                          style={{ color: 'var(--accent-color)' }}
                        >
                          {link.label} <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="pt-3 border-top border-light-subtle text-secondary small" style={{ borderColor: 'var(--border-color) !important' }}>
                      Private repository (academic / client guidelines)
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
