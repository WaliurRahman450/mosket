import React from 'react';
import { useState,useEffect } from "react";
import { getDatabaseCart } from '../../utilities/databaseManager.js';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem'
import { removeFromDatabaseCart } from '../../utilities/databaseManager.js';
import Cart from '../Cart/Cart';
const Review = () => {
    const [cart,setCart] = useState([])

    const removeProduct = (productKey)=>{
        
        const newCart = cart.filter(pd => pd.key!== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
        useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts =  productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[])
    return (
    
           
           <div className="shop-container">
                <div className="product-container">
                {
                cart.map(pd => <ReviewItem
                 key={pd.key} 
                 removeProduct ={removeProduct}
                 product={pd}>
                 
                </ReviewItem>)
            }
                </div>

                <div className="cart-container">
                    <Cart cart = {cart}></Cart>
                </div>

           </div>
    );
};

export default Review;