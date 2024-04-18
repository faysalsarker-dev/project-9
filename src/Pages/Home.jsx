import Slider from "../component/Slider";
import { useLoaderData } from "react-router-dom";
import Card from "../component/Card";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const info = useLoaderData();
    const [data, setData] = useState(info);

    useEffect(() => {
        setData(info);
    }, [info]);

    return (
        <div className="px-4">
         <Helmet>
        <title>LuxeHaven | Home</title>
       
      </Helmet>

           <div className="mt-4"> <Slider /></div>

           
            <div className="my-12 p-4 ">
                <h3 className="text-3xl text-center font-bold animate__animated  animate__bounce">Available Houses</h3>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    data.map((itam) => <Card key={itam.id} itam={itam} />)
                }
            </div>
        </div>
    );
};

export default Home;
