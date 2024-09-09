import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
import Orders from './pages/Orders';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import Login from './pages/Login';
import Cart from './pages/Cart';

import AppLayout from './components/AppLayout';

const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/collection',
                element: <Collection/>,
            },
            {
                path: '/about',
                element: <About/>,
            },
            {
                path: '/contact',
                element: <Contact/>,
            },
            {
                path: '/orders',
                element: <Orders/>,
            },
            {
                path: '/product/:productId',
                element: <Product/>,
            },
            {
                path: '/place-order',
                element: <PlaceOrder/>,
            },
            {
                path: '/cart',
                element: <Cart/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
        ],
    },
]);

const App = () => {
    return (
        <div className="px-4 sm-px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;
