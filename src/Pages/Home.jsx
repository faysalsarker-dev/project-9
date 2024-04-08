import Slider from "../component/Slider";
import { useLoaderData } from "react-router-dom";
import Card from "../component/Card";
import { useEffect, useState } from "react";

const Home = () => {
    const info = useLoaderData();
    const [data, setData] = useState(info);

    useEffect(() => {
        setData(info);
    }, [info]);

    return (
        <div>


            <Slider />

           
            <div className="my-12 p-4 ">
                <h3 className="text-3xl text-center font-bold">Available Houses</h3>
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
