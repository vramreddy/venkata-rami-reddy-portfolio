import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

// ============================================================
// EmailJS Configuration — Replace these with your own values!
// 1. Sign up free at https://www.emailjs.com/
// 2. Add an Email Service (e.g. Gmail) → copy your SERVICE_ID
// 3. Create an Email Template          → copy your TEMPLATE_ID
//    In the template, use these variables:
//      {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Go to Account → General → copy your Public Key
// ============================================================
const EMAILJS_SERVICE_ID = 'service_86nsx2s';
const EMAILJS_TEMPLATE_ID = 'template_cckmryd';
const EMAILJS_PUBLIC_KEY = 'Jsve69yGQdrhg86K-';

export default function Contact() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill out all required fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: '' });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'No Subject',
          message: formData.message,
          to_email: 'vramireddy566@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ submitting: false, success: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success banner after 4 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 4000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: `Failed to send: ${err?.text || err?.message || JSON.stringify(err)}`
      });
    }
  };

  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: "Email Me",
      value: "vramireddy566@gmail.com",
      href: "mailto:vramireddy566@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Call Me",
      value: "+91 9966277060",
      href: "tel:+919966277060"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Chennai, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-5 bg-light-gradient">
      <div className="container py-4">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="text-uppercase fw-bold text-gradient small" style={{ letterSpacing: '1.5px' }}>
              Get In Touch
            </span>
            <h2 className="display-5 fw-extrabold mt-2 mb-3">Contact Me</h2>
            <div className="mx-auto" style={{ width: '60px', height: '4px', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
          </div>
        </div>

        <div className="row g-5">
          {/* Info Card column */}
          <div className="col-lg-5 text-start">
            <div className="card-custom h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h4 fw-bold mb-3">Let's connect!</h3>
                <p className="text-secondary mb-4">
                  If you have a role that matches my skills, want to talk about building MERN stack projects, or simply want to connect, feel free to drop a message.
                </p>

                <div className="d-flex flex-column gap-4 my-4">
                  {contactDetails.map((detail, idx) => (
                    <div className="d-flex align-items-center gap-3" key={idx}>
                      <div className="tech-icon-wrapper d-inline-flex m-0" style={{ width: '42px', height: '42px', borderRadius: '10px' }}>
                        {detail.icon}
                      </div>
                      <div>
                        <div className="small text-secondary fw-semibold">{detail.label}</div>
                        {detail.href ? (
                          <a href={detail.href} className="fw-bold hover-accent text-primary">
                            {detail.value}
                          </a>
                        ) : (
                          <span className="fw-bold text-primary">{detail.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="border-top pt-4" style={{ borderColor: 'var(--border-color) !important' }}>
                  <div className="d-flex gap-3">
                    <a
                      href="https://github.com/vramreddy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-custom p-0 d-inline-flex align-items-center justify-content-center"
                      style={{ width: '44px', height: '44px', borderRadius: '50%' }}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/venkata-rami-reddy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-custom p-0 d-inline-flex align-items-center justify-content-center"
                      style={{ width: '44px', height: '44px', borderRadius: '50%' }}
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="col-lg-7 text-start">
            <div className="card-custom">
              <h3 className="h4 fw-bold mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label small text-secondary fw-semibold">Your Name *</label>
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label small text-secondary fw-semibold">Your Email *</label>
                    <input
                      type="email"
                      className="form-control form-control-custom"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label small text-secondary fw-semibold">Subject</label>
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label small text-secondary fw-semibold">Message *</label>
                    <textarea
                      className="form-control form-control-custom"
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message..."
                    ></textarea>
                  </div>

                  {status.error && (
                    <div className="col-12">
                      <div className="alert alert-danger mb-0 py-2.5 px-3 fs-6 rounded-3" role="alert">
                        {status.error}
                      </div>
                    </div>
                  )}

                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary-custom d-inline-flex align-items-center gap-2"
                      disabled={status.submitting}
                    >
                      {status.submitting ? 'Sending...' : 'Send Message'}
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Custom Toast Alert */}
        {status.success && (
          <div className="toast-custom">
            <CheckCircle2 size={22} className="text-success" />
            <div>
              <div className="fw-bold">Message Sent!</div>
              <div className="small text-secondary">Thanks for reaching out, I'll get back to you soon.</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
