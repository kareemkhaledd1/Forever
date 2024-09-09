import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from "./Footer.tsx";

const AppLayout = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>

            <Footer/>
        </div>
    );
};

export default AppLayout;
