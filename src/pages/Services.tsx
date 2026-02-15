import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Services(): JSX.Element {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
    AOS.refresh();
  }, []);

  return (
    <section id="services" data-aos="fade-up">
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
  );
}

export default Services;
