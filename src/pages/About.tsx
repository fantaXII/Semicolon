import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true // Whether animation should happen only once - generally true
    });
    AOS.refresh(); // Initialize or refresh AOS when the component mounts
  }, []);

  return (
    <section id="about" data-aos="fade-up">
      <h2>About SEMICOLON</h2>
      <p>SEMICOLON is dedicated to providing innovative and reliable solutions tailored to your business needs. We leverage the latest technologies to drive growth and efficiency.</p>
      <p>Our mission is to empower businesses with cutting-edge technology and expert consultation, ensuring they stay ahead in a competitive market.</p>
    </section>
  );
}

export default About;
