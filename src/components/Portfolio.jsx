import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('portfolio');
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

  const projects = [
    {
      image: '/img/1.png',
      title: 'Spotify-Clone Project',
      description: 'I developed a Spotify Clone using HTML, CSS, and JavaScript to create a responsive and interactive music player.',
      link: '#'
    },
    {
      image: '/img/2.png',
      title: "Krish's Handicrafs Store",
      description: 'A handcrafted products e-commerce website built with modern web technologies.',
      link: 'https://github.com/Hemasri198/Krishs-Handicraft-Store'
    },
    {
      image: '/img/3.png',
      title: 'Profile Card Project',
      description: 'A creative profile card design showcasing personal information elegantly.',
      link: 'https://github.com/Hemasri198/PROFILE-CARD-project'
    },
    {
      image: '/img/4.png',
      title: 'Tourism Webpage',
      description: 'I developed a Spotify Clone using HTML, CSS, and JavaScript to create a responsive and interactive music player.',
      link: '#'
    },
    {
      image: '/img/5.png',
      title: 'Beautiful Blossoms Project',
      description: 'I developed a Spotify Clone using HTML, CSS, and JavaScript to create a responsive and interactive music player.',
      link: '#'
    },
    {
      image: '/img/6.png',
      title: 'Instagram Post Webpage',
      description: 'I developed a Spotify Clone using HTML, CSS, and JavaScript to create a responsive and interactive music player.',
      link: '#'
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className={`portfolio-container ${isVisible ? 'reveal active' : 'reveal'}`}>
        {projects.map((project, index) => (
          <div key={index} className="portfolio-box">
            <img src={project.image} alt={project.title} />
            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
