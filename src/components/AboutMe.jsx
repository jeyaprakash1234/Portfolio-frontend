import React, { useEffect, useState } from 'react';
import './AboutMe.css';
import resumePDF from '../assets/JP resume Full stack.pdf';
import { FaVolumeUp , FaStop } from 'react-icons/fa';
import Menu from './Menu';
const AboutMe = () => {
 
    const [isReading, setIsReading] = useState(false);

  const readParagraph = () => {
    if (isReading) return; // Avoid starting multiple instances

    const paragraph = "Hello! I'm Jeyaprakash, a passionate Web and App Developer with a deep interest in creating interactive and responsive web and mobile applications. I enjoy learning new technologies and continuously improving my skills in web development. Over the past few years, I have honed my skills in various programming languages and frameworks, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, JWT, and more. My journey as a developer has been driven by a desire to create impactful digital experiences. In addition to web development, I have a strong passion for mobile app development. I have worked extensively with React Native and Expo to build mobile applications that are not only functional but also aesthetically pleasing. My goal is to bridge the gap between user needs and technology by delivering high-quality applications. When I'm not coding, I love exploring new technologies, reading about the latest trends in web and app development, and participating in coding challenges to sharpen my problem-solving skills. I'm always open to collaborating on exciting projects and learning from others in the tech community. ";
    const utterance = new SpeechSynthesisUtterance(paragraph);

    utterance.onstart = () => setIsReading(true);
    utterance.onend = () => setIsReading(false);

    speechSynthesis.speak(utterance);
  };

  const stopReading = () => {
    speechSynthesis.cancel();
    setIsReading(false);
  };

    
    return (

        <section id="about-me" className="about-me-section">
            <Menu/>
            <h2>About Me</h2>  <div className="button-container">
        {!isReading ? (
          <button className="read-paragraph-button" onClick={readParagraph}>
            <FaVolumeUp className="speaker-icon" />
         
          </button>
        ) : (
          <button className="stop-reading-button" onClick={stopReading}>
            <FaStop className="stop-icon" />
           
          </button>
        )}
      </div>
            <p>
                Hello! I'm Jeyaprakash, a passionate Web and App Developer with a deep interest in creating interactive and responsive web and mobile applications. I enjoy learning new technologies and continuously improving my skills in web development.
            </p>
            <p>
                Over the past few years, I have honed my skills in various programming languages and frameworks, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, JWT, and more. My journey as a developer has been driven by a desire to create impactful digital experiences.
            </p>
            <p>
                In addition to web development, I have a strong passion for mobile app development. I have worked extensively with React Native and Expo to build mobile applications that are not only functional but also aesthetically pleasing. My goal is to bridge the gap between user needs and technology by delivering high-quality applications.
            </p>
            <p>
                When I'm not coding, I love exploring new technologies, reading about the latest trends in web and app development, and participating in coding challenges to sharpen my problem-solving skills. I'm always open to collaborating on exciting projects and learning from others in the tech community.
            </p>
            <div className="resume-section">
                <h3>My Resume</h3>
                <div className="resume-buttons">
                    <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="btn view-btn">
                        View Resume
                    </a>
                    <a href={resumePDF} download className="btn download-btn">
                        Download Resume
                    </a>
                </div>
                </div>

        </section>
    );
};

export default AboutMe;
