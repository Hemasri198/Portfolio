import { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services');
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

  const servicesData = [
    {
      icon: 'fa-code',
      title: 'Front-End Developer',
      description: 'A Front-End Developer Portfolio is a digital resume that showcases your skills, projects, and expertise in a visually engaging way. It highlights proficiency in HTML, CSS, JavaScript, and frameworks like React.js, along with UI/UX design, accessibility, and performance optimization. A well-structured portfolio includes a clean layout, an About Me section, a Skills showcase, and a Projects section featuring live demos and GitHub links. Displaying real-world applications like portfolio sites, e-commerce platforms, and interactive dashboards helps demonstrate versatility. An interactive and responsive design ensures a seamless user experience, making your portfolio a powerful tool for attracting job opportunities.'
    },
    {
      icon: 'fa-palette',
      title: 'Data Analytics',
      description: 'A Data Analytics Portfolio showcases your skills in data visualization, statistical analysis, and programming using tools like Tableau, and Power BI. It highlights your expertise in data cleaning, trend analysis, and machine learning through real-world projects such as sales forecasting, customer segmentation, and fraud detection. Adding case studies, reports, and interactive dashboards enhances credibility, making your portfolio a valuable asset in the competitive data analytics field.'
    },
    {
      icon: 'fa-figma',
      title: 'UI/UX Beginner',
      description: 'A UI/UX beginner portfolio is a digital showcase of your design skills, creativity, and problem-solving abilities. It highlights your knowledge of wireframing, prototyping, and usability testing using tools like Figma, Adobe XD, or Sketch. A well-structured portfolio should include an About Me section, case studies, and interactive project showcases demonstrating your design process. Featuring website redesigns, mobile app interfaces, and user research insights adds credibility.'
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <div className={`services-container ${isVisible ? 'reveal active' : 'reveal'}`}>
        {servicesData.map((service, index) => (
          <div key={index} className="services-box">
            <i className={`${index === 2 ? 'fa-brands' : 'fa-solid'} ${service.icon}`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="btn">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
