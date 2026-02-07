import React from 'react'
import './RelatedProducts.css'
import products from '../assets/products'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
         <h1>Realted Products</h1>
         <hr />
         <div className='relatedproducts-item'>
            {products.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}
         </div>
    </div>
  )
}
export  default RelatedProducts;
