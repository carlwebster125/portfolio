import React from 'react';
import './App.css';
import Projects from './components/Projects';

function App() {
  const openResume = () => {
    const resumePath = '/resumes/resume.pdf';
    const width = 600;
    const height = 800;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
  
    window.open(resumePath, '_blank', `width=${width}, height=${height}, top=${top}, left=${left}`);
  };  

  return (
    <div className="App">
      <header className="header">
        <h1>Carl Webster</h1>
        <p>Full-Stack Web Developer</p>
      </header>

      <main>
  <Projects />
  <iframe
    title="Resume PDF"
    src=""
    width="100%"
    height="600px"
    style={{ border: 'none' }}
  ></iframe>
</main>

      <footer className="footer">
  <div className="footer-icons">
    <a href="https://www.linkedin.com/in/carl-webster-498187236/" target="_blank" rel="noopener noreferrer">
      <img src="./images/linkedin.png" alt="LinkedIn Profile" />
    </a>
    <a href="https://github.com/carlwebster125" target="_blank" rel="noopener noreferrer">
      <img src="./images/github.png" alt="Github Profile" />
    </a>
    <div className="resume-icon" onClick={openResume}>
  <img src="./images/resume.png" alt="Resume" />
</div>
  </div>
  <p>carlwebster125@gmail.com</p>
</footer>

    </div>
  );
}

export default App;
