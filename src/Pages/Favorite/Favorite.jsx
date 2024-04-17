import { Helmet } from "react-helmet-async";
import FavoriteCard from "../../component/FavoriteCard/FavoriteCard";
import { toast } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { ContextData } from "../../Contex/Context";

export function Storage() {
  const pd = localStorage.getItem('favorite');
  return pd ? JSON.parse(pd) : [];
}

export function Save(obj) {
  const data = Storage();
  const checkData = data.find(item => item.id === obj.id);

  if (checkData) {
    toast.error("Already added to favorites");
  } else {
    data.push(obj);
    localStorage.setItem('favorite', JSON.stringify(data));
    toast.success('Successfully added to favorites');
  }
}

const Favorite = () => {
  const { setFavorite, favorite } = useContext(ContextData);

  useEffect(() => {
    const data = Storage();
    setFavorite(data); 
  }, [setFavorite]); 



  return (
    <div className="min-h-[90vh]">
      <Helmet>
        <title>LuxeHaven | Favorite</title>
      </Helmet>
      <div className="grid gap-5">
        {
            favorite.map((itam,idx)=> <FavoriteCard key={idx} itam={itam}></FavoriteCard>)
        }
      </div>
    </div>
  );
};

export default Favorite;
