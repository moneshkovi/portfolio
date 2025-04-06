// Experience.js
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section experience" data-aos="fade-in">
      <h2>Experience</h2>
      <div className="experience-item" data-aos="slide-up" data-aos-delay="100">
        <h3>Cloud Architect Intern - Alphathena</h3>
        <p>
          Optimized website hosting with AWS Elastic Beanstalk and AWS Amplify.
        </p>
      </div>
      <div className="experience-item" data-aos="slide-up" data-aos-delay="200">
        <h3>Software Engineer Intern - Wrecked Esports</h3>
        <p>
          Designed and deployed an internal reporting dashboard to enhance decision-making.
        </p>
      </div>
      {/* Additional experience items can be added here */}
    </section>
  );
};

export default Experience;
