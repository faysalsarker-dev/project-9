import { useContext } from "react";
import { ContextData } from "../../Contex/Context";
import FavoriteCard from "../../component/FavoriteCard/FavoriteCard";
import { Helmet } from "react-helmet-async";


const Favorite = () => {

    const {favorite}=useContext(ContextData);


    return (
      <div className="min-h-[90vh]">
            <Helmet>
        <title>LuxeHaven | Favorite</title>
       
      </Helmet>
          <div className="grid gap-5">
            {
                favorite.map(itam =><FavoriteCard key={itam.id} itam={itam}></FavoriteCard> )
            }





        </div>
      </div>
    );
};

export default Favorite;