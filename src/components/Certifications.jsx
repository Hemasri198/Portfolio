import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faAward, faIdCard, faBrain, faChartLine, faRobot, faShieldHalved, faPenNib, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('certifications');
      if (section) {
        const offset = section.offsetTop - window.innerHeight / 2;
        if (window.scrollY >= offset) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const certificationsData = [
    {
      title: 'Java Certified Foundations Associate',
      issuer: 'Infosys',
      icon: faJava
    },
    {
      title: 'TCS iON Career Edge – Young Professional',
      issuer: 'TCS',
      icon: faAward
    },
    {
      title: 'AI Skills Passport',
      issuer: 'EY & Microsoft',
      icon: faIdCard
    },
    {
      title: 'AI & ML',
      issuer: 'AICTE Edunet',
      icon: faBrain
    },
    {
      title: 'Data Analytics Simulation',
      issuer: 'Accenture',
      icon: faChartLine
    },
    {
      title: 'Generative AI & ChatGPT',
      issuer: 'GeeksforGeeks',
      icon: faRobot
    },
    {
      title: 'Cyber Security Simulation',
      issuer: 'Tata',
      icon: faShieldHalved
    },
    {
      title: 'Adobe India Hackathon',
      issuer: 'Adobe (2025)',
      icon: faPenNib
    },
    {
      title: 'Hack-4-Mini 2.0',
      issuer: 'Hackathon (2025)',
      icon: faCodeBranch
    }
  ];

  return (
    <section className="certifications" id="certifications">
      <h2 className="heading">Certifications <span>& Achievements</span></h2>
      <div className={`certifications-container ${isVisible ? 'reveal active' : 'reveal'}`}>
        {certificationsData.map((cert, index) => (
          <div key={index} className="certification-box">
            <FontAwesomeIcon icon={cert.icon} size="3x" />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
