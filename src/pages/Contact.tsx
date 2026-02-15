import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
    AOS.refresh();
  }, []);

  return (
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
  );
}

export default Contact;
