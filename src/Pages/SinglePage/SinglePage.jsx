import { GiRapidshareArrow } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";

import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
    const info = useLoaderData();
    const id = useParams()
   


    const itam = info.find((pd)=> pd.id == id.id)

    const { cover, estate_title, status, segment_name,description, area, location, facilities ,price} = itam


   
    return (
       <div className="flex lg:flex-row flex-col gap-5 mt-5 px-4">
        <div className="flex-1">
            <img src={cover} className=" rounded-lg" alt="" />

        </div>
        <div className="flex-1 space-y-3">
            <h3 className="text-4xl font-extrabold ">{estate_title}</h3>
            <h3 className="text-2xl font-bold">{segment_name}</h3>
            <div className="flex gap-2">
          <p className="flex items-center"><MdAttachMoney /> : {status}</p>
          <p className="flex items-center"><GiRapidshareArrow /> : {area}</p>
          <p className="flex items-center"><IoLocationSharp /> : {location}</p>
        </div>
        <h5 className=" font-bold">Our facilities</h5>
        <ol className="list-disc pl-6">
        {
          facilities.map((pd,idx)=> <li key={idx}>{pd}</li>)
        }
        </ol>

<p><span className=" font-semibold">Discription: </span>{description}</p>
<p className="font-bold">{price}</p>
        </div>
       </div>
    );
};

export default SinglePage;