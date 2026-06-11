// App.jsx - Colorful Animated Design with Submenus
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Loading timeout
    setTimeout(() => setLoading(false), 1000)
    
    // Scroll handler for header background
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    // Scroll reveal animation
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('section')
      reveals.forEach((reveal, index) => {
        const windowHeight = window.innerHeight
        const revealTop = reveal.getBoundingClientRect().top
        const revealPoint = 150
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
          reveal.style.opacity = '1'
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleScrollReveal)
    handleScrollReveal()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleScrollReveal)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
      setActiveDropdown(null)
    }
  }

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  if (loading) {
    return <div className="loader"></div>
  }

  return (
    <div className="app-container">
      {/* Header with Navigation and Submenus */}
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="header-content">
          <div className="profile-section">
            <div className="profile-icon">
              👨‍💻
            </div>
            <div className="profile-info">
              <h1>Shanmuganathan K</h1>
              <p>Software Developer</p>
            </div>
          </div>
          
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
          
          <nav className="nav-container">
            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              {/* Home Dropdown */}
              <li className="nav-item">
                <span className="nav-link" onClick={() => scrollToSection('home')}>
                  Home <span className="dropdown-icon">▼</span>
                </span>
                <ul className="submenu">
                  <li><a onClick={() => scrollToSection('home')}>Introduction</a></li>
                  <li><a onClick={() => scrollToSection('about')}>Profile Overview</a></li>
                  <li><a onClick={() => scrollToSection('skills')}>Tech Stack</a></li>
                </ul>
              </li>
              
              {/* About Dropdown */}
              <li className="nav-item">
                <span className="nav-link" onClick={() => scrollToSection('about')}>
                  About <span className="dropdown-icon">▼</span>
                </span>
                <ul className="submenu">
                  <li><a onClick={() => scrollToSection('about')}>Who Am I</a></li>
                  <li><a onClick={() => scrollToSection('skills')}>What I Do</a></li>
                  <li><a onClick={() => scrollToSection('experience')}>Work Philosophy</a></li>
                </ul>
              </li>
              
              {/* Projects Dropdown */}
              <li className="nav-item">
                <span className="nav-link" onClick={() => scrollToSection('projects')}>
                  Projects <span className="dropdown-icon">▼</span>
                </span>
                <ul className="submenu">
                  <li><a onClick={() => scrollToSection('projects')}>ERP Applications</a></li>
                  <li><a onClick={() => scrollToSection('projects')}>Web Development</a></li>
                  <li><a onClick={() => scrollToSection('projects')}>E-Commerce</a></li>
                </ul>
              </li>
              
              {/* Experience Dropdown */}
              <li className="nav-item">
                <span className="nav-link" onClick={() => scrollToSection('experience')}>
                  Experience <span className="dropdown-icon">▼</span>
                </span>
                <ul className="submenu">
                  <li><a onClick={() => scrollToSection('experience')}>Current Role</a></li>
                  <li><a onClick={() => scrollToSection('experience')}>Previous Jobs</a></li>
                  <li><a onClick={() => scrollToSection('experience')}>Achievements</a></li>
                </ul>
              </li>
              
              {/* Contact Dropdown */}
              <li className="nav-item">
                <span className="nav-link" onClick={() => scrollToSection('contact')}>
                  Contact <span className="dropdown-icon">▼</span>
                </span>
                <ul className="submenu">
                  <li><a onClick={() => scrollToSection('contact')}>Get In Touch</a></li>
                  <li><a onClick={() => scrollToSection('contact')}>Social Media</a></li>
                  <li><a onClick={() => scrollToSection('contact')}>Resume</a></li>
                </ul>
              </li>
              
              <li>
                <button className="resume-btn" onClick={() => window.open('#', '_blank')}>
                  📄 Resume
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-animation">
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="floating-shape shape-3"></div>
            </div>
            <h1 className="hero-title">
              Welcome to My<span className="gradient-text"> Creative Portfolio</span>
            </h1>
            <p className="hero-subtitle">
              Building innovative solutions with passion and expertise
            </p>
            <div className="hero-buttons">
              <button className="hero-btn primary" onClick={() => scrollToSection('contact')}>
                Hire Me
              </button>
              <button className="hero-btn secondary" onClick={() => scrollToSection('projects')}>
                View Work
              </button>
            </div>
          </div>
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${scrolled ? 'visible' : ''}`}
        onClick={() => scrollToSection('home')}
      >
        ↑
      </button>
    </div>
  )
}

export default App