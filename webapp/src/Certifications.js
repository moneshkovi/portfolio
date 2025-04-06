// Certifications.js
import React from 'react';

const techSkills = [
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "AWS", level: 80 },
  { name: "MySQL", level: 75 },
  { name: "ReactJS", level: 80 },
  { name: "Docker", level: 70 }
];

const softSkills = [
  { name: "Teamwork", percent: 90 },
  { name: "Communication", percent: 85 },
  { name: "Problem Solving", percent: 88 },
  { name: "Adaptability", percent: 82 }
];

const Certifications = () => {
  // Certification data with local image paths and Credly URLs
  const certifications = [
    {
      id: 'aws-dev',
      title: 'AWS Certified Developer Associate',
      image: '/certs/aws-certified-developer-associate.png',
      credlyBadgeId: 'a69f7a9a-d426-44e7-9ff5-05a892dec45d',
      credlyUrl: 'https://www.credly.com/badges/a69f7a9a-d426-44e7-9ff5-05a892dec45d/public_url'
    },
    {
      id: 'aws-architect',
      title: 'AWS Certified Solutions Architect Associate',
      image: '/certs/aws-certified-solutions-architect-associate.png',
      credlyBadgeId: 'e341d5d7-01c8-4743-a477-0854eb8148e8',
      credlyUrl: 'https://www.credly.com/badges/e341d5d7-01c8-4743-a477-0854eb8148e8/public_url'
    }
  ];

  return (
    <section id="certifications" className="section certifications" data-aos="fade-up">
      <h2>Certifications</h2>
      <div className="cert-cards">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card" data-aos="fade-right" data-aos-delay="100">
            {/* Image that links to Credly verification when clicked */}
            <a 
              href={cert.credlyUrl}
              target="_blank" 
              rel="noopener noreferrer"
              title="Click to verify this certification"
            >
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="cert-img" 
              />
            </a>
            
            <h3>{cert.title}</h3>
            
            {/* Separate verify button */}
            <a
              href={cert.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Verify
            </a>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="skills-container">
        <div className="tech-skills">
          <h2>Technical Skills</h2>
          {techSkills.map(skill => (
            <div key={skill.name} className="skill-bar">
              <span>{skill.name}</span>
              <div className="progress-bar">
                <div className="fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="soft-skills">
          <h2>Professional Skills</h2>
          <div className="soft-skills-grid">
            {softSkills.map(skill => (
              <div key={skill.name} className="circle-skill">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className="circle"
                    strokeDasharray={`${skill.percent}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className="percentage">{skill.percent}%</text>
                </svg>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
