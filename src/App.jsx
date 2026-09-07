import { useState } from "react";
import "./App.css";

function App() {
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      setFormMessage("Please fill in all the fields.");
      return;
    }

    if (!email.includes("@")) {
      setFormMessage("Please enter a valid email address.");
      return;
    }

    setFormMessage("Thank you! Your message has been submitted 💜");
    form.reset();
  };

  return (
    <div className="portfolio">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">
          SP<span>.</span>
        </h2>

        <div className="nav-links">
  <a href="#home" aria-label="Go to Home section">Home</a>
  <a href="#about" aria-label="Go to About section">About</a>
  <a href="#skills" aria-label="Go to Skills section">Skills</a>
  <a href="#projects" aria-label="Go to Projects section">Projects</a>
  <a href="#contact" aria-label="Go to Contact section">Contact</a>
</div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hello">Hello, I'm 👋</p>

          <h1>Swetha Patil</h1>

          <h2>Aspiring Full Stack Developer</h2>

          <p className="hero-text">
            I am a Computer Science Engineering student passionate about
            creating beautiful and useful web applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-symbol">&lt;/&gt;</div>
          <p>Turning ideas into</p>
          <h3>Digital Experiences ✨</h3>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-container">
          <div className="about-text">
            <h3>I'm Swetha Patil 👋</h3>

            <p>
              I am a Computer Science Engineering student with a passion for
              technology and web development. I enjoy learning new technologies
              and creating projects that solve real-world problems.
            </p>

            <p>
              I am currently exploring Full Stack Development and improving my
              skills in building modern and responsive web applications.
            </p>
          </div>

          <div className="about-info">
            <div className="info-card">
              <span>🎓</span>
              <div>
                <h4>Education</h4>
                <p>Computer Science Engineering</p>
              </div>
            </div>

            <div className="info-card">
              <span>💻</span>
              <div>
                <h4>Interest</h4>
                <p>Full Stack Development</p>
              </div>
            </div>

            <div className="info-card">
              <span>🚀</span>
              <div>
                <h4>Goal</h4>
                <p>Build meaningful applications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="section-heading">
          <p>WHAT I KNOW</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-container">

          <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <h3>Frontend</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>Backend</h3>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>REST APIs</p>
            <p>PHP</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>Database</h3>
            <p>MongoDB</p>
            <p>MySQL</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🛠️</div>
            <h3>Tools</h3>
            <p>VS Code</p>
            <p>GitHub</p>
            <p>MongoDB Compass</p>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-container">

          {/* Project 1 */}
          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Library Management System</h3>

            <p>
              A web-based application for managing books, members,
              borrowing and returning books efficiently.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://github.com/swethapatil092006"
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-number">02</div>

            <h3>Student Management System</h3>

            <p>
              A simple application designed to manage student information
              and organize academic details efficiently.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://github.com/swethapatil092006"
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-number">03</div>

            <h3>Portfolio Website</h3>

            <p>
              A personal responsive portfolio website created to showcase
              my skills, projects and journey as a developer.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://github.com/swethapatil092006"
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="section-heading">
          <p>MY JOURNEY</p>
          <h2>Education</h2>
        </div>

        <div className="education-container">

          <div className="education-card">
            <div className="education-year">
              2024 - Present
            </div>

            <h3>Computer Science Engineering</h3>

            <h4>CMR University, Bangalore</h4>

            <p>
              Currently pursuing my degree in Computer Science Engineering
              and learning programming, web development, databases and
              modern technologies.
            </p>
          </div>

          <div className="education-card">
            <div className="education-year">
              Previous Education
            </div>

            <h3>Pre-University Education</h3>

            <h4>Science Stream</h4>

            <p>
              Built a strong foundation in science and mathematics before
              beginning my journey in Computer Science Engineering.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Let's Connect</h2>
        </div>

        <div className="contact-container">

          <div className="contact-text">
            <h3>Have a project or idea? 💜</h3>

            <p>
              Feel free to reach out to me. I would love to connect,
              collaborate and learn new things together!
            </p>

            <div className="contact-details">
              <p>📧 Email: YOUR_EMAIL_HERE</p>
              <p>📍 Bangalore, India</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

           <input
  type="text"
  name="name"
  placeholder="Your Name"
  required
/>

            <input
  type="email"
  name="email"
  placeholder="Your Email Address"
  required
/>

            <textarea
  name="message"
  rows="5"
  placeholder="Write your message..."
  required
></textarea>
            <button type="submit">
              Send Message ✨
            </button>

            {formMessage && (
              <p className="form-message">
                {formMessage}
              </p>
            )}

          </form>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>
          SP<span>.</span>
        </h2>

        <p>
          Designed and built by Swetha Patil 💜
        </p>

        <p>
          © 2026 Swetha Patil. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;