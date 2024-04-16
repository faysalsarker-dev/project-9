import { Link } from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[90vh] space-y-3">
            <h1 className="text-7xl font-extrabold">404</h1>
            <p>Page not Found</p>
            <Link to='/'><button className="btn bg-[#9d4edd] text-white">Go back Home</button></Link>
            
        </div>
    );
};

export default NotFoundPage;