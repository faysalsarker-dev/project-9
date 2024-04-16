/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ContextData } from "../Contex/Context";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Protector = ({ children }) => {
  const { user,loading } = useContext(ContextData);
  const location = useLocation();

if(loading){
  return <div className="flex justify-center items-center h-screen">
    <span className="loading loading-spinner loading-lg bg-[#9d4edd]"></span>
  </div>
}
  if (!user) {
    return <Navigate to="/login" state={location.pathname}/>;
  } else {
    return children;
  }
};

export default Protector;
