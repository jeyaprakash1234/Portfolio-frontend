// src/components/Home.js
import React from 'react';
import './Home.css';
import profilePic from '../assets/JP.png';
const Home = () => {
  
 
  

  return (
    <div className="home">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1 className="name"> I'm Jeyaprakash</h1>
      <h2 className="title">Web and App Developer</h2>
      
    
    </div>
    
  );
};

export default Home;
