
import React from 'react';
import './Skills.css';
import Menu from './Menu';
import robot from '../assets/robot.webp';


const Skills = () => {

  
  return (
  

    <div className="skills-container">
      <Menu/>
      <div className="robot-circle">
        <img src={robot} alt="robot" className='robot-image'/>
      </div>
      <div className="skills-content">
        <h2>Personal Skills</h2>
        <p> 
    <strong>As a versatile web developer, I bring a robust set of skills across various technologies.</strong>
    <br></br>
    
</p>


        <h3>Frontend Skills</h3>
        <div className="skill">
          <span>HTML</span> 
          <div className="progress-bar">

            <div className="progress" style={{ width: '95%' }}></div>
           
          </div>
         
         
        </div>
        <div className="skill">
          <span>CSS</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>JavaScript</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>React.js</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Bootstrap</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}></div>
          </div>
        </div>

        <h3>Backend Skills</h3>
        <div className="skill">
          <span>Node.js</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Express.js</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>MongoDB</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>JWT</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Skills;
