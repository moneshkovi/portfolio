// About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about" data-aos="fade-up">
      <h2>About Me</h2>
      <p>
        I'm a graduate student at SLU and an AWS-certified Cloud Architect
        passionate about building scalable solutions and exploring new tech.
      </p>
      <div className="about-badges">
        <span className="badge">AWS Certified</span>
        <span className="badge">GPT-4 Builder</span>
        <span className="badge">Pythonic Thinker</span>
      </div>
    </section>
  );
};

export default About;
