/* eslint-disable react/prop-types */
import { GiRapidshareArrow } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ itam }) => {
  const {id, cover, estate_title, status, segment_name, area, location, facilities ,price} = itam
  return (
    <div className="card bg-base-100 shadow-xl p-5 ">

      <figure className="w-full overflow-hidden p-1"><img src={cover} alt="Shoes" className="w-full rounded-lg" /></figure>
      <div className="card-body p-0">
        <h2 className="card-title font-bold mt-3 text-2xl">{estate_title}</h2>
        <h4><span className=" font-semibold">Name</span> : {segment_name}</h4>

<h5 className=" font-bold">Our facilities</h5>
        <ol className="list-disc pl-6">
        {
          facilities.map((pd,idx)=> <li key={idx}>{pd}</li>)
        }
        </ol>

        <div className="flex gap-2">
          <p className="flex items-center"><MdAttachMoney /> : {status}</p>
          <p className="flex items-center"><GiRapidshareArrow /> : {area}</p>
          <p className="flex items-center"><IoLocationSharp /> : {location}</p>
        </div>
        <div className="card-actions flex items-center my-2">
          <p className="font-bold">{price}</p>
          <Link to={`/property/${id}`}><button className="btn btn-primary">View Property</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;