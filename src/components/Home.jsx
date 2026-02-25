import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="home" id="home">
      <div className={`home-content ${isVisible ? 'reveal active' : 'reveal'}`}>
        <h3>Hi, Myself</h3>
        <h1>Hema Sri</h1>
        <h3>And I'm a <span className="multiple-text">
          <TypeAnimation
            sequence={[
              'Engineering Student',
              1000,
              'Frontend Developer',
              1000,
              'Data Analytics',
              1000,
              'UI/UX Beginner',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span></h3>
        <p>I'm an Information Technology student, currently studying at CMR Engineering College. I'm on a mission to build awesome things with code
           I'll be graduating in 2027, and I'm super excited to keep learning and growing as I explore the world of tech! From building websites to analyzing data 
        </p>
        <div className="social-media">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
        <a href="#" className="btn" target="_blank" rel="noopener noreferrer">Download CV</a>
      </div>
      <div className={`home-img ${isVisible ? 'reveal active' : 'reveal'}`}>
        <img src="/img/profiledp.jpg" alt="Profile pic of Hema Sri" />
      </div>
    </section>
  );
};

export default Home;
