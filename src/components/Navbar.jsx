import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Sticky navbar
      setSticky(window.scrollY > 100);

      // Active section highlighting
      const sections = ['home', 'about', 'services', 'portfolio', 'experience', 'certifications', 'contact'];
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offset = section.offsetTop - 150;
          const height = section.offsetHeight;
          if (window.scrollY >= offset && window.scrollY < offset + height) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    // Handle window resize to close mobile menu on desktop
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsActive(false);
  };

  return (
    <header className={`header ${sticky ? 'sticky' : ''}`}>
      <a href="#home" className="logo" onClick={() => scrollToSection('home')}>Portfolio</a>

      <i 
        className={`fa-solid ${isActive ? 'fa-xmark' : 'fa-bars'}`} 
        id="menu-icon"
        onClick={toggleMenu}
      ></i>

      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <a 
          href="#home" 
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => scrollToSection('home')}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => scrollToSection('about')}
        >
          About
        </a>
        <a 
          href="#services" 
          className={activeSection === 'services' ? 'active' : ''}
          onClick={() => scrollToSection('services')}
        >
          Services
        </a>
        <a 
          href="#portfolio" 
          className={activeSection === 'portfolio' ? 'active' : ''}
          onClick={() => scrollToSection('portfolio')}
        >
          Portfolio
        </a>
        <a 
          href="#experience" 
          className={activeSection === 'experience' ? 'active' : ''}
          onClick={() => scrollToSection('experience')}
        >
          Experience
        </a>
        <a 
          href="#certifications" 
          className={activeSection === 'certifications' ? 'active' : ''}
          onClick={() => scrollToSection('certifications')}
        >
          Certifications
        </a>
        <a 
          href="#contact" 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
