import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb.js';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart([]);
    };

    
    useEffect(() => {
        const savedCart = getStoredCart();
        // console.log(savedCart);
        const storedCart = [];
        for (const id in savedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = savedCart[id];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
        }
        setCart(storedCart);
        
    }, [products]);


    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.id === product.id);
        let newCart = [];
        if (!exists) {
            product.quantity = 1;
            newCart = ([...cart, product]);
        }
        else {
            const rest = cart.filter(pd => pd.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;