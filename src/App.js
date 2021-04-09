import React, { useRef, useState } from 'react';
import './App.css';
import avatar from './assets/FotoPrimoPiano.png';
import { FaFacebook, FaGithub, FaInstagram, FaDribbble } from 'react-icons/fa';


function App() {
  const skillsSection = useRef(null);
  const aboutSection = useRef(null);
  const contactSection = useRef(null);
  const homeSection = useRef(null);

  const [currentSection, setCurrentSection] = useState(null);

  const handleNavClick = (sectionId) => {
    switch(sectionId) {
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
        homeSection.current.scrollIntoView({
          behavior: 'smooth' 
        });
        break;
      }
      setCurrentSection(sectionId);
      
    }

  return (
    <div className="App">
        <header className="App-header">
          <div ref={homeSection} className="outer-container">
          <nav className="nav-container">
              <ul className="nav-list-right">
                <li className={"list-item"}><a className={currentSection === null ? 'active-link': ''} onClick={() => handleNavClick(null)} href="/">Home</a></li>
                <li className={"list-item"}><a className={currentSection === 'skills' ? 'active-link': ''} onClick={() => handleNavClick('skills')} href="/#skills">Skills</a></li>
                <li className={"list-item"}><a className={currentSection === 'about' ? 'active-link': ''} onClick={() => handleNavClick('about')} href="/#about">About Me</a></li>
                <li className={"list-item"}><a className={currentSection === 'contact' ? 'active-link': ''} onClick={() => handleNavClick('contact')} href="/#contact">Contact Me</a></li>
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
          <div className="skills-title" data-aos="fade-right">
            <h2>Skills</h2>
          </div>
          <div className="skill-section" data-aos="fade-left">
          <div className="skill-container" >
              <div className="bar-flex">
                <div className="bar-fill" style={{width:'80%'}}>
                  <div className="tag">CSS</div>
                </div>
                <span>80%</span>
              </div>

              <div className="bar-flex">
                <div className="bar-fill" style={{width:'80%'}}>
                  <div className="tag">HTML</div>
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
                <div className="bar-fill" style={{width:'70%'}}>
                  <div className="tag">React</div>
                </div>
                <span>70%</span>
              </div>

              <div className="bar-flex">
                <div className="bar-fill" style={{width:'70%'}}>
                  <div className="tag">Angular</div>
                </div>
                <span>70%</span>
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
              <img className="avatar" src={avatar} alt="avatar"></img>
              <p class="about-biography">
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
          <button className="btn-scroll" onClick={() => handleNavClick(null)}>Scroll To Top</button>
          <div className="contact-section">
            <div>
              <h1>Insert somethings</h1>
            </div>
            <div className="contact-right">
              <h1>Contact Info:</h1>
            </div>
          </div>
        </section>
        <footer style={{backgroundColor: '#314e52'}}>
          <h1>Footer</h1>
        </footer>
    </div>
  );
}

export default App;
