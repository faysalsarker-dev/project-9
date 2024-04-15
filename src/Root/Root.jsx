import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";
import Footer from "../component/footer/Footer";



const Root = () => {
    return (
        <>

            <div className="max-w-6xl mx-auto px-4 md:px-0">
                <Navber></Navber>
                
                <Outlet></Outlet>
                

            </div>
            <div className="mt-10">
                <Footer></Footer>
            </div>
        </>
    );
};

export default Root;