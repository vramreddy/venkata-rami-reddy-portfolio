import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top glass-nav py-3">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
          <img
            src="/developer-logo.png"
            alt="Logo"
            style={{ width: '36px', height: '36px', objectFit: 'contain' }}
          />
          <span className="text-gradient fs-4" style={{ letterSpacing: '-0.5px', fontWeight: 900 }}>Portfolio</span>
        </a>

        <div className="d-flex align-items-center gap-2 d-lg-none">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn me-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="border-0 bg-transparent text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isOpen ? 'show mt-3 mt-lg-0' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <a
                  className="nav-link fw-semibold px-3 py-2 rounded-3 text-secondary"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ fontSize: '0.95rem' }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="nav-item d-none d-lg-block ms-2">
              <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
