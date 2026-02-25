import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
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

  return (
    <section className="about" id="about">
      <div className={`about-img ${isVisible ? 'reveal-left active' : 'reveal-left'}`}>
        <img src="/img/aboutpic.jpg" alt="About Hema Sri" />
      </div>
      <div className={`about-content ${isVisible ? 'reveal-right active' : 'reveal-right'}`}>
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p>I'm a B.Tech student and a frontend developer, passionate about 
            creating beautiful websites. I love bringing ideas 
            to life with HTML, CSS, and JavaScript.
            Along with coding, I'm also into data analytics
            and enjoy working with tools like Excel and Tableau
            to make sense of data. I'm always learning and excited 
            to build things that are both fun and functional.
        </p>
        <a href="#" className="btn"> Read more</a>
      </div>
    </section>
  );
};

export default About;
