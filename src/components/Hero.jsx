import React from 'react';
import { Mail, FileText, ArrowRight, ArrowLeft } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

export default function Hero() {
  const profileImageUrl = `${import.meta.env.BASE_URL}profile.jpg`;

  return (
    <section id="home" className="hero-section d-flex align-items-center">
      {/* Decorative Blobs */}
      <div className="blob-decoration blob-1"></div>
      <div className="blob-decoration blob-2"></div>

      <div className="container position-relative z-1">
        <div className="row justify-content-center text-center">
          {/* --- Image Widget First (Top on all devices) --- */}
          <div className="col-12 d-flex flex-column justify-content-center align-items-center mb-5">
            {/* Full Stack & AI Developer Animated Widget */}
            <div className="profile-widget mb-4">

              {/* Outer Orbiting Track for MERN + AI Node Bubbles */}
              <div className="orbit-track">
                {/* MongoDB Node */}
                <div className="tech-node-wrapper" style={{ transform: 'rotate(0deg) translate(185px)' }}>
                  <div className="tech-node" style={{ color: '#10b981' }} title="MongoDB">
                    <span>M</span>
                  </div>
                </div>
                {/* Express Node */}
                <div className="tech-node-wrapper" style={{ transform: 'rotate(72deg) translate(185px)' }}>
                  <div className="tech-node" style={{ color: '#ec4899' }} title="Express">
                    <span>E</span>
                  </div>
                </div>
                {/* React Node */}
                <div className="tech-node-wrapper" style={{ transform: 'rotate(144deg) translate(185px)' }}>
                  <div className="tech-node" style={{ color: '#06b6d4' }} title="React">
                    <span>R</span>
                  </div>
                </div>
                {/* Node.js Node */}
                <div className="tech-node-wrapper" style={{ transform: 'rotate(216deg) translate(185px)' }}>
                  <div className="tech-node" style={{ color: '#84cc16' }} title="Node.js">
                    <span>N</span>
                  </div>
                </div>
                {/* AI Node */}
                <div className="tech-node-wrapper" style={{ transform: 'rotate(288deg) translate(185px)' }}>
                  <div className="tech-node" style={{ color: '#f59e0b' }} title="Artificial Intelligence">
                    <span>AI</span>
                  </div>
                </div>
              </div>

              {/* AI Neural Radar Glowing Ring */}
              <div className="radar-glow"></div>

              {/* Conic Color-shifting Core Glow */}
              <div className="conic-glow"></div>

              {/* Profile Image Frame */}
              <div className="profile-image-card">
                {/* Holographic scanning overlays */}
                <div className="profile-scan-line"></div>
                <div className="profile-grid-overlay"></div>

                <img
                  src={profileImageUrl}
                  alt="Venkata Rami Reddy"
                  className="profile-avatar"
                />
              </div>
            </div>

            {/* Stack Description Text below the Widget */}
            <div className="text-center mt-3" style={{ zIndex: 3 }}>
              <h3 className="h4 fw-bold mb-1 text-gradient" style={{ letterSpacing: '-0.5px' }}>MERN + AI</h3>
              <p className="text-secondary small mb-0 fw-semibold" style={{ letterSpacing: '0.5px', opacity: 0.9 }}>
                MongoDB · Express · React · Node · AI Integration
              </p>
            </div>
          </div>
          
          {/* --- Text Content Below (Centered) --- */}
          <div className="col-12 col-lg-10 text-center d-flex flex-column align-items-center">
            <span className="badge-custom mb-3 py-2 px-3 fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
              Available for Opportunities
            </span>
            <h1 className="display-3 fw-extrabold mb-2" style={{ letterSpacing: '-2px', lineHeight: 1.1 }}>
              Hi, I'm <span className="text-gradient">Venkata Rami Reddy</span>
            </h1>
            <h2 className="fs-2 fw-semibold text-secondary mb-4">
              Full Stack Developer · MERN Stack · AI Enthusiast
            </h2>
            <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '600px', fontSize: '1.15rem', lineHeight: '1.6', fontWeight: '400' }}>
              I am a MERN Stack Developer with hands on experience building scalable, full stack web applications. Proactive learner specializing in React.js, Node.js, Express.js, MongoDB, and AI API integrations.
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center mb-5">
              <a href="#projects" className="btn btn-primary-custom d-inline-flex align-items-center gap-2">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline-custom">
                Get In Touch
              </a>
              <div className="d-inline-flex align-items-center gap-2">
                <a
                  href="https://drive.google.com/uc?export=download&id=1yr1Mv6sSXkrbEVrFdnqY45juelfTPQhO"
                  download="Gelli_Venkata_Rami_Reddy_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-link text-decoration-none fw-bold text-secondary hover-accent d-inline-flex align-items-center gap-1"
                >
                  <FileText size={18} /> Resume
                </a>
              </div>
            </div>

            <div className="hero-socials d-flex gap-3 justify-content-center">
              <a href="https://github.com/vramreddy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/venkata-rami-reddy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:vramireddy566@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
