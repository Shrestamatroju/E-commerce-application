import React, {useContext, useState} from 'react'
import './Navbar.css'
import logo from "../assets/logo2.jpg";
import cart_img from "../assets/cartlogo.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { useRef } from 'react';
import drop from '../assets/dropdown.jpg'

 const Navbar = () => {
    const[menu,setMenu]= useState("shop");
    const{getTotalCartItems}=useContext(ShopContext);
   const menuRef=useRef();
   const dropdown_toggle= (e)=>{
          menuRef.current.classList.toggle('nav-menu-visible');
          e.target.classList.toggle('open');
   }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo"/>
        <p>shresta</p>
      </div> 
      <img className='nav-dropdown' onClick={dropdown_toggle} src={drop} alt="dropdown"/>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop </Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>women </Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>men </Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>kid</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul> 
      


      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link style={{'text-decoration':'none'}} to='/login'><button >Login</button></Link>}
        <Link style={{'text-decoration':'none'}} to='/cart'><img src={cart_img} alt=""/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>

    </div>
  )
}

export default Navbar
