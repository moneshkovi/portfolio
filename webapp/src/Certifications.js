// Certifications.js
import React from 'react';

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
    </section>
  );
};

export default Certifications;
