import React from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.jpg';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';

const ProductDisplay = (props) => {
    const {product} =props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                 <img src={product.image} alt=""/>
                  <img src={product.image} alt=""/>
                   <img src={product.image} alt=""/>
            </div>
            <div className="productdisplay-img">
                 <img className='productdisplay-main-img' src={product.image} alt=""/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                 <img src={star_icon} alt=""/>
                  <img src={star_icon} alt=""/>
                   <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                     <img src={star_dull_icon} alt=""/>
                     <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price">
                    ${product.price}
                </div>

            </div>
            <div className="productdislay-right-description">
                   <p>A lightweight, usually knitted</p>
            </div>
            <div className="productdislay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XLL</div>
                </div>
                
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span>Women, T-Shirt, Croptop</p>
                        <p className='productdisplay-right-category'><span>Category:</span>Modern, Latest</p>
        </div>
    </div>
  )
}
export default ProductDisplay;
