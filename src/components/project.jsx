// src/ProjectPage.js

import React from 'react';
import './project.css';
import firstimage from '../assets/Laundry.png';

const projects = [
  {
    title: 'Project 1',
    description: 'This is a description of Project 1.',
    imageUrl: firstimage,
    link: 'https://frontend-project-eight-pi.vercel.app/',
  }
//   {
//     title: 'Project 2',
//     description: 'This is a description of Project 2.',
//     imageUrl: 'https://via.placeholder.com/300',
//     link: 'https://example.com/project2',
//   },
//   {
//     title: 'Project 3',
//     description: 'This is a description of Project 3.',
//     imageUrl: 'https://via.placeholder.com/300',
//     link: 'https://example.com/project3',
//   },
 ];

const project = () => {
  return (
    <div className="project-page">
      <h1 className='myproject'>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default project;
