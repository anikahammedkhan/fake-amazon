import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb.js';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    // const { products, count } = useLoaderData();
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setCount(data.count);
            })
    }, [page, size]);



    const pages = Math.ceil(count / size);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart([]);
    };


    useEffect(() => {
        const savedCart = getStoredCart();
        // console.log(savedCart);
        const storedCart = [];
        for (const id in savedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = savedCart[id];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
        }
        setCart(storedCart);

    }, [products]);


    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd._id === product._id);
        let newCart = [];
        if (!exists) {
            product.quantity = 1;
            newCart = ([...cart, product]);
        }
        else {
            const rest = cart.filter(pd => pd._id !== product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        setCart(newCart);
        addToDb(product._id);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product._id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
            <div className="pagination">
                <p>Current page : {page} size: {size}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={page === number ? 'selected' : ''}
                        onClick={() => setPage(number)}
                    >
                        {number}
                    </button>)
                }
                <select onChange={e => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;