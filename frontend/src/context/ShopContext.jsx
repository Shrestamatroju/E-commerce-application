import React, {createContext} from 'react'
//import products from '../components/assets/products';
import { useState } from 'react';
import { useEffect } from 'react';

const getDefaultCart=()=>{
        let cart={};
        for(let index=0; index <300+1; index++){
            cart[index]=0;
        }
        return cart;
    }

export const ShopContext =createContext({
  products: []
});

const ShopContextProvider=(props)=>{
   const[products, setProduct]=useState([])

    const [cartItems,setCartItems]=useState(getDefaultCart);
    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setProduct(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
               
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[])
   
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        // console.log(cartItems);
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-Data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({'itemId':itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-Data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({'itemId':itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo= products.find((product)=>product.id===Number(item));
                if(itemInfo){
                totalAmount+=itemInfo.price* cartItems[item]; 
                }               
            }
            
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }
     const contextValue={getTotalCartItems,getTotalCartAmount,products,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
