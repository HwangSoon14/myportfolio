import React, { useState , useEffect } from 'react';
import "./Navbar.scss"
import Logo from "../../img/logo.jpg"
import Logo2 from "../../img/logo2.jpg"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [bg , setBg ] = useState(localStorage.getItem("active") || false);
    
    const handleClick = (x) => {
        if(x === 1) {
            localStorage.setItem("active" , false);
            setBg(false);
        }
        else { 
            localStorage.setItem("active" , true);
            setBg(true);
        
        }
    }
    
    return (
        <div className={bg ? "n n-active" : "n"}>
            <div className="n-wrapper">
                <div className="n-left">
                    <div className="n-left__imgdiv">
                        <img src={bg ? Logo2 : Logo} alt="logo" />
                    </div>
                </div>
                <div className="n-right">
                    <div className="n-right-wrapper">
                        <Link to="/" onClick={() => handleClick(1)} className="n-right__link">Home</Link>
                        <Link to="/about" onClick={() => handleClick(2)} className="n-right__link">About Me</Link>
                        <Link to="/works" onClick={() => handleClick(2)} className="n-right__link">My Webs</Link>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Navbar;