import React from 'react';
import { Terminal, Monitor, Server, Database, Settings, Cloud, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Terminal size={22} />,
      title: "Languages & Core",
      skills: ["JavaScript (ES6+)", "Python", "SQL"]
    },
    {
      icon: <Monitor size={22} />,
      title: "Frontend Development",
      skills: ["React.js", "React Hooks", "React Router", "Redux", "Context API", "HTML5", "CSS3", "Bootstrap", "Flexbox", "Responsive Web Design"]
    },
    {
      icon: <Server size={22} />,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Middleware Design", "MVC Architecture"]
    },
    {
      icon: <Database size={22} />,
      title: "Databases & Storage",
      skills: ["MongoDB", "SQLite", "Aggregation Pipelines", "Schema Design", "Indexing", "Local Storage"]
    },
    {
      icon: <Settings size={22} />,
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "VS Code", "Postman", "NPM", "Vercel", "Netlify", "Render"]
    },
    {
      icon: <Cloud size={22} />,
      title: "Cloud & Concepts",
      skills: ["AWS (EC2, S3)", "Performance Optimization", "SEO", "CI/CD", "RESTful API Design"]
    },
    {
      icon: <Sparkles size={22} />,
      title: "AI & Productivity",
      skills: ["Prompt Engineering", "ChatGPT API Integration", "AI-assisted Workflows", "Cursor / AI Tools"]
    }
  ];

  return (
    <section id="skills" className="py-5 bg-light-gradient">
      <div className="container py-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="text-uppercase fw-bold text-gradient small" style={{ letterSpacing: '1.5px' }}>
              Competencies
            </span>
            <h2 className="display-5 fw-extrabold mt-2 mb-3">Technical Skills</h2>
            <div className="mx-auto" style={{ width: '60px', height: '4px', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {skillCategories.map((category, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="card-custom h-100 text-start">
                <h3 className="h5 fw-bold mb-3 d-flex align-items-center gap-2">
                  <div className="tech-icon-wrapper d-inline-flex mb-0" style={{ width: '38px', height: '38px', borderRadius: '8px' }}>
                    {category.icon}
                  </div>
                  <span>{category.title}</span>
                </h3>
                <div className="d-flex flex-wrap pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <span className="badge-custom" key={sIdx}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
