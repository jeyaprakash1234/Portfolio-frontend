// src/components/Home.js
import React from 'react';
import './Home.css';
import profilePic from '../assets/JP.png';
import { Link} from 'react-router-dom';

const Home = () => {
  
  
  

  return (
    <div className="hero-container">
    <div className="left-section">
      <p className="intro-text">Hello Everyone.</p>
      <h1 className="name">I’m JEYAPRAKASH</h1>
      <p className="title">Web Developer</p>
      <Link to ='/project'> <button className="cta-button" >  Web Developer
         <span>&#10132;</span>
      </button></Link>
    </div>
    <div className="profile-container">
            <div className="profile-image-wrapper">
                <img src={profilePic} alt="Profile" className="profile-image"/>
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>
        </div>
    <div className="decorative-elements">
      <div className="circle"></div>
      <div className="circle-small"></div>
      
    </div>
  </div>
  
    
  );
};

export default Home;
