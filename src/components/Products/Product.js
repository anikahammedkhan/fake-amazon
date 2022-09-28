import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img ? img : 'No Image FOUND'} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : {price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings}</small></p>
            </div>
            <button onClick={() => { handleAddToCart(product) }} className='btn-addToCart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;