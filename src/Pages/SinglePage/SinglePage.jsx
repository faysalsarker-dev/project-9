import { GiRapidshareArrow } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../Contex/Context";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

import 'animate.css';
import { Helmet } from "react-helmet-async";

const SinglePage = () => {
    const {AddToFavorite , favorite} = useContext(ContextData)
    const info = useLoaderData();
    const { id } = useParams();

    const property = info.find((pd) => pd.id == id);

    const { cover, estate_title, status, segment_name, description, area, location, facilities, price } = property;


    const [icon, setIcon] = useState(false)
    const addTofavorit = () => {
        setIcon(true)
        AddToFavorite(property)

    }

   useEffect(()=>{
    const iconvalue = favorite.find(pd=>pd.id===property.id)

    if(iconvalue){
        setIcon(true)
    }
   },[favorite,property.id])




    return (
        <div className="flex lg:flex-row flex-col gap-5 mt-5 px-4">
                <Helmet>
        <title>LuxeHaven | {segment_name}</title>
       
      </Helmet>
            <div className="flex-1" data-aos="fade-down"  data-aos-duration="1000">
                <img src={cover} className="rounded-lg" alt="" />
            </div>
            <div className="flex-1 space-y-3">
                <h3 className="text-4xl font-extrabold" data-aos="fade-left" data-aos-duration="1200">{estate_title}</h3>
                <h3 className="text-2xl font-bold" data-aos="fade-left" data-aos-duration="1400">{segment_name}</h3>
                <div className="flex gap-2 " data-aos="fade-left" data-aos-duration="1600">
                    <p className="flex items-center"><MdAttachMoney className="text-[#c77dff]" /> : {status}</p>
                    <p className="flex items-center"><GiRapidshareArrow className="text-[#c77dff]" /> : {area}</p>
                    <p className="flex items-center"><IoLocationSharp className="text-[#c77dff]" /> : {location}</p>
                </div>

                <>
                    <h5 className="font-bold" data-aos="fade-left" data-aos-duration="1500">Our facilities</h5>
                    <ol className="list-disc pl-6" data-aos="fade-left" data-aos-duration="1600">
                        {facilities.map((facility, idx) => <li key={idx}>{facility}</li>)}
                    </ol>
                </>

                <p  data-aos="fade-left" data-aos-duration="1700"><span className="font-semibold">Description: </span>{description}</p>
                <div className="flex gap-16 items-center" data-aos="fade-up" data-aos-duration="1900">
                    <p className="font-bold text-[#c77dff] text-2xl">{price}</p>
                    <div className="tooltip tooltip-bottom" data-tip="Add to favorit">
                        <button onClick={addTofavorit}>
                            {
                                icon ?
                                    <AiFillHeart className="text-4xl text-rose-600 " /> : <AiOutlineHeart className="text-4xl text-red-600 animate__flash" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
