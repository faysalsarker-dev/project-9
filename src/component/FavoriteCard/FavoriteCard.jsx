/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
const FavoriteCard = ({itam}) => {
    const {id, cover, estate_title, segment_name,price } = itam;
    return (
        <div className="flex lg:flex-row flex-col gap-8 mt-5 px-4 lg:h-[250px] shadow-lg rounded-lg p-5">
        <div data-aos="fade-left" data-aos-duration="1000">
            <img src={cover} className="rounded-lg  lg:h-[200px]" alt="" />
        </div>
        <div className="flex-1 space-y-3">
            <h3 className="text-4xl font-extrabold"  data-aos="fade-left"
    data-aos-duration="1300">{estate_title}</h3>
            <h3 className="text-2xl font-bold" data-aos="fade-left"
    data-aos-duration="1500">{segment_name}</h3>
            <div className=" space-y-4"  >
                <p className="font-bold text-[#c77dff] text-2xl mb-2" data-aos="fade-left"
    data-aos-duration="1800">{price}</p>
                <Link to={`/property/${id}`} ><button data-aos="fade-left"
    data-aos-duration="1800" className="btn bg-[#c77dff] text-white">View Property</button></Link>
              
            </div>
        </div>
    </div>
        
    );
};

export default FavoriteCard;