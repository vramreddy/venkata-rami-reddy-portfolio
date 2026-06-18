import React from 'react';
import { BookOpen, Award, Code, GraduationCap } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: <GraduationCap size={24} />,
      title: "Academic Background",
      value: "M.Sc. Computer Science",
      desc: "SRM University, Chennai"
    },
    {
      icon: <Award size={24} />,
      title: "Academic Excellence",
      value: "9.23 / 10 CGPA",
      desc: "Top tier performance"
    },
    {
      icon: <Code size={24} />,
      title: "Intensive Training",
      value: "600+ Hours",
      desc: "NXT Wave MERN stack program"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Assignments & Projects",
      value: "24+ Completed",
      desc: "LMS, E-commerce, Social Media"
    }
  ];

  return (
    <section id="about" className="pt-0 pb-5">
      <div className="container pt-0 pb-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="text-uppercase fw-bold text-gradient small" style={{ letterSpacing: '1.5px' }}>
              My Profile
            </span>
            <h2 className="display-5 fw-extrabold mt-2 mb-3">About Me</h2>
            <div className="mx-auto" style={{ width: '60px', height: '4px', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-12 text-start">
            <div className="card-custom mb-5">
              <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
                <span className="text-gradient">Professional Summary</span>
              </h3>
              <p className="text-secondary mb-4" style={{ fontSize: '1.08rem', lineHeight: '1.75' }}>
                I am a passionate MERN Stack Developer and M.Sc. Computer Science candidate with a strong academic foundation and hands-on experience building scalable, full-stack web applications. I am highly proficient in modern web technologies including React.js, Node.js, Express.js, and MongoDB, with a focus on writing clean, maintainable code, designing robust RESTful APIs, and implementing secure JWT-based authentication workflows.
              </p>
              <p className="text-secondary" style={{ fontSize: '1.08rem', lineHeight: '1.75' }}>
                Through NXT Wave’s intensive MERN Stack developer program, I completed 600+ hours of dedicated coding and over 24 practical assignments. These spanned across e-commerce, LMS, social media, and food delivery applications. I am seeking a challenging, growth-oriented engineering role where I can apply my development skills and continue learning alongside experienced teams.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {stats.map((stat, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="card-custom h-100 text-center d-flex flex-column justify-content-center align-items-center">
                <div className="tech-icon-wrapper mb-3">
                  {stat.icon}
                </div>
                <h4 className="fs-6 text-secondary fw-semibold mb-2">{stat.title}</h4>
                <div className="fs-5 fw-bold text-primary mb-1">{stat.value}</div>
                <p className="small text-secondary">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
