import React, { useRef, useState } from 'react';
import './App.css';
import avatar from './assets/FotoPrimoPiano.png';
import { FaFacebook, FaGithub, FaInstagram, FaDribbble, FaArrowCircleUp } from 'react-icons/fa';


function App() {
  const skillsSection = useRef(null);
  const aboutSection = useRef(null);
  const contactSection = useRef(null);
  const homeSection = useRef(null);

  const [currentSection, setCurrentSection] = useState(null);

  const handleNavClick = (sectionId) => {
    switch(sectionId) {
      case 'home' :
        homeSection.current.scrollIntoView({
          behavior: 'smooth'
        });
      break;
      case 'skills':
        skillsSection.current.scrollIntoView({
          behavior: 'smooth' 
        });
      break;
      case 'about':
        aboutSection.current.scrollIntoView({
          behavior: 'smooth' 
        });
      break;
      case 'contact':
        contactSection.current.scrollIntoView({
          behavior: 'smooth' 
        });
      break;
      default:
        throw new Error('Page Not Found, Please select e valid Page');
      }
      setCurrentSection(sectionId);
      
    }

  return (
    <div className="App">
        <header className="App-header">
          <div id="home" ref={homeSection} className="outer-container">
          <nav className="nav-container">
              <ul className="nav-list-right">
                <li className={"list-item"}><a className={currentSection === 'home' ? 'active-link': ''} onClick={() => handleNavClick('home')} href="#home">Home</a></li>
                <li className={"list-item"}><a className={currentSection === 'skills' ? 'active-link': ''} onClick={() => handleNavClick('skills')} href="#skills">Skills</a></li>
                <li className={"list-item"}><a className={currentSection === 'about' ? 'active-link': ''} onClick={() => handleNavClick('about')} href="#about">About Me</a></li>
                <li className={"list-item"}><a className={currentSection === 'contact' ? 'active-link': ''} onClick={() => handleNavClick('contact')} href="#contact">Contact Me</a></li>
              </ul>
          </nav>
          <div className="presentation-container">
            <h1>Hi, I'm Riccardo.</h1>
            <p>I'm a Front End Developer</p>
            <a className="icon" href="https://www.facebook.com/profile.php?id=100065833762453">
              <FaFacebook/>
            </a>
            <a className="icon" href="https://www.instagram.com/andria.riccardo/">
              <FaInstagram/>
            </a>
            <a className="icon" href="https://dribbble.com/riccandriadev">
              <FaDribbble/>
            </a>
            <a className="icon" href="https://github.com/riccardo-dev">
              <FaGithub/>
            </a>
          </div>
          </div>
        </header>
        <section id="skills" ref={skillsSection} className="skills-section">
          <div className="skills-title" data-aos="fade-right" data-aos-duration="3000">
            <h2>Skills</h2>
          </div>
          <div className="skill-section" data-aos="fade-left" data-aos-duration="3000">
          <div className="skill-container" >
              <div className="bar-flex">
                <div className="bar-fill" style={{width:'85%'}}>
                  <div className="tag">HTML</div>
                </div>
                <span>85%</span>
              </div>

              <div className="bar-flex">
                <div className="bar-fill" style={{width:'80%'}}>
                  <div className="tag">CSS</div>
                </div>
                <span>80%</span>
              </div>
              
              <div className="bar-flex">
                <div className="bar-fill" style={{width:'80%'}}>
                  <div className="tag">JavaScript</div>
                </div>
                <span>80%</span>
              </div>

              <div className="bar-flex">
                <div className="bar-fill" style={{width:'75%'}}>
                  <div className="tag">React</div>
                </div>
                <span>75%</span>
              </div>

              <div className="bar-flex">
                <div className="bar-fill" style={{width:'75%'}}>
                  <div className="tag">Angular</div>
                </div>
                <span>75%</span>
              </div>

              <div className="bar-flex">
                <div className="bar-fill" style={{width:'65%'}}>
                  <div className="tag">Node.js</div>
                </div>
                <span>65%</span>
              </div>

              <div className="bar-flex">
                <div className="bar-fill" style={{width:'80%'}}>
                  <div className="tag">SAP UI5</div>
                </div>
                <span>80%</span>
              </div>

            </div>
          </div>
        </section>
        <section id="about" ref={aboutSection} >
          <div className="about-section">
            <div className="about-container">
              <img data-aos="fade-right" data-aos-duration="2000" 
                className="avatar" src={avatar} alt="avatar" />
              <p data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="about-biography">
                Born and raised in Italy. 
                I'm studying Computer Science at University of Turin. 
                Currenctly I'm developing on SAP UI5. 
                I'm a Web Developer that likes to keep learning and continue challenging himself. 
                I work to give the best solution to my clients. 
                I don't like to define myself by the work I've done. 
                I define myself by the work I want to do.
              </p>
            </div>
          </div>
        </section>
        <section id="contact" ref={contactSection}>
          <div className="contact-section">
            <div className="contact-left" data-aos="fade-down-right" data-aos-duration="2000">
              <h1>Get In Touch</h1>
              <p className="contact-right-text">
                If you have any questions, please feel free to write to me. 
                I would be thrilled to realize your next project.
              </p>
            </div>
            <div className="contact-right" data-aos="fade-down-left" data-aos-duration="2000">
              <h1>Contact Info:</h1>
              <h2>Email:</h2>
              <a href="mailto:r.andriadev@gmail.com">r.andriadev@gmail.com</a>
              <h2>Phone Number:</h2>
              <p>+39 334 2527780</p>
            </div>
          <a data-aos="fade-up" data-aos-duration="2000"
            className="btn-scroll" onClick={() => handleNavClick('home')} href="#home" >
              <FaArrowCircleUp size={42}/>
          </a>
          </div>
        </section>
        <footer className="footer">
          <p>© 2021 Riccardo Andria. All rights reserved.</p>
        </footer>
    </div>
  );
}

export default App;
