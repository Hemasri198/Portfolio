import { useEffect, useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience');
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

  const experienceData = [
    {
      title: 'Web Developer Intern',
      company: 'UpToSkills',
      period: 'Sep 2025 – Dec 2025',
      description: [
        'Developed web features using HTML, CSS, JavaScript, Node.js, and MongoDB.',
        'Implemented real-time progress tracking and integrated backend APIs.',
        'Debugged, tested, and optimized application performance with the team.'
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="heading">Work <span>Experience</span></h2>
      <div className={`experience-container ${isVisible ? 'reveal active' : 'reveal'}`}>
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-box">
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <span className="company">{exp.company}</span>
              <span className="period">{exp.period}</span>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
