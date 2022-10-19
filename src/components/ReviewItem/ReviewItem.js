import React from 'react';
import './ReviewItem.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ReviewItem = ({ product, handleRemove }) => {
    const { id, name, quantity, shipping, price, img } = product;
    return (
        <div className='review-item'>
            <div className='review-img'>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <h4 className="product-name">{name}</h4>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping: ${shipping}</p>
                    <p><small>Price: ${price}</small></p>
                </div>
                <div >
                    <button className='delete-btn' onClick={() => handleRemove(id)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;