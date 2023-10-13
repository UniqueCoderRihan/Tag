import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
             {/*this is Layout of our WebPage.there are common Header and footer  */}
             <Navbar/>
             <Outlet/>
             <Footer/>
        </div>
    );
};

export default Main;