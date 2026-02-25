import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2025 by @hemasrithecode | All Rights Reserved.</p>
      </div>
      <div className={`footer-iconTop ${isVisible ? 'visible' : ''}`}>
        <a href="#home" onClick={scrollToTop}>
          <i className="fa-solid fa-angle-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
