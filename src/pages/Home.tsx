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
      <section className="hero-section" data-aos="fade-up" style={{ backgroundImage: `url(/semicolon_home.png)` }}>
        <div className="hero-content">
          <h1>SEMICOLON: Innovating the Future</h1>
          <p>Your trusted partner for cutting-edge solutions.</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      <section id="about" data-aos="fade-right">
        <h2>About SEMICOLON</h2>
        <p>SEMICOLON is dedicated to providing innovative and reliable solutions tailored to your business needs. We leverage the latest technologies to drive growth and efficiency.</p>
        <p>Our mission is to empower businesses with cutting-edge technology and expert consultation, ensuring they stay ahead in a competitive market.</p>
      </section>

      <section id="services" data-aos="fade-left">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item" data-aos="flip-up">
            <h3>Web Development</h3>
            <p>Creating modern, responsive, and user-friendly websites that drive engagement and conversions.</p>
          </div>
          <div className="service-item" data-aos="flip-up">
            <h3>Consulting</h3>
            <p>Expert advice to optimize your business processes, enhance performance, and achieve strategic goals.</p>
          </div>
          <div className="service-item" data-aos="flip-up">
            <h3>Custom Solutions</h3>
            <p>Tailored software development to meet your unique business requirements and challenges.</p>
          </div>
          <div className="service-item" data-aos="flip-up">
            <h3>Cloud Services</h3>
            <p>Leveraging cloud technologies for scalability, flexibility, and cost-efficiency.</p>
          </div>
        </div>
      </section>

      <section id="contact" data-aos="fade-up">
        <h2>Get In Touch</h2>
        <p>Have a project in mind or a question? We'd love to hear from you.</p>
        <div className="contact-info">
          <p>Email: info@semicolon.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Innovation Drive, Tech City, TC 54321</p>
        </div>
        {/* Placeholder for a contact form */}
        <div className="contact-form" style={{ marginTop: '30px' }}>
          <p>[Contact Form will be implemented here]</p>
        </div>
      </section>
    </>
  );
}

export default Home;
