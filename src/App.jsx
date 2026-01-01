import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaBars, FaTimes } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiRedux } from 'react-icons/si';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'KHALID-CV-1.pdf';
    link.download = 'Malik_Muhammad_Khalid_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('✅ CV Download Started! Malik Muhammad Khalid - MERN Developer');
  };

  const projects = [
    {
      id: 1,
      title: "Gourmet Food Hub",
      description: "Premium food delivery platform with real-time ordering, payment gateway, admin dashboard, and analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Socket.io"],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Malik-Jawad7/food-website",
      live: "#",
      featured: true,
      category: "Food Website",
      status: "Live"
    },
    {
      id: 2,
      title: "EliteCommerce Pro",
      description: "Enterprise-grade e-commerce solution with advanced features, inventory management, and analytics.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Redux", "JWT"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Malik-Jawad7/ecommerce",
      live: "#",
      featured: true,
      category: "E-commerce",
      status: "Live"
    },
    {
      id: 3,
      title: "Quiz Master Pro",
      description: "Interactive quiz application with multiple categories, real-time scoring, and leaderboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Malik-Jawad7/quiz-app",
      live: "#",
      featured: false,
      category: "Quiz App",
      status: "Live"
    },
    {
      id: 4,
      title: "Nexus Dashboard",
      description: "Modern admin dashboard with real-time analytics, data visualization, and user management.",
      technologies: ["React", "Chart.js", "Express", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Malik-Jawad7/dashboard",
      live: "#",
      featured: false,
      category: "Dashboard",
      status: "In Progress"
    },
    {
      id: 5,
      title: "TaskFlow Pro",
      description: "Productivity application with drag-drop interface, team collaboration, and time tracking.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Malik-Jawad7/task-manager",
      live: "#",
      featured: false,
      category: "Productivity",
      status: "Live"
    },
    {
      id: 6,
      title: "MediCare Portal",
      description: "Healthcare management system for appointments, patient records, and telemedicine.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "WebRTC"],
      image: "https://images.unsplash.com/photo-1516549655669-df6654e447a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Malik-Jawad7",
      live: "#",
      featured: true,
      category: "Healthcare",
      status: "Live"
    },
    {
      id: 7,
      title: "Finance Tracker Pro",
      description: "Personal finance management app with expense tracking, budgeting, and financial insights.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Chart.js", "Auth0"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Malik-Jawad7",
      live: "#",
      featured: false,
      category: "Finance",
      status: "Live"
    },
    {
      id: 8,
      title: "Modern Landing Page",
      description: "Responsive landing page with animations, contact form, and SEO optimization.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Formik"],
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Malik-Jawad7/landing-page",
      live: "#",
      featured: true,
      category: "Landing Page",
      status: "Live"
    },
    {
      id: 9,
      title: "Blog Platform",
      description: "Full-featured blog platform with rich text editor, comments, and user authentication.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Express", "JWT"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Malik-Jawad7/blog-platform",
      live: "#",
      featured: false,
      category: "Blog Platform",
      status: "Live"
    },
    {
      id: 10,
      title: "Travel Explorer App",
      description: "Travel planning application with destination guides, booking system, and trip organizer.",
      technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Malik-Jawad7/travel-app",
      live: "#",
      featured: false,
      category: "Travel",
      status: "Live"
    },
    {
      id: 11,
      title: "Fitness Tracker",
      description: "Comprehensive fitness application with workout plans, progress tracking, and nutrition guide.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "JWT"],
      image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Malik-Jawad7/fitness-tracker",
      live: "#",
      featured: true,
      category: "Health & Fitness",
      status: "Live"
    }
  ];

  const skills = [
    { name: "HTML5", icon: <SiHtml5 />, level: 98, color: "#E34F26", category: "frontend" },
    { name: "CSS3", icon: <SiCss3 />, level: 95, color: "#1572B6", category: "frontend" },
    { name: "JavaScript", icon: <SiJavascript />, level: 92, color: "#F7DF1E", category: "frontend" },
    { name: "React.js", icon: <SiReact />, level: 90, color: "#61DAFB", category: "frontend" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "#000000", category: "frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 94, color: "#06B6D4", category: "frontend" },
    { name: "Redux", icon: <SiRedux />, level: 84, color: "#764ABC", category: "frontend" },
    { name: "Node.js", icon: <SiNodedotjs />, level: 88, color: "#339933", category: "backend" },
    { name: "Express.js", icon: <SiExpress />, level: 86, color: "#000000", category: "backend" },
    { name: "MongoDB", icon: <SiMongodb />, level: 85, color: "#47A248", category: "backend" },
  ];

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader-container">
          <div className="loader"></div>
          <h2 className="loading-text">Loading Portfolio...</h2>
          <p className="loading-subtext">Malik Muhammad Khalid | MERN Developer</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* VIP Navigation - FIXED */}
      <nav className="nav-vip">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="header-logo">
              <div className="logo-image">MK</div>
            </div>
            <div className="brand-text">
              <span className="brand-name">Portfolio</span>
              <span className="brand-title">MERN Developer</span>
            </div>
          </div>
          
          {/* Developer Name on Right Side - Hidden on Mobile */}
          <div className="developer-name">
            <span className="name">Malik Muhammad Khalid</span>
            <span className="title">MERN Stack Developer</span>
          </div>
          
          <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(item);
                  setIsMenuOpen(false);
                }}
              >
                <span className="link-number">0{['home', 'about', 'skills', 'projects', 'contact'].indexOf(item) + 1}</span>
                <span className="link-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              </a>
            ))}
            <button className="nav-download-btn" onClick={handleDownloadCV}>
              <FaDownload />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - FIXED */}
      <section id="home" className="hero-vip">
        <div className="hero-background">
          <div className="bg-gradient"></div>
          <div className="bg-particles"></div>
          <div className="bg-grid"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge-dot"></div>
              <span>Available for Opportunities</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">Hi, I'm Malik</span>
              <span className="title-line highlight">Muhammad Khalid</span>
            </h1>
            
            <div className="hero-subtitle">
              <div className="subtitle-text">
                <span className="typewriter">Full Stack</span>
                <span className="typewriter-delay">MERN Developer</span>
              </div>
              <div className="subtitle-line">
                <div className="line-dot"></div>
              </div>
            </div>
            
            <p className="hero-description">
              I enjoy building <span className="text-glow">modern digital experiences</span> using web technologies.
              Passionate about learning and creating scalable, performant applications.
            </p>

            <div className="hero-actions">
              <button className="vip-primary-btn" onClick={handleDownloadCV}>
                <FaDownload />
                <span>Download CV</span>
              </button>
              <a href="#projects" className="vip-outline-btn">
                <FaCode />
                <span>View Projects</span>
              </a>
            </div>

            <div className="social-icons">
              <a href="https://github.com/Malik-Jawad7" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/malik-khalid-1209b4334/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="profile-card-vip">
              <div className="card-glow"></div>
              <div className="profile-image">
                <div className="avatar-vip">
                  <div className="avatar-inner">
                    {/* Professional Profile Picture */}
                    <div className="professional-avatar">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzyHvg564_qNsXX4myYkMDxQdHlHgaWgd9A&s" 
                        alt="Malik Muhammad Khalid - MERN Developer"
                        className="profile-picture"
                      />
                    </div>
                    {/* Animation rings */}
                    <div className="avatar-ring"></div>
                    <div className="avatar-ring ring-2"></div>
                    <div className="avatar-ring ring-3"></div>
                    <div className="avatar-ring ring-4"></div>
                  </div>
                </div>
              </div>
              
              <div className="tech-badges">
                <div className="tech-badge">
                  <SiReact className="tech-icon react" />
                  <span>React.js</span>
                </div>
                <div className="tech-badge">
                  <SiNodedotjs className="tech-icon node" />
                  <span>Node.js</span>
                </div>
                <div className="tech-badge">
                  <SiMongodb className="tech-icon mongo" />
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-vip">
        <div className="container">
          <div className="section-header">
            <div className="section-number">01</div>
            <h2 className="section-title">About <span className="highlight">Me</span></h2>
            <div className="section-line"></div>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <h3>Passionate Developer & Problem Solver</h3>
              <p>
                I am a passionate <strong>MERN Stack Developer</strong> who enjoys building modern web applications.
                My journey into development started with curiosity and continues as I learn and grow my skills.
              </p>
              <p>
                As a <strong>quick learner</strong>, I am always eager to explore new technologies and frameworks.
                I focus on writing clean, readable code and improving my development practices.
              </p>
              
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">
                    <FaCode />
                  </div>
                  <div className="feature-content">
                    <h4>Clean Code</h4>
                    <p>Focus on readability, maintainability, and scalability</p>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">
                    <FaServer />
                  </div>
                  <div className="feature-content">
                    <h4>Full Stack</h4>
                    <p>End-to-end development expertise</p>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">
                    <FaDatabase />
                  </div>
                  <div className="feature-content">
                    <h4>Problem Solver</h4>
                    <p>Analytical approach to complex challenges</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <span className="window-title">developer.js</span>
                </div>
                <div className="code-content">
                  <pre>
{`const developer = {
  name: "Malik Muhammad Khalid",
  role: "MERN Stack Developer",
  location: "Karachi, Pakistan",
  email: "khalid094p@gmail.com",
  phone: "+92 3311367234",
  
  skills: {
    frontend: ["React", "Next.js", "Tailwind"],
    backend: ["Node.js", "Express", "REST API"],
    database: ["MongoDB", "Mongoose"],
    tools: ["Git", "Docker", "AWS"]
  },
  
  traits: [
    "Fast Learner",
    "Problem Solver",
    "Team Player",
    "Detail Oriented"
  ]
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-vip">
        <div className="container">
          <div className="section-header">
            <div className="section-number">02</div>
            <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>
            <div className="section-line"></div>
          </div>
          
          <div className="skills-container">
            <div className="skills-categories">
              <div className="category-card">
                <div className="category-header">
                  <div className="category-icon frontend">
                    <FaCode />
                  </div>
                  <h3>Frontend Development</h3>
                </div>
                <div className="category-skills">
                  {skills.filter(skill => skill.category === 'frontend').map((skill, index) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-details">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ 
                              width: `${skill.level}%`,
                              background: skill.color
                            }}
                          ></div>
                        </div>
                      </div>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="category-card">
                <div className="category-header">
                  <div className="category-icon backend">
                    <FaServer />
                  </div>
                  <h3>Backend Development</h3>
                </div>
                <div className="category-skills">
                  {skills.filter(skill => skill.category === 'backend').map((skill, index) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-details">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ 
                              width: `${skill.level}%`,
                              background: skill.color
                            }}
                          ></div>
                        </div>
                      </div>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-vip">
        <div className="container">
          <div className="section-header">
            <div className="section-number">03</div>
            <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
            <div className="section-line"></div>
          </div>
          
          <div className="projects-intro">
            <p className="projects-subtitle">
              Here are {projects.length} of my recent projects that showcase my skills in MERN stack development. 
              Each project demonstrates practical application of modern web technologies.
            </p>
          </div>
          
          <div className="projects-container">
            {projects.map((project, index) => (
              <div key={project.id} className={`project-card-vip ${project.featured ? 'featured' : ''}`}>
                <div className="project-badge">
                  <div className="badge-number">0{index + 1}</div>
                  <span className="project-category" data-category={project.category}>
                    {project.category}
                  </span>
                  {project.featured && <div className="featured-star">⭐ Featured</div>}
                </div>
                
                <div className="project-status">
                  {project.status === "Live" && <span className="status-complete">Live</span>}
                  {project.status === "In Progress" && <span className="status-in-progress">In Progress</span>}
                  {project.status === "Upcoming" && <span className="status-upcoming">Upcoming</span>}
                </div>
                
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub />
                        <span>View Code</span>
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="projects-footer">
            <a href="https://github.com/Malik-Jawad7" target="_blank" rel="noopener noreferrer" className="github-btn">
              <FaGithub />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-vip">
        <div className="container">
          <div className="section-header">
            <div className="section-number">04</div>
            <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
            <div className="section-line"></div>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Build Something Amazing</h3>
              <p className="contact-subtitle">
                I'm currently open to new opportunities. Whether you have a project in mind 
                or just want to connect, feel free to reach out!
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>khalid094p@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+92 3311367234</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Malir Halt, Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-social">
                <h4>Connect With Me</h4>
                <div className="social-buttons">
                  <a href="https://github.com/Malik-Jawad7" target="_blank" rel="noopener noreferrer" className="social-btn github">
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/malik-khalid-1209b4334/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form className="vip-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Project inquiry" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" placeholder="Tell me about your project..." rows="5" required></textarea>
                </div>
                
                <button type="submit" className="vip-submit-btn">
                  <FaEnvelope />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-vip">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">MK</div>
              <div className="footer-text">
                <h3>Malik Muhammad Khalid</h3>
                <p>MERN Stack Developer</p>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Navigation</h4>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>
              
              <div className="link-group">
                <h4>Connect</h4>
                <a href="https://github.com/Malik-Jawad7" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/malik-khalid-1209b4334/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:khalid094p@gmail.com">Email</a>
              </div>
            </div>
            
            <div className="footer-social">
              <a href="https://github.com/Malik-Jawad7" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/malik-khalid-1209b4334/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Malik Muhammad Khalid. All rights reserved.</p>
            <p className="footer-built">Built with ❤️ using React.js & Node.js</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;