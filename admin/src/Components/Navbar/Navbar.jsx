import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo2.jpg'
import navprofile from '../../assets/navprofile.jpg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='nav-logo'/>
        <img src={navprofile} alt="" className='nav-profile'/>
    </div>


  )
}

export default Navbar