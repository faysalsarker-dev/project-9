import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";
import Footer from "../component/footer/Footer";



const Root = () => {
    return (
        <>

            <div className="max-w-6xl mx-auto">
                <Navber></Navber>
                <div className="h-[calc(100vh - 30px)]">
                <Outlet></Outlet>
                </div>

            </div>
            <div className="mt-10">
                <Footer></Footer>
            </div>
        </>
    );
};

export default Root;