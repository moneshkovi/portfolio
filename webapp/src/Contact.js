// Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage('');
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    // Send data to the Flask backend
    fetch('http://localhost:5001/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setSending(false);
        setStatusMessage(data.message);
        setStatusType(data.status);
        
        if (data.status === 'success') {
          e.target.reset();
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setSending(false);
        setStatusMessage('Something went wrong. Please try again later.');
        setStatusType('error');
      });
  };

  return (
    <section id="contact" className="section contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      {statusMessage && (
        <div className={`status-message ${statusType}`}>
          {statusMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up" data-aos-delay="100">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
          data-aos="fade-up" 
          data-aos-delay="200"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
          data-aos="fade-up" 
          data-aos-delay="300"
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          required 
          data-aos="fade-up" 
          data-aos-delay="400"
        ></textarea>
        <button 
          type="submit" 
          className="btn" 
          data-aos="fade-up" 
          data-aos-delay="500"
          disabled={sending}
        >
          {sending ? 'Sending...' : 'Send'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
