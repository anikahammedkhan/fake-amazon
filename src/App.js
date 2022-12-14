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
import Shipping from './components/Shipping/Shipping';
import PrivateRoutes from './Routes/PrivateRoutes';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('http://localhost:5000/products'),
          element: <Shop />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders />
        },
        { path: 'shipping', element: <PrivateRoutes><Shipping /> </PrivateRoutes> },
        { path: '/inventory', element: <PrivateRoutes><Inventory /></PrivateRoutes> },
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
