import React from 'react';
import { GraduationCap, Award, BookOpen, CloudLightning } from 'lucide-react';

export default function Education() {
  const timelineData = [
    {
      type: "education",
      icon: <GraduationCap size={20} />,
      title: "M.Sc. in Computer Science",
      subtitle: "SRM University, Chennai",
      date: "2024 - May 2026",
      desc: "Deepened core computer science foundations while maintaining academic excellence with an outstanding cumulative grade point average of 9.23/10 CGPA."
    },
    {
      type: "certification",
      icon: <Award size={20} />,
      title: "MERN Stack Developer Certification",
      subtitle: "NXT Wave Intensive Program",
      date: "Completed",
      desc: "Completed 600+ hours of rigorous coding and practical training. Developed 24+ full-stack and frontend assignments and projects covering databases, REST APIs, and responsive design systems.",
      links: [
        { name: "React JS", url: "https://certificates.ccbp.in/intensive/react-js?id=UKLPNVREOR" },
        { name: "Node.js", url: "https://certificates.ccbp.in/intensive/node-js?id=XKZKLENNBX" },
        { name: "JavaScript Essentials", url: "https://certificates.ccbp.in/intensive/javascript-essentials?id=RMVZRXLDLK" },
        { name: "Dynamic Web Apps", url: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=HFCLQQWKUO" },
        { name: "Intro to Databases", url: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=QBIDPFWIED" },
        { name: "Responsive Web", url: "https://certificates.ccbp.in/intensive/responsive-website?id=DLAPEWUZXL" },
        { name: "Static Website", url: "https://certificates.ccbp.in/intensive/static-website?id=BJDTETBJID" },
        { name: "Flexbox", url: "https://certificates.ccbp.in/intensive/flexbox?id=IRGPZMMQUA" },
        { name: "Programming Foundations", url: "https://certificates.ccbp.in/intensive/programming-foundations?id=WEIPVJDERH" },
        { name: "Developer Foundations", url: "https://certificates.ccbp.in/intensive/developer-foundations?id=RNTKEHTDLB" }
      ]
    },
    {
      type: "certification",
      icon: <BookOpen size={20} />,
      title: "Prompt Engineering for ChatGPT",
      subtitle: "Vanderbilt University (Coursera)",
      date: "Certified",
      desc: "Learned advanced prompt engineering frameworks, structured input patterns, API tool integration, and AI-assisted development workflows to boost engineering productivity.",
      link: "https://coursera.org/verify/57YFG40O1XL2"
    },
    {
      type: "certification",
      icon: <CloudLightning size={20} />,
      title: "AWS Cloud Fundamentals",
      subtitle: "Self-Guided & Hands-On Training",
      date: "Practice",
      desc: "Gained hands-on experience deploying full-stack web applications using Amazon EC2, configure S3 static site hosting, and setup simple CI/CD build pipelines."
    }
  ];

  return (
    <section id="education" className="py-5">
      <div className="container py-4">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="text-uppercase fw-bold text-gradient small" style={{ letterSpacing: '1.5px' }}>
              My Journey
            </span>
            <h2 className="display-5 fw-extrabold mt-2 mb-3">Education & Certifications</h2>
            <div className="mx-auto" style={{ width: '60px', height: '4px', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline mt-5">
          {timelineData.map((item, idx) => (
            <div
              className={`timeline-container ${idx % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
              key={idx}
            >
              <div className="timeline-content text-start">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="text-gradient d-inline-flex" style={{ color: 'var(--accent-color)' }}>
                    {item.icon}
                  </div>
                  <span className="badge-custom m-0 font-monospace py-1 px-2.5" style={{ fontSize: '0.75rem' }}>
                    {item.date}
                  </span>
                </div>
                <h3 className="h5 fw-bold mb-1">{item.title}</h3>
                <h4 className="fs-6 text-secondary fw-semibold mb-3">{item.subtitle}</h4>
                <p className="text-secondary small mb-0" style={{ lineHeight: '1.6' }}>
                  {item.desc}
                </p>
                {item.links && (
                  <div className="mt-4">
                    <div className="text-secondary small fw-bold mb-2.5" style={{ fontSize: '0.8rem', letterSpacing: '0.3px' }}>Module Credentials:</div>
                    <div className="d-flex flex-wrap gap-2">
                      {item.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="badge-custom m-0 py-1.5 px-2.5 text-decoration-none hover-accent d-inline-flex align-items-center gap-1"
                          style={{ fontSize: '0.78rem', cursor: 'pointer', transition: 'all 0.2s ease', backgroundColor: 'var(--bg-primary)' }}
                        >
                          {link.name} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {item.link && (
                  <div className="mt-3">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-custom py-1.5 px-3 d-inline-flex align-items-center gap-1.5 text-decoration-none"
                      style={{ fontSize: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', fontWeight: '600' }}
                    >
                      View Credential ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
