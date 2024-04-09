import { GiRapidshareArrow } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext, useState } from "react";
import { ContextData } from "../../Contex/Context";

const SinglePage = () => {
    const {AddToFavorite} = useContext(ContextData)
    const info = useLoaderData();
    const { id } = useParams();

    const property = info.find((pd) => pd.id == id);

    const { cover, estate_title, status, segment_name, description, area, location, facilities, price } = property;


    const [icon, setIcon] = useState(false)
    const addTofavorit = () => {
        setIcon(true)
        AddToFavorite(property)
    }
    return (
        <div className="flex lg:flex-row flex-col gap-5 mt-5 px-4">
            <div className="flex-1">
                <img src={cover} className="rounded-lg" alt="" />
            </div>
            <div className="flex-1 space-y-3">
                <h3 className="text-4xl font-extrabold">{estate_title}</h3>
                <h3 className="text-2xl font-bold">{segment_name}</h3>
                <div className="flex gap-2">
                    <p className="flex items-center"><MdAttachMoney className="text-[#c77dff]" /> : {status}</p>
                    <p className="flex items-center"><GiRapidshareArrow className="text-[#c77dff]" /> : {area}</p>
                    <p className="flex items-center"><IoLocationSharp className="text-[#c77dff]" /> : {location}</p>
                </div>

                <>
                    <h5 className="font-bold">Our facilities</h5>
                    <ol className="list-disc pl-6">
                        {facilities.map((facility, idx) => <li key={idx}>{facility}</li>)}
                    </ol>
                </>

                <p><span className="font-semibold">Description: </span>{description}</p>
                <div className="flex gap-16 items-center">
                    <p className="font-bold text-[#c77dff] text-2xl">{price}</p>
                    <div className="tooltip tooltip-bottom" data-tip="Add to favorit">
                        <button onClick={addTofavorit}>
                            {
                                icon ?
                                    <AiFillHeart className="text-4xl text-rose-600" /> : <AiOutlineHeart className="text-4xl text-red-600" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
