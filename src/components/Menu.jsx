import React, { useState ,useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';


import './Menu.css'




const Menu = () => {
  
  
  
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside of the menu
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="menu" ref={menuRef}>

     
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>


      {isOpen && (
        <nav className="menu-links">
          <Link to="/" onClick={toggleMenu}>Home</Link>

          <Link to="/about" onClick={toggleMenu}>About </Link>
          <Link to="/skills" onClick={toggleMenu}>Skills</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
         

           
       
        </nav>
      )}
      {/* {inOpen && (
         <nav className="menu-links">
       <Link to="/notify" onClick={toggleOpen}></Link>
       </nav>
      )} */}


    </div>
  );
};

export default Menu;
