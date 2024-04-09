import { useContext, useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ContextData } from "../../Contex/Context";
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [toggle, setToggle] = useState(true);
    const { signIn, user, googleLogin} = useContext(ContextData);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password);
        e.target.reset();
    };

    const handleGoogleLogin=()=>{
        googleLogin()
    }

    useEffect(() => {
        if (user) {
            navigate(location.state ? location.state : '/'); 
        }
    }, [user, location.state, navigate]);

    return (
        <div className='flex justify-center items-center my-5 flex-col'>
            <h3 className="text-4xl my-5 font-bold">Login LuxeHaven</h3>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                <div className="card-body">
                    <form onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={`${toggle ? 'password' : 'text'}`} name="password" placeholder="password" className="input input-bordered" required />
                            <div onClick={() => setToggle(!toggle)} className="absolute right-2 top-2/4 p-1" aria-label="Toggle password visibility">
                                <button type="button">
                                    {toggle ? <HiEyeOff className="font-semibold text-2xl" /> : <AiFillEye className="font-semibold text-2xl" />}
                                </button>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#c77dff] font-bold text-xl text-[#f6fff8]">Login</button>
                        </div>
                        <p className="my-3">New here <Link to='/register' className="text-primary link-hover">Register now</Link></p>
                    </form>
                    <div className="divider">or</div>
                    <div className='flex justify-center gap-5'>
                        <button onClick={handleGoogleLogin}><img className='w-10' src="https://i.ibb.co/3ShjXGS/google.png" alt="google" border="0" /></button>
                        <button><img className='w-14' src="https://i.ibb.co/8Nwf9P6/githube.png" alt="github" border="0" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
