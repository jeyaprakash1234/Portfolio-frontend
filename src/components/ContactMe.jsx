import React, { useState } from 'react';
import './ContactMe.css';
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
                text: "Thank you for your message!",
                icon: "success"
            });
            setTimeout(function(){
                window.location.reload();
            }, 1500)
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Error adding message.",
                icon: "error"
            });
        }
    };

    return (
        <div className="contact-container">
            <Menu/>
            <h2 className="contact-title">Contact Me</h2>
            <form className="contact-form">
                <div className="input-group">
                    <CiUser size={35} className="input-icon" />
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="contact-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <MdEmail size={35} className="input-icon" />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="contact-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <IoIosText size={35} className="input-icon" />
                    <textarea
                        placeholder="Your Message"
                        className="contact-textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="contact-button"
                    onClick={handleSubmit}
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
