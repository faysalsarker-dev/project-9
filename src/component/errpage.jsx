import { Link } from "react-router-dom";


const Errpage = () => {
    return (
        <div className="flex justify-center items-center flex-col h-screen space-y-4">
        <h3 className="text-center text-4xl font-bold text-[#9d4edd]">Oops! Something went wrong.</h3>

  <p>Please try again later.</p>


<Link to='/'><button className="btn bg-[#9d4edd] text-white">Go Back Home</button></Link>


    </div>
    );
};

export default Errpage;