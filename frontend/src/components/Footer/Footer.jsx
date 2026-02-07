import React from 'react'
import './Footer.css'
import logo from '../assets/logo2.jpg'
import insta from '../assets/instaicon.jpg'
import pin from '../assets/pinicon.jpg'
import whats from '../assets/whatsicon.jpg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt=''/>
            <p>SHRESTA</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className="footer-icons-container">
                <img src={insta} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={whats} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={pin} alt=""/>
            </div>
            
        </div>
        <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2025 -All Right Reserved.</p>
            </div>
    </div>
  )
}

export  default Footer;
