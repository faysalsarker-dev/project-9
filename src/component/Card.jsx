/* eslint-disable react/prop-types */
import { GiRapidshareArrow } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";


import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Card = ({ itam }) => {
  const {id, cover, estate_title, status, segment_name, area, location, facilities ,price} = itam
  return (
    <div className="card bg-base-100 shadow-xl p-5 relative border border-[#c77dff58]"  data-aos="fade-up"
    data-aos-duration="900">
<div className="  shadow-xl absolute top-3 left-0 bg-[#5a189a] text-white rounded-lg px-2 py-1"><p className="flex items-center justify-center font-semibold"><MdAttachMoney/> : {status}</p></div>
      <figure className="w-full overflow-hidden p-1"><img src={cover} alt="Shoes" className="w-full rounded-lg" /></figure>
      <div className="card-body p-0">
        <h2 className="card-title font-bold mt-3 text-2xl">{estate_title}</h2>
        <h4><span className=" font-semibold">Name</span> : {segment_name}</h4>

<h5 className=" font-bold">Our facilities</h5>
        <div className="gap-3 space-x-3 my-3">
        {
          facilities.map((pd,idx)=> <span className="border-[#c77dff] shadow-lg border p-1 px-2 rounded-lg font-medium text-[#c77dff]" key={idx}>{pd}</span>)
        }
        </div>

        <div className="flex gap-2">
          
          <p className="flex items-center"><GiRapidshareArrow className="text-[#c77dff]"/> : {area}</p>
          <p className="flex items-center"><IoLocationSharp className="text-[#c77dff]"/> : {location}</p>
        </div>
        <div className="card-actions flex justify-between items-center my-2">
          <Link to={`/property/${id}`}><button className="btn bg-[#c77dff] text-white">View Property</button></Link>
          <p className="font-bold text-[#c77dff] text-xl text-right">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;