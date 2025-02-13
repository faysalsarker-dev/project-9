import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextData } from "../Contex/Context";



const Navber = () => {
    const { user, logOut, setLoading } = useContext(ContextData)

    const nav = <>
        <li><NavLink to='/' className={({ isActive }) =>
            isActive ? "mr-2 btn btn-ghost text-[#9d4edd] border-[#9d4edd] font-bold" : "mr-2 btn btn-ghost"
        } >Home</NavLink></li>
        <li><NavLink to='/updateprofile' className={({ isActive }) =>
            isActive ? "mr-2 btn btn-ghost text-[#9d4edd] border-[#9d4edd] font-bold" : "mr-2 btn btn-ghost"
        }>Update
            Profile</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "mr-2 btn btn-ghost text-[#9d4edd] border-[#9d4edd] font-bold" : "mr-2 btn btn-ghost"
        } to='/about'>About</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "mr-2 btn btn-ghost text-[#9d4edd] border-[#9d4edd] font-bold" : "mr-2 btn btn-ghost"
        } to='/PrivacyPolicy'>Privacy Policy</NavLink></li>
        {
            user && <li><NavLink className={({ isActive }) =>
                isActive ? "mr-2 btn btn-ghost text-[#9d4edd] border-[#9d4edd] font-bold" : "mr-2 btn btn-ghost"
            } to='/favorite'>Favorite</NavLink></li>
        }
    </>

    const handleLogOut = () => {
        logOut()
        setLoading(false)
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <a className="btn btn-ghost md:text-3xl  text-2xl text-[#9d4edd] font-extrabold">LuxeHaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>

                        <div className="tooltip tooltip-bottom z-40 " data-tip={`${user.displayName === null ? 'User name is not found' : user.displayName}`}>
                            <div className="avatar mr-2">
                                <div className=" w-10 rounded-full">
                                    <img src={user.photoURL ? user.photoURL : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} />
                                </div>
                            </div>

                        </div>

                        <button onClick={handleLogOut} className="btn bg-[#c77dff] text-white">Logout</button></> : <Link to='/login'><button className="btn bg-[#c77dff] text-white">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navber;

