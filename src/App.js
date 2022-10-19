import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main ';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Error from './components/Error/Error';
import { productsAndCartLoader } from './Loaders/productAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop />
        },
        {
          path: '/shop',
          loader: () => fetch('products.json'),
          element: <Shop />
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders />
        },
        { path: '/inventory', element: <Inventory /> },
        { path: '/about', element: <About /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <SignUp /> },
        { path: '*', element: <Error></Error> },
      ],
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
