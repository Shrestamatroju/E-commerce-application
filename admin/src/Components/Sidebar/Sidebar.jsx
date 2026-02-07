import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import addicon from '../../assets/addproduct.jpg'
import listicon from '../../assets/listproduct.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'> 
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
           <div className="sidebar-item">
               <img src={addicon} alt="" />
               <p>Add Product </p>
           </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
           <div className="sidebar-item">
               <img src={listicon} alt="" />
               <p>Product List</p>
           </div>
        </Link>
    </div>
    
  )
}

export default Sidebar