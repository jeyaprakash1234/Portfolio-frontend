import React, { useState } from 'react';
import './ContactMe.css'; // Assuming you'll add your CSS here
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoIosText } from "react-icons/io";
 import Swal from 'sweetalert2';
 import axios from 'axios';
import Menu from './Menu';

function Contact() {
  
    const [name, setName] = useState('');
   
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('https://portfolio-backend-ivbu.onrender.com/api/messages', {
          name,
        
          email,
          message
        });
        
        Swal.fire({
          title: "Good job!",
          text: "Thank for your Message!",
          icon: "success"
        });
        setTimeout(function(){
            window.location.reload();
        },1500)
      } catch (error) {
        alert.error('Error adding message:', error);
      }
    };
  
    return (
        <div className="contact-container">
            <Menu/>
            <h2 className="contact-title">Contact Me</h2>
            <form className="contact-form">
            <CiUser  size={35} color='#007bff'/>
                <input type="text" placeholder="Your Name" className="contact-input" value={name} onChange={(e)=>setName(e.target.value)} required />
                <MdEmail size={35} color='#007bff'/>
                <input type="email" placeholder="Your Email" className="contact-input" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <IoIosText size={35} color='#007bff'/>
                <textarea placeholder="Your Message" className="contact-textarea"  value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
                <button type="submit" className="contact-button" onClick={handleSubmit}>Send Message</button>
            </form>
        </div>
    );
}

export default Contact;


