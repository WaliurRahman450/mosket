import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // Check if props.product is defined
    if (!props.product) {
        return null; // Return null if product is undefined
    }


    const { img, name, seller, price, stock, key } = props.product;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'><Link to={"/product/" + key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - Order soon</small></p>
            {props.showAddToCart && <button
                className='name-button'
                onClick={() => props.handleAddProduct(props.product)}
            >
                <FontAwesomeIcon icon={faShoppingCart} /><span id='gap'>add to cart</span>
            </button>}
            </div>
        </div>
    );
};

export default Product;
