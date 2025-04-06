import React, { useEffect } from 'react';
import profilePic from './profile-pic.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactTypingEffect from 'react-typing-effect';
import Certifications from './Certifications';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">Monesh Kovi</a>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li>
            <a
              href="https://www.linkedin.com/in/monesh-kovi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
    return (
      <section id="hero" className="hero">
        <div className="hero-content">
          <img src={profilePic} alt="Monesh Kovi" className="profile-image" />
          <h1>Monesh Kovi</h1>
          {/* Typing Animation */}
          <ReactTypingEffect
            text={[
              "Cloud Architect & AI Enthusiast",
              "Turning code into scalable solutions",
              "Exploring the future of tech"
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            className="typing-animation"
          />
          <div className="hero-cta">
            <a
              href="https://github.com/moneshkovi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/monesh-kovi/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              LinkedIn
            </a>
            <a
              href="https://example.com/resume.pdf"  // Replace with your actual resume link
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    );
  }
  

  function About() {
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
  }
  

  function Projects() {
    return (
      <section id="projects" className="section projects" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="project-cards">
          <div className="project-card" data-aos="fade-up" data-aos-delay="100">
            <h3>AI-Powered Content Platform</h3>
            <p>
              A platform that integrates AWS services and GPT-4 API for automated content generation.
            </p>
            <a href="#" className="btn">View Project</a>
          </div>
          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Emotion Recognition (EmoBERTa)</h3>
            <p>
              An advanced NLP model using the Roberta architecture to detect and analyze emotions.
            </p>
            <a href="#" className="btn">View Project</a>
          </div>
        </div>
      </section>
    );
  }
  

  function Experience() {
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
  }
    

  function Contact() {
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
      };
  
      // Send data to the Flask backend
      fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          e.target.reset();
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Something went wrong. Please try again later.');
        });
    };
  
    return (
      <section id="contact" className="section contact" data-aos="fade-up">
        <h2>Contact Me</h2>
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
          <button type="submit" className="btn" data-aos="fade-up" data-aos-delay="500">
            Send
          </button>
        </form>
      </section>
    );
  }
  

function App() {
  useEffect(() => {
        AOS.init({
          duration: 800,  // Animation duration in ms
          once: false,     // Whether animation should happen only once
        });
    }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Monesh Kovi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
