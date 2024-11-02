

import React from 'react';
import './project.css';



const project = () => {
  return (
    <div className="recent-projects-container">
    <h2 className="section-title">Recent Project</h2>
    <p className="section-description">
    Check out some of my recent work. Each project showcases unique design and development skills.
    </p>

    <div className="projects-grid">
      

      <div className="project-item">
        <div className="project-image website-design"></div>
        <h3 className="project-title">Laundry Website</h3>
     <a href="https://frontend-project-eight-pi.vercel.app/"><p className="project-year">View Project</p></a>

                      <div className="project-image illustration-design  "></div>
        <h3 className="project-title">Food Delivery </h3>
     <a href="https://food-delivery-two-neon.vercel.app/"><p className="project-year">View Project</p></a>
    
      </div>



      
    </div>
  </div>
  );
};

export default project;
