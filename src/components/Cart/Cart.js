import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd) => total+ prd.price * Product.quantity,0);

    // let total = 0;
    // for(let i = 0;i < cart.length;i++)
    // {
    //     const product = cart[i];
    //     total += product.price;
    // }
    let shipping = 0;
     if(total > 35)
    {
        shipping = 0;
    }
    else if(total > 15)
    {
        shipping = 4.99;
    }
    else if(total > 0)
    {
        shipping = 12.99;
    }
    
    const tax = (total/10).toFixed(2);
    const grandtotal = (total + shipping + Number(tax)).toFixed(2);


    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4 className='text-danger'>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {grandtotal}</p>
            <Link to='/review'><button className="name-button">Review Order</button></Link>
        </div>
    );
};

export default Cart;