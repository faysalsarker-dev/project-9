import { useContext } from "react";
import { ContextData } from "../../Contex/Context";
import FavoriteCard from "../../component/FavoriteCard/FavoriteCard";


const Favorite = () => {

    const {favorite}=useContext(ContextData);


    return (
        <div className="grid gap-5">
            {
                favorite.map(itam =><FavoriteCard key={itam.id} itam={itam}></FavoriteCard> )
            }





        </div>
    );
};

export default Favorite;