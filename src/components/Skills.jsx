
import React from 'react';
import './Skills.css';
import Menu from './Menu';


const Skills = () => {

  
  return (
    <section id="skills">
      <Menu/>
      <h2>My Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <h3>HTML</h3>
          <div className="skill-stars">★★★★☆</div>
        </div>
        <div className="skill-item">
          <h3>CSS</h3>
          <div className="skill-stars">★★★★★</div>
        </div>
        <div className="skill-item">
          <h3>JavaScript</h3>
          <div className="skill-stars">★★★★☆</div>
        </div>
        <div className="skill-item">
          <h3>React.js</h3>
          <div className="skill-stars">★★★★★</div>
        </div>
        <div className="skill-item">
          <h3>Node.js</h3>
          <div className="skill-stars">★★★★☆</div>
        </div>
        <div className="skill-item">
          <h3>MongoDB</h3>
          <div className="skill-stars">★★★★☆</div>
        </div>
        <div className="skill-item">
          <h3>React Native</h3>
          <div className="skill-stars">★★★★☆</div>
        </div>
        <div className="skill-item">
          <h3>Expo</h3>
          <div className="skill-stars">★★★★☆</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
