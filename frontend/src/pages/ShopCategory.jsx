import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown.jpg'
import Item from '../components/Item/Item'


const ShopCategory = (props) => {
    const { products = [] }=useContext(ShopContext)
     
  return (
    <div className='shopcategory'>
        <img className='shopcategory-banner' src={props.banner} alt =""/>
        <div className='shopcategory-indexsort'>
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className='shopcategory-sort'>
                Sort by <img src={dropdown_icon} alt=""/>
            </div>
        </div>
        <div className="shopcategory-products">
            {products.map((item,i)=>{
                console.log("Item:", item);
                if(props.category===item.category){
                    return <Item  key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                }
                else{
                    return null;
                }
            })}
        </div>
        <div className='shopcategory-loadmore'>Explore More</div>
    </div>
  )
}

export default ShopCategory;

