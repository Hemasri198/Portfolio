import { useEffect, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      
      <form onSubmit={handleSubmit} className={isVisible ? 'reveal active' : 'reveal'}>
        <div className="input-box">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile Number" />
          <input type="text" placeholder="Email Subject" />
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
