// import Slider from "../component/Slider";

import { useLoaderData } from "react-router-dom";
import Card from "../component/Card";


const Home = () => {

    const info = useLoaderData()
    // const [data,setData]=useState([])
    // setData(info)
    console.log(info);

    return (
        <div>
            {/* <Slider></Slider> */}

            {/* title */}
            <div className="my-4">
                <h3 className="text-3xl text-center  font-bold">Our Houses</h3>
            </div>


            {/* card section */}
            <div className="grid  grid-cols-3 gap-4">
           {

            info.map((itam)=> <Card key={itam.di} itam={itam}></Card>)
           }





            </div>






        </div>
    );
};

export default Home;