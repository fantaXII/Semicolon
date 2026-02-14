import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true // Whether animation should happen only once - generally true
    });
    AOS.refresh(); // Initialize or refresh AOS when the component mounts
  }, []);

  return (
    <>
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-content">
          <h1>SEMICOLON: Innovating the Future</h1>
          <p>Your trusted partner for cutting-edge solutions.</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      <section className="about-section" data-aos="fade-right">
        <h2>About Us</h2>
        <p>SEMICOLON is dedicated to providing innovative and reliable solutions tailored to your business needs. We leverage the latest technologies to drive growth and efficiency.</p>
      </section>

      <section className="services-section" data-aos="fade-left">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item" data-aos="flip-up">
            <h3>Web Development</h3>
            <p>Creating modern, responsive, and user-friendly websites.</p>
          </div>
          <div className="service-item" data-aos="flip-up">
            <h3>Consulting</h3>
            <p>Expert advice to optimize your business processes.</p>
          </div>
          <div className="service-item" data-aos="flip-up">
            <h3>Custom Solutions</h3>
            <p>Tailored software development to meet specific requirements.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" data-aos="fade-up">
        <h2>Get In Touch</h2>
        <p>Have a project in mind? Let's discuss how we can help.</p>
        <button className="contact-button">Contact Us</button>
      </section>
    </>
  );
}

export default Home;
